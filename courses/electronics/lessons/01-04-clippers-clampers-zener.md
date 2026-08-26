# Electronics & Semiconductors · Lesson 1.4: Clippers, clampers & the Zener regulator

> ⏱ ~15 min · Module 1: Diodes & applications · Builds on: [1.2 The pn-junction diode: I–V & models](01-02-pn-junction-diode-models.md), [1.3 Rectifiers & power supplies](01-03-rectifiers-power-supplies.md) · Unlocks: 2.1 (the BJT), and every circuit that needs a clean supply rail

## Why this matters

[1.3](01-03-rectifiers-power-supplies.md) got you from the wall to a lumpy DC rail — call it 10 V with a volt of ripple riding on it. Nothing you build in Modules 2–4 wants that. A transistor bias point drifts with its supply; an op-amp reference is only as good as the voltage it references. This lesson is the last mile: how to take a waveform and *carve* it — flatten it above a level (**clipper**), slide it bodily up or down (**clamper**), or nail a node to a fixed voltage no matter what the load does (**Zener regulator**). All three come out of one device you already understand, a one-way valve with a reference voltage bolted to it. The Zener regulator is also your first taste of a design problem with a two-sided constraint, which is what real engineering feels like.

## The idea

A diode is a switch that decides *for itself*. Wire it against a reference — ground, a battery, a charged capacitor — and it enforces a rule on your circuit automatically: "this node shall not exceed that level." What you build depends on where the diode sits and what it is referenced to.

- **Clipper (limiter).** Diode *across* the output. Below the threshold it is open and invisible; above it, it turns on and holds the node down. The waveform's peaks get sheared off. Shape changed, DC level unchanged.
- **Clamper (DC restorer).** Diode plus a *series capacitor*. The cap charges up once, then just sits there as a battery in series with the signal. The whole waveform slides to a new DC level. Shape unchanged, DC level changed.
- **Zener regulator.** Diode run *backwards* into breakdown, where its I–V curve is nearly vertical — huge current swings for millivolts of voltage change. That near-verticality is precisely what a voltage reference is.

One valve, three jobs: limit it, shift it, pin it.

## The formal version

### The analysis habit: piecewise-linear, region by region

Every circuit in this lesson is nonlinear only because the diode has two states. So kill the nonlinearity by brute force. **For each region of the input, guess the diode's state, replace it with its model, solve the resulting purely linear circuit, then check the guess.** Using the constant-voltage-drop model from [1.2](01-02-pn-junction-diode-models.md):

- **ON** → replace with a 0.7 V source (a short plus 0.7 V). Check: is the resulting current positive (anode to cathode)? If not, the guess was wrong.
- **OFF** → replace with an open circuit. Check: is the resulting anode-to-cathode voltage below 0.7 V? If not, wrong guess.

Then stitch the regions together at the crossover point. The result is a **transfer characteristic** $v_o$ versus $v_i$: a piecewise-straight curve with a kink at each state change. *In words: a diode circuit is just two linear circuits taped together at the switching point.*

### Clippers

**Series clipper:** the diode is in the signal path, so when it is off the output is *disconnected* and $v_o = 0$. That is a half-wave rectifier wearing a different hat.

**Shunt clipper** (the useful one): a series resistor $R$ feeds the output node, and the diode hangs from that node to a bias source $V_B$ (volts). See the figure. With $R = 1\ \text{k}\Omega$, $V_B = 3\ \text{V}$, and an unloaded output:

- **$v_i < V_B + 0.7 = 3.7\ \text{V}$** — diode OFF, no current anywhere, no drop across $R$, so $\boxed{v_o = v_i}$. Slope 1.
- **$v_i > 3.7\ \text{V}$** — diode ON, so the node is held at $V_B + 0.7$: $\boxed{v_o = 3.7\ \text{V}}$. Slope 0. The excess falls across $R$, which carries $I = (v_i - 3.7)/R$.

*In words: the output follows the input until the input tries to climb past the diode's threshold, and then it flatlines.* Feed in a 10 V-peak sine and the positive peaks come out sliced off at 3.7 V, while the negative half passes through untouched. At the input peak the diode carries $(10 - 3.7)/1\ \text{k}\Omega = 6.3\ \text{mA}$.

The practical payoff: put this on a microcontroller input pin and a stray 10 V spike arrives at the chip as 3.7 V. Real chips have exactly this built in — clamp diodes from every pin to the two supply rails — with $R$ your job to add so the diode does not have to swallow unlimited current. Reverse the diode and it clips the bottom instead; use two, back to back, and you get a double-ended limiter.

