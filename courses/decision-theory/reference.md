# Decision Theory · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The course is the philosophy of rational choice with the math switched on: what expected-utility
theory claims, why anyone should believe it, where it breaks, and what happens when the same
machinery aggregates people, compares populations and hedges across moral theories. It takes no side.
Nearly every dispute reduces to one axiom or premise that someone must give up, and the card is built
to find it fast: each entry gives the position, the lessons' skeleton where there is one, and the
premise critics attack; [Which axiom gives](#which-axiom-gives) maps every paradox to its axiom; the
[Formulas](#formulas-and-arithmetic) section has every quantity the lessons compute. Read the
[Notation warnings](#notation-warnings) before computing: $V$, $U$, $p$ and $q$ change meaning between
modules. Where the build's checks corrected the syllabus, the card follows the lessons
([Conventions](#conventions)).

## Terms

Technical vocabulary in first-appearance order, glossed as the lessons gloss it. Terms with a full
entry below link to it.

| Term | Means | First used |
|---|---|---|
| [decision matrix](#decision-matrix): acts, states, outcomes | rows you might choose, columns the world might be, cells scored $u_{ij}$ | [1.1](lessons/01-01-acts-states-outcomes.md) |
| [strict / weak dominance](#dominance) | better in every column / never worse and better somewhere | [1.1](lessons/01-01-acts-states-outcomes.md) |
| act-independent / [act-dependent states](#act-dependent-states) | $P(s\mid a)=P(s)$ / your act shifts the columns' odds | [1.1](lessons/01-01-acts-states-outcomes.md) |
| partition problem | dominance can hold on one cut of states and fail on another | [1.1](lessons/01-01-acts-states-outcomes.md) |
| [dependency hypothesis](#dependency-hypothesis) | a state fixing what each act would bring about | [1.1](lessons/01-01-acts-states-outcomes.md) |
| lottery $L$ | outcomes $x_i$ with probabilities $p_i$ | [1.2](lessons/01-02-from-expected-value-to-expected-utility.md) |
| [expected value](#expected-value) / [expected utility](#expected-utility) | average of payoffs / of their utilities | [1.2](lessons/01-02-from-expected-value-to-expected-utility.md) |
| [certainty equivalent](#certainty-equivalent) | the sure amount worth as much as the lottery | [1.2](lessons/01-02-from-expected-value-to-expected-utility.md) |
| [St Petersburg](#st-petersburg-game) / [super-Petersburg](#super-petersburg-game) game | infinite-EV coin game / one built to beat any unbounded $u$ | [1.2](lessons/01-02-from-expected-value-to-expected-utility.md) |
| [bounded utility](#bounded-utility) | a ceiling $B$ on $u$ | [1.2](lessons/01-02-from-expected-value-to-expected-utility.md) |
| [standard gamble](#standard-gamble) $G_p$ | best prize with probability $p$, else worst | [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md) |
| [reduction of compound lotteries](#reduction-of-compound-lotteries) | two-stage lottery = one-stage with the same final odds | [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md) |
| [cardinal utility](#cardinal-utility), [affine uniqueness](#affine-uniqueness) | meaningful up to $au+c$, $a>0$ | [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md) |
| zero-one rule | each person's best set to 1, worst to 0: a further premise | [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md) |
| [representation theorem](#representation-theorem) | axioms on preference hold iff some numbers represent it | [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md) |
| [realism / constructivism about utility](#realism-and-constructivism-about-utility) | utility explains preference / summarizes it | [1.4](lessons/01-04-what-a-representation-theorem-shows.md) |
| [money pump](#money-pump) | cyclic preferences plus a fee per swap | [1.4](lessons/01-04-what-a-representation-theorem-shows.md) |
| consequentialism (dynamic) | at a node only what can still happen matters | [1.4](lessons/01-04-what-a-representation-theorem-shows.md) |
| [myopic / sophisticated / resolute](#myopic-sophisticated-and-resolute-choice) | choose afresh / foresee and backward-induct / follow the plan | [1.4](lessons/01-04-what-a-representation-theorem-shows.md) |
| [Savage act](#savage-framework) $f:S\to C$; splice $f_Eh$; null event | a row as a function / agree with $f$ on $E$, $h$ off it / treated as no chance | [2.1](lessons/02-01-savages-framework.md) |
| [constant act](#constant-act) | same consequence in every state | [2.1](lessons/02-01-savages-framework.md) |
| P1-P7, [sure-thing principle](#sure-thing-principle), [state independence](#state-independence) | [Savage postulates](#savage-postulates) | [2.1](lessons/02-01-savages-framework.md) |
| [subjective probability](#subjective-probability), [qualitative probability](#qualitative-probability) | credence read off bets / a "more likely than" ordering | [2.1](lessons/02-01-savages-framework.md) |
| ethically neutral proposition | one the agent does not care about for its own sake ([Ramsey](#ramseys-betting-method)) | [2.2](lessons/02-02-probability-from-preference.md) |
| [state-dependent utility](#state-dependent-utility) $\lambda_s$ | money worth more or less in some states | [2.2](lessons/02-02-probability-from-preference.md) |
| grand / [small worlds](#small-worlds) | states settling everything / the coarse states we model | [2.2](lessons/02-02-probability-from-preference.md) |
| common consequence / [common ratio](#common-ratio-effect) | shared column / both chances scaled down | [2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md) |
| [regret / disappointment](#regret-and-disappointment) | vs the rejected act / vs your own gamble's expectation | [2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md) |
| [risk function](#risk-function) $r$, [REU](#risk-weighted-expected-utility) | weight on "this or better"; Buchak's model | [2.4](lessons/02-04-risk-beyond-curvature.md) |
| comonotonic acts | acts ranking the states in the same order | [2.4](lessons/02-04-risk-beyond-curvature.md) |
| [rank-dependent utility](#rank-dependent-utility), [prospect theory](#prospect-theory) | Quiggin's family; Kahneman and Tversky's description | [2.4](lessons/02-04-risk-beyond-curvature.md) |
| reference point, loss aversion, probability weighting | prospect theory's three ingredients | [2.4](lessons/02-04-risk-beyond-curvature.md) |
| ambiguity, [ambiguity aversion](#ambiguity-aversion) | chances resting on thin or conflicting evidence; preferring known chances | [3.1](lessons/03-01-the-ellsberg-paradox.md) |
| [risk / uncertainty](#risk-and-uncertainty) | Knight: measurable / unmeasurable | [3.1](lessons/03-01-the-ellsberg-paradox.md) |
| [weight of evidence](#weight-of-evidence) | Keynes: how much evidence backs a probability | [3.1](lessons/03-01-the-ellsberg-paradox.md) |
| set of priors $C$, [imprecise credence](#imprecise-credence) | the probabilities your evidence allows | [3.2](lessons/03-02-models-of-ambiguity.md) |
| certainty independence, uncertainty aversion | maxmin EU's replacements for independence | [3.2](lessons/03-02-models-of-ambiguity.md) |
| E-admissibility | Levi: permit any act best under some $P\in C$ | [3.2](lessons/03-02-models-of-ambiguity.md) |
| prior-by-prior updating; [dynamic inconsistency](#dynamic-inconsistency) | Bayes on each member of $C$; plan and choice come apart | [3.2](lessons/03-02-models-of-ambiguity.md) |
| ignorance | states listed, no probability or set of them | [3.3](lessons/03-03-decisions-under-ignorance.md) |
| optimism index $\alpha$ | Hurwicz's weight on the best case | [3.3](lessons/03-03-decisions-under-ignorance.md) |
| principle of insufficient reason | equal probabilities for states ([Laplace](#laplace-rule)) | [3.3](lessons/03-03-decisions-under-ignorance.md) |
| regret $r_{ij}$ | shortfall from the column best ([minimax regret](#minimax-regret)) | [3.3](lessons/03-03-decisions-under-ignorance.md) |
| row adjunction, column linearity, column duplication, convexity | the four [Milnor axioms](#milnor-axioms) that separate the rules | [3.3](lessons/03-03-decisions-under-ignorance.md) |
| veil of ignorance; [equiprobability](#equiprobability-model) | choosing rules without knowing who you are; equal chance of being anyone | [3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md) |
| leximin, primary goods | maximin with ties broken by the next-worst; Rawls's currency | [3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md) |
| CRRA $\eta$, power mean $M_r$ | risk aversion over income; the CE of an equal-shares society | [3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md) |
| one-box / two-box; $\Delta$ | [Newcomb](#newcombs-problem)'s acts; how much one-boxing raises credence the box is full | [4.1](lessons/04-01-newcombs-problem.md) |
| desirability $V$ | Jeffrey's news value ([EDT](#evidential-decision-theory)) | [4.2](lessons/04-02-evidential-decision-theory.md) |
| [partition invariance](#partition-invariance) | same value on every cut of states | [4.2](lessons/04-02-evidential-decision-theory.md) |
| managing the news | Lewis's charge against EDT | [4.2](lessons/04-02-evidential-decision-theory.md) |
| screening off, [tickle](#tickle-defence), meta-tickle | known urge makes the act no further evidence | [4.2](lessons/04-02-evidential-decision-theory.md) |
| causal value $U$; imaging $P^A$; $A\mathbin{\Box\!\!\to}S$ | [CDT](#causal-decision-theory)'s value; Joyce's supposition; the counterfactual | [4.3](lessons/04-03-causal-decision-theory.md) |
| [ratifiable](#ratifiability) | still best once you have decided on it | [4.4](lessons/04-04-hard-cases-for-both.md) |
| [decision instability](#decision-instability), deliberational CDT | every act makes another look better; credences updated while deliberating | [4.4](lessons/04-04-hard-cases-for-both.md) |
| [functional decision theory](#xor-blackmail-and-functional-decision-theory) | choose the output of the procedure the predictor models | [4.4](lessons/04-04-hard-cases-for-both.md) |
| [Pareto indifference](#pareto-indifference), strong Pareto | unanimous indifference / no one worse, someone better | [5.1](lessons/05-01-harsanyis-aggregation-theorem.md) |
| [social welfare function](#social-welfare-function) $W$ | a number ranking social outcomes | [5.1](lessons/05-01-harsanyis-aggregation-theorem.md) |
| CNC, OLC, CUC, CFC, RFC | Sen's [informational bases](#informational-bases) | [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md) |
| extended preferences | "I'd rather be her in her situation than him in his" | [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md) |
| [prioritarianism](#prioritarianism); ex ante / [ex post](#ex-ante-and-ex-post-pareto) | concave transform; priority to prospects / to outcomes | [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md) |
| neutral level | welfare 0: a life neither worth living nor worth avoiding | [5.3](lessons/05-03-population-ethics-total-and-average.md) |
| [total](#total-view) / [average](#average-view) view | compare $T$ / compare $\bar w$ | [5.3](lessons/05-03-population-ethics-total-and-average.md) |
| hell case, Egyptology objection | the average view's two embarrassments | [5.3](lessons/05-03-population-ethics-total-and-average.md) |
| negative addition, separability | principles the total view keeps and the average view drops | [5.3](lessons/05-03-population-ethics-total-and-average.md) |
| A, A+, B, Z | Parfit's populations in the [mere addition paradox](#mere-addition-paradox) | [5.4](lessons/05-04-population-ethics-escape-routes.md) |
| critical level $c$ | [critical-level view](#critical-level-view)'s threshold | [5.4](lessons/05-04-population-ethics-escape-routes.md) |
| narrow / wide [person-affecting](#person-affecting-views) | people in both outcomes / whoever would exist | [5.4](lessons/05-04-population-ethics-escape-routes.md) |
| $W$, $A$; $G$, $\neg G$ | [Pascal's wager](#pascals-wager)'s acts and states | [6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md) |
| dominating expectation | Hacking's name for the infinite-prize form | [6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md) |
| [fanaticism](#fanaticism), [Minimal Tradeoffs](#minimal-tradeoffs) | tiny chances always outweighable; a slightly lower chance always buyable | [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md) |
| Nicolausian discounting | [probability discounting](#probability-discounting) | [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md) |
| choiceworthiness $CW_i$; MFT; MEC | how strongly $T_i$ favours an option; [my favourite theory](#my-favourite-theory); [maximize expected choiceworthiness](#expected-choiceworthiness) | [6.3](lessons/06-03-moral-uncertainty.md) |
| exchange rate $k$ | [intertheoretic comparison](#intertheoretic-comparison) | [6.3](lessons/06-03-moral-uncertainty.md) |
| probabiliorism, compensationism | manualist cousins of MFT and MEC | [6.3](lessons/06-03-moral-uncertainty.md) |

## Notation warnings

### V and U

**$V$ and $U$ are not stable names for "value".**

| Where | $U$ means | $V$ means |
|---|---|---|
| [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md) | vNM expected utility $U(L)=\sum p_iu(x_i)$ | Fern's lotteries under the rescaled $v=40u-10$ |
| [3.2](lessons/03-02-models-of-ambiguity.md) | | maxmin value $V(f)$; $V_\alpha$ alpha-maxmin |
| [3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md) | | $V_H$ Harsanyi's average, $V_R$ Rawls's minimum |
| **Module 4** ([4.2](lessons/04-02-evidential-decision-theory.md)-[4.4](lessons/04-04-hard-cases-for-both.md)) | **causal** value $\sum_KP(K)u(A,K)$; $U_A(B)$ ratification value | **evidential** value (Jeffrey's desirability) $\sum_SP(S\mid A)u(A,S)$ |
| [5.4](lessons/05-04-population-ethics-escape-routes.md) | | $V_c$ critical-level value; $V=g(n)\bar u$ variable value |

In Module 4, read $V$ as "news" and $U$ as "doing". 4.1 writes plain $EU$ for the act-conditional sum,
which is EDT's $V$.

### p and q

**$p$ is a lottery probability in Modules 1-3, a reliability in Module 4, a credence in God in 6.1.**

| Symbol | Where | Means |
|---|---|---|
| $p_i$, $p$ | 1.2-2.4 | probability of an outcome in a lottery; $G_p$ the standard gamble |
| $p$ | [4.1](lessons/04-01-newcombs-problem.md), [4.3](lessons/04-03-causal-decision-theory.md) | **predictor reliability**, $P(F\mid\text{One})=P(E\mid\text{Two})$, assumed equal across acts; not the track record |
| $p$ | [4.4](lessons/04-04-hard-cases-for-both.md) | probability Death is wherever you go |
| $p$ | [6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md) | credence that God exists |
| $q$ | [4.3](lessons/04-03-causal-decision-theory.md) | **credence the box is already full** (CDT's unconditional credence) |
| $q$, $q_{\text{press}}$ | [4.4](lessons/04-04-hard-cases-for-both.md) | credence you are a psychopath; the same given pressing |
| $c$ | [4.4](lessons/04-04-hard-cases-for-both.md) / [5.4](lessons/05-04-population-ethics-escape-routes.md) / [6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md), [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md) | credence you go to Damascus / critical level / cost of a believing life, the mugger's demand |
| $r$ | [2.4](lessons/02-04-risk-beyond-curvature.md) / [3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md) / [4.4](lessons/04-04-hard-cases-for-both.md) / [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md) | risk function / power-mean order $1-\eta$ / credence in termites / Minimal Tradeoffs ratio |
| $\alpha$ | [1.4](lessons/01-04-what-a-representation-theorem-shows.md), [2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md) / [3.2](lessons/03-02-models-of-ambiguity.md) / [3.3](lessons/03-03-decisions-under-ignorance.md) | mixture weight / weight on the worst case / Hurwicz weight on the *best* case |
| $\eta$ | [3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md) / [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md) | relative risk aversion over income / inequality aversion in $f_\eta$: the same family, by design |
| $\varepsilon$ | [1.4](lessons/01-04-what-a-representation-theorem-shows.md) / [5.3](lessons/05-03-population-ethics-total-and-average.md) / [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md) | money-pump fee / a welfare level barely worth living / a tiny credence |

Note that $\alpha$ is a weight on pessimism in alpha-maxmin and on optimism in Hurwicz.

### Averages and populations

**In 5.3 the average is $\bar w$, not $A$, because $A$ names a population** (A, A+, B, Z in 5.3-5.4).
5.4 writes welfare $u_i$ and the average $\bar u$. $A$ is also an act in Newcomb-free contexts (Allais
gamble A, 3.3's programme A, 6.1's "wager against", 6.3's option A): read it from the lesson.

### Utility normalizations

| Lesson | Normalization |
|---|---|
| [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md) | $u(w)=0$, $u(b)=1$ (worst and best prize) |
| [2.2](lessons/02-02-probability-from-preference.md) | $u(0)=0$, $u(400)=1$ |
| [2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md), [2.4](lessons/02-04-risk-beyond-curvature.md) | $u_0=0$, $u_2=1$, $u_6=v$ (dollars in thousands) |
| [3.1](lessons/03-01-the-ellsberg-paradox.md), [3.2](lessons/03-02-models-of-ambiguity.md) | a winning bet pays 1 util, so values are chances of winning |
| Module 4 | money is utility (linear) |
| [5.1](lessons/05-01-harsanyis-aggregation-theorem.md) | each person's best 1, worst 0 (and why that settles nothing) |
| [5.3](lessons/05-03-population-ethics-total-and-average.md) | 0 is the neutral level |

## The discipline

### Three kinds of claim

**Sort every claim before arguing with it.** A descriptive claim is settled by what people choose; a
formal claim by proof; a normative claim by argument about how one should choose. 1.2 introduces the
split with St Petersburg, and nearly every Watch-out trap is a slide between kinds.

| Kind | Settled by | Course examples |
|---|---|---|
| **Descriptive** | experiment, observation | People will not pay much for St Petersburg ([1.2](lessons/01-02-from-expected-value-to-expected-utility.md)). Most subjects choose A and D ([2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md)). Many, not all, prefer the known urn twice ([3.1](lessons/03-01-the-ellsberg-paradox.md)). Prospect theory's loss aversion ([2.4](lessons/02-04-risk-beyond-curvature.md)). |
| **Formal** | proof, computation | A suitably concave $u$ prices St Petersburg finitely ([1.2](lessons/01-02-from-expected-value-to-expected-utility.md)). The vNM and Savage theorems ([1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md), [2.1](lessons/02-01-savages-framework.md)). Allais violates independence ([2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md)). Milnor's theorems ([3.3](lessons/03-03-decisions-under-ignorance.md)). Harsanyi's theorem ([5.1](lessons/05-01-harsanyis-aggregation-theorem.md)). The repugnant conclusion follows from the total view ([5.3](lessons/05-03-population-ethics-total-and-average.md)). |
| **Normative** | argument about how one should choose | Rational agents obey the axioms ([1.4](lessons/01-04-what-a-representation-theorem-shows.md)). The Allais pattern is a mistake ([2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md)). Ambiguity aversion is irrational ([3.2](lessons/03-02-models-of-ambiguity.md)). One box ([4.1](lessons/04-01-newcombs-problem.md)). Society should maximize the sum ([5.1](lessons/05-01-harsanyis-aggregation-theorem.md)). The repugnant conclusion is false ([5.4](lessons/05-04-population-ethics-escape-routes.md)). |

- **The representation theorem's three readings** (descriptive, normative, interpretive) are this split
  applied to one theorem ([1.4](lessons/01-04-what-a-representation-theorem-shows.md)).
- **Rank dependence is formal, prospect theory descriptive, REU normative** ([2.4](lessons/02-04-risk-beyond-curvature.md)).
- **A descriptive refutation never settles a normative claim:** a normative theory survives every
  violation by calling it a mistake.

### Which axiom gives

**Each paradox or dispute of the course, the axiom or premise at stake, and who gives it up.**

| Paradox or dispute | Axiom or premise at stake | Who gives it up |
|---|---|---|
| Rehearsal, Newcomb dominance ([1.1](lessons/01-01-acts-states-outcomes.md), [4.1](lessons/04-01-newcombs-problem.md)) | dominance premise 1: states independent of the act | one-boxer (reads it evidentially); the rehearsal argument fails for everyone |
| St Petersburg, Menger ([1.2](lessons/01-02-from-expected-value-to-expected-utility.md)) | unbounded utility vs a finite value for every lottery | bounded theorist gives up unboundedness; unbounded theorist gives up finite values |
| Money pump ([1.4](lessons/01-04-what-a-representation-theorem-shows.md)) | transitivity, or myopia | the intransitive agent who looks ahead denies myopia |
| Sequential choice ([1.4](lessons/01-04-what-a-representation-theorem-shows.md)) | reduction, consequentialism, dynamic consistency | myopic: consistency; sophisticated: pays for commitment; resolute (McClennen), Machina: consequentialism |
| Life insurance ([2.2](lessons/02-02-probability-from-preference.md)) | state independence (P3) | the realist about credence, or redescription at the cost of incoherent acts |
| Allais ([2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md), [2.4](lessons/02-04-risk-beyond-curvature.md)) | sure-thing principle / independence | Allais, Buchak (REU keeps a comonotonic version); disappointment theorists keep P2 by redescribing outcomes; regret theory gives up transitivity |
| Ellsberg ([3.1](lessons/03-01-the-ellsberg-paradox.md), [3.2](lessons/03-02-models-of-ambiguity.md)) | sure-thing principle; a single prior | maxmin EU (keeps certainty independence); Savage side gives up the pattern |
| Refusing free information ([3.2](lessons/03-02-models-of-ambiguity.md)) | ambiguity aversion, prior-by-prior updating, consequentialism | sophisticated, resolute, or another updating rule; Gilboa-Postlewaite-Schmeidler reject Savage's axioms as the standard |
| Rules under ignorance ([3.3](lessons/03-03-decisions-under-ignorance.md)) | Milnor's conditions | Laplace: column duplication; maximin: column linearity; Hurwicz: column linearity and convexity; minimax regret: row adjunction |
| Rawls vs Harsanyi ([3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md)) | equiprobability (premise 2); cross-person comparability (premise 4); vNM continuity | Rawls denies 2 and 4, and maximin breaks continuity; Harsanyi's Laplace breaks column duplication |
| Smoking lesion ([4.2](lessons/04-02-evidential-decision-theory.md), [4.3](lessons/04-03-causal-decision-theory.md)) | "abstaining to improve news is irrational" (premise 4) / premise 2 for the agent | naive EDT abstains; the tickle defence denies premise 2 and two-boxes in Newcomb |
| Newcomb ([4.1](lessons/04-01-newcombs-problem.md)-[4.3](lessons/04-03-causal-decision-theory.md)) | dominance over causally fixed states vs act-conditional weighting | EDT gives up the first; CDT the second |
| Psychopath button ([4.4](lessons/04-04-hard-cases-for-both.md)) | stability of choice | plain CDT gives up stability; deliberational CDT gives up always naming an act |
| XOR blackmail ([4.4](lessons/04-04-hard-cases-for-both.md)) | causal dominance | EDT (repaired by ratifiability) |
| Death in Damascus ([4.4](lessons/04-04-hard-cases-for-both.md)) | that a rule outputs a pure act | deliberational CDT ends in a credence |
| Harsanyi to utilitarianism ([5.1](lessons/05-01-harsanyis-aggregation-theorem.md)) | social vNM (2); equal weights on comparable scales (5); vNM utility is welfare (6) | egalitarians and Scanlon deny 2; Sen denies 6 |
| Diamond's coin flip ([5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md)) | social EU, ex ante Pareto, fair chances: keep two | Diamond and $W_{\text{ante}}$ give up social independence; $W_{\text{post}}$ ex ante Pareto; Harsanyi fair chances |
| Comparability ([5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md)) | choice data give only CNC | Harsanyi (extended preferences) and well-being theorists deny "only" |
| Repugnant conclusion, hell ([5.3](lessons/05-03-population-ethics-total-and-average.md)) | avoiding the repugnant conclusion vs negative addition and separability | total view gives up the first; average view the second pair |
| Mere addition ([5.4](lessons/05-04-population-ethics-escape-routes.md)) | mere addition (1), equalizing improvement (2), transitivity (3) | total: none (accepts the conclusion); average, critical level, variable value: 1; narrow person-affecting, Temkin: 3 |
| Pascal's wager ([6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md)) | continuity (infinite $H$); the partition; the credence | wagerer gives up continuity; critic makes $H$ finite; many gods attacks the partition |
| Fanaticism ([6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md)) | unbounded value with Minimal Tradeoffs vs dominance with independence | bounded utility: Minimal Tradeoffs; discounting: weak dominance and independence; the fanatic: neither |
| Moral uncertainty ([6.3](lessons/06-03-moral-uncertainty.md)) | one cardinal scale across theories (premise 3) vs sensitivity to stakes | MFT gives up stakes and individuation-invariance; MEC needs a stipulated unit and inherits fanaticism; menu-relative normalization gives up row adjunction |

## Tables dominance and expected utility

### Decision matrix

**Acts as rows, states as columns, outcomes in the cells.** The layout of standard textbooks such
as Martin Peterson's *An Introduction to Decision Theory*.

- **Acts** $a_1,\dots,a_m$: the options. **States** $s_1,\dots,s_n$: ways the world might be, mutually
  exclusive and jointly exhaustive (exactly one obtains). **Outcomes** $o(a_i,s_j)$, scored
  $u_{ij}=u(o(a_i,s_j))$.
- **Under risk** a probability over states is given; **under ignorance** ([3.3](lessons/03-03-decisions-under-ignorance.md))
  none is, not even a set of them.
- **The same decision can be cut into states many ways.** Which cut is legitimate is the
  partition problem ([act-dependent states](#act-dependent-states)); it returns with infinite
  stakes in the [many-gods objection](#many-gods-objection).
- **Reused:** Newcomb's matrix One $(M,0)$, Two $(M+T,T)$ over full/empty ([4.1](lessons/04-01-newcombs-problem.md));
  Pascal's wager $W/A\times G/\neg G$ ([6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md)); moral
  theories as columns ([6.3](lessons/06-03-moral-uncertainty.md)).

*Lessons:* [1.1](lessons/01-01-acts-states-outcomes.md), [3.3](lessons/03-03-decisions-under-ignorance.md), [4.1](lessons/04-01-newcombs-problem.md), [6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md)

### Dominance

**One act beats another in every column, so take it: the only argument in decision theory that
needs no probabilities.**

$$a \text{ strictly dominates } b \iff u(a,s)>u(b,s) \text{ for every } s$$

Weak dominance: $u(a,s)\ge u(b,s)$ for every $s$, strictly for some $s$. The **dominance principle**:
never choose a dominated act.

- **Licensed by expected utility for every $P$ when states are act-independent**, since
  $EU(a)-EU(b)=\sum_s P(s)[u(a,s)-u(b,s)]$ and each bracket is positive. A weakly dominated act can
  tie its dominator (when the states where they differ have probability 0); ruling it out anyway is
  a small extra commitment.
- **The argument, reconstructed (1.1).** (1) Exactly one state obtains, and which one does not
  depend on what I choose. (2) In every state $a$ beats $b$. (3) If I knew the state I should choose
  $a$. ∴ Choose $a$. **Critics attack premise 1**, twice: "does not depend on" is ambiguous between
  causal and evidential independence (Newcomb splits them), and it is a fact about a description
  (dominance can hold on one partition and fail on another).
- **Dominance usually falls silent** after eliminating a few rows (the café, 1.1); the rules of
  [3.3](lessons/03-03-decisions-under-ignorance.md) take over without probabilities.
- **In Newcomb** Two dominates One by $T$ in each column (Nozick's dominance principle). CDT keeps
  dominance over causally independent states; EDT gives it up ([4.1](lessons/04-01-newcombs-problem.md)–[4.3](lessons/04-03-causal-decision-theory.md)).
- **Smoking lesion:** smoking dominates on the gene partition, which is causally act-independent but
  evidentially act-dependent ([4.2](lessons/04-02-evidential-decision-theory.md)).
- **XOR blackmail** (4.4): refusing beats paying in every termite state (causal dominance), yet EDT pays.
- **Pascal:** the dominance form of the wager needs $f_1\ge f_3$ ([6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md)).
- **Probability discounting** violates weak dominance always, and in its naive outcome-wise form strict
  statewise dominance ([6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md)).

*Lessons:* [1.1](lessons/01-01-acts-states-outcomes.md), [4.1](lessons/04-01-newcombs-problem.md), [4.2](lessons/04-02-evidential-decision-theory.md), [4.3](lessons/04-03-causal-decision-theory.md), [4.4](lessons/04-04-hard-cases-for-both.md), [6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md), [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md)

### Act-dependent states

**Your choice changes how likely each column is, so being better in every column proves nothing.**
States are act-independent if $P(s\mid a)=P(s)$ for every act and state; otherwise each row is
weighted by its own $P(s\mid a)$:

$$EU(a)=\sum_s P(s\mid a)\,u(a,s)$$

- **The rehearsal (1.1):** Skip dominates on well/badly, but $P(\text{well}\mid\text{rehearse})=0.9$
  against 0.3, and Rehearse wins 7.2 to 4.4. Re-cut into act-independent states (well either way /
  well only if I rehearse / badly either way, probabilities 0.3, 0.6, 0.1): nothing dominates and EU
  is unchanged. The re-cut changes which *argument* is available, never the expected utilities.
- **The partition problem:** dominance can hold on one cut and fail on another; "use any
  act-independent partition" returns the question to which kind of independence is meant.
- **Newcomb separates the two kinds:** causal dependence absent, evidential dependence present
  ([4.1](lessons/04-01-newcombs-problem.md)). Jeffrey's $V$ conditions on the act and so needs no
  act-independent partition ([4.2](lessons/04-02-evidential-decision-theory.md)).
- **Savage assumes states fixed whatever you do** (the businessman's purchase must not sway the
  election), so sure-thing reasoning fails here too ([2.1](lessons/02-01-savages-framework.md)).
- **The suspicious Ellsberg subject** (3.1), who thinks the urn's mix is set after her bet, faces
  act-dependent states: worst-case mixes give red 0.35, black 0, red-or-yellow 0.35, black-or-yellow
  0.65, so her pattern maximizes EU and violates no postulate.

*Lessons:* [1.1](lessons/01-01-acts-states-outcomes.md), [2.1](lessons/02-01-savages-framework.md), [3.1](lessons/03-01-the-ellsberg-paradox.md), [4.1](lessons/04-01-newcombs-problem.md), [4.2](lessons/04-02-evidential-decision-theory.md)

### Expected value

**The long-run average payout: weight each money prize by its probability.**

$$\mathrm{EV}(L)=\sum_i p_i\,x_i$$

Infinite for the [St Petersburg game](#st-petersburg-game), which is why Bernoulli replaced it with
expected utility. It returns as the value theory behind [fanaticism](#fanaticism) when the prizes are
lives ([6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md)).

*Lessons:* [1.2](lessons/01-02-from-expected-value-to-expected-utility.md), [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md)

### Expected utility

**Average the outcomes' values, not their sizes, and choose the highest average.**

$$\mathrm{EU}(L)=\sum_i p_i\,u(x_i)$$

For acts over act-independent states, $EU(a)=\sum_s P(s)\,u(a,s)$; for Savage acts,
$E_P[u(f)]=\sum_s P(s)\,u(f(s))$. With $u(x)=x$ it is expected value again.

- **The vNM theorem** (statement in [`grad-game-theory` 1.5](../grad-game-theory/reference.md#expected-utility-the-vnm-axioms-and-what-each-buys))
  says preferences over lotteries are ranked by EU iff they satisfy the [vNM axioms](#vnm-axioms);
  1.3 builds the $u$ ([standard gamble](#standard-gamble)).
- **Bernoulli's argument (1.2).** (1) A rational price for St Petersburg is finite and modest. (2) EV
  prices it at infinity. (3) EU with a suitable concave $u$ gives a finite price. ∴ Rational choice
  maximizes EU, not EV. **Weakest at P3:** it holds for each $u$ only against this game; Menger's
  [super-Petersburg game](#super-petersburg-game) beats every unbounded $u$. P1 is also softer than it
  looks (a capped bank already brings EV to about 31 dollars; low prices may reflect distrust of tiny
  probabilities).
- **Act-dependent version** $\sum_s P(s\mid a)u(a,s)$: Nozick's expected-utility principle in Newcomb
  ([4.1](lessons/04-01-newcombs-problem.md)); Jeffrey's $V$ ([4.2](lessons/04-02-evidential-decision-theory.md)).
- **Maxmin EU** takes the minimum of $E_P[u(f)]$ over a set of $P$ ([3.2](lessons/03-02-models-of-ambiguity.md)).
- **Infinite utility** breaks it: every strategy with positive chance of heaven ties ([6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md)).

*Lessons:* [1.1](lessons/01-01-acts-states-outcomes.md), [1.2](lessons/01-02-from-expected-value-to-expected-utility.md), [3.2](lessons/03-02-models-of-ambiguity.md), [4.1](lessons/04-01-newcombs-problem.md), [6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md)

### St Petersburg game

**A coin is tossed until the first head; heads on toss $n$ pays $2^n$ dollars. Each ending adds 1
dollar to the average, so the expected value is infinite, yet almost no one pays more than a little.**

- **History:** Nicolaus Bernoulli posed a version (with dice) in a 1713 letter to Montmort; Daniel
  Bernoulli published the log-utility solution in 1738 in the St Petersburg Academy's journal; Gabriel
  Cramer had proposed a square-root rule in a 1728 letter to Nicolaus.
- **Capped at $2^K$:** $\mathrm{EV}_K=K+1$ (a cap of $2^{30}$, about 1.07 billion dollars, gives 31).
- **Square-root utility:** $\mathrm{EU}=\sqrt2+1$, certainty equivalent $3+2\sqrt2\approx5.83$
  dollars. (Cramer's own version paid $2^{n-1}$, halving the CE to about 2.9.)
- **Three claims kept apart:** people will not pay much (descriptive); a rational person should not
  (normative); an EU maximizer with suitably concave $u$ will not (formal). Bernoulli proved only the
  third.
- **Three rival explanations of the low price:** concave utility, a finite bank, and ignoring tiny
  probabilities (the last is [probability discounting](#probability-discounting), named after
  Nicolaus by Monton).
- **Variants:** [super-Petersburg](#super-petersburg-game) (1.2); [Pasadena](#pasadena-game) (6.2).

*Lessons:* [1.2](lessons/01-02-from-expected-value-to-expected-utility.md), [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md)

### Super-Petersburg game

**For any utility unbounded above, some coin-toss game grows its prizes fast enough to outrun it.**
Karl Menger (1934): pick prizes $x_n$ with $u(x_n)\ge2^n$; then

$$\mathrm{EU}=\sum_{n\ge1}2^{-n}u(x_n)\ \ge\ \sum_{n\ge1}1=\infty$$

- **Against Bernoulli's log** ($u=\log_2 x$), prizes $2^{2^n}$ (4, 16, 256, 65,536, ...) do it.
- **Moral:** concavity alone never saves EU; only a [bounded utility](#bounded-utility) rules out
  every such game.

*Lessons:* [1.2](lessons/01-02-from-expected-value-to-expected-utility.md)

### Bounded utility

**A ceiling $B$ with $u(x)\le B$ for every $x$: then every lottery has $\mathrm{EU}\le B$ and a finite
certainty equivalent.**

- **The price (1.2):** for any $u$ bounded above, some finite loss on a fair coin outweighs every
  gain. $u=1-2^{-x/1000}$ refuses "lose 1,000, win $G$" for every $G$, because heads can add at most
  $\tfrac12$ and tails costs exactly $\tfrac12$. (The same $u$ prices Menger's game at about 234
  dollars.)
- **The split is over whether utility may be unbounded.** The bounded side refuses some fair gamble
  with unlimited upside; the unbounded side values Menger's game infinitely. Both bullets generalize.
- **In ethics (6.2):** a ceiling refuses every mugger offer iff
  $\varepsilon\le -u(-c)/(B-u(-c))$; it keeps dominance and independence and denies [Minimal
  Tradeoffs](#minimal-tradeoffs). The cost there: the same ceiling refuses well-founded long shots
  too; the theorist must say where the ceiling sits; and Wilkinson argues that rejecting fanaticism
  makes rankings depend on unaffected background events (an updated Egyptology objection).
- **Pasadena:** bounded $u$ restores absolute convergence ([6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md)).
- **Pascal:** a bounded $H$ turns the dominating-expectation wager into a finite threshold argument
  ([6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md)).

*Lessons:* [1.2](lessons/01-02-from-expected-value-to-expected-utility.md), [6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md), [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md)

### Certainty equivalent

**The sure amount worth exactly as much to this agent as the lottery.**

$$u(\mathrm{CE})=\mathrm{EU}(L)$$

A fact about the lottery *and* the agent's $u$ (5.83 dollars to the square-root agent facing St
Petersburg; nothing finite to the log agent facing Menger's game). Under REU with linear $u$, the CE
equals the REU ([2.4](lessons/02-04-risk-beyond-curvature.md)). Risk premia and Arrow-Pratt are
[`grad-micro` 2.5](../grad-micro/lessons/02-05-choice-under-uncertainty.md)'s.

*Lessons:* [1.2](lessons/01-02-from-expected-value-to-expected-utility.md), [2.4](lessons/02-04-risk-beyond-curvature.md)

### Risk aversion

**Inside expected utility, caution can live in one place only: the concavity of $u$.** A concave $u$
gives $\mathrm{CE}(L)<\mathrm{EV}(L)$ for every non-degenerate lottery (Jensen's inequality).

- **Arrow-Pratt measures** are [`grad-micro` 2.5](../grad-micro/lessons/02-05-choice-under-uncertainty.md)
  and [`micro-refresher` 2.2](../micro-refresher/lessons/02-02-risk-aversion.md)'s, not repeated here.
- **One curve, two jobs:** how much more money is worth, and how much spread worries the agent.
  Whether those must be one curve is [2.4](lessons/02-04-risk-beyond-curvature.md)'s question: REU
  adds a second source of risk aversion, a convex [risk function](#risk-function).
- **The standard-gamble curve bowing above the diagonal** is risk aversion: Fern's 50 dollars is worth a
  0.7 chance at 100, not 0.5 ([1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md)).
- **Maximin over lotteries** is the limit of CRRA expected utility as $\eta\to\infty$ ([3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md)).

*Lessons:* [1.2](lessons/01-02-from-expected-value-to-expected-utility.md), [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md), [2.4](lessons/02-04-risk-beyond-curvature.md)

## Representation theorems

### vNM axioms

**Completeness, transitivity, continuity and independence on preferences over lotteries: they hold
exactly when some $u$ ranks lotteries by $U(L)=\sum_i p_i\,u(x_i)$.** The statements live on
[`grad-game-theory`'s card](../grad-game-theory/reference.md#expected-utility-the-vnm-axioms-and-what-each-buys)
([1.5](../grad-game-theory/lessons/01-05-expected-utility-vnm-axioms.md), which bundles completeness and
transitivity as one axiom; also [`micro-refresher` 2.1](../micro-refresher/lessons/02-01-expected-utility.md),
[`grad-micro` 2.5](../grad-micro/lessons/02-05-choice-under-uncertainty.md)). None of the three proves
the theorem; 1.3 gives the [standard-gamble](#standard-gamble) construction as a proof sketch.

| Axiom | Job in the 1.3 construction | Who attacks it |
|---|---|---|
| Completeness, transitivity | Step 4: lotteries ranked through their standard gambles | money pump defends transitivity (1.4); regret theory gives it up (2.3); Temkin denies transitivity of betterness (5.4) |
| Continuity | Step 1: every prize has a $p_x$ | an outcome infinitely worse than any gain (death vs a free coffee); maximin over lotteries (3.4); infinite utility in the wager (6.1) |
| Independence | Step 2 and the monotonicity lemma: one swap per prize | Allais (2.3); REU (2.4); maxmin EU (3.2); Diamond at the social level (5.2); probability discounting (6.2) |
| (Reduction) | Step 3: two-stage lottery = one-stage | an agent who cares how risk is staged |

- **Harsanyi assumes them for every individual and for society** ([5.1](lessons/05-01-harsanyis-aggregation-theorem.md));
  egalitarians who reject the weighted sum typically deny them at the social level.

*Lessons:* [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md), [1.4](lessons/01-04-what-a-representation-theorem-shows.md), [5.1](lessons/05-01-harsanyis-aggregation-theorem.md)

### Standard gamble

**Calibrate preference with probability as the ruler: a prize's utility is the chance of the best
prize, else the worst, that it is worth.** Fix best $b$ and worst $w$, $b\succ w$; let $G_p$ give $b$
with probability $p$, else $w$. Then

$$u(x)=p_x \quad\text{where}\quad x\sim G_{p_x}$$

so $u(w)=0$, $u(b)=1$.

- **The construction (1.3).** *Lemma:* $G_p\succ G_q$ iff $p>q$ (from independence). *Step 1
  calibrate* (continuity gives $p_x$; the lemma makes it unique). *Step 2 substitute* each prize by its
  standard gamble (independence, one swap per prize). *Step 3 compound:*
  $\Pr(b)=\sum_i p_i u(x_i)=U(L)$ ([reduction](#reduction-of-compound-lotteries)), so $L\sim G_{U(L)}$.
  *Step 4 compare:* $L\succeq M\iff U(L)\ge U(M)$ (transitivity and the lemma).
- **Fern** (0-100 dollars): $u(20)=0.35$, $u(50)=0.7$; ranks 50 for sure (0.7) over the 0.4/0.4/0.2
  lottery on 100/50/0 (0.68) over a 50-50 between 100 and 20 (0.675).
- **It measures what risk of the worst you would bear for the best,** not how much you like a prize.
- **Needs a best and a worst prize;** with unboundedly good prizes there is no top of the ruler.

*Lessons:* [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md)

### Reduction of compound lotteries

**A two-stage lottery is worth the same as the one-stage lottery with the same final probabilities.**
Step 3 of the 1.3 construction. Built into the mixture formulation of
[`grad-game-theory` 1.5](../grad-game-theory/lessons/01-05-expected-utility-vnm-axioms.md); other
presentations list it as a separate axiom. Rejected by an agent who cares how risk is staged (enjoys
suspense, hates a second draw). Premise 1 of the [sequential choice argument](#sequential-choice-argument-for-independence).

*Lessons:* [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md), [1.4](lessons/01-04-what-a-representation-theorem-shows.md)

### Representation theorem

**A formal result that preferences satisfying stated axioms can be described by numbers.**
Schematically:

$$\succeq \text{ satisfies } A_1,\dots,A_n \iff \exists\,u:\ L\succeq L' \Leftrightarrow \mathbb{E}_L[u]\ge\mathbb{E}_{L'}[u]$$

- **vNM** (1.3): lotteries with given probabilities; $u$ unique up to $au+c$, $a>0$.
- **Savage** (2.1): if P1-P7 hold there is a unique probability $P$ and an affine-unique $u$ with
  $f\succsim g\iff\int u(f(s))\,dP(s)\ge\int u(g(s))\,dP(s)$.
- **Buchak** (2.4): keeps Savage's machinery, weakens the sure-thing principle to comonotonic acts,
  and yields $u$, $p$ and $r$.
- **Three readings (1.4).** *Descriptive:* people satisfy the axioms (refuted in part by Allais and the
  behavioural data). *Normative:* rational preferences satisfy them (untouched by data).
  *Interpretive:* the axioms are what it takes to attribute utilities and credences at all; a violator
  is hard to read rather than irrational.
- **The "only describes" critique.** (1) The theorem is a biconditional between axioms and
  representability. (2) Being representable gives no one a reason to choose anything. ∴ (3) EU
  maximization is exactly as normative as the axioms. The theorem moves the burden; the
  [money pump](#money-pump) and the [sequential choice argument](#sequential-choice-argument-for-independence)
  try to discharge it.

*Lessons:* [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md), [1.4](lessons/01-04-what-a-representation-theorem-shows.md), [2.1](lessons/02-01-savages-framework.md), [2.4](lessons/02-04-risk-beyond-curvature.md)

### Affine uniqueness

**The zero and the unit of a utility scale are free choices, as on a thermometer; everything else
is fixed by the agent's choices.** If $u$ and $v$ both represent the same preferences in EU form,

$$v=a\,u+c,\quad a>0$$

Proof: since $x\sim G_{u(x)}$, $v(x)=u(x)v(b)+(1-u(x))v(w)$, so $a=v(b)-v(w)$, $c=v(w)$.

- **Same in Savage,** whose $P$ is unique outright ([2.1](lessons/02-01-savages-framework.md)).
- **Order-preserving is not enough:** squaring Fern's $u$ keeps the prize order but describes a
  different, risk-loving agent (ranking flips to $C\succ A\succ B$).
- **In aggregation (5.1):** each $u_i$ is free up to $k u_i+m$; shifts $m$ drop out of a weighted
  sum, rescalings $k$ change what fixed weights recommend.
- **In moral uncertainty (6.3):** shifting a theory's choiceworthiness changes no EC ranking;
  rescaling its unit can.

*Lessons:* [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md), [2.1](lessons/02-01-savages-framework.md), [5.1](lessons/05-01-harsanyis-aggregation-theorem.md), [6.3](lessons/06-03-moral-uncertainty.md)

### Cardinal utility

**vNM utility is cardinal: statements that survive every $au+c$ are meaningful, and nothing else.**

| Meaningful | Not meaningful |
|---|---|
| order of prizes | ratios of levels ("twice as good"): Fern's 50 vs 20 is 2 on $u$, 4.5 on $v=40u-10$ |
| one agent's comparisons of utility *differences* ($a$ multiplies all, $c$ cancels) | the sign of a utility ($c$ moves the zero) |
| | any comparison across agents ([interpersonal comparability](#interpersonal-comparability)) |

*Lessons:* [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md)

### Independence axiom

**Mixing two lotteries with the same third lottery, in the same proportion, cannot change which you
prefer.**

$$L\succeq L' \iff \alpha L+(1-\alpha)N\succeq\alpha L'+(1-\alpha)N,\quad \alpha\in(0,1]$$

Consequence: $EU(\alpha X+(1-\alpha)Z)-EU(\alpha Y+(1-\alpha)Z)=\alpha\,(EU(X)-EU(Y))$, so mixing shrinks a
gap and never reverses it.

- **Its act-based twin** is Savage's [sure-thing principle](#sure-thing-principle).
- **Step 2 of the vNM construction** (one swap per prize) and the monotonicity lemma ([1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md)).
- **Defended** by the [sequential choice argument](#sequential-choice-argument-for-independence) (1.4).
- **Given up by:** the Allais and common-ratio patterns (2.3); REU, which keeps a comonotonic version
  (2.4); maxmin EU, which keeps certainty independence (3.2).
- **At the social level (5.2):** a mixture of indifferent lotteries must be indifferent to them,
  which Diamond's preference for the lottery breaks.
- **Pascal (6.1):** infinite EU ties "wager" with "wager iff a die shows 6", while independence would
  require the pure wager strictly preferred.
- **Probability discounting (6.2):** 1 with probability 0.002 beats 0 at $t=0.001$, but mixing both
  with 0 at weight $\tfrac34$ pushes 0.002 to 0.0005 and yields indifference.

*Lessons:* [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md), [1.4](lessons/01-04-what-a-representation-theorem-shows.md), [2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md), [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md), [6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md), [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md)

### Realism and constructivism about utility

**Is utility a psychological quantity your preferences track, or just the number that summarizes
preferences that already hang together?**

- **Realist:** utility is how much you value an outcome; you prefer $A$ *because* $U(A)>U(B)$. A
  realist could in principle consult her utilities and compute.
- **Constructivist:** the numbers exist only because the preferences are in order, so "because
  $U(A)>U(B)$" runs the explanation backwards (a warning repeated in economics since Luce and Raiffa,
  *Games and Decisions*, 1957). The theorem cannot tell her how to order her preferences; all the
  normative weight sits on the axioms.
- **The labels are used unattributed;** the parallel dispute for preference is
  [`philosophy-of-economics` 2.1](../philosophy-of-economics/lessons/02-01-preference-and-revealed-preference.md)'s.
- **Of credence (2.2):** taking credence as something preferences *measure* imperfectly is the realist
  reply to state-dependent utility, and concedes preference does not *define* it.
- **Of risk (2.4):** Buchak's premise that $u$ measures value prior to risky choice is the realist
  reading; the constructivist reply is that a concave $u$ just *is* the risk aversion. That reply works
  only where some $u$ fits, and Allais fits none.

*Lessons:* [1.4](lessons/01-04-what-a-representation-theorem-shows.md), [2.2](lessons/02-02-probability-from-preference.md), [2.4](lessons/02-04-risk-beyond-curvature.md)

### Money pump

**Cyclic preferences turn a small fee into an unbounded loss for nothing.** With $Y\succ X$,
$Z\succ Y$, $X\succ Z$ and a fee $\varepsilon$ per preferred swap, $k$ cycles from $X$ cost
$3k\varepsilon$ and leave her holding $X$ (Davidson, McKinsey and Suppes 1955; also
[`micro-refresher` 1.1](../micro-refresher/lessons/01-01-preferences-utility.md)).

- **Mara (1.4):** bicycle, guitar, camera, 2 dollars per swap: 6 dollars a cycle, 60 for ten.
- **Needs two premises beyond intransitivity:** each strict preference is worth some money, and she
  evaluates each offer **myopically**. An intransitive agent who looks ahead can refuse the first trade.
- **Many defenders read it as a symptom** that her preferences cannot all be satisfied together, not a
  prediction about traders.
- **The preference-reversal pump** is [`philosophy-of-economics` 2.2](../philosophy-of-economics/lessons/02-02-the-behavioural-challenge.md)'s;
  the belief-side cousin, the Dutch book, is [`epistemology`](../epistemology/syllabus.md) 5.2's.
- **Elsewhere:** Temkin's intransitive betterness pays in money pumps and menus with no best option
  (5.4); Kosonen (2024) builds money pumps against probability discounting (6.2); Gustafsson and
  Torpman argue for MFT via moral money pumps against rivals (6.3).

*Lessons:* [1.4](lessons/01-04-what-a-representation-theorem-shows.md), [5.4](lessons/05-04-population-ethics-escape-routes.md), [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md)

### Sequential choice argument for independence

**A violator of independence must plan one thing and do another, or let a branch that never
happened steer her** (Hammond 1988). Tree: chance gives $N$ with probability $1-\alpha$; with
probability $\alpha$ she chooses $L$ or $L'$.

1. **Reduction.** A plan is worth its reduced lottery, so choosing $L$ at the node is the plan
   $\alpha L+(1-\alpha)N$.
2. **Consequentialism.** At a node only what can still happen matters; she chooses as if facing $L$
   vs $L'$ outright.
3. **Dynamic consistency.** What she plans is what she does.

∴ Her ranking of $L$ vs $L'$ equals her ranking of the mixtures: independence.

- **Critics attack premise 2.** Machina (1989, *Journal of Economic Literature*): if risk attitudes are
  about the *whole* gamble, the branch that did not happen is part of what she chose between. Reply:
  that outcome is now impossible, and caring about it is caring about nothing.
- **The same premise** carries Hammond's argument against ambiguity aversion ([3.2](lessons/03-02-models-of-ambiguity.md)),
  and REU faces it too; REU's defenders reply that the consistency demanded already presupposes
  independence ([2.4](lessons/02-04-risk-beyond-curvature.md)).

*Lessons:* [1.4](lessons/01-04-what-a-representation-theorem-shows.md)

### Myopic sophisticated and resolute choice

**Three ways an independence violator can get through a decision tree.**

| Chooser | What she does | Cost |
|---|---|---|
| Myopic | plans by the reduced lotteries, then chooses afresh at each node | inconsistent: plans one thing, does another |
| Sophisticated | foresees her node choices, plans by backward induction | may end with a plan she ranked lower; will pay for a binding commitment |
| Resolute (McClennen, *Rationality and Dynamic Choice*, 1990) | carries out the plan | gives up consequentialism |

- **Nadia (1.4):** prefers 1,000 for sure to 0.9 of 1,500, but 0.18 of 1,500 to 0.2 of 1,000. In the
  tree (0.8 to nothing, else the choice) she plans risky and, myopic, does safe.
- **Same exits for maxmin EU** that refuses free information ([3.2](lessons/03-02-models-of-ambiguity.md)).
- **Same structure** as the sophisticated present-biased saver who pays for commitment
  ([`philosophy-of-economics` 2.2](../philosophy-of-economics/lessons/02-02-the-behavioural-challenge.md)).

*Lessons:* [1.4](lessons/01-04-what-a-representation-theorem-shows.md), [3.2](lessons/03-02-models-of-ambiguity.md)

### Savage framework

**An act is its row: a function from states to consequences, and preference ranks rows.** From
preferences over acts alone, Savage (*The Foundations of Statistics*, 1954) extracts a utility *and*
a probability.

- **Primitives:** states $S$ (one true, unknown); events $E\subseteq S$; consequences $C$; acts
  $f:S\to C$, every such function counting as an act; preference $\succsim$.
- **Splice** $f_E h$: agrees with $f$ on $E$, with $h$ off $E$. **Null event:** $f_E h\sim g_E h$ for all
  $f,g,h$ (treated as having no chance).
- **Postulates** P1-P7 ([Savage postulates](#savage-postulates)); representation by a unique $P$ and an
  affine-unique $u$ ([representation theorem](#representation-theorem)).
- **vNM takes probabilities as given; Savage derives them.**
- **Where it is weakest (2.1):** (1) richness: every function is an act, including impossible
  [constant acts](#constant-act); (2) states must not depend on acts ([act-dependent states](#act-dependent-states));
  (3) P2 and P4 themselves (Allais, Ellsberg).
- **Savage's businessman** (paraphrased): he would buy if the Democrat won, and buy if the Republican
  won, so he buys without waiting: the sure-thing principle.
- **Jeffrey replaces acts with propositions** ([4.2](lessons/04-02-evidential-decision-theory.md)).

*Lessons:* [2.1](lessons/02-01-savages-framework.md), [2.2](lessons/02-02-probability-from-preference.md)

### Constant act

**The act giving the same consequence $x$ in every state.** Savage needs one for every consequence,
since every function $S\to C$ is an act. Luce and Suppes (1965): constant acts are often impossible
(a pleasant afternoon in every state, including the one where a storm floods the town). Defenders:
hypothetical choices that fix the scale, like a frictionless plane. Critics: a preference over an act
no one could perform is no fact about the agent, which bites hardest for the constructivist.
Fine-graining consequences to rescue state independence multiplies such acts (the ski voucher, 2.1).

*Lessons:* [2.1](lessons/02-01-savages-framework.md)

### Savage postulates

**Seven conditions on preferences over acts that together deliver a unique probability and an
affine-unique utility** (numbering as in Savage and the SEP's "Decision Theory" entry).

| | Name | Plain English |
|---|---|---|
| P1 | Ordering | $\succsim$ complete and transitive over acts |
| P2 | [Sure-thing principle](#sure-thing-principle) | what two acts agree on off $E$ cannot change which you prefer |
| P3 | [State independence](#state-independence) (eventwise monotonicity) | ranking of consequences does not vary with the (non-null) state |
| P4 | Comparative probability | which event you would rather bet on does not depend on the prize |
| P5 | Non-triviality | some consequence is strictly preferred to some other |
| P6 | Small-event continuity | $S$ can be cut into events so fine that changing an act on one of them does not flip a strict preference |
| P7 | Dominance | needed only for infinitely many consequences |

- **P4 gives "more likely than" (a [qualitative probability](#qualitative-probability)); P6 makes it
  numerical and unique.** P6 forces an infinite $S$, so a finite table is an illustration, not a Savage model.

*Lessons:* [2.1](lessons/02-01-savages-framework.md)

### Sure-thing principle

**Whatever two acts give on the same states cannot decide between them.** Savage's P2: for all acts
$f,g,h,h'$ and event $E$,

$$f_E h\succsim g_E h \iff f_E h'\succsim g_E h'$$

- **The act-based twin of vNM independence;** it is what lets EU add up state by state (the shared
  Cloud column cancels, 2.1).
- **Not "prefer the sure thing":** the A-and-D Allais chooser obeys "prefer certainty" and breaks P2 (2.3).
- **Allais (2.3):** Savage's ticket table shows each pair identical on tickets 1-20; tickets 21-100
  are the common column.
- **Ellsberg (3.1):** on yellow $f_1=f_2$ and $f_3=f_4$; on {red, black} $f_1=f_3$ and $f_2=f_4$, so P2
  forces $f_1\succsim f_2\iff f_3\succsim f_4$. The ambiguity-averse deny the common column is inert,
  because it hedges ambiguity.
- **Weakened:** to comonotonic acts by REU ([2.4](lessons/02-04-risk-beyond-curvature.md)); to
  certainty independence by maxmin EU ([3.2](lessons/03-02-models-of-ambiguity.md)).
- **Critics attack where it meets "identical columns":** if outcomes are individuated by the whole
  act (disappointment), the columns are not identical; if anything about the act may redescribe
  outcomes, P2 forbids nothing.

*Lessons:* [2.1](lessons/02-01-savages-framework.md), [2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md), [2.4](lessons/02-04-risk-beyond-curvature.md), [3.1](lessons/03-01-the-ellsberg-paradox.md), [3.2](lessons/03-02-models-of-ambiguity.md)

### State independence

**A consequence is worth the same whichever state it arrives in: $u(x)$, not $u(x,s)$.** Savage's
P3: for non-null $E$, $x_E h\succsim y_E h\iff x\succsim y$; carried also by P4.

- **What makes the elicited probability unique** ([state-dependent utility](#state-dependent-utility)).
- **Mia's ski voucher (2.1):** voucher over cash given snow, cash given no snow, so P3 fails. Fine-grain
  ("a ski day" vs "a useless voucher") and P3 survives, but P1 now ranks "a ski day in every state",
  including at a closed resort.

*Lessons:* [2.1](lessons/02-01-savages-framework.md), [2.2](lessons/02-02-probability-from-preference.md)

### Subjective probability

**Probability read off preference over acts rather than given.** P4 yields "more likely than"; P6
makes it numerical; in Savage's theorem it is unique, given state-independent utility.

- **Ellsberg (3.1)** is choices that admit no subjective probability at all.
- **Belief-side defence** of the same probabilities (probabilism, Dutch books) is
  [`epistemology`](../epistemology/syllabus.md) 5.1-5.2's.

*Lessons:* [2.1](lessons/02-01-savages-framework.md), [2.2](lessons/02-02-probability-from-preference.md), [3.1](lessons/03-01-the-ellsberg-paradox.md)

### Qualitative probability

**The event you would rather stake the good prize on is the one you think more likely.** For fixed
$x\succ y$:

$$E \text{ at least as likely as } F \iff [x \text{ on } E;\ y]\succeq[x \text{ on } F;\ y]$$

P4 makes it independent of the prizes (a fact about belief); with P1-P5 it obeys de Finetti's
conditions; P6 pins down a unique number.

*Lessons:* [2.2](lessons/02-02-probability-from-preference.md)

### Ramseys betting method

**Find a home-made fair coin, use it to build a utility scale, then read credence off where a sure
amount sits between a bet's prizes** (Ramsey, "Truth and Probability", written 1926, published 1931).

1. **Ethically neutral $N$** (she does not care whether it is true for its own sake) has credence
   $\tfrac12$ iff $[a \text{ on } N;\ b]\sim[b \text{ on } N;\ a]$ for some $a\succ b$.
2. **Halving builds $u$:** $c\sim[a \text{ on } N;\ b]$ means $u(c)=\tfrac12u(a)+\tfrac12u(b)$.
3. **Credence:** $c\sim[a \text{ on } E;\ b]$ gives $P(E)=\dfrac{u(c)-u(b)}{u(a)-u(b)}$.

- **Example (2.2):** $u(0)=0$, $u(400)=1$; $225\sim[400\text{ on }E;\,0]$ gives $P(E)=\tfrac34$ (reading
  dollars as utility would give $9/16$); $25\sim[400\text{ on not-}E;\,0]$ gives $\tfrac14$, and they sum to 1.
- **Neutrality is about value;** the prize-swap indifference certifies the $\tfrac12$. Both are needed.
- **Savage's theorem is its axiomatized descendant.**

*Lessons:* [2.2](lessons/02-02-probability-from-preference.md)

### State-dependent utility

**If money matters less to you in some state, your eagerness to bet on it mixes belief with value,
and no choice data can pull them apart.** With utility $\lambda_s u(x)$ in state $s$, preferences fix
only $P(s)\lambda_s$; the agent ranks every act as a state-independent agent with

$$Q(s)=\frac{P(s)\lambda_s}{\sum_t P(t)\lambda_t}$$

- **The life-insurance problem (2.2):** $P(D)=\tfrac1{10}$, $\lambda_D=\tfrac12$; she takes
  $c=1000/19\approx52.63$ for a 1,000-dollar death policy, so an analyst reads $P(D)=\tfrac1{19}$.
- **Calling $Q$ her credence is a convention,** the one Savage's postulates impose.
- **Aumann's 1971 letter to Savage** (a man whose life would be less worth living without his wife,
  who faces an operation); Karni, and separately Schervish, Seidenfeld and Kadane, developed the
  non-uniqueness formally.
- **Replies:** redescribe consequences ("1,000 dollars while alive"), at the cost of incoherent acts in
  Savage's space; or take credence as a mental state preferences measure imperfectly (realism).

*Lessons:* [2.2](lessons/02-02-probability-from-preference.md)

### Small worlds

**The states we model are coarse, and each "consequence" is itself a gamble on everything left out.**
Savage distinguished the **grand world** (states settle everything the agent cares about) from the
**small worlds** we model; small-world probabilities need not match the grand world's. State
dependence is often a small-world artefact ("1,000 dollars" means one thing alive, another dead).

*Lessons:* [2.2](lessons/02-02-probability-from-preference.md)

## Allais and risk-weighted rivals

### Allais paradox

**A sure thing over a near-sure gamble, but the long shot over the slightly likelier small prize: a
pattern no expected-utility function fits.** A **common-consequence** violation: each pair shares a
column that changes between pairs.

- **The lesson's gambles (2.3)**, prizes 0, 2,000, 6,000 dollars over 100 tickets. A: 2,000 sure.
  B: 0 (tickets 1-3), 6,000 (4-20), 2,000 (21-100). C: 2,000 on 1-20. D: 6,000 on 4-20. Pattern A and D.
- **No $u$ fits:** $EU(A)-EU(B)=0.20u_2-0.17u_6-0.03u_0=EU(C)-EU(D)$. With $u_0=0$, $u_2=1$, $u_6=v$,
  EU picks A and C if $v<20/17$, B and D if $v>20/17$: one threshold for both pairs, whatever the
  curvature.
- **Allais's own numbers** (0, 1M, 5M) are worked in [`micro-refresher` 2.1](../micro-refresher/lessons/02-01-expected-utility.md)
  (with the Marschak-Machina triangle, where the violation is fanning indifference lines),
  [`grad-micro` 2.5](../grad-micro/lessons/02-05-choice-under-uncertainty.md) and [`grad-game-theory` 1.5](../grad-game-theory/lessons/01-05-expected-utility-vnm-axioms.md).
- **Savage's argument it is a mistake.** (1) One ticket draw can settle all four gambles without
  changing their probabilities. (2) Within each pair tickets 21-100 pay the same. (3) On tickets
  1-20 the pairs are identical. (4) (P2) A rational ranking depends only on the states where acts
  differ. ∴ A over B iff C over D. **Critics attack 4 where it meets 3:** "identical" assumes the
  consequence is fixed by money alone.
- **Savage's own reversal:** he first chose the A-and-D pattern (Paris, 1952), then on the ticket
  table reversed his second-pair preference, judging he had corrected an error. He kept the sure thing.
- **Three claims:** subjects choose A and D (descriptive, robust); the pattern violates P2 and
  independence (formal, a theorem); it is a mistake (normative, open).
- **Rationalized by:** [regret](#regret-and-disappointment) with independent draws (2.3); REU
  with $r(p)=p^2$ for $400/289<v<880/289$ ([2.4](lessons/02-04-risk-beyond-curvature.md)).

*Lessons:* [2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md), [2.4](lessons/02-04-risk-beyond-curvature.md)

### Common ratio effect

**Scale both winning chances in a pair down by the same factor, and the preference flips.** If
$G=\alpha E+(1-\alpha)\delta_0$ and $H=\alpha F+(1-\alpha)\delta_0$ ($\delta_0$ = nothing for sure), then

$$EU(G)-EU(H)=\alpha\,\big(EU(E)-EU(F)\big)$$

so the signs must match. Kahneman and Tversky (1979) documented it as part of the certainty effect.
Nadia's pair in 1.4 (1,000 sure vs 0.9 of 1,500; scaled by 0.2) is one.

*Lessons:* [2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md), [1.4](lessons/01-04-what-a-representation-theorem-shows.md)

### Regret and disappointment

**Two feelings that differ between the Allais pairs, offered as reasons for the pattern.**

- **Regret** (Loomes and Sugden 1982; Bell 1982): compare what you got with what the *rejected* act
  would have paid on the same state. $R(X,Y)=\sum_s p_s\,\psi(x_s,y_s)$ with $\psi(x,x)=0$; in 2.3,
  $Q(d)=d+3d^3$ on utility differences $d$.
- **Disappointment** (Bell 1985; Loomes and Sugden 1986): compare with what *your own* gamble led you
  to expect. A zero from B (which paid 97 percent of the time) stings; a zero from D was likely.
- **The formal point (2.3):** regret predicts *no* Allais violation on Savage's shared ticket table
  (the regret sums are term for term equal, $+0.01936$), but produces it with independent draws for C
  and D ($-0.66608$, D chosen). The table does not just display the gambles; it correlates them.
- **The cost:** pairwise regret comparison can produce intransitive choices, so regret theory gives up
  transitivity rather than P2. Disappointment keeps P2 by redescribing outcomes, at the risk that P2
  then forbids nothing.

*Lessons:* [2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md)

### Risk-weighted expected utility

**You get the worst outcome for sure, and each step up counts at its utility gain times a risk-weighted
chance of reaching it** (Lara Buchak, *Risk and Rationality*, 2013). Outcomes ordered worst to best:

$$\mathrm{REU}(g)=u(x_1)+\sum_{i=2}^n r\big(P(\ge x_i)\big)\big(u(x_i)-u(x_{i-1})\big)$$

Two outcomes, $H$ with probability $p$, else $L<H$: $\mathrm{REU}=u(L)+r(p)\,(u(H)-u(L))$.

- **$r(p)=p$ gives back EU.** Convex $r$ (below the diagonal) is risk-avoidant.
- **Buchak's argument.** (1) Under EU, risk attitude can be expressed only through the shape of $u$.
  (2) The shape of $u$ is fixed by the marginal value of outcomes. (3) An agent can value money
  linearly yet prefer a sure thing to a fair gamble, caring about its global shape. (4) Some such
  patterns, Allais among them, fit no $u$. ∴ EU misdescribes some reasonable risk attitudes; a second
  parameter is needed. **Critics attack premise 2** (a realist reading of $u$); the constructivist
  reply leaves premise 4 untouched.
- **Axiom given up:** unrestricted independence; her representation theorem weakens the sure-thing
  principle to hold only between comonotonic acts (acts ranking the states in the same order).
- **Her probabilities are the agent's own credences,** elicited as in 2.2; $r$ sits alongside $u$ and
  $p$ as a third rational attitude.
- **Price:** the dynamic-consistency objection (plan one thing, do another; pay to avoid free
  information). Reply: that consistency presupposes independence.
- **Examples (2.4):** linear $u$, $r=p^2$, gamble 0/50/200 with 0.2/0.3/0.5: REU 69.5 vs EV 115; a
  coin flip on 0/200 is worth 50.

*Lessons:* [2.4](lessons/02-04-risk-beyond-curvature.md)

### Risk function

**How much weight the chance of doing better gets, separate from how much you value the outcome.**
$r:[0,1]\to[0,1]$, non-decreasing, $r(0)=0$, $r(1)=1$.

| $r$ | Shape | Attitude |
|---|---|---|
| $p$ | identity | EU |
| $p^2$ | convex, $r(p)\le p$ | risk-avoidant ($r(0.5)=0.25$) |
| $p^{0.5}$ | concave | risk-inclined |

Convex $r$ "bends up" but lies *below* the diagonal, so it shrinks every chance of doing better. Maxmin
EU is the ambiguity analogue of a convex $r$ ([3.2](lessons/03-02-models-of-ambiguity.md)).

*Lessons:* [2.4](lessons/02-04-risk-beyond-curvature.md)

### Rank-dependent utility

**Weight cumulative probabilities ("this outcome or better"), not each outcome's own probability.**
John Quiggin (1982, as "anticipated utility"). Because the weight depends on rank, it never prefers a
stochastically dominated gamble; transforming each outcome's own probability can (the defect of
1979 prospect theory). The formal family behind REU and cumulative prospect theory.

*Lessons:* [2.4](lessons/02-04-risk-beyond-curvature.md)

### Prospect theory

**A description of how people choose, not a claim about how they should** (Kahneman and Tversky
1979; cumulative version, Tversky and Kahneman 1992).

- **Reference points:** outcomes coded as gains and losses, often from the status quo.
- **Loss aversion:** value function concave for gains, convex for losses, steeper for losses (the 1992
  estimate: a loss weighs about 2.25 times an equal gain).
- **Probability weighting:** inverse-S; small probabilities overweighted, moderate-to-large ones
  underweighted. 1979 weighted each outcome's probability (can favour dominated gambles); 1992 weights
  cumulative probabilities, rank-dependently.
- **Keep three claims apart:** rank dependence is a *formal* family; prospect theory a *descriptive*
  claim built from it; REU a *normative* claim about it. Data against prospect theory leave REU untouched.
- **Owned here** (one descriptive section); reference dependence is used in
  [`philosophy-of-economics` 2.2](../philosophy-of-economics/lessons/02-02-the-behavioural-challenge.md).

*Lessons:* [2.4](lessons/02-04-risk-beyond-curvature.md)

## Ambiguity and ignorance

### Ellsberg paradox

**Choosers prefer the bet whose chance they know, twice over, in a way no probability assignment
can fit, not even a wrong one.** Daniel Ellsberg, "Risk, Ambiguity, and the Savage Axioms",
*Quarterly Journal of Economics* (1961).

- **Three-colour urn:** $N$ balls, $k$ red, $N-k$ black or yellow in unknown proportion. $f_1$ red,
  $f_2$ black, $f_3$ red-or-yellow, $f_4$ black-or-yellow. Pattern: $f_1\succ f_2$ and $f_4\succ f_3$.
- **Claim 1, no probability:** $EU(f_1)-EU(f_2)=(u(x)-u(0))(p_R-p_B)=-(EU(f_4)-EU(f_3))$. Never uses
  $p_R=k/N$; curvature cancels (every bet has the same two prizes).
- **Claim 2, the postulate:** with $E$ = {red, black}, P2 forces $f_1\succsim f_2\iff f_3\succsim f_4$
  ([sure-thing principle](#sure-thing-principle)). Yellow is not inert: it turns the ambiguous bet into
  the unambiguous one and back.
- **Two-urn version** (50/50 vs unknown): violates P2 once states are pairs (known colour, unknown colour).
- **The 35-red urn (3.1):** $f_1\succ f_2$ needs $b<35$ and $f_4\succ f_3$ needs $b>35$. At the symmetric
  estimate $b=32.5$, EU recommends $f_1$ and $f_3$: one choice alone never reveals ambiguity aversion.
- **Allais vs Ellsberg:** both break P2; Allais is about valuing risk with given probabilities, Ellsberg
  about belief with no probability to have an attitude about.
- **Where the argument is weakest:** the framing (the mix must be fixed independently of the bet; the
  [suspicious subject](#act-dependent-states) escapes), and the step from "violates P2" to "irrational".
  Crux (Keynes): can the [weight of evidence](#weight-of-evidence) behind a probability affect a choice?
- **Three claims:** many subjects choose so, though not all (descriptive); no probability fits (formal);
  irrational? (normative, open).
- **Rationalized** by [maxmin EU](#maxmin-expected-utility) over a set of priors ([3.2](lessons/03-02-models-of-ambiguity.md)).

*Lessons:* [3.1](lessons/03-01-the-ellsberg-paradox.md), [3.2](lessons/03-02-models-of-ambiguity.md)

### Ambiguity aversion

**Preferring bets whose chances are known to bets whose chances rest on thin or conflicting
evidence.** Revealed only by a *pair* of choices. Not concave utility (prizes identical), and not a
fixed pessimistic prior (a fixed small $p_B$ gives $f_1\succ f_2$ but also $f_3\succ f_4$; the pessimism has
to switch with the bet). In alpha-maxmin, $\alpha>\tfrac12$ is aversion, $\alpha<\tfrac12$ ambiguity seeking.

*Lessons:* [3.1](lessons/03-01-the-ellsberg-paradox.md), [3.2](lessons/03-02-models-of-ambiguity.md)

### Risk and uncertainty

**Chances you can measure versus chances you cannot.** Frank Knight, *Risk, Uncertainty and
Profit* (1921), ch. I: "risk" proper is measurable uncertainty, hardly an uncertainty at all;
uncertainty proper is unmeasurable, with no class of like cases. Ellsberg's ambiguity sits between
(thin or conflicting evidence, not none).

- **The Rawls-Harsanyi dispute is whether the veil is risk or uncertainty** ([3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md)).

*Lessons:* [3.1](lessons/03-01-the-ellsberg-paradox.md), [3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md)

### Weight of evidence

**How much relevant evidence stands behind a probability, as distinct from the probability.**
Keynes, *A Treatise on Probability* (1921), ch. VI ("The Weight of Arguments"): new evidence may lower
a probability but always raises its weight. His two urns (known half-and-half vs unknown mix) both
give one half, with different weights. The principle of indifference can fix the probability but not
the weight (ch. IV discusses the unknown urn; [`epistemology`](../epistemology/syllabus.md) 5.4).

*Lessons:* [3.1](lessons/03-01-the-ellsberg-paradox.md)

### Maxmin expected utility

**Keep a set of probabilities your evidence allows, score each act by its worst expected utility over
the set, and take the best worst case.** Itzhak Gilboa and David Schmeidler (1989):

$$V(f)=\min_{P\in C}E_P[u(f)]$$

$C$ a nonempty closed convex set of priors.

- **Limits:** singleton $C$ is EU; $C$ = all priors is the [maximin](#maximin) rule; with a single
  uniform prior over states it is the Laplace rule ([3.3](lessons/03-03-decisions-under-ignorance.md)).
- **Axioms:** ordering, continuity, monotonicity, plus **certainty independence** (mixing with the same
  *constant* act never reverses a ranking) and **uncertainty aversion** ($f\sim g$ implies the 50-50
  mixture is at least as good: you like hedging). They replace full independence, the mixture form of
  the sure-thing principle. $u$ affine-unique, $C$ unique.
- **35-red urn, $b\in[20,50]$ (3.2):** worst cases red 0.35, black 0.20, red-or-yellow 0.50,
  black-or-yellow 0.65: the Ellsberg choices.
- **Not maximin:** maximin looks at the worst *outcome*, maxmin EU at the worst *expected utility*.
- **A zero-sum game against a nature that picks the prior after you pick the act** ([`grad-game-theory` 1.4](../grad-game-theory/lessons/01-04-zero-sum-minimax-lp-duality.md)).
- **Behind the veil:** single prior "equal chances" is Harsanyi; every prior on positions is Rawls ([3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md)).
- **The case against:** it can refuse free information ([dynamic inconsistency](#dynamic-inconsistency)).
- **Ambiguity analogue of a convex risk function** ([2.4](lessons/02-04-risk-beyond-curvature.md)).

*Lessons:* [3.1](lessons/03-01-the-ellsberg-paradox.md), [3.2](lessons/03-02-models-of-ambiguity.md), [3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md)

### Alpha-maxmin

**Average the worst and best expected utilities over the set, with $\alpha$ the weight on pessimism.**

$$V_\alpha(f)=\alpha\min_{C}E_P[u(f)]+(1-\alpha)\max_{C}E_P[u(f)]$$

- **$\alpha=1$ is maxmin EU, $\alpha=0$ pure optimism.** Ghirardato, Maccheroni and Marinacci (2004) gave a
  framework in which $C$ measures the ambiguity *perceived* and $\alpha$ the *attitude* to it. (The
  lesson does not claim they axiomatized the constant-$\alpha$ form.)
- **35-red urn, $b\in[20,50]$:** the Ellsberg pattern holds iff $\alpha>\tfrac12$; reverse below;
  indifference in both pairs at $\alpha=\tfrac12$. The same set fits opposite attitudes.
- **Hurwicz's optimism index** ([3.3](lessons/03-03-decisions-under-ignorance.md)) is the same idea applied
  to outcomes instead of expectations.

*Lessons:* [3.2](lessons/03-02-models-of-ambiguity.md)

### Imprecise credence

**When the evidence is thin, a rational belief state is itself a set $C$ of probability functions**
(Isaac Levi, James Joyce). Owned here as a decision model; what a precise credence is belongs to
[`epistemology`](../epistemology/syllabus.md) 5.1 (which has no imprecise-credence lesson).

- **It does not fix a decision rule:** Levi's E-admissibility permits any act best under *some* $P\in C$;
  maxmin picks the act best under the worst $P$.
- **Rivals without sets of priors:** Schmeidler's (1989) Choquet expected utility (a non-additive
  capacity); the smooth model of Klibanoff, Marinacci and Mukerji (2005).
- **Elga (2010):** an imprecise agent can reject each of two bets whose combination is a sure gain.

*Lessons:* [3.2](lessons/03-02-models-of-ambiguity.md)

### Dynamic inconsistency

**The plan made ex ante and the choice made later come apart.** Hammond (1988): dynamic consistency
plus consequentialism force independence, so an Ellsberg chooser must give up one.

- **Refusing free information (3.2):** maxmin, 35-red urn, $b\in[20,50]$, prior-by-prior Bayesian
  updating. Ex ante black-or-yellow (0.65) beats red-or-yellow (0.50). Told "not yellow", she bets on
  red ($\min 7/17$ vs $\min 4/11$), so learning leaves her holding red-or-yellow, worth 0.50. She would pay
  up to 0.15 util not to learn. The worst-case prior shifts with the information.
- **The argument against (Al-Najjar and Weinstein 2009).** (1) For an EU agent free information never
  lowers a decision's value (Good 1967). (2) A rational agent never pays to avoid free, relevant
  information. (3) A maxmin agent, prior-by-prior updating and choosing by what lies ahead, sometimes
  does. ∴ Maxmin EU so updated is not a standard of rationality. **Critics attack premise 1's reach:**
  Good's proof uses the independence structure in dispute.
- **Exits, each with a cost:** sophisticated choice (decline the information); resolute choice
  (McClennen 1990, gives up consequentialism); another updating rule. Gilboa, Postlewaite and
  Schmeidler (2009) deny rationality means Savage's axioms: a choice is irrational only if the agent,
  shown the analysis, would change it.
- **The trap:** she is not wrong about any fact; ambiguity aversion, prior-by-prior updating and
  consequentialism cannot all hold together.

*Lessons:* [3.2](lessons/03-02-models-of-ambiguity.md), [1.4](lessons/01-04-what-a-representation-theorem-shows.md)

### Value of information

**For a single-prior expected-utility agent, free information never lowers the expected value of the
decision, so she never pays to avoid it** (I. J. Good, 1967). The theorem presupposes independence;
maxmin EU with prior-by-prior updating breaks it ([dynamic inconsistency](#dynamic-inconsistency)).

*Lessons:* [3.2](lessons/03-02-models-of-ambiguity.md)

### Maximin

**Rank each act by its worst outcome and take the best worst case** (Wald's criterion):
$\min_j u_{ij}$. Needs only an ordinal ranking of cells.

- **Fails Milnor's column linearity** ([3.3](lessons/03-03-decisions-under-ignorance.md)); can rank an act
  equal to one that weakly dominates it.
- **Against nature it plays as if nature were a zero-sum opponent.** The minimax theorem
  ([`grad-game-theory` 1.4](../grad-game-theory/lessons/01-04-zero-sum-minimax-lp-duality.md)) concerns an
  opponent choosing columns to hurt you; against nature it supplies an analogy, not an argument.
- **Rawls's rule (3.4):** $V_R(a)=\min_i x_i(a)$ over primary goods; leximin breaks ties by the
  next-worst position. Rawls denies it is a general rule under uncertainty ([Rawls conditions](#rawls-conditions-for-maximin)).
- **As a ranking of lotteries it violates vNM continuity:** with $72\succ16\succ3$, "72 with chance $p$,
  else 3" sits below a sure 16 for every $p<1$, above at $p=1$.
- **Limit of CRRA expected utility as $\eta\to\infty$;** no finite $\eta$ reaches it.
- **The cost of maximin (3.4 Example 1):** F (16,16,16) over B (3,24,72) gives up 17 thousand per head in
  Harsanyi's currency; Rawls's defender: B buys its average by putting a third at 3.
- **Not minimax regret** (worst shortfall), and **not maxmin EU** (worst expectation).

*Lessons:* [3.3](lessons/03-03-decisions-under-ignorance.md), [3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md)

### Maximax

**Rank each act by its best outcome:** $\max_j u_{ij}$. Hurwicz with $\alpha=1$; ordinal. Fails
column linearity and convexity.

*Lessons:* [3.3](lessons/03-03-decisions-under-ignorance.md)

### Hurwicz criterion

**Blend each act's best and worst outcomes by an optimism index $\alpha$.**

$$H_\alpha(a_i)=\alpha\max_j u_{ij}+(1-\alpha)\min_j u_{ij}$$

$\alpha=0$ maximin, $\alpha=1$ maximax. Reads only the extremes, so it never picks an act whose merit is
two good states rather than one (C in 3.3's biotech table). Fails column linearity and convexity
($0<\alpha<1$). Milnor credits it to an unpublished Hurwicz paper.

*Lessons:* [3.3](lessons/03-03-decisions-under-ignorance.md)

### Laplace rule

**No reason to favour any state, so treat them as equally likely:** $\tfrac1n\sum_j u_{ij}$, expected
utility with equal probabilities (the principle of insufficient reason; as epistemology, the
principle of indifference, [`epistemology`](../epistemology/syllabus.md) 5.4).

- **Depends on how states are cut,** so it fails **column duplication** (split "strict" into "by statute"
  and "by guidance" and the average shifts): the partition problem of 1.1 again. 3.4's example: (0,10)
  vs (6,6), duplicating column 2 flips the choice.
- **Milnor's Theorem 2:** ordering, symmetry, strict dominance, row adjunction and column linearity
  force it.
- **Harsanyi's equiprobability is the Laplace rule applied to persons;** a duplicated column is then
  another person, which Harsanyi counts as the point ([3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md)).

*Lessons:* [3.3](lessons/03-03-decisions-under-ignorance.md), [3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md)

### Minimax regret

**In each state, measure how far you fall short of the best act on the menu, and keep the worst
shortfall small** (Savage, "The Theory of Statistical Decision", 1951).

$$r_{ij}=\max_k u_{kj}-u_{ij}$$

Choose the act minimizing $\max_j r_{ij}$.

- **Menu-dependent:** regrets depend on the other acts through the column best, so adding an act you will
  not choose can reverse the ranking of two you might. Fails **row adjunction** (independence of
  irrelevant alternatives), and only that.
- **3.3 Example 2:** on $\{A,B,C\}$ it picks A; adding D (never chosen) raises the $s_1$ best from 6 to 10
  and the choice switches to B.
- **The regret theorist accepts the menu-dependence:** knowingly passing up 10 is a worse outcome than
  passing up 6. Rivals keep the axiom and owe an account of why forgone options are not part of what
  happens to you.
- **Not "minimize your worst loss":** that is maximin.

*Lessons:* [3.3](lessons/03-03-decisions-under-ignorance.md)

### Milnor axioms

**Conditions on any rule that ranks rows of any matrix; every classical rule for ignorance gives
one of them up, and they cannot all hold.** John Milnor, "Games against nature" (1954).

- **The four that separate the rules:** *row adjunction* (adding an act does not change the ranking of
  the old ones); *column linearity* (adding a constant to one column changes nothing: nature has no
  prejudice for or against you); *column duplication* (copying a column changes nothing); *convexity*
  (if two acts tie, an act paying their average in every state is not ranked below them). The others:
  ordering, symmetry, strict dominance, continuity, affine invariance, a weak row adjunction
  ("special row adjunction").
- **Theorem 1** (for choice among the listed acts), as verified against Milnor's text in 3.3:

| Rule | Fails |
|---|---|
| Laplace | column duplication |
| Maximin (Wald) | column linearity |
| Hurwicz, $0<\alpha<1$ (and maximax) | column linearity, convexity |
| Minimax regret (Savage) | row adjunction |

- **Theorem 2:** ordering + symmetry + strict dominance + row adjunction + column linearity force
  Laplace, which fails column duplication. So the set is jointly unsatisfiable.
- **Maximin, Hurwicz and minimax regret,** unlike Laplace, can rank an act equal to one that weakly
  dominates it.
- **Each axiom smuggles a picture of the problem,** so picking one to keep is already picking a side.
- **6.3:** menu-relative variance normalization violates row adjunction (an unchosen option can flip A
  vs B) ([6.3](lessons/06-03-moral-uncertainty.md)).

*Lessons:* [3.3](lessons/03-03-decisions-under-ignorance.md), [6.3](lessons/06-03-moral-uncertainty.md)

### Equiprobability model

**Behind the veil you have an equal chance of being any *person*, so choosing a society is choosing
a lottery whose expected utility is the society's average utility** (Harsanyi 1953; developed against
Rawls in 1975). With population shares $s_i$:

$$V_H(a)=\sum_i s_i\,u\big(x_i(a)\big)$$

- **Equal weight on each person, not each position:** a tenth of society poor gets probability 0.1.
- **Harsanyi's argument.** (1) Behind the veil she does not know which person she will be. (2) With no
  reason to favour any person, she gives each the same probability. (3) Facing known probabilities, a
  rational chooser maximizes EU (vNM). (4) Her vNM utilities for being person $i$ under $a$ are
  comparable across persons. ∴ Highest average utility. **Weakest at premise 2:** read epistemically it
  is the contested principle of insufficient reason; read morally ("each counts equally") the chooser's
  risk attitude does moral work and a reason is owed for risk neutrality in utility. Rawls rejects 2
  (condition 1) and, by working in primary goods, 4.
- **Harsanyi's objection to maximin:** it forbids ordinary life (a better job across the country,
  crossing a street). **Rawls's reply:** the veil is a one-shot choice of a whole life.
- **Over income vs over utility:** with CRRA $\eta$ the certainty equivalent is a power mean, and on 3.4's
  table the choice switches B to L at $\eta\approx0.95$ and L to F at $\eta\approx3.30$. If the entries are
  already vNM utilities, curving them again double counts (Harsanyi). Over income they differ in
  degree; over well-being in kind.
- **Harsanyi's other argument,** needing no veil, is the [aggregation theorem](#harsanyis-aggregation-theorem) (1955).

*Lessons:* [3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md)

### Rawls conditions for maximin

**Maximin is rational only when three conditions hold together, and Rawls claims the veil meets
them** (*A Theory of Justice*, 1971, §26, paraphrased):

1. no basis, or a very insecure one, for probabilities;
2. the chooser cares little for gains above the minimum she can guarantee;
3. the rejected options risk outcomes she could not accept.

- **Rawls denies maximin is in general a suitable rule under uncertainty;** the claim is local.
- **Weakest point:** the thick veil is Rawls's design, so condition 1 holds by stipulation; condition 2
  is a strongly concave attitude to income, which Harsanyi absorbs into $u$ or calls unmotivated.
- **The theory itself** (original position, primary goods, difference principle) is
  [`political-philosophy`](../political-philosophy/syllabus.md) 2.2-2.3; the separateness-of-persons
  objection behind the thick veil is [`ethics` 1.3](../ethics/lessons/01-03-justice-and-the-separateness-of-persons.md).

*Lessons:* [3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md)

## Newcomb and the causal-evidential split

### Newcombs problem

**Your choice is evidence about a state it cannot cause.** A predictor with an excellent record has
already put $M$ in the opaque box iff it predicted one-boxing; the clear box holds $T<M$. Due to the
physicist William Newcomb; published by Robert Nozick (1969, in a volume of essays in honor of Carl
Hempel) as a conflict between two principles of choice.

| | Full $F$ | Empty $E$ |
|---|---|---|
| One | $M$ | $0$ |
| Two | $M+T$ | $T$ |

- **Dominance:** Two beats One by $T$ in each column.
- **Expected utility (act-conditional):** with $\Delta=P(F\mid\text{One})-P(F\mid\text{Two})$,
  $EU(\text{One})-EU(\text{Two})=\Delta M-T$. One-box iff $\Delta M>T$.
- **Symmetric reliability $p$:** $\Delta=2p-1$, threshold $p^*=\dfrac{M+T}{2M}=\tfrac12+\dfrac{T}{2M}$.
  As $T/M\to0$ a barely-better-than-chance predictor suffices; as $T/M\to1$ none does.
- **Where they collide: premise 1 of the dominance argument** ([dominance](#dominance)). Causally true
  (contents fixed yesterday); evidentially false ($\Delta>0$). The **two-boxer** keeps dominance over
  causally fixed states and gives up act-conditional weighting where the act only indicates the state.
  The **one-boxer** keeps act-conditional weighting and gives up dominance over states causally fixed
  but evidentially dependent.
- **Each side's exposure:** the EU argument "manages the news"; the dominance argument must call
  predictably ending with about $T$ rational as $p\to1$. Each charges the other with begging the
  question. Both need a reliable predictor of a free choice to be coherent, which some doubt.
- **A track record is not a reliability:** a "predictor" that always fills the box can have a 90 percent
  hit rate with $\Delta=0$, and both arguments then two-box (4.1 Example 2).
- **One-boxing needs neither backward causation nor an infallible predictor.** The threshold assumes
  utility linear in money.
- **Lewis (1979)** argued the prisoner's dilemma against a near-copy is a Newcomb problem.
- **Each theory's verdict:** EDT one-boxes iff $\Delta M>T$; CDT two-boxes by $T$ at every credence
  $q$; with the tickle defence EDT two-boxes; ratifiability forbids one-boxing; functional decision theory
  one-boxes.

*Lessons:* [1.1](lessons/01-01-acts-states-outcomes.md), [4.1](lessons/04-01-newcombs-problem.md), [4.2](lessons/04-02-evidential-decision-theory.md), [4.3](lessons/04-03-causal-decision-theory.md), [4.4](lessons/04-04-hard-cases-for-both.md)

### Evidential decision theory

**Choose the act that would be the best news: the utility you expect, given that you learn you did
it.** Richard Jeffrey, *The Logic of Decision* (1965; 2nd ed. 1983). Acts, states and outcomes are all
propositions; the **desirability** of $A$ is

$$V(A)=\sum_i P(S_i\mid A)\,u(A,S_i)$$

- **Newcomb:** one-boxes iff $\Delta M>T$ (4.1's expected-utility principle made general).
- **Uses causal beliefs** through $P$; diverges from causal reasoning only where an act is evidence for
  what it does not cause. If $P(K\mid A)=P(K)$ for all $K,A$, $V=U$ and both reduce to Savage.
- **Representation theorem** due to Ethan Bolker (turning preferences over propositions into $P$ and $u$).
- **Best feature:** [partition invariance](#partition-invariance), dissolving 1.1's partition problem.
- **The smoking-lesion objection** (4.2). (1) Gene $G$ causes a taste for smoking and cancer; smoking
  causes nothing. (2) Smoking is evidence of $G$, so $P(C\mid S)>P(C\mid\neg S)$. (3) If that gap times
  cancer's cost exceeds smoking's pleasure, EDT abstains. (4) Abstaining to improve news about a state
  your act cannot affect is irrational. ∴ EDT is false. **The [tickle defence](#tickle-defence) attacks
  premise 2** for the deliberating agent.
- **The dilemma:** keep the tickle defence and two-box in Newcomb, or drop it and abstain in the lesion.
- **Gives up:** dominance over causally independent states. Pays in XOR blackmail ([4.4](lessons/04-04-hard-cases-for-both.md)),
  where ratifiability repairs it; indifferent (stably) in Death in Damascus at $100(1-p)$.
- **Leading recent defender:** Arif Ahmed, *Evidence, Decision and Causality* (2014).

*Lessons:* [4.1](lessons/04-01-newcombs-problem.md), [4.2](lessons/04-02-evidential-decision-theory.md), [4.3](lessons/04-03-causal-decision-theory.md), [4.4](lessons/04-04-hard-cases-for-both.md)

### Partition invariance

**Jeffrey's $V(A)$ is the conditional expectation of utility given $A$, so every partition of states
returns the same number.** Jeffrey requires a coarse cell's value to average its parts,

$$u(A,S_i)=\sum_j P(S_{ij}\mid A\wedge S_i)\,u(A,S_{ij})$$

and total probability does the rest. The unconditional formula $\sum_i P(S_i)u(A,S_i)$ lacks it when
states are act-dependent (Lewis 1981 pressed this): in 4.2's lesion it says smoke on
$\{C,\neg C\}$ ($-12.5$ vs $-22.5$) and abstain on $\{R,\neg R\}$ ($-60$ vs $-30$). Partition invariance
shows the formula is well defined, not that $P(S\mid A)$ is the right weight.

*Lessons:* [4.2](lessons/04-02-evidential-decision-theory.md)

### Smoking lesion

**A gene causes both smoking and cancer; smoking causes nothing. Smoking is bad news but does no
harm.** The textbook confounder (origin unattributed in the lessons).

- **4.2's numbers:** $P(G)=\tfrac14$, $P(S\mid G)=0.9$, $P(S\mid\neg G)=0.2$, $P(C\mid G)=0.6$,
  $P(C\mid\neg G)=0.1$; smoking $+10$, cancer $-100$. $V(S)=-30$, $V(\neg S)=-12$: EDT abstains. Smoking
  dominates on the gene partition by 10.
- **4.3's numbers:** $P(G)=0.2$, cancer 0.8/0.1, $P(G\mid\text{smoke})=0.6$, $P(G\mid\text{abstain})=0.1$.
  CDT: $U(\text{smoke})=-14$, $U(\text{abstain})=-24$ (smoke by 10 for every $P(G)$). Naive EDT: $-42$ vs $-17$.
- **Lewis (1981):** EDT here commends "managing the news".
- **The causalist presses:** Newcomb has the same causal structure (the predictor's reading of you as the
  common cause), so the verdicts should match.
- **The tickle defence** brings EDT into line, and with it into two-boxing.

*Lessons:* [4.2](lessons/04-02-evidential-decision-theory.md), [4.3](lessons/04-03-causal-decision-theory.md), [4.4](lessons/04-04-hard-cases-for-both.md)

### Tickle defence

**The gene can move your choice only through something you can feel, and once you know whether you
feel it, your choice is no further news about the gene** (Ellery Eells, *Rational Decision and
Causality*, 1982). If $G\to T\to S$ with $T$ introspectible, $T$ screens off:

$$P(G\mid S\wedge T)=P(G\mid\neg S\wedge T)=P(G\mid T)$$

- **Then EDT agrees with dominance** and smokes (4.2 Example 2: $-30$ vs $-40$ given the urge; $-2$ vs
  $-12$ without it).
- **It changes nothing about the theory,** only what the agent is taken to know when she conditions.
- **Objections:** Horwich (1987): she may know her beliefs and desires but not the mechanism turning
  them into choice. Any direct arrow $G\to S$ restores the news. Eells (1984) replied with a dynamic
  "meta-tickle" version, learning from her own deliberation.
- **Applied to Newcomb** it screens the choice off from the prediction, and EDT two-boxes (SEP, "Causal
  Decision Theory").

*Lessons:* [4.2](lessons/04-02-evidential-decision-theory.md)

### Causal decision theory

**Weight outcomes by what your act would bring about, holding fixed at unconditional credence
whatever it cannot touch.** Four formulations, agreeing on every case in the course:

| Formulation | Causal value |
|---|---|
| Lewis 1981 (*Australasian Journal of Philosophy*) | $U(A)=\sum_K P(K)\,u(A\wedge K)$ over [dependency hypotheses](#dependency-hypothesis) |
| Gibbard and Harper 1978 | $U(A)=\sum_S P(A\mathbin{\Box\!\!\to}S)\,u(A,S)$, the probability of the counterfactual |
| Joyce, *The Foundations of Causal Decision Theory* (1999) | Jeffrey's machinery with an image $P^A$ (credence moved to the causally nearest $A$-worlds) in place of $P(\cdot\mid A)$ |
| Skyrms, *Causal Necessity* (1980) | $U(A)=\sum_K P(K)\sum_C P(C\mid A\wedge K)\,u(A\wedge C)$, for acts with downstream effects |

- **Newcomb with credence $q$ that the box is full:** $U(\text{one})=qM$, $U(\text{two})=qM+T$; two-boxing
  wins by $T$ for every $q$. Dominance returns with a licence, since CDT's states are *defined* to be
  act-independent.
- **The argument for two-boxing.** (1) The contents are causally independent of my choice. (2)
  Whatever the contents, both boxes gets me $T$ more. (3) A rational choice is the one whose
  consequences are best, given everything outside my control. ∴ Two boxes. **Critics attack premise 3
  ("given"):** at the moment of choice the choice is the best evidence about the prediction, and CDT
  evaluates with credences the agent knows are wrong.
- **Costs:** imports causation or counterfactuals as primitives (which Jeffrey avoided); needs a
  credence over $K$ at the moment of choice, which can shift as you lean ([4.4](lessons/04-04-hard-cases-for-both.md)).
- **CDT uses the predictor's accuracy** (in $q$) but never lets the choice update $q$ as a reason for it.
- **Fixed-credence CDT presses Egan's button;** deliberational CDT (Skyrms 1990, Arntzenius 2008, Joyce
  2012) updates credence while deliberating, and may end in a credence rather than an act.
- **Gives up:** evaluating an act by everything learning it would tell you; plain CDT gives up stability.

*Lessons:* [4.1](lessons/04-01-newcombs-problem.md), [4.3](lessons/04-03-causal-decision-theory.md), [4.4](lessons/04-04-hard-cases-for-both.md)

### Dependency hypothesis

**A state that settles what each of your acts would bring about, so your act cannot influence which
one is true.** Lewis (1981): a maximally specific proposition about how the things the agent cares
about do and would depend causally on her present options.

- **Built by hand in 1.1:** "well either way / well only if I rehearse / badly either way" (0.3, 0.6,
  0.1) re-partitions the act-dependent rehearsal problem; there the dependence is causal and every
  theory agrees.
- **In Newcomb:** "full" and "empty".
- **Causal value** weights them by unconditional $P(K)$; ratifiability uses $P(K\mid A)$ after deciding.

*Lessons:* [1.1](lessons/01-01-acts-states-outcomes.md), [4.1](lessons/04-01-newcombs-problem.md), [4.3](lessons/04-03-causal-decision-theory.md), [4.4](lessons/04-04-hard-cases-for-both.md)

### Why aint cha rich

**One-boxers predictably walk away richer; if two-boxing is so rational, why are its followers
poorer?** The title of David Lewis's short 1981 paper in *Noûs*.

- **4.3's numbers** ($p=0.9$, $M=1{,}000$, $T=50$): one-boxers average 900, two-boxers 150.
- **The taunt at full strength:** a theory of rational choice exists to serve your interests; one whose
  devotees reliably do worse, in a situation they fully understand, has misidentified what rationality
  is for.
- **The causalist reply:** compare each agent with *herself*. Each two-boxer would have had 50 less by
  one-boxing (100 instead of 150). The predictor *pays for a disposition*, the disposition to make the
  irrational choice; a game can reward irrationality.
- **Crux:** which comparison counts, across agent types or between one agent's actual options. Both sides
  compute the same numbers. A cousin: ex ante vs ex post Pareto in
  [`philosophy-of-economics` 3.2](../philosophy-of-economics/lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md).

*Lessons:* [4.3](lessons/04-03-causal-decision-theory.md)

### Ratifiability

**A good choice should still look good once you have made it.** Jeffrey (*The Logic of Decision*, 2nd
ed., 1983); causal version Harper (1986). With $P(K\mid A)$ the credence on supposing you have finally
decided on $A$,

$$U_A(B)=\sum_K P(K\mid A)\,u(B,K)$$

and $A$ is ratifiable iff $U_A(A)\ge U_A(B)$ for every $B$.

- **A filter, not a third theory;** it can leave nothing standing.
- **Jeffrey offered it** so evidential reasoning would match causal verdicts where they should agree.
- **Verdicts:** forbids one-boxing in Newcomb; only refusing is ratifiable in XOR blackmail (repairing
  EDT); no city ratifiable in Death in Damascus for $p>\tfrac12$; neither act ratifiable on Egan's button
  when the credence given not pressing is below $g/(g+l)$ (4.4 Example 1: $-66$ after deciding to press,
  $4.08$ for pressing after deciding not to).
- **Kin:** like 1.4's sophisticated chooser, it judges a choice from the standpoint of the agent who has
  already made it.

*Lessons:* [4.4](lessons/04-04-hard-cases-for-both.md)

### Death in Damascus

**Death predicts where you will go; whichever city you lean towards, the other looks safer.**
Gibbard and Harper (1978). Death is wherever you go with probability $p$; survival 100, death 0.

- **After deciding Damascus:** $U_D(\text{Damascus})=100(1-p)$, $U_D(\text{Aleppo})=100p$. Neither city
  ratifiable for $p>\tfrac12$.
- **EDT is indifferent** at $V=100(1-p)$, a stable verdict; causalists find that calm suspicious.
- **An asymmetric variant** is due to Richter (1984).
- **Targets any rule that must name a pure act.**

*Lessons:* [4.4](lessons/04-04-hard-cases-for-both.md)

### Decision instability

**Every act, once chosen, makes another look better, so deliberation cannot settle on a pure act.**
In Death in Damascus with $p=0.9$ and credence $c$ that you go to Damascus,
$U(\text{Damascus})=90-80c$ and $U(\text{Aleppo})=10+80c$; the only resting point is $c=\tfrac12$, resolved by
a coin, not a choice (Skyrms 1990, Arntzenius 2008, Joyce 2012). Matching pennies against a
mind-reader; the mixed equilibrium of [`grad-game-theory` 2.2](../grad-game-theory/lessons/02-02-nash-equilibrium-mixed-strategies.md).
Egan's button turns out to be an instability case in disguise.

*Lessons:* [4.4](lessons/04-04-hard-cases-for-both.md)

### Psychopath button

**Pressing kills every psychopath; you are fairly sure you are not one, but only a psychopath would
press** (Andy Egan, "Some Counterexamples to Causal Decision Theory", *Philosophical Review*, 2007).
Pressing gives $g$ if not a psychopath, $-l$ if one; not pressing 0. With $q=P(\text{psychopath})$:

$$U(\text{press})=(1-q)g-ql$$

$$V(\text{press})=(1-q_{\text{press}})g-q_{\text{press}}l$$

- **Fixed-credence CDT presses iff $q<g/(g+l)$;** EDT uses the high credence given pressing and does not.
  Most readers, causalists included, think you should not press.
- **4.4 Example 1:** $g=6$, $l=90$, $q=0.04$, $q_{\text{press}}=0.75$, 0.02 given not pressing:
  $U=2.16$, $V=-66$; threshold $1/16$; neither act ratifiable.
- **Targets CDT with fixed credences** (acts judged by credences the act will overturn). Deliberational
  causalists accept the verdict and keep causal value; the axiom at stake is whether choice must be
  **stable**.

*Lessons:* [4.4](lessons/04-04-hard-cases-for-both.md)

### XOR blackmail and functional decision theory

**A reliable predictor demands money exactly when your house has termites or you are the kind who
pays (not both); paying is excellent news and does nothing.** From the functional-decision-theory
literature. 4.4: termites 200,000, demand 2,000. $V(\text{pay})=-2{,}000$, $V(\text{refuse})=-200{,}000$:
EDT pays. Causally, refusing wins by 2,000 for every credence $r$ in termites; only refusing is
ratifiable.

**Functional decision theory** (Yudkowsky and Soares, 2017) treats your choice as the output of a
decision procedure the predictor also models, and picks the output best when the procedure gives it
everywhere. It one-boxes, and its proponents report that it refuses to pay in XOR blackmail. Named,
not taught.

*Lessons:* [4.4](lessons/04-04-hard-cases-for-both.md)

## Aggregating people

### Harsanyis aggregation theorem

**vNM-rational people, a vNM-rational society and unanimity in indifference force society's utility
to be a weighted sum of individual utilities** (John Harsanyi, *Journal of Political Economy*, 1955).
Assumptions: (1) each person's preferences over lotteries satisfy the [vNM axioms](#vnm-axioms);
(2) so do society's; (3) [Pareto indifference](#pareto-indifference). Then for some $a_i$, $c$:

$$W(L)=\sum_{i=1}^n a_i\,u_i(L)+c$$

- **Strong Pareto plus individual utilities that are not linear combinations of one another** make the
  weights positive and unique up to a common positive factor (attribution of this strengthening not
  given in the lesson).
- **Why it is true:** every function is linear in probabilities; Pareto indifference says any direction
  all $u_i$ (and the constant) ignore, $W$ ignores; so $W$ is a linear combination of them.
- **Small case (5.1):** with *four* outcomes and two people, Pareto indifference imposes one real
  constraint (here $z\sim$ a coin flip of $x$ and $y$), which forces the form. With three outcomes and two
  affinely independent people the form is automatic: the condition does its work as outcomes outnumber
  people.
- **Settles neither the weights nor the scales.** Rescaling $u_i\mapsto ku_i+m$ turns the same social
  preference's weight into $a_i/k$ (Ana and Ben: weights 8:7 on $u$ become 8:14 when Ben is halved; keep
  8:7 and the ranking changes). "Equal weights" needs [interpersonal comparability](#interpersonal-comparability).
- **From theorem to utilitarianism (5.1).** (1) Individuals vNM. (2) A rational, impartial society vNM.
  (3) Pareto indifference. (4) So $W=\sum a_iu_i+c$. (5) Impartiality requires equal weights on
  comparable scales. (6) Each $u_i$ measures $i$'s well-being. ∴ Maximize the sum of expected
  well-being. **Critics attack 6** (Sen 1977: vNM utility represents preference under risk, not welfare;
  Weymark 1991 reconstructed the dispute) **and 2** (egalitarians; Diamond). Defenders: if well-being is
  what informed prudent preference tracks, vNM utility is its natural measure. Harsanyi: a society has no
  more exemption from rationality under risk than a person.
- **Escapes Arrow** because it uses cardinal information from preferences over lotteries.
- **Fixed population:** never had to choose between total and average ([5.3](lessons/05-03-population-ethics-total-and-average.md)).
- **Same shape as expected choiceworthiness** ([6.3](lessons/06-03-moral-uncertainty.md)), with the same unit problem.
- **Harsanyi's other route to averaging** is the veil ([equiprobability model](#equiprobability-model)); the
  theorem needs no veil.

*Lessons:* [5.1](lessons/05-01-harsanyis-aggregation-theorem.md), [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md)

### Pareto indifference

**If everyone is indifferent between two lotteries, so is society:** $u_i(L)=u_i(L')$ for all $i$
implies $W(L)=W(L')$. **Strong Pareto** adds: no one worse off and someone better off implies society
strictly prefers. With social vNM it forces Harsanyi's weighted sum; Diamond's coin flip and the
ex post egalitarian are where it bites ([5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md)).

*Lessons:* [5.1](lessons/05-01-harsanyis-aggregation-theorem.md), [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md)

### Interpersonal comparability

**Each person's vNM scale has its own free zero and unit, so comparing across people needs a premise
the theorem does not supply.**

- **1.3's siblings:** Fern's $u(50)=0.7$ vs Gus's 0.55 looks comparable (both are chances of the same
  prize), but $v_G=1.5u_G$ represents Gus equally well and flips the verdict. The **zero-one rule** (each
  person's best 1, worst 0) is a further premise (unattributed in the lesson).
- **Three things to compare (5.2):** levels (who is worse off), units (whose gain is bigger), a common
  zero. vNM alone gives none (CNC). See [informational bases](#informational-bases).
- **Harsanyi's source:** extended preferences ("I'd rather be her in her situation than him in his"), or
  a substantive theory of well-being ([`ethics` 1.2](../ethics/lessons/01-02-what-is-good-for-a-person.md)).
- **Population ethics** needs levels and units comparable plus a neutral level 0 (a life neither worth
  living nor worth avoiding) ([5.3](lessons/05-03-population-ethics-total-and-average.md)).
- **The moral-uncertainty twin** is [intertheoretic comparison](#intertheoretic-comparison) ([6.3](lessons/06-03-moral-uncertainty.md)).

*Lessons:* [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md), [5.1](lessons/05-01-harsanyis-aggregation-theorem.md), [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md), [5.3](lessons/05-03-population-ethics-total-and-average.md)

### Social welfare function

**A rule ranking outcomes by a number computed from everyone's utilities, $W(u_1,\dots,u_n)$.** The
formulas are [`grad-micro` 6.5](../grad-micro/lessons/06-05-social-choice-welfare.md)'s.

| SWF | Formula | Needs |
|---|---|---|
| Utilitarian | $\sum_i u_i$ | CUC (units) |
| Maximin | $\min_i u_i$ | OLC (levels) |
| Prioritarian | $\sum_i f(u_i)$, $f$ concave | RFC (common zero) for power or log $f$ |

- **Harsanyi's theorem forces the utilitarian form over lotteries** ([5.1](lessons/05-01-harsanyis-aggregation-theorem.md)).
- **5.2 Example 1,** $X=(1,9)$, $Y=(4,4)$: utilitarian $X$, maximin $Y$, $\sqrt{\ }$-prioritarian tie. Add 6
  to person 1 (CUC): only the sum's verdict survives. Take logs (OLC): only the minimum's survives.
  Double everything (RFC): the prioritarian tie survives.
- **Utilitarian on $\log u$ is prioritarian with $f=\log$:** under level comparability alone the two are not
  yet different claims.

*Lessons:* [5.1](lessons/05-01-harsanyis-aggregation-theorem.md), [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md)

### Informational bases

**Which cross-person comparisons the facts allow decides which social welfare functions mean
anything:** a verdict counts only if it survives every transformation the information permits (Sen,
1970 and 1977; standard labels).

| Basis | Permitted transforms | Compares | Supports |
|---|---|---|---|
| CNC cardinal non-comparable | $a_iu_i+b_i$, each $a_i>0$ | nothing | no non-dictatorial rule (Arrow persists) |
| OLC ordinal level-comparable | one increasing $\varphi$ for all | who is better off | maximin, leximin |
| CUC cardinal unit-comparable | $au_i+b_i$, one $a>0$ | whose gain is bigger | utilitarian sum |
| CFC cardinal fully comparable | $au_i+b$ | both | both, and mixtures |
| RFC ratio-scale fully comparable | $au_i$ | both, plus a meaningful zero | power and log prioritarian |

- **Sen:** Arrow's impossibility survives cardinality under CNC; comparability, not cardinality, escapes it.
- **Characterizations:** leximin from an equity axiom under OLC (Hammond 1976; d'Aspremont and Gevers
  1977); utilitarianism under CUC (d'Aspremont and Gevers).
- **The argument (5.2).** (1) A social verdict is meaningful only if invariant under the permitted
  transforms. (2) Choice data deliver only CNC. (3) Under CNC no non-dictatorial rule meets Arrow's
  conditions. ∴ Every working SWF rests on a comparability premise choice data do not supply. **Critics
  attack 2's "only"** (extended preferences; a substantive theory of well-being): the conclusion becomes a
  challenge to name the source.
- **Maximin is not more modest:** it needs less cardinal information but a different, equally
  value-laden comparison of levels.

*Lessons:* [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md)

### Prioritarianism

**A unit of well-being counts for more the worse off its recipient is** (treated here only formally;
the justice debate is [`political-philosophy`](../political-philosophy/syllabus.md) 2.6, and
[`ethics` 1.3](../ethics/lessons/01-03-justice-and-the-separateness-of-persons.md) runs it with $f=\sqrt{\ }$).

$$W=\sum_i f(u_i),\quad f \text{ increasing, strictly concave}$$

- **Family** $f_\eta(u)=u^{1-\eta}/(1-\eta)$, $f_1=\log$: $\eta=0$ utilitarian, $\eta\to\infty$ maximin; $\eta$ is
  inequality aversion (the $\eta$ of [`philosophy-of-economics` 4.2](../philosophy-of-economics/lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md),
  the welfare weights of [`public-economics` 5.1](../public-economics/lessons/05-01-the-linear-income-tax.md)).
- **Needs RFC:** common rescaling preserves the ranking; adding a constant does not.
- **Under risk, two versions:** ex post $W_{\text{post}}=E_L[\sum_i f(u_i)]$ (keeps social EU, can violate ex
  ante Pareto) and ex ante $W_{\text{ante}}=\sum_i f(E_L[u_i])$ (keeps ex ante Pareto, violates social
  independence).

*Lessons:* [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md)

### Ex ante and ex post Pareto

**Judge a risky social prospect by each person's expected utility (ex ante) or by how lives actually
turn out (ex post); under risk you cannot have everything.** Owned informally by
[`philosophy-of-economics` 3.2](../philosophy-of-economics/lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md)
(with spurious unanimity); the formal core is here.

- **A corollary of Harsanyi's theorem, not a separately named theorem.** If each person's vNM utility is
  the well-being measure, social EU plus Pareto indifference over lotteries make society rank by
  $E_L[\sum_i a_iu_i]$: blind to correlation across people and to fair chances.
- **Three conditions, keep any two:** social expected utility (independence at the social level); ex ante
  Pareto; concern for equality or fair chances. $W_{\text{post}}$ gives up the second, $W_{\text{ante}}$ the
  first, Harsanyi's sum the third.
- **Correlated vs anti-correlated (5.2):** $C$ = both 10 or both 0 on a coin; $A$ = one gets 10, the other 0.
  Each person's expectation is 5 under both, so Pareto indifference demands $C\sim A$; an ex post
  egalitarian scoring $E[\min_i u_i]$ gives $C=5$, $A=0$ and must give up ex ante Pareto.
- **Soft spot:** individuation of outcomes. If "received it by a fair lottery" is a different outcome,
  Diamond's choices no longer break independence (Broome discusses this); if every violation can be
  redescribed away, independence constrains nothing.

*Lessons:* [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md)

### Diamonds objection

**Giving an indivisible good to one person and holding a fair lottery have the same expected sum,
yet the lottery seems fairer** (Peter Diamond, 1967, commenting on Harsanyi).

- **The kidney (5.2):** Ines or Jun, 10 with it, 0 without. Harsanyi's equal-weight sum: $G_I=G_J=L=10$.
  $W_{\text{post}}$ with $\sqrt{\ }$: all $\sqrt{10}$, indifferent too. $W_{\text{ante}}$: $G_I=\sqrt{10}\approx3.16$,
  $L=2\sqrt5\approx4.47$, prefers the lottery.
- **The price:** $G_I\sim G_J$ yet their 50-50 mixture is strictly better, which [independence](#independence-axiom)
  forbids at the social level. Diamond accepted that society should not obey the sure-thing principle.
- **Any concern for the worse off does not answer it:** ex post views are indifferent, since every
  outcome of the lottery is as unequal as handing it over.
- **Attacks premise 2** of Harsanyi's argument (social vNM).

*Lessons:* [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md)

### Total view

**Compare populations by total welfare, whoever has it.** With welfare levels $w_i$ for everyone who
ever lives in $X$:

$$T(X)=\sum_{i=1}^{N(X)}w_i$$

$X$ at least as good as $Y$ iff $T(X)\ge T(Y)$. Henry Sidgwick took this side (*The Methods of Ethics*).

- **Same number, same verdict as the average view** (Fact 1).
- **Accepts all three mere-addition premises** and so the [repugnant conclusion](#repugnant-conclusion).
- **Keeps** negative addition (adding only lives worse than none makes things worse) and separability
  (an addition's value does not depend on unaffected people). Implies no sadistic conclusion.
- **Counts both halves of the procreative asymmetry symmetrically:** adding $v$ adds $v$.
- **Defence:** our intuitions about huge numbers and lives barely worth living are unreliable (a
  general debunking reply).
- **Critical level $c=0$** is the total view. The utilitarian SWF of `grad-micro` 6.5 is the total view
  with $N$ fixed.

*Lessons:* [5.3](lessons/05-03-population-ethics-total-and-average.md), [5.4](lessons/05-04-population-ethics-escape-routes.md)

### Average view

**Compare populations by how well the typical life goes, however many there are:**
$\bar w(X)=T(X)/N(X)$ (written $\bar w$, not $A$, since $A$ names a population).

- **Marginal rule:** adding $k$ people at $v$ changes the average by $\dfrac{k\,(v-\bar w)}{N+k}$. It judges
  a new life by whether it beats the average, not whether it is worth living.
- **Two bad cases:** good lives below average make things worse; lives worse than none, above a
  negative average, make things better (Parfit's **hell** case: 1,000 at $-50$ plus 1,000 at $-10$ raises the
  average to $-30$). The **Egyptology objection:** whether a birth today is good depends on how the ancient
  Egyptians lived.
- **Avoids the repugnant conclusion;** gives up negative addition and separability; denies mere addition
  when added lives are below average; implies the [sadistic conclusion](#sadistic-conclusion).
- **The remoteness reply** (hell cases are remote) would excuse any theory's bad cases, and the averagist
  cannot borrow the debunking reply, since hell involves no huge numbers.
- **The veil's equiprobability chooser maximizes the average,** which is why the veil is sometimes read as
  an argument for this view once numbers vary ([3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md)).

*Lessons:* [5.3](lessons/05-03-population-ethics-total-and-average.md), [5.4](lessons/05-04-population-ethics-escape-routes.md)

### Repugnant conclusion

**For any population of excellent lives, some larger population of lives barely worth living is
better** (Derek Parfit, *Reasons and Persons*, 1984, Part IV). On the total view, $m$ people at
$\varepsilon$ beat $n$ at $w$ iff $m>nw/\varepsilon$.

- **Not about misery:** the lives are worth living; the worry is that quantity outweighs quality
  without limit.
- **Reached by another road** through the [mere addition paradox](#mere-addition-paradox).
- **Blocked by** critical-level ($c>0$), average and variable value views; accepted by the total view.
- **One of Arrhenius's adequacy conditions** is avoiding it.

*Lessons:* [5.3](lessons/05-03-population-ethics-total-and-average.md), [5.4](lessons/05-04-population-ethics-escape-routes.md)

### Non-identity problem

**Choices that change who is born leave no one worse off than she would otherwise have been, since
under the other option she would not exist.** Narrow person-affecting principles find no victim.

- **Applied, not repeated:** [`philosophy-of-debt` 6.2](../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md)
  (a century-old war debt) and [`philosophy-of-economics` 4.3](../philosophy-of-economics/lessons/04-03-uncertainty-the-long-run-and-future-people.md)
  (depletion and discounting).
- **Parfit's response** was impersonal comparison; his same-number version settles those cases but cannot
  choose between total and average (same number, same verdict).
- **The argument for a variable-population axiology (5.3).** (1) Some choices that change who exists are
  worse than their alternatives. (2) In such choices no one is worse off (non-identity). (3) So some
  outcomes are worse impersonally. (4) Some such choices also change how many exist. ∴ Ethics needs a
  ranking of populations of different sizes. **Critics attack 3:** wide person-affecting views,
  non-comparative accounts of harm, contractualism.
- **Does not favour the total view;** it shows only that some comparisons must be impersonal.

*Lessons:* [5.3](lessons/05-03-population-ethics-total-and-average.md), [5.4](lessons/05-04-population-ethics-escape-routes.md)

### Procreative asymmetry

**A strong reason not to create a miserable life, no comparable reason to create a happy one**
(discussed by Jan Narveson and later Jeff McMahan). Neither simple view delivers it: the total view
counts both halves (adding $v$ adds $v$); the average view looks at the sign of $v-\bar w$, not of $v$.

*Lessons:* [5.3](lessons/05-03-population-ethics-total-and-average.md)

### Mere addition paradox

**Three premises that look too obvious to state lead, step by step, to the repugnant conclusion**
(Parfit, *Reasons and Persons*, Part IV).

1. **Mere addition.** A+ (A plus extra lives worth living, affecting no one) is not worse than A.
2. **Equalizing improvement.** B (same number as A+, everyone equal, higher total and average) is better than A+.
3. **Transitivity.** So B is better than A; iterate to Z, the repugnant conclusion.

| View | Gives up | Cost |
|---|---|---|
| Total | nothing | accepts the repugnant conclusion |
| Average | premise 1 (below-average additions) | sadistic conclusion, hell, Egyptology |
| Critical level, $c>0$ | premise 1 (additions below $c$) | sadistic conclusion |
| Variable value | premise 1 (additions well below average) | sadistic conclusion |
| Narrow person-affecting | transitivity (accepts 1 and 2, denies B better than A) | no consistent ordering |
| Temkin | transitivity outright | money pumps; no best option on some menus |

- **5.4 Example 1:** A = 200 at 90, A+ adds 200 at 10, B = 400 at 55, $c=25$. Totals 18,000, 20,000, 22,000;
  averages 90, 50, 55; critical-level 13,000, 10,000, 12,000.
- **The crux:** premise 1 rests on the person-affecting restriction, premise 2 on impersonal comparison.
  Critics of 1 say "mere addition" smuggles in the person-affecting intuition the total view rejects;
  defenders reply that denying 1 is what leads to the sadistic conclusion. Only the total view keeps both.
- **Arrhenius's impossibility theorems** (named, not proved): no complete, transitive axiology meets a short
  list of adequacy conditions that includes avoiding the repugnant and sadistic conclusions and a mild
  mere-addition principle.

*Lessons:* [5.4](lessons/05-04-population-ethics-escape-routes.md)

### Critical-level view

**A life adds value only if its welfare exceeds a critical level $c>0$; lives worth living but below
$c$ subtract** (Blackorby, Bossert and Donaldson are its main developers).

$$V_c=\sum_{i=1}^n(u_i-c)$$

- **$c=0$ is the total view.** With $c>0$, premise 1 of mere addition goes and the repugnant conclusion is
  blocked (Z's lives sit below $c$).
- **Lives below $c$ are good for those who live them;** the view says only that adding them makes the
  outcome worse. That gap is what the sadistic conclusion exploits.
- **Implies the [sadistic conclusion](#sadistic-conclusion).**

*Lessons:* [5.4](lessons/05-04-population-ethics-escape-routes.md)

### Sadistic conclusion

**Sometimes adding people with negative welfare is better than adding some number of people with
positive welfare** (named by Arrhenius). Implied by critical-level ($c>0$) and average views.

- **5.4 Example 2:** from A (200 at 90), $c=25$: adding 40 at $-5$ costs 1,200, adding 200 at 15 costs
  2,000, so the critical-level view prefers the suffering. The average view agrees (74.2 vs 52.5); the
  total view does not ($-200$ vs $+3{,}000$).
- **Defences:** both options are bad, and preferring the less bad is no scandal; or it follows from the
  same feature that blocks Z. Either way the bullet generalizes.

*Lessons:* [5.4](lessons/05-04-population-ethics-escape-routes.md)

### Person-affecting views

**An outcome is worse only if it is worse *for* someone.**

- **Narrow:** counts only people existing in both outcomes. On 5.4's numbers it accepts premises 1 and 2
  of mere addition (net $200(-35)+200(45)=2{,}000>0$) and denies B better than A, so it loses
  transitivity for the relation it defines. It is the version non-identity defeats.
- **Wide** (Parfit's formulation): compares the benefits of whoever would exist, built for non-identity.
- **Say which version you mean;** other versions locate the loss elsewhere.

*Lessons:* [5.3](lessons/05-03-population-ethics-total-and-average.md), [5.4](lessons/05-04-population-ethics-escape-routes.md)

### Variable value view

**More people add value, but each extra person adds less** (Hurka; Ng). With average $\bar u$ and $g$
increasing, concave and bounded:

$$V=g(n)\,\bar u$$

Like the total view for small populations, like the average for huge ones. Adding lives well below
average can lower $V$ (premise 1 fails); the bound on $g$ stops Z winning.

*Lessons:* [5.4](lessons/05-04-population-ethics-escape-routes.md)

### Intransitivity of better than

**"All things considered better than" need not be transitive, because which considerations matter
depends on which outcomes are compared** (Larry Temkin, *Rethinking the Good*, 2012). Premise 1 of
mere addition is person-affecting, premise 2 impersonal, so nothing guarantees they chain. Cost: the one
1.4 priced for individual preference, [money pumps](#money-pump), and no best option on some menus.
Temkin accepts it knowingly.

*Lessons:* [5.4](lessons/05-04-population-ethics-escape-routes.md), [1.4](lessons/01-04-what-a-representation-theorem-shows.md)

## The edges of expected value

### Pascals wager

**Living as a believer is a bet on two states, and Pascal gives three different arguments for
taking it.** Hacking ("The Logic of Pascal's Wager", *American Philosophical Quarterly*, 1972)
separated them. Acts $W$ (wager for God), $A$ (against); states $G$, $\neg G$; $p=P(G)$; $H$ the value
of salvation, $f_1,f_2,f_3$ finite.

| | $G$ | $\neg G$ |
|---|---|---|
| $W$ | $H$ | $f_1$ |
| $A$ | $f_2$ | $f_3$ |

| Argument | Needs | Exposed to |
|---|---|---|
| Dominance | $f_1\ge f_3$ ("you lose nothing") and $H>f_2$ | Pascal concedes the believer gives up pleasures, so $f_1<f_3$ |
| Expectation | $p=\tfrac12$, finite stakes in "lives": stake one to win three is favourable | the reader who thinks God unlikely |
| Dominating expectation | $H=\infty$, any $p>0$: $EU(W)=\infty>EU(A)$ | many gods, mixed strategies, continuity |

- **States are act-independent** in both senses: wagering does not cause God to exist.
- **Finite threshold:** with $c=f_3-f_1>0$ and $g=H-f_2$, wager iff $p>p^*=c/(g+c)$. Every finite $H$ leaves
  a positive threshold; only infinity removes it (6.1 Example 1: $H=10^6$, $c=5$, $p^*=1/200{,}001$).
- **Infinite utility and vNM:** the theorem delivers a real-valued $u$. **Continuity fails:** no $\alpha\in(0,1)$
  makes $\alpha S+(1-\alpha)y\sim x$, since every $\alpha>0$ is infinitely good. **Independence clashes:**
  $W\succ A$ would require $W\succ\tfrac16W+\tfrac56A$, yet both have infinite EU.
- **Which axiom each side gives up:** the wagerer keeping $H=\infty$ gives up continuity (and a ranking
  respecting independence among strategies); the critic keeping vNM makes $H$ finite and the wager wins
  only above $p^*$; the many-gods objection attacks the partition, not an axiom.
- **Where the dominating-expectation argument is weakest:** (i) the partition; (ii) the credence ($p=0$
  or infinitesimal blocks it); (iii) the arithmetic (replies such as ranking strategies first by
  probability of salvation build a new decision theory); (iv) the act (whether belief can be willed is
  [`philosophy-of-religion`](../philosophy-of-religion/syllabus.md) 5.3's). Critics who bound utility owe
  an account of the bound ([6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md)).
- **A practical reason to act at a fixed credence,** not an argument that God exists.

*Lessons:* [6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md)

### Many-gods objection

**Two columns are too few: add a jealous god who rewards only its own worshippers, and the wager
stops dominating and expectation stops ranking** (Diderot already in 1746). With infinite payoffs in
several columns EU ties the rival wagers (finite punishment) or is undefined, $\infty-\infty$ (infinite
punishment; 6.1 Example 2: credences 0.02 and 0.01, and EU cannot rank the twice-likelier god first).
It is [1.1](lessons/01-01-acts-states-outcomes.md)'s partition problem with infinite stakes; it attacks
the partition, not an axiom. The intuition that the likelier god is better comes from comparing
probabilities of salvation, not from EU.

*Lessons:* [6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md)

### Mixed-strategy objection

**Any strategy with some positive chance of ending at $W$ also has infinite expected utility, so EU
cannot single out $W$** (Antony Duff, *Analysis*, 1986; developed by Alan Hájek, *Philosophical
Review*, 2003). Wagering only if a die shows 6 scores $\tfrac16p\cdot\infty+\text{finite}=\infty$; so does
doing nothing, given any chance of coming to believe anyway. Independence would require $W$ strictly
preferred to the mixture.

*Lessons:* [6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md)

### Pascals mugging

**A mugger with no weapon promises a reward vast enough to outweigh your tiny credence that he will
deliver, and he controls the size of the reward** (Nick Bostrom, "Pascal's Mugging", *Analysis*, 2009;
Eliezer Yudkowsky named the problem in a 2007 blog post).

- **Structure:** credence $\varepsilon$, cost $c$, linear value: pay iff $V>c/\varepsilon$. Unless credence falls
  at least as fast as $1/V$, you lose; a credence of $1/V$ for every promise of $V$ is a substantive
  commitment, not a free fix.
- **6.2 Example 1:** $c=100$, $\varepsilon=10^{-9}$: the linear agent pays iff $V>10^{11}$. A bounded agent with
  $u=1-2^{-x/10^6}$ has $\varepsilon^*=1-2^{-0.0001}\approx1/14{,}427$ and refuses every offer; at $\varepsilon=10^{-4}$
  she needs about 1.70 million where the linear agent needs 1 million.
- **Every number is finite:** fanaticism is a finite phenomenon; the wager is its infinite limit.

*Lessons:* [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md)

### Fanaticism

**No probability is too small to be outweighed by a large enough finite prize** (Hayden Wilkinson,
"In Defence of Fanaticism", *Ethics*, 2022). For every $\varepsilon>0$ and sure value $v$ there is a finite
$V$ with ($V$ with probability $\varepsilon$, else 0) better than $v$ for sure. Expected value with unbounded
value implies it: $\varepsilon V>v$ iff $V>v/\varepsilon$.

- **The continuum argument (Wilkinson).** (1) [Minimal Tradeoffs](#minimal-tradeoffs). (2) Transitivity.
  ∴ Fanaticism (iterate until $r^n<\varepsilon$, link the ends). **Critics attack the chain:** intuitions about one
  step say nothing about 27 million.
- **Three responses:** accept it; [bound utility](#bounded-utility) (denies Minimal Tradeoffs, keeps
  dominance and independence); [discount probabilities](#probability-discounting) (keeps linear value,
  gives up weak dominance and independence). Same verdict on the mugger, different axioms surrendered.
- **Wilkinson's counter:** rejecting fanaticism makes rankings depend on unaffected background events, an
  updated form of Parfit's Egyptology objection.
- **In moral uncertainty:** under MEC a low-credence theory with enormous (or absolute) stakes can
  dominate ([6.3](lessons/06-03-moral-uncertainty.md)).
- **Where it bites in practice:** ranking charities, research or policies by expected lives saved;
  long-run stakes in [`philosophy-of-economics` 4.3](../philosophy-of-economics/lessons/04-03-uncertainty-the-long-run-and-future-people.md);
  the expected-value reasoning of [`ethics` 1.5](../ethics/lessons/01-05-modern-consequentialism.md).

*Lessons:* [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md), [6.3](lessons/06-03-moral-uncertainty.md)

### Minimal tradeoffs

**A very slightly lower chance can always be made up by a much bigger prize** (Wilkinson). There is
a fixed $r<1$ such that any gamble ($v$ with probability $p$) is beaten by some (larger prize with
probability $rp$). Iterated with transitivity it gives fanaticism: with $r=0.999999$, reaching $10^{-12}$
takes about 27.6 million steps, each looking like an improvement. Bounded utility and discounting deny it.

*Lessons:* [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md)

### Probability discounting

**Treat probabilities below a threshold $t$ as zero, then maximize expected value.** Bradley Monton
("How to Avoid Maximizing Expected Utility", *Philosophers' Imprint*, 2019) calls it *Nicolausian
discounting*, after Nicolaus Bernoulli.

- **Weak dominance fails, always:** prospects differing only on a sub-$t$ event are valued equally (any
  rule giving sub-threshold events zero weight).
- **Strict statewise dominance fails for the naive outcome-wise rule:** split a good event into
  differently paying sub-$t$ pieces and the whole gain vanishes, while a worse prospect paying one amount on
  the whole event keeps its value. (The lesson does not claim this of every tail-discounting version.)
- **Independence fails:** at $t=1/1000$, 1 with probability 0.002 beats 0; mix both with 0 at weight
  $\tfrac34$ and 0.0005 falls below $t$: strict preference becomes indifference.
- **Money pumps:** Kosonen (*Philosophy and Phenomenological Research*, 2024).
- **Bundling (6.2 P3):** accepts each of 50 offers (+1 with probability 0.9992, $-2{,}000$ with 0.0008) yet
  rejects the package (discounted about $-27.0$).
- **Verdicts shift** with the threshold and with how outcomes are carved (Pasadena at $t=1/1000$: 1879/2520).
- **Not bounded utility:** same verdict on the mugger, different axioms surrendered.

*Lessons:* [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md)

### Pasadena game

**A St Petersburg-style game whose expected value is not large but undefined** (Harris Nover and
Alan Hájek, 2004). First head on toss $n$: gain $2^n/n$ if $n$ odd, lose $2^n/n$ if even. Outcome $n$
contributes $(-1)^{n-1}/n$, a conditionally convergent series: $\ln2\approx0.693$ in natural order,
$\tfrac32\ln2$ with two positives per negative, $\tfrac12\ln2$ with one positive per two negatives, any value
by rearrangement. Outcomes have no privileged order, so there is no expected value. Bounded $u$ restores
absolute convergence; discounting gives a value that shifts with $t$; the fanatic has no verdict. The
strain falls on expected value itself.

*Lessons:* [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md)

### My favourite theory

**Act on the moral theory you find most credible** (MFT). Johan Gustafsson and Olle Torpman, "In
Defence of My Favourite Theory", *Pacific Philosophical Quarterly* (2014): choose an option the most
credible theory permits; it needs no intertheoretic comparison and chooses consistently over time,
while rivals, they argue, face moral money pumps or need arbitrary comparisons.

- **Gives up sensitivity to stakes** (a huge difference under a 49 percent theory counts for nothing)
  and **invariance to how theories are individuated** (split the favourite into two variants and the
  other becomes favourite).
- **Still needs** credences across theories and a way to count them.
- **Cousin:** probabiliorism ([`moral-theology` 4.1](../moral-theology/lessons/04-01-casuistry-and-the-probabilism-controversy.md)):
  the more probable opinion decides, stakes do not enter. Cousins, not twins ("probable" meant backed by
  serious reasons, not a credence; opinions about whether one law binds).

*Lessons:* [6.3](lessons/06-03-moral-uncertainty.md)

### Expected choiceworthiness

**Treat moral theories as states and their verdicts as utilities, and hedge** (Lockhart 2000;
MacAskill, Bykvist and Ord, *Moral Uncertainty*, 2020). With credences $C(T_i)$ and choiceworthiness
$CW_i$:

$$EC(A)=\sum_i C(T_i)\,CW_i(A)$$

MEC chooses the maximum. Two theories with $T_2$'s unit scaled by $k$:
$EC_k(A)=C(T_1)CW_1(A)+C(T_2)\,k\,CW_2(A)$.

- **The argument.** (1) Rational choice under uncertainty maximizes expectation. (2) Moral uncertainty is
  uncertainty like any other. (3) Theories' choiceworthiness lies on one cardinal scale, up to a common
  unit. ∴ Maximize EC. **Critics attack premise 3:** many theories are merely ordinal; absolutist theories
  may admit no finite choiceworthiness; for cardinal theories the unit is stipulated.
- **Nadia (6.3):** credences 0.7/0.3; A (6,0), B (4,8), C (0,12). MFT picks A; raw MEC picks B (5.2), the
  option neither theory ranks first; A for $k<7/12$, B for $7/12<k<7/3$, C for $k>7/3$.
- **Inherits [fanaticism](#fanaticism).**
- **The regress:** unsure between MEC and MFT, you need a rule for that, and so on. Harman (false moral
  beliefs do not excuse) and Weatherson (aiming at rightness as such is fetishism) deny the project starts.
- **Cousin:** compensationism (stakes count alongside probability) in
  [`moral-theology` 4.1](../moral-theology/lessons/04-01-casuistry-and-the-probabilism-controversy.md).
- **Same shape as Harsanyi's weighted sum** ([5.1](lessons/05-01-harsanyis-aggregation-theorem.md)), with
  theories in place of persons.

*Lessons:* [6.3](lessons/06-03-moral-uncertainty.md)

### Intertheoretic comparison

**Hedging needs an exchange rate between theories' units, and no theory supplies one.** Each $CW_i$
is at best affine-unique: shifts $b_i$ are harmless (they add $C(T_i)b_i$ to every option), the unit is
not, and the verdict can turn on $k$. Setting $k=1$ ("six means six") is a substantive claim of
comparability. The moral-uncertainty twin of interpersonal unit comparability
([5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md)).

*Lessons:* [6.3](lessons/06-03-moral-uncertainty.md)

### Variance normalization

**Give every theory an equal say, measured by how much it cares about the differences among the
options** (Owen Cotton-Barratt, MacAskill and Ord, *Journal of Philosophy*, 2020). Divide each $CW_i$ by
its standard deviation $\sigma_i$ across the options (equally weighted); with two theories, $k=\sigma_1/\sigma_2$.

- **Nadia:** $\sigma_2=2\sigma_1$, $k=\tfrac12$: A 4.2, B 4.0, C 1.8; "equal say" flips the raw verdict back to MFT's.
- **Menu-relative:** an option one theory finds atrocious inflates its $\sigma$ and shrinks its voice, so an
  unchosen option can reverse A vs B: a violation of independence of irrelevant alternatives (Milnor's
  row adjunction, [3.3](lessons/03-03-decisions-under-ignorance.md)). Reply: normalize over a fixed
  background set, at the price of choosing the set.
- **"Equal say" is a fairness ideal among theories,** not assumption-free.

*Lessons:* [6.3](lessons/06-03-moral-uncertainty.md)

## Formulas and arithmetic

Every formula the lessons compute, one row each, grouped by job. Figures are the lessons' own
illustrations. Read [Notation warnings](#notation-warnings) first: $p$, $q$, $V$ and $U$ change
meaning between modules. Arrow-Pratt, risk premia and stochastic dominance stay on the economics
cards ([`grad-micro` 2.5](../grad-micro/lessons/02-05-choice-under-uncertainty.md)).

### Tables and expected utility arithmetic

| Quantity | Formula | Symbols and note |
|---|---|---|
| Strict dominance | $u(a,s)>u(b,s)$ for all $s$ | weak: $\ge$ everywhere, $>$ somewhere ([1.1](lessons/01-01-acts-states-outcomes.md)) |
| EU gap, act-independent states | $EU(a)-EU(b)=\sum_s P(s)[u(a,s)-u(b,s)]$ | positive for every $P$ under strict dominance |
| EU, act-dependent states | $EU(a)=\sum_s P(s\mid a)\,u(a,s)$ | rehearsal: $0.9(8)+0.1(0)=7.2$ vs $0.3(10)+0.7(2)=4.4$ |
| Re-partition probabilities | $P(K_1)=P(\text{well}\mid\text{skip})$, $P(K_1)+P(K_2)=P(\text{well}\mid\text{rehearse})$ | 0.3, 0.6, 0.1; EU unchanged |
| Expected value | $\mathrm{EV}=\sum_i p_ix_i$ | [1.2](lessons/01-02-from-expected-value-to-expected-utility.md) |
| Expected utility | $\mathrm{EU}=\sum_i p_iu(x_i)$ | $u(x)=x$ gives EV |
| Certainty equivalent | $u(\mathrm{CE})=\mathrm{EU}(L)$ | concave $u$: $\mathrm{CE}<\mathrm{EV}$ (Jensen) |
| St Petersburg, capped at $2^K$ | $\mathrm{EV}_K=K+2^{-K}\cdot2^K=K+1$ | $2^{30}$ cap: 31 dollars |
| St Petersburg, $\sqrt{x}$ | $\mathrm{EU}=\sum 2^{-n/2}=\sqrt2+1$, $\mathrm{CE}=3+2\sqrt2\approx5.83$ | Cramer's $2^{n-1}$ prizes: about 2.9 |
| Super-Petersburg | $\mathrm{EU}=\sum 2^{-n}u(x_n)\ge\sum1=\infty$ | $u(x_n)\ge2^n$; against $\log_2$, $x_n=2^{2^n}$ |
| Bounded $u=1-2^{-x/1000}$ | coin flip lose 1,000 / win $G$: $\mathrm{EU}=-\tfrac12\,2^{-G/1000}<0$ | refuses for every $G$; Menger's game: EU about 0.149, CE about 234 |
| Standard gamble | $u(x)=p_x$, $x\sim G_{p_x}$; $u(w)=0$, $u(b)=1$ | [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md) |
| Construction, Step 3 | $\Pr(b)=\sum_ip_iu(x_i)=U(L)$ | $L\sim G_{U(L)}$ |
| Affine uniqueness | $v(x)=u(x)v(b)+(1-u(x))v(w)=au(x)+c$ | $a=v(b)-v(w)>0$, $c=v(w)$ |
| Fern | $u=(0,0.35,0.7,1)$ on 0, 20, 50, 100 | $U(A)=0.675$, $U(B)=0.7$, $U(C)=0.68$; $v=40u-10$ gives 17, 18, 17.2; $u^2$ reverses to $C\succ A\succ B$ |
| Money pump | loss after $k$ cycles $=3k\varepsilon$ | Mara: 2 dollars a swap, 60 after ten cycles ([1.4](lessons/01-04-what-a-representation-theorem-shows.md)) |
| Nadia's independence violation | $L\succ L'\Rightarrow u(1000)>0.9$; $0.18$ of 1,500 $\succ0.2$ of 1,000 $\Rightarrow u(1000)<0.9$ | $u(0)=0$, $u(1500)=1$; second pair is the first mixed with 0 at $\alpha=0.2$ |

### Savage and Ramsey arithmetic

| Quantity | Formula | Symbols and note |
|---|---|---|
| P2 cancellation | $EU(f)-EU(g)=P(\text{Rain})[u(10)-u(30)]+P(\text{Sun})[u(90)-u(60)]$ | shared Cloud column drops out; festival bakery gaps both 10 ([2.1](lessons/02-01-savages-framework.md)) |
| Ramsey's neutral coin | $[a\text{ on }N;\,b]\sim[b\text{ on }N;\,a]\Rightarrow P(N)=\tfrac12$ | [2.2](lessons/02-02-probability-from-preference.md) |
| Halving | $c\sim[a\text{ on }N;\,b]\Rightarrow u(c)=\tfrac12u(a)+\tfrac12u(b)$ | $u(100)=\tfrac12$, $u(225)=\tfrac34$, $u(25)=\tfrac14$ on 0-400 |
| Elicited credence | $P(E)=\dfrac{u(c)-u(b)}{u(a)-u(b)}$ | $225\sim[400\text{ on }E;\,0]$: $\tfrac34$ (not $9/16$) |
| State-dependent utility | $Q(s)=\dfrac{P(s)\lambda_s}{\sum_tP(t)\lambda_t}$ | preferences fix only $P(s)\lambda_s$ |
| Life insurance | $c\cdot\tfrac{19}{20}=50$, $c=1000/19\approx52.63$ | $P(D)=\tfrac1{10}$, $\lambda_D=\tfrac12$; analyst reads $\tfrac1{19}$ |

### Allais and risk-weighted arithmetic

| Quantity | Formula | Symbols and note |
|---|---|---|
| Allais identity | $EU(A)-EU(B)=0.20u_2-0.17u_6-0.03u_0=EU(C)-EU(D)$ | 2.3's gambles; threshold $v=20/17$ for both pairs ([2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md)) |
| Common ratio | $EU(G)-EU(H)=\alpha(EU(E)-EU(F))$ | $G=\alpha E+(1-\alpha)\delta_0$ |
| Independence mixture | $EU(\alpha X+(1-\alpha)Z)-EU(\alpha Y+(1-\alpha)Z)=\alpha(EU(X)-EU(Y))$ | gaps shrink, never flip |
| Regret | $R(X,Y)=\sum_sp_s\psi(x_s,y_s)$, $\psi(x,x)=0$; 2.3 uses $Q(d)=d+3d^3$ | pair 1: $+0.01936$ (A); pair 2 independent: $-0.66608$ (D); on the shared table $+0.01936$ (C) |
| REU | $u(x_1)+\sum_{i\ge2}r(P(\ge x_i))(u(x_i)-u(x_{i-1}))$ | outcomes worst to best ([2.4](lessons/02-04-risk-beyond-curvature.md)) |
| REU, two outcomes | $u(L)+r(p)(u(H)-u(L))$ | coin flip 0/200, linear $u$, $r=p^2$: 50 |
| REU example | $r(0.8)\cdot50+r(0.5)\cdot150=32+37.5=69.5$ | EV 115; gamble 0/50/200 with 0.2/0.3/0.5 |
| Allais under REU, $r=p^2$ | $\mathrm{REU}(B)=0.9409+0.0289(v-1)$; $\mathrm{REU}(C)=0.04$; $\mathrm{REU}(D)=0.0289v$ | pattern iff $400/289<v<880/289$; $v=7/5$ inside |

### Ambiguity arithmetic

| Quantity | Formula | Symbols and note |
|---|---|---|
| Ellsberg, no prior fits | $EU(f_1)-EU(f_2)=(u(x)-u(0))(p_R-p_B)=-(EU(f_4)-EU(f_3))$ | [3.1](lessons/03-01-the-ellsberg-paradox.md) |
| 35-red urn | $f_1\succ f_2$ iff $b<35$; $f_4\succ f_3$ iff $b>35$ | $b$ black balls of 65; symmetric $b=32.5$ backs $f_1$ and $f_3$ |
| Suspicious subject | worst mixes: red 0.35, black 0, red-or-yellow 0.35, black-or-yellow 0.65 | act-dependent states |
| Maxmin EU | $V(f)=\min_{P\in C}E_P[u(f)]$ | $b\in[20,50]$: 0.35, 0.20, 0.50, 0.65 ([3.2](lessons/03-02-models-of-ambiguity.md)) |
| Alpha-maxmin | $V_\alpha=\alpha\min_CE_P[u(f)]+(1-\alpha)\max_CE_P[u(f)]$ | black $0.5-0.3\alpha$, red-or-yellow $0.8-0.3\alpha$; Ellsberg iff $\alpha>\tfrac12$ |
| Prior-by-prior update | $\min_b\tfrac{35}{35+b}=\tfrac7{17}$, $\min_b\tfrac{b}{35+b}=\tfrac4{11}$ | given not-yellow she bets red; refusing information worth up to $0.65-0.50=0.15$ util |

### Rules under ignorance arithmetic

| Rule | Score of act $a_i$ | Note |
|---|---|---|
| Maximin | $\min_ju_{ij}$ | ordinal suffices ([3.3](lessons/03-03-decisions-under-ignorance.md)) |
| Maximax | $\max_ju_{ij}$ | ordinal |
| Hurwicz | $H_\alpha=\alpha\max_ju_{ij}+(1-\alpha)\min_ju_{ij}$ | cardinal; $\alpha$ optimism |
| Laplace | $\tfrac1n\sum_ju_{ij}$ | cardinal; equal priors |
| Regret | $r_{ij}=\max_ku_{kj}-u_{ij}$; minimize $\max_jr_{ij}$ | cardinal; menu-dependent |

**3.3's biotech table** (A 4,5,5; B 6,4,2; C 2,8,6; D 10,2,3): maximin A; maximax D; Laplace C
($16/3$); minimax regret B (max regrets 6, 4, 8, 6 from column bests 10, 8, 6); Hurwicz lines $4+\alpha$,
$2+4\alpha$, $2+6\alpha$, $2+8\alpha$, A below $\alpha=2/7$, D above. Drop D: column bests 6, 8, 6, max regrets
3, 4, 4, so A; restore D and the choice returns to B (row adjunction fails).

### Veil arithmetic

| Quantity | Formula | Symbols and note |
|---|---|---|
| Harsanyi | $V_H(a)=\sum_is_iu(x_i(a))$ | $s_i$ population shares ([3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md)) |
| Rawls | $V_R(a)=\min_ix_i(a)$ | leximin breaks ties; primary goods |
| CRRA | $u(x)=x^{1-\eta}/(1-\eta)$, $\ln x$ at $\eta=1$ | CE is the power mean of order $r=1-\eta$ |
| Power mean | $M_r=\big(\tfrac1n\sum_ix_i^r\big)^{1/r}$ | $\eta=0$ arithmetic, 1 geometric, 2 harmonic, $\eta\to\infty$ min |
| F, L, B | (16,16,16), (12,18,27), (3,24,72) | averages 16, 19, 33; geometric 16, 18, 17.31; harmonic 16, 17.05, 7.71; switches B to L at $\eta\approx0.95$, L to F at $\eta\approx3.30$ |
| Cost of maximin | $33-16=17$ thousand per head | in Harsanyi's currency |
| Maximin breaks continuity | "72 with $p$, else 3" vs sure 16 | below for every $p<1$, above at $p=1$ |

### Newcomb and decision theory arithmetic

| Quantity | Formula | Symbols and note |
|---|---|---|
| EDT gap | $EU(\text{One})-EU(\text{Two})=\Delta M-T$ | $\Delta=P(F\mid\text{One})-P(F\mid\text{Two})$ ([4.1](lessons/04-01-newcombs-problem.md)) |
| Reliability threshold | $p^*=\dfrac{M+T}{2M}=\tfrac12+\dfrac{T}{2M}$ | $p$ = predictor reliability, symmetric; 10,000/1,000 gives 0.55; 1,000/50 gives 0.525 |
| Desirability | $V(A)=\sum_iP(S_i\mid A)u(A,S_i)$ | [4.2](lessons/04-02-evidential-decision-theory.md) |
| Partition invariance | $u(A,S_i)=\sum_jP(S_{ij}\mid A\wedge S_i)u(A,S_{ij})$ | so every partition gives $\sum_{ij}P(S_{ij}\mid A)u(A,S_{ij})$ |
| Screening off | $P(G\mid S\wedge T)=P(G\mid\neg S\wedge T)=P(G\mid T)$ | the tickle |
| Lesion (4.2) | $V(S)=0.4(-90)+0.6(10)=-30$; $V(\neg S)=0.12(-100)=-12$ | EDT smokes only if pleasure exceeds $100(0.4-0.12)=28$ |
| Causal value (Lewis) | $U(A)=\sum_KP(K)u(A\wedge K)$ | [4.3](lessons/04-03-causal-decision-theory.md) |
| Gibbard-Harper | $U(A)=\sum_SP(A\mathbin{\Box\!\!\to}S)u(A,S)$ | counterfactual probability |
| Skyrms | $U(A)=\sum_KP(K)\sum_CP(C\mid A\wedge K)u(A\wedge C)$ | downstream effects |
| CDT in Newcomb | $U(\text{one})=qM$, $U(\text{two})=qM+T$ | $q$ = credence the box is full; two-box by $T$ for every $q$ |
| Lesion (4.3) | $U(\text{smoke})=10-100(0.24)=-14$, $U(\text{abstain})=-24$ | naive EDT: $-42$ vs $-17$ |
| Why ain'cha rich | one-boxers $0.9(1{,}000)=900$; two-boxers $0.1(1{,}050)+0.9(50)=150$ | each two-boxer would have had 100 by one-boxing |
| Ratification value | $U_A(B)=\sum_KP(K\mid A)u(B,K)$ | $A$ ratifiable iff $U_A(A)\ge U_A(B)$ for all $B$ ([4.4](lessons/04-04-hard-cases-for-both.md)) |
| Death in Damascus | $U_D(\text{Damascus})=100(1-p)$, $U_D(\text{Aleppo})=100p$ | $p$ = Death's accuracy; neither ratifiable for $p>\tfrac12$; EDT $100(1-p)$ |
| Instability, $p=0.9$ | $U(\text{D})=90-80c$, $U(\text{A})=10+80c$ | $c$ = credence you go to Damascus; rests at $c=\tfrac12$ |
| Psychopath button | $U(\text{press})=(1-q)g-ql$; $V(\text{press})=(1-q_{\text{press}})g-q_{\text{press}}l$ | $q$ = credence you are a psychopath; CDT presses iff $q<g/(g+l)$ |
| XOR blackmail | $V(\text{pay})=-2{,}000$, $V(\text{refuse})=-200{,}000$; $U(\text{pay})=-2{,}000-200{,}000r$ | $r$ = credence in termites |

### Aggregation arithmetic

| Quantity | Formula | Symbols and note |
|---|---|---|
| Harsanyi | $W(L)=\sum_ia_iu_i(L)+c$ | [5.1](lessons/05-01-harsanyis-aggregation-theorem.md) |
| Pareto-indifference constraint | $W(z)=\tfrac12W(x)+\tfrac12W(y)$ | Ana (1,0,0.6,0.3), Ben (0,1,0.6,0.8) over $w,x,y,z$ |
| Weights from one judgment | $w\sim z$: $0.7a_1=0.8a_2$, so $8:7$ | $W=(8,7,9,8)$; halve Ben and keep 8:7: $(8,3.5,6.9,5.2)$; 8:14 reproduces |
| Weight under rescaling | $u_i\mapsto ku_i+m$ sends $a_i$ to $a_i/k$ | shifts drop out |
| SWFs | $\sum_iu_i$; $\min_iu_i$; $\sum_if(u_i)$ | [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md) |
| Priority family | $f_\eta(u)=u^{1-\eta}/(1-\eta)$, $f_1=\log$ | $\eta=0$ utilitarian, $\eta\to\infty$ maximin |
| Ex post / ex ante | $W_{\text{post}}=E_L[\sum_if(u_i)]$; $W_{\text{ante}}=\sum_if(E_L[u_i])$ | kidney: post all $\sqrt{10}$; ante $G_I=\sqrt{10}$, $L=2\sqrt5$ |
| Social EU under Harsanyi | $E_L[\sum_ia_iu_i]$ | correlated $C$ vs anti-correlated $A$: each person 5; $E[\min]$ 5 vs 0 |

### Population arithmetic

| Quantity | Formula | Symbols and note |
|---|---|---|
| Total | $T(X)=\sum_{i=1}^{N(X)}w_i$ | [5.3](lessons/05-03-population-ethics-total-and-average.md) |
| Average | $\bar w(X)=T(X)/N(X)$ | $\bar w$, not $A$ |
| Repugnant threshold | $m>nw/\varepsilon$ | 500 at 80: any $m>40{,}000$ at welfare 1 |
| Marginal rule | $\bar w(X')-\bar w(X)=\dfrac{k(v-\bar w(X))}{N(X)+k}$ | hell: 1,000 at $-50$ plus 1,000 at $-10$ gives $-30$ |
| Example populations | A 500 at 80, B 1,500 at 40, Z 8,000 at 10 | totals 40,000, 60,000, 80,000; averages 80, 40, 10 |
| Critical level | $V_c=\sum_i(u_i-c)$ | [5.4](lessons/05-04-population-ethics-escape-routes.md); $c=25$: A 13,000, A+ 10,000, B 12,000 |
| Sadistic comparison | $40(-5-25)=-1{,}200$ vs $200(15-25)=-2{,}000$ | average 74.2 vs 52.5; total $-200$ vs $+3{,}000$ |
| Narrow person-affecting | $200(-35)+200(45)=2{,}000$ | B better than A+, yet worse than A |
| Variable value | $V=g(n)\,\bar u$ | $g$ increasing, concave, bounded |

### Wager and fanaticism arithmetic

| Quantity | Formula | Symbols and note |
|---|---|---|
| Dominating expectation | $EU(W)=p\cdot\infty+(1-p)f_1=\infty$ | $p$ = credence in God ([6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md)) |
| Finite wager threshold | $p^*=\dfrac{c}{g+c}$, $c=f_3-f_1$, $g=H-f_2$ | $H=10^6$, $c=5$: $1/200{,}001$; at $p=0.001$: 1,094.905 vs 99.9 |
| Mixed strategy | $\tfrac16p\cdot\infty+\text{finite}=\infty$ | die shows 6 |
| Two jealous gods | $0.02(\infty)+0.01(-\infty)+0.97f_1$ | undefined |
| Fanaticism | $\varepsilon V>v\iff V>v/\varepsilon$ | [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md) |
| Minimal Tradeoffs chain | $r^n<\varepsilon$ | $r=0.999999$, $\varepsilon=10^{-12}$: about 27.6 million steps |
| Bounded refusal threshold | $\varepsilon^*=\dfrac{-u(-c)}{B-u(-c)}$ | $u=1-2^{-x/10^6}$, $c=100$: $1-2^{-0.0001}\approx1/14{,}427$ |
| Mugging, linear | pay iff $V>c/\varepsilon$ | $c=100$, $\varepsilon=10^{-9}$: $V>10^{11}$ |
| Pasadena terms | $2^{-n}(-1)^{n-1}2^n/n=(-1)^{n-1}/n$ | natural order $\ln2$; 2:1 gives $\tfrac32\ln2$; 1:2 gives $\tfrac12\ln2$; discounted at $t=1/1000$, $1879/2520$ |
| Discounting violates independence | $0.002\cdot\tfrac14=0.0005<t=0.001$ | strict preference becomes indifference |

### Moral uncertainty arithmetic

| Quantity | Formula | Symbols and note |
|---|---|---|
| Expected choiceworthiness | $EC(A)=\sum_iC(T_i)CW_i(A)$ | [6.3](lessons/06-03-moral-uncertainty.md) |
| Scaled | $EC_k(A)=C(T_1)CW_1(A)+C(T_2)kCW_2(A)$ | $k$ = $T_1$ units per $T_2$ unit |
| Nadia, raw | A 4.2, B 5.2, C 3.6 | 0.7/0.3; (6,4,0), (0,8,12) |
| Nadia, $k$-ranges | $EC_k$: A 4.2, B $2.8+2.4k$, C $3.6k$ | A for $k<7/12$, B for $7/12<k<7/3$, C above; A-C tie at $7/6$ inside B's region |
| Variance normalization | $CW_i/\sigma_i$; two theories $k=\sigma_1/\sigma_2$ | variances $56/9$ and $224/9$, $k=\tfrac12$: A 4.2, B 4.0, C 1.8 |

## Thinkers and texts

### Primary texts

The public-domain texts the course quotes, with the edition the lessons read. Everything else is
paraphrased.

| Text | Date | Edition | Passages | Lessons |
|---|---|---|---|---|
| Pascal, *Pensées* | posthumous, 1670 | Trotter translation; **public domain** | §233, the wager ("It is not optional. You are embarked.") | [6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md) |
| Keynes, *A Treatise on Probability* | 1921 | Project Gutenberg #32625; **public domain** | ch. VI §1 (weight of arguments), §6 (the two urns); ch. IV §9 (indifference and the unknown urn) | [3.1](lessons/03-01-the-ellsberg-paradox.md) |
| Knight, *Risk, Uncertainty and Profit* | 1921 | archive.org scan; **public domain** | ch. I (measurable uncertainty is "not in effect an uncertainty at all") | [3.1](lessons/03-01-the-ellsberg-paradox.md) |

Ramsey's "Truth and Probability" (written 1926, published 1931) is paraphrased, not quoted: not
public domain in the US until 2027.

### Modern works cited

Paraphrased and cited, never quoted at length. Grouped by lesson of first use; where the lessons give
no year, none is given here.

| Author | Work | Used for | Lessons |
|---|---|---|---|
| Peterson | *An Introduction to Decision Theory* | the rows-and-columns layout | [1.1](lessons/01-01-acts-states-outcomes.md) |
| Lewis | "Causal Decision Theory", *Australasian Journal of Philosophy* (1981) | dependency hypotheses; managing the news; partition-dependence of unconditional EU | [1.1](lessons/01-01-acts-states-outcomes.md), [4.2](lessons/04-02-evidential-decision-theory.md), [4.3](lessons/04-03-causal-decision-theory.md) |
| N. Bernoulli | letter to Montmort (1713) | posing the St Petersburg game | [1.2](lessons/01-02-from-expected-value-to-expected-utility.md) |
| Cramer | letter to N. Bernoulli (1728) | square-root utility | [1.2](lessons/01-02-from-expected-value-to-expected-utility.md) |
| D. Bernoulli | St Petersburg Academy's journal (1738) | log utility | [1.2](lessons/01-02-from-expected-value-to-expected-utility.md) |
| Menger | (1934) | super-Petersburg games; concavity is not enough | [1.2](lessons/01-02-from-expected-value-to-expected-utility.md) |
| von Neumann and Morgenstern | *Theory of Games and Economic Behavior* | the vNM theorem (statement owned by `grad-game-theory` 1.5) | [1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md) |
| Luce and Raiffa | *Games and Decisions* (1957) | utility does not cause preference | [1.4](lessons/01-04-what-a-representation-theorem-shows.md) |
| Davidson, McKinsey and Suppes | (1955) | the money pump | [1.4](lessons/01-04-what-a-representation-theorem-shows.md) |
| Hammond | (1988) | dynamic consistency plus consequentialism force independence | [1.4](lessons/01-04-what-a-representation-theorem-shows.md), [3.2](lessons/03-02-models-of-ambiguity.md) |
| Machina | *Journal of Economic Literature* (1989) | consequentialism assumes what is in dispute | [1.4](lessons/01-04-what-a-representation-theorem-shows.md) |
| McClennen | *Rationality and Dynamic Choice* (1990) | resolute choice | [1.4](lessons/01-04-what-a-representation-theorem-shows.md), [3.2](lessons/03-02-models-of-ambiguity.md) |
| Savage | *The Foundations of Statistics* (1954) | postulates P1-P7; the businessman; ticket table and his own Allais reversal; small worlds | [2.1](lessons/02-01-savages-framework.md)-[2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md) |
| Luce and Suppes | (1965) | constant acts often impossible | [2.1](lessons/02-01-savages-framework.md) |
| Ramsey | "Truth and Probability" (written 1926, published 1931) | ethically neutral propositions; credence from bets | [2.2](lessons/02-02-probability-from-preference.md) |
| Aumann | letter to Savage (1971) | state-dependent utility (the wife's operation) | [2.2](lessons/02-02-probability-from-preference.md) |
| Karni; Schervish, Seidenfeld and Kadane | | non-uniqueness of probability under state dependence | [2.2](lessons/02-02-probability-from-preference.md) |
| Allais | Paris colloquium (1952) | the Allais choices | [2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md) |
| Kahneman and Tversky | (1979) | certainty effect, common ratio; prospect theory | [2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md), [2.4](lessons/02-04-risk-beyond-curvature.md) |
| Loomes and Sugden; Bell | regret (1982; 1982); disappointment (1986; 1985) | reasons for the Allais pattern | [2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md) |
| Quiggin | (1982) "anticipated utility" | rank-dependent utility | [2.4](lessons/02-04-risk-beyond-curvature.md) |
| Buchak | *Risk and Rationality* (2013) | risk-weighted expected utility | [2.4](lessons/02-04-risk-beyond-curvature.md) |
| Tversky and Kahneman | (1992) | cumulative prospect theory; loss aversion about 2.25 | [2.4](lessons/02-04-risk-beyond-curvature.md) |
| Ellsberg | "Risk, Ambiguity, and the Savage Axioms", *Quarterly Journal of Economics* (1961) | the Ellsberg paradox | [3.1](lessons/03-01-the-ellsberg-paradox.md) |
| Gilboa and Schmeidler | (1989) | maxmin expected utility | [3.2](lessons/03-02-models-of-ambiguity.md) |
| Ghirardato, Maccheroni and Marinacci | (2004) | alpha-maxmin framework | [3.2](lessons/03-02-models-of-ambiguity.md) |
| Levi; Joyce | | imprecise credence; E-admissibility (Levi) | [3.2](lessons/03-02-models-of-ambiguity.md) |
| Schmeidler; Klibanoff, Marinacci and Mukerji | (1989); (2005) | Choquet EU; the smooth model | [3.2](lessons/03-02-models-of-ambiguity.md) |
| Good | (1967) | value of free information | [3.2](lessons/03-02-models-of-ambiguity.md) |
| Al-Najjar and Weinstein | (2009) | the case against ambiguity aversion | [3.2](lessons/03-02-models-of-ambiguity.md) |
| Gilboa, Postlewaite and Schmeidler | (2009) | rationality is not Savage's axioms | [3.2](lessons/03-02-models-of-ambiguity.md) |
| Elga | (2010) | two-bet objection to imprecise credence | [3.2](lessons/03-02-models-of-ambiguity.md) |
| Wald; Hurwicz | | maximin; the optimism index (an unpublished paper, per Milnor) | [3.3](lessons/03-03-decisions-under-ignorance.md) |
| Savage | "The Theory of Statistical Decision" (1951) | minimax regret | [3.3](lessons/03-03-decisions-under-ignorance.md) |
| Milnor | "Games against nature" (1954) | the axioms and Theorems 1-2 | [3.3](lessons/03-03-decisions-under-ignorance.md) |
| Harsanyi | (1953); *Journal of Political Economy* (1955); (1975) | equiprobability; the aggregation theorem; against Rawls | [3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md), [5.1](lessons/05-01-harsanyis-aggregation-theorem.md) |
| Rawls | *A Theory of Justice* (1971), §26 | three conditions for maximin | [3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md) |
| Nozick | (1969), in a volume of essays in honor of Carl Hempel | Newcomb's problem (due to William Newcomb) | [4.1](lessons/04-01-newcombs-problem.md) |
| Lewis | (1979) | the prisoner's dilemma is a Newcomb problem | [4.1](lessons/04-01-newcombs-problem.md) |
| Jeffrey | *The Logic of Decision* (1965; 2nd ed. 1983) | desirability; ratifiability (1983) | [4.2](lessons/04-02-evidential-decision-theory.md), [4.4](lessons/04-04-hard-cases-for-both.md) |
| Bolker | | representation theorem for Jeffrey's framework | [4.2](lessons/04-02-evidential-decision-theory.md) |
| Eells | *Rational Decision and Causality* (1982); (1984) | tickle defence; meta-tickle | [4.2](lessons/04-02-evidential-decision-theory.md) |
| Horwich | (1987) | the mechanism need not be introspectible | [4.2](lessons/04-02-evidential-decision-theory.md) |
| Ahmed | *Evidence, Decision and Causality* (2014) | leading recent defender of EDT | [4.2](lessons/04-02-evidential-decision-theory.md) |
| Gibbard and Harper | "Counterfactuals and Two Kinds of Expected Utility" (1978) | counterfactual CDT; Death in Damascus | [4.3](lessons/04-03-causal-decision-theory.md), [4.4](lessons/04-04-hard-cases-for-both.md) |
| Joyce | *The Foundations of Causal Decision Theory* (1999); (2012) | imaging; deliberational CDT | [4.3](lessons/04-03-causal-decision-theory.md), [4.4](lessons/04-04-hard-cases-for-both.md) |
| Skyrms | *Causal Necessity* (1980); *The Dynamics of Rational Deliberation* (1990) | K-partitions; deliberation | [4.3](lessons/04-03-causal-decision-theory.md), [4.4](lessons/04-04-hard-cases-for-both.md) |
| Lewis | "Why Ain'cha Rich?", *Noûs* (1981) | the rich-irrationality exchange | [4.3](lessons/04-03-causal-decision-theory.md) |
| Egan | "Some Counterexamples to Causal Decision Theory", *Philosophical Review* (2007) | the psychopath button | [4.4](lessons/04-04-hard-cases-for-both.md) |
| Harper | (1986) | causal ratifiability | [4.4](lessons/04-04-hard-cases-for-both.md) |
| Richter | (1984) | asymmetric Death in Damascus | [4.4](lessons/04-04-hard-cases-for-both.md) |
| Arntzenius | (2008) | deliberational CDT | [4.4](lessons/04-04-hard-cases-for-both.md) |
| Yudkowsky and Soares | (2017) | functional decision theory | [4.4](lessons/04-04-hard-cases-for-both.md) |
| Sen | (1970); (1977) | informational bases; vNM utility is not welfare | [5.1](lessons/05-01-harsanyis-aggregation-theorem.md), [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md) |
| Weymark | (1991) | reconstruction of the Harsanyi-Sen debate | [5.1](lessons/05-01-harsanyis-aggregation-theorem.md) |
| Diamond | (1967) | the coin-flip objection | [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md) |
| Hammond; d'Aspremont and Gevers | (1976); (1977) | leximin under OLC; utilitarianism under CUC | [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md) |
| Broome | | redescribing outcomes to include fairness | [5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md) |
| Sidgwick | *The Methods of Ethics* (public domain) | the total view | [5.3](lessons/05-03-population-ethics-total-and-average.md) |
| Parfit | *Reasons and Persons* (1984), Part IV | repugnant conclusion; hell; mere addition; narrow and wide person-affecting | [5.3](lessons/05-03-population-ethics-total-and-average.md), [5.4](lessons/05-04-population-ethics-escape-routes.md) |
| Narveson; McMahan | | the procreative asymmetry | [5.3](lessons/05-03-population-ethics-total-and-average.md) |
| Blackorby, Bossert and Donaldson | | critical-level view | [5.4](lessons/05-04-population-ethics-escape-routes.md) |
| Arrhenius | | sadistic conclusion; impossibility theorems | [5.4](lessons/05-04-population-ethics-escape-routes.md) |
| Hurka; Ng | | variable value | [5.4](lessons/05-04-population-ethics-escape-routes.md) |
| Temkin | *Rethinking the Good* (2012) | intransitive betterness | [5.4](lessons/05-04-population-ethics-escape-routes.md) |
| Hacking | "The Logic of Pascal's Wager", *American Philosophical Quarterly* (1972) | the three arguments | [6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md) |
| Diderot | (1746) | many gods | [6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md) |
| Duff; Hájek | *Analysis* (1986); *Philosophical Review* (2003) | the mixed-strategy objection | [6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md) |
| Bostrom | "Pascal's Mugging", *Analysis* (2009); the name from Yudkowsky (2007 blog post) | Pascal's mugging | [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md) |
| Wilkinson | "In Defence of Fanaticism", *Ethics* (2022) | fanaticism; Minimal Tradeoffs; continuum argument | [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md) |
| Monton | "How to Avoid Maximizing Expected Utility", *Philosophers' Imprint* (2019) | Nicolausian discounting | [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md) |
| Kosonen | *Philosophy and Phenomenological Research* (2024) | money pumps against discounting | [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md) |
| Nover and Hájek | (2004) | the Pasadena game | [6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md) |
| Gustafsson and Torpman | "In Defence of My Favourite Theory", *Pacific Philosophical Quarterly* (2014) | my favourite theory | [6.3](lessons/06-03-moral-uncertainty.md) |
| Lockhart | (2000) | early expected-choiceworthiness proposal | [6.3](lessons/06-03-moral-uncertainty.md) |
| MacAskill, Bykvist and Ord | *Moral Uncertainty* (2020) | MEC | [6.3](lessons/06-03-moral-uncertainty.md) |
| Cotton-Barratt, MacAskill and Ord | *Journal of Philosophy* (2020) | variance normalization | [6.3](lessons/06-03-moral-uncertainty.md) |
| Harman; Weatherson | | moral uncertainty is irrelevant; fetishism | [6.3](lessons/06-03-moral-uncertainty.md) |

## Assumed, not taught here

Every prerequisite the lessons use without deriving, with the course that teaches it. Built lessons
are linked directly; courses not yet built link to their syllabus, with the lesson number the
syllabus gives.

**Probability, expected utility and game theory**

| Fact | Where it's taught |
|---|---|
| Conditional probability, Bayes's rule, $P(s\mid a)$ | [`prob-stat-refresher` 1.2](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md) |
| A divergent expectation as a series (St Petersburg) | [`probability-theory` 2.3](../probability-theory/lessons/02-03-lebesgue-integral-expectation.md) |
| The vNM axioms and theorem, stated (completeness and transitivity bundled as one axiom there) | [`grad-game-theory` 1.5](../grad-game-theory/lessons/01-05-expected-utility-vnm-axioms.md) ([card](../grad-game-theory/reference.md#expected-utility-the-vnm-axioms-and-what-each-buys)); [`micro-refresher` 2.1](../micro-refresher/lessons/02-01-expected-utility.md); [`grad-micro` 2.5](../grad-micro/lessons/02-05-choice-under-uncertainty.md) |
| Allais algebra on the classic 0/1M/5M numbers; the Marschak-Machina triangle | [`micro-refresher` 2.1](../micro-refresher/lessons/02-01-expected-utility.md) |
| Arrow-Pratt coefficients, certainty equivalents, risk premia, CRRA | [`grad-micro` 2.5](../grad-micro/lessons/02-05-choice-under-uncertainty.md); [`micro-refresher` 2.2](../micro-refresher/lessons/02-02-risk-aversion.md) |
| Transitivity and the money pump for preferences over goods | [`micro-refresher` 1.1](../micro-refresher/lessons/01-01-preferences-utility.md) |
| Iterated deletion of dominated strategies | [`grad-game-theory` 2.1](../grad-game-theory/lessons/02-01-normal-form-dominance-rationalizability.md) |
| Zero-sum games and the minimax theorem | [`grad-game-theory` 1.4](../grad-game-theory/lessons/01-04-zero-sum-minimax-lp-duality.md) |
| Mixed equilibrium (matching pennies) | [`grad-game-theory` 2.2](../grad-game-theory/lessons/02-02-nash-equilibrium-mixed-strategies.md) |
| The prisoner's dilemma | [`grad-game-theory` 3.3](../grad-game-theory/lessons/03-03-repeated-games-finite-infinite.md) |
| Arrow's impossibility theorem | [`grad-game-theory` 5.1](../grad-game-theory/lessons/05-01-social-choice-impossibility.md) |
| Utilitarian and Rawlsian social welfare functions as formulas | [`grad-micro` 6.5](../grad-micro/lessons/06-05-social-choice-welfare.md) |
| Confounding by a common cause | [`econometrics` 1.2](../econometrics/lessons/01-02-best-linear-predictor.md) |
| Welfare weights in optimal taxation | [`public-economics` 5.1](../public-economics/lessons/05-01-the-linear-income-tax.md) |

**Philosophy of economics and of debt hand-offs**

| Fact | Where it's taught |
|---|---|
| Realism vs constructivism about *preference* (revealed preference vs mental state) | [`philosophy-of-economics` 2.1](../philosophy-of-economics/lessons/02-01-preference-and-revealed-preference.md) |
| Framing, present bias, preference reversals and the preference-reversal money pump; reference dependence | [`philosophy-of-economics` 2.2](../philosophy-of-economics/lessons/02-02-the-behavioural-challenge.md) |
| Ex ante vs ex post Pareto, spurious unanimity, Diamond named | [`philosophy-of-economics` 3.2](../philosophy-of-economics/lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md) |
| The Ramsey equation's $\eta$ | [`philosophy-of-economics` 4.2](../philosophy-of-economics/lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md) |
| Non-identity applied to depletion and discounting | [`philosophy-of-economics` 4.3](../philosophy-of-economics/lessons/04-03-uncertainty-the-long-run-and-future-people.md) |
| Non-identity applied to a century-old public debt | [`philosophy-of-debt` 6.2](../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md) |

**Ethics and method**

| Fact | Where it's taught |
|---|---|
| Classical utilitarianism, the additive sum | [`ethics` 1.1](../ethics/lessons/01-01-classical-utilitarianism.md) |
| Theories of well-being (what $u_i$ might measure) | [`ethics` 1.2](../ethics/lessons/01-02-what-is-good-for-a-person.md) |
| Separateness of persons; a square-root prioritarian | [`ethics` 1.3](../ethics/lessons/01-03-justice-and-the-separateness-of-persons.md) |
| Expected value in consequentialism; actual vs expected consequences (Jackson's drug case) | [`ethics` 1.5](../ethics/lessons/01-05-modern-consequentialism.md) |
| Contractualism and Scanlon's refusal to aggregate | [`ethics` 5.2](../ethics/lessons/05-02-contractualism-what-no-one-could-reasonably-reject.md) |
| Moral disagreement and moral knowledge | [`ethics` 6.6](../ethics/lessons/06-06-moral-knowledge-and-disagreement.md) |
| Probabilism, probabiliorism and compensationism in the manualist dispute | [`moral-theology` 4.1](../moral-theology/lessons/04-01-casuistry-and-the-probabilism-controversy.md) |
| Reconstruction and charity | [`philosophical-method` 1.3](../philosophical-method/lessons/01-03-reconstruction-and-charity.md) |
| Thought experiments and their stipulations | [`philosophical-method` 3.3](../philosophical-method/lessons/03-03-thought-experiments.md) |
| Steelmanning and the burden of proof | [`philosophical-method` 4.2](../philosophical-method/lessons/04-02-steelmanning-and-the-burden-of-proof.md) |
| Finding the crux | [`philosophical-method` 4.3](../philosophical-method/lessons/04-03-finding-the-crux.md) |

**Courses not yet built**

| Fact | Where it's taught |
|---|---|
| What a credence is (5.1); Dutch books and probabilism (5.2); the principle of indifference (5.4); peer disagreement (4.5). No imprecise-credence lesson: 3.2 owns it as a decision model | [`epistemology`](../epistemology/syllabus.md) |
| Rawls's theory: original position, primary goods, the two principles (2.2-2.3); prioritarianism and sufficientarianism as justice (2.6) | [`political-philosophy`](../political-philosophy/syllabus.md) |
| Pascal's wager as a pragmatic argument for belief; doxastic voluntarism (5.3) | [`philosophy-of-religion`](../philosophy-of-religion/syllabus.md) |
| Social choice beyond Arrow; aggregation of judgments | [`social-choice`](../social-choice/syllabus.md) |

## Pitfalls

### Traps with dominance and partitions

- **"Dominance is weak and can't mislead."** Its validity lives entirely in the choice of states;
  on act-dependent states it says skip rehearsal, skip the vaccine. *([1.1](lessons/01-01-acts-states-outcomes.md))*
- **"A weakly dominated act is never as good."** It ties when the states where they differ have
  probability 0; ruling it out is a small extra commitment. *([1.1](lessons/01-01-acts-states-outcomes.md))*
- **"Re-partitioning changed the answer."** It changes which argument is available, never the expected
  utilities. *([1.1](lessons/01-01-acts-states-outcomes.md))*
- **"Newcomb's dominance argument fails like the rehearsal's."** There the act caused the state and
  every theory agreed; here premise 1 is true on one reading and false on the other. *([4.1](lessons/04-01-newcombs-problem.md))*
- **"The many-gods objection is just 'other religions exist'."** Its formal point is the partition
  problem with infinite stakes. *([6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md))*

### Traps with utility and its scale

- **"St Petersburg shows people are risk averse."** Concave utility, a finite bank and ignoring tiny
  probabilities all predict the low price. *([1.2](lessons/01-02-from-expected-value-to-expected-utility.md))*
- **"A more concave $u$ (a log) solves it."** Every unbounded $u$ has a super-Petersburg game; only a
  bound rules them all out. *([1.2](lessons/01-02-from-expected-value-to-expected-utility.md))*
- **"A certainty equivalent is a fact about the lottery."** It is about the lottery and the agent's $u$. *([1.2](lessons/01-02-from-expected-value-to-expected-utility.md))*
- **"The standard gamble measures how much you like a prize."** It measures what risk of the worst you
  would bear for the best. *([1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md))*
- **"50 dollars gives twice the utility of 20."** Ratios of levels are artefacts of the zero; only
  differences survive rescaling. *([1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md))*
- **"Any order-preserving transform will do."** Squaring keeps prize order and describes a different,
  risk-loving agent. *([1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md))*

### Traps with theorems and norms

- **"The proof shows people do, or should, choose this way."** If the axioms hold, this $u$ represents
  the preferences; whether they hold is descriptive, whether they ought to is normative. *([1.3](lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md), [1.4](lessons/01-04-what-a-representation-theorem-shows.md))*
- **"A money pump proves the agent will be ruined."** It shows exploitability under myopic trading;
  many read it as a symptom, not a prediction. *([1.4](lessons/01-04-what-a-representation-theorem-shows.md))*
- **"Descriptive failures settle the normative question."** A normative theory survives every violation
  by calling it a mistake, which is what is contested. *([1.4](lessons/01-04-what-a-representation-theorem-shows.md))*
- **"Savage assumes probabilities and proves EU."** Probability is an output of preference. *([2.1](lessons/02-01-savages-framework.md))*
- **"A three-state table is a Savage model."** P6 needs an infinite state space. *([2.1](lessons/02-01-savages-framework.md))*
- **"P2 forbids changing your mind on learning the event."** It constrains present preferences; the link
  to choice over time is the dynamic-consistency argument. *([2.1](lessons/02-01-savages-framework.md))*

### Traps with credence from preference

- **"Betting odds in dollars reveal credence."** Only if utility is linear over the stakes, which the
  Dutch book also assumes. *([2.2](lessons/02-02-probability-from-preference.md))*
- **"The insurance number is wrong and Savage's right elsewhere."** Both are fixed by the same
  convention that $\lambda_s$ is constant. *([2.2](lessons/02-02-probability-from-preference.md))*
- **"Ethically neutral means probability one half."** Neutrality is about value; the prize-swap
  indifference certifies the half. *([2.2](lessons/02-02-probability-from-preference.md))*

### Traps with Allais and risk attitude

- **"The sure-thing principle says prefer the sure thing."** It is about common consequences; the
  A-and-D chooser obeys "prefer certainty" and breaks P2. *([2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md))*
- **"Concave utility explains Allais."** Any $u$ sets one threshold for both pairs. *([2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md))*
- **"Savage's self-correction proves the pattern is an error."** It shows one theorist's reflection;
  whose reflection is authoritative is the question. *([2.3](lessons/02-03-the-allais-paradox-and-the-sure-thing-principle.md))*
- **"REU just distorts probabilities."** It distorts cumulative probabilities, by rank; transforming each
  outcome's own probability can favour dominated gambles. *([2.4](lessons/02-04-risk-beyond-curvature.md))*
- **"Convex $r$ is risk-seeking because it bends up."** It lies below the diagonal: risk-avoidant ($r(0.5)=0.25$). *([2.4](lessons/02-04-risk-beyond-curvature.md))*
- **"Prospect theory and REU are rivals for one job."** One predicts, the other permits. *([2.4](lessons/02-04-risk-beyond-curvature.md))*

### Traps with ambiguity and ignorance

- **"Ellsberg is just Allais again."** Allais is about valuing risk with given probabilities; Ellsberg
  about belief with none. *([3.1](lessons/03-01-the-ellsberg-paradox.md))*
- **"Concave utility explains Ellsberg."** Every bet has the same two prizes, so curvature cancels. *([3.1](lessons/03-01-the-ellsberg-paradox.md))*
- **"Ambiguity aversion is a pessimistic prior."** A fixed pessimism gives one half of the pattern and
  the reverse of the other; the pessimism must switch with the bet. *([3.1](lessons/03-01-the-ellsberg-paradox.md))*
- **"Maxmin EU is the maximin rule."** Worst expected utility over a set vs worst outcome; maximin is the
  case $C$ = all priors. *([3.2](lessons/03-02-models-of-ambiguity.md))*
- **"The width of $C$ measures ambiguity aversion."** $C$ is ambiguity perceived; $\alpha$ is the attitude. *([3.2](lessons/03-02-models-of-ambiguity.md))*
- **"The information-refuser is confused about the facts."** She predicts herself correctly; the clash is
  structural. *([3.2](lessons/03-02-models-of-ambiguity.md))*
- **"Laplace is ignorance-respecting EU."** It is EU with a prior that depends on how states are cut. *([3.3](lessons/03-03-decisions-under-ignorance.md))*
- **"Minimax regret minimizes your worst loss."** It minimizes your worst shortfall relative to this
  menu; maximin is about worst outcomes. *([3.3](lessons/03-03-decisions-under-ignorance.md))*
- **"Von Neumann's minimax theorem vindicates maximin."** Against nature it is an analogy, not an argument. *([3.3](lessons/03-03-decisions-under-ignorance.md))*
- **"Equiprobability weights each position."** It weights each person. *([3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md))*
- **"Rawls defends maximin as the rule under uncertainty."** He denies it; the claim is local to the veil. *([3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md))*
- **"Harsanyi's interpersonal scale is mysterious."** It comes from the chooser's preferences over being
  one person or another; whether those carry moral weight is 5.2's question. *([3.4](lessons/03-04-choosing-behind-the-veil-rawls-vs-harsanyi.md))*

### Traps with Newcomb and the two theories

- **"$p$ in the threshold is the predictor's track record."** It is $P(\text{prediction matches}\mid\text{your act})$,
  equal across acts; a high hit rate can come with $\Delta=0$. *([4.1](lessons/04-01-newcombs-problem.md))*
- **"One-boxing needs backward causation or infallibility."** It needs only $p>p^*$ (with linear utility). *([4.1](lessons/04-01-newcombs-problem.md))*
- **"EDT ignores causation."** It uses causal beliefs through $P$; it diverges only where an act is
  evidence without being a cause. *([4.2](lessons/04-02-evidential-decision-theory.md))*
- **"Partition invariance shows EDT is right."** It shows the formula is well defined. *([4.2](lessons/04-02-evidential-decision-theory.md))*
- **"The tickle defence is a reason to one-box."** It makes EDT two-box. *([4.2](lessons/04-02-evidential-decision-theory.md))*
- **"CDT ignores the predictor's accuracy."** It uses it in $q$ but never lets the choice update $q$. *([4.3](lessons/04-03-causal-decision-theory.md))*
- **"CDT and EDT disagree whenever states depend on acts."** Not when the dependence is causal. *([4.3](lessons/04-03-causal-decision-theory.md))*
- **"The causalist concedes two-boxers end up poorer by their own lights."** Each did 50 better than her
  one alternative; the dispute is over the standard. *([4.3](lessons/04-03-causal-decision-theory.md))*
- **"Ratifiability is a third theory."** It is a filter on either value function and can leave nothing. *([4.4](lessons/04-04-hard-cases-for-both.md))*
- **"The button refutes CDT outright."** It refutes the fixed-credence version. *([4.4](lessons/04-04-hard-cases-for-both.md))*
- **"Death in Damascus embarrasses EDT too."** Indifference at $100(1-p)$ is stable. *([4.4](lessons/04-04-hard-cases-for-both.md))*

### Traps with aggregation and comparison

- **"Harsanyi proves utilitarianism."** Some weighted sum of vNM utilities; equal weights need comparable
  scales, and "welfare" needs Sen's disputed premise. *([5.1](lessons/05-01-harsanyis-aggregation-theorem.md))*
- **"Pareto indifference is too weak to matter."** One equation forced the whole form; it bites as
  outcomes outnumber people. *([5.1](lessons/05-01-harsanyis-aggregation-theorem.md))*
- **"A non-aggregative view just picks small weights."** Scanlon denies premise 2 (social vNM), not the theorem. *([5.1](lessons/05-01-harsanyis-aggregation-theorem.md))*
- **"vNM cardinality gives the utilitarian what she needs."** It gives CNC; unit comparability is extra. *([5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md))*
- **"Any concern for the worse off answers Diamond."** Ex post views are indifferent to the coin flip. *([5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md))*
- **"Maximin is modest because it ignores magnitudes."** It needs a different, value-laden comparison of levels. *([5.2](lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md))*

### Traps with population ethics

- **"The repugnant conclusion endorses misery."** Z's lives are worth living. *([5.3](lessons/05-03-population-ethics-total-and-average.md))*
- **"The average view is the safe fallback."** It makes a life's value depend on everyone else's: hell and Egyptology. *([5.3](lessons/05-03-population-ethics-total-and-average.md))*
- **"Non-identity favours the total view."** Same-number cases cannot separate total from average. *([5.3](lessons/05-03-population-ethics-total-and-average.md))*
- **"The critical-level view says lives below $c$ are not worth living."** They are good for those who
  live them; adding them makes the outcome worse. *([5.4](lessons/05-04-population-ethics-escape-routes.md))*
- **"A person-affecting view simply rejects premise 2."** The narrow version accepts both premises and
  loses transitivity; say which version. *([5.4](lessons/05-04-population-ethics-escape-routes.md))*
- **"Giving up transitivity is cheap."** It is the axiom whose loss makes an individual exploitable. *([5.4](lessons/05-04-population-ethics-escape-routes.md))*

### Traps at the edges of expected value

- **"A huge finite $H$ does the work of $H=\infty$."** Every finite $H$ leaves a positive threshold. *([6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md))*
- **"The wager argues that God exists."** It gives a reason to act at a fixed credence. *([6.1](lessons/06-01-pascals-wager-as-a-decision-problem.md))*
- **"The mugging needs infinite utility."** Every number in it is finite. *([6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md))*
- **"Just set your credence low enough."** It must fall at least as fast as the reward grows: a
  substantive commitment. *([6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md))*
- **"Probability discounting is bounded utility."** Same verdict on the mugger, different axioms given up. *([6.2](lessons/06-02-fanaticism-and-tiny-probabilities.md))*
- **"MFT needs no comparisons."** No comparison of units, but credences and a count of theories. *([6.3](lessons/06-03-moral-uncertainty.md))*
- **"$k=1$ is neutral."** It is a substantive claim of comparability. *([6.3](lessons/06-03-moral-uncertainty.md))*
- **"Variance normalization is assumption-free."** "Equal say" is a fairness ideal, and it moves with the
  menu. *([6.3](lessons/06-03-moral-uncertainty.md))*

## Conventions

- **One card per course**, covering all 23 lessons. The linter checks that every lesson file is cited
  somewhere on this card.
- **Headings are anchors.** Renaming a `###` breaks inbound lesson links. Headings are ASCII only, so
  Newcomb's problem appears as "Newcombs problem", Harsanyi's theorem as "Harsanyis aggregation
  theorem", "Why Ain'cha Rich?" as "Why aint cha rich", and Greek letters stay in the body.
- **No prose dollar signs** (see CLAUDE.md): money is written "1,000 dollars".
- **Verdict-neutral.** Entries state each position as its defenders state it, give the lessons'
  skeletons, and name the premise its critics attack. None records a verdict on independence as a norm,
  one box or two, Rawls or Harsanyi, the repugnant conclusion, fanaticism or the wager.
- **Corrections over syllabus.** Where the build's checks corrected the syllabus or the lesson specs,
  the card follows the lessons: Milnor's Theorem 1 as verified against his text in 3.3 (Hurwicz fails
  column linearity *and* convexity; minimax regret fails only row adjunction; Theorem 2 makes the set
  jointly unsatisfiable); the button in 4.4 uses $+6/-90$ (the spec's $+5/-50$ would not have made causal
  decision theory press); ratifiability is Jeffrey's tool for matching causal verdicts generally, not a
  device introduced for two-boxing (4.4); Harsanyi's proof sketch uses four outcomes, since with three
  and two independent people Pareto indifference is vacuous (5.1); the ex ante/ex post trade-off is a
  corollary of Harsanyi's theorem, not a separately named impossibility theorem (5.2); Sen's reply is
  dated 1977 (5.1); imprecise credence is owned here, since `epistemology` has no lesson on it (3.2);
  alpha-maxmin is credited to Ghirardato, Maccheroni and Marinacci as a framework, not as an
  axiomatization of constant $\alpha$ (3.2); Savage's postulate numbering follows the SEP (2.1); Diderot's
  many-gods objection is dated 1746 (6.1); probability discounting is said to violate strict dominance only
  in its naive outcome-wise form (6.2).
- **Boss problems are reserved.** The card gives the lessons' own figures and nothing beyond them: no
  Boss 1 standard-gamble values or capped and log-utility St Petersburg prices; no Boss 2 ticket table
  for the 0/1M/5M gambles or REU range for $v$; no Boss 3 90-ball maxmin values or five-rule verdicts on
  its acts; no Boss 4 threshold for the million-dollar box, causal margin as a function of $q$, or button
  values; no Boss 5 weights, its 1-or-0 coin flip or its population totals; no Boss 6 close reading of the
  *Pensées*, fair-coin mixture or $k$-ranges; and no essay verdicts.
- **Paraphrase rule.** Public-domain texts (Pascal, Keynes, Knight) are quoted as the lessons quote them.
  Modern authors are paraphrased and cited, never quoted.
