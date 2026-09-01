# Neuroscience · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

One device, elaborated. A neuron is a leaky capacitor with batteries: the bilayer
fixes $c_m$, the open channels fix $\tau$ and $\lambda$, and everything from a
spike to a decision is that circuit repeated, wired, and read out. Use this card
for the constants the lessons compute with (specific capacitance, typical
resistivities, ion concentrations, reversal potentials), for the formulas that
have to be exact ($m^3h$ vs. $n^4$, $\lambda \propto \sqrt{a}$ vs.
$\theta \propto d$), and for the symbol collisions that will otherwise cost
you a sign.

**Scope discipline.** `neuroscience` owns **the neuron**: Hodgkin–Huxley, cable
theory, the central synapse in depth, circuit motifs, sensory coding, plasticity
and memory. It cedes the *derivation* of membrane potentials and of channel
gating to [biophysics](../biophysics/syllabus.md), and muscle, the neuromuscular
junction and autonomic transmission to [physiology](../physiology/syllabus.md).
A ceded topic is still **used freely here** — it is simply cited to its owner
rather than re-derived. Every such fact appears in *Assumed, not taught here*
with a pointer.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $V_m$, $V$ | membrane potential, inside minus outside | [1.1](lessons/01-01-neuron-as-a-device.md) |
| $c_m$, $C_m$ | **specific** membrane capacitance (per unit area) | [1.1](lessons/01-01-neuron-as-a-device.md) |
| $R_m$ | **specific** membrane resistance, $\Omega\,\text{cm}^2$ — "how few leak channels are open" | [1.1](lessons/01-01-neuron-as-a-device.md) |
| $R_{\text{in}}$ | input resistance of a whole cell, $R_m/A$ for a compact cell | [1.1](lessons/01-01-neuron-as-a-device.md) |
| $\tau$ | membrane time constant $R_mC_m$ — the window over which inputs sum | [1.1](lessons/01-01-neuron-as-a-device.md) |
| $g$, $\bar g$ | conductance; conductance with every channel open | [1.1](lessons/01-01-neuron-as-a-device.md) |
| $E_{\text{ion}}$ | equilibrium (= reversal) potential of one ion | [1.2](lessons/01-02-resting-membrane-potential.md) |
| $P_K:P_{Na}:P_{Cl}$ | relative permeabilities — velocities in a flux model, **not** conductances | [1.2](lessons/01-02-resting-membrane-potential.md) |
| $z$ | ionic valence, signed | [1.2](lessons/01-02-resting-membrane-potential.md) |
| $m$, $h$, $n$ | gating variables: Na activation, Na **availability**, K activation | [1.4](lessons/01-04-hodgkin-huxley-model.md) |
| $x_\infty(V)$, $\tau_x(V)$ | where a gate is heading; how fast it gets there | [1.4](lessons/01-04-hodgkin-huxley-model.md) |
| $\alpha_x$, $\beta_x$ | forward and backward gating rate constants, $\text{ms}^{-1}$ | [1.4](lessons/01-04-hodgkin-huxley-model.md) |
| $\phi$ | temperature rate factor, $Q_{10}\approx3$ | [1.4](lessons/01-04-hodgkin-huxley-model.md) |
| $a$, $d$ | fibre radius; fibre diameter | [1.5](lessons/01-05-cable-theory-conduction.md) |
| $R_i$ | intracellular (axial) resistivity, $\Omega\,\text{cm}$ | [1.5](lessons/01-05-cable-theory-conduction.md) |
| $r_i$, $r_m$, $c_m$ | the same quantities **per unit length of cable** | [1.5](lessons/01-05-cable-theory-conduction.md) |
| $\lambda$ | length constant $\sqrt{aR_m/2R_i}$ — where the leak wins | [1.5](lessons/01-05-cable-theory-conduction.md) |
| $D$ | cable diffusivity $\lambda^2/\tau = a/(2R_iC_m)$ — contains **no** $R_m$ | [1.5](lessons/01-05-cable-theory-conduction.md) |
| $\theta$ (axon) | conduction velocity, m/s | [1.5](lessons/01-05-cable-theory-conduction.md) |
| $L$, $L^{*}$ | internode length; its optimum $\sqrt{Dt_n}$ | [1.5](lessons/01-05-cable-theory-conduction.md) |
| $n$, $p$, $q$, $m$ (synapse) | release sites; release probability; quantal size; **quantal content** $np$ | [2.1](lessons/02-01-chemical-synaptic-transmission.md) |
| $N$, $\tau_{\text{rec}}$ | readily-releasable pool size; its refilling time constant | [2.1](lessons/02-01-chemical-synaptic-transmission.md) |
| PPR, $f$ | paired-pulse ratio; residual-calcium facilitation factor | [2.1](lessons/02-01-chemical-synaptic-transmission.md) |
| $E_{\text{syn}}$, $g_{\text{syn}}$ | reversal potential and conductance of a synapse | [2.2](lessons/02-02-neurotransmitters-receptors.md) |
| $B(V)$ | fraction of NMDA receptors **not** blocked by $\text{Mg}^{2+}$ | [2.2](lessons/02-02-neurotransmitters-receptors.md) |
| $g_L,E_L$; $g_e,E_e$; $g_i,E_i$ | leak, excitatory and inhibitory conductances and their batteries | [2.2](lessons/02-02-neurotransmitters-receptors.md) |
| $\Theta$ | distance from rest to threshold in mV (usually about 15) | [2.3](lessons/02-03-synaptic-integration.md) |
| $X = d/\lambda$ | **electrotonic** distance — what counts, not micrometres | [2.3](lessons/02-03-synaptic-integration.md) |
| $\lambda_{\text{AC}}(f)$ | frequency-dependent length constant; always shorter than $\lambda$ | [2.3](lessons/02-03-synaptic-integration.md) |
| $k$ (junction) | gap-junction coupling coefficient $V_2/V_1$ | [2.4](lessons/02-04-electrical-synapses.md) |
| $g_j$, $R_j$, $\tau_c$, $f_c$ | junctional conductance/resistance; coupling time constant; corner frequency | [2.4](lessons/02-04-electrical-synapses.md) |
| $w$, $\eta$ | synaptic weight; learning rate | [2.5](lessons/02-05-development-and-wiring.md) |
| $L$ (loop) | loop gain $gwk$ of a feedback circuit | [2.6](lessons/02-06-circuit-motifs-computation.md) |
| $r$, $I$, $g$ (circuit) | firing rate (Hz); input drive (pA); **open-loop gain** (Hz/pA) | [2.6](lessons/02-06-circuit-motifs-computation.md) |
| $\sigma$ (normalization) | semi-saturation constant in the normalization denominator | [2.6](lessons/02-06-circuit-motifs-computation.md) |
| $\sigma_c$, $\sigma_s$; $w_c$, $w_s$ | centre and surround widths; centre and surround total weights | [2.6](lessons/02-06-circuit-motifs-computation.md) |
| $\tau_a$, $\beta$ | adaptation time constant; tonic (DC) gain of a receptor | [3.1](lessons/03-01-transduction-neural-coding.md) |
| $f_i(s)$, $s_i$, $\sigma$ | tuning curve; preferred stimulus; tuning width | [3.1](lessons/03-01-transduction-neural-coding.md) |
| $\mathbf{P}$, $\hat{\mathbf c}_i$ | population vector; neuron $i$'s preferred-direction unit vector | [3.1](lessons/03-01-transduction-neural-coding.md) |
| $J(s)$ | Fisher information; $\rho$ is neuron density per stimulus unit | [3.1](lessons/03-01-transduction-neural-coding.md) |
| $c$, $\rho$ (noise) | mean pairwise **noise correlation** between neurons | [3.1](lessons/03-01-transduction-neural-coding.md) |
| $M(E)$ | cortical magnification, mm of cortex per degree at eccentricity $E$ | [3.2](lessons/03-02-vision.md) |
| $Z$, $T$ | acoustic impedance; power transmission fraction | [3.3](lessons/03-03-audition-somatosensation.md) |
| $\Delta t(\theta)$ | interaural time difference at azimuth $\theta$ | [3.3](lessons/03-03-audition-somatosensation.md) |
| $I_{\text{th}}$ | rheobase — the current a motor neuron needs to fire | [3.4](lessons/03-04-motor-systems.md) |
| $b_0$, $b_1$, $\theta_i$ | baseline rate; modulation depth; preferred direction (cosine tuning) | [3.4](lessons/03-04-motor-systems.md) |
| $G$ | stretch-reflex loop gain | [3.4](lessons/03-04-motor-systems.md) |
| $K$, $\sigma_p$, $\sigma_m$ | Kalman gain; prediction and measurement standard deviations | [3.5](lessons/03-05-motor-control-correction.md) |
| $T$, $\phi_{\text{PM}}$, $\omega_c$ | loop delay; phase margin; crossover frequency | [3.5](lessons/03-05-motor-control-correction.md) |
| $\delta_t$, $\gamma$, $V(s)$ | reward-prediction error; discount factor; state value | [3.5](lessons/03-05-motor-control-correction.md) |
| $\Delta t$ (STDP) | **spike-timing offset** $t_{\text{post}} - t_{\text{pre}}$ | [4.1](lessons/04-01-plasticity-ltp-ltd.md) |
| $A_\pm$, $\tau_\pm$ | STDP lobe amplitudes and **window** time constants | [4.1](lessons/04-01-plasticity-ltp-ltd.md) |
| $\theta_M$; $\theta_d$, $\theta_p$ | BCM sliding threshold; the depression and potentiation calcium thresholds | [4.1](lessons/04-01-plasticity-ltp-ltd.md) |
| $\varepsilon$ | cortical (slow-learner) learning rate | [4.2](lessons/04-02-memory-systems.md) |
| $R(t)$, $\tau$ (memory) | retrievability; **stability** of a memory trace | [4.2](lessons/04-02-memory-systems.md) |
| $\beta_j$ | attentional gain multiplying stimulus $j$'s drive | [4.3](lessons/04-03-attention-decision-making.md) |
| $A$, $B$, $\sigma$, $T_{\text{nd}}$ | drift rate; decision bound; diffusion noise; non-decision time | [4.3](lessons/04-03-attention-decision-making.md) |
| $S(t)$, $k$ (disease) | surviving fraction of a neuron population; its exponential loss rate | [4.4](lessons/04-04-disease-a-taste.md) |
| $\pi$, $d$ | fraction of a diagnostic category that is mechanistically homogeneous; effect size in SD | [4.4](lessons/04-04-disease-a-taste.md) |
| $\Phi$, $\epsilon$ | photon budget per second; indicator response $\Delta F/F$ per spike | [4.5](lessons/04-05-methods-a-taste.md) |

**Notation trap.** This course reuses letters harder than any other in the
library. The collisions that actually bite:

- $\tau$ is the **membrane time constant** in [1.1](lessons/01-01-neuron-as-a-device.md), [1.5](lessons/01-05-cable-theory-conduction.md) and [2.3](lessons/02-03-synaptic-integration.md), but $\tau_\pm$ in [4.1](lessons/04-01-plasticity-ltp-ltd.md) are the decay constants of the **spike-timing** window, and $\tau$ in [4.2](lessons/04-02-memory-systems.md) is a memory's **stability** in days. Also $\tau_{\text{rec}}$ (vesicle refilling, [2.1](lessons/02-01-chemical-synaptic-transmission.md)), $\tau_c$ (gap-junction coupling, [2.4](lessons/02-04-electrical-synapses.md)), $\tau_a$ (adaptation, [3.1](lessons/03-01-transduction-neural-coding.md)).
- $\lambda$ is the **length constant** in [1.5](lessons/01-05-cable-theory-conduction.md) and [2.3](lessons/02-03-synaptic-integration.md) — but a **Poisson rate** in the coincidence arithmetic of [2.3](lessons/02-03-synaptic-integration.md) P3 and a **gradient length constant** in [2.5](lessons/02-05-development-and-wiring.md).
- $g$ is **conductance** everywhere except [2.6](lessons/02-06-circuit-motifs-computation.md), where it is a cell's **open-loop gain** in Hz/pA; the attentional gain of [4.3](lessons/04-03-attention-decision-making.md) is $\beta$, and the myelin **g-ratio** of [1.5](lessons/01-05-cable-theory-conduction.md) is a dimensionless diameter ratio.
- $m$, $h$, $n$ are **gating variables** in [1.4](lessons/01-04-hodgkin-huxley-model.md), but in [2.1](lessons/02-01-chemical-synaptic-transmission.md) $m$ is **quantal content** and $n$ is the **number of release sites**; $n$ is also the normalization exponent in [2.6](lessons/02-06-circuit-motifs-computation.md) and [4.3](lessons/04-03-attention-decision-making.md).
- $p$ is **release probability** in [2.1](lessons/02-01-chemical-synaptic-transmission.md) but **spike probability per time bin** in [3.1](lessons/03-01-transduction-neural-coding.md)'s bits-per-spike arithmetic.
- $\theta$ is **conduction velocity** in [1.5](lessons/01-05-cable-theory-conduction.md), **distance to threshold in mV** in [2.6](lessons/02-06-circuit-motifs-computation.md), and a **direction or azimuth** in [3.1](lessons/03-01-transduction-neural-coding.md), [3.3](lessons/03-03-audition-somatosensation.md) and [3.4](lessons/03-04-motor-systems.md).
- $\sigma$ is a **tuning width** in [3.1](lessons/03-01-transduction-neural-coding.md), a **semi-saturation constant** in [2.6](lessons/02-06-circuit-motifs-computation.md) and [4.3](lessons/04-03-attention-decision-making.md), the **diffusion noise** of the drift–diffusion model in [4.3](lessons/04-03-attention-decision-making.md), and a receptive-field **Gaussian spread** in [3.2](lessons/03-02-vision.md).
- $k$ is a **subunit count** in [1.4](lessons/01-04-hodgkin-huxley-model.md), a **coupling coefficient** in [2.4](lessons/02-04-electrical-synapses.md), a **spatial frequency** in [2.6](lessons/02-06-circuit-motifs-computation.md), and a **degeneration rate** in [4.4](lessons/04-04-disease-a-taste.md).
- $A$ is **membrane area** in [1.1](lessons/01-01-neuron-as-a-device.md) and [3.4](lessons/03-04-motor-systems.md), but the **drift rate** in [4.3](lessons/04-03-attention-decision-making.md); $B$ is the **decision bound** there and the **Mg unblock fraction** $B(V)$ in [2.2](lessons/02-02-neurotransmitters-receptors.md).
- $K$ is the **Kalman gain** in [3.5](lessons/03-05-motor-control-correction.md), a **convolution kernel** in [2.6](lessons/02-06-circuit-motifs-computation.md), and a **joint stiffness** also in [3.5](lessons/03-05-motor-control-correction.md).

