# Biophysics · Lesson 4.3: Molecular motors and the Brownian ratchet

> ⏱ ~15 min · Module 4: Motors, kinetics, and membrane potentials · Builds on: [4.2 Enzyme kinetics: Michaelis–Menten](04-02-michaelis-menten.md), [1.1 The ruler of the cell: $k_BT$ and scales](01-01-kbt-ruler-scales.md) · Unlocks: [4.4 Membrane potentials: Nernst and Goldman](04-04-membrane-potentials-nernst-goldman.md)

## Why this matters

A **kinesin** motor is a two-headed protein the size of a few nanometers that walks hand-over-hand along a microtubule, hauling vesicles across your cells; **myosin** does the same on actin to contract your muscles, and **dynein** drags cargo the other way. Each takes a discrete step — kinesin's is about $8\ \mathrm{nm}$ — and pays for it by burning roughly one ATP, worth $\sim 20\,k_BT$ ([1.1](01-01-kbt-ruler-scales.md)). The puzzle is that at this size the motor is buffeted by thermal collisions so violently it cannot simply *push* its cargo forward the way a machine would. The resolution is one of the most beautiful ideas in biophysics: the motor does not fight thermal noise, it **harnesses** it — directed motion is random Brownian motion, *rectified* and paid for with ATP.

## The idea

Picture the motor as a bead sitting in a bumpy energy landscape — a row of valleys ("wells"), one per binding site along the track, spaced by the step size $d$. Thermal kicks jiggle the bead constantly, and it rattles around in its well, occasionally hopping to a neighbor. Left to itself in a symmetric landscape, it hops left and right equally: pure diffusion, no progress. That's the tyranny of thermal equilibrium.

Now burn an ATP. The chemical energy does one of two equivalent things. In the **power-stroke** picture, a conformational change *tilts* the landscape downhill in the forward direction, so the bead slides into the next well — the landscape is pumped, not the motion directly. In the **Brownian-ratchet** picture, ATP makes the landscape asymmetric (a sawtooth) and switches it in time: when a thermal kick happens to carry the bead forward, the motor traps it there and resets, but a backward kick is blocked. Either way, the bead is still just *diffusing* — ATP only biases which random hops "count." Both pictures are the same story: **ATP tilts or resets a periodic landscape, and the motor rides thermal noise downhill, directionally.**

The catch, and the deep point, is that you *cannot* skip the ATP. A passive asymmetric ratchet sitting in a thermal bath at one temperature does **no** net work — Feynman's famous ratchet-and-pawl. The pawl meant to allow only forward slips is itself jiggled by the same bath and lifts just often enough to permit exactly as many backward slips. This is **detailed balance** ([4.1](04-01-reaction-kinetics-mass-action.md)) enforcing the second law. To get directed motion you must *break* detailed balance, and breaking it costs free energy — that's what the ATP buys.

## The formal version

**Rectified diffusion and the rate ratio.** Model a single forward step as a rate $k_+$ and a backward step as a rate $k_-$. For a step of size $d$ against an opposing load force $F$, driven by the free energy $\Delta G_{\text{ATP}}$ released per step, thermodynamic consistency (a driven detailed-balance relation) fixes their ratio:

$$\frac{k_+}{k_-} = \exp\!\left(\frac{\Delta G_{\text{ATP}} - F d}{k_BT}\right).$$

*In words: the motor steps forward preferentially by exactly the Boltzmann factor of the net free energy it gains per step* — the fuel $\Delta G_{\text{ATP}}$ pushing forward, the load work $Fd$ pushing back. Set $\Delta G_{\text{ATP}} = 0$ (a passive ratchet, no fuel) and no load: the ratio is $1$, forward and backward hops balance, **zero net motion**. That single line *is* the no-free-lunch theorem: without fuel, no rectification.

**Stall force.** The motor drifts forward only while $k_+ > k_-$, i.e. while $\Delta G_{\text{ATP}} > Fd$. It stops when the load makes the ratio $1$:

$$F_{\text{stall}} = \frac{\Delta G_{\text{ATP}}}{d}.$$

*In words: the motor can push until the work it does per step, $F_{\text{stall}}\,d$, eats up all the free energy per step.* This is just work = energy, the cleanest order-of-magnitude estimate in the whole subject.

