# Heat Transfer · Lesson 4.3: View factors and radiation exchange

> ⏱ ~15 min · Module 4: Radiation and heat exchangers · Builds on: [4.2 Real surfaces: emissivity and Kirchhoff](04-02-real-surfaces-emissivity-kirchhoff.md), [1.4 Thermal resistance networks](01-04-thermal-resistance-networks.md) · Unlocks: Boss problem 4(c) (radiation loss off a header) and radiation shields in fusion/reactor blankets

## Why this matters

Lesson [4.2](04-02-real-surfaces-emissivity-kirchhoff.md) told you how well a single surface emits and absorbs. But radiation is a *two-body* transaction: a turbine blade trades photons with the combustor around it, a cryostat wall trades with the vessel outside it, a person trades with the walls of a cold room. Two things now enter that a single-surface law can't capture. First, **geometry** — a small surface tucked in a corner "sees" its neighbor differently than one facing it head-on, and only the fraction of radiation that actually *lands* on the other surface counts. Second, **multiple bounces** — real surfaces reflect, so radiation ricochets around an enclosure before it's finally absorbed. This lesson gives you the bookkeeping for both, and then does something satisfying: it wires the whole mess into the *exact same resistance network* you built for conduction in [1.4](01-04-thermal-resistance-networks.md). Radiation exchange becomes a circuit you can solve by hand — and it's the tool behind radiation shields, the reason a Thermos works and a fusion blanket survives.

## The idea

Two questions, two ideas.

**"What fraction of my radiation reaches you?"** — the **view factor**. Stand a surface up and let it radiate in every direction. Some of those rays hit the surface you care about; most fly off elsewhere. The view factor $F_{12}$ is simply *the fraction of radiation leaving surface 1 that lands directly on surface 2*. It's pure geometry — it depends only on the shapes, sizes, and orientations of the surfaces, **not** on their temperatures or how black they are. Two plates facing each other with no gaps to the side: everything leaving one lands on the other, $F_{12}=1$. A tiny thermocouple bead inside a big furnace: it's convex, so nothing it emits comes back to itself, and effectively all of it lands on the enclosure, again $F_{12}=1$. A crumpled or cupped surface, though, can see *itself* — a share of its own radiation lands back on another part of it.

**"How do I handle reflections?"** — the **radiosity**, and then a **circuit**. Instead of tracking infinite bounces, define one clean quantity: the **radiosity** $J$ is *all* the radiation leaving a surface per unit area — what it emits *plus* what it reflects. Every photon crossing the gap carries radiosity, not just emitted energy. The trick (this is the beautiful part) is that once you think in radiosities, the radiation problem factors into **resistances in series**, exactly like a wall with contact resistance:

- Getting from a surface's ideal blackbody power $E_b=\sigma T^4$ *out through its own non-blackness* costs a **surface resistance** — the penalty for $\varepsilon<1$.
- Getting radiosity *across the geometric gap* from one surface to another costs a **space resistance** — the penalty for imperfect view.

Heat flows through surface-R, then space-R, then surface-R, and the driving "voltage" is the difference in $\sigma T^4$. If you can solve a three-resistor circuit, you can solve two-surface radiation.

## The formal version

**View factor.** $F_{ij}$ = fraction of radiation leaving surface $i$ that strikes surface $j$ directly (dimensionless, $0\le F_{ij}\le 1$). Three rules do almost all the work:

- **Summation (enclosure rule).** For any surface $i$ in a complete enclosure of $N$ surfaces, $\displaystyle\sum_{j=1}^{N} F_{ij}=1.$ *In words: everything leaving surface $i$ has to land somewhere in the enclosure — the fractions must add to one.* (Include $F_{ii}$ if the surface can see itself.)
- **Reciprocity.** $\displaystyle A_i F_{ij}=A_j F_{ji}.$ *In words: the total radiation traveling $i\to j$ and the total traveling $j\to i$ are geometrically linked through the areas — so you rarely have to compute both.* Here $A_i$ is the area of surface $i$ (m²).
- **Superposition.** If surface $j$ is split into pieces, $F_{i(j)}=\sum_{\text{pieces}} F_{i,\text{piece}}$ — view factors to a combined target add.

Two cases you should recognize instantly: **infinite parallel plates**, $F_{12}=1$ (each sees only the other); a **small convex body (1) inside a large enclosure (2)**, $F_{12}=1$ (it sees only the enclosure). A **convex or flat** surface never sees itself: $F_{ii}=0$. A **concave** surface does: $F_{ii}>0$.