**Sign conventions, stated once.** Outward current is **positive**; inward
current is negative and is plotted downward. From
$I_{\text{ion}} = g_{\text{ion}}(V_m - E_{\text{ion}})$, an inward current
means $V_m$ lies below $E_{\text{ion}}$. Conductances are always positive — a negative one means
a sign is wrong upstream. Hodgkin and Huxley's own 1952 papers use $V$ as
displacement from rest with **depolarization negative**; every formula on this
card uses the modern absolute scale.

## Definitions

### Nernst equilibrium potential

The one voltage at which an ion's concentration gradient and the electric field
exactly cancel, so its net flux is zero.

$$E_{\text{ion}} = \frac{RT}{zF}\ln\frac{[\text{ion}]_{\text{out}}}{[\text{ion}]_{\text{in}}}$$

*Introduced:* [1.2](lessons/01-02-resting-membrane-potential.md); derived in [biophysics 4.4](../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md)

### Equilibrium versus steady state

A membrane permeable to **one** ion reaches a true equilibrium: zero current,
zero flux, no dissipation, no maintenance cost. A real neuron is permeable to
several and settles at a **steady state** where the individual currents are
large and merely cancel — gradients drain continuously and the pump pays for
them forever. *An oscilloscope cannot tell the two apart; the arithmetic can.*

*Introduced:* [1.2](lessons/01-02-resting-membrane-potential.md)

### Driving force

How far the membrane sits from an ion's happy voltage. It carries the sign of
the current, and it is what the Hodgkin–Huxley equations actually integrate.

$$I_{\text{ion}} = g_{\text{ion}}\,(V_m - E_{\text{ion}}), \qquad \text{driving force} = V_m - E_{\text{ion}}$$

*Introduced:* [1.2](lessons/01-02-resting-membrane-potential.md)

### Reversal potential

The voltage at which a conductance's current changes sign. It identifies the
carrier without any knowledge of the channel: measure how the reversal shifts
when you dilute an ion and compare with Nernst.

*Introduced:* [1.2](lessons/01-02-resting-membrane-potential.md), used as the identification tool in [1.3](lessons/01-03-the-action-potential.md)

### Threshold

Not a number written into the membrane. It is the **middle, unstable zero** of
the instantaneous current–voltage curve — the voltage above which further
depolarization produces net inward current. In the reduced phase plane it is a
**curve in state space**, which is why it moves with $h$, with $n$, with
background conductance, and with how fast you got there.

*Introduced:* [1.3](lessons/01-03-the-action-potential.md), made geometric in [1.4](lessons/01-04-hodgkin-huxley-model.md)

### Inactivation versus deactivation

**Deactivation** returns a channel to a *ready* closed state it can leave
immediately. **Inactivation** leaves it in a *distinct, unavailable* closed
state that needs repolarization **plus time** to escape. The asymmetry is the
entire source of the refractory period, of one-way propagation, and of
accommodation.

*Introduced:* [1.3](lessons/01-03-the-action-potential.md)

### Refractory period

**Absolute**: $h \approx 0$, so no stimulus of any size fires the cell (order
1 ms). **Relative**: $h$ recovering and $n$ still elevated, so a larger stimulus
is needed (several ms). It is not a mechanism — it is the slow variables still
being where the spike left them.

*Introduced:* [1.3](lessons/01-03-the-action-potential.md), explained in [1.4](lessons/01-04-hodgkin-huxley-model.md)

### Gating variable

The **probability that one independent gating subunit is permissive** — not a
fraction of the conductance and not a fudge factor. If a channel conducts only
when all $k$ subunits are permissive, its open probability is $x^k$, so the
exponent is a **subunit count**.

$$\tau_x(V)\,\frac{dx}{dt} = x_\infty(V) - x, \qquad x_\infty = \frac{\alpha_x}{\alpha_x+\beta_x},\quad \tau_x = \frac{1}{\alpha_x+\beta_x}$$

*Introduced:* [1.4](lessons/01-04-hodgkin-huxley-model.md); the microscopic two-state picture is [biophysics 4.5](../biophysics/lessons/04-05-excitable-membranes-action-potential.md)

### Availability

$h$ is availability, **not** inactivation: $h = 1$ means *not* inactivated. It
therefore **falls** with depolarization, and a rising $h$ during hyperpolarization
is *removal* of inactivation — the mechanism of post-inhibitory rebound and of
depolarization block.

*Introduced:* [1.4](lessons/01-04-hodgkin-huxley-model.md)

### Type I versus Type II excitability

Two routes from rest to repetitive firing, with different computational
consequences. **Type II** (Hopf, as in Hodgkin–Huxley itself): firing onset is
discontinuous at roughly 50 Hz, subthreshold dynamics are resonant, the phase
response is biphasic, and mutual excitation synchronizes. **Type I**
(saddle-node on a circle): firing is continuous from zero with
$f \propto \sqrt{I - I_c}$, no resonance, monotonic phase response. Adding one A-type K
current converts II into I.

*Introduced:* [1.4](lessons/01-04-hodgkin-huxley-model.md), used in [2.6](lessons/02-06-circuit-motifs-computation.md)

### Length constant

The distance over which a steady-state signal on a passive cable falls to
$1/e \approx 37$ percent. It is **not** "how far the signal goes" — decay is
exponential and never stops.

$$V(x) = V_0e^{-\lvert x\rvert/\lambda}, \qquad \lambda = \sqrt{\frac{r_m}{r_i}} = \sqrt{\frac{aR_m}{2R_i}} \;\propto\; \sqrt{a}$$

*Introduced:* [1.5](lessons/01-05-cable-theory-conduction.md)

### Cable equation

The membrane potential on a passive fibre obeys a **diffusion equation with a
first-order sink**. Voltage does not propagate down a passive cable; it
diffuses, so passive delay grows as the **square** of distance.

$$\lambda^{2}\frac{\partial^{2}V}{\partial x^{2}} = \tau\frac{\partial V}{\partial t} + V \qquad\Longleftrightarrow\qquad \frac{\partial V}{\partial t} = D\frac{\partial^{2}V}{\partial x^{2}} - \frac{V}{\tau}$$

*Introduced:* [1.5](lessons/01-05-cable-theory-conduction.md)

### Saltatory conduction and safety factor

The spike is regenerated at each node of Ranvier and glides passively across
each internode. The **safety factor** is the depolarization arriving at the next
node divided by that node's threshold; healthy myelinated fibres run near 6, and
conduction blocks when it approaches 1. Design requirement: $L \ll \lambda$ and
internode transit $L^2/D$ well inside the spike duration.

*Introduced:* [1.5](lessons/01-05-cable-theory-conduction.md)

### Quantal content

The average number of vesicles released per presynaptic spike, $m = np$. It is
what a "stronger synapse" usually means — and it hides the mechanism, because
two synapses with equal $m$ but different $p$ behave in **opposite** ways during
a train.

*Introduced:* [2.1](lessons/02-01-chemical-synaptic-transmission.md)

### Release probability

The probability that one docked-and-primed site releases on a given spike, set
by how tightly the vesicle is coupled to a calcium channel. It alone decides
whether a synapse depresses or facilitates: **high $p$ depresses, low $p$
facilitates**, with the crossover at $p^{*} = 1 - 1/f$.

*Introduced:* [2.1](lessons/02-01-chemical-synaptic-transmission.md)

### Calcium nanodomain

Synaptotagmin is a deliberately **low-affinity** sensor needing tens of
micromolar calcium, while bulk terminal calcium is 50–100 nM. Only within about
50 nm of an open channel's mouth does the concentration transiently reach
10–100 $\mu\text{M}$. Coupling distance is therefore a tunable design parameter,
and it is why release is a coincidence detector rather than a meter.

*Introduced:* [2.1](lessons/02-01-chemical-synaptic-transmission.md)

### Ionotropic versus metabotropic

An **ionotropic** receptor *is* the channel — binding site and pore on one
protein, sub-millisecond, gain of exactly one. A **metabotropic** receptor is a
GPCR whose effect runs through a cascade — tens of milliseconds to minutes, gain
of thousands. *Fast transmission carries the message; slow modulation sets the
operating regime.*

*Introduced:* [2.2](lessons/02-02-neurotransmitters-receptors.md); cascade machinery in [molecular-cell-biology 2.2](../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md)

### Excitatory and inhibitory

A property of the **receptor's reversal potential relative to threshold**, never
of the transmitter and never of the direction of the voltage change.

$$\text{excitatory} \iff E_{\text{syn}} > V_{\text{threshold}}, \qquad \text{inhibitory} \iff E_{\text{syn}} < V_{\text{threshold}}$$

*Introduced:* [2.2](lessons/02-02-neurotransmitters-receptors.md)

### NMDA receptor as a coincidence detector

Glutamate-gated but blocked at rest by an extracellular $\text{Mg}^{2+}$ ion
sitting in the pore; depolarization evicts it electrostatically. So it conducts
only when transmitter is present **AND** the cell is already depolarized — a
logical AND computed by physics, whose output is **calcium**, hence a chemical
signal confined to one spine. That confinement is what makes plasticity
input-specific.

$$B(V) = \left[1 + \frac{[\text{Mg}^{2+}]_o}{K}\,e^{-V/V_0}\right]^{-1}, \qquad [\text{Mg}^{2+}]_o = 1\ \text{mM},\ K = 3.6\ \text{mM},\ V_0 = 16\ \text{mV}$$

*Introduced:* [2.2](lessons/02-02-neurotransmitters-receptors.md), cashed out in [4.1](lessons/04-01-plasticity-ltp-ltd.md)

### Shunting inhibition

An inhibitory conductance whose reversal potential sits at rest contributes
**nothing to the numerator** of the conductance-weighted average and everything
to the denominator. It therefore produces zero voltage deflection and still
divides every EPSP. *Inhibition does not raise the bar; it shrinks the ruler.*

*Introduced:* [1.2](lessons/01-02-resting-membrane-potential.md), developed in [2.2](lessons/02-02-neurotransmitters-receptors.md) and [2.3](lessons/02-03-synaptic-integration.md)

### Divisive versus subtractive inhibition

A pure **shunt** ($E_i = E_L$) scales the input–output curve: it changes **gain**
without changing what the cell is selective for. A **hyperpolarizing** synapse
($E_i$ well below rest) adds a negative numerator term and offsets the curve by
an amount nearly independent of drive: it changes **threshold**. Real synapses
lie between, and where they lie is set by $E_{Cl}$ and by dendritic position.

*Introduced:* [2.2](lessons/02-02-neurotransmitters-receptors.md), [2.3](lessons/02-03-synaptic-integration.md)

### Electrotonic distance

Distance measured in length constants, $X = d/\lambda$. It, not micrometres and
not synapse count, determines how much of a distal input reaches the trigger
zone — and because the cable is a low-pass filter, a fast EPSP's **peak**
attenuates two- to fourfold more than the steady-state figure predicts.

*Introduced:* [2.3](lessons/02-03-synaptic-integration.md)

### Coincidence detector versus integrator

The same spike trains asked different questions. A **short** $\tau$ (a few ms)
makes a cell report *how together* its inputs arrived; a **long** $\tau$ (10–30 ms)
makes it report *how many*. Feedforward inhibition can impose the first regime on
a cell that would otherwise be in the second, by replacing the membrane's window
with a disynaptic delay.

*Introduced:* [2.3](lessons/02-03-synaptic-integration.md), made a circuit in [2.6](lessons/02-06-circuit-motifs-computation.md)

### Axon initial segment

The 20–50 $\mu\text{m}$ of axon just past the soma, carrying the highest density
of voltage-gated Na channels and therefore the lowest threshold. **"Reaching
threshold" always means reaching threshold there**, which is why perisomatic and
axo-axonic inhibition are so disproportionately powerful.

*Introduced:* [1.1](lessons/01-01-neuron-as-a-device.md), located precisely in [2.3](lessons/02-03-synaptic-integration.md)

### Coupling coefficient

A gap junction is a resistive divider loaded by the postsynaptic capacitance, so
it can only **attenuate**, and it attenuates fast signals hardest.

$$k \equiv \frac{V_2}{V_1} = \frac{R_2}{R_j+R_2} = \frac{g_j}{g_j+g_2} \;<\; 1 \ \text{always}$$

Note $k$ contains no $R_1$: coupling strength is a property of the junction and
the **receiving** cell, so asymmetric coupling needs no rectification.

*Introduced:* [2.4](lessons/02-04-electrical-synapses.md)

### The area theorem

Coupling is a single-pole low-pass filter, so it discards a waveform's shape and
preserves its **area**: $\int V_2\,dt = k\int V_1\,dt$, exactly. Since a spike
carries about $+100$ mV·ms and the afterhyperpolarization following it about
$-1000$ mV·ms, **the net effect of a presynaptic spike on an electrically coupled
neighbour is hyperpolarizing** — sign inversion with no sign-inverting element
anywhere.

*Introduced:* [2.4](lessons/02-04-electrical-synapses.md)

### Chemoaffinity

Two opposing smooth gradients read against each other, not an address book. An
axon stops where
$[\text{EphA}]_{\text{axon}} \times [\text{ephrin-A}]_{\text{target}}$
balances its drive to extend. The code is
**relative position**, which is why half a retina expands to fill a whole tectum.

*Introduced:* [2.5](lessons/02-05-development-and-wiring.md)

### Exuberance and pruning

