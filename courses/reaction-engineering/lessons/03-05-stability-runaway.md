# Chemical Reaction Engineering · Lesson 3.5: Stability & runaway

> ⏱ ~15 min · Module 3: Energy Balance & Nonisothermal Design · Builds on: [3.4 Multiple steady states in a CSTR](03-04-multiple-steady-states-cstr.md), [3.3 Reactors with heat exchange](03-03-reactors-with-heat-exchange.md), [1.2 Arrhenius temperature dependence](01-02-arrhenius-temperature-dependence.md) · Unlocks: process safety — sizing coolers, relief systems, and safe operating windows so a reactor can't tip into thermal runaway

## Why this matters

In 3.4 you found that an exothermic CSTR can have **three** steady states — three temperatures where heat generated equals heat removed. That raises the question every plant engineer actually loses sleep over: if I nudge the reactor, does it settle back, or does it take off? One of those three states is a trap. Sit on it and the smallest disturbance — a flicker in feed temperature, a film of scale on the cooling coil — sends the temperature climbing on its own, faster and faster, until the reactor is far hotter than anything you designed for. That is **thermal runaway**, and it is the mechanism behind a large fraction of chemical-plant disasters (Seveso, T2 Laboratories). This lesson gives you the one-line test for which states are safe, and the physics of how a stable reactor becomes an unstable one.

## The idea

Think of the steady state as a ball resting where two forces balance. **Generation** $G(T)$ is heat the reaction pumps out; **removal** $R(T)$ is heat the coolant carries away. At a steady state they're equal. Now bump the temperature up a hair. Two things respond: generation rises (hotter → faster reaction → more heat) and removal rises (hotter → bigger gap to the coolant → more cooling). The question is **who wins the response**.

If removal responds *harder* than generation — the coolant ramps up faster than the reaction does — then a small upward bump creates a net cooling surplus that pushes the temperature back down. Self-correcting. **Stable.** If generation responds harder, the bump creates a net heating surplus that pushes the temperature *further* up, which speeds the reaction more, which generates still more heat... a small nudge snowballs. **Unstable** — and that snowball, once it's rolling with no higher stable state to catch it, is runaway.

The whole thing turns on the **slopes** of the two curves at the crossing point. Recall from 3.4 that $R(T)$ is a straight line but $G(T)$ is an S-shaped curve (the S comes from Arrhenius $k(T)$: nearly flat at low $T$, exploding through the middle, flattening at high $T$ once the reactant is nearly used up). A straight line cuts an S in three places, and at each place the comparison of slopes is different — which is exactly why the low and high crossings are safe and the middle one is a knife-edge.

## The formal version

Let $G(T)$ = heat generated per mole of $A$ fed and $R(T)$ = heat removed per mole of $A$ fed (both $\mathrm{J\,mol^{-1}}$), as defined in 3.4:

$$G(T) = (-\Delta H_{rx})\,X(T), \qquad R(T) = C_{P0}(1+\kappa)\,(T - T_c),$$

where $-\Delta H_{rx}$ is the (positive, for exothermic) heat of reaction ($\mathrm{J\,mol^{-1}}$), $X(T)$ is the conversion the reactor achieves at temperature $T$ (dimensionless, and S-shaped in $T$ because it rides on $k(T)$), $C_{P0}=\sum\Theta_i C_{p,i}$ is the heat capacity of the feed stream per mole of $A$ ($\mathrm{J\,mol^{-1}K^{-1}}$), and $\kappa = \dfrac{Ua}{C_{P0}F_{A0}}$ is the dimensionless cooling strength — $Ua$ the heat-transfer coefficient times area ($\mathrm{W\,K^{-1}}$), $F_{A0}$ the molar feed ($\mathrm{mol\,s^{-1}}$). $T_c = \dfrac{T_0+\kappa T_a}{1+\kappa}$ blends inlet $T_0$ and coolant $T_a$. A steady state is any $T$ where $G(T)=R(T)$.