**Radiosity and the network.** Define $J_i$ = total radiation leaving surface $i$ per unit area (W/m²) = emitted + reflected. For an opaque, gray, diffuse surface at temperature $T_i$ with emissivity $\varepsilon_i$, area $A_i$, the net rate of radiation *leaving* the surface can be written two ways, and setting them equal gives the network:

$$q_i=\frac{E_{b,i}-J_i}{\dfrac{1-\varepsilon_i}{\varepsilon_i A_i}}, \qquad E_{b,i}=\sigma T_i^4.$$

*In words: the net heat off surface $i$ is the drop from its blackbody potential $E_{b,i}$ to its radiosity $J_i$, divided by the **surface resistance** $R_i=\dfrac{1-\varepsilon_i}{\varepsilon_i A_i}$ (units $\mathrm{m^{-2}}$).* A blackbody ($\varepsilon=1$) has zero surface resistance — its radiosity *is* its blackbody power. And the net radiation exchanged between two surfaces is

$$q_{ij}=\frac{J_i-J_j}{\dfrac{1}{A_i F_{ij}}},$$

with **space resistance** $R_{ij}=\dfrac{1}{A_i F_{ij}}=\dfrac{1}{A_j F_{ji}}$ (reciprocity makes it symmetric). *In words: radiosity flows from surface to surface across a resistance set purely by geometry.* Wire these in series — $E_{b,1}\!\to\!$ surface-R $\to J_1\!\to\!$ space-R $\to J_2\to$ surface-R $\to E_{b,2}$ — and for an **enclosure of just two surfaces** the whole current is

$$\boxed{\,q_{12}=\dfrac{\sigma\left(T_1^4-T_2^4\right)}{\dfrac{1-\varepsilon_1}{\varepsilon_1 A_1}+\dfrac{1}{A_1 F_{12}}+\dfrac{1-\varepsilon_2}{\varepsilon_2 A_2}}\,}$$

*In words: net radiation heat transfer equals the blackbody driving potential $\sigma(T_1^4-T_2^4)$ divided by the sum of two surface resistances and one space resistance in series* — with $\sigma=5.67\times10^{-8}\ \mathrm{W/(m^2\,K^4)}$ and **absolute** temperatures in kelvin (non-negotiable for the $T^4$ law).

## Picture

![Two gray surfaces drawn as a series resistor network: from the blackbody potential Eb1 through surface resistance (1-e1)/(e1 A1) to radiosity node J1, across the space resistance 1/(A1 F12) to J2, then through surface resistance (1-e2)/(e2 A2) to Eb2; coral marks surface resistances, blue marks the space resistance](assets/04-03-fig1.svg)

## Worked examples

**Example 1 (two large parallel gray plates — the workhorse result).** Two large parallel plates face each other. Plate 1 is at $T_1=800\ \mathrm{K}$, plate 2 at $T_2=400\ \mathrm{K}$; both have $\varepsilon_1=\varepsilon_2=0.8$ and equal area $A_1=A_2=A$. Find the net radiative flux $q''_{12}=q_{12}/A$ from 1 to 2.

For large parallel plates $F_{12}=1$. Divide the boxed formula through by $A$ (all areas equal to $A$):

$$q''_{12}=\frac{\sigma(T_1^4-T_2^4)}{\dfrac{1-\varepsilon_1}{\varepsilon_1}+1+\dfrac{1-\varepsilon_2}{\varepsilon_2}}=\frac{\sigma(T_1^4-T_2^4)}{\dfrac{1}{\varepsilon_1}+\dfrac{1}{\varepsilon_2}-1}.$$

That algebra — $\tfrac{1-\varepsilon}{\varepsilon}+1=\tfrac{1}{\varepsilon}$ on each side — collapses the three resistances into the famous **parallel-plate denominator** $\tfrac{1}{\varepsilon_1}+\tfrac{1}{\varepsilon_2}-1$. Now the numbers. Fourth powers: $800^4=4.096\times10^{11}$, $400^4=2.56\times10^{10}$, so

$$T_1^4-T_2^4=4.096\times10^{11}-0.256\times10^{11}=3.84\times10^{11}\ \mathrm{K^4}.$$

$$\sigma(T_1^4-T_2^4)=5.67\times10^{-8}\times3.84\times10^{11}=2.177\times10^{4}\ \mathrm{W/m^2}.$$

Denominator: $\tfrac{1}{0.8}+\tfrac{1}{0.8}-1=1.25+1.25-1=1.5.$ Therefore

$$q''_{12}=\frac{2.177\times10^{4}}{1.5}\approx 1.45\times10^{4}\ \mathrm{W/m^2}\;(\approx 14.5\ \mathrm{kW/m^2}).$$

