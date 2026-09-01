# Planetary Science · Lesson 1.2: Condensation and the frost line

> ⏱ ~15 min · Module 1: Solar-system formation · Builds on: [1.1](01-01-protoplanetary-disk.md) · Unlocks: [1.3](01-03-accretion-dust-to-planetesimals.md), [1.4](01-04-giant-planets-migration.md), [1.5](01-05-meteorites-isotopic-clocks.md)

## Why this matters

Here is the single most consequential fact about the solar system: the four inner planets are small and made of rock and metal, and the four outer ones are enormous and made mostly of hydrogen, helium and ice. That is not a coincidence and it is not an accident of where things happened to end up. It is a direct consequence of a temperature gradient.

A disk of gas is hot near the star and cold far away. Every chemical species has a temperature below which it stops being a gas and starts being a solid grain — and *what is solid at radius $r$ is the only material a planet at radius $r$ can build itself out of*. Draw the temperature profile, mark where each species condenses, and the architecture of the solar system falls out. This lesson is that construction.

## The idea

**A planet can only be built from what is solid where it forms.** The disk is 99 percent hydrogen and helium by mass, and those never condense anywhere — they stay gas until they are either captured wholesale by a body big enough to hold them ([1.4](01-04-giant-planets-migration.md)) or blown away. The remaining one-ish percent is the raw material, and it divides sharply.

**Refractory means "condenses hot"; volatile means "condenses cold".** Aluminium and calcium oxides condense above 1400 K. Silicates and iron metal condense around 1300 K. Iron sulphide at 700 K. Water ice at about 150 K. Ammonia and methane below 100 K. Carbon monoxide and nitrogen below 30 K. **Notice how wide that range is: a factor of 50 in temperature separates the first solid from the last.** A disk that spans that temperature range spans the entire condensation sequence, and it does.

**The frost line is where water crosses over, and it matters far more than the others.** Not because water is chemically special but because it is *abundant*. Oxygen is the third most common element and hydrogen the first, so water is by far the most massive condensable compound available. Cross the frost line outward and the mass of available solid material jumps by roughly a factor of four in a single step. That step is why gas giants exist: only beyond the frost line was there enough solid mass to build a core fast enough to grab gas before the disk disappeared.

**And the frost line moves.** Early on, the disk is heated from within by the friction of its own accretion, and it is hot — the water condensation front sits out near 5 or 6 AU. As accretion slows the disk cools until sunlight is all that heats it, and the front sweeps inward past 4 AU, past 3 AU. So "the frost line" is not a place, it is a place *at a time*. A body that formed at 3 AU early formed dry and later found itself in a region where ice was stable — which is one of several reasons the asteroid belt contains both dry and water-bearing objects.

## The formal version

**Equilibrium temperature of a grain in sunlight.** A blackbody grain at distance $d$ from a star of luminosity $L$ absorbs $L/(4\pi d^2)$ per unit cross-section and radiates $\sigma T^4$ from its whole surface, so $\pi R^2 \cdot L/(4\pi d^2) = 4\pi R^2\sigma T^4$:

$$T_{\text{eq}}(d) = \left(\frac{L}{16\pi\sigma d^2}\right)^{1/4} = 278\ \mathrm{K}\left(\frac{L}{L_\odot}\right)^{1/4}\left(\frac{d}{\text{AU}}\right)^{-1/2}.$$

*In words: a passively heated disk has $T \propto r^{-1/2}$, and at 1 AU that is 278 K.* The grain's radius cancels — a dust speck and a boulder reach the same temperature.

**The early, viscously heated disk is hotter and steeper.** While accretion is vigorous, the disk generates its own heat internally and the midplane follows roughly

$$T_{\text{visc}}(r) \approx 550\ \mathrm{K}\left(\frac{r}{\text{AU}}\right)^{-3/4},$$

with the coefficient falling as the accretion rate declines. The two profiles bracket the disk's history: it starts on the upper curve and relaxes onto the lower one.

**The condensation sequence.** Cool a gas of solar composition at nebular pressure ($\sim10^{-4}$ bar) and species appear in this order. The quoted temperature is the **50 percent condensation temperature** $T_c$ — where half the element's atoms have entered a solid phase.

