# Decision Theory — Syllabus

> Philosophy · Tier 1 · ~23 lessons · Prereqs: [`prob-stat-refresher`](../prob-stat-refresher/syllabus.md), [`philosophical-method`](../philosophical-method/syllabus.md) · Roadmap id: `decision-theory`

## Goal

This course is the philosophy of rational choice, done with the math switched on. It asks what expected-utility theory claims and why anyone should believe it, and where it breaks. The same machinery then carries over to ethics: aggregating people, comparing populations, and acting when you are unsure which moral theory is true. You will finish able to build a utility function from choices and compute with it. You will be able to say what the von Neumann–Morgenstern and Savage representation theorems prove and what they leave open, and to rationalize the Allais and Ellsberg choices with a named non-expected-utility model. You will be able to run every classical rule for decisions under ignorance, work Newcomb's problem through evidential and causal decision theory, and use Harsanyi's aggregation theorem, the population-ethics axiologies, Pascal's wager and maximizing expected choiceworthiness to reach verdicts, stating exactly which premise each verdict rests on. The course takes no side on any contested normative question: whether independence is a requirement of rationality, one box or two, the repugnant conclusion, or fanaticism. It deliberately skips the proofs and economics of expected utility that the economics courses already own (risk premia, stochastic dominance, portfolio and insurance applications), probabilism and Dutch books as epistemology ([`epistemology`](../epistemology/syllabus.md)), behavioral economics beyond one descriptive section, game theory, and the religious question behind Pascal's wager ([`philosophy-of-religion`](../philosophy-of-religion/syllabus.md)).

**Scope discipline.**

| Topic | Owner | Here |
|---|---|---|
| vNM axioms, the expected-utility theorem as a statement, uniqueness up to positive affine transformation, the Allais algebra | [`micro-refresher`](../micro-refresher/syllabus.md) 2.1, [`grad-micro`](../grad-micro/syllabus.md) 2.5, [`grad-game-theory`](../grad-game-theory/syllabus.md) 1.5 | Recapped in one paragraph, not re-taught. All three built lessons *state* the theorem and none proves it, so 1.3 gives the standard-gamble construction as a proof sketch. Module 1 then asks what the theorem shows and whether its axioms are norms |
| Arrow–Pratt coefficient, certainty equivalent, risk premium, stochastic dominance | [`micro-refresher`](../micro-refresher/syllabus.md) 2.2, [`grad-micro`](../grad-micro/syllabus.md) 2.5 | Cited. 1.2 and 2.4 ask only whether risk aversion *must* be concave utility |
| Expectation, conditional probability, Bayes | [`prob-stat-refresher`](../prob-stat-refresher/syllabus.md) 1.2, 2.1 | Assumed |
| St. Petersburg as a divergent expectation | [`probability-theory`](../probability-theory/syllabus.md) 2.3 (in passing) | Owned here as a decision problem (1.2) |
| Probabilism, Dutch books for credences, conditionalization, the principle of indifference | [`epistemology`](../epistemology/syllabus.md) 5.1–5.4 | Cited. 2.2 derives probability from *preference* (Ramsey, Savage) and names the Dutch book only as the belief-side cousin; 3.3 cites 5.4 for the principle of indifference behind the Laplace rule. Money pumps for *preferences* (1.4), imprecise credence as a decision model (3.2) and Newcomb (Module 4) are owned here, as epistemology's scope table expects |
| Zero-sum games and the minimax theorem | [`grad-game-theory`](../grad-game-theory/syllabus.md) 1.4 | Cited in 3.3 to separate maximin against an opponent from maximin against nature |
| Arrow's theorem; utilitarian and Rawlsian social welfare functions as formulas | [`grad-micro`](../grad-micro/syllabus.md) 6.5, [`grad-game-theory`](../grad-game-theory/syllabus.md) 5.1 | Cited. 5.2 adds what they need: the informational bases (level vs unit comparability) each one presupposes |
| Social choice beyond Arrow | `social-choice` | Not taught |
| Rawls's theory of justice: original position, primary goods, the two principles, Rawls's three conditions for maximin, maximin vs expected utility on small tables | [`political-philosophy`](../political-philosophy/syllabus.md) 2.2–2.3 | Cited. 3.4 owns what political-philosophy 2.3 cites here: Harsanyi's equiprobability model, and the decision-theoretic question of whether the veil is ignorance or risk and whether the three conditions license maximin in general |
| Utilitarianism as a moral theory; separateness of persons; actual vs expected consequences; whether the numbers count | [`ethics`](../ethics/syllabus.md) 1.1, 1.3, 1.5, 5.2 | Cited. **Owned here, as ethics expects:** Harsanyi's aggregation theorem (5.1) and population ethics (5.3–5.4) |
| Prioritarianism and sufficientarianism as theories of distributive justice | [`political-philosophy`](../political-philosophy/syllabus.md) 2.6 | 5.2 treats priority only formally, as a concave transform inside a social welfare function |
| Theories of well-being | [`ethics`](../ethics/syllabus.md) 1.2 | Assumed. Welfare measurement goes to `philosophy-of-economics` |
| Pascal's wager as a pragmatic argument for belief: the text, informal expected values, doxastic voluntarism, James's will to believe | [`philosophy-of-religion`](../philosophy-of-religion/syllabus.md) 5.3 | Cited; 6.1 restates the wager briefly and owns the formal side that 5.3 leaves out, as its scope table expects: the wager's three argument forms as decision matrices, infinite utility against the vNM axioms, and the many-gods and mixed-strategy objections worked formally. Whether God exists stays there |
| Peer disagreement | [`epistemology`](../epistemology/syllabus.md) 4.5 | Cited in 6.3 as the belief-side analogue of moral uncertainty |
| Prospect theory and behavioral economics | no roadmap course (behavioral economics is on the shelf) | One descriptive section in 2.4, to separate descriptive from normative rivals to expected utility |

