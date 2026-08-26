# Semiconductor Devices · Lesson 2.5: Metal–semiconductor and heterojunctions

> ⏱ ~15 min · Module 2: The p–n junction · Builds on: [2.1 Junction electrostatics](02-01-junction-electrostatics.md), [2.2 The ideal-diode equation](02-02-ideal-diode-equation.md) · Unlocks: [3.1 The BJT: transistor action](03-01-bjt-transistor-action.md), [4.2 The LED and the laser diode](04-02-led-and-laser-diode.md)

## Why this matters

Two loose ends from Module 2, and both turn out to be more than footnotes.

**Every device needs contacts.** A transistor with a perfect junction and a rectifying contact is a useless transistor. Understanding when a metal–semiconductor interface rectifies and when it conducts freely is not optional — it is the difference between a working chip and a dead one, and it is decided by a doping choice.

**The Schottky diode is a genuinely different device.** It rectifies by *majority* carriers, which means it has essentially no stored charge, which means no reverse recovery ([2.3](02-03-junction-diffusion-capacitance.md)) — the fastest rectifier available, and the reason it dominates low-voltage switching.

And the heterojunction is the idea that grades the whole field: if you can change the *band gap* with position, you get a design variable that a homojunction simply does not have. It is what makes an efficient LED, a semiconductor laser, and a SiGe transistor fast enough for radio.

## The idea

