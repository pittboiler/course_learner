# Decision Theory · Lesson 2.2: Probability from preference

> ⏱ ~15 min · Module 2: Subjective probability, Savage, and the independence axiom · Builds on: [2.1 Savage's framework](02-01-savages-framework.md), [1.3 The vNM theorem and how utility is built](01-03-the-vnm-theorem-and-how-utility-is-built.md) · Unlocks: [2.3 The Allais paradox and the sure-thing principle](02-03-the-allais-paradox-and-the-sure-thing-principle.md), [3.1 The Ellsberg paradox](03-01-the-ellsberg-paradox.md)

## Why this matters

In [1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md) the probabilities were handed over: a 0.6 chance of 100 is a lottery with a known wheel. Real choices come with no wheel. Whether the shipment arrives by Friday, whether the climber comes back: nobody posts the odds. [2.1](02-01-savages-framework.md) stated Savage's promise that coherent preferences over acts deliver a probability anyway. This lesson shows how the probability is actually read off the preferences, and finds the one assumption it cannot do without: that a dollar is worth the same to you whichever state of the world obtains.

## The idea

If you would rather bet on rain than on snow, for the same prize, you think rain more likely. That is the whole trick, and everything else is refinement.

Two refinements matter. First, a preference for one bet over another gives only a *ranking* of events. To get *numbers*, compare a bet with a sure amount: if you are indifferent between 225 dollars for sure and "400 if the shipment arrives, else nothing", your credence in arrival is the fraction of the way from "nothing" to "400" that 225 sits, **measured in utility, not in dollars**. Second, that needs a utility scale, and a utility scale built with lotteries (vNM) needs probabilities. Ramsey's way out of the circle was to find one event whose probability the choices themselves certify as one half.

The catch shows up in life insurance. A policy pays only if you die, and money may matter less to you then. Your eagerness to buy it reflects your credence *and* how much the payout would mean in that state, and no amount of watching your choices separates the two.

## The formal version

**Setup.** States $s$, events $E$ (sets of states), consequences $x, y$, acts as in [2.1](02-01-savages-framework.md). Write $[x \text{ on } E;\ y]$ for the act paying $x$ if $E$ obtains and $y$ otherwise, $\succ$ for strict preference, $\sim$ for indifference. Credence is $P$, utility $u$.

**1. Qualitative probability from a bet swap.** Fix prizes $x \succ y$. Define

$$E \text{ is at least as likely as } F \iff [x \text{ on } E;\ y] \succeq [x \text{ on } F;\ y].$$

*In words:* the event you would rather stake the good prize on is the one you think more likely.

Savage's P4 says this ranking does not depend on which prizes $x \succ y$ are used, so it is a fact about belief rather than about the prizes. With P1–P5 it is a [qualitative probability](../reference.md#qualitative-probability) (a "more likely than" ordering obeying de Finetti's conditions), and P6, which lets the states be cut into arbitrarily fine, equally likely pieces, is what pins down a unique number for each event.

**2. Ramsey's betting method** (Ramsey, "Truth and Probability", written 1926, published 1931). Call a proposition $N$ **ethically neutral** if the agent does not care whether it is true for its own sake. $N$ has credence $\tfrac12$ if, for some prizes $a \succ b$,

$$[a \text{ on } N;\ b] \sim [b \text{ on } N;\ a].$$

*In words:* she is happy to let a neutral coin decide which way round the prizes go.

Such an $N$ is a home-made fair coin. Indifference between $c$ for sure and $[a \text{ on } N;\ b]$ then means $u(c) = \tfrac12 u(a) + \tfrac12 u(b)$, so repeated halving builds a utility scale with no given probabilities. With the scale in hand, any event $E$ gets a number: if $c \sim [a \text{ on } E;\ b]$ with $a \succ b$, then

$$P(E) = \frac{u(c) - u(b)}{u(a) - u(b)}.$$

