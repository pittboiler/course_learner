# Polymer & Materials Chemistry · Lesson 1.3: The Carothers equation

> ⏱ ~15 min · Module 1: Polymerization Mechanisms · Builds on: [1.2 Step-growth polymerization & kinetics](01-02-step-growth-polymerization.md) · Unlocks: [1.4 Radical polymerization](01-04-radical-polymerization.md) (contrast), Module 2

## Why this matters

In step-growth you learned the uncomfortable truth: high molecular weight arrives only at the very end, when conversion $p$ is deep in the 0.99s. The Carothers equation is the accountant that turns that qualitative worry into a number — it tells you *exactly* how long your chains are for a given conversion. And it exposes a second, sharper lever: get your two monomers even slightly off 1:1, or sprinkle in a monofunctional impurity, and you *cap* the molecular weight no matter how hard you push the reaction. This one relation is why a chemist weighs monomers to four decimal places, and why trace impurities can ruin a batch of nylon.

## The idea

Picture step-growth as a room full of people, each with two hands (functional groups), trying to link into the longest possible human chains. Every handshake permanently joins two people. The **degree of polymerization** — how long the average chain is — is just *how many original people ended up in each chain*, which equals (people you started with) ÷ (separate chains you have left). Every handshake removes one separate chain. So the more handshakes, the fewer, longer chains.

That immediately explains two things. First, to get long chains almost *everyone* has to have shaken hands: 99% of hands joined leaves only about one chain per hundred people, so an average chain is ~100 long. Second — and this is the twist — suppose some people have only *one* hand (monofunctional), or one group outnumbers the other. Those extra unmatched hands become permanent chain *ends*. Once a chain has an end that can never react, it stops growing. A small imbalance sprinkles in a fixed number of dead ends, and that fixed number sets a hard ceiling on chain length that even infinite reaction time can't beat.

## The formal version

Let $X_n$ be the **number-average degree of polymerization** — the average number of monomer structural units per chain — and $p$ the **conversion**, the fraction of one type of functional group that has reacted (from [1.2](01-02-step-growth-polymerization.md)).

**Perfect stoichiometry.** With exactly equal numbers of the two reacting groups (or a single A–B monomer), start with $N_0$ molecules; after conversion $p$ the number of molecules left is $N_0(1-p)$, so

$$X_n = \frac{N_0}{N_0(1-p)} = \frac{1}{1-p}.$$

*In words: the average chain length is one over the fraction of unreacted groups — 99% conversion buys you only $X_n = 100$.* The number-average molar mass follows as $M_n = X_n\,M_0$, with $M_0$ the mean molar mass of a structural unit.

**Stoichiometric imbalance.** Now let the two groups differ. Define the **stoichiometric ratio**

$$r = \frac{N_A}{N_B} \le 1,$$

where $N_A$ counts the *deficient* functional group and $N_B$ the *excess* one (so $r \le 1$ by construction), and let $p$ be the conversion of the **limiting** group $A$. Carothers' general result is

$$\boxed{\,X_n = \frac{1+r}{1+r-2rp}\,}$$

*In words: the excess monomer $B$ plants unreactive chain ends, and every one of them drags the average length down.* Two limits make it concrete:

- $r = 1$ recovers $X_n = \dfrac{1+1}{2-2p} = \dfrac{1}{1-p}$ — the balanced case above.
- $p = 1$ (drive to completion) gives the **ceiling**

$$X_n = \frac{1+r}{1-r}.$$

*In words: even with every limiting group consumed, the imbalance alone fixes the maximum chain length.* At $r = 0.99$ that ceiling is $\tfrac{1.99}{0.01} = 199$; at $r = 0.95$ it collapses to $\tfrac{1.95}{0.05} = 39$. A 1% error costs you a factor of ~2 in $X_n$; a 5% error costs a factor of ~5.

**Monofunctional chain stoppers.** A monofunctional monomer $B'$ (say a monofunctional acid added to a diol/diacid batch) caps a chain permanently at one end. It behaves like excess $B$, but each such group counts *twice* — it removes a growth site without adding a matching one — so with $N_{B'}$ monofunctional groups the effective ratio is

