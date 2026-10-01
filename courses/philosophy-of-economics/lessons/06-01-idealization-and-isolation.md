# Philosophy of Economics · Lesson 6.1: Idealization and isolation

> ⏱ ~15 min · Module 6: What economic models explain · Builds on: [2.1 Preference and revealed preference](02-01-preference-and-revealed-preference.md), [2.2 The behavioural challenge](02-02-the-behavioural-challenge.md) · Unlocks: [6.2 Friedman's "as if" and its critics](06-02-friedmans-as-if-and-its-critics.md), [6.3 How-possibly models and credible worlds](06-03-how-possibly-models-and-credible-worlds.md)

## Why this matters

Five modules asked what economics may *value*. This one asks what it can *know*. Every model you met in grad micro assumes something known to be false: agents who maximize without error, markets with no frictions, a whole economy that chooses like one household. The obvious complaint is that a theory built on false premises cannot tell us about the world. The oldest reply, Mill's, is that the premises are not false descriptions at all but deliberate isolations, and that what they deliver is a law of a *tendency*. This lesson states that reply, its modern descendants (Mäki's isolation, Galilean idealization, Cartwright's capacities), and a test for when an idealization is harmless, run on the most used idealization in macroeconomics: the representative agent.

## The idea

Physics never observes a body falling in a vacuum, yet it states the law of free fall. It gets there by asking what gravity alone would do, then adding back air resistance. Mill's essay "On the Definition of Political Economy" (written by 1830, first printed in 1836, reprinted as Essay V of *Essays on Some Unsettled Questions of Political Economy*, 1844) says economics does the same with human motives. Political economy, he writes,

> is concerned with him solely as a being who desires to possess wealth, and who is capable of judging of the comparative efficacy of means for obtaining that end.

It sets aside every other motive except two "perpetual" counter-motives, aversion to labour and the wish for present enjoyment, and asks what people *would* do if the desire for wealth ruled alone. Mill says no economist ever believed people are like this. The economic man is a thought experiment that isolates one cause, as a laboratory isolates one force.

Three distinctions do the rest of the work.

- **Isolation vs idealization.** Following Uskali Mäki ("On the method of isolation in economics", 1992), a model *isolates* when it seals off a few factors from everything else that is acting; it *idealizes* when it uses a false assumption (zero transport costs, perfect information, a single consumer) to do the sealing ([isolation](../reference.md#isolation), [idealization](../reference.md#idealization)). Idealization is one means of isolation; another is plain omission, leaving a factor out without saying anything false about it.
- **Galilean idealization** (Ernan McMullin's term, 1985): a distortion made on purpose to make a problem tractable, with a route back. You can de-idealize, adding friction to the frictionless plane, and the answer moves by a computable correction.
- **Capacities.** Nancy Cartwright (*Nature's Capacities and their Measurement*, 1989) argues that what such laws describe is a stable causal power: something a factor contributes wherever it operates, whether or not other factors mask the result ([capacities](../reference.md#capacities)). She reads Mill's tendencies as capacities.

## The argument

**Mill's defence of the a priori method,** reconstructed from Essay V.

1. **Social effects have many causes acting together.** *In words:* no act is driven only by the desire for wealth.
2. **To predict a compound effect you must know the law of each cause separately**, then compound them, as astronomy compounds the centripetal and tangential forces. *In words:* first learn what each cause does alone.
3. **Society permits no experiment that holds the other causes fixed**, so the separation has to be made in thought: suppose the desire for wealth (checked only by the two counter-motives) rules alone.
4. **What follows from that supposition is true "in the abstract"**: it states what that cause, acting by itself, tends to produce.
5. **In application, the abstract result holds with allowances** for the other causes present, which Mill calls *disturbing causes*. As he puts it, "That which is true in the abstract, is always true in the concrete with proper allowances."

∴ **C.** Economics may reason from a false description of human beings and still state true laws, provided they are read as [tendency laws](../reference.md#tendency-law): claims about what a cause contributes, not about what will happen.

*In words:* the falsity of the assumption is the price of isolating a cause, and the conclusion is about the cause, not the outcome.

**Mäki's version** keeps the structure and drops Mill's a priori confidence. A model can be *true of* the mechanism it isolates while every assumption that does the isolating is false. Whether it is true is an empirical question about the mechanism, not about the assumptions.

**When is an idealization harmless?** Putting Galileo and Cartwright together gives a test relative to a question $Q$:

- (i) **De-idealization:** adding back the omitted factors changes the model's answer to $Q$ by a small or computable correction, Mill's "allowance".
- (ii) **Stability:** the isolated factor contributes the same thing in the concrete case as in the model, so there is something for the correction to be a correction *to*.

The verdict is always relative to $Q$. An idealization harmless for one question can be fatal for another.

**Where the argument is weakest.** Premise 2. Compounding causes like forces assumes they combine additively: each motive does its part, undisturbed by the others. Critics reply that motives may interact. If offering pay changes *why* people act, the wealth motive does not leave the others intact; [2.2](02-02-the-behavioural-challenge.md)'s framing and present-bias evidence suggests the "desire of wealth" may not even be one stable cause with a single law. Then no isolated law describes a tendency present in the mixture, and condition (ii) fails. Cartwright herself later argued that stable capacities show up only in special arrangements, which makes the economist's job finding those arrangements, not assuming them. Mill's defenders answer that this is a claim about which causes to isolate, not a refutation of isolating.

## The aggregation check

![Line chart of total demand for a good against how 200 of income is split between two consumers. With a common Engel slope of 0.1 total demand is flat at 27 for every split. With slopes 0.1 and 0.05 total demand rises from 17 to 27 as more income goes to the first consumer, passing 19.5, 22 and 24.5 at splits of 50, 100 and 150; a single representative consumer at the mean slope predicts 22 regardless](assets/06-01-fig1.svg)

The representative agent idealizes many households as one ([representative agent](../reference.md#representative-agent)). On the producer side this is harmless: [`grad-micro` 3.4](../../grad-micro/lessons/03-04-aggregation-and-the-firm.md) shows industry supply is exactly that of one pooled firm, because profit is linear in prices that every firm shares. Consumers are different. Fix prices and let consumer $i$'s demand for good $x$ depend on her income $m_i$ (her Engel curve $x_i(m_i)$). Aggregate demand $X=\sum_i x_i(m_i)$ is a function of total income $M=\sum_i m_i$ alone, as a single consumer's would be, only under a strong condition ([Gorman polar form](../reference.md#gorman-polar-form)):

$$X \text{ depends only on } M \iff x_i(m_i)=a_i+b\,m_i \ \text{ for every } i,$$

with one common slope $b$.

*In words:* every household must buy the same extra amount of $x$ out of an extra unit of income; the intercepts $a_i$ may differ. Proof sketch: move $dm$ of income from $j$ to $i$. Aggregate demand changes by $\big(x_i'(m_i)-x_j'(m_j)\big)\,dm$, which must vanish for every pair and every income level, so all the slopes are equal and constant. W. M. Gorman (1953) gave the preferences that deliver it: indirect utility $v_i(p,m_i)=a_i(p)+b(p)\,m_i$.

## Worked examples

**Example 1 (clean): common slopes.** Ann's demand is $x_A=2+0.1\,m_A$ and Ben's is $x_B=5+0.1\,m_B$ (illustrative). Total income is 200. At the split (100, 100) demand is $12+15=27$; at (150, 50), $17+10=27$; at (50, 150), $7+20=27$. A representative consumer with $x=7+0.1M$ predicts $7+20=27$ every time: the blue line in the figure.

Run the test with $Q$ = "how does market demand respond to a change in total income?" De-idealizing, splitting the one consumer back into two, changes nothing. The idealization is harmless for $Q$, and in this case it is *exact*.

**Example 2 (hard): unequal slopes.** Keep Ann; give Ben $x_B=5+0.05\,m_B$. Now the split matters: (100, 100) gives $12+10=22$, (150, 50) gives $17+7.5=24.5$, (50, 150) gives $7+12.5=19.5$. A representative consumer with the mean slope 0.075 predicts $7+0.075\times 200=22$ whatever the split. It is right only at equal incomes, and any policy that moves income between Ann and Ben moves demand in a way it cannot see: the red line.

So the test splits by question.

- **Prediction, distribution fixed.** If $Q$ concerns shocks that leave the income split roughly unchanged, the error is a constant that can be calibrated away: condition (i) holds.
- **Prediction, distribution moving.** For a transfer, a tax change or a recession that hits one group, (i) fails: the "correction" is the whole effect. And in general equilibrium, [`grad-micro` 4.6](../../grad-micro/lessons/04-06-uniqueness-stability-failure.md)'s Sonnenschein-Mantel-Debreu theorem says individual rationality imposes almost no shape on aggregate demand, so there may be no stable aggregate capacity for (ii) to find. Alan Kirman ("Whom or what does the representative individual represent?", 1992) pressed this against representative-agent macroeconomics.
- **Welfare.** Here the technique carries a value judgment. Scoring a policy by the representative consumer's utility treats society as one person, which is defensible only with a social welfare function that is indifferent to who gets the income, or with a planner assumed to redistribute optimally behind the scenes. The rival premise, [distributional weights](../reference.md#distributional-weights) from [3.4](03-04-cbas-critics-and-defenders.md), can reverse the verdict on any policy that moves income from Ann to Ben, even where the representative agent predicts market demand perfectly.

Defenders of representative-agent models reply that heterogeneous-agent versions now exist precisely to check robustness, and that for many questions the answers survive. That is condition (i) settled by evidence, which is where Mill and Mäki both say it should be settled.

## Watch out

- **You might think a harmless idealization is a small one, but actually** size is beside the point. A frictionless plane is a large distortion and harmless for many questions; a slight difference in Engel slopes is a small one and decisive for a transfer. What matters is whether de-idealizing moves the answer to the question asked.
- **You might think "the assumptions are unrealistic" refutes a model, but actually** that is an empirical claim about the assumptions, and Mill's and Mäki's position is that the target is the isolated mechanism. The objection lands only if it shows the mechanism does not operate, or does not combine as the model says.
- **You might think the representative agent's utility simply *is* social welfare, but actually** "the aggregate behaves like one consumer" is an empirical claim (Gorman's condition, true or not), while "society's welfare is that consumer's utility" is a normative claim about distribution. Gorman preferences secure the first, and nothing in them secures the second.

## One-liner

> A false assumption can isolate a true cause, so an idealized model states tendencies, not outcomes; it is harmless for a question when putting the omitted factors back moves the answer only by a correction you can compute, and the representative agent passes that test for some questions and fails it, sometimes silently, for any question about distribution.

## Problems

**P1 (🟢) *(Formal (a)(b) · Exegetical (c).)*** At fixed prices, consumer 1's demand for good $x$ is $x_1=4+0.2\,m_1$ and consumer 2's is $x_2=1+0.2\,m_2$. Total income is 300.

(a) Compute aggregate demand at the income splits (200, 100) and (100, 200), and the prediction of a representative consumer with $x=5+0.2M$.
(b) Consumer 2's demand changes to $x_2=1+0.3\,m_2$. Recompute both splits, and the prediction of a representative consumer with the mean slope 0.25. By how much does a transfer of 100 from consumer 1 to consumer 2 change aggregate demand?
(c) In one sentence: for which question is the representative consumer in (b) harmless, and for which does it fail?

**P2 (🟡) *(Exegetical.)*** Mill, Essay V of *Essays on Some Unsettled Questions of Political Economy* (1844), a few pages after the disturbing-causes passage:

> The error, when there is error, does not arise from generalizing too extensively; that is, from including too wide a range of particular cases in a single proposition. Doubtless, a man often asserts of an entire class what is only true of a part of it; but his error generally consists not in making too wide an assertion, but in making the wrong kind of assertion: he predicated an actual result, when he should only have predicated a tendency to that result—a power acting with a certain intensity in that direction. With regard to exceptions; in any tolerably advanced science there is properly no such thing as an exception. What is thought to be an exception to a principle is always some other and distinct principle cutting into the former: some other force which impinges against the first force, and deflects it from its direction.

(a) Two readings: **(R1)** economic laws hold in most cases, and the rest are exceptions; **(R2)** economic laws state a tendency operating in every case, which other causes may outweigh. Which does the passage support? Quote the two phrases that decide it.
(b) An economist asserts "a rise in a town's wages draws workers into it". In one town wages rose and workers left, because rents rose faster. In Mill's terms, what did the economist get wrong, and what should she have asserted? Two sentences.

**P3 (🔴, optional) *(Evaluative.)*** An **invented** finance-ministry brief: "Our model treats the country as one representative household. It predicts that a tariff on imported staple foods will cut food imports by a modest amount and lower household welfare by a small amount, offset by the tariff revenue. We therefore judge the tariff's welfare cost to be negligible." The ministry's own (invented) household survey finds that low-income households spend 30 cents of each extra dollar of income on staple food and high-income households 10 cents.

Using this lesson's two-condition test, say whether the representative-household idealization is harmless (a) for the import prediction and (b) for the welfare judgment. Any verdict, 150 words or fewer in total.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)(b) · Exegetical (c).)*

**Must hit, strict (a):** at (200, 100), $X=(4+40)+(1+20)=65$; at (100, 200), $X=(4+20)+(1+40)=65$. The representative consumer predicts $5+0.2\times 300=65$. Common slopes, so the aggregate depends only on $M$.

**Must hit, strict (b):** at (200, 100), $X=(4+40)+(1+30)=75$; at (100, 200), $X=(4+20)+(1+60)=85$. The mean-slope representative consumer predicts $5+0.25\times 300=80$, wrong by 5 either way. A transfer of 100 from consumer 1 to consumer 2 changes $X$ by $(0.3-0.2)\times 100=+10$, the gap between 75 and 85.

**Must hit, strict (c):** harmless for questions where the income split stays fixed (the error is a constant that calibration absorbs); fails for any question about a policy or shock that moves income between the two, since the slope gap is then the whole effect.

**Wrong turns:** averaging the intercepts as well as the slopes (the intercepts simply add, to 5). Concluding from (a) that the representative consumer is right "on average" in (b): it is right only at equal incomes, 150 each, where $X = 34 + 46 = 80$.

**Model answer:** (a) 65 and 65; the representative consumer says 65. (b) 75 and 85; the representative consumer says 80. A 100 transfer to consumer 2 raises demand by 10. (c) Harmless for forecasting with a stable income distribution; it fails for anything that redistributes.

---

**P2** *(Exegetical, strict.)*

**Must hit, strict (a):**

- **R2.** The passage rejects the "most cases plus exceptions" picture outright.
- Deciding phrases: "he should only have predicated a tendency to that result—a power acting with a certain intensity in that direction" (the law asserts a power, not an outcome), and "there is properly no such thing as an exception", because an apparent exception is "some other and distinct principle cutting into the former" (the first cause is still acting).

**Must hit, strict (b):**

- Her error was the *kind* of assertion, not its range: she predicated an actual result (workers arrive) where she should have predicated a tendency.
- She should have asserted that higher wages *tend* to draw workers in; rising rents are a second cause pushing the other way, and in that town it prevailed. The wage tendency was still operating there.

**Wrong turns:** choosing R1 because Mill says a man "often asserts of an entire class what is only true of a part of it": the next clause says that is *not* where the error generally lies. In (b), saying her law was refuted, or that she generalized from too few towns: Mill says the fix is to change the kind of claim, not to shrink its range.

**Model answer:** (a) R2, decided by "should only have predicated a tendency to that result" and "there is properly no such thing as an exception", the apparent exception being another principle "cutting into" the first. (b) She asserted an outcome where she should have asserted a tendency. The law is that higher wages tend to draw workers; in that town a second cause, rising rents, outweighed it, without the wage tendency ceasing to act.

---

**P3** *(Evaluative, any verdict.)*

**Must hit, any verdict (a):**

- Identify the idealization: one household stands for households whose Engel slopes for food differ (0.3 vs 0.1), so Gorman's common-slope condition fails.
- Apply condition (i): the import prediction is safe only if the tariff leaves the income distribution roughly unchanged; say whether it does (it raises food prices, a larger cost share for low-income households, so real incomes shift).
- A verdict on (a) that follows from those steps.

**Must hit, any verdict (b):**

- Name the value judgment: scoring the tariff by one household's welfare assumes a social welfare function indifferent to who bears the cost, or assumes the revenue is returned in a way that undoes the distributional effect.
- Name the rival premise (distributional weights) and say whether it could change the verdict here, given that the burden falls more heavily on low-income households.
- A verdict on (b) that follows.

**Wrong turns:** rejecting the model because "no country is one household": that is the unrealism complaint, which the test replaces with a question-relative one. Treating (b) as settled by (a): the idealization can predict imports well and still hide the distribution of the welfare cost.

**Model answer, one of several:** (a) Probably close to harmless. The tariff moves real incomes somewhat, but if the survey slopes are stable a correction can be computed, and for the import total that correction may be small, so condition (i) can be checked rather than assumed. (b) Not harmless. "Negligible welfare cost" adds up gains and losses as if one person bore them. That is a distributional judgment: it treats a loss to a household spending 30 cents of each extra dollar on food as equal to the revenue it raises. With distributional weights favouring low-income households, the same numbers could show a real cost, unless the brief shows the revenue going back to those households.

</details>

## Flashback

**From Lesson [5.4](05-04-markets-and-desert.md) (Markets and desert):** *(Formal (a) · Exegetical (b).)* Illustrative numbers. A quarry has output $Q=3K^{1/4}L^{1/2}$, with $K=16$ machines and $L=16$ workers. Markets are competitive and the output price is 1, so each factor unit is paid its marginal product. (a) Compute $Q$, $MP_L$ and $MP_K$, the total paid out if every unit of each factor gets its marginal product, and what is left over. (b) Which premise of Clark's argument, as reconstructed in Lesson 5.4, fails here, and is the failure a normative, a conceptual or a technical one? What does the leftover do to Clark's conclusion that nothing is left over for anyone to have taken? Three sentences in all.

<details>
<summary>Solution</summary>

(a) $K^{1/4}=16^{1/4}=2$ and $L^{1/2}=16^{1/2}=4$, so $Q=3\times2\times4=24$. Then $MP_L=\tfrac12\cdot\tfrac{24}{16}=0.75$ and $MP_K=\tfrac14\cdot\tfrac{24}{16}=0.375$. Payments: labour $0.75\times16=12$, capital $0.375\times16=6$, total 18. Left over: $24-18=6$, a quarter of the product. The exponents sum to $\tfrac34<1$ (decreasing returns), so Euler's theorem gives $MP_L\cdot L+MP_K\cdot K=\tfrac34 Q$, not $Q$.

**Must hit, strict (b):**

- Premise 4 fails: marginal payments exhaust the product only under constant returns, and here they cover three-quarters of it.
- The failure is technical (a fact about the production technology), not normative or conceptual: premises 1 and 2 are untouched.
- The conclusion fails with it: 6 units are created by no factor on the marginal measure, so who has a claim to them needs a principle that "to each what he creates" does not supply.

**Wrong turns:** computing $MP_L$ as the average product $Q/L=1.5$. Crediting the residual to capital because the owner owns the machines: capital has already been paid its marginal product, 6, and the residual is a further 6. Calling the failure a refutation of premise 1: a just-claim-to-what-you-create principle can survive intact while the accounting does not add up.

**Model answer:** Premise 4 fails: with exponents summing to three-quarters, paying labour 12 and capital 6 leaves 6 of the 24 units unassigned. That is a technical fact about the quarry's technology, not a defect in Clark's normative or conceptual premises. But it breaks his conclusion, since a quarter of the product was "created" by no factor on the marginal measure; a defender can rename it the marginal product of an omitted fixed factor such as the rock deposit (adding $N^{1/4}$ restores constant returns and pays that factor exactly 6), but then must argue that the deposit's owner, rather than nature, created it.

</details>

## Connections

- **Backward:** [2.1](02-01-preference-and-revealed-preference.md) asked whether "preference" names a mental state or a pattern of choice; Mill's economic man is an early, explicit idealization of that choosing agent. [2.2](02-02-the-behavioural-challenge.md)'s evidence is the strongest case against premise 2's assumption that the wealth motive is one stable cause. The welfare point in Example 2 is [3.4](03-04-cbas-critics-and-defenders.md)'s distributional-weights objection in a macroeconomic setting.
- **Forward:** [6.2](06-02-friedmans-as-if-and-its-critics.md) takes the opposite line from Mill and Mäki: assumptions need not be true even of an isolated mechanism, only predictions need be accurate. [6.3](06-03-how-possibly-models-and-credible-worlds.md) asks what a model that isolates no real mechanism at all can explain.
- **Sideways:** the producer-side aggregation that *does* work is [`grad-micro` 3.4](../../grad-micro/lessons/03-04-aggregation-and-the-firm.md); its failure in general equilibrium is [`grad-micro` 4.6](../../grad-micro/lessons/04-06-uniqueness-stability-failure.md). Tendency laws are economics' version of the ceteris paribus laws that [`philosophy-of-science`](../../philosophy-of-science/syllabus.md) 4.4 treats in general. Bridge: Mill's composition of forces ↔ superposition in mechanics ↔ the additive-separability assumption behind every partial-equilibrium "holding all else fixed".
