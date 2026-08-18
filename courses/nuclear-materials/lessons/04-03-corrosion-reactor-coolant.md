# Nuclear Materials · Lesson 4.3: Corrosion in reactor coolant

> ⏱ ~15 min · Module 4: Cladding, structural materials, and corrosion · Builds on: [4.1 Zirconium alloys: the LWR cladding](04-01-zirconium-alloys-cladding.md) (hydrogen pickup), [4.2 Steels: austenitic vs. ferritic/martensitic](04-02-steels-austenitic-ferritic-martensitic.md) · Unlocks: [4.4 Stress-corrosion cracking and IASCC](04-04-scc-iascc.md)

## Why this matters

The cladding you chose in [4.1](04-01-zirconium-alloys-cladding.md) and the steels of [4.2](04-02-steels-austenitic-ferritic-martensitic.md) spend decades submerged in hot, flowing, radiation-charged water. Water at 300 °C is not a benign coolant — it is a slow acid bath that eats a growing oxide skin off every metal surface. That oxide is the whole story in two ways at once: it **protects** the metal underneath (a dense skin the water can't easily get past), and when it cracks it **accelerates** the attack. Worse, the corrosion reaction on Zircaloy pumps hydrogen straight into the metal — the same hydrogen that embrittles it in [4.1](04-01-zirconium-alloys-cladding.md). This lesson closes that loop: corrosion is the *source term* for hydriding, and water chemistry is the main lever operators have to slow it.

## The idea

Drop a fresh piece of Zircaloy into reactor water and it starts to rust — but nuclear "rust" is protective. Zirconium grabs oxygen from water and grows a skin of zirconia, $\mathrm{ZrO_2}$, that's dense and tightly bonded:

$$\mathrm{Zr} + 2\,\mathrm{H_2O} \longrightarrow \mathrm{ZrO_2} + 2\,\mathrm{H_2}.$$

For the oxide to thicken, oxygen has to travel *through* the skin already there. So the thicker the oxide, the slower it grows — the skin throttles its own advance. Early life is **protective**: growth follows a decelerating (roughly parabolic or cubic) law, and the clad barely corrodes.

Then something breaks. Zirconia is denser-packing than the metal it replaced, so the growing oxide is under compression; past a critical thickness (a couple of micrometres) it can no longer accommodate the stress and **cracks and spalls near the metal interface**. Fresh water reaches near-fresh metal, and the protective throttle is gone. Growth switches to a roughly **linear** law — a constant, faster clip that no longer slows down. This is **breakaway**, and it's why oxide-thickness-versus-time curves have a knee: slow and self-limiting, then a sudden straight climb.

Meanwhile the reaction above makes **hydrogen**, and a fraction of it doesn't bubble away — it dissolves into the metal (the *hydrogen pickup* of [4.1](04-01-zirconium-alloys-cladding.md)). Faster corrosion means more hydrogen made, so more hydride, so more embrittlement. Corrosion and hydriding are the same reaction seen from two sides.

Now add the reactor. The neutron and gamma field **splits water** (radiolysis) into an oxidizing soup — $\mathrm{O_2}$, $\mathrm{H_2O_2}$, radicals — that makes the water electrochemically more aggressive. Chemists fight back by dosing the coolant to keep it *reducing*: that's the difference between PWR and BWR water chemistry, and the whole reason a PWR runs its primary loop under a hydrogen overpressure.

## The formal version

**Oxidation kinetics.** Let $x$ be oxide thickness (µm) and $t$ time. Two regimes:

- **Pre-transition (protective).** Growth is diffusion-limited through the oxide, giving a **parabolic** law
$$x = \sqrt{k_p\, t}, \qquad \text{equivalently}\quad \frac{dx}{dt} = \frac{k_p}{2x},$$
where $k_p$ is the parabolic rate constant (µm²/day). *In words: thickness grows as the square root of time, so the growth rate falls off as the oxide gets thicker — the skin chokes its own supply.* (Zircaloy is often closer to *cubic*, $x^3 \propto t$, but the point is identical: decelerating and self-protective.)

- **Post-transition (breakaway).** Once the oxide cracks at a transition thickness $x_t$, it stops protecting and growth goes **linear**:
$$x = x_t + k_\ell\,(t - t_t), \qquad \frac{dx}{dt} = k_\ell = \text{const},$$
with $k_\ell$ the linear rate constant (µm/day) and $t_t$ the transition time. *In words: after breakaway the oxide adds thickness at a steady rate that never slows down.* Because $k_\ell$ exceeds the parabola's *local* rate at the knee, corrosion **accelerates** at transition.

The rate constants are thermally activated (Arrhenius, as in [materials-science 2.5](../../materials-science/lessons/02-05-diffusion-ii-transient-arrhenius.md)): $k \propto e^{-Q/(k_B T)}$, so a hotter clad surface corrodes far faster — this is why the hottest span of a fuel rod grows the thickest oxide. **Steels** corrode the same way (general/uniform corrosion growing a protective spinel-plus-magnetite film), just far more slowly per micron than breakaway Zircaloy at LWR temperatures.

**Radiolysis and the corrosion potential.** The measure of how aggressive the water is toward a metal is the **electrochemical corrosion potential (ECP)** — the mixed potential the metal floats to in that water, in millivolts versus a reference electrode. More oxidizing water $\Rightarrow$ higher ECP $\Rightarrow$ faster corrosion and (crucially for [4.4](04-04-scc-iascc.md)) faster cracking. Radiolysis splits water,
$$\mathrm{H_2O} \;\xrightarrow{\;n,\,\gamma\;}\; \mathrm{H_2},\ \mathrm{O_2},\ \mathrm{H_2O_2},\ \bullet\mathrm{OH},\ e^-_{aq},\ \dots,$$
and the net **oxidants** ($\mathrm{O_2}$, $\mathrm{H_2O_2}$) drive the ECP *up*. *In words: the reactor field turns clean water into an oxidizing mix all by itself.*

**Water chemistry — the reducing fix.**

- **PWR primary** (no bulk boiling): water is **borated** (dissolved boric acid, $\mathrm{H_3BO_3}$, as a soluble neutron poison for reactivity control) and **lithiated** (LiOH to raise pH and cut general corrosion). The key move: operators **dissolve excess hydrogen** ($\sim 25$–$50\ \mathrm{cc\,H_2}$ per kg water at STP). Le Chatelier in reverse — flooding the water with $\mathrm{H_2}$ drives the recombination $\mathrm{H_2} + \tfrac12\mathrm{O_2}\to \mathrm{H_2O}$ (and radical scavenging of $\mathrm{H_2O_2}$) forward, suppressing radiolytic oxidants and pinning the ECP low (reducing, roughly $-500\ \mathrm{mV}$ range). *In words: keep the water swimming in hydrogen and the corrosive oxygen never accumulates.*
- **BWR** (bulk boiling in the core): boiling **strips dissolved gases into the steam**, so $\mathrm{H_2}$ dosed into the water largely leaves — the coolant is harder to keep reducing and sits more oxidizing. **Normal Water Chemistry (NWC)** accepts a high ECP; **Hydrogen Water Chemistry (HWC)** injects $\mathrm{H_2}$ into the feedwater (often with a trace of noble-metal catalyst, "NobleChem") to knock the ECP down where it counts, mainly to slow cracking of core internals ([4.4](04-04-scc-iascc.md)).

**CRUD.** Corrosion doesn't stay put. Corrosion products from the *whole loop* — iron and nickel oxides shed by the steel piping and steam generators (**flow-accelerated corrosion** thins those walls and feeds the coolant) — circulate and **deposit on the hot fuel cladding** as a porous layer called **CRUD** (Chalk River Unidentified Deposits). Three consequences:

1. **Activation transport.** CRUD sitting in the neutron flux gets activated — notably $^{59}\mathrm{Co}(n,\gamma)^{60}\mathrm{Co}$ (a radiative-capture reaction, [intro-nuclear-engineering 2.1](../../intro-nuclear-engineering/lessons/02-01-microscopic-cross-section.md)). The $^{60}\mathrm{Co}$ then flakes off and redeposits on out-of-core piping, becoming the **dominant gamma dose to maintenance workers**. Cobalt is minimized in alloys for exactly this reason.
2. **CIPS / AOA.** In PWRs, thick CRUD on the hottest rods soaks up boron (as $\mathrm{LiBO_2}$). Boron is a neutron absorber, so it depresses power locally at the top of the core — **CRUD-Induced Power Shift**, historically called **Axial Offset Anomaly**: the measured power distribution drifts from prediction.
3. **Local corrosion.** CRUD insulates and can trap concentrated chemistry against the clad, locally raising temperature and accelerating oxidation and hydrogen pickup underneath it.

**Corrosion-driven hydrogen pickup.** Of the $\mathrm{H_2}$ the corrosion reaction makes, a **pickup fraction** $f_H$ (roughly 10–20% for Zircaloy-4, lower for M5/ZIRLO) enters the metal instead of escaping. So the hydrogen source term feeding [4.1](04-01-zirconium-alloys-cladding.md)'s hydriding is set by the corrosion rate: **breakaway oxidation is also breakaway hydriding.** The two failure clocks run off the same reaction.

## Picture

![Left panel: oxide thickness versus time, a decelerating parabolic protective curve up to a transition knee, then a steeper straight linear breakaway line, with a faint dashed extrapolation showing where parabolic growth would have stayed. Right panel: a vertical ECP axis; radiolysis of water producing O2 and H2O2 pushes the ECP up toward oxidizing (BWR normal water chemistry sits high), while dosing dissolved H2 recombines the oxidants and pulls the ECP down toward reducing (PWR with H2 sits low).](assets/04-03-fig1.svg)

## Worked examples

**Example 1 (oxide kinetics — protective versus breakaway).** A Zircaloy clad grows a protective oxide with parabolic constant $k_p = 0.040\ \mu\mathrm{m^2/day}$. Transition happens at $x_t = 2.0\ \mu\mathrm{m}$. After transition, growth is linear at $k_\ell = 0.030\ \mu\mathrm{m/day}$. (a) How thick is the oxide at 64 days, still pre-transition? (b) When does transition occur? (c) Contrast the growth *rate* just before and just after transition. (d) Project the thickness at 300 days, and compare to what parabolic growth alone would have given.

(a) Parabolic law:
$$x = \sqrt{k_p\, t} = \sqrt{0.040 \times 64} = \sqrt{2.56} = 1.6\ \mu\mathrm{m}.$$

(b) Transition when $x = x_t = 2.0\ \mu\mathrm{m}$: $\;t_t = x_t^2/k_p = (2.0)^2/0.040 = 4.0/0.040 = 100\ \mathrm{days}.$

(c) *Just before* transition the parabolic rate is
$$\left.\frac{dx}{dt}\right|_{x_t} = \frac{k_p}{2x_t} = \frac{0.040}{2\times 2.0} = 0.010\ \mu\mathrm{m/day}.$$
*Just after*, it is the linear rate $k_\ell = 0.030\ \mu\mathrm{m/day}$ — **three times faster**, and unlike the parabola it won't slow down. That jump is breakaway.

(d) From 100 to 300 days (200 days of linear growth):
$$x(300) = x_t + k_\ell(t - t_t) = 2.0 + 0.030\times 200 = 2.0 + 6.0 = 8.0\ \mu\mathrm{m}.$$
Had the oxide stayed protective, extrapolating the parabola to 300 days gives $x = \sqrt{0.040\times 300} = \sqrt{12} = 3.5\ \mu\mathrm{m}$. Breakaway **more than doubled** the oxide (8.0 vs 3.5 µm) over the same interval — and doubled the hydrogen delivered to the metal with it.

*Check.* Units: $\sqrt{(\mu\mathrm{m^2/day})\cdot\mathrm{day}} = \mu\mathrm{m}$ ✓; $k_p/(2x)$ gives $(\mu\mathrm{m^2/day})/\mu\mathrm{m} = \mu\mathrm{m/day}$ ✓. Sanity: the pre-transition rate ($0.010$) is *below* the post-transition rate ($0.030$), so the curve must kink upward at the knee — exactly the shape in the figure.

**Example 2 (why PWRs dose hydrogen).** A PWR operator adds dissolved $\mathrm{H_2}$ to the primary coolant. Explain, step by step, why this *lowers* both the corrosion rate and the hydrogen pickup of the cladding — even though you are adding hydrogen.

The apparent paradox — adding hydrogen to *reduce* hydriding — dissolves once you separate two different things hydrogen does.

1. **The problem is oxygen, not hydrogen.** In-core, radiolysis continuously breaks water into oxidants ($\mathrm{O_2}$, $\mathrm{H_2O_2}$). These are what raise the ECP and make the water aggressive; left alone they accumulate to a high, oxidizing corrosion potential.
2. **Excess $\mathrm{H_2}$ scavenges them.** Flooding the water with dissolved $\mathrm{H_2}$ drives the recombination $\mathrm{H_2} + \tfrac12\mathrm{O_2} \to \mathrm{H_2O}$ (and $\mathrm{H_2} + \mathrm{H_2O_2} \to 2\,\mathrm{H_2O}$) forward — Le Chatelier pushing back on radiolysis. Net radiolytic oxidant concentration is suppressed toward zero.
3. **Low oxidant $\Rightarrow$ low ECP.** With no oxidants to accept electrons, the metal floats to a low (reducing) corrosion potential, roughly $-500\ \mathrm{mV}$ rather than the oxidizing values un-dosed water would reach. Corrosion current — and cracking susceptibility ([4.4](04-04-scc-iascc.md)) — falls steeply with ECP.
4. **Slower corrosion $\Rightarrow$ less hydrogen made $\Rightarrow$ less picked up.** The clad's hydrogen uptake is a fixed fraction $f_H$ of the $\mathrm{H_2}$ produced by $\mathrm{Zr} + 2\mathrm{H_2O}\to\mathrm{ZrO_2}+2\mathrm{H_2}$. Suppressing corrosion shrinks that source term, so *less* hydrogen enters the metal.

So the dosed $\mathrm{H_2}$ never meaningfully drives pickup itself; it kills the oxidant that would otherwise accelerate the corrosion reaction that *does*. That's why a PWR runs its primary loop under a hydrogen overpressure — and why a BWR, which boils that dissolved $\mathrm{H_2}$ off into the steam, has a harder time staying reducing and must inject $\mathrm{H_2}$ into the feedwater (HWC) to get the same effect.

*Check.* The logic is monotone in the right direction: more dissolved $\mathrm{H_2}$ → fewer oxidants → lower ECP → less corrosion → less pickup. And it explains the PWR/BWR split (boiling strips the fix), which any correct account must.

## Watch out

- **You might think the oxide is purely bad — the thicker the better to scrape off.** Early oxide is your *protection*; a dense, adherent $\mathrm{ZrO_2}$ skin is what keeps the corrosion rate low. The danger isn't the oxide's existence, it's the **transition** where it cracks and stops protecting. "Good" oxide is thin and intact; "bad" oxide is post-breakaway.
- **You might think dosing hydrogen must increase hydrogen pickup.** Backwards: the dosed $\mathrm{H_2}$ mostly suppresses radiolytic *oxygen*, lowering the ECP and slowing the corrosion reaction that generates the hydrogen actually taken up. Less corrosion, less pickup — the dominant effect wins (Example 2).
- **You might treat CRUD as just dirt.** It's an active player: it carries activated $^{60}\mathrm{Co}$ around the loop (worker dose), it shifts core power by soaking up boron (CIPS/AOA), and it locally overheats the clad and worsens the corrosion underneath. Flow-accelerated corrosion elsewhere in the loop is where much of it comes from — a wall-thinning hazard in its own right.
- **You might read "parabolic" as a hard law for Zircaloy.** Real Zircaloy pre-transition kinetics are often cubic; the exact exponent matters less than the qualitative fact — *decelerating and protective before transition, linear after.*

## One-liner

> Reactor water grows a protective oxide that decelerates (parabolic/cubic) until it cracks and goes linear at breakaway — and the same reaction pumps hydrogen into the clad, so operators dose $\mathrm{H_2}$ to suppress radiolytic oxidants, drop the ECP, and slow both corrosion and hydriding.

## Problems

**P1 (🟢)** A Zircaloy oxide grows parabolically with $k_p = 0.050\ \mu\mathrm{m^2/day}$. (a) Find the oxide thickness at 80 days. (b) If transition occurs at $x_t = 2.5\ \mu\mathrm{m}$, at what time does it happen?

**P2 (🟡)** For the clad in P1, post-transition growth is linear at $k_\ell = 0.025\ \mu\mathrm{m/day}$. (a) Compare the growth rate immediately before and immediately after transition. (b) Find the total oxide thickness 400 days after transition begins. (c) One qualitative sentence: what does this thicker oxide imply for the clad's hydrogen content, and hence for the hydride embrittlement of [4.1](04-01-zirconium-alloys-cladding.md)?

**P3 (🔴)** A utility switches a BWR from Normal Water Chemistry to Hydrogen Water Chemistry. Explain, using the ECP idea, (a) why NWC water sits at a high (oxidizing) ECP in the first place, (b) what injecting $\mathrm{H_2}$ into the feedwater changes, and (c) why the same $\mathrm{H_2}$ dose is *easier* to maintain in a PWR primary loop than in a BWR.

<details>
<summary>Solutions</summary>

**P1** (a) Parabolic law:
$$x = \sqrt{k_p\,t} = \sqrt{0.050\times 80} = \sqrt{4.0} = 2.0\ \mu\mathrm{m}.$$
(b) Transition at $x_t = 2.5\ \mu\mathrm{m}$: $\;t_t = x_t^2/k_p = (2.5)^2/0.050 = 6.25/0.050 = 125\ \mathrm{days}.$

*Check.* Units: $\sqrt{(\mu\mathrm{m^2/day})\cdot\mathrm{day}} = \mu\mathrm{m}$ ✓. At 80 days ($<125$) the clad is still pre-transition and $x = 2.0 < x_t = 2.5\ \mu\mathrm{m}$ ✓ — consistent with not yet having reached breakaway.

**P2** (a) Just before transition the parabolic rate is
$$\frac{k_p}{2x_t} = \frac{0.050}{2\times 2.5} = 0.010\ \mu\mathrm{m/day},$$
versus the linear rate $k_\ell = 0.025\ \mu\mathrm{m/day}$ just after — **2.5× faster**, and no longer decreasing.

(b) After 400 days of linear growth:
$$x = x_t + k_\ell(t - t_t) = 2.5 + 0.025\times 400 = 2.5 + 10 = 12.5\ \mu\mathrm{m}.$$

(c) The corrosion reaction $\mathrm{Zr}+2\mathrm{H_2O}\to\mathrm{ZrO_2}+2\mathrm{H_2}$ ties hydrogen production to oxide grown, and a fixed pickup fraction enters the metal — so a thick breakaway oxide means a high hydrogen content, more hydride precipitation, and worse embrittlement / lower ductility per [4.1](04-01-zirconium-alloys-cladding.md). Breakaway oxidation is breakaway hydriding.

*Check.* The post-transition rate (0.025) exceeds the pre-transition rate (0.010), so growth accelerated at the knee ✓; 12.5 µm after prolonged linear growth is far past the ~2 µm protective regime, a genuinely degraded clad ✓.

**P3** (a) In-core the neutron/gamma field continuously **radiolyzes** water into oxidants ($\mathrm{O_2}$, $\mathrm{H_2O_2}$). Under NWC nothing removes them, so they accumulate and the metal floats to a **high, oxidizing ECP** — aggressive toward corrosion and cracking.

(b) Injecting $\mathrm{H_2}$ into the feedwater floods the coolant with dissolved hydrogen, which **recombines/scavenges** the radiolytic oxidants ($\mathrm{H_2}+\tfrac12\mathrm{O_2}\to\mathrm{H_2O}$, and reaction with $\mathrm{H_2O_2}$). With oxidants suppressed the **ECP drops** into the reducing range, cutting corrosion and — the main goal — the crack-growth rate of core internals ([4.4](04-04-scc-iascc.md)).

(c) A BWR **boils** its coolant in the core, and boiling strips dissolved gases (including the dosed $\mathrm{H_2}$) into the steam, so the fix keeps escaping and larger/continuous injection is needed. A PWR primary loop is kept **subcooled — no bulk boiling** — so dissolved $\mathrm{H_2}$ stays in solution and a modest overpressure holds a low ECP steadily.

*Check.* The argument is consistent with the PWR/BWR contrast in the lesson: the same reducing strategy, made harder by boiling. Directionally, more dissolved $\mathrm{H_2}$ → fewer oxidants → lower ECP, matching Example 2.

</details>

## Flashback

**From Lesson 4.1 (Zirconium alloys — neutron economy):** Zircaloy is chosen partly because zirconium is nearly transparent to thermal neutrons. Take $\sigma_a = 0.18$ b for Zr, density $\rho = 6.5\ \mathrm{g/cm^3}$, atomic mass $A = 91.2\ \mathrm{g/mol}$. (a) Compute the number density $N$ and macroscopic absorption cross section $\Sigma_a = N\sigma_a$. (b) Estimate the fraction of thermal neutrons absorbed crossing a $0.60\ \mathrm{mm}$ clad wall. (c) Repeat for a stainless-steel clad (model as iron: $\sigma_a = 2.56$ b, $\rho = 7.87\ \mathrm{g/cm^3}$, $A = 55.85\ \mathrm{g/mol}$) and say why LWRs clad with Zr rather than steel.

<details>
<summary>Solution</summary>

(a) Number density ($N_A = 6.022\times10^{23}\ \mathrm{mol^{-1}}$, $1\ \mathrm{b} = 10^{-24}\ \mathrm{cm^2}$):
$$N_{\mathrm{Zr}} = \frac{\rho N_A}{A} = \frac{6.5 \times 6.022\times10^{23}}{91.2} \approx 4.29\times10^{22}\ \mathrm{cm^{-3}},$$
$$\Sigma_a = N\sigma_a = 4.29\times10^{22} \times 0.18\times10^{-24} \approx 7.7\times10^{-3}\ \mathrm{cm^{-1}}.$$

(b) For a thin absorber the absorbed fraction is $\approx \Sigma_a\, x$ (with $x = 0.60\ \mathrm{mm} = 0.060\ \mathrm{cm}$; equivalently $1 - e^{-\Sigma_a x}$):
$$\Sigma_a x \approx 7.7\times10^{-3} \times 0.060 \approx 4.6\times10^{-4} \approx 0.05\%.$$

(c) For iron:
$$N_{\mathrm{Fe}} = \frac{7.87 \times 6.022\times10^{23}}{55.85} \approx 8.49\times10^{22}\ \mathrm{cm^{-3}},\quad \Sigma_a \approx 8.49\times10^{22}\times2.56\times10^{-24} \approx 0.217\ \mathrm{cm^{-1}},$$
$$\Sigma_a x \approx 0.217 \times 0.060 \approx 1.3\times10^{-2} \approx 1.3\%.$$
A steel clad would parasitically absorb **about 28× more** thermal neutrons than Zircaloy ($1.3\%$ vs $0.05\%$) — a heavy tax on the neutron economy that would force higher enrichment. That low absorption is precisely why LWRs clad with zirconium, accepting its corrosion/hydriding downsides (this lesson) in exchange.

*Check.* Units: $\mathrm{cm^{-3}}\cdot\mathrm{cm^2} = \mathrm{cm^{-1}}$ for $\Sigma_a$, and $\mathrm{cm^{-1}}\cdot\mathrm{cm}$ dimensionless for the fraction ✓. The ratio $0.217/0.0077 \approx 28$ matches $\sigma_a$ and $N$ both being larger for iron ✓.

</details>

## Connections

- **Backward:** the corrosion reaction $\mathrm{Zr}+2\mathrm{H_2O}\to\mathrm{ZrO_2}+2\mathrm{H_2}$ is the *source* of the hydrogen that hydrides and embrittles the clad in [4.1](04-01-zirconium-alloys-cladding.md) — corrosion rate sets hydriding rate. The oxidation kinetics are Arrhenius diffusion through the oxide, the same thermally-activated transport as [materials-science 2.5](../../materials-science/lessons/02-05-diffusion-ii-transient-arrhenius.md), and general corrosion of the [structural steels of 4.2](04-02-steels-austenitic-ferritic-martensitic.md) follows the same protective-film logic.
- **Forward:** the ECP built here is the environmental leg of the SCC triad in [4.4](04-04-scc-iascc.md) — lowering ECP (HWC, PWR hydrogen dosing) is the main chemistry lever against stress-corrosion and irradiation-assisted cracking. CRUD, activation transport, and flow-accelerated corrosion are the plant-operations face of the same chemistry.
- **Sideways:** the $^{59}\mathrm{Co}(n,\gamma)^{60}\mathrm{Co}$ activation that dominates worker dose is a radiative-capture reaction governed by a capture cross section ([intro-nuclear-engineering 2.1](../../intro-nuclear-engineering/lessons/02-01-microscopic-cross-section.md)); the "protective skin that self-limits until it cracks" is the same passivation-and-breakdown story that governs corrosion of everyday metals in aqueous corrosion science and, more loosely, any diffusion-throttled growth process.