## How practice works in this course

Problems follow [HUMANITIES-BUILD-BRIEF.md](../../HUMANITIES-BUILD-BRIEF.md): every part declares its kind, and every solution is a rubric (must-hit moves, wrong turns) plus a model answer. This is the formal course in the Philosophy field, so the mix differs from its siblings:

- **Formal parts (archetype 8) are about half of all practice.** Construct a utility from indifference probabilities, show a choice pattern violates a named axiom, find the parameter range under which a rival model rationalizes it, compute evidential and causal expected utility, run maximin and minimax regret, and compute total, average and critical-level value. These are graded as in any math course, and every number in a key is checked before it ships.
- **Exegetical parts are strict.** Which Savage postulate the Ellsberg choices break; what Harsanyi's theorem assumes and what it concludes; what the equiprobability assumption adds to Harsanyi's veil argument. These have right answers.
- **Evaluative parts are verdict-neutral.** No rubric rewards one-boxing or two-boxing, accepting or rejecting the repugnant conclusion, treating independence as a norm, or taking the wager. Must-hit moves are ones either side has to make: state the principle precisely, run it on the case, name the premise the objection attacks, and say whether biting the bullet generalizes.
- **Counterexample, find the crux and apply to a hard case carry the non-formal load.** Nearly every philosophical dispute here reduces to one axiom someone must give up, which is why find the crux ([`philosophical-method`](../philosophical-method/syllabus.md) 4.3) is the natural partner of the formal problems. Primary modern sources (von Neumann–Morgenstern, Savage, Harsanyi, Nozick, Lewis, Joyce, Parfit, Buchak) are paraphrased and cited, never quoted. The one public-domain text read closely is Pascal's *Pensées*.

## Dangerous Checklist

When you finish, you can:

- [ ] Set up a decision as acts, states and outcomes, and say when a dominance argument is valid and when act-dependent states break it
- [ ] Build a vNM utility function from standard-gamble indifferences and use it to rank new lotteries, and say what its cardinality does and does not license
- [ ] Explain what a representation theorem proves, and argue both sides of whether the axioms are requirements of rationality or only conditions for a tidy description
- [ ] Derive subjective probabilities from preferences over bets in Savage's framework, and say which postulate each step uses
- [ ] Show that the Allais and Ellsberg choices violate the independence axiom or the sure-thing principle, and find parameters under which risk-weighted or maxmin expected utility rationalizes them
- [ ] Apply maximin, maximax, Hurwicz, Laplace and minimax regret to a payoff matrix, and exhibit the axiom each one violates
- [ ] Reconstruct the Rawls–Harsanyi dispute over choice behind a veil of ignorance and name its crux
- [ ] Compute evidential and causal expected utility in Newcomb's problem and its variants, and say which cases put each theory under pressure
- [ ] State Harsanyi's aggregation theorem and its assumptions, and show by example why it settles neither the weights nor interpersonal comparison
- [ ] Compute total, average and critical-level value for competing populations, and derive the repugnant, sadistic or mere-addition result each view is exposed to
- [ ] Analyse Pascal's wager as a decision matrix, and run the many-gods, mixed-strategy and infinite-utility objections against it
- [ ] Compute maximized expected choiceworthiness under moral uncertainty, and show how the verdict depends on intertheoretic scaling

## Modules

### Module 1: Expected utility and what it claims

From a decision table to the expected-utility theorem, and then the philosopher's question: does the theorem say how to choose, or only how to describe choices that already obey its axioms?

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Acts, states, outcomes | Put a decision into a table and test a dominance argument on it | decision matrix, strict and weak dominance, act-independent states, the partition problem (a dominance argument that fails when states depend on the act) |
| 1.2 | From expected value to expected utility | Say why expected monetary value fails and what Bernoulli's fix does and does not solve | the St. Petersburg game, log utility and a finite certainty equivalent, super-Petersburg games and bounded utility, risk aversion as concavity (Arrow–Pratt cited) |
| 1.3 | The vNM theorem and how utility is built | Construct a utility function from indifference probabilities and prove the construction represents the preferences | recap of the axioms (cited), the standard gamble, the construction as a proof sketch, cardinal but not interpersonally comparable utility |
| 1.4 | What a representation theorem shows | Decide whether expected-utility theory is a norm, a description or an interpretation of choice | realism vs constructivism about utility, money pumps for transitivity, arguments for independence, normative vs descriptive readings, **formal** problems in a philosophy course |

**Boss problem 1:** An agent over prizes of 0, 40, 70 and 100 dollars is indifferent between 40 for sure and a 0.6 chance of 100 (else 0), and between 70 for sure and a 0.85 chance of 100 (else 0). (a) Normalize u(0) = 0 and u(100) = 1, construct u(40) and u(70), and decide whether she prefers 70 for sure or a 50–50 gamble between 100 and 40 (0.8 vs 0.85: the sure 70). Then repeat with the rescaled utility 3u + 7 and show the ranking is unchanged. (b) A St. Petersburg game pays 2^n dollars if the first head comes on toss n, but the casino can pay at most 2^20 dollars. Compute the expected payout (21 dollars), and the certainty equivalent of the uncapped game for an agent with u = log base 2 of wealth gained (4 dollars). (c) A critic says the vNM theorem shows only that axiom-obeying preferences *can be described* as maximizing expected utility, so it gives no reason to choose by expected utility. Reconstruct the critic's argument, then assess it in 300–500 words, using the money pump for at least one axiom. Parts (a)–(b) are formal; (c) is exegetical for the reconstruction and evaluative for the assessment.

### Module 2: Subjective probability, Savage, and the independence axiom