*Check.* Units: $\mathrm{\tfrac{W}{m^2K^4}\cdot K^4}=\mathrm{W/m^2}$ ✓, absolute K used ✓. Sanity: two *black* plates would exchange the full numerator, $21.8\ \mathrm{kW/m^2}$; the real gray plates transfer only $1/1.5=0.67$ of that. The emissivity penalty is exactly the two surface resistances doing their job.

**Example 2 (insert one radiation shield — the shield mechanism).** Slide a thin shield of emissivity $\varepsilon_s=0.8$ (same as the plates, both its faces) into the gap between the plates of Example 1. What happens to the flux?

The shield adds a floating surface in the circuit. Radiation now runs through **five** resistances in series — plate 1's surface-R, a space-R, the shield's *two* surface-R's (one per face), another space-R, plate 2's surface-R. Per unit area ($F=1$ across every gap, all areas $=A$), tally the resistances (each surface-R is $\tfrac{1-\varepsilon}{\varepsilon}=\tfrac{0.2}{0.8}=0.25$, each space-R is $1$):

$$R_{\text{tot}}''=\underbrace{0.25}_{\text{plate 1}}+\underbrace{1}_{\text{gap}}+\underbrace{0.25+0.25}_{\text{shield, 2 faces}}+\underbrace{1}_{\text{gap}}+\underbrace{0.25}_{\text{plate 2}}=3.0.$$

The bare-plate case had $R''=1.5$. Same driving potential $\sigma(T_1^4-T_2^4)=2.177\times10^4\ \mathrm{W/m^2}$, so

$$q''_{\text{shield}}=\frac{2.177\times10^{4}}{3.0}\approx 7.26\times10^{3}\ \mathrm{W/m^2}\;(\approx 7.3\ \mathrm{kW/m^2}).$$

The flux is **halved** — cut to $1.5/3.0$ of the original. That's the shield mechanism: a shield doesn't "reflect heat back" by magic, it **inserts two more surface resistances in series**, roughly doubling the total resistance. With equal emissivities everywhere, $N$ shields multiply the resistance by $(N+1)$, so the flux drops by the factor

$$\frac{q''_N}{q''_0}=\frac{1}{N+1}.$$

*Check.* Units cancel to W/m² ✓. Sanity: one shield → factor $\tfrac12$, matching the $1/(N+1)$ rule at $N=1$. Notice the shield floats at whatever temperature makes the current through both gaps equal (here, by symmetry of resistances, near the radiative mean) — you never had to know it to get the flux, because series resistors don't care about the intermediate node's potential.

## Watch out