Initial connectivity is overproduced and overlapping; development proceeds
substantially **by subtraction** — branch retraction, synapse elimination,
programmed neuron death, microglial engulfment of complement-tagged synapses.
*A system that overproduces and selects can be specified by a rule; one that
builds exactly what it needs must be specified by a plan.*

*Introduced:* [2.5](lessons/02-05-development-and-wiring.md)

### Critical period

Not the passive expiry of a clock. The window **opens** when inhibitory
circuitry (especially parvalbumin interneurons) matures enough to give cortex a
working excitation–inhibition balance, and **closes** when structural brakes
engage — perineuronal nets and myelin-associated inhibitors. Both brakes are
removable, which is why the finding is therapeutically live.

*Introduced:* [2.5](lessons/02-05-development-and-wiring.md)

### Lateral inhibition

Neighbouring units subtract a weighted average of each other, giving a
**zero-sum** kernel: uniform input produces exactly zero and only structure
survives. The discrete kernel $(-1,+2,-1)$ is a second difference, so it
annihilates constants **and** linear ramps — the cell reports curvature.

*Introduced:* [2.6](lessons/02-06-circuit-motifs-computation.md), applied to the retina in [3.2](lessons/03-02-vision.md)

### Divisive normalization

A neuron reports its **share** of the drive in its neighbourhood rather than its
absolute drive. One of the few genuinely canonical computations: it fits contrast
responses in V1, odour coding, multisensory integration, value coding, and
attention.

$$R_i = \gamma\,\frac{D_i^{\,n}}{\sigma^{\,n} + \sum_{j\in\text{pool}} D_j^{\,n}}$$

*Introduced:* [2.6](lessons/02-06-circuit-motifs-computation.md), used for attention in [4.3](lessons/04-03-attention-decision-making.md)

### Excitation–inhibition balance

Cortex runs with large excitatory and large inhibitory currents that nearly
cancel, leaving a small fluctuating net drive. Not a compromise between two
failure modes — **the only regime in which a recurrent network is simultaneously
stable, fast and sensitive**. Loop gain above one is a seizure; well below one is
silence.

*Introduced:* [2.2](lessons/02-02-neurotransmitters-receptors.md), formalized in [2.6](lessons/02-06-circuit-motifs-computation.md), broken in [4.4](lessons/04-04-disease-a-taste.md)

### Receptive field

A description of a **computation**, not a piece of anatomy: the effective
weighting a circuit imposes on its inputs. It has no fixed physical boundary and
it changes with contrast, adaptation and attention — which an anatomical
structure could not.

*Introduced:* [3.1](lessons/03-01-transduction-neural-coding.md)

### Adaptation

An active, tunable subtraction of the running average — a **high-pass filter**,
not fatigue. It trades away absolute-level information to buy dynamic range,
which is why you can judge changes in light or temperature but not absolute
values.

*Introduced:* [3.1](lessons/03-01-transduction-neural-coding.md)

### Rate, temporal and population codes

**Rate** buys precision with *time* (50–200 ms); **temporal** codes (phase
locking, first-spike latency) carry sub-millisecond structure; **population**
codes buy the same precision with *neurons*, in one short window. A fleeing
animal cannot spend 200 ms, so evolution generally bought neurons.

*Introduced:* [3.1](lessons/03-01-transduction-neural-coding.md)

### Population vector

Let every neuron vote for its own preferred stimulus with a weight equal to how
far above baseline it is firing, and take the direction of the sum. Neurons
firing *below* baseline vote against their preference and carry just as much
signal — which is why the baseline must be subtracted.

$$\mathbf{P} = \sum_i (r_i - \bar r)\,\hat{\mathbf c}_i, \qquad \hat s = \arg(\mathbf P)$$

*Introduced:* [3.1](lessons/03-01-transduction-neural-coding.md), first demonstrated in motor cortex ([3.4](lessons/03-04-motor-systems.md))

### Noise correlations

Trial-to-trial covariance of rates at a **fixed** stimulus. Shared fluctuations
do not average away, so pooling floors at $\sigma_1\sqrt{c}$ no matter how many
neurons you add. What matters is whether the correlation lies **along the
direction the code varies in** — a shared multiplicative gain is invisible to a
population-vector readout.

*Introduced:* [3.1](lessons/03-01-transduction-neural-coding.md), used in [3.2](lessons/03-02-vision.md) and [4.3](lessons/04-03-attention-decision-making.md)

### Labelled lines

There is no information in a spike about its own meaning. Optic-nerve and
auditory-nerve spikes are the same event; modality is set by which pathway is
active. Press on your closed eye and you see light. (Müller's law of specific
nerve energies.)

*Introduced:* [3.1](lessons/03-01-transduction-neural-coding.md)

### Univariance

A single photoreceptor's output depends only on **how many photons it caught**,
not on their wavelength — a dim optimal light and a bright poor one are
indistinguishable. Colour therefore exists only as a **ratio across cone types**,
which is why you need at least two.

*Introduced:* [3.2](lessons/03-02-vision.md)

### Cortical magnification

Cortex allocates area in proportion to **peripheral sampling density**, not to
the size of the sensory surface. Foveal magnification tracks ganglion-cell
density in V1; the somatosensory homunculus tracks afferent density in S1. Same
principle, two surfaces.

$$M(E) = \frac{17.3}{E+0.75}\ \text{mm/deg}, \qquad d(E) = 17.3\ln\frac{E+0.75}{0.75}$$

*Introduced:* [3.2](lessons/03-02-vision.md), matched in touch in [3.3](lessons/03-03-audition-somatosensation.md)

### Selectivity then invariance

The visual hierarchy alternates: **aligned pooling** of centre–surround inputs
builds orientation selectivity (simple cells); **position pooling** over
same-orientation simple cells discards the detail that does not matter (complex
cells). Convolution then pooling — the architecture convolutional networks
borrowed.

*Introduced:* [3.2](lessons/03-02-vision.md)

### Tonotopy versus somatotopy

**Somatotopy** (like retinotopy) maps a *surface* onto a surface. **Tonotopy**
maps an *abstract stimulus dimension* onto a surface — there is no place on your
body corresponding to 1 kHz. The cochlea manufactures the axis it maps, by a
mechanical decomposition performed before any neuron is involved.

*Introduced:* [3.3](lessons/03-03-audition-somatosensation.md)

### Direct gating versus cascade transduction

The universal trade in sensory transduction: **amplification costs time**.
Mechanotransduction tethers the channel to the stimulus (tip links, Piezo2) and
opens in tens of microseconds with gain near 1 — fast enough to phase-lock to a
waveform. Cascades (phototransduction, olfaction) buy $10^5$ of gain and pay
tens to hundreds of milliseconds for it.

*Introduced:* [3.1](lessons/03-01-transduction-neural-coding.md), contrasted directly in [3.3](lessons/03-03-audition-somatosensation.md)

### Final common path

Every movement — reflex, rhythm or deliberate reach — reaches muscle through the
**alpha motor neuron**. All descending control is therefore a competition to set
the firing rate of a motor neuron pool.

*Introduced:* [3.4](lessons/03-04-motor-systems.md)

### The size principle

Feed one shared drive to a motor pool. Small motor neurons have less membrane,
hence higher $R_{\text{in}}$, hence lower rheobase, so they recruit first — and
they happen to innervate fewer fibres. **Recruitment order, constant fractional
force resolution, and fatigue ordering all fall out of a passive electrical
property that nobody selected for.** It is a consequence of *common* input, not
a wiring constraint.

*Introduced:* [3.4](lessons/03-04-motor-systems.md)

### Forward and inverse models

Two different objects that get conflated. The **inverse model** is the
controller: desired consequence in, motor command out. The **forward model** is
the predictor: command in, predicted consequence out — a sense organ for the
present, needed because every measurement is 50–150 ms stale.

$$\text{forward: } \hat x_{t+1} = f(\hat x_t, u_t) \qquad \text{inverse: } u_t = g(x^{*}_{t+1}, \hat x_t)$$

*Introduced:* [3.5](lessons/03-05-motor-control-correction.md)

### Reward prediction error

Dopamine does not signal reward. It signals **better or worse than expected**: a
burst to an unpredicted reward, nothing at all to a fully predicted one, and a
**pause below baseline** when an expected reward is omitted. A reward signal
cannot go negative on the absence of something.

$$\delta_t = r_t + \gamma V(s_{t+1}) - V(s_t)$$

*Introduced:* [3.5](lessons/03-05-motor-control-correction.md); the algorithm is [reinforcement-learning](../reinforcement-learning/syllabus.md)

### Selection by disinhibition

The basal ganglia output nuclei are GABAergic and **tonically active**, clamping
motor thalamus off by default. Selection works by switching the inhibition off
for the winner while leaving everyone else clamped — winner-take-all with the
global inhibition supplied as the resting state.

*Introduced:* [3.5](lessons/03-05-motor-control-correction.md)

### Hebb's postulate

When A repeatedly **takes part in firing** B, A's efficiency in firing B
increases. Read the verb: it is a causal, **ordered** claim, and the ordering is
measurable. "Cells that fire together wire together" throws away the one thing
STDP shows to be essential.

$$\frac{dw}{dt} = \eta\,u\,v$$

*Introduced:* [4.1](lessons/04-01-plasticity-ltp-ltd.md), used informally in [2.5](lessons/02-05-development-and-wiring.md)

### LTP and LTD

Long-term potentiation and depression are **both actively induced**, both
signalled by postsynaptic calcium, and distinguished by **how much** arrives:
modest and prolonged activates the high-affinity phosphatase calcineurin (LTD);
large and brief activates the low-affinity, self-latching kinase CaMKII (LTP);
below $\theta_d$ nothing happens at all. Early LTP is expressed by AMPA receptor
trafficking; late LTP needs transcription and new protein.

*Introduced:* [4.1](lessons/04-01-plasticity-ltp-ltd.md)

### Cooperativity, associativity, input specificity

The three properties of LTP, each load-bearing. **Cooperativity**: enough inputs
must be co-active to relieve the Mg block — a threshold, so noise cannot rewrite
the network. **Associativity**: a weak input potentiates if a strong one
depolarizes the cell — the associative learning primitive. **Input specificity**:
only active synapses change, because the coincidence output is a chemical
confined to one spine.

*Introduced:* [4.1](lessons/04-01-plasticity-ltp-ltd.md)

### Spike-timing-dependent plasticity

Run the NMDA mechanism forward in time and the timing rule falls out. Pre before
post: the backpropagating spike strips the Mg block **while glutamate is still
bound**, giving a large brief calcium transient — LTP. Post before pre: the block
is relieved before glutamate arrives and restored before it does, leaving only a
modest prolonged rise at rest — LTD. **The rule is causal, not correlational**,
so a network under it learns to predict.

*Introduced:* [4.1](lessons/04-01-plasticity-ltp-ltd.md)

### BCM rule and the sliding threshold

A Hebbian rule with a modification threshold that chases the cell's own recent
activity **superlinearly**, so a cell that becomes too active raises its own bar
out of reach. It regulates the cell's **firing rate**, not its weights — the
weight pattern stays free, so selectivity can emerge while total drive is pinned.
Predicts metaplasticity, which is measured.

$$\frac{dw_i}{dt} = \eta\,u_i\,v\,(v-\theta_M), \qquad \theta_M = \frac{\overline{v^{2}}}{v_0}$$

*Introduced:* [4.1](lessons/04-01-plasticity-ltp-ltd.md)

### Synaptic scaling

The slow homeostatic stabilizer: over hours to days a neuron multiplies **all**
its excitatory weights by a common factor to restore its target drive.
**Multiplicative, not subtractive** — multiplication preserves every relative
comparison that LTP wrote; subtraction destroys them.

*Introduced:* [4.1](lessons/04-01-plasticity-ltp-ltd.md)

### Synaptic tagging and capture

How a nucleus-wide protein supply keeps synapse-level specificity. Strong
stimulation sets a **local tag** at the active synapse *and* triggers somatic
transcription; weak stimulation sets a tag only. Plasticity-related proteins are
dispatched cell-wide and captured only by tagged synapses. *The delivery is
global; the address is local.*

*Introduced:* [4.1](lessons/04-01-plasticity-ltp-ltd.md)

### Declarative versus non-declarative memory

The criterion is **how the memory is expressed** — by report or by performance —
not conscious versus unconscious. Declarative splits into episodic and semantic
(medial temporal lobe at first); non-declarative covers procedural skills
(striatum, cerebellum), priming (neocortex), conditioning (amygdala, cerebellum)
and habituation.

*Introduced:* [4.2](lessons/04-02-memory-systems.md)

### Synaptic versus systems consolidation

They share a word and nothing else. **Synaptic** consolidation is minutes to
hours, protein synthesis at one synapse, the early-to-late LTP transition.
**Systems** consolidation is weeks to years, reorganization *across structures*,
so a memory that first needed the hippocampus comes to be supported by neocortex
alone. The temporal gradient of retrograde amnesia measures the second.

*Introduced:* [4.2](lessons/04-02-memory-systems.md)

### Complementary learning systems

One-shot learning and interference-free storage cannot coexist in one set of
weights, because how fast a network learns something new is exactly how fast it
destroys what it knew. The resolution is two networks: a **fast** hippocampal
indexer with sparse separated codes, and a **slow** cortical learner trained by
**interleaved replay** from it.

*Introduced:* [4.2](lessons/04-02-memory-systems.md)

### Pattern separation and pattern completion

Two operations in tension, and you need both. **Separation** (dentate gyrus) maps
similar inputs to dissimilar sparse codes so today's breakfast does not overwrite
yesterday's. **Completion** (CA3, densely recurrent) recovers a whole stored
pattern from a partial cue. Too much of either destroys the other.

*Introduced:* [4.2](lessons/04-02-memory-systems.md)

### Reconsolidation

Reactivating a consolidated memory can return it to a labile,
protein-synthesis-dependent state. *Retrieval is not reading a file; it is
opening it for editing* — which is why memory is reconstructive and confidence is
a poor guide to fidelity. Well-supported phenomenon, unsettled boundary
conditions.