### Clampers (DC restorers)

Put a capacitor $C$ in *series* with the signal and a diode from the output node to ground. Define $V_C$ as the capacitor voltage measured input-side minus output-side, so that

$$v_o(t) = v_i(t) - V_C.$$

Take a 5 V-amplitude sine (10 V peak-to-peak) and a diode with its **anode at the output node, cathode to ground** — it conducts whenever $v_o$ tries to exceed $+0.7\ \text{V}$.

**First positive peak.** The diode conducts, pinning $v_o = +0.7\ \text{V}$ while $v_i = +5\ \text{V}$. Charge flows into the cap until $V_C = 5 - 0.7 = 4.3\ \text{V}$.

**Every cycle after.** The input never gets more positive than $+5\ \text{V}$, so the diode never needs to conduct again. $V_C$ stays at 4.3 V — the capacitor has become a 4.3 V battery in series with the source. Therefore

$$v_o = v_i - 4.3\ \text{V} \quad\Longrightarrow\quad v_o \in [-9.3\ \text{V},\; +0.7\ \text{V}].$$

*In words: the waveform got shoved down until its peak landed on the diode's threshold, and it stayed there.*

Two things readers get wrong:

1. **The shape does not change.** The output is the input *plus a constant*, so the peak-to-peak swing is still 10 V — it just lives between $-9.3$ V and $+0.7$ V instead of $-5$ V and $+5$ V. A clamper adds DC; it does not compress.
2. **The offset droops if you let it.** Nothing holds $V_C$ except the cap. Any load resistance $R_L$ bleeds it between conduction peaks with time constant $\tau = R_L C$ ([circuits 3.2](../../circuits/lessons/03-02-first-order-rc-rl-transients.md)). You need $\tau \gg T$, the signal period — a rule of thumb is $\tau \ge 10T$. With $R_L = 100\ \text{k}\Omega$, $C = 1\ \mu\text{F}$ and $f = 1\ \text{kHz}$: $\tau = 0.1\ \text{s}$, $T = 1\ \text{ms}$, so $\tau = 100T$ and the droop per cycle is roughly $V_C\,T/\tau = 4.3 \times 0.01 = 43\ \text{mV}$, well under one percent of the 10 V swing.

Flip the diode and you get the **positive clamper**, which pins the *trough* instead: the output runs from $-0.7$ V up to $+9.3$ V. Video used this to restore the black level of a sync-stripped signal every line — hence "DC restorer."

### The Zener diode

Push a diode hard in reverse and past some voltage it conducts anyway — the **breakdown voltage** $V_Z$. Two mechanisms do it (band-to-band tunneling below about 5 V, avalanche multiplication above; the physics belongs to [semiconductor-devices](../../semiconductor-devices/syllabus.md)), and both are perfectly non-destructive as long as you limit the *current*. A Zener diode is just a diode built with a tight, specified $V_Z$.

What makes it useful is the *shape* of the reverse curve past breakdown: nearly vertical. Change the current from 5 mA to 30 mA — a factor of six — and the voltage moves by a few tens of millivolts. The residual slope is the **dynamic (incremental) resistance**

$$r_z = \left.\frac{\partial V}{\partial I}\right|_{\text{breakdown}},$$

typically 5–20 Ω for a small Zener. *In words: $r_z$ is how far from a perfect voltage source the Zener is.* For hand analysis take $r_z \approx 0$, i.e. treat the device as an ideal $V_Z$ battery — and bring $r_z$ back only when you want regulation figures.

### The shunt regulator, and its one design constraint

Feed the unregulated rail $V_{in}$ through a series resistor $R_S$ into a node where a Zener sits to ground, with the load in parallel. The Zener holds the node at $V_Z$; $R_S$ eats the difference. Since the node is fixed at $V_Z$, the current through the resistor is fixed too:

$$I_{R_S} = \frac{V_{in} - V_Z}{R_S}, \qquad I_{R_S} = I_Z + I_L \;\;\text{(KCL)}.$$

That second equation is the whole lesson. $R_S$ decides how much current arrives; the load takes what it wants; **the Zener absorbs the remainder.** So:

