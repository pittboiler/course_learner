# Fusion & Plasma Engineering · Lesson 3.3: RF heating & current drive

> ⏱ ~15 min · Module 3: Heating, Transport & Plasma–Wall Interaction · Builds on: [3.2 Neutral-beam injection](03-02-neutral-beam-injection.md), [em-refresher](../../em-refresher/syllabus.md) · Unlocks: [3.4 Transport & confinement scaling](03-04-transport-confinement-scaling.md)

## Why this matters

Ohmic heating stalls near a keV ([3.1](03-01-ohmic-heating-ceiling.md)) and neutral beams are big, expensive, and hard to aim ([3.2](03-02-neutral-beam-injection.md)). The other lever is a radio antenna: launch an electromagnetic wave into the plasma and let it dump its energy exactly where its frequency matches a natural plasma oscillation. ITER's heating mix is built on this — tens of MW of ion-cyclotron and electron-cyclotron power — and the same trick, aimed precisely, is how you *steer* a plasma: suppress a tearing mode, or drive current where the transformer can't reach. Master one idea here — **wave frequency picks the deposition location** — and the whole heating-and-control toolkit falls into place.

## The idea

Push a child on a swing at the swing's own rhythm and each push adds energy; push at the wrong rhythm and you fight yourself. Plasma particles have natural rhythms too. A charged particle in a magnetic field $B$ spirals around the field line at its **cyclotron frequency** — ions one way, the much lighter electrons far faster. Send in a wave oscillating at exactly that frequency and the wave's electric field pushes in step with the gyration every orbit: resonant absorption. The particles heat up; the wave dies away right there.

Two facts make this a precision tool:

1. **Different species, wildly different rhythms.** Ions gyrate at tens of MHz (ion-cyclotron range, "ICRH"); electrons — lighter by thousands — gyrate at ~100+ GHz (electron-cyclotron range, "ECRH"). Pick your frequency and you pick *whom* you heat: ICRH warms the ions (the ones that fuse), ECRH warms the electrons.

2. **The field is not uniform.** In a tokamak the toroidal field falls with major radius, $B \propto 1/R$ — strong on the inboard side, weak on the outboard. So the resonance condition $\text{wave frequency} = \text{cyclotron frequency}(R)$ is met at *one specific major radius*. Change the frequency and the resonant layer slides in or out. You aim heat by tuning a dial.

There's a bonus. A wave carries momentum as well as energy. Launch it so it pushes electrons preferentially one way around the torus and you drive a **current** without a transformer — **non-inductive current drive**. That matters because the tokamak's ohmic transformer ([2.3](02-03-the-tokamak-recipe.md)) has finite volt-seconds and can only pulse. Steady-state operation needs the plasma current sustained by beams and waves (plus the self-generated bootstrap current) instead. Lower-hybrid waves are the most efficient current-drivers we have; electron-cyclotron current drive is the most surgically localized.

## The formal version

**Cyclotron (gyro) frequency.** A particle of charge $q$ and mass $m$ in field $B$ orbits at angular frequency

$$\Omega = \frac{qB}{m}, \qquad f = \frac{\Omega}{2\pi} = \frac{qB}{2\pi m}.$$

In words: the spiral rate is set by charge-to-mass ratio times field — heavier particles turn slower, stronger field turns them faster. For ions $\Omega_i = qB/m_i$ (the ion-cyclotron frequency); for electrons $\Omega_e = eB/m_e$ (the electron-cyclotron frequency). Since $m_i/m_e$ is thousands, $\Omega_e \gg \Omega_i$.

**Resonance condition.** A launched wave of frequency $\omega$ deposits its energy where

$$\omega = \Omega(R) = \frac{qB(R)}{m}.$$

In words: the wave gives up energy where the plasma's local gyration keeps step with it. (Absorption can also happen at harmonics $\omega = n\Omega$, $n=2,3,\dots$; the fundamental is the cleanest picture.)

**Resonance location in a tokamak.** With $B(R) = B_0 R_0 / R$ (toroidal field $B_0$ measured at major radius $R_0$), a fixed launch frequency $\omega$ resonates at

$$R_{\text{res}} = \frac{qB_0R_0}{m\,\omega} = \frac{R_0 B_0}{B_{\text{res}}}, \qquad B_{\text{res}} = \frac{m\,\omega}{q}.$$

In words: solve for the radius where the field has exactly the value the resonance needs — larger frequency means larger required field means a resonance farther *inboard* (smaller $R$). This is the whole aiming principle: the frequency is the address of the deposition layer.

**Non-inductive current drive.** A wave that deposits net toroidal momentum on the electrons drives a steady current $I_{\text{CD}}$. Its efficiency is captured by a dimensionless figure of merit

