# Semiconductor Devices · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course is one chain of reasoning: count the carriers, move them, conserve
them, then put a junction in the way. This card holds the silicon constants (use
these numbers throughout — every worked example in the course does), the transport
and junction formulas, the device equations for the diode, BJT and MOSFET, the
optoelectronic relations, and the unit-and-sign bookkeeping that is where the real
mistakes happen.

## Silicon at 300 K — the course's pinned constants

| Quantity | Value |
|---|---|
| $E_g$ | 1.12 eV |
| $n_i$ | $1.0\times10^{10}\ \mathrm{cm^{-3}}$ (measured; the $\sqrt{N_cN_v}e^{-E_g/2kT}$ formula gives $6.7\times10^9$) |
| $N_c$, $N_v$ | $2.8\times10^{19}$, $1.04\times10^{19}\ \mathrm{cm^{-3}}$ |
| $V_T^{\rm therm} = k_BT/q$ | 0.0259 V |
| $\varepsilon_s = 11.7\varepsilon_0$ | $1.04\times10^{-12}$ F/cm |
| $\varepsilon_{ox} = 3.9\varepsilon_0$ | $3.45\times10^{-13}$ F/cm |
| $q$ | $1.602\times10^{-19}$ C |
| $v_{\rm sat}$ (electrons) | $1\times10^{7}$ cm/s, above $\sim10^4$ V/cm |
| $\mathcal{E}_{\rm crit}$ (avalanche) | $\approx3\times10^{5}$ V/cm |
| $hc$ | 1.240 eV·µm |

**Mobility and diffusivity vs doping** (cm²/V·s and cm²/s; $D = V_T^{\rm therm}\mu$):

| $N$ (cm$^{-3}$) | $\mu_n$ | $\mu_p$ | $D_n$ | $D_p$ |
|---|---|---|---|---|
| $\le10^{15}$ | 1350 | 480 | 34.9 | 12.4 |
| $10^{16}$ | 1200 | 400 | 31.1 | 10.4 |
| $10^{17}$ | 800 | 300 | 20.7 | 7.8 |
| $10^{18}$ | 350 | 150 | 9.1 | 3.9 |
| $10^{19}$ | 150 | 75 | 3.9 | 1.9 |

Scattering counts the **total** ionized impurity concentration $N_a+N_d$, not the net.

*From* [1.1](lessons/01-01-carriers-doping-fermi-level.md), [1.2](lessons/01-02-drift-diffusion-einstein.md)

## Notation

| Symbol | Means | First used |
|---|---|---|
| $n$, $p$ | electron and hole concentrations, cm$^{-3}$ | [1.1](lessons/01-01-carriers-doping-fermi-level.md) |
| $n_i$ | intrinsic carrier concentration — the yardstick everything is measured against | [1.1](lessons/01-01-carriers-doping-fermi-level.md) |
| $N_a$, $N_d$ | acceptor and donor doping. Only the **net** sets carriers; the **total** sets scattering | [1.1](lessons/01-01-carriers-doping-fermi-level.md) |
| $n_0$, $p_0$ | equilibrium concentrations; $n_{p0}$ = electrons in $p$-type, $p_{n0}$ = holes in $n$-type | [1.1](lessons/01-01-carriers-doping-fermi-level.md) |
| $E_c$, $E_v$, $E_F$, $E_i$ | band edges, Fermi level, intrinsic level (≈ midgap) | [1.1](lessons/01-01-carriers-doping-fermi-level.md) |
| $\mu$, $D$ | mobility and diffusivity — **one parameter**, linked by Einstein | [1.2](lessons/01-02-drift-diffusion-einstein.md) |
| $V_T^{\rm therm}$ | thermal voltage $k_BT/q$ = 0.0259 V. **Not** the MOSFET threshold | [1.2](lessons/01-02-drift-diffusion-einstein.md) |
| $F_n$, $F_p$ | quasi-Fermi levels; their split measures departure from equilibrium | [1.2](lessons/01-02-drift-diffusion-einstein.md) |
| $\mathcal{E}$ | electric field, V/cm | [1.2](lessons/01-02-drift-diffusion-einstein.md) |
| $\delta n$, $\delta p$ | **excess** carrier concentrations above equilibrium | [1.3](lessons/01-03-generation-recombination.md) |
| $\tau_n$, $\tau_p$ | minority-carrier lifetime — a measure of **purity**, not of silicon | [1.3](lessons/01-03-generation-recombination.md) |
| $U$ | net recombination rate, cm$^{-3}$s$^{-1}$ | [1.3](lessons/01-03-generation-recombination.md) |
| $N_t$, $E_t$ | trap density and energy; midgap traps are the killers | [1.3](lessons/01-03-generation-recombination.md) |
| $S$ (surfaces) | surface recombination velocity, cm/s. **Not** subthreshold swing | [1.3](lessons/01-03-generation-recombination.md) |
| $L = \sqrt{D\tau}$ | diffusion length — the ruler of every bipolar device | [1.4](lessons/01-04-continuity-equations.md) |
| $G_L$ | external generation rate (light) | [1.4](lessons/01-04-continuity-equations.md) |
| $W$ | depletion width (junction) or neutral-region width (context decides) | [2.1](lessons/02-01-junction-electrostatics.md) |
| $x_n$, $x_p$ | depletion extent into each side; $N_ax_p = N_dx_n$ | [2.1](lessons/02-01-junction-electrostatics.md) |
| $V_{bi}$ | built-in potential | [2.1](lessons/02-01-junction-electrostatics.md) |
| $V$ (bias) | applied bias, **positive for forward**; appears as $V_{bi}-V$ | [2.1](lessons/02-01-junction-electrostatics.md) |
| $I_0$ | diode saturation current | [2.2](lessons/02-02-ideal-diode-equation.md) |
| $n$ (ideality) | diode ideality factor, 1–2. **Not** electron concentration | [2.2](lessons/02-02-ideal-diode-equation.md) |
| $C_j$, $C_d$ | junction (depletion) and diffusion capacitance | [2.3](lessons/02-03-junction-diffusion-capacitance.md) |
| $\tau_T$ | transit time; $Q = I\tau_T$ | [2.3](lessons/02-03-junction-diffusion-capacitance.md) |
| $M$ | avalanche multiplication factor | [2.4](lessons/02-04-reverse-breakdown.md) |
| $V_B$ | breakdown voltage | [2.4](lessons/02-04-reverse-breakdown.md) |
| $\phi_M$, $\chi$, $\phi_B$ | metal work function, electron affinity, Schottky barrier height | [2.5](lessons/02-05-metal-semiconductor-heterojunctions.md) |
| $A^*$ | Richardson constant, $\approx110\ \mathrm{A\,cm^{-2}K^{-2}}$ for $n$-Si | [2.5](lessons/02-05-metal-semiconductor-heterojunctions.md) |
| $\Delta E_c$, $\Delta E_v$ | heterojunction band offsets; they sum to $\Delta E_g$ | [2.5](lessons/02-05-metal-semiconductor-heterojunctions.md) |
| $W_B$ | BJT base width | [3.1](lessons/03-01-bjt-transistor-action.md) |
| $I_S$ | BJT saturation current (the prefactor of $e^{V_{BE}/V_T}$) | [3.1](lessons/03-01-bjt-transistor-action.md) |
| $\alpha$, $\beta$ | common-base and common-emitter current gain | [3.1](lessons/03-01-bjt-transistor-action.md) |
| $\gamma$, $\alpha_T$ | emitter injection efficiency and base transport factor | [3.2](lessons/03-02-bjt-currents-and-gain.md) |
| $V_A$ | Early voltage | [3.2](lessons/03-02-bjt-currents-and-gain.md) |
| $\phi_F$ | bulk potential, $V_T^{\rm therm}\ln(N_a/n_i)$ | [3.3](lessons/03-03-mos-capacitor.md) |
| $\psi_s$ | surface potential (band bending); threshold at $\psi_s = 2\phi_F$ | [3.3](lessons/03-03-mos-capacitor.md) |
| $C_{ox}$, $t_{ox}$ | oxide capacitance per area and thickness | [3.3](lessons/03-03-mos-capacitor.md) |
| $V_{FB}$, $Q_f$ | flat-band voltage and fixed oxide charge | [3.3](lessons/03-03-mos-capacitor.md) |
| $V_T$ (MOS) | **threshold voltage** (volts, 0.2–1 V). Context distinguishes it from $V_T^{\rm therm}$ | [3.4](lessons/03-04-threshold-voltage-cv.md) |
| $\gamma$ (MOS) | body-effect coefficient, $\sqrt{\mathrm V}$. **Not** injection efficiency | [3.4](lessons/03-04-threshold-voltage-cv.md) |
| $V_{ov}$ | overdrive, $V_{GS}-V_T$ | [3.5](lessons/03-05-mosfet-iv.md) |
| $k' = \mu C_{ox}$ | process transconductance parameter, A/V² | [3.5](lessons/03-05-mosfet-iv.md) |
| $g_m$, $r_o$, $\lambda$ | transconductance, output resistance, channel-length-modulation factor | [3.5](lessons/03-05-mosfet-iv.md) |
| $S$ (swing) | subthreshold swing, mV/decade. **Not** surface recombination velocity | [3.6](lessons/03-06-short-channel-effects-scaling.md) |
| $\kappa$ | Dennard scaling factor | [3.6](lessons/03-06-short-channel-effects-scaling.md) |
| $\alpha$ (optics) | absorption coefficient, cm$^{-1}$. **Not** the BJT current gain | [4.1](lessons/04-01-light-absorption-emission-detection.md) |
| $\lambda_g$ | cutoff wavelength, $1.240/E_g$ µm | [4.1](lessons/04-01-light-absorption-emission-detection.md) |
| $\eta$, $R$ (optics) | quantum efficiency and responsivity (A/W) | [4.1](lessons/04-01-light-absorption-emission-detection.md) |
| $\Gamma$ | optical confinement factor | [4.2](lessons/04-02-led-and-laser-diode.md) |
| $I_{\rm th}$, $\eta_d$ | laser threshold current and slope efficiency | [4.2](lessons/04-02-led-and-laser-diode.md) |
| $I_L$, $V_{oc}$, $I_{sc}$, FF | photogenerated current, open-circuit voltage, short-circuit current, fill factor | [4.3](lessons/04-03-solar-cell.md) |
| $R_p$, $\Delta R_p$, $D$ | implant projected range, straggle, dose (cm$^{-2}$) | [4.4](lessons/04-04-device-fabrication.md) |
| CD, NA | lithographic critical dimension and numerical aperture | [4.4](lessons/04-04-device-fabrication.md) |