*Introduced:* [4.2](lessons/04-02-memory-systems.md)

### Drift–diffusion model

Noisy evidence integrates until it hits a bound. Two parameters carry everything:
the **drift rate** $A$ is evidence quality, imposed by the world; the **bound**
$B$ is a policy, and setting it *is* the speed–accuracy trade-off. Correctly
scaled, the decision variable is the running **log posterior odds**, so the model
is the continuous-time limit of Wald's sequential probability ratio test — the
optimal procedure, not merely a plausible one.

$$dx = A\,dt + \sigma\,dW, \qquad \text{absorbing bounds at } x = \pm B$$

*Introduced:* [4.3](lessons/04-03-attention-decision-making.md)

### Attention as normalization

Attention adds no term; it **multiplies one stimulus's drive by $\beta$ before
the division**, so it appears in numerator and denominator alike. The sharp
prediction: attentional effects are large only when a **competitor** is present,
because with a lone stimulus the boost nearly cancels itself. A spotlight has no
reason to care about the neighbours.

*Introduced:* [4.3](lessons/04-03-attention-decision-making.md)

### Lesion inference

Damage $M$, lose behaviour $B$, and you have learned exactly one thing: **$M$ is
necessary for $B$ in the intact system.** "M computes B", "M represents B" and
"B is localized to M" are all strictly stronger than the evidence supports.
Remove a car's fuel pump and it will not move.

*Introduced:* [4.4](lessons/04-04-disease-a-taste.md)

### Compensation threshold

Nervous systems adapt continuously to their own decay, so symptoms appear when
compensation **fails**, not when damage begins. Parkinson's motor signs need
50–60 percent nigral loss and 70–80 percent striatal dopamine loss, which is
roughly fourteen years of silent degeneration. *A well-regulated variable is the
last one to reveal that something is wrong.*

*Introduced:* [4.4](lessons/04-04-disease-a-taste.md)

### Double dissociation

Patient A loses X and keeps Y; patient B loses Y and keeps X, **on the same
task**. A single dissociation always has the standing alternative that one task
is simply harder or more fragile; only both directions force two independent
substrates.

*Introduced:* [4.2](lessons/04-02-memory-systems.md), used as an inferential rule in [4.4](lessons/04-04-disease-a-taste.md)

### The four method jobs

**Measuring** buys correlation and nothing more. **Perturbing** is the only
category that buys causation. **Mapping** constrains dynamics without determining
them — weights, short-term plasticity and neuromodulatory state are not in a
wiring diagram. **Modelling** earns its keep by naming a number that would
falsify it.

*Introduced:* [4.5](lessons/04-05-methods-a-taste.md)

## Formulas and rules

### Biophysical constants and typical values

These are the numbers the lessons compute with; look them up rather than
half-remembering them.

| Quantity | Value | Note |
|---|---|---|
| Specific membrane capacitance $C_m$ | $1\ \mu\text{F/cm}^2$ | set by bilayer thickness alone; **a biological constant** |
| Specific membrane resistance $R_m$ | $10^{3}$–$5\times10^{4}\ \Omega\,\text{cm}^2$ (typical $10^{4}$) | the only knob a cell has for $\tau$ |
| Axial resistivity $R_i$ | $\approx 100\ \Omega\,\text{cm}$ | copper is $1.7\times10^{-6}$; axoplasm is $6\times10^{7}$ times worse |
| Membrane time constant $\tau = R_mC_m$ | 1 ms (leaky, coincidence detector) to 50 ms (integrator); cortical 10–30 ms | **area-independent** |
| Resting potential | $-65$ to $-70$ mV | |
| Threshold | $-50$ to $-55$ mV, so $\Theta \approx 15$ mV | a current balance, not a constant |
| $RT/F$ at 37 °C | $26.7$ mV; one decade $= 61.5$ mV | $RT/2F = 13.35$ mV for divalents |
| Na/K-ATPase stoichiometry | 3 Na out, 2 K in per ATP | electrogenic; a few mV of $V_{\text{rest}}$ |
| Brain metabolic share | 2 percent of body mass, 20 percent of resting metabolism | mostly pumping ions back |
| Charge moved by a 100 mV swing | about 0.03 percent of a soma's Na | spikes barely dent the gradients |
| Cortical pyramidal cell synapse count | about $10^{4}$ (CA1 up to $3\times10^{4}$) | brain total of order $10^{15}$ |

Mammalian ion concentrations (mM) and the potentials they give at 37 °C:

| Ion | out | in | $z$ | $E_{\text{ion}}$ |
|---|---|---|---|---|
| K | 5 | 140 | $+1$ | $\mathbf{-89}$ mV |
| Na | 145 | 15 | $+1$ | $\mathbf{+61}$ mV |
| Cl (mature, KCC2) | 110 | 7 | $-1$ | $\mathbf{-73.5}$ mV |
| Cl (immature, NKCC1) | 110 | 25 | $-1$ | $\mathbf{-39.6}$ mV — GABA depolarizes |
| Ca | 2 | $10^{-4}$ | $+2$ | $\mathbf{+132}$ mV — four orders of gradient |

Resting permeability ratios $P_K:P_{Na}:P_{Cl} = 1:0.04:0.45$ give
$V_m = -69.7$ mV. The corresponding **chord conductance** ratios at that voltage
are $1:0.162:0.469$ — Na's conductance ratio is four times its permeability
ratio, because conductance counts the ions available to carry current.

Squid giant axon (Hodgkin–Huxley, 6.3 °C): $[\text{Na}]_{o,i} = 440, 50$;
$[\text{K}]_{o,i} = 20, 400$; $E_{\text{Na}} = +50$ to $+58$, $E_{\text{K}} = -77$
to $-80$, $E_L = -54.4$ mV; $\bar g_{\text{Na}} = 120$, $\bar g_{\text{K}} = 36$,
$g_L = 0.3\ \text{mS/cm}^2$; rest $-65$ mV.

*From* [1.1](lessons/01-01-neuron-as-a-device.md), [1.2](lessons/01-02-resting-membrane-potential.md), [1.3](lessons/01-03-the-action-potential.md), [1.4](lessons/01-04-hodgkin-huxley-model.md), [1.5](lessons/01-05-cable-theory-conduction.md)

### Resting potential

| Quantity | Formula |
|---|---|
| Nernst | $E_{\text{ion}} = \dfrac{RT}{zF}\ln\dfrac{[\text{ion}]_{\text{out}}}{[\text{ion}]_{\text{in}}}$ |
| **GHK** (flux model, rectifying) | $V_m = \dfrac{RT}{F}\ln\dfrac{P_K[\text{K}]_o + P_{Na}[\text{Na}]_o + P_{Cl}[\text{Cl}]_i}{P_K[\text{K}]_i + P_{Na}[\text{Na}]_i + P_{Cl}[\text{Cl}]_o}$ |
| **Chord conductance** (ohmic; what HH uses) | $V_m = \dfrac{g_KE_K + g_{Na}E_{Na} + g_{Cl}E_{Cl}}{g_K+g_{Na}+g_{Cl}}$ |
| Driving force and current | $I_{\text{ion}} = g_{\text{ion}}(V_m - E_{\text{ion}})$ |
| RC relaxation | $C\dot v = -g_Lv \Rightarrow v(t) = v(0)e^{-t/\tau}$, $\tau = R_mC_m$ |
| Step response | $\Delta V(t) = IR_{\text{in}}\bigl(1-e^{-t/\tau}\bigr)$; rheobase $I = \Theta/R_{\text{in}}$ |

Note that Cl enters GHK with its concentrations **flipped**, because $z=-1$. GHK
and the chord formula agree at $V_{\text{rest}}$ **by construction** (both say
net current is zero) and diverge everywhere else.

*From* [1.1](lessons/01-01-neuron-as-a-device.md), [1.2](lessons/01-02-resting-membrane-potential.md)

### The Hodgkin–Huxley system

$$C_m\frac{dV}{dt} = I_{\text{inj}} - \bar g_{\text{Na}}m^{3}h\,(V-E_{\text{Na}}) - \bar g_{\text{K}}n^{4}\,(V-E_{\text{K}}) - g_L(V-E_L)$$

$$\tau_m(V)\dot m = m_\infty(V)-m, \qquad \tau_h(V)\dot h = h_\infty(V)-h, \qquad \tau_n(V)\dot n = n_\infty(V)-n$$

| Quantity | Value / rule |
|---|---|
| Two forms of the kinetics | $\dot x = \alpha_x(1-x)-\beta_x x \iff \tau_x\dot x = x_\infty - x$ — **fit in the first, think in the second** |
| Exponent meaning | $x^k$ is the probability all $k$ independent subunits are permissive |
| Conductance half-point | $x = 2^{-1/k}$: $0.500$ ($k{=}1$), $0.707$ ($k{=}2$), $\mathbf{0.841}$ ($k{=}4$) |
| Consequence | a measured $g_K(V)$ curve sits about **35 mV depolarized** from $n_\infty(V)$ |
| Delayed foot | $(1-e^{-t/\tau})^{4}$ has **zero initial slope and curvature**; no first-order process can |
| At rest ($-65$ mV) | $m_\infty = 0.053$, $\tau_m = \mathbf{0.24}$ ms; $h_\infty = 0.596$, $\tau_h = 8.5$ ms; $n_\infty = 0.318$, $\tau_n = 5.5$ ms |
| Half-points of $x_\infty$ | $m$ at $-40$, $h$ at $-62$, $n$ at $-53.5$ mV |
| Temperature | multiply all six rates by $\phi = 3^{(T-6.3)/10}$; $\phi(37\,^\circ\text{C}) = 29$ |

**The whole spike follows from $\tau_m \ll \tau_h,\tau_n$** — a factor of 20 to
35 at rest. $m$ is always already where it is going; the refractory period is
the slow variables still being where the spike left them, and its duration is
$\tau_h$ and $\tau_n$ and nothing else.

Reduced two-variable form (set $m = m_\infty(V)$, and $h \approx 0.89 - 1.1n$):
the $n$-nullcline is a rising sigmoid, the $V$-nullcline is **N-shaped**, they
cross once at a stable rest point, and increasing $I_{\text{inj}}$ destabilizes
it through a **Hopf bifurcation** into a limit cycle. Push further and a second
Hopf gives **depolarization block**. Near a saddle-node on a circle instead,
$\dot x = \mu + x^2$ gives $T = \pi/\sqrt{\mu}$, hence $f \propto \sqrt{I-I_c}$.

*From* [1.3](lessons/01-03-the-action-potential.md), [1.4](lessons/01-04-hodgkin-huxley-model.md)

### Cable theory and conduction

| Quantity | Formula |
|---|---|
| Per-unit-length constants | $r_i = \dfrac{R_i}{\pi a^{2}}$, $r_m = \dfrac{R_m}{2\pi a}$, $c_m = 2\pi a\,C_m$ |
| Cable equation | $\lambda^{2}V_{xx} = \tau V_t + V$ |
| **Length constant** | $\lambda = \sqrt{r_m/r_i} = \sqrt{aR_m/2R_i} \propto \sqrt{a}$ |
| **Time constant** | $\tau = r_mc_m = R_mC_m$ — **radius cancels exactly** |
| Diffusivity | $D = \lambda^2/\tau = 1/(r_ic_m) = a/(2R_iC_m)$ — **contains no $R_m$** |
| Steady-state decay | $V(x) = V_0e^{-\lvert x\rvert/\lambda}$ |
| Input resistance, infinite cable | $R_{\text{in}} = \tfrac12 r_i\lambda = \tfrac12\sqrt{r_ir_m} \propto a^{-3/2}$ |
| Passive delay | $t \sim L^2/D$ — **quadratic in distance** |
| **Unmyelinated velocity** | $\theta = K\sqrt{a/2R_i} \propto \sqrt{d}$, so area $\propto \theta^{4}$ |
| **Myelinated velocity** | $\theta \propto d$; empirically $\theta \approx 6d$ (m/s, $d$ in $\mu\text{m}$) |
| Optimal internode | $L^{*} = \sqrt{D\,t_n}$ — transit time equals node delay |
| Myelin, $n$ wraps | $R_m \to nR_m$, $C_m \to C_m/n$, so $\lambda$ rises as $\sqrt{n}$, $D$ as $n$, and $\tau$ is **unchanged** |

Worked scales: a 1 $\mu\text{m}$ unmyelinated fibre has $\lambda = 0.5$ mm,
$\tau = 10$ ms, $D = 0.25\ \text{cm}^2/\text{s}$; the same axon myelinated with
200 wraps has $\lambda = 1.7$ cm and $D = 300\ \text{cm}^2/\text{s}$. Nodes sit
about 1 mm apart with roughly 1000 times the internodal Na channel density; the
g-ratio (axon diameter over outer diameter) is held near 0.6–0.7, which is what
makes wraps scale with $d$ and turns the quartic price of speed into a quadratic
one. Unmyelinated C fibres run 0.5–2 m/s; a 20 $\mu\text{m}$ myelinated fibre
runs 120 m/s.

**Myelin's real trick is the capacitance.** The resistance increase buys reach
($\lambda$); the capacitance decrease buys speed ($D$, which has no $R_m$ in it).
Demyelination therefore produces **slowing before block**, and failure is
frequency-dependent because nodal $h$ has not recovered.

*From* [1.5](lessons/01-05-cable-theory-conduction.md)

### Synaptic release and short-term plasticity

