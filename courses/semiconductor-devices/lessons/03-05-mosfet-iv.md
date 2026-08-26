# Semiconductor Devices · Lesson 3.5: The MOSFET I–V

> ⏱ ~15 min · Module 3: Transistors · Builds on: [3.4 Threshold voltage and the C–V curve](03-04-threshold-voltage-cv.md), [1.2 Drift, diffusion and the Einstein relation](01-02-drift-diffusion-einstein.md) · Unlocks: [3.6 Short-channel effects and scaling](03-06-short-channel-effects-scaling.md), [4.4 A taste of device fabrication](04-04-device-fabrication.md)

## Why this matters

[3.4](03-04-threshold-voltage-cv.md) ended with the inversion charge: $Q_{inv} = C_{ox}(V_{GS}-V_T)$. Add a source and a drain, apply a voltage between them, and that charge moves. This lesson turns it into current.

The result — the square-law model — is the equation every circuit designer carries. It explains why a MOSFET saturates, where transconductance comes from, and why the device is a nearly ideal voltage-controlled current source. It is also, for any transistor made in the last twenty years, **wrong** — and understanding exactly which assumption fails is the bridge to [3.6](03-06-short-channel-effects-scaling.md).

## The idea

The channel is a resistor whose conductance you control with the gate. At small drain voltage that is literally all it is: current is proportional to $V_{DS}$, and the slope is set by how much charge the gate put in the channel.

But the channel is not a uniform resistor, because the *gate-to-channel* voltage varies along it. At the source end the channel sees the full $V_{GS}$. At the drain end it sees only $V_{GS}-V_{DS}$, because the channel itself is at $V_{DS}$ there. So the inversion charge is thickest at the source and thinnest at the drain — a wedge, not a slab.