**Slope stability criterion.** A steady state is stable when

$$\boxed{\;\frac{dR}{dT} > \frac{dG}{dT}\quad\text{at the crossing.}\;}$$

*In words: the reactor is stable exactly when heat removal answers a temperature bump more strongly than heat generation does.* The removal slope is a constant, $\dfrac{dR}{dT} = C_{P0}(1+\kappa)$ — steeper cooling means a bigger, safer margin. The generation slope $\dfrac{dG}{dT} = (-\Delta H_{rx})\dfrac{dX}{dT}$ is tiny on the flat feet of the S and large through its steep middle.

Apply it to the three crossings of an S by a line:

| Crossing | Where on the S-curve | $dG/dT$ vs $dR/dT$ | Verdict |
|---|---|---|---|
| Low $T$ | flat lower foot | $dG/dT < dR/dT$ | **stable** |
| Middle $T$ | steep rising middle | $dG/dT > dR/dT$ | **unstable** |
| High $T$ | flat upper shoulder | $dG/dT < dR/dT$ | **stable** |

The middle state is unstable because that's the one place the S is climbing faster than the line. The math just certifies the picture: a line crossing an S must cut it steeply in the middle and gently at the ends.

**Thermal runaway.** When $\dfrac{dG}{dT} > \dfrac{dR}{dT}$ and there is *no* higher stable state to arrest the climb (or cooling is lost outright), temperature has nowhere to settle:

$$T\uparrow \;\Rightarrow\; k=A e^{-E/RT}\uparrow \;\Rightarrow\; (-r_A)\uparrow \;\Rightarrow\; \text{heat}\uparrow \;\Rightarrow\; T\uparrow\uparrow.$$

*In words: temperature feeds the reaction rate, which feeds the temperature — positive feedback.* The **exponential** $k(T)$ is the accelerant: a 10 K rise can double or triple the rate, so the loop tightens as it goes. **Parametric sensitivity** is the practical danger — near the runaway boundary, the peak temperature depends brutally on inputs. A few degrees in $T_a$, a small drop in $Ua$, or a slug of concentrated feed can swing the peak $T$ by hundreds of degrees. The reactor is on a knife-edge: well-behaved until, with no visible warning, it isn't.

**Safe operating envelope.** The defense is margin, not luck. Keep the removal line comfortably steeper than the generation curve at the operating point — oversize $Ua$, dilute the feed (lower $-\Delta H_{rx}$ per volume), stage or meter the feed so heat is released gradually, and back it all with pressure relief for when the margin is breached anyway. This is the same logic as a nuclear reactor's loss-of-coolant accident: heat production (decay heat there, reaction heat here) must never outrun heat removal, and defense-in-depth means designing so it can't — with a relief path for when it does.

## Picture

![Left: the G(T) generation curve (S-shaped, coral) and R(T) removal line (straight, blue) crossing at three points; each crossing annotated — low and high are stable because the removal line is steeper, the middle is unstable because the generation curve is steeper and runs away. Right inset: temperature versus time, a controlled run leveling off to a plateau (blue) versus a runaway blowing up exponentially (coral).](assets/03-05-fig1.svg)

## Worked examples

**Example 1 (apply the slope test).** A CSTR has removal line $R(T)=C_{P0}(1+\kappa)(T-T_c)$ with $C_{P0}=200\ \mathrm{J\,mol^{-1}K^{-1}}$ and $\kappa=0.5$, so its slope is $dR/dT=C_{P0}(1+\kappa)=200(1.5)=300\ \mathrm{J\,mol^{-1}K^{-1}}$ everywhere. The generation curve crosses it at three temperatures, with measured slopes

| Crossing | $T$ (K) | $dG/dT$ ($\mathrm{J\,mol^{-1}K^{-1}}$) |
|---|---|---|
| low | 315 | 60 |
| middle | 355 | 850 |
| high | 405 | 40 |

