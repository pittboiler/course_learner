# Climate Physics · Lesson 2.4: Clouds — the wild card

> ⏱ ~15 min · Module 2: Feedbacks & climate sensitivity · Builds on: [2.2](02-02-planck-water-vapour-lapse-rate.md), [2.1](02-01-feedbacks-gain-factor.md), [atmospheric-science 2.6](../../atmospheric-science/lessons/02-06-cloud-classification.md) · Unlocks: [2.5](02-05-diagnosing-feedbacks.md), [3.3](03-03-constraining-sensitivity-observations.md)

## Why this matters

In 1979 the Charney report put climate sensitivity at 1.5 to 4.5 K and named clouds as the reason for the width. In 2013 the IPCC put it at 1.5 to 4.5 K and named clouds as the reason for the width. Thirty-four years, no narrowing. AR6 finally moved — to 2.5 to 4.0 K — and the reason it moved was a genuine advance in understanding cloud feedback, which is now assessed as **positive** with reasonable confidence for the first time. This lesson explains what makes clouds so hard, what the mechanisms actually are, and the single distinction that resolves most of the confusion in popular accounts: **the effect of clouds existing is not the feedback.**

## The idea

**Clouds do two opposite things at once.** They are bright, so they reflect sunlight — cooling. They are opaque in the infrared and their tops are cold, so they raise the emission level — warming. Which wins is set by two properties: how *high* the cloud top is (higher means colder means more longwave warming) and how *thick* the cloud is (thicker means more shortwave cooling).

**So the sign flips between cloud types.** A wispy cirrus at 12 km is nearly transparent to sunlight but emits at 210 K instead of the surface's 288 K — it warms strongly. A thick marine stratocumulus deck at 1 km reflects most of the sunlight but has a top at 280 K, only 8 K colder than the surface — it cools strongly. Deep convective towers do both at full strength and roughly cancel.

**Today's clouds, on net, cool the planet by about 20 W m⁻². That tells you nothing about the feedback.** ([Card: CRE versus cloud feedback](../reference.md#cloud-radiative-effect-versus-cloud-feedback).) The **cloud radiative effect** is what clouds do relative to a cloudless planet — a statement about the present state. The **cloud feedback** is how that effect *changes* per kelvin of warming — a derivative. A large negative CRE is entirely compatible with a positive feedback, and that is in fact the situation: clouds cool now, and warming makes them cool slightly less.

**Why it is the hardest problem in the field.** Clouds form on scales of tens to hundreds of metres. A global model's grid box is 25 to 100 km across. Every cloud process — convection, condensation, entrainment, precipitation, droplet number — is therefore *parameterized*, replaced by a statistical rule with tunable constants. The rules differ between models, and they differ most in the regimes where the feedback lives.

## The formal version

**Cloud radiative effect.** Define CRE as the difference between all-sky and clear-sky top-of-atmosphere fluxes:

$$\mathrm{CRE} = \left(F^{\uparrow}_{\text{clear}} - F^{\uparrow}_{\text{all-sky}}\right)_{\text{SW}} + \left(F^{\uparrow}_{\text{clear}} - F^{\uparrow}_{\text{all-sky}}\right)_{\text{LW}}.$$

Observed global means (from CERES satellite data):

| Component | Value |
|---|---|
| Shortwave CRE | $-45\ \mathrm{W\,m^{-2}}$ (clouds reflect) |
| Longwave CRE | $+27\ \mathrm{W\,m^{-2}}$ (clouds trap) |
| **Net CRE** | $\approx -18\ \mathrm{W\,m^{-2}}$ |

*In words: remove all clouds and Earth would gain 18 watts per square metre — clouds are currently a large cooling influence.* For scale, that is five times the entire $\mathrm{CO_2}$-doubling forcing.

**Cloud feedback.** The feedback is

$$c_{\text{cl}} = \frac{d\,\mathrm{CRE}}{dT_s} + (\text{correction for cloud masking of other feedbacks}).$$

