# Reactor Thermal-Hydraulics · Lesson 2.1: Coolant energy balance and bulk temperature

> ⏱ ~15 min · Module 2: Single-phase convection and flow · Builds on: [1.4 Axial temperature profile of a channel](01-04-axial-temperature-profile-channel.md), [`engineering-thermodynamics` 2.3 (mass & energy balance for control volumes)](../../engineering-thermodynamics/lessons/02-03-mass-energy-balance-control-volumes.md) · Unlocks: [2.2 Convective film drop](02-02-convective-heat-transfer-film-drop.md), Boss problem 2

## Why this matters

Module 1 pushed heat *out* of the fuel — pellet, gap, clad — and dumped it on the outside of the pin. Now something has to carry it away, or the pin cooks. That something is the coolant, and this lesson is the coolant's side of the ledger: every watt the fuel sheds becomes a rise in the coolant's temperature as it climbs the channel. Close that balance and you know the coolant temperature at every elevation — which is the temperature that *drives* the convective heat transfer of the next lesson and sets how much margin you have to boiling. It is the first half of Boss problem 2, and it is nothing more exotic than the steady-flow energy equation you already wrote in [`engineering-thermodynamics` 2.3](../../engineering-thermodynamics/lessons/02-03-mass-energy-balance-control-volumes.md), applied one slice at a time up a heated pipe.

## The idea

Picture the coolant as a conveyor belt of water moving up the channel at a fixed mass flow rate. As it passes each slice of heated wall, it picks up that slice's heat and carries it upward — so its temperature is a running total of everything it has absorbed *below* its current height. Nothing accumulates in the coolant (steady state); whatever heat goes in at a slice leaves with the stream a hair hotter. That is the whole balance: **heat added over a slice = flow rate × specific heat × temperature rise across the slice.**

Two consequences fall straight out. First, the *total* inlet-to-outlet rise depends only on the *total* power of the channel and the flow rate — not on how the power is distributed along the way. A channel that dumps all its heat at the bottom and one that spreads it evenly both leave the coolant equally hot at the top, as long as the total is the same. Second, the *shape* of the temperature climb copies the *cumulative* power. Where the power is intense (a reactor's midplane), the coolant heats fastest — a steep local slope; where the power tapers off (the channel ends), the temperature nearly flatlines. So a cosine power profile gives an S-shaped temperature curve: gentle, then steep at the middle, then gentle again.

## The formal version

**Mass flux.** Rather than track the volumetric flow, thermal-hydraulics uses **mass flux** (mass velocity)

$$G \equiv \frac{\dot m}{A_{flow}}, \qquad \dot m = \rho\, u_m\, A_{flow},$$

where $\dot m$ is the mass flow rate ($\mathrm{kg/s}$), $A_{flow}$ the channel's open flow area ($\mathrm{m^2}$), $\rho$ the coolant density ($\mathrm{kg/m^3}$), and $u_m$ the mean velocity ($\mathrm{m/s}$). So $G$ has units $\mathrm{kg/(m^2\cdot s)}$. *In words: $G$ is how much mass streams through each square metre of channel per second.* It is the natural variable because pressure drop and heat-transfer correlations (Modules 2–3) all key off it, and unlike velocity it stays put even when density changes as the coolant heats or boils.

**The differential energy balance.** Take a control-volume slice of height $dz$ (see the [SFEE derivation](../../engineering-thermodynamics/lessons/02-03-mass-energy-balance-control-volumes.md)). In steady state, with no work and negligible kinetic/potential terms, the heat rate into the slice equals the enthalpy the stream gains crossing it:

$$\dot m\, c_p\, \frac{dT_b}{dz} = q'(z).$$

Here $q'(z)$ is the **linear heat rate** ($\mathrm{W/m}$) — the power crossing the wall into the coolant per unit channel length — $c_p$ is the coolant specific heat ($\mathrm{J/(kg\cdot K)}$), and $T_b(z)$ is the bulk temperature (next paragraph). *In words: the coolant's temperature climbs at a rate set by the local heating divided by its "thermal freight capacity" $\dot m c_p$.* This is exactly the algebraic SFEE $\dot Q = \dot m c_p\,\Delta T$ from engineering-thermo, written differentially so it can handle a heating rate that varies up the channel.

**Bulk (mixed-mean) temperature.** Over a channel cross-section the coolant is *not* at one temperature — it is hot near the wall, cooler in the core of the flow. The right single number for an energy balance is the **bulk** or **mixed-mean** temperature, the flow-weighted (enthalpy) average

$$T_b \equiv \frac{\displaystyle\int_{A} \rho\, u\, c_p\, T \; dA}{\displaystyle\int_{A} \rho\, u\, c_p \; dA} = \frac{1}{\dot m c_p}\int_A \rho\, u\, c_p\, T\, dA.$$

*In words: $T_b$ is the temperature the stream would have if you scooped up the whole cross-section, stirred it adiabatically into one cup, and read a thermometer.* It is defined so that $\dot m c_p T_b$ is the true enthalpy flow rate — which is exactly why it, and not the centerline or wall temperature, is what appears in the balance above. It is also the reference temperature for convection: the film drop in [2.2](02-02-convective-heat-transfer-film-drop.md) is $q'' = h\,(T_{wall} - T_b)$.

**Integrating up the channel.** Separate and integrate from the inlet (elevation $z_{in}$, temperature $T_{in}$) to a height $z$:

$$T_b(z) = T_{in} + \frac{1}{\dot m c_p}\int_{z_{in}}^{z} q'(z')\, dz'.$$