*In words:* credence is how far the sure amount lies between the bet's two prizes, measured on the utility scale. This is [Ramsey's betting method](../reference.md#ramseys-betting-method); Savage's theorem is its axiomatized descendant, and it gives a [subjective probability](../reference.md#subjective-probability) for every event.

**3. The assumption underneath.** Every step above treats a consequence as worth the same in every state: $u(x)$, not $u(x, s)$. That is [state-independence](../reference.md#state-independence), built into Savage's P3 and P4. Drop it and let the agent's utility of $x$ in state $s$ be $\lambda_s u(x)$ for weights $\lambda_s > 0$. Then any act $f$ is valued at

$$\sum_s P(s)\,\lambda_s\,u(f(s)) \;\propto\; \sum_s Q(s)\,u(f(s)), \qquad Q(s) = \frac{P(s)\lambda_s}{\sum_{t} P(t)\lambda_t}.$$

*In words:* an agent with credence $P$ and [state-dependent utility](../reference.md#state-dependent-utility) ranks every act exactly as a state-independent agent with credence $Q$ would, so her preferences reveal only the products $P(s)\lambda_s$.

Preference data identify $Q$. Calling $Q$ her credence is a convention, the one Savage's postulates impose. Aumann pressed the point on Savage in a 1971 letter (a man whose life would be less worth living without his wife, who faces an operation), and Karni and, separately, Schervish, Seidenfeld and Kadane developed the non-uniqueness formally.

**4. Small worlds.** Savage knew the "consequences" in any real model are coarse: "receive 1,000 dollars" is itself a gamble on everything the model leaves out. He distinguished the **grand world**, whose states settle everything the agent cares about, from the **small worlds** we actually model, and showed that probabilities from a small world need not match the grand world's ([small worlds](../reference.md#small-worlds)). State-dependence is often a small-world artefact: "1,000 dollars" means one thing if you are alive and another if you are dead because the description left your survival out.

**Where the argument is weakest.** Step 3. The derivation reads credence off choice only by stipulating that a consequence's value is fixed across states, and that stipulation is false of exactly the decisions where credence matters most: health, death, catastrophe. A defender has two replies. The first is to redescribe consequences until they are state-independent ("1,000 dollars while alive"); but then some acts in Savage's space, such as "1,000 dollars while alive, if I die", are incoherent to choose among, and his rich act space was meant to include them all. The second is to take credence as something preferences *measure* imperfectly, a mental state with an existence of its own, which concedes that preference does not *define* it. Which reply you take is [1.4](01-04-what-a-representation-theorem-shows.md)'s question about [realism and constructivism](../reference.md#realism-and-constructivism-about-utility), now asked of belief.

## Picture

![Value of the bet 400 if E, else 0, plotted against credence p, rising as a straight line from 0 to 1. A horizontal green line at three quarters marks her utility of 225 for sure and meets the bet line at p equals three quarters. A dashed red line at nine sixteenths marks 225 out of 400 in money terms and meets it at p equals nine sixteenths, the wrong answer if utility were money](assets/02-02-fig1.svg)

The credence is where the sure thing's utility meets the bet's value line. Read the sure amount in dollars instead and you elicit 9/16, not 3/4: curvature in utility has been mistaken for doubt.

## Worked examples

**Example 1 (clean): Ramsey's two steps.** Normalize $u(0) = 0$, $u(400) = 1$. The agent treats $N$ (a coin toss she has no stake in) as ethically neutral with credence $\tfrac12$.

*Step 1, build the scale.* She reports:

- $100 \sim [400 \text{ on } N;\ 0]$, so $u(100) = \tfrac12(1) + \tfrac12(0) = \tfrac12$.
- $225 \sim [400 \text{ on } N;\ 100]$, so $u(225) = \tfrac12(1) + \tfrac12\cdot\tfrac12 = \tfrac34$.
- $25 \sim [100 \text{ on } N;\ 0]$, so $u(25) = \tfrac12\cdot\tfrac12 + 0 = \tfrac14$.

*Step 2, measure a credence.* Let $E$ be "the shipment arrives by Friday". She reports $225 \sim [400 \text{ on } E;\ 0]$, so

$$P(E) = \frac{u(225) - u(0)}{u(400) - u(0)} = \frac{3/4}{1} = \frac34.$$

*A check the theory must pass.* She also reports $25 \sim [400 \text{ on not-}E;\ 0]$, giving $P(\text{not-}E) = \tfrac14$. The two sum to 1. Nothing forced her answers to cohere; that they must is what Savage's postulates claim of a rational agent, and violating it is what [2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md) and [3.1](03-01-the-ellsberg-paradox.md) will show people doing.

Had we read money as utility, the first report would give $225/400 = 9/16$. The method needs the utility scale, which is why Ramsey built it first.

**Example 2 (hard): the life-insurance problem.** An illustrative agent has credence $P(D) = \tfrac{1}{10}$ that she dies this year ($D$). Utility is linear in money while she lives; a payout on death goes to her heirs and is worth half as much to her, so $\lambda_D = \tfrac12$, $\lambda_{\text{live}} = 1$. An insurer offers a policy paying 1,000 dollars on $D$ and asks what sure amount $c$ she would take instead.

The sure $c$ arrives in both states, so

$$\begin{aligned}
c\left(\tfrac{1}{10}\cdot\tfrac12 + \tfrac{9}{10}\cdot 1\right) &= \tfrac{1}{10}\cdot\tfrac12\cdot 1000\\
c\cdot\tfrac{19}{20} &= 50\\
c &= \tfrac{1000}{19} \approx 52.63 .
\end{aligned}$$

An analyst who assumes state-independent linear utility reads $P(D) = c/1000 = \tfrac{1}{19}$, not $\tfrac{1}{10}$. The formula agrees: $Q(D) = \tfrac{1/20}{1/20 + 9/10} = \tfrac{1}{19}$. She is not confused about her mortality; she simply cares less about money in the state the bet pays in, and the method cannot tell that from thinking the state less likely. Worse, it never could: the agent ($P = \tfrac1{10}$, $\lambda_D = \tfrac12$) and a state-independent agent with $P = \tfrac1{19}$ have the same weights up to scale ($\tfrac1{20} : \tfrac{9}{10}$ and $\tfrac1{19} : \tfrac{18}{19}$ are both $1 : 18$), so they rank every act alike.

## Watch out

- **You might think betting odds in dollars reveal credence directly.** They do only if utility is linear in money over the stakes. The Dutch book argument for probabilism (a sure-loss book against betting quotients that break the probability axioms, which Ramsey himself sketched) assumes exactly that; [`epistemology`](../../epistemology/syllabus.md) 5.2 owns it, as the belief-side cousin of this lesson's derivation from preference.
- **You might think the elicited number is wrong in the insurance case and Savage's is right elsewhere.** Both are fixed by the same convention. Preferences alone fix $P(s)\lambda_s$; Savage gets a unique $P$ by declaring $\lambda_s$ constant.
- **You might think "ethically neutral" means "probability one half".** Neutrality is about *value* (she does not care whether $N$ is true); the indifference under swapping prizes is what then certifies credence $\tfrac12$. Ramsey needed both.

## One-liner

> Preferences over bets reveal credence only through a utility scale and the stipulation that a prize is worth the same in every state; drop that stipulation and choice fixes only the product of belief and value.

## Problems

**P1 (🟢) *(Formal.)*** Normalize $u(0) = 0$ and $u(900) = 1$. A festival organizer treats a neutral coin toss $N$ as having credence $\tfrac12$ and reports $400 \sim [900 \text{ on } N;\ 0]$ and $625 \sim [900 \text{ on } N;\ 400]$.

(a) Find $u(400)$ and $u(625)$.
(b) She also reports $625 \sim [900 \text{ on } R;\ 0]$, where $R$ is "it rains on the festival day". Find her credence in $R$.
(c) What credence in $R$ would an analyst report who took money to be utility, and in which direction is the error? One sentence on why.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** An illustrative climber has credence $\tfrac15$ that she dies on an expedition ($D$). Money is linear in utility if she survives; a payout on $D$ goes to her heirs and is worth a quarter as much to her ($\lambda_D = \tfrac14$).

(a) What sure amount does she take as equivalent to a policy paying 2,000 dollars on $D$? What probability of $D$ would an analyst elicit assuming state-independent linear utility?
(b) Show that a climber with credence $\tfrac19$ and $\lambda_D = \tfrac12$ would make exactly the same choice in (a), and that she and the original climber rank *every* act alike.
(c) In two sentences: which assumption of Savage's framework makes his probability unique, and what does (b) show about its status?

**P3 (🔴, optional) *(Exegetical (a) · Evaluative (b).)***

(a) In two sentences, say what the Dutch book argument establishes about credences that Savage's representation theorem does not, and one assumption it needs that Savage's does not. Cite; no proof.
(b) A constructivist says: since preference cannot separate credence from state-dependent value, a "credence" is just the $Q$ a convention picks out, not a state of mind. A realist says credences are real states that preference measures imperfectly. In 120 words or fewer, find the crux between them and say what would move each side. Any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(c))*

(a) $u(400) = \tfrac12(1) + \tfrac12(0) = \tfrac12$. Then $u(625) = \tfrac12(1) + \tfrac12\cdot\tfrac12 = \tfrac34$.

(b) $P(R) = \dfrac{u(625) - u(0)}{u(900) - u(0)} = \tfrac34$.

(c) $625/900 = 25/36 \approx 0.694$, an **underestimate** of $\tfrac34$: her utility is concave, so the sure 625 is worth more to her in utility (0.75) than in money share (0.694), and the money reading counts her risk aversion as doubt about rain.

**Must hit, strict (a)–(c):** $\tfrac12$, $\tfrac34$; $P(R) = \tfrac34$; $25/36$, too low, because curvature is mistaken for doubt.

**Wrong turns:** computing $u(625)$ as the midpoint of 0 and 1 (the second bet's low prize is 400, not 0). Saying the money reading errs upward.

---

**P2** *(Formal (a)–(b) · Exegetical (c))*

(a) The sure $c$ arrives in both states:

$$\begin{aligned}
c\left(\tfrac15\cdot\tfrac14 + \tfrac45\cdot 1\right) &= \tfrac15\cdot\tfrac14\cdot 2000\\
c\cdot\tfrac{17}{20} &= 100\\
c &= \tfrac{2000}{17} \approx 117.65 .
\end{aligned}$$

The analyst reads $P(D) = c/2000 = \tfrac1{17}$, against her true $\tfrac15$.

(b) Second climber: $c\left(\tfrac1{18} + \tfrac89\right) = \tfrac1{18}\cdot 2000$, so $c = 2000\cdot\tfrac{1/18}{17/18} = \tfrac{2000}{17}$, the same. For every act: each agent values act $f$ at $w_D\,f(D) + w_L\,f(L)$ with weights $w_D = P(D)\lambda_D$ and $w_L = P(\text{live})$. First climber: $\tfrac1{20} : \tfrac45 = 1 : 16$. Second: $\tfrac1{18} : \tfrac89 = 1 : 16$. Equal ratios mean identical rankings of all acts (and the state-independent $\tfrac1{17} : \tfrac{16}{17}$ is $1 : 16$ too).

**Must hit, strict (c):**

- **State-independence** (a consequence has the same utility in every state, carried by P3 and P4) is what fixes a unique probability.
- (b) shows it is not read off the preferences: infinitely many pairs ($P$, $\lambda$) fit the same choices, so the uniqueness is a stipulation of the framework, not a discovery about the agent.

**Wrong turns:** forgetting that the sure amount is also received in $D$ (giving $c = 2000\cdot\tfrac15\cdot\tfrac14 = 100$). Naming P2, the sure-thing principle, as the source of uniqueness.

**Model answer (c):** Savage's probability is unique only because his postulates make utility state-independent: a prize counts the same whichever state delivers it. Since two climbers with different credences and different state-dependent values choose identically, that assumption is a convention imposed on the data, not something the data confirm.

---

**P3** *(Exegetical (a) · Evaluative (b))*

**Must hit, strict (a):**

- The Dutch book (Ramsey sketched it; de Finetti developed it; [`epistemology`](../../epistemology/syllabus.md) 5.2 owns it) gives a *normative* argument targeted at credences: betting quotients that violate the probability axioms expose you to a sure loss, so the incoherence is exploitable. Savage's theorem shows only that preferences satisfying his postulates are *representable* by a probability and a utility.
- An assumption it needs that Savage does not: utility linear in money over the stakes (or stakes small enough to treat so), and that the agent will take either side of any bet at her quotient. It also works with finitely many events, without Savage's rich state space.

**Must hit, any verdict (b):**

- The crux stated as one premise: whether a credence is *constituted* by its role in preference (constructivist) or is a state with other marks, such as its role in inference, report and response to evidence, that preference tracks (realist).
- What moves the constructivist: a non-preference source that pins down $\lambda$, for instance credences fixed by evidence (a known chance) disagreeing with the conventional $Q$, where the agent herself sides with the evidence.
- What moves the realist: showing that those other marks are themselves fixed only up to the same trade-off with value, or that nothing beyond choice settles them.

**Wrong turns:** treating the insurance case as refuting the realist outright. It shows preference underdetermines credence, which the realist accepts. Arguing a verdict instead of locating the premise.

**Model answer (b), one of several:** They agree that choices fix only $P(s)\lambda_s$. They split on whether credence is anything over and above what choices fix. The constructivist holds that "credence" names a role in a representation, so where the representation is unique only by convention, so is the credence. The realist holds that credence is a state with other footprints: it is revised by evidence, shows up in assertion and in inference. The constructivist should move if those footprints reliably select one $(P, \lambda)$ pair, as when a climber cites a published fatality rate and says she simply values bequests less. The realist should move if the footprints turn out to be fixed only by the same choices, leaving nothing independent to measure.

</details>

## Flashback

**From Lesson [1.4](01-04-what-a-representation-theorem-shows.md) (What a representation theorem shows):** *(Formal (a) · Exegetical (b).)* A spinner pays Rosa 200 dollars with probability 0.6; with probability 0.4 she instead reaches a choice between 800 dollars for sure and a 0.75 chance of 1,200 dollars (else nothing). At the choice node she takes the sure 800. Asked at the start, she prefers the plan "take the gamble at the node" to the plan "take the sure 800".

(a) Reduce both plans to one-stage lotteries. Normalizing $u(0) = 0$ and $u(1200) = 1$, show that no utility function makes both preferences expected-utility maximizing, whatever $u(200)$ is. Which axiom does she violate, and with what $\alpha$ and what common lottery $N$?
(b) One line each for myopic, sophisticated and resolute Rosa: the plan she adopts at the start, what she does at the node, and, for myopic and resolute Rosa, the premise of the sequential-choice argument she gives up.

<details>
<summary>Solution</summary>

(a) Plan "sure": 200 with probability 0.6, 800 with 0.4. Plan "gamble": 200 with 0.6, 1,200 with $0.4 \times 0.75 = 0.3$, nothing with $0.4 \times 0.25 = 0.1$. Write $w = u(200)$.

$$\begin{aligned} 800 \succ 0.75 \text{ of } 1200 &\;\Rightarrow\; u(800) > 0.75,\\ \text{gamble plan} \succ \text{sure plan} &\;\Rightarrow\; 0.6\,w + 0.3 > 0.6\,w + 0.4\,u(800)\\ &\;\Rightarrow\; u(800) < 0.75. \end{aligned}$$

The $0.6\,w$ term appears on both sides and cancels, so no value of $u(200)$ rescues her: the two inequalities contradict each other. This is a violation of **independence** with $\alpha = 0.4$, $L$ = 800 for sure, $L'$ = 0.75 of 1,200, and $N$ = 200 dollars for sure.

**Must hit, strict (b):**

- Myopic: adopts the gamble plan, takes the sure 800 at the node; gives up **dynamic consistency**.
- Sophisticated: foresees taking the sure 800, so adopts the sure plan and carries it out; consistent, but she ends with the plan she ranked *below* the gamble plan (and would pay for a binding commitment to the gamble).
- Resolute: adopts the gamble plan and takes the gamble at the node; gives up **consequentialism**, letting the 0.6 branch that did not occur steer her choice.

**Wrong turns:** expecting a non-zero common branch to change the verdict; independence covers every $N$, and $u(200)$ cancels. Giving the gamble plan a 0.75 chance of 1,200 instead of 0.3. Saying sophisticated Rosa breaks dynamic consistency: she does exactly what she planned. Saying resolute Rosa gives up dynamic consistency rather than consequentialism.

</details>

## Connections

- **Backward:** [1.3](01-03-the-vnm-theorem-and-how-utility-is-built.md)'s standard gamble built utility from given probabilities; Ramsey's neutral coin does the same with a probability the choices certify. [2.1](02-01-savages-framework.md) stated the [Savage framework](../reference.md#savage-framework) and P1–P7; this lesson shows P4 and P6 at work. Bayes and conditional probability are [prob-stat-refresher 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md)'s.
- **Forward:** [2.3](02-03-the-allais-paradox-and-the-sure-thing-principle.md) and [3.1](03-01-the-ellsberg-paradox.md) show choices that no probability fits, the first under given probabilities and the second under elicited ones. [3.2](03-02-models-of-ambiguity.md) replaces one elicited probability with a set.
- **Sideways:** the Dutch book and probabilism belong to [`epistemology`](../../epistemology/syllabus.md) 5.1–5.2. Bequest motives are why the life-insurance case is not exotic. The constructivism question is [philosophy-of-economics 2.1](../../philosophy-of-economics/lessons/02-01-preference-and-revealed-preference.md)'s about preference, asked of belief.
