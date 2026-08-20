# Reactor Thermal-Hydraulics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Neutronics says where the watts are made; this course says whether you can carry
them away. Everything below tracks one heat packet from a fissioning pellet
through gap, clad, and film into the coolant, up the channel as it boils, and
back to the reactor as reactivity feedback. Use it mid-problem for the resistance
chain, the two-phase bookkeeping (quality, void, slip, multipliers), the
correlations, the property numbers the lessons quote without deriving, and the
three margins the whole subject is written against.

**Units are load-bearing here.** Every symbol below carries them; carry them in
your working too, and most errors announce themselves before you finish.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $q'''$ | volumetric heat rate, $\mathrm{W/m^3}$ — how furiously each bit of fuel makes heat | [1.1](lessons/01-01-power-distribution-volumetric-source.md) |
| $q'$ | **linear** heat rate, $\mathrm{W/m}$ — watts out of each metre of pin; the design number | [1.1](lessons/01-01-power-distribution-volumetric-source.md) |
| $q''$ | surface heat flux, $\mathrm{W/m^2}$ — what the coolant must sweep off the wall | [1.1](lessons/01-01-power-distribution-volumetric-source.md) |
| $\Sigma_f,\ \phi,\ E_f$ | macroscopic fission cross-section ($\mathrm{m^{-1}}$), neutron flux ($\mathrm{m^{-2}s^{-1}}$), recoverable energy per fission (J) | [1.1](lessons/01-01-power-distribution-volumetric-source.md) |
| $L,\ L_e,\ H$ | active fuel length, **extrapolated** length ($L_e > L$), and loop thermal height, all m | [1.1](lessons/01-01-power-distribution-volumetric-source.md), [4.1](lessons/04-01-natural-circulation-driving-head.md) |
| $F_q,\ F_R,\ F_z,\ F_{local}$ | heat-flux hot-channel factor and its radial / axial / local pieces (dimensionless, $\ge 1$) | [1.1](lessons/01-01-power-distribution-volumetric-source.md), [1.5](lessons/01-05-hot-channel-hot-spot-factors.md) |
| $F_{\Delta H}$ | enthalpy-rise hot-channel factor — multiplies the **coolant** rise, carries no axial peaking | [1.5](lessons/01-05-hot-channel-hot-spot-factors.md) |
| $T_0,\ T_s$ | fuel **centerline** and fuel **surface** temperature (°C) | [1.2](lessons/01-02-conduction-heat-source-fuel-pin.md) |
| $T_{ci},\ T_{co}$ | clad inner / **outer** surface temperature (°C); $T_{co}$ is what boiling limits are read against | [1.3](lessons/01-03-gap-cladding-resistances.md) |
| $T_b$ | coolant **bulk** (mixed-mean, "cup") temperature (°C) — the only one that belongs in an energy balance | [1.4](lessons/01-04-axial-temperature-profile-channel.md) |
| $k_f,\ k_c,\ k_l$ | thermal conductivity of fuel, clad, and liquid coolant, $\mathrm{W/(m\cdot K)}$ | [1.2](lessons/01-02-conduction-heat-source-fuel-pin.md), [1.3](lessons/01-03-gap-cladding-resistances.md) |
| $h_g$ | **gap conductance**, $\mathrm{W/(m^2\cdot K)}$ — the whole gas gap bundled into one number | [1.3](lessons/01-03-gap-cladding-resistances.md) |
| $r_g,\ r_{ci},\ r_{co}$ | gap (≈ pellet) radius, clad inner radius, clad outer radius, m | [1.3](lessons/01-03-gap-cladding-resistances.md) |
| $R'$ | thermal resistance **per unit pin length**, $\mathrm{K\cdot m/W}$; $\Delta T = q'R'$ | [1.3](lessons/01-03-gap-cladding-resistances.md) |
| $\dot m,\ G$ | channel mass flow rate ($\mathrm{kg/s}$) and **mass flux** $G=\dot m/A_{flow}$ ($\mathrm{kg\,m^{-2}s^{-1}}$) | [2.1](lessons/02-01-coolant-energy-balance-bulk-temperature.md) |
| $A_{flow},\ P_{wetted},\ D_h$ | open flow area ($\mathrm{m^2}$), wetted perimeter (m), **hydraulic diameter** $4A/P$ (m) | [2.2](lessons/02-02-convective-heat-transfer-film-drop.md) |
| $h$ | convective heat-transfer coefficient, $\mathrm{W/(m^2\cdot K)}$ — a conductance, not a rate | [2.2](lessons/02-02-convective-heat-transfer-film-drop.md) |
| $Nu,\ Re,\ Pr,\ Pe$ | Nusselt $hD_h/k$, Reynolds $GD_h/\mu$, Prandtl $\mu c_p/k$, Péclet $Re\,Pr$ | [2.2](lessons/02-02-convective-heat-transfer-film-drop.md), [2.3](lessons/02-03-correlations-across-coolants.md) |
| $f,\ K$ | **Darcy** friction factor and form-loss coefficient, both dimensionless | [2.5](lessons/02-05-pressure-drop-core.md) |
| $G^2/2\rho$ | **dynamic head** (Pa) — the group every pressure-drop term rides on | [2.5](lessons/02-05-pressure-drop-core.md) |
| $\Delta T_e,\ \Delta T_{sat}$ | wall **superheat** $T_{wall}-T_{sat}$ (K) — boiling's driving difference, measured from saturation not from bulk | [3.1](lessons/03-01-boiling-curve-pool-boiling-regimes.md), [3.2](lessons/03-02-onset-nucleate-boiling-subcooled.md) |
| $\sigma$ | surface tension, $\mathrm{N/m}$ (bubble nucleation) | [3.2](lessons/03-02-onset-nucleate-boiling-subcooled.md) |
| $h_f,\ h_g^{sat},\ h_{fg}$ | saturated-liquid enthalpy, saturated-vapor enthalpy, latent heat $h_g^{sat}-h_f$, all $\mathrm{J/kg}$ | [3.2](lessons/03-02-onset-nucleate-boiling-subcooled.md), [3.3](lessons/03-03-quality-void-fraction-slip.md) |
| $x,\ x_e$ | **quality** — vapor's share of the *mass*; $x_e$ is the equilibrium value and may be negative | [3.3](lessons/03-03-quality-void-fraction-slip.md) |
| $\alpha$ | **void fraction** — vapor's share of the *area/volume*. (Clash warning: $\alpha_x$ with a subscript is a reactivity coefficient in 4.3.) | [3.3](lessons/03-03-quality-void-fraction-slip.md) |
| $\rho_f,\ \rho_g$ | saturated liquid and vapor density, $\mathrm{kg/m^3}$ | [3.3](lessons/03-03-quality-void-fraction-slip.md) |
| $S$ | slip ratio $u_g/u_f$ — how much faster the vapor moves than the liquid | [3.3](lessons/03-03-quality-void-fraction-slip.md) |
| $j_g,\ j_f$ | **superficial** velocities (m/s): each phase's volumetric flow per unit *total* area | [3.4](lessons/03-04-two-phase-flow-regimes.md) |
| $\phi_{lo}^2$ | two-phase friction **multiplier**, referenced to the total flow as *liquid only* | [3.5](lessons/03-05-two-phase-pressure-drop.md) |
| $\bar\rho$ | two-phase mixture density $\alpha\rho_g+(1-\alpha)\rho_f$, $\mathrm{kg/m^3}$ | [3.5](lessons/03-05-two-phase-pressure-drop.md) |
| $DNBR$, $CPR$/$MCPR$ | critical-heat-flux margin ratio (PWR) and its bundle-power analogue (BWR) | [3.6](lessons/03-06-critical-heat-flux-dnb.md) |
| $\beta$ | **volumetric thermal expansion coefficient**, $\mathrm{K^{-1}}$. (Clash warning: $\beta$ is also the delayed-neutron fraction in 4.4.) | [4.1](lessons/04-01-natural-circulation-driving-head.md), [4.4](lessons/04-04-coupled-th-neutronic-feedback.md) |
| $R_{loop}$ | loop resistance coefficient $\sum\!\big(f\tfrac{L}{D_h}+K\big)$, dimensionless | [4.1](lessons/04-01-natural-circulation-driving-head.md) |
| $\Delta p_{ch},\ \Delta p_{sup}$ | pressure drop a channel **demands** vs. what the driver **supplies**, both Pa | [4.2](lessons/04-02-flow-stability.md) |
| $\rho$ (no subscript, neutronic context) | **reactivity** $(k-1)/k$, dimensionless, quoted in pcm. Everywhere else in this course $\rho$ is a density. | [4.3](lessons/04-03-reactivity-feedback-coefficients.md) |
| pcm | "per cent mille": $1\ \mathrm{pcm}=10^{-5}$ in $\Delta k/k$ | [4.3](lessons/04-03-reactivity-feedback-coefficients.md) |
| $\alpha_D,\ \alpha_M,\ \alpha_v,\ \alpha_{tot}$ | Doppler, moderator, void, and total reactivity coefficients ($\mathrm{pcm/K}$ or $\mathrm{pcm/\%void}$) | [4.3](lessons/04-03-reactivity-feedback-coefficients.md), [4.4](lessons/04-04-coupled-th-neutronic-feedback.md) |
| $P_0,\ P_d,\ t_0$ | pre-shutdown thermal power (W), decay power (W), irradiation time before shutdown (s) | [4.5](lessons/04-05-decay-heat-after-shutdown.md) |
| PCT, ECR | peak cladding temperature (°C) and equivalent cladding reacted (percent of wall) | [4.6](lessons/04-06-loca-thermal-margins.md) |

## Definitions

### Volumetric heat generation rate

How many watts each cubic metre of fuel produces. Because it is proportional to
the neutron flux, its *shape* is the flux shape — cosine axially, Bessel radially.

$$q''' = \Sigma_f\,\phi\,E_f \qquad [\mathrm{W/m^3}]$$