Where the probabilities come from when nobody hands them to you, and the most famous choices that seem to violate the axiom holding the theory together.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Savage's framework | Model a choice as acts mapping states to consequences, and state the postulates in plain English | states, consequences, acts as functions, constant acts, the sure-thing principle (P2), state-independence, the representation (unique probability, utility unique up to affine transformation) |
| 2.2 | Probability from preference | Read an agent's credences off her preferences over bets | Ramsey's betting method, qualitative probability, eliciting a probability from a bet swap, state-dependent utility (the life-insurance problem), small worlds; the Dutch book cited to [`epistemology`](../epistemology/syllabus.md) 5.2 |
| 2.3 | The Allais paradox and the sure-thing principle | Show the Allais choices violate independence, and weigh Savage's ticket-table defence | the Allais choices, the lottery-ticket table, Savage's own revision of his choices, regret and disappointment as reasons, whether a violation is a mistake |
| 2.4 | Risk beyond curvature: non-expected-utility theories | Compute risk-weighted expected utility and separate normative from descriptive rivals | rank-dependent and risk-weighted expected utility (Quiggin, Buchak), the risk function, Allais rationalized; prospect theory (reference points, loss aversion, probability weighting) as description only |

**Boss problem 2:** Over prizes of 0, 1 million and 5 million dollars, an agent chooses A (1 million for sure) over B (0.89 chance of 1 million, 0.10 of 5 million, 0.01 of nothing), and D (0.10 of 5 million, else nothing) over C (0.11 of 1 million, else nothing). (a) Lay the four gambles out as Savage's 100-ticket table and say which postulate the pattern violates and why. (b) Model her with risk-weighted expected utility, risk function r(p) = p², u(0) = 0, u(1M) = 1 and u(5M) = v. Find every v for which she chooses both A over B and D over C (1.21 < v < 2.99). (c) Savage says the table shows the Allais pattern is a mistake; Buchak says an agent may rationally care about the global shape of a gamble. Find the crux between them, then assess which side's premise is more defensible in 300–500 words. Part (a) is exegetical; (b) is formal; (c) is exegetical for the crux and evaluative for the assessment.

### Module 3: Ambiguity and ignorance

When probabilities are unknown, or unknowable, and the decision rules that refuse to pretend otherwise, ending at the bridge to political philosophy.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The Ellsberg paradox | Show that the common Ellsberg choices fit no probability assignment at all | the three-colour urn, the violated sure-thing principle, risk vs uncertainty (Knight), weight of evidence (Keynes) |
| 3.2 | Models of ambiguity | Compute maxmin expected utility over a set of priors, and state the case against ambiguity aversion | maxmin expected utility (Gilboa–Schmeidler), sets of priors and imprecise credence, alpha-maxmin, dynamic inconsistency and refusing free information |
| 3.3 | Decisions under ignorance | Run the classical rules on a matrix and exhibit the axiom each one violates | maximin, maximax, Hurwicz, Laplace (insufficient reason, cited to [`epistemology`](../epistemology/syllabus.md) 5.4), minimax regret, Milnor's axioms, the menu-dependence of regret; maximin against nature vs minimax in games ([`grad-game-theory`](../grad-game-theory/syllabus.md) 1.4) |
| 3.4 | Choosing behind the veil: Rawls vs Harsanyi | Reconstruct Harsanyi's equiprobability argument against Rawls's use of maximin and name the premise they split on | Harsanyi's equiprobability model and average utility, Rawls's three conditions for maximin (stated in [`political-philosophy`](../political-philosophy/syllabus.md) 2.3; here tested as decision theory), whether ignorance is risk, the cost of maximin from 3.3 |

