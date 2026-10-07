# Political Institutions · Lesson 6.4: Majoritarian and consensus democracy

> ⏱ ~15 min · Module 6: Delegation, direct democracy, and the whole design · Builds on: [2.1 Measuring outcomes](02-01-measuring-outcomes.md), [4.1 Bicameralism](04-01-bicameralism.md), [5.1 Federal, unitary, devolved](05-01-federal-unitary-devolved.md), [6.2 Delegation and oversight](06-02-delegation-and-oversight.md) · Unlocks: [`comparative-politics`](../../comparative-politics/syllabus.md), [`constitutional-law`](../../constitutional-law/syllabus.md)

## Why this matters

This course has taken constitutions apart one piece at a time: electoral formulas, cabinets, chambers, federations, courts, central banks. This lesson asks whether the pieces travel together. Arend Lijphart's answer is the most-used map in comparative politics. Ten of the institutions you have studied cluster into two dimensions, and the clustering lets you place a whole democracy with two numbers. He then claimed that one end of the map governs better. That claim is still disputed.

## The idea

Lijphart starts from one question: when the people disagree, who should govern, and whose interests should government answer to? He contrasts two answers, [majoritarian and consensus democracy](../reference.md#majoritarian-and-consensus-democracy), in *Democracies* (1984, 21 countries) and *Patterns of Democracy* (1999; 2nd ed. 2012, 36 countries):

- **Majoritarian:** the majority, which in practice is often just the largest minority. Power is **concentrated**: one party governs alone, faces few rival institutions, and voters can remove it cleanly. The pure type is the **Westminster model**, with the UK and pre-1996 New Zealand as its cases.
- **Consensus:** as many people as possible. Power is **shared** (broad coalitions, proportional elections), **dispersed** (two strong chambers, federalism) and **limited** (a rigid constitution, courts, an independent central bank). Switzerland and Belgium are its cases.

Keep three kinds of claim apart. How a country's score is computed is **mechanical**: arithmetic on published indices. That the ten institutions cluster in two groups, and that consensus democracies perform differently, are **empirical**, and the strength of the evidence differs a lot between those two claims. Whether consensus democracy is *better* is **normative** and not argued here. The case for majority rule and its limits is [`political-philosophy` 5.1](../../political-philosophy/lessons/05-01-why-democracy.md) and [5.2](../../political-philosophy/lessons/05-02-majority-rule-vs-rights-judicial-review.md).

## The mechanism

1. **Ten variables, two groups.** Each is a design choice you have met; the right column says where.

| # | Majoritarian pole | Consensus pole | Measured by | Lesson |
|---|---|---|---|---|
| 1 | single-party majority cabinets | broad coalitions | % of time with one-party, minimal winning cabinets | [3.2](03-02-forming-governments-coalitions-and-minorities.md) |
| 2 | executive dominates | balance with legislature | index built mainly from cabinet duration | [3.1](03-01-parliamentary-government.md), [3.3](03-03-presidential-government.md) |
| 3 | two-party system | multiparty system | [effective number of parties](../reference.md#effective-number-of-parties) in parliament | [2.1](02-01-measuring-outcomes.md), [4.4](04-04-party-systems.md) |
| 4 | disproportional elections | PR | [Gallagher index](../reference.md#gallagher-index) | [2.1](02-01-measuring-outcomes.md), [2.2](02-02-district-magnitude-and-thresholds.md) |
| 5 | pluralist interest groups | corporatist | index of interest-group pluralism | here |
| 6 | unitary, centralized | federal, decentralized | federalism index, 1 to 5 | [5.1](05-01-federal-unitary-devolved.md), [5.2](05-02-decentralization-in-practice.md) |
| 7 | one chamber, or a weak second | strong bicameralism | bicameralism index, 1 to 4 | [4.1](04-01-bicameralism.md) |
| 8 | flexible constitution | rigid constitution | rigidity index, 1 to 4 | [5.1](05-01-federal-unitary-devolved.md) |
| 9 | legislature has the last word | strong judicial review | review index, 1 to 4 | [5.3](05-03-judicial-review-compared.md), [5.4](05-04-weak-form-review-appointments-and-independence.md) |
| 10 | dependent central bank | independent central bank | central-bank independence, 0 to 1 | [6.2](06-02-delegation-and-oversight.md) |

The one new term is variable 5. **[Corporatism](../reference.md#corporatism-and-interest-group-pluralism)** means employers and unions organized in a few peak associations that bargain with each other and with government over wages and policy. **Pluralism** means many groups competing for influence with no such coordination.

2. **Standardize, sign, average.** For variable $k$, let $x_{ck}$ be country $c$'s value, $\bar x_k$ and $s_k$ the mean and standard deviation across the 36 democracies, and $\sigma_k = +1$ if a high value is consensual, $-1$ if it is majoritarian. The first-dimension score is

$$E_c = \frac{1}{5}\sum_{k=1}^{5} \sigma_k \, \frac{x_{ck} - \bar x_k}{s_k}$$

and the second is the same with variables 6 to 10. *In words:* how many standard deviations each institution sits toward the consensus end, averaged. Lijphart then rescales each dimension so the 36 scores have a spread of about 1; recomputed from his published data, this reproduces his scores to within 0.04. High means consensual (first dimension) or federal (second). This step is **mechanical**.

3. **Why two dimensions.** Variables 1 to 5 are strongly correlated with each other, as are variables 6 to 10, but the two groups are only weakly correlated with each other. That is a robust pattern in Lijphart's data, and there are mechanisms behind it. PR permits many parties ([2.3](02-03-duvergers-law-observed.md)), many parties need coalitions ([3.2](03-02-forming-governments-coalitions-and-minorities.md)), and coalitions last less long, so the executive dominates less: the first dimension is about **sharing** power within the central institutions. A federal bargain needs a chamber for the units, a constitution the centre cannot amend alone, and an umpire to enforce it ([5.1](05-01-federal-unitary-devolved.md)): the second is about **dividing** power among separate institutions. Lijphart calls the dimensions **[executives-parties and federal-unitary](../reference.md#lijpharts-two-dimensions)**. Critics accept the clustering but dispute two of its members. Rein Taagepera (*Political Studies*, 2003) found no logical link tying interest groups to the other four; central-bank independence is the weakest fit in its group.

4. **The performance claim.** Using the first dimension, and controlling for level of development and population, Lijphart reported that consensus democracies did at least as well on macroeconomic management. They did better on quality-of-democracy indicators and on what he called "kinder, gentler" outcomes: higher welfare spending and foreign aid, better environmental records, lower incarceration, less use of the death penalty. The 2nd edition, with data to 2010, reported the same pattern. This is the **[kinder, gentler claim](../reference.md#kinder-gentler-democracy)**, and it is empirical.

5. **The critics, at full strength.** *Common cause:* consensus democracies cluster in small, wealthy north-west European states with long corporatist traditions. Liam Anderson (*Comparative Political Studies*, 2001) and Klaus Armingeon (*European Journal of Political Research*, 2002) found that corporatism drives much of the macroeconomic result; Anderson found the advantage reversed once corporatism and central banks were removed. *Formal versus behavioural:* Edeltraud Roller (*The Performance of Democracies*, 2005), separating formal rules from behaviour, found roughly a tie between formally majoritarian and formally consensual institutions, and only weak signs of "kinder" policy for behavioural consensus. *A rival value:* G. Bingham Powell (*Elections as Instruments of Democracy*, 2000) set a majoritarian vision, in which voters choose and can remove a government directly, against a proportional one, in which every group is represented in post-election bargaining. Clarity of responsibility is what the majoritarian side claims to buy. Lijphart replies, drawing on Powell's own evidence, that governments in proportional systems sit closer to the median voter anyway.

**Where the evidence is weakest.** At the move from correlation to recipe. The sample is 36 countries, the consensus cases bunch in one region, and no one assigned the institutions at random: the cultures that built coalitions and corporatist bargains may also have produced generous welfare states. The dimension that carries the result is the one constitutions set least directly. Party counts, cabinet types and corporatism are behaviour, not rules; Taagepera's point is that a constitution can enact PR but not a corporatist bargain. Reforms that move a country are rare and single cases: New Zealand voted in 1993 to adopt MMP, first used in 1996, and its first-dimension score rose from −0.47 (1945–2010) to −0.17 (1981–2010). The clustering is well supported; the causal performance claim is contested; on the second dimension Lijphart's tests found little difference, lower inflation aside.

## The map

![A scatter plot. Horizontal axis: executives-parties dimension, majoritarian on the left, consensus on the right, from minus 2 to 2. Vertical axis: federal-unitary dimension, unitary at the bottom, federal at the top, from minus 2 to 3. Dashed lines at zero divide four quadrants. The United Kingdom sits bottom left at minus 1.09, minus 1.06. The United States sits top left at minus 0.67, 2.25. Germany sits top right at 0.78, 2.41. Switzerland sits right at 1.72, 1.46. Thirty-two grey dots fill the other positions](assets/06-04-fig1.svg)

*Lijphart's map, 1945–2010, from his own published appendix data. Germany is the most federal of the 36; Switzerland is the most consensual on the first dimension; the UK is second-most unitary, after New Zealand. The US sits in the federal-majoritarian corner.*

## Worked examples

**Example 1 (clean): the UK and Switzerland on the first dimension.** Lijphart's 1945–2010 data, with signs applied so that positive means consensual:

| Variable | Mean (SD) | UK | signed $z$ | Switzerland | signed $z$ |
|---|---|---|---|---|---|
| Effective no. of parties | 3.19 (1.12) | 2.16 | −0.92 | 5.20 | +1.79 |
| One-party minimal winning cabinets, % | 60.3 (30.9) | 97.3 | −1.20 | 4.0 | +1.83 |
| Executive dominance | 5.35 (2.75) | 8.12 | −1.01 | 1.00 | +1.58 |
| Gallagher index | 8.55 (6.05) | 11.70 | −0.52 | 2.55 | +0.99 |
| Interest-group pluralism | 2.02 (0.94) | 3.02 | −1.06 | 0.88 | +1.22 |

UK: $(-0.92-1.20-1.01-0.52-1.06)/5 = -4.71/5 = -0.94$. Switzerland: $7.41/5 = 1.48$. Rescaling (dividing by the averages' spread, 0.85) gives −1.11 and 1.74, against Lijphart's published −1.09 and 1.72. **The rule that decides** is the averaging: every UK variable points majoritarian, every Swiss one consensual, so neither placement is in doubt.

Notice that the UK is majoritarian on all five, yet five democracies score lower (more majoritarian) than it. Notice also the period. On 1981–2010 data the UK scores −1.48, and its central-bank variable covers only 1945–94, before the Bank of England was made independent ([6.2](06-02-delegation-and-oversight.md)). A score describes a period, not a country for all time.

**Example 2 (hard): where does the United States go?** Its signed $z$-scores:

- **First dimension:** party count −0.71, cabinets −0.65, executive dominance **+0.49**, Gallagher −0.95, interest groups −1.06. Published score −0.67.
- **Second dimension:** federalism +1.80, bicameralism +1.72, rigidity +1.36, review +2.09, central bank +1.67. Published 2.25, second only to Germany.

So the US is **federal-majoritarian**: two parties, plurality elections, yet power divided among states, two equal chambers, a president, and a strong court. The strain sits in variable 2. Cabinet duration means nothing where the executive cannot be voted out ([3.3](03-03-presidential-government.md)), so Lijphart *assigns* presidential and collegial executives a value by judgment. The US gets 4.00, a near-balance, while France gets 8.00 and Switzerland 1.00. **Where the rule runs out:** the separation of powers, the US's main way of dispersing power, enters the map only through that one judgment-coded number. A reader who weighted it more heavily would move the US toward consensus; one who stressed its two-party, winner-take-all elections would not. The arithmetic is fixed; the coding is a judgment.

## Watch out

- **You might think a country's score is a fact about its constitution, but actually** three of the five first-dimension variables (party count, cabinet type, executive dominance) are *observed behaviour*, the result of elections and bargaining under the rules. Mechanical rules (a formula, an amendment procedure) and empirical outcomes (how many parties actually form) are mixed on the same axis. Germany's effective number of parties, 3.09, is below the 36-country mean even though it uses PR.
- **You might think a consensus democracy has every consensus institution, but actually** the score is an average. Switzerland's constitution (Art. 190, Fedlex English) says: "The Federal Supreme Court and the other judicial authorities apply the federal acts and international law." Its courts cannot set aside a federal statute, so Lijphart codes Switzerland at the bottom of his review index.
- **You might think the two dimensions measure majoritarianism twice, but actually** they vary independently: the US is majoritarian-federal, and Israel (1.53, −0.90) is consensual-unitary.

## One-liner

> Ten institutions fall into two clusters, sharing power and dividing it, so a democracy can be placed with two numbers; that consensus democracies also perform "kinder, gentler" is a correlation in 36 countries whose causes are still contested.

## Problems

**P1 (🟢) *(Exegetical (a)-(b).)*** Diagnose. An **invented** memo from the reform commission of the invented Republic of Zentoria, not the words of any real person or body:

> "We recommend: (i) replacing single-member plurality districts with list PR in ten-seat districts; (ii) abolishing the elected Senate; (iii) allowing constitutional amendments by a simple majority of parliament instead of two-thirds; (iv) giving the central bank a governor with a fixed eight-year term, removable only for misconduct, and a price-stability mandate; (v) lowering the voting age to 16."

(a) For each item, name Lijphart's dimension and variable it moves, and whether toward the majoritarian or the consensus pole. One line each. (b) Item (i) changes one variable directly. Name two other first-dimension variables it is expected to move, and say whether those effects are mechanical or empirical. Two sentences.

**P2 (🟡) *(Exegetical (a) · Evaluative (b).)*** Find the crux. Zentoria's debate continues in two **invented** op-eds. A: "Consensus democracies imprison fewer people and give more aid. Adopt PR and coalition government, and Zentoria will become kinder." B: "Those countries were kinder before they were consensual; the institutions are a symptom, not a cause." (a) Name the single empirical premise A needs and B denies, and one piece of evidence that would move the dispute. 80 words or fewer. (b) A third writer grants the correlation and still prefers majoritarian institutions. Give that writer's best ground and the strongest consensus reply. 100 words or fewer. Any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Exegetical (a)-(b), strict)*

**Must hit, strict (a):**

- (i) Executives-parties dimension, variable 4 (disproportionality): toward **consensus**.
- (ii) Federal-unitary, variable 7 (bicameralism): toward **majoritarian** (unicameral).
- (iii) Federal-unitary, variable 8 (rigidity): toward **majoritarian** (flexible).
- (iv) Federal-unitary, variable 10 (central-bank independence): toward **consensus**.
- (v) **Neither.** Franchise rules are not among the ten variables.

**Must hit, strict (b):**

- Effective number of parties up, and single-party majority cabinets down (and so, with shorter-lived coalitions, executive dominance down). Any two of these three.
- These are **empirical** expectations: the regularities of [2.3](02-03-duvergers-law-observed.md) and [3.2](03-02-forming-governments-coalitions-and-minorities.md). Only the fall in disproportionality follows from the formula itself, for given votes.

**Wrong turns:** putting the central bank on the first dimension because it concerns "the executive"; reading (iii) as consensual because it makes reform easier; assigning (v) a direction because it changes who votes; calling the rise in the number of parties mechanical.

---

**P2** *(Exegetical (a), strict · Evaluative (b), any verdict)*

**Must hit, strict (a):**

- The premise: the association between consensus institutions and "kinder" outcomes is **causal**, running from institutions to policy, rather than produced by a common cause (political culture, corporatist traditions, wealth, region) that produced both.
- Evidence that would move it: within-country change, where kinder outcomes followed adopting consensus institutions (New Zealand after 1996 is one case, so suggestive at most); or the association surviving controls for region, culture and corporatism. Roller's tie for formal institutions is evidence on B's side.

**Must hit, any verdict (b):**

- The majoritarian ground at full strength: clarity of responsibility. One party governs, so voters know whom to blame and can remove it; under coalitions, elections are a blunt instrument for changing the government.
- The consensus reply at full strength: inclusion and representation of every group in bargaining, plus Powell's finding, which Lijphart cites, that proportional governments sit closer to the median voter anyway.
- Name the value trade-off (accountability against inclusion), not just a statistic.

**Wrong turns:** treating Lijphart's correlation as settling causation, or treating the critics as having shown that consensus institutions *cause* nothing; answering (a) with a normative premise ("kindness matters more than accountability"), which belongs in (b); citing the federal-unitary dimension, on which Lijphart's tests found little.

**Model answer (b), one of several:** Majoritarian institutions buy clarity. One party holds power, voters know whom to blame, and an election can remove it outright. Under coalitions the same parties can return in new combinations, so voters cannot easily throw a government out. That is a value, accountability, not a performance statistic, so a kinder record does not answer it. The consensus reply is that representation is the deeper value: every sizeable group gets a voice in bargaining. Powell's evidence suggests proportional governments sit closer to the median voter, so accountability may buy less responsiveness than it promises. The dispute is over which value a constitution should maximize.

</details>

## Flashback

**From Lesson [6.2](06-02-delegation-and-oversight.md) (Delegation and oversight):** *(Exegetical (a)-(b).)* Diagnose. Morvenna (invented) has a Drinking Water Board that sets limits on contaminants. Its founding Act, passed eight years ago by a coalition now in opposition, gives Board members nine-year terms, removable only for cause. It also lets any water company, local council or residents' group comment on a proposed limit and appeal a final one to a tribunal, whose rulings are reported to Parliament's environment committee. An **invented** op-ed by a member of the new governing majority, not the words of any real person:

> "(i) The environment committee has not held one hearing on the Water Board in six years: Parliament has abdicated its oversight. (ii) Worse, when our new majority tried to replace the Board's members to bring its limits into line with our programme, we found we could not. That proves the Board has drifted out of democratic control."

(a) What does sentence (i) infer from the missing hearings, and what two points from Lesson 6.2 undercut the inference? Two sentences. (b) Which kind of drift does sentence (ii) claim, which kind was the Act's insulation built to prevent, and what evidence would actually show the kind claimed? Two sentences.

<details>
<summary>Solution</summary>

**Must hit, strict (a):**

- The inference runs from no police patrols to no oversight. The Act wires fire alarms (comment rights, tribunal appeals, rulings reported to the committee), and McCubbins and Schwartz's point is that a legislature that rarely patrols may have chosen alarms, which are cheaper because others pay for detection.
- A quiet record is also what control by anticipation looks like: a Board that expects the alarm to ring complies, so nothing happens. Silence fits tight control and abdication alike, and cannot by itself tell them apart.

**Must hit, strict (b):**

- Sentence (ii) claims bureaucratic drift, the Board pursuing its own aims. What the new majority ran into is insulation the enacting coalition built against coalitional drift, later politicians using the agency to undo the deal: Moe's point that today's winners insulate their agencies because they expect to lose power.
- Evidence of bureaucratic drift would be the Board's limits moving away from what the founding coalition's Act wanted, for the Board's own reasons (a bigger remit, or capture by the water companies). Refusing to follow a later majority is not that evidence.

**Wrong turns:** treating fire alarms as no oversight, or as less of it, rather than a different design with different costs. Reading the for-cause clause as a sign the Board is out of control: blocking the new majority is the clause doing its job, the trade-off being that a shield against tomorrow's majority also shields the agency from today's. Arguing instead that the alarms are useless: water companies may complain about tight limits louder than residents about loose ones, which is a reason to add a patrol, not proof that oversight is absent.

**Model answer:** (a) Sentence (i) reads the absence of police patrols as the absence of oversight, but the Act sets up fire alarms, through comment rights and tribunal appeals reported to the committee, which McCubbins and Schwartz argue legislators rationally prefer; and a Board that expects the alarm to ring has reason to comply, so a quiet record fits tight control as well as abdication. (b) Sentence (ii) claims bureaucratic drift, but the for-cause terms were built by the enacting coalition against coalitional drift, so a new majority's failure to replace the members is the insulation working as designed; bureaucratic drift would show up as the Board's limits moving away from what the founding coalition wanted, for the Board's own ends such as a larger remit or capture by the water companies.

</details>

## Connections

- **Backward:** every variable is an earlier lesson: the effective number of parties and the Gallagher index ([2.1](02-01-measuring-outcomes.md)), cabinets and their durability ([3.1](03-01-parliamentary-government.md), [3.2](03-02-forming-governments-coalitions-and-minorities.md)), presidential balance ([3.3](03-03-presidential-government.md)), Lijphart's bicameralism index ([4.1](04-01-bicameralism.md)), federalism and amendment rules ([5.1](05-01-federal-unitary-devolved.md)), judicial review ([5.3](05-03-judicial-review-compared.md), [5.4](05-04-weak-form-review-appointments-and-independence.md)), and central banks ([6.2](06-02-delegation-and-oversight.md)).
- **Forward:** [`comparative-politics`](../../comparative-politics/syllabus.md) uses this map as vocabulary, and its lesson on ethnic conflict takes up **consociationalism**, Lijphart's power-sharing model for deeply divided societies. [`constitutional-law`](../../constitutional-law/syllabus.md) takes the US design into doctrine.
- **Sideways:** dispersing power so that no single part can rule is the mixed constitution's oldest idea: Cicero's blend of kingship, aristocracy and people ([`history-of-political-thought` 2.1](../../history-of-political-thought/lessons/02-01-cicero-the-commonwealth-and-natural-law.md)), Machiavelli's Rome ([3.2](../../history-of-political-thought/lessons/03-02-machiavelli-the-discourses.md)), Montesquieu's separation of powers ([5.1](../../history-of-political-thought/lessons/05-01-montesquieu-the-spirit-of-the-laws.md)), and Madison's ambition counteracting ambition ([5.2](../../history-of-political-thought/lessons/05-02-the-federalist-faction-and-the-extended-republic.md)). The independent central bank as commitment is [`grad-macro` 6.2](../../grad-macro/lessons/06-02-policy-rules-taylor-principle.md). Identifying whether institutions cause outcomes belongs to [`empirical-political-economy`](../../empirical-political-economy/syllabus.md).

## Closing the course

You can now follow a democracy end to end. Module 1 turned votes into seats by hand, and Module 2 measured what those formulas do to parties. Module 3 traced how governments form and fall under parliamentary, presidential and semi-presidential rules. Module 4 found the gatekeepers inside legislatures and the parties that run them. Module 5 divided power between levels and asked who umpires the split. Module 6 followed power out to bureaucrats, agencies, central banks and voters at referendums, then mapped the whole design. Through all of it the same habits held. Separate the mechanical from the empirical, name the rule that decides, and say where it runs out. Next, [`comparative-politics`](../../comparative-politics/syllabus.md) asks how democracies arise and break down; [`constitutional-law`](../../constitutional-law/syllabus.md) turns the US design into doctrine; [`international-relations`](../../international-relations/syllabus.md) asks what institutions do without a state above them; and [`political-economy`](../../political-economy/syllabus.md) builds the formal models of voting, vetoes and coalitions this course described.