- **Worst case for $I_{Z,\min}$ is maximum load** (and minimum input). If $I_L$ grows enough, $I_Z$ falls below the knee, the diode leaves breakdown, and regulation simply stops — the node sags below $V_Z$ and follows the input.
- **Worst case for $I_{Z,\max}$ is no load at all** (and maximum input). Disconnect the load and every milliamp $R_S$ delivers goes through the Zener. That is the thermal worst case, and it is the one people forget, because "no load" feels like the easy condition.

Sizing follows from the first bullet: at the worst corner, $I_{R_S}$ must still cover the load *plus* the Zener's minimum keep-alive current, which needs $R_S$ small enough:

$$\boxed{\,R_S \;\le\; \frac{V_{in,\min} - V_Z}{I_{Z,\min} + I_{L,\max}}\,}$$

*In words: pick $R_S$ small enough that even on the worst day there is current to spare for the Zener.* Then check the other end — no load, highest input — for Zener power.

## Picture

![Panel a, a shunt clipper schematic with series resistor, diode and bias source, beside its transfer characteristic showing a slope-one line that flattens at 3.7 volts. Panel b, a Zener shunt regulator with series resistor R sub S, Zener to ground, and load in parallel, with the current split I sub RS equals I sub Z plus I sub L annotated](assets/01-04-fig1.svg)

## Worked examples

**Example 1 (boss problem 1(b) — design the regulator).** The ≈10 V rail from the bridge rectifier feeds a 5.1 V Zener shunt regulator ($r_z \approx 0$). The load draws up to 20 mA, and the Zener must keep at least 5 mA. Choose $R_S$ and state what happens with the load removed.

*Size it.* Apply the inequality with $V_{in,\min} = 10\ \text{V}$, $V_Z = 5.1\ \text{V}$, $I_{Z,\min} = 5\ \text{mA}$, $I_{L,\max} = 20\ \text{mA}$:

$$R_S \le \frac{10 - 5.1}{0.005 + 0.020} = \frac{4.9}{0.025} = 196\ \Omega.$$

Smaller is safe here (more current arrives, so the Zener never starves), so pick the nearest standard value **below** 196 Ω: $R_S = 180\ \Omega$.

*Verify at full load.*

$$I_{R_S} = \frac{4.9\ \text{V}}{180\ \Omega} = 27.2\ \text{mA}, \qquad I_Z = 27.2 - 20 = 7.2\ \text{mA} \;\ge\; 5\ \text{mA}. \;\text{Good.}$$

*Now remove the load.* $I_L = 0$, so the Zener takes the whole 27.2 mA, and dissipates

$$P_Z = V_Z I_Z = 5.1 \times 0.0272 = 0.139\ \text{W} = 139\ \text{mW}.$$

A 250 mW Zener survives that with a little margin; a 500 mW part is the comfortable choice, and it has to be, because the rail is not really a clean 10 V — [1.3](01-03-rectifiers-power-supplies.md)'s ripple means it peaks higher. At 11 V with no load, $I_Z = 5.9/180 = 32.8\ \text{mA}$ and $P_Z = 167\ \text{mW}$. **Answer: $R_S = 180\ \Omega$; at no load the Zener current jumps from 7.2 mA to 27.2 mA and it burns 139 mW, so specify at least a 500 mW device.**

Don't forget the resistor: $P_{R_S} = (4.9)^2/180 = 0.133\ \text{W}$, so a quarter-watt resistor, not an eighth.

**Example 2 (how good is it? line and load regulation).** Two figures of merit, both obtained by putting $r_z$ back and doing small-signal analysis on the node. Take $r_z = 7\ \Omega$ (typical for a 5.1 V, 1 W part) and $R_S = 180\ \Omega$.

**Line regulation** — output movement per volt of *input* movement. To a small change, $R_S$ and $r_z$ form a voltage divider ([circuits 1.4](../../circuits/lessons/01-04-voltage-current-dividers.md)):

$$\frac{\Delta V_o}{\Delta V_{in}} \approx \frac{r_z}{R_S + r_z} = \frac{7}{187} = 0.0374\ \text{V/V} = 37\ \text{mV per volt}.$$

So the volt of ripple riding on the rail comes out as 37 mV of ripple — a **ripple rejection of about 27:1**, which is the regulator's main selling point.

**Load regulation** — output movement per amp of *load current*. Looking back from the output node with the input held fixed, the load current change sees $R_S$ in parallel with $r_z$:

$$\frac{\Delta V_o}{\Delta I_L} \approx -\,(R_S \parallel r_z) = -\frac{180 \times 7}{187} = -6.74\ \Omega.$$

Over the full 0 → 20 mA load range that is $6.74 \times 0.020 = 0.135\ \text{V}$, i.e. the output sags 135 mV, about 2.6 percent of 5.1 V. Fine for a bias reference; not fine for a precision ADC reference.

**Why nobody ships this.** Count the power at full load: the source delivers $10 \times 27.2\ \text{mA} = 272\ \text{mW}$ and the load receives $5.1 \times 20\ \text{mA} = 102\ \text{mW}$ — 37 percent efficient. At *no* load, efficiency is zero and the circuit still burns all 272 mW, because a shunt regulator holds its total current constant and throws away whatever the load declines. A three-terminal IC regulator (or a series-pass transistor, which is a Zener reference plus an emitter follower — [2.1](02-01-bjt-how-it-works.md)) puts the control element *in series*, so it passes only the current the load asks for, and adds feedback to push load regulation into the milliohm range.

## Watch out

- **You might think a clamper clips the waveform.** It doesn't — it *translates* it. Peak-to-peak swing out equals peak-to-peak swing in, always. If your clamper output has a squashed peak, your RC is too short or the diode is conducting when it shouldn't, and you have accidentally built a clipper.
- **You might size $R_S$ from the no-load case and call it done.** The inequality only guarantees the *floor* ($I_Z \ge I_{Z,\min}$ at full load). The *ceiling* is a separate check at the opposite corner — maximum input, zero load — and it is a power check, in watts, not a current check. Both corners, every time.
- **You might treat a Zener as a battery in forward bias too.** It isn't. Forward-biased, a Zener is an ordinary 0.7 V diode; $V_Z$ only exists in reverse. Put it in backwards and your 5.1 V rail becomes 0.7 V.
- **You might read "clipping at $V_B$" off the schematic.** The level is $V_B + 0.7$, because the diode's own drop stacks on top of the bias source. With $V_B = 3\ \text{V}$ that's a 23 percent error in the clip level — small $V_B$, big relative mistake.

## One-liner

> A diode plus a reference carves waveforms three ways — a shunt diode flattens the peaks at $V_B + 0.7$, a series cap plus a diode slides the whole shape to a new DC level, and a reverse-biased Zener holds a node at $V_Z$ by swallowing exactly the current the load didn't take.

## Problems

**P1 (🟢)** A shunt clipper uses $R = 2.2\ \text{k}\Omega$ and a bias source $V_B = 2\ \text{V}$, with the diode's anode at the output node and its cathode to $V_B$ (constant-drop model, 0.7 V). The input is $v_i = 8\sin(\omega t)$ V and the output is unloaded. Give the output's maximum and minimum values, and the peak diode current.

**P2 (🟡)** A 6 V-amplitude, 500 Hz sine drives a clamper: series capacitor $C$, then a diode from the output node to ground with its **cathode at the output node and anode at ground**. (a) Find the steady-state capacitor voltage and the output's range. (b) The output feeds a 47 kΩ load. Choose $C$ so the RC time constant is at least 20 periods, and estimate the droop per cycle.

**P3 (🔴)** Design a Zener shunt regulator for a 6.2 V rail. The unregulated input varies between 12 V and 15 V; the load draws anywhere from 0 to 30 mA; the Zener needs at least 5 mA to stay in breakdown. Choose $R_S$ from the standard values 120, 150, 180, 220 Ω, then specify the power rating of both the Zener and the resistor.

<details>
<summary>Solutions</summary>

**P1** The diode conducts when the output node is pulled above $V_B + 0.7 = 2 + 0.7 = 2.7\ \text{V}$.

*Region 1, $v_i < 2.7$ V (diode OFF).* Open circuit, no load, so no current flows through $R$ and there is no drop across it: $v_o = v_i$. This covers everything down to the negative peak, so $v_{o,\min} = -8\ \text{V}$.

*Region 2, $v_i > 2.7$ V (diode ON).* The node is held at $V_B + 0.7 = 2.7\ \text{V}$, so $v_{o,\max} = 2.7\ \text{V}$.

Peak diode current is at the input peak $v_i = 8\ \text{V}$, when the whole excess falls across $R$:

$$I_{D,\text{peak}} = \frac{8 - 2.7}{2200} = \frac{5.3}{2200} = 2.41\ \text{mA}.$$

