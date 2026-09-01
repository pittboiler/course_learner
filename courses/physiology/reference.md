# Human Physiology · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Ten organ systems, one idea: a controller correcting an error, spending ATP to
hold a variable where physics would not put it. The same handful of structures
recur at every scale — a flux is a driving force divided by a resistance, a
gradient is a battery someone paid for, a hairpin turns a small difference into
a large one, and every loop leaves a residual error because the error *is* the
drive. Use this card for the equations, for the numbers worth looking up rather
than half-remembering, and above all for the notation, because this course
recycles $R$, $C$, $P$, $E$, $\lambda$ and $m$ more aggressively than any other
in the library.

## Scope discipline

`physiology` owns **homeostatic control**, the **neuromuscular junction**,
**autonomic transmission**, **muscle**, and the **organ systems** (heart,
vessels, lungs, kidney, endocrine glands, gut, skin) — including how they
compete under load.

It **cedes**:

- the derivation of membrane potentials and of channel gating to
  [`biophysics`](../biophysics/syllabus.md);
- the neuron — Hodgkin–Huxley, cable theory, the central synapse, plasticity,
  sensory coding, motor circuits — to [`neuroscience`](../neuroscience/syllabus.md);
- receptor cascades and second messengers to
  [`molecular-cell-biology`](../molecular-cell-biology/syllabus.md);
- fuel pathways and buffer chemistry to [`biochemistry`](../biochemistry/syllabus.md).