$$\gamma_{\text{CD}} = \frac{\bar{n}\,I_{\text{CD}}\,R}{P},$$

with $\bar{n}$ the density, $R$ the major radius, and $P$ the launched power. In words: for a given wave scheme, driving more current costs more power, and the cost grows with density and machine size — $\gamma_{\text{CD}}$ tells you how many amps per watt you get. Lower-hybrid has the largest $\gamma_{\text{CD}}$; that is why it is the workhorse for bulk non-inductive current.

## Picture

![In a tokamak the toroidal field falls as B(R) proportional to 1/R; a wave launched from the low-field (outboard) side propagates inward and dumps its energy at the coral resonance layer, the single radius where the wave frequency equals the local cyclotron frequency qB/2 pi m](assets/03-03-fig1.svg)

The grey curve is the field profile $B(R)$: strong on the inboard (high-field) side at small $R$, weak on the outboard side at large $R$. A wave (blue) launched from an antenna on the low-field side travels inward and is absorbed at the coral **resonance layer** — the one radius where $qB(R)/2\pi m$ equals the launched frequency. Dial the frequency up and the resonant field $B_{\text{res}}$ rises, so the layer slides inboard (smaller $R$); dial it down and the layer slides outboard. Frequency is the aiming knob.

## Worked examples

**Example 1 (resonant frequencies and where they land).** Take a machine with $B_0 = 5\,\text{T}$ at $R_0 = 6\,\text{m}$, deuterium ions. Find the fundamental ion- and electron-cyclotron frequencies on axis, then find where a fixed 120-GHz wave resonates.

*Ion (ICRH).* Deuteron mass $m_D \approx 2m_p = 3.34\times10^{-27}\,\text{kg}$, charge $q = 1.60\times10^{-19}\,\text{C}$:

$$f_{ci} = \frac{qB}{2\pi m_D} = \frac{(1.60\times10^{-19})(5)}{2\pi(3.34\times10^{-27})} = \frac{8.0\times10^{-19}}{2.10\times10^{-26}} \approx 3.8\times10^{7}\,\text{Hz} = 38\,\text{MHz}.$$

Tens of MHz — a shortwave-radio frequency. That is the ion-cyclotron range; an ICRH antenna is essentially a big loop launching ~40-MHz power, and it heats the *ions*.

*Electron (ECRH).* Same field, but $m_e = 9.11\times10^{-31}\,\text{kg}$ — smaller by $m_D/m_e \approx 3670$, so the frequency is larger by the same factor:

$$f_{ce} = \frac{qB}{2\pi m_e} = \frac{8.0\times10^{-19}}{5.72\times10^{-30}} \approx 1.40\times10^{11}\,\text{Hz} = 140\,\text{GHz}.$$

A handy shortcut: $f_{ce} = 28\,\text{GHz per tesla}$. At 5 T that is $28\times5 = 140\,\text{GHz}$ — microwaves from a gyrotron, and they heat the *electrons*.

*Aiming.* A launched 120-GHz wave needs $B_{\text{res}} = f/(28\,\text{GHz/T}) = 120/28 = 4.29\,\text{T}$. That field sits at

$$R_{\text{res}} = \frac{R_0 B_0}{B_{\text{res}}} = \frac{(6)(5)}{4.29} \approx 7.0\,\text{m}.$$

So 120 GHz deposits at $R = 7.0\,\text{m}$ — a full metre *outboard* of the axis. Want it on axis ($R = 6\,\text{m}$, $B = 5\,\text{T}$)? Launch $28\times5 = 140\,\text{GHz}$. The frequency literally selects the radius.

**Example 2 (which scheme for which job).** You have three tasks in the same 5-T machine. Match each to ICRH, ECRH, or lower-hybrid, with the reasoning.

*Task A — heat the bulk ions toward the ~15-keV fusion window.* You want energy in the *ions* (they fuse), deposited deep in the core, robustly. **ICRH** (~40 MHz here): it couples directly to ions, penetrates well, and can push many MW into the core. It is the natural bulk ion-heating tool.

*Task B — kill a neoclassical tearing mode sitting on the $q = 2$ surface at $R = 6.5\,\text{m}$.* This is surgery: you need power dumped in a layer a few cm wide, on demand, at a radius you can move shot-to-shot. **ECRH / ECCD** — because the resonance layer is razor-thin and you steer it with a mirror. The frequency to hit $R = 6.5$: $B(6.5) = (5)(6)/6.5 = 4.62\,\text{T}$, so $f = 28\times4.62 \approx 129\,\text{GHz}$. Drive a little co-current there (ECCD) and you refill the magnetic island, healing the mode. ICRH is far too broad for this; lower-hybrid deposits off-axis, not on a chosen surface.