**Answer:** output runs from $-8\ \text{V}$ to $+2.7\ \text{V}$ (10.7 V peak-to-peak, versus 16 V in), peak diode current 2.41 mA.

*Check.* Verify the OFF guess at $v_i = 0$: the anode sits at 0 V, the cathode at $V_B = 2$ V, so the anode-to-cathode voltage is $-2\ \text{V} < 0.7\ \text{V}$ — off, as assumed. Verify the ON guess at the peak: current 2.41 mA flows anode to cathode, positive — on, as assumed. Diode dissipation is a trivial $0.7 \times 2.41\ \text{mA} = 1.7\ \text{mW}$.

**P2 (a)** With the cathode at the output node and the anode at ground, the diode conducts when the output node is driven *below* $-0.7\ \text{V}$. Using $v_o = v_i - V_C$:

On the first negative peak, $v_i = -6\ \text{V}$ while the diode pins $v_o = -0.7\ \text{V}$, so

$$V_C = v_i - v_o = -6 - (-0.7) = -5.3\ \text{V},$$

i.e. 5.3 V with the positive plate on the *output* side. Thereafter the diode never conducts again and

$$v_o = v_i - V_C = v_i + 5.3 \quad\Longrightarrow\quad v_o \in [-0.7\ \text{V},\; +11.3\ \text{V}].$$

**This is a positive clamper**: the trough is pinned near zero and the waveform sits above it. Peak-to-peak is still $11.3 - (-0.7) = 12\ \text{V}$, matching the input's 12 V — the shape is untouched.

**(b)** $T = 1/500 = 2\ \text{ms}$, so we want $\tau = R_L C \ge 20T = 40\ \text{ms}$:

$$C \ge \frac{40 \times 10^{-3}}{47 \times 10^{3}} = 8.51 \times 10^{-7}\ \text{F} = 0.85\ \mu\text{F} \;\Longrightarrow\; C = 1\ \mu\text{F}.$$

With $C = 1\ \mu\text{F}$, $\tau = 47\ \text{ms} = 23.5\,T$, and the droop per cycle is approximately

$$\Delta V \approx V_C \frac{T}{\tau} = 5.3 \times \frac{2}{47} = 0.23\ \text{V},$$

about 1.9 percent of the 12 V swing.

*Check.* The exponential estimate $V_C(1 - e^{-T/\tau}) = 5.3(1 - e^{-0.0426}) = 5.3 \times 0.0417 = 0.221\ \text{V}$ agrees with the linear approximation to within 2 percent, as it should for $T \ll \tau$. Sanity: a positive clamper must produce a *positive* offset, and $+5.3\ \text{V}$ is positive.

**P3** *Step 1 — size $R_S$ at the starve corner (minimum input, maximum load).*

$$R_S \le \frac{V_{in,\min} - V_Z}{I_{Z,\min} + I_{L,\max}} = \frac{12 - 6.2}{0.005 + 0.030} = \frac{5.8}{0.035} = 165.7\ \Omega.$$

From the list, the largest standard value at or below 165.7 Ω is **$R_S = 150\ \Omega$**. (220 and 180 both exceed the limit and would let the Zener fall out of breakdown at full load.)

*Step 2 — verify the floor.* At $V_{in} = 12\ \text{V}$, $I_L = 30\ \text{mA}$:

$$I_{R_S} = \frac{12 - 6.2}{150} = \frac{5.8}{150} = 38.7\ \text{mA}, \qquad I_Z = 38.7 - 30 = 8.7\ \text{mA} \;\ge\; 5\ \text{mA}. \;\text{Good.}$$

*Step 3 — the ceiling, at the opposite corner (maximum input, no load).*

$$I_{R_S} = \frac{15 - 6.2}{150} = \frac{8.8}{150} = 58.7\ \text{mA}, \qquad I_Z = 58.7\ \text{mA} \;(\text{the load takes none}),$$

$$P_Z = V_Z I_Z = 6.2 \times 0.0587 = 0.364\ \text{W}.$$

A 250 mW or 400 mW Zener would cook. **Specify a 1 W Zener** (500 mW leaves only 37 percent headroom, and Zener ratings derate hard above 25 °C).

*Step 4 — the resistor, same corner.*

$$P_{R_S} = \frac{(V_{in,\max} - V_Z)^2}{R_S} = \frac{8.8^2}{150} = \frac{77.4}{150} = 0.516\ \text{W}.$$

