# Ethics · Lesson 5.1: Contractarianism: morality as mutual advantage

> ⏱ ~15 min · Module 5: Contract and plurality · Builds on: [philosophical-method 1.3 Reconstruction and charity](../../philosophical-method/lessons/01-03-reconstruction-and-charity.md), [game-theory-refresher 1.1 Normal form and dominance](../../game-theory-refresher/lessons/01-01-normal-form-dominance.md) · Unlocks: [5.2 Contractualism: what no one could reasonably reject](05-02-contractualism-what-no-one-could-reasonably-reject.md)

## Why this matters

Every theory so far has started from something already moral: the good to be maximized, the dignity of rational nature, the virtues, the precepts of natural law. The contract tradition in its Hobbesian form tries something bolder. It starts from agents who want only to do well by their own lights and asks whether morality falls out anyway, as the deal such agents would strike. If it works, the sceptic who asks "why should I be moral?" gets an answer in his own currency. If it fails, the way it fails tells you who morality is *for*.

## The idea

Picture a valley of farmers with no law and no police. Each could raid the others' stores; each must therefore guard his own, sleep lightly and plant little, since what you plant may be taken. Everyone ends up poorer than if all of them simply left each other's crops alone.

So they would all gain from a deal: *I won't raid you if you won't raid me.* Rules against theft, violence and promise-breaking look, on this picture, like the terms of that deal. Morality is not a set of facts handed down or read off human nature; it is a cooperative scheme, justified to each person because each does better inside it than outside. That is **contractarianism**, or morality as mutual advantage. The contract is **hypothetical**: nobody signed anything. The claim is that these are the rules rational people *would* agree to.

Two problems follow at once. The first is the **compliance problem**. The deal is good for everyone, but once everyone else keeps it, each person does better still by quietly breaking it. So why keep it? The second is the **problem of the weak**. The deal is struck among people who can help or hurt each other. What about those who can do neither?

## Source

Hobbes (*Leviathan*, 1651, ch. 15) states the compliance problem through an imagined objector:

> "The Foole hath sayd in his heart, there is no such thing as Justice; and sometimes also with his tongue; seriously alleaging, that every mans conservation, and contentment, being committed to his own care, there could be no reason, why every man might not do what he thought conduced thereunto: and therefore also to make, or not make; keep, or not keep Covenants, was not against Reason, when it conduced to ones benefit."

The Foole is no villain. He grants that covenants are useful and says only that *breaking* one is rational whenever breaking pays. Hobbes's answer, in outline, is that the covenant-breaker who openly treats breaking as reasonable cannot expect to be received into any society formed for defence except by the mistake of those who let him in, and no one can reasonably rely on other people's mistakes. Reconstructing that exchange properly is the Module 5 boss problem; here, notice the form of the reply. It never appeals to justice as a value. It appeals to what happens to you *afterwards*.

## The argument

**The contractarian route to morality**, in the form David Gauthier develops in *Morals by Agreement* (1986).

1. **Agents are rational maximizers who take no interest in each other's interests.** *In words:* assume no moral motives at all, so that morality is derived rather than presupposed. Gauthier calls the no-mutual-interest assumption *non-tuism*.
2. **Without constraint, interaction has the structure of a prisoner's dilemma.** *In words:* when each does what is individually best, all end up worse off than they could be.
3. **Rules of mutual restraint would leave each better off than no rules.** *In words:* there is a surplus from cooperation that everyone can share.
4. **So rational agents would agree to such rules.** *In words:* the rules are justified to each person by that person's own interests. (Which rules, exactly, is a bargaining problem; Gauthier's answer is a principle of *minimax relative concession*, which we set aside.)
5. **Compliance problem: given others' compliance, each does better by defecting.** *In words:* agreeing is rational, but keeping the agreement looks irrational.
6. **Reply: choose a disposition, not an act.** A *constrained maximizer* is disposed to cooperate with those it expects to cooperate; a *straightforward maximizer* defects whenever defection pays. If dispositions are *translucent*, detectable with better-than-chance reliability, constrained maximizers are let into cooperative schemes that straightforward maximizers are shut out of, and do better overall. *In words:* being the sort of person who keeps deals pays, even though a particular act of keeping one may not.
7. **Conclusion: moral requirements are the rules of mutual restraint that rational agents would agree to, and a rational agent is disposed to comply with them.** *In words:* morality is rationality applied to living with others.