Classify each and explain the middle one.

Test $dR/dT>dG/dT$ at each crossing (removal slope is 300 throughout):

- **Low, 315 K:** $300>60$ → removal wins → **stable.**
- **Middle, 355 K:** $300>850$? No, $300<850$ → generation wins → **unstable.**
- **High, 405 K:** $300>40$ → removal wins → **stable.**

Why the middle fails: nudge it to 356 K. Generation climbs at 850 J·mol⁻¹ per K but removal only at 300, so the extra degree buys a net $850-300=550\ \mathrm{J\,mol^{-1}}$ of *heating* — the temperature keeps rising, gaining speed as $k$ climbs, until it lands on the high stable state at 405 K. Nudge it *down* to 354 K and the reverse surplus cools it all the way to 315 K. The middle state is a **watershed**: it can't be held, and it decides which stable state a disturbed reactor falls into. *Sanity check:* both slopes carry $\mathrm{J\,mol^{-1}K^{-1}}$, so the comparison is apples-to-apples ✓. *Design meaning:* only 315 K and 405 K are places you can actually run; picking between them (low conversion, cool vs. high conversion, hot) is the ignition–extinction story of 3.4.

**Example 2 (runaway trigger — fouled cooling).** The same reactor runs at its high stable state, where the generation curve has slope $dG/dT=250\ \mathrm{J\,mol^{-1}K^{-1}}$. Feed is $F_{A0}=10\ \mathrm{mol\,s^{-1}}$; the clean heat-transfer duty is $Ua=1000\ \mathrm{W\,K^{-1}}$. Scale slowly fouls the cooling coil, dropping $Ua$. At what $Ua$ does the reactor lose stability and run away?

The removal slope is $dR/dT=C_{P0}(1+\kappa)$ with $\kappa=\dfrac{Ua}{C_{P0}F_{A0}}$. Right now

$$\kappa=\frac{1000}{200\times 10}=0.5,\qquad \frac{dR}{dT}=200(1.5)=300>250\ \checkmark\ \text{(stable, but only a thin margin).}$$

As fouling lowers $Ua$, $\kappa$ falls and the removal line *tilts shallower*. Stability is lost the instant the removal slope drops to the generation slope:

$$C_{P0}(1+\kappa_c)=\frac{dG}{dT}=250 \;\Rightarrow\; 1+\kappa_c=\frac{250}{200}=1.25 \;\Rightarrow\; \kappa_c=0.25.$$

Back out the critical duty from $\kappa_c=\dfrac{Ua_c}{C_{P0}F_{A0}}$:

$$Ua_c=\kappa_c\,C_{P0}F_{A0}=0.25\times 200\times 10=\boxed{500\ \mathrm{W\,K^{-1}}}.$$

So once fouling cuts the effective heat-transfer coefficient below **half its clean value**, the removal line is no longer steep enough to answer a temperature bump: the operating state vanishes (it merges with the middle unstable state) and the reactor ignites up the exponential toward a far hotter — possibly unbounded — temperature. *Units check:* $\kappa=\dfrac{\mathrm{W\,K^{-1}}}{(\mathrm{J\,mol^{-1}K^{-1}})(\mathrm{mol\,s^{-1}})}=\dfrac{\mathrm{J\,s^{-1}K^{-1}}}{\mathrm{J\,s^{-1}K^{-1}}}$ = dimensionless ✓. *Design meaning:* this is why cooling systems are oversized and monitored. A margin of "300 vs 250" looks fine on a datasheet and is actually one fouling season from disaster — the parametric-sensitivity warning made concrete. (The estimate uses the slope at the current state; the exact critical $Ua$ solves $R=G$ and $dR/dT=dG/dT$ together, but the slope test gives the right number and, more importantly, the right alarm.)

## Watch out

