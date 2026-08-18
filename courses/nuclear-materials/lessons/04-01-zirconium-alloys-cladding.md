# Nuclear Materials · Lesson 4.1: Zirconium alloys — the LWR cladding

> ⏱ ~15 min · Module 4: Structural materials and degradation · Builds on: [`intro-nuclear-engineering` 2.1 (microscopic cross-section)](../../intro-nuclear-engineering/lessons/02-01-microscopic-cross-section.md), [`intro-nuclear-engineering` 2.2 (macroscopic cross-section)](../../intro-nuclear-engineering/lessons/02-02-macroscopic-cross-section-mean-free-path.md), [`materials-science` 1.4 (grains, texture, anisotropy)](../../materials-science/lessons/01-04-order-disorder-grains.md), [2.4 (irradiation growth)](02-04-irradiation-creep-growth.md) · Unlocks: [4.3 Corrosion in the coolant](04-03-corrosion-reactor-coolant.md), [4.4 Stress-corrosion cracking](04-04-scc-iascc.md)

## Why this matters

Every fuel pellet in a water reactor sits inside a thin metal tube — the **cladding** — that holds the fuel, contains the radioactive fission products, and carries heat to the coolant. You would think you'd build that tube from something tough and cheap, like stainless steel. Almost every reactor does the opposite: it uses a soft, expensive, reactive metal called **zirconium**. The reason is one number. Zirconium is nearly transparent to thermal neutrons, and in a thermal reactor every neutron the structure swallows is a neutron that can't sustain the chain reaction. This lesson is about why we pay for zirconium, and about the two ways it eventually bites back: **hydriding** in normal service, which quietly embrittles the tube, and **steam oxidation** in an accident, which can run away and destroy it.

## The idea

A thermal reactor lives or dies on its **neutron economy** — the fraction of fission neutrons that survive to cause the next fission instead of leaking out or being uselessly absorbed. The cladding wraps every fuel pin, so its neutrons-eaten-per-centimeter is a permanent tax on the whole core. Zirconium's thermal absorption cross-section is astonishingly small (about 0.18 barn), roughly **thirty times smaller** than iron's. Cladding in steel would force you to enrich the fuel harder just to pay the parasitic-absorption bill. Zirconium is the metal that gets out of the neutrons' way.

You don't use pure zirconium — it corrodes too fast and is too weak — so you alloy it lightly. The old workhorses are **Zircaloy-2 and Zircaloy-4** (tin plus small iron/chromium/nickel), and the modern alloys **ZIRLO and M5** add ~1% niobium for markedly better corrosion resistance. But the alloy inherits zirconium's crystal structure: **hcp** (hexagonal close-packed), which is *anisotropic* — its hexagonal $c$-axis behaves differently from the two $a$-axes ([`materials-science` 1.4](../../materials-science/lessons/01-04-order-disorder-grains.md)). Manufacturing the tube by **cold-pilgering** (repeated cold rolling over a mandrel) leaves the grains with a strong **texture**: most $c$-axes end up pointing roughly *radially*, in the through-wall direction. That texture is not a detail — it governs irradiation growth ([2.4](02-04-irradiation-creep-growth.md)), how the tube creeps, and, crucially, which way the hydrides lie.

Here is the slow poison. In the reactor, the waterside surface corrodes: $\mathrm{Zr}$ reacts with hot water, growing an oxide and liberating hydrogen. Most of that hydrogen bubbles away, but a fraction — the **pickup fraction** — dissolves into the metal. Zirconium can only hold a little hydrogen in solution, and less as it cools, so the excess precipitates as brittle **zirconium hydride** ($\mathrm{ZrH}_x$) platelets. Whether those platelets are harmless depends entirely on their orientation relative to the tube's **hoop stress** (the tension that internal pressure puts around the circumference). A platelet lying flat in the wall (**circumferential**) is benign. A platelet standing across the wall (**radial**) sits square in the path of the hoop stress and acts like a pre-made crack. That single geometric fact — radial versus circumferential — is the difference between a tube that lasts decades and one that shatters.

## The formal version

**Parasitic absorption and neutron economy.** The rate at which a material soaks up neutrons per unit path length is the macroscopic absorption cross-section from [`intro-nuclear-engineering` 2.2](../../intro-nuclear-engineering/lessons/02-02-macroscopic-cross-section-mean-free-path.md):

$$\Sigma_a = N\,\sigma_a, \qquad N = \frac{\rho\,N_A}{M},$$