**Force–velocity relation.** Net velocity is the step size times the net stepping rate, $v = d\,(k_+ - k_-)$. It is largest at zero load and falls to zero at $F_{\text{stall}}$. A serviceable schematic (exact shape depends on the mechanism) is the linear law

$$v(F) \approx v_{\max}\left(1 - \frac{F}{F_{\text{stall}}}\right),$$

with $v_{\max}$ the unloaded speed. *In words: load the motor and it slows; at the stall force it freezes.* (Real kinesin holds speed better than linear, then drops steeply near stall — but the endpoints are exactly these.)

**Efficiency.** The useful work per step is $Fd$; the fuel spent is $\Delta G_{\text{ATP}}$, so

$$\eta = \frac{F d}{\Delta G_{\text{ATP}}} = \frac{F}{F_{\text{stall}}}.$$

*In words: efficiency is just how close the load is to stall.* Real motors reach $\eta \sim 50\%$ at moderate loads — extraordinary for a nanoscale machine swimming in noise.

## Picture

![A tilted asymmetric sawtooth free-energy landscape: periodic wells stepping downhill to the right, a blue motor sliding forward by one step d into the next well while coral wiggles show thermal kicks; the downhill tilt is set by the ATP free energy and a load would flatten it toward stall](assets/04-03-fig1.svg)

## Worked examples

**Example 1 (the stall-force estimate — a Boss-type number).** How hard can kinesin pull? Use $\Delta G_{\text{ATP}} \approx 20\,k_BT$ and $d \approx 8\ \mathrm{nm}$, with $k_BT \approx 4.1\ \mathrm{pN\,nm}$:

$$\Delta G_{\text{ATP}} \approx 20 \times 4.1\ \mathrm{pN\,nm} = 82\ \mathrm{pN\,nm}, \qquad F_{\text{stall}} = \frac{82\ \mathrm{pN\,nm}}{8\ \mathrm{nm}} \approx 10\ \mathrm{pN}.$$

Measured kinesin stalls at $\sim 5\text{–}7\ \mathrm{pN}$. Our estimate is the right order of magnitude and slightly high — exactly as it should be, because the motor is not $100\%$ efficient: some of the $20\,k_BT$ leaks to heat and to the chemistry of resetting, so the mechanical ceiling is a bit below the thermodynamic one. A one-line calculation lands within a factor of $1.5$ of a real protein. *That* is the payoff of the $k_BT$ ruler.

**Example 2 (force, velocity, and why motors have a working range).** Suppose an unloaded kinesin steps at $v_{\max} = 800\ \mathrm{nm/s}$ and stalls at $F_{\text{stall}} = 7\ \mathrm{pN}$. Carrying a $3.5\ \mathrm{pN}$ cargo — half the stall load — the linear law gives

$$v = 800\left(1 - \tfrac{3.5}{7}\right) = 400\ \mathrm{nm/s},$$

a stepping rate of $v/d = 400/8 = 50\ \mathrm{steps/s}$, and an efficiency $\eta = F/F_{\text{stall}} = 0.5$, i.e. $50\%$ of each ATP's energy delivered as useful work. Push the load toward $7\ \mathrm{pN}$ and the speed collapses even though efficiency climbs — a motor delivers **zero power** both unloaded (no force) and at stall (no motion), and does its best work somewhere in between. Cells exploit this by ganging several motors on one cargo so each runs at a comfortable sub-stall load.

## Watch out

- **You might think ATP directly *pushes* the motor forward, like a piston.** It doesn't — thermal forces ($\sim k_BT/d \approx 4\ \mathrm{pN/nm}$ of fluctuating force) dwarf any deterministic shove at this scale. ATP reshapes the *landscape*; the actual forward motion is a rectified thermal hop. The motor rents its motion from the heat bath and pays the rent in ATP.
- **You might think a clever enough passive ratchet could extract work from thermal noise.** It cannot — that's a perpetual-motion machine of the second kind. Detailed balance ([4.1](04-01-reaction-kinetics-mass-action.md)) guarantees the pawl fails exactly often enough to cancel the rectification. Directed motion *requires* an out-of-equilibrium fuel source.
- **You might read $F_{\text{stall}} = \Delta G/d$ as an equality the motor achieves.** It's an upper bound. Real stall forces sit below it because efficiency is under $100\%$; the estimate tells you the ceiling, not the delivered force.

