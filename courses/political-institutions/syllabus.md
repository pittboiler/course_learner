# Political Institutions — Syllabus

> Politics & Society · Tier 1 · ~25 lessons · Prereqs: none · Roadmap id: `political-institutions`

## Goal

This is the concrete ground the rest of Politics & Society stands on: how democratic institutions are actually built, and what each design is observed to do. It works by comparing real systems — the United States, the United Kingdom, Germany and France throughout, with the Netherlands, Israel, New Zealand, Japan, Switzerland, Canada, Spain and Australia brought in where they show a mechanism more cleanly. You will finish able to allocate seats by hand under any common electoral formula, measure how proportional the result is, trace a government crisis through a parliamentary, presidential or semi-presidential constitution, say why a bill with majority support never reached the floor, place a country's federalism and judicial review on the comparative map, and name the single trade-off two institutional designs disagree about. The course is descriptive and verdict-neutral: it reports what designs do and what their defenders and critics claim, and never argues that one is better. It deliberately skips the formal models behind these institutions (the strategic-voting equilibrium, veto-player and agenda-setter models), apportionment paradoxes, US constitutional doctrine, regime types and democratization, and the normative case for democracy — each has an owner below.

**Scope discipline.**

| Topic | Owner | Here |
|---|---|---|
| Strategic-voting equilibrium behind Duverger's law; spatial and multidimensional agenda models | [`political-economy`](../political-economy/syllabus.md) (Module 2) | Duverger's law as an observed regularity: mechanical vs psychological effects, the evidence and the exceptions (2.3). No equilibrium derivation |
| Veto-player and agenda-setter models; the gridlock interval | [`political-economy`](../political-economy/syllabus.md) (3.5) | Veto points and gatekeeping described institution by institution (3.3, 4.2); the model is cited, not solved |
| Coalition-formation models (minimal winning coalitions, Gamson's law, Baron–Ferejohn) | [`political-economy`](../political-economy/syllabus.md) (5.1–5.2) | The procedures of government formation — formateurs, investiture, coalition agreements, minority governments — and the observed patterns (3.2) |
| Accountability, career concerns, regulatory capture as models | [`political-economy`](../political-economy/syllabus.md) (Module 4); principal–agent contracts in [`grad-micro`](../grad-micro/syllabus.md) (5.4) | Delegation and oversight as institutional choices: agency design, police patrols vs fire alarms, independence (6.2) |
| Apportionment paradoxes and axioms (Alabama paradox, house monotonicity, Balinski–Young) | `social-choice` | Formulas used to allocate seats among parties, computed by hand; their paradoxes named and pointed at the owner |
| Arrow, May, scoring-rule properties of ranked ballots | `social-choice` | Alternative vote and STV as counting procedures, with non-monotonicity mentioned only as a pointer (1.2) |
| US constitutional doctrine (Marbury, the Commerce Clause, separation-of-powers cases) | `constitutional-law` | The US as one design among several in comparative judicial review and federalism (5.1, 5.3); no doctrine |
| Regime types, authoritarianism, democratization, backsliding | `comparative-politics`; formal models in `institutions-and-development` | Democracies only; the course takes the democratic frame as given |
| Normative arguments for democracy; the counter-majoritarian difficulty as a question of legitimacy | [`political-philosophy`](../political-philosophy/syllabus.md) (5.2) | Courts' observed powers and the design choices around them; the legitimacy argument is cited |
| Fiscal federalism (assignment of taxes and spending, Tiebout) | `public-economics` | The political structure of federations; fiscal arrangements described, not modelled (5.2) |
| Weber's account of bureaucracy as sociology | `social-theory` | Merit vs patronage civil services as institutional design (6.1) |
| Causal identification of institutional effects (close-election RD, diff-in-diff on reforms) | `empirical-political-economy` | Observed effects reported with the strength of the evidence stated in words |

## How practice works in this course

Problems follow [HUMANITIES-BUILD-BRIEF.md](../../HUMANITIES-BUILD-BRIEF.md): every part declares its kind, and every solution is a rubric (must-hit moves, wrong turns) plus a model answer. Four archetypes carry most of the load, because they suit institutions:

- **Formal model** — allocate seats under two formulas, compute a disproportionality index or the effective number of parties, find an effective threshold. Ordinary math, graded strictly; every vote table in a lesson is recomputed by script before it ships.
- **Diagnose** — an invented news report or policy memo describes an outcome (a hung parliament, a bill that died in committee, a law struck down); name the institutional feature that explains it. Exegetical.
- **Find the crux** — two designs (MMP vs parallel, strong vs weak-form review, presidential vs parliamentary) and the single trade-off their defenders disagree about. Exegetical.
- **Apply to a hard case** — run a design rule (constructive no-confidence, the Sewel convention, a turnout quorum) on a novel case and say where it stops determining the outcome. Exegetical, then evaluative.

Evaluative parts are verdict-neutral: arguing for Westminster or for consensus democracy passes equally if the required moves are made. All country cases are invented or described in the lesson's own words; no quotations from modern copyrighted scholarship.

## Dangerous Checklist

When you finish, you can:

- [ ] Allocate seats by hand under D'Hondt, Sainte-Laguë, Hare and Droop largest remainders, and say which kind of party each formula favours and why
- [ ] Count an alternative-vote or STV election by hand, including surplus transfers under a Droop quota
- [ ] Explain how a mixed-member proportional system tops up constituency seats, and how it differs from a parallel system on the same ballot
- [ ] Compute the Gallagher index and the effective number of parties, and estimate a district's effective threshold from its magnitude
- [ ] Separate Duverger's mechanical effect from the psychological effect in an election result, and say why a country can defy the law
- [ ] Trace a government's formation and fall under Westminster, German, French and US rules, naming the confidence, dissolution and veto rules that decide each step
- [ ] Diagnose why a bill with majority support failed, naming the gatekeeper — committee, majority-party leadership, government control of the timetable, or a second chamber
- [ ] Place a party system by fragmentation and polarization, and relate it to the cleavages and electoral rules that produced it
- [ ] Classify a state as unitary, devolved or federal, and a federation as symmetric or asymmetric, coming-together or holding-together
- [ ] Compare judicial review across the US, Germany, France, the UK and Canada — who can strike down what, and who can override the court
- [ ] Explain why legislatures delegate to agencies and central banks, and choose between police-patrol and fire-alarm oversight for a given case
- [ ] Classify a referendum (mandatory, optional, initiative, abrogative), predict how quorums and double majorities change its outcome, and place a whole constitution on Lijphart's majoritarian–consensus map

## Modules

### Module 1: The mechanics of electoral systems

How votes become seats, formula by formula, computed by hand.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Anatomy of an electoral system: plurality and runoff | Name the three parts of any electoral system and count a single-member plurality and two-round election | ballot structure, district magnitude, electoral formula; first-past-the-post; two-round majority (France); plurality vs majority |
| 1.2 | Ranked ballots: the alternative vote and STV | Count an AV and an STV election by hand | alternative vote / instant runoff (Australia's House); Droop quota; surplus and elimination transfers (Ireland); non-monotonicity as a pointer to `social-choice` |
| 1.3 | List PR I: quotas and largest remainders | Allocate seats by Hare and Droop quotas and explain what the remainders do | party lists; Hare and Droop quotas; largest remainders; closed, open and flexible lists |
| 1.4 | List PR II: divisor methods | Allocate seats by D'Hondt and Sainte-Laguë and say whom each favours | highest averages; D'Hondt (divisors 1, 2, 3, …); Sainte-Laguë (1, 3, 5, …); large-party bias; single national districts (Netherlands, Israel) vs provincial districts (Spain) |
| 1.5 | Mixed systems: MMP and parallel | Compute an MMP top-up and contrast it with a parallel system on the same votes | two votes; compensatory (Germany, New Zealand) vs parallel (Japan); overhang and balance seats; Germany's 2023 reform removing them |

**Boss problem 1:** A six-seat district casts 48,000 votes for party A, 27,000 for B, 15,000 for C and 10,000 for D. (a) Allocate the seats under D'Hondt and under Sainte-Laguë, showing the quotient table. (b) Allocate them again by Hare largest remainders. (c) Explain, from the divisor sequences alone, why the two divisor methods treat the smallest party differently. (d) The same four parties contest a German-style MMP election in which A wins all constituency seats; say what determines the final seat shares and what an overhang would be. Parts (a)–(b) are formal; (c)–(d) are exegetical.

### Module 2: What electoral systems do

The observed effects: proportionality, the number of parties, and who writes the rules.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Measuring outcomes | Compute how disproportional a result is and how many parties really matter | Loosemore–Hanby and Gallagher (least-squares) indices; effective number of parties (Laakso–Taagepera), by votes and by seats |
| 2.2 | District magnitude and thresholds | Predict proportionality from magnitude and legal thresholds | magnitude as the master variable; effective threshold (roughly 75% / (M + 1)); legal thresholds (Germany's 5%); the seat product as a rule of thumb |
| 2.3 | Duverger's law, observed | Separate mechanical from psychological effects in real results | mechanical vs psychological effect; wasted votes; national vs district-level two-partism; regional parties (Canada, India); strategic-voting equilibrium cited to [`political-economy`](../political-economy/syllabus.md) |
| 2.4 | Districts and electoral reform | Diagnose malapportionment and gerrymandering, and explain when parties change the rules | malapportionment; packing and cracking; who draws lines (commissions vs legislatures); reform episodes: New Zealand to MMP, Japan to a mixed system, the UK's 2011 AV referendum |

**Boss problem 2:** Use the district from Boss problem 1. (a) Compute the Gallagher index and the effective number of parties (by votes and by seats) under both the D'Hondt and Sainte-Laguë allocations, and say which is more proportional by that measure — the answer is not the one the formulas' reputations suggest, so explain why. (b) Compute the district's effective threshold and use it to explain party D's fate under D'Hondt. (c) An invented country is weighing a move from six-seat districts to a single national list with a 5% threshold; diagnose which parties gain and lose, separating mechanical from psychological effects. (d) Find the crux between a reformer who wants proportionality and one who wants local constituency representation, and say what evidence would move each. Parts (a)–(b) are formal; (c)–(d) are exegetical.

### Module 3: Executive-legislative relations

Who forms the government, who can remove it, and what happens when the branches disagree.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Parliamentary government | Trace how a parliamentary government forms, survives and falls | fusion of executive and legislature; confidence and no-confidence; dissolution; Westminster conventions; Germany's constructive vote of no confidence |
| 3.2 | Forming governments: coalitions and minorities | Describe how coalitions and minority governments are actually built | formateur; investiture votes; coalition agreements; minority governments and support deals (Scandinavia, Canada); caretaker periods; models cited to [`political-economy`](../political-economy/syllabus.md) |
| 3.3 | Presidential government | Explain separate origin and separate survival, and what divided government does | fixed terms; the veto and override; divided government; decree and legislative powers; Linz's perils of presidentialism and the critiques of it (Cheibub) |
| 3.4 | Semi-presidential government | Place a semi-presidential system by the president's power over the cabinet | dual executive; premier-presidential vs president-parliamentary (Shugart–Carey); France and cohabitation; the 2000 reform aligning terms; government bills forced through the Assembly (Article 49.3) |

**Boss problem 3:** An invented scandal breaks: the head of government is accused of misconduct, and the largest governing party is split. (a) Trace what can happen next — who can remove the head of government, by what vote, and whether early elections follow — under Westminster conventions, the German Basic Law, the French Fifth Republic in and out of cohabitation, and the US Constitution. (b) Name the single rule in each system that most constrains the outcome. (c) Linz and his critics disagree about whether presidentialism itself endangers democracies; find the crux and say what cross-national evidence would move it. (d) In 150 words, steelman the fixed-term presidential design against the parliamentary one, then reply. Parts (a)–(c) are exegetical; (d) is evaluative.

### Module 4: Inside legislatures, and the parties that run them

How a bill actually moves, who can stop it, and how parties and party systems are organized.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Bicameralism | Classify second chambers by powers and composition | symmetric vs asymmetric; congruent vs incongruent; the US Senate, the Bundesrat (Länder governments), the House of Lords; navettes and conference committees |
| 4.2 | Committees and agenda control | Diagnose who decides what reaches the floor | committee systems (strong in Congress and the Bundestag, weaker at Westminster); the House Rules Committee; negative agenda control and the majority-party cartel (Cox–McCubbins); government control of the timetable; the filibuster; formal agenda-setter models cited |
| 4.3 | Parties: organization and discipline | Explain what makes legislators vote with their party | candidate selection; whips and discipline; the personal vote and ballot structure; party cohesion under parliamentary vs presidential rules; party finance in outline |
| 4.4 | Party systems | Place a party system by fragmentation and polarization, and relate it to its origins | Lipset–Rokkan cleavages and the freezing hypothesis; Sartori's moderate vs polarized pluralism; dominant-party systems; the rise of new parties and dealignment |

**Boss problem 4:** An invented memo reports that a bill with majority support in the lower chamber has not become law after two years. (a) Diagnose four distinct institutional gatekeepers that could explain this — one each from the US House, the US Senate, Westminster and the German Bundestag–Bundesrat relationship — and say what evidence in the memo would pick out each. (b) Explain why the same legislators would vote more cohesively under a parliamentary than a presidential constitution, naming the mechanism. (c) Apply a party-system classification to an invented election result with given vote shares and ideological positions. (d) Find the crux between a design with strong committees and one with strong party leadership. Parts (a), (b) and (d) are exegetical; (c) is formal (effective number of parties) then exegetical (classification).

### Module 5: Dividing power: federalism and courts

Power split vertically, between levels of government, and horizontally, with courts that can say no.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Federal, unitary, devolved | Classify a state's territorial structure and explain how federations are protected | constitutional guarantee of subnational autonomy; coming-together vs holding-together federalism (Stepan); territorial representation in the upper chamber; the US, Germany and Switzerland |
| 5.2 | Decentralization in practice | Describe asymmetric and devolved arrangements and the fiscal ties that bind them | UK devolution and the Sewel convention; Spain's autonomous communities; asymmetry; administrative vs dual federalism (Germany vs US); vertical fiscal imbalance and transfers; fiscal federalism theory cited to `public-economics` |
| 5.3 | Judicial review compared | Place a court on the map of review models | diffuse / decentralized (US) vs concentrated / Kelsenian (Germany's Federal Constitutional Court); abstract vs concrete review; France's Conseil constitutionnel, with a posteriori review added in 2008; parliamentary sovereignty in the UK |
| 5.4 | Weak-form review, appointments and independence | Compare who can override a court and who picks its judges | declarations of incompatibility (UK Human Rights Act); Canada's notwithstanding clause; appointment methods and terms; judicial independence; courts as policy actors; legitimacy debate cited to [`political-philosophy`](../political-philosophy/syllabus.md) |

**Boss problem 5:** An invented national law regulates a policy area that regional governments claim as theirs, and it also restricts a constitutionally protected right. (a) Say how the dispute would be resolved in the US, Germany, the UK (with respect to Scotland) and Canada — which body decides, on what kind of review, and whether the decision can be overridden. (b) Apply the Sewel convention to the UK case and say where the convention stops determining the outcome. (c) Find the crux between strong-form and weak-form judicial review as designs. (d) In 150 words, steelman the Canadian override against the German model, then reply as a defender of the German model would. Parts (a)–(c) are exegetical; (d) is evaluative.

### Module 6: Delegation, direct democracy, and the whole design

The state beyond elected officials, citizens deciding directly, and the patterns that tie the course together.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | Bureaucracy: merit and patronage | Compare how civil services are recruited and controlled | patronage vs merit systems; the UK's Northcote–Trevelyan reforms and the US Pendleton Act; permanent vs political appointees; Weber cited to `social-theory` |
| 6.2 | Delegation and oversight | Explain why legislatures delegate and how they keep control | expertise vs drift; statutory discretion; police patrols vs fire alarms (McCubbins–Schwartz); independent agencies and central banks; principal–agent logic cited to [`grad-micro`](../grad-micro/syllabus.md) |
| 6.3 | Direct democracy | Classify a referendum and predict how its rules change outcomes | mandatory, optional, initiative, abrogative; Switzerland's initiatives and double majority of people and cantons; California; Italy's turnout quorum; advisory vs binding (the 2016 UK referendum) |
| 6.4 | Majoritarian and consensus democracy | Place a whole constitution on Lijphart's two dimensions | executives-parties vs federal-unitary dimensions; the Westminster model vs the consensus model; the UK, Switzerland, Germany, the US as reference points; the contested claims about performance |

**Boss problem 6:** An invented new democracy — a country with two large linguistic regions and one national minority — asks for a constitutional design. (a) Choose an electoral formula and district magnitude, an executive type, a territorial structure, a form of judicial review, a delegation regime for the central bank, and referendum rules. For each, state the institutional mechanism it works through. (b) Place the package on Lijphart's two dimensions. (c) For three of the choices, name the crux trade-off with the leading alternative. (d) In 400 words, defend the package against its strongest objection — any design passes if the objection is stated at full strength and the reply addresses it. Parts (a)–(c) are exegetical; (d) is evaluative.

## Sources of truth

- Arend Lijphart, *Patterns of Democracy* (the majoritarian–consensus framework and the comparative dataset the course's country classifications follow)
- Michael Gallagher and Paul Mitchell (eds.), *The Politics of Electoral Systems*; Rein Taagepera and Matthew Shugart, *Votes from Seats* (electoral formulas, disproportionality, effective number of parties, the seat product)
- Matthew Shugart and John Carey, *Presidents and Assemblies* (executive typology); Giovanni Sartori, *Comparative Constitutional Engineering*
- Tom Ginsburg, *Judicial Review in New Democracies*, and Stephen Gardbaum, *The New Commonwealth Model of Constitutionalism* (comparative review, weak-form models)

## Notes

- **Lesson count.** The roadmap estimated ~22; the syllabus runs 25 (+14%, inside the band). Electoral mechanics need five lessons because each formula family is computed by hand, and the course carries six institutional domains, each needing at least three lessons to be practiced rather than listed.
- **Verified numbers.** Boss problems 1–2 use a district checked by script: D'Hondt gives A–B–C–D = 3–2–1–0, Sainte-Laguë 3–1–1–1, Hare largest remainders 3–2–1–0, with no ties in either quotient table. Gallagher index about 8.57 (D'Hondt) and 8.89 (Sainte-Laguë); effective number of parties 2.98 by votes, 2.57 and 3.00 by seats; effective threshold 75/7, about 10.7%. Recompute before the lesson ships, per the prep workflow.
- **Time-sensitive facts.** Electoral law changes often (Germany's 2023 reform was itself litigated). Lessons state rules as of a named year and avoid asserting details they cannot pin down; where a country's current rule is in flux, the lesson teaches the mechanism with the case as illustration.
- **Where this goes next.** It is the prerequisite for `comparative-politics` (regimes and backsliding take these institutions as vocabulary), `international-relations`, and `constitutional-law` (which takes the US design from 5.1 and 5.3 into doctrine). The formal companion is [`political-economy`](../political-economy/syllabus.md), whose Modules 2–3 model what Modules 2–4 here describe; its syllabus is due to be rewritten against `social-choice` and `public-economics`, so re-check the lesson numbers cited in the Scope discipline table when that happens. The normative questions — whether majority rule should yield to courts, whether proportionality is owed — belong to [`political-philosophy`](../political-philosophy/syllabus.md).