**Bring a metal and a semiconductor together.** The rule is the same as always: in equilibrium the Fermi level must be flat. If the metal's work function $\phi_M$ (the energy to remove an electron to vacuum) exceeds the semiconductor's $\phi_S$, then electrons flow from semiconductor to metal until the levels align — depleting the semiconductor surface and leaving a barrier behind. That barrier, the [Schottky barrier](../reference.md#schottky-barrier) $\phi_B$, is what rectifies.

The asymmetry with a p–n junction is the point. In a p–n diode both sides inject minority carriers into each other. Here, the metal has such an enormous electron supply that injection *into* the metal is irrelevant — the current is majority electrons going from semiconductor to metal, over the barrier. **Majority-carrier conduction, no minority storage, no recovery delay.**

**How to make it *not* rectify.** Dope the semiconductor surface heavily. The barrier height barely changes, but the depletion region becomes so thin that electrons simply tunnel through it. The contact becomes ohmic — linear, low-resistance, bidirectional. That is why every contact in every integrated circuit sits on a heavily doped $n^+$ or $p^+$ implant: **the ohmic contact is a Schottky contact made too thin to block.**

**Heterojunctions.** Join two *different* semiconductors. Now the band gap changes at the interface, and the discontinuity is split between a conduction-band offset $\Delta E_c$ and a valence-band offset $\Delta E_v$. That split is the design variable, because it lets you make a barrier for one carrier type without making one for the other.

The consequence is enormous. In a homojunction bipolar transistor, emitter injection efficiency requires the emitter to be doped far more heavily than the base — a constraint that fights base resistance. In a *hetero*junction bipolar transistor, a wider-gap emitter blocks holes from entering the emitter with a $\Delta E_v$ barrier, so injection efficiency comes for free and you may dope the base heavily to make it thin and low-resistance. **The heterojunction converts a doping constraint into a bandgap choice**, and that is why SiGe HBTs run at hundreds of gigahertz.

## The formal version

**Work functions and the barrier.** Define $\phi_M$ (metal work function), $\chi$ (semiconductor electron affinity, from vacuum to $E_c$), and $\phi_S = \chi+(E_c-E_F)/q$.

**Schottky barrier height** (ideal Schottky–Mott rule), for a metal on $n$-type:

$$\boxed{\;\phi_B = \phi_M-\chi.\;}$$

*In words: the barrier seen by an electron in the metal trying to enter the semiconductor is the work-function difference measured to the conduction band edge.* The built-in potential seen from the semiconductor side is

$$V_{bi} = \phi_B - \frac{E_c-E_F}{q} = \phi_B - V_T\ln\frac{N_c}{N_d}.$$

| Contact type | $n$-type condition | Result |
|---|---|---|
| Rectifying (Schottky) | $\phi_M>\phi_S$ | surface depleted, barrier forms |
| Ohmic | $\phi_M<\phi_S$ | surface accumulated, no barrier |

For $p$-type the inequalities reverse, and $\phi_{Bp} = E_g/q-(\phi_M-\chi)$, so $\phi_{Bn}+\phi_{Bp} = E_g/q$.

**Fermi-level pinning — why the ideal rule mostly fails.** Measured barrier heights on silicon are stubbornly near $0.6$–$0.8$ eV almost regardless of the metal. The cause is a high density of **interface states** in the gap at the surface, which absorb the charge transfer and pin $E_F$ near a characteristic level. So the Schottky–Mott rule is a useful conceptual starting point and a poor predictor; real barrier heights are measured, not calculated. (This is the same interface-state physics that made SiC MOSFETs hard in [2.4](02-04-reverse-breakdown.md), and that the MOS capacitor of [3.3](03-03-mos-capacitor.md) has to control.)

**Thermionic emission — the Schottky I–V.** Current is carried by electrons with enough thermal energy to surmount the barrier. Integrating the Maxwell–Boltzmann tail over states moving toward the interface gives

$$\boxed{\;J = J_{S}\left(e^{qV/k_BT}-1\right), \qquad J_S = A^*T^2e^{-q\phi_B/k_BT},\;}$$

where $A^* = 4\pi qm^*k_B^2/h^3$ is the **Richardson constant** ($\approx110\ \mathrm{A\,cm^{-2}K^{-2}}$ for $n$-Si, 32 for $p$-Si).

*In words: the same exponential I–V shape as a p–n diode, but the prefactor is set by a barrier height rather than by $n_i^2$.* That difference is everything:

| | p–n junction | Schottky |
|---|---|---|
| $I_0$ set by | $n_i^2/N$, i.e. $e^{-E_g/k_BT}$ | $e^{-q\phi_B/k_BT}$ |
| Typical $I_0$ (Si) | $10^{-15}$ A | $10^{-8}$ A |
| Forward drop | 0.6–0.7 V | 0.2–0.4 V |
| Carriers | minority (both types injected) | **majority only** |
| Stored charge | $Q = I\tau_T$, large | essentially none |
| Reverse recovery | 10 ns – 5 µs | ~0 (only $C_j$) |
| Reverse leakage | small | larger (smaller barrier) |

**Why the forward drop is lower.** $J_S$ is seven orders of magnitude larger than a p–n diode's $I_0$, and $V_F = V_T\ln(I/I_0)$, so

$$\Delta V_F = V_T\ln\frac{10^{-8}}{10^{-15}} = 0.0259\ln(10^{7}) = 0.418\ \mathrm{V}$$

lower, at the same current. That is the whole reason a Schottky rectifier saves power in a low-voltage supply: at 3.3 V output, a 0.3 V drop instead of 0.7 V is a direct 12% efficiency gain.

**The trade-off is fixed by $\phi_B$.** Lower $\phi_B$ gives lower $V_F$ *and* exponentially higher reverse leakage — they move together, because both are $e^{-q\phi_B/k_BT}$. There is no metal that gives both. Schottky rectifier selection is essentially a choice of barrier height against the leakage budget.

**Ohmic contacts by tunneling.** Dope the surface to $N_d>10^{19}\ \mathrm{cm^{-3}}$. The depletion width becomes

$$W = \sqrt{\frac{2\varepsilon_sV_{bi}}{qN_d}},$$

which at $10^{20}$ and $V_{bi} = 0.5$ V is about **2.5 nm** — thin enough for direct tunneling. The specific contact resistance goes as

$$\rho_c \propto \exp\left(\frac{2\sqrt{2m^*\varepsilon_s}}{\hbar}\cdot\frac{\phi_B}{\sqrt{N_d}}\right),$$

*In words: contact resistance falls exponentially with $\sqrt{N_d}$*, which is why contact implants are pushed to the solid-solubility limit and why contact resistance is one of the hardest problems in scaled CMOS — the contact area shrinks with every node while the required current does not.

**Heterojunctions and band offsets.** At an interface between materials 1 and 2:

$$\Delta E_c = \chi_1-\chi_2, \qquad \Delta E_v = (E_{g2}-E_{g1})-\Delta E_c, \qquad \Delta E_c+\Delta E_v = \Delta E_g.$$

*In words: the gap difference is split between the two band edges, and how it splits is a property of the material pair.* (The electron-affinity rule above is again a first approximation; real offsets are measured.)

Three canonical alignments:

| Type | Description | Use |
|---|---|---|
| **I (straddling)** | narrow gap entirely inside wide gap | quantum wells, LEDs, lasers — confines *both* carriers in the same place |
| **II (staggered)** | offsets in the same direction | separates electrons and holes — solar, some detectors |
| **III (broken)** | gaps do not overlap | tunnel junctions, some infrared detectors |

**The two device payoffs.**

*Carrier confinement (Type I).* A thin narrow-gap layer between wide-gap barriers traps both electrons and holes in the same small volume, raising the recombination rate enormously. This is the **double heterostructure**, and it is why a laser diode has a threshold current a hundred times lower than a homojunction one — Alferov and Kroemer shared the 2000 Nobel Prize for it. [4.2](04-02-led-and-laser-diode.md) uses it.

*Selective injection (the HBT).* In a homojunction BJT, emitter injection efficiency is

$$\gamma \approx \frac{1}{1+\dfrac{N_B D_E W_E}{N_E D_B W_B}},$$

so you need $N_E\gg N_B$. Give the emitter a wider gap by $\Delta E_g$ and the hole back-injection is suppressed by an extra Boltzmann factor:

$$\frac{I_n}{I_p} \propto \frac{N_E}{N_B}\,e^{\Delta E_g/k_BT}.$$

*In words: a band-gap difference buys injection efficiency exponentially, where doping buys it only linearly.* A 100 meV gap difference is worth $e^{100/25.9} = 48$ — equivalent to a 48× doping ratio, for free. That releases the base doping to rise by the same factor, which cuts base resistance and allows a thinner base, and by the $\tau_T\propto W_B^2$ scaling of [2.3](02-03-junction-diffusion-capacitance.md), the transistor gets much faster. SiGe HBTs with graded-germanium bases (which also add the drift field of [1.2](01-02-drift-diffusion-einstein.md) P3) reach $f_T$ above 300 GHz in a silicon-compatible process.

## Picture

![A three-part figure. Left: band diagrams of a metal and an n-type semiconductor before and after contact, showing the vacuum level, the work functions, and after contact the bent conduction band forming a barrier of height phi_B with the Fermi level flat across. Middle: the ohmic contact case, showing a heavily doped surface where the same barrier exists but the depletion region is only a couple of nanometres wide, with a horizontal tunneling arrow straight through it. Right: a type-I double heterostructure, showing a narrow-gap well between two wide-gap barriers with electrons collected in the conduction-band well and holes in the valence-band well, both confined in the same region.](assets/02-05-fig1.svg)

Left: the Schottky barrier, built the same way as every junction in this course — align the Fermi levels and see what bends. Middle: the same barrier, but so thin that it stops mattering. Note that the *height* is essentially unchanged; only the *width* was engineered, and that is entirely a doping choice. Right: the reason heterojunctions matter. Both carriers are confined in the same narrow-gap region, so they meet and recombine there instead of wandering apart — the mechanism behind every efficient LED and laser diode.

## Worked examples

**Example 1 (Schottky versus p–n in a low-voltage rectifier).** A 5 V, 10 A supply rectifies with either a silicon p–n diode ($I_0 = 10^{-14}$ A, $\tau_T = 100$ ns) or a Schottky diode with $\phi_B = 0.65$ eV, $A^* = 110\ \mathrm{A\,cm^{-2}K^{-2}}$, area $0.2\ \mathrm{cm^2}$. Compare conduction and switching loss at 200 kHz.

*Schottky saturation current.*

$$J_S = A^*T^2e^{-q\phi_B/k_BT} = (110)(300)^2e^{-0.65/0.0259} = (110)(9\times10^4)e^{-25.10}.$$

$$e^{-25.10} = 1.25\times10^{-11}, \qquad J_S = (9.9\times10^{6})(1.25\times10^{-11}) = 1.24\times10^{-4}\ \mathrm{A/cm^2}.$$

$$I_S = J_S A = (1.24\times10^{-4})(0.2) = 2.48\times10^{-5}\ \mathrm{A}.$$

*Forward drops at 10 A.*

$$V_F^{\rm Schottky} = V_T\ln\frac{10}{2.48\times10^{-5}} = 0.0259\ln(4.03\times10^{5}) = 0.0259(12.91) = 0.334\ \mathrm{V},$$

$$V_F^{\rm pn} = 0.0259\ln\frac{10}{10^{-14}} = 0.0259(34.54) = 0.894\ \mathrm{V}.$$

*Conduction loss.*

$$P_{\rm Schottky} = (10)(0.334) = 3.34\ \mathrm{W}, \qquad P_{\rm pn} = (10)(0.894) = 8.94\ \mathrm{W}.$$

*Switching loss.* The Schottky stores no minority charge, so its switching loss is negligible (only $C_j$, picojoules). The p–n diode stores $Q_S = I_F\tau_T = (10)(10^{-7}) = 1\ \mu$C, and at 5 V reverse with $t_{rr}\approx100$ ns and $I_R\approx10$ A:

$$E_{\rm sw}\approx\tfrac12(5)(10)(10^{-7}) = 2.5\ \mu\mathrm{J}, \qquad P_{\rm sw} = (2.5\times10^{-6})(2\times10^{5}) = 0.5\ \mathrm{W}.$$

*Totals.* Schottky 3.3 W, p–n 9.4 W — against 50 W of delivered output power. **Rectifier loss falls from 19% to 7% of the output.** In a 5 V supply the rectifier drop is a large fraction of the output voltage itself, which is exactly why every low-voltage switching supply uses Schottky (or, below about 1 V, synchronous rectification with a MOSFET, which has no diode drop at all).

*Why not always Schottky?* Reverse leakage. At $-5$ V and 100 °C, this Schottky's leakage is roughly $I_S$ scaled by $e^{q\phi_B/k_B}(1/300-1/373)$ — an increase of about $e^{25.10(1-300/373)} = e^{4.91} = 136$, giving 3.4 mA, versus nanoamps for the p–n diode. At 100 V reverse instead of 5 V that leakage becomes a real power dissipation and can run away thermally. Schottky rectifiers are therefore a low-voltage technology in silicon, and their extension to high voltage had to wait for SiC's larger barrier and gap ([2.4](02-04-reverse-breakdown.md)).

**Example 2 (why every contact sits on an $n^+$ implant).** A metal with $\phi_B = 0.7$ eV contacts $n$-type silicon. Compare the depletion width and the transport mechanism at $N_d = 10^{16}$ and $N_d = 10^{20}\ \mathrm{cm^{-3}}$.

*At $N_d = 10^{16}$:*

$$V_{bi} = \phi_B-V_T\ln\frac{N_c}{N_d} = 0.7-0.0259\ln\frac{2.8\times10^{19}}{10^{16}} = 0.7-0.0259(7.94) = 0.7-0.206 = 0.494\ \mathrm{V}.$$

$$W = \sqrt{\frac{2\varepsilon_sV_{bi}}{qN_d}} = \sqrt{\frac{2(1.04\times10^{-12})(0.494)}{(1.602\times10^{-19})(10^{16})}} = \sqrt{\frac{1.028\times10^{-12}}{1.602\times10^{-3}}} = \sqrt{6.41\times10^{-10}} = 2.53\times10^{-5}\ \mathrm{cm} = 253\ \mathrm{nm}.$$

**253 nm** — vastly too thick to tunnel through. Transport is thermionic emission over the barrier, and the contact **rectifies**. Useful as a diode, useless as a contact.

*At $N_d = 10^{20}$:*

$$V_{bi} = 0.7-0.0259\ln\frac{2.8\times10^{19}}{10^{20}} = 0.7-0.0259(-1.273) = 0.7+0.033 = 0.733\ \mathrm{V}$$

(the logarithm went negative because the doping now exceeds $N_c$ — the semiconductor is degenerate, and this simple formula is at its limit, but the width estimate survives).

$$W = \sqrt{\frac{2(1.04\times10^{-12})(0.733)}{(1.602\times10^{-19})(10^{20})}} = \sqrt{\frac{1.525\times10^{-12}}{1.602\times10^{1}}} = \sqrt{9.52\times10^{-14}} = 3.09\times10^{-7}\ \mathrm{cm} = 3.1\ \mathrm{nm}.$$

**3.1 nm.** A barrier that thin is transparent to tunneling, so electrons pass in both directions with little impediment and the contact is **ohmic**.

*The lesson, and it is a general one.* The barrier height did not change — it is a property of the metal and the interface states, and there is nothing you can do about it in a silicon process. What changed was the *width*, by a factor of 80, purely through doping. **You do not eliminate the Schottky barrier; you make it too thin to matter.**

This is why every single contact in an integrated circuit lands on a heavily doped region: source and drain contacts on $n^+$/$p^+$ implants, base contacts on a $p^+$ link implant, substrate ties on $p^+$. And it is why contact resistance is a first-order problem in scaled CMOS: as contact areas shrink below $10^{-10}\ \mathrm{cm^2}$, even a $10^{-8}\ \Omega\cdot\mathrm{cm^2}$ specific resistance becomes ohms in series with a transistor whose own on-resistance is a few hundred ohms. Cutting $\rho_c$ further needs either higher active doping (limited by solid solubility) or a lower barrier (limited by Fermi-level pinning) — both close to their limits, which is why contact engineering is now one of the hardest parts of a modern process.

## Watch out

- **You might predict Schottky barrier heights from work functions.** Fermi-level pinning by interface states makes the Schottky–Mott rule unreliable on silicon — measured $\phi_B$ clusters around 0.6–0.8 eV nearly independent of the metal. Use it for intuition, not for design.
- **You might think an ohmic contact has no barrier.** It has essentially the same barrier as the rectifying one; it is merely thin enough to tunnel through. Nothing removed the barrier — the doping made it transparent.
- **You might expect a Schottky diode to have a lower $I_0$ because it looks simpler.** Its $I_0$ is *seven orders of magnitude larger*, which is exactly why $V_F$ is lower and why leakage is worse. The two are the same fact.
- **You might think a Schottky diode has no capacitance.** It has a normal depletion capacitance $C_j = \varepsilon_s/W$, which still limits switching. What it lacks is *diffusion* capacitance and the stored charge behind reverse recovery.
- **You might treat the electron-affinity rule for band offsets as exact.** It is a first estimate; real offsets depend on interface chemistry and strain, and are tabulated from measurement. For strained SiGe in particular, nearly all of the offset appears in the valence band — which happens to be exactly what an HBT needs.

## One-liner

> A metal–semiconductor contact rectifies by majority carriers over a barrier whose height you cannot choose but whose width you can — dope it heavily and it becomes ohmic — and a heterojunction adds band gap as a design variable, buying exponentially what doping buys only linearly.

## Problems

**P1 (🟢)** A Schottky diode on $n$-Si has $\phi_B = 0.6$ eV, $A^* = 110\ \mathrm{A\,cm^{-2}K^{-2}}$, area $10^{-2}\ \mathrm{cm^2}$, at 300 K. (a) Find $J_S$ and $I_S$. (b) Find $V_F$ at 1 A. (c) Compare with a p–n diode of $I_0 = 10^{-13}$ A at the same current. (d) Which has the larger reverse leakage, and by roughly what factor?

**P2 (🟡)** A metal with $\phi_M = 4.8$ eV contacts silicon with $\chi = 4.05$ eV. (a) Find the ideal $\phi_{Bn}$ and $\phi_{Bp}$. (b) For $n$-Si at $N_d = 10^{17}$, find $V_{bi}$ and the depletion width. (c) Repeat for $N_d = 5\times10^{19}$. (d) At what doping does the width fall below 5 nm, and what does that imply?

**P3 (🔴)** An HBT has a SiGe base with $\Delta E_g = 120$ meV relative to the silicon emitter. Compare with a silicon homojunction BJT. (a) Write the injection-efficiency ratio $I_n/I_p$ for both. (b) The homojunction uses $N_E = 10^{20}$, $N_B = 10^{18}$. What $N_B$ could the HBT use at the same $N_E$ and the same injection efficiency? (c) If base resistance $\propto1/(N_BW_B)$ and the base is thinned in proportion so $N_BW_B$ is held constant, what happens to $f_T\propto1/\tau_T$? (d) Comment on why SiGe rather than a III–V heterostructure won in silicon-compatible RF.

<details>
<summary>Solutions</summary>

**P1** (a) $$J_S = A^*T^2e^{-q\phi_B/k_BT} = (110)(9\times10^{4})e^{-0.6/0.0259} = (9.9\times10^{6})e^{-23.17}.$$

$$e^{-23.17} = 8.64\times10^{-11}, \qquad J_S = 8.55\times10^{-4}\ \mathrm{A/cm^2},$$

$$I_S = (8.55\times10^{-4})(10^{-2}) = 8.55\times10^{-6}\ \mathrm{A}.$$

(b) $$V_F = V_T\ln\frac{I}{I_S} = 0.0259\ln\frac{1}{8.55\times10^{-6}} = 0.0259\ln(1.17\times10^{5}) = 0.0259(11.67) = 0.302\ \mathrm{V}.$$

(c) $$V_F^{\rm pn} = 0.0259\ln\frac{1}{10^{-13}} = 0.0259(29.93) = 0.775\ \mathrm{V}.$$

The Schottky is **473 mV lower** — and note this equals $V_T\ln(I_S/I_0) = 0.0259\ln(8.55\times10^{7}) = 0.473$ V ✓, i.e. the entire difference is the ratio of saturation currents.

(d) The **Schottky**, by the same factor: $I_S/I_0 = 8.55\times10^{-6}/10^{-13} = 8.6\times10^{7}$ — nearly **eight orders of magnitude** more leakage. This is the unavoidable flip side: forward drop and reverse leakage are both governed by $e^{-q\phi_B/k_BT}$, so improving one worsens the other by exactly the same factor.

**P2** (a) $$\phi_{Bn} = \phi_M-\chi = 4.8-4.05 = 0.75\ \mathrm{eV}.$$

$$\phi_{Bp} = \frac{E_g}{q}-\phi_{Bn} = 1.12-0.75 = 0.37\ \mathrm{eV}.$$

(So this metal makes a strongly rectifying contact to $n$-Si and a weakly rectifying, nearly ohmic one to $p$-Si — barrier heights on the two types always sum to the gap.)

(b) $$V_{bi} = \phi_{Bn}-V_T\ln\frac{N_c}{N_d} = 0.75-0.0259\ln\frac{2.8\times10^{19}}{10^{17}} = 0.75-0.0259(5.63) = 0.75-0.146 = 0.604\ \mathrm{V}.$$

$$W = \sqrt{\frac{2(1.04\times10^{-12})(0.604)}{(1.602\times10^{-19})(10^{17})}} = \sqrt{\frac{1.256\times10^{-12}}{1.602\times10^{-2}}} = \sqrt{7.84\times10^{-11}} = 8.86\times10^{-6}\ \mathrm{cm} = 88.6\ \mathrm{nm}.$$

(c) $$V_{bi} = 0.75-0.0259\ln\frac{2.8\times10^{19}}{5\times10^{19}} = 0.75-0.0259(-0.580) = 0.765\ \mathrm{V}.$$

$$W = \sqrt{\frac{2(1.04\times10^{-12})(0.765)}{(1.602\times10^{-19})(5\times10^{19})}} = \sqrt{\frac{1.591\times10^{-12}}{8.01}} = \sqrt{1.986\times10^{-13}} = 4.46\times10^{-7}\ \mathrm{cm} = 4.5\ \mathrm{nm}.$$

(d) Set $W = 5$ nm $= 5\times10^{-7}$ cm. Taking $V_{bi}\approx0.76$ V (it varies only logarithmically):

$$N_d = \frac{2\varepsilon_sV_{bi}}{qW^2} = \frac{2(1.04\times10^{-12})(0.76)}{(1.602\times10^{-19})(2.5\times10^{-13})} = \frac{1.581\times10^{-12}}{4.005\times10^{-32}} = 3.95\times10^{19}\ \mathrm{cm^{-3}}.$$

So **about $4\times10^{19}\ \mathrm{cm^{-3}}$** — which is right at the practical solid-solubility limit for phosphorus and arsenic in silicon.

The implication: the doping needed to make a contact ohmic by tunneling is essentially the *maximum doping silicon can hold*. There is no margin. That is why contact engineering has had to reach for other tricks — silicides to lower $\phi_B$ locally, interfacial dipole layers, laser annealing to push dopants briefly above equilibrium solubility — and why contact resistance has been on the ITRS "red brick wall" list for two decades.

**P3** (a) *Homojunction:* $\dfrac{I_n}{I_p} = \dfrac{N_ED_BW_E}{N_BD_EW_B}$ — the ratio scales **linearly** with $N_E/N_B$.

*HBT:* the wider-gap emitter adds a Boltzmann factor suppressing hole back-injection,

$$\frac{I_n}{I_p} = \frac{N_ED_BW_E}{N_BD_EW_B}\,e^{\Delta E_g/k_BT}.$$

(b) The extra factor is

$$e^{\Delta E_g/k_BT} = e^{0.120/0.0259} = e^{4.633} = 103.$$

To hold $I_n/I_p$ fixed at the same $N_E$, the base doping may rise by that factor:

$$N_B^{\rm HBT} = 10^{18}\times103 = 1.03\times10^{20}\ \mathrm{cm^{-3}}.$$

That is above practical limits, so in reality a designer takes part of the benefit as doping and part as improved gain — a typical SiGe HBT runs $N_B\sim5\times10^{19}$, still a 50× increase over the homojunction.

(c) If $N_BW_B$ is held constant while $N_B$ rises by 103, then $W_B$ falls by 103. From [2.3](02-03-junction-diffusion-capacitance.md), $\tau_T = W_B^2/2D_B$, so

$$\tau_T \to \frac{\tau_T}{103^2} = \frac{\tau_T}{1.06\times10^{4}},$$

and $f_T\propto1/\tau_T$ rises by **four orders of magnitude** in this idealized accounting.

The real gain is smaller — the base cannot actually be thinned 100× (punch-through, tunneling, and process control intervene), mobility falls at $5\times10^{19}$ doping, and $f_T$ is limited by emitter and collector charging times as well as base transit. But the direction and the mechanism are right: a homojunction silicon BJT peaks near 30 GHz, while SiGe HBTs reach 300 GHz and beyond, and the graded-germanium base adds the built-in drift field of [1.2](01-02-drift-diffusion-einstein.md) P3 on top.

(d) III–V heterostructures (AlGaAs/GaAs, InP) give *larger* band offsets and higher electron mobility, and they do win on absolute performance — InP HBTs and HEMTs hold the frequency records.

But SiGe won the *volume* RF market for a reason that has nothing to do with device physics: **it is compatible with a silicon CMOS line.** A SiGe base is a thin epitaxial layer grown in an otherwise standard silicon flow, so the HBT sits on the same die as the digital logic, the memory, the data converters and the power management. A III–V transistor requires a different substrate, a different fab, and a separate die that must then be packaged alongside the silicon.

For a phone transceiver, integration beats peak $f_T$ every time. This is the same lesson as the silicon-photonics remark in [1.3](01-03-generation-recombination.md): the material with the best intrinsic properties frequently loses to the one that fits the existing manufacturing base. Silicon's grip on the industry is a *process* advantage, and it has repeatedly overcome large physics deficits.

</details>

## Flashback

**From Lesson 2.3 (Junction and diffusion capacitance):** A p–n diode conducting 2 A with $\tau_T = 500$ ns is switched off. (a) Find the stored charge. (b) Find the storage time if $I_R = 4$ A. (c) A Schottky diode replaces it. What is the stored minority charge, and what now limits the switching speed?

<details>
<summary>Solution</summary>

(a) $Q_S = I_F\tau_T = (2)(5\times10^{-7}) = 1\ \mu$C.

(b) $$t_s = \tau_T\ln\left(1+\frac{I_F}{I_R}\right) = 500\ \mathrm{ns}\times\ln(1.5) = 500(0.405) = 203\ \mathrm{ns}.$$

(c) The Schottky diode conducts by **majority** carriers, so there is essentially **no stored minority charge** — $Q_S\approx0$ and there is no storage time at all.

What limits it instead is the **junction capacitance**: the depletion layer must still be charged from its forward-bias state to its reverse-bias state, taking a time of order $C_jV/I_R$. For a typical $C_j = 100$ pF, $V = 5$ V and $I_R = 4$ A:

$$t \approx \frac{C_jV}{I_R} = \frac{(10^{-10})(5)}{4} = 1.25\times10^{-10}\ \mathrm{s} = 125\ \mathrm{ps}.$$

**About 1600 times faster** than the p–n diode's storage time — and note the mechanism is completely different, which is why a Schottky's switching behaviour does not degrade with forward current the way $t_s = \tau_T\ln(1+I_F/I_R)$ does. That combination of speed and current-independence is what makes it the default in high-frequency switching.

</details>

## Connections

- **Backward:** the barrier is [2.1](02-01-junction-electrostatics.md)'s depletion electrostatics with a metal replacing the $p$-side; the exponential I–V is [2.2](02-02-ideal-diode-equation.md)'s with a different prefactor; the absence of stored charge is [2.3](02-03-junction-diffusion-capacitance.md)'s $C_d$ going to zero.
- **Forward:** [3.1](03-01-bjt-transistor-action.md)–[3.2](03-02-bjt-currents-and-gain.md) use the injection-efficiency argument the HBT circumvents; [4.2](04-02-led-and-laser-diode.md) builds a double heterostructure to confine carriers in a laser.
- **Sideways:** Fermi-level pinning by interface states is the same surface-state physics as the recombination velocity of [1.3](01-03-generation-recombination.md); thermionic emission over a barrier is the same Boltzmann-tail integral as thermionic emission from a hot cathode, and as the Arrhenius rate law throughout [`physical-chemistry`](../../physical-chemistry/syllabus.md).
