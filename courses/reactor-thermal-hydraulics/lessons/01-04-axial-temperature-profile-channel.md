# Reactor Thermal-Hydraulics · Lesson 1.4: Axial temperature profile of a channel

> ⏱ ~15 min · Module 1: Core power and conduction in the fuel · Builds on: [1.1 Power distribution and the volumetric source](01-01-power-distribution-volumetric-source.md), [1.2 Conduction with a heat source](01-02-conduction-heat-source-fuel-pin.md), [1.3 The gap and cladding resistances](01-03-gap-cladding-resistances.md), [`engineering-thermodynamics` 2.3 (mass & energy balance)](../../engineering-thermodynamics/lessons/02-03-mass-energy-balance-control-volumes.md) · Unlocks: [1.5 Hot-channel factors](01-05-hot-channel-hot-spot-factors.md), Module 2, **Boss problem 1**

## Why this matters

So far you have stood at one elevation and pushed heat *sideways* — out of the pellet, across the gap and clad, into the coolant (1.2, 1.3). But the coolant is a river: every centimeter it climbs, it has already absorbed the heat from everything below it, so it arrives *warmer* at the next slice. Stack those slices and a question appears that no single-slice analysis can answer: **where up the channel is the fuel hottest, and where is the clad hottest?** The naive guess — "at the midplane, where the power peaks" — is wrong, and wrong in a way that matters: the clad and the fuel centerline peak at *different* elevations, both **above** the midplane. Getting that location right is what keeps the hottest spot of the hottest pin below its melt and boiling limits. This lesson is the spine of **Boss problem 1**.

## The idea

Two things fight as you go up the channel. The **power** follows a cosine — strong at the middle, fading toward the ends. The **coolant temperature** only ever climbs, because heat, once added, stays added (the river never cools). Any solid temperature is *coolant temperature plus a local drop*, and that local drop is proportional to the local power (a resistance times $q'$). So:

$$\text{solid temp} = \underbrace{T_b(z)}_{\text{always rising}} + \underbrace{q'(z)\,R'}_{\text{cosine, falling past midplane}}.$$

Just above the midplane the cosine has *barely* started to fall, but the coolant is *still climbing hard* — so the sum keeps rising a while longer. The peak lands wherever the falling flux exactly cancels the rising coolant. Here is the punchline you will prove: a component with a **large** resistance (the fuel centerline, dominated by pellet conduction) leans heavily on the cosine, so its peak sits *close* to the midplane. A component with a **small** resistance (the clad surface, only a thin film away from the coolant) leans on the coolant, so its peak drifts *far* downstream. Same channel, two different hot elevations.

## The formal version

Put $z=0$ at the core midplane; the channel runs from inlet $z=-L/2$ to outlet $z=+L/2$, with $L$ the active height (m). From [1.1](01-01-power-distribution-volumetric-source.md), the linear power (W/m) follows

$$q'(z) = q'_{max}\cos\!\left(\frac{\pi z}{L_e}\right),$$

where $q'_{max}$ is the peak rating (W/m) and $L_e$ (m) is the **extrapolated** height — slightly larger than $L$ so the flux need not vanish at the physical ends. *In words: power is a cosine hump centered on the middle of the core.* For clean numbers we take $L_e = L$ below (so $q'=0$ exactly at the ends); the method is identical for $L_e>L$.

**Coolant bulk temperature.** A steady-flow energy balance on a slice of channel (the SFEE of [`engineering-thermodynamics` 2.3](../../engineering-thermodynamics/lessons/02-03-mass-energy-balance-control-volumes.md), no work, negligible KE/PE) says all the linear power goes into raising the coolant's enthalpy:

$$\dot m\,c_p\,\frac{dT_b}{dz} = q'(z),$$

with $\dot m$ the channel mass flow rate (kg/s), $c_p$ the coolant specific heat (J/(kg·K)), and $T_b(z)$ the **bulk** (mixed-mean) temperature (°C or K). *In words: the coolant heats up at a rate set by how much power hits it divided by its thermal throughput $\dot m c_p$.* Integrate from the inlet, using $\int\cos(\pi z/L_e)\,dz = (L_e/\pi)\sin(\pi z/L_e)$:

$$\boxed{\,T_b(z) = T_{in} + \frac{q'_{max}L_e}{\pi\,\dot m c_p}\left[\sin\!\left(\frac{\pi z}{L_e}\right) + \sin\!\left(\frac{\pi L}{2L_e}\right)\right].}$$

*In words: bulk temperature is an S-shaped sine — flat where the power is weak (the ends), steepest where the power is strong (the midplane).* It **never** decreases: $dT_b/dz = q'(z)/\dot m c_p > 0$ everywhere the power is positive. The full inlet-to-outlet rise (set $z=+L/2$) is

$$\Delta T_{coolant} = T_{out}-T_{in} = \frac{2\,q'_{max}L_e}{\pi\,\dot m c_p}\sin\!\left(\frac{\pi L}{2L_e}\right)\;\xrightarrow{L_e=L}\;\frac{2\,q'_{max}L}{\pi\,\dot m c_p}.$$

**Clad-surface and fuel-centerline temperatures.** From the resistance chain of [1.2](01-02-conduction-heat-source-fuel-pin.md)–[1.3](01-03-gap-cladding-resistances.md), each solid temperature is the bulk plus a *local* drop equal to $q'(z)$ times the resistance between it and the coolant:

$$T_{co}(z) = T_b(z) + q'(z)\,R'_{conv}, \qquad T_0(z) = T_b(z) + q'(z)\!\sum R',$$

where $R'_{conv}=\dfrac{1}{2\pi r_{co}h}$ is the convective film resistance alone (K·m/W), and $\sum R' = R'_f+R'_g+R'_c+R'_{conv}$ is the full coolant-to-centerline chain (fuel + gap + clad + film). *In words: the clad outer surface is one film-drop above the coolant; the fuel centerline is the whole chain above it.*

**Where does each peak?** Set the derivative to zero. Because $\dfrac{d}{dz}\big[T_b + q'R'\big] = \dfrac{q'(z)}{\dot m c_p} + R'\dfrac{dq'}{dz}$ and $\dfrac{dq'}{dz} = -q'_{max}\dfrac{\pi}{L_e}\sin(\pi z/L_e)$,

$$\frac{q'_{max}}{\dot m c_p}\cos\!\left(\frac{\pi z}{L_e}\right) = q'_{max}\frac{\pi R'}{L_e}\sin\!\left(\frac{\pi z}{L_e}\right)\;\Longrightarrow\;\boxed{\,\tan\!\left(\frac{\pi z_{peak}}{L_e}\right) = \frac{L_e}{\pi\,\dot m c_p\,R'}.}$$

*In words: the peak elevation is fixed by one dimensionless ratio — the channel's thermal throughput times its resistance, against its length.* Two consequences fall straight out:

- The right side is **positive**, so $z_{peak}>0$ for every component: **all peaks are above the midplane**. (At the midplane itself, $dq'/dz=0$ but the coolant is still climbing, so nothing has peaked yet.)
- Larger $R'$ makes the right side **smaller**, pushing $z_{peak}$ toward $0$. So the **fuel centerline** (largest $\sum R'$) peaks *nearest* the midplane; the **clad surface** (small $R'_{conv}$) peaks *further downstream*; the coolant itself ($R'=0$, $\tan\to\infty$) "peaks" only at the very outlet. **That is why the two hot spots sit at different elevations** — the answer to Boss 1.

## Picture

![Axial profiles up a coolant channel: coolant bulk T_b rises monotonically in an S; clad-surface T_co and fuel-centerline T_0 each peak above the midplane at different elevations; the cosine q'(z) is shown faintly. All three converge at the ends where the power vanishes.](assets/01-04-fig1.svg)

## Worked examples

Numbers: PWR-type channel, water at ~300 °C / 15.5 MPa with $c_p \approx 5.4\ \mathrm{kJ/(kg\cdot K)}$ (T&K property table). Peak rating $q'_{max}=40\ \mathrm{kW/m}$, active height $L=L_e=3.66\ \mathrm{m}$, channel flow $\dot m = 0.5\ \mathrm{kg/s}$, inlet $T_{in}=290\ \mathrm{^\circ C}$. Then $\dot m c_p = 0.5\times5400 = 2700\ \mathrm{W/K}$.

**Example 1 — coolant outlet temperature (integrate the cosine).** With $L_e=L$, $\sin(\pi L/2L_e)=\sin(\pi/2)=1$:

$$\Delta T_{coolant} = \frac{2\,q'_{max}L}{\pi\,\dot m c_p} = \frac{2\times 40000\times 3.66}{\pi\times 2700} = \frac{292800}{8482} = 34.5\ \mathrm{K}.$$

So $T_{out} = 290 + 34.5 = 324.5\ \mathrm{^\circ C}$ — comfortably below $T_{sat}(15.5\ \mathrm{MPa})\approx 345\ \mathrm{^\circ C}$, so the channel stays single-phase (Module 3's boiling waits its turn). Notice the midplane bulk temperature is exactly halfway up: $T_b(0)=T_{in}+\tfrac12\Delta T_{coolant}=307.3\ \mathrm{^\circ C}$, because the S-curve is antisymmetric about the middle.

*Check.* Units: $[q'_{max}L]/[\dot m c_p] = (\mathrm{W/m\cdot m})/(\mathrm{W/K}) = \mathrm{K}$ ✓. Sanity: a 40 kW/m hot channel dumping ~200 kW of integrated power into 0.5 kg/s of water should warm it tens of degrees — it does.

**Example 2 — where the clad is hottest (and why the fuel peaks elsewhere).** Take clad outer radius $r_{co}=4.75\ \mathrm{mm}$ and film coefficient $h=34000\ \mathrm{W/(m^2K)}$ (a typical PWR value; you will *derive* $h$ from Dittus–Boelter in [2.2](02-02-convective-heat-transfer-film-drop.md)). The film resistance is

$$R'_{conv} = \frac{1}{2\pi r_{co}h} = \frac{1}{2\pi(0.00475)(34000)} = 9.85\times10^{-4}\ \mathrm{K\cdot m/W}.$$

Clad-peak condition:

$$\tan\!\left(\frac{\pi z_{co}}{L_e}\right) = \frac{L_e}{\pi\,\dot m c_p\,R'_{conv}} = \frac{3.66}{\pi(2700)(9.85\times10^{-4})} = \frac{3.66}{8.36} = 0.438,$$

$$\frac{\pi z_{co}}{L_e} = \arctan(0.438) = 0.413\ \mathrm{rad}\;\Longrightarrow\; z_{co} = 0.413\times\frac{3.66}{\pi} = 0.48\ \mathrm{m}.$$

The clad is hottest **0.48 m above the midplane** — about a quarter of the way from center to top. Now the fuel centerline. Using the chain values from [1.2](01-02-conduction-heat-source-fuel-pin.md)–[1.3](01-03-gap-cladding-resistances.md) — $R'_f=\frac{1}{4\pi k_f}=0.0265$ (with $k_f\approx3$), $R'_g=\frac{1}{2\pi r_g h_g}=0.0065$ (gap $r_g=4.1$ mm, $h_g=6000$), $R'_c=\frac{\ln(r_{co}/r_{ci})}{2\pi k_c}=0.0012$ (Zircaloy $k_c=17$, $r_{ci}=4.18$ mm), plus $R'_{conv}=0.0010$ — the total is $\sum R' = 0.0352\ \mathrm{K\cdot m/W}$, dominated (~75%) by pellet conduction. Then

$$\tan\!\left(\frac{\pi z_0}{L_e}\right) = \frac{3.66}{\pi(2700)(0.0352)} = 0.0123\;\Longrightarrow\; z_0 = 0.0123\times\frac{3.66}{\pi} = 0.014\ \mathrm{m} \approx 1.4\ \mathrm{cm}.$$

**The fuel centerline peaks essentially at the midplane (1.4 cm above); the clad surface peaks 0.48 m higher up.** Same channel, same cosine, two hot spots 47 cm apart — because the fuel's huge conduction resistance chains its temperature to the flux peak, while the clad's thin film lets the rising coolant carry its peak downstream. That is Boss problem 1 in one calculation.

*Check.* Both offsets are positive (above midplane) and both are less than the half-height 1.83 m ✓. The ordering $z_0 < z_{co}$ follows because $\sum R' > R'_{conv}$, exactly as the boxed condition predicts.

## Watch out

- **You might think the fuel is hottest where the power is highest — at the midplane.** Almost, but not quite: the coolant is still warming there, so the true centerline peak sits a hair *above* midplane. It is close only because the fuel's resistance is enormous; drop that resistance and the peak marches downstream.
- **You might think the clad and fuel peak at the same place.** They cannot, unless their resistances are equal. Different $R'$ means different $\tan(\pi z_{peak}/L_e)$, hence different elevation. The larger-resistance component always peaks nearer the midplane.
- **You might forget that all three curves converge at the ends.** Where $q'\to 0$ (the channel ends, if $L_e=L$), every local drop $q'R'\to 0$, so fuel, clad, and coolant temperatures coincide there. The pin is only "hot inside" where power is being made.
- **You might plug the total flow into a single channel.** $\dot m$ here is the flow through *one* channel, not the whole core. Using core-total $\dot m$ understates $\Delta T$ by a factor of thousands.

## One-liner

> Every temperature is coolant-plus-a-cosine-drop, so every peak sits above midplane at $\tan(\pi z/L_e)=L_e/(\pi\dot m c_p R')$ — big resistance hugs the flux peak, small resistance rides the rising coolant downstream.

## Problems

**P1 (🟢)** A channel has $q'_{max}=35\ \mathrm{kW/m}$, $L=L_e=3.5\ \mathrm{m}$, $\dot m c_p = 2500\ \mathrm{W/K}$, and inlet $T_{in}=285\ \mathrm{^\circ C}$. Find the coolant outlet temperature and the bulk temperature at the midplane.

**P2 (🟡)** For that same channel, the clad-to-coolant film resistance is $R'_{conv}=1.1\times10^{-3}\ \mathrm{K\cdot m/W}$. Find the elevation of the peak clad-surface temperature, and confirm it lies above the midplane.

**P3 (🔴)** Still the same channel, with full coolant-to-centerline resistance $\sum R' = 0.033\ \mathrm{K\cdot m/W}$. (a) Find the elevation of the peak fuel-centerline temperature. (b) In one or two sentences, explain from the boxed peak condition why $z_0 < z_{co}$ *always* holds, regardless of the numbers.

<details>
<summary>Solutions</summary>

**P1** With $L_e=L$, $\sin(\pi L/2L_e)=1$:

$$\Delta T_{coolant} = \frac{2\,q'_{max}L}{\pi\,\dot m c_p} = \frac{2\times 35000\times 3.5}{\pi\times 2500} = \frac{245000}{7854} = 31.2\ \mathrm{K},$$

so $T_{out} = 285 + 31.2 = 316.2\ \mathrm{^\circ C}$. The midplane bulk temperature uses $\sin(0)+\sin(\pi/2)=1$:

$$T_b(0) = 285 + \frac{q'_{max}L_e}{\pi\,\dot m c_p}(1) = 285 + \frac{35000\times 3.5}{\pi\times 2500} = 285 + 15.6 = 300.6\ \mathrm{^\circ C},$$

i.e. exactly $T_{in}+\tfrac12\Delta T_{coolant}$, the antisymmetry of the S-curve.

*Check.* Units of $q'_{max}L/\dot m c_p$: $(\mathrm{W/m\cdot m})/(\mathrm{W/K})=\mathrm{K}$ ✓. Outlet below $T_{sat}$, single-phase ✓.

**P2**
$$\tan\!\left(\frac{\pi z_{co}}{L_e}\right) = \frac{L_e}{\pi\,\dot m c_p\,R'_{conv}} = \frac{3.5}{\pi(2500)(1.1\times10^{-3})} = \frac{3.5}{8.64} = 0.405,$$
$$\frac{\pi z_{co}}{L_e} = \arctan(0.405) = 0.385\ \mathrm{rad}\;\Longrightarrow\; z_{co} = 0.385\times\frac{3.5}{\pi} = 0.43\ \mathrm{m}.$$

Positive, so it is above the midplane (43 cm up, versus the half-height 1.75 m) ✓.

**P3** (a) Same condition with the larger resistance:
$$\tan\!\left(\frac{\pi z_0}{L_e}\right) = \frac{3.5}{\pi(2500)(0.033)} = \frac{3.5}{259.2} = 0.0135\;\Longrightarrow\; z_0 = 0.0135\times\frac{3.5}{\pi} = 0.015\ \mathrm{m} \approx 1.5\ \mathrm{cm}.$$

(b) In the boxed condition $\tan(\pi z_{peak}/L_e) = L_e/(\pi\dot m c_p R')$, the right side *decreases* as $R'$ *increases*, and $\tan$ is increasing on $(0,\pi/2)$. Since $\sum R' > R'_{conv}$ (the centerline chain contains the film plus fuel, gap, and clad), the centerline gets the smaller tangent and hence the smaller elevation: $z_0 < z_{co}$, always.

*Check.* $z_0=1.5$ cm $< z_{co}=43$ cm, both above midplane ✓, matching the worked-example ordering.

</details>

## Flashback

**From Lesson 1.3 (The gap and cladding resistances):** A pin runs at a local linear power $q'=30\ \mathrm{kW/m}$. Its gap conductance is $h_g=6000\ \mathrm{W/(m^2K)}$ at gap radius $r_g=4.1\ \mathrm{mm}$, and its Zircaloy clad ($k_c=17\ \mathrm{W/(m\cdot K)}$) runs from $r_{ci}=4.18\ \mathrm{mm}$ to $r_{co}=4.75\ \mathrm{mm}$. Find the temperature drop across the gap and across the clad.

<details>
<summary>Solution</summary>

Each drop is $\Delta T = q'R'$, with the per-length resistances from 1.3. Gap (a thin conducting annulus modeled by its conductance):

$$R'_g = \frac{1}{2\pi r_g h_g} = \frac{1}{2\pi(0.0041)(6000)} = 6.47\times10^{-3}\ \mathrm{K\cdot m/W},\quad \Delta T_{gap} = 30000\times 6.47\times10^{-3} = 194\ \mathrm{K}.$$

Clad (a cylindrical conducting shell):

$$R'_c = \frac{\ln(r_{co}/r_{ci})}{2\pi k_c} = \frac{\ln(4.75/4.18)}{2\pi(17)} = \frac{0.128}{106.8} = 1.20\times10^{-3}\ \mathrm{K\cdot m/W},\quad \Delta T_{clad} = 30000\times1.20\times10^{-3} = 36\ \mathrm{K}.$$

*Check.* Units: $(\mathrm{W/m})\times(\mathrm{K\cdot m/W}) = \mathrm{K}$ ✓. The gap drop dwarfs the clad drop (~194 K vs ~36 K) — a poorly conducting gas gap is the second-biggest resistance in the pin after the fuel itself, exactly the lesson of 1.3.

</details>

## Connections

- **Backward:** this stacks the single-slice chain of [1.2](01-02-conduction-heat-source-fuel-pin.md)–[1.3](01-03-gap-cladding-resistances.md) on top of the cosine power of [1.1](01-01-power-distribution-volumetric-source.md), closed by the steady-flow energy balance of [`engineering-thermodynamics` 2.3](../../engineering-thermodynamics/lessons/02-03-mass-energy-balance-control-volumes.md). The radial temperature profile it rides on is the parabola-plus-drops of [`nuclear-materials` 3.2](../../nuclear-materials/lessons/03-02-fuel-temperature-profile-restructuring.md).
- **Forward:** [1.5 Hot-channel factors](01-05-hot-channel-hot-spot-factors.md) asks *which* channel and *which* elevation is the true worst case; [Module 2](../syllabus.md) reopens the coolant energy balance in full ([2.1](02-01-coolant-energy-balance-bulk-temperature.md)) and derives the film coefficient $h$ we assumed here ([2.2](02-02-convective-heat-transfer-film-drop.md), via [`heat-transfer` 3.4](../../heat-transfer/lessons/03-04-internal-forced-convection.md)). The clad-peak location is exactly where you later check margin to boiling and to CHF.
- **Sideways:** the "rising baseline plus a shifting bump gives a peak that is offset from either" logic is the same superposition you meet whenever a monotonic trend and a symmetric perturbation combine — here coolant heat-up (monotonic) plus cosine flux (symmetric) yields a hot spot that belongs to neither alone.
