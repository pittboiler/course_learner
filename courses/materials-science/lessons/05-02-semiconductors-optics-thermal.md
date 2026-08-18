# Materials Science & Engineering · Lesson 5.2: Semiconductors, optics & thermal response

> ⏱ ~15 min · Module 5: Electronic, Optical & Thermal Properties · Builds on: [5.1 Electronic properties & the band picture](05-01-electronic-properties-band-picture.md), [1.1 Bonding & the energy well](01-01-bonding-energy-well.md) · Unlocks: [5.3 Materials classes & selection](05-03-materials-classes-selection.md)

## Why this matters

Pure silicon is a mediocre conductor and a lousy switch. Add one boron atom per ten million and it becomes the raw material of every chip, solar cell, and LED you own. That trick — **doping** — is how we dial a semiconductor's conductivity across *nine orders of magnitude* without changing the crystal. The same band gap that controls conduction also controls **color**: it decides which photons a material swallows and which it lets pass, which is why silicon looks like a mirror but glass is clear. And when you heat a solid it expands and conducts heat — both traceable to pictures you've already drawn. This lesson wires the band gap from [5.1](05-01-electronic-properties-band-picture.md) into electronics, optics, and heat.

## The idea

In [5.1](05-01-electronic-properties-band-picture.md) the gap $E_g$ was the toll an electron pays to jump from the full **valence band** into the empty **conduction band**, where it can carry current. In pure ("**intrinsic**") silicon at room temperature only a trickle of electrons has enough thermal energy to pay that toll, so conduction is feeble.

Doping cheats the toll. Slip in an atom with **one extra valence electron** (phosphorus, group V, into group-IV silicon) and that spare electron sits on a level *just below* the conduction band — a tiny step instead of the full gap. It donates an electron easily: **n-type**, carriers are negative electrons. Slip in an atom with **one too few** (boron, group III) and it creates a level *just above* the valence band that greedily accepts an electron, leaving behind a **hole** — a missing electron that behaves like a mobile positive charge. **p-type**, carriers are positive holes. Either way you've planted a huge population of ready carriers without heating anything.

Optics is the same gap seen by light. A photon carries energy $h\nu$. It can only be absorbed by kicking an electron across the gap — and it can only do that if it carries *at least* $E_g$. Too weak a photon (energy below $E_g$) finds no electron it can lift, so it sails straight through: the material is **transparent** to it. Strong enough, and it's swallowed: **opaque**. Run the process backwards — an electron falling back across the gap — and the material *emits* a photon of about $E_g$: that's **luminescence**, the LED.

## The formal version

**Conductivity with two carriers.** Both electrons and holes carry current, so [5.1](05-01-electronic-properties-band-picture.md)'s $\sigma = n e \mu$ gains a second term:

$$\sigma = n\,e\,\mu_e + p\,e\,\mu_h.$$

*In words: total conductivity is electrons times their mobility plus holes times theirs.* Here $n$ and $p$ are the electron and hole number densities (carriers per cubic meter, $\mathrm{m^{-3}}$), $e = 1.6\times10^{-19}\ \mathrm{C}$ is the elementary charge, and $\mu_e,\mu_h$ are the **mobilities** (drift speed per unit field, $\mathrm{m^2/(V\cdot s)}$). In **intrinsic** material $n = p = n_i$, the small thermally-excited count. In **extrinsic** (doped) material one term dominates: an n-type crystal with donor density $N_d$ has $n \approx N_d \gg p$, so $\sigma \approx N_d\,e\,\mu_e$. The dopant, not the temperature, sets the carrier count.

**The optical gate.** A photon of frequency $\nu$ (hertz) and wavelength $\lambda$ (nm) is absorbed only when

$$h\nu = \frac{hc}{\lambda} \;\ge\; E_g \qquad\Longleftrightarrow\qquad \lambda \;\le\; \lambda_{\text{edge}} = \frac{hc}{E_g}.$$

*In words: a material absorbs every photon energetic enough to span the gap, and is transparent to the rest.* The threshold $\lambda_{\text{edge}}$ is the **absorption edge**. Use the workhorse constant

$$hc = 1240\ \mathrm{eV\cdot nm},$$

so $\lambda_{\text{edge}}\,[\mathrm{nm}] = 1240 / E_g\,[\mathrm{eV}]$. Photons *longer* than $\lambda_{\text{edge}}$ (lower energy) pass through; *shorter* ones (higher energy) are absorbed.

**Temperature: the crossed signatures.** How $\sigma$ moves with temperature $T$ splits metals from semiconductors, and it's a clean diagnostic:

- **Metal:** the carrier count $n$ is fixed (the band is already partly full). Heating just makes the lattice vibrate harder — more **phonon scattering** — which *lowers* mobility. So $\sigma$ **falls** as $T$ rises ([5.1](05-01-electronic-properties-band-picture.md)).
- **Doped semiconductor:** heating frees *more* carriers — first ionizing any remaining dopants, then, higher up, exciting electrons straight across the gap (the intrinsic onset). That carrier gain swamps the same mobility loss, so $\sigma$ **rises** as $T$ rises.

*In words: heat robs a metal of mobility but hands a semiconductor new carriers — opposite slopes, same cause underneath.*

**Thermal expansion and thermal conduction.** Heat a solid and it grows: length change $\Delta L = \alpha L_0 \Delta T$, with $\alpha$ the linear expansion coefficient ($\mathrm{K^{-1}}$). The *reason* is the **asymmetric bond-energy well** of [1.1](01-01-bonding-energy-well.md) — the well is steeper on the compression side than the stretch side, so as atoms vibrate harder their *average* separation slides outward. A symmetric (parabolic) well would give no expansion. Heat also *flows*: thermal conductivity is carried by **free electrons in metals** (good conductors of both charge and heat — the two track together) and by **phonons, lattice vibrations, in ceramics** (no free electrons, so they conduct heat but not charge).

## Picture

![Left: a band diagram with a donor level just below the conduction band and an acceptor level just above the valence band. Right: a photon with energy at least E_g is absorbed by exciting an electron across the gap, while a lower-energy photon passes through.](assets/05-02-fig1.svg)

## Worked examples

**Example 1 (n-type conductivity — dopant sets the count).** Silicon is doped with $N_d = 1\times10^{21}\ \mathrm{m^{-3}}$ phosphorus donors; take $\mu_e = 0.135\ \mathrm{m^2/(V\cdot s)}$. Nearly every donor is ionized at room temperature, so $n \approx N_d$ and holes are negligible:

$$\sigma \approx N_d\,e\,\mu_e = (10^{21})(1.6\times10^{-19})(0.135) \approx 21.6\ \mathrm{S/m}.$$

Intrinsic silicon manages only about $4\times10^{-4}\ \mathrm{S/m}$ — this modest dose has multiplied conductivity by roughly $5\times10^{4}$. That leverage, from an impurity at the part-per-million level, is the whole point of a semiconductor.

**Example 2 (color from the gap).** Gallium arsenide has $E_g = 1.42\ \mathrm{eV}$. Its absorption edge is

$$\lambda_{\text{edge}} = \frac{1240}{1.42} \approx 873\ \mathrm{nm}.$$

Visible light runs $\sim 400$–$700\ \mathrm{nm}$ — all *shorter* than 873 nm, hence *more* energetic than 1.42 eV — so GaAs absorbs the whole visible band and looks dark/opaque. Run it in reverse (a forward-biased diode) and electrons dropping across the gap emit $\sim\!1.42\ \mathrm{eV}$ photons at $\sim\!873\ \mathrm{nm}$: a near-infrared LED, exactly the emitter in a TV remote. Widen the gap toward $\sim\!2\ \mathrm{eV}$ and the emission moves into visible red — how gap engineering picks an LED's color.

## Watch out

- **You might think a semiconductor is transparent to *high*-energy light and opaque to low.** It's the reverse. Low energy means $h\nu < E_g$ — no electron can be lifted, so the photon passes and the material is transparent. High energy ($h\nu \ge E_g$) gets absorbed. Silicon ($E_g = 1.11$ eV) is opaque to visible light but transparent in the deeper infrared.
- **You might think a hole is just "no current."** A hole is a genuine mobile positive carrier — the vacancy left by a missing valence electron drifts through the crystal and contributes its own $p\,e\,\mu_h$ term. p-type conduction is holes doing real work, not electrons failing to.
- **You might read "$\sigma$ rises with $T$" as a universal rule for solids.** It's the *semiconductor* signature. Metals do the opposite — heating scatters their already-present carriers and $\sigma$ falls. The sign of $d\sigma/dT$ is one of the fastest ways to tell a metal from a semiconductor.

## One-liner

> The band gap is one number worn three ways: doping stocks carriers *below* it, photons are absorbed only *above* it, and heating a semiconductor jumps carriers *across* it — so its conductivity climbs with temperature while a metal's falls.

## Problems

**P1 (🟢)** A silicon sample is doped n-type with $N_d = 5\times10^{22}\ \mathrm{m^{-3}}$ donors; $\mu_e = 0.13\ \mathrm{m^2/(V\cdot s)}$, and holes are negligible. Find $\sigma$.

**P2 (🟡)** A semiconductor is transparent to all visible light (400–700 nm) but absorbs everything in the near-ultraviolet. Estimate an upper bound on its band gap $E_g$, and say whether it would look clear or dark to your eye.

**P3 (🔴)** Two samples are heated from 300 K to 350 K. Sample A's resistance rises; sample B's falls. Identify which is the metal and which the doped semiconductor, and explain each trend in one sentence using carriers and mobility.

