# Decision Theory · Lesson 2.1: Savage's framework

> ⏱ ~15 min · Module 2: Subjective probability, Savage, and the independence axiom · Builds on: [1.1 Acts, states, outcomes](01-01-acts-states-outcomes.md), [1.3 The vNM theorem and how utility is built](01-03-the-vnm-theorem-and-how-utility-is-built.md), [1.4 What a representation theorem shows](01-04-what-a-representation-theorem-shows.md) · Unlocks: [2.2 Probability from preference](02-02-probability-from-preference.md), [2.3 The Allais paradox and the sure-thing principle](02-03-the-allais-paradox-and-the-sure-thing-principle.md)

## Why this matters

The vNM theorem of [1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md) ranks lotteries, and a lottery arrives with its probabilities already printed on it. Real choices do not. Nobody hands a farmer the probability of drought. Leonard Savage's *The Foundations of Statistics* (1954) asks for less: only preferences over acts. From those it extracts a utility *and* a probability. This is the foundation of subjective Bayesianism, and it is the framework that Allais ([2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md)) and Ellsberg ([3.1](03-01-the-ellsberg-paradox.md)) attack.

## The idea

Go back to the decision table of [1.1](01-01-acts-states-outcomes.md). The rows are acts, the columns are states of the world, and each cell is a consequence. The move at the heart of [Savage's framework](../reference.md#savage-framework) is to say that an act *is* its row. Ordering the large stock for a street festival is nothing more than "10 if it rains, 50 if it is cloudy, 90 if it is sunny". Two acts with the same row are the same act.

Now watch an agent choose between rows. Suppose she prefers "a prize if it rains, nothing otherwise" to "the same prize if it is sunny, nothing otherwise". Then, whatever she says, she is behaving as if rain is more likely. Savage's postulates are the conditions under which these "more likely" judgments, read off her choices, line up into a single probability function. Under the same conditions, her ranking of consequences lines up into a utility function.

The principle carrying most of the weight is Savage's **sure-thing principle**. His own illustration, paraphrased: a businessman weighing a property purchase thinks the coming election matters. He asks himself what he would do if the Democrat won, and decides he would buy. He asks the same question for a Republican win, and decides he would buy then too. So he buys without waiting to learn the result. Whatever happens in a state where two acts give the same thing should not affect which act you prefer.

## The formal version

**Primitives.** $S$ is a set of **states**: complete descriptions of whatever the agent does not control. One state is true, and she does not know which. An **event** $E \subseteq S$ is a set of states. $C$ is a set of **consequences**: everything she cares about. An **act** is a function $f: S \to C$. The relation $\succsim$ ("at least as good as") ranks acts. In words: an act is a recipe saying what you get in each possible world, and preference ranks recipes.

Savage assumes that **every** function from $S$ to $C$ is an act the agent ranks. In particular, for each consequence $x$ there is a [constant act](../reference.md#constant-act) giving $x$ in every state. Write $x$ for it.

**Splicing.** For acts $f, h$ and an event $E$, let $f_E h$ be the act that agrees with $f$ on $E$ and with $h$ off $E$. An event $E$ is **null** if the agent never cares what happens on it: $f_E h \sim g_E h$ for all $f, g, h$. In words: a null event is one she treats as having no chance.

**The [Savage postulates](../reference.md#savage-postulates)** (numbering as in Savage and the SEP's "Decision Theory" entry):

- **P1, ordering.** $\succsim$ is complete and transitive. In words: the [1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md) recap, now applied to acts rather than lotteries.
- **P2, the [sure-thing principle](../reference.md#sure-thing-principle).** For all acts $f, g, h, h'$ and every event $E$,
$$f_E h \succsim g_E h \iff f_E h' \succsim g_E h'.$$
In words: if two acts agree off $E$, what they agree on there cannot change which you prefer.
- **P3, [state independence](../reference.md#state-independence)** (eventwise monotonicity). For every non-null $E$ and consequences $x, y$: $x_E h \succsim y_E h \iff x \succsim y$. In words: how you rank two consequences does not depend on which state they arrive in.
- **P4, comparative probability.** For consequences $x \succ y$ and $x' \succ y'$, and events $A, B$:
$$x_A y \succsim x_B y \iff x'_A y' \succsim x'_B y'.$$
In words: which event you would rather bet on does not depend on the prize. That is what lets "prefers the bet on $A$" mean "thinks $A$ more likely".
- **P5, non-triviality.** Some consequence is strictly preferred to some other. In words: she is not indifferent to everything.
- **P6, small-event continuity.** If $f \succ g$, then for any consequence $x$, $S$ can be cut into finitely many events so fine that changing $f$ or $g$ to $x$ on any one of them leaves $f \succ g$. In words: the world can be sliced into events too unlikely to matter, such as a long run of coin tosses coming up a particular way.
- **P7.** A dominance condition, needed only when there are infinitely many consequences. In words: if, given $E$, $f$ is at least as good as each consequence $g$ delivers on $E$, then given $E$ it is at least as good as $g$.

**[Representation theorem](../reference.md#representation-theorem)** (Savage). If P1-P7 hold, there is a unique probability measure $P$ on events and a utility $u: C \to \mathbb{R}$, unique up to positive affine transformation, such that
$$f \succsim g \iff \int_S u(f(s))\,dP(s) \ \ge\ \int_S u(g(s))\,dP(s).$$
In words: the agent chooses as if she had one definite [subjective probability](../reference.md#subjective-probability) for every event and maximized expected utility under it. For a finite table the integral is just $\sum_s P(s)\,u(f(s))$.

Uniqueness is the payoff. vNM's $u$ was unique up to $a u + b$ with $a > 0$ ([affine uniqueness](../reference.md#affine-uniqueness)), and so is Savage's. But $P$ is unique outright. P4 supplies the ranking "more likely than", P6 makes it fine enough to be numerical, and once events have probabilities, acts behave like vNM lotteries ([2.2](02-02-probability-from-preference.md) runs the elicitation step).

**Where the argument is weakest.** Three places, and each one is a target later in the course.

1. **The richness premise.** P1 demands rankings over *every* function from states to consequences, including the constant acts. Luce and Suppes (1965) objected that constant acts are often impossible: what is the act that delivers a pleasant afternoon in every state, including the state where a storm floods the town? Defenders treat such acts as hypothetical choices that fix the scale, much as a frictionless plane does in physics. Critics answer that a preference over an act no one could perform is no fact about the agent. On a constructivist reading of utility ([1.4](01-04-what-a-representation-theorem-shows.md)) that answer bites hardest.
2. **States must not depend on acts.** The framework treats the state as fixed whatever you do. When the act shifts the odds of a state, the [act-dependent states](../reference.md#act-dependent-states) problem of [1.1](01-01-acts-states-outcomes.md) returns, and the sure-thing reasoning fails. The businessman's purchase must not sway the election. Module 4 is this problem at full strength.
3. **P2 and P4 themselves.** Allais attacks P2 ([2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md)), and the Ellsberg choices violate it as well ([3.1](03-01-the-ellsberg-paradox.md)). Whether a representation theorem gives the postulates any normative force is [1.4](01-04-what-a-representation-theorem-shows.md)'s question, and it is not settled by the theorem.

## Picture

![Two act-by-state tables over the states Rain, Cloud and Sun. Pair 1: act f gives 10, 50, 90 and act g gives 30, 50, 60, with the shared Cloud column shaded blue; expected utilities 60 and 50. An arrow labelled change the shared column leads to Pair 2: act f prime gives 10, 0, 90 and act g prime gives 30, 0, 60, with the Cloud column shaded red; expected utilities 47.5 and 37.5. The caption notes probabilities one quarter, one quarter, one half, and that the sure-thing principle requires the ranking of f over g to carry over to f prime over g prime.](assets/02-01-fig1.svg)

The shaded column is the event on which the two acts agree. P2 says that only the unshaded cells may decide between them.

## Worked examples

**Example 1 (clean): the festival bakery.** States Rain, Cloud, Sun. Entries are utilities. Large order $f = (10, 50, 90)$; small order $g = (30, 50, 60)$. They agree on the event Cloud.

*P2.* Replace the shared Cloud entry 50 by 0 to get $f' = (10, 0, 90)$ and $g' = (30, 0, 60)$. P2 requires $f \succsim g \iff f' \succsim g'$.

*Expected utility* with $P = (\tfrac14, \tfrac14, \tfrac12)$:
$$\begin{aligned}
EU(f) &= \tfrac14(10) + \tfrac14(50) + \tfrac12(90) = 60,\\
EU(g) &= \tfrac14(30) + \tfrac14(50) + \tfrac12(60) = 50,\\
EU(f') &= 2.5 + 0 + 45 = 47.5,\\
EU(g') &= 7.5 + 0 + 30 = 37.5.
\end{aligned}$$
Both gaps are 10. That is no accident. For any $P$ and any $u$,
$$EU(f) - EU(g) = P(\text{Rain})\,[u(10) - u(30)] + P(\text{Sun})\,[u(90) - u(60)],$$
and the Cloud term cancels. So every expected-utility maximizer obeys P2. Here $f \succ g$ exactly when $30\,P(\text{Sun}) > 20\,P(\text{Rain})$. In words: P2 is the act-and-state version of vNM independence ([`grad-game-theory` 1.5](../../grad-game-theory/lessons/01-05-expected-utility-vnm-axioms.md)), and it is what lets EU add up state by state.

**Example 2 (hard): the ski voucher.** States Snow and No snow. Consequences: a 200-dollar ski-resort voucher, or 150 dollars cash. Given snow, Mia prefers the voucher. Given no snow, the resort shuts and she prefers the cash. Both events are non-null, so P3 fails: her ranking of the same two consequences flips with the state.

The standard repair is to describe consequences more finely: not "voucher" but "a ski day" in the snow state and "a useless voucher" in the other. Now her rankings no longer depend on the state, and P3 survives. But richness bites back. P1 now requires her to rank the constant act "a ski day in every state", which includes a ski day at a closed resort. Fine-grained consequences rescue P3 and multiply impossible acts. Coarse ones keep acts possible and break P3. That tension sits at the base of the framework. How it corrupts the probabilities you read off a person is [2.2](02-02-probability-from-preference.md)'s life-insurance problem.

## Watch out

- **You might think Savage assumes probabilities and proves EU.** It runs the other way: probability is an output of preference, which is why it is called *subjective*. vNM takes probabilities as given; Savage derives them.
- **You might think a three-state table is a Savage model.** P6 needs events of arbitrarily small probability, so $S$ must be infinite. A finite table, with a probability supplied, is an illustration of the representation, not a case the theorem covers.
- **You might think P2 forbids changing your mind when you learn which event happened.** It is a constraint on present preferences between acts. Its link to choice over time is [1.4](01-04-what-a-representation-theorem-shows.md)'s dynamic-consistency argument.

## One-liner

> Treat acts as rows of consequences across states, and if the rankings obey seven postulates, a unique probability and an affine-unique utility fall out; the price is ranking rows nobody could ever choose.

## Problems

**P1 (🟢) *(Formal (a)–(b) · Formal and Exegetical (c).)*** A drug firm awaits a regulator's ruling: Approve, Delay or Reject. Entries are utilities. Acts: $f = (100, 40, 0)$, $g = (60, 60, 0)$, $f' = (100, 40, 50)$, $g' = (60, 60, 50)$.

(a) With $P = (0.3, 0.3, 0.4)$, compute the expected utility of all four acts.
(b) Still using these utilities, find every probability vector $(p_1, p_2, p_3)$ for which $f \succ g$ under expected utility.
(c) Dana chooses $f$ over $g$ and $g'$ over $f'$. Prove that no probability $P$ and utility $u$ (over the consequences 0, 40, 50, 60, 100) make both choices maximize expected utility, and name the Savage postulate she violates.

**P2 (🟡) *(Exegetical (a) · Formal (b).)*** Three invented agents.

- **Asha** prefers an umbrella to 15 dollars if it rains tomorrow, and 15 dollars to the umbrella if it stays dry. Both events are non-null for her.
- **Ben** prefers "10 dollars if the Harbour team wins, else nothing" to "10 dollars if the Valley team wins, else nothing", but prefers "1,000 dollars if the Valley team wins, else nothing" to "1,000 dollars if the Harbour team wins, else nothing". He prefers more money to less.
- **Cleo**, offered three job contracts, prefers $A$ to $B$, $B$ to $C$, and $C$ to $A$.

(a) Name the postulate each agent violates, one line each.
(b) Prove that no probability $P$ and increasing utility $u$ make both of Ben's choices maximize expected utility.

**P3 (🔴, optional) *(Exegetical (a) · Evaluative (b).)*** Two invented theorists. Ada: "Savage's theorem shows that anyone whose preferences are coherent has precise credences. Impossible constant acts are a harmless idealization, like a frictionless plane." Ravi: "A preference over an act no one could perform records nothing about anyone. Credences derived from it are fictions."

(a) Name the single premise they split on.
(b) Say what argument or evidence would move each side. 150 words or fewer for (a) and (b) together.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Formal and Exegetical (c), all strict.)*

(a)
$$\begin{aligned}
EU(f) &= 0.3(100) + 0.3(40) + 0.4(0) = 42,\\
EU(g) &= 0.3(60) + 0.3(60) + 0.4(0) = 36,\\
EU(f') &= 30 + 12 + 0.4(50) = 62,\\
EU(g') &= 18 + 18 + 20 = 56.
\end{aligned}$$
So $f \succ g$ and $f' \succ g'$, both by 6.

(b) $EU(f) - EU(g) = p_1(100 - 60) + p_2(40 - 60) + p_3(0 - 0) = 40p_1 - 20p_2$. So $f \succ g$ exactly when $p_2 < 2p_1$, with $p_3 = 1 - p_1 - p_2$ free.

(c) For any $P$ and $u$,
$$\begin{aligned}
EU(f) - EU(g) &= p_1[u(100) - u(60)] + p_2[u(40) - u(60)],\\
EU(f') - EU(g') &= p_1[u(100) - u(60)] + p_2[u(40) - u(60)],
\end{aligned}$$
because the Reject terms, $u(0)$ in the first pair and $u(50)$ in the second, cancel within each pair. The two differences are identical, so they cannot have opposite signs. $f \succ g$ needs the first positive, and $g' \succ f'$ needs the second negative. Contradiction. The postulate is **P2, the sure-thing principle**: the pairs differ only in the consequence they share on the event Reject.

**Must hit, strict (c):** the Reject column cancels within each pair, so both differences are the same expression for every $P$ and $u$; name P2.

**Wrong turns:** proving the result only for $P = (0.3, 0.3, 0.4)$ or only for $u$ equal to money; (c) asks about every $P$ and $u$. Naming P3: no consequence's ranking changes across states here.

---

**P2** *(Exegetical (a) · Formal (b), both strict.)*

**Must hit, strict (a):**

- Asha: **P3**, state independence. Her ranking of the same two consequences flips between non-null events.
- Ben: **P4**, comparative probability. Which event he prefers to bet on depends on the size of the prize.
- Cleo: **P1**, ordering, through its transitivity clause. Her strict preferences cycle.

(b) Let $x > 0$ be the prize, $A$ = Harbour wins, $B$ = Valley wins. Then
$$\begin{aligned}
EU(x_A 0) - EU(x_B 0) &= [P(A)u(x) + (1 - P(A))u(0)]\\
&\quad - [P(B)u(x) + (1 - P(B))u(0)]\\
&= [P(A) - P(B)]\,[u(x) - u(0)].
\end{aligned}$$
Since $u$ is increasing, $u(x) - u(0) > 0$ for both $x = 10$ and $x = 1{,}000$. So the sign of the difference is the sign of $P(A) - P(B)$ for both prizes. The 10-dollar choice needs $P(A) > P(B)$ and the 1,000-dollar choice needs $P(B) > P(A)$. Contradiction.

**Wrong turns:** calling Asha's case a P2 violation; nothing is held fixed on a common event, it is her ranking of consequences that moves. Calling Ben irrational for risk aversion: risk attitude lives in $u$, and the factorization shows no curvature of $u$ can rescue him.

---

**P3** *(Exegetical (a), strict · Evaluative (b), any verdict.)*

**Must hit, strict (a):** the premise is Savage's richness assumption: that the agent has determinate preferences over every function from states to consequences, constant acts included, and that those preferences are facts about her. Both can grant that P1-P7, *if* satisfied, imply a unique $P$.

**Must hit, any verdict (b):**

- What would move Ada: an argument that preferences over impossible acts cannot even be interpreted as dispositions, or that the derived $P$ changes with how the fictitious acts are filled in.
- What would move Ravi: an argument that only a small, choosable subset of acts is needed to pin down $P$, or that the hypothetical rankings are stable, answerable counterfactuals ("if you were offered this, you would take it").
- Either side may cite Jeffrey's framework ([4.2](04-02-evidential-decision-theory.md)), which drops the need for constant acts, but must say it does not deliver a unique probability the way Savage's does.

**Wrong turns:** making the crux "whether people are coherent"; both assume a coherent agent. Making it P2 or Allais; neither side mentions independence.

**Model answer, one of several:** (a) They split on the richness premise: that a coherent agent has real preferences over every act, including constant acts no one could perform. Both accept that the theorem's postulates, once met, fix a unique probability. (b) Ada would be moved by showing that the derived probability depends on arbitrary choices about how the impossible acts are ranked, so the "idealization" is doing work no real preference does. Ravi would be moved by a result that only acts the agent could actually choose are needed to fix the probability, or by evidence that people give stable, consistent answers about hypothetical acts.

</details>

## Flashback

**From Lesson [1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md) (The vNM theorem and how utility is built):** *(Formal (a)–(b) · Exegetical (c).)* Omar's prizes are 0, 30, 60 and 90 dollars. He is indifferent between 60 dollars for sure and a 0.8 chance of 90 dollars (else 0). He is also indifferent between 30 dollars for sure and a 50–50 gamble between 60 dollars and nothing.

(a) Normalize $u(0) = 0$, $u(90) = 1$. Find $u(60)$ and $u(30)$.
(b) Compare $L_1$ (90, 30 or 0 dollars with probabilities 0.25, 0.5, 0.25) with $L_2$ (60 or 30 dollars, 50–50). For each, give the chance $p$ of 90 dollars (else 0) that he finds exactly as good.
(c) Omar later adds that 30 dollars for sure is exactly as good as a 0.5 chance of 90 dollars (else 0). Show that this cannot be squared with his first two answers under the vNM axioms, and name the premises of the construction he must give up at least one of. Two sentences for the naming.

<details>
<summary>Solution</summary>

(a) $u(60) = 0.8$ by Step 1. The second answer does not calibrate 30 dollars against 90 directly, so substitute: by Step 2, swap the 60 inside the 50–50 gamble for its standard gamble $G_{0.8}$, and by reduction the result gives 90 dollars with probability $0.5 \times 0.8 = 0.4$. So $u(30) = 0.5(0.8) + 0.5(0) = 0.4$.

(b)

$$\begin{aligned} U(L_1) &= 0.25(1) + 0.5(0.4) + 0.25(0) = 0.45,\\ U(L_2) &= 0.5(0.8) + 0.5(0.4) = 0.6. \end{aligned}$$

So $L_2 \succ L_1$, with $L_1 \sim G_{0.45}$ and $L_2 \sim G_{0.6}$.

(c) His first two answers give 30 dollars $\sim$ the 50–50 gamble $\sim G_{0.4}$, by independence and reduction as in (a). The new answer gives 30 dollars $\sim G_{0.5}$. By transitivity $G_{0.4} \sim G_{0.5}$, which contradicts monotonicity: a 0.5 chance of the best prize must beat a 0.4 chance.

**Must hit, strict (c):** the chain to $G_{0.4} \sim G_{0.5}$ and the clash with monotonicity; the premises are independence (the Step 2 swap of 60 dollars for $G_{0.8}$, which also underwrites monotonicity), reduction of compound lotteries, and transitivity. Giving up any one blocks the derivation; the vNM axioms alone cannot say which.

**Wrong turns:** taking $u(30) = 0.5$ from the first-stage odds of the gamble and ignoring that its good branch pays 60 dollars, not 90. Concluding that the third answer is the wrong one: the axioms show only that the three answers cannot all stand.

</details>

## Connections

- **Backward:** the decision table and act-dependent states are [1.1](01-01-acts-states-outcomes.md)'s. The utility half of Savage's theorem is the vNM construction of [1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md), now applied to acts. Whether a representation has normative force is [1.4](01-04-what-a-representation-theorem-shows.md)'s question.
- **Forward:** [2.2](02-02-probability-from-preference.md) reads a credence off preferences over bets and shows how a P3 failure distorts it. [2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md) sets P2 against Allais, [3.1](03-01-the-ellsberg-paradox.md) sets it against Ellsberg, and [4.2](04-02-evidential-decision-theory.md) replaces Savage's acts with Jeffrey's propositions.
- **Sideways:** P2 is the act-based twin of vNM independence in [`grad-game-theory` 1.5](../../grad-game-theory/lessons/01-05-expected-utility-vnm-axioms.md). Savage's probability is the subjective prior of Bayesian statistics, updated by the conditioning of [`prob-stat-refresher` 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md). [`epistemology`](../../epistemology/syllabus.md) Module 5 defends the same probabilities from the belief side, with Dutch books instead of preferences.
