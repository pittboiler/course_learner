# Epistemology — Syllabus

> Philosophy · Tier 1 · ~23 lessons · Prereqs: [`philosophical-method`](../philosophical-method/syllabus.md) · Roadmap id: `epistemology`

## Goal

This course owns the theory of knowledge and justification for the whole library. It picks up where [`philosophical-method`](../philosophical-method/syllabus.md) 3.1 left the justified-true-belief analysis — broken by Gettier — and asks what the repairs look like, whether justification must be accessible from the inside, and how justified beliefs are structured. It then takes on the skeptic (about the external world, and about induction), the sources of knowledge beyond perception (reason, other people), what to do when an equally good thinker disagrees, and the Bayesian picture of rational belief as probability. The Bayesian module is formal: you will build Dutch books, compute updates, and prove that an incoherent agent is accuracy-dominated, because `philosophy-of-science` and `philosophy-of-religion` both build on it. You will finish able to run any theory of knowledge or justification on a hard case, state the skeptic's argument in its strongest valid form, and say exactly which premise each anti-skeptical strategy denies and what that costs. The course takes no side between internalists and externalists, dogmatists and skeptics, or conciliationists and steadfast views. It deliberately skips confirmation theory and scientific method (`philosophy-of-science`), religious epistemology (`philosophy-of-religion`), formal decision theory (`decision-theory`), the history of epistemology as history (`ancient-medieval-philosophy`, `modern-philosophy`), theories of perception as philosophy of mind, and formal epistemic logic.

**Scope discipline.**

| Topic | Owner | Here |
|---|---|---|
| Conceptual analysis; the JTB analysis and the basic Gettier cases | [`philosophical-method`](../philosophical-method/syllabus.md) 3.1 | Assumed. 1.1 opens with the repairs (no false lemmas, defeasibility) and the argument that every repair fails; it does not re-run the Gettier cases |
| Odds-form evidence, likelihood ratios, base-rate neglect | [`philosophical-method`](../philosophical-method/syllabus.md) 2.4 | Assumed. Module 5 turns the odds-form tool into a theory of rational credence: coherence norms, conditionalization as an update *rule*, Jeffrey updating, priors |
| Probability axioms, conditional probability, Bayes' theorem | [`prob-stat-refresher`](../prob-stat-refresher/syllabus.md) 1.1–1.2 | Cited, never re-derived. Module 5 asks why a rational agent's credences *should* obey that machinery |
| Expected utility, vNM and Savage axioms, money pumps and Dutch books for preferences, Newcomb | `decision-theory` | Not taught. Dutch books here (5.2–5.3) value a bet at stake times credence, with the assumption that utility is linear in money flagged and the general theory cited |
| Confirmation theory (measures of support, the ravens, old evidence), Goodman's new riddle, IBE in science, scientific realism | `philosophy-of-science` | Not taught. 4.3 names grue only to show that any answer to Hume must privilege some predicates; 5.4 names it as a priors problem. Both cite forward |
| Hume, Descartes, Reid, Kant as historical figures and systems; the synthetic a priori in Kant | `modern-philosophy` | *Meditations* I, *Enquiry* §4 and Reid on testimony are read as live arguments only. 4.1 names Kant's category and cites |
| Plato's epistemology (*Meno*, *Theaetetus*) as history | `ancient-medieval-philosophy` | The *Meno*'s value problem (1.3) is used as a live problem only |
| Religious epistemology: reformed epistemology, evidentialism about God, testimony to miracles | `philosophy-of-religion` | Not taught. Proper functionalism appears in 2.4 as a general externalist theory; its theistic application is cited. Hume on miracles stays with [`philosophical-method`](../philosophical-method/syllabus.md) 2.4 and `philosophy-of-religion` |
| Moral knowledge; moral disagreement as evidence in metaethics | [`ethics`](../ethics/syllabus.md) 6.6 | Not taught. 4.5 owns peer disagreement as a general problem, which ethics 6.6 cites |
| Analytic/synthetic, meaning and Quine's critique in depth | `philosophy-of-language-and-logic` | 4.1 uses the distinction to separate it from the a priori and the necessary; the semantics goes forward |
| Hume's problem as a learning-theory result | [`statistical-learning`](../statistical-learning/syllabus.md) 1.4 | Cited as a bridge in 4.3 (no-free-lunch as inductive skepticism with a constant) |

## How practice works in this course

Problems follow [HUMANITIES-BUILD-BRIEF.md](../../HUMANITIES-BUILD-BRIEF.md): every part declares its kind, and every solution is a rubric (must-hit moves, wrong turns) plus a model answer. Here that plays out in four ways:

- **Counterexample is the workhorse of Modules 1–3.** Epistemology is tested by cases: fake barns, clairvoyants, demon worlds, bank cases, lotteries. Building a case that satisfies a proposed analysis but is not knowledge (or the reverse) is the hardest thing to fake, and most lessons in these modules have one.
- **Exegetical parts are strict.** What a theory says about a case once its conditions are stated precisely (does Norman satisfy process reliabilism? does the zebra case violate closure or sensitivity?), what Hume's dilemma actually claims, which premise of the closure argument Dretske denies. These have right answers.
- **Evaluative parts are verdict-neutral.** No rubric rewards concluding that externalism, contextualism, Moorean dogmatism, conciliationism or objective Bayesianism is right. Must-hit moves are ones either side has to make: state the view precisely, run it on the case, name the premise the objection attacks, and say what the reply costs.
- **Module 5 is formal.** Problems there are ordinary math problems graded as in any math course — construct the book, compute the posterior, prove the dominance — usually with one short evaluative part asking what the result shows. Close reading uses public-domain texts only: Plato (Jowett), Descartes (Haldane and Ross, or Veitch), Hume, Reid. Modern authors (Moore, Goldman, BonJour, Sosa, Williamson, Dretske, Nozick, DeRose, Lewis, Pryor, Lackey, Christensen, Kelly, Joyce) are paraphrased and cited, never quoted at length.

## Dangerous Checklist

When you finish, you can:

- [ ] Take a proposed analysis of knowledge (no false lemmas, defeasibility, sensitivity, safety) and build a case it gets wrong, or say why the case-building recipe fails against it
- [ ] Tell sensitivity from safety, and run both on the fake-barn, lottery and "I am not a brain in a vat" cases
- [ ] State the internalism/externalism dispute precisely (access vs mentalism), and give each side's verdict and best reply on the new evil demon and the clairvoyance cases
- [ ] Lay out the regress argument and say what foundationalism, coherentism and infinitism each deny, with the standard objection to each (the given, isolation, finite minds)
- [ ] Apply process reliabilism and a virtue epistemology to a case, and press the generality problem and the bootstrapping worry
- [ ] Reconstruct the closure-based skeptical argument as a valid argument, and say which premise the Dretske–Nozick, Moorean, dogmatist and contextualist responses each deny and at what cost
- [ ] Place a claim as a priori or a posteriori, necessary or contingent, analytic or synthetic, and explain why the three distinctions come apart
- [ ] Reconstruct Hume's problem of induction as a dilemma, and assess the inductive, pragmatic, dissolution and externalist answers to it
- [ ] Compare reductionist and anti-reductionist accounts of testimony on a case where a hearer seems to gain knowledge from a speaker who does not herself have it
- [ ] State conciliationism and the steadfast view on a peer disagreement case, and press the self-undermining objection against the former
- [ ] Construct a synchronic Dutch book against an incoherent agent and show she is accuracy-dominated under the Brier score
- [ ] Update credences by strict and Jeffrey conditionalization, explain the diachronic Dutch book argument for the former, and say what the problem of priors leaves open

## Modules

### Module 1: What knowledge is

Past Gettier: the repairs, the argument that no repair can work, the modal conditions that replaced them, the question of why knowledge matters at all, and the inside/outside dispute that runs through the rest of the course.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Repairing JTB | Test the no-false-lemmas and defeasibility repairs, and run Zagzebski's recipe against any analysis | no false lemmas, fake barn county, defeasibility and misleading defeaters, the inescapability argument (Zagzebski) |
| 1.2 | Sensitivity and safety | Tell the two modal conditions apart and find the cases where they diverge | sensitivity (Nozick), safety (Sosa, Williamson), close possible worlds, lottery beliefs, method-relativity |
| 1.3 | Why knowledge? | Say what knowledge adds to true belief, and assess the knowledge-first reversal | the *Meno* value problem and the road to Larissa, the swamping problem, knowledge first (Williamson), E = K, the KK principle |
| 1.4 | Internalism and externalism | State the dispute precisely and give each side's verdict on its opponent's favourite case | access vs mentalist internalism, propositional vs doxastic justification, the new evil demon, Truetemp and Norman the clairvoyant |

**Boss problem 1:** Three cases are given, each described precisely: a Gettier-style inference, a fake-barn perception, and a lottery belief. (a) For each, say whether it satisfies no-false-lemmas, sensitivity and safety, with a one-line reason per verdict. (b) Pick the analysis from (a) that sorts the cases best; apply Zagzebski's recipe to it — produce the counterexample the recipe predicts, or diagnose exactly where the recipe fails against that analysis. (c) A victim of a Cartesian demon has exactly your experiences and reasons exactly as carefully. In 300–500 words: are her beliefs justified? Say what your answer commits you to about the relation between justification and truth. Part (a) is exegetical; (b)–(c) are evaluative.

### Module 2: The structure of justification