**Symbol collisions to keep straight.** $V_T$ is the *thermal* voltage in Modules 1–2 and the MOSFET *threshold* from [3.4](lessons/03-04-threshold-voltage-cv.md) on. $\gamma$ is emitter injection efficiency in [3.2](lessons/03-02-bjt-currents-and-gain.md) and the body-effect coefficient in [3.4](lessons/03-04-threshold-voltage-cv.md). $\alpha$ is BJT common-base gain in [3.1](lessons/03-01-bjt-transistor-action.md) and the optical absorption coefficient in [4.1](lessons/04-01-light-absorption-emission-detection.md). $S$ is surface recombination velocity in [1.3](lessons/01-03-generation-recombination.md) and subthreshold swing in [3.6](lessons/03-06-short-channel-effects-scaling.md). $n$ is electron concentration everywhere except the diode ideality factor in [2.2](lessons/02-02-ideal-diode-equation.md). $W$ is a depletion width in [2.1](lessons/02-01-junction-electrostatics.md), a neutral width in [1.4](lessons/01-04-continuity-equations.md), and a channel width in [3.5](lessons/03-05-mosfet-iv.md).

## Definitions

### Law of mass action

The carrier product is a fixed budget set by the material and temperature; doping decides how it is split, never how big it is. **Equilibrium only.**

$$np = n_i^2$$

*Introduced:* [1.1](lessons/01-01-carriers-doping-fermi-level.md)

### Extrinsic regime

The temperature plateau where dopants are fully ionized and $n_i$ is still far below the doping, so $n\approx N_d$ and is flat. Every device formula in this course assumes it.

*Introduced:* [1.1](lessons/01-01-carriers-doping-fermi-level.md)

### Einstein relation

Diffusivity and mobility are the same thermal motion in different units — a theorem for non-degenerate carriers, not a fit.

$$\frac{D}{\mu} = \frac{k_BT}{q} = V_T^{\rm therm}$$

*Introduced:* [1.2](lessons/01-02-drift-diffusion-einstein.md)

### Quasi-Fermi levels

Out of equilibrium each carrier gets its own reference level; their separation is the drive, and equals $qV$ across a forward-biased junction.

$$n = n_ie^{(F_n-E_i)/k_BT}, \qquad np = n_i^2e^{(F_n-F_p)/k_BT}, \qquad J_n = n\mu_n\frac{dF_n}{dx}$$

*Introduced:* [1.2](lessons/01-02-drift-diffusion-einstein.md)

### Velocity saturation

Above about $10^4$ V/cm the drift velocity stops following the field and clamps at $v_{\rm sat}$. Every modern MOSFET operates here.

*Introduced:* [1.2](lessons/01-02-drift-diffusion-einstein.md)

### Low-level injection

The injected minority population is enormous relative to its equilibrium value but negligible relative to the majority carriers — which is what keeps the equations linear.

$$\delta p \ll n_0 \quad\text{(in } n\text{-type)}$$

*Introduced:* [1.3](lessons/01-03-generation-recombination.md)

### Shockley–Read–Hall recombination

Trap-assisted recombination: two easy hops via a midgap level instead of one hard band-to-band jump. Dominates in silicon, and its rate is set by trap density — hence by purity.

$$U = \frac{np-n_i^2}{\tau_{p0}(n+n_1)+\tau_{n0}(p+p_1)}, \qquad \tau_p = \frac{1}{\sigma_pv_{th}N_t}$$

*Introduced:* [1.3](lessons/01-03-generation-recombination.md)

### Diffusion length

How far a minority carrier gets before recombining — the random-walk distance in one lifetime, and the ruler against which every region is called "long" or "short".

$$L = \sqrt{D\tau}$$

*Introduced:* [1.4](lessons/01-04-continuity-equations.md)

### Minority-carrier diffusion equation

The master transport equation: excess spreads by diffusion, decays by recombination, is topped up by generation.

$$\frac{\partial\,\delta p}{\partial t} = D_p\frac{\partial^2\delta p}{\partial x^2}-\frac{\delta p}{\tau_p}+G_L$$

*Introduced:* [1.4](lessons/01-04-continuity-equations.md)

### Depletion approximation

Treat the space-charge region as fully depleted of mobile carriers and the rest as exactly neutral, with an abrupt transition. Valid while $W\gg L_D$.

*Introduced:* [2.1](lessons/02-01-junction-electrostatics.md)