- **You might think a hotter steady state is a more dangerous one — but "high $T$" and "unstable" are different things.** The high crossing is perfectly *stable*; you can hold it indefinitely. The genuinely dangerous state is the *middle* one, which may be at a moderate temperature. Stability is about slopes, not about how hot the point is.
- **You might think runaway means the reaction "explodes" chemically — but it's a heat-balance failure, not a new reaction.** The chemistry is the same exothermic reaction all along. What changes is that removal can no longer keep pace with generation, so the ordinary Arrhenius speed-up runs unchecked. Fix the heat balance and the "explosive" reaction becomes tame.
- **You might think a small safety margin is still a safe margin — but near the boundary, sensitivity is enormous.** Just above the critical $Ua$, a few percent more fouling or a few kelvin of extra feed temperature can move the peak $T$ by hundreds of degrees. "Barely stable" is an operating point you should never design for; leave room to spare.

## One-liner

> A steady state is stable when cooling out-responds heating ($dR/dT>dG/dT$); when the exponential reaction out-responds the cooling with nowhere higher to settle, the temperature feeds itself and runs away.

## Problems

**P1 (🟢)** A CSTR's removal line has slope $dR/dT = 400\ \mathrm{J\,mol^{-1}K^{-1}}$. Its generation curve crosses at three temperatures with slopes $dG/dT = 90$, $620$, and $70\ \mathrm{J\,mol^{-1}K^{-1}}$ (low, middle, high). Classify each steady state.

**P2 (🟡)** A reactor sits at a stable steady state where its generation curve has slope $dG/dT = 480\ \mathrm{J\,mol^{-1}K^{-1}}$. The feed is $F_{A0}=5\ \mathrm{mol\,s^{-1}}$ and $C_{P0}=300\ \mathrm{J\,mol^{-1}K^{-1}}$. Find the smallest $Ua$ (in $\mathrm{W\,K^{-1}}$) that keeps this state stable.

**P3 (🔴)** For a first-order reaction in a CSTR, generation is $G(T) = (-\Delta H_{rx})\dfrac{\tau k}{1+\tau k}$ with $k=A e^{-E/RT}$. Explain, without heavy algebra, why $G(T)$ must be S-shaped in $T$ (flat–steep–flat) and therefore why an increase in the operating temperature you're at can only ever *reduce* your stability margin against generation once you're past the foot of the S. Where on the S is $dG/dT$ largest?

<details>
<summary>Solutions</summary>

**P1** Test $dR/dT > dG/dT$ (removal slope is 400 at every crossing):
- Low: $400 > 90$ → **stable.**
- Middle: $400 > 620$? No → **unstable.**
- High: $400 > 70$ → **stable.**

The middle state is where the S-curve climbs faster than the removal line, so a nudge grows; the two ends are on the flat parts of the S, where the line out-responds the curve. Same pattern as always: outer two safe, middle a knife-edge.

**P2** Marginal stability is $dR/dT = dG/dT$, i.e. $C_{P0}(1+\kappa) = 480$:
$$1+\kappa = \frac{480}{300} = 1.6 \;\Rightarrow\; \kappa = 0.6.$$
Then $Ua = \kappa\,C_{P0}F_{A0} = 0.6\times 300\times 5 = \boxed{900\ \mathrm{W\,K^{-1}}}.$
Any $Ua$ below 900 W/K makes the removal line too shallow ($dR/dT < 480$) and the state goes unstable; you want $Ua$ comfortably *above* 900, not exactly at it. *Units check:* $\kappa$ dimensionless, so $Ua$ carries $C_{P0}F_{A0} = \mathrm{J\,mol^{-1}K^{-1}}\cdot\mathrm{mol\,s^{-1}} = \mathrm{J\,s^{-1}K^{-1}} = \mathrm{W\,K^{-1}}$ ✓.

