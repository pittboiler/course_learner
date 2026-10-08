# Political Economy · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The course builds positive models of politics: voters (Module 1), candidates (Module 2), groups and rules (Module 3),
politicians as agents and the interests that court them (Module 4), and the division of budgets (Module 5). Almost every
result is an equilibrium of a stated game, and almost every error is a mis-stated game: wrong timing or commitment, wrong
information, wrong objective (vote share vs win probability), sincere where it should be strategic, static where it should
be repeated. Mid-problem, use the card three ways. To place a model, start at [Models at a glance](#models-at-a-glance).
To check a result's **hypotheses**, read its entry in [Models and definitions](#models-and-definitions): each gives the
game, the result, what it turns on and what it does not show. For arithmetic, go to [Formulas](#formulas). Where the
build's source checks corrected the syllabus, the card follows the lessons: deterministic valence kills pure equilibrium
only under vote-share objectives; Cox's runoff version of M+1 has $M=2$ advancing; the gridlock interval's upper end is
$\max(f',\min(p,v))$ with a moderate president; Peltzman's regulator picks an interior price; Olson's size claim is
split between Chamberlin (nonrival goods) and Hardin ($k$, not $n$); Holmström is cited as RES 1999 only;
Snyder-Ting-Ansolabehere is AER 2005; Warwick-Druckman wrote two papers (the lessons cite the EJPR 2006 one); a symmetric
Tullock equilibrium exists iff $r\le n/(n-1)$.

## Notation

Symbols in first-appearance order. Letters are heavily reused across modules: see [Notation warnings](#notation-warnings).

| Symbol | Means | First used |
|---|---|---|
| $N=\{1,\dots,n\}$, $x_i$, $q$ | voters; voter $i$'s ideal point; a policy | [1.1](lessons/01-01-from-ballots-to-policy-space.md) |
| $u_i^E$, $u_i^Q$ | [Euclidean and quadratic utility](#euclidean-and-quadratic-utility) | [1.1](lessons/01-01-from-ballots-to-policy-space.md) |
| $y_i$, $\bar y$, $y_m$, $\lambda$, $\tau_i$, $t$ | income, mean, median; leak parameter; unconstrained ideal tax; tax rate | [1.1](lessons/01-01-from-ballots-to-policy-space.md) |
| $P$, $B$, $C$, $D$, $R$ | pivot probability, stake, cost, duty term, return to voting ([calculus of voting](#calculus-of-voting)) | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md) |
| $p$, $\Delta(p)$, $g$ | prob. each other votes A; KL rate $-\tfrac12\ln(4p(1-p))$; belief density over $p$ | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md) |
| $c$, $\gamma_g$, $N_g$ | voting cost; group cost cutoff; group size ([group-based turnout](#group-based-turnout)) | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md) |
| $\omega$, $\mu$, $q$, $m_A,m_B$ | state; prior $\Pr(\omega=A)$; prob. an independent is informed; partisan counts | [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md) |
| $\pi_t$, $v$, $d$, $\Delta_A$ | tie probability; stake; others' margin; gain from voting A ([conditioning on pivotality](#conditioning-on-pivotality)) | [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md) |
| $\pi(m\mid\omega)$, $\mu'(m)$, $\mu^*$ | signal; posterior; receiver's threshold ([Bayesian persuasion](#bayesian-persuasion)) | [1.4](lessons/01-04-persuasion-and-the-media.md) |
| $\hat v$, $V$, $\alpha(m)$ | sender payoff of a posterior; its concave closure; approval prob. after $m$ | [1.4](lessons/01-04-persuasion-and-the-media.md) |
| $q_A,q_B$, $v_A$, $\pi_A$, $M=[L,R]$ | platforms; vote share; win probability; median interval | [2.1](lessons/02-01-the-downsian-spatial-model.md) |
| $\theta_A,\theta_B$, $[\mu-c,\mu+c]$, $s^*$ | candidate ideals; support of the uncertain median; divergence | [2.1](lessons/02-01-the-downsian-spatial-model.md) |
| $W(q)$, $d$, $z^*$ | [win-set](#win-set); a direction; issue-by-issue median | [2.2](lessons/02-02-multidimensional-voting-and-chaos.md) |
| $n_g$, $\phi_g$, $\sigma_{ig}$, $\delta$, $\psi$, $\bar\phi$ | group share; ideological density; individual bias; popularity shock and its density; mean density | [2.3](lessons/02-03-probabilistic-voting.md) |
| $W(q)=\sum_gn_g\phi_gu_g(q)$, $t_g$, $e_{Pg}$ | weighted welfare; per-capita transfer; delivery efficiency | [2.3](lessons/02-03-probabilistic-voting.md) |
| $v$, $d$, $s_B^*$ | [valence](#valence); platform gap; B's best share | [2.4](lessons/02-04-valence-and-citizen-candidates.md) |
| $b$, $c$, $\varepsilon$, $e_p$ | office benefit; entry cost; half-separation; no-centrist bound ([citizen-candidate](#citizen-candidate-model)) | [2.4](lessons/02-04-valence-and-citizen-candidates.md) |
| $S_j$, $p_{jk}$, $R_j$, $v$, $\lambda$ | expected share; pivot prob. for a $j$-$k$ tie; [prospective rating](#prospective-rating); middle-choice utility; free pivot ratio | [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md) |
| $M$ | district magnitude ([M plus one rule](#m-plus-one-rule)) | [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md) |
| $K$, $s_j$, $S^*$, $F$ | candidates; scoring vector; average score; offer distribution | [2.6](lessons/02-06-electoral-rules-compared-formally.md) |
| $G$, $\pi$, $F^*$, $\kappa$, $p$ | public-good value; prob. of offering it; pork distribution; $(G-1)/(2-G)$; share left below $G$ | [2.6](lessons/02-06-electoral-rules-compared-formally.md) |
| $D$, $g$, $f_J$, $b$ | districts; public good; district transfer; taste for $g$ ([swing districts](#swing-districts)) | [2.6](lessons/02-06-electoral-rules-compared-formally.md) |
| $a_i$, $m$, $b$, $c$ | contribution; number of contributors; benefit per contribution; cost | [3.1](lessons/03-01-free-riding-and-threshold-games.md) |
| $V$, $k$, $j$, $\pi(p)$, $\hat p$ | good's value; threshold; other contributors; pivot probability; its peak | [3.1](lessons/03-01-free-riding-and-threshold-games.md) |
| $z_i$, $G$, $V(G)=ag(G)$, $s_i$, $\beta$, $\hat G$, $G^*$ | contribution; provision; group value; share; power; Nash and efficient levels ([Olson](#olsons-logic)) | [3.2](lessons/03-02-olsons-logic-of-collective-action.md) |
| $b$, $d$, $\kappa$ | private benefit; dues; private good's cost ([selective incentives](#selective-incentives)) | [3.2](lessons/03-02-olsons-logic-of-collective-action.md) |
| $e_i$, $E$, $Y(E)$, $w$, $A$ | extraction; total; yield; effort cost; commons size | [3.3](lessons/03-03-the-commons-and-common-pool-resources.md) |
| $\delta$, $v^C$, $v^D$, $v^N$, $\delta^*$, $s$ | discount factor; cooperate, deviate, Nash stage payoffs; [critical discount factor](#critical-discount-factor); fine | [3.3](lessons/03-03-the-commons-and-common-pool-resources.md) |
| $k$, $q=k/n$, $E(q)$, $D(q)$, $C(q)$ | threshold; fraction; external, decision and total cost ([Buchanan-Tullock](#buchanan-tullock-calculus)) | [3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md) |
| $S$, $P_k$, $L_A$, $L_B$, $\lambda$ | other yes votes; prob. of getting one's way; loss weights; $L_A/(L_A+L_B)$ | [3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md) |
| $s$, $m$, $q$, $A(q)$, $x^*$ | setter; median; [reversion point](#reversion-point); acceptance set; outcome | [3.5](lessons/03-05-agenda-setters-and-veto-players.md) |
| $v_1\le\dots\le v_k$; $f$, $f'$, $v$, $p$; $g$ | veto-player ideals; filibuster (rightward, leftward), override pivots, president; committee | [3.5](lessons/03-05-agenda-setters-and-veto-players.md) |
| $r_t$, $\bar R$, $W$, $\bar r$, $\bar r^*$ | rent; maximal rent; value of office; cutoff; lowest respected cutoff | [4.1](lessons/04-01-elections-as-accountability.md) |
| $\pi$, $\lambda$, $\mu'$ | share congruent; mimicking probability; posterior after a good record | [4.1](lessons/04-01-elections-as-accountability.md) |
| $\eta$, $m_0$, $a_t$, $c(a)$, $y_t$, $\varepsilon_t$, $m_1$, $\lambda$, $\kappa$, $\rho$ | ability; prior mean; effort; cost; performance; noise; posterior mean; value of reputation; signal weight; $\sigma_\eta^2/\sigma_\varepsilon^2$ | [4.2](lessons/04-02-career-concerns-and-pandering.md) |
| $\omega$, $p$, $\mu$, $b$, $q$, $W$ | state; prior on the popular state; prob. congruent; policy stake; prob. voters learn $\omega$; re-election value ([pandering](#pandering)) | [4.2](lessons/04-02-career-concerns-and-pandering.md) |
| $p_i^*$, $t_i$, $X_i$, $M_i$, $L$, $\alpha_L$, $I_i$, $a$ | world price; trade tax; output; imports; organized sectors; organized share of population; organized indicator; welfare weight | [4.3](lessons/04-03-lobbying-protection-for-sale.md) |
| $C_i(p)$, $\Omega_i$, $\Omega$, $B_i$, $z_i$, $e_i$, $J(S)$ | schedule; lobby and aggregate welfare; net payoff; $X_i/M_i$; import elasticity; joint value | [4.3](lessons/04-03-lobbying-protection-for-sale.md) |
| $b_H$, $b_L$, $c$ | lobby stakes in good and bad states; lobbying cost | [4.3](lessons/04-03-lobbying-protection-for-sale.md) |
| $p$, $\pi(p)$, $p_m$, $p_c$, $M(p,\pi)$, $\alpha$, $k$ | regulated price; profit; monopoly and competitive prices; political support; producer weight; side-transfer efficiency | [4.4](lessons/04-04-regulatory-capture.md) |
| $R$, $x_i$, $r$, $p_i$, $D$, $V_1,V_2$, $S$ | rent; effort; decisiveness; win prob.; dissipation; values; total effort | [4.5](lessons/04-05-rent-seeking-contests.md) |
| $x_t$, $\pi_t$, $\pi_t^e$, $a$ | output gap; inflation; expected inflation; Phillips slope | [4.6](lessons/04-06-political-budget-cycles.md) |
| $\mu$, $X$, $\Delta$, $c_H,c_L$, $e$, $V_H,V_L$ | prior competent; office value; value of a competent successor; signal costs; boost; gains from retention | [4.6](lessons/04-06-political-budget-cycles.md) |
| $\pi_L,\pi_R$, $p$ | party inflation rates; prob. $L$ wins | [4.6](lessons/04-06-political-budget-cycles.md) |
| $x$, $\delta$, $v$, $p_i$ | division; discount factor; ex ante value; recognition probability | [5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md) |
| $w_i$, $q$, $C$, $\pi_{ik}$ | seats; quota; coalition; prob. formateur $i$ picks $k$ | [5.2](lessons/05-02-coalition-and-government-formation.md) |
| $w_i$, $\ell_i$, $m$, $T$, $V_i(t)$, $\rho$, $w_m$ | wage; labor; mean of $w^2$; grant; induced utility; mean-to-median ratio; median wage | [5.3](lessons/05-03-the-meltzer-richard-model.md) |
| $y_i=w_i^2$, $\bar y$, $\hat y$, $t(\hat y)$ | pre-tax income; its mean (5.3's $m$); decisive income; rate curve | [5.4](lessons/05-04-the-political-economy-of-inequality.md) |
| $\tau(y)$, $F$, $G$, $y_v$, $y_\phi$ | turnout rate; population and electorate distributions; voter median; density-weighted mean | [5.4](lessons/05-04-the-political-economy-of-inequality.md) |

### Notation warnings

| Letter | Meanings |
|---|---|
| $\pi$ | win probability $\pi_A$ (2.1); pork-offer probability (2.6); pivot probability $\pi(p)$ (3.1); tie probability $\pi_t$ (1.3); share congruent (4.1); profit (4.4); inflation (4.6); payoffs $\pi_i$ (4.5); formateur choice $\pi_{ik}$ (5.2); signal $\pi(m\mid\omega)$ (1.4) |
| $\mu$ | prior that $\omega=A$ (1.3), that $\omega=G$ (1.4), that the incumbent is congruent (4.2) or competent (4.6); centre of the uncertain median (2.1); $\mu'$ always a posterior |
| $q$ | a policy (1.1, 2.x); prob. informed (1.3); bad-state pass rate (1.4); Left share (2.6); threshold fraction (3.4); reversion point (3.5); prob. voters learn the state (4.2); seat quota (5.2) |
| $p$ | prob. a voter votes A (1.2); state prior (4.2); price (4.3, 4.4); president's ideal (3.5); prob. $L$ wins (4.6); mixing probability (3.1); win probability $p_A$ (2.3), $p_i$ (4.5); recognition $p_i$ (5.1) |
| $\delta$ | discount factor (3.3, 4.x, 5.x); popularity shock (2.3) |
| $\lambda$ | leak (1.1); free pivot ratio (2.5); multiplier (2.3); loss ratio (3.4); mimicking prob. (4.1); value of reputation (4.2) |
| $W$ | win-set $W(q)$ (2.2, 3.5); weighted welfare $W(q)$ (2.3); value of office (4.1, 4.2) |
| $V$ | value of information (1.3); concave closure (1.4); good's value (3.1); group value $V(G)$ (3.2); support $V(p)$ (4.4); induced utility $V_i(t)$ (5.3); retention gains $V_H,V_L$ (4.6) |
| $M$ | median interval (2.1); district magnitude (2.5); imports $M_i$ (4.3); support $M(p,\pi)$ (4.4) |
| $m$ | median (2.1, 3.5); number of contributors (3.1); mean of $w^2$ (5.3); messages (1.4); posterior mean $m_1$ (4.2) |
| $D$ | duty term (1.2); decision cost (3.4); districts (2.6); dissipation (4.5); demand $D_i$ (4.3) |
| $G$ | public-good value (2.6); provision (3.2); electorate distribution (5.4) |
| $v$ | valence (2.4); veto-player ideals and override pivot (3.5); ex ante value (5.1); middle-choice utility (2.5); stake (1.3); vote share $v_A$ (2.1) |
| $k$ | threshold (3.1, 3.4); Hardin's minimal subgroup (3.2); veto players (3.5); inflation boost (4.6); side-transfer efficiency (4.4) |

## Orientation

### Models at a glance

As the lessons establish them. "Drives it" is the assumption whose removal changes the answer.

| Model | Setting | Key result | Drives it | Lesson |
|---|---|---|---|---|
| [Induced preferences](#induced-preferences) | tax with leak, exogenous incomes | $t^*=(1-y_m/\bar y)/\lambda$ clipped | one dimension, one trait, no exit | [1.1](lessons/01-01-from-ballots-to-policy-space.md) |
| [Calculus of voting](#calculus-of-voting) | lone voter, binomial others | $R=PB-C+D$; $P\approx\sqrt{2/(\pi n)}e^{-n\Delta}$ | known $p$, private stake | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md) |
| [Participation games](#participation-games) | two teams, costly voting | $c=\tfrac12[\Pr(\text{tie})+\Pr(\text{trail by 1})]$ | complete information, small $n$ | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md) |
| [Rational ignorance](#rational-ignorance) | common values, others uninformative | $V=\pi_tv(1-\max(\mu,1-\mu))$ | ballots independent of the state | [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md) |
| [Swing voters curse](#swing-voters-curse) | informed and uninformed independents | abstain iff $(2\mu-1)(1-q)\le nq(1-\mu)$ | no partisans; common values | [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md) |
| [Bayesian persuasion](#bayesian-persuasion) | sender commits to a test | approval $=\mu/\mu^*$ | commitment | [1.4](lessons/01-04-persuasion-and-the-media.md) |
| [Cheap talk](#cheap-talk) | sender speaks after seeing the state | approval 0 | state-independent sender preferences | [1.4](lessons/01-04-persuasion-and-the-media.md) |
| [Downsian model](#downsian-model) | two office-seekers on a line | both in the median interval | one dimension, commitment, 2 candidates | [2.1](lessons/02-01-the-downsian-spatial-model.md) |
| [Policy-motivated candidates](#policy-motivated-candidates) | ideologues, uncertain median | $s^*=ac/(a+c)$ | policy motives **and** uncertainty | [2.1](lessons/02-01-the-downsian-spatial-model.md) |
| [Majority core](#majority-core) | Euclidean voters in the plane | core iff every line splits $\le n/2$ | odd $n$ (Plott knife-edge) | [2.2](lessons/02-02-multidimensional-voting-and-chaos.md) |
| [McKelvey chaos theorem](#mckelvey-chaos-theorem) | empty core, $m\ge2$ | any point reachable by majority chain | sincere voters, free agenda | [2.2](lessons/02-02-multidimensional-voting-and-chaos.md) |
| [Structure-induced equilibrium](#structure-induced-equilibrium) | one-issue-at-a-time amendments | issue-by-issue median | separability, the rule sticks | [2.2](lessons/02-02-multidimensional-voting-and-chaos.md) |
| [Probabilistic voting](#probabilistic-voting) | smooth ideology shocks | both maximize $\sum n_g\phi_gu_g$ | interiority | [2.3](lessons/02-03-probabilistic-voting.md) |
| [Valence](#valence) | common-knowledge median, edge $v$ | vote share: no pure eq.; win prob.: $\lvert q_A-x_m\rvert<\sqrt v$ | objective; no uncertainty | [2.4](lessons/02-04-valence-and-citizen-candidates.md) |
| [Citizen-candidate model](#citizen-candidate-model) | entry, no commitment | $c-\tfrac b2\le\varepsilon\le e_p$ | no commitment, sincere voting | [2.4](lessons/02-04-valence-and-citizen-candidates.md) |
| [Duvergers law](#duvergers-law) | plurality, strategic voters | third place gets 0 if $S_B>S_C$ | ordering condition, strict gap | [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md) |
| [Centripetal and centrifugal incentives](#centripetal-and-centrifugal-incentives) | scoring rules, Left/Right | all-Right eq. iff $q\le S^*$ | the scoring vector | [2.6](lessons/02-06-electoral-rules-compared-formally.md) |
| [Public goods vs targeted transfers](#public-goods-vs-targeted-transfers) | pork or public good, binding promises | $\pi_{\text{WTA}}=\tfrac12$, $\pi_{\text{PR}}=G-1$ | share vs win payoff; one national district | [2.6](lessons/02-06-electoral-rules-compared-formally.md) |
| [Swing districts](#swing-districts) | safe and swing districts | $g=b/D$ vs $b$ | safe districts | [2.6](lessons/02-06-electoral-rules-compared-formally.md) |
| [Threshold public goods](#threshold-public-goods) | lumpy good, no refund | exactly $k$ give, or none; $V\pi(p)=c$ | coordination device; $k$ growing with $n$ | [3.1](lessons/03-01-free-riding-and-threshold-games.md) |
| [Olsons logic](#olsons-logic) | fixed shares of a fixed value | largest member alone; $\hat G/G^*=s_1^{1/(1-\beta)}$ | rivalry | [3.2](lessons/03-02-olsons-logic-of-collective-action.md) |
| [Rent dissipation](#rent-dissipation) | open-access fishery | $AP=w$, rent 0 | no exclusion | [3.3](lessons/03-03-the-commons-and-common-pool-resources.md) |
| [Critical discount factor](#critical-discount-factor) | repeated commons, grim trigger | $\delta\ge(v^D-v^C)/(v^D-v^N)$ | infinite horizon, perfect monitoring | [3.3](lessons/03-03-the-commons-and-common-pool-resources.md) |
| [Buchanan-Tullock calculus](#buchanan-tullock-calculus) | choose a voting threshold | $-E'(q^*)=D'(q^*)$ | shapes of $E$, $D$ | [3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md) |
| [Rae-Taylor theorem](#rae-taylor-theorem) | veiled, independent voter | majority maximizes $P_k$ | independence, equal intensity | [3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md) |
| [Setter model](#setter-model) | take-it-or-leave-it to the median | nearest point of $A(q)$ to $s$ | exogenous reversion, complete info | [3.5](lessons/03-05-agenda-setters-and-veto-players.md) |
| [Gridlock interval](#gridlock-interval) | filibuster, veto, override | $[f,v]$; upper end $\max(f',\min(p,v))$ | president's position | [3.5](lessons/03-05-agenda-setters-and-veto-players.md) |
| [Retrospective cutoff](#retrospective-cutoff) | identical politicians, rents observed | $\bar r^*=\max\{0,(1-\delta)\bar R-\delta W\}$ | voter indifference | [4.1](lessons/04-01-elections-as-accountability.md) |
| [Sanctioning and selection](#sanctioning-and-selection) | congruent and dissonant types | mimic prob. $\lambda$ dilutes $\mu'$ | types differ | [4.1](lessons/04-01-elections-as-accountability.md) |
| [Career concerns](#career-concerns) | unknown ability, hidden effort | $c'(a_1)=\delta\lambda\kappa$, $a_T=0$ | effort and ability in one public signal | [4.2](lessons/04-02-career-concerns-and-pandering.md) |
| [Pandering](#pandering) | binary policy, informed incumbent | pander iff $(1-2q)W>b$ | tie rule; late outcomes | [4.2](lessons/04-02-career-concerns-and-pandering.md) |
| [Grossman-Helpman tariff](#grossman-helpman-tariff) | menu auction over trade taxes | $\frac{t}{1+t}=\frac{I-\alpha_L}{a+\alpha_L}\frac ze$ | exogenous $L$, $\alpha_L$ | [4.3](lessons/04-03-lobbying-protection-for-sale.md) |
| [Peltzman model](#peltzman-model) | support-maximizing regulator | $-M_p/M_\pi=\pi'(p^*)$, $p_c<p^*<p_m$ | $M_p<0$ (consumers count) | [4.4](lessons/04-04-regulatory-capture.md) |
| [Tullock contest](#tullock-contest) | $n$ contestants, CSF exponent $r$ | $x^*=rR(n-1)/n^2$, $D=r(n-1)/n$ | $r\le n/(n-1)$ | [4.5](lessons/04-05-rent-seeking-contests.md) |
| [Competence signaling](#competence-signaling) | incumbent knows her type | $e^*=(X-\mu\Delta)/c_L$ | single crossing; cost seen late | [4.6](lessons/04-06-political-budget-cycles.md) |
| [Rational partisan cycles](#rational-partisan-cycles) | contracts before the vote | $x_L=a(1-p)(\pi_L-\pi_R)$ | contract timing | [4.6](lessons/04-06-political-budget-cycles.md) |
| [Baron-Ferejohn bargaining](#baron-ferejohn-bargaining) | random recognition, closed rule | proposer keeps $1-\delta\frac{n-1}{2n}$ | stationarity | [5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md) |
| [Formateur premium](#formateur-premium) | three parties, any two win | formateur $1-\delta/3$, each pair w.p. $1/3$ | divisible office, random recognition | [5.2](lessons/05-02-coalition-and-government-formation.md) |
| [Meltzer-Richard model](#meltzer-richard-model) | flat tax, equal grant, labor supply | $t^*=(\rho-1)/(2\rho-1)$ | one trait, commitment, everyone votes | [5.3](lessons/05-03-the-meltzer-richard-model.md) |
| [Inequality and redistribution](#inequality-and-redistribution) | MR with a free decisive income | $t(\hat y)=(\bar y-\hat y)/(2\bar y-\hat y)$ | affine $V$ in $y$ | [5.4](lessons/05-04-the-political-economy-of-inequality.md) |

## Models and definitions

One `###` entry per model, result or term, grouped by module. A **model** entry gives the game (players, timing,
information, objective), the result in notation with a plain-English line, the assumption it turns on, what it does
**not** show, and the lessons. A **definition** entry gives the plain-English line, the formal statement and the
lessons. Shared terms (pivot probability, convergence, Olson's logic, ...) have one entry listing every lesson that
uses them.

**Module 1: voters (preferences, turnout, information)**

### Positive model

A model that predicts what a set of rules produces, not what it should produce (the normative question is
[`political-philosophy` 5.1](../political-philosophy/lessons/05-01-why-democracy.md)'s).

Before solving anything, write down seven items:

1. **Players**: voters; later candidates, parties, lobbies, legislators.
2. **Policy space and preferences**: e.g. $t\in[0,1]$ with [induced](#induced-preferences) $u_i(t)$.
3. **Rule**: who proposes, who votes, how votes aggregate, what happens if nothing passes ([reversion point](#reversion-point)).
4. **Timing and commitment**: who moves first; does a promise bind? (Platforms bind in [2.1](lessons/02-01-the-downsian-spatial-model.md), not in [2.4](lessons/02-04-valence-and-citizen-candidates.md)'s citizen-candidate model; a persuader commits in [1.4](lessons/01-04-persuasion-and-the-media.md), a cheap talker does not.)
5. **Information**: what is common knowledge (ideal points, the state, types).
6. **Objectives**: vote share, win probability, policy, rents.
7. **Solution concept**: Condorcet winner, Nash, subgame-perfect, Bayes-Nash or perfect Bayesian equilibrium.

*In words:* most mistakes in this course are a mis-specified item 4, 5 or 6, so state all seven first.

*Lessons:* [1.1](lessons/01-01-from-ballots-to-policy-space.md); the checklist is used in every lesson.

### Median voter

The voter in the middle of the single-crossing order (in 1.1 and 5.3, the median-income or median-wage voter). Under
single-crossing and odd $n$ the majority relation **is** her ranking (the representative voter theorem,
[`social-choice` 3.4](../social-choice/lessons/03-04-single-crossing-and-value-restriction.md)), so her peak is the
Condorcet winner.

$$t^*=t_m\quad\text{(the peak of the median voter in the single-crossing order).}$$

*In words:* line voters up by the trait that orders their preferences; the one in the middle decides.

*Does not say:* that the median of **ideal points** is decisive without single-peakedness or single-crossing; that the
decisive voter is the median of the population once turnout, mobility or swing weights enter (5.4 replaces her by the
[turnout-weighted median](#turnout-weighted-median), the expected-income median of [POUM](#prospect-of-upward-mobility),
or the density-weighted mean of [probabilistic voting](#probabilistic-voting)).

*Lessons:* [1.1](lessons/01-01-from-ballots-to-policy-space.md), [5.3](lessons/05-03-the-meltzer-richard-model.md) (median-wage voter decisive over $t$), [5.4](lessons/05-04-the-political-economy-of-inequality.md) (replaced)

### Euclidean and quadratic utility

The two workhorse spatial utilities, with ideal point $x_i$ and policy $q$:

$$u_i^E(q)=-\lvert q-x_i\rvert\ \ (\text{in the plane } -\lVert q-x_i\rVert),\qquad u_i^Q(q)=-(q-x_i)^2 .$$

*In words:* both say "closer is better", the first linearly, the second with losses growing with squared distance.

- **Same pairwise votes over sure policies in one dimension** (squaring is increasing on $[0,\infty)$): same majority
  relation, same Condorcet winner (the median ideal point).
- **They differ on lotteries:** $E[-(q-x_i)^2]=-(Eq-x_i)^2-\operatorname{Var}q$, so every quadratic voter pays for risk;
  a Euclidean voter whose ideal lies outside the lottery's range does not (1.1 Example 2: Euclidean voters elect a
  lottery 2-1 that quadratic voters reject 3-0). They also differ when intensities are summed and in two dimensions.
- **Who uses which:** 1.1's tax voters are exactly quadratic around $\tau_i$ (the economics chose the loss); 2.1's
  Calvert-Wittman divergence uses quadratic loss (linear loss sends platforms to the support edges); 2.2 uses Euclidean
  utility in the plane (closer is better) and separable weighted quadratics; 2.4 uses quadratic for valence (the
  $\sqrt v$ cutpoint) and Euclidean for citizen-candidates; 3.5 uses Euclidean throughout, indifferent responders accept.

*Lessons:* [1.1](lessons/01-01-from-ballots-to-policy-space.md), [2.1](lessons/02-01-the-downsian-spatial-model.md), [2.2](lessons/02-02-multidimensional-voting-and-chaos.md), [2.4](lessons/02-04-valence-and-citizen-candidates.md), [3.5](lessons/03-05-agenda-setters-and-veto-players.md)

### Induced preferences

A preference over a policy obtained by plugging the policy into the budget, optimizing everything else, and reading off
utility as a function of the policy alone. Whether the domain restriction (single-peaked, single-crossing) holds is a
property of the **economic model**, to be checked.

1.1's leaky-bucket tax (exogenous income $y_i$, mean $\bar y$, median $y_m$, leak $\lambda>0$):

$$u_i(t)=(1-t)y_i+t\bar y-\tfrac{\lambda}{2}t^2\bar y=y_i+\tfrac{\lambda\bar y}{2}\tau_i^2-\tfrac{\lambda\bar y}{2}(t-\tau_i)^2,\qquad \tau_i=\frac{\bar y-y_i}{\lambda\bar y}.$$

**Proposition (1.1).** For odd $n$: each $u_i$ is single-peaked with peak $\tau_i$ clipped to $[0,1]$; the profile is
single-crossing in income ($\partial[u_i(t')-u_i(t)]/\partial y_i=-(t'-t)<0$); the unique Condorcet winner is
$t^*=\min\{1,\max\{0,(1-y_m/\bar y)/\lambda\}\}$.

*In words:* majority picks the median earner's rate, positive exactly when mean income exceeds median income; only
$y_m/\bar y$ enters.

5.3's version (labor supply): $V_i(t)=(1-t)^2w_i^2/2+t(1-t)m$ is single-peaked (peak 0) even where it is convex
($w_i^2>2m$), because it is then decreasing on all of $[0,1]$.

*Turns on:* one dimension, one characteristic ordering voters, no exit. An outside option (private school, private
pension) makes induced utility the upper envelope of two curves, which can have two peaks (Stiglitz 1974; Epple and
Romano 1996, "ends against the middle").

*Lessons:* [1.1](lessons/01-01-from-ballots-to-policy-space.md), [5.3](lessons/05-03-the-meltzer-richard-model.md)

### Paradox of voting

With no payoff from the act of voting ($D=0$) and a tiny [pivot probability](#pivot-probability) $P$, the expected
return $PB-C$ is negative for any plausible stake $B$ and cost $C$; yet many people vote (Downs 1957).

*In words:* the simplest rational-choice account predicts almost nobody votes.

*Does not say:* that turnout is irrational. It names which hypothesis to drop: known $p$ (uncertainty gives
$P\approx g(\tfrac12)/n$, larger but still small), the lone individual weighing a private stake (group and ethical
models), or $D=0$ (a free $D$ fits any turnout, which critics read as giving up the explanation).

*Lessons:* [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md)

### Calculus of voting

Riker and Ordeshook (APSR 1968):

$$R=PB-C+D,\qquad \text{vote iff } R>0 .$$

$P$ = probability one's vote changes the outcome; $B$ = utility gain if one's side wins; $C$ = cost of voting; $D$ =
payoff from voting itself. Downs's version has $D=0$.

*In words:* vote when the expected policy gain plus the satisfaction of voting beats the cost.

*Note:* with $n$ even others and coin-flip ties, the vote converts a tie into a win, so the expected gain is
$\tfrac12PB$ (1.2's tables use $\tfrac12PB$).

*Lessons:* [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md)

### Pivot probability

The probability that one's own action changes the outcome. One concept, several models:

| Setting | Pivot event | Value | Lesson |
|---|---|---|---|
| two candidates, $n$ even others vote A w.p. $p$, known | others tie | $\binom{n}{n/2}(p(1-p))^{n/2}\approx\sqrt{2/(\pi n)}\,e^{-n\Delta(p)}$ | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md) |
| same, $p$ uncertain with smooth density $g$ | others tie | $\approx g(\tfrac12)/n$ (Chamberlain-Rothschild) | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md) |
| common-value election with abstention | margin $d\in\{0,-1\}$ (for voting A) | posterior given that event decides | [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md) |
| three candidates (Myerson-Weber) | $j$ and $k$ tie for first | $p_{jk}$, enters [prospective rating](#prospective-rating) | [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md) |
| threshold public good | exactly $k-1$ of $n-1$ others contribute | $\binom{n-1}{k-1}p^{k-1}(1-p)^{n-k}$ | [3.1](lessons/03-01-free-riding-and-threshold-games.md) |
| Rae's constitutional voter | others split so her vote decides | Rae's gain over a coin flip is half of it | [3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md) |

$\Delta(p)=-\tfrac12\ln(4p(1-p))$ is the Kullback-Leibler divergence of a fair coin from a $p$-coin;
$\Delta=2\varepsilon^2+4\varepsilon^4+\dots$ at $p=\tfrac12+\varepsilon$.

*In words:* in a known dead heat ties are rare like $1/\sqrt n$; at a known lean, exponentially rare; under uncertainty
about $p$, rare like $1/n$.

*Watch:* the $2\varepsilon^2$ shortcut is only the leading term: at $n=10{,}000$, $p=0.55$ it gives
$1.5\times10^{-24}$ against the exact $1.2\times10^{-24}$.

*Lessons:* [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md), [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md), [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md), [3.1](lessons/03-01-free-riding-and-threshold-games.md), [3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md)

### Participation games

Palfrey and Rosenthal (Public Choice 1983; APSR 1985). **Game:** two teams of known sizes; each member votes for her
team or abstains; win pays 1, tie $\tfrac12$, loss 0; voting costs $c$; simultaneous moves. **Result:** a mixing voter
is indifferent,

$$c=\tfrac12\big[\Pr(\text{others tie})+\Pr(\text{own side trails by one})\big],$$

so the pivot probability is endogenous. With complete information, equilibria can sustain substantial turnout even at
fairly high cost; with private information about others' costs and preferences, in large electorates only voters with
net cost near zero or negative vote.

*In words:* if few others vote your vote matters more, which pulls you in; but the pull fades in big electorates with
uncertainty.

*Turns on:* complete information and small teams. *Does not show:* high turnout in large electorates.

3.1 reads turnout as **two threshold games glued together**, each team's threshold set by the other team's turnout.

*Lessons:* [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md), [3.1](lessons/03-01-free-riding-and-threshold-games.md)

### Group-based turnout

Coate and Conlin (AER 2004), building on Harsanyi's rule utilitarianism. Each side's supporters follow "vote iff
your cost is below $\gamma_g$", with $\gamma_g$ chosen to maximize the **group's** expected welfare given the other side's
rule; an equilibrium is a pair of mutually best-responding cutoffs. Stylized line (1.2's, not their exact
specification): the marginal member's cost equals $N_g b$ times one vote's effect on the win probability.

*In words:* the group's stake grows with $n$, offsetting the shrinking per-vote effect.

*Does not show:* why individuals follow the group rule. Fitted to Texas liquor referenda, it beat a simple expressive
model (as the authors report).

*Lessons:* [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md)

### Ethical voters

Feddersen and Sandroni (AER 2006). No vote is pivotal; ethical agents get a payoff from doing their part, where their
part is fixed by the rule that would best serve their side **if all ethical agents of their type followed it**.

*In words:* the duty to vote is endogenous (it responds to closeness, stakes and costs), unlike a fixed $D$.

*Result (abstract level):* high turnout with comparative statics that look strategic. No formulas in the lesson.

*Lessons:* [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md)

### Rational ignorance

Downs: information changes your payoff only when you are pivotal. **1.3 Proposition 1.** If the other $n$ ballots
($n$ even) are independent of the state $\omega$ and tie with probability $\pi_t$, and the outcome is worth $v$ when it
matches the state, the value of perfect information is

$$V=\pi_t\,v\,\big(1-\max(\mu,1-\mu)\big)\le\tfrac12\pi_tv .$$

*In words:* information pays only in the tie, and even there only fixes the mistakes your prior would have made.

*Turns on:* others' ballots independent of $\omega$, which fails once other voters are informed (then the pivotal event
is itself news: [conditioning on pivotality](#conditioning-on-pivotality)).

*Lessons:* [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md)

### Conditioning on pivotality

Compare actions only in the events where your vote changes the outcome, using the posterior **given** those events.

1.3 Lemma: with others' margin $d$ (A minus B) and coin-flip ties, for an uninformed common-value voter

$$\Delta_A=\tfrac12\big[\mu\Pr(d\in\{0,-1\}\mid A)-(1-\mu)\Pr(d\in\{0,-1\}\mid B)\big],$$

so voting A beats abstaining iff $\Pr(\omega=A\mid d\in\{0,-1\})>\tfrac12$ (voting B uses $d\in\{0,1\}$).

*In words:* "if my vote counts, the others must have split this way", and that split is evidence.

*Same idea as:* strategic jurors in [`social-choice` 5.2](../social-choice/lessons/05-02-when-the-jury-theorem-fails.md);
the winner's curse in common-value auctions.

*Lessons:* [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md)

### Swing voters curse

Feddersen and Pesendorfer ("The Swing Voter's Curse", AER 1996). **Game:** two states and two alternatives, prior
$\mu=\Pr(A)$; independents have common values (payoff 1 if outcome matches the state); $m_A$, $m_B$ partisans; each
independent informed with probability $q$; vote A, B or abstain at no cost; majority, coin-flip ties; Bayes-Nash
equilibrium. Informed independents vote $\omega$ (weakly dominant).

**1.3 Proposition 2 (no partisans, $\mu\ge\tfrac12$, $n$ other independents).** "Informed vote $\omega$, uninformed
abstain" is an equilibrium iff

$$(2\mu-1)(1-q)\le nq(1-\mu).$$

*In words:* once you expect even one or two informed voters, staying home beats voting your prior, because being
pivotal means you are about to overrule someone who knows.

- **FP's own Proposition 1** (as restated in Fey and Kim's comment): an uninformed independent **indifferent between
  voting A and voting B** strictly prefers to abstain, so no equilibrium has the uninformed mixing between the two
  alternatives. The published proof had an error; Fey and Kim give a correct one. It is **not** "the uninformed always
  abstain".
- **With partisans** the advice flips to "offset them": an uninformed vote against the partisan bloc cancels a partisan
  and hands the decision back to the informed, even against one's prior (1.3 Example 2: vote A at prior $\tfrac25$ beats
  abstaining, iff $\mu>\tfrac14$ there).
- **Small electorates:** with few others the chance nobody is informed is large and voting the prior can be best.

*Turns on:* common values among independents; "informed" voters who are right; Bayesian voters who know $q$, $\mu$
and partisan counts. *Does not show:* that mass electorates reason this way (the lab test of Battaglini, Morton and
Palfrey, RES 2010, found abstention and compensation roughly as predicted, but incomplete).

*Not the same as:* [swing voters](#swing-voters) in 2.3 (ideologically uncommitted groups targeted with transfers).

*Lessons:* [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md); juries are [`social-choice` 5.2](../social-choice/lessons/05-02-when-the-jury-theorem-fails.md)

### Full-information equivalence

In large swing-voter elections the outcome almost always matches the one fully informed voters would choose, despite
substantial abstention (Feddersen-Pesendorfer; confirmed in Fey and Kim's summary). In 1.3's Proposition 2 electorate,
with all uninformed abstaining, the outcome is right with probability $1-\tfrac12(1-q)^n\to1$.

*In words:* a large electorate can be right even when most of it knows nothing, **if** the uninformed defer.

*Does not show:* anything if "informed" voters share a misleading source (common causes, `social-choice` 5.2).

*Lessons:* [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md)

### Bayesian persuasion

Kamenica and Gentzkow ("Bayesian Persuasion", AER 2011). **Game:** state $\omega\in\{G,B\}$, prior $\mu=\Pr(G)$; the
sender **commits publicly to a signal** $\pi(m\mid\omega)$ before the state is drawn; the receiver sees $\pi$ and $m$,
forms $\mu'(m)$ by Bayes's rule, approves iff $\mu'\ge\mu^*$ (ties to approval, KG's sender-preferred convention); the
sender gets 1 from approval in either state; $\mu<\mu^*$.

**Theorem (threshold receiver).** Maximal approval probability is $\mu/\mu^*$, attained by passing every good state
and a fraction

$$q=\frac{\mu(1-\mu^*)}{(1-\mu)\mu^*}$$

of bad ones; a pass leaves the receiver exactly at $\mu^*$.

*In words:* you can get approval with probability prior over threshold, and no more, by pooling just enough bad cases
with the good ones that a pass leaves the voter exactly indifferent.

**Corollary:** the receiver is left at her no-information payoff (0); full disclosure would give her $\mu(1-\mu^*)$.
The sender captures all the value of the information.

*Turns on:* **commitment** (test fixed before the state is known, not buried or redesigned); a single receiver whose
threshold the sender knows; a common prior. Without commitment: [cheap talk](#cheap-talk), value 0 here. With
verifiable evidence but no commitment: unraveling to full disclosure (approval $\mu$).

*Does not show:* deception. Every voter is Bayesian and right on average ([Bayes plausibility](#bayes-plausibility)).

*Lessons:* [1.4](lessons/01-04-persuasion-and-the-media.md)

### Bayes plausibility

Any signal's posteriors average to the prior; conversely (KG), any distribution of posteriors with mean equal to the
prior is induced by some signal.

$$\sum_m\Pr(m)\,\mu'(m)=\mu .$$

*In words:* information can spread beliefs out, but it cannot move their average.

*Proof:* $\Pr(m)\mu'(m)=\Pr(m,G)=\mu\,\pi(m\mid G)$; sum over $m$. Holds for any strategy profile, which is what kills
cheap talk.

*Lessons:* [1.4](lessons/01-04-persuasion-and-the-media.md)

### Concavification

Let $\hat v(\mu')$ be the sender's expected payoff when the receiver holds posterior $\mu'$, and $V$ its concave
closure (smallest concave function above $\hat v$). Value of the optimal signal $=V(\mu)$; the sender gains from
persuasion iff $V(\mu)>\hat v(\mu)$.

*In words:* stretch a rubber band over the sender's payoff-of-belief from above and read its height at the prior.

Threshold receiver: $\hat v$ is a step at $\mu^*$, so $V(\mu')=\min(\mu'/\mu^*,1)$, which is the Theorem.

*Lessons:* [1.4](lessons/01-04-persuasion-and-the-media.md)

### Cheap talk

Costless, uncommitted messages chosen **after** the sender sees the state (Crawford and Sobel, "Strategic Information
Transmission", Econometrica 1982; noted as signaling's costless extreme in
[`grad-game-theory` 4.5](../grad-game-theory/lessons/04-05-signaling-games-refinements.md)). Babbling is always an
equilibrium.

**1.4 Lemma 2.** If $\mu<\mu^*$ and the sender wants approval in both states, every perfect Bayesian equilibrium has
approval probability 0.

*In words:* a sender who speaks after the facts and wants the same thing whatever the facts is not believed.

*Proof idea:* both types send only messages with the maximal approval $\bar\alpha$; if $\bar\alpha>0$ every on-path
posterior is $\ge\mu^*$, contradicting Bayes plausibility.

*Does not show:* that cheap talk is always useless; the lemma uses state-independent sender preferences and a prior
below the threshold.

*Lessons:* [1.4](lessons/01-04-persuasion-and-the-media.md)

### Media slant

News outlets are senders answering to their audience. Demand-driven slant:

- **Mullainathan and Shleifer** ("The Market for News", AER 2005): readers like confirmation; competition lowers prices,
  not slant; on common-belief issues outlets slant the same way, on divisive issues they segment toward opposite sides;
  a reader of all outlets could recover an accurate picture.
- **Gentzkow and Shapiro** ("Media Bias and Reputation", JPE 2006): Bayesian readers infer quality from agreement with
  their priors, so outlets slant toward priors; less slant with fast ex post feedback and with competition. (1.4's
  toy: a confirming report raises perceived accuracy from $\tfrac12$ to $\tfrac35$, a contradicting one lowers it to
  $\tfrac13$.)
- **Evidence:** Gentzkow and Shapiro ("What Drives Media Slant?", Econometrica 2010): US newspaper slant responds
  strongly to readers' politics, much less to owners'. Identification belongs to `empirical-political-economy`.

*Does not show:* biased owners; both models produce slant with profit-maximizing, apolitical owners. Supply-side slant
(the government buys the outlet) is [media capture](#media-capture).

*Lessons:* [1.4](lessons/01-04-persuasion-and-the-media.md); capture in [4.4](lessons/04-04-regulatory-capture.md)

**Module 2: electoral competition**

### Downsian model

Hotelling ("Stability in Competition", Economic Journal 1929) relabelled by Downs (*An Economic Theory of Democracy*,
1957). **Game:** voters with ideal points $x_i\in\mathbb R$ (single-peaked suffices); two candidates choose platforms
$q_A,q_B$ **simultaneously**; platforms are **binding**; ideal points are **common knowledge**; voters vote for the
preferred platform (weakly dominant with two candidates), indifferent voters split; each candidate maximizes **vote
share** $v_A$ or **win probability** $\pi_A$ (1 above $n/2$, $\tfrac12$ at $n/2$).

**Result:** the [median voter theorem](#median-voter-theorem): equilibria are exactly the pairs in the median interval.

*In words:* if I am off the median, my rival can stand between me and it and take a majority; only the median leaves
no gap.

*Turns on:* one dimension (2.2), two candidates (three vote-share maximizers on a uniform line have no pure equilibrium;
2.1 P3), commitment (2.4), deterministic voting (2.3). The two objectives agree here only because platforms determine
the winner.

*Lessons:* [2.1](lessons/02-01-the-downsian-spatial-model.md); contrasted in [2.3](lessons/02-03-probabilistic-voting.md)

### Median voter theorem

**Committee form** (Black; [`social-choice` 3.3](../social-choice/lessons/03-03-single-peakedness-black-and-moulin.md),
[`grad-game-theory` 5.1](../grad-game-theory/lessons/05-01-social-choice-impossibility.md)): on a line with single-peaked
preferences and $n$ odd, the median peak beats every alternative.

**Electoral form (2.1 Theorem 1).** With $x_{(1)}\le\dots\le x_{(n)}$ and median interval
$M=[L,R]$, $L=x_{(\lceil n/2\rceil)}$, $R=x_{(\lfloor n/2\rfloor+1)}$: under either objective,

$$(q_A,q_B)\text{ is a Nash equilibrium}\iff q_A,q_B\in M .$$

Unique at the median for odd $n$, or for a continuum with a unique median.

*In words:* two office-seekers on a line converge to the median voter, or for an even electorate to anywhere between
the two middle voters.

*Proof idea:* (Lemma 1) a platform in $M$ secures $n/2$ against anything (a security level of a constant-sum game,
[`grad-game-theory` 1.4](../grad-game-theory/lessons/01-04-zero-sum-minimax-lp-duality.md)); (Lemma 2) a platform
outside $M$ loses strictly to the nearer end of $M$. Distances are never used, only single-peakedness.

*Uses elsewhere:* 2.2 applies it coordinate by coordinate ([structure-induced equilibrium](#structure-induced-equilibrium));
3.5 uses it to make the median decisive on a yes/no ballot.

*Lessons:* [2.1](lessons/02-01-the-downsian-spatial-model.md), [2.2](lessons/02-02-multidimensional-voting-and-chaos.md), [3.5](lessons/03-05-agenda-setters-and-veto-players.md)

### Convergence

Both candidates choose the same platform. Where they converge depends on the model:

| Model | Converge to | Breaks when | Lesson |
|---|---|---|---|
| Downsian, office-seekers | median (median interval for even $n$) | 2 dimensions; 3 candidates | [2.1](lessons/02-01-the-downsian-spatial-model.md) |
| policy-motivated, known median | median (Theorem 2) | median uncertain | [2.1](lessons/02-01-the-downsian-spatial-model.md) |
| probabilistic voting | $q^*=\arg\max\sum_g n_g\phi_gu_g(q)$ | interiority fails | [2.3](lessons/02-03-probabilistic-voting.md) |
| citizen-candidates | no convergence | candidates can commit (then Downs returns) | [2.4](lessons/02-04-valence-and-citizen-candidates.md) |

*In words:* convergence is the benchmark every later model breaks; say which model's convergence you mean.

*Lessons:* [2.1](lessons/02-01-the-downsian-spatial-model.md), [2.3](lessons/02-03-probabilistic-voting.md), [2.4](lessons/02-04-valence-and-citizen-candidates.md)

### Policy-motivated candidates

Candidates care about the enacted policy, not office: A's payoff $\pi_Au_A(q_A)+(1-\pi_A)u_A(q_B)$, ideal points
$\theta_A<\theta_B$, platforms binding (the Calvert-Wittman model: Wittman, JET 1977 and APSR 1983; Calvert, AJPS 1985;
the lesson's statements are textbook versions, not either paper's exact hypotheses).

- **Theorem 2 (known median $m$, $\theta_A<m<\theta_B$):** unique equilibrium $q_A=q_B=m$. Losing hands the rival
  everything, so ideologues behave like office-seekers.
- **Divergence (median uniform on $[\mu-c,\mu+c]$, quadratic loss, ideals $\mu\mp a$):** FOC
  $\frac{\partial\pi_A}{\partial q_A}[u_A(q_A)-u_A(q_B)]+\pi_Au_A'(q_A)=0$ with $\partial\pi_A/\partial q_A=1/(4c)$ gives
  platforms $\mu\mp s^*$,
  $$s^*=\frac{ac}{a+c}.$$
  Each moves toward the centre but stops short; $s^*\to0$ as $c\to0$. Linear loss sends platforms to the support edges.

*In words:* divergence needs policy motivation **and** uncertainty about the median; either alone gives convergence.

*Also:* both candidates would prefer the median for sure to the equilibrium coin flip (quadratic loss makes them
risk-averse), yet neither can stay there alone. Groseclose (AJPS 2001) adds valence and obtains divergent equilibria
(his comparative statics are not asserted in 2.4).

*Lessons:* [2.1](lessons/02-01-the-downsian-spatial-model.md), [2.4](lessons/02-04-valence-and-citizen-candidates.md)

### Win-set

$W(q)$, the set of policies that beat $q$.

- **Majority (2.2):** $W(q)=\{y:\#\{i:u_i(y)>u_i(q)\}>n/2\}$; in the plane, the union of pairwise overlaps of the
  voters' indifference discs through $q$.
- **Veto players (3.5):** $W(q)$ = points other than $q$ that **every** veto player weakly prefers to $q$. On a line with
  $q$ above all ideals, $W(q)=[2v_{\max}-q,\,q)$. Adding a veto player never enlarges it.

*In words:* the win-set is the set of moves the decisive group would accept; empty win-set means the status quo is stable.

*Lessons:* [2.2](lessons/02-02-multidimensional-voting-and-chaos.md), [3.5](lessons/03-05-agenda-setters-and-veto-players.md)

### Majority core

Points $q$ with $W(q)=\varnothing$: no policy beats $q$ by a strict majority (a Condorcet winner over the policy space).

**2.2 Theorem 1 (median-line test, Euclidean preferences).**

$$q\in\text{core}\iff \forall d:\ \#\{i:(x_i-q)\cdot d>0\}\le n/2,$$

i.e. every line through $q$ has at most $n/2$ ideal points strictly on each side. (Key step: $i$ prefers $y=q+d$ iff
$(x_i-q)\cdot d>\lVert d\rVert^2/2$.)

*In words:* $q$ is unbeatable exactly when every line through it splits the voters with no strict majority on either side.

- Three non-collinear voters: core empty (Proposition 1, via the contract-line Lemma: the foot of the perpendicular from
  $q$ to the line through $x_i,x_j$ is closer to both).
- **Odd $n$ is needed** for "generically empty": with $n$ even, ties keep points unbeaten; every four voters in general
  position have a core point (diagonal intersection or interior voter).

*Lessons:* [2.2](lessons/02-02-multidimensional-voting-and-chaos.md)

### Plotts conditions

Plott (AER 1967), pairwise symmetry. With $n$ **odd** and one voter at $q$: $q$ is the core iff the other $n-1$
voters pair off on **opposite rays** from $q$ (exactly opposed interests). Sufficiency: any line through $q$ puts at most
one of each pair on a side. Necessity (exactly one voter at $q$): rotate a line through $q$; halves stay equal only if
opposite rays carry equal numbers.

*In words:* a core exists only on a knife-edge; move one voter slightly and it vanishes, so for odd $n$ the core is
empty for almost every configuration.

*Does not say:* that cores are rare for even $n$ (see [majority core](#majority-core)). Plott's smooth-preference
statement is cited, not proved.

*Lessons:* [2.2](lessons/02-02-multidimensional-voting-and-chaos.md)

### McKelvey chaos theorem

McKelvey (JET 1976): finitely many voters, Euclidean preferences in $\mathbb R^m$, $m\ge2$, pairwise majority rule.
If the core is empty, then for any $x,y$ there is a chain $x=z_0,z_1,\dots,z_k=y$ with each $z_{j+1}$ beating $z_j$.
Schofield (RES 1978) extends it to smooth preferences.

*In words:* without a core the top cycle is the whole space, so a chair who sets the agenda and faces sincere voters can
end anywhere, even at a point every voter likes less than the start.

*Turns on:* sincere voting on each pair and a chair free to propose anything. *Does not say:* that legislatures wander.
Sophisticated voters or competing proposers pull outcomes into the [uncovered set](#uncovered-set); rules restore
[structure-induced equilibrium](#structure-induced-equilibrium); noise restores [probabilistic voting](#probabilistic-voting)
equilibrium. Whether it "wounds democracy" is Riker versus Mackie,
[`political-philosophy` 5.4](../political-philosophy/lessons/05-04-does-social-choice-wound-democracy.md).

*Lessons:* [2.2](lessons/02-02-multidimensional-voting-and-chaos.md), [2.3](lessons/02-03-probabilistic-voting.md)

### Structure-induced equilibrium

Shepsle (AJPS 1979). With $n$ odd, **separable** preferences (each voter's ranking of one coordinate does not depend on
the other, single-peaked with peak $x_{ik}$) and amendments restricted to **one dimension at a time**,

$$z^*=(\operatorname{med}_ix_{i1},\ \operatorname{med}_ix_{i2})$$

beats every admissible amendment (2.2 Proposition 2).

*In words:* the rule, not preferences, supplies the equilibrium: $z^*$ is usually beaten by a joint move the rule forbids.

*Does not say:* that $z^*$ is a Condorcet winner (2.2 Example 1 beats it with a joint move). Without separability the
outcome can depend on vote order (Shepsle's paper treats it; the lesson does not). Riker: institutions are chosen too, so
instability may reappear one level up. Portfolio allocation (5.2) is the cabinet version.

*Lessons:* [2.2](lessons/02-02-multidimensional-voting-and-chaos.md); used in [5.2](lessons/05-02-coalition-and-government-formation.md)

### Uncovered set

$y$ **covers** $x$ if $y$ beats $x$ and beats everything $x$ beats; the uncovered set is the set of points nothing covers
(Miller, AJPS 1980). It contains the core when the core is nonempty. McKelvey (AJPS 1986, strictly quasi-concave
preferences): it contains the equilibrium outcomes of two-candidate competition in a large electorate, cooperative
bargaining in small committees, and sophisticated voting with endogenous agendas; it is bounded, centered on a
generalized median set, and smaller the more symmetric the ideal points.

*In words:* chaos is what a sincere electorate and an all-powerful chair can reach; the uncovered set is the small central
region forward-looking players settle in.

*Lessons:* [2.2](lessons/02-02-multidimensional-voting-and-chaos.md)

### Swing voters

In probabilistic voting: groups with **high ideological density** $\phi_g$, i.e. many members near indifference per unit
of utility. A candidate's marginal votes from a utility gift to group $g$ are $n_g\phi_g$.

*In words:* the swing group is the dense one, not the evenly split one; shifting a uniform group's ideology toward A
leaves $\phi_g$ unchanged while it stays interior.

*Not the same as:* the [swing voter's curse](#swing-voters-curse) (1.3: uninformed common-value independents).

*Lessons:* [2.3](lessons/02-03-probabilistic-voting.md)

### Probabilistic voting

Lindbeck and Weibull (Public Choice 1987), in the textbook form of Persson and Tabellini, *Political Economics*.
**Game:** two candidates commit simultaneously to $q_A,q_B$ in a compact convex $Q$ (any dimension); groups $g$ with
shares $n_g$ and concave $u_g(q)$; voter $i$ in $g$ has bias $\sigma_{ig}$ toward B, uniform with density $\phi_g$; a
popularity shock $\delta$ toward B, uniform with density $\psi$; shocks realized after platforms; sincere voting, no
abstention: $i$ votes A iff $u_g(q_A)-u_g(q_B)>\sigma_{ig}+\delta$; each maximizes win probability.

**Result.** Under **interiority** (every group partly contested at every platform pair),

$$p_A=\tfrac12+\frac{\psi}{\bar\phi}\big[W(q_A)-W(q_B)\big],\qquad W(q)=\sum_gn_g\phi_gu_g(q),\quad\bar\phi=\sum_gn_g\phi_g ,$$

so maximizing $W$ is a **dominant strategy**; equilibrium iff both platforms maximize $W$, unique ($q_A=q_B=q^*$) if
$W$ is strictly concave. Expected vote share is $\tfrac12+W(q_A)-W(q_B)$, so vote-share maximizers choose the same $q^*$.

*In words:* both converge, not to a median, but to the policy maximizing group welfare weighted by size times
ideological density.

- **Transfers FOC:** $\phi_gu'(t_g)=\lambda$ for every group with $t_g>0$; with $u=\ln$, $t_g=\phi_g/\bar\phi$.
- **Weights are responsiveness**, not need or desert (no normative endorsement).
- **Interiority bites:** with thin ideology a candidate can write a group off (2.3 Example 2: the write-off beats $q^*$
  there iff $\phi_2>1/(6\ln2)$); in the no-ideology limit, 2.2's divide-the-dollar chaos returns. Lindbeck-Weibull state
  that existence needs enough randomness in party preferences.
- **Other uses:** fixes deterministic valence (2.4); national-share (PR) competition and swing districts (2.6); with
  Meltzer-Richard preferences in 5.4, $t^*=t(y_\phi)$ with $y_\phi=\sum n_g\phi_gy_g/\sum n_g\phi_g$, the
  density-weighted **mean** income (equal densities give $t^*=0$); one way the decisive voter stops being the median
  earner (5.3).

*Lessons:* [2.3](lessons/02-03-probabilistic-voting.md), [2.4](lessons/02-04-valence-and-citizen-candidates.md), [2.6](lessons/02-06-electoral-rules-compared-formally.md), [5.3](lessons/05-03-the-meltzer-richard-model.md), [5.4](lessons/05-04-the-political-economy-of-inequality.md)

### Core and swing voter targeting

Dixit and Londregan (Journal of Politics 1996): groups are internally mixed in party loyalty. **Equal delivery
ability:** both parties court the groups most responsive to favours (swing-voter outcome). **Each party delivers more
effectively to its own supporters:** each can favour its core ("machine politics"); a machine may even tax its core to buy
others. One-line version (2.3): if a dollar from party $P$ reaches $g$ as $e_{Pg}\le1$, $P$ maximizes
$\sum_gn_g\phi_gu(e_{Pg}t_{Pg})$; each party still has a dominant strategy, but they differ, so platforms diverge.

*Lessons:* [2.3](lessons/02-03-probabilistic-voting.md)

### Valence

A non-policy advantage $v>0$ (competence, recognition, incumbency) added **equally to every voter's** utility for one
candidate; it moves no ideal point. **Game (2.4):** $F$ continuous with positive density, median $x_m$; platforms
committed simultaneously; quadratic utility; voter gets $-(q_A-x_i)^2+v$ if A wins, $-(q_B-x_i)^2$ if B wins; common
knowledge, sincere voting.

- **Cutpoint:** with $d=q_B-q_A>0$, $i$ votes A iff $x_i<\frac{q_A+q_B}{2}+\frac{v}{2d}$. B's best reply stands
  $\sqrt v$ from A: $s_B^*(q_A)=\max\{1-F(q_A+\sqrt v),F(q_A-\sqrt v)\}$.
- **Vote share (Proposition 1, $\sqrt v<\tfrac12$):** no pure equilibrium (copy-and-flee: A copies, B flees).
- **Win probability (Proposition 2):** pure equilibria exactly the profiles with $|q_A-x_m|<\sqrt v$, $q_B$ arbitrary
  (degenerate: the underdog's platform is undetermined).
- **Uncertainty fixes it:** Aragones and Palfrey (JET 2002): median's location uncertain, favoured candidate wins unless
  the other is closer by a fixed margin; pure equilibria generally fail; in the (essentially unique) symmetric mixed
  equilibrium the favourite is more moderate. 2.4 Example 2 is a three-position game in that spirit (favourite central,
  underdog extreme).

*In words:* deterministic valence kills pure equilibrium **only under vote-share objectives**; under win probability it
leaves a continuum of trivial ones.

*Lessons:* [2.4](lessons/02-04-valence-and-citizen-candidates.md)

### Citizen-candidate model

Osborne and Slivinski (QJE 1996). **Game:** continuum of citizens, distribution $F$, unique median $m$; each
simultaneously chooses whether to enter; an entrant runs **at her own ideal point** (no commitment), pays $c$, gets $b$
if she wins; all get $-\lvert w-a\rvert$; sincere plurality voting, ties by lottery; $-\infty$ if nobody runs; Nash
equilibrium of the entry game.

- **One candidate (their Prop 1):** exists iff $b\le2c$; at $m$ if $c\le b\le2c$; anywhere within $(c-b)/2$ of $m$ if
  $b<c$.
- **Two candidates (their Prop 2, symmetric single-peaked density):** at $m\pm\varepsilon$ iff
  $$\varepsilon>0,\qquad \varepsilon\ge c-\tfrac b2\ \text{(nobody quits)},\qquad \varepsilon\le e_p=2\big(m-F^{-1}(\tfrac13)\big)\ \text{(no centrist wins)},$$
  with $\varepsilon=e_p$ allowed only if $e_p\le3c-b$. Uniform $[0,1]$: $e_p=\tfrac13$.
- The same electorate can support one candidate or two: **the number of candidates is an equilibrium object.** Three-
  candidate equilibria exist too (a sure loser can run to tip the winner); candidates fall with $c$, rise with $b$.
- **Besley and Coate** (QJE 1997): finite electorate, strategic voting, many dimensions; a centrist draws votes only if
  expected viable, so the entry threat can be weaker.

*In words:* candidates who cannot commit sit apart, far enough that neither would rather quit, close enough that no
centrist can win.

*Turns on:* no commitment (with commitment Downsian convergence returns) and sincere voting. Divergence here has **no
uncertainty** behind it, unlike 2.1's.

*Lessons:* [2.4](lessons/02-04-valence-and-citizen-candidates.md)

### Prospective rating

Myerson and Weber ("A Theory of Voting Equilibria", APSR 1993). With $p_{jk}$ the perceived probability that $j$ and
$k$ tie for first (near-tie outcomes equally likely; three-way ties negligible), a plurality ballot for $j$ has expected
gain

$$R_j=\sum_{k\ne j}p_{jk}(u_j-u_k),$$

and a voter votes for a candidate with the highest $R_j$.

*In words:* a vote is worth, summed over the races it could swing, how likely each race is times how much you care.

*Lessons:* [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md)

### Strategic voting

Voting for someone other than your favourite because your favourite is out of the decisive race. Plurality is
manipulable ([`social-choice` 3.1](../social-choice/lessons/03-01-manipulation-and-strategy-proofness.md)); in a
[Duvergerian equilibrium](#duvergerian-equilibrium) the manipulation is coordinated.

*Not:* abandoning **small** parties as such; voters abandon parties **expected to be out of the decisive race**, which
can be the centre and the Condorcet winner (2.5 Example 1).

*Contrast:* in 1.3 strategic behaviour misreports nothing (abstention conditions on pivotality); in 5.1 legislators vote
"as if pivotal".

*Lessons:* [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md)

### Duvergers law

Duverger (*Les partis politiques*, 1951): plurality in single-member districts favours two parties. **As an equilibrium
(2.5 Theorem 1, Myerson-Weber ordering condition, strict rankings):** in any voting equilibrium with
$S_A\ge S_B>S_C$, $S_C=0$; every voter votes for her preferred member of $\{A,B\}$.

*In words:* if third place is strictly behind second, nobody votes for third.

**Ordering condition:** if $S_j<S_h$ then $p_{jk}\le\varepsilon p_{hk}$ for any third $k$; as $\varepsilon\to0$ the
rescaled limit $q$ puts weight only on races among the top two (or those tied for the top).

*Turns on:* a **strict** gap between second and third; shared, accurate expectations (equal pivot probabilities make
everyone sincere); instrumental voters. *Does not show:* which pair forms (every pair with support is an equilibrium);
the observed regularity and cross-district linkage
([`political-institutions` 2.3](../political-institutions/lessons/02-03-duvergers-law-observed.md)).

*Lessons:* [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md)

### Duvergerian equilibrium

"Everyone votes for her preferred member of an expected pair $\{j,k\}$" is a voting equilibrium for **every** pair with
support (three with three candidates; Palfrey 1989 noted it). The winner is the head-to-head winner of the pair, so it
is never a Condorcet loser, but a Condorcet winner left out of the pair loses.

*In words:* preferences decide the winner inside the pair; expectations decide the pair.

*Lessons:* [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md)

### Non-Duvergerian equilibrium

If second and third tie in expected share, $S_B=S_C<S_A$, only $q_{BC}$ is forced to 0 and $\lambda=q_{AB}$ is free;
three candidates survive and a split opposition can elect the leader, even a Condorcet loser.

| Model | Status |
|---|---|
| Myerson-Weber | robust to small changes in the electorate ($\lambda$ adjusts); Duverger's law needs an extra stability assumption |
| Palfrey (independent ballots, multinomial pivot odds) | knife-edge |
| Fey ("Stability and Coordination in Duverger's Law", APSR 1997) | unstable once voters update on polls; drift goes to a Duvergerian equilibrium |

*In words:* only a tie for second keeps a third candidate alive, and whether that matters depends on how pivot odds are
modelled.

*Lessons:* [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md)

### M plus one rule

Cox (*Making Votes Count*, 1997): in a district electing $M$ members, the decisive race is for the last seat, so at most
$M+1$ candidates or lists are viable. **Runoff:** $M$ = number of first-round candidates who advance ($M=2$), so up to
**three** viable first-round candidates (no "2M" form).

*In words:* the Duverger desertion argument, applied to the last seat.

*Does not say:* how many will be viable (it is an upper bound); it needs assumptions about voters (here visible:
instrumental motives, shared accurate expectations, races that might be close).

*Lessons:* [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md)

### Centripetal and centrifugal incentives

Cox ("Centripetal and Centrifugal Incentives in Electoral Systems", AJPS 1990), in Myerson's compact form (EER 1999).
$K$ win-motivated candidates each at Left or Right; fraction $q$ prefer Left; voters rank candidates at their position
first (random within); scoring rule $1=s_1\ge\dots\ge s_K=0$, average score $S^*=\frac1K\sum_js_j$.

$$\text{all at Right is an equilibrium}\iff q\le S^* .$$

| Rule | $S^*$ | Pull |
|---|---|---|
| plurality | $1/K$ | centrifugal (a minority above $1/K$ is worth chasing) |
| Borda | $1/2$ | majoritarian |
| negative voting | $(K-1)/K$ | centripetal (huddle even if a majority is neglected) |

*In words:* a minority larger than the average score is worth defecting to.

*Lessons:* [2.6](lessons/02-06-electoral-rules-compared-formally.md)

### Favored minorities

Myerson ("Incentives to Cultivate Favored Minorities under Alternative Electoral Systems", APSR 1993). $K$ candidates
each commit to an offer distribution $F$ with mean 1; offers to a voter are independent draws; plurality wins the voter
with probability $F(x)^{K-1}$. Symmetric equilibrium:

$$F(x)=(x/K)^{1/(K-1)},\qquad 0\le x\le K .$$

(Proof of equilibrium: $F^{K-1}\le x/K$ with equality on $[0,K]$, so any mean-1 $G$ earns at most $1/K$; uniqueness is
Myerson's.) $K=4$: 63 percent get less than the per-capita budget, median promise 0.5. **Borda:** uniform on $[0,2]$ for
every $K$.

*In words:* plurality rewards promising a lot to a few and little to many.

*Lessons:* [2.6](lessons/02-06-electoral-rules-compared-formally.md)

### Public goods vs targeted transfers

Lizzeri and Persico ("The Provision of Public Goods under Alternative Electoral Incentives", AER 2001). **Game:**
continuum of voters, endowment 1; two office-seeking candidates make simultaneous **binding** promises: the public good
(every voter gets $G$) or balanced pork ($c\ge0$, mean 1); voters vote for the larger promise; **WTA** payoff = win
(1, $\tfrac12$, 0); **PR** payoff = vote share. Efficient iff $G>1$.

| $G$ | Equilibrium |
|---|---|
| $G<1$ | never the public good |
| $G>2$ | public good for sure (pork can reach under $1/G<\tfrac12$ of voters) |
| $1<G<2$ | unique, mixed: public good w.p. $\pi$, else pork from $F^*$ uniform on $[0,2-G]\cup[G,2]$ |

$$\pi_{\text{WTA}}=\tfrac12,\qquad \pi_{\text{PR}}=G-1,\qquad \text{PR better ex ante iff } G>\tfrac32 .$$

Key step: a pork deviation leaving fraction $p$ below $G$ scores $\tfrac12+\kappa(p-\tfrac12)$ against $F^*$,
$\kappa=(G-1)/(2-G)$. **Electoral college** (majority of a continuum of districts): pork needs a quarter of the
electorate, so sure provision needs $G>4$, and provision probability is at most $\tfrac12$ for $1<G<4$ (LP do not prove
existence there).

*In words:* under winner-take-all the good is a coin flip whatever it is worth; under vote-share rewards it is provided
more often the better it is.

*Turns on:* two office-seeking candidates in **both** systems; only the payoff (share vs win) differs. *Does not show:*
anything about multiparty PR or post-election coalitions ([5.2](lessons/05-02-coalition-and-government-formation.md)). For $1<G<\tfrac32$ WTA provides the good more often.

*Lessons:* [2.6](lessons/02-06-electoral-rules-compared-formally.md)

### Swing districts

Persson-Tabellini logic ("The Size and Scope of Government", EER 1999; a Lindbeck-Weibull model in which majoritarian
elections supply fewer public goods). 2.6's stripped version (its own specification): $D$ equal districts, $D$ odd,
$(D-1)/2$ safe for each party, one swing; budget $g+\frac1D\sum_Jf_J=1$; $u_J=f_J+b\ln g$, $0<b<1$.

| System | Objective | Public good |
|---|---|---|
| proportional (national share) | $\sum_Ju_J$ | $H'(g)=1$: $g=b$ (Samuelson) |
| majoritarian (majority of districts) | $u_s$ only | $H'(g)=D$: $g=b/D$, swing district gets $f_s=D(1-g)$ |

*In words:* when only one district in $D$ decides, a good everyone shares is valued as if only the swing district used it.

*Turns on:* safe districts whose votes do not count at the margin; not selfish tastes. *Evidence:* weak cross-country
support in PT's own early data, as LP report; identification is `empirical-political-economy`'s.

*Lessons:* [2.6](lessons/02-06-electoral-rules-compared-formally.md)

**Module 3: collective action and the choice of rules**

### Free-rider problem

Each member gains from a shared good but does better letting others pay, so contributions fall short of the efficient
level. Two forms: in the [n-person prisoners' dilemma](#n-person-prisoners-dilemma) not contributing is dominant; in the
continuous Olson model each member stops where **his own share** of marginal benefit equals cost, ignoring others'
benefit, so $\hat G<G^*$.

*In words:* the free rider fails to **add** (3.1-3.2); on a commons she fails to **hold back** (3.3).

*Not solved by* selective incentives, only routed around through a private market ([selective incentives](#selective-incentives)).

*Lessons:* [3.1](lessons/03-01-free-riding-and-threshold-games.md), [3.2](lessons/03-02-olsons-logic-of-collective-action.md)

### n-person prisoners dilemma

**Game:** $n$ players choose $a_i\in\{0,1\}$ simultaneously; each contribution costs its maker $c$ and gives every
member $b$; $u_i=bm-ca_i$ with $m=\sum_ja_j$; assume $b<c<nb$.

**Result:** not contributing is strictly dominant (switching changes $u_i$ by $b-c<0$); unique NE $m=0$; all-contribute
pays each $nb-c>0$.

*In words:* each gift costs its giver more than it returns to her but less than it returns to the group.

$nb>c$ is the Samuelson condition for this good. Hardin ("Collective action as an agreeable n-prisoners' dilemma",
Behavioral Science 1971) read Olson's problem as this game. *Contrast:* a [threshold good](#threshold-public-goods) has
no dominant strategy and has provision equilibria; the PD has none.

*Lessons:* [3.1](lessons/03-01-free-riding-and-threshold-games.md)

### Threshold public goods

**Game (Palfrey and Rosenthal, J. Public Economics 1984):** $n$ players, $a_i\in\{0,1\}$ simultaneous; a good worth $V$
to every member is provided iff $m\ge k$; each contributor pays $c\in(0,V)$ **whether or not** it is provided (no
refund); common knowledge. $u_i=V\mathbf 1[m\ge k]-ca_i$.

- **Pivot lemma:** with $j$ other contributors, contributing changes $u_i$ by $V\mathbf 1[j=k-1]-c$. The two ways of not
  being pivotal are the two problems: $j\ge k$ is free riding, $j\le k-2$ is futility.
- **Pure NE (Prop 1):** exactly $k$ contribute ($\binom nk$ equilibria), or nobody when $k\ge2$.
- **Symmetric mixed NE (Prop 2):** $p$ with $V\pi(p)=c$, $\pi(p)=\binom{n-1}{k-1}p^{k-1}(1-p)^{n-k}$. For
  $2\le k\le n-1$, $\pi$ is single-peaked at $\hat p=\frac{k-1}{n-1}$: two roots if $c/V<\pi(\hat p)$, one if equal, none
  if greater. Exactly one for $k=1$ and for $k=n$.
- **Large groups:** with $k/n$ fixed, $\pi(\hat p)\sim1/\sqrt n$, so the mixed equilibria vanish (PR's limit). With $k$
  **fixed**, $\pi(\hat p)$ falls only to a Poisson limit ($2e^{-2}\approx0.271$ at $k=3$), so they need not vanish.
- **Refunds:** pure equilibria are a superset; each mixed equilibrium has a refund counterpart with more contributors.
  PR also have partly mixed equilibria (the lesson uses only fully symmetric ones).
- **Endogenous threshold (3.2):** Hardin's $k$, the smallest subgroup that gains from providing alone, is such a
  threshold; equal shares and cost a third of group value give $k=\lceil n/3\rceil$.

*In words:* a lumpy good is worth paying for only when you are pivotal, so groups provide it with no slack or not at
all; a large anonymous group's only symmetric outcome is nobody.

*Turns on:* who the $k$ are. The provision equilibria are asymmetric and need a coordination device (a leader, roles,
a "minimal contributing set": van de Kragt, Orbell and Dawes, APSR 1983); identical common-knowledge $V$ and $c$
(private costs give cutoff strategies in a Bayesian game).

*Lessons:* [3.1](lessons/03-01-free-riding-and-threshold-games.md), [3.2](lessons/03-02-olsons-logic-of-collective-action.md)

### Assurance game

The $k=n$ threshold game, an $n$-player stag hunt ([`grad-game-theory` 2.4](../grad-game-theory/lessons/02-04-computing-characterizing-equilibria.md)):
contribute iff all others do. Both all-contribute and nobody are equilibria; exactly one symmetric mixed equilibrium
($\pi=p^{n-1}$). After the assurance problem Sen posed (QJE 1967).

*In words:* nobody wants to give unless assured everyone else will.

*Lessons:* [3.1](lessons/03-01-free-riding-and-threshold-games.md)

### Volunteers dilemma

The $k=1$ threshold game (Diekmann, J. Conflict Resolution 1985): someone must call the police. No equilibrium with
nobody volunteering; $n$ single-volunteer pure equilibria; unique symmetric mixed equilibrium

$$p_n=1-(c/V)^{1/(n-1)},\qquad \Pr(\text{nobody})=(c/V)^{n/(n-1)}\uparrow c/V .$$

*In words:* in a bigger crowd each person volunteers less, and the chance nobody does rises.

*Lessons:* [3.1](lessons/03-01-free-riding-and-threshold-games.md)

### Olsons logic

Olson (*The Logic of Collective Action*, 1965): shared interest does not imply collective action; who organizes
depends on how the benefit is **split**. **Model (3.2):** $n$ members contribute $z_i\ge0$ simultaneously;
$G=\sum z_j$, unit cost; group value $V(G)=a\,g(G)$, $g$ increasing, strictly concave; member $i$ gets a **fixed share**
$s_i$ ($\sum s_i=1$); $u_i=s_iag(G)-z_i$; Nash equilibrium.

**Proposition 1.** If $s_1$ is the strict largest share: $G=0$ if $s_1ag'(0)\le1$; otherwise only member 1 contributes,
$s_1ag'(\hat G)=1$, and $\hat G<G^*$ where $ag'(G^*)=1$ (Samuelson). Power benefits $g=G^\beta$:

$$\hat G=(\beta s_1a)^{1/(1-\beta)},\qquad \frac{\hat G}{G^*}=s_1^{1/(1-\beta)}\ \ (=n^{-1/(1-\beta)}\text{ with equal shares}).$$

*In words:* the biggest stakeholder provides alone, stops where his own slice of the marginal benefit equals the cost,
and the shortfall depends only on the largest share; equal large groups provide almost nothing.

*Uses elsewhere:* small-group advantage reappears as $\delta^*(n)$ rising in $n$ (3.3); Olson explains which sectors are
organized in Grossman-Helpman (4.3); [concentrated benefits, diffuse costs](#concentrated-benefits-diffuse-costs) in
regulation (4.4).

*Turns on:* **rivalry** (fixed shares of a fixed $V$). See [rivalry and group size](#rivalry-and-group-size).

*Lessons:* [3.2](lessons/03-02-olsons-logic-of-collective-action.md), [3.3](lessons/03-03-the-commons-and-common-pool-resources.md), [4.3](lessons/04-03-lobbying-protection-for-sale.md), [4.4](lessons/04-04-regulatory-capture.md)

### Privileged intermediate latent groups

Olson's typology. **Privileged:** some member gains enough to provide the good alone ($s_1ag'(0)>1$; Hardin: $k=1$).
**Intermediate:** nobody does, but the group is small enough that members notice whether others help, so bargaining
and threshold logic apply. **Latent:** so large that no member's contribution perceptibly affects anyone; nothing is
provided without [selective incentives](#selective-incentives).

*In words:* the question is whether anyone's own stake pays for action, and whether anyone would notice a defection.

Hardin (*Collective Action*, 1982) restated it with $k$ and argued that size and latency have no logical link.

*Lessons:* [3.2](lessons/03-02-olsons-logic-of-collective-action.md)

### Exploitation of the great by the small

With power benefits the largest-share provider nets $(1-\beta)s_1V(\hat G)$ (since $\hat G=\beta s_1V(\hat G)$) while
member $j$ nets $s_jV(\hat G)$; a smaller member out-earns the provider whenever $s_j>(1-\beta)s_1$.

*In words:* the one who pays is not the one who does best.

Olson's phrase; Olson and Zeckhauser ("An Economic Theory of Alliances", Review of Economics and Statistics 1966)
predicted NATO's largest members carry more than their proportional share. The two-donor version is
[`public-economics` 1.2](../public-economics/lessons/01-02-voluntary-provision-and-crowding-out.md)'s.

*Lessons:* [3.2](lessons/03-02-olsons-logic-of-collective-action.md)

### Selective incentives

A private benefit $b$ available only to contributors. A latent member gains $\approx0$ from his own dues $d$, so he
pays only if roughly $b\ge d$. **By-product theory:** large lobbies (unions, professional associations) are financed by
selling private goods (insurance, journals, a closed shop); lobbying is funded from the margin, at most $n(b-\kappa)$
where $\kappa$ is the private good's cost per member.

*In words:* the free-rider problem is routed around through a private market, not solved.

*Does not show:* how the organization formed (Hardin: selective incentives explain maintenance, not formation); it
unravels if a rival sells the same private good at cost without the dues, unless membership is compelled.

*Lessons:* [3.2](lessons/03-02-olsons-logic-of-collective-action.md)

### Rivalry and group size

Olson's **absolute** claim (larger groups provide less) needs fixed shares of a fixed value: adding a member divides the
benefit. For a **nonrival** good (each member values $10G^{2/3}$ however many share it, in 3.2's example), the provider's
FOC does not change with $n$, so provision does not fall; only $\hat G/G^*$ does.

*In words:* "large groups get less" needs rivalry; "large groups fall further short of what they should get" does not.

**Attribution (split):** Chamberlin ("Provision of Collective Goods as a Function of Group Size", APSR 1974) showed the
absolute claim fails in general for a nonrival good. Hardin (*Collective Action*, 1982) argued size and latency have no
logical link because latency depends on $k$, not $n$; $k$ grows with $n$ only if stakes shrink as members join.

*Lessons:* [3.2](lessons/03-02-olsons-logic-of-collective-action.md)

### Common-pool resource

Rival (one user's take is gone for others) but costly to exclude: fisheries, aquifers, pastures, canals, the atmosphere
as a carbon sink. The category is [`grad-micro` 6.4](../grad-micro/lessons/06-04-public-goods.md)'s.

**Open access** (nobody can be excluded; Gordon's model) versus a **common-property regime** (a bounded group with
rules). Ostrom's principle 1 is the move from one to the other.

*Lessons:* [3.3](lessons/03-03-the-commons-and-common-pool-resources.md)

### Tragedy of the commons

The static $n$-user commons: each user counts the crowding of her own share only, so the Nash equilibrium
over-extracts. The one-shot game is owned by
[`game-theory-refresher` 1.4](../game-theory-refresher/lessons/01-04-cournot-bertrand-applications.md); Garrett Hardin
named it ("The Tragedy of the Commons", Science 1968) and called for mutually agreed coercion; the policy menu that
followed was state control or private property.

*Linear commons* $u_i=e_i(A-E)$: stage Nash $A/(n+1)$ each; efficient total $A/2$.

*Does not predict:* ruin for every commons; only for a one-shot game or open access. Ostrom's bounded, repeated groups
are a different game.

*Lessons:* [3.3](lessons/03-03-the-commons-and-common-pool-resources.md)

### Rent dissipation

Rent competed away by entry or effort.

- **Open access (Gordon, "The Economic Theory of a Common-Property Resource: The Fishery", JPE 1954):** effort $E$
  yields $Y(E)$, shared in proportion to effort, unit cost $w$. Symmetric FOC
  $$\tfrac1nY'(E)+\big(1-\tfrac1n\big)\frac{Y(E)}{E}=w ;$$
  a sole owner sets $MP=w$; as $n\to\infty$ or with free entry, $AP=w$ and the rent is zero. With $Y=A\sqrt E$ the
  rent left is $(2n-1)/n^2$ of the sole owner's. The waste comes from no exclusion, not fishers' character.
- **Tullock contest (4.5):** dissipation $D=r(n-1)/n$ in the symmetric equilibrium: $\to1$ with free entry at $r=1$;
  $\to r$ for $r<1$; $=1$ at the boundary $r=n/(n-1)$. Never above 1 in any equilibrium, since each player can secure 0.

*In words:* the prize attracts as much spending as it is worth, when entry or effort is unrestricted.

*Lessons:* [3.3](lessons/03-03-the-commons-and-common-pool-resources.md), [4.5](lessons/04-05-rent-seeking-contests.md)

### Critical discount factor

The patience threshold above which a cooperative path is sustainable.

- **Commons (3.3):** grim trigger sustains a quota iff
  $$\delta\ge\delta^*=\frac{v^D-v^C}{v^D-v^N},$$
  ($v^C$ cooperate, $v^D$ best one-period deviation, $v^N$ stage Nash; $v^D>v^C>v^N$; perfect monitoring). Linear commons:
  $\delta^*(n)=\frac{(n+1)^2}{n^2+6n+1}$, from $9/17$ at $n=2$ toward 1. With detection probability $\pi$:
  $\delta^*=g/(g+\pi)$, $g=(v^D-v^C)/(v^C-v^N)$ (3.3 P2).
- **Fine-then-forgive** (graduated sanction): a fine $s$ with $\delta s\ge v^D-v^C$ and $s\le(v^C-v^N)/(1-\delta)$ exists
  iff $\delta\ge\delta^*$: the **same** threshold. It keeps one violation from destroying cooperation; it does not relax
  the constraint.
- **Accountability (4.1):** rents are driven to zero iff $\delta\ge\bar R/(\bar R+W)$.

*In words:* restraint holds when the stream of lost cooperation outweighs one period of grabbing.

*Lessons:* [3.3](lessons/03-03-the-commons-and-common-pool-resources.md), [4.1](lessons/04-01-elections-as-accountability.md)

### Ostroms design principles

Ostrom (*Governing the Commons*, 1990), eight, paraphrased: (1) clearly defined boundaries (users and resource); (2)
rules congruent with local conditions, costs matched to benefits; (3) collective-choice arrangements; (4) monitoring by
users or monitors accountable to them; (5) graduated sanctions; (6) cheap, accessible conflict resolution; (7)
recognition of the right to organize by outside authorities; (8) nested enterprises.

**Mapped onto the incentive constraint** $(1-\delta)(v^D-v^C)\le\delta(v^C-v^N)$:

| Principle | Term |
|---|---|
| boundaries | $n$, and whether it is fixed (unbounded entry is Gordon's limit) |
| monitoring | detection probability (perfect monitoring assumed in the Proposition) |
| graduated sanctions | form of punishment (same threshold as grim trigger) |
| collective choice, congruence | which quota $e^C$ (folk theorem leaves it open) |
| recognition of rights | $\delta$ (survival of the arrangement) |

*Where they go beyond the model:* monitoring and sanctioning are costly (a second-order collective-action problem); rules
are argued over and nested. Ostrom, Walker and Gardner ("Covenants with and without a Sword", APSR 1992) varied
communication and sanctioning (design only reported in 3.3).

*Lessons:* [3.3](lessons/03-03-the-commons-and-common-pool-resources.md)

### Constitutional stage

Rules are chosen **before** issues are known, under uncertainty about one's future positions. Buchanan and Tullock
want unanimity for the constitution itself, even if operating rules are not unanimous. A self-interested cousin of
Rawls's veil of ignorance ([`political-philosophy` 2.2](../political-philosophy/lessons/02-02-rawls-the-original-position.md)).

*Lessons:* [3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md)

### Buchanan-Tullock calculus

Buchanan and Tullock (*The Calculus of Consent*, 1962). Choose the required fraction $q$ to minimize expected
**external cost** $E(q)$ (decreasing, $E(1)=0$) plus **decision cost** $D(q)$ (increasing, steep near 1):

$$\min_qC(q)=E(q)+D(q),\qquad -E'(q^*)=D'(q^*)\ \text{(interior)} .$$

With $E=\alpha e(q)$: $dq^*/d\alpha=-e'(q^*)/C''(q^*)>0$; weightier issues deserve higher thresholds.

*In words:* raise the required majority until the external cost saved at the margin equals the decision cost added;
majority rule has no special status on that axis.

*Does not show:* that supermajorities are optimal (the optimum depends on the shapes of $E$ and $D$, which differ by
issue); $E$ and $D$ are posited, not derived; logrolling and side payments change both.

*Lessons:* [3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md)

### Rae-Taylor theorem

Rae ("Decision-Rules and Individual Values in Constitutional Choice", APSR 1969); general proof by Taylor ("Proof of a
theorem on majority rule", Behavioral Science 1969). Assumptions: (1) equiprobability, (2) independence, (3) equal
intensity, (4) sincere voting, no coalitions or side payments. With $S\sim\operatorname{Bin}(n-1,\tfrac12)$ other yes
votes and threshold $k$,

$$P_k=\tfrac12\big(1+\Pr[S=k-1]\big),$$

maximized uniquely at $k=(n+1)/2$ for $n$ odd; $k=n/2$ and $n/2+1$ tie for $n$ even.

*In words:* every rule gets her her way half the time plus half her [pivot probability](#pivot-probability), and simple
majority makes her pivotal most often.

*Does not show:* that majority is best for a known member of a standing minority (correlated positions: a supermajority
is better for her); with unequal intensities the optimum moves ([status-quo bias](#status-quo-bias)). Same
independence assumption as the jury theorem ([`social-choice` 5.1](../social-choice/lessons/05-01-the-condorcet-jury-theorem.md)).

*Lessons:* [3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md)

### Status-quo bias

A threshold $k>(n+1)/2$ treats change and the status quo unequally: a blocking minority of $n-k+1$ keeps the status
quo. It fails exactly one of May's conditions, **neutrality**
([`social-choice` 1.2](../social-choice/lessons/01-02-mays-theorem.md)).

**When it is optimal (3.4 Example 2):** with Rae's assumptions 1, 2, 4 and losses $L_A$ (outvoted into a change she
opposes) and $L_B$ (blocked from one she wants), raising $k$ helps iff $k<n\lambda$,

$$\lambda=\frac{L_A}{L_A+L_B},\qquad k^*=\text{smallest integer }k\ge n\lambda ;$$

a supermajority is optimal for a veiled voter iff $\lambda>\tfrac12$. It buys fewer costly errors with more cheap ones
(her chance of getting her way falls).

*In words:* a supermajority is not neutral; it privileges whatever is in place, so whoever fixes the reversion point
gains ([3.5](lessons/03-05-agenda-setters-and-veto-players.md)).

*Lessons:* [3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md)

### Setter model

Romer and Rosenthal ("Political Resource Allocation, Controlled Agendas, and the Status Quo", Public Choice 1978).
**Game:** a setter (ideal $s$) proposes one $x$ take-it-or-leave-it (closed rule) to a decisive voter (ideal $m$,
median by the [median voter theorem](#median-voter-theorem)); rejection leaves the [reversion point](#reversion-point)
$q$; Euclidean utility; indifferent voter accepts; complete information; subgame-perfect equilibrium.

**Result:** with $A(q)=[m-\lvert q-m\rvert,\,m+\lvert q-m\rvert]$ (what the voter accepts), $x^*$ is the point of $A(q)$
nearest $s$. For $s>m$:

$$x^*(q)=\begin{cases}s,&q\le2m-s\ \text{or}\ q\ge s,\\ 2m-q,&2m-s<q<m,\\ q,&m\le q<s.\end{cases}$$

*In words:* a bad enough default hands the setter her ideal; a milder one gets her the voter's point of indifference;
a default between the two of them stays put.

*Turns on:* complete information (so no proposal fails) and an exogenous reversion point. *Does not show:* failed
referenda (uncertainty about the voter's ideal adds a rejection risk); forward-looking choice of tomorrow's status quo.
The voter is never worse off than at $q$. Applied by RR to Oregon school-budget referenda.

**In 5.1:** the Baron-Ferejohn proposer is a setter whose reversion point is the endogenous value of starting over,
$\delta v$.

*Lessons:* [3.5](lessons/03-05-agenda-setters-and-veto-players.md), [5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md)

### Reversion point

The policy that holds if a proposal is rejected (the status quo or a statutory default). The worse it is for the
decisive voter, the more the setter extracts, capped at the setter's ideal. Often itself chosen (today's policy is
tomorrow's status quo).

*In words:* the default is the setter's weapon.

*Lessons:* [3.5](lessons/03-05-agenda-setters-and-veto-players.md)

### Veto players

Tsebelis (*Veto Players: How Political Institutions Work*, 2002): individual or collective actors whose agreement is
needed to change the status quo; change requires every one of them to (weakly) prefer it.

**3.5 Proposition 2 (line, Euclidean, ideals $v_1\le\dots\le v_k$):** (a) the [unanimity core](#unanimity-core) is
$[v_1,v_k]$; (b) for $q>v_k$, $W(q)=[2v_k-q,\,q)$ (symmetric below $v_1$); (c) adding a veto player never enlarges a
win-set, and one inside $[v_1,v_k]$ changes nothing (absorption).

*In words:* only the two most extreme veto players matter, and blockers can only add stability. When one veto player
also sets the agenda, she picks her favourite point of $W(q)$.

*Lessons:* [3.5](lessons/03-05-agenda-setters-and-veto-players.md)

### Unanimity core

Status quos with empty veto-player win-set: $[v_{\min},v_{\max}]$ on a line; the convex hull of the ideals with
Euclidean preferences in the plane (it survives in more dimensions where the "median proposer" does not). A veto player
inside it is absorbed.

*In words:* a status quo between the most extreme blockers cannot be moved at all.

*Lessons:* [3.5](lessons/03-05-agenda-setters-and-veto-players.md)

### Gridlock interval

Krehbiel (*Pivotal Politics: A Theory of U.S. Lawmaking*, 1998), one-chamber, full-attendance, 100-member version.
**Game:** median legislator $m=x_{(50)}$ proposes; cloture needs 60; passage a majority; the president at $p$ signs or
vetoes; override needs 67. Pivots: $f=x_{(41)}$ (filibuster, rightward moves), $f'=x_{(60)}$ (filibuster, leftward
moves), $v=x_{(67)}$ (override, president on the right).

**3.5 Proposition 3 (president at $p\ge v$):** every $q\in[f,v]$ is unchanged;

$$q<f:\ x^*=\min(m,\,2f-q);\qquad q>v:\ x^*=\max(m,\,2v-q).$$

**Moderate president ($p>m$, general):** the upper end is

$$\max\big(f',\,\min(p,v)\big),$$

so a president between $f'$ and $v$ shrinks the interval to $[f,p]$, and one below $f'$ to $[f,f']$.

*In words:* change needs the pivot on the far side of the move, and between the binding pivots nothing moves even with
a majority for change.

*Does not hold:* "gridlock is $[f,v]$" for a moderate president. **Negative agenda control** (3.5's related result): a
committee at $g<m$ with gatekeeping protects every $q\in(2g-m,\,m]$ (the cartel theory of
[`political-institutions` 4.2](../political-institutions/lessons/04-02-committees-and-agenda-control.md)).

*Lessons:* [3.5](lessons/03-05-agenda-setters-and-veto-players.md)

**Module 4: accountability, interests and rents**

### Electoral accountability

Elections as the voter's only incentive device over an official who acts for years out of sight: retain or replace,
no contract (contrast the principal-agent contract of
[`grad-micro` 5.4](../grad-micro/lessons/05-04-moral-hazard-principal-agent.md)). The same vote is asked both to
**sanction** (discipline hidden action) and to **select** (screen types); see
[sanctioning and selection](#sanctioning-and-selection).

*In words:* the voter is a principal who can only fire.

*Weakened by:* [media capture](#media-capture) (4.4); heterogeneous voters judging by private benefit (an incumbent need
only satisfy a bare majority).

*Lessons:* [4.1](lessons/04-01-elections-as-accountability.md), [4.4](lessons/04-04-regulatory-capture.md)

### Sanctioning and selection

Two views of what a retention vote does.

- **Sanctioning (moral hazard):** Barro ("The Control of Politicians", Public Choice 1973), Ferejohn ("Incumbent
  Performance and Electoral Control", Public Choice 1986). Identical politicians; the voter commits to a
  [retrospective cutoff](#retrospective-cutoff), credible only because she is indifferent between identical incumbent and
  challenger. Ferejohn's version: the voter sees performance (effort plus a shock the incumbent sees), sets a standard;
  the incumbent meets it when cheap, so some shirking survives any standard.
- **Selection (adverse selection):** Fearon (in Przeworski, Stokes and Manin, eds., *Democracy, Accountability, and
  Representation*, 1999): once types differ the voter retains whoever looks better, so the cutoff is set by beliefs, not
  chosen for incentives. Besley (*Principled Agents?*, 2006) combines the two.

**4.1 Proposition 2 (two-period model of the kind Besley studies).** Share $\pi$ congruent (always match the state);
dissonant types get private rent $r\sim U[0,\bar R]$ from mismatching; office worth $W$; voter retains iff period-1
policy was good. A dissonant incumbent mimics iff $r\le\delta(W+\bar R/2)$:

$$\lambda=\min\Big\{1,\frac{\delta(W+\bar R/2)}{\bar R}\Big\},\qquad \mu'=\frac{\pi}{\pi+(1-\pi)\lambda}.$$

*In words:* fear of losing office makes some bad types behave, and every one that does dilutes what a good record
reveals. In this stripped model discipline wins at the margin (net effect of a unit of $\lambda$ is
$(1-\pi)(1-\delta\pi)>0$); that is a fact about this model, not a general verdict.

*Elsewhere:* term limits and pandering trade one against the other (4.2); 4.6's voter retains on beliefs about
competence, Fearon-style selection.

*Lessons:* [4.1](lessons/04-01-elections-as-accountability.md), [4.2](lessons/04-02-career-concerns-and-pandering.md), [4.6](lessons/04-06-political-budget-cycles.md)

### Retrospective cutoff

**Game (Barro version, rents observed):** each term the incumbent picks rent $r_t\in[0,\bar R]$; the voter observes it
and retains or replaces from a pool of **identical** politicians; a removed politician never returns; the incumbent gets
$r_t+W$ per term in office, discounts at $\delta$. Voter strategy: retain iff $r_t\le\bar r$.

**4.1 Proposition 1.** The lowest cutoff the incumbent respects is

$$\bar r^*=\max\{0,\ (1-\delta)\bar R-\delta W\},$$

and she takes exactly $\bar r^*$ every term and is always re-elected (comply: $(\bar r+W)/(1-\delta)$; breach:
$\bar R+W$). Comparative statics on the interior: $\partial\bar r^*/\partial\delta=-(\bar R+W)$,
$\partial\bar r^*/\partial W=-\delta$, $\partial\bar r^*/\partial\bar R=1-\delta$. Rents vanish iff
$\delta\ge\bar R/(\bar R+W)$ ([critical discount factor](#critical-discount-factor)).

*In words:* the voter can push rents down until one term's haul plus the office equals the discounted value of staying.

*Turns on:* voter **indifference** among identical politicians (firing is free, so any cutoff is credible). *Does not
show:* that a salary rise is a free way to cut rents: $\bar r^*+W=(1-\delta)(\bar R+W)$ rises with $W$ when voters pay
$W$.

*Lessons:* [4.1](lessons/04-01-elections-as-accountability.md)

### Term limits

What a final term removes, model by model:

| Model | Final-term effect | Earlier terms |
|---|---|---|
| Barro cutoff (4.1) | full rents $\bar R$ | cutoffs unchanged (re-election still worth $\bar R+W$): no unravelling |
| career concerns (4.2) | zero effort | effort falls with tenure anyway |
| pandering (4.2) | no pandering ($W=0$) | |
| selection (4.1-4.2) | no removal of bad types | |

*In words:* a term-limited incumbent stops pandering and stops working for reputation, and voters lose the chance to
remove a bad type; the models price both sides, not the verdict.

*Lessons:* [4.1](lessons/04-01-elections-as-accountability.md), [4.2](lessons/04-02-career-concerns-and-pandering.md)

### Career concerns

Holmström ("Managerial Incentive Problems: A Dynamic Perspective", Review of Economic Studies 1999), two-period
stripped version with the wage reread as the value of reputation. **Game:** ability $\eta\sim N(m_0,\sigma_\eta^2)$
unknown to the incumbent **and** voters; hidden effort $a_t$ at convex cost $c(a_t)$, $c'(0)=0$; voters see
$y_t=\eta+a_t+\varepsilon_t$; period-2 payoff $\lambda m_1$, $m_1=E[\eta\mid y_1]$; no contract.

$$m_1=m_0+\kappa(y_1-\hat a_1-m_0),\quad \kappa=\frac{\sigma_\eta^2}{\sigma_\eta^2+\sigma_\varepsilon^2};\qquad c'(a_1^*)=\delta\lambda\kappa,\quad a_2^*=0 .$$

*In words:* she works until marginal cost equals the discounted reputation it buys, and does nothing when there is no
future.

**$T$ periods, fixed ability** ($\rho=\sigma_\eta^2/\sigma_\varepsilon^2$, weight after $k$ observations
$\kappa_k=\rho/(1+k\rho)$): $c'(a_t^*)=\lambda\sum_{s=t+1}^T\delta^{s-t}\kappa_{s-1}$; effort falls with tenure, zero in
the final period. Two periods with $\lambda=1$ underprovide ($\delta\kappa<1$, first best $c'(a)=1$); **with more periods
early effort can exceed first best** (4.2 Example 2).

*Turns on:* effort and ability perfect substitutes in a public signal. *Contrast (4.6):* in signal jamming she does not
know her type; in competence signaling she does.

*Lessons:* [4.1](lessons/04-01-elections-as-accountability.md) (pointer), [4.2](lessons/04-02-career-concerns-and-pandering.md), [4.6](lessons/04-06-political-budget-cycles.md)

### Signal jamming

In equilibrium voters correctly anticipate effort and subtract it, so $E[m_1]=m_0$: no reputation is gained on
average; yet any lower effort would lower $E[m_1]$ below $m_0$, so she cannot stop pushing.

*In words:* the effort is real; the deception is not.

*Lessons:* [4.2](lessons/04-02-career-concerns-and-pandering.md)

### Pandering

A binary-policy model in the spirit of Canes-Wrone, Herron and Shotts ("Leadership and Pandering", AJPS 2001) and
Maskin and Tirole ("The Politician and the Judge", AER 2004). **Game:** state $\omega\in\{0,1\}$, prior
$p=\Pr(\omega=1)>\tfrac12$ (action 1 popular); incumbent congruent with probability $\mu$ (wants $x=\omega$, worth $b$),
else dissonant (plays $x=1-\omega$); incumbent observes $\omega$, chooses $x$; voters see $x$, and learn $\omega$ before
the election with probability $q$; re-election worth $W$; voters re-elect iff posterior $\mu'>\mu$ (**ties to the
challenger**); a revealed right policy is credited to congruence.

**4.2 Proposition 2.** A congruent incumbent who learns $\omega=0$ chooses the popular $x=1$ iff

$$(1-2q)\,W>b ;$$

truthful iff $(1-2q)W<b$; never panders if $q\ge\tfrac12$; always truthful in state 1.

*In words:* the **good** type panders, against her own information, when office outweighs the policy stake and voters
are unlikely to learn the truth before the election.

*Turns on:* the tie rule (ties to the incumbent add a pooling pandering equilibrium whenever $(1-q)W\ge b$); who the
bad type is (if it always picks the popular action, the sign flips and unpopular action signals congruence); late
outcomes. CHS find both directions: re-election can reward unpopular policies that serve voters and ones that do not.

*Lessons:* [4.2](lessons/04-02-career-concerns-and-pandering.md)

### Menu auction

Bernheim and Whinston (QJE 1986): several principals each offer one agent a contribution schedule $C_i(p)$; the agent
chooses $p$. A schedule is **truthful** if $C_i(p)=\max\{0,\Omega_i(p)-B_i\}$ ($B_i$ the lobby's net payoff). Each
lobby's best responses include a truthful schedule; truthful equilibria are coalition-proof and implement the joint
maximum

$$p^o\in\arg\max_p\ \sum_{i\in L}\Omega_i(p)+a\,\Omega(p).$$

Each lobby nets at most its marginal contribution $J(L)-J(L\setminus i)$, where $J(S)$ is the maximum of the
government's welfare term plus the stakes of lobbies in $S$; the government ends up indifferent among several policies.

*In words:* honest menus make the government weight organized people at $1+a$ and everyone else at $a$; payments split
the surplus, they do not move the policy.

*Does not show:* that the biggest contributor gets most (a rival lobby can cut a lobby's net, 4.3 Example 1); that
non-truthful (non-differentiable) Nash equilibria pin down policy (efficiency obtains under a refinement).

*Contrast (4.5):* here lobbying is a **transfer** to government; in a Tullock contest it is resources burned against
rivals.

*Lessons:* [4.3](lessons/04-03-lobbying-protection-for-sale.md), [4.5](lessons/04-05-rent-seeking-contests.md)

### Grossman-Helpman tariff

Grossman and Helpman ("Protection for Sale", AER 1994). **Game:** small open economy, world prices $p_i^*$; numeraire
good from labor; sector $i$ uses labor and a specific factor (income $\Pi_i$, $\Pi_i'=X_i$); quasilinear utility;
domestic price $p_i=(1+t_i)p_i^*$; revenue rebated per head; imports $M_i=D_i-X_i$; organized sectors $L$ (exogenous),
$\alpha_L$ = population share owning an organized factor, $I_i=1$ if $i\in L$. (1) Lobbies offer schedules $C_i(p)$; (2)
government maximizes $\sum_{i\in L}C_i(p)+a\Omega(p)$, $a>0$; complete information.

**Result (any schedules differentiable at the equilibrium; interior):**

$$\frac{t_i}{1+t_i}=\frac{I_i-\alpha_L}{a+\alpha_L}\cdot\frac{z_i}{e_i},\qquad z_i=\frac{X_i}{M_i},\quad e_i=-\frac{M_i'p_i}{M_i},$$

both evaluated at the equilibrium price (an equation, not a closed form).

*In words:* organized sectors are protected and unorganized ones get import subsidies (when $\alpha_L>0$), by more when
output is large relative to imports and import demand is inelastic, by less when the government cares more about
welfare. Contributions do not appear.

*Special cases:* free trade iff $\alpha_L=1$ **and** every sector organized; with every sector organized but
$\alpha_L<1$, all are protected at the expense of non-owners; no tax on unorganized goods if $\alpha_L=0$.

*Turns on:* $L$ and $\alpha_L$ taken as given (Olson must supply them, [3.2](lessons/03-02-olsons-logic-of-collective-action.md)); policy-contingent payments (illegal in
most democracies, so implicit). A political Ramsey rule (inverse elasticity, as in
[`public-economics` 4.1](../public-economics/lessons/04-01-the-ramsey-rule.md)). *Evidence:* Goldberg and Maggi (AER
1999) found US protection consistent, with welfare weighted many times contributions.

*Lessons:* [4.3](lessons/04-03-lobbying-protection-for-sale.md)

### Informational lobbying

The lobby knows the state; the government does not. Cheap talk carries nothing when interests conflict
([`grad-game-theory` 4.5](../grad-game-theory/lessons/04-05-signaling-games-refinements.md)); **costly** lobbying can
separate if the lobby's stake is larger in the good state. 4.3's stripped version after Potters and van Winden (Public
Choice 1992): stakes $b_H$ (good state), $b_L$ (bad), cost $c$, government adopts iff it believes the state is good.
Separation (lobby only in the good state) iff

$$b_L\le c\le b_H .$$

*In words:* lobbying is informative when only the type with the bigger stake finds it worth paying for.

*Lessons:* [4.3](lessons/04-03-lobbying-protection-for-sale.md)

### Concentrated benefits diffuse costs

Few producers with large per-capita stakes organize and inform themselves; many consumers with small stakes stay
rationally ignorant ([3.2](lessons/03-02-olsons-logic-of-collective-action.md)'s Olson asymmetry, [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md)'s rational ignorance). In regulation it is why the organized side's
$M_\pi$ can outweigh the diffuse side's $M_p$.

*In words:* the few win not because they are more numerous or weightier, but because they act.

*Lessons:* [3.2](lessons/03-02-olsons-logic-of-collective-action.md), [4.3](lessons/04-03-lobbying-protection-for-sale.md) (pointer), [4.4](lessons/04-04-regulatory-capture.md)

### Regulatory capture

Stigler ("The Theory of Economic Regulation", Bell Journal of Economics and Management Science 1971): regulation is a
wealth transfer sold in a political market, usually to the best-organized bidder, producers. Peltzman's generalization
**shares the spoils**: the support-maximizing regulator stops strictly between competition and monopoly
([Peltzman model](#peltzman-model)).

*In words:* a captured regulator still does not hand the industry everything; Stigler's pure capture is a corner.

*Testable content:* which industries get regulated and how prices respond to shocks, not the price level ("both sides
unhappy" does not distinguish capture from public interest). Related: [pressure-group competition](#pressure-group-competition),
[information-based capture](#information-based-capture), the revolving door (Che, RAND Journal of Economics 1995: a
regulator seeking an industry job may regulate **harder** to display skill; the sign is empirical),
[media capture](#media-capture).

*Lessons:* [4.4](lessons/04-04-regulatory-capture.md)

### Peltzman model

Peltzman ("Toward a More General Theory of Regulation", Journal of Law and Economics 1976). **Setup:** one regulator
chooses price $p$; profit $\pi(p)$ concave, single-peaked at $p_m$, zero at $p_c$; consumers and producers not
strategic; the regulator maximizes support $M(p,\pi)$ with $M_p<0<M_\pi$, $M_{pp}<0$, $M_{\pi\pi}<0$, $M_{p\pi}=0$
(reduced form of a vote count).

**Result.** $V(p)=M(p,\pi(p))$ is strictly concave and the optimum satisfies

$$-\frac{M_p}{M_\pi}=\pi'(p^*),\qquad p^*<p_m,\qquad p^*>p_c\ \text{ if } M_\pi\pi'(p_c)>-M_p\ \text{at }p_c .$$

*In words:* the regulator raises price until the votes lost from consumers per dollar of extra profit equal the votes
that dollar buys from producers: an **interior** price.

- **Corners:** $p^*=p_m$ needs $M_p=0$ (consumers who never notice, Stigler); pure consumer protection needs producer
  support unresponsive to profit.
- **Predictions:** regulation of monopolies and competitive industries rather than oligopolies (the gain grows with
  the distance from $p^*$); buffering of cost shocks (pass-through between monopoly's and competition's).
- **4.4 Example 1 (log support $\alpha\ln\pi+(1-\alpha)\ln CS$, linear demand):** $p^*=c+\alpha\frac{a-c}{2}$, pass-through
  $1-\alpha/2$.

*Does not show:* who the regulator serves from the price level alone (any interior price fits); $M$ is not
micro-founded. With an appointed agency in the middle, see Laffont-Tirole.

*Lessons:* [4.4](lessons/04-04-regulatory-capture.md)

### Pressure group competition

Becker ("A Theory of Competition among Pressure Groups for Political Influence", QJE 1983): transfers are set by
competing pressure; equilibrium depends on each group's efficiency at producing pressure, group size and the deadweight
cost. Sketch: a larger deadweight cost lowers the winners' and raises the losers' marginal return to pressure, so
competition **restrains inefficient transfers**.

*In words:* deadweight loss is a political handicap for the group that causes it; Becker reads this as reconciling the
market-failure and interest-group views.

*Lessons:* [4.4](lessons/04-04-regulatory-capture.md)

### Information-based capture

Laffont and Tirole ("The Politics of Government Decision-Making: A Theory of Regulatory Capture", QJE 1991), outline.
Congress-agency-firm hierarchy; the firm knows its cost, the agency sometimes learns it, Congress sees only the report.
A low-cost firm pays for silence; if a dollar of side transfer is worth $k\le1$ to the agency, a collusion-proof reward
must be at least $k$ times the firm's stake. Congress's cheaper response is **lower-powered incentive schemes** (shrink
the stake). Interest groups are more powerful when they favour inefficient regulation (inefficiency measured by the
Congress-industry information gap).

*In words:* capture is deterred in equilibrium, and the threat shapes the rules; its trace is low-powered incentives, not
observed bribes.

*Lessons:* [4.4](lessons/04-04-regulatory-capture.md)

### Media capture

Besley and Prat ("Handcuffs for the Grabbing Hand? Media Capture and Government Accountability", AER 2006): an
incumbent can buy the media's silence about bad performance; the structure of the media market determines how costly
capture is, and so voters' ability to hold the incumbent accountable.

*In words:* supply-side slant: the government buys the watchdog. (Demand-side slant is [media slant](#media-slant), 1.4.)

*Lessons:* [4.4](lessons/04-04-regulatory-capture.md); contrasted in [1.4](lessons/01-04-persuasion-and-the-media.md)

### Rent seeking

Spending real resources to obtain a politically created transfer. Tullock ("The Welfare Costs of Tariffs, Monopolies,
and Theft", Western Economic Journal 1967): transfers are not free to arrange. Krueger ("The Political Economy of the
Rent-Seeking Society", AER 1974) named it, documenting import-licensing regimes such as India's. Posner ("The Social
Costs of Monopoly and Regulation", JPE 1975): if obtaining a monopoly is a competitive activity with constant costs,
the whole rectangle is spent. Tullock ("Efficient Rent Seeking", 1980) derives dissipation from a game
([Tullock contest](#tullock-contest)).

*In words:* the prize attracts spending, and that spending is a social loss on top of the triangle.

*Does not show:* waste when the "effort" is a bribe or contribution (a transfer; only resources consumed arranging it
are lost).

*Lessons:* [4.5](lessons/04-05-rent-seeking-contests.md)

### Contest success function

$$p_i(x)=\frac{x_i^r}{\sum_jx_j^r}\quad(1/n\text{ if all efforts are }0),\qquad r>0 .$$

$r$ is decisiveness: $r=1$ the raffle; $r\to\infty$ the all-pay auction (top spender wins for sure). A reduced form for
an unobserved technology turning spending into favour.

*In words:* your odds are your share of the field's weighted effort.

*Lessons:* [4.5](lessons/04-05-rent-seeking-contests.md); reused for arming in `conflict-and-bargaining`

### Tullock contest

**Game:** $n\ge2$ risk-neutral contestants value rent $R$; simultaneous sunk efforts $x_i\ge0$; win probability by the
[contest success function](#contest-success-function); payoff $p_iR-x_i$; common knowledge.

**4.5 Proposition 1.** Every player exerting

$$x^*=\frac{rR(n-1)}{n^2}$$

is a Nash equilibrium **iff $r\le n/(n-1)$** (the binding condition is participation: payoff
$\frac{R}{n^2}(n-r(n-1))\ge0$; the local second-order condition needs only the weaker $r(n-2)<n$). Total effort
$rR(n-1)/n$, so dissipation $D=r(n-1)/n$. For $r=1$ the symmetric equilibrium is unique. For $n=2$, $r>2$: a symmetric
mixed equilibrium with full expected dissipation (Baye, Kovenock and de Vries, Public Choice 1994).

*In words:* together the contestants burn a fraction $r(n-1)/n$ of the prize, which reaches the whole prize exactly at
the edge of existence.

*Turns on:* $r$ (unobserved); risk neutrality; fixed contestants; known prize. *Pitfall:* for $r>1$ the FOC finds only
a local maximum; check participation.

*Lessons:* [4.5](lessons/04-05-rent-seeking-contests.md)

### Asymmetric contests

Two players, $r=1$, values $V_1>V_2$:

$$S=\frac{V_1V_2}{V_1+V_2},\quad x_1=\frac{V_1^2V_2}{(V_1+V_2)^2},\quad x_2=\frac{V_1V_2^2}{(V_1+V_2)^2},\quad p_1=\frac{V_1}{V_1+V_2},\quad \pi_i=\frac{V_i^3}{(V_1+V_2)^2}.$$

*In words:* the higher-value player spends more and wins more often, in proportion; total spending is half the harmonic
mean, so a lopsided contest dissipates less; the low-value player sometimes wins (a **misallocation** cost the
triangle-and-rectangle accounting misses).

*Lessons:* [4.5](lessons/04-05-rent-seeking-contests.md)

### Political budget cycles

Policy moves timed to elections. Three accounts, each with its own fingerprint and its own verdict on a ban:

| Account | Voters | Timing | Lesson |
|---|---|---|---|
| [opportunistic](#opportunistic-cycles) (Nordhaus) | adaptive, short memory | boom before, bust after | [4.6](lessons/04-06-political-budget-cycles.md) |
| [competence signaling](#competence-signaling) (Rogoff-Sibert, Rogoff) | rational, read a signal | visible boost before; none off-election | [4.6](lessons/04-06-political-budget-cycles.md) |
| [rational partisan](#rational-partisan-cycles) (Alesina) | rational; winner uncertain | gap after, sign set by winner | [4.6](lessons/04-06-political-budget-cycles.md) |

Common Phillips curve: $x_t=a(\pi_t-\pi_t^e)$.

*Evidence:* mixed by sample; fiscal cycles far more in newer democracies (Brender and Drazen, Journal of Monetary
Economics 2005); Nordhaus-style output cycles hard to find in rich-country data. Identification is
`empirical-political-economy`'s.

*Lessons:* [4.6](lessons/04-06-political-budget-cycles.md)

### Opportunistic cycles

Nordhaus ("The Political Business Cycle", Review of Economic Studies 1975), two-period caricature: adaptive expectations
$\pi_t^e=\pi_{t-1}$; voters judge on the pre-election period only. Raise inflation by $k$ before the vote: $x=ak$;
return it after: $x=-ak$. Output averages zero over the term.

*In words:* the voter rewards a boom she pays for later.

*Turns on:* voters who never learn the pattern; rational expectations remove the output cycle.

*Lessons:* [4.6](lessons/04-06-political-budget-cycles.md)

### Competence signaling

Stripped two-type version keeping Rogoff's signaling logic (Rogoff and Sibert, RES 1988; Rogoff, "Equilibrium Political
Budget Cycles", AER 1990, where spending tilts toward visible items before elections). **Game:** incumbent competent
($H$) with prior $\mu$, knows her type; picks visible boost $e\ge0$ before the election; hidden welfare cost $c_\theta e$,
$0<c_H<c_L$ (single crossing); voter sees $e$, retains iff $\mu'\ge\mu$; a competent successor is worth $\Delta$;
incumbent values voters' welfare plus office $X$ (an assumption of this version). Gains from retention:

$$V_H=X+(1-\mu)\Delta,\qquad V_L=X-\mu\Delta .$$

**Result (if $V_L>0$):** separating PBE for $e_H\in[V_L/c_L,\,V_H/c_H]$; the Intuitive Criterion selects

$$e^*=\frac{V_L}{c_L}=\frac{X-\mu\Delta}{c_L};$$

no boost off-election. Voters prefer the cycle to a ban iff

$$(1-\mu)\Delta>\frac{c_H}{c_L}\,(X-\mu\Delta).$$

*In words:* the competent incumbent distorts just enough that the incompetent one would not copy her, and only when a
vote is coming; a ban saves the distortion but loses the information.

*Turns on:* boost seen but cost not until after the vote; persistent competence; single crossing (with equal costs and
pure office motivation, the interval collapses to a knife-edge). If $V_L\le0$, no distortion.

*Lessons:* [4.6](lessons/04-06-political-budget-cycles.md)

### Rational partisan cycles

Alesina ("Macroeconomic Policy in a Two-Party System as a Repeated Game", QJE 1987), reduced form: parties deliver
$\pi_L>\pi_R$; wage contracts signed before the election, which $L$ wins with probability $p$; rational expectations
$\pi^e=p\pi_L+(1-p)\pi_R$:

$$x_L=a(1-p)(\pi_L-\pi_R)>0,\qquad x_R=-ap(\pi_L-\pi_R)<0,\qquad \operatorname{Var}x=a^2p(1-p)(\pi_L-\pi_R)^2 .$$

Zero after contracts reset; expected gap zero; variance largest in a close race.

*In words:* a left victory brings a boom and a right victory a recession, each as large as the surprise; no fooled
voters needed.

*Turns on:* contracts that span the election (post-election or indexed wage setting removes it). Kydland-Prescott
inflation bias with two governments ([`grad-macro` 6.2](../grad-macro/lessons/06-02-policy-rules-taylor-principle.md)).

*Lessons:* [4.6](lessons/04-06-political-budget-cycles.md)

**Module 5: bargaining, coalitions and redistribution**

### Baron-Ferejohn bargaining

Baron and Ferejohn ("Bargaining in Legislatures", APSR 1989). **Game (closed rule):** $n\ge3$ odd legislators divide
a dollar; each session one member is recognized with probability $1/n$; she proposes $x$ ($x_j\ge0$, $\sum x_j=1$); an
up-or-down vote with no amendments; $(n+1)/2$ yes votes pass it; otherwise a new session; payoff $\delta^tx_j$;
complete information; members vote **as if pivotal**; stationary subgame-perfect equilibrium.

**Result (stationary SPE, every $\delta\in(0,1)$):** the proposer offers $\delta/n$ to $(n-1)/2$ randomly chosen others
and keeps

$$x_{\text{prop}}=1-\delta\,\frac{n-1}{2n};$$

members accept iff offered at least $\delta/n$; the first proposal passes; ex ante value $v=1/n$ (the consistency
equation $v=\frac1n(1-\delta v\frac{n-1}2)+\frac{n-1}{n}\cdot\frac12\delta v$ gives $v=1/n$).

*In words:* the proposer buys a bare majority at the price of starting over and keeps the rest: fair before the
lottery, lopsided after it.

- **Unequal recognition:** values $v_i$ differ; proposers buy the **cheapest** votes (lowest $\delta v_j$), so a
  frequently recognized member is expensive and skipped; power is less than proportional to recognition. Stationary
  payoffs are unique (Eraslan, "Uniqueness of Stationary Equilibrium Payoffs in the Baron-Ferejohn Model", JET 2002);
  proposer **mixing** need not be.
- **Parties (5.2):** run on seat weights $w_i$ with quota $q$; yes-voters must hold $q$ seats; payoffs track
  [minimum integer voting weights](#minimum-integer-voting-weights), not seats. In weighted BF games expected payoffs are
  proportional to voting weight with an exception they identify (Snyder, Ting and Ansolabehere, "Legislative Bargaining
  under Weighted Voting", AER 2005); in 5.2's equal-recognition apex example it holds only for $\delta\ge3/5$.

*Turns on:* **stationarity** (BF: with $n\ge5$ and $\delta>\frac{n+2}{2(n-1)}$ **any** division is an SPE, by
history-dependent punishments, folk-theorem logic); closed rule; exogenous recognition; complete information; costless
as-if-pivotal voting; a purely distributive dollar.

*Lessons:* [5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md), [5.2](lessons/05-02-coalition-and-government-formation.md)

### Closed and open rules

**Closed rule:** the proposal goes straight to an up-or-down vote; no amendments. **Open rule:** after a proposal another
member is recognized and may move the previous question (force a vote) or amend (her amendment becomes the proposal).

Under the open rule BF find (outline only) larger-than-minimal coalitions, a smaller proposer share, more equal
division and possible delay. Primo (Public Choice 2007): the open-rule equilibrium admits several randomization strategies
with slightly different payoffs, so treat open-rule numbers as less settled. The institutions are
[`political-institutions` 4.2](../political-institutions/lessons/04-02-committees-and-agenda-control.md)'s.

*In words:* letting the next member amend forces the proposer to buy more votes.

*Lessons:* [5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md)

### Proposer power

| Procedure | Proposer keeps | As $\delta\to1$ |
|---|---|---|
| BF closed rule, majority | $1-\delta\frac{n-1}{2n}$ (partner gets $\delta/n$) | $\frac{n+1}{2n}>\tfrac12$ |
| BF closed rule, unanimity | $1-\delta\frac{n-1}{n}$ ($n=2$: $1-\delta/2$, Rubinstein with a random proposer) | $\tfrac1n$ |
| Rubinstein alternating offers ([`grad-game-theory` 3.5](../grad-game-theory/lessons/03-05-bargaining.md)) | $\frac1{1+\delta}$ | $\tfrac12$ |
| three parties, any two win (5.2) | $1-\delta/3$ (partner $\delta/3$) | $\tfrac23$ |

*In words:* unlike Rubinstein's first-mover edge, majority-rule proposer power survives patience, because the proposer
pays only half the chamber and outsiders compete to be bought.

*Lessons:* [5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md), [5.2](lessons/05-02-coalition-and-government-formation.md)

### Minimal winning coalition

Winning, and losing if any one member leaves (no surplus member).

- **In bargaining:** the closed-rule BF proposer buys exactly $(n-1)/2$ votes (5.1), and in weighted BF every equilibrium
  proposal goes to a minimal winning coalition when every $v_j>0$, because each extra member costs $\delta v_j>0$ and
  passage is already certain (complete information, as-if-pivotal voting) (5.2 Lemma). The formateur minimizes **price**
  $\sum_{j\in C\setminus i}\delta v_j$, not seats.
- **Distinct from minimum-size** (Riker, *The Theory of Political Coalitions*, 1962): the minimal winning coalition with
  the fewest seats. Riker's size principle is derived for $n$-person zero-sum games with side payments, rational players
  and complete information; elsewhere it is a conjecture. Bargaining delivers minimal winning, and minimum-size only by
  accident (5.2: all three pairs equally likely).

*Lessons:* [5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md), [5.2](lessons/05-02-coalition-and-government-formation.md)

### Gamsons law

Gamson ("A Theory of Coalition Formation", American Sociological Review 1961): partner $i$ in coalition $C$ receives

$$\frac{w_i}{\sum_{j\in C}w_j}.$$

*In words:* office is split in proportion to the seats each partner brings.

**Evidence (contested):** portfolio shares track coalition seat shares closely and linearly (Browne and Franklin, APSR
1973); salience-weighted portfolios show the same (Warwick and Druckman, EJPR 2006, "perhaps the strongest empirical
regularity", a problem for proposer models); with **voting weights** instead of seats a substantial formateur bonus
appears (Ansolabehere, Snyder, Strauss and Ting, AJPS 2005). **Theories that rationalize it:** Morelli's demand
bargaining (APSR 1999: splits proportional to bargaining power, no proposer bonus); Carroll and Cox (AJPS 2007:
pre-election pacts precommit to proportional splits).

*Contrast:* the BF proposer (formateur) premium (5.1, 5.2).

*Lessons:* [5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md), [5.2](lessons/05-02-coalition-and-government-formation.md)

### Minimal connected winning coalition

Axelrod (*Conflict of Interest*, 1970): parties ordered on a left-right line; the coalition is winning and **connected**
(no gap on the line), and dropping any member leaves it losing or gapped.

*In words:* partners must be ideological neighbours, even if that means carrying a party the arithmetic does not need.

5.2's illustration: W 40, X 8, Y 12, Z 40 (in order): minimal connected winning coalitions are Y-Z and W-X-Y; X is
arithmetically surplus in W-X-Y but needed to close the gap.

*Lessons:* [5.2](lessons/05-02-coalition-and-government-formation.md)

### Minimum integer voting weights

The smallest integer weights (with a quota) that reproduce a parliament's list of winning coalitions. Seat
distributions with the same list are the same game. Three parties, any two win: $(1,1,1)$. Apex plus three smalls
(apex with any small wins, the three smalls together win, no two smalls win): $(2,1,1,1)$, quota 3.

*In words:* seats are not power; only the list of winning coalitions matters.

The Shapley-Shubik index ([`grad-game-theory` 6.2](../grad-game-theory/lessons/06-02-shapley-value.md)) and BF payoffs
depend only on this list. With no veto party the core of a majority game is empty
([`grad-game-theory` 6.1](../grad-game-theory/lessons/06-01-coalitional-games-core.md)): cooperative theory says who is
powerful, not who gets what.

*Lessons:* [5.2](lessons/05-02-coalition-and-government-formation.md)

### Formateur premium

The formateur's share minus its Gamson share.

**5.2 Proposition (three parties, none a majority alone, every pair a majority, equal recognition, closed rule):** in
every stationary equilibrium the formateur proposes at once to one partner, offering $\delta/3$ and keeping $1-\delta/3$;
each party's value is $1/3$ (unique payoffs, by Eraslan); each pair forms with probability exactly $1/3$. The premium is
positive iff the formateur's Gamson share is below $1-\delta/3$ (always, if every Gamson share is below $2/3$).

*In words:* seat counts do nothing beyond deciding which coalitions win, and the formateur takes at least two-thirds.

*Evidence (contested):* little or none when payoffs are regressed on **seat** shares; substantial but below the
closed-rule prediction with **voting weights** (ASST: about a third to a half of the predicted value in their
working-paper estimates). A big formateur with a tiny partner can get less than its seat share.

*Turns on:* divisible office (ministries are lumpy and carry policy: [portfolio allocation](#portfolio-allocation)); random
recognition (real formateurs are chosen by heads of state, usually from the largest party).

*Lessons:* [5.2](lessons/05-02-coalition-and-government-formation.md)

### Portfolio allocation

Laver and Shepsle (*Making and Breaking Governments*, 1996), outline: each minister sets policy in her jurisdiction, so a
cabinet is a lattice point of party ideal points ([structure-induced equilibrium](#structure-induced-equilibrium) moved
into the cabinet). Roughly, a **strong party** belongs to every cabinet a majority prefers to the one in which it holds
all the key portfolios, so it can veto every alternative.

*In words:* parties care what ministries do, not how many they hold, and a party that controls the key ministries can
block every rival cabinet.

*Lessons:* [5.2](lessons/05-02-coalition-and-government-formation.md)

### Meltzer-Richard model

Meltzer and Richard ("A Rational Theory of the Size of Government", JPE 1981), in the standard quasilinear-quadratic
textbook specialization (their model has general utility and lets the least productive not work). **Game:** odd $n$,
wages $w_i$ common knowledge, $m=\frac1n\sum w_i^2$; (1) majority vote on a flat tax $t\in[0,1]$ (equivalently, Downsian
candidates); (2) labor $\ell_i$ chosen knowing $t$, **taking $T$ as given**; (3) equal grant
$T=t\cdot\frac1n\sum w_i\ell_i$. $u_i=c_i-\ell_i^2/2$, $c_i=(1-t)w_i\ell_i+T$. The tax is **committed before** labor;
subgame perfection.

$$\ell_i=(1-t)w_i,\quad T(t)=t(1-t)m,\quad V_i(t)=\tfrac12(1-t)^2w_i^2+t(1-t)m ;$$

$$t_i=\frac{m-w_i^2}{2m-w_i^2}\ (w_i^2<m),\ \ t_i=0\ \text{otherwise};\qquad t^*=\frac{\rho-1}{2\rho-1}\ (\rho>1),\ \ t^*=0\ (\rho\le1),$$

with $\rho=m/w_m^2$ the [mean-to-median ratio](#mean-to-median-ratio). Single-crossing in $w_i$; the median-wage voter
(also the median earner) is decisive; $0\le t^*<\tfrac12$; $t^*$ increasing in $\rho$.

*In words:* the median earner sets the tax, taxes more the further mean income sits above hers, and never goes as far as
the revenue peak.

- **Convexity caveat:** $V_i''=w_i^2-2m$; types with $w_i^2>2m$ have convex $V_i$ but it falls on all of $[0,1]$, so
  still single-peaked (peak 0).
- **The ceiling is the [Laffer](#laffer-curve) peak:** rates above $\tfrac12$ are Pareto-dominated; a zero-wage voter's
  ideal is exactly $\tfrac12$. General elasticity (5.3 P3): $t^*=\frac{\rho-1}{(\rho-1)+\varepsilon\rho}<\frac1{1+\varepsilon}$.
- **Commitment bites (5.3 Example 2):** if labor is chosen first, every anticipated $t^e<1$ is overturned ex post by
  the below-mean majority; the only self-fulfilling expectation is $t=1$, zero labor, zero utility for all.
- **5.4 form:** $V(t;y)=\tfrac12(1-t)^2y+t(1-t)\bar y$ is **affine in $y$**, so turnout, mobility and swing weights each
  just change the decisive income $\hat y$.

*Turns on:* one trait ordering voters, one policy number, everyone voting sincerely on current income, commitment.
*Tests:* Meltzer and Richard's own tests (Public Choice 1983) tracked US redistributive spending against $\rho$; the
cross-country link is weak and contested ([inequality and redistribution](#inequality-and-redistribution)).

*Lessons:* [5.3](lessons/05-03-the-meltzer-richard-model.md), [5.4](lessons/05-04-the-political-economy-of-inequality.md)

### Mean-to-median ratio

$$\rho=\frac{\bar y}{y_m}\quad\Big(\text{5.3: }\rho=\frac{m}{w_m^2},\ \text{independent of }t\Big).$$

MR rate $t^*=\frac{\rho-1}{2\rho-1}$, $\frac{dt^*}{d\rho}=\frac1{(2\rho-1)^2}>0$. 5.4 generalizes to any decisive income
$\hat y$:

$$t(\hat y)=\frac{\bar y-\hat y}{2\bar y-\hat y}\ \ (\hat y<\bar y),\qquad 0\ \ (\hat y\ge\bar y),$$

strictly decreasing on $(0,\bar y)$, $t(0)=\tfrac12$.

*In words:* only the median relative to the mean matters, not how poor the poor are; a loss at the bottom lowers the
mean, so $\rho$ and $t^*$ **fall**. (1.1's reduced form has the same feature: $t^*=(1-y_m/\bar y)/\lambda$.)

*Lessons:* [5.3](lessons/05-03-the-meltzer-richard-model.md), [5.4](lessons/05-04-the-political-economy-of-inequality.md); reduced form in [1.1](lessons/01-01-from-ballots-to-policy-space.md)

### Laffer curve

Revenue per head $T(t)=t(1-t)m$ peaks at $t=\tfrac12$ with $T=m/4$; generally the revenue-maximizing rate is $1/(1+e)$
with earnings elasticity $e$ ([`public-economics` 5.1](../public-economics/lessons/05-01-the-linear-income-tax.md)).
Rates above the peak shrink both the grant and everyone's take-home pay, so they are Pareto-dominated and $t^*<\tfrac12$.

*In words:* past the peak, a higher tax hurts everyone, even a voter who earns nothing.

*Lessons:* [5.3](lessons/05-03-the-meltzer-richard-model.md)

### Inequality and redistribution

MR predicts redistribution rising with mean over median income. Across democracies higher pre-tax inequality does
**not** reliably come with more redistribution; findings shift with sample and measure; the link is weak and contested.

Channels that bend the prediction (5.4):

| Channel | Decisive income or change | Effect |
|---|---|---|
| income-skewed turnout | [turnout-weighted median](#turnout-weighted-median) $y_v\ge y_m$ | lower level, steeper response |
| POUM | [expected future income](#prospect-of-upward-mobility) | middle class can block redistribution |
| probabilistic voting | density-weighted mean $y_\phi$ | equal densities give $t^*=0$ |
| second dimension (Roemer, "Why the poor do not expropriate the rich", JPubE 1998) | outside the formula | a salient second issue (religion) pulls the poor party's rate down, possibly to zero |
| fairness beliefs (Alesina and Angeletos, "Fairness and Redistribution", AER 2005) | outside the formula | effort-vs-luck beliefs and taxes feed back: multiple equilibria |

*In words:* turnout, mobility and swing weights seat someone richer than the median; a second issue or fairness beliefs
change the question.

*Identification* is hard because taxes move labor supply and hence measured pre-tax inequality; it belongs to
`empirical-political-economy`.

*Lessons:* [5.3](lessons/05-03-the-meltzer-richard-model.md) (pointer), [5.4](lessons/05-04-the-political-economy-of-inequality.md)

### Turnout-weighted median

With turnout rate $\tau(y)$ and population distribution $F$, the electorate's distribution is

$$G(y)=\frac{\int_0^y\tau\,dF}{\int\tau\,dF}=F(y)\,\frac{E[\tau\mid Y\le y]}{E[\tau]} ;$$

the majority rate is $t(y_v)$ with $y_v$ the median of $G$. Taxes still cover every citizen, so $\bar y$ stays the
**population** mean. If $\tau$ is nondecreasing, $G\le F$, so $y_v\ge y_m$ and $t(y_v)\le t(y_m)$ (5.4 Proposition 1).

*In words:* income-skewed turnout puts a richer voter in the median voter's seat, who wants less redistribution.

*Does not explain:* a flatter response to inequality. With turnout rates fixed,
$dt/d\bar y=\hat y/(2\bar y-\hat y)^2$ **rises** with $\hat y$, so a richer decisive voter responds more to top-income
growth; flattening needs the gap to widen with inequality.

*Lessons:* [5.4](lessons/05-04-the-political-economy-of-inequality.md)

### Prospect of upward mobility

Bénabou and Ok ("Social Mobility and the Demand for Redistribution: The POUM Hypothesis", QJE 2001). Premises: (1) the
tax chosen today persists; (2) voters are not too risk-averse (or redistribution would be insurance); (3) some voters
below today's mean expect to be above it tomorrow, which is consistent with rational expectations when expected future
income is **increasing and concave** in today's income (Jensen). The anti-redistribution coalition grows with concavity
and with the policy horizon. Their economy has no deadweight loss (5.4 grafts the mechanism onto 5.3's utility). With
affine $V$, a voter choosing next period's tax uses $\hat y=E[y'\mid y_i]$.

*In words:* voters below the mean can correctly expect to rise above tomorrow's mean and so oppose lasting redistribution.

*Does not need:* over-optimism. *Needs:* persistence (a rate reset each period puts only today's incomes on the ballot)
and enough mobility.

*Lessons:* [5.4](lessons/05-04-the-political-economy-of-inequality.md)

## Formulas

Every quantity the lessons compute, grouped by job. Symbols as in [Notation](#notation); the hypotheses are in each
model's entry above.

### Turnout and pivot formulas

| Quantity | Formula | Lesson |
|---|---|---|
| Riker-Ordeshook return | $R=PB-C+D$; vote iff $R>0$; with $n$ even others and coin-flip ties the gain is $\tfrac12PB$ | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md) |
| pivot prob., exact | $P=\binom{n}{n/2}\big(p(1-p)\big)^{n/2}$ | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md) |
| large $n$, known $p$ | $P\approx\sqrt{\frac2{\pi n}}\,e^{-n\Delta(p)}$, $\Delta(p)=-\tfrac12\ln(4p(1-p))=2\varepsilon^2+4\varepsilon^4+\dots$ ($p=\tfrac12+\varepsilon$) | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md) |
| dead heat | $P\approx\sqrt{2/(\pi n)}$ | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md) |
| uncertain $p$, density $g$ | $P\approx g(\tfrac12)/n$; uniform $[0,1]$ gives exactly $1/(n+1)$ (Beta integral) | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md) |
| participation indifference | $c=\tfrac12\big[\Pr(\text{others tie})+\Pr(\text{own side trails by one})\big]$ | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md) |
| value of information | $V=\pi_tv\big(1-\max(\mu,1-\mu)\big)\le\tfrac12\pi_tv$ | [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md) |
| gain from voting A | $\Delta_A=\tfrac12[\mu\Pr(d\in\{0,-1\}\mid A)-(1-\mu)\Pr(d\in\{0,-1\}\mid B)]$ | [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md) |
| curse condition (no partisans) | all-uninformed-abstain is an equilibrium iff $(2\mu-1)(1-q)\le nq(1-\mu)$ | [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md) |
| full-information equivalence check | outcome correct w.p. $1-\tfrac12(1-q)^n$ | [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md) |

### Information design formulas

| Quantity | Formula | Lesson |
|---|---|---|
| Bayes plausibility | $\sum_m\Pr(m)\mu'(m)=\mu$ | [1.4](lessons/01-04-persuasion-and-the-media.md) |
| optimal bad-state pass rate | $q=\frac{\mu(1-\mu^*)}{(1-\mu)\mu^*}$; $\Pr(\text{pass})=\mu/\mu^*$; $\mu'(\text{pass})=\mu^*$ | [1.4](lessons/01-04-persuasion-and-the-media.md) |
| value of optimal signal | $V(\mu)$, the concave closure of $\hat v$; threshold case $V(\mu')=\min(\mu'/\mu^*,1)$ | [1.4](lessons/01-04-persuasion-and-the-media.md) |
| receiver's payoff | 0 under the optimal signal; $\mu(1-\mu^*)$ under full disclosure | [1.4](lessons/01-04-persuasion-and-the-media.md) |
| cheap talk, $\mu<\mu^*$, state-independent sender | approval 0 in every equilibrium | [1.4](lessons/01-04-persuasion-and-the-media.md) |
| verifiable evidence, no commitment | unravels to full disclosure: approval $\mu$ | [1.4](lessons/01-04-persuasion-and-the-media.md) |

### Electoral competition formulas

| Quantity | Formula | Lesson |
|---|---|---|
| median interval | $[x_{(\lceil n/2\rceil)},\,x_{(\lfloor n/2\rfloor+1)}]$ | [2.1](lessons/02-01-the-downsian-spatial-model.md) |
| Calvert-Wittman FOC | $\frac{\partial\pi_A}{\partial q_A}[u_A(q_A)-u_A(q_B)]+\pi_Au_A'(q_A)=0$ | [2.1](lessons/02-01-the-downsian-spatial-model.md) |
| divergence (uniform median on $[\mu-c,\mu+c]$, ideals $\mu\mp a$, quadratic) | platforms $\mu\mp s^*$, $s^*=\frac{ac}{a+c}$ | [2.1](lessons/02-01-the-downsian-spatial-model.md) |
| core test (Euclidean) | $\#\{i:(x_i-q)\cdot d>0\}\le n/2$ for all $d$; $i$ prefers $q+d$ iff $(x_i-q)\cdot d>\lVert d\rVert^2/2$ | [2.2](lessons/02-02-multidimensional-voting-and-chaos.md) |
| probabilistic-voting win probability | $p_A=\tfrac12+\frac{\psi}{\bar\phi}[W(q_A)-W(q_B)]$; group share $\tfrac12+\phi_g(\Delta_g-\delta)$ | [2.3](lessons/02-03-probabilistic-voting.md) |
| probabilistic-voting FOC (transfers) | $\phi_gu'(t_g)=\lambda$ for $t_g>0$; log utility: $t_g=\phi_g/\bar\phi$ | [2.3](lessons/02-03-probabilistic-voting.md) |
| valence cutpoint | A wins $x_i<\frac{q_A+q_B}2+\frac v{2d}$; B's best gap $\sqrt v$; $s_B^*=\max\{1-F(q_A+\sqrt v),F(q_A-\sqrt v)\}$ | [2.4](lessons/02-04-valence-and-citizen-candidates.md) |
| citizen-candidate, one candidate | exists iff $b\le2c$; at $m$ if $c\le b\le2c$; within $(c-b)/2$ of $m$ if $b<c$ | [2.4](lessons/02-04-valence-and-citizen-candidates.md) |
| citizen-candidate, two candidates | $c-\tfrac b2\le\varepsilon\le e_p=2(m-F^{-1}(\tfrac13))$; $\varepsilon=e_p$ only if $e_p\le3c-b$; uniform: $e_p=\tfrac13$ | [2.4](lessons/02-04-valence-and-citizen-candidates.md) |
| prospective rating | $R_j=\sum_{k\ne j}p_{jk}(u_j-u_k)$ | [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md) |
| Duverger M+1 | at most $M+1$ viable; single-member plurality $M=1$ (two); runoff $M=2$ (three in round one) | [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md) |
| Cox threshold | all-at-Right eq. iff $q\le S^*=\frac1K\sum s_j$; plurality $1/K$, Borda $\tfrac12$, negative $(K-1)/K$ | [2.6](lessons/02-06-electoral-rules-compared-formally.md) |
| Myerson plurality offers | $F(x)=(x/K)^{1/(K-1)}$ on $[0,K]$; Borda: uniform $[0,2]$ | [2.6](lessons/02-06-electoral-rules-compared-formally.md) |
| Lizzeri-Persico | $1<G<2$: $\pi_{\text{WTA}}=\tfrac12$, $\pi_{\text{PR}}=G-1$; $F^*$ uniform on $[0,2-G]\cup[G,2]$; deviation score $\tfrac12+\kappa(p-\tfrac12)$, $\kappa=\frac{G-1}{2-G}$; ex ante utility $\pi G+(1-\pi)$; PR better iff $G>\tfrac32$; electoral college: sure provision needs $G>4$ | [2.6](lessons/02-06-electoral-rules-compared-formally.md) |
| swing-district public good | PR: $g=b$; majoritarian: $g=b/D$, $f_s=D(1-g)$ | [2.6](lessons/02-06-electoral-rules-compared-formally.md) |

### Collective action formulas

| Quantity | Formula | Lesson |
|---|---|---|
| $n$-person PD | $u_i=bm-ca_i$, $b<c<nb$: defect dominant; cooperation pays $nb-c$ | [3.1](lessons/03-01-free-riding-and-threshold-games.md) |
| threshold pivot gain | $\Delta(j)=V\mathbf 1[j=k-1]-c$ | [3.1](lessons/03-01-free-riding-and-threshold-games.md) |
| threshold mixed equilibrium | $V\binom{n-1}{k-1}p^{k-1}(1-p)^{n-k}=c$; peak at $\hat p=\frac{k-1}{n-1}$ | [3.1](lessons/03-01-free-riding-and-threshold-games.md) |
| volunteer's dilemma ($k=1$) | $p_n=1-(c/V)^{1/(n-1)}$; $\Pr(\text{nobody})=(c/V)^{n/(n-1)}$ | [3.1](lessons/03-01-free-riding-and-threshold-games.md) |
| Olson provider condition | $s_1ag'(\hat G)=1$ (provides iff $s_1ag'(0)>1$); efficient $ag'(G^*)=1$ | [3.2](lessons/03-02-olsons-logic-of-collective-action.md) |
| power benefits $g=G^\beta$ | $\hat G=(\beta s_1a)^{1/(1-\beta)}$, $G^*=(\beta a)^{1/(1-\beta)}$, $\hat G/G^*=s_1^{1/(1-\beta)}$ | [3.2](lessons/03-02-olsons-logic-of-collective-action.md) |
| exploitation | provider nets $(1-\beta)s_1V(\hat G)$; member $j$ nets $s_jV(\hat G)$ | [3.2](lessons/03-02-olsons-logic-of-collective-action.md) |
| by-product lobbying budget | at most $n(b-\kappa)$ | [3.2](lessons/03-02-olsons-logic-of-collective-action.md) |
| Hardin's $k$ (equal shares, lumpy good costing a third of group value) | $k=\lceil n/3\rceil$ | [3.2](lessons/03-02-olsons-logic-of-collective-action.md) |
| Gordon user FOC | $\tfrac1nY'(E)+(1-\tfrac1n)\frac{Y(E)}E=w$; open access $Y(E)=wE$; $Y=A\sqrt E$: rent share $(2n-1)/n^2$ | [3.3](lessons/03-03-the-commons-and-common-pool-resources.md) |
| linear commons | stage Nash $A/(n+1)$ each; quota $A/(2n)$; best deviation $A(n+1)/(4n)$ | [3.3](lessons/03-03-the-commons-and-common-pool-resources.md) |
| critical discount factor | $\delta^*=\frac{v^D-v^C}{v^D-v^N}$; linear commons $\frac{(n+1)^2}{n^2+6n+1}$; with detection prob. $\pi$: $\frac g{g+\pi}$, $g=\frac{v^D-v^C}{v^C-v^N}$ | [3.3](lessons/03-03-the-commons-and-common-pool-resources.md) |
| fine-then-forgive window | $\frac{v^D-v^C}{\delta}\le s\le\frac{v^C-v^N}{1-\delta}$, nonempty iff $\delta\ge\delta^*$ | [3.3](lessons/03-03-the-commons-and-common-pool-resources.md) |

### Rules and agenda formulas

| Quantity | Formula | Lesson |
|---|---|---|
| Buchanan-Tullock optimum | $\min E(q)+D(q)$; $-E'(q^*)=D'(q^*)$; $dq^*/d\alpha=-e'(q^*)/C''(q^*)>0$ for $E=\alpha e$ | [3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md) |
| Rae-Taylor | $P_k=\tfrac12(1+\Pr[S=k-1])$, $S\sim\text{Bin}(n-1,\tfrac12)$; max at $k=\frac{n+1}2$ ($n$ odd) | [3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md) |
| unequal-intensity threshold | expected loss $\Lambda_k=\tfrac12(L_A\Pr[S\ge k]+L_B\Pr[S\le k-2])$; raise $k$ iff $k<n\lambda$; $k^*=\lceil n\lambda\rceil$, $\lambda=\frac{L_A}{L_A+L_B}$ | [3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md) |
| blocking minority | $n-k+1$ | [3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md) |
| setter outcome ($s>m$) | $x^*=s$ if $q\le2m-s$ or $q\ge s$; $2m-q$ if $2m-s<q<m$; $q$ if $m\le q<s$ | [3.5](lessons/03-05-agenda-setters-and-veto-players.md) |
| veto win-set (line, $q>v_k$) | $W(q)=[2v_k-q,\,q)$; core $[v_1,v_k]$ | [3.5](lessons/03-05-agenda-setters-and-veto-players.md) |
| gridlock interval ($p\ge v$) | $[f,v]$; $q<f$: $\min(m,2f-q)$; $q>v$: $\max(m,2v-q)$ | [3.5](lessons/03-05-agenda-setters-and-veto-players.md) |
| gridlock upper end ($p>m$) | $\max(f',\min(p,v))$, $f'=x_{(60)}$ | [3.5](lessons/03-05-agenda-setters-and-veto-players.md) |
| negative agenda control | committee at $g<m$ protects $q\in(2g-m,\,m]$ | [3.5](lessons/03-05-agenda-setters-and-veto-players.md) |

### Accountability and budget-cycle formulas

| Quantity | Formula | Lesson |
|---|---|---|
| re-election cutoff | $\bar r^*=\max\{0,(1-\delta)\bar R-\delta W\}$; zero rents iff $\delta\ge\frac{\bar R}{\bar R+W}$ | [4.1](lessons/04-01-elections-as-accountability.md) |
| comply vs breach | $\frac{\bar r+W}{1-\delta}$ vs $\bar R+W$ | [4.1](lessons/04-01-elections-as-accountability.md) |
| mimicking (selection) | $\lambda=\min\{1,\frac{\delta(W+\bar R/2)}{\bar R}\}$; $\mu'=\frac\pi{\pi+(1-\pi)\lambda}$; good policies $\pi+(1-\pi)\lambda$ then $\pi+\pi(1-\pi)(1-\lambda)$ | [4.1](lessons/04-01-elections-as-accountability.md) |
| normal updating | $m_1=m_0+\kappa(y_1-\hat a_1-m_0)$, $\kappa=\frac{\sigma_\eta^2}{\sigma_\eta^2+\sigma_\varepsilon^2}$ | [4.2](lessons/04-02-career-concerns-and-pandering.md) |
| Holmström effort | $c'(a_1^*)=\delta\lambda\kappa$, $a_2^*=0$; $T$ periods: $c'(a_t^*)=\lambda\sum_{s=t+1}^T\delta^{s-t}\kappa_{s-1}$, $\kappa_k=\frac\rho{1+k\rho}$ | [4.2](lessons/04-02-career-concerns-and-pandering.md) |
| pandering | pander iff $(1-2q)W>b$ (truth pays $b+qW$, pandering $(1-q)W$) | [4.2](lessons/04-02-career-concerns-and-pandering.md) |
| Phillips curve | $x_t=a(\pi_t-\pi_t^e)$; Nordhaus boom $ak$ then $-ak$ | [4.6](lessons/04-06-political-budget-cycles.md) |
| competence signal | $V_H=X+(1-\mu)\Delta$, $V_L=X-\mu\Delta$; separating $e_H\in[\frac{V_L}{c_L},\frac{V_H}{c_H}]$; $e^*=\frac{X-\mu\Delta}{c_L}$ | [4.6](lessons/04-06-political-budget-cycles.md) |
| cycle vs ban | signaling better iff $(1-\mu)\Delta>\frac{c_H}{c_L}(X-\mu\Delta)$ | [4.6](lessons/04-06-political-budget-cycles.md) |
| partisan cycle | $\pi^e=p\pi_L+(1-p)\pi_R$; $x_L=a(1-p)(\pi_L-\pi_R)$, $x_R=-ap(\pi_L-\pi_R)$; $\operatorname{Var}x=a^2p(1-p)(\pi_L-\pi_R)^2$ | [4.6](lessons/04-06-political-budget-cycles.md) |

### Interest group formulas

| Quantity | Formula | Lesson |
|---|---|---|
| truthful schedule | $C_i(p)=\max\{0,\Omega_i(p)-B_i\}$; policy maximizes $\sum_{i\in L}\Omega_i+a\Omega$ | [4.3](lessons/04-03-lobbying-protection-for-sale.md) |
| lobby's net payoff | at most $J(L)-J(L\setminus i)$ | [4.3](lessons/04-03-lobbying-protection-for-sale.md) |
| welfare derivative | $\partial\Omega/\partial p_j=(p_j-p_j^*)M_j'$ | [4.3](lessons/04-03-lobbying-protection-for-sale.md) |
| Grossman-Helpman tariff | $\frac{t_i}{1+t_i}=\frac{I_i-\alpha_L}{a+\alpha_L}\cdot\frac{z_i}{e_i}$, $z_i=X_i/M_i$, $e_i=-M_i'p_i/M_i$ | [4.3](lessons/04-03-lobbying-protection-for-sale.md) |
| informational lobbying | separation iff $b_L\le c\le b_H$ | [4.3](lessons/04-03-lobbying-protection-for-sale.md) |
| Peltzman optimum | $-M_p/M_\pi=\pi'(p^*)$; $p^*<p_m$; $p^*>p_c$ if $M_\pi\pi'(p_c)>-M_p$ | [4.4](lessons/04-04-regulatory-capture.md) |
| log support, linear demand | $p^*=c+\alpha\frac{a-c}2$; pass-through $1-\alpha/2$ | [4.4](lessons/04-04-regulatory-capture.md) |
| collusion-proof reward | at least $k$ times the firm's stake | [4.4](lessons/04-04-regulatory-capture.md) |
| Tullock symmetric effort | $x^*=\frac{rR(n-1)}{n^2}$, an equilibrium iff $r\le\frac n{n-1}$ (local SOC: $r(n-2)<n$) | [4.5](lessons/04-05-rent-seeking-contests.md) |
| Tullock dissipation | $D=\frac{r(n-1)}n$; payoff $\frac R{n^2}(n-r(n-1))$ | [4.5](lessons/04-05-rent-seeking-contests.md) |
| asymmetric, $r=1$ | $S=\frac{V_1V_2}{V_1+V_2}$, $x_1=\frac{V_1^2V_2}{(V_1+V_2)^2}$, $p_1=\frac{V_1}{V_1+V_2}$, $\pi_i=\frac{V_i^3}{(V_1+V_2)^2}$ | [4.5](lessons/04-05-rent-seeking-contests.md) |

### Bargaining and coalition formulas

| Quantity | Formula | Lesson |
|---|---|---|
| BF closed rule (majority) | proposer keeps $1-\delta\frac{n-1}{2n}$; $(n-1)/2$ partners get $\delta/n$; $v=1/n$ | [5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md) |
| BF unanimity | proposer keeps $1-\delta\frac{n-1}n$ | [5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md) |
| BF folk region | any division is an SPE if $n\ge5$ and $\delta>\frac{n+2}{2(n-1)}$ | [5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md) |
| unequal recognition | $v_i=p_i\cdot(\text{proposer share})+\delta v_i\cdot\Pr(\text{bought})$; cheapest votes bought | [5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md) |
| Gamson share | $w_i/\sum_{j\in C}w_j$ | [5.2](lessons/05-02-coalition-and-government-formation.md) |
| three parties, any two win | formateur $1-\delta/3$, partner $\delta/3$, values $\tfrac13$, each pair w.p. $\tfrac13$ | [5.2](lessons/05-02-coalition-and-government-formation.md) |
| apex game $(2,1,1,1)$, equal recognition | values $v_A=\tfrac25$, $v_S=\tfrac15$; a small formateur picks the apex w.p. $\frac{3+\delta}{6\delta}$, valid for $\delta\ge\tfrac35$ | [5.2](lessons/05-02-coalition-and-government-formation.md) |

### Redistribution formulas

| Quantity | Formula | Lesson |
|---|---|---|
| leaky-bucket tax (1.1) | $u_i(t)=(1-t)y_i+t\bar y-\tfrac\lambda2t^2\bar y$; $t^*=\min\{1,\max\{0,\frac1\lambda(1-\frac{y_m}{\bar y})\}\}$ | [1.1](lessons/01-01-from-ballots-to-policy-space.md) |
| MR labor and revenue | $\ell_i=(1-t)w_i$; $y_i=(1-t)w_i^2$; $T=t(1-t)m$, peak $t=\tfrac12$ | [5.3](lessons/05-03-the-meltzer-richard-model.md) |
| MR induced utility | $V_i(t)=\tfrac12(1-t)^2w_i^2+t(1-t)m$; $V_i'=m(1-2t)-(1-t)w_i^2$ | [5.3](lessons/05-03-the-meltzer-richard-model.md) |
| MR preferred rate | $t_i=\frac{m-w_i^2}{2m-w_i^2}$ if $w_i^2<m$, else 0 | [5.3](lessons/05-03-the-meltzer-richard-model.md) |
| MR equilibrium | $t^*=\frac{\rho-1}{2\rho-1}$ ($\rho>1$), $\rho=m/w_m^2$; $\frac{dt^*}{d\rho}=\frac1{(2\rho-1)^2}$; $t^*<\tfrac12$ | [5.3](lessons/05-03-the-meltzer-richard-model.md) |
| general elasticity $\varepsilon$ | $t^*=\frac{\rho-1}{(\rho-1)+\varepsilon\rho}<\frac1{1+\varepsilon}$ | [5.3](lessons/05-03-the-meltzer-richard-model.md) |
| decisive-income curve | $t(\hat y)=\frac{\bar y-\hat y}{2\bar y-\hat y}$ ($\hat y<\bar y$), else 0; $\frac{dt}{d\bar y}=\frac{\hat y}{(2\bar y-\hat y)^2}$ | [5.4](lessons/05-04-the-political-economy-of-inequality.md) |
| turnout-weighted electorate | $G(y)=\int_0^y\tau\,dF/\int\tau\,dF$; $y_v$ its median | [5.4](lessons/05-04-the-political-economy-of-inequality.md) |
| probabilistic voting with MR | $y_\phi=\frac{\sum n_g\phi_gy_g}{\sum n_g\phi_g}$, $t^*=t(y_\phi)$ | [5.4](lessons/05-04-the-political-economy-of-inequality.md) |
| POUM decisive income | $\hat y=E[y'\mid y_i]$ (persistent tax) | [5.4](lessons/05-04-the-political-economy-of-inequality.md) |

## Thinkers and texts

Who, when, where, and the claim this course uses, ordered by the lesson that cites them first. Years and venues only as
the lessons give them (verified against sources during the build); "—" means the lesson gives none.

| Who | Year | Work or venue | Claim used here | Lesson |
|---|---|---|---|---|
| Arthur Okun | — | *Equality and Efficiency: The Big Tradeoff* | the "leaky bucket" behind 1.1's reduced-form tax | [1.1](lessons/01-01-from-ballots-to-policy-space.md) |
| Joseph Stiglitz; Dennis Epple and Richard Romano | 1974; 1996 | *Journal of Public Economics* (both) | exit options give induced preferences two peaks ("ends against the middle") | [1.1](lessons/01-01-from-ballots-to-policy-space.md) |
| Anthony Downs | 1957 | *An Economic Theory of Democracy* | paradox of voting; rational ignorance; spatial competition | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md), [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md), [2.1](lessons/02-01-the-downsian-spatial-model.md) |
| William Riker and Peter Ordeshook | 1968 | "A Theory of the Calculus of Voting", *APSR* | $R=PB-C+D$ | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md) |
| Gary Chamberlain and Michael Rothschild | 1981 | *Journal of Economic Theory* | $P\approx g(\tfrac12)/n$ under uncertainty about $p$ | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md) |
| Thomas Palfrey and Howard Rosenthal | 1983; 1985; 1984 | "A Strategic Calculus of Voting", *Public Choice*; "Voter Participation and Strategic Uncertainty", *APSR*; "Participation and the provision of discrete public goods", *J. Public Economics* | participation games; turnout fades with private information; threshold public goods | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md), [3.1](lessons/03-01-free-riding-and-threshold-games.md) |
| Stephen Coate and Michael Conlin | 2004 | "A Group Rule-Utilitarian Approach to Voter Turnout", *AER* | group-based turnout (after Harsanyi's rule utilitarianism) | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md) |
| Timothy Feddersen and Alvaro Sandroni | 2006 | "A Theory of Participation in Elections", *AER* | ethical voters | [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md) |
| Timothy Feddersen and Wolfgang Pesendorfer | 1996 | "The Swing Voter's Curse", *AER* | swing voter's curse; full-information equivalence | [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md) |
| Mark Fey and Jaehoon Kim | — | comment, *AER* | corrected proof of FP's Proposition 1 | [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md) |
| Marco Battaglini, Rebecca Morton, Thomas Palfrey | 2010 | *Review of Economic Studies* | lab: abstention and partial compensation for partisans | [1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md) |
| Emir Kamenica and Matthew Gentzkow | 2011 | "Bayesian Persuasion", *AER* | optimal signal, concavification | [1.4](lessons/01-04-persuasion-and-the-media.md) |
| Vincent Crawford and Joel Sobel | 1982 | "Strategic Information Transmission", *Econometrica* | cheap talk; babbling always an equilibrium | [1.4](lessons/01-04-persuasion-and-the-media.md) |
| Sendhil Mullainathan and Andrei Shleifer | 2005 | "The Market for News", *AER* | demand-driven slant (confirmation) | [1.4](lessons/01-04-persuasion-and-the-media.md) |
| Matthew Gentzkow and Jesse Shapiro | 2006; 2010 | "Media Bias and Reputation", *JPE*; "What Drives Media Slant?", *Econometrica* | slant toward priors to build reputation; slant tracks readers more than owners | [1.4](lessons/01-04-persuasion-and-the-media.md) |
| Harold Hotelling | 1929 | "Stability in Competition", *Economic Journal* | two sellers at the centre | [2.1](lessons/02-01-the-downsian-spatial-model.md) |
| Donald Wittman; Randall Calvert | 1977, 1983; 1985 | *JET* and *APSR*; *AJPS* | policy-motivated candidates (Calvert-Wittman model) | [2.1](lessons/02-01-the-downsian-spatial-model.md) |
| d'Aspremont, Gabszewicz and Thisse | 1979 | *Econometrica* | Hotelling's price-location result fails with linear transport costs | [2.1](lessons/02-01-the-downsian-spatial-model.md) |
| Charles Plott | 1967 | *AER* | pairwise symmetry for a core (odd $n$) | [2.2](lessons/02-02-multidimensional-voting-and-chaos.md) |
| Richard McKelvey | 1976; 1986 | *JET*; *AJPS* | chaos theorem; uncovered set contains equilibrium outcomes of three institutions | [2.2](lessons/02-02-multidimensional-voting-and-chaos.md) |
| Norman Schofield | 1978 | *Review of Economic Studies* | chaos for smooth preferences | [2.2](lessons/02-02-multidimensional-voting-and-chaos.md) |
| Kenneth Shepsle | 1979 | *AJPS* | structure-induced equilibrium | [2.2](lessons/02-02-multidimensional-voting-and-chaos.md) |
| Nicholas Miller | 1980 | *AJPS* | uncovered set | [2.2](lessons/02-02-multidimensional-voting-and-chaos.md) |
| William Riker | 1962; — | *The Theory of Political Coalitions*; objection to Shepsle | size principle; institutions are chosen too | [2.2](lessons/02-02-multidimensional-voting-and-chaos.md), [5.2](lessons/05-02-coalition-and-government-formation.md) |
| Assar Lindbeck and Jörgen Weibull | 1987 | *Public Choice* | probabilistic voting; existence needs enough randomness | [2.3](lessons/02-03-probabilistic-voting.md) |
| Torsten Persson and Guido Tabellini | 1999; — | "The Size and Scope of Government", *EER*; *Political Economics* | swing districts; textbook probabilistic voting | [2.3](lessons/02-03-probabilistic-voting.md), [2.6](lessons/02-06-electoral-rules-compared-formally.md) |
| Peter Coughlin | — | — | general probabilistic-voting results | [2.3](lessons/02-03-probabilistic-voting.md) |
| Avinash Dixit and John Londregan | 1996 | *Journal of Politics* | core vs swing targeting | [2.3](lessons/02-03-probabilistic-voting.md) |
| Enriqueta Aragones and Thomas Palfrey | 2002 | *JET* | valence with uncertain median: mixed equilibrium, favourite more moderate | [2.4](lessons/02-04-valence-and-citizen-candidates.md) |
| Tim Groseclose | 2001 | *AJPS* | valence plus policy motivation gives divergence | [2.4](lessons/02-04-valence-and-citizen-candidates.md) |
| Martin Osborne and Al Slivinski | 1996 | *QJE* | citizen-candidate model | [2.4](lessons/02-04-valence-and-citizen-candidates.md) |
| Timothy Besley and Stephen Coate | 1997 | *QJE* | citizen-candidates with strategic voting | [2.4](lessons/02-04-valence-and-citizen-candidates.md) |
| Maurice Duverger | 1951 | *Les partis politiques* | plurality favours two parties | [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md) |
| Roger Myerson and Robert Weber | 1993 | "A Theory of Voting Equilibria", *APSR* | pivot probabilities, prospective rating, ordering condition | [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md) |
| Thomas Palfrey | 1989 | "A Mathematical Proof of Duverger's Law", in Ordeshook (ed.), *Models of Strategic Choice in Politics* | three Duvergerian equilibria; non-Duvergerian ones knife-edge | [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md) |
| Mark Fey | 1997 | "Stability and Coordination in Duverger's Law", *APSR* | non-Duvergerian equilibria unstable under polls | [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md) |
| Gary Cox | 1990; 1997 | "Centripetal and Centrifugal Incentives in Electoral Systems", *AJPS*; *Making Votes Count* | threshold $S^*$; M+1 rule | [2.5](lessons/02-05-strategic-voting-and-duvergers-law.md), [2.6](lessons/02-06-electoral-rules-compared-formally.md) |
| Roger Myerson | 1993; 1999 | "Incentives to Cultivate Favored Minorities under Alternative Electoral Systems", *APSR*; *EER* | favored minorities; compact form of Cox | [2.6](lessons/02-06-electoral-rules-compared-formally.md) |
| Alessandro Lizzeri and Nicola Persico | 2001 | "The Provision of Public Goods under Alternative Electoral Incentives", *AER* | pork vs public goods, WTA vs PR | [2.6](lessons/02-06-electoral-rules-compared-formally.md) |
| Russell Hardin | 1971; 1982 | "Collective action as an agreeable n-prisoners' dilemma", *Behavioral Science*; *Collective Action* | Olson as an $n$-person PD; $k$ not $n$; selective incentives explain maintenance | [3.1](lessons/03-01-free-riding-and-threshold-games.md), [3.2](lessons/03-02-olsons-logic-of-collective-action.md) |
| Andreas Diekmann | 1985 | "Volunteer's Dilemma", *J. Conflict Resolution* | $k=1$ threshold game | [3.1](lessons/03-01-free-riding-and-threshold-games.md) |
| Amartya Sen | 1967 | *QJE* | the assurance problem | [3.1](lessons/03-01-free-riding-and-threshold-games.md) |
| van de Kragt, Orbell and Dawes | 1983 | "The Minimal Contributing Set ...", *APSR* | coordination device for threshold goods | [3.1](lessons/03-01-free-riding-and-threshold-games.md) |
| Mancur Olson | 1965 | *The Logic of Collective Action* | group size, shares, selective incentives, by-product theory | [3.2](lessons/03-02-olsons-logic-of-collective-action.md) |
| Mancur Olson and Richard Zeckhauser | 1966 | "An Economic Theory of Alliances", *Review of Economics and Statistics* | exploitation of the great by the small (NATO) | [3.2](lessons/03-02-olsons-logic-of-collective-action.md) |
| John Chamberlin | 1974 | "Provision of Collective Goods as a Function of Group Size", *APSR* | Olson's absolute claim fails for nonrival goods | [3.2](lessons/03-02-olsons-logic-of-collective-action.md) |
| H. Scott Gordon | 1954 | "The Economic Theory of a Common-Property Resource: The Fishery", *JPE* | open-access rent dissipation | [3.3](lessons/03-03-the-commons-and-common-pool-resources.md) |
| Garrett Hardin | 1968 | "The Tragedy of the Commons", *Science* | named the tragedy; mutually agreed coercion | [3.3](lessons/03-03-the-commons-and-common-pool-resources.md) |
| Elinor Ostrom | 1990 | *Governing the Commons* | eight design principles | [3.3](lessons/03-03-the-commons-and-common-pool-resources.md) |
| Ostrom, Walker and Gardner | 1992 | "Covenants with and without a Sword", *APSR* | experimental design: communication, sanctioning | [3.3](lessons/03-03-the-commons-and-common-pool-resources.md) |
| James Buchanan and Gordon Tullock | 1962 | *The Calculus of Consent* | external vs decision costs; unanimity for the constitution | [3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md) |
| Douglas Rae; Michael Taylor | 1969; 1969 | "Decision-Rules and Individual Values in Constitutional Choice", *APSR*; "Proof of a theorem on majority rule", *Behavioral Science* | Rae-Taylor theorem | [3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md) |
| Thomas Romer and Howard Rosenthal | 1978 | "Political Resource Allocation, Controlled Agendas, and the Status Quo", *Public Choice* | setter model (Oregon school budgets) | [3.5](lessons/03-05-agenda-setters-and-veto-players.md) |
| George Tsebelis | 2002 | *Veto Players: How Political Institutions Work* | veto players, absorption | [3.5](lessons/03-05-agenda-setters-and-veto-players.md) |
| Keith Krehbiel | 1998 | *Pivotal Politics: A Theory of U.S. Lawmaking* | gridlock interval | [3.5](lessons/03-05-agenda-setters-and-veto-players.md) |
| Robert Barro | 1973 | "The Control of Politicians", *Public Choice* | sanctioning, rents observed | [4.1](lessons/04-01-elections-as-accountability.md) |
| John Ferejohn | 1986 | "Incumbent Performance and Electoral Control", *Public Choice* | performance standard with hidden shocks | [4.1](lessons/04-01-elections-as-accountability.md) |
| James Fearon | 1999 | in Przeworski, Stokes and Manin (eds.), *Democracy, Accountability, and Representation* | selection vs sanctioning | [4.1](lessons/04-01-elections-as-accountability.md) |
| Timothy Besley | 2006 | *Principled Agents?* | combining discipline and selection | [4.1](lessons/04-01-elections-as-accountability.md) |
| Bengt Holmström | 1999 | "Managerial Incentive Problems: A Dynamic Perspective", *Review of Economic Studies* | career concerns, signal jamming | [4.2](lessons/04-02-career-concerns-and-pandering.md) |
| Canes-Wrone, Herron and Shotts | 2001 | "Leadership and Pandering", *AJPS* | pandering (both directions) | [4.2](lessons/04-02-career-concerns-and-pandering.md) |
| Eric Maskin and Jean Tirole | 2004 | "The Politician and the Judge", *AER* | accountability screens and disciplines but induces pandering | [4.2](lessons/04-02-career-concerns-and-pandering.md) |
| Gene Grossman and Elhanan Helpman | 1994 | "Protection for Sale", *AER* | tariff formula | [4.3](lessons/04-03-lobbying-protection-for-sale.md) |
| Douglas Bernheim and Michael Whinston | 1986 | *QJE* | menu auctions, truthful equilibria | [4.3](lessons/04-03-lobbying-protection-for-sale.md) |
| Jan Potters and Frans van Winden | 1992 | *Public Choice* | informational lobbying (stripped version) | [4.3](lessons/04-03-lobbying-protection-for-sale.md) |
| Pinelopi Goldberg and Giovanni Maggi | 1999 | *AER* | US protection consistent with GH; welfare weight many times contributions | [4.3](lessons/04-03-lobbying-protection-for-sale.md) |
| George Stigler | 1971 | "The Theory of Economic Regulation", *Bell Journal of Economics and Management Science* | regulation sold to the best-organized | [4.4](lessons/04-04-regulatory-capture.md) |
| Sam Peltzman | 1976 | "Toward a More General Theory of Regulation", *Journal of Law and Economics* | interior regulated price | [4.4](lessons/04-04-regulatory-capture.md) |
| Gary Becker | 1983 | "A Theory of Competition among Pressure Groups for Political Influence", *QJE* | deadweight cost restrains transfers | [4.4](lessons/04-04-regulatory-capture.md) |
| Jean-Jacques Laffont and Jean Tirole | 1991 | "The Politics of Government Decision-Making", *QJE* | information-based capture, low-powered incentives | [4.4](lessons/04-04-regulatory-capture.md) |
| Yeon-Koo Che | 1995 | *RAND Journal of Economics* | revolving door can make regulators tougher | [4.4](lessons/04-04-regulatory-capture.md) |
| Timothy Besley and Andrea Prat | 2006 | "Handcuffs for the Grabbing Hand?", *AER* | media capture | [4.4](lessons/04-04-regulatory-capture.md) |
| Gordon Tullock | 1967; 1980 | "The Welfare Costs of Tariffs, Monopolies, and Theft", *Western Economic Journal*; "Efficient Rent Seeking", in Buchanan, Tollison and Tullock (eds.) | rent seeking; the contest model | [4.5](lessons/04-05-rent-seeking-contests.md) |
| Anne Krueger | 1974 | "The Political Economy of the Rent-Seeking Society", *AER* | named rent seeking (import licences) | [4.5](lessons/04-05-rent-seeking-contests.md) |
| Richard Posner | 1975 | "The Social Costs of Monopoly and Regulation", *JPE* | full dissipation under two assumptions | [4.5](lessons/04-05-rent-seeking-contests.md) |
| Baye, Kovenock and de Vries | 1994 | *Public Choice* | mixed equilibrium, full dissipation, two players with $r>2$ | [4.5](lessons/04-05-rent-seeking-contests.md) |
| William Nordhaus | 1975 | "The Political Business Cycle", *Review of Economic Studies* | opportunistic cycles | [4.6](lessons/04-06-political-budget-cycles.md) |
| Kenneth Rogoff and Anne Sibert; Kenneth Rogoff | 1988; 1990 | "Elections and Macroeconomic Policy Cycles", *RES*; "Equilibrium Political Budget Cycles", *AER* | competence signaling; visible spending before elections | [4.6](lessons/04-06-political-budget-cycles.md) |
| Alberto Alesina | 1987 | "Macroeconomic Policy in a Two-Party System as a Repeated Game", *QJE* | rational partisan cycles | [4.6](lessons/04-06-political-budget-cycles.md) |
| Adi Brender and Allan Drazen | 2005 | *Journal of Monetary Economics* | fiscal cycles concentrated in newer democracies | [4.6](lessons/04-06-political-budget-cycles.md) |
| David Baron and John Ferejohn | 1989 | "Bargaining in Legislatures", *APSR* | legislative bargaining | [5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md) |
| Hülya Eraslan | 2002 | "Uniqueness of Stationary Equilibrium Payoffs in the Baron-Ferejohn Model", *JET* | unique stationary payoffs | [5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md), [5.2](lessons/05-02-coalition-and-government-formation.md) |
| David Primo | 2007 | *Public Choice* | open-rule equilibrium admits several randomizations | [5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md) |
| William Gamson | 1961 | "A Theory of Coalition Formation", *American Sociological Review* | proportional payoffs | [5.2](lessons/05-02-coalition-and-government-formation.md) |
| Robert Axelrod | 1970 | *Conflict of Interest* | minimal connected winning coalitions | [5.2](lessons/05-02-coalition-and-government-formation.md) |
| Michael Laver and Kenneth Shepsle | 1996 | *Making and Breaking Governments* | portfolio allocation, strong parties | [5.2](lessons/05-02-coalition-and-government-formation.md) |
| James Snyder, Michael Ting, Stephen Ansolabehere | 2005 | "Legislative Bargaining under Weighted Voting", *AER* | payoffs proportional to voting weight, with an exception | [5.2](lessons/05-02-coalition-and-government-formation.md) |
| Eric Browne and Mark Franklin | 1973 | *APSR* | portfolio shares track seat shares | [5.2](lessons/05-02-coalition-and-government-formation.md) |
| Paul Warwick and James Druckman | 2006 | *European Journal of Political Research* | salience-weighted proportionality (they also have a 2001 *BJPS* paper the lessons do not cite) | [5.2](lessons/05-02-coalition-and-government-formation.md) |
| Ansolabehere, Snyder, Strauss and Ting | 2005 | *AJPS* | formateur bonus with voting weights | [5.2](lessons/05-02-coalition-and-government-formation.md) |
| Massimo Morelli | 1999 | *APSR* | demand bargaining, proportional splits | [5.2](lessons/05-02-coalition-and-government-formation.md) |
| Jamie Carroll and Gary Cox | 2007 | *AJPS* | pre-election pacts precommit to Gamson | [5.2](lessons/05-02-coalition-and-government-formation.md) |
| Allan Meltzer and Scott Richard | 1981; 1983 | "A Rational Theory of the Size of Government", *JPE*; tests, *Public Choice* | MR model; US spending vs $\rho$ | [5.3](lessons/05-03-the-meltzer-richard-model.md) |
| Roland Bénabou and Efe Ok | 2001 | *QJE* | POUM | [5.4](lessons/05-04-the-political-economy-of-inequality.md) |
| John Roemer | 1998 | *Journal of Public Economics* | a second issue splits the poor | [5.4](lessons/05-04-the-political-economy-of-inequality.md) |
| Alberto Alesina and George-Marios Angeletos | 2005 | *AER* | fairness beliefs, multiple equilibria | [5.4](lessons/05-04-the-political-economy-of-inequality.md) |

## Assumed, not taught here

Every prerequisite the lessons use without deriving, with the course that teaches it. Built lessons are linked directly;
courses not yet built link to their syllabus. **Required by the syllabus Notes:** principal-agent contracts
([`grad-micro` 5.4](../grad-micro/lessons/05-04-moral-hazard-principal-agent.md), for 4.1), the Samuelson condition and
the contributor set ([`public-economics` 1.1](../public-economics/lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md)-[1.2](../public-economics/lessons/01-02-voluntary-provision-and-crowding-out.md),
for 3.1-3.2; Bowen in [1.3](../public-economics/lessons/01-03-revealing-demand-for-public-goods.md)), and a quasilinear
labor-supply first-order condition ([`micro-refresher` 1.2](../micro-refresher/lessons/01-02-utility-maximization-marshallian-demand.md),
for 5.3). The static commons game is [`game-theory-refresher` 1.4](../game-theory-refresher/lessons/01-04-cournot-bertrand-applications.md).

**Social choice (owned by `social-choice`; not re-taught here)**

| Fact | Where it's taught |
|---|---|
| Condorcet winner and loser; majority relation (2.5's Duvergerian winners) | [`social-choice` 1.1](../social-choice/lessons/01-01-profiles-rules-and-the-majority-relation.md) |
| May's theorem; supermajority rules fail only neutrality (3.4) | [`social-choice` 1.2](../social-choice/lessons/01-02-mays-theorem.md) |
| Arrow as a map of escapes; restricted domain as the course's home (1.1) | [`social-choice` 1.3](../social-choice/lessons/01-03-arrow-as-a-map.md); Arrow's proof [`grad-game-theory` 5.1](../grad-game-theory/lessons/05-01-social-choice-impossibility.md) |
| Cycles, top cycle, agenda control (1.1, 2.2's McKelvey reading) | [`social-choice` 1.4](../social-choice/lessons/01-04-how-often-do-cycles-happen.md) |
| Plurality is manipulable; Gibbard-Satterthwaite (2.5) | [`social-choice` 3.1](../social-choice/lessons/03-01-manipulation-and-strategy-proofness.md) |
| Single-peakedness and Black's theorem (1.1, 2.1) | [`social-choice` 3.3](../social-choice/lessons/03-03-single-peakedness-black-and-moulin.md) |
| Single-crossing and the representative voter theorem (1.1, 5.3, 5.4); the three-voter Latin square in the plane (2.2) | [`social-choice` 3.4](../social-choice/lessons/03-04-single-crossing-and-value-restriction.md) |
| Condorcet jury theorem and its independence assumption (3.4) | [`social-choice` 5.1](../social-choice/lessons/05-01-the-condorcet-jury-theorem.md) |
| Strategic jurors, pivotal reasoning, unanimity juries, common causes (1.2, 1.3) | [`social-choice` 5.2](../social-choice/lessons/05-02-when-the-jury-theorem-fails.md) |
| Pivot probabilities for strategic approval ballots (1.2) | [`social-choice` 6.1](../social-choice/lessons/06-01-approval-voting.md) |

**Game theory (owned by `grad-game-theory` and `game-theory-refresher`)**

| Fact | Where it's taught |
|---|---|
| Security levels and mixed equilibria of constant-sum games (2.1 Lemma 1, 2.4 Example 2) | [`grad-game-theory` 1.4](../grad-game-theory/lessons/01-04-zero-sum-minimax-lp-duality.md) |
| Mixed-strategy Nash equilibrium via indifference (1.2, 2.6) | [`grad-game-theory` 2.2](../grad-game-theory/lessons/02-02-nash-equilibrium-mixed-strategies.md) |
| Existence with continuous, quasiconcave payoffs (Debreu-Fan-Glicksberg) (2.3) | [`grad-game-theory` 2.3](../grad-game-theory/lessons/02-03-existence-of-nash-equilibrium.md) |
| Stag hunt and equilibrium selection (3.1) | [`grad-game-theory` 2.4](../grad-game-theory/lessons/02-04-computing-characterizing-equilibria.md) |
| Backward induction, subgame perfection, one-shot deviation principle, ultimatum game (3.5, 4.1, 5.1) | [`grad-game-theory` 3.2](../grad-game-theory/lessons/03-02-backward-induction-subgame-perfection.md) |
| Repeated games, grim trigger, critical discount factor in $T,c,p$ notation; finite-horizon unravelling (3.3, 4.1) | [`grad-game-theory` 3.3](../grad-game-theory/lessons/03-03-repeated-games-finite-infinite.md) |
| Folk theorems (3.3's many sustainable quotas; 5.1's any-division result) | [`grad-game-theory` 3.4](../grad-game-theory/lessons/03-04-folk-theorems.md) |
| Rubinstein alternating offers, $\frac1{1+\delta}$ (5.1) | [`grad-game-theory` 3.5](../grad-game-theory/lessons/03-05-bargaining.md) |
| Bayesian games, Bayes-Nash equilibrium, cutoff strategies (1.3, 2.5, 3.1) | [`grad-game-theory` 4.1](../grad-game-theory/lessons/04-01-bayesian-games-bayes-nash.md) |
| All-pay auction (4.5's $r\to\infty$ limit) | [`grad-game-theory` 4.3](../grad-game-theory/lessons/04-03-revenue-equivalence-theorem.md) |
| Perfect Bayesian equilibrium, off-path beliefs (1.4, 4.1, 4.2) | [`grad-game-theory` 4.4](../grad-game-theory/lessons/04-04-perfect-bayesian-sequential-equilibrium.md) |
| Signaling games, separating equilibria, the Intuitive Criterion; cheap talk noted (1.4, 4.2, 4.3, 4.6) | [`grad-game-theory` 4.5](../grad-game-theory/lessons/04-05-signaling-games-refinements.md) |
| Median voter as a committee result (2.1, 2.2) | [`grad-game-theory` 5.1](../grad-game-theory/lessons/05-01-social-choice-impossibility.md) |
| Revelation principle (1.4's one-message-per-action remark) | [`grad-game-theory` 5.2](../grad-game-theory/lessons/05-02-revelation-principle-incentive-compatibility.md) |
| Empty core of the majority game (5.1, 5.2) | [`grad-game-theory` 6.1](../grad-game-theory/lessons/06-01-coalitional-games-core.md) |
| Shapley-Shubik index (5.2) | [`grad-game-theory` 6.2](../grad-game-theory/lessons/06-02-shapley-value.md) |
| Static commons game, Nash over-extraction (3.3) | [`game-theory-refresher` 1.4](../game-theory-refresher/lessons/01-04-cournot-bertrand-applications.md) |

**Economics**

| Fact | Where it's taught |
|---|---|
| Indirect utility (1.1's induced preference step); quasilinear labor FOC $(1-t)w=\ell$ (5.3) | [`micro-refresher` 1.2](../micro-refresher/lessons/01-02-utility-maximization-marshallian-demand.md) |
| Principal-agent contracts (4.1's voter as a principal who can only fire; 4.2-4.4 benchmarks) | [`grad-micro` 5.4](../grad-micro/lessons/05-04-moral-hazard-principal-agent.md) |
| Adverse selection (4.1's selection) | [`grad-micro` 5.1](../grad-micro/lessons/05-01-adverse-selection-lemons.md) |
| Spence signaling, single crossing (4.6) | [`grad-micro` 5.2](../grad-micro/lessons/05-02-signaling.md) |
| Lerner markup (4.3's political Ramsey reading) | [`grad-micro` 6.1](../grad-micro/lessons/06-01-monopoly-price-discrimination.md) |
| Cournot oligopoly price (4.4 Example 2) | [`grad-micro` 6.2](../grad-micro/lessons/06-02-oligopoly.md) |
| Public goods, Nash underprovision; rival but non-excludable goods (3.2, 3.3) | [`grad-micro` 6.4](../grad-micro/lessons/06-04-public-goods.md) |
| Samuelson condition (2.6's swing-district benchmark; 3.1; 3.2's $G^*$) | [`public-economics` 1.1](../public-economics/lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| Voluntary provision and the contributor set; two-donor exploitation (3.1, 3.2) | [`public-economics` 1.2](../public-economics/lessons/01-02-voluntary-provision-and-crowding-out.md) |
| Bowen median-voter provision (1.1 P1) | [`public-economics` 1.3](../public-economics/lessons/01-03-revealing-demand-for-public-goods.md) |
| Ramsey inverse-elasticity rule (4.3) | [`public-economics` 4.1](../public-economics/lessons/04-01-the-ramsey-rule.md) |
| Linear income tax: revenue peak $1/(1+e)$, welfare weights; what the rate **should** be (2.3, 5.3, 5.4) | [`public-economics` 5.1](../public-economics/lessons/05-01-the-linear-income-tax.md) |
| Expectations-augmented Phillips curve; Kydland-Prescott inflation bias (4.6) | [`grad-macro` 6.2](../grad-macro/lessons/06-02-policy-rules-taylor-principle.md) |
| Implicit differentiation for comparative statics (3.4's $dq^*/d\alpha$) | [`calc-refresher` 1.2](../calc-refresher/lessons/01-02-differentiation-rules.md) |
| Lagrange multiplier for a budget constraint (2.3's transfer FOC) | [`calc-refresher` 4.2](../calc-refresher/lessons/04-02-multivariable-optimization-lagrange.md) |
| Concavity and single-peakedness of a concave function (1.1, 4.4, 5.3) | [`grad-micro` 1.1](../grad-micro/lessons/01-01-convexity-concavity-quasiconcavity.md) |

**Probability and statistics**

| Fact | Where it's taught |
|---|---|
| Bayes' rule (1.3, 1.4, 4.1, 4.2) | [`prob-stat-refresher` 1.2](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md) |
| Binomial distribution; Poisson limit (1.2, 3.1, 3.4) | [`prob-stat-refresher` 2.2](../prob-stat-refresher/lessons/02-02-discrete-distributions.md) |
| Expectation and variance; $E[(q-x)^2]=(Eq-x)^2+\operatorname{Var}q$ (1.1) | [`prob-stat-refresher` 2.1](../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md) |
| Uniform densities and integrals over them (2.3's shocks, 1.2's Beta integral) | [`prob-stat-refresher` 2.3](../prob-stat-refresher/lessons/02-03-continuous-distributions.md) |
| Kullback-Leibler divergence; Jensen's inequality (1.2's rate $\Delta(p)$; 5.4's POUM) | [`information-theory` 1.4](../information-theory/lessons/01-04-relative-entropy-kl-jensen.md) |
| Stirling's formula (1.2's proof) | stated inline in [1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md); used in [`stat-mech` 1.2](../stat-mech/lessons/01-02-microstates-macrostates-postulate.md) |
| Conditional expectation of jointly normal variables, slope $\operatorname{Cov}/\operatorname{Var}$ (4.2's updating) | stated inline in [4.2](lessons/04-02-career-concerns-and-pandering.md); the Gaussian conditioning formula is in [`stochastic-calculus` 1.2](../stochastic-calculus/lessons/01-02-gaussian-structure-of-bm.md); covariance in [`prob-stat-refresher` 3.1](../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md) |
| First-order stochastic dominance (5.4's $G\le F$) | [`grad-micro` 2.5](../grad-micro/lessons/02-05-choice-under-uncertainty.md) |

**Institutions, normative questions and evidence (owned elsewhere)**

| Fact | Where it's taught |
|---|---|
| Plurality and runoff rules (2.4, 2.6) | [`political-institutions` 1.1](../political-institutions/lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md) |
| District magnitude and thresholds (2.5, 2.6) | [`political-institutions` 2.2](../political-institutions/lessons/02-02-district-magnitude-and-thresholds.md) |
| Duverger's law observed, wasted votes, cross-district linkage (2.4, 2.5, 2.6) | [`political-institutions` 2.3](../political-institutions/lessons/02-03-duvergers-law-observed.md) |
| Government formation procedures: formateurs, investiture, minority governments (5.1, 5.2) | [`political-institutions` 3.2](../political-institutions/lessons/03-02-forming-governments-coalitions-and-minorities.md) |
| Presidential vetoes and budget defaults (3.5) | [`political-institutions` 3.3](../political-institutions/lessons/03-03-presidential-government.md) |
| Second chambers as veto players (3.5) | [`political-institutions` 4.1](../political-institutions/lessons/04-01-bicameralism.md) |
| Committees, germaneness, open and closed rules, cartel theory (2.2, 3.5, 5.1) | [`political-institutions` 4.2](../political-institutions/lessons/04-02-committees-and-agenda-control.md) |
| Two-party centripetal pull described (2.1) | [`political-institutions` 4.4](../political-institutions/lessons/04-04-party-systems.md) |
| Delegation, oversight, central bank independence (4.1, 4.2, 4.4) | [`political-institutions` 6.2](../political-institutions/lessons/06-02-delegation-and-oversight.md) |
| Whether outcomes are legitimate; why democracy (1.1-1.3, 2.3, 2.6, 3.4, 4.1, 4.6, 5.4) | [`political-philosophy` 5.1](../political-philosophy/lessons/05-01-why-democracy.md) |
| Majority rule vs rights (3.4) | [`political-philosophy` 5.2](../political-philosophy/lessons/05-02-majority-rule-vs-rights-judicial-review.md) |
| Riker vs Mackie: does chaos wound democracy (2.2) | [`political-philosophy` 5.4](../political-philosophy/lessons/05-04-does-social-choice-wound-democracy.md) |
| Veil of ignorance (3.4's constitutional stage); desert and luck (5.4) | [`political-philosophy` 2.2](../political-philosophy/lessons/02-02-rawls-the-original-position.md), [2.3](../political-philosophy/lessons/02-03-rawls-the-two-principles-and-maximin.md) |
| Locke on enclosure (3.3); Madison's checks (3.5) | [`history-of-political-thought` 4.1](../history-of-political-thought/lessons/04-01-locke-against-filmer-and-property.md), [5.2](../history-of-political-thought/lessons/05-02-the-federalist-faction-and-the-extended-republic.md) |
| Class interest to class action (3.2); norms and sanctioning as public goods (3.1, 3.3) | [`social-theory` 2.2](../social-theory/lessons/02-02-class-class-consciousness-and-ideology.md), [6.2](../social-theory/lessons/06-02-rational-choice-sociology.md) |
| Evidence and identification: turnout and closeness, strategic voting, polarization, media, rules and spending, protection, revolving doors, budget cycles, Gamson vs formateur, inequality and redistribution (1.2-1.4, 2.1, 2.5, 2.6, 4.3, 4.4, 4.6, 5.2-5.4) | `empirical-political-economy` ([syllabus](../empirical-political-economy/syllabus.md)) |
| Agency and commitment under autocracy; democratization (4.1, 4.4, 5.4) | `institutions-and-development` ([syllabus](../institutions-and-development/syllabus.md)) |
| Contests for arming, alliances, trade agreements, two-level games (3.2, 3.5, 4.3, 4.5) | `conflict-and-bargaining` ([syllabus](../conflict-and-bargaining/syllabus.md)) |
| Collective action of revolt and cascades (3.1) | `comparative-politics` ([syllabus](../comparative-politics/syllabus.md)) |
| Hegemonic stability (3.2) | `international-relations` ([syllabus](../international-relations/syllabus.md)) |
| Constitutional decision thresholds (3.4) | `constitutional-law` ([syllabus](../constitutional-law/syllabus.md)) |

## Pitfalls

Every lesson's "Watch out", deduped and grouped by theme. Misstating the game comes first: it is the commonest error.

### Misstating the game

- **Commitment.** Bayesian persuasion needs the test fixed before the state is known; a press office that speaks after
  seeing the data is in cheap talk and persuades no one, and one that can bury verifiable reports gets at most full
  disclosure. *([1.4](lessons/01-04-persuasion-and-the-media.md))*
- **Binding platforms.** Downsian convergence and Calvert-Wittman assume the winner implements her platform; drop it and
  you are in the citizen-candidate model, where candidates diverge with **no** uncertainty, from no commitment plus a cost
  of running, capped by the entry threat. *([2.1](lessons/02-01-the-downsian-spatial-model.md), [2.4](lessons/02-04-valence-and-citizen-candidates.md))*
- **Timing of the tax.** Meltzer-Richard's ceiling $t^*<\tfrac12$ is a property of committing the tax before labor is
  supplied; vote after labor is sunk and the only self-fulfilling rate is $t=1$, worse for everyone. *([5.3](lessons/05-03-the-meltzer-richard-model.md))*
- **Timing of wage contracts.** The partisan cycle needs contracts signed before the result; it runs after the election,
  with opposite signs for the two parties, and needs no fooled voters, so it is not an opportunistic cycle with labels.
  *([4.6](lessons/04-06-political-budget-cycles.md))*
- **Who proposes and the default.** The median's veto guarantees her only the reversion point; with a bad default the
  outcome lands as far from her as the setter's ideal. *([3.5](lessons/03-05-agenda-setters-and-veto-players.md))*
- **Valence is not ideology.** $v$ enters every voter's utility equally and moves no ideal point, which is why copying
  wins every voter. *([2.4](lessons/02-04-valence-and-citizen-candidates.md))*
- **Who knows what.** In career concerns the politician does not know her type (signal jamming); in competence signaling
  she does (separating equilibrium). In pandering it is the **good** type who panders, because of what voters infer.
  *([4.2](lessons/04-02-career-concerns-and-pandering.md), [4.6](lessons/04-06-political-budget-cycles.md))*
- **Rational audiences are not fooled.** Persuasion works on Bayesian voters who know the design and are right on
  average; career-concern effort is fully anticipated and subtracted. The sender gains by choosing which states to pool,
  the incumbent by not falling behind expectations. *([1.4](lessons/01-04-persuasion-and-the-media.md), [4.2](lessons/04-02-career-concerns-and-pandering.md))*
- **Open access vs common property.** Gordon's model is open access; a bounded community with rules is a common-property
  regime, and Ostrom's principle 1 is the move from one to the other. *([3.3](lessons/03-03-the-commons-and-common-pool-resources.md))*
- **What LP compare.** Both of Lizzeri-Persico's systems have exactly two candidates; the only difference is whether the
  payoff is the vote share or the win. Citing LP for multiparty PR drops that. *([2.6](lessons/02-06-electoral-rules-compared-formally.md))*
- **Laffont-Tirole predict no bribes.** Capture is anticipated and deterred by collusion-proof contracts; its trace is
  low-powered incentives, not observed payments. *([4.4](lessons/04-04-regulatory-capture.md))*
- **Tie rules are modelling choices.** In the pandering model, ties to the incumbent add a pooling pandering equilibrium.
  *([4.2](lessons/04-02-career-concerns-and-pandering.md))*

### Vote share versus win probability

- Deterministic valence kills pure equilibrium **only under vote share**; under win probability there is a continuum of
  (degenerate) equilibria, $\lvert q_A-x_m\rvert<\sqrt v$ with $q_B$ arbitrary. *([2.4](lessons/02-04-valence-and-citizen-candidates.md))*
- The two objectives agree in Downs only because platforms determine the winner; with noisy voters they could part,
  though under 2.3's uniform shocks expected share and win probability are both maximized at $q^*$. *([2.1](lessons/02-01-the-downsian-spatial-model.md), [2.3](lessons/02-03-probabilistic-voting.md))*
- WTA vs PR in Lizzeri-Persico **is** win vs share: $\pi_{\text{WTA}}=\tfrac12$ whatever $G$, $\pi_{\text{PR}}=G-1$; PR
  provides the good more often only when $G>\tfrac32$. *([2.6](lessons/02-06-electoral-rules-compared-formally.md))*
- Three vote-share-maximizing candidates on a uniform line have no pure equilibrium; "two candidates" is not harmless.
  *([2.1](lessons/02-01-the-downsian-spatial-model.md))*

### Sincere versus strategic

- **Desertion is from the decisive race, not from small parties.** In 2.5's {L, R} equilibrium the deserted party is the
  centre, the Condorcet winner. *([2.5](lessons/02-05-strategic-voting-and-duvergers-law.md))*
- **Duverger needs a strict gap** between second and third; with a tie for second a third candidate can survive, and
  every pair with support is an equilibrium, so the law does not say which two. *([2.5](lessons/02-05-strategic-voting-and-duvergers-law.md))*
- **Condition on being pivotal.** An uninformed voter should use her posterior given the pivotal event, not her prior
  (a prior of $\tfrac34$ became $\tfrac6{13}$ in 1.3); the curse says "abstain" only without partisans, and "offset
  them" with partisans, even against one's prior. *([1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md))*
- **Two different swing voters.** 1.3's is an uninformed common-value independent; 2.3's is a dense, ideologically
  loose group that candidates pay. *([1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md), [2.3](lessons/02-03-probabilistic-voting.md))*
- **McKelvey's chaos assumes sincere voters** and a free chair; sophisticated voters and competing proposers pull
  outcomes into the uncovered set. *([2.2](lessons/02-02-multidimensional-voting-and-chaos.md))*
- **As-if-pivotal voting** is an assumption of Baron-Ferejohn (it rules out all-reject equilibria). *([5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md))*
- **Citizen-candidate entry threats** assume sincere voting; with strategic voting (Besley-Coate) a centrist draws votes
  only if expected to be viable. *([2.4](lessons/02-04-valence-and-citizen-candidates.md))*

### Static versus repeated

- The static tragedy predicts ruin for a one-shot game or open access; Ostrom's cases are bounded groups in long
  relationships, a different game. *([3.3](lessons/03-03-the-commons-and-common-pool-resources.md))*
- Fine-then-forgive has **exactly** grim trigger's threshold under perfect monitoring; gentler or harsher sanctions
  differ only once mistakes are possible. *([3.3](lessons/03-03-the-commons-and-common-pool-resources.md))*
- A term limit does not unravel discipline in the Barro model: only the last term is lost. *([4.1](lessons/04-01-elections-as-accountability.md))*
- "Career concerns underprovide effort" is a two-period result; with more periods early effort can exceed first best.
  *([4.2](lessons/04-02-career-concerns-and-pandering.md))*
- Baron-Ferejohn's sharp prediction is for **stationary** equilibria; with $n\ge5$ and patient players any division is an
  SPE. Proposer power, unlike Rubinstein's, survives $\delta\to1$. *([5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md))*
- POUM needs a **persistent** tax; reset each period, only today's incomes are on the ballot. *([5.4](lessons/05-04-the-political-economy-of-inequality.md))*

### Hypotheses people drop

- **Exit options.** A concave underlying utility does not guarantee single-peaked induced preferences; an outside option
  can create two peaks. *([1.1](lessons/01-01-from-ballots-to-policy-space.md))*
- **Loss function.** Euclidean vs quadratic is cosmetic only for pairwise votes over sure policies on a line; with
  lotteries, summed welfare or two dimensions it changes the answer. *([1.1](lessons/01-01-from-ballots-to-policy-space.md))*
- **Known $p$.** The exponential collapse of the pivot probability assumes a known $p$; under uncertainty it is about
  $g(\tfrac12)/n$. *([1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md))*
- **Complete information** carries Palfrey-Rosenthal's high turnout; with private costs only near-zero-cost voters vote
  in large electorates. *([1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md))*
- **Uncertainty about the median.** Policy-motivated candidates with a known median converge exactly. *([2.1](lessons/02-01-the-downsian-spatial-model.md))*
- **Odd $n$.** "Two dimensions empty the core" needs an odd electorate; four voters in general position always have a
  core point. *([2.2](lessons/02-02-multidimensional-voting-and-chaos.md))*
- **Interiority.** With thin ideology a candidate can write a group off, and the probabilistic-voting prediction fails.
  *([2.3](lessons/02-03-probabilistic-voting.md))*
- **Coordination device.** The $\binom nk$ provision equilibria need everyone to know who pays; an anonymous large group
  is left with no provision. The vanishing of mixed equilibria needs $k$ to grow with $n$. *([3.1](lessons/03-01-free-riding-and-threshold-games.md))*
- **Rivalry.** Olson's "larger groups provide less" needs fixed shares of a fixed value; without rivalry only the gap to
  $G^*$ grows. *([3.2](lessons/03-02-olsons-logic-of-collective-action.md))*
- **Independence and equal intensity** carry Rae-Taylor; a known member of a standing minority prefers a supermajority.
  *([3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md))*
- **An extreme president.** "Gridlock is $[f,v]$" needs $p\ge v$; a moderate president shrinks it to
  $\max(f',\min(p,v))$ at the top. *([3.5](lessons/03-05-agenda-setters-and-veto-players.md))*
- **Voter indifference** makes the Barro cutoff credible; with types she votes on beliefs. *([4.1](lessons/04-01-elections-as-accountability.md))*
- **Who is organized.** The GH formula takes $L$ and $\alpha_L$ as given; free trade needs $\alpha_L=1$ **and** every
  sector organized. *([4.3](lessons/04-03-lobbying-protection-for-sale.md))*
- **Consumers count.** Capture yields the monopoly price only if $M_p=0$. *([4.4](lessons/04-04-regulatory-capture.md))*
- **Participation in Tullock.** For $r>1$ the FOC finds only a local maximum; check $r\le n/(n-1)$. *([4.5](lessons/04-05-rent-seeking-contests.md))*
- **One trait.** The median earner is decisive in MR by single-crossing in one trait, not by concavity (high earners'
  utility is convex). *([5.3](lessons/05-03-the-meltzer-richard-model.md))*
- **Affine $V$ in $y$** is what collapses turnout, mobility and swing weights into one decisive income. *([5.4](lessons/05-04-the-political-economy-of-inequality.md))*

### Reading a result as more than it says

- Only $y_m/\bar y$ (or $\rho$) enters; making the poorest poorer **lowers** $t^*$. *([1.1](lessons/01-01-from-ballots-to-policy-space.md), [5.3](lessons/05-03-the-meltzer-richard-model.md))*
- Polarized platforms inside the median's possible range are a response to the median, not indifference to it.
  *([2.1](lessons/02-01-the-downsian-spatial-model.md))*
- The issue-by-issue median is an equilibrium only relative to a rule banning joint amendments; McKelvey says what a
  chair **can** reach, not that legislatures wander. *([2.2](lessons/02-02-multidimensional-voting-and-chaos.md))*
- A probabilistic-voting optimum weights groups by responsiveness, not need; it is no normative endorsement. *([2.3](lessons/02-03-probabilistic-voting.md))*
- PR does not always deliver more public goods; swing-district bias comes from weights (safe districts), not selfish
  tastes. *([2.6](lessons/02-06-electoral-rules-compared-formally.md))*
- A threshold good is not a PD with lumps: it has provision equilibria. *([3.1](lessons/03-01-free-riding-and-threshold-games.md))*
- The member who pays is not the one who does best; selective incentives presuppose an organization and can unravel.
  *([3.2](lessons/03-02-olsons-logic-of-collective-action.md))*
- Buchanan-Tullock show majority has no privileged place, not that supermajorities are optimal; a supermajority is not
  neutral (it privileges the status quo). *([3.4](lessons/03-04-constitutions-and-the-choice-of-rules.md))*
- More veto players need not mean more gridlock: one inside the core is absorbed. *([3.5](lessons/03-05-agenda-setters-and-veto-players.md))*
- A higher salary is not a free way to cut rents: $\bar r^*+W$ rises with $W$. *([4.1](lessons/04-01-elections-as-accountability.md))*
- The biggest contributor need not get the most protection: the tariff has no contribution term. *([4.3](lessons/04-03-lobbying-protection-for-sale.md))*
- A price between the firm's ask and consumer advocates' demand is what a support-maximizing regulator sets; "both
  sides unhappy" does not show public interest. *([4.4](lessons/04-04-regulatory-capture.md))*
- Not every dollar of lobbying is waste (bribes and contributions are transfers); full dissipation only with free entry
  at $r=1$, at the boundary, or in two-player mixed equilibria above it. *([4.5](lessons/04-05-rent-seeking-contests.md))*
- A pre-election boost does not prove myopic voters; banning it can hurt voters by removing the signal. *([4.6](lessons/04-06-political-budget-cycles.md))*
- Ex ante Baron-Ferejohn is fair ($v=1/n$); unequal recognition matters less than proportionally. *([5.1](lessons/05-01-legislative-bargaining-baron-ferejohn.md))*
- Minimal winning is not minimum-size; seats are not power; a big formateur with a tiny partner can get less than its
  Gamson share. *([5.2](lessons/05-02-coalition-and-government-formation.md))*
- The $t^*<\tfrac12$ cap is the Laffer peak, not moderation; probabilistic voting with equal densities gives **no**
  redistribution; a turnout gap explains a lower level, not a flatter slope; POUM needs no over-optimism. *([5.3](lessons/05-03-the-meltzer-richard-model.md),
  [5.4](lessons/05-04-the-political-economy-of-inequality.md))*

### Contested evidence reported as settled

- **Media slant:** both demand-side models produce slant with apolitical owners; which force dominates a market is
  empirical. *([1.4](lessons/01-04-persuasion-and-the-media.md))*
- **Turnout:** a free $D$ fits any turnout (critics: no explanation; defenders: a real motive). *([1.2](lessons/01-02-turnout-and-the-paradox-of-voting.md))*
- **Swing voter's curse:** lab subjects abstain and compensate roughly as predicted, but incompletely; mass electorates
  are untested here. *([1.3](lessons/01-03-rational-ignorance-and-the-swing-voters-curse.md))*
- **Ostrom vs Hardin:** whether her evidence refutes Hardin or confirms the repeated-game reading is the evaluative
  question; that the models rest on different hypotheses is not in dispute. *([3.3](lessons/03-03-the-commons-and-common-pool-resources.md))*
- **Electoral rules and spending:** Persson-Tabellini's majoritarian prediction met weak support in their early data.
  *([2.6](lessons/02-06-electoral-rules-compared-formally.md))*
- **Revolving door:** its sign (softer or tougher regulation) is empirical. *([4.4](lessons/04-04-regulatory-capture.md))*
- **Budget cycles:** mixed by sample; stronger in newer democracies. *([4.6](lessons/04-06-political-budget-cycles.md))*
- **Gamson vs formateur premium:** office tracks seats, until seats are replaced by voting weights and a bonus appears;
  contested. *([5.2](lessons/05-02-coalition-and-government-formation.md))*
- **Inequality and redistribution:** the cross-country link is weak and contested; identification is hard because taxes
  move measured pre-tax inequality. *([5.4](lessons/05-04-the-political-economy-of-inequality.md))*

---

## Conventions

- **One card per course**, covering all 25 lessons; every lesson file is cited somewhere on it.
- **Model entries** give the game (players, timing, information, objective), the result with a plain-English line, what
  it turns on and what it does **not** show, and the lessons. Where a lesson only outlines a result (open rule,
  Laffont-Tirole, Laver-Shepsle, Feddersen-Sandroni), the entry says so.
- **The card follows the lessons and the build's source checks over the syllabus** where they differ: valence kills
  pure equilibrium only under vote-share objectives; M+1 under runoff has $M=2$; the gridlock interval's upper end is
  $\max(f',\min(p,v))$; Peltzman's regulator picks an interior price; Hardin and Chamberlin split the rivalry objection;
  Holmström RES 1999 only; Snyder-Ting-Ansolabehere AER 2005; Warwick-Druckman EJPR 2006 (with a BJPS 2001 companion);
  Tullock's symmetric pure equilibrium exists iff $r\le n/(n-1)$, with participation the binding condition.
- **Boss problems** are not reconstructed here; models are stated at the level the lessons teach them.
- **Headings are anchors.** Lessons link `../reference.md#slug`; renaming a `###` heading breaks them.
- **No prose dollar signs**: money is written "1,000 dollars" or "a dollar".
- **Open book.** Quizzes and reviews never ask for a definition or a formula this card holds; they ask you to use it.
