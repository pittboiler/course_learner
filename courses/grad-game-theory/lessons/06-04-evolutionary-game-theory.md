# Grad Game Theory · Lesson 6.4: Evolutionary game theory

> ⏱ ~15 min · Module 6: Cooperative game theory and matching · Builds on: [6.3 Stable matching and market design](06-03-stable-matching-market-design.md) · Unlocks: [6.5 Learning in games and the Nash program](06-05-learning-nash-program.md)

## Why this matters

Every solution concept so far has run on *deliberation*: players compute best responses, hold consistent beliefs, and reason their way to an equilibrium. Evolutionary game theory throws all of that out and asks a subversive question — **what if nobody reasons at all?** Strategies that do well simply get *copied more* — because their carriers reproduce faster (biology), or because successful behavior gets imitated (social learning, market entry, cultural norms). Remarkably, this mindless selection process lands on the same equilibria that hyper-rational players compute — and it does more: it tells you *which* equilibria are dynamically robust, which are fragile, and which the system will never settle on at all. This is the bridge from the static fixed-points of Modules 2–5 to the *dynamics* of learning in [6.5](06-05-learning-nash-program.md), and it is the language economists use for population-level stability — the tâtonnement stories of [grad-micro](../../grad-micro/syllabus.md) are its cousin.

## The idea

Picture one large population, everyone playing the *same* symmetric game against a randomly drawn opponent from that same population. A "strategy" is now a heritable trait — Hawk or Dove, Cooperate or Defect — and its **payoff is its fitness**: how many copies of itself it leaves next generation. No one optimizes. The only rule is bookkeeping: strategies earning above-average fitness grow their population share; below-average shrinks. Equilibrium is no longer "a profile no one wants to deviate from" — it is a **rest point of this growth process**, a mix of strategies whose shares have stopped changing.

Two questions organize the whole subject. First, **statics**: which mixes are immune to invasion? Imagine a population happily playing some strategy $x^*$, and a tiny band of mutants playing something else sneaks in. If the incumbents out-earn the mutants against the new blend, the mutants die out and $x^*$ is *evolutionarily stable*. Second, **dynamics**: if we actually run the growth process, where does the population flow, and does it stop? The beautiful punchline — the folk theorem of evolutionary game theory — is that these two questions have nearly the same answer: evolutionarily stable strategies are exactly the mixes the dynamics converge to. Selection and stability are two faces of one coin.

But — and this is what makes the subject sharp rather than cozy — it does *not* always converge. Rock-Paper-Scissors has a perfectly good Nash equilibrium that no invasion barrier protects and that the dynamics *circle forever* without ever reaching. Equilibrium existence (Module 2) never promised dynamic stability, and evolution collects on that debt.

## The formal version

**Population game.** Fix a symmetric two-player game with pure strategies $\{1, \dots, n\}$ and payoff matrix $A$, where $A_{ij}$ is the payoff to a player using pure strategy $i$ against an opponent using $j$. A **population state** is a vector $x = (x_1, \dots, x_n)$ in the simplex $\Delta = \{x : x_i \ge 0, \sum_i x_i = 1\}$; read $x_i$ as *the fraction of the population playing strategy $i$*. A focal individual meets a random opponent, so it effectively plays against the average strategy $x$. Write the expected payoff of playing mix $y$ against population $x$ as

$$u(y, x) = y^{\mathsf T} A x = \sum_{i,j} y_i\, A_{ij}\, x_j.$$

*In words:* $u(y,x)$ is what a $y$-strategist earns against a randomly drawn opponent when the population state is $x$ — bilinear, exactly the mixed-payoff form of [2.2](02-02-nash-equilibrium-mixed-strategies.md), now read as population frequencies rather than one player's dice.

**Evolutionarily stable strategy (ESS).** A state $x^* \in \Delta$ is an **ESS** if for every $y \ne x^*$, either

$$
\text{(i)}\quad u(x^*, x^*) > u(y, x^*), \qquad\text{or}\qquad
\text{(ii)}\quad u(x^*, x^*) = u(y, x^*)\ \text{ and }\ u(x^*, y) > u(y, y).
$$