Raise $V_{DS}$ and the drain end gets thinner. When $V_{DS}$ reaches $V_{GS}-V_T$, the gate-to-channel voltage at the drain end equals the threshold exactly, and the inversion charge there goes to zero. The channel is [pinched off](../reference.md#pinch-off).

What happens beyond that is the part worth getting right, because the naive reading is wrong. The current does *not* stop. Carriers arriving at the pinch-off point are swept across the small high-field depletion region beyond it — exactly as minority carriers are swept across a reverse-biased junction in [3.1](03-01-bjt-transistor-action.md). The pinch-off point simply moves slightly toward the source as $V_{DS}$ rises further, and the voltage across the *inverted* part of the channel stays clamped at $V_{GS}-V_T$.

So the current stops depending on $V_{DS}$ and depends only on $V_{GS}$. **That is saturation, and it is what makes the MOSFET an amplifier** — the output is a current source, its value commanded by the input voltage, and its output resistance is high.

The whole derivation rests on one approximation, the **gradual channel approximation**: the field along the channel is much weaker than the field across the oxide, so the vertical problem (how much charge the gate induces) and the horizontal problem (how it drifts) can be solved separately. That approximation is what breaks in a short channel.

## The formal version

**Setup.** An $n$-channel MOSFET of channel length $L$ and width $W$. Source at 0 V, gate at $V_{GS}$, drain at $V_{DS}$, body at 0 V.

**Channel charge varies along the channel.** Let $V(y)$ be the channel potential at position $y$ from the source ($V(0)=0$, $V(L)=V_{DS}$). The local gate-to-channel voltage is $V_{GS}-V(y)$, so

$$|Q_{inv}(y)| = C_{ox}\left[V_{GS}-V(y)-V_T\right].$$

*In words: the channel is thinner wherever its own potential is higher.*

**Drift current.** The channel current is charge times velocity times width, with $v = \mu_n\mathcal{E} = \mu_n\,dV/dy$:

$$I_D = W|Q_{inv}(y)|\,\mu_n\frac{dV}{dy} = W\mu_nC_{ox}\left[V_{GS}-V(y)-V_T\right]\frac{dV}{dy}.$$

$I_D$ is the same at every $y$ (charge conservation — nowhere for current to go), so separate and integrate from source to drain:

$$I_D\int_0^Ldy = W\mu_nC_{ox}\int_0^{V_{DS}}\left[V_{GS}-V-V_T\right]dV,$$

$$\boxed{\;I_D = \mu_nC_{ox}\frac{W}{L}\left[(V_{GS}-V_T)V_{DS}-\frac{V_{DS}^2}{2}\right] \qquad (V_{DS}\le V_{GS}-V_T).\;}$$

*In words: the current is the average channel charge times the drift field, and the $V_{DS}^2/2$ term is the correction for the channel thinning toward the drain.*

**Linear (triode) region.** For $V_{DS}\ll V_{GS}-V_T$, drop the quadratic term:

$$I_D \approx \mu_nC_{ox}\frac{W}{L}(V_{GS}-V_T)V_{DS} \quad\Longrightarrow\quad R_{on} = \frac{1}{\mu_nC_{ox}\frac{W}{L}(V_{GS}-V_T)}.$$

*In words: a gate-controlled resistor.* This is the regime in which a MOSFET is used as a switch, and $R_{on}$ is the number on a power-MOSFET datasheet.

**Saturation.** The expression above peaks at $V_{DS} = V_{GS}-V_T\equiv V_{ov}$ (the **overdrive voltage**), where $dI_D/dV_{DS}=0$. Beyond that the channel is pinched off and the current holds:

$$\boxed{\;I_{D,\rm sat} = \frac{\mu_nC_{ox}}{2}\frac{W}{L}(V_{GS}-V_T)^2 \qquad (V_{DS}\ge V_{ov}).\;}$$

*In words: in saturation the drain current is quadratic in gate overdrive and independent of drain voltage.*

The quantity $\mu_nC_{ox}$ is the **process transconductance parameter** $k'$ (units A/V²), and $k'W/L$ is the **device transconductance parameter**. Everything the designer controls is in $W/L$; everything the fab controls is in $k'$ and $V_T$.

**Transconductance.**

$$g_m = \frac{\partial I_{D}}{\partial V_{GS}}\bigg|_{\rm sat} = \mu_nC_{ox}\frac{W}{L}(V_{GS}-V_T) = \frac{2I_D}{V_{ov}} = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D}.$$

*In words: transconductance is twice the current divided by the overdrive — and it grows only as $\sqrt{I_D}$.* This is a decisive contrast with the BJT, where $g_m = I_C/V_T^{\rm therm}$ is *linear* in current and needs no width at all. At 1 mA a BJT gives $g_m = 38.6$ mS; a MOSFET needs a large $W/L$ and a small overdrive to come close, and even then cannot beat it. **That is why bipolars still win in precision analog.**

**Channel-length modulation.** In reality the pinch-off point moves toward the source as $V_{DS}$ rises, shortening the effective channel:

$$I_D = \frac{\mu_nC_{ox}}{2}\frac{W}{L}(V_{GS}-V_T)^2\left(1+\lambda V_{DS}\right),$$

with $\lambda\approx1/(L\cdot\text{const})$ — so **short channels have large $\lambda$ and poor output resistance**. The output resistance and intrinsic gain are

$$r_o = \frac{1}{\lambda I_D}, \qquad A_v^{\max} = g_mr_o = \frac{2}{\lambda V_{ov}}.$$

Note this is the MOSFET's analogue of the Early effect ([3.2](03-02-bjt-currents-and-gain.md)), with $1/\lambda$ playing the role of $V_A$. Typical values give $A_v^{\max}$ of 10–50 in a modern short-channel process — **two orders of magnitude below a BJT's**, which is the single biggest reason analog design got harder as CMOS scaled.

**Body effect in the I–V.** With $V_{SB}>0$, use the $V_T(V_{SB})$ of [3.4](03-04-threshold-voltage-cv.md). Everything else is unchanged.