<details>
<summary>Solutions</summary>

**P1** Extrinsic n-type, so $n \approx N_d$ and $\sigma \approx N_d\,e\,\mu_e$:

$$\sigma = (5\times10^{22})(1.6\times10^{-19})(0.13) = (5\times10^{22})(2.08\times10^{-20}) \approx 1040\ \mathrm{S/m}.$$

*Check.* Units: $\mathrm{m^{-3}\cdot C\cdot m^2/(V\cdot s)} = \mathrm{C/(V\cdot s\cdot m)} = \mathrm{(A\cdot s)/(V\cdot s\cdot m)} = \mathrm{A/(V\cdot m)} = \mathrm{S/m}$ ✓. Sanity: $50\times$ more donors than Example 1 gives $\approx 50\times$ the conductivity ($21.6 \to \sim1040$) ✓.

**P2** The gate is $\lambda_{\text{edge}} = hc/E_g$. "Transparent to all visible" means the material does *not* absorb down to the shortest visible wavelength ($\sim\!400$ nm) — so its absorption edge must sit at or below 400 nm, i.e. it only starts absorbing at wavelengths $\le 400$ nm. Thus

$$E_g = \frac{hc}{\lambda_{\text{edge}}} \ge \frac{1240}{400} = 3.1\ \mathrm{eV}.$$

So $E_g \gtrsim 3.1\ \mathrm{eV}$ (a wide-gap material). Because it absorbs *no* visible light and transmits all of it, it looks **clear/colorless** to the eye — this is exactly why wide-gap solids like diamond ($E_g \approx 5.5$ eV) and pure sapphire are transparent.

*Check.* Consistency: a photon at 400 nm carries $1240/400 = 3.1$ eV, just short of the gap, so it slips through — matching "transparent to visible." ✓

**P3** Resistance is $R \propto 1/\sigma$, so **A ($R$ rising, $\sigma$ falling) is the metal; B ($R$ falling, $\sigma$ rising) is the doped semiconductor.**

- Metal (A): the carrier count is fixed, so heating only intensifies phonon scattering, dropping mobility $\mu$ — hence $\sigma$ falls and $R$ rises.
- Semiconductor (B): heating frees additional carriers (ionizing dopants, then the intrinsic onset across the gap), and that carrier gain overwhelms the same mobility loss — hence $\sigma$ rises and $R$ falls.

*Check.* The two mechanisms are the crossed signatures from the lesson: same phonon-scattering penalty acts on both, but only the semiconductor also *gains* carriers, and that gain wins ✓.

</details>

## Flashback

**From Lesson 5.1 (Electronic properties & the band picture):** Classify each solid by its band gap as a conductor, semiconductor, or insulator, and rank them by expected room-temperature conductivity (highest first): material X with $E_g = 0$ (bands overlap), material Y with $E_g = 1.1\ \mathrm{eV}$, material Z with $E_g = 6\ \mathrm{eV}$.

<details>
<summary>Solution</summary>

- **X ($E_g = 0$): conductor (metal).** Overlapping bands mean carriers are available with no toll — highest conductivity.
- **Y ($E_g = 1.1$ eV): semiconductor.** A gap small enough that thermal energy (and doping) can push carriers across — intermediate, and tunable.
- **Z ($E_g = 6$ eV): insulator.** The gap is far too large for thermal excitation at room temperature — essentially no carriers, lowest conductivity.

Ranking, highest to lowest: **X > Y > Z.** The larger the gap, the fewer carriers reach the conduction band, so conductivity falls monotonically as $E_g$ grows. (Consistency with this lesson: Z's 6 eV gap also puts its absorption edge at $1240/6 \approx 207$ nm, deep in the UV — so Z is transparent to all visible light, i.e. a clear insulator like quartz.)

</details>

## Connections

- **Backward:** the whole lesson runs on the band gap $E_g$ from [5.1](05-01-electronic-properties-band-picture.md), and thermal expansion is a direct payoff of the **asymmetric bond-energy well** in [1.1](01-01-bonding-energy-well.md) — a symmetric well would give none. Doping is a deliberate use of the substitutional **point defects** from [2.1](02-01-point-defects-solid-solutions.md): an impurity atom placed for its electrons, not its size.
- **Forward:** [5.3 Materials classes & selection](05-03-materials-classes-selection.md) uses these electrical, optical, and thermal knobs as selection criteria — picking a material by its gap, expansion coefficient, or thermal conductivity for a given job.
- **Sideways:** the band-gap physics here is exactly the semiconductor story developed in [`condensed-matter`](../../condensed-matter/syllabus.md), and the phonons that carry heat in ceramics are the same lattice vibrations that scatter a metal's electrons — vibrational quanta doing double duty across transport theory.