*Task C — sustain a large fraction of the plasma current in steady state.* You need amps-per-watt, off-axis, continuously — not localized surgery. **Lower-hybrid current drive** (a few GHz, between the ion and electron cyclotron ranges): it has the highest current-drive efficiency $\gamma_{\text{CD}}$ of the wave schemes, which is exactly why LHCD is the classic non-inductive current workhorse (with NBI, [3.2](03-02-neutral-beam-injection.md), and the bootstrap current filling in the rest).

The pattern: **ICRH for bulk ion heat, ECRH for localized heat and control, lower-hybrid for efficient current drive.**

## Watch out

- **You might think** a bigger antenna power always means hotter *plasma* everywhere. **Actually** RF heating is *resonant and local* — power lands in a thin layer at $R_{\text{res}}$ and in one species. That locality is a feature (aim it) and a hazard (miss the resonance — wrong frequency or wrong field — and the wave reflects or heats nothing useful).
- **You might think** ICRH and ECRH are interchangeable "microwave heating." **Actually** the factor $m_i/m_e \sim 3670$ separates them by that same factor in frequency (tens of MHz vs ~100+ GHz) *and* in who gets heated (ions vs electrons) *and* in hardware (loop antennas vs gyrotrons and steerable mirrors). They are different tools for different jobs.
- **You might think** current drive is a free way to run forever. **Actually** it costs real launched power — driving a mega-amp takes tens of MW (see P3) — so it eats into the plant's recirculating power budget. Steady-state tokamaks lean hard on the *self-driven* bootstrap current to keep the externally driven fraction, and its power cost, affordable.

## One-liner

> Launch an EM wave at a plasma's natural gyration frequency and it dumps energy exactly where $\omega = qB(R)/m$ — tens of MHz for ions (ICRH), ~100+ GHz for electrons (ECRH) — and since $B \propto 1/R$, the frequency you choose is the radius you heat.

## Problems

**P1 (🟢)** In a JET-like field of $B = 3\,\text{T}$, compute the fundamental ion-cyclotron frequency for a *hydrogen* (proton) minority species and for the *deuterium* bulk. Which is higher, and by exactly what factor? ($m_p = 1.67\times10^{-27}\,\text{kg}$, $m_D \approx 2m_p$.)

**P2 (🟡)** Same machine as the examples ($B_0 = 5\,\text{T}$ at $R_0 = 6\,\text{m}$). (a) A gyrotron launches 150 GHz. Using $f_{ce} = 28\,\text{GHz/T}$, find the resonant field $B_{\text{res}}$ and the resonance radius $R_{\text{res}}$; is it inboard or outboard of the axis? (b) What frequency would you launch to deposit at $R = 6.5\,\text{m}$ instead?

**P3 (🔴, optional)** You want to drive $I_{\text{CD}} = 1\,\text{MA}$ of non-inductive current by lower-hybrid in a plasma of density $\bar{n} = 1\times10^{20}\,\text{m}^{-3}$, major radius $R = 6\,\text{m}$, with figure of merit $\gamma_{\text{CD}} = 0.2\times10^{20}\ \text{A}\,\text{W}^{-1}\text{m}^{-2}$ (in SI, $\gamma_{\text{CD}} = 2\times10^{19}\ \text{A}\,\text{W}^{-1}\text{m}^{-2}$). Using $\gamma_{\text{CD}} = \bar{n}\,I_{\text{CD}}\,R/P$, find the launched power $P$. Comment on what this implies for steady-state operation and the value of the bootstrap current.

<details>
<summary>Solutions</summary>

**P1** Fundamental $f_c = qB/2\pi m$ with $B = 3\,\text{T}$, $q = 1.60\times10^{-19}\,\text{C}$.

Proton: $f_{cH} = \dfrac{(1.60\times10^{-19})(3)}{2\pi(1.67\times10^{-27})} = \dfrac{4.80\times10^{-19}}{1.05\times10^{-26}} \approx 4.6\times10^{7}\,\text{Hz} = 46\,\text{MHz}.$

Deuteron ($m_D = 2m_p$, so half the frequency): $f_{cD} = 46/2 = 23\,\text{MHz}.$

Hydrogen is higher, by exactly a factor of **2** — the charge is the same but deuterium has twice the mass, and $f_c \propto 1/m$. (This is the physics behind *minority heating*: a splash of hydrogen in a deuterium plasma has its own, well-separated resonance at 2× the deuterium frequency, so you can target the minority ions cleanly.)

**P2** (a) $B_{\text{res}} = f/(28\,\text{GHz/T}) = 150/28 = 5.36\,\text{T}$. Then

$$R_{\text{res}} = \frac{R_0 B_0}{B_{\text{res}}} = \frac{(6)(5)}{5.36} = \frac{30}{5.36} \approx 5.6\,\text{m}.$$