**Subthreshold conduction.** Below $V_T$ the channel is weakly inverted, and current is carried by **diffusion**, not drift — the device becomes a BJT-like exponential element:

$$I_D \propto e^{qV_{GS}/nk_BT}, \qquad S \equiv \frac{dV_{GS}}{d(\log_{10}I_D)} = n\,\frac{k_BT}{q}\ln10 \ \ge 60\ \mathrm{mV/decade}.$$

*In words: below threshold, the current falls by at most a factor of ten for every 60 mV — and no thicker oxide, better material or cleverer geometry can beat that.* The 60 mV floor is the Boltzmann tail of [2.2](02-02-ideal-diode-equation.md) again, and $n = 1+C_{dep}/C_{ox}$ measures how well the gate controls the surface compared with the body. [3.6](03-06-short-channel-effects-scaling.md) shows why that floor is the central problem of modern CMOS.

**Where the square law fails.** Four assumptions, each of which breaks in a modern device:

| Assumption | Fails when | Consequence |
|---|---|---|
| Gradual channel (vertical field ≫ lateral) | $L$ small, $V_{DS}$ large | 2-D electrostatics, DIBL |
| Constant mobility | vertical field large | mobility degradation, $\mu_{\rm eff}$ falls |
| $v = \mu\mathcal{E}$ (no saturation) | $\mathcal{E}>10^4$ V/cm | **velocity saturation**: $I_D\propto V_{ov}$, not $V_{ov}^2$ |
| $V_T$ independent of $L$, $V_{DS}$ | short $L$ | $V_T$ roll-off, DIBL |

The third is the big one. A 1 V drop across a 30 nm channel is $3\times10^5$ V/cm — thirty times the critical field of [1.2](01-02-drift-diffusion-einstein.md). Carriers move at $v_{\rm sat}$ throughout, and

$$I_{D,\rm sat} \approx W C_{ox}(V_{GS}-V_T)\,v_{\rm sat},$$

**linear in overdrive and independent of $L$.** Every transistor in a modern processor obeys this, not the square law. The square law survives in textbooks, in long-channel analog devices, and as intuition — but a designer sizing a 5 nm logic transistor is using the velocity-saturated form.

## Picture

![A two-panel figure. Left: a MOSFET cross-section showing gate, oxide, source and drain, with the inversion channel drawn as a wedge that is thick at the source and tapers to nothing at the drain end, illustrating pinch-off, and the depletion region beyond the pinch-off point where carriers are swept across. Right: the output characteristics, drain current against drain-source voltage for several gate voltages, showing the parabolic triode region, the boundary parabola V_DS = V_GS minus V_T marked as a dashed curve, and the flat saturation region with a slight upward slope from channel-length modulation.](assets/03-05-fig1.svg)

Left: the wedge is the whole derivation. The channel is thinner at the drain because the gate-to-channel voltage is smaller there, and when that voltage reaches $V_T$ the wedge closes — pinch-off. Beyond the pinch-off point the carriers are not stopped; they are swept across a short high-field region, exactly as at a reverse-biased junction.

Right: the resulting characteristics. Each curve is a parabola until it hits the dashed boundary $V_{DS} = V_{GS}-V_T$, then flattens. The slight upward tilt in saturation is channel-length modulation, and its slope is $1/r_o$ — the thing that limits a MOSFET's voltage gain.

## Worked examples

**Example 1 (a complete device calculation).** An $n$-MOSFET has $t_{ox} = 10$ nm, $\mu_n = 500\ \mathrm{cm^2/V\cdot s}$ (surface mobility, reduced from the bulk value), $V_T = 0.7$ V, $W = 10\ \mu$m, $L = 1\ \mu$m. Find $k'$, then $I_D$ at $V_{GS} = 2$ V for $V_{DS} = 0.2$ V and $V_{DS} = 3$ V, and the transconductance.

*Process transconductance.*

$$C_{ox} = \frac{3.45\times10^{-13}}{10^{-6}} = 3.45\times10^{-7}\ \mathrm{F/cm^2},$$