- **You might think the view factor depends on how hot or how black the surfaces are.** It's *pure geometry* — shapes, sizes, orientations, and separation only. Temperatures and emissivities enter later, through the $\sigma T^4$ potentials and the surface resistances, never through $F_{ij}$. Compute view factors once for a fixed configuration and reuse them at any temperature.
- **You might assume $F_{ii}=0$ always, so summation is trivial.** True only for **flat or convex** surfaces, which can't see themselves. A **concave** surface (a cavity, a cupped dish, the inside of a tube) radiates onto itself, so $F_{ii}>0$ and you must keep it in the sum $\sum_j F_{ij}=1$. Forgetting a self-view term is the classic enclosure-algebra slip.
- **You might think more shields is the only way to cut radiation.** The $1/(N+1)$ rule assumes every surface has the *same* emissivity. A single **low-emissivity** shield (polished aluminum, $\varepsilon\approx0.05$) crushes the flux far harder, because its surface resistance $\tfrac{1-\varepsilon}{\varepsilon}$ blows up as $\varepsilon\to0$ — one shiny foil can beat dozens of black ones (you'll prove this in P3). That's why superinsulation and cryostats use stacks of *aluminized* foil, not just many layers.

## One-liner

> Radiation exchange = geometry (view factors) wired into the same series circuit as conduction — a surface resistance $\tfrac{1-\varepsilon}{\varepsilon A}$ at each surface, a space resistance $\tfrac{1}{AF}$ across each gap, driven by $\sigma(T_1^4-T_2^4)$; a shield just adds two more surface resistances in series.

## Problems

**P1 (🟢)** A long cylinder (surface 1, radius $r_1=5\ \mathrm{cm}$) sits concentrically inside a long cylindrical shell (surface 2, radius $r_2=10\ \mathrm{cm}$). Using the view-factor rules only (no temperatures), find $F_{12}$, $F_{21}$, and $F_{22}$. (Take a length $L$; the end caps are negligible.)

**P2 (🟡)** Now put numbers on that geometry over a length $L=1\ \mathrm{m}$: the inner cylinder is at $T_1=500\ \mathrm{K}$ with $\varepsilon_1=0.8$, the shell at $T_2=300\ \mathrm{K}$ with $\varepsilon_2=0.4$. Find the net radiation heat rate $q_{12}$ (in W) from the inner cylinder to the shell.

**P3 (🔴)** Back to the two large parallel plates of Example 1 ($\varepsilon_1=\varepsilon_2=0.8$). Instead of a matching shield, insert one **polished-aluminum** shield with $\varepsilon_s=0.05$ on both faces. (a) By what factor does the flux drop versus the bare plates? (b) How many *ordinary* $\varepsilon=0.8$ shields would you need to achieve the same reduction? Comment on what this says about superinsulation.

<details>
<summary>Solutions</summary>

**P1** The inner cylinder is **convex** — it cannot see itself — so $F_{11}=0$, and by summation $F_{11}+F_{12}=1\Rightarrow F_{12}=1$ (everything it emits lands on the shell). Reciprocity gives $F_{21}$:

$$A_1F_{12}=A_2F_{21}\ \Rightarrow\ F_{21}=\frac{A_1}{A_2}F_{12}=\frac{2\pi r_1 L}{2\pi r_2 L}\cdot 1=\frac{r_1}{r_2}=\frac{5}{10}=0.5.$$

Summation on the shell: $F_{21}+F_{22}=1\Rightarrow F_{22}=1-0.5=0.5$. The shell is **concave**, so a nonzero self-view $F_{22}=0.5$ is exactly right — half of what the shell emits inward misses the inner cylinder and lands back on the shell.

*Check.* All view factors are in $[0,1]$ ✓; $F_{12}=1$ because the inner body sees nothing but the shell ✓; $F_{22}>0$ because a concave surface sees itself ✓.

**P2** Two-surface enclosure. $F_{12}=1$ from P1. Areas: $A_1=2\pi(0.05)(1)=0.3142\ \mathrm{m^2}$, $A_2=2\pi(0.10)(1)=0.6283\ \mathrm{m^2}$. Driving potential:

$$\sigma(T_1^4-T_2^4)=5.67\times10^{-8}\,(500^4-300^4)=5.67\times10^{-8}\,(6.25\times10^{10}-8.1\times10^{9})=5.67\times10^{-8}\times5.44\times10^{10}=3084\ \mathrm{W/m^2}.$$

Resistances (units $\mathrm{m^{-2}}$):

$$R_1=\frac{1-\varepsilon_1}{\varepsilon_1 A_1}=\frac{0.2}{0.8\times0.3142}=0.796,\quad R_{12}=\frac{1}{A_1F_{12}}=\frac{1}{0.3142}=3.183,\quad R_2=\frac{1-\varepsilon_2}{\varepsilon_2 A_2}=\frac{0.6}{0.4\times0.6283}=2.387.$$

Sum $=0.796+3.183+2.387=6.366\ \mathrm{m^{-2}}$. Then

$$q_{12}=\frac{\sigma(T_1^4-T_2^4)}{\sum R}=\frac{3084}{6.366}\approx 484\ \mathrm{W}.$$

*Check.* Units: $\mathrm{(W/m^2)}/\mathrm{(1/m^2)}=\mathrm{W}$ ✓. Sanity: if both surfaces were black, $q=A_1\sigma(T_1^4-T_2^4)=0.3142\times3084\approx 969\ \mathrm{W}$; the gray surfaces (and the shell's larger area diluting its resistance) cut it to about half — reasonable, and the shell's finite emissivity $0.4$ is the biggest single resistance.

**P3** All resistances per unit area; each surface-R $=\tfrac{1-\varepsilon}{\varepsilon}$, each space-R $=1$ ($F=1$).

Bare plates: $R''_0=\tfrac{1}{\varepsilon_1}+\tfrac{1}{\varepsilon_2}-1=1.5$ (from Example 1).

With the $\varepsilon_s=0.05$ shield (two faces): the shield's two surface resistances are each $\tfrac{1-0.05}{0.05}=19$. Total

$$R''_s=\underbrace{0.25}_{\text{plate 1}}+\underbrace{1}_{\text{gap}}+\underbrace{19+19}_{\text{shield}}+\underbrace{1}_{\text{gap}}+\underbrace{0.25}_{\text{plate 2}}=40.5.$$

(a) Since flux $\propto 1/R''$, the reduction factor is

$$\frac{q''_s}{q''_0}=\frac{R''_0}{R''_s}=\frac{1.5}{40.5}\approx 0.037,$$

so the flux drops to about **3.7 %** of the bare value — a factor of ~27, versus the mere factor of 2 an $\varepsilon=0.8$ shield gave.

(b) For $N$ ordinary $\varepsilon=0.8$ shields, $R''_N=(N+1)(1.5)$ and the reduction is $1/(N+1)$. To match $R''_s=40.5$:

$$N+1=\frac{40.5}{1.5}=27\ \Rightarrow\ N=26.$$

One aluminum foil does the work of **26** black shields. That's the whole idea behind multilayer superinsulation (and vacuum-flask silvering, and cryostat radiation shields): low emissivity, not brute layer count, is what strangles radiative transport. Add a vacuum to kill conduction/convection and only this residual radiation is left — which is precisely why the foil is aluminized.

*Check.* Reduction factors are dimensionless ✓ and $<1$ ✓. Sanity: as $\varepsilon_s\to0$ the shield's surface-R $\to\infty$ and the flux $\to0$ — a perfect mirror shield would block radiation entirely, consistent with the trend.

</details>

## Flashback

**From Lesson [4.2](04-02-real-surfaces-emissivity-kirchhoff.md) (real surfaces, net exchange with large surroundings):** An oxidized steel pipe ($\varepsilon=0.7$) runs through a large room whose walls are at $T_{sur}=300\ \mathrm{K}$. The pipe's outer surface is at $T_s=350\ \mathrm{K}$. Find the net radiative flux $q''$ the pipe loses to the room, and explain in one line why the room's *area* never entered.

<details>
<summary>Solution</summary>

The pipe is a small convex body in a large enclosure, so $F=1$ and — this is today's lesson foreshadowing 4.2's result — the enclosure's surface resistance $\tfrac{1-\varepsilon_2}{\varepsilon_2 A_2}\to0$ as $A_2\to\infty$. The two-surface formula collapses to $q''=\varepsilon\,\sigma\,(T_s^4-T_{sur}^4)$:

$$q''=0.7\times5.67\times10^{-8}\times(350^4-300^4)=0.7\times5.67\times10^{-8}\times(1.5006\times10^{10}-8.1\times10^{9}).$$

$$350^4-300^4=6.906\times10^{9}\ \mathrm{K^4}\ \Rightarrow\ q''=0.7\times5.67\times10^{-8}\times6.906\times10^{9}\approx 274\ \mathrm{W/m^2}.$$

Why the room area drops out: a huge enclosure absorbs essentially everything the pipe sends and reflects a negligible fraction back, so its surface resistance vanishes and only the pipe's own emissivity governs the exchange — the room behaves as a perfect blackbody at $T_{sur}$ regardless of its finish.

*Check.* Units $\mathrm{\tfrac{W}{m^2K^4}\cdot K^4}=\mathrm{W/m^2}$ ✓, absolute K ✓. Sanity: a 50 K gap around 300–350 K driving a few hundred W/m² is the same ballpark as the room-temperature radiation in Lesson [1.1](01-01-three-modes-fouriers-law.md)'s hot-plate example — radiation is real but modest until temperatures climb.

</details>

## Connections

- **Backward:** this reuses [1.4](01-04-thermal-resistance-networks.md)'s resistor-network idea wholesale — series resistances, a driving potential, $q=\Delta(\text{potential})/\sum R$ — only now the "potential" is $\sigma T^4$ and the resistances split into a *material* penalty (surface R, from $\varepsilon<1$, the [4.2](04-02-real-surfaces-emissivity-kirchhoff.md) story) and a *geometric* penalty (space R, from $F<1$). It also completes [4.1](04-01-blackbody-radiation.md): blackbodies are just the $\varepsilon=1$ limit where every surface resistance vanishes.
- **Forward:** the two-surface result and the small-body-in-enclosure form feed directly into **Boss problem 4(c)**, where an uninsulated exchanger header loses heat by radiation to the surroundings alongside its convective duty — you'll estimate $q_{rad}=\varepsilon_s\sigma A_s(T_{h,i}^4-T_{sur}^4)$ and judge whether it's negligible. The heat-exchanger lessons ([4.4](04-04-heat-exchangers-lmtd.md) onward) then treat the dominant convective path, with radiation as the correction this lesson lets you size.
- **Sideways:** the radiation shield is the thermal cousin of an **electrical voltage divider** — insert impedance in series and the current drops predictably. In fusion and fission engineering the same math sizes the **radiation shields and multilayer blankets** that keep a plasma-facing or core-facing wall from cooking its supports: each foil layer is another pair of surface resistances, and low-emissivity coatings buy far more than extra layers, exactly as P3 shows. (Reactor thermal-hydraulics builds on this once that course exists.)