### Built-in potential

The barrier the junction erects to stop diffusion — the thermal voltage times the log of how far both sides are from intrinsic. Always 0.6–1.0 V in silicon, and never measurable with a voltmeter.

$$V_{bi} = V_T^{\rm therm}\ln\frac{N_aN_d}{n_i^2}$$

*Introduced:* [2.1](lessons/02-01-junction-electrostatics.md)

### One-sided junction

When $N_a\gg N_d$, the depletion region lives almost entirely in the lightly doped side, and that side alone sets the width, the peak field, the capacitance and the breakdown voltage.

*Introduced:* [2.1](lessons/02-01-junction-electrostatics.md)

### Law of the junction

Forward bias multiplies the minority carrier density at the depletion edge by the Boltzmann factor — the boundary condition that produces the diode equation.

$$p_n(x_n) = p_{n0}\,e^{qV/k_BT}$$

*Introduced:* [2.2](lessons/02-02-ideal-diode-equation.md)

### Ideality factor

The empirical exponent divisor distinguishing diffusion current ($n\approx1$, 60 mV/decade) from depletion-region recombination ($n\approx2$, 120 mV/decade).

*Introduced:* [2.2](lessons/02-02-ideal-diode-equation.md)

### Diffusion capacitance

The charge stored as injected minority carriers under forward bias — orders of magnitude larger than junction capacitance, and the source of reverse recovery.

$$Q = I\,\tau_T, \qquad C_d = \frac{\tau_TI}{V_T^{\rm therm}}$$

*Introduced:* [2.3](lessons/02-03-junction-diffusion-capacitance.md)

### Reverse recovery

A forward-conducting diode holds stored minority charge; when the voltage reverses it conducts backwards until that charge is swept out.

$$t_s = \tau_T\ln\left(1+\frac{I_F}{I_R}\right)$$

*Introduced:* [2.3](lessons/02-03-junction-diffusion-capacitance.md)

### Avalanche breakdown

Impact ionization multiplying carriers in a chain reaction. Needs *distance*, so it happens in wide, lightly doped junctions. Positive temperature coefficient.

$$\int_0^W\alpha\,dx = 1 \quad\Longleftrightarrow\quad \mathcal{E}_{\max}\to\mathcal{E}_{\rm crit}$$

*Introduced:* [2.4](lessons/02-04-reverse-breakdown.md)

### Zener (tunneling) breakdown

Electrons tunnelling directly from valence to conduction band across a nanometre-thin junction. Needs *thinness*, so it happens at heavy doping. Negative temperature coefficient.

*Introduced:* [2.4](lessons/02-04-reverse-breakdown.md)

### Schottky barrier

The potential barrier at a metal–semiconductor interface. Its **height** is fixed by the metal and by interface states (Fermi-level pinning); its **width** is yours to choose through doping.

$$\phi_B = \phi_M-\chi \quad\text{(ideal Schottky–Mott; unreliable in practice)}$$

*Introduced:* [2.5](lessons/02-05-metal-semiconductor-heterojunctions.md)

### Ohmic contact

A Schottky barrier made so thin by heavy surface doping ($>10^{19}\ \mathrm{cm^{-3}}$) that carriers tunnel through it. The barrier is not removed — it is made transparent.

*Introduced:* [2.5](lessons/02-05-metal-semiconductor-heterojunctions.md)

### Heterojunction

A junction between two different semiconductors, splitting $\Delta E_g$ between $\Delta E_c$ and $\Delta E_v$ — so you can build a barrier for one carrier type without building one for the other.

*Introduced:* [2.5](lessons/02-05-metal-semiconductor-heterojunctions.md)

### Transistor action

A thin base between a forward-biased emitter junction and a reverse-biased collector junction: nearly every injected carrier crosses before recombining, so the few that do not command the many that do.

*Introduced:* [3.1](lessons/03-01-bjt-transistor-action.md)

### Gummel number

The integrated base dopant charge per unit area. The collector current depends on the base only through it.

$$Q_B/q = N_BW_B$$

*Introduced:* [3.1](lessons/03-01-bjt-transistor-action.md)

### Early effect

Raising the collector voltage widens the collector depletion region into the base, shrinking $W_B$ and raising $I_C$ — a finite output resistance and a ceiling on voltage gain.

$$I_C = I_Se^{V_{BE}/V_T^{\rm therm}}\left(1+\frac{V_{CE}}{V_A}\right), \qquad A_v^{\max} = \frac{V_A}{V_T^{\rm therm}}$$

*Introduced:* [3.1](lessons/03-01-bjt-transistor-action.md), quantified in [3.2](lessons/03-02-bjt-currents-and-gain.md)

### Emitter injection efficiency

The fraction of emitter current carried by useful forward-injected carriers rather than wasteful back-injection into the emitter. In silicon this, not base transport, usually limits $\beta$.

$$\gamma = \frac{1}{1+\dfrac{D_EN_BW_B}{D_BN_EW_E}}$$

*Introduced:* [3.2](lessons/03-02-bjt-currents-and-gain.md)

### Gummel plot

$I_C$ and $I_B$ against $V_{BE}$ on a semilog axis — one measurement that separates depletion recombination (low bias), ideal operation (plateau) and high-level injection (high bias).

*Introduced:* [3.2](lessons/03-02-bjt-currents-and-gain.md)

### Inversion

The surface of a $p$-type substrate holding more electrons than holes, because the gate has bent the bands down far enough. Strong inversion is conventionally $\psi_s = 2\phi_F$, where $n_s = N_a$.

*Introduced:* [3.3](lessons/03-03-mos-capacitor.md)

### Flat-band voltage

The gate voltage that produces zero band bending — undoing the work-function difference and the fixed oxide charge. Usually negative and comparable in size to $V_T$ itself.

$$V_{FB} = \phi_{MS}-\frac{Q_f}{C_{ox}}$$

*Introduced:* [3.3](lessons/03-03-mos-capacitor.md)

### Threshold voltage

Three costs added: undo the built-in bending, bend the bands to $2\phi_F$, then hold the depletion charge across the oxide.

$$V_T = V_{FB}+2\phi_F+\frac{\sqrt{4q\varepsilon_sN_a\phi_F}}{C_{ox}}$$

*Introduced:* [3.4](lessons/03-04-threshold-voltage-cv.md)

### Body effect

Lifting the source above the body reverse-biases the source–body junction, widening the depletion region and raising the threshold as a square root.

$$V_T(V_{SB}) = V_{T0}+\gamma\left(\sqrt{2\phi_F+V_{SB}}-\sqrt{2\phi_F}\right), \qquad \gamma = \frac{\sqrt{2q\varepsilon_sN_a}}{C_{ox}}$$

*Introduced:* [3.4](lessons/03-04-threshold-voltage-cv.md)

### Gradual channel approximation

Treat the vertical field (gate to channel) and the lateral field (source to drain) as separable, because the first is much larger. This is what fails in a short channel.

*Introduced:* [3.5](lessons/03-05-mosfet-iv.md)

### Pinch-off

Where the gate-to-channel voltage falls to $V_T$ and the inversion charge vanishes. Current does **not** stop — carriers are swept across the short high-field region beyond, so the current stops depending on $V_{DS}$.

*Introduced:* [3.5](lessons/03-05-mosfet-iv.md)

### Subthreshold swing

The gate voltage needed to change the drain current by a factor of ten below threshold. Floored at 60 mV/decade by Boltzmann statistics, degraded by the body's competing capacitance.