**P3** $G(T)=(-\Delta H_{rx})\dfrac{\tau k}{1+\tau k}$, and the fraction $\dfrac{\tau k}{1+\tau k}$ is just the conversion $X$, which runs from 0 to 1 as $k$ (hence $T$) increases. At **low $T$**, $k$ is exponentially tiny, $\tau k\ll1$, so $X\approx\tau k\approx 0$ and $G$ hugs zero — flat foot. At **high $T$**, $k$ is huge, $\tau k\gg1$, so $X\to1$ and $G\to(-\Delta H_{rx})$, a ceiling — flat shoulder. In between, $X$ swings from ~0 to ~1 over a modest temperature range because $k$ is exponential in $T$ — that's the steep middle. So $G$ is flat–steep–flat: an S. Its slope $dG/dT$ is **largest in the middle**, near $X\approx\tfrac12$ (where $\tau k\approx1$), and small at both ends. Consequence: starting from the low stable foot and pushing your operating $T$ upward marches you *toward* the steep middle, where $dG/dT$ grows and the fixed removal slope no longer dominates — the margin $dR/dT - dG/dT$ shrinks. That's the mathematical shadow of "hotter is closer to runaway once you leave the foot."

</details>

## Flashback

**From Lesson 3.2 (Adiabatic operation):** A liquid-phase exothermic reaction $A\to B$ runs adiabatically (no heat exchange) with inlet $T_0 = 320\ \mathrm{K}$, heat of reaction $-\Delta H_{rx} = 60{,}000\ \mathrm{J\,mol^{-1}}$, and feed heat capacity $\sum\Theta_i C_{p,i} = 150\ \mathrm{J\,mol^{-1}K^{-1}}$. Find the adiabatic temperature rise $\Delta T_{ad}$ (at complete conversion) and the temperature when conversion reaches $X=0.5$. (Fresh variant — new numbers.)

<details>
<summary>Solution</summary>

The adiabatic energy balance ties temperature straight to conversion:
$$T = T_0 + \frac{(-\Delta H_{rx})\,X}{\sum\Theta_i C_{p,i}}, \qquad \Delta T_{ad} = \frac{-\Delta H_{rx}}{\sum\Theta_i C_{p,i}}\ \ (\text{the rise at } X=1).$$
$$\Delta T_{ad} = \frac{60{,}000}{150} = 400\ \mathrm{K}.$$
$$T(X{=}0.5) = 320 + 400(0.5) = 320 + 200 = 520\ \mathrm{K}.$$
*Units check:* $\dfrac{\mathrm{J\,mol^{-1}}}{\mathrm{J\,mol^{-1}K^{-1}}} = \mathrm{K}$ ✓. *Tie-in to today:* a 400 K adiabatic rise is exactly the kind of stored heat that makes runaway so violent — with cooling, this reaction settles on a steady state; lose the cooling and *this* is roughly how far the temperature can climb on its own. The adiabatic line is the backbone the whole $G(T)$ curve is built on.

</details>

## Connections

- **Backward:** the three steady states and the $G(T)/R(T)$ construction are straight from [3.4](03-04-multiple-steady-states-cstr.md); the removal line's slope $C_{P0}(1+\kappa)$ comes from the heat-exchange energy balance in [3.3](03-03-reactors-with-heat-exchange.md); and the exponential $k(T)$ that makes generation an S-curve — and the accelerant of runaway — is the Arrhenius law of [1.2](01-02-arrhenius-temperature-dependence.md).
- **Forward:** stability and safe-envelope thinking underpin all real reactor design — every downstream choice (catalyst loading in Module 4, feed staging, relief sizing) is partly a bid to keep $dR/dT$ ahead of $dG/dT$ with room to spare.
- **Sideways (nuclear / thermal systems):** this is the reaction-engineering face of a loss-of-coolant accident. In a reactor core the "generation" is decay or fission heat and the "removal" is the coolant loop; stability and runaway obey the same balance-of-slopes logic, and the same defense-in-depth answer — oversize the heat sink, add independent removal paths, and provide relief for when generation still outruns removal.