The correction matters and is discussed in [2.5](02-05-diagnosing-feedbacks.md): clouds hide part of the surface from space, so they mask the water-vapour and lapse-rate feedbacks, and $d\mathrm{CRE}/dT$ therefore includes a contribution from *other* feedbacks changing under the cloud. Cloud feedback and $d\mathrm{CRE}/dT$ differ by about $0.3\ \mathrm{W\,m^{-2}\,K^{-1}}$ — the same order as the answer.

AR6 assessment: $c_{\text{cl}} = +0.42\ \mathrm{W\,m^{-2}\,K^{-1}}$, range $-0.10$ to $+0.94$.

**Sorting cloud types.** A cloud's net effect depends on top temperature $T_c$ and optical thickness. Roughly, for a cloud of fractional area $f$, emissivity $\epsilon_c$ and albedo $\alpha_c$ over a surface at $T_s$ with insolation $S_0$,

$$\mathrm{CRE} \approx f\left[\underbrace{-\alpha_c S_0}_{\text{SW, cooling}} + \underbrace{\epsilon_c\,\sigma\left(T_s^4 - T_c^4\right)}_{\text{LW, warming}}\right].$$

*In words: the cooling scales with how bright the cloud is; the warming scales with how much colder the cloud top is than the surface.* Evaluate at $T_s = 288$ K ($\sigma T_s^4 = 390\ \mathrm{W\,m^{-2}}$):

| Cloud | $T_c$ | $\sigma T_c^4$ | LW term | SW term | Net |
|---|---|---|---|---|---|
| Cirrus, 12 km | 210 K | 110 | $+280$ | small | **warms** |
| Deep convective | 210 K | 110 | $+280$ | very large | ~cancels |
| Stratocumulus, 1 km | 280 K | 348 | $+42$ | large | **cools** |

**The three feedback mechanisms that matter.**

**1. Rising anvils at fixed temperature (positive, LW).** Deep convective anvils detrain where the atmosphere's radiative cooling by water vapour shuts off — which happens where the air becomes too cold to hold enough vapour, at around 200 K. Warm the surface and the whole troposphere deepens, so the anvil rises *while staying at the same temperature*. Its emission $\sigma T_c^4$ is therefore unchanged even though the surface emits more, so the cloud's longwave trapping grows. This is the **fixed anvil temperature** hypothesis, and it is one of the more elegant arguments in the field because the invariant is a *temperature*, set by water-vapour thermodynamics, rather than a height. Worth roughly $+0.2$ to $+0.3$.

**2. Low-cloud amount (positive, SW — and the big one).** Subtropical marine stratocumulus sit under a strong inversion capping a shallow, moist boundary layer. Whether the deck survives depends on a competition: surface evaporation moistens the layer, while **entrainment** of dry free-tropospheric air from above dries it. Warming strengthens the entrainment drying more than it strengthens the moistening (because the surface-to-free-troposphere moisture *contrast* grows as Clausius–Clapeyron, [2.2](02-02-planck-water-vapour-lapse-rate.md)), so the cloud thins and breaks up. Losing bright cloud over dark ocean is a strong positive feedback. Worth roughly $+0.2$ to $+0.4$, and it carries most of the intermodel spread.

**3. Cloud phase (negative, SW — and the one that moved AR6).** Mixed-phase clouds in the mid-to-high latitudes contain both supercooled liquid droplets and ice crystals. Liquid droplets are smaller and more numerous, so a liquid cloud is brighter than an ice cloud with the same water content. Warming converts ice to liquid, brightening the cloud: a negative feedback. Here is the twist: CMIP5 models held **too much ice** in Southern Ocean clouds compared with satellite and aircraft observations, which left them too much ice to convert and gave them an *exaggerated* negative feedback. Correcting the phase partitioning in CMIP6 removed much of that spurious negative term, making the net cloud feedback more positive and pushing several models to higher ECS. **This is the clearest case in the field of an observational constraint on a cloud process changing the assessed sensitivity**, and it is why AR6 could finally move the range.