**Specify a 1 W resistor.** Note this corner does not depend on the load at all — $R_S$ sees the same 8.8 V whether the load is drawing 30 mA or nothing, which is exactly the shunt regulator's efficiency problem in one number.

*Check.* Currents at every corner: (12 V, 30 mA) → $I_Z = 8.7$ mA; (12 V, 0) → $I_Z = 38.7$ mA; (15 V, 30 mA) → $I_Z = 58.7 - 30 = 28.7$ mA; (15 V, 0) → $I_Z = 58.7$ mA. All four sit between 5 mA and the 1 W part's limit of $1/6.2 = 161\ \text{mA}$. The design holds across the whole box.

</details>

## Flashback

**From Lesson 1.3 (Rectifiers & power supplies):** A **half-wave** rectifier (one diode, constant-drop model, 0.7 V) is driven by a 15 V-peak, 60 Hz secondary and feeds a 470 µF smoothing capacitor across a 470 Ω load. Estimate the peak output voltage, the peak-to-peak ripple, and the average DC output. (Fresh variant: half-wave, not the bridge.)

<details>
<summary>Solution</summary>

**Peak.** One diode in the conduction path, so the cap charges to

$$V_{o,\text{peak}} = 15 - 0.7 = 14.3\ \text{V}.$$

**Ripple.** Between charging pulses the load drains the cap at roughly constant current

$$I_L \approx \frac{V_{o,\text{peak}}}{R_L} = \frac{14.3}{470} = 30.4\ \text{mA}.$$

Half-wave rectification refills the cap only *once* per input cycle, so the discharge lasts essentially the full period $T = 1/60 = 16.7\ \text{ms}$. From $I = C\,dV/dt$ with a linear-ramp approximation:

$$V_r \approx \frac{I_L T}{C} = \frac{0.0304 \times 0.0167}{470 \times 10^{-6}} = \frac{5.07\times10^{-4}}{4.70\times10^{-4}} = 1.08\ \text{V peak-to-peak}.$$

**Average DC.** The output ramps linearly from the peak down by $V_r$, so its mean sits half a ripple below the peak:

$$V_{DC} \approx V_{o,\text{peak}} - \frac{V_r}{2} = 14.3 - 0.54 = 13.8\ \text{V}.$$

*Check.* A full-wave bridge on the same transformer would drop 1.4 V (two diodes) and refill *twice* per cycle, halving the ripple to about 0.54 V — the standard reason to spend two extra diodes. Sanity on the linear-ramp approximation: $V_r/V_{o,\text{peak}} = 7.5$ percent, comfortably small, so treating the load current as constant is fair. And this 13.8 V rail with 1.08 V of ripple is exactly the kind of input the Zener regulator above is built to clean up — with a line regulation of 37 mV per volt, that ripple would come out around 40 mV.

</details>

## Connections

- **Backward:** every state decision here is the constant-voltage-drop model from [1.2](01-02-pn-junction-diode-models.md), and $r_z$ is the same *incremental* idea as the small-signal resistance $r_d = V_T/I_D$ from that lesson — a slope, not a resistance you could measure with an ohmmeter. The clamper's droop is a plain RC discharge ([circuits 3.2](../../circuits/lessons/03-02-first-order-rc-rl-transients.md)), and the regulation formulas are a voltage divider and a Thévenin resistance ([circuits 1.4](../../circuits/lessons/01-04-voltage-current-dividers.md), [circuits 2.4](../../circuits/lessons/02-04-thevenin-norton-max-power.md)).
- **Forward:** the shunt regulator's weakness — it wastes power and regulates loosely — is the argument for the series-pass regulator, which is a Zener reference driving an emitter follower built from [2.1](02-01-bjt-how-it-works.md)'s transistor, and then for closing a feedback loop around it in [4.1](04-01-negative-feedback.md). The clipper's transfer characteristic, a straight line that saturates, is also the first half of the op-amp comparator's curve in [3.5](03-05-comparators-schmitt-triggers.md).
- **Sideways:** "worst case at both ends of the operating box" is the same design discipline as sizing anything with a two-sided constraint — a beam that must not yield under maximum load nor buckle under minimum stiffness. Compute both corners, then pick the value that satisfies the tighter one. And the clipper is a *soft* saturating nonlinearity: the same shape a control loop's actuator has when it hits its rails, which is why saturation is treated as its own topic in [control-systems](../../control-systems/syllabus.md).