$$S = \frac{k_BT}{q}\ln(10)\left(1+\frac{C_{dep}}{C_{ox}}\right) \ge 60\ \mathrm{mV/decade}$$

*Introduced:* [3.5](lessons/03-05-mosfet-iv.md), central in [3.6](lessons/03-06-short-channel-effects-scaling.md)

### DIBL

Drain-induced barrier lowering: the drain's depletion region reaches toward the source and lowers the injection barrier, so $V_T$ falls with $V_{DS}$. Typically 50–150 mV/V.

*Introduced:* [3.6](lessons/03-06-short-channel-effects-scaling.md)

### Dennard (constant-field) scaling

Scale all dimensions and voltages by $1/\kappa$ and doping by $\kappa$; the fields are unchanged, so delay falls by $\kappa$, density rises by $\kappa^2$, and **power density stays constant**.

*Introduced:* [3.6](lessons/03-06-short-channel-effects-scaling.md)

### Cutoff wavelength

The longest wavelength a material can absorb (and the shortest beyond which it is transparent) — set entirely by the band gap.

$$\lambda_g = \frac{1.240}{E_g[\mathrm{eV}]}\ \mu\mathrm{m}$$

*Introduced:* [4.1](lessons/04-01-light-absorption-emission-detection.md)

### Responsivity

Amps out per watt in — rising linearly with wavelength (more photons per watt) until the gap cuts it off.

$$R = \frac{\eta q}{h\nu} = \frac{\eta\,\lambda[\mu\mathrm{m}]}{1.240}\ \mathrm{A/W}$$

*Introduced:* [4.1](lessons/04-01-light-absorption-emission-detection.md)

### Population inversion (Bernard–Duraffourg)

Stimulated emission exceeds absorption only when the quasi-Fermi levels straddle the photon energy — so a laser diode's forward bias necessarily exceeds $E_g/q$.

$$F_n-F_p > h\nu \ge E_g$$

*Introduced:* [4.2](lessons/04-02-led-and-laser-diode.md)

### Double heterostructure

A thin narrow-gap layer between wide-gap cladding, confining **both** carriers (by the band offsets) and light (because narrower gap means higher refractive index) in the same volume.

*Introduced:* [4.2](lessons/04-02-led-and-laser-diode.md)

### Fill factor

How square the solar cell's knee is — the ratio of the maximum-power rectangle to the $V_{oc}\times I_{sc}$ box.

$$\mathrm{FF} = \frac{P_{\max}}{V_{oc}I_{sc}}$$

*Introduced:* [4.3](lessons/04-03-solar-cell.md)

### Shockley–Queisser limit

The single-junction efficiency ceiling, ≈33% near $E_g = 1.34$ eV, set by the opposing losses of sub-gap transmission (rising with $E_g$) and thermalization (falling with $E_g$).

*Introduced:* [4.3](lessons/04-03-solar-cell.md)

### Planar process

Build everything from the top surface through patterned stencils, so one mask prints millions of identical devices at once.

*Introduced:* [4.4](lessons/04-04-device-fabrication.md)

### Self-aligned gate

Implanting the source and drain *after* patterning the gate, using the gate as its own mask — which removes alignment tolerance from the channel length.

*Introduced:* [4.4](lessons/04-04-device-fabrication.md)

## Formulas and rules

### Carriers and equilibrium

| Quantity | Formula |
|---|---|
| Carrier densities | $n = N_ce^{-(E_c-E_F)/k_BT}$, $p = N_ve^{-(E_F-E_v)/k_BT}$ |
| From the intrinsic level | $n = n_ie^{(E_F-E_i)/k_BT}$, $p = n_ie^{(E_i-E_F)/k_BT}$ |
| Mass action | $np = n_i^2$ (equilibrium only) |
| Charge neutrality | $p+N_d^+ = n+N_a^-$ |
| Extrinsic $n$-type | $n\approx N_d$, $p\approx n_i^2/N_d$ |
| Exact | $n = \frac{N_d-N_a}{2}+\sqrt{\left(\frac{N_d-N_a}{2}\right)^2+n_i^2}$ |
| Fermi placement | $E_c-E_F = k_BT\ln(N_c/n)$ |

*From* [1.1](lessons/01-01-carriers-doping-fermi-level.md)

### Transport

| Quantity | Formula |
|---|---|
| Drift | $J_n = qn\mu_n\mathcal{E}$, $J_p = qp\mu_p\mathcal{E}$, $\sigma = q(n\mu_n+p\mu_p)$ |
| Diffusion | $J_n = +qD_n\dfrac{dn}{dx}$, $J_p = -qD_p\dfrac{dp}{dx}$ |
| Einstein | $D = V_T^{\rm therm}\mu$ |
| Drift = diffusion when | $\mathcal{E} = V_T^{\rm therm}\dfrac{1}{n}\left\lvert\dfrac{dn}{dx}\right\rvert$; for an exponential of scale $L$, $\mathcal{E} = V_T^{\rm therm}/L$ |
| Velocity saturation | $v\to v_{\rm sat} = 10^7$ cm/s above $\mathcal{E}_c = v_{\rm sat}/\mu$ |

*From* [1.2](lessons/01-02-drift-diffusion-einstein.md)

### Generation and recombination

| Quantity | Formula |
|---|---|
| Low-level rate | $U = \delta p/\tau_p$ |
| Transient decay | $\delta p(t) = \delta p(0)e^{-t/\tau}$ |
| SRH lifetime | $\tau_p = 1/(\sigma_pv_{th}N_t)$, $v_{th}\approx10^7$ cm/s |
| Radiative | $\tau_{\rm rad} = 1/(Bn_0)$; $B_{\rm Si}\approx10^{-14}$, $B_{\rm GaAs}\approx10^{-10}\ \mathrm{cm^3/s}$ |
| Auger | $\tau_{\rm Aug} = 1/(C_nn_0^2)$, $C_n\approx2.8\times10^{-31}\ \mathrm{cm^6/s}$ |
| Combining | $1/\tau = \sum1/\tau_i$ — the shortest wins |
| Internal quantum efficiency | $\eta_{\rm int} = \tau_{\rm nr}/(\tau_{\rm nr}+\tau_{\rm rad})$ |
| Depletion-region generation | $U\approx-n_i/\tau_0$ (note $n_i$, not $n_i^2$) |
| Surface boundary condition | $D\dfrac{d\,\delta p}{dx} = S\,\delta p$; bare Si $S\sim10^5$, passivated $\sim10$ cm/s |

*From* [1.3](lessons/01-03-generation-recombination.md)

### Continuity and its standard solutions

| Case | Profile | Current at $x=0$ |
|---|---|---|
| Long ($W\gg L$) | $\delta p_0e^{-x/L}$ | $qD\,\delta p_0/L$ |
| Short ($W\ll L$) | $\delta p_0(1-x/W)$ | $qD\,\delta p_0/W$ |
| General | $\delta p_0\dfrac{\sinh[(W-x)/L]}{\sinh(W/L)}$ | $\dfrac{qD\delta p_0}{L}\coth\dfrac{W}{L}$ |
| Uniform generation | $G_L\tau+Ae^{-x/L}+Be^{x/L}$ | from the boundary conditions |

Short-base recombination fraction $=\frac12(W/L)^2$; use $\coth$ when $0.3<W/L<3$.

*From* [1.4](lessons/01-04-continuity-equations.md)

### Junction electrostatics