**Boss problem 3:** (a) An urn holds 90 balls: 30 red and 60 black or yellow in unknown proportion. Most people prefer a bet on red to a bet on black, and a bet on black-or-yellow to a bet on red-or-yellow. Prove that no single probability assignment makes both choices maximize expected utility, and name the postulate violated. (b) Let the agent's set of priors put the number of black balls anywhere from 20 to 40, and let a winning bet pay 1 util. Compute her maxmin expected utility for all four bets (red 1/3, black 2/9, red-or-yellow 5/9, black-or-yellow 2/3) and confirm that she makes the Ellsberg choices. (c) Acts a1 = (3, 15, 5), a2 = (6, 6, 6) and a3 = (0, 20, 0) pay off across three states. Find the choice under maximin (a2), maximax (a3), Laplace (a1), Hurwicz with optimism 1/2 (a3) and minimax regret (a1). Then add a4 = (−10, 26, −10) and show that minimax regret now picks a3 although a4 is not chosen. Which of Milnor's axioms has failed? (d) Rawls says choice behind the veil meets his conditions for maximin; Harsanyi says it is a risky choice with equal chances. Using (c) as evidence of what maximin costs, find the crux and assess it in 300–500 words. Parts (a)–(c) are formal, with the axiom-naming in (a) and (c) exegetical; (d) is evaluative.

### Module 4: Newcomb's problem and the causal-evidential split

A predictor, two boxes, and a dispute about whether a rational act is one that is good news or one that does good.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Newcomb's problem | Lay out the dominance and expected-utility arguments and find exactly where they collide | Nozick's setup, the predictor's reliability, dominance with act-dependent states (from 1.1), the accuracy threshold for one-boxing |
| 4.2 | Evidential decision theory | Compute Jeffrey-style expected utility and test it on medical Newcomb cases | Jeffrey's desirability, conditioning on the act, partition invariance, the smoking lesion, the tickle defence |
| 4.3 | Causal decision theory | Compute causal expected utility and state the "why ain'cha rich?" exchange fairly | dependency hypotheses (Lewis), causal partitions, counterfactual and imaging formulations (Gibbard–Harper, Joyce), two-boxing, the rich-irrationality argument and its reply |
| 4.4 | Hard cases for both | Run both theories on cases built to embarrass each, and say what ratifiability adds | Egan's psychopath button, Death in Damascus, decision instability, ratifiability (Jeffrey), newer rivals named (functional decision theory) |

**Boss problem 4:** A predictor is right with probability p. The opaque box holds 1,000,000 dollars if and only if it predicted one-boxing; the clear box holds 1,000. (a) Compute evidential expected utility for each act (money as utility) and find the threshold of p above which evidential decision theory recommends one box (p > 0.5005). (b) Let q be the agent's credence that the million is already in the box. Compute causal expected utility for each act as a function of q and show two-boxing wins by exactly 1,000 for every q. (c) A button kills every psychopath. Pressing it when you are not a psychopath is worth +10, pressing it when you are is worth −100, and not pressing is worth 0. Your unconditional credence that you are a psychopath is 0.05, but only a psychopath would press, so your credence given pressing is 0.8. Compute causal expected utility of pressing (4.5) and evidential expected utility of pressing (−78), say which theory recommends what, and say whether pressing is ratifiable (use your credence given pressing). (d) Reconstruct the "why ain'cha rich?" argument for one-boxing and the causalist's reply that the game rewards irrationality. Decide whether the argument begs the question, in 300–500 words. Parts (a)–(c) are formal, with the ratifiability verdict exegetical; (d) is exegetical for the reconstruction and evaluative for the verdict.

### Module 5: Aggregating people

