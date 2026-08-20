# Chemical Reaction Engineering · Lesson 4.1: Catalysis and the Langmuir adsorption isotherm

> ⏱ ~15 min · Module 4: Catalysis and diffusion · Builds on: [1.1 Rate of reaction and the rate law](01-01-rate-of-reaction-rate-law.md), [phys-chem 3.5 Catalysis and enzyme kinetics](../../physical-chemistry/lessons/03-05-catalysis-enzyme-kinetics.md) · Unlocks: [4.2 Heterogeneous rate laws (LHHW)](04-02-heterogeneous-rate-laws-lhhw.md)

## Why this matters

Somewhere north of 80% of industrial chemical tonnage passes over a **solid catalyst** — ammonia on iron, cracked crude on zeolites, car exhaust on platinum. So far our rate laws ($-r_A = kC_A^n$) came from molecules colliding in the bulk fluid. That picture is wrong for these reactions. Here the action happens on a surface: reactant sticks to the solid, reacts while stuck, then lets go. The rate law you plug into a reactor-sizing equation is therefore a story about *surface real estate* — how much of the catalyst is covered by the reacting molecule at any instant. This lesson builds the single equation that governs that coverage. Next lesson we turn coverage into a rate law and size a packed bed with it.

## The idea

A catalyst is a **matchmaker that never gets consumed**. Its surface offers **active sites** — special spots (a metal atom, a defect, an acid site) where a passing molecule can bond weakly, get its bonds strained or rearranged so the reaction barrier is far lower, react, and then release the product. The catalyst emerges unchanged, ready for the next molecule. It doesn't change *where* equilibrium sits (that's thermodynamics), only *how fast* you get there — same trick as the enzyme in [phys-chem 3.5](../../physical-chemistry/lessons/03-05-catalysis-enzyme-kinetics.md), where an active site does exactly this for biology.

Here's the catch that sets everything: there are only *so many* sites. A surface is a parking lot with a fixed number of spaces. At low pressure, gas molecules are scarce and most spaces sit empty — bump the pressure and coverage climbs in lockstep. But as pressure rises the lot fills, and once it's full, pushing more gas at it does nothing: every space is taken. That saturating curve — linear at first, then flat — is the **Langmuir adsorption isotherm**, and its shape is the reason catalytic reactions can look first-order at low pressure and zero-order at high pressure *in the same reactor*.

## The formal version

Model the surface as $N$ identical sites. A gas molecule $A$ at partial pressure $P_A$ (in atm) either **adsorbs** onto a vacant site or **desorbs** back off. Let $\theta_A$ be the **fractional coverage** — the fraction of sites occupied by $A$ (dimensionless, between 0 and 1); then $1-\theta_A$ is the fraction vacant. Langmuir's three assumptions:

1. **Fixed, identical sites** — every site is equivalent, and there are a set number.
2. **Monolayer only** — one molecule per site, no stacking.
3. **No interactions** — an occupied site doesn't change its neighbors' appetite.

Adsorption happens when a gas molecule meets a *vacant* site, so its rate is proportional to $P_A(1-\theta_A)$. Desorption happens from *occupied* sites, proportional to $\theta_A$. At equilibrium the two balance:

$$k_a\,P_A\,(1-\theta_A) = k_d\,\theta_A,$$

where $k_a$ and $k_d$ are the adsorption and desorption rate constants. Define the **adsorption equilibrium constant** $K_A \equiv k_a/k_d$ (units atm$^{-1}$ — a big $K_A$ means "$A$ sticks hard"). Solve for $\theta_A$:

$$\boxed{\;\theta_A = \frac{K_A P_A}{1 + K_A P_A}\;}$$

*In words: coverage is a tug-of-war between the pressure pushing molecules on ($K_A P_A$) and the "+1" that represents the empty surface they compete with.* Two limits carry the whole lesson:

- **Low pressure** ($K_A P_A \ll 1$): the denominator is just $1$, so $\theta_A \approx K_A P_A$ — coverage rises **linearly** with pressure. A rate proportional to $\theta_A$ then looks **first order** in $A$.
- **High pressure** ($K_A P_A \gg 1$): the "1" is negligible, $\theta_A \to K_A P_A / K_A P_A = 1$ — the surface **saturates**. A rate proportional to $\theta_A$ is now constant, i.e. **zero order** in $A$.

The crossover is at $K_A P_A = 1$, i.e. $P_A = 1/K_A$, where the surface is exactly half covered ($\theta_A = \tfrac12$).

**Competitive adsorption.** If a second species $B$ (pressure $P_B$, constant $K_B$) fights for the *same* sites, it eats into the vacant fraction. Re-run the balance with two occupants — now $1-\theta_A-\theta_B$ is vacant — and:

$$\theta_A = \frac{K_A P_A}{1 + K_A P_A + K_B P_B}, \qquad \theta_B = \frac{K_B P_B}{1 + K_A P_A + K_B P_B}.$$

*In words: every adsorbing species adds its own $K P$ term to the denominator, and each one crowds the others out.* This is the mechanism of **product inhibition** and of catalyst **poisoning**: a strongly-sticking spectator ($K_B$ large) hogs the parking lot and starves the reaction of sites — even at low $P_B$.

Why do we care about $\theta_A$? Because a surface reaction can only happen where $A$ is actually sitting. The catalytic rate per mass of catalyst, $-r_A'$, is proportional to the coverage of the reacting species: $-r_A' \propto \theta_A$. That proportionality is the bridge we cross in [4.2](04-02-heterogeneous-rate-laws-lhhw.md).

## Picture

![Langmuir isotherm: fractional coverage theta_A versus partial pressure P_A rises linearly at low pressure then bends over and saturates toward 1, with the low-P linear tangent and the high-P plateau marked; an inset shows gas molecules occupying some sites of a monolayer on a solid catalyst.](assets/04-01-fig1.svg)

The blue curve is $\theta_A = K_A P_A/(1+K_A P_A)$. Near the origin it hugs the coral tangent $\theta_A = K_A P_A$ (linear, first-order regime); far to the right it flattens against the dashed $\theta_A = 1$ ceiling (saturated, zero-order regime). The inset is the reason for the ceiling: a fixed monolayer of sites, some filled (fraction $\theta_A$), some vacant (fraction $1-\theta_A$).

## Worked examples

**Example 1 — walking a molecule from first order to zero order.**
Carbon monoxide adsorbs on a catalyst with $K_A = 0.5\ \mathrm{atm^{-1}}$. Find $\theta_A$ at $P_A = 0.1$, $2$, and $40$ atm.

$$P_A = 0.1: \quad \theta_A = \frac{0.5 \times 0.1}{1 + 0.5\times 0.1} = \frac{0.05}{1.05} = 0.048.$$

The linear estimate $K_A P_A = 0.05$ is within 5% — we're in the **first-order** regime; rate would track $P_A$ closely.

$$P_A = 2: \quad \theta_A = \frac{0.5 \times 2}{1 + 0.5\times 2} = \frac{1}{2} = 0.50.$$

Exactly half-covered — and indeed $P_A = 2 = 1/K_A$, the crossover pressure.

$$P_A = 40: \quad \theta_A = \frac{0.5 \times 40}{1 + 0.5\times 40} = \frac{20}{21} = 0.952.$$

The surface is 95% full; doubling $P_A$ again would push it to only $\sim 0.976$. We've entered the **zero-order** regime — the rate barely responds to more $A$. One molecule, a 400-fold pressure sweep, and the apparent reaction order slid from 1 to 0 purely because the parking lot filled up.

*Check.* All three $\theta_A$ lie in $[0,1]$ ✓; $K_A P_A$ is dimensionless ($\mathrm{atm^{-1}\cdot atm}$) ✓; $\theta_A$ is monotonic in $P_A$ and passes through $\tfrac12$ at $P_A = 1/K_A$ ✓.

**Example 2 — product inhibition throttles the rate.**
Same $A$ with $K_A = 0.5\ \mathrm{atm^{-1}}$ at $P_A = 2$ atm (so alone, $\theta_A = 0.50$). Now the reaction has produced some product $B$ that adsorbs *strongly*: $K_B = 5\ \mathrm{atm^{-1}}$, and $P_B = 1$ atm. What happens to $\theta_A$, and hence to the rate?

$$\theta_A = \frac{K_A P_A}{1 + K_A P_A + K_B P_B} = \frac{0.5\times 2}{1 + 0.5\times 2 + 5\times 1} = \frac{1}{7} = 0.143.$$

Coverage of $A$ crashed from $0.50$ to $0.143$ — a factor of $3.5$ — even though $P_A$ never changed. Since $-r_A' \propto \theta_A$, **the rate drops by that same factor of $3.5$.** Where did the sites go? To $B$:

$$\theta_B = \frac{K_B P_B}{1 + K_A P_A + K_B P_B} = \frac{5}{7} = 0.714.$$

$B$ has grabbed 71% of the surface off just 1 atm, because it sticks ten times harder than $A$ ($K_B/K_A = 10$). This is **product inhibition**: as conversion rises and $B$ accumulates, the catalyst chokes on its own product. A designer sees it as a rate that sags along the reactor even at constant $P_A$ — sometimes reason enough to pull product out mid-stream (a membrane reactor) or accept a bigger catalyst load.

*Check.* Sites balance: $\theta_A + \theta_B + \theta_{\text{vacant}} = \tfrac{1}{7} + \tfrac{5}{7} + \tfrac{1}{7} = 1$ ✓. Set $K_B = 0$ (no $B$) and the formula collapses back to $\theta_A = 0.50$ ✓.