| Quantity | Formula |
|---|---|
| Neutrality | $N_ax_p = N_dx_n$ |
| Built-in potential | $V_{bi} = V_T^{\rm therm}\ln(N_aN_d/n_i^2)$ |
| Depletion width | $W = \sqrt{\dfrac{2\varepsilon_s(V_{bi}-V)}{q}\left(\dfrac1{N_a}+\dfrac1{N_d}\right)}$ |
| One-sided | $W = \sqrt{2\varepsilon_s(V_{bi}-V)/qN_B}$ |
| Split | $x_n = W\dfrac{N_a}{N_a+N_d}$ |
| Peak field | $\mathcal{E}_{\max} = \dfrac{2(V_{bi}-V)}{W} = \dfrac{qN_Bx}{\varepsilon_s}$ |
| Debye length | $L_D = \sqrt{\varepsilon_sk_BT/q^2N}$ (41 nm at $10^{16}$) |
| Linearly graded | $W\propto(V_{bi}-V)^{1/3}$, $\mathcal{E}_{\max} = \tfrac32(V_{bi}-V)/W$ |

*From* [2.1](lessons/02-01-junction-electrostatics.md)

### The diode

| Quantity | Formula |
|---|---|
| Ideal diode | $I = I_0\left(e^{qV/nk_BT}-1\right)$ |
| Long-base $I_0$ | $qAn_i^2\left[\dfrac{D_p}{L_pN_d}+\dfrac{D_n}{L_nN_a}\right]$ |
| Short-base $I_0$ | replace $L$ by the neutral width $W$ — larger by $L/W$ |
| Slope | 60 mV/decade ($n{=}1$), 120 mV/decade ($n{=}2$) |
| Small-signal | $r_d = V_T^{\rm therm}/I$ |
| Temperature | $I_0$ doubles per ~10 °C; $dV_F/dT\approx-2$ mV/°C |
| Generation leakage | $I_{\rm gen} = qAn_iW/2\tau$, $\propto\sqrt{V_{bi}-V}$ |

*From* [2.2](lessons/02-02-ideal-diode-equation.md)

### Capacitance

| Quantity | Formula |
|---|---|
| Junction | $C_j = \varepsilon_s/W = \sqrt{q\varepsilon_sN_B/2(V_{bi}-V)}$ |
| $1/C^2$ plot | $\dfrac{1}{C_j^2} = \dfrac{2(V_{bi}-V)}{q\varepsilon_sN_BA^2}$ — slope gives $N$, intercept gives $V_{bi}$ |
| Depth probed | $x = \varepsilon_sA/C$ |
| Diffusion | $C_d = \tau_TI/V_T^{\rm therm}$ |
| Transit time | $\tau_T = \tau$ (long base), $W_B^2/2D$ (short base) |
| Intrinsic speed | $r_dC_d = \tau_T$, independent of bias |

*From* [2.3](lessons/02-03-junction-diffusion-capacitance.md)

### Breakdown

| Quantity | Formula |
|---|---|
| Multiplication | $M = \left[1-(\lvert V\rvert/V_B)^m\right]^{-1}$, $m\approx3$–6 |
| Breakdown voltage | $V_B = \dfrac{\varepsilon_s\mathcal{E}_{\rm crit}^2}{2qN_B}\propto\dfrac{1}{N_B}$ |
| Width at breakdown | $W_B = 2V_B/\mathcal{E}_{\rm crit}$ |
| Unipolar limit | $R_{on}A = \dfrac{4V_B^2}{\varepsilon_s\mu\mathcal{E}_{\rm crit}^3}$ |
| Mechanism | Zener below $\sim4E_g/q$; avalanche above $\sim6E_g/q$; TC cancels near 5.6 V in Si |

*From* [2.4](lessons/02-04-reverse-breakdown.md)

### Metal–semiconductor and heterojunctions

| Quantity | Formula |
|---|---|
| Barrier height | $\phi_B = \phi_M-\chi$ (ideal); $\phi_{Bn}+\phi_{Bp} = E_g/q$ |
| Thermionic emission | $J = A^*T^2e^{-q\phi_B/k_BT}\left(e^{qV/k_BT}-1\right)$ |
| Typical Si $J_S$ | $10^{-8}$ A vs $10^{-15}$ A for a p–n diode → $V_F$ lower by ~0.4 V |
| Ohmic condition | $W = \sqrt{2\varepsilon_sV_{bi}/qN_d}\lesssim3$ nm, needing $N_d>10^{19}$ |
| Band offsets | $\Delta E_c+\Delta E_v = \Delta E_g$ |
| HBT injection | $I_n/I_p \propto \dfrac{N_E}{N_B}e^{\Delta E_g/k_BT}$ |

*From* [2.5](lessons/02-05-metal-semiconductor-heterojunctions.md)

### The BJT

| Quantity | Formula |
|---|---|
| Base profile | $n_p(x) = n_{p0}e^{qV_{BE}/k_BT}(1-x/W_B)$ |
| Collector current | $I_C = I_Se^{qV_{BE}/k_BT}$, $I_S = qAD_nn_i^2/(W_BN_B)$ |
| Gains | $\alpha = \gamma\alpha_T$, $\beta = \alpha/(1-\alpha)$ |
| Loss budget | $\dfrac1\beta \approx \dfrac{D_EN_BW_B}{D_BN_EW_E}+\dfrac{W_B^2}{2L_B^2}$ |
| Base transport | $\alpha_T = 1/\cosh(W_B/L_B)\approx1-\tfrac12(W_B/L_B)^2$ |
| Transit time | $\tau_F = W_B^2/2D_n$, $f_T = 1/2\pi\tau_F$ |
| Early | $V_A\approx qN_BW_B/C_{jC}'$, $r_o = V_A/I_C$, $A_v^{\max} = V_A/V_T^{\rm therm}$ |
| Kirchhoff | $I_E = I_C+I_B$ exactly |

*From* [3.1](lessons/03-01-bjt-transistor-action.md), [3.2](lessons/03-02-bjt-currents-and-gain.md)

### MOS capacitor and threshold

| Quantity | Formula |
|---|---|
| Oxide capacitance | $C_{ox} = \varepsilon_{ox}/t_{ox}$ (345 nF/cm² at 10 nm) |
| Bulk potential | $\phi_F = V_T^{\rm therm}\ln(N_a/n_i)$ |
| Surface density | $n_s = (n_i^2/N_a)e^{\psi_s/V_T^{\rm therm}}$ |
| Max depletion | $W_{\max} = \sqrt{4\varepsilon_s\phi_F/qN_a}$ |
| Depletion charge | $\lvert Q_{dep}^{\max}\rvert = \sqrt{4q\varepsilon_sN_a\phi_F}$ |
| Flat band | $V_{FB} = \phi_{MS}-Q_f/C_{ox}$ |
| Threshold | $V_T = V_{FB}+2\phi_F+\lvert Q_{dep}^{\max}\rvert/C_{ox}$ |
| Implant shift | $\Delta V_T = qD_I/C_{ox}$ |
| Body effect | $\gamma = \sqrt{2q\varepsilon_sN_a}/C_{ox}$ |
| Series capacitance | $1/C = 1/C_{ox}+1/C_s$; $C_{\min}$ uses $C_s = \varepsilon_s/W_{\max}$ |
| Inversion charge | $Q_{inv} = C_{ox}(V_{GS}-V_T)$ |

*From* [3.3](lessons/03-03-mos-capacitor.md), [3.4](lessons/03-04-threshold-voltage-cv.md)

### The MOSFET

