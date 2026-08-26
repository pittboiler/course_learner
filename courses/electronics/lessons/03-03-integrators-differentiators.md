# Electronics & Semiconductors · Lesson 3.3: Integrators & differentiators

> ⏱ ~15 min · Module 3: Op-amps & analog design · Builds on: [3.1 The ideal op-amp](03-01-ideal-op-amp-inverting-noninverting.md), [3.2 Summing & difference amps](03-02-summing-difference-instrumentation.md), [`circuits` 3.1 Capacitors & inductors](../../circuits/lessons/03-01-capacitors-and-inductors.md) · Unlocks: [3.4 Active filters](03-04-active-filters.md), [4.2 Frequency response & GBW](04-02-frequency-response-gain-bandwidth.md)

## Why this matters

In [3.1](03-01-ideal-op-amp-inverting-noninverting.md) the inverting amplifier did arithmetic: multiply by $-R_f/R_1$. In [3.2](03-02-summing-difference-instrumentation.md) it did more arithmetic: add, subtract, weight. Now swap one resistor for a capacitor and the *same three components* do **calculus** — the output becomes the running integral of the input, in real time, in hardware, with no clock and no code.

That is not a metaphor. Before digital computers were fast enough, this is how people solved differential equations: wire up a rack of op-amp integrators and summers so the circuit's own governing equation *is* the equation you want to solve, apply a step, and watch the answer come out on a plotter. Analog computers flew missiles and designed aircraft this way. Today the same two blocks are the "I" and the "D" of a [PID controller](../../control-systems/lessons/04-01-pid-control.md), the ramp generator inside every sawtooth oscillator, the charge amplifier reading a piezo sensor, and — reframed as filters in [3.4](03-04-active-filters.md) — half of analog signal conditioning.

There is a catch, and it is the real content of this lesson: **neither circuit works as textbooks first draw it.** Both need one extra component to survive contact with a real op-amp.

## The idea

The whole trick is one line from [`circuits` 3.1](../../circuits/lessons/03-01-capacitors-and-inductors.md):

$$i_C = C\,\frac{dv_C}{dt}.$$

A capacitor's current is the *derivative* of its voltage. Turn that around: its voltage is the *integral* of its current. So a capacitor is already a calculus element — it just normally sits in a circuit where its voltage and current are tangled up with everything else.

The op-amp untangles it. The virtual ground pins the inverting node at 0 V, which does two things at once: it makes the input current depend on $v_{in}$ **alone** ($i = v_{in}/R$), and it makes the feedback element's voltage equal $-v_{out}$ **alone**. Nothing interacts. So:

- Put the capacitor in the **feedback** path. The input resistor turns voltage into current; the capacitor accumulates that current as charge; the accumulated charge *is* an integral. → **integrator**.
- Put the capacitor at the **input**. Now the input current is $C\,dv_{in}/dt$ — already a derivative — and the feedback resistor turns it back into a voltage. → **differentiator**.

Same op-amp, same two parts, swapped positions, inverse operations.

## The formal version

### The integrator

Circuit: resistor $R$ (ohms) from $v_{in}$ to the inverting node; capacitor $C$ (farads) from that node to the output; non-inverting input grounded.

Apply the two golden rules from [3.1](03-01-ideal-op-amp-inverting-noninverting.md). **Rule 1 (virtual short):** with negative feedback, $v_- = v_+ = 0$. **Rule 2 (no input current):** the op-amp inputs draw nothing, so every electron that comes through $R$ must go through $C$.

Step 1 — current in through $R$:

$$i(t) = \frac{v_{in}(t) - 0}{R} = \frac{v_{in}(t)}{R}.$$

Step 2 — that same current through $C$. The capacitor's left plate is at 0 V and its right plate is at $v_{out}$, so the voltage *across* it (left minus right) is $0 - v_{out} = -v_{out}$. With the current $i$ flowing left-to-right through it,

$$i(t) = C\,\frac{d}{dt}\big(v_- - v_{out}\big) = -\,C\,\frac{dv_{out}}{dt}.$$

Step 3 — set them equal:

$$\frac{v_{in}}{R} = -C\,\frac{dv_{out}}{dt} \qquad\Longrightarrow\qquad \frac{dv_{out}}{dt} = -\frac{v_{in}(t)}{RC}.$$

