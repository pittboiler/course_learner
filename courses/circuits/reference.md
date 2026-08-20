# Circuit Analysis · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Circuit analysis is two conservation laws (charge doesn't pile up at a junction,
energy doesn't appear on a round trip) applied to a short list of element models.
This card holds the models, the four systematic methods and when each one wins,
the transient response forms, and the phasor/AC-power machinery — plus the unit
and sign bookkeeping that is where nearly every real mistake happens.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $q$ | charge, in coulombs (C) — the "amount of stuff" flowing | [1.1](lessons/01-01-charge-current-voltage-power.md) |
| $i$, $I$ | current, in amperes (A) $=$ C/s — charge crossing a point per second | [1.1](lessons/01-01-charge-current-voltage-power.md) |
| $v$, $V$ | voltage, in volts (V) $=$ J/C — energy each coulomb gains or loses; always **between two points**, always with a $+/-$ polarity | [1.1](lessons/01-01-charge-current-voltage-power.md) |
| $w$ | energy, in joules (J) | [1.1](lessons/01-01-charge-current-voltage-power.md) |
| $p$, $P$ | power, in watts (W) $=$ J/s; lowercase $p(t)$ is instantaneous, capital $P$ is average | [1.1](lessons/01-01-charge-current-voltage-power.md) |
| $R$ | resistance, in ohms ($\Omega$) $=$ V/A — how hard it is to push current through | [1.2](lessons/01-02-ohms-law-equivalent-resistance.md) |
| $G$ | conductance, in siemens (S) $=1/R$ — how *easily* current flows; the natural variable for parallel | [1.2](lessons/01-02-ohms-law-equivalent-resistance.md) |
| $R_1 \parallel R_2$ | "in parallel with" — shorthand for the parallel combination, not a division | [1.2](lessons/01-02-ohms-law-equivalent-resistance.md) |
| $R_\text{eq}$ | the one resistance an outside source actually sees | [1.2](lessons/01-02-ohms-law-equivalent-resistance.md) |
| $\mathbf{G}\mathbf{v}=\mathbf{i}$ | the nodal system: conductance matrix, node-voltage vector, injected-current vector | [2.1](lessons/02-01-nodal-analysis.md) |
| $\mathbf{R}\mathbf{i}=\mathbf{v}$ | the mesh system: resistance matrix, mesh-current vector, driving-voltage vector | [2.2](lessons/02-02-mesh-analysis.md) |
| $V_\text{oc}$, $I_\text{sc}$ | what the terminals read open, and what they push into a dead short | [2.4](lessons/02-04-thevenin-norton-max-power.md) |
| $V_\text{th}$, $R_\text{th}$, $I_N$ | Thévenin voltage and resistance, Norton current — the whole network, summarized | [2.4](lessons/02-04-thevenin-norton-max-power.md) |
| $R_L$ | the load hung across the terminals | [2.4](lessons/02-04-thevenin-norton-max-power.md) |
| $C$ | capacitance, in farads (F) $=$ C/V — how much charge one volt buys you | [3.1](lessons/03-01-capacitors-and-inductors.md) |
| $L$ | inductance, in henries (H) $=$ V·s/A — how hard the coil fights a change in current | [3.1](lessons/03-01-capacitors-and-inductors.md) |
| $\lambda = Li$ | magnetic flux linkage, in webers (Wb) — the inductor's answer to a capacitor's charge | [3.1](lessons/03-01-capacitors-and-inductors.md) |
| $0^-$, $0^+$ | the instant just before and just after the switch moves | [3.2](lessons/03-02-first-order-rc-rl-transients.md) |
| $\tau$ | time constant, in seconds — how long the exponential takes to shrink the gap by a factor $e$ | [3.2](lessons/03-02-first-order-rc-rl-transients.md) |
| $x(\infty)$ | the final (new DC steady-state) value the circuit is relaxing toward | [3.2](lessons/03-02-first-order-rc-rl-transients.md) |
| $\alpha$ | neper (damping) frequency, in Np/s $=$ rad/s — how fast the resistor bleeds the energy off | [3.3](lessons/03-03-second-order-rlc.md) |
| $\omega_0$ | undamped natural frequency, in rad/s — the tempo L and C would ring at alone | [3.3](lessons/03-03-second-order-rlc.md) |
| $\omega_d$ | damped natural frequency — the tempo it *actually* rings at, always below $\omega_0$ | [3.3](lessons/03-03-second-order-rlc.md) |
| $s$ | characteristic root, in $1/\text{s}$ — the exponent in the assumed solution $e^{st}$ | [3.3](lessons/03-03-second-order-rlc.md) |
| $j$ | $\sqrt{-1}$ — engineers use $j$ because $i$ is already spoken for by current | [4.1](lessons/04-01-sinusoids-and-phasors.md) |
| $\omega$, $f$ | angular frequency (rad/s) and ordinary frequency (Hz), with $\omega = 2\pi f$ | [4.1](lessons/04-01-sinusoids-and-phasors.md) |
| $V_m$, $I_m$ | **peak** amplitude of a sinusoid (not RMS) | [4.1](lessons/04-01-sinusoids-and-phasors.md) |
| $\mathbf{V}$, $\mathbf{I}$ | phasors — bold means one complex number standing for a whole sinusoid | [4.1](lessons/04-01-sinusoids-and-phasors.md) |
| $r\angle\theta$ | polar form: magnitude $r$ at angle $\theta$ | [4.1](lessons/04-01-sinusoids-and-phasors.md) |
| $Z$, $Y = 1/Z$ | impedance ($\Omega$) and admittance (S) — complex resistance and conductance at one $\omega$ | [4.2](lessons/04-02-impedance-phasor-analysis.md) |
| $X$ | reactance ($\Omega$) — the imaginary part of $Z$; positive inductive, negative capacitive | [4.2](lessons/04-02-impedance-phasor-analysis.md) |
| $V_{rms}$, $I_{rms}$ | root-mean-square values — the DC equivalents for heating; $V_m/\sqrt2$ for a sinusoid | [4.3](lessons/04-03-ac-power-power-factor.md) |
| $P$, $Q$, $S$ | real power (W), reactive power (VAR), apparent power (VA) | [4.3](lessons/04-03-ac-power-power-factor.md) |
| $\mathbf{S} = P + jQ$ | complex power — the power triangle as one complex number | [4.3](lessons/04-03-ac-power-power-factor.md) |
| $\mathbf{I}^{*}$ | complex conjugate — flips the sign of the angle | [4.3](lessons/04-03-ac-power-power-factor.md) |
| $\theta$ | the impedance angle $=$ the phase by which current lags voltage $=$ the power-factor angle | [4.3](lessons/04-03-ac-power-power-factor.md) |

