# Electronics & Semiconductors · Lesson 1.1: Semiconductors, carriers & doping

> ⏱ ~15 min · Module 1: Diodes & applications · Builds on: [`circuits` 1.1 Charge, current, voltage, power](../../circuits/lessons/01-01-charge-current-voltage-power.md), [`circuits` 1.2 Ohm's law](../../circuits/lessons/01-02-ohms-law-equivalent-resistance.md) · Unlocks: [1.2 The pn-junction diode](01-02-pn-junction-diode-models.md)

## Why this matters

Copper conducts. Glass doesn't. Neither one is interesting, because neither one *changes*. Silicon is interesting for exactly one reason: **its conductivity is controllable over six or more orders of magnitude** — by adding a few impurity atoms per ten million, by warming it up, by pointing an electric field at it. Everything downstream in this course is a way of cashing in on that controllability. A diode is silicon whose conductivity depends on which way you push. A transistor is silicon whose conductivity is set by a third terminal. A CMOS gate is two such switches wired back to back. If you understand where the mobile charge in silicon comes from and what turns the knob, the rest of the course stops being a list of magic devices.

**What this lesson is not.** This is the circuit engineer's working picture — bonds, carriers, and one algebraic law. The real derivations live elsewhere: band structure from the periodic lattice in [`condensed-matter` 3.6](../../condensed-matter/lessons/03-06-bands-zones-dos.md) and [3.7](../../condensed-matter/lessons/03-07-metals-insulators-semiconductors.md), carrier statistics from Fermi–Dirac occupancy in [4.1](../../condensed-matter/lessons/04-01-intrinsic-carriers.md) and [4.2](../../condensed-matter/lessons/04-02-doping-extrinsic.md), and the materials view in [`materials-science` 5.1](../../materials-science/lessons/05-01-electronic-properties-band-picture.md). Device physics proper is [semiconductor-devices](../../semiconductor-devices/syllabus.md). I am going to *state* the results those courses prove, and be explicit each time I do it.

## The idea

A silicon atom has **four valence electrons** — the outermost, chemically active ones. In a silicon crystal each atom shares one electron with each of four neighbors, forming four covalent bonds. At absolute zero every electron is locked in a bond, none can move, and silicon is a perfect insulator.

Warm it up and thermal jostling occasionally rips one electron out of a bond. Now two things can move:

1. The **freed electron**, wandering the crystal, carrying charge $-q$ where $q = 1.602\times10^{-19}$ C is the elementary charge.
2. The **vacancy it left behind** — a bond missing one electron. A neighboring bond electron can hop into that vacancy, which fills it and creates a new vacancy where *that* electron came from. Repeat, and the vacancy drifts across the crystal.

That second one deserves its own name. Rather than track a million bond electrons shuffling left, we track the one empty spot moving right and call it a **hole**, charge $+q$. Be clear-eyed about what just happened: nothing positive is actually moving. A hole is bookkeeping — a quasiparticle, an accounting fiction for the collective motion of the valence electrons. It earns its keep because the fiction is *exact enough*: a hole responds to fields, drifts, diffuses, and recombines with algebra identical to an electron's, only with the opposite sign. Adopt it and p-type silicon needs no new equations, just new subscripts. Refuse it and every p-type calculation becomes a many-body problem.

So intrinsic (pure) silicon has some mobile charge — but embarrassingly little, as we're about to count. The fix is **doping**: deliberately substituting a foreign atom for a silicon atom, chosen so it comes with either one electron too many or one too few. That's the knob.

## The formal version

### The gap

The energy it costs to break a bond is the **band gap** $E_g$, measured in electron-volts (1 eV $= 1.602\times10^{-19}$ J). Equivalently, in the band picture that [`condensed-matter` 3.7](../../condensed-matter/lessons/03-07-metals-insulators-semiconductors.md) derives: $E_g$ is the forbidden energy range between the filled **valence band** (top edge $E_v$) and the empty **conduction band** (bottom edge $E_c$), and $E_g = E_c - E_v$.

| Material | $E_g$ at 300 K | Behavior |
|---|---|---|
| metal (Cu) | none — bands overlap | always conducting |
| Ge | 0.67 eV | semiconductor, leaky |
| **Si** | **1.12 eV** | the workhorse |
| GaAs | 1.42 eV | fast, optoelectronic |
| diamond / SiO₂ | 5.5 eV / ~9 eV | insulator |

*In words: a metal has no gap so electrons are free at any temperature; an insulator's gap is so wide that thermal energy never bridges it; silicon sits in the sweet spot where the gap is crossable but only rarely — which is precisely what makes it controllable.*

### How few carriers pure silicon has

The equilibrium electron concentration in intrinsic silicon is written $n_i$ (units $\text{cm}^{-3}$; electronics still runs on centimeters). At 300 K,

$$n_i \approx 1.0\times10^{10}\ \text{cm}^{-3} \quad\text{(Si, 300 K)}.$$

In intrinsic material every freed electron leaves a hole, so $n = p = n_i$, where $n$ is the electron concentration and $p$ the hole concentration.

Now compare with the atom density of silicon, $5.0\times10^{22}\ \text{cm}^{-3}$:

$$\frac{5.0\times10^{22}}{1.0\times10^{10}} = 5\times10^{12}.$$

*In words: about one silicon atom in five trillion has given up an electron.* Pure silicon is a spectacularly bad conductor — its resistivity works out to roughly $3\times10^{5}\ \Omega\cdot\text{cm}$, about $10^{13}$ times worse than copper. Nobody builds anything out of it.

Temperature moves $n_i$ hard. Carrier statistics ([`condensed-matter` 4.1](../../condensed-matter/lessons/04-01-intrinsic-carriers.md)) give

$$n_i(T) \;\propto\; T^{3/2}\,e^{-E_g/2kT},$$

with $k = 8.617\times10^{-5}$ eV/K the Boltzmann constant. Stated, not derived — the exponential is what matters. Scaling from a known point,

$$n_i(T) = n_i(300)\left(\frac{T}{300}\right)^{3/2}\exp\!\left[-\frac{E_g}{2k}\!\left(\frac{1}{T}-\frac{1}{300}\right)\right], \qquad \frac{E_g}{2k} = 6499\ \text{K for Si.}$$

For silicon $n_i$ roughly doubles every 10 °C. This is why hot transistors misbehave: leakage currents track $n_i$ (or $n_i^2$), so a junction that leaks nanoamps on the bench leaks microamps in a sealed enclosure, and bias points drift. Germanium's smaller gap makes it far worse, which is most of why silicon won.

### Doping

Substitute a **group V** atom (phosphorus, arsenic, antimony) for a silicon atom. It has five valence electrons; four go into bonds and the fifth is bound to its parent by only about 45 meV. Room-temperature thermal energy is $kT \approx 26$ meV, so essentially every one of them is ionized and roaming at 300 K. Such an atom is a **donor**, concentration $N_D$, and the result is **n-type** silicon: electrons are the **majority carriers**, holes the **minority carriers**.

Substitute a **group III** atom (boron, gallium) and it has only three valence electrons — one bond comes up short. That vacancy is likewise easy to fill from a neighboring bond, creating a mobile hole. Such an atom is an **acceptor**, concentration $N_A$, and the result is **p-type** silicon: holes majority, electrons minority.

Typical doping runs $10^{15}$ to $10^{18}\ \text{cm}^{-3}$. Take the middle of that range, $N_D = 10^{16}\ \text{cm}^{-3}$:

$$\frac{10^{16}}{5.0\times10^{22}} = 2\times10^{-7} \quad\Longrightarrow\quad \text{1 dopant per } 5\times10^{6} \text{ silicon atoms, i.e. 0.2 ppm.}$$

**That is the memorable fact of the lesson.** Two hundred parts per billion — one atom in five million — raises the electron count from $10^{10}$ to $10^{16}\ \text{cm}^{-3}$ and the conductivity by roughly a factor of $10^6$. At the light end ($10^{15}$) it is 20 parts per billion. No other engineering material responds to contamination that violently, which is also why semiconductor fabs are obsessive about purity: the *unintentional* dopants have to sit far below the intentional ones.

### Mass action

In thermal equilibrium, generation (bonds breaking) and recombination (electrons falling back into holes) balance, and the product of the two carrier concentrations is pinned:

$$\boxed{\,np = n_i^2\,}$$

*In words: push one carrier type up and the other falls by the same factor — the product is a constant of the material and temperature, not of the doping.* The reason is recombination: flood the crystal with electrons and any hole finds a partner almost immediately, so holes become scarce.

Work the consequence. Dope n-type at $N_D = 10^{16}\ \text{cm}^{-3}$. Since $N_D \gg n_i$, essentially every carrier came from a donor:

$$n \approx N_D = 10^{16}\ \text{cm}^{-3}, \qquad p = \frac{n_i^2}{n} = \frac{(10^{10})^2}{10^{16}} = \frac{10^{20}}{10^{16}} = 10^{4}\ \text{cm}^{-3}.$$

Majority carriers are up by $10^{16}/10^{10} = 10^6$; minority carriers are down by $10^{10}/10^{4} = 10^6$. Symmetric, as mass action demands.

### Charge neutrality

A slab of doped silicon is **electrically neutral**. When a donor gives up its fifth electron, the atom it left behind is a fixed positive ion locked in the lattice; when an acceptor grabs an electron it becomes a fixed negative ion. Counting all four charged species per unit volume:

$$p + N_D^+ = n + N_A^-,$$

which for fully ionized dopants is $p + N_D = n + N_A$. *In words: mobile positives plus fixed positives equal mobile negatives plus fixed negatives — the crystal has no net charge.* Combined with $np = n_i^2$ this determines $n$ and $p$ exactly; in the usual case $N_D \gg n_i$ it collapses to the approximation above.

### Drift and diffusion

Two, and only two, mechanisms move carriers. Both matter in every device that follows.

**Drift** — response to an applied electric field $E$ (V/cm). Carriers accelerate, scatter off lattice vibrations and impurities, and settle to an average velocity proportional to the field:

$$v_n = \mu_n E, \qquad J_{n,\text{drift}} = q n \mu_n E, \qquad J_{p,\text{drift}} = q p \mu_p E,$$

where $J$ is current density (A/cm²) and $\mu$ is **mobility** (cm²/V·s). For lightly doped silicon at 300 K,

$$\mu_n \approx 1350\ \frac{\text{cm}^2}{\text{V}\cdot\text{s}}, \qquad \mu_p \approx 480\ \frac{\text{cm}^2}{\text{V}\cdot\text{s}}.$$

*In words: for the same push, electrons move about 2.8 times faster than holes.* That asymmetry is not cosmetic — it is why an NMOS transistor beats a PMOS of equal size, why CMOS designers make PMOS devices two to three times wider, and it will resurface concretely in [4.3 CMOS: the inverter, gates & logic families](04-03-cmos-inverter-gates.md). Summing both carrier types gives conductivity and Ohm's law for the bulk material:

$$\sigma = q(n\mu_n + p\mu_p) \ \ (\text{S/cm}), \qquad \rho = 1/\sigma.$$

**Diffusion** — response to a *concentration gradient*, no field required. Carriers random-walk, and a random walk out of a crowded region into an empty one produces net flow, exactly like a drop of ink spreading in water:

$$J_{n,\text{diff}} = q D_n \frac{dn}{dx}, \qquad J_{p,\text{diff}} = -q D_p \frac{dp}{dx},$$

with $D$ the diffusion coefficient (cm²/s). The two mechanisms are not independent — both come from the same scattering, so they're tied by the Einstein relation $D/\mu = kT/q \equiv V_T$, the **thermal voltage**:

$$V_T = \frac{kT}{q} \approx 25.9\ \text{mV} \approx 25\ \text{mV at 300 K},$$

giving $D_n \approx 35$ cm²/s and $D_p \approx 12$ cm²/s. Memorize $V_T \approx 25$ mV; it reappears in every diode and transistor equation in this course. (Transport in depth: [`condensed-matter` 4.4](../../condensed-matter/lessons/04-04-transport-mobility-hall.md).)

Here is the punchline that sets up the next lesson: **put p-type silicon against n-type silicon and diffusion and drift fight each other.** Holes diffuse from p to n and electrons from n to p, leaving behind exposed dopant ions whose field pushes back. The junction settles where drift exactly cancels diffusion — and that standoff *is* the diode. That's [1.2](01-02-pn-junction-diode-models.md).

## Picture

![Three bond diagrams of silicon showing intrinsic material with a broken bond, a phosphorus donor with a loosely bound fifth electron, and a boron acceptor with a hole, plus a band diagram marking the conduction and valence band edges, the 1.12 eV gap, and donor and acceptor levels near the respective band edges](assets/01-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — read the numbers off a doped wafer).** A silicon wafer is doped with phosphorus at $N_D = 10^{16}\ \text{cm}^{-3}$. Find $n$, $p$, the dopant fraction, and the resistivity; compare with intrinsic silicon.

Carriers, since $N_D = 10^{16} \gg n_i = 10^{10}$:

$$n \approx 10^{16}\ \text{cm}^{-3}, \qquad p = \frac{n_i^2}{n} = \frac{10^{20}}{10^{16}} = 10^{4}\ \text{cm}^{-3}.$$

Dopant fraction: $10^{16}/(5\times10^{22}) = 2\times10^{-7}$, one atom in five million.

Conductivity. The hole term is $q p \mu_p = (1.602\times10^{-19})(10^{4})(480) = 7.7\times10^{-13}$ S/cm — twelve orders of magnitude below the electron term, so drop it:

$$\sigma \approx q n \mu_n = (1.602\times10^{-19})(10^{16})(1350) = 2.16\ \text{S/cm}, \qquad \rho = \frac{1}{2.16} = 0.46\ \Omega\cdot\text{cm}.$$

Intrinsic silicon, for comparison, uses both carriers:

$$\sigma_i = q n_i(\mu_n + \mu_p) = (1.602\times10^{-19})(10^{10})(1830) = 2.93\times10^{-6}\ \text{S/cm}, \quad \rho_i = 3.4\times10^{5}\ \Omega\cdot\text{cm}.$$

Ratio: $\sigma/\sigma_i = 2.16/(2.93\times10^{-6}) = 7.4\times10^{5}$ — a factor of nearly $10^6$ from 0.2 ppm of phosphorus.

*Check.* The conductivity ratio should equal the majority-carrier ratio $10^6$ up to the mobility bookkeeping, and $7.4\times10^5$ is $10^6 \times 1350/1830$ — exactly the correction for intrinsic silicon getting to use holes too. ✓ (Real wafers at this doping measure closer to 0.5 Ω·cm, because impurity scattering knocks $\mu_n$ down to about 1200; the estimate is deliberately using the lightly-doped mobility.)

**Example 2 (why you'd care — how fast can a carrier cross a transistor?).** A MOSFET channel is 1 µm long with 1 V across it. Field and drift velocity:

$$E = \frac{1\ \text{V}}{10^{-4}\ \text{cm}} = 10^{4}\ \frac{\text{V}}{\text{cm}}, \qquad v_n = \mu_n E = (1350)(10^{4}) = 1.35\times10^{7}\ \frac{\text{cm}}{\text{s}}.$$

Transit time across the channel:

$$t = \frac{10^{-4}\ \text{cm}}{1.35\times10^{7}\ \text{cm/s}} = 7.4\times10^{-12}\ \text{s} = 7.4\ \text{ps}.$$

*In words: an electron crosses a micron of silicon in about ten picoseconds*, which is the crude reason gigahertz logic is possible at all. Two honest caveats: at $10^4$ V/cm silicon is already in **velocity saturation** — the linear $v = \mu E$ overestimates, and real carriers cap near $10^7$ cm/s — and real switching speed is set by charging capacitance, not by transit time ([4.3](04-03-cmos-inverter-gates.md)). But the order of magnitude is right, and it is *carrier mobility* that puts it there. Same physics, opposite conclusion: holes crossing the same channel take 2.8 times as long.

## Watch out

- **You might think n-type silicon is negatively charged.** It isn't. Every mobile electron a donor released left behind a fixed positive ion of exactly the same magnitude, so the slab is neutral: $p + N_D = n + N_A$. The "n" refers to which carrier is *mobile and abundant*, not to net charge. (Net charge appears only when carriers get swept out of a region — which is precisely what makes a junction's depletion region, in [1.2](01-02-pn-junction-diode-models.md).)
- **You might think a hole is a real particle.** It is not a positron and nothing positive is physically moving; it is the collective motion of valence-band electrons repackaged as one positive quasiparticle. The reason it survives the abstraction is that it obeys the same drift/diffusion algebra with $+q$ substituted for $-q$. Its lower mobility isn't laziness — it comes from the valence band's larger effective mass, which [`condensed-matter` 3.6](../../condensed-matter/lessons/03-06-bands-zones-dos.md) derives from band curvature.
- **You might apply $np = n_i^2$ everywhere.** It holds only in **thermal equilibrium** — no applied bias, no illumination, no injection. A forward-biased diode has $np \gg n_i^2$ near the junction (that excess minority charge *is* the forward current), and a solar cell under light violates it on purpose. Use it to find equilibrium concentrations; do not use it inside a conducting device.

## One-liner

> Silicon's superpower isn't conducting — it's that one dopant atom per five million turns its conductivity up a millionfold, while $np = n_i^2$ and charge neutrality quietly keep the books.

## Problems

**P1 (🟢)** A silicon sample is doped with boron at $N_A = 5\times10^{17}\ \text{cm}^{-3}$. At 300 K ($n_i = 1.0\times10^{10}\ \text{cm}^{-3}$), find the hole and electron concentrations, and name the majority and minority carrier.

**P2 (🟡)** A wafer is doped n-type at $N_D = 2\times10^{16}\ \text{cm}^{-3}$. Silicon has $5.0\times10^{22}$ atoms/cm³. (a) What fraction of atoms are dopants, and one dopant per how many silicon atoms? (b) Estimate the resistivity using $\mu_n = 1350$ cm²/V·s, and compare it to intrinsic silicon's $3.4\times10^{5}\ \Omega\cdot\text{cm}$.

**P3 (🔴)** A lightly doped n-region has $N_D = 10^{14}\ \text{cm}^{-3}$. Using $n_i(T) = n_i(300)(T/300)^{3/2}\exp[-(E_g/2k)(1/T - 1/300)]$ with $E_g/2k = 6499$ K, estimate $n_i$ at 450 K (177 °C) and decide whether the region is still safely extrinsic. What does your answer say about a diode's reverse leakage at that temperature?

<details>
<summary>Solutions</summary>

**P1** Boron is group III, so it's an acceptor and the material is p-type: **holes are majority, electrons minority.** Since $N_A = 5\times10^{17} \gg n_i = 10^{10}$, essentially every hole came from an acceptor:

$$p \approx N_A = 5\times10^{17}\ \text{cm}^{-3}.$$

Mass action gives the electrons:

$$n = \frac{n_i^2}{p} = \frac{(1.0\times10^{10})^2}{5\times10^{17}} = \frac{1.0\times10^{20}}{5\times10^{17}} = 2.0\times10^{2} = 200\ \text{cm}^{-3}.$$

*Check.* Charge neutrality: $p - n = 5\times10^{17} - 200 \approx N_A$ ✓. Sanity on the size: 200 electrons per cm³ means a 1 µm cube ($10^{-12}$ cm³) contains $2\times10^{-10}$ of an electron — you'd search $5\times10^{9}$ such cubes to find one. Minority carriers are genuinely rare, which is exactly why minority-carrier injection at a junction can dominate a current that has no business being large. ✓

**P2** (a) Dopant fraction:

$$\frac{2\times10^{16}}{5.0\times10^{22}} = 4\times10^{-7} = 0.4\ \text{ppm}, \qquad \frac{5.0\times10^{22}}{2\times10^{16}} = 2.5\times10^{6},$$

so **one dopant atom per 2.5 million silicon atoms** — 400 parts per billion.

(b) With $n \approx N_D = 2\times10^{16}\ \text{cm}^{-3}$ (holes are $p = 10^{20}/2\times10^{16} = 5\times10^{3}\ \text{cm}^{-3}$, negligible):

$$\sigma = q n \mu_n = (1.602\times10^{-19})(2\times10^{16})(1350) = (3.20\times10^{-3})(1350) = 4.33\ \text{S/cm},$$

$$\rho = \frac{1}{4.33} = 0.23\ \Omega\cdot\text{cm}.$$

Compared with intrinsic silicon: $3.4\times10^{5}/0.23 = 1.5\times10^{6}$ — **six orders of magnitude less resistive**, from four hundred parts per billion of impurity.

*Check.* Doubling the doping from Example 1's $10^{16}$ should halve the resistivity: $0.46/2 = 0.23$ ✓. Powers of ten: $10^{-19}\times10^{16} = 10^{-3}$, times $10^{3}$ gives order 1 S/cm ✓. ✓

**P3** Scale $n_i$ from 300 K to 450 K, one factor at a time.

Prefactor: $(450/300)^{3/2} = 1.5^{1.5} = 1.84$.

Exponential: $\dfrac{1}{450} - \dfrac{1}{300} = 2.222\times10^{-3} - 3.333\times10^{-3} = -1.111\times10^{-3}\ \text{K}^{-1}$, so the bracket is $-(6499)(-1.111\times10^{-3}) = +7.22$, and $e^{7.22} = 1.37\times10^{3}$.

$$n_i(450) = (1.0\times10^{10})(1.84)(1.37\times10^{3}) = 2.5\times10^{13}\ \text{cm}^{-3}.$$

That is **not** negligible against $N_D = 10^{14}$ — it's a quarter of it. Solve properly with $n - p = N_D$ and $np = n_i^2$:

$$n = \frac{N_D + \sqrt{N_D^2 + 4n_i^2}}{2} = \frac{10^{14} + \sqrt{10^{28} + 4(2.5\times10^{13})^2}}{2} = \frac{10^{14} + 1.12\times10^{14}}{2} = 1.06\times10^{14}\ \text{cm}^{-3},$$

$$p = n - N_D = 1.06\times10^{14} - 10^{14} = 6\times10^{12}\ \text{cm}^{-3}.$$

So the minority-carrier concentration has climbed to about **6 percent of the majority** — the region is only marginally extrinsic and is heading toward intrinsic behavior. Push another 100 K and doping stops mattering at all: the silicon forgets which type it was supposed to be.

Reverse leakage in a diode is fed by thermally generated minority carriers, so it scales with $n_i^2$ (or $n_i$ for generation in the depletion region). From 300 K to 450 K, $n_i$ rose by $2.5\times10^{3}$, so $n_i^2$ rose by $6\times10^{6}$ — **leakage grows by roughly six orders of magnitude.** A nanoamp on the bench becomes milliamps in an oven, which is why power devices need heatsinks and why lightly doped regions are the first to go intrinsic.

*Check.* Rule of thumb: $n_i$ doubles about every 10 °C, so 150 °C of rise predicts $2^{15} = 3.3\times10^{4}$ — same order as the computed $2.5\times10^{3}$ once you account for the rule of thumb being calibrated near room temperature and the doubling interval widening as $T$ rises (the $1/T$ in the exponent flattens the curve). Direction and rough magnitude agree. ✓ Also: substituting back, $n_i^2/n = (2.5\times10^{13})^2/(1.06\times10^{14}) = 6\times10^{12} = p$ ✓.

</details>

## Connections

- **Backward:** [`circuits` 1.1](../../circuits/lessons/01-01-charge-current-voltage-power.md) defined current as charge in motion and [`circuits` 1.2](../../circuits/lessons/01-02-ohms-law-equivalent-resistance.md) gave you $V = IR$ as an empirical law. This lesson supplies what was underneath both: $I = qnv A$, and $\sigma = q(n\mu_n + p\mu_p)$ is where a resistor's resistance actually comes from. Ohm's law is a statement about mobility being field-independent — which is exactly the assumption that fails at velocity saturation.
- **Forward:** [1.2 The pn-junction diode](01-02-pn-junction-diode-models.md) is drift versus diffusion across a p/n boundary, and the thermal voltage $V_T \approx 25$ mV you met here is the $V_T$ in the diode equation $I = I_S(e^{V/nV_T} - 1)$. Minority-carrier concentrations from mass action set $I_S$; their temperature dependence is why a diode drop falls about 2 mV per °C. Mobility asymmetry $\mu_n > \mu_p$ resurfaces as NMOS-versus-PMOS sizing in [4.3](04-03-cmos-inverter-gates.md).
- **Sideways:** the diffusion current $J = qD\,dn/dx$ is Fick's first law wearing an electrical uniform — the same equation, same units logic, as atomic diffusion in materials science, and the same random-walk-to-gradient argument as heat conduction. The Einstein relation $D = \mu V_T$ linking a *transport* coefficient to a *thermal* one is a fluctuation–dissipation statement, the same species of result as the Johnson-noise formula for a resistor.
- **Depth on demand:** every "stated, not derived" claim above — the gap, $n_i(T)$, the 45 meV dopant levels, mass action, mobility — is proved in [`condensed-matter` Module 4](../../condensed-matter/lessons/04-01-intrinsic-carriers.md), with the junction itself in [4.5](../../condensed-matter/lessons/04-05-pn-junction.md). Fabrication and device-level modeling live in [semiconductor-devices](../../semiconductor-devices/syllabus.md). Course map: [electronics syllabus](../syllabus.md).