Step 4 — integrate from $0$ to $t$:

$$\boxed{\;v_{out}(t) = -\frac{1}{RC}\int_0^{t} v_{in}(\tau)\,d\tau \;+\; v_{out}(0)\;}$$

*In words: the output is the running area under the input, scaled by $1/RC$, flipped in sign, starting from whatever charge was already on the capacitor.* That last term is not decoration — $v_{out}(0)$ is a real initial condition set by the capacitor's stored charge, which is why practical integrators have a **reset switch** (a MOSFET or relay across $C$) to dump it before a run.

The product $RC$ has units of seconds and is called the **integration time constant**. A constant input $V$ produces a straight ramp of slope $-V/RC$ volts per second.

### The $s$-domain view

Replace the capacitor by its impedance $Z_C = 1/(sC)$ (see [`signals-systems` 2.4](../../signals-systems/lessons/02-04-laplace-transform-roc.md)) and reuse the inverting-amp result $H = -Z_f/Z_{in}$:

$$H(s) = -\frac{Z_C}{R} = -\frac{1}{sRC}.$$

*In words: dividing by $s$ is integration, and this circuit divides by $s$.* This is a **pole at the origin** — an integrator in the [`control-systems` sense](../../control-systems/lessons/03-03-frequency-response-bode-plots.md), i.e. a Type-1 element. On a Bode plot (machinery in [`control-systems` 3.3](../../control-systems/lessons/03-03-frequency-response-bode-plots.md), pole/zero reading in [`signals-systems` 2.5](../../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md)):

- **Magnitude** $|H(j\omega)| = 1/(\omega RC)$ — a straight line falling at $-20$ dB/decade forever.
- It crosses unity ($0$ dB) at the **unity-gain frequency**

$$f_0 = \frac{1}{2\pi RC}.$$

- **Phase:** the $1/s$ contributes a constant $-90^\circ$ at every frequency; the inverting sign adds another $180^\circ$. Net, this circuit's output *leads* by $90^\circ$. (Check it: $v_{in} = \sin\omega t$ integrates to $\tfrac{1}{\omega RC}\cos\omega t$, which is $\sin(\omega t + 90^\circ)$.)

Note what "$-20$ dB/decade forever" means going the other way: as $\omega \to 0$, the gain $\to \infty$. **The DC gain is infinite.** Hold that thought.

### The problem: real integrators walk into a rail

A real op-amp is not ideal in two ways that matter here.

1. **Input offset voltage** $V_{os}$ — a few millivolts of built-in imbalance, as if a small battery were in series with one input. The integrator cannot tell it from signal, so it integrates it.
2. **Input bias current** $I_B$ — tens of nanoamps that the input transistors genuinely need. That current has nowhere to go but into $C$.

Each produces a relentless one-way drift:

$$\left.\frac{dv_{out}}{dt}\right|_{\text{offset}} = \frac{V_{os}}{RC}, \qquad \left.\frac{dv_{out}}{dt}\right|_{\text{bias}} = \frac{I_B}{C}.$$

Put numbers on it. With $R = 16\ \text{k}\Omega$, $C = 10\ \text{nF}$ ($RC = 160\ \mu\text{s}$) and a modest $V_{os} = 2\ \text{mV}$, the drift is $2\ \text{mV}/160\ \mu\text{s} = 12.5$ V/s. On a $\pm 12$ V supply the output slams into a rail in **under a second**, with the input tied to ground. An $I_B = 80\ \text{nA}$ into that 10 nF adds another 8 V/s. The ideal integrator, built exactly as drawn, does not work.

### The fix: a DC-limiting resistor $R_f$ across $C$

Put a large resistor $R_f$ in parallel with the capacitor. Now the feedback impedance is

$$Z_f = R_f \,\Big\|\, \frac{1}{sC} = \frac{R_f}{1 + sR_fC}, \qquad H(s) = -\frac{Z_f}{R} = -\frac{R_f/R}{1 + sR_fC}.$$

*In words: the pole slides off the origin to $s = -1/(R_fC)$, and the DC gain becomes a finite $-R_f/R$.* Everything changes at the corner frequency

$$f_c = \frac{1}{2\pi R_f C}.$$

