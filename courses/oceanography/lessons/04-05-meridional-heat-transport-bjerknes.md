# Physical Oceanography · Lesson 4.5: Meridional heat transport and Bjerknes compensation

> ⏱ ~15 min · Module 4: The deep ocean and the overturning · Builds on: [4.4](04-04-what-drives-the-overturning.md), [3.3](03-03-gulf-stream-kuroshio.md) · Unlocks: [6.2](06-02-ocean-heat-uptake-circulation.md), [6.4](06-04-amoc-stability-stommel-model.md)

## Why this matters

The tropics absorb far more sunlight than they radiate and the poles radiate far more than they absorb. If nothing moved heat between them, the equator would be tens of degrees hotter and the poles tens of degrees colder than they are. The fluid envelope — atmosphere and ocean together — moves about **5.5 petawatts** poleward in each hemisphere, and that transport is the reason the planet is habitable from pole to equator rather than in a band.

This lesson does three things. It computes how much transport the radiation budget *demands*, which turns out to be a two-line calculation that gets both the magnitude and the latitude of the maximum right. It splits the demand between the two fluids, which reveals that the ocean dominates in the tropics and the atmosphere at mid-latitudes — the opposite of the usual assumption. And it introduces **Bjerknes compensation**: because the total is pinned by radiation, a change in one fluid's transport tends to be offset by the other, which is why "the AMOC weakens" does not straightforwardly translate into "the North Atlantic cools by the corresponding amount."

## The idea

**The total transport is not a free parameter.** Take the net top-of-atmosphere radiation as a function of latitude — measured directly by satellite — and integrate it from the pole. Whatever energy has been gained south of a given latitude and not radiated away must have crossed that latitude. **The transport is determined by the radiation budget alone**, with no dynamics in it whatsoever. This is a rare and powerful kind of constraint: it tells you the answer without telling you the mechanism.

**Splitting it is where the physics is.** The ocean and atmosphere divide the total between them, and the division is not what most people expect. The ocean carries the majority within about 20 degrees of the equator and a minority beyond; the crossover is near 25 to 30 degrees. So the Gulf Stream, so often credited with keeping Europe warm, is doing most of its work in the *subtropics*, and by 40°N the atmosphere is carrying four times as much as the ocean.

**The Atlantic is the anomaly.** The Pacific and Indian oceans transport heat poleward in each hemisphere, symmetrically about the equator, as a wind-driven gyre naturally does. The Atlantic transports heat **northward at every latitude, including deep in the southern hemisphere** — carrying heat *away* from the South Atlantic and across the equator. That is not a gyre; it is the overturning ([4.4](04-04-what-drives-the-overturning.md)), and it is why the Atlantic's northern hemisphere is warmer than its southern one.

**Two mechanisms, two basins.** In the Atlantic the transport is dominated by the **overturning**: warm water north at the surface, cold water south at depth, with the heat flux set by the temperature difference between the two limbs. In the Pacific it is dominated by the **gyres**: warm water poleward on the west, cool water equatorward on the east, at the same depth. Different mechanism, different sensitivity to change.

**And the total's stiffness makes them compete.** Since radiation pins the total, if the ocean's transport falls the atmosphere's must rise to fill the gap — or the temperature gradient changes until the radiation budget re-adjusts. **Bjerknes compensation** is the observation that the first happens more than the second, and it is why the climate response to a change in ocean heat transport is much smaller than the change itself.

## The formal version

**The radiation constraint.** Let $R(\phi)$ be the net downward top-of-atmosphere flux (positive = gain). Steady state with no storage requires that the poleward transport across latitude $\phi$ be