| $T_c$ (K) | Condenses | Class |
|---|---|---|
| 1680–1400 | corundum $\mathrm{Al_2O_3}$, perovskite $\mathrm{CaTiO_3}$, melilite | refractory oxides — **the CAIs of [1.5](01-05-meteorites-isotopic-clocks.md)** |
| 1350 | Fe–Ni metal | metal |
| 1310 | forsterite $\mathrm{Mg_2SiO_4}$, enstatite $\mathrm{MgSiO_3}$ | silicates — the bulk of "rock" |
| 700 | troilite FeS | moderately volatile |
| 150–170 | water ice | ice — **the frost line** |
| 80–100 | $\mathrm{NH_3}$, $\mathrm{CH_4}$ as hydrates/clathrates | ice |
| 20–30 | CO, $\mathrm{N_2}$ | supervolatile |

**The frost line.** Setting $T_{\text{eq}} = 150$ K in the passive profile:

$$r_{\text{frost}} = \left(\frac{278}{150}\right)^2 = 3.4\ \mathrm{AU};$$

in the early viscous profile, $r_{\text{frost}} = (550/150)^{4/3} = 5.7$ AU.

**The solid-surface-density step.** In the standard nebula model the surface density of *condensed* material is

$$\Sigma_{\text{solid}}(r) = \begin{cases} 7.1\,(r/\text{AU})^{-3/2}\ \mathrm{g\,cm^{-2}}, & r < r_{\text{frost}},\\[4pt] 30\,(r/\text{AU})^{-3/2}\ \mathrm{g\,cm^{-2}}, & r > r_{\text{frost}}.\end{cases}$$

$$\boxed{\ \frac{\Sigma_{\text{solid}}(\text{outside})}{\Sigma_{\text{solid}}(\text{inside})} \approx 4.2\ }$$

*In words: crossing the frost line outward quadruples the raw material available for building planets, in one step.* Everything in [1.3](01-03-accretion-dust-to-planetesimals.md) and [1.4](01-04-giant-planets-migration.md) hangs on this number.

## Picture

![Upper panel, a log-log plot of disk temperature against distance from the Sun in AU from 0.1 to 50. Two curves: a steeper coral curve labelled early disk with viscous heating, and a shallower blue curve labelled late disk with sunlight only. Horizontal dashed lines mark the condensation temperatures of refractory oxides at 1400 K, troilite iron sulphide at 700 K, and water ice at 150 K. Where the 150 K line crosses the two temperature curves, dots at 5.6 AU and 3.4 AU are joined by an arrow labelled frost line sweeps in. Lower panel, a log-log plot of solid surface density in grams per square centimetre against the same distance axis, showing a power law that steps up by a factor of 4.2 at the frost line where ice joins rock as a solid](assets/01-02-fig1.svg)

Two panels, one story: the temperature profile decides what is solid, and what is solid decides how much building material there is.

## Worked examples

**Example 1 (mechanical — locating a condensation front).** At what distance from the young Sun could iron sulphide first condense, in the late disk?

$$T_{\text{eq}} = 278\,r^{-1/2} = 700 \;\Rightarrow\; r^{1/2} = \frac{278}{700} = 0.397 \;\Rightarrow\; r = 0.158\ \mathrm{AU}.$$

Well inside Mercury's orbit (0.39 AU). So **sulphur was substantially volatile everywhere the terrestrial planets formed**, and any sulphur they contain had to arrive later, or be delivered in bodies that formed further out. This is a real and much-used constraint: Earth's sulphur budget, and the light element in its core, is argued about in exactly these terms.