**Two symbol collisions to keep straight.** $Q$ is the quality factor $\omega_0 L/R$ in
[4.2](lessons/04-02-impedance-phasor-analysis.md) but reactive power in
[4.3](lessons/04-03-ac-power-power-factor.md); charge is always lowercase $q$. And $G$
is a scalar conductance in [1.2](lessons/01-02-ohms-law-equivalent-resistance.md) but the
whole conductance **matrix** $\mathbf{G}$ in [2.1](lessons/02-01-nodal-analysis.md).

## Definitions

### Passive sign convention

Label every element so the current arrow **enters the $+$ terminal**. Then $p = vi$
is the power that element **absorbs**, and the sign of the answer tells you which
kind of element it is — you never have to guess.

$$p = vi > 0 \;\Rightarrow\; \text{absorbing (load)}, \qquad p = vi < 0 \;\Rightarrow\; \text{delivering (source)}$$

If your drawing has current entering the $-$ terminal instead, use $p = -vi$ — but
pick one and stay with it.

*Introduced:* [1.1](lessons/01-01-charge-current-voltage-power.md)

### Conservation of power

Whatever the sources deliver, the rest of the circuit absorbs — to the watt. Compute
every element's power under the passive convention and the total must vanish. It's
Tellegen's theorem, and it's the free error check at the end of every method here.

$$\sum_{\text{all elements}} p_k = 0$$

*Introduced:* [1.1](lessons/01-01-charge-current-voltage-power.md)

### Node, branch, loop, mesh

A **node** is a junction — *every* point joined by unbroken wire counts as the same
node. A **branch** is one element carrying one current between two nodes. A **loop**
is any closed path that doesn't retrace itself. A **mesh** is a loop with nothing
inside it — a "window pane" of a flat (planar) drawing.

*Introduced:* [1.3](lessons/01-03-kirchhoffs-laws-kcl-kvl.md), mesh in [2.2](lessons/02-02-mesh-analysis.md)

### Kirchhoff's current law (KCL)

Water in equals water out: charge cannot accumulate at a junction, so at every
instant the currents at a node sum to zero.

$$\sum_k i_k = 0 \quad\text{at any node (in} = +\text{, out} = -\text{)}$$

*Introduced:* [1.3](lessons/01-03-kirchhoffs-laws-kcl-kvl.md)

### Kirchhoff's voltage law (KVL)

Voltage is a height (energy per charge), so a round trip returns you to the same
altitude: the voltage changes around any closed loop sum to zero.

$$\sum_k v_k = 0 \quad\text{around any closed loop}$$

*Introduced:* [1.3](lessons/01-03-kirchhoffs-laws-kcl-kvl.md)

### Supernode

A voltage source floating between two **non-reference** nodes blocks KCL at either
one, because the current through it is unknown. Draw a bubble around both nodes and
the source, balance current across the bubble (the unknown current is internal and
cancels), and add the source's constraint.

$$\text{supernode KCL} \;+\; \underbrace{V_a - V_b = V_s}_{\text{constraint}}$$

*Introduced:* [2.1](lessons/02-01-nodal-analysis.md)

### Supermesh

The mesh-side mirror: a current source on the branch *shared* by two meshes has an
unknown voltage, so you route KVL around the outside of both windows and let the
source supply the constraint.

$$\text{supermesh KVL} \;+\; \underbrace{I_j - I_k = I_s}_{\text{constraint}}$$

*Introduced:* [2.2](lessons/02-02-mesh-analysis.md)

### Linearity and superposition

A resistive circuit is a straight-line machine from sources to responses: scale all
sources by $k$ and every voltage and current scales by $k$. So solve once per source
with the others **deactivated**, and add.

$$x = x_1 + x_2 + \cdots, \qquad \text{voltage source} \to \text{short}, \quad \text{current source} \to \text{open}$$

*Introduced:* [2.3](lessons/02-03-superposition-source-transformation.md)

### Source transformation

A battery with a series resistor and a current source with the same resistor in
parallel are indistinguishable **from outside their two terminals** — so swap
whichever makes the wiring simpler.

$$V_s \text{ in series with } R \;\Longleftrightarrow\; I_s = \frac{V_s}{R} \text{ in parallel with } R$$

*Introduced:* [2.3](lessons/02-03-superposition-source-transformation.md)

### Thévenin equivalent

Poke a linear two-terminal network and its terminal voltage falls off in a straight
line as you draw current. A line needs two numbers, so the whole network is one
battery behind one resistor.

$$V_\text{th} = V_\text{oc}, \qquad R_\text{th} = \frac{V_\text{oc}}{I_\text{sc}}$$

*Introduced:* [2.4](lessons/02-04-thevenin-norton-max-power.md)

### Norton equivalent

The same straight line, described from the other end: the short-circuit current
diverted through the *same* resistance in parallel.

$$I_N = I_\text{sc} = \frac{V_\text{th}}{R_\text{th}}, \qquad V_\text{th} = I_N R_\text{th}$$

*Introduced:* [2.4](lessons/02-04-thevenin-norton-max-power.md)

### Maximum power transfer

A load gets the most power when it matches the source's own internal resistance —
too small and it can't develop voltage, too large and it chokes the current.

$$R_L = R_\text{th}, \qquad P_\text{max} = \frac{V_\text{th}^2}{4R_\text{th}} \qquad (\text{efficiency at the match: one half})$$

*Introduced:* [2.4](lessons/02-04-thevenin-norton-max-power.md)

### Capacitance

Two plates with a gap: charge piles up in proportion to voltage, so the *current* is
whatever rate you're changing the voltage at. A capacitor resists changes in
**voltage**.

$$q = Cv, \qquad i = C\frac{dv}{dt}, \qquad w = \tfrac12 Cv^2$$