Decision theory turned into ethics: what follows when a society's preferences obey the same axioms as a person's, whose welfare counts and on what scale, and how to compare populations of different sizes.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Harsanyi's aggregation theorem | State the theorem, sketch its proof in a small case, and say what it does and does not establish | individual and social vNM preferences, Pareto indifference, social utility as a weighted sum, undetermined weights, the claim that it vindicates utilitarianism and Sen's reply |
| 5.2 | Interpersonal comparison and social welfare functions | Say which comparability each social welfare function presupposes, and test ex ante fairness | ordinal, level and unit comparability, utilitarian and maximin functions (formulas cited to [`grad-micro`](../grad-micro/syllabus.md) 6.5), prioritarianism as a concave transform (the justice debate cited to [`political-philosophy`](../political-philosophy/syllabus.md) 2.6), Diamond's coin-flip objection, ex ante vs ex post Pareto |
| 5.3 | Population ethics I: total and average | Compute total and average value for populations of different sizes and derive the result each view is exposed to | variable-population comparisons, the total view and the repugnant conclusion (Parfit), the average view and adding people in hell, the non-identity problem, the procreative asymmetry |
| 5.4 | Population ethics II: escape routes | Test critical-level, person-affecting and intransitive responses on the mere addition paradox | Parfit's mere addition paradox (A, A+, B), critical-level utilitarianism and the sadistic conclusion, person-affecting views, variable value, giving up transitivity (Temkin) |

**Boss problem 5:** (a) Two people have vNM utilities over social outcomes: person 1 gives x = 1, y = 0, z = 0.6, and person 2 gives x = 0, y = 1, z = 0.5. Society's preferences satisfy the vNM axioms and Pareto indifference, and society is indifferent between x and y. Use Harsanyi's theorem to find the relative weights and society's best outcome (equal weights; z). Then replace person 2's utility with the equally valid representation obtained by doubling person 2's utility. Keep the weights equal and show the best outcome becomes y. Say what this shows about what the theorem settles. (b) An indivisible good goes to person 1 (utility 1, person 2 gets 0) or by fair coin flip. Show that a Harsanyi social utility with equal weights is indifferent between the two, and state Diamond's objection. (c) Population A has 1,000 people at welfare 100; A+ adds 1,000 more at welfare 20; B has 2,000 people at welfare 65. Rank the three by total value (130,000 for B, 120,000 for A+, 100,000 for A), by average value, and by critical-level value with critical level 10. Then show the critical-level view prefers adding 100 people at welfare −30 to adding 1,000 people at welfare 5 (−4,000 vs −5,000). (d) Choose one: accept the repugnant conclusion or give up one premise of the mere addition paradox. Defend the choice against its strongest objection in 300–500 words. Parts (a)–(c) are formal, with the final sentence of (a) and Diamond's objection in (b) exegetical; (d) is evaluative.

### Module 6: The edges of expected value

What happens when utilities go infinite, when probabilities are tiny and stakes enormous, and when the uncertainty is about morality itself.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | Pascal's wager as a decision problem | Reconstruct the wager's three arguments from the text and test each against decision-theoretic objections | the dominance, expectation and dominating-expectation versions, the many-gods partition problem, the mixed-strategy objection (Duff, Hájek), infinite utility and the vNM axioms (the text and the religious question cited to [`philosophy-of-religion`](../philosophy-of-religion/syllabus.md) 5.3) |
| 6.2 | Fanaticism and tiny probabilities | Say what bounded utility, probability discounting and accepting fanaticism each cost | Pascal's mugging, fanaticism, bounded utility revisited (from 1.2), discounting negligible probabilities and its violation of dominance, St. Petersburg-style prospects in ethics |
| 6.3 | Moral uncertainty | Compute maximized expected choiceworthiness and show where intertheoretic comparison decides the verdict | my favourite theory, maximizing expected choiceworthiness (MacAskill, Bykvist, Ord), intertheoretic comparison and normalization, the regress to uncertainty about the method, the belief-side analogue (peer disagreement, cited to [`epistemology`](../epistemology/syllabus.md) 4.5) |