Premises 1 to 4 give the *content* of morality; premises 5 and 6 give its *authority*. Critics attack both halves separately.

## The case

The prisoner's dilemma with covenants, where each of two parties either keeps or breaks an agreement. Payoffs are (you, other), higher is better: $T=5$ (temptation: you break, they keep), $R=3$ (reward: both keep), $P=1$ (punishment: both break), $S=0$ (sucker: you keep, they break).

| | **Other keeps** | **Other breaks** |
|---|---|---|
| **You keep** | 3, 3 | 0, 5 |
| **You break** | 5, 0 | 1, 1 |

Whatever the other does, breaking pays you more: 5 beats 3, and 1 beats 0. Breaking *dominates* (see [game-theory-refresher 1.1](../../game-theory-refresher/lessons/01-01-normal-form-dominance.md)). Two agents who reason this way land on (1, 1), although both prefer (3, 3). The Foole is simply the agent who notices the dominance argument.

## Worked examples

**Example 1 (clean case: does constrained maximization pay?).** Here is a simplified model in the spirit of Gauthier's. Suppose a fraction $r$ of the population are constrained maximizers (CMs) and the rest are straightforward maximizers (SMs), and you meet a random partner. Let $p$ be the probability that two CMs recognize each other and both keep; otherwise both break. Let $q$ be the probability that a CM mistakes an SM for a CM and keeps, and so is exploited. SMs always break. Expected payoffs:

$$EU_{CM} = r\,[pR + (1-p)P] + (1-r)\,[qS + (1-q)P]$$
$$EU_{SM} = r\,[qT + (1-q)P] + (1-r)\,P$$

*In words:* a CM gains when it finds a fellow CM and loses when it is fooled; an SM gains only by fooling a CM.

Take $r = 0.5$, $p = 0.8$, $q = 0.1$:

- $EU_{CM} = 0.5\,[0.8(3) + 0.2(1)] + 0.5\,[0.1(0) + 0.9(1)] = 0.5(2.6) + 0.5(0.9) = 1.75$
- $EU_{SM} = 0.5\,[0.1(5) + 0.9(1)] + 0.5(1) = 0.5(1.4) + 0.5 = 1.2$

Constrained maximization wins. Subtracting in general, with these payoffs ($R-P = 2$, $P-S = 1$, $T-P = 4$):

$$EU_{CM} - EU_{SM} = 2rp - (1-r)q - 4rq > 0 \iff \frac{p}{q} > \frac{1+3r}{2r}$$

*In words:* recognition must beat misrecognition by a ratio that grows as CMs become rarer. At $r = 0.5$ the threshold is $2.5$ and $p/q = 8$ clears it. Even at $r = 1$ the threshold is $2$, so if detection is no better than chance ($p/q \le 1$), the Foole wins. The rationality of keeping faith depends on how visible character is.

**Example 2 (hard case: the problem of the weak).** Now look at premise 3. The rules are justified to each party by the surplus that party gets from them. Someone who can neither contribute to the surplus nor threaten it has nothing to bargain with, so the rules need give that person nothing.

Hume saw this before any modern contractarian. In the *Enquiry concerning the Principles of Morals* (1751, §3) he imagines rational creatures mingled with humans but so much weaker that they are "incapable of all resistance." His verdict is that we would be "bound by the laws of humanity to give gentle usage to these creatures," but would "not, properly speaking, lie under any restraint of justice with regard to them." Justice, for Hume, exists among rough equals; beyond them there is only humanity.

