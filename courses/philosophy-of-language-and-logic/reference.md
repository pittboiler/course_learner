# Philosophy of Language and Logic · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The course asks how words reach the world and what logic follows from the answer: what a name or a
description contributes to what is said and to a belief report, what necessity and possibility come
to as a formal system, whether names designate rigidly and how that yields the necessary a
posteriori, whether meaning is truth conditions, use or speakers' intentions and what is conveyed
beyond what is said, whether analyticity survives Quine, and what truth is once the liar and the
sorites are on the table. It takes no side between Fregeans and Millians, between truth-conditional
and use theories of meaning, between Quine and the defenders of analyticity, between theories of
truth, or between treatments of the liar and the sorites. Every position is stated as its defenders
state it, with the premise its critics attack, and no entry records a verdict. The logic the course
states is settled and is stated as settled: a description's truth value at each scope, frame
correspondence, the soundness and completeness of the modal systems for their frame classes, the
undefinability of truth, and the facts about Kripke's fixed points. Use the card mid-problem to find
what a word means ([Terms](#terms)), a position and its traps
([Positions and distinctions](#positions-and-distinctions)), a formal statement with every symbol
defined ([Formulas and formal statements](#formulas-and-formal-statements)), an argument's premises
in outline ([Arguments](#arguments)), or who said what and when
([Thinkers and texts](#thinkers-and-texts)). Topics another course owns are listed with their
owners in [Assumed, not taught here](#assumed-not-taught-here), and the recurring traps are in
[Pitfalls](#pitfalls).

## Terms

Technical vocabulary in first-appearance order, glossed as the lessons gloss it. Terms with a full
entry below link to it. *First used* is the first lesson that uses the term in this sense; titles,
forward pointers, solutions and passing mentions don't count, and where a later lesson develops the
term the gloss points to it. Letters get reused, so read a letter with its lesson: $D$ is axiom D in
2.1–2.3, a world's domain $D(w)$ in 2.4–3.3 and the "definitely" operator in 5.5; $K$ is the system
and axiom K in Module 2 and the knowledge operator on 2.3's epistemic reading; $T$ is axiom and
system T in Module 2 and $T_n$, "person $n$ is tall", in 5.4; $L$ is an object language in 4.1, 4.5
and 5.1's D1 and the liar sentence in 5.1's T1 and 5.3; $S$ is a sentence in 1.4 and 4.5, the metre
stick in 3.3 and a speaker in 4.4; $\Box$ is necessity in Module 2, obligation ($O$), knowledge ($K$)
or provability on 2.3's readings, and "definitely" ($D$) in 5.5. Premise and definition labels (P1,
D1, K1, (C) and so on) belong to their lesson: D1 alone is Russell's analysis in 1.3, Donnellan's
first premise in 1.4, the frame conditions in 2.2 and a different definition in most later lessons;
K1–K3 are Kripke's 1977 premises in 1.4 and K1–K6 the sceptic's in 4.3; (C) is 3.1's
non-circularity condition and 4.1's clause for the conditional.

| Term | Means | First used |
|---|---|---|
| [reference](#reference) (*Bedeutung*) | what an expression stands for: on Frege's view a name's object, a sentence's truth value, a predicate's concept; a relation between expression and object, not something a speaker does | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| [sense](#sense) (*Sinn*) | the way an expression presents its reference; objective and shareable, grasped by anyone who understands the expression | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| [mode of presentation](#mode-of-presentation) (*Art des Gegebenseins*) | Frege's "manner of being given": the way a sign gives its referent, contained in its sense | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| [Frege's puzzle](#freges-puzzle) | why a true "$a = b$" can be informative when "$a = a$" is not | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| [idea](#idea-sense-and-reference) (*Vorstellung*) | the private image a word calls up in one person; in Frege's telescope the retinal image, not the sense | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| [cognitive value](#cognitive-value) (*Erkenntniswert*) | what a sentence can teach someone who understands it; "$a = a$" and a true "$a = b$" can differ in it | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| ways of determining (*Bestimmungsweisen*) | *Begriffsschrift* (1879, §8): one content fixed in two ways, each with its own name; there identity relates names | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| [compositionality](#compositionality) | of sense: a complex's sense is fixed by its parts' senses and their arrangement; of reference: its reference by its parts' references | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| [substitutivity *salva veritate*](#substitutivity-salva-veritate) | swapping co-referring expressions leaves the truth value unchanged (Leibniz's "interchange *salva veritate*"); compositionality of reference applied to swapping, stated as F1 in [1.2](lessons/01-02-belief-reports-and-empty-names.md) | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| [Leibniz's law](#leibnizs-law) | identicals share everything: a law about objects ([`metaphysics` 5.3](../metaphysics/lessons/05-03-coincidence-and-the-ship-of-theseus.md)), of which substitutivity, about expressions, is the semantic twin | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| [thought](#thought-fregean) (*Gedanke*) | the sense of a declarative sentence: its objective content, which many can share, not the act of thinking | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| [reference of a sentence](#reference-of-a-sentence) | its truth value, the one thing a swap of co-referring parts leaves fixed; so all true sentences co-refer | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| the True, the False (*das Wahre*, *das Falsche*) | the two truth values, which Frege counts as objects: the references of sentences | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| [concept](#concept-and-object) (*Begriff*) | what a predicate refers to; predicative, unlike an object | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| unsaturated (*ungesättigt*) | incomplete, needing an argument: Frege's mark of a concept against an object; hence "the concept *horse* is not a concept" | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| [Millianism](#millianism), Millian | a name contributes only its bearer, so "$a = a$" and a true "$a = b$" express one proposition (Salmon, Soames; developed in [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)) | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| [guises](#guises) | Salmon's term for the ways a speaker takes in a proposition; on his view they lie outside what the sentence means (his three-place belief relation is in [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)) | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| proper name (*Eigenname*), Frege's sense | any expression for one object, descriptions included ("the intersection of $a$ and $b$"); Russell pulls names and descriptions apart ([1.3](lessons/01-03-russells-theory-of-descriptions.md)) | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| difference test, intuitive criterion of difference | if someone who understands two sentences could take one as true and the other as false, they express different thoughts (Frege 1892, p. 32; Evans's label, 1982) | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| direct speech, signs of signs | quotation: one's words refer to the other speaker's words | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| customary reference, customary sense | what a word refers to and what it expresses in a plain sentence, outside any attitude verb | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| [indirect reference](#indirect-reference) | in indirect speech and after "believes", "says" and their kin, a word refers to its customary sense and the clause to a thought | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| indirect sense | the further sense a word has in indirect speech: a mode of presentation of its customary sense | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| [empty name](#empty-name) | a name with a sense and no reference ("the least convergent series" provably; "Odysseus" doubtfully) | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| [hierarchy of senses](#hierarchy-of-senses) | $s_0, s_1, s_2, \ldots$: one new sense for each added attitude verb, each presenting the one below; Church accepted it, Dummett and Parsons tried to cut it short | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| [indirect context](#indirect-context) (*ungerade*, "oblique") | a position, as after "believes that", where a word takes its indirect reference | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| [referential opacity](#referential-opacity), opaque context | Quine's name for a position where co-referring terms cannot be swapped with truth preserved; indirect reference is one explanation of it ([2.5](lessons/02-05-de-re-modality-and-quines-challenge.md)) | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| [belief report](#belief-report) | a sentence "$A$ believes that ..."; swapping co-referring names inside it can change its truth value | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| gap rule | Frege (1892, p. 32): a part in customary position with no reference leaves the whole sentence without a truth value | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| [Weak Kleene](#weak-kleene) | the "infectious" three-valued tables (Bochvar 1938, later called Weak Kleene): a gap in any part leaves the whole without a value; the tables of the gap rule | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| [truth-value gap](#truth-value-gap) | having no truth value: an absence of value, neither falsity nor a third value | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| [notional and relational belief](#relational-and-notional-belief) | "Ralph believes that someone is a spy" against "someone is such that Ralph believes he is a spy" (Quine 1956) | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| [quantifying in](#quantifying-in) | binding a variable inside an attitude verb or a box from outside it, as the relational reading does; [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md)'s problem | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| [semantic innocence](#semantic-innocence) | words in a that-clause refer to what they always refer to (Davidson, "On Saying That", 1969) | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| [variability in sense](#variability-in-sense) | speakers attach different senses to one name, so whose sense a word in a belief report refers to is left open (Richard 1988) | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| [neo-Fregeanism](#neo-fregeanism), neo-Fregean | keeps senses with relaxed demands: the believer's sense need only be suitably similar to the reporter's (Forbes); in [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md), a name contributes a mode of presentation | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| [theory of descriptions](#theory-of-descriptions) | Russell (1905): "the $F$ is $G$" says that exactly one thing is $F$ and that it is $G$, so "the" names nothing | [1.3](lessons/01-03-russells-theory-of-descriptions.md) |
| [definite description](#definite-description) | a phrase "the so-and-so" in the singular | [1.3](lessons/01-03-russells-theory-of-descriptions.md) |
| denoting phrase | Russell's term for phrases such as "a man", "every man", "the present King of France", which "never have any meaning in themselves" | [1.3](lessons/01-03-russells-theory-of-descriptions.md) |
| [incomplete description](#incomplete-description) | a description whose predicate fits many things though the speaker means one ("the mayor") | [1.3](lessons/01-03-russells-theory-of-descriptions.md) |
| [primary and secondary occurrence](#primary-and-secondary-occurrence) | a description's analysis unpacked outside an operator such as "not" or "believes that" (primary, wide scope) or inside it (secondary, narrow scope) | [1.3](lessons/01-03-russells-theory-of-descriptions.md) |
| [scope](#scope), wide and narrow | which operator or description governs which: here, whether a description is unpacked outside or inside "not", "believes" or a box; a structural, not a lexical, ambiguity | [1.3](lessons/01-03-russells-theory-of-descriptions.md) |
| [existence as a quantifier](#existence-as-quantifier) | "the $F$ exists" says that exactly one thing is $F$; "exists" is not a predicate of things | [1.3](lessons/01-03-russells-theory-of-descriptions.md) |
| ontological pluralism | McDaniel: one quantifier for each mode of being; denies the single unrestricted quantifier Russell's analysis assumes ([`metaphysics` 1.1](../metaphysics/lessons/01-01-existence-and-ontological-commitment.md)) | [1.3](lessons/01-03-russells-theory-of-descriptions.md) |
| [names as disguised descriptions](#names-as-disguised-descriptions) | ordinary proper names abbreviate descriptions: "Apollo" in 1905 (when "Scott" is still a genuine name), "Socrates" by 1918 | [1.3](lessons/01-03-russells-theory-of-descriptions.md) |
| [logically proper name](#logically-proper-name) | the commentators' label for Russell's "name in the logical sense": it means its bearer alone, so can name only an object of acquaintance ("this", "that") | [1.3](lessons/01-03-russells-theory-of-descriptions.md) |
| completion | a Russellian repair for an incomplete description: read "the mayor" as short for a fuller one ("the mayor of Eskerby"); no "principled basis" picks one (Devitt and Sterelny's term) | [1.3](lessons/01-03-russells-theory-of-descriptions.md) |
| domain restriction | the other repair: context narrows the domain a quantifier ranges over, as in "everyone came" (Stanley and Szabó 2000) | [1.3](lessons/01-03-russells-theory-of-descriptions.md) |
| [countermodel](#countermodel) | a model in which an argument's premises are true and its conclusion false, so the argument is invalid (first-order in 1.3's problems); in Module 2 a model and a world where a formula is false, which by soundness shows it is no theorem | [1.3](lessons/01-03-russells-theory-of-descriptions.md) |
| [sentence and use of a sentence](#sentence-and-use-of-a-sentence), utterance | Strawson (1950): a sentence has a meaning; a use of it on an occasion may be about something and true or false; an utterance is the token produced | [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md) |
| [presupposition](#presupposition) | what a use takes for granted: $S$ presupposes $P$ when $P$ is true wherever $S$ is true or false, so if $P$ fails $S$ has no value; Strawson's word from 1952 (in 1950, a special sense of "imply") | [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md) |
| significant (Strawson) | having a meaning: there are rules for using the sentence to say something true or false; "the king of France is wise" is significant | [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md) |
| [entailment](#entailment) | $S$ entails $P$ when $P$ is true in every situation in which $S$ is true | [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md) |
| [presupposition tests](#presupposition-tests), negation test | a presupposition survives embedding (under "not", in the question form), where an entailment does not | [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md) |
| [referential and attributive use](#referential-and-attributive-use) | Donnellan (1966): attributive, about whoever is the $F$; referential, a tool for picking out the person meant, who need not be $F$ | [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md) |
| [speaker's reference and semantic reference](#speakers-reference-and-semantic-reference) | Kripke (1977): the language's conventions fix the semantic referent; the speaker's referent is what she wishes to talk about and believes to be the semantic referent | [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md) |
| [Russell language](#russell-language) | a language stipulated to obey Russell's theory; Kripke's test of whether referential uses refute it | [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md) |
| amended statement | Strawson (1954): where the intended reference is clear, the statement assessed after correcting the description to the speaker's guessed intention; the original gets no value | [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md) |
| [pragmatic presupposition](#pragmatic-presupposition), common ground | Stalnaker: what a speaker treats as common ground; it can fail without any truth-value gap | [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md) |
| [conversational implicature](#conversational-implicature), implicature | what a speaker means beyond what she says, worked out from the presumption that she is cooperating; cancellable, unlike an entailment or a presupposition (taught in [4.4](lessons/04-04-speaker-meaning-and-implicature.md)) | [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md) |
| [possible world](#possible-world) | a point of evaluation: in Module 2 a node of a graph, labelled with the atoms true there; what worlds are is [`metaphysics` 3.2](../metaphysics/lessons/03-02-what-possible-worlds-are.md)'s question | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| "$w$ sees $v$", $wRv$ | $v$ is accessible from $w$: possible relative to it | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [strict implication](#strict-implication), material implication | C. I. Lewis (1918): $p$ strictly implies $q$ when $p$ together with not-$q$ is impossible, $\Box(p \to q)$; material implication is the truth-functional $p \to q$ | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [Kripke frame](#kripke-frame) | $\langle W, R\rangle$: a nonempty set $W$ of worlds with an accessibility relation $R$ | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [accessibility relation](#accessibility-relation) | $R \subseteq W \times W$, which worlds count as possible from which; K assumes nothing about it | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [Kripke model](#kripke-model), valuation $V$ | $\langle W, R, V\rangle$: a frame plus a valuation $V$ giving each atom the set of worlds where it is true | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [truth at a world](#truth-at-a-world) | $\mathcal M, w \models \varphi$: $\Box\varphi$ is true at $w$ when $\varphi$ is true at every world $w$ sees, $\Diamond\varphi$ when at some | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| true in a model | true at every world of the model; weaker than valid on its frame | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [valid on a frame](#validity-on-a-frame), valid on a class of frames | true at every world of every model on the frame, whatever the valuation; valid on each frame of the class | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [system K](#system-k) | tautologies, the K axiom, modus ponens and necessitation: exactly the formulas valid on every frame | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [K axiom](#k-axiom) | $\Box(\varphi \to \psi) \to (\Box\varphi \to \Box\psi)$: necessity is closed under modus ponens; valid on every frame, dead ends included | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [necessitation rule](#necessitation-rule) | if $\varphi$ is a theorem, so is $\Box\varphi$; it takes "valid" to "valid", never "true here" to "necessary here" | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [duality](#modal-duality) | $\Diamond\varphi \leftrightarrow \neg\Box\neg\varphi$: possibly is not-necessarily-not, as $\exists$ is not-every-not | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [soundness and completeness](#soundness-and-completeness) | a system is sound and complete for a class of frames when its theorems are exactly the formulas valid on every frame in the class; soundness is proved in the course, completeness only cited (K in 2.1; T, B, S4, S5 in [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md)) | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [axiom T](#axiom-t) | $\Box p \to p$, what is necessary is true; valid exactly on reflexive frames ([2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md)) | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [logical omniscience](#logical-omniscience) | a box read as knowledge and closed under K and necessitation knows every tautology and whatever follows from what it knows | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| impossible worlds, non-normal worlds | worlds at which K can fail (Rantala 1975, Hintikka 1978); Kripke (1965) used non-normal worlds to model Lewis's S2 and S3 | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| serial | every world sees at least one world: no dead ends | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| universal frame | every world sees every world: the tacit frame of the library's earlier modal lessons, an S5 frame | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [dead-end world](#dead-end-world) | a world that sees nothing: every box is vacuously true there, every diamond false | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| partial correctness | a Hoare triple read as a box over a program's final states, so a loop that never halts satisfies every postcondition | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [deontic logic](#deontic-logic), $O$ and $P$ | $\Box$ read as "it ought to be that" ($O$), $\Diamond$ as "it may be that" ($P$), over worlds where every obligation is met (von Wright 1951; set out in [2.3](lessons/02-03-which-logic-for-which-modality.md)) | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| standard deontic logic (SDL) | K plus D; T fails, since obligations go unmet | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [axiom D](#axiom-d) | $\Box p \to \Diamond p$; valid exactly on serial frames; for "ought", ought implies may, not ought implies can | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| deontic explosion | in K, conflicting obligations $\Box p \land \Box\neg p$ give $\Box q$ for every $q$ | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [epistemic logic](#epistemic-logic), $K$ | $\Box$ read as "the agent knows that" ($K$), over the worlds she cannot rule out; T holds because knowledge is factive (set out in [2.3](lessons/02-03-which-logic-for-which-modality.md)) | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [metaphysical necessity](#metaphysical-necessity) | truth at every way things could have been ([`metaphysics` 3.1](../metaphysics/lessons/03-01-kinds-of-necessity.md)); its usual logic is S5 ([2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.3](lessons/02-03-which-logic-for-which-modality.md)) | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| [frame conditions](#frame-conditions) | properties of $R$: reflexive ($wRw$), serial, symmetric, transitive, Euclidean | [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md) |
| Euclidean | any two worlds seen from a common world see each other; without reflexivity, not the same as an equivalence relation | [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md) |
| [frame correspondence](#frame-correspondence) | an axiom is valid on a frame exactly when $R$ has a given property: T reflexive, D serial, 4 transitive, B symmetric, 5 Euclidean | [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md) |
| [axiom 4](#axiom-4) | $\Box p \to \Box\Box p$, what is necessary is necessarily necessary; transitive frames | [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md) |
| [axiom B](#axiom-b) | $p \to \Box\Diamond p$, what is true is necessarily possible; symmetric frames; named for Brouwer | [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md) |
| [axiom 5](#axiom-5) | $\Diamond p \to \Box\Diamond p$, what is possible is necessarily possible; Euclidean frames | [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md) |
| [system T](#system-t) (also M) | K plus T; complete for reflexive frames (Feys 1937; von Wright's M) | [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md) |
| [system B](#system-b) | K plus T and B; complete for reflexive symmetric frames | [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md) |
| [S4](#system-s4) | K plus T and 4; complete for reflexive transitive frames (preorders); Lewis and Langford 1932 | [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md) |
| [S5](#system-s5) | K plus T and 5 (equivalently T, B and 4); complete for equivalence frames, which validate the same formulas as universal ones | [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md) |
| equivalence frame | $R$ reflexive, symmetric and transitive: it partitions $W$ into classes $[w]$, inside which every world sees every world | [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md) |
| map of systems | K to D to T; T to B and T to S4; B and S4 to S5; B and S4 are incomparable | [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md) |
| [tolerance argument](#tolerance-argument) | Chandler (1976), taken up by Salmon: small differences in an artefact's origin are each possible, but chained they reach an impossible one, so accessibility is not transitive and 4 fails (set out in [2.3](lessons/02-03-which-logic-for-which-modality.md)) | [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md) |
| range of a box | the worlds a box at $w$ quantifies over: those $w$ sees | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| [modal reduction laws](#modal-reduction-laws), modalities | laws collapsing strings of $\neg$, $\Box$, $\Diamond$ before $p$: S4 leaves fourteen distinct modalities (Parry 1939), S5 six | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| KD45 | K plus D, 4 and 5: serial, transitive, Euclidean frames; the usual logic of belief, in which the S5 reduction laws already hold | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| [ought implies can](#ought-implies-can) | Kant's $Op \to \Diamond p$; needs a second, alethic operator beside $O$ | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| [normal modal logic](#normal-modal-logic), normal box | a logic containing K and closed under necessitation; every normal box is closed under logical consequence | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| [Ross's paradox](#rosss-paradox) | in any normal deontic logic $Om \to O(m \lor b)$: if you ought to post the letter, you ought to post it or burn it (Alf Ross 1941) | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| [positive introspection](#positive-introspection), KK principle | axiom 4 read as knowledge, $Kp \to KKp$; Hintikka accepted it, Williamson's margin-for-error argument rejects it | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| [negative introspection](#negative-introspection) | axiom 5 read as knowledge, $\neg Kp \to K\neg Kp$; Hintikka rejected it | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| indistinguishability reading | $R$ links worlds where the agent has the same evidence: an equivalence relation, so knowledge is S5 | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| good case, bad case | a case where the agent knows $p$, and one that looks the same from inside where $p$ is false | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| [provability logic](#provability-logic), GL | $\Box\varphi$ read as $\operatorname{Prov}_{\mathsf{PA}}(\ulcorner\varphi\urcorner)$; GL is K plus Löb's axiom, complete for transitive frames with no infinite forward chain (Segerberg 1971) and for PA's provability (Solovay 1976) | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| derivability conditions | necessitation, K and 4 for a provability predicate, in Löb's 1955 form | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| [Löb's theorem](#lobs-theorem), Löb's axiom | $\Box(\Box p \to p) \to \Box p$: if PA proves "if $\varphi$ is provable then $\varphi$", it proves $\varphi$; with it T cannot be added | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| agglomeration | $Np \land Nq \to N(p \land q)$; [`metaphysics` 6.1](../metaphysics/lessons/06-01-determinism-and-the-consequence-argument.md)'s transfer operator $N$ fails it, so is not normal | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| neighbourhood semantics | an alternative semantics for boxes that are not normal; it loses frame correspondence | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| [quantified modal logic](#quantified-modal-logic), quantified Kripke model | $\langle W, R, D, V\rangle$: a domain $D(w)$ for each world and an extension $V(F, w)$ for each predicate at each world | [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md) |
| domain $D(w)$, $U$ | the things that exist at $w$; $U$ is the union of all domains, into which assignments send variables | [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md) |
| [actualist quantifier](#actualist-quantifier), possibilist quantifier | "everything" said at $w$ ranges over $D(w)$; a possibilist quantifier ranges over $U$ at every world | [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md) |
| [serious actualism](#serious-actualism) | Plantinga: nothing has a property at a world where it does not exist, $V(F, w) \subseteq D(w)$ (2.4's convention (i)) | [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md) |
| [existence predicate](#existence-predicate) | $Ex := \exists y\,(y = x)$ | [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md) |
| [constant, increasing, decreasing domains](#constant-and-varying-domains) | one domain at every world; no departures along $R$ ($D(w) \subseteq D(v)$ when $wRv$); no newcomers along $R$ ($D(v) \subseteq D(w)$); varying domains are any others | [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md) |
| [Barcan formula](#barcan-formula) (BF) | $\Diamond\exists x\,\varphi \to \exists x\,\Diamond\varphi$, or $\forall x\,\Box\varphi \to \Box\forall x\,\varphi$: whatever could be $\varphi$ is something that could be; valid exactly when domains never grow (Barcan 1946; Prior's name, 1956) | [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md) |
| [converse Barcan formula](#converse-barcan-formula) (CBF) | $\exists x\,\Diamond\varphi \to \Diamond\exists x\,\varphi$, or $\Box\forall x\,\varphi \to \forall x\,\Box\varphi$; valid exactly when domains never shrink; under serious actualism the diamond form with atomic $F$ is trivially true, so failures need the box form | [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md) |
| UI with a free variable | universal instantiation $\forall x\,\varphi \to \varphi$ with $x$ left free: line 1 of Prior's derivation of BF, which the contingentist rejects inside modal contexts | [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md) |
| [necessitism and contingentism](#necessitism-and-contingentism) | necessarily, everything is necessarily something, $\Box\forall x\,\Box\exists y\,(y = x)$ (Williamson 2013); contingentism denies it | [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md) |
| contingently non-concrete | Williamson: not concrete, but could have been (the necessitist's merely possible sister) | [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md) |
| system Q | Prior's (1957) contingentist logic, which restricts necessitation | [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md) |
| strong and weak (de re) necessity | $\Box Fx$, $F$ at every accessible world, against $\Box(Ex \to Fx)$, $F$ at every accessible world where $x$ exists; $\Box\forall x\,Fx \to \forall x\,\Box(Ex \to Fx)$ is valid on every frame | [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md) |
| origin essentialism | nothing could have had a different origin, such as other parents; disputed ([`metaphysics` 2.4](../metaphysics/lessons/02-04-essence-and-grounding.md)) | [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md) |
| [rigid designator](#rigid-designator) | a term that designates the same object at every world where that object exists, and never any other object; not a claim that the object exists necessarily (defined in [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md)) | [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md) |
| [de re and de dicto](#de-re-and-de-dicto) | de re: about a thing however named, a variable inside a box bound from outside it; de dicto: every box governs a closed sentence, about a proposition | [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md) |
| [Aristotelian essentialism](#aristotelian-essentialism) | Quine's label: an object, however specified, has some traits necessarily and others contingently, $\exists x\,(\Box Fx \land Gx \land \neg\Box Gx)$ | [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md) |
| [mathematical cyclist](#mathematical-cyclist) | Quine's case (*Word and Object*, 1960): of a man who is both mathematician and cyclist, is he necessarily rational? No answer apart from a way of picking him out | [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md) |
| [Smullyan's reply](#smullyans-reply) | Smullyan (1948): "the number of planets" is a description and takes scope; names substitute inside a box, descriptions only on the wide reading | [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md) |
| [necessity of identity](#necessity-of-identity) | whatever is identical is necessarily identical, $\forall x\,\forall y\,(x = y \to \Box\,x = y)$; derived from Leibniz's law on every frame (Barcan 1947; Kripke 1971) | [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md) |
| [counterpart theory](#counterpart-theory), counterpart, counterpart translation | Lewis (1968): each thing is in one world; a counterpart is something in another world that represents it there; $a$ is necessarily $F$ iff every counterpart of $a$ in every world is $F$ | [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md) |
| inconstant modal predicates | Lewis's cost: a modal predicate stands for different properties depending on the term it attaches to | [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md) |
| [contingent identity](#contingent-identity) | identity true at one world and false at another: Gibbard's (1975) statue Goliath and its clay Lumpl | [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md) |
| [necessity of the consequence and of the consequent](#necessity-of-the-consequence) | the scholastic $\Box(p \to q)$ against $p \to \Box q$: a scope distinction drawable without quantifiers, unlike Quine's de re | [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md) |
| [descriptivism](#descriptivism) | a proper name is a description in disguise: it means a description and refers to whatever fits it | [3.1](lessons/03-01-against-descriptivism.md) |
| classical descriptivism | one description per name (Frege's sense as his "Aristotle" footnote gives it; Russell's disguised descriptions); a one-member cluster | [3.1](lessons/03-01-against-descriptivism.md) |
| [cluster theory](#cluster-theory) | a name refers to whatever satisfies most, or a weighted most, of a bundle of descriptions (Searle 1958; Strawson 1959) | [3.1](lessons/03-01-against-descriptivism.md) |
| D1-D6, the vote | Kripke's theses for the cluster theory: the properties a speaker associates with a name vote, the unique object satisfying most of them is the referent (D3), and no unique winner means no referent (D4); D5 and D6 add that the speaker knows this a priori and that it is necessary | [3.1](lessons/03-01-against-descriptivism.md) |
| non-circularity condition (C) | the properties in the cluster may not themselves presuppose the name's reference: no "the man called $X$", and no description that borrows its referent from other speakers' use of the name | [3.1](lessons/03-01-against-descriptivism.md) |
| [modal argument](#modal-argument) | against D6: "Aristotle might not have taught Alexander" is true, while the description read inside "might" cannot fail to fit; the three arguments' names are the later literature's | [3.1](lessons/03-01-against-descriptivism.md) |
| [epistemic argument](#epistemic-argument) | against D5: "if Gödel existed, he proved incompleteness" is not knowable a priori by whoever understands the name | [3.1](lessons/03-01-against-descriptivism.md) |
| [semantic argument](#semantic-argument) | against D2-D4 and (C): Feynman, Gödel and Schmidt, Jonah and Einstein show that what a speaker believes does not settle whom the name picks out | [3.1](lessons/03-01-against-descriptivism.md) |
| error case | a speaker's descriptions are true of someone other than the bearer, as when the vote goes to Schmidt and "Gödel" still names Gödel | [3.1](lessons/03-01-against-descriptivism.md) |
| [fixing reference and giving meaning](#fixing-reference-and-giving-meaning) | a description can select a name's bearer without being its meaning: "Jack the Ripper", "Julius" | [3.1](lessons/03-01-against-descriptivism.md) |
| [wide-scope descriptivism](#wide-scope-descriptivism) | names are descriptions that always take wide scope over "might" (Dummett 1973; Sosa 2001) | [3.1](lessons/03-01-against-descriptivism.md) |
| [rigidified description](#rigidified-description), "actually" | "the actual $F$", where "actually" evaluates its clause at the actual world $w_0$ wherever it is embedded; Plantinga's world-indexed properties; defended by Nelson (2002) | [3.1](lessons/03-01-against-descriptivism.md) |
| [causal descriptivism](#causal-descriptivism) | the description is "whoever stands at the origin of my chain of uses of this name" (so named by Lewis 1984; Kroon, Jackson) | [3.1](lessons/03-01-against-descriptivism.md) |
| assertoric content | what a sentence asserts, as against what it contributes when embedded under "might" (Dummett; developed by Stanley 1997) | [3.1](lessons/03-01-against-descriptivism.md) |
| [causal-historical theory](#causal-historical-theory), causal picture | a use of a name refers to whatever was baptized at the origin of the chain of borrowings that leads to it; Kripke's "picture", not a theory with necessary and sufficient conditions | [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md) |
| [non-connotative name](#connotative-and-non-connotative-names) | Mill: a proper name denotes its bearer and connotes no attribute | [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md) |
| connotative individual name | Mill: a name that applies to one individual because of an attribute it signifies ("the father of Socrates") | [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md) |
| designation at a world, $d_w(t)$ | the object a term $t$ designates when we use it to describe world $w$ (possibly none) | [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md) |
| [persistent and obstinate rigidity](#persistent-and-obstinate-rigidity) | Salmon (1981): persistent, designating $o$ at every world where $o$ exists and nothing elsewhere; obstinate, designating $o$ at every world, existing there or not; Kripke wrote both ways | [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md) |
| strongly rigid | Kripke: a rigid designator of a necessary existent; never a name for obstinate rigidity | [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md) |
| [de jure and de facto rigidity](#de-jure-and-de-facto-rigidity) | rigid because the term's semantics stipulates it (names, "actual" descriptions), or because the same object meets a description's condition at every world ("the smallest prime") | [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md) |
| [initial baptism](#initial-baptism) | introducing a name by fixing its bearer, by pointing or by a description that fixes the reference without giving a synonym | [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md) |
| [reference-borrowing](#reference-borrowing) | a later speaker refers with a name she picked up if she intends to use it with the same reference as her source | [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md) |
| [Madagascar case](#madagascar-case), reference shift | Evans (1973): the name passed from part of the African mainland to the island, though every link meant to keep the reference | [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md) |
| dominant causal source | Evans: a name refers to the dominant causal source of the body of information speakers associate with it | [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md) |
| override, new-name reply | Kripke's addenda: a present intention to refer to a thing can beat the intention to preserve reference; or Marco Polo started a second name spelled like the first | [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md) |
| [qua problem](#qua-problem) | the same causal facts attach "Biscuit" to a cat, its fur or its species, so what selects the target? (discussed under that name by Devitt and Sterelny 1987) | [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md) |
| [necessary a posteriori](#necessary-a-posteriori) | true at every possible world and knowable only by experience: "Hesperus is Phosphorus", "water is H2O" | [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| [contingent a priori](#contingent-a-priori) | false at some world yet knowable without experience: "S is one metre long at $t_0$", or a truth fixed by Evans's "Julius" | [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| [weak necessity (of identity)](#strong-and-weak-necessity-of-identity) | $\Box(\exists x\,(x = a) \to a = b)$: the identity holds at every world where its object exists; what persistent rigidity, or varying domains with existence-entailing semantics, leaves | [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| outer-domain and existence-entailing semantics | whether an identity about an object absent from a world is true there (outer-domain) or false (existence-entailing) | [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| [Twin Earth](#twin-earth) | Putnam (1975): Oscar and his duplicate share a psychological state, yet "water" picks out H2O for one and XYZ for the other, so what is in the head does not fix meaning | [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| [natural-kind term](#natural-kind-term), indexical kind term | a general term for a kind with a hidden nature (water, gold, elm); for Putnam indexical: "water" applies to whatever is the same liquid as this sample | [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| [division of linguistic labor](#division-of-linguistic-labor) | experts settle what lay speakers' kind words apply to: Putnam's "elm" and "beech" differ in extension though his concepts do not | [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| [Putnam's brain-in-a-vat argument](#putnams-brain-in-a-vat-argument) | a lifelong vat-brain's "vat" refers to vat-images or electronic impulses, so in its mouth "I am a brain in a vat" is false (1981) | [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| [two-dimensional semantics](#two-dimensional-semantics), matrix | rows are worlds considered as actual, columns worlds considered as counterfactual; a cell is the truth value at the column world of what the sentence says if the row world is actual | [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| [primary and secondary intension](#primary-and-secondary-intension), A- and C-intension | primary: what an expression picks out at a world if that world turns out actual (the diagonal; Jackson's A-intension); secondary: what, given its actual referent, it picks out at a counterfactual world (the actual row; C-intension) | [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| Core Thesis | Chalmers (2004): a sentence is a priori iff its primary intension is true at every scenario | [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| [diagonal proposition](#diagonal-proposition) | Stalnaker: the proposition read down the matrix's diagonal, what an assertion conveys when hearers do not know which row they are in; on his metasemantic reading a reinterpretation, not a meaning | [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| singular proposition | a proposition that contains an individual itself, not a description of it | [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| [character and content](#character-and-content) | Kaplan: character is the rule taking a context to what is said ("I": whoever is speaking); content is what is said at a context, a function from worlds to extensions | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| context, circumstance of evaluation | a context is the agent, time, location and world of a use, $c = \langle a_c, t_c, l_c, w_c\rangle$; a circumstance is the world (for Kaplan, time and world) at which a content is checked | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| [indexical](#indexical) | an expression whose content varies with the context of use: "I", "here", "now", "that" | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| [direct reference](#direct-reference) | an expression's content is its referent, not a condition the referent meets; so within a context it is rigid | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| pure indexical, true demonstrative | "I", "here", "now", "today" get their referent from the rule alone; "that", "he" also need a pointing or an intention | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| [logic of demonstratives](#logic-of-demonstratives), proper context | a sentence is valid iff true at every proper context (its agent at its location at its time in its world): "I am here now" is valid, not necessary | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| [gradable adjective](#gradable-adjective) | an adjective such as "tall" or "flat" whose standard comes from the conversation; contextualists' model for "knows" | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| token-reflexive analysis | Reichenbach (1947): "I" means "the speaker of this token"; Kaplan rejected it as neither rigid nor directly referential | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| [essential indexical](#essential-indexical), belief state | Perry (1979): the belief state ("I am making a mess") explains action; what is believed is a content anyone could believe of Perry | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| BEL | Salmon's three-place belief relation: $A$ believes $p$ iff $A$ grasps $p$ by some guise $g$ and $\mathrm{BEL}(A, p, g)$ | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| [hidden-indexical theory](#hidden-indexical-theory) | Crimmins and Perry (1989): a belief report also concerns a way of thinking that the context supplies though no word names it | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| [calculability](#calculability) | an implicature can be worked out from what is said, the maxims and the context (taught in [4.4](lessons/04-04-speaker-meaning-and-implicature.md)) | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| [Kripke's puzzle about belief](#kripkes-puzzle-about-belief), Pierre | Pierre assents to "Londres est jolie" and to "London is not pretty": a contradiction from disquotation and translation alone, with no names swapped (1979) | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| [disquotation and translation principles](#disquotation-and-translation-principles) | disquotation: sincere, reflective assent shows belief; converse disquotation: sincere dissent shows non-belief; translation: a good translation of a truth is a truth | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| rationality principle | believing a proposition and its negation is irrational; Salmon weakens it to believing both under one guise | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| Paderewski case | Peter takes the pianist and the statesman Paderewski for two men: Kripke's puzzle without translation | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| context of assessment | MacFarlane's, owned by [`epistemology` 3.4](../epistemology/lessons/03-04-contextualism-and-its-rivals.md); this course uses only the context of utterance | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| [learnability](#learnability) | a language with infinitely many sentences can be learned only if finitely many words and rules settle the meanings of all of them (Davidson 1965) | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| [T-sentence](#t-sentence) | "$s$ is true iff $p$": the left side mentions (quotes) an object-language sentence, the right side uses a metalanguage sentence | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| [object language, metalanguage](#object-language-and-metalanguage) | the language a theory or definition is about; the language it is stated in | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| [truth theory](#truth-theory) | finitely many axioms from which a T-sentence for every sentence of the language follows: a dictionary plus a grammar | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| [truth-conditional semantics](#truth-conditional-semantics) | the program that gives a sentence's meaning by a recursive statement of its truth conditions (Davidson 1967) | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| reference axiom, satisfaction axiom, recursive clause | an axiom saying what a name refers to; one saying which objects or pairs a predicate is true of; one giving a complex sentence's truth condition from its parts' | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| [Convention T](#convention-t) | Tarski's adequacy condition: a truth definition must entail, for every object-language sentence, a T-sentence whose right side translates the left, and must entail that only sentences of the object language are true; Davidson runs it in reverse, taking truth as understood (stated in [5.1](lessons/05-01-tarskis-theory-as-philosophy.md)) | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| [radical translation](#radical-translation) | Quine (1960): a linguist with no dictionary, whose evidence is assent and dissent under patterns of stimulation ("Gavagai") and whose product is a translation manual | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| [radical interpretation](#radical-interpretation), holding true | Davidson (1973): evidence is which sentences a speaker holds true and what in the shared world prompts her; the product is a truth theory | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| [principle of charity](#principle-of-charity) | interpret a person so as to make her largely consistent and right by the interpreter's lights; a precondition of understanding, not [`philosophical-method` 1.3](../philosophical-method/lessons/01-03-reconstruction-and-charity.md)'s norm for reconstruction | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| extensionally adequate, interpretive | every T-sentence the theory entails is true; its right sides give the meanings of its left sides | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| [Foster's problem](#fosters-problem) | Foster (1976): a truth theory with a deviant axiom can be extensionally adequate and still not interpretive | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| [Frege-Geach problem](#frege-geach-problem) | the demand for a compositional semantics that lets a sentence contribute under "if" what it says unembedded ([`ethics` 6.2](../ethics/lessons/06-02-expressivism.md)); 4.1's clause for "se ... allora" shows what meeting it looks like | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| extension problem, information problem | Larson and Segal (1995): a theory entails non-interpretive T-sentences too; knowing an interpretive T-sentence does not tell you it is the interpretive one | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| [canonical derivation](#canonical-derivation) | Davies (1981): a T-sentence reached only by unpacking clauses and substituting; the ones that count | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| [modest and full-blooded theories](#modest-and-full-blooded-theories) | Dummett (1975): a modest theory conveys meanings only to someone who already has the concepts its metalanguage expresses; a full-blooded one says what having them consists in | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| [language game](#language-game) | a stretch of language with the activities it is woven into (*Investigations* §23), such as the builders' game (§2) | [4.2](lessons/04-02-meaning-as-use.md) |
| [form of life](#form-of-life) | the activity speaking is part of (§23); readers divide between a culture's contingent way of living and behaviour all humans share; wider than one practice | [4.2](lessons/04-02-meaning-as-use.md) |
| [Augustinian picture](#augustinian-picture) | every word names an object, the object is its meaning, and sentences combine names (*Investigations* §1); Wittgenstein's label | [4.2](lessons/04-02-meaning-as-use.md) |
| [meaning as use](#meaning-as-use) | for a large class of cases, though not all, to say what a word means is to describe its use (§43) | [4.2](lessons/04-02-meaning-as-use.md) |
| [inferentialism](#inferentialism), inferential role | Brandom: a sentence's content is its inferential role, what entitles you to assert it and what asserting it commits you to; truth comes after | [4.2](lessons/04-02-meaning-as-use.md) |
| [ostensive definition](#ostensive-definition) | teaching a word by pointing; it works only where the word's place in a practice is already prepared (§§31-32) | [4.2](lessons/04-02-meaning-as-use.md) |
| [family resemblance](#family-resemblance) | overlapping, criss-crossing similarities with no common core (§§65-67); as a claim about meaning, understanding a general term is not grasping a definition | [4.2](lessons/04-02-meaning-as-use.md) |
| [private language argument](#private-language-argument), private language | a language whose words refer to what only its speaker can know, his private sensations (§243), not a personal code; the argument (§§243-315; Wittgenstein never called it one) says such a language is impossible | [4.2](lessons/04-02-meaning-as-use.md) |
| beetle in the box | §293's image: if each kept a "beetle" no one else could see, the thing in the box would drop out of the word's use | [4.2](lessons/04-02-meaning-as-use.md) |
| material inference | an inference good in virtue of content, not logical form ("red, so coloured") | [4.2](lessons/04-02-meaning-as-use.md) |
| commitment, entitlement | Brandom's two normative statuses: asserting undertakes a commitment to defend the claim and licenses hearers to rely on it; speakers keep score of both | [4.2](lessons/04-02-meaning-as-use.md) |
| compliance conditions | what must be done for an order to be obeyed: what a truth theorist can add for "stet" and "dele" | [4.2](lessons/04-02-meaning-as-use.md) |
| [tonk](#tonk) | Prior (1960): a connective with an introduction like disjunction's and an elimination like conjunction's, so from any $A$ follows any $B$ | [4.2](lessons/04-02-meaning-as-use.md) |
| introduction rule, elimination rule | the natural-deduction rule that builds a compound, and the one that uses it ([`mathematical-logic` 1.4](../mathematical-logic/lessons/01-04-proof-system-completeness.md)) | [4.2](lessons/04-02-meaning-as-use.md) |
| [conservative extension](#conservative-extension) | new rules or axioms that yield nothing new among sentences of the old vocabulary; Belnap's (1962) reply to tonk | [4.2](lessons/04-02-meaning-as-use.md) |
| [harmony](#harmony), inversion principle | an elimination may draw out only what the introductions put in, so an introduction followed at once by an elimination is a removable detour (Gentzen; Prawitz 1965; Dummett's term, 1973) | [4.2](lessons/04-02-meaning-as-use.md) |
| [quus](#quus), $\oplus$ | Kripke's deviant function: $x \oplus y = x + y$ if $x, y < 57$, and $5$ otherwise; it agrees with plus on every sum the speaker has done | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| [sceptical challenge](#sceptical-challenge) | find one fact that both constitutes your meaning plus rather than quus and justifies answering 125, settling what you ought to answer, not predicting what you will | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| constitution and justification conditions | K1 and K2: the meaning fact must make it the case that you meant plus, and must show what you are justified in answering in each new case | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| [sceptical solution](#sceptical-solution) | concede that no fact constitutes meaning, drop classical realism, and explain meaning-talk by its assertability conditions and its role in a community; named after Hume's *Enquiry* §V | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| [Kripke's Wittgenstein](#kripkes-wittgenstein), "Kripkenstein" | the author of the argument as it struck Kripke (1982), who endorses neither it nor the solution; "Kripkenstein" is commentators' shorthand | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| [rule-following paradox](#rule-following-paradox) | *Investigations* §201, paraphrased: if any way of going on can be made to fit a rule, any can be made to clash with it, so no rule fixes what to do | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| [classical realism about meaning](#classical-realism-about-meaning) | Kripke's label: "Jones means plus" is true only if a meaning fact obtains (K6) | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| basic and radical sceptical conclusions | George Wilson's names: no fact constitutes anyone's meaning (C1); no one means anything by any word (C2) | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| [dispositionalism about meaning](#dispositionalism-about-meaning) | what you mean is fixed by what you would answer; it faces the finitude and error problems and fails K2 (run in [`philosophy-of-mind` 5.2](../philosophy-of-mind/lessons/05-02-is-the-intellect-a-bodily-power.md)) | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| [assertability conditions](#assertability-conditions) | when a form of words may be asserted: "Jones means plus" when his answers agree with ours in enough cases and his mistakes resemble ours (commentators often spell it "assertibility") | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| non-factualism, incoherence charge | the usual reading of the sceptical solution: meaning ascriptions state no facts; Boghossian (1989) and others: giving a sentence a non-fact-stating job presupposes a fact about which correctness condition governs it | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| [meaning primitivism](#meaning-primitivism) | meaning or understanding is an irreducible state or ability, not reducible to anything the sceptic searched (McGinn 1984; Boghossian places it in mental content) | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| [normativity of meaning](#normativity-of-meaning), anti-normativism | K2's thesis: meaning something by a word sets how one ought to use it; anti-normativists (Hattiangadi 2006; Glüer and Wikforss 2009) reply that "correct" only sorts uses into true and false | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| grasp without interpretation | McDowell (1984): one can grasp a rule without interpreting it, the grasp showing in how one follows or breaks it; so no sceptical solution is needed | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| community-wide error | Blackburn (1984): a community's dispositions are as finite as one person's, so for the group seeming right and being right coincide | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| natural meaning | meaning that cannot be false: spots mean measles ([`philosophy-of-mind` 4.2](../philosophy-of-mind/lessons/04-02-naturalizing-content.md)) | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [non-natural meaning](#non-natural-meaning) | Grice's (1957) term for what a person means, which rests on intention and can be false | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [speaker meaning](#speaker-meaning) | $S$ means that $p$ by uttering $x$ to $A$ iff she intends $A$ to believe $p$, to recognize that intention, and to believe $p$ partly for that reason (Grice 1957, in Strawson's 1964 three clauses); Schiffer (1972) required the intentions to be mutually known | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [what is said and what is implicated](#what-is-said-and-what-is-implicated) | what is said is what the sentence means in its context, with reference fixed; what is implicated is what the speaker means beyond it | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [conventional implicature](#conventional-implicature) | implicature fixed by word meaning ("but", "therefore"): not calculable, not cancellable, lost when "and" is swapped in | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [cooperative principle](#cooperative-principle) | make your contribution what the accepted purpose of the exchange requires at the stage it occurs (Grice 1967, published 1975) | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [maxims](#maxims-of-conversation) | Quantity (as informative as required, not more), Quality (only what you believe true and have evidence for), Relation (be relevant), Manner (be perspicuous) | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| violate, opt out, clash | fail a maxim quietly, perhaps misleading; openly decline to cooperate; be unable to keep one maxim without breaking another | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [flout](#flouting) | fail a maxim so blatantly that the hearer must look for another meaning; meant to be noticed, so cooperation is still presumed | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [cancellability](#cancellability) | an implicature can be withdrawn by adding "but not $q$" without contradiction; it tests only unembedded triggers | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [generalized and particularized implicature](#generalized-and-particularized-implicature) | carried by a form of words unless something blocks it ("some", so not all); needs a special context | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [scalar implicature](#scalar-implicature), Horn scale | words ordered by strength, $\langle$all, most, some$\rangle$; saying a weaker one implicates, by Quantity, the denial of the stronger (Horn 1972) | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [downward-entailing context](#downward-entailing-context) | a position, such as under negation, where entailments reverse and scalar implicatures go | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [speech act](#speech-act) | an act performed in speaking (Austin 1962) | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [performative utterance](#performative-utterance), misfire, abuse | an utterance that does rather than describes ("I bet you"); it fails without being false, by misfiring (nothing is done) or as an abuse (done insincerely) | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| locutionary, illocutionary, perlocutionary act | saying something with a meaning; what you do in saying it; what you bring about by saying it | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [illocutionary force](#illocutionary-force) | the kind of act an utterance is: warning, promising, ordering; Searle (1975) sorts illocutions into assertives, directives, commissives, expressives and declarations | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| Grice's razor | other things equal, posit an implicature rather than a new sense of a word | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [lying and misleading](#lying-and-misleading) | a lie asserts against one's mind, a quiet violation of Quality in what is said; misleading says something true and implicates something false | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [symmetry problem](#symmetry-problem) | the Quantity reasoning from "some" to "not all" runs as well from "several", yet nobody implicates "not several" (pressed since Kroch 1972) | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [relevance implicature](#relevance-implicature) | conveyed because the remark is relevant only if it holds: the pharmacy reply, Grice's garage round the corner | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| [analytic and synthetic](#analytic-and-synthetic) | analytic: true in virtue of meaning alone (Kant's containment, Frege's provability from logic plus definitions, Carnap's truth by a language's rules); synthetic: not analytic | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| [analyticity](#analyticity) | being analytic; in 4.5 the semantic notion whose good order Quine disputes | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| *Berechtigung* | Frege's "justification" for making a judgment (*Grundlagen* §3), which is what analytic and synthetic, a priori and a posteriori classify | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| [state description](#state-description) | an assignment of T or F to every atomic sentence of a language: Carnap's stand-in for a possible world | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| L-true | true in every state description (Carnap 1947) | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| [meaning postulate](#meaning-postulate), analytic in $L$ | a sentence adopted as a rule of the language; $S$ is analytic in $L$ iff true in every state description in which all the postulates are true (Carnap 1952, after "Two Dogmas") | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| Quine's second class | sentences that become logical truths by putting synonyms for synonyms ("No bachelor is married") | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| [circle of synonymy](#circle-of-synonymy) | Quine (1951, §§1-4): definition, interchangeability *salva veritate* and semantical rules each explain analyticity only by a notion that presupposes it, a "closed curve in space" | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| cognitive synonymy | the sameness of meaning that turns a second-class analytic truth into a logical truth | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| explication | Carnap's improving a word already in use; on Quine's account it rests on prior synonymies | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| extensional language | one in which coextensive predicates are interchangeable *salva veritate*, so interchangeability yields only coextension ("creature with a heart", "creature with a kidney") | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| analytic-for-$L_0$ | what a list of semantical rules defines, for one language; Quine: it explains neither "analytic for $L$" with $L$ variable nor why a listed sentence is analytic | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| [two dogmas](#two-dogmas) | Quine (1951): the analytic-synthetic distinction and reductionism, "at root identical" | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| verification theory of meaning | two statements are synonymous iff alike in method of empirical confirmation; an analytic statement is confirmed no matter what | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| reductionism (the second dogma) | each statement, taken alone, has its own range of confirming and disconfirming experiences | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| confirmation holism, "corporate body" | statements about the external world face experience together, not singly | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| [revisability of logic](#revisability-of-logic) | no statement is immune to revision, logic included (Quine's example: revising excluded middle for quantum mechanics) | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| [web of belief](#web-of-belief) | the title of Quine and Ullian's 1970 book; the 1951 images are a "man-made fabric" and a "field of force" | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| [one-criterion and law-cluster terms](#one-criterion-and-law-cluster-terms) | Putnam (1962): words like "bachelor" admit a trivial analytic-synthetic line; terms like "energy", which no single law defines, do not | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| [epistemic and metaphysical analyticity](#epistemic-and-metaphysical-analyticity) | Boghossian (1996): metaphysical, a sentence's meaning makes it true (he gives it up); epistemic, understanding it suffices to justify believing it (he keeps it) | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| [implicit definition](#implicit-definition) | fixing part of a word's meaning by stipulating that certain sentences containing it are true: "taller than" is transitive | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| [understanding-assent link](#understanding-assent-link) | the claim that whoever understands a sentence such as "Every vixen is a vixen" assents to it; Williamson's (2007) Peter and Stephen understand it and reject it | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| [Tarski's theory of truth](#tarskis-theory-of-truth) | a definition of truth for a formalized language, by recursion through satisfaction, stated in a stronger metalanguage, formally correct and provably meeting Convention T (Polish 1933, German 1935, English 1956) | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| [material adequacy](#material-adequacy) | a truth definition's provably yielding every T-sentence and counting nothing but object-language sentences true: meeting Convention T | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| [T-schema](#t-schema), Tarski biconditional | "$X$ is true iff $p$", with $X$ a name of a sentence and $p$ its translation into the metalanguage; its instances are the T-sentences | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| [formal correctness](#formal-correctness) | the definition is explicit, $\forall x\,(\mathrm{Tr}(x) \leftrightarrow \delta(x))$ with $\mathrm{Tr}$ absent from $\delta$, and uses no "true", "refers" or "means" | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| $\ulcorner S\urcorner$ | a name of the sentence $S$: its quotation, or in arithmetic its Gödel numeral | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| [satisfaction](#satisfaction) | the relation between an assignment and a formula, defined recursively; a sentence is true iff every assignment satisfies it | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| base clause | a clause for a name or predicate at the bottom of the recursion; in Tarski, a list | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| diagonal lemma | for a formula $\psi(x)$ with one free variable, a sentence $L$ with $\mathsf{PA} \vdash L \leftrightarrow \psi(\ulcorner L\urcorner)$ ([`mathematical-logic` 5.1](../mathematical-logic/lessons/05-01-incompleteness-first-theorem.md)) | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| [undefinability of truth](#undefinability-of-truth) | no formula $\mathrm{Tr}(x)$ of arithmetic's language satisfies $\mathcal N \models \mathrm{Tr}(\ulcorner\varphi\urcorner) \leftrightarrow \varphi$ for every sentence $\varphi$ (Tarski 1933; $\mathcal N$ the standard model); truth is definable only in a stronger metalanguage | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| [semantic closure](#semantic-closure), semantically closed | a language that names its own sentences and has a truth predicate applying to them, as English seems to | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| [liar paradox](#liar-paradox), liar sentence | "this sentence is not true": if true, it is not true, and if not true, it is true; the shape $Q \leftrightarrow \neg Q$ (theories of it in [5.3](lessons/05-03-the-liar-and-theories-of-truth.md)) | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| [Aristotle's formula](#aristotles-formula) | *Metaphysics* Γ 7, 1011b26-27 (tr. Ross): saying of what is that it is, and of what is not that it is not, is true; the "classical conception" Tarski claimed to capture | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| [correspondence theory](#correspondence-theory) | truth is a match between a belief or sentence and how things are: "a belief is true when there is a corresponding fact" (Russell 1912); Davidson and Field read Tarski's theory as its core without facts | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| [Field's objection](#fields-objection) | Field (1972): Tarski reduced truth to primitive denotation stated by lists, which gets the extension right and explains nothing, like defining valence by listing each element's number | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| [primitive denotation](#primitive-denotation) | Field's term for the base notions Tarski's definition bottoms out in: denotation of names, application of predicates, fulfilment of function symbols | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| [Tarski's hierarchy](#tarskis-hierarchy) | $L_0, L_1, L_2, \ldots$: each level adds a truth predicate for the level below, so no language contains its own | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| [deflationism](#deflationism) | the instances of the truth schema are all there is to truth, and "true" exists to generalize (taught in [5.2](lessons/05-02-deflationism.md)) | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| [Curry paradox](#curry-paradox), Curry sentence | "if I am true, then $0 = 1$" (or any claim): with the full T-schema, modus ponens and conditional proof it proves anything, using no negation (5.1 P2) | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| substantive theory of truth | one on which something makes each instance of the schema hold: correspondence, coherence, pragmatist | [5.2](lessons/05-02-deflationism.md) |
| [generalization problem](#generalization-problem), ω-incomplete | the instances of the schema prove each instance of a generalization such as "every sentence 'if $p$ then $p$' is true" but not the generalization itself (Tarski 1935; pressed by Gupta 1993) | [5.2](lessons/05-02-deflationism.md) |
| [redundancy theory](#redundancy-theory) | Ramsey (1927): "it is true that $p$" means no more than "$p$"; described propositions need a quantifier into sentence position ("for all $p$"); "redundancy" is a later label | [5.2](lessons/05-02-deflationism.md) |
| [disquotationalism](#disquotationalism), device of disquotation | Quine (1970), Field (1994): for each sentence $\varphi$ of one's own language, $\mathrm{Tr}(\ulcorner\varphi\urcorner) \leftrightarrow \varphi$; calling a sentence true cancels its quotation marks | [5.2](lessons/05-02-deflationism.md) |
| [minimalism](#minimalism-about-truth) | Horwich (1990): the theory is every instance of "the proposition that $p$ is true iff $p$", minus those that generate the liar; truth has no underlying nature | [5.2](lessons/05-02-deflationism.md) |
| [prosententialism](#prosententialism), prosentence | Grover, Camp and Belnap (1975): "that is true" works like a pronoun for a sentence, inheriting its content from an antecedent, so "true" is not a predicate in logical form | [5.2](lessons/05-02-deflationism.md) |
| [equivalence schema](#equivalence-schema) | "it is true that $p$ iff $p$", with its sides equivalent in a strong sense (same meaning, or necessarily and a priori) | [5.2](lessons/05-02-deflationism.md) |
| thin property | one whose instances hold for unrelated reasons, so there is no nature to theorize ("is on my shopping list"); the deflationist's model for truth | [5.2](lessons/05-02-deflationism.md) |
| [coherence theory of truth](#coherence-theory-of-truth) | truth is membership in one comprehensive coherent system (Joachim 1906; Blanshard) | [5.2](lessons/05-02-deflationism.md) |
| [pragmatist theory of truth](#pragmatist-theory-of-truth) | truth tied to inquiry: the opinion fated to be agreed by all who investigate (Peirce 1878), or what proves useful in the long run (James 1907) | [5.2](lessons/05-02-deflationism.md) |
| blind ascription | calling true what one cannot list: "everything the second witness said is true" | [5.2](lessons/05-02-deflationism.md) |
| compositional truth axioms | Tarski's recursive clauses taken as axioms (a conjunction is true iff both conjuncts are, and so on); conservative over PA while induction covers only formulas without $\mathrm{Tr}$ | [5.2](lessons/05-02-deflationism.md) |
| [conservativeness argument](#conservativeness-argument) | Shapiro (1998), Ketland (1999): a truth theory that proves new arithmetic is not thin; the bare schema is conservative over PA, but compositional axioms plus induction for formulas containing $\mathrm{Tr}$ prove that every theorem of PA is true, and so $\operatorname{Con}(\mathsf{PA})$ | [5.2](lessons/05-02-deflationism.md) |
| [truth-teller](#truth-teller) | "this sentence is true", the shape $Q \leftrightarrow Q$: ungrounded but not paradoxical | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| [groundedness](#groundedness), grounded | Kripke: a sentence is grounded if it has a value in the least fixed point, its value traced back to non-semantic facts | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| [dialetheism](#dialetheism), dialetheia | Priest: some contradictions are true; a dialetheia is a true contradiction, such as (on his view) the liar | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| [strengthened liar](#strengthened-liar) | "this sentence is not true", with "not true" meaning false or gappy: the liar that tests each theory | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| bivalence | every sentence is true or false: a claim about truth values in the metalanguage, not the object-language schema $\varphi \lor \neg\varphi$ (excluded middle); Kripke's gaps give it up, and supervaluation keeps excluded middle while dropping it ([5.5](lessons/05-05-supervaluationism-and-epistemicism.md)) | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| explosion | from $\varphi$ and $\neg\varphi$ infer any $\psi$ (ex falso) | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| [Strong Kleene](#strong-kleene) | values 1, $\tfrac12$, 0: $\neg$ swaps 1 and 0 and leaves $\tfrac12$, $\land$ is minimum, $\lor$ maximum, $\varphi \to \psi$ is $\neg\varphi \lor \psi$; with $\tfrac12$ marking a gap (Kleene 1952) | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| [information order](#information-order) | $\tfrac12 \sqsubseteq 0$ and $\tfrac12 \sqsubseteq 1$; every Strong Kleene connective is monotone in it: filling a gap never changes a settled value | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| extension, anti-extension | an interpretation of $\mathrm{Tr}$ is a pair $(\mathcal E, \mathcal A)$ of disjoint sets of sentences, those it is applied to and those it is denied of | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| [jump](#kripke-jump), $J$ | $J(\mathcal E, \mathcal A)$ is the pair of sentences valued 1 and valued 0 under $(\mathcal E, \mathcal A)$: re-evaluate everything with the current opinion of "true" | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| stage | an iterate of the jump from $(\varnothing, \varnothing)$, with unions at limit stages | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| [Kripke's fixed point](#kripkes-fixed-point), least fixed point | an interpretation the jump leaves unchanged; the least is reached by iterating from total ignorance, and exists by monotonicity (Kripke 1975; Martin and Woodruff 1975) | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| transparency | at every fixed point $\varphi$ and $\mathrm{Tr}(\ulcorner\varphi\urcorner)$ take the same value | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| [paradoxical sentence](#paradoxical-sentence) | Kripke: a sentence with a value in no fixed point | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| risky | Kripke: whether a statement about truth is paradoxical can depend on the empirical facts, as with Epimenides' line, so no syntactic sieve removes the paradoxes | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| [logic of paradox](#logic-of-paradox), LP | Priest (1979): the Strong Kleene tables with $\tfrac12$ read as both true and false and designated; excluded middle kept, explosion fails | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| designated value | a value that counts as true enough for validity: 1 in Strong Kleene, 1 and $\tfrac12$ in LP; degree 1 in [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md)'s degree theory | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| gap, glut | an absence of truth value ($\tfrac12$ in Strong Kleene, undesignated); being both true and false ($\tfrac12$ in LP, designated) | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| inclosure schema | Priest: the set-theoretic and semantic paradoxes share one structure and deserve one solution | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| exclusion negation | "not true" as false or gappy, sending $\tfrac12$ to 1; not monotone, so Kripke's construction cannot run with it | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| [revenge problem](#revenge-problem) | each theory meets a liar built from its own vocabulary: exclusion "not true", "not determinately true" | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| [sorites paradox](#sorites-paradox), sorites | the paradox of the heap: from a clear case, steps too small to matter lead by modus ponens to a clear non-case (Eubulides) | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| [tolerance principle](#tolerance-principle), tolerant | a change small enough cannot take a predicate from applying to not applying: $\forall n\,(T_n \to T_{n+1})$ (the name follows Wright 1975) | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| [borderline case](#borderline-case) | a case a predicate neither clearly applies to nor clearly fails to apply to | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| vague (Peirce) | a proposition is vague when for some possible states of things it is intrinsically uncertain whether the speaker would count them as excluded or allowed: indeterminacy in habits of language, not ignorance (1902) | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| conditional sorites, quantified sorites | one conditional premise per step, chained by modus ponens; one universal tolerance premise, closed by induction | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| line-drawing sorites | from a clear case and a clear non-case, classically some man is tall and the next is not | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| [degree theory](#degree-theory), degree of truth | truth comes in degrees in $[0, 1]$: tolerance steps are fully or nearly true, those across the borderline falling just short (0.99 on 5.4's line), and each use of one can leak a little truth | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| [fuzzy logic](#fuzzy-logic) | Goguen (1969), Zadeh: values in $[0,1]$; $v(\neg A) = 1 - v(A)$, $\land$ minimum, $\lor$ maximum, $\forall$ minimum over instances | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| [Łukasiewicz conditional](#lukasiewicz-conditional) | $v(A \to B) = \min(1, 1 - v(A) + v(B))$: fully true when the consequent is at least as true as the antecedent, otherwise short by exactly the drop | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| [verities](#verities), unverity | Edgington (1996): degrees as closeness to clear truth, formally probabilities and not truth-functional; unverity is 1 minus verity, and a valid argument's conclusion has no more unverity than its premises' sum | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| [artificial precision](#artificial-precision) | the objection that nothing in the use of "tall" makes a man tall to degree 0.5 rather than 0.49 (Keefe 2000; Sainsbury) | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| [higher-order vagueness](#higher-order-vagueness) | borderline cases of "borderline" and of "definitely"; a theory that draws a sharp line around the borderline cases faces it (set out in [5.5](lessons/05-05-supervaluationism-and-epistemicism.md)) | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| [penumbral connection](#penumbral-connection) | a logical tie among borderline cases that holds however they are settled: nothing is both tall and not tall; in [5.5](lessons/05-05-supervaluationism-and-epistemicism.md), if tile 16 is blue, so is the bluer tile 14 | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| [precisification](#precisification), admissible | a way of making every vague predicate sharp; admissible iff it keeps the clear cases and clear non-cases and respects penumbral connections (Fine 1975) | [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| semantic indecision | Lewis's gloss on vagueness: usage permits many sharp lines and has chosen none | [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| [supertruth](#supertruth), superfalse | true on every admissible precisification; false on every one; a sentence that is neither is true on some and false on others | [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| [supervaluationism](#supervaluationism) | truth is supertruth: every classical law survives and bivalence fails | [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| [definitely](#definitely-operator), $D$ | $D\varphi$ is true iff $\varphi$ is true on every admissible precisification: a box over precisifications, each seeing all, so S5 | [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| [epistemicism](#epistemicism) | vague predicates have sharp boundaries that cannot be known; a borderline case is too close to the line to know (Williamson 1994; Sorensen 1988) | [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| meaning supervenes on use | no difference in where a word's line falls without a difference in the community's dispositions to apply it, though no function from use to line can be stated | [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| [margin-for-error principle](#margin-for-error-principle) | if $x$ and $y$ differ by an increment on the deciding dimension and you know $x$ is $F$, then $y$ is $F$ ([`epistemology` 1.3](../epistemology/lessons/01-03-why-knowledge.md)) | [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| worldly vagueness | vagueness in objects or facts rather than in meanings or knowledge; Evans (1978) argued against vague identity | [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |

## Positions and distinctions

**Module 1: Sense, reference, and descriptions**

### Reference

**What an expression stands for. On Frege's view a name's reference is its object, a sentence's is its truth value, and a predicate's is a concept.** Frege's *Bedeutung*, in "Über Sinn und Bedeutung" (1892). His "may be called" marks a stipulation: in everyday German *Bedeutung* means "meaning" ([1.1](lessons/01-01-freges-puzzle-sense-and-reference.md)).

- **A relation between an expression and its object.** It is not something a speaker does; a speaker's reference is 1.4's ([speaker's reference and semantic reference](#speakers-reference-and-semantic-reference)).
- **One reference, many senses.** In a triangle, let $a$, $b$, $c$ be the lines joining each corner to the midpoint of the opposite side. "The point where $a$ crosses $b$" and "the point where $b$ crosses $c$" pick out one point, by a theorem, under two [senses](#sense).
- **Of a sentence:** its truth value ([reference of a sentence](#reference-of-a-sentence)). **Of a predicate:** a concept ([concept and object](#concept-and-object)).
- **A semantics with reference alone cannot see [Frege's puzzle](#freges-puzzle).** In [`mathematical-logic` 2.2](../mathematical-logic/lessons/02-02-structures-satisfaction.md), $t_1 = t_2$ is true in a structure when the terms $t_1$ and $t_2$ denote the same element, so a true $c = d$ is made true by the fact that makes $c = c$ true.
- **It shifts in indirect contexts.** Under "believes that" a word refers to its customary sense ([indirect reference](#indirect-reference), 1.2).
- **Russell's rival** (1905) gives "the so-and-so" neither a sense nor a reference: there is no constituent to refer, so nothing can fail to refer ([theory of descriptions](#theory-of-descriptions), 1.3).
- **Trap: *Bedeutung* has no single English rendering.** Max Black's "reference" (*Philosophical Review*, 1948), Herbert Feigl's "nominatum" (1949), "meaning" in the *Collected Papers* (1984), and "denotation" in Russell's "On Denoting" (1905), which renders Frege's pair as "meaning" and "denotation".

*Lessons:* [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [1.2](lessons/01-02-belief-reports-and-empty-names.md), [1.3](lessons/01-03-russells-theory-of-descriptions.md)

### Sense

**The way an expression presents its reference: what anyone who understands the expression grasps.** Frege's *Sinn* (1892, pp. 25–27): connected with a sign, besides its reference, is its sense, "wherein the mode of presentation is contained" (lesson's translation). Same reference under two senses is why a true "$a = b$" can inform ([Frege's puzzle](#freges-puzzle)).

- **Frege's examples.** The medians of a triangle ([reference](#reference)): two phrases, one point. *Morgenstern* and *Abendstern*, the morning star and the evening star: one planet, which [`metaphysics` 3.1](../metaphysics/lessons/03-01-kinds-of-necessity.md) met as Hesperus and Phosphorus.
- **Objective and shareable.** In Frege's telescope analogy a sense is the image the lens forms inside the tube, not the image on an observer's retina ([idea, sense and reference](#idea-sense-and-reference)).
- **One sense, several expressions.** Frege remarks (p. 27) that the same sense can have different expressions in different languages and even in one (1.1 P3 turns on it).
- **For a sentence** the sense is a [thought](#thought-fregean), fixed by the parts' senses and their arrangement ([compositionality](#compositionality)).
- **What words refer to under "believes that"** (1.2): their customary senses ([indirect reference](#indirect-reference)). Hence the threatened [hierarchy of senses](#hierarchy-of-senses).
- **Ordinary names.** Frege's footnote on "Aristotle" (p. 27) grants that speakers may differ over the sense: for one it is "the pupil of Plato and teacher of Alexander the Great", for another "the teacher of Alexander the Great who was born in Stagira" (lesson's translations). He tolerates this while the reference stays the same; under "believes that" the tolerance lapses ([variability in sense](#variability-in-sense)). 3.1 reads the footnote as the first statement of [descriptivism](#descriptivism) and turns the variation against descriptive senses; John McDowell (1977) and Gareth Evans defended senses for names that are not descriptions (1.1 Example 2).
- **Rivals.** [Millians](#millianism) (Salmon, Soames) give a name only its bearer (1.1, 3.4). Russell gives a description no meaning in isolation (1.3).
- **Trap: a sense is not an idea,** a speaker's private picture of the thing. It belongs to the expression and is grasped by anyone who understands it.
- **Trap: Frege's "proper name" (*Eigenname*) covers any expression for one object,** "the intersection of $a$ and $b$" included. Russell pulls names and descriptions apart (1.3).

*Lessons:* [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [1.2](lessons/01-02-belief-reports-and-empty-names.md), [1.3](lessons/01-03-russells-theory-of-descriptions.md), [3.1](lessons/03-01-against-descriptivism.md)

### Mode of presentation

**The manner in which an expression gives its referent; a sense contains it.** Frege's *Art des Gegebenseins*, "manner of being given" (1892, p. 26). Two signs that present one object in two ways can make an identity between them informative.

- **Where it came from.** *Begriffsschrift* (1879, §8) already had one content fixed in two "ways of determining" (*Bestimmungsweisen*), each with its own name. In 1892 the difference moves from a fact about names into what each name expresses (1.1).
- **Its place in Frege's argument.** Once the referents and the signs as marks are ruled out, the way each sign presents its referent is the one place left to find a difference in cognitive value ([Frege's puzzle](#freges-puzzle)).
- **Neo-Fregeans** (3.4) deny that a name contributes only its bearer: it contributes a mode of presentation, so two belief clauses with co-referring names say different things ([neo-Fregeanism](#neo-fregeanism)).
- **Library usage.** Place and Smart's reply that "lightning" and "electric discharge" differ in meaning yet pick out one thing ([`philosophy-of-mind` 2.1](../philosophy-of-mind/lessons/02-01-behaviourism-and-the-identity-theory.md), Example 2) is sense and reference at work. [`philosophy-of-mind` 1.3](../philosophy-of-mind/lessons/01-03-the-knowledge-argument.md)'s "old fact, new mode" stretches the phrase to ways of thinking.
- **Trap: Frege's mode of presentation belongs to an expression's sense and is objective.** The philosophy-of-mind use, for the way a thinker thinks of a fact, is an extension of it.

*Lessons:* [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [1.2](lessons/01-02-belief-reports-and-empty-names.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

### Frege's puzzle

**Why can a true "$a = b$" be informative when "$a = a$" is not, if both are about one object?** Frege, "Über Sinn und Bedeutung" (1892, p. 25), paraphrasing the lesson's translation: the two differ in [cognitive value](#cognitive-value); "$a = a$" holds a priori and, following Kant, is analytic, while sentences of the form "$a = b$" often extend our knowledge and cannot always be justified a priori. His opening example is astronomy's discovery that the sun rising each morning is always the same sun. His answer: one [reference](#reference), two [senses](#sense).

- **The argument, in outline** (1.1), by elimination, with $a$ and $b$ names and "$a = b$" true. P1: the two sentences can differ in cognitive value. P2: if identity related only the objects, "$a = b$" would say what "$a = a$" says. P3: if it related the signs (Frege's own view in *Begriffsschrift*, 1879, §8), it would hold only through each sign's arbitrary link to its bearer and concern our way of designating, not the thing. P4: a difference in cognitive value must come from the referents, the signs as marks, or the way each sign presents its referent. So a sign contributes a [mode of presentation](#mode-of-presentation), its sense. The form is modus tollens twice, then disjunctive syllogism ([`philosophical-method` 1.4](../philosophical-method/lessons/01-04-argument-forms-and-formal-fallacies.md)).
- **Where it is weakest: P4.** [Millians](#millianism) such as Nathan Salmon (*Frege's Puzzle*, 1986) and Scott Soames deny the step from the datum to a difference in what the words contribute. A name contributes only its bearer, so the two sentences express one proposition, and the difference lies in how a speaker takes it in (Salmon's "guises") or in what an utterance conveys pragmatically (3.4). The Fregean replies that whoever understands "$a = b$" and accepts it on good authority learns what "$a = a$" cannot teach, and that explaining what understanding delivers is a theory of meaning's job. The Millian concedes that cognitive value needs explaining somewhere; the Fregean concedes, in Frege's "Aristotle" footnote, that ordinary names have no single sense across speakers.
- **The survey.** In the 2020 PhilPapers Survey's target faculty, of 1,269 who answered on proper names, about 36% accepted or leaned Fregean and about 39% Millian (Bourget and Chalmers, 2023).
- **It comes back** in 3.4, for Millians and for "I" and "now" ([essential indexical](#essential-indexical)). 1.2 meets the same split inside "believes that", where swapping co-referring names changes a truth value ([substitutivity salva veritate](#substitutivity-salva-veritate)).
- **Trap: the puzzle is not that "$a = b$" is a posteriori.** The medians identity is a theorem and still extends knowledge. Informative is not a posteriori, a point [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) needs.
- **Left to you.** Boss 3(c) sets Mill's own account of identity sentences against Frege's opening and asks for the premise between them; the card does not.

*Lessons:* [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

### Idea, sense and reference

**Frege's three levels: the idea is the private image a word calls up, the sense a shareable way of presenting the thing, the reference the thing itself.** Frege 1892, pp. 29–30. The idea (*Vorstellung*) is subjective; the sense is objective and can be common to many.

- **The telescope** (1.1). Someone watches the moon through a telescope. The moon is the reference. The real image the lens forms inside the tube is the sense: one-sided and dependent on where you stand, yet objective, since several observers could use it. Each observer's retinal image is the idea.
- **1.1's figure** shows two signs with two senses and one reference, the point $G$ where the medians meet; a reader's mental picture of the drawing belongs to the reader, not to the sense.
- **Trap: the noema read as a Fregean sense is Dagfinn Føllesdal's reading of Husserl** ([`phenomenology-and-personalism` 1.2](../phenomenology-and-personalism/lessons/01-02-the-anatomy-of-an-experience.md)), not Frege's doctrine.

*Lessons:* [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md)

### Cognitive value

**What a sentence can teach someone who understands it.** Frege's *Erkenntniswert* (1892, p. 25; modern spelling). The datum of [Frege's puzzle](#freges-puzzle) is that a true "$a = a$" and a true "$a = b$" can differ in it.

- **It is not the line between a priori and empirical.** Frege's hedges, "often" and "cannot always", leave room for an a priori identity that informs, and the medians identity, a theorem, comes in the same paragraph as an example of real knowledge (1.1).
- **Where it lives is the crux** of 1.1's weakest premise: in what the sentences say (Frege), or in how speakers take in one proposition, by guises or pragmatics ([Millianism](#millianism), 3.4).
- **A test for a difference in thought** is Frege's difference test ([thought](#thought-fregean)).

*Lessons:* [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [1.3](lessons/01-03-russells-theory-of-descriptions.md)

### Compositionality

**The meaning of a whole is fixed by the meanings of its parts and how they are put together. Frege uses it twice, once for sense and once for reference.** Frege names neither principle but uses both (1892, pp. 33, 35), citing Leibniz's interchange *salva veritate* for the second (1.1).

- **Of sense:** the sense of a complex is fixed by its parts' senses and their arrangement. **Of reference:** the reference of a complex is fixed by its parts' references, so swapping a part for a co-referring one leaves the whole's reference unchanged. *In symbols*, with $\mathrm{ref}(e)$ the reference of an expression $e$ and $S[e]$ a complex expression containing $e$, outside indirect contexts:

$$\mathrm{ref}(e) = \mathrm{ref}(e') \;\Longrightarrow\; \mathrm{ref}(S[e]) = \mathrm{ref}(S[e']).$$

*In words:* a co-referring swap preserves reference and may change sense.
- **For sentences** (1.2's P1): a sentence's truth value is fixed by the references of its parts. [Substitutivity salva veritate](#substitutivity-salva-veritate) is what this says about swapping.
- **What it does in 1.1.** It drives the argument that a sentence's reference is its truth value ([reference of a sentence](#reference-of-a-sentence)). It is the semantic twin of [Leibniz's law](#leibnizs-law) ([`metaphysics` 5.3](../metaphysics/lessons/05-03-coincidence-and-the-ship-of-theseus.md)), which is why it cannot capture what "$a = b$" teaches.
- **Inside "believes that"** it only seems to fail: on Frege's account the words there shift reference ([indirect reference](#indirect-reference), 1.2).
- **In truth-conditional semantics** (4.1) it is one of a theory of meaning's two jobs, beside finiteness ([learnability](#learnability)): a sentence's meaning is built from its parts' meanings and their mode of combination, and from nothing else. As a property of a semantics it is [`programming-languages` 2.3](../programming-languages/lessons/02-03-denotational-semantics-and-fixed-points.md)'s, where a construct's denotation is built from its parts' denotations: Frege's reference level.

*Lessons:* [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [1.2](lessons/01-02-belief-reports-and-empty-names.md), [1.3](lessons/01-03-russells-theory-of-descriptions.md), [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md)

### Substitutivity salva veritate

**Co-referring expressions can replace each other without changing a sentence's truth value.** Frege takes the test from Leibniz, whom he quotes (*Grundlagen* §65, 1884; differently worded in 1892, p. 35): "Eadem sunt, quorum unum potest substitui alteri salva veritate", things are the same when one can replace the other with truth preserved.

- **1.2's F1.** If $a$ and $b$ have the same reference, replacing $a$ by $b$ in a sentence leaves its truth value unchanged.
- **In first-order logic it is a theorem.** For a structure $\mathcal M$, constants $a$ and $b$, and a formula $\varphi$ with free variable $x$: if $\mathcal M \models a = b$, then $\mathcal M \models \varphi[x := a]$ iff $\mathcal M \models \varphi[x := b]$, where $\varphi[x := t]$ is the result of substituting the term $t$ for $x$ ([`mathematical-logic` 2.1](../mathematical-logic/lessons/02-01-quantifiers-syntax.md), [2.2](../mathematical-logic/lessons/02-02-structures-satisfaction.md)).
- **Where it seems to fail.** Inside quotation marks, and after "believes that". 1.2's invented case: the *Eskerby Courier*'s restaurant column is signed "Crumb", Crumb is Councillor Velmont, and Bettany believes that Crumb panned the café but not that Velmont did. Frege's diagnosis: in the clause the names do not co-refer, since each refers to its customary sense ([indirect reference](#indirect-reference)), so the case is no counterexample (1.2's C1).
- **Inside the box** (2.5's P1): substitutivity fails after "necessarily", Quine's [referential opacity](#referential-opacity), which [Smullyan's reply](#smullyans-reply) treats as a matter of scope.
- **On direct reference** (3.4) swapping co-referring names inside "believes that" cannot change a truth value, so the Millian must explain 1.2's failures away ([Millianism](#millianism)).
- **Trap: a failed swap does not refute [Leibniz's law](#leibnizs-law).** That law is about objects ([`metaphysics` 5.3](../metaphysics/lessons/05-03-coincidence-and-the-ship-of-theseus.md)); substitutivity is about expressions. Leibniz's formula defines sameness of things, Frege applies it to expressions, and he keeps both.

*Lessons:* [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [1.2](lessons/01-02-belief-reports-and-empty-names.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

### Thought (Fregean)

**The sense of a declarative sentence: not the act of thinking but its objective content, which many can share.** Frege's *Gedanke* (1892).

- **Not the sentence's reference.** Put "the evening star" for "the morning star" in "the morning star is a body illuminated by the sun": someone who did not know they are one planet could take one thought for true and the other for false. The swap changed the thought and left the truth value ([reference of a sentence](#reference-of-a-sentence)).
- **The difference test** (1892, p. 32): if someone who understands two sentences could take one to be true and the other false, they express different thoughts. Gareth Evans later called a version of it the "intuitive criterion of difference" (*The Varieties of Reference*, 1982). What "understands" requires is 1.1 P3's question.
- **Built from senses** ([compositionality](#compositionality)), so a sentence with an [empty name](#empty-name) still expresses a thought (1.2).
- **What a belief report relates a believer to.** After "believes that" a clause refers to its customary sense, a thought (1.2's P3; [indirect reference](#indirect-reference)), so two clauses with the same truth value can refer to different thoughts.
- **Trap: a thought is not a mental episode,** and it is not the sentence's reference.

*Lessons:* [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [1.2](lessons/01-02-belief-reports-and-empty-names.md), [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md)

### Reference of a sentence

**On Frege's view a declarative sentence refers to its truth value, the True or the False.** Frege 1892, pp. 32–35: *das Wahre* and *das Falsche*, which he counts as objects. They are [`mathematical-logic` 1.2](../mathematical-logic/lessons/01-02-semantics-truth-tables.md)'s $T$ and $F$.

- **The route, in outline** (1.1). Swapping a part for a co-referring one cannot change the whole's reference ([compositionality](#compositionality)). The morning-star swap can change the thought, so the thought is the sense, not the reference. We ask whether a part has a reference exactly when we care whether the whole is true: "Odysseus was set ashore at Ithaca while sound asleep" has a sense whether or not "Odysseus" names anyone. What every co-referring swap leaves fixed is the truth value. (1.1 P2 asks for the reconstruction.)
- **The cost Frege accepts.** All true sentences co-refer, and in the reference "everything particular is blurred" (lesson's translation).
- **No reference, no truth value.** A sentence with an [empty name](#empty-name) in customary position has a sense and no reference: a [truth-value gap](#truth-value-gap) (1.2).
- **In indirect position** a clause refers to its customary sense, a [thought](#thought-fregean) (1.2).
- **Trap: the reference Frege argues for is a truth value,** not a fact or a state of affairs.

*Lessons:* [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md)

### Concept and object

**For Frege a predicate refers to a concept, which is predicative ("unsaturated") and never an object.** Frege, "Über Begriff und Gegenstand" (1892): the grammatical predicate refers to a concept (p. 194), and a concept is unsaturated (*ungesättigt*), unlike an object.

- **"The concept *horse* is not a concept"** (p. 196; lesson's translation). "The concept *horse*" is a name, so it designates an object. The sentence jars, and Frege accepts it.
- **Not its extension.** In "Function und Begriff" (1891) a concept's extension is an object and the concept is not, so a predicate's reference is not a set (1.3 Flashback).
- **Universals.** Whether this commits Frege to universals is [`metaphysics` 1.3](../metaphysics/lessons/01-03-universals-the-realists-case.md)'s question.
- **Existence** belongs to concepts on Frege's view; Russell recasts it as a quantifier ([existence as quantifier](#existence-as-quantifier), 1.3).

*Lessons:* [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [1.3](lessons/01-03-russells-theory-of-descriptions.md)

### Indirect reference

**On Frege's account, what a word refers to in an indirect context: its customary sense.** Frege 1892, p. 28 (lesson's translation): in indirect speech the words "refer to what is customarily their sense", and "The indirect reference of a word is accordingly its customary sense." He distinguishes a word's customary reference from its indirect reference, and its customary sense from its indirect sense.

- **The thesis applied** (1.2's P3). In indirect speech, and in the clauses after "believes", "says" and their kin, a word refers to its customary sense, and the clause to its customary sense, a [thought](#thought-fregean). A [belief report](#belief-report) then relates a believer to a thought built from senses.
- **What it explains.** When swapping co-referring names inside "believes that" changes a truth value, the names did not co-refer there, since their senses differ; [substitutivity](#substitutivity-salva-veritate) is untouched (1.2's C1).
- **A programmer's picture:** "believes that" receives its clause unevaluated, as a thought, not a truth value.
- **Whose sense?** Frege's "the sense of ... another's speech" points to the original speaker's. 1.2 Example 2 pulls the reporter's sense apart from the believer's ([variability in sense](#variability-in-sense)).
- **Its price:** a word that refers to a sense needs a further sense to present it, and each added attitude verb another ([hierarchy of senses](#hierarchy-of-senses)).
- **Challenged** by [semantic innocence](#semantic-innocence) (Davidson, 1969) and by [Millians](#millianism) (3.4), who give that-clauses their ordinary referents. [Neo-Fregeans](#neo-fregeanism) keep a version of it (3.4).
- **Trap: indirect reference is not quotation.** In direct speech one's words refer to the other's words, "signs of signs" (p. 28); in indirect speech they refer to senses. So translation preserves an indirect report and destroys a quotation.

*Lessons:* [1.2](lessons/01-02-belief-reports-and-empty-names.md), [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

### Empty name

**A name with a sense and no bearer.** Frege 1892: "the least convergent series" provably has no reference (p. 28); whether "Odysseus" has one is doubtful (p. 32).

- **Frege's verdicts** (1.2). "Odysseus was set ashore at Ithaca while sound asleep" expresses a thought and, if "Odysseus" refers to nothing, has no truth value ([truth-value gap](#truth-value-gap)). That follows from his gap rule: a part in customary position with no reference leaves the whole without a truth value ([Weak Kleene](#weak-kleene)). In "$A$ believes that Odysseus reached Ithaca", though, the name refers to its sense, which exists, so the report can be true ([indirect reference](#indirect-reference)).
- **Why want reference at all?** For an epic heard as art, sense suffices; "the striving for truth" (lesson's translation) drives us on to reference (p. 33).
- **Russell's rival** (1905). Names of non-entities are disguised descriptions: "A proposition about Apollo means what we get by substituting what the classical dictionary tells us is meant by Apollo, say 'the sun-god'" (p. 491). So the Odysseus sentence is false, not gappy ([names as disguised descriptions](#names-as-disguised-descriptions), 1.3). Quine's "nothing pegasizes" is the same move ([`metaphysics` 1.1](../metaphysics/lessons/01-01-existence-and-ontological-commitment.md)). Russell's conditional "If Ferdinand is not drowned, Ferdinand is my only son" (p. 484) presses the gap rule for compound sentences (1.2 P3).
- **Four answers** to what an empty description contributes (1.3's map), each with its price: a non-subsisting object (Meinong, as Russell reads him; the law of contradiction); a sense with no reference (Frege; truth values); nothing, since the phrase is broken up (Russell 1905; surface grammar); a use that presupposes a referent (Strawson, 1.4; the tie between meaning and truth).
- **Strawson's gap** is traced by the SEP back to Frege's 1892 treatment of sentences with an empty name (1.4).
- **Trap: Frege does not call the Odysseus sentence false, meaningless or third-valued.** It expresses a thought and, if "Odysseus" names no one, lacks a truth value: an absence, not a third value.
- **Trap: Frege does not say "Odysseus" has no reference,** only that it is doubtful whether it has one.

*Lessons:* [1.2](lessons/01-02-belief-reports-and-empty-names.md), [1.3](lessons/01-03-russells-theory-of-descriptions.md), [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md)

### Hierarchy of senses

**The unending series of senses Frege's theory seems to need: each attitude verb above a word moves its reference one step up, and each step needs a new sense to present it.** The seed is in Frege's text: 1892, p. 28 distinguishes a word's customary sense from its indirect sense.

- **The recursion** (1.2's P3 with P6, that whatever refers does so through a sense that presents its referent). Write $r_n(\alpha)$ and $s_n(\alpha)$ for what an expression $\alpha$ refers to and expresses under $n$ attitude verbs. Then

$$r_0(\alpha) = \text{the customary referent}, \qquad r_{n+1}(\alpha) = s_n(\alpha), \qquad s_n(\alpha) \text{ presents } r_n(\alpha).$$

*In words:* each layer of reporting needs a new way of thinking of the last.
- **1.2's example** (invented). In "Ingrith doubts that Bettany believes that Crumb is cruel", "Crumb" is two verbs deep and refers to $s_1$, its indirect sense, which presents $s_0$, its customary sense. One more verb needs $s_2$, and nothing stops the climb. 1.2's diagram draws the chain for "Velmont".
- **The objection:** every word then carries infinitely many senses, none intelligible beyond the first two (IEP, "Opacity, Referential").
- **Responses.** Alonzo Church (1951) formalized the full hierarchy. Michael Dummett (1973) tried to make do with customary senses alone, and Terence Parsons (1981) to stop at the second level. Carnap (*Meaning and Necessity*, 1947, §30) objected to the shifting of reference itself.
- **Trap: Church accepts the hierarchy and builds it;** Dummett and Parsons are the ones who try to cut it short, and Carnap's target is the shift, not the infinity.

*Lessons:* [1.2](lessons/01-02-belief-reports-and-empty-names.md)

### Indirect context

**A position, such as the clause after "believes that", where a word does not have its customary reference.** Frege's *ungerade* ("indirect", often "oblique") speech (1892, p. 28), extended to the clauses after verbs of saying and believing.

- **One phenomenon, three names** (1.2). Frege's indirect context, Quine's [referential opacity](#referential-opacity) (2.5: a position where co-referring terms cannot be swapped) and the "opaque context" of [`metaphysics` 5.3](../metaphysics/lessons/05-03-coincidence-and-the-ship-of-theseus.md). [Indirect reference](#indirect-reference) is one explanation of the phenomenon.
- **Three kinds of position** (1.2). Customary, where words refer to their referents; indirect, where they refer to senses, one level per attitude verb ([hierarchy of senses](#hierarchy-of-senses)); and direct speech inside quotation marks, where they refer to words.
- **"Necessarily"** is one too, on Quine's view (2.5), and that is where [quantifying in](#quantifying-in) becomes a problem.
- **Trap: "believes that" does not always block substitution.** On Quine's relational reading the name stands outside the clause ([relational and notional belief](#relational-and-notional-belief)).
- **In computing,** the programmer's "referential transparency" ([`programming-languages` 6.2](../programming-languages/lessons/06-02-state-references-and-the-store.md)) is Quine's name for the property belief contexts lack.

*Lessons:* [1.2](lessons/01-02-belief-reports-and-empty-names.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md)

### Belief report

**A sentence of the form "$A$ believes that $p$", which reports a belief with a that-clause.** On Frege's account the clause stands in an [indirect context](#indirect-context) and refers to a [thought](#thought-fregean), so the report relates the believer to a thought built from senses (1.2).

- **The data** (1.2's P2). A report can be true while its twin, with a co-referring name swapped in, is false. 1.2's invented case: Bettany believes that Crumb panned the Mill Lane café and not that Councillor Velmont did, though Crumb is Velmont. Frege's own case is someone unaware that the evening star is the morning star (p. 32).
- **Why something must be added.** Were the report a relation between believer and object, the two reports would agree in every model where the names co-refer. Senses add it (Frege), or a richer account of reports (3.4).
- **Readings.** Notional and relational ([relational and notional belief](#relational-and-notional-belief)). A description inside a report has two scope readings, which can differ even when exactly one thing fits it ([primary and secondary occurrence](#primary-and-secondary-occurrence), 1.3).
- **Open problems for Frege.** Whose sense the clause refers to ([variability in sense](#variability-in-sense)), and whether the clause's words shift reference at all ([semantic innocence](#semantic-innocence)).
- **In 3.4** a report relates a person to what its clause says, its content; Millians explain apparent substitution failures by guises or pragmatics ([Millianism](#millianism)), and Kripke's Pierre is 3.4's case ([Kripke's puzzle about belief](#kripkes-puzzle-about-belief)).
- **Elsewhere in the library.** [`philosophy-of-mind` 4.1](../philosophy-of-mind/lessons/04-01-intentionality-and-folk-psychology.md) treats propositional attitudes as attitudes to the content a that-clause gives, and every analysis of knowledge in [`epistemology` 1.1](../epistemology/lessons/01-01-repairing-jtb.md) contains a belief report.

*Lessons:* [1.2](lessons/01-02-belief-reports-and-empty-names.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

### Weak Kleene

**A three-valued scheme on which a compound lacks a truth value whenever any component does; otherwise the connectives are classical.** Frege's gap rule (1892, p. 32) behaves this way: a part in customary position with no reference leaves the whole without a truth value, connectives included. The tables are Bochvar's (1938), later called Weak Kleene (1.2).

- **Against [Strong Kleene](#strong-kleene)** (5.3), which gives a compound a classical value whenever the parts that have values settle it. The two schemes differ in four rows of the "and" and "if" tables: a conjunction with one false conjunct and one valueless (in either order) is false in Strong Kleene; a conditional with a false antecedent, or with a true consequent, is true in Strong Kleene even if the other part is valueless. Weak Kleene gives all four no value. Both send the negation of a valueless sentence to no value.
- **For presupposition** (1.4): how a gap spreads through "not", "and" and "if" is a further choice, made separately from saying that a gap exists ([truth-value gap](#truth-value-gap)).
- **Trap: "no truth value" is an absence, not a third value.** Writing it $\tfrac12$ is bookkeeping.

*Lessons:* [1.2](lessons/01-02-belief-reports-and-empty-names.md)

### Truth-value gap

**The absence of a truth value: a meaningful sentence, or a use of one, that is neither true nor false. It is not a third value.**

- **Frege's case** (1.2's C2). "Odysseus was set ashore at Ithaca while sound asleep" expresses a thought and, if "Odysseus" refers to nothing, has no truth value ([empty name](#empty-name)). Frege also says that a speaker asserting "Kepler died in misery" takes for granted, and does not assert, that "Kepler" refers (SEP, "Assertion"; 1.2).
- **Strawson's case** (1950; 1.4). A serious use today of "the king of France is wise" makes no true or false statement: the question of truth does not arise, though the sentence is significant. In 1.4's picture a sentence is a function definition and a use is a call: Russell's analysis is total and returns False when there is no $F$; Strawson's is partial and returns no value, as a call on an empty list raises an error ([sentence and use of a sentence](#sentence-and-use-of-a-sentence)).
- **When does failure leave a gap?** Stephen Neale (*Descriptions*, 1990) cites empty descriptions that sound plainly false. Strawson (1964) granted that a sentence saying the king of France visited yesterday's exhibition is naturally called false, and held that failure leaves a gap only when the description is what the sentence is about. Kai von Fintel (2004) holds that the presupposition is always there and only the verdicts shift (1.4).
- **How a gap spreads** through "not", "and" and "if" is a further choice: Frege's infectious rule ([Weak Kleene](#weak-kleene), 1.2), or [Strong Kleene](#strong-kleene), which 5.3 uses for the liar.
- **Two kinds of one half** (5.4). The three-valued $\tfrac12$ marks neither true nor false, a gap or a third value read as "indeterminate"; the degree $\tfrac12$ is a point on a scale where "tall" is exactly as true as "not tall" ([degree theory](#degree-theory)).
- **Trap: a gap is not a third truth value.** Writing it $\tfrac12$ is bookkeeping.
- **Trap: for Strawson what lacks a truth value is a use,** not the sentence, which is significant.

*Lessons:* [1.2](lessons/01-02-belief-reports-and-empty-names.md), [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md)

### Relational and notional belief

**The two readings of a belief report: a belief that something is so (notional), and a belief of a particular thing that it is so (relational).** Quine, "Quantifiers and Propositional Attitudes" (1956), with his Ralph, who suspects a man who is, unknown to Ralph, the respectable Bernard J. Ortcutt. *In symbols*, with $\mathrm{Bel}_r[\varphi]$ for "Ralph believes that $\varphi$" and $Sx$ for "$x$ is a spy":

$$\text{notional:}\quad \mathrm{Bel}_r[\exists x\,Sx] \qquad\qquad \text{relational:}\quad \exists x\,\mathrm{Bel}_r[Sx].$$

*In words:* Ralph believes that someone or other is a spy, against: someone is such that Ralph believes he is a spy.

- **Substitution.** On the relational reading the name stands outside the clause, in customary position, so co-referring names swap there: "Velmont is someone Bettany believes panned the café" is true (1.2, invented).
- **The problem for Frege.** The relational form binds, from outside, a place that 1.2's P3 says refers to a sense: [quantifying in](#quantifying-in), 2.5's problem.
- **Descriptions** (1.3). A description's primary reading under "believes" puts $\mathrm{Bel}_s[G(x)]$ inside the quantifiers, binding a variable from outside the attitude ([primary and secondary occurrence](#primary-and-secondary-occurrence)).
- **For modality** the matching contrast is [de re and de dicto](#de-re-and-de-dicto) (2.5).

*Lessons:* [1.2](lessons/01-02-belief-reports-and-empty-names.md), [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md)

### Semantic innocence

**The demand that words in a that-clause refer to what they refer to everywhere else.** Donald Davidson, "On Saying That" (1969), paraphrased: free of Frege's theory, no one would think that words in a that-clause refer to anything but what they always refer to. It targets 1.2's P3 ([indirect reference](#indirect-reference)), the premise 1.2 marks as weakest.

- **The pronoun test** (1.2, invented). In "Bettany believes that Crumb is cruel, and she is", "she" picks up Velmont herself from an antecedent that P3 says refers to a sense.
- **Replies.** Sameness of reference across the clause boundary is too theoretical for intuition to detect, and whether such pronouns support it is open (SEP, "Propositional Attitude Reports"). Graeme Forbes keeps innocence by making the verb, not the name, sensitive to sense.
- **What each side concedes.** The Fregean, that the classic theory relativizes reference and owes an answer on the [hierarchy of senses](#hierarchy-of-senses); the innocent theorist, that she owes another account of why the swap fails, which [Millians](#millianism) give with guises and pragmatics (3.4).

*Lessons:* [1.2](lessons/01-02-belief-reports-and-empty-names.md)

### Variability in sense

**Different people attach different senses to one name, so a belief report cannot settle which sense is "the" indirect referent.** The problem as Mark Richard (1988) presses it (1.2).

- **1.2's case** (invented). Ingrith Lowther knows Velmont only as the councillor who chairs planning, and believes that she will block the bypass. Wynne Merriwether, a reporter who knows Velmont only as Crumb, writes "Ingrith believes that Crumb will block the bypass", and readers take the report as accurate. If "Crumb" refers to its customary sense in the reporter's mouth, the report relates Ingrith to a thought she never entertained. If it refers to Ingrith's sense, the senses of the report's words no longer fix its truth value. Frege's account gives no verdict.
- **Why Frege's tolerance runs out.** His "Aristotle" footnote (1.1) allowed different senses for one name "so long as the reference stays the same" (lesson's translation); under "believes that" the reference *is* the sense.
- **Replies.** A [neo-Fregean](#neo-fregeanism) relaxes P3: the believer's sense need only be suitably similar to the reporter's, by a standard the context sets (Forbes; SEP). A [Millian](#millianism) counts only the referent, so the report is true; but then so is the report that Bettany believes Velmont panned the café, whose apparent falsity needs a pragmatic explanation (3.4).

*Lessons:* [1.2](lessons/01-02-belief-reports-and-empty-names.md)

### Theory of descriptions

**Russell's analysis: "the $F$ is $G$" says that exactly one thing is $F$ and that it is $G$, so "the" names nothing.** Bertrand Russell, "On Denoting" (*Mind* 14, 1905), restated in *Introduction to Mathematical Philosophy* (1919), ch. XVI. With $F$ the descriptive predicate, $G$ the main predicate and $x$, $y$ individual variables, "the $F$ is $G$" is true if and only if

$$\exists x\,\big(F(x) \land \forall y\,(F(y) \to y = x) \land G(x)\big).$$

*In words:* something is $F$, anything that is $F$ is that very thing, and it is $G$. Russell's 1919 form, $\exists x\,\big(\forall y\,(F(y) \leftrightarrow y = x) \land G(x)\big)$, is equivalent.

- **Russell's own example** (pp. 481–482). "The father of Charles II. was executed" becomes, in his idiom, that it is not always false of $x$ that $x$ begat Charles II and was executed and that whatever begat Charles II is identical with $x$; "not always false of $x$" is his "for some $x$". He knows ordinary usage and legislates: "*the*, when it is strictly used, involves uniqueness", and he takes it so "for our purposes".
- **No meaning in isolation.** Denoting phrases "never have any meaning in themselves" (p. 480); in the analysed proposition the phrase "has been broken up" (p. 488). "The" is a quantifier word, like "every". Its three clauses are listed under [definite description](#definite-description).
- **Why** (1.3). Russell rejects Meinong's objects, which make the round square both round and not round, and what he read as Frege's "purely conventional denotation" for phrases that denote nothing, which he calls "plainly artificial" (p. 484). Mathlib's convention that $1/0 = 0$ is a modern case of such a conventional denotation.
- **A programmer's picture** (1.3). `[x] = [c for c in crews if won(c)]` succeeds only if the list has exactly one member; "the winner was local" is true just when the unpacking succeeds and `local(x)`. With an empty or a long list the sentence is false, not meaningless.
- **Two readings under an operator.** The analysis is compound, so it can be unpacked inside or outside "not" or "believes" ([primary and secondary occurrence](#primary-and-secondary-occurrence), [scope](#scope)).
- **The three puzzles** a theory of denoting ought to solve (p. 485): George IV, who wished to know whether Scott was the author of *Waverley*; excluded middle and the present King of France; and "the difference between A and B does not subsist" (1.3).
- **Where it is weakest** (1.3): as an account of what English speakers say with "the", rather than as a regimentation for logic. Strawson's objection is pressed through incomplete descriptions such as his table ([incomplete description](#incomplete-description), 1.4). The strongest reply (Stephen Neale, *Descriptions*, 1990): incompleteness afflicts every quantifier ("everyone came to the party"), so it shows that context restricts quantifier domains, not that "the" refers; and descriptions take scope, as Russell's yacht shows, which a term that simply refers does not. The Russellian concedes that the sentence alone does not fix truth conditions; the critic, that "the" interacts with "not" and "believes" as quantifiers do.
- **Its critics in 1.4:** Strawson's [presupposition](#presupposition), Donnellan's [referential use](#referential-and-attributive-use), and Kripke's defence by [speaker's reference](#speakers-reference-and-semantic-reference). Russell answered Strawson in "Mr. Strawson on Referring" (*Mind* 66, 1957): Strawson confused descriptions with occasion-relative words like "present" (write "in 1905"), and calling the sentence "false" is verbal convenience.
- **Later work.** In 2.5, [Smullyan's reply](#smullyans-reply) to Quine treats "the number of planets" as no term at all, so it takes scope. In 3.1 the [modal argument](#modal-argument) reads a description inside "might" by Russell's analysis, and the wide-scope reply answers it.
- **Trap: Russell does not call every sentence with an empty description false.** Only a primary occurrence makes it false; with a secondary occurrence under "not" the sentence is true (1.3 Example 1, the fog).
- **Left to you.** Boss 1(a) asks which feature of the theory (the breaking-up of the denoting phrase, or the distinction between primary and secondary occurrences) Russell's solution of each puzzle uses; 1(b) asks for a King of France sentence at both scopes and the excluded-middle question; 1(c) asks which claim about existence and uniqueness Russell asserts and Strawson denies. The card answers none of them.

*Lessons:* [1.3](lessons/01-03-russells-theory-of-descriptions.md), [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md), [3.1](lessons/03-01-against-descriptivism.md)

### Definite description

**A singular phrase of the form "the so-and-so".** On Russell's analysis "the $F$ is $G$" has three clauses (1.3): existence (something is $F$), uniqueness (anything that is $F$ is that very thing: an identity clause) and predication (it is $G$). The first two are [`mathematical-logic` 3.2](../mathematical-logic/lessons/03-02-extensionality-to-power-set.md)'s "there is exactly one", written out:

$$\exists! x\,F(x) \;:=\; \exists x\,\big(F(x) \land \forall y\,(F(y) \to y = x)\big).$$

- **Improper descriptions** have no satisfier or more than one, so the existence or the uniqueness clause fails. 1.3 Example 1 (an invented regatta): fog with no winner breaks existence, a dead heat breaks uniqueness.
- **Frege does not separate them from names.** His "proper name" covers any expression for one object; Russell pulls the two apart (1.1, 1.3).
- **Notation.** This course writes the quantifiers out; it uses no iota operator.
- **Under "necessarily"** (2.5): "the number of planets" is a definite description, so on Russell's theory it is no term and takes [scope](#scope).

*Lessons:* [1.3](lessons/01-03-russells-theory-of-descriptions.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md)

### Incomplete description

**A definite description whose predicate fits many things, though the speaker means one: "the mayor", "the table".** Russell concedes the usage in the founding text, "we do, it is true, speak of '*the* son of So-and-so' even when So-and-so has several sons" (1905, p. 481), and sets it aside "for our purposes". Read literally over everything, uniqueness fails and the sentence is false.

- **Two Russellian repairs** (1.3 Example 2, invented: Councillor Velmont says "The mayor arrived late"). *Completion:* the sentence abbreviates a fuller description, such as "the mayor of Eskerby". But which completion, when the speaker need have none in mind? No "principled basis" picks one (Devitt and Sterelny's term). *Domain restriction:* the quantifiers range over a domain the context supplies, as in "everyone came" (Jason Stanley and Zoltán Szabó, "On Quantifier Domain Restriction", 2000).
- **Where it strains.** At a twinning ceremony the *Courier* writes, truly, that the mayor welcomed the mayor at the station; that needs a different domain for each occurrence. Stanley and Szabó let context shift mid-sentence; Szabó (2000) and Ludlow and Segal (2004) let "the" literally mean "a", with pragmatics supplying uniqueness; Strawson's heirs say the speaker referred to two people. Without a theory of how context fixes domains, the analysis gives no verdict.
- **Neale's point** (*Descriptions*, 1990): every quantifier is incomplete ("everyone came to the party"), so incompleteness shows that context restricts domains, not that "the" refers.
- **Strawson's own example** in "On Referring" (1950) is a table said to be covered with books (1.4).
- **Trap:** "principled basis" is Devitt and Sterelny's phrase, as the SEP applies it to completions; the objection to completions is not shown to be theirs.

*Lessons:* [1.3](lessons/01-03-russells-theory-of-descriptions.md), [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md)

### Primary and secondary occurrence

**Russell's names for a description's wide and narrow scope relative to an operator that makes a sentence from a sentence, such as "not" or "believes that".** Russell 1905, p. 489: a secondary occurrence is "one in which the phrase occurs in a proposition *p* which is a mere constituent of the proposition we are considering". A primary occurrence unpacks the analysis outside the operator.

- **With negation** (1.3), for "the $F$ is not $G$", with $F$, $G$, $x$, $y$ as in the [theory of descriptions](#theory-of-descriptions):

$$\text{primary (wide scope):}\quad \exists x\,\big(F(x) \land \forall y\,(F(y) \to y = x) \land \neg G(x)\big)$$

$$\text{secondary (narrow scope):}\quad \neg\exists x\,\big(F(x) \land \forall y\,(F(y) \to y = x) \land G(x)\big)$$

*In words:* "exactly one thing is $F$, and it is not $G$" against "it is not the case that exactly one thing is $F$ and it is $G$".
- **With belief**, writing $\mathrm{Bel}_s[\varphi]$ for "$s$ believes that $\varphi$": the primary reading puts $\mathrm{Bel}_s[G(x)]$ inside the quantifiers, a belief about the thing that is in fact $F$; the secondary puts the whole analysis inside $\mathrm{Bel}_s$, a belief that whatever is uniquely $F$ is $G$. The primary binds a variable from outside the attitude ([quantifying in](#quantifying-in), 2.5).
- **When the readings come apart** (1.3's T1; settled logic, checked on all 340 structures with up to four objects). The primary reading of "the $F$ is not $G$" entails the secondary; the converse fails; and the two are equivalent whenever $\exists! x\,F(x)$. So under "not" they differ only when nothing is $F$ or more than one thing is, and then the primary reading is false and the secondary true. Under "believes" they can differ even when exactly one thing is $F$, since the believer need not know which thing it is.
- **Russell's yacht** (p. 489). A guest says "I thought your yacht was larger than it is", meaning that the size he thought it was exceeds its actual size; the touchy owner hears a thought that its size exceeds its size.
- **Russell's warning** (1919): "Confusion of primary and secondary occurrences is a ready source of fallacies where descriptions are concerned."
- **Other operators.** 2.1's Flashback runs the distinction relative to "if ... then"; 2.5 and 3.1 run it relative to "necessarily" and "might" ([scope](#scope)).
- **Left to you.** Boss 1(b) (a King of France sentence at both scopes, and on which reading a disjunction is an instance of excluded middle), the scopes of George IV's wish (part of 1(a)), and Boss 2(d) (the *Waverley* sentence under the necessity operator $\Box$) are not worked here.

*Lessons:* [1.3](lessons/01-03-russells-theory-of-descriptions.md), [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md)

### Scope

**The part of a formula that an operator or quantifier governs. For a description: whether its analysis is unpacked inside or outside an operator such as "not", "believes that" or "necessarily".** Russell's [primary and secondary occurrence](#primary-and-secondary-occurrence) are a description's wide and narrow scope (1.3).

- **Convention.** In this course "wide" and "narrow" always name the description's scope: wide scope is primary (the description outside the operator), narrow scope is secondary (inside it).
- **Structural, not lexical.** No word in "the winner was not local" has two meanings; the ambiguity is in the structure, unlike the lexical ambiguity behind equivocation ([`philosophical-method` 2.3](../philosophical-method/lessons/02-03-informal-fallacies-and-when-they-arent.md)).
- **The Russellian's evidence that "the" is a quantifier:** descriptions take scope, as the yacht shows, and a term that simply refers has none (Neale's reply, 1.3).
- **And the negation test** (1.4). On Russell's semantics the negation of "the $F$ is $G$" with the description at wide scope entails that exactly one thing is $F$; with it at narrow scope it does not. So for descriptions the Russellian reads a negation that still conveys an $F$ as the wide-scope reading ([presupposition tests](#presupposition-tests)).
- **Under modal operators.** In 2.5, [Smullyan's reply](#smullyans-reply) to Quine gives "the $F$ is necessarily $G$" two readings, and the wide one is the [de re](#de-re-and-de-dicto) reading. [`metaphysics` 3.1](../metaphysics/lessons/03-01-kinds-of-necessity.md) wrote "the number of planets" as a term $n$; its de re formula is the primary reading once $n$ is unpacked (1.3). In 3.1 the wide-scope reply to the [modal argument](#modal-argument) is the same distinction put to modal work.
- **Trap: scope matters without emptiness.** Under "not", a failure of uniqueness alone separates the readings (1.3 Example 1, the dead heat); under "believes", even a description with exactly one satisfier gives two readings.

*Lessons:* [1.3](lessons/01-03-russells-theory-of-descriptions.md), [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md), [3.1](lessons/03-01-against-descriptivism.md)

### Existence as quantifier

**Russell's view that "the $F$ exists" says that a description is satisfied exactly once: "exists" is not a predicate of things.** 1.3's D4, with $F$ the descriptive predicate: "the $F$ exists" is $\exists x\,\big(F(x) \land \forall y\,(F(y) \to y = x)\big)$, so "the $F$ does not exist" is true when nothing is $F$ or several things are. "It is only of descriptions … that existence can be significantly asserted" (*Introduction to Mathematical Philosophy*, 1919, ch. XVI).

- **Frege's view recast.** For Frege existence belongs to concepts ([concept and object](#concept-and-object)); Russell makes it a quantifier.
- **Whether existence is also a property of individuals** is [`metaphysics` 2.5](../metaphysics/lessons/02-05-essence-and-existence.md)'s dispute.
- **Univocity.** The analysis assumes, with Quine, one unrestricted quantifier, so "exists" means the same everywhere. Ontological pluralists such as Kris McDaniel (*The Fragmentation of Being*, 2017) posit one quantifier per mode of being. That dispute belongs to [`metaphysics` 1.1](../metaphysics/lessons/01-01-existence-and-ontological-commitment.md), whose "nothing pegasizes" is this analysis applied to a name.
- **Names.** Russell's argument from "whether Homer existed" turns "Homer" into a description ([names as disguised descriptions](#names-as-disguised-descriptions)).

*Lessons:* [1.3](lessons/01-03-russells-theory-of-descriptions.md)

### Names as disguised descriptions

**Russell's view that ordinary proper names abbreviate definite descriptions.** It came in two stages (1.3). In "On Denoting" (1905) "Scott" is a genuine name, but names of non-entities are not: "A proposition about Apollo means what we get by substituting what the classical dictionary tells us is meant by Apollo, say 'the sun-god'" (p. 491). By "The Philosophy of Logical Atomism" (1918) names like "Socrates" are "really abbreviations for descriptions".

- **Why** (1919). A name in the strict sense must name something, and "We may inquire significantly whether Homer existed, which we could not do if 'Homer' were a name." Only a [logically proper name](#logically-proper-name) escapes.
- **Empty names** (1.2). On this view the Odysseus sentence is false, where on Frege's it has no truth value ([empty name](#empty-name)); Quine's "nothing pegasizes" applies it ([`metaphysics` 1.1](../metaphysics/lessons/01-01-existence-and-ontological-commitment.md)).
- **Kripke's attack** is 3.1's. Frege's [sense](#sense) and Russell's disguised descriptions are the classical forms of [descriptivism](#descriptivism), loosened by the [cluster theory](#cluster-theory).
- **Trap: in 1905 "Scott" is still a name.** "Scott" contributes its bearer and "the author of *Waverley*" a quantified claim, which is why "Scott was the author of *Waverley*" informs and "Scott was Scott" does not. The thesis for ordinary names comes later (by 1918), not from "On Denoting".

*Lessons:* [1.3](lessons/01-03-russells-theory-of-descriptions.md), [3.1](lessons/03-01-against-descriptivism.md)

### Logically proper name

**A name in Russell's strict sense: a simple symbol whose meaning is its bearer alone, which must be an object of the speaker's acquaintance.** The label is the commentators'. Russell's 1918 lectures speak of names "in the logical sense": "The only words one does use as names in the logical sense are words like 'this' or 'that.'" ("The Philosophy of Logical Atomism", *Monist*, 1918).

- **The reason, in outline** (*Introduction to Mathematical Philosophy*, 1919, ch. XVI). A strict name means its bearer, so one that named nothing would be "a symbol devoid of meaning"; yet whether Homer existed can be significantly asked, so "Homer" is a description. Run on every ordinary name, the test leaves only words for present objects of acquaintance. (1.3 P3 asks for the reconstruction.)
- **Acquaintance**, the doctrine's ground, is read in [`philosophy-of-mind` 2.1](../philosophy-of-mind/lessons/02-01-behaviourism-and-the-identity-theory.md)'s Flashback.
- **A cost Russell grants:** such a "this" does not mean the same to speaker and hearer.
- **Contrast** Frege's broad "proper name", any expression for one object (1.1).

*Lessons:* [1.3](lessons/01-03-russells-theory-of-descriptions.md)

### Presupposition

**A condition that must hold for a use of a sentence to be true or false at all; if it fails, the use has no truth value.** Strawson's notion (1.4). "On Referring" (*Mind* 59, 1950) never uses the word: it says that a use implies there is a king of France, in what Strawson called a special and odd sense of "imply" that is not entailment. He developed the notion as presupposition in *Introduction to Logical Theory* (1952).

- **Made exact** (1.4), with "situation" meaning a model ([`mathematical-logic` 2.2](../mathematical-logic/lessons/02-02-structures-satisfaction.md)): $S$ presupposes $P$ when $P$ is true in every situation in which $S$ is true *or false*. *In words:* if $P$ fails, $S$ has no value. If "not" leaves a gap a gap, this is equivalent to $P$ following from $S$ and from not-$S$, which is why the [negation test](#presupposition-tests) works. Contrast [entailment](#entailment).
- **Two semantics compared** (1.4). A sentence that is true or false in every situation, as on Russell's semantics, presupposes only logical truths. On Strawson's semantics "the $F$ is $G$" has a gap unless exactly one thing is $F$, and is otherwise true just when that thing is $G$; the sentence and its negation both presuppose that exactly one thing is $F$.
- **Triggers** include definite descriptions, factive verbs ("regrets") and aspectual verbs ("stopped"). 1.4 Example 1 runs the tests on "stopped" ([presupposition tests](#presupposition-tests)).
- **Where the argument is weakest** (1.4): judgments of what is "false" are unstable. Neale (*Descriptions*, 1990) cites empty descriptions that sound plainly false, and Strawson himself (1964) granted that a sentence saying the king of France visited yesterday's exhibition is naturally called false. The replies: failure leaves a gap only when the description is what the sentence is about (Strawson 1964), or the presupposition is always there and only the verdicts shift (Kai von Fintel, 2004). The Russellian concedes that "That's false" is often not what we say, and owes an account of the hesitation; the Strawsonian concedes that failure does not always leave a gap ([truth-value gap](#truth-value-gap)).
- **Three senses of the word.** The everyday one ("the argument presupposes"), this semantic one, and Stalnaker's [pragmatic presupposition](#pragmatic-presupposition). [4.4](lessons/04-04-speaker-meaning-and-implicature.md) inherits 1.4's definition, and finds that no test tells a presupposition from a [conventional implicature](#conventional-implicature).
- **Trap: on Russell's analysis an improper description makes a primary occurrence false, not valueless.** Presupposition is Strawson's alternative (1.3).
- **Trap: presupposition failure leaves a use without a truth value, not the sentence without a meaning** ([sentence and use of a sentence](#sentence-and-use-of-a-sentence)).
- **Left to you.** Boss 1(c) asks which claim about the existence and uniqueness of a present King of France Russell asserts and Strawson denies; the card leaves that, and how the pieces tell against Russell, to you.

*Lessons:* [1.3](lessons/01-03-russells-theory-of-descriptions.md), [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Sentence and use of a sentence

**Strawson's distinction: meaning belongs to a sentence; referring, and being true or false, belong to particular uses of it.** P. F. Strawson, "On Referring" (*Mind* 59, 1950), distinguishes a sentence, a use of it and an utterance of it.

- **S1** (1.4). "The king of France is wise", said under Louis XIV and under Louis XV, is one sentence put to two uses, about two men. The words stay fixed; what they are about changes.
- **S2.** A sentence's meaning is the rules for using it to refer and to say something true or false; knowing the meaning is knowing how the sentence could be used.
- **1.4's picture.** A sentence is a function definition and a use is a call. Russell's analysis is total: called when there is no $F$, it returns False. Strawson's is partial: the call takes an $F$ for granted, and without one it returns no value ([truth-value gap](#truth-value-gap)).
- **Russell's reply** ("Mr. Strawson on Referring", *Mind* 66, 1957): Strawson confused descriptions with occasion-relative words like "present" (write "in 1905" instead), and calling the sentence "false" is verbal convenience.
- **The amended statement** (Strawson, "A Reply to Mr. Sellars", 1954). Where the intended reference is clear, we assess the statement amended to the speaker's guessed intention and give the original no value (1.4 Example 2). Donnellan answers that amending needs a referential use. It chooses what a speaker meant, as charity in [`philosophical-method` 1.3](../philosophical-method/lessons/01-03-reconstruction-and-charity.md) chooses what an author meant.
- **Trap: Strawson did not call the sentence meaningless.** He insisted it is significant; what lacks a truth value is a use of it.
- **Left to you.** What the distinction contributes to the case against Russell is Boss 1(c)'s question.

*Lessons:* [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md)

### Referential and attributive use

**Donnellan's two uses of a definite description. Used attributively, it states something about whoever is the $F$. Used referentially, it is a tool for getting the audience to pick out whom the speaker means, and it can work even when that person is not $F$.** Keith Donnellan, "Reference and Definite Descriptions" (*Philosophical Review*, 1966).

- **D1** (1.4). "Smith's murderer is insane" is attributive when said over Smith's body with the killer unknown, and referential when said of Jones raving at his trial. In one use the description is essential; in the other a name would do.
- **D2.** Which use is made depends on the speaker's intentions; the sentence is not semantically ambiguous.
- **D3.** A referential use can pick out someone who does not fit. Asking at a party who the man drinking a martini is asks about the man in view even if his glass holds water; a speaker who thinks the king a usurper can still refer to him as "the king".
- **Donnellan's conclusion.** Neither Russell nor Strawson fits referential uses: a speaker whose description fits no one may still have referred to the person she meant, and said something true of her.
- **1.4's worked case** (invented). A town paper reports that the chair of the harbour committee voted against the ferry subsidy; the committee has had no chair since March, and the reporter meant Councillor Velmont, who runs its meetings and did vote against. Russell: false. Strawson: in 1950, no statement; by 1954, assess the amended statement. Donnellan: a referential use, so the reporter referred to Velmont and said something true of her. Kripke: no semantic referent, speaker's referent Velmont; the words say something false, and the reporter meant something true. All four agree on every fact about the town and disagree only over which item is "what the report said"; the choice turns on what a semantic theory is a theory of.
- **Trap: a referential use does not give "the" a second meaning.** Donnellan denied that the sentence is semantically ambiguous; the dispute is whether the person meant is the description's semantic referent or only the speaker's ([speaker's reference and semantic reference](#speakers-reference-and-semantic-reference)).
- **Trap: an attributive description may still denote someone,** in Russell's sense, while the speaker refers to no one; Donnellan reserves referring for the referential use.
- **Trap: the martini case is Donnellan's, and a question.** The "champagne" version is Kripke's recollection of it.
- **Left to you.** Boss 1(d)'s reception case, in which a unique second person satisfies the description, and its verdict between Donnellan and Kripke.

*Lessons:* [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md)

### Speaker's reference and semantic reference

**A designator's semantic referent is what the conventions of the language make it pick out (for a description, its unique satisfier). The speaker's referent is what the speaker wishes to talk about and believes to be the semantic referent.** Saul Kripke, "Speaker's Reference and Semantic Reference" (*Midwest Studies in Philosophy*, 1977); 1.4's K1.

- **K2: names show the gap too.** Two people see Smith in the distance and take him for Jones: "What is Jones doing?" "Raking the leaves." "Jones" names Jones, yet they referred to Smith, and no one calls "Jones" ambiguous. Misreference needs no second meaning.
- **K3:** the [Russell language](#russell-language) test.
- **Kripke's conclusion** (1.4). Donnellan's cases are speaker's reference and consistent with Russell's semantics. Kripke claimed only that they do not refute Russell.
- **The method:** posit no ambiguity unless forced, the discipline of [`philosophical-method` 2.3](../philosophical-method/lessons/02-03-informal-fallacies-and-when-they-arent.md)'s treatment of equivocation turned on a theory.
- **The definition needs a belief.** The speaker believes her referent to be the semantic referent, so in Kripke's sense a speaker's referent that differs from the semantic one comes with a mistaken belief.
- **Borrowed apparatus.** Kripke's distinction follows Grice's between what the words mean and what the speaker meant: [speaker meaning](#speaker-meaning) and [conversational implicature](#conversational-implicature), which [4.4](lessons/04-04-speaker-meaning-and-implicature.md) builds.
- **Names later.** 3.1 and 3.2 argue that a name can refer to someone its user's descriptions do not fit, which is semantic reference without satisfaction; 3.2's [Madagascar case](#madagascar-case) is a name whose semantic referent changed.
- **Trap: speaker's reference is not semantic reference,** for names or for descriptions. Saying the name refers to the person taken for its bearer runs the two together.
- **Trap: Frege's reference is semantic,** a relation between an expression and its object ([reference](#reference), 1.1).

*Lessons:* [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md)

### Entailment

**$S$ entails $P$ when $P$ is true in every situation in which $S$ is true.** 1.4's definition, with "situation" meaning a model ([`mathematical-logic` 2.2](../mathematical-logic/lessons/02-02-structures-satisfaction.md)). Contrast [presupposition](#presupposition), which needs $P$ true wherever $S$ is true *or false*.

- **Its marks** (1.4). An entailment is lost under negation, which leaves it open, and it cannot be cancelled without contradiction. A [conversational implicature](#conversational-implicature) can be cancelled (4.4).
- **Russell's formulas** (1.4). "The $F$ is $G$", $\exists x\,(Fx \land \forall y\,(Fy \to y = x) \land Gx)$, entails $\exists x\,(Fx \land \forall y\,(Fy \to y = x))$, that exactly one thing is $F$. So does its negation with the description at wide [scope](#scope), but not with it at narrow scope.
- **1.4 Example 1** (invented). "Dr Hartigan has stopped prescribing the old tonic" entails that she does not prescribe it now, and presupposes that she used to ([presupposition tests](#presupposition-tests)).
- **What "not" does to a gap matters.** The negation test finds a presupposition through an entailment of not-$S$ only if "not" leaves a gap a gap (1.4); 2.2's Flashback runs both kinds of "not".

*Lessons:* [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md)

### Presupposition tests

**Diagnostics for a presupposition: it survives embedding under negation and in questions, unlike an entailment; and, unembedded, it cannot be cancelled without contradiction, unlike a conversational implicature.** 1.4.

- **1.4 Example 1** (invented). Take "Dr Hartigan has stopped prescribing the old tonic", with $U$ for "she used to prescribe it" and $N$ for "she prescribes it now". The negation, "Dr Hartigan hasn't stopped prescribing the tonic", still conveys $U$, and now conveys $N$. The question, "Has she stopped?", still conveys $U$ and leaves $N$ open. So $U$ survives embedding and is presupposed; not-$N$ does not, and is entailed. On a presuppositional analysis:

| $U$ | $N$ | sentence | its negation |
|---|---|---|---|
| T | T | F | T |
| T | F | T | F |
| F | T | gap | gap |
| F | F | gap | gap |

- **Why the negation test works:** if "not" leaves a gap a gap, a presupposition follows from a sentence and from its negation ([presupposition](#presupposition)).
- **The rival explanations.** A conjunctive analysis ("$U$ and not $N$") makes "she hasn't stopped" true of a doctor who never prescribed the tonic, so it must explain why the negation still conveys $U$. For descriptions the Russellian has an explanation ready: the negation read with the description at wide [scope](#scope).
- **Trap: an unembedded presupposition also follows from the plain sentence.** What marks it out is survival under negation and questioning.
- **Limits** (4.4). Cancellability tests only unembedded triggers: under negation a presupposition can cancel too. And no test tells a presupposition from a [conventional implicature](#conventional-implicature), since both project and resist cancellation.

*Lessons:* [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md)

### Russell language

**Kripke's test: imagine a language stipulated to obey Russell's theory of descriptions. If speakers there would still use descriptions referentially, their doing so in English is no evidence against Russell.** Kripke, "Speaker's Reference and Semantic Reference" (1977); 1.4's K3.

- **The case.** In such a language speakers would still use "the man drinking a martini" to point out a man holding water. Uses that would arise where Russell is right by fiat cannot show that he is wrong.
- **What it supports:** only Kripke's negative conclusion, that Donnellan's cases do not refute Russell's semantics. It is no argument that Russell's theory is true.
- **Trap: two arguments, not one.** Kripke's parity argument from names (Smith taken for Jones, with no ambiguity in "Jones": [speaker's reference and semantic reference](#speakers-reference-and-semantic-reference)) is distinct from the Russell-language test.
- **Left to you.** Boss 1(d) offers the test as one consideration in its essay; the card does not weigh it there.

*Lessons:* [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md)

### Pragmatic presupposition

**What a speaker takes for granted as common ground in a conversation, as against a condition on a sentence's having a truth value.** Robert Stalnaker's notion (1.4).

- **It can fail without any truth-value gap.**
- **A third notion,** beside the everyday "the argument presupposes" and Strawson's semantic [presupposition](#presupposition), which is the one 1.4 defines and [4.4](lessons/04-04-speaker-meaning-and-implicature.md) uses.
- **Trap: a presupposition in 1.4's sense is not whatever a speaker assumes.**

*Lessons:* [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md)


**Module 2: Modal logic**

### Possible world

**A way things could have been. In Kripke semantics a world is a bare point at which sentences get truth values: a node of a graph, labelled with the atoms true there.** Each node carries one row of a truth table ([`mathematical-logic` 1.2](../mathematical-logic/lessons/01-02-semantics-truth-tables.md)); Kripke ("Semantical Analysis of Modal Logic I", 1963a) made worlds bare points of evaluation ([2.1](lessons/02-01-kripke-semantics-and-the-system-k.md)).

- **What worlds are** (concrete, abstract, or nothing at all) is [`metaphysics` 3.2](../metaphysics/lessons/03-02-what-possible-worlds-are.md)'s question. The semantics is neutral on it: here worlds are points in a graph.
- **Which worlds count from which** is the [accessibility relation](#accessibility-relation)'s job, the part the sibling lessons ([`metaphysics` 3.1](../metaphysics/lessons/03-01-kinds-of-necessity.md), [`philosophy-of-religion` 1.3](../philosophy-of-religion/lessons/01-03-omniscience-and-human-freedom.md) and [2.2](../philosophy-of-religion/lessons/02-02-the-modal-ontological-argument.md)) left implicit by letting every world see every world.
- **The slogan is a later gloss.** "A necessary truth is true in all possible worlds" is credited to Leibniz, but the *Monadology* (tr. Latta, 1898) says "Truths of reasoning are necessary and their opposite is impossible: truths of fact are contingent and their opposite is possible" (§33), and separately that God's ideas contain infinitely many possible universes (§53). Joining the two is the gloss [`modern-philosophy` 2.3](../modern-philosophy/lessons/02-03-leibniz-sufficient-reason-and-monads.md) flags.
- **Notation.** Worlds are $w_0, w_1, \dots$ in models and $w, v, u$ in proofs; $w_0$ marks the world of evaluation (2.1, 2.2).

*Lessons:* [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md)

### Strict implication

**C. I. Lewis's implication: $p$ strictly implies $q$ when it is impossible that $p$ and not-$q$. In modal notation, $\neg\Diamond(p \wedge \neg q)$, that is, $\Box(p \to q)$.** Lewis found in the algebra of logic "two somewhat startling theorems: (1) a false proposition implies any proposition, and (2) a true proposition is implied by any proposition" (*Mind*, 1912, p. 522). His remedy is defined in *A Survey of Symbolic Logic* (1918, ch. V). Lewis had axioms but no semantics ([2.1](lessons/02-01-kripke-semantics-and-the-system-k.md)).

- **Modal logic as a formal system begins here** (2.1). Lewis's own systems include S2 and S3; [S4](#system-s4) and [S5](#system-s5) go back to Lewis and Langford's *Symbolic Logic* (1932) (2.2).
- **World-relative once $R$ is not universal** (2.1 Example 1): at $w_1$, $p$ strictly implies $\Diamond q$; at $w_0$, which sees $w_1$, it does not. On a universal frame a boxed formula takes one value at every world, so the question never arose.
- **It has paradoxes of its own.** Lewis listed them among his theorems, calling them "themselves somewhat peculiar" (*Survey*, 1918, ch. V, p. 335); 2.3's Flashback works out how far strict implication escapes the material theorem.
- **Lewis's S2 and S3 lack full necessitation;** Kripke (1965) modelled them with "non-normal" worlds ([necessitation rule](#necessitation-rule)).
- **Trap: $\Box p \to \Box q$ is not strict implication.** It is a material conditional between two modal claims, and can be true by a false antecedent. Strict implication is $\Box(p \to q)$ (2.1 P2).

*Lessons:* [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md), [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Kripke frame

**A nonempty set of worlds with an accessibility relation on it: a directed graph whose nodes are worlds.** $\langle W, R\rangle$ with $W \neq \varnothing$ and $R \subseteq W \times W$ (2.1 D1). $R$ is any set of pairs, as in [`discrete-mathematics` 2.2](../discrete-mathematics/lessons/02-02-relations-equivalence-and-order.md); nothing is assumed about it.

- **A frame has no valuation.** Formulas get truth values only in a [Kripke model](#kripke-model); a formula is [valid on a frame](#validity-on-a-frame) when it is true in every model on it.
- **Shapes of $R$** (reflexive, serial, symmetric, transitive, Euclidean) are 2.2's [frame conditions](#frame-conditions); each axiom beyond K costs one ([frame correspondence](#frame-correspondence)).
- **Universal frame:** every world sees every world, the siblings' tacit setting; an S5 frame, on which every boxed formula takes one value at every world (2.1).
- **History** (2.1). Stig Kanger (1957), Richard Montague (1960), Jaakko Hintikka (1961) and Arthur Prior all used a relation between worlds. Saul Kripke ("A Completeness Theorem in Modal Logic", 1959; "Semantical Analysis of Modal Logic I", 1963a) made worlds bare points of evaluation and proved completeness system by system.

*Lessons:* [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md), [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md)

### Accessibility relation

**The relation $R$ saying which worlds count as possible relative to which. $wRv$ is read "$w$ sees $v$"; $\Box\varphi$ at $w$ looks at exactly the worlds $w$ sees.** 2.1 takes "sees" from [`philosophy-of-religion` 2.2](../philosophy-of-religion/lessons/02-02-the-modal-ontological-argument.md).

- **Its reading sets the box's reading** (2.1, 2.3). Alethic: possible relative to $w$. Epistemic: not ruled out by what the agent knows. Deontic: every obligation in force at $w$ is met. Temporal: now and later moments, the $\Diamond$ of [`distributed-systems` 3.2](../distributed-systems/lessons/03-02-failure-detectors-and-escaping-flp.md)'s $\Diamond P$ reading "eventually". Programs: dynamic logic gives each program $c$ its own box, true when a claim holds in every state $c$ can halt in.
- **A box quantifies over the range $R$ picks out** (2.3), which is why choosing axioms for a reading means asking what that range is like.
- **The K axiom holds whatever $R$ is; T, D, 4, B and 5 each need $R$ to have a shape** ([frame correspondence](#frame-correspondence)). Choosing an axiom is choosing a shape for "possible from here" (2.2).
- **Provability has no worlds at all,** yet obeys a modal logic, GL ([provability logic](#provability-logic), 2.3).
- **Trap: the box never looks at $w$ itself unless $wRw$.** $\Box\varphi$ can be true at a world where $\varphi$ is false ([truth at a world](#truth-at-a-world)).

*Lessons:* [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md), [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Kripke model

**A frame plus a valuation: a graph of worlds with a truth-table row at each node.** $\mathcal M = \langle W, R, V\rangle$, where the valuation $V$ gives each atom the set of worlds where it is true (2.1 D1).

- **2.1 Example 1.** $W = \{w_0, w_1, w_2\}$; $R = \{\langle w_0,w_1\rangle, \langle w_0,w_2\rangle, \langle w_1,w_2\rangle, \langle w_2,w_1\rangle\}$; $V(p) = \{w_0, w_1\}$, $V(q) = \{w_1\}$. The frame is serial, but not reflexive, symmetric or transitive. $\Box(p \to \Diamond q)$ is true at $w_1$ only, although $p \to \Diamond q$ is false at $w_1$ itself, which does not see itself.
- **Values** are written T and F, and tables are computed inside out, one column per subformula ([truth at a world](#truth-at-a-world)).
- **2.4 adds** a domain $D(w)$ for each world and an extension for each predicate at each world ([quantified modal logic](#quantified-modal-logic)).
- **Trap: truth in a model is not validity** ([validity on a frame](#validity-on-a-frame)).

*Lessons:* [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md)

### Truth at a world

**The recursive definition: atoms by the valuation, connectives by the truth tables at the world, the box over every world seen, the diamond over some world seen.** 2.1 D2:

$$\mathcal M, w \models p \iff w \in V(p)$$

$$\mathcal M, w \models \Box\varphi \iff \mathcal M, v \models \varphi \text{ for every } v \text{ with } wRv$$

$$\mathcal M, w \models \Diamond\varphi \iff \mathcal M, v \models \varphi \text{ for some } v \text{ with } wRv$$

- **It is [`mathematical-logic` 2.2](../mathematical-logic/lessons/02-02-structures-satisfaction.md)'s satisfaction with a world index;** $\Gamma \models \varphi$ stays reserved for entailment.
- **The box is a universal quantifier over the worlds a world sees, the diamond an existential one,** so they trade places under negation as $\forall$ and $\exists$ do ([modal duality](#modal-duality)).
- **Trap: the box looks away.** $\Box\varphi$ is true at $w$ when $\varphi$ holds at every world $w$ sees, whatever $\varphi$ does at $w$, unless $wRw$ (2.1 Example 1, at $w_1$).
- **Trap: at a world that sees nothing,** every box is vacuously true and every diamond false ([dead-end world](#dead-end-world)).

*Lessons:* [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md)

### Validity on a frame

**Three levels: true in a model (at every world of it); valid on a frame (true in every model on that frame, whatever the valuation); valid on a class of frames (valid on each member). Logic lives at the last two.** 2.1 D3. *In words:* one labelled graph; one graph under every labelling; a family of graphs.

- **K-valid** means valid on every frame: by [soundness and completeness](#soundness-and-completeness), exactly the theorems of [K](#system-k).
- **Validity quantifies over every valuation,** and the converse halves of [frame correspondence](#frame-correspondence) exploit it with a tailored valuation; they assume $p$ may be true at any set of worlds whatever (2.2).
- **Trap: truth in a model is not validity.** In 2.1 Example 1, $\Box(q \to p)$ is true at all three worlds only because $q$ sits where $p$ does; move $q$ to $w_2$ and it fails at $w_0$. On 2.2's ring with $p$ true at every world, axiom 4 is true everywhere though the frame is not transitive.
- **Trap: a frame that validates an axiom does not put it into a system.** A system's theorems are what is valid on every frame of its class: 2.3's Example 1 frame validates 4 and 5, and standard deontic logic contains neither.

*Lessons:* [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md), [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md)

### System K

**The modal logic that holds whatever the arrows look like: classical logic, plus "necessity is closed under modus ponens", plus "what logic proves is necessary".** 2.1 D4. Axioms: every instance of a tautology, and every instance of the [K axiom](#k-axiom) $\Box(\varphi \to \psi) \to (\Box\varphi \to \Box\psi)$. Rules: modus ponens and the [necessitation rule](#necessitation-rule).

- **Sound and complete for the class of all frames:** its theorems are exactly the formulas valid on every frame. Soundness is 2.1's T1 and T2 run through [`mathematical-logic` 1.4](../mathematical-logic/lessons/01-04-proof-system-completeness.md)'s induction on proofs; completeness is a standard result (SEP "Modal Logic", §6), stated and not proved.
- **The smallest [normal modal logic](#normal-modal-logic);** every system of 2.2 and 2.3 extends it. The map: K to D to T, then T to B and T to S4, and both to S5 (2.2).
- **Theorems** (2.1): $\Box(p \wedge q) \leftrightarrow (\Box p \wedge \Box q)$; $(\Box p \vee \Box q) \to \Box(p \vee q)$; and, with [duality](#modal-duality), philosophy-of-religion 2.2's rule from $\Box(A \to B)$ and $\Diamond A$ to infer $\Diamond B$. With conflicting boxes: from $\Box p$ and $\Box\neg p$, $\Box q$ for any $q$ ([dead-end world](#dead-end-world)).
- **Non-theorems** (2.1): $\Box p \to p$ ([T](#axiom-t)); $\Box p \to \Diamond p$ ([D](#axiom-d)); $p \to \Box p$; the converse of the K axiom (2.1 P2); $\Box(p \vee q) \to (\Box p \vee \Box q)$ (2.1 P3). The last two fail even on universal frames, so no axiom of 2.2 rescues them.
- **Trap: "K" names three things in this library:** the system and its axiom; the derived diamond rule [`philosophy-of-religion` 2.2](../philosophy-of-religion/lessons/02-02-the-modal-ontological-argument.md) labels "K"; and the knowledge operator $K$ of [`epistemology` 1.3](../epistemology/lessons/01-03-why-knowledge.md) and 2.3.

*Lessons:* [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md), [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md)

### K axiom

**$\Box(\varphi \to \psi) \to (\Box\varphi \to \Box\psi)$: necessity is closed under modus ponens. Valid on every frame.** 2.1 T1.

- **Proof** (2.1 T1). Take any model and world $w$ with $\Box(p \to q)$ and $\Box p$ true at $w$, and let $wRv$. Then $p \to q$ and $p$ are true at $v$, so $q$ is. As $v$ was any world $w$ sees, $\Box q$ is true at $w$. The proof never asks what $R$ is like, so K costs no frame condition (2.2).
- **K is modus ponens run at each accessible world.**
- **With [duality](#modal-duality)** it makes philosophy-of-religion 2.2's rule (from $\Box(A \to B)$ and $\Diamond A$, infer $\Diamond B$) a derived rule of the system K (2.1 T3).
- **Trap: K is not T.** "What is necessary is true" is $\Box p \to p$, which fails at any world that does not see itself. K holds even at dead ends.
- **Trap: its converse,** $(\Box p \to \Box q) \to \Box(p \to q)$, is not valid (2.1 P2).

*Lessons:* [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md), [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md)

### Necessitation rule

**If $\varphi$ is a theorem, so is $\Box\varphi$: what logic proves is necessary.** A rule of [K](#system-k) and of every [normal modal logic](#normal-modal-logic).

- **Preserves validity on a frame** (2.1 T2): if $\varphi$ is true at every world of every model on a frame, every world $w$ sees satisfies $\varphi$, so $\Box\varphi$ is true at $w$. A law holds everywhere, so everywhere you can see. It preserves truth in a model too.
- **Not truth at a world.** $p \to \Box p$ is no theorem: it fails at $w_1$ of the model in [`philosophy-of-religion` 2.4](../philosophy-of-religion/lessons/02-04-cosmological-arguments-sufficient-reason.md)'s Flashback.
- **Where the course uses it.** It turns axiom T into the theorem $\Box(\Box p \to p)$ (2.2 P3); it drives [Ross's paradox](#rosss-paradox) and is GL's first derivability condition (2.3); it is a step in Prior's derivation of the [Barcan formula](#barcan-formula) (2.4); it gives line 1 of the [necessity of identity](#necessity-of-identity), from the theorem $x = x$ (2.5).
- **Systems that restrict it.** Lewis's S2 and S3 lack full necessitation, and Kripke (1965) modelled them with "non-normal" worlds (2.1); Prior's system Q restricts it to block the Barcan formula (2.4).
- **Trap: it applies to theorems only.** It takes "valid" to "valid", never "true here" to "necessary here".

*Lessons:* [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md), [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md)

### Modal duality

**"Possibly" is "not necessarily not": $\Diamond\varphi \leftrightarrow \neg\Box\neg\varphi$ is valid on every frame.** 2.1 T3: "not every seen world fails $\varphi$" says "some seen world satisfies $\varphi$".

- **The quantifier pattern.** Box and diamond trade places under negation exactly as $\forall$ and $\exists$ do in [`mathematical-logic` 2.3](../mathematical-logic/lessons/02-03-translation-quantifier-order.md); so also $\Box\varphi \leftrightarrow \neg\Diamond\neg\varphi$.
- **Dual forms of axioms** come from putting $\neg p$ for $p$ and contraposing: T's dual is $p \to \Diamond p$; [B](#axiom-b)'s is $\Diamond\Box p \to p$ (2.2). In deontic notation $P$, "may", is defined as $\neg O \neg$ ([deontic logic](#deontic-logic)).
- **With the K axiom** it makes philosophy-of-religion 2.2's "K" rule a derived rule of the system K.

*Lessons:* [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md)

### Countermodel

**One model and one world at which a formula is false. By soundness, it shows the formula is no theorem of any system sound for that model's frame.** The method is [`mathematical-logic` 1.4](../mathematical-logic/lessons/01-04-proof-system-completeness.md)'s refutation by one countermodel ([2.1](lessons/02-01-kripke-semantics-and-the-system-k.md)).

- **Work backwards and build only what the clauses demand** (2.1). A false $\Box\psi$ at $w$ needs one seen world where $\psi$ fails; a true $\Diamond\psi$ needs one seen world where $\psi$ holds. A true $\Box\psi$ or a false $\Diamond\psi$ constrains every seen world, so add few.
- **The smallest one: T fails at a single world with no arrows** and $p$ false there. $\Box p$ is vacuously true, since no seen world can fail $p$, and $p$ is false. What the world lacks is an arrow to itself.
- **Check the frame class.** A countermodel refutes validity on a class only if its frame belongs to the class: a non-reflexive countermodel does not refute a theorem of T. State the frame's properties, pair by pair.
- **The siblings' version:** [`philosophy-of-religion` 1.3](../philosophy-of-religion/lessons/01-03-omniscience-and-human-freedom.md)'s two-world countermodel is 2.1's method with $R$ left universal.

*Lessons:* [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md)

### Logical omniscience

**Read knowledge as a Kripke box and the knower knows every tautology (by necessitation) and whatever follows from what she knows (by K). No one who knows a theory's axioms thereby knows all its theorems.** 2.1, citing SEP "Epistemic Logic", §5.

- **The source is normality, not a frame condition.** 2.1's T1 and T2 make any box read through the clauses closed under logical consequence, whatever $R$ is; 2.3 counts it, with [Ross's paradox](#rosss-paradox), among the costs of the [normality](#normal-modal-logic) premise every reading shares.
- **Replies** (2.1). Keep the clauses and change what they model: the box describes implicit knowledge, the information a state carries, and explicit knowledge is implicit knowledge plus awareness (Fagin and Halpern, 1987). Or widen the worlds to include impossible ones (Rantala 1975; Hintikka 1978), where K can fail.
- **Concessions** (2.1). The critic grants that K is right for information content; the defender grants that K is not the logic of what finite agents explicitly believe.

*Lessons:* [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md), [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Dead-end world

**A world that sees no world. There every box is vacuously true and every diamond false.** At a dead end $\Box p$, $\Box\neg p$ and even $\Box(p \wedge \neg p)$ are true; even $\Diamond(p \vee \neg p)$ is false (2.1 Example 2).

- **What it means depends on the reading** (2.1). Alethic: absurd, so alethic systems exclude dead ends by making $R$ reflexive (2.2). Temporal: the last moment of a finite timeline, where "at every later moment, $p$" is harmlessly vacuous. Programs: a loop that never halts has no final states, so the triple $\{\mathsf{true}\}\ \mathsf{while\ true\ do\ skip}\ \{\mathsf{false}\}$ is valid in [`programming-languages` 2.4](../programming-languages/lessons/02-04-hoare-logic-and-loop-invariants.md). Deontic: a situation with no world where all obligations are met, so everything is obligatory there.
- **D fails exactly at dead ends;** seriality excludes them ([axiom D](#axiom-d)).
- **Moral dilemmas** (2.1 Where it strains). $\Box p \wedge \Box\neg p$ is true only at dead ends, and in K it entails $\Box q$ for every $q$, since it gives $\Box(p \wedge \neg p)$, and necessitation with K carries that to anything ("deontic explosion", SEP "Deontic Logic", §6.4). The defender of standard deontic logic holds that all-things-considered obligations never conflict; the dilemma theorist trades aggregation or inheritance for a conflict-tolerant logic. The semantics records the dispute without settling it.
- **Trap: seriality is weaker than reflexivity.** A world can see some world without seeing itself.

*Lessons:* [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md)

### Frame conditions

**Properties of the accessibility relation. Each standard axiom beyond K holds on a frame exactly when $R$ has one of them.** 2.2 D1: for all $w, v, u \in W$, $R$ is

- *reflexive* if $wRw$;
- *serial* if $wRv$ for some $v$: no world is a dead end;
- *symmetric* if $wRv$ implies $vRw$;
- *transitive* if $wRv$ and $vRu$ imply $wRu$;
- *Euclidean* if $wRv$ and $wRu$ imply $vRu$: any two worlds seen from a common world see each other.

The first three are [`discrete-mathematics` 2.2](../discrete-mathematics/lessons/02-02-relations-equivalence-and-order.md)'s. 2.2's picture: worlds are rooms and accessibility is one-way windows.

| Condition | Axiom | In the rooms picture |
|---|---|---|
| reflexive | [T](#axiom-t) | every room has a window onto itself |
| serial | [D](#axiom-d) | every room looks into at least one room |
| transitive | [4](#axiom-4) | whatever you see through two windows you see through one |
| symmetric | [B](#axiom-b) | every window works both ways |
| Euclidean | [5](#axiom-5) | any two rooms visible from one room see each other |

- **L1, two relation facts** (2.2, proved). (i) A reflexive Euclidean relation is symmetric and transitive. (ii) On a symmetric relation, transitive and Euclidean coincide. So T plus 5, T plus B plus 4, and equivalence relations pick out the same frames.
- **Reflexive frames are serial,** which is why T proves D (2.2's map: K to D to T).
- **Other conditions in the course.** GL's frames are transitive with no infinite forward chain, hence no world sees itself (2.3). A margin relation $|x - x'| \le m$ is reflexive and symmetric but not transitive (2.3).
- **Trap: a Euclidean relation need not be symmetric** without reflexivity. If $w_0$ sees $w_1$ and $w_2$, and those two see each other and themselves, the relation is Euclidean and $w_1$ does not see $w_0$. That is why S5 is T plus 5, not K plus 5.
- **Trap: seriality is weaker than reflexivity** ([dead-end world](#dead-end-world)).

*Lessons:* [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md)

### Frame correspondence

**Each standard axiom is valid on a frame exactly when the frame's accessibility relation has one property. So choosing an axiom is choosing a shape for "possible from here", and the logic alone does not choose it.** 2.2 T1, a settled result, for every frame:

| Axiom | Formula | Valid on the frame iff $R$ is |
|---|---|---|
| [T](#axiom-t) | $\Box p \to p$ | reflexive |
| [D](#axiom-d) | $\Box p \to \Diamond p$ | serial |
| [4](#axiom-4) | $\Box p \to \Box\Box p$ | transitive |
| [B](#axiom-b) | $p \to \Box\Diamond p$ | symmetric |
| [5](#axiom-5) | $\Diamond p \to \Box\Diamond p$ | Euclidean |

- **Two halves.** *Property implies validity:* follow the truth clause (2.2 Example 1 does T and 4). *Validity implies property:* contrapose, and at a world where the property fails pick a tailored valuation. For T: if $w$ does not see itself, let $V(p) = \{v : wRv\}$; then $\Box p$ is true at $w$ and $p$ false. This half assumes $p$ may be true at any set of worlds whatever, since validity on a frame quantifies over every valuation.
- **Attribution.** Kripke's "Semantical Analysis of Modal Logic I" (1963a) matched 4 with transitivity, B with symmetry, and T plus 5 with equivalence relations; D's row is 2.3's.
- **2.3's method.** A reading's box ranges over the worlds its $R$ picks out, so whether "ought", "knows" or "necessarily" obeys an axiom is whether its $R$ has the matching property.
- **What it cannot settle** (2.2). The correspondence locates a failure in $R$; it does not say what $R$ should be for a given kind of necessity.
- **Trap: it concerns validity on a frame,** under every valuation at once, not truth in one model.
- **Trap: correspondence is not completeness.** Completeness is a separate theorem, and some systems are incomplete for the frames their axioms define (SEP "Modal Logic", §14, gives an example from provability logic).

*Lessons:* [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Axiom T

**$\Box p \to p$: what is necessary is true. Valid on a frame iff $R$ is reflexive.** Dual form: $p \to \Diamond p$.

- **Proofs** (2.2). Reflexive implies valid: if $\Box p$ is true at $w$ and $wRw$, then $w$ is among the worlds $w$ sees, so $p$ is true at $w$. Valid implies reflexive: at a $w$ that does not see itself, $V(p) = \{v : wRv\}$ makes $\Box p$ true and $p$ false.
- **Smallest countermodel** (2.1): one world, no arrows, $p$ false ([countermodel](#countermodel)).
- **A claim about each world's view of itself;** 4 is a claim about chains of views, which is why one can accept T and doubt 4 (2.2 Example 1; the [tolerance argument](#tolerance-argument) does exactly that).
- **By reading** (2.3). Holds for knowledge (knowledge is factive) and for alethic necessity. Fails for "ought": obligations get broken, and the actual world is seldom ideal. KD45, the usual logic of belief, lacks it. For provability, adding T to GL is inconsistent, though each instance $\operatorname{Prov}_{\mathsf{PA}}(\ulcorner\varphi\urcorner) \to \varphi$ is true if PA is sound ([provability logic](#provability-logic)).
- **Names.** The system [T](#system-t) is Feys's (1937); some texts call it M after von Wright (1951).
- **Trap: T is not K** ([K axiom](#k-axiom)).
- **Trap: $\Box(\Box p \to p)$ is weaker than T.** It is a theorem of T, by necessitation on T, yet some frames that are not reflexive validate it (2.2 P3).

*Lessons:* [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Axiom D

**$\Box p \to \Diamond p$: what is necessary is possible; read deontically, "ought implies may". Valid on a frame iff $R$ is serial: no world is a dead end.** In deontic notation, $Op \to Pp$ with $P := \neg O \neg$; equivalently $Op \to \neg O\neg p$, no obligation conflicts with its opposite (2.3).

- **Proof** (2.3). If $w$ sees some $v$, $Op$ at $w$ puts $p$ at $v$, so $Pp$ holds at $w$. If $w$ sees nothing, $Op$ is vacuously true and $Pp$ false.
- **The lattice is K to D to T.** T proves D, because reflexive frames are serial; so D is a theorem of T, B, S4 and S5, not of K (2.2's map; 2.3's map: "D follows wherever T holds").
- **Standard deontic logic is K plus D** ([deontic logic](#deontic-logic)); with D, no two obligations conflict. Conflicting obligations can be true together only at a [dead end](#dead-end-world), where everything is obligatory (2.1).
- **KD45,** K plus D, 4 and 5 (serial, transitive, Euclidean frames), is the usual logic of belief (2.3).
- **In GL, D fails** along with T (2.3's map).
- **Trap: D is not "ought implies can".** D relates $O$ to its own dual $P$; "can" needs a second, alethic operator ([ought implies can](#ought-implies-can)).

*Lessons:* [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Axiom 4

**$\Box p \to \Box\Box p$: what is necessary is necessarily necessary. Valid on a frame iff $R$ is transitive.** Its dual is $\Diamond\Diamond p \to \Diamond p$: what is possibly possible is possible.

- **Proof of the easy half** (2.2 Example 1). Suppose $\Box p$ is true at $w$, $wRv$ and $vRu$. Transitivity gives $wRu$, so $p$ is true at $u$; hence $\Box p$ holds at every $v$ that $w$ sees, and $\Box\Box p$ at $w$.
- **A theorem of S4 and S5, not of K, T or B.** 2.2's ring of four worlds, each seeing itself and its two neighbours, is reflexive and symmetric and refutes it: with $p$ false at $w_2$ only, $\Box p$ is true at $w_0$ and false at $w_1$, which $w_0$ sees.
- **By reading** (2.3). For knowledge it is [positive introspection](#positive-introspection), the KK principle. For provability it is a derivability condition and a theorem of GL. For metaphysical necessity the [tolerance argument](#tolerance-argument) denies it (Chandler 1976; Salmon 1989).
- **Alone it does real work:** the second-level S4 reduction laws need only 4, not T ([modal reduction laws](#modal-reduction-laws)).
- **On a symmetric frame, 4 and 5 stand or fall together** (2.2 L1(ii)): B plus 4 and B plus 5 have the same frames, and each is S5.
- **Trap: truth in a model is not validity.** On the ring with $p$ true at all four worlds, 4 is true everywhere though the frame is not transitive.

*Lessons:* [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Axiom B

**$p \to \Box\Diamond p$: what is true is necessarily possible. Valid on a frame iff $R$ is symmetric.** Named for Brouwer (2.2).

- **Proof of the easy half** (2.2): if $p$ is true at $w$ and $wRv$, symmetry gives $vRw$, so $\Diamond p$ is true at $v$.
- **Dual form.** Put $\neg p$ for $p$ and contrapose: $\Diamond\Box p \to p$, the form in which [`philosophy-of-religion` 2.2](../philosophy-of-religion/lessons/02-02-the-modal-ontological-argument.md) says B proves its step.
- **A theorem of B and S5, not of S4:** a preorder need not be symmetric.
- **Keeping B, 4 and 5 fall together** (2.2 L1(ii)): on symmetric frames transitive and Euclidean coincide.
- **In 2.4, B is the only part of S5 that Prior's derivation of the [Barcan formula](#barcan-formula) uses,** besides K and necessitation: its dual form at line 3 and B itself at line 7.

*Lessons:* [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md)

### Axiom 5

**$\Diamond p \to \Box\Diamond p$: what is possible is necessarily possible. Valid on a frame iff $R$ is Euclidean.** S5's characteristic axiom, and the one [`philosophy-of-religion` 2.2](../philosophy-of-religion/lessons/02-02-the-modal-ontological-argument.md) runs the modal ontological argument on; whether it is a law of logic or a substantive claim decides whether that argument's key step comes free (2.2).

- **Both halves of its correspondence** are 2.2 P2.
- **A theorem of S5 only** among K, T, B, S4 and S5: 2.2's ring is not Euclidean (5 fails at $w_1$ for $\neg p$, with $p$ false at $w_2$ only), and a preorder need not be Euclidean.
- **By reading** (2.3). For knowledge it is [negative introspection](#negative-introspection), which Hintikka rejected; it holds when knowledge is read through indistinguishability (S5) and for belief in KD45.
- **On a symmetric frame, 5 and 4 coincide** (2.2 L1(ii)).
- **Trap: Euclidean is not equivalence.** Without reflexivity a Euclidean relation need not be symmetric, so S5 is T plus 5, not K plus 5 ([frame conditions](#frame-conditions)).

*Lessons:* [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.3](lessons/02-03-which-logic-for-which-modality.md)

### System T

**K plus axiom T. Sound and complete for reflexive frames.** First proposed by Feys (1937); some texts call it M, after von Wright (1951) (2.2).

- **Proves D,** since reflexive frames are serial, and $\Box(\Box p \to p)$, by necessitation on T.
- **Does not prove 4, B or 5.** Map: K to D to T, then T to B and T to S4.
- **The siblings' needs.** [`philosophy-of-religion` 1.3](../philosophy-of-religion/lessons/01-03-omniscience-and-human-freedom.md) and [1.4](../philosophy-of-religion/lessons/01-04-eternity-immutability-and-simplicity.md) need only K and T (2.3).

*Lessons:* [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md)

### System B

**K plus T and B. Sound and complete for reflexive symmetric frames.** Named for Brouwer (2.2).

- **Proves neither 4 nor 5.** 2.2's ring of four worlds, each seeing itself and its two neighbours, is a B-frame: not transitive ($w_0Rw_1$ and $w_1Rw_2$, not $w_0Rw_2$) and not Euclidean ($w_0Rw_1$ and $w_0Rw_3$, not $w_1Rw_3$). With $p$ false at $w_2$ only, 4 fails at $w_0$ and 5 fails at $w_1$ for $\neg p$.
- **Add either 4 or 5 and you get S5** (2.2 L1(ii)). B and S4 are incomparable, and S5 is where they meet.
- **Where it strains** (2.2). Close the ring under transitivity and it becomes universal, restoring 4 and 5 at once. An S5 defender reads the ring as misdescribing metaphysical possibility; someone who models accessibility as similarity within a threshold, which is reflexive and symmetric but not transitive, reads the ring as the honest shape and pays with 4 and 5 together.
- **The siblings' claim.** [`philosophy-of-religion` 2.2](../philosophy-of-religion/lessons/02-02-the-modal-ontological-argument.md) asserts that B suffices for the modal ontological argument; 2.2 says which frames that claim is about.

*Lessons:* [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md)

### System S4

**K plus T and 4. Sound and complete for reflexive transitive frames: preorders, as in [`mathematical-logic` 4.1](../mathematical-logic/lessons/04-01-relations-orderings-well-ordering.md).** S4 and S5 go back to Lewis and Langford's *Symbolic Logic* (1932) (2.2).

- **Proves neither B nor 5:** a preorder need not be symmetric or Euclidean.
- **Fourteen modalities** (William Parry, 1939): every string of boxes, diamonds and negations in front of $p$ reduces to one of $p$, $\Box p$, $\Diamond p$, $\Box\Diamond p$, $\Diamond\Box p$, $\Box\Diamond\Box p$, $\Diamond\Box\Diamond p$ or their negations ([modal reduction laws](#modal-reduction-laws)).
- **For knowledge,** Hintikka (1962) accepted T and 4 and rejected 5 (2.3).
- **For metaphysical necessity,** Salmon ("The Logic of What Might Have Been", 1989) argues the logic is not S4 ([tolerance argument](#tolerance-argument)).

*Lessons:* [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.3](lessons/02-03-which-logic-for-which-modality.md)

### System S5

**K plus T and 5; equivalently T, B and 4, or S4 plus B. Sound and complete for equivalence frames, and equally for universal frames.** From Lewis and Langford (1932) (2.2).

- **Equivalence or universal** (2.2). Truth at $w$ depends only on worlds reachable from $w$ by chains of $R$. In an equivalence frame those are exactly $w$'s class $[w]$ ([`discrete-mathematics` 2.2](../discrete-mathematics/lessons/02-02-relations-equivalence-and-order.md)'s partition theorem), within which every world sees every world. So the two classes validate the same formulas; philosophy-of-religion 2.2's "every world can see every world" is the universal reading.
- **Only the last operator counts** (2.3 T2): $\Diamond\Box p \leftrightarrow \Box p$ and $\Box\Diamond p \leftrightarrow \Diamond p$, leaving six modalities ([modal reduction laws](#modal-reduction-laws)).
- **Readings** (2.3). The usual logic of [metaphysical necessity](#metaphysical-necessity), contested by the [tolerance argument](#tolerance-argument); the logic of knowledge when $R$ is indistinguishability.
- **With quantifiers** (2.4). Quantified S5 with one domain shared by all worlds and classical quantifier rules proves the [Barcan formula](#barcan-formula) (Prior 1956). S5's frames alone say nothing about domains, and an S5 frame with varying domains refutes it.
- **2.5's convention:** every world sees every world (an S5 frame), with constant domains.
- **Trap: S5 does not make $\Diamond p$ equivalent to $p$ or to $\Box p$.** Only strings ending in the same operator collapse. The gloss that the modal ontological argument's premise is equivalent to its conclusion in S5 needs the argument's own premise $\Box(G \to \Box G)$ (2.3).
- **Trap: S5 does not need every world to see every world;** equivalence frames validate the same formulas, because a world sees only its own class.

*Lessons:* [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.3](lessons/02-03-which-logic-for-which-modality.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md)

### Soundness and completeness

**Sound for a class of frames: every theorem is valid on every frame in the class (the axioms never outrun their frames). Complete: every formula valid on every frame in the class is a theorem (the frames never outrun the axioms).** The terms are [`mathematical-logic` 1.4](../mathematical-logic/lessons/01-04-proof-system-completeness.md)'s; 2.2 T2 states the modal cases, cited and not proved.

| System | Axioms beyond K | Theorems are exactly the formulas valid on every |
|---|---|---|
| K | none | frame |
| T | T | reflexive frame |
| B | T, B | reflexive symmetric frame |
| S4 | T, 4 | reflexive transitive frame |
| S5 | T, 5 (or T, B, 4) | equivalence frame (or universal frame) |

- **Soundness** follows from the correspondence proofs plus 2.1's result that modus ponens and necessitation preserve validity. **Completeness:** Kripke's 1963a paper proved it for T, S4, B and S5; K's is a standard result (SEP "Modal Logic", §6). 2.2's map labels D with serial frames.
- **Provability logic** (2.3): GL is complete for transitive frames with no infinite forward chain (Segerberg, 1971), and, by Solovay's theorem (1976), for what PA proves about its own provability.
- **How the lessons use it.** By soundness, one countermodel on a frame of the class shows a formula is not a theorem; by completeness, validity on every frame of the class shows it is.
- **Trap: correspondence is not completeness.** Some systems are incomplete for the frames their axioms define (SEP "Modal Logic", §14).

*Lessons:* [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md)

### Metaphysical necessity

**Necessity in the sense of every way things could have been: the alethic box whose logic is disputed. The usual logic is S5.** The rung itself is [`metaphysics` 3.1](../metaphysics/lessons/03-01-kinds-of-necessity.md)'s; 2.3 asks which logic it gets.

- **The S5 premise** (2.2, 2.3). What is possible does not depend on which world is actual: what is possible at all is possible from every world. Alvin Plantinga (*The Nature of Necessity*, 1974) holds that no state of affairs is only contingently possible.
- **The objection.** Hugh Chandler's [tolerance argument](#tolerance-argument) (1976), taken up by Nathan Salmon ("The Logic of What Might Have Been", 1989): possibility is relative to a starting world, so accessibility is not transitive, 4 fails, and the logic is not S4.
- **The replies named in the lessons.** Metaphysical possibility is possibility simpliciter, and the tolerance data are handled otherwise (2.2): a counterpart theorist lets the counterpart relation, which need not be transitive ([`metaphysics` 3.2](../metaphysics/lessons/03-02-what-possible-worlds-are.md)), absorb the chain; Dorr, Hawthorne and Yli-Vakkuri (*The Bounds of Possibility*, 2021) keep accessibility transitive by other means.
- **Concession on the S5 side** (2.2): S5 is a thesis about $R$, not a gift of logic.
- **T is not in dispute:** metaphysical necessity gets T (reflexivity) in every major treatment; 4 and 5 are the contested arrows (2.3's map).
- **Module 3 uses it whatever its logic turns out to be** (2.3): 3.3 takes every world to see every world.
- **Trap:** that metaphysical modality is S5 is a substantive claim about $R$, not a law of logic.

*Lessons:* [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.3](lessons/02-03-which-logic-for-which-modality.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md)

### Modal reduction laws

**Equivalences that collapse strings of boxes and diamonds in front of a sentence. S4 leaves fourteen distinct modalities, S5 six; T and B leave an endless tower.** 2.3 T1 and T2, settled.

- **S4** (2.3 T1). $\Box\Box p \leftrightarrow \Box p$ and $\Diamond\Diamond p \leftrightarrow \Diamond p$, from T and 4. $\Box\Diamond\Box\Diamond p \leftrightarrow \Box\Diamond p$ and $\Diamond\Box\Diamond\Box p \leftrightarrow \Diamond\Box p$, which need only 4: they hold on every transitive frame, reflexive or not, so in K4 and in GL too. Every string reduces to one of $p$, $\Box p$, $\Diamond p$, $\Box\Diamond p$, $\Diamond\Box p$, $\Box\Diamond\Box p$, $\Diamond\Box\Diamond p$ and their negations: fourteen (William Parry, *Journal of Symbolic Logic*, 1939).
- **S5** (2.3 T2). $\Diamond\Box p \leftrightarrow \Box p$ and $\Box\Diamond p \leftrightarrow \Diamond p$: only the last operator counts, leaving six modalities, $p$, $\Box p$, $\Diamond p$ and their negations.
- **The proof of the S5 laws.** Lemma: if $wRv$, then $w$ and $v$ see the same worlds ($vRu$ gives $wRu$ by transitivity; $wRu$ gives $vRu$ by Euclideanness). So $\Box\varphi$ and $\Diamond\varphi$ have the same value at $w$ as at every world $w$ sees. In each law one direction also needs $w$ to see some world.
- **So the S5 laws hold in KD45** (serial, transitive, Euclidean frames: the usual logic of belief): the proof uses transitivity, Euclideanness and seriality, and reflexivity only to supply seriality.
- **Siblings.** [`philosophy-of-religion` 2.2](../philosophy-of-religion/lessons/02-02-the-modal-ontological-argument.md) derived half of the first S5 law from axiom 5; its [2.4](../philosophy-of-religion/lessons/02-04-cosmological-arguments-sufficient-reason.md) Flashback refutes $\Diamond p \to \Diamond\Box p$. The S5 laws are what [`apologetics-foundations` 2.1](../apologetics-foundations/lessons/02-01-assembling-the-case.md) leans on.
- **Trap: the S5 laws do not make $\Diamond p$, $p$ and $\Box p$ equivalent.** Only strings ending in the same operator collapse.
- **Trap: the first-level S4 collapses need T; the second-level ones need only 4.**

*Lessons:* [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Deontic logic

**The logic of "it ought to be that" ($O$) and "it may be that" ($P$, its dual): a box over the worlds where every obligation in force is met.** Georg Henrik von Wright, "Deontic Logic" (*Mind*, 1951). Standard deontic logic (SDL) is K plus [D](#axiom-d) (2.3).

- **Its frames are serial, not reflexive.** T fails: obligations get broken, and hallways stay green. D holds: obligations can be met together. 4 and 5 are not in SDL.
- **2.3 Example 1 (Ingrith's lease).** Ingrith Lowther must repaint the hallway before leaving ($r$), in any colour, and leaves without repainting. $W = \{w_0, w_1, w_2\}$; $w_0$ sees $w_1$ and $w_2$, each of which sees both; $r$ is true at $w_1$ and $w_2$, and the hallway is cream ($c$) at $w_1$ only. $Or$ is true and $r$ false at $w_0$: the obligation stands while broken, so T fails, while D holds on this serial frame. $Pc$ is true and $Oc$ false at every world: cream is permitted, not obligatory. The frame is also transitive and Euclidean, so it validates 4 and 5: a fact about the frame, not about SDL.
- **Costs of a normal $O$.** [Ross's paradox](#rosss-paradox); conflicting obligations true together only at a [dead end](#dead-end-world), where everything is obligatory ("deontic explosion", 2.1). The SDL defender holds that all-things-considered obligations never conflict; the dilemma theorist trades aggregation or inheritance for a conflict-tolerant logic (2.1). 2.5's Flashback tests, against SDL, the step from "you may do $k$ or $t$" to "you may do $t$".
- **The normality premise and its defence** ([normal modal logic](#normal-modal-logic)): normality idealizes what a code settles, and the oddities are pragmatic (Castañeda, 1981).
- **Trap: D is "ought implies may",** not [ought implies can](#ought-implies-can).
- **Trap: a frame that validates 4 and 5 does not put them into SDL** ([validity on a frame](#validity-on-a-frame)).

*Lessons:* [2.3](lessons/02-03-which-logic-for-which-modality.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md)

### Ought implies can

**Kant's principle that one is obliged only to what one can do: $Op \to \Diamond p$, with $\Diamond$ alethic.** It needs two operators, deontic $O$ and alethic $\Diamond$ (2.3).

- **Where it is used:** a premise of Kant's moral argument in [`philosophy-of-religion` 3.3](../philosophy-of-religion/lessons/03-03-moral-arguments.md). No ethics lesson treats it.
- **Trap: it is not axiom D.** D, $Op \to Pp$, is "ought implies may": it relates $O$ to its own dual $P$, and needs no second operator ([axiom D](#axiom-d)).

*Lessons:* [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Normal modal logic

**A modal logic that contains the K axiom and is closed under necessitation. K is the smallest; every logic given by a class of Kripke frames is normal.** (2.1, 2.3)

- **What normality alone brings** (2.3, 2.1). [Ross's paradox](#rosss-paradox); [logical omniscience](#logical-omniscience), since a normal $K$ knows every theorem and every consequence of what it knows; agglomeration, $\Box p \wedge \Box q \to \Box(p \wedge q)$; and deontic explosion at conflicting obligations ([dead-end world](#dead-end-world)).
- **Not every modal operator is normal.** [`metaphysics` 6.1](../metaphysics/lessons/06-01-determinism-and-the-consequence-argument.md)'s transfer operator $N$ fails agglomeration, $Np \wedge Nq \to N(p \wedge q)$, so it is not normal at all. Lewis's S2 and S3 lack full necessitation (2.1).
- **The premise every reading shares** (2.3, Where the argument is weakest): that its box is normal, which lets a frame condition settle the logic.
- **The reply.** Normality idealizes what a code or a body of information settles, and the oddities are pragmatic: no one who knew the letter must be posted would say "post it or burn it" (Héctor-Neri Castañeda, 1981).
- **Concessions.** The critic grants that the alternatives, such as neighbourhood semantics, lose the frame correspondence 2.3 runs on; the defender grants that the logic describes ideal codes and knowers.

*Lessons:* [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Ross's paradox

**In any normal deontic logic, "you ought to post the letter" entails "you ought to post it or burn it".** Alf Ross (1941) (2.3).

- **Derivation.** $m \to (m \vee b)$ is a tautology ($m$: the letter is posted; $b$: it is burned). Necessitation and K give $Om \to O(m \vee b)$. Normality alone suffices; no frame condition enters.
- **Replies** (2.3). Pragmatic: the oddity is in what it would be strange to say, not in what follows (Castañeda, 1981). Or give up normality, and with it frame correspondence ([normal modal logic](#normal-modal-logic)).
- **Trap: it is Alf Ross's,** not W. D. Ross's; W. D. Ross's prima facie duties are [`ethics` 5.3](../ethics/lessons/05-03-pluralism-and-particularism.md)'s.

*Lessons:* [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Epistemic logic

**The logic of "the agent knows that" ($K$): a box over the worlds the agent cannot rule out.** [`epistemology` 1.3](../epistemology/lessons/01-03-why-knowledge.md)'s $K$ is a box (2.3).

- **T holds:** knowledge is factive; you cannot rule out the truth.
- **4 is [positive introspection](#positive-introspection),** the KK principle: Jaakko Hintikka accepted it (*Knowledge and Belief*, 1962); Timothy Williamson's margin-for-error argument rejects it (*Knowledge and Its Limits*, 2000, ch. 5).
- **5 is [negative introspection](#negative-introspection):** Hintikka rejected it.
- **The indistinguishability reading.** Let $R$ link worlds where the agent's evidence is the same; $R$ is then an equivalence relation, and knowledge is S5. That is the standard in computer science (Fagin, Halpern, Moses and Vardi, *Reasoning About Knowledge*, 1995) and the logic behind [`distributed-systems` 1.1](../distributed-systems/lessons/01-01-why-distributed-systems-are-hard.md)'s indistinguishability principle.
- **Belief:** KD45 is the usual logic of belief; the S5 reduction laws hold in it ([modal reduction laws](#modal-reduction-laws)).
- **2.3 Example 2 (Sabeline's parcel).** Sabeline Corvo's phone shows a parcel on her step ($p$). At the actual world $w_0$ the photo is stale and no parcel came; at $w_1$ and $w_2$ it is today's, the parcel in two different spots. $w_0$ sees all three worlds; $w_1$ and $w_2$ see each other and themselves; $p$ is true at $w_1$ and $w_2$. The frame is reflexive and transitive, not Euclidean. At $w_0$, $Kp$ is false and so is $K\neg Kp$, since $w_0$ sees $w_1$, where $Kp$ is true: 5 fails.
- **Where it strains** (2.3). The indistinguishability theorist says her evidence, the screen, is the same at all three worlds, so $R$ is universal: $Kp$ is false everywhere and 5 holds. The externalist ([`epistemology` 1.4](../epistemology/lessons/01-04-internalism-and-externalism.md)) says the good case gives her more than the screen. The model computes $Kp$ once $R$ is fixed; whether good and bad cases share her evidence, it cannot say.
- **The cost of a normal $K$:** [logical omniscience](#logical-omniscience).
- **Trap: the operator $K$ is not the axiom or the system K** ([system K](#system-k)).

*Lessons:* [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Positive introspection

**Axiom 4 read as knowledge: $Kp \to KKp$, if you know, you know that you know. The KK principle; it corresponds to transitivity.** (2.3)

- **Hintikka accepted it** (*Knowledge and Belief*, 1962).
- **Williamson rejects it** (*Knowledge and Its Limits*, 2000, ch. 5) by a margin-for-error argument, run in [`epistemology` 1.3](../epistemology/lessons/01-03-why-knowledge.md). The relation "within margin $m$ of", $|x - x'| \le m$, is reflexive and symmetric but not transitive: a frame on which 4 fails.
- **Vagueness:** 5.5 returns to margin-for-error principles for vague predicates ([margin-for-error principle](#margin-for-error-principle)).
- **Trap: not negative introspection,** which is axiom 5.

*Lessons:* [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Negative introspection

**Axiom 5 read as knowledge: $\neg Kp \to K\neg Kp$, if you do not know, you know that you do not know. It corresponds to Euclideanness.** (2.3)

- **Hintikka rejected it** (1962). A state in which you know more is an alternative to your present one, but not conversely; so $R$ is not symmetric, and, with T, not Euclidean (a reflexive Euclidean relation is symmetric: 2.2's L1).
- **It holds** when $R$ is indistinguishability (an equivalence relation: knowledge S5), and for belief in KD45.
- **It fails in the bad case** of 2.3 Example 2: at $w_0$ she does not know $p$, and does not know that she does not know ([epistemic logic](#epistemic-logic)).

*Lessons:* [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Provability logic

**The modal logic of "it is provable in PA that". Read $\Box\varphi$ as $\operatorname{Prov}_{\mathsf{PA}}(\ulcorner\varphi\urcorner)$; the system GL is K plus [Löb's theorem](#lobs-theorem) as an axiom, $\Box(\Box p \to p) \to \Box p$.** Provability has no worlds, yet obeys a modal logic (2.3).

- **The derivability conditions,** which [`mathematical-logic` 5.2](../mathematical-logic/lessons/05-02-second-theorem-undecidability.md) names, in Martin Löb's 1955 form: necessitation (if $\mathsf{PA} \vdash \varphi$ then $\mathsf{PA} \vdash \operatorname{Prov}_{\mathsf{PA}}(\ulcorner\varphi\urcorner)$), K and 4. So 4 is a theorem of GL.
- **T cannot be added** (2.3, five lines):
  1. $\Box\bot \to \bot$. *T, with $\bot$ for $p$.*
  2. $\Box(\Box\bot \to \bot)$. *Necessitation on 1.*
  3. $\Box(\Box\bot \to \bot) \to \Box\bot$. *Löb's axiom, with $\bot$ for $p$.*
  4. $\Box\bot$. *2, 3, modus ponens.*
  5. $\bot$. *1, 4, modus ponens.*

  Line 1 says that PA is consistent, line 2 that PA proves it: the step the second incompleteness theorem forbids.
- **Completeness.** GL is complete for transitive frames with no infinite forward chain, hence with no world that sees itself (Krister Segerberg, 1971), and, by Robert Solovay's theorem (1976), for what PA proves about its own provability.
- **2.3's map:** for provability, T and D fail; 4 and Löb hold.
- **Trap: T fails not because PA might prove falsehoods.** Every instance of $\operatorname{Prov}_{\mathsf{PA}}(\ulcorner\varphi\urcorner) \to \varphi$ is true if PA is sound; what fails is that PA proves them. The logic of what PA proves about provability is not the logic of what is true about it.

*Lessons:* [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Lob's theorem

**If PA proves "if $\varphi$ is provable then $\varphi$", it already proves $\varphi$.** Martin Löb (1955); used in [`mathematical-logic` 5.1](../mathematical-logic/lessons/05-01-incompleteness-first-theorem.md), Example 1. As a modal axiom it is GL's characteristic axiom (2.3):

$$\Box(\Box p \to p) \to \Box p$$

- **No world of a GL frame sees itself:** GL is complete for transitive frames with no infinite forward chain (Segerberg, 1971), and a world that sees itself is such a chain. 2.3 P2(b) shows directly what goes wrong at such a world.
- **With T it is inconsistent,** since together they make PA prove its own consistency.

*Lessons:* [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Tolerance argument

**Hugh Chandler's argument that metaphysical possibility is not transitive: small variations in an artefact's origin, each possible from the last, chain into one it could not have had.** Chandler, "Plantinga and the Contingently Possible" (*Analysis*, 1976), against Plantinga's view (1974) that no state of affairs is only contingently possible (2.3).

- **Skeleton** (2.3). **P1** A bicycle could have originated with one part different. **P2** Had it done so, that bicycle could have originated with one more part different, and so on. **P3** It could not have originated from wholly different parts. **∴ C** Some origin is possibly possible but not possible, so 4 fails, and with it S5.
- **Salmon** ("The Logic of What Might Have Been", 1989) argues that the logic of metaphysical modality is not S4.
- **What it grants:** every world sees itself (T); it denies that views chain (2.2 Example 1).
- **Replies named in the lessons** (2.2, 2.3). Metaphysical possibility is possibility simpliciter, and the tolerance data are handled otherwise. A counterpart theorist lets the counterpart relation, which need not be transitive ([`metaphysics` 3.2](../metaphysics/lessons/03-02-what-possible-worlds-are.md)), absorb the chain. Dorr, Hawthorne and Yli-Vakkuri (*The Bounds of Possibility*, 2021) keep transitivity by other means.
- **Left to you** (Boss 2(b) and 2(e)): the frame that models the case, which instance of $\Diamond\Diamond p \to \Diamond p$ the premises jointly falsify, whether the case also reaches B, what follows for [`philosophy-of-religion` 2.2](../philosophy-of-religion/lessons/02-02-the-modal-ontological-argument.md)'s claim that the modal ontological argument goes through in B, and any verdict on Chandler and Salmon.

*Lessons:* [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Quantified modal logic

**Modal logic with quantifiers: each world gets a domain, and "there is", said at a world, ranges over a stated domain.** 2.4. A quantified Kripke model is $\mathcal M = \langle W, R, D, V\rangle$: $W$ and $R$ as in 2.1; a domain $D(w)$ for each world, generalizing [`mathematical-logic` 2.2](../mathematical-logic/lessons/02-02-structures-satisfaction.md)'s $|\mathcal M|$; and an extension $V(F, w)$ for each predicate $F$ at each world. $U$ is the union of all the domains, and an assignment $s$ sends variables into $U$. With [actualist quantifiers](#actualist-quantifier),

$$\mathcal M, w \models \forall x\,\varphi\,[s] \iff \text{for every } d \in D(w),\ \mathcal M, w \models \varphi\,[s[x\mapsto d]],$$

and dually for $\exists$; $\Box$ and $\Diamond$ are as in 2.1.

- **2.4's three conventions.** (i) $V(F, w) \subseteq D(w)$: nothing has a property at a world where it does not exist ([serious actualism](#serious-actualism)). (ii) $Ex := \exists y\,(y = x)$ ([existence predicate](#existence-predicate)). (iii) A domain may be empty, which `mathematical-logic` 2.2 forbids.
- **The design choice** (2.4). One global table of individuals that every history draws on, or one table per history ([constant and varying domains](#constant-and-varying-domains)). The [Barcan formula](#barcan-formula) and its [converse](#converse-barcan-formula) record which.
- **History.** Ruth C. Barcan's "A Functional Calculus of First Order Based on Strict Implication" (*Journal of Symbolic Logic*, 1946) was the first published quantified modal system. Kripke's "Semantical Considerations on Modal Logic" (1963b) gave the varying-domain semantics.
- **Strong and weak de re necessity** (2.4 Example 1). With varying domains, "necessarily $F$" said of $x$ splits: strong, $\Box Fx$ ($F$ at every accessible world), against weak, $\Box(Ex \to Fx)$ ($F$ at every accessible world where $x$ exists). 3.3 meets the same split for identity ([strong and weak necessity of identity](#strong-and-weak-necessity-of-identity)).
- **Trap: the propositional system says nothing about domains.** S5's frames do not decide whether the Barcan formula holds; classical quantifier rules, which presuppose one shared domain, do.

*Lessons:* [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md)

### Actualist quantifier

**A quantifier that, at a world, ranges only over what exists there, the domain $D(w)$: "everything", said at a world, means everything there.** 2.4's clause for $\forall$ ([quantified modal logic](#quantified-modal-logic)).

- **Contrast possibilist quantifiers,** which range over $U$, every world's things, at every world; they validate both the [Barcan formula](#barcan-formula) and its [converse](#converse-barcan-formula) on any frame (2.4 T1).
- **Empty worlds.** With actualist quantifiers, $\Diamond\forall x\,\neg Ex$ is true at $w$ just when some world $w$ sees has an empty domain, which is why 2.4 allows $D(w) = \varnothing$.
- **Module 3 uses them.** 3.1's Flashback runs line 1 of the Barcan derivation under 2.4's semantics; 3.3's mechanism lets actualist quantifiers range over $D(w)$ with every world seeing every world.
- **Trap: a formal choice, not a metaphysics.** Marcus defended the Barcan formula and a single domain *as* actualism, the one domain being the actual things; Williamson uses the same one-domain logic with the domain read as including contingently non-concrete things. The formal choice leaves the metaphysics open (2.4).

*Lessons:* [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md), [3.1](lessons/03-01-against-descriptivism.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md)

### Serious actualism

**Nothing has a property at a world where it does not exist: $V(F, w) \subseteq D(w)$, 2.4's convention (i).** Plantinga's name for it; Kripke ("Semantical Considerations on Modal Logic", 1963b) called it natural but did not impose it (2.4).

- **2.4's T1 and T2 hold either way:** the domain conditions for the Barcan formula and its converse, and Prior's derivation, do not depend on it.
- **It matters for the converse Barcan formula.** Under (i), the diamond form $\exists x\,\Diamond Fx \to \Diamond\exists x\,Fx$ with atomic $F$ is true on every model; without (i), which Fine and Pollock reject, it can fail wherever domains shrink. The box form fails even under (i) ([converse Barcan formula](#converse-barcan-formula)).
- **In 2.4 Example 1** the oak is not $F$ ("is a material object") at $w_1$, where it is nothing at all.
- **Course rule:** every statement of the converse Barcan formula says which form it uses and which predicate convention.

*Lessons:* [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md)

### Existence predicate

**"$x$ exists", defined as $Ex := \exists y\,(y = x)$: true of $x$ at $w$ iff $x$ is in $D(w)$.** 2.4's convention (ii), written $Ex$ as in [`metaphysics` 3.3](../metaphysics/lessons/03-03-brute-facts-and-necessary-existence.md).

- **Empty worlds.** With actualist quantifiers $\forall x\,\neg Ex$ is true at $w$ iff $D(w)$ is empty, so $\Diamond\forall x\,\neg Ex$ says some accessible world is empty.
- **Everything necessarily exists,** $\forall x\,\Box\exists y\,(y = x)$, is what the [converse Barcan formula](#converse-barcan-formula) yields with $\exists y\,(y=x)$ for $\varphi$; necessitated, it is [necessitism](#necessitism-and-contingentism).
- **The subtraction step located** (2.4). [`metaphysics` 3.3](../metaphysics/lessons/03-03-brute-facts-and-necessary-existence.md)'s subtraction argument moves from $\forall x\,\Diamond\neg Ex$ to $\Diamond\forall x\,\neg Ex$. That is neither BF nor CBF: it swaps $\forall$ with $\Diamond$, operators of unlike kinds, the modal twin of the invalid move from $\forall\exists$ to $\exists\forall$ ([`mathematical-logic` 2.3](../mathematical-logic/lessons/02-03-translation-quantifier-order.md)), and it fails even with one shared domain. With $Ex$ read as $\exists y\,(y = x)$, the premise that each thing might not have existed contradicts CBF outright, so a necessitist must read $E$ as concreteness.
- **Weak necessity** uses it: $\Box(Ex \to Fx)$, $F$ wherever $x$ exists (2.4 Example 1).
- **Trap: under necessitism** (one constant domain) $Ex$ is true of everything at every world, so contingent existence has to be restated with a concreteness predicate.

*Lessons:* [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md)

### Constant and varying domains

**Constant: every world has the same domain. Varying: each world has its own, which may grow or shrink along $R$.** 2.4. Domains are *increasing* if $wRv$ implies $D(w) \subseteq D(v)$ (no departures) and *decreasing* if $wRv$ implies $D(v) \subseteq D(w)$ (no newcomers).

- **The picture** (2.4). A simulator of possible histories keeps one global table of individuals that every history draws on, or one table per history, so that the oak that grew in one history has no row at all in the history where its acorn was eaten.
- **Correspondence, settled** (2.4 T1). The Barcan formula, as a schema, is valid on a frame with domains iff the domains are decreasing; the converse Barcan formula iff they are increasing; constant domains validate both. On a symmetric frame "never grows" and "never shrinks" coincide, so in S5 the two stand or fall together. Both conditions hold with or without convention (i).
- **Constant domains are 2.5's convention.** With varying domains, and an identity counted false where its object is absent, only a weak form of the [necessity of identity](#necessity-of-identity) survives (2.5; 3.3's [strong and weak necessity of identity](#strong-and-weak-necessity-of-identity)).
- **Rigidity.** Varying domains are where persistent and obstinate rigidity come apart (3.2; [persistent and obstinate rigidity](#persistent-and-obstinate-rigidity)).
- **Trap: rigidity is not necessary existence.** Whether $a$ exists at every world is a fact about domains, and only necessitism says yes for everything (2.4).

*Lessons:* [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md)

### Barcan formula

**If there could have been a $\varphi$, something could have been $\varphi$; equivalently, if each thing is necessarily $\varphi$, then necessarily everything is $\varphi$.** The two forms are equivalent as schemas (put $\neg\varphi$ for $\varphi$ and contrapose):

$$\textbf{BF:}\quad \Diamond\exists x\,\varphi \to \exists x\,\Diamond\varphi \qquad\text{or}\qquad \forall x\,\Box\varphi \to \Box\forall x\,\varphi$$

- **History** (2.4). Ruth C. Barcan (later Barcan Marcus) took it as an axiom of the first published quantified modal system (1946), built on C. I. Lewis's S2, which could not prove it. Arthur Prior named it "the Barcan formula" in 1956.
- **Domain condition, settled** (2.4 T1). Valid on a frame with domains iff domains never grow along $R$: $wRv$ implies $D(v) \subseteq D(w)$. BF forbids newcomers; it fails when a world gains something, such as a possible daughter who is no actual thing.
- **Prior's theorem** ("Modality and Quantification in S5", 1956). In quantified S5 with the classical quantifier rules, BF is a theorem. Of S5 the eight-line derivation uses only K, necessitation and [B](#axiom-b) (2.4 T2). Its line 1 is universal instantiation (UI) with $x$ free: $\forall x\,\Box Fx \to \Box Fx$.
- **Where the derivation is weakest: line 1** (2.4). The contingentist's objection (Kripke's, model-theoretically): when things come and go, a free $x$ can denote something absent from the world of evaluation, so line 1 is invalid; the derivation assumes necessitism and cannot support it. Kripke's 1963b logic admits only closed formulas as theorems, so UI enters as $\forall y\,(\forall x\,\Box Fx \to \Box Fy)$; necessitating it gives $\Box\forall y\,(\ldots)$, which cannot be moved inside $\forall y$ without box-form CBF. Prior's own system Q (*Time and Modality*, 1957) restricts necessitation instead. The necessitist replies that the repaired logics are weaker and more complicated, which on an abductive view counts against them.
- **2.4 Example 2 (the sister who never was).** An only child $q$ could have had a sister: $\Diamond\exists x\,Sx$. BF gives $\exists x\,\Diamond Sx$. Add origin essentialism (disputed: [`metaphysics` 2.4](../metaphysics/lessons/02-04-essence-and-grounding.md)) and "nothing non-human could have been human". The necessitist keeps BF: the witness is something non-concrete that could have been her sister. The contingentist says BF is false here: the sister is a newcomer. The sides agree on every fact about what is concrete where.
- **Trap: BF is not a theorem of S5 as such.** It is a theorem of S5 plus classical quantifier rules, which presuppose one shared domain; S5's frames say nothing about domains, and an S5 frame with varying domains refutes it.
- **Trap: "there could have been more things than there actually are"** ([`metaphysics` 3.2](../metaphysics/lessons/03-02-what-possible-worlds-are.md)) conflicts with BF itself, not with its converse: a world with more things has a newcomer.
- **Left to you** (Boss 2(c)): the countermodel on an S5 frame, its domains and extensions, and what it shows about "there could have been something that is F". The card gives only the domain condition.

*Lessons:* [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md), [3.1](lessons/03-01-against-descriptivism.md)

### Converse Barcan formula

**If something could have been $\varphi$, there could have been a $\varphi$; equivalently, if necessarily everything is $\varphi$, then each thing is necessarily $\varphi$.** The diamond form and the box form are equivalent as schemas:

$$\textbf{CBF:}\quad \exists x\,\Diamond\varphi \to \Diamond\exists x\,\varphi \qquad\text{or}\qquad \Box\forall x\,\varphi \to \forall x\,\Box\varphi$$

- **Domain condition, settled** (2.4 T1). Valid on a frame with domains iff domains never shrink along $R$: $wRv$ implies $D(w) \subseteq D(v)$. CBF forbids departures; it fails when a world loses something, such as the oak.
- **Provable without B** (2.4). UI gives $\forall x\,Fx \to Fx$; necessitation and K give $\Box\forall x\,Fx \to \Box Fx$; generalization gives $\Box\forall x\,Fx \to \forall x\,\Box Fx$. Barcan proved it in her 1946 system. Put $\exists y\,(y = x)$ for $Fx$: the antecedent is a theorem, so $\forall x\,\Box\exists y\,(y = x)$ follows, and necessitation gives [necessitism](#necessitism-and-contingentism).
- **Name the form and the predicate convention** (2.4 Watch out):
  - *Diamond form, atomic $F$, under convention (i)* (extensions inside domains: [serious actualism](#serious-actualism)): true on every model, so checking it tells you nothing about the domains. Boss 2(c) states CBF in this form and under this convention.
  - *Diamond form without (i)* (Fine and Pollock reject (i)): can fail wherever domains shrink.
  - *Box form:* fails even under (i), as do instances such as $\varphi := \neg\exists y\,(y = x)$, where CBF says that nothing that exists could have failed to exist.
- **2.4 Example 1 (the oak).** $W = \{w_0, w_1\}$, $R = \{(w_0,w_0), (w_0,w_1), (w_1,w_1)\}$: reflexive and transitive, not symmetric, an S4 frame. At $w_1$ the acorn was eaten: $D(w_0) = \{\text{oak}, \text{stone}\}$, $D(w_1) = \{\text{stone}\}$. $F$ is "is a material object", true of each thing where it exists. At $w_0$, $\Box\forall x\,Fx$ is true and $\forall x\,\Box Fx$ false, since the oak is not $F$ at $w_1$, where it is nothing at all. So CBF in its box form under convention (i) is false at $w_0$ and true at $w_1$; BF holds at both worlds for every valuation, since the domains never grow.
- **The weak version is valid on every frame** (2.4 Example 1): $\Box\forall x\,Fx \to \forall x\,\Box(Ex \to Fx)$. CBF fails for the strong reading $\Box Fx$, not for the weak $\Box(Ex \to Fx)$. (The weak necessity $\forall x\,\Box(Ex \to Fx)$ itself is true at both worlds of Example 1, but it is the weak converse that is valid.)
- **Counterpart theory validates CBF** in both forms and for every formula, however the worlds' populations differ: each counterpart is evaluated in its own world, where it exists, so the predicate convention never comes into play (2.5; [counterpart theory](#counterpart-theory)).
- **Trap: "something that exists could have failed to exist"** conflicts with CBF, not with BF: it needs a departure.

*Lessons:* [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md)

### Necessitism and contingentism

**Necessitism: necessarily, everything is necessarily something, $\Box\forall x\,\Box\exists y\,(y = x)$. Contingentism: its denial; you might not have been anything at all.** Timothy Williamson's terms (*Modal Logic as Metaphysics*, 2013) (2.4).

- **How the simplest logic gets there** (2.4): the [converse Barcan formula](#converse-barcan-formula) with $\exists y\,(y = x)$ for $\varphi$, then necessitation. The simplest quantified modal logic proves that nothing could have failed to be something.
- **The necessitist** keeps the simplest, strongest logic (one domain, classical rules, S5) and argues abductively that its simplicity and strength are evidence. The price: a merely possible daughter *is* something now, not concrete but able to have been; Williamson describes such things as contingently non-concrete. "I might not have existed" must be reread as "I might not have been concrete".
- **The contingentist** keeps the datum that you might not have been anything, and pays in logic: varying domains with Kripke's restriction to closed theorems (1963b), or Prior's Q, which restricts necessitation. The necessitist replies that the repaired logics are weaker and more complicated, and that Kripke's model theory quantifies over $U$, every world's things, so read at face value it already talks about merely possible objects (SEP "The Possibilism-Actualism Debate", §4.1.4).
- **Concessions** (2.4). The contingentist concedes a more complicated logic and an owed reading of its semantics; the necessitist concedes that "I might not have existed" must be reread, and that there are things that are not concrete but could have been people.
- **What the dispute is about** (2.4 Example 2): the sides agree on every fact about what is concrete where, and disagree only over whether "there is" ranges over the possible sister.
- **Marcus** read the Barcan formula as actualism: one domain, and it is the actual things.
- **Theism** (2.4 Sideways). Under necessitism every thing is necessarily something, so for necessary existence to mark God off from everything else ([`philosophy-of-religion` 2.1](../philosophy-of-religion/lessons/02-01-anselms-ontological-argument.md), [2.2](../philosophy-of-religion/lessons/02-02-the-modal-ontological-argument.md)), the theist's claim must be read as necessary concreteness or existence in some stronger sense.

*Lessons:* [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md)

### De re and de dicto

**A de dicto modal claim is about a proposition: the box governs a whole closed sentence. A de re claim is about a thing however it is named: a variable inside the box is bound from outside it.** 2.5's definition: a formula is *de dicto* if every box in it governs a closed sentence, *de re* if some variable inside a box is bound from outside it ([quantifying in](#quantifying-in)).

- **2.5's example.** "Necessarily, the winner won", read de dicto, says that in every outcome whoever wins wins: trivially true. Read de re, it picks out the person who in fact won and says *she* could not have lost: false.
- **2.5 Example 1 (the justices).** "Nine is necessarily odd; the number of justices is nine; so the number of justices is necessarily odd." Congress fixes the number by statute: nine now, six in 1789, so let $w_1$ be a world where it is six. With $Jx$ "$x$ numbers the justices" and $Ox$ "$x$ is odd", the narrow (de dicto) conclusion $\Box\,\exists x\,(Jx \wedge \forall y\,(Jy \to y = x) \wedge Ox)$ is false at $w_0$, because the unique $J$-thing at $w_1$ is 6; the wide (de re) conclusion $\exists x\,(Jx \wedge \forall y\,(Jy \to y = x) \wedge \Box\,Ox)$ is true at $w_0$, because 9 is odd at both worlds.
- **The concept and the planets countermodel** are [`metaphysics` 3.1](../metaphysics/lessons/03-01-kinds-of-necessity.md)'s; 2.5 asks whether the de re reading makes sense at all (Quine's challenge: [referential opacity](#referential-opacity), [Aristotelian essentialism](#aristotelian-essentialism)).
- **3.1** reads the wide-scope reply to Kripke's modal argument as the de re reading ([wide-scope descriptivism](#wide-scope-descriptivism)).
- **Trap: not the scholastic distinction** between the [necessity of the consequence](#necessity-of-the-consequence) and of the consequent. They share the scope point, but that one can be drawn in propositional modal logic; de re in Quine's sense needs a variable bound from outside the box.

*Lessons:* [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md), [3.1](lessons/03-01-against-descriptivism.md)

### Quantifying in

**A quantifier outside a modal or attitude operator binding a variable inside it, as in $\exists x\,\Box Fx$. It is what makes a claim de re.** Quine's target ("Notes on Existence and Necessity", 1943; "Reference and Modality", 1953) (2.5).

- **Quine's P2:** a variable reaches a position only through the object assigned to it, so there is no quantifying into an opaque position. In $\exists x\,\Box(x > 7)$, which number is it, nine or the number of planets? They are the same number, and the box treats them differently.
- **In belief reports** (1.2, 1.3). Quine's relational report, "someone is such that Ralph believes he is a spy", binds from outside a place that Frege's account (1.2's P3) says refers to a sense ([relational and notional belief](#relational-and-notional-belief)). With an attitude verb, Russell's primary reading puts $\mathrm{Bel}_s[G(x)]$ inside the quantifiers, binding $x$ from outside the attitude (1.3). 1.4 meets the same problem in a reader's sentence.
- **Smullyan's true reading quantifies in.** The wide reading of "the number of planets is necessarily greater than 7" puts the box inside $\exists x$ ([Smullyan's reply](#smullyans-reply)).
- **What it commits you to.** Quine's P3: only [Aristotelian essentialism](#aristotelian-essentialism) makes it intelligible. The [necessity of identity](#necessity-of-identity) shows what it commits you to, and [counterpart theory](#counterpart-theory) the price of escaping that (2.5).
- **Trap: a box over closed sentences involves none.** $\Box(p \to q)$ against $p \to \Box q$ is a scope contrast without quantifying in ([necessity of the consequence](#necessity-of-the-consequence)).

*Lessons:* [1.2](lessons/01-02-belief-reports-and-empty-names.md), [1.3](lessons/01-03-russells-theory-of-descriptions.md), [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md)

### Referential opacity

**Quine's term for a position in a sentence where co-referring terms cannot be swapped without changing the truth value.** Quine's P1 (2.5): "9 = the number of planets" and "necessarily, 9 > 7" are true, yet "necessarily, the number of planets > 7" is false, so [substitutivity](#substitutivity-salva-veritate) fails inside the box. Nine planets in 1943; the IAU's 2006 definition of "planet" made it eight.

- **Quine's worry, plainly** (2.5). Whether a thing has a trait should not depend on what you call it. "Necessarily greater than 7" seems to come and go with the name, so it is not a trait of the thing, and asking of a thing, bare, whether it is necessarily so has no answer.
- **One phenomenon, several names** (1.2). Frege's [indirect context](#indirect-context), Quine's referential opacity and the "opaque context" of [`metaphysics` 5.3](../metaphysics/lessons/05-03-coincidence-and-the-ship-of-theseus.md) name one phenomenon. In 2.5, Quine finds the substitution failure behind Frege's indirect contexts inside "necessarily".
- **Quine's argument builds on it:** P1 opacity, then P2, no [quantifying in](#quantifying-in) to opaque positions.
- **Smullyan's reply denies that the modal case is a fact about positions:** the failure is a scope ambiguity of descriptions, and names substitute freely ([Smullyan's reply](#smullyans-reply)).
- **The term survives in programming:** in [`programming-languages` 6.2](../programming-languages/lessons/06-02-state-references-and-the-store.md), "referential transparency" is lost once equals cannot be substituted for equals.
- **Trap: opacity names the failure, not an explanation of it.** Indirect reference is one explanation, Frege's, offered for attitude contexts (1.2).

*Lessons:* [1.2](lessons/01-02-belief-reports-and-empty-names.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md)

### Aristotelian essentialism

**Quine's name for the doctrine that an object, independently of how it is specified, has some traits necessarily and others contingently.** The label is from "Reference and Modality" (1953); "Three Grades of Modal Involvement" (1953) states it as the truth of sentences of the form (2.5)

$$\exists x\,(\Box Fx \wedge Gx \wedge \neg\Box Gx).$$

- **In Quine's argument** (2.5). P3: quantifying in is intelligible only given it. P4: it is unintelligible, as the [mathematical cyclist](#mathematical-cyclist) shows. So quantified modal logic over objects is unintelligible or committed to an indefensible essentialism.
- **Quine read Barcan's theorem,** the [necessity of identity](#necessity-of-identity), as essentialism showing through.
- **Even Smullyan's true reading needs some.** In 2.5 Example 1 the wide reading needed 9 itself, however named, to be odd at every world: an essentialist claim, if a mild one, and one Quine still refused.
- **Replies** (2.5's map). Marcus and Kripke hold essentialism intelligible, denying P4; Marcus ("Essentialism in Modal Logic", 1967; "Essential Attribution", 1971) argued that what quantified modal logic itself proves is only trivial essentialism, such as being necessarily identical to oneself. Lewis makes essence relative to a similarity relation, denying P3 ([counterpart theory](#counterpart-theory)).
- **Trap: Fine's claim that essence is not modal at all** ([`metaphysics` 2.4](../metaphysics/lessons/02-04-essence-and-grounding.md)) is a different answer to Quine, not this doctrine.

*Lessons:* [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md)

### Mathematical cyclist

**Quine's case against essentialism: mathematicians are necessarily rational and not necessarily two-legged; cyclists are necessarily two-legged and not necessarily rational. Of a man who is both, is he necessarily rational?** Quine, *Word and Object* (1960), cited without a section number (2.5).

- **Quine's verdict** (P4): no answer exists apart from a way of picking the man out, so [Aristotelian essentialism](#aristotelian-essentialism) is unintelligible.
- **The reply** (2.5's map): Marcus and Kripke hold that the question about the man himself is intelligible.
- **Trap: it is not another de dicto/de re countermodel.** Quine's point is that the de re question has no answer; that is a charge against essentialism, not against the substitution of terms ([de re and de dicto](#de-re-and-de-dicto)).

*Lessons:* [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md)

### Smullyan's reply

**Quine's substitution puzzle is a scope ambiguity: a definite description is no term at all, so it takes scope relative to the box, while a genuine name substitutes freely inside it.** Arthur Smullyan, "Modality and Description" (1948), applying Russell's [theory of descriptions](#theory-of-descriptions) (1.3); Ruth Barcan Marcus endorsed it in her 1948 review (2.5). "The $F$ is necessarily $G$" has two readings:

$$\text{narrow: }\Box\,\exists x\,\big(Fx \wedge \forall y\,(Fy \to y = x) \wedge Gx\big) \qquad \text{wide: }\exists x\,\big(Fx \wedge \forall y\,(Fy \to y = x) \wedge \Box\,Gx\big)$$

- **For Quine's sentence** the narrow reading is false and the wide one true. `metaphysics` 3.1 wrote the description as a world-relative term $n$; unpacked by Russell, its two formulas are these two readings, with the same values.
- **Substitution.** A name substitutes for a co-referring name inside the box; a description substitutes only into the wide reading. No position is opaque: the reply denies Quine's P1 as a claim about positions. 2.5 Example 1 runs the pattern ([de re and de dicto](#de-re-and-de-dicto)).
- **Trap: the true, wide reading quantifies in.** So the reply answers the substitution puzzle and leaves Quine's essentialism objection to be argued separately ([quantifying in](#quantifying-in), [Aristotelian essentialism](#aristotelian-essentialism)).
- **3.1** puts the same [scope](#scope) distinction to modal work in [wide-scope descriptivism](#wide-scope-descriptivism).

*Lessons:* [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md)

### Leibniz's law

**Identicals share everything: if $x = y$, whatever holds of $x$ holds of $y$.** As a schema, for any formula $\varphi(z)$ (2.5):

$$\forall x\,\forall y\,\big(x = y \to (\varphi(x) \to \varphi(y))\big)$$

[`metaphysics` 5.3](../metaphysics/lessons/05-03-coincidence-and-the-ship-of-theseus.md) states it for properties and owns it.

- **About objects, not expressions** (1.2, 1.4). A failed swap inside "believes that" does not refute it: that is [substitutivity](#substitutivity-salva-veritate), which is about expressions. Frege keeps both, since the names do not co-refer there.
- **Inside the box** (2.5). With $\varphi(z) := \Box(x = z)$, replacing only the second occurrence of $x$, the law gives line 2 of the [necessity of identity](#necessity-of-identity), the step `metaphysics` 5.3 marks as disputed; 3.3's D1 rests on it.
- **Counterpart theory keeps it for every non-modal formula;** what fails is substitution inside a box that sends each variable to its own counterpart. Lewis's 1983 postscripts: the box binds every variable in its scope, so the modal step is no proper instance of the law ([counterpart theory](#counterpart-theory)).
- **Vague identity** (5.5). Gareth Evans ("Can There Be Vague Objects?", 1978): if it is indeterminate whether $a = b$, then $b$ has a property $a$ lacks, being indeterminately identical to $a$, since $a$ is determinately identical to itself; so by Leibniz's law $a \neq b$, which Evans took to contradict the supposition.

*Lessons:* [1.2](lessons/01-02-belief-reports-and-empty-names.md), [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md)

### Necessity of identity

**Whatever is identical is necessarily identical: $\forall x\,\forall y\,(x = y \to \Box\,x = y)$.** A theorem of standard quantified modal logic; no frame condition is used, so it holds on every frame (2.5). The derivation:

1. $\forall x\,\Box(x = x)$. *$x = x$ is a theorem; the necessitation rule gives $\Box(x = x)$; generalize. Assumes the identity atom is true of each object at every world.*
2. $\forall x\,\forall y\,\big(x = y \to (\Box(x = x) \to \Box(x = y))\big)$. *[Leibniz's law](#leibnizs-law) with $\varphi(z) := \Box(x = z)$. Assumes the schema holds for formulas containing a box.*
3. $\forall x\,\forall y\,(x = y \to \Box\,x = y)$. *Lines 1 and 2, propositional logic under the quantifiers.*

- **History** (2.5). Barcan proved a version in 1947, in a second-order system; this three-line proof opens Kripke's "Identity and Necessity" (1971). Quine read Barcan's theorem as essentialism showing through.
- **Varying domains.** If domains vary and an identity counts as false where its object is absent, line 1 fails, and only $\forall x\,\forall y\,\big(x = y \to \Box(\exists z\,(z = x) \to x = y)\big)$ survives (2.5; 3.3's [strong and weak necessity of identity](#strong-and-weak-necessity-of-identity)).
- **Where the argument is weakest: line 2** (2.5). The objection: line 2 assumes that $\Box(x = z)$ expresses a property of whatever $z$ is assigned, however it is picked out, which Quine's P1 and P2 deny, so the derivation begs the question against Quine; Lewis adds that the box binds every variable in its scope. The reply: if variables range over objects, being necessarily identical to $x$ is a property like any other, and refusing the law for it makes modal predicates stand for different properties depending on the term they attach to, which concedes Quine's point. The defender concedes that the theorem is only as strong as the claim that de re predicates express properties of objects; the critic concedes either no quantifying in (Quine) or inconstant modal predicates and a substitution rule with a new proviso (Lewis).
- **Counterpart theory rejects line 2,** and with it line 3 ([counterpart theory](#counterpart-theory)); Lumpl and Goliath press the same point ([contingent identity](#contingent-identity)).
- **Module 3.** 3.2 asks which names behave like the derivation's variables, and states it beside the necessity of distinctness, $\forall x\,\forall y\,(x \neq y \to \Box\,x \neq y)$; 3.3 combines it with rigidity to get the [necessary a posteriori](#necessary-a-posteriori).
- **Trap: it is about objects, not sentences.** "The number of justices = 9" is true and contingent, because the description is not rigid. Only terms that pick out the same object at every world inherit the necessity: with 2.5's constant domains, the [rigid designators](#rigid-designator) of 3.2.
- **Trap: it says nothing about necessary existence.**

*Lessons:* [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md), [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md)

### Counterpart theory

**Nothing is in more than one world, so de re modal claims are made true by counterparts, similar things in other worlds: $a$ is necessarily $F$ iff every counterpart of $a$, in every world, is $F$.** David Lewis, "Counterpart Theory and Quantified Modal Logic" (1968); the ontology is [`metaphysics` 3.2](../metaphysics/lessons/03-02-what-possible-worlds-are.md)'s (2.5). The translation uses three primitives, $Wu$ ($u$ is a world), $Ixu$ ($x$ is in $u$) and $Cxy$ ($x$ is a counterpart of $y$); each thing is in one world and is its own counterpart:

$$\Box\varphi(x) \;\mapsto\; \forall u\,\forall x'\,\big((Wu \wedge Ix'u \wedge Cx'x) \to \varphi^{u}(x')\big)$$

and dually for $\Diamond$, where $\varphi^u$ restricts the quantifiers of $\varphi$ to things in $u$ and each free variable of $\varphi$ is sent to its own counterpart.
- **What it does to identity** (2.5). $\Box(x = x)$ says every counterpart of $x$ is itself: true. $\Box(x = y)$ says any counterpart of $x$ and any counterpart of $y$ in one world coincide, which fails, even with $x = y$, once $x$ has two counterparts in a world (Lewis held he might have been twins, had the fetus he grew from split). Then lines 2 and 3 of the [necessity of identity](#necessity-of-identity) fail, and $a = b \wedge \Diamond(a \neq b)$ comes out true.
- **Leibniz's law survives** for every non-modal formula; Lewis's 1983 postscripts say the box binds every variable in its scope, so the failing step is no proper instance of it ([Leibniz's law](#leibnizs-law)).
- **The converse Barcan formula** comes out valid, in both the box and the diamond form and for every formula, however the worlds' populations differ: each counterpart is evaluated in its own world, where it exists, so 2.4's predicate convention never comes into play.
- **Essence relative to similarity** (2.5's map): Lewis denies Quine's P3. His 1971 version lets "statue" and "clay" call up different counterpart relations ([contingent identity](#contingent-identity)).
- **Tolerance** (2.3). The counterpart relation need not be transitive, so a counterpart theorist can let it absorb Chandler's chain ([tolerance argument](#tolerance-argument)).
- **3.2's Flashback** applies the translation to twins and the necessity of distinctness.

*Lessons:* [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md), [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md)

### Contingent identity

**The claim that an identity can hold while it could have failed: $a = b \wedge \Diamond(a \neq b)$.** Allan Gibbard, "Contingent Identity" (1975) (2.5).

- **Lumpl and Goliath** (2.5 Example 2). A clay statue, Goliath, and its clay, Lumpl, begin and end together. Goliath could have been squashed into a ball while Lumpl survived. Gibbard says they are one thing, identical only contingently.
- **The standard derivation says there is no such thing:** if Lumpl is Goliath, necessarily so ([necessity of identity](#necessity-of-identity)).
- **Three ways out, and the logic picks none** (2.5). The constitution theorist keeps the theorem and counts two objects ([`metaphysics` 5.3](../metaphysics/lessons/05-03-coincidence-and-the-ship-of-theseus.md) owns that debate). Gibbard keeps one object, so the derivation must fail for these names; Lewis's 1971 version lets "statue" and "clay" call up different counterpart relations. A third option denies the modal difference itself. Identity, the modal difference and line 2 cannot all stand, and the derivation alone does not say which goes.
- **In counterpart theory** $a = b \wedge \Diamond(a \neq b)$ can come out true, when something has two counterparts in one world ([counterpart theory](#counterpart-theory)).
- **With non-rigid terms** an identity sentence can be contingent without any of this: "the number of justices = 9" (2.5). 5.5 compares Evans, who allowed vague identity statements with vague terms, to Kripke, who allowed contingent identities with non-rigid ones.

*Lessons:* [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md)

### Necessity of the consequence

**The scholastic contrast between the necessity of the consequence, $\Box(p \to q)$, where the whole conditional is necessary, and the necessity of the consequent, $p \to \Box q$, where its consequent is.** A scope distinction for a box over closed sentences (2.5).

- **Not de re in Quine's sense** (2.5 Watch out). [`philosophical-method` 3.2](../philosophical-method/lessons/03-02-distinctions-and-verbal-disputes.md) and [`metaphysics` 3.1](../metaphysics/lessons/03-01-kinds-of-necessity.md) file it under de re versus de dicto. The two share the scope point, but $\Box(p \to q)$ versus $p \to \Box q$ can be drawn in propositional modal logic, while de re in Quine's sense needs a variable bound from outside the box ([de re and de dicto](#de-re-and-de-dicto), [quantifying in](#quantifying-in)).

*Lessons:* [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md)

**Module 3: Names and necessity**

### Descriptivism

**A proper name is a description in disguise: "Gödel" means something like "the man who proved incompleteness" and refers to whoever fits.** 3.1's target. Its classical forms are Frege's [sense](#sense), which his footnote on "Aristotle" gives by descriptions that vary from speaker to speaker ([1.1](lessons/01-01-freges-puzzle-sense-and-reference.md)), and Russell's [names as disguised descriptions](#names-as-disguised-descriptions) ([1.3](lessons/01-03-russells-theory-of-descriptions.md)): "Common words, even proper names, are usually really descriptions" (*The Problems of Philosophy*, 1912, ch. V). John Searle ("Proper Names", 1958) and P. F. Strawson (*Individuals*, 1959) loosened it into the [cluster theory](#cluster-theory).

**Kripke's statement of it** (*Naming and Necessity*: lectures at Princeton, January 1970; printed 1972; book with a new preface, 1980; pp. 64–65, 71, compressed in 3.1), for a speaker $A$ and a name "$X$". The classical theory is a one-member cluster.

| | Thesis | In words |
|---|---|---|
| D1 | A cluster of properties $\varphi_1, \ldots, \varphi_n$ corresponds to "$X$": those $A$ believes $X$ has. | The name comes with a bundle of beliefs. |
| D2 | $A$ believes that one of them, or some jointly, pick out one individual uniquely. | The bundle singles someone out. |
| D3 | If most, or a weighted most, of the $\varphi$s are satisfied by exactly one object, that object is the referent. | The bundle votes; the winner is the bearer. |
| D4 | If the vote yields no unique object, "$X$" does not refer. | No winner, no bearer. |
| D5 | $A$ knows a priori that if $X$ exists, $X$ has most of the $\varphi$s. | The speaker can know without looking that the bearer fits. |
| D6 | That statement is necessary. | The bearer could not have failed to fit. |
| (C) | The properties may not themselves presuppose the name's reference. | No "the man called $X$". |

- **Three arguments, three targets** (3.1): the [modal argument](#modal-argument) against D6, the [epistemic argument](#epistemic-argument) against D5, the [semantic argument](#semantic-argument) against D2–D4 and (C). The three labels are the later literature's.
- **Three repairs, each with its concession:** [wide-scope descriptivism](#wide-scope-descriptivism), [rigidified descriptions](#rigidified-description), [causal descriptivism](#causal-descriptivism).
- **The picture** (3.1): a description is a search query, run afresh wherever you ask it; a name, on Kripke's view, is a saved link that keeps pointing at what it pointed at.
- **Russell's own text strains** (3.1 Source). The words "will vary for different people" concede that no description is shared; "so long as the name is rightly used" seems to presuppose the very reference the descriptions were to supply; and a page later Russell's "an object B, called Bismarck" mentions the name itself, which (C) forbids.
- **Trap: what a name means and what fixes its referent are separate questions.** A description can [fix the reference without giving the meaning](#fixing-reference-and-giving-meaning).
- **Trap: Kripke did not show that names have no sense.** His arguments target senses given by descriptions a speaker associates; a Fregean may posit senses that are not descriptions at all ([neo-Fregeanism](#neo-fregeanism)). The profession is split: in the PhilPapers 2020 survey (target faculty, N = 1,269), 36.1 percent accepted or leaned towards Fregean and 38.7 percent towards Millian views of proper names.

*Lessons:* [3.1](lessons/03-01-against-descriptivism.md)

### Cluster theory

**A name refers to whatever satisfies most, or a weighted most, of a bundle of descriptions its users associate with it, so no single description is required.** John Searle, "Proper Names" (*Mind*, 1958); P. F. Strawson, *Individuals* (1959). In Kripke's statement ([descriptivism](#descriptivism)) these are D3 and D4: the properties vote, the unique winner is the referent, and with no unique winner the name refers to nothing.

- **Why it was proposed** (3.1): the classical one-description theory falls to any single description that turns out false of the bearer, or that some user does not know; a weighted majority makes one error harmless.
- **The vote as 3.1's problems read D3:** the referent is the unique person whose satisfied descriptions carry more than half the total weight, and nobody if no one, or more than one person, clears that bar.
- **What still threatens it** ([semantic argument](#semantic-argument)): systematic error, as when a Gödel/Schmidt case hands the vote to a rival (against D3); and ignorance or no satisfier at all (Feynman; Jonah), against D2 and D4.
- **Rescue clauses breach (C).** Adding "the man called $X$", or a description that borrows its referent from other speakers' use, lets the vote find the bearer only by presupposing the reference the cluster was meant to fix.
- **Trap: an ignorance case is not an error case.** In an ignorance case nobody wins the vote (the speakers believe too little: D2, D4); in an error case someone else wins it (D3).

*Lessons:* [3.1](lessons/03-01-against-descriptivism.md)

### Modal argument

**A name sentence can be contingent where its supposed descriptive synonym, read with the description inside "might", cannot fail at all; so the name does not mean the description.** Kripke, *Naming and Necessity* (1970/1972/1980), against D6 of [descriptivism](#descriptivism).

**The skeleton** (3.1), with $Tx$ for "$x$ taught Alexander" and $a$ naming Aristotle:

**P1.** "Aristotle might not have taught Alexander", $\Diamond\neg Ta$, is true: he might have died in infancy.

**P2.** If "Aristotle" meant "the teacher of Alexander", P1 would say what the description sentence says with the description inside "might" (narrow scope, by Russell's [theory of descriptions](#theory-of-descriptions)):

$$\Diamond\exists x\,\bigl(Tx \land \forall y\,(Ty \to y = x) \land \neg Tx\bigr),$$

which is false at every world, since nothing can uniquely teach Alexander and not teach him.

**C.** "Aristotle" does not mean the description; over the whole cluster D6 fails, since Aristotle might have done none of it.

- **P1 is a modal intuition**, so [`metaphysics` 3.1](../metaphysics/lessons/03-01-kinds-of-necessity.md)'s conceivability checklist applies to it.
- **The replies:** [wide scope](#wide-scope-descriptivism) (the description always outside "might"), [rigidified descriptions](#rigidified-description) ("the actual F"), and Dummett's split between what a sentence asserts and what it contributes when embedded.
- **Where it is weakest: the hidden premise** that a name and the description giving its meaning must contribute the same thing under "might". Michael Dummett's objection, developed by Jason Stanley ("Names and Rigid Designation", 1997), separates assertion from embedding: "Aristotle taught Alexander" and its descriptive twin could assert the same thing yet embed differently. The strongest reply is Kripke's 1980 preface: no embedding is needed, since we evaluate the plain sentence at a counterfactual situation and the name keeps its bearer. Scott Soames (*Beyond Rigidity*, 2002) adds that a name in a belief report inside "might" would need its description outside "might" and inside "believes" at once.
- **What each side concedes** (3.1): the descriptivist, that names are rigid; the Kripkean, that rigidity is compatible with descriptive content, so against the sophisticated replies the epistemic and semantic arguments carry the load.
- **Trap: "might have been" is not "might turn out".** "Gödel might not have proved it" concerns a counterfactual world (D6, this argument); "Gödel might turn out not to have proved it" concerns what we could learn about this one (D5, the [epistemic argument](#epistemic-argument)). Rigidifying the description answers only the first.
- **Left to you.** Boss 3(d) asks for the modal argument at full strength inside an assessment of two-dimensional semantics; the card gives the skeleton only.

*Lessons:* [3.1](lessons/03-01-against-descriptivism.md)

### Epistemic argument

**If a name meant its descriptions, anyone who understood it would know without looking that the bearer, if he existed, fits them; we do not, so the name does not mean them.** Kripke (1980), against D5 of [descriptivism](#descriptivism).

**The skeleton** (3.1):

**P1.** If "Gödel" meant its cluster, "if Gödel existed, he proved incompleteness" would be knowable a priori by anyone who understands the name.

**P2.** It is not: we learned it from history, and history could undo it.

**C.** D5 fails.

- **Fibonacci** (3.1 Example 1). "If Fibonacci existed, he discovered the sequence" was never a priori; historians refuted it. Indian scholars of Sanskrit verse had counted rhythms of short and long syllables with these numbers before Leonardo of Pisa's *Liber Abaci* (1202): Virahanka's account, from about 700, is the clearest, and Hemachandra had it around 1150.
- **It survives rigidification** (3.1 argument map). Making the description "the actual F" answers the modal argument, but "if exactly one thing is F, the actual F is F" is still knowable a priori in a way the name sentence is not ([rigidified description](#rigidified-description)).
- **Trap: this is not the modal argument again.** "Might turn out" is epistemic, about this world as we may find it; "might have been" is modal ([modal argument](#modal-argument)).

*Lessons:* [3.1](lessons/03-01-against-descriptivism.md)

### Semantic argument

**Users of a name refer to its bearer even when their descriptions fit nobody uniquely, fit no one, or fit someone else; so what the speaker believes does not settle reference.** Kripke (1980), against D2–D4 and (C) of [descriptivism](#descriptivism). Keith Donnellan argued in parallel ("Proper Names and Identifying Descriptions", 1970).

- **The cases** (3.1):
  - *Ignorance* (against D2): someone who knows of Richard Feynman only that he was a physicist still refers to Feynman.
  - *Error* (against D3): suppose a historian showed that Gödel took the incompleteness proof from his friend Schmidt. The vote then goes to Schmidt, yet "Gödel" names Gödel, and the description turns out false of him.
  - *No satisfier* (against D4): if scholars found a real prophet behind the Jonah story who did none of its deeds, "Jonah" would name him.
  - *Circularity* (against (C)): asked who Einstein was, many say "the man who discovered relativity", and asked what relativity is, "Einstein's theory".
- **Fibonacci** (3.1 Example 1). Weighted by its usual cluster, the vote goes to an Indian prosodist, yet speakers saying "Fibonacci" were talking, wrongly, about Leonardo of Pisa. The escape "the man the sequence is named after" borrows its referent from Édouard Lucas's naming and so breaches (C).
- **Semantic reference without satisfaction** ([1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md)): a name can refer to someone its user's descriptions do not fit ([speaker's reference and semantic reference](#speakers-reference-and-semantic-reference)).
- **It survives rigidification** (3.1). Rigidifying a description changes how it behaves at other worlds, not what it picks out at this one ([rigidified description](#rigidified-description)).
- **The gap it leaves** is filled by the [causal-historical theory](#causal-historical-theory) (3.2), which [causal descriptivism](#causal-descriptivism) tries to write back into a description.
- **Trap: ignorance is not error.** Nobody winning the vote (a Jonah-style or ignorance case: D2, D4) is a different failure from a rival winning it (a Gödel/Schmidt-style case: D3).
- **Sideways.** [`philosophy-of-mind` 6.3](../philosophy-of-mind/lessons/06-03-do-language-models-understand.md) reports Matthew Mandelkern and Tal Linzen's argument that a language model's words can borrow reference through the history of its text: the semantic argument asked of a new kind of speaker. [`thomistic-synthesis` 4.3](../thomistic-synthesis/lessons/04-03-the-names-of-god.md) asks whether a name of God still refers when every description attached to it falls short.

*Lessons:* [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [3.1](lessons/03-01-against-descriptivism.md)

### Fixing reference and giving meaning

**A description can settle which object a name picks out without being what the name means, so the name stays rigid.** Kripke (1980), 3.1's positive moral: "Jack the Ripper" was introduced for whoever committed certain murders, yet on Kripke's view "Jack the Ripper might never have harmed anyone" is true.

- **Descriptive names** are names introduced this way: "Jack the Ripper"; Gareth Evans's "Julius" ([`epistemology` 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md)); "one metre", fixed by the length of the stick S at $t_0$ (3.3).
- **What it yields: the [contingent a priori](#contingent-a-priori)** (3.3). The stipulator knows without looking that the bearer fits the description, though the bearer might not have.
- **One route to a baptism** (3.2 P1): an [initial baptism](#initial-baptism) fixes a bearer by pointing or by a description that fixes the reference without giving a synonym.
- **Used by siblings:** for "heat" in [`philosophy-of-mind` 1.4](../philosophy-of-mind/lessons/01-04-zombies-conceivability-and-kripke.md), and for "Julius" in [`epistemology` 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md).
- **Contested** (3.3 Example 2): Keith Donnellan (1977) denies that the stipulation gives a priori knowledge of the contingent truth itself ([contingent a priori](#contingent-a-priori)).
- **Trap: introduced by a description is not synonymous with it.** On Kripke's view "Jack the Ripper" or "Julius" only has its reference fixed by the description, and is still rigid.

*Lessons:* [3.1](lessons/03-01-against-descriptivism.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md)

### Wide-scope descriptivism

**Names are descriptions that always take wide scope over modal operators, so they behave rigidly and the modal argument loses its target.** Michael Dummett, *Frege: Philosophy of Language* (1973); David Sosa (2001).

**The reading** (3.1). "Aristotle might not have taught Alexander" becomes

$$\exists x\,\bigl(Tx \land \forall y\,(Ty \to y = x) \land \Diamond\neg Tx\bigr),$$

true when the man who actually taught Alexander could have failed to ($Tx$: "$x$ taught Alexander"). It is [1.3](lessons/01-03-russells-theory-of-descriptions.md)'s [scope](#scope) distinction put to modal work, and its wide reading is the de re reading of [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md) ([de re and de dicto](#de-re-and-de-dicto)).

- **What it concedes:** names never behave non-rigidly, so their scope must be stipulated.
- **Dummett's further distinction**, developed by Jason Stanley (1997): what a sentence asserts versus what it contributes when embedded, so a name and its descriptive twin could share assertoric content yet embed differently ([modal argument](#modal-argument), "Where it is weakest").
- **Kripke's reply** (1980 preface): no embedding is needed, since the plain sentence is evaluated at a counterfactual situation. Soames (2002): a name in a belief report inside "might" would need its description outside "might" and inside "believes" at once.
- **Trap: Stanley is not a rigidified-description theorist.** He belongs with Dummett's line on assertoric content; "the actual F" is Plantinga's and Nelson's ([rigidified description](#rigidified-description)).

*Lessons:* [3.1](lessons/03-01-against-descriptivism.md)

### Rigidified description

**A description made rigid by "actually" or a world-index, as in "the actual teacher of Alexander": wherever it is evaluated it looks back to the actual world for its F, so it keeps pace with the name under "might".** Alvin Plantinga's world-indexed properties (*The Nature of Necessity*, 1974); defended by Michael Nelson ("Descriptivism Defended", 2002).

- **The operator** (3.1): $\mathsf{A}\varphi$ ("actually $\varphi$") is true at any world just when $\varphi$ is true at the actual world $w_0$, so "the actual F" evaluates its clause at $w_0$ wherever it is embedded.
- **What it answers:** the [modal argument](#modal-argument). It agrees with the name at every world where the bearer exists, so the modal argument has nothing to bite.
- **What it concedes:** rigidity.
- **What still bites it** (3.1 argument map): the [epistemic argument](#epistemic-argument), since "if exactly one thing is F, the actual F is F" is a priori where the name sentence is not; and the [semantic argument](#semantic-argument), since rigidifying changes nothing at the actual world, so if someone else was in fact the F, "the actual F" denotes that person while the name keeps its bearer.
- **Rigid de jure, on the usual view** (3.2 D3; [de jure and de facto rigidity](#de-jure-and-de-facto-rigidity)): in 3.2 Example 1, "the actual first person to walk on the Moon" designates Armstrong at the world where Aldrin walked first.
- **Rigid with no baptism** (3.2): "the actual winner of this year's Eskerby regatta" shows that rigidity and the causal picture are independent ([rigid designator](#rigid-designator)).
- **Trap: "actually" is not emphasis.** Read as emphasis, the description shifts with the world, and the modal argument applies again.

*Lessons:* [3.1](lessons/03-01-against-descriptivism.md), [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md)

### Causal descriptivism

**A name means a description of its own causal history, such as "whoever stands at the origin of my chain of uses of this name", so the descriptivist absorbs Kripke's cases.** So named by David Lewis ("Putnam's Paradox", 1984); Frederick Kroon (1987); Frank Jackson (1998).

- **What it absorbs** (3.1 Example 2). In the Gödel/Schmidt theft story the chain ends at Gödel, so the error case is absorbed; the bystander who knows Feynman only as a physicist has a chain that ends at Feynman. The description mentions causes, not reference, so it respects (C), unlike the descriptions Strawson allowed that lean on other speakers' use. Rigidified, it answers the modal argument; if a speaker knows a priori that a name refers to whatever its chain started from, it answers the epistemic one.
- **What it concedes:** Kripke's account of what fixes reference ([causal-historical theory](#causal-historical-theory), 3.2).
- **Objections** (3.1). It makes "Gödel proved incompleteness" partly about the speaker's own use of a word, so two speakers who say it assert different things; and ordinary speakers hold no such description, yet refer. Jackson answers that speakers' verdicts on cases ("it would still be Gödel") show an implicit grasp of a description they cannot state. Soames (*Reference and Description*, 2005) replies that this makes descriptivism unfalsifiable, since any verdict can be read back as a hidden description.
- **Where it stops** (3.1). Can a description only a philosopher can state, read off from verdicts on cases, be what ordinary speakers mean? The causal descriptivist says meaning is whatever guides the verdicts; the Kripkean, that this concedes the theory of reference and keeps only the word "description".
- **Trap: a causal description is not a deferential one.** "Whoever stands at the origin of my chain" mentions causes; "the man the others call $X$" presupposes reference and breaches (C).

*Lessons:* [3.1](lessons/03-01-against-descriptivism.md)

### Rigid designator

**A term that picks out the same object in every possible world where that object exists, and never picks out anything else: a name is a tag carried into every scenario we describe, a description a job title that goes to whoever fills the role there.** Saul Kripke, *Naming and Necessity* (1970 lectures; printed 1972; book 1980) and "Identity and Necessity" (1971).

- **Kripke's wording** (3.2 D1). In *Naming and Necessity* a designator is rigid if it designates the same object in every possible world, the object need not exist in every world. "Identity and Necessity" (1971) spells it out: wherever the object exists, the designator designates it; where it does not, the designator has no referent. That spelled-out definition is Nathan Salmon's *persistent* rigidity ([persistent and obstinate rigidity](#persistent-and-obstinate-rigidity)).
- **Formally** (3.2 D1), with $D(w)$ the domain of world $w$ and $d_w(t)$ the object a term $t$ designates when we use it to describe $w$ (possibly none): $t$ is rigid for $o$ iff, for every $w$, if $o \in D(w)$ then $d_w(t) = o$, and $d_w(t)$ is never an object other than $o$. *In words:* the term follows its object into every scenario that contains it, and never picks out a stand-in.
- **The example** (3.2): "Neil Armstrong" and "the first person to walk on the Moon" pick out the same man. Had the Apollo 11 crew climbed down in the other order, the description would pick out Buzz Aldrin and the name would still pick out Armstrong. A rigid name behaves as if it always took wide scope ([de jure and de facto rigidity](#de-jure-and-de-facto-rigidity) has 3.2's table).
- **About our use, not theirs** (3.2): rigidity concerns how *we* use the name to describe other worlds, not what anyone there calls its bearer.
- **Independent of the causal picture** (3.2). Rigidity says what a name does once it has a bearer; the [causal-historical theory](#causal-historical-theory) says how it got one. "The actual winner of this year's Eskerby regatta" is rigid with no baptism; a term introduced by pointing at the trophy, to stand at each world for whoever wins it there, is causally grounded and not rigid.
- **What it adds to identity** (3.2 T1). With the [necessity of identity](#necessity-of-identity) of [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md), if $a$ and $b$ are rigid for one object $o$, then $a = b$ is true at every world where $o$ exists; truth at every world is a further choice ([strong and weak necessity of identity](#strong-and-weak-necessity-of-identity)). Only rigid terms inherit the necessity: "the number of justices = 9" is true and contingent, because the description is not rigid (2.5).
- **Indexicals are rigid relative to a context** (3.4 D3): given a context $c$, "I" designates the agent $a_c$ at every world ([direct reference](#direct-reference)).
- **Kind terms** (3.3): Putnam treats "water" as rigid, but what a general term rigidly designates is disputed ([natural-kind term](#natural-kind-term)).
- **Trap: rigidity is not necessary existence** ([2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md), 3.2). "Armstrong" is rigid, and Armstrong might never have been born; whether the bearer exists at every world is a fact about domains, and only necessitism says yes for everything. Kripke's *strongly rigid* designators are just the rigid ones whose bearers exist necessarily.
- **Trap: tracking the object wherever it exists is not enough.** D1's second clause also forbids designating anything else: a description can follow its object to every world where the object exists and still hand the role to a stand-in where the object is missing.

*Lessons:* [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md), [3.1](lessons/03-01-against-descriptivism.md), [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

### Persistent and obstinate rigidity

**Two readings of rigidity that agree wherever the object exists and differ about worlds where it does not: a persistently rigid term designates nothing there, an obstinately rigid term still designates the object.** Nathan Salmon, *Reference and Essence* (1981).

- **The definitions** (3.2 D2). *Persistently* rigid: designates $o$ at every world where $o$ exists and nothing at any other world. *Obstinately* rigid: designates $o$ at every world, whether or not $o$ exists there.
- **Kripke's definition is the persistent one**, as he spells it out in "Identity and Necessity" (1971). But he wrote both ways: his remark in *Naming and Necessity* that "Hitler" still refers to Hitler at a world where Hitler was never born reads obstinately, and he declined to choose (3.2 D2).
- **Kripke's "strongly rigid" is a third notion:** a rigid designator of a *necessary existent*, for which the two readings coincide (a rigid term for a number, if numbers exist at every world).
- **Where the choice matters** (3.2 T1; 3.3). On persistent rigidity a true identity between two names holds exactly at the worlds where the object exists; truth at every world needs obstinate rigidity with identity holding of objects a world lacks, or constant domains ([strong and weak necessity of identity](#strong-and-weak-necessity-of-identity)). Varying domains ([constant and varying domains](#constant-and-varying-domains), 2.4) are where the readings come apart.
- **Which reading the lessons use.** 3.3's D2 reads names obstinately (each name denotes the same object at every world), the reading its instantiation into the box needs. 3.4's D2, $\chi_{\text{I}}(c)(w) = a_c$ at every $w$, reads "I" obstinately (3.4 Flashback).
- **Glosses take a side silently** (3.2 D2): "names the same thing in every world" is the obstinate reading, "in every world where it exists" the persistent one, and glosses in this library take one side without saying so.
- **Trap: obstinate is not strongly rigid.** Never use "strong rigidity" for obstinate rigidity: an obstinately rigid name of a contingent thing designates it at worlds where it does not exist, and designation is not existence.
- **Trap: a persistently rigid term is still rigid.** Designating nothing where the object is absent is exactly what persistent rigidity allows.

*Lessons:* [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

### De jure and de facto rigidity

**A term is rigid de jure when its rules of use make it rigid, as a name's do, and de facto when a description's condition happens to be met by the same object at every world.** Kripke's distinction (3.2 D3).

- **De jure:** a proper name; on the usual view also a description rigidified by "actual", which at every world picks out whoever meets the condition *here* ([rigidified description](#rigidified-description)).
- **De facto:** "the smallest prime" designates 2 everywhere because arithmetic does not vary.
- **Non-rigid:** a description whose condition different things meet at different worlds.

**3.2 Example 1.** Worlds $w_0$ (actual) and $w_1$ (the crew climbed down in the other order), universal accessibility, domain {Armstrong, Aldrin} at both:

| | $w_0$ | $w_1$ | Kind |
|---|---|---|---|
| "Armstrong" designates | Armstrong | Armstrong | rigid de jure |
| "the first person to walk on the Moon" designates | Armstrong | Aldrin | non-rigid |
| "the actual first person to walk on the Moon" designates | Armstrong | Armstrong | rigid de jure |
| "the smallest prime" designates | 2 | 2 | rigid de facto |

With $Fx$ for "$x$ first walked on the Moon" and $a$ for "Armstrong", the identity $\exists x\,(\forall y\,(Fy \leftrightarrow y = x) \wedge a = x)$ is true at $w_0$ and false at $w_1$. So with the description inside the box, $\Box\,\exists x\,(\forall y\,(Fy \leftrightarrow y = x) \wedge a = x)$ is false at $w_0$; with it outside, $\exists x\,(\forall y\,(Fy \leftrightarrow y = x) \wedge \Box\,a = x)$ is true at $w_0$: the man who in fact walked first is necessarily Armstrong.

*Lessons:* [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md)

### Connotative and non-connotative names

**Mill's split: a connotative name applies because of an attribute it signifies ("the father of Socrates"); a proper name is non-connotative, denoting its bearer and connoting nothing, a "mark".** J. S. Mill, *A System of Logic*, Book I, ch. II, §5 (8th edition, 1872; Harper reprint, New York, 1882).

- **The Sophroniscus passage** (3.2 Source). Mill calls one man both "Sophroniscus" and "the father of Socrates": "Both these are names of the same individual, but their meaning is altogether different." The first serves merely to distinguish him from others spoken of; the second indicates a fact about him, that Socrates was his son.
- **"The father of Socrates" is a connotative individual name:** true of one man because of a fact about him.
- **The deciding words** are "their meaning is altogether different", said of two names of one man: a proper name's whole job is its bearer. That is the ancestor of today's [Millian](#millianism) semantics.
- **What the passage does not settle** (3.2): it says nothing about other possible worlds. It makes Mill a forerunner of [direct reference](#direct-reference); whether he also anticipates [rigidity](#rigid-designator) is a further question.
- **Sideways** ([`databases` 2.1](../databases/lessons/02-01-entity-relationship-modeling.md)): a surrogate key identifies a row apart from its attributes, like a Millian name; a natural key identifies it by them, like a description.
- **Left to you.** Boss 3(a) and 3(c) close-read two further passages of Mill (Book I, ch. II, §5 and ch. V, §2); the card answers neither.

*Lessons:* [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md)

### Causal-historical theory

**A name refers to whatever was baptized at the origin of the chain of borrowings that leads to the present use: someone named the thing, and the name passed from speaker to speaker, each meaning to use it as the speaker they learned it from did.** Kripke, *Naming and Necessity*, Lecture II. Kripke disclaimed necessary and sufficient conditions: it is a picture, not a theory that predicts every case.

**The skeleton** (3.2):

**P1. [Initial baptism](#initial-baptism).** A name is introduced by fixing its bearer, by pointing or by a description that fixes the reference without giving a synonym.

**P2. [Reference-borrowing](#reference-borrowing).** A later speaker who picks up the name in communication refers with it if she intends to use it with the same reference as the speaker she learned it from.

**P3.** A speaker needs no description that identifies the bearer, and what she believes about him may be false (3.1's [semantic argument](#semantic-argument)).

**C.** A use of a name refers to whatever was baptized at the origin of the chain that leads to it. *In words:* reference runs back through history, not out through descriptions.

- **Where it is weakest: P2.** The strongest objection is the [Madagascar case](#madagascar-case): the intention to co-refer held at every link, yet reference shifted, so it cannot suffice. The strongest replies: Kripke's override (a present intention to refer to a given thing beats the inherited one) and the new-name reply (Marco Polo started a second name spelled like the first). The Kripkean concedes that P2 needs an override clause whose conditions the picture does not state; Evans concedes that a body of information, close kin to the descriptivist's cluster, re-enters, and that "dominant" names no threshold.
- **At the baptism:** the [qua problem](#qua-problem).
- **Independent of rigidity** (3.2; [rigid designator](#rigid-designator)).
- **Theoretical terms** (3.2). Applied to them, the picture let Hilary Putnam argue that "electron" kept its reference as theories of the electron changed ("Explanation and Reference", 1973), the realist answer to meaning variance; Scheffler and Field's partial denotation are [`philosophy-of-science` 2.4](../philosophy-of-science/lessons/02-04-kuhn-incommensurability-and-theory-choice.md)'s.
- **Kind terms and vats** (3.3): Putnam's "water", pushed in by pointing at samples ([natural-kind term](#natural-kind-term)), and his [brain-in-a-vat argument](#putnams-brain-in-a-vat-argument), which turns the causal constraint on reference against the sceptic's brain in a vat.
- **Elsewhere in the course.** [Causal descriptivism](#causal-descriptivism) (3.1) writes the chain into a description. In [5.1](lessons/05-01-tarskis-theory-as-philosophy.md), Field wanted Tarski's [primitive denotation](#primitive-denotation) explained physically, say by a causal theory of reference ([Field's objection](#fields-objection)).
- **Sideways.** Whether a language model's words borrow reference through the history of its text is [`philosophy-of-mind` 6.3](../philosophy-of-mind/lessons/06-03-do-language-models-understand.md); content externalism about thought is [`philosophy-of-mind` 4.3](../philosophy-of-mind/lessons/04-03-externalism-narrow-content-and-the-extended-mind.md).
- **Trap: finding a mistake re-baptizes nothing.** Discovering that a description was misattributed (Gödel/Schmidt) leaves the name's referent where it was.
- **Trap: Kripke does not deny reference change outright.** His addenda allow a present intention to override the chain; the new-name reading is a separate reply.

*Lessons:* [3.1](lessons/03-01-against-descriptivism.md), [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md), [5.1](lessons/05-01-tarskis-theory-as-philosophy.md)

### Initial baptism

**The act that first attaches a name to its bearer, by pointing at it or by a description that fixes the reference without becoming a synonym.** Kripke, *Naming and Necessity*, Lecture II; P1 of the [causal-historical theory](#causal-historical-theory).

- **Two routes** (3.2): ostension (pointing at a cat and saying "Biscuit"), or a reference-fixing description ("Jack the Ripper" for whoever committed certain murders: [fixing reference and giving meaning](#fixing-reference-and-giving-meaning)).
- **For kinds** (3.3): "water" is fixed by pointing at samples, and the qua problem returns as the question of which kind a sample grounds.
- **The new-name reply to Madagascar** posits a second baptism at Marco Polo's first use, at the price of a baptism no one intended ([Madagascar case](#madagascar-case)).
- **Sideways** ([`programming-languages` 1.6](../programming-languages/lessons/01-06-name-resolution-and-the-semantic-phase.md)): a baptism is a binding occurrence that later uses resolve back to.
- **Trap: pointing underdetermines what is named** ([qua problem](#qua-problem)).

*Lessons:* [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md)

### Reference-borrowing

**Picking up a name from another speaker and referring with it to whatever she referred to, by intending to use it with the same reference.** Kripke, *Naming and Necessity*, Lecture II; P2 of the [causal-historical theory](#causal-historical-theory). *In words:* each link inherits the referent of the link before.

- **No identifying knowledge needed** (3.2 P3): the borrower need not know anything that singles out the bearer, and her beliefs about him may be false.
- **Its weak point** (3.2): the [Madagascar case](#madagascar-case) shows that the intention to co-refer, present at every link, does not suffice to preserve reference. Kripke's addenda add that a present intention to refer to a given thing can override the intention to preserve reference along the chain.
- **A new kind of borrower** ([`philosophy-of-mind` 6.3](../philosophy-of-mind/lessons/06-03-do-language-models-understand.md)): Mandelkern and Linzen (*Computational Linguistics*, 2024) argue that the text a model learns from has a natural history, so its "Gödel" may inherit the reference of ours.

*Lessons:* [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md)

### Madagascar case

**"Madagascar" named part of the African mainland; Marco Polo, misunderstanding his sources, applied it to the great island. Every link meant to use the name as before, yet it now names the island.** Gareth Evans, "The Causal Theory of Names" (*Proceedings of the Aristotelian Society*, Supplementary Volume 47, 1973).

- **Against P2** of the [causal-historical theory](#causal-historical-theory): the picture as stated (P1–C) gives the mainland, which no one accepts.
- **The accounts** (3.2 Example 2):
  - *The picture as stated:* the chain runs back through Marco Polo to the mainland.
  - *Kripke's override* (addenda to *Naming and Necessity*, granting the case): today's intention to refer to the island wins. But the account needs a rule for when an override wins, and Gödel and Schmidt show it cannot be "whenever the speaker's beliefs fit something else better".
  - *Evans:* the causal link runs from the object to the body of information speakers associate with the name, and a name refers to the dominant causal source of that information: here the island, with its coastline, its people and its lemurs (while "Gödel" must not shift to Schmidt).
  - *The new-name reply:* Marco Polo started a second name spelled like the first.
- **Where it stops** (3.2). No account dates the shift: nothing says at which link, or at what share of island-sourced belief, reference changed. Kripkeans say a picture may leave that open; Evans, that "dominant" is real but vague; the new-name theorist dates the shift to Marco Polo's first use, at the price of a baptism no one intended.
- **A hybrid** (3.2). Evans's account is causal-descriptive: a body of information re-enters the theory, as the baptizer's descriptive intentions do in answers to the [qua problem](#qua-problem).
- **Semantic reference changed** ([1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md) Connections): Madagascar is a name whose semantic referent changed ([speaker's reference and semantic reference](#speakers-reference-and-semantic-reference)).
- **Trap: Madagascar is not Gödel/Schmidt.** In Gödel/Schmidt a description is misattributed while the name keeps its bearer; in Madagascar the name itself comes to refer to something else.

*Lessons:* [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md)

### Qua problem

**Pointing and naming leave open which thing is named: the causal facts are the same whether "Biscuit", said pointing at a cat, names the cat, its fur or its species.** Discussed under that name by Michael Devitt and Kim Sterelny, *Language and Reality* (1987).

- **The fix and its cost** (3.2): selecting the target takes the sort of thing the baptizer means to name, which makes the view a causal-descriptive hybrid, as Evans's is from the other side ([Madagascar case](#madagascar-case)).
- **It returns for kinds** (3.2 Connections; 3.3) as the question of which kind a sample grounds ([natural-kind term](#natural-kind-term)).
- **Trap: the attribution.** Credit the problem, under that name, to Devitt and Sterelny (1987), not to Devitt's *Designation* (1981).

*Lessons:* [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md)

### Necessary a posteriori

**A truth that could not have been false but can be known only by experience: two rigid names that turn out to name one thing name it at every world where it is, though it took a survey to find out.** Kripke, *Naming and Necessity* (1970/1972/1980) and "Identity and Necessity" (1971). [`metaphysics` 3.1](../metaphysics/lessons/03-01-kinds-of-necessity.md) and [`epistemology` 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md) gave the cases; 3.3 supplies the semantics under them.

- **The picture** (3.3): a [rigid designator](#rigid-designator) is a pin, a description a job title. Which object a pin went into you may learn by looking; once in, it stays in that object at every world where the object is.

**The mechanism** (3.3), in 2.5's quantified modal language: [actualist quantifiers](#actualist-quantifier) range over the domain $D(w)$ of the world $w$ of evaluation, every world sees every world ([metaphysical necessity](#metaphysical-necessity)), and $a$, $b$ are names.

**D1.** $\forall x\,\forall y\,(x = y \to \Box\, x = y)$: the [necessity of identity](#necessity-of-identity), derived in [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md) from $\forall x\,\Box(x = x)$ by [Leibniz's law](#leibnizs-law) applied inside the box. *In words:* whatever is identical to a thing is necessarily identical to it.

**D2.** $a = b \to \Box\, a = b$, from D1 by instantiating $x$ to $a$ and $y$ to $b$. It uses two assumptions. *Rigidity:* each name denotes the same object at every world (obstinately, in 3.2's term); otherwise the object instantiated outside the box need not be what the name picks out inside it. *Existence:* the names' actual referent is in $D(w_0)$, since an actualist universal instantiates only to what exists. *In words:* if two rigid names co-refer, they co-refer necessarily.

**D3.** $a = b$, by observation.

**∴ D4.** $\Box\, a = b$, by modus ponens; known a posteriori because D3 was.

D2 is metaphysics 3.1's a priori conditional made precise: everything above D3 is logic plus semantics.

- **The cases:** water is H2O ([`metaphysics` 3.1](../metaphysics/lessons/03-01-kinds-of-necessity.md)), Carroll is Dodgson ([`epistemology` 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md)), and 3.3's invented Tarrock and Ulvane, two valleys' names for one peak, found to be one by a survey (its model is under [strong and weak necessity of identity](#strong-and-weak-necessity-of-identity)).
- **The misdescription move** (3.3 Example 1, after metaphysics 3.1): before the survey the valleys could coherently imagine two mountains. What they imagined is a world where the north valley's name went to a different peak, a real possibility misdescribed as one where Tarrock is not Ulvane.
- **For kind terms the weak step is D2:** what a general term rigidly designates, and whether the necessity needs an essentialist premise ([natural-kind term](#natural-kind-term)).
- **Four ways to locate it** (3.3). Kripke: one proposition, necessary and knowable only a posteriori. Chalmers and Jackson: two semantic values ([two-dimensional semantics](#two-dimensional-semantics)). Stalnaker: one necessary content plus a diagonal conveyed in context ([diagonal proposition](#diagonal-proposition)). Nathan Salmon (*Frege's Puzzle*, 1986) and Scott Soames (*Beyond Rigidity*, 2002): "Hesperus is Phosphorus" expresses the proposition "Hesperus is Hesperus" does, knowable a priori, and what is learned a posteriori is that the sentence expresses it.
- **In the matrix** (3.3 figure): a constant actual row with a broken diagonal ([primary and secondary intension](#primary-and-secondary-intension)).
- **Downstream:** [4.5](lessons/04-05-analyticity-and-two-dogmas.md) asks what analyticity is, given that "water is H2O" is necessary but not true by meaning; [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md)'s problems run the kind-term case on an invented mineral.
- **Trap: a posteriori is not contingent, and a priori is not necessary.** One status concerns the route to a truth, the other the truth; inferring either from the other is the error 3.3's P1 diagnoses ([`epistemology` 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md)).
- **Trap: D1 is about objects, D2 about a sentence.** The necessity of identity is not the necessity of a true identity *sentence*, which needs rigid names: "the number of justices = 9" is true and contingent (2.5).
- **Trap: rigidity plus truth gives necessity at every world only with outer-domain semantics or constant domains;** otherwise it gives truth at every world where the object exists ([strong and weak necessity of identity](#strong-and-weak-necessity-of-identity)).
- **Trap: it is not an agreed class of propositions.** The four parties above locate it differently.
- **Left to you.** Boss 3(b) runs the mechanism on "Hesperus" and "Phosphorus", including a world without Venus; the card does not.

*Lessons:* [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md), [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md)

### Strong and weak necessity of identity

**Strong: a true identity between rigid names holds at every world. Weak: it holds at every world where its object exists. Which one you get depends on the domains and on how identities about absent objects are evaluated.** 3.3, tying [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md)'s domains to [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md)'s readings of rigidity.

$$\text{strong: } \Box\, a = b \qquad\qquad \text{weak: } \Box\bigl(\exists x\,(x = a) \to a = b\bigr)$$

- **Outer-domain semantics or constant domains: strong.** If identities are evaluated whether or not their objects exist (outer-domain), or every world has the same domain, rigidity plus truth gives $\Box\, a = b$.
- **Existence-entailing semantics: weak only.** If atomic sentences, identities included, are false at a world about objects outside its domain, then with [varying domains](#constant-and-varying-domains) $\Box\, a = b$ fails at $w_0$ as soon as some world lacks the object, and so does the [necessity of identity](#necessity-of-identity) itself (D1 of the [necessary a posteriori](#necessary-a-posteriori)). Weak necessity survives.
- **Persistent rigidity leaves only weak necessity** (3.2 T1), since its names designate nothing where the object is absent ([persistent and obstinate rigidity](#persistent-and-obstinate-rigidity)).

**3.3 Example 1** (invented). The north valley calls the summit above it "Tarrock" ($a$), the south valley calls the summit above it "Ulvane" ($b$), and a survey from both sides finds one peak $m$. Three worlds that all see one another: $w_0$ (actual), $w_1$ (no survey), $w_2$ (the mountain never formed); $r$ is a river.

| | $w_0$ | $w_1$ | $w_2$ |
|---|---|---|---|
| $D(w)$ | $\{m, r\}$ | $\{m, r\}$ | $\{r\}$ |
| $a$, $b$ denote | $m$, $m$ | $m$, $m$ | $m$, $m$ |
| $a = b$, outer-domain | T | T | T |
| $a = b$, existence-entailing | T | T | F |

Outer-domain: $\Box\, a = b$ is true at $w_0$. Existence-entailing: $\Box\, a = b$ is false at $w_0$ because of $w_2$, and so is D1. $\Box(\exists x\,(x = a) \to a = b)$ is true at $w_0$ on both.

- **Trap: rigidity is not necessary existence.** Rigid names keep their object at every world where it exists; whether it exists everywhere is a fact about domains.
- **Left to you.** Boss 3(b) asks this question of "Hesperus is Phosphorus" at a world where Venus does not exist; the card gives only the general facts and 3.3's own model.

*Lessons:* [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md)

### Contingent a priori

**A truth that might have been false but can be known without experience, typically because a description fixed a rigid name's reference: whoever fixes "one metre" as the length of the stick S at $t_0$ knows without measuring that S is one metre long at $t_0$, though S might have been longer.** Kripke (1980); the case is [`epistemology` 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md)'s, the semantics 3.3's.

- **The mechanism** (3.3): "one metre" is rigid and "the length of S at $t_0$" is not; the description [fixes the reference without giving the meaning](#fixing-reference-and-giving-meaning). So the stipulator knows without measuring that S is one metre long at $t_0$, yet at a world where S was heated it was longer.
- **The pin picture** (3.3): push a pin in *by* a job title ("call whoever holds this job 'Julius'") and you know without looking that the pin's object holds the job, though it might not have.
- **The metre's dates:** the prototype bar stopped defining the metre in 1960, and since 1983 the speed of light has; Kripke's 1970 lectures post-date the bar's retirement.
- **Other cases:** Gareth Evans's "Julius" ([`epistemology` 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md)); "Jack the Ripper" (3.1). Kaplan's indexical cousin is "I exist" or "I am here now" ([logic of demonstratives](#logic-of-demonstratives), 3.4).
- **In the matrix** (3.3 figure): a constant diagonal with a broken actual row, the mirror image of the [necessary a posteriori](#necessary-a-posteriori) ([two-dimensional semantics](#two-dimensional-semantics)).
- **Does a stipulation give knowledge?** (3.3 Example 2). Kripke counts it a priori knowledge of a contingent truth. Keith Donnellan ("The Contingent A Priori and Rigid Designators", 1977) objects that the stipulation yields a priori knowledge only that the sentence expresses a truth; knowing the contingent truth it expresses, about that very length, needs a relation to the referent that a stipulation does not supply. The two-dimensionalist splits the case: what is known a priori is the necessary primary intension (the diagonal); the contingent secondary intension is not known a priori; no single content is both.
- **Where it strains** (3.3). All three accept every cell of the matrix. They disagree about what knowing a singular proposition requires: for Kripke, reference fixed by a description is enough; for Donnellan it is not; the two-dimensionalist denies there is one proposition to know.
- **Trap: a priori is not necessary.** The stipulator's certainty is an epistemic fact; the truth known could have been false.
- **Trap: strictly, what is known a priori is conditional:** if exactly one thing meets the reference-fixing description, the name's bearer does. At a world considered as actual where nothing meets it, the plain sentence fails.

*Lessons:* [3.1](lessons/03-01-against-descriptivism.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

### Natural-kind term

**A general term such as "water" or "gold" that picks out a kind by its hidden nature rather than its look; on Putnam's account "water" applies to whatever is the same liquid as *this* sample, and so picks out one kind at every world.** Hilary Putnam, "The Meaning of 'Meaning'" (1975).

- **Indexical, hence rigid** (3.3): a kind term is a pin pushed in by pointing at samples.
- **An old dispute:** a modern version of Leibniz's side against Locke on "gold" ([`modern-philosophy` 3.2](../modern-philosophy/lessons/03-02-locke-qualities-substance-and-essence.md), Example 2).
- **Two arguments that the head does not fix extension:** [Twin Earth](#twin-earth) (the environment) and the [division of linguistic labor](#division-of-linguistic-labor) (the community).
- **Where it is weakest: what does "water" rigidly designate?** If "the same kind at every world", then "livestock" is rigid too, since every meaningful general term designates its own property everywhere (Stephen Schwartz, 2002), so rigidity cannot be what makes "water is H2O" special. Nathan Salmon ("How Not to Derive Essentialism from the Theory of Reference", 1979) adds that the necessity needs an essentialist premise, that being the same liquid is having the same microstructure, which no theory of reference supplies.
- **The reply and the concessions** (3.3). Kripke and Putnam never claimed semantics alone yields the necessity; it explains why a necessity grounded in the kind's nature is hidden from the armchair, since reference was fixed by samples and appearances. The semanticist concedes that the source is metaphysical (metaphysics 3.1's) and that chemistry must supply the premise, which Hasok Chang (*Is Water H2O?*, 2012; [`philosophy-of-science` 5.2](../philosophy-of-science/lessons/05-02-the-pessimistic-induction-and-selective-realism.md)) doubts it does simply. The critic concedes that, given the premise, rigidity explains the epistemic gap.
- **The qua problem returns** (3.2 Connections): which kind does a sample ground? ([qua problem](#qua-problem)).
- **Sideways:** Horgan and Timmons's moral twin earth runs the same test on "wrong" ([`ethics` 6.1](../ethics/lessons/06-01-moral-realism.md)).

*Lessons:* [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md)

### Twin Earth

**A planet just like Earth except that its water-like liquid is XYZ: in 1750 Oscar and his duplicate are in the same psychological state, yet "water" picks out H2O for one and XYZ for the other.** Putnam, "The Meaning of 'Meaning'" (1975).

- **The argument** (3.3). The traditional theory, Putnam says, assumes (I) that knowing a term's meaning is being in a certain psychological state and (II) that meaning, as intension, determines extension. Oscar and Twin Oscar share the state but not the extension, so nothing satisfies both. Putnam keeps (II) and drops (I); his slogan is that meanings are not in the head.
- **Here a claim about words.** [`philosophy-of-mind` 4.3](../philosophy-of-mind/lessons/04-03-externalism-narrow-content-and-the-extended-mind.md) runs the case on belief, and offers the primary intension as narrow content ([primary and secondary intension](#primary-and-secondary-intension)).
- **Sideways:** moral twin earth ([`ethics` 6.1](../ethics/lessons/06-01-moral-realism.md)).
- **Trap: Twin Earth and elm and beech make different points.** One turns on the environment, the other on the community ([division of linguistic labor](#division-of-linguistic-labor)).
- **Trap: individuation, not location.** Neither argument says meanings are *located* outside the head, only that the head does not fix them.

*Lessons:* [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md)

### Division of linguistic labor

**Lay speakers' words for kinds refer to what experts in their community can identify, not to what each speaker can tell apart.** Putnam, "The Meaning of 'Meaning'" (1975).

- **Elm and beech** (3.3): Putnam cannot tell an elm from a beech, and his concept of each is the same, yet his "elm" and "beech" differ in extension: experts settle what lay speakers' words apply to.
- **Needs no twin planet:** [Twin Earth](#twin-earth) shows the environment fixing reference; elm and beech show the community fixing it.
- **Trap: it is a second argument, not Twin Earth restated** (3.3 Watch out).

*Lessons:* [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md)

### Putnam's brain-in-a-vat argument

**If reference needs an appropriate causal connection, a lifelong brain in a vat cannot refer to vats, so in its mouth "I am a brain in a vat" is false.** Putnam, *Reason, Truth and History* (1981), ch. 1: the causal constraint on reference ([causal-historical theory](#causal-historical-theory)) turned against the sceptic's brain in a vat.

**The skeleton** (3.3):

**P1.** Reference requires an appropriate causal connection with what is referred to.

**P2.** A lifelong vat-brain has no such connection with vats.

**P3.** So its "vat" refers to vat-images or electronic impulses, not to vats.

**C.** So in its mouth "I am a brain in a vat" is false.

- **Owners elsewhere:** the vat is [`epistemology` 3.1](../epistemology/lessons/03-01-the-closure-argument.md)'s; Wright's transmission-failure verdict on such arguments is [`epistemology` 3.3](../epistemology/lessons/03-03-moore-and-the-dogmatist.md)'s; McKinsey's argument from externalism and self-knowledge (1991) belongs to [`philosophy-of-mind` 4.3](../philosophy-of-mind/lessons/04-03-externalism-narrow-content-and-the-extended-mind.md).

*Lessons:* [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md)

### Two-dimensional semantics

**Ask two questions of a sentence at a world: had this world turned out to be actual, would the sentence be true? And, holding fixed what its words actually pick out, would it have been true had this world obtained?** 3.3. Robert Stalnaker drew the first such matrices ("Assertion", 1978); the semantic reading is David Chalmers's and Frank Jackson's.

**The matrix** (3.3): rows are worlds considered as actual, columns are worlds considered as counterfactual, and a cell gives the truth value at the column world of what the sentence says if the row world is actual. The diagonal is the [primary intension](#primary-and-secondary-intension); the actual world's row is the secondary intension. 3.3's figure:

| Sentence | Actual row (secondary) | Diagonal (primary) | Status |
|---|---|---|---|
| "water is H2O" | T, T | T, F | necessary a posteriori |
| "S is one metre long at $t_0$" | T, F | T, T | contingent a priori |

*In words:* a constant actual row with a broken diagonal is necessary a posteriori; a constant diagonal with a broken actual row is contingent a priori.

- **Chalmers's Core Thesis** ("Epistemic Two-Dimensional Semantics", 2004): a sentence is a priori iff its primary intension is true at every scenario.
- **The semantic reading** (Chalmers; Jackson, *From Metaphysics to Ethics*, 1998): a sentence carries two semantic values, and the primary one does the work of a Fregean sense. That is the neo-Fregean reply to Kripke ([neo-Fregeanism](#neo-fregeanism)).
- **The metasemantic reading** (Stalnaker, "Assertion Revisited", 2004): each row is the proposition the sentence *would* have expressed had its context been that world; its one semantic content is the actual row; the [diagonal proposition](#diagonal-proposition) is what an assertion conveys when hearers do not know which row they are in.
- **Further still, the Millians** (Salmon 1986; Soames 2002): one a priori proposition, plus an a posteriori fact about which proposition the sentence expresses ([necessary a posteriori](#necessary-a-posteriori)).
- **Restricted to indexicals,** one expression at a time, it is Kaplan's [character and content](#character-and-content) (3.4).
- **Sideways:** the two intensions in the zombie argument ([`philosophy-of-mind` 1.4](../philosophy-of-mind/lessons/01-04-zombies-conceivability-and-kripke.md)), and the primary intension as narrow content ([`philosophy-of-mind` 4.3](../philosophy-of-mind/lessons/04-03-externalism-narrow-content-and-the-extended-mind.md)).
- **Trap: the parties agree on the cells.** The dispute is whether the diagonal is a meaning or a record of what the words might have meant.
- **Trap: two layouts.** `philosophy-of-mind` 1.4 writes its table with the intensions as rows and worlds as columns; 3.3's matrix has worlds considered as actual as rows. They agree: diagonal = primary, actual row = secondary.
- **Left to you.** Boss 3(d) asks whether two-dimensional semantics explains why "Hesperus is Phosphorus" is informative in a way that survives the [modal argument](#modal-argument), and whether it handles Pierre ([Kripke's puzzle about belief](#kripkes-puzzle-about-belief)); the card takes no side.

*Lessons:* [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

### Primary and secondary intension

**The primary intension says what an expression picks out at a world if that world turned out to be actual; the secondary intension says what, given its actual referent, it picks out at a world considered as counterfactual.** Glosses as in [`philosophy-of-mind` 1.4](../philosophy-of-mind/lessons/01-04-zombies-conceivability-and-kripke.md); Jackson's A-intension and C-intension (*From Metaphysics to Ethics*, 1998).

- **Where they sit** (3.3): the primary intension is the matrix's diagonal, the secondary its actual row ([two-dimensional semantics](#two-dimensional-semantics)).
- **Reading off status** (3.3). A sentence is necessary when its secondary intension is true at every world, and a priori, by Chalmers's Core Thesis, when its primary intension is true at every scenario. Necessary a posteriori: necessary secondary, contingent primary. Contingent a priori: the mirror image.
- **What they are for.** On Chalmers's and Jackson's reading the primary intension does the work of a Fregean sense; on Stalnaker's the diagonal is not a meaning at all ([diagonal proposition](#diagonal-proposition)).
- **Trap: the diagonal is the primary intension, not the secondary.**
- **Trap: what a term would have picked out had another world been actual is the diagonal**, an epistemic matter; it does not make the sentence contingent, which is read off the actual row.

*Lessons:* [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md)

### Diagonal proposition

**Stalnaker's reading of the diagonal: the proposition that the sentence expresses a truth, which an assertion conveys when hearers do not know which proposition the sentence expresses; a reinterpretation forced by conversational norms, not a meaning.** Robert Stalnaker, "Assertion" (1978) and "Assertion Revisited" (2004).

- **Metasemantic, not semantic** (3.3): each row is the proposition the sentence would have expressed had its context been that world, and the sentence's one semantic content is the actual row.
- **Against the semantic reading:** for Chalmers and Jackson the diagonal is a semantic value doing the work of a Fregean sense ([two-dimensional semantics](#two-dimensional-semantics)); for Stalnaker it is what a particular assertion conveys.
- **The necessary a posteriori, on this view** (3.3): one necessary content, plus a diagonal conveyed in context.
- **Trap: Stalnaker is not a Millian.** Salmon and Soames give "Hesperus is Phosphorus" one a priori proposition plus an a posteriori fact about the sentence; Stalnaker gives a sentence one necessary content plus a diagonal conveyed in context.

*Lessons:* [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md)

### Character and content

**Character is the rule a competent speaker learns ("I" refers to whoever is speaking); content is what the rule delivers at a context, what is said, which a world then makes true or false.** David Kaplan, "Demonstratives" (a manuscript dated 1977, published 1989).

**The definitions** (3.4 D1–D2). A context is $c = \langle a_c, t_c, l_c, w_c \rangle$: its agent, time, location and world. A circumstance of evaluation is a world $w$ (Kaplan's are time–world pairs; 3.4 holds the time fixed). The content of an expression $e$ at $c$, written $\chi_e(c)$, maps each world to an extension: a truth value for a sentence, an object for a term. The character $\chi_e$ maps each context to that content. For "I", $\chi_{\text{I}}(c)(w) = a_c$ at every $w$; "here" gives $l_c$ and "now" gives $t_c$. A sentence $S$ is *true at* $c$ iff $\chi_S(c)(w_c) = T$. *In words:* character takes a use to what is said; content takes a world to whether it is so.

- **One character, two contents** (3.4 Example 1). At a noon council meeting Dr Hartigan and Councillor Velmont each say "I am hungry". The sentence means the same in both mouths, yet they say different things, and one can be true while the other is false. "The chair is hungry" runs the other way: one content at both contexts, whose referent shifts from world to world.
- **In code** (3.4): character is a function body with free variables for speaker, place and time; a context binds them; content is the resulting closure, which a world turns into an extension ([`programming-languages` 6.1](../programming-languages/lessons/06-01-names-scope-and-closures.md)).
- **Two-dimensional ancestry** (3.3, 3.4): character is the two-dimensional matrix for one expression at a time, restricted to indexicals ([two-dimensional semantics](#two-dimensional-semantics)).
- **Beyond the pure indexicals:** [gradable adjectives](#gradable-adjective) take their standard from the conversation.
- **Validity follows character, necessity follows content** ([logic of demonstratives](#logic-of-demonstratives)).
- **A rival** (3.4 Connections; [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md)): Davidson makes truth a property of a sentence as spoken by a speaker at a time, an utterance-based rival to Kaplan's truth at a context. [4.2](lessons/04-02-meaning-as-use.md)'s problems put dated sentences ("the fair is today") through character and content.
- **Trap: character is not Fregean sense.** A character fixes nothing true or false until a context is supplied, and two speakers with one character say different things.
- **Trap: "I" is not ambiguous.** It has one meaning, its character, and many contents. The context here is the context of utterance; MacFarlane's context of assessment is [`epistemology` 3.4](../epistemology/lessons/03-04-contextualism-and-its-rivals.md)'s.
- **Trap: a context fixes "here" once.** It does not shift to wherever the agent is at each world of evaluation.

*Lessons:* [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md), [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md), [4.2](lessons/04-02-meaning-as-use.md)

### Indexical

**An expression whose referent is fixed by the context of use, such as "I", "here", "now", "today", "that" or "he", so one sentence says different things in different mouths.** Kaplan, "Demonstratives" (1977/1989).

- **Content is referent** (3.4): an indexical's content at a context is its referent, so "I" hands a proposition its speaker as a Millian name hands it its bearer ([direct reference](#direct-reference), [Millianism](#millianism)).
- **Pure indexicals and true demonstratives** (3.4 D3): pure indexicals ("I", "here", "now", "today") get their referent from the rule alone; true demonstratives ("that", "he") also need a pointing or an intention.
- **Not token-reflexive** (3.4). Kaplan rejected Hans Reichenbach's (1947) reading of "I" as "the speaker of this token", a description neither rigid nor directly referential; Kaplan's sentences are true at contexts, tokens or none. Token-reflexive truth conditions for "now" are [`metaphysics` 5.1](../metaphysics/lessons/05-01-the-a-theory-and-the-b-theory.md)'s.
- **In a truth theory** ([4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md)): sentences with indexicals are true only as spoken, so Davidson relativizes truth to speaker and time: "Io aiuto Enzo" is true as spoken by $x$ at $t$ iff $x$ helps Enzo at $t$.
- **Some beliefs need one** ([essential indexical](#essential-indexical)).
- **Trap: an indexical is not ambiguous.** One character, many contents ([character and content](#character-and-content)).

*Lessons:* [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md), [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md)

### Direct reference

**An expression is directly referential when what it contributes to what is said is its referent itself, not a condition the referent meets: the rule finds the object, and only the object goes into the proposition.** Kaplan, "Demonstratives" (1977/1989); 3.4 D3.

- **Hence rigid, given a context** (3.4 D3): within a context a directly referential term designates one object at every world ([rigid designator](#rigid-designator)).
- **Singular propositions.** What "I am making a mess" says at John Perry's context is the proposition that Perry is making a mess, with Perry himself as a constituent.
- **Extended to names** by the Millians ([Millianism](#millianism)); Mill's non-connotative names make him a forerunner ([connotative and non-connotative names](#connotative-and-non-connotative-names), 3.2).
- **The price** (3.4): [Frege's puzzle](#freges-puzzle) returns. Perry's "I am making a mess" and "John Perry is making a mess" have one content, though only the first explains why he stopped.

*Lessons:* [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

### Logic of demonstratives

**In Kaplan's logic a sentence is valid iff it is true at every proper context, so "I am here now" is valid, though what it says could have been false.** Kaplan, "Demonstratives" (1977/1989); 3.4 T1.

- **The theorem** (3.4 T1). Call a context proper if $a_c$ is at $l_c$ at $t_c$ in $w_c$. "I am here now" is valid, but "Necessarily, I am here now" is not. *Proof.* Properness makes $\chi(c)(w_c) = T$ for every proper $c$. But $\chi(c)$ is the singular proposition that $a_c$ is at $l_c$ at $t_c$, false at any world where $a_c$ is elsewhere then. *In words:* it cannot be said falsely, yet what it says could have been false. This is settled logic, given Kaplan's definitions.
- **Kaplan's conclusion** (3.4): such sentences yield contingent truths knowable a priori (his own case is "I exist"), the indexical cousin of 3.3's [contingent a priori](#contingent-a-priori).
- **Hard case: the voicemail** (3.4 Watch out). "I'm not here now" strains the result. Kaplan set it aside in a footnote; Stefano Predelli (1998) gives recordings contexts whose agent is elsewhere.
- **Trap: valid is not necessary.** Validity follows character, necessity follows content ([character and content](#character-and-content)).

*Lessons:* [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

### Gradable adjective

**An adjective such as "tall" or "flat" that comes in degrees and takes its standard from the conversation, so what it says shifts with the context.** 3.4.

- **Character beyond the pure indexicals** (3.4): the standard comes from the conversation, the model contextualists borrow for "knows" ([`epistemology` 3.4](../epistemology/lessons/03-04-contextualism-and-its-rivals.md)).
- **Not vagueness** ([5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) Watch out): fixing the sense and the standard still leaves [borderline cases](#borderline-case); "tall for an adult man" is no sharper than "tall".

*Lessons:* [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md), [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md)

### Essential indexical

**Some beliefs, the ones that explain action, can only be expressed with an indexical: John Perry, following a trail of sugar round a supermarket counter to warn the shopper with the torn sack, stopped only when he came to believe that *he himself* was making a mess.** John Perry, "The Problem of the Essential Indexical" (*Noûs*, 1979).

- **Why "I" is essential** (3.4): believing that *John Perry* is making a mess would have stopped him only if he also believed he was John Perry.
- **Perry's move** (3.4): separate the belief state from what is believed. Everyone in the state "I am making a mess" checks his own cart, though each believes something different; anyone can believe of Perry that he is making a mess, but only Perry by being in that state. States explain action; contents are what is true.
- **Siblings used it unnamed** (3.4): someone lost in a wood who realizes "the road is *here*" ([`metaphysics` 5.1](../metaphysics/lessons/05-01-the-a-theory-and-the-b-theory.md)); the flight director's "now" ([`philosophy-of-religion` 1.4](../philosophy-of-religion/lessons/01-04-eternity-immutability-and-simplicity.md)); the train leaving at 15:04 and the "old fact, new mode" reply to the knowledge argument ([`philosophy-of-mind` 1.3](../philosophy-of-mind/lessons/01-03-the-knowledge-argument.md)).
- **Trap: the 1979 paper's case is the messy shopper.** Lingens (the amnesiac in the Stanford library) and Heimson (who thinks he is Hume) come from Perry's earlier "Frege on Demonstratives" (1977).

*Lessons:* [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

### Millianism

**A proper name's semantic content is its bearer and nothing more, so co-referring names make the same contribution to what is said; an indexical's content is its referent, which makes "I" the most Millian word there is.** Named for Mill's non-connotative names ([connotative and non-connotative names](#connotative-and-non-connotative-names), 3.2). Modern Millians: Nathan Salmon (*Frege's Puzzle*, 1986), Scott Soames (*Beyond Rigidity*, 2002), David Braun (1998).

**The Millian's problem** (3.4):

**P1. Millianism.** The content of a proper name, in any context, is its bearer; an indexical's is its referent. *In words:* a name contributes only the thing it names.

**P2. Compositionality of content.** A sentence's content, a that-clause's included, is fixed by the contents of its parts.

**P3. Relational reports.** "A believes that S" is true at $c$ iff A stands in the belief relation to $\chi_S(c)$ ([belief report](#belief-report)).

**∴ C1.** Swapping co-referring names, or a name for a co-referring indexical, inside a belief report preserves its truth value: if Lois believes Superman flies, she believes Clark Kent flies; if Perry believes he himself is making a mess, he believes John Perry is.

**P4. The data.** Competent speakers judge such swaps to change truth value, and the beliefs explain different actions.

**∴ C2.** Either the judgments in P4 mislead about truth, or P1, P2 or P3 is false.

- **Who denies what** (3.4). Millians with [guises](#guises) deny that P4 tracks truth: Salmon (the second report misleads pragmatically), Soames (speakers assert descriptively enriched propositions), Braun (hearers take one content in two ways). The [hidden-indexical theory](#hidden-indexical-theory) keeps P1 and denies P3. [Neo-Fregeans](#neo-fregeanism) deny P1. Perry separates belief states from contents ([essential indexical](#essential-indexical)).
- **Where it is weakest: P4** (3.4). The strongest objection to the Millian, after Stephen Schiffer (1987): a [conversational implicature](#conversational-implicature) must be [calculable](#calculability) from what is said, but ordinary speakers do not think the two Lois reports say the same, so they cannot calculate the difference. The strongest replies: ordinary practice runs belief states together with contents, so the information is conveyed uncalculated; or, with Braun, hearers take the reports' one content in two ways. The Millian concedes that ordinary judgments about reports are systematically wrong; the Fregean concedes, after Kripke, that the same judgments arise without the Millian premise ([Kripke's puzzle about belief](#kripkes-puzzle-about-belief)).
- **On identity sentences** (3.3): for Salmon and Soames, "Hesperus is Phosphorus" expresses the proposition "Hesperus is Hesperus" does, knowable a priori; what is learned a posteriori is that the sentence expresses it ([necessary a posteriori](#necessary-a-posteriori)).
- **Elsewhere in the course.** In [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), Millians deny that the cognitive difference between "$a = a$" and "$a = b$" is a difference in what the words contribute: the sentences express one proposition, and the difference lies in how a speaker takes it in or what an utterance conveys ([Frege's puzzle](#freges-puzzle)). In [1.2](lessons/01-02-belief-reports-and-empty-names.md), a Millian counts only the referent in a belief report, so an apparently false report is true and its apparent falsity needs a pragmatic explanation. In [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md), a Millian says rival reference axioms state the same singular conditions, and a speaker's doubt concerns a guise, not a content.
- **The profession is split** (PhilPapers 2020, target faculty, N = 1,269): 38.69 percent accept or lean towards Millian views of proper names, 36.09 percent towards Fregean.
- **Trap: Kripke's arguments do not by themselves make you a Millian.** 3.1's arguments target senses given by associated descriptions; a Fregean may posit senses that are not descriptions ([neo-Fregeanism](#neo-fregeanism)).
- **Left to you.** Boss 3(c) asks what Mill's account says an identity between two proper names conveys, and how Frege answers it; the card does not.

*Lessons:* [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [1.2](lessons/01-02-belief-reports-and-empty-names.md), [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md), [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md)

### Guises

**Salmon's ways of taking a proposition: belief becomes a three-place relation among a person, a Russellian proposition and a guise, so co-referring names can be swapped in a report without changing its truth value, and the felt difference is pragmatic.** Nathan Salmon, *Frege's Puzzle* (1986).

$$A \text{ believes } p \iff \exists g\,\bigl(A \text{ grasps } p \text{ by } g \wedge \mathrm{BEL}(A, p, g)\bigr),$$

with $g$ ranging over guises (3.4). *In words:* to believe a proposition is to accept it under some way of taking it.

- **The Lois reports** (3.4): both are true; "Lois believes that Clark Kent flies" misleads by pragmatically conveying how she takes the proposition.
- **On Pierre** (3.4 Example 2): Salmon accepts steps 2 and 3 of the puzzle, rejects converse disquotation, and weakens the rationality principle to ban only believing $p$ and $\neg p$ under one guise. Pierre BELs $p$ under his "Londres" guise and $\neg p$ under his "London" guise, so he does believe that London is pretty ([Kripke's puzzle about belief](#kripkes-puzzle-about-belief)).
- **Soames's variant** (*Beyond Rigidity*, 2002): the singular proposition remains what a sentence semantically expresses, but speakers assert descriptively enriched propositions, which can differ between the two reports.
- **The objection** is calculability ([Millianism](#millianism), "Where it is weakest").
- **Used earlier:** "Salmon's guises" in [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md); a speaker's doubt as concerning a guise, not a content, in [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md).
- **Trap: a guise is not what is believed.** It is a way of taking a proposition; the proposition believed is still the singular one.

*Lessons:* [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md), [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md)

### Hidden-indexical theory

**A belief report also concerns a way of thinking that the context supplies though no word in the report names it, so swapping co-referring names can change which way of thinking is in play, and with it the report's truth value.** Mark Crimmins and John Perry, "The Prince and the Phone Booth" (1989).

- **Where it sits** (3.4): it keeps P1 of the Millian's problem (a name's content is its bearer) and denies P3 (that a report merely relates a person to what its clause says) ([Millianism](#millianism)).
- **On Pierre** (3.4 Example 2): the report in step 2 is true where the context supplies Pierre's "Londres" way of thinking and false where it supplies his "London" way, so the contradiction mixes contexts. Whether Pierre believes that London is pretty depends on the way of thinking the context supplies ([Kripke's puzzle about belief](#kripkes-puzzle-about-belief)).

*Lessons:* [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

### Neo-Fregeanism

**Names, and perhaps indexicals, contribute a mode of presentation to what is said, so belief reports with co-referring names can say different things and differ in truth value.** 3.4. Versions include non-descriptive senses and the two-dimensional intensions of Chalmers and Jackson (3.3).

- **In the Millian's problem** (3.4) it denies P1: a name contributes a [mode of presentation](#mode-of-presentation), so the two clauses say different things, as with 1.2's [indirect reference](#indirect-reference). 3.3's [two-dimensional](#two-dimensional-semantics) intensions are one modern version ([Millianism](#millianism)).
- **Against variability in sense** ([1.2](lessons/01-02-belief-reports-and-empty-names.md)): where Frege needs the report to use the believer's own sense, a neo-Fregean relaxes that requirement, so the believer's sense need only be suitably similar to the reporter's, by a standard the context sets (Graeme Forbes) ([variability in sense](#variability-in-sense)).
- **On Pierre and Paderewski** (3.4 Example 2): Fregeans give "Londres" and "London" different senses for Pierre, so his thoughts do not contradict, and translation fails at step 2, since the report's "London" need not express his "Londres" sense. Kripke's Paderewski case removes translation (Peter takes the pianist and the statesman Paderewski for two men); the Fregean replies with two senses for one name (William Taschek, 1988). Does Pierre believe that London is pretty? Not until "London" is tied to one of his senses.
- **In a truth theory** ([4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md)): a Fregean holds that an interpretive reference axiom must use a name that presents the referent as the speaker's name does; John McDowell (1977) defends such non-descriptive senses.
- **What it must face** (3.1): Kripke's arguments target senses given by descriptions a speaker associates, so the neo-Fregean's senses must be non-descriptive or survive those arguments.
- **What it concedes** (3.4): after Kripke, the same substitution judgments arise without the Millian premise.

*Lessons:* [1.2](lessons/01-02-belief-reports-and-empty-names.md), [3.1](lessons/03-01-against-descriptivism.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md), [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md), [4.2](lessons/04-02-meaning-as-use.md)

### Kripke's puzzle about belief

**Pierre, a monolingual Frenchman, assents to "Londres est jolie"; later, living in a drab part of London and never linking the two names, he assents to "London is not pretty". Principles of disquotation and translation alone then credit him with contradictory beliefs, though no co-referring names were swapped.** Saul Kripke, "A Puzzle about Belief" (1979).

**The derivation** (3.4 Example 2):

1. He sincerely assents to "Londres est jolie". By **disquotation**, Pierre croit que Londres est jolie.
2. By **translation**: Pierre believes that London is pretty.
3. Having learned English by immersion, he assents to "London is not pretty". By disquotation, he believes that London is not pretty.
4. He rejects "London is pretty". By **converse disquotation**, he does not believe that London is pretty, contradicting step 2.
5. By steps 2 and 3 he believes a proposition and its negation, which the **rationality** principle calls irrational, though no reflection could show him a mistake.

- **Kripke's moral** (3.4): the puzzle reaches the same contradiction from the [disquotation and translation principles](#disquotation-and-translation-principles) alone, with no premise about names, so, Kripke argued, substitution failures alone cannot refute [Millianism](#millianism). He gives no verdict on whether Pierre believes that London is pretty; he takes our practice of attributing belief to give out here.
- **Paderewski** (3.4): the variant without translation. Peter takes the pianist and the statesman Paderewski for two men.
- **Three treatments** (3.4). Salmon ([guises](#guises)): yes, Pierre believes it; converse disquotation goes, and rationality bans only $p$ and $\neg p$ under one guise. The [hidden-indexical theory](#hidden-indexical-theory): it depends on the way of thinking the context supplies. Fregeans ([neo-Fregeanism](#neo-fregeanism)): translation fails at step 2; not until "London" is tied to one of his senses.
- **Trap: Pierre is not Lois again.** Nothing is substituted: disquotation and translation do all the work.
- **Left to you.** Whether two-dimensional intensions handle Pierre, and whether Kripke's moral tells against the two-dimensionalist, the Millian, both or neither, is Boss 3(d)'s question; the card takes no side.

*Lessons:* [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

### Disquotation and translation principles

**Disquotation: sincere, reflective assent to a sentence shows belief in what it says. Translation: a good translation of a truth is a truth. With their companions, these generate Kripke's puzzle without any premise about names.** Kripke, "A Puzzle about Belief" (1979), which names the disquotational principle; 3.4.

| Principle | Says |
|---|---|
| Disquotation | Sincere, reflective assent to a sentence shows belief in what it says. |
| Converse disquotation | Sincere dissent shows non-belief. |
| Translation | A good translation of a truth is a truth. |
| Rationality | Believing a proposition and its negation is irrational. |

- **Who gives up what** (3.4 Example 2). Salmon rejects converse disquotation and weakens rationality to one guise ([guises](#guises)); Fregeans say translation fails at step 2 ([neo-Fregeanism](#neo-fregeanism)); hidden-indexical theorists make step 2's report true or false according to the way of thinking the context supplies ([hidden-indexical theory](#hidden-indexical-theory)).
- **Paderewski** removes translation: Peter takes the pianist and the statesman Paderewski for two men ([Kripke's puzzle about belief](#kripkes-puzzle-about-belief)).
- **Trap: these principles, not Millianism, drive Pierre.**

*Lessons:* [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

**Module 4: Meaning, use, and communication**

### Truth-conditional semantics

**To give a sentence's meaning is, at its core, to give the conditions under which it is true, derived compositionally from finitely many axioms.** Donald Davidson's program ("Theories of Meaning and Learnable Languages", 1965; "Truth and Meaning", 1967; "Radical Interpretation", 1973): a Tarski-style [truth theory](#truth-theory), suitably constrained, can serve as a language's theory of meaning, since knowing it would suffice to interpret every sentence. The young Wittgenstein put the idea in one line: "To understand a proposition means to know what is the case, if it is true." (*Tractatus* 4.024, tr. Ogden, 1922; quoted in [4.2](lessons/04-02-meaning-as-use.md)).

- **Davidson's case, in outline** (4.1). Finite speakers master infinitely many sentences (P1); so meaning is compositional ([learnability](#learnability), P2); assigning meaning-entities to words explains nothing about how they combine, recursive rules do (P3); a sentence's truth condition is the core of its meaning, and a Tarski-style theory derives one for every sentence from finite axioms (P4); so a constrained truth theory is a theory of meaning (C).
- **The hard question.** What makes the right side of a [T-sentence](#t-sentence) give the meaning of the left, rather than something with the same truth value? Truth alone does not ([Foster's problem](#fosters-problem)); [radical interpretation](#radical-interpretation) and [charity](#principle-of-charity) are meant to supply the rest.
- **Where 4.1 locates the weakness: P4,** read as "knowing a true truth theory suffices for understanding" (Foster; Larson and Segal's extension and information problems).
- **Objections on 4.1's argument map,** each labelled with what it presses: Foster (true but not interpretive, against P4); Dummett 1975 (only a [modest](#modest-and-full-blooded-theories) theory, against C); use theorists ([meaning as use](#meaning-as-use), 4.2, against P4); [Kripke's Wittgenstein](#kripkes-wittgenstein) (4.3: no fact fixes the axioms radical interpretation picks).
- **The order-of-explanation dispute** (4.2). The truth-conditional theorist holds that what a word is true of explains which uses are correct and how speakers understand new sentences, so use is only the evidence for meaning; [inferentialism](#inferentialism) reverses the order and explains truth afterwards, as what good inferences preserve.
- **Withdrawn for meaning ascriptions only** (4.3). The [sceptical solution](#sceptical-solution) puts [assertability conditions](#assertability-conditions) in place of truth conditions for sentences like "Jones means plus".
- **Embedding.** A compositional truth-conditional clause gives an embedded sentence the content it has alone, which is what the [Frege-Geach problem](#frege-geach-problem) demands (4.1).
- **Trap: a truth theory does not pair sentences with meanings.** Its theorems link a mentioned sentence to a used one; no meaning-entity appears (P3).
- **Trap: the program is not committed to the material conditional.** Clause (C)'s material "if" is 4.1's convention for its toy; any clause that builds the conditional's truth condition from its parts' truth conditions handles embedding the same way.
- **Left to you.** Boss 4(d) asks whether Kripke's Wittgenstein undermines a truth theory and whether the sceptical solution leaves truth-conditional semantics standing; the card gives no verdict.

*Lessons:* [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md), [4.2](lessons/04-02-meaning-as-use.md), [4.3](lessons/04-03-the-rule-following-paradox.md)

### Learnability

**A language with infinitely many sentences can be learned by finite creatures only if finitely many words and rules fix the meaning of every sentence.** Davidson, "Theories of Meaning and Learnable Languages" (1965). The argument makes [compositionality](#compositionality) (1.1's) a condition on any learnable language: each sentence's meaning must be fixed by finitely many features of its words and how they combine. It is P1–P2 of Davidson's case for [truth-conditional semantics](#truth-conditional-semantics).

- **The toy's numbers** (4.1). The six axioms of 4.1's [truth theory](#truth-theory) reach infinitely many sentences: 8 with no "se", 72 with at most one level of nesting, 5,192 with at most two. Writing $N_k$ for the number of sentences with at most $k$ levels of nesting, $N_0 = 8$ (two subjects, two objects, with or without "non") and $N_{k+1} = 8 + N_k^2$ (an atomic sentence, or "se $S_1$, allora $S_2$" with each part of at most $k$ levels).
- **Compositionality made literal.** In a derivation each axiom enters exactly where its word occurs (4.1 Example 1; [canonical derivation](#canonical-derivation)).
- **Cousins.** Compositionality is the rule [`programming-languages` 2.3](../programming-languages/lessons/02-03-denotational-semantics-and-fixed-points.md) imposes on a program's denotation.
- **Trap: this is the argument about language, not thought.** The systematicity argument for a language of thought in [`philosophy-of-mind` 4.1](../philosophy-of-mind/lessons/04-01-intentionality-and-folk-psychology.md) is its cousin, with thoughts in place of sentences.

*Lessons:* [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md)

### T-sentence

**A theorem of the form "$s$ is true iff $p$", whose left side mentions (quotes) a sentence of the object language and whose right side uses a sentence of the metalanguage.** Davidson's model theorem for a theory of meaning ("Truth and Meaning", 1967), in the form of Tarski's [Convention T](#convention-t) (5.1). 4.1's example: "Giulia aiuta Enzo" is true iff Giulia helps Enzo. Here Italian is the [object language](#object-language-and-metalanguage), mentioned, and English the metalanguage, used.

- **Extensional.** The "iff" is the material biconditional, so a T-sentence can be true without its right side giving the meaning of the left. Two terms keep the difference: a theory is *extensionally adequate* when every T-sentence it entails is true, *interpretive* when each right side gives the meaning of its left side. [Foster's problem](#fosters-problem) lives in the gap.
- **Homophonic theories.** Stated for a language in that same language, the T-sentences look trivial ("'Giulia helps Enzo' is true iff Giulia helps Enzo"), which is where Dummett's modesty charge bites ([modest and full-blooded theories](#modest-and-full-blooded-theories)).
- **Context.** A sentence with an [indexical](#indexical) is true only as spoken, so Davidson relativizes truth to speaker and time: "Io aiuto Enzo" is true as spoken by $x$ at $t$ iff $x$ helps Enzo at $t$ (4.1).
- **In 5.2.** Dummett ("Truth", 1959) argued that T-sentences cannot both say what sentences mean and explain "true" (in Horwich's image, one equation with two unknowns). The deflationist fixes truth by the schema and takes meaning from [use](#meaning-as-use); Davidson rejects both definition and deflation and treats truth as basic ([5.2](lessons/05-02-deflationism.md)).
- **Trap: a T-sentence does not pair a sentence with a meaning.** It links a mentioned object-language sentence to a used metalanguage sentence; no meaning-entity appears.

*Lessons:* [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md), [5.2](lessons/05-02-deflationism.md)

### Truth theory

**A finite set of axioms (reference axioms for names, satisfaction axioms for predicates, a recursive clause for each way of building a sentence) that entails a T-sentence for every sentence of a language.** Davidson's proposal: such a theory, Tarski-style and constrained by [radical interpretation](#radical-interpretation), serves as a theory of meaning. A phrasebook is a finite list of pairs; a truth theory is a dictionary plus a grammar (4.1).

4.1's theory for a scrap of Italian $L$: two names, "Giulia" and "Enzo"; the verb "aiuta" (helps); "non" before the verb; and "se $S_1$, allora $S_2$" (if $S_1$, then $S_2$), freely nested. Let $\alpha, \beta$ range over the names, $S_1, S_2$ over sentences of $L$, and let $\mathrm{ref}(\alpha)$ be the referent (R1) and (R2) assign.

| Axiom | Statement |
|---|---|
| (R1), (R2) | "Giulia" refers to Giulia; "Enzo" refers to Enzo. |
| (S) | A pair $\langle x, y\rangle$ satisfies "aiuta" iff $x$ helps $y$. |
| (A) | "$\alpha$ aiuta $\beta$" is true iff $\langle \mathrm{ref}(\alpha), \mathrm{ref}(\beta)\rangle$ satisfies "aiuta". |
| (N) | "$\alpha$ non aiuta $\beta$" is true iff $\langle \mathrm{ref}(\alpha), \mathrm{ref}(\beta)\rangle$ does not satisfy "aiuta". |
| (C) | "se $S_1$, allora $S_2$" is true iff, if $S_1$ is true, then $S_2$ is true. |

*In words:* a dictionary for three words and a rule for each way of building a sentence.

- **Familiar clauses, new job.** These are [`mathematical-logic` 2.2](../mathematical-logic/lessons/02-02-structures-satisfaction.md)'s satisfaction clauses read as meaning-giving; (C)'s "if" is the material conditional of [`mathematical-logic` 1.2](../mathematical-logic/lessons/01-02-semantics-truth-tables.md), a convention for the toy.
- **A derivation** (4.1 Example 1) applies (C), then (A) or (N) with (R1), (R2) and (S) for each part, then substitutes: "se Giulia aiuta Enzo, allora Enzo non aiuta Giulia" is true iff, if Giulia helps Enzo, then Enzo does not help Giulia. A *situation* settles which of the four ordered pairs of Giulia and Enzo are helping pairs, so there are 16; the sentence is false in exactly 4, those in which the two help each other. No line asks whether anyone asserts the antecedent.
- **Truth is not enough.** A theory with a deviant axiom can entail only true T-sentences and still not be interpretive ([Foster's problem](#fosters-problem)).
- **Enzo's other name** (4.1 Example 2, invented). Replace (R2) by (R2′): "Enzo" refers to Quenby, Enzo's crossword pen name. Every T-sentence stays true, and the two theories agree on all 5,192 sentences up to two levels of nesting in all 16 situations, so no pattern of holding true separates them. The one place left is the beliefs the interpreter ascribes: a speaker who holds true "Giulia aiuta Enzo" may doubt that Giulia helps the setter Quenby, yet (R2′) has the interpreter ascribe her that belief. A Fregean concludes that (R2′) fails charity's coherence, so an interpretive reference axiom must use a name that presents Enzo as the speaker's name does (John McDowell, 1977, defends such non-descriptive senses); a [Millian](#millianism) replies that both theories state the same singular conditions and the doubt concerns a [guise](#guises), not a content. The truth theory gives no verdict: Frege's puzzle returns inside the metalanguage.
- **Trap: the material "if" of (C) is a convention,** not a commitment of the program.
- **Left to you.** Boss 4(b) asks you to write and use a truth theory for a different toy language; the card gives no theory for it.

*Lessons:* [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md)

### Radical translation

**Quine's thought experiment: translating a wholly unknown language from behavioural evidence alone, with no dictionary and no bilingual.** W. V. Quine, *Word and Object* (1960), ch. 2. A linguist watches a native say "Gavagai" as a rabbit runs past. Her evidence is the speaker's dispositions to assent to and dissent from sentences under patterns of sensory stimulation (stimulus meaning); her product is a translation manual. Quine holds translation indeterminate: rival manuals fit all the evidence there could be.

- **The ancestor of [radical interpretation](#radical-interpretation).** Davidson (1973) keeps the idealized starting point and changes both the evidence and the product.
- **Why a manual is not enough, on Davidson's view.** A manual could translate into a language the interpreter does not understand.
- **Trap: radical interpretation is not radical translation renamed.** The evidence (holding true, tied to shared objects and events, not stimulus patterns) and the product (a truth theory, not a manual) both differ.

*Lessons:* [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md)

### Radical interpretation

**Davidson's idealized project of interpreting a speaker from scratch, assigning meanings and beliefs together from evidence about which sentences she holds true and what in the shared world prompts her to.** Davidson, "Radical Interpretation" (1973), developed from Quine's [radical translation](#radical-translation).

| | Radical translation (Quine, 1960) | Radical interpretation (Davidson, 1973) |
|---|---|---|
| Evidence | dispositions to assent and dissent under patterns of sensory stimulation | which sentences the speaker holds true, with the objects and events in the shared world that prompt her |
| Product | a translation manual | a [truth theory](#truth-theory) stated in the interpreter's own language |
| What is left open | rival manuals fit all possible evidence | rival interpretations fit too, but Davidson thinks less is left open than Quine did |

- **Belief and meaning together.** Holding a sentence true reflects both what it means and what the speaker believes, and neither is known first. Davidson's way in is the [principle of charity](#principle-of-charity).
- **The constraint truth cannot supply.** In 1973 Davidson weakens [Convention T](#convention-t): Tarski took translation as given to define truth; Davidson takes truth as understood and asks only that the T-sentences be true, so that meaning can be read off a theory truth constrains. [Foster's problem](#fosters-problem) shows that this is not enough, and Davidson's "Reply to Foster" (1976) rests interpretation on radical interpretation's formal and empirical constraints.
- **Meaning, belief and preference.** "Toward a Unified Theory of Meaning and Action" (1980) combines Bayesian decision theory with radical interpretation, interpreting all three together: see [`decision-theory` 1.4](../decision-theory/lessons/01-04-what-a-representation-theorem-shows.md) for the interpretive reading of representation theorems and [2.2](../decision-theory/lessons/02-02-probability-from-preference.md) there for credence from preference.
- **Pressed by** [Kripke's Wittgenstein](#kripkes-wittgenstein): no fact fixes which axioms are correct (4.1's map).
- **In 5.2.** A Davidsonian who reads meanings off an interpretive truth theory tested by radical interpretation faces Horwich's minimalist, for whom meaning comes from use; [5.2](lessons/05-02-deflationism.md) P3 asks for their crux.
- **Trap: the evidence is not stimulus meaning.** Davidson's data are hold-true attitudes tied to the shared world, not the sensory surfaces.

*Lessons:* [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md), [5.2](lessons/05-02-deflationism.md)

### Principle of charity

**Davidson's interpretive charity: interpret a speaker so as to make her largely consistent and right by the interpreter's lights.** The wording is [`philosophy-of-mind` 2.3](../philosophy-of-mind/lessons/02-03-anomalous-monism-and-supervenience.md)'s, which 4.1 follows. For Davidson it is a precondition of understanding anyone at all, not a heuristic: without it [radical interpretation](#radical-interpretation) cannot pull belief and meaning apart.

- **Trap: two charities.** This is not the charity of [`philosophical-method` 1.3](../philosophical-method/lessons/01-03-reconstruction-and-charity.md) (that card's [principle of charity](../philosophical-method/reference.md#principle-of-charity)), a norm for reconstructing an argument whose words you already understand, bounded by what the author would sign. Davidson's concerns interpreting a speaker whose words are not yet understood.
- **Where else it works.** It grounds the anomalism of the mental ([`philosophy-of-mind` 2.3](../philosophy-of-mind/lessons/02-03-anomalous-monism-and-supervenience.md)) and is the premise Davidson turns against untranslatable conceptual schemes ([`philosophy-of-science` 2.4](../philosophy-of-science/lessons/02-04-kuhn-incommensurability-and-theory-choice.md)).
- **Charity and belief reports** (4.1 Example 2). A Fregean holds that a co-referring deviant reference axiom fails charity's coherence once the interpreter ascribes beliefs; a Millian denies that the difference is one of content ([truth theory](#truth-theory)).

*Lessons:* [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md)

### Foster's problem

**A truth theory can be true and extensionally adequate, every T-sentence it entails true, yet not interpretive: truth alone cannot make a truth theory a theory of meaning.** John Foster, "Meaning and Truth Theory" (in Evans and McDowell, eds., *Truth and Meaning*, 1976), taking Davidson's 1973 standard, that the T-sentences be true, at its word.

- **4.1's deviant axiom** (the lesson's own, not Foster's). Replace (S) by (S′): $\langle x, y\rangle$ satisfies "aiuta" iff $x$ helps $y$ and Rome is the capital of Italy. Rome is the capital, so (S′) is true, and so is every T-sentence it yields, such as "'Giulia aiuta Enzo' is true iff Giulia helps Enzo and Rome is the capital of Italy". The theory is extensionally adequate but not interpretive: its user would hear every Italian sentence as partly about Rome.
- **Attribution.** Foster's own published deviant used the relational predicate "is a part of"; the deviants that add a true conjunct, common in textbooks, are later illustrations.
- **Davidson's three answers** (4.1). In 1967: every T-sentence comes from one finite base, so a bad axiom should show up somewhere. Next: an empirical theory's T-sentences must hold as laws, not by accident. And in "Reply to Foster" (1976): what suffices for interpretation is knowing the T-sentences together with the fact that they are theorems of a theory meeting the formal and empirical constraints of [radical interpretation](#radical-interpretation).
- **Generalized** (4.1's weakest point, P4): truth is too coarse a filter. A theory that proves "…iff Giulia helps Enzo" also proves, by logic alone, "…iff it is not the case that Giulia does not help Enzo", and knowing an interpretive T-sentence does not tell you that it is the interpretive one. Richard Larson and Gabriel Segal (*Knowledge of Meaning*, 1995) call these the *extension problem* and the *information problem*.
- **The strongest reply and the concessions** (4.1). Count only T-sentences reached by [canonical derivation](#canonical-derivation), from a theory the interpreter knows to be confirmed by radical interpretation. Davidson concedes that true T-sentences were never enough and that the weight falls on the theory's empirical standing; the critic, that a theory known to have that standing would serve. The dispute is whether that standing can be stated without already using "means".
- **Trap: extensionally adequate is not interpretive.** True T-sentences are not thereby meaning-giving, which is why the extensional "iff" matters ([T-sentence](#t-sentence)).
- **Trap: not Dummett's objection.** Foster concerns true theories that are not interpretive; Dummett's concerns interpretive theories that are only [modest](#modest-and-full-blooded-theories).
- **Left to you.** Boss 4(b) sets its own toy language and its own Foster-style deviants and asks what a laws requirement does to each; the card gives neither the deviants nor any verdict on which a laws test excludes.

*Lessons:* [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md)

### Canonical derivation

**A derivation of a T-sentence that only unpacks the theory's clauses and substitutes, with no further logical steps, so that its right side mirrors the structure of the sentence on the left.** Credited to Martin Davies (1981). Davidsonians use it against the extension problem: only canonically derived T-sentences count as interpretive.

- **4.1 Example 1 is one** ([truth theory](#truth-theory)): (C) for the conditional, then (A) or (N) with (R1), (R2) and (S) for each part, then substitution of the derived biconditionals.
- **What it shuts out.** Logic done in the metalanguage. From only interpretive axioms a theory still proves, by double negation or contraposition, T-sentences with other right sides ("…iff it is not the case that Giulia does not help Enzo"); a canonical derivation never takes those steps. [4.3](lessons/04-03-the-rule-following-paradox.md)'s Flashback sets a case.
- **What it does not do alone.** It restricts which theorems count, not which axioms are right; 4.1's strongest reply to Foster pairs it with a theory the interpreter knows to be confirmed by [radical interpretation](#radical-interpretation) ([Foster's problem](#fosters-problem)).

*Lessons:* [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md), [4.3](lessons/04-03-the-rule-following-paradox.md)

### Frege-Geach problem

**Any account of meaning must give a sentence the same content embedded and unasserted (after "if", "not", "or") as asserted alone, or inferences such as modus ponens equivocate.** The problem belongs to [`ethics` 6.2](../ethics/lessons/06-02-expressivism.md) (P. T. Geach, "Assertion", 1965), which calls it a demand for a compositional semantics. 4.1 supplies what meeting the demand looks like.

- **The truth-conditional side** (4.1). Clause (C), "se $S_1$, allora $S_2$" is true iff, if $S_1$ is true, then $S_2$ is true, builds the conditional's truth condition from "$S_1$ is true", the very condition $S_1$ has standing alone. Whether anyone asserts $S_1$ appears in no clause, so an embedded sentence contributes what it does unembedded, and modus ponens is valid by (C) itself.
- **What the expressivist owes.** For an expressivist, meaning is fixed by the mental state a sentence conventionally expresses (ethics 6.2's premise 4). She owes a clause of the same shape over attitudes: the state expressed by "if $S_1$, then $S_2$" as a function of its parts' states, making acceptance of $S_1$ and of the conditional together with rejection of $S_2$ a clash. Blackburn's higher-order attitudes and Gibbard's fact-norm worlds, assessed in ethics 6.2, are attempts to write that clause.
- **Trap: 4.1 gives no verdict on expressivism.** It shows the shape of the clause either side needs; whether expressivists can write theirs is ethics 6.2's question.

*Lessons:* [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md)

### Modest and full-blooded theories

**Dummett's distinction: a modest theory of meaning gives a language's meanings only to someone who already has the concepts its metalanguage expresses; a full-blooded theory would also say what having those concepts consists in.** Michael Dummett, "What is a Theory of Meaning?" (1975), charging Davidson's theories with being only modest.

- **The charge at its sharpest.** A homophonic T-sentence, "'Giulia helps Enzo' is true iff Giulia helps Enzo", conveys the meaning only to someone who already understands the sentence. The point is not homophony: 4.1's Italian theory equally presupposes the English speaker's concepts of helping and of Giulia.
- **Full-blooded** means explaining knowledge of truth conditions in terms of what speakers can do, as abilities shown in use (compare [meaning as use](#meaning-as-use)).
- **The defence of modesty.** John McDowell, "In Defence of Modesty" (1987), holds that modesty is all a theory of meaning should aim at. Davidsonians add that a T-sentence is an empirical claim about a speaker, false if her words meant something else, and that the theory's content is its structure (4.1 P3 asks you to build the exchange).
- **Trap: Dummett does not say the T-sentence is false, or a logical truth.** Its left side mentions a sentence of a language as someone speaks it; the charge is that the theory explains too little.
- **Trap: the distinction dates from 1975,** not from Dummett's *The Logical Basis of Metaphysics* (1991), which restates it.

*Lessons:* [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md)

### Augustinian picture

**Every word names an object, the object is the word's meaning, sentences are combinations of names, and words are learned by having their objects pointed out.** Wittgenstein's construal (*Philosophical Investigations*, 1953, §1) of Augustine, *Confessions* I.8.13, which the *Investigations* quotes in Latin at its head. In Pusey's translation (1838) the elders "called what they would point out by the name they uttered", and the boy "collected gradually for what they stood".

- **The young Wittgenstein's version:** "The name means the object. The object is its meaning." (*Tractatus* 3.203, tr. Ogden, 1922).
- **The challenge** (4.2, §§1–43 reconstructed; Wittgenstein numbers no premises and claims to describe, not to theorize). Many words have a settled use and name nothing: numerals, "not", "hello", "stet"; words are as varied as a toolbox's tools (§11). Pointing teaches a name only to someone who already knows what kind of move it makes ([ostensive definition](#ostensive-definition), §§31–32). So naming is one move inside [language games](#language-game), not their foundation ([meaning as use](#meaning-as-use)).
- **The builders** (§2) are the one language the picture fits, and even there the call works as an order.
- **The copy desk** (4.2 Example 1, invented). If "stet" named the word beside it, "stet" and "dele" beside one word would name the same object, yet they demand opposite actions.
- **Where 4.2 locates the weakness:** the step from "naming is not the whole story" to "meaning is use" (see [meaning as use](#meaning-as-use)).
- **4.4's Flashback** asks which half of the picture Russell's *The Analysis of Mind* (1921), Lecture X, gives up; the card leaves it to the problem.
- **Trap: the label is Wittgenstein's, not Augustine's theory of signs.** In *On the Teacher* Augustine holds that words only prompt us to look ([`ancient-medieval-philosophy` 5.1](../ancient-medieval-philosophy/lessons/05-01-augustine-certainty-and-illumination.md)).

*Lessons:* [4.2](lessons/04-02-meaning-as-use.md), [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Language game

**A stretch of language together with the activities it is woven into: speaking a language is part of an activity.** Wittgenstein, *Philosophical Investigations* (1953), §23, paraphrased; he gives no explicit definition. His first (§2) is the builders': a builder calls "block", "pillar", "slab" or "beam", and his assistant brings the stone he has learnt to bring at that call.

- **The chess picture** (4.2). A chess king is not its shape: a bottle cap would do, if both players moved it as the king. A word, like a piece, is what its role in the game makes it.
- **The copy desk** (4.2 Example 1, invented). At the *Eskerby Courier* an editor marks proofs and the compositor acts: "dele" (take the word out) is an order about a word, "stet" (keep it) an order about an order, since it cancels a dele, and "TK" (copy to come) a promise. A compositor who removes a stetted word has erred, and the correction shows the rule is in force; a trainee learns by correction, not by pointing. The use account's verdict: here meaning is role. A truth theorist can add compliance conditions for orders; whether that extends 4.1's program or concedes its limits, 4.2 leaves open.
- **Wider than one game.** Language games are embedded in a [form of life](#form-of-life).
- **Built cousins.** A promise as a move defined by a practice's rules ([`philosophy-of-debt` 1.3](../philosophy-of-debt/lessons/01-03-promising-after-hume.md)); Peter Winch's claim (1958) that understanding an action is grasping the rules that make it a vote or a purchase ([`social-theory` 1.3](../social-theory/lessons/01-03-understanding-webers-interpretive-method.md)).

*Lessons:* [4.2](lessons/04-02-meaning-as-use.md)

### Form of life

**The shared practices and natural behaviour in which language games are embedded (Wittgenstein's *Lebensform*).** *Philosophical Investigations* §23 (paraphrased): speaking a language is part of an activity, or of a form of life. The phrase occurs only five times in the *Investigations*.

- **Readers divide** between a culture's contingent way of living and behaviour all humans share (§206).
- **In 4.3.** The [sceptical solution](#sceptical-solution) leaves our agreement in responses unexplained, a brute feature of our form of life ([4.3](lessons/04-03-the-rule-following-paradox.md)).
- **Trap: a form of life is not one practice.** [`philosophy-of-religion` 5.4](../philosophy-of-religion/lessons/05-04-fideism.md) glosses it as a practice; on either reading it is wider than one.

*Lessons:* [4.2](lessons/04-02-meaning-as-use.md)

### Meaning as use

**For a large class of cases, though not all, to say what a word means is to describe how it is used in the language.** Wittgenstein, *Philosophical Investigations* (1953), §43 (paraphrased; the *Investigations* is in copyright). Knowing a word is knowing your way about its uses in its [language games](#language-game). It is the conclusion of 4.2's challenge to the [Augustinian picture](#augustinian-picture): naming is one move inside language games, not their foundation.

- **Not a theory, for Wittgenstein.** He restricted §43 himself, and he held that philosophy describes rather than explains (§§109, 126).
- **Systematic heirs, of disputed fidelity.** Robert Brandom's normative [inferentialism](#inferentialism); Paul Horwich's descriptive use theory (*Meaning*, 1998).
- **Where 4.2 locates the weakness:** the step from "naming is not the whole story" to "meaning is use". The objection from 4.1: grant that many words name nothing, and use is still only the *evidence* for meaning; truth conditions explain which uses are correct and how a speaker understands new sentences, while "use" explains nothing. The reply, inferentialism's: use specified as inferential role composes and explains truth. The use theorist concedes that use must mean *correct* use and owes an account of correctness (4.3); the truth-conditional theorist concedes that grasp of truth conditions must show in use, which is why Davidson's evidence is what speakers hold true.
- **In 4.3.** Kripke reads the [private language argument](#private-language-argument), the other half of 4.2, through the rule-following paradox ([4.3](lessons/04-03-the-rule-following-paradox.md)).
- **In 5.2.** The deflationist fixes truth by the schema and takes meaning from use; Brandom's and Horwich's theories are the leading truth-free candidates ([5.2](lessons/05-02-deflationism.md)).
- **Applied elsewhere.** To religious language as Wittgensteinian fideism ([`philosophy-of-religion` 5.4](../philosophy-of-religion/lessons/05-04-fideism.md)); to language models, where Wittgenstein's "use" is use inside activities, builders fetching slabs, which is the gap the grounding objection presses ([`philosophy-of-mind` 6.3](../philosophy-of-mind/lessons/06-03-do-language-models-understand.md)).
- **4.4's Flashback** tests Russell's "the use of the word comes first" (*The Analysis of Mind*, 1921) against §43; the card leaves the verdict to the problem.
- **Trap: "meaning is use" is not Wittgenstein's general theory of meaning.** §43 covers a large class of cases, not all, and Brandom's and Horwich's theories are heirs, not his.

*Lessons:* [4.2](lessons/04-02-meaning-as-use.md), [4.3](lessons/04-03-the-rule-following-paradox.md), [4.4](lessons/04-04-speaker-meaning-and-implicature.md), [5.2](lessons/05-02-deflationism.md)

### Ostensive definition

**Explaining a word by pointing to what it applies to.** Wittgenstein, *Philosophical Investigations* §§31–32, paraphrased: "this is the king" tells a learner a chessman's use only if its place is already prepared, that is, if he already knows what a piece in a game is; and Augustine describes the child as if it had come into a foreign country, able to think but not yet to speak.

- **The moral** (P3 of 4.2's challenge): ostension presupposes a practice, so it cannot found one.
- **The copy desk** (4.2 Example 1): a trainee who knows what a proof and a strike are is corrected until he gets it. The place is prepared.
- **Private ostension.** The diarist of §258 can fix the standard for "S" only by attending to a sensation while writing the sign: L2 of the [private language argument](#private-language-argument).

*Lessons:* [4.2](lessons/04-02-meaning-as-use.md)

### Family resemblance

**Some general terms have no common core: their instances overlap in a web of criss-crossing similarities instead.** Wittgenstein, *Philosophical Investigations* §§65–67: asked what all language games share, what makes them language, he answers that they share nothing but overlapping, criss-crossing similarities.

- **4.2's claim is semantic.** Understanding a general term is not grasping a definition, a set of necessary and sufficient conditions; "language" itself is the case.
- **The method is another course's.** Family resemblance as an exit from conceptual analysis is [`philosophical-method` 3.1](../philosophical-method/lessons/03-01-conceptual-analysis.md)'s (that card's [family resemblance](../philosophical-method/reference.md#family-resemblance)).
- **Against demarcation.** [`philosophy-of-science` 2.6](../philosophy-of-science/lessons/02-06-demarcation-after-popper.md) runs the thought against demarcating science.

*Lessons:* [4.2](lessons/04-02-meaning-as-use.md)

### Private language argument

**Wittgenstein's argument that a language intelligible in principle only to its user, its words referring to his private sensations, is impossible.** *Philosophical Investigations* §§243–315 (the main attack §§244–271; §243 defines a private language). Wittgenstein never called it an argument. 4.2's reconstruction, in outline:

| | Premise | In words |
|---|---|---|
| L1 | A sign has a meaning only if there is a standard of correct use apart from its user's impression of correctness. | Following a rule differs from thinking you are. |
| L2 | A diarist who writes "S" whenever a certain sensation recurs (§258) can set that standard only by attending to the sensation while writing the sign ([ostensive definition](#ostensive-definition)). | Nothing public anchors "S". |
| L3 | Nothing then separates using "S" correctly from using it as seems right to him, and a check that cannot fail is no check. | He cannot test a meaning against itself. |
| C2 | "S" has been given no meaning; a language intelligible in principle only to its user is impossible. | Meaning needs public standards of correctness. |

- **The beetle in the box** (§293). If each of us kept a "beetle" in a box no one else could open, the thing in the box would drop out of the word's use.
- **Readings.** Whether L3 is a doubt about memory is disputed: the orthodox reading says so, Anthony Kenny denies it. Kripke (1982) reads the passage through the rule-following paradox, as a corollary of the [sceptical solution](#sceptical-solution): one person considered in isolation has only her own inclination as a standard, so rule-following needs a community ([4.3](lessons/04-03-the-rule-following-paradox.md)). Individualists (Baker and Hacker, Blackburn, McGinn) reply that a practice needs regular action over time, not many agents.
- **4.4's Flashback** asks whether Russell's psychological "correctly" supplies the standard L1 requires; the card leaves it to the problem.
- **Trap: a private language is not a code only you know, nor any talk of sensations.** A code others could crack is not one, and "pain" is public; the target is a language others *could not* understand.
- **Trap: it does not deny sensations.** What it rejects is the object-and-name model of them.

*Lessons:* [4.2](lessons/04-02-meaning-as-use.md), [4.3](lessons/04-03-the-rule-following-paradox.md), [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Inferentialism

**The view that an expression's meaning is its role in inference: what entitles one to assert a sentence, and what asserting it commits one to.** Robert Brandom, *Making It Explicit* (1994) and *Articulating Reasons* (2000); the term is his, and Wilfrid Sellars is the precursor. 4.2's outline:

| | Claim |
|---|---|
| I1 | A sentence's content is its inferential role, including material inferences ("red, so coloured"), good in virtue of content, not form. |
| I2 | Asserting undertakes a commitment to defend the claim and licenses hearers to rely on it; speakers keep score of one another's commitments and entitlements. |
| C3 | Truth comes after, as what good inferences preserve: 4.1's order of explanation reversed. |

- **Normative, not descriptive.** Brandom's use theory is normative; Paul Horwich's (*Meaning*, 1998) is descriptive.
- **Cousin for thought.** Inferential-role semantics in [`philosophy-of-mind` 4.2](../philosophy-of-mind/lessons/04-02-naturalizing-content.md), at the same price, holism.
- **The classic objection: [tonk](#tonk)** (Prior, 1960). If rules alone fix meaning, a connective whose rules derive anything from anything has one. Replies: [conservative extension](#conservative-extension), [harmony](#harmony), or truth first.
- **Trap: tonk does not refute inferentialism.** It shows that not every set of rules fixes a meaning, not that none does; the dispute is over which constraint does the selecting.
- **Trap: Brandom does not deny that sentences have truth conditions.** He explains them rather than denying them.

*Lessons:* [4.2](lessons/04-02-meaning-as-use.md)

### Tonk

**Prior's connective, with an introduction rule like disjunction's and an elimination rule like conjunction's, which together let any sentence be derived from any other.** A. N. Prior, "The Runabout Inference-Ticket" (1960), aimed at Popper and Kneale. In the natural deduction format of [`mathematical-logic` 1.4](../mathematical-logic/lessons/01-04-proof-system-completeness.md), with $A, B$ any sentences:

$$\frac{A}{A \;\mathrm{tonk}\; B}\;(\text{tonk-I}) \qquad\qquad \frac{A \;\mathrm{tonk}\; B}{B}\;(\text{tonk-E})$$

Chain them: from any $A$ infer $A \;\mathrm{tonk}\; B$, then $B$. If rules alone fix meanings, tonk has one, and every sentence follows from every other.

- **Truth first** (J. T. Stevenson, "Roundabout the Runabout Inference-Ticket", 1961). Connectives get their meanings from truth-functional statements in a metalanguage, not from permissive rules. Write $f$ for a binary truth function, with $f(T, F)$ the value of $A \;\mathrm{tonk}\; B$ when $A$ is true and $B$ false. Tonk-I is truth-preserving iff $f(T,T) = f(T,F) = T$, and tonk-E iff $f(T,F) = f(F,F) = F$: of the 16 binary truth functions, 4 make tonk-I truth-preserving and 4 make tonk-E so, and none does both, since they clash at $f(T,F)$.
- **Overdetermination** (Lloyd Humberstone). Lacking a truth function is no defect; tonk's defect is that only the all-true and the all-false valuations respect both rules.
- **Conservativeness** (Nuel Belnap, 1962). Tonk is not a [conservative extension](#conservative-extension): it yields $p \vdash q$ for tonk-free $p$ and $q$.
- **Harmony** (Gentzen, Prawitz, Dummett). Tonk-I puts in $A$; tonk-E takes out $B$ ([harmony](#harmony)). Keeping tonk-I, the strongest justified elimination (Prawitz) goes to $A$, from $A \;\mathrm{tonk}\; B$ infer $A$.
- **Where it strains** (4.2). Does harmony smuggle truth conditions back? Stevenson's heir says yes: eliminations must match introductions only because rules must preserve truth. The inferentialist says no: harmony relates rules, is checked by removing detours, and departs from classical truth tables. 4.2 gives no verdict on whether harmony is part of meaning or a check imposed from outside.
- **Under Curry–Howard** ([`programming-languages` 4.2](../programming-languages/lessons/04-02-type-checking-and-curry-howard.md)) the detour harmony removes is a $\beta$-redex, and tonk's detour is one with no reduction.
- **Trap: tonk does not refute [inferentialism](#inferentialism).** It shows that not every rule set fixes a meaning.
- **Trap: Belnap's reply is not harmony.** Belnap answered with conservativeness and uniqueness; "harmony" is Dummett's term (1973).

*Lessons:* [4.2](lessons/04-02-meaning-as-use.md)

### Conservative extension

**Adding a new expression with its rules is acceptable only if nothing new becomes derivable among sentences of the old vocabulary.** Nuel Belnap, "Tonk, Plonk and Plink" (*Analysis*, 1962), replying to Prior: a new connective's rules must conservatively extend the deducibility already in force, and Belnap adds a uniqueness condition. Write $\vdash$ for derivability in the old system and $\vdash_{\text{new}}$ for derivability once the new rules are added. The new rules are conservative over $\vdash$ iff, for every set $\Gamma$ of old-vocabulary sentences and every old-vocabulary sentence $\varphi$,

$$\Gamma \vdash_{\text{new}} \varphi \ \text{ only if } \ \Gamma \vdash \varphi.$$

- **Tonk fails.** With tonk's rules, $p \vdash q$ for tonk-free sentences $p$ and $q$, though $p$ does not entail $q$ ([tonk](#tonk)).
- **Relative to what is in force.** The test presupposes a deducibility relation already fixed, so the old vocabulary's meaning must come from elsewhere (4.2). A new connective's rules can trivialize a system only together with rules already in it (4.2 P2 sets such a connective).
- **Same word, different job.** The conservativeness of a truth theory over arithmetic is 5.2's ([conservativeness argument](#conservativeness-argument)).
- **Trap: conservativeness is not harmony.** Belnap's 1962 reply is conservativeness plus uniqueness; [harmony](#harmony) is Dummett's term (1973), building on Gentzen and Prawitz.

*Lessons:* [4.2](lessons/04-02-meaning-as-use.md)

### Harmony

**The requirement that an expression's elimination rules let one infer from it no more than its introduction rules put in.** Gerhard Gentzen (1934/35) treated introductions as definitions and eliminations as their consequences; Dag Prawitz's inversion principle (*Natural Deduction*, 1965) and Michael Dummett's "harmony" (*Frege: Philosophy of Language*, 1973) make that a constraint.

- **Inversion principle** (informal): an introduction of a connective immediately followed by its elimination is a removable detour, since the conclusion is already obtainable from the introduction's premises.
- **Tonk violates it.** Tonk-I puts in $A$; tonk-E takes out $B$. Keeping tonk-I, the strongest justified elimination goes to $A$ ([tonk](#tonk)).
- **Intuitionistic in spirit.** Natural deduction reaches classical logic only through reductio ([`mathematical-logic` 1.4](../mathematical-logic/lessons/01-04-proof-system-completeness.md)), and most proof-theoretic semanticists are intuitionistic in spirit.
- **Under Curry–Howard** the removable detour is a $\beta$-redex ([`programming-languages` 4.2](../programming-languages/lessons/04-02-type-checking-and-curry-howard.md)).
- **Open question** (4.2): whether harmony is part of meaning or a truth-preservation check imposed from outside.
- **Trap: harmony is not Belnap's test.** Belnap's 1962 reply was [conservative extension](#conservative-extension) and uniqueness.

*Lessons:* [4.2](lessons/04-02-meaning-as-use.md)

### Rule-following paradox

**If any way of going on can be made to fit a rule, any can be made to clash with it, so fitting and clashing lose their point and no rule fixes what to do.** Wittgenstein, *Philosophical Investigations* (1953), §201, paraphrased. Saul Kripke (*Wittgenstein on Rules and Private Language*, 1982) takes it as the central problem of the *Investigations* and reconstructs it as the sceptical argument ([sceptical challenge](#sceptical-challenge)), whose radical conclusion is that no one means anything by any word.

- **Wittgenstein's pupil** (§185; 4.3 Example 1). Trained on the series "+2" with examples below 1000, a pupil goes on past it as 1000, 1004, 1008, 1012 and, corrected, insists he went on in the same way. One rule his answers fit (the lesson's, not Wittgenstein's): $s(n) = n + 2$ for $n < 1000$ and $s(n) = n + 4$ for $n \ge 1000$, where $n$ is the last number written. It agrees with "+2" on every input below 1000, so his whole training fits both. Run the challenge on the *teacher*: every example she gave lies below 1000, and her instruction "do the same each time" leans on "same", which the pupil reads his way.
- **Two readings.** Sceptical: Kripke's (1982), which accepts the paradox and offers a [sceptical solution](#sceptical-solution). Dissolving: Gordon Baker and P. M. S. Hacker (1984) and John McDowell (1984), on whom the paradox is an absurdity to dissolve. McDowell points to §201's next paragraph, where Wittgenstein says one can grasp a rule without interpreting it, the grasp showing in how one actually follows or breaks it; the paradox assumes that understanding is interpreting.
- **The inductive cousin.** A network fitted to every sum with terms below 57 can be perfect on that data while nothing in the data makes one answer to 68 + 57 right; finitely many examples fit infinitely many functions ([`statistical-learning` 1.4](../statistical-learning/lessons/01-04-no-free-lunch-and-inductive-bias.md)). Kripke's question is what would make one extrapolation the correct one ([quus](#quus)).
- **Trap: the conclusion is metaphysical.** It is not "we cannot know what we mean" but "there is nothing to know".

*Lessons:* [4.3](lessons/04-03-the-rule-following-paradox.md)

### Kripke's Wittgenstein

**The figure who argues the sceptical paradox and offers the sceptical solution in Kripke's 1982 book, kept apart from the historical Wittgenstein.** Kripke presents Wittgenstein's argument as it struck him and endorses neither the argument nor the solution (*Wittgenstein on Rules and Private Language*, 1982: 5). "Kripkenstein" is commentators' shorthand, not Kripke's.

- **Is it Wittgenstein?** Gordon Baker and P. M. S. Hacker (*Scepticism, Rules and Language*, 1984): Wittgenstein found scepticism nonsensical and meant the paradox as an absurdity to dissolve; since the sceptic claims there is nothing to know, they call his doubt nihilism, not scepticism. John McDowell ("Wittgenstein on Following a Rule", 1984): one can grasp a rule without interpreting it. Colin McGinn (*Wittgenstein on Meaning*, 1984) also reads the *Investigations* as dissolving the paradox.
- **Against 4.1.** On 4.1's argument map Kripke's Wittgenstein presses radical interpretation: no fact fixes which axioms are correct.
- **Trap: Kripke's Wittgenstein is not, by default, Wittgenstein.** Kripke disclaims the identification.
- **Left to you.** Boss 4(d) asks whether Kripke's Wittgenstein undermines a Davidsonian truth theory, with a quus-style rival to one of its axioms; the card writes no such rival and gives no verdict.

*Lessons:* [4.3](lessons/04-03-the-rule-following-paradox.md)

### Quus

**Kripke's deviant function, which agrees with addition whenever both terms are below 57 and gives 5 otherwise: every sum done only with terms below 57 fits plus and quus alike.** Kripke (1982), ch. 2; [`philosophy-of-mind` 5.2](../philosophy-of-mind/lessons/05-02-is-the-intellect-a-bodily-power.md) states it with the same numbers and symbol. For natural numbers $x, y$,

$$x \oplus y = \begin{cases} x + y & \text{if } x < 57 \text{ and } y < 57, \\ 5 & \text{otherwise.} \end{cases}$$

So $68 + 57 = 125$ but $68 \oplus 57 = 5$.

- **The question.** Suppose every sum you have ever done had both terms below 57. What fact about you makes 125, not 5, the answer you *ought* to give to "68 + 57"? That is the [sceptical challenge](#sceptical-challenge).
- **Any rule you consult can be read deviantly.** An instruction such as "count the two heaps together" only moves the question to "count" (K3).
- **Trap: quus is not grue.** Goodman's grue ([`philosophy-of-science` 1.2](../philosophy-of-science/lessons/01-02-the-new-riddle-of-induction.md)) asks what licenses an induction; quus asks what fixes what you mean.
- **Left to you.** Boss 4(d) asks for a quus-style rival to a predicate axiom of a truth theory and how it differs from Foster's deviants; the card writes none.

*Lessons:* [4.3](lessons/04-03-the-rule-following-paradox.md)

### Sceptical challenge

**Kripke's sceptic demands one fact about the speaker that does two jobs: it constitutes her meaning plus rather than quus, and it justifies the answer 125, settling what she ought to answer rather than predicting what she will.** Kripke (1982: 11) states the two conditions together. The sceptic grants perfect memory and access to everything in her mind and behaviour (1982: 14), so the doubt is metaphysical, not epistemological. [`philosophy-of-mind` 5.2](../philosophy-of-mind/lessons/05-02-is-the-intellect-a-bodily-power.md) uses the first job alone; 4.3 runs both, as a question about language.

**The sceptical argument** (1982, ch. 2), as 4.3 sets it out, in skeleton:

| | Step | In brief |
|---|---|---|
| K1 | Constitution | if I meant plus, some fact about me constitutes my meaning plus rather than quus |
| K2 | Justification | that fact must show how I am justified in answering 125, containing what I ought to do in each new case |
| K3 | Finite record | everything in my history (sums done, instructions, images) is finite and fits quus as well as plus |
| K4 | Beyond the record | dispositions are descriptive where the relation is "normative, not descriptive" (1982: 37); simplicity is at best evidence; a primitive state is mysterious, and a finite state could be read quus-wise (1982: 51–52) |
| C1 | | no fact constitutes my meaning plus rather than quus |
| K5 | Generalization | if no fact settled what I meant, none settles what I mean now, by any word |
| K6 | [Classical realism](#classical-realism-about-meaning) | "Jones means plus" is true only if a fact of K1's kind obtains |
| C2 | | no one means anything by any word: §201's paradox |

George Wilson calls C1 the *basic* and C2 the *radical* sceptical conclusion.

- **Replies, by the step each denies** (4.3's map). [Dispositionalism](#dispositionalism-about-meaning) offers the missing fact; [primitivism](#meaning-primitivism) offers a fact of its own kind, at the price of mystery; McDowell, and Baker and Hacker, reject the picture behind K1 (understanding as interpreting); anti-normativists shrink K2 ([normativity of meaning](#normativity-of-meaning)); the [sceptical solution](#sceptical-solution) accepts C1 and denies K6.
- **Where 4.3 locates the weakness.** K3 and K4 assume that any candidate fact is an item that must be read to guide me, and so can be read deviantly; McDowell and the primitivists deny it. The reply: the sceptic needs no picture of interpretation; he asks only what makes "125" the correct use, and a grasp that is no interpretation says *that* a standard exists, not *what* it is. The anti-sceptic concedes that no reductive account of the grasp is on offer; Kripke's Wittgenstein concedes a primitive of his own, the brute fact of agreement.
- **4.5's Flashback** runs the challenge on a colour word; the card leaves it to the problem.
- **Trap: the doubt is not about knowledge.** The sceptic grants ideal access (1982: 14) and claims there is nothing to know.
- **Left to you.** Boss 4(d) asks for the challenge at full strength; the card gives the skeleton only.

*Lessons:* [4.3](lessons/04-03-the-rule-following-paradox.md), [4.5](lessons/04-05-analyticity-and-two-dogmas.md)

### Classical realism about meaning

**Kripke's label for the view that a meaning ascription such as "Jones means plus" is true only if a fact obtains that constitutes the speaker's meaning.** K6 of the sceptical argument (4.3): together with C1, that no such fact exists, it yields C2, that no one means anything ([sceptical challenge](#sceptical-challenge)).

- **What the sceptical solution gives up.** It accepts C1 and denies K6, replacing truth conditions for meaning ascriptions with [assertability conditions](#assertability-conditions) ([sceptical solution](#sceptical-solution)).
- **How much is given up** is disputed: 4.3 P3 sets two readers of the solution against each other.
- **Trap: dropping classical realism is not accepting C2.** Kripke's Wittgenstein drops K6 precisely to keep meaning-talk.

*Lessons:* [4.3](lessons/04-03-the-rule-following-paradox.md)

### Dispositionalism about meaning

**The view that meaning plus by "+" consists in being disposed to answer with sums.** The first candidate fact beyond the finite record that Kripke's sceptic rejects (K4): what I would answer is descriptive, where the relation of meaning to future action is "normative, not descriptive" (Kripke 1982: 37).

- **Finitude and error.** The dispositional reply with its finitude and error problems, and Lewis's naturalness reply, are run in [`philosophy-of-mind` 5.2](../philosophy-of-mind/lessons/05-02-is-the-intellect-a-bodily-power.md) and not repeated in 4.3. In brief: a finite speaker has no dispositions for sums too large to process, and a speaker disposed to systematic slips would, by the account, mean the function her slips compute.
- **"Ideal conditions"** need the finks and masks of [`metaphysics` 4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md).
- **Remove normativity, keep error** (4.3). If the anti-normativists are right ([normativity of meaning](#normativity-of-meaning)), the objection that a disposition is descriptive loses its force, but the error problem does not turn on normativity.
- **Trap: the normativity objection and the error problem are two points,** not one.

*Lessons:* [4.3](lessons/04-03-the-rule-following-paradox.md)

### Sceptical solution

**Kripke's Wittgenstein accepts that no fact constitutes meaning and keeps meaning-talk by replacing truth conditions for meaning ascriptions with assertability conditions and their role in a community.** Kripke 1982, ch. 3. The name is from Hume's *Enquiry* §V, "Sceptical Solution of these Doubts" ([`modern-philosophy` 4.3](../modern-philosophy/lessons/04-03-induction-and-the-sceptical-solution.md), whose card has its own [sceptical solution](../modern-philosophy/reference.md#sceptical-solution)): as Hume conceded the doubt about induction and explained the practice by custom, Kripke's Wittgenstein concedes the missing fact and explains meaning-talk by what it does.

- **The moves** (4.3). Accept C1 and deny K6 ([classical realism](#classical-realism-about-meaning)). Instead of asking what must be the case for "Jones means plus" to be true, ask when the words may be asserted and what role asserting them plays (1982: 73). The [assertability conditions](#assertability-conditions): his answers agree with ours in enough cases, simple ones especially, and his mistakes resemble ours (1982: 92). The role: sorting out whom we can rely on, as when a grocer counts out five red apples (1982: 75–76). One person considered in isolation has only her own inclination as a standard, so "she follows the rule" has no substantive content (1982: 89); hence no private language, which Kripke reads as this corollary ([private language argument](#private-language-argument)). Why we agree is not explained: agreement is a brute feature of our [form of life](#form-of-life).
- **Non-factualist?** Most readers (Colin McGinn, Crispin Wright, Paul Boghossian) take the solution to be non-factualist: meaning ascriptions state no facts. Boghossian ("The Rule-Following Considerations", 1989) and others call that incoherent; in one version, giving a sentence a non-fact-stating job presupposes a fact about which correctness condition governs it. 4.3 P3 asks for the crux between this reading and a humbler factualist one.
- **A town that goes on by fours** (4.3 Example 2, invented). A generation of Eskerby clerks, schooled on one primer, continue every "+2" series past 1000 by fours, confidently and in agreement. By their agreement "they go on correctly" is assertable; by ours, they do not mean what we mean. Nothing beyond each community's agreement settles which is mistaken, and here the account stops giving a verdict. The communitarian says that is right: a standard beyond all agreement is the classical-realist demand the sceptic refuted. Simon Blackburn ("The Individual Strikes Back", 1984) says the problem has only moved: a community's dispositions are as finite as one person's, and seeming right and being right now coincide for the group.
- **Individualists** (Baker and Hacker, Blackburn, McGinn): a practice needs regular action over time, not many agents.
- **Trap: it does not define "plus" as whatever the community answers.** It replaces truth conditions for meaning ascriptions with assertability conditions and never says "Jones means plus" is true *because* we agree, which is why the town of Example 2 is not right by definition.
- **Left to you.** Boss 4(d) asks whether the sceptical solution leaves truth-conditional semantics standing; the card gives no verdict.

*Lessons:* [4.3](lessons/04-03-the-rule-following-paradox.md)

### Assertability conditions

**The conditions under which a form of words may appropriately be asserted, which the sceptical solution puts in place of truth conditions for meaning ascriptions.** Kripke (1982: 73) replaces "what must be the case for 'Jones means plus' to be true?" with two questions: when may it be asserted, and what role does asserting it play in our lives?

- **For "Jones means plus"** (1982: 92): we may say it when his answers agree with ours in enough cases, simple ones especially, and his mistakes resemble ours rather than "5" for "68 + 57".
- **The pupil** (4.3 Example 1). We may not assert "he means +2 by '+2'": his answers part from ours at the first case past 1000, a simple one, and his slip is not like our slips. The ascription has done its job, which is to say: do not rely on his series. What the solution does not say is that he broke a fact about "+2" laid down in advance; correcting him is drawing him into our practice.
- **Spelling.** 4.3 writes "assertability"; some commentators write "assertibility".
- **Trap: assertability is not truth by agreement.** The solution does not say the ascription is true because we agree ([sceptical solution](#sceptical-solution)).

*Lessons:* [4.3](lessons/04-03-the-rule-following-paradox.md)

### Meaning primitivism

**The view that meaning plus is a state or fact of its own kind, irreducible to dispositions, images or behaviour.** Kripke considers it under K4 and calls the state mysterious; and a finite state could be read quus-wise too (1982: 51–52).

- **Defenders.** Colin McGinn (*Wittgenstein on Meaning*, 1984): understanding is an ability, and lacking a theory of it is no reason to doubt it exists. Paul Boghossian ("The Rule-Following Considerations", *Mind*, 1989): Kripke needed an argument that meaning properties are queer and gave none; Boghossian places the irreducible facts in mental content, not linguistic meaning.
- **A dissolving cousin.** McDowell's grasp of a rule without interpretation denies, like primitivism, that any candidate fact must be read to guide.
- **The price** (4.3's weakest point). A grasp that is no interpretation says *that* a standard exists, not *what* it is, which is Kripke's charge of mystery; the anti-sceptic concedes that no reductive account of the grasp is on offer.
- **Was the search exhaustive?** Whether such a state escapes Kripke's search is the crux [`apologetics-foundations` 3.2](../apologetics-foundations/lessons/03-02-reason.md) sets.

*Lessons:* [4.3](lessons/04-03-the-rule-following-paradox.md)

### Normativity of meaning

**The thesis that meaning facts entail what a speaker ought to do with a word, not just which uses are correct.** It is K2 of the sceptical argument: the relation of meaning to future action is "normative, not descriptive" (Kripke 1982: 37). Boghossian's case (1989): if "green" means green, it applies correctly only to green things, a normative truth about my use.

- **Anti-normativists.** Anandi Hattiangadi ("Is Meaning Normative?", 2006) and Kathrin Glüer and Åsa Wikforss ("Against Content Normativity", 2009): "correct" may only sort uses into true and false. Whoever calls a red apple green says something false without breaking any semantic ought, since she may mean to deceive. If they are right, K2 shrinks to K1's demand that the fact fix which uses are correct.
- **What survives** the anti-normativist point: the error problem for [dispositionalism](#dispositionalism-about-meaning), which does not turn on normativity.
- **4.5's Flashback** applies the point to a dispositional reply; the card leaves it to the problem.
- **Trap: the normativity condition and the error problem are not one point.** An anti-normativist grants that "green" has correct and incorrect uses, so error is possible, and denies only that an ought follows.

*Lessons:* [4.3](lessons/04-03-the-rule-following-paradox.md), [4.5](lessons/04-05-analyticity-and-two-dogmas.md)

### Speaker meaning

**What a person means by an utterance on an occasion, as against what her sentence means.** H. P. Grice, "Meaning" (1957), paraphrased: to mean something is to utter it intending to produce a belief through the hearer's recognition of that very intention. Grice's formula is one sentence; the standard three clauses are P. F. Strawson's restatement ("Intention and Convention in Speech Acts", 1964). $S$ means that $p$ by uttering $x$ to audience $A$ iff $S$ utters $x$ intending

| | $S$ intends | A case that fails it |
|---|---|---|
| (i) | $A$ to believe that $p$ | |
| (ii) | $A$ to recognize intention (i) | a handkerchief planted at a crime scene: the planter hopes the detective will *not* see the plan |
| (iii) | $A$'s recognition of (i) to be at least part of $A$'s reason for believing $p$ | Herod showing Salome the Baptist's severed head: her own eyes are reason enough |

*In words:* meaning something is getting it across by getting the hearer to see that you are trying.

- **Hidden intentions.** Strawson (1964) gave the first hidden-intention counterexample to the three clauses. Stephen Schiffer (*Meaning*, 1972) showed that each added clause invites another, and required instead that the intentions be mutually known ("common knowledge", in the SEP's term).
- **Public by design.** Clauses (ii) and (iii) make speaker meaning public: a qualifier no hearer could recover is not meant in Grice's sense ([lying and misleading](#lying-and-misleading)).
- **The other half of 1957.** Natural meaning, the way spots mean measles, which cannot be false, is [`philosophy-of-mind` 4.2](../philosophy-of-mind/lessons/04-02-naturalizing-content.md)'s (its card's [natural meaning](../philosophy-of-mind/reference.md#natural-meaning)); see [non-natural meaning](#non-natural-meaning).
- **Beyond what is said.** What a speaker means can outrun what her words say: [what is said and what is implicated](#what-is-said-and-what-is-implicated).
- **In 1.4.** Kripke's speaker's referent is the referential counterpart of speaker meaning: a Russellian keeps the semantics fixed and lets the referential use be what the speaker means, as 4.4 lets "not all" be what the speaker means ([speaker's reference and semantic reference](#speakers-reference-and-semantic-reference)).
- **4.3's question inherited.** Grice grounds meaning in intentions, so the rule-following sceptic's question reaches intentions too (Boghossian: the argument cannot target linguistic meaning alone).
- **Trap: speaker meaning is not a private act of will.** Clauses (ii) and (iii) make it public by design.

*Lessons:* [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Non-natural meaning

**Grice's 1957 name for meaning that depends on a speaker's intentions and can be false, as against natural meaning, the way spots mean measles, which cannot be.** "Meaning" (1957). If the spots mean measles, there is measles; what a speaker means by "he did it" may be false. Later literature calls it [speaker meaning](#speaker-meaning), analysed by reflexive intention.

- **Natural meaning** belongs to [`philosophy-of-mind` 4.2](../philosophy-of-mind/lessons/04-02-naturalizing-content.md) ([natural meaning](../philosophy-of-mind/reference.md#natural-meaning) on its card); 4.4 takes the non-natural half.
- **Trap: only natural meaning is factive.** If the spots mean measles, there is measles; a speaker who says "he did it" can mean that he did it when he did not.

*Lessons:* [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### What is said and what is implicated

**What is said is what the sentence means in its context, with reference fixed; what is implicated is what the speaker means beyond it.** H. P. Grice, "Logic and Conversation" (William James Lectures, Harvard, 1967; published 1975). Implicature comes in two kinds: [conventional](#conventional-implicature), fixed by word meaning, and [conversational](#conversational-implicature), worked out from the conversation. *In words:* some of what you convey rides on word meaning, some on your saying it here.

- **4.4's hook: *Bronston v. United States* (1973).** At a 1966 bankruptcy hearing Samuel Bronston, asked whether he had ever had an account in a Swiss bank, answered that the company had an account there for about six months, in Zurich. True; he had also kept a personal account in Geneva for nearly five years. The Supreme Court reversed his perjury conviction: the answer was at most "misleading by negative implication", and the questioner should have pinned him down. US perjury law reaches what is said, not what is implicated.
- **Why Grice drew it.** Against Oxford colleagues who read every oddity of use as a fact about meaning (Grice's razor: [scalar implicature](#scalar-implicature)).
- **The line is contested at the conventional end.** Kent Bach ("The Myth of Conventional Implicature", 1999) puts alleged conventional implicatures into what is said ([conventional implicature](#conventional-implicature)).
- **Applied.** The line between saying and implicating is what [`moral-theology` 6.4](../moral-theology/lessons/06-04-truthfulness-and-the-lie.md)'s classes rely on ([lying and misleading](#lying-and-misleading)); constitutional interpretation by original public meaning applies it ([`constitutional-law`](../constitutional-law/syllabus.md) 8.1, not yet built), and communicative content against legal effect is [`philosophy-of-law`](../philosophy-of-law/syllabus.md) 3.4's.
- **Trap: what is said is not the bare words.** Reference and indexicals are fixed by the context.
- **Trap: *Bronston* did not treat implicating a falsehood as perjury.** It held that a literally true answer is not perjury, however misleading.

*Lessons:* [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Conventional implicature

**Content a word's meaning commits the speaker to without its being part of what is said.** Grice's examples (paraphrased): calling a man English and *therefore* brave commits the speaker, unsaid, to bravery's following from Englishness; "but" adds a contrast to the truth table of "and".

- **Its marks.** Not calculable from the maxims, not cancellable, and detachable: swap "but" for "and" and the contrast goes while the truth conditions stay.
- **Where the line blurs** (4.4 Example 2). "Councillor Velmont managed to read most of the harbour report" carries an inference from "managed" (she tried, and it took effort). Lauri Karttunen and Stanley Peters (1979) call inferences like it conventional implicatures; presupposition theorists count an effortless "managed" as presupposition failure; Kent Bach (1999) puts alleged conventional implicatures into what is said. No test tells a [presupposition](#presupposition) from a conventional implicature, since both project and resist cancellation; what decides is whether, had she read it effortlessly, the sentence would be false or only out of place, and no test answers that.
- **5.1's Flashback** asks you to classify a "but" inference; the card leaves it to the problem.
- **Trap: a conventional implicature is not a conversational one grown habitual.** Grice's come from word meaning; a generalized conversational implicature ("some", so not all) is habitual and still cancellable ([generalized and particularized implicature](#generalized-and-particularized-implicature)).

*Lessons:* [4.4](lessons/04-04-speaker-meaning-and-implicature.md), [5.1](lessons/05-01-tarskis-theory-as-philosophy.md)

### Cooperative principle

**Make your contribution what the accepted purpose of the exchange requires at the stage at which it occurs.** Grice, "Logic and Conversation" (1967 lectures; published 1975), paraphrased. Under it fall the four [maxims](#maxims-of-conversation); *in words,* rules any rational joint project follows.

- **Presumed in every conversational implicature:** clause (a) of the definition ([conversational implicature](#conversational-implicature)). Where the presumption fails, Grice's definition yields no conversational implicature (4.4's flowchart).
- **Aligned aims.** The principle assumes them; [`political-economy` 1.4](../political-economy/lessons/01-04-persuasion-and-the-media.md) shows what happens to costless talk when interests diverge: cheap talk collapses to babbling.
- **4.4 P3** tests the principle on a partisan campaign letter; the card leaves the crux to the problem.

*Lessons:* [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Maxims of conversation

**Grice's four categories under the cooperative principle: Quantity, Quality, Relation, Manner.** "Logic and Conversation" (1975), as 4.4 paraphrases them:

| Maxim | In brief |
|---|---|
| Quantity | be as informative as is required, and not more |
| Quality | try to say only what is true: nothing you believe false, nothing you lack adequate evidence for |
| Relation | be relevant |
| Manner | be perspicuous: avoid obscurity and ambiguity, be brief, be orderly |

- **Four ways to fail one** (4.4 D4). A speaker may quietly *violate* a maxim, and perhaps mislead; *opt out* openly; face a *clash* between two maxims; or [flout](#flouting) one, failing so blatantly that the hearer must look for another meaning.
- **Which maxim, in 4.4's own cases.** Grice's reference letter flouts Quantity ([flouting](#flouting)); the pharmacy reply observes Relation ([relevance implicature](#relevance-implicature)); "some" for "not all" rests on Quantity ([scalar implicature](#scalar-implicature)).
- **Grice's razor.** Other things equal, posit an implicature rather than a new sense of a word (4.4's argument about "some").

*Lessons:* [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Flouting

**Failing a maxim so blatantly that the hearer must look for another meaning, which keeps the presumption of cooperation alive.** Grice (1975). His testimonial: a reference letter for a philosophy candidate that praises only his command of English and his regular attendance flouts Quantity and means that he is no good, though no convention attaches "no good" to those words. The reader works it out by assuming the writer is cooperating and asking what he must think to write only that.

- **The contrasts** (4.4 D4): a quiet violation goes unnoticed and is how one misleads; opting out is open refusal; a clash sets two maxims against each other.
- **Trap: a flout is not a lie.** It is meant to be noticed and seen through; nothing is put forward as the speaker's mind.
- **Trap: flouting is not breaking a maxim unnoticed.** That is quiet violation.

*Lessons:* [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Conversational implicature

**What a speaker conveys beyond what she says, worked out by the hearer from the presumption that she is cooperating.** Grice (1975), as standardly reconstructed: $S$ conversationally implicates $q$ by saying $p$ iff

- (a) $S$ is presumed to observe the [cooperative principle](#cooperative-principle);
- (b) the supposition that $S$ thinks $q$ is needed to make her saying $p$ consistent with (a);
- (c) $S$ thinks, and expects the hearer to see she thinks, that the hearer can work out (b).

*In words:* it is what you must credit the speaker with believing to keep her cooperative, when she can count on you to see it.

- **Marks:** [calculability](#calculability) and [cancellability](#cancellability). **Kinds:** [generalized and particularized](#generalized-and-particularized-implicature); [scalar](#scalar-implicature) and [relevance](#relevance-implicature) implicatures.
- **Working it out** (4.4's flowchart). Start from what is said; presume the speaker is cooperating; ask whether saying only this would break a maxim unless she thought more; ask what she must believe to be cooperating after all, and whether she can expect the hearer to work that out; then test by cancellation.
- **Elsewhere in the course.** Kripke borrowed the apparatus for speaker's reference ([1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md)). Millians (Nathan Salmon, Scott Soames) use implicature to explain why substituting co-referring names seems to change what a belief report says, and meet the objection from [calculability](#calculability) ([3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)). [`epistemology` 3.4](../epistemology/lessons/03-04-contextualism-and-its-rivals.md)'s "conversationally imply" is the same notion, in the warranted assertability manoeuvre.
- **Trap: not every inference a speaker can withdraw is an implicature** ([cancellability](#cancellability)).
- **Left to you.** Boss 4(a) asks you to derive a relevance implicature step by step from an exchange of its own; the card's worked steps are 4.4's pharmacy case only ([relevance implicature](#relevance-implicature)).

*Lessons:* [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md), [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Calculability

**A conversational implicature must be capable of being worked out from what is said, the maxims and the context.** One of Grice's two marks (1975). The working-out schema: she said $p$; she is presumed to be cooperating; she could not be unless she thought $q$; she knows I can see that; so she implicates $q$.

- **The weak point it carries** (4.4). P2 of Grice's razor, that an inference with implicature's marks is explained by implicature as well as by a second sense, rests on calculability; the [symmetry problem](#symmetry-problem) presses it.
- **Calculable but not cancellable** (4.4 Example 2). A Manner story makes the "managed" inference (she tried, with effort) calculable (why the longer "managed to read", unless something was unusual?), yet it does not cancel unembedded: the tests split ([conventional implicature](#conventional-implicature)).
- **Against the Millian** (3.4). A conversational implicature must be calculable from what is said, but ordinary speakers do not think the two Lois reports say the same, so they cannot calculate the difference (after Stephen Schiffer, 1987). Replies: ordinary practice runs belief states together with contents, so the information is conveyed uncalculated; or, with David Braun (1998), hearers take the reports' one content in two ways.

*Lessons:* [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md), [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Cancellability

**A conversational implicature can be withdrawn, by adding "but not $q$", without contradiction; an entailment cannot.** Grice (1975) made it necessary for conversational implicature. For "some": "some, indeed all".

- **On 4.4 Example 1.** "There's a pharmacy behind the *Courier* office … though it may be shut by now" removes the implicature without contradiction; "… but there's no pharmacy there" contradicts what was said.
- **Conventional implicatures do not cancel;** generalized conversational ones still do ([generalized and particularized implicature](#generalized-and-particularized-implicature)).
- **Trap: a test only for unembedded triggers.** Under negation a [presupposition](#presupposition) cancels too: "She didn't manage to read it; she never even opened it" (4.4 Example 2).
- **Trap: cancellable is not defeasible.** An inductive conclusion that new evidence defeats was never implicated, and an [entailment](#entailment) is neither cancellable nor defeasible.

*Lessons:* [4.4](lessons/04-04-speaker-meaning-and-implicature.md), [5.1](lessons/05-01-tarskis-theory-as-philosophy.md)

### Generalized and particularized implicature

**Generalized: carried by a form of words unless something blocks it. Particularized: needs a particular context.** Grice (1975).

- **Generalized:** "some" implicates "not all" ([scalar implicature](#scalar-implicature)). It is still cancellable, unlike a [conventional implicature](#conventional-implicature).
- **Particularized** (4.4 Example 1): "There's a pharmacy behind the *Courier* office" implicates "you can get help there now" only as a reply to "I've left my inhaler at home"; answering "Where shall we meet?", the same sentence implicates nothing about inhalers.
- **Trap: generalized is not conventional.** A habitual implicature still comes from the maxims and still cancels.

*Lessons:* [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Scalar implicature

**Saying a weaker term on a scale implicates that the stronger terms do not apply.** Laurence Horn, *On the Semantic Properties of Logical Operators in English* (UCLA dissertation, 1972). Some words form a scale ordered by strength, a Horn scale such as $\langle$all, most, some$\rangle$. A well-informed speaker who says "some" implicates "not all" by Quantity: could she have said "all", she would have. *In words:* "some" means at least one; the "but not all" comes from her not saying more.

- **The entailment that orders the scale** (4.4 D6). With $Jx$ for "$x$ is a jar of the batch" and $Sx$ for "$x$ is spoiled",
  $$\forall x\,(Jx \to Sx),\ \exists x\,Jx \;\models\; \exists x\,(Jx \wedge Sx).$$
  The stronger term entails the weaker, given that there are jars.
- **Grice's razor applied** (4.4). P1: "some" usually conveys "not all", and the inference is calculable from Quantity, cancellable ("some, indeed all") and absent in [downward-entailing contexts](#downward-entailing-context). P2: an inference with those marks is explained by implicature as well as by a second sense of the word. P3: other things equal, posit an implicature rather than a new sense. C: "some" means "at least one", and "not all" is a generalized conversational implicature. The weakest premise is P2 ([symmetry problem](#symmetry-problem)).
- **Rivals.** Grammatical theories (Chierchia, Fox, Spector) compute scalar implicatures inside the sentence.
- **5.1's Flashback** works a scale with "usually"; the card leaves it to the problem.
- **Trap: "all" entails "some" only with existential import.** Over an empty domain "all" is vacuously true and "some" false.

*Lessons:* [4.4](lessons/04-04-speaker-meaning-and-implicature.md), [5.1](lessons/05-01-tarskis-theory-as-philosophy.md)

### Downward-entailing context

**A position in a sentence where replacing a term by a stronger one yields a weaker sentence, so that entailments along a scale reverse.** Negation is one; the antecedent of a conditional is another (4.4 P2(c) works a batch rule with "some" in its antecedent). In such a position the "not all" implicature of "some" goes (4.4 D6).

- **Part of Grice's case for "some"** (premise P1 of Grice's razor, 4.4): the "not all" inference is absent in downward-entailing contexts, as an implicature's should be ([scalar implicature](#scalar-implicature)).
- **What the critic of the razor concedes** ([symmetry problem](#symmetry-problem)): once the scale is given, Quantity predicts the implicature's disappearance under negation.
- **Trap: the implicature is not "cancelled" there.** It never arises.

*Lessons:* [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Symmetry problem

**The Quantity reasoning that takes "some" to "not all" would run just as well with "several" (or "some regularly") as the stronger alternative, yet nobody implicates "not several": the maxims do not predict which stronger claim gets denied.** The objection goes back to Anthony Kroch (1972); the name "symmetry problem" is used by Eliza Block (2008) and by Ernie Lepore and Matthew Stone (2015), among others. On 4.4's telling, the derivation works because we already knew the answer.

- **Its target:** P2 of Grice's razor, through [calculability](#calculability) ([scalar implicature](#scalar-implicature)).
- **Horn's neo-Gricean reply:** only lexicalized scale-mates compete, a short, learnable list.
- **The concessions** (4.4). The Gricean concedes that which alternatives compete is fixed by the lexicon, not by cooperation alone. The critic concedes that, once the scale is given, Quantity predicts the implicature, its cancellability and its disappearance under negation.
- **Another way out.** Grammatical theories (Chierchia, Fox, Spector) compute scalar implicatures inside the sentence instead.

*Lessons:* [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Relevance implicature

**Implicating an answer or a further fact by saying something that is relevant only if it holds.** Generated by Relation, observed, not flouted.

- **4.4 Example 1** (invented). Ingrith Lowther, wheezing on the quay at Eskerby, says "I've left my inhaler at home"; Bettany Lisle replies, "There's a pharmacy behind the *Courier* office." Said: there is a pharmacy at that spot, nothing about inhalers or opening hours. Bettany is presumed to be cooperating, not opting out; as a reply to Ingrith's trouble the remark is relevant only if the pharmacy can help her now; so she implicates that Ingrith can get help there now, and Ingrith, who knows what pharmacies sell, can see this. The implicature is particularized and cancellable ([cancellability](#cancellability)).
- **The same shape:** Grice's stranded motorist, told of a garage round the corner. It is a Relation implicature, not a Manner one.
- **Left to you.** Boss 4(a) asks for a relevance implicature in an exchange of its own, derived step by step, with its maxim, a cancellation and why it is not an entailment; the card derives none for it.

*Lessons:* [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Speech act

**An act performed in speaking: asserting, warning, promising, ordering, naming a ship.** J. L. Austin, *How to Do Things with Words* (1962, from his 1955 William James Lectures at Harvard). *In words:* saying is doing, with its own ways to go wrong.

- **Three acts in one utterance** (Austin). The *locutionary* act (saying something with a meaning); the *illocutionary* act, with its [illocutionary force](#illocutionary-force) (warning, promising, ordering); and often a *perlocutionary* act (alarming, persuading).
- **Searle's taxonomy** ("A Taxonomy of Illocutionary Acts", 1975): assertives, directives, commissives, expressives, declarations.
- **Implicating** is itself an indirect illocutionary act (4.4).
- **Austin's starting point** was the [performative utterance](#performative-utterance).
- **Elsewhere.** What makes a promise bind is [`philosophy-of-debt` 1.2](../philosophy-of-debt/lessons/01-02-hume-promises-as-artificial-obligation.md)–[1.3](../philosophy-of-debt/lessons/01-03-promising-after-hume.md)'s (practice, assurance, authority); the words that make a sacramental act what it is, and an actor's non-serious use, are [`sacraments-and-liturgy` 1.2](../sacraments-and-liturgy/lessons/01-02-matter-form-minister-intention.md)'s.

*Lessons:* [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Performative utterance

**An utterance that does what it says rather than describing anything: "I bet you", naming a ship.** J. L. Austin, *How to Do Things with Words* (1962). It fails without being false, in two ways:

- **Misfire:** nothing is done, as when the namer lacks authority.
- **Abuse:** the act is done, but insincerely, like a promise one means to break.
- **Generalized.** Austin went on to treat every utterance as an act with an [illocutionary force](#illocutionary-force) ([speech act](#speech-act)).
- **Trap: a failed performative is not a false statement.** It misfires or is abused; truth and falsity are not its ways of going wrong.

*Lessons:* [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Illocutionary force

**What an utterance is as an act, a warning, a promise, an order, as against what it is about.** J. L. Austin (1962): the force of the illocutionary act, what is done *in* saying something. John Searle (1975) sorts illocutions into five classes: assertives, directives, commissives, expressives, declarations ([speech act](#speech-act)).

- **Trap: illocution is not perlocution.** Warning is done *in* saying; alarming or persuading is brought about *by* saying, and may not happen.

*Lessons:* [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Lying and misleading

**Lying asserts what one believes false; misleading says something true and implicates something false.** In Gricean terms, on the Augustinian definition [`moral-theology` 6.4](../moral-theology/lessons/06-04-truthfulness-and-the-lie.md) uses, a lie asserts against one's mind: a quiet violation of Quality in what is said.

- **Mental reservation, read this way** (4.4; the classes are moral theology's, cited, not decided). A broad reservation is a true what-is-said plus an uncancelled false implicature; a strict reservation's private qualifier is neither said nor implicated, since no hearer could work it out ([mental reservation](../moral-theology/reference.md#mental-reservation) on that card; [speaker meaning](#speaker-meaning)).
- **The law draws the line too.** *Bronston v. United States* (1973): a literally true answer, at most "misleading by negative implication", is not perjury, and the burden is on the questioner to pin the witness down ([what is said and what is implicated](#what-is-said-and-what-is-implicated)).
- **Trap: 4.4 gives no verdict on whether misleading is better than lying.** That is moral theology's dispute.

*Lessons:* [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Analytic and synthetic

**A sentence is analytic if true in virtue of meaning alone, synthetic otherwise.** That is the semantic axis of [`epistemology` 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md)'s three questions about a truth (how it is known, whether it could have been false, what makes it true), and the `epistemology` card has its own [entry](../epistemology/reference.md#analytic-and-synthetic). But "analytic" has had three explications, which 4.5 keeps apart:

| Who | Analytic means | Where |
|---|---|---|
| Kant | the predicate is contained in the subject concept | *Critique of Pure Reason*; owned by [`modern-philosophy` 5.1](../modern-philosophy/lessons/05-01-the-critical-question.md), with Quine's complaint that containment never gets past metaphor |
| Frege | provable from general logical laws and definitions alone | *Die Grundlagen der Arithmetik* (1884), §3 |
| Carnap | true by the rules of a language: in every [state description](#state-description), or in every one its [meaning postulates](#meaning-postulate) admit | *Meaning and Necessity* (1947); "Meaning Postulates" (1952) |

- **Frege's §3** (4.5's Source, the lesson's translation). The distinctions a priori/a posteriori and synthetic/analytic concern "not the content of the judgment but the justification (*Berechtigung*) for making it". Follow the proof back to the primitive truths: if it reaches only general logical laws and definitions, the truth is analytic; if it needs truths of a particular domain of knowledge, synthetic. Three words decide the reading: *Berechtigung* (the notion is epistemic, nearer Boghossian's [epistemic analyticity](#epistemic-and-metaphysical-analyticity) than "true by meaning"); *Definitionen* (the test inherits whatever a definition is, where Quine presses); *allgemeinen logischen Gesetze* (analyticity is relative to what counts as logic, and Frege's own logic proved inconsistent, [`mathematical-logic` 3.1](../mathematical-logic/lessons/03-01-russells-paradox.md)).
- **Frege on Kant** (§88). Kant's test needs a universal affirmative judgment with a subject concept, so it is silent on singular and existential judgments. And a fruitful definition contains its consequences "as the plant is in the seed, not as the beam is in the house" (the lesson's translation).
- **"Every mare is a horse"** (4.5 Example 1). All three call it analytic: for Kant "horse" is part of what we think in "mare"; for Frege, putting the definition for "mare" yields a logical truth; for Carnap it holds in every state description the postulate admits. Quine's question attaches to each at a different place: what containment is, who defined "mare", and why this postulate, rather than "every mare has four legs", counts as one.
- **The proof-assistant picture** (4.5). Unfold the definition of "square" and "every square is a rectangle" closes by logic alone, while "Pluto has cleared its orbit" never will; Quine asks who wrote the definitions, and what makes them definitions rather than conjectures.
- **Trap: "analytic" did not always mean "true in virtue of meaning".** Kant's test is containment, Frege's §3 concerns the proof that justifies, and Carnap's is truth by a language's rules. Each objection fits some of these better than others.

*Lessons:* [4.5](lessons/04-05-analyticity-and-two-dogmas.md)

### Analyticity

**The property of being true in virtue of meaning alone, the semantic notion whose good order "Two Dogmas" denies.** Quine's two classes ("Two Dogmas of Empiricism", 1951, §1): logical truths, like "No unmarried man is married", are not the problem; the second class, like "No bachelor is married", becomes a logical truth only by putting synonyms for synonyms. These are the logical and conceptual rungs of [`metaphysics` 3.1](../metaphysics/lessons/03-01-kinds-of-necessity.md). Its rival explications are in [analytic and synthetic](#analytic-and-synthetic).

- **The attack.** The [circle of synonymy](#circle-of-synonymy) (§§1–4); the second dogma and holism (§§5–6; [Two Dogmas](#two-dogmas)).
- **Replies, as 4.5 gives them.**
  - *Grice and Strawson* ("In Defense of a Dogma", 1956): a distinction speakers apply with broad agreement to new cases is unlikely to be illusory, and a standard that condemned it would condemn "means the same" too. From outside the circle they contrast a surprising claim (a neighbour's three-year-old understands Russell's theory of types) with one whose meaning you cannot find (the child is an adult). Against §6 they grant that nothing is immune to revision and deny that this erases the line ([revisability of logic](#revisability-of-logic)).
  - *Carnap* ("Meaning Postulates", 1952): analyticity relative to a language's postulates ([meaning postulate](#meaning-postulate)).
  - *Putnam* ("The Analytic and the Synthetic", 1962): a trivial distinction for one-criterion words, none for law-cluster terms ([one-criterion and law-cluster terms](#one-criterion-and-law-cluster-terms)).
  - *Boghossian* ("Analyticity Reconsidered", 1996): the metaphysical notion fails, the epistemic one survives ([epistemic and metaphysical analyticity](#epistemic-and-metaphysical-analyticity)); Harman (1996) and Williamson (2007) press the epistemic notion ([understanding-assent link](#understanding-assent-link)).
- **The hook** (4.5). When the International Astronomical Union resolved on 24 August 2006 that a planet must have cleared the neighbourhood of its orbit, did astronomers learn something about Pluto, or change what "planet" means? 4.5 P3 sets the crux on that resolution.
- **Trap: analyticity is the semantic notion.** Whether a truth is known a priori, and whether it could have been false, are separate questions ([`epistemology` 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md)).

*Lessons:* [4.5](lessons/04-05-analyticity-and-two-dogmas.md)

### State description

**Carnap's stand-in for a possible world: an assignment of T or F to every atomic sentence of a language.** Rudolf Carnap, *Meaning and Necessity* (1947). Let a language $L$ have atomic sentences $A_1, \dots, A_n$; a state description $s$ assigns T or F to each $A_i$, and complex sentences get their values from the truth tables, with $\forall x$ running over $L$'s individual names. Write $s \models S$ for "$S$ is true in $s$".

**C1** (Carnap, 1947): $S$ is L-true iff $s \models S$ for every state description $s$ of $L$. *In words:* no distribution of truth values over the atoms makes it false.

- **Counting.** A language with $n$ atomic sentences has $2^n$ state descriptions. 4.5 Example 1: predicates $M$ (mare), $H$ (horse), $F$ (female) and names $a, b$ give 6 atoms and $2^6 = 64$.
- **Quine's complaint** ("Two Dogmas", §1): state descriptions treat atomic sentences as independent, so C1 reconstructs only logical truth and misses the second class ("No bachelor is married"). C2, with [meaning postulates](#meaning-postulate), was Carnap's later repair.
- **5.2's Flashback** counts state descriptions for a language with postulates; the card leaves it to the problem.

*Lessons:* [4.5](lessons/04-05-analyticity-and-two-dogmas.md), [5.2](lessons/05-02-deflationism.md)

### Meaning postulate

**A sentence laid down as a rule of a language that restricts which state descriptions are admissible, fixing part of the meaning of its words.** Rudolf Carnap, "Meaning Postulates" (*Philosophical Studies*, 1952).

**C2** (Carnap, 1952): given a set $\mathcal{P}$ of meaning postulates, $S$ is analytic in $L$ iff $s \models S$ for every [state description](#state-description) $s$ with $s \models P$ for all $P \in \mathcal{P}$. *In words:* hold the postulates fixed, and no remaining distribution of truth values makes it false.

- **"Mare"** (4.5 Example 1). With the postulate $\forall x\,(Mx \to (Hx \wedge Fx))$ ($M$ mare, $H$ horse, $F$ female; names $a, b$), 25 of the 64 state descriptions are admitted. $\forall x\,(Mx \to Hx)$ holds in 36 of the 64 and in all 25: analytic in $L$, not L-true. $\forall x\,((Hx \wedge Fx) \to Mx)$ fails in an admitted description where $a$ is a female horse but no mare, a filly: synthetic. The postulate, a conditional, fixes only part of a meaning.
- **Chronology.** "Meaning Postulates" (1952) came after "Two Dogmas" (1951): it is a reply, repairing §1's complaint about state descriptions, not something Quine attacked there.
- **Quine's worries carry over.** §4's applies unchanged: a rule is marked off from other truths only by the heading it is listed under, so what makes a postulate a *meaning* postulate? And in "Carnap and Logical Truth" (1960) Quine holds that the artificiality of a legislated postulate's origin does not linger.
- **Kinetic energy** (4.5 Example 2). A Carnapian says that if "kinetic energy is $\tfrac12 mv^2$" was a meaning postulate, physics changed languages and the old sentence stays analytic in the old one.
- **4.5 P3** sets the crux on the IAU's 2006 definition of "planet"; **5.2's Flashback** works a language with three postulates. The card leaves both to the problems.

*Lessons:* [4.5](lessons/04-05-analyticity-and-two-dogmas.md), [5.2](lessons/05-02-deflationism.md)

### Circle of synonymy

**Quine's argument that analyticity can be explained only by notions (synonymy, definition, interchangeability *salva veritate*, necessity, semantical rule) that themselves lead back to it.** W. V. Quine, "Two Dogmas of Empiricism" (*Philosophical Review*, 1951; revised in *From a Logical Point of View*, 1953), §§1–4. Quine calls the result a "closed curve in space".

- **4.5's diagram, in words.** Analyticity of the second class needs cognitive synonymy; definition rests on prior synonymy (except a newly introduced abbreviation); interchangeability *salva veritate* gives synonymy only in a language with a "necessarily" that applies just to analytic truths, and in an extensional language only coextension ("creature with a heart", "creature with a kidney"); semantical rules define only "analytic-for-$L_0$" and so presuppose the notion.
- **Carnap's postulates inherit §4's worry** ([meaning postulate](#meaning-postulate)), though they post-date the paper.
- **Not a refutation by itself.** 4.5 notes that the circle becomes a reason to drop the notion only with a further premise about intelligibility; the card does not state it.
- **Two exits on 4.5's diagram:** Grice and Strawson's ([analyticity](#analyticity)) and Boghossian's, which changes the notion at stake ([epistemic and metaphysical analyticity](#epistemic-and-metaphysical-analyticity)).
- **Trap: a circle of explanation, not a fallacy of circular reasoning.** Each notion is defined by the others; whether that is vicious is the contested question.
- **Trap: the circle is not the revisability argument.** §§5–6 argue separately, from holism ([Two Dogmas](#two-dogmas)).
- **Left to you.** Boss 4(c) asks for the numbered reconstruction of §§1–4, the suppressed premise that turns the circle into a reason to reject the notion, and the premise Grice and Strawson deny, with their evidence; the card gives none of these.

*Lessons:* [4.5](lessons/04-05-analyticity-and-two-dogmas.md)

### Two Dogmas

**Quine's 1951 paper against two dogmas of empiricism: the analytic/synthetic distinction, and reductionism, the belief that each statement, taken alone, has its own range of confirming and disconfirming experiences.** W. V. Quine, "Two Dogmas of Empiricism", *Philosophical Review* 60 (1951); revised in *From a Logical Point of View* (1953). §§1–4 are the [circle of synonymy](#circle-of-synonymy); §§5–6 the second dogma and the link, as 4.5 reconstructs them:

| | Premise | In words |
|---|---|---|
| P1 | The verification theory of meaning: two statements are synonymous iff they are alike in method of empirical confirmation, and an analytic statement is the limiting case, confirmed no matter what. | Verificationism would give synonymy for free. |
| P2 | That account needs reductionism, at least attenuated: each statement, taken alone, has its own range of confirming and disconfirming experiences. | Every sentence carries its own test. |
| P3 | Statements about the external world face experience not singly but as a "corporate body". | Experience tests theories, not sentences. |
| P4 | So any statement can be held true come what may, by adjustments elsewhere, and none is immune to revision, [logic included](#revisability-of-logic). | Quine cites a proposal to revise excluded middle for quantum mechanics. |
| C | Confirmation defines neither synonymy nor analyticity, and "confirmed come what may" marks off no class. | The two dogmas are, in Quine's phrase, "at root identical". |

- **Where 4.5 locates the weakness: the step from P4 to C.** Grice and Strawson grant that nothing is immune to revision and deny that this erases the line: one can give a statement up by admitting it false, or by changing a concept. The strongest Quinean reply, later pressed by Harman: no empirical evidence separates a change of meaning from a change of belief, so the second kind of giving up is the dogma restated. The defender concedes that analyticity cannot underwrite unrevisability, or the a priori in the strong sense; the Quinean concedes that the difference between surprise and bewilderment is real data that holism must explain, and centrality fits it poorly: "there have been black dogs" is central and not analytic.
- **Kinetic energy** (4.5 Example 2). Quine says truth values were redistributed and no fact decides which kind of change it was; the rival readings are under [one-criterion and law-cluster terms](#one-criterion-and-law-cluster-terms).
- **The verification theory's other job.** P1 is also the positivists' test for meaningless sentences, sometimes read back into Hume's fork ([`modern-philosophy` 4.1](../modern-philosophy/lessons/04-01-impressions-ideas-and-the-fork.md) weighs the anachronism); holism removes its unit, the single sentence.
- **Owners elsewhere.** P3–P4 as claims about testing are [`philosophy-of-science` 2.2](../philosophy-of-science/lessons/02-02-duhem-quine-and-underdetermination.md)'s; the case against the a priori is [`epistemology` 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md)'s.
- **Context.** The paper opens with Kant, Hume's fork and Leibniz's truths of reason; its last section says Carnap's internal/external split ([`metaphysics` 1.1](../metaphysics/lessons/01-01-existence-and-ontological-commitment.md)) needs an absolute analytic/synthetic line; Davidson is thanked for criticism of the first draft. Quine separates the theory of meaning from the theory of reference (§1) and attacks the first.
- **Trap: the 1951 paper does not speak of a web** ([web of belief](#web-of-belief)).

*Lessons:* [4.5](lessons/04-05-analyticity-and-two-dogmas.md)

### Revisability of logic

**Quine's claim that no statement, logic included, is immune to revision in the light of experience.** "Two Dogmas" §6, P4 of the second-dogma argument ([Two Dogmas](#two-dogmas)): any statement can be held true come what may, by adjustments elsewhere, and none is immune to revision. Quine cites a proposal to revise excluded middle for quantum mechanics.

- **Grice and Strawson's reply** (1956). Nothing being immune to revision does not erase the line: a statement can be given up by admitting it false, or by changing a concept. On kinetic energy (4.5 Example 2) they say the classical formula was given up in one of those two ways.
- **What the defender of analyticity concedes:** analyticity cannot underwrite unrevisability.
- **Trap: revisable does not mean synthetic.** Grice and Strawson allow that an analytic truth can be given up by changing a concept. Revisability tells against the a priori only on the strong notion [`epistemology` 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md) discusses; that course owns the argument.

*Lessons:* [4.5](lessons/04-05-analyticity-and-two-dogmas.md)

### Web of belief

**Quine's holistic picture: our statements, logic and mathematics included, face experience together, so experience can be accommodated by adjustments anywhere.** The phrase is the title of Quine and Ullian's book *The Web of Belief* (1970). It does not occur in "Two Dogmas" (1951), whose images are a "man-made fabric" touching experience only at its edges and a "field of force".

- **What 4.5 uses it for:** the semantic conclusion of "Two Dogmas" and the link between its two dogmas ([Two Dogmas](#two-dogmas)). The thesis about testing is [`philosophy-of-science` 2.2](../philosophy-of-science/lessons/02-02-duhem-quine-and-underdetermination.md)'s; the argument against the a priori is [`epistemology` 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md)'s.
- **Centrality is not analyticity.** The Quinean concedes that centrality in the web fits the contrast between surprise and bewilderment poorly: "there have been black dogs" is central and not analytic.
- **Meaning holism for theoretical terms** is [`philosophy-of-science` 2.4](../philosophy-of-science/lessons/02-04-kuhn-incommensurability-and-theory-choice.md)'s.
- **Trap: "Two Dogmas" does not call our beliefs a web.** Its images are a fabric and a field of force; "web of belief" is the 1970 book title.

*Lessons:* [4.5](lessons/04-05-analyticity-and-two-dogmas.md)

### One-criterion and law-cluster terms

**Putnam's contrast between words with a single criterion of application, like "bachelor", and terms fixed by a cluster of laws, none of them definitional, like "energy".** Hilary Putnam, "The Analytic and the Synthetic" (1962). Analytic truths exist but are trivial, the ones one-criterion words give; a law-cluster term survives the revision of any one of its laws.

- **Kinetic energy** (4.5 Example 2). Classical mechanics treated "kinetic energy is $\tfrac12 mv^2$" as a definition. Special relativity gives $(\gamma - 1)mc^2$, with $\gamma = 1/\sqrt{1 - v^2/c^2}$, $m$ the mass, $v$ the speed and $c$ the speed of light ([`relativity` 1.5](../relativity/lessons/01-05-four-vectors-momentum.md)). At $v = 0.6c$, $\gamma = 1.25$, so the kinetic energy is $0.25\,mc^2$ where $\tfrac12 mv^2 = 0.18\,mc^2$. Putnam: $\tfrac12 mv^2$ was one law among several, and revising it kept the subject.
- **The same record, four readings** (4.5). Carnapian: physics changed languages, and the old sentence stays analytic in the old one. Grice and Strawson: one of their two kinds of giving up. Putnam: a law-cluster term kept its subject. Quine: truth values were redistributed, and no fact decides which kind of change it was. Physicists kept the word, kept conservation of energy, and recovered $\tfrac12 mv^2$ as the low-speed limit; each side reads that as support, and whether "kinetic energy" in 1900 *meant* $\tfrac12 mv^2$ is what the case leaves open.
- **Objection.** Fodor later objected that "criterion" is no clearer than "meaning".
- **Trap: Putnam is not wholly on Quine's side.** He keeps a small, trivial distinction for one-criterion words.

*Lessons:* [4.5](lessons/04-05-analyticity-and-two-dogmas.md)

### Epistemic and metaphysical analyticity

**Boghossian's split: a sentence is metaphysically analytic if it is true in virtue of meaning alone, epistemically analytic if understanding it suffices for being justified in believing it.** Paul Boghossian, "Analyticity Reconsidered" (1996). [`epistemology` 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md) states the two versions; 4.5 gives the arguments.

- **Against the metaphysical notion.** A sentence's meaning that $p$ cannot by itself make it true, since it must also be the case that $p$.
- **For the epistemic notion.** Quine's circle threatens it only if there are no facts about meaning at all; 4.3's sceptic about meaning facts ([sceptical challenge](#sceptical-challenge)) is the position Boghossian says the Quinean needs. It is reached by synonym substitution (transforming the sentence into a logical truth by putting synonyms for synonyms) or by [implicit definition](#implicit-definition).
- **Objections.** Gilbert Harman (1996): the epistemic story leans on the metaphysical one. Timothy Williamson (*The Philosophy of Philosophy*, 2007): there are no [understanding-assent links](#understanding-assent-link) for it to rest on.
- **Frege's §3 is epistemic in this sense:** analyticity concerns the justification (*Berechtigung*), not the content ([analytic and synthetic](#analytic-and-synthetic)).
- **4.5 P2** tests the epistemic notion on an invented epistemologist; the card leaves it to the problem.

*Lessons:* [4.5](lessons/04-05-analyticity-and-two-dogmas.md)

### Implicit definition

**Fixing a word's meaning by stipulating that certain sentences containing it are true, or certain inferences valid.** Boghossian (1996), paraphrased in 4.5: stipulating that "taller than" is transitive fixes part of its meaning. It is one of the two routes to [epistemic analyticity](#epistemic-and-metaphysical-analyticity), the other being synonym substitution.

- **Same objection as the epistemic notion it serves.** Harman (1996): the epistemic story leans on the metaphysical one.
- **A cousin.** Carnap's [meaning postulates](#meaning-postulate) also fix part of a meaning by laying sentences down as rules.

*Lessons:* [4.5](lessons/04-05-analyticity-and-two-dogmas.md)

### Understanding-assent link

**The claim that, necessarily, anyone who understands a given sentence assents to it (or is disposed to assent, or is justified in believing it).** The link the epistemic notion of analyticity needs ([epistemic and metaphysical analyticity](#epistemic-and-metaphysical-analyticity)).

- **Williamson's attack** (*The Philosophy of Philosophy*, 2007): no sentence meets such a link. His Peter and Stephen, competent speakers who publish deviant theories of "every", understand "Every vixen is a vixen" and reject it.
- **4.5 P2** sets a fresh case; the card leaves it to the problem.
- **Trap: "she rejects it, so she does not understand it" begs the question.** Understanding has to be shown by criteria that do not presuppose assent.

*Lessons:* [4.5](lessons/04-05-analyticity-and-two-dogmas.md)

**Module 5: Truth, paradox, and vagueness**

### Object language and metalanguage

**The object language is the language whose sentences are being called true; the metalanguage is the language the definition of "true" for it is written in.** Tarski's distinction ("The Concept of Truth in Formalized Languages", 1933), and the frame of all of 5.1. When [`mathematical-logic` 2.2](../mathematical-logic/lessons/02-02-structures-satisfaction.md) defined $\models$ for first-order formulas, English plus a little set theory was the metalanguage (5.1).

- **What the metalanguage must contain** (5.1, D1). A translation of the object language $L$, names for $L$'s sentences with a theory of their syntax, and logic with some set theory. *In words:* the language you talk in must say everything $L$ says, and talk about $L$'s sentences.
- **Use and mention.** A [T-sentence](#t-sentence) mentions (names) an object-language sentence on its left and uses a metalanguage sentence on its right: "'Gras ist grün' is true iff grass is green" (5.1); "'Giulia aiuta Enzo' is true iff Giulia helps Enzo", with Italian mentioned and English used (4.1).
- **Why two languages.** A language that names its own sentences and contains its own "true" is [semantically closed](#semantic-closure), and the [undefinability theorem](#undefinability-of-truth) shows that arithmetic cannot define truth for its own sentences. So truth for a language is defined in a stronger metalanguage, and iterating the move gives [Tarski's hierarchy](#tarskis-hierarchy).
- **In 5.3.** The gap theorist's verdict on the liar, and the notions "grounded" and "paradoxical", belong to a classical metalanguage, as Kripke granted ([revenge problem](#revenge-problem)).
- **Trap: a homophonic T-sentence is not circular.** When the object language is part of the metalanguage ("'grass is green' is true iff grass is green") the sentence only looks empty: the left side is still a name of a sentence, the right side a use of one.

*Lessons:* [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md), [5.1](lessons/05-01-tarskis-theory-as-philosophy.md)

### Tarski's theory of truth

**Tarski's way of defining "true sentence of $L$" for a formalized language $L$: in a stronger metalanguage, through a recursive definition of satisfaction, so that the definition is formally correct and provably meets Convention T.** Alfred Tarski, "The Concept of Truth in Formalized Languages" (Polish 1933, German 1935, English 1956); popular version "The Semantic Conception of Truth and the Foundations of Semantics" (1944). Tarski presented the definition as capturing the "classical Aristotelian conception" of truth (his phrase in 1933 and 1944; SEP, "Alfred Tarski").

- **Two demands.** [Material adequacy](#material-adequacy), made precise as [Convention T](#convention-t), and [formal correctness](#formal-correctness).
- **The construction** (5.1, D4). [Satisfaction](#satisfaction) of formulas by assignments is defined recursively from base clauses for names and predicates; then a sentence is true iff every assignment satisfies it.
- **A finite language can be done case by case** (5.1 Example 1). With two sentences, $Kr$ ("the Rhine flows through Cologne") and $Ke$ ("the Elbe flows through Cologne"),
$$\mathrm{Tr}(x) \leftrightarrow \big(x = \ulcorner Kr\urcorner \wedge \text{the Rhine flows through Cologne}\big) \vee \big(x = \ulcorner Ke\urcorner \wedge \text{the Elbe flows through Cologne}\big),$$
where $\mathrm{Tr}$ is the defined predicate and $\ulcorner Kr\urcorner$, $\ulcorner Ke\urcorner$ are names of the two sentences. Since the names name different sentences, logic alone yields both T-sentences however the rivers run. An infinite language needs the recursion.
- **One language at a time.** The definition is of truth-in-$L$ for one $L$, given in a metalanguage, never for the language the definition is written in ([undefinability of truth](#undefinability-of-truth)).
- **The philosophical claim, as 5.1 reconstructs it.** P1: Convention T captures the classical conception ([Aristotle's formula](#aristotles-formula)). P2: Tarski's definition is formally correct and provably meets Convention T. P3: a formally correct definition that provably meets Convention T says what truth in $L$ is. C: truth in $L$ has been explained in non-semantic terms, in the classical sense. P2 is the theorem part, which nobody disputes; 5.1 locates the weakness at P3 ([Field's objection](#fields-objection)).
- **Reception** (5.1). Carnap and Popper defended the theory (IEP, "Semantic Theory of Truth"); Davidson (1969) and Hartry Field (1972) took it as the core of a [correspondence theory](#correspondence-theory) without facts; Putnam (1985–86) judged it a complete failure as philosophy (SEP, "Truth", §3.1).
- **Run in reverse** (4.1). Tarski took meaning (translation) as given and defined truth; Davidson takes truth as understood and reads meaning off a [truth theory](#truth-theory) ([truth-conditional semantics](#truth-conditional-semantics)).
- **Trap: meeting Convention T does not make a theory a correspondence theory.** The condition is neutral: an anti-realist can accept every T-sentence too (SEP, "Truth", §4.2). Whether there is correspondence depends on what the base clauses are taken to report.

*Lessons:* [5.1](lessons/05-01-tarskis-theory-as-philosophy.md)

### Material adequacy

**The demand that a definition of truth get exactly the true sentences of $L$, and get them provably, by entailing every T-sentence.** Tarski's first condition (1933), made precise as [Convention T](#convention-t). His Polish word, *trafny*, is better rendered "accurate" (SEP, "Tarski's Truth Definitions", §1.3).

- **Provable, not lucky, coextension** (5.1 Example 1). For the two-sentence Rhine and Elbe language (see [Tarski's theory of truth](#tarskis-theory-of-truth)), the bare list of the sentences that happen to be true, $\mathrm{Tr}(x) \leftrightarrow x = \ulcorner Kr\urcorner$, has the right extension, but of the four ways the two facts could go it matches both T-sentences in only one; the case-by-case definition matches them in all four. Convention T asks for proof.
- **The thermometer** (5.1). The T-sentences are calibration checkpoints: a definition that misses one is wrong, and one that provably passes them all has the right extension. Whether passing tells you what truth is, is the philosophical question.
- **Trap: adequacy is not explanation.** Field grants that Tarski's definition is materially adequate and still objects that it explains nothing about denotation ([Field's objection](#fields-objection)).

*Lessons:* [5.1](lessons/05-01-tarskis-theory-as-philosophy.md)

### T-schema

**The schema "$X$ is true iff $p$", with a name of a sentence in place of $X$ and that sentence's translation into the metalanguage in place of $p$; its instances are the T-sentences.** Tarski (1933). Example: "Gras ist grün" is true iff grass is green (5.1). In symbols,
$$\mathrm{Tr}(\ulcorner S\urcorner) \leftrightarrow S^{*},$$
where $\mathrm{Tr}$ is the truth predicate, $\ulcorner S\urcorner$ names a sentence $S$ of the object language (by quotation, or in arithmetic by its Gödel numeral) and $S^{*}$ is its translation into the metalanguage. When the object language is part of the metalanguage, $S^{*}$ is $S$ itself: $\mathrm{Tr}(\ulcorner\varphi\urcorner) \leftrightarrow \varphi$.

- **Defined by translation, not by truth value.** A true biconditional whose right side does not translate the sentence named on the left is no instance of the schema.
- **Its jobs across Module 5.** Checkpoints a definition must pass ([Convention T](#convention-t), 5.1); for the deflationist, the whole theory of truth (5.2; the variants are in [equivalence schema](#equivalence-schema)); P2 of the [liar](#liar-paradox) argument when applied to every sentence, including those containing $\mathrm{Tr}$ (5.3).
- **In Kripke's fixed points** (5.3) it survives as transparency: $\varphi$ and $\mathrm{Tr}(\ulcorner\varphi\urcorner)$ always have the same value, though the biconditional $\mathrm{Tr}(\ulcorner L\urcorner) \leftrightarrow L$ for the liar $L$ itself gets $\tfrac12$.
- **Under degrees** (5.4). If "'person 100 is tall' is true" means "true to degree 1", it has degree 0 and its T-biconditional only $\tfrac12$; a deflationist who wants every instance fully true must let "true" take degrees too.
- **Under supertruth** (5.5). "'Tile 16 is blue' is supertrue iff tile 16 is blue" is neither supertrue nor superfalse at a borderline tile: Williamson's objection that supertruth does not disquote ([supervaluationism](#supervaluationism)).
- **Notation.** 5.1–5.3 write $\mathrm{Tr}(\ulcorner\varphi\urcorner)$; the syllabus's Boss problem 5 writes $T\ulcorner\varphi\urcorner$ for the same thing.
- **Trap: a T-sentence is not trivially circular.** Its left side mentions an object-language sentence and its right side uses the metalanguage; "'Gras ist grün' is true iff grass is green" informs someone without German.
- **Trap: accepting the schema does not make you a deflationist.** Every theory of truth in 5.2 accepts every instance ([deflationism](#deflationism)).

*Lessons:* [5.1](lessons/05-01-tarskis-theory-as-philosophy.md), [5.3](lessons/05-03-the-liar-and-theories-of-truth.md), [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md)

### Convention T

**Tarski's test of material adequacy, with two clauses: a definition of truth for $L$ must entail every T-sentence for $L$, and must entail that only sentences of $L$ are true.** Tarski (1933). In 5.1's statement (D2): a definition of a predicate $\mathrm{Tr}$ in a metalanguage $M$ is materially adequate iff $M$'s axioms, with the definition, prove

- (α) every instance of $\mathrm{Tr}(\ulcorner S\urcorner) \leftrightarrow S^{*}$, for $S$ a sentence of $L$ and $S^{*}$ its translation into $M$; and
- (β) $\forall x\,(\mathrm{Tr}(x) \to x \text{ is a sentence of } L)$.

*In words:* the definition must deliver every T-sentence and count nothing but sentences true. State both clauses wherever Convention T is defined.

- **A test, not a definition.** For an infinite language the T-sentences are infinitely many, and Tarski (1944) declined to treat their infinite conjunction as a definition (SEP, "Deflationism About Truth").
- **Neutral between theories.** Meeting it does not make a theory a correspondence theory; an anti-realist can accept every T-sentence too (SEP, "Truth", §4.2).
- **Why Tarski is not a deflationist** (5.2). He made the schema an adequacy condition and allowed a definition to say more than its instances; the deflationist says the instances say everything.
- **Run in reverse** (4.1). Tarski took meaning as given: the right side of each T-sentence must translate the left. Davidson cannot assume translation, since meaning is what he wants; he takes truth as understood and, in "Radical Interpretation" (1973), asks only that the T-sentences be true ([radical interpretation](#radical-interpretation)).
- **One rung up** (5.3's Flashback climbs [Tarski's hierarchy](#tarskis-hierarchy) with a predicate $\mathrm{Tr}_0$ for which both clauses hold).
- **Trap: stating only clause (α).** The second clause is part of the convention, and some arguments turn on it.

*Lessons:* [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md), [5.1](lessons/05-01-tarskis-theory-as-philosophy.md), [5.2](lessons/05-02-deflationism.md), [5.3](lessons/05-03-the-liar-and-theories-of-truth.md)

### Formal correctness

**Tarski's second demand: the definition must be explicit and must use no semantic word ("true", "refers", "means"), so that no circle and no paradox can creep in.** Tarski (1933). In 5.1's statement (D3) the definition has the form
$$\forall x\,\big(\mathrm{Tr}(x) \leftrightarrow \delta(x)\big),$$
with $\mathrm{Tr}$ absent from the defining formula $\delta$, and $\delta$ built from syntax, logic, set theory and translations of $L$'s own words. *In words:* no circle, and no semantic word left unexplained.

- **Met by Tarski's definition** (P2 of the philosophical claim in [Tarski's theory of truth](#tarskis-theory-of-truth)): formally correct and provably meeting Convention T, the part nobody disputes.
- **How the base clauses meet it.** What names denote and what predicates apply to are given by lists ("$r$" denotes the Rhine, "$e$" the Elbe), which use no semantic word. That is exactly what [Field's objection](#fields-objection) targets.

*Lessons:* [5.1](lessons/05-01-tarskis-theory-as-philosophy.md)

### Satisfaction

**The relation between an assignment of objects to variables and a formula that comes out true under it; Tarski defines truth through it because open formulas are neither true nor false.** 5.1, D4: satisfaction is defined recursively (the clauses of [`mathematical-logic` 2.2](../mathematical-logic/lessons/02-02-structures-satisfaction.md), read now as a definition stated in the metalanguage), and then a sentence is true iff every assignment satisfies it. The recursion bottoms out in base clauses for names and predicates ([primitive denotation](#primitive-denotation)). *In words:* truth for complex sentences is computed from what the simple words apply to.

- **The quantifier clause.** An assignment $s$ satisfies $\exists x\,\varphi$ iff, for some object $d$ in the domain, $s[x \mapsto d]$ satisfies $\varphi$, where $s[x \mapsto d]$ is $s$ with $x$ reassigned to $d$.
- **Worked case** (5.1 Example 1). Domain $D$ = {the Rhine, the Elbe, the Danube}; $r$ denotes the Rhine, $e$ the Elbe; an assignment $s$ satisfies $Kt$ iff the object the term $t$ picks out under $s$ flows through Cologne. Then
$$\mathrm{Tr}(\ulcorner \exists x\,\neg Kx\urcorner) \iff \text{some } d \in D \text{ does not flow through Cologne},$$
which is the translation of $\exists x\,\neg Kx$, and true: the Elbe and the Danube are witnesses.
- **Field's concession.** The recursive clauses, which compute truth for complex sentences from primitive denotation, are a genuine compositional achievement ([Field's objection](#fields-objection)).
- **In Davidson's program** (4.1) satisfaction axioms for predicates are part of a [truth theory](#truth-theory) read as a theory of meaning.
- **Trap: keep the words apart.** "Satisfaction" is for formulas under assignments, "truth" for sentences. A satisfaction clause contains "iff" but is not a T-sentence.

*Lessons:* [5.1](lessons/05-01-tarskis-theory-as-philosophy.md)

### Undefinability of truth

**No language that can do arithmetic can define truth for its own sentences: once it can say "true" of them, it can say "this sentence is not true".** Tarski (1933; general form in the 1935 postscript). Settled. 5.1 is the library's only statement of the theorem.

Statement (5.1, T1). Let $\mathcal N$ be the standard model of arithmetic and $\mathcal L_A$ its language, and write $\ulcorner\varphi\urcorner$ for the Gödel numeral of $\varphi$. No formula $\mathrm{Tr}(x)$ of $\mathcal L_A$ satisfies
$$\mathcal N \models \mathrm{Tr}(\ulcorner\varphi\urcorner) \leftrightarrow \varphi \quad \text{for every sentence } \varphi \text{ of } \mathcal L_A.$$

The proof supposes such a $\mathrm{Tr}$ and names what each step uses:

1. The [diagonal lemma](../mathematical-logic/lessons/05-01-incompleteness-first-theorem.md), applied to $\psi(x) := \neg\mathrm{Tr}(x)$, gives a sentence $L$ with $\mathsf{PA} \vdash L \leftrightarrow \neg\mathrm{Tr}(\ulcorner L\urcorner)$. *Uses:* the language codes its own syntax, and $\psi$ has a free variable (why `mathematical-logic` 5.1 P3 refused the shortcut $L \leftrightarrow \neg L$).
2. $\mathcal N \models L \leftrightarrow \neg\mathrm{Tr}(\ulcorner L\urcorner)$. *Uses:* the axioms of Peano arithmetic, $\mathsf{PA}$, are true in $\mathcal N$.
3. $\mathcal N \models \mathrm{Tr}(\ulcorner L\urcorner) \leftrightarrow L$. *Uses:* the supposed definition, applied to a sentence that contains $\mathrm{Tr}$ ([semantic closure](#semantic-closure)).
4. $\mathcal N \models L \leftrightarrow \neg L$, which no structure satisfies. *Uses:* classical, two-valued satisfaction.

- **What follows.** Truth for $\mathcal L_A$ is definable, but only in a stronger metalanguage; set theory's truth cannot be defined in set theory either. The levels of [Tarski's hierarchy](#tarskis-hierarchy) cannot be merged for this reason.
- **Run on English** (5.1 Example 2). Step 1 needs only self-reference (a sign reading "the only sentence on this sign is not true"), step 3 is what speakers seem to accept for every sentence, step 4 is ordinary logic. T1 says the four cannot all hold; it does not say which one English lacks. The exits: inconsistency views ([semantic closure](#semantic-closure)), or one "true" kept and a premise dropped: a hierarchy hidden in context, the full T-schema, or classical logic ([liar paradox](#liar-paradox), 5.3).
- **Cousin.** The diagonal argument of [`theory-of-computation` 4.1](../theory-of-computation/lessons/04-01-diagonalization-and-the-halting-problem.md), with "true" in place of "accepts".
- **Trap: not "truth is undefinable".** Truth for $\mathcal L_A$ is definable in a stronger metalanguage.
- **Trap: not incompleteness again.** T1 concerns what a language can express, not what a theory can prove. Gödel's $G$ exists, true and unprovable; T1's $L$ never exists, because the $\mathrm{Tr}$ it needs does not.
- **Trap: two senses of "fixed point".** $L$ is a fixed point in the diagonal lemma's sense, a sentence; Kripke's fixed point is an interpretation of $\mathrm{Tr}$ ([Kripke's fixed point](#kripkes-fixed-point)).

*Lessons:* [5.1](lessons/05-01-tarskis-theory-as-philosophy.md), [5.3](lessons/05-03-the-liar-and-theories-of-truth.md)

### Semantic closure

**A language is semantically closed when it contains names of its own sentences and a truth predicate that applies to them.** Tarski's term. It is step 3 of the [undefinability](#undefinability-of-truth) proof: the language's truth predicate covers the language's own sentences.

- **English.** English names its own sentences by quotation, and its "true" applies to them. In 1933 Tarski suggested that everyday language with ordinary logic is inconsistent (SEP, "Liar Paradox"); in 1944 he spoke more mildly of languages with a "specified structure" (IEP, "Semantic Theory of Truth"). He suggested it; he neither proved nor flatly asserted it.
- **Responses** (5.1 Example 2). Herzberger (1967) argued that a language cannot be inconsistent; Matti Eklund (2002) and Kevin Scharp (2013) take inconsistency seriously, Scharp proposing consistent replacements for "true". Others keep one "true" and drop a premise of the undefinability argument ([liar paradox](#liar-paradox), 5.3).
- **Also at work in [Curry's paradox](#curry-paradox)**, which uses the T-biconditional for a sentence containing $\mathrm{Tr}$.
- **Not closed.** A language on one rung of [Tarski's hierarchy](#tarskis-hierarchy) has a truth predicate only for the rung below.
- **Trap: inconsistency is Tarski's suggested diagnosis, not a theorem.** The theorem proves only that the four ingredients cannot all hold.

*Lessons:* [5.1](lessons/05-01-tarskis-theory-as-philosophy.md), [5.3](lessons/05-03-the-liar-and-theories-of-truth.md)

### Aristotle's formula

**Aristotle's one-sentence definition of the true and the false, which Tarski said his definition of truth captures.** *Metaphysics* Γ 7, 1011b26–27, tr. W. D. Ross (1908; the sentence is unchanged in Ross's 1928 second edition). Ross's sentence gives falsity first: "To say of what is that it is not, or of what is not that it is, is false"; then truth: "to say of what is that it is, and of what is not that it is not, is true".

- **Its role in the course** (5.1). It is P1 of Tarski's philosophical claim: Convention T captures this "classical Aristotelian conception" (Tarski's phrase, 1933 and 1944). 5.1's gloss on P1: each T-sentence says a sentence is true just when things are as it says.
- **Left to you.** Boss 5(a) close-reads Γ 7 in its context together with Θ 10; the card gives Ross's words and no reading of them.

*Lessons:* [5.1](lessons/05-01-tarskis-theory-as-philosophy.md)

### Field's objection

**Tarski reduced truth to primitive denotation, but stated denotation by lists, which fix the extension and explain nothing.** Hartry Field, "Tarski's Theory of Truth" (*Journal of Philosophy*, 1972). 5.1 calls it the sharpest objection to Tarski's philosophical claim, and aims it at P3 (see [Tarski's theory of truth](#tarskis-theory-of-truth)).

- **The base clauses** ([primitive denotation](#primitive-denotation)): a name denotes an object iff it is "$r$" and the object is the Rhine, or it is "$e$" and the object is the Elbe.
- **The valence analogy.** A chemist who "defined" valence by listing each element with its number would get the extension right and explain nothing; physicalism wanted valence explained by atomic structure, and Field wanted denotation explained physically, say by a causal theory of reference ([causal-historical theory](#causal-historical-theory), 3.2). The card attributes no particular element list or example names to Field 1972.
- **The argument in one line.** Provable coextension is not explanation, as the valence list shows, so C claims a reduction that the base clauses only postpone.
- **Replies** (5.1). The [deflationist](#deflationism) (5.2) says the list, or the T-schema it delivers, is all there is to truth, and Field himself later defended a disquotational view (1994; [disquotationalism](#disquotationalism)). Davidson (1977) doubted that a truth theory needs Field's word-world relations at all: reference earns its place only through the whole theory's fit with what speakers hold true (4.1).
- **What each side concedes** (5.1). Field's side: the recursive clauses for connectives and quantifiers are a genuine compositional achievement. Tarski's defenders: the base clauses say nothing about why "$r$" denotes the Rhine rather than the Elbe.
- **Cousin.** Field's demand for a physical account of denotation is the linguistic side of [`philosophy-of-mind` 4.2](../philosophy-of-mind/lessons/04-02-naturalizing-content.md)'s project of naturalizing content.
- **Trap: Field does not say the definition gets the extension wrong, and does not reject the recursion.**
- **Trap: Field 1972 is not a deflationist.** He became one later (1994).
- **Trap: Convention T itself does not require physicalism.**

*Lessons:* [5.1](lessons/05-01-tarskis-theory-as-philosophy.md)

### Primitive denotation

**Field's name for the base semantic relations that Tarski's definition reduces truth to: what names denote and what predicates apply to (and, for function symbols, what they stand for).** Field (1972). Tarski states these relations as lists ("$r$" denotes the Rhine, "$e$" the Elbe), and the recursive [satisfaction](#satisfaction) clauses compute truth for complex sentences from them.

- **Field's diagnosis.** Tarski reduced truth to primitive denotation, not to non-semantic notions; the physicalist's debt is moved to denotation, which still needs an account ([Field's objection](#fields-objection)).
- **The account Field envisaged.** A causal theory of reference ([causal-historical theory](#causal-historical-theory), 3.2).
- **Trap: the lists are not wrong.** They fix the extension correctly; the complaint is that a list explains nothing.

*Lessons:* [5.1](lessons/05-01-tarskis-theory-as-philosophy.md)

### Curry paradox

**A sentence saying "if I am true, then $B$" lets a theory with an unrestricted T-schema and the ordinary rules for "if" prove any sentence $B$ whatever, without using negation.** Curry's paradox for truth (SEP, "Liar Paradox", §1.4). 5.1 P2 is the course's only Curry derivation; 5.3 cites it.

The sentence (5.1 P2). Let $T$ be a theory extending $\mathsf{PA}$, with a predicate $\mathrm{Tr}$, that proves $\mathrm{Tr}(\ulcorner\varphi\urcorner) \leftrightarrow \varphi$ for every sentence $\varphi$ of its own language, $\mathrm{Tr}$ included. The diagonal lemma, applied to $\psi(x) := \mathrm{Tr}(x) \to B$, gives a sentence $C$ with
$$T \vdash C \leftrightarrow \big(\mathrm{Tr}(\ulcorner C\urcorner) \to B\big).$$
With the T-biconditional for $C$ this becomes $C \leftrightarrow (C \to B)$, and conditional proof (using the assumption $C$ twice) and modus ponens then yield $B$. With $B$ as $0 = 1$, $T$ is inconsistent.

- **Why it matters.** The derivation uses no rule for negation and never uses explosion, so any treatment that blocks the [liar](#liar-paradox) only by dropping explosion must block this derivation elsewhere (5.1; SEP, "Dialetheism").
- **In 5.3.** With the material conditional, the Curry sentence takes the value $\tfrac12$ in both [Strong Kleene](#strong-kleene) and [LP](#logic-of-paradox). A conditional with both modus ponens and conditional proof revives the paradox, so each camp drops one of the two; Field (2008) adds a new conditional.
- **Trap: keeping modus ponens alone does not revive Curry.** The derivation needs conditional proof as well.
- **Trap: there is no negation in $C$.** Deriving $C \leftrightarrow \neg C$ is not this paradox.

*Lessons:* [5.1](lessons/05-01-tarskis-theory-as-philosophy.md), [5.3](lessons/05-03-the-liar-and-theories-of-truth.md)

### Deflationism

**The instances of "it is true that $p$ iff $p$" are all there is to say about truth; "true" exists to let one finite sentence endorse what you cannot list, not to name a property with a nature.** 5.2's four deflationary theories: [redundancy](#redundancy-theory) (Ramsey 1927), [disquotationalism](#disquotationalism) (Quine 1970; Field 1994), [minimalism](#minimalism-about-truth) (Horwich 1990) and [prosententialism](#prosententialism) (Grover, Camp and Belnap 1975). Each accepts the [equivalence schema](#equivalence-schema) and reads it differently. The rivals accept every instance too, and add a "because": the [correspondence](#correspondence-theory), [coherence](#coherence-theory-of-truth) and [pragmatist](#pragmatist-theory-of-truth) theories. The deflationist says there is no "because" to find: truth is like "is on my shopping list", a perfectly good property whose instances hold for unrelated reasons, so nobody writes its science.

- **The shared case** (5.2's reconstruction). P1: every instance of the equivalence schema holds, its sides equivalent in a strong sense (same meaning, or necessarily and a priori). P2: beyond those transparent uses, "true" does one job: it lets a finite sentence express an infinite conjunction or disjunction ("everything she said is true"). P3: every explanation in which truth figures runs through the instances or uses "true" to generalize. P4: a property whose instances hold for unrelated reasons has no nature for a theory to find. C: nothing needs saying about truth beyond the instances and the generalizing role.
- **Where 5.2 locates the weakness: P2** ([generalization problem](#generalization-problem)). The substantive rivals deny P3 and P4.
- **Blind ascription.** "Every statement in Schedule B is true"; "if everything the second witness said is true, the van was at the quarry by nine". Strike "true" and you must copy out the list, if you have it, and the clause no longer covers what is added tomorrow (5.2). All four theories give such sentences the same truth conditions; they differ on what the quantifier ranges over and on its logic (5.2 Example 1).
- **Truth and meaning.** Dummett ("Truth", 1959) argued that T-sentences cannot both say what sentences mean and explain "true": in Horwich's image, one equation, two unknowns. The deflationist fixes truth by the schema and takes meaning from use ([meaning as use](#meaning-as-use); Horwich, *Meaning*, 1998). Davidson ("The Structure and Content of Truth", 1990; "The Folly of Trying to Define Truth", 1996) rejects both definition and deflation: truth is a basic concept, understood through its place in interpretation.
- **Pressure on 5.2's map.** The generalization problem; the [conservativeness argument](#conservativeness-argument) (can a notion that proves new arithmetic be thin?); the liar (5.3): a deflationist who accepts every instance meets "this sentence is not true", which is why Horwich restricts the schema.
- **Elsewhere in the course.** The deflationist's reply to [Field's objection](#fields-objection), and Field's own later disquotationalism (5.1); the minimal "true" that one reading of the [sceptical solution](#sceptical-solution) relies on (4.3); under degrees, a deflationist who wants every T-biconditional fully true must let "true" take degrees (5.4).
- **Elsewhere in the library.** Quasi-realism's minimal truth in [`ethics` 6.2](../ethics/lessons/06-02-expressivism.md) is deflationism put to work, and needs only the shared core. Deflationists (Williams 1986, Fine 1984) read the "approximately true" of the no-miracles argument ([`philosophy-of-science` 5.1](../philosophy-of-science/lessons/05-01-realism-and-the-no-miracles-argument.md)) as a device of generalization.
- **Survey.** Of the 1,643 target faculty who answered the 2020 PhilPapers Survey's question on truth, 51.37% accepted or leaned towards correspondence and 24.53% towards deflationism.
- **Trap: deflationists do not deny that anything is true, or that truth matters.** They assert every instance and call many claims true; they deny only that truth has a nature, and call the concept indispensable for endorsing what you cannot list.
- **Trap: accepting the T-schema does not make you a deflationist.** Every theory in 5.2 accepts it, Tarski made it an adequacy condition and allowed a definition to say more, and correspondence theorists say why each instance holds. Deflationism is the claim that the instances exhaust truth.
- **Trap: the deflationary theories are not one theory.** They differ on what is true: sentences (Quine, Field), propositions (Horwich), nothing named (prosententialists).
- **Left to you.** Boss 5(d) asks whether a deflationist who accepts every instance of the T-schema is better or worse placed against the strengthened liar than the gap theorist; the card gives no verdict.

*Lessons:* [4.3](lessons/04-03-the-rule-following-paradox.md), [5.1](lessons/05-01-tarskis-theory-as-philosophy.md), [5.2](lessons/05-02-deflationism.md), [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md)

### Redundancy theory

**Ramsey's view: "it is true that $p$" means no more than $p$, so "true" adds no content; a proposition that is only described ("he is always right") needs a quantifier into sentence position.** F. P. Ramsey, "Facts and Propositions", *Proceedings of the Aristotelian Society, Supplementary Volume* 7 (1927), pp. 157–158. Quote the 1927 print: the SEP's page numbers and wording follow the 1990 reprint. 5.2, D1.

- **Given propositions.** In Ramsey's words (p. 157), "it is true that Cæsar was murdered" means no more than that Cæsar was murdered: "true" is idle.
- **Described propositions.** Ramsey grants that here we "cannot in ordinary language eliminate" the words "true" and "false", and analyses "he is always right" as "For all *p*, if he asserts *p*, *p* is true", where "*p* is true" is simply the same as *p* (p. 158). English lacks a quantifier into sentence position, so, he says, it adds "is true" only to supply a verb. Ramsey's "for all $p$" is not first-order (5.2 Example 1).
- **Whether that quantifier is legitimate** is the [generalization problem](#generalization-problem).
- **Frege.** In "Der Gedanke" (1918) he remarked that prefixing "it is true that" to a report of smelling violets seems to add nothing to the thought; whether that makes him a deflationist is disputed.
- **Trap: "redundancy theory" is a later label.** Ramsey never uses the word "redundancy".
- **Trap: not prosententialism.** Redundancy says "it is true that $p$" means $p$; it makes no claim that "true" works like a pronoun ([prosententialism](#prosententialism)).

*Lessons:* [5.2](lessons/05-02-deflationism.md)

### Disquotationalism

**"True" is a device for cancelling quotation marks: a sentence of one's own language, quoted and called true, is equivalent to the sentence itself, and the predicate's point is to generalize over sentences.** W. V. O. Quine, *Philosophy of Logic* (1970), the truth predicate as a "device of disquotation"; Hartry Field, "Deflationist Views of Meaning and Content" (1994). 5.2, D2:
$$\mathrm{Tr}(\ulcorner\varphi\urcorner) \leftrightarrow \varphi \quad \text{for each sentence } \varphi \text{ of one's own language},$$
where $\ulcorner\varphi\urcorner$ names $\varphi$ and $\mathrm{Tr}$ is the truth predicate. Quine restricts it to "eternal" sentences, Field to sentences as the speaker understands them. *In words:* calling a sentence true cancels its quotation marks.

- **Bearers are sentences** (contrast [minimalism](#minimalism-about-truth), whose bearers are propositions).
- **Blind ascription** (5.2 Example 1). For every sentence $x$, if she uttered $x$ then $\mathrm{Tr}(x)$; by D2, one conjunct per sentence of our language ("if she uttered 'the van was blue', then the van was blue").
- **Field's path.** Field (1972) demanded a physicalist account of denotation ([Field's objection](#fields-objection)); by 1994 he defended pure disquotational truth (5.1).
- **Quine and analyticity** (5.2). The strongest deflationist readings call the instances analytic, which Quine, the founding disquotationalist, could not say ([analyticity](#analyticity), 4.5).
- **Trap: not minimalism.** The two differ on bearers.

*Lessons:* [5.2](lessons/05-02-deflationism.md)

### Minimalism about truth

**Horwich's deflationism: the theory of truth is the infinite collection of instances of "the proposition that $p$ is true iff $p$", minus those that would generate the liar; truth is a "logical" property with no underlying nature.** Paul Horwich, *Truth* (1990; 2nd ed. 1998). 5.2, D3: every instance of
$$\langle p\rangle \text{ is true iff } p,$$
where $\langle p\rangle$ is "the proposition that $p$": infinitely many axioms, each necessary and a priori. *In words:* the list is the theory.

- **Bearers are propositions** (contrast [disquotationalism](#disquotationalism)).
- **The liar.** Instances that would generate the [liar](#liar-paradox) are excluded (5.2; 5.3).
- **Generalizations.** Horwich's rule: seeing that every instance of a generalization is provable licenses the generalization ([generalization problem](#generalization-problem)).
- **Meaning.** Horwich pairs minimalism about truth with a use theory of meaning (*Meaning*, 1998), so truth does not explain meaning ([meaning as use](#meaning-as-use)). 5.2 P3 sets a minimalist against a Davidsonian on whether truth can explain meaning.
- **Trap: "minimal truth" elsewhere is not Horwich's theory.** The minimal truth of [`ethics` 6.2](../ethics/lessons/06-02-expressivism.md) needs only the shared deflationary core; Horwich's minimalism is one species of [deflationism](#deflationism).

*Lessons:* [5.2](lessons/05-02-deflationism.md), [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md)

### Prosententialism

**"That is true" is a prosentence: like a pronoun, it inherits its content from an antecedent, so in logical form "true" is not a predicate at all.** Dorothy Grover, Joseph Camp and Nuel Belnap, "A Prosentential Theory of Truth" (1975). 5.2, D4. *In words:* "that's true" works like "he".

- **Blind ascription** (5.2 Example 1). For anything one can say, if she said it, then it is true, where the second "it is true" is a prosentence bound by the quantifier.
- **Bearers.** Nothing named: the theory needs no truth-bearer for "true" to be predicated of.
- **Trap: not the redundancy theory.** The anaphora claim, "true" inheriting content as a pronoun inherits reference, is the mark of prosententialism ([redundancy theory](#redundancy-theory)).

*Lessons:* [5.2](lessons/05-02-deflationism.md)

### Equivalence schema

**The schema "it is true that $p$ if and only if $p$", in its variants for sentences and for propositions; every theory of truth in 5.2 accepts all its instances, and the deflationist says they are the whole theory.** 5.2:
$$\text{it is true that } p \quad\text{if and only if}\quad p.$$

- **Variants by bearer.** For propositions, $\langle p\rangle$ is true iff $p$, with $\langle p\rangle$ "the proposition that $p$" (Horwich, D3); for sentences, $\mathrm{Tr}(\ulcorner\varphi\urcorner) \leftrightarrow \varphi$ (D2); the operator form above (Ramsey, D1).
- **Variants by strength.** The two sides may be claimed to mean the same, or to be necessarily and a priori equivalent (P1 of 5.2's shared case), or only materially equivalent.
- **Tarski's [T-schema](#t-schema)** is the sentential form with a translation on the right, used as an adequacy condition ([Convention T](#convention-t), 5.1).
- **Common ground** (5.2). The correspondence theorist adds that each instance holds because a belief matches a fact; the coherence theorist, because it fits a system; the pragmatist, because inquiry would settle on it; the deflationist says there is no "because" to find.
- **Trap: the schema decides nothing between the theories.** What divides them is whether its instances are basic or explained.

*Lessons:* [5.2](lessons/05-02-deflationism.md)

### Correspondence theory

**A truth-bearer is true when it corresponds to a fact, so something in the world explains why each instance of the equivalence schema holds.** Russell, *The Problems of Philosophy* (1912), ch. XII: "a belief is true when there is a corresponding fact, and is false when there is no corresponding fact." Austin ("Truth", 1950) and Aquinas's truth as the conformity of intellect and thing ([`thomistic-synthesis` 2.4](../thomistic-synthesis/lessons/02-04-the-transcendentals.md)) belong to the same family (5.2).

- **Against deflationism.** It accepts every instance of the schema and denies P3 and P4 of 5.2's shared case: truth has a nature, and it explains why each instance holds ([deflationism](#deflationism)).
- **Russell's requisites** (5.4 Flashback). Of the three requisites Russell lists, the third is that a belief's truth or falsehood depends on something outside the belief, its relations to other things, which leads him to truth as some form of correspondence between belief and fact.
- **Objection on 5.2's map.** What is a fact, and what is correspondence?
- **Tarski's theory** (5.1). Davidson (1969) and Hartry Field (1972) took it as the core of a correspondence theory without facts; Putnam (1985–86) judged it a complete failure as philosophy. Convention T itself is neutral ([Tarski's theory of truth](#tarskis-theory-of-truth)). How Aristotle's formula, which Tarski claimed to capture, should be read is Boss 5(a)'s question ([Aristotle's formula](#aristotles-formula)).
- **Survey.** Of the 1,643 target faculty who answered the 2020 PhilPapers Survey's question on truth, 51.37% accepted or leaned towards correspondence.
- **Trap: accepting every T-sentence does not make a theory a correspondence theory,** nor a deflationary one: both accept them all.

*Lessons:* [5.1](lessons/05-01-tarskis-theory-as-philosophy.md), [5.2](lessons/05-02-deflationism.md), [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md)

### Coherence theory of truth

**A proposition is true when it belongs to one comprehensive, coherent system of beliefs.** The British idealists: H. H. Joachim (*The Nature of Truth*, 1906) and later Brand Blanshard (5.2). Bradley is sometimes listed too, but whether his view is a coherence theory is contested.

- **Russell's objection** (*Problems*, 1912, ch. XII): "coherence as the definition of truth fails because there is no proof that there can be only one coherent system."
- **Against deflationism.** Like correspondence, it accepts every instance of the schema and denies P3 and P4: each instance holds because the belief fits the system.
- **Trap: not coherentism about justification.** Coherence as a theory of justification ([`epistemology` 2.3](../epistemology/lessons/02-03-coherentism.md)) is a different thesis and does not need the one-system claim.
- **Trap: not the pragmatist's end of inquiry.** Coherence is agreement among beliefs in a system, not the agreement inquiry would reach in the long run ([pragmatist theory of truth](#pragmatist-theory-of-truth)).

*Lessons:* [5.2](lessons/05-02-deflationism.md)

### Pragmatist theory of truth

**Truth is tied to inquiry: what inquiry would ultimately settle on (Peirce), or what proves useful in the long run (James).** C. S. Peirce, "How to Make Our Ideas Clear" (1878): "The opinion which is fated to be ultimately agreed to by all who investigate, is what we mean by the truth". William James, *Pragmatism* (1907), paraphrased only.

- **Against deflationism.** It accepts every instance of the schema and denies P3 and P4: each instance holds because inquiry would settle on it.
- **Objection on 5.2's map.** Useful, or true?
- **Trap: Peirce's end of inquiry is not coherence.** It is the agreement of investigation in the long run, not the coherence of present beliefs ([coherence theory of truth](#coherence-theory-of-truth)).

*Lessons:* [5.2](lessons/05-02-deflationism.md)

### Generalization problem

**The instances of the truth schema prove each instance of a generalization like "every sentence of the form 'if $p$ then $p$' is true", but not the generalization itself.** Tarski observed it in 1935: the set of instances is ω-incomplete (it proves every instance of an open formula but not its universal generalization). Anil Gupta (1993) pressed it as the strongest objection to deflationism; 5.2 locates the weakness of the shared case at P2 here.

- **Gupta's objection.** Anyone who has the concept of truth accepts such generalizations a priori, so a theory of the concept that cannot derive them is not a theory of the concept.
- **In symbols** (5.2 P2). With $\mathrm{cond}(\ulcorner\varphi\urcorner, \ulcorner\psi\urcorner) = \ulcorner\varphi \to \psi\urcorner$ naming the conditional, the instances prove $\mathrm{Tr}(\mathrm{cond}(\ulcorner\varphi\urcorner, \ulcorner\varphi\urcorner))$ for each sentence $\varphi$ but not $\forall y\,\mathrm{Tr}(\mathrm{cond}(y, y))$. The reason is that a derivation uses only finitely many instances, and soundness does the rest.
- **The replies add a principle of generality** (5.2): Ramsey's quantifier into sentence position; Field's rules for reasoning with schemas; Horwich's rule that seeing every instance to be provable licenses the generalization; or Tarski's compositional clauses taken as axioms.
- **What each side concedes** (5.2). The deflationist: the theory is more than its instances. The critic: the added principle posits no nature. Open: whether such a rule is itself thin.
- **Trap: no instance is shown false.** Every instance of the generalization is provable; what fails is the step to "all". The fix adds a principle, not a correction.

*Lessons:* [5.2](lessons/05-02-deflationism.md)

### Conservativeness argument

**A thin notion of truth should teach us nothing new about the subject matter it is added to; yet a truth theory strong enough for the generalizations deflationists want proves new arithmetic, the consistency of Peano arithmetic.** Stewart Shapiro, "Proof and Truth: Through Thick and Thin" (1998); Jeffrey Ketland, "Deflationism and Tarski's Paradise" (1999). A theory with a truth predicate $\mathrm{Tr}$ for arithmetic sentences is *conservative* over Peano arithmetic, $\mathsf{PA}$, if it proves no $\mathrm{Tr}$-free sentence that $\mathsf{PA}$ does not prove.

The facts (5.2 Example 2; settled):

| Theory added to $\mathsf{PA}$ | Conservative over $\mathsf{PA}$? |
|---|---|
| The schema alone, $\mathrm{Tr}(\ulcorner\varphi\urcorner) \leftrightarrow \varphi$ for each arithmetic sentence $\varphi$, even with induction extended to formulas containing $\mathrm{Tr}$ | Yes (compactness shows it) |
| Tarski's compositional clauses as axioms (a conjunction is true iff both conjuncts are, and so on), with induction only for $\mathrm{Tr}$-free formulas | Yes (Kotlarski, Krajewski and Lachlan, 1981; Enayat and Visser, and Leigh, 2015) |
| The clauses plus induction for formulas containing $\mathrm{Tr}$ | No: it proves $\operatorname{Con}(\mathsf{PA})$ |

How the third proves it: induction on the length of proofs gives $\forall x\,(\operatorname{Prov}_{\mathsf{PA}}(x) \to \mathrm{Tr}(x))$, every theorem of $\mathsf{PA}$ is true, where $\operatorname{Prov}_{\mathsf{PA}}(x)$ says that $x$ codes a theorem of $\mathsf{PA}$. Since $\mathrm{Tr}(\ulcorner 0 = 1\urcorner) \leftrightarrow 0 = 1$ and $0 \neq 1$, $\mathsf{PA}$ does not prove $0 = 1$: that is $\operatorname{Con}(\mathsf{PA})$, which $\mathsf{PA}$ itself cannot prove ([`mathematical-logic` 5.2](../mathematical-logic/lessons/05-02-second-theorem-undecidability.md)).

- **The argument.** A notion that teaches us new facts about the numbers is not thin, and the deflationist needs the third theory to prove the generalizations P2 of the shared case promises ([deflationism](#deflationism)).
- **Field's reply** ("Deflating the Conservativeness Argument", 1999). A use of "true" that comes only from its generalizing role is acceptable, and "every theorem of $\mathsf{PA}$ is true" is exactly such a generalization.
- **What the theorems settle and what they do not** (5.2). They locate the extra strength exactly, in the clauses plus induction for "true". They do not say whether that induction is a commitment about numbers or about truth, nor define "substantive".
- **Trap: never "a deflationary truth theory plus induction proves the consistency of arithmetic"** without naming the compositional clauses. The bare schema stays conservative even with induction for formulas containing $\mathrm{Tr}$.

*Lessons:* [5.2](lessons/05-02-deflationism.md)

### Liar paradox

**A sentence that says of itself that it is not true is true if and only if it is not true.** Diogenes Laertius (II.108) lists the Liar among the arguments of Eubulides of Miletus. Cicero, for the Academic sceptics against the Stoic logicians, who held that "whatever is enunciated ... is either true or false": "if you say that you are speaking falsely, and that that is true, you are speaking falsely and telling the truth at the same time" (*Lucullus* §95, tr. C. D. Yonge, 1853). Reid's 1874 Latin text has a question there, *mentiris an verum dicis?* Its shape is $Q \leftrightarrow \neg Q$, Russell's set in a linguistic coat ([`mathematical-logic` 3.1](../mathematical-logic/lessons/03-01-russells-paradox.md)).

The argument (5.3), with $\mathrm{Tr}$ a truth predicate and $\ulcorner\varphi\urcorner$ a name of the sentence $\varphi$:

- **P1 (self-reference).** There is a sentence $L$ that is $\neg\mathrm{Tr}(\ulcorner L\urcorner)$.
- **P2 ([T-schema](#t-schema)).** $\mathrm{Tr}(\ulcorner\varphi\urcorner) \leftrightarrow \varphi$ for every sentence $\varphi$, including those containing $\mathrm{Tr}$.
- **P3 (classical logic).** $\varphi \vee \neg\varphi$ for every $\varphi$, with the classical rules for $\neg$ and $\leftrightarrow$.
- **C1.** $\mathrm{Tr}(\ulcorner L\urcorner) \wedge \neg\mathrm{Tr}(\ulcorner L\urcorner)$: by P1 and P2, $\mathrm{Tr}(\ulcorner L\urcorner) \leftrightarrow \neg\mathrm{Tr}(\ulcorner L\urcorner)$, and by P3 either case yields both.
- **P4 (explosion).** From $\varphi$ and $\neg\varphi$ infer any $\psi$.
- **C2.** Every sentence follows.

- **P1 is safe.** A sign can manage self-reference, and in arithmetic the diagonal lemma does; Gödel's construction, Kripke noted, puts it beyond doubt.
- **Three responses, each denying one premise** (5.3). [Tarski's hierarchy](#tarskis-hierarchy) restricts P2 and gives up a single "true"; Kripke's gap theory denies P3 and gives up bivalence ([Strong Kleene](#strong-kleene), [Kripke's fixed point](#kripkes-fixed-point)); Priest's [dialetheism](#dialetheism) denies P4 ([logic of paradox](#logic-of-paradox)). Inconsistency theorists such as Scharp (5.1) replace "true" rather than keep it. The [strengthened liar](#strengthened-liar) then tests each.
- **Where 5.3 locates the weakness: P3,** for sentences whose value depends only on talk of truth. On the gap theory the liar gets no value: nothing outside it fixes one.
- **Relatives.** The [truth-teller](#truth-teller); Epimenides' line, paradoxical only on some facts ([paradoxical sentence](#paradoxical-sentence)); liar cycles spread over several sentences; [Curry's paradox](#curry-paradox), which needs no negation.
- **The deflationist and the liar** (5.2). A deflationist who accepts every instance of the schema meets "this sentence is not true"; Horwich excludes the instances that would generate it ([minimalism about truth](#minimalism-about-truth)).
- **Trap: "this sentence is false" and "this sentence is not true" come apart once gaps are allowed.** `mathematical-logic` 3.1 wrote the ordinary liar with "false"; in Strong Kleene $\neg\mathrm{Tr}$ expresses only "false", and the strengthened liar uses the "not true" that includes gaps.
- **Trap: self-reference is neither necessary nor sufficient for paradox** (see [paradoxical sentence](#paradoxical-sentence)).

*Lessons:* [5.2](lessons/05-02-deflationism.md), [5.3](lessons/05-03-the-liar-and-theories-of-truth.md)

### Truth-teller

**"This sentence is true": self-referential but not paradoxical; nothing outside it settles its value, and either value can be assigned consistently.** Its shape is $Q \leftrightarrow Q$, the twin of the liar that [`mathematical-logic` 3.1](../mathematical-logic/lessons/03-01-russells-paradox.md) P2 set: undetermined but not explosive.

- **In Kripke's theory** (5.3). Ungrounded but not paradoxical: $\tfrac12$ in the least fixed point, while putting it in the extension, or in the anti-extension, yields further fixed points ([groundedness](#groundedness), [paradoxical sentence](#paradoxical-sentence)).
- **No greatest fixed point.** Kripke showed, by Zorn's lemma, that every fixed point extends to a maximal one; with a truth-teller there is no greatest, unlike the greatest fixed points of the must-analyses in [`programming-languages` 7.3](../programming-languages/lessons/07-03-dataflow-analysis-as-a-fixed-point.md).
- **Analogues** (5.3). Every function is a fixed point of `while true do skip`, and only the least asserts nothing unforced ([`programming-languages` 2.3](../programming-languages/lessons/02-03-denotational-semantics-and-fixed-points.md) P3). The cross-coupled latch of [`digital-logic` 3.1](../digital-logic/lessons/03-01-latches-storage-of-one-bit.md), stable at 0 or at 1, is the truth-teller in hardware; a latch fed its own complement, which oscillates, is the liar.
- **Trap: self-reference alone is not the trouble.** The truth-teller refers to itself and is not paradoxical.

*Lessons:* [5.3](lessons/05-03-the-liar-and-theories-of-truth.md)

### Tarski's hierarchy

**Split "true" into a series of predicates, true-in-$L_0$, true-in-$L_1$, and so on, each defined one level up and applying only to sentences of lower levels, so that no sentence can call itself untrue.** Tarski (1933; 1935). 5.1 draws it: $L_0$ is the object language (arithmetic, no truth predicate); $L_1$ is $L_0$ plus names of its sentences plus true-in-$L_0$; $L_2$ adds true-in-$L_1$; and so on up. Each level defines truth for the level below, and the [undefinability theorem](#undefinability-of-truth) is the reason the levels cannot be merged into one language containing its own truth predicate.

- **Against the liar** (5.3). It restricts P2 of the liar argument, so the liar cannot be written: it blocks the liar by making it unwritable, not by giving it a value.
- **One rung up** (5.3 Flashback). $\mathrm{Tr}_0$, true of exactly the true sentences of the language of arithmetic, satisfies both clauses of [Convention T](#convention-t) for that language; a sentence containing $\mathrm{Tr}_0$ is outside its reach, and its truth is recorded by $\mathrm{Tr}_1$.
- **Kripke's objections** ("Outline of a Theory of Truth", 1975; 5.3). Ordinary truth talk carries no levels. Dean says that all of Nixon's utterances about Watergate are false; Nixon says that everything Dean says about Watergate is false. Each means to include the other's remark, which fixed levels forbid, though we can often tell which remark is true. And paradox can depend on the facts ([paradoxical sentence](#paradoxical-sentence)): truth talk is "risky", and no syntactic sieve removes the paradoxes in advance. (Kripke's separate "most of Nixon's assertions about Watergate are false" sentence is said by Jones, not Dean.)
- **Kripke's construction** has a hierarchy of stages but one truth predicate ([Kripke's fixed point](#kripkes-fixed-point)); he granted that its own verdicts belong to a classical metalanguage, so the "ghost of the Tarski hierarchy" remains ([revenge problem](#revenge-problem)).
- **Trap: Kripke's stages are not Tarski's levels.** The stages build one interpretation of one predicate; Tarski's levels are different predicates.

*Lessons:* [5.1](lessons/05-01-tarskis-theory-as-philosophy.md), [5.3](lessons/05-03-the-liar-and-theories-of-truth.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md)

### Strong Kleene

**Three-valued tables with values 1, $\tfrac12$ and 0: negation swaps 1 and 0 and leaves $\tfrac12$; "and" takes the minimum, "or" the maximum.** Kleene, *Introduction to Metamathematics* (1952), §64; Kripke (1975) took the tables from there for the liar (5.3). With $v$ a valuation into $\{0, \tfrac12, 1\}$:
$$v(\neg\varphi) = 1 - v(\varphi), \qquad v(\varphi \wedge \psi) = \min\big(v(\varphi), v(\psi)\big), \qquad v(\varphi \vee \psi) = \max\big(v(\varphi), v(\psi)\big),$$
and $\varphi \to \psi$ abbreviates $\neg\varphi \vee \psi$, so $v(\varphi \to \psi) = \max\big(1 - v(\varphi), v(\psi)\big)$.

- **Settling by parts.** A disjunction with one true disjunct is true whatever the other is; a conjunction with one false conjunct is false. That is how 5.3's $d$, "the liar is true or grass is green is true", comes out grounded true. [Weak Kleene](#weak-kleene) (1.2) instead leaves the whole valueless whenever a part is.
- **Validity with only 1 designated** (5.4). Modus ponens is valid; excluded middle fails at $\tfrac12$, and so does "if $A$ then $A$". With 1 and $\tfrac12$ both designated, the same tables give [LP](#logic-of-paradox).
- **Monotone** in the [information order](#information-order): filling in a gap never changes a value already settled, which is what lets the [Kripke jump](#kripke-jump) climb to a fixed point.
- **Three uses in the course.** How a presupposition gap spreads through "not", "and" and "if" is a further choice after saying that a gap exists ([truth-value gap](#truth-value-gap), 1.4). The liar (5.3). Borderline cases of vague predicates (5.4): on 5.4's line of men the borderline men get $\tfrac12$, modus ponens is valid, and the 100 conditionals touching the borderline band get $\tfrac12$, so the sorites is valid and unsound (Körner 1959; Tye 1994). The costs there: "if person 100 is tall, person 100 is tall" gets $\tfrac12$, and one sharp line has become two.
- **Against supervaluation** (5.5). Strong Kleene gives a borderline atom $\tfrac12$ and with it both "$p$ or not $p$" and "$p$ and not $p$": it drops excluded middle and bivalence alike, and does not respect the [penumbral connection](#penumbral-connection) that nothing is both $F$ and not $F$.
- **SQL.** These are the AND/OR/NOT tables [`databases` 1.3](../databases/lessons/01-03-sql-select-from-where.md) uses for NULL. SQL's "unknown" shares the tables, and its name suggests ignorance of a determinate value; the liar has no hidden value, and a borderline man's $\tfrac12$ is not ignorance either.
- **Trap: the gap is not a third truth value but the absence of one** (Kripke insisted that "undefined" names no extra value); writing it $\tfrac12$ is bookkeeping. 5.4 notes that a three-valued $\tfrac12$ for borderline cases may be read as a gap or as a third value "indeterminate"; either way it is not a degree ([degree theory](#degree-theory)).
- **Trap: "Kleene" also names the fixed-point theorem** of [`programming-languages` 2.3](../programming-languages/lessons/02-03-denotational-semantics-and-fixed-points.md); these tables are something else.

*Lessons:* [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [5.3](lessons/05-03-the-liar-and-theories-of-truth.md), [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md)

### Information order

**Order the values by how much they settle: $\tfrac12$ (no value yet) lies below both 0 and 1, and 0 and 1 are incomparable.** 5.3: $\tfrac12 \sqsubseteq 0$ and $\tfrac12 \sqsubseteq 1$, where $\sqsubseteq$ reads "settles no more than". On interpretations of $\mathrm{Tr}$, one pair $(\mathcal E, \mathcal A)$ lies below another when its extension and anti-extension are subsets of the other's: sentences only ever join a set.

- **Monotonicity.** Every [Strong Kleene](#strong-kleene) connective is monotone in this order: filling in a gap never changes a value already settled. So the [Kripke jump](#kripke-jump) is monotone, and iterating it from total ignorance climbs to the least fixed point.
- **Same order as** [`programming-languages` 2.3](../programming-languages/lessons/02-03-denotational-semantics-and-fixed-points.md)'s order on partial functions, with total ignorance at the bottom ([Kripke's fixed point](#kripkes-fixed-point)).
- **Not monotone: exclusion negation** ("not true" as "false or gappy"), which sends $\tfrac12$ to 1 but 1 to 0; that is why Kripke's construction cannot run with it ([strengthened liar](#strengthened-liar)).

*Lessons:* [5.3](lessons/05-03-the-liar-and-theories-of-truth.md)

### Kripke jump

**Re-evaluate every sentence using your current opinion of "true", and adopt the result: the sentences now valued 1 become the extension, those valued 0 the anti-extension.** Kripke (1975), who writes the operation $\phi$; "jump" is the commentators' name. 5.3:

- **D1 (interpretation).** An interpretation of $\mathrm{Tr}$ is a pair $(\mathcal E, \mathcal A)$ of disjoint sets of sentences, its extension and anti-extension. $\mathrm{Tr}(\ulcorner\varphi\urcorner)$ gets 1 if $\varphi \in \mathcal E$, 0 if $\varphi \in \mathcal A$, $\tfrac12$ otherwise; the connectives go by [Strong Kleene](#strong-kleene). *In words:* a current opinion: true, false, or undecided.
- **D2 (jump).**
$$J(\mathcal E, \mathcal A) = \big(\{\varphi : v(\varphi) = 1\},\ \{\varphi : v(\varphi) = 0\}\big),$$
where $v$ is the valuation the interpretation $(\mathcal E, \mathcal A)$ determines.
- **Stages.** Start from $(\varnothing, \varnothing)$, apply $J$, and take unions at limit stages; the stages grow until they reach the least fixed point ([Kripke's fixed point](#kripkes-fixed-point)).
- **Worked stages** (5.3 Example 1). Sentences: $g$, "grass is green"; $g_1 := \mathrm{Tr}(\ulcorner g\urcorner)$; $g_2 := \neg\mathrm{Tr}(\ulcorner g_1\urcorner)$; the liar $L := \neg\mathrm{Tr}(\ulcorner L\urcorner)$; $d := \mathrm{Tr}(\ulcorner L\urcorner) \vee \mathrm{Tr}(\ulcorner g\urcorner)$; $e := \mathrm{Tr}(\ulcorner L\urcorner) \wedge \mathrm{Tr}(\ulcorner g\urcorner)$. Stage 0 is $(\varnothing, \varnothing)$, with $g$ true by the grass; stage 1, $(\{g\}, \varnothing)$; stage 2, $(\{g, g_1, d\}, \varnothing)$; stage 3, $(\{g, g_1, d\}, \{g_2\})$, which $J$ leaves unchanged: the least fixed point. $L$ and $e$ never get a value.
- **Monotone** because the Strong Kleene connectives are ([information order](#information-order)).
- **Trap: entry stage is not Kripke's "level".** Kripke's level of a grounded sentence is the least stage whose interpretation gives it a value, one less than the stage at which the jump adds it to a set; the lessons speak only of the stage at which a sentence enters.

*Lessons:* [5.3](lessons/05-03-the-liar-and-theories-of-truth.md)

### Kripke's fixed point

**An interpretation of "true" that the jump leaves unchanged. Iterating the jump from total ignorance reaches the least one, and at every fixed point "true" applies to its own language and is transparent, once some sentences may lack a value.** Saul Kripke, "Outline of a Theory of Truth" (*Journal of Philosophy*, 1975), and independently Martin and Woodruff (1975). 5.3, T2 (settled):

- **Existence.** $J$ is monotone. Iterated from $(\varnothing, \varnothing)$, with unions at limit stages, the stages grow until they reach the least fixed point, in [`programming-languages` 2.3](../programming-languages/lessons/02-03-denotational-semantics-and-fixed-points.md)'s sense (iterate from total ignorance in the information order). It is reached by transfinite iteration in general ([`mathematical-logic` 4.2](../mathematical-logic/lessons/04-02-ordinals-transfinite-induction.md)) and in finitely many stages for the lessons' finite languages. Its existence comes from monotonicity, not from 2.3's continuity hypothesis.
- **Transparency.** At every fixed point, $\varphi$ and $\mathrm{Tr}(\ulcorner\varphi\urcorner)$ have the same value. *In words:* "true" can apply to its own language once some sentences may lack a value.
- **The liar** is $\tfrac12$ at every fixed point. Two-valued, `mathematical-logic` 3.1 was right that it has "no fixed point to land on"; Kripke's jump gives it exactly one, the gap. The biconditional $\mathrm{Tr}(\ulcorner L\urcorner) \leftrightarrow L$ itself gets $\tfrac12$.
- **More fixed points.** Besides the least, others can exist (a [truth-teller](#truth-teller) can be put in the extension or the anti-extension); every fixed point extends to a maximal one (Kripke, by Zorn's lemma). The definitions of [grounded](#groundedness) and [paradoxical](#paradoxical-sentence) sentences quantify over them.
- **The fixed points in the lessons are consistent:** extension and anti-extension disjoint (D1).
- **For the deflationist** (5.3). 5.2's deflationist wants the transparency the fixed points deliver; they deliver it only without classical logic.
- **Other schemes.** Kripke's construction can also run on a supervaluation scheme ([supervaluationism](#supervaluationism), 5.5).
- **Trap: two senses of "fixed point".** The diagonal lemma's fixed point is a sentence ([undefinability of truth](#undefinability-of-truth)); Kripke's is an interpretation of $\mathrm{Tr}$ that the jump leaves unchanged.
- **Left to you.** Boss 5(b) runs the construction on its own small language and asks for its stages and every consistent fixed point; the card does not.

*Lessons:* [5.3](lessons/05-03-the-liar-and-theories-of-truth.md)

### Groundedness

**A sentence is grounded if it has a value in the least fixed point: its truth value traces back, through talk of truth, to facts that do not involve truth.** Kripke's definition (1975; 5.3, D3). The spreadsheet picture (5.3): cells that trace back to typed-in data get computed; a cell defined as NOT itself, or as itself, sits in a loop with no data underneath and never gets a value. You call "grass is green" true by looking at grass, then "'grass is green' is true" true, and so on.

- **Examples** (5.3 Example 1; [Kripke jump](#kripke-jump)). "Grass is green" enters the extension at stage 1, "'grass is green' is true" at stage 2. The disjunction $d$ mentions the liar yet is grounded true, since a true disjunct settles a Strong Kleene disjunction (Kripke's own footnote makes the point).
- **Ungrounded is not paradoxical.** The [truth-teller](#truth-teller) is ungrounded (no value in the least fixed point) but not [paradoxical](#paradoxical-sentence) (it has a value in other fixed points).
- **A metalanguage notion.** Kripke granted that "grounded" and "paradoxical" belong to a classical metalanguage ([revenge problem](#revenge-problem)).
- **Trap: do not call the stage at which a sentence enters its Kripkean "level"** (see [Kripke jump](#kripke-jump)).

*Lessons:* [5.3](lessons/05-03-the-liar-and-theories-of-truth.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md)

### Paradoxical sentence

**In Kripke's sense, a sentence is paradoxical if it has a value in no fixed point.** Kripke (1975; 5.3, D3). *In words:* grounded sentences take their value from the facts; paradoxical ones can take none.

- **The liar** is paradoxical: $\tfrac12$ at every fixed point ([Kripke's fixed point](#kripkes-fixed-point)).
- **Paradox without self-reference** (5.3 Example 1). $e := \mathrm{Tr}(\ulcorner L\urcorner) \wedge \mathrm{Tr}(\ulcorner g\urcorner)$, with $L$ the liar and $g$ "grass is green", gets $\min(\tfrac12, 1) = \tfrac12$ at the only fixed point, so it is paradoxical with no self-reference of its own. On this construction, paradox lies in what a sentence's value depends on, not in its form.
- **Self-reference without paradox.** The [truth-teller](#truth-teller).
- **Paradox can depend on the facts.** Kripke's first paragraph turns to Titus 1:12: "One of themselves, even a prophet of their own, said, The Cretians are alway liars" (KJV). Read as "no Cretan utterance is true", said by a Cretan, it cannot be true; so it is simply false if some other Cretan utterance is true, and only if every other is false is it a liar. Kripke concluded that truth talk is "risky": no syntactic sieve removes the paradoxes in advance ([Tarski's hierarchy](#tarskis-hierarchy)).
- **Trap: "paradoxical" is not "ungrounded".** Every paradoxical sentence is ungrounded, but the truth-teller is ungrounded and not paradoxical ([groundedness](#groundedness)).
- **Trap: containing "not true", or mentioning the liar, does not make a sentence paradoxical.** What matters is whether the value can ever be settled.

*Lessons:* [5.3](lessons/05-03-the-liar-and-theories-of-truth.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md)

### Dialetheism

**Some sentences are both true and false, the liar among them: accept that contradiction and deny that a contradiction implies everything.** Graham Priest ("The Logic of Paradox", *Journal of Philosophical Logic*, 1979). For Priest the liar is a dialetheia, a true contradiction: C1 of the [liar](#liar-paradox) argument is accepted, and P4, explosion, denied, using the paraconsistent [logic of paradox](#logic-of-paradox).

- **The wider case** (5.3). Priest's inclosure schema (*Beyond the Limits of Thought*, 1995; 2nd ed. 2002): the set-theoretic and semantic paradoxes share one structure and deserve one solution (SEP, "Dialetheism"). Russell's set is then a member of itself and not ([`mathematical-logic` 3.1](../mathematical-logic/lessons/03-01-russells-paradox.md)).
- **The strengthened liar.** Priest can say inside LP that the liar is true and false, so the [strengthened liar](#strengthened-liar) is one more dialetheia; his critics ask whether he can say that a sentence is *only* false (SEP, "Dialetheism"; [revenge problem](#revenge-problem)).
- **The exclusion objection** (5.3 P3): if $\varphi$ and $\neg\varphi$ can both be accepted, asserting $\neg\varphi$ seems to rule nothing out.
- **Curry.** With the material conditional the Curry sentence takes $\tfrac12$; a conditional with both modus ponens and conditional proof would revive [Curry's paradox](#curry-paradox).
- **Trap: dialetheism is not trivialism.** Not everything is true, and LP keeps non-contradiction.
- **Trap: "both true and false" is not "neither".** The gap theorist's $\tfrac12$ and the dialetheist's $\tfrac12$ share the tables and differ on what the value is.

*Lessons:* [5.3](lessons/05-03-the-liar-and-theories-of-truth.md)

### Logic of paradox

**LP: the Strong Kleene tables with both 1 and $\tfrac12$ designated, $\tfrac12$ read as "both true and false".** Priest, "The Logic of Paradox" (1979). An argument is valid iff, whenever every premise gets 1 or $\tfrac12$, so does the conclusion.

- **Kept.** Excluded middle and non-contradiction, $\neg(\varphi \wedge \neg\varphi)$ (5.3).
- **Lost.** Explosion: $p$ and $\neg p$ are both designated at $p = \tfrac12$, while $q = 0$ is not (5.3). LP drops ex falso ([`mathematical-logic` 1.4](../mathematical-logic/lessons/01-04-proof-system-completeness.md)).
- **Same equation, different reading.** The liar's equation $v = 1 - v$ has one solution, $\tfrac12$, in both Strong Kleene and LP; the dispute is what $\tfrac12$ is: an undesignated gap (Kripke) or a designated glut (Priest).
- **Trap: LP rejects explosion, not non-contradiction.** Every instance of $\neg(\varphi \wedge \neg\varphi)$ is valid in LP.
- **Trap: LP is not the gap theory with a new name.** Same tables, different designated values, different valid arguments.

*Lessons:* [5.3](lessons/05-03-the-liar-and-theories-of-truth.md)

### Strengthened liar

**"This sentence is not true", with "not true" covering both false and gappy: aimed at gap theories, since if the liar is gappy it is not true, which is what it says.** 5.3, Example 2.

- **Kripke's object language cannot say it.** There, "$L$ is not true" is $\neg\mathrm{Tr}(\ulcorner L\urcorner)$, which is $L$ itself, valued $\tfrac12$: the language's "not true" means "false", and the theorist's verdict is not among its truths.
- **The verdict's "not true" is exclusion negation:** "false or gappy", sending 1 to 0, 0 to 1 and $\tfrac12$ to 1. Add it to the object language and $L^{*}$, "$L^{*}$ is not true" in the exclusion sense, has no value at all; nor can the construction run, since exclusion negation is not monotone in the [information order](#information-order).
- **Each theory's own liar.** The hierarchy, Kripke's gaps (and Field's development of them) and Priest's dialetheism each meet a liar built from their own vocabulary ([revenge problem](#revenge-problem)).
- **Trap: not the same as "this sentence is false".** In [Strong Kleene](#strong-kleene), $\neg\mathrm{Tr}$ expresses "false"; the strengthened liar uses the "not true" that includes gaps.
- **Left to you.** Boss 5(d) asks whether this reasoning refutes the gap theory, and how a deflationist who accepts every instance of the T-schema fares; the card gives no verdict.

*Lessons:* [5.3](lessons/05-03-the-liar-and-theories-of-truth.md)

### Revenge problem

**A treatment of the liar is met by a new liar built from the very notion the treatment introduces.** SEP, "Liar Paradox". A pattern, not a single sentence (5.3).

- **Gap theory.** The theorist's "not true" is exclusion negation, which the object language lacks ([strengthened liar](#strengthened-liar)). Kripke conceded that the verdict belongs to a classical metalanguage, so the "ghost of the Tarski hierarchy" remains (1975, p. 714); "grounded" and "paradoxical" belong there too.
- **Field** (*Saving Truth from Paradox*, 2008) adds a new conditional and "determinately" operators, and the revenge problem moves to "not determinately true".
- **Dialetheism.** The strengthened liar is one more dialetheia; the critics' question becomes whether Priest can say that a sentence is only false ([dialetheism](#dialetheism)).
- **What each side concedes** (5.3, Where the argument is weakest). The gap theorist: a classical vocabulary survives outside the theory. The classical theorist: a transparent, self-applicable "true" is consistent, which Tarski's theorem seemed to forbid.
- **Open** (5.3). Each theory meets a liar built from its own notion; whether that refutes it stays open.
- **Left to you.** Boss 5(d).

*Lessons:* [5.3](lessons/05-03-the-liar-and-theories-of-truth.md)

### Sorites paradox

**From a clear case and "one tiny step never makes the difference", repeated steps reach a clear non-case.** Diogenes Laertius credits Eubulides of Miletus (fourth century BC) with arguments including "the Sorites; the Horned one; the Bald one" (*Lives* II.108, tr. C. D. Yonge, 1853). Every word for a stretch of a continuum ("heap", "bald", "red", "adult") runs it; after the liar, it is the second paradox that makes a theory of truth say whether every sentence is true or false (5.4).

5.4's series: a line of 201 men, person $n$ ($n = 0, \dots, 200$) being 190.0 cm minus $n$ millimetres, so person 200 is 170.0 cm; $T_n$ says "person $n$ is tall".

- **Conditional sorites.** P1: $T_0$. P2: $T_n \to T_{n+1}$ for each $n = 0, \dots, 199$ (two hundred premises). C: $T_{200}$, by 200 applications of modus ponens. The heap runs the same way, negated.
- **Quantified sorites.** One [tolerance principle](#tolerance-principle), $\forall n\,(T_n \to T_{n+1})$, in place of the two hundred, and $\forall n\,T_n$ by induction.
- **Line-drawing form** (5.4 Example 2). From $T_0$ and $\neg T_{200}$, classical logic gives $\exists n\,(T_n \wedge \neg T_{n+1})$: some man is tall and the next is not.
- **The ancient debate** (Cicero, *Lucullus* §§93–95, tr. Yonge). Chrysippus, questioned step by step, rests a little before he comes to the "many" (he falls silent, *hēsychazein*); Carneades answers that the questioner adds one and asks again, and Cicero presses the admission that "you cannot in your answers fix the last number" classed as few. Read with the Stoic principle that every statement is true or false (§95, "the foundation of dialectics"), the silence is ignorance of a line that exists, and the SEP lists Chrysippus among the [epistemicists](#epistemicism); read as a policy of not assenting where one cannot be sure, it commits him to no line.
- **Something must give:** the first premise, a step, the logic that chains the steps, or the conclusion. On the course's map: Unger ("There Are No Ordinary Things", 1979) keeps classical logic and accepts the conclusion of the heap sorites, so "heap" applies to nothing; the three-valued theory (Körner 1959; Tye 1994, [Strong Kleene](#strong-kleene)) and the [degree theory](#degree-theory) with degree-1 validity count the conditional premises less than fully true, not false; Machina (1976) denies the validity of chained modus ponens; Russell ("Vagueness", 1923) denies that classical logic applies to vague symbols; Edgington's [verities](#verities) keep classical logic and let small unverities add up; the epistemicist (5.5) makes exactly one premise false; the supervaluationist (5.5) makes the universal premise superfalse with no conditional premise superfalse ([supervaluationism](#supervaluationism)).
- **Russell's moral** ("Vagueness", 1923): "The law of excluded middle is true when precise symbols are employed, but it is not true when symbols are vague", and, he adds, all symbols are vague.
- **Cousins in the library** (5.4). The Ship of Theseus plank by plank ([`metaphysics` 5.3](../metaphysics/lessons/05-03-coincidence-and-the-ship-of-theseus.md)); Maxwell's continuum from windowpane to microscope ([`philosophy-of-science` 5.4](../philosophy-of-science/lessons/05-04-constructive-empiricism-and-entity-realism.md)), where van Fraassen's reply is a condition on using a vague word, not a theory of vagueness; Wilkinson's continuum argument for fanaticism ([`decision-theory` 6.2](../decision-theory/lessons/06-02-fanaticism-and-tiny-probabilities.md)); threshold deontology's 1,000 against 1,001 lives ([`ethics` 2.4](../ethics/lessons/02-04-constraints-and-options.md)); gradual evolution against sharp kinds ([`apologetics-foundations` 4.2](../apologetics-foundations/lessons/04-02-evolution-design-and-the-human-person.md)). Cicero's report belongs to the Academic sceptics' campaign against the Stoics ([`ancient-medieval-philosophy` 4.3](../ancient-medieval-philosophy/lessons/04-03-the-skeptics.md)).
- **Trap: not a slippery slope** ([`philosophical-method` 2.3](../philosophical-method/lessons/02-03-informal-fallacies-and-when-they-arent.md)). A slippery slope asserts a causal chain whole; the sorites is a classically valid argument whose every step seems true.
- **Trap: vagueness is not ambiguity or context-sensitivity.** "Tall" is gradable, its standard shifting with the conversation (the model [`epistemology` 3.4](../epistemology/lessons/03-04-contextualism-and-its-rivals.md) borrows for "knows"), yet "tall for an adult man" is no sharper than "tall": fixing the sense and the standard leaves the borderline cases.

*Lessons:* [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md)

### Tolerance principle

**A small enough change never takes a vague predicate from applying to not applying: one millimetre never turns a tall man into one who is not.** The name follows Crispin Wright (1975). In symbols it is the quantified sorites' premise $\forall n\,(T_n \to T_{n+1})$, with $T_n$ "person $n$ is tall"; the conditional sorites splits it into one premise per step (5.4). "Tall" seems tolerant: surely nobody's tallness turns on a millimetre.

- **Denying it classically asserts a sharp line.** The negation is $\exists n\,(T_n \wedge \neg T_{n+1})$, a last tall man. So "a millimetre makes a small difference" is not a solution: if the difference is in whether he is tall, that is the sharp line, and whoever says so owes us where it lies or why no one can know (5.5, [epistemicism](#epistemicism)); if it is a difference in height, it denies nothing, unless truth itself can shrink a little ([degree theory](#degree-theory)).
- **Its status across the theories.** Strong Kleene: the conditional premises touching the borderline band get $\tfrac12$ (5.4). Łukasiewicz degrees: the principle gets the minimum of its instances, 0.99 on 5.4's line. Supervaluation: superfalse, though no conditional premise is superfalse, given a borderline case (5.5). Epistemicism: false, with exactly one conditional premise false (5.5).
- **Trap: denying tolerance is not free.** Classically, it is asserting a last tall man.

*Lessons:* [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md)

### Borderline case

**A case a vague predicate neither clearly applies to nor clearly fails to apply to.** Peirce's definition ("Vague", Baldwin's *Dictionary of Philosophy and Psychology*, vol. II, 1902, p. 748): a proposition is vague when there are possible states of things about which it is "intrinsically uncertain" whether the speaker, had he contemplated them, would have counted them excluded or allowed. Intrinsically: from the speaker's indeterminate habits of language, not from the interpreter's ignorance (5.4). The same term [`metaphysics` 2.3](../metaphysics/lessons/02-03-hylomorphism-and-composition.md) uses for a chair assembled fibre by fibre.

- **How each theory construes it.** Three-valued: value $\tfrac12$, neither true nor false ([Strong Kleene](#strong-kleene)); on 5.4's line, persons 51 to 149. Degree theory: a degree strictly between 0 and 1 ([degree theory](#degree-theory)). Supervaluation: neither supertrue nor superfalse, so neither "definitely $F$" nor "definitely not $F$" ([definitely operator](#definitely-operator)); on 5.5's tile board, tiles 13 to 19. Epistemicism: true or false, but too close to the unknown line to know ([epistemicism](#epistemicism)).
- **Russell, not Peirce, on all representation.** That all symbols are vague is Russell's 1923 claim ([sorites paradox](#sorites-paradox)); Peirce defines vagueness without claiming it of every representation.
- **Trap: vagueness is not ambiguity or context-sensitivity.** Fixing sense and standard leaves the borderline cases ([sorites paradox](#sorites-paradox)).
- **Trap: a borderline case of the degree theory is not a probability.** Person 100's degree $\tfrac12$ survives knowing his height to the micron.

*Lessons:* [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md)

### Degree theory

**Truth comes in degrees between 0 and 1, as tallness does: "he is tall" is fully true at 190 cm, fully false at 170 cm, half true between; a sorites step that is nearly but not fully true can leak a little truth each time it is used.** Truth-functional versions follow Goguen (1969) and Zadeh's [fuzzy logic](#fuzzy-logic), with the [Łukasiewicz conditional](#lukasiewicz-conditional). Each photocopy of a photocopy is almost as good as the last, and the two-hundredth is blank (5.4).

The connectives (5.4), with $v$ a degree in $[0,1]$: $v(\neg A) = 1 - v(A)$; $\wedge$ is minimum, $\vee$ maximum, $\forall$ the minimum over instances; and
$$v(A \to B) = \min\big(1,\ 1 - v(A) + v(B)\big).$$

- **On 5.4's line of men** ([sorites paradox](#sorites-paradox)): $v(T_n)$ is 1 for $n \le 50$ (185.0 cm and over), $(150 - n)/100$ for $50 \le n \le 150$, and 0 beyond. The 100 conditionals from person 50 to person 150 have degree 0.99, the rest 1, and the tolerance principle, their minimum, 0.99.
- **The diagnosis.** Call an argument valid if it preserves degree 1. Modus ponens is valid (the degree bound under [Łukasiewicz conditional](#lukasiewicz-conditional)), so the sorites is valid and unsound: its tolerance premises are fully or nearly true (those across the borderline fall just short, 0.99 on 5.4's line), none is false, and that is why they seem true. Run from person 0, the guarantee stays 1 for 50 steps, then falls by 0.01 a step: $\tfrac12$ after step 100, 0 after step 150; the bound is attained at every step (5.4 Example 1).
- **Machina** ("Truth, Belief and Vagueness", 1976) calls an argument valid when its conclusion can never be less true than its least true premise; then modus ponens fails ($v(A) = v(A \to B) = 0.9$, $v(B) = 0.8$), and the sorites breaks at the inference.
- **Edgington** keeps classical logic and reads degrees as [verities](#verities), which are not truth-functional.
- **Costs** (5.4 Example 2). Penumbral connections fail: at person 100, of degree $\tfrac12$, "tall and not tall" and "tall or not tall" both get $\tfrac12$, where many hold the first fully false and the second fully true ([penumbral connection](#penumbral-connection)). Classically equivalent claims come apart: $\neg\forall n\,(T_n \to T_{n+1})$ gets 0.01, while $\exists n\,(T_n \wedge \neg T_{n+1})$ gets $\tfrac12$ (at $n = 99$ and 100), because a negated Łukasiewicz conditional has degree $\max(0, v(A) - v(B))$, not $\min(v(A), 1 - v(B))$: "and" has two degree-theoretic readings, and the line-drawing sorites turns on which is English's. And [artificial precision](#artificial-precision), with [higher-order vagueness](#higher-order-vagueness).
- **Trap: a degree of truth is not a probability.** Person 100's $\tfrac12$ survives knowing his height to the micron. A Gaussian mixture's responsibility ([`machine-learning` 3.5](../machine-learning/lessons/03-05-gaussian-mixture-models.md)) is a probability about which component produced a point, a fact one can be unsure of; calibration ([`machine-learning` 4.2](../machine-learning/lessons/04-02-classification-metrics.md)) is a fact about probabilities, never about degrees of truth.
- **Trap: not every conditional premise is less than fully true.** Those between two clear cases have degree 1.
- **Trap: the three-valued $\tfrac12$ is not the degree $\tfrac12$** (see [Łukasiewicz conditional](#lukasiewicz-conditional)).

*Lessons:* [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md)

### Fuzzy logic

**Many-valued logic whose truth values are the real numbers from 0 to 1, read as degrees of truth.** Zadeh's fuzzy sets assign degrees of membership; Goguen ("The Logic of Inexact Concepts", 1969) applied infinite-valued logic to vague concepts (5.4).

- **5.4's connectives.** $v(\neg A) = 1 - v(A)$, $\wedge$ minimum, $\vee$ maximum, $\forall$ minimum over instances, and the [Łukasiewicz conditional](#lukasiewicz-conditional). On the values 0 and 1 alone these are the classical tables of [`mathematical-logic` 1.2](../mathematical-logic/lessons/01-02-semantics-truth-tables.md).
- **Two readings of "and".** The minimum; and the reading on which "$A$ and not $B$" is the negated conditional $\neg(A \to B)$, with degree $\max(0, v(A) - v(B))$. Classically they agree; with degrees they come apart, which is why "not every step preserves tallness" and "some man is tall and the next is not" get different degrees ([degree theory](#degree-theory)).
- **Used for** the truth-functional [degree theory](#degree-theory) of vagueness.
- **Trap: soft membership in machine learning is not fuzzy truth.** A mixture model's responsibilities are probabilities ([`machine-learning` 3.5](../machine-learning/lessons/03-05-gaussian-mixture-models.md)).

*Lessons:* [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md)

### Lukasiewicz conditional

**Łukasiewicz's many-valued conditional: fully true when its consequent is at least as true as its antecedent, and otherwise short of 1 by exactly the drop.** 5.4:
$$v(A \to B) = \min\big(1,\ 1 - v(A) + v(B)\big),$$
with $v$ a degree in $[0,1]$. So "if $A$ then $A$" always gets 1, where Strong Kleene's conditional $\max(1 - v(A), v(B))$ gives $\tfrac12$ when $v(A) = \tfrac12$.

- **T1, the modus ponens degree bound** (5.4; settled): $v(B) \ge v(A) + v(A \to B) - 1$. *Proof:* if $v(A \to B) = 1$, then $1 - v(A) + v(B) \ge 1$, so $v(B) \ge v(A)$; otherwise $v(A \to B) = 1 - v(A) + v(B)$, which rearranges to equality. *In words:* the conclusion loses at most what the conditional falls short of full truth.
- **Corollary.** If $v(A_0) = 1$ and each $v(A_{i-1} \to A_i) \ge 1 - \delta$, then $v(A_k) \ge \max(0,\ 1 - k\delta)$, by induction on $k$ with T1. *In words:* shortfalls add up; at $\delta = 0.01$, a hundred steps can spend all the truth there was.
- **Edgington's sum rule.** T1 is $1 - v(B) \le (1 - v(A)) + (1 - v(A \to B))$: the conclusion's unverity is at most the sum of the premises' ([verities](#verities)).
- **The negated conditional** has degree $\max(0, v(A) - v(B))$, not $\min(v(A), 1 - v(B))$.
- **Against the three-valued $\tfrac12$** (5.4). The three-valued $\tfrac12$ marks neither true nor false; the degree $\tfrac12$ is a point on a scale where "tall" is exactly as true as "not tall". They split on the conditional between two neighbouring borderline men: $\tfrac12$ in Strong Kleene, 0.99 or 1 in Łukasiewicz.

*Lessons:* [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md)

### Verities

**Edgington's degrees: closeness to clear truth, which obey the rules of probability and are not truth-functional, so classical logic is kept.** Dorothy Edgington, "Vagueness by Degrees" (1996, in Keefe and Smith, eds., *Vagueness: A Reader*; sometimes cited as 1997).

- **Validity.** An argument is valid when its conclusion's unverity ($1 -$ verity) can never exceed the sum of its premises' unverities; for modus ponens this is T1 of the [Łukasiewicz conditional](#lukasiewicz-conditional). The conditional sorites is valid, and small unverities, one per premise, can add up to a clearly false conclusion.
- **Penumbral verdicts** (5.4). The contradiction "tall and not tall" gets verity 0 and excluded middle 1; and since classical logic is kept, "some man is tall and the next is not" follows from $T_0$ and $\neg T_{200}$ and gets verity 1. One such assignment puts equal weight on each cutoff from person 50 to person 149, and gives the same atomic degrees as 5.4's degree theory.
- **The price.** Truth-functionality: the verity of "tall and not tall" is no longer computed from that of "tall". Whether to pay it divides the truth-functional degree theorist from Edgington; the supervaluationist (5.5) reaches the same verdicts without numbers ([supervaluationism](#supervaluationism)).
- **Trap: formally probabilities, not credences.** Verities share probability's arithmetic, not its epistemic reading.

*Lessons:* [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md)

### Artificial precision

**The objection that a degree theory pins exact numbers on what our use of a vague word leaves open, and draws a new sharp line at the edge of full truth.** Rosanna Keefe, *Theories of Vagueness* (2000), ch. 4; Sainsbury. 5.4 locates the degree theory's weakness here: the step from "borderline" to a real number.

- **Two forms** (5.4). Uniqueness: nothing in our use of "tall" makes person 100 tall to degree 0.5 rather than 0.49. A new sharp line: between the last man tall to degree 1 and the next ([higher-order vagueness](#higher-order-vagueness)).
- **The strongest reply** (5.4). Treat the numbers as a model, not a measurement (Roy Cook, "Vagueness and Mathematical Precision", 2002): only some features, such as the ordering and the gradual descent, represent anything, as a polygon can model a circle that has no corners. (The polygon is the lesson's illustration, not Cook's.)
- **What each side concedes.** The objector: degrees capture a gradualness that classical logic misses. The defender: "0.99" is no fact about "tall".

*Lessons:* [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md)

### Precisification

**A way of making every vague expression sharp; it is admissible iff it keeps the clear cases and clear non-cases and respects the penumbral connections.** Kit Fine, "Vagueness, Truth and Logic", *Synthese* 30 (1975), adapting the supervaluations Bas van Fraassen built for empty names in 1966. 5.5, D1. *In words:* one way of finishing the meaning that usage allows.

- **Semantic indecision.** Usage permits many sharp lines for "blue" and has chosen none (David Lewis's gloss). Think of a committee that has shortlisted eight places to draw a line and picked none: whatever holds on every shortlisted line is already settled (5.5).
- **5.5's tile board.** Thirty tiles, tile 1 deepest blue, tile 30 green. An admissible precisification of "blue" is a cutoff $c$ with $12 \le c \le 19$, inclusive, eight in all; on precisification $c$, tiles $1, \dots, c$ are blue and the rest are not. Write $b_n$ for "tile $n$ is blue".
- **Uniform through a sentence.** An ambiguous word can take two readings in one sentence ("he walked along the bank to the bank"), while a precisification sharpens "blue" the same way throughout; that is what makes "blue and not blue" superfalse (SEP, "Vagueness", §5).
- **"Admissible" is itself vague,** which is where [higher-order vagueness](#higher-order-vagueness) presses.
- **In law.** Gap-filling by precisification has been offered as a model of judicial discretion (Timothy Endicott, *Vagueness in the Law*, 2000); vague statutes belong to [`philosophy-of-law`](../philosophy-of-law/syllabus.md).
- **Trap: vagueness is not ambiguity with many readings.** The precisifications are ways of sharpening one meaning, applied uniformly.

*Lessons:* [5.5](lessons/05-05-supervaluationism-and-epistemicism.md)

### Penumbral connection

**A logical tie among borderline cases that holds however the vague word is sharpened.** Fine's term (1975). An admissible [precisification](#precisification) must respect them (5.5, D1). Examples on 5.5's tile board: if tile 16 is blue, so is the bluer tile 14; nothing is both blue and not blue.

- **Supertrue between two borderline sentences.** $b_{16} \to b_{14}$ ("if tile 16 is blue, tile 14 is blue") is true on every admissible cutoff, though both of its parts are borderline.
- **What the truth-functional theories do with the second example.** Strong Kleene gives a borderline "blue and not blue" $\tfrac12$ ([Strong Kleene](#strong-kleene)), and 5.4's min/max degrees give "tall and not tall" $\tfrac12$ at a midpoint ([degree theory](#degree-theory)); many hold the contradiction fully false and "tall or not tall" fully true (5.4). Of these three, only supervaluation makes the contradiction superfalse (5.5); Edgington's [verities](#verities) give it verity 0, at the price of truth-functionality, and on epistemicism it is simply false.
- **Trap: a conditional between two borderline sentences need not be borderline itself.**

*Lessons:* [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md)

### Supervaluationism

**Treat a vague word as an unfinished decision: a sentence is true iff it is true however the decision is finished, that is, on every admissible precisification.** Kit Fine, "Vagueness, Truth and Logic", *Synthese* 30 (1975); after van Fraassen's supervaluations (1966); defended at book length by Rosanna Keefe, *Theories of Vagueness* (2000). It identifies truth with [supertruth](#supertruth) (5.5, D2). Borderline sentences fall in a truth-value gap, as in 1.4 and 5.3, with one difference: excluded middle survives (5.5).

Settled results (5.5):

- **T1.** Each precisification is a classical model, so every classical tautology is supertrue, and every classically valid argument takes supertrue premises to a supertrue conclusion. Excluded middle, $\varphi \vee \neg\varphi$, is supertrue.
- **T2.** Bivalence fails, because a borderline "$Fa$" is neither supertrue nor superfalse. So a disjunction can be supertrue with neither disjunct supertrue, and an existential with no supertrue instance.
- **T3.** For a series $a_1, \dots, a_k$ with $Fa_1$ supertrue, $Fa_k$ superfalse and a borderline case between, the tolerance premise $\forall n\,(Fa_n \to Fa_{n+1})$ is superfalse and its negation, "there is a last $F$", is supertrue; each conditional premise $Fa_n \to Fa_{n+1}$ is supertrue or neither, never superfalse. *In words:* the sorites is valid and unsound, but no one premise can be pointed to as the false one. (Without a borderline case one conditional premise is superfalse.)

- **The tile board** is worked in [supertruth](#supertruth).
- **The costs** (5.5). Logic with "definitely": the classical laws survive, some classical rules do not ([definitely operator](#definitely-operator)). [Higher-order vagueness](#higher-order-vagueness). And truth that does not disquote.
- **Where 5.5 locates the weakness: D2.** Williamson objects that truth is disquotational and supertruth is not: "'tile 16 is blue' is supertrue iff tile 16 is blue" is itself neither supertrue nor superfalse, and the existential without a true instance and the failed inferences are symptoms. Keefe replies that these anomalies are the price of the best overall theory, and that "'$p$' is true" and "$p$" still entail each other. The supervaluationist concedes a truth that does not disquote.
- **The other gap theory** (5.5). 5.3's Strong Kleene gap loses excluded middle; supervaluation keeps it. Kripke's construction can also run on a supervaluation scheme (5.3).
- **Penumbral verdicts.** Supervaluation makes "blue and not blue" superfalse and "blue or not blue" supertrue, the verdicts Edgington's verities give, without numbers (5.4; [penumbral connection](#penumbral-connection)).
- **Where vagueness lives.** In unfinished meanings, not in the world ([epistemicism](#epistemicism) for the shared verdict and Evans).
- **Trap: excluded middle is not bivalence.** Excluded middle is a schema in the object language, bivalence a metalanguage claim about truth values; supervaluation keeps the first and drops the second, Strong Kleene drops both, epistemicism keeps both.
- **Trap: a supertrue "there is a last blue tile" locates no line.** No tile is the last on every precisification.
- **Left to you.** Boss 5(c) supervaluates its own series and asks for its borderline cases; the card does not.

*Lessons:* [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md)

### Supertruth

**Truth on every admissible precisification. Superfalsity is falsity on every one; a sentence true on some and false on others is neither.** Fine (1975); 5.5, D2. In symbols, $\varphi$ is supertrue iff $\varphi$ is true on $p$ for every admissible precisification $p$. *In words:* true means true however the decision is finished.

5.5 Example 1 (thirty tiles; admissible cutoffs $12 \le c \le 19$; $b_n$ is "tile $n$ is blue", true on cutoff $c$ iff $n \le c$):

| Sentence | True on cutoffs | Status |
|---|---|---|
| $b_{16}$ | 16–19 | neither |
| $b_{16} \vee \neg b_{16}$ | all 8 | supertrue |
| $b_{16} \wedge \neg b_{16}$ | none | superfalse |
| $b_{16} \to b_{14}$ | all 8 | supertrue |
| $\exists n \le 29\,(b_n \wedge \neg b_{n+1})$ | all 8 (witness $n = c$) | supertrue |
| $\forall n \le 29\,(b_n \to b_{n+1})$ | none (fails at $n = c$) | superfalse |

Tiles 1–12 are definitely blue, 13–19 borderline, 20–30 definitely not blue. Each instance $b_n \wedge \neg b_{n+1}$ with $12 \le n \le 19$ is true on exactly one cutoff, so neither; the rest are superfalse. Of the 29 conditional premises $b_n \to b_{n+1}$, 21 are supertrue and 8 ($n = 12, \dots, 19$) neither.

- **Not truth-functional.** The supertrue disjunction has no supertrue disjunct; the supertrue existential has no supertrue instance ([supervaluationism](#supervaluationism), T2).
- **Disquotation fails** at a borderline case: "'$b_{16}$' is supertrue iff $b_{16}$" is neither supertrue nor superfalse (Williamson's objection, in [supervaluationism](#supervaluationism)).
- **Trap: "true", "supertrue" and "known" come apart on tile 16.** Both theories of 5.5 assert excluded middle and "there is a last blue tile", but the supervaluationist calls "tile 16 is blue" neither, and the epistemicist calls it true or false, unknowably ([epistemicism](#epistemicism)).

*Lessons:* [5.5](lessons/05-05-supervaluationism-and-epistemicism.md)

### Definitely operator

**"Definitely $\varphi$" is true on a precisification iff $\varphi$ is true on every admissible precisification: a box whose worlds are the precisifications, each seeing all.** 5.5, D3. Write $D\varphi$. As a box ([2.1](lessons/02-01-kripke-semantics-and-the-system-k.md)) on a frame where every precisification sees every other, $D$ obeys [S5](#system-s5): $DD\varphi \leftrightarrow D\varphi$ (2.2). *In words:* "definitely" means on every sharpening.

- **Borderline, in the object language.** A borderline case of $F$ is an $a$ for which neither $DFa$ nor $D\neg Fa$ holds ([borderline case](#borderline-case)).
- **Laws survive, rules do not** (5.5). $\varphi$ entails $D\varphi$ (if $\varphi$ is supertrue, so is $D\varphi$), yet at a borderline case $\varphi \to D\varphi$ is not supertrue, and $\neg D\varphi$ is supertrue while $\neg\varphi$ is not. With $D$ in the language, conditional proof, contraposition and reductio fail (Timothy Williamson, *Vagueness*, 1994): the classical laws survive, some classical rules do not.
- **Higher-order vagueness.** Because $D$ obeys S5, the simple model leaves no room for borderline cases of "definitely blue" ([higher-order vagueness](#higher-order-vagueness)).
- **On epistemicism** "definitely" works like "knowably", and higher-order vagueness becomes ignorance of ignorance ([margin-for-error principle](#margin-for-error-principle)).

*Lessons:* [5.5](lessons/05-05-supervaluationism-and-epistemicism.md)

### Higher-order vagueness

**Vagueness in "borderline" and "definitely" themselves: there seem to be borderline cases of being a borderline case.** 5.4 and 5.5.

- **Against degree theories** (5.4). The degree theory draws a new sharp line between the last case of degree 1 and the next, and three values draw two sharp lines where there was one: the second form of [artificial precision](#artificial-precision).
- **Against supervaluationism** (5.5). Each model has a sharp band: on 5.5's tile board, tile 12 is definitely blue and tile 13 is not. But "admissible" is itself vague, so "definitely blue" should have borderline cases; with every precisification seeing every other, $D$ obeys S5 ($DD\varphi \leftrightarrow D\varphi$) and leaves no room for them ([definitely operator](#definitely-operator)). Williamson argues that accommodating them leaves supertruth without properties truth has; Keefe (2000) replies.
- **On epistemicism** (5.5). Higher-order vagueness is ignorance of ignorance: knowing that you know needs a double margin, [`epistemology` 1.3](../epistemology/lessons/01-03-why-knowledge.md)'s failure of the KK principle applied to "definitely". 2.3 reads a margin for error as a reflexive, symmetric, non-transitive frame, on which axiom 4 ([positive introspection](#positive-introspection)) fails.

*Lessons:* [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md)

### Epistemicism

**Vague predicates have sharp boundaries that nobody can know: a borderline case is a case of ignorance, not of indeterminacy.** Timothy Williamson, *Vagueness* (1994); Roy Sorensen, *Blindspots* (1988). On this reading Chrysippus's silence before the "many" ([sorites paradox](#sorites-paradox), 5.4) was ignorance of a real line. 5.5's argument:

- **E1.** Classical logic and bivalence hold for vague language: "tile 16 is blue" is true or false.
- **E2.** So the tolerance premise is false, and exactly one conditional premise is false: there is a last blue tile.
- **E3.** Meaning supervenes on use: no difference in where the line falls without a difference in the community's dispositions to apply the word, though no function from use to line can be stated or computed. *In words:* use fixes the line without anyone being able to read it off.
- **E4.** The [margin-for-error principle](#margin-for-error-principle).
- **C.** The line exists and cannot be known; a borderline case is one too close to it to know. *In words:* vagueness is ignorance.

- **Higher-order vagueness** is then ignorance of ignorance ([higher-order vagueness](#higher-order-vagueness)).
- **Sorensen's variant.** He traces the ignorance instead to there being no truthmaker that controls a borderline statement's truth value (*Vagueness and Contradiction*, 2001).
- **Where 5.5 locates the weakness: E3.** Use treats tiles 15 and 16 alike, so nothing could break the tie, and a rough word drawing a one-tile line would be a miracle. Williamson replies that falsity is the default where nothing makes a sentence true, that much meaning is acquired passively rather than stipulated, and that no theory can compute meaning from use. The epistemicist concedes facts its own defenders call hard to believe.
- **The oracle** (5.5 Example 2). If an oracle announcing "tile 15 is the last blue tile" tracks the line, a belief formed by trusting it is true in every close case, so E4 does not forbid knowledge: our ignorance concerns our means, not the line. An oracle that says 15 whatever happens gives a true belief and no more knowledge than a stopped clock. E4 explains why we cannot find a line, given that there is one; it cannot say what the tracking oracle registers. The supervaluationist calls the announcement a decision dressed as a report, and if, with Sorensen, no truthmaker controls a borderline truth value, it is unclear what any oracle could track.
- **Worldly vagueness** (5.5). [`metaphysics` 2.3](../metaphysics/lessons/02-03-hylomorphism-and-composition.md)'s argument from vagueness assumes that existence and identity are never vague (its P4) and asks whether vagueness can be in the world. Epistemicism and supervaluationism both say no, placing vagueness in our knowledge or in unfinished meanings, so P4 is their shared verdict, assumed. Gareth Evans ("Can There Be Vague Objects?", 1978) argued for its identity half: if it is indeterminate whether $a = b$, then $b$ has a property $a$ lacks, being indeterminately identical to $a$, so by [Leibniz's law](#leibnizs-law) $a \neq b$, which Evans took to contradict the supposition. Evans allowed vague identity statements with vague terms, as Kripke allowed contingent identities with non-rigid ones. Terence Parsons (*Indeterminate Identity*, 2000) challenges the inferences.
- **Survey.** Of target faculty in the PhilPapers 2020 survey, 52.13% accepted or leaned towards a semantic view of vagueness, 24.18% epistemic, 20.82% metaphysical.
- **Sideways.** [`apologetics-foundations` 4.2](../apologetics-foundations/lessons/04-02-evolution-design-and-the-human-person.md) defends a sharp line of kinds over a smooth series of bodies: the shape epistemicism gives every vague predicate, a sharp line that cannot be observed.
- **Trap: epistemicism keeps bivalence.** A borderline sentence is true or false, unknowably; it does not lack a value.
- **Trap: epistemicism does not deny that "blue" is vague.** It says what vagueness is.

*Lessons:* [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md)

### Margin-for-error principle

**If two cases differ by an increment on the deciding dimension and you know that the first is $F$, then the second is $F$: you cannot know a case that sits right next to one where you would be wrong.** Williamson (*Vagueness*, 1994; *Knowledge and Its Limits*, 2000). E4 of [epistemicism](#epistemicism) (5.5). In [`epistemology` 1.3](../epistemology/lessons/01-03-why-knowledge.md) it is safety applied to discrimination, and drives the argument against the KK principle; 2.3 reads a margin as a reflexive, symmetric, non-transitive frame ([epistemic logic](#epistemic-logic)). In symbols: if $x$ and $y$ differ by an increment and $K(Fx)$, then $Fy$, with $K$ "you know that".

- **A necessary condition on knowledge, not a sufficient one.** It says when you cannot know; it does not say when you do.
- **The toy** (5.5 Example 2). Suppose the line actually falls after tile 15, and a slightly different pattern of use would have moved it by up to two tiles, so the close cases are cutoffs 13–17. Stipulate that you know a claim iff it holds in every close case (E4 itself gives only the "only if"). Then you know "tile $n$ is blue" iff $n \le 13$ and "tile $n$ is not blue" iff $n \ge 18$; tiles 14–17 are unknowable by E4 alone, though 14 and 15 are blue. In general, with actual cutoff $c$ and margin $m$, you know "tile $n$ is blue" iff $n \le c - m$: `epistemology` 1.3's buoy, with the cutoff in place of the true distance and the tile in place of the threshold.
- **Knowing that you know** needs a double margin, which is why higher-order vagueness is iterated ignorance ([higher-order vagueness](#higher-order-vagueness)).
- **Trap: treating the principle as sufficient for knowledge.** The toy's biconditional is a stipulation.

*Lessons:* [5.5](lessons/05-05-supervaluationism-and-epistemicism.md)

## Formulas and formal statements

Every formal statement the lessons use, grouped by module, with each symbol defined in its entry and the owning lesson cited. Conventions throughout: truth values are $T$ and $F$ (Module 5 also writes 1, $\tfrac12$, 0); $\mathcal M, w \models \varphi$ is truth at a world, and $\Gamma \models \varphi$ is kept for entailment, never written inside a formula; $wRv$ is read "$w$ sees $v$"; $w_0$ is the actual or evaluation world (proofs use $w, v, u$); $D(w)$ is the domain of world $w$, and $Ex := \exists y\,(y = x)$ is the existence predicate; Module 5 writes the truth predicate $\mathrm{Tr}$, where the Boss problems write $T$. The logic stated here is settled; what it is taken to show is attributed. Where a Boss part sets a computation, the entry gives the general statement and no Boss model or value.

**Module 1: Sense, reference, and descriptions**

### Formal: Identity and the two compositionality principles

**A semantics with reference alone makes a true $c = d$ and $c = c$ true by the same fact; Frege adds a second level, sense, and lets each level compose.**

- **Identity clause** ([`mathematical-logic` 2.2](../mathematical-logic/lessons/02-02-structures-satisfaction.md)): $\mathcal M \models (t_1 = t_2)[s]$ iff $t_1^{\mathcal M}[s] = t_2^{\mathcal M}[s]$, where $\mathcal M$ is a structure, $s$ an assignment of objects to variables, and $t^{\mathcal M}[s]$ the object the term $t$ denotes. *In words:* the clause sees only the objects, so it cannot tell a discovery from a triviality ([Frege's puzzle](#freges-puzzle)).
- **Compositionality of reference.** Write $\mathrm{ref}(e)$ for the reference of expression $e$ and $S[e]$ for a complex expression containing $e$. If $\mathrm{ref}(e) = \mathrm{ref}(e')$, then $\mathrm{ref}(S[e]) = \mathrm{ref}(S[e'])$, outside [indirect contexts](#indirect-context). For a sentence the reference is its truth value, so this is interchange *salva veritate*.
- **Compositionality of sense.** The sense of $S[e]$ is fixed by the sense of $e$, the senses of the other parts, and their arrangement. *In words:* a co-referring swap preserves reference and may change sense. Frege names neither principle but uses both.
- **The medians case.** In a triangle with medians $a$, $b$, $c$, "the point where $a$ crosses $b$" and "the point where $b$ crosses $c$" refer to one point (a theorem) under two senses; the identity is informative and not a posteriori.

*From* [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md); see [compositionality](#compositionality), [reference of a sentence](#reference-of-a-sentence)

### Formal: Substitutivity, indirect reference and the gap rule

**In first-order logic co-referring terms always swap; Frege keeps that theorem by letting words under "believes that" refer to their customary senses, and pays with a hierarchy.**

- **Substitutivity (F1)** ([`mathematical-logic` 2.1](../mathematical-logic/lessons/02-01-quantifiers-syntax.md)): if $\mathcal M \models a = b$, then $\mathcal M \models \varphi[x := a]$ iff $\mathcal M \models \varphi[x := b]$, where $\varphi[x := t]$ is the result of substituting the term $t$ for the free variable $x$ in $\varphi$. See [substitutivity salva veritate](#substitutivity-salva-veritate).
- **The hierarchy of senses.** Write $r_n(\alpha)$ and $s_n(\alpha)$ for what an expression $\alpha$ refers to and expresses under $n$ attitude verbs. Indirect reference (P3) and "whatever refers does so through a sense" (P6) give
$$r_0(\alpha) = \text{the customary referent}, \qquad r_{n+1}(\alpha) = s_n(\alpha), \qquad s_n(\alpha) \text{ presents } r_n(\alpha).$$
*In words:* each added attitude verb moves a word's reference one step up a chain of senses that nothing stops ([hierarchy of senses](#hierarchy-of-senses)).
- **The gap rule (P5)** and [Weak Kleene](#weak-kleene). A part in customary position with no reference leaves the whole without a truth value: a compound has no value iff some component has none, and otherwise takes its classical value (Bochvar's 1938 tables). [Strong Kleene](#strong-kleene) (5.3) differs where a classical value settles the compound regardless of the gap: $F$ and gap is $F$; $T$ or gap is $T$; a conditional with a false antecedent or a true consequent is $T$. Weak Kleene gives each of these no value.

*From* [1.2](lessons/01-02-belief-reports-and-empty-names.md)

### Formal: Russell's analysis and the two scope readings

**"The $F$ is $G$" says that exactly one thing is $F$ and that it is $G$; under "not" or "believes", the analysis can be unpacked outside the operator (primary occurrence) or inside it (secondary).** $F$ is the descriptive predicate, $G$ the main predicate, $x, y$ individual variables, $=$ identity.

- **D1, the analysis.** "The $F$ is $G$" is true iff
$$\exists x\,\big(F(x) \land \forall y\,(F(y) \to y = x) \land G(x)\big).$$
Russell's 1919 form $\exists x\,\big(\forall y\,(F(y) \leftrightarrow y = x) \land G(x)\big)$ is equivalent. The first two conjuncts expand `mathematical-logic` 3.2's abbreviation: $\exists! x\,F(x) := \exists x\,\big(F(x) \land \forall y\,(F(y) \to y = x)\big)$. Use $\iota x\,Fx$ only as an abbreviation you define first.
- **D3, scope with negation.** For "the $F$ is not $G$":
$$\text{primary (wide scope):}\quad \exists x\,\big(F(x) \land \forall y\,(F(y) \to y = x) \land \neg G(x)\big)$$
$$\text{secondary (narrow scope):}\quad \neg\exists x\,\big(F(x) \land \forall y\,(F(y) \to y = x) \land G(x)\big)$$
"Wide" and "narrow" always name the scope of the description, not of the negation.
- **Scope with belief.** Write $\mathrm{Bel}_s[\varphi]$ for "$s$ believes that $\varphi$". Primary: $\exists x\,\big(F(x) \land \forall y\,(F(y) \to y = x) \land \mathrm{Bel}_s[G(x)]\big)$, a belief about the thing that is in fact $F$ (this [quantifies in](#quantifying-in)). Secondary: $\mathrm{Bel}_s\big[\exists x\,\big(F(x) \land \forall y\,(F(y) \to y = x) \land G(x)\big)\big]$, a belief that whatever is uniquely $F$ is $G$.
- **T1, when scope matters.** The primary reading of "the $F$ is not $G$" entails the secondary; the converse fails; the two are equivalent whenever $\exists! x\,F(x)$. So with "not" the readings come apart only when nothing is $F$ or more than one thing is; with "believes" they can differ even when exactly one thing is $F$. (1.3 checked this on all 340 structures with up to four objects.)
- **D4, existence.** "The $F$ exists" is $\exists x\,\big(F(x) \land \forall y\,(F(y) \to y = x)\big)$; its negation, "the $F$ does not exist", is true iff nothing is $F$ or two or more things are ([existence as quantifier](#existence-as-quantifier)).
- **Under a modal operator** the same two readings appear with $\Box$ for "not": see [Formal: Quine's essentialism and Smullyan's scope reading](#formal-quines-essentialism-and-smullyans-scope-reading) (2.5).
- **Left to you.** The King of France sentence at both scopes with the excluded-middle question (Boss 1(b)), the scopes of George IV's wish (part of 1(a)), and the *Waverley* sentence under $\Box$ (Boss 2(d)) are not worked here.

*From* [1.3](lessons/01-03-russells-theory-of-descriptions.md); used in [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md), [3.1](lessons/03-01-against-descriptivism.md), [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md)

### Formal: Entailment and presupposition

**Entailment is truth-preservation; a presupposition is what must hold for a sentence to have a truth value at all.** "Situation" means a model ([`mathematical-logic` 2.2](../mathematical-logic/lessons/02-02-structures-satisfaction.md)); $S$ and $P$ are sentences.

- **[Entailment](#entailment).** $S$ entails $P$ iff $P$ is true in every situation in which $S$ is true.
- **[Presupposition](#presupposition) (semantic).** $S$ presupposes $P$ iff $P$ is true in every situation in which $S$ is true *or false*. If negation maps $T$ to $F$, $F$ to $T$ and a gap to a gap, this is equivalent to: $P$ follows from $S$ and from not-$S$. That equivalence is why the negation test works ([presupposition tests](#presupposition-tests)).
- **Two semantics compared.** On Russell's, $\exists x\,(Fx \land \forall y\,(Fy \to y = x) \land Gx)$ entails $\exists x\,(Fx \land \forall y\,(Fy \to y = x))$; so does its negation with the description at wide scope, but not with it at narrow scope. A sentence that is true or false in every situation presupposes only logical truths. On a gap semantics in Strawson's spirit ("the $F$ is $G$" has no value unless exactly one thing is $F$, and is otherwise true iff that thing is $G$), the sentence and its negation both presuppose that exactly one thing is $F$.
- **"Stopped" (1.4 Example 1)**, with $U$ "she used to prescribe it" and $N$ "she prescribes it now", on a presuppositional analysis:

| $U$ | $N$ | "she has stopped" | its negation |
|---|---|---|---|
| T | T | F | T |
| T | F | T | F |
| F | T | gap | gap |
| F | F | gap | gap |

$U$ is true wherever the sentence has a value (presupposed); not-$N$ only wherever it is true (entailed).

- **Left to you.** Which claim about a present King of France Russell asserts and Strawson denies, and what Strawson puts in its place, is Boss 1(c).

*From* [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md); 4.4 inherits the definitions ([4.4](lessons/04-04-speaker-meaning-and-implicature.md))

**Module 2: Modal logic**

### Formal: Kripke frames, models and truth at a world

**A Kripke model is a graph of worlds with a truth-table row at each node; the box quantifies over the worlds a node sees, the diamond looks for one.**

- **D1, frame and model.** A [Kripke frame](#kripke-frame) $\langle W, R\rangle$ is a nonempty set $W$ of worlds with an [accessibility relation](#accessibility-relation) $R \subseteq W \times W$; $wRv$ is read "$w$ sees $v$". Nothing is assumed about $R$. A [Kripke model](#kripke-model) $\mathcal M = \langle W, R, V\rangle$ adds a valuation $V$ giving each atom $p$ the set $V(p) \subseteq W$ of worlds where it is true.
- **D2, [truth at a world](#truth-at-a-world).** $\mathcal M, w \models p$ iff $w \in V(p)$; the connectives follow the truth tables at $w$; and
$$\mathcal M, w \models \Box\varphi \iff \mathcal M, v \models \varphi \text{ for every } v \text{ with } wRv,$$
$$\mathcal M, w \models \Diamond\varphi \iff \mathcal M, v \models \varphi \text{ for some } v \text{ with } wRv.$$
This is [`mathematical-logic` 2.2](../mathematical-logic/lessons/02-02-structures-satisfaction.md)'s satisfaction with a world index.
- **D3, three levels.** $\varphi$ is *true in* $\mathcal M$ if true at every world of $\mathcal M$; [valid on a frame](#validity-on-a-frame) if true in every model on that frame, whatever the valuation; *valid on a class* of frames if valid on each member. Logic lives at the last two.
- **Dead ends.** At a [dead-end world](#dead-end-world) (one that sees nothing) every $\Box$-formula is vacuously true, $\Box(p \wedge \neg p)$ included, and every $\Diamond$-formula is false, $\Diamond(p \vee \neg p)$ included.
- **[Countermodel](#countermodel) recipe.** By soundness, one model and one world where $\varphi$ is false shows $\varphi$ is no theorem. A false $\Box\psi$ at $w$ needs one seen world where $\psi$ fails; a true $\Diamond\psi$ needs one where it holds; a true $\Box\psi$ or false $\Diamond\psi$ constrains every seen world. T, $\Box p \to p$, fails at a single world with $p$ false and no arrows.
- **Strict implication** (C. I. Lewis, 1918): "$p$ strictly implies $q$" is $\neg\Diamond(p \wedge \neg q)$, that is, $\Box(p \to q)$. On a non-universal frame it is world-relative ([strict implication](#strict-implication)).
- **Dynamic logic** (sideways): each program $c$ gets its own box, and the Hoare triple $\{P\}\,c\,\{Q\}$ becomes $P \to [c]Q$.

*From* [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md)

### Formal: The system K

**K is classical logic plus "necessity is closed under modus ponens" plus "what logic proves is necessary", and it is exactly what holds whatever the arrows look like.**

- **D4, [the system K](#system-k).** Axioms: every instance of a tautology, and every instance of the [K axiom](#k-axiom)
$$\Box(\varphi \to \psi) \to (\Box\varphi \to \Box\psi).$$
Rules: modus ponens, and the [necessitation rule](#necessitation-rule): from $\vdash \varphi$ infer $\vdash \Box\varphi$.
- **T1.** The K axiom is valid on every frame (modus ponens run at each seen world; nothing about $R$ is used).
- **T2.** Necessitation preserves validity on a frame and truth in a model, but not truth at a world: $p \to \Box p$ is no theorem.
- **T3, [duality](#modal-duality).** $\Diamond\varphi \leftrightarrow \neg\Box\neg\varphi$ is valid on every frame. With T1 it makes the rule "from $\Box(A \to B)$ and $\Diamond A$, infer $\Diamond B$" (the rule `philosophy-of-religion` 2.2 labels "K") a derived rule of K.
- **Not theorems of K:** T, $\Box p \to p$ (needs reflexivity, 2.2); D, $\Box p \to \Diamond p$ (needs seriality, 2.3); $p \to \Box p$.
- **Soundness and completeness (cited).** The theorems of K are exactly the formulas valid on every frame. Soundness is T1 and T2 run through [`mathematical-logic` 1.4](../mathematical-logic/lessons/01-04-proof-system-completeness.md)'s induction on proofs; completeness is stated, not proved (Kripke, 1959 and 1963a).
- **Normality and its costs.** A box closed under K and necessitation is [normal](#normal-modal-logic). Read as knowledge, normality is [logical omniscience](#logical-omniscience); read deontically, $\Box p \wedge \Box\neg p$ is true only at dead ends and in K entails $\Box q$ for every $q$ ("deontic explosion").

*From* [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md); used in [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Formal: Frame correspondence

**Each standard axiom is valid on a frame exactly when accessibility has one shape.** For all $w, v, u \in W$, $R$ is reflexive if $wRw$; serial if $wRv$ for some $v$; symmetric if $wRv$ implies $vRw$; transitive if $wRv$ and $vRu$ imply $wRu$; Euclidean if $wRv$ and $wRu$ imply $vRu$ ([frame conditions](#frame-conditions)).

| Axiom | Formula | Valid on a frame iff $R$ is | Taught |
|---|---|---|---|
| [T](#axiom-t) | $\Box p \to p$ | reflexive | 2.2 |
| [D](#axiom-d) | $\Box p \to \Diamond p$ | serial | 2.3 |
| [4](#axiom-4) | $\Box p \to \Box\Box p$ | transitive | 2.2 |
| [B](#axiom-b) | $p \to \Box\Diamond p$ | symmetric | 2.2 |
| [5](#axiom-5) | $\Diamond p \to \Box\Diamond p$ | Euclidean | 2.2 |

- **T1, [frame correspondence](#frame-correspondence)** holds for every frame, and is settled. Kripke's "Semantical Analysis of Modal Logic I" (1963a) matched 4 with transitivity, B with symmetry, and T plus 5 with equivalence relations.
- **The proof's key step (T valid implies reflexive).** If some $w$ lacks $wRw$, set $V(p) = \{v : wRv\}$: then $\Box p$ is true at $w$ and $p$ false. *Assumption used:* validity on a frame quantifies over every valuation, gerrymandered ones included.
- **Soundness halves.** Reflexive: $\Box p$ at $w$ and $wRw$ give $p$ at $w$. Transitive: every two-step path from $w$ is a one-step path, so $\Box p$ at $w$ gives $\Box\Box p$. Symmetric: $p$ at $w$ and $wRv$ give $vRw$, so $\Diamond p$ at $v$.
- **Dual forms.** Put $\neg p$ for $p$ and contrapose: T is equivalent to $p \to \Diamond p$, 4 to $\Diamond\Diamond p \to \Diamond p$, B to $\Diamond\Box p \to p$ (the form in which `philosophy-of-religion` 2.2 uses B).
- **L1, two relation facts.** (i) A reflexive Euclidean relation is symmetric and transitive. (ii) On a symmetric relation, transitive and Euclidean coincide. So with B kept, 4 and 5 fall together.
- **Frame vs model.** A formula true at every world of one model need not be valid on its frame: on a non-transitive frame with $p$ true everywhere, 4 is true everywhere.
- **Left to you.** That B's dual is valid on exactly the symmetric frames, and a reflexive, transitive countermodel to it, are Boss 2(a); the tolerance frame and what it does to the duals of 4 and 5 are Boss 2(b).

*From* [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), with D from [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Formal: The systems K to S5

**Each system is K plus some of T, D, B, 4, 5; each is sound and complete for the frames its axioms correspond to.** Every system is propositional logic, the K axiom, modus ponens and necessitation, plus:

| System | Added axioms | Sound and complete for frames that are |
|---|---|---|
| [K](#system-k) | none | all frames |
| D | D | serial |
| [T](#system-t) | T | reflexive |
| [B](#system-b) | T, B | reflexive and symmetric |
| [S4](#system-s4) | T, 4 | reflexive and transitive (preorders) |
| [S5](#system-s5) | T, 5 (equivalently T, B, 4; or S4 plus B) | equivalence relations, or universal |

- **The lattice.** K → D → T (T proves D, since reflexive frames are serial); T → B and T → S4; B → S5 and S4 → S5. B and S4 are incomparable; S5 is where they meet. Each step adds one axiom and shrinks the class of frames.
- **S5: equivalence or universal.** Truth at $w$ depends only on worlds reachable from $w$; in an equivalence frame those are $w$'s class, inside which every world sees every world. So equivalence frames and universal frames validate the same formulas.
- **Why S5 is T plus 5, not K plus 5.** Without reflexivity a Euclidean relation need not be symmetric.
- **[Soundness and completeness](#soundness-and-completeness) (cited).** Theorems of K, T, B, S4, S5 are exactly the formulas valid on their frame classes; Kripke (1963a) proved completeness for T, S4, B and S5; [`mathematical-logic` 1.4](../mathematical-logic/lessons/01-04-proof-system-completeness.md) explains the terms. The correspondence table does not by itself prove completeness: some systems are incomplete for the frames their axioms define.
- **Names.** S4 and S5: Lewis and Langford (1932). T: Feys (1937), called M after von Wright (1951). B: named for Brouwer.

*From* [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md); D from [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Formal: The S4 and S5 reduction laws

**Adding 4 to T cuts the tower of modalities to fourteen; in S5 only the last operator counts.** $p$ is a sentence letter; "modality" means a string of $\Box$, $\Diamond$ and $\neg$ in front of $p$ ([modal reduction laws](#modal-reduction-laws)).

- **S4, first level** (need T and 4): $\Box\Box p \leftrightarrow \Box p$ and $\Diamond\Diamond p \leftrightarrow \Diamond p$. Left to right is T applied to $\Box p$ (dually, 4's dual form); right to left is 4 (dually, T's dual form).
- **S4, second level** (need only 4, so they hold on every transitive frame, reflexive or not): $\Box\Diamond\Box\Diamond p \leftrightarrow \Box\Diamond p$ and $\Diamond\Box\Diamond\Box p \leftrightarrow \Diamond\Box p$.
- **Parry (1939).** In S4 every modality reduces to one of fourteen: $p$, $\Box p$, $\Diamond p$, $\Box\Diamond p$, $\Diamond\Box p$, $\Box\Diamond\Box p$, $\Diamond\Box\Diamond p$ and their negations. T and B alone leave infinitely many distinct modalities.
- **S5** (T2): $\Diamond\Box p \leftrightarrow \Box p$ and $\Box\Diamond p \leftrightarrow \Diamond p$. *Proof idea:* if $wRv$, then $w$ and $v$ see the same worlds (transitivity one way, Euclideanness the other), so $\Box\varphi$ and $\Diamond\varphi$ take the same value at $w$ as at every world $w$ sees; one direction of each law needs $w$ to see some world. The proof uses transitivity, Euclideanness and seriality, so the laws already hold in KD45 (serial, transitive, Euclidean: the usual logic of belief). Six modalities remain: $p$, $\Box p$, $\Diamond p$ and their negations.
- **What does not collapse.** Only strings ending in the same operator collapse: $\Diamond p$, $p$ and $\Box p$ stay distinct in S5.

*From* [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Formal: Deontic, epistemic and provability readings

**One set of clauses, read with different accessibility relations, gives different logics.**

- **[Deontic logic](#deontic-logic)** (von Wright, 1951). $O$ for $\Box$ ("it ought to be that"), $P$ for $\Diamond$ ("it may be that"), $P := \neg O \neg$. Standard deontic logic (SDL) is K plus D, $Op \to Pp$, equivalently $Op \to \neg O\neg p$ (no two obligations conflict); D is valid exactly on serial frames. T, $Op \to p$, fails. [Ought implies can](#ought-implies-can), $Op \to \Diamond p$, needs a second, alethic $\Diamond$. [Ross's paradox](#rosss-paradox): from the tautology $m \to (m \vee b)$, necessitation and K give $Om \to O(m \vee b)$ ($m$: the letter is posted; $b$: it is burned); it follows from normality alone.
- **[Epistemic logic](#epistemic-logic).** $K$ for $\Box$ ("the agent knows that"). T holds (knowledge is factive). 4 is [positive introspection](#positive-introspection), $Kp \to KKp$ (the KK principle). 5 is [negative introspection](#negative-introspection), $\neg Kp \to K\neg Kp$. A margin relation, $x$ sees $x'$ iff $|x - x'| \le m$ for a margin $m > 0$, is reflexive and symmetric but not transitive, so 4 fails on it. With $R$ as indistinguishability (an equivalence relation) knowledge is S5.
- **[Provability logic](#provability-logic) GL.** Read $\Box\varphi$ as $\operatorname{Prov}_{\mathsf{PA}}(\ulcorner\varphi\urcorner)$, "$\varphi$ is provable in Peano arithmetic $\mathsf{PA}$", with $\ulcorner\varphi\urcorner$ the code of $\varphi$. The derivability conditions (Löb's 1955 form) are necessitation, K and 4. GL adds [Löb's theorem](#lobs-theorem) as an axiom:
$$\Box(\Box p \to p) \to \Box p.$$
T cannot be added: T with $\bot$ gives $\Box\bot \to \bot$; necessitation gives $\Box(\Box\bot \to \bot)$; Löb's axiom then gives $\Box\bot$, and T gives $\bot$. (Line 1 says $\mathsf{PA}$ is consistent, line 2 that $\mathsf{PA}$ proves it.) GL is complete for transitive frames with no infinite forward chain, hence no world that sees itself (Segerberg, 1971), and, by Solovay's theorem (1976), for what $\mathsf{PA}$ proves about its own provability. Every instance of $\operatorname{Prov}_{\mathsf{PA}}(\ulcorner\varphi\urcorner) \to \varphi$ is true if $\mathsf{PA}$ is sound; what fails is that $\mathsf{PA}$ proves them.
- **[Metaphysical necessity](#metaphysical-necessity).** The usual logic is S5; the [tolerance argument](#tolerance-argument) denies transitivity ([Argument: Chandler's tolerance argument](#argument-chandlers-tolerance-argument)).

*From* [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Formal: Quantified modal models and the Barcan formula

**Give each world its own domain and let "there is", said at a world, range over that world's things; then the Barcan formula fails when a world gains things, its converse when a world loses them.**

- **Models.** $\mathcal M = \langle W, R, D, V\rangle$: worlds and accessibility as in 2.1; a domain $D(w)$ for each world; an extension $V(F, w)$ for each predicate $F$ at each world. $U$ is the union of all domains; an assignment $s$ sends variables into $U$.
- **[Actualist quantifiers](#actualist-quantifier).**
$$\mathcal M, w \models \forall x\,\varphi\,[s] \iff \text{for every } d \in D(w),\ \mathcal M, w \models \varphi\,[s[x\mapsto d]],$$
and dually for $\exists$. Possibilist quantifiers range over $U$ at every world.
- **Conventions (2.4).** (i) $V(F, w) \subseteq D(w)$: nothing has a property at a world where it does not exist ([serious actualism](#serious-actualism), Plantinga's term; Kripke 1963b called it natural but did not impose it). (ii) The [existence predicate](#existence-predicate) $Ex := \exists y\,(y = x)$. (iii) A domain may be empty.
- **[Domains](#constant-and-varying-domains).** Constant: every world has the same domain. Increasing: $wRv$ implies $D(w) \subseteq D(v)$. Decreasing: $wRv$ implies $D(v) \subseteq D(w)$. Varying: no constraint.
- **The formulas**, each in two forms equivalent as schemas (put $\neg\varphi$ for $\varphi$ and contrapose):
$$\textbf{BF:}\quad \Diamond\exists x\,\varphi \to \exists x\,\Diamond\varphi \qquad\text{or}\qquad \forall x\,\Box\varphi \to \Box\forall x\,\varphi$$
$$\textbf{CBF:}\quad \exists x\,\Diamond\varphi \to \Diamond\exists x\,\varphi \qquad\text{or}\qquad \Box\forall x\,\varphi \to \forall x\,\Box\varphi$$
See [Barcan formula](#barcan-formula), [converse Barcan formula](#converse-barcan-formula).
- **T1, correspondence (settled).** As a schema, BF is valid on a frame with domains iff domains are decreasing (BF forbids newcomers along $R$); CBF iff increasing (CBF forbids departures); constant domains validate both. On a symmetric frame the two conditions coincide, so in S5 BF and CBF stand or fall together. Possibilist quantifiers validate both.
- **The predicate convention for CBF.** Under convention (i), the *diamond* form $\exists x\,\Diamond Fx \to \Diamond\exists x\,Fx$ with atomic $F$ is true on every model, so its failure needs the *box* form $\Box\forall x\,Fx \to \forall x\,\Box Fx$ (which fails under (i) when a world loses something: 2.4's oak), a non-atomic instance such as $\varphi := \neg\exists y\,(y = x)$, or predicates true of non-existents (rejecting (i), as Fine and Pollock do). Always say which form and which convention.
- **Weak CBF**, valid on every frame: $\Box\forall x\,Fx \to \forall x\,\Box(Ex \to Fx)$. A de re "necessarily" splits into strong (at every accessible world) and weak (at every accessible world where the thing exists).
- **T2, BF in quantified S5 (Prior, 1956).** With the classical quantifier rules, BF is a theorem, using of S5 only K, necessitation and B:
  1. $\forall x\,\Box Fx \to \Box Fx$ (universal instantiation, UI, $x$ free)
  2. $\Diamond\forall x\,\Box Fx \to \Diamond\Box Fx$ (1, necessitation, K, duality)
  3. $\Diamond\Box Fx \to Fx$ (B, dual form)
  4. $\Diamond\forall x\,\Box Fx \to Fx$ (2, 3)
  5. $\Diamond\forall x\,\Box Fx \to \forall x\,Fx$ (generalization; $x$ not free in the antecedent)
  6. $\Box\Diamond\forall x\,\Box Fx \to \Box\forall x\,Fx$ (5, necessitation, K)
  7. $\forall x\,\Box Fx \to \Box\Diamond\forall x\,\Box Fx$ (B)
  8. $\forall x\,\Box Fx \to \Box\forall x\,Fx$ (6, 7)
- **CBF needs no B.** UI, necessitation, K and generalization give $\Box\forall x\,Fx \to \forall x\,\Box Fx$. With $\exists y\,(y = x)$ for $Fx$ it yields $\forall x\,\Box\exists y\,(y = x)$ and, by necessitation, **necessitism**: $\Box\forall x\,\Box\exists y\,(y = x)$ ([necessitism and contingentism](#necessitism-and-contingentism); Williamson's name, 2013).
- **Where a contingentist blocks it.** Line 1, classical UI for a free variable inside $\Box$. Kripke's 1963b logic admits only closed theorems, so UI enters as $\forall y\,(\forall x\,\Box Fx \to \Box Fy)$; Prior's system Q (1957) restricts necessitation instead.
- **The subtraction step.** $\forall x\,\Diamond\neg Ex$ does not entail $\Diamond\forall x\,\neg Ex$: the move swaps $\forall$ with $\Diamond$, operators of unlike kinds, and fails even with one shared domain. With actualist quantifiers $\Diamond\forall x\,\neg Ex$ is true just when some accessible world is empty. With $Ex$ read as $\exists y\,(y = x)$, "each thing might not have existed" contradicts CBF outright.
- **Left to you.** A two-world countermodel to BF with actualist quantifiers, the converse check on it, and whether a necessitist accepts it, are Boss 2(c).

*From* [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md); necessary existence as metaphysics is [`metaphysics` 3.3](../metaphysics/lessons/03-03-brute-facts-and-necessary-existence.md)

### Formal: Quine's essentialism and Smullyan's scope reading

**A formula is de re when a variable inside a box is bound from outside it; Smullyan answers Quine's substitution puzzle by giving descriptions scope.** Conventions of 2.5: an S5 frame (every world sees every world); constant domains; $x = y$ true at a world iff $x$ and $y$ are assigned the same object.

- **[De re and de dicto](#de-re-and-de-dicto).** De dicto: every box governs a closed sentence. De re: some variable inside a box is bound from outside it ([quantifying in](#quantifying-in)).
- **[Aristotelian essentialism](#aristotelian-essentialism)** (Quine, 1953): $\exists x\,(\Box Fx \land Gx \land \neg\Box Gx)$, with $F$, $G$ predicates: something has one trait necessarily and another contingently.
- **[Smullyan's reply](#smullyans-reply)** (1948). "The $F$ is necessarily $G$" has two Russellian readings:
$$\text{narrow: }\Box\,\exists x\,\big(Fx \land \forall y\,(Fy \to y = x) \land Gx\big) \qquad \text{wide: }\exists x\,\big(Fx \land \forall y\,(Fy \to y = x) \land \Box\,Gx\big)$$
A genuine name substitutes for a co-referring name inside the box; a description substitutes only into the wide reading. The wide reading quantifies in.
- **Necessity of the consequence** (sideways): $\Box(p \to q)$ versus $p \to \Box q$ is a scope contrast drawable in propositional modal logic; de re in Quine's sense needs a bound variable ([necessity of the consequence](#necessity-of-the-consequence)).
- **Left to you.** The *Waverley* sentence under $\Box$ in Boss 2(d)'s model is not worked here, and `metaphysics` 3.1's planets case is not re-set.

*From* [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md); the scope distinction is [1.3](lessons/01-03-russells-theory-of-descriptions.md)'s

### Formal: The necessity of identity and counterpart translation

**Whatever is identical is necessarily identical, by three lines that use no frame condition; counterpart theory blocks the second line.**

- **[Leibniz's law](#leibnizs-law)** as a schema: for any formula $\varphi(z)$, $\forall x\,\forall y\,\big(x = y \to (\varphi(x) \to \varphi(y))\big)$.
- **The derivation** ([necessity of identity](#necessity-of-identity)):
  1. $\forall x\,\Box(x = x)$. *From* $\vdash x = x$, necessitation, generalization. *Assumes:* the identity atom is true of each object at every world.
  2. $\forall x\,\forall y\,\big(x = y \to (\Box(x = x) \to \Box(x = y))\big)$. *Leibniz's law* with $\varphi(z) := \Box(x = z)$. *Assumes:* the schema holds for formulas containing a box (the step [`metaphysics` 5.3](../metaphysics/lessons/05-03-coincidence-and-the-ship-of-theseus.md) calls contested).
  3. $\forall x\,\forall y\,(x = y \to \Box\,x = y)$. *From* 1 and 2 by propositional logic under the quantifiers.
Valid on every frame. Barcan proved a version in 1947; the three-line proof opens Kripke's "Identity and Necessity" (1971).
- **The weak form.** If domains vary and an identity is false at a world where its object is absent, line 1 fails, and only $\forall x\,\forall y\,\big(x = y \to \Box(\exists z\,(z = x) \to x = y)\big)$ survives.
- **What it does not say.** It concerns objects, not sentences: an identity sentence with a non-rigid description ("the number of justices = 9") is true and contingent. Only terms picking out the same object at every world inherit the necessity ([rigid designators](#rigid-designator), 3.2). It says nothing about necessary existence.
- **[Counterpart theory](#counterpart-theory)'s translation** (Lewis, 1968). Primitives: $Wu$ ($u$ is a world), $Ixu$ ($x$ is in world $u$), $Cxy$ ($x$ is a counterpart of $y$); each thing is in one world and is its own counterpart.
$$\Box\varphi(x) \;\mapsto\; \forall u\,\forall x'\,\big((Wu \land Ix'u \land Cx'x) \to \varphi^{u}(x')\big)$$
$$\Diamond\varphi(x) \;\mapsto\; \exists u\,\exists x'\,\big(Wu \land Ix'u \land Cx'x \land \varphi^{u}(x')\big)$$
$\varphi^u$ is $\varphi$ with its quantifiers restricted to things in $u$; each free variable gets its own counterpart. $\Box(x = x)$ comes out true; $\Box(x = y)$ fails, even with $x = y$, once $x$ has two counterparts in one world, so line 2 fails and [contingent identity](#contingent-identity), $a = b \land \Diamond(a \neq b)$, can be true. Leibniz's law stays valid for every non-modal formula. The translation validates CBF in both forms and for every formula, so 2.4's predicate convention never comes into play.

*From* [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md); used in [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md)

**Module 3: Names and necessity**

### Formal: Descriptions under "might" and the actuality operator

**A description read inside "might" can fail where a name cannot; the descriptivist's repairs move the description outside the operator or tie it to the actual world.** $Tx$: "$x$ taught Alexander"; $a$: "Aristotle"; $w_0$ the actual world; actualist quantifiers.

- **The name sentence:** $\Diamond\neg Ta$, "Aristotle might not have taught Alexander": true (he might have died in infancy).
- **The narrow-scope description:** $\Diamond\exists x\,\big(Tx \land \forall y\,(Ty \to y = x) \land \neg Tx\big)$: false at every world of every model, since nothing can uniquely teach Alexander and not teach him. This contrast is the [modal argument](#modal-argument)'s P2.
- **Wide scope** ([wide-scope descriptivism](#wide-scope-descriptivism); Dummett, 1973): $\exists x\,\big(Tx \land \forall y\,(Ty \to y = x) \land \Diamond\neg Tx\big)$, true at $w$ iff the unique teacher at $w$ fails to teach Alexander at some world $w$ sees. It is the [de re](#de-re-and-de-dicto) reading of 2.5.
- **The actuality operator.** $\mathsf{A}\varphi$ ("actually $\varphi$") is true at any world iff $\varphi$ is true at $w_0$, wherever it is embedded. A [rigidified description](#rigidified-description), "the actual $F$ is $G$", is $\exists x\,\big(\mathsf{A}Fx \land \forall y\,(\mathsf{A}Fy \to y = x) \land Gx\big)$: it picks out the actual unique $F$ at every world, so it agrees with the name at every world where the bearer exists.
- **The contingent a priori schema.** "If exactly one thing is $F$, the actual $F$ is $F$" is true at every world taken as actual, yet false at some counterfactual world (3.3's two dimensions).

*From* [3.1](lessons/03-01-against-descriptivism.md); the scope distinction is [1.3](lessons/01-03-russells-theory-of-descriptions.md)'s

### Formal: Rigid designation

**A rigid designator follows its object into every world where the object exists and never picks out a stand-in.** Quantified models as in 2.4, with domains $D(w)$ and actualist quantifiers; $d_w(t)$ is the object a term $t$ designates when we use it to describe world $w$ (possibly none); "the $F$" designates at $w$ the unique $F$-thing in $D(w)$, if there is one.

- **D1, [rigid designator](#rigid-designator)** (Kripke, 1970 lectures; spelled out in "Identity and Necessity", 1971). $t$ is rigid for $o$ iff for every $w$: if $o \in D(w)$ then $d_w(t) = o$, and $d_w(t)$ is never an object other than $o$.
- **D2, [persistent and obstinate rigidity](#persistent-and-obstinate-rigidity)** (Salmon, 1981). *Persistent:* designates $o$ at every world where $o$ exists and nothing at any other world (Kripke's 1971 spelling-out). *Obstinate:* designates $o$ at every world, whether or not $o$ exists there. Kripke's *strongly rigid*: a rigid designator of a necessary existent, for which the two coincide. Never call obstinate rigidity "strong".
- **D3, [de jure and de facto rigidity](#de-jure-and-de-facto-rigidity).** De jure: rigid by its semantics (a name; on the usual view "the actual $F$"). De facto: a description whose condition the same object meets at every world ("the smallest prime" designates 2 everywhere).
- **A name against a co-designating description** (3.2 Example 1). With $Fx$ "$x$ first walked on the Moon" and $a$ a rigid name for its actual satisfier, "$a$ is the $F$" is $\exists x\,\big(\forall y\,(Fy \leftrightarrow y = x) \wedge a = x\big)$. With the description inside the box, $\Box\,\exists x\,\big(\forall y\,(Fy \leftrightarrow y = x) \wedge a = x\big)$ is false at $w_0$ if another thing is $F$ at a seen world; with it outside, $\exists x\,\big(\forall y\,(Fy \leftrightarrow y = x) \wedge \Box\,a = x\big)$ is true at $w_0$. A rigid name behaves as if it always took wide scope.
- **T1, what rigidity adds to identity.** With 2.5's $\forall x\,\forall y\,(x = y \to \Box\,x = y)$: if $a$ and $b$ are rigid for one object $o$, then $a = b$ is true at every world where $o$ exists. On persistent rigidity that is exactly where it holds; "true at every world" needs obstinate rigidity with identity holding of objects a world lacks, or constant domains. The weak necessity of a sentence $\varphi$ about $q$ is $\Box\big(\exists z\,(z = q) \to \varphi\big)$.
- **Left to you.** Boss 3(b)'s two-world model for a name and a description, and its Hesperus question at a world without Venus, are not worked here.

*From* [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md); varying domains are [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md)'s

### Formal: The necessary a posteriori, step by step

**Two rigid names that co-refer co-refer necessarily, and you may need a survey to learn that they co-refer.** 2.5's language: actualist quantifiers over $D(w)$, every world sees every world, $a$ and $b$ names.

1. **D1.** $\forall x\,\forall y\,(x = y \to \Box\,x = y)$: the [necessity of identity](#necessity-of-identity) (2.5), from $\forall x\,\Box(x = x)$ by Leibniz's law inside the box.
2. **D2.** $a = b \to \Box\,a = b$, by instantiating $x$ to $a$ and $y$ to $b$. *Assumes rigidity:* each name denotes the same object at every world (obstinately, in 3.2's term); a non-rigid $a$ co-designating with $b$ only at $w_0$ falsifies D2 there while D1 holds. *Assumes existence:* the names' actual referent is in $D(w_0)$, since an actualist universal instantiates only to what exists.
3. **D3.** $a = b$, by observation.
4. **∴ D4.** $\Box\,a = b$, by modus ponens: necessary, and known a posteriori because D3 was ([necessary a posteriori](#necessary-a-posteriori)).

- **[Strong and weak necessity](#strong-and-weak-necessity-of-identity).** With varying domains and identities false at a world lacking their object (existence-entailing semantics), D4 and D1 fail at $w_0$ as soon as some seen world lacks the object; what survives is the weak necessity $\Box\big(\exists x\,(x = a) \to a = b\big)$, true at every world where the object exists. With outer-domain semantics (identities evaluated whether or not their objects exist) or constant domains, D4 holds. Persistent rigidity leaves only weak necessity. 3.3 Example 1 checks both semantics on its own three-world model.
- **The [contingent a priori](#contingent-a-priori)** (the metre). "One metre" is rigid and "the length of S at $t_0$" is not; the description [fixes the reference without giving the meaning](#fixing-reference-and-giving-meaning). So "S is one metre long at $t_0$" is known without measuring yet false at a world where S was heated. (The bar stopped defining the metre in 1960; since 1983 the speed of light has.)
- **Kaplan's version** (3.4): "I am here now" is valid but not necessary ([Formal: Character and content](#formal-character-and-content)).

*From* [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md); the derivation is [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md)'s

### Formal: The two-dimensional matrix

**Ask of a sentence at a world both "had this world turned out actual, would it be true?" and "holding fixed what the words actually pick out, would it have been true had this world obtained?"** Write $v_S(u, w)$ for the truth value at $w$ (considered as counterfactual) of what sentence $S$ says if $u$ is actual; $@$ is the actual world.

- **Rows and columns.** Rows: worlds considered as actual. Columns: worlds considered as counterfactual. Cell $(u, w)$: $v_S(u, w)$.
- **[Primary intension](#primary-and-secondary-intension)** (the diagonal; Jackson's A-intension): $w \mapsto v_S(w, w)$. **Secondary intension** (the actual row; Jackson's C-intension): $w \mapsto v_S(@, w)$.
- **Core Thesis** (Chalmers, 2004): $S$ is a priori iff $v_S(w, w) = T$ for every scenario $w$.
- **Signatures.** Necessary a posteriori: constant actual row, broken diagonal. Contingent a priori: constant diagonal, broken actual row.

| "water is H2O" | Earth | Twin Earth |
|---|---|---|
| Earth as actual | T | T |
| Twin Earth as actual | F | F |

| "S is one metre long at $t_0$" | $w_0$ | $w_1$ (S heated) |
|---|---|---|
| $w_0$ as actual | T | F |
| $w_1$ as actual | F | T |

- **Three readings of one table.** Chalmers and Jackson: two semantic values, the primary doing a Fregean sense's work. Stalnaker ("Assertion", 1978; "Assertion Revisited", 2004): rows are what the sentence would have said in other contexts, its one content is the actual row, and the [diagonal proposition](#diagonal-proposition) is what an assertion conveys when hearers do not know which row they are in. Salmon and Soames: one a priori proposition, and an a posteriori fact about a sentence. See [two-dimensional semantics](#two-dimensional-semantics).
- **Left to you.** What a two-dimensionalist assigns to "Hesperus", "Phosphorus" and Pierre's beliefs is Boss 3(d).

*From* [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md); the two-row table is [`philosophy-of-mind` 1.4](../philosophy-of-mind/lessons/01-04-zombies-conceivability-and-kripke.md)'s

### Formal: Character and content

**Character is the rule a speaker learns; content is what the rule delivers at a context; a world turns content into an extension.** Kaplan, "Demonstratives" (manuscript 1977, published 1989).

- **D1, context and circumstance.** A context is $c = \langle a_c, t_c, l_c, w_c\rangle$: agent, time, location, world. A circumstance of evaluation is a world $w$ (Kaplan's are time-world pairs; 3.4 holds the time fixed).
- **D2, [character and content](#character-and-content).** The content of expression $e$ at $c$, $\chi_e(c)$, maps each world to an extension (a truth value for a sentence, an object for a term). The character $\chi_e$ maps each context to that content. For "I": $\chi_{\text{I}}(c)(w) = a_c$ at every $w$; "here" gives $l_c$, "now" gives $t_c$. $S$ is *true at* $c$ iff $\chi_S(c)(w_c) = T$.
- **D3, [direct reference](#direct-reference).** An [indexical](#indexical)'s content at $c$ is its referent, so within a context it is rigid. Pure indexicals ("I", "here", "now", "today") need only the rule; true demonstratives ("that", "he") also need a pointing or an intention.
- **T1, [logic of demonstratives](#logic-of-demonstratives).** A context is proper if $a_c$ is at $l_c$ at $t_c$ in $w_c$; $S$ is valid iff true at every proper context. "I am here now" is valid, but "Necessarily, I am here now" is not: $\chi(c)$ is the singular proposition that $a_c$ is at $l_c$ at $t_c$, false at a world where $a_c$ is elsewhere then. Validity follows character; necessity follows content.
- **Salmon's guises** (*Frege's Puzzle*, 1986): $A$ believes $p$ iff $\exists g\,\big(A \text{ grasps } p \text{ by } g \wedge \mathrm{BEL}(A, p, g)\big)$, where $g$ is a guise, a way of taking a proposition, and $\mathrm{BEL}$ is three-place ([guises](#guises)).
- **Davidson's rival** (4.1): truth is relativized to speaker and time, "'Io aiuto Enzo' is true as spoken by $x$ at $t$ iff $x$ helps Enzo at $t$".

*From* [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md); the matrix it restricts is [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md)'s

**Module 4: Meaning, use, and communication**

### Formal: A Davidsonian truth theory

**Finitely many axioms, one per word and one per way of building a sentence, yield a T-sentence for every sentence of the language.**

- **[T-sentence](#t-sentence) schema.** "$s$" is true iff $p$, where $s$ is a sentence of the [object language](#object-language-and-metalanguage), mentioned (quoted), and $p$ a sentence of the metalanguage, used. The biconditional is extensional.
- **4.1's theory for a scrap of Italian.** Object language $L$: names "Giulia", "Enzo"; verb "aiuta" (helps); "non" before the verb; "se $S_1$, allora $S_2$" (if $S_1$, then $S_2$), freely nested. $\alpha, \beta$ range over the names, $S_1, S_2$ over sentences of $L$, and $\mathrm{ref}$ is the reference function fixed by (R1) and (R2).
  - (R1) "Giulia" refers to Giulia. (R2) "Enzo" refers to Enzo.
  - (S) $\langle x, y\rangle$ satisfies "aiuta" iff $x$ helps $y$.
  - (A) "$\alpha$ aiuta $\beta$" is true iff $\langle \mathrm{ref}(\alpha), \mathrm{ref}(\beta)\rangle$ satisfies "aiuta".
  - (N) "$\alpha$ non aiuta $\beta$" is true iff $\langle \mathrm{ref}(\alpha), \mathrm{ref}(\beta)\rangle$ does not satisfy "aiuta".
  - (C) "se $S_1$, allora $S_2$" is true iff, if $S_1$ is true, then $S_2$ is true (material "if", the toy's convention).
- **[Canonical derivation](#canonical-derivation)** (4.1 Example 1). Unpack the outermost clause, then each part by (A) or (N) with (R1), (R2) and (S), and substitute: "se Giulia aiuta Enzo, allora Enzo non aiuta Giulia" is true iff, if Giulia helps Enzo, then Enzo does not help Giulia. Each axiom enters exactly where its word occurs.
- **[Learnability](#learnability) in numbers.** With $N_k$ the number of sentences of nesting depth at most $k$: $N_0 = 8$ and $N_{k+1} = 8 + N_k^2$, so 8, 72, 5,192.
- **Embedding.** Under (C), an embedded sentence contributes the condition it has standing alone, and modus ponens is valid by (C) itself: the compositional semantics the [Frege-Geach problem](#frege-geach-problem) demands ([`ethics` 6.2](../ethics/lessons/06-02-expressivism.md)).
- **Deviant axioms** ([Foster's problem](#fosters-problem)). 4.1's (S′): $\langle x, y\rangle$ satisfies "aiuta" iff $x$ helps $y$ and Rome is the capital of Italy. Every T-sentence it yields is true, so the theory is extensionally adequate but not interpretive. 4.1's (R2′): "Enzo" refers to Quenby (Enzo's pen name); the two theories agree on every sentence in every situation.
- **Indexicals.** "Io aiuto Enzo" is true as spoken by $x$ at $t$ iff $x$ helps Enzo at $t$.
- **Left to you.** Boss 4(b) sets a different toy language with its own deviant axioms and asks what a laws requirement does to each; the card gives neither.

*From* [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md); the clauses are [`mathematical-logic` 2.2](../mathematical-logic/lessons/02-02-structures-satisfaction.md)'s, read as meaning-giving

### Formal: Tonk, conservativeness and harmony

**Rules alone can define a connective that proves everything; the repairs are conservativeness and harmony.** $A$, $B$ are any sentences; $\vdash$ is derivability.

- **[Tonk](#tonk)** (Prior, 1960): $\dfrac{A}{A \;\mathrm{tonk}\; B}$ (tonk-I), $\dfrac{A \;\mathrm{tonk}\; B}{B}$ (tonk-E). Chained, they give $B$ from any $A$.
- **The truth-function test** (after Stevenson, 1961). For a binary truth function $f$ read as tonk: tonk-I preserves truth iff $f(T,T) = f(T,F) = T$; tonk-E iff $f(T,F) = f(F,F) = F$. They clash at $f(T,F)$: of the 16 binary truth functions, 4 satisfy tonk-I, 4 satisfy tonk-E, none both.
- **[Conservative extension](#conservative-extension)** (Belnap, 1962). Rules for a new connective are conservative over $\vdash$ iff, for all $\Gamma, \varphi$ in the old vocabulary, $\Gamma \vdash_{\text{new}} \varphi$ implies $\Gamma \vdash \varphi$. Tonk fails: $p \vdash_{\text{tonk}} q$ for tonk-free $p$, $q$, though $p \not\models q$. Belnap's reply is conservativeness (plus uniqueness), not harmony.
- **[Harmony](#harmony)** (Dummett's term, 1973; from Gentzen and Prawitz). Inversion principle (Prawitz, 1965), informally: an introduction immediately followed by its elimination is a removable detour, the conclusion being derivable from the introduction's premises directly. Tonk-I puts in $A$; tonk-E takes out $B$. Keeping tonk-I, the strongest justified elimination is $\dfrac{A \;\mathrm{tonk}\; B}{A}$, which makes tonk the truth function $f(A, B) = A$.

*From* [4.2](lessons/04-02-meaning-as-use.md); the rule format is [`mathematical-logic` 1.4](../mathematical-logic/lessons/01-04-proof-system-completeness.md)'s

### Formal: Quus and the bent series

**A finite record fits infinitely many rules.**

- **[Quus](#quus)** (Kripke, 1982). For natural numbers $x, y$: $x \oplus y = x + y$ if $x, y < 57$, and $x \oplus y = 5$ otherwise. So $68 + 57 = 125$ but $68 \oplus 57 = 5$.
- **4.3's rule for Wittgenstein's pupil** (*Investigations* §185; the rule is the lesson's, not Wittgenstein's): $s(n) = n + 2$ for $n < 1000$ and $s(n) = n + 4$ for $n \ge 1000$. From 994, $+2$ gives 996, 998, 1000, 1002, 1004, 1006 and $s$ gives 996, 998, 1000, 1004, 1008, 1012: they agree on every input below 1000.
- **Left to you.** A quus-style rival to a truth theory's predicate axiom, and how it differs from Foster's deviants, is Boss 4(d).

*From* [4.3](lessons/04-03-the-rule-following-paradox.md); plus and quus against materialism is [`philosophy-of-mind` 5.2](../philosophy-of-mind/lessons/05-02-is-the-intellect-a-bodily-power.md)'s

### Formal: Speaker meaning, implicature and scales

**Meaning is an intention that works by being recognized; an implicature is what a cooperative speaker must believe to have said just that.**

- **[Speaker meaning](#speaker-meaning)** (Grice, 1957, in Strawson's 1964 three clauses). $S$ means that $p$ by uttering $x$ to audience $A$ iff $S$ utters $x$ intending (i) $A$ to believe that $p$; (ii) $A$ to recognize intention (i); (iii) $A$'s recognition of (i) to be at least part of $A$'s reason for believing $p$.
- **[Conversational implicature](#conversational-implicature)** (Grice, 1975, as standardly reconstructed). $S$ implicates $q$ by saying $p$ iff (a) $S$ is presumed to observe the [cooperative principle](#cooperative-principle); (b) the supposition that $S$ thinks $q$ is needed to make her saying $p$ consistent with (a); (c) $S$ thinks, and expects the hearer to see she thinks, that the hearer can work out (b). Marks: [calculability](#calculability) and [cancellability](#cancellability) ("$p$, but not $q$" is no contradiction).
- **[Scalar implicature](#scalar-implicature)** (Horn, 1972). Scale $\langle$all, most, some$\rangle$, ordered by strength. With $Jx$ "$x$ is a jar of the batch" and $Sx$ "$x$ is spoiled":
$$\forall x\,(Jx \to Sx),\ \exists x\,Jx \;\models\; \exists x\,(Jx \wedge Sx),$$
and without $\exists x\,Jx$ the entailment fails (empty domain). Conversely $\exists x\,(Jx \wedge Sx) \not\models \neg\forall x\,(Jx \to Sx)$: "some" means at least one, and "not all" is implicated by Quantity, not entailed. With "most" as more than half (nonempty domain), all entails most and most entails some.
- **[Downward-entailing contexts](#downward-entailing-context).** Under negation and similar operators the entailments reverse ("not some" entails "not all"), and the scalar implicature goes.
- **Tests compared** (4.4 Example 2). Entailment: cancelling contradicts. Conversational implicature: cancellable unembedded, calculable, lost under a question. Presupposition and conventional implicature: both project under a question and resist cancellation, and no test separates them. See [entailment](#entailment), [presupposition](#presupposition), [conventional implicature](#conventional-implicature).

*From* [4.4](lessons/04-04-speaker-meaning-and-implicature.md); presupposition is defined in [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md)

### Formal: State descriptions and meaning postulates

**Carnap makes analyticity exact: true in every state description (L-truth), or in every state description the meaning postulates admit (analytic in $L$).** A language $L$ has atomic sentences $A_1, \dots, A_n$; a [state description](#state-description) $s$ assigns $T$ or $F$ to each $A_i$; complex sentences get values by the truth tables, with $\forall x$ running over $L$'s individual names; $s \models S$ means "$S$ is true in $s$".

- **C1** (Carnap, *Meaning and Necessity*, 1947): $S$ is L-true iff $s \models S$ for every state description $s$.
- **C2** (Carnap, "Meaning Postulates", 1952, a reply after "Two Dogmas"): given a set $\mathcal P$ of [meaning postulates](#meaning-postulate), $S$ is analytic in $L$ iff $s \models S$ for every $s$ with $s \models P$ for all $P \in \mathcal P$.
- **4.5's mare model.** Predicates $M$ (mare), $H$ (horse), $F$ (female), names $a$, $b$, postulate $\forall x\,(Mx \to (Hx \wedge Fx))$. Six atoms give $2^6 = 64$ state descriptions; the postulate admits 25. $\forall x\,(Mx \to Hx)$ holds in 36 of the 64 and in all 25: analytic in $L$, not L-true. $\forall x\,((Hx \wedge Fx) \to Mx)$ fails in an admitted description (a filly): synthetic.
- **Kinetic energy** (4.5 Example 2): classical $\tfrac12 mv^2$; relativistic $(\gamma - 1)mc^2$, $\gamma = 1/\sqrt{1 - v^2/c^2}$, $c$ the speed of light. At $v = 0.6c$, $\gamma = 1.25$: $0.25\,mc^2$ against $0.18\,mc^2$.

*From* [4.5](lessons/04-05-analyticity-and-two-dogmas.md)

**Module 5: Truth, paradox, and vagueness**

### Formal: Convention T and the undefinability of truth

**A definition of truth for a language must deliver every T-sentence and count nothing but the language's sentences true; no language that can do arithmetic defines truth for its own sentences.** The object language $L$ is the language whose sentences are called true; the metalanguage $M$ contains a translation of $L$, names for $L$'s sentences, a theory of their syntax, and logic with some set theory ([object language and metalanguage](#object-language-and-metalanguage)). $\mathrm{Tr}$ is the defined predicate; $\ulcorner S\urcorner$ names sentence $S$ (by quotation, or in arithmetic by its Gödel numeral); $S^{*}$ is the translation of $S$ into $M$.

- **[T-schema](#t-schema):** $\mathrm{Tr}(\ulcorner S\urcorner) \leftrightarrow S^{*}$. Example: "Gras ist grün" is true iff grass is green.
- **D2, [Convention T](#convention-t)** (two clauses). A definition of $\mathrm{Tr}$ in $M$ is [materially adequate](#material-adequacy) iff $M$'s axioms with the definition prove (α) every instance of the T-schema for sentences of $L$, and (β) $\forall x\,(\mathrm{Tr}(x) \to x \text{ is a sentence of } L)$. Convention T is a test a definition must pass, not itself a definition.
- **D3, [formal correctness](#formal-correctness).** The definition has the form $\forall x\,(\mathrm{Tr}(x) \leftrightarrow \delta(x))$, with $\mathrm{Tr}$ absent from $\delta$, and $\delta$ built from syntax, logic, set theory and translations of $L$'s own words (no "true", "refers" or "means").
- **D4, [satisfaction](#satisfaction), then truth.** Satisfaction of a formula by an assignment is defined by recursion (the clauses of [`mathematical-logic` 2.2](../mathematical-logic/lessons/02-02-structures-satisfaction.md)); a sentence $\sigma$ is true iff every assignment $s$ satisfies it ($\mathcal M \models \sigma[s]$ for all $s$). The recursion bottoms out in base clauses for names and predicates, Field's [primitive denotation](#primitive-denotation).
- **A finite language, case by case** (5.1 Example 1): $\mathrm{Tr}(x) \leftrightarrow \big(x = \ulcorner Kr\urcorner \wedge \text{the Rhine flows through Cologne}\big) \vee \big(x = \ulcorner Ke\urcorner \wedge \text{the Elbe flows through Cologne}\big)$ proves both T-sentences by logic alone; the bare list $\mathrm{Tr}(x) \leftrightarrow x = \ulcorner Kr\urcorner$ has the right extension only by luck.
- **Diagonal lemma** ([`mathematical-logic` 5.1](../mathematical-logic/lessons/05-01-incompleteness-first-theorem.md)): for every formula $\psi(x)$ with one free variable there is a sentence $G$ with $T \vdash G \leftrightarrow \psi(\ulcorner G\urcorner)$, $T$ there a theory such as $\mathsf{PA}$.
- **T1, [undefinability of truth](#undefinability-of-truth)** (Tarski 1933; general form in the 1935 postscript; settled). Let $\mathcal N$ be the standard model of arithmetic and $\mathcal L_A$ its language. No formula $\mathrm{Tr}(x)$ of $\mathcal L_A$ has $\mathcal N \models \mathrm{Tr}(\ulcorner\varphi\urcorner) \leftrightarrow \varphi$ for every sentence $\varphi$ of $\mathcal L_A$. *Proof:* (1) the diagonal lemma with $\psi(x) := \neg\mathrm{Tr}(x)$ gives $L$ with $\mathsf{PA} \vdash L \leftrightarrow \neg\mathrm{Tr}(\ulcorner L\urcorner)$; (2) $\mathsf{PA}$'s theorems are true in $\mathcal N$; (3) the supposed definition applies to $L$ itself ([semantic closure](#semantic-closure)); (4) so $\mathcal N \models L \leftrightarrow \neg L$, which no structure satisfies (classical, two-valued satisfaction). Truth for $\mathcal L_A$ is definable, but only in a stronger metalanguage ([Tarski's hierarchy](#tarskis-hierarchy)).
- **Not incompleteness.** T1 concerns what a language can express, not what a theory can prove; $L$ is a "fixed point" only in the diagonal lemma's sense.
- **[Curry's paradox](#curry-paradox)** (5.1 P2): a Curry sentence $C$ with $T \vdash C \leftrightarrow (\mathrm{Tr}(\ulcorner C\urcorner) \to 0 = 1)$, "if this sentence is true, then $\bot$". With a conditional obeying modus ponens and conditional proof, it proves anything.
- **Left to you.** Aristotle's formula in *Metaphysics* Γ 7, which 5.1 cites as Tarski's "classical conception", is Boss 5(a)'s close reading ([Aristotle's formula](#aristotles-formula)).

*From* [5.1](lessons/05-01-tarskis-theory-as-philosophy.md); the library's only statement of the theorem

### Formal: Deflationary schemas and conservativeness

**Every theory of truth accepts the schema; the deflationist says the instances, plus the job of generalizing, are all there is.** $\ulcorner\varphi\urcorner$ names sentence $\varphi$; $\langle p\rangle$ is "the proposition that $p$"; $\mathrm{Tr}$ the truth predicate.

- **[Equivalence schema](#equivalence-schema):** it is true that $p$ iff $p$. Propositional (Horwich's [minimalism](#minimalism-about-truth)): $\langle p\rangle$ is true iff $p$, minus the instances that would generate the liar. Sentential ([disquotationalism](#disquotationalism)): $\mathrm{Tr}(\ulcorner\varphi\urcorner) \leftrightarrow \varphi$ for each sentence $\varphi$ of one's own language.
- **Ramsey's analysis** of "he is always right" (1927): for all $p$, if he asserts $p$, then $p$, with a quantifier into sentence position ([redundancy theory](#redundancy-theory)).
- **The [generalization problem](#generalization-problem)** (Tarski 1935; Gupta 1993). The instances, taken together, prove each instance of "every sentence of the form 'if $p$ then $p$' is true" but not the generalization itself: the set is ω-incomplete. Every instance is provable; what fails is the step to "all".
- **Conservativeness.** A theory $\mathrm{Th}$ in the language of $\mathsf{PA}$ plus $\mathrm{Tr}$ is conservative over $\mathsf{PA}$ iff for every $\mathrm{Tr}$-free sentence $\varphi$, $\mathrm{Th} \vdash \varphi$ implies $\mathsf{PA} \vdash \varphi$. Three theories (5.2 Example 2; settled):
  1. The disquotational schema alone is conservative over $\mathsf{PA}$, even with induction extended to formulas containing $\mathrm{Tr}$.
  2. Tarski's compositional clauses as axioms, with induction only for $\mathrm{Tr}$-free formulas: still conservative (Kotlarski, Krajewski and Lachlan, 1981; Enayat and Visser, and Leigh, 2015).
  3. Compositional clauses *plus* induction for formulas containing $\mathrm{Tr}$: induction on the length of proofs gives global reflection, $\forall x\,(\operatorname{Prov}_{\mathsf{PA}}(x) \to \mathrm{Tr}(x))$; with $\mathrm{Tr}(\ulcorner 0 = 1\urcorner) \leftrightarrow 0 = 1$ it proves $\operatorname{Con}(\mathsf{PA})$, which $\mathsf{PA}$ cannot.
  Never say "a deflationary truth theory plus induction proves $\operatorname{Con}(\mathsf{PA})$" without naming the compositional clauses. The [conservativeness argument](#conservativeness-argument) (Shapiro, 1998; Ketland, 1999) turns this on deflationism.

*From* [5.2](lessons/05-02-deflationism.md); the second incompleteness theorem is [`mathematical-logic` 5.2](../mathematical-logic/lessons/05-02-second-theorem-undecidability.md)'s

### Formal: Strong Kleene, the jump and the least fixed point

**With a third value for gaps and monotone connectives, "true" can apply to its own language and be transparent; the liar gets a gap at every fixed point.** Values $\{0, \tfrac12, 1\}$, with $\tfrac12$ marking a gap (no value) in Strong Kleene and "both true and false" in LP.

- **[Strong Kleene](#strong-kleene)** (Kleene 1952, §64): $v(\neg\varphi) = 1 - v(\varphi)$; $v(\varphi \wedge \psi) = \min(v(\varphi), v(\psi))$; $v(\varphi \vee \psi) = \max(v(\varphi), v(\psi))$; $\varphi \to \psi := \neg\varphi \vee \psi$, so $v(\varphi \to \psi) = \max(1 - v(\varphi), v(\psi))$. K3 validity: whenever every premise gets 1, so does the conclusion.
- **[Information order](#information-order):** $\tfrac12 \sqsubseteq 0$ and $\tfrac12 \sqsubseteq 1$; $(\mathcal E, \mathcal A) \sqsubseteq (\mathcal E', \mathcal A')$ iff $\mathcal E \subseteq \mathcal E'$ and $\mathcal A \subseteq \mathcal A'$. Every Strong Kleene connective is monotone: filling a gap never changes a settled value.
- **D1, interpretation of $\mathrm{Tr}$:** a pair $(\mathcal E, \mathcal A)$ of disjoint sets of sentences (extension and anti-extension); $v(\mathrm{Tr}(\ulcorner\varphi\urcorner))$ is 1 if $\varphi \in \mathcal E$, 0 if $\varphi \in \mathcal A$, $\tfrac12$ otherwise.
- **D2, the [jump](#kripke-jump):** $J(\mathcal E, \mathcal A) = (\{\varphi : v(\varphi) = 1\}, \{\varphi : v(\varphi) = 0\})$, computed under $(\mathcal E, \mathcal A)$.
- **T2, [Kripke's fixed point](#kripkes-fixed-point)** (Kripke 1975; independently Martin and Woodruff 1975; settled). $J$ is monotone. Stages: $S_0 = (\varnothing, \varnothing)$, $S_{\alpha+1} = J(S_\alpha)$, $S_\lambda = \bigcup_{\alpha < \lambda} S_\alpha$ componentwise at limits. They grow to the least fixed point, transfinitely in general ([`mathematical-logic` 4.2](../mathematical-logic/lessons/04-02-ordinals-transfinite-induction.md)) and in finitely many stages for a finite language; its existence comes from monotonicity, not continuity ([`programming-languages` 2.3](../programming-languages/lessons/02-03-denotational-semantics-and-fixed-points.md)). At every fixed point $\varphi$ and $\mathrm{Tr}(\ulcorner\varphi\urcorner)$ have the same value (transparency).
- **D3, [grounded](#groundedness) and [paradoxical](#paradoxical-sentence)** (Kripke's definitions): grounded iff valued (0 or 1) in the least fixed point; paradoxical iff valued in no fixed point.
- **The liar and the truth-teller.** [Liar](#liar-paradox) $L := \neg\mathrm{Tr}(\ulcorner L\urcorner)$: at a fixed point $v = 1 - v$, so $v = \tfrac12$ at every fixed point: paradoxical; the biconditional $\mathrm{Tr}(\ulcorner L\urcorner) \leftrightarrow L$ itself gets $\tfrac12$. [Truth-teller](#truth-teller) $K := \mathrm{Tr}(\ulcorner K\urcorner)$: $v = v$; $\tfrac12$ in the least fixed point, but further fixed points put it in $\mathcal E$ or in $\mathcal A$: ungrounded, not paradoxical.
- **5.3 Example 1** (six sentences: $g$ "grass is green", $g_1 := \mathrm{Tr}(\ulcorner g\urcorner)$, $g_2 := \neg\mathrm{Tr}(\ulcorner g_1\urcorner)$, $L$, $d := \mathrm{Tr}(\ulcorner L\urcorner) \vee \mathrm{Tr}(\ulcorner g\urcorner)$, $e := \mathrm{Tr}(\ulcorner L\urcorner) \wedge \mathrm{Tr}(\ulcorner g\urcorner)$). Stages $(\varnothing,\varnothing)$, $(\{g\},\varnothing)$, $(\{g, g_1, d\},\varnothing)$, $(\{g, g_1, d\},\{g_2\})$; the last is the least fixed point and, of $3^6 = 729$ candidate sortings, the only one. $d$ mentions the liar yet is grounded true; $e$ is paradoxical with no self-reference of its own.
- **[LP](#logic-of-paradox)** (Priest, 1979): the same tables, with 1 and $\tfrac12$ designated; valid iff whenever every premise gets 1 or $\tfrac12$, so does the conclusion. LP keeps excluded middle and $\neg(\varphi \wedge \neg\varphi)$, and loses explosion and disjunctive syllogism (countervaluation $p = \tfrac12$, $q = 0$).
- **Exclusion negation:** $1 \mapsto 0$, $0 \mapsto 1$, $\tfrac12 \mapsto 1$ ("not true", gaps included). It is not monotone, so the construction cannot run with it in the language ([strengthened liar](#strengthened-liar)).
- **Left to you.** Boss 5(b)'s language and its fixed points are not computed here, nor is Boss 5(d)'s revenge reasoning assessed.

*From* [5.3](lessons/05-03-the-liar-and-theories-of-truth.md); the liar's and truth-teller's shapes are [`mathematical-logic` 3.1](../mathematical-logic/lessons/03-01-russells-paradox.md)'s

### Formal: The Lukasiewicz conditional and degree arithmetic

**Let truth come in degrees in $[0,1]$; a conditional falls short of full truth by exactly the drop from antecedent to consequent, and modus ponens spends that shortfall.** $v$ assigns each sentence a degree in $[0,1]$ ([degree theory](#degree-theory), [fuzzy logic](#fuzzy-logic)).

- **Connectives** (Goguen 1969, after Zadeh): $v(\neg A) = 1 - v(A)$; $v(A \wedge B) = \min(v(A), v(B))$; $v(A \vee B) = \max(v(A), v(B))$; $v(\forall n\,\varphi(n)) = \min_n v(\varphi(n))$.
- **[The Łukasiewicz conditional](#lukasiewicz-conditional):**
$$v(A \to B) = \min\big(1,\ 1 - v(A) + v(B)\big).$$
Fully true iff $v(B) \ge v(A)$; $A \to A$ always gets 1. Biconditional: $1 - |v(A) - v(B)|$. Negated conditional: $v(\neg(A \to B)) = \max(0,\ v(A) - v(B))$. Contrast the Strong Kleene conditional $\max(1 - v(A), v(B))$.
- **T1, modus ponens degree bound:** $v(B) \ge v(A) + v(A \to B) - 1$, with equality when $v(A \to B) < 1$.
- **Corollary:** if $v(A_0) = 1$ and each $v(A_{i-1} \to A_i) \ge 1 - \delta$, then $v(A_k) \ge \max(0,\ 1 - k\delta)$. Shortfalls add up.
- **Validity, three ways.** Degree-1 preservation: modus ponens valid, the sorites valid and unsound. Machina (1976): the conclusion never less true than the least true premise; modus ponens fails ($v(A) = v(A \to B) = 0.9$, $v(B) = 0.8$). Edgington's [verities](#verities) (1996), formally probabilities, not truth-functional: valid iff $1 - v(C) \le \sum_i (1 - v(P_i))$ for every assignment, $C$ the conclusion and $P_i$ the premises; T1 is that sum rule for modus ponens.
- **5.4's series.** Person $n$ ($n = 0, \dots, 200$) is 190.0 cm minus $n$ mm; $T_n$ "person $n$ is tall"; $v(T_n) = 1$ for $n \le 50$, $(150 - n)/100$ for $50 \le n \le 150$, 0 beyond. The 100 conditionals from person 50 to 150 get 0.99 (Strong Kleene, with persons 51 to 149 at $\tfrac12$, gives them $\tfrac12$); the tolerance principle gets 0.99. At person 100: "tall and not tall" and "tall or not tall" both get $\tfrac12$; $\neg\forall n\,(T_n \to T_{n+1})$ gets 0.01 while $\exists n\,(T_n \wedge \neg T_{n+1})$ gets $\tfrac12$.

*From* [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md)

### Formal: Supertruth, "definitely" and the margin for error

**True means true on every admissible sharpening: every classical law survives, bivalence does not.**

- **D1, [precisification](#precisification)** (Fine, 1975, adapting van Fraassen's 1966 supervaluations). A precisification makes every vague predicate sharp; it is admissible iff it keeps the clear cases and clear non-cases and respects [penumbral connections](#penumbral-connection).
- **D2, [supertruth](#supertruth):** $\varphi$ is supertrue iff true on every admissible precisification, superfalse iff false on every one, neither otherwise. [Supervaluationism](#supervaluationism) identifies truth with supertruth.
- **D3, ["definitely"](#definitely-operator):** $D\varphi$ is true on a precisification iff $\varphi$ is true on every admissible precisification: a box whose worlds are precisifications, each seeing all, so S5 ($DD\varphi \leftrightarrow D\varphi$).
- **T1 (settled).** Each precisification is a classical model, so every classical tautology is supertrue and every classically valid argument preserves supertruth; excluded middle $\varphi \vee \neg\varphi$ is supertrue.
- **T2 (settled).** Bivalence fails: a borderline $Fa$ is neither. So a disjunction can be supertrue with neither disjunct supertrue, and an existential with no supertrue instance. Excluded middle is an object-language schema; bivalence is a metalanguage claim.
- **T3 (settled).** For a series $a_1, \dots, a_k$ with $Fa_1$ supertrue, $Fa_k$ superfalse and a borderline case between: the tolerance premise $\forall n\,(Fa_n \to Fa_{n+1})$ is superfalse, $\exists n\,(Fa_n \wedge \neg Fa_{n+1})$ is supertrue with no supertrue instance, and each conditional premise is supertrue or neither, never superfalse.
- **Rules with $D$.** $\varphi \models D\varphi$, yet $\varphi \to D\varphi$ is not supertrue at a borderline case, and $\neg D\varphi$ is supertrue while $\neg\varphi$ is not: conditional proof, contraposition and reductio fail with $D$ in the language (Williamson, 1994).
- **Disquotation fails for supertruth.** At a borderline case, "'$p$' is supertrue iff $p$" is itself neither supertrue nor superfalse.
- **5.5's tile board.** $b_n$ "tile $n$ is blue", tiles 1 to 30, admissible cutoffs $12 \le c \le 19$ (on cutoff $c$, $b_n$ is true iff $n \le c$). $b_{16}$: neither; $b_{16} \vee \neg b_{16}$: supertrue; $b_{16} \wedge \neg b_{16}$: superfalse; $b_{16} \to b_{14}$: supertrue (penumbral); $\exists n \le 29\,(b_n \wedge \neg b_{n+1})$: supertrue; $\forall n \le 29\,(b_n \to b_{n+1})$: superfalse. Tiles 1 to 12 definitely blue, 13 to 19 borderline, 20 to 30 definitely not.
- **[Margin-for-error principle](#margin-for-error-principle)** (E4; [`epistemology` 1.3](../epistemology/lessons/01-03-why-knowledge.md)): if $x$ and $y$ differ by an increment on the deciding dimension and you know that $x$ is $F$, then $y$ is $F$. 5.5's toy, stipulating knowledge iff truth in every close case, with actual cutoff $c$ and margin $m$: you know $b_n$ iff $n \le c - m$, know $\neg b_n$ iff $n \ge c + m + 1$, and know that you know $b_n$ iff $n \le c - 2m$ (there $c = 15$, $m = 2$). The frame is reflexive, symmetric and not transitive (2.3).
- **Evans (1978)**, with $\nabla$ for "it is indeterminate whether": from $\nabla(a = b)$, $b$ has the property of being indeterminately identical to $a$; $a$ lacks it, since $\neg\nabla(a = a)$; so by [Leibniz's law](#leibnizs-law) $\neg(a = b)$, which Evans took to contradict the supposition.
- **Left to you.** Boss 5(c)'s series and its borderline range are not computed here.

*From* [5.5](lessons/05-05-supervaluationism-and-epistemicism.md); the margin frame is [2.3](lessons/02-03-which-logic-for-which-modality.md)'s

## Arguments

The canonical arguments as premise skeletons, at outline level and at the strength their defenders would recognize, numbered as the lessons number them (P1, P2, … ∴ C). Each names the premise the lesson finds weakest and the main reply, with what each side concedes; none says which side is right. Where a Boss part asks you to reconstruct an argument, find its suppressed premise, name the premise one side denies, or give a verdict, the entry stops and says so.

**Module 1: Sense, reference, and descriptions**

### Argument: Frege's case for sense

Frege, "Über Sinn und Bedeutung" (1892), pp. 25–26, as 1.1 reconstructs it: elimination, by modus tollens twice and disjunctive syllogism. $a$ and $b$ are names and "$a = b$" is true.

1. **P1, the datum.** A true "$a = a$" and a true "$a = b$" can differ in [cognitive value](#cognitive-value): one trivial, the other a discovery.
2. **P2, not the objects.** If an identity related only the objects its names designate, "$a = b$" would say what "$a = a$" says.
3. **P3, not the signs.** If "$a = b$" said that the signs designate the same thing (Frege's own *Begriffsschrift* §8 view, 1879), it would hold only through each sign's arbitrary link to its bearer, and express no proper knowledge.
4. **P4, exhaustion.** A difference in cognitive value must come from what the parts contribute: referents, signs as marks, or the way each sign presents its referent.
5. **∴ C.** A sign contributes, besides its referent, a mode of presentation, its [sense](#sense); "$a = b$" informs because the names share a reference and differ in sense.

*Weakest:* P4. [Millians](#millianism) (Salmon, 1986; Soames) deny that a difference in cognitive value is a difference in what words contribute: the two sentences express one proposition, and the difference lies in guises or pragmatics (3.4). *Reply:* explaining what understanding delivers is a theory of meaning's job. *Concessions:* the Millian, that cognitive value needs explaining somewhere; the Fregean, in Frege's own "Aristotle" footnote, that ordinary names have no single sense across speakers.

**Left to you.** Mill's account of identity sentences (*A System of Logic*, Book I, ch. V, §2), and the premise between it and Frege's opening, are Boss 3(c).

*Lessons:* [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

### Argument: Frege on belief reports and empty names

1.2's reconstruction of Frege (1892, pp. 28–33).

1. **F1, [substitutivity](#substitutivity-salva-veritate).** Co-referring parts swap without changing truth value (a theorem of first-order logic).
2. **P1, [compositionality](#compositionality) of reference.** A sentence's truth value is fixed by its parts' references.
3. **P2, the data.** A [belief report](#belief-report) "$A$ believes that …$a$…" can be true while "$A$ believes that …$b$…" is false, though $a = b$.
4. **P3, [indirect reference](#indirect-reference).** After "believes", "says" and their kin, a word refers to its customary sense, and the clause to a thought.
5. **∴ C1.** Inside the clause "$a$" and "$b$" do not co-refer, so P2 is no counterexample to F1.
6. **P4.** A name can have a sense and no reference (whether "Odysseus" has one is doubtful).
7. **P5, the gap rule.** A part with no reference leaves the whole without a truth value ([Weak Kleene](#weak-kleene)).
8. **∴ C2, C3.** "Odysseus was set ashore at Ithaca while sound asleep" has a sense and, if the name is empty, no truth value ([truth-value gap](#truth-value-gap)); "$A$ believes that Odysseus …" can still be true.
9. **P6 and ∴ C4.** Whatever refers does so through a sense; so each added attitude verb needs a further sense: the [hierarchy of senses](#hierarchy-of-senses).

*Weakest:* P3. Davidson's [semantic innocence](#semantic-innocence) ("On Saying That", 1969): words in a that-clause refer to what they always refer to; a pronoun outside the clause picks up the object. *Reply:* sameness of reference across the clause boundary is too theoretical for intuition to detect; Forbes makes the verb, not the name, sense-sensitive. *Concessions:* the Fregean owes an answer on the hierarchy; the innocent theorist owes another account of why the swap fails. *Further strain:* whose sense, the believer's or the reporter's ([variability in sense](#variability-in-sense), Richard 1988).

*Lessons:* [1.2](lessons/01-02-belief-reports-and-empty-names.md)

### Argument: Strawson against Russell, in outline

P. F. Strawson, "On Referring" (*Mind* 59, 1950), as 1.4 reconstructs it. The 1950 paper never writes "presuppose": it uses a special sense of "imply"; "presupposition" is his later term (*Introduction to Logical Theory*, 1952).

1. **S1.** A sentence, a use of it and an utterance of it are distinct: "the king of France is wise" under Louis XIV and under Louis XV is one sentence put to two uses ([sentence and use of a sentence](#sentence-and-use-of-a-sentence)).
2. **S2.** A sentence's meaning is the rules for using it to refer and to say something true or false; referring and being true or false belong to uses.
3. **S3.** Said seriously today, the sentence draws "There is no king of France", a reason why the question of truth does not arise, not "That's untrue".
4. **S4 and ∴ C.** What the use does with the existence of a king, and what Russell's analysis is therefore charged with: **left to you** (Boss 1(c) asks for the claim Russell asserts and Strawson denies, and what Strawson puts in its place).

*Weakest:* S3, and every premise resting on judgments of what is "false". Neale (1990) cites empty descriptions that sound plainly false; Strawson (1964) granted one himself. *Replies:* failure leaves a gap only when the description is what the sentence is about (Strawson 1964), or the presupposition is always there and only the verdicts shift (von Fintel, 2004). *Concessions:* the Russellian owes an account of the hesitation to say "false"; the Strawsonian, that failure does not always leave a gap. *Russell's reply* (1957): Strawson confused descriptions with occasion-relative words like "present". See [presupposition](#presupposition), [Formal: Entailment and presupposition](#formal-entailment-and-presupposition).

*Lessons:* [1.3](lessons/01-03-russells-theory-of-descriptions.md), [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md)

### Argument: Donnellan's referential use

Keith Donnellan, "Reference and Definite Descriptions" (*Philosophical Review*, 1966).

1. **D1.** Used attributively, a description states something about whoever is the $F$; used referentially, it is a tool for picking out whom the speaker means ("Smith's murderer is insane", said over the body, or of Jones at his trial).
2. **D2.** Which use is made depends on the speaker's intentions; the sentence is not semantically ambiguous.
3. **D3.** A referential use can pick out someone who does not fit ("Who is the man drinking a martini?", of a man holding water).
4. **∴ C.** Neither Russell nor Strawson fits referential uses: a speaker whose description fits no one may still have referred to the person she meant and said something true of her.

See [referential and attributive use](#referential-and-attributive-use).

*Lessons:* [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md)

### Argument: Kripke's reply to Donnellan

Saul Kripke, "Speaker's Reference and Semantic Reference" (*Midwest Studies in Philosophy*, 1977).

1. **K1.** The conventions of the language fix a designator's semantic referent (for a description, its unique satisfier); the speaker's referent is what she wishes to talk about and believes to be the semantic referent.
2. **K2.** Names show the same gap: two people take Smith, in the distance, for Jones ("Jones is raking the leaves"), and no one calls "Jones" ambiguous.
3. **K3.** In a [Russell language](#russell-language), stipulated to obey Russell's theory, speakers would still use "the man drinking a martini" of a man holding water.
4. **∴ C.** Donnellan's cases are speaker's reference, consistent with Russell's semantics. Kripke claimed only that they do not refute Russell.

See [speaker's reference and semantic reference](#speakers-reference-and-semantic-reference). 1.4's harbour report gives four verdicts on one set of facts (Russell: false; Strawson 1950: no statement; Donnellan: true of the person meant; Kripke: words false, what was meant true); they disagree only over which item is "what the report said".

**Left to you.** Boss 1(d)'s reception case, with a unique second satisfier, and its verdict between Donnellan and Kripke.

*Lessons:* [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

**Module 2: Modal logic**

### Argument: Logical omniscience

1. **P1.** Read through Kripke's clauses, any box is closed under K and necessitation, whatever $R$ is ([Formal: The system K](#formal-the-system-k)).
2. **P2.** Read as knowledge, that makes the knower know every tautology and whatever follows from what she knows.
3. **P3.** No one who knows a theory's axioms thereby knows all its theorems.
4. **∴ C.** K is not the logic of what finite agents explicitly know ([logical omniscience](#logical-omniscience)).

*Reply:* the box models implicit knowledge, the information a state carries, and explicit knowledge is implicit knowledge plus awareness (Fagin and Halpern, 1987); or add impossible worlds (Rantala 1975; Hintikka 1978). *Concessions:* the critic, that K is right for information content; the defender, that K is not the logic of explicit belief. The deontic twin: K plus a conflict of obligations yields "deontic explosion".

*Lessons:* [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md), [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Argument: Chandler's tolerance argument

Hugh Chandler, "Plantinga and the Contingently Possible" (*Analysis*, 1976), denying Plantinga's claim (*The Nature of Necessity*, 1974) that no state of affairs is only contingently possible; Nathan Salmon ("The Logic of What Might Have Been", 1989) argues that the logic of metaphysical modality is not S4. 2.3's skeleton:

1. **P1.** A bicycle could have originated with one part different.
2. **P2.** Had it done so, that same bicycle could have originated with one more part different, and so on.
3. **P3.** It could not have originated from wholly different parts.
4. **∴ C.** Some origin is possibly possible but not possible, so axiom 4 fails, and with it S5 ([tolerance argument](#tolerance-argument)).

*Replies* (2.3): a counterpart theorist lets the counterpart relation, which need not be transitive ([`metaphysics` 3.2](../metaphysics/lessons/03-02-what-possible-worlds-are.md)), absorb the chain; Dorr, Hawthorne and Yli-Vakkuri (*The Bounds of Possibility*, 2021) keep accessibility transitive by other means. The S5 defender's reply (2.2): metaphysical possibility is possibility simpliciter, so what is possible does not depend on which world is actual. *Concessions* (2.2): the S5 defender, that S5 is a thesis about $R$, not a gift of logic; the critic, that correspondence cannot show $R$ is non-transitive, and that, keeping B, 4 and 5 fall together.

**Left to you.** Which instance of $\Diamond\Diamond p \to \Diamond p$ the premises falsify on Boss 2(b)'s frame, whether the case also tells against B, and what follows for `philosophy-of-religion` 2.2's claim that the modal ontological argument goes through in B, are Boss 2(e).

*Lessons:* [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.3](lessons/02-03-which-logic-for-which-modality.md)

### Argument: Necessitism and its price

Williamson, *Modal Logic as Metaphysics* (2013), against the contingentist, as 2.4 sets it out.

1. **P1.** The simplest quantified modal logic (one domain, classical quantifier rules, S5) proves BF, CBF and $\Box\forall x\,\Box\exists y\,(y = x)$ ([Formal: Quantified modal models and the Barcan formula](#formal-quantified-modal-models-and-the-barcan-formula)).
2. **P2.** Simplicity and strength in a logic are evidence for it (abduction).
3. **∴ C.** Necessarily, everything is necessarily something: [necessitism](#necessitism-and-contingentism). A merely possible daughter is something now, not concrete but able to have been (contingently non-concrete).

*Weakest:* line 1 of the BF derivation, classical UI for a free variable inside $\Box$. The contingentist (Kripke, model-theoretically): when things come and go, a free $x$ can denote something absent from the world of evaluation, so the derivation assumes necessitism. *Reply:* the repaired logics are weaker and more complicated, and Kripke's model theory quantifies over every world's things anyway. *Concessions:* the contingentist, a more complicated logic owing a reading of its semantics; the necessitist, that "I might not have existed" must be reread as "I might not have been concrete". Marcus herself read BF as actualism.

**Left to you.** Boss 2(c) builds a BF countermodel and asks which side accepts it.

*Lessons:* [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md)

### Argument: Quine against quantified modal logic

Quine, "Notes on Existence and Necessity" (1943), "Reference and Modality" (1953), "Three Grades of Modal Involvement" (1953), *Word and Object* (1960).

1. **P1, opacity.** "9 = the number of planets" and "necessarily 9 > 7" are true, yet "necessarily the number of planets > 7" is false: substitutivity fails inside the box ([referential opacity](#referential-opacity)).
2. **P2.** No quantifying into opaque positions: a variable reaches a position only through its object ([quantifying in](#quantifying-in)).
3. **P3.** Quantifying in is intelligible only if an object, however specified, has some traits necessarily and others contingently ([Aristotelian essentialism](#aristotelian-essentialism)).
4. **P4.** Essentialism is unintelligible: the [mathematical cyclist](#mathematical-cyclist).
5. **∴ C.** Quantified modal logic, with variables over objects, is unintelligible or committed to an indefensible essentialism.

*Replies, each at a different premise:* Smullyan (1948) denies P1 as a claim about positions: descriptions take scope, names substitute ([Smullyan's reply](#smullyans-reply)); Church (1943) denies P2 (variables range over intensional entities); Lewis (1968) denies P3 (counterparts; essence relative to similarity); Marcus and Kripke deny P4. *Weakest point of the standard semantics' reply:* line 2 of the necessity-of-identity derivation, which assumes $\Box(x = z)$ expresses a property of whatever $z$ is assigned. *Concessions:* the defender, that the theorem is only as strong as the claim that de re predicates express properties of objects; the critic, either no quantifying in (Quine) or inconstant modal predicates (Lewis). See [Formal: The necessity of identity and counterpart translation](#formal-the-necessity-of-identity-and-counterpart-translation).

**Left to you.** `metaphysics` 3.1's planets case and Boss 2(d)'s *Waverley* model are not worked here.

*Lessons:* [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md)

**Module 3: Names and necessity**

### Argument: The cluster theory Kripke attacks

Kripke, *Naming and Necessity* (1970 lectures; 1972; 1980: 64–65, 71), theses about a speaker $A$ and a name "$X$", compressed. The classical theory is a one-member cluster ([descriptivism](#descriptivism), [cluster theory](#cluster-theory)).

1. **D1.** A cluster of properties $\varphi_1, \ldots, \varphi_n$ corresponds to "$X$": those $A$ believes $X$ has.
2. **D2.** $A$ believes that one, or some jointly, pick out one individual uniquely.
3. **D3.** If most, or a weighted most, are satisfied by exactly one object, that object is the referent.
4. **D4.** If the vote yields no unique object, "$X$" does not refer.
5. **D5.** $A$ knows a priori that if $X$ exists, $X$ has most of the $\varphi$s.
6. **D6.** That statement is necessary.
7. **(C)** The properties may not themselves presuppose the name's reference.

The [modal argument](#modal-argument) attacks D6; the [epistemic argument](#epistemic-argument) D5; the [semantic argument](#semantic-argument) D2–D4 and (C).

*Lessons:* [3.1](lessons/03-01-against-descriptivism.md)

### Argument: Kripke's modal argument

1. **P1.** "Aristotle might not have taught Alexander" is true.
2. **P2.** If "Aristotle" meant "the teacher of Alexander", P1 would say what the narrow-scope "the teacher of Alexander might not have taught Alexander" says, which is false at every world ([Formal: Descriptions under "might" and the actuality operator](#formal-descriptions-under-might-and-the-actuality-operator)).
3. **∴ C.** "Aristotle" does not mean the description; over the whole cluster, D6 fails.

*Weakest:* the hidden premise that a name and its descriptive meaning contribute the same thing under "might". Dummett (1973) and Stanley (1997) separate what a sentence asserts from what it contributes when embedded; [wide-scope descriptivism](#wide-scope-descriptivism) and [rigidified descriptions](#rigidified-description) answer the argument. *Reply* (Kripke's 1980 preface): no embedding is needed, since we evaluate the plain sentence at a counterfactual situation; Soames (2002) adds belief reports inside "might". *Concessions:* the descriptivist, that names are rigid; the Kripkean, that rigidity is compatible with descriptive content, so against the sophisticated replies the epistemic and semantic arguments carry the load.

**Left to you.** Boss 3(d) asks for the modal argument at full strength inside an assessment of two-dimensional semantics.

*Lessons:* [3.1](lessons/03-01-against-descriptivism.md)

### Argument: Kripke's epistemic and semantic arguments

**Epistemic (against D5).**

1. **P1.** If "Gödel" meant its cluster, "if Gödel existed, he proved incompleteness" would be knowable a priori by anyone who understands the name.
2. **P2.** It is not: it was learned from history, which could undo it.
3. **∴ C.** D5 fails. Rigidified descriptions do not escape it.

**Semantic (against D2–D4 and C).** Feynman (a speaker who knows only "a physicist" still refers: against D2); Gödel and Schmidt (the vote goes to Schmidt, yet "Gödel" names Gödel: against D3); Jonah (a real prophet who did none of the deeds: against D4); Einstein and relativity (circular descriptions: against C). **∴** What the speaker believes does not settle reference. Donnellan argued in parallel (1970).

*Reply:* [causal descriptivism](#causal-descriptivism) (Lewis's name, 1984; Kroon 1987; Jackson 1998): "whoever stands at the origin of my chain of uses of this name". *Objection:* it makes each speaker's assertion partly about her own use, and ordinary speakers hold no such description; Soames (2005): reading verdicts back as hidden descriptions makes descriptivism unfalsifiable. *Concession:* it concedes Kripke's account of what fixes reference (3.2).

*Lessons:* [3.1](lessons/03-01-against-descriptivism.md)

### Argument: The causal picture of reference

*Naming and Necessity*, Lecture II, as 3.2 reconstructs it. Kripke disclaimed necessary and sufficient conditions: a picture, not a theory.

1. **P1, [initial baptism](#initial-baptism).** A name is introduced by fixing its bearer, by pointing or by a reference-fixing description.
2. **P2, [reference-borrowing](#reference-borrowing).** A later speaker refers with the name if she intends to use it with the same reference as the speaker she learned it from.
3. **P3.** A speaker needs no identifying description, and her beliefs about the bearer may be false.
4. **∴ C.** A use of a name refers to whatever was baptized at the origin of the chain that leads to it ([causal-historical theory](#causal-historical-theory)).

*Weakest:* P2. The [Madagascar case](#madagascar-case) (Evans, 1973): the intention to co-refer held at every link, yet reference shifted from the mainland to the island. *Replies:* Kripke's override (a present intention to refer to the island beats the inherited one); or Marco Polo started a new name. Evans: a name refers to the dominant causal source of the information speakers associate with it. *Concessions:* the Kripkean, that P2 needs an override clause the picture does not state; Evans, that a body of information re-enters and "dominant" names no threshold. *Further strain:* the [qua problem](#qua-problem) (Devitt and Sterelny, 1987). Rigidity and the causal picture are independent claims.

*Lessons:* [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md)

### Argument: Twin Earth and the division of labor

Putnam, "The Meaning of 'Meaning'" (1975), as 3.3 sets it out.

1. **I.** (Assumed by the traditional theory.) Knowing a term's meaning is being in a certain psychological state.
2. **II.** Meaning, as intension, determines extension.
3. **Twin Earth.** In 1750 Oscar and his duplicate share a psychological state, yet "water" picks out H2O for one and XYZ for the other.
4. **∴** I and II cannot both hold; Putnam keeps II and drops I. A [natural-kind term](#natural-kind-term) applies to whatever is the same kind as *this* sample, so it picks out one kind at every world.
5. **Elm and beech.** Putnam's concepts of the two are the same, their extensions differ: experts settle what lay speakers' words apply to ([division of linguistic labor](#division-of-linguistic-labor)).

Twin Earth turns on the environment, elm and beech on the community; neither says meanings are *located* outside the head ([Twin Earth](#twin-earth)). *Putnam's brain in a vat* (1981): a lifelong vat-brain's "vat" refers to vat-images or impulses, so in its mouth "I am a brain in a vat" is false ([Putnam's brain-in-a-vat argument](#putnams-brain-in-a-vat-argument)). *Weakest* (for the necessity of "water is H2O"): every general term designates its own property everywhere (Schwartz, 2002), and the necessity needs an essentialist premise no theory of reference supplies (Salmon, 1979). *Reply:* semantics explains why a necessity grounded in the kind's nature is hidden from the armchair. *Concessions:* the semanticist, that the source is metaphysical; the critic, that given the premise rigidity explains the epistemic gap.

*Lessons:* [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md)

### Argument: The Millian's problem with belief reports

3.4's reconstruction.

1. **P1, [Millianism](#millianism).** A proper name's content, in any context, is its bearer; an indexical's is its referent.
2. **P2.** Compositionality of content: a that-clause's content is fixed by its parts' contents.
3. **P3.** "$A$ believes that $S$" is true at $c$ iff $A$ stands in the belief relation to $\chi_S(c)$.
4. **∴ C1.** Swapping co-referring names, or a name for a co-referring indexical, inside a belief report preserves truth value.
5. **P4, the data.** Competent speakers judge such swaps to change truth value, and the beliefs explain different actions.
6. **∴ C2.** Either the judgments in P4 mislead about truth, or P1, P2 or P3 is false.

*Who denies what:* Perry (1979) separates belief state from content ([essential indexical](#essential-indexical)); Salmon and Soames deny that P4 tracks truth ([guises](#guises), pragmatics); the [hidden-indexical theory](#hidden-indexical-theory) (Crimmins and Perry, 1989) denies P3; [neo-Fregeans](#neo-fregeanism) deny P1. *Weakest:* P4. *Objection* (after Schiffer, 1987): an implicature must be calculable, and ordinary speakers cannot calculate one from reports they think say different things. *Reply:* the information is conveyed uncalculated, or hearers take one content in two ways (Braun, 1998). *Concessions:* the Millian, that ordinary judgments about reports are systematically wrong; the Fregean, after Kripke, that the same judgments arise without the Millian premise.

*Lessons:* [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

### Argument: Kripke's Pierre

"A Puzzle about Belief" (1979), as 3.4 runs it ([Kripke's puzzle about belief](#kripkes-puzzle-about-belief)). Pierre, a monolingual French speaker, later learns English by immersion and never links "London" with "Londres".

1. **Disquotation.** Sincere, reflective assent to "Londres est jolie" shows belief: Pierre croit que Londres est jolie.
2. **Translation.** A good translation of a truth is a truth: Pierre believes that London is pretty.
3. **Disquotation again.** He assents to "London is not pretty": he believes that London is not pretty.
4. **Converse disquotation.** Sincere dissent from "London is pretty" shows non-belief, contradicting step 2.
5. **Rationality.** By 2 and 3 he believes a proposition and its negation, though no reflection could show him a mistake.

No co-referring names are swapped ([disquotation and translation principles](#disquotation-and-translation-principles)). *Responses:* Salmon rejects converse disquotation and weakens rationality to one guise; hidden-indexical theorists say the contradiction mixes contexts; Fregeans give the names different senses for Pierre, so translation fails at step 2. Kripke's Paderewski case removes translation. Kripke gives no verdict on whether Pierre believes that London is pretty.

**Left to you.** Whether two-dimensional intensions handle Pierre, and whom Kripke's moral tells against, are Boss 3(d).

*Lessons:* [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md)

**Module 4: Meaning, use, and communication**

### Argument: Davidson's case for truth-conditional semantics

"Theories of Meaning and Learnable Languages" (1965), "Truth and Meaning" (1967).

1. **P1.** Finite speakers master a language with infinitely many sentences.
2. **P2.** That is possible only if each sentence's meaning is fixed by finitely many features of its words and how they combine ([learnability](#learnability)).
3. **P3.** Assigning entities to words as meanings explains nothing about how they combine; recursive rules do the work.
4. **P4.** To know a sentence's truth condition is to know the core of its meaning, and a Tarski-style theory derives one for every sentence from finitely many axioms.
5. **∴ C.** A truth theory for a language, suitably constrained, can serve as its theory of meaning ([truth-conditional semantics](#truth-conditional-semantics)).

The constraint comes from [radical interpretation](#radical-interpretation) and the [principle of charity](#principle-of-charity) (1973). *Weakest:* P4 read as "knowing a true truth theory suffices". [Foster's problem](#fosters-problem) (1976): a theory can be true and extensionally adequate yet not interpretive; Larson and Segal's extension and information problems. *Reply:* the T-sentences that count are those reached by [canonical derivation](#canonical-derivation) (Davies, 1981) from a theory known to be confirmed by radical interpretation. *Concessions:* Davidson, that true T-sentences were never enough; the critic, that a theory known to have that standing would serve. *Open:* whether the standing can be stated without using "means". Dummett: a truth theory is only a modest theory ([modest and full-blooded theories](#modest-and-full-blooded-theories)).

**Left to you.** Boss 4(b) sets its own toy theory and deviant axioms; the card gives no verdict on what a laws requirement excludes.

*Lessons:* [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md)

### Argument: The challenge to the Augustinian picture

*Philosophical Investigations* §§1–43, reconstructed (Wittgenstein numbers no premises and claims to describe, not theorize).

1. **P1.** If the [Augustinian picture](#augustinian-picture) gave the essence of language, every word's meaning would be an object it names, learned by having it pointed out.
2. **P2.** Many words have a settled use and name nothing: numerals, "not", "hello", "stet" (the toolbox, §11).
3. **P3.** [Ostensive definition](#ostensive-definition) teaches a name only to someone who already knows what kind of move it makes (§§31–32).
4. **∴ C.** Naming is one move inside [language games](#language-game), not their foundation; for a large class of cases, though not all, meaning is use (§43) ([meaning as use](#meaning-as-use)).

*Weakest:* the step from "naming is not the whole story" to "meaning is use". *Objection* (from 4.1): use is only evidence for meaning; truth conditions explain which uses are correct and how new sentences are understood. *Reply:* [inferentialism](#inferentialism) makes use, as inferential role, compose and explain truth. *Concessions:* the use theorist owes an account of correct use (4.3); the truth-conditional theorist, that grasp of truth conditions must show in use.

*Lessons:* [4.2](lessons/04-02-meaning-as-use.md)

### Argument: The private language argument

*Investigations* §§243–315 (main attack §§244–271), reconstructed; Wittgenstein never called it an argument.

1. **L1.** A sign has a meaning only if there is a standard of correct use apart from its user's impression of correctness.
2. **L2.** A diarist who writes "S" for a recurring sensation (§258) can set that standard only by attending to the sensation while writing the sign.
3. **L3.** Nothing then separates using "S" correctly from using it as seems right to him; a check that cannot fail is no check.
4. **∴ C2.** "S" has been given no meaning; a language intelligible in principle only to its user is impossible.

The target is a language others *could not* understand, not a code, and not sensation talk. Whether L3 is a doubt about memory is disputed (Kenny denies it); Kripke (1982) reads the argument as a corollary of the sceptical solution ([private language argument](#private-language-argument)).

*Lessons:* [4.2](lessons/04-02-meaning-as-use.md), [4.3](lessons/04-03-the-rule-following-paradox.md)

### Argument: Inferentialism and tonk

Brandom (*Making It Explicit*, 1994; *Articulating Reasons*, 2000), Sellars the precursor.

1. **I1.** A sentence's content is its inferential role: what entitles one to assert it and what asserting it commits one to, material inferences included.
2. **I2.** Asserting undertakes a commitment and licenses hearers; speakers keep score of commitments and entitlements.
3. **∴ C3.** Truth comes after, as what good inferences preserve: 4.1's order of explanation reversed.

*Objection:* [tonk](#tonk) (Prior, 1960): if rules alone fix meaning, a connective with disjunction's introduction and conjunction's elimination has one, and everything follows from everything. *Replies:* truth first (Stevenson, 1961); [conservative extension](#conservative-extension) (Belnap, 1962); [harmony](#harmony) (Dummett 1973, after Gentzen and Prawitz). Tonk shows that not every rule set fixes a meaning, not that none does. *Open:* whether harmony smuggles truth conditions back. See [Formal: Tonk, conservativeness and harmony](#formal-tonk-conservativeness-and-harmony).

*Lessons:* [4.2](lessons/04-02-meaning-as-use.md)

### Argument: Kripke's sceptical argument, in outline

Kripke, *Wittgenstein on Rules and Private Language* (1982, ch. 2), offered as Wittgenstein's argument as it struck Kripke, endorsing neither it nor the solution ([Kripke's Wittgenstein](#kripkes-wittgenstein)). The target is §201's [rule-following paradox](#rule-following-paradox).

1. **K1, constitution.** If I meant plus by "+", some fact about me constitutes my meaning plus rather than [quus](#quus).
2. **K2, justification.** That fact must show how I am justified in answering 125 ([normativity of meaning](#normativity-of-meaning)).
3. **K3, finite record.** My whole history fits quus as well as plus, and any instruction can itself be read deviantly.
4. **K4, beyond the record.** Dispositions are descriptive, not normative; simplicity is only evidence; a primitive state is mysterious.
5. **∴ C1.** No fact constitutes my meaning plus rather than quus.
6. **K5, K6.** Then no fact settles what I mean by any word; and if meaning ascriptions answer to meaning facts ([classical realism](#classical-realism-about-meaning)),
7. **∴ C2.** no one means anything by any word.

The [sceptical solution](#sceptical-solution) (ch. 3) accepts C1 and denies K6, replacing truth conditions for meaning ascriptions with [assertability conditions](#assertability-conditions) and community agreement. *Replies:* [meaning primitivism](#meaning-primitivism) (McGinn, 1984; Boghossian, 1989); grasp without interpretation (McDowell, 1984; Baker and Hacker, 1984); anti-normativism against K2 (Hattiangadi, 2006; Glüer and Wikforss, 2009); the dispositional and naturalness replies are run in [`philosophy-of-mind` 5.2](../philosophy-of-mind/lessons/05-02-is-the-intellect-a-bodily-power.md). *Weakest:* K3–K4's assumption that any candidate fact must be read, and so can be misread. *Concessions:* the anti-sceptic, no reductive account of the grasp; Kripke's Wittgenstein, the brute fact of agreement.

**Left to you.** Boss 4(d) asks for the challenge at full strength against a truth theory's predicate axiom, and whether the sceptical solution leaves truth-conditional semantics standing.

*Lessons:* [4.3](lessons/04-03-the-rule-following-paradox.md)

### Argument: Grice's razor on "some"

4.4's reconstruction.

1. **P1.** Speakers who say "some" usually convey "not all", and the inference is calculable from Quantity, cancellable ("some, indeed all") and absent in [downward-entailing contexts](#downward-entailing-context).
2. **P2.** An inference with those marks is explained by implicature as well as by a second sense of the word.
3. **P3.** Other things equal, posit an implicature rather than a new sense (Grice's razor).
4. **∴ C.** "Some" means "at least one", and "not all" is a generalized conversational implicature ([scalar implicature](#scalar-implicature)).

*Weakest:* P2, which rests on calculability. *Objection:* the [symmetry problem](#symmetry-problem) (Kroch, 1972; Lepore and Stone, 2015): the same Quantity reasoning runs from "several", yet no one implicates "not several". *Reply* (Horn): only lexicalized scale-mates compete. *Concessions:* the Gricean, that the lexicon fixes which alternatives compete; the critic, that once the scale is given Quantity predicts the implicature, its cancellability and its disappearance under negation. Grammatical theories (Chierchia, Fox, Spector) compute it inside the sentence.

*Lessons:* [4.4](lessons/04-04-speaker-meaning-and-implicature.md)

### Argument: Quine's circle, in outline

"Two Dogmas of Empiricism" (1951), §§1–4. Logical truths are not the problem; the problem is the second class, made logical truths by putting synonyms for synonyms. Quine takes definition, interchangeability *salva veritate* and Carnap's semantical rules in turn, and finds that each explains [analyticity](#analyticity) only through notions that presuppose it: a "closed curve in space" ([circle of synonymy](#circle-of-synonymy)). 4.5 notes that the circle becomes a reason to drop the notion only with a further premise about when a family of notions counts as intelligible.

**Left to you.** The numbered reconstruction, the premise that turns the circle into rejection, and the premise Grice and Strawson ("In Defense of a Dogma", 1956) deny with the evidence they offer, are Boss 4(c).

*Lessons:* [4.5](lessons/04-05-analyticity-and-two-dogmas.md)

### Argument: The second dogma and the link

"Two Dogmas", §§5–6 ([two dogmas](#two-dogmas)).

1. **P1.** The verification theory of meaning: two statements are synonymous iff alike in method of confirmation; an analytic statement is the limiting case, confirmed no matter what.
2. **P2.** That account needs reductionism, at least attenuated: each statement alone has its own range of confirming and disconfirming experiences.
3. **P3.** Statements about the external world face experience as a "corporate body".
4. **P4.** So any statement can be held true come what may, and none is immune to revision, [logic included](#revisability-of-logic).
5. **∴ C.** Confirmation defines neither synonymy nor analyticity; the two dogmas are "at root identical".

*Weakest:* the step from P4 to C. Grice and Strawson grant that nothing is immune to revision and deny that this erases the line: one can give a statement up by admitting it false, or by changing a concept. *Quinean reply* (later pressed by Harman): no evidence separates a change of meaning from a change of belief. *Concessions:* the defender, that analyticity cannot underwrite unrevisability; the Quinean, that the difference between surprise and bewilderment is data holism must explain. The [web of belief](#web-of-belief) is the 1970 book's title; Quine's 1951 images are a fabric and a field of force. The revisability argument against the a priori is [`epistemology` 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md)'s.

*Lessons:* [4.5](lessons/04-05-analyticity-and-two-dogmas.md)

**Module 5: Truth, paradox, and vagueness**

### Argument: Tarski's theory as an analysis of truth

5.1's reconstruction of the philosophical claim (Tarski 1933, 1944: the "classical Aristotelian conception").

1. **P1.** Convention T captures the classical conception, Aristotle's in *Metaphysics* Γ 7 ([Aristotle's formula](#aristotles-formula)).
2. **P2.** Tarski's definition is formally correct and provably meets Convention T (the theorem part; undisputed).
3. **P3.** A formally correct definition that provably meets Convention T says what truth in $L$ is.
4. **∴ C.** Truth in $L$ has been explained in non-semantic terms, in the classical sense.

*Weakest:* P3. [Field's objection](#fields-objection) (1972): Tarski reduced truth to [primitive denotation](#primitive-denotation), stated as lists; a list of elements with their valences gets the extension right and explains nothing; denotation needs a physical (causal) account. *Replies:* the deflationist says the list or the T-schema is all there is (Field himself later, 1994); Davidson (1977): reference earns its place only through the whole theory's fit with what speakers hold true. *Concessions:* Field's side, that the recursive clauses are a genuine compositional achievement; Tarski's defenders, that the base clauses say nothing about why "$r$" denotes the Rhine. Carnap and Popper defended the theory; Davidson and Field (1972) read it as the core of a [correspondence theory](#correspondence-theory) without facts; Putnam judged it a failure as philosophy. Tarski "suggested" (1933) that everyday language is inconsistent; he did not prove it.

*Lessons:* [5.1](lessons/05-01-tarskis-theory-as-philosophy.md)

### Argument: The deflationist's shared case

5.2's reconstruction.

1. **P1.** Every instance of the [equivalence schema](#equivalence-schema) holds, its sides equivalent in a strong sense (same meaning, or necessarily and a priori).
2. **P2.** Beyond those uses, "true" does one job: it lets a finite sentence express an infinite conjunction or disjunction.
3. **P3.** Every explanation in which truth figures runs through the instances or uses "true" to generalize.
4. **P4.** A property whose instances hold for unrelated reasons has no nature for a theory to find (the shopping list).
5. **∴ C.** Nothing needs saying about truth beyond the instances and the generalizing role ([deflationism](#deflationism)).

The substantive rivals ([correspondence](#correspondence-theory), [coherence](#coherence-theory-of-truth), [pragmatist](#pragmatist-theory-of-truth)) deny P3 and P4. *Weakest:* P2, the [generalization problem](#generalization-problem) (Tarski 1935; Gupta 1993). *Reply:* add a principle of generality (Field's schematic reasoning; Horwich's rule), not a fact about truth. *Concessions:* the deflationist, that the theory is more than its instances; the critic, that the added principle posits no nature. *Further pressure:* the [conservativeness argument](#conservativeness-argument) (Shapiro, 1998; Ketland, 1999), answered by Field (1999); and Dummett (1959): T-sentences cannot both give meanings and explain "true".

**Left to you.** Whether a deflationist who accepts every instance of the T-schema is better or worse placed than the gap theorist against the strengthened liar is Boss 5(d).

*Lessons:* [5.2](lessons/05-02-deflationism.md)

### Argument: The liar

5.3's reconstruction. $\mathrm{Tr}$ is a truth predicate; $\ulcorner\varphi\urcorner$ names $\varphi$.

1. **P1, self-reference.** There is a sentence $L$ that is $\neg\mathrm{Tr}(\ulcorner L\urcorner)$.
2. **P2, [T-schema](#t-schema).** $\mathrm{Tr}(\ulcorner\varphi\urcorner) \leftrightarrow \varphi$ for every $\varphi$, including those containing $\mathrm{Tr}$.
3. **P3, classical logic.** $\varphi \vee \neg\varphi$, with the classical rules for $\neg$ and $\leftrightarrow$.
4. **C1.** $\mathrm{Tr}(\ulcorner L\urcorner) \wedge \neg\mathrm{Tr}(\ulcorner L\urcorner)$.
5. **P4, explosion.** From $\varphi$ and $\neg\varphi$ infer any $\psi$.
6. **∴ C2.** Every sentence follows.

P1 is safe (Gödel's construction). *Who denies what:* [Tarski's hierarchy](#tarskis-hierarchy) restricts P2 (Kripke's objection: ordinary truth talk has no levels, as with Dean and Nixon, and paradox can depend on the facts, as with Epimenides); Kripke's gaps deny P3 ([Kripke's fixed point](#kripkes-fixed-point)); Priest's [dialetheism](#dialetheism) denies P4 ([logic of paradox](#logic-of-paradox)). *Weakest:* P3 for sentences whose value depends only on talk of truth ([groundedness](#groundedness)). *Concessions:* the gap theorist, that a classical vocabulary survives outside the theory; the classical theorist, that a transparent self-applicable "true" is consistent.

*Lessons:* [5.3](lessons/05-03-the-liar-and-theories-of-truth.md)

### Argument: The strengthened liar, in outline

In every fixed point of Kripke's construction $L$ is not in the extension, so the theorist says that $L$ is not true, which is what $L$ seems to say ([strengthened liar](#strengthened-liar)). Each theory then meets a liar built from its own vocabulary: for the gap theory a "not true" that includes gaps, for Field's theory (2008) "not determinately true", for Priest a sentence that is "only false" ([revenge problem](#revenge-problem)). Whether that refutes a theory stays open in 5.3.

**Left to you.** Stating the revenge argument precisely for Boss 5(b)'s language, what Kripke's remark about the metalanguage concedes, and how the deflationist and the dialetheist fare, are Boss 5(d).

*Lessons:* [5.3](lessons/05-03-the-liar-and-theories-of-truth.md)

### Argument: The sorites

5.4's line of 201 men, person $n$ being 190.0 cm minus $n$ mm, $T_n$ "person $n$ is tall" ([sorites paradox](#sorites-paradox)).

1. **P1.** $T_0$.
2. **P2.** $T_n \to T_{n+1}$, for each $n = 0, \dots, 199$ (two hundred conditional premises).
3. **∴ C.** $T_{200}$, by 200 applications of modus ponens.

The quantified form replaces P2 by one [tolerance principle](#tolerance-principle), $\forall n\,(T_n \to T_{n+1})$ (named after Wright, 1975), and reaches $\forall n\,T_n$ by induction. Classically, denying tolerance asserts $\exists n\,(T_n \wedge \neg T_{n+1})$: a last tall man. *Responses:* three values (Körner, Tye: the middle conditionals get $\tfrac12$; valid and unsound); [degree theory](#degree-theory) (valid in the degree-1 sense, premises nearly true); Machina (modus ponens fails); Edgington's [verities](#verities) (classical logic kept); [supervaluationism](#supervaluationism) and [epistemicism](#epistemicism) (5.5). *Weakest* (for degrees): [artificial precision](#artificial-precision) (Keefe, 2000; Sainsbury). *Reply:* the numbers are a model, not a measurement (Cook, 2002). *Concessions:* the objector, that degrees capture a gradualness classical logic misses; the defender, that "0.99" is no fact about "tall". Chrysippus fell silent while the answers were still clear; Carneades: silence settles nothing.

*Lessons:* [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md)

### Argument: Epistemicism

Williamson, *Vagueness* (1994); Sorensen, *Blindspots* (1988).

1. **E1.** Classical logic and bivalence hold for vague language.
2. **E2.** So the tolerance premise is false, and exactly one conditional premise is false.
3. **E3.** Meaning supervenes on use, though no function from use to the line can be stated or computed.
4. **E4.** The [margin-for-error principle](#margin-for-error-principle): if $x$ and $y$ differ by an increment and you know that $x$ is $F$, then $y$ is $F$.
5. **∴ C.** The line exists and cannot be known; a borderline case is one too close to it to know. Higher-order vagueness is ignorance of ignorance.

*Weakest:* E3: use treats neighbouring cases alike, so nothing could break the tie. *Reply:* falsity is the default where nothing makes a sentence true; much meaning is acquired passively; no theory computes meaning from use. *Concession:* facts its own defenders call hard to believe. *For supervaluationism the weak point is D2:* supertruth does not disquote (Williamson); Keefe calls the anomalies the price of the best overall theory, and concedes a truth that does not disquote. *Evans* (1978) argues that identity is never vague, a premise both theories share ([Formal: Supertruth, "definitely" and the margin for error](#formal-supertruth-definitely-and-the-margin-for-error)).

**Left to you.** Boss 5(c) supervaluates its own series.

*Lessons:* [5.5](lessons/05-05-supervaluationism-and-epistemicism.md)

## Thinkers and texts

Alphabetical by surname (joint authors under the first named). The thesis column is the lessons' one-line version, not a verdict; the date column gives the works the lessons cite, not life dates. Modern works are paraphrased; the public-domain texts the Boss problems close-read (Russell 1905, Mill's *System of Logic*, Aristotle's *Metaphysics*) are named here, not answered.

| Who | When | Key work | One-line thesis as the lessons give it | Lessons |
|---|---|---|---|---|
| Aristotle | 4th c. BC | *Metaphysics* Γ 7, 1011b26–27 (tr. Ross, 1908) | the formula Tarski called the classical conception of truth; its close reading is Boss 5(a) | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| Augustine of Hippo | tr. Pusey, 1838 | *Confessions* I.8.13 | the passage the *Investigations* opens with, read as learning words as names of things pointed out (the "Augustinian picture" is Wittgenstein's label; Augustine's own sign theory differs) | [4.2](lessons/04-02-meaning-as-use.md) |
| J. L. Austin | 1950; 1962 | "Truth"; *How to Do Things with Words* (1955 William James Lectures) | utterances are acts: performatives misfire or are abused rather than false; locutionary, illocutionary and perlocutionary acts; truth as correspondence (1950) | [4.4](lessons/04-04-speaker-meaning-and-implicature.md), [5.2](lessons/05-02-deflationism.md) |
| Kent Bach | 1999 | "The Myth of Conventional Implicature" | alleged conventional implicatures belong to what is said | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| Gordon Baker and P. M. S. Hacker | 1984 | *Scepticism, Rules and Language* | Wittgenstein found scepticism nonsensical and meant §201's paradox as an absurdity to dissolve | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| Ruth C. Barcan (later Barcan Marcus) | 1946; 1947; 1948 | "A Functional Calculus of First Order Based on Strict Implication"; a necessity-of-identity theorem (second-order system); review endorsing Smullyan | first published quantified modal system, with BF as an axiom; proved the converse; read BF as actualism; essentialism is intelligible | [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md) |
| Nuel Belnap | 1962 | "Tonk, Plonk and Plink" | a new connective's rules must be a conservative extension (plus uniqueness); harmony is Dummett's term, not Belnap's | [4.2](lessons/04-02-meaning-as-use.md) |
| Max Black; Herbert Feigl | 1948; 1949 | English translations of Frege's 1892 paper | render *Bedeutung* as "reference" (Black, *Philosophical Review* 57) and "nominatum" (Feigl); the 1984 *Collected Papers* use "meaning" | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md) |
| Simon Blackburn | 1984 | "The Individual Strikes Back" | a community's dispositions are as finite as one person's, so the sceptical solution only moves the problem; higher-order attitudes for the Frege-Geach problem ([`ethics` 6.2](../ethics/lessons/06-02-expressivism.md)) | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md), [4.3](lessons/04-03-the-rule-following-paradox.md) |
| D. A. Bochvar | 1938 | three-valued calculus | the infectious gap tables later called Weak Kleene | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| Paul Boghossian | 1989; 1996 | "The Rule-Following Considerations"; "Analyticity Reconsidered" | meaning is normative; non-factualism about meaning is incoherent; gives up metaphysical analyticity and keeps the epistemic notion | [4.3](lessons/04-03-the-rule-following-paradox.md), [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| David Bourget and David Chalmers | 2023 | "Philosophers on Philosophy: The 2020 PhilPapers Survey" | survey figures, given for target faculty, each question with its own N (proper names 1,269; truth 1,643) | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [3.1](lessons/03-01-against-descriptivism.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md), [5.2](lessons/05-02-deflationism.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| Robert Brandom | 1994; 2000 | *Making It Explicit*; *Articulating Reasons* | inferentialism (his term; Sellars the precursor): content is inferential role, and truth comes after | [4.2](lessons/04-02-meaning-as-use.md) |
| David Braun | 1998 | — | Millian: hearers take a report's one content in two ways | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| Rudolf Carnap | 1947; 1952 | *Meaning and Necessity*; "Meaning Postulates" | L-truth by state descriptions; analyticity relative to meaning postulates (1952, a reply after "Two Dogmas"); objected to Frege's shifting of reference in oblique contexts (1947, §30) | [1.2](lessons/01-02-belief-reports-and-empty-names.md), [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| Héctor-Neri Castañeda | 1981 | — | the oddities of deontic logic (Ross's paradox) are pragmatic | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| David Chalmers | 2004 | "Epistemic Two-Dimensional Semantics" | Core Thesis: a sentence is a priori iff its primary intension is true at every scenario | [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| Hugh S. Chandler | 1976 | "Plantinga and the Contingently Possible" (*Analysis*) | tolerance of origin makes metaphysical accessibility non-transitive, against Plantinga's claim that no state of affairs is only contingently possible | [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| Hasok Chang | 2012 | *Is Water H2O?* | doubts that chemistry supplies the essentialist premise simply | [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| Chrysippus and Carneades (via Cicero) | 3rd and 2nd c. BC | reported in *Lucullus* §§93–94 | Chrysippus falls silent before "many" while the answers are still clear (SEP lists him among the epistemicists); Carneades: silence settles nothing | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| Alonzo Church | 1943; 1951 | review of Quine; a formalization of sense and denotation | variables range over intensional entities (against Quine's P2); accepted and formalized the full hierarchy of senses | [1.2](lessons/01-02-belief-reports-and-empty-names.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md) |
| Cicero | tr. Yonge, 1853 | *Lucullus* (*Academica* II) §§93–96 | reports the sorites as the Academics' weapon against Stoic dialectic, and treats the liar right after (in Reid's Latin, §95 puts it as a question) | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md), [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| Roy Cook | 2002 | "Vagueness and Mathematical Precision" | degrees of truth are a model, not a measurement | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| Mark Crimmins and John Perry | 1989 | "The Prince and the Phone Booth" | hidden-indexical theory: a belief report also concerns a way of thinking the context supplies | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| Donald Davidson | 1965; 1967; 1969; 1973; 1976; 1977; 1990; 1996 | "Theories of Meaning and Learnable Languages"; "Truth and Meaning"; "On Saying That"; "Radical Interpretation"; "Reply to Foster"; "The Structure and Content of Truth"; "The Folly of Trying to Define Truth" | a truth theory confirmed by radical interpretation serves as a theory of meaning; semantic innocence; read Tarski as correspondence without facts (1969); truth is basic, neither defined nor deflated | [1.2](lessons/01-02-belief-reports-and-empty-names.md), [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md), [5.1](lessons/05-01-tarskis-theory-as-philosophy.md), [5.2](lessons/05-02-deflationism.md) |
| Martin Davies | 1981 | — | canonical derivation: the T-sentences that count are those derived by unpacking clauses | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| Michael Devitt and Kim Sterelny | 1987 | *Language and Reality* | the qua problem; "principled basis" for completing an incomplete description (their term) | [1.3](lessons/01-03-russells-theory-of-descriptions.md), [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md) |
| Keith Donnellan | 1966; 1970; 1977 | "Reference and Definite Descriptions"; "Proper Names and Identifying Descriptions"; "The Contingent A Priori and Rigid Designators" | referential and attributive uses; a parallel case against descriptivism; a stipulation gives a priori knowledge only that a sentence expresses a truth | [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [3.1](lessons/03-01-against-descriptivism.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| Cian Dorr, John Hawthorne and Juhani Yli-Vakkuri | 2021 | *The Bounds of Possibility* | keep metaphysical accessibility transitive despite the tolerance data | [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| Michael Dummett | 1959; 1973; 1975 | "Truth"; *Frege: Philosophy of Language*; "What is a Theory of Meaning?" | T-sentences cannot both give meaning and explain truth; tried to make do with customary senses; the wide-scope reply to Kripke; "harmony"; modest vs full-blooded theories | [1.2](lessons/01-02-belief-reports-and-empty-names.md), [3.1](lessons/03-01-against-descriptivism.md), [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md), [4.2](lessons/04-02-meaning-as-use.md), [5.2](lessons/05-02-deflationism.md) |
| Dorothy Edgington | 1996 | "Vagueness by Degrees" | degrees as verities, formally probabilities: classical logic kept, truth-functionality dropped | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| Epimenides (traditional) | — | the line quoted in Titus 1:12 | "the Cretians are alway liars", said by a Cretan: paradoxical only if every other Cretan utterance is false (Kripke) | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| Eubulides of Miletus | 4th c. BC | via Diogenes Laertius, *Lives* II.108 (tr. Yonge, 1853) | credited with the Liar, the Sorites and the Bald one | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md), [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| Gareth Evans | 1973; 1978 | "The Causal Theory of Names"; "Can There Be Vague Objects?" | Madagascar: a name refers to the dominant causal source of the information associated with it; vague identity implies distinctness, so vagueness is in language; defended non-descriptive senses | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| Ronald Fagin and Joseph Halpern | 1987 | awareness logic | explicit knowledge is implicit knowledge plus awareness (against logical omniscience) | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| Ronald Fagin, Joseph Halpern, Yoram Moses and Moshe Vardi | 1995 | *Reasoning About Knowledge* | knowledge as S5, with accessibility as indistinguishability | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| Hartry Field | 1972; 1994; 1999; 2008 | "Tarski's Theory of Truth"; "Deflationist Views of Meaning and Content"; "Deflating the Conservativeness Argument"; *Saving Truth from Paradox* | Tarski reduced truth to primitive denotation, which needs a physical account; later a disquotationalist; a paracomplete theory with determinacy operators | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md), [5.2](lessons/05-02-deflationism.md), [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| Kit Fine | 1975 | "Vagueness, Truth and Logic" (*Synthese* 30) | supervaluation over admissible precisifications; penumbral connections | [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| Graeme Forbes | — | — | neo-Fregean: keeps semantic innocence by making the verb sense-sensitive; a report needs only a suitably similar sense | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| John Foster | 1976 | "Meaning and Truth Theory" | a truth theory can be true and extensionally adequate yet not interpretive | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| Gottlob Frege | 1879; 1884; 1892; 1918 | *Begriffsschrift*; *Die Grundlagen der Arithmetik*; "Über Sinn und Bedeutung" and "Über Begriff und Gegenstand"; "Der Gedanke" | a sign has a sense besides its reference; a sentence expresses a thought and refers to a truth value; indirect reference in attitude contexts; analytic means provable from logic and definitions; "it is true that" seems to add nothing to the thought | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [1.2](lessons/01-02-belief-reports-and-empty-names.md), [4.5](lessons/04-05-analyticity-and-two-dogmas.md), [5.2](lessons/05-02-deflationism.md) |
| Gerhard Gentzen; Dag Prawitz | 1934/35; 1965 | — | introductions as definitions (Gentzen); the inversion principle (Prawitz) | [4.2](lessons/04-02-meaning-as-use.md) |
| Allan Gibbard | 1975 | "Contingent Identity" | Lumpl and Goliath: one thing, identical only contingently | [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md) |
| Kathrin Glüer and Åsa Wikforss; Anandi Hattiangadi | 2009; 2006 | "Against Content Normativity"; "Is Meaning Normative?" | "correct" may only sort uses into true and false; no semantic ought follows | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| J. A. Goguen (after Zadeh) | 1969 | — | infinite-valued (fuzzy) logic for vague predicates | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| H. P. Grice | 1957; 1967 (published 1975) | "Meaning"; "Logic and Conversation" (William James Lectures) | meaning is an intention that works by being recognized; the cooperative principle and maxims; conversational implicature; Grice's razor | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| H. P. Grice and P. F. Strawson | 1956 | "In Defense of a Dogma" | defend the analytic-synthetic distinction against "Two Dogmas"; giving a statement up by changing a concept is compatible with its analyticity (their reply to §§1–4 is Boss 4(c)'s) | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| Dorothy Grover, Joseph Camp and Nuel Belnap | 1975 | "A Prosentential Theory of Truth" | "that is true" is a prosentence, not a predicate | [5.2](lessons/05-02-deflationism.md) |
| Anil Gupta | 1993 | — | the generalization problem: a theory of the concept must derive the generalizations its users accept a priori | [5.2](lessons/05-02-deflationism.md) |
| Gilbert Harman | 1996 | — | the epistemic notion of analyticity leans on the metaphysical one; no evidence separates a change of meaning from a change of belief | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| Hans Herzberger; Matti Eklund; Kevin Scharp | 1967; 2002; 2013 | — | whether a natural language can be inconsistent: Herzberger no; Eklund and Scharp take it seriously, Scharp proposing replacements for "true" | [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| Jaakko Hintikka | 1961; 1962; 1978 | *Knowledge and Belief* (1962) | relational semantics alongside Kripke; epistemic logic accepting KK and rejecting negative introspection; impossible worlds against logical omniscience (with Rantala, 1975) | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md), [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| Laurence Horn | 1972 | UCLA dissertation | scalar implicature; only lexicalized scale-mates compete | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| Paul Horwich | 1990; 1998 | *Truth*; *Meaning* | minimalism: the instances of the propositional schema, minus those generating the liar, are the whole theory; a descriptive use theory of meaning | [4.2](lessons/04-02-meaning-as-use.md), [5.2](lessons/05-02-deflationism.md) |
| Lloyd Humberstone | — | — | tonk's defect is not lacking a truth function but that only the all-true and all-false valuations respect both rules | [4.2](lessons/04-02-meaning-as-use.md) |
| David Hume | — | *Enquiry* §V, "Sceptical Solution of these Doubts" | the template Kripke's sceptical solution is named after | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| Frank Jackson | 1998 | *From Metaphysics to Ethics* | A- and C-intensions; causal descriptivism, with implicit descriptions read off verdicts on cases | [3.1](lessons/03-01-against-descriptivism.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| William James | 1907 | *Pragmatism* | truth as what proves useful in the long run | [5.2](lessons/05-02-deflationism.md) |
| H. H. Joachim; Brand Blanshard | 1906; later | — | coherence theory: truth is membership in one comprehensive coherent system | [5.2](lessons/05-02-deflationism.md) |
| Stig Kanger; Richard Montague | 1957; 1960 | — | relational semantics for modal logic, alongside Hintikka, Prior and Kripke | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| Immanuel Kant | — | *Critique of Pure Reason* (tr. Meiklejohn) | analytic as containment of predicate in subject concept (owned by [`modern-philosophy` 5.1](../modern-philosophy/lessons/05-01-the-critical-question.md)) | [4.5](lessons/04-05-analyticity-and-two-dogmas.md) |
| David Kaplan | 1977 (published 1989) | "Demonstratives" | character and content; indexicals are directly referential; "I am here now" is valid but contingent | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| Lauri Karttunen and Stanley Peters | 1979 | — | inferences like that from "managed" are conventional implicatures | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| Rosanna Keefe | 2000 | *Theories of Vagueness* | artificial precision against degree theories (ch. 4); supervaluationism as the best overall theory despite its anomalies | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| Anthony Kenny | — | — | the private language argument's key step is not a doubt about memory | [4.2](lessons/04-02-meaning-as-use.md) |
| Stephen Cole Kleene | 1952 | *Introduction to Metamathematics*, §64 | the strong three-valued tables | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| Stephan Körner; Michael Tye | 1959; 1994 | — | three-valued treatments of vague predicates: the sorites valid and unsound | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| Saul Kripke | 1959; 1963a; 1963b; 1965; 1970 (1972, 1980); 1971; 1975; 1977; 1979; 1982 | "A Completeness Theorem in Modal Logic"; "Semantical Analysis of Modal Logic I" (1963a); "Semantical Considerations on Modal Logic" (1963b); *Naming and Necessity*; "Identity and Necessity"; "Outline of a Theory of Truth"; "Speaker's Reference and Semantic Reference"; "A Puzzle about Belief"; *Wittgenstein on Rules and Private Language* | relational semantics and completeness system by system; varying domains; names are rigid, not descriptions, and refer through causal chains; the necessary a posteriori; the three-line necessity of identity; truth by least fixed point, groundedness; speaker's vs semantic reference; Pierre; the sceptical paradox, offered as Wittgenstein's | [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md), [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md), [3.1](lessons/03-01-against-descriptivism.md), [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md), [4.3](lessons/04-03-the-rule-following-paradox.md), [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| Frederick Kroon | 1987 | — | causal descriptivism | [3.1](lessons/03-01-against-descriptivism.md) |
| Richard Larson and Gabriel Segal | 1995 | *Knowledge of Meaning* | the extension and information problems for truth theories | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md) |
| G. W. Leibniz | tr. Latta, 1898 | *Monadology* §§33, 53; the formula "eadem sunt, quorum unum potest substitui alteri salva veritate" | sameness as substitutability with truth preserved; truths of reasoning necessary, truths of fact contingent ("true in all possible worlds" is a later gloss) | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [1.2](lessons/01-02-belief-reports-and-empty-names.md), [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md) |
| Ernie Lepore and Matthew Stone | 2015 | — | press the symmetry problem for scalar implicature (pressed since Kroch, 1972) | [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| C. I. Lewis | 1912; 1918; 1932 (with C. H. Langford) | *Mind* paper (1912); *A Survey of Symbolic Logic*; *Symbolic Logic* | strict implication; the systems S4 and S5 | [2.1](lessons/02-01-kripke-semantics-and-the-system-k.md), [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md) |
| David Lewis | 1968; 1971; 1983; 1984 | "Counterpart Theory and Quantified Modal Logic"; "Putnam's Paradox" | de re modality by counterparts, so identity can be contingent and Leibniz's law fails inside a box; named causal descriptivism; vagueness as semantic indecision | [2.3](lessons/02-03-which-logic-for-which-modality.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md), [3.1](lessons/03-01-against-descriptivism.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| Martin Löb | 1955 | — | Löb's theorem; the derivability conditions in his form | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| Zoltán Szabó; Peter Ludlow and Gabriel Segal | 2000; 2004 | — | "the" literally means "a", pragmatics supplying uniqueness | [1.3](lessons/01-03-russells-theory-of-descriptions.md) |
| Kenton Machina | 1976 | "Truth, Belief and Vagueness" | validity as never falling below the least true premise; modus ponens fails | [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| Robert L. Martin and Peter W. Woodruff | 1975 | — | the fixed-point construction, independently of Kripke | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| Kris McDaniel | 2017 | *The Fragmentation of Being* | ontological pluralism: one quantifier per mode of being | [1.3](lessons/01-03-russells-theory-of-descriptions.md) |
| John McDowell | 1977; 1984 | "Wittgenstein on Following a Rule" (1984) | non-descriptive senses for names; grasping a rule is not interpreting it, so the paradox dissolves | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md), [4.3](lessons/04-03-the-rule-following-paradox.md) |
| Colin McGinn | 1984 | *Wittgenstein on Meaning* | understanding is an ability: meaning primitivism | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| Alexius Meinong | — | — | as Russell reads him, every denoting phrase stands for an object, which need not subsist, at the price of the law of contradiction | [1.3](lessons/01-03-russells-theory-of-descriptions.md) |
| J. S. Mill | 8th ed. 1872 (Harper, 1882) | *A System of Logic*, Book I, ch. II, §5 | a proper name is non-connotative: it denotes its bearer and connotes no attribute; a forerunner of direct reference (whether he anticipates rigidity is left open) | [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md) |
| Stephen Neale | 1990 | *Descriptions* | incompleteness afflicts every quantifier, so context restricts domains and "the" does not refer; cites empty descriptions that sound plainly false | [1.3](lessons/01-03-russells-theory-of-descriptions.md), [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md) |
| Michael Nelson | 2002 | "Descriptivism Defended" | rigidified descriptivism (with Plantinga's world-indexed properties) | [3.1](lessons/03-01-against-descriptivism.md) |
| William Parry | 1939 | *Journal of Symbolic Logic* | S4 has exactly fourteen distinct modalities | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| Terence Parsons | 1981; 2000 | —; *Indeterminate Identity* | stop the hierarchy of senses at the second level; challenges Evans's inferences against vague identity | [1.2](lessons/01-02-belief-reports-and-empty-names.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| C. S. Peirce | 1878; 1902 | "How to Make Our Ideas Clear"; "Vague" (Baldwin's *Dictionary*, vol. II) | truth is the opinion fated to be agreed by all who investigate; vagueness is intrinsic indeterminacy, not the interpreter's ignorance | [5.2](lessons/05-02-deflationism.md), [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| John Perry | 1979 | "The Problem of the Essential Indexical" (*Noûs*) | belief states explain action, contents are what is believed: the essential indexical (the messy shopper) | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| Alvin Plantinga | 1974 | *The Nature of Necessity* | no state of affairs is only contingently possible (S5); world-indexed properties; "serious actualism" is his term | [2.3](lessons/02-03-which-logic-for-which-modality.md), [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md), [3.1](lessons/03-01-against-descriptivism.md) |
| Graham Priest | 1979; 1995 (2nd ed. 2002) | "The Logic of Paradox"; *Beyond the Limits of Thought* | dialetheism: the liar is a true contradiction; LP; the inclosure schema unites the semantic and set-theoretic paradoxes | [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| A. N. Prior | 1956; 1957; 1960 | "Modality and Quantification in S5"; *Time and Modality*; "The Runabout Inference-Ticket" | named the Barcan formula and proved it in quantified S5; system Q; tonk | [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md), [4.2](lessons/04-02-meaning-as-use.md) |
| Hilary Putnam | 1962; 1973; 1975; 1981; 1985–86 | "The Analytic and the Synthetic"; "Explanation and Reference"; "The Meaning of 'Meaning'"; *Reason, Truth and History* | one-criterion vs law-cluster terms; reference of theoretical terms survives theory change; meanings are not in the head (Twin Earth, the division of labor); a vat-brain's "I am a brain in a vat" is false; Tarski's theory fails as philosophy | [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md), [4.5](lessons/04-05-analyticity-and-two-dogmas.md), [5.1](lessons/05-01-tarskis-theory-as-philosophy.md) |
| W. V. Quine | 1943; 1951; 1953; 1956; 1960; 1970 | "Notes on Existence and Necessity"; "Two Dogmas of Empiricism"; "Reference and Modality" and "Three Grades of Modal Involvement"; "Quantifiers and Propositional Attitudes"; *Word and Object*; *Philosophy of Logic*; *The Web of Belief* (with Ullian, 1970) | quantifying into modal contexts is unintelligible or essentialist; no intelligible analytic-synthetic distinction, and confirmation is holistic; notional vs relational belief; radical translation; truth as disquotation | [1.2](lessons/01-02-belief-reports-and-empty-names.md), [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md), [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md), [4.5](lessons/04-05-analyticity-and-two-dogmas.md), [5.2](lessons/05-02-deflationism.md) |
| F. P. Ramsey | 1927 | "Facts and Propositions" | "it is true that Caesar was murdered" means no more than that Caesar was murdered; described propositions need a quantifier into sentence position ("redundancy theory" is a later label) | [5.2](lessons/05-02-deflationism.md) |
| Mark Richard | 1988 | — | the variability-in-sense problem for Fregean belief reports | [1.2](lessons/01-02-belief-reports-and-empty-names.md) |
| Alf Ross | 1941 | — | Ross's paradox: if you ought to post the letter, you ought to post it or burn it | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| Bertrand Russell | 1905; 1912; 1918; 1919; 1923; 1957 | "On Denoting"; *The Problems of Philosophy*; "The Philosophy of Logical Atomism"; *Introduction to Mathematical Philosophy*; "Vagueness"; "Mr. Strawson on Referring" | a definite description is a quantifier phrase with no meaning in isolation, and takes scope; ordinary proper names are disguised descriptions (in 1905 "Scott" is still a genuine name; the general thesis is 1910–11 and 1918); truth as correspondence to fact; all symbols are vague | [1.2](lessons/01-02-belief-reports-and-empty-names.md), [1.3](lessons/01-03-russells-theory-of-descriptions.md), [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [3.1](lessons/03-01-against-descriptivism.md), [5.2](lessons/05-02-deflationism.md), [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |
| Nathan Salmon | 1979; 1981; 1986; 1989 | "How Not to Derive Essentialism from the Theory of Reference"; *Reference and Essence*; *Frege's Puzzle*; "The Logic of What Might Have Been" | Millianism with guises (belief as three-place); persistent vs obstinate rigidity; the necessity of "water is H2O" needs an essentialist premise; the logic of metaphysical modality is not S4 | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [2.3](lessons/02-03-which-logic-for-which-modality.md), [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| Stephen Schiffer | 1972; 1987 | — | mutual knowledge of the intentions in place of ever more Gricean clauses; the calculability objection to Millian pragmatics | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md), [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| Stephen Schwartz | 2002 | — | if natural-kind terms are rigid, so is every general term, so rigidity cannot make "water is H2O" special | [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| John Searle | 1958; 1975 | "Proper Names"; "A Taxonomy of Illocutionary Acts" | the cluster theory of names; five classes of illocution | [3.1](lessons/03-01-against-descriptivism.md), [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| Krister Segerberg; Robert Solovay | 1971; 1976 | — | GL is complete for its frames (Segerberg) and for what PA proves about its own provability (Solovay) | [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| Stewart Shapiro; Jeffrey Ketland | 1998; 1999 | "Proof and Truth: Through Thick and Thin"; "Deflationism and Tarski's Paradise" | the conservativeness argument: a truth notion that proves new arithmetic is not thin | [5.2](lessons/05-02-deflationism.md) |
| Arthur Smullyan | 1948 | "Modality and Description" | modal substitution failures are scope ambiguities of descriptions | [2.5](lessons/02-05-de-re-modality-and-quines-challenge.md) |
| Scott Soames | 2002; 2005 | *Beyond Rigidity*; *Reference and Description* | Millian: a name contributes only its bearer, and speakers assert descriptively enriched propositions; against wide-scope and rigidified descriptivism; causal descriptivism is unfalsifiable | [1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [3.1](lessons/03-01-against-descriptivism.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md), [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| Roy Sorensen | 1988; 2001 | *Blindspots*; *Vagueness and Contradiction* | epistemicism; no truthmaker controls a borderline statement's truth value | [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| David Sosa | 2001 | — | wide-scope descriptivism | [3.1](lessons/03-01-against-descriptivism.md) |
| Robert Stalnaker | 1978; 2004 | "Assertion"; "Assertion Revisited" | the first two-dimensional matrices, read metasemantically; the diagonal proposition; pragmatic presupposition as common ground | [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md) |
| Jason Stanley; with Zoltán Szabó | 1997; 2000 | "Names and Rigid Designation"; "On Quantifier Domain Restriction" | what a sentence asserts vs what it contributes when embedded (developing Dummett); context restricts quantifier domains, even mid-sentence | [1.3](lessons/01-03-russells-theory-of-descriptions.md), [3.1](lessons/03-01-against-descriptivism.md) |
| J. T. Stevenson | 1961 | "Roundabout the Runabout Inference-Ticket" | connectives get their meanings from truth-functional statements in a metalanguage, not from permissive rules | [4.2](lessons/04-02-meaning-as-use.md) |
| P. F. Strawson | 1950; 1952; 1954; 1959; 1964 | "On Referring"; *Introduction to Logical Theory*; "A Reply to Mr. Sellars"; *Individuals* | meaning belongs to sentences, referring and truth to their uses; "presupposition" (his 1952 term; the 1950 paper speaks of a special sense of "imply"); the amended statement; a cluster-style account of names; the three-clause restatement of Grice (1964) | [1.3](lessons/01-03-russells-theory-of-descriptions.md), [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [3.1](lessons/03-01-against-descriptivism.md), [4.4](lessons/04-04-speaker-meaning-and-implicature.md) |
| Alfred Tarski | 1933 (German 1935, English 1956); 1944 | "The Concept of Truth in Formalized Languages"; "The Semantic Conception of Truth" | truth is definable for a formalized language in a stronger metalanguage, never in the language itself; Convention T; the instances are ω-incomplete; suggested that everyday language is inconsistent | [4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md), [5.1](lessons/05-01-tarskis-theory-as-philosophy.md), [5.2](lessons/05-02-deflationism.md), [5.3](lessons/05-03-the-liar-and-theories-of-truth.md) |
| William Taschek | 1988 | — | the Fregean answers Paderewski with two senses for one name | [3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md) |
| Bas van Fraassen | 1966 | — | supervaluations, first for empty names | [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| Kai von Fintel | 2004 | — | the presupposition is always there; only the truth-value verdicts shift | [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md) |
| Georg Henrik von Wright | 1951 | "Deontic Logic" (*Mind*); system M | founded deontic logic; M is the system T | [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.3](lessons/02-03-which-logic-for-which-modality.md) |
| Timothy Williamson | 1994; 2000; 2007; 2013 | *Vagueness*; *Knowledge and Its Limits*; *The Philosophy of Philosophy*; *Modal Logic as Metaphysics* | epistemicism with margins for error; against KK; against understanding-assent links; necessitism, defended abductively | [2.3](lessons/02-03-which-logic-for-which-modality.md), [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md), [4.5](lessons/04-05-analyticity-and-two-dogmas.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md) |
| George Wilson | — | — | separates the basic from the radical sceptical conclusion | [4.3](lessons/04-03-the-rule-following-paradox.md) |
| Ludwig Wittgenstein | 1922; 1953 | *Tractatus* (tr. Ogden); *Philosophical Investigations* | early: the name means the object; later: for a large class of words meaning is use; language games; family resemblance; no private language; the rule-following paradox (§201) | [4.2](lessons/04-02-meaning-as-use.md), [4.3](lessons/04-03-the-rule-following-paradox.md) |
| Crispin Wright | 1975 | — | named the tolerance principle; among those who read the sceptical solution as non-factualist | [4.3](lessons/04-03-the-rule-following-paradox.md), [5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md) |

## Assumed, not taught here

The lessons use these without deriving them, or hand them to the course that owns them. Each row states the fact as this course uses it, with the lessons that use it in parentheses, and links the owning lesson. Rows run by owning course: logic and mathematics, then computing and the sciences, then philosophy, theology and law. Logic cited this way is settled; where a sibling owns a philosophical dispute, this course states one position in it or only the bridge.

| Fact | Where it's taught |
|---|---|
| Truth tables and the values $T$ and $F$ (Frege's sentence references, the 0 and 1 corners of the three-valued and degree tables); the material conditional of 4.1's clause (C) (1.1, 2.1, 4.1, 5.4) | [mathematical-logic 1.2](../mathematical-logic/lessons/01-02-semantics-truth-tables.md) |
| Natural deduction and its introduction and elimination rules, ex falso; soundness and completeness as notions, and induction on proofs; refutation by one countermodel. Completeness is cited, never re-proved here (2.1, 2.2, 4.2, 5.3) | [mathematical-logic 1.4](../mathematical-logic/lessons/01-04-proof-system-completeness.md) |
| Substitution of a term for a free variable, $\varphi[x := t]$ (1.2) | [mathematical-logic 2.1](../mathematical-logic/lessons/02-01-quantifiers-syntax.md) |
| Structures, assignments and Tarski's satisfaction clauses, including the one-line clause for identity; 2.1 adds a world index, 2.4 a domain per world, 4.1 reads the clauses as meaning-giving and 5.1 as a definition of truth (1.1, 1.2, 1.4, 2.1, 2.4, 4.1, 5.1) | [mathematical-logic 2.2](../mathematical-logic/lessons/02-02-structures-satisfaction.md) |
| Translating English into first-order logic; quantifier order (the invalid move from $\forall\exists$ to $\exists\forall$, which the subtraction step repeats modally) (1.3, 2.1, 2.4) | [mathematical-logic 2.3](../mathematical-logic/lessons/02-03-translation-quantifier-order.md) |
| Soundness of first-order logic (5.2) | [mathematical-logic 2.4](../mathematical-logic/lessons/02-04-soundness-completeness-fol.md) |
| Russell's paradox; the liar's shape $Q \leftrightarrow \neg Q$ and the truth-teller's $Q \leftrightarrow Q$ (its P2); Frege's logic proved inconsistent (4.5, 5.3) | [mathematical-logic 3.1](../mathematical-logic/lessons/03-01-russells-paradox.md) |
| The abbreviation $\exists!$, "there is exactly one", which 1.3 expands (1.3) | [mathematical-logic 3.2](../mathematical-logic/lessons/03-02-extensionality-to-power-set.md) |
| Relation properties and preorders (2.1, 2.2) | [mathematical-logic 4.1](../mathematical-logic/lessons/04-01-relations-orderings-well-ordering.md) |
| Ordinals and transfinite iteration, for Kripke's construction in general (5.3) | [mathematical-logic 4.2](../mathematical-logic/lessons/04-02-ordinals-transfinite-induction.md) |
| Gödel numbering, $\mathsf{PA}$, the diagonal lemma (and its P3: why the lemma alone yields no $L \leftrightarrow \neg L$), Löb's theorem (Example 1), the first incompleteness theorem (2.3, 3.1, 5.1, 5.2) | [mathematical-logic 5.1](../mathematical-logic/lessons/05-01-incompleteness-first-theorem.md) |
| The second incompleteness theorem and the derivability conditions (stated here as GL's necessitation, K and 4); $\mathsf{PA}$ cannot prove $\operatorname{Con}(\mathsf{PA})$ (2.3, 5.2) | [mathematical-logic 5.2](../mathematical-logic/lessons/05-02-second-theorem-undecidability.md) |
| Reflexive, symmetric, transitive relations; equivalence relations and the partition theorem (why S5's equivalence and universal frames agree); a reflexive, symmetric, non-transitive relation is its P3 (2.1, 2.2, 2.4) | [discrete-mathematics 2.2](../discrete-mathematics/lessons/02-02-relations-equivalence-and-order.md) |
| Diagonalization and the halting problem: undefinability is the same diagonal argument with "true" for "accepts" (5.1, 5.3) | [theory-of-computation 4.1](../theory-of-computation/lessons/04-01-diagonalization-and-the-halting-problem.md) |
| Compositionality as a property of a semantics; least fixed points reached by iterating from total ignorance in an information order; `while true do skip` and its many fixed points (its P3) (1.1, 4.1, 5.3) | [programming-languages 2.3](../programming-languages/lessons/02-03-denotational-semantics-and-fixed-points.md) |
| Hoare triples and partial correctness: a loop that never halts satisfies $\{\mathsf{true}\}\,c\,\{\mathsf{false}\}$, the dead end's vacuous box (2.1) | [programming-languages 2.4](../programming-languages/lessons/02-04-hoare-logic-and-loop-invariants.md) |
| Referential transparency, lost once equals cannot be substituted for equals (Quine's term) (1.2, 2.5) | [programming-languages 6.2](../programming-languages/lessons/06-02-state-references-and-the-store.md) |
| Environments and closures, the model for Kaplan's character and content (3.4) | [programming-languages 6.1](../programming-languages/lessons/06-01-names-scope-and-closures.md) |
| Binding occurrences that later uses resolve back to, the model for a baptism (3.2) | [programming-languages 1.6](../programming-languages/lessons/01-06-name-resolution-and-the-semantic-phase.md) |
| Curry-Howard: an introduction followed by an elimination is a $\beta$-redex, the detour harmony removes (4.2) | [programming-languages 4.2](../programming-languages/lessons/04-02-type-checking-and-curry-howard.md) |
| Greatest fixed points of must-analyses, unlike Kripke's truth-teller case (5.3) | [programming-languages 7.3](../programming-languages/lessons/07-03-dataflow-analysis-as-a-fixed-point.md) |
| SQL's three-valued AND, OR, NOT with NULL: the Strong Kleene tables under an epistemic name, "unknown", which a gap does not share (5.3, 5.4) | [databases 1.3](../databases/lessons/01-03-sql-select-from-where.md) |
| Surrogate keys (like a Millian name) and natural keys (like a description) (3.2) | [databases 2.1](../databases/lessons/02-01-entity-relationship-modeling.md) |
| A cross-coupled latch, stable at 0 or 1 (the truth-teller in hardware); fed its own complement, it oscillates (the liar) (5.3) | [digital-logic 3.1](../digital-logic/lessons/03-01-latches-storage-of-one-bit.md) |
| The indistinguishability principle (S5 knowledge) (2.3) | [distributed-systems 1.1](../distributed-systems/lessons/01-01-why-distributed-systems-are-hard.md) |
| Two Generals: the impossibility of common knowledge (2.3) | [distributed-systems 1.3](../distributed-systems/lessons/01-03-rpc-and-delivery-semantics.md) |
| The failure detector $\Diamond P$, with $\Diamond$ read "eventually" (2.1) | [distributed-systems 3.2](../distributed-systems/lessons/03-02-failure-detectors-and-escaping-flp.md) |
| Byzantine fault tolerance, another use of indistinguishability (2.3) | [distributed-systems 4.5](../distributed-systems/lessons/04-05-byzantine-fault-tolerance.md) |
| No learner generalizes without an inductive bias (the opening of 4.3) (4.3) | [statistical-learning 1.4](../statistical-learning/lessons/01-04-no-free-lunch-and-inductive-bias.md) |
| A Gaussian mixture's responsibility is a probability, unlike a degree of truth (5.4) | [machine-learning 3.5](../machine-learning/lessons/03-05-gaussian-mixture-models.md) |
| Calibration is a fact about probabilities, never about degrees of truth (5.4) | [machine-learning 4.2](../machine-learning/lessons/04-02-classification-metrics.md) |
| The interpretive reading of representation theorems, and credence from preference, which Davidson's unified theory combines with radical interpretation (4.1) | [decision-theory 1.4](../decision-theory/lessons/01-04-what-a-representation-theorem-shows.md), [2.2](../decision-theory/lessons/02-02-probability-from-preference.md) |
| Wilkinson's continuum argument for fanaticism, a sorites in form (5.4) | [decision-theory 6.2](../decision-theory/lessons/06-02-fanaticism-and-tiny-probabilities.md) |
| Relativistic kinetic energy $(\gamma - 1)mc^2$, with $\gamma = 1/\sqrt{1 - v^2/c^2}$ (4.5) | [relativity 1.5](../relativity/lessons/01-05-four-vectors-momentum.md) |
| Charity in reconstruction, a norm for arguments whose words you understand, distinct from Davidson's interpretive charity; the amended statement chooses what a speaker meant in the same way (1.4, 4.1) | [philosophical-method 1.3](../philosophical-method/lessons/01-03-reconstruction-and-charity.md) |
| Argument forms: modus tollens, disjunctive syllogism (the form of Frege's argument) (1.1) | [philosophical-method 1.4](../philosophical-method/lessons/01-04-argument-forms-and-formal-fallacies.md) |
| Equivocation (lexical ambiguity, against scope ambiguity); the slippery slope, against the sorites (1.3, 1.4, 5.4) | [philosophical-method 2.3](../philosophical-method/lessons/02-03-informal-fallacies-and-when-they-arent.md) |
| Conceptual analysis; family resemblance as a method; what a definition is (4.2, 4.4, 4.5) | [philosophical-method 3.1](../philosophical-method/lessons/03-01-conceptual-analysis.md) |
| Distinctions, and the scholastic necessity of the consequent against necessity of the consequence (2.5) | [philosophical-method 3.2](../philosophical-method/lessons/03-02-distinctions-and-verbal-disputes.md) |
| Quine's criterion of ontological commitment and "nothing pegasizes"; whether "exists" has one meaning; Carnap's internal and external questions (1.2, 1.3, 4.5) | [metaphysics 1.1](../metaphysics/lessons/01-01-existence-and-ontological-commitment.md) |
| Universals: whether Frege's predicates referring to concepts commits him to them (1.1) | [metaphysics 1.3](../metaphysics/lessons/01-03-universals-the-realists-case.md) |
| The argument from vagueness for unrestricted composition, with its P4 (existence and identity are never vague); whether vagueness can be in the world, which 5.5 answers with Evans (5.4, 5.5) | [metaphysics 2.3](../metaphysics/lessons/02-03-hylomorphism-and-composition.md) |
| Origin essentialism (disputed); Fine's claim that essence is not modal (2.4, 2.5) | [metaphysics 2.4](../metaphysics/lessons/02-04-essence-and-grounding.md) |
| Existence as a first-order predicate (Frege, Kant), and the Fregean view that being an object is being in the domain (1.3, 2.4) | [metaphysics 2.5](../metaphysics/lessons/02-05-essence-and-existence.md) |
| Kinds of necessity; de re and de dicto with the number of planets and its two-world countermodel (also its Boss 3(c)), not re-set here; the necessary a posteriori, metaphysical side, and the misdescription move; the conceivability checklist (1.1, 1.3, 2.1, 2.3, 2.5, 3.1, 3.2, 3.3, 4.5) | [metaphysics 3.1](../metaphysics/lessons/03-01-kinds-of-necessity.md) |
| What possible worlds are (modal realism, ersatzism, counterpart theory as ontology, its T3 indexical "actual" and T4); "more things than there actually are" (2.1, 2.2, 2.3, 2.4, 2.5, 3.4) | [metaphysics 3.2](../metaphysics/lessons/03-02-what-possible-worlds-are.md) |
| Necessary existence and the subtraction argument; the existence predicate $Ex$ (2.4) | [metaphysics 3.3](../metaphysics/lessons/03-03-brute-facts-and-necessary-existence.md) |
| Finks and masks, which a dispositionalist adding "ideal conditions" needs (4.3) | [metaphysics 4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md) |
| The A-theory and B-theory; token-reflexive truth conditions for "now"; "the road is here" (3.4; tense in the Scope table also cites metaphysics 5.2) | [metaphysics 5.1](../metaphysics/lessons/05-01-the-a-theory-and-the-b-theory.md) |
| Leibniz's law and its warning about opaque contexts; the statue and the clay, constitution, the Ship of Theseus as a sorites; the Superman and Clark Kent pair (1.1, 1.2, 2.5, 3.4, 5.4) | [metaphysics 5.3](../metaphysics/lessons/05-03-coincidence-and-the-ship-of-theseus.md) |
| The transfer operator $N$ of the consequence argument, which fails agglomeration and so is not normal (2.3) | [metaphysics 6.1](../metaphysics/lessons/06-01-determinism-and-the-consequence-argument.md) |
| Every analysis of knowledge contains a belief report (1.2) | [epistemology 1.1](../epistemology/lessons/01-01-repairing-jtb.md) |
| Knowledge $K$ as a box; the KK principle; Williamson's margin-for-error argument against KK and the buoy case; safety applied to discrimination (2.2, 2.3, 5.5) | [epistemology 1.3](../epistemology/lessons/01-03-why-knowledge.md) |
| Internalism and externalism about evidence (2.3) | [epistemology 1.4](../epistemology/lessons/01-04-internalism-and-externalism.md) |
| Coherentism as a theory of justification, which need not claim there is one coherent system (5.2) | [epistemology 2.3](../epistemology/lessons/02-03-coherentism.md) |
| The brain in a vat and the closure argument; Putnam's semantic argument is stated in 3.3 (3.3) | [epistemology 3.1](../epistemology/lessons/03-01-the-closure-argument.md) |
| Wright's transmission-failure verdict on Putnam's argument (3.3) | [epistemology 3.3](../epistemology/lessons/03-03-moore-and-the-dogmatist.md) |
| Contextualism about "knows" and gradable adjectives as its model; MacFarlane's context of assessment; the warranted assertability manoeuvre (3.4, 4.4, 5.4) | [epistemology 3.4](../epistemology/lessons/03-04-contextualism-and-its-rivals.md) |
| A priori knowledge; the necessary a posteriori and contingent a priori as epistemic categories with their cases (the metre stick, "Julius", Carroll and Dodgson); Quine's web against the a priori; Boghossian's two analyticities; the revisability argument (its P2) (3.1, 3.3, 4.5) | [epistemology 4.1](../epistemology/lessons/04-01-a-priori-knowledge.md) |
| The knowledge argument and "old fact, new mode", which stretches "mode of presentation" to ways of thinking (1.1, 3.4) | [philosophy-of-mind 1.3](../philosophy-of-mind/lessons/01-03-the-knowledge-argument.md) |
| Kripke's argument against mind-brain identity; zombies; primary and secondary intension defined and the two-row table for "water" (3.1, 3.2, 3.3) | [philosophy-of-mind 1.4](../philosophy-of-mind/lessons/01-04-zombies-conceivability-and-kripke.md) |
| Place and Smart's "lightning" and "electric discharge" (sense and reference at work); acquaintance, the ground of logically proper names (1.1, 1.3) | [philosophy-of-mind 2.1](../philosophy-of-mind/lessons/02-01-behaviourism-and-the-identity-theory.md) |
| Charity, and the anomalism of the mental it grounds (4.1) | [philosophy-of-mind 2.3](../philosophy-of-mind/lessons/02-03-anomalous-monism-and-supervenience.md) |
| Propositional attitudes as attitudes to what a that-clause gives; the systematicity argument for a language of thought (1.2, 4.1) | [philosophy-of-mind 4.1](../philosophy-of-mind/lessons/04-01-intentionality-and-folk-psychology.md) |
| Natural meaning, the half of Grice's 1957 distinction not taught here; naturalizing content; inferential-role semantics for thought; the disjunction problem (4.2, 4.3, 4.4, 5.1) | [philosophy-of-mind 4.2](../philosophy-of-mind/lessons/04-02-naturalizing-content.md), [natural meaning](../philosophy-of-mind/reference.md#natural-meaning) |
| Content externalism (Twin Earth run on belief), narrow content, McKinsey's argument (1.1, 3.2, 3.3) | [philosophy-of-mind 4.3](../philosophy-of-mind/lessons/04-03-externalism-narrow-content-and-the-extended-mind.md) |
| Plus and quus against materialism, with the dispositional, naturalness and primitive-state replies and the finitude and error problems (4.3, 4.5) | [philosophy-of-mind 5.2](../philosophy-of-mind/lessons/05-02-is-the-intellect-a-bodily-power.md) |
| Whether a language model's words refer or mean (Mandelkern and Linzen, 2024) (3.1, 3.2, 4.2) | [philosophy-of-mind 6.3](../philosophy-of-mind/lessons/06-03-do-language-models-understand.md) |
| Goodman's grue, the inductive cousin of quus (4.3) | [philosophy-of-science 1.2](../philosophy-of-science/lessons/01-02-the-new-riddle-of-induction.md) |
| Duhem-Quine holism and underdetermination: P3 and P4 of the second dogma, about testing (4.5) | [philosophy-of-science 2.2](../philosophy-of-science/lessons/02-02-duhem-quine-and-underdetermination.md) |
| Kuhn, incommensurability and meaning variance; Scheffler's sense shifting while reference holds; Field's partial denotation; Davidson against conceptual schemes (3.1, 3.2, 4.1, 4.5) | [philosophy-of-science 2.4](../philosophy-of-science/lessons/02-04-kuhn-incommensurability-and-theory-choice.md) |
| Demarcation and family resemblance (4.2) | [philosophy-of-science 2.6](../philosophy-of-science/lessons/02-06-demarcation-after-popper.md) |
| The no-miracles argument and approximate truth, which deflationists read as generalization (5.2) | [philosophy-of-science 5.1](../philosophy-of-science/lessons/05-01-realism-and-the-no-miracles-argument.md) |
| Whether chemistry delivers "water is H2O" (Chang) (3.3) | [philosophy-of-science 5.2](../philosophy-of-science/lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| Van Fraassen's vague "observable": a condition on using a vague word, not a theory of vagueness (5.4) | [philosophy-of-science 5.4](../philosophy-of-science/lessons/05-04-constructive-empiricism-and-entity-realism.md) |
| Threshold deontology's 1,000 against 1,001 lives, a sorites in form (5.4) | [ethics 2.4](../ethics/lessons/02-04-constraints-and-options.md) |
| Prima facie duties, against SDL's ban on conflicting obligations (2.3) | [ethics 5.3](../ethics/lessons/05-03-pluralism-and-particularism.md) |
| Horgan and Timmons's moral twin earth (3.3) | [ethics 6.1](../ethics/lessons/06-01-moral-realism.md) |
| The Frege-Geach problem, stated, reconstructed and answered there as a demand for a compositional semantics, which 4.1 supplies without setting it; quasi-realism's minimal truth (4.1, 5.2) | [ethics 6.2](../ethics/lessons/06-02-expressivism.md) |
| Leibniz on necessary and contingent truths and the possible-worlds gloss; truths of reason (2.1, 4.5) | [modern-philosophy 2.3](../modern-philosophy/lessons/02-03-leibniz-sufficient-reason-and-monads.md) |
| Locke and Leibniz on "gold" and sort-names (3.3) | [modern-philosophy 3.2](../modern-philosophy/lessons/03-02-locke-qualities-substance-and-essence.md) |
| Hume's fork, sometimes read as a verification principle (4.5) | [modern-philosophy 4.1](../modern-philosophy/lessons/04-01-impressions-ideas-and-the-fork.md) |
| Hume's sceptical solution about induction, the template Kripke names (4.3) | [modern-philosophy 4.3](../modern-philosophy/lessons/04-03-induction-and-the-sceptical-solution.md) |
| Kant's analytic and synthetic (containment), and Quine's complaint that containment is metaphor (4.5) | [modern-philosophy 5.1](../modern-philosophy/lessons/05-01-the-critical-question.md) |
| The Academic sceptics against the Stoics, Cicero's setting for the sorites (5.4) | [ancient-medieval-philosophy 4.3](../ancient-medieval-philosophy/lessons/04-03-the-skeptics.md) |
| Augustine's own theory of signs (*On the Teacher*), not the "Augustinian picture" (4.2) | [ancient-medieval-philosophy 5.1](../ancient-medieval-philosophy/lessons/05-01-augustine-certainty-and-illumination.md) |
| Avicenna's necessary existent, which is not the modal "exists at every world" (2.4) | [ancient-medieval-philosophy 6.2](../ancient-medieval-philosophy/lessons/06-02-avicenna-essence-existence-and-the-necessary-existent.md) |
| Scotus's univocity of being (bridge only) (4.1) | [ancient-medieval-philosophy 8.2](../ancient-medieval-philosophy/lessons/08-02-scotus-the-univocity-of-being.md) |
| Husserl's equilateral and equiangular triangle; Føllesdal's reading of the noema as a Fregean sense (1.1) | [phenomenology-and-personalism 1.2](../phenomenology-and-personalism/lessons/01-02-the-anatomy-of-an-experience.md) |
| Twardowski's content and object, a cousin of sense without reference (1.2) | [phenomenology-and-personalism 1.3](../phenomenology-and-personalism/lessons/01-03-the-epoche-and-the-reductions.md) |
| A two-world countermodel with K and T and a universal $R$ (its P1) (2.1, 2.3) | [philosophy-of-religion 1.3](../philosophy-of-religion/lessons/01-03-omniscience-and-human-freedom.md) |
| The necessity of identity in the modal-collapse argument; Stump and Kretzmann's morning and evening star; the indexical way of grasping facts (1.1, 2.3, 2.5, 3.4) | [philosophy-of-religion 1.4](../philosophy-of-religion/lessons/01-04-eternity-immutability-and-simplicity.md) |
| Necessary existence as marking God off from everything else (2.4) | [philosophy-of-religion 2.1](../philosophy-of-religion/lessons/02-01-anselms-ontological-argument.md) |
| The modal ontological argument: its S5 step, the dual of axiom 5 derived syntactically, the claim that B suffices, "every world can see every world"; never run here (2.1, 2.2, 2.3, 2.4) | [philosophy-of-religion 2.2](../philosophy-of-religion/lessons/02-02-the-modal-ontological-argument.md) |
| Its Flashback's S5 countermodel to $\Diamond p \to \Diamond\Box p$, and the model where $p \to \Box p$ fails (2.1, 2.3) | [philosophy-of-religion 2.4](../philosophy-of-religion/lessons/02-04-cosmological-arguments-sufficient-reason.md) |
| "Ought implies can" as a premise of Kant's moral argument (2.3) | [philosophy-of-religion 3.3](../philosophy-of-religion/lessons/03-03-moral-arguments.md) |
| Meaning as use applied to religious language (Wittgensteinian fideism); "form of life" glossed as one practice (4.2) | [philosophy-of-religion 5.4](../philosophy-of-religion/lessons/05-04-fideism.md) |
| An argument that leans on the S5 laws (2.3) | [apologetics-foundations 2.1](../apologetics-foundations/lessons/02-01-assembling-the-case.md) |
| Whether Kripke's search for a meaning fact was exhaustive (4.3) | [apologetics-foundations 3.2](../apologetics-foundations/lessons/03-02-reason.md) |
| A sharp line of kinds over a smooth series of bodies, the shape epistemicism gives every vague predicate (5.4, 5.5) | [apologetics-foundations 4.2](../apologetics-foundations/lessons/04-02-evolution-design-and-the-human-person.md) |
| Truth as the conformity of intellect and thing (5.1, 5.2) | [thomistic-synthesis 2.4](../thomistic-synthesis/lessons/02-04-the-transcendentals.md) |
| The names of God: whether a name still refers when every description falls short (3.1, 4.5) | [thomistic-synthesis 4.3](../thomistic-synthesis/lessons/04-03-the-names-of-god.md) |
| Analogy: whether "wise" said of God and of Socrates needs one satisfaction axiom or two (bridge only; nothing about analogy is taught here) (4.1, 4.5) | [thomistic-synthesis 4.4](../thomistic-synthesis/lessons/04-04-analogy.md) |
| Lying, broad and strict mental reservation, and silence; this course supplies only the line between what is said and what is implicated, and takes no side (4.4) | [moral-theology 6.4](../moral-theology/lessons/06-04-truthfulness-and-the-lie.md), [mental reservation](../moral-theology/reference.md#mental-reservation) |
| Words that make a sacramental act what it is, and an actor's non-serious use (4.4) | [sacraments-and-liturgy 1.2](../sacraments-and-liturgy/lessons/01-02-matter-form-minister-intention.md) |
| What makes a promise bind (practice, assurance, authority); the promise as a move a practice defines (4.2, 4.4) | [philosophy-of-debt 1.2](../philosophy-of-debt/lessons/01-02-hume-promises-as-artificial-obligation.md), [1.3](../philosophy-of-debt/lessons/01-03-promising-after-hume.md) |
| Winch: understanding an action is grasping the rules that make it what it is (4.2) | [social-theory 1.3](../social-theory/lessons/01-03-understanding-webers-interpretive-method.md) |
| Cheap talk collapses to babbling when interests diverge (4.4) | [political-economy 1.4](../political-economy/lessons/01-04-persuasion-and-the-media.md) |
| Original public meaning against original intent: speaker meaning against sentence meaning, one level up (not yet built) (1.4, 4.4) | [constitutional-law](../constitutional-law/syllabus.md) 8.1 |
| Vague statutes and Hart's open texture; communicative content against legal effect (not yet built) (4.4, 5.4, 5.5) | [philosophy-of-law](../philosophy-of-law/syllabus.md) 3.1, 3.4 |

## Pitfalls

Each is a wrong belief and its correction, one line, grouped by theme. Many separate a settled result from the philosophical claim it is used for, or correct a misattribution the lessons fixed at source.

### Trap: Sense, reference and belief reports

- **"A sense is an idea, a speaker's way of picturing the thing."** It is objective and shareable: the image in the telescope, not on the retina; the noema read as a Fregean sense is Føllesdal's reading of Husserl, not Frege's doctrine. *([1.1](lessons/01-01-freges-puzzle-sense-and-reference.md))*
- **"Frege's puzzle is that '$a = b$' is a posteriori."** The medians identity is a theorem and still extends knowledge: informative is not a posteriori. *([1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md))*
- **"Frege separates names from descriptions."** His "proper name" (*Eigenname*) covers any expression for one object, "the intersection of $a$ and $b$" included; Russell pulls them apart. *([1.1](lessons/01-01-freges-puzzle-sense-and-reference.md), [1.3](lessons/01-03-russells-theory-of-descriptions.md))*
- **"Reference is something a speaker does, and *Bedeutung* has one English rendering."** Frege's reference relates an expression to its object (speaker's reference is 1.4's), and the renderings vary: Black's "reference" (1948, not 1952), Feigl's "nominatum" (1949), "meaning" (1984), Russell's "denotation". *([1.1](lessons/01-01-freges-puzzle-sense-and-reference.md))*
- **"Frege's paper opens with Hesperus and Phosphorus."** Its opening astronomical example is the same sun rising each morning; *Morgenstern* and *Abendstern* come in later, for the sense-reference distinction. *([1.1](lessons/01-01-freges-puzzle-sense-and-reference.md))*
- **"A failed swap inside 'believes that' refutes Leibniz's law."** Leibniz's law is about objects, substitutivity about expressions; Frege keeps both, since the names do not co-refer there. *([1.2](lessons/01-02-belief-reports-and-empty-names.md))*
- **"Indirect reference is quotation."** Quoted words refer to words, indirect ones to senses, which is why translation preserves an indirect report and destroys a quotation. *([1.2](lessons/01-02-belief-reports-and-empty-names.md))*
- **"Frege calls the Odysseus sentence false, meaningless or third-valued."** It expresses a thought and, if "Odysseus" names no one, lacks a truth value: an absence, not a third value; and Frege says only that it is doubtful whether the name refers. *([1.2](lessons/01-02-belief-reports-and-empty-names.md))*
- **"'Believes that' always blocks substitution."** Quine's relational reading lets it through. *([1.2](lessons/01-02-belief-reports-and-empty-names.md))*
- **"Everyone agreed the hierarchy of senses must be cut short."** Church accepted and formalized the infinite hierarchy; Dummett and Parsons tried to cut it short; Carnap objected to the shifting of reference itself. *([1.2](lessons/01-02-belief-reports-and-empty-names.md))*

### Trap: Descriptions, presupposition and speaker reference

- **"Russell calls every sentence with an empty description false."** Only a primary occurrence makes it false; with a secondary occurrence under "not" the sentence is true. *([1.3](lessons/01-03-russells-theory-of-descriptions.md))*
- **"On Russell's view 'the $F$ is $G$' presupposes that exactly one thing is $F$."** It entails it; presupposition is Strawson's alternative. *([1.3](lessons/01-03-russells-theory-of-descriptions.md), [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md))*
- **"Scope matters only when nothing is $F$."** Under "not" a uniqueness failure suffices; under "believes" the readings differ even when exactly one thing is $F$. *([1.3](lessons/01-03-russells-theory-of-descriptions.md))*
- **"Scope ambiguity is equivocation."** It is structural: no word has two meanings. *([1.3](lessons/01-03-russells-theory-of-descriptions.md))*
- **"'Wide-scope negation' and 'wide scope' name the same reading."** On this card "wide" and "narrow" always name the scope of the description. *([1.3](lessons/01-03-russells-theory-of-descriptions.md), [1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md))*
- **"In 1905 Russell held that ordinary proper names are disguised descriptions."** In "On Denoting" "Scott" is a genuine name and only names like "Apollo" are descriptions; the general thesis comes in 1910–11 and 1918, and "logically proper name" is the commentators' label. *([1.3](lessons/01-03-russells-theory-of-descriptions.md))*
- **"Russell writes 'the author of *Waverley* was Scott'."** "On Denoting" writes "Scott was the author of *Waverley*". *([1.3](lessons/01-03-russells-theory-of-descriptions.md))*
- **"A presupposition is whatever a speaker assumes."** 1.4's sense is semantic, a condition on a use's having a truth value; Stalnaker's pragmatic presupposition (common ground) is a third notion and can fail without a gap. *([1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md))*
- **"Strawson called 'The king of France is wise' meaningless."** He insisted it is significant; what lacks a truth value is a use of it. *([1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md))*
- **"'On Referring' (1950) says the use presupposes there is a king."** It speaks of a special sense of "imply"; "presupposition" is Strawson's term from 1952. *([1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md))*
- **"A referential use gives 'the' a second meaning."** Donnellan denied semantic ambiguity; the dispute is whether the person meant is the semantic referent or only the speaker's. *([1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md))*
- **"A truth-value gap is a third truth value."** It is the absence of a value; writing it $\tfrac12$ is bookkeeping, and how a gap spreads through connectives is a further choice. *([1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md), [5.3](lessons/05-03-the-liar-and-theories-of-truth.md))*
- **"Kripke's leaf-raker is Jones."** The man raking is Smith, mistaken for Jones; Donnellan's martini case is a question, "Who is the man drinking a martini?". *([1.4](lessons/01-04-strawson-donnellan-and-speaker-reference.md))*

### Trap: Kripke semantics and frames

- **"A formula true at every world of my model is a law of K."** That is truth in a model; validity on a frame quantifies over every valuation, and validity on a class over every frame. *([2.1](lessons/02-01-kripke-semantics-and-the-system-k.md), [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md))*
- **"The K axiom says that what is necessary is true."** That is T, which fails at a world that does not see itself; K holds on every frame, even at dead ends. *([2.1](lessons/02-01-kripke-semantics-and-the-system-k.md))*
- **"Necessitation licenses $p \to \Box p$."** It applies only to theorems: "valid" to "valid", never "true here" to "necessary here". *([2.1](lessons/02-01-kripke-semantics-and-the-system-k.md))*
- **"A dead end is harmless."** At a world that sees nothing every box is true, $\Box(p \wedge \neg p)$ included, and every diamond false. *([2.1](lessons/02-01-kripke-semantics-and-the-system-k.md))*
- **"A model where 4 is true everywhere shows the frame is transitive."** Correspondence concerns validity on the frame, under every valuation at once. *([2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md))*
- **"The correspondence table proves T, S4 and S5 complete."** Completeness is a separate theorem, and some systems are incomplete for the frames their axioms define. *([2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md))*
- **"A Euclidean relation is an equivalence relation."** Not without reflexivity, which is why S5 is T plus 5, not K plus 5. *([2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md))*
- **"S5 needs every world to see every world."** Equivalence frames validate exactly the same formulas. *([2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md))*
- **"With B kept, one can reject 4 and keep 5."** On symmetric frames transitivity and Euclideanness coincide, so 4 and 5 stand or fall together. *([2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md))*
- **"The system lattice runs K → T → D."** It runs K → D → T (T proves D, since reflexive frames are serial), then T → B and T → S4, B → S5 and S4 → S5. *([2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md))*
- **"Kripke's 1963 paper did both relational semantics and varying domains."** "Semantical Analysis of Modal Logic I" (1963a) is the propositional completeness paper; "Semantical Considerations on Modal Logic" (1963b) is the varying-domain one. *([2.1](lessons/02-01-kripke-semantics-and-the-system-k.md), [2.2](lessons/02-02-axioms-and-frames-t-s4-s5.md), [2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md))*

### Trap: Readings of the box

- **"D is 'ought implies can'."** It is "ought implies may", relating $O$ to its own dual $P$; "can" needs a second, alethic operator. *([2.3](lessons/02-03-which-logic-for-which-modality.md))*
- **"The S5 laws make 'possibly $p$' equivalent to $p$ or to 'necessarily $p$'."** Only strings ending in the same operator collapse; $\Diamond p$, $p$ and $\Box p$ stay distinct. *([2.3](lessons/02-03-which-logic-for-which-modality.md))*
- **"The second-level S4 laws need T."** $\Box\Diamond\Box\Diamond p \leftrightarrow \Box\Diamond p$ and its dual need only 4; the S5 laws already hold in KD45. *([2.3](lessons/02-03-which-logic-for-which-modality.md))*
- **"T fails for provability because PA might prove falsehoods."** Each instance of $\operatorname{Prov}_{\mathsf{PA}}(\ulcorner\varphi\urcorner) \to \varphi$ is true if PA is sound; what fails is that PA proves them, and adding T to GL is inconsistent. *([2.3](lessons/02-03-which-logic-for-which-modality.md))*
- **"A frame that validates an axiom puts it in the system."** A system's theorems are what is valid on every frame of its class: 2.3's lease frame validates 4 and 5, and SDL has neither. *([2.3](lessons/02-03-which-logic-for-which-modality.md))*
- **"'K', 'Ross' and 'S5' each name one thing."** K is an axiom, a system, `philosophy-of-religion` 2.2's derived rule and epistemology's knowledge operator; Alf Ross (the paradox, 1941) is not W. D. Ross (translator of the *Metaphysics*, 5.1). *([2.1](lessons/02-01-kripke-semantics-and-the-system-k.md), [2.3](lessons/02-03-which-logic-for-which-modality.md), [5.1](lessons/05-01-tarskis-theory-as-philosophy.md))*

### Trap: Quantified modal logic and de re modality

- **"The converse Barcan formula is the harmless half."** Its diamond form with atomic $F$ is true on every model only under the convention that atomic predicates hold only of existents; the box form fails even then (2.4's oak), as do instances like $\varphi := \neg\exists y\,(y = x)$. Say which form and which convention. *([2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md))*
- **"BF is a theorem of S5."** It is a theorem of S5 with classical quantifier rules, which presuppose one domain; an S5 frame with varying domains refutes it. *([2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md))*
- **"'There could have been more things than there actually are' conflicts with CBF."** It conflicts with BF, which forbids newcomers along $R$; "something could have failed to exist" is what conflicts with CBF. *([2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md))*
- **"A rigid designator for $a$ makes $a$ a necessary existent."** Rigidity is sameness of referent wherever the referent exists; whether it exists everywhere is a fact about domains. *([2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md), [3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md))*
- **"Actualist quantifiers make you a metaphysical actualist."** Marcus defended BF and one domain as actualism; Williamson reads the same logic as including contingently non-concrete things. *([2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md))*
- **"The subtraction argument's step is the Barcan formula."** It swaps $\forall$ with $\Diamond$, unlike kinds, and fails even with one domain. *([2.4](lessons/02-04-quantified-modal-logic-and-the-barcan-formula.md))*
- **"The necessity of identity makes every true identity sentence necessary."** It concerns objects: an identity with a non-rigid description is true and contingent, and it says nothing about necessary existence. *([2.5](lessons/02-05-de-re-modality-and-quines-challenge.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md))*
- **"De re vs de dicto is just necessity of the consequent vs of the consequence."** They share the scope point, but de re in Quine's sense needs a variable bound from outside the box. *([2.5](lessons/02-05-de-re-modality-and-quines-challenge.md))*
- **"Counterpart theory gives up Leibniz's law."** It keeps the law for every non-modal formula; what fails is substitution inside a box that gives each variable its own counterpart. *([2.5](lessons/02-05-de-re-modality-and-quines-challenge.md))*
- **"Smullyan's reply settles Quine's essentialism worry."** Its true, wide reading itself quantifies in. *([2.5](lessons/02-05-de-re-modality-and-quines-challenge.md))*
- **"The necessity-of-identity proof needs S5."** It uses no frame condition; its contested step is Leibniz's law inside the box. *([2.5](lessons/02-05-de-re-modality-and-quines-challenge.md))*

### Trap: Names, rigidity and the necessary a posteriori

- **"'Gödel might not have proved it' and 'Gödel might turn out not to have proved it' make one point."** The first is counterfactual (D6), the second about what we could learn (D5); rigidification answers only the first. *([3.1](lessons/03-01-against-descriptivism.md))*
- **"A name introduced by a description means it."** On Kripke's view "Jack the Ripper" or "Julius" only has its reference fixed by the description and is still rigid. *([3.1](lessons/03-01-against-descriptivism.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md))*
- **"Kripke showed that names have no sense."** The arguments target senses given by descriptions a speaker associates; a Fregean may posit non-descriptive senses. *([3.1](lessons/03-01-against-descriptivism.md))*
- **"Rigidified descriptions are Stanley's."** They are Plantinga's and Nelson's; Stanley develops Dummett's line on asserted content. *([3.1](lessons/03-01-against-descriptivism.md))*
- **"A true identity between two rigid names is true at every world."** On persistent rigidity it is true where its object exists; "every world" needs obstinate rigidity with identity holding of absent objects, outer-domain semantics, or constant domains. *([3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md), [3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md))*
- **"Obstinate rigidity is 'strong rigidity'."** Kripke's "strongly rigid" means a rigid designator of a necessary existent; persistent and obstinate are Salmon's terms. *([3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md))*
- **"Rigidity and the causal picture are one doctrine."** "The actual winner" is rigid with no baptism; a term grounded by pointing can be non-rigid. *([3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md))*
- **"The qua problem is Devitt's (1981)."** It is discussed under that name by Devitt and Sterelny (1987). *([3.2](lessons/03-02-rigid-designation-and-the-causal-picture.md))*
- **"The necessary a posteriori is an agreed class of propositions."** Kripke has one proposition; Chalmers and Jackson two semantic values; Stalnaker one content plus a diagonal; Salmon and Soames one a priori proposition plus an a posteriori fact about a sentence. *([3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md))*
- **"Twin Earth and elm and beech make one point."** One turns on the environment, the other on the community; neither says meanings are located outside the head. *([3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md))*
- **"The standard metre was the bar when Kripke lectured."** The bar stopped defining the metre in 1960; since 1983 the speed of light has. *([3.3](lessons/03-03-the-necessary-a-posteriori-and-natural-kinds.md))*

### Trap: Indexicals and Pierre

- **"'I am here now' is necessary because it cannot be said falsely."** It is valid and contingent: validity follows character, necessity content. *([3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md))*
- **"Character is Fregean sense renamed."** A character fixes nothing true or false until a context is supplied, and two speakers with one character say different things. *([3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md))*
- **"Pierre is Lois again."** Nothing is substituted: disquotation and translation do all the work. *([3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md))*
- **"'I' is ambiguous, since its referent varies."** One character, many contents; the context is the context of utterance, not MacFarlane's context of assessment. *([3.4](lessons/03-04-indexicals-and-the-return-of-freges-puzzle.md))*

### Trap: Truth theories and meaning as use

- **"Radical interpretation is Quine's radical translation renamed."** The evidence (holding true, tied to shared objects and events) and the product (a usable truth theory, not a manual) both differ. *([4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md))*
- **"A T-sentence pairs a sentence with a meaning."** It links a mentioned object-language sentence to a used metalanguage sentence; the biconditional is extensional, which is why Foster's problem arises. *([4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md), [5.1](lessons/05-01-tarskis-theory-as-philosophy.md))*
- **"Clause (C) commits truth-conditional semantics to the material conditional."** That is the toy's convention; any compositional clause handles embedding the same way. *([4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md))*
- **"Davidson's charity is charity in reconstruction."** His is a precondition of understanding anyone; `philosophical-method` 1.3's is a norm for arguments whose words you understand. *([4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md))*
- **"Dummett's modest vs full-blooded distinction is from 1991."** It dates from "What is a Theory of Meaning?" (1975). *([4.1](lessons/04-01-truth-conditional-semantics-and-davidson.md))*
- **"'Meaning is use' is Wittgenstein's theory of meaning."** §43 covers a large class of cases, not all, and he held that philosophy describes rather than explains. *([4.2](lessons/04-02-meaning-as-use.md))*
- **"A private language is a code only you know."** A code can be cracked and "pain" is public; the target is a language others could not understand. *([4.2](lessons/04-02-meaning-as-use.md))*
- **"A form of life is one practice."** The phrase occurs five times in the *Investigations*, and readers divide between a culture's way of living and behaviour all humans share. *([4.2](lessons/04-02-meaning-as-use.md))*
- **"Tonk refutes inferentialism."** It shows that not every set of rules fixes a meaning, not that none does. *([4.2](lessons/04-02-meaning-as-use.md))*
- **"Belnap answered tonk with harmony."** His reply is conservativeness (plus uniqueness); "harmony" is Dummett's term, from Gentzen and Prawitz. *([4.2](lessons/04-02-meaning-as-use.md))*
- **"The Augustinian picture is Augustine's theory of signs."** The label is Wittgenstein's; Augustine's own theory (*On the Teacher*) differs. *([4.2](lessons/04-02-meaning-as-use.md))*

### Trap: Rule-following

- **"The sceptic doubts whether you can know what you meant."** He grants ideal memory and access and claims there is nothing to know: the doubt is metaphysical. *([4.3](lessons/04-03-the-rule-following-paradox.md))*
- **"The sceptical solution defines 'plus' as whatever the community answers."** It replaces truth conditions for meaning ascriptions with assertability conditions; it never says an ascription is true because we agree. *([4.3](lessons/04-03-the-rule-following-paradox.md))*
- **"Kripke's Wittgenstein is Wittgenstein."** Kripke disclaims the identification; "Kripkenstein" is commentators' shorthand. *([4.3](lessons/04-03-the-rule-following-paradox.md))*
- **"The normativity condition and the error problem are one point."** An anti-normativist grants correct and incorrect uses, so error, and denies only that an ought follows. *([4.3](lessons/04-03-the-rule-following-paradox.md))*

### Trap: Implicature

- **"Any inference a speaker can withdraw is an implicature."** Cancellability tests only unembedded triggers: under negation a presupposition cancels too; an entailment is neither cancellable nor defeasible. *([4.4](lessons/04-04-speaker-meaning-and-implicature.md))*
- **"A conventional implicature is a conversational one grown habitual."** Grice's ("but", "therefore") come from word meaning: not calculable, not cancellable; a generalized conversational implicature is habitual and still cancellable. *([4.4](lessons/04-04-speaker-meaning-and-implicature.md))*
- **"Flouting a maxim is breaking it."** A flout is meant to be noticed and keeps the presumption of cooperation alive; the unnoticed violation is how one misleads. *([4.4](lessons/04-04-speaker-meaning-and-implicature.md))*
- **"Speaker meaning is a private act of will."** Clauses (ii) and (iii) make it public: a qualifier no hearer could recover is not meant. *([4.4](lessons/04-04-speaker-meaning-and-implicature.md))*
- **"'Some' means 'some but not all'."** It means at least one; "not all" is implicated, and "all" entails "some" only given a nonempty domain. *([4.4](lessons/04-04-speaker-meaning-and-implicature.md))*
- **"Bronston was convicted of perjury by implicature."** The Supreme Court reversed: a literally true but misleading answer was not perjury. *([4.4](lessons/04-04-speaker-meaning-and-implicature.md))*
- **"Grice's petrol and garage case illustrates Manner."** It illustrates Relation. *([4.4](lessons/04-04-speaker-meaning-and-implicature.md))*

### Trap: Analyticity

- **"'Analytic' always meant 'true in virtue of meaning'."** Kant's test is containment, Frege's concerns the proof that justifies, Carnap's is truth by a language's rules. *([4.5](lessons/04-05-analyticity-and-two-dogmas.md))*
- **"'Two Dogmas' calls our beliefs a web."** Its images are a man-made fabric and a field of force; "web of belief" is Quine and Ullian's 1970 title. *([4.5](lessons/04-05-analyticity-and-two-dogmas.md))*
- **"Showing a statement revisable shows it synthetic."** Grice and Strawson allow an analytic truth to be given up by changing a concept. *([4.5](lessons/04-05-analyticity-and-two-dogmas.md))*
- **"The circle is a fallacy of circular reasoning."** It is a circle of explanation; whether it is vicious turns on a contested premise about intelligibility. *([4.5](lessons/04-05-analyticity-and-two-dogmas.md))*
- **"Quine attacked Carnap's meaning postulates in 'Two Dogmas'."** "Meaning Postulates" (1952) is a reply after "Two Dogmas" (1951); Putnam's "The Analytic and the Synthetic" is 1962. *([4.5](lessons/04-05-analyticity-and-two-dogmas.md))*

### Trap: Tarski and deflationism

- **"A T-sentence is trivially circular."** Its left side mentions an object-language sentence and its right side uses the metalanguage. *([5.1](lessons/05-01-tarskis-theory-as-philosophy.md))*
- **"Convention T is a definition of truth."** It is a test a definition must pass, with two clauses: entail every T-sentence, and entail that only object-language sentences are true. *([5.1](lessons/05-01-tarskis-theory-as-philosophy.md))*
- **"Undefinability says truth is undefinable, or repeats incompleteness."** Truth for arithmetic is definable in a stronger metalanguage; the theorem concerns expressibility, not provability. *([5.1](lessons/05-01-tarskis-theory-as-philosophy.md))*
- **"Meeting Convention T makes a theory a correspondence theory."** The condition is neutral: an anti-realist can accept every T-sentence too. *([5.1](lessons/05-01-tarskis-theory-as-philosophy.md))*
- **"Tarski proved that natural language is inconsistent."** He suggested it (1933), and later spoke more mildly of languages with a specified structure. *([5.1](lessons/05-01-tarskis-theory-as-philosophy.md))*
- **"Field says Tarski got the extension wrong."** He grants the extension and the recursive clauses; his complaint is that the base clauses are lists that explain nothing. *([5.1](lessons/05-01-tarskis-theory-as-philosophy.md))*
- **"Deflationists deny that anything is true, or that truth matters."** They assert every instance and deny only that truth has a nature. *([5.2](lessons/05-02-deflationism.md))*
- **"Accepting the T-schema makes you a deflationist."** Every theory accepts it; deflationism is the claim that the instances exhaust truth. *([5.2](lessons/05-02-deflationism.md))*
- **"The deflationary theories are one theory."** They differ on the bearers: sentences (Quine, Field), propositions (Horwich), nothing named (prosententialists). *([5.2](lessons/05-02-deflationism.md))*
- **"The generalization problem shows some instance false."** Every instance of the generalization is provable; what fails is the step to "all". *([5.2](lessons/05-02-deflationism.md))*
- **"A deflationary truth theory plus induction proves Con(PA)."** The bare schema stays conservative even with extended induction; it is the compositional clauses plus that induction that prove it. *([5.2](lessons/05-02-deflationism.md))*
- **"Ramsey's is called the redundancy theory in his paper."** Ramsey never uses the word; "redundancy theory" is a later label. *([5.2](lessons/05-02-deflationism.md))*
- **"Coherence of justification is the coherence theory of truth."** The first (`epistemology` 2.3) need not claim there is one coherent system; the second (Joachim; Blanshard) does. *([5.2](lessons/05-02-deflationism.md))*

### Trap: The liar

- **"The gap is a third truth value."** It is the absence of one; SQL's "unknown" puts an epistemic name on the same tables; in LP the middle value is a status of its own, both true and false. *([5.3](lessons/05-03-the-liar-and-theories-of-truth.md))*
- **"'This sentence is false' and 'this sentence is not true' are one paradox."** Once gaps are allowed they come apart: in Strong Kleene $\neg\mathrm{Tr}$ expresses only "false". *([5.3](lessons/05-03-the-liar-and-theories-of-truth.md))*
- **"Self-reference makes a sentence paradoxical."** The truth-teller is self-referential and not paradoxical, 5.3's $e$ is paradoxical without self-reference, and Epimenides' line is paradoxical only if every other Cretan utterance is false. *([5.3](lessons/05-03-the-liar-and-theories-of-truth.md))*
- **"'Fixed point' means the same in 5.1 and 5.3."** The diagonal lemma's fixed point is a sentence; Kripke's is an interpretation of $\mathrm{Tr}$ the jump leaves unchanged. *([5.1](lessons/05-01-tarskis-theory-as-philosophy.md), [5.3](lessons/05-03-the-liar-and-theories-of-truth.md))*
- **"The least fixed point exists by Kleene's continuity theorem."** It exists by monotonicity, and in general needs transfinite stages. *([5.3](lessons/05-03-the-liar-and-theories-of-truth.md))*

### Trap: Vagueness

- **"A degree of truth is a probability."** Person 100's $\tfrac12$ survives knowing his height to the micron; Edgington's verities share probability's arithmetic, not its epistemic reading. *([5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md))*
- **"The three-valued $\tfrac12$ and the degree $\tfrac12$ are one thing."** They split on the conditional between neighbouring borderline cases: $\tfrac12$ in Strong Kleene, 0.99 or 1 in Łukasiewicz. *([5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md))*
- **"Vagueness is ambiguity or context-sensitivity."** Fixing sense and standard leaves the borderline cases, and a precisification sharpens a word the same way throughout a sentence. *([5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md), [5.5](lessons/05-05-supervaluationism-and-epistemicism.md))*
- **"The sorites is a slippery slope."** A slippery slope asserts a causal chain whole; the sorites is a classically valid argument whose every step seems true. *([5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md))*
- **"'A millimetre makes a small difference' solves the sorites."** Classically, denying tolerance asserts a last tall man. *([5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md))*
- **"'All representation is vague' is Peirce's."** It is Russell's (1923); Peirce (1902) defined vagueness as intrinsic indeterminacy, not ignorance. *([5.4](lessons/05-04-the-sorites-and-degrees-of-truth.md))*
- **"True, supertrue and known are rivals for one job."** On a borderline case the supervaluationist says neither; the epistemicist, true or false, unknowably. *([5.5](lessons/05-05-supervaluationism-and-epistemicism.md))*
- **"Excluded middle and bivalence are one principle."** Excluded middle is an object-language schema, bivalence a metalanguage claim: supervaluation keeps the first, Strong Kleene drops both, epistemicism keeps both. *([5.5](lessons/05-05-supervaluationism-and-epistemicism.md))*
- **"A supertrue 'there is a last blue tile' locates a line."** No tile is last on every precisification. *([5.5](lessons/05-05-supervaluationism-and-epistemicism.md))*
- **"Supervaluation keeps every classical rule."** It keeps the laws; with "definitely" in the language, conditional proof, contraposition and reductio fail. *([5.5](lessons/05-05-supervaluationism-and-epistemicism.md))*
- **"Evans concluded that vague identity is contradictory."** He concluded that a vague identity statement implies distinctness, a reductio of vague identity, and allowed vagueness in the language. *([5.5](lessons/05-05-supervaluationism-and-epistemicism.md))*
- **"The margin-for-error principle defines knowledge."** It states a necessary condition; 5.5's toy biconditional is a stipulation. *([5.5](lessons/05-05-supervaluationism-and-epistemicism.md))*