**Boss problem 6:** (a) Take the wager passage of Pascal's *Pensées* (Trotter translation, public domain). Close-read it and separate the three arguments it contains, marking which rely on dominance and which on expectation. Put the strongest one into a decision matrix. (b) Show that if heaven carries infinite utility, "wager for God" and "wager for God only if a fair coin lands heads" have the same expected utility. Then say which vNM axiom infinite utility violates. (c) An agent has credence 0.6 in theory T1 and 0.4 in T2. Options A, B and C have choiceworthiness 10, 8 and 0 under T1, and 0, 6 and 10 under T2. Compute expected choiceworthiness (B wins) and the my-favourite-theory verdict (A). Then multiply T2's scale by k and find the range of k for which each option wins (A for k < 0.5, B for 0.5 < k < 3, C for k > 3). (d) A defender of expected-value reasoning accepts both the wager's structure and Pascal's mugging rather than bound utility. Steelman that position, then give the strongest reply, in 300–500 words. Part (a) is exegetical; (b)–(c) are formal, with the axiom named in (b) exegetical; (d) is evaluative.

## Sources of truth

- Martin Peterson, *An Introduction to Decision Theory* (the course's notation for decision matrices, rules under ignorance, and the causal–evidential split)
- Richard Bradley, *Decision Theory with a Human Face*, and Lara Buchak, *Risk and Rationality* (the normative status of the axioms, ambiguity, and risk-weighted expected utility)
- James Joyce, *The Foundations of Causal Decision Theory* (Savage, Jeffrey and causal decision theory in one framework)
- Hilary Greaves, "Population axiology" (*Philosophy Compass*), and William MacAskill, Krister Bykvist and Toby Ord, *Moral Uncertainty* (Modules 5–6)
- Primary modern works, paraphrased in lessons: von Neumann and Morgenstern, *Theory of Games and Economic Behavior*; Savage, *The Foundations of Statistics*; Jeffrey, *The Logic of Decision*; Ellsberg, "Risk, Ambiguity, and the Savage Axioms"; Nozick, "Newcomb's Problem and Two Principles of Choice"; Harsanyi, "Cardinal Welfare, Individualistic Ethics, and Interpersonal Comparisons of Utility"; Parfit, *Reasons and Persons*. Public domain: Pascal, *Pensées* (Trotter)

## Notes

- **Owned here, cited elsewhere.** [`ethics`](../ethics/syllabus.md) cedes Harsanyi's aggregation theorem and population ethics to this course (its 1.5 and 5.2 point here). When ethics is built, those lessons should link 5.1 and 5.3–5.4. [`political-philosophy`](../political-philosophy/syllabus.md) 2.3 computes maximin against expected utility on small tables and cites this course for Harsanyi; 3.3–3.4 are the general theory behind that lesson.
- **No proof of vNM exists in the library.** The three built economics lessons state the theorem. 1.3 gives the standard-gamble construction, which is most of the proof's content for finite outcome sets. A full proof with continuity and the mixture-space details is deliberately left out, since it would teach real analysis rather than decision theory.
- **Where this course goes next.** `philosophy-of-economics` builds on 1.4 (what utility is) and 5.2 (interpersonal comparison). [`epistemology`](../epistemology/syllabus.md) Module 5 is the belief-side companion to 2.2 and 3.2 (credence from preference, imprecise credence). [`philosophy-of-religion`](../philosophy-of-religion/syllabus.md) 5.3 comes before or alongside 6.1; either order works, since 6.1 restates the wager before formalizing it. `social-choice` is the aggregation-of-judgments companion to Module 5.
- **Lesson count.** The roadmap estimated ~20; this runs 23 (+15%, inside the ±25% band). The steering adds four owned topics beyond the roadmap blurb: decisions under ignorance with the Rawls bridge, social welfare and interpersonal comparison, Pascal's wager with fanaticism, and moral uncertainty. Population ethics needs two lessons, because its escape routes are where the live disputes are. Nothing is crammed: the vNM statement and the economics of risk aversion are cited from built courses rather than re-taught, which frees Module 1 for interpretation.
- **Numbers in the boss problems were checked** (exact fractions where possible) when this syllabus was written. When `/learn` generates a boss problem from these descriptions, re-verify any changed number before publishing a key.