Run the theory on non-human animals, people with severe cognitive disabilities, and people not yet born. None can enter or enforce a bargain with us. Gauthier himself, in a passage often cited against him, accepts that such beings fall outside a morality grounded in mutual advantage. Defenders have three main moves. (i) **Indirect protection:** the weak are covered because the strong care about them, and the deal protects what parties care about. (ii) **Narrow the scope:** contractarianism explains *justice*, not the whole of morality, and sympathy or benevolence covers the rest, which is Hume's own division. (iii) **Bite the bullet:** hold that obligations to the powerless are not strictly moral requirements. Each has a cost. Move (i) makes a severely disabled person's protection depend on whether anyone happens to care about her. Move (ii) needs a separate account of the rest of morality. Move (iii) conflicts with some of the most confident moral judgments people have. Much of the literature treats this as the theory's hardest cost, and it is what drives Scanlon's alternative in [5.2](05-02-contractualism-what-no-one-could-reasonably-reject.md).

## Watch out

- **You might think the contract is a historical claim, but** no contractarian holds that anyone agreed. The contract is a test of justification: would rational agents in these circumstances agree? Pointing out that no such meeting happened misses the view.
- **You might think the view says people are selfish, but** non-tuism is a methodological assumption, not psychology. It is assumed so that morality is derived from premises the sceptic accepts. Real people's affections are allowed; the theory refuses to *rely* on them.
- **You might think a constrained maximizer cooperates with everyone, but** its cooperation is conditional. It keeps faith with those it expects to keep faith and defects against known defectors. Nothing like Kant's unconditional duty ([2.1](02-01-the-good-will-and-acting-from-duty.md)) comes out of it.
- **You might think contractarianism and contractualism are one theory with different details, but** they differ at the root. The first grounds rules in each party's *advantage*, the second in what can be *justified* to each person. They come apart exactly on the weak.

## One-liner

> Morality as mutual advantage explains why you should keep faith with anyone who could make you regret breaking it, and struggles to explain why you owe anything to those who could not.

## Problems

**P1 (🟢) *(Formal (a)–(b) · Exegetical (c).)*** Use Example 1's model and payoffs ($T=5$, $R=3$, $P=1$, $S=0$), but now CMs are scarce: $r = 0.25$, $p = 0.6$, $q = 0.2$. (a) Compute $EU_{CM}$ and $EU_{SM}$. Which disposition is rational? (b) Holding $r$ and $q$ fixed, find the value of $p$ at which the two dispositions break even. (c) In one sentence, say what (a)–(b) show about the claim that it is rational to be moral.

**P2 (🟡) *(Evaluative.)*** A mutual-advantage theorist uses move (i) from Example 2: the weak are protected because the strong care about them. (a) Build a case in which this reply gives a verdict most people would reject. State the one feature of your case that defeats the reply. (b) Give the strongest response a contractarian could make, and say whether it saves the theory or changes what the theory is. 150 words or fewer in total.

**P3 (🔴, optional) *(Exegetical (a) · Evaluative (b).)*** A country can store its nuclear waste cheaply in casks that will leak in about 300 years, or expensively in casks that will last 10,000 years. The leak would harm only people born long after everyone now living has died. (a) What does a mutual-advantage theory, with no supplement, say the present generation owes those future people, and why? (b) A defender says overlapping generations fix this: each generation bargains with its children, who bargain with theirs. Say whether this chain yields an obligation reaching 300 years ahead, and where, if anywhere, it breaks. 150 words or fewer for (b).

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c).)*

**Must hit, strict (a):**
$EU_{CM} = 0.25\,[0.6(3) + 0.4(1)] + 0.75\,[0.2(0) + 0.8(1)] = 0.25(2.2) + 0.75(0.8) = 0.55 + 0.60 = 1.15$.
$EU_{SM} = 0.25\,[0.2(5) + 0.8(1)] + 0.75(1) = 0.25(1.8) + 0.75 = 0.45 + 0.75 = 1.20$.
So straightforward maximization does better, by $0.05$. Check against the difference formula: $2(0.25)(0.6) - 0.75(0.2) - 4(0.25)(0.2) = 0.30 - 0.15 - 0.20 = -0.05$.