## Watch out

- **You might think a catalyst shifts the reaction toward more product.** It doesn't — it can't change $\Delta G$ or the equilibrium constant, only the *speed* to reach equilibrium. It lowers the barrier for the forward **and** reverse steps equally. (Same non-negotiable as [phys-chem 3.5](../../physical-chemistry/lessons/03-05-catalysis-enzyme-kinetics.md).)
- **You might read "zero order" as "the reaction stopped depending on chemistry."** No — zero order means the *surface is saturated*, so pressure no longer sets the rate; the rate is now fixed by how fast covered molecules react and desorb. Push $P_A$ down and you slide back to first order.
- **You might expect a big $K_A$ to mean a fast reaction.** Sticking hard and reacting fast are different things. A molecule that adsorbs too strongly ($K_A$ huge) saturates the surface at trivial pressure and can even sit there *blocking* it — that's how poisons work. Optimal catalysis wants adsorption strong enough to grab the reactant but weak enough to let the product leave.

## One-liner

> A catalyst surface is a fixed set of parking spaces; the Langmuir isotherm $\theta_A = K_A P_A/(1+K_A P_A)$ says coverage climbs linearly until the lot fills, and everything that adsorbs competes for the same spaces.

## Problems

**P1 (🟢)** A reactant adsorbs on a catalyst with $K_A = 0.2\ \mathrm{atm^{-1}}$. Compute $\theta_A$ at $P_A = 0.5$, $5$, and $50$ atm. State the apparent reaction order (in $A$) at the low- and high-pressure ends.

**P2 (🟡)** For the same $K_A = 0.2\ \mathrm{atm^{-1}}$: (a) at what $P_A$ is the surface exactly half covered? (b) what $P_A$ is needed to reach $\theta_A = 0.9$? Comment on the ratio of the two pressures.

**P3 (🔴)** A catalytic reaction $A \to B$ has rate $-r_A' = k'\theta_A$ with $k' = 0.4\ \mathrm{mol\,kg^{-1}\,s^{-1}}$, $K_A = 1\ \mathrm{atm^{-1}}$, and product $B$ adsorbs with $K_B = 4\ \mathrm{atm^{-1}}$. At the reactor inlet $P_A = 1$ atm, $P_B = 0$. Partway down the bed, conversion has made $P_A = 0.5$ atm, $P_B = 0.5$ atm. Find the rate at both points and the ratio. How much of the slowdown is "less $A$" versus "$B$ in the way"?

<details>
<summary>Solutions</summary>

**P1** Using $\theta_A = K_A P_A/(1+K_A P_A)$ with $K_A = 0.2$:

$$P_A = 0.5:\ \theta_A = \frac{0.1}{1.1} = 0.091; \quad P_A = 5:\ \theta_A = \frac{1}{2} = 0.50; \quad P_A = 50:\ \theta_A = \frac{10}{11} = 0.909.$$

At $P_A = 0.5$ the linear approximation $K_A P_A = 0.1$ is close, so coverage $\propto P_A$ — **first order** in $A$. At $P_A = 50$ the surface is 91% saturated and nearly flat — **zero order** in $A$. (Half coverage lands at $P_A = 1/K_A = 5$ atm, matching the middle value.)

*Check.* All $\theta_A \in [0,1]$ and monotonic ✓; crossover at $P_A = 1/K_A$ ✓.

**P2** Invert the isotherm: from $\theta_A = K_A P_A/(1+K_A P_A)$, solve $K_A P_A = \dfrac{\theta_A}{1-\theta_A}$, so

$$P_A = \frac{1}{K_A}\cdot\frac{\theta_A}{1-\theta_A}.$$

(a) $\theta_A = 0.5 \Rightarrow \dfrac{0.5}{0.5} = 1$, so $P_A = 1/K_A = 5$ atm.

(b) $\theta_A = 0.9 \Rightarrow \dfrac{0.9}{0.1} = 9$, so $P_A = 9/K_A = 45$ atm.

The ratio is $45/5 = 9$: going from half-covered to 90%-covered costs **nine times** the pressure. That's the hallmark of saturation — diminishing returns. Each extra bit of coverage near the top demands a disproportionate pressure hike, which is exactly why operating deep in the saturated (zero-order) regime is expensive for little gain.

*Check.* Units: $\dfrac{1}{\mathrm{atm^{-1}}} = \mathrm{atm}$ ✓; both pressures positive and the 90% case exceeds the 50% case ✓.

**P3** *Inlet* ($P_A = 1$, $P_B = 0$):

$$\theta_A = \frac{1\times 1}{1 + 1\times 1 + 0} = \frac{1}{2}, \qquad -r_A' = 0.4\times 0.5 = 0.20\ \mathrm{mol\,kg^{-1}\,s^{-1}}.$$