If beliefs are justified by other beliefs, where does it stop? The regress and its classic exits, then the externalist theories that change the question.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The regress problem | State Agrippa's trilemma and say what each response must deny | inferential justification, the regress, foundationalism / coherentism / infinitism / skepticism as options, infinitism and finite minds (Klein) |
| 2.2 | Foundationalism | Tell classical from modest foundationalism, and assess the dilemma of the given | basic beliefs, incorrigibility, the myth of the given (Sellars), modest foundationalism, phenomenal conservatism (Huemer) |
| 2.3 | Coherentism | Say what coherence is and test whether it can connect a belief system to the world | coherence (consistency, inferential connection, explanation), the isolation and alternative-systems objections, whether coherence is truth-conducive |
| 2.4 | Reliabilism | Run process reliabilism on a case and press its three standard objections | process reliabilism (Goldman), the generality problem, clairvoyance revisited, bootstrapping and easy knowledge, proper functionalism as a variant |
| 2.5 | Virtue epistemology | Analyse knowledge as success from ability, and tell reliabilist from responsibilist virtue | apt belief (Sosa's archer: accurate, adroit, apt), credit for true belief (Greco), responsibilist virtues and vices (Zagzebski), whether virtue answers the value problem |

**Boss problem 2:** Norman is a reliable clairvoyant with no evidence for or against his power; a demon-world victim has impeccable evidence and wholly unreliable faculties; a bootstrapper verifies a gauge's reliability by reading the gauge. (a) Give the verdict of classical foundationalism, coherentism, process reliabilism and virtue epistemology on each of the three, as a 4×3 table with a one-line reason per cell. (b) Name the crux between the reliabilist and the internalist foundationalist, stated as the one premise one side must deny. (c) In 300–500 words, say which theory's worst cell is most costly and whether it can be repaired without collapsing into a rival. Parts (a)–(b) are exegetical; (c) is evaluative.

### Module 3: Skepticism about the external world

The skeptic's best argument runs on a principle almost everyone accepts. Four ways out, each with a price.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The closure argument | Put the brain-in-a-vat argument into valid form and see why closure makes it hard to resist | dreaming and the demon (*Meditations* I), the BIV argument, single-premise closure, closure vs transmission, underdetermination form |
| 3.2 | Denying closure | Explain how sensitivity yields closure failure, and weigh the abominable conjunction | Dretske's zebra case, Nozick's tracking account, "I know I have hands but not that I'm not a BIV", multi-premise closure |
| 3.3 | Moore and the dogmatist | Assess replying to the skeptic by modus tollens, and the charge that it begs the question | Moore's proof, "one person's modus ponens" (from method 3.4), dogmatism (Pryor), transmission failure (Wright), easy knowledge again |
| 3.4 | Contextualism and its rivals | Say how shifting standards dissolve the skeptical paradox, and test the view against its invariantist rivals | bank cases (DeRose), Lewis's rules of relevance, semantic blindness, subject-sensitive invariantism, knowledge-action principles |

**Boss problem 3:** Take Descartes, *Meditations* I (public-domain translation), from the dream argument to the evil genius. (a) Reconstruct the argument as a closure-based skeptical argument in standard form, flagging any premise you had to supply. (b) For each of Dretske–Nozick, Moore, Pryor's dogmatism and DeRose's contextualism, say which premise is denied or reinterpreted and what the response says the ordinary person knows. (c) Each response incurs a characteristic cost (the abominable conjunction, apparent question-begging, easy knowledge, semantic blindness). In 300–500 words, rank two of them and defend the ranking against the best objection to it. Parts (a)–(b) are exegetical; (c) is evaluative.

### Module 4: Sources - reason, induction, and other people

Knowledge that doesn't come from looking: from reflection, from past experience projected forward, and from what others tell you — and what to do when a peer tells you the opposite.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | A priori knowledge | Separate the a priori from the necessary and the analytic, and assess rationalism about justification | a priori / a posteriori, necessary / contingent, analytic / synthetic, the contingent a priori and necessary a posteriori (Kripke), rational insight (BonJour) vs Quinean revisability |
| 4.2 | Hume's problem of induction | Reconstruct Hume's dilemma and see why it is not a demand for certainty | *Enquiry* §4, demonstrative vs probable reasoning, the uniformity principle, circularity, induction vs deduction as the wrong contrast |
| 4.3 | Answering Hume | Assess four answers and say what each concedes to the skeptic | inductive justification of induction and rule circularity, analytic dissolution (Strawson), pragmatic vindication (Reichenbach), externalist answer, grue named (cites `philosophy-of-science`) |
| 4.4 | Testimony | Compare reductionism and anti-reductionism, and test both on a case of knowledge the speaker lacks | reductionism (global vs local), Reid's principles of credulity and veracity, anti-reductionism, transmission vs generation (Lackey), testimonial injustice (Fricker) |
| 4.5 | Peer disagreement | State conciliationism and the steadfast view, and test each on the cases that favour its rival | epistemic peers, the restaurant check case (Christensen), equal weight (Elga), total evidence (Kelly), the self-undermining objection, higher-order evidence |

**Boss problem 4:** Take Hume's argument in *An Enquiry Concerning Human Understanding* §4 Part II (public domain). (a) Reconstruct it as a dilemma in standard form. (b) A defender argues that induction has worked in the past, so it will probably work in the future; say whether the circularity is premise-circular or rule-circular and why the difference matters. (c) Hume's own account of testimony is reductionist: we trust reports because experience has shown them reliable. In 300–500 words, assess whether the problem of induction leaves the reductionist about testimony worse off than a Reidian anti-reductionist, or whether both inherit the same problem. Parts (a)–(b) are exegetical; (c) is evaluative.

### Module 5: Bayesian epistemology

Belief comes in degrees. Why degrees of belief should be probabilities, how they should change, and the question the formalism cannot answer by itself: where to start.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Credences and probabilism | Say what a credence is and how it relates to all-or-nothing belief | credence, probabilism, the betting interpretation, the Lockean thesis, the lottery (Kyburg) and preface (Makinson) paradoxes |
| 5.2 | Dutch books and accuracy | Construct a sure-loss book against incoherent credences, and prove the accuracy-dominance alternative | synchronic Dutch book theorem, the converse theorem, objections to the betting argument, Brier score, accuracy dominance (de Finetti, Joyce) |
| 5.3 | Conditionalization | Update by conditionalization, derive the diachronic Dutch book, and extend to uncertain evidence | strict conditionalization, odds form as a rule (from method 2.4), the diachronic book (Lewis), Jeffrey conditionalization, rigidity |
| 5.4 | The problem of priors | Say what constrains a prior, and why indifference and convergence each fall short | subjective vs objective Bayesianism, the principle of indifference and the cube factory, the principal principle, merging of opinions and its conditions, grue as a priors problem (cites `philosophy-of-science`) |
| 5.5 | Bayesian disagreement and higher-order evidence | Model a peer disagreement formally and test whether conciliationism survives the model | linear vs geometric pooling, pooling and conditionalization don't commute for linear pools, splitting the difference, evidence about one's own reliability |

**Boss problem 5:** An agent has credence 0.7 in a proposition and 0.5 in its negation. (a) Construct a Dutch book guaranteeing her a loss, and state the loss. (b) Find a coherent credence pair with lower Brier inaccuracy in both worlds, and verify the dominance. (c) A second agent with coherent credences over a small partition disagrees with the first agent's repaired credences; both then learn the same evidence. Show with numbers that linearly pooling and then conditionalizing gives a different result from conditionalizing and then pooling. (d) In 300–500 words: does the result of (c) tell against conciliationism about peer disagreement, or only against linear pooling as a model of it? Parts (a)–(c) are formal; (d) is evaluative.

## Sources of truth

- Jonathan Dancy and Ernest Sosa (eds.), *A Companion to Epistemology*, and Richard Feldman, *Epistemology* (the course's conventions for naming positions and cases)
- Duncan Pritchard, *What Is This Thing Called Knowledge?* (the analysis of knowledge, safety, skepticism at introductory rigor)
- Michael Titelbaum, *Fundamentals of Bayesian Epistemology* (Module 5's notation and rigor: credences, Dutch books, conditionalization, priors)
- Worked texts in public-domain translations: Plato, *Meno* (Jowett); Descartes, *Meditations on First Philosophy* I; Hume, *An Enquiry Concerning Human Understanding* §4; Reid, *An Inquiry into the Human Mind*

## Notes

- **Lesson count.** The roadmap estimated ~20; this runs 23 (+15%, inside the band). Module 2 needs five lessons because reliabilism and virtue epistemology are separate theories with separate objections, and Module 4 needs five because testimony and peer disagreement, both named in the roadmap blurb, are distinct sources problems that cannot share a 10-minute lesson with induction. Module 5 needs five for the formal work the downstream courses depend on.
- **Downstream.** Module 5 is the foundation `philosophy-of-science` builds Bayesian confirmation on, and Modules 1–2 plus 5.4 are what `philosophy-of-religion` needs for evidentialism, reformed epistemology and priors in arguments for God. 4.5 is cited by [`ethics`](../ethics/syllabus.md) 6.6. `decision-theory` generalizes the Dutch books of 5.2–5.3 to preferences and utility.
- **Bridges.** Hume's problem (4.2–4.3) ↔ the no-free-lunch theorem in [`statistical-learning`](../statistical-learning/syllabus.md) 1.4. Conditionalization (5.3) ↔ Bayes' theorem in [`prob-stat-refresher`](../prob-stat-refresher/syllabus.md) 1.2. Pooling (5.5) ↔ aggregation problems in `social-choice`.