where $\sigma_a$ is the microscopic absorption cross-section (cm², usually quoted in barns, $1\ \mathrm{b}=10^{-24}\ \mathrm{cm^2}$), $N$ is the number density of atoms (cm⁻³), $\rho$ the mass density (g/cm³), $M$ the atomic mass (g/mol), and $N_A = 6.022\times10^{23}\ \mathrm{mol^{-1}}$. *In words: a material's neutron-greediness is how many atoms sit in a cm³ times how big a target each one is.* For cladding you want $\Sigma_a$ as small as possible, and since $\rho$, $M$, and $N_A$ are all comparable across metals, the winner is decided by $\sigma_a$ — where zirconium (0.18 b) crushes iron (2.56 b) and nickel (4.5 b).

**Hydrogen solubility and hydride precipitation.** Hydrogen dissolves interstitially in zirconium up to a temperature-dependent limit, the **terminal solid solubility** $C_{\mathrm{TSS}}(T)$, which follows an Arrhenius form:

$$C_{\mathrm{TSS}}(T) = C_0\,\exp\!\left(-\frac{Q}{RT}\right),$$

with $C_0$ a prefactor (wt ppm), $Q$ a dissolution enthalpy (J/mol), $R = 8.314\ \mathrm{J\,mol^{-1}K^{-1}}$, and $T$ absolute temperature (K). *In words: hot zirconium holds a lot of hydrogen in solution; as it cools, the ceiling drops fast, and any hydrogen above the ceiling must precipitate as $\mathrm{ZrH}_x$.* Two consequences follow directly:

- **Cold regions collect hydride.** Because $C_{\mathrm{TSS}}$ falls with temperature, the coldest spots along a pin (pellet-to-pellet gaps, the fuel-stack ends, spacer-grid contact points) reach saturation first and accumulate hydride. Hydrogen also drifts *down* the temperature gradient (thermal diffusion), reinforcing the pile-up in cold zones.
- **Orientation is set by texture and stress.** Hydride platelets nucleate on preferred crystal planes, so with the radial $c$-axis texture they normally form **circumferential** (in the plane of the wall). But a tensile stress acting *across* those preferred planes during precipitation — a hoop stress — can flip them to **radial**. This stress-driven flip is **hydride reorientation**.

**Why radial hydrides embrittle.** A brittle platelet only matters if a stress pulls *across its face*. The hoop stress $\sigma_\theta$ runs circumferentially. A circumferential platelet has its broad face normal to the *radial* direction, so $\sigma_\theta$ lies *in* its plane and barely loads it. A radial platelet has its broad face normal to the *hoop* direction, so $\sigma_\theta$ pulls straight across it. It behaves as a sharp pre-crack, and under sustained load hydrogen keeps diffusing to its tip and extending it — **delayed hydride cracking (DHC)**. This is why the same hydrogen content can be harmless or catastrophic depending purely on geometry.

**LOCA: high-temperature steam oxidation.** In a **loss-of-coolant accident**, the cladding is uncovered and heated in steam. Zirconium then oxidizes fast and, critically, **exothermically**:

$$\mathrm{Zr} + 2\,\mathrm{H_2O} \rightarrow \mathrm{ZrO_2} + 2\,\mathrm{H_2} + \text{heat}.$$

*In words: hot zirconium tears oxygen out of steam, releasing hydrogen and its own heat — so the reaction warms the clad and accelerates itself, a thermal runaway above roughly 1000 °C.* Three damage modes pile on: the pin balloons and bursts where internal pressure exceeds the softened clad's strength; oxygen dissolving into the remaining metal **embrittles** it even where it hasn't fully oxidized; and the released hydrogen is itself an explosion hazard. Safety limits cap the severity with two numbers a licensing engineer knows cold: **peak cladding temperature (PCT) $\le 1200\ ^\circ\mathrm{C}$** and **equivalent cladding reacted (ECR) $\le 17\%$** — ECR being the fraction of the original metal wall thickness converted to oxide.

## Picture

