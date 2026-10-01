# Philosophy of Economics · Lesson 5.4: Markets and desert

> ⏱ ~15 min · Module 5: Markets: their moral limits and their justice · Builds on: [5.3 Exploitation in labour markets](05-03-exploitation-in-labour-markets.md), [3.1 The Pareto principle](03-01-the-pareto-principle.md) · Unlocks: [5.5 Hayek: knowledge, order, and the mirage of social justice](05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)

## Why this matters

"She earned it" is the commonest defence of a market income, and "they don't deserve that" the commonest attack. Economics seems to have a ready answer: in competitive equilibrium each factor is paid its marginal product, so pay tracks contribution. This lesson takes that answer apart. Marginal productivity theory is a theory of prices. To turn it into a theory of desert takes a normative premise and a conceptual one, and the lesson finds both.

## The idea

**Desert is three-place.** A person deserves some treatment *in virtue of* some fact about her: a grade for the quality of the essay, a prize for the race won. Feinberg ("Justice and Personal Desert", in *Doing and Deserving*, 1970) made the point that desert always needs a [desert basis](../reference.md#desert-bases), a fact about the deserver. A claim that someone deserves her income is incomplete until it names the basis.

For income the literature offers three main candidates:

- **Contribution:** pay in proportion to what you add to the social product.
- **Effort:** pay in proportion to what you put in, whatever comes of it.
- **Compensation:** pay for the costs you bear: danger, drudgery, training forgone.

They come apart constantly. A gifted worker contributes much with little effort; a dogged one strains for a modest output. Miller (*Principles of Social Justice*, 1999) defends contribution as the main basis of economic desert, and argues that a suitably competitive market rewards it roughly.

**J. B. Clark** made the boldest version of the claim. The preface of *The Distribution of Wealth* (1899) states his purpose:

> "to show that the distribution of the income of society is controlled by a natural law, and that this law, if it worked without friction, would give to every agent of production the amount of wealth which that agent creates."

Read the claim carefully. It is a claim about competition, and Clark presents the question it answers as one of "pure fact". Whether getting what you create is *just* he sets aside as a matter for ethics. Yet he frames the whole inquiry as a test of whether wages are honest, and of whether the worker is left anything "by right of creation". The value judgment is already in the question.

## The argument

**Clark's argument, reconstructed.**

1. **(Normative)** A person has a just claim to what she creates. *In words:* to each what he creates; Clark calls it the principle on which property rests.
2. **(Conceptual)** What a unit of a factor creates is its [marginal product](../reference.md#marginal-productivity-theory): the output lost if that unit is withdrawn, all else fixed.
3. **(Empirical)** Under frictionless competition each factor unit is paid the value of its marginal product.
4. **(Formal)** Under constant returns to scale, these payments add up to exactly the whole product.

∴ **C.** Competitive factor incomes give each person what she creates, so they are just; nothing is left over for anyone to have taken.

**The formal tool.** Take Cobb-Douglas output $Q=AK^{\alpha}L^{1-\alpha}$, with $K$ capital, $L$ labour, $A>0$ and $0<\alpha<1$. The marginal products, as in [`grad-micro` 3.1](../../grad-micro/lessons/03-01-production-sets-technology.md), are

$$MP_L=\frac{\partial Q}{\partial L}=(1-\alpha)\frac{Q}{L},\qquad MP_K=\frac{\partial Q}{\partial K}=\alpha\frac{Q}{K}.$$

A competitive firm selling at price $p$ hires until the wage equals the value of the marginal product, $w=p\,MP_L$, and likewise $r=p\,MP_K$. Because $Q$ is homogeneous of degree 1, [Euler's theorem](../reference.md#eulers-theorem) gives

$$MP_L\cdot L+MP_K\cdot K=(1-\alpha)Q+\alpha Q=Q.$$

*In words:* pay every unit its marginal product and the product is exactly used up, with labour taking the share $1-\alpha$. That is premise 4, and it is what lets Clark say no one is left robbed.

**Find the value judgment.** Premise 2 chooses one counterfactual among many. With complementary factors, remove *all* labour and output falls to zero; remove all capital and it also falls to zero. On an all-or-nothing test each factor "creates" the whole product, and the shares sum to twice the output. The marginal convention is the one that happens to add up under constant returns. That is a reason to adopt it as an accounting rule. It is not a discovery that the last worker's output *is* what each worker made.

**The rival positions, each at full strength.**

- **Luck egalitarianism** (cited to [`political-philosophy`](../../political-philosophy/syllabus.md) 2.6). Distributions should track choices, not [brute luck](../reference.md#brute-and-option-luck), the luck no one chose or could have insured against. Talent is brute luck, and so is the demand for one's skill. A marginal product reflects both, so it is a poor desert basis; effort is better. Rawls's claim that no one deserves his natural endowments is the root of this line (cited to [`political-philosophy`](../../political-philosophy/syllabus.md) 2.2-2.3).
- **The contribution theorist's reply.** A desert basis need not itself be deserved. The sprinter deserves the medal for running fastest, though she did not earn her fast-twitch fibres. If desert required deserved bases all the way down, almost no one would deserve anything, effort included, since a capacity for effort is also partly luck.
- **[Entitlement without desert](../reference.md#entitlement-theory)** (Nozick, cited to [`political-philosophy`](../../political-philosophy/syllabus.md) 2.4). Holdings are just if they arose by just acquisition and just transfer, whatever anyone deserves. In Nozick's Wilt Chamberlain case, fans freely pay to watch a star play; the star's large income is just because the transfers were free, not because he deserves it. This view drops premise 1, not premise 2, and defends market incomes anyway.
- **The [just wage](../reference.md#just-wage).** *Rerum Novarum* (Leo XIII, 1891, §45, Vatican translation) allows that worker and employer may agree freely on wages, but holds that natural justice demands more than the bargain: "wages ought not to be insufficient to support a frugal and well-behaved wage-earner." A floor set by need, independent of contribution and of agreement. It is one position here, cited to `catholic-social-teaching`.

**Where the argument is weakest.** Premise 2, joined to price. A wage equals the value of a marginal product, $p\,MP_L$, and $p$ is set by other people's demand. A critic says the worker's "contribution" then moves with tastes and the supply of rival workers, none of which she does, so contribution in this sense is largely circumstance. The contribution theorist answers that value to others is exactly what an economic contribution is: a technically perfect product nobody wants contributes nothing. The dispute is over what counts as *her* doing.

## The demand shock

![Two downward-sloping curves of the value of the marginal product of labour against the number of workers, one at price 30 and a lower dashed one at price 20. At 25 workers the wage falls from 120 to 80 dollars a day, though the worker and her effort are unchanged](assets/05-04-fig1.svg)

Example 1's firm. The curve shows what one more worker adds in dollars; the wage sits on it at 25 workers. A fall in the product's price shifts the whole curve down. Nothing about the worker moved.

## Worked examples

**Example 1 (clean): Euler and a demand shock.** Invented numbers. A workshop has $Q=4K^{1/2}L^{1/2}$ with $K=100$ machines and $L=25$ glassblowers, whose skill is specific to the trade. Then $Q=4\times10\times5=200$ pieces a day, and

$$MP_L=\tfrac12\cdot\tfrac{200}{25}=4,\qquad MP_K=\tfrac12\cdot\tfrac{200}{100}=1.$$

Euler: $4\times25+1\times100=200$. Output is exactly used up, half to each factor.

At a price of 30 dollars a piece, each glassblower is paid $30\times4=120$ dollars a day. Fashion turns; the price falls to 20. She blows the same 4 marginal pieces with the same care, and her pay falls to $20\times4=80$ dollars, a third lower.

Read off the verdicts. On a contribution basis measured in value, she now deserves 80. On an effort basis she deserves what she did before. A luck egalitarian calls the 40-dollar fall brute luck. Nozick asks only whether the new wage came from free transfers.

**Example 2 (hard): when the shares do not add up.** Invented numbers. Suppose increasing returns, $Q=2K^{0.6}L^{0.6}$, with $K=L=32$. Since $32^{0.6}=8$, $Q=2\times8\times8=128$. Each marginal product is $0.6\times128/32=2.4$, so paying both factors their marginal products costs $2.4\times32+2.4\times32=153.6$, which is 20 percent more than exists. Under decreasing returns the payments fall short, and a residual is left that no factor "created".

Here Clark's premise 4 fails, and with it the claim that marginal payment is a complete account of who made what. Constant returns is a technical fact about some industries, not a moral fact; desert cannot hang on the exponents.

## Watch out

- **You might think marginal productivity theory says workers deserve their wages, but actually it says what competitive wages *are*.** Premise 3 is empirical, premise 2 conceptual, premise 1 normative. Monopsony or bargaining power could break premise 3, while leaving the other two intact; a defence of 1 and 2 gives no evidence about 3.
- **You might think a lower wage after a demand shock shows she contributes less, but actually that holds only on a value measure of contribution.** Her physical marginal product did not change. Which measure is the right desert basis is the dispute, not a finding.
- **You might think Nozick defends market incomes as deserved, but actually he defends them as entitlements.** Desert does no work in his theory; [5.5](05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md) shows Hayek going further and denying that market outcomes can be just or unjust at all.

## One-liner

> Competitive markets pay each factor the value of its marginal product, and under constant returns those payments use up the product; calling that "deserved" needs a normative premise (to each what he creates) and a conceptual one (the marginal product is what he creates), and luck egalitarians, entitlement theorists and just-wage theorists each reject a different piece.

## Problems

**P1 (🟢) *(Formal (a)-(b) · Exegetical (c).)*** Invented numbers. A bakery has $Q=6K^{1/3}L^{2/3}$ with $K=8$ ovens and $L=64$ bakers, and sells at 40 dollars per unit of output. (a) Compute $Q$, $MP_L$ and $MP_K$, and check that paying each factor its marginal product uses up the product. Give each baker's daily wage. (b) The owner installs more ovens, so $K=27$; the bakers work exactly as before. Recompute $Q$, $MP_L$ and the wage. (c) In one or two sentences: on Clark's premise 2, whose contribution produced the bakers' raise, and why is that awkward for a contribution theory of desert?

**P2 (🟡) *(Exegetical (a)-(b).)*** Close reading. J. B. Clark, *The Distribution of Wealth* (1899), ch. I (public domain):

> "If each productive function is paid for according to the amount of its product, then each man gets what he himself produces. … We might, indeed, go into a further and purely ethical inquiry. We might raise the question, whether a rule that gives to each man his product is, in the highest sense, just. … The entire question whether this is just or not lies outside of our inquiry, for it is a matter of pure ethics. Before us, on the other hand, is a problem of economic fact. … A plan of living that should force men to leave in their employers' hands anything that by right of creation is theirs, would be an institutional robbery — a legally established violation of the principle on which property is supposed to rest."

(a) Which question does Clark say lies outside his inquiry, and which does he say he will settle? Two sentences. (b) Clark calls his problem one of "economic fact". Name the normative premise and the conceptual premise his conclusion about robbery still needs, citing the words in the passage that carry each. Three sentences.

**P3 (🔴, optional) *(Evaluative (a)-(b).)*** Invented case. A dental lab pays technicians 30 dollars per crown. Mira, with unusually steady hands, makes 10 crowns a day at ordinary effort. Tomas, who trained at night for two years and works through his breaks, makes 6. Mira earns 120 dollars a day more. (a) Say what a contribution basis and an effort basis each conclude about whether Mira deserves the extra 120 dollars. Two sentences each. (b) A luck egalitarian attacks the contribution verdict. Name the premise attacked, then give the strongest reply a contribution theorist can make. 120 words or fewer. Any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)-(b) — strict · Exegetical (c) — strict)*

(a) $K^{1/3}=8^{1/3}=2$ and $L^{2/3}=64^{2/3}=16$, so $Q=6\times2\times16=192$. Then $MP_L=\tfrac23\cdot\tfrac{192}{64}=2$ and $MP_K=\tfrac13\cdot\tfrac{192}{8}=8$. Euler: $2\times64+8\times8=128+64=192$, the whole product. Wage $=40\times2=80$ dollars a day.

(b) $27^{1/3}=3$, so $Q=6\times3\times16=288$ and $MP_L=\tfrac23\cdot\tfrac{288}{64}=3$. Wage $=40\times3=120$ dollars a day, a 50 percent rise. (Check: $MP_K=\tfrac13\cdot\tfrac{288}{27}\approx3.556$, and $3\times64+3.556\times27=192+96=288$.)

**Must hit, strict (a)-(b):**

- $Q=192$, $MP_L=2$, $MP_K=8$, payments $128+64=192$; wage 80 dollars.
- After the investment, $Q=288$, $MP_L=3$; wage 120 dollars.

**Must hit, strict (c):**

- On premise 2 the bakers' own contribution rose, since their marginal product is now 3: the measure credits them with output made possible by the owner's ovens.
- Awkward because the bakers did nothing differently; a measure of contribution that rises when someone else invests tracks the scarcity of cooperating factors, not anything the bakers did.

**Wrong turns:** computing $MP_L$ as $Q/L$ (average product, 3 then 4.5); saying the owner's contribution produced the raise "on Clark's view" when Clark's measure assigns the extra output to the bakers' marginal product.

**Model answer (c):** On Clark's measure the raise is the bakers' own contribution, because their marginal product rose from 2 to 3. But nothing about their work changed; the ovens did it, so "what the baker creates" here measures how scarce bakers are relative to ovens, not anything the bakers did.

---

**P2** *(Exegetical (a)-(b) — strict)*

**Must hit, strict (a):**

- Outside the inquiry: whether a rule that gives each man his product is, "in the highest sense", just, which Clark calls pure ethics (the omitted sentences name the rival rule, pay according to need).
- To be settled: the factual question whether paying each function by its product actually gives each man what he produces, so that men keep what is theirs.

**Must hit, strict (b):**

- Normative premise: a producer has a rightful claim to what he creates. Carried by "by right of creation" and "the principle on which property is supposed to rest"; "robbery" and "violation" are moral words, and they need this premise.
- Conceptual premise: that a factor's paid-for "product" is what the man "himself produces". Carried by the first sentence's move from "the amount of its product" to "what he himself produces".
- The point: Clark brackets only the *highest-sense* justice question; the property principle is assumed, not bracketed, so the "economic fact" settles robbery only given it.

**Wrong turns:** saying Clark refuses all normative claims (he uses "robbery" and "by right of creation"); naming the empirical premise (competition pays marginal products) as the conceptual one.

**Model answer:** (a) Clark sets aside whether "to each his product" is just in the highest sense, a question of pure ethics. He undertakes to settle whether competition in fact gives each man what he produces. (b) The normative premise is that a producer has a right to what he creates, carried by "by right of creation" and "the principle on which property is supposed to rest", without which "robbery" has no force. The conceptual premise is that the amount a function is paid "according to … its product" is what the man "himself produces". So the question is factual only once both premises are granted, and Clark has bracketed neither of them, only the higher question about need.

---

**P3** *(Evaluative (a)-(b) — graded on moves, not verdict)*

**Must hit, any verdict (a):**

- Contribution: Mira adds 10 crowns, Tomas 6, valued at 30 dollars each; so the 120-dollar gap matches the gap in contribution, and Mira deserves it.
- Effort: Tomas puts in more, through training and work; on effort Mira does not deserve the extra 120 dollars, and if anything Tomas deserves more.

**Must hit, any verdict (b):**

- The premise attacked: that contribution is a fit desert basis, because Mira's higher output flows from steady hands, which are brute luck.
- The strongest reply: a desert basis need not itself be deserved (the sprinter's medal); and pressing the objection "all the way down" also undermines effort, since a capacity to persist is partly luck too.
- Whether it generalizes: if the luck objection works here, it removes almost every contribution-based claim, and the effort view must say why effort escapes it.

**Wrong turns:** answering with Nozick, which is not a desert view; treating the fact that Mira did not choose her hands as settling the question, when the reply denies that bases must be chosen.

**Model answer (b), one of several:** The luck egalitarian attacks the claim that contribution is a fit basis: Mira's extra crowns come from steady hands she did not choose, so the 120 dollars rewards brute luck. The best reply is that desert bases need not themselves be deserved. A sprinter deserves the medal for running fastest, though her physique was a gift; what matters is that the performance is hers. And the objection proves too much: Tomas's capacity to train at night also owes something to temperament and circumstance. If unchosen inputs defeat desert, effort-based desert falls with contribution-based desert.

</details>

## Flashback

**From Lesson [5.2](05-02-repugnant-markets-and-blocked-exchanges.md) (Repugnant markets and blocked exchanges):** *(Exegetical (a)–(b).)* Diagnose. An **invented** op-ed on a proposal to let people summoned for jury service pay a registered substitute to serve for them, not the words of any real person:

> (i) "A seat on a jury goes to citizens as citizens; once money can buy your way out, wealth has crossed into a sphere where it has no business."
> (ii) "Two-thirds of residents tell pollsters the idea disgusts them, so any such scheme would be repealed within a year."
> (iii) "The substitutes will be the unemployed, recruited outside the benefits office, and defendants will face juries drawn from the one class that needs 80 dollars a day."
> (iv) "And since most people object, the scheme is wrong."

(a) For (i)–(iii), name whose style of argument from Lesson 5.2 each sentence uses (Walzer, Roth or Satz) and which kind of claim it makes (conceptual, empirical or normative). One line each. (b) Say what is wrong with (iv) and what extra premise would make it valid. Two sentences.

<details>
<summary>Solution</summary>

**Must hit, strict (a):**

- (i) **Walzer:** the good's social meaning (citizenship) fixes its distributive criterion, and money converting into it is tyranny across spheres. Conceptual and normative.
- (ii) **Roth:** repugnance as a fact about the population that constrains which market can survive. Empirical (a prediction about adoption), with no verdict on whether the scheme is wrong.
- (iii) **Satz:** vulnerability in the market's sources (recruiting the desperate) and extreme harm to society in its outcomes (one class judges the rest). Normative, resting on empirical claims about who would sell.

**Must hit, strict (b):**

- (iv) slides from Roth's empirical premise (people object) to a normative verdict (the scheme is wrong).
- The missing premise: that widespread revulsion at a willing exchange is evidence, or proof, that it wrongs someone. That premise is the contested one, and history (lending at interest) shows such revulsion can fade.

**Wrong turns:** filing (i) under Satz because it mentions wealth: it locates the wrong in the good's meaning, not in who trades or what follows. Filing (iii) as purely empirical: the predictions serve a normative verdict. Treating (iv) as Roth's own conclusion, which reverses his claim.

**Model answer (b):** Sentence (iv) moves from the empirical fact that most people object to the normative claim that the scheme is wrong, the same slide that reads Roth as a verdict on kidney sales. It is valid only with the premise that widely shared revulsion at a willing exchange shows the exchange wrongs someone, and that premise is exactly what is disputed.

</details>

## Connections

- **Backward:** [5.3](05-03-exploitation-in-labour-markets.md) asked whether a wage can exploit; this lesson asks whether it can be deserved, and Clark wrote his book to answer the exploitation charge. Euler's theorem rides on the returns to scale of [`grad-micro` 3.1](../../grad-micro/lessons/03-01-production-sets-technology.md). The [Pareto principle](../reference.md#pareto-principle) of [3.1](03-01-the-pareto-principle.md) says nothing about desert: an efficient allocation can reward luck.
- **Forward:** [5.5](05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md) gives Hayek's separation of value from merit, and his claim that asking whether market rewards are deserved is a category mistake.
- **Sideways:** the luck-egalitarian and Nozickian positions are developed as theories of distributive justice in [`political-philosophy`](../../political-philosophy/syllabus.md) 2.4 and 2.6; the just wage is taught from within the tradition in `catholic-social-teaching` 4.2.