**Example 2 (why you'd care — the mass available to Jupiter versus Earth).** Compare the total solid mass in an annulus of width $0.5\,r$ centred on Earth's orbit (1 AU) with one centred on Jupiter's (5.2 AU).

The solid mass in an annulus from $r_1$ to $r_2$ is $M = \int 2\pi r\,\Sigma_{\text{solid}}\,dr$. With $\Sigma_{\text{solid}} = \Sigma_1 (r/\text{AU})^{-3/2}$ and $a = 1.496\times10^{11}$ m per AU,

$$M = 2\pi\Sigma_1 a^2\int_{r_1}^{r_2} r^{-1/2}\,dr = 2\pi\Sigma_1 a^2\left[2\sqrt r\right]_{r_1}^{r_2}.$$

**At 1 AU** ($\Sigma_1 = 7.1\ \mathrm{g\,cm^{-2}} = 71\ \mathrm{kg\,m^{-2}}$, from 0.75 to 1.25 AU):

$$2(\sqrt{1.25}-\sqrt{0.75}) = 2(1.1180 - 0.8660) = 0.5040,$$
$$M = 2\pi\times71\times2.238\times10^{22}\times0.5040 = 5.03\times10^{24}\ \mathrm{kg} = 0.84\,M_\oplus.$$

**At 5.2 AU** ($\Sigma_1 = 30\ \mathrm{g\,cm^{-2}} = 300\ \mathrm{kg\,m^{-2}}$, from 3.9 to 6.5 AU):

$$2(\sqrt{6.5}-\sqrt{3.9}) = 2(2.5495 - 1.9748) = 1.1494,$$
$$M = 2\pi\times300\times2.238\times10^{22}\times1.1494 = 4.85\times10^{25}\ \mathrm{kg} = 8.1\,M_\oplus.$$

**Ten times as much solid material in Jupiter's zone as in Earth's**, from two effects working together: the factor 4.2 from ice, and the fact that an annulus of fixed *fractional* width contains more area when it is further out. Eight Earth masses of solids is, not coincidentally, right at the threshold a core needs to start runaway gas capture. The frost line does not just explain why the outer planets are icy — it explains why they are giants.

## Watch out

- **You might think the frost line is a fixed location, but it swept inward by roughly 2 AU as the disk cooled.** Any argument of the form "body X formed at 3 AU so it must be icy" needs a time attached. This is exactly why the asteroid belt is compositionally layered, with dry S-types inward and hydrated C-types outward.
- **You might think condensation temperature is a property of the substance alone, but it depends on pressure and on the gas composition.** Water condenses at 150 K at nebular pressures and at 273 K at one bar. Always quote $T_c$ with the environment; the table above is for $\sim10^{-4}$ bar and solar composition.
- **You might think "ice" means water, but in planetary science it means any of water, ammonia, methane, carbon dioxide and their clathrates** — and the outer solar system's "ice giants" are named for this broader sense. Confusingly, the material in Uranus and Neptune that we call ice is a hot dense fluid, not a solid at all ([5.1](05-01-giant-ice-giant-interiors.md)).

## One-liner

> A planet is built from whatever happened to be solid where it formed, and water — abundant, and freezing at a convenient 150 K — is the switch that divides the solar system in two.

## Problems

**P1 (🟢)** A young star has luminosity $L = 4\,L_\odot$. (a) Write the equilibrium-temperature profile. (b) Find the frost line ($T = 150$ K) in AU. (c) A grain of pure carbon has $T_c \approx 630$ K under nebular conditions; where does soot become stable around this star?

**P2 (🟡)** Take the solid surface density $\Sigma_{\text{solid}} = 30\,(r/\text{AU})^{-3/2}\ \mathrm{g\,cm^{-2}}$ beyond the frost line. A protoplanet at 5.2 AU sweeps up everything within its **feeding zone**, taken as an annulus of half-width $4\,R_H$ where the Hill radius is $R_H = a(M/3M_\odot)^{1/3}$. For a body of $M = 5\,M_\oplus$: (a) compute $R_H$ in AU; (b) compute the solid mass in the feeding zone, in $M_\oplus$; (c) comment on whether the body can double in place.

**P3 (🔴, optional)** In the early disk $T = 550\,(r/\text{AU})^{-3/4}$ K, and the coefficient decays with the accretion rate roughly as $T_0(t) = 550\,(1 + t/\tau)^{-1/2}$ K with $\tau = 0.5$ Myr. (a) Derive $r_{\text{frost}}(t)$ while viscous heating dominates. (b) Compute it at $t = 0$, $0.5$ and $2$ Myr. (c) At what time does the viscous frost line fall inside the passive-disk value of 3.4 AU, and what happens after that?

<details>
<summary>Solutions</summary>

**P1** (a) $$T_{\text{eq}} = 278\,(4)^{1/4}\,r^{-1/2} = 278\times1.4142\times r^{-1/2} = 393\,r^{-1/2}\ \mathrm{K}.$$

(b) $$r^{1/2} = \frac{393}{150} = 2.620 \;\Rightarrow\; r = 6.86\ \mathrm{AU}.$$

Four times the luminosity pushes the frost line out by exactly $\sqrt{L}$, i.e. a factor of 2, from 3.4 to 6.9 AU.

(c) $$r^{1/2} = \frac{393}{630} = 0.6238 \;\Rightarrow\; r = 0.389\ \mathrm{AU}.$$

**P2** (a) $$R_H = a\left(\frac{M}{3M_\odot}\right)^{1/3}, \qquad \frac{M}{3M_\odot} = \frac{5\times5.97\times10^{24}}{3\times1.989\times10^{30}} = \frac{2.985\times10^{25}}{5.967\times10^{30}} = 5.003\times10^{-6}.$$

$$\left(5.003\times10^{-6}\right)^{1/3} = 1.710\times10^{-2}, \qquad R_H = 5.2\times1.710\times10^{-2} = 0.0889\ \mathrm{AU}.$$

(b) The feeding zone runs from $5.2 - 4(0.0889) = 4.844$ AU to $5.2 + 4(0.0889) = 5.556$ AU.

$$M = 2\pi\Sigma_1 a^2\left[2\sqrt r\right]_{4.844}^{5.556}, \qquad 2(\sqrt{5.556}-\sqrt{4.844}) = 2(2.3572 - 2.2009) = 0.3126.$$

$$M = 2\pi\times300\times2.238\times10^{22}\times0.3126 = 1.319\times10^{25}\ \mathrm{kg} = 2.21\ M_\oplus.$$

(c) The zone holds $2.2\,M_\oplus$ against a body of $5\,M_\oplus$, so it **cannot** double in place — it can grow by at most about 44 percent and then it has eaten everything it can reach. This is the *isolation mass* problem, and it is the reason growth beyond a few Earth masses requires either a wider feeding zone (the Hill radius grows as $M^{1/3}$, which helps only weakly) or migration through fresh material. [1.3](01-03-accretion-dust-to-planetesimals.md) and [1.4](01-04-giant-planets-migration.md) both come back to this.

**P3** (a) Set $T_0(t)\,r^{-3/4} = 150$:

$$r_{\text{frost}}(t) = \left(\frac{T_0(t)}{150}\right)^{4/3} = \left(\frac{550}{150}\right)^{4/3}\left(1+\frac{t}{\tau}\right)^{-2/3} = 5.65\left(1+\frac{t}{0.5\ \mathrm{Myr}}\right)^{-2/3}\ \mathrm{AU}.$$

(b) At $t=0$: $5.65$ AU. At $t = 0.5$ Myr: $5.65\times2^{-2/3} = 5.65\times0.6300 = 3.56$ AU. At $t = 2$ Myr: $5.65\times5^{-2/3} = 5.65\times0.3420 = 1.93$ AU.

(c) Setting $5.65(1+t/\tau)^{-2/3} = 3.4$:

$$\left(1+\frac{t}{\tau}\right)^{2/3} = \frac{5.65}{3.4} = 1.662, \qquad 1+\frac{t}{\tau} = 1.662^{3/2} = 2.142, \qquad t = 1.142\times0.5 = 0.57\ \mathrm{Myr}.$$

After about 0.6 Myr viscous heating no longer sets the midplane temperature — sunlight does — so **the frost line stops sweeping inward and parks at 3.4 AU** for the rest of the disk's life. The physical content: the sweep is fast (most of it in the first million years) and then it halts. Two consequences follow. First, a body that formed inside 3.4 AU in the first half-million years formed dry and stayed dry, while one that formed there later could incorporate ice — so formation *time* is as much a compositional variable as formation *place*. Second, because the halt is at 3.4 AU and the asteroid belt spans 2.1–3.3 AU, the belt sits right at the boundary, which is the cleanest available explanation for why it contains both classes of material.

</details>

## Connections

- **Backward:** [1.1](01-01-protoplanetary-disk.md) built the disk and gave it a surface density; this lesson gives it a temperature, and the two together specify the initial conditions for everything that follows.
- **Forward:** [1.3](01-03-accretion-dust-to-planetesimals.md) turns $\Sigma_{\text{solid}}$ into planetesimals and finds where growth stalls; [1.4](01-04-giant-planets-migration.md) uses the factor-4.2 step to explain gas giants; [1.5](01-05-meteorites-isotopic-clocks.md) dates the refractory condensates at the top of the table, which are the oldest solids in the solar system.
- **Sideways:** the condensation sequence is a phase-equilibrium calculation of exactly the kind done in [`thermodynamics-physics`](../../thermodynamics-physics/syllabus.md) — a Clausius–Clapeyron vapour-pressure curve crossed with a temperature profile. The same reasoning, run on a planetary atmosphere instead of a disk, gives cloud decks ([4.1](04-01-atmospheric-structure.md)) and, run on a magma, gives the crystallization order that [`geology`](../../geology/syllabus.md) calls Bowen's reaction series.