*In words:* let a small fraction $\varepsilon$ of mutants play $y$, so the post-entry population is $\varepsilon y + (1-\varepsilon)x^*$. Condition (i) says the incumbent already beats the mutant at the incumbent's own game; if it only *ties* there (condition (ii)'s first half), the tiebreaker is that the incumbent does strictly better *against the mutants themselves*. Either way, for all small enough $\varepsilon$ the incumbent out-earns the mutant against the blend, so $y$'s share shrinks — $x^*$ **resists invasion**. Equivalently: there is a uniform invasion barrier $\bar\varepsilon > 0$ with $u\big(x^*,\,\varepsilon y+(1-\varepsilon)x^*\big) > u\big(y,\,\varepsilon y+(1-\varepsilon)x^*\big)$ for all $y\ne x^*$ and all $\varepsilon \in (0, \bar\varepsilon)$.

**ESS refines symmetric Nash.** Condition (i)-or-(ii) forces $u(y, x^*) \le u(x^*, x^*)$ for all $y$ — which is exactly the statement that $x^*$ is a best response to itself, i.e. $(x^*, x^*)$ is a **symmetric Nash equilibrium**. So every ESS is a symmetric Nash equilibrium, but the converse fails (that's condition (ii)'s strict inequality doing real work). **ESS $\subsetneq$ symmetric Nash** — it is a strict-stability refinement.

**Replicator dynamics.** Let the population state evolve in continuous time by letting each strategy grow at its fitness relative to the population average:

$$\dot{x}_i = x_i\big[\, (Ax)_i - x^{\mathsf T} A x \,\big], \qquad i = 1, \dots, n.$$

*In words:* $(Ax)_i$ is strategy $i$'s payoff against the current population, $x^{\mathsf T}A x = \sum_i x_i (Ax)_i$ is the population's average payoff, and their difference is $i$'s *relative fitness*. A strategy earning above average ($\,(Ax)_i > x^{\mathsf T}Ax$) has $\dot x_i > 0$ and grows; below average, it shrinks; the $x_i$ prefactor just means an absent strategy ($x_i = 0$) stays absent. The simplex $\Delta$ is invariant (the shares always sum to $1$), and this is an autonomous ODE system — the phase-line and stability tools of [ode-refresher](../../ode-refresher/syllabus.md) apply verbatim.

**The folk theorem of evolutionary game theory.** Linking the two:

- Every symmetric Nash equilibrium is a **rest point** ($\dot x = 0$) of the replicator dynamics. (Every pure vertex is a rest point too, Nash or not.)
- Every **ESS is asymptotically stable** under the replicator dynamics — the population flows to it and stays.
- Every **Lyapunov-stable rest point is a symmetric Nash equilibrium.**

*In words:* rest points contain the Nash equilibria; the *attracting* rest points are (essentially) the ESSs. Static evolutionary stability and dynamic convergence are two descriptions of the same thing.

## Picture

![Replicator phase line on the Hawk fraction p in [0,1]: the growth rate dp/dt is positive for p below 1/3 and negative above, so flow arrows from both sides converge on the interior ESS at p*=1/3; the endpoints p=0 and p=1 are unstable rest points.](assets/06-04-fig1.svg)

The state is a single number $p \in [0,1]$, the fraction of Hawks. The blue curve is the growth rate $\dot p$: **positive when Hawks are rare** (they invade a Dove-heavy world) and **negative when Hawks are common** (they destroy each other, so Doves invade). It crosses zero at three places — $p = 0$, $p = 1$, and the interior $p^* = 1/3$ — the three rest points. The endpoints are *unstable* (open circles: a tiny push sends the flow away), while $p^*$ is *asymptotically stable* (filled circle: the flow converges from both sides). One glance tells you the whole story that the algebra below confirms: whatever fraction of Hawks you start with, the population self-tunes to $p^* = V/C$.

## Worked examples

**Example 1 (Hawk-Dove — the mixed ESS as a stable polymorphism).** Two animals contest a resource of value $V$. Escalating (**Hawk**) against another Hawk means a fight, splitting $V$ but paying an expected injury cost $C$; against a **Dove** it takes $V$ uncontested. Two Doves share peacefully. Payoffs to the *row* player:

$$
\begin{array}{c|cc}
 & \text{Hawk} & \text{Dove}\\\hline
\text{Hawk} & \tfrac{V-C}{2} & V\\
\text{Dove} & 0 & \tfrac{V}{2}
\end{array}
\qquad\text{so}\qquad
A = \begin{pmatrix} \tfrac{V-C}{2} & V \\[2pt] 0 & \tfrac{V}{2}\end{pmatrix}.
$$

Assume $V < C$ (fighting is dangerous), and let $p$ be the population fraction of Hawks. A focal individual's expected payoffs against the population are

