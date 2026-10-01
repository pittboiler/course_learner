# Philosophy of Economics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The course takes economics' normative claims in technical clothing apart: that welfare rose,
that a policy is efficient, that a future harm is worth less than a present cost, that people
chose what they wanted, that a market is legitimate or its rewards deserved, that a false model
explains. It takes no side. Every position below is stated as its defenders state it, with the
premise its critics attack, and no entry records a verdict. Use the card mid-problem to find an
argument's skeleton and weakest premise, a formula with its symbols, who said what and where, or
the value judgment hiding in a technique. Two habits carry the course: sort every claim into
empirical, conceptual or normative ([three kinds of claim](#three-kinds-of-claim)), and find the
premise a formal tool smuggles in ([the value judgment in the technique](#the-value-judgment-in-the-technique)).
Two notation traps are flagged up front: [delta two ways](#delta-two-ways) and
[two Weitzman results](#two-weitzman-results). Where the build's checks against the sources
corrected the syllabus, the card follows the correction ([Conventions](#conventions)).

## Terms

Technical vocabulary in first-appearance order, glossed as the lessons gloss it. Terms with a
full entry below link to it.

| Term | Means | First used |
|---|---|---|
| [welfarism](#welfarism) | social ranking depends only on individual welfare levels | [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md) |
| [preference-satisfaction view](#preference-satisfaction-view) | welfare is getting what you prefer | [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md) |
| sum-ranking | rank states by the sum of individual welfare (with welfarism, Sen's analysis of utilitarianism) | [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md) |
| [laundered](#laundered-preferences) / [informed](#informed-preferences) / [adaptive](#adaptive-preferences) preferences | filtered for malice or error / those you would have fully informed / shrunk to fit deprivation (sour grapes) | [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md) |
| [preferences as evidence](#preferences-as-evidence) | P2′: preference is a thermometer for welfare, not the temperature | [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md) |
| [WTP](#willingness-to-pay) / [WTA](#wtp-and-wta) | most you would pay for a gain / least you would accept to forgo it | [1.2](lessons/01-02-money-and-happiness-as-measures.md) |
| CV / EV | compensating / equivalent variation, the exact money measures (`public-economics` 2.3) | [1.2](lessons/01-02-money-and-happiness-as-measures.md) |
| money metric | measuring welfare by summed WTP | [1.2](lessons/01-02-money-and-happiness-as-measures.md) |
| decision / [experienced / remembered utility](#experienced-and-remembered-utility) | weight in choice / moment-by-moment hedonic flow / retrospective evaluation | [1.2](lessons/01-02-money-and-happiness-as-measures.md) |
| [peak-end rule](#peak-end-rule), duration neglect | memory tracks worst and last moments; length largely ignored | [1.2](lessons/01-02-money-and-happiness-as-measures.md) |
| [SWB](#subjective-well-being): affect, life satisfaction | how you felt / a 0–10 judgment of your life as a whole | [1.2](lessons/01-02-money-and-happiness-as-measures.md) |
| [functioning / capability](#functionings-and-capabilities) | a being or doing / the set of functioning bundles you could achieve | [1.3](lessons/01-03-capabilities-as-a-welfare-metric.md) |
| conversion | the rate at which resources become functionings, varying by body and place | [1.3](lessons/01-03-capabilities-as-a-welfare-metric.md) |
| [HDI](#human-development-index), goalposts | the UNDP index; the fixed min and max used to normalize each dimension | [1.3](lessons/01-03-capabilities-as-a-welfare-metric.md) |
| [power mean](#arithmetic-and-geometric-means) $M_r$ | the family containing arithmetic ($r=1$), geometric ($r\to0$) and minimum ($r\to-\infty$) | [1.3](lessons/01-03-capabilities-as-a-welfare-metric.md) |
| [directly revealed preferred](#warp-and-garp) | $x^s$ was affordable when $x^t$ was chosen | [2.1](lessons/02-01-preference-and-revealed-preference.md) |
| [property alpha](#property-alpha) | contraction consistency of choice from menus | [2.1](lessons/02-01-preference-and-revealed-preference.md) |
| [total comparative evaluation](#preference-as-total-comparative-evaluation) | Hausman: preference as a ranking weighing everything you care about | [2.1](lessons/02-01-preference-and-revealed-preference.md) |
| [sympathy / commitment](#commitment-and-sympathy) | concern that affects your own welfare / choosing what you believe leaves you worse off | [2.1](lessons/02-01-preference-and-revealed-preference.md) |
| rational fool | Sen: an agent (or theory) running preference, choice and welfare together | [2.1](lessons/02-01-preference-and-revealed-preference.md) |
| [menu dependence](#menu-dependence) | the menu changes what an option means | [2.1](lessons/02-01-preference-and-revealed-preference.md) |
| description / procedure invariance | equivalent descriptions get the same choice / choosing and pricing reveal one ranking | [2.2](lessons/02-02-the-behavioural-challenge.md) |
| [framing effect](#framing-effect), [preference reversal](#preference-reversal) | the violations of those two invariances | [2.2](lessons/02-02-the-behavioural-challenge.md) |
| [present bias, beta-delta](#quasi-hyperbolic-discounting) | one extra discount $\beta$ on everything not now | [2.2](lessons/02-02-the-behavioural-challenge.md) |
| [time-consistent](#time-inconsistency) | a plan chosen earlier is still chosen when its date arrives | [2.2](lessons/02-02-the-behavioural-challenge.md) |
| [naive / sophisticated](#naive-and-sophisticated-agents) | expects future selves to obey / foresees their deviation | [2.2](lessons/02-02-the-behavioural-challenge.md) |
| scale compatibility | a pricing task makes money amounts loom larger | [2.2](lessons/02-02-the-behavioural-challenge.md) |
| inner rational agent | Infante, Lecouteux and Sugden: the posited true self behind conflicting choices | [2.2](lessons/02-02-the-behavioural-challenge.md) |
| [choice architect](#choice-architecture) | whoever arranges a menu, form or default | [2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md) |
| [libertarian paternalism](#libertarian-paternalism), nudge | steer toward considered choices, every option kept at trivial cost | [2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md) |
| [as judged by themselves](#as-judged-by-themselves) | Thaler and Sunstein's welfare standard | [2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md) |
| ancillary condition, [$P^*$](#choice-based-welfare), welfare-relevant domain | a feature of the setting that is not an option / unambiguous choice ranking / the frames counted | [2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md) |
| Pareto improvement / [Pareto optimal](#pareto-optimality) | a move helping someone and hurting no one / a state with no such move left | [3.1](lessons/03-01-the-pareto-principle.md) |
| [weak / strong Pareto](#pareto-principle) | everyone strictly prefers / no one minds and someone gains | [3.1](lessons/03-01-the-pareto-principle.md) |
| leaky bucket | Okun: transfers lose some of what they move | [3.1](lessons/03-01-the-pareto-principle.md) |
| [spurious unanimity](#spurious-unanimity) | agreement on a preference built from conflicting beliefs | [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md) |
| utility-possibility frontier $\bar S$ | best utility pairs from redistributing state $S$'s goods | [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md) |
| [Kaldor / Hicks / Scitovsky tests](#kaldor-hicks-criterion) | winners could compensate / losers could not bribe / both | [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md) |
| [VSL](#value-of-a-statistical-life) | money traded for a small risk of death, per expected death | [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md) |
| hedonic wage study | reads the VSL off wage premiums for risky jobs | [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md) |
| [contingent valuation](#contingent-valuation), [existence value](#existence-value), passive use | survey-based valuation; value of what you will never use | [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md) |
| scope insensitivity | stated WTP barely moving with the quantity at stake | [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md) |
| [modes of valuation](#modes-of-valuation) | use, respect, love, appreciation | [3.4](lessons/03-04-cbas-critics-and-defenders.md) |
| weak welfarism | Adler and Posner: well-being morally relevant, not necessarily decisive | [3.4](lessons/03-04-cbas-critics-and-defenders.md) |
| $\varepsilon$ | income elasticity of the VSL ([differentiated VSL](#differentiated-vsl)) | [3.4](lessons/03-04-cbas-critics-and-defenders.md) |
| [pure time preference](#pure-time-preference) $\delta$ | discounting welfare merely for coming later (a rate) | [4.1](lessons/04-01-why-discount.md) |
| [growth discounting](#growth-discounting) | discounting dollars because their owners will be richer | [4.1](lessons/04-01-why-discount.md) |
| [telescopic faculty](#telescopic-faculty) | Pigou: our defective perception of future pleasures | [4.1](lessons/04-01-why-discount.md) |
| agent-centred prerogative | Scheffler: permission to weight one's own concerns more | [4.1](lessons/04-01-why-discount.md) |
| $\eta$ | [elasticity of marginal utility](#elasticity-of-marginal-utility): curvature, inequality aversion, relative risk aversion | [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md) |
| [prescriptive / descriptive](#prescriptive-and-descriptive-discounting) | parameters chosen by ethics / calibrated to markets | [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md) |
| Government House utilitarianism | Sen and Williams: an elite applying a morality the governed need not share | [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md) |
| [certainty-equivalent rate](#certainty-equivalent-discount-rate) $R(t)$ | the constant rate reproducing the expected discount factor | [4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md) |
| [gamma discounting](#gamma-discounting), sliding scale | expert disagreement treated as a gamma distribution of rates | [4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md) |
| person-affecting | a complaint needs someone made worse off ([non-identity problem](#non-identity-problem)) | [4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md) |
| [commodification](#commodification) | treating a good as a commodity | [5.1](lessons/05-01-commodification.md) |
| invariance | the old options keep their value once a price exists ([option-adding inference](#option-adding-inference)) | [5.1](lessons/05-01-commodification.md) |
| [crowding out](#crowding-out) / expressive meaning | payment reducing motivation / what a price says about a good | [5.1](lessons/05-01-commodification.md) |
| domino effect, double bind, market-inalienability | Radin's terms ([contested commodities](#contested-commodities)) | [5.1](lessons/05-01-commodification.md) |
| fictitious commodities | Polanyi: labour, land and money, not produced for sale | [5.1](lessons/05-01-commodification.md) |
| [blocked exchange](#blocked-exchanges), sphere, desperate exchange | Walzer's terms | [5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md) |
| [repugnance](#repugnance) | objection to a trade its parties want | [5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md) |
| [noxious market](#noxious-markets) | high on vulnerability, weak agency, or extreme harm to individuals or society | [5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md) |
| fair market value | Wertheimer's benchmark for a fair split ([exploitation](#exploitation)) | [5.3](lessons/05-03-exploitation-in-labour-markets.md) |
| labour-power, [surplus value](#surplus-value), $s/v$ | capacity to work for a day; value produced beyond its cost; the rate of exploitation | [5.3](lessons/05-03-exploitation-in-labour-markets.md) |
| [withdrawal test](#property-relations-account); capitalist / feudal / socialist exploitation | Roemer's counterfactual and its three variants | [5.3](lessons/05-03-exploitation-in-labour-markets.md) |
| isomorphism | Roemer: labour and credit markets give the same classes and exploitation | [5.3](lessons/05-03-exploitation-in-labour-markets.md) |
| [desert basis](#desert-bases) | the fact in virtue of which one deserves | [5.4](lessons/05-04-markets-and-desert.md) |
| marginal product $MP_L$, $MP_K$ | output lost if one unit is withdrawn ([marginal productivity theory](#marginal-productivity-theory)) | [5.4](lessons/05-04-markets-and-desert.md) |
| [brute / option luck](#brute-and-option-luck) | unchosen and uninsurable / a deliberate gamble | [5.4](lessons/05-04-markets-and-desert.md) |
| *kosmos* / *taxis*, *catallaxy* | grown / made order; the market order ([spontaneous order](#spontaneous-order)) | [5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md) |
| [value / merit](#value-and-merit) | worth to others / praiseworthiness of conduct | [5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md) |
| basic structure | Rawls: the major institutions as the subject of justice | [5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md) |
| social connection model | Young's forward-looking shared responsibility ([structural injustice](#structural-injustice)) | [5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md) |
| economic man | Mill: man considered solely as desiring wealth ([tendency law](#tendency-law)) | [6.1](lessons/06-01-idealization-and-isolation.md) |
| disturbing causes | Mill: the other causes for which allowances are made | [6.1](lessons/06-01-idealization-and-isolation.md) |
| [isolation](#isolation) / [idealization](#idealization) / Galilean idealization | sealing off factors / doing it by false assumption / with a route back | [6.1](lessons/06-01-idealization-and-isolation.md) |
| [capacity](#capacities) | a stable causal power, present even when masked | [6.1](lessons/06-01-idealization-and-isolation.md) |
| Engel curve | demand for a good as a function of income | [6.1](lessons/06-01-idealization-and-isolation.md) |
| [F-twist](#f-twist), "as if" | Samuelson's name for Friedman's thesis; behaving as if maximizing | [6.2](lessons/06-02-friedmans-as-if-and-its-critics.md) |
| [negligibility / domain / heuristic](#musgrave-assumption-types) | Musgrave's three kinds of assumption | [6.2](lessons/06-02-friedmans-as-if-and-its-critics.md) |
| [instrumentalism / realism](#instrumentalism-and-realism) | theory as prediction tool / as approximately true causal structure | [6.2](lessons/06-02-friedmans-as-if-and-its-critics.md) |
| [how-possibly / how-actually](#how-possibly-explanation) | could produce it / did produce it | [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md) |
| impossibility hypothesis | the belief a minimal model refutes ([minimal model](#minimal-model)) | [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md) |
| like-neighbour share | Schelling segregation measure ([Schelling segregation model](#schelling-segregation-model)) | [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md) |
| [credible world](#credible-worlds) | Sugden: a believable parallel model world | [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md) |

## Notation warnings

### Delta two ways

**$\delta$ means two different things in this course, and a third elsewhere.**

| Where | $\delta$ is | Example | Discount weight on period $t$ |
|---|---|---|---|
| [2.2](lessons/02-02-the-behavioural-challenge.md) ([beta-delta](#quasi-hyperbolic-discounting)), [6.2](lessons/06-02-friedmans-as-if-and-its-critics.md) | a per-period discount **factor** | 0.95 | $\delta^t$ (times $\beta$ if not now) |
| Module 4 ([4.1](lessons/04-01-why-discount.md)–[4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md)) | a **rate** of pure time preference | 0.1 percent | $(1+\delta)^{-t}$ or $e^{-\delta t}$ |
| [`grad-macro` 2.3](../grad-macro/lessons/02-03-ramsey-cass-koopmans.md) | depreciation | — | — |

- **A factor $\delta_F$ and a rate $\delta_R$ are linked by** $\delta_F = 1/(1+\delta_R)$: a factor of
  0.95 is a rate of about 5.3 percent.
- **Across courses:** this course's $\delta,\eta$ are [`philosophy-of-debt`](../philosophy-of-debt/reference.md#discounting)'s
  $\rho,\sigma$ (its 2.3 and 6.2 write $r=\rho+\sigma g$) and `grad-macro` 2.3's $\rho,\sigma$. Here
  the Ramsey equation is $r=\delta+\eta g$ ([Ramsey equation](#ramsey-equation)).
- **$\eta$ also appears in 3.3** as the exponent of [distributional weights](#distributional-weights)
  $c^{-\eta}$: the same parameter, by design.

### Two Weitzman results

**Two different Martin Weitzman results; do not run them together.**

| | Weitzman 1974, "Prices vs. Quantities" | Weitzman 1998 / 2001, declining rates |
|---|---|---|
| Question | under cost uncertainty, regulate pollution by a price (tax) or a quantity (cap)? | what rate to discount the far future at, when the rate itself is uncertain? |
| Answer turns on | the relative slopes of marginal benefit and marginal cost | averaging discount factors, not rates: the [certainty-equivalent rate](#certainty-equivalent-discount-rate) declines toward the lowest possible rate; [gamma discounting](#gamma-discounting) (2001) |
| Taught in | [`public-economics` 3.2](../public-economics/reference.md#weitzman-rule) | [4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md) here |

Also named but not taught: Weitzman's "dismal theorem" (2009), and Gollier and Weitzman (2010) on
the [Weitzman-Gollier puzzle](#weitzman-gollier-puzzle).

## The discipline

### Three kinds of claim

**Sort every claim before you argue with it.** An empirical claim is settled by evidence; a
conceptual claim by analysis of what something is; a normative claim by argument about what should
be done or counts as better. Economic prose routinely slides between them, and most Watch-out traps
in the course are such slides.

| Kind | Settled by | Examples from the course |
|---|---|---|
| **Empirical** | data, experiment, prediction | Choices shift with the description ([2.2](lessons/02-02-the-behavioural-challenge.md)). Workers accept 280 dollars for a 1-in-25,000 risk ([3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)). People adapt, incompletely, after disability ([1.2](lessons/01-02-money-and-happiness-as-measures.md)). Capital earns 5 percent ([4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md)). Late pickups rose after the fine ([5.1](lessons/05-01-commodification.md)). Sweatshop jobs pay more than the alternatives ([5.3](lessons/05-03-exploitation-in-labour-markets.md)). Firms do not compute marginal revenue ([6.2](lessons/06-02-friedmans-as-if-and-its-critics.md)). |
| **Conceptual** | analysis of what a thing is | Welfare is preference satisfaction ([1.1](lessons/01-01-welfarism-and-preference-satisfaction.md)). "Revealed preferred" is a defined relation on data ([2.1](lessons/02-01-preference-and-revealed-preference.md)). Winners *could* compensate losers ([3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md)). The VSL ratio *is* a valuation of risk ([3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)). $\delta=0$ discounts dollars, not welfare ([4.1](lessons/04-01-why-discount.md)). A fine made lateness a price ([5.1](lessons/05-01-commodification.md)). The marginal product is what a worker creates ([5.4](lessons/05-04-markets-and-desert.md)). Justice applies only to conduct ([5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)). |
| **Normative** | argument about what is better or owed | Only welfare counts ([1.1](lessons/01-01-welfarism-and-preference-satisfaction.md)). Dollars add at par ([1.2](lessons/01-02-money-and-happiness-as-measures.md)). Imbalance across dimensions should be penalized ([1.3](lessons/01-03-capabilities-as-a-welfare-metric.md)). The reflective self's judgment is the person's own ([2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md)). Losers need not be compensated ([3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md)). Society should discount at the market rate ([4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md)). Something of value was lost ([5.1](lessons/05-01-commodification.md)). |
| *Modal* (6.3) | a model | Segregation *can* arise from mild preferences ([6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md)): neither "it does" (empirical) nor "no one is to blame" (normative). |

- **"Irrational" packs all three:** a datum, a claim that the options were the same, and a norm of
  invariance ([2.2](lessons/02-02-the-behavioural-challenge.md)).
- **"The VSL is 7 million," "the market rate is 5 percent," "markets are efficient"** each mix the
  three ([3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md),
  [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md),
  [3.1](lessons/03-01-the-pareto-principle.md)).

### The value judgment in the technique

**Every formal tool in the course runs on a normative premise; name it, and the rival premise that
changes the answer.**

| Tool | Normative premise it smuggles in | Rival premise that changes the answer |
|---|---|---|
| Summed WTP ([1.2](lessons/01-02-money-and-happiness-as-measures.md)) | a dollar carries equal welfare whoever holds it | weights $\propto u'(w)$ or $c^{-\eta}$ ([distributional weights](#distributional-weights)) |
| Preference-satisfaction metric ([1.1](lessons/01-01-welfarism-and-preference-satisfaction.md)) | satisfied preference is welfare, including malicious and adapted ones | laundering; preferences only as evidence; capabilities |
| HDI aggregation ([1.3](lessons/01-03-capabilities-as-a-welfare-metric.md)) | the mean $r$, weights, goalposts and log income | a different $r$ (arithmetic vs geometric reverses rankings); Nussbaum's thresholds |
| Revealed preference as welfare ([2.1](lessons/02-01-preference-and-revealed-preference.md)) | no commitment, no menu-borne norms, correct beliefs | Sen's commitment; Hausman's evidential view |
| Beta-delta ([2.2](lessons/02-02-the-behavioural-challenge.md)) | the date-0 self is "patient", the later self "biased" | no self privileged (Bernheim-Rangel silence; Sugden) |
| Nudge ([2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md)) | the reflective self's judgment is the person's own | every counted frame has equal standing ($P^*$) |
| Pareto principle ([3.1](lessons/03-01-the-pareto-principle.md)) | welfarism and preference satisfaction | non-welfare values (rights, equality); laundering |
| Kaldor-Hicks test ([3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md)) | hypothetical compensation suffices; status quo as baseline | losers have claims a potential payment does not meet (Little) |
| VSL and CBA ([3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)) | WTP measures benefit; equal weights; WTP or WTA assigns the entitlement | $\eta>0$; WTA for losses; plural modes; citizen judgments |
| Uniform VSL ([3.4](lessons/03-04-cbas-critics-and-defenders.md)) | looks neutral, is a weight with $\eta=\varepsilon$ on mortality only | differentiated VSL (the WTP premise applied consistently) |
| Ramsey equation ([4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md)) | values of $\delta$ and $\eta$; that market rates carry authority (descriptive) | prescriptive parameters; $\eta$ can do $\delta$'s work |
| Opportunity-cost discounting ([4.1](lessons/04-01-why-discount.md)) | potential compensation across time | the transfer to the future is actually made, or not |
| Certainty-equivalent rate ([4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md)) | today's dollar is the safe unit; moral disagreement as probability | average future values (Gollier); marginal-utility weights |
| Option-adding inference ([5.1](lessons/05-01-commodification.md)) | invariance: old options keep their meaning | corruption: a price changes the old options |
| Lost-surplus count of a ban ([5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md)) | welfarism: only traders' preferences count | harm to society's relations as equals (Satz, Walzer) |
| Fair-market-value test ([5.3](lessons/05-03-exploitation-in-labour-markets.md)) | the competitive price is the fair split | exploitation in production (Marx) or ownership (Roemer) |
| Marginal-product pay ([5.4](lessons/05-04-markets-and-desert.md)) | to each what he creates; the marginal counterfactual | effort or need as basis; entitlement; brute luck |
| Price rationing ([5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)) | allocation by WTP should stand | structural injustice; rules judged by their patterns |
| Representative agent ([6.1](lessons/06-01-idealization-and-isolation.md)) | society's welfare is one consumer's utility | distributional weights |
| As-if model ([6.2](lessons/06-02-friedmans-as-if-and-its-critics.md)) | prediction is the only aim (a methodological norm) | realism: assumptions are evidence about untested cases |
| How-possibly model ([6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md)) | could slides to did, and then to "no one is to blame" | causal evidence; a separate ethical premise |

## Welfare and its measurement

### Welfarism

**The claim that social evaluation may look only at how well off each person is.** Two
situations alike in everyone's welfare must be ranked alike, whatever else differs (rights,
procedure, desert, the content of anyone's wants). The term is Amartya Sen's
("Utilitarianism and Welfarism", 1979), who analysed utilitarianism as welfarism combined with
sum-ranking.

- **A claim about what evaluation may look at, not about what welfare is.** A hedonistic
  utilitarian is a welfarist who rejects the [preference-satisfaction view](#preference-satisfaction-view);
  a rights theorist can accept that view and reject welfarism.
- **P1 of [the economists default](#the-economists-default)** and premise 1 of the case for the
  [Pareto principle](#pareto-principle) ([3.1](lessons/03-01-the-pareto-principle.md)).
- **"Efficiency ignores fairness" attacks welfarism;** "people want what is bad for them" attacks
  the preference-satisfaction view. Ask of every objection which of the two it hits.
- **In the markets module** ([5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md)): counting
  each blocked trade as lost surplus to its parties is welfarism, which leaves out harms to
  non-traders' standing as equals.
- **In the models module** ([6.2](lessons/06-02-friedmans-as-if-and-its-critics.md)): welfare
  economics needs real preferences, which an as-if utility function does not claim to describe.

*Lessons:* [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md), [3.1](lessons/03-01-the-pareto-principle.md), [5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md), [6.2](lessons/06-02-friedmans-as-if-and-its-critics.md)

### Preference-satisfaction view

**A person is better off in whichever state she prefers: welfare is the satisfaction of
preferences.** Formally $w_i(x) \ge w_i(y)$ exactly when $x \succeq_i y$, so a utility function
$u_i$ representing $i$'s preference ordering $\succeq_i$ measures her welfare $w_i$.

- **The desire theory of [`ethics` 1.2](../ethics/lessons/01-02-what-is-good-for-a-person.md)**
  (rivals: hedonism, objective list) turned into a policy metric.
- **Why economists default to it:** preferences are roughly observable (choice, willingness to
  pay); deferring to them keeps the planner from deciding what is good for you; and a utility
  representation makes welfare summable.
- **Three pressures:** [laundering](#laundered-preferences), [information](#informed-preferences),
  [adaptation](#adaptive-preferences). Premise 2 of the case for Pareto is attacked by the
  adaptive and behavioural evidence ([3.1](lessons/03-01-the-pareto-principle.md)).
- **"People prefer A" is empirical; "A is better for them" is conceptual;** this view is the bridge
  between the two, and no survey can test the bridge.

*Lessons:* [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md), [3.1](lessons/03-01-the-pareto-principle.md)

### The economists default

**Rank policies by how well they satisfy people's preferences, as measured by their choices and
willingness to pay.** The reconstruction in [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md):

1. **P1 ([welfarism](#welfarism)).** The social ranking depends only on the vector of individual
   welfare levels.
2. **P2 ([preference satisfaction](#preference-satisfaction-view)).** You are better off in
   whichever state you prefer.
3. **P3 (measurement).** Choices and willingness to pay reveal preferences
   ([2.1](lessons/02-01-preference-and-revealed-preference.md), [1.2](lessons/01-02-money-and-happiness-as-measures.md)).
4. **C.** Rank policies by an increasing function of the $u_i$: summed WTP, a social welfare
   function, or the Pareto test.

- **Critics attack P2** (laundering, information, adaptation) or **P1** (rights, fairness,
  the content of preferences). Most objections in Module 1 hit one premise and leave the other
  standing.
- **The evidential retreat** replaces P2 with P2′ ([preferences as evidence](#preferences-as-evidence)).

*Lessons:* [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md)

### Laundered preferences

**Filter malicious, antisocial or misinformed preferences out before they enter the social
calculus.** Harsanyi (1977) had excluded antisocial preferences such as sadism and malice from
his utilitarian sum; Robert Goodin ("Laundering Preferences", in Elster and Hylland, eds.,
*Foundations of Social Choice Theory*, 1986) generalized the move.

- **The filter's contents are a value judgment.** A malicious preference can be fully informed and
  perfectly consistent, so laundering applies a moral standard, not a rationality test.
- **Which premise does it revise?** Route 1 revises P2: satisfying a malicious preference does not
  make you better off, so welfare is *laundered* preference satisfaction and welfarism survives
  (Harsanyi needs this route). Route 2 revises P1: it does make you better off, but evaluation
  should ignore welfare gained from others' exclusion, so non-welfare information (a preference's
  content) affects the ranking (Sen pressed cases this way against welfarism). Same arithmetic,
  different theories.
- **The town pool** ([1.1](lessons/01-01-welfarism-and-preference-satisfaction.md) Example 1,
  illustrative): unlaundered, opening the pool nets $12{,}000 - 5{,}000 - 10{,}000 = -3{,}000$
  dollars; launder the exclusionary 10 dollars a head and it nets $+7{,}000$; the verdict flips at
  7 dollars a head.
- **In [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md):** the meddlesome
  preferences behind the [liberal paradox](#liberal-paradox) are candidates for laundering.

*Lessons:* [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md), [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md)

### Informed preferences

**Count only the preferences you would have with full information and clear reasoning.** A
preference resting on a false belief (you want the glass because you think it holds water; it
holds bleach) is not one whose satisfaction helps you.

- **Handles false-belief cases, not fully informed malice** (that needs
  [laundering](#laundered-preferences)) **and not adaptation** (an adapted preference can be
  fully informed).
- **Informed but unstable** ([1.1](lessons/01-01-welfarism-and-preference-satisfaction.md)
  Example 2, invented): healthy, well-informed people would refuse a demanding treatment; equally
  informed people on it want to continue. A preference is indexed to a time, and P2 supplies no
  rule for which self counts.

*Lessons:* [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md)

### Adaptive preferences

**People long deprived come to want little, so a metric of satisfied desire registers their
deprivation as small.** Jon Elster called it sour grapes; Sen argued that the chronically
deprived adjust their desires to what seems feasible. The theory of well-being behind it is
[`ethics` 1.2](../ethics/lessons/01-02-what-is-good-for-a-person.md)'s.

- **Worse than a puzzle as policy:** a preference-satisfaction metric steers resources *away* from
  the group whose preferences have shrunk, since there is less unmet preference there to satisfy.
- **Hedonic form** ([1.2](lessons/01-02-money-and-happiness-as-measures.md)): whether people adapt
  is empirical and contested (adaptation real but incomplete for some events, disability among
  them: Diener, Lucas and Scollon, 2006); whether an adapted report *should* count is normative.
- **Motivates capabilities** ([1.3](lessons/01-03-capabilities-as-a-welfare-metric.md)): premise 3
  of [the capability argument](#the-capability-argument) is that utility metrics miss adaptation.

*Lessons:* [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md), [1.2](lessons/01-02-money-and-happiness-as-measures.md), [1.3](lessons/01-03-capabilities-as-a-welfare-metric.md)

### Preferences as evidence

**Preferences are a good thermometer, not the temperature.** Daniel Hausman and Michael McPherson
("Preference Satisfaction and Welfare Economics", *Economics and Philosophy*, 2009) give up P2
and keep most of the practice:

- **P2′.** When people are concerned with their own interests and are reasonably good judges of
  what serves them, their preferences are reliable *evidence* of their welfare.
- **What it buys:** welfare economics is defensible where the two conditions roughly hold, and
  laundering stops looking ad hoc: other-regarding preferences fail the first condition,
  misinformed and adapted ones the second.
- **Where it is weakest:** to say when someone is a "good judge" you need an account of her
  interests independent of her preferences, so the ethics 1.2 dispute is postponed to exactly the
  cases policy most needs to decide. Reply: a thermometer can be calibrated on a few clear cases
  without a full theory of heat.
- **Extended in [2.1](lessons/02-01-preference-and-revealed-preference.md):** choice is evidence of
  preference only via beliefs, and preference is evidence of welfare only absent
  [commitment](#commitment-and-sympathy) and error.

*Lessons:* [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md), [2.1](lessons/02-01-preference-and-revealed-preference.md)

### Willingness to pay

**The largest sum a person would give up for a change and still be no worse off by her own
lights.** Under utility $u$ and wealth $w$, WTP for a gain $\Delta u$ solves

$$u(w-\text{WTP})+\Delta u=u(w).$$

- **The money metric of the [preference-satisfaction view](#preference-satisfaction-view):** each
  person prices her own gain, and the analyst adds the prices. CBA's measure of benefit, bounded
  by wealth ([3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)).
- **Reads decision utility** ([experienced and remembered utility](#experienced-and-remembered-utility)).
- **Inherits the elicitation procedure** ([2.2](lessons/02-02-the-behavioural-challenge.md)): stated
  prices can rank options opposite to choices ([preference reversal](#preference-reversal)).
- See [wealth dependence of WTP](#wealth-dependence-of-wtp) and [WTP and WTA](#wtp-and-wta).

*Lessons:* [1.2](lessons/01-02-money-and-happiness-as-measures.md), [2.2](lessons/02-02-the-behavioural-challenge.md), [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)

### Wealth dependence of WTP

**The same good, desired equally, draws a higher willingness to pay from a richer person,
because a dollar matters less to him.** Under log utility,

$$\text{WTP}=w\left(1-e^{-\Delta u}\right),$$

a fixed share of wealth: double the wealth, double the WTP.

- **The footbridge** ([1.2](lessons/01-02-money-and-happiness-as-measures.md) Example 1,
  illustrative): $\Delta u = 0.05$ each; Ana (20,000 dollars) pays 975.41, Ben (200,000) pays
  9,754.12. Same desire, ten times the money.
- **Summing at par weights people by wealth.** Example 1's two projects: summed WTP picks Ben's
  (9,754.12 against 1,903.25), summed log utility picks Ana's ($0.10 > 0.05$). Dividing each WTP by
  wealth (weighting by $u'(w) = 1/w$) restores the utility ranking.
- **The VSL too rises with wealth** ([3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)),
  so unweighted sums count the rich more; see [differentiated VSL](#differentiated-vsl).
- **The HDI was built partly to escape it** ([1.3](lessons/01-03-capabilities-as-a-welfare-metric.md)),
  and has its own implied prices ([Human Development Index](#human-development-index)).

*Lessons:* [1.2](lessons/01-02-money-and-happiness-as-measures.md), [1.3](lessons/01-03-capabilities-as-a-welfare-metric.md), [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)

### WTP and WTA

**Paying to get a gain and being paid to forgo it are two different measures of the same
preference.** Willingness to pay is the compensating variation for a gain; willingness to accept
is the equivalent variation ([`public-economics` 2.3](../public-economics/lessons/02-03-excess-burden-and-the-harberger-triangle.md)).

- **They differ by an income effect.** Under log utility, $\text{WTA}=w(e^{\Delta u}-1)$: Ben's
  WTA is 10,254.22 against WTP 9,754.12 ([1.2](lessons/01-02-money-and-happiness-as-measures.md)).
- **The observed gap is larger than the income effect explains:** loss aversion
  (Kahneman, Knetsch and Thaler, 1990) and few substitutes (Hanemann, 1991)
  ([3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)).
- **Choosing one assigns the entitlement.** The compensation test uses WTA for losses from the
  status quo; measuring by WTP treats the status quo as not owed. As in Coase, the choice of
  measure decides who holds the right ([3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)
  Problem 2: the same project at $+0.7$ million with WTP, $-0.8$ million with WTA).

*Lessons:* [1.2](lessons/01-02-money-and-happiness-as-measures.md), [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)

### Distributional weights

**Weights on each person's money gain before summing.** Summing at par is the weight 1 for
everyone. The weighted test is $\sum_i g_i B_i$, with $B_i$ person $i$'s net benefit and
$g_i \propto c_i^{-\eta}$ (normalized to average one), where $c_i$ is her consumption and $\eta$
the [elasticity of marginal utility](#elasticity-of-marginal-utility).

- **$\eta = 0$ is unweighted CBA;** under log utility weights $1/w$ recover the utilitarian ranking
  ([1.2](lessons/01-02-money-and-happiness-as-measures.md)). Which $\eta$ is the normative question
  ([3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)).
- **The reply (Kaplow and Shavell, 1994):** rank by efficiency and redistribute through the tax
  system, which does it more cheaply than distorting project choice. **Rejoinder:** that works only
  if the compensation is actually paid ([potential and actual compensation](#potential-and-actual-compensation)).
- **Across generations** ([4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md)):
  the same $c^{-\eta}$ weights are the growth-discounting term of the [Ramsey equation](#ramsey-equation).
- **Against the representative agent** ([6.1](lessons/06-01-idealization-and-isolation.md)): the
  rival premise to scoring policy by one agent's utility.
- Which weights a tax system should use as economics is `public-economics`'s
  ([social marginal welfare weights](../public-economics/reference.md#social-marginal-welfare-weights)).

*Lessons:* [1.2](lessons/01-02-money-and-happiness-as-measures.md), [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md), [3.4](lessons/03-04-cbas-critics-and-defenders.md), [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md), [6.1](lessons/06-01-idealization-and-isolation.md)

### The money-metric argument

**Rank projects by summed willingness to pay net of cost.** The standard case, reconstructed in
[1.2](lessons/01-02-money-and-happiness-as-measures.md):

1. A person is better off as more of her preferences are satisfied. *Conceptual-normative.*
2. Her WTP for a change measures, in money, how much she prefers it. *Conceptual.*
3. Money gains and losses can be added across people at par. *Normative.*
4. A project whose summed WTP exceeds its cost could pay for itself and leave someone better off
   (potential compensation). *Conceptual.*

- **Critics attack premise 3:** adding at par weights each person's welfare by her wealth, a
  [distributional weight](#distributional-weights) nobody would defend if stated aloud.
- **Summed WTP does not avoid interpersonal comparison;** it fixes the weights at par.
- **The happiness alternative** replaces premise 3 with a comparability premise (Q2): self-reports
  measure how lives go on a scale comparable across people ([subjective well-being](#subjective-well-being)).

*Lessons:* [1.2](lessons/01-02-money-and-happiness-as-measures.md)

### Experienced and remembered utility

**How an experience feels moment by moment, how it is remembered, and what is chosen next time
need not agree.** Kahneman, Wakker and Sarin ("Back to Bentham?", 1997) separate:

| Kind | What it is | Read by |
|---|---|---|
| Decision utility | the weight an outcome gets in choice | revealed preference, WTP |
| Experienced utility | the moment-by-moment flow of pleasure and pain (Bentham's sense) | a hedonist metric |
| Remembered utility | the retrospective evaluation of an episode | memory, and so later choice |

- **The cold-water study** (Kahneman, Fredrickson, Schreiber and Redelmeier, *Psychological
  Science*, 1993): 60 seconds at 14°C against the same 60 seconds plus 30 more as the water
  warmed to 15°C; a significant majority chose to repeat the longer trial. Redelmeier and Kahneman
  (1996) found the same pattern in colonoscopy patients.
- **One person, two episodes** ([1.2](lessons/01-02-money-and-happiness-as-measures.md) Example 2):
  experienced totals 38 against 52, peak-end scores 7.5 against 5.0. Preference and WTP side with
  the longer episode, a hedonist metric with the shorter. No interpersonal comparison is involved;
  the split is inside one person.

*Lessons:* [1.2](lessons/01-02-money-and-happiness-as-measures.md)

### Peak-end rule

**Retrospective evaluations track roughly the average of the worst moment and the last, and
largely ignore duration.** Duration neglect: Fredrickson and Kahneman (1993). Stylized:
remembered score $=(\text{peak}+\text{end})/2$.

- **Adding milder pain can improve the memory** of an episode that contains strictly more pain.
- **The hedonist** reads the resulting choice as a memory error; **the defender of choice** says
  how an episode ends and is remembered is part of what the person cares about, and overriding
  her considered preference is paternalism.

*Lessons:* [1.2](lessons/01-02-money-and-happiness-as-measures.md)

### Subjective well-being

**Self-reported welfare: how people say they feel, or how they rate their lives.**

- **Two families:** affect measures (how you felt yesterday) lean hedonist; life-satisfaction
  ratings (0 to 10, "your life as a whole") ask for a judgment of a life, largely non-hedonic. They
  can respond differently to the same change.
- **Premise Q2 is where it is weakest:** people use response scales differently. Bond and Lang
  (*Journal of Political Economy*, 2019): with ordered categories, which group is happier on
  average is generally not identified without strong assumptions about how people map feelings to
  numbers, and several published rankings reverse under plausible transformations.
- **Adaptation** (Diener, Lucas and Scollon, 2006) is empirical; whether it should count is the
  [adaptive-preference](#adaptive-preferences) question.

*Lessons:* [1.2](lessons/01-02-money-and-happiness-as-measures.md)

### Functionings and capabilities

**A functioning is a being or a doing; a capability is the set of functioning bundles a person
could achieve: her real freedom to live one kind of life rather than another.** Sen's contrast:
a fasting monk and a starving labourer achieve the same functioning (undernourishment), but the
monk could eat.

- **Against resources:** people convert income into functionings at different rates (a wheelchair
  user needs more income for the same mobility).
- **Against utility:** [adaptive preferences](#adaptive-preferences) make deprived lives score well
  on preference satisfaction and happiness.
- **Sen vs Nussbaum:** Sen ("Equality of What?", 1979; *Commodities and Capabilities*, 1985;
  *Development as Freedom*, 1999) refuses a canonical list, which should come from public
  reasoning. Nussbaum fixes ten central capabilities, each owed to a threshold (*Creating
  Capabilities*, 2011): life, bodily health, bodily integrity, senses imagination and thought,
  emotions, practical reason, affiliation, other species, play, control over one's environment.
- **Here a measure;** capabilities as the currency of justice is
  [`political-philosophy`](../political-philosophy/syllabus.md) 2.5's question.

*Lessons:* [1.3](lessons/01-03-capabilities-as-a-welfare-metric.md)

### The capability argument

**Welfare for policy should be measured in the space of capabilities.** Reconstructed in
[1.3](lessons/01-03-capabilities-as-a-welfare-metric.md):

1. A welfare metric for policy should track how well lives can go, comparably across persons.
2. Resource metrics miss conversion.
3. Utility metrics miss adaptation.
4. Capability tracks the freedom to function, which neither distorts, and leaves the choice of how
   to live with the person.

- **Critics attack the step from 4 to a usable metric:** the [indexing problem](#indexing-problem)
  and the [perfectionism objection](#perfectionism-objection).
- **A quieter gap:** capability sets are counterfactual and unobserved, so real indices measure
  achieved functionings and a resource, and reach Sen's space only by proxy.

*Lessons:* [1.3](lessons/01-03-capabilities-as-a-welfare-metric.md)

### Human Development Index

**The UNDP's index of health, education and log income** (1990, devised under Mahbub ul Haq).
Each dimension is normalized to $[0,1]$ between fixed goalposts; the indices were combined by an
arithmetic mean until the 2010 Report, by a geometric mean since
([arithmetic and geometric means](#arithmetic-and-geometric-means)).

- **It measures achieved functionings (longevity, schooling) and a resource (income),** not
  capabilities: the monk and the labourer get the same entry.
- **Implied trade-offs** ([1.3](lessons/01-03-capabilities-as-a-welfare-metric.md) Example 2, with
  goalposts of the kind the HDI now uses): holding the geometric mean fixed, a year of life
  expectancy trades for about 58 dollars of annual income per head in an illustrative poor country
  and about 3,994 in a rich one, a ratio of about 69. Martin Ravallion ("Troubling tradeoffs in the
  Human Development Index", *Journal of Development Economics*, 2012) pressed this kind of trade-off
  against the 2010 HDI.
- **Defender:** the index ranks countries; it does not price lives. **Critic:** a ranking device
  used to judge policy has implied prices whether or not anyone reads them off.

*Lessons:* [1.3](lessons/01-03-capabilities-as-a-welfare-metric.md)

### Arithmetic and geometric means

**How far one dimension may stand in for another is set by the choice of mean.** The power mean
$M_r$ runs from $r = 1$ (arithmetic: perfect substitutes at one for one) through $r \to 0$
(geometric: the scarce dimension is dear, and a zero anywhere zeroes the index) to
$r \to -\infty$ (the minimum). Elasticity of substitution $\sigma = 1/(1-r)$; formulas under
[index arithmetic](#index-arithmetic).

- **Contours** ([1.3](lessons/01-03-capabilities-as-a-welfare-metric.md) figure): $P=(0.9,0.3)$ and
  $Q=(0.6,0.6)$ tie at 0.6 arithmetically; geometrically $P$ falls to 0.520, and at $P$ one point of
  income is worth three of health.
- **A reversal** (Example 1): $C=(0.85,0.75,0.40)$ beats $D=(0.65,0.65,0.65)$ arithmetically
  (0.667 against 0.650) and loses geometrically (0.634 against 0.650).
- **Nussbaum's thresholds** sit closer to $r \to -\infty$ than to any mean.
- **"The geometric mean penalizes imbalance" is mathematics; "imbalance should be penalized" is a
  normative claim** about substitutability.

*Lessons:* [1.3](lessons/01-03-capabilities-as-a-welfare-metric.md)

### Indexing problem

**Turning capabilities into a ranking needs choices the capability argument does not make:** a
list of dimensions, a weight for each, an aggregation parameter $r$, goalposts, and transforms
(the log on income is a judgment that an extra dollar matters less to the rich). Each is a value
judgment, chosen by whoever builds the index.

*Lessons:* [1.3](lessons/01-03-capabilities-as-a-welfare-metric.md)

### Perfectionism objection

**A capability metric with a theorist-fixed list ranks lives by a contested view of the good.**
The dilemma: if the theorist fixes the list and weights, the metric imposes a view many citizens
reject, the perfectionism a liberal state is meant to avoid; if public reasoning fixes them, the
metric aggregates people's evaluations after all and inherits the adaptation it condemned.

- **Replies:** capability, not functioning, is measured, so no one is told how to live; Nussbaum
  offers her list as the object of an overlapping consensus, not a comprehensive doctrine.
- **Open, not settled:** whether the capability/functioning distinction survives once a list and
  weights are fixed.

*Lessons:* [1.3](lessons/01-03-capabilities-as-a-welfare-metric.md)

## Rationality choice and nudges

### WARP and GARP

**Tests of whether observed choices could come from one stable preference ordering.** With
prices $p^t$ and chosen bundles $x^t$, $x^t$ is *directly revealed preferred* to $x^s$ when
$p^t\cdot x^s\le p^t\cdot x^t$: $x^s$ was affordable and passed over. WARP forbids two bundles
each revealed preferred to the other; GARP forbids cycles; Afriat's theorem: finite data satisfy
GARP exactly when some well-behaved utility function rationalizes them. Owned by
[`grad-micro` 2.6](../grad-micro/lessons/02-06-revealed-preference.md); the test is under
[choice and time arithmetic](#choice-and-time-arithmetic).

- **A violation shows only that no single stable ordering over the bundles *as described* fits
  the data,** not that the chooser is irrational; that needs the external standard Sen insists on.
- **What it refutes depends on the position:** for the behaviourist, she has no ordering over
  these bundles; for Hausman, a *joint* hypothesis failed (stable preferences plus the belief that
  the bundles were the same goods both days), and which conjunct failed is empirical.
- **"Revealed preferred" is a defined relation on data.** Reading it as a fact about her
  evaluation is an evidential inference; reading it as a fact about her welfare is a further,
  normative step.

*Lessons:* [2.1](lessons/02-01-preference-and-revealed-preference.md)

### Property alpha

**Contraction consistency: something chosen from a big menu is still chosen when the menu
shrinks around it.** With $C(S)\subseteq S$ the choice from menu $S$: if $x\in C(S)$ and
$x\in T\subseteq S$, then $x\in C(T)$. Choices rationalizable by one ordering must satisfy it.

- **The last apple** ([2.1](lessons/02-01-preference-and-revealed-preference.md) Example 2):
  $C(\{n,a_1\})=\{n\}$ and $C(\{n,a_1,a_2\})=\{a_1\}$ violate alpha; an ordering would need $n$
  strictly above $a_1$ and $a_1$ at least as good as $n$.
- **The redescription rescue** ("take the last apple" vs "take one of two") is always available,
  which is the trouble: if any violation can be redescribed away, consistency forbids nothing.
  A *principled* redescription needs the chooser's norms and beliefs.

*Lessons:* [2.1](lessons/02-01-preference-and-revealed-preference.md)

### Revealed preference theory

**Rebuild demand theory from observed choices alone.** Paul Samuelson's 1938 *Economica* note.
The behaviourist reading, defended by Faruk Gul and Wolfgang Pesendorfer ("The Case for Mindless
Economics", 2008): economics models choices, not minds.

1. Economics should use only concepts it can define in observable terms.
2. A mental state can be observed only through the choices it produces.
3. "$x$ is preferred to $y$" can be defined as "$x$ is chosen when $y$ is available".
4. **C.** Preference is a choice pattern, and consistency conditions (WARP, GARP, alpha) are the
   whole content of rationality.

- **Critics attack premise 3:** it makes "she chose against her preference" a contradiction, yet
  commitment, weakness of will and mistakes about options all seem to be just that; and rescuing
  the last-apple guest uses the norms and beliefs the program meant to leave out.
- **Rival:** [preference as total comparative evaluation](#preference-as-total-comparative-evaluation).

*Lessons:* [2.1](lessons/02-01-preference-and-revealed-preference.md)

### Preference as total comparative evaluation

**A preference is a mental ranking that weighs everything the agent cares about** (self-interest,
morals, manners), and it causes choice together with beliefs. Daniel Hausman, *Preference, Value,
Choice, and Welfare* (2012).

1. Choice is caused by preferences *together with beliefs*.
2. So preferences can be recovered from choice only by fixing beliefs, and beliefs only by fixing
   preferences.
3. **C.** Choice is evidence of preference, not its definition; every revealed-preference inference
   carries a hidden premise about what the chooser believed.

- **Critics attack his reply to Sen:** if commitment is folded into total evaluations, preference
  satisfaction stops being well-being and welfarism loses its standard link. Hausman accepts this
  ("Sympathy, Commitment, and Preference", *Economics and Philosophy*, 2005): he and Sen agree that
  choice and welfare come apart and differ over where to put the gap.

*Lessons:* [2.1](lessons/02-01-preference-and-revealed-preference.md)

### Commitment and sympathy

**Sympathy keeps choice tracking the chooser's welfare; commitment drives a wedge between
them.** Sen, "Rational Fools" (*Philosophy and Public Affairs*, 1977).

- **Sympathy:** concern for others that affects your own welfare; their suffering pains you, so
  helping them makes you better off. Not the opposite of self-interest.
- **Commitment:** choosing an act you believe will leave you worse off than an available
  alternative, from duty or principle.
- **The rational fool:** an agent, or an economics, that runs preference, choice and welfare
  together under one word cannot describe commitment.
- **Use:** a reading of a WARP violation that does not convict the chooser, and a reason the
  inference from choice to welfare fails.

*Lessons:* [2.1](lessons/02-01-preference-and-revealed-preference.md)

### Menu dependence

**What is chosen can depend on what else is on the menu, because the menu changes what an option
means.** Sen, "Internal Consistency of Choice" (*Econometrica*, 1993): politeness forbids taking
the *last* apple, not taking an apple; a second example, an offer whose added option reveals
something about the offerer, is described differently across sources.

- **Consistency is not internal:** whether choices are consistent cannot be settled from the
  choices alone; it depends on the chooser's objectives and norms.

*Lessons:* [2.1](lessons/02-01-preference-and-revealed-preference.md)

### Framing effect

**Choice flips with a logically equivalent description of the same options,** a violation of
description invariance. Tversky and Kahneman's "Asian disease" problem (*Science*, 1981): 600
expected deaths; "200 saved for sure" against a one-in-three gamble on saving all 600 gets most
choosing the sure thing; "400 die for sure" against a one-in-three gamble on no deaths gets most
choosing the gamble. Every program saves 200 in expectation. (Percentages are reported in the
lesson only as "most".)

- **"Irrational" adds two claims to the datum:** a conceptual one (the descriptions present the
  same option, with no information in the frame) and a normative one (description invariance
  binds). Sher and McKenzie (2006) deny the first: a speaker's frame can signal the expected
  baseline.
- **Reference dependence** sits under framing; prospect theory as a description is
  [`decision-theory`](../decision-theory/syllabus.md) 2.4's.

*Lessons:* [2.2](lessons/02-02-the-behavioural-challenge.md)

### Preference reversal

**Choose the safe bet, but price the long shot higher,** a violation of procedure invariance
(choosing and pricing should reveal one ranking). Lichtenstein and Slovic (1971); Grether and Plott
(*AER*, 1979) tried to explain it away with incentives and controls, and it survived.

- **The money pump** ([2.2](lessons/02-02-the-behavioural-challenge.md) Example 2, illustrative
  bets): sell her the long shot at her price, swap it for the safe bet she chooses, buy that back
  at her lower price; she loses the price gap each cycle. It assumes one price serves as both
  buying and selling price; once WTP and WTA come apart, the cycle may not close.
- **Scale compatibility** (Tversky, Slovic and Kahneman, *AER*, 1990): a pricing task makes money
  amounts loom larger. On that diagnosis each ranking is an artefact of its question, and "her real
  preference between the bets" may have no answer.
- **For CBA:** a valuation by stated prices inherits whichever ranking its survey elicited.

*Lessons:* [2.2](lessons/02-02-the-behavioural-challenge.md)

### Quasi-hyperbolic discounting

**The future discounted at a steady rate, plus one extra cut for not being today.** The self at
date $t$ ranks consumption streams by

$$U_t = u(c_t) + \beta\sum_{k=1}^{\infty}\delta^k\,u(c_{t+k}),$$

with $u$ per-period utility, $\delta$ the per-period discount **factor** ($0<\delta<1$) and $\beta$
the present-bias cut ($0<\beta\le 1$). $\beta = 1$ is exponential discounting. Phelps and Pollak
(1968) for generations; Laibson (*QJE*, 1997) for one person; Strotz (1956) saw the problem.

- **Notation warning:** here $\delta$ is a *factor* such as 0.95; Module 4 writes $\delta$ for a
  *rate* of pure time preference such as 0.1 percent. See [delta two ways](#delta-two-ways).
- **Quasi, not true, hyperbolic:** after the first period discounting is exponential, so two
  future rewards flip only when the earlier becomes immediate. True hyperbolic discounting,
  $1/(1+kt)$ with $k>0$, drifts continuously.
- **The value judgment in the technique:** writing the model this way calls the date-0 ranking
  "patient" and the later one "biased"; nothing in the algebra says which self's $U_t$ is the
  welfare criterion.
- **Tests the F-twist** ([6.2](lessons/06-02-friedmans-as-if-and-its-critics.md) Example 2): an
  as-if exponential model predicts no demand for commitment devices.

*Lessons:* [2.2](lessons/02-02-the-behavioural-challenge.md), [6.2](lessons/06-02-friedmans-as-if-and-its-critics.md)

### Time inconsistency

**A plan the date-0 self chooses for date $t$ is abandoned when date $t$ arrives.** Exponential
discounting is time-consistent (the weight ratio $\delta^{t'}/\delta^{t}$ does not depend on when
you look); under beta-delta the ratio is $\delta^{t'-t}$ while both rewards are future but
$\beta\delta^{t'-t}$ once the earlier is now.

- **The reversal** ([2.2](lessons/02-02-the-behavioural-challenge.md) Example 1, $\beta=0.7$,
  $\delta=0.95$, linear utility): at date 0, 100 at date 5 is worth 54.16 and 120 at date 6 is worth
  61.75, so she plans to wait; at date 5 it is 100 against 79.8 and she takes the 100. An
  exponential discounter prefers the 120 from every date (ratio 1.14). Reversal window:
  $105.26 < X < 150.38$.
- **Not the capital-levy kind:** in [`public-economics` 6.2](../public-economics/lessons/06-02-chamley-judd-and-the-exploding-wedge.md)
  and [`economics-of-debt` 8.1](../economics-of-debt/lessons/08-01-forgiveness-commitment-and-the-fresh-start.md)
  the government's preferences never change; capital or care becomes sunk. Present bias is
  inconsistency in the preferences themselves. Both call for commitment, for different reasons.

*Lessons:* [2.2](lessons/02-02-the-behavioural-challenge.md)

### Naive and sophisticated agents

**A naive agent expects his future selves to follow his plan; a sophisticated one foresees their
deviation and may pay to prevent it** (O'Donoghue and Rabin, *AER*, 1999).

- **A rival account of paying for commitment:** Gul and Pesendorfer ("Temptation and
  Self-Control", *Econometrica*, 2001) model preferences over *menus* with a cost of resisting
  temptation, which explains demand for commitment with no inconsistency at all.

*Lessons:* [2.2](lessons/02-02-the-behavioural-challenge.md)

### The irrationality argument

**Some observed choices are mistakes, so choice cannot be read straight off as welfare.** The
behavioural welfare economist's argument, reconstructed in [2.2](lessons/02-02-the-behavioural-challenge.md):

1. Rationality includes invariance (to description, procedure and, tastes and information
   unchanged, date).
2. The findings violate invariance: one person ranks the same options both ways.
3. The options really are the same.
4. A violation among identical options is a mistake.

- **It treats the axioms as norms.** Read as descriptions, the same data show only a false
  hypothesis: the theorist's error, not the chooser's (status of the axioms:
  [`decision-theory`](../decision-theory/syllabus.md) 1.4).
- **Three rivals, three premises:** the options differ (against 3: framing carries information;
  uncertain hazard makes rational discounting look hyperbolic, Sozou 1998); enrich the model
  (against premise 1's status: Gul and Pesendorfer); no single self (against 4: the reversal is a
  conflict, not an error).
- **Where it is weakest, premise 4:** it presupposes a true, frame-free preference underneath.
  Infante, Lecouteux and Sugden (2016) call this the "inner rational agent" and find no evidence
  for it. Reply: people reflecting calmly disown their framed and impulsive choices.

*Lessons:* [2.2](lessons/02-02-the-behavioural-challenge.md)

### Choice architecture

**The arrangement of a choice (order, default, frame, placement), which influences what is chosen
without changing the options.** Thaler and Sunstein's cafeteria (*Nudge*, 2008): someone must
arrange the food somehow, so there is no neutral layout, and whoever designs the menu, form or
default is a choice architect.

*Lessons:* [2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md)

### Libertarian paternalism

**Steer choices toward what choosers would select by their own considered lights, while keeping
every option available at trivial cost:** paternalist in aim, libertarian in means. Thaler and
Sunstein, "Libertarian Paternalism" (*AER* Papers and Proceedings, 2003); Sunstein and Thaler,
"Libertarian Paternalism Is Not an Oxymoron" (*University of Chicago Law Review*, 2003); *Nudge*
(2008).

1. **Inevitability.** Every choice is presented in some architecture. *Conceptual.*
2. **Influence.** Architecture changes what people choose (inertia, salience, framing). *Empirical.*
3. So some influence is unavoidable; the only question is its direction.
4. **The standard.** Push toward choosers' considered judgment ([as judged by themselves](#as-judged-by-themselves)). *Normative.*
5. **Liberty.** If opting out is nearly costless, no one is coerced. *Normative.*

- **The force comes from step 3:** if the neutral option does not exist, the anti-paternalist
  cannot demand it.
- **Critics attack premise 4** (which self's judgment) and the means (the
  [manipulation objection](#manipulation-objection)).
- **Not soft paternalism in Feinberg's sense:** soft paternalism interferes only to check that a
  choice is voluntary and informed; nudges steer choices that are already both
  ([`political-philosophy`](../political-philosophy/syllabus.md) 3.3).
- **The organ-donor default** ([2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md)
  Example 2; Johnson and Goldstein, *Science*, 2003, large opt-in/opt-out gaps, no rates asserted)
  is a nudge for strangers' benefit, not paternalism at all.

*Lessons:* [2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md)

### As judged by themselves

**Thaler and Sunstein's welfare standard for nudges: the chooser's informed, attentive, untempted
judgment.** When a person's own choices conflict, it names the reflective one as hers.

- **The premise critics attack:** naming one self "the person's own judgment" is the planner's
  verdict, so the paternalism has moved from the means into the standard. **Reply:** people
  themselves endorse their reflective judgments when asked, evidence from outside any single
  choice.
- **Sugden's deeper objection** (with Infante and Lecouteux, 2016): it posits an inner rational
  agent with coherent preferences inside a psychological shell, with nothing to show such an agent
  exists. His alternative values people's opportunity to choose (*The Community of Advantage*, 2018).

*Lessons:* [2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md)

### Choice-based welfare

**Rank $x$ above $y$ only if $y$ is never chosen when $x$ is available, in any frame the analyst
counts; where frames disagree, stay silent.** Bernheim and Rangel ("Beyond Revealed Preference",
*QJE*, 2009). A generalized choice situation is $G=(X,d)$: menu $X$ and ancillary condition $d$
(default, shelf height, date of choosing). With $\mathcal{G}$ the welfare-relevant domain,

$$x\,P^*\,y \iff y\notin C(G)\ \text{ for all } G\in\mathcal{G} \text{ with } x,y\in X.$$

- **Welfare optimum:** nothing is $P^*$-better. $P^*$ is incomplete and returns standard revealed
  preference when choices are consistent.
- **Trimming the domain** is allowed only on evidence of error from outside choice (what she
  attended to, believed or knew). The cafeteria ([2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md)
  Example 1): with all three frames $P^*$ is empty; drop the frame where an eye-tracker shows she
  never saw the fruit, and fruit is the unique optimum.
- **The value judgment in it:** every counted frame has equal standing, so conflict yields
  silence. More cautious than Thaler and Sunstein, not more neutral.

*Lessons:* [2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md)

### Manipulation objection

**Nudges that work by exploiting flaws in deliberation, not by giving reasons, bypass rational
agency and threaten autonomy even when opting out is free.** Daniel Hausman and Brynn Welch ("To
Nudge or Not to Nudge", *Journal of Political Philosophy*, 2010). Cheap exit protects liberty of
choice, not control over one's own choosing.

- **Replies:** from inevitability (some architecture must shape choice, and a deliberately good
  shaping is no worse than an accidental bad one); from publicity (a nudge can stay effective when
  disclosed).
- **It grants premise 5** (no option removed) and attacks a different value.

*Lessons:* [2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md)

## Efficiency Pareto and cost-benefit analysis

### Pareto optimality

**A state is Pareto optimal (efficient) when no move from it helps anyone without hurting
someone.** A *Pareto improvement* is a move (someone better off, no one worse off); optimality is a
property of a state. The optima form a set, not a point, and the set is silent on distribution.

- **An optimum need not improve on where we are:** in [3.1](lessons/03-01-the-pareto-principle.md)
  Example 1 (illustrative, $u_i=\sqrt{x_i y_i}$, 10 fish and 10 loaves), $U=(9,1)$ is optimal and
  leaves Ben at a quarter of his status-quo utility 4; only optima with Ann at $(t,t)$,
  $4\le t\le 6$, improve on $S=(4,4)$.
- **Sen** (*Collective Choice and Social Welfare*, 1970): a state is optimal even if some starve
  beside others' luxury, so long as the starving can be helped only by taking from the rich.
- **The welfare theorems** ([`grad-micro` 4.4](../grad-micro/lessons/04-04-two-welfare-theorems.md),
  reloaded, not re-proved): competitive equilibria are optimal (first); any optimum is reachable
  after lump-sum redistribution (second). "Competitive markets are efficient" hides a mathematical
  claim (true, conditional), an empirical one (markets meet the conditions: open) and a normative
  one (so the outcome is good: **not implied**).
- **The leaky bucket** ([3.1](lessons/03-01-the-pareto-principle.md) Example 2; Okun, *Equality
  and Efficiency*, 1975): if each unit taken from Ann delivers 0.8 to Ben, equalizing gives
  utilities $(4.5,4.5)$, inside the frontier, and Pareto-incomparable with the market's
  $(9.5,0.5)$. The choice the efficiency/equity division promised we would never face.
- **Hayek's defence of markets is epistemic, not Paretian** ([5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)):
  the first theorem presumes the information he says no one has.

*Lessons:* [3.1](lessons/03-01-the-pareto-principle.md), [5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)

### Pareto principle

**If a move is a Pareto improvement, society should count the new state as better.** With
$\succ_i$ strict and $\succsim_i$ weak preference:

- **Weak Pareto:** if $x \succ_i y$ for every $i$, then $x$ is socially better. Everyone prefers it.
- **Strong Pareto:** if $x \succsim_i y$ for every $i$ and $x \succ_j y$ for some $j$, then $x$ is
  socially better. No one minds and someone gains.

Uses only orderings: no interpersonal comparison, invariant to rescaling anyone's utility. The
price of being "minimal": the ranking is incomplete, silent on every trade-off.

**The case for it** ([3.1](lessons/03-01-the-pareto-principle.md)):

1. [Welfarism](#welfarism).
2. [Preference satisfaction](#preference-satisfaction-view).
3. Positive responsiveness: a gain that costs nobody anything makes the state better.
4. **C.** Strong Pareto.

- **Premise 3 is the least contested;** the value judgments live in 1 and 2.
- **Against 2:** misinformed, adapted or frame-inconsistent preferences ([2.2](lessons/02-02-the-behavioural-challenge.md)).
- **Against 1:** an egalitarian sees *something* worse in a gain to the rich alone; Parfit's
  levelling-down objection is why most egalitarians still accept Pareto all things considered.
  Rights theorists object more sharply ([liberal paradox](#liberal-paradox)).
- **The critic's charge:** "minimal" means hard to notice, not value-free.
- **Further limits** ([3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md)):
  [spurious unanimity](#spurious-unanimity), [ex ante and ex post Pareto](#ex-ante-and-ex-post-pareto),
  silence.
- **Efficiency says nothing about desert** ([5.4](lessons/05-04-markets-and-desert.md)).

*Lessons:* [3.1](lessons/03-01-the-pareto-principle.md), [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md), [5.4](lessons/05-04-markets-and-desert.md)

### Spurious unanimity

**Unanimous preference that rests on conflicting beliefs or reasons carries no normative force.**
Philippe Mongin ("Spurious Unanimity and the Pareto Principle", *Economics and Philosophy*, 2016),
as when two countries each go to war confident of winning.

- **The farmers' bet** ([3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md),
  illustrative): Ann (70% rain) and Bob (30%) bet 50 dollars and each pays a broker 5; each expects
  $+15$ by her own lights, so ex ante Pareto endorses it. Under any single shared probability $q$
  their expectations ($100q-55$ and $45-100q$) sum to $-10$.
- **It passes ex ante Pareto; that is the objection.** It fails every version that evaluates with
  one shared probability.
- **Restriction:** Gilboa, Samet and Schmeidler (*JPE*, 2004) restrict Pareto to choices on which
  people share beliefs. **Rival:** overriding adults' credences is paternalism about beliefs, the
  [2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md) worry about tastes.
- **Crux:** whether a person's beliefs, like her tastes, are hers to have respected, or are claims
  about the world society may assess.

*Lessons:* [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md)

### Liberal paradox

**Weak Pareto, a minimal liberty (two people each decisive over one private matter) and an
unrestricted domain of preferences cannot all hold.** Sen (1970). The lesson's case: each person
has the final say over the colour of their own front door, and each cares more about the other's
door than their own; rights and a unanimous preference together produce a cycle with no best
choice.

- **The proof and the escapes** are [`social-choice`](../social-choice/syllabus.md) 4.1-4.2's.
- **The point here:** Pareto takes every preference as input, including preferences about other
  people's lives: the [laundering](#laundered-preferences) question again.

*Lessons:* [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md)

### Ex ante and ex post Pareto

**Ex ante Pareto respects what each person prefers among lotteries; ex post Pareto respects how
outcomes turn out.** They diverge two ways:

- **Fairness:** Peter Diamond (1967): a fair coin flip for an indivisible good beats handing it to
  one person outright, though a planner summing expected utilities ranks them equal (debate owned
  by [`decision-theory`](../decision-theory/syllabus.md) 5.2).
- **Differing beliefs:** the [spurious-unanimity](#spurious-unanimity) bet passes ex ante and makes
  one farmer worse off in either state.

*Lessons:* [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md)

### Kaldor-Hicks criterion

**A change is an improvement if the gainers could compensate the losers and still be ahead,**
whether or not they do. What policy "efficiency" usually means; distinct from, and far more
contested than, Pareto efficiency ([3.1](lessons/03-01-the-pareto-principle.md)).

With $\bar S$ the utility-possibility frontier of state $S$ (best utility pairs from redistributing
$S$'s goods) and $s$ the pair $S$ actually delivers:

| Test | $B$ beats $A$ when | In words |
|---|---|---|
| Kaldor (1939) | $a$ lies strictly inside $\bar B$ | the winners could pay off the losers |
| Hicks (1939) | $b$ does not lie strictly inside $\bar A$ | the losers could not bribe the winners to stay put |
| Scitovsky (1941) | both | the double criterion |
| Samuelson (1950) | $\bar B$ lies outside $\bar A$ everywhere | silent on most real policies |

- **Hicks for $B$ over $A$ is the denial of Kaldor for $A$ over $B$,** so if Kaldor passes both ways,
  Hicks fails both ways.
- **The compensation argument** is reconstructed below; its weakest premise is 3, twice
  ([Scitovsky reversal](#scitovsky-reversal); hidden interpersonal comparison).
- **Applied as summed WTP** it weighs everyone's dollars equally: it avoids comparing utilities,
  not making a distributional judgment.

*Lessons:* [3.1](lessons/03-01-the-pareto-principle.md), [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md)

### The compensation argument

**Economics can recommend any change that passes a compensation test without comparing utilities
across persons.** Kaldor and Hicks (both *Economic Journal*, 1939), answering Lionel Robbins (*An
Essay on the Nature and Significance of Economic Science*, 1932), who held interpersonal
comparisons unscientific:

1. Welfare economics must rank policies that have losers.
2. Interpersonal comparisons of utility are value judgments, outside economics as a science.
3. A change can enlarge what is available without such comparison: the pie got bigger, whoever
   eats it.
4. Whether compensation is paid is a separate question about distribution, for politics.

- **Critics attack premise 3:** the size of the pie is not well defined when frontiers cross
  (Scitovsky); and preferring a hypothetical payment to an actual loss is itself a judgment that
  winners' gains outweigh losers' losses, the comparison premise 2 ruled out.
- **Reply** (Kaplow and Shavell, 1994): redistribute through taxes and judge projects on efficiency
  alone. It rests on an institutional premise: that the tax system really does the redistributing.

*Lessons:* [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md)

### Scitovsky reversal

**When utility-possibility frontiers cross, each state can pass Kaldor's test against the other.**
Scitovsky (1941). [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md) Example 1
(illustrative): Ann $u_1=3x_1+y_1$, Bob $u_2=x_2+2y_2$; $A$ yields 3 of $x$, $B$ 3 of $y$.

- **Frontiers:** $\bar A$: $u_1+3u_2=9$; $\bar B$: $2u_1+u_2=6$; they cross at $(1.8,\,2.4)$.
- **Status quo points:** $a=(0.9,\,2.7)$, $b=(2.5,\,1)$.
- **$B$ beats $A$:** $2(0.9)+2.7=4.5<6$; redistribute to $(1,4)$. **$A$ beats $B$:**
  $2.5+3(1)=5.5<9$; redistribute to $(3,2)$. Hicks passes neither way; Scitovsky ranks neither.
- **Why crossing is necessary:** if $\bar B$ lay outside $\bar A$ everywhere, $b$ (on $\bar B$)
  could not be strictly inside $\bar A$.
- **The moral:** the test was meant to measure the pie apart from distribution; here the verdict
  depends on which distribution you start from.

*Lessons:* [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md)

### Potential and actual compensation

**If compensation is paid, the change is a plain Pareto improvement and the test adds nothing; if
it is not paid, someone loses, and the test has not said why that is acceptable.** I. M. D. Little
(*A Critique of Welfare Economics*, 1950): a recommendation must also judge the distribution it
actually produces. Against him, Kaplow and Shavell (1994): redistribute by tax.

- **"Could compensate" is conceptual** (a fact about the frontier); **"will compensate" is
  empirical** (politics); **"need not compensate" is normative.** The argument needs all three.
- **Across time** ([4.1](lessons/04-01-why-discount.md)): the [opportunity-cost argument](#opportunity-cost-argument)
  for discounting is a compensation test between generations.
- **In CBA** ([3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md) Example 2): the
  bypass's district loses 20 million whether or not the test passes.

*Lessons:* [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md), [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md), [4.1](lessons/04-01-why-discount.md)

### Cost-benefit analysis

**Price every effect at what each affected person would pay for it, or need to be paid to accept
it, sum, and adopt the policy if the total is positive:** Kaldor-Hicks as a procedure.
Reconstructed in [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md) from Hausman,
McPherson and Satz's account of textbook practice:

1. **P1.** A person's benefit is her [willingness to pay](#willingness-to-pay) (or the payment she
   would need to accept a loss).
2. **P2.** Social benefit is the unweighted sum.
3. **P3.** A positive sum licenses the policy.

Under all three sits an assumption: every good at stake fits **one money scale**.

| Critic | Denies | Welfarist reply aimed at that premise |
|---|---|---|
| Anderson, [incommensurability](#incommensurability) | the one money scale | trade-offs happen anyway; CBA only makes the price explicit |
| Sagoff, [citizen and consumer](#citizen-and-consumer-preferences) | P1, for judgment-preferences | count only self-interested, idealized preferences; judgments go elsewhere |
| [Kelman](#kelmans-ethical-critique) | P3 (and, via pricing, the one scale) | Adler and Posner: a procedure, not the criterion; may be overridden |
| The distributional critic, [differentiated VSL](#differentiated-vsl) | P2 | [distributional weights](#distributional-weights), or redistribute by tax |

- **Where it is weakest (3.3), P2:** WTP is bounded by wealth, so an unweighted sum counts the rich
  more. The bypass ([3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)
  Example 2): $+10$ million unweighted, $-6.7$ at $\eta=0.5$, $-20$ at $\eta=1$; flips at
  $\eta=\ln 1.5/\ln 4\approx 0.29$.
- **"You can't put a price on it" is at least four objections.** A reply aimed at the wrong premise
  misses ([3.4](lessons/03-04-cbas-critics-and-defenders.md)).
- **A passing CBA is not a Pareto improvement;** the compensation is hypothetical.

*Lessons:* [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md), [3.4](lessons/03-04-cbas-critics-and-defenders.md)

### Value of a statistical life

**The rate at which people trade money for small changes in their own risk of death, scaled up to
one expected death.** Not what anyone would pay to escape certain death, and not the worth of a
person. With $p$ the probability of dying this period, $w$ wealth, $u_a$ utility if alive, $u_d$
utility from wealth if dead (a bequest), and expected utility $V=(1-p)u_a(w)+p\,u_d(w)$:

$$\mathrm{VSL}=\left.\frac{dw}{dp}\right|_{V}=\frac{u_a(w)-u_d(w)}{(1-p)\,u_a'(w)+p\,u_d'(w)}.$$

The utility gap between living and dying over the expected marginal utility of a dollar: a marginal
rate, valid for small changes in $p$. The denominator falls with wealth, so the VSL rises with it.

- **Measured** by hedonic wage studies, $\mathrm{VSL}=\Delta w/\Delta p$ (Thaler and Rosen, 1976;
  survey Viscusi and Aldy, 2003), or by stated-preference surveys. Agencies put it "in the millions
  of dollars" (no agency figure is asserted).
- **The guardrails** ([3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)): 50,000
  residents each pay 120 dollars for a 1-in-50,000 cut, so 6 million per expected death.
- **The mining district** (Example 1, invented): $280/(1/25{,}000)=7$ million; a rule costing 120
  million that prevents 20 deaths costs 6 million per life and nets $+20$ million.
- **"The VSL is 7 million" mixes three claims:** the wage-risk trade is empirical (and identification
  is contested: [`econometrics` 3.1](../econometrics/lessons/03-01-potential-outcomes-identification.md));
  that the ratio *is* their valuation is conceptual; that an agency *should* spend up to it is
  normative.

*Lessons:* [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)

### Contingent valuation

**Stated-preference surveys of willingness to pay for goods that have no market.** After the 1989
Exxon Valdez spill, a study for the State of Alaska led by Richard Carson measured lost
"passive-use" value this way (no dollar figure asserted).

- **Scope insensitivity** (Diamond and Hausman, 1994): in one survey, stated WTP to save 2,000,
  20,000 or 200,000 birds barely differed (Desvousges and coauthors, 1993).
- **The NOAA panel** co-chaired by Arrow and Solow (1993): carefully designed surveys could be a
  starting point for damage assessment.
- **The value judgment underneath:** that the answer to a hypothetical question is a preference, and
  that a preference about a species is a welfare good to price. Sagoff's denial is
  [conceptual, not a survey complaint](#citizen-and-consumer-preferences).

*Lessons:* [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)

### Existence value

**Value placed on a good one will never use, such as a wilderness never visited or a species never
seen** (Krutilla, 1967). Only a survey can measure it ([contingent valuation](#contingent-valuation)).

*Lessons:* [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)

### Incommensurability

**Goods are valued in plural modes, each with its own norms, and a single money scale expresses
only one of them.** Elizabeth Anderson (*Value in Ethics and Economics*, 1993): to value something
rationally is to take the attitude toward it that it merits. People *use* commodities, *respect*
persons, *love* friends, *appreciate* a landscape ([modes of valuation](#modes-of-valuation)).

- **The claim is not that the number is too low:** a money scale misdescribes how the canyon or
  marsh is valued. *Denies* the one-scale assumption under CBA's P1.
- **The marsh op-ed** ([3.4](lessons/03-04-cbas-critics-and-defenders.md) Example 1, invented):
  disputes no figure and no distribution; "a used car" against "stand still and look" is use
  against appreciation. **Reply:** the decision is made either way, so a price is implicit.
  **Rejoinder:** a decision that weighs the marsh need not price it.
- **An older form** of the no-common-measure thesis is in natural law
  ([`ethics` 4.5](../ethics/lessons/04-05-the-new-natural-law-theory.md)).

*Lessons:* [3.4](lessons/03-04-cbas-critics-and-defenders.md), [5.1](lessons/05-01-commodification.md)

### Citizen and consumer preferences

**A want about one's own life differs from a judgment about what the community should do;
judgments are assessed by reasons, so pricing them by willingness to pay is a category mistake.**
Mark Sagoff (*The Economy of the Earth*, 1988): the person who would happily ski at a new resort
may vote against building it, without inconsistency.

- **Denies P1 for judgment-preferences.** The point is conceptual: even a perfectly accurate WTP for
  a citizen judgment would measure the wrong kind of thing. Survey bias is a separate, empirical
  objection.
- **Turning the marsh op-ed into Sagoff:** "a decent state protects such places, whatever any of us
  would pay."

*Lessons:* [3.4](lessons/03-04-cbas-critics-and-defenders.md)

### Kelmans ethical critique

**An act can be right though its benefits do not exceed its costs, and pricing some goods is
itself a wrong.** Steven Kelman ("Cost-Benefit Analysis: An Ethical Critique", *Regulation*, 1981),
three claims: an act can be right despite costs exceeding benefits (as when it secures a right);
putting money values on non-market goods such as health or life can lower the value people place on
them; so heavy spending on cost-benefit studies is unjustified.

- **Denies P3**, and through the pricing point the one-scale assumption. The first claim is
  deontological ([`ethics` 2.4](../ethics/lessons/02-04-constraints-and-options.md)).
- **His heir's dilemma** is the objection to [Adler and Posner](#decision-procedure-and-criterion-of-rightness).

*Lessons:* [3.4](lessons/03-04-cbas-critics-and-defenders.md)

### Decision procedure and criterion of rightness

**What makes an act right differs from the method an agent uses to choose; CBA can be a good
procedure without being the criterion.** The distinction is [`ethics` 1.5](../ethics/lessons/01-05-modern-consequentialism.md)'s.
Matthew Adler and Eric Posner (*New Foundations of Cost-Benefit Analysis*, 2006):

1. **P1′ (weak welfarism).** Overall well-being is morally relevant, though not necessarily
   decisive.
2. **P2′.** Agencies choose among many projects with limited information, under interest-group
   pressure.
3. **P3′.** CBA with corrected inputs (idealized, self-interested preferences; adjustments where
   wealth distorts WTP) tracks overall well-being better than the procedures agencies could use
   instead.
4. **C′.** Use CBA as the standard decision procedure; its verdict is evidence about one moral
   factor, and other factors may override it.

- **The value judgment moves** off the arithmetic onto P1′ (moral) and P3′ (empirical, about
  institutions). A critic can accept every number and reject either.
- **Where it is weakest, "override":** someone must decide when, by exactly the unaided intuition
  Sunstein calls unreliable. The dilemma: seldom overridden, it is the criterion in practice; often
  overridden, it disciplines nothing. **Reply:** a presumption with stated grounds for rebuttal, as
  courts use; partly an empirical question about agencies.

*Lessons:* [3.4](lessons/03-04-cbas-critics-and-defenders.md)

### CBA as a check on intuition

**Writing the numbers down disciplines distorted judgments about risk.** Cass Sunstein (*Risk and
Reason* and *The Cost-Benefit State*, both 2002): unaided risk judgment suffers from availability
(vivid recent harms loom large), probability neglect, and neglect of the risks a regulation itself
creates. On this view CBA need not be the final word.

*Lessons:* [3.4](lessons/03-04-cbas-critics-and-defenders.md)

### Differentiated VSL

**If the VSL is willingness to pay for risk reduction, consistency requires a lower VSL for poorer
people.** $\mathrm{VSL}_i=\mathrm{VSL}_{\text{ref}}\,(y_i/y_{\text{ref}})^{\varepsilon}$, with $y_i$
income per head and $\varepsilon$ the income elasticity of the VSL.

- **A uniform VSL is a distributional weight on mortality only:** it multiplies poorer people's WTP
  for risk reduction by $(y_{\text{ref}}/y_i)^{\varepsilon}$, which is weighting with
  $\eta=\varepsilon$ ([3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)'s
  notation). "Uniform" is not neutral.
- **The aid budget** ([3.4](lessons/03-04-cbas-critics-and-defenders.md) Example 2, illustrative,
  $\varepsilon=1$ labelled illustrative): 30 million for road safety in a 40,000-dollar country
  (5 deaths) or clean water in a 5,000-dollar country (12 deaths), reference VSL 8 million. Uniform:
  water nets $+66$; differentiated: water nets $-18$. Ranking flips at
  $\varepsilon=\ln(12/5)/\ln 8\approx 0.42$; water stops passing at
  $\varepsilon=\ln(96/30)/\ln 8\approx 0.56$.
- **Sunstein** ("Valuing Life: A Plea for Disaggregation", *Duke Law Journal*, 2004): disaggregate,
  including by income, but when beneficiaries pay little or none of the cost, distributional grounds
  may justify a *higher* VSL for the poor. The P1 rationale (no one should be made to buy protection
  they would not buy) has no force when the protection is a gift.

*Lessons:* [3.4](lessons/03-04-cbas-critics-and-defenders.md)

## Discounting the future

### Present value

**What an amount due in the future is worth today.** At rate $r$, an amount $D$ due in $T$ years
is worth

$$PV=\frac{D}{(1+r)^T},$$

and $1/(1+r)^T$ is the discount factor. Reloaded from
[`philosophy-of-debt` 6.2](../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md),
which writes $\rho,\sigma$ where this course writes $\delta,\eta$ ([delta two ways](#delta-two-ways)).

- **At $r=\delta+\eta g$ a unit of $\eta$ moves $r$ by $g$ points**
  ([4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md) Example 1, 1 million
  dollars at 100 years, $g=1.5\%$): $(\delta,\eta)=(0,1.5)$ gives 108,061 dollars; $(1,1.5)$ gives
  40,831; $(0,2.5)$ gives 25,188. One point of $\delta$ divides the value by 2.65, one unit of $\eta$
  by 4.29.
- **On a log scale** the PV falls linearly in $\delta$; with $g=1.5\%$ raising $\eta$ by one shifts
  the line by as much as 1.5 points of $\delta$ ([4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md) figure).

*Lessons:* [4.1](lessons/04-01-why-discount.md), [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md)

### Pure time preference

**Weighting a unit of welfare less merely because it comes later.** In Module 4, $\delta$ is a
*rate*: a unit of welfare in year $T$ counts $(1+\delta)^{-T}$ as much as one now (not 2.2's
per-period factor: see [delta two ways](#delta-two-ways)).

- **Denied** by Sidgwick (the time at which a man exists cannot affect the value of his happiness
  from a universal point of view), by Pigou ([telescopic faculty](#telescopic-faculty)) and by Ramsey
  (1928: discounting later enjoyments "ethically indefensible", a product of weak imagination).
- **Defended or explained** by extinction risk (impartiality applied to expectations), by
  impossibility results over infinite streams, and by [excessive saving](#excessive-saving-argument).
- **The value-judgment input to the [Ramsey equation](#ramsey-equation):** Stern Review 0.1 percent
  (justified as extinction risk, roughly a 10 percent chance humanity does not survive a century);
  Nordhaus's DICE-2007 1.5 percent.
- **Held fixed while the certainty-equivalent rate declines** ([4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md)):
  a declining rate is not growing patience.
- **Not present bias:** Pigou's own example, a constant 5 percent, is time-consistent and still, on
  his view, irrational ([4.1](lessons/04-01-why-discount.md)).
- **Not interest:** whether a lender may charge for waiting is
  [`philosophy-of-debt` 2.3](../philosophy-of-debt/lessons/02-03-justifying-interest.md)'s question.

*Lessons:* [4.1](lessons/04-01-why-discount.md), [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md), [4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md)

### Growth discounting

**A future dollar adds less welfare because its owner will be richer.** With constant-elasticity
utility and consumption growing at $g$, marginal utility falls by the factor $(1+g)^{-\eta T}$. It
survives setting $\delta=0$: the factor is a forecast ($g$) times a judgment about how fast welfare
flattens with wealth ($\eta$).

*Lessons:* [4.1](lessons/04-01-why-discount.md)

### Utility and consumption discounting

**"Should we discount?" is two questions: discount welfare, or discount dollars.** The consumption
discount factor splits as

$$D(T)=(1+\delta)^{-T}\,(1+g)^{-\eta T},$$

a utility factor (a judgment about time itself) times a growth factor (a forecast times a judgment
about $\eta$).

- **"$\delta=0$" is not "no discounting":** it is "don't discount welfare". [4.1](lessons/04-01-why-discount.md)
  Example 1 (2 million dollars at 120 years, $\eta=1$, $g=1.8\%$): $\delta=0$ still marks it down to
  0.11756 (235,124 dollars); $\delta=1\%$ multiplies in 0.30299 (71,241 dollars). The two sides
  disagree about a factor of about 3.3, and only that factor is about time.
- **Treating a conceptual claim (what is discounted) as a quantitative one (how much)** is the
  commonest confusion in the debate.

*Lessons:* [4.1](lessons/04-01-why-discount.md)

### Opportunity-cost argument

**Discount projects at the market return, because investing at market and passing the proceeds on
would leave the future better off.** [4.1](lessons/04-01-why-discount.md) (illustrative): 100,000
dollars now for 500,000 in 50 years; at 4 percent the money would grow to 710,668, so the project
fails; at $\delta=0$, $g=1.8\%$, $\eta=1$ its benefit is worth 204,918 today, double its cost.

- **A [potential-compensation](#potential-and-actual-compensation) test across time:** valid only if
  the alternative investment is actually made and actually handed on. Like Kaldor-Hicks, it licenses
  a loss on the strength of a transfer that may never be made.

*Lessons:* [4.1](lessons/04-01-why-discount.md)

### Telescopic faculty

**Preference for present over future satisfaction shows a defect of perception, not that earlier
satisfaction is worth more.** Pigou, *The Economics of Welfare* (1920), Part I ch. II §3: our
"telescopic faculty is defective" and we see future pleasures "on a diminished scale". He was
explicit that he meant satisfactions, not the objects that yield them, and held that people divide
resources between present and future on an irrational preference, so that distant effort is
starved.

- **Premise 3 of [the impartiality argument](#the-impartiality-argument).** That impatience is a
  perceptual defect is an empirical and conceptual claim about individual desire; what the state owes
  the future is a further normative premise.
- **Boss 4(c) reserves** the close reading of the passage and of Pigou's view of the state's duty.

*Lessons:* [4.1](lessons/04-01-why-discount.md)

### The impartiality argument

**The social $\delta$ should be zero; any positive discount rate must be earned by growth,
uncertainty or opportunity cost.** Reconstructed in [4.1](lessons/04-01-why-discount.md) from
Sidgwick (*The Methods of Ethics*, 7th ed., 1907, Book IV ch. 1), Pigou and Ramsey:

1. Policy should be judged by its effects on welfare. *Normative ([welfarism](#welfarism)).*
2. A unit of welfare is worth the same whenever it occurs. *Normative (Sidgwick).*
3. People's preference for earlier satisfaction is a defect of perception. *Empirical and
   conceptual (Pigou).*
4. A social rate with $\delta>0$ weights welfare less merely for coming later. *Conceptual.*

- **Sidgwick's prudence** (Book III ch. 13) allows two grounds for preferring the present: greater
  certainty, and a future increase in "means or capacities of happiness". Both are reasons a future
  *good* may matter less; neither says future *welfare* does.
- **Critics attack premise 2 in the infinite horizon:** impartiality across endlessly many
  generations makes the present an instrument of the future (demandingness,
  [`ethics` 1.4](../ethics/lessons/01-04-integrity-and-demandingness.md), stretched across time); and
  Koopmans and Diamond show it collides with other axioms. **Replies:** raise $\eta$; or read
  Sidgwick's impartiality as a criterion of value, not a savings rule.

*Lessons:* [4.1](lessons/04-01-why-discount.md)

### Excessive-saving argument

**With $\delta=0$ the optimal policy demands savings no present generation could accept.** Kenneth
Arrow ("Discounting, Morality, and Gaming", in Portney and Weyant, eds., *Discounting and
Intergenerational Equity*, 1999).

- **Exact form** ([4.1](lessons/04-01-why-discount.md) Example 2): a stock $W$ grows by $R$ per
  generation; maximizing $\sum_t\beta^t\ln c_t$ with $\beta=(1+\delta)^{-30}$ gives
  $c_0=W/\sum_{t=0}^{N-1}\beta^t$. $R$ drops out. At $\delta=0$ the first generation eats $W/N$,
  tending to nothing; at 1 percent its share tends to $1-\beta=25.8\%$, at 2 percent to 44.8%.
- **Arrow's remedy:** Scheffler's agent-centred prerogative
  ([`ethics` 1.4](../ethics/lessons/01-04-integrity-and-demandingness.md)): each generation may weight
  its own welfare more, so $\delta>0$ rests on a permission, not a perceptual error. **Rival
  remedy:** raise $\eta$.
- **Impossibility results alongside:** Koopmans ("Stationary Ordinal Utility and Impatience",
  *Econometrica*, 1960): continuity, stationarity and a few other conditions force impatience.
  Diamond (1965): no ordering of infinite streams is complete, continuous, strongly Paretian and
  treats all generations equally.
- **The same strain in 4.2:** Dasgupta's 97.5 percent saving rate ([Ramsey equation](#ramsey-equation)).

*Lessons:* [4.1](lessons/04-01-why-discount.md), [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md)

### Ramsey equation

**The social discount rate for consumption is pure time preference plus "how much richer" times
"how much richness matters":**

$$r=\delta+\eta g,$$

with $r$ the consumption discount rate, $\delta$ the rate of [pure time preference](#pure-time-preference),
$g$ the growth rate of consumption per head, $\eta$ the [elasticity of marginal utility](#elasticity-of-marginal-utility).
$g$ is a forecast; $\delta$ a value judgment; $\eta$ both.

- **Derivation** ([4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md)): with
  $W=\int_0^\infty e^{-\delta t}u(c_t)\,dt$ and $u'(c)=c^{-\eta}$, the social discount factor is
  $e^{-\delta t}(c_t/c_0)^{-\eta}=e^{-(\delta+\eta g)t}$. It is the Keynes-Ramsey rule
  $\dot c/c=(r-\delta)/\eta$ of [`grad-macro` 2.3](../grad-macro/lessons/02-03-ramsey-cass-koopmans.md)
  solved for $r$.
- **Notation:** `grad-macro` 2.3 writes $\rho,\sigma$ and uses $\delta$ for depreciation;
  `philosophy-of-debt` 6.2 writes $r=\rho+\sigma g$ ([delta two ways](#delta-two-ways)).
- **Read backwards it prescribes saving:** with output $rK$ and no technical progress,
  $s=(r-\delta)/(\eta r)$. Dasgupta's numbers ($\delta=0.1$, $r=4$ percent): 97.5 percent at
  $\eta=1$, 48.75 at $\eta=2$, 32.5 at $\eta=3$.
- **Under uncertainty about $g$** ([4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md)),
  the equation feeds the [certainty-equivalent rate](#certainty-equivalent-discount-rate).

*Lessons:* [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md), [4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md)

### Elasticity of marginal utility

**How fast an extra dollar's value falls as people get richer:** $\eta=-c\,u''(c)/u'(c)$, so
doubling consumption divides marginal utility by $2^{\eta}$.

- **Three roles, one parameter:** curvature; inequality aversion (the weight on a dollar to anyone
  with consumption $c$ is $c^{-\eta}$, the [distributional weights](#distributional-weights) of 3.3,
  across persons and generations alike); and, because $u$ also ranks gambles, relative risk aversion
  in CRRA utility.
- **Dasgupta** ("Commentary: The Stern Review's Economics of Climate Change", *National Institute
  Economic Review*, 2007): $\delta$ weighs people by their date, $\eta$ by their consumption whatever
  their date; accepted Stern's $\delta$, rejected $\eta=1$, judged 2 to 4 more acceptable.
- **Nordhaus** (*Journal of Economic Literature*, 2007): $\eta$ reflects social choices about
  inequality across generations and cannot simply be read off individual risk preferences.
- **Not settled by estimation:** a household's attitude to its own gambles and a society's weighting
  of richer and poorer generations are different questions sharing a parameter.

*Lessons:* [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md), [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md)

### Prescriptive and descriptive discounting

**Choose $\delta$ and $\eta$ by ethical argument, or calibrate them to observed returns and
saving.** (The labels are used without attribution.)

| | Prescriptive (Stern Review, 2006) | Descriptive (Nordhaus, DICE-2007) |
|---|---|---|
| $\delta$ | 0.1% (extinction risk) | 1.5% |
| $\eta$ | 1 (log utility) | 2 |
| $g$ | 1.3% | the model's projected growth |
| $r$ | 1.4% | about 5.5% |

- **Markets pin down $r$, never its split:** one equation, two unknowns. For a 4 percent return at
  $g=1.3\%$, $\eta=1$ needs $\delta=2.7\%$, and $\delta=0$ needs $\eta\approx3$. Nordhaus ran Stern's
  $\delta=0.1$ with $\eta=3$: about 5.6 percent return and a near-term carbon price close to his
  standard run. So $\eta$ can do $\delta$'s work.
- **Calibrating to markets is itself a normative choice.** It needs (i) observed returns on an
  optimal path, (ii) that market rates, set by today's savers about their own lives, carry authority
  over trade-offs between generations, (iii) that the existing distribution is the baseline. The
  critic attacks (ii): a market rate aggregates present people's impatience.
- **Nordhaus against the alternative:** a world planner imposing the Review's parameters is
  "Government House" utilitarianism (Sen and Williams's phrase, 1982).
- **Against the prescriptive side:** an ethically chosen $\eta$ must be acceptable in all its
  implications (Dasgupta's 97.5 percent). **Reply:** "absurd" is the present generation's verdict on
  its own sacrifice, the partiality the low $\delta$ was meant to correct.
- **"The market rate is 5 percent" mixes three claims:** capital earns 5 percent (empirical); that is
  the opportunity cost of climate spending (conceptual, contestable); society should discount at it
  (normative).

*Lessons:* [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md)

### Certainty-equivalent discount rate

**Average discount factors, not rates: with a persistent uncertain rate, the single rate that
reproduces the average falls with the horizon toward the lowest rate with positive probability.**
Weitzman, "Why the Far-Distant Future Should Be Discounted at Its Lowest Possible Rate" (*Journal of
Environmental Economics and Management*, 1998). With scenario $i$ at rate $r_i$ with probability
$p_i$,

$$A(t)=\sum_i p_i\,(1+r_i)^{-t}$$

$$R(t)=A(t)^{-1/t}-1$$

1. The rate is uncertain, and whichever holds persists over the whole horizon.
2. A future amount should be valued at its expected *present* value.
3. Discount factors are convex in the rate (Jensen), and the gap widens with the horizon.

- **Two growth worlds** ([4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md)
  Example 1, $\delta=0$, $\eta=2$): $r=2\%$ (probability 0.3) or $6\%$ (0.7), mean 4.8 percent;
  $R=4.77\%$ at 1 year, $3.19\%$ at 100, $2.31\%$ at 400. 1 million dollars a century away is worth
  43,473 dollars, against 9,202 at the mean rate.
- **"Lowest possible" means lowest with *any* positive probability,** not a likely low rate.
- **Where it is weakest, premise 2:** average future values instead and the rate rises
  ([Weitzman-Gollier puzzle](#weitzman-gollier-puzzle)).
- **Not Weitzman 1974** ([two Weitzman results](#two-weitzman-results)).

*Lessons:* [4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md)

### Gamma discounting

**Treat expert disagreement about the discount rate as a probability distribution and discount at
the resulting declining certainty-equivalent rate.** Weitzman, "Gamma Discounting" (*American
Economic Review*, 2001): 2,160 economists answered one question (what real rate for climate
mitigation?); answers ran from minus 3 to plus 27 percent, mean about 4, standard deviation about 3.
A fitted gamma distribution gives a sliding scale from about 4 percent near term through 3, 2 and 1
percent to about zero beyond a few centuries (year bands not given).

- **Its input mixes kinds of claim:** growth forecasts are empirical; disagreement about $\delta$ is
  normative. A critic: moral disagreement is not a lottery over states of the world, and averaging
  factors hands the long run to the most patient respondent.
- **Figure note** ([4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md)): the lesson
  plots the *average* certainty-equivalent rate; Weitzman reports a *marginal* (forward) rate. Do not
  conflate them.
- **Catastrophe:** Weitzman's later "dismal theorem" (*Review of Economics and Statistics*, 2009),
  fat tails breaking expected-utility CBA, is named, not taught.

*Lessons:* [4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md)

### Weitzman-Gollier puzzle

**Averaging present values gives a declining rate; averaging future values, from the same
scenarios, gives a rising one.** [4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md)
Example 2: a project costs 1 dollar now and pays $X$ in 100 years.

- **Weitzman** (average PVs): do it if $X\ge 1/A(100)=23.0$.
- **Gollier** (average FVs): expected compound factor $0.3(1.02^{100})+0.7(1.06^{100})=239.7$; do it
  if $X\ge 239.7$, an implied rate of 5.63 percent rising toward 6.
- **Resolution** (Gollier and Weitzman, *Economics Letters*, 2010): weight each scenario by the
  marginal utility of consumption in it, which restores a declining rate under standard assumptions.
  That needs $\eta$, a value judgment twice over: the conclusion rests on a welfare model, not on
  arithmetic alone.
- **"Average over the uncertainty" is not one instruction:** which date's dollar counts as certain is
  a choice about whose consumption bears the risk.

*Lessons:* [4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md)

### Non-identity problem

**Large policies change who is born, and a person who would not otherwise exist is not worse off
for the policy chosen, so a person-affecting complaint finds no victim.** Owned by
[`philosophy-of-debt` 6.2](../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md)
([its card](../philosophy-of-debt/reference.md#non-identity-problem)) and
[`decision-theory`](../decision-theory/syllabus.md) 5.3-5.4.

- **Bites person-affecting justice views, not an impersonal discounted welfare sum,** which counts
  whoever exists, at the price of needing population ethics to compare populations of different
  sizes.
- **Is a sum the right form at all?** Rawls's just savings principle (*A Theory of Justice*, 1971,
  §44) is a constraint chosen without knowing one's generation; rights and threshold views forbid
  leaving future people below a minimum whatever the present value. **The discounter's reply:** any
  choice among policies implies weights; a rate only makes them explicit.

*Lessons:* [4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md)

## Markets their moral limits and their justice

### Commodification

**Treating a good as something to be bought and sold, valued as a commodity is valued.** The day-care
fine (Gneezy and Rustichini, "A Fine Is a Price", *Journal of Legal Studies*, 2000): late pickups
went *up* when a fine was introduced and stayed up after it was withdrawn; a small wrong to a
teacher had become a service with a price.

**Four objections to a market in good X, and where each rests** ([5.1](lessons/05-01-commodification.md)):

| Argument | Rests on | Cure short of a ban |
|---|---|---|
| [Corruption](#corruption-argument) | X has a proper non-market mode, and a price changes it | none: an objection to the market as such |
| [Fairness](#fairness-argument) | background inequality | redistribute |
| Coercion | poor outside options (need drives the seller) | raise outside options |
| Harm | the market's effects on a party or third parties | regulate |

- **Only corruption objects to the market itself;** the others object to conditions that could
  change. That is why Brennan and Jaworski can grant three and keep their thesis
  ([markets without limits](#markets-without-limits)), and why Satz's
  [noxious markets](#noxious-markets) is a different project from Sandel's.
- **Sandel himself files coercion under fairness;** the lesson splits his fairness argument into
  unequal access (fairness) and unfree consent (coercion) for the map.
- **Polanyi** (*The Great Transformation*, 1944): labour, land and money as *fictitious
  commodities*, the sociological version ([`social-theory`](../social-theory/syllabus.md) 5.3).
- **Not inalienability:** see [contested commodities](#contested-commodities).

*Lessons:* [5.1](lessons/05-01-commodification.md)

### Corruption argument

**Pricing some goods values them in a lower mode than they deserve and so degrades them, however
equal the incomes and however free the trades.** Michael Sandel (*What Money Can't Buy*, 2012) and
Elizabeth Anderson; the assembly is [5.1](lessons/05-01-commodification.md)'s:

1. Some goods are properly valued in a non-market mode (love, respect, civic duty, the gift).
   *Normative.*
2. Buying and selling a good expresses the market mode toward it, and tends to induce that mode in
   those who take part. *Two claims: conceptual (expressive meaning) and empirical
   ([crowding out](#crowding-out)).*
3. Valuing a good in a lower mode than it calls for degrades it, whether or not anyone's
   preferences are worse satisfied. *Normative.*
4. **C.** A market in such a good degrades it.

- **It denies invariance** in the [option-adding inference](#option-adding-inference); the inference
  is valid, so the dispute is entirely about premise 2.
- **Critics attack premise 2** (Brennan and Jaworski): expressive meaning is contingent convention
  (a cash wedding gift is an insult in one culture, the norm in another), and where convention makes
  a beneficial trade look degrading, the convention should yield; crowding out is an incidental,
  case-by-case cost of a market design.
- **The defender's best reply:** some meanings are *constitutive*, not conventional (a bought
  friendship is not a friendship). **Rejoinder:** that shows only that some goods cannot be bought;
  payment fails to obtain them rather than degrading them.
- **Evidence of crowding out supports only premise 2's empirical half.** "Something of value was
  lost" needs premise 3; on a preference-satisfaction view the parents who now pay are doing what
  they prefer.

*Lessons:* [5.1](lessons/05-01-commodification.md)

### Fairness argument

**Under unequal incomes a market gives the rich first claim on what others need, and a poor
seller's "choice" may be made under the pressure of need.** Sandel (*What Money Can't Buy*, 2012).

- **An argument against inequality, not against markets:** equalize incomes and outside options and
  it falls away. Sandel separated it from corruption for exactly this reason; refuting fairness has
  not touched corruption.
- **Its two strands** are split in the lesson: fairness (unequal access) and coercion (unfree
  consent).

*Lessons:* [5.1](lessons/05-01-commodification.md)

### Modes of valuation

**Goods are properly valued in different ways, each with its own norms:** use, respect, love,
appreciation (Elizabeth Anderson, *Value in Ethics and Economics*, 1993). Market norms are, roughly,
impersonal, self-interested, responsive to wants rather than needs, and settled by exit rather than
voice.

- **Against CBA** ([3.4](lessons/03-04-cbas-critics-and-defenders.md)): one money scale expresses only
  use ([incommensurability](#incommensurability)).
- **Against markets** ([5.1](lessons/05-01-commodification.md)): applied to a good whose value lies in a
  personal or civic relation, market norms change what the good *is*.

*Lessons:* [3.4](lessons/03-04-cbas-critics-and-defenders.md), [5.1](lessons/05-01-commodification.md)

### Option-adding inference

**A new option can only be turned down, so opening a market cannot make anyone worse off by her
own lights.** With $S$ the feasible set before the market and $S'=S\cup\{\text{sell }x\text{ at }p\}$
after: if she chooses by her preferences *and the value of each option in $S$ is unchanged*, her
best in $S'$ is at least as good as her best in $S$. Kenneth Arrow put this presumption against
Titmuss ("Gifts and Exchanges", *Philosophy and Public Affairs*, 1972).

- **The value judgment inside it is the invariance clause:** giving blood freely, or collecting your
  child on time, means the same once a price exists. The corruption argument denies it.
- **The fine as a price** ([5.1](lessons/05-01-commodification.md) Example 1, illustrative): 100
  parents, benefit of lateness uniform on 0 to 50 dollars, guilt cost 30, fine 10. Before: 40 late.
  Invariance holds (fine adds to guilt): 20 late. Invariance fails (fine replaces guilt): 80 late.
- **Paid blood** (Example 2): Titmuss's claim is that the *option* of a certain kind of gift (blood
  that cannot be bought anywhere) disappears once a market exists, so the market removes an option
  while adding one. Brennan and Jaworski: meaning is what donors make of it.

*Lessons:* [5.1](lessons/05-01-commodification.md)

### Crowding out

**Payment can reduce the motivation it was meant to supplement:** the empirical half of the
corruption argument's premise 2, a question for data market by market. Evidence: the day-care fine
(Gneezy and Rustichini, 2000); Titmuss on blood (*The Gift Relationship*, 1970). Not the
`public-economics` sense ([public provision crowding out private giving](../public-economics/reference.md#crowding-out)).

*Lessons:* [5.1](lessons/05-01-commodification.md)

### Contested commodities

**Allow sale under rules that keep a good's non-market meaning alive.** Margaret Jane Radin
(*Contested Commodities*, 1996):

- **Domino effect:** once some instances of a good are sold, everyone's instance may come to be seen
  as having a price.
- **Double bind:** banning a sale to protect the good can deny the desperately poor their best
  option.
- **Incomplete commodification** is her frequent answer.
- **Market-inalienability vs inalienability:** Radin's market-inalienability bars only sale (you may
  give a kidney, not sell one); inalienability bars any transfer, even a gift
  ([`philosophy-of-debt` 3.3](../philosophy-of-debt/lessons/03-03-what-may-be-pledged.md)). The
  commodification debate is about the narrower line, where "free, so for money" cuts.

*Lessons:* [5.1](lessons/05-01-commodification.md)

### Markets without limits

**Whatever you may do for free, you may do for money** (paraphrased). Jason Brennan and Peter
Jaworski, *Markets Without Limits* (2016).

- **Not "everything may be sold":** some things may not be possessed or done at all (a hostage), and a
  market may be wrong *incidentally*, because of how it runs (fraud, harm, exploitation). The denial
  is narrower: nothing is wrong *just because* money changed hands.
- **Against expressive meaning:** money's meanings are contingent conventions that should yield to
  beneficial trades. **Against crowding out:** an incidental wrong of exactly the kind the thesis
  allows.

*Lessons:* [5.1](lessons/05-01-commodification.md)

### Blocked exchanges

**Each social good has its own distributive criterion, fixed by what it means to the community, and
money may not buy goods of other spheres.** Michael Walzer, *Spheres of Justice* (1983): offices go
by qualification, punishment by guilt, votes by citizenship; money is legitimate in the market sphere
and tyrannical when it converts into others.

- **Blocked, among others:** human beings, political power, criminal justice, exemption from
  military service, and *desperate exchanges* (deals so driven by need that the community sets a
  floor: limits on hours, safety rules). The lessons give no count of the list.
- **A conceptual and normative claim:** the good's social meaning settles who should get it.
- **Blocking comes in degrees:** a kidney may be given, and swapped in kind through exchange; only
  payment is blocked.

*Lessons:* [5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md)

### Repugnance

**Objection to a transaction even when its parties are willing, treated as a constraint on market
design as real as technology or incentives.** Alvin Roth, "Repugnance as a Constraint on Markets"
(*Journal of Economic Perspectives*, 2007). Examples run from organ sales to lending at interest,
repugnant for centuries and then not.

- **An empirical claim:** a designer who ignores repugnance builds a market no one adopts. Roth does
  not say repugnance is right or wrong; reading him as a verdict on kidney sales mixes kinds of claim.
- **Whether repugnance is evidence of wrongness** is a separate, epistemic question. That a ban is
  popular explains its stability; it does not justify it.

*Lessons:* [5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md)

### Noxious markets

**A market is noxious when it scores high on one or more of four parameters; the remedy should fit
the parameter.** Debra Satz, *Why Some Things Should Not Be for Sale* (2010).

| Parameter | Kind | Means |
|---|---|---|
| Vulnerability | source | one side trades from desperate need or faces a monopolist |
| Weak agency | source | a party lacks information, or someone else decides for them |
| Extreme harm to individuals | outcome | death, destitution, servitude |
| Extreme harm to society | outcome | the market undermines people's standing to relate as equals |

**The argument** ([5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md)):

1. The standard case for markets presupposes parties who understand what they trade, have tolerable
   alternatives, and come out as equals. *Conceptual.*
2. Where a market's sources or outcomes depart sharply from these, the standard case does not
   cover it.
3. Departures are measured on the four parameters. *Conceptual.*
4. A market high on one or more is noxious and warrants intervention. *Normative.*
5. The intervention should fit the parameter: fix the background or regulate; ban only where the
   harm is in the exchange itself. *Normative.*

- **"Noxious" does not mean "ban it":** it is a diagnosis that locates the problem.
- **Critics attack 4 and 5:** "high" has no threshold and the parameters no weights; and the
  [non-worseness claim](#non-worseness-claim) presses vulnerability: a ban leaves the desperate
  person with the need and one option fewer. Satz's reply is premise 5 itself; where the need will
  not be fixed, the critic asks what the ban buys.
- **Vote sales** (Example 1, invented, 150 dollars a vote): noxious on harm to society alone, and the
  harm is in the exchange, so the framework points to prohibition (Walzer agrees, for his own reason).
- **Kidney sales** (Example 2): regulation (Iran's government-regulated payment to unrelated living
  donors since 1988) can lower weak agency and individual harm, not vulnerability. Both sides accept
  the parameters and disagree on an empirical question and a normative one. The figure's scores are
  the lesson's illustrative readings, not Satz's.
- **The value judgment in the economist's count:** treating each blocked trade as lost surplus is
  [welfarism](#welfarism); the fourth parameter names a cost no party's WTP records.

*Lessons:* [5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md)

### Kidney exchange

**Incompatible patient-donor pairs swap donors in two-way or longer cycles, within the ban on paying
for organs.** Roth, Sönmez and Ünver ("Kidney Exchange", *QJE*, 2004); the US ban is the National
Organ Transplant Act (1984).

- **Five invented pairs** ([5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md)): arcs
  1→2, 2→1, 2→3, 3→2, 3→4, 4→5, 5→3. Two-way swaps only: at most 2 transplants. With 3-cycles,
  {1,2} plus 3→4→5→3 gives 5. Choosing {2,3} first blocks the 3-cycle, so search order matters.
- **All surgeries in a cycle run at once,** because a promise to donate cannot be enforced: a
  3-cycle needs six simultaneous operations. Inalienability as an engineering constraint.
- **Matching theory** is [`grad-game-theory` 6.3](../grad-game-theory/lessons/06-03-stable-matching-market-design.md)'s,
  which names kidney exchange only as an application.

*Lessons:* [5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md)

### Exploitation

**Taking unfair advantage: a gain on terms that give the exploiter more than a fair share of the
gains, judged against fair market value.** Alan Wertheimer (*Exploitation*, 1996), taught in full in
[`philosophy-of-debt` 3.1](../philosophy-of-debt/lessons/03-01-what-exploitation-is.md)
([its card](../philosophy-of-debt/reference.md#exploitation)). A deal can benefit B, have her free
consent, and still exploit her: *mutually advantageous exploitation*.

**Where the wrong lies, three answers** ([5.3](lessons/05-03-exploitation-in-labour-markets.md)):

| Account | The wrong is in | A competitive wage |
|---|---|---|
| Wertheimer | the split of one transaction | passes (it *is* fair market value) |
| Marx ([surplus value](#surplus-value)) | production, after a fair exchange | still exploits |
| Roemer ([property relations](#property-relations-account)) | unequal ownership of productive assets | still exploits, and so does a credit market |

- **A Wertheimerian finds wrong** more easily where an employer has monopsony power or uses a special
  vulnerability.
- **Boss 5 reserves** the close reading of *Capital* ch. 6 and the generator case.

*Lessons:* [5.3](lessons/05-03-exploitation-in-labour-markets.md)

### Non-worseness claim

**A consensual, mutually advantageous interaction with no externalities, which A had a right to
refuse, cannot be worse than no interaction.** Owned by
[`philosophy-of-debt` 3.2](../philosophy-of-debt/lessons/03-02-predatory-lending-and-usury-caps.md)
([its card](../philosophy-of-debt/reference.md#non-worseness-claim)); Wertheimer, Zwolinski.

- **Against bans on noxious markets** ([5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md)):
  a ban leaves the vulnerable seller with the need and one option fewer.
- **The backbone of choice-based sweatshop defences** ([5.3](lessons/05-03-exploitation-in-labour-markets.md)).
  It turns the empirical "these jobs beat the alternatives" into the normative "no worse than no
  job"; Arnold and Bowie deny that this fixes what the firm owes.

*Lessons:* [5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md), [5.3](lessons/05-03-exploitation-in-labour-markets.md)

### Surplus value

**Labour-power is bought at its full value but produces more value than it costs; the difference is
surplus value.** Marx, *Capital* vol. 1 (Moore and Aveling): in ch. 6 the worker sells her capacity
to work for a day and gets its full value, the labour-time needed to produce her subsistence; in
production, a day's labour yields more than a day's labour-power costs. The rate of surplus value
$s/v$ (surplus value over wages, ch. IX) measures exploitation.

- **Not underpayment:** exploitation is unpaid labour at a fair price, so a "fair wage" campaign does
  not answer Marx.
- **Interest as a slice of surplus value** is [`philosophy-of-debt` 2.4](../philosophy-of-debt/lessons/02-04-marx-interest-bearing-capital.md)'s;
  Roemer's isomorphism makes it the same exploitation in another market.
- **The frugal-elite fable** (ch. XXVI): Marx mocks the explanation of property by a past of the
  diligent and the lazy; real holdings, he says, came from enclosure and conquest, an empirical reply
  ([5.3](lessons/05-03-exploitation-in-labour-markets.md) Example 2).

*Lessons:* [5.3](lessons/05-03-exploitation-in-labour-markets.md)

### Property-relations account

**You are exploited if you would gain from withdrawing with an equal share of the means of
production and the others would lose.** John Roemer, *A General Theory of Exploitation and Class*
(1982), paraphrased: coalition $S$ is *capitalistically exploited* if (i) it would be better off
withdrawing with its per-capita share of society's alienable productive assets, keeping its own
labour and skills, and (ii) the complement would be worse off; plus a dominance condition.

- **Variants:** withdraw with $S$'s own assets, *feudal* exploitation; include inalienable assets
  such as skill, *socialist* exploitation.
- **Isomorphism:** owners hiring workers and workers borrowing capital from owners give the same
  classes, hours and exploitation. The wage relation is not the culprit; differential ownership under
  competitive markets is.
- **Roemer's turn** ("Should Marxists Be Interested in Exploitation?", *Philosophy and Public
  Affairs*, 1985): labour-exploitation is a poor proxy (his 1982 models already let a rich person
  come out exploited, with different skills or leisure preferences); what matters is the injustice,
  if any, of unequal asset holdings, of which exploitation is a symptom.
- **The corn island** ([5.3](lessons/05-03-exploitation-in-labour-markets.md) Example 1, in the spirit
  of Roemer's models): seed 2 bushels owned by one of four; wage $\tfrac12$ bushel a day; $s/v=\tfrac13$;
  on withdrawal workers work 1.5 days instead of 2; lending at $r=\tfrac12$ reproduces everything.
  Arithmetic under [exploitation arithmetic](#exploitation-arithmetic).
- **Where it is weakest:** the per-capita benchmark. If holdings arose justly, the exploitation is not
  unjust (Roemer concedes this), and everything turns on just acquisition, Nozick's ground. And
  profits in Roemer's models are a scarcity rent (Anderson and Thompson, 1988): make seed plentiful and
  the exploitation vanishes.
- **The withdrawal test is a counterfactual definition,** not a policy proposal.

*Lessons:* [5.3](lessons/05-03-exploitation-in-labour-markets.md)

### Sweatshop debate

**Does a firm owe anything to workers who chose sweatshop jobs?** Three positions
([5.3](lessons/05-03-exploitation-in-labour-markets.md)):

- **Choice-based defence:** Matt Zwolinski ("Sweatshops, Choice, and Exploitation", *Business Ethics
  Quarterly*, 2007): the choice is morally significant as autonomy and as preference; boycotts or
  mandated standards that cost jobs override workers' judgment. Benjamin Powell and Zwolinski (2012):
  these jobs often pay more than workers' alternatives (no figure asserted).
- **Kantian respect:** Denis Arnold and Norman Bowie ("Sweatshops and Respect for Persons", *Business
  Ethics Quarterly*, 2003): multinationals answer for suppliers, with duties to see local labour law
  obeyed, to refrain from coercion, to meet minimum safety standards and to pay a living wage
  ([`ethics` 2.3](../ethics/lessons/02-03-humanity-autonomy-and-the-lie.md)); they reply to the
  job-loss objection.
- **Unfair split:** is the wage below fair market value?

- **Not autonomy against welfare:** both sides claim autonomy, one as honouring the choices people
  make from the options they have, the other as securing the conditions under which choosing means
  something. The employment effect is a separate empirical dispute.

*Lessons:* [5.3](lessons/05-03-exploitation-in-labour-markets.md)

### Desert bases

**Desert is three-place: S deserves X in virtue of F, a fact about S.** Feinberg ("Justice and
Personal Desert", in *Doing and Deserving*, 1970): a desert claim is incomplete until it names its
basis.

- **The literature's standard menu for income** (not attributed to Feinberg): contribution (what you
  add), effort (what you put in), compensation (costs you bear: danger, drudgery, training forgone).
  They come apart constantly.
- **Miller** (*Principles of Social Justice*, 1999): contribution is the main basis of economic desert,
  and a suitably competitive market rewards it roughly.
- **A basis need not itself be deserved** (the contribution theorist's reply to luck egalitarians): the
  sprinter deserves the medal though not her fast-twitch fibres; else almost no one deserves anything,
  effort included.
- **Hayek denies that market pay tracks desert** ([5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)):
  "the market gives people what they deserve" is a claim he rejects.

*Lessons:* [5.4](lessons/05-04-markets-and-desert.md), [5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)

### Marginal productivity theory

**Competitive markets pay each factor the value of its marginal product:** $w=p\,MP_L$, $r=p\,MP_K$.
J. B. Clark (*The Distribution of Wealth*, 1899) read this as giving every agent of production "the
amount of wealth which that agent creates", presented the question as one of "pure fact", and set the
justice of it aside for ethics, while framing the inquiry as a test of whether the worker is left
anything "by right of creation".

**Clark's argument** ([5.4](lessons/05-04-markets-and-desert.md)):

1. A person has a just claim to what she creates. *Normative.*
2. What a unit of a factor creates is its marginal product. *Conceptual.*
3. Under frictionless competition each unit is paid the value of its marginal product. *Empirical.*
4. Under constant returns these payments exhaust the product ([Euler's theorem](#eulers-theorem)).
   *Formal.*
5. **C.** Competitive factor incomes give each what she creates, so they are just.

- **Premise 2 chooses one counterfactual among many:** with complementary factors, removing all labour
  or all capital each zeroes output, so on an all-or-nothing test the shares sum to twice the product.
  The marginal convention is one that adds up under constant returns: an accounting rule, not a
  discovery.
- **Where it is weakest, premise 2 joined to price:** $p$ is set by others' demand, so "contribution"
  moves with tastes and rival supply. **Reply:** value to others is exactly what an economic
  contribution is.
- **The demand shock** (Example 1): the glassblower's pay falls from 120 to 80 dollars a day when the
  price falls from 30 to 20; her physical marginal product (4) did not change.
- **A positive theory, not a desert claim:** monopsony or bargaining power breaks premise 3 and
  leaves 1 and 2 intact.
- **Rivals:** luck egalitarianism ([brute and option luck](#brute-and-option-luck)), entitlement
  ([entitlement theory](#entitlement-theory)), the [just wage](#just-wage).

*Lessons:* [5.4](lessons/05-04-markets-and-desert.md)

### Eulers theorem

**For output homogeneous of degree 1, paying each factor its marginal product exactly uses up the
product:**

$$MP_L\cdot L+MP_K\cdot K=Q.$$

With Cobb-Douglas $Q=AK^{\alpha}L^{1-\alpha}$, $MP_L=(1-\alpha)Q/L$ and $MP_K=\alpha Q/K$, so labour
takes the share $1-\alpha$.

- **Increasing returns over-exhaust** ([5.4](lessons/05-04-markets-and-desert.md) Example 2:
  $Q=2K^{0.6}L^{0.6}$ at $K=L=32$ gives $Q=128$ but marginal payments of 153.6, 20 percent too many);
  **decreasing returns leave a residual** no factor "created". Desert cannot hang on the exponents.

*Lessons:* [5.4](lessons/05-04-markets-and-desert.md)

### Brute and option luck

**Luck no one chose or could have insured against, against the outcome of a gamble deliberately
taken.** The luck-egalitarian distinction, cited to [`political-philosophy`](../political-philosophy/syllabus.md)
2.6 (and on the sibling card, [`philosophy-of-debt`](../philosophy-of-debt/reference.md#brute-and-option-luck)).

- **Against marginal-product desert** ([5.4](lessons/05-04-markets-and-desert.md)): talent and demand
  for one's skill are brute luck, so a marginal product is a poor desert basis; effort is better. Root:
  Rawls's claim that no one deserves his natural endowments
  ([`political-philosophy`](../political-philosophy/syllabus.md) 2.2-2.3).
- **On Hayek** ([5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)): luck
  egalitarians accept that markets reward value, not merit, and treat that as precisely the problem,
  since much value reflects brute luck.

*Lessons:* [5.4](lessons/05-04-markets-and-desert.md), [5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)

### Entitlement theory

**Holdings are just if they arose by just acquisition and just transfer, whatever anyone deserves.**
Nozick, cited to [`political-philosophy`](../political-philosophy/syllabus.md) 2.4. Wilt Chamberlain:
fans freely pay to watch a star; his large income is just because the transfers were free.

- **Drops Clark's premise 1, not premise 2,** and defends market incomes anyway: as entitlements, not
  as deserved. Desert does no work in the theory.
- **The frugal start** ([5.3](lessons/05-03-exploitation-in-labour-markets.md) Example 2): if holdings
  arose justly, a Nozickian finds nothing wrong in the exploitation they produce.

*Lessons:* [5.3](lessons/05-03-exploitation-in-labour-markets.md), [5.4](lessons/05-04-markets-and-desert.md)

### Just wage

**Free wage agreement is bounded by natural justice: a floor set by need, independent of
contribution and of agreement.** *Rerum Novarum* (Leo XIII, 1891, §45, Vatican translation): wages
"ought not to be insufficient to support a frugal and well-behaved wage-earner". One position among
several here; the teaching is `catholic-social-teaching`'s.

*Lessons:* [5.4](lessons/05-04-markets-and-desert.md)

### Knowledge problem

**The data for allocating resources never exist in one place; they are dispersed as local, often
tacit knowledge of particular circumstances, and prices compress them into one number per good.**
Hayek, "The Use of Knowledge in Society" (*American Economic Review*, 1945). The tin example: users
of tin need not know whether a new use appeared or a source dried up; they respond to the price, and
the news passes on.

- **The tin shock** ([5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)
  Example 1, illustrative): canners $q_C=70-2p$, solder makers $q_S=50-p$; supply 90 clears at $p=10$;
  a flood cuts supply to 75 and $p=15$, cuts of 10 and 5; each last tonne is worth 15. A planner
  cutting both by one sixth leaves last tonnes worth $14\tfrac16$ and $16\tfrac23$, so value is lost.
- **The value judgment:** the price rations by WTP, which tracks wealth. The epistemic claim (prices
  transmit information) is separate from the normative claim (the allocation should stand).
- **It does not settle the justice question:** most of Hayek's critics accept the knowledge problem.
- **Not Paretian:** the first welfare theorem presumes the information Hayek says no one has
  ([Pareto optimality](#pareto-optimality)).

*Lessons:* [5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)

### Spontaneous order

**An order that emerges from individuals following general rules and serves no single end, against
a made order serving its designer's ends.** Hayek, *Law, Legislation and Liberty* vol. 1, *Rules and
Order* (1973): *kosmos* (grown, like a language) against *taxis* (made, like an army). The market
order, a *catallaxy*, is the first kind.

*Lessons:* [5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)

### Value and merit

**Markets reward what a person's services are worth to others, not how praiseworthy her conduct
is, and must not try to do otherwise.** Hayek, *The Constitution of Liberty* (1960), ch. 6 (the
distinction recurs in *The Mirage of Social Justice*): prices work as signals only if they tell
people where their efforts are most valued now. The rare-talent surgeon and the lucky prospector earn
much; the diligent worker in a dying trade earns little.

- **The demand shock of 5.4** is, for Hayek, the system working.

*Lessons:* [5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)

### Social justice as category mistake

**A market distribution reached by just conduct is neither just nor unjust, like calling a stone
dishonest.** Hayek, *The Mirage of Social Justice* (*Law, Legislation and Liberty* vol. 2, 1976),
reconstructed and paraphrased:

1. Justice is a property of conduct (or of rules governing it).
2. Rules of just conduct are end-independent: they say nothing about who ends up with what.
3. Market distributions are unintended and unforeseeable.
4. So no one is responsible for the pattern.
5. **C1.** The distribution is neither just nor unjust.
6. Making the pattern just would require a distributor directing rewards.
7. That destroys the price signal, and the distributor lacks the dispersed knowledge.
8. **C2.** Pursuing social justice in the market rests on a mistake and undermines the order.

- **Not against all aid:** he endorsed a guaranteed minimum income outside the market, as insurance,
  so long as it does not tie rewards to desert. **Not a claim that outcomes are just.**
- **Three replies:** Rawls, the basic structure is the subject of justice, and the choice of rules is a
  choice whose tendencies are known on average (attacks 3; [`political-philosophy`](../political-philosophy/syllabus.md)
  2.2-2.3); Young, [structural injustice](#structural-injustice) (attacks 1); rules judged by their
  predictable patterns, as with loaded dice (attacks 3 as Hayek needs it).
- **Where it is weakest, 1 read with 3:** critics find an equivocation between "no one chose this
  outcome" (true) and "no one is answerable for maintaining rules that predictably produce outcomes of
  this shape" (false: legislatures revise them). **Hayek's reply:** rules adjusted to hit a
  distributive target stop being end-independent (premise 2). Open: whether rules can be shaped by
  distributive concerns and stay general.

*Lessons:* [5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)

### Structural injustice

**Wrong without a wrongdoer: when the normal working of social processes, each action blameless,
puts large groups under systematic threat of domination or deprivation.** Iris Marion Young,
*Responsibility for Justice* (2011), cited to [`political-philosophy`](../political-philosophy/syllabus.md)
4.4. Responsibility is a forward-looking share, held by everyone whose actions sustain the process,
in changing it (the social connection model).

- **Denies Hayek's premise 1 outright.**
- **The stranded town** ([5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)
  Example 2): if those with least savings and mobility regularly bear supply shocks, the process is
  structurally unjust; all three replies can accept the price signal and ask only who bears its cost.

*Lessons:* [5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)

## What economic models explain

### Isolation

**A model seals off a few factors from everything else that is acting, and can be true of the
mechanism it isolates while every assumption doing the isolating is false.** Uskali Mäki ("On the
method of isolation in economics", 1992). Isolation by *idealization* (false assumptions that
neutralize factors: zero transport costs, a single consumer) or by *omission* (leaving a factor out
without saying anything false).

- **Whether the model is true is an empirical question about the mechanism,** not about the
  assumptions. Mäki keeps Mill's structure and drops his a priori confidence.
- **Against Sugden:** for Mäki a model is a *true* description of a real cause shielded from others;
  for Sugden it is a believable fiction ([credible worlds](#credible-worlds)).
- **One way to deny Reiss's R1** ([explanation paradox](#explanation-paradox)): a model is true of the
  cause it isolates, false only about what it leaves out.
- **A realist reading of Friedman** (Mäki, in the 2009 Cambridge volume he edited on the essay's
  legacy): much of the essay concerns negligibility.

*Lessons:* [6.1](lessons/06-01-idealization-and-isolation.md), [6.2](lessons/06-02-friedmans-as-if-and-its-critics.md), [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md)

### Idealization

**A deliberately false assumption used to isolate.** *Galilean idealization* (Ernan McMullin, 1985):
a distortion made for tractability with a route back; de-idealize (add friction to the frictionless
plane) and the answer moves by a computable correction.

**When is an idealization harmless for a question $Q$?** ([6.1](lessons/06-01-idealization-and-isolation.md))

- **(i) De-idealization:** adding back the omitted factors changes the answer to $Q$ by a small or
  computable correction (Mill's "allowance").
- **(ii) Stability:** the isolated factor contributes the same thing in the concrete case as in the
  model, so there is something for the correction to correct.

- **Always relative to $Q$;** size is beside the point. A frictionless plane is a large distortion and
  often harmless; a slight difference in Engel slopes is small and decisive for a transfer.
- **"The assumptions are unrealistic" refutes nothing** unless it shows the mechanism does not operate,
  or does not combine as the model says.

*Lessons:* [6.1](lessons/06-01-idealization-and-isolation.md)

### Capacities

**Stable causal powers a factor contributes wherever it operates, even when other factors mask the
result.** Nancy Cartwright, *Nature's Capacities and their Measurement* (1989); she reads Mill's
tendencies as capacities. She later argued that stable capacities show up only in special
arrangements, which makes the economist's job finding those arrangements, not assuming them.

*Lessons:* [6.1](lessons/06-01-idealization-and-isolation.md)

### Tendency law

**A law stating what a cause, acting alone, tends to produce, true "in the abstract" and true in the
concrete only "with proper allowances" for disturbing causes.** Mill, "On the Definition of Political
Economy" (written by 1830, first printed 1836, Essay V of *Essays on Some Unsettled Questions of
Political Economy*, 1844; public domain): political economy considers man "solely as a being who
desires to possess wealth", checked only by two perpetual counter-motives, aversion to labour and the
wish for present enjoyment. No economist, Mill says, ever believed people are like this.

**Mill's defence of the a priori method** ([6.1](lessons/06-01-idealization-and-isolation.md)):

1. Social effects have many causes acting together.
2. To predict a compound effect you must know each cause's law separately, then compound them, as
   astronomy compounds forces.
3. Society permits no experiment holding the other causes fixed, so the separation is made in thought.
4. What follows from the supposition is true in the abstract: what that cause alone tends to produce.
5. In application it holds with allowances for disturbing causes.
6. **C.** Economics may reason from a false description of people and still state true laws, read as
   tendency laws.

- **Critics attack premise 2:** compounding like forces assumes causes combine additively; if pay
  changes *why* people act, the wealth motive does not leave the others intact, and 2.2's evidence
  suggests the "desire of wealth" may not be one stable cause. Then condition (ii) of
  [idealization](#idealization) fails. **Reply:** that concerns which causes to isolate, not whether
  to isolate.
- **A law states a tendency,** so on this reading there are no exceptions, only other causes at work
  (the passage close-read in 6.1's problems).
- **Boss 6(c) reserves** the verdict on whether Mill is an instrumentalist in Friedman's sense.

*Lessons:* [6.1](lessons/06-01-idealization-and-isolation.md)

### Representative agent

**Modelling many households as one.** Exact for producers (industry supply is that of one pooled
firm, since profit is linear in shared prices: [`grad-micro` 3.4](../grad-micro/lessons/03-04-aggregation-and-the-firm.md));
for consumers only under the [Gorman polar form](#gorman-polar-form).

- **Unequal Engel slopes** ([6.1](lessons/06-01-idealization-and-isolation.md) Example 2,
  illustrative): with slopes 0.1 and 0.05 and total income 200, demand is 19.5, 22 or 24.5 as income
  shifts; a representative consumer at the mean slope predicts 22 whatever the split.
- **By question:** prediction with distribution fixed, the error calibrates away; distribution moving
  (a transfer, a tax, a recession hitting one group), the "correction" is the whole effect. In general
  equilibrium the Sonnenschein-Mantel-Debreu theorem ([`grad-micro` 4.6](../grad-micro/lessons/04-06-uniqueness-stability-failure.md))
  leaves aggregate demand nearly shapeless. Alan Kirman ("Whom or what does the representative
  individual represent?", 1992) pressed this against representative-agent macroeconomics.
- **Welfare:** scoring policy by the representative consumer's utility treats society as one person,
  defensible only with distribution-indifference or a planner assumed to redistribute optimally. The
  rival premise is [distributional weights](#distributional-weights).
- **"The aggregate behaves like one consumer" is empirical; "social welfare is that consumer's
  utility" is normative.** Gorman secures the first, nothing in it the second.
- **Defenders:** heterogeneous-agent versions now check robustness, and for many questions the answers
  survive: condition (i) settled by evidence.

*Lessons:* [6.1](lessons/06-01-idealization-and-isolation.md)

### Gorman polar form

**Aggregate demand depends only on total income exactly when every household's Engel curve is linear
with one common slope.** At fixed prices, with $x_i(m_i)$ consumer $i$'s demand at income $m_i$ and
$M=\sum_i m_i$:

$$X=\sum_i x_i(m_i) \text{ depends only on } M \iff x_i(m_i)=a_i+b\,m_i \text{ for all } i.$$

Intercepts $a_i$ may differ; the slope $b$ may not. W. M. Gorman (1953): indirect utility
$v_i(p,m_i)=a_i(p)+b(p)\,m_i$.

- **Proof by transfer:** move $dm$ from $j$ to $i$; demand changes by $(x_i'(m_i)-x_j'(m_j))\,dm$,
  which must vanish for every pair and income level, so slopes are equal and constant.
- **Common slopes** ([6.1](lessons/06-01-idealization-and-isolation.md) Example 1): $x_A=2+0.1m_A$,
  $x_B=5+0.1m_B$; demand is 27 at every split of 200, and the representative agent is exact.

*Lessons:* [6.1](lessons/06-01-idealization-and-isolation.md)

### F-twist

**A theory is judged only by its predictions for its intended class of phenomena, so the
unrealism of its assumptions is irrelevant to its worth.** Paul Samuelson's 1963 name (*AER* Papers
and Proceedings) for the thesis of Milton Friedman's "The Methodology of Positive Economics" (1953),
which answered survey evidence that firms priced by rules of thumb (Richard Lester, *AER*, 1946).

1. **P1.** The aim of a positive theory is accurate prediction of phenomena in its intended class.
2. **P2.** A theory's worth is fixed entirely by how well it serves its aim.
3. **P3.** Whether its assumptions are true does not affect how well it predicts, beyond what testing
   the predictions reveals.
4. **C.** The truth of a theory's assumptions is irrelevant to its worth.

- **Friedman's images:** leaves arranged *as if* seeking sunlight; the expert billiard player; firms
  *as if* maximizing returns, backed by a selection argument (Armen Alchian, *JPE*, 1950); Galileo's
  $s=\tfrac12 gt^2$, good for a dense ball, bad for a feather. And the provocation: the more
  significant the theory, the more unrealistic its assumptions.
- **P1 and P2 are a methodological norm, not an empirical claim:** survey evidence can refute "firms
  do not compute marginal revenue" and cannot touch "that does not matter".
- **Where it is weakest, P3 with "intended":** every policy use takes a model somewhere untested, and
  there only a right mechanism guides. **Reply:** state the intended class narrowly and enlarge it by
  testing. **Rejoinder:** a class enlarged only by testing never licenses a forecast.
- **Silent on welfare:** an as-if utility function claims no real preferences, and welfare economics
  needs them ([welfarism](#welfarism)).
- **The behavioural test** ([6.2](lessons/06-02-friedmans-as-if-and-its-critics.md) Example 2): an
  as-if exponential model predicts no demand for commitment devices, which exist; and for a pension
  reform's welfare appraisal, which mechanism is true comes back.

*Lessons:* [6.2](lessons/06-02-friedmans-as-if-and-its-critics.md)

### Musgrave assumption types

**"Assumption" covers three different claims, and Friedman's dictum fails for each in a different
way.** Alan Musgrave, "'Unreal Assumptions' in Economic Theory: The F-Twist Untwisted" (*Kyklos*,
1981).

| Kind | What it says | Status |
|---|---|---|
| Negligibility | factor $F$'s effect is too small to matter here | a substantive claim that can be true |
| Domain | the theory applies only where $F$ holds | the less realistic, the less the theory covers (Friedman's dictum reversed) |
| Heuristic | known false, a simplifying first step to be dropped later | no claim about the world |

- **A refuted negligibility assumption becomes a domain assumption:** the refutation shrinks the
  theory's domain rather than refuting it (the feather).
- **Price-taking in two markets** ([6.2](lessons/06-02-friedmans-as-if-and-its-critics.md) Example 1,
  $p=200-2Q$, $c=40$, Cournot as the truth): price error $4/(n+5)$, quantity error $1/n$; 57.1% and
  50.0% at $n=2$, 4.8% and 1.3% at $n=79$. Equally false in both; negligible at 79, a domain limit at 2.
  Telling in advance which row a market is in means counting firms: a check of the assumption.
- **"Unrealistic" often means incomplete, not false** (the colour of the billiard balls).
- **Boss 6(b) reserves** the classification of the lemons model's assumptions.

*Lessons:* [6.2](lessons/06-02-friedmans-as-if-and-its-critics.md)

### Instrumentalism and realism

**Instrumentalism: a theory is a tool for prediction, and its assumptions need not be true. Realism:
a good theory gets the causal structure at least approximately right, so its assumptions are claims
that matter.** The general debate is [`philosophy-of-science`](../philosophy-of-science/syllabus.md)
5.1-5.4's.

- **Hausman** ("Why Look Under the Hood?", in *Essays on Philosophy and Economic Methodology*, 1992):
  nobody buying a used car rests content with a test drive; predictions are tested on a small sample,
  and assumptions are evidence about the untested cases, so P3 of the [F-twist](#f-twist) fails.
- **The price of keeping prediction only:** explanation, the welfare reading of preferences, and any
  untested extension.

*Lessons:* [6.2](lessons/06-02-friedmans-as-if-and-its-critics.md)

### How-possibly explanation

**Shows that a mechanism *could* produce a phenomenon, which matters when people believed it
couldn't; a how-actually explanation says what in fact produced it.** William Dray (*Laws and
Explanation in History*, 1957); later used heavily in biology.

- **Not a weaker how-actually:** it answers a different question, and can be decisive against an
  impossibility or necessity belief while silent about any real case.
- **The argument** ([6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md)): a model world
  exhibits mechanism $m$ producing $P$; the world is credible; $P$ is observed; a credible mechanism
  yielding an observed phenomenon is a candidate cause; so $m$ is a how-possibly explanation of $P$
  (C1). Upgrading to how-actually needs evidence that $m$ operates here, at sufficient strength, and
  that rivals do not account for $P$ (C2): the model nominates a suspect; causal inference convicts
  ([`econometrics` 3.1](../econometrics/lessons/03-01-potential-outcomes-identification.md)).
- **Where it is weakest:** credibility (premise 2) with the inductive step (4): see
  [credible worlds](#credible-worlds).
- **One way to deny Reiss's R3.**

*Lessons:* [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md)

### Schelling segregation model

**Agents of two types move if fewer than a fraction $\tau$ of their neighbours share their type; even
mild preferences sort the population into large single-type blocks.** Thomas Schelling, "Dynamic
Models of Segregation" (*Journal of Mathematical Sociology*, 1971). Segregation of the whole does not
require segregationist preferences in the individual.

- **The ring** ([6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md) Example 1, simulated
  for the lesson: 30 agents of each type, 12 empty cells, 2 cells either side): over 300 random starts
  the like-neighbour share rises from 0.49 to 0.84 at $\tau=\tfrac12$, and to 0.61 at $\tau=\tfrac14$.
  A perfectly alternating ring would content everyone at $\tau=\tfrac12$; the dynamics do not find it.
- **Modal, not empirical:** it refutes the impossibility hypothesis and says nothing about the strength
  of preferences in any real city. "Can arise from mild preferences" is not "does", and neither is a
  verdict on who is responsible.

*Lessons:* [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md)

### Minimal model

**A model that makes no claim to represent any actual mechanism, yet teaches by refuting an
impossibility hypothesis.** Till Grüne-Yanoff, "Learning from Minimal Economic Models" (*Erkenntnis*,
2009). What is learned is modal: before Schelling, one could hold that marked segregation needs strong
own-type preferences.

*Lessons:* [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md)

### Credible worlds

**A model is a constructed world parallel to ours, valuable when credible, like a realistic novel,
and we reason inductively from it to the real world as a biologist reasons from mice to humans.**
Robert Sugden, "Credible Worlds: The Status of Theoretical Models in Economics" (*Journal of Economic
Methodology*, 2000), using Schelling's and Akerlof's models.

- **Contrast [isolation](#isolation):** a believable fiction, not a true description of a shielded
  cause.
- **Where it is weakest:** what does "credible" add? It is a judgment by economists trained to find
  such models natural; without a stated similarity relation the inductive step has no warrant, and
  supplying one tends to turn credible worlds back into isolations. **Reply:** every induction rests on
  judgments of relevant similarity; mice to humans is no better grounded in principle.
- **The lemons model as a credible world** ([6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md)
  Example 2): the minimal reading is secure; the reach to real markets needs the share of good goods and
  the valuation gap measured, and rivals (transaction costs, warranties, inspection, reputation) ruled out.

*Lessons:* [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md)

### Explanation paradox

**Three widely held claims are jointly inconsistent:** Julian Reiss, "The Explanation Paradox"
(*Journal of Economic Methodology*, 2012).

- **R1.** Economic models are false.
- **R2.** Economic models are nevertheless explanatory.
- **R3.** Only true accounts explain.

| Deny | Route |
|---|---|
| R1 | [isolation](#isolation): a model is true of the cause it isolates |
| R3 | [how-possibly](#how-possibly-explanation) and [credible-world](#credible-worlds) accounts: a potential explanation already explains something |
| R2 | models are heuristic tools that generate hypotheses; only empirical work explains |

- **Reiss held that none of the escapes he examined succeeds** and the paradox is genuine; a 2013
  symposium in the same journal debated replies.
- **R3 is where theories of explanation enter** (D-N needs a true explanans; causal and interventionist
  accounts ask for difference-makers; unification asks for scope:
  [`philosophy-of-science`](../philosophy-of-science/syllabus.md) 4.1-4.3). Which you hold largely
  fixes which claim you drop.
- **Boss 6(d) reserves** the essay on the lemons model.

*Lessons:* [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md)

### Lemons model

**When only sellers know quality, buyers price the average car on offer, owners of good cars
withdraw, and trade with gains on both sides can unravel.** Akerlof (1970), derived in
[`grad-micro` 5.1](../grad-micro/lessons/05-01-adverse-selection-lemons.md).

- **Two types** ([6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md) Example 2,
  illustrative, thousands of dollars): good cars worth 10 to sellers and 12 to buyers, lemons 4 and 5.
  At half good, a random car is worth 8.5 to a buyer, below 10, so only lemons trade; at four-fifths
  good, 10.6, so all trade. Threshold $\lambda^*$ solves $12\lambda+5(1-\lambda)=10$:
  $\lambda^*=\tfrac57\approx 0.71$.
- **A how-possibly result:** mutually beneficial trade can collapse without fraud, irrationality or
  monopoly. Whether it does in a real market depends on parameters the model leaves free.

*Lessons:* [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md)

## Formulas and arithmetic

Every formula the lessons compute, one entry each, grouped by job. Figures are the lessons'
illustrative ones. Public-economics formulas the course only cites (EV and CV, social marginal
welfare weights, the many-person Ramsey rule) stay on [`public-economics`'s card](../public-economics/reference.md).

### Index arithmetic

| Quantity | Formula | Symbols and note |
|---|---|---|
| WTP for a gain | $u(w-\text{WTP})+\Delta u=u(w)$ | $w$ wealth, $\Delta u$ utility gain ([1.2](lessons/01-02-money-and-happiness-as-measures.md)) |
| WTP, log utility | $\text{WTP}=w(1-e^{-\Delta u})$ | a fixed share of wealth: 975.41 at $w=20{,}000$, 9,754.12 at 200,000 ($\Delta u=0.05$) |
| WTA, log utility | $\text{WTA}=w(e^{\Delta u}-1)$ | 10,254.22 at 200,000; the WTP-WTA gap is an income effect |
| Wealth-weighted WTP | $\text{WTP}_i\,u'(w_i)=\text{WTP}_i/w_i$ | under log utility restores the utilitarian ranking |
| Peak-end score | $(\text{peak}+\text{end})/2$ | stylized: 7.5 vs 5.0 for episodes totalling 38 vs 52 |
| Normalized index | $I_k=\dfrac{x_k-\min_k}{\max_k-\min_k}$ | goalposts fixed; income enters by its log ([1.3](lessons/01-03-capabilities-as-a-welfare-metric.md)) |
| Power mean | $M_r=\big(\tfrac1n\sum_k I_k^{\,r}\big)^{1/r}$ | $r=1$ arithmetic, $r\to0$ geometric $(\prod_k I_k)^{1/n}$, $r\to-\infty$ minimum |
| Elasticity of substitution | $\sigma=1/(1-r)$ | the CES form of `grad-micro` 3.1 |
| Implied trade-off (MRS) | arithmetic $-dI_j/dI_k=1$; geometric $-dI_j/dI_k=I_j/I_k$ | at $(0.9,0.3)$ a point of income is worth three of health |
| A year of life in income | $\Delta y\approx\dfrac{y\ln 750}{65}\cdot\dfrac{I_y}{I_h}$ | goalposts LE 20–85, income 100–75,000 log; about 58 dollars (poor) vs 3,994 (rich), ratio about 69 |

*From* [1.2](lessons/01-02-money-and-happiness-as-measures.md), [1.3](lessons/01-03-capabilities-as-a-welfare-metric.md)

### Choice and time arithmetic

| Quantity | Formula | Symbols and note |
|---|---|---|
| Directly revealed preferred | $x^t\,R^D\,x^s$ if $p^t\cdot x^s\le p^t\cdot x^t$ | WARP: not both ways; GARP: no cycles ([2.1](lessons/02-01-preference-and-revealed-preference.md)) |
| WARP check (Example 1) | $1(2)+1(3)=5<7$ and $1(5)+4(2)=13<14$ | days $(1,1)$, $(5,2)$ and $(1,4)$, $(2,3)$: each strictly affordable, so WARP fails |
| Property alpha | $x\in C(S),\ x\in T\subseteq S\Rightarrow x\in C(T)$ | the last apple violates it |
| Beta-delta | $U_t=u(c_t)+\beta\sum_{k\ge1}\delta^k u(c_{t+k})$ | $\delta$ a per-period **factor** ([delta two ways](#delta-two-ways)) ([2.2](lessons/02-02-the-behavioural-challenge.md)) |
| Weight ratio, two future rewards | $\delta^{t'-t}$; once the earlier is now, $\beta\delta^{t'-t}$ | reversal only when the earlier becomes immediate |
| Reversal window | $\delta X>Y>\beta\delta X$ | $Y$ sooner, $X$ one period later: $105.26<X<150.38$ for $Y=100$, $\beta=0.7$, $\delta=0.95$ |
| True hyperbolic | $1/(1+kt)$ | drifts continuously, unlike beta-delta |
| Money pump | buy at price, swap, sell back | loses the price gap per cycle, if one price serves to buy and sell |
| Unambiguous choice ranking | $x\,P^*\,y$ iff $y\notin C(G)$ for all counted $G$ with $x,y$ available | Bernheim-Rangel; incomplete ([2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md)) |

*From* [2.1](lessons/02-01-preference-and-revealed-preference.md), [2.2](lessons/02-02-the-behavioural-challenge.md), [2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md)

### Efficiency and CBA arithmetic

| Quantity | Formula | Symbols and note |
|---|---|---|
| Interior Pareto optimum | $MRS_A=MRS_B$ | with $u=\sqrt{xy}$ and equal totals 10 and 10, frontier $u_A+u_B=10$ ([3.1](lessons/03-01-the-pareto-principle.md)) |
| Leaky-bucket equalization | $19-w=1+0.8w$ | $w=10$, utilities $(4.5,4.5)$, inside the frontier |
| Kaldor test, $B$ over $A$ | $a$ strictly inside $\bar B$ | linear frontier $\alpha u_1+\beta u_2=k$: check $\alpha a_1+\beta a_2<k$ ([3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md)) |
| Hicks test, $B$ over $A$ | $b$ not strictly inside $\bar A$ | = not (Kaldor, $A$ over $B$) |
| Scitovsky reversal (Example 1) | $\bar A$: $u_1+3u_2=9$; $\bar B$: $2u_1+u_2=6$ | $a=(0.9,2.7)$: $4.5<6$; $b=(2.5,1)$: $5.5<9$; cross at $(1.8,2.4)$ |
| Spurious-unanimity bet | Ann $100q-55$, Bob $45-100q$ | sum $-10$ for every shared $q$; each $+15$ by own beliefs |
| VSL, definition | $\mathrm{VSL}=\dfrac{u_a(w)-u_d(w)}{(1-p)u_a'(w)+p\,u_d'(w)}$ | slope $dw/dp$ at constant expected utility ([3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md)) |
| VSL, hedonic wage | $\mathrm{VSL}=\Delta w/\Delta p$ | $280/(1/25{,}000)=7$ million; guardrails $120\times50{,}000=6$ million |
| Cost per life saved | cost / deaths prevented | $120/20=6$ million $<7$: net $+20$ million |
| Weighted CBA | $\sum_i g_iB_i$, $g_i\propto c_i^{-\eta}$, mean 1 | $\eta=0$ unweighted; bypass $+10$, $-6.7$, $-20$ at $\eta=0,0.5,1$ |
| Flip point in $\eta$ | $(c_R/c_P)^{\eta}=\text{gain}/\text{loss}$ | $4^{\eta}=30/20$: $\eta=\ln1.5/\ln4\approx0.29$ |
| Differentiated VSL | $\mathrm{VSL}_i=\mathrm{VSL}_{\text{ref}}(y_i/y_{\text{ref}})^{\varepsilon}$ | $\varepsilon$ income elasticity ([3.4](lessons/03-04-cbas-critics-and-defenders.md)) |
| Flip point in $\varepsilon$ | $12\times8\times(1/8)^{\varepsilon}=40$ | $\varepsilon=\ln(12/5)/\ln8\approx0.42$; water fails beyond $\ln(96/30)/\ln8\approx0.56$ |

*From* [3.1](lessons/03-01-the-pareto-principle.md), [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md), [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md), [3.4](lessons/03-04-cbas-critics-and-defenders.md)

### Discounting arithmetic

In this group $\delta$ is a **rate** ([delta two ways](#delta-two-ways)).

| Quantity | Formula | Symbols and note |
|---|---|---|
| Present value | $PV=D/(1+r)^T$ | discount factor $1/(1+r)^T$ ([4.1](lessons/04-01-why-discount.md)) |
| Two-factor split | $D(T)=(1+\delta)^{-T}(1+g)^{-\eta T}$ | utility factor times growth factor; combined rate $(1+\delta)(1+g)^{\eta}-1$ |
| Example 1 (4.1) | $1.018^{-120}=0.11756$; $\times1.01^{-120}=0.03562$ | $\delta$'s share of the discount in logs: 35.8 percent |
| Opportunity cost | $100{,}000\times1.04^{50}=710{,}668$ | against $500{,}000\times1.018^{-50}=204{,}918$ |
| Excessive saving | $c_0=W\big/\sum_{t=0}^{N-1}\beta^t$, $\beta=(1+\delta)^{-30}$ | log utility; $W/N$ at $\delta=0$; share $\to1-\beta$ (25.8% at 1%, 44.8% at 2%) |
| Ramsey equation | $r=\delta+\eta g$ | ([4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md)) |
| Social discount factor | $e^{-\delta t}(c_t/c_0)^{-\eta}=e^{-(\delta+\eta g)t}$ | from $W=\int e^{-\delta t}u(c_t)\,dt$, $u'(c)=c^{-\eta}$ |
| Keynes-Ramsey rule | $\dot c/c=(r-\delta)/\eta$ | `grad-macro` 2.3, solved for $r$ |
| Elasticity of marginal utility | $\eta=-c\,u''(c)/u'(c)$ | doubling $c$ divides $u'$ by $2^{\eta}$ |
| Saving rate, AK economy | $s=(r-\delta)/(\eta r)$ | $\delta=0.1$, $r=4$: 97.5, 48.75, 32.5 percent at $\eta=1,2,3$ |
| Calibration identity | $\delta=r-\eta g$ | $r=4$, $g=1.3$: $\eta=1\Rightarrow\delta=2.7$; $\delta=0\Rightarrow\eta\approx3$ |
| CE discount factor | $A(t)=\sum_ip_i(1+r_i)^{-t}$ | ([4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md)) |
| CE rate | $R(t)=A(t)^{-1/t}-1$ | $\to\min_i r_i$; 4.77, 3.19, 2.31 percent at 1, 100, 400 years for 2% (0.3) / 6% (0.7) |
| Weitzman break-even | $X\ge1/A(T)$ | 23.0 at 100 years |
| Gollier break-even | $X\ge\sum_ip_i(1+r_i)^{T}$ | 239.7 at 100 years; implied rate 5.63 percent, rising |

*From* [4.1](lessons/04-01-why-discount.md), [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md), [4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md)

### Exploitation arithmetic

| Quantity | Formula | Symbols and note |
|---|---|---|
| Rate of surplus value | $s/v$ | surplus value over wages (variable capital) ([5.3](lessons/05-03-exploitation-in-labour-markets.md)) |
| Labour embodied per bushel | total days / total bushels | corn island: $6/4=1.5$; each worker works 2 for 1.5 embodied, $s/v=0.5/1.5=\tfrac13$ |
| Wage at the margin | $w=$ farm productivity | $\tfrac12$ bushel a day when seed is scarce and the farm is in use |
| Roemer withdrawal test | (i) $S$ better off with per-capita alienable assets; (ii) complement worse off | plus dominance; workers 1.5 days instead of 2, owner 1.5 instead of 0 |
| Credit isomorphism | $1-r=w$ | $r=\tfrac12$ per bushel-season reproduces hours and exploitation |
| Fine as a price | lateness $=100\times(50-\text{threshold})/50$ | thresholds 30, 40, 10 give 40, 20, 80 late ([5.1](lessons/05-01-commodification.md)) |
| Kidney cycles | 2-way only vs with 3-cycles | 2 vs 5 transplants; a 3-cycle needs 6 simultaneous operations ([5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md)) |

*From* [5.1](lessons/05-01-commodification.md), [5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md), [5.3](lessons/05-03-exploitation-in-labour-markets.md)

### Production and price arithmetic

| Quantity | Formula | Symbols and note |
|---|---|---|
| Cobb-Douglas marginal products | $MP_L=(1-\alpha)Q/L$, $MP_K=\alpha Q/K$ | $Q=AK^{\alpha}L^{1-\alpha}$ ([5.4](lessons/05-04-markets-and-desert.md)) |
| Competitive factor pay | $w=p\,MP_L$, $r=p\,MP_K$ | value of the marginal product |
| Euler's theorem | $MP_L\cdot L+MP_K\cdot K=Q$ | degree-1 homogeneity; $4\times25+1\times100=200$ |
| Demand shock | $w=p\,MP_L$ | $30\times4=120\to20\times4=80$ dollars a day |
| Increasing returns | $Q=2K^{0.6}L^{0.6}$ at $K=L=32$ | $Q=128$; marginal payments $2\times2.4\times32=153.6$ |
| Tin market | $q_C=70-2p$, $q_S=50-p$, $120-3p=S$ | $S=90$: $p=10$; $S=75$: $p=15$ ([5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)) |

*From* [5.4](lessons/05-04-markets-and-desert.md), [5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md)

### Model arithmetic

| Quantity | Formula | Symbols and note |
|---|---|---|
| Aggregation condition | $X(M)$ only iff $x_i=a_i+b\,m_i$, common $b$ | Gorman: $v_i=a_i(p)+b(p)m_i$ ([6.1](lessons/06-01-idealization-and-isolation.md)) |
| Transfer test | $\Delta X=(x_i'-x_j')\,dm$ | slopes 0.1 and 0.05: demand 19.5–24.5 as 200 is split |
| Cournot markup | $p-c=(a-c)/(n+1)$, $Q=\tfrac{n}{n+1}\cdot\tfrac{a-c}{b}$ | demand $p=a-bQ$ ([6.2](lessons/06-02-friedmans-as-if-and-its-critics.md)) |
| Price-taking errors | price $4/(n+5)$, quantity $1/n$ | for $a=200$, $b=2$, $c=40$: 57.1% and 50% at $n=2$; 4.8% and 1.3% at $n=79$ |
| Free fall | $s=\tfrac12gt^2$ | Friedman's Galileo |
| Like-neighbour share | own-type share of occupied neighbours, averaged | Schelling ring: 0.49 to 0.84 at $\tau=\tfrac12$, 0.61 at $\tfrac14$ ([6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md)) |
| Lemons threshold | $v_G^B\lambda+v_L^B(1-\lambda)=v_G^S$ | $v^B$, $v^S$ buyers' and sellers' values of good ($G$) and lemon ($L$) cars, $\lambda$ the good share: $12\lambda+5(1-\lambda)=10$ gives $\lambda^*=\tfrac57\approx0.71$ |

*From* [6.1](lessons/06-01-idealization-and-isolation.md), [6.2](lessons/06-02-friedmans-as-if-and-its-critics.md), [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md)

## Thinkers and texts

### Primary texts

The public-domain texts the course quotes, in date order, with the edition the lessons read.
Everything else is paraphrased.

| Text | Date | Edition | Passages | Lessons |
|---|---|---|---|---|
| Mill, "On the Definition of Political Economy; and on the Method of Investigation Proper to It" (Essay V of *Essays on Some Unsettled Questions of Political Economy*) | written by 1830; first printed 1836; collected 1844 | Project Gutenberg text of the 1844 collection; **public domain** | "solely as a being who desires to possess wealth"; "true in the abstract … with proper allowances"; the tendency and exceptions passage (Gutenberg's stray "ably" dropped as a transcription slip) | [6.1](lessons/06-01-idealization-and-isolation.md) |
| Marx, *Capital* vol. 1 | 1867 | Moore and Aveling translation; **public domain** | ch. 6 (labour-power bought at its value; the "very Eden of the innate rights of man"); ch. IX (rate of surplus value); ch. XXVI (the "frugal elite" fable) | [5.3](lessons/05-03-exploitation-in-labour-markets.md) |
| Leo XIII, *Rerum Novarum* | 1891 | Vatican English translation (§45 in its numbering) | §45, the just wage | [5.4](lessons/05-04-markets-and-desert.md) |
| J. B. Clark, *The Distribution of Wealth* | 1899 | **public domain** | preface (the natural law giving each agent "the amount of wealth which that agent creates"); ch. I ("pure fact", "by right of creation", "institutional robbery") | [5.4](lessons/05-04-markets-and-desert.md) |
| Sidgwick, *The Methods of Ethics* | 7th ed., 1907 | Project Gutenberg #46743; **public domain** | Book IV ch. 1 (time and the value of happiness from a universal point of view); Book III ch. 13 (prudence; certainty and "means or capacities of happiness") | [4.1](lessons/04-01-why-discount.md) |
| Pigou, *The Economics of Welfare* | 1920 | first edition; **public domain** | Part I ch. II §3 (the defective telescopic faculty; satisfactions, not objects); §5 (the state's duty, reserved for Boss 4(c)) | [4.1](lessons/04-01-why-discount.md) |

### Modern works cited

Paraphrased and cited, never quoted at length. Grouped by lesson of first use.

| Author | Work | Used for | Lessons |
|---|---|---|---|
| Harsanyi | (1977) | excluding antisocial preferences from the utilitarian sum | [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md) |
| Sen | "Utilitarianism and Welfarism" (1979) | the term welfarism; utilitarianism as welfarism plus sum-ranking | [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md) |
| Goodin | "Laundering Preferences", in Elster and Hylland, eds., *Foundations of Social Choice Theory* (1986) | laundering | [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md) |
| Elster | sour grapes | adaptive preferences | [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md) |
| Hausman and McPherson | "Preference Satisfaction and Welfare Economics", *Economics and Philosophy* (2009) | preferences as evidence | [1.1](lessons/01-01-welfarism-and-preference-satisfaction.md) |
| Kahneman, Wakker and Sarin | "Back to Bentham?" (1997) | decision, experienced, remembered utility | [1.2](lessons/01-02-money-and-happiness-as-measures.md) |
| Kahneman, Fredrickson, Schreiber and Redelmeier | *Psychological Science* (1993) | the cold-water study | [1.2](lessons/01-02-money-and-happiness-as-measures.md) |
| Fredrickson and Kahneman; Redelmeier and Kahneman | (1993); colonoscopy study (1996) | duration neglect; peak-end clinically | [1.2](lessons/01-02-money-and-happiness-as-measures.md) |
| Bond and Lang | "The Sad Truth about Happiness Scales", *Journal of Political Economy* (2019) | ordinal scales; rankings not identified | [1.2](lessons/01-02-money-and-happiness-as-measures.md) |
| Diener, Lucas and Scollon | *American Psychologist* (2006) | adaptation real but incomplete | [1.2](lessons/01-02-money-and-happiness-as-measures.md) |
| Kaplow and Shavell | (1994) | redistribute by tax, judge projects on efficiency | [1.2](lessons/01-02-money-and-happiness-as-measures.md), [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md), [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md) |
| Sen | "Equality of What?" (Tanner Lecture, 1979); *Commodities and Capabilities* (1985); *Development as Freedom* (1999) | capabilities; no fixed list; the fasting monk | [1.3](lessons/01-03-capabilities-as-a-welfare-metric.md) |
| Nussbaum | *Creating Capabilities* (2011) | ten central capabilities with thresholds | [1.3](lessons/01-03-capabilities-as-a-welfare-metric.md) |
| Mahbub ul Haq / UNDP | Human Development Report (1990; geometric mean from 2010) | the HDI | [1.3](lessons/01-03-capabilities-as-a-welfare-metric.md) |
| Ravallion | "Troubling tradeoffs in the Human Development Index", *Journal of Development Economics* (2012) | implied trade-offs of the 2010 HDI | [1.3](lessons/01-03-capabilities-as-a-welfare-metric.md) |
| Samuelson | *Economica* note (1938) | revealed preference | [2.1](lessons/02-01-preference-and-revealed-preference.md) |
| Sen | "Rational Fools", *Philosophy and Public Affairs* (1977); "Internal Consistency of Choice", *Econometrica* (1993) | commitment; menu dependence, the last apple | [2.1](lessons/02-01-preference-and-revealed-preference.md) |
| Hausman | *Preference, Value, Choice, and Welfare* (2012); "Sympathy, Commitment, and Preference", *Economics and Philosophy* (2005) | total comparative evaluation | [2.1](lessons/02-01-preference-and-revealed-preference.md) |
| Gul and Pesendorfer | "The Case for Mindless Economics" (2008); "Temptation and Self-Control", *Econometrica* (2001) | behaviourism; preferences over menus | [2.1](lessons/02-01-preference-and-revealed-preference.md), [2.2](lessons/02-02-the-behavioural-challenge.md) |
| Tversky and Kahneman | *Science* (1981) | the Asian disease problem | [2.2](lessons/02-02-the-behavioural-challenge.md) |
| Lichtenstein and Slovic; Grether and Plott | (1971); *AER* (1979) | preference reversals | [2.2](lessons/02-02-the-behavioural-challenge.md) |
| Tversky, Slovic and Kahneman | *AER* (1990) | scale compatibility | [2.2](lessons/02-02-the-behavioural-challenge.md) |
| Strotz; Phelps and Pollak; Laibson | (1956); (1968); *QJE* (1997) | time inconsistency; quasi-hyperbolic discounting | [2.2](lessons/02-02-the-behavioural-challenge.md) |
| O'Donoghue and Rabin | *AER* (1999) | naive and sophisticated agents | [2.2](lessons/02-02-the-behavioural-challenge.md) |
| Sher and McKenzie; Sozou | *Cognition* (2006); (1998) | frames carry information; uncertain hazard mimics hyperbolic discounting | [2.2](lessons/02-02-the-behavioural-challenge.md) |
| Kahneman and Tversky | prospect theory (1979) | reference dependence, cited to `decision-theory` 2.4 | [2.2](lessons/02-02-the-behavioural-challenge.md) |
| Infante, Lecouteux and Sugden | "Preference purification and the inner rational agent", *Journal of Economic Methodology* (2016) | the inner rational agent | [2.2](lessons/02-02-the-behavioural-challenge.md), [2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md) |
| Thaler and Sunstein | "Libertarian Paternalism", *AER* P&P (2003); *Nudge* (2008); Sunstein and Thaler, *University of Chicago Law Review* (2003) | libertarian paternalism | [2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md) |
| Bernheim and Rangel | "Beyond Revealed Preference", *QJE* (2009) | choice-based welfare | [2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md) |
| Hausman and Welch | "To Nudge or Not to Nudge", *Journal of Political Philosophy* (2010) | the manipulation objection | [2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md) |
| Sugden | *The Community of Advantage* (2018) | opportunity instead of preference satisfaction | [2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md) |
| Johnson and Goldstein | "Do Defaults Save Lives?", *Science* (2003) | opt-in vs opt-out gaps (no rates asserted) | [2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md) |
| Sen | *Collective Choice and Social Welfare* (1970) | optimal starvation; the liberal paradox | [3.1](lessons/03-01-the-pareto-principle.md), [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md) |
| Okun | *Equality and Efficiency* (1975) | the leaky bucket | [3.1](lessons/03-01-the-pareto-principle.md) |
| Parfit | levelling-down objection | why egalitarians keep Pareto | [3.1](lessons/03-01-the-pareto-principle.md) |
| Robbins | *An Essay on the Nature and Significance of Economic Science* (1932) | interpersonal comparisons unscientific | [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md) |
| Kaldor; Hicks; Scitovsky; Samuelson; Little | *Economic Journal* (1939, both); (1941); (1950); *A Critique of Welfare Economics* (1950) | the compensation tests and their critics | [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md) |
| Diamond | (1967) | the coin flip, ex ante vs ex post | [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md) |
| Mongin | "Spurious Unanimity and the Pareto Principle", *Economics and Philosophy* (2016) | spurious unanimity | [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md) |
| Gilboa, Samet and Schmeidler | "Utilitarian Aggregation of Beliefs and Tastes", *JPE* (2004) | Pareto restricted to shared beliefs | [3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md) |
| Thaler and Rosen; Viscusi and Aldy | (1976); survey (2003) | hedonic wage VSL | [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md) |
| Kahneman, Knetsch and Thaler; Hanemann | (1990); (1991) | the WTA-WTP gap: loss aversion; few substitutes | [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md) |
| Krutilla | (1967) | existence value | [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md) |
| Carson; Diamond and Hausman; Desvousges et al.; NOAA panel (Arrow and Solow) | Exxon Valdez study; (1994); (1993); (1993) | contingent valuation and its critics | [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md) |
| Anderson | *Value in Ethics and Economics* (1993) | modes of valuation; incommensurability | [3.4](lessons/03-04-cbas-critics-and-defenders.md), [5.1](lessons/05-01-commodification.md) |
| Sagoff | *The Economy of the Earth* (1988) | citizen and consumer | [3.4](lessons/03-04-cbas-critics-and-defenders.md) |
| Kelman | "Cost-Benefit Analysis: An Ethical Critique", *Regulation* (1981) | the ethical critique | [3.4](lessons/03-04-cbas-critics-and-defenders.md) |
| Adler and Posner | *New Foundations of Cost-Benefit Analysis* (2006) | CBA as a decision procedure | [3.4](lessons/03-04-cbas-critics-and-defenders.md) |
| Sunstein | *Risk and Reason*; *The Cost-Benefit State* (both 2002); "Valuing Life: A Plea for Disaggregation", *Duke Law Journal* (2004) | CBA as a check; differentiated VSL | [3.4](lessons/03-04-cbas-critics-and-defenders.md) |
| Ramsey | "A Mathematical Theory of Saving", *Economic Journal* (1928) | $\delta=0$; discounting "ethically indefensible" | [4.1](lessons/04-01-why-discount.md) |
| Koopmans; Diamond | "Stationary Ordinal Utility and Impatience", *Econometrica* (1960); (1965) | impatience and impossibility | [4.1](lessons/04-01-why-discount.md) |
| Arrow | "Discounting, Morality, and Gaming", in Portney and Weyant, eds., *Discounting and Intergenerational Equity* (1999) | excessive saving; agent-centred prerogative | [4.1](lessons/04-01-why-discount.md) |
| Stern Review | *The Economics of Climate Change* (2006) | prescriptive calibration, $\delta=0.1$, $\eta=1$ | [4.1](lessons/04-01-why-discount.md), [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md) |
| Nordhaus | review of the Stern Review, *Journal of Economic Literature* (2007) | descriptive calibration; DICE-2007 $\delta=1.5$, $\eta=2$; $\eta$ a social choice | [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md) |
| Dasgupta | "Commentary: The Stern Review's Economics of Climate Change", *National Institute Economic Review* (2007) | 97.5 percent saving; $\eta$ 2 to 4 | [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md) |
| Cline | (1992) | $\delta=0$, $\eta=1.5$ | [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md) |
| Sen and Williams | (1982) | "Government House" utilitarianism | [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md) |
| Weitzman | "Why the Far-Distant Future Should Be Discounted at Its Lowest Possible Rate", *JEEM* (1998); "Gamma Discounting", *AER* (2001); dismal theorem, *Review of Economics and Statistics* (2009) | declining rates ([not 1974](#two-weitzman-results)) | [4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md) |
| Gollier and Weitzman | *Economics Letters* (2010) | resolving the puzzle by marginal-utility weights | [4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md) |
| Rawls | *A Theory of Justice* (1971) | just savings (§44); the basic structure | [4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md), [5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md) |
| Gneezy and Rustichini | "A Fine Is a Price", *Journal of Legal Studies* (2000) | the day-care fine | [5.1](lessons/05-01-commodification.md) |
| Sandel | *What Money Can't Buy* (2012) | fairness and corruption | [5.1](lessons/05-01-commodification.md) |
| Radin | *Contested Commodities* (1996) | domino effect, double bind, incomplete commodification | [5.1](lessons/05-01-commodification.md) |
| Polanyi | *The Great Transformation* (1944) | fictitious commodities | [5.1](lessons/05-01-commodification.md) |
| Brennan and Jaworski | *Markets Without Limits* (2016) | free, so for money | [5.1](lessons/05-01-commodification.md) |
| Titmuss; Arrow | *The Gift Relationship* (1970, UK first edition; often cited as 1971, the US edition); "Gifts and Exchanges", *Philosophy and Public Affairs* (1972) | paid blood; the option-adding presumption | [5.1](lessons/05-01-commodification.md) |
| Walzer | *Spheres of Justice* (1983) | blocked exchanges | [5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md) |
| Roth | "Repugnance as a Constraint on Markets", *JEP* (2007) | repugnance | [5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md) |
| Satz | *Why Some Things Should Not Be for Sale* (2010) | noxious markets | [5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md) |
| Roth, Sönmez and Ünver | "Kidney Exchange", *QJE* (2004) | kidney exchange | [5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md) |
| Wertheimer | *Exploitation* (1996) | unfair advantage; fair market value (owned by `philosophy-of-debt` 3.1) | [5.3](lessons/05-03-exploitation-in-labour-markets.md) |
| Roemer | *A General Theory of Exploitation and Class* (1982); "Should Marxists Be Interested in Exploitation?", *Philosophy and Public Affairs* (1985) | withdrawal test; isomorphism; exploitation as symptom | [5.3](lessons/05-03-exploitation-in-labour-markets.md) |
| Anderson and Thompson | (1988) | Roemer's profits as scarcity rent | [5.3](lessons/05-03-exploitation-in-labour-markets.md) |
| Zwolinski; Powell and Zwolinski | "Sweatshops, Choice, and Exploitation", *Business Ethics Quarterly* (2007); (2012) | choice-based defence | [5.3](lessons/05-03-exploitation-in-labour-markets.md) |
| Arnold and Bowie | "Sweatshops and Respect for Persons", *Business Ethics Quarterly* (2003) | four duties of the firm | [5.3](lessons/05-03-exploitation-in-labour-markets.md) |
| Feinberg | "Justice and Personal Desert", in *Doing and Deserving* (1970) | desert bases | [5.4](lessons/05-04-markets-and-desert.md) |
| Miller | *Principles of Social Justice* (1999) | contribution as desert basis | [5.4](lessons/05-04-markets-and-desert.md) |
| Nozick | *Anarchy, State, and Utopia* (1974) | entitlement; Wilt Chamberlain (cited to `political-philosophy` 2.4) | [5.4](lessons/05-04-markets-and-desert.md) |
| Hayek | "The Use of Knowledge in Society", *AER* (1945); *The Constitution of Liberty* (1960) ch. 6; *Law, Legislation and Liberty* vol. 1 *Rules and Order* (1973), vol. 2 *The Mirage of Social Justice* (1976) | knowledge problem; value and merit; spontaneous order; social justice | [5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md) |
| Young | *Responsibility for Justice* (2011) | structural injustice | [5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md) |
| Mäki | "On the method of isolation in economics" (1992); ed., 2009 Cambridge volume on Friedman's essay | isolation; realist reading of Friedman | [6.1](lessons/06-01-idealization-and-isolation.md), [6.2](lessons/06-02-friedmans-as-if-and-its-critics.md) |
| McMullin | "Galilean Idealization" (1985) | Galilean idealization | [6.1](lessons/06-01-idealization-and-isolation.md) |
| Cartwright | *Nature's Capacities and their Measurement* (1989) | capacities | [6.1](lessons/06-01-idealization-and-isolation.md) |
| Gorman; Kirman | (1953); "Whom or what does the representative individual represent?" (1992) | aggregation; the representative agent critique | [6.1](lessons/06-01-idealization-and-isolation.md) |
| Friedman | "The Methodology of Positive Economics", in *Essays in Positive Economics* (1953) | the as-if thesis | [6.2](lessons/06-02-friedmans-as-if-and-its-critics.md) |
| Samuelson | *AER* Papers and Proceedings (1963) | naming the F-twist | [6.2](lessons/06-02-friedmans-as-if-and-its-critics.md) |
| Lester; Alchian | *AER* (1946); *JPE* (1950) | survey evidence; the selection argument | [6.2](lessons/06-02-friedmans-as-if-and-its-critics.md) |
| Musgrave | "'Unreal Assumptions' in Economic Theory: The F-Twist Untwisted", *Kyklos* (1981) | three kinds of assumption | [6.2](lessons/06-02-friedmans-as-if-and-its-critics.md) |
| Hausman | "Why Look Under the Hood?", in *Essays on Philosophy and Economic Methodology* (1992) | the realist response | [6.2](lessons/06-02-friedmans-as-if-and-its-critics.md) |
| Dray | *Laws and Explanation in History* (1957) | how-possibly explanation | [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md) |
| Schelling | "Dynamic Models of Segregation", *Journal of Mathematical Sociology* (1971) | the segregation model | [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md) |
| Grüne-Yanoff | "Learning from Minimal Economic Models", *Erkenntnis* (2009) | minimal models | [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md) |
| Sugden | "Credible Worlds", *Journal of Economic Methodology* (2000) | credible worlds | [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md) |
| Reiss | "The Explanation Paradox", *Journal of Economic Methodology* (2012); symposium (2013) | the explanation paradox | [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md) |
| Akerlof | (1970) | the lemons model | [6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md) |

## Assumed, not taught here

Every prerequisite the lessons use without deriving, with the course that teaches it. Built
lessons are linked directly; courses not yet built link to their syllabus, with the lesson number
the syllabus gives.

**Ethics and method**

| Fact | Where it's taught |
|---|---|
| Theories of well-being (hedonism, desire satisfaction, objective list); adaptive preference run through them | [`ethics` 1.2](../ethics/lessons/01-02-what-is-good-for-a-person.md) |
| Demandingness; Scheffler's agent-centred prerogative (Arrow's remedy) | [`ethics` 1.4](../ethics/lessons/01-04-integrity-and-demandingness.md) |
| Criterion of rightness vs decision procedure (Adler and Posner) | [`ethics` 1.5](../ethics/lessons/01-05-modern-consequentialism.md) |
| Respect for persons (Arnold and Bowie) | [`ethics` 2.3](../ethics/lessons/02-03-humanity-autonomy-and-the-lie.md) |
| Constraints and options: deontological claims (Kelman) | [`ethics` 2.4](../ethics/lessons/02-04-constraints-and-options.md) |
| Incommensurable basic goods in natural law (the older form of Anderson's thesis) | [`ethics` 4.5](../ethics/lessons/04-05-the-new-natural-law-theory.md) |
| Finding the crux | [`philosophical-method` 4.3](../philosophical-method/lessons/04-03-finding-the-crux.md) |
| Steelmanning and the burden of proof | [`philosophical-method` 4.2](../philosophical-method/lessons/04-02-steelmanning-and-the-burden-of-proof.md) |
| Reflective equilibrium; intuitions as evidence | [`philosophical-method` 3.4](../philosophical-method/lessons/03-04-intuitions-and-reflective-equilibrium.md) |

**Philosophy of debt hand-offs**

| Fact | Where it's taught |
|---|---|
| Present value and the discount factor $1/(1+r)^T$; a century's discounting | [`philosophy-of-debt` 6.2](../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md) ([its card](../philosophy-of-debt/reference.md#discounting)) |
| The split $r=\rho+\sigma g$ (this course's $\delta+\eta g$); interest and the justice of charging for waiting | [`philosophy-of-debt` 2.3](../philosophy-of-debt/lessons/02-03-justifying-interest.md) |
| The non-identity problem, run on public debt | [`philosophy-of-debt` 6.2](../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md) ([its card](../philosophy-of-debt/reference.md#non-identity-problem)) |
| Wertheimer's exploitation: unfair advantage, fair market value, mutually advantageous exploitation | [`philosophy-of-debt` 3.1](../philosophy-of-debt/lessons/03-01-what-exploitation-is.md) ([its card](../philosophy-of-debt/reference.md#exploitation)) |
| The non-worseness claim | [`philosophy-of-debt` 3.2](../philosophy-of-debt/lessons/03-02-predatory-lending-and-usury-caps.md) ([its card](../philosophy-of-debt/reference.md#non-worseness-claim)) |
| Inalienability (no transfer even by gift) | [`philosophy-of-debt` 3.3](../philosophy-of-debt/lessons/03-03-what-may-be-pledged.md) |
| Interest as a slice of surplus value (Marx) | [`philosophy-of-debt` 2.4](../philosophy-of-debt/lessons/02-04-marx-interest-bearing-capital.md) |
| Intergenerational debt (Jefferson-Madison) | [`philosophy-of-debt` 6.1](../philosophy-of-debt/lessons/06-01-the-earth-belongs-to-the-living.md) |

**Microeconomics and public economics**

| Fact | Where it's taught |
|---|---|
| Preference orderings and utility representation | [`grad-micro` 2.1](../grad-micro/lessons/02-01-preferences-utility-representation.md) |
| Expected utility | [`grad-micro` 2.5](../grad-micro/lessons/02-05-choice-under-uncertainty.md) |
| WARP, SARP, GARP, Afriat's theorem | [`grad-micro` 2.6](../grad-micro/lessons/02-06-revealed-preference.md) |
| Production functions, marginal products, CES | [`grad-micro` 3.1](../grad-micro/lessons/03-01-production-sets-technology.md) |
| Aggregation: the representative firm is exact; Gorman form named | [`grad-micro` 3.4](../grad-micro/lessons/03-04-aggregation-and-the-firm.md) |
| Price-taking and surplus | [`grad-micro` 4.1](../grad-micro/lessons/04-01-partial-equilibrium-surplus.md) |
| First and second welfare theorems | [`grad-micro` 4.4](../grad-micro/lessons/04-04-two-welfare-theorems.md) |
| Sonnenschein-Mantel-Debreu | [`grad-micro` 4.6](../grad-micro/lessons/04-06-uniqueness-stability-failure.md) |
| The lemons model derived | [`grad-micro` 5.1](../grad-micro/lessons/05-01-adverse-selection-lemons.md) |
| $n$-firm Cournot | [`grad-micro` 6.2](../grad-micro/lessons/06-02-oligopoly.md) |
| Coase: the assignment of rights decides who pays whom | [`grad-micro` 6.3](../grad-micro/lessons/06-03-externalities-coase-theorem.md) |
| Social welfare functions (utilitarian, Rawlsian) | [`grad-micro` 6.5](../grad-micro/lessons/06-05-social-choice-welfare.md) |
| Arrow's theorem (Pareto as one condition) | [`grad-game-theory` 5.1](../grad-game-theory/lessons/05-01-social-choice-impossibility.md) |
| Matching theory; kidney exchange as an application | [`grad-game-theory` 6.3](../grad-game-theory/lessons/06-03-stable-matching-market-design.md), [`game-theory-refresher` 4.2](../game-theory-refresher/lessons/04-02-mechanism-design.md) |
| Equivalent and compensating variation | [`public-economics` 2.3](../public-economics/lessons/02-03-excess-burden-and-the-harberger-triangle.md) |
| Social marginal welfare weights, normalized to average one | [`public-economics` 4.2](../public-economics/lessons/04-02-many-person-ramsey-and-corlett-hague.md), [5.1](../public-economics/lessons/05-01-the-linear-income-tax.md) ([its card](../public-economics/reference.md#social-marginal-welfare-weights)) |
| Prices vs quantities (Weitzman 1974) | [`public-economics` 3.2](../public-economics/reference.md#weitzman-rule) ([two Weitzman results](#two-weitzman-results)) |
| Government time inconsistency: the capital levy | [`public-economics` 6.2](../public-economics/lessons/06-02-chamley-judd-and-the-exploding-wedge.md); [`economics-of-debt` 8.1](../economics-of-debt/lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) |
| The Keynes-Ramsey rule; $\rho,\sigma$ and $\delta$ as depreciation | [`grad-macro` 2.3](../grad-macro/lessons/02-03-ramsey-cass-koopmans.md) |
| The Solow model (6.2's problem) | [`grad-macro` 2.1](../grad-macro/lessons/02-01-solow-model.md) |
| Identification and potential outcomes | [`econometrics` 3.1](../econometrics/lessons/03-01-potential-outcomes-identification.md) |

**Courses not yet built**

| Fact | Where it's taught |
|---|---|
| Harsanyi's theorem; ex ante vs ex post Pareto; Diamond's objection (5.1-5.2); population ethics, non-identity (5.3-5.4); status of the axioms (1.4); prospect theory (2.3-2.4) | [`decision-theory`](../decision-theory/syllabus.md) |
| Sen's liberal paradox: proof and escapes (4.1-4.2) | [`social-choice`](../social-choice/syllabus.md) |
| Rawls and undeserved endowments (2.2-2.3); Nozick (2.4); capabilities as the currency of justice (2.5); luck egalitarianism (2.6); soft and hard paternalism (3.2-3.3); Young's structural injustice (4.4) | [`political-philosophy`](../political-philosophy/syllabus.md) |
| Polanyi's fictitious commodities; commodification as social theory (2.3, 5.3) | [`social-theory`](../social-theory/syllabus.md) |
| Explanation (D-N, causal, unification) 4.1-4.3; realism and instrumentalism 5.1-5.4 | [`philosophy-of-science`](../philosophy-of-science/syllabus.md) |
| The just wage and the universal destination of goods (4.2) | [`catholic-social-teaching`](../catholic-social-teaching/syllabus.md) |
| Collective action, where no participant chose the aggregate (3.1-3.2) | [`political-economy`](../political-economy/syllabus.md) |
| Marx's alienated labour and theory of history | [`history-of-political-thought` 6.5](../history-of-political-thought/lessons/06-05-marx-from-hegel-to-historical-materialism.md) |

## Pitfalls

### Mixing kinds of claim

- **"People prefer A, so A is better for them."** The first is empirical, the second conceptual
  (P2), and "the state should provide A" also needs welfarism. No survey tests the bridge.
  *([1.1](lessons/01-01-welfarism-and-preference-satisfaction.md))*
- **"The Asian disease data show people are irrational."** The data show choices shift with
  descriptions; "irrational" adds that the options were the same and that invariance binds.
  *([2.2](lessons/02-02-the-behavioural-challenge.md))*
- **"Evidence that nudges work shows they are justified."** Take-up is empirical; better for them is
  normative and needs the as-judged-by-themselves premise.
  *([2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md))*
- **"Passing a compensation test means losers are compensated."** Could (conceptual), will
  (empirical), need not (normative). *([3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md), [3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md))*
- **"The VSL is 7 million" or "the market rate is 5 percent" is a finding.** Each mixes a datum, a
  conceptual identification and a normative use. *([3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md), [4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md))*
- **"Pigou's diagnosis settles the social rate."** That impatience is a perceptual defect says nothing
  yet about what the state owes the future. *([4.1](lessons/04-01-why-discount.md))*
- **"Gamma discounting resolves an empirical uncertainty."** Much of the disagreement is about
  $\delta$, a normative parameter. *([4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md))*
- **"Crowding-out evidence proves the corruption argument."** It supports only premise 2's empirical
  half. *([5.1](lessons/05-01-commodification.md))*
- **"Roth argues repugnant markets should be legal."** His central claim is empirical.
  *([5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md))*
- **"Sweatshop jobs beat the alternatives, so the debate is over."** Both sides can grant it.
  *([5.3](lessons/05-03-exploitation-in-labour-markets.md))*
- **"The F-twist is an empirical claim."** It is a methodological norm; survey evidence cannot touch it.
  *([6.2](lessons/06-02-friedmans-as-if-and-its-critics.md))*
- **"Segregation can arise from mild preferences, so it does, so no one is to blame."** Modal,
  empirical, normative: three claims. *([6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md))*

### Welfare and its measures

- **Rejecting welfarism is rejecting the preference-satisfaction view.** Different questions;
  "efficiency ignores fairness" hits the first, "people want what is bad for them" the second.
  *([1.1](lessons/01-01-welfarism-and-preference-satisfaction.md))*
- **Laundering removes only irrational preferences.** A malicious preference can be informed and
  consistent; the filter is a moral standard. *([1.1](lessons/01-01-welfarism-and-preference-satisfaction.md))*
- **Summed WTP avoids interpersonal comparison.** It fixes the weights at par.
  *([1.2](lessons/01-02-money-and-happiness-as-measures.md))*
- **Life satisfaction is a hedonic measure.** It asks for a judgment of a life; affect measures lean
  hedonist. *([1.2](lessons/01-02-money-and-happiness-as-measures.md))*
- **The HDI measures capabilities.** It measures achieved functionings and a resource.
  *([1.3](lessons/01-03-capabilities-as-a-welfare-metric.md))*
- **The geometric mean is correct, the arithmetic a mistake.** One is mathematics about imbalance;
  penalizing imbalance is normative. *([1.3](lessons/01-03-capabilities-as-a-welfare-metric.md))*
- **Capabilities are paternalistic, settled.** The capability/functioning distinction is built to
  answer that; whether it succeeds is open. *([1.3](lessons/01-03-capabilities-as-a-welfare-metric.md))*

### Choice and rationality

- **A WARP violation proves irrationality.** It proves no single ordering over the bundles *as
  described* fits. *([2.1](lessons/02-01-preference-and-revealed-preference.md))*
- **"Revealed preferred" is a finding about her mind.** It is a defined relation on data.
  *([2.1](lessons/02-01-preference-and-revealed-preference.md))*
- **Sympathy is the opposite of self-interest.** On Sen's definition sympathetic action raises your own
  welfare; commitment is what breaks the inference. *([2.1](lessons/02-01-preference-and-revealed-preference.md))*
- **Beta-delta is hyperbolic discounting.** It is quasi-hyperbolic: two future rewards flip only when
  the earlier becomes immediate. *([2.2](lessons/02-02-the-behavioural-challenge.md))*
- **Present bias is the capital-levy kind of time inconsistency.** There the preferences never change;
  capital becomes sunk. *([2.2](lessons/02-02-the-behavioural-challenge.md))*
- **"Libertarian" means the nudge cannot wrong anyone.** The manipulation objection grants free
  opt-out and attacks control over one's choosing. *([2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md))*
- **Bernheim-Rangel is value-free.** Equal standing of frames is a value judgment; trimming imports a
  theory of mistakes. *([2.3](lessons/02-03-nudges-and-behavioural-welfare-economics.md))*

### Efficiency and cost-benefit analysis

- **A Pareto optimum improves on where we are.** $U$ is optimal and leaves Ben worse off than $S$.
  *([3.1](lessons/03-01-the-pareto-principle.md))*
- **Policy "efficiency" means Pareto efficiency.** It usually means Kaldor-Hicks.
  *([3.1](lessons/03-01-the-pareto-principle.md))*
- **The first welfare theorem shows markets are good.** Mathematical and conditional; the conditions
  are empirical; the goodness normative. *([3.1](lessons/03-01-the-pareto-principle.md))*
- **Kaldor-Hicks avoids interpersonal comparison.** It avoids comparing utilities, not weighing
  dollars equally. *([3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md))*
- **A spurious-unanimity bet fails Pareto.** It passes ex ante Pareto; that is the objection.
  *([3.2](lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md))*
- **The VSL is what a life is worth.** It is a marginal rate over small risks.
  *([3.3](lessons/03-03-cost-benefit-analysis-and-the-value-of-a-life.md))*
- **"You can't put a price on it" is one objection.** At least four, one per premise.
  *([3.4](lessons/03-04-cbas-critics-and-defenders.md))*
- **Sagoff's point is that people answer surveys badly.** It is conceptual: an accurate WTP for a
  judgment measures the wrong thing. *([3.4](lessons/03-04-cbas-critics-and-defenders.md))*
- **Adler and Posner defend CBA as the truth about right action.** They give that up.
  *([3.4](lessons/03-04-cbas-critics-and-defenders.md))*
- **A uniform VSL is neutral.** It is a distributional weight on mortality only.
  *([3.4](lessons/03-04-cbas-critics-and-defenders.md))*

### Discounting

- **$\delta=0$ means "don't discount".** It means "don't discount welfare"; growth discounting
  remains. *([4.1](lessons/04-01-why-discount.md))*
- **Pigou's defect is present bias.** His constant 5 percent is time-consistent.
  *([4.1](lessons/04-01-why-discount.md))*
- **The opportunity-cost argument is neutral bookkeeping.** It is a potential-compensation test.
  *([4.1](lessons/04-01-why-discount.md))*
- **The Stern-Nordhaus gap is about $\delta$.** $\eta$ can do $\delta$'s work; markets pin only $r$.
  *([4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md))*
- **$\eta$ is empirical because risk-taking estimates it.** Own gambles and generational weighting are
  different questions sharing a parameter. *([4.2](lessons/04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md))*
- **A declining rate means growing patience.** $\delta$ is fixed; the decline comes from averaging.
  *([4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md))*
- **"Lowest possible rate" means a likely low rate.** Any positive probability.
  *([4.3](lessons/04-03-uncertainty-the-long-run-and-future-people.md))*
- **Reading 2.2's $\delta$ as Module 4's, or Weitzman 1974 as Weitzman 1998.** See
  [delta two ways](#delta-two-ways) and [two Weitzman results](#two-weitzman-results).

### Markets, exploitation and desert

- **The fairness argument is against markets.** It is against inequality.
  *([5.1](lessons/05-01-commodification.md))*
- **Commodification is inalienability.** Market-inalienability bars only sale.
  *([5.1](lessons/05-01-commodification.md))*
- **"Noxious" means "ban it".** Premise 5 often points to regulation or the background.
  *([5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md))*
- **A good that may not be sold may not be transferred.** Blocking comes in degrees.
  *([5.2](lessons/05-02-repugnant-markets-and-blocked-exchanges.md))*
- **Marx says workers are underpaid.** They are paid the full value of labour-power.
  *([5.3](lessons/05-03-exploitation-in-labour-markets.md))*
- **The withdrawal test is a policy proposal.** It is a counterfactual definition.
  *([5.3](lessons/05-03-exploitation-in-labour-markets.md))*
- **Marginal productivity theory says workers deserve their wages.** It says what competitive wages
  are. *([5.4](lessons/05-04-markets-and-desert.md))*
- **A lower wage after a demand shock shows she contributes less.** Only on a value measure.
  *([5.4](lessons/05-04-markets-and-desert.md))*
- **Nozick defends market incomes as deserved.** As entitlements. *([5.4](lessons/05-04-markets-and-desert.md))*
- **Hayek claims market outcomes are just.** Neither just nor unjust.
  *([5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md))*
- **The knowledge problem settles the justice question.** It is epistemic; C1 needs a conceptual
  premise. *([5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md))*
- **"No one intended it" means "no one is responsible".** That is premise 1 at work.
  *([5.5](lessons/05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md))*
- **This course's crowding out is `public-economics`'.** There it is public provision displacing
  private giving. *([5.1](lessons/05-01-commodification.md))*

### Models

- **A harmless idealization is a small one.** What matters is whether de-idealizing moves the answer
  to the question asked. *([6.1](lessons/06-01-idealization-and-isolation.md))*
- **"The assumptions are unrealistic" refutes a model.** Only if the mechanism does not operate or
  combine as modelled. *([6.1](lessons/06-01-idealization-and-isolation.md))*
- **The representative agent's utility is social welfare.** Gorman secures aggregation, not that.
  *([6.1](lessons/06-01-idealization-and-isolation.md))*
- **"Unrealistic" means "false".** Often it means incomplete. *([6.2](lessons/06-02-friedmans-as-if-and-its-critics.md))*
- **Good predictions show assumptions harmless everywhere.** Only in the domain tested.
  *([6.2](lessons/06-02-friedmans-as-if-and-its-critics.md))*
- **How-possibly is a weaker how-actually.** It answers a different question.
  *([6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md))*
- **A model that explains must predict.** That is Friedman's standard, not Schelling's.
  *([6.3](lessons/06-03-how-possibly-models-and-credible-worlds.md))*

## Conventions

- **One card per course**, covering all 21 lessons. The linter checks that every lesson file is cited
  somewhere on this card.
- **Headings are anchors.** Renaming a `###` breaks inbound lesson links. Headings are ASCII only, so
  Kelman's critique appears as "Kelmans ethical critique", Euler's theorem as "Eulers theorem", and
  Greek letters stay in the body.
- **No prose dollar signs** (see CLAUDE.md): money is written "120 dollars".
- **Verdict-neutral.** Entries state each position as its defenders state it, give the lessons'
  skeletons, and name the premise its critics attack. None records a verdict on CBA, $\delta=0$,
  nudges, kidney sales, sweatshops, market justice or Friedman.
- **Corrections over syllabus.** Where the build's checks corrected the syllabus or the lesson specs,
  the card follows the correction: Hayek's value-merit distinction is cited to *The Constitution of
  Liberty* (1960) ch. 6, not the *Mirage* (5.5); life-satisfaction ratings are a largely non-hedonic
  judgment, not simply hedonist-leaning SWB (1.2); the contribution/effort/compensation menu is the
  literature's, with Feinberg credited only for the desert basis (5.4); Sandel's fairness argument
  holds the coercion strand the lesson splits out (5.1); `economics-of-debt` 8.1 is government time
  inconsistency, not individual commitment (2.2-2.3); `grad-micro` 4.4 is cited only for the welfare
  theorems, not frontiers (3.1-3.2); the liberal paradox uses front doors, since `social-choice`
  reserves the book case (3.2); Titmuss is dated 1970 (UK first edition; 1971 is the US edition) (5.1);
  Walzer's blocked list is given without a count (5.2); Weitzman's sliding scale is given without
  year bands (4.3); no agency VSL, no Ravallion dollar figures, no real HDI values, no organ-donation
  rates are asserted.
- **Boss problems are reserved.** The card gives the lessons' own skeletons and figures and nothing
  beyond them: no HDI ranking of Boss 1's countries; no Boss 2 WARP data or $\beta=0.5$ reversal; no
  Boss 3 Kaldor example, 1-in-10,000 VSL or op-ed diagnosis; no Boss 4 present values under the
  Stern and Nordhaus calibrations, no 1-or-7 percent certainty-equivalent rate, no reading of Pigou on
  the state's duty and no named Stern-Nordhaus crux; no reading of *Capital* ch. 6's irony, no
  generator verdict and no Hayek-luck-egalitarian crux (Boss 5); no continuous lemons derivation, no
  Musgrave classification of its assumptions, no verdict on Mill as instrumentalist (Boss 6); and no
  essay verdicts.
- **Paraphrase rule.** Public-domain texts (Mill, Marx, Clark, Sidgwick, Pigou) are quoted as the
  lessons quote them. Modern authors are paraphrased and cited, never quoted at length.