![Left: an hcp zirconium grain with its c-axis oriented radially by cold-work texture, so basal planes lie in the tube wall. Right: a cladding wall element under circumferential hoop stress, showing benign circumferential hydride platelets lying parallel to the wall and a dangerous radial hydride platelet standing normal to the hoop stress and being pulled open.](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (the neutron-economy argument — why not steel).** Compare the parasitic thermal absorption of a zirconium clad against a hypothetical iron (steel) clad of the same thickness, using $\Sigma_a = N\sigma_a$.

*Zirconium:* $\rho = 6.5\ \mathrm{g/cm^3}$, $M = 91.2\ \mathrm{g/mol}$, $\sigma_a = 0.18\ \mathrm{b}$.

$$N_{\mathrm{Zr}} = \frac{(6.5)(6.022\times10^{23})}{91.2} = 4.29\times10^{22}\ \mathrm{cm^{-3}},$$
$$\Sigma_a^{\mathrm{Zr}} = (4.29\times10^{22})(0.18\times10^{-24}) = 7.7\times10^{-3}\ \mathrm{cm^{-1}}.$$

*Iron:* $\rho = 7.9\ \mathrm{g/cm^3}$, $M = 55.8\ \mathrm{g/mol}$, $\sigma_a = 2.56\ \mathrm{b}$.

$$N_{\mathrm{Fe}} = \frac{(7.9)(6.022\times10^{23})}{55.8} = 8.52\times10^{22}\ \mathrm{cm^{-3}},$$
$$\Sigma_a^{\mathrm{Fe}} = (8.52\times10^{22})(2.56\times10^{-24}) = 0.218\ \mathrm{cm^{-1}}.$$

The ratio is what matters:

$$\frac{\Sigma_a^{\mathrm{Fe}}}{\Sigma_a^{\mathrm{Zr}}} = \frac{0.218}{7.7\times10^{-3}} \approx 28.$$

A steel clad would parasitically absorb roughly **28 times more** thermal neutrons per unit thickness than zirconium. In a thermal reactor that's an enormous tax on the neutron budget — you'd have to buy it back with substantially higher enrichment. Zirconium's near-invisibility to neutrons is exactly why it clads water reactors, despite being softer, costlier, and more reactive than steel. (This is the whole design bargain; keep it in your pocket for the boss problem.)

**Example 2 (BOSS PROBLEM 4a — trace hydrogen from corrosion to embrittlement).** Follow one hydrogen atom from the coolant to a crack, and explain the geometry that makes it dangerous.

1. **Corrosion liberates hydrogen.** On the waterside the clad oxidizes: $\mathrm{Zr} + 2\,\mathrm{H_2O} \rightarrow \mathrm{ZrO_2} + 2\,\mathrm{H_2}$. The oxide thickens over the fuel cycle ([4.3](04-03-corrosion-reactor-coolant.md)); each mole of $\mathrm{Zr}$ consumed releases two moles of $\mathrm{H_2}$.

2. **A fraction is picked up.** Most hydrogen evolves as gas into the coolant, but the **pickup fraction** (order 10–20%, worse for Zircaloy-2 than for the niobium alloys) diffuses into the metal instead. Over years this drives the bulk hydrogen content from a few wt ppm toward hundreds of wt ppm.

3. **The excess precipitates in cold regions.** Zirconium's solubility ceiling $C_{\mathrm{TSS}}(T)$ falls steeply on cooling, and hydrogen migrates down temperature gradients. So the coldest, least-loaded locations saturate first and grow $\mathrm{ZrH}_x$ platelets — the tube quietly stockpiles brittle hydride where it is coolest.

4. **Orientation decides the outcome.** Precipitating on the textured basal planes, hydrides *normally* form circumferential and are benign. But if a tensile **hoop stress** acts across those planes while they precipitate — internal fission-gas pressure in service, and especially during the slow cooldown of a pressurized rod in dry storage — the platelets **reorient radial**. A radial platelet's face is normal to $\sigma_\theta$, so the hoop tension pulls straight across it; it is a ready-made crack. Hydrogen then diffuses to its tip under load and steps it forward — **delayed hydride cracking** — until the wall fails. The embrittlement is not about *how much* hydrogen is present so much as *which way its hydrides lie relative to the stress*.

The chain in one line: waterside corrosion $\rightarrow$ hydrogen pickup $\rightarrow$ hydride precipitation in cold spots $\rightarrow$ radial reorientation under hoop stress $\rightarrow$ crack. Break any link (lower corrosion with M5, lower pickup, lower stored-rod pressure) and you defuse it.

## Watch out

- **You might think a stronger, tougher clad material is obviously better.** In a *thermal* reactor the clad's first job is to be nearly invisible to neutrons; strength is secondary. Steel or nickel alloys are mechanically superior but absorb an order of magnitude more neutrons, so water reactors accept zirconium's weaknesses to protect the neutron economy. (Fast reactors, with no thermal-neutron budget to protect, do clad in steel — see [4.2](04-02-steels-austenitic-ferritic-martensitic.md).)
- **You might think all hydrides embrittle equally.** They don't — orientation is everything. Circumferential hydrides, lying in the plane of the wall, barely feel the hoop stress and are largely benign; the same amount of hydrogen as *radial* platelets is dangerous because the hoop stress pulls across their faces. A hydrogen number alone can't tell you if a tube is safe.
- **You might think LOCA damage is just the clad melting.** Zirconium melts near 1850 °C, but the clad is in trouble far below that. The steam reaction is *exothermic* and self-accelerating above ~1000 °C, and dissolved oxygen embrittles the surviving metal — so the safety limits (PCT $\le 1200\ ^\circ\mathrm{C}$, ECR $\le 17\%$) sit hundreds of degrees under the melting point, guarding against embrittlement and runaway, not melting.

## One-liner

> Zirconium clads water reactors because it is nearly invisible to neutrons; the price is hydriding that embrittles when hydrides go radial under hoop stress, and an exothermic steam reaction that can run away in a LOCA.

## Problems

**P1 (🟢)** A designer floats a nickel-based clad. Using $\Sigma_a = N\sigma_a$ with nickel's $\rho = 8.9\ \mathrm{g/cm^3}$, $M = 58.7\ \mathrm{g/mol}$, and thermal $\sigma_a = 4.5\ \mathrm{b}$, compute $\Sigma_a$ for nickel and find how many times more thermal neutrons it absorbs per unit thickness than the zirconium clad of Example 1 ($\Sigma_a^{\mathrm{Zr}} = 7.7\times10^{-3}\ \mathrm{cm^{-1}}$).

**P2 (🟡)** A pressurized fuel rod is placed in dry storage. As it slowly cools from operating temperature under a substantial internal hydrogen-gas pressure, circumferential hydrides that were benign in-reactor partly redissolve and then re-precipitate. Explain (a) why the cooldown makes hydride precipitate at all, and (b) why *this* cooldown, unlike normal reactor operation, tends to produce the dangerous radial orientation. Which failure mode does this set up?

**P3 (🔴)** In a LOCA transient, a cladding tube with original wall thickness $t_0 = 0.57\ \mathrm{mm}$ oxidizes on *both* the inner and outer surfaces, converting a metal thickness of $0.045\ \mathrm{mm}$ to $\mathrm{ZrO_2}$ on each surface. Estimate the equivalent cladding reacted (ECR), defined as the fraction of the original metal wall consumed by oxidation, and compare it to the 17% regulatory limit. Is the tube inside the limit?

<details>
<summary>Solutions</summary>

**P1** Number density of nickel:

$$N_{\mathrm{Ni}} = \frac{(8.9)(6.022\times10^{23})}{58.7} = 9.13\times10^{22}\ \mathrm{cm^{-3}}.$$

Macroscopic absorption:

$$\Sigma_a^{\mathrm{Ni}} = (9.13\times10^{22})(4.5\times10^{-24}) = 0.411\ \mathrm{cm^{-1}}.$$

Ratio to zirconium:

$$\frac{\Sigma_a^{\mathrm{Ni}}}{\Sigma_a^{\mathrm{Zr}}} = \frac{0.411}{7.7\times10^{-3}} \approx 53.$$

*Check.* Units: $(\mathrm{cm^{-3}})(\mathrm{cm^2}) = \mathrm{cm^{-1}}$ ✓. Nickel absorbs about **53 times** more thermal neutrons per unit thickness than zirconium — even worse than iron's factor of ~28, because nickel's $\sigma_a$ is larger still. This is precisely why nickel-based superalloys, for all their strength, are never used as thermal-reactor cladding; they're reserved for small, highly-stressed components where their area (and thus total absorption) is limited.

**P2** (a) Zirconium's terminal solid solubility $C_{\mathrm{TSS}}(T) = C_0\exp(-Q/RT)$ *falls* as temperature drops. At operating temperature the rod held some hydrogen in solution; as it cools, that ceiling sinks below the actual hydrogen content, so the excess must come out of solution as $\mathrm{ZrH}_x$. Cooling is exactly the condition that forces precipitation.

(b) Orientation is chosen by the stress acting across the hydride habit planes at the moment of precipitation. During normal reactor operation the sustained tensile hoop stress is modest and hydrides follow the basal texture into the benign circumferential orientation. In dry storage the rod cools *while pressurized* by accumulated fission gas and helium, so a significant tensile hoop stress is present precisely during re-precipitation — and a tensile stress across the habit planes flips the platelets to **radial**. That sets up **delayed hydride cracking (DHC)**: hoop stress loads the radial platelet's face, hydrogen diffuses to its tip, and the crack steps through the wall. (This is why dry-storage licensing limits rod internal pressure and cladding hydrogen content.)

*Check.* The logic is self-consistent: precipitation needs falling solubility (cooldown), reorientation needs tensile stress during precipitation (pressurized cooldown), and the two coincide only in storage — matching the observed hazard.

**P3** Oxidation eats metal from both surfaces, so the total metal wall consumed is

$$t_{\mathrm{consumed}} = 2 \times 0.045\ \mathrm{mm} = 0.090\ \mathrm{mm}.$$

ECR as a fraction of the original wall:

$$\mathrm{ECR} = \frac{t_{\mathrm{consumed}}}{t_0} = \frac{0.090}{0.57} = 0.158 = 15.8\%.$$

*Check.* $15.8\% < 17\%$, so the tube is **inside** the regulatory limit, but only barely — under 1.2 percentage points of margin. Units cancel (mm/mm) as a fraction ✓. The narrowness is the point: LOCA acceptance criteria (10 CFR 50.46) hold ECR under 17% *and* peak cladding temperature under 1200 °C precisely because both oxidation runaway and oxygen embrittlement accelerate sharply just beyond these values, long before the metal would melt.

</details>

## Flashback

**From Lesson 3.2 (The fuel temperature profile):** A UO₂ fuel pin runs at a linear power $q' = 25\ \mathrm{kW/m}$. Treating the fuel conductivity as a constant $k = 3.0\ \mathrm{W\,m^{-1}K^{-1}}$, estimate the centerline-to-surface temperature rise. If the pellet surface sits at $T_s = 410\ ^\circ\mathrm{C}$, what is the centerline temperature? (Fresh variant — new power and conductivity.)

<details>
<summary>Solution</summary>

For constant conductivity the integral-conductivity result reduces to

$$T_0 - T_s = \frac{q'}{4\pi k} = \frac{25{,}000}{4\pi(3.0)} = \frac{25{,}000}{37.7} \approx 663\ \mathrm{K}.$$

So the centerline runs about 663 K (663 °C) hotter than the surface:

$$T_0 = 410 + 663 = 1073\ ^\circ\mathrm{C}.$$

*Check.* Units: $\mathrm{W\,m^{-1}} / (\mathrm{W\,m^{-1}K^{-1}}) = \mathrm{K}$ ✓. The pellet radius never appears — the temperature rise is fixed by linear power and conductivity alone, the key surprise of [3.2](03-02-fuel-temperature-profile-restructuring.md). A centerline near 1073 °C is comfortably below UO₂'s ~2840 °C melting point, as it must be for normal operation, but hot enough to drive the fission-gas release and restructuring of Module 3. ✓

</details>

## Connections

- **Backward:** the whole case for zirconium rests on the macroscopic cross-section $\Sigma_a = N\sigma_a$ from [`intro-nuclear-engineering` 2.2](../../intro-nuclear-engineering/lessons/02-02-macroscopic-cross-section-mean-free-path.md) and the microscopic $\sigma_a$ of [2.1](../../intro-nuclear-engineering/lessons/02-01-microscopic-cross-section.md); its hcp anisotropy and cold-work **texture** are the grain-orientation ideas of [`materials-science` 1.4](../../materials-science/lessons/01-04-order-disorder-grains.md), the same texture that drives the irradiation growth of [2.4](02-04-irradiation-creep-growth.md).
- **Forward:** the hydrogen in this lesson is *supplied* by waterside corrosion, taken up in [4.3 Corrosion in the coolant](04-03-corrosion-reactor-coolant.md), and the crack it seeds — delayed hydride cracking — is one member of the environment-assisted cracking family developed in [4.4 Stress-corrosion cracking](04-04-scc-iascc.md).
- **Sideways (fracture mechanics):** a radial hydride under hoop stress is exactly the sharp, mode-I pre-crack of linear elastic fracture mechanics — the platelet plays the role of the initial flaw whose stress-intensity factor, driven above threshold by the hoop stress, propagates it. The same crack-tip picture you'd draw for brittle fracture in a pressure vessel, here written in hydride.