*Introduced:* [3.1](lessons/03-01-capacitors-and-inductors.md)

### Inductance

A coil wrapped in its own magnetic field, which fights any change to the current, so
the *voltage* is whatever rate you're changing the current at. An inductor resists
changes in **current**.

$$\lambda = Li, \qquad v = L\frac{di}{dt}, \qquad w = \tfrac12 Li^2$$

*Introduced:* [3.1](lessons/03-01-capacitors-and-inductors.md)

### Continuity of $v_C$ and $i_L$

A jump would demand infinite current (capacitor) or infinite voltage (inductor), and
nothing supplies that. So across the instant a switch flips, these two quantities
hold their values — and **only** these two.

$$v_C(0^+) = v_C(0^-), \qquad i_L(0^+) = i_L(0^-)$$

These are exactly the initial conditions every transient problem needs.

*Introduced:* [3.1](lessons/03-01-capacitors-and-inductors.md)

### DC steady state

Long after everything settles, nothing is changing, so every slope is zero. Redraw
with **every capacitor erased (open)** and **every inductor replaced by a wire
(short)**, and solve the leftover pure-resistor circuit.

*Introduced:* [3.1](lessons/03-01-capacitors-and-inductors.md)

### Time constant

How long the relaxation takes, set by the size of the storage element and the
resistance it *sees looking back into its own two terminals* (independent sources
deactivated) — that is, the Thévenin resistance from [2.4](lessons/02-04-thevenin-norton-max-power.md).

$$\tau = R_\text{th}C \ \ (\text{RC}), \qquad \tau = \frac{L}{R_\text{th}} \ \ (\text{RL}), \qquad [\Omega][\text{F}] = [\text{H}]/[\Omega] = \text{s}$$

*Introduced:* [3.2](lessons/03-02-first-order-rc-rl-transients.md)

### Natural response and step response

**Natural** is the circuit relaxing with no source driving it ($x(\infty)=0$, pure
decay); **step** is it charging toward a source-set final value. Same formula either
way — only $x(\infty)$ differs.

*Introduced:* [3.2](lessons/03-02-first-order-rc-rl-transients.md)

### Characteristic equation and roots

With both an L and a C the circuit obeys a second-order ODE; guessing $x = e^{st}$
turns it into a quadratic, and the two roots decide the whole personality of the
response.

$$s^2 + 2\alpha s + \omega_0^2 = 0 \;\Longrightarrow\; s = -\alpha \pm \sqrt{\alpha^2 - \omega_0^2}$$

*Introduced:* [3.3](lessons/03-03-second-order-rlc.md)

### Damped natural frequency

When the roots go complex the circuit rings — at a tempo always a little **slower**
than the undamped $\omega_0$, because the damping drags it down.

$$\omega_d = \sqrt{\omega_0^2 - \alpha^2} \qquad (\text{underdamped only})$$

*Introduced:* [3.3](lessons/03-03-second-order-rlc.md)

### Phasor

A sinusoid at a fixed frequency is just two numbers — how tall and how shifted — so
package them as one complex number and drop the shared $e^{j\omega t}$ spin. Bold
$\mathbf{V}$ is the phasor; $v(t)$ is the real waveform.

$$v(t) = V_m\cos(\omega t + \phi) = \mathrm{Re}\{\mathbf{V}e^{j\omega t}\}, \qquad \mathbf{V} = V_m e^{j\phi} = V_m\angle\phi$$

*Introduced:* [4.1](lessons/04-01-sinusoids-and-phasors.md)

### Impedance

The fixed ratio of voltage phasor to current phasor. It has to be complex because it
carries two facts at once: how much the amplitude scales, and how much the timing
shifts.

$$Z = \frac{\mathbf{V}}{\mathbf{I}} \quad\Longleftrightarrow\quad \mathbf{V} = \mathbf{I}Z \qquad (\Omega)$$

$Z$ is **not** a phasor — it stands for a ratio, not a waveform, and it changes when
$\omega$ changes.

*Introduced:* [4.2](lessons/04-02-impedance-phasor-analysis.md)

### Resistance and reactance

Split any impedance into the part that burns energy and the part that only borrows
and returns it.

$$Z = R + jX, \qquad |Z| = \sqrt{R^2+X^2}, \qquad \theta = \arctan\frac{X}{R}$$

$X > 0$ is inductive (voltage leads current), $X < 0$ is capacitive (current leads).

*Introduced:* [4.2](lessons/04-02-impedance-phasor-analysis.md)

### Resonance

The one frequency where the inductive and capacitive reactances are equal and
opposite, so they cancel and the impedance goes purely real. In a series branch
that's minimum impedance, hence maximum current.

$$\omega L = \frac{1}{\omega C} \;\Longrightarrow\; \omega_0 = \frac{1}{\sqrt{LC}}$$

Same $\omega_0$ as the transient's natural frequency in [3.3](lessons/03-03-second-order-rlc.md) — now
driven instead of left to ring.

*Introduced:* [4.2](lessons/04-02-impedance-phasor-analysis.md)

### RMS value

The DC voltage that would heat a resistor exactly as much as this waveform does. For
a sinusoid it's the peak over root two, from averaging $\cos^2$ (whose mean is one
half).

$$V_{rms} = \frac{V_m}{\sqrt2}, \qquad I_{rms} = \frac{I_m}{\sqrt2}$$

A 120 V wall outlet is 120 V rms — its peak is about 170 V.

*Introduced:* [4.3](lessons/04-03-ac-power-power-factor.md)

### Real, reactive, and apparent power

**Real** $P$ is what actually gets consumed (heat, torque, light). **Reactive** $Q$ is
energy sloshing into and out of fields, doing no net work but still occupying the
wires. **Apparent** $S$ is the total burden the line must carry — the hypotenuse.

$$P = V_{rms}I_{rms}\cos\theta \ (\text{W}), \quad Q = V_{rms}I_{rms}\sin\theta \ (\text{VAR}), \quad S = V_{rms}I_{rms} \ (\text{VA})$$

*Introduced:* [4.3](lessons/04-03-ac-power-power-factor.md)

### Power factor

The fraction of the line's burden that is actually working. It's the cosine of the
impedance angle — and since cosine can't tell $+\theta$ from $-\theta$, you must say
**lagging** (inductive) or **leading** (capacitive).