*Introduced:* [1.1](lessons/01-01-power-distribution-volumetric-source.md)

### Linear heat rate

The same heat, divided by pin *length* instead of volume — the one number fuel
designers live by, because it (not $q'''$) fixes the centerline temperature.
Kept below roughly 40–50 kW/m at the peak.

$$q' = q'''\,\pi r_o^2 \qquad [\mathrm{W/m}]$$

*Introduced:* [1.1](lessons/01-01-power-distribution-volumetric-source.md)

### Surface heat flux

The same heat again, now per square metre of the pin's outer skin — what the
coolant actually sees, and what every boiling limit is written against.

$$q'' = \frac{q'}{2\pi r_o} = \frac{q'''\,r_o}{2} \qquad [\mathrm{W/m^2}]$$

*Introduced:* [1.1](lessons/01-01-power-distribution-volumetric-source.md)

### Peaking factor

How much hotter the worst spot runs than the core average. The average is a
comforting lie; the peak pin is the one that melts.

$$q'_{max} = F_q\,\bar q', \qquad \bar q' = \frac{P}{N_{pins}\,L}, \qquad F_q = F_R\,F_z\,F_{local}$$

*Introduced:* [1.1](lessons/01-01-power-distribution-volumetric-source.md)

### Integral conductivity

The honest form of the fuel's centerline-to-surface drop when $k$ falls with
temperature: the linear power equals the area under the $k$-vs-$T$ curve between
surface and centerline.

$$\frac{q'}{4\pi} = \int_{T_s}^{T_0} k(T)\,dT$$

*Introduced:* [1.2](lessons/01-02-conduction-heat-source-fuel-pin.md)

### Gap conductance

One number standing in for everything about the pellet–clad gas gap: its width,
its gas mixture, surface roughness, contact points. Treated as a heat-transfer
coefficient sitting on the pellet surface, so the gap behaves like a "film" of
gas rather than a slab of known thickness. It **drifts with burnup** as fission
gas dilutes the helium fill.

$$q'' = h_g\,\Delta T_g, \qquad h_g \approx 5\times10^3\text{–}10^4\ \mathrm{W/(m^2\cdot K)}$$

*Introduced:* [1.3](lessons/01-03-gap-cladding-resistances.md)

### Per-length thermal resistance

Ohm's law for heat, written per metre of pin: the same "current" $q'$ threads
every layer, the drops add, and the total drop is $q'$ times the total
resistance. Units $\mathrm{K\cdot m/W}$.

$$q' = \frac{\Delta T_{total}}{\sum R'}, \qquad \Delta T_i = q'\,R'_i$$

*Introduced:* [1.3](lessons/01-03-gap-cladding-resistances.md)

### Enthalpy-rise hot-channel factor

How much more enthalpy the hottest *channel* picks up over its whole length than
an average channel. Because it integrates power over the channel, the axial shape
averages out — so it carries radial and local peaking only, never $F_z$. This is
why $F_{\Delta H} < F_q$.

$$F_{\Delta H} = \frac{\int_0^L q'_{\text{hot}}\,dz}{\int_0^L q'_{\text{avg}}\,dz} = \frac{(\Delta h)_{\text{hot}}}{(\Delta h)_{\text{avg}}}, \qquad (\Delta T)_{\text{hot}} = F_{\Delta H}\,(\Delta T)_{\text{avg}}$$

*Introduced:* [1.5](lessons/01-05-hot-channel-hot-spot-factors.md)

### Engineering subfactors

Manufacturing tolerances — pellet density, enrichment, dimensions, channel flow
area — each nudging the local condition a little worse. Combine them
deterministically (assume they all hit worst-case at the same spot) or
statistically (assume they're independent).

$$F^E = \prod_i F_i \quad\text{(conservative)} \qquad\text{or}\qquad F^E = 1 + \sqrt{\textstyle\sum_i (F_i-1)^2} \quad\text{(RSS)}$$

*Introduced:* [1.5](lessons/01-05-hot-channel-hot-spot-factors.md)

### Bulk temperature

The temperature you'd read if you scooped up the whole cross-section, stirred it
adiabatically into one cup, and put a thermometer in it — the flow-weighted mean,
defined so that $\dot m c_p T_b$ is the true enthalpy flow rate.

$$T_b \equiv \frac{\int_A \rho\,u\,c_p\,T\,dA}{\int_A \rho\,u\,c_p\,dA}$$

*Introduced:* [2.1](lessons/02-01-coolant-energy-balance-bulk-temperature.md)

### Mass flux

Mass streaming through each square metre of channel per second. Preferred over
velocity because it stays constant up a channel of fixed area even as the coolant
heats, thins, and boils.

$$G \equiv \frac{\dot m}{A_{flow}} = \rho\,u_m \qquad [\mathrm{kg\,m^{-2}s^{-1}}]$$

*Introduced:* [2.1](lessons/02-01-coolant-energy-balance-bulk-temperature.md)

### Hydraulic diameter

The equivalent diameter that lets you reuse round-pipe correlations on the gap
*between* fuel rods. It is an area-to-perimeter measure, **not** a literal
spacing — for a tight lattice it comes out near the rod diameter, well above the
rod-to-rod gap.

$$D_h = \frac{4\,A_{flow}}{P_{wetted}} \qquad (\text{a round pipe correctly returns } D)$$

*Introduced:* [2.2](lessons/02-02-convective-heat-transfer-film-drop.md)

### Film drop

The temperature penalty for shoving heat across the thin, sluggish layer of
coolant clinging to the wall. All the messy fluid physics hides inside $h$; the
drop is just flux over conductance.

$$q'' = h\,(T_{co}-T_b) \qquad\Longrightarrow\qquad \Delta T_{film} = \frac{q''}{h} = q'\,R'_{conv}, \quad R'_{conv} = \frac{1}{2\pi r_{co}h}$$

*Introduced:* [2.2](lessons/02-02-convective-heat-transfer-film-drop.md)

### Péclet number

Advected heat over conducted heat — the right flow variable when conduction, not
turbulence, does the delivering. It is what liquid-metal correlations are keyed
to, because at $Pr \ll 1$ the thermal boundary layer balloons far past the
velocity layer.

$$Pe = Re\,Pr = \frac{G\,D_h\,c_p}{k}$$

*Introduced:* [2.3](lessons/02-03-correlations-across-coolants.md)

### Dynamic head

The stream's kinetic energy per unit volume, expressed as a pressure. Every
pressure-drop term in the course is some dimensionless number times this one
group.

$$\frac{G^2}{2\rho} = \frac{\rho u^2}{2} \qquad [\mathrm{Pa}]$$

*Introduced:* [2.5](lessons/02-05-pressure-drop-core.md)

### Wall superheat

How far the heated surface sits above the *saturation* temperature — not above
the bulk. This, not the film drop, is what drives boiling.

$$\Delta T_e \equiv T_{wall} - T_{sat}$$

*Introduced:* [3.1](lessons/03-01-boiling-curve-pool-boiling-regimes.md)

### Boiling curve

Heat flux plotted against wall superheat for a heater in a saturated pool. It is
**not one-to-one**: flux rises steeply through nucleate boiling to a peak (CHF),
*falls* through unstable transition boiling to the Leidenfrost minimum, then
creeps back up in film boiling with an enormous wall temperature.

*Introduced:* [3.1](lessons/03-01-boiling-curve-pool-boiling-regimes.md)

### Flux-controlled surface

A surface where you impose the heat flux and the temperature must follow —
an electric heater, or a fuel rod whose power neutronics sets. This boundary
condition, not boiling itself, is what makes CHF a cliff: past the peak the
nucleate branch simply has no state carrying that flux, so the wall jumps
*horizontally* across to film boiling, hundreds of kelvin hotter, instantly.
A temperature-controlled surface can traverse the peak smoothly.

*Introduced:* [3.1](lessons/03-01-boiling-curve-pool-boiling-regimes.md)

### Onset of nucleate boiling (ONB)

The lowest elevation where the wall beats saturation by enough for a bubble in a
cavity to survive instead of collapsing back. At reactor pressure the required
superheat is about 1 K, so in practice ONB is "where the wall first reaches
$T_{sat}$."

$$T_b(z) + \frac{q''(z)}{h} \;\ge\; T_{sat} + \Delta T_{sat,ONB}$$

*Introduced:* [3.2](lessons/03-02-onset-nucleate-boiling-subcooled.md)

### Subcooled vs. saturated boiling

*Subcooled* (PWR): the bulk stream is below $T_{sat}$ but the wall is above it —
bubbles grow on the clad and collapse a millimetre away, and $x_e < 0$.
*Saturated / bulk* boiling (BWR): the bulk itself reaches $T_{sat}$ and net vapor
leaves the channel, $x_e > 0$. "Subcooled" describes the **bulk**, never the
surface.

*Introduced:* [3.2](lessons/03-02-onset-nucleate-boiling-subcooled.md)

### Thermodynamic quality

The vapor's share of the **mass** — equivalently, how far the mixture enthalpy
has climbed from all-liquid toward all-vapor, in units of the latent heat. Plug
in a subcooled enthalpy and it goes negative: that is a valid enthalpy coordinate
("bulk still subcooled"), not an amount of steam.

$$x = \frac{h-h_f}{h_{fg}} = \frac{\dot m_g}{\dot m_g + \dot m_f}$$

*Introduced:* [3.3](lessons/03-03-quality-void-fraction-slip.md)

### Void fraction

The vapor's share of the **area** (equivalently, volume). This — not quality — is
what moderation, pressure drop, and dryout margin actually feel.

$$\alpha = \frac{A_{vapor}}{A_{total}}$$

*Introduced:* [3.3](lessons/03-03-quality-void-fraction-slip.md)

### Slip ratio

How much faster the buoyant vapor rides than the liquid. Faster vapor clears each
slice sooner, so at fixed quality it occupies **less** area — slip *lowers* void.
$S=1$ is the homogeneous model and is the upper bound on $\alpha$.

$$S \equiv \frac{u_g}{u_f}, \qquad S \approx 1.5\text{–}2 \ \text{typical in vertical channels}$$

*Introduced:* [3.3](lessons/03-03-quality-void-fraction-slip.md)

### Superficial velocity

The speed each phase *would* have if it flowed alone through the whole
cross-section. Divide by the area fraction that phase actually holds to recover
its real velocity.

$$j_g = \frac{Gx}{\rho_g}, \quad j_f = \frac{G(1-x)}{\rho_f}; \qquad u_g = \frac{j_g}{\alpha}, \quad u_f = \frac{j_f}{1-\alpha}$$

*Introduced:* [3.4](lessons/03-04-two-phase-flow-regimes.md)

### Flow regime

*How* the vapor is arranged, as opposed to how much of it there is. A scalar
$\alpha$ and a geometry are different questions — and it is the geometry that
decides whether the wall is bathed in liquid or living on a fragile film.

$$\text{regime} = \mathcal F(j_g,\,j_f) \equiv \mathcal F(G,\,x,\ \text{geometry, orientation})$$

*Introduced:* [3.4](lessons/03-04-two-phase-flow-regimes.md)

### Two-phase multiplier

One dimensionless factor that converts a liquid-only friction calculation into
the two-phase one. Subscript $lo$ means "total mass flux flowing as liquid" —
distinct from Martinelli's $\phi_f^2$, which references only the liquid *fraction*
actually flowing.

$$\Delta p_{2\phi,f} = \phi_{lo}^2\,\Delta p_{f,lo}, \qquad \phi_{lo}^2 = 1 + x\!\left(\frac{\rho_f}{\rho_g}-1\right) \ \ (\text{homogeneous})$$

*Introduced:* [3.5](lessons/03-05-two-phase-pressure-drop.md)

### Critical heat flux (CHF)

The most heat a wetted surface can pass. Cross it and the wall goes dry, $h$
collapses by more than an order of magnitude, and the temperature bolts upward by
hundreds of kelvin because the fission power keeps arriving regardless. Also
called the **boiling crisis**.

*Introduced:* [3.1](lessons/03-01-boiling-curve-pool-boiling-regimes.md), [3.6](lessons/03-06-critical-heat-flux-dnb.md)

### DNB vs. dryout

The same catastrophe from opposite ends of the quality scale.
**DNB** (departure from nucleate boiling, the PWR mode): at **low** quality,
bubbles coalesce into a vapor blanket before liquid can rewet — *too much* vapor
at the wall. **Dryout** (the BWR mode): at **high** quality in annular flow, the
liquid wall film is consumed faster than droplets redeposit — *too little* liquid
at the wall.

*Introduced:* [3.6](lessons/03-06-critical-heat-flux-dnb.md)

### DNBR

The thermal-margin currency: how many times you could crank the local flux before
the wall dries, with the CHF evaluated at that node's *own* pressure, mass flux,
and quality. The tightest value up the channel (MDNBR) is the licensed one.

$$DNBR = \frac{q''_{CHF}}{q''_{local}}, \qquad q''_{local} = \frac{q'}{\pi D_{rod}}$$

*Introduced:* [3.6](lessons/03-06-critical-heat-flux-dnb.md)

### Critical power ratio (CPR / MCPR)

The BWR repackaging of the same idea: the factor by which the **whole bundle's
power** could rise before *any* node reaches dryout. The minimum over the cycle,
MCPR, is the licensed quantity (limit near 1.2–1.3).

*Introduced:* [3.6](lessons/03-06-critical-heat-flux-dnb.md)

### Driving head

The gravity pump. A hot, light column beside a cold, heavy one of the same height
no longer cancels; the weight imbalance drives flow around a closed loop with no
pump at all. $H$ is the elevation between the **mid-heights of the heat source
and the heat sink**, not the core height.

$$\Delta p_{dr} = (\rho_{cold}-\rho_{hot})\,g\,H \approx \rho\,\beta\,\Delta T\,g\,H$$

*Introduced:* [4.1](lessons/04-01-natural-circulation-driving-head.md)

### Ledinegg instability

A *static* flow excursion. Because a boiling channel demands **more** pressure
drop when you slow it down, its demand curve bends into a sideways N; a flat
supply line can cut it three times, and the middle crossing — on the downhill
branch — is a marble on a dome. A nudge sends the flow all the way to another
branch, typically collapsing to a starved, dryout-prone trickle.

$$\frac{\partial(\Delta p_{ch})}{\partial G} < \frac{\partial(\Delta p_{sup})}{\partial G} \quad\Longrightarrow\quad \text{unstable}$$

*Introduced:* [4.2](lessons/04-02-flow-stability.md)

### Density-wave oscillation

The *dynamic* cousin. A dip in inlet flow creates a low-density slug that takes a
transit time $\tau \approx L/u$ to climb the channel; its lagged effect on the
pressure drop feeds back onto the inlet flow, and if it arrives out of phase it
pumps the swing instead of damping it. Period $\sim(1\text{–}2)\tau$, i.e. the
sub-Hz "chugging" band. It can occur even where the demand slope is positive and
Ledinegg is happy.

*Introduced:* [4.2](lessons/04-02-flow-stability.md)

### Reactivity

How far the chain reaction is off exact criticality — the fractional surplus per
generation. Dimensionless but tiny, so quoted in pcm.

$$\rho = \frac{k-1}{k}, \qquad 1\ \mathrm{pcm} = 10^{-5}\ \Delta k/k$$

*Introduced:* [4.3](lessons/04-03-reactivity-feedback-coefficients.md)

### Temperature (reactivity) coefficient

How many pcm the core gains or loses per unit change in one physical variable.
**The sign is the whole game**: negative is a thermostat, positive is an
accelerator.

$$\alpha_x = \frac{\partial\rho}{\partial T_x}, \qquad \Delta\rho_x = \alpha_x\,\Delta T_x$$

*Introduced:* [4.3](lessons/04-03-reactivity-feedback-coefficients.md)

### Doppler coefficient

The fuel's instant brake. Hotter fuel broadens the $^{238}$U resonance peaks;
the same peak area spread into the unshielded wings captures more neutrons, so
resonance escape and $k$ fall. Negative for essentially any core with significant
$^{238}$U, and **prompt** — it acts in the same microsecond the excursion starts,
before heat has conducted anywhere.

*Introduced:* [4.3](lessons/04-03-reactivity-feedback-coefficients.md)

### Void coefficient

The reactivity change per percent void. Its **sign follows the material's
neutronic role, not the word "void."** Where the coolant *is* the moderator (BWR)
voiding strips moderation and $\alpha_v \ll 0$; where a separate graphite
moderator does the job (RBMK) the water is mainly an absorber, so voiding it makes
$\alpha_v > 0$ — the physics behind Chernobyl.

*Introduced:* [4.3](lessons/04-03-reactivity-feedback-coefficients.md)

### Quasi-static reactivity balance

At any steady operating point, control and feedback are equal and opposite.
Negative feedback does not pin the *power* — it pins this *balance*, and the core
simply walks to whatever temperature makes the books close.

$$\rho_{ext} + \alpha_{tot}\,(T-T_{ref}) = 0 \qquad\Longrightarrow\qquad \Delta T = -\frac{\rho_{ext}}{\alpha_{tot}}$$

*Introduced:* [4.4](lessons/04-04-coupled-th-neutronic-feedback.md)

### Power defect

The reactivity the core hides from you as it warms from zero power to rated
conditions — and which control (rod withdrawal, boron dilution) must supply just
to hold criticality. Typically a couple thousand pcm. It is also your cushion: it
slams back in the instant power tries to surge.

$$\rho_{defect} = \int_{\text{zero power}}^{\text{full power}} \alpha_{tot}\,dT \;<\; 0$$

*Introduced:* [4.4](lessons/04-04-coupled-th-neutronic-feedback.md), [4.3](lessons/04-03-reactivity-feedback-coefficients.md)

### Decay heat

The heat a *scrammed* core keeps making, because the fission-product inventory
already built up goes right on decaying. About 6–7 percent of full power at the
instant of shutdown, falling as a shallow power law — **never** to zero. Shutdown
is the start of the cooling problem, not the end.

*Introduced:* [4.5](lessons/04-05-decay-heat-after-shutdown.md)

### Peak cladding temperature (PCT)

The highest temperature any spot on any rod reaches during an accident, capped at
1204 °C (2200 °F). The limit is **not** melting (zirconium melts near 1850 °C) —
it guards against the exothermic zirconium–steam reaction and oxygen
embrittlement, which take over hundreds of degrees below melt.

$$\mathrm{Zr} + 2\,\mathrm{H_2O} \longrightarrow \mathrm{ZrO_2} + 2\,\mathrm{H_2} + \text{heat}$$

*Introduced:* [4.6](lessons/04-06-loca-thermal-margins.md)

## Formulas and rules

### The three power densities

Same heat, three denominators — volume, length, area. Moving between them is pure
pin geometry.

| From | To | Relation |
|---|---|---|
| $q'''$ | $q'$ | $q' = q'''\,\pi r_o^2$ |
| $q'$ | $q''$ | $q'' = q'/(2\pi r_o)$ at the pellet, $q'=q''\,\pi D_{rod}$ at the clad |
| $q'''$ | $q''$ | $q'' = q'''\,r_o/2$ |
| core power | pin average | $\bar q' = P/(N_{pins}L)$ |

Axial shape: $q'(z) = q'_{max}\cos(\pi z/L_e)$, with $z=0$ at the midplane and
$L_e$ the extrapolated length. A pure cosine over the active length has axial
peaking $F_z = \pi/2 \approx 1.57$, i.e. its average is $(2/\pi)q'_{max}$.

*From* [1.1](lessons/01-01-power-distribution-volumetric-source.md)

### Fuel-pin conduction

$$\frac{1}{r}\frac{d}{dr}\!\left(r\frac{dT}{dr}\right) + \frac{q'''}{k} = 0, \qquad \left.\frac{dT}{dr}\right|_{r=0}=0, \qquad T(r_o)=T_s$$

$$T(r) = T_0 - \frac{q'''r^2}{4k} \quad(\text{a parabola}), \qquad \boxed{T_0 - T_s = \frac{q'''r_o^2}{4k} = \frac{q'}{4\pi k}}$$

**The radius has vanished.** At the same linear power a fat pellet and a skinny
one reach the same centerline temperature — which is why fuel duty is rated in
kW/m. With temperature-dependent $k$, use $q'/(4\pi) = \int_{T_s}^{T_0}k\,dT$; for
a linear $k(T)$ that is just the mean conductivity times the span.

*From* [1.2](lessons/01-02-conduction-heat-source-fuel-pin.md)

### The resistance chain, coolant to centerline

| Leg | Resistance per unit length $R'$ ($\mathrm{K\cdot m/W}$) | Typical share of the drop |
|---|---|---|
| Fuel | $\dfrac{1}{4\pi k_f}$ | ~76% |
| Gap | $\dfrac{1}{2\pi r_g h_g}$ | ~18% |
| Clad | $\dfrac{\ln(r_{co}/r_{ci})}{2\pi k_c}$ | ~3% |
| Film | $\dfrac{1}{2\pi r_{co} h}$ | ~3% |

$$T_0 - T_b = q'\sum R' = q'\left[\frac{1}{4\pi k_f} + \frac{1}{2\pi r_g h_g} + \frac{\ln(r_{co}/r_{ci})}{2\pi k_c} + \frac{1}{2\pi r_{co}h}\right]$$

Fuel and gap own ~94 percent of the budget. **Leverage lives in the biggest
resistances** — you cannot win back a resistance you barely have, so doubling $h$
buys tens of kelvin while improving $k_f$ or $h_g$ buys hundreds. Climb the chain
in order: $T_b \to T_{co} \to T_{ci} \to T_s \to T_0$.

*From* [1.3](lessons/01-03-gap-cladding-resistances.md) *and* [2.4](lessons/02-04-full-radial-temperature-drop.md)

### Axial profiles up a channel

Coolant energy balance (single-phase, and its phase-change-proof enthalpy form):

$$\dot m\,c_p\,\frac{dT_b}{dz} = q'(z), \qquad \dot m\,\frac{dh}{dz} = q'(z)$$

$$T_{out}-T_{in} = \frac{\dot Q_{ch}}{\dot m c_p} \quad(\textbf{shape-blind — only the total matters})$$

Cosine power, $z$ from the midplane over $[-L/2,\,L/2]$:

$$T_b(z) = T_{in} + \frac{q'_{max}L_e}{\pi\,\dot m c_p}\left[\sin\!\left(\frac{\pi z}{L_e}\right) + \sin\!\left(\frac{\pi L}{2L_e}\right)\right], \qquad \Delta T_{coolant}\xrightarrow{L_e=L}\frac{2q'_{max}L}{\pi\,\dot m c_p}$$

Any solid temperature is coolant-plus-a-local-drop, $T = T_b(z) + q'(z)R'$, so
every peak sits **above** the midplane at

$$\boxed{\tan\!\left(\frac{\pi z_{peak}}{L_e}\right) = \frac{L_e}{\pi\,\dot m c_p\,R'}}$$

Large $R'$ (fuel centerline) hugs the flux peak; small $R'$ (clad surface) rides
the rising coolant far downstream. Since $\sum R' > R'_{conv}$, always
$z_0 < z_{co}$.

*From* [1.4](lessons/01-04-axial-temperature-profile-channel.md) *and* [2.1](lessons/02-01-coolant-energy-balance-bulk-temperature.md)

### Hot-channel bookkeeping

| Quantity | Factor to use | What it governs |
|---|---|---|
| Local heat flux / peak clad & fuel temperature | $F_q = F_R F_z F_{local}$ | the hot **spot**, near the axial power peak |
| Coolant temperature rise | $F_{\Delta H}$ (radial + local only) | the hot **channel**, worst near the exit |
| Total | $F_q^{tot}=F_q^N F_q^E$, $F_{\Delta H}^{tot}=F_{\Delta H}^N F_{\Delta H}^E$ | the condition limits are written against |

Consistency check: $F_z \approx F_q^N / F_{\Delta H}^N$ should land near $\pi/2$
for a lightly peaked cosine. Typical PWR values: $F_q \approx 2.2$–$2.6$,
$F_{\Delta H} \approx 1.55$–$1.6$.

*From* [1.5](lessons/01-05-hot-channel-hot-spot-factors.md)

### Convection correlations, sorted by Prandtl number

Always $h = Nu\,k/D_h$ with $Re = GD_h/\mu$ and $Pr = \mu c_p/k$. **The Prandtl
number picks the correlation; geometry and regime refine it.**

| Coolant | Regime | Correlation |
|---|---|---|
| Water, $Pr\sim1$ | turbulent, $Re\gtrsim10^4$ | Dittus–Boelter $Nu=0.023\,Re^{0.8}Pr^{n}$, $n=0.4$ heating / $0.3$ cooling |
| Water, rod bundle | square array | multiply $Nu$ by Weisman $\psi = 1.826\,(p/d)-1.0430$ |
| Water, hot wall | strong property variation | Sieder–Tate factor $(\mu_b/\mu_w)^{0.14}$ (a few percent for water) |
| Gases (He, CO$_2$), $Pr\approx0.7$ | turbulent | same turbulent form; the problem is density, not the correlation |
| Liquid metals, $Pr\ll1$ | constant $q''$, tube | Lyon–Martinelli $Nu = 7 + 0.025\,Pe^{0.8}$ |
| Liquid metals, rod bundle | constant $q''$ | e.g. $Nu = 4.82 + 0.0185\,Pe^{0.827}$ |

The signature of a low-$Pr$ coolant is **a constant plus a small power of $Pe$**:
even at zero flow the fluid conducts, so $Nu$ never falls below a floor near 7
(about 5 for a constant-wall-temperature boundary). Judge a coolant by $h$, never
by $Nu$ — sodium's $Nu\approx9$ beats water's $Nu\approx125$ because $k$ is
~127 times larger.

Entrance effects raise $Nu$ over the first $10$–$60\,D_h$; in a core that stretch
is short enough to ignore.

*From* [2.2](lessons/02-02-convective-heat-transfer-film-drop.md) *and* [2.3](lessons/02-03-correlations-across-coolants.md)

### Single-phase pressure drop

$$\Delta p_{tot} = \underbrace{f\frac{L}{D_h}\frac{G^2}{2\rho}}_{\text{friction}} + \underbrace{\left(\textstyle\sum K\right)\frac{G^2}{2\rho}}_{\text{form / grids}} + \underbrace{G^2\!\left(\frac{1}{\rho_o}-\frac{1}{\rho_i}\right)}_{\text{acceleration}} + \underbrace{\bar\rho\,gH}_{\text{elevation}}$$

| Piece | Value |
|---|---|
| Darcy $f$, turbulent smooth, $Re\gtrsim2\times10^4$ | $f \approx 0.184\,Re^{-0.2}$ |
| Darcy $f$, Blasius, $Re\lesssim2\times10^4$ | $f \approx 0.316\,Re^{-0.25}$ |
| Fanning conversion | $C_f = f/4$; using Fanning needs $\Delta p_f = 4C_f\frac{L}{D_h}\frac{G^2}{2\rho}$ |
| PWR spacer grid | $K \approx 0.7$–$1.5$ each, 7–9 grids per assembly |
| Pumping power | $\dot W_{pump} = \dot V\,\Delta p_{tot}/\eta$, $\eta\approx0.8$–$0.9$ |

**The design trade, in exponents.** At fixed $\dot m$ with $A\propto D_h^2$:
$\Delta p_f \propto D_h^{-4.8}$ but $h \propto G^{0.8}D_h^{-0.2} \propto D_h^{-1.8}$.
Widening a channel saves pump power fast — and costs heat transfer faster still.
Grids cost pressure *and* buy CHF margin by mixing subchannels.

*From* [2.5](lessons/02-05-pressure-drop-core.md)

### Boiling curve landmarks (water, 1 atm)

| Regime | Wall superheat $\Delta T_e$ | Behavior |
|---|---|---|
| Natural convection | $\lesssim 5\ ^\circ$C | no bubbles; weak single-phase $h$ |
| Nucleate boiling | $\approx 5$–$30\ ^\circ$C | $h \sim 10^4$–$10^5\ \mathrm{W/(m^2K)}$; flux climbs steeply |
| **CHF peak** | $\approx 30\ ^\circ$C | $q''_{max}\approx 1\ \mathrm{MW/m^2}$ |
| Transition boiling | $\approx 30$–$120\ ^\circ$C | the one branch where $q''$ **falls** as $\Delta T_e$ rises |
| Film boiling | $\gtrsim 120\ ^\circ$C (past Leidenfrost min.) | insulating vapor blanket; $h$ collapses to $\sim10^3$ |

*From* [3.1](lessons/03-01-boiling-curve-pool-boiling-regimes.md)

### Onset and established boiling

Davis–Anderson onset superheat (equivalently Bergles–Rohsenow fit to water) —
note $T_{sat}$ must be in **kelvin**, since it descends from Clausius–Clapeyron:

$$\Delta T_{sat,ONB} = \sqrt{\frac{8\,\sigma\,T_{sat}\,q''}{k_l\,h_{fg}\,\rho_g}} \qquad\Longleftrightarrow\qquad q''_{ONB} = \frac{k_l h_{fg}\rho_g}{8\sigma T_{sat}}\,(T_w-T_{sat})^2$$

High pressure makes nucleation cheap: $\rho_g$ up two orders and $\sigma$ down one
give roughly $0.8$ K at 15.5 MPa versus $\sim7.6$ K at 1 atm.

Once fully-developed subcooled boiling is established, the wall superheat nearly
**pins** — Jens–Lottes, with $q''$ in $\mathrm{MW/m^2}$ and $p$ in MPa:

$$\Delta T_{sat} = 25\,(q'')^{0.25}\,e^{-p/6.2}$$

A fourth-root dependence means doubling the flux barely moves the wall; that is
the enhancement, and the reason the nucleate branch is so steep.

*From* [3.2](lessons/03-02-onset-nucleate-boiling-subcooled.md)

### Quality, void, and slip

$$\frac{x}{1-x} = \frac{\rho_g}{\rho_f}\,\frac{\alpha}{1-\alpha}\,S \qquad\Longrightarrow\qquad \boxed{\alpha = \frac{1}{1 + \dfrac{1-x}{x}\dfrac{\rho_g}{\rho_f}\,S}}$$

Handy benchmarks at 7 MPa ($\rho_g/\rho_f = 0.0493$), homogeneous $S=1$:

| $x$ | $\alpha$ |
|---|---|
| $0.021$ | $0.30$ (bubbly → slug boundary) |
| $0.047$ | $0.50$ |
| $0.05$ | $0.52$ |
| $0.10$ | $0.69$ |
| $0.15$ | $0.78$ ($0.70$ with $S=1.5$) |

**A little quality buys a lot of void**, by the factor $\rho_f/\rho_g \approx 20$.
As pressure rises toward critical, $\rho_g\to\rho_f$ and $\alpha \to x$ — which is
exactly why a 15.5 MPa PWR is far less void-sensitive than a 7 MPa BWR.

*From* [3.3](lessons/03-03-quality-void-fraction-slip.md)

### Flow regimes up a heated channel

| Void $\alpha$ | Regime | What the wall sees |
|---|---|---|
| $\approx 0$ | single-phase liquid | ordinary convection |
| small | **bubbly** | discrete bubbles, wall bathed in liquid |
| $\gtrsim 0.3$ | **slug / plug** | bullet-nosed Taylor bubbles, pulsing flow |
| $\approx 0.5$ | **churn** | chaotic froth, neither phase cleanly continuous |
| $\gtrsim 0.7$–$0.8$ | **annular** | vapor core + thin liquid wall film, droplets entrained |
| film exhausted | **mist / dispersed** | dry wall — this is dryout |

Everything above is **vertical up-flow**; turn the channel horizontal and gravity
stratifies the phases into regimes that don't exist in a rod bundle.

An annular film's evaporation budget: per unit wall perimeter a film flow
$\Gamma$ ($\mathrm{kg\,m^{-1}s^{-1}}$) survives only a length
$L = \Gamma h_{fg}/q''$ — of order 15 cm at reactor flux. A 3.7 m channel stays
wet **only because entrained droplets continuously redeposit**; dryout is where
deposition can no longer keep up.

*From* [3.4](lessons/03-04-two-phase-flow-regimes.md)

### Two-phase pressure drop

$$\Delta p_{tot} = \underbrace{\Delta p_{sub}}_{\text{single-phase entry}} + \underbrace{\phi_{lo}^2\,\Delta p_{f,lo}}_{\text{friction }\uparrow} + \underbrace{G^2\Delta(1/\rho)}_{\text{acceleration }\uparrow\uparrow} + \underbrace{\int_0^L \bar\rho\,g\,dz}_{\text{gravity }\downarrow}$$

| Piece | Form |
|---|---|
| Liquid-only baseline | $\Delta p_{f,lo} = f_{lo}\frac{L}{D_h}\frac{G^2}{2\rho_f}$, $f_{lo}=0.184\,Re_{lo}^{-0.2}$, $Re_{lo}=GD_h/\mu_f$ |
| Homogeneous multiplier | $\phi_{lo}^2 = 1 + x(\rho_f/\rho_g - 1)$ |
| With viscosity contrast | $\phi_{lo}^2 = \left[1+x(\tfrac{\rho_f}{\rho_g}-1)\right]\left[1+x(\tfrac{\mu_f}{\mu_g}-1)\right]^{-0.25}$ (~10% lower) |
| Length-average | use the **mean** quality $\bar x = x_e/2$, since $\phi_{lo}^2$ is linear in $x$ and $x$ climbs roughly linearly |
| Mixture specific volume | $1/\rho_m = x/\rho_g + (1-x)/\rho_f$ |
| Mixture density (void-weighted) | $\bar\rho = \alpha\rho_g + (1-\alpha)\rho_f$ |

Friction and acceleration climb; **gravity relaxes**, because a frothy column
weighs less. Design correlations (Martinelli–Nelson) tabulate $\phi_{lo}^2$
against pressure and quality where the homogeneous model over-predicts.

*From* [3.5](lessons/03-05-two-phase-pressure-drop.md)

### CHF, margin, and its limits

$$DNBR = \frac{q''_{CHF}}{q''_{local}} \;\ge\; 1.30 \quad(\text{typical W-3 design/safety limit, 95/95 confidence})$$

$q''_{CHF} = f(p,\,G,\,x,\,D_h)$ comes from a fitted correlation (**W-3 / Tong**
for PWRs) — you don't memorize its coefficients, you memorize that it **falls as
quality rises and as mass flux drops.** Consequences:

- The **minimum** DNBR sits **downstream of the flux peak**: local flux is still
  high there while CHF has already degraded with quality.
- Allowable overpower $\lambda_{max} = DNBR_0/DNBR_{limit}$ is an *optimistic*
  estimate, because uprating also raises quality, which lowers $q''_{CHF}$.
- Lowering $G$ to save pump power lowers CHF too — pressure drop, film drop, and
  DNBR are three faces of one optimization.

*From* [3.6](lessons/03-06-critical-heat-flux-dnb.md)

### Natural circulation

Two coupled equations — momentum and energy — in two unknowns, $G$ and $\Delta T$:

$$\Delta p_{dr} = \rho\beta\Delta T\,gH = R_{loop}\frac{G^2}{2\rho}, \qquad R_{loop}=\sum\!\left(f\frac{L}{D_h}+K\right), \qquad q = \dot m c_p \Delta T$$

$$G = \sqrt{\frac{2\rho\,\Delta p_{dr}}{R_{loop}}} \qquad\text{and, eliminating }\Delta T,\qquad \boxed{G = \left(\frac{2\rho^2\beta g H\,q}{R_{loop}\,A\,c_p}\right)^{1/3}}$$

The scalings are the whole story:

| Hold fixed | Scaling |
|---|---|
| geometry, vary power | $G \propto q^{1/3}$, $\Delta T \propto q^{2/3}$ |
| $\Delta T$ fixed, vary height | $G \propto H^{1/2}$, so removable power $q \propto H^{1/2}$ (double $q$ ⇒ quadruple $H$) |

Natural circulation copes with more load mostly by getting **hotter**, not by
flowing much faster. Typical numbers: a few kPa of driving head (vs. ~100 kPa
from a pump) carrying ~1–5 percent of forced flow — which suffices, because decay
heat is a small percent of full power. $R_{loop}$ depends weakly on $Re$; one
back-substitution converges (a 20 percent error in $R_{loop}$ moves $G$ ~6 percent).

*From* [4.1](lessons/04-01-natural-circulation-driving-head.md)

### Flow-stability criteria and the fix

Against a **flat** supply ($\partial\Delta p_{sup}/\partial G = 0$):

$$\frac{\partial(\Delta p_{ch})}{\partial G} < 0 \;\Longrightarrow\; \text{Ledinegg-unstable — the whole downhill branch of the N}$$

A stiff (steeply falling) pump curve stabilizes; a soft flat one exposes the N.

**The fix: an inlet orifice.** A single-phase form loss on cold, dense entering
liquid, $\Delta p_{orf} = K\,G^2/(2\rho_f)$, is monotonically increasing in $G$ —
exactly the positive slope the boiling region lacks. Size it so its rise across
the worst downhill segment cancels the two-phase fall:

$$\frac{K}{2\rho_f}\left(G_2^2 - G_1^2\right) \;\ge\; \left|\Delta p_{ch}(G_1)-\Delta p_{ch}(G_2)\right|$$

It must sit at the **inlet**; an orifice inside the boiling region only amplifies
the two-phase drop. Density-wave estimate: $\tau = L/u$, period
$\tau_{osc}\approx 2\tau$, so $f \sim 0.1$–$1$ Hz.

*From* [4.2](lessons/04-02-flow-stability.md)

### Reactivity feedback

$$\rho_{net} = \rho_{ext} + \rho_{fb}, \qquad \rho_{fb} = \alpha_{tot}\,\Delta T, \qquad \alpha_{tot} = \alpha_{Doppler} + \alpha_{moderator}$$

| Coefficient | Sign | Clock | Typical magnitude |
|---|---|---|---|
| Doppler (fuel temperature) | always negative | **prompt** (microseconds) | $-2$ to $-3\ \mathrm{pcm/K}$ |
| Moderator temperature / density | negative if **under-moderated** (PWR by design) | delayed (seconds) | order $\mathrm{pcm/K}$ |
| Void, light-water (coolant *is* moderator) | strongly negative | delayed | order $-100\ \mathrm{pcm/\%void}$ |
| Void, graphite-moderated (RBMK) | **positive** | delayed | order $+40\ \mathrm{pcm/\%void}$ |
| Delayed-neutron fraction $\beta$ | — | gates the pace | $\approx 650\ \mathrm{pcm}$ |

Stability requires $\alpha_{tot} < 0$: only then does $\Delta T = -\rho_{ext}/\alpha_{tot}$
have a positive (real, hotter) solution. A negative $\Delta T$ is the tell that no
stable hot operating point exists. And feedback only works *below* prompt
critical, $\rho_{ext} < \beta$ — cross $\beta$ and the excursion outruns every
thermal effect.

*From* [4.3](lessons/04-03-reactivity-feedback-coefficients.md) *and* [4.4](lessons/04-04-coupled-th-neutronic-feedback.md)

### Decay heat

Wigner–Way, with $t$ = seconds since shutdown and $t_0$ = seconds of operation
before it:

$$\frac{P(t)}{P_0} \approx 0.066\left[t^{-0.2} - (t+t_0)^{-0.2}\right] \;\xrightarrow{\;t_0 \gg t\;}\; \boxed{\frac{P(t)}{P_0}\approx 0.066\,t^{-0.2}}$$

$$E(t) = \int_0^t P\,d\tau = 0.066\,P_0\,\frac{t^{0.8}}{0.8}$$

| Time after shutdown | $P/P_0$ (long-operation shorthand) |
|---|---|
| scram | $\sim6.5\%$ |
| 10 s | $\sim4.2\%$ |
| 100 s | $\sim2.6\%$ (detailed ANS-5.1 gives $\sim1.4\%$) |
| 1 hour | $\sim1.3\%$ |
| 1 day | $\sim0.7\%$ |

The exponent is only $0.2$, so **a hundredfold wait cuts the heat only to ~40
percent** — the reason cooling runs for days. Correlations disagree by tens of
percent at short cooling times; the simple law runs high, so quote which one you
used and, for safety, bias high.

*From* [4.5](lessons/04-05-decay-heat-after-shutdown.md)

### The three margins

| Margin | Criterion | Condition | Computed in |
|---|---|---|---|
| To CHF | $DNBR = q''_{CHF}/q''_{local} \ge 1.30$ | normal operation | [3.6](lessons/03-06-critical-heat-flux-dnb.md) |
| To melt | $T_0 < T_{melt} \approx 2865\ ^\circ$C (UO$_2$) | normal operation | [2.4](lessons/02-04-full-radial-temperature-drop.md) |
| To PCT | $T_{clad}^{max} \le 1204\ ^\circ$C, plus $\mathrm{ECR} \le 17\%$ and core hydrogen $\le 1\%$ | accident (LOCA) | [4.6](lessons/04-06-loca-thermal-margins.md) |

The two normal-operation margins are hundreds to a thousand kelvin wide; the
accident margin is the narrow one, which is why LOCA analysis gets the regulatory
attention. LOCA phases: **blowdown** (seconds, first clad peak) →
**refill/reflood** (tens of seconds to minutes, usually the true PCT, ended by
the quench front) → **long-term cooling** (hours to days).

*From* [4.6](lessons/04-06-loca-thermal-margins.md)

### Property and constant tables the lessons quote

Never derived in the lessons; needed in nearly every problem.

**Water, PWR conditions (~15.5 MPa)**

| Property | Value |
|---|---|
| $T_{sat}$ | $\approx 345\ ^\circ$C |
| $\rho$ (compressed liquid, ~300 °C) | $\approx 726$–$740\ \mathrm{kg/m^3}$ |
| $c_p$ | $\approx 5.4\ \mathrm{kJ/(kg\cdot K)}$ |
| $k$ | $\approx 0.56\ \mathrm{W/(m\cdot K)}$ |
| $\mu$ | $\approx 9.1\times10^{-5}\ \mathrm{Pa\cdot s}$ |
| $Pr$ | $\approx 0.87$ |
| saturated: $\rho_g$, $h_{fg}$, $\sigma$, $k_l$ | $\approx 100\ \mathrm{kg/m^3}$, $0.97\ \mathrm{MJ/kg}$, $0.005\ \mathrm{N/m}$, $0.50\ \mathrm{W/(m\cdot K)}$ |

**Water, BWR conditions (7 MPa)**

| Property | Value |
|---|---|
| $T_{sat}$ | $286\ ^\circ$C |
| $\rho_f,\ \rho_g$ | $740$, $36.5\ \mathrm{kg/m^3}$ (ratio $\rho_f/\rho_g = 20.3$) |
| $h_f,\ h_{fg}$ | $1267$, $1505\ \mathrm{kJ/kg}$ |

**Water, 1 atm (for contrast in nucleation problems):** $T_{sat}=373$ K,
$\sigma = 0.059\ \mathrm{N/m}$, $k_l = 0.68\ \mathrm{W/(m\cdot K)}$,
$h_{fg} = 2.26\ \mathrm{MJ/kg}$, $\rho_g = 0.60\ \mathrm{kg/m^3}$.

**Liquid sodium (~400 °C):** $\rho = 856\ \mathrm{kg/m^3}$,
$c_p = 1275\ \mathrm{J/(kg\cdot K)}$, $k = 71\ \mathrm{W/(m\cdot K)}$,
$\mu = 2.87\times10^{-4}\ \mathrm{Pa\cdot s}$, so $Pr \approx 0.005$.

**Materials and limits**

| Quantity | Value |
|---|---|
| UO$_2$ conductivity $k_f$ | $\approx 3\ \mathrm{W/(m\cdot K)}$, **falling** with temperature |
| UO$_2$ melting point | $\approx 2865\ ^\circ$C |
| Zircaloy conductivity $k_c$ | $\approx 17\ \mathrm{W/(m\cdot K)}$ |
| Zircaloy steam-oxidation runaway | above $\sim1000$–$1200\ ^\circ$C; melts near $1850\ ^\circ$C |
| Gap conductance $h_g$ | $5\times10^3$–$10^4\ \mathrm{W/(m^2\cdot K)}$ (helium $k\approx0.15$; Xe/Kr 10–30× worse) |
| Energy per fission $E_f$ | $\approx 200\ \mathrm{MeV} = 3.20\times10^{-11}\ \mathrm{J}$ |
| $g$ | $9.81\ \mathrm{m/s^2}$ |

**Reference PWR / BWR numbers worth carrying**

| Quantity | PWR | BWR |
|---|---|---|
| Peak linear rating $q'_{max}$ | $\sim40$ kW/m | similar |
| Mass flux $G$ | $\sim3400$–$3800\ \mathrm{kg\,m^{-2}s^{-1}}$ | $\sim1500$ |
| Hydraulic diameter $D_h$ | $\sim11.8$ mm | $\sim12.5$ mm |
| Film coefficient $h$ | $\sim30$–$40\ \mathrm{kW/(m^2K)}$ | boiling, higher |
| Core $\Delta p$ | $\sim0.1$ MPa (pump $\sim3$ MW) | — |
| Exit condition | bulk subcooled $\sim15$–$20$ K, wall boiling | $x_e \approx 0.10$–$0.15$ |

*From* [1.2](lessons/01-02-conduction-heat-source-fuel-pin.md), [2.2](lessons/02-02-convective-heat-transfer-film-drop.md), [2.3](lessons/02-03-correlations-across-coolants.md), [2.5](lessons/02-05-pressure-drop-core.md), [3.2](lessons/03-02-onset-nucleate-boiling-subcooled.md), [3.3](lessons/03-03-quality-void-fraction-slip.md)

## Assumed, not taught here

This course sits on top of heat transfer, fluid dynamics, thermodynamics,
materials, and neutronics. It *uses* the following without deriving them; each row
says where the derivation lives.

| Fact | Where it's taught |
|---|---|
| Fourier's law and conduction with an internal source (Cartesian form) | [heat-transfer 1.3](../heat-transfer/lessons/01-03-1d-steady-conduction.md) |
| Series thermal-resistance networks and the cylindrical-shell resistance $\ln(r_2/r_1)/(2\pi kL)$ | [heat-transfer 1.4](../heat-transfer/lessons/01-04-thermal-resistance-networks.md) |
| $Nu$, $Re$, $Pr$ as dimensionless groups, and where they come from | [heat-transfer 3.2](../heat-transfer/lessons/03-02-dimensionless-groups-re-pr-nu.md) |
| Dittus–Boelter for pipes, entrance length, mixed-mean temperature | [heat-transfer 3.4](../heat-transfer/lessons/03-04-internal-forced-convection.md) |
| Boussinesq buoyancy and free-convection boundary layers | [heat-transfer 3.5](../heat-transfer/lessons/03-05-natural-convection.md) |
| Pool boiling, latent heat transport, the boiling curve as heat-transfer physics | [heat-transfer 3.6](../heat-transfer/lessons/03-06-boiling-condensation.md) |
| Reynolds number, laminar/turbulent transition, boundary layers | [fluid-dynamics 3.1](../fluid-dynamics/lessons/03-01-reynolds-number.md) |
| Turbulent pipe drag and the friction factor's origin (Poiseuille flow) | [fluid-dynamics 3.2](../fluid-dynamics/lessons/03-02-couette-poiseuille.md) |
| Steady-flow energy equation on a control volume, $\dot Q = \dot m c_p \Delta T$ | [engineering-thermodynamics 2.3](../engineering-thermodynamics/lessons/02-03-mass-energy-balance-control-volumes.md) |
| Saturation line, the vapor dome, $T_{sat}(p)$, latent heat at constant temperature | [engineering-thermodynamics 1.2](../engineering-thermodynamics/lessons/01-02-phase-behavior-pure-substance.md) |
| Steam tables: reading $h_f$, $h_{fg}$, $\rho_f$, $\rho_g$ and the quality relation $h = h_f + x h_{fg}$ | [engineering-thermodynamics 1.3](../engineering-thermodynamics/lessons/01-03-property-tables-quality.md) |
| Why UO$_2$'s conductivity is low and falls with temperature | [nuclear-materials 3.1](../nuclear-materials/lessons/03-01-uo2-ceramic-fuel.md) |
| The integral-conductivity fuel temperature profile and restructuring | [nuclear-materials 3.2](../nuclear-materials/lessons/03-02-fuel-temperature-profile-restructuring.md) |
| Fission-gas release filling the gap with Xe/Kr and degrading $h_g$ | [nuclear-materials 3.4](../nuclear-materials/lessons/03-04-fission-gas-release-swelling.md) |
| Zircaloy properties, steam oxidation, embrittlement, and where 1204 °C comes from | [nuclear-materials 4.1](../nuclear-materials/lessons/04-01-zirconium-alloys-cladding.md) |
| Cosine axial and Bessel radial flux shapes; extrapolated length | [reactor-physics 2.4](../reactor-physics/lessons/02-04-bare-reactor-geometries-flux-shapes.md) |
| Temperature coefficients of reactivity, under- vs. over-moderation | [reactor-physics 5.1](../reactor-physics/lessons/05-01-reactivity-feedback-temperature-coefficients.md) |
| Doppler broadening, self-shielding, and the void coefficient's neutronics | [reactor-physics 5.2](../reactor-physics/lessons/05-02-doppler-moderator-void-coefficients.md) |
| Delayed neutrons, $\beta$, point kinetics, prompt critical | [reactor-physics 4.1](../reactor-physics/lessons/04-01-delayed-neutrons-point-kinetics.md) |
| The ~200 MeV per fission and how much of it is deposited locally | [intro-nuclear-engineering 3.1](../intro-nuclear-engineering/lessons/03-01-fission-process-energy.md) |
| The radioactive decay law behind the fission-product inventory | [intro-nuclear-engineering 1.3](../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md) |
| PWR / BWR / gas / liquid-metal reactor types and why each picks its coolant | [intro-nuclear-engineering 4.5](../intro-nuclear-engineering/lessons/04-05-reactor-types-nuclear-landscape.md) |
| CHF correlations themselves (W-3 coefficients, Martinelli–Nelson tables) | nowhere in this library — the lessons deliberately treat them as fitted black boxes, keyed to $(p, G, x, D_h)$ |

## Pitfalls

### Power densities and peaking

- $q'''$, $q'$, and $q''$ are the *same heat* over volume, length, and area — not
  three quantities. A bare "40" is meaningless; carry the primes and the
  denominator.
  *([1.1](lessons/01-01-power-distribution-volumetric-source.md), [1.2](lessons/01-02-conduction-heat-source-fuel-pin.md))*
- Never design to the core average: the peak pin runs $\sim2.5\times$ hotter, and
  it is the one that melts or triggers boiling crisis.
  *([1.1](lessons/01-01-power-distribution-volumetric-source.md))*
- $q'''$ is not uniform even in a uniform pellet — it tracks the flux, so it sags
  toward the pin ends and the core edge.
  *([1.1](lessons/01-01-power-distribution-volumetric-source.md))*
- "Hot channel" and "hot spot" are different places governed by different factors:
  $F_{\Delta H}$ (integrated, worst near the exit) versus $F_q$ (local, near the
  axial power peak).
  *([1.5](lessons/01-05-hot-channel-hot-spot-factors.md))*
- Do **not** put $F_z$ inside $F_{\Delta H}$ — integrating over the channel
  replaces the axial peak with its average, so sneaking it in double-counts.
  *([1.5](lessons/01-05-hot-channel-hot-spot-factors.md))*
- Multiplying every engineering subfactor is more *conservative*, not more
  *accurate*: it models a coincidence independent tolerances essentially never
  produce.
  *([1.5](lessons/01-05-hot-channel-hot-spot-factors.md))*

### The temperature chain

- A fatter pellet does **not** run hotter at the center — $q'/(4\pi k)$ has no
  radius in it. Radius changes $q'''$, not $\Delta T$.
  *([1.2](lessons/01-02-conduction-heat-source-fuel-pin.md))*
- A constant $k$ using the *surface* value **under**-predicts the centerline,
  because UO$_2$ conducts worst exactly where it is hottest. Use $\int k\,dT$.
  *([1.2](lessons/01-02-conduction-heat-source-fuel-pin.md))*
- The shiny metal clad is *not* the big barrier — it is ~3 percent of the drop
  while the near-invisible gas gap is ~18 percent. Resistance follows
  conductivity, not thickness or looks.
  *([1.3](lessons/01-03-gap-cladding-resistances.md), [2.4](lessons/02-04-full-radial-temperature-drop.md))*
- $h_g$ is not a material constant: it degrades with burnup as fission gas floods
  the gap, then jumps when swelling closes it. Always ask "beginning or end of
  life?"
  *([1.3](lessons/01-03-gap-cladding-resistances.md), [2.4](lessons/02-04-full-radial-temperature-drop.md))*
- Only the **drops** add in series. The temperatures are a running sum along the
  climb — adding $T_b$ four times is the classic double-count.
  *([2.4](lessons/02-04-full-radial-temperature-drop.md))*
- Chasing $h$ cools the *clad surface* (boiling margin), not the *fuel centerline*.
  To cool the fuel, fix the fuel or the gap.
  *([2.4](lessons/02-04-full-radial-temperature-drop.md))*

### Axial and channel bookkeeping

- The fuel is **not** hottest exactly at the midplane, and clad and fuel do not
  peak at the same elevation — different $R'$ means different $z_{peak}$, always
  above the midplane.
  *([1.4](lessons/01-04-axial-temperature-profile-channel.md))*
- Where $q'\to0$ at the channel ends, every local drop vanishes and fuel, clad,
  and coolant temperatures coincide.
  *([1.4](lessons/01-04-axial-temperature-profile-channel.md))*
- $\dot m$ in these balances is one **channel's** flow, not the core total —
  using the core value understates $\Delta T$ by a factor of thousands.
  *([1.4](lessons/01-04-axial-temperature-profile-channel.md))*
- Outlet temperature depends only on *total* channel power, not on where the power
  sits. Shape controls the local slope and where the peak wall temperature lands.
  *([2.1](lessons/02-01-coolant-energy-balance-bulk-temperature.md))*
- $T_b$ is the cup-mixed value that carries the enthalpy; the wall is hotter by the
  film drop and the centerline hotter still. Only $T_b$ belongs in the balance.
  *([2.1](lessons/02-01-coolant-energy-balance-bulk-temperature.md))*
- Drop $c_p\,\Delta T$ the moment two phases appear — at saturation heat goes into
  latent enthalpy at nearly constant temperature. Switch to $\dot m\,dh = q'\,dz$.
  *([2.1](lessons/02-01-coolant-energy-balance-bulk-temperature.md))*

### Convection and correlations

- Both $Re$ and $Nu$ take the **hydraulic** diameter, never the rod diameter or
  the pitch. Mixing them throws $h$ off by tens of percent.
  *([2.2](lessons/02-02-convective-heat-transfer-film-drop.md))*
- Big $h$ means a *smaller* film drop, not "the coolant working harder" — $1/h$ is
  the resistance you are trying to shrink.
  *([2.2](lessons/02-02-convective-heat-transfer-film-drop.md))*
- The film is the smallest resistance *right up until it isn't*: past CHF, $h$
  collapses and the drop jumps by hundreds of degrees.
  *([2.2](lessons/02-02-convective-heat-transfer-film-drop.md))*
- Judge a coolant by $h$, never by $Nu$ alone — a liquid metal's tiny $Nu$ times
  its enormous $k$ wins by an order of magnitude.
  *([2.3](lessons/02-03-correlations-across-coolants.md))*
- Dittus–Boelter at $Pr\ll1$ is not "conservatively small": it over-predicts at
  operating $Re$ and under-predicts at low flow, falling below the conduction
  floor. It is simply wrong, not safely wrong.
  *([2.3](lessons/02-03-correlations-across-coolants.md))*
- Match a correlation on all three of fluid ($Pr$ range), geometry
  (pipe vs. bundle), and regime (laminar/turbulent, constant $q''$ vs. constant
  $T_w$).
  *([2.3](lessons/02-03-correlations-across-coolants.md))*

### Pressure drop

- Confirm **Darcy versus Fanning** ($C_f = f/4$) before trusting any friction
  factor — the missing 4× is the classic blunder.
  *([2.5](lessons/02-05-pressure-drop-core.md))*
- Write everything in $G$, not velocity: in a heated channel $\rho$ falls, so
  $u = G/\rho$ rises while $G$ stays put. And $G^2/2\rho$ and $\rho u^2/2$ are the
  *same* quantity — don't double-book it.
  *([2.5](lessons/02-05-pressure-drop-core.md), [2.1](lessons/02-01-coolant-energy-balance-bulk-temperature.md))*
- In a *closed loop* the core's elevation head is largely recovered in the
  downcomer; what the pump net-fights is friction + form + acceleration.
  *([2.5](lessons/02-05-pressure-drop-core.md))*
- $\phi_{lo}^2$ multiplies **only the frictional term, only over the boiling
  length** — acceleration and gravity have their own two-phase forms, and the
  subcooled entry is ordinary single-phase.
  *([3.5](lessons/03-05-two-phase-pressure-drop.md))*
- Use the **mean**-quality multiplier over a boiling length, not the exit value —
  the exit value overstates the friction by tens of percent.
  *([3.5](lessons/03-05-two-phase-pressure-drop.md))*
- $\phi_{lo}^2$ (total flow as liquid-*only*) is not Martinelli's $\phi_f^2$
  (liquid *fraction* flowing). Different denominators, silent factor-of-several
  error.
  *([3.5](lessons/03-05-two-phase-pressure-drop.md))*
- More void does not always mean more pressure drop: gravity runs the other way,
  and in natural circulation that relief is the *point*.
  *([3.5](lessons/03-05-two-phase-pressure-drop.md))*

### Boiling

- A hotter surface means more heat **only on the nucleate branch**. In transition
  boiling $q''$ *falls* as $\Delta T_e$ rises; in film boiling the wall is
  scalding and passes little flux.
  *([3.1](lessons/03-01-boiling-curve-pool-boiling-regimes.md))*
- Film boiling is not "vigorous boiling" — it is a continuous insulating vapor
  blanket, the opposite.
  *([3.1](lessons/03-01-boiling-curve-pool-boiling-regimes.md))*
- The CHF cliff comes from the **boundary condition**, not from boiling: only a
  flux-controlled surface must jump. A temperature-controlled one traverses the
  peak smoothly.
  *([3.1](lessons/03-01-boiling-curve-pool-boiling-regimes.md))*
- "Single-phase PWR" describes the **bulk**. The wall routinely exceeds $T_{sat}$
  in the hot upper channel, and subcooled boiling there is expected, not a fault.
  *([3.2](lessons/03-02-onset-nucleate-boiling-subcooled.md))*
- ONB is *not* where the bulk reaches $T_{sat}$ — in a PWR the bulk never does. It
  is where the **wall** first beats $T_{sat}$ by the onset superheat, tens of
  kelvin earlier.
  *([3.2](lessons/03-02-onset-nucleate-boiling-subcooled.md))*
- Subcooled boiling by itself is benign and even helpful (the wall superheat pins
  and $h$ soars); the hazard is downstream at CHF.
  *([3.2](lessons/03-02-onset-nucleate-boiling-subcooled.md))*
- At reactor pressure ONB needs about 1 K of superheat, not several — high
  $\rho_g$ and $h_{fg}$ with low $\sigma$ make nucleation cheap.
  *([3.2](lessons/03-02-onset-nucleate-boiling-subcooled.md))*

### Quality, void, and regime

- $x = 15\%$ does not mean steam fills 15 percent of the pipe — it fills nearly 80
  percent. Always ask **mass or volume?**
  *([3.3](lessons/03-03-quality-void-fraction-slip.md))*
- A negative $x_e$ is a legitimate enthalpy coordinate ("bulk still subcooled"),
  not negative steam; real flowing quality never goes below zero.
  *([3.3](lessons/03-03-quality-void-fraction-slip.md), [3.2](lessons/03-02-onset-nucleate-boiling-subcooled.md))*
- Slip **lowers** void, it doesn't raise it. The homogeneous $S=1$ model is the
  *upper* bound on $\alpha$.
  *([3.3](lessons/03-03-quality-void-fraction-slip.md))*
- Quality alone doesn't fix the regime — the map is 2-D in $(G, x)$, and it
  assumes vertical up-flow. Horizontal channels stratify.
  *([3.4](lessons/03-04-two-phase-flow-regimes.md))*
- Void fraction (a scalar, *how much*) and flow regime (a geometry, *how
  arranged*) are different questions; the geometry is what decides how the wall is
  cooled.
  *([3.4](lessons/03-04-two-phase-flow-regimes.md))*
- Do not import DNB intuition into annular flow: DNB is *too much* vapor at the
  wall at low quality; dryout is *too little* liquid at high quality.
  *([3.4](lessons/03-04-two-phase-flow-regimes.md), [3.6](lessons/03-06-critical-heat-flux-dnb.md))*

### Margins and safety

- You design against the **ratio**, not the temperature: a pin at a comfortable
  320 °C can still have a dangerously low DNBR.
  *([3.6](lessons/03-06-critical-heat-flux-dnb.md))*
- Minimum DNBR sits **downstream of the flux peak**, where a still-high flux meets
  an already-degraded CHF.
  *([3.6](lessons/03-06-critical-heat-flux-dnb.md))*
- CHF and fuel melting are different limits at different radii, and in a PWR the
  boiling crisis strikes first — which is why the license is written on DNBR.
  *([3.6](lessons/03-06-critical-heat-flux-dnb.md))*
- A DNBR margin does **not** protect you in a large-break LOCA: the channel is
  steam, not water, and PCT is the governing number.
  *([4.6](lessons/04-06-loca-thermal-margins.md))*
- The 1204 °C limit is not about melting (zirconium melts near 1850 °C) — the clad
  can be destroyed by steam oxidation and embrittlement while still solid.
  *([4.6](lessons/04-06-loca-thermal-margins.md))*
- Scram stops *fission*, not *heat*. Decay heat is a few percent of full power for
  days; Fukushima was a heat-removal failure, not a criticality accident.
  *([4.5](lessons/04-05-decay-heat-after-shutdown.md), [4.6](lessons/04-06-loca-thermal-margins.md))*
- Decay heat is a **power law**, not an exponential, and it never reaches zero —
  a few tenths of a percent of a gigawatt core is still megawatts.
  *([4.5](lessons/04-05-decay-heat-after-shutdown.md))*
- Never quote a bare decay-heat percentage: correlations disagree by tens of
  percent early on, and the value depends on $t_0$ and burnup. Name your source
  and bias high.
  *([4.5](lessons/04-05-decay-heat-after-shutdown.md))*

### Natural circulation and stability

- $H$ is the elevation between the heated and cooled **mid-planes**, not the core
  height — which is why passive plants put their heat sinks up high.
  *([4.1](lessons/04-01-natural-circulation-driving-head.md))*
- Natural circulation barely responds to load: $G \propto q^{1/3}$ while
  $\Delta T \propto q^{2/3}$, so it copes by getting hotter, not by flowing faster.
  *([4.1](lessons/04-01-natural-circulation-driving-head.md))*
- Gravity moved sides of the equation: in forced flow the elevation term is a cost
  the pump pays; in natural circulation the hot/cold *difference* is the driver.
  $R_{loop}$ is friction + form only — don't double-count gravity.
  *([4.1](lessons/04-01-natural-circulation-driving-head.md))*
- Less flow means less pressure drop in a *cold pipe only*. A boiling channel
  demands **more** when you slow it — that single reversal is the origin of both
  instabilities.
  *([4.2](lessons/04-02-flow-stability.md))*
- Ledinegg and density waves are cousins, not twins: one is static and needs only
  the curve's shape; the other is dynamic and needs the transit-time lag, and can
  ring on a positively-sloped branch.
  *([4.2](lessons/04-02-flow-stability.md))*
- The criterion compares *slopes*, $\partial\Delta p_{ch}/\partial G$ against
  $\partial\Delta p_{sup}/\partial G$. "Unstable wherever the channel slopes down"
  is the flat-supply special case.
  *([4.2](lessons/04-02-flow-stability.md))*

### Feedback

- "The temperature coefficient" is a *sum* of effects on different clocks. A fine
  Doppler term cannot paper over a large positive void term.
  *([4.3](lessons/04-03-reactivity-feedback-coefficients.md), [4.4](lessons/04-04-coupled-th-neutronic-feedback.md))*
- A negative void coefficient limits *power*; it does not keep the wall wet. DNB
  and dryout are heat-transfer failures indifferent to reactivity.
  *([4.3](lessons/04-03-reactivity-feedback-coefficients.md))*
- Void coefficients are not automatically negative — the sign follows the
  material's neutronic role. Separate the moderator from the coolant and voiding
  removes an *absorber*.
  *([4.3](lessons/04-03-reactivity-feedback-coefficients.md))*
- Negative feedback holds the *reactivity balance*, not the power. Stability means
  it returns to balance, not that the balance never moves.
  *([4.4](lessons/04-04-coupled-th-neutronic-feedback.md))*
- Feedback cannot act faster than the temperature it rides on. Above prompt
  critical ($\rho_{ext} > \beta$) no thermal feedback is fast enough.
  *([4.4](lessons/04-04-coupled-th-neutronic-feedback.md))*