## One-liner

> A molecular motor doesn't beat thermal noise — it rectifies it: ATP tilts a periodic landscape to bias random hops forward, stalling when the work per step $F_{\text{stall}}\,d$ exhausts the free energy per step $\Delta G_{\text{ATP}}$.

## Problems

**P1 (🟢)** Myosin V walks along actin in $\sim 36\ \mathrm{nm}$ steps, one ATP ($\approx 20\,k_BT$) per step. Estimate its stall force. How does it compare to kinesin's $\sim 10\ \mathrm{pN}$ thermodynamic ceiling, and why is myosin V's so different?

**P2 (🟡)** A motor has $v_{\max} = 600\ \mathrm{nm/s}$, $d = 8\ \mathrm{nm}$, and $F_{\text{stall}} = 6\ \mathrm{pN}$. Using the linear force–velocity law, find its speed and its efficiency under a $4\ \mathrm{pN}$ load. Then find the load at which it delivers the most power ($P = Fv$), and that maximum power.

**P3 (🔴, optional)** Using the rate ratio $k_+/k_- = \exp[(\Delta G_{\text{ATP}} - Fd)/k_BT]$: (a) show the net drift reverses sign at $F = F_{\text{stall}}$; (b) evaluate the ratio for a *passive* ratchet ($\Delta G_{\text{ATP}} = 0$) with no load and interpret it; (c) for kinesin ($\Delta G_{\text{ATP}} = 20\,k_BT$, $d = 8\ \mathrm{nm}$) at a $4\ \mathrm{pN}$ load, compute $k_+/k_-$.

<details>
<summary>Solutions</summary>

**P1** Same estimate, larger step:

$$F_{\text{stall}} = \frac{\Delta G_{\text{ATP}}}{d} = \frac{20 \times 4.1\ \mathrm{pN\,nm}}{36\ \mathrm{nm}} = \frac{82}{36} \approx 2.3\ \mathrm{pN}.$$

Myosin V's ceiling is far lower than kinesin's $\sim 10\ \mathrm{pN}$ purely because it spends the *same* $\sim 20\,k_BT$ over a $4.5\times$ longer step — force is energy per distance, so a bigger stride trades force for reach. Measured myosin V stalls at $\sim 2\text{–}3\ \mathrm{pN}$: our estimate is essentially exact. *Check.* Units: $\mathrm{pN\,nm}/\mathrm{nm} = \mathrm{pN}$ ✓. Cross-check against [1.1](01-01-kbt-ruler-scales.md)'s $4\ \mathrm{nm}$-step motor, which gave $\sim 20\ \mathrm{pN}$ — halving the step doubled the force, consistent with $F \propto 1/d$. ✓

**P2** Speed at $4\ \mathrm{pN}$:

$$v = 600\left(1 - \tfrac{4}{6}\right) = 600 \times \tfrac13 = 200\ \mathrm{nm/s}, \qquad \eta = \frac{F}{F_{\text{stall}}} = \frac{4}{6} \approx 67\%.$$

Power is $P = Fv = F\,v_{\max}(1 - F/F_{\text{stall}})$, a downward parabola in $F$; maximize by $dP/dF = v_{\max}(1 - 2F/F_{\text{stall}}) = 0$, so the optimum is at **half the stall force**, $F = 3\ \mathrm{pN}$. There $v = 600(1 - \tfrac12) = 300\ \mathrm{nm/s}$ and

$$P_{\max} = 3\ \mathrm{pN} \times 300\ \mathrm{nm/s} = 900\ \mathrm{pN\,nm/s} \approx 220\,k_BT/\mathrm{s}.$$

*Check.* Max power at $F_{\text{stall}}/2$ is the same result as a battery delivering peak power at half its open-circuit voltage — matched load. Units: $\mathrm{pN}\cdot\mathrm{nm/s} = \mathrm{pN\,nm/s}$, energy per time ✓, and dividing by $4.1\ \mathrm{pN\,nm}$ gives $k_BT/\mathrm{s}$. ✓