- **Below $f_c$:** $|sR_fC| \ll 1$, so $H \approx -R_f/R$. It is just an ordinary inverting amplifier — it does **not** integrate down here.
- **Above $f_c$:** $|sR_fC| \gg 1$, so $H \approx -R_f/(R\cdot sR_fC) = -1/(sRC)$ — the ideal integrator is back, unchanged.

And the drift is now bounded: at DC the circuit presents $V_{os}$ with a non-inverting gain of $1 + R_f/R$, so the output offset parks at $V_{os}(1 + R_f/R)$ — 22 mV in the example above instead of a rail.

**Design rule.** Choose $R_f$ so that $f_c$ sits *well below* your lowest signal frequency — a decade or more. The common shorthand is $R_f \ge 10R$, which puts $f_c$ at least a decade below $f_0$ and caps the DC gain at 20 dB. You are buying stability with a low-frequency dead zone, and that is always the trade.

### The differentiator

Swap them: capacitor $C$ from $v_{in}$ to the inverting node, resistor $R$ in feedback. Same two rules. The node is at 0 V, so the capacitor sees the full input voltage and

$$i(t) = C\,\frac{dv_{in}}{dt}, \qquad v_{out} = 0 - iR = -RC\,\frac{dv_{in}}{dt},$$

$$\boxed{\;v_{out}(t) = -RC\,\frac{dv_{in}}{dt}, \qquad H(s) = -sRC\;}$$

*In words: multiplying by $s$ is differentiation, and this circuit multiplies by $s$.* A **zero at the origin**: magnitude $\omega RC$ rising at $+20$ dB/decade, crossing unity at $1/(2\pi RC)$, with differentiation contributing $+90^\circ$ and the inversion $180^\circ$ — net, the output *lags* by $90^\circ$.

### The differentiator's problem is worse

Gain that rises without bound with frequency is a machine for amplifying whatever is highest-frequency in your signal, and that is almost always **noise**. A 1 mV hash at 1 MHz gets multiplied by $10^4$ more than a 1 mV signal at 100 Hz. Worse, the op-amp's own open-loop phase lag ([4.2](04-02-frequency-response-gain-bandwidth.md)) adds to the differentiator's $90^\circ$; the loop runs out of phase margin and the circuit rings or oscillates outright. It is a genuinely unstable topology, not just a noisy one.

**The fix:** a small resistor $R_1$ in series with the input capacitor. Then $Z_{in} = R_1 + 1/(sC)$ and

$$H(s) = -\frac{R}{R_1 + 1/(sC)} = -\frac{sRC}{1 + sR_1C}.$$

The gain rises as $sRC$ until $f_1 = 1/(2\pi R_1 C)$, then flattens at $-R/R_1$. Choose $f_1$ a bit above your highest real signal frequency. (A small capacitor across $R$ is often added too, rolling the gain back *down* above its own corner.)

**And the real engineering judgment:** practicing designers **avoid differentiators wherever possible.** If a control loop needs a derivative, you restructure it so the integration happens elsewhere in the chain — filter first, or feed back a signal you can integrate rather than one you must differentiate. Integration is smoothing and forgiving; differentiation is sharpening and unforgiving. When you see a differentiator in a real schematic, look for the noise-limiting network around it — it will be there.

### Waveform intuition (this is what you'll actually remember)

| Circuit | Input | Output |
|---|---|---|
| Integrator | square wave | **triangle** wave (constant input → constant slope) |
| Integrator | triangle wave | parabolic scallops (constant slope → quadratic) |
| Differentiator | triangle wave | **square** wave (constant slope → constant level) |
| Differentiator | square wave | **spikes** at each edge (a step has infinite slope) |

And one reframing that pays off in [3.4](03-04-active-filters.md): falling at $-20$ dB/decade means the **integrator is a low-pass filter**; rising at $+20$ dB/decade means the **differentiator is a high-pass filter**. The DC-limited integrator *is* a first-order active low-pass with DC gain $-R_f/R$ and cutoff $f_c$. Same circuit, different name, depending on whether you're thinking in time or in frequency.

## Picture

![Panel a: a practical op-amp integrator schematic with input resistor R, feedback capacitor C, and a DC-limiting resistor R sub f drawn in coral across the capacitor. Panels b through d: waveform pairs, square in and triangle out for the integrator, triangle in and square out for the differentiator, square in and edge spikes out for the differentiator.](assets/03-03-fig1.svg)