There is also **4: cloud shifting.** Storm tracks and their cloud bands move poleward with warming ([5.5](05-05-circulation-regional-response.md)), taking reflective cloud into weaker sunlight, which is weakly positive.

**Why parameterization is the bottleneck.** A stratocumulus deck's fate depends on entrainment at the inversion, a process operating on scales of tens of metres and driven by turbulence that global models cannot resolve and will not resolve for decades. Large-eddy simulations resolve it beautifully — in a box a few kilometres across, for a few days. The gap between "the process we can simulate honestly" and "the domain we need" is four orders of magnitude in scale, and closing it is the motivation behind kilometre-scale global models and behind hybrid approaches that train a cloud parameterization on LES output.

## Picture

![Two side-by-side schematics over a 288 K surface. On the left a high thin cirrus at 12 km with a top temperature of 210 K: sunlight passes almost straight through with only a small reflection, while the surface's 390 watts per square metre of upward longwave is absorbed and re-emitted at only 110, so the cloud warms the planet. On the right a low thick stratocumulus at 1 km with a top temperature of 280 K: most sunlight is reflected straight back, while the cloud top emits 348 watts per square metre, barely less than the surface, so the longwave trapping is weak and the cloud cools the planet](assets/02-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — the sign of a given cloud).** A cloud deck covers 20 percent of a region, has albedo 0.6 against a background ocean albedo of 0.06, and a top at 265 K over a 290 K surface with emissivity 1. Local insolation is 340 W m⁻². Compute the shortwave, longwave and net cloud radiative effect.

Shortwave: the cloud raises the region's albedo by $0.20\times(0.60-0.06) = 0.108$, so

$$\mathrm{CRE}_{\text{SW}} = -0.108 \times 340 = -36.7\ \mathrm{W\,m^{-2}}.$$

Longwave: $\sigma(290)^4 = 401.1$, $\sigma(265)^4 = 279.4$, so the cloud reduces outgoing longwave by $401.1-279.4 = 121.7$ over the fraction it covers:

$$\mathrm{CRE}_{\text{LW}} = 0.20 \times 121.7 = +24.3\ \mathrm{W\,m^{-2}}.$$

Net: $$-36.7 + 24.3 = -12.4\ \mathrm{W\,m^{-2}}$$ — the deck **cools**.

*The point.* Now change one number: raise the cloud top to 220 K and keep everything else. $\sigma(220)^4 = 132.9$, so $\mathrm{CRE}_{\text{LW}} = 0.20\times268.2 = +53.6$, and the net becomes $+16.9\ \mathrm{W\,m^{-2}}$ — the *same cloud amount and the same brightness* now warms. Cloud-top height is the swing variable, which is why satellite retrievals of cloud-top pressure matter so much and why the fixed-anvil-temperature argument is worth as much as it is.

**Example 2 (why you'd care — how much ECS rides on clouds).** Take $\lambda_0 = 3.2$, water vapour plus lapse rate $= +1.2$, albedo $= +0.3$, and let the cloud feedback vary over its assessed range $-0.10$ to $+0.94\ \mathrm{W\,m^{-2}\,K^{-1}}$. Compute the implied ECS range, with $F_{2\times} = 3.93$.

Low end, $c_{\text{cl}} = -0.10$:
$$\sum c_i = 1.2+0.3-0.10 = 1.40, \quad \lambda = 1.80, \quad \mathrm{ECS} = \frac{3.93}{1.80} = 2.18\ \mathrm{K}.$$

Central, $c_{\text{cl}} = +0.42$:
$$\sum c_i = 1.92, \quad \lambda = 1.28, \quad \mathrm{ECS} = \frac{3.93}{1.28} = 3.07\ \mathrm{K}.$$

High end, $c_{\text{cl}} = +0.94$:
$$\sum c_i = 2.44, \quad \lambda = 0.76, \quad \mathrm{ECS} = \frac{3.93}{0.76} = 5.17\ \mathrm{K}.$$

*The general principle.* Clouds alone span 2.2 to 5.2 K — wider than the entire assessed range, which is why every other line of evidence is needed to narrow it. And note the asymmetry, which is [2.1](02-01-feedbacks-gain-factor.md)'s convexity showing up in practice: the low half of the cloud range costs $0.89$ K while the high half buys $2.10$ K. **The upper tail of climate sensitivity is, quite specifically, the upper tail of the cloud feedback passed through a reciprocal.**

## Watch out

- **You might think** that because clouds cool the planet by 18 W m⁻², more warming means more clouds means a stabilizing feedback. **Actually** the sign of the *effect* and the sign of the *derivative* are unrelated. Warming reduces low-cloud cover and raises high-cloud tops, both of which make the net cooling *weaker* — a positive feedback despite the strongly negative CRE. Conflating CRE with feedback is the single most common error in popular treatments.
- **You might think** the cloud feedback could plausibly be strongly negative and save us. **Actually** it is now assessed as positive with the low end at $-0.10$, and the specific mechanism that used to supply a large negative term — the mixed-phase optical-depth feedback — turned out to be inflated by a model bias in supercooled liquid, which observations corrected. Not proof, but the direction of evidence has been consistent.
- **You might think** the difficulty is that we do not understand cloud physics. **Actually** cloud microphysics is quite well understood at the process level; the difficulty is *scale separation* — the resolved model cannot see the process, so it must be represented statistically, and the statistical rule is what is uncertain. This distinction matters because it says what would fix the problem: not better cloud theory but finer grids, or a parameterization learned from resolved simulation.

## One-liner

> Clouds cool the planet by twenty watts per square metre and that fact is irrelevant — what matters is that warming raises the cold tops and thins the bright decks, so the cooling gets slightly weaker, and the whole upper tail of climate sensitivity lives in exactly how much weaker.

## Problems

**P1 (🟢)** A cirrus deck covers 30 percent of the tropics, has albedo 0.15 over an ocean of albedo 0.06, cloud-top temperature 215 K, surface 300 K, local insolation 420 W m⁻². (a) Compute the shortwave CRE. (b) Compute the longwave CRE. (c) Compute the net and state whether the deck warms or cools.

**P2 (🟡)** Suppose warming causes low-cloud cover in the subtropics (30 percent of Earth's surface, local insolation 400 W m⁻²) to decrease from 40 percent to 38 percent per kelvin. The clouds have albedo 0.55 against ocean's 0.06 and cloud tops only 6 K colder than the surface. (a) Compute the change in global-mean absorbed shortwave per kelvin. (b) Argue that the longwave change is negligible, with a number. (c) State the resulting feedback in W m⁻² K⁻¹ and compare with the assessed total cloud feedback.

**P3 (🔴, optional)** The fixed-anvil-temperature hypothesis says tropical anvil cloud tops stay at a constant *temperature* as the climate warms, rising in *height* instead. (a) If the surface warms 3 K and the tropical lapse rate is 6.0 K km⁻¹ in both climates, by how much does an anvil at 210 K rise? (b) Compute the change in longwave CRE per kelvin of surface warming for an anvil covering 25 percent of the tropics (which is 50 percent of Earth), taking the surface at 300 K, and express it as a global feedback. (c) Explain why the argument would fail if anvils instead stayed at a fixed *height*, and compute the feedback in that case for comparison.

<details>
<summary>Solutions</summary>

**P1** (a) Albedo increase: $0.30\times(0.15-0.06) = 0.027$.

$$\mathrm{CRE}_{\text{SW}} = -0.027 \times 420 = -11.3\ \mathrm{W\,m^{-2}}.$$

(b) $\sigma(300)^4 = 459.3$, $\sigma(215)^4 = 121.1$, difference 338.2.

$$\mathrm{CRE}_{\text{LW}} = 0.30 \times 338.2 = +101.5\ \mathrm{W\,m^{-2}}.$$

(c) Net $= -11.3 + 101.5 = +90.2\ \mathrm{W\,m^{-2}}$: the deck **warms**, strongly. Thin high cloud is nearly a pure greenhouse agent, which is why cirrus from aviation contrails is a warming influence and why thinning tropical cirrus has been proposed (speculatively) as a cooling intervention.

**P2** (a) Cloud fraction falls by 0.02, so the subtropical albedo falls by

$$\Delta\alpha = -0.02\times(0.55-0.06) = -0.0098.$$

Extra absorbed sunlight locally: $0.0098 \times 400 = 3.92\ \mathrm{W\,m^{-2}}$. Over 30 percent of the globe:

$$\Delta F = 3.92 \times 0.30 = 1.18\ \mathrm{W\,m^{-2}\ per\ K}.$$

(b) Cloud tops 6 K below a 288 K surface: $\sigma(288)^4 - \sigma(282)^4 = 390.1 - 358.6 = 31.5\ \mathrm{W\,m^{-2}}$. Removing 2 percent of cloud cover *increases* outgoing longwave by $0.02\times31.5 = 0.63$ locally, or $0.19\ \mathrm{W\,m^{-2}}$ globally — a negative contribution about six times smaller than the shortwave term. Negligible in the sense of not changing the sign; not negligible in the sense of not changing the magnitude.

(c) Net feedback: $$c_{\text{cl,low}} = 1.18 - 0.19 = +0.99\ \mathrm{W\,m^{-2}\,K^{-1}}.$$

That is *larger* than the entire assessed cloud feedback of $+0.42$, from a 2-percentage-point-per-kelvin change in low cloud — a change far too small to detect in the satellite record against natural variability. This is the whole difficulty in one number: **the feedback that matters is produced by a cloud change we cannot observe.** Real estimates put the low-cloud amount term nearer $+0.2$ to $+0.4$, i.e. under one percentage point per kelvin.

**P3** (a) Staying at 210 K while the surface warms 3 K means the anvil must rise by enough to recover 3 K of cooling:

$$\Delta z = \frac{3.0\ \mathrm{K}}{6.0\ \mathrm{K\,km^{-1}}} = 0.50\ \mathrm{km}.$$

(b) The anvil's emission $\sigma T_c^4$ is *unchanged*, while the surface's is not. Clear-sky outgoing longwave rises with the surface; cloudy-sky does not. So

$$\frac{d\,\mathrm{CRE_{LW}}}{dT_s} = f_{\text{anvil}} \times 4\sigma T_s^3 = 0.25 \times 4(5.67\times10^{-8})(300)^3 = 0.25 \times 6.12 = 1.53\ \mathrm{W\,m^{-2}\,K^{-1}}$$

within the tropics. The tropics are half the globe, so globally

$$c \approx 0.5 \times 1.53 = +0.77\ \mathrm{W\,m^{-2}\,K^{-1}}.$$

(This is an upper bound: real anvil temperatures rise slightly (the "proportionately higher anvil temperature" refinement), and the shortwave effect partly offsets. Assessed values are nearer $+0.2$ to $+0.3$.)

(c) If anvils stayed at fixed *height*, they would warm along with the rest of the troposphere — indeed by *more* than the surface, since the tropical upper troposphere is moist-adiabatically amplified by roughly a factor 2 ([2.2](02-02-planck-water-vapour-lapse-rate.md)). Then

$$\frac{d\,\mathrm{CRE_{LW}}}{dT_s} = f\left(4\sigma T_s^3 - 2\times4\sigma T_c^3\right) = 0.25\left(6.12 - 2\times4(5.67\times10^{-8})(210)^3\right).$$

$4\sigma(210)^3 = 2.10$, so the bracket is $6.12 - 4.20 = 1.92$, giving $0.25\times1.92 = 0.48$ in the tropics and $+0.24$ globally.

So fixed height gives roughly a third of what fixed temperature gives. The physical content of the FAT hypothesis is precisely that anvils are anchored to a *thermodynamic* level — where clear-sky radiative cooling by water vapour ceases, which happens at a fixed temperature because $q_{\text{sat}}(T)$ is a fixed function — rather than to a geometric one.

*Check.* Both routes agree on the structure: whenever the emitting surface of a cloud warms *less* than the underlying surface, the cloud's longwave trapping strengthens and the feedback is positive. Fixed temperature is the extreme case (emitter does not warm at all); fixed height is the mild case; and a cloud whose top warmed *faster* than the surface would give a negative feedback, which is the mirror image of the lapse-rate argument in [2.2](02-02-planck-water-vapour-lapse-rate.md).

</details>

## Flashback

**From Lesson 2.2 (Planck, water vapour and lapse rate):** A model produces two columns. In the **polar** column the surface warms 3.0 K and the air at the 5 km emission level warms 1.2 K. In the **tropical** column the surface warms 1.0 K and the air at the 9 km emission level warms 1.9 K. (a) In which column does the emission level warm *less* than the surface? (b) State the sign of the local lapse-rate feedback in each. (c) Explain in two sentences why the global-mean lapse-rate feedback nonetheless comes out negative.

<details>
<summary>Solution</summary>

(a) The **polar** column: the emission level warms 1.2 K against a surface warming of 3.0 K, so the level that actually radiates to space warms far less than the surface. In the tropical column the emission level warms 1.9 K against 1.0 K at the surface — more, not less.

(b) Polar: the planet's emission increases *less* than a uniform warming would give, so less energy is shed per kelvin of surface warming — a **positive** (amplifying) lapse-rate feedback. Tropical: emission increases *more* than uniform — a **negative** (stabilizing) lapse-rate feedback.

(c) The global mean is an *emission-weighted* average, not an area-weighted one, and the tropics dominate the planet's outgoing longwave radiation: they are warm (emission goes as $T^4$), they cover half the surface, and their moist-adiabatic amplification is large and systematic. The polar positive contribution is real but is applied to a region that emits little, so the tropical negative term wins and the global lapse-rate feedback is about $-0.6\ \mathrm{W\,m^{-2}\,K^{-1}}$.

*Check.* Notice this is the same weighting subtlety that made the Planck response 3.2 rather than 3.74 in [2.2](02-02-planck-water-vapour-lapse-rate.md) — global feedbacks are averages over emission, and any argument that area-weights instead will get both the Planck response and the lapse-rate feedback wrong in the same direction. The polar column here is also the vertical signature of Arctic amplification from [2.3](02-03-surface-albedo-cryosphere-feedback.md): 3.0 K of polar warming for 1.0 K of tropical is an amplification factor of three, right in the observed range.

</details>

## Connections

- **Backward:** the cloud types and their formation are [atmospheric-science 2.6](../../atmospheric-science/lessons/02-06-cloud-classification.md)'s; the moist-adiabatic amplification underpinning the fixed-anvil argument is [2.2](02-02-planck-water-vapour-lapse-rate.md)'s; the aerosol–cloud forcing of [1.5](01-05-forcing-agents.md) is the *forcing* counterpart of this lesson's *feedback*, and the two are frequently confused.
- **Forward:** [2.5](02-05-diagnosing-feedbacks.md) shows how the cloud feedback is actually extracted from model output, including the masking correction glossed over here; the cloud spread is the dominant term in the model-based sensitivity estimate that [3.3](03-03-constraining-sensitivity-observations.md) has to reconcile with observations.
- **Sideways (numerical methods):** the parameterization problem is subgrid closure — representing the aggregate effect of unresolved scales on resolved ones. It is the same structural problem as turbulence closure in [`fluid-dynamics` 4.5](../../fluid-dynamics/lessons/04-05-turbulence-kolmogorov.md), and it has the same character: no closure is derivable from first principles, so all of them are calibrated, and the calibration is where the uncertainty hides.
