# Decision Theory · Lesson 5.4: Population ethics II: escape routes

> ⏱ ~15 min · Module 5: Aggregating people · Builds on: [5.3 Population ethics I: total and average](05-03-population-ethics-total-and-average.md) · Unlocks: [6.1 Pascal's wager as a decision problem](06-01-pascals-wager-as-a-decision-problem.md)

## Why this matters

[5.3](05-03-population-ethics-total-and-average.md) left two bad options. The [total view](../reference.md#total-view) implies the [repugnant conclusion](../reference.md#repugnant-conclusion): for any very good population there is a better one, enormous, whose lives are barely worth living. The [average view](../reference.md#average-view) dodges it but ranks populations in ways that seem crazy. Parfit's **mere addition paradox** shows why a third view is hard to find. Three premises that look almost too obvious to state lead, step by step, to the repugnant conclusion. Every escape route denies one of them, and each denial has a price. This lesson prices them.

## The idea

Start with population A: everyone's life goes very well. Now add some extra people, in a separate place, whose lives are worth living but much worse. Nobody in A is affected and no one is wronged. Call this A+. It is hard to see how A+ could be *worse* than A. All that happened is that some good lives were added.

Now compare A+ with B. B has the same number of people as A+, everyone at one level. That level sits below A's people and well above the extras, so B has a higher total, a higher average, and perfect equality. B looks better than A+.

If A+ is no worse than A and B is better than A+, then B is better than A. Run the same two steps again from B, and again, and you arrive at Z: a vast population whose lives are barely worth living, ranked above A. Each step looked fine; the destination is the conclusion we wanted to avoid. Parfit sets this out in *Reasons and Persons* (1984), Part IV.

## The argument

Write a population as a list of welfare levels $u_1,\dots,u_n$, where $n$ is the number of people and $u_i$ is person $i$'s lifetime welfare. Welfare 0 is a life neither worth living nor not; positive means worth living.

**The mere addition paradox.**

1. **Mere addition.** A+ is not worse than A. *In words: adding lives worth living that affect nobody else cannot make things worse.*
2. **Equalizing improvement.** B is better than A+. *In words: same people, more equal, higher total and higher average: better.*
3. **Transitivity.** If B is better than A+ and A+ is not worse than A, then B is better than A. *In words: "better than" chains.*
4. So B is better than A; iterating gives Z better than A, the repugnant conclusion.

The course's signature move applies directly: the conclusion follows, so whoever rejects it must give up premise 1, premise 2, or premise 3. The total view gives up none and accepts the conclusion. Here are the main exits.

**[Critical-level view](../reference.md#critical-level-view)** (Blackorby, Bossert and Donaldson are its main developers). Fix a level $c>0$. Then

$$V_c=\sum_{i=1}^{n}(u_i-c).$$

*In words: a life adds value only if its welfare exceeds $c$; a life worth living but below $c$ subtracts.* At $c=0$ this is the total view. With $c>0$, extras below $c$ make A+ worse than A: **premise 1 goes.** Z, whose lives sit below $c$, has negative value, so the repugnant conclusion is blocked.

**The cost: the [sadistic conclusion](../reference.md#sadistic-conclusion).** Arrhenius named it: sometimes adding people with *negative* welfare is better than adding some number of people with *positive* welfare. Critical-level views imply it, because a life at $0<u<c$ still costs $c-u$, and enough such lives cost more than a few miserable ones. The average view implies it too.

**[Person-affecting views](../reference.md#person-affecting-views).** The **person-affecting restriction**: one outcome is worse than another only if it is worse *for* someone. The **narrow** version counts only people who exist in both outcomes; Parfit also formulated a **wide** version, which compares the benefits of whoever would exist and is built to handle the [non-identity problem](../reference.md#non-identity-problem). Take the narrow version, comparing two outcomes by summing gains and losses to the people in both. It accepts premise 1 (no one in A is worse off in A+). It accepts premise 2 when A+ and B contain the same people and the sum of gains is positive. But it says B is worse than A, because A's people are worse off in B. **Transitivity goes**, at least for the relation the view defines.

**Variable value views** (Hurka; Ng). Value is $V=g(n)\,\bar u$, where $\bar u$ is average welfare and $g$ is increasing, concave and bounded. *In words: more people add value, but each extra person adds less; small populations are ranked roughly by total, huge ones by average.* Adding lives well below average can lower $V$, so premise 1 fails in those cases, and the bound on $g$ stops Z from winning.

**Denying transitivity outright** (Temkin, *Rethinking the Good*, 2012). Temkin argues that "all things considered better than" is not transitive, because which considerations matter depends on which outcomes are being compared. Premise 1 is driven by a person-affecting consideration, premise 2 by an impersonal one, so nothing guarantees that the comparisons chain. **Premise 3 goes.** The cost is the one [1.4](01-04-what-a-representation-theorem-shows.md) priced for individual preference: an intransitive ranking can be [money-pumped](../reference.md#money-pump), and "best option" may not exist on a menu.

**The impossibility results.** Arrhenius proved that no population axiology that ranks all populations completely and transitively satisfies a short list of adequacy conditions at once. The list includes avoiding the repugnant conclusion, avoiding the sadistic conclusion, and a mild mere-addition principle. They are named here, not proved. The upshot is the lesson's thesis made exact: every view bites some bullet.

**Where the argument is weakest.** The paradox gets its grip from premise 1, and premise 1 gets its grip from the description "mere addition": the extras affect no one and no injustice is involved. Critics of premise 1 say that description smuggles in the person-affecting intuition, that nobody is harmed so nothing is worse, which the total view itself rejects. On impersonal views, adding a lower-welfare life can make an outcome worse even though no one is worse off. Its defenders reply that denying premise 1 is exactly what leads to the sadistic conclusion. So the dispute is a crux between two axioms. One is the person-affecting restriction, which licenses premise 1. The other is impersonal comparison, which licenses premise 2. Only the total view keeps both, and it pays with the conclusion.

## Picture

![Three populations drawn as boxes, width the number of people and height welfare per person. A is 200 people at 90. A plus is the same 200 at 90 with 200 more at 10 beside them. B is 400 people at 55. A dashed line at welfare 25 marks the critical level. Under each box: A total 18,000, average 90, critical-level value 13,000; A plus total 20,000, average 50, critical-level value 10,000; B total 22,000, average 55, critical-level value 12,000](assets/05-04-fig1.svg)

Parfit's boxes with this lesson's numbers. Area is total welfare. The dashed line is the critical level $c=25$: under the critical-level view, only the part of each box above the line counts positively, and the extras in A+ sit entirely below it.

## Worked examples

**Example 1 (clean): one triple, four views.** A is 200 people at 90. A+ adds 200 people at 10. B is 400 people at 55. Take $c=25$.

$$\begin{aligned}
\text{Total: } & A=18{,}000,\quad A^{+}=18{,}000+2{,}000=20{,}000,\quad B=22{,}000,\\
\text{Average: } & A=90,\quad A^{+}=20{,}000/400=50,\quad B=55,\\
\text{Critical level: } & A=200(65)=13{,}000,\\
& A^{+}=13{,}000+200(10-25)=10{,}000,\\
& B=400(55-25)=12{,}000.
\end{aligned}$$

So the total view ranks $B>A^+>A$ and accepts all three premises. The average view ranks $A>B>A^+$: it denies premise 1 ($A^+$ is worse than $A$) and keeps premise 2. The critical-level view also ranks $A>B>A^+$, by the same denial. The narrow person-affecting view gets A+ not worse than A. Treat B as the same 400 people as A+. A's 200 lose 35 each and the extras gain 45 each, a net change of

$$200(-35)+200(45)=2{,}000>0,$$

so B is better than A+. But A's people are worse off in B, so B is worse than A. That is three pairwise verdicts with no consistent ordering.

**Example 2 (hard): the sadistic conclusion with these numbers.** Start from A again, $c=25$. Option S adds 40 people at welfare $-5$, lives not worth living. Option H adds 200 people at welfare 15, lives clearly worth living.

$$\begin{aligned}
\text{Critical level: } & S\text{ adds } 40(-5-25)=-1{,}200,\\
& H\text{ adds } 200(15-25)=-2{,}000.
\end{aligned}$$

The critical-level view prefers adding the 40 suffering people. The average view agrees: with S the average is $17{,}800/240\approx74.2$, with H it is $21{,}000/400=52.5$. The total view does not: S changes the total by $-200$ and H by $+3{,}000$. (The average view's case is a cousin of 5.3's "hell" case. There, adding suffering people *raises* the average because the existing people are worse off still.)

Here the tool strains. The defender of a critical level has two replies. One is to say that both options are bad, so preferring the less bad is no scandal. The other is to say that the result follows from the same feature that blocks Z: lives just above zero carry negative value. Either way, the bullet generalizes. The more people a view needs before it lets in lives below $c$, the more miserable lives it will prefer to them.

## Watch out

- **You might think** the critical-level view treats lives below $c$ as not worth living. It does not: those lives are good *for the people who live them*; the view says only that adding them makes the *outcome* worse. That gap is exactly what the sadistic conclusion exploits.
- **You might think** a person-affecting view simply rejects premise 2. On the narrow version with these numbers it accepts both premises and rejects the conclusion, so what it loses is transitivity. Other versions locate the loss elsewhere; say which version you mean.
- **You might think** giving up transitivity is a cheap move. It is the same axiom whose loss [1.4](01-04-what-a-representation-theorem-shows.md) showed makes an individual exploitable. Temkin accepts that cost knowingly.

## One-liner

> Mere addition, impersonal improvement and transitivity jointly entail the repugnant conclusion. The total view accepts it, the average, critical-level and variable value views drop mere addition and pay with the sadistic conclusion, and person-affecting and Temkinian views drop transitivity.

## Problems

**P1 (🟢)** *(Formal (a)–(b) · Exegetical (c).)* A critical-level view has $c=5$. Option S adds 50 people at welfare $-10$ to an existing population; option H instead adds 400 people at welfare 3.

(a) Compute each option's change in critical-level value, and say which the view prefers.
(b) Keep the two options fixed. Find every critical level $c\ge0$ at which the view prefers S to H.
(c) Name the result in (a) and say in one sentence why the total view does not face it on these options.

**P2 (🟡)** *(Formal (a) · Exegetical (b).)* A is 100 people at 60. A+ adds 100 people at 20. B is the same 200 people as A+, all at 45.

(a) Compute the total, average and critical-level value ($c=35$) of A, A+ and B, and give each view's ranking.
(b) For each of the following, name which premise of the mere addition paradox it denies, one line each: the average view; the critical-level view with $c=35$; the narrow person-affecting view of this lesson (show its three pairwise verdicts); Temkin.

**P3 (🔴, optional)** *(Exegetical (a) · Evaluative (b).)* Invented exchange. A town can fund a fertility programme that will, over a generation, add 5,000 people whose lives go well, though somewhat less well than the current residents'. No current resident's welfare changes. Tomás, a total utilitarian, says: "The programme makes the world better: 5,000 good lives exist that otherwise would not." Rhea, a narrow person-affecting theorist, says: "It makes the world neither better nor worse. Nobody is better off for it, since those 5,000 would not otherwise exist."

(a) Name the single premise Tomás accepts and Rhea denies. One sentence.
(b) Say what case or consideration would move one of them, and whether that side's bullet generalizes. 150 words or fewer. Any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c))*

(a) Each added person contributes $u-c$:

$$\begin{aligned}
S &: 50(-10-5)=-750,\\
H &: 400(3-5)=-800.
\end{aligned}$$

$-750>-800$, so the view prefers adding the 50 people whose lives are not worth living.

(b) S is preferred iff

$$\begin{aligned}
50(-10-c) &> 400(3-c)\\
-500-50c &> 1{,}200-400c\\
350c &> 1{,}700\\
c &> 34/7\approx4.86.
\end{aligned}$$

So the view prefers S for every $c>34/7$ and H for $0\le c<34/7$, with indifference at $c=34/7$. (A grid over $c$ in steps of 0.001 up to 20 confirms the cut-off.)

(c) This is the sadistic conclusion (Arrhenius): adding negative-welfare lives is ranked above adding positive-welfare lives. The total view ($c=0$) scores S at $-500$ and H at $+1{,}200$, so it always prefers H, because a positive life never subtracts on that view.

**Must hit, strict (a):** $-750$ and $-800$ with the arithmetic; S preferred.

**Must hit, strict (b):** the inequality set up per person as $u-c$ and solved to $c>34/7$.

**Must hit, strict (c):** "sadistic conclusion"; total view prefers H because a life with $u>0$ adds value.

**Wrong turns:** subtracting $c$ only from the positive lives (it applies to every added person, including those below zero). Reading $c>34/7$ as "the view is sadistic only at high critical levels": with other numbers any $c>0$ yields some sadistic choice.

---

**P2** *(Formal (a) · Exegetical (b))*

(a)

$$\begin{aligned}
\text{Total: } & A=6{,}000,\quad A^{+}=8{,}000,\quad B=9{,}000,\\
\text{Average: } & A=60,\quad A^{+}=8{,}000/200=40,\quad B=45,\\
\text{Critical level: } & A=100(25)=2{,}500,\\
& A^{+}=2{,}500+100(20-35)=1{,}000,\\
& B=200(10)=2{,}000.
\end{aligned}$$

Total: $B>A^+>A$. Average: $A>B>A^+$. Critical level: $A>B>A^+$.

(b)

- Average view: denies premise 1 ($A^+$ at 40 is worse than $A$ at 60).
- Critical-level view ($c=35$): denies premise 1 (the extras at 20 subtract 1,500).
- Narrow person-affecting view: A+ not worse than A (no one in A loses); B better than A+ (net $100(-15)+100(25)=1{,}000>0$); B worse than A (A's people lose 15 each). It accepts premises 1 and 2 and rejects the conclusion, so it denies transitivity.
- Temkin: denies transitivity of "all things considered better than".

**Must hit, strict (a):** all nine values; the three rankings.

**Must hit, strict (b):** premise 1 for average and critical-level; transitivity for the narrow person-affecting view with its three verdicts; transitivity for Temkin.

**Wrong turns:** saying the critical-level view denies premise 2: with equal population sizes it ranks B over A+ exactly as the total view does. Saying the person-affecting view denies premise 1: no one in A is worse off in A+, which is the case premise 1 describes.

---

**P3** *(Exegetical (a) · Evaluative (b))*

**Must hit, strict (a):** the person-affecting restriction: an outcome can be better or worse only if it is better or worse for someone. Rhea accepts it; Tomás denies it, treating value as impersonal.

**Must hit, any verdict (b):**

- State the restriction precisely and run it on the case: no one exists in both outcomes and is better off, so the programme makes things neither better nor worse.
- Name what would move Tomás: the repugnant conclusion, which impersonal totals deliver; or what would move Rhea: the non-identity problem or the transitivity failure her view produces in the mere addition paradox.
- Say whether the chosen side's bullet generalizes: Tomás's to every case of adding barely-good lives; Rhea's (narrow) to every policy that changes who is born.

**Wrong turns:** making the crux "whether the 5,000 lives are good": both agree they are. Making it "total vs average": neither uses averages here.

**Model answer (b), one of several:** Rhea's view keeps premise 1 and shields her from Tomás's main liability, the repugnant conclusion, since adding lives never makes things better on her view. But the narrow restriction proves too much. Change the case so the programme also degrades the environment and the 5,000 are born into hardship but still have lives worth living. Rhea must say no one is wronged, because none of them would exist otherwise. That is the non-identity problem, and it recurs for every policy that changes who is born, which is most large policies. Tomás handles that case easily, since lower welfare in the outcome is worse whoever has it. His bullet is the repugnant conclusion, and it generalizes just as far: any good population can be beaten by adding enough barely-good lives. So the case alone settles nothing. What decides it is which recurring bullet one finds less costly.

</details>

## Flashback

**From Lesson [5.2](05-02-interpersonal-comparison-and-social-welfare-functions.md) (Interpersonal comparison and social welfare functions):** *(Formal (a) · Exegetical (b).)* Ana and Ben; each one's vNM utility is their well-being, measured on a ratio scale common to both. Three policies: $G$ gives Ana 9 and Ben 1 for sure; $L$ flips a fair coin, giving $(9,1)$ on heads and $(1,9)$ on tails; $E$ gives each 4 for sure.

(a) Score $G$, $L$ and $E$ by the equal-weight Harsanyi sum, by $W_{\text{post}}$ and by $W_{\text{ante}}$, both with $f=\sqrt{\ }$.
(b) Using these three policies, name the principle each rule gives up: one sentence each, citing the pair that shows it.

<details>
<summary>Solution</summary>

(a) Each person's expected utility is 9 and 1 under $G$, 5 and 5 under $L$, 4 and 4 under $E$.

$$\begin{aligned}
\text{Harsanyi: } & G=10,\quad L=\tfrac12(10)+\tfrac12(10)=10,\quad E=8,\\
W_{\text{post}}: \ & G=3+1=4,\quad L=\tfrac12(4)+\tfrac12(4)=4,\quad E=2+2=4,\\
W_{\text{ante}}: \ & G=\sqrt9+\sqrt1=4,\quad L=2\sqrt5\approx4.47,\quad E=4.
\end{aligned}$$

Harsanyi: $G\sim L>E$. $W_{\text{post}}$: all three tie. $W_{\text{ante}}$: $L>G\sim E$.

**Must hit, strict (b):**

- $W_{\text{post}}$ gives up ex ante Pareto: each person expects 5 under $L$ against 4 under $E$, so both strictly prefer $L$, yet it ranks them equal.
- $W_{\text{ante}}$ gives up social expected utility (independence): it ties $G$ with its mirror image $(1,9)$, both 4, yet ranks their fifty-fifty mixture $L$ strictly higher.
- The Harsanyi sum keeps both and gives up fair chances: $G\sim L$, though only $L$ gives Ben a chance at 9.

**Wrong turns:** computing $W_{\text{post}}(L)$ as $2\sqrt5$, which is the ex ante formula; ex post takes $f$ inside each outcome first. Saying $W_{\text{post}}$ cares about fair chances because it is prioritarian: every outcome of $L$ is as unequal as $G$, so it cannot tell them apart. Charging the Harsanyi sum with a Pareto violation: it ranks $L$ above $E$, 10 to 8, as both people do.

**Model answer (b):** $W_{\text{post}}$ violates ex ante Pareto, tying $L$ with $E$ though both people expect more under $L$. $W_{\text{ante}}$ violates social independence, preferring $L$ to the two sure allocations it mixes, which it ranks equal. The Harsanyi sum keeps both principles and pays by being indifferent between handing Ana the good and giving Ben a fair chance at it.

</details>

## Connections

- **Backward:** [5.3](05-03-population-ethics-total-and-average.md) built the total and average views and the repugnant conclusion that this lesson's paradox reaches by another road. The narrow person-affecting view is the one the non-identity problem defeats in [`philosophy-of-debt` 6.2](../../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md). Temkin's exit gives up the transitivity that [1.4](01-04-what-a-representation-theorem-shows.md) defended with a money pump.
- **Forward:** [6.2](06-02-fanaticism-and-tiny-probabilities.md) meets the same shape in a different place: a conclusion many reject (fanaticism) that every exit avoids only by giving up an axiom. [6.3](06-03-moral-uncertainty.md) asks what to do when you are unsure which of these axiologies is true.
- **Sideways:** [`philosophy-of-economics` 4.3](../../philosophy-of-economics/lessons/04-03-uncertainty-the-long-run-and-future-people.md) notes that a person-affecting complaint about a far-future policy finds no victim; this lesson shows what the person-affecting view costs as an axiology. Naming the one premise Tomás and Rhea split on is [`philosophical-method` 4.3](../../philosophical-method/lessons/04-03-finding-the-crux.md)'s method.