## Worked examples

**Example 1 — square wave into an integrator.** Take $R = 16\ \text{k}\Omega$, $C = 10\ \text{nF}$, so $RC = 1.6\times10^{-4}\ \text{s} = 160\ \mu\text{s}$. Drive it with a square wave that alternates between $+1$ V and $-1$ V at 2 kHz.

While the input sits at $+1$ V, the output ramps at a constant rate:

$$\frac{dv_{out}}{dt} = -\frac{v_{in}}{RC} = -\frac{1\ \text{V}}{160\times10^{-6}\ \text{s}} = -6250\ \text{V/s} = -6.25\ \text{V/ms}.$$

The half-period is $T/2 = 1/(2\cdot 2000) = 250\ \mu\text{s}$, so the output falls by

$$\Delta v = 6250 \times 250\times10^{-6} = 1.5625\ \text{V}$$

before the input flips and it ramps back up at $+6250$ V/s. Steady state is a triangle wave of **1.56 V peak-to-peak**, i.e. $\pm 0.78$ V, centered on ground.

*Check (independent route).* Compare the fundamental components. A $\pm 1$ V square wave has fundamental amplitude $4/\pi = 1.273$ V at 2 kHz. The integrator's gain there is $f_0/f = 994.7/2000 = 0.4974$ (using $f_0 = 1/(2\pi \cdot 160\,\mu\text{s}) = 994.7$ Hz), giving an output fundamental of $1.273 \times 0.4974 = 0.633$ V. A triangle of amplitude $A = 0.781$ V has fundamental amplitude $8A/\pi^2 = 8(0.781)/9.870 = 0.633$ V. Identical. ✓

**Example 2 — design a practical integrator.** *Spec: unity-gain frequency 1 kHz; must not drift; signals live at 2 kHz and above.*

**(i) Size $RC$.** From $f_0 = 1/(2\pi RC)$,

$$RC = \frac{1}{2\pi (1000)} = 1.592\times10^{-4}\ \text{s}.$$

**(ii) Split it into real parts.** Pick $C$ first — capacitor values are coarser and leakier than resistor values, and you want $C$ big enough that the op-amp's stray input capacitance (a few pF) is irrelevant, small enough that $R$ doesn't get tiny. Take $C = 10\ \text{nF}$:

$$R = \frac{1.592\times10^{-4}}{10\times10^{-9}} = 15{,}915\ \Omega \;\to\; \text{use } 16\ \text{k}\Omega \text{ (standard value)}.$$

With those actual parts, $RC = 160\ \mu\text{s}$ and $f_0 = 1/(2\pi \cdot 1.6\times10^{-4}) = 994.7$ Hz — 0.5 percent low, well inside component tolerance.

**(iii) Add the DC limiter.** Take $R_f = 10R = 160\ \text{k}\Omega$ (also standard). Then

$$\text{DC gain} = -\frac{R_f}{R} = -10 \;(20\ \text{dB}), \qquad f_c = \frac{1}{2\pi R_f C} = \frac{1}{2\pi (1.6\times10^{5})(10^{-8})} = 99.5\ \text{Hz}.$$

**(iv) Verify the corners line up.** $f_c = 99.5$ Hz sits a full decade below $f_0 = 995$ Hz and **20 times** below the lowest signal at 2 kHz — comfortably inside the design rule. Confirm the integration is still accurate up there: at 2 kHz, $\omega R_fC = 2\pi(2000)(1.6\times10^{-3}) = 20.1$, so

$$|H| = \frac{10}{\sqrt{1 + 20.1^2}} = \frac{10}{20.13} = 0.4967$$

versus the ideal $0.4974$ — an error of about 0.1 percent, and the phase is $92.8^\circ$ instead of $90^\circ$. Good enough. ✓

**(v) Sanity-check the output swing.** Feeding it the Example 1 square wave gives a 1.56 V peak-to-peak triangle — nowhere near a $\pm 12$ V rail, so no clipping and no slew-rate trouble. ✓

**Final design:** $R = 16\ \text{k}\Omega$, $C = 10\ \text{nF}$, $R_f = 160\ \text{k}\Omega$.