| Regime | Formula |
|---|---|
| Triode | $I_D = k'\dfrac{W}{L}\left[(V_{GS}-V_T)V_{DS}-\dfrac{V_{DS}^2}{2}\right]$ |
| Saturation (square law) | $I_D = \dfrac{k'}{2}\dfrac{W}{L}(V_{GS}-V_T)^2$ |
| Saturation (velocity-limited) | $I_D = WC_{ox}(V_{GS}-V_T)v_{\rm sat}$ |
| Boundary | $V_{DS,\rm sat} = V_{ov} = V_{GS}-V_T$ |
| Transconductance | $g_m = k'\dfrac{W}{L}V_{ov} = \dfrac{2I_D}{V_{ov}}$; velocity-limited: $g_m = WC_{ox}v_{\rm sat}$ |
| Output | $r_o = 1/\lambda I_D$, $A_v^{\max} = 2/\lambda V_{ov}$ |
| Model crossover | $V_{ov} = 2Lv_{\rm sat}/\mu$ |
| Subthreshold | $I_D\propto e^{qV_{GS}/nk_BT}$, $S\ge60$ mV/decade |

*From* [3.5](lessons/03-05-mosfet-iv.md)

### Scaling

| Quantity | Constant-field scaling by $\kappa$ |
|---|---|
| $L$, $W$, $t_{ox}$, $V_{DD}$, $V_T$ | $\times1/\kappa$ |
| Doping | $\times\kappa$ |
| Field | $\times1$ |
| Delay, current, gate capacitance | $\times1/\kappa$ |
| Power per device | $\times1/\kappa^2$ |
| Density | $\times\kappa^2$ |
| **Power density** | $\times1$ |

Off-current $I_{\rm off} = I_010^{-V_T/S}$; characteristic length $\lambda_{\rm ch} = \sqrt{(\varepsilon_s/\varepsilon_{ox})t_{ox}x_{dep}}$, needing $L\gtrsim5$–$10\lambda_{\rm ch}$; EOT $= t_{\rm high\text{-}\kappa}\varepsilon_{ox}/\varepsilon_{\rm high\text{-}\kappa}$.

*From* [3.6](lessons/03-06-short-channel-effects-scaling.md)

### Optoelectronics

| Quantity | Formula |
|---|---|
| Photon energy | $E[\mathrm{eV}] = 1.240/\lambda[\mu\mathrm{m}]$ |
| Cutoff | $\lambda_g = 1.240/E_g$ µm |
| Absorption | $\Phi(x) = \Phi_0(1-R)e^{-\alpha x}$; depth $= 1/\alpha$ |
| Photogeneration | $G_L(x) = \alpha\Phi_0(1-R)e^{-\alpha x}$ |
| Quantum efficiency | $\eta = (1-R)(1-e^{-\alpha W})\eta_{\rm coll}$ |
| Responsivity | $R = \eta\lambda[\mu\mathrm{m}]/1.240$ A/W |
| Detector speed | $t_{\rm drift} = W/v_{\rm sat}$, $f_{3\rm dB}\approx0.44/t_{\rm drift}$ |
| LED extraction | $\eta_{\rm extraction}\approx1/4n_s^2$ ($\approx2\%$ flat, $n_s = 3.5$) |
| LED output | $P = \eta_{\rm ext}I\,E_g/q$ |
| Laser threshold gain | $\Gamma g_{\rm th} = \alpha_i+\dfrac{1}{2L}\ln\dfrac{1}{R_1R_2}$ |
| Facet reflectivity | $R = \left(\dfrac{n_s-1}{n_s+1}\right)^2\approx0.31$ |
| Laser output | $P = \eta_d\dfrac{h\nu}{q}(I-I_{\rm th})$ |
| Threshold scaling | $I_{\rm th}\propto A\,d$; $I_{\rm th}(T)\propto e^{T/T_0}$ |

*From* [4.1](lessons/04-01-light-absorption-emission-detection.md), [4.2](lessons/04-02-led-and-laser-diode.md)

### The solar cell

| Quantity | Formula |
|---|---|
| Illuminated I–V | $I = I_L-I_0\left(e^{qV/nk_BT}-1\right)$ |
| Open circuit | $V_{oc} = nV_T^{\rm therm}\ln(I_L/I_0+1)\approx E_g/q-0.4$ V |
| Fill factor (ideal) | $\mathrm{FF}_0 = \dfrac{v_{oc}-\ln(v_{oc}+0.72)}{v_{oc}+1}$, $v_{oc} = V_{oc}/nV_T^{\rm therm}$ |
| Efficiency | $\eta = V_{oc}I_{sc}\mathrm{FF}/P_{\rm in}$ |
| Series-resistance loss | $\mathrm{FF}/\mathrm{FF}_0\approx1-R_s/R_{ch}$, $R_{ch} = V_{oc}/I_{sc}$ |
| Limit | $\approx33\%$ at $E_g\approx1.34$ eV (single junction, one sun) |
| Temperature | $dV_{oc}/dT\approx-2$ mV/°C; module $\approx-0.35\%$/°C |

*From* [4.3](lessons/04-03-solar-cell.md)

### Fabrication

| Quantity | Formula |
|---|---|
| Deal–Grove | $x^2+Ax = B(t+\tau)$; linear then parabolic |
| Silicon consumed | $0.44x$ per $x$ of oxide grown |
| Lithography | $\mathrm{CD} = k_1\lambda/\mathrm{NA}$, $\mathrm{DOF} = k_2\lambda/\mathrm{NA}^2$ |
| Implant profile | $N(x) = \dfrac{D}{\sqrt{2\pi}\Delta R_p}\exp\left[-\dfrac{(x-R_p)^2}{2\Delta R_p^2}\right]$ |
| Peak concentration | $N_{\rm peak}\approx0.4D/\Delta R_p$ |
| Diffusion | $L = \sqrt{Dt}$, $D = D_0e^{-E_A/k_BT}$ |
| Yield | $Y = (1+AD_0)^{-2}$ (Bose–Einstein) or $e^{-AD_0}$ (Poisson) |

*From* [4.4](lessons/04-04-device-fabrication.md)

### Useful anchors

| Quantity | Value |
|---|---|
| $V_T^{\rm therm}\ln10$ | 59.6 mV — one decade of current |
| Si diode $V_F$ at 1 mA | ~0.7 V; Ge ~0.33 V; GaAs ~1.17 V; Schottky ~0.3 V |
| $C_{ox}$ at $t_{ox} = 10$ nm | 345 nF/cm² |
| BJT $g_m$ at 1 mA | 38.6 mS ($I_C/V_T^{\rm therm}$) |
| BJT intrinsic gain | $V_A/V_T^{\rm therm}\approx2000$–6000 |
| MOSFET intrinsic gain | 10–50 in a short-channel process |
| $\eta = 1$ responsivity at 800 nm | 0.645 A/W |
| Si solar $J_{sc}$, one sun | ~42 mA/cm² |

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Band structure, direct vs indirect gaps, density of states | [`condensed-matter` 3.6](../condensed-matter/lessons/03-06-bands-zones-dos.md), [3.7](../condensed-matter/lessons/03-07-metals-insulators-semiconductors.md) |
| Effective mass and Bloch's theorem | [`condensed-matter` 3.3](../condensed-matter/lessons/03-03-blochs-theorem.md), [3.5](../condensed-matter/lessons/03-05-tight-binding.md) |
| Intrinsic carrier statistics, $N_c$, $N_v$, mass action | [`condensed-matter` 4.1](../condensed-matter/lessons/04-01-intrinsic-carriers.md) |
| Dopant ionization energies and the hydrogenic model | [`condensed-matter` 4.2](../condensed-matter/lessons/04-02-doping-extrinsic.md) |
| Fermi level vs temperature; the three regimes | [`condensed-matter` 4.3](../condensed-matter/lessons/04-03-fermi-level-temperature-doping.md) |
| Drift mobility from scattering, $\mu = q\tau/m^*$, the Hall effect | [`condensed-matter` 4.4](../condensed-matter/lessons/04-04-transport-mobility-hall.md) |
| The p–n junction at solid-state level | [`condensed-matter` 4.5](../condensed-matter/lessons/04-05-pn-junction.md) |
| Fermi–Dirac statistics and the Boltzmann approximation | [`stat-mech` 4.2](../stat-mech/lessons/04-02-bose-einstein-fermi-dirac.md) |
| Circuit-level diode, BJT and MOSFET models and biasing | [`electronics` 1.2](../electronics/lessons/01-02-pn-junction-diode-models.md), [2.1](../electronics/lessons/02-01-bjt-how-it-works.md), [2.4](../electronics/lessons/02-04-mosfet-how-it-works.md) |
| Zener regulators and clipper circuits | [`electronics` 1.4](../electronics/lessons/01-04-clippers-clampers-zener.md) |
| CMOS logic gates | [`electronics` 4.3](../electronics/lessons/04-03-cmos-inverter-gates.md) |
| Poisson's equation and electrostatic potential | [`em-refresher` 1.2](../em-refresher/lessons/01-02-gauss-law.md), [1.3](../em-refresher/lessons/01-03-electric-potential.md) |
| Capacitance | [`em-refresher` 2.1](../em-refresher/lessons/02-01-capacitance.md) |
| WKB tunnelling through a barrier | [`quantum-mechanics` 2.5](../quantum-mechanics/lessons/02-05-scattering-barriers-tunneling.md) |
| Stimulated emission, gain, optical cavities and laser threshold | [`photonics-quantum-optics` 1.3](../photonics-quantum-optics/lessons/01-03-absorption-spontaneous-stimulated-emission.md), [1.4](../photonics-quantum-optics/lessons/01-04-gain-population-inversion-laser-threshold.md), [1.5](../photonics-quantum-optics/lessons/01-05-optical-cavities-laser-modes.md) |
| Fick's law and the Einstein relation for particles | [`biophysics` 1.3](../biophysics/lessons/01-03-diffusion-ficks-laws.md), [1.4](../biophysics/lessons/01-04-einstein-relation.md) |
| Solving linear ODEs and the diffusion equation | [`ode-refresher`](../ode-refresher/syllabus.md), [`pdes`](../pdes/syllabus.md) |
| Crystal defects, diffusion in solids, Arrhenius kinetics | [`materials-science` 2.1](../materials-science/lessons/02-01-point-defects-solid-solutions.md), [2.5](../materials-science/lessons/02-05-diffusion-ii-transient-arrhenius.md) |
| Blackbody radiation and detailed balance | [`stat-mech`](../stat-mech/syllabus.md) |

## Pitfalls

### Equilibrium versus not

- $np = n_i^2$ is an **equilibrium** statement. Every interesting device violates it — that violation is what the quasi-Fermi split measures.
  *([1.1](lessons/01-01-carriers-doping-fermi-level.md), [1.2](lessons/01-02-drift-diffusion-einstein.md))*
- $n_i$ computed from $\sqrt{N_cN_v}e^{-E_g/2kT}$ gives $6.7\times10^9$, not the measured $10^{10}$. Use the measured value; treat the formula as showing the scaling.
  *([1.1](lessons/01-01-carriers-doping-fermi-level.md))*
- Doping adds charge-neutral atoms. The fixed ionic charge is invisible until a junction sweeps the carriers away — which is the whole mechanism of a depletion region.
  *([1.1](lessons/01-01-carriers-doping-fermi-level.md), [2.1](lessons/02-01-junction-electrostatics.md))*
- Net doping sets the carrier count; **total** doping sets the scattering. A compensated region has the worst of both.
  *([1.1](lessons/01-01-carriers-doping-fermi-level.md))*

### Signs and which mechanism

- Diffusion signs: $J_p = -qD_p\,dp/dx$ but $J_n = +qD_n\,dn/dx$. Check the physics (carriers flow down the gradient), not the algebra.
  *([1.2](lessons/01-02-drift-diffusion-einstein.md))*
- Bias sign: $V$ is **positive for forward** and appears as $V_{bi}-V$, so a reverse bias makes that term *larger*.
  *([2.1](lessons/02-01-junction-electrostatics.md))*
- Drift is negligible for **minority** carriers in **quasi-neutral** regions and dominant inside depletion regions. Know which region you are in.
  *([1.2](lessons/01-02-drift-diffusion-einstein.md), [1.4](lessons/01-04-continuity-equations.md))*
- $D$ and $\mu$ are one parameter, not two. Given either, the other follows exactly.
  *([1.2](lessons/01-02-drift-diffusion-einstein.md))*
- Don't carry $\mu_n = 1350$ everywhere — that is the *lightly doped* value, and it falls fourfold by $10^{18}$.
  *([1.2](lessons/01-02-drift-diffusion-einstein.md))*

### Lifetime, recombination, and length scales

- Recombination in silicon is a **defect** phenomenon (SRH), not band-to-band. Lifetime measures purity and ranges over six orders of magnitude.
  *([1.3](lessons/01-03-generation-recombination.md))*
- **Midgap** traps are the killers, because a centre must catch both carrier types. Shallow dopants at $10^{18}$ are harmless; gold at $10^{12}$ is not.
  *([1.3](lessons/01-03-generation-recombination.md))*
- Low-level injection fails in an LED, a concentrated solar cell, a power diode, and a saturated BJT.
  *([1.3](lessons/01-03-generation-recombination.md))*
- $L = \sqrt{D\tau}$, so cleaning the silicon a hundredfold lengthens $L$ only tenfold.
  *([1.3](lessons/01-03-generation-recombination.md), [1.4](lessons/01-04-continuity-equations.md))*
- Using the long-base formula on a short region errs by $L/W$ — routinely 10–100×, not a correction.
  *([1.4](lessons/01-04-continuity-equations.md))*
- Surfaces have $S\sim10^5$ cm/s bare and $\sim10$ passivated. Ignoring them can dominate everything in the bulk.
  *([1.3](lessons/01-03-generation-recombination.md), [1.4](lessons/01-04-continuity-equations.md))*

### Junctions

- The depletion region is almost never symmetric: widths are in *inverse* ratio to the dopings.
  *([2.1](lessons/02-01-junction-electrostatics.md))*
- $W\propto\sqrt{V_{bi}-V}$, not $V$ — which is why $C_j\propto V^{-1/2}$ and $V_B\propto1/N$.
  *([2.1](lessons/02-01-junction-electrostatics.md), [2.4](lessons/02-04-reverse-breakdown.md))*
- $V_{bi}$ cannot be measured with a voltmeter — the contact potentials cancel it exactly. Infer it from the $1/C^2$ intercept.
  *([2.1](lessons/02-01-junction-electrostatics.md))*
- $I_0$ is not a constant: it doubles about every 10 °C, which is the origin of all bipolar thermal drift.
  *([2.2](lessons/02-02-ideal-diode-equation.md))*
- Measured reverse current is usually **far larger** than $I_0$ and *rises* with bias — that is depletion-region generation, with half the activation energy.
  *([2.2](lessons/02-02-ideal-diode-equation.md))*
- Ideality is not one number across the curve: 120 mV/decade at low bias, 60 in the middle, resistive at high.
  *([2.2](lessons/02-02-ideal-diode-equation.md))*
- Don't forget the area in a $1/C^2$ extraction — the doping formula carries $A^2$.
  *([2.3](lessons/02-03-junction-diffusion-capacitance.md))*
- Junction capacitance **falls** with reverse bias. Diffusion capacitance dominates by 3–4 orders of magnitude under forward bias.
  *([2.3](lessons/02-03-junction-diffusion-capacitance.md))*
- Breakdown itself is non-destructive; *power dissipation* is what kills. Always ask whether the current is limited.
  *([2.4](lessons/02-04-reverse-breakdown.md))*
- Most parts sold as "Zener" diodes above 6 V break down by avalanche. Check the temperature coefficient.
  *([2.4](lessons/02-04-reverse-breakdown.md))*
- Schottky–Mott barrier predictions fail on silicon because of Fermi-level pinning; real $\phi_B$ clusters at 0.6–0.8 eV regardless of metal.
  *([2.5](lessons/02-05-metal-semiconductor-heterojunctions.md))*
- An ohmic contact has the same barrier as a rectifying one — only thinner. Doping made it transparent, not absent.
  *([2.5](lessons/02-05-metal-semiconductor-heterojunctions.md))*
- A Schottky's low $V_F$ and its high leakage are the *same* fact, both $\propto e^{-q\phi_B/k_BT}$.
  *([2.5](lessons/02-05-metal-semiconductor-heterojunctions.md))*

### Transistors

- $V_{BE}$ is the physical control variable; $I_B$ is a side-effect. Current-controlled models hide the exponential temperature behaviour.
  *([3.1](lessons/03-01-bjt-transistor-action.md))*
- $\beta = \alpha/(1-\alpha)$ magnifies tiny variations: a 0.5% shift in $\alpha$ doubles $\beta$. Never design for a specific $\beta$.
  *([3.1](lessons/03-01-bjt-transistor-action.md), [3.2](lessons/03-02-bjt-currents-and-gain.md))*
- Compute **both** loss terms before optimizing $\beta$ — effort spent on the smaller one is largely wasted.
  *([3.2](lessons/03-02-bjt-currents-and-gain.md))*
- A saturated BJT is slow to turn off, because both junctions inject and the stored charge is large.
  *([3.1](lessons/03-01-bjt-transistor-action.md))*
- $\psi_s = 2\phi_F$ is a **convention**, not a phase transition — but the exponential makes it sharp, and $W$ pins at $W_{\max}$ because inversion is a far better charge sink.
  *([3.3](lessons/03-03-mos-capacitor.md))*
- The high- and low-frequency C–V curves differ only in whether the inversion layer can be replenished. A real MOSFET, fed by its source and drain, always behaves "low-frequency".
  *([3.3](lessons/03-03-mos-capacitor.md))*
- $V_{FB}$ is a **leading** term, not a correction — typically $-1$ V, comparable to $V_T$ itself.
  *([3.3](lessons/03-03-mos-capacitor.md), [3.4](lessons/03-04-threshold-voltage-cv.md))*
- $V_T$ depends on $V_{SB}$, on temperature, on $L$, and on $V_{DS}$. And the extraction method changes it by tens of millivolts.
  *([3.4](lessons/03-04-threshold-voltage-cv.md), [3.6](lessons/03-06-short-channel-effects-scaling.md))*
- Pinch-off does **not** stop the current — it makes the current independent of $V_{DS}$.
  *([3.5](lessons/03-05-mosfet-iv.md))*
- Use *surface* mobility, 2–4× below bulk, and check $V_{ov}/L$ against $10^4$ V/cm before trusting the square law.
  *([3.5](lessons/03-05-mosfet-iv.md))*
- 60 mV/decade is thermodynamics, not an engineering shortfall. It is why voltage scaling stopped.
  *([3.5](lessons/03-05-mosfet-iv.md), [3.6](lessons/03-06-short-channel-effects-scaling.md))*
- Dimensions kept scaling; **voltage** stopped. Fields have risen ever since, which is why reliability became a first-order constraint.
  *([3.6](lessons/03-06-short-channel-effects-scaling.md))*

### Light

- A material cannot absorb below its gap. Silicon is genuinely transparent past 1.11 µm and can never detect telecom wavelengths.
  *([4.1](lessons/04-01-light-absorption-emission-detection.md))*
- $\alpha$ varies by three orders of magnitude across the visible in silicon. Always look it up at your wavelength.
  *([4.1](lessons/04-01-light-absorption-emission-detection.md))*
- Detector thickness and bandwidth trade directly. There is no point exceeding $\alpha W\approx2$–3.
  *([4.1](lessons/04-01-light-absorption-emission-detection.md))*
- Avalanche gain is not free sensitivity — it adds excess noise, and helps only while amplifier noise dominates.
  *([4.1](lessons/04-01-light-absorption-emission-detection.md))*
- An LED's loss is **extraction**, not the semiconductor: about 2% escapes a flat surface at $n_s = 3.5$.
  *([4.2](lessons/04-02-led-and-laser-diode.md))*
- Thinner active layers cut laser threshold but also cut $\Gamma$. The resolution is separate confinement, not a compromise thickness.
  *([4.2](lessons/04-02-led-and-laser-diode.md))*
- $I_{\rm th}\propto e^{T/T_0}$, so $T_0$ matters as much as $I_{\rm th}$ — it decides whether a device needs a cooler.
  *([4.2](lessons/04-02-led-and-laser-diode.md))*
- $V_{oc}$ rises only **logarithmically** with light intensity — 60 mV per decade.
  *([4.3](lessons/04-03-solar-cell.md))*
- $R_s$ flattens the curve near $V_{oc}$; $R_{sh}$ tilts it near $I_{sc}$. Distinct signatures, distinct causes.
  *([4.3](lessons/04-03-solar-cell.md))*
- A narrower gap absorbs more photons but extracts less from each. The product peaks near 1.34 eV.
  *([4.3](lessons/04-03-solar-cell.md))*
- The Shockley–Queisser limit applies to a *single* junction under *one sun*; tandems and concentrators legitimately exceed it.
  *([4.3](lessons/04-03-solar-cell.md))*

### Making it

- Oxidation **consumes** silicon — $0.44x$ per $x$ grown — which is why the resulting interface is clean.
  *([4.4](lessons/04-04-device-fabrication.md))*
- Higher NA improves resolution linearly but destroys depth of focus quadratically.
  *([4.4](lessons/04-04-device-fabrication.md))*
- Implant **dose** is cm$^{-2}$; **concentration** is cm$^{-3}$. Converting needs the straggle.
  *([4.4](lessons/04-04-device-fabrication.md))*
- Every thermal step after an implant diffuses it. Thermal budget is cumulative across the whole flow.
  *([4.4](lessons/04-04-device-fabrication.md))*
- Yield falls steeply with die area — 91% at 100 mm², 62% at 600 mm². Die size is a design variable, not a given.
  *([4.4](lessons/04-04-device-fabrication.md))*

---

## Conventions

- **One card per course**, covering every lesson. The linter checks that every
  lesson file is cited somewhere on this card.
- **Intuition first**, same as lessons: a plain-English line before any formula.
- **Headings are anchors.** Renaming a `###` breaks inbound lesson links.
- **No prose dollar signs** — write "10 dollars", not the symbol.
- Length is not capped the way a lesson's is: this is a lookup surface.