| Quantity | Formula |
|---|---|
| Calcium cooperativity | release $\propto [\text{Ca}^{2+}]^{4}$ — a **threshold detector**, not a meter |
| Binomial model | $P(k) = \binom{n}{k}p^k(1-p)^{n-k}$; $m = np$, $\mu = mq$, $\sigma^{2} = np(1-p)q^{2}$ |
| **Quantal content from failures (Poisson)** | $P(0) = e^{-m} \Rightarrow m = \ln\!\bigl(N_{\text{trials}}/N_{\text{failures}}\bigr)$ |
| Quantal content from the mean | $m = \mu/q$ — an **independent** estimate; the two agreeing is the vesicle hypothesis, tested |
| Failure rate, binomial | $P(0) = (1-p)^{n}$ — use this, not $e^{-m}$, when $p$ is not small |
| Splitting $n$ from $p$ | $\sigma^{2}/\mu = q(1-p)$, then $n = m/p$; also $\mathrm{CV}^{-2} = np/(1-p)$ |
| Sub-Poisson test | Poisson predicts $\sigma^2 = mq^2$; observing less is direct evidence $p$ is large |
| **Paired-pulse ratio** | $\text{PPR} = (1-p_1)\,f$, so $\text{PPR}>1 \iff p_1 < 1 - 1/f$ |
| Depletion condition | pool runs down when spikes arrive faster than $1/(p\,\tau_{\text{rec}})$ |

**High $p$ depresses (a differentiator, reports rate *changes*); low $p$
facilitates (an integrator, reports *sustained* rate).** The same spike train
delivered to two synapses differing only in $p$ produces opposite postsynaptic
outcomes — the reading is chosen by the synapse, not the sender.

Synapse numbers worth having: cleft 20–25 nm (gap junction 3.5 nm); vesicle
about 40 nm outer diameter holding 2,000–5,000 transmitter molecules at 100–300
mM; peak cleft transient about 1 mM lasting about 1 ms; readily-releasable pool
5–10 vesicles per active zone; $p$ spanning 0.1–0.9 (often about 0.2); synaptic
delay 0.5–1 ms, of which **almost none is diffusion** (crossing the cleft takes
about 0.5 $\mu\text{s}$) — it is Ca channel activation plus the sensor-to-fusion
step.

*From* [2.1](lessons/02-01-chemical-synaptic-transmission.md)

### Receptors, sign and shunting

| Quantity | Formula |
|---|---|
| Synaptic current | $I_{\text{syn}} = g_{\text{syn}}(V_m - E_{\text{syn}})$ |
| Sign criterion | excitatory iff $E_{\text{syn}} >$ **threshold** (not rest) |
| Mixed-cation reversal | $E_{\text{syn}} = \dfrac{RT}{F}\ln\dfrac{P_{Na}[\text{Na}]_o + P_K[\text{K}]_o}{P_{Na}[\text{Na}]_i + P_K[\text{K}]_i}$ |
| NMDA unblock | $B(V) = \bigl[1 + \tfrac{1}{3.6}e^{-V/16}\bigr]^{-1}$ at 1 mM external Mg |
| Conductance-weighted voltage | $V_m = \dfrac{g_LE_L + g_eE_e + g_iE_i}{g_L+g_e+g_i}$ |
| EPSP under a shunt | $\Delta V_e = \dfrac{Ng(E_e-E_L)}{g_L + Ng + g_i}$ — $g_i$ appears **only in the denominator** |
| Division factor | $\dfrac{g_L+Ng}{g_L+Ng+g_i}$ |

Reversal potentials of the fast families: AMPA / nicotinic (non-selective
cation) $\approx -1$ mV, **excitatory**; GABA-A / glycine (Cl) $-78$ to $-59$ mV,
**inhibitory either way**; GABA-B via GIRK (pure K) $-95$ mV, strongly
inhibitory. Sample $B(V)$: 0.043 at $-70$, 0.137 at $-50$, 0.356 at $-30$, 0.783
at 0 mV — so the NMDA current is 3.5 times **larger** at $-30$ than at $-70$ mV
despite the smaller driving force. That negative slope conductance is the
coincidence detector.

*From* [2.2](lessons/02-02-neurotransmitters-receptors.md)

### Synaptic integration

| Quantity | Formula |
|---|---|
| **Temporal summation**, plateau | $V_{\text{peak}}^{\infty} = \dfrac{V_0}{1-e^{-1/(f\tau)}}$ |
| Time-average depolarization | $\bar V = V_0 f\tau$ — and $f\tau$ is the number of EPSPs held in memory |
| Rate needed by one axon | $f_{\min} = \dfrac{-1}{\tau\ln(1-V_0/\Theta)}$ |
| **Coincidence window**, two inputs | $\Delta t_{\max} = \tau\ln\dfrac{V_0}{\Theta-V_0}$ |
| **Spatial summation** | $V_{\text{soma}} = V_{\text{local}}e^{-X}$, $X = d/\lambda$ |
| AC length constant | $\lambda_{\text{AC}}(f) = \lambda\Bigl/\sqrt{\tfrac12\bigl(1+\sqrt{1+(2\pi f\tau)^2}\bigr)}$ |
| **Sublinearity** | $\Delta V(N) = \dfrac{Ng(E_e-E_L)}{g_L+Ng}$; ratio to linear $= \dfrac{g_L+g}{g_L+Ng}$ |
| Chance coincidence rate | two Poisson trains at rate $r$ within $\pm W$: $2Wr^{2}$ |

Scale check: a cortical unitary EPSP is 0.2–1 mV against $\Theta \approx 15$ mV,
so **no single cortical synapse decides anything** — one axon would need about
2 kHz, while about 40 axons at 50 Hz suffice. Contrast the neuromuscular
junction, engineered as a relay: 100–200 quanta and a 40–50 mV endplate
potential, safety factor well above one.

Summation is reliably **not** linear: electrically close synapses interfere
(sublinear), clustered synapses recruiting NMDA receptors or dendritic spikes go
**supralinear**, and electrically remote branches sum nearly independently — which
is what makes a pyramidal cell better modelled as a small two-layer network than
as one summing point.

*From* [2.3](lessons/02-03-synaptic-integration.md)

### Gap junctions

| Quantity | Formula |
|---|---|
| Coupling coefficient | $k = \dfrac{R_2}{R_j+R_2} = \dfrac{g_j}{g_j+g_2} < 1$ |
| Asymmetry with no rectification | $k_{1\to2}/k_{2\to1} = R_2/R_1$ for large $R_j$ |
| Transfer function | $H(s) = \dfrac{k}{1+s\tau_c}$, $\tau_c = \dfrac{R_jR_2}{R_j+R_2}C_2 \approx \tau_m$ |
| Corner frequency | $f_c = 1/(2\pi\tau_c) \approx 15$–30 Hz |
| **Area theorem** | $\int V_2\,dt = k\int V_1\,dt$, exactly |
| Rectangular pulse response | $V_2(T) = kA\bigl(1-e^{-T/\tau_c}\bigr)$ |
| Noise averaging over $N$ coupled cells | shared signal noise falls as $\sigma/\sqrt N$ |

Measured $k$ between cortical interneurons is 0.01–0.2. A 1 ms, 100 mV spike
transfers at about **0.7 percent** while a 100 ms, 10 mV afterhyperpolarization
transfers at the full $k$ — ten times smaller and equally visible. Coupling
therefore **cannot relay spikes**; it synchronizes populations by sharing slow
subthreshold voltage, and it averages noise.

*From* [2.4](lessons/02-04-electrical-synapses.md)

### Development and wiring

| Quantity | Formula |
|---|---|
| Connectome information | $I \approx (\text{synapses}) \times \log_2 N_{\text{neurons}}$ |
| Genome ceiling | $\le 2$ bits per base pair |
| Human ratio | $3.6\times10^{15}/6.2\times10^{9} \approx 6\times10^{5}$ — a **budget of $6\times10^{-5}$ bits per synapse** |
| Gradient length constant | $\lambda = L/\ln F$ for a fold-change $F$ over length $L$ |
| Positional resolution | $\Delta x = \epsilon\lambda = \epsilon L/\ln F$ — improves only **logarithmically** in $F$ |
| Counting limit on $\epsilon$ | $\epsilon \approx 1/\sqrt{N_{\text{bound receptors}}}$ |
| Competitive Hebbian rule | $\dot w_i = \eta\bigl(\langle a_iy\rangle - \tfrac1M\sum_j\langle a_jy\rangle\bigr)$ |
| Ocular dominance instability | from $w_L = w_R$, $\dot w_L = \eta\sigma^{2}\delta$ — the symmetric point is **unstable** |

A gradient locates an axon to roughly 15–20 $\mu\text{m}$, a couple of cell
diameters — enough for a neighbourhood, not a partner. The remaining precision
comes from activity, and the activity need not be sensory: **retinal waves
supply the required correlation structure before the eyes open.** The competition
model's decisive prediction is that **binocular deprivation is milder for either
eye than monocular deprivation**, which a disuse model cannot produce and which
is why clinical practice patches the good eye.

*From* [2.5](lessons/02-05-development-and-wiring.md)

### Circuit motifs

| Motif | Result |
|---|---|
| Feedforward excitation | coincidence window $\delta \le \tau\ln\dfrac{a}{\theta-a}$ — **shorter than $\tau$**, and it collapses as inputs weaken |
| Feedforward inhibition | window becomes the **disynaptic delay** $\Delta \approx 2$ ms, independent of $\tau$ — the circuit overrides the biophysics |
| **Feedback inhibition** | $r = \dfrac{gI}{1+L}$, $L = gwk$; robustness $\dfrac{d\ln r}{d\ln g} = \dfrac{1}{1+L}$ |
| Delayed feedback inhibition | Hopf bifurcation; with a 10–12 ms lag the limit cycle sits at **35–50 Hz (gamma)** |
| **Recurrent excitation** | $r = \dfrac{gI}{1-g w}$ — amplifies by 10 at $gw = 0.9$; $gw \ge 1$ unchecked is a seizure |
| Lateral inhibition | $\hat K(k) = w_ce^{-\sigma_c^2k^2/2} - w_se^{-\sigma_s^2k^2/2}$; $\hat K(0) = w_c - w_s$ |
| Band-pass peak | $k^{*} = \sqrt{\dfrac{4\ln(\sigma_s/\sigma_c)}{\sigma_s^{2}-\sigma_c^{2}}}$ |
| Divisive normalization | $R_i = \gamma D_i^{n}\bigl/\bigl(\sigma^{n}+\sum_j D_j^{n}\bigr)$ |
| Winner-take-all | $d = \dfrac{\Delta I}{1-a}$, $s = \dfrac{\sum I}{1-a+2b}$ — amplify the difference, suppress the sum |

**The sign is everything**: $1+L$ for an inhibitory loop is bounded and
stabilizing for any $L$; $1-L$ for an excitatory loop blows up as $L\to1$. There
are fewer motifs here than the list suggests — normalization is feedback
inhibition over a pool, and winner-take-all is recurrent excitation plus
normalization.

*From* [2.6](lessons/02-06-circuit-motifs-computation.md)

### Coding