The whole channel, inlet to outlet, gives

$$\boxed{\,T_{out} - T_{in} = \frac{1}{\dot m c_p}\int_{\text{channel}} q'(z')\, dz' = \frac{\dot Q_{ch}}{\dot m c_p}\,}$$

where $\dot Q_{ch}$ is the *total* channel power ($\mathrm{W}$). The integral collapses to the total — this is the "shape doesn't matter, only the sum does" result.

**Cosine power.** A bare reactor core has a cosine axial power shape (from [1.1](01-01-power-distribution-volumetric-source.md)/[1.4](01-04-axial-temperature-profile-channel.md)), $q'(z) = q'_{max}\cos(\pi z/L)$ with $z$ measured from the midplane, $z\in[-L/2,\,L/2]$. Integrating,

$$T_b(z) = T_{in} + \frac{q'_{max} L}{\pi\, \dot m c_p}\left[1 + \sin\!\left(\frac{\pi z}{L}\right)\right].$$

*In words: cosine power integrates to a sine — an S-shaped temperature climb, flat at the ends and steepest at the midplane where the power peaks.* The total rise (at $z=+L/2$) is $\dfrac{2 q'_{max} L}{\pi\,\dot m c_p}$, and since the total power of a cosine channel is $\dot Q_{ch} = \int_{-L/2}^{L/2} q'_{max}\cos(\pi z/L)\,dz = \frac{2q'_{max}L}{\pi}$, this is just $\dot Q_{ch}/(\dot m c_p)$ again — consistent.

**Enthalpy form.** The instant the coolant starts to boil, $c_p$ and the $T$–enthalpy relation break down (adding heat at saturation raises enthalpy but *not* temperature). The balance that still holds is the enthalpy form

$$\dot m\, \frac{dh}{dz} = q'(z), \qquad h(z) = h_{in} + \frac{1}{\dot m}\int_{z_{in}}^{z} q'(z')\,dz',$$

with $h$ the specific enthalpy ($\mathrm{J/kg}$). *In words: track enthalpy, not temperature, and the balance survives phase change.* We will lean on this from Module 3 onward (quality is defined off exactly this $h$); single-phase, $dh = c_p\,dT$ and it reduces to what we used above.

## Picture

![A heated channel with coolant flowing up and its bulk temperature rising inlet to outlet; a control-volume slice dz takes in q' dz and passes m·cp·T_b streams; beside it the T_b(z) profile shows the cosine case as an S-curve versus the straight uniform-power line, both reaching the same outlet temperature](assets/02-01-fig1.svg)

## Worked examples

**Example 1 (Boss problem 2 setup — outlet temperature).** Water enters a PWR coolant channel at $T_{in} = 290\ ^\circ\mathrm{C}$, $15\ \mathrm{MPa}$, with mass flux $G = 3400\ \mathrm{kg/(m^2\cdot s)}$ through a subchannel flow area $A_{flow} = 8.8\times10^{-5}\ \mathrm{m^2}$. The channel's total thermal power is $\dot Q_{ch} = 60\ \mathrm{kW}$. Find the outlet temperature. Use $c_p \approx 5.4\ \mathrm{kJ/(kg\cdot K)}$ (compressed water near $300\ ^\circ\mathrm{C}$, $15\ \mathrm{MPa}$).

Mass flow rate:

$$\dot m = G\, A_{flow} = 3400 \times 8.8\times10^{-5} = 0.30\ \mathrm{kg/s}.$$

Thermal freight capacity:

$$\dot m c_p = 0.30 \times 5.4 = 1.62\ \mathrm{kW/K}.$$

Inlet-to-outlet rise and outlet temperature:

$$\Delta T = \frac{\dot Q_{ch}}{\dot m c_p} = \frac{60}{1.62} = 37\ \mathrm{K}, \qquad T_{out} = T_{in} + \Delta T = 290 + 37 = 327\ ^\circ\mathrm{C}.$$

*Check.* Units: $\mathrm{kW}/(\mathrm{kW/K}) = \mathrm{K}$ ✓. Sanity: $T_{sat}$ at $15.5\ \mathrm{MPa}$ is $\approx 345\ ^\circ\mathrm{C}$ (see [`engineering-thermodynamics` 1.2](../../engineering-thermodynamics/lessons/01-02-phase-behavior-pure-substance.md)), so the bulk coolant stays subcooled by $\sim 18\ \mathrm{K}$ at the outlet — single-phase analysis is valid, exactly what a PWR is designed to guarantee. And a $\sim 37\ \mathrm{K}$ core rise matches the real PWR ballpark (inlet $\sim 290$, outlet $\sim 325\ ^\circ\mathrm{C}$). ✓ Notice we never needed the power *shape* — only the total.

**Example 2 (uniform vs. cosine — same rise, different slope).** Take the same channel ($\dot m c_p = 1.62\ \mathrm{kW/K}$, $\dot Q_{ch} = 60\ \mathrm{kW}$) with active length $L = 3.66\ \mathrm{m}$. Compare a uniform power profile to a cosine one.

*Uniform:* $q'(z) = \bar q' = \dot Q_{ch}/L = 60/3.66 = 16.4\ \mathrm{kW/m}$, constant. The temperature climbs as a straight line with constant slope

$$\frac{dT_b}{dz} = \frac{\bar q'}{\dot m c_p} = \frac{16.4}{1.62} = 10.1\ \mathrm{K/m} \quad\Longrightarrow\quad \Delta T = 10.1 \times 3.66 = 37\ \mathrm{K}.$$

*Cosine:* the same total power now peaks at the midplane. The peak-to-average of a bare cosine is $q'_{max}/\bar q' = \pi/2 \approx 1.57$ (the axial peaking factor of [1.5](01-05-hot-channel-hot-spot-factors.md)), so $q'_{max} = 1.57 \times 16.4 = 25.8\ \mathrm{kW/m}$. The slope is steepest at the midplane ($z=0$, $\cos 0 = 1$):

$$\left.\frac{dT_b}{dz}\right|_{z=0} = \frac{q'_{max}}{\dot m c_p} = \frac{25.8}{1.62} = 15.9\ \mathrm{K/m},$$

i.e. $\pi/2 \approx 1.57\times$ steeper than the uniform case there, and tapering to nearly zero at both ends. Yet the *total* rise is unchanged:

$$\Delta T = \frac{2 q'_{max} L}{\pi\, \dot m c_p} = \frac{2 \times 25.8 \times 3.66}{\pi \times 1.62} = \frac{188.9}{5.09} = 37\ \mathrm{K}.$$

*Check.* Both profiles give $T_{out} = 327\ ^\circ\mathrm{C}$ — the boxed result guarantees it, since both carry $60\ \mathrm{kW}$. The physical payoff: for the cosine, the coolant is heating fastest exactly where the wall heat flux is highest (the midplane), which is why the *hottest wall* sits **downstream** of the midplane — a bit of already-warmed coolant meets a still-strong (though past-peak) flux. That offset is the crux of Boss problem 1, and we pin it down in [2.2](02-02-convective-heat-transfer-film-drop.md). ✓

## Watch out

- **You might think the outlet temperature depends on where the power is concentrated.** For a *fixed total power and flow*, it does not — the integral collapses to $\dot Q_{ch}/(\dot m c_p)$ regardless of shape. Shape controls the *local* slope and hence *where* the peak wall temperature lands, not the coolant's final temperature.
- **You might use velocity where you should use mass flux.** As the coolant heats (and especially once it boils), density $\rho$ drops, so velocity $u_m = G/\rho$ *rises* up the channel even though $\dot m$ and $G$ are constant. Balances and correlations are written in $G$ precisely so you don't have to chase a changing $\rho$.
- **You might reach for $c_p\,\Delta T$ once boiling starts.** At saturation, heat goes into latent enthalpy at (nearly) constant temperature, so $c_p\,dT$ badly under-counts the energy. Switch to the enthalpy form $\dot m\,dh = q'\,dz$ the moment two phases appear (Module 3).
- **You might confuse bulk temperature with wall or centerline temperature.** $T_b$ is the flow-averaged "cup-mixed" value that carries the enthalpy; the wall is hotter by the film drop, the fuel centerline hotter still. Only $T_b$ belongs in the energy balance.

## One-liner

> Coolant temperature is a running integral of the heat it has passed: $\dot m c_p\,dT_b = q'\,dz$, so the total rise is $\dot Q_{ch}/(\dot m c_p)$ (shape-blind) while the local slope tracks the power (steepest at the cosine midplane).

## Problems

**P1 (🟢)** A coolant channel carries $\dot m = 0.25\ \mathrm{kg/s}$ of water, $c_p = 5.4\ \mathrm{kJ/(kg\cdot K)}$, and produces $\dot Q_{ch} = 54\ \mathrm{kW}$. The inlet is at $288\ ^\circ\mathrm{C}$. Find the outlet bulk temperature. If the flow area is $A_{flow} = 9.0\times10^{-5}\ \mathrm{m^2}$, what is the mass flux $G$?

**P2 (🟡)** The channel of P1 has a cosine axial power shape over $L = 3.6\ \mathrm{m}$. (a) What is the peak linear rating $q'_{max}$? (b) At what rate ($\mathrm{K/m}$) is the coolant temperature climbing at the channel midplane, and how does that compare to the average slope $\Delta T/L$?

**P3 (🔴)** A channel is heated by a cosine profile $q'(z) = q'_{max}\cos(\pi z/L)$, $z\in[-L/2,L/2]$. At what elevation $z$ has the coolant absorbed *half* of the total channel power (i.e. $T_b(z) - T_{in}$ is half the total rise)? Is that above or below the midplane, and why does that make physical sense?

<details>
<summary>Solutions</summary>

**P1** Thermal freight capacity $\dot m c_p = 0.25 \times 5.4 = 1.35\ \mathrm{kW/K}$. Rise:

$$\Delta T = \frac{\dot Q_{ch}}{\dot m c_p} = \frac{54}{1.35} = 40\ \mathrm{K} \quad\Longrightarrow\quad T_{out} = 288 + 40 = 328\ ^\circ\mathrm{C}.$$

Mass flux:

$$G = \frac{\dot m}{A_{flow}} = \frac{0.25}{9.0\times10^{-5}} = 2.78\times10^{3}\ \mathrm{kg/(m^2\cdot s)}.$$

*Check.* $\mathrm{kW}/(\mathrm{kW/K}) = \mathrm{K}$ ✓; $\mathrm{(kg/s)/m^2} = \mathrm{kg/(m^2\cdot s)}$ ✓. A $\sim 40\ \mathrm{K}$ rise and $G\sim 2800$ are both in the PWR range, and $328\ ^\circ\mathrm{C}$ sits below $T_{sat}\approx 345\ ^\circ\mathrm{C}$ — subcooled. ✓

**P2** (a) Total power fixes the average rating $\bar q' = \dot Q_{ch}/L = 54/3.6 = 15.0\ \mathrm{kW/m}$. For a bare cosine the peak-to-average is $\pi/2$:

$$q'_{max} = \frac{\pi}{2}\,\bar q' = 1.571 \times 15.0 = 23.6\ \mathrm{kW/m}.$$

(b) Midplane slope uses the peak rating:

$$\left.\frac{dT_b}{dz}\right|_{z=0} = \frac{q'_{max}}{\dot m c_p} = \frac{23.6}{1.35} = 17.5\ \mathrm{K/m}.$$

The average slope is $\Delta T/L = 40/3.6 = 11.1\ \mathrm{K/m}$. The ratio is $17.5/11.1 = 1.57 = \pi/2$ — the midplane slope is exactly the peaking factor times the average, as it must be since slope $\propto q'$.

*Check.* Units $\mathrm{(kW/m)}/\mathrm{(kW/K)} = \mathrm{K/m}$ ✓. The midplane slope exceeds the average and the ends are gentler, so the two average out over the length — consistent with the same $40\ \mathrm{K}$ total from P1. ✓

**P3** From the cosine result, $T_b(z) - T_{in} = \dfrac{q'_{max}L}{\pi\,\dot m c_p}\left[1 + \sin(\pi z/L)\right]$, and the total rise (at $z=L/2$) corresponds to the bracket equal to $2$. Half the rise means the bracket equals $1$:

$$1 + \sin\!\left(\frac{\pi z}{L}\right) = 1 \quad\Longrightarrow\quad \sin\!\left(\frac{\pi z}{L}\right) = 0 \quad\Longrightarrow\quad z = 0.$$

So the coolant has absorbed exactly half the total power at the **midplane** — the boundary between the two symmetric halves of the cosine. Physically: a cosine is symmetric about $z=0$, so equal power is generated below and above the midplane; the coolant, integrating from the bottom, reaches the halfway mark right where the two halves meet.

*Check.* By symmetry the answer *had* to be $z=0$ — any other point would break the mirror symmetry of the cosine. Note the temperature *profile* is not symmetric (it is an S-curve rising from $T_{in}$), but the *increment* $T_b - T_{in}$ reaching its half-value at the midplane is the symmetry of the underlying power, not of $T_b$ itself. ✓

</details>

## Flashback

**From Lesson 1.2 (Conduction with a heat source in a fuel pin):** At the highest-power node of Example 2 the pin runs at a local linear rating $q' = 25\ \mathrm{kW/m}$. Treating the $\mathrm{UO_2}$ pellet as having uniform conductivity $k_f = 3\ \mathrm{W/(m\cdot K)}$, find the centerline-to-surface temperature drop across the pellet.

<details>
<summary>Solution</summary>

For a solid cylindrical pellet with a uniform volumetric source and uniform $k$, the pellet-only drop depends *only* on the linear rating (the radius cancels):

$$T_0 - T_s = \frac{q'}{4\pi k_f} = \frac{25\,000}{4\pi \times 3} = \frac{25\,000}{37.70} = 663\ \mathrm{K}.$$

*Check.* Units: $\mathrm{(W/m)}/\mathrm{(W/(m\cdot K))} = \mathrm{K}$ ✓. Magnitude: a $\sim 660\ \mathrm{K}$ pellet drop at $25\ \mathrm{kW/m}$ is characteristic of $\mathrm{UO_2}$'s poor conductivity — and it dwarfs the $\sim 37\ \mathrm{K}$ coolant rise of this lesson, which is why the fuel, not the coolant, is where the temperature budget is spent. (In reality $k$ falls with temperature, so the true drop is somewhat larger — that is the integral $\int k\,dT$ correction from [`nuclear-materials` 3.2](../../nuclear-materials/lessons/03-02-fuel-temperature-profile-restructuring.md).) ✓

</details>

## Connections

- **Backward:** this is the coolant-side companion to [1.4](01-04-axial-temperature-profile-channel.md), which sketched fuel, clad, and coolant temperatures up the channel — here we derive the coolant curve rigorously. It is the differential form of the algebraic SFEE $\dot Q = \dot m c_p\,\Delta T$ from [`engineering-thermodynamics` 2.3](../../engineering-thermodynamics/lessons/02-03-mass-energy-balance-control-volumes.md). The cosine shape and the $\pi/2$ peaking factor trace back to [1.1](01-01-power-distribution-volumetric-source.md) and [1.5](01-05-hot-channel-hot-spot-factors.md).
- **Forward:** $T_b(z)$ is the reference temperature for the convective film drop $q'' = h(T_{wall}-T_b)$ in [2.2](02-02-convective-heat-transfer-film-drop.md); stacking that on the conduction chain gives the full radial budget in [2.4](02-04-full-radial-temperature-drop.md). The enthalpy form seeds quality $x = (h-h_f)/h_{fg}$ in [3.3](03-03-quality-void-fraction-slip.md). Directly feeds Boss problem 2 (see [syllabus](../syllabus.md)).
- **Sideways:** the mixed-mean bulk temperature and the differential energy balance are the same construction used for [internal forced convection](../../heat-transfer/lessons/03-04-internal-forced-convection.md) in the heat-transfer course — a heated pipe is a heated pipe, whether the wall flux comes from an electric heater or a fissioning fuel pin.