$$\text{pf} = \cos\theta = \frac{P}{S}, \qquad 0 \le \text{pf} \le 1$$

*Introduced:* [4.3](lessons/04-03-ac-power-power-factor.md)

### Power-factor correction

An inductor's sloshing and a capacitor's sloshing are exactly out of phase, so a
capacitor bolted **in parallel** with an inductive load lets the two trade energy
locally instead of dragging it up and down the utility's wires.

*Introduced:* [4.3](lessons/04-03-ac-power-power-factor.md)

## Formulas and rules

### Quantities, symbols, and units

The unit check is the cheapest error check you own — run it before you trust a number.

| Quantity | Symbol | Unit | Is | Defining relation |
|---|---|---|---|---|
| charge | $q$ | coulomb, C | — | $q = \int i\,dt$ |
| current | $i$ | ampere, A | C/s | $i = dq/dt$ |
| voltage | $v$ | volt, V | J/C | $v = dw/dq$ |
| energy | $w$ | joule, J | — | $w = \int p\,dt$ |
| power | $p$ | watt, W | J/s | $p = vi$ |
| resistance | $R$ | ohm, $\Omega$ | V/A | $v = iR$ |
| conductance | $G$ | siemens, S | A/V | $G = 1/R$ |
| capacitance | $C$ | farad, F | C/V | $q = Cv$ |
| inductance | $L$ | henry, H | V·s/A | $\lambda = Li$ |
| flux linkage | $\lambda$ | weber, Wb | V·s | $\lambda = Li$ |
| impedance / reactance | $Z$, $X$ | ohm, $\Omega$ | V/A | $\mathbf{V} = \mathbf{I}Z$ |
| real / reactive / apparent power | $P$ / $Q$ / $S$ | W / VAR / VA | all J/s dimensionally | $\mathbf{S} = P + jQ$ |
| angular frequency | $\omega$ | rad/s | $2\pi f$ | $\omega = 2\pi f$ |

*From* [1.1](lessons/01-01-charge-current-voltage-power.md), [1.2](lessons/01-02-ohms-law-equivalent-resistance.md), [3.1](lessons/03-01-capacitors-and-inductors.md), [4.2](lessons/04-02-impedance-phasor-analysis.md), [4.3](lessons/04-03-ac-power-power-factor.md)

### SI prefixes

Never stated in a lesson, used in nearly every problem — a $100\,\mu\text{F}$ cap
across $2\,\text{k}\Omega$ gives $\tau = 0.2\,\text{s}$ only if you convert first.

| Prefix | p | n | $\mu$ | m | k | M | G |
|---|---|---|---|---|---|---|---|
| Factor | $10^{-12}$ | $10^{-9}$ | $10^{-6}$ | $10^{-3}$ | $10^{3}$ | $10^{6}$ | $10^{9}$ |

Convenient pairings: $\text{k}\Omega \times \text{mA} = \text{V}$, and
$\text{k}\Omega \times \mu\text{F} = \text{ms}$.

### Element $i$–$v$ relations — the master table

Everything about the three passive elements, in the three regimes you'll ever ask
about. Current enters the $+$ terminal throughout (passive sign convention).

| | Resistor $R$ ($\Omega$) | Inductor $L$ (H) | Capacitor $C$ (F) |
|---|---|---|---|
| **Time domain** | $v = iR$ | $v = L\dfrac{di}{dt}$ | $i = C\dfrac{dv}{dt}$ |
| **Inverted** | $i = v/R = Gv$ | $i = \dfrac1L\displaystyle\int v\,dt$ | $v = \dfrac1C\displaystyle\int i\,dt$ |
| **Stored energy** | none — dissipates $p = i^2R$ | $w = \tfrac12 Li^2$ (magnetic) | $w = \tfrac12 Cv^2$ (electric) |
| **At DC steady state** | still $R$ | **short** (wire) | **open** (gap) |
| **Cannot jump** | — | its **current** $i_L$ | its **voltage** $v_C$ |
| **Impedance $Z$** | $R$ | $j\omega L = \omega L\angle 90^\circ$ | $\dfrac{1}{j\omega C} = -\dfrac{j}{\omega C} = \dfrac{1}{\omega C}\angle{-}90^\circ$ |
| **Reactance $X$** | $0$ | $+\omega L$ | $-\dfrac{1}{\omega C}$ |
| **Phase** | $v$, $i$ in phase | $v$ **leads** $i$ by $90^\circ$ | $i$ **leads** $v$ by $90^\circ$ |
| **As $\omega$ grows** | unchanged | blocks | passes |

Mnemonic for the phase row: **ELI the ICE man** — in an inductor (L), voltage E leads
current I; in a capacitor (C), current I leads voltage E.

*From* [1.2](lessons/01-02-ohms-law-equivalent-resistance.md), [3.1](lessons/03-01-capacitors-and-inductors.md), [4.2](lessons/04-02-impedance-phasor-analysis.md)

### Combining elements

Series shares a **current**; parallel shares a **voltage**. Everything else follows.

| | Series | Parallel |
|---|---|---|
| Resistance | $R_\text{eq} = \sum R_k$ | $\dfrac{1}{R_\text{eq}} = \sum\dfrac{1}{R_k}$, i.e. $G_\text{eq} = \sum G_k$ |
| Inductance | $L_\text{eq} = \sum L_k$ | $\dfrac{1}{L_\text{eq}} = \sum\dfrac{1}{L_k}$ |
| Capacitance | $\dfrac{1}{C_\text{eq}} = \sum\dfrac{1}{C_k}$ | $C_\text{eq} = \sum C_k$ |
| Impedance | $Z_\text{eq} = \sum Z_k$ | $\dfrac{1}{Z_\text{eq}} = \sum\dfrac{1}{Z_k}$ |

Two-at-a-time shortcut (**two only**): $\;R_1 \parallel R_2 = \dfrac{R_1R_2}{R_1+R_2}$, and
$R \parallel R = R/2$. A parallel combination is always smaller than its smallest
member; a series one always larger than its largest.

Limiting cases: a **short** is $R = 0$ (any current, no voltage); an **open** is
$R = \infty$ (any voltage, no current). A resistor parallel to a short is bypassed; a
resistor in series with an open carries nothing.