| Quantity | Formula |
|---|---|
| Adaptation as a filter | $\dfrac{R(\omega)}{S(\omega)} = g\dfrac{i\omega\tau_a}{1+i\omega\tau_a} + \beta$; corner $f_c = 1/(2\pi\tau_a)$ |
| Purely phasic vs. tonic | $\beta = 0$ (Pacinian) versus $\beta$ a decent fraction of $g$ (Merkel) |
| **Weber–Fechner** | $\Delta I = kI \iff R = c\ln(I/I_0)$; one JND gives $\Delta r = c\ln(1+k)$ at **every** level |
| Stevens | $\psi = \kappa I^{\alpha}$: 0.33 brightness, 1 length, **3.5 electric shock** (expansive) |
| Gaussian tuning | $f_i(s) = f_{\max}e^{-(s-s_i)^2/2\sigma^2}$; FWHM $= 2\sqrt{2\ln2}\,\sigma$ |
| Cosine tuning | $r_i(\theta) = b_0 + b_1\cos(\theta-\theta_i)$ |
| Population vector | $\mathbf P = \sum_i (r_i-\bar r)\hat{\mathbf c}_i$; uniform preferences give $\mathbf P = \tfrac{Nb_1}{2}(\cos\theta,\sin\theta)$ **exactly** |
| Angular error, Poisson counts | $\sigma_\theta \approx \dfrac{1}{b_1}\sqrt{\dfrac{2b_0}{NT}}$ |
| Fisher information | $J(s) = T\sum_i \dfrac{[f_i'(s)]^2}{f_i(s)}$; Gaussian tiling gives $J = \dfrac{\sqrt{2\pi}\rho f_{\max}T}{\sigma}$ |
| Cramér–Rao | $\sigma_{\text{est}} \ge 1/\sqrt{J}$ |
| **Correlated-noise ceiling** | $\mathrm{Var} = \dfrac{\sigma_1^2}{N}\bigl[1+(N-1)c\bigr] \to c\,\sigma_1^{2}$ |
| Bits per spike | $H/p \to \log_2(1/p) + \log_2 e$ as $p\to0$ |

**Broad tuning is coverage, not sloppiness**: Fisher information rewards a large
$f'(s)$ where the stimulus actually is, and a very sharp curve is silent and
uninformative almost everywhere. A hundred neurons tuned 94° wide localize to
about 2°. But averaging cannot beat $\sigma_1\sqrt c$ — at $c = 0.15$ you get a
factor of 2.6 and then nothing, forever, which is why noise correlations are
measured.

*From* [3.1](lessons/03-01-transduction-neural-coding.md), [3.4](lessons/03-04-motor-systems.md)

### Vision

| Quantity | Formula / value |
|---|---|
| **Difference-of-Gaussians field** | $w(\mathbf x) = \dfrac{A_c}{2\pi\sigma_c^2}e^{-\lvert\mathbf x\rvert^2/2\sigma_c^2} - \dfrac{A_s}{2\pi\sigma_s^2}e^{-\lvert\mathbf x\rvert^2/2\sigma_s^2}$ |
| Its transform | $\hat w(\mathbf f) = A_ce^{-2\pi^2\sigma_c^2\lvert\mathbf f\rvert^2} - A_se^{-2\pi^2\sigma_s^2\lvert\mathbf f\rvert^2}$ |
| **DC gain** | $\hat w(\mathbf 0) = A_c - A_s = 0$ when balanced — blind to uniform light **at any intensity** |
| Peak spatial frequency | $f_{\text{peak}} = \dfrac{1}{\pi}\sqrt{\dfrac{\ln(\sigma_s/\sigma_c)}{\sigma_s^2-\sigma_c^2}}$; about 2.8 cyc/deg foveally |
| Redundancy saving | $\mathrm{Var}(x_i-x_j) = 2\sigma^2(1-r)$; $\Delta H = -\tfrac12\log_2(1-r)$ bits… |
| …in numbers | 1.16 bits at $r = 0.9$; 1.66 bits at $r = 0.95$ |
| Cortical magnification | $M(E) = 17.3/(E+0.75)$ mm/deg; $d(E) = 17.3\ln\frac{E+0.75}{0.75}$ mm |
| Foveal sampling | cone spacing 2.4 $\mu\text{m}$ = 0.5 arcmin; Nyquist limit 60 cyc/deg (20/20 is 30) |

Bottleneck: about $10^{8}$ rods and $5\times10^{6}$ cones onto about $10^{6}$
optic-nerve axons — a hundredfold compression, spent on **differences**. About 90
percent of ganglion axons go to the LGN. Photoreceptors are **depolarized in the
dark** and hyperpolarize to light; the ON/OFF split is a receptor difference
(sign-conserving ionotropic versus sign-inverting mGluR6). At the chiasm only
nasal fibres cross, so **each visual hemifield, not each eye, is represented
contralaterally**. The central 10° occupies about 55 percent of V1's horizontal
extent.

*From* [3.2](lessons/03-02-vision.md), [2.6](lessons/02-06-circuit-motifs-computation.md)

### Audition and somatosensation

| Quantity | Formula / value |
|---|---|
| Tip-link gating | $P_{\text{open}}(x) = \bigl[1+\exp(-z(x-x_0)/k_BT)\bigr]^{-1}$ |
| Bundle sensitivity | operating range $\pm100$ nm; threshold deflection about **0.3 nm** |
| Impedance mismatch | $T = \dfrac{4Z_1Z_2}{(Z_1+Z_2)^2}$; air-to-fluid gives $1.1\times10^{-3}$, i.e. $-30$ dB |
| Ossicular gain | $\dfrac{A_{\text{tymp}}}{A_{\text{footplate}}}\times\text{lever} \approx \dfrac{55}{3.2}\times1.3 = 22$, i.e. $+27$ dB |
| **Greenwood map** | $f(x) = A(10^{ax}-k)$, $A = 165.4$ Hz, $a = 2.1$, $k = 0.88$, $x$ from the **apex** |
| Its inverse | $x = \tfrac1a\log_{10}\bigl(f/A + k\bigr)$ |
| Hair-cell driving force | endolymph at $+80$ mV with $E_K \approx 0$ across the apical membrane, so about 125 mV drives K **in** |
| **Woodworth ITD** | $\Delta t(\theta) = \dfrac{r}{c}(\theta + \sin\theta)$; max **656 $\mu\text{s}$** at $r = 8.75$ cm |
| Behavioural ITD threshold | about **10 $\mu\text{s}$**, from about 100 convergent inputs each jittering 100 $\mu\text{s}$ |
| Two-point threshold | $\approx 2s$ with $s = 1/\sqrt{\text{afferent density}}$ |

Cochlea: 35 mm, stiffness falling about a hundredfold base to apex; about 3,500
inner hair cells (the sensors, 95 percent of afferents) and 12,000 outer hair
cells (prestin-based motors giving 40–50 dB of gain, sharpened tuning, and
compression of 0.2–0.3 dB per dB). **Otoacoustic emissions are the proof: no
passive filter emits energy.** Equal musical intervals occupy equal stretches of
membrane, so a fixed length of damage costs a fixed number of octaves. Phase
locking fails above about 4 kHz and the phase cue becomes ambiguous above about
760 Hz, while head shadow requires about 2 kHz — hence duplex theory. Fingertip:
140 afferents per cm², predicted two-point threshold 1.7 mm against 2–3 mm
measured. Conduction velocities: Aβ 35–75, Aδ 5–30, C 0.5–2 m/s. Dorsal columns
cross **in the medulla**; spinothalamic crosses **within 1–2 segments** — hence
the split deficit of a cord hemisection.

*From* [3.3](lessons/03-03-audition-somatosensation.md)

### Motor systems and control

| Quantity | Formula |
|---|---|
| **Rheobase** | $I_{\text{th}} = \dfrac{\Delta V_{\text{th}}}{R_{\text{in}}} = \dfrac{\Delta V_{\text{th}}A}{R_m}$ — proportional to membrane area |
| Fractional force step | with $f_i = f_1e^{k(i-1)}$, $\Delta F/F_n \to 1-e^{-k}$; 100 units over a hundredfold range give **4.5 percent** |
| Reflex load rejection | $\Delta L = \Delta L_{\text{open}}/(1+G)$, with $G$ near 1 in health |
| Reflex latency budget | conduction dominates; a knee jerk is about 19 ms and would be 1 s unmyelinated |
| Loop oscillation frequency | phase reaches $\pi$: $\omega T_d + \arctan(\omega\tau_m) = \pi$; the simple version is $f = 1/(2T)$ |
| **Delay-limited bandwidth** | $\omega_c \le \phi_{\text{PM}}/T$ — at $T = 100$ ms and 60° margin, $f_c \le 1.7$ Hz |
| **Kalman state estimate** | $\hat x = (1-K)\hat x^{-} + Ky$, $K = \dfrac{\sigma_p^2}{\sigma_p^2+\sigma_m^2}$, $\sigma_{\text{post}}^2 = \dfrac{\sigma_p^2\sigma_m^2}{\sigma_p^2+\sigma_m^2} = K\sigma_m^2$ |
| Temporal-difference error | $\delta_t = r_t + \gamma V(s_{t+1}) - V(s_t)$ |

Motor unit types (with $R_m \approx 2\times10^{3}\ \Omega\,\text{cm}^2$,
$\Delta V_{\text{th}} = 10$ mV): **S** at $R_{\text{in}} = 2.0\ \text{M}\Omega$
and 5 nA rheobase, few oxidative fibres, fatigue-resistant; **FR** at 1.0
M$\Omega$ and 10 nA; **FF** at 0.5 M$\Omega$ and 20 nA, many glycolytic fibres,
fast to fatigue. **Recruitment order and metabolic order coincide, and neither
was arranged.** Innervation ratio spans about 10 fibres per motor neuron in
extraocular muscle to over 1000 in gastrocnemius. Rate coding fills the gaps
between recruitments: the floor is set by the afterhyperpolarization (8–10 Hz in
slow units), the ceiling by fusion (about 30 Hz slow, 80 Hz fast).

Tremor frequencies fall straight out of $f = 1/2T$: the 50 ms spinal loop gives
about 10 Hz (physiological tremor), the 100 ms transcortical loop about 5 Hz
(intention tremor), and clonus after loss of descending inhibition is measured at
5–8 Hz. Cerebellar signs — dysmetria and intention tremor — are what a Kalman
filter looks like when its prediction degrades and the weight flips onto the
stale measurement.

*From* [3.4](lessons/03-04-motor-systems.md), [3.5](lessons/03-05-motor-control-correction.md)

### Plasticity

| Quantity | Formula |
|---|---|
| Hebbian rule | $\dot w = \eta uv$ — pure positive feedback, $w(t) = w_0e^{\eta u^2 t}$, no stable fixed point |
| **STDP window** | $\Delta w = A_+e^{-\Delta t/\tau_+}$ for $\Delta t>0$; $-A_-e^{\Delta t/\tau_-}$ for $\Delta t<0$ |
| Fitted values | $\tau_+ \approx 17$ ms, $\tau_- \approx 34$ ms, $A_+ \approx 1.0$, $A_- \approx 0.53$ percent |
| Lobe areas | $A_+\tau_+ = 17.0$ against $A_-\tau_- = 18.0$ — **depression wins**, a designed-in stabilizer |
| Uncorrelated drift | $\dfrac1w\dfrac{dw}{dt} = r_{\text{pre}}r_{\text{post}}\bigl(A_+\tau_+ - A_-\tau_-\bigr)$ |
| **BCM** | $\dot w_i = \eta u_iv(v-\theta_M)$, $\theta_M = \overline{v^2}/v_0$ — stable fixed point at $v = v_0$ |
| Calcium bands | baseline: nothing; $\theta_d < \text{Ca} < \theta_p$: LTD (calcineurin); above $\theta_p$: LTP (CaMKII) |
| Synaptic scaling | multiply every $w$ by a common $\alpha$ — preserves all ratios |

$\Delta t = t_{\text{post}} - t_{\text{pre}}$ on this card, with potentiation for
$\Delta t > 0$. **Half the literature plots the other convention and the window
is asymmetric, so always name it.** BCM regulates the *rule*; scaling regulates
the *weights*; the two are separated by orders of magnitude in timescale
(minutes versus hours) so they do not erase each other.

*From* [4.1](lessons/04-01-plasticity-ltp-ltd.md)

### Memory

| Quantity | Formula |
|---|---|
| Slow-learner convergence | $\lVert\mathbf w - \mathbf w^{*}\rVert = (1-\varepsilon)^k\lVert\mathbf w_0-\mathbf w^{*}\rVert$ |
| Exposures for 95 percent | $k = \ln 0.05/\ln(1-\varepsilon)$; about **300** at $\varepsilon = 0.01$ |
| The constraint | one-shot learning needs $\varepsilon \approx 1$, which guarantees overwriting |
| Retrievability | $R(t) = e^{-t/\tau}$, reset to 1 by a successful retrieval |
| Spacing rule | test at $t \approx \tau$, where $R = e^{-1} \approx 0.37$ — effortful but recoverable |
| Resulting schedule | $\tau$ doubles per effortful success, so intervals go 1, 2, 4, 8, 16, 32 days |

Cramming fails in this model for a mechanical reason: reviews spaced minutes
apart all have $R > 0.9$, so **none of them is effortful and $\tau$ never grows**.
Spaced repetition is a controller holding retrievability at a fixed setpoint
while the stability it is measuring grows underneath it.

*From* [4.2](lessons/04-02-memory-systems.md)

### Attention and decision

| Quantity | Formula |
|---|---|
| Normalization with attention | $R_i = R_{\max}\dfrac{\sum_j\beta_jd_{ij}}{\sigma+\sum_j\beta_jD_j}$ |
| Pooled variance | $\mathrm{Var}(\bar r) = \dfrac{\sigma_r^2}{N}\bigl[1+(N-1)\rho\bigr] \to \rho\sigma_r^2$ |
| Drift–diffusion | $dx = A\,dt + \sigma\,dW$, absorbing at $\pm B$ |
| **Accuracy** | $P_{\text{correct}} = \bigl[1+e^{-2AB/\sigma^2}\bigr]^{-1}$ |
| **Mean decision time** | $T_{\text{decision}} = \dfrac{B}{A}\tanh\!\left(\dfrac{AB}{\sigma^{2}}\right)$ |
| Reaction time | $T_{\text{decision}} + T_{\text{nd}}$, with $T_{\text{nd}} = 200$–400 ms |
| Log posterior odds | $\log\dfrac{P_c}{1-P_c} = \dfrac{2AB}{\sigma^{2}}$ — the decision variable **is** a log-likelihood ratio |
| Limits | $A\to0$: $T\to B^2/\sigma^2$; $A$ large: $T\to B/A$ |
| Reward rate | $\mathrm{RR}(B) = \dfrac{P_{\text{correct}}(B)}{T_{\text{decision}}(B)+T_{\text{dead}}}$ |

**Errors fall exponentially in bound height while time grows only linearly**,
which is why the speed–accuracy curve buys cheap accuracy first and then
almost nothing. A reward-rate-maximizing observer settles near **90 percent**
accuracy, not 98 — and that optimum shifts by ten points when the inter-trial
interval changes, with nothing about the stimulus altering. Raising $A$ (better
evidence) is not a movement along the trade-off: it makes the observer faster
**and** more accurate at once, because $A$ and $B$ enter accuracy through $AB$
but time through $B/A$.

*From* [4.3](lessons/04-03-attention-decision-making.md)

### Disease and methods

| Quantity | Formula |
|---|---|
| Exponential degeneration | $S(t) = e^{-kt}$; prodrome length $= \ln(1/S_{\text{dx}})/k$ |
| Parkinson's thresholds | motor signs at 50–60 percent nigral loss, 70–80 percent striatal dopamine loss |
| Diluted effect size | $d_{\text{obs}} = \pi d$ for a subgroup of fraction $\pi$ |
| Sample size | $n \approx \dfrac{2(z_{0.975}+z_{0.80})^2}{d^2} = \dfrac{15.7}{d^2}$ per group |
| **Heterogeneity tax** | $n_{\text{mixed}}/n_{\text{pure}} = \pi^{-2}$ |
| Discriminability of a marker | $\text{AUC} = \Phi(d/\sqrt2)$ |
| **Imaging photon budget** | $\mathrm{SNR} = \epsilon\sqrt{n} = \epsilon\sqrt{\Phi/(fN)}$ |

The imaging formula is the cleanest statement of the space–time–coverage trade:
quadrupling frame rate, or quadrupling cell count, each **halve** your ability to
see a spike. Numbers worth carrying: a 2 mm isotropic fMRI voxel holds about
$4\times10^{5}$ neurons and reports one haemodynamic number 4–6 s late; a
whole-brain analysis at 3 mm has about 44,000 voxels, so an uncorrected
threshold of 0.001 yields about **44 false positives under the null**; an
extracellular electrode hears about 210 neurons and resolves 5–15, so spike
sorting is a clustering problem with merge, split and miss rates; GCaMP6f gives
$\Delta F/F \approx 0.19$ per spike with a 140 ms half-time, so **millisecond
timing is not recoverable** whatever the frame rate.

What each design licenses: measurement gives *carries information about*, never
*causes*. Silencing gives **necessity** (as currently wired); activation gives
**sufficiency of that drive pattern**, which is not the natural code. Both null
results — behaviour survives silencing, or nothing follows activation — are
nearly uninterpretable, because redundancy and compensation are everywhere.

*From* [4.4](lessons/04-04-disease-a-taste.md), [4.5](lessons/04-05-methods-a-taste.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Nernst and GHK derived from the electrochemical potential; ion permeation physics | [biophysics 4.4](../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md) |
| Two-state Boltzmann channel gating — gating charge, slope factor, $P_{\text{open}}(V)$ underneath $m_\infty$ and $h_\infty$ | [biophysics 4.5](../biophysics/lessons/04-05-excitable-membranes-action-potential.md) · [biophysics 2.2](../biophysics/lessons/02-02-boltzmann-two-state.md) |
| Cooperative binding and Hill coefficients (the fourth-power calcium dependence) | [biophysics 2.4](../biophysics/lessons/02-04-cooperativity-allostery.md) |
| Bilayer self-assembly and membrane mechanics — why $C_m$ is a constant | [biophysics 3.4](../biophysics/lessons/03-04-self-assembly-hydrophobic.md) · [biophysics 3.5](../biophysics/lessons/03-05-membrane-mechanics.md) |
| Diffusion and the $\sqrt{Dt}$ law used at the synaptic cleft | [biophysics 1.3](../biophysics/lessons/01-03-diffusion-ficks-laws.md) |
| ATP as the cell's free-energy currency; steady state versus equilibrium | [biophysics 2.1](../biophysics/lessons/02-01-free-energy-cell-currency.md) |
| Single-channel records read as molecular state sequences | [biophysics 4.6](../biophysics/lessons/04-06-single-molecule-inference.md) |
| **Muscle**: sarcomere, cross-bridge cycle, excitation–contraction coupling, length–tension, force–velocity | [physiology 1.6](../physiology/lessons/01-06-muscle-contraction.md) |
| **The neuromuscular junction** as an organ-level structure, its safety factor, and autonomic transmission | [physiology 1.5](../physiology/lessons/01-05-neuromuscular-autonomic-transmission.md) |
| The Na/K-ATPase and the cotransporters (KCC2, NKCC1) that set the gradients | [physiology 1.2](../physiology/lessons/01-02-membrane-transport.md) |
| Cardiac action potentials, the plateau, and the ventricle as a gap-junction syncytium | [physiology 2.1](../physiology/lessons/02-01-cardiac-electrophysiology.md) |
| Negative feedback masking a disturbance until its authority is exhausted (the compensation threshold) | [physiology 1.1](../physiology/lessons/01-01-homeostasis-feedback-control.md) |
| Thermoreception as a regulated variable rather than a sensory one | [physiology 4.2](../physiology/lessons/04-02-thermoregulation.md) |
| **GPCR cascades and second messengers** — G proteins, cAMP, IP3, and the arithmetic of stage gain | [molecular-cell-biology 2.1](../molecular-cell-biology/lessons/02-01-receptors-reading-outside-world.md) · [2.2](../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md) |
| Kinase cascades as switches (CaMKII autophosphorylation, calcineurin) | [molecular-cell-biology 2.3](../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md) |
| SNARE-based membrane trafficking and vesicle fusion | [molecular-cell-biology 1.4](../molecular-cell-biology/lessons/01-04-endomembrane-trafficking.md) |
| CREB-dependent transcription behind late LTP | [molecular-cell-biology 4.2](../molecular-cell-biology/lessons/04-02-eukaryotic-transcription-machine.md) |
| Cytoskeleton and motor-driven transport along an axon | [molecular-cell-biology 1.2](../molecular-cell-biology/lessons/01-02-cytoskeleton-three-filaments.md) · [1.3](../molecular-cell-biology/lessons/01-03-motors-cargo-logistics.md) |
| **Hopf bifurcation and limit cycles**; flows on the line; nullclines and phase portraits | [dynamical-systems 3.3](../dynamical-systems/lessons/03-03-hopf-bifurcation.md) · [2.3](../dynamical-systems/lessons/02-03-limit-cycles.md) · [1.1](../dynamical-systems/lessons/01-01-flows-on-the-line.md) · [1.5](../dynamical-systems/lessons/01-05-phase-portraits.md) |
| Saddle-node bifurcation (the Type I firing route) | [dynamical-systems 3.1](../dynamical-systems/lessons/03-01-saddle-node-transcritical.md) |
| **Feedback control, delay and stability** — phase margin, why a delayed loop oscillates | [control-systems 1.1](../control-systems/lessons/01-01-feedback-and-the-control-problem.md) · [3.4](../control-systems/lessons/03-04-gain-and-phase-margins.md) |
| Observers and state estimation (the forward model as a Kalman-style observer) | [control-systems 5.4](../control-systems/lessons/05-04-pole-placement-observers.md) |
| **Mutual information** as the measure of a neural code; entropy; channel capacity | [information-theory 1.3](../information-theory/lessons/01-03-mutual-information.md) · [1.1](../information-theory/lessons/01-01-entropy-uncertainty-surprise.md) · [3.1](../information-theory/lessons/03-01-discrete-channels-capacity.md) |
| Relative entropy and the log-likelihood ratio behind the drift–diffusion bound | [information-theory 1.4](../information-theory/lessons/01-04-relative-entropy-kl-jensen.md) |
| **Reward prediction error and temporal-difference learning** as an algorithm | [reinforcement-learning](../reinforcement-learning/syllabus.md) (syllabus only — no lessons yet) |
| Ohm's law, KCL, dividers, Thévenin equivalents, and first-order RC transients | [circuits 1.3](../circuits/lessons/01-03-kirchhoffs-laws-kcl-kvl.md) · [1.4](../circuits/lessons/01-04-voltage-current-dividers.md) · [2.4](../circuits/lessons/02-04-thevenin-norton-max-power.md) · [3.2](../circuits/lessons/03-02-first-order-rc-rl-transients.md) |
| Nodal analysis (the three-node dendritic shunt calculation) | [circuits 2.1](../circuits/lessons/02-01-nodal-analysis.md) |
| Transfer functions, low-pass filters, convolution, Fourier transforms, filter banks | [signals-systems 2.5](../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md) · [1.4](../signals-systems/lessons/01-04-convolution-continuous-time.md) · [2.3](../signals-systems/lessons/02-03-continuous-time-fourier-transform.md) · [4.4](../signals-systems/lessons/04-04-filter-design-basics.md) |
| The sampling theorem behind cone-lattice acuity and two-point discrimination | [signals-systems 3.1](../signals-systems/lessons/03-01-sampling-nyquist-shannon.md) |
| The heat/diffusion equation and its Green's function (the cable equation is one) | [pdes 2.1](../pdes/lessons/02-01-heat-diffusion-equations.md) · [pdes 4.2](../pdes/lessons/04-02-heat-equation-line-heat-kernel.md) |
| Binomial and Poisson distributions; the Poisson limit used for quantal analysis | [prob-stat-refresher 2.2](../prob-stat-refresher/lessons/02-02-discrete-distributions.md) |
| Covariance and correlated sums (the noise-correlation ceiling) | [prob-stat-refresher 3.1](../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md) |
| Estimation, MLE, Fisher information and Cramér–Rao | [prob-stat-refresher 4.1](../prob-stat-refresher/lessons/04-01-estimation-and-mle.md) |
| Hypothesis testing, power, multiple comparisons, sequential tests | [prob-stat-refresher 4.3](../prob-stat-refresher/lessons/04-03-hypothesis-testing.md) |
| Martingales and optional stopping (the first-passage results) | [probability-theory 5.3](../probability-theory/lessons/05-03-martingales.md) · [5.4](../probability-theory/lessons/05-04-stopping-times-optional-stopping.md) |

## Pitfalls

### Membrane and spike

- The membrane potential is a **capacitor voltage**, not "how many ions are inside" — a full 100 mV swing moves about 0.03 percent of a soma's sodium. *([1.1](lessons/01-01-neuron-as-a-device.md), [1.3](lessons/01-03-the-action-potential.md))*
- $\tau = R_mC_m$ contains **no geometry**: a giant motor neuron and a tiny granule cell with the same membrane have the same time constant. Size changes $R_{\text{in}}$, not $\tau$. *([1.1](lessons/01-01-neuron-as-a-device.md), [1.5](lessons/01-05-cable-theory-conduction.md))*
- $\tau$ is **symmetric** — it governs the rise as well as the decay, and the long memory is usually the useful half. *([1.1](lessons/01-01-neuron-as-a-device.md))*
- The resting potential is a **steady state, not an equilibrium**; the pump makes the *gradients*, and its direct electrogenic contribution is only a few mV. That is why ATP loss depolarizes over minutes, not milliseconds. *([1.2](lessons/01-02-resting-membrane-potential.md))*
- Permeability and conductance are **not interchangeable**: $P_{Na}/P_K = 0.04$ while $g_{Na}/g_K = 0.16$ at rest. GHK and the chord formula agree at $V_{\text{rest}}$ by construction and nowhere else. *([1.2](lessons/01-02-resting-membrane-potential.md))*
- $V_m$ lies between the **extreme** equilibrium potentials of the permeant ions — at high external K it can sit *below* $E_K$, because Cl is then the more negative battery. *([1.2](lessons/01-02-resting-membrane-potential.md))*
- **Inactivation is not deactivation.** Inactivated channels are unavailable and need repolarization plus time; without that asymmetry there is no refractory period and no one-way propagation. *([1.3](lessons/01-03-the-action-potential.md))*
- Threshold is a **current balance**, not a stored voltage. Quote one without saying what the cell was doing beforehand and you have quoted a number with no referent — and a slow enough ramp reaches voltages far above it without firing (accommodation). *([1.3](lessons/01-03-the-action-potential.md), [1.4](lessons/01-04-hodgkin-huxley-model.md))*
- Sustained depolarization is **not a head start**: past a point it is an off switch, because availability collapses. Excitability under hyperkalemia is non-monotonic for exactly this reason. *([1.2](lessons/01-02-resting-membrane-potential.md), [1.3](lessons/01-03-the-action-potential.md))*
- The spike peak stops about 18 mV short of $E_{\text{Na}}$: it is a **race outcome**, not an equilibrium. And more depolarization does not mean more sodium current once activation saturates — the driving force is shrinking. *([1.3](lessons/01-03-the-action-potential.md))*
- A voltage-clamp record shows what the membrane **would** do if voltage were prevented from responding. The free-running spike is reconstructed from it, not read off it. *([1.3](lessons/01-03-the-action-potential.md))*
- $h$ is **availability**, so it falls with depolarization. Getting this backwards inverts every prediction about post-inhibitory rebound. *([1.4](lessons/01-04-hodgkin-huxley-model.md))*
- The HH exponents are **subunit counts**, testable twice over (a delayed foot with zero initial slope, and a conductance half-point at $2^{-1/k}$). But HH is a **phenomenological description, not a mechanism** — $m$ and $h$ are known not to be independent. *([1.4](lessons/01-04-hodgkin-huxley-model.md))*
- HH has no calcium and no calcium-activated K current, so it **cannot adapt**. Every adaptation phenomenon later in the course needs a conductance HH omitted. *([1.4](lessons/01-04-hodgkin-huxley-model.md))*
- $\lambda$ is where the signal hits 37 percent, **not** how far it goes. The cable is a diffusion problem, so passive delay grows as **distance squared**. *([1.5](lessons/01-05-cable-theory-conduction.md))*
- Myelin as "insulation so current does not leak" is half the story and the wrong half: $D = a/(2R_iC_m)$ has no $R_m$ in it. **Resistance buys reach; capacitance buys speed.** *([1.5](lessons/01-05-cable-theory-conduction.md))*
- Do not judge internode conduction by the **steady-state** exponential — a spike is a transient, which is why a demyelinated axon blocks when the naive calculation says it should conduct. *([1.5](lessons/01-05-cable-theory-conduction.md))*

### Synapses

- The synaptic delay is **machinery, not transport**: crossing a 20 nm cleft takes about 0.5 $\mu\text{s}$, one part in a thousand of the total. *([2.1](lessons/02-01-chemical-synaptic-transmission.md))*
- "Quantal" means a **vesicle**, not an ion. The discreteness is anatomical and was inferred from statistics before anyone saw a fusion event. *([2.1](lessons/02-01-chemical-synaptic-transmission.md))*
- $m = np$ **hides the mechanism**. Two synapses with identical mean response behave oppositely during a train; and "the synapse got stronger" is not a finding until you say which of $n$, $p$ or $q$ changed. *([2.1](lessons/02-01-chemical-synaptic-transmission.md), [4.1](lessons/04-01-plasticity-ltp-ltd.md))*
- The Poisson failure method is a **low-$p$ tool only** — at $p = 0.75$ it overestimates the failure rate by more than a hundredfold. Use $(1-p)^n$. *([2.1](lessons/02-01-chemical-synaptic-transmission.md))*
- Facilitation and depression are **not alternatives**; both run always, and $p$ decides which wins. Raising calcium improves the first response and deepens the subsequent depression. *([2.1](lessons/02-01-chemical-synaptic-transmission.md))*
- **Sign lives in the receptor, not the transmitter.** Acetylcholine excites skeletal muscle and slows the heart; glutamate gates chloride channels in invertebrates. *([2.2](lessons/02-02-neurotransmitters-receptors.md))*
- "Depolarizing" is not "excitatory": the criterion is $E_{\text{syn}}$ versus **threshold**. A synapse reversing at $-58$ mV depolarizes a cell resting at $-65$ and still vetoes it. *([1.2](lessons/01-02-resting-membrane-potential.md), [2.2](lessons/02-02-neurotransmitters-receptors.md))*
- GABA is inhibitory only when KCC2 holds $E_{Cl}$ below threshold. In immature neurons, and in adult tissue after injury or in epilepsy, NKCC1 dominates and GABA is frankly **excitatory**. *([1.2](lessons/01-02-resting-membrane-potential.md), [2.5](lessons/02-05-development-and-wiring.md))*
- The NMDA receptor is **ligand-gated with a voltage-dependent block**, not voltage-gated. Removing external Mg abolishes the voltage dependence, which no genuine voltage sensor would permit. *([2.2](lessons/02-02-neurotransmitters-receptors.md))*
- **Inhibition is a conductance, and conductance is the hidden variable.** A shunt can move the voltage by exactly zero and still double the excitation required, so "inhibition was unchanged" must be interrogated. *([2.2](lessons/02-02-neurotransmitters-receptors.md), [2.3](lessons/02-03-synaptic-integration.md))*
- Shunting is **divisive** (changes gain) and hyperpolarizing inhibition is **subtractive** (changes threshold) — and only the second reliably blocks a large input. *([2.2](lessons/02-02-neurotransmitters-receptors.md), [4.1](lessons/04-01-plasticity-ltp-ltd.md))*
- Inhibition has an **address**: the same conductance is about twice as effective on the path from the input to the soma as on a sister branch. *([2.3](lessons/02-03-synaptic-integration.md))*
- Do not add EPSPs linearly. Nearby synapses steal each other's driving force (**sublinear**); clustered ones recruiting NMDA or dendritic spikes go **supralinear**; only electrically remote branches come close to linear. *([2.3](lessons/02-03-synaptic-integration.md))*
- Count **electrotonic** distance, not synapses — and remember the peak of a fast EPSP attenuates two- to fourfold more than the DC formula says. *([2.3](lessons/02-03-synaptic-integration.md))*
- The decision happens at the **axon initial segment**, not the soma; somatic voltage is a proxy for the decision variable, not the variable. *([2.3](lessons/02-03-synaptic-integration.md))*
- Gap junctions are fast and **relay spikes badly** — a 100 mV, 1 ms spike arrives as a sub-millivolt blip. They transfer slow signals, which is what synchronization needs. *([2.4](lessons/02-04-electrical-synapses.md))*
- "No sign inversion" does not mean excitatory: by the area theorem the net effect of a presynaptic spike on a coupled neighbour is **inhibitory**. *([2.4](lessons/02-04-electrical-synapses.md))*
- Asymmetric coupling is not evidence of rectification until you have checked the two cells' input resistances. *([2.4](lessons/02-04-electrical-synapses.md))*
- Gap junctions are modulated (pH, calcium, dopamine, PKA) — the real contrast with chemical synapses is **specificity**, not the existence of change. *([2.4](lessons/02-04-electrical-synapses.md))*

### Circuits and coding

- The coincidence window is **not** $\tau$: it is $\tau\ln\bigl(a/(\theta-a)\bigr)$, typically several times shorter, and feedforward inhibition overrides it entirely with a disynaptic delay. *([2.3](lessons/02-03-synaptic-integration.md), [2.6](lessons/02-06-circuit-motifs-computation.md))*
- "Inhibition" does not mean "less output". Feedback inhibition **rescales**; a zero-sum lateral kernel leaves the population's total activity unchanged and discards only the flat component. *([2.6](lessons/02-06-circuit-motifs-computation.md))*
- Negative feedback is not unconditionally stabilizing: **delayed** negative feedback at high loop gain oscillates, and cortical gamma is arguably that oscillation put to work. *([2.6](lessons/02-06-circuit-motifs-computation.md), [3.4](lessons/03-04-motor-systems.md))*
- **A motif's presence does not prove its function.** The same three-cell pattern computes different things depending on weights, kinetics and dendritic location — none of which is in the wiring. *([2.6](lessons/02-06-circuit-motifs-computation.md), [4.5](lessons/04-05-methods-a-taste.md))*
- The lateral-inhibition kernel is **scale-covariant, not scale-invariant**: tripling the scene triples the edge response. Contrast invariance needs divisive normalization, a different motif. *([2.6](lessons/02-06-circuit-motifs-computation.md))*
- A receptive field is a **computation, not an anatomical object** — it can change with contrast, adaptation and attention. *([3.1](lessons/03-01-transduction-neural-coding.md))*
- Adaptation is a deliberate high-pass filter, not fatigue; the cost is that absolute level becomes unrecoverable. *([3.1](lessons/03-01-transduction-neural-coding.md), [3.2](lessons/03-02-vision.md))*
- Sharper tuning is not better tuning. A very narrow curve has $f'(s) = 0$ almost everywhere, and Fisher information rewards the derivative. *([3.1](lessons/03-01-transduction-neural-coding.md))*
- Precision improves as $1/\sqrt N$ **only under independent noise**. Correlated fluctuations floor it at $\sigma_1\sqrt c$, and adding neurons past that buys nothing. *([3.1](lessons/03-01-transduction-neural-coding.md), [4.3](lessons/04-03-attention-decision-making.md))*
- There is **no information in a spike about its own meaning** — modality is set by which pathway is active. *([3.1](lessons/03-01-transduction-neural-coding.md))*

### Sensory and motor

- Each visual **hemifield**, not each eye, projects contralaterally: only nasal fibres cross. Getting this backwards makes every lesion localization wrong. *([3.2](lessons/03-02-vision.md))*
- Photoreceptors **hyperpolarize** to light — depolarized in the dark, releasing glutamate continuously. The whole ON/OFF architecture depends on it. *([3.2](lessons/03-02-vision.md))*
- "Detects edges" is an **identity**, not an approximation, for a balanced field: $\hat w(\mathbf 0) = A_c - A_s = 0$ at any intensity. Real cells are slightly unbalanced on purpose. *([3.2](lessons/03-02-vision.md))*
- A single cone cannot report colour (**univariance**); colour is a ratio across cone types. *([3.2](lessons/03-02-vision.md))*
- Hubel and Wiesel's feedforward model is the right first model and is **demonstrably incomplete** — intracortical inhibition and recurrence do much of the sharpening. Likewise "what versus where" is an organizing sketch, not a fact. *([3.2](lessons/03-02-vision.md))*
- The auditory nerve carries the output of about 40 overlapping bandpass channels, **not the waveform** — everything downstream operates on that decomposition. *([3.3](lessons/03-03-audition-somatosensation.md))*
- K influx **depolarizes** the hair cell, because endolymph sits at $+80$ mV with nearly cytoplasmic K. Sign is set by the electrochemical gradient, never by the ion's identity. *([1.2](lessons/01-02-resting-membrane-potential.md), [3.3](lessons/03-03-audition-somatosensation.md))*
- Tonotopy and somatotopy are **different kinds of map**: one is an abstract stimulus dimension the cochlea manufactures, the other a body surface. *([3.3](lessons/03-03-audition-somatosensation.md))*
- Two-point discrimination from receptor spacing is a **bound**, not a measurement — skin mechanics and central processing add their own limits. *([3.3](lessons/03-03-audition-somatosensation.md))*
- A cord hemisection knocks out **different modalities on different sides**, because the two ascending pathways cross at different levels. *([3.3](lessons/03-03-audition-somatosensation.md))*
- Nociceptor firing is **not** pain: gate control at the first synapse and descending modulation sit between them. Nociception is measured; pain is constructed. *([3.3](lessons/03-03-audition-somatosensation.md))*
- The size principle follows from **common** input; a pathway targeting a subset can reorder recruitment. And the input-resistance argument is not airtight — intrinsic differences contribute, and the *ordering* is far better established than the *why*. *([3.4](lessons/03-04-motor-systems.md))*
- Merton's strong servo hypothesis is **false**: alpha and gamma are coactivated, which keeps the spindle sensitive during shortening. *([3.4](lessons/03-04-motor-systems.md))*
- The Golgi tendon organ is a **force sensor in series**, not a protective safety valve; during locomotion its pathway even reverses sign. *([3.4](lessons/03-04-motor-systems.md))*
- A spinal lesion does not abolish rhythm — central pattern generators live below it. What is lost is initiation, steering and adaptation. *([3.4](lessons/03-04-motor-systems.md))*
- Cosine tuning shows a **correlation with a variable the experimenter varied**; direction, torque and muscle activation are confounded in a fixed posture. Treat the fact as robust and its interpretation as open. *([3.4](lessons/03-04-motor-systems.md))*
- The cerebellum does not generate movement — remove it and strength is normal. Its deficits are **errors** (dysmetria, intention tremor, decomposition), which is what a missing predictor looks like. *([3.5](lessons/03-05-motor-control-correction.md))*
- Forward and inverse models are not one object run backwards: a bad inverse model gives systematic errors, a bad forward model gives instability and overshoot. *([3.5](lessons/03-05-motor-control-correction.md))*
- The basal ganglia output is **inhibitory and tonically on**; selection is release. Count the signs on the indirect route carefully — two inhibitions in series make an excitation. *([3.5](lessons/03-05-motor-control-correction.md))*
- Dopamine is not reward or pleasure. A fully predicted reward elicits **nothing**, and an omitted one elicits a pause below baseline. *([3.5](lessons/03-05-motor-control-correction.md))*
- Feedback is not obsolete — the delay only bites at high bandwidth. Real motor control is a blend whose mixture shifts with movement speed. *([3.5](lessons/03-05-motor-control-correction.md))*

### Plasticity and memory

- Hebb wrote that A **takes part in firing** B. "Fire together, wire together" throws away the ordering, which is the one thing STDP shows to be essential. *([4.1](lessons/04-01-plasticity-ltp-ltd.md))*
- LTD is **not the absence of LTP** — it has its own machinery and its own calcium band, and below $\theta_d$ nothing happens at all. *([4.1](lessons/04-01-plasticity-ltp-ltd.md))*
- Always name the STDP sign convention: half the literature plots $t_{\text{pre}}-t_{\text{post}}$ and the window is asymmetric, so the two figures are mirror images. *([4.1](lessons/04-01-plasticity-ltp-ltd.md))*
- The exponential STDP window is a **curve fit from one preparation**. Sign, width and shape vary with synapse type, dendritic location, rate and neuromodulator; at high rates, rate-dependence overrides timing. *([4.1](lessons/04-01-plasticity-ltp-ltd.md))*
- A small learning rate does **not** stabilize a pure Hebbian rule — positive feedback with no restoring term has no stable fixed point at any rate. *([4.1](lessons/04-01-plasticity-ltp-ltd.md))*
- Homeostatic scaling must be **multiplicative**: subtractive scaling of the same total conductance destroys the relative pattern LTP wrote. *([4.1](lessons/04-01-plasticity-ltp-ltd.md))*
- "NMDA blockade prevents learning" is a claim about the **gate**, not about the **store**. Nobody has yet read a specific memory out of measured synaptic weights. *([4.1](lessons/04-01-plasticity-ltp-ltd.md))*
- The hippocampus is closer to an **index than an archive**: required to form declarative memories and to retrieve recent ones, unnecessary for remote ones. *([4.2](lessons/04-02-memory-systems.md))*
- Synaptic and systems consolidation share a word and nothing else; papers rely on you to disambiguate from context. *([4.2](lessons/04-02-memory-systems.md))*
- Working memory is not the front end of long-term memory. It is **maintained activity** on unchanged wiring — parallel, interruptible, capacity-limited. *([4.2](lessons/04-02-memory-systems.md))*
- "Declarative versus procedural" is about **how the memory is expressed**, not conscious versus unconscious. Awareness is a correlate, not the criterion. *([4.2](lessons/04-02-memory-systems.md))*
- Retrieval opens a trace for editing (reconsolidation), so confidence is a poor guide to fidelity — and forgetting is a feature, because a verbatim archive could never generalize. *([4.2](lessons/04-02-memory-systems.md))*

### Attention, decision and inference

- Attention is **not a spotlight that adds brightness**: it rescales the terms of a normalization equation, which is why its effect is roughly three times larger when a competitor is present. *([4.3](lessons/04-03-attention-decision-making.md))*
- The decision bound is a **policy**, re-set trial by trial. Two subjects with identical sensory machinery can differ by ten accuracy points purely in $B$ — separating that from a drift-rate difference is most of why anyone fits the model. *([4.3](lessons/04-03-attention-decision-making.md))*
- **A trial-averaged time course can have a shape no single trial ever had** — averaging over abrupt steps at random times produces a smooth ramp. *([4.3](lessons/04-03-attention-decision-making.md))*
- Drift–diffusion is the right first model and not the last: it does not extend cleanly past two alternatives, produces no changes of mind, and real data often need a collapsing bound. *([4.3](lessons/04-03-attention-decision-making.md))*
- **Necessity is not implementation.** Lesion evidence supports "the system needed $M$", never "$M$ computes $B$" — and the transistor experiment produced statistically solid localization on a chip whose mechanism it entirely failed to reveal. *([4.4](lessons/04-04-disease-a-taste.md))*
- An effective drug does **not** confirm the mechanism it targets. L-DOPA works and does not slow degeneration; SSRIs work and serotonin deficiency is refuted by the multi-week delay. Efficacy shows the system is modifiable at that point, and nothing else. *([4.4](lessons/04-04-disease-a-taste.md))*
- Symptom onset is a **compensation threshold**, not a damage threshold — which is a fact about *when to intervene*, and a leading explanation for failed neuroprotection trials. *([4.4](lessons/04-04-disease-a-taste.md))*
- A diagnostic category is not a natural kind: 227 symptom profiles carry the same diagnosis of major depression, and mechanism-hunting inside such a category pays a $\pi^{-2}$ sample-size tax. High heritability promises variance, not a pathway. *([4.4](lessons/04-04-disease-a-taste.md))*
- fMRI measures **blood oxygenation** seconds late, correlating best with synaptic input rather than spiking output — and inhibitory input is metabolically expensive too, so a "more active" voxel may contain a region being suppressed. *([4.5](lessons/04-05-methods-a-taste.md))*
- A **null perturbation result is nearly uninterpretable**: redundancy and compensation are everywhere. *([4.4](lessons/04-04-disease-a-taste.md), [4.5](lessons/04-05-methods-a-taste.md))*
- A calcium trace is an **inferred rate**, never a spike train — report it as such, and never as timing. *([4.5](lessons/04-05-methods-a-taste.md))*
- Optogenetic sufficiency uses a **synchronous drive the circuit never produces**: it shows the downstream machinery can be triggered, not that the natural code triggers it that way. *([4.5](lessons/04-05-methods-a-taste.md))*
- Finer is not always better. A patch clamp cannot see a population code, and resolution and coverage are different virtues — the question decides which you need. *([4.5](lessons/04-05-methods-a-taste.md))*
- A connectome constrains dynamics without determining them: weights, short-term plasticity and neuromodulatory state are not in the wiring. *([4.5](lessons/04-05-methods-a-taste.md))*