$$k' = \mu_nC_{ox} = (500)(3.45\times10^{-7}) = 1.725\times10^{-4}\ \mathrm{A/V^2} = 172.5\ \mu\mathrm{A/V^2}.$$

*Overdrive.* $V_{ov} = V_{GS}-V_T = 2-0.7 = 1.3$ V.

*At $V_{DS} = 0.2$ V* (since $0.2 < 1.3$, triode):

$$I_D = (1.725\times10^{-4})(10)\left[(1.3)(0.2)-\frac{0.04}{2}\right] = (1.725\times10^{-3})[0.26-0.02] = (1.725\times10^{-3})(0.24)$$

$$= 4.14\times10^{-4}\ \mathrm{A} = 414\ \mu\mathrm{A}.$$

*Effective on-resistance:* $R = V_{DS}/I_D = 0.2/4.14\times10^{-4} = 483\ \Omega$.

*At $V_{DS} = 3$ V* (since $3 > 1.3$, saturation):

$$I_{D,\rm sat} = \frac{1.725\times10^{-4}}{2}(10)(1.3)^2 = (8.625\times10^{-4})(1.69) = 1.458\times10^{-3}\ \mathrm{A} = 1.46\ \mathrm{mA}.$$

*Transconductance.*

$$g_m = k'\frac{W}{L}V_{ov} = (1.725\times10^{-4})(10)(1.3) = 2.24\times10^{-3}\ \mathrm{S} = 2.24\ \mathrm{mS}.$$

*Compare a BJT at the same current.* $g_m^{\rm BJT} = I_C/V_T^{\rm therm} = 1.458\times10^{-3}/0.0259 = 56.3$ mS — **25 times larger**. To match it, this MOSFET would need $W/L$ raised by $25^2 = 625$ (since $g_m\propto\sqrt{W/L}$ at fixed current), i.e. $W = 6.25$ mm. That is the price of a voltage-controlled device with no input current, and it is why op-amp input stages were bipolar for decades and why CMOS ones need large devices.

**Example 2 (when the square law stops working).** Shrink the same device to $L = 50$ nm, keeping $W/L = 10$, $V_T = 0.35$ V, $t_{ox} = 2$ nm, and operate at $V_{GS} = 1.0$ V. Compare the square-law and velocity-saturated predictions.

*Parameters.* $C_{ox} = 3.45\times10^{-13}/(2\times10^{-7}) = 1.725\times10^{-6}\ \mathrm{F/cm^2}$. Take $\mu_n = 300\ \mathrm{cm^2/V\cdot s}$ (heavily degraded by the high vertical field).

$$k' = (300)(1.725\times10^{-6}) = 5.175\times10^{-4}\ \mathrm{A/V^2}, \qquad V_{ov} = 1.0-0.35 = 0.65\ \mathrm{V}.$$

*Square-law prediction.*

$$I_{D,\rm sat} = \frac{5.175\times10^{-4}}{2}(10)(0.65)^2 = (2.588\times10^{-3})(0.4225) = 1.09\times10^{-3}\ \mathrm{A} = 1.09\ \mathrm{mA}.$$

*Check the field.* At saturation the channel drops $V_{ov} = 0.65$ V over $L = 50$ nm:

$$\mathcal{E} = \frac{0.65}{50\times10^{-7}\ \mathrm{cm}} = 1.3\times10^{5}\ \mathrm{V/cm}.$$

That is **13 times** the ~$10^4$ V/cm critical field of [1.2](01-02-drift-diffusion-einstein.md). The carriers are firmly velocity-saturated, and $v = \mu\mathcal{E}$ is badly wrong: it would predict $v = (300)(1.3\times10^5) = 3.9\times10^7$ cm/s, four times the physical limit $v_{\rm sat} = 10^7$ cm/s.

*Velocity-saturated prediction.*

