# Heat Transfer · Lesson 4.1: Blackbody radiation

> ⏱ ~15 min · Module 4: Radiation and heat exchangers · Builds on: [1.1 The three modes and Fourier's law](01-01-three-modes-fouriers-law.md), [`engineering-thermodynamics` 1.5 (Work and heat)](../../engineering-thermodynamics/lessons/01-05-work-and-heat.md) · Unlocks: [4.2 Real surfaces and emissivity](04-02-real-surfaces-emissivity-kirchhoff.md), [4.3 View factors and radiation exchange](04-03-view-factors-radiation-exchange.md)

## Why this matters

Every object above absolute zero glows — you, this page, a coal, a star — pouring out electromagnetic energy with no fluid or contact required. In [1.1](01-01-three-modes-fouriers-law.md) we quoted radiation's headline law ($q'' \propto T^4$) and moved on. Now we open the box. But real surfaces are messy — dull, shiny, colored, wavelength-fussy — so before we can score any of them, we need a **reference**: the ideal radiator that emits the theoretical maximum at every wavelength and temperature. That reference is the **blackbody**, and its two-and-a-half laws (Planck, Wien, Stefan–Boltzmann) are the yardstick the whole rest of the module measures against. They also answer everyday puzzles: why the Sun is yellow-white, why *you* are invisible in the dark but blaze in a thermal camera, why a furnace glows red then orange then white as it heats.

## The idea

Start with absorption. A **blackbody** is a surface that swallows *every* photon that hits it — every wavelength, every angle, nothing reflected, nothing transmitted. A perfect absorber. The name fits: at room temperature it reflects no light, so it looks black.

Here's the non-obvious twist. A perfect absorber is forced, by thermodynamics, to also be a **perfect emitter**. If it weren't — if it absorbed everything but emitted feebly — then placed in a sealed oven at uniform temperature it would keep soaking up radiation and heat up above its surroundings, all by itself, forever. That's a free-energy machine; the second law forbids it. So at equilibrium *whatever a surface is good at absorbing, it must be equally good at emitting*. The blackbody, being the champion absorber, is therefore the champion emitter: **no real surface at the same temperature can out-radiate it at any wavelength.** It is the ceiling.

Now heat it up and watch what comes out. Three things happen as temperature rises, and they're the whole lesson:

1. **It emits more.** The total energy streaming off climbs steeply with temperature — not linearly, but as $T^4$. Double the temperature, sixteen-fold the glow.
2. **The color shifts.** A warm body radiates mostly in the infrared (invisible). Hotter, and the peak slides toward shorter wavelengths — into the red, then orange, yellow, white. "Red hot" then "white hot" is this shift, live.
3. **The spectrum is a smooth hump.** At any temperature the emission isn't one color but a broad continuous curve over all wavelengths, low at both ends, peaked in the middle. That curve is Planck's.

## The formal version

**The Planck distribution (spectral emissive power).** A blackbody at absolute temperature $T$ (in kelvin, K — always absolute for radiation) emits, per unit surface area, into each little band of wavelengths around $\lambda$ (in micrometers, $\mu\mathrm{m}$), a power

$$E_{b,\lambda}(\lambda, T) = \frac{C_1}{\lambda^5\left[\exp\!\left(C_2/\lambda T\right) - 1\right]},$$

with $C_1 = 3.742\times10^{8}\ \mathrm{W\cdot\mu m^4/m^2}$ and $C_2 = 1.439\times10^{4}\ \mu\mathrm{m\cdot K}$. *In words: $E_{b,\lambda}$ is how much radiant power a black surface pours out per square meter per unit wavelength — the height of the spectral curve at wavelength $\lambda$.* The subscript $b$ means "blackbody" and $\lambda$ means "per unit wavelength" (a **spectral**, not total, quantity — units $\mathrm{W/(m^2\cdot\mu m)}$). You will almost never plug numbers into this formula by hand; what matters is its *shape* — a hump that grows and slides left as $T$ rises (see the Picture) — and the two laws that summarize that shape.

**Wien's displacement law (where the peak sits).** Differentiate Planck's curve, set the slope to zero, and the wavelength of maximum emission obeys

$$\boxed{\;\lambda_{\max}\,T = 2898\ \mu\mathrm{m\cdot K}\;}$$

*In words: the peak wavelength times the absolute temperature is a constant, so hotter bodies peak at shorter wavelengths.* Rearranged, $\lambda_{\max} = 2898/T$: it's a see-saw. This is the "color" law — it tells you what hue a glowing object is.

**Stefan–Boltzmann (the total, integrated over all $\lambda$).** Add up Planck's curve over *every* wavelength — the area under the hump — and the whole messy integral collapses to a stunningly clean result:

$$\boxed{\;E_b = \int_0^\infty E_{b,\lambda}\,d\lambda = \sigma T^4\;}, \qquad \sigma = 5.67\times10^{-8}\ \mathrm{W/(m^2\cdot K^4)}.$$

*In words: the total power radiated per unit area by a blackbody is a constant times the fourth power of its absolute temperature.* Here $E_b$ is the **total emissive power** ($\mathrm{W/m^2}$, all wavelengths lumped), and $\sigma$ is the Stefan–Boltzmann constant. The $T^4$ is the headline you keep from this lesson: **double $T$ and emission jumps $2^4 = 16\times$.** This is exactly the law previewed in [1.1](01-01-three-modes-fouriers-law.md) — a *blackbody* has emissivity $\varepsilon = 1$, so $E_b = \sigma T^4$ is the ceiling that [4.2](04-02-real-surfaces-emissivity-kirchhoff.md)'s real surfaces ($E = \varepsilon\sigma T^4$, $\varepsilon<1$) fall short of.

**Spectral vs total, and band emission.** Keep the two straight: $E_{b,\lambda}$ is the curve's *height* at one wavelength; $E_b = \sigma T^4$ is the *whole area* under it. Often you want an in-between quantity: the fraction of the total that comes out *below* some wavelength $\lambda$. Because Planck's curve is self-similar in the variable $\lambda T$, that fraction depends on the single product $\lambda T$ — not on $\lambda$ and $T$ separately — and is tabulated as the **band-emission fraction**

$$F_{0\to\lambda T} = \frac{\int_0^\lambda E_{b,\lambda}\,d\lambda}{\sigma T^4}, \qquad F_{\lambda_1 T\to\lambda_2 T} = F_{0\to\lambda_2 T} - F_{0\to\lambda_1 T}.$$

*In words: $F_{0\to\lambda T}$ is the slice of a blackbody's output with wavelength shorter than $\lambda$, read from a one-column table keyed by $\lambda T$.* (Handy fact: at the Wien peak, $\lambda_{\max}T = 2898$, only about **25%** of the energy has come out yet — the long-wavelength tail carries a lot.) We use it in Problem 3 to compute what fraction of sunlight is visible.

## Picture

![Two Planck spectral-emissive-power curves versus wavelength: a lower-temperature blue hump peaking near 2.9 micrometers and a taller higher-temperature coral hump peaking near 2.3 micrometers, with a dashed grey Wien locus threading through both peaks showing the peak sliding to shorter wavelength as temperature rises](assets/04-01-fig1.svg)

Every hotter curve lies **entirely above** every cooler one (more emission at *all* wavelengths), grows much taller (that's the $T^4$ area), and peaks farther **left** (Wien). The dashed grey line is the Wien locus $\lambda_{\max}T = \text{const}$, tracing where the peak lives as $T$ changes.

## Worked examples

**Example 1 (Wien — why the Sun is visible and you glow in the infrared).** Compare the Sun's surface, $T_{\odot} \approx 5800\ \mathrm{K}$, with a room-temperature object (you, a wall), $T \approx 300\ \mathrm{K}$. Where does each peak?

$$\lambda_{\max,\odot} = \frac{2898}{5800} \approx 0.50\ \mu\mathrm{m}, \qquad \lambda_{\max,\text{room}} = \frac{2898}{300} \approx 9.7\ \mu\mathrm{m}.$$

The Sun peaks at $0.50\ \mu\mathrm{m}$ — smack in the **middle of the visible band** (roughly $0.4$–$0.7\ \mu\mathrm{m}$), which is exactly why our eyes evolved to see there and why daylight looks white. A 300 K object peaks at $9.7\ \mu\mathrm{m}$, deep in the **mid-infrared**, far beyond what the eye detects — so you emit steadily but invisibly. A thermal (IR) camera is tuned to $\sim 8$–$14\ \mu\mathrm{m}$ precisely to catch that room-temperature glow, which is how it sees warm bodies in a dark room.

*Check.* Units: $(\mu\mathrm{m\cdot K})/\mathrm{K} = \mu\mathrm{m}$ ✓. Sanity: the see-saw works — a $\sim 19\times$ hotter Sun peaks at a $\sim 19\times$ shorter wavelength ($9.7/0.50 \approx 19 \approx 5800/300$), as $\lambda_{\max}T = \text{const}$ demands. Absolute kelvin used throughout, non-negotiable for radiation.

**Example 2 (Stefan–Boltzmann — total output and the $T^4$ leverage).** Find the total emissive power of a blackbody surface at $T_1 = 1000\ \mathrm{K}$, and the factor by which it exceeds an otherwise identical surface at $T_2 = 500\ \mathrm{K}$.

$$E_{b}(1000) = \sigma T_1^4 = 5.67\times10^{-8}\times(1000)^4 = 5.67\times10^{-8}\times10^{12} = 5.67\times10^{4}\ \mathrm{W/m^2} \approx 56.7\ \mathrm{kW/m^2}.$$

For the ratio, everything but temperature cancels, so only the fourth-power ratio survives:

$$\frac{E_b(1000)}{E_b(500)} = \left(\frac{T_1}{T_2}\right)^4 = \left(\frac{1000}{500}\right)^4 = 2^4 = 16.$$

The 1000 K surface radiates **16 times** as much as the 500 K one, despite being only twice as hot. (For the record $E_b(500) = 5.67\times10^{-8}\times(500)^4 = 3.54\times10^{3}\ \mathrm{W/m^2}$, and $56.7/3.54 = 16.0$ ✓.)

*Check.* Units: $\mathrm{\tfrac{W}{m^2\,K^4}\cdot K^4} = \mathrm{W/m^2}$ ✓. The ratio is dimensionless ✓. Sanity: this brutal $T^4$ leverage is why radiation is a rounding error in a refrigerator but the *dominant* mode in a furnace or a re-entering capsule — a small temperature rise multiplies the glow enormously.

## Watch out

- **You might think "black" means it can't emit — black is the absence of light.** Backwards. Black means it *absorbs* everything, and a perfect absorber is a perfect *emitter* (the second-law argument above). A blackbody is the brightest possible glower at its temperature; it just looks black when it's *cold* because it reflects nothing. Heat it and it outshines every real surface.
- **You might use Celsius in a radiation formula.** Never. Both Wien ($\lambda_{\max}T$) and Stefan–Boltzmann ($\sigma T^4$) demand **absolute** temperature in kelvin. Using $\,^\circ\mathrm{C}$ — worse, raising it to the fourth power — gives nonsense. (Temperature *differences* were the same in K or °C for conduction; that shortcut dies here, because it's $T^4$, not $\Delta T$.)
- **You might confuse the spectral height $E_{b,\lambda}$ with the total $E_b$.** $E_{b,\lambda}$ is the value at *one* wavelength (units per $\mu\mathrm{m}$); $E_b = \sigma T^4$ is the *area under the entire curve* (all wavelengths). A hotter body can have a taller curve everywhere *and* a bigger total — but they are different questions, and only the total obeys the clean $T^4$ law.
- **You might read Wien's law as "hotter means longer wavelength."** It's the opposite — $\lambda_{\max} = 2898/T$, an inverse. Hotter $\Rightarrow$ *shorter* peak wavelength (red $\to$ white $\to$ blue). More temperature buys you bluer light.

## One-liner

> A blackbody is the ideal absorber and therefore the ideal emitter: its glow is a Planck hump that grows as $\sigma T^4$ (double $T$, $16\times$ the power) and whose peak slides to shorter wavelength as $\lambda_{\max}T = 2898\ \mu\mathrm{m\cdot K}$ — the reference every real surface is scored against.

## Problems

**P1 (🟢)** A tungsten lamp filament runs at $T = 2900\ \mathrm{K}$. Using Wien's law, find the wavelength at which its (blackbody-like) emission peaks. Is that peak in the visible band ($0.4$–$0.7\ \mu\mathrm{m}$)? What does your answer suggest about an incandescent bulb as a *lighting* device?

**P2 (🟡)** A blackbody furnace wall has area $A = 0.5\ \mathrm{m^2}$ and sits at $T = 800\ \mathrm{K}$. (a) Find its total emissive power $E_b$ ($\mathrm{W/m^2}$) and the total radiant power $P = E_b A$ (W) leaving it. (b) Without recomputing from scratch, find $P$ if the wall temperature is raised to $1600\ \mathrm{K}$.

**P3 (🔴)** What fraction of a blackbody's radiation falls in the visible band ($0.4$–$0.7\ \mu\mathrm{m}$) for (a) the Sun at $5800\ \mathrm{K}$ and (b) the $2900\ \mathrm{K}$ filament of P1? Use the band-emission table excerpt below. Comment on incandescent-bulb efficiency.

| $\lambda T\ (\mu\mathrm{m\cdot K})$ | $F_{0\to\lambda T}$ |
|---|---|
| 1160 | 0.0018 |
| 2030 | 0.0719 |
| 2320 | 0.1245 |
| 4060 | 0.5020 |

<details>
<summary>Solutions</summary>

**P1** Wien: $\lambda_{\max} = 2898/T = 2898/2900 \approx 1.0\ \mu\mathrm{m}$. That's in the **near-infrared**, just past the red edge of the visible band — so the filament's emission *peaks outside what we can see*. Only the short-wavelength tail of the hump pokes into the visible, which is why incandescent bulbs are dim, warm-colored, and mostly waste their energy as invisible IR (heat). To move the peak into the visible you'd need a far hotter emitter ($\lambda_{\max} = 0.55\ \mu\mathrm{m}$ needs $T \approx 2898/0.55 \approx 5300\ \mathrm{K}$ — hotter than tungsten can survive), which is the whole reason LEDs and fluorescents displaced the incandescent bulb.

*Check.* Units: $(\mu\mathrm{m\cdot K})/\mathrm{K} = \mu\mathrm{m}$ ✓. Sanity: cooler than the Sun (5800 K, peak $0.5\ \mu\mathrm{m}$), so this filament should peak at a *longer* wavelength — and $1.0 > 0.5\ \mu\mathrm{m}$ ✓.

**P2** (a) Total emissive power (blackbody, $\varepsilon = 1$):

$$E_b = \sigma T^4 = 5.67\times10^{-8}\times(800)^4.$$

Now $(800)^4 = (8\times10^2)^4 = 8^4\times10^8 = 4096\times10^8 = 4.096\times10^{11}$, so

$$E_b = 5.67\times10^{-8}\times4.096\times10^{11} \approx 2.32\times10^{4}\ \mathrm{W/m^2} = 23.2\ \mathrm{kW/m^2}.$$

Total power off the wall: $P = E_b A = 2.32\times10^4 \times 0.5 = 1.16\times10^4\ \mathrm{W} \approx 11.6\ \mathrm{kW}$.

(b) Doubling $T$ (800 → 1600 K) multiplies $\sigma T^4$ by $2^4 = 16$, and $A$ is unchanged, so

$$P(1600\ \mathrm{K}) = 16 \times 11.6\ \mathrm{kW} \approx 186\ \mathrm{kW}.$$

*Check.* Units: $\mathrm{\tfrac{W}{m^2 K^4}\cdot K^4 \cdot m^2 = W}$ ✓. Sanity: same twice-as-hot $\Rightarrow 16\times$ pattern as Example 2 ✓; a furnace wall radiating tens of kilowatts per square meter is realistic. Absolute K used ✓.

**P3** The band fraction is $F_{\lambda_1 T \to \lambda_2 T} = F_{0\to\lambda_2 T} - F_{0\to\lambda_1 T}$, with the band edges $\lambda_1 = 0.4$, $\lambda_2 = 0.7\ \mu\mathrm{m}$.

*(a) Sun, $T = 5800\ \mathrm{K}$.* Edge products: $\lambda_1 T = 0.4\times5800 = 2320$ and $\lambda_2 T = 0.7\times5800 = 4060\ \mu\mathrm{m\cdot K}$. From the table, $F_{0\to2320} = 0.1245$ and $F_{0\to4060} = 0.5020$, so

$$F_{\text{vis},\odot} = 0.5020 - 0.1245 = 0.378 \approx 38\%.$$

*(b) Filament, $T = 2900\ \mathrm{K}$.* Edge products: $0.4\times2900 = 1160$ and $0.7\times2900 = 2030\ \mu\mathrm{m\cdot K}$. From the table, $F_{0\to1160} = 0.0018$ and $F_{0\to2030} = 0.0719$, so

$$F_{\text{vis,filament}} = 0.0719 - 0.0018 = 0.070 \approx 7\%.$$

So about **38%** of the Sun's output is visible light, versus only **~7%** for the tungsten filament — the other ~93% of the filament's energy leaves as invisible infrared. That radiative mismatch (before you even count electrical and conduction losses) is the core reason an incandescent bulb is a poor luminaire: it's really a heater that leaks a little light.

*Check.* Fractions are dimensionless and lie in $(0,1)$ ✓, and the hotter source (Sun) puts a bigger share in the visible ✓ — consistent with its peak sitting *inside* the band (Example 1) while the filament's peak sits *beyond* it (P1). The band fraction depends only on the product $\lambda T$, which is why the same visible window maps to different $F$ slices for the two temperatures.

</details>

## Flashback

**From Lesson 1.1 (the three modes — convection vs. radiation):** A surface at $T_s = 350\ \mathrm{K}$ sits in still air at $T_\infty = 300\ \mathrm{K}$, with convection coefficient $h = 15\ \mathrm{W/(m^2\cdot K)}$. Its surroundings (walls) are also at $T_{sur} = 300\ \mathrm{K}$ and its emissivity is $\varepsilon = 0.9$. Which carries more heat off the surface — convection or net radiation? (Fresh variant: different temperatures and coefficients than the worked case in 1.1.)

<details>
<summary>Solution</summary>

Convection (Newton's law of cooling): $q''_{conv} = h(T_s - T_\infty) = 15\times(350-300) = 15\times50 = 750\ \mathrm{W/m^2}$.

Net radiation to large surroundings (both temperatures absolute, in K):

$$q''_{rad} = \varepsilon\sigma(T_s^4 - T_{sur}^4) = 0.9\times5.67\times10^{-8}\times(350^4 - 300^4).$$

Fourth powers: $350^4 = 1.501\times10^{10}$ and $300^4 = 8.10\times10^{9}$, so the difference is $6.91\times10^{9}\ \mathrm{K^4}$. Then

$$q''_{rad} = 0.9\times5.67\times10^{-8}\times6.91\times10^{9} \approx 353\ \mathrm{W/m^2}.$$

**Convection wins** ($750$ vs. $353\ \mathrm{W/m^2}$) at these modest temperatures — radiation is roughly half of convection here, the same order of magnitude but smaller, exactly as the "radiation matters more when things get hot" rule of thumb from 1.1 predicts. Push $T_s$ up and the $T^4$ term would eventually overtake convection.

*Check.* Units: convection $\mathrm{\tfrac{W}{m^2 K}\cdot K = W/m^2}$ ✓; radiation $\mathrm{\tfrac{W}{m^2 K^4}\cdot K^4 = W/m^2}$ ✓. Absolute kelvin used in the radiation term ✓.

</details>

## Connections

- **Backward:** this completes the radiation preview from [1.1](01-01-three-modes-fouriers-law.md), where we quoted $q'' = \varepsilon\sigma T_s^4$ without justification. The blackbody ($\varepsilon = 1$) is the ideal case; the $T^4$ came from integrating Planck's curve, and the "radiation dominates when hot" rule of thumb is just the $T^4$ leverage of Example 2. The perfect-absorber-equals-perfect-emitter argument is a small piece of the equilibrium thermodynamics from [`engineering-thermodynamics` 1.5](../../engineering-thermodynamics/lessons/01-05-work-and-heat.md) — a body that absorbed without emitting would violate the second law.
- **Forward:** [4.2 Real surfaces and emissivity](04-02-real-surfaces-emissivity-kirchhoff.md) drops the ideal assumption: real surfaces emit $E = \varepsilon\sigma T^4$ with $\varepsilon < 1$, and Kirchhoff's law makes the "good absorber = good emitter" statement quantitative ($\alpha = \varepsilon$). [4.3 View factors](04-03-view-factors-radiation-exchange.md) then handles *geometry* — how much of one surface's blackbody-scale emission actually lands on another — building the exchange network that leads into the heat-exchanger lessons ([4.4](04-04-heat-exchangers-lmtd.md)–[4.5](04-05-heat-exchangers-effectiveness-ntu.md)).
- **Sideways:** Wien's law is the physicist's thermometer for anything too hot or too far to touch — a star's color gives its surface temperature, a blacksmith reads steel's temperature from its glow (dull red $\approx 800\ \mathrm{K}$, bright yellow $\approx 1300\ \mathrm{K}$), and a pyrometer measures a furnace without contact. The band-fraction result (Sun ~38% visible, filament ~7%) is the physics behind lighting-efficiency ratings, and the spectral mismatch between incoming solar (0.5 μm) and outgoing terrestrial IR (10 μm) is the root of the atmospheric greenhouse effect — glass and CO₂ are transparent to the former, opaque to the latter.
