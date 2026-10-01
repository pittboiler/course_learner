# Decision Theory · Lesson 4.4: Hard cases for both

> ⏱ ~15 min · Module 4: Newcomb's problem and the causal-evidential split · Builds on: [4.2 Evidential decision theory](04-02-evidential-decision-theory.md), [4.3 Causal decision theory](04-03-causal-decision-theory.md) · Unlocks: [5.1 Harsanyi's aggregation theorem](05-01-harsanyis-aggregation-theorem.md)

## Why this matters

After [4.3](04-03-causal-decision-theory.md) the scoreboard looked simple: Newcomb's problem and the [smoking lesion](../reference.md#smoking-lesion) split the theories, and each side owned one case. This lesson adds cases designed to hurt each side on its home ground. One makes causal decision theory recommend an act that, once chosen, you will think was a mistake. Another makes evidential decision theory pay for news it cannot change. A third has no stable answer at all. The repair both sides reach for, **ratifiability**, fixes one case and goes silent on the others.

## The idea

**Egan's psychopath button** (Andy Egan, "Some Counterexamples to Causal Decision Theory", *Philosophical Review*, 2007). Pressing a button kills every psychopath. You would like a world without them, but you would not like to die. You are fairly sure you are not a psychopath, but you are also sure that only a psychopath would press. Causal decision theory consults your current credence that you are a psychopath. That credence is low, so it says press. Yet deciding to press is strong evidence that you are about to kill yourself. Most readers, causalists included, think you should not press.

**Death in Damascus** (Gibbard and Harper, "Counterfactuals and Two Kinds of Expected Utility", 1978). Death tells you he will come for you tomorrow, and he predicts your movements well. You can stay in Damascus or flee to Aleppo. If you lean towards Aleppo, that is evidence Death will be in Aleppo, so Damascus looks safer; lean back and Aleppo looks safer. No choice stays best once you make it. This is **decision instability**.

**XOR blackmail**, a case from the functional-decision-theory literature, presses on the evidentialist. A reliable predictor sends you a demand for money exactly when one of two things is true: your house has termites, or you are the kind of person who pays. Paying cannot remove termites. But given the letter, paying is excellent evidence that you do not have them.

## The formal version

**The two theories, reloaded.** Evidential value conditions on the act ([4.2](04-02-evidential-decision-theory.md)):

$$V(A)=\sum_S P(S\mid A)\,u(A,S).$$