$$f_H(p) = p\cdot\tfrac{V-C}{2} + (1-p)\,V, \qquad f_D(p) = p\cdot 0 + (1-p)\,\tfrac{V}{2}.$$

*Find the interior ESS.* At an interior rest point the two strategies must tie (otherwise the richer one grows). Set $f_H(p) = f_D(p)$:

$$p\cdot\tfrac{V-C}{2} + (1-p)V = (1-p)\tfrac{V}{2}.$$

Multiply by $2$ and expand: $p(V-C) + 2V - 2pV = V - pV$, i.e. $-pC + V = 0$, so

$$\boxed{\,p^* = \frac{V}{C}\,}.$$

The whole payoff structure collapses to this one ratio: the equilibrium fraction of Hawks is the value-to-cost ratio.

*Verify it is an ESS.* Take the strategy interpretation $x^* = (p^*, 1-p^*)$. Compute $Ax^*$ with the numbers $V=2$, $C=6$ (so $p^* = 1/3$, and $A = \left(\begin{smallmatrix}-2 & 2\\ 0 & 1\end{smallmatrix}\right)$):

$$A x^* = \begin{pmatrix}-2 & 2 \\ 0 & 1\end{pmatrix}\begin{pmatrix} 1/3 \\ 2/3\end{pmatrix} = \begin{pmatrix} -2/3 + 4/3 \\ 0 + 2/3\end{pmatrix} = \begin{pmatrix} 2/3 \\ 2/3\end{pmatrix}.$$

Both pure strategies earn $2/3$ against $x^*$, so $u(y, x^*) = 2/3$ for *every* $y$ — condition (i) is an equality, and we fall to the tiebreaker (ii): need $u(x^*, y) > u(y, y)$ for all $y \ne x^*$. Because $u(z, x^*)$ is constant in $z$, we have $(x^* - y)^{\mathsf T} A x^* = 0$, and therefore

$$u(x^*, y) - u(y, y) = (x^* - y)^{\mathsf T} A y = -\,(x^* - y)^{\mathsf T} A (x^* - y).$$

Write $y = (q, 1-q)$ and $d = x^* - y = (1/3 - q)(1, -1)$. Then $A(1,-1)^{\mathsf T} = (-4, -1)^{\mathsf T}$ and $(1,-1)\cdot(-4,-1) = -3$, so $d^{\mathsf T} A d = -3\,(1/3 - q)^2$. Hence

$$u(x^*, y) - u(y, y) = 3\,\big(\tfrac13 - q\big)^2 > 0 \quad\text{for all } q \ne \tfrac13.$$

Condition (ii) holds — **$x^*$ is an ESS.**

*Show the replicator dynamic converges to it.* For two strategies the dynamics reduce to $\dot p = p(1-p)\,[\,f_H(p) - f_D(p)\,]$. With $V=2, C=6$, $f_H - f_D = (V - Cp)/2 = 1 - 3p$, so

$$\dot p = p(1-p)(1 - 3p).$$

Read the sign: for $0 < p < 1/3$, $\dot p > 0$ (Hawks grow); for $1/3 < p < 1$, $\dot p < 0$ (Hawks shrink). The flow points toward $p^* = 1/3$ from both sides — asymptotically stable, exactly as the folk theorem promised for an ESS, and exactly the phase line drawn above. The endpoints $p=0,1$ are rest points but unstable.

**Example 2 (Rock-Paper-Scissors — a Nash equilibrium that is *not* an ESS, and dynamics that never settle).** Symmetric, win $+1$ / lose $-1$ / tie $0$. Rows and columns are $R, P, S$:

$$
A = \begin{pmatrix} 0 & -1 & 1 \\ 1 & 0 & -1 \\ -1 & 1 & 0 \end{pmatrix}.
$$

*The unique symmetric Nash is the center.* By symmetry $x^* = (\tfrac13, \tfrac13, \tfrac13)$; check it is Nash. Row sums of $A$ are all $0$, so $A x^* = (0,0,0)^{\mathsf T}$: every strategy earns $0$ against $x^*$, so no deviation beats it — $(x^*, x^*)$ is a symmetric Nash equilibrium.

*It is not an ESS.* This game is zero-sum ($A^{\mathsf T} = -A$), so $u(y,y) = y^{\mathsf T} A y = 0$ for *every* $y$ (an antisymmetric quadratic form vanishes). And $u(x^*, y) = (x^*)^{\mathsf T} A y = 0$ as well, because $(x^*)^{\mathsf T} A = (0,0,0)$ (column sums are $0$). So for any mutant $y \ne x^*$,