*From* [1.2](lessons/01-02-ohms-law-equivalent-resistance.md), [3.1](lessons/03-01-capacitors-and-inductors.md), [4.2](lessons/04-02-impedance-phasor-analysis.md)

### Divider rules

One-line read-offs, valid only when the topology really is series (dividers of
voltage) or really is parallel (dividers of current).

$$\text{voltage divider:}\quad v_k = v\cdot\frac{R_k}{\sum R} \qquad\qquad \text{current divider:}\quad i_k = i\cdot\frac{G_k}{\sum G}$$

Two-resistor current divider, worth memorizing because the resistors **swap**:

$$i_1 = i\cdot\frac{R_2}{R_1+R_2}, \qquad i_2 = i\cdot\frac{R_1}{R_1+R_2}$$

If the tap is **loaded**, fold the load in first: the bottom leg becomes
$R_2 \parallel R_L$, then divide. Both formulas hold verbatim in AC with $Z$ in place
of $R$ — that is what every passive filter is.

*From* [1.4](lessons/01-04-voltage-current-dividers.md), [4.2](lessons/04-02-impedance-phasor-analysis.md)

### Power in a resistive circuit

$$p = vi = i^2R = \frac{v^2}{R} \qquad (\text{always} \ge 0 \text{ for a resistor})$$

Real source model: an ideal $V_s$ in series with internal $R_s$, so the terminal
voltage droops under load, $v_\text{term} = V_s - iR_s$.

*From* [1.1](lessons/01-01-charge-current-voltage-power.md), [1.2](lessons/01-02-ohms-law-equivalent-resistance.md)

### Choosing an analysis method

They all give the same answer. Pick by unknown count and by which kind of source is
in the way.

| Method | Unknowns | Wins when | Blocked by |
|---|---|---|---|
| Series–parallel + dividers | none | one source, cleanly series/parallel | a second source, a loaded tap, a bridge |
| **Nodal** (KCL) | $N-1$ node voltages | fewer nodes than meshes; many current sources; **non-planar** circuits | voltage source between two non-reference nodes → **supernode** |
| **Mesh** (KVL) | one per window | fewer windows than nodes; many voltage sources | non-planar circuits (no fix); current source on a shared branch → **supermesh** |
| **Superposition** | none | few sources, each trivial alone; sources at **different frequencies** (the only way) | never valid for power; tedious past ~3 sources |
| **Source transformation** | none | a chain of $V+R$ / $I \parallel R$ that collapses to a single loop | tells you nothing about power *inside* the transformed pair |
| **Thévenin / Norton** | none | you care about one terminal pair; sweeping a load; setting up $\tau$ | needs $V_\text{oc}$/$I_\text{sc}$ or a test source when dependent sources are present |

Free sanity check on any of them: recompute every element's power and confirm the
total is zero.

*From* [1.4](lessons/01-04-voltage-current-dividers.md), [2.1](lessons/02-01-nodal-analysis.md), [2.2](lessons/02-02-mesh-analysis.md), [2.3](lessons/02-03-superposition-source-transformation.md), [2.4](lessons/02-04-thevenin-norton-max-power.md)

### Nodal analysis by inspection

Ground one node; the rest are unknowns. The current leaving node $k$ toward neighbor
$j$ is $(V_k - V_j)/R$; toward ground it is $V_k/R$. Set the leaving currents equal to
the injected source currents.

$$\mathbf{G}\mathbf{v} = \mathbf{i}, \qquad G_{kk} = \sum(\text{conductances touching node }k), \qquad G_{kj} = -\,(\text{conductance shared by }k,j)$$

$\mathbf{G}$ is **symmetric with positive diagonal and negative off-diagonals** — if
yours isn't, you have a bookkeeping error. A voltage source from a node **to ground**
isn't a supernode; it simply deletes that unknown ($V_k = V_s$).

*From* [2.1](lessons/02-01-nodal-analysis.md)

### Mesh analysis by inspection

Give every window a **clockwise** loop current. KCL is then automatic; write only KVL.

$$\mathbf{R}\mathbf{i} = \mathbf{v}, \qquad R_{kk} = \sum(\text{resistances in mesh }k), \qquad R_{kj} = -\,(\text{resistance shared by }k,j)$$

with $v_k$ the net source voltage driving mesh $k$ clockwise. A resistor on the border
between meshes $j$ and $k$ carries the **difference** $I_j - I_k$. A current source
touched by only **one** mesh sets that mesh current outright, $I_k = \pm I_s$ — one
unknown gone for free.

*From* [2.2](lessons/02-02-mesh-analysis.md)

### Three ways to find $R_\text{th}$

| Route | How | Use when |
|---|---|---|
| Deactivate and reduce | short every voltage source, open every current source, collapse what's left as seen from the terminals | **independent** sources only — fastest |
| $V_\text{oc}/I_\text{sc}$ | compute both by nodal, mesh, or superposition, and divide | always works |
| Test source | kill only the independent sources, apply $1\,\text{A}$ (or $1\,\text{V}$) at the terminals, solve for the terminal voltage (or current) | **dependent** sources present; the only route if there are no independent sources at all (then $V_\text{th} = 0$) |

*From* [2.4](lessons/02-04-thevenin-norton-max-power.md)

### First-order transient — the three-number recipe

Any voltage or current in a circuit with a **single** capacitor or inductor:

$$\boxed{\,x(t) = x(\infty) + \big[x(0^+) - x(\infty)\big]e^{-t/\tau}\,}$$