$$r = \frac{N_A}{N_B + 2N_{B'}}.$$

*Mini-case.* Take a perfectly balanced batch, $N_A = N_B = 2.00$ mol of groups, and stir in $N_{B'} = 0.020$ mol of a monofunctional acid. Then $r = \dfrac{2.00}{2.00 + 2(0.020)} = \dfrac{2.00}{2.04} = 0.980$, so at full conversion $X_n = \dfrac{1.980}{0.020} = 99$. A 1 mol% dose of a one-armed monomer chops the attainable chain length to ~100 — this is exactly how MW is *deliberately* controlled in industry.

**Beyond two arms: functionality and gelation.** When some monomers carry more than two groups, chains can branch and eventually cross-link into one giant network — **gelation**. Define the **average functionality**

$$f_{\text{avg}} = \frac{\text{total functional groups}}{\text{total molecules}}.$$

Recounting the handshakes ($\tfrac12 p N_0 f_{\text{avg}}$ bonds among $N_0$ molecules) gives the generalized Carothers equation and its divergence point:

$$X_n = \frac{2}{2 - p\,f_{\text{avg}}}, \qquad X_n \to \infty \ \text{at}\ \ p_c = \frac{2}{f_{\text{avg}}}.$$

*In words: chains blow up to an infinite network at the gel point $p_c = 2/f_{\text{avg}}$.* For strictly linear systems $f_{\text{avg}} = 2$ and $p_c = 1$ (you never gel — you just need full conversion). Add trifunctional monomer so $f_{\text{avg}} = 2.5$ and $p_c = 0.80$: the pot solidifies at 80% conversion. This is the dividing line between a thermoplastic and a thermoset ([1.1](01-01-what-is-a-polymer-classification.md)).

## Picture

![Xn versus conversion p for r = 1, 0.99, 0.95; the balanced curve diverges at p = 1 while the imbalanced curves plateau at finite ceilings](assets/01-03-fig1.svg)

## Worked examples

**Example 1 (balanced — read off $X_n$).** A linear polyester from a diol and a diacid is charged in exact 1:1 stoichiometry ($r = 1$) and driven to $p = 0.995$. Then

$$X_n = \frac{1}{1-p} = \frac{1}{1 - 0.995} = \frac{1}{0.005} = 200.$$

Check it against the general form: $X_n = \dfrac{1+1}{1+1-2(1)(0.995)} = \dfrac{2}{2 - 1.99} = \dfrac{2}{0.01} = 200$ ✓. With $M_0 = 100\ \mathrm{g/mol}$, $M_n = 200 \times 100 = 20{,}000\ \mathrm{g/mol}$. Reaching even this modest chain length demanded 99.5% conversion — the late-blooming behavior from [1.2](01-02-step-growth-polymerization.md), now quantified.

**Example 2 (imbalance caps the chains).** Repeat with a 1 mol% excess of diol and push all the way to completion, $p = 1$. The diacid groups are now the deficient set, so $r = 0.99$:

$$X_n = \frac{1+r}{1-r} = \frac{1.99}{0.01} = 199.$$

Barely different from Example 1's 200 — but note *why*. In Example 1 the number 200 came from stopping at $p = 0.995$; here $X_n = 199$ is a hard **ceiling** reached at *full* conversion and impossible to exceed. The reason: at $p = 1$ every diacid group has found a partner, but the leftover 1% of diol groups sit on chain ends with nothing to react with. Each chain is now capped by excess-diol ends, and the fixed supply of those ends fixes the average length. "Full conversion" no longer means "infinite chains" — the stoichiometry, not the kinetics, is in charge. (Push to $r = 0.98$ and the ceiling halves to $X_n = 99$.)

## Watch out

- **You might think driving conversion to 100% always gives enormous molecular weight.** Only if $r = 1$ *and* there are no chain stoppers. Any imbalance or monofunctional impurity imposes the ceiling $X_n = (1+r)/(1-r)$ — reachable at $p = 1$ and unbeatable. High MW needs *both* high $p$ and near-perfect stoichiometry.
- **You might mix up which quantity $r$ and $p$ refer to.** $r \le 1$ is always deficient-over-excess *groups* (a stoichiometry ratio, set before you start); $p$ is the *conversion* of the limiting group (it climbs during the reaction). Feeding $r > 1$ into the formula gives nonsense.
- **You might trust $p_c = 2/f_{\text{avg}}$ as the exact gel point.** Carothers' $p_c$ tracks when the *number-average* diverges and consistently *overestimates* the real gel point. Actual gelation — when the largest molecule spans the whole pot — is governed by the *weight-average* and comes earlier; the Flory–Stockmayer statistical theory gives the sharper value.

## One-liner

> $X_n = 1/(1-p)$ says long chains come only at the finish line, and $X_n = (1+r)/(1-r)$ says a whisker of stoichiometric imbalance builds a wall you can't climb past.

## Problems

**P1 (🟢)** A linear polyamide is made from a diamine and a diacid in exact 1:1 stoichiometry. (a) Find $X_n$ at $p = 0.990$. (b) What conversion is required to reach $X_n = 400$?

**P2 (🟡)** You want to cap a linear polyester at $X_n = 100$ at full conversion ($p = 1$) by charging the diol in slight excess. (a) What stoichiometric ratio $r$ achieves this? (b) Express that as a mol% excess of diol. (c) If instead you achieved the same cap with a monofunctional alcohol added to a *balanced* batch of $2.00$ mol each of diol and diacid groups, how many moles of the monofunctional alcohol are needed?

**P3 (🔴 — bridges to networks)** Glycerol (trifunctional, $f=3$) is co-reacted with a diacid ($f=2$) with the two functional-group counts held stoichiometrically balanced, giving $f_{\text{avg}} = 2.4$. (a) At what conversion does the Carothers equation predict gelation? (b) In the lab the mixture gels *before* this $p$ — give the one-sentence reason. (c) In one phrase, what class of material ([1.1](01-01-what-is-a-polymer-classification.md)) has this reaction just produced?

<details>
<summary>Solutions</summary>

**P1.** (a) Balanced, so $X_n = \dfrac{1}{1-p} = \dfrac{1}{1-0.990} = \dfrac{1}{0.010} = 100$.

(b) Solve $\dfrac{1}{1-p} = 400 \Rightarrow 1-p = \dfrac{1}{400} = 0.0025 \Rightarrow p = 0.9975$.

*Check.* Quadrupling the target chain length ($100 \to 400$) demands pushing conversion from 99.0% to 99.75% — a tiny numerical move for a big MW payoff, the hallmark of step-growth's steep endgame. ✓

**P2.** (a) At $p = 1$, $X_n = \dfrac{1+r}{1-r} = 100$. Solve: $1 + r = 100(1 - r) \Rightarrow 101\,r = 99 \Rightarrow r = \dfrac{99}{101} = 0.9802$.

(b) $r = N_A/N_B$ with the diol ($B$) in excess, so the diol-to-diacid group ratio is $N_B/N_A = 1/r = 1/0.9802 = 1.0202$ — i.e. about a **2.02 mol% excess** of diol groups.

(c) A monofunctional alcohol counts double: $r = \dfrac{N_A}{N_B + 2N_{B'}} = \dfrac{2.00}{2.00 + 2N_{B'}} = 0.9802$. Then $2.00 + 2N_{B'} = \dfrac{2.00}{0.9802} = 2.0404 \Rightarrow 2N_{B'} = 0.0404 \Rightarrow N_{B'} = 0.0202\ \mathrm{mol}$.

*Check.* Both routes land on the same $r = 0.980$ and the same ceiling $X_n = 100$; note the monofunctional dose (0.0202 mol) is *half* the group excess (0.0404 mol) needed the other way, because each one-armed molecule does double duty as a chain stopper. ✓

**P3.** (a) $p_c = \dfrac{2}{f_{\text{avg}}} = \dfrac{2}{2.4} = 0.833$ — Carothers predicts the network diverges at about 83% conversion.

(b) The real gel point is set by the *weight-average* (the largest molecule spanning the pot), which diverges before the number-average does; the Flory–Stockmayer statistical treatment gives the earlier, correct value, so Carothers' $p_c$ is an overestimate.

(c) A cross-linked **thermoset** (an infinite network) — the branch-driven counterpart to the linear thermoplastics of Examples 1–2, and the structural cousin of the crosslinked rubbers you'll meet in [3.4](03-04-rubber-elasticity-entropic-spring.md).

</details>

## Flashback

**From Lesson 1.2 (step-growth kinetics).** An external-acid-catalyzed step-growth polymerization follows the integrated second-order rate law $\dfrac{1}{1-p} = 1 + kC_0\,t$, where $C_0$ is the initial functional-group concentration. With $kC_0 = 0.50\ \mathrm{h^{-1}}$: (a) find the conversion $p$ and $X_n$ after 100 h; (b) how long must the reaction run to reach $X_n = 100$?

<details>
<summary>Solution</summary>

(a) At $t = 100$ h: $\dfrac{1}{1-p} = 1 + 0.50 \times 100 = 51$. Since $X_n = \dfrac{1}{1-p}$ for the balanced case, $X_n = 51$, and $p = 1 - \dfrac{1}{51} = 0.9804$.

(b) $X_n = 100 \Rightarrow \dfrac{1}{1-p} = 100 = 1 + 0.50\,t \Rightarrow 0.50\,t = 99 \Rightarrow t = 198$ h.

*Check.* $X_n$ climbs *linearly* in time here ($X_n = 1 + kC_0 t$), so roughly *doubling* the chain length ($51 \to 100$) takes roughly *double* the time ($100 \to 198$ h). That sluggish, late-arriving high MW is the same phenomenon the Carothers equation captures through $p$ — kinetics and stoichiometry are two windows on one slow endgame. ✓

</details>

## Connections

- **Backward:** this quantifies [1.2](01-02-step-growth-polymerization.md)'s "high MW comes late" — the conversion $p$ defined there is the sole knob in $X_n = 1/(1-p)$, and the kinetics fix how $p$ (hence $X_n$) grows in time.
- **Forward:** [1.4 Radical polymerization](01-04-radical-polymerization.md) gives the sharp contrast — in chain-growth, high-MW chains appear from the very first instant, so $X_n$ is *high at low conversion*, the mirror image of the curve above. And the $r$-set distribution of chain lengths here becomes the "most-probable distribution" that anchors [2.1](02-01-molecular-weight-averages-dispersity.md).
- **Sideways (network formation / percolation):** the gel point $p_c = 2/f_{\text{avg}}$ is a connectivity threshold — the same idea as percolation in statistical physics, where a spanning cluster appears once enough bonds form. The Flory–Stockmayer correction is that field's more careful bookkeeping applied to branching polymers.