## Watch out

- **You might think the infinite DC gain is a harmless idealization.** It is the single reason a bare integrator fails on the bench. With the input grounded and no $R_f$, a few millivolts of offset ramps the output into a rail in well under a second — before you've applied any signal at all. Never build the textbook integrator; always add $R_f$ (or a reset switch, or both).
- **You might think the DC-limited integrator still integrates everything.** It does not. Below $f_c$ it is a plain inverting amplifier of gain $-R_f/R$. If your signal has content down there, that content is amplified, not integrated. Push $f_c$ down (bigger $R_f$) and you get better low-frequency integration but worse drift rejection — that is the whole trade, and there is no way around it.
- **You might mix up the two rescue resistors.** $R_f$ goes *across the feedback capacitor* in an integrator and stops the gain rising at low frequency. $R_1$ goes *in series with the input capacitor* in a differentiator and stops the gain rising at high frequency. Both are "the small extra resistor," and they sit in opposite places for opposite reasons.
- **You might assume a differentiator is just an integrator run backwards, so equally usable.** It isn't. Integration averages noise away; differentiation multiplies it. Differentiators also eat phase margin and ring. Restructure the signal chain to avoid one if you can.

## One-liner

> Put the capacitor in the feedback path and the op-amp integrates ($H = -1/sRC$); put it at the input and it differentiates ($H = -sRC$) — and neither works until you add the one resistor that stops the gain running away, $R_f$ across $C$ for the integrator, $R_1$ in series with $C$ for the differentiator.

## Problems

**P1 (🟢)** An op-amp integrator uses $R = 10\ \text{k}\Omega$ and $C = 10\ \text{nF}$, supplies $\pm 15$ V. Its input is a square wave alternating between $+0.5$ V and $-0.5$ V at 5 kHz. (a) What is the output's ramp rate while the input is at $+0.5$ V, and in which direction does it ramp? (b) What is the peak-to-peak amplitude of the output triangle wave? (c) The signal generator's frequency is turned down to 500 Hz. What happens to the output amplitude, and what does that tell you about the circuit as a filter?

**P2 (🟡)** Design a differentiator. (a) It must output $-1.0$ V when the input is ramping at $+1$ V/ms. Using $C = 10\ \text{nF}$, find the feedback resistor $R$, and state the circuit's unity-gain frequency. (b) To tame noise, add a series resistor $R_1$ so the gain stops rising above 20 kHz — find $R_1$ and pick the nearest standard value. (c) With that standard value, what is the circuit's gain at 1 MHz?

**P3 (🔴)** An op-amp with input offset voltage $V_{os} = 2\ \text{mV}$ is wired as an integrator with $R = 16\ \text{k}\Omega$ and $C = 10\ \text{nF}$, running on $\pm 12$ V rails, input grounded. (a) With no $R_f$, how fast does the output drift, and how long until it hits a rail? (b) Add $R_f = 160\ \text{k}\Omega$. What DC output offset does $V_{os}$ now produce? (c) In one sentence, why does the offset see a gain of $1 + R_f/R$ rather than $-R_f/R$?

<details>
<summary>Solutions</summary>

**P1** Time constant: $RC = (10\times10^{3})(10\times10^{-9}) = 1.0\times10^{-4}\ \text{s} = 100\ \mu\text{s}$.

**(a)** From $dv_{out}/dt = -v_{in}/RC$:

$$\frac{dv_{out}}{dt} = -\frac{0.5\ \text{V}}{100\times10^{-6}\ \text{s}} = -5000\ \text{V/s} = -5\ \text{V/ms}.$$

It ramps **downward** — the circuit inverts, so a positive input drives the output negative.

**(b)** At 5 kHz the period is $T = 200\ \mu\text{s}$, so each half-cycle lasts $100\ \mu\text{s}$:

$$\Delta v = 5000\ \text{V/s} \times 100\times10^{-6}\ \text{s} = 0.5\ \text{V peak-to-peak}$$

(a triangle of $\pm 0.25$ V about ground). Well within the $\pm 15$ V rails.