*Down the bed* ($P_A = 0.5$, $P_B = 0.5$):

$$\theta_A = \frac{1\times 0.5}{1 + 1\times 0.5 + 4\times 0.5} = \frac{0.5}{3.5} = 0.143, \qquad -r_A' = 0.4\times 0.143 = 0.057\ \mathrm{mol\,kg^{-1}\,s^{-1}}.$$

Rate ratio: $0.057/0.20 = 0.29$ — the rate has fallen to **29%** of its inlet value.

Decompose it. If $B$ did *not* adsorb ($K_B = 0$), then at $P_A = 0.5$ we'd have $\theta_A = \dfrac{0.5}{1.5} = 0.333$, i.e. rate ratio $0.333/0.5 = 0.67$. So the halved $P_A$ alone accounts for a drop to 67%; the extra fall from 67% to 29% (another factor $\sim 0.43$) is **$B$ occupying the sites** — product inhibition roughly *doubles* the slowdown here. Design takeaway: this bed needs disproportionately more catalyst near the exit, and removing $B$ (or running lower conversion per pass with recycle) would sharply raise the average rate.

*Check.* $-r_A'$ units $= (\mathrm{mol\,kg^{-1}\,s^{-1}})\times(\text{dimensionless } \theta) = \mathrm{mol\,kg^{-1}\,s^{-1}}$ ✓; inlet $\theta_A$ recovers the simple $K_AP_A/(1+K_AP_A)$ with no $B$ ✓; rate monotonically falls as $B$ builds ✓.

</details>

## Flashback

**From Lesson 1.2 (Arrhenius and the temperature dependence of rate):** A catalyst works by offering a lower-barrier pathway. Suppose it drops the activation energy of a reaction from $E_{\text{un}} = 75\ \mathrm{kJ/mol}$ (uncatalyzed) to $E_{\text{cat}} = 50\ \mathrm{kJ/mol}$, with the same pre-exponential factor $A$. By what factor is the rate constant larger on the catalyst at $T = 400\ \mathrm{K}$? ($R = 8.314\ \mathrm{J\,mol^{-1}\,K^{-1}}$.)

<details>
<summary>Solution</summary>

With $k = A e^{-E/(RT)}$ and a shared $A$, the pre-exponential cancels in the ratio:

$$\frac{k_{\text{cat}}}{k_{\text{un}}} = \frac{A e^{-E_{\text{cat}}/(RT)}}{A e^{-E_{\text{un}}/(RT)}} = \exp\!\left(\frac{E_{\text{un}} - E_{\text{cat}}}{RT}\right) = \exp\!\left(\frac{25{,}000}{8.314 \times 400}\right).$$

$$\frac{E_{\text{un}} - E_{\text{cat}}}{RT} = \frac{25{,}000}{3325.6} = 7.52 \quad\Longrightarrow\quad \frac{k_{\text{cat}}}{k_{\text{un}}} = e^{7.52} \approx 1.8\times 10^{3}.$$

Shaving 25 kJ/mol off the barrier speeds the reaction roughly **1800-fold** at 400 K — a vivid reminder that the barrier sits in an *exponent*, so a modest cut is an enormous acceleration. That barrier-lowering is precisely what the active sites in this lesson provide.

*Check.* The exponent is dimensionless ($\mathrm{J/mol}$ over $\mathrm{J\,mol^{-1}\,K^{-1}\cdot K}$) ✓; lower $E$ gives a larger $k$, so the ratio exceeds 1 ✓.

</details>

## Connections

- **Backward:** this replaces the bulk-collision rate law of [1.1](01-01-rate-of-reaction-rate-law.md) with a *surface* story, and it uses the same barrier-lowering, non-equilibrium-shifting logic as the enzyme active site in [phys-chem 3.5](../../physical-chemistry/lessons/03-05-catalysis-enzyme-kinetics.md) — in fact $\theta_A = K_A P_A/(1+K_A P_A)$ is algebraically the *same* saturating form as Michaelis–Menten, with pressure playing the role of substrate concentration.
- **Forward:** [4.2 Heterogeneous rate laws (LHHW)](04-02-heterogeneous-rate-laws-lhhw.md) turns $-r_A' \propto \theta_A$ into a full Langmuir–Hinshelwood–Hougen–Watson rate law (that competitive-adsorption denominator becomes the LHHW denominator), then feeds it into the packed-bed design equation $dX/dW = -r_A'/F_{A0}$ from [1.6](01-06-pfr-packed-bed.md).
- **Sideways:** the "sites can be blocked" idea returns physically in [4.3 Internal diffusion and the Thiele modulus](04-03-internal-diffusion-thiele-effectiveness.md) — there the reactant can't even *reach* interior sites fast enough, a transport limit that shares the transport-phenomena Thiele/effectiveness machinery.