Since $5.6\,\text{m} < 6\,\text{m}$, the resonance is **inboard** of the axis (higher frequency → higher required field → smaller radius, consistent with $B\propto1/R$).

(b) To deposit at $R = 6.5\,\text{m}$: the field there is $B = B_0 R_0/R = (5)(6)/6.5 = 4.62\,\text{T}$, so launch

$$f = 28\times4.62 \approx 129\,\text{GHz}.$$

Lower frequency pushes the layer outboard, as expected. (Note 129 GHz < 140 GHz on-axis < 150 GHz inboard — the frequency ordering mirrors the radius ordering, inverted.)

**P3** Solve for power: $P = \dfrac{\bar{n}\,I_{\text{CD}}\,R}{\gamma_{\text{CD}}}$. In SI units,

$$P = \frac{(1\times10^{20}\,\text{m}^{-3})(1\times10^{6}\,\text{A})(6\,\text{m})}{2\times10^{19}\ \text{A}\,\text{W}^{-1}\text{m}^{-2}} = \frac{6\times10^{26}}{2\times10^{19}}\,\text{W} = 3\times10^{7}\,\text{W} = 30\,\text{MW}.$$

So **30 MW of launched power buys just 1 MA of driven current.** A reactor wants ~10–15 MA. Driving all of it externally would cost hundreds of MW — comparable to or exceeding the plant's own output, killing the economics. That is why steady-state tokamaks rely on the *self-generated bootstrap current* (driven for free by the pressure gradient) to supply the majority of $I_p$, leaving external current drive to trim the profile and control instabilities. Non-inductive current drive is the enabling technology for steady state; the bootstrap current is what makes it affordable. (Carry the units: $\text{m}^{-3}\cdot\text{A}\cdot\text{m} / (\text{A}\,\text{W}^{-1}\text{m}^{-2}) = \text{W}$. ✓)

</details>

## Flashback

**From Lesson 3.2 (neutral-beam injection):** A neutral beam injects $P_{\text{NBI}} = 20\,\text{MW}$ of deuterium atoms accelerated to $E_b = 100\,\text{keV}$ each. (a) At what rate (atoms per second) are fast particles delivered to the plasma? (b) Once ionized, that stream is an ion current; how many amperes of injected charge does it represent? ($q = 1.60\times10^{-19}\,\text{C}$.)

<details>
<summary>Solution</summary>

(a) Each atom carries $E_b = 100\,\text{keV} = 10^{5}\times1.60\times10^{-19} = 1.60\times10^{-14}\,\text{J}$. The particle rate is power ÷ energy-per-particle:

$$\dot{N} = \frac{P_{\text{NBI}}}{E_b} = \frac{20\times10^{6}}{1.60\times10^{-14}} \approx 1.25\times10^{21}\ \text{atoms/s}.$$

(b) Each ionized deuteron carries charge $q$, so the injected charge current is

$$I = \dot{N}\,q = (1.25\times10^{21})(1.60\times10^{-19}) = 200\,\text{A}.$$

In words: the beam delivers about $1.25\times10^{21}$ fast deuterons per second, equivalent to 200 A of charge streaming in one toroidal direction — the seed of NBI *current drive*, the beam-driven cousin of the wave-driven current in this lesson. (The plasma current the beam actually drives is amplified beyond this bare 200 A by the physics of how fast ions push the background electrons — but the injected charge sets the scale.)

</details>

## Connections

- **Backward:** this closes the heating trilogy — ohmic ([3.1](03-01-ohmic-heating-ceiling.md)) hits a keV ceiling, beams ([3.2](03-02-neutral-beam-injection.md)) add particles and momentum, and RF adds resonant, aimable energy — and it settles the volt-second problem raised in [2.3](02-03-the-tokamak-recipe.md): non-inductive current drive is how a tokamak escapes pulsed operation. The cyclotron frequency $qB/m$ is the same gyration that set the drifts in [2.1](02-01-bottles-to-tori.md).
- **Forward:** the deposition *profile* an RF scheme paints — core vs edge, ions vs electrons — is an input to the transport and confinement scaling of [3.4](03-04-transport-confinement-scaling.md), and localized ECCD is a front-line tool against the tearing and disruption physics that [2.4](02-04-mhd-instabilities.md) warned about.
- **Sideways (E&M / waves):** launching, propagating, and resonantly absorbing an EM wave in a magnetized medium is the [em-refresher](../../em-refresher/syllabus.md) applied to a dispersive plasma — the cutoffs and resonances of the cold-plasma dielectric are developed properly in [plasma-physics](../../plasma-physics/syllabus.md). The swing-at-its-own-rhythm intuition is textbook resonance, the same math as the driven harmonic oscillator.