1. **$x(0^+)$** — anchor with continuity ($v_C$ and $i_L$ don't jump), then read the rest
   of the $0^+$ circuit treating the capacitor as a fixed voltage source of value
   $v_C(0^+)$ and the inductor as a fixed current source of value $i_L(0^+)$.
2. **$x(\infty)$** — the new DC steady state: capacitor open, inductor short, solve the
   resistor circuit.
3. **$\tau$** — $R_\text{th}C$ or $L/R_\text{th}$, with $R_\text{th}$ seen from the
   element's own terminals.

Every variable in the circuit shares the same $\tau$ but has its **own** $x(0^+)$ and
$x(\infty)$.

| Elapsed | Fraction of the journey covered |
|---|---|
| $1\tau$ | $1 - e^{-1} \approx 0.632$ |
| $2\tau$ | $\approx 0.865$ |
| $2.3\tau$ | $0.90$ exactly at $t = \tau\ln 10$ |
| $3\tau$ | $\approx 0.950$ |
| $5\tau$ | $\approx 0.993$ — "done", for engineering |

*From* [3.2](lessons/03-02-first-order-rc-rl-transients.md)

### Second-order (RLC) natural response

Two storage elements, so a second-order ODE and two roots. Compute $\alpha$ and
$\omega_0$, compare them, and read the form off the table.

$$\alpha_\text{series} = \frac{R}{2L}, \qquad \alpha_\text{parallel} = \frac{1}{2RC}, \qquad \omega_0 = \frac{1}{\sqrt{LC}} \ \ (\text{both})$$

| Case | Condition | Roots | Natural response $x(t)$ |
|---|---|---|---|
| **Overdamped** | $\alpha > \omega_0$ | real, $s_{1,2} = -\alpha \pm \sqrt{\alpha^2-\omega_0^2}$ | $Ae^{s_1t} + Be^{s_2t}$ — sluggish crawl home |
| **Critically damped** | $\alpha = \omega_0$ | repeated, $s = -\alpha$ | $(A + Bt)e^{-\alpha t}$ — fastest settle with no overshoot |
| **Underdamped** | $\alpha < \omega_0$ | complex, $-\alpha \pm j\omega_d$ | $e^{-\alpha t}(A\cos\omega_d t + B\sin\omega_d t)$ — rings inside a decaying envelope |

$A$ and $B$ come from the two initial conditions the continuity rules hand you:
$v_C(0^+)$ and $i_L(0^+)$. The envelope decays with time constant $1/\alpha$. With a DC
source driving it, the total response is the same natural form **plus** the constant
final value $x(\infty)$.

Term-for-term mechanical twin (series RLC $\leftrightarrow$ mass–spring–damper
$m\ddot x + b\dot x + kx = 0$): $L \leftrightarrow m$, $R \leftrightarrow b$,
$1/C \leftrightarrow k$, and $\alpha = R/2L \leftrightarrow b/2m$.

*From* [3.3](lessons/03-03-second-order-rlc.md)

### Sinusoids, phasors, and complex arithmetic

Standard form is **cosine**. Convert first: $\sin(\omega t) = \cos(\omega t - 90^\circ)$
and $-\sin\theta = \cos(\theta + 90^\circ)$.

$$v(t) = V_m\cos(\omega t + \phi) \;\longleftrightarrow\; \mathbf{V} = V_m\angle\phi, \qquad \omega = 2\pi f$$

$$e^{j\theta} = \cos\theta + j\sin\theta, \qquad j = 1\angle 90^\circ, \qquad \frac{1}{j} = -j, \qquad j^2 = -1$$

$$z = a + jb = r\angle\theta, \qquad r = \sqrt{a^2+b^2}, \quad \theta = \arctan\frac{b}{a}, \quad a = r\cos\theta, \quad b = r\sin\theta$$

| Operation | Do it in | Rule |
|---|---|---|
| add / subtract | rectangular | components separately |
| multiply | polar | multiply magnitudes, **add** angles |
| divide | polar | divide magnitudes, **subtract** angles |
| conjugate | either | $a - jb$, or $r\angle{-}\theta$ |

In steady state, calculus becomes multiplication:

$$\frac{d}{dt} \;\longrightarrow\; j\omega, \qquad \int dt \;\longrightarrow\; \frac{1}{j\omega}$$

**Leading vs. lagging:** the larger phase angle peaks earlier in time and *leads*.

*From* [4.1](lessons/04-01-sinusoids-and-phasors.md)

### AC power — the triangle

$$P = V_{rms}I_{rms}\cos\theta \ (\text{W}), \qquad Q = V_{rms}I_{rms}\sin\theta \ (\text{VAR}), \qquad S = V_{rms}I_{rms} \ (\text{VA})$$

$$\mathbf{S} = \tfrac12\mathbf{V}\mathbf{I}^{*} = P + jQ, \qquad S = \sqrt{P^2+Q^2}, \qquad \text{pf} = \cos\theta = \frac{P}{S}$$

Fast route when you know the current through a series load:

$$P = I_{rms}^2 R, \qquad Q = I_{rms}^2 X, \qquad S = I_{rms}^2|Z|$$

Sign conventions: $\theta > 0$ and $Q > 0$ means **inductive**, current lagging;
$\theta < 0$ and $Q < 0$ means **capacitive**, current leading. For several loads on
one bus, add the $P$'s and add the $Q$'s, then take the hypotenuse:
$S_\text{total} = \sqrt{(\sum P)^2 + (\sum Q)^2}$.

**Power-factor correction** (parallel capacitor across an inductive load; $P$ and the
load voltage are unchanged):

$$Q_1 = P\tan\theta_1, \qquad Q_2 = P\tan\theta_2, \qquad Q_C = Q_1 - Q_2, \qquad C = \frac{Q_C}{\omega V_{rms}^2}$$

and the new line current follows from $I_{rms} = S/V_{rms}$ with $S_2 = P/\text{pf}_2$.

*From* [4.3](lessons/04-03-ac-power-power-factor.md)

### Handy numbers

$\sqrt2 \approx 1.414$ · $1/\sqrt2 \approx 0.707$ · $e^{-1} \approx 0.368$ ·
$\ln 10 \approx 2.303$ · 60 Hz line: $\omega = 2\pi(60) = 377\,\text{rad/s}$ ·
120 V rms peaks at $\approx 170\,\text{V}$.

Right triangles that keep reappearing in impedance and power problems:
$3\text{–}4\text{–}5$ (so $30 + j40 = 50\angle 53.13^\circ$, $\cos\theta = 0.6$,
$\sin\theta = 0.8$) and its multiples $6\text{–}8\text{–}10$.

## Assumed, not taught here

Circuits is a Tier 0 engineering course sitting on two math prerequisites and a
physics one. It uses all of the following without deriving them.

| Fact | Where it's taught |
|---|---|
| Derivatives and integrals of $e^{kt}$, $t^n$, sinusoids — everything behind $i = dq/dt$, $i = C\,dv/dt$, $v = L\,di/dt$ | [calc-refresher 1.2](../calc-refresher/lessons/01-02-differentiation-rules.md), [2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| Accumulation: charge as $\int i\,dt$, energy as $\int p\,dt$, average power as energy over elapsed time | [calc-refresher 2.1](../calc-refresher/lessons/02-01-integral-as-accumulation.md) |
| Improper integrals — the finite total energy of a decaying transient over infinite time | [calc-refresher 2.3](../calc-refresher/lessons/02-03-improper-integrals-and-models.md) |
| Setting a derivative to zero to optimize — how $R_L = R_\text{th}$ falls out of $dP_L/dR_L = 0$ | [calc-refresher 1.4](../calc-refresher/lessons/01-04-optimization.md) |
| First-order linear ODEs and their exponential solution ($\tau\dot x + x = x(\infty)$) | [ode-refresher 1.2](../ode-refresher/lessons/01-02-separable-and-linear-first-order.md) |
| Second-order constant-coefficient ODEs: the $e^{st}$ guess, the characteristic equation, real vs. repeated vs. complex roots | [ode-refresher 2.1](../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) |
| Over-, critically-, and under-damped classification and the damped frequency | [ode-refresher 2.2](../ode-refresher/lessons/02-02-oscillations-damping.md) |
| Driven oscillation and resonance in a second-order system | [ode-refresher 2.3](../ode-refresher/lessons/02-03-forcing-resonance.md) |
| Complex numbers: rectangular/polar forms, modulus and argument, conjugates, the arithmetic rules | [precalculus 4.2](../precalculus/lessons/04-02-vectors-parametric-and-polar.md), [complex-analysis 1.1](../complex-analysis/lessons/01-01-complex-numbers-geometry.md) |
| Euler's formula $e^{j\theta} = \cos\theta + j\sin\theta$ — the entire basis of the phasor | [complex-analysis 1.3](../complex-analysis/lessons/01-03-exponential-log-trig.md) |
| Trig identities: the product-to-sum used to split $p(t)$, the power-reduction identity behind the RMS factor $\sqrt2$, radians vs. degrees | [precalculus 3.1](../precalculus/lessons/03-01-trig-functions-for-calculus.md) |
| Solving a square linear system (elimination, substitution) — every nodal and mesh problem ends here | [linalg-refresher 1.3](../linalg-refresher/lessons/01-03-linear-systems-elimination-rank.md) |
| Determinants and Cramer's rule, used to crack the $2\times2$ mesh system | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Voltage as electric potential — energy per unit charge, and why it is path-independent (which is what makes KVL true) | [em-refresher 1.3](../em-refresher/lessons/01-03-electric-potential.md) |
| Where capacitance physically comes from (plate geometry, the stored field energy) | [em-refresher 2.1](../em-refresher/lessons/02-01-capacitance.md) |
| Lenz's law and induced EMF — the physics behind an inductor fighting a change in current | [em-refresher 3.3](../em-refresher/lessons/03-03-electromagnetic-induction.md) |
| Microscopic Ohm's law $\mathbf{J} = \sigma\mathbf{E}$, the field-level origin of $v = iR$ | [em-refresher 2.2](../em-refresher/lessons/02-02-dc-circuits.md) |

## Pitfalls

### Signs and the passive sign convention

- $p = vi$ is **absorbed** power only when the current enters the $+$ terminal. Entering the $-$ terminal? Use $p = -vi$, or relabel — but do one of them. *([1.1](lessons/01-01-charge-current-voltage-power.md))*
- $v$, $i$, and $p$ are **signed labels** tied to your reference arrows, not positive quantities. A source under the passive convention comes out with $p < 0$, and that minus sign is the information. *([1.1](lessons/01-01-charge-current-voltage-power.md))*
- A "source" is not always delivering: push current into a battery's $+$ terminal and it **absorbs** (it's being charged). *([1.3](lessons/01-03-kirchhoffs-laws-kcl-kvl.md))*
- A negative current is not an error — it means reality runs opposite to your guessed reference direction. The magnitude is still right; never rush to "fix" a sign. *([1.3](lessons/01-03-kirchhoffs-laws-kcl-kvl.md))*
- Current is the *derivative* of charge, not a synonym for it: a steady 2 A means charge keeps piling up even though the current is constant. *([1.1](lessons/01-01-charge-current-voltage-power.md))*

### Reading topology

- A node is **every point joined by unbroken wire**, not a dot on the page. Miscounting nodes means writing redundant equations. *([1.3](lessons/01-03-kirchhoffs-laws-kcl-kvl.md))*
- "Drawn next to each other" is not series. Series means the shared node has **nothing else** attached, so the identical current is forced through both. *([1.2](lessons/01-02-ohms-law-equivalent-resistance.md))*
- Only loops that introduce a **new branch** give independent KVL equations — the outer loop of a two-window circuit is just loop 1 minus loop 2. *([1.3](lessons/01-03-kirchhoffs-laws-kcl-kvl.md))*

### Combining and dividing

- Resistances do **not** add in parallel — *conductances* do. Two $6\,\Omega$ in parallel give $3\,\Omega$, not $12$. *([1.2](lessons/01-02-ohms-law-equivalent-resistance.md))*
- Product-over-sum is a **two-resistor-only** shortcut; for three, use reciprocals or combine two at a time. *([1.2](lessons/01-02-ohms-law-equivalent-resistance.md))*
- In a two-resistor **current** divider each branch rides on the *other* resistor; in a **voltage** divider each uses its own. When in doubt, drop to conductances, where every branch honestly uses its own $G_k$. *([1.4](lessons/01-04-voltage-current-dividers.md))*
- A **loaded** tap breaks the bare divider formula — the moment anything draws current at the tap, parallel-combine the load into the bottom leg first. *([1.4](lessons/01-04-voltage-current-dividers.md))*
- Dividers are a reward for recognizing series/parallel, not a substitute for checking it. *([1.4](lessons/01-04-voltage-current-dividers.md))*

### Nodal and mesh bookkeeping

- Any node can be the reference — only voltage *differences* are physical. Pick the one touching the most branches. *([2.1](lessons/02-01-nodal-analysis.md))*
- A voltage source from a node **to ground** needs no supernode; it just fixes that node's voltage. Supernodes are only for a source floating between two non-reference nodes. *([2.1](lessons/02-01-nodal-analysis.md))*
- Off-diagonal entries of $\mathbf{G}$ and $\mathbf{R}$ are always **negative** and the matrices always symmetric — that structure is a built-in error check, not a choice. *([2.1](lessons/02-01-nodal-analysis.md), [2.2](lessons/02-02-mesh-analysis.md))*
- A shared branch carries the **difference** $I_j - I_k$ of two clockwise mesh currents, never the sum. This is the single most common mesh error. *([2.2](lessons/02-02-mesh-analysis.md))*
- You cannot write a KVL drop across a current source — its voltage is unknown. Route around it with a supermesh plus the constraint. *([2.2](lessons/02-02-mesh-analysis.md))*
- Mesh analysis needs a **planar** circuit; if it can't be drawn without crossings, use nodal. *([2.2](lessons/02-02-mesh-analysis.md))*

### Theorems and equivalents

- Deactivating means **short a voltage source, open a current source** — exactly, and only the source symbol changes. Its series or parallel resistor stays. *([2.3](lessons/02-03-superposition-source-transformation.md))*
- **Never superpose power.** It's quadratic: $(i_1+i_2)^2 \neq i_1^2 + i_2^2$. Superpose the voltage or current first, then square. *([2.3](lessons/02-03-superposition-source-transformation.md))*
- A source transformation preserves behavior **only at the terminals** — the internal dissipation of the two forms differs, so never use it to bookkeep a source's own power. *([2.3](lessons/02-03-superposition-source-transformation.md))*
- Sources stay **on** for $V_\text{oc}$ and $I_\text{sc}$. You deactivate only for the reduce-the-resistors route to $R_\text{th}$. *([2.4](lessons/02-04-thevenin-norton-max-power.md))*
- A **dependent** source can't be turned off — it follows its controlling variable. Use $V_\text{oc}/I_\text{sc}$ or a test source. *([2.4](lessons/02-04-thevenin-norton-max-power.md))*
- Maximum power transfer is not maximum efficiency — matching burns as much inside $R_\text{th}$ as it delivers, so it runs at one-half efficiency. Great for a signal, terrible for a grid. *([2.4](lessons/02-04-thevenin-norton-max-power.md))*

### Storage elements and transients

- A capacitor's current depends on the **slope** of its voltage, not its height: a capacitor sitting at a rock-steady 100 V carries zero current. *([3.1](lessons/03-01-capacitors-and-inductors.md))*
- At DC a capacitor is an **open**, so a resistor in series with it drops *nothing* — the capacitor sees the full node voltage. Mirror image: a resistor parallel to a shorted inductor is bypassed. *([3.1](lessons/03-01-capacitors-and-inductors.md))*
- Continuity applies to **one variable each**: $v_C$ and $i_L$ can't jump, but a capacitor's *current* and an inductor's *voltage* can and do snap instantly. *([3.1](lessons/03-01-capacitors-and-inductors.md), [3.2](lessons/03-02-first-order-rc-rl-transients.md), [3.3](lessons/03-03-second-order-rlc.md))*
- The $R$ in $\tau$ is the **Thévenin resistance the element sees**, not the resistor drawn next to it. Miss this and every timing number is wrong. *([3.2](lessons/03-02-first-order-rc-rl-transients.md))*
- One $\tau$ per circuit, but every variable has its **own** $x(0^+)$ and $x(\infty)$. And "settled at $5\tau$" is engineering shorthand — the exponential is an asymptote. *([3.2](lessons/03-02-first-order-rc-rl-transients.md))*
- $\alpha = R/2L$ is the **series** formula; parallel RLC uses $\alpha = 1/(2RC)$, where the dependence on $R$ is inverted. Ask "series or parallel?" before writing $\alpha$. ($\omega_0$ is the same for both.) *([3.3](lessons/03-03-second-order-rlc.md))*
- More resistance means faster settling only up to critical damping. Past it, the lazy root creeps toward zero and the circuit gets **slower**. *([3.3](lessons/03-03-second-order-rlc.md))*

### Phasors, impedance, and AC power

- Phasors assume the **cosine** reference and describe only the **steady state** at a **single** frequency. Convert sines first, and never put two frequencies on one diagram. *([4.1](lessons/04-01-sinusoids-and-phasors.md))*
- You cannot add in polar form. Add in rectangular, multiply and divide in polar. *([4.1](lessons/04-01-sinusoids-and-phasors.md), [4.2](lessons/04-02-impedance-phasor-analysis.md))*
- Impedances combine as **complex numbers**, not magnitudes: $30 + j40$ has $|Z| = 50$, not $70$. Go polar only for the final multiply or divide. *([4.2](lessons/04-02-impedance-phasor-analysis.md))*
- $Z_C = 1/(j\omega C) = -j/(\omega C)$ — the reciprocal of $j$ is $-j$, so capacitive reactance is **negative**. Drop that sign and your circuit looks inductive and every phase flips. *([4.2](lessons/04-02-impedance-phasor-analysis.md))*
- $Z$ is a **ratio, not a phasor** — it has no waveform, and it changes with $\omega$. Recompute it whenever the frequency moves. *([4.2](lessons/04-02-impedance-phasor-analysis.md))*
- At resonance the reactances cancel **in the sum**; each element can still hold a voltage many times the source's (magnified by $Q = \omega_0 L/R$). *([4.2](lessons/04-02-impedance-phasor-analysis.md))*
- Reactive power isn't "lost" — its net energy transfer over a cycle is exactly zero. Its cost is the extra current, which heats the *lines* and forces oversized equipment. *([4.3](lessons/04-03-ac-power-power-factor.md))*
- Never add apparent powers or currents arithmetically — they're at different angles. Add $P$'s and $Q$'s separately, then take the hypotenuse. *([4.3](lessons/04-03-ac-power-power-factor.md))*
- Correct a **lagging** (inductive) load with a **capacitor**, and don't overshoot: past unity you're leading, the angle grows again, and the current climbs back up. *([4.3](lessons/04-03-ac-power-power-factor.md))*
- A power factor without "leading" or "lagging" is ambiguous — cosine can't tell the two signs of $\theta$ apart. *([4.3](lessons/04-03-ac-power-power-factor.md))*