$$\boxed{\ H(\phi) = 2\pi R_E^2\int_{-\pi/2}^{\phi} R(\phi')\cos\phi'\,d\phi'\ }$$

*In words: the transport across a latitude circle is everything the cap to the south has gained and not radiated away.*

**An analytic model that works.** Take $R = R_0(1 - 3\sin^2\phi)$, the lowest Legendre form with zero global mean (check: $\int_{-\pi/2}^{\pi/2}(1-3\sin^2\phi)\cos\phi\,d\phi = 2 - 2 = 0$). Then

$$H(\phi) = 2\pi R_E^2 R_0\left[\sin\phi - \sin^3\phi\right] = 2\pi R_E^2 R_0\,\sin\phi\cos^2\phi.$$

Maximizing: $\frac{d}{d\phi}(\sin\phi\cos^2\phi) = \cos\phi(\cos^2\phi - 2\sin^2\phi) = 0$, so $\tan^2\phi = 1/2$ and

$$\phi_{\max} = \arctan\frac{1}{\sqrt2} = 35.3^\circ.$$

With $R_0 = 60\ \mathrm{W\,m^{-2}}$ (the observed tropical excess) and $R_E = 6.371\times10^{6}\ \mathrm{m}$, the value at the maximum ($\sin\phi\cos^2\phi = 0.385$) is

$$H_{\max} = 2\pi(6.371\times10^{6})^2\times60\times0.385 = 5.9\ \mathrm{PW}.$$

**Observed: 5.5 PW at 35°N.** Two parameters, no dynamics, and both the magnitude and the latitude come out right. It is worth registering why: the transport maximum is where the *cumulative* imbalance peaks, and that is a geometric fact about a sphere with a smoothly varying radiation profile, not a fact about winds or currents.

**The partition.**

| Latitude | Total | Atmosphere | Ocean | Ocean share |
|---|---|---|---|---|
| 10°N | 2.0 PW | 0.9 | 1.1 | 55 percent |
| 20°N | 3.8 | 2.1 | 1.7 | 45 percent |
| 30°N | 5.0 | 3.5 | 1.5 | 30 percent |
| 40°N | 5.5 | 4.5 | 1.0 | 18 percent |
| 60°N | 4.6 | 4.3 | 0.3 | 7 percent |

*In words: the ocean is the major carrier only inside about 15 degrees of the equator, and is nearly irrelevant poleward of 50.*

**Ocean heat transport by basin, at 25°N.**

| Basin | OHT | Mechanism |
|---|---|---|
| Atlantic | $+1.2\ \mathrm{PW}$ (northward) | overturning |
| Pacific | $+0.5$ | gyre |
| Indian | (southward at all latitudes) | gyre plus cross-equatorial cell |

And in the **South** Atlantic at 30°S the transport is still about $+0.3\ \mathrm{PW}$ — **northward, toward the equator**, against the local temperature gradient. Only an overturning that exports deep water southward and imports warm water northward can do this.

**Overturning heat transport.** For a two-layer overturning of strength $Q$ with warm upper limb at $\theta_u$ and cold lower limb at $\theta_l$:

$$H_{\text{ov}} = \rho_0 c_p\,Q\left(\theta_u - \theta_l\right).$$

*In words: the transport is the volume flux times the heat capacity times the temperature difference between what goes north and what comes back.* With $Q = 17\ \mathrm{Sv}$, $\Delta\theta = 15\ \mathrm{K}$, $\rho_0c_p = 4.10\times10^{6}\ \mathrm{J\,m^{-3}\,K^{-1}}$:

$$H_{\text{ov}} = 4.10\times10^{6}\times1.7\times10^{7}\times15 = 1.05\times10^{15}\ \mathrm{W} = 1.05\ \mathrm{PW},$$

close to the observed Atlantic 1.2 PW. **The AMOC accounts for nearly all of the Atlantic's heat transport**, which is why the two are so often discussed as one thing.

**Bjerknes compensation.** Differentiate the radiation constraint. If the ocean's transport changes by $\delta H_O$ and the total is pinned,

$$\delta H_A \approx -\delta H_O.$$

*In words: what the ocean stops carrying, the atmosphere picks up.* The compensation is not exact — the total can change if the top-of-atmosphere radiation changes, which it does if temperatures change — but it is substantial. In coupled models, compensation is 60 to 90 percent complete at mid-latitudes on decadal and longer timescales, and weaker in the tropics and at short timescales. The physical mechanism: reduced ocean heat transport cools the high latitudes and warms the tropics, which steepens the meridional temperature gradient, which strengthens the baroclinic eddies that carry atmospheric heat ([3.4](03-04-mesoscale-eddies-baroclinic-instability.md)'s instability, in its atmospheric form).

## Picture

![Northward heat transport in petawatts plotted against latitude from 80 south to 80 north. The grey total curve is antisymmetric, peaking at plus 5.5 PW near 40 north and minus 5.5 near 40 south. The blue atmospheric curve tracks it closely at mid and high latitudes, peaking at 4.5 PW. The coral ocean curve peaks at 1.7 PW near 20 north, well equatorward of the total maximum, and falls to near zero by 60 north. Annotations record that at 20 north the ocean carries 1.7 PW against the atmosphere's 2.1, while at 40 north the ocean carries 1.0 against 4.5](assets/04-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — the heat the Gulf Stream carries, and where it goes).** The Atlantic overturning carries 17 Sv northward in an upper limb at $\theta_u = 18\,^\circ\mathrm{C}$ and returns it at $\theta_l = 3\,^\circ\mathrm{C}$. Take $\rho_0c_p = 4.10\times10^{6}\ \mathrm{J\,m^{-3}\,K^{-1}}$.

(a) *Heat transport.*
$$H = 4.10\times10^{6}\times1.7\times10^{7}\times15 = 1.05\times10^{15}\ \mathrm{W} = 1.05\ \mathrm{PW}.$$

(b) *Where does it go?* It is released to the atmosphere north of the section, over the area of the North Atlantic poleward of 26°N, roughly $2.0\times10^{13}\ \mathrm{m^2}$:

$$\frac{1.05\times10^{15}}{2.0\times10^{13}} = 53\ \mathrm{W\,m^{-2}}.$$

Fifty-three watts per square metre, delivered continuously to the atmosphere over the whole northern North Atlantic. For comparison, the anthropogenic forcing is under 3 W m⁻² and the net surface heat loss over the Gulf Stream in winter exceeds 300 W m⁻². **This is a large regional term**, and it is why the North Atlantic's winter air–sea heat flux is the largest anywhere on the planet.

(c) *A sanity check on the "Europe would freeze" claim.* Fifty-three W m⁻² spread over that area is genuinely substantial, but the same calculation over the whole Northern Hemisphere north of 26° ($1.1\times10^{14}\ \mathrm{m^2}$) gives only $9.5\ \mathrm{W\,m^{-2}}$, and the atmosphere redistributes zonally within days. The often-quoted claim that the Gulf Stream alone accounts for Europe being 10 to 15 K warmer than Labrador at the same latitude does not survive: most of that contrast comes from the atmosphere's stationary wave pattern, which advects maritime air over Europe and continental air over eastern Canada, and which would persist without any ocean heat transport at all. **The ocean's contribution is real and is a few kelvin, not fifteen.**

**Example 2 (why you'd care — Bjerknes compensation and what an AMOC slowdown actually does).** Suppose the AMOC weakens from 17 Sv to 12 Sv, with the limb temperatures unchanged. (a) Compute the change in Atlantic heat transport. (b) Estimate the North Atlantic cooling if the atmosphere did not compensate. (c) Estimate it with 80 percent compensation. (d) Comment on what this means for interpreting model projections.

(a) $$\Delta H = 4.10\times10^{6}\times(1.2\times10^{7} - 1.7\times10^{7})\times15 = 4.10\times10^{6}\times(-5\times10^{6})\times15 = -3.08\times10^{14}\ \mathrm{W} = -0.31\ \mathrm{PW}.$$

(b) *No compensation.* The region north of 26°N loses $0.31\ \mathrm{PW}$ over $2.0\times10^{13}\ \mathrm{m^2}$, a deficit of $15.4\ \mathrm{W\,m^{-2}}$. The region must cool until it radiates that much less to space. Using a climate feedback parameter $\lambda \approx 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$ ([climate-science 2.1](../../climate-science/lessons/02-01-feedbacks-gain-factor.md)):

$$\Delta T = -\frac{15.4}{1.3} = -11.8\ \mathrm{K}.$$

A catastrophic regional cooling.

(c) *With 80 percent compensation*, the atmosphere makes up $0.8\times0.31 = 0.25\ \mathrm{PW}$ and the net deficit is $0.06\ \mathrm{PW}$, or $3.1\ \mathrm{W\,m^{-2}}$:

$$\Delta T = -\frac{3.1}{1.3} = -2.4\ \mathrm{K}.$$

Serious but not catastrophic — and closer to what coupled models actually produce for a 30 percent AMOC weakening (typically 1 to 3 K of North Atlantic cooling, with a distinctive "warming hole" south of Greenland).

(d) *The point.* **The uncompensated estimate is wrong by a factor of five, and the entire difference is a feedback the naive calculation omits.** Anyone computing a regional temperature change from a transport change without asking what the atmosphere does in response will overestimate it badly.

Two further cautions, both worth carrying:

- **Compensation is not a law.** It is an empirical property of the coupled system, it is stronger at mid-latitudes than in the tropics, and it is stronger on long timescales than short ones. Assuming 100 percent compensation is as wrong as assuming zero.
- **Compensation applies to the total, not to the pattern.** Even a perfectly compensated change moves heat by a different route, with different regional consequences — different storm tracks, different precipitation, a different sea-level pattern. "Compensated" does not mean "no effect"; it means the zonal-mean energy budget closes without a large temperature change.

## Watch out

- **You might think** the ocean carries most of the poleward heat transport because it has so much more heat capacity. **Actually** heat capacity is irrelevant to a *steady* transport — what matters is the volume flux times the temperature difference. The atmosphere moves far more mass per second and dominates poleward of about 30 degrees, latent heat included.
- **You might think** the Atlantic's heat transport is the Gulf Stream. **Actually** the Gulf Stream's *gyre* component contributes little to the net, because the warm poleward flow is largely balanced by an equally warm equatorward return in the interior at the same depth. It is the *overturning* component — warm north at the surface, cold south at 3000 m — that produces the net, and its magnitude depends on the vertical temperature difference, not the horizontal one.
- **You might think** Bjerknes compensation means ocean heat transport does not matter for climate. **Actually** it means the *zonal-mean temperature* response is muted. The regional response, the hydrological cycle, the position of the ITCZ, and the sea-ice edge all respond strongly, and none of them is protected by the energy-budget constraint.

## One-liner

> The radiation budget alone fixes the poleward heat transport at 5.5 petawatts peaking near 35 degrees — the ocean carries the majority only in the tropics, the Atlantic carries heat northward even in the southern hemisphere because its overturning does, and because the total is pinned, whatever the ocean stops carrying the atmosphere largely picks up.

## Problems

**P1 (🟢)** An overturning cell carries $Q = 20\ \mathrm{Sv}$ northward at $\theta_u = 16\,^\circ\mathrm{C}$ and returns it at $\theta_l = 2\,^\circ\mathrm{C}$. Take $\rho_0 c_p = 4.10\times10^{6}\ \mathrm{J\,m^{-3}\,K^{-1}}$. (a) Compute the heat transport in PW. (b) Compute the mean surface heat loss if it is released over $2.5\times10^{13}\ \mathrm{m^2}$. (c) Compare with a typical global-mean net surface flux of a few W m⁻² and comment.

**P2 (🟡)** Use $R(\phi) = R_0(1-3\sin^2\phi)$ with $R_0 = 55\ \mathrm{W\,m^{-2}}$ and $R_E = 6.371\times10^{6}\ \mathrm{m}$. (a) Verify that the global mean of $R$ is zero. (b) Derive $H(\phi)$ and find the latitude of maximum transport. (c) Compute $H_{\max}$ in PW. (d) Compute $H$ at 20°N and at 60°N, and compare with the observed 3.8 and 4.6 PW; comment on where the model fails and why.

**P3 (🔴, optional)** Bjerknes compensation, tested. In a coupled model, the AMOC weakens by 40 percent from 18 Sv, with $\Delta\theta = 15\ \mathrm{K}$ and $\rho_0c_p = 4.10\times10^{6}$. The region north of 30°N has area $1.8\times10^{13}\ \mathrm{m^2}$ and $\lambda = 1.2\ \mathrm{W\,m^{-2}\,K^{-1}}$. (a) Compute $\Delta H_O$. (b) Compute the uncompensated cooling. (c) The model produces $-1.8\ \mathrm{K}$. Infer the compensation fraction. (d) The same model shows the mid-latitude atmospheric eddy heat flux increasing by 12 percent. Explain the causal chain that links the AMOC weakening to that increase, and identify which lesson in this course supplies each link. (e) State one observable, other than temperature, that would distinguish a compensated AMOC slowdown from a uniform hemispheric cooling.

<details>
<summary>Solutions</summary>

**P1** (a) $$H = 4.10\times10^{6}\times2.0\times10^{7}\times14 = 1.148\times10^{15}\ \mathrm{W} = 1.15\ \mathrm{PW}.$$

(b) $$\frac{1.148\times10^{15}}{2.5\times10^{13}} = 45.9\ \mathrm{W\,m^{-2}}.$$

(c) The global-mean net surface flux is under $1\ \mathrm{W\,m^{-2}}$ in a steady climate (it equals the ocean heat uptake), and the current anthropogenic imbalance is about $0.8\ \mathrm{W\,m^{-2}}$. So this regional flux is **fifty times larger than the global imbalance**.

The comparison is worth pausing on. A local surface flux of 46 W m⁻² is not a violation of anything — it is exactly balanced by the ocean bringing heat in laterally. But it means the northern North Atlantic is not a closed column: its energy budget is dominated by a horizontal term that the global-mean budget does not contain. Any zero-dimensional reasoning about that region will be wrong by a factor of fifty, which is a good general warning about applying global-mean arguments regionally.

**P2** (a) $$\frac{1}{2}\int_{-\pi/2}^{\pi/2}R_0(1-3\sin^2\phi)\cos\phi\,d\phi = \frac{R_0}{2}\left[\sin\phi - \sin^3\phi\right]_{-\pi/2}^{\pi/2} = \frac{R_0}{2}\left[(1-1)-(-1+1)\right] = 0. \quad\checkmark$$

(b) $$H(\phi) = 2\pi R_E^2R_0\int_{-\pi/2}^{\phi}(1-3\sin^2\phi')\cos\phi'\,d\phi' = 2\pi R_E^2R_0\left[\sin\phi'-\sin^3\phi'\right]_{-\pi/2}^{\phi} = 2\pi R_E^2R_0\sin\phi\cos^2\phi.$$

Maximum where $\cos^3\phi - 2\sin^2\phi\cos\phi = 0$, i.e. $\tan^2\phi = 1/2$:
$$\phi_{\max} = \arctan(0.7071) = 35.26^\circ.$$

(c) $\sin(35.26^\circ) = 0.5774$, $\cos^2 = 0.6667$, product $= 0.3849$.

$$2\pi R_E^2 = 2\pi(6.371\times10^{6})^2 = 2.550\times10^{14}\ \mathrm{m^2},$$
$$H_{\max} = 2.550\times10^{14}\times55\times0.3849 = 5.40\times10^{15}\ \mathrm{W} = 5.40\ \mathrm{PW}.$$

(d) At 20°N: $\sin = 0.342$, $\cos^2 = 0.883$, product $= 0.302$:
$$H = 2.550\times10^{14}\times55\times0.302 = 4.24\ \mathrm{PW}.$$

At 60°N: $\sin = 0.866$, $\cos^2 = 0.25$, product $= 0.2165$:
$$H = 2.550\times10^{14}\times55\times0.2165 = 3.04\ \mathrm{PW}.$$

Against observed 3.8 and 4.6 PW: the model is **12 percent too high at 20°N and 34 percent too low at 60°N**.

The failure is systematic and diagnosable. The single-Legendre form $1-3\sin^2\phi$ makes the radiation deficit grow smoothly all the way to the pole, whereas the real deficit is concentrated at mid-latitudes and *flattens* poleward of about 60° — partly because the polar regions are dark for half the year and cannot lose much more than they already do, and partly because the ice-covered regions have a high albedo that reduces the summer gain too. Concentrating the deficit equatorward of where the Legendre form puts it moves cumulative transport poleward, raising $H$ at 60°N and lowering the peak's latitude slightly.

**The lesson is not that the model is bad** — two parameters reproducing 5.4 PW at 35° is remarkable — but that its errors are in the shape, not the magnitude, and shape errors in a *cumulative* quantity show up furthest from where the integration started.

**P3** (a) $$\Delta Q = -0.4\times1.8\times10^{7} = -7.2\times10^{6}\ \mathrm{m^3\,s^{-1}},$$
$$\Delta H_O = 4.10\times10^{6}\times(-7.2\times10^{6})\times15 = -4.43\times10^{14}\ \mathrm{W} = -0.44\ \mathrm{PW}.$$

(b) $$\frac{4.43\times10^{14}}{1.8\times10^{13}} = 24.6\ \mathrm{W\,m^{-2}}, \qquad \Delta T = -\frac{24.6}{1.2} = -20.5\ \mathrm{K}.$$

(c) The model gives $-1.8$ K, so the realized flux deficit is $1.8\times1.2 = 2.16\ \mathrm{W\,m^{-2}}$, i.e. $2.16\times1.8\times10^{13} = 3.89\times10^{13}\ \mathrm{W} = 0.039\ \mathrm{PW}$.

$$\text{compensation fraction} = 1 - \frac{0.039}{0.44} = 1 - 0.088 = 0.91,$$

**91 percent compensated.** (High, but within the range coupled models produce at these latitudes; note the calculation lumps atmospheric transport changes together with any change in local ocean heat storage and in cloud feedbacks, all of which act to reduce the realized cooling.)

(d) The chain, with the lesson supplying each link:

1. **AMOC weakens, so ocean heat transport into the high latitudes falls** — this lesson, $H_{\text{ov}} = \rho_0c_pQ\Delta\theta$.
2. **The high latitudes cool relative to the tropics, so the meridional temperature gradient steepens** — the direct consequence of removing a poleward heat flux.
3. **A steeper temperature gradient means steeper isentropic slopes, hence more available potential energy in the atmosphere** — [2.2](02-02-thermal-wind-acc.md)'s thermal wind, in its atmospheric form ([atmospheric-science 4.4](../../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md)).
4. **More available potential energy means stronger baroclinic instability, hence more vigorous and more numerous mid-latitude storms** — [3.4](03-04-mesoscale-eddies-baroclinic-instability.md)'s instability mechanism, in its atmospheric version ([atmospheric-science 4.5](../../atmospheric-science/lessons/04-05-air-masses-fronts-cyclones.md)).
5. **Stronger eddies carry more heat poleward, partly refilling the gap** — Bjerknes compensation, and the 12 percent increase in eddy heat flux is step 4's output.

Note that the chain is a **negative feedback with a clear physical mechanism**, not a coincidence. That is what makes compensation a robust expectation rather than a model artefact: the atmosphere's transport is generated by the very gradient that reducing ocean transport steepens.

(e) Several observables distinguish the two, and any one is a complete answer:

- **The spatial pattern.** A compensated AMOC slowdown produces a localized "warming hole" — a region of relative cooling in the subpolar North Atlantic south of Greenland, surrounded by a warming hemisphere. A uniform cooling has no such structure. This dipole is the standard AMOC fingerprint, and it is arguably present in the observed 20th-century record.
- **The subsurface temperature.** An AMOC slowdown cools the surface while *warming* the subtropical thermocline, because heat that was being exported north accumulates. Uniform cooling cools throughout. A single Argo section resolves this.
- **Storminess.** Step 4 above predicts *more* mid-latitude storms under an AMOC slowdown and fewer under uniform cooling — opposite signs, from the same temperature change.
- **The ITCZ.** Reduced cross-equatorial heat transport shifts the Intertropical Convergence Zone southward, since the ITCZ sits where the atmospheric energy transport crosses zero. A uniform cooling does not move it. This is the most sensitive of the four and leaves a strong signal in tropical precipitation.

</details>

## Flashback

**From Lesson 4.2 (Deep-water formation and convection):** An Antarctic shelf 350 m deep with $S_w = 34.55$ grows sea ice of salinity $S_i = 5$ to a thickness of $1.8\ \mathrm{m}$ over a winter. Take $\rho_i/\rho_w = 0.92$, $\beta = 7.9\times10^{-4}$, $\rho_0 = 1028$. (a) Compute $\Delta S$ and $\Delta\rho$. (b) A polynya keeps the shelf open so that the effective ice production is four times greater. Recompute. (c) State in one sentence why polynyas are essential to bottom-water formation.

<details>
<summary>Solution</summary>

(a) $$\Delta S = \frac{1.8}{350}\times0.92\times(34.55-5) = 5.143\times10^{-3}\times0.92\times29.55 = 0.1398,$$
$$\Delta\rho = 1028\times7.9\times10^{-4}\times0.1398 = 0.1135\ \mathrm{kg\,m^{-3}}.$$

(b) Four times the ice production:
$$\Delta S = 0.559, \qquad \Delta\rho = 1028\times7.9\times10^{-4}\times0.559 = 0.454\ \mathrm{kg\,m^{-3}}.$$

(c) Polynyas are essential because ice that stays in place insulates the ocean from the atmosphere and stops growing, so a fixed patch of sea produces only a metre or two of ice per winter and a density increment too small to make bottom water — whereas katabatic winds that blow the ice away expose open water to a −30 °C atmosphere again and again, letting the same square metre of sea freeze many times over and delivering several times the brine.

*Check.* Note the scaling is exactly linear in ice thickness, so the polynya's contribution is straightforwardly proportional to how many times it clears. This is why the largest coastal polynyas — the Ross Sea, Cape Darnley, the Mertz Glacier — are individually identifiable as bottom-water sources despite covering only a few thousand square kilometres each, and why the calving of the Mertz Glacier tongue in 2010, which destroyed a polynya, produced a measurable reduction in bottom-water formation downstream.

</details>

## Connections

- **Backward:** the overturning whose heat transport is computed here is [4.4](04-04-what-drives-the-overturning.md)'s upper cell; the gyre contribution is [3.1](03-01-sverdrup-balance-interior-gyre.md)'s and [3.3](03-03-gulf-stream-kuroshio.md)'s; the compensating atmospheric eddies are [3.4](03-04-mesoscale-eddies-baroclinic-instability.md)'s instability in its atmospheric form.
- **Forward:** the same overturning circulation carries anthropogenic heat downward in [6.2](06-02-ocean-heat-uptake-circulation.md), and a slowdown of it is [6.4](06-04-amoc-stability-stommel-model.md)'s subject — where the salt-advection feedback can turn the weakening computed here into a collapse.
- **Sideways (climate physics):** the radiation-budget constraint is the same energy-balance reasoning as [`climate-science` 1.1](../../climate-science/lessons/01-01-climate-system-timescales.md), applied latitude by latitude instead of globally, and Bjerknes compensation is why regional climate responses cannot be inferred from a global-mean energy argument.