$$u(x^*, y) - u(y,y) = 0 - 0 = 0,\quad\text{not } > 0.$$

Condition (i) is an equality and condition (ii)'s tiebreaker *fails* (it needs a strict inequality). **No ESS exists.** The mutants are neither pushed out nor pulled in — the invasion barrier is zero.

*The dynamics cycle forever.* On the zero-sum game $x^{\mathsf T}Ax = 0$, so $\dot x_i = x_i (Ax)_i$. Track the product $W(x) = x_R x_P x_S$:

$$\frac{d}{dt}\ln W = \sum_i \frac{\dot x_i}{x_i} = \sum_i (Ax)_i = (-x_P + x_S) + (x_R - x_S) + (-x_R + x_P) = 0.$$

So $W$ is **conserved**: every interior trajectory is a closed level curve $x_R x_P x_S = \text{const}$ orbiting the center. The population perpetually chases $R \to P \to S \to R$ — Rock rises, invites Paper, which invites Scissors, which invites Rock — never converging, never leaving. A Nash equilibrium that the dynamics circle but never reach: existence (Module 2) guaranteed the fixed point, not that selection would find it.

## Watch out

- **Every ESS is a symmetric Nash equilibrium, but not conversely.** ESS *strengthens* Nash with a strict robustness clause (condition (ii)). RPS's center is Nash yet not an ESS; a weak/non-strict symmetric Nash generally isn't one. Never infer "ESS" from "Nash" — you must check the invasion inequality.
- **Replicator dynamics need not converge.** RPS orbits forever; other games have limit cycles or chaos. Nash equilibrium is an *existence* theorem, not a *stability* theorem — a rest point can be a saddle or a center that no trajectory approaches. "The equilibrium exists" and "the population reaches it" are different claims.
- **ESS is robustness to a *small* invasion only.** The definition quantifies over $\varepsilon \to 0$ mutant fractions. An ESS can still be overrun by a large invasion or a sequence of different mutants; it is a *local* stability notion, matching the local nature of asymptotic stability in [ode-refresher](../../ode-refresher/syllabus.md).
- **A mixed ESS is a stable *polymorphism*, not necessarily randomizing individuals.** $p^* = 1/3$ Hawks can mean a population where one-third of individuals are *pure* Hawks and two-thirds *pure* Doves — nobody rolls dice. The population *frequencies* match the mixed-strategy probabilities of [2.2](02-02-nash-equilibrium-mixed-strategies.md), but the biological content is a mixture of types, not a mixed act.
- **The model is a modeling choice, not a law.** Replicator dynamics assume an effectively infinite, well-mixed population with payoff-*proportional* reproduction and no mutation. Change the imitation rule (best-response dynamics, logit) and the trajectories — even the rest points' stability — can change. The ESS concept is more robust than any single dynamic, which is why it's stated invasion-first.

## One-liner

> An ESS is a symmetric Nash equilibrium fortified against small mutant invasions; the replicator dynamics flow toward ESSs and circle everything else — selection, not deliberation, doing the work.

## Problems

**P1 (🟢)** In the Hawk-Dove game of Example 1 with general $V < C$, suppose fights become *more* dangerous — $C$ rises. (a) What happens to the equilibrium Hawk fraction $p^* = V/C$? (b) Now take $V > C$ (the resource is worth more than the injury risk). Show that $\dot p = p(1-p)\,(V - Cp)/2$ then makes $p = 1$ the stable rest point, and interpret: what does the population evolve to?

**P2 (🟡)** Stag Hunt as an evolutionary game — *two* ESSs and their basins. Payoffs to row (both players choose Stag $S$ or Hare $H$):

$$
\begin{array}{c|cc}
 & S & H\\\hline
S & 3,\,3 & 0,\,2\\
H & 2,\,0 & 2,\,2
\end{array}
$$

Let $p$ be the fraction playing $S$. (a) Write $\dot p = p(1-p)\,[f_S(p) - f_H(p)]$ and find all rest points in $[0,1]$. (b) Determine the stability of each (sign of $\dot p$ on either side). (c) Which pure states are ESSs, and what is the *basin of attraction* of each — i.e. for which starting fractions $p_0$ does the population end up all-Stag versus all-Hare?

**P3 (🔴, optional)** Prove the general claim behind Example 1's verification: for a *fully mixed* $x^*$ (all $x_i^* > 0$) that is a symmetric Nash equilibrium, $x^*$ is an ESS **if and only if** $(x^* - y)^{\mathsf T} A\,(x^* - y) < 0$ for all $y \ne x^*$ in $\Delta$ (i.e. $A$ is negative definite with respect to differences on the simplex). Then use this test to re-confirm RPS's center is *not* an ESS.