$$I_{D,\rm sat} = WC_{ox}V_{ov}v_{\rm sat} = (0.5\times10^{-4}\ \mathrm{cm})(1.725\times10^{-6})(0.65)(10^{7}) = 5.61\times10^{-4}\ \mathrm{A} = 0.56\ \mathrm{mA},$$

using $W = 10L = 0.5\ \mu$m.

**The square law overpredicts by 1.9×.** And the errors compound: it also gets the *shape* wrong — predicting $I\propto V_{ov}^2$ when the truth is $I\propto V_{ov}$, and predicting $I\propto1/L$ when the truth is $L$-independent.

*The consequences for design, which are large:*

- **Shrinking $L$ stops buying current.** In the square law, halving $L$ doubles $I_D$; under velocity saturation it does nothing for drive at all (though it still halves the gate capacitance, so speed still improves — just linearly rather than quadratically).
- **Transconductance saturates.** $g_m = \partial I_D/\partial V_{GS} = WC_{ox}v_{\rm sat}$, **independent of overdrive**. Driving the gate harder stops helping.
- **The classic analog sizing intuition breaks.** "Increase $V_{ov}$ for more $g_m$" is a square-law reflex that fails; in velocity saturation $g_m$ is fixed by width and oxide alone.

This is why circuit design texts written before about 1995 and after about 2005 read differently, and why modern analog designers work with $g_m/I_D$ methodology and simulated device tables rather than closed-form equations. **The square law is now a teaching device and an intuition pump, not a design tool.**

## Watch out

- **You might think pinch-off stops the current.** It does not — the carriers are swept across the pinched region by its high field, exactly like minority carriers at a reverse-biased junction. Pinch-off makes the current *independent of $V_{DS}$*, which is a completely different statement.
- **You might use bulk mobility.** Channel carriers are pressed against the oxide by the vertical field and scatter off the interface, so $\mu_{\rm eff}$ is typically 2–4× below the bulk value and falls further as $V_{GS}$ rises. Always use a surface mobility.
- **You might apply the square law to a modern transistor.** Anything below about 0.25 µm operates in velocity saturation, where $I_D\propto V_{ov}$ and is nearly independent of $L$. Check $V_{ov}/L$ against $10^4$ V/cm before trusting the formula.
- **You might forget the body effect when the source is not at ground.** In a cascode or a stacked gate, $V_{SB}>0$ raises $V_T$ ([3.4](03-04-threshold-voltage-cv.md)) and reduces the overdrive — often by more than you expect.
- **You might expect subthreshold current to be negligible.** With $S = 80$ mV/decade and $V_T = 0.35$ V, the off-current is only about $10^{-4.4}$ of the on-current — and multiplied by a billion transistors, that is the dominant power consumption of an idle chip.

## One-liner

> The gate sets the channel charge and the drain voltage tilts it into a wedge; pinch it off and the current stops caring about $V_{DS}$ — giving a square law that every circuit designer learns and every modern transistor violates.

## Problems

**P1 (🟢)** An $n$-MOSFET has $k' = 200\ \mu\mathrm{A/V^2}$, $W/L = 20$, $V_T = 0.5$ V, operated at $V_{GS} = 1.5$ V. (a) Find $V_{ov}$ and the saturation boundary $V_{DS,\rm sat}$. (b) Find $I_D$ at $V_{DS} = 0.5$ V. (c) Find $I_D$ at $V_{DS} = 2$ V. (d) Find $g_m$ in saturation.

**P2 (🟡)** A MOSFET with $t_{ox} = 8$ nm, $\mu_n = 450\ \mathrm{cm^2/V\cdot s}$, $L = 0.5\ \mu$m, $W = 5\ \mu$m, $V_T = 0.6$ V is biased at $I_D = 200\ \mu$A in saturation. (a) Find $k'$ and the required $V_{ov}$ and $V_{GS}$. (b) Find $g_m$. (c) With $\lambda = 0.1\ \mathrm{V^{-1}}$, find $r_o$ and the intrinsic gain. (d) Compare that gain with a BJT at the same current and $V_A = 80$ V.