**Must hit, strict (b):** break even when $2rp = q(1+3r)$, i.e. $p/q = (1+3r)/(2r) = 1.75/0.5 = 3.5$, so $p = 3.5 \times 0.2 = 0.7$. Check: $2(0.25)(0.7) - 0.15 - 0.20 = 0.35 - 0.35 = 0$. For $p > 0.7$, CM is rational.

**Must hit, strict (c):** on this model, whether keeping faith is rational is contingent. It depends on how many others are disposed to cooperate and how detectable dispositions are, so the contractarian's answer to the Foole holds only under favourable social conditions.

**Wrong turns:** treating $p$ and $q$ as fixed by the payoffs rather than by detectability; comparing $p$ with $q$ directly (0.6 > 0.2) and concluding CM wins, which ignores that the threshold ratio rises as $r$ falls.

**Model answer (c):** Recognition that was ample when half the population cooperated ($p/q = 3$) is not enough when a quarter does, so on Gauthier's model morality is rational only where enough others are moral and character is visible enough.

---

**P2** *(Evaluative.)*

**Must hit, any verdict:**
- (a) A case where a powerless person is wronged and *no party to the bargain cares*: an isolated person with no family, advocates or public sympathy, harmed by someone who gains from it. The defeating feature must be named: nobody's concern links the victim to the contract, so the indirect-protection reply gives no protection.
- The verdict the reply delivers must be stated (no requirement of justice violated), along with the judgment it conflicts with.
- (b) A real response, for example: parties would insure against *becoming* powerless themselves, so rules protecting the powerless serve everyone's interests (all can age, fall ill or be disabled); or: parties care about living under stable rules that do not depend on anyone's sympathy.
- Say whether the response stays inside mutual advantage or brings in an impartial or moral premise.

**Wrong turns:** a case where someone does care, so the reply easily handles it; picking a victim who could in fact retaliate later, so it is not a case of powerlessness; replying with Scanlon's reasonable rejection, which abandons mutual advantage (that is the boss problem's move, not this one).

**Model answer (one of several):** (a) A man with a lifelong severe cognitive disability, no relatives and no public profile is quietly defrauded of his care fund by his trustee. No party to the scheme cares about him, so the reply finds no requirement violated. Most people judge the fraud gravely unjust. (b) Best response: anyone might end up this helpless, so parties bargaining over their future would insure against it. This covers people who *become* weak but not someone weak from birth, whose position no party could have occupied. Applying it to him requires imagining bargainers who do not know who they will be, which moves toward an impartial construction and away from mutual advantage.

---

**P3** *(Exegetical (a) · Evaluative (b).)*

**Must hit, strict (a):** unsupplemented, nothing is owed *as a matter of justice*. People born in 300 years can neither benefit nor harm us, so they get no share of any surplus and have no bargaining power. The theory leaves the cheap casks permissible unless some present party's interests (for example, caring about the far future) weigh against them.

**Must hit, any verdict (b):**
- State how the chain is meant to work: each generation has a reason to deal fairly with the next because the two overlap and interact.
- Test whether the obligation carries over: generation 1 bargains with generation 2 about the *overlap period*. A leak in 300 years harms generation 10 or so, who never overlap with generation 1.
- Say where it breaks, or explain why it does not (for example, each generation will pass on only a world its successor accepts, so generation 2 would demand safe casks as the price of cooperation).

**Wrong turns:** assuming future people have bargaining power through their votes or future retaliation, since they have neither; treating (a) as a verdict on whether the cheap casks are wrong, when it asks only what this theory implies.

**Model answer (b), one of several:** The chain links neighbours: my children can reward or punish me, so I owe them something. But what generation 2 can demand from generation 1 is limited to what harms generation 2. A leak that falls on generation 10 costs generation 2 nothing, so they have no bargaining reason to demand safe casks, unless they care about their own descendants, which is non-tuism giving way to concern. The chain holds only if each generation's interests really include the far future. That is the indirect-protection move again, with the same weakness: the obligation lasts only as long as someone's concern does.

</details>

## Flashback

