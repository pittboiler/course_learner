# Political Philosophy · Lesson 5.1: Why democracy?

> ⏱ ~15 min · Module 5: Democracy and its foundations · Builds on: [1.1 The problem of political authority](01-01-the-problem-of-political-authority.md), [4.3 Perfectionism and the common good](04-03-perfectionism-and-the-common-good.md) · Unlocks: [5.2 Majority rule vs rights: judicial review](05-02-majority-rule-vs-rights-judicial-review.md), [5.3 Deliberative vs aggregative democracy](05-03-deliberative-vs-aggregative-democracy.md)

## Why this matters

Almost everyone now treats "it was decided democratically" as a reason to accept a decision. Why? Because democracies get better results? Because a crowd is wiser than its parts? Or because giving each person an equal say is simply what treating people as equals requires? The three answers stand or fall on different evidence, and the hardest modern challenge to democracy, the epistocrat's, hits some of them and misses the others. This lesson separates them and lets the challenger have its best shot.

## The idea

**Three ways to justify a procedure** ([instrumental, epistemic and intrinsic justifications](../reference.md#instrumental-epistemic-and-intrinsic-justifications)):

- **Instrumental.** Democracy is good because of what it produces: protection of interests, peace, accountable rulers. Amartya Sen's best-known version (*Development as Freedom*, 1999): he argued that substantial famines do not occur in functioning democracies with a relatively free press, because rulers who must face voters and newspapers cannot let a region starve unnoticed. *In words:* democracy is a tool, judged by its results.
- **Epistemic.** A special instrumental case. There is a correct answer to (some) political questions, independent of the vote, and democratic procedures are good at finding it. Condorcet's jury theorem (1785) is the sharpest form; Aristotle's summation argument, many partial views adding up to a better whole, is an older cousin ([`history-of-political-thought` 1.4](../../history-of-political-thought/lessons/01-04-aristotle-constitutions-citizens-and-the-polity.md) shows the two differ in mechanism).
- **Intrinsic (procedural).** Democracy is valuable in itself, whatever it produces, because an equal say is what equal standing looks like in collective decisions. Jeremy Waldron (*Law and Disagreement*, 1999) argued that majority rule respects each citizen as a holder of a view about what the community should do, giving each view the greatest equal weight compatible with reaching a decision. Thomas Christiano (*The Constitution of Equality*, 2008) argued that because citizens disagree about justice, are fallible, and are biased toward their own interests, the only way to treat people as equals *in a way each can see is being done* is an equal say: democracy realizes **[public equality](../reference.md#public-equality)**. *In words:* even a benevolent expert who chose well would wrong us by deciding for us.

Two of the three are hostages to empirical fact. The intrinsic view is not, which is its strength and also the epistocrat's target: if it is false, democracy must win on results.

**The challenger.** Plato's ship of state, where the passengers vote and the navigator is ignored, is the ancient version ([`history-of-political-thought` 1.2](../../history-of-political-thought/lessons/01-02-plato-against-democracy-and-the-second-best-city.md)); Mill's plural voting, extra votes for the educated, is the Victorian one ([`history-of-political-thought` 6.4](../../history-of-political-thought/lessons/06-04-mill-representative-government.md)). The modern one is Jason Brennan's [epistocracy](../reference.md#epistocracy) (*Against Democracy*, 2016). Brennan sorts voters into three types: hobbits (uninformed and uninterested), hooligans (informed but partisan fans who process evidence to suit their team), and vulcans (informed and impartial). Most voters, he argues on survey evidence, are hobbits or hooligans.

## The argument

**The jury theorem, stated.** A group votes by simple majority on a yes/no question with a correct answer. Each of $n$ voters ($n$ odd) is right with probability $p$, the same for all, and votes are **independent** given the truth. The probability that the majority is right is

$$P_n=\sum_{k=(n+1)/2}^{n}\binom{n}{k}p^k(1-p)^{n-k}.$$

*In words:* add up the chances of every outcome in which more than half vote correctly. **Theorem:** if $p>1/2$, $P_n$ rises toward 1 as $n$ grows; if $p<1/2$, it falls toward 0. The proof and its failures belong to [`social-choice`](../../social-choice/syllabus.md) (Module 5); here it is one premise in an argument ([Condorcet jury theorem](../reference.md#condorcet-jury-theorem)).

**Brennan's argument for epistocracy, reconstructed.**

- **P1 (Normative, the competence principle).** It is unjust to impose high-stakes decisions on people by force when those decisions are made incompetently or by an incompetent body.
- **P2 (Empirical).** Universal-suffrage electorates are frequently incompetent in this sense: most voters are hobbits or hooligans.
- **P3 (Empirical, comparative).** Some feasible epistocratic arrangement (restricted suffrage, plural votes, an expert veto) would decide more competently, without costs that outweigh the gain.
- **P4 (Normative).** An equal say has no intrinsic value weighty enough to override P1.
- **P5 (Normative, implicit).** If one arrangement decides more competently, it may rightly hold the power to decide.

∴ **C.** Where P3 holds, we should replace universal-suffrage democracy with that epistocracy.

*In words:* democracy is a hammer, not a portrait of our equality, and a better hammer should replace it. Note that Brennan is cautious about C: P3 is empirical, and he says it may turn out false.

**Where the argument is weakest.** P5, according to David Estlund (*Democratic Authority*, 2008). He grants that there are correct answers (the *truth tenet*) and that some people know them better (the *knowledge tenet*), and denies the *authority tenet*: that knowing better gives a right to rule. Moving from "you are the expert" to "you are my boss" is a fallacy; the step needs a justification. Estlund's standard is the **qualified acceptability requirement**: coercive authority needs a justification that every qualified (reasonable) point of view could accept. Then the **[demographic objection](../reference.md#demographic-objection)**: the knowledge-qualified group will over-represent some races, classes or regions, and a reasonable citizen could suspect that its members share biases that knowledge tests do not detect. Since that suspicion is not unreasonable, epistocracy fails the requirement even if the epistocrats really are more competent. Estlund's own view, [epistemic proceduralism](../reference.md#epistemic-proceduralism), says democracy has authority because it is better than random at getting things right *and* the best among procedures acceptable to all qualified views. The critic of Estlund replies that "qualified" is doing all the work: set the bar for reasonable suspicion low, and nothing passes, democracy included.

## The picture

![Chance that a majority is right against the number of voters on a log scale from 1 to 10000. With independent voters each right 55 percent of the time the curve rises from 0.55 toward 1; at 45 percent it falls from 0.45 toward 0. A dashed curve for voters right 55 percent of the time but exposed to a 10 percent chance of a shared error rises at first and then levels off at 0.9](assets/05-01-fig1.svg)

The jury theorem cuts both ways (blue up, red down), and correlation caps it (green). Dots mark $n=3, 11, 101$.

## Worked examples

**Example 1 (clean): the arithmetic and its assumptions.** Invented case: the town of Brask asks its citizens whether a dam is safe, a question with a fact of the matter. Each citizen is right with $p=0.55$.

With $n=3$, the majority is right if all three are right or exactly two are:

$$P_3=p^3+3p^2(1-p)=0.166375+0.408375=0.575.$$

From the script: $P_{11}=0.633$, $P_{101}=0.844$, $P_{1001}=0.9992$. With $p=0.45$ instead: $P_3=0.425$, $P_{11}=0.367$, $P_{101}=0.156$, $P_{1001}=0.0008$. A large electorate of slightly-worse-than-chance voters is almost certainly wrong.

Now relax independence. Suppose that with probability $0.1$ a confident but false engineering report reaches every citizen, dropping everyone's competence to $0.45$; otherwise it is $0.55$. Each voter's average competence is $0.1(0.45)+0.9(0.55)=0.54$, still above a half. But for large $n$ the majority is almost surely right in the good world and almost surely wrong in the bad one, so

$$P_\infty=0.9(1)+0.1(0)=0.9.$$

At $n=1001$ the script gives $0.899$, against $0.994$ for independent voters with $p=0.54$. Shared information sources are the rule in politics, so this is not a curiosity.

So the epistemic argument needs three premises, each a different kind of claim: a correct answer exists (*conceptual and normative*: is "the best tax policy" true or false the way "the dam is safe" is?); competence above a half (*empirical*: Brennan's P2 denies it); independence (*empirical*). The theorem itself is just arithmetic.

**Example 2 (hard): a competence exam.** Invented case: the Republic of Varden proposes that every adult keep one vote, and anyone who passes a 30-question test of basic political facts get a second.

*Brennan's view.* The test is a crude filter for vulcans; it counts in its favour if outcomes improve (P3). Whether they would is an empirical question his view leaves open. Equal standing (P4) gives no reason against it.

*Estlund's view.* Grant that test-passers know more. Suppose (invented) the pass rate is 70 percent in the capital and 35 percent in the rural east. A reasonable eastern citizen could suspect that capital-dwellers share blind spots about rural life that no fact test measures. That suspicion is not unreasonable, so the scheme fails qualified acceptability, whether or not the suspicion is true.

*Christiano's view.* The second vote publicly declares that some citizens' judgment counts for more. That wrongs the others even if outcomes improve and even if pass rates were equal everywhere.

*Where it stops.* Change the case so pass rates are identical across every group. The demographic objection loses its foothold (Brennan's own reply is to control for demographics), while Christiano's objection is untouched. Which objection you lean on decides whether better test design could ever answer you.

## Watch out

- **You might think that if democracy tracks the truth, citizens must obey its verdicts, but actually that is Estlund's expert/boss fallacy turned on the majority.** Reliability is a reason to *believe* a verdict, not a source of [authority or obligation](../reference.md#power-legitimacy-authority-obligation). Any of the three justifications might show democracy is *justified*; legitimacy, authority and a duty to obey each need a further step (1.1's vocabulary, and Raz's [service conception](../reference.md#service-conception-of-authority) is one attempt at that step).
- **You might think the jury theorem shows that big electorates are wise, but actually it is conditional.** Its conclusion needs $p>1/2$ and independence, both empirical. Where they fail, the same arithmetic proves that big electorates are reliably wrong.
- **You might think an intrinsic justification makes every majority decision legitimate, but actually its defenders limit it.** Christiano argues democratic authority ends where a decision violates public equality itself (stripping some citizens of basic rights, say). Where those limits sit, and who enforces them, is [5.2](05-02-majority-rule-vs-rights-judicial-review.md).

## One-liner

> Democracy can be defended by its results, by its accuracy or by what an equal say expresses; the epistocrat attacks the first two, and Estlund answers that knowing better is not the same as having the right to rule.

## Problems

**P1 (🟢) *(Formal (a)-(c) · Exegetical (d).)*** Invented case: a five-member inspection panel in Brask votes by majority on whether a bridge is sound. (a) Each member is right with $p=0.7$, independently. Find the majority's accuracy for a three-member panel and for the five-member panel, showing the terms. (b) Find the five-member panel's accuracy if $p=0.3$. (c) Now a whole town votes. With probability $0.25$ a misleading briefing reaches everyone and each voter's competence is $0.4$; otherwise it is $0.7$. Find each voter's average competence, and the majority's accuracy as the town grows very large. (d) In one sentence, name the jury-theorem assumption (c) breaks and why accuracy stalls.

**P2 (🟡) *(Exegetical (a)-(b).)*** Diagnose. An **invented** speech by a delegate to Varden's constitutional convention, not the words of any real person:

> (i) "A government that must face the voters and a free press cannot let a province starve in silence."
> (ii) "A thousand ordinary citizens, each a little better than a coin toss, will together judge rightly far more often than any council of experts."
> (iii) "Even if experts would legislate better, to give one citizen a vote and deny it to another is to declare in public that one counts for less."
> (iv) "And since the majority is so reliable, every citizen who voted against a law is thereby bound to obey it."

(a) Classify (i)-(iii) as instrumental, epistemic or intrinsic, one line each, naming the extra premise (ii) silently needs. (b) What is wrong with (iv)? Two sentences, using 1.1's vocabulary.

**P3 (🔴, optional) *(Evaluative.)*** Invented proposal: Varden's Office of Informed Preferences surveys every citizen on policy, political knowledge and demographics, then estimates what the electorate *would* choose if everyone knew as much as the top scorers, holding each person's demographics fixed. The legislature must follow the estimate. Steelman the demographic objection against this proposal, then reply for the epistocrat. 150 words or fewer in total. Any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)-(c) — strict · Exegetical (d) — strict)*

(a) Three members: $0.7^3+3(0.7^2)(0.3)=0.343+0.441=0.784$. Five members: the majority is right with 3, 4 or 5 correct:

$$\tbinom{5}{3}0.7^3\,0.3^2+\tbinom{5}{4}0.7^4\,0.3+0.7^5$$

$$=0.3087+0.36015+0.16807=0.83692.$$

(b) With $p=0.3$, the majority is right only if 3 or more of 5 are right, which has the same probability as 3 or more being *wrong* when $p=0.7$: $1-0.83692=0.16308$.

(c) Average competence: $0.25(0.4)+0.75(0.7)=0.1+0.525=0.625$. As $n$ grows, the majority is almost surely right in the good world (prob. $0.75$) and almost surely wrong in the bad one (prob. $0.25$), so accuracy tends to $0.75(1)+0.25(0)=0.75$. (The script gives $0.7500$ at $n=1001$.)

**Must hit, strict (a)-(c):**

- $0.784$ and $0.837$ (to three places), with the binomial terms shown.
- $0.163$, ideally via the symmetry with (a).
- Average competence $0.625$; limiting accuracy $0.75$, not 1.

**Must hit, strict (d):**

- Independence (given the truth) fails: the briefing is a common cause that moves every vote together, so errors in the bad world do not cancel; more voters cannot remove a risk they all share.

**Wrong turns:** concluding from the average competence $0.625>1/2$ that accuracy still goes to 1; computing (b) as $1-0.784$ (that is the three-member figure).

**Model answer (d):** It breaks independence: in the 25 percent world every voter is pushed the same way, so a large town is then almost surely wrong, and accuracy stalls at the chance of not being in that world.

---

**P2** *(Exegetical (a)-(b) — strict)*

**Must hit, strict (a):**

- (i) **Instrumental** (non-epistemic): accountability to voters and press protects interests; this is Sen's famine argument in miniature.
- (ii) **Epistemic**: the jury theorem. Its silent premise is **independence**; "together" fails if citizens share sources. It also assumes the question has a correct answer.
- (iii) **Intrinsic**: an unequal vote publicly expresses unequal standing, whatever the outcomes (Christiano's public equality; Waldron's respect).

**Must hit, strict (b):**

- (iv) moves from a claim about reliability (an epistemic property of the procedure) to a claim of political obligation (a duty to obey).
- Reliability gives a reason to believe the verdict probably correct, not a content-independent duty to comply; that further step is what 1.1 says needs separate argument (Estlund's expert/boss fallacy applied to the majority).

**Wrong turns:** calling (i) epistemic because it mentions avoiding a bad outcome (no truth-tracking claim is made; the mechanism is incentive); calling (iii) instrumental because it opens with "even if experts would legislate better" (that clause concedes outcomes and argues past them).

**Model answer (b):** Sentence (iv) slides from "the majority is usually right", a claim about a procedure's reliability, to "dissenters are bound to obey", a claim of political obligation. Even a reliable verdict only gives a reason to believe it is correct; a duty to comply because it is the law needs a separate argument, which is exactly the gap between justification and authority that 1.1 marks.

---

**P3** *(Evaluative — graded on moves, not verdict)*

**Accept:** any steelman that engages the oracle's design (it already holds demographics fixed) rather than restating the objection against restricted suffrage, and any reply that meets that version.

**Must hit, any verdict:**

- State the objection precisely: under qualified acceptability, coercive authority needs a justification no reasonable view could reject; what matters is reasonable suspicion of bias, not proof of it.
- Adapt it to the oracle: demographics are held fixed, but the knowledge quiz, the model and its assumptions are still chosen by someone; a reasonable citizen could suspect that what counts as "knowledge" (which questions, which answers) carries the biases of those who set it.
- The epistocrat's reply at strength: the residual suspicion applies to every procedure, democracy included (current electorates already skew by education and turnout), so either it defeats democracy too or it must be shown with evidence rather than merely imagined.
- Say where it stops: the verdict turns on how "reasonable" suspicion is defined, which is the qualified acceptability requirement's own weak point.

**Wrong turns:** answering as if the proposal restricted the vote (no one is disenfranchised); arguing only that the oracle would produce better or worse policy (the demographic objection is about authority, not accuracy); taking the dispute to be settled by whether the quiz is fair in fact.

**Model answer, one of several:** *Steelman.* The oracle holds demographics fixed but not the definition of knowledge. Someone writes the quiz and the model; their judgments about which facts matter, and what an informed person would want, are exactly where a reasonable citizen could suspect class or regional bias. Since that suspicion is reasonable, the oracle's estimates cannot carry authority under qualified acceptability, however accurate. *Reply.* Every procedure embeds someone's choices: district lines, ballot wording, who turns out. If unprovable suspicion of bias defeats the oracle, it defeats elections too. The fair test is comparative, and the objector must show the oracle's choices are more suspect than democracy's. Whether that comparative test is the right one is what the two sides dispute.

</details>

## Flashback

**From Lesson [4.3](04-03-perfectionism-and-the-common-good.md) (Perfectionism and the common good):** *(Exegetical (a)-(b).)* Reconstruct, then apply. (a) Reconstruct Robert George's argument for morals legislation in at most five numbered premises and a conclusion, labelling each premise normative, conceptual or empirical. (b) Invented case. The town of Ardley considers two measures against heavy drinking: (i) a ban on advertising "drink all you can for one price" promotions; (ii) a law requiring every adult to attend a monthly class on the virtue of temperance and sign a pledge of sobriety. Using your premises, say whether George's argument supports each measure, naming the premise that decides it, and say what his argument leaves undecided about (i). Three sentences.

<details>
<summary>Solution</summary>

**Must hit, strict (a):** a reconstruction with these elements, in any wording:

- **P1 (Normative).** There is a plurality of incommensurable basic goods (knowledge, friendship, marriage, play, aesthetic experience, among others), and realizing them is what makes a life go well.
- **P2 (Conceptual).** A moral good is realized only through the person's own choice, so law cannot make anyone virtuous directly.
- **P3 (Empirical).** The social environment in which people make character-forming choices (the "moral ecology") affects which choices they make; inducements to vice make bad choices more likely.
- **P4 (Normative).** Autonomy is valuable as a condition for realizing basic goods, so it does not by itself forbid coercion that protects the conditions of good choices; prudence and the rights of persons limit such coercion instead.
- **∴ C.** Law may play a subsidiary role: it may protect the moral ecology by suppressing inducements to vice, within the limits of prudence and rights, but it may not try to produce virtue directly.

**Must hit, strict (b):**

- (i) Supported in principle: removing an inducement to vice protects the moral ecology (P3, P4) and leaves the choice to drink moderately with the person.
- (ii) Not supported: it tries to make people virtuous directly, and by P2 a compelled class and pledge realize no moral good, because the good exists only in the person's own choice.
- Undecided about (i): whether to enact it is a question of prudence (enforcement cost, evasion, whether it teaches or only drives the practice elsewhere), which the principle leaves open.

**Wrong turns:** saying George must reject (i) because it is coercive (unlike Raz, he allows coercion for the sake of the good in principle); approving (ii) as "more perfectionist", which ignores P2, the premise that makes George's perfectionism subsidiary; importing Raz's harm principle as George's limit, when George's limits are prudence and rights; labelling P3 conceptual, when it is a claim about how environments affect choices.

**Model answer (b):** George's argument supports (i) in principle, since by P3 and P4 the town may suppress an inducement to vice while leaving each person's choice her own. It gives no support to (ii), which aims at virtue directly and so runs into P2: a sobriety pledge signed under legal compulsion is not the person's own choice and realizes no moral good. Whether Ardley should actually enact (i) is left to prudence, such as whether the ban can be enforced and whether it changes drinking or only advertising.

</details>

## Connections

- **Backward:** [1.1](01-01-the-problem-of-political-authority.md) separated justification, legitimacy, authority and obligation; this lesson's three justifications of democracy are justifications, and Estlund's reply turns on the gap between knowing better and having authority. [4.3](04-03-perfectionism-and-the-common-good.md) asked whether the state may aim at the good; this lesson asks who should decide what the state does. Plato's ship of state, Aristotle's summation argument and Mill's plural voting are [`history-of-political-thought` 1.2](../../history-of-political-thought/lessons/01-02-plato-against-democracy-and-the-second-best-city.md), [1.4](../../history-of-political-thought/lessons/01-04-aristotle-constitutions-citizens-and-the-polity.md) and [6.4](../../history-of-political-thought/lessons/06-04-mill-representative-government.md); this lesson keeps their promise that the epistocracy question is weighed here.
- **Forward:** [5.2](05-02-majority-rule-vs-rights-judicial-review.md) asks when an unelected court may overrule the majority, using these justifications; [5.3](05-03-deliberative-vs-aggregative-democracy.md) asks whether democracy counts preferences or transforms them; [5.4](05-04-does-social-choice-wound-democracy.md) asks whether social choice theory undermines the idea of a "will of the people" at all.
- **Sideways:** the jury theorem's proof, and what correlated, unequal and strategic voters do to it, are [`social-choice`](../../social-choice/syllabus.md) Module 5. Rousseau's epistemic reading of the general will ([`history-of-political-thought` 4.4](../../history-of-political-thought/lessons/04-04-rousseau-the-social-contract.md)) is often read epistemically, through the jury theorem. Example 1's shared-error model is the same structure as a common shock in finance: diversification removes independent risk, never the common factor.