*Check.* Fundamental route: the square wave's fundamental amplitude is $4(0.5)/\pi = 0.6366$ V; the integrator's unity-gain frequency is $f_0 = 1/(2\pi \cdot 10^{-4}) = 1591.5$ Hz, so gain at 5 kHz is $1591.5/5000 = 0.3183$, giving $0.6366 \times 0.3183 = 0.2026$ V. A triangle of amplitude $A = 0.25$ V has fundamental $8A/\pi^2 = 0.2026$ V. ✓

**(c)** The half-period is now $1\ \text{ms}$, ten times longer, and the ramp rate is unchanged (it depends only on $v_{in}$ and $RC$), so the output grows tenfold:

$$\Delta v = 5000 \times 1\times10^{-3} = 5\ \text{V peak-to-peak}.$$

Ten times lower frequency gives ten times more output — gain $\propto 1/f$, exactly $-20$ dB/decade. **The integrator is a low-pass filter.** (Note this is the ideal circuit; a real one needs $R_f$, which would flatten the gain below $f_c$ and eventually stop this growth.)

**P2 (a)** The spec is $v_{out} = -RC\,dv_{in}/dt$ with $dv_{in}/dt = 1\ \text{V/ms} = 1000$ V/s and $v_{out} = -1.0$ V:

$$RC = \frac{1.0\ \text{V}}{1000\ \text{V/s}} = 1.0\times10^{-3}\ \text{s}.$$

With $C = 10\ \text{nF}$:

$$R = \frac{1.0\times10^{-3}}{10\times10^{-9}} = 1.0\times10^{5} = 100\ \text{k}\Omega \quad\text{(standard value).}$$

Unity-gain frequency:

$$f = \frac{1}{2\pi RC} = \frac{1}{2\pi(10^{-3})} = 159.2\ \text{Hz}.$$

**(b)** The gain stops rising at $f_1 = 1/(2\pi R_1 C)$, so for $f_1 = 20$ kHz:

$$R_1 = \frac{1}{2\pi (20\times10^{3})(10\times10^{-9})} = \frac{1}{1.2566\times10^{-3}} = 795.8\ \Omega \;\to\; \text{use } 820\ \Omega.$$

**(c)** Above $f_1$ the gain plateaus at $R/R_1$. With the standard 820 Ω part:

$$\left|\frac{v_{out}}{v_{in}}\right|_{\text{HF}} = \frac{100{,}000}{820} = 122.$$

At 1 MHz — far above the corner — the gain is essentially that plateau, **about 122**, instead of the $2\pi(10^6)(10^{-3}) = 6283$ an unlimited differentiator would deliver. That is a 50-fold reduction in high-frequency noise gain, which is the whole point of $R_1$.

*Check.* With $R_1 = 820\ \Omega$ the actual corner is $1/(2\pi \cdot 820 \cdot 10^{-8}) = 19.41$ kHz, and the plateau should equal (corner)/(unity-gain frequency) $= 19410/159.2 = 122.0$, matching $R/R_1 = 122.0$. ✓

**P3 (a)** $RC = (16\times10^{3})(10\times10^{-9}) = 1.6\times10^{-4}\ \text{s}$. The offset acts like a DC input of 2 mV, so

$$\left|\frac{dv_{out}}{dt}\right| = \frac{V_{os}}{RC} = \frac{2\times10^{-3}}{1.6\times10^{-4}} = 12.5\ \text{V/s}.$$

Starting from 0 V, reaching a 12 V rail takes

$$t = \frac{12\ \text{V}}{12.5\ \text{V/s}} = 0.96\ \text{s} \approx 1\ \text{second}.$$

The circuit is useless with the input grounded, let alone with signal on it.

**(b)** With $R_f$ in place, the DC gain seen by the offset is $1 + R_f/R$:

$$v_{out}(\text{DC}) = V_{os}\left(1 + \frac{R_f}{R}\right) = 2\ \text{mV} \times \left(1 + \frac{160}{16}\right) = 2\ \text{mV} \times 11 = 22\ \text{mV}.$$

A bounded 22 mV instead of a rail — a 545-fold improvement, and it stops moving.

**(c)** Because $V_{os}$ sits in series with the op-amp's *input terminals*, not in series with the signal source: it is a voltage applied at the non-inverting node, and the $R$–$R_f$ network is its feedback divider. That is the **non-inverting** configuration, whose gain is $1 + R_f/R$. The signal, entering through $R$ to the virtual ground, sees the inverting gain $-R_f/R$. Same two resistors, two different gains, depending on where the source is injected.