**From Lesson 4.2 (Aristotle: virtue and practical wisdom):** Kofi, 16, must log 40 service hours at a community garden to graduate. In his first month he weeds and hauls compost exactly as told, because the hours are required. Two years later he still turns up on Saturdays unasked. He can say why the garden matters to the families who depend on its produce, and he is glad to go. (a) A skeptic says: *"Aristotle claims we acquire a virtue by doing the acts that virtue does. But only someone who already has the virtue can do those acts, so the account is circular."* Give Aristotle's answer from NE II.4. (b) Run II.4's three conditions for acting as the virtuous person acts on first-month Kofi and on two-years-later Kofi, and say which condition the case leaves hardest to verify. 150 words or fewer in total. *(Exegetical (a) · Evaluative (b).)*

<details>
<summary>Solution</summary>

**Must hit, strict (a):** Aristotle separates doing an act *of the kind* the virtuous person does from doing it *as* the virtuous person does. A learner can do the first without the virtue, as someone can produce something grammatical by chance or at another's prompting. For a craft the product's quality is enough, but acting virtuously also requires the agent to be in a certain condition. Repeating acts of the right kind is what builds that condition, so there is no circle.

**Must hit, strict (b), first month:** (i) he knows what he is doing; (ii) he does **not** choose the act for its own sake, since he does it for the hours; (iii) he has no firm character yet. **Two years later:** (i) met, and more fully, since he knows why it matters; (ii) plausibly met: he comes unasked, and his gladness is a sign of the state (pleasure in the act, II.3).

**Must hit, any verdict (b):** name the hardest condition with a reason. The natural answer is (iii), firm and unchangeable character, because two years of low-cost Saturdays show habit, not how he acts when helping becomes costly. (ii) also passes if the answer says what else might be moving him, such as friends at the garden.

**Wrong turns:** denying that first-month Kofi does acts of the right kind at all; counting (i) as unmet in the first month; treating habituation as mere conditioning, so that later Kofi cannot choose the act for its own sake.

**Model answer:** (a) The skeptic runs together doing the virtuous kind of act and doing it virtuously. A learner can do the first without the virtue, as you can write a grammatical sentence by luck or at a teacher's prompting, and repeating such acts builds the state from which they are later done virtuously. (b) First month: he knows what he is doing, but chooses it for the hours, and has no settled character. Two years on: he knows what and why, and coming unasked and gladly is good evidence he chooses it for itself. Firmness is hardest to verify. Saturdays that cost him little show a habit, not what he would do if helping cost him something.

</details>

## Connections

- **Backward:** the Foole's challenge is a lesson in charity from [philosophical-method 1.3](../../philosophical-method/lessons/01-03-reconstruction-and-charity.md): Hobbes states the objector at full strength before answering him. The dominance reasoning comes from [game-theory-refresher 1.1](../../game-theory-refresher/lessons/01-01-normal-form-dominance.md). The problem of the weak resembles [1.3](01-03-justice-and-the-separateness-of-persons.md)'s concern about who gets left out, but for the opposite reason: utilitarianism counts everyone and can sacrifice individuals to the total, while mutual advantage never counts the powerless at all.
- **Forward:** [5.2](05-02-contractualism-what-no-one-could-reasonably-reject.md) keeps the idea of agreement but grounds it in justifiability rather than advantage, largely to answer Example 2. [6.4](06-04-constructivism-and-debunking.md) returns to the idea that morality is constructed rather than discovered. Hobbes on the sovereign, and the social contract as a theory of the state, belong to [`political-philosophy`](../../political-philosophy/syllabus.md), and promising as a source of obligation belongs to [`philosophy-of-debt`](../../philosophy-of-debt/syllabus.md).
- **Sideways:** repeated interaction offers a different answer to the compliance problem: in the folk theorem ([game-theory-refresher 2.3](../../game-theory-refresher/lessons/02-03-repeated-games-folk-theorem.md)), cooperation can be sustained by the threat of future punishment, with no appeal to dispositions. Gauthier's translucency is a one-shot alternative for cases where no future interaction disciplines the defector. The formal treatment of rational choice behind all of this belongs to [`decision-theory`](../../decision-theory/syllabus.md).
