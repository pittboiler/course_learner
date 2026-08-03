# Political Economy & Social Choice — Syllabus

> Tier 2 · ~24 lessons · Prereqs: [`grad-game-theory`](../grad-game-theory/syllabus.md), [`micro-refresher`](../micro-refresher/syllabus.md) · Roadmap id: `political-economy`

## Goal

Turn the machinery of game theory and microeconomics loose on politics: model how preferences aggregate into collective decisions, how candidates compete for votes, how groups do (and mostly don't) organize, and how institutions shape who gets what. This is *positive* political theory — it asks what elections, legislatures, and constitutions actually *do*, using equilibrium reasoning rather than asking what they *should* do. You will finish able to run the median-voter and Downsian models, prove and dodge the classic impossibility theorems, solve legislative bargaining and redistribution models, and reason precisely about accountability, rent-seeking, and institutional change. Deliberately skipped: the heavy empirical/econometric political economy literature (identification, regression discontinuity on elections), comparative-politics area studies, and deep normative philosophy — the "should" questions live in [`political-philosophy`](../political-philosophy/syllabus.md), the formal companion to this course.

## Dangerous Checklist

When you finish, you can:

- [ ] State Arrow's impossibility theorem, name its axioms, and explain why no aggregation rule satisfies all of them
- [ ] Prove the median-voter theorem under single-peaked preferences and say exactly where it breaks
- [ ] Apply Gibbard–Satterthwaite to show a voting rule is manipulable, and identify domain restrictions that escape it
- [ ] Solve a Downsian two-candidate spatial election for equilibrium platforms and show convergence
- [ ] Show how a second policy dimension destroys equilibrium, and use probabilistic voting to restore one
- [ ] Explain Olson's logic of collective action: why large groups under-provide public goods and small ones don't
- [ ] Analyze a constitutional rule choice via the Buchanan–Tullock external-cost / decision-cost tradeoff
- [ ] Model elections as accountability under adverse selection and moral hazard, and reason about career concerns
- [ ] Compute the equilibrium of a rent-seeking (Tullock) contest and interpret the dissipated surplus
- [ ] Solve the Baron–Ferejohn legislative bargaining model for the proposer's equilibrium offer
- [ ] Solve the Meltzer–Richard model for the equilibrium tax rate as a function of the income distribution
- [ ] Explain a formal model of democratization as an elite's credible commitment under the threat of revolution

## Modules

### Module 1: Preference aggregation & social choice

The foundational problem — turning many rankings into one — and the theorems that say it can't be done cleanly.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The aggregation problem and Condorcet cycles | See why majority rule can be incoherent | social welfare function, Condorcet winner/paradox, voting cycles, transitivity failure |
| 1.2 | Arrow's impossibility theorem | Prove no rule satisfies the reasonable axioms | unrestricted domain, Pareto, IIA, non-dictatorship, decisive coalitions |
| 1.3 | Manipulation: the Gibbard–Satterthwaite theorem | Show strategy-proofness forces dictatorship | strategy-proofness, manipulability, onto/unanimity, link to Arrow |
| 1.4 | Single-peaked preferences and the median voter | Find the domain restriction that rescues majority rule | single-peakedness, ideal points, median-voter theorem, Black's theorem |
| 1.5 | Restricted domains and other escapes | Map the ways out of impossibility | value restriction, single-crossing, quasi-transitivity, cardinal information |

**Boss problem 1:** Take a 3-voter, 3-alternative profile that produces a Condorcet cycle; verify no Condorcet winner exists, then check each of Arrow's four axioms against pairwise majority rule to locate exactly which one the cycle violates. Finally, re-order preferences to make the profile single-peaked on a common axis and show the median voter's ideal point is now the Condorcet winner.

### Module 2: Voting & electoral competition

Candidates as strategic players in policy space — where the median-voter result lives, and where it dies.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The Downsian spatial model | Model elections as competition on a line | policy space, vote-share maximization, platform convergence, Hotelling analogy |
| 2.2 | Multidimensional voting and chaos | See why equilibrium vanishes in $\ge 2$ dimensions | McKelvey chaos theorem, the core in policy space, Plott conditions, agenda control |
| 2.3 | Probabilistic voting | Restore equilibrium with noisy voters | probabilistic voting model, expected vote share, weighted social welfare, swing voters |
| 2.4 | Valence, candidate quality, and divergence | Add non-policy advantages and let platforms separate | valence, citizen-candidate model, policy divergence, entry |
| 2.5 | Turnout and the paradox of voting | Ask why anyone votes at all | pivotal-voter calculus, paradox of voting, expressive/ethical voting, group turnout |
| 2.6 | Multi-candidate systems and strategic voting | Move beyond two candidates | Duverger's law, plurality vs runoff, strategic/sincere voting, wasted votes |

**Boss problem 2:** Solve a two-candidate Downsian election with single-peaked voters for the equilibrium platforms and prove both converge to the median voter's ideal point. Then add a second, orthogonal policy dimension and show — via a specific vote-splitting deviation — that no platform is a Condorcet winner, so the pure-strategy equilibrium disappears. Briefly state how probabilistic voting would restore one.

### Module 3: Collective action & institutions

Why groups fail to act in their shared interest, and how rules are chosen to fix (or exploit) that.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Public goods and the free-rider problem | Formalize why voluntary provision fails | non-excludability, non-rivalry, free riding, Samuelson condition |
| 3.2 | Olson's logic of collective action | Explain why small groups organize and large ones don't | group size, selective incentives, latent vs privileged groups, by-product theory |
| 3.3 | The commons and common-pool resources | Model over-extraction and Ostrom's escapes | tragedy of the commons, congestion, Ostrom's design principles, self-governance |
| 3.4 | Constitutions and the choice of rules | Pick a voting threshold as an optimization | Buchanan–Tullock calculus, external costs vs decision costs, unanimity, constitutional stage |
| 3.5 | Veto players and the status quo | See how many veto points freeze policy | veto players, the status quo, gridlock interval, agenda setter |

**Boss problem 3:** Using the Buchanan–Tullock framework, write total expected cost as the sum of an external-cost function (decreasing in the required majority $k$) and a decision-cost function (increasing in $k$). Minimize over $k$ to find the constitutionally optimal majority requirement, and explain why the optimum is generally neither simple majority nor unanimity — and what shifts it toward each.

### Module 4: Accountability & political agency

Politicians as agents: elections as an imperfect contract, and the interest groups working around it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Elections as accountability | Model the voter–politician relationship as agency | principal–agent, retrospective voting, adverse selection, moral hazard |
| 4.2 | Career concerns and political agency | See how re-election incentives discipline (and distort) | career concerns, reputation, pandering, term limits |
| 4.3 | Lobbying and special interests | Model policy sold to organized groups | menu auctions, Grossman–Helpman "protection for sale", informational lobbying |
| 4.4 | Regulatory capture | Explain why regulators serve the regulated | capture theory, revolving door, rational ignorance of voters, concentrated benefits |
| 4.5 | Rent-seeking contests | Compute the surplus dissipated in the scramble for rents | Tullock contest, rent dissipation, contest success function, deadweight loss of transfers |

**Boss problem 4:** Solve a Tullock rent-seeking contest: $n$ risk-neutral players expend effort $x_i$ to win a rent $R$, with win probability $x_i / \sum_j x_j$. Find the symmetric Nash equilibrium effort, compute total effort as a function of $n$, and show what fraction of the rent is dissipated as $n$ grows — interpreting the result as the social cost of politically created rents.

### Module 5: Conflict, coalitions & redistribution

Bargaining over the budget, forming governments, and the political economy of who pays and who receives.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Legislative bargaining: Baron–Ferejohn | Solve divide-the-dollar with a random proposer | proposer power, closed rule, minimum winning coalition, stationary equilibrium |
| 5.2 | Coalition and government formation | Predict which governments form | minimal winning coalitions, connected coalitions, formateur advantage, Gamson's law |
| 5.3 | The Meltzer–Richard model | Derive the equilibrium tax rate from the income distribution | linear tax + lump-sum transfer, decisive median voter, mean vs median income, labor distortion |
| 5.4 | The political economy of inequality | Link the income distribution to redistribution | skew, median/mean gap, "why don't the poor expropriate the rich," probabilistic-voting redistribution |
| 5.5 | Institutional change and democratization | Model regime change as credible commitment | Acemoglu–Robinson, revolution constraint, de jure vs de facto power, franchise extension as commitment |

**Boss problem 5:** Solve the Meltzer–Richard model. Voters have heterogeneous productivity and choose labor supply under a linear income tax $t$ that funds a uniform lump-sum transfer; a higher $t$ redistributes but distorts labor. Derive each voter's most-preferred tax rate, invoke single-peakedness to make the median-income voter decisive, and obtain the equilibrium $t^*$ as a function of the ratio of mean to median income. Interpret: why does greater inequality (mean pulling above median) predict more redistribution, and what force limits it?

## Sources of truth

- Persson & Tabellini, *Political Economics: Explaining Economic Policy* (primary; electoral competition, accountability, redistribution)
- Austen-Smith & Banks, *Positive Political Theory* I & II (social choice, spatial voting, careful proofs)
- Mueller, *Public Choice III* (comprehensive survey; collective action, constitutions, rent-seeking)
- Acemoglu & Robinson, *Economic Origins of Dictatorship and Democracy* (Module 5 institutional-change models)

## Notes

- This course is [`grad-game-theory`](../grad-game-theory/syllabus.md)'s mechanism-design and social-choice machinery aimed squarely at politics: it extends that course's Arrow and Gibbard–Satterthwaite results (there stated as the "limits before designing" in mechanism design) into a full theory of preference aggregation, and reuses its Bayesian-game and bargaining tools for political agency and legislative bargaining.
- It is the formal companion to [`political-philosophy`](../political-philosophy/syllabus.md): where that course asks normatively what institutions *should* do (justice, legitimacy, rights), this one asks positively what they *do* — the equilibrium behavior that a given set of rules actually produces. Read together, the median-voter theorem here and theories of democratic legitimacy there are two lenses on the same institution.
- The redistribution and inequality models (Module 5) lean on the utility-maximization and labor-supply apparatus of [`micro-refresher`](../micro-refresher/syllabus.md).