Causal value uses unconditional credence over [dependency hypotheses](../reference.md#dependency-hypothesis) $K$, each fixing what every act would bring about ([4.3](04-03-causal-decision-theory.md)):

$$U(A)=\sum_K P(K)\,u(A,K).$$

**The button, in general.** Pressing yields gain $g>0$ if you are not a psychopath and loss $-l$, with $l>0$, if you are; not pressing yields 0. Let $q=P(\text{psychopath})$ and $q_{\text{press}}=P(\text{psychopath}\mid\text{press})$. Then

$$\begin{aligned}
U(\text{press}) &= (1-q)\,g-q\,l,\\
V(\text{press}) &= (1-q_{\text{press}})\,g-q_{\text{press}}\,l.
\end{aligned}$$

*In words: causal decision theory presses whenever $q<g/(g+l)$; evidential decision theory uses the credence pressing would give you, which the case makes high.*

**[Ratifiability](../reference.md#ratifiability)** (Jeffrey, *The Logic of Decision*, 2nd ed., 1983). Let $P(K\mid A)$ be your credence in $K$ on the supposition that you have finally decided on $A$. Define

$$U_A(B)=\sum_K P(K\mid A)\,u(B,K),$$

the causal value of $B$ judged by the credences you would have after deciding $A$. Then $A$ is **ratifiable** iff $U_A(A)\ge U_A(B)$ for every alternative $B$. *In words: an act is ratifiable if, once you know you have chosen it, nothing else looks better.* Jeffrey offered it so that evidential reasoning would match causal verdicts where they should agree; Harper (1986) gave the causal version used here.

**[Death in Damascus](../reference.md#death-in-damascus).** Death is wherever you go with probability $p$. Surviving is worth 100 and dying 0. Suppose you have decided on Damascus. Then Death is in Damascus with credence $p$:

$$\begin{aligned}
U_D(\text{Damascus}) &= 100(1-p),\\
U_D(\text{Aleppo}) &= 100\,p.
\end{aligned}$$

Damascus is ratifiable iff $p\le 1/2$, and by symmetry so is Aleppo. *In words: with any predictor better than a coin, no act survives being chosen.* Evidential decision theory is calm here, since $V(\text{Damascus})=V(\text{Aleppo})=100(1-p)$, so it is indifferent; that calm is part of what causalists find suspicious about it.

**The three cases as a scorecard.** Each case targets one premise.

1. The button targets causal decision theory with fixed credences: it evaluates acts by credences the act itself will overturn.
2. XOR blackmail targets evidential decision theory: it lets news about a settled fact drive the choice.
3. Death in Damascus targets any rule that must name a pure act: none is stable.

**Where the argument is weakest.** The argument against causal decision theory needs the premise that the theory must judge acts by the agent's credences *before* she settles on one. Causalists such as Skyrms (*The Dynamics of Rational Deliberation*, 1990), Arntzenius (2008) and Joyce (2012) reject it. On their view deliberation itself updates credences: as you lean towards pressing, your credence that you are a psychopath rises, and you stop. That view names the axiom the button presses on: whether choice must be **stable**, so that an act you will regret on choosing it is ruled out. The price is the next paragraph: in Death in Damascus deliberation never settles on a pure act, and the theory ends in a credence, not a choice. On the other side, evidential decision theory gets the button right by the same feature that makes it break causal [dominance](../reference.md#dominance) elsewhere: in XOR blackmail refusing is better whether or not there are termites, and it pays anyway. Each side gives something up: the plain causalist gives up stability; the evidentialist gives up dominance over states the act cannot affect; the deliberational causalist gives up the demand that a theory always output an act.

## Picture

![A graph of causal expected utility against c, the agent's credence that she will go to Damascus, with predictor reliability 0.9. The Damascus line falls from 90 to 10; the Aleppo line rises from 10 to 90; they cross at c equals one half, value 50. Arrows above the graph point inward from both ends toward one half, labelled lean Aleppo, Damascus looks better, and lean Damascus, Aleppo looks better](assets/04-04-fig1.svg)

Death in Damascus with $p=0.9$. If your credence that you will go to Damascus is $c$, Death is there with probability $0.9c+0.1(1-c)$, so $U(\text{Damascus})=90-80c$ and $U(\text{Aleppo})=10+80c$. Whichever way you lean, the other city wins, which pushes $c$ back towards the middle. The only resting point is $c=1/2$, a [decision instability](../reference.md#decision-instability) resolved by a coin, not a choice. Game theorists will recognize matching pennies against an opponent who reads your mind ([`grad-game-theory` 2.2](../../grad-game-theory/lessons/02-02-nash-equilibrium-mixed-strategies.md)).

## Worked examples

**Example 1 (clean): the [psychopath button](../reference.md#psychopath-button) with numbers.** Take $g=6$, $l=90$, $q=0.04$, $q_{\text{press}}=0.75$, and credence 0.02 that you are a psychopath given that you do not press.

$$\begin{aligned}
U(\text{press}) &= 0.96(6)-0.04(90)=2.16,\\
V(\text{press}) &= 0.25(6)-0.75(90)=-66.
\end{aligned}$$

Not pressing is worth 0 on both theories. Causal decision theory presses (the threshold is $6/96=1/16=0.0625$, and $0.04$ is below it); evidential decision theory does not. Now ratifiability. Having decided to press, your credence is 0.75, and pressing is worth $-66<0$: not ratifiable. Having decided not to press, your credence is 0.02, and pressing is worth $0.98(6)-0.02(90)=4.08>0$: not ratifiable either. Ratifiability does not rescue the causalist here; the button turns out to be an instability case in disguise.

**Example 2 (hard): XOR blackmail, where ratifiability helps.** Termites would cost 200,000 dollars; the letter demands 2,000. You have the letter. Evidentially, paying means no termites and refusing means termites:

$$\begin{aligned}
V(\text{pay}) &= -2{,}000,\\
V(\text{refuse}) &= -200{,}000.
\end{aligned}$$

Evidential decision theory pays. Causally the termites are already there or not; with credence $r$ in them, $U(\text{pay})=-2{,}000-200{,}000\,r$ and $U(\text{refuse})=-200{,}000\,r$, so refusing wins by 2,000 for every $r$. Ratifiability sides with refusing. Having decided to pay, $r=0$, and refusing (0) beats paying ($-2{,}000$). Having decided to refuse, $r=1$, and refusing ($-200{,}000$) beats paying ($-202{,}000$). Only refusing is ratifiable. So Jeffrey's test repairs evidential decision theory here. Here the tool strains, though. The same test that gives the causal verdict in XOR blackmail gives *no* verdict in Death in Damascus or the button, and in Newcomb's problem it forbids one-boxing, the verdict many evidentialists wanted to keep. **Functional decision theory** (Yudkowsky and Soares, 2017) is a newer rival built for these cases: treat your choice as the output of a decision procedure the predictor also models, and pick the output that is best when the procedure gives it everywhere. It one-boxes, and its proponents report that it refuses to pay in XOR blackmail. It is named here, not taught.

## Watch out

- **You might think** ratifiability is a third theory. It is a filter on acts that sits on top of either value function, and it can leave nothing standing.
- **You might think** the button refutes causal decision theory outright. It refutes a version whose credences stay fixed through deliberation. Deliberational causalists accept the case's verdict and keep causal value.
- **You might think** Death in Damascus embarrasses evidential decision theory too. It does not: indifference at $100(1-p)$ is a stable verdict. What the case strains is any causal rule that must output a pure act.

## One-liner

> A good choice should still look good once you have made it: that is ratifiability, and the hard cases are the ones where nothing passes, so each theory must give up either stability, causal dominance, or the promise to name an act.

## Problems

**P1 (🟢)** *(Formal (a)–(b) · Exegetical (c).)* A button kills every psychopath. Pressing is worth +8 if you are not one and −40 if you are; not pressing is worth 0. Your credence that you are a psychopath is 0.1, and 0.6 given that you press.

(a) Compute the causal and evidential expected utility of pressing, and say what each theory recommends.
(b) Find the largest credence $q$ that you are a psychopath at which causal decision theory still recommends pressing.
(c) Is pressing ratifiable? Use your credence given that you press, and say in one sentence what the answer means.

**P2 (🟡)** *(Formal (a)–(b) · Exegetical (c).)* An asymmetric Death in Damascus (a variant of this kind is due to Richter, 1984). Death is wherever you go with probability $p$. Surviving is worth 100, dying 0, and Aleppo adds 10 either way because the trip is pleasant.

(a) Compute the evidential value of each city as a function of $p$. Which does evidential decision theory choose?
(b) For which $p$ is Aleppo ratifiable, and for which is Damascus?
(c) At $p=0.9$, what does a theory that says "choose a ratifiable act" advise, and what does that show about ratifiability as a decision rule? Two sentences.

**P3 (🔴, optional)** *(Exegetical (a) · Evaluative (b).)* Two causalists face Example 1's button. Ana says: "Causal value says press; the evidence my choice gives about my own brain is not something pressing causes, so I press." Ben says: "I won't press; I won't pick an act I'll regret the moment I choose it."

(a) Name the single premise Ana accepts and Ben denies. One sentence.
(b) Say what argument or consideration would move one of them, and whether biting the bullet generalizes for that side. 150 words or fewer. Any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c))*

(a) Causal, with unconditional credence 0.1:

$$U(\text{press})=0.9(8)-0.1(40)=7.2-4=3.2.$$

Evidential, with credence 0.6 given pressing:

$$V(\text{press})=0.4(8)-0.6(40)=3.2-24=-20.8.$$

Not pressing is 0 on both. Causal decision theory presses; evidential decision theory does not.

(b) Press iff $8(1-q)>40q$, i.e. $8>48q$, i.e. $q<1/6\approx0.167$. At $q=1/6$ it is indifferent, so causal decision theory recommends pressing for every $q<1/6$.

(c) Having decided to press, your credence is 0.6, so pressing is worth $-20.8<0=$ not pressing. Pressing is not ratifiable: once you have chosen it, your own theory says not pressing would have been better.

**Must hit, strict (a):** 3.2 and $-20.8$ with the arithmetic; causal presses, evidential refrains.

**Must hit, strict (b):** the inequality $8(1-q)>40q$ solved to $q<1/6$.

**Must hit, strict (c):** the causal comparison redone with credence 0.6; "not ratifiable"; the gloss that the act fails by the agent's own lights once chosen.

**Wrong turns:** using 0.6 in the causal computation in (a): that is the evidential credence, and mixing them collapses the two theories. Checking ratifiability with the unconditional 0.1, which just repeats (a).

---

**P2** *(Formal (a)–(b) · Exegetical (c))*

(a) Going to a city makes Death's presence there probability $p$:

$$\begin{aligned}
V(\text{Aleppo}) &= 100(1-p)+10=110-100p,\\
V(\text{Damascus}) &= 100(1-p)=100-100p.
\end{aligned}$$

Aleppo wins by 10 for every $p$, so evidential decision theory chooses Aleppo.

(b) Having decided on Aleppo, Death is in Aleppo with credence $p$: $U_A(\text{Aleppo})=100(1-p)+10$ and $U_A(\text{Damascus})=100p$. Aleppo is ratifiable iff $110-100p\ge100p$, i.e. $p\le 11/20=0.55$. Having decided on Damascus: $U_D(\text{Damascus})=100(1-p)$ and $U_D(\text{Aleppo})=100p+10$. Damascus is ratifiable iff $100-100p\ge100p+10$, i.e. $p\le 9/20=0.45$. So both are ratifiable for $p\le0.45$, only Aleppo for $0.45<p\le0.55$, and neither for $p>0.55$. (A grid over $p$ in steps of 0.001 confirms both cut-offs.)

(c) At $p=0.9$ neither city is ratifiable, so "choose a ratifiable act" advises nothing, even though one option is plainly sweeter. Ratifiability is a necessary condition some theorists impose, not a complete decision rule; when it empties the menu, something else (deliberational equilibrium, a mixed act, or a fallback to evidential value) must decide.

**Must hit, strict (a):** both values, Aleppo by 10 for all $p$.

**Must hit, strict (b):** each ratifiability inequality set up with the credence conditional on the decision; thresholds 0.55 and 0.45; the three regions.

**Must hit, strict (c):** no ratifiable act at 0.9; ratifiability can leave the choice set empty, so it is a filter, not a rule.

**Wrong turns:** using credence $1/2$ for Death's location in (b): ratifiability conditions on the decision. Forgetting that the bonus also enters the Aleppo side of the Damascus test, which yields the wrong cut-off 0.5.

---

**P3** *(Exegetical (a) · Evaluative (b))*

**Must hit, strict (a):** the premise that an act should be evaluated by the agent's credences before she settles on it (equivalently, that stability or ratifiability is *not* a requirement of rational choice). Ana accepts it; Ben denies it.

**Must hit, any verdict (b):**

- State Ben's demand precisely: choose only acts that remain best on the credences you will have once you choose them.
- Run it on the case: in Example 1 no act passes (pressing gives $-66$, not pressing leaves pressing at $4.08$), so Ben needs a further rule, and Ana's view at least outputs an act.
- Name what would move one side: for Ben, cases like Death in Damascus where stability yields only a mixed credence; for Ana, the button itself, where she knowingly does what she will at once judge worse.
- Say whether the bullet generalizes: Ana's bullet recurs in every case where an act is evidence about its own causal background; Ben's recurs in every instability case.

**Wrong turns:** making the crux "causal vs evidential": both are causalists, and neither uses $V$. Treating Ben's view as evidential decision theory because it agrees with its verdict here.

**Model answer (b), one of several:** Ben's strongest point is that Ana's choice defeats itself: the moment she presses, her own theory, fed the credence her choice gives her, says she was wrong. A rule that endorses acts it immediately condemns looks like no guide at all. But Ben's demand has a cost in this very case: not pressing fails too, since once he refrains, pressing looks good again. So Ben must say what to do when nothing is stable, and the best available answer, settling into a credence at which both acts are equal, recommends a state of mind, not an act. What would move Ana is a version of Ben's view that always outputs an act; what would move Ben is evidence that instability cases are common enough that "no answer" is the usual answer. Ana's bullet generalizes to every case where choosing is evidence about one's own causal situation; Ben's to every instability case.

</details>

## Flashback

**From Lesson [4.2](04-02-evidential-decision-theory.md) (Evidential decision theory):** *(Formal (a)–(b) · Exegetical (c).)* A gene $G$ raises the risk of heart disease: $P(\text{disease}\mid G)=\tfrac12$ and $P(\text{disease}\mid\neg G)=\tfrac1{10}$. Napping ($N$) is worth $+5$, disease $-75$, and napping causes nothing. The gene also produces a felt drowsiness $T$. The agent feels it, and given that, her credence in $G$ is $\tfrac12$. But the tickle leaks: the gene also tilts how drowsiness becomes a decision, so $P(N\mid G\wedge T)=\tfrac34$ and $P(N\mid\neg G\wedge T)=\tfrac12$.

(a) Find $P(G\mid N\wedge T)$ and $P(G\mid\neg N\wedge T)$, then $V(N\mid T)$ and $V(\neg N\mid T)$. What does evidential decision theory recommend?
(b) Find the smallest pleasure from napping (replacing $+5$) above which it naps. Then close the leak, $P(N\mid G\wedge T)=P(N\mid\neg G\wedge T)$: what does it recommend, and by how much?
(c) Which assumption of the tickle defence does the leak break? One sentence.

<details>
<summary>Solution</summary>

(a) By Bayes, within $T$:

$$\begin{aligned}
P(G\mid N\wedge T)&=\frac{\tfrac12\cdot\tfrac34}{\tfrac12\cdot\tfrac34+\tfrac12\cdot\tfrac12}=\frac35,\\
P(G\mid \neg N\wedge T)&=\frac{\tfrac12\cdot\tfrac14}{\tfrac12\cdot\tfrac14+\tfrac12\cdot\tfrac12}=\frac13.
\end{aligned}$$

So $P(\text{disease}\mid N\wedge T)=\tfrac35\cdot\tfrac12+\tfrac25\cdot\tfrac1{10}=\tfrac{17}{50}$ and $P(\text{disease}\mid\neg N\wedge T)=\tfrac13\cdot\tfrac12+\tfrac23\cdot\tfrac1{10}=\tfrac7{30}$:

$$\begin{aligned}
V(N\mid T)&=5-75\cdot\tfrac{17}{50}=-20.5,\\
V(\neg N\mid T)&=-75\cdot\tfrac{7}{30}=-17.5.
\end{aligned}$$

Abstain, by 3.

(b) Napping wins when $x>75\left(\tfrac{17}{50}-\tfrac7{30}\right)=75\cdot\tfrac{16}{150}=8$. With the leak closed, $T$ screens off $N$ from $G$: both posteriors are $\tfrac12$, the disease risk is $\tfrac3{10}$ for either act, and $V(N\mid T)=5-22.5=-17.5$ against $V(\neg N\mid T)=-22.5$. Nap, by exactly 5, the margin by which napping dominates on the gene partition ($-32.5$ vs $-37.5$ with $G$, $-2.5$ vs $-7.5$ without).

**Must hit, strict (c):** the assumption that the gene moves choice *only* through a state the agent can introspect, so that conditioning on it screens off the act; with a further path from gene to choice, the act stays news about the gene even given $T$.

**Wrong turns:** using credence $\tfrac12$ for both acts in (a), which is the closed-leak case and gives the tickle defence's verdict by assumption. In (b), solving $V(N\mid T)=0$ instead of $V(N\mid T)=V(\neg N\mid T)$. Reading the abstain verdict as evidence that napping harms the heart: by stipulation it causes nothing.

</details>

## Connections

- **Backward:** [4.1](04-01-newcombs-problem.md) set the predictor and the dominance argument; [4.2](04-02-evidential-decision-theory.md) and [4.3](04-03-causal-decision-theory.md) built the two value functions run here. Like [1.4](01-04-what-a-representation-theorem-shows.md)'s sophisticated chooser, ratifiability judges a choice from the standpoint of the agent who has already made it.
- **Forward:** Module 5 leaves the single agent: [5.1](05-01-harsanyis-aggregation-theorem.md) asks what follows when society's choices, as well as each person's, must obey expected utility. Fanaticism in [6.2](06-02-fanaticism-and-tiny-probabilities.md) is another place where a rule's verdicts are judged by whether one can live with them.
- **Sideways:** Death in Damascus is matching pennies against a mind-reader, and its deliberational equilibrium mirrors the mixed equilibrium of [`grad-game-theory` 2.2](../../grad-game-theory/lessons/02-02-nash-equilibrium-mixed-strategies.md). Finding the single premise two causalists split on is [`philosophical-method` 4.3](../../philosophical-method/lessons/04-03-finding-the-crux.md)'s method.