**A ceded topic is still used freely here; it is just cited to its owner.** The
"Assumed, not taught here" table at the bottom is the full list of what this
course uses without deriving, and where to look each one up.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $G$, $L$ | open-loop gain; **signed** loop gain ($L = -G$ for negative feedback) | [1.1](lessons/01-01-homeostasis-feedback-control.md) |
| $d$, $\Delta$ | the disturbance with the loop switched off; the residual deviation left with it on | [1.1](lessons/01-01-homeostasis-feedback-control.md) |
| $\tau$ | a loop delay, and later any time constant (RC, membrane, Windkessel) | [1.1](lessons/01-01-homeostasis-feedback-control.md) |
| $J$ | flux — amount crossing unit area per unit time | [1.2](lessons/01-02-membrane-transport.md) |
| $P$ (membrane) | **permeability** in m/s, $P = KD_m/\Delta x$ | [1.2](lessons/01-02-membrane-transport.md) |
| $K$ (transport) | partition coefficient — solubility in oil over solubility in water | [1.2](lessons/01-02-membrane-transport.md) |
| $\sigma$ | reflection coefficient — the fraction of a solute the membrane bounces back | [1.2](lessons/01-02-membrane-transport.md) |
| $\pi$ | osmotic pressure; later **oncotic** pressure (the protein-only part) | [1.2](lessons/01-02-membrane-transport.md) · [2.3](lessons/02-03-hemodynamics-blood-pressure.md) |
| $T_m$, $K_m$ | transport maximum of a carrier population; half-saturating concentration | [1.2](lessons/01-02-membrane-transport.md) · [3.2](lessons/03-02-tubular-transport-concentrating-urine.md) |
| $V_m$ | membrane potential, always **inside minus outside** | [1.3](lessons/01-03-resting-membrane-potential.md) |
| $E_{ion}$ | equilibrium potential — the voltage at which that ion is content | [1.3](lessons/01-03-resting-membrane-potential.md) |
| $g_{ion}$ | conductance of one ion's open channels (siemens) | [1.3](lessons/01-03-resting-membrane-potential.md) |
| $V_m - E_{ion}$ | **driving force** — sign says which way, magnitude says how hard | [1.3](lessons/01-03-resting-membrane-potential.md) |
| $I_x$ | membrane current carried by mechanism $x$; **positive = outward** | [1.3](lessons/01-03-resting-membrane-potential.md) · [2.1](lessons/02-01-cardiac-electrophysiology.md) |
| $m$, $q$, $n$, $p$ | quantal content; quantal size (one MEPP); releasable vesicles; release probability | [1.5](lessons/01-05-neuromuscular-autonomic-transmission.md) |
| $V_{\text{rev}}$, SF | reversal potential of a mixed-cation channel; safety factor | [1.5](lessons/01-05-neuromuscular-autonomic-transmission.md) |
| $F_0$, $v_{\max}$, $a$, $b$ | isometric force; unloaded shortening velocity; Hill's two constants | [1.6](lessons/01-06-muscle-contraction.md) |
| $L$ (sarcomere), $T_{\text{rel}}$ | sarcomere length in μm; active tension as a fraction of maximum | [1.6](lessons/01-06-muscle-contraction.md) |
| $V_{\text{MDP}}$, $V_{\text{th}}$, $m$ (slope) | maximum diastolic potential; threshold; phase-4 slope in mV/s | [2.1](lessons/02-01-cardiac-electrophysiology.md) |
| $\theta$, ERP, $\lambda$ | conduction velocity; effective refractory period; re-entry **wavelength** $\theta\times$ERP | [2.1](lessons/02-01-cardiac-electrophysiology.md) |
| HR, SV, CO | heart rate, stroke volume, cardiac output ($\dot Q$ later) | [2.2](lessons/02-02-cardiac-cycle-and-output.md) |
| EDV, ESV, EF | end-diastolic and end-systolic volume; ejection fraction $SV/EDV$ | [2.2](lessons/02-02-cardiac-cycle-and-output.md) |
| $E_{es}$, $V_0$ | end-systolic elastance (mmHg/mL) and volume intercept — the ESPVR line | [2.2](lessons/02-02-cardiac-cycle-and-output.md) |
| $P_{ms}$, $P_{ra}$, $R_{VR}$ | mean systemic filling pressure; right atrial pressure; venous resistance | [2.2](lessons/02-02-cardiac-cycle-and-output.md) |
| $Q$, $R$, $C$ | volume flow; **vascular resistance**; **compliance** $\Delta V/\Delta P$ | [2.3](lessons/02-03-hemodynamics-blood-pressure.md) |
| MAP, PP, TPR | mean arterial pressure; pulse pressure; total peripheral resistance | [2.3](lessons/02-03-hemodynamics-blood-pressure.md) |
| $\eta$, Re | blood viscosity; Reynolds number $\rho v d/\eta$ | [2.3](lessons/02-03-hemodynamics-blood-pressure.md) |
| $K_f$, NFP, $J_v$ | filtration coefficient; net filtration pressure; volume flux across a capillary | [2.3](lessons/02-03-hemodynamics-blood-pressure.md) · [3.1](lessons/03-01-glomerular-filtration-clearance.md) |
| $P_A$, $P_{pl}$, $P_L$ | alveolar, intrapleural, and **transpulmonary** ($P_A - P_{pl}$) pressure | [2.4](lessons/02-04-ventilation-lung-mechanics.md) |
| $R_{aw}$, $T$ (lung) | airway resistance; **surface tension** of the alveolar film (N/m) | [2.4](lessons/02-04-ventilation-lung-mechanics.md) |
| $V_T$, $V_D$, $f$ | tidal volume; dead space; breathing frequency | [2.4](lessons/02-04-ventilation-lung-mechanics.md) |
| $\dot V_E$, $\dot V_A$ | minute ventilation $V_Tf$; **alveolar** ventilation $(V_T-V_D)f$ | [2.4](lessons/02-04-ventilation-lung-mechanics.md) |
| $F_{IO_2}$, $P_{IO_2}$, $P_{AO_2}$ | inspired oxygen fraction; inspired and **alveolar** oxygen tension | [2.5](lessons/02-05-gas-exchange-and-transport.md) |
| $R$ (respiratory) | **respiratory exchange ratio** $\dot V_{CO_2}/\dot V_{O_2}$, about 0.8 on a mixed diet | [2.5](lessons/02-05-gas-exchange-and-transport.md) · [4.3](lessons/04-03-exercise-integrative-physiology.md) |
| $P_{50}$, $n$ (Hill) | oxygen tension at half saturation (27 mmHg); Hill coefficient (~2.7) | [2.5](lessons/02-05-gas-exchange-and-transport.md) |
| $S_{aO_2}$, $C_{aO_2}$ | arterial **saturation** (a fraction) and arterial **content** (mL per dL) | [2.5](lessons/02-05-gas-exchange-and-transport.md) |
| $\dot V_A/\dot Q$ | ventilation–perfusion ratio of one lung unit; 0 is shunt, $\infty$ is dead space | [2.5](lessons/02-05-gas-exchange-and-transport.md) |
| $P_{GC}$, $P_{BS}$, $\pi_{GC}$ | glomerular capillary, Bowman's space, and plasma oncotic pressure | [3.1](lessons/03-01-glomerular-filtration-clearance.md) |
| $C_X$, $U_X$, $P_X$, $\dot V$ | clearance of X; **urine** concentration; **plasma** concentration; urine flow rate | [3.1](lessons/03-01-glomerular-filtration-clearance.md) |
| RPF, RBF, FF | renal plasma flow, renal blood flow, filtration fraction GFR/RPF | [3.1](lessons/03-01-glomerular-filtration-clearance.md) |
| $R_A$, $R_E$ | afferent and efferent arteriolar resistance — the two knobs | [3.1](lessons/03-01-glomerular-filtration-clearance.md) |
| $(\text{TF}/P)_X$ | tubular fluid over plasma concentration ratio for X | [3.2](lessons/03-02-tubular-transport-concentrating-urine.md) |
| $U_{\text{osm}}$, $C_{\text{osm}}$, $C_{\text{H}_2\text{O}}$ | urine osmolality; osmolar clearance; **free-water** clearance | [3.2](lessons/03-02-tubular-transport-concentrating-urine.md) |
| TBW, ICF, ECF | total body water; intracellular and extracellular fluid volumes | [3.3](lessons/03-03-fluid-electrolyte-acid-base.md) |
| AG | anion gap $[\text{Na}^+] - ([\text{Cl}^-]+[\text{HCO}_3^-])$ | [3.3](lessons/03-03-fluid-electrolyte-acid-base.md) |
| $K_d$ | dissociation constant — the free hormone giving half occupancy | [3.4](lessons/03-04-endocrine-axes.md) |
| $M$, $W$, $S$ | metabolic heat production; external work; **heat storage** rate (watts) | [4.2](lessons/04-02-thermoregulation.md) |
| $R$, $C$, $K$, $E$ (heat) | radiative, **convective**, **conductive**, evaporative exchange — positive = loss | [4.2](lessons/04-02-thermoregulation.md) |
| $h$, $h_e$, $w$ | dry and evaporative heat-transfer coefficients; skin wettedness (0 to 1) | [4.2](lessons/04-02-thermoregulation.md) |
| $\lambda$ (heat), $c$ | latent heat of vaporization of sweat; specific heat of body tissue | [4.2](lessons/04-02-thermoregulation.md) |
| $T_{\text{core}}$, $T_{sk}$, $T_{\text{set}}$ | core temperature, mean skin temperature, hypothalamic set point | [4.2](lessons/04-02-thermoregulation.md) |
| $\dot V_{O_2}$, $\dot Q$ | oxygen uptake; cardiac output (the same CO, in Fick's notation) | [4.3](lessons/04-03-exercise-integrative-physiology.md) |
| $C_aO_2 - C_{\bar v}O_2$ | arteriovenous oxygen difference — the extraction term | [4.3](lessons/04-03-exercise-integrative-physiology.md) |

**Notation trap — six symbols carry three or four meanings each, and context is
the only disambiguator.**

- **$R$** is **resistance** in [2.3](lessons/02-03-hemodynamics-blood-pressure.md),
  [2.4](lessons/02-04-ventilation-lung-mechanics.md) and
  [3.1](lessons/03-01-glomerular-filtration-clearance.md), the **respiratory
  exchange ratio** in [2.5](lessons/02-05-gas-exchange-and-transport.md) and
  [4.3](lessons/04-03-exercise-integrative-physiology.md), **radiative heat
  exchange** in [4.2](lessons/04-02-thermoregulation.md), and the **gas
  constant** in every $\Delta G$ calculation.
- **$C$** is **compliance** in [2.3](lessons/02-03-hemodynamics-blood-pressure.md)
  and [2.4](lessons/02-04-ventilation-lung-mechanics.md), **clearance** in
  [3.1](lessons/03-01-glomerular-filtration-clearance.md) and
  [3.2](lessons/03-02-tubular-transport-concentrating-urine.md),
  **concentration or oxygen content** in
  [1.2](lessons/01-02-membrane-transport.md) and
  [2.5](lessons/02-05-gas-exchange-and-transport.md), and **convective heat
  exchange** in [4.2](lessons/04-02-thermoregulation.md).
- **$P$** is **pressure** nearly everywhere, but **permeability** in
  [1.2](lessons/01-02-membrane-transport.md) and
  [1.3](lessons/01-03-resting-membrane-potential.md), **plasma concentration**
  in the clearance equation of
  [3.1](lessons/03-01-glomerular-filtration-clearance.md), **power** in
  [1.6](lessons/01-06-muscle-contraction.md), and (lower case $p$) **release
  probability** in [1.5](lessons/01-05-neuromuscular-autonomic-transmission.md).
- **$E$** is an **equilibrium potential** in
  [1.3](lessons/01-03-resting-membrane-potential.md) and
  [1.4](lessons/01-04-action-potential.md), **elastance** ($E_{es}$) in
  [2.2](lessons/02-02-cardiac-cycle-and-output.md), **extraction ratio**
  ($E_{\text{PAH}}$) in [3.1](lessons/03-01-glomerular-filtration-clearance.md),
  and **evaporative heat loss** in [4.2](lessons/04-02-thermoregulation.md).
- **$\lambda$** is the **cable length constant** in
  [1.4](lessons/01-04-action-potential.md), the **re-entry wavelength**
  $\theta\times$ERP in [2.1](lessons/02-01-cardiac-electrophysiology.md), and the
  **latent heat of vaporization** in [4.2](lessons/04-02-thermoregulation.md).
- **$m$** is **quantal content** in
  [1.5](lessons/01-05-neuromuscular-autonomic-transmission.md), the **phase-4
  slope** in [2.1](lessons/02-01-cardiac-electrophysiology.md), **body mass** in
  [4.2](lessons/04-02-thermoregulation.md), and (in the ceded Hodgkin–Huxley
  formalism) the sodium **activation gate**.
- Minor but real: **$K$** is a partition coefficient in
  [1.2](lessons/01-02-membrane-transport.md) and **conductive** heat exchange in
  [4.2](lessons/04-02-thermoregulation.md); **$S$** is heat **storage** in
  [4.2](lessons/04-02-thermoregulation.md), **saturation** in
  [2.5](lessons/02-05-gas-exchange-and-transport.md), and tonic **sympathetic**
  drive in [1.5](lessons/01-05-neuromuscular-autonomic-transmission.md);
  **$T$** is surface tension in
  [2.4](lessons/02-04-ventilation-lung-mechanics.md), tension in
  [1.6](lessons/01-06-muscle-contraction.md), a transport maximum, a period, and
  a temperature.

## Definitions

### Loop gain

How many times over a controller cancels its own error. A negative loop
**divides** a disturbance; it never erases it, because the leftover error is the
effector's drive signal.

$$\Delta = \frac{d}{1+G} \quad\text{(negative)}, \qquad \Delta = \frac{d}{1-L} \quad\text{(signed)}$$

Guyton's equivalent definition — correction achieved over error remaining —
gives the same $G$. Measured reflex gains run from about 1 to a few tens, which
is why **regulated variables are stable, not constant**.

*Introduced:* [1.1](lessons/01-01-homeostasis-feedback-control.md)

### Feedforward control

Acting on a *predictor* of the disturbance instead of on the error it will
cause. It buys speed and can be flatly wrong, because it never checks the
result — accuracy stays feedback's job. Cephalic-phase insulin, central command
at the onset of exercise, and the skin-temperature term in thermoregulation are
the three worked examples.

*Introduced:* [1.1](lessons/01-01-homeostasis-feedback-control.md), used in
[4.2](lessons/04-02-thermoregulation.md) and [4.3](lessons/04-03-exercise-integrative-physiology.md)

### Positive feedback with a terminator

The body's mechanism for any process that must go to completion once: the spike
upstroke, clotting, the LH surge, labour. **The pathological version is the same
loop with its terminator missing**, not a different mechanism. Behaviour is set
by where the signed loop gain sits relative to 1.

*Introduced:* [1.1](lessons/01-01-homeostasis-feedback-control.md)

### Gain–delay instability

Gain alone is harmless and delay alone is harmless; their **product**
destabilizes. Discretely, $x_{n+1}=(1-g)x_n$ is stable only for $0<g<2$ and
rings for $1<g<2$; continuously, $\dot x = -kx(t-\tau)$ loses stability at
$k\tau = \pi/2$. Cheyne–Stokes breathing is this with a normal sensor, a normal
gain, and only the circulation time changed.

*Introduced:* [1.1](lessons/01-01-homeostasis-feedback-control.md)

### Osmolarity vs. tonicity

**Osmolarity counts every dissolved particle; tonicity counts only the ones the
membrane refuses to pass**, $\sum_j \sigma_j C_j$. Osmolarity belongs to the
solution; tonicity belongs to the solution *and* the membrane, so the same fluid
can be hyperosmotic and hypotonic at once. Only tonicity predicts cell volume.

*Introduced:* [1.2](lessons/01-02-membrane-transport.md), reused in
[3.3](lessons/03-03-fluid-electrolyte-acid-base.md)

### Reflection coefficient

The fraction of a solute a given membrane bounces back, $\sigma = 1$ impermeant
to $\sigma = 0$ freely permeant. **It belongs to the solute–membrane pair, never
to the solute**: urea has $\sigma\approx 0$ at a red cell and $\sigma\approx 1$
at the blood–brain barrier.

*Introduced:* [1.2](lessons/01-02-membrane-transport.md)

### Channel vs. carrier

A channel is open at both ends at once, so it is fast ($10^6$–$10^8$ ions/s) and
its flux stays linear in the driving force. A carrier is **never** open at both
ends at once, so it is $10^2$–$10^4$/s and it **saturates** — which brings
competitive inhibition and stereospecificity with it. **Saturation is the
signature of a binding site.**

*Introduced:* [1.2](lessons/01-02-membrane-transport.md)

### Secondary active transport

Uphill movement paid for by letting $\text{Na}^+$ fall back in, not by
hydrolysing ATP. **The bill was paid upstream** by the
$\text{Na}^+/\text{K}^+$-ATPase, so poisoning the pump stops every symporter and
exchanger in the cell within minutes. SGLT (gut and proximal tubule) and NCX
(cardiac myocyte) are the two to hold onto.

*Introduced:* [1.2](lessons/01-02-membrane-transport.md), cashed in at
[4.1](lessons/04-01-gastrointestinal-system.md)

### Pump–leak steady state

A cell full of impermeant anions has strictly higher internal osmolarity at
every passive equilibrium (Gibbs–Donnan), so it would swell without limit. The
escape is to make $\text{Na}^+$ *functionally* impermeant by pumping it out as
fast as it leaks in. **Cell volume is therefore a continuous metabolic expense,
not a structural fact** — which is why every ischaemic tissue swells.

*Introduced:* [1.2](lessons/01-02-membrane-transport.md)

### Transport maximum and splay

$T_m$ is the largest amount of solute per minute a tissue's carriers can move.
The theoretical threshold is $T_m/\text{GFR}$; the **measured** threshold is
lower because the population curve is rounded — **splay** — from nephron
heterogeneity plus the finite affinity of a saturating hyperbola.

*Introduced:* [1.2](lessons/01-02-membrane-transport.md), quantified in
[3.2](lessons/03-02-tubular-transport-concentrating-urine.md)

### Equilibrium potential

The one voltage at which an ion's chemical push and electrical pull cancel, so
net flow stops. It depends on the concentration **ratio** and nothing else,
which is why three extra millimoles of plasma potassium move $E_K$ as far as
109 extra millimoles of plasma sodium would move $E_{Na}$.

*Introduced:* [1.3](lessons/01-03-resting-membrane-potential.md)

### Driving force

$V_m - E_{ion}$: how far the membrane sits from where this ion wants it. Sign
gives direction, magnitude gives strength. **An ion at its equilibrium potential
feels nothing however steep its gradient looks**, and calcium at rest has the
largest driving force of any ion in the body.

*Introduced:* [1.3](lessons/01-03-resting-membrane-potential.md)

### Chord conductance

Ohm's law with the driving force in place of the voltage,
$I_{ion} = g_{ion}(V_m - E_{ion})$, and its corollary that the resting potential
is the **conductance-weighted average** of the equilibrium potentials.
Concentrations decide where each ion *wants* the membrane; conductances decide
**whose wish is granted**.

*Introduced:* [1.3](lessons/01-03-resting-membrane-potential.md), the working
tool of [1.4](lessons/01-04-action-potential.md),
[1.5](lessons/01-05-neuromuscular-autonomic-transmission.md) and
[2.1](lessons/02-01-cardiac-electrophysiology.md)

### Threshold

Not a number the membrane compares against — **the voltage at which the
regenerative loop's gain reaches 1**, i.e. where growing inward
$\text{Na}^+$ current first overtakes outward current. Below it the response is
graded; above it the loop supplies its own drive, so the stimulus decides
*whether*, never *how big*.

*Introduced:* [1.1](lessons/01-01-homeostasis-feedback-control.md) (as a loop),
[1.4](lessons/01-04-action-potential.md) (as a spike)

### Refractory period

The shadow of $\text{Na}^+$ channel **inactivation** — a second, slower gate
that closes while the depolarization that opened the channel is still present.
Absolute (nearly all channels inactivated, no stimulus works) then relative
(some recovered, $g_K$ still high). **It is inactivation, not $\text{K}^+$
efflux, that terminates the spike**, and refractoriness is what makes
propagation one-way, caps firing rate, and forbids cardiac tetanus.

*Introduced:* [1.4](lessons/01-04-action-potential.md)

### Safety factor

How many times larger a delivered signal is than the signal actually required.
At the neuromuscular junction $\text{SF} = \text{EPP}/\Delta V_{\text{threshold}}$
is about 2–5; along a healthy axon the depolarization delivered to the
next node is five- to sevenfold threshold. **A synapse with a safety factor
above 1 cannot compute anything, and that is the design goal.** Myasthenia and
demyelination are both diseases of eaten margin.

*Introduced:* [1.4](lessons/01-04-action-potential.md),
[1.5](lessons/01-05-neuromuscular-autonomic-transmission.md)

### Quantal release

Transmitter leaves in packets: $\text{EPP} = mq$ with $m = np$. When $m$ is
small, failures are Poisson, so $m = \ln(N_{\text{trials}}/N_{\text{failures}})$
— **you can count vesicles with a voltmeter**. Quanta do **not** sum linearly,
because each one spends the driving force the next one needs.

*Introduced:* [1.5](lessons/01-05-neuromuscular-autonomic-transmission.md)

### Autonomic tone

Both divisions run continuously, and control is exercised by shifting the
**balance**, not by switching one on:
$\text{output} = \text{intrinsic} + S - P$. Three consequences — bidirectional
control from a single effector (arteriolar dilation is *withdrawal* of
constrictor tone), speed (removing a signal beats adding one), and a measurable
intrinsic rate (block both and the heart runs near 100 per minute).

*Introduced:* [1.5](lessons/01-05-neuromuscular-autonomic-transmission.md)

### Sliding filament

Neither filament changes length; the thin filaments are pulled past the thick
ones from both ends. The A band is therefore **constant** while the I band and H
zone shrink — the observation that settled the question. Active tension is
proportional to **overlap**, which is what makes the length–tension curve a
piece of geometry.

*Introduced:* [1.6](lessons/01-06-muscle-contraction.md)

### The cross-bridge cycle's two ATP jobs

**Hydrolysis cocks the head; binding of a fresh ATP detaches it**, and $P_i$
release triggers the stroke. Rigor mortis follows immediately: with no ATP, no
head can let go, so a dead muscle is stiff rather than limp. Relaxation costs
ATP too (SERCA, 2 $\text{Ca}^{2+}$ per ATP), which is why **the off switch fails
before the on switch does**.

*Introduced:* [1.6](lessons/01-06-muscle-contraction.md)

### Excitation–contraction coupling

Surface AP → T-tubule → DHPR (voltage sensor) → RyR → $\text{Ca}^{2+}$ from the
SR → troponin C → tropomyosin moves → cross-bridges. **In skeletal muscle DHPR
and RyR are mechanically coupled, so no external calcium is needed; in cardiac
muscle they are not**, and a trickle of entering $\text{Ca}^{2+}$ triggers the
SR release — calcium-induced calcium release. Hence calcium-channel blockers
weaken the heart and leave skeletal muscle alone.

*Introduced:* [1.6](lessons/01-06-muscle-contraction.md), reused in
[2.1](lessons/02-01-cardiac-electrophysiology.md)

### Latch state

A smooth-muscle cross-bridge dephosphorylated **while still attached** detaches
extraordinarily slowly, so force is held by near-frozen bridges cycling perhaps
a hundredfold slower. Since the ATP cost of holding force is cycling rate times
cost per cycle, **maintaining arteriolar tone for a lifetime is nearly free**.

*Introduced:* [1.6](lessons/01-06-muscle-contraction.md), spent in
[2.3](lessons/02-03-hemodynamics-blood-pressure.md)

### Automaticity

A pacemaker is simply **a cell that never finishes repolarizing**: $I_f$ (opened
by hyperpolarization), decaying $I_K$ and $I_{Ca,T}$ drift it back to threshold,
where an $I_{Ca,L}$ upstroke fires. Heart rate is the slope of that ramp, and
the autonomic system has three knobs on it — slope, threshold, and the depth of
the maximum diastolic potential.

*Introduced:* [2.1](lessons/02-01-cardiac-electrophysiology.md)

### Overdrive suppression

Driving an automatic cell above its intrinsic rate loads it with $\text{Na}^+$,
which makes the electrogenic pump run harder, hyperpolarizing it and flattening
its drift — and the effect **outlasts the drive**. So when the sinus node fails
the escape rhythm arrives *late* and then warms up. **The pause is the dangerous
part, not the slow rhythm that follows.**

*Introduced:* [2.1](lessons/02-01-cardiac-electrophysiology.md)

### Re-entry and wavelength

Re-entry needs a circuit, unidirectional block, and a revolution time longer
than the refractory period. Define $\lambda = \theta\times\text{ERP}$, the length
of tissue the refractory tail occupies; re-entry sustains when the path length
exceeds $\lambda$. **Both slowing conduction and shortening refractoriness are
therefore pro-arrhythmic** — the algebra behind the CAST result.

*Introduced:* [2.1](lessons/02-01-cardiac-electrophysiology.md)

### Valves are passive

Nothing controls a valve; it opens when the pressure gradient across it points
forward and slams when it reverses. **The entire cardiac cycle is four pressure
crossings**, and the two isovolumetric phases are the price of having valves —
high tension, no external work.

*Introduced:* [2.2](lessons/02-02-cardiac-cycle-and-output.md)

### Frank–Starling law

The heart operates on the **ascending** limb of its length–tension curve
(resting sarcomere ~1.9 μm against an optimum of 2.0–2.2), so more filling means
better overlap — reinforced by length-dependent calcium sensitivity of troponin
C — and therefore a stronger beat, with no nerve involved. **Sensor, controller
and effector are the same muscle**, which is what keeps the two ventricles
matched to a fraction of a millilitre.

*Introduced:* [1.6](lessons/01-06-muscle-contraction.md), used as a law in
[2.2](lessons/02-02-cardiac-cycle-and-output.md) and
[4.3](lessons/04-03-exercise-integrative-physiology.md)

### Preload, afterload, contractility

Preload is end-diastolic sarcomere length (indexed by EDV) and moves the loop's
**right** corner; afterload is the pressure that must be exceeded to eject and
moves the **left** corner; contractility is force at a *fixed* length and load,
and is the **slope of the ESPVR**. Only the third rotates the line — which is
why $E_{es}$ is the honest contractility index and ejection fraction is not.

*Introduced:* [2.2](lessons/02-02-cardiac-cycle-and-output.md)

### Venous return sets the ceiling

Over any sustained period cardiac output cannot exceed venous return, and venous
return is driven by a gradient of only a few mmHg,
$VR = (P_{ms}-P_{ra})/R_{VR}$. A stronger heart mostly just lowers $P_{ra}$, and
at $P_{ra}=0$ the flow is capped at $P_{ms}/R_{VR}$. **The periphery sets the
flow; the heart agrees to it.**

*Introduced:* [2.2](lessons/02-02-cardiac-cycle-and-output.md)

### The fourth power

$R \propto r^{-4}$, so a 10 percent narrowing raises resistance 52 percent and a
19 percent dilation doubles flow. **No other actuator in the body has that
gain**, which is why arterioles — barely moving — are the flow-control valves,
and why a 4.5 percent narrowing is a normal reflex while a 24 percent narrowing
is a hypertensive emergency.

*Introduced:* [2.3](lessons/02-03-hemodynamics-blood-pressure.md)

### Windkessel

The arterial tree is a capacitor (compliance) in parallel with a resistor (TPR),
charged in pulses. Its time constant $\tau = \text{TPR}\times C_{\text{art}}$ is
about 1.8 s against a cardiac cycle near 1 s — **several times the forcing
period, which is exactly the condition for a low-pass filter to smooth rather
than follow its input.** Stiffening shortens $\tau$ and makes the waveform
spikier.

*Introduced:* [2.3](lessons/02-03-hemodynamics-blood-pressure.md)

### Starling forces

$\text{NFP} = (P_c - P_{if}) - \sigma(\pi_c - \pi_{if})$, and
$J_v = K_f\cdot\text{NFP}$. Only $P_c$ varies along the capillary, so the crossover from
filtration to reabsorption is wherever $P_c$ passes the oncotic difference.
**Four terms, four independent mechanisms of oedema** — and the lymphatics carry
the residual, protein included.

*Introduced:* [2.3](lessons/02-03-hemodynamics-blood-pressure.md), reapplied at
60 mmHg in [3.1](lessons/03-01-glomerular-filtration-clearance.md)

### Autoregulation and the myogenic response

Organ flow held nearly constant across a wide pressure range by two local
mechanisms: vascular smooth muscle **contracts when stretched**, so a pressure
rise triggers the constriction that cancels it, plus washout of metabolic
vasodilators. Sensor, controller and effector are the same cell — feedback with
no nervous system in it.

*Introduced:* [2.3](lessons/02-03-hemodynamics-blood-pressure.md)

### Baroreflex resetting

The baroreflex has high gain against transients and, after hours to days,
**essentially zero steady-state gain** — it corrects error but does not set the
set point, so it can neither cause nor cure chronic hypertension. During
exercise it is likewise **reset, not overridden**: central command raises the
reference input while the loop keeps its gain. Long-term pressure belongs to the
kidney's pressure natriuresis, which is an *integral* controller.

*Introduced:* [2.3](lessons/02-03-hemodynamics-blood-pressure.md), revisited in
[4.3](lessons/04-03-exercise-integrative-physiology.md)

### Transpulmonary pressure

$P_L = P_A - P_{pl}$ — the lung is held open by a pressure **deficit outside**
it, not by pressure inside it. At both ends of a quiet breath $P_A = 0$ while
the lung holds two different volumes, because $P_{pl}$ moved. On a ventilator
$P_{pl}$ can be positive and the lung still distends.

*Introduced:* [2.4](lessons/02-04-ventilation-lung-mechanics.md)

### Compliance

$C = \Delta V/\Delta P_L$ — millilitres bought per cm H₂O, and it is a **local
slope**, not a property of the lung, so always say at what volume it was
measured. Lung and chest wall add reciprocally, as capacitors in series.
**High compliance is not a healthy lung**: recoil is $1/C$, and recoil is what
powers passive exhalation and tethers small airways open.

*Introduced:* [2.4](lessons/02-04-ventilation-lung-mechanics.md)

### Surfactant

Laplace gives $P = 2T/r$, so a small alveolus would empty into a large one and
collapse — a positive feedback loop. **Uniformly lowering $T$ rescales both
pressures and fixes nothing.** What stabilizes the lung is that surfactant's
tension is *concentration-dependent*, so $T$ falls as $r$ falls and $2T/r$
equalizes. Its second, quantitatively larger job is cutting about two-thirds of
the lung's total elastic recoil.

*Introduced:* [2.4](lessons/02-04-ventilation-lung-mechanics.md)

### Dead space and alveolar ventilation

$\dot V_A = (V_T - V_D)f$ — a fixed dead space is subtracted from **every**
breath before multiplying by frequency, so $\dot V_E$ and $\dot V_A$ can move in
opposite directions, and at $V_T = V_D$ alveolar ventilation is zero at any
minute ventilation you like. **Minute ventilation measures effort; alveolar
ventilation measures result.**

*Introduced:* [2.4](lessons/02-04-ventilation-lung-mechanics.md)

### Equal pressure point

On forced expiration, pressure inside the airway falls with friction until it
equals pleural pressure; **downstream of that point the airway is squeezed
shut**. Beyond modest effort, expiratory flow is therefore *effort-independent*.
Losing recoil (emphysema) moves the point into cartilage-free airways; pursed
lips add downstream resistance and move it back toward the mouth.

*Introduced:* [2.4](lessons/02-04-ventilation-lung-mechanics.md)

### Alveolar gas equation and the A–a gradient

$P_{AO_2} = P_{IO_2} - P_{aCO_2}/R$ says alveolar oxygen is what is left after
the arriving carbon dioxide has taken its share of a fixed total pressure. The
**A–a gradient** then separates two hypoxaemias that look identical on a blood
gas: hypoventilation and altitude lower $P_{AO_2}$ and $P_{aO_2}$ together and
leave it normal; **anything that widens it indicts the exchanging surface.**

*Introduced:* [2.5](lessons/02-05-gas-exchange-and-transport.md)

### Perfusion- vs. diffusion-limited

A gas is perfusion-limited if it equilibrates partway along the capillary — then
only more blood moves more gas. Oxygen equilibrates in about 0.25 s of a 0.75 s
transit, so **in health at rest oxygen is perfusion-limited**, with a threefold
reserve. Carbon monoxide never equilibrates, which is why it measures the
barrier itself.

*Introduced:* [2.5](lessons/02-05-gas-exchange-and-transport.md)

### Shunt vs. V/Q mismatch

A low-$\dot V_A/\dot Q$ unit still gets *some* ventilation, so supplemental
oxygen raises its alveolar tension enormously and its blood saturates. A shunt
unit ($\dot V_A/\dot Q = 0$) gets none, at any inspired fraction. **Failure to
correct on high-flow oxygen is the signature of a shunt** — and the fix is
recruiting alveoli, not turning the oxygen up.

*Introduced:* [2.5](lessons/02-05-gas-exchange-and-transport.md)

### Bohr and Haldane effects

The same molecular fact read in two directions. **Bohr:** $\text{CO}_2$, $\text{H}^+$,
heat and 2,3-BPG push oxygen **off** haemoglobin — a right shift, i.e. easier
unloading. **Haldane:** oxygen pushes $\text{CO}_2$ and $\text{H}^+$ **off** it,
so deoxygenated blood carries more carbon dioxide. They cooperate at both ends
of the circuit, and the right shift is nearly free because the curve is flat at
the loading end and steep at the unloading end.

*Introduced:* [2.5](lessons/02-05-gas-exchange-and-transport.md)

### Hypoxic pulmonary vasoconstriction

Low **alveolar** oxygen constricts the pulmonary arterioles feeding that region,
diverting blood toward better-ventilated lung — a local sensor–effector loop
with no nerves. **The sign is opposite to every systemic bed**, where hypoxia
dilates: systemic vessels match supply to demand, pulmonary vessels match blood
to gas.

*Introduced:* [2.5](lessons/02-05-gas-exchange-and-transport.md)

### Clearance

The **virtual volume of plasma** completely stripped of a substance per unit
time, $C_X = U_X\dot V/P_X$, in mL/min. It is not a concentration, not a
fraction, and no actual millilitre is ever stripped clean — a little is removed
from a lot. Inulin's clearance **is** GFR, because a substance that is filtered
and then ignored can only have reached the urine by filtration.

*Introduced:* [3.1](lessons/03-01-glomerular-filtration-clearance.md)

### Clearance ratio

$C_X/C_{\text{inulin}}$ is excreted over filtered. Below 1 means net
reabsorption, above 1 means net secretion — and **a ratio above 1 cannot be
produced by reabsorption at all**, however much of it is happening. That
asymmetry is what makes one division a diagnostic.

*Introduced:* [3.1](lessons/03-01-glomerular-filtration-clearance.md)

### The two arterioles

The glomerulus is the node between two resistors, so **afferent constriction
lowers flow and GFR together, while efferent constriction lowers flow but
raises GFR**. That is the whole logic of angiotensin II at the kidney — it buys
filtration with flow — and the reason blocking it collapses GFR in exactly the
patients whose filtration was being held up by efferent tone.

*Introduced:* [3.1](lessons/03-01-glomerular-filtration-clearance.md)

### Tubuloglomerular feedback

The macula densa senses **distal NaCl delivery** and constricts its own nephron's
afferent arteriole. Note the controlled variable: it does not measure GFR at
all. **The danger is filtrate arriving faster than the tubule can reclaim it**,
and that is the quantity the loop actually regulates — 1.2 million independent
copies of it.

*Introduced:* [3.1](lessons/03-01-glomerular-filtration-clearance.md)

### Countercurrent multiplier vs. exchanger

The **multiplier** (loop of Henle) spends ATP at NKCC2 to make a 200 mOsm/kg
transverse step, and hairpin geometry stacks that step along the axis into a
1200 mOsm/kg corticopapillary gradient: **it creates the gradient**. The
**exchanger** (vasa recta, and the *venae comitantes* of a cold limb) is
entirely passive and merely **preserves** what someone else made. Multiplier
creates, exchanger conserves.

*Introduced:* [3.2](lessons/03-02-tubular-transport-concentrating-urine.md),
reused for heat in [4.2](lessons/04-02-thermoregulation.md)

### The gradient is only potential

A 1200 mOsm/kg medulla concentrates nothing by itself. **ADH inserts
aquaporin-2 into the apical membrane of the collecting duct and decides whether
the urine is allowed to see the gradient** — one hormone, one channel, a
50-to-1200 mOsm/kg dynamic range from the same nephron. Nephrogenic diabetes
insipidus is a water-tight pipe running through a perfectly good gradient.

*Introduced:* [3.2](lessons/03-02-tubular-transport-concentrating-urine.md)

### Free-water clearance

$C_{\text{H}_2\text{O}} = \dot V - C_{\text{osm}}$: the millilitres per minute of
**solute-free water** being added to the urine (positive) or clawed back
(negative). Urine volume alone cannot tell you which — 3 mL/min at 900 mOsm/kg
is conservation and 3 mL/min at 100 mOsm/kg is excretion.

*Introduced:* [3.2](lessons/03-02-tubular-transport-concentrating-urine.md)

### Osmolality is water; volume is sodium

Two controlled variables, two controllers. **Osmolality** is defended by water,
via osmoreceptors, ADH and thirst, in minutes. **Volume** is defended by sodium,
via JG cells, macula densa and baroreceptors driving RAAS and ANP, over hours to
days. Plasma sodium *concentration* is therefore a statement about **water**;
total body sodium *content* is the statement about volume, and you read it off
the blood pressure, not the lab slip.

*Introduced:* [3.3](lessons/03-03-fluid-electrolyte-acid-base.md)

### Anion gap

$\text{AG} = [\text{Na}^+] - ([\text{Cl}^-] + [\text{HCO}_3^-])$, the unmeasured
anions, normally 8–12 mmol/L. A **raised** gap means an acid was *added* and its
conjugate base replaced the bicarbonate (lactate, ketones, uraemic anions,
toxins); a **normal** gap means bicarbonate was *lost* and chloride retained in
its place (diarrhoea, RTA, saline). Albumin is most of the gap, so correct for
it.

*Introduced:* [3.3](lessons/03-03-fluid-electrolyte-acid-base.md)

### Compensation is not correction

Compensation moves the **second** variable in the *same* direction as the
primary one and never fully restores pH. Two inferences fall straight out:
opposite-direction moves mean **two primary disorders**, and **a normal pH with
abnormal components is a mixed disorder**, not a well-compensated single one.

*Introduced:* [3.3](lessons/03-03-fluid-electrolyte-acid-base.md)

### Why bicarbonate is a good buffer despite pK 6.1

In a sealed tube it would be poor. In the body the $\text{CO}_2$ generated is
**blown off** rather than accumulating (roughly a tenfold gain in effective
capacity), and the numerator and denominator are under **independent feedback
control by two different organs** — kidney over days, lung over minutes. A
buffer whose two terms are separately regulated is not a buffer, it is a
controller.

*Introduced:* [3.3](lessons/03-03-fluid-electrolyte-acid-base.md)

### The trophic hormone rule

$$\text{low peripheral} + \textbf{high trophic} \Rightarrow \text{the gland failed (primary)}$$
$$\text{low peripheral} + \textbf{low or normal trophic} \Rightarrow \text{the controller failed (central)}$$

A thermostat argument: a cold room with the boiler call-signal *on* means the
boiler is broken. **"Inappropriately normal" is the finding, not the
reassurance** — one extra number localizes any broken endocrine loop.

*Introduced:* [3.4](lessons/03-04-endocrine-axes.md)

### Only free hormone counts

Bound hormone cannot cross a capillary, reach a receptor, be cleared, or feed
back. Change the binding protein and **total** hormone moves permanently while
free hormone and the trophic hormone return to normal. Measure the free hormone,
or measure the trophic one.

*Introduced:* [3.4](lessons/03-04-endocrine-axes.md)

### Receptor number is the real dial

Occupancy cannot exceed 1, so a fourfold loss of receptors cannot be overcome by
any amount of ligand. With a hormone amplified $10^7$-fold, **sensitivity is the
regulated variable** — down-regulation, up-regulation, desensitization — and it
is often the thing that actually changed.

*Introduced:* [3.4](lessons/03-04-endocrine-axes.md)

### Slow waves

Interstitial cells of Cajal pace each gut segment, but — unlike the SA node —
**the slow wave is normally subthreshold**. It sets *when* a contraction may
happen; local excitation (ACh, stretch) decides *whether* it does, by firing
$\text{Ca}^{2+}$ spikes on the crest. That conditional threshold is why gut
motility is graded and food-dependent.

*Introduced:* [4.1](lessons/04-01-gastrointestinal-system.md)

### The zymogen safety catch

Pancreatic proteases ship inactive, and **the only activator lives in the
duodenum**: brush-border enteropeptidase cleaves trypsinogen, and trypsin then
activates everything else. The pancreas ships a loaded weapon with the firing
pin stored downstream.

*Introduced:* [4.1](lessons/04-01-gastrointestinal-system.md)

### Enterohepatic circulation

Recycling makes a small pool do a large job: with a fraction $f$ recovered per
pass, the effective resource is multiplied by $1/(1-f)$ — 97.5 percent recovery
makes 3 g of bile salt behave like 120 g. **Efficiency near 1 is worth
enormously more than it looks**, which is the same arithmetic as the nephron
reabsorbing 99 percent of filtered sodium.

*Introduced:* [4.1](lessons/04-01-gastrointestinal-system.md)

### Fever vs. hyperthermia

**Fever is a raised set point** with the controller working perfectly — which is
why the patient shivers and vasoconstricts while the thermometer climbs, and why
an antipyretic (which lowers $T_{\text{set}}$) works while an ice pack fights the
loop through its own skin sensors. **Hyperthermia is genuine failure**: normal
set point, effectors saturated, environment winning — and there external cooling
is the treatment and antipyretics are useless. **The discriminator is free: ask
which way the effectors are pointing.**

*Introduced:* [1.1](lessons/01-01-homeostasis-feedback-control.md), settled in
[4.2](lessons/04-02-thermoregulation.md)

### The wet-bulb limit

Above skin temperature the dry routes reverse and **evaporation is the only
exit**, and evaporation runs down a *vapour-pressure* gradient, not a temperature
one. So the survivability metric is the wet-bulb temperature (about 35 °C), not
the air temperature — and a 32 °C swamp is far more dangerous than a 42 °C
desert.

*Introduced:* [4.2](lessons/04-02-thermoregulation.md)

### Fick principle

$\dot V_{O_2} = \dot Q\,(C_aO_2 - C_{\bar v}O_2)$ — bookkeeping, not a model. It
splits exercise capacity into a **central delivery** term and a **peripheral
extraction** term, and any limitation must appear in one of them. Extraction
saturates near 85 percent against a hard wall of 100; cardiac output has no
comparable wall. **That is why VO₂max is a cardiovascular measurement.**

*Introduced:* [4.3](lessons/04-03-exercise-integrative-physiology.md)

### Functional sympatholysis

One global sympathetic outflow constricts gut and kidney while working muscle
dilates, because the local metabolic milieu in active muscle **blunts
α-adrenergic vasoconstriction**. The command is broadcast; only inactive beds
obey it.

*Introduced:* [4.3](lessons/04-03-exercise-integrative-physiology.md)

### Cardiovascular drift

At a fixed pace in the heat: rising core temperature drives skin vasodilation
and sweating, which drain central blood volume, which lowers EDV and hence
stroke volume (Frank–Starling), which the baroreflex answers by raising heart
rate to hold cardiac output constant. **Both loops work perfectly and the athlete
still fails**, because heart-rate reserve is finite. Fatigue in the heat is a
cardiovascular event with a thermal cause.

*Introduced:* [4.3](lessons/04-03-exercise-integrative-physiology.md)

### Ventilatory threshold

The work rate above which ventilation rises faster than oxygen uptake. Its cause
is **buffering, not oxygen lack**: bicarbonate neutralizes lactic acid's
$\text{H}^+$ and liberates $\text{CO}_2$ that metabolism never made, and the
$\text{CO}_2$ controller blows it off.

*Introduced:* [4.3](lessons/04-03-exercise-integrative-physiology.md)

## Formulas and rules

### Feedback loops

| Quantity | Relation |
|---|---|
| Residual error, negative feedback | $\Delta = \dfrac{d}{1+G}$ |
| Signed form (either sign) | $\Delta = \dfrac{d}{1-L}$; $L\ge 1$ has **no steady state** |
| Fraction corrected | $G/(1+G)$ — 4 → 80 percent, 9 → 90, 24 → 96, 99 → 99 |
| Guyton gain | $G = (\text{correction})/(\text{residual error})$ |
| Feedforward-free error of a lagging loop | $\Delta_{\min}\approx r\tau$ (disturbance rate × latency) |
| Discrete stability | $x_{n+1}=(1-g)x_n$: stable iff $0<g<2$; rings for $1<g<2$ |
| Continuous delay limit | $\dot x=-kx(t-\tau)$ loses stability at $k\tau = \pi/2 \approx 1.571$ |

**Halving the residual error requires roughly doubling the gain, and no finite
gain reaches zero — only an integrating effector (the kidney) does.**

*From* [1.1](lessons/01-01-homeostasis-feedback-control.md)

### Membrane transport

| Quantity | Relation |
|---|---|
| Passive flux | $J = P(C_o - C_i)$, $\;P = KD_m/\Delta x$ |
| Carrier flux | $J = \dfrac{J_{\max}[S]}{K_m + [S]}$; scaled to an organ, $J_{\max}\to T_m$ |
| Excretion past a $T_m$ | $\text{excreted} = \text{GFR}\times P_X - \min(\text{GFR}\times P_X,\,T_m)$ |
| Theoretical threshold | $P_X^{*} = T_m/\text{GFR}$ (measured value is lower — splay) |
| Na/K-ATPase | 3 $\text{Na}^+$ out, 2 $\text{K}^+$ in, per ATP — **electrogenic**, ~100 cycles/s |
| Osmotic pressure | $\pi = \sigma RTC_{\text{osm}}$; at 300 mOsm/L and 310 K, $\pi \approx 7.6$ atm |
| Effective (tonic) osmolarity | $\sum_j \sigma_j C_j$ |
| Volume shift, impermeant solute conserved | $C_1V_1 = C_2V_2$ |
| Electrochemical work | $\Delta G = RT\ln\dfrac{C_2}{C_1} + zF(V_2 - V_1)$ |

$RT = 2.577$ kJ/mol at 310 K; $F = 96{,}485$ C/mol; ATP yields about 50 kJ/mol
in a cell. One $\text{Na}^+$ falling into a cell at $-70$ mV releases about
12.6 kJ/mol, so a pump cycle stores about 42.6 kJ/mol — roughly 85 percent of
one ATP.

*From* [1.2](lessons/01-02-membrane-transport.md),
[4.1](lessons/04-01-gastrointestinal-system.md)

### Membrane potential and ionic current

| Quantity | Relation |
|---|---|
| **Nernst, physiologist's form** | $E_{ion} = \dfrac{61\ \text{mV}}{z}\log_{10}\dfrac{[\text{ion}]_o}{[\text{ion}]_i}$ |
| **Goldman** | $V_m = 61\log_{10}\dfrac{P_K[\text{K}^+]_o + P_{Na}[\text{Na}^+]_o + P_{Cl}[\text{Cl}^-]_i}{P_K[\text{K}^+]_i + P_{Na}[\text{Na}^+]_i + P_{Cl}[\text{Cl}^-]_o}$ |
| **Chord conductance current** | $I_{ion} = g_{ion}(V_m - E_{ion})$; positive = outward = hyperpolarizing |
| Resting potential | $V_{\text{rest}} = \dfrac{\sum_i g_iE_i}{\sum_i g_i}$ — a conductance-weighted average |
| Two-ion form | $V_m = \dfrac{g_{Na}E_{Na} + g_KE_K}{g_{Na}+g_K}$ |
| Sensitivity of $E_K$ | $\dfrac{dE_K}{d[\text{K}^+]_o} = \dfrac{26.5}{[\text{K}^+]_o}$ mV per mM (6.6 at $[\text{K}^+]_o=4$) |
| Mixed-cation reversal | $V_{\text{rev}}\approx 0$ mV when $P_{Na}\approx P_K$ (nicotinic, NMDA-like) |

Standard mammalian cell (mM): $\text{K}^+$ 4 out / 140 in → $E_K = -94$ mV;
$\text{Na}^+$ 145 / 15 → $+60$ mV; $\text{Cl}^-$ 110 / 7 → $-73$ mV;
$\text{Ca}^{2+}$ 1.2 / 0.0001 → $+124$ mV. At rest $P_{Na}/P_K \approx 0.03$ and
$g_K/g_{Na}\approx 7$, giving $V_m \approx -75$ mV.

**Every doubling of plasma potassium is about 18 mV of depolarization.**

*From* [1.3](lessons/01-03-resting-membrane-potential.md),
[1.4](lessons/01-04-action-potential.md)

### Action potential and propagation

| Quantity | Relation |
|---|---|
| Conductance ratio through a spike | rest $g_{Na}{:}g_K = 1{:}7$ → $-75$ mV; threshold $1{:}2.9$ → $-55$; peak $10{:}1$ → $+46$ |
| Peak falls short of $E_{Na}$ | by ~14 mV, because $g_K$ never reaches zero |
| Maximum firing rate | $f_{\max} = 1/t_{\text{abs}}$ (~770 Hz); practical $1/(t_{\text{abs}}+t_{\text{rel}})$ (~280 Hz) |
| Velocity scaling | unmyelinated $v \propto \sqrt d$; **myelinated $v\propto d$** |
| Mammalian rule of thumb | $v \approx 6d$, with $v$ in m/s and $d$ in μm |
| Myelin's two jobs | raises membrane resistance (longer $\lambda$), lowers capacitance (faster charging) |
| Nodal spacing | ~100 fibre diameters |

*From* [1.4](lessons/01-04-action-potential.md)

### Synaptic transmission and the autonomic receptors

| Quantity | Relation |
|---|---|
| End-plate potential | $\text{EPP} = mq$, with $m = np$ |
| Quantal content from failures | $m = \ln\!\left(N_{\text{trials}}/N_{\text{failures}}\right)$, since $P(0)=e^{-m}$ |
| End-plate current | $I = g_{\text{ACh}}(V_m - V_{\text{rev}})$, $V_{\text{rev}}\approx 0$ |
| Safety factor | $\text{SF} = \text{EPP}/\Delta V_{\text{to threshold}}$; NMJ 2–5, central synapse well below 1 |
| Release probability | rises roughly as the **fourth power** of presynaptic $\text{Ca}^{2+}$ entry |
| Autonomic output | $\text{output} = \text{intrinsic} + S - P$ |

**The autonomic receptor table — the one to look up rather than half-remember:**

| Receptor | Transmitter | G protein | Main tissue | Effect |
|---|---|---|---|---|
| $\alpha_1$ | noradrenaline (sympathetic) | $G_q$ | arteriolar and venous smooth muscle | **vasoconstriction**; raises TPR and blood pressure |
| $\beta_1$ | noradrenaline (sympathetic) | $G_s$ | SA node, myocardium; kidney JG cells | **↑ heart rate, ↑ contractility**; renin release |
| $\beta_2$ | adrenaline (mostly **hormonal**) | $G_s$ | bronchial smooth muscle; muscle arterioles; liver | **bronchodilation**, vasodilation, glycogenolysis |
| $M_2$ | acetylcholine (parasympathetic) | $G_i$ | SA and AV node | **↓ heart rate**, slows AV conduction, via GIRK $\text{K}^+$ channels |
| $M_3$ | acetylcholine (parasympathetic) | $G_q$ | smooth muscle and glands generally | **bronchoconstriction**, ↑ gut motility and secretion, miosis |

Wiring rules: **every ganglionic synapse in both divisions is ACh onto nicotinic
receptors** ($\text{N}_N$, distinct from the muscle $\text{N}_M$ subtype). Two
exceptions — **sweat glands are sympathetic but cholinergic-muscarinic**, and the
**adrenal medulla** is a ganglion whose cells have no axon and secrete adrenaline
into the blood. $M_2$ is the one fast metabotropic receptor here (direct
$G_{\beta\gamma}$ gating, no second messenger), which is why vagal changes act
within a beat and sympathetic ones take seconds.

*From* [1.5](lessons/01-05-neuromuscular-autonomic-transmission.md)

### Muscle mechanics

| Quantity | Relation |
|---|---|
| Half-sarcomere overlap (standard filaments) | $\text{overlap}(L) = 1.8 - L/2$ μm, out of 0.7 μm |
| Relative active tension | $T_{\text{rel}} = \text{overlap}/0.7$; plateau 2.0–2.2 μm, zero at 3.6 μm |
| Landmarks, general | zero at $t + 2\ell$; plateau top at $z + 2\ell$; **descending-limb width $= t - z$**, independent of thin-filament length $\ell$ |
| Hill's force–velocity | $(F+a)(v+b) = (F_0+a)b$, with $a/F_0 = b/v_{\max}\approx 0.25$ |
| Power | $P = Fv = \dfrac{bF(F_0-F)}{F+a}$ |
| Maximum power | $F^{*} = 0.309F_0$, $v^{*} = 0.309v_{\max}$, $P_{\max}\approx 0.095F_0v_{\max}$ |
| Cardiac maximum rate | $f_{\max} = 1/\text{ERP} \approx 1/0.29\ \text{s} \approx 207$ per minute |

Twitch arithmetic: a single twitch reaches only 20–30 percent of maximal force
because the calcium transient (~20 ms) is over long before the mechanical event
(~100 ms). **Skeletal ERP/twitch ≈ 0.03; cardiac ≈ 0.83** — a factor of 28, and
the entire reason the heart cannot tetanize. One myosin stroke: ~5 pN over
~10 nm, about $12\,k_BT$, roughly 60 percent efficient; whole-body mechanical
efficiency is 20–25 percent, so **75-plus percent of exercise energy leaves as
heat.**

*From* [1.6](lessons/01-06-muscle-contraction.md),
[2.1](lessons/02-01-cardiac-electrophysiology.md)

### Cardiac pacing and conduction

| Quantity | Relation |
|---|---|
| Pacemaker rate | $f = \dfrac{1}{t_4 + t_{\text{AP}}}$, $\;t_4 = \dfrac{V_{\text{th}} - V_{\text{MDP}}}{m}$ |
| Sympathetic | $\beta_1\to G_s\to$ cAMP binds HCN **directly** → steeper $m$, lower $V_{\text{th}}$ |
| Vagal | $M_2\to G_i$ → flatter $m$; **and** $G_{\beta\gamma}\to \text{K}_{\text{ACh}}$ → deeper $V_{\text{MDP}}$ |
| Re-entry wavelength | $\lambda = \theta\times\text{ERP}$; sustains when path length $> \lambda$ |
| Excitable gap | $L - \lambda$ (cm) or $T - \text{ERP}$ (ms) |

Intrinsic rates: SA node 60–100, AV junction 40–60, Purkinje/ventricle 20–40 per
minute — **the fastest wins by pre-emption**. Conduction velocities: AV node
0.05, ventricular muscle 0.4, atrial muscle 1.0, His 2.0, Purkinje 4.0 m/s.
Typical transit: 0 ms SA → 40 atria → **140 through the AV node** → 160 His →
190 Purkinje → 220 last myocyte, so PR ≈ 160 ms and QRS ≈ 60 ms.

ECG: **deflection tracks the spatial gradient of $V_m$, not $V_m$** — flat means
no gradient, not no activity, which is why the ST segment is flat at peak force.
P = atrial depolarization, PR segment = the silent nodal delay, QRS =
ventricular depolarization, T = ventricular repolarization (upright because
repolarization runs epicardium-to-endocardium, two sign flips that cancel).

*From* [2.1](lessons/02-01-cardiac-electrophysiology.md)

### The pump

| Quantity | Relation |
|---|---|
| **Cardiac output** | $CO = HR\times SV$ |
| Stroke volume, ejection fraction | $SV = EDV - ESV$, $\;EF = SV/EDV$ |
| **Stroke work** | $W = \oint P\,dV \approx SV\times\overline P_{\text{ejection}}$ (loop area, counterclockwise) |
| Unit conversion | $1\ \text{mmHg}\cdot\text{mL} = 1.333\times10^{-4}$ J |
| **ESPVR (contractility)** | $P_{es} = E_{es}(V_{es} - V_0)$, so $V_{es} = V_0 + P_{es}/E_{es}$ |
| Venous return | $VR = \dfrac{P_{ms}-P_{ra}}{R_{VR}}$, capped at $P_{ms}/R_{VR}$ |

Resting benchmarks: $EDV$ 120 mL, $ESV$ 50, $SV$ 70, $EF$ 58 percent, $CO$
4.9 L/min, stroke work 0.87 J, external power **1.0 W**. Loop signatures:
preload widens the loop to the right with the left corner pinned; afterload
raises the top and drags the left corner right; contractility drags the left
corner left. $P_{ms}\approx 7$ mmHg, so venous return runs on a ~4 mmHg
gradient against ~90 mmHg across the systemic circuit.

**Diastole absorbs nearly the whole shortening of the cycle**: at 70/min,
systole ~300 ms of an 857 ms cycle; at 150/min, systole ~250 ms of 400 ms, so
filling collapses from ~557 to ~150 ms.

*From* [2.2](lessons/02-02-cardiac-cycle-and-output.md)

### Flow, pressure and resistance

| Quantity | Relation |
|---|---|
| **Ohm's law for flow** | $Q = \Delta P/R$ |
| **Poiseuille** | $Q = \dfrac{\pi\,\Delta P\,r^4}{8\eta L}$, $\;R = \dfrac{8\eta L}{\pi r^4}$ |
| Series / parallel | $R$ adds along a path; **conductances add** across organs |
| **TPR** | $\text{TPR} = \dfrac{\text{MAP}-\text{RAP}}{CO}$; equivalently $\text{MAP} = \dot Q\times\text{TPR}$ |
| Organ resistance in a parallel net | $R_i = \text{TPR}$ ÷ (that organ's share of flow) |
| Velocity | $v = Q/A$ |
| Reynolds number | $\mathrm{Re} = \rho v d/\eta$ |
| Compliance | $C = \Delta V/\Delta P$; veins ~20× more compliant than arteries |
| **Pulse pressure** | $PP = SV/C_{\text{art}}$ |
| **MAP** | $\text{MAP}\approx P_{\text{dia}} + \tfrac13 PP$ (resting only; weights equalize at high rate) |
| Windkessel decay | $P(t) = P_{\text{RA}} + (P_0-P_{\text{RA}})e^{-t/\tau}$, $\;\tau = \text{TPR}\times C_{\text{art}}$ |
| **Starling flux** | $J_v = K_f\left[(P_c-P_{if}) - \sigma(\pi_c-\pi_{if})\right]$ |

Radius leverage: $-20$ percent → $R\times2.44$, $Q\times0.41$; $-10$ percent →
$R\times1.52$; $+19$ percent → $Q\times2$. Pressure profile (mmHg): aorta 95,
arterioles 85→32 (**~55 mmHg, about 60 percent of the total drop**), capillaries
32→15, veins 15→6, right atrium 3. Velocity: aorta 17 cm/s, capillary
0.33 mm/s (~500× slower, ~1.5 s transit), venae cavae ~10 cm/s. Typical Starling
set: $\pi_c$ 25, $\pi_{if}$ 5, $P_{if}$ 0, so NFP is $+15$ mmHg arterially and
$-5$ venously.

**Four independent oedema mechanisms, one per term:** ↑$P_c$ (heart failure,
venous obstruction), ↓$\pi_c$ (nephrotic, liver failure), ↑$K_f$/↓$\sigma$
(burns, sepsis, histamine), ↓lymphatic drainage.

*From* [2.3](lessons/02-03-hemodynamics-blood-pressure.md)

### Lung mechanics

| Quantity | Relation |
|---|---|
| Transpulmonary pressure | $P_L = P_A - P_{pl}$ |
| Compliance | $C = \Delta V/\Delta P_L$; adult ~200 mL/cm H₂O (lung), ~100 (whole system) |
| Series compliances | $1/C_{\text{total}} = 1/C_{\text{lung}} + 1/C_{\text{wall}}$ |
| Specific compliance | $C/\text{FRC}\approx 0.087$ per cm H₂O |
| **Laplace** | $P = 2T/r$ (single air–liquid interface); stability needs $T\propto r$ |
| Airflow | $\dot V = \Delta P/R_{aw}$; normal $R_{aw}\approx 2$ cm H₂O·s/L |
| Resistance distribution | $R\propto L/(Nr^4)$ — **$N$ beats $r$**, so most resistance is in medium bronchi |
| **Bohr dead space** | $\dfrac{V_D}{V_T} = \dfrac{P_{aCO_2}-P_{ECO_2}}{P_{aCO_2}}$ |
| **Alveolar ventilation** | $\dot V_A = (V_T - V_D)f$; minute ventilation $\dot V_E = V_Tf$ |
| Work of breathing | $\dot W_{\text{elastic}}\approx f\,V_T^2/(2C)$; $\dot W_{\text{resistive}}\propto R_{aw}f^2V_T^2$ |

Units: 1 cm H₂O = 98.1 Pa = 0.735 mmHg. Quiet breath (cm H₂O): FRC $P_A=0$,
$P_{pl}=-5$, $P_L=+5$; end-inspiration $P_A=0$, $P_{pl}=-7.5$, $P_L=+7.5$.
Volumes (young adult male, mL): $V_T$ 500, IRV 3000, ERV 1100, RV 1200; FRC
2300, VC 4600, TLC 5800 — **a spirometer cannot see RV, FRC or TLC** (needs
helium dilution or plethysmography). $\text{FEV}_1/\text{FVC}$: ~0.80 normal,
**≤0.70 obstructive**, ≥0.80 with small volumes restrictive.

**The optimum breathing pattern minimizes the sum of the two work terms:** normal
lungs ~12/min, **stiff lungs → rapid and shallow**, **obstructed airways → slow
and deep**. Neither pattern is a symptom; both are solutions.

*From* [2.4](lessons/02-04-ventilation-lung-mechanics.md)

### Gas exchange and transport

| Quantity | Relation |
|---|---|
| Inspired oxygen | $P_{IO_2} = F_{IO_2}(P_B - P_{H_2O})$, with $P_{H_2O} = 47$ mmHg at 37 °C |
| **Alveolar gas equation** | $P_{AO_2} = P_{IO_2} - \dfrac{P_{aCO_2}}{R}$ |
| A–a gradient | $P_{(A-a)O_2} = P_{AO_2} - P_{aO_2}$; normal < ~15 mmHg in a young adult |
| **Alveolar ventilation relation** | $P_{aCO_2} = \dfrac{863\,\dot V_{CO_2}}{\dot V_A}$ (volumes in L/min, pressure in mmHg) |
| Fick's law at the barrier | $\dot V_{\text{gas}} = \dfrac{A}{T}D(P_1-P_2)$, $\;D\propto \text{solubility}/\sqrt{MW}$ |
| Saturation (Hill) | $S = \dfrac{P^n}{P^n + P_{50}^n}$, $\;n\approx 2.7$, $\;P_{50}\approx 27$ mmHg |
| **Oxygen content** | $C_{aO_2} = 1.34\,[\text{Hb}]\,S_{aO_2} + 0.003\,P_{aO_2}$ (mL/dL, Hb in g/dL) |
| Oxygen delivery | $\dot D_{O_2} = C_{aO_2}\times \dot Q$ |
| Mixing lung units | **mix contents, never partial pressures** |

Sea-level resting chain: $P_{IO_2} = 150$, $P_{AO_2} = 100$, $P_{aO_2} = 95$
mmHg, $S_{aO_2} = 0.968$, $C_{aO_2} = 19.7$ mL/dL, $C_{\bar v O_2} = 15.1$,
$\dot V_{O_2}\approx 234$ mL/min — **only 24 percent of delivered oxygen is
extracted at rest.** Barrier: 50–100 m² over ~0.3 μm; $\text{CO}_2$ diffuses
~20× faster than oxygen, so **hypoxaemia comes first and hypercapnia means the
pump is failing.** Carbon dioxide carriage: ~90 percent bicarbonate (carbonic
anhydrase inside the red cell, chloride shift on band 3), ~5 percent carbamino,
~5 percent dissolved.

Curve shifts: **right** (unload) with ↑$P_{CO_2}$, ↓pH, ↑temperature, ↑2,3-BPG;
**left** (hold on) with the reverse and with fetal haemoglobin. Control of
breathing: central chemoreceptors sense **CSF pH** (i.e. $\text{CO}_2$) and
supply most of the response; peripheral (carotid, aortic) bodies are the **only**
oxygen sensors and stay flat until $P_{aO_2}$ falls below ~60 mmHg — the knee of
the dissociation curve.

*From* [2.5](lessons/02-05-gas-exchange-and-transport.md),
[2.4](lessons/02-04-ventilation-lung-mechanics.md)

### Glomerular filtration and clearance

| Quantity | Relation |
|---|---|
| Glomerular Starling balance | $\text{NFP} = P_{GC} - P_{BS} - \pi_{GC}$ (filtrate is protein-free, so $\pi_{BS}\approx 0$) |
| **GFR** | $\text{GFR} = K_f\times\text{NFP} = 12.5\times 10 = 125$ mL/min |
| Oncotic rise along the tuft | $\pi_{\text{efferent}}\approx \dfrac{\pi_{\text{afferent}}}{1-FF}$ |
| Two-resistor node | $\text{RPF} = \dfrac{P_a - P_v}{R_A+R_E}$, $\;P_{GC} = P_a - \text{RPF}\cdot R_A$ |
| **Clearance** | $C_X = \dfrac{U_X\dot V}{P_X}$ — units mL/min |
| Clearance ratio | $\dfrac{C_X}{C_{\text{inulin}}} = \dfrac{\text{excreted}}{\text{filtered}}$ |
| **Filtration fraction** | $FF = \text{GFR}/\text{RPF} \approx 125/600 \approx 0.2$ |
| Renal blood flow | $\text{RBF} = \text{RPF}/(1-\text{Hct})$ |
| PAH correction | $\text{true RPF} = C_{\text{PAH}}/E_{\text{PAH}}$, $E_{\text{PAH}}\approx 0.9$ |
| **Mass balance** | $U_X\dot V = \text{GFR}\times P_X - R_X + S_X$; filtered load $= \text{GFR}\times P_X$ |
| Creatinine | $P_{cr}\propto 1/\text{GFR}$ — **a hyperbola, so half of GFR can go unnoticed** |

Standard numbers: $P_{GC}$ 60, $P_{BS}$ 18, $\pi_{GC}$ 32 mmHg → **NFP only
10 mmHg**; GFR 125 mL/min = 180 L/day against ~1.5 L of urine (99.2 percent of
water reabsorbed); kidneys are 0.4 percent of body mass and take 20–25 percent
of cardiac output. Barrier: freely filtered below ~2 nm (~7 kDa), excluded above
~4 nm (~70 kDa), **plus a fixed negative charge that doubly excludes albumin.**
Markers: inulin = GFR exactly; creatinine overestimates by 10–20 percent
(secreted); PAH ≈ renal plasma flow.

*From* [3.1](lessons/03-01-glomerular-filtration-clearance.md)

### Tubular transport and urinary concentration

| Quantity | Relation |
|---|---|
| Fractional water reabsorption from a marker | $(\text{TF}/P)_{\text{inulin}} = \dfrac{1}{1-f}$ |
| Countercurrent multiplication | single effect 200 mOsm/kg × hairpin geometry → up to 1200 mOsm/kg |
| Osmolar clearance | $C_{\text{osm}} = \dfrac{U_{\text{osm}}\dot V}{P_{\text{osm}}}$ |
| **Free-water clearance** | $C_{\text{H}_2\text{O}} = \dot V - C_{\text{osm}} = \dot V\left(1 - \dfrac{U_{\text{osm}}}{P_{\text{osm}}}\right)$ |
| **Obligatory urine volume** | $V_{\min} = \dfrac{\text{daily solute load}}{U_{\text{osm}}^{\max}} = \dfrac{600}{1200} = 0.5$ L/day |

Segment shares of filtered $\text{Na}^+$: proximal ~67 percent (isosmotic, and
$(\text{TF}/P)_{\text{inulin}} = 3.0$ proves it), thick ascending limb ~25
percent (**water-tight**, so it is both the concentrating engine and the
diluting segment), distal ~5 percent (aldosterone), collecting duct ~3 percent
(aldosterone and ADH). Glucose: $T_m\approx 375$ mg/min → theoretical threshold
300 mg/dL, measured 180–200 (splay). Urea supplies roughly half the papillary
osmolality and is nearly free, since $\sigma_{\text{urea}}\approx 0$.

**Seawater fails by arithmetic:** ~1100 mOsm/L needs 0.92 L of maximally
concentrated urine per litre drunk, netting 80 mL before any of your own solute
is excreted.

*From* [3.2](lessons/03-02-tubular-transport-concentrating-urine.md)

### Body fluids, electrolytes and acid–base

| Quantity | Relation |
|---|---|
| **60-40-20 rule** | TBW 60 percent of body weight, ICF 40, ECF 20; ECF splits 3:1 interstitium:plasma |
| Tracer dilution | $V = \dfrac{\text{injected} - \text{excreted}}{\text{equilibrium concentration}}$ |
| Compartment shift | $C = \dfrac{\text{total osmoles}}{\text{TBW}}$, then $V_{\text{ICF}} = \dfrac{\text{Osm}_{\text{ICF}}}{C}$, $V_{\text{ECF}} = \text{TBW}-V_{\text{ICF}}$ |
| Blood from plasma | $\text{blood volume} = \text{plasma}/(1-\text{Hct})$ |
| **Henderson–Hasselbalch** | $\text{pH} = 6.1 + \log_{10}\dfrac{[\text{HCO}_3^-]}{0.03\,P_{aCO_2}}$ |
| Henderson (consistency check) | $[\text{H}^+]\ (\text{nmol/L}) = 24\times\dfrac{P_{aCO_2}}{[\text{HCO}_3^-]}$ |
| **Anion gap** | $\text{AG} = [\text{Na}^+]-([\text{Cl}^-]+[\text{HCO}_3^-])$; add 2.5 per 1 g/dL of albumin below 4 |
| Delta ratio | $\Delta\text{AG}/\Delta[\text{HCO}_3^-]$ — 1.0 means a single pure high-gap acidosis |
| Net acid excretion | titratable acid $+\ \text{NH}_4^+ -$ urinary $\text{HCO}_3^-$ |

**Classification, from pH, $P_{aCO_2}$ and $[\text{HCO}_3^-]$:**

| Primary disorder | pH | Primary change | Compensation | By |
|---|---|---|---|---|
| Metabolic acidosis | ↓ | **↓ $[\text{HCO}_3^-]$** | ↓ $P_{aCO_2}$ | lung, minutes–hours |
| Metabolic alkalosis | ↑ | **↑ $[\text{HCO}_3^-]$** | ↑ $P_{aCO_2}$ | lung, limited by hypoxia |
| Respiratory acidosis | ↓ | **↑ $P_{aCO_2}$** | ↑ $[\text{HCO}_3^-]$ | kidney, 3–5 days |
| Respiratory alkalosis | ↑ | **↓ $P_{aCO_2}$** | ↓ $[\text{HCO}_3^-]$ | kidney, 3–5 days |

**Expected compensation** (use it to ask whether the second organ is doing its
job):

| Primary | Expected |
|---|---|
| Metabolic acidosis | $P_{aCO_2} = 1.5[\text{HCO}_3^-] + 8 \pm 2$ (Winter's formula) |
| Metabolic alkalosis | $P_{aCO_2}$ rises ~0.7 mmHg per 1 mmol/L rise in $[\text{HCO}_3^-]$ |
| Acute respiratory acidosis | $[\text{HCO}_3^-]$ rises 1 per 10 mmHg rise in $P_{aCO_2}$ |
| Chronic respiratory acidosis | $[\text{HCO}_3^-]$ rises 3.5 per 10 mmHg |
| Acute respiratory alkalosis | $[\text{HCO}_3^-]$ falls 2 per 10 mmHg |
| Chronic respiratory alkalosis | $[\text{HCO}_3^-]$ falls 4–5 per 10 mmHg |

Three rules: **the pH names the disorder in charge**; **compensation moves the
second variable the same way** (opposite directions mean two primaries); and
**compensation never fully corrects**, so a normal pH with abnormal components
is mixed. The acute-versus-chronic gap is itself diagnostic.

Acid loads: **volatile ~15,000 mmol/day of $\text{CO}_2$** (lung, easy) versus
**fixed ~70 mmol/day** (kidney, slow, no backup). Filtered bicarbonate is
4320 mmol/day, so proximal reclamation is pure damage control; new bicarbonate
comes from ammoniagenesis (40–50 mmol/day, up four- to fivefold in chronic
acidosis) and titratable acid (20–30). Potassium: ~3500 mmol total, under 2
percent extracellular; internal shift (insulin, $\beta_2$) buys minutes, renal
excretion does the accounting; plasma $\text{K}^+$ moves ~0.2–0.6 mmol/L per
0.1 pH unit, so **a "normal" potassium during acidosis means severe depletion.**

*From* [3.3](lessons/03-03-fluid-electrolyte-acid-base.md)

### Endocrine axes

| Quantity | Relation |
|---|---|
| Fractional occupancy | $f = \dfrac{[H]}{[H]+K_d}$ — and $f\le 1$, so lost receptors cannot be out-shouted |
| Axis architecture | hypothalamus → (releasing hormone, **portal veins**) → anterior pituitary → (trophic) → gland → (peripheral hormone) → target |
| Feedback radii | long loop: peripheral hormone inhibits pituitary **and** hypothalamus; short loop: trophic inhibits hypothalamus |
| Localization rule | low peripheral + **high** trophic = primary (gland); low peripheral + **low/normal** trophic = central (controller) |

Class behaviour follows **solubility, not the class label**: water-soluble
(peptides, catecholamines) → surface receptor, no carrier, seconds, not orally
active; lipid-soluble (steroids, thyroid hormone) → nuclear receptor, carrier
protein required, hours to days, orally active. Concentrations: glucose
~5 mM, cortisol ~0.4 μM, free thyroxine ~20 pM — a hundred-million-fold spread,
absorbed by cascade amplification.

Two loops that skip the pituitary: **insulin/glucagon** (the liver reads the
*ratio*) and **PTH/calcitriol** for calcium, where PTH deliberately raises
calcium while **lowering** phosphate so their product stays below the solubility
limit. TSH varies **log-linearly** with free T4, which is why it is the best
thyroid test. Cortisol's diurnal rhythm is **feedforward**, so a cortisol value
without a time of day is uninterpretable. Zonal anatomy pays: the *zona
fasciculata* (cortisol) answers to ACTH, the *zona glomerulosa* (aldosterone)
answers to angiotensin II and plasma $\text{K}^+$ — which is why potassium is
normal in steroid-withdrawal adrenal insufficiency and high in primary adrenal
failure.

*From* [3.4](lessons/03-04-endocrine-axes.md)

### Gastrointestinal

| Quantity | Relation |
|---|---|
| Contraction | slow wave (**when**) × spikes on the crest (**whether, how hard**) |
| Surface amplification | folds ×3 × villi ×10 × microvilli ×20 = **600-fold** |
| SGLT concentrating power | $\ln([G]_i/[G]_o) = k\,\Delta G_{\text{Na}}/RT$; 2 Na⁺ per glucose gives ~3700-fold, 1 Na⁺ only ~61-fold |
| Recycling amplification | effective pool $= 1/(1-f)$ per pass; bile salts $f = 0.975$ → 40 passes, ~6 days |
| Osmotic load | non-absorbable solute holds $V = \text{mOsm}/P_{\text{osm}}$ litres in the lumen |

Slow-wave rates: stomach 3, duodenum 12, ileum 8 per minute. Three motility
programs: **peristalsis** propels (ascending excitation behind, descending NO/VIP
inhibition ahead — a reflex entirely inside the wall), **segmentation** mixes,
and the **migrating motor complex** sweeps every ~90 min *when fasting*. Acid:
apical $\text{H}^+/\text{K}^+$-ATPase to pH 1.5, driven by gastrin (CCK-B,
$G_q$), ACh ($M_3$, $G_q$) and histamine ($H_2$, $G_s$) — which **potentiate**
because two second-messenger arms converge on one pump, and gastrin and ACh act
largely *through* the ECL cell, so **an H2 blocker weakens all three inputs**
while a PPI stops the effector. Absorption sites: iron and calcium duodenum;
sugars, amino acids and fat jejunum; **bile salts and B12 only in the terminal
ileum**; water and sodium colon. Fat leaves in **chylomicrons via lymph**,
bypassing hepatic first pass, because the particles are too large for a blood
capillary. Splanchnic bed takes ~25 percent of resting cardiac output and is the
body's largest reallocatable reservoir, of flow **and** of volume.

*From* [4.1](lessons/04-01-gastrointestinal-system.md)

### Heat balance

| Quantity | Relation |
|---|---|
| **Heat balance** | $M - W = R + C + K + E \pm S$ (watts; $R,C,K,E$ positive = loss, $S$ positive = gain) |
| Dry routes | $R + C + K = hA(T_{sk}-T_{\text{amb}})$ — **reverse above skin temperature, ~35 °C** |
| Evaporation | $E = h_eAw\left(P_{sk}^{\text{sat}} - P_{\text{air}}\right)$ |
| Sweat rate | $\dot m_{\text{sweat}} = E/\lambda$, and **only evaporated sweat counts** |
| **Storage** | $S = mc\,\dfrac{dT_{\text{core}}}{dt}$ |
| Core-to-skin heat convection | $\dot Q_{\text{blood}} = \dot V\rho c_b(T_{\text{core}}-T_{sk})$ |
| Controller | drive $\propto \alpha(T_{\text{core}}-T_{\text{set}}) + \beta(T_{sk}-T_{sk,\text{ref}})$, $\alpha\gg\beta$ (the skin term is **feedforward**) |

Constants and anchors: $\lambda = 2.43$ kJ/g; $c = 3.47$ kJ·kg⁻¹·°C⁻¹, so a
70 kg body has $mc = 243$ kJ/°C and **243 W of imbalance raises the core 1 °C
every ~17 minutes**; $\rho c_b = 4.08$ kJ·L⁻¹·°C⁻¹, so each L/min of skin blood
flow at a 2 °C gradient carries ~136 W; $h\approx 7$ W·m⁻²·°C⁻¹ in still air,
20–25 in fast-moving air; $h_e\approx 60$ W·m⁻²·kPa⁻¹; $A\approx 1.8$ m²;
$P_{sk}^{\text{sat}} = 5.6$ kPa at 35 °C. Resting ledger at 27 °C: $M = 100$ W
= 60 radiation + 15 convection + 3 conduction + 22 evaporation, so **a naked
adult is thermoneutral near 27–28 °C**, not at room temperature.

Effectors in cost order: **vasomotor** (free, skin flow from under 50 mL/min to
7–8 L/min), **sweating** (water and salt, 1.5 L/hr, 2–3 acclimatized),
**shivering** (2–5× resting metabolism), **non-shivering thermogenesis** (brown
fat UCP1, thyroid sets the gain), **behaviour** (free and unbounded — and the one
that actually does the work). Heat acclimatization over 10–14 days: earlier
sweating onset, higher maximum rate, **more dilute sweat** (which is why the
well-acclimatized athlete replacing losses with plain water is the one who gets
hyponatraemic), plus 10–12 percent plasma volume expansion.

*From* [4.2](lessons/04-02-thermoregulation.md)

### Exercise and whole-body integration

| Quantity | Relation |
|---|---|
| **Fick principle** | $\dot V_{O_2} = \dot Q\,(C_aO_2 - C_{\bar v}O_2)$ |
| Extraction fraction | $(C_aO_2-C_{\bar v}O_2)/C_aO_2$ — rest ~25 percent, maximum ~85 percent |
| Pressure identity | $\text{MAP} = \dot Q\times\text{TPR}$ |
| Fuel mixture from RER | $f_{\text{CHO}} = \dfrac{\text{RER}-0.70}{0.30}$ |
| **Caloric equivalent of oxygen** | $4.69 + f_{\text{CHO}}(5.05-4.69)$ kcal per L O₂ |
| Ventilatory bookkeeping | $P_{aCO_2} = 863\,\dot V_{CO_2}/\dot V_A$, exactly as in gas exchange |

Rest → maximum in a fit 30-year-old: HR 70→190 (×2.7), SV 71→132 mL (×1.9),
$\dot Q$ 5.0→25.1 L/min (×5.0), $(C_a-C_{\bar v})O_2$ 50→170 mL/L (×3.4),
$\dot V_{O_2}$ 249→4264 mL/min (**×17.2**). TPR falls to about a quarter, which
is what absorbs the fivefold rise in flow and why MAP rises only ~27 percent.
Muscle flow rises ~22-fold, **but ~95 percent of the extra blood is newly
generated cardiac output and only ~5 percent is redistributed** — splanchnic and
renal flow each fall by roughly 80 percent, coronary rises fourfold (it has no
extraction reserve), cerebral is held flat.

Energy systems: phosphagen (~5–10 s, highest power, tiny capacity), anaerobic
glycolysis (~30 s–2 min), oxidative (minutes to hours, effectively unlimited).
**Glycogen is the binding store**: ~500 g ≈ 2000 kcal against ~75,600 kcal of
fat, so at ~1000 kcal/hr with 70 percent from carbohydrate the wall arrives at
~2.9 hours; ingestion pushes it out but caps near 60 g/hr because intestinal
SGLT1 saturates. Carbohydrate is the better fuel **per litre of oxygen** (5.05
versus 4.69 kcal/L, ~8 percent), which is why the fuel mix shifts toward it when
oxygen delivery is the binding constraint.

*From* [4.3](lessons/04-03-exercise-integrative-physiology.md)

### Constants and conversions worth having

| Quantity | Value | Note |
|---|---|---|
| Nernst prefactor at 37 °C | $61$ mV per decade (monovalent) | divide by $z$ |
| $RT$ at 310 K | $2.577$ kJ/mol | $F = 96{,}485$ C/mol |
| ATP in a cell | ~50 kJ/mol | |
| Water vapour pressure at 37 °C | 47 mmHg | independent of barometric pressure |
| Haemoglobin oxygen capacity | 1.34 mL O₂ per g | |
| Plasma oxygen solubility | 0.003 mL/dL per mmHg | the dissolved term |
| $\text{CO}_2$ solubility | 0.03 mmol·L⁻¹·mmHg⁻¹ | the 0.03 in Henderson–Hasselbalch |
| **The 863 constant** | $P_{aCO_2} = 863\,\dot V_{CO_2}/\dot V_A$ | empirical unit conversion (BTPS L/min → mmHg); **stated here, derived nowhere in the course** |
| **Caloric equivalent of oxygen** | **5.05** kcal/L O₂ (carbohydrate), **4.69** (fat) | empirical; interpolate with $f_{\text{CHO}}$ |
| Energy density | 4 kcal/g carbohydrate and protein, 9 kcal/g fat | |
| **Specific heat of body tissue** | **3.47** kJ·kg⁻¹·°C⁻¹ | empirical; $mc = 243$ kJ/°C at 70 kg |
| Latent heat of sweat | 2.43 kJ/g | |
| Heat capacity of blood | 4.08 kJ·L⁻¹·°C⁻¹ | |
| Pressure conversions | 1 mmHg = 133.3 Pa; 1 cm H₂O = 98.1 Pa = 0.735 mmHg | |
| Cardiac work conversion | 1 mmHg·mL = $1.333\times10^{-4}$ J | |
| Molar gas volume | 22.4 L/mol | for turning mmol of $\text{CO}_2$ into litres |

*The three bold rows have no owning course in this curriculum; they are stated
here so there is somewhere to look them up.* Used quantitatively in
[4.3](lessons/04-03-exercise-integrative-physiology.md) and
[4.2](lessons/04-02-thermoregulation.md).

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Nernst and Goldman derived from electrochemical potential | [biophysics 4.4](../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md) |
| Two-state Boltzmann channel gating; what a voltage sensor is | [biophysics 4.5](../biophysics/lessons/04-05-excitable-membranes-action-potential.md) |
| Hodgkin–Huxley: the $m$, $h$, $n$ gating variables and the current-balance equation | [neuroscience 1.4](../neuroscience/lessons/01-04-hodgkin-huxley-model.md) · [1.3](../neuroscience/lessons/01-03-the-action-potential.md) |
| Cable theory, the length constant, and the $\sqrt d$ / $d$ velocity laws | [neuroscience 1.5](../neuroscience/lessons/01-05-cable-theory-conduction.md) |
| The central chemical synapse in depth — vesicle cycling, transmitter zoology | [neuroscience 2.1](../neuroscience/lessons/02-01-chemical-synaptic-transmission.md) · [2.2](../neuroscience/lessons/02-02-neurotransmitters-receptors.md) |
| Dendritic integration and summation; plasticity; sensory transduction and coding; motor units and the size principle | [neuroscience 2.3](../neuroscience/lessons/02-03-synaptic-integration.md) · [4.1](../neuroscience/lessons/04-01-plasticity-ltp-ltd.md) · [3.1](../neuroscience/lessons/03-01-transduction-neural-coding.md) · [3.4](../neuroscience/lessons/03-04-motor-systems.md) |
| GPCR cascades, second messengers, amplification, desensitization | [molecular-cell-biology 2.1](../molecular-cell-biology/lessons/02-01-receptors-reading-outside-world.md) · [2.2](../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md) · [2.4](../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md) |
| Fick's laws of diffusion | [biophysics 1.3](../biophysics/lessons/01-03-diffusion-ficks-laws.md) |
| Cooperativity and allostery (the sigmoid; the Hill coefficient) | [biophysics 2.4](../biophysics/lessons/02-04-cooperativity-allostery.md) · [biochemistry 1.5](../biochemistry/lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md) |
| Ligand binding and fractional occupancy | [biophysics 2.3](../biophysics/lessons/02-03-ligand-binding-occupancy.md) |
| Michaelis–Menten saturation (the shape behind every $T_m$) | [biophysics 4.2](../biophysics/lessons/04-02-michaelis-menten.md) |
| The myosin stroke as a rectified Brownian ratchet | [biophysics 4.3](../biophysics/lessons/04-03-molecular-motors-ratchet.md) |
| Bilayer self-assembly, micelles, the critical micelle concentration | [biophysics 3.4](../biophysics/lessons/03-04-self-assembly-hydrophobic.md) |
| Surface tension as an energy per area; membrane mechanics | [biophysics 3.5](../biophysics/lessons/03-05-membrane-mechanics.md) |
| Series and parallel resistance; Thévenin equivalents; voltage dividers | [circuits 1.2](../circuits/lessons/01-02-ohms-law-equivalent-resistance.md) · [2.4](../circuits/lessons/02-04-thevenin-norton-max-power.md) · [1.4](../circuits/lessons/01-04-voltage-current-dividers.md) |
| Capacitors, series capacitance, and the RC transient | [circuits 3.1](../circuits/lessons/03-01-capacitors-and-inductors.md) · [3.2](../circuits/lessons/03-02-first-order-rc-rl-transients.md) |
| Poiseuille flow derived; continuity; the laminar–turbulent transition | [fluid-dynamics 3.2](../fluid-dynamics/lessons/03-02-couette-poiseuille.md) · [1.3](../fluid-dynamics/lessons/01-03-continuity-equation.md) · [3.1](../fluid-dynamics/lessons/03-01-reynolds-number.md) |
| Shell balances behind the $r^4$ law | [transport-phenomena 2.2](../transport-phenomena/lessons/02-02-shell-balances-tube-annulus.md) |
| Conduction, convection and the wet-bulb (coupled heat–mass) analysis | [transport-phenomena 1.3](../transport-phenomena/lessons/01-03-heat-mass-fluxes-fourier-fick.md) · [3.5](../transport-phenomena/lessons/03-05-free-natural-convection.md) · [5.3](../transport-phenomena/lessons/05-03-simultaneous-heat-mass-transfer.md) |
| $P$–$V$ work and "loop area is net work" | [thermodynamics-physics 1.3](../thermodynamics-physics/lessons/01-03-heat-work-first-law.md) · [2.1](../thermodynamics-physics/lessons/02-01-heat-engines-carnot-cycle.md) |
| Latent heat and the vapour-pressure curve | [thermodynamics-physics 3.3](../thermodynamics-physics/lessons/03-03-phase-transitions-clausius-clapeyron.md) |
| Feedback, steady-state error, integral control, PID, phase margin | [control-systems 1.1](../control-systems/lessons/01-01-feedback-and-the-control-problem.md) · [2.2](../control-systems/lessons/02-02-second-order-response.md) · [2.3](../control-systems/lessons/02-03-steady-state-error-system-type.md) · [3.4](../control-systems/lessons/03-04-gain-and-phase-margins.md) · [4.1](../control-systems/lessons/04-01-pid-control.md) |
| Saddle-node and Hopf bifurcations; limit cycles in an excitable medium | [dynamical-systems 3.1](../dynamical-systems/lessons/03-01-saddle-node-transcritical.md) · [3.3](../dynamical-systems/lessons/03-03-hopf-bifurcation.md) · [2.3](../dynamical-systems/lessons/02-03-limit-cycles.md) |
| Water, pH, pK and buffer capacity as chemistry | [biochemistry 1.1](../biochemistry/lessons/01-01-water-ph-buffers.md) |
| Zymogen activation as a catalytic control strategy | [biochemistry 2.1](../biochemistry/lessons/02-01-enzymes-catalytic-strategy.md) |
| Glycolysis, fatty-acid oxidation, oxidative phosphorylation, gluconeogenesis | [biochemistry 3.2](../biochemistry/lessons/03-02-glycolysis.md) · [4.2](../biochemistry/lessons/04-02-fatty-acid-oxidation.md) · [3.4](../biochemistry/lessons/03-04-oxidative-phosphorylation.md) · [3.5](../biochemistry/lessons/03-05-gluconeogenesis-reciprocal-regulation.md) |
| Carbohydrate and lipid structure (glycogen, triacylglycerol, sterols) | [biochemistry 3.1](../biochemistry/lessons/03-01-carbohydrates-structure-storage.md) · [4.1](../biochemistry/lessons/04-01-lipids-fatty-acids-triacylglycerols-sterols.md) |
| ATP as the cell's currency; respiration; UCP1 uncoupling | [general-biology 2.1](../general-biology/lessons/02-01-energy-atp-enzymes.md) · [2.2](../general-biology/lessons/02-02-cellular-respiration.md) |
| The lipid bilayer and cell structure; protein sorting to a polarized epithelium | [general-biology 1.3](../general-biology/lessons/01-03-cell-theory-two-kinds-of-cell.md) · [molecular-cell-biology 1.4](../molecular-cell-biology/lessons/01-04-endomembrane-trafficking.md) |
| Actin and myosin as general cytoskeletal machinery | [molecular-cell-biology 1.2](../molecular-cell-biology/lessons/01-02-cytoskeleton-three-filaments.md) |
| **The 863 constant, the caloric equivalents of oxygen (5.05 / 4.69 kcal per L O₂), and the specific heat of body tissue (3.47 kJ·kg⁻¹·°C⁻¹)** | **nowhere — these are empirical constants with no owning course, so they are stated on this card** (see *Constants and conversions*) |

## Pitfalls

### Excitable tissue and muscle

- A regulated variable is never held **constant**: a proportional loop leaves
  $d/(1+G)$ standing, and it must, because the residual error is the effector's
  own drive. *([1.1](lessons/01-01-homeostasis-feedback-control.md))*
- Higher gain is not better — **gain × delay** is what destabilizes, which is
  why reflex gains are 1–30 and not 1000. *([1.1](lessons/01-01-homeostasis-feedback-control.md))*
- "Negative" feedback refers to the sign of the **whole loop**, not of any one
  arrow: **count the sign flips; an even number is positive feedback.**
  *([1.1](lessons/01-01-homeostasis-feedback-control.md))*
- Feedforward improves **speed**, never accuracy — it never checks its result.
  *([1.1](lessons/01-01-homeostasis-feedback-control.md), [4.2](lessons/04-02-thermoregulation.md))*
- Isosmotic is not isotonic; they coincide only when $\sigma = 1$ for every
  solute. **Osmolarity is measured in a machine; tonicity requires knowing the
  membrane.** *([1.2](lessons/01-02-membrane-transport.md), [3.3](lessons/03-03-fluid-electrolyte-acid-base.md))*
- Secondary active transport is not free — **the ATP was paid upstream**, and
  poisoning the pump stalls every symporter within minutes.
  *([1.2](lessons/01-02-membrane-transport.md), [4.1](lessons/04-01-gastrointestinal-system.md))*
- A carrier is not a slow channel: it is never open at both ends at once, which
  is *why* it saturates and discriminates stereoisomers.
  *([1.2](lessons/01-02-membrane-transport.md))*
- Cell volume is not structural. It is a dynamic steady state held by continuous
  ATP hydrolysis, and it fails within minutes of losing it.
  *([1.2](lessons/01-02-membrane-transport.md))*
- The cell rests near $E_K$ because $\text{K}^+$ **leak channels are open**, not
  because $\text{K}^+$ is abundant. Concentrations set where each ion wants the
  membrane; permeabilities decide whose wish is granted.
  *([1.3](lessons/01-03-resting-membrane-potential.md))*
- The pump's **direct** contribution to $V_m$ is 2–5 mV; its indirect
  contribution (maintaining the gradients) is everything.
  *([1.2](lessons/01-02-membrane-transport.md), [1.3](lessons/01-03-resting-membrane-potential.md))*
- The sign of $I = g(V_m-E)$ is the direction of **current**, not of the ion —
  they differ for $\text{Cl}^-$. Read it electrically: inward depolarizes.
  *([1.3](lessons/01-03-resting-membrane-potential.md))*
- Without a chloride transporter, the resting potential sets the chloride
  gradient, not the other way round. **Look for a transporter before letting
  $\text{Cl}^-$ into the story.** *([1.3](lessons/01-03-resting-membrane-potential.md))*
- Charging the membrane moves about one $\text{K}^+$ in 45,000 — bulk
  concentrations do not measurably change during a spike train.
  *([1.3](lessons/01-03-resting-membrane-potential.md))*
- $\text{K}^+$ efflux does not end the action potential; **$\text{Na}^+$ channel
  inactivation does**, and only inactivation explains refractoriness.
  *([1.4](lessons/01-04-action-potential.md))*
- Refractoriness is not hyperpolarization — the cell is absolutely refractory at
  the **peak** of the spike. It tracks gate state, not voltage.
  *([1.4](lessons/01-04-action-potential.md))*
- A stronger stimulus never makes a bigger spike; during the relative refractory
  period it can make a **smaller** one.
  *([1.4](lessons/01-04-action-potential.md))*
- Conductance ratios and permeability ratios are different quantities
  ($g_{Na}{:}g_K\approx 1{:}7$ versus $P_{Na}{:}P_K\approx 0.03$) that happen to
  land on the same $V_m$. *([1.4](lessons/01-04-action-potential.md))*
- In saltatory conduction, current flows continuously; only **regeneration** is
  discontinuous. *([1.4](lessons/01-04-action-potential.md))*
- $mq$ overestimates the EPP badly — quanta sum **nonlinearly**, because each
  spends the driving force the next one needs. Define the safety factor on the
  measured EPP. *([1.5](lessons/01-05-neuromuscular-autonomic-transmission.md))*
- Sympathetic does not mean adrenergic: **every ganglion in both divisions is
  cholinergic-nicotinic**, sweat glands are sympathetic-cholinergic, and the
  adrenal medulla is a ganglion that secretes a hormone.
  *([1.5](lessons/01-05-neuromuscular-autonomic-transmission.md))*
- **Receptor subtype, not transmitter, decides what a drug does** — atropine
  leaves every nicotinic synapse untouched; hexamethonium takes both autonomic
  divisions offline and spares muscle.
  *([1.5](lessons/01-05-neuromuscular-autonomic-transmission.md))*
- More acetylcholine is not always more transmission: past a point it produces
  depolarizing block. *([1.5](lessons/01-05-neuromuscular-autonomic-transmission.md))*
- Muscles shorten because filaments **slide**, not because proteins shorten —
  the constant A band is the proof, and the length–tension curve is
  unexplainable without it. *([1.6](lessons/01-06-muscle-contraction.md))*
- ATP **hydrolysis cocks** the head; $P_i$ release drives the stroke; a **fresh
  ATP detaches** it. Hence a dead muscle is stiff, not limp.
  *([1.6](lessons/01-06-muscle-contraction.md))*
- Relaxation is not free — SERCA burns ATP, and **the off switch fails first**
  under energy depletion (cramp, contracture, rigor).
  *([1.6](lessons/01-06-muscle-contraction.md))*
- One action potential gives 20–30 percent of full force, because the calcium
  transient is over before the mechanics are.
  *([1.6](lessons/01-06-muscle-contraction.md))*
- Smooth muscle has **no troponin**: calcium works through calmodulin and MLCK on
  the thick filament, and tone is the kinase-to-phosphatase ratio.
  *([1.6](lessons/01-06-muscle-contraction.md))*

### Cardiovascular

- The heart does not "choose" not to tetanize — its refractory period is ~83
  percent of its own twitch, so summation is arithmetically impossible.
  *([1.4](lessons/01-04-action-potential.md), [1.6](lessons/01-06-muscle-contraction.md), [2.1](lessons/02-01-cardiac-electrophysiology.md))*
- The ECG shows depolarization and repolarization, **never contraction**, and it
  records a **spatial gradient** — flat means no gradient, which is why the ST
  segment is flat at peak force. *([2.1](lessons/02-01-cardiac-electrophysiology.md))*
- There are no nerves in the conduction system; it is modified myocardium coupled
  by gap junctions. *([2.1](lessons/02-01-cardiac-electrophysiology.md))*
- The refractory period does not cap heart rate — the action potential shortens
  as rate rises. *([2.1](lessons/02-01-cardiac-electrophysiology.md))*
- **Slowing conduction is not automatically antiarrhythmic**: since
  $\lambda = \theta\times\text{ERP}$, slowing $\theta$ shrinks the wavelength and lets
  smaller circuits sustain re-entry (the CAST result).
  *([2.1](lessons/02-01-cardiac-electrophysiology.md))*
- Nothing controls the valves. Every event in the cycle is downstream of the sign
  of a pressure difference. *([2.2](lessons/02-02-cardiac-cycle-and-output.md))*
- Stroke volume is a **width** on the P–V loop, not a pressure difference times
  something. *([2.2](lessons/02-02-cardiac-cycle-and-output.md))*
- **Ejection fraction is not contractility** — it confounds the muscle with its
  loading, and a stiff ventricle with a small stroke volume can have a normal EF.
  A ratio cannot tell you about its numerator.
  *([2.2](lessons/02-02-cardiac-cycle-and-output.md))*
- A stronger heart cannot raise sustained output much: **the ceiling is
  $P_{ms}/R_{VR}$**, set by the vasculature. *([2.2](lessons/02-02-cardiac-cycle-and-output.md))*
- Faster is not better: diastole absorbs nearly all the shortening of the cycle,
  and the left ventricle perfuses itself in diastole — **tachycardia cuts supply
  while raising demand.** *([2.2](lessons/02-02-cardiac-cycle-and-output.md))*
- The P–V loop runs **counterclockwise**: same axes as a heat engine, opposite
  sign, because a pump puts work in.
  *([2.2](lessons/02-02-cardiac-cycle-and-output.md))*
- The heart sets total flow and pressure; **arterioles set the distribution.**
  *([2.3](lessons/02-03-hemodynamics-blood-pressure.md), [4.3](lessons/04-03-exercise-integrative-physiology.md))*
- Reason about $r^4$, not $r$. A 10 percent radius change is a 52 percent
  resistance change. *([2.3](lessons/02-03-hemodynamics-blood-pressure.md))*
- MAP is **not** the average of systolic and diastolic — it is nearer
  $P_{\text{dia}}+PP/3$ at rest, and that approximation fails at high heart rate.
  *([2.3](lessons/02-03-hemodynamics-blood-pressure.md))*
- Stiffening raises systolic and **lowers** diastolic around an unchanged mean:
  a wide pulse pressure in an older person is a compliance finding, not a strong
  heart. *([2.3](lessons/02-03-hemodynamics-blood-pressure.md))*
- Pulse pressure **rises** in distal arteries (wave reflection); only the mean
  falls monotonically. *([2.3](lessons/02-03-hemodynamics-blood-pressure.md))*
- The baroreflex resets within days and then has ~zero steady-state gain — it
  cannot cause or cure chronic hypertension. Denervation makes pressure
  **labile**, not high. *([2.3](lessons/02-03-hemodynamics-blood-pressure.md))*
- The classic "filter arterially, reabsorb venously" profile is an idealization;
  in most beds filtration is small and positive along nearly the whole length and
  the **lymphatics return essentially all of it**. The four terms and four oedema
  mechanisms survive intact. *([2.3](lessons/02-03-hemodynamics-blood-pressure.md))*
- In a well-controlled loop the **controlled variable is the least informative
  thing to measure** — tachycardia with a narrow pulse pressure appears before
  MAP moves. *([2.3](lessons/02-03-hemodynamics-blood-pressure.md), [3.1](lessons/03-01-glomerular-filtration-clearance.md))*

### Respiratory

- Intrapleural pressure is not the distending pressure; $P_L = P_A - P_{pl}$ is.
  Its sign alone tells you nothing.
  *([2.4](lessons/02-04-ventilation-lung-mechanics.md))*
- Emphysema's high compliance is not a silver lining: **compliance and recoil are
  reciprocal**, and losing recoil costs you passive exhalation *and* airway
  tethering. *([2.4](lessons/02-04-ventilation-lung-mechanics.md))*
- Surfactant does not work by lowering surface tension uniformly — that rescales
  every $2T/r$ identically. **The stabilization is the concentration-dependence.**
  *([2.4](lessons/02-04-ventilation-lung-mechanics.md))*
- Resistance is **not** greatest in the smallest airways: $N$ grows faster than
  $r^4$ shrinks, so the small airways are a silent zone where disease hides.
  *([2.4](lessons/02-04-ventilation-lung-mechanics.md))*
- Do not tell a wheezing person to blow harder — beyond modest effort flow is
  effort-independent. Pursed lips (downstream resistance) genuinely help.
  *([2.4](lessons/02-04-ventilation-lung-mechanics.md))*
- **Minute ventilation is not ventilation.** $\dot V_E$ and $\dot V_A$ can move
  in opposite directions, and at $V_T = V_D$ alveolar ventilation is zero. Always
  ask the tidal volume. *([2.4](lessons/02-04-ventilation-lung-mechanics.md), [2.5](lessons/02-05-gas-exchange-and-transport.md))*
- Gases diffuse down **partial pressure** gradients, not concentration gradients
  — haemoglobin works precisely by hiding oxygen from the pressure gauge.
  *([2.5](lessons/02-05-gas-exchange-and-transport.md))*
- A pulse oximeter is not a delivery meter: saturation is blind to anaemia and to
  carbon monoxide. **Content needs haemoglobin; delivery needs cardiac output
  too.** *([2.5](lessons/02-05-gas-exchange-and-transport.md))*
- Never average partial pressures across lung units — **mix contents and convert
  back**, which is also why good units cannot compensate for bad ones.
  *([2.5](lessons/02-05-gas-exchange-and-transport.md))*
- A low $P_{aO_2}$ does not imply a widened A–a gradient: hypoventilation and
  altitude lower alveolar and arterial oxygen **together**.
  *([2.5](lessons/02-05-gas-exchange-and-transport.md))*
- Oxygen therapy on a nearly saturated patient buys almost nothing (a sevenfold
  rise in $P_{aO_2}$ for ~12 percent more content), and **it cannot rescue a
  shunt at all.** *([2.5](lessons/02-05-gas-exchange-and-transport.md))*
- Lung disease raises $\text{CO}_2$ far less readily than it lowers oxygen —
  **hypercapnia means the pump is failing.**
  *([2.5](lessons/02-05-gas-exchange-and-transport.md))*

### Renal, fluid and acid–base

- Clearance is a **volume per time**, virtual — not a concentration and not a
  fraction removed. *([3.1](lessons/03-01-glomerular-filtration-clearance.md))*
- Constricting an arteriole does not always lower GFR: **afferent lowers flow and
  GFR together; efferent lowers flow but raises GFR.** Getting this backwards is
  the most consequential error available here.
  *([3.1](lessons/03-01-glomerular-filtration-clearance.md))*
- $\pi_{GC}$ is not a constant — it rises along the capillary and rises further
  when filtration fraction rises, which damps every perturbation before any nerve
  hears about it. *([3.1](lessons/03-01-glomerular-filtration-clearance.md))*
- A normal creatinine is not a normal kidney: $P_{cr}\propto 1/\text{GFR}$, and a
  frail person makes less of it. *([3.1](lessons/03-01-glomerular-filtration-clearance.md))*
- Proteinuria need not mean bigger holes — **losing the anionic charge barrier
  alone produces heavy albuminuria.**
  *([3.1](lessons/03-01-glomerular-filtration-clearance.md))*
- GFR does not always follow $P_{GC}$: once filtration equilibrium is reached
  partway along, GFR becomes **flow-limited**.
  *([3.1](lessons/03-01-glomerular-filtration-clearance.md))*
- The vasa recta do not build the medullary gradient — they are a **passive
  exchanger** that stops blood flow destroying it. Only NKCC2 spends ATP.
  *([3.2](lessons/03-02-tubular-transport-concentrating-urine.md))*
- "Isosmotic reabsorption" is not "nothing happened": two-thirds of the volume
  left, and $(\text{TF}/P)_{\text{inulin}} = 3$ is the receipt.
  *([3.2](lessons/03-02-tubular-transport-concentrating-urine.md))*
- Glucosuria in diabetes is **not a broken transporter** — the carriers are
  normal and saturated. Glucosuria at a *normal* plasma glucose is the finding
  that means renal disease. *([1.2](lessons/01-02-membrane-transport.md), [3.2](lessons/03-02-tubular-transport-concentrating-urine.md))*
- A salty medulla does not concentrate urine; it makes concentration **possible**.
  Without ADH the collecting duct is a water-tight pipe.
  *([3.2](lessons/03-02-tubular-transport-concentrating-urine.md))*
- Urine **volume** does not tell you which way water is being handled — only
  $C_{\text{H}_2\text{O}}$ does, because only it compares urine against plasma.
  *([3.2](lessons/03-02-tubular-transport-concentrating-urine.md))*
- Volume and osmolality are **two** controlled variables with two controllers; a
  patient can be volume-depleted and hyponatraemic at once.
  *([3.3](lessons/03-03-fluid-electrolyte-acid-base.md))*
- A low plasma sodium is a statement about **water**, not about body sodium — and
  body sodium is read off blood pressure and oedema, not off a lab value.
  *([3.3](lessons/03-03-fluid-electrolyte-acid-base.md))*
- Isotonic saline does not rehydrate cells; only free water crosses the cell
  membrane. *([3.3](lessons/03-03-fluid-electrolyte-acid-base.md))*
- Bicarbonate is not a poor buffer despite its pK of 6.1 — the system is **open**
  and both terms are separately controlled.
  *([3.3](lessons/03-03-fluid-electrolyte-acid-base.md))*
- **Compensation is not correction**: a normal pH with abnormal components is a
  mixed disorder, and that normal pH is the finding, not reassurance.
  *([3.3](lessons/03-03-fluid-electrolyte-acid-base.md))*
- Hyperkalaemia during acidosis is often a **shift**, with total body potassium
  depleted — so a "normal" potassium during acidosis is alarming.
  *([3.3](lessons/03-03-fluid-electrolyte-acid-base.md))*
- Never trust an anion gap without checking albumin — albumin is most of the gap.
  *([3.3](lessons/03-03-fluid-electrolyte-acid-base.md))*

### Endocrine, gastrointestinal and integrative

- A hormone's target is not where the hormone goes — it goes everywhere. **The
  target is wherever the receptor is expressed.**
  *([3.4](lessons/03-04-endocrine-axes.md))*
- A high **total** hormone is usually a binding-protein finding. Measure free
  hormone, or measure the trophic hormone.
  *([3.4](lessons/03-04-endocrine-axes.md))*
- A low peripheral hormone means the gland **or anything above it** failed; a
  normal trophic hormone beside a badly abnormal peripheral one is the
  abnormality. *([3.4](lessons/03-04-endocrine-axes.md))*
- Stopping an exogenous hormone does more than remove the drug — **the loop
  cannot distinguish exogenous from endogenous**, so it exposes an atrophied
  axis. Hence the taper. *([3.4](lessons/03-04-endocrine-axes.md))*
- A cortisol value without a time of day is uninterpretable; the rhythm is
  feedforward. *([3.4](lessons/03-04-endocrine-axes.md))*
- More stimulation is not more response: **continuous GnRH shuts the gonadal axis
  down** while pulsatile GnRH drives it — the information is in the pulse
  frequency. *([3.4](lessons/03-04-endocrine-axes.md))*
- Swallowed food is topologically **outside** you; absorption is the crossing of
  an epithelium, and a non-absorbable luminal solute can hold litres of water
  hostage. *([4.1](lessons/04-01-gastrointestinal-system.md))*
- Slow waves are **subthreshold** — unlike the SA node, the rhythm permits a
  contraction rather than causing one.
  *([4.1](lessons/04-01-gastrointestinal-system.md))*
- The three acid stimuli **potentiate**, not add, and most of gastrin's and ACh's
  effect runs through histamine — which is why an H2 blocker knocks all three
  down. *([4.1](lessons/04-01-gastrointestinal-system.md))*
- Segmentation mixes; it does not propel. Long-distance sweeping happens between
  meals. *([4.1](lessons/04-01-gastrointestinal-system.md))*
- Not everything absorbed reaches the liver first — **chylomicrons enter lymph**
  and bypass hepatic first pass.
  *([4.1](lessons/04-01-gastrointestinal-system.md))*
- Pancreatic bicarbonate is not mere buffering: enzymes are inactive below pH 4,
  so without it they arrive on time and do nothing.
  *([4.1](lessons/04-01-gastrointestinal-system.md))*
- The dry heat routes reverse at **skin** temperature (~35 °C), not at 37 °C — a
  36 °C room is already heating you.
  *([4.2](lessons/04-02-thermoregulation.md))*
- Hot is not what kills; **wet-bulb** is. A 32 °C swamp has under 40 percent of a
  42 °C desert's heat-dumping capacity.
  *([4.2](lessons/04-02-thermoregulation.md))*
- Only **evaporated** sweat cools — and dripping is worst exactly when humidity
  is high, so the fluid cost and the cooling failure arrive together.
  *([4.2](lessons/04-02-thermoregulation.md))*
- **Fever is a moved set point; hyperthermia is a saturated effector.** Same
  thermometer reading, opposite treatments: antipyretic versus external cooling.
  Ask which way the effectors are pointing.
  *([1.1](lessons/01-01-homeostasis-feedback-control.md), [4.2](lessons/04-02-thermoregulation.md))*
- Fat is not the body's main insulation — **skin blood flow varies over a
  hundredfold** and is the adjustable term.
  *([4.2](lessons/04-02-thermoregulation.md))*
- Storage is not a small correction: 243 W of imbalance moves a 70 kg core 1 °C
  every 17 minutes. *([4.2](lessons/04-02-thermoregulation.md))*
- VO₂max does not measure the lung: at maximum the heart is at its ceiling while
  ventilation is at two-thirds of its own and saturation is still ~96 percent.
  *([4.3](lessons/04-03-exercise-integrative-physiology.md))*
- A modest rise in MAP hides two enormous cancelling changes — **flow up
  fivefold, resistance down fourfold.**
  *([4.3](lessons/04-03-exercise-integrative-physiology.md))*
- The baroreflex is **reset, not switched off** — which is why stopping a sprint
  abruptly can make you faint.
  *([2.3](lessons/02-03-hemodynamics-blood-pressure.md), [4.3](lessons/04-03-exercise-integrative-physiology.md))*
- Cardiovascular drift is not rising demand: **heart rate is compensating for
  falling stroke volume**, so heart rate is a poor intensity proxy late in a hot
  session. *([4.3](lessons/04-03-exercise-integrative-physiology.md))*
- Do not train the arteriovenous difference — it is already ~85 percent of a hard
  ceiling. **The headroom is in cardiac output.**
  *([4.3](lessons/04-03-exercise-integrative-physiology.md))*
- The ventilatory threshold is caused by **bicarbonate buffering liberating
  non-metabolic $\text{CO}_2$**, not by lactate signalling oxygen debt — lactate
  is itself a fuel. *([4.3](lessons/04-03-exercise-integrative-physiology.md))*
- Redistribution supplies only ~5 percent of muscle's extra blood flow; **the
  pump does the rest** — though redistribution matters enormously to the organs
  that lose their perfusion.
  *([4.1](lessons/04-01-gastrointestinal-system.md), [4.3](lessons/04-03-exercise-integrative-physiology.md))*