**P3** (a) Net drift is forward when $k_+ > k_-$, i.e. the exponent $\Delta G_{\text{ATP}} - Fd > 0$. It vanishes when $Fd = \Delta G_{\text{ATP}}$, i.e. $F = \Delta G_{\text{ATP}}/d = F_{\text{stall}}$; for $F > F_{\text{stall}}$ the exponent is negative, $k_+ < k_-$, and the motor is dragged **backward** (it can even synthesize ATP — this is how $\mathrm{F_1}$-ATP synthase runs in reverse). 

(b) Passive, no load: exponent $= 0$, so $k_+/k_- = e^0 = 1$. Forward and backward hops are equally likely: **no net motion, no work** — detailed balance intact, exactly Feynman's ratchet. 

(c) $\Delta G_{\text{ATP}} = 20\,k_BT$; load work $Fd = 4\ \mathrm{pN} \times 8\ \mathrm{nm} = 32\ \mathrm{pN\,nm} = 32/4.1 \approx 7.8\,k_BT$. Exponent $= 20 - 7.8 = 12.2$, so

$$\frac{k_+}{k_-} = e^{12.2} \approx 2\times 10^{5}.$$

*Check.* Forward stepping is overwhelmingly favored at this sub-stall load — reassuring, since $4\ \mathrm{pN}$ is well below the $\sim 10\ \mathrm{pN}$ ceiling. As $F \to F_{\text{stall}}$, the exponent $\to 0$ and the ratio $\to 1$, recovering part (a). ✓

</details>

## Flashback

**From Lesson 4.2 (Michaelis–Menten):** A kinesin's ATPase — the chemical clock that sets its stepping rate — obeys Michaelis–Menten kinetics with $K_M = 50\ \mu\mathrm{M}$ ATP and a maximum turnover $V_{\max} = 100\ \mathrm{s^{-1}}$. At what ATP concentration does it turn over at $80\ \mathrm{s^{-1}}$? (Fresh variant — a motor's fuel-limited speed, not a metabolic enzyme.)

<details>
<summary>Solution</summary>

Set $v = V_{\max}[S]/(K_M + [S]) = 80\ \mathrm{s^{-1}}$ and solve for $[S]$:

$$80(50 + [S]) = 100[S] \;\Longrightarrow\; 4000 = 20[S] \;\Longrightarrow\; [S] = 200\ \mu\mathrm{M}.$$

*Check.* That's $[S] = 4K_M$, giving $v = V_{\max}\cdot 4/(1+4) = 0.8\,V_{\max} = 80\ \mathrm{s^{-1}}$ ✓. Physically: cellular ATP is $\sim 1\text{–}5\ \mathrm{mM} \gg K_M$, so a healthy motor runs near $V_{\max}$ — its speed is limited by mechanics and load (this lesson's force–velocity law), not by fuel supply, until ATP is badly depleted. ✓

</details>

## Connections

- **Backward:** the no-work-from-equilibrium-noise argument is [4.1](04-01-reaction-kinetics-mass-action.md)'s **detailed balance** made physical — a passive ratchet has equal forward/backward rates and no net current. The $\Delta G_{\text{ATP}} \approx 20\,k_BT$ fuel is straight from [1.1](01-01-kbt-ruler-scales.md), and "rectified diffusion" is the biased random walk of [1.2](01-02-random-walk.md) with the bias supplied by ATP rather than a constant force.
- **Forward:** the same electrochemical free energy that powers ion pumps sets up the membrane voltages of [4.4](04-04-membrane-potentials-nernst-goldman.md); a pump is a motor whose "step" moves ions up their gradient, stalling when $Fd$ is replaced by the electrochemical work per ion. Motors and gradients feed [`neuroscience`](../../neuroscience/syllabus.md) and muscle mechanics in [`biochemistry`](../../biochemistry/syllabus.md).
- **Sideways (stat-mech):** the rate ratio $k_+/k_- = e^{(\Delta G - Fd)/k_BT}$ is a driven Boltzmann factor — the same fluctuation-versus-work bookkeeping behind the Einstein relation ([1.4](01-04-einstein-relation.md)) and Feynman's ratchet in [`stat-mech`](../../stat-mech/syllabus.md). A motor is the microscopic engine that Carnot efficiency governs at the macroscale.