*Check.* Consistency: at DC the ideal ($R_f \to \infty$) limit of $1 + R_f/R$ is infinite, which is exactly the "infinite DC gain" that caused part (a). ✓

</details>

## Flashback


**From Lesson 3.1 (The ideal op-amp):** An inverting amplifier is built with $R_1 = 4.7\ \text{k}\Omega$ and $R_f = 47\ \text{k}\Omega$. The signal source driving it is not ideal — it has $1\ \text{k}\Omega$ of its own output resistance. (a) What gain would you quote from the resistor ratio alone? (b) What gain does the source actually see, measured from its open-circuit voltage? (c) Which topology would have avoided the discrepancy, and why?

<details>
<summary>Solution</summary>

**(a)** The textbook formula gives

$$A_v = -\frac{R_f}{R_1} = -\frac{47}{4.7} = -10.$$

**(b)** Here is the trap. The inverting amplifier's input node is a **virtual ground**, so the current the source must supply is set by whatever resistance sits between the source and that node — and the source's own $1\ \text{k}\Omega$ is in series with $R_1$. The signal current is

$$i = \frac{v_s}{R_s + R_1} = \frac{v_s}{1\ \text{k}\Omega + 4.7\ \text{k}\Omega} = \frac{v_s}{5.7\ \text{k}\Omega},$$

and all of it flows on through $R_f$, so

$$A_v = -\frac{R_f}{R_s + R_1} = -\frac{47}{5.7} = -8.25.$$

The real gain is **17.5 percent** below the quoted figure. Worse, it depends on the *source*, so swapping sensors changes your amplifier's gain.

**(c)** The **non-inverting** amplifier. Its input goes straight to the op-amp's $+$ terminal, which draws no current, so no current flows through $R_s$ and no voltage is dropped across it — the gain $1 + R_f/R_1$ is untouched by the source impedance. (Setting $R_f/R_1 = 9$ gives a gain of $+10$.) Alternatively, keep the inverting stage and put a unity-gain buffer in front of it.

*Check.* As $R_s \to 0$ the answer returns to $-10$, as it must. And the fractional error $R_s/(R_s+R_1) = 1/5.7 = 17.5$ percent matches the gain shortfall exactly.

*(Tie-in to today: the integrator is the inverting topology with $R_f$ swapped for a capacitor, so it inherits this same input-impedance weakness — $Z_{in}$ is just $R$, and source resistance adds to it, shifting the integration constant.)*

</details>

## Connections

- **Backward:** everything here is the virtual ground of [3.1](03-01-ideal-op-amp-inverting-noninverting.md) plus $i_C = C\,dv/dt$ from [`circuits` 3.1](../../circuits/lessons/03-01-capacitors-and-inductors.md). Give the integrator several input resistors and it becomes the *summing integrator* of [3.2](03-02-summing-difference-instrumentation.md) — one op-amp that adds several signals and integrates the total. That block, wired in a loop with itself, is precisely how an analog computer solves $\ddot y + a\dot y + by = f(t)$: feed $\ddot y$ into two cascaded integrators to get $\dot y$ and $y$, then sum them back to form $\ddot y$.
- **Forward:** [3.4 Active filters](03-04-active-filters.md) is this lesson relabeled — the DC-limited integrator *is* a first-order active low-pass, and the tamed differentiator *is* a first-order active high-pass. [4.2](04-02-frequency-response-gain-bandwidth.md) explains why a real integrator stops behaving above a few hundred kHz: the op-amp's own finite gain–bandwidth product eventually beats the feedback network.
- **Sideways (control):** the integrator and differentiator are the I and D terms of [`control-systems` 4.1 PID control](../../control-systems/lessons/04-01-pid-control.md), built in hardware. The reason real PID loops use a *filtered* derivative — $sT_d/(1 + sT_d/N)$ rather than $sT_d$ — is exactly the $R_1$ fix above, wearing a control engineer's notation. And the "pole at the origin" that makes this circuit an integrator is the same pole that makes a control loop Type 1, killing steady-state step error ([`control-systems` 2.3](../../control-systems/lessons/02-03-steady-state-error-system-type.md)).