**P3 (🔴)** A device has $L = 100$ nm, $t_{ox} = 2.5$ nm, $W = 1\ \mu$m, $V_T = 0.4$ V, $\mu_n = 250\ \mathrm{cm^2/V\cdot s}$, $v_{\rm sat} = 10^7$ cm/s, operated at $V_{GS} = 1.2$ V. (a) Compute $I_{D,\rm sat}$ from the square law. (b) Compute it from the velocity-saturated expression. (c) Find the overdrive at which the two predictions cross, and interpret. (d) Compute $g_m$ under each model and comment on the design implication.

<details>
<summary>Solutions</summary>

**P1** (a) $$V_{ov} = 1.5-0.5 = 1.0\ \mathrm{V} = V_{DS,\rm sat}.$$

(b) $V_{DS} = 0.5 < 1.0$, so triode:

$$I_D = k'\frac{W}{L}\left[V_{ov}V_{DS}-\frac{V_{DS}^2}{2}\right] = (200\times10^{-6})(20)\left[(1.0)(0.5)-\frac{0.25}{2}\right]$$
$$= (4\times10^{-3})(0.5-0.125) = (4\times10^{-3})(0.375) = 1.50\times10^{-3}\ \mathrm{A} = 1.50\ \mathrm{mA}.$$

(c) $V_{DS} = 2 > 1.0$, saturation:

$$I_D = \frac{k'}{2}\frac{W}{L}V_{ov}^2 = \frac{200\times10^{-6}}{2}(20)(1.0)^2 = 2.0\times10^{-3}\ \mathrm{A} = 2.0\ \mathrm{mA}.$$

(d) $$g_m = k'\frac{W}{L}V_{ov} = (200\times10^{-6})(20)(1.0) = 4.0\times10^{-3}\ \mathrm{S} = 4.0\ \mathrm{mS}.$$

(Check: $g_m = 2I_D/V_{ov} = 2(2.0\times10^{-3})/1.0 = 4.0$ mS ✓.)

**P2** (a) $$C_{ox} = \frac{3.45\times10^{-13}}{8\times10^{-7}} = 4.3125\times10^{-7}\ \mathrm{F/cm^2}, \qquad k' = (450)(4.3125\times10^{-7}) = 1.941\times10^{-4}\ \mathrm{A/V^2}.$$

$W/L = 5/0.5 = 10$. From $I_D = \tfrac{k'}{2}\tfrac{W}{L}V_{ov}^2$:

$$V_{ov} = \sqrt{\frac{2I_D}{k'(W/L)}} = \sqrt{\frac{2(2\times10^{-4})}{(1.941\times10^{-4})(10)}} = \sqrt{\frac{4\times10^{-4}}{1.941\times10^{-3}}} = \sqrt{0.2061} = 0.454\ \mathrm{V}.$$

$$V_{GS} = 0.6+0.454 = 1.054\ \mathrm{V}.$$

(b) $$g_m = \frac{2I_D}{V_{ov}} = \frac{2(2\times10^{-4})}{0.454} = 8.81\times10^{-4}\ \mathrm{S} = 0.881\ \mathrm{mS}.$$

(c) $$r_o = \frac{1}{\lambda I_D} = \frac{1}{(0.1)(2\times10^{-4})} = 5.0\times10^{4}\ \Omega = 50\ \mathrm{k\Omega},$$

$$A_v = g_mr_o = (8.81\times10^{-4})(5\times10^{4}) = 44.$$

(d) BJT at $I_C = 200\ \mu$A with $V_A = 80$ V:

$$g_m = \frac{I_C}{V_T^{\rm therm}} = \frac{2\times10^{-4}}{0.0259} = 7.72\times10^{-3}\ \mathrm{S} = 7.72\ \mathrm{mS},$$
$$r_o = \frac{V_A}{I_C} = \frac{80}{2\times10^{-4}} = 4.0\times10^{5}\ \Omega,$$
$$A_v = \frac{V_A}{V_T^{\rm therm}} = \frac{80}{0.0259} = 3089.$$

**The BJT's intrinsic gain is 70 times higher** (3089 vs 44), from 8.8× the transconductance and 8× the output resistance. At the same current and with no width penalty.

This is the fundamental analog trade. The MOSFET's compensating advantages — zero input current, perfect switching, and the fact that you can put a billion of them on a chip — are why CMOS won anyway, and why precision analog blocks (bandgap references, low-noise amplifiers, high-gain op-amps) are the last places where bipolar devices survive, often on the same die in a BiCMOS process.

**P3** (a) $$C_{ox} = \frac{3.45\times10^{-13}}{2.5\times10^{-7}} = 1.38\times10^{-6}\ \mathrm{F/cm^2}, \qquad k' = (250)(1.38\times10^{-6}) = 3.45\times10^{-4}\ \mathrm{A/V^2}.$$

$W/L = 1\ \mu\mathrm{m}/0.1\ \mu\mathrm{m} = 10$, $V_{ov} = 1.2-0.4 = 0.8$ V.

$$I_{D,\rm sat}^{\rm sq} = \frac{3.45\times10^{-4}}{2}(10)(0.8)^2 = (1.725\times10^{-3})(0.64) = 1.104\times10^{-3}\ \mathrm{A} = 1.10\ \mathrm{mA}.$$

(b) $$I_{D,\rm sat}^{\rm vsat} = WC_{ox}V_{ov}v_{\rm sat} = (10^{-4})(1.38\times10^{-6})(0.8)(10^{7}) = 1.104\times10^{-3}\ \mathrm{A}.$$

Remarkably, **1.10 mA both ways** — the two models happen to agree exactly at this operating point.

(c) Setting the two equal:

$$\frac{\mu_nC_{ox}}{2}\frac{W}{L}V_{ov}^2 = WC_{ox}V_{ov}v_{\rm sat} \quad\Longrightarrow\quad V_{ov} = \frac{2Lv_{\rm sat}}{\mu_n} = \frac{2(10^{-5})(10^{7})}{250} = 0.8\ \mathrm{V}.$$

So the crossover is at $V_{ov} = 0.8$ V — exactly the operating point chosen, which is why they matched.

*Interpretation.* The crossover condition is $V_{ov}/L = 2v_{\rm sat}/\mu_n = 2\times10^4$ V/cm — that is, the average channel field equals twice the critical field $v_{\rm sat}/\mu_n$. Below that overdrive, carriers are not yet saturated and the square law is closer; above it, they are, and the linear model is closer. **The correct current is always the *smaller* of the two predictions**, and a standard interpolating model is

$$I_D = \frac{I^{\rm sq}}{1+V_{ov}/(V_{ov}+2Lv_{\rm sat}/\mu_n)}\ \ \text{or similar},$$

which is what circuit simulators actually use.

(d) *Square law:* $g_m = k'\frac{W}{L}V_{ov} = (3.45\times10^{-4})(10)(0.8) = 2.76\times10^{-3}$ S = 2.76 mS.

*Velocity saturated:* $g_m = WC_{ox}v_{\rm sat} = (10^{-4})(1.38\times10^{-6})(10^{7}) = 1.38\times10^{-3}$ S = 1.38 mS.

**A factor of two apart, and — crucially — with completely different dependences.**

The design implication is the important part. Under the square law, $g_m\propto V_{ov}$, so raising the gate voltage buys transconductance and the designer trades headroom for gain. Under velocity saturation, $g_m = WC_{ox}v_{\rm sat}$ is **independent of both $V_{ov}$ and $L$** — it depends only on the device width and the oxide capacitance. Raising the gate drive buys nothing.

So in a short-channel process:

- More $g_m$ comes only from more **width** (more area, more capacitance, more power) or a **thinner oxide** (which is why high-$\kappa$ dielectrics were adopted — see [3.6](03-06-short-channel-effects-scaling.md)).
- Running at high overdrive wastes headroom for no gain, so modern analog design biases at *low* overdrive — often in weak or moderate inversion, where $g_m/I_D$ is highest.

That shift, from "bias hard for gain" to "bias weakly for efficiency", is one of the clearest fingerprints of the velocity-saturated era in circuit design practice.

</details>

## Flashback

**From Lesson 3.4 (Threshold voltage and the C–V curve):** A MOSFET has $V_{T0} = 0.5$ V, $\gamma = 0.4\ \sqrt{\mathrm{V}}$, $2\phi_F = 0.8$ V, $k'W/L = 2\ \mathrm{mA/V^2}$, and $V_{GS} = 1.8$ V. (a) Find $I_{D,\rm sat}$ with the source grounded. (b) The source is lifted to $V_{SB} = 1.0$ V while the gate stays at 1.8 V absolute. Find the new $V_T$, the new $V_{GS}$, and the new $I_{D,\rm sat}$. (c) Comment.

<details>
<summary>Solution</summary>

(a) $V_{ov} = 1.8-0.5 = 1.3$ V:

$$I_{D,\rm sat} = \frac{1}{2}(2\times10^{-3})(1.3)^2 = (10^{-3})(1.69) = 1.69\ \mathrm{mA}.$$

(b) $$V_T(1.0) = 0.5+0.4\left(\sqrt{0.8+1.0}-\sqrt{0.8}\right) = 0.5+0.4(1.3416-0.8944) = 0.5+0.4(0.4472) = 0.679\ \mathrm{V}.$$

The gate is at 1.8 V *absolute*, but the source is now at 1.0 V, so

$$V_{GS} = 1.8-1.0 = 0.8\ \mathrm{V}, \qquad V_{ov} = 0.8-0.679 = 0.121\ \mathrm{V},$$

$$I_{D,\rm sat} = \frac{1}{2}(2\times10^{-3})(0.121)^2 = (10^{-3})(0.01464) = 14.6\ \mu\mathrm{A}.$$

(c) The current fell from **1.69 mA to 14.6 µA — a factor of 116.**

Two effects compounded, and it is worth separating them:

- Lifting the source cost 1.0 V of $V_{GS}$ directly, taking the overdrive from 1.3 V to 0.3 V — a factor of $(1.3/0.3)^2 = 18.8$ on its own.
- The body effect then added 179 mV to $V_T$, cutting the overdrive further from 0.3 V to 0.121 V — another factor of $(0.3/0.121)^2 = 6.1$.

Together, $18.8\times6.1 = 115$ ✓.

Notice that the *second* effect, which the naive analysis would omit entirely, is worth a factor of six on its own. This is exactly what happens to the upper transistor of a stacked logic gate, and it is why stack height is limited, why stacked devices are drawn wider, and why FinFETs — with $\gamma\approx0$ — were such a relief for digital design.

</details>

## Connections

- **Backward:** the channel charge is [3.4](03-04-threshold-voltage-cv.md)'s $C_{ox}(V_{GS}-V_T)$; the drift transport and velocity saturation are [1.2](01-02-drift-diffusion-einstein.md); the sweeping of carriers past pinch-off is the same collection mechanism as a BJT's collector in [3.1](03-01-bjt-transistor-action.md).
- **Forward:** [3.6](03-06-short-channel-effects-scaling.md) takes every failing assumption listed above and turns it into the scaling story; [4.4](04-04-device-fabrication.md) shows how $L$, $W$ and $t_{ox}$ are actually made.
- **Sideways:** the channel-as-tapered-resistor integration is mathematically identical to compressible pipe flow choking at a throat in [`fluid-dynamics`](../../fluid-dynamics/syllabus.md) — in both cases raising the downstream pressure (voltage) stops increasing the flow once a critical condition is reached at one point.