<details>
<summary>Solutions</summary>

**P1** (a) $p^* = V/C$ is *decreasing* in $C$: as fighting gets more dangerous, the stable population holds *fewer* Hawks. Deadlier conflict selects against aggression — the polymorphism shifts toward Doves (and $p^* \to 0$ as $C \to \infty$). (b) With $V > C$, $\dot p = p(1-p)(V - Cp)/2$. The interior root of $V - Cp = 0$ is $p = V/C > 1$, which lies *outside* $[0,1]$ — so there is no interior rest point in the population. On all of $(0,1)$ we have $p < 1 < V/C$, hence $V - Cp > 0$ and $\dot p > 0$: the flow pushes $p$ up to the boundary. The only rest points in $[0,1]$ are $p=0$ (unstable: $\dot p > 0$ just above it) and $p=1$ (stable: $\dot p > 0$ just below, and it's absorbing). The population evolves to **all Hawks** — when the prize beats the injury cost, Hawk is a strictly dominant strategy and its pure state is the ESS. (Check dominance: Hawk's payoffs $\tfrac{V-C}{2} > 0$ and $V > \tfrac V2$ both exceed Dove's, since $V>C>0$.)

**P2** Fitnesses against a population fraction $p$ of Stag:

$$f_S(p) = 3p + 0(1-p) = 3p, \qquad f_H(p) = 2p + 2(1-p) = 2.$$

(a) $f_S - f_H = 3p - 2$, so $\dot p = p(1-p)(3p - 2)$. Rest points where $\dot p = 0$: $p = 0$, $p = 1$, and $3p - 2 = 0 \Rightarrow p = 2/3$. **Three rest points: $0,\ \tfrac23,\ 1$.**

(b) Sign of $\dot p$ on $(0,1)$ is the sign of $3p - 2$: negative for $p < 2/3$, positive for $p > 2/3$.
- Near $p = 0$: $\dot p < 0$, flow pushes down to $0$ → $p=0$ **stable**.
- Near $p = 1$: $\dot p > 0$, flow pushes up to $1$ → $p=1$ **stable**.
- At $p = 2/3$: $\dot p < 0$ just below and $\dot p > 0$ just above → flow moves *away* on both sides → **unstable** (a repeller/threshold).

(c) The two *pure* states are the ESSs: $p = 1$ (all Stag, the payoff-dominant equilibrium) and $p = 0$ (all Hare, the risk-dominant one). The interior mixed equilibrium $p = 2/3$ is the unstable threshold and is **not** an ESS. Basins: any $p_0 < 2/3$ flows down to all-Hare, any $p_0 > 2/3$ flows up to all-Stag. The **basin of all-Stag is $(2/3, 1]$**, the **basin of all-Hare is $[0, 2/3)$**, and $p_0 = 2/3$ is the knife-edge. Interpretation: cooperation (Stag) takes over only if the population already starts with *more than* two-thirds cooperators — history and initial conditions select the outcome, which is exactly what a single fixed-point solution concept can't tell you.

**P3** Since $x^*$ is a symmetric Nash equilibrium and fully mixed, every pure strategy earns the same against $x^*$ (any played-with-positive-probability strategy must tie for best, and all are played), so $u(z, x^*) = u(x^*, x^*)$ is *constant in $z$*. Thus condition (i) of the ESS definition holds with *equality* for every $y$, and $x^*$ is an ESS iff condition (ii) holds for all $y \ne x^*$: $u(x^*, y) > u(y, y)$.

Now, because $(x^* - y)^{\mathsf T} A x^* = 0$ (constancy of $u(\cdot, x^*)$),

$$u(x^*, y) - u(y, y) = (x^*)^{\mathsf T} A y - y^{\mathsf T} A y = (x^* - y)^{\mathsf T} A y = (x^* - y)^{\mathsf T} A y - (x^* - y)^{\mathsf T} A x^* = -(x^* - y)^{\mathsf T} A (x^* - y).$$

Hence $u(x^*, y) > u(y,y)$ for all $y \ne x^*$ **iff** $(x^* - y)^{\mathsf T} A (x^* - y) < 0$ for all $y \ne x^*$ — the stated negative-definiteness-on-differences condition. (Example 1 computed exactly this quantity and got $-3(\tfrac13 - q)^2 < 0$, confirming the ESS.)

*Apply to RPS.* For the RPS matrix $A$ (antisymmetric), any quadratic form $d^{\mathsf T} A d = 0$ identically, since $d^{\mathsf T} A d = (d^{\mathsf T} A d)^{\mathsf T} = d^{\mathsf T} A^{\mathsf T} d = -d^{\mathsf T} A d$. So with $d = x^* - y$ we get $(x^* - y)^{\mathsf T} A (x^* - y) = 0$, which is *not* $< 0$. The test fails for every $y$ → the center is **not an ESS**, matching Example 2. (Geometrically: an antisymmetric $A$ has no strict-descent direction — it rotates rather than contracts, which is precisely why the replicator orbits are closed.)

</details>

## Flashback

**From Lesson 2.2 (Nash equilibrium and mixed strategies):** Find the mixed Nash equilibrium of the (asymmetric) coordination game below, and both players' equilibrium payoffs. Recall the cross-wiring rule: *your* mix is pinned by the *opponent's* indifference.

$$
\begin{array}{c|cc}
 & L & R\\\hline
T & 4,\,1 & 0,\,0\\
B & 0,\,0 & 1,\,4
\end{array}
$$

<details>
<summary>Solution</summary>

Let $p = \sigma_1(T)$ and $q = \sigma_2(L)$. Player 1's mixing probability $p$ is set by making *player 2* indifferent; player 2's $q$ by making *player 1* indifferent.

Player 1 indifferent, using player 2's mix $q$:
$$u_1(T, q) = 4q + 0(1-q) = 4q, \qquad u_1(B, q) = 0\cdot q + 1(1-q) = 1 - q.$$
$4q = 1 - q \Rightarrow 5q = 1 \Rightarrow q^* = \tfrac15.$

Player 2 indifferent, using player 1's mix $p$:
$$u_2(L, p) = 1\cdot p + 0(1-p) = p, \qquad u_2(R, p) = 0\cdot p + 4(1-p) = 4 - 4p.$$
$p = 4 - 4p \Rightarrow 5p = 4 \Rightarrow p^* = \tfrac45.$

Mixed equilibrium: $\sigma_1^* = (\tfrac45\,T, \tfrac15\,B)$, $\sigma_2^* = (\tfrac15\,L, \tfrac45\,R)$. Payoffs: player 1 (indifferent) earns $u_1(T,q^*) = 4\cdot\tfrac15 = \tfrac45$; player 2 earns $u_2(L,p^*) = p^* = \tfrac45$. Both get $\tfrac45$ — again below either pure coordination payoff, the familiar cost of miscoordination. Note the cross-wiring: $q^* = \tfrac15$ fell out of *player 1's* equation but is *player 2's* probability. (If this game were played symmetrically in a population, that $\tfrac45$–$\tfrac15$ mix is the candidate a replicator analysis would test for evolutionary stability — the bridge this lesson builds.)

</details>

## Connections

- **Backward (2.2):** an ESS *is* a symmetric [Nash equilibrium](02-02-nash-equilibrium-mixed-strategies.md) plus a strict robustness clause — the population-frequency reading of a mixed strategy, floated in 2.2's watch-out, becomes the whole subject here. The indifference principle reappears as "at an interior rest point all played strategies tie in fitness."
- **Backward (1.5):** payoffs are read as **fitness** — the vNM [expected-utility numbers](01-05-expected-utility-vnm-axioms.md) of 1.5 now measure reproductive success, and taking expectations against a random opponent is the same linearity that justified mixed payoffs.
- **Forward (6.5):** replicator dynamics are one **learning dynamic** among many; [6.5](06-05-learning-nash-program.md) asks in general when adaptive/learning processes converge to Nash equilibria — the Nash program — with RPS's eternal cycling as the cautionary tale that they need not.
- **Sideways (grad-micro):** the replicator flow is the population-dynamics analogue of **tâtonnement** — the stability-of-equilibrium question for a market, where excess-demand pushes prices the way excess-fitness pushes strategy shares. Both live or die by the same dynamical-systems analysis: [grad-micro](../../grad-micro/syllabus.md).
- **Sideways (ode-refresher):** the entire dynamic side of this lesson — rest points, phase lines, asymptotic stability, conserved quantities, closed orbits — is the autonomous-ODE toolkit of [ode-refresher](../../ode-refresher/syllabus.md) applied on the simplex. RPS's conserved $x_R x_P x_S$ is a first integral in exactly that sense.
