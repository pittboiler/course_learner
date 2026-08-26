# Electronics & Semiconductors · Lesson 2.1: The BJT — how it works

> ⏱ ~15 min · Module 2: Transistors — BJT & MOSFET · Builds on: [1.1 Semiconductors, carriers & doping](01-01-semiconductors-carriers-doping.md), [1.2 The pn-junction diode](01-02-pn-junction-diode-models.md), [`circuits` 1.3 KCL & KVL](../../circuits/lessons/01-03-kirchhoffs-laws-kcl-kvl.md) · Unlocks: [2.2 BJT DC biasing](02-02-bjt-dc-biasing.md), [2.3 Small-signal amplifiers](02-03-bjt-small-signal-amplifiers.md)

## Why this matters

Everything in Module 1 was *passive about power*. A resistor divides, a diode gates, a capacitor stores — but none of them ever hands you back more signal than you put in. The energy in the output came from the input.

The bipolar junction transistor breaks that. Push 10 microamps into one terminal and 1 milliamp appears at another — a hundred times as much current, drawn not from your signal but from the power supply. Your tiny signal is only steering a valve. That is **amplification**, and it is the entire reason "electronics" exists as a field distinct from circuit theory. Radio, computers, every sensor front end, every audio chain: all of it is this one trick, repeated.

This lesson is about *why the trick works* and how to tell which of three states a transistor is sitting in. Get that, and [2.2](02-02-bjt-dc-biasing.md) (parking it in the useful state) and [2.3](02-03-bjt-small-signal-amplifiers.md) (extracting gain from it) are bookkeeping.

## The idea

An **npn** BJT is a sandwich: a heavily doped **n**-type **emitter**, a very thin lightly doped **p**-type **base**, and an **n**-type **collector**. Two pn junctions, back to back, sharing the base.

Here is the trap everyone falls into. "Two diodes back to back" is a fine mnemonic for *testing* a transistor with a multimeter and a **useless** model of what it does. Solder two discrete diodes cathode-to-cathode and you get a device that blocks in both directions and amplifies nothing. Ever. The schematic is identical; the behavior is not.

What is missing from the two-diode version is **geometry**. In a real BJT the base is *thin* — sub-micron — and *lightly doped*. Now run the experiment:

1. Forward-bias the base–emitter junction. Like any forward-biased diode ([1.2](01-02-pn-junction-diode-models.md)), it injects carriers across: the heavily doped emitter fires a flood of electrons into the base. Because the emitter doping is far heavier than the base doping, this traffic is almost entirely one-way — electrons into the base, hardly any holes back out into the emitter.
2. Those electrons are now minority carriers in a p-type region, and they should recombine with holes and vanish as base current. **But they don't get the chance.** The base is so thin, and so short of holes to recombine with, that the overwhelming majority of them diffuse clean across it before anything happens to them — typically 99 out of 100.
3. Reverse-bias the base–collector junction. A reverse-biased junction is a brick wall to *majority* carriers, but electrons arriving in the base are *minority* carriers there, and the B–C depletion field points exactly the right way to sweep them into the collector. They fall through and become collector current.

So: the base–emitter junction sets how many electrons get launched, and geometry decides that ~99 percent of them land in the collector instead of the base. **That ratio is transistor action.** Two separate diodes have a base region kilometres wide by comparison; nothing survives the trip.

The consequence is the whole game: the *small* leftover — the 1 percent that did recombine — is the base current you supply, and the *large* stream that made it across is the collector current. Control the small one, and the large one follows, multiplied.

## The formal version

### Currents

The transistor is one node with three wires, so [KCL](../../circuits/lessons/01-03-kirchhoffs-laws-kcl-kvl.md) is non-negotiable:

$$\boxed{\,I_E = I_B + I_C\,}$$

*In words: whatever goes in the base and collector comes out the emitter.* This is always true — every region, every device, no exceptions. ($I_B$, $I_C$ into the device; $I_E$ out. All in amperes; we will mostly work in mA and $\mu$A.)

The interesting part is the *split*. Define the **common-emitter current gain**

$$\beta = \frac{I_C}{I_B}, \qquad \text{typically } 50 \text{ to } 300,$$

and the **common-base current gain**

$$\alpha = \frac{I_C}{I_E} = \frac{\beta}{\beta+1}, \qquad \text{typically } 0.98 \text{ to } 0.997.$$

*In words: $\beta$ says how many electrons make it across for each one that recombines; $\alpha$ says what fraction of the launched electrons make it across.* The conversion runs both ways:

$$\alpha = \frac{\beta}{\beta+1}, \qquad \beta = \frac{\alpha}{1-\alpha}.$$

Derivation is one line: divide $I_E = I_B + I_C$ by $I_C$ to get $1/\alpha = 1/\beta + 1$. Check it numerically with $\beta = 100$:

$$\alpha = \frac{100}{101} = 0.990, \qquad \text{and back: } \beta = \frac{0.990}{1-0.990} \approx 100. \ \checkmark$$

That $\alpha = 0.990$ is literally the "99 out of 100 electrons make it" from the previous section. And notice how brutally sensitive the inverse map is: $\alpha = 0.99 \Rightarrow \beta = 99$, but $\alpha = 0.995 \Rightarrow \beta = 199$. A half-percent change in base width doubles $\beta$.

> **Flag this now.** $\beta$ is *notoriously* unreliable. Two transistors from the same reel can differ 3:1. Datasheets quote a min/typ/max, not a value. It drifts up roughly 0.5 to 1 percent per degree C of heating. **Never design anything whose behavior depends on $\beta$** — that single sentence is why [2.2 BJT DC biasing](02-02-bjt-dc-biasing.md) exists as a whole lesson. $\alpha$, being pinned near 1, is far more stable, which is why some analyses prefer it.

### The four regions

Each of the two junctions is independently either forward- or reverse-biased. Two junctions, two states each — so there are exactly four regions, and you can *derive* the list instead of memorizing it:

| | **B–C reverse** | **B–C forward** |
|---|---|---|
| **B–E reverse** | **Cutoff** — off, $I_C \approx 0$ | **Reverse-active** — inverted, weak |
| **B–E forward** | **Active** — the amplifier | **Saturation** — fully-on switch |

**Cutoff.** Both junctions reverse-biased (in practice: $V_{BE}$ below about 0.5 V). Nothing is injected, so nothing is collected. $I_C \approx 0$, $I_B \approx 0$, and the device looks like an open switch between collector and emitter.

**Active.** B–E forward, B–C reverse. This is the region the previous section described, and the only one where the device amplifies:

$$I_C = \beta I_B, \qquad I_E = (\beta+1) I_B, \qquad V_{BE} \approx 0.7\ \text{V}.$$

*In words: the collector is a current source whose value is $\beta$ times the base current, and it doesn't care what $V_{CE}$ is.* That last clause is the strange and useful part — over a wide range of collector voltage, $I_C$ barely moves.

Where does $V_{BE} \approx 0.7$ V come from? Exactly where the diode's 0.7 V came from in [1.2](01-02-pn-junction-diode-models.md) — it *is* the same forward-biased junction, with the same exponential law:

$$I_C = I_S\,e^{V_{BE}/V_T},$$

with $I_S$ the saturation current (of order $10^{-15}$ A) and $V_T = kT/q \approx 25\ \text{mV}$ the thermal voltage at room temperature. *In words: collector current climbs exponentially with base–emitter voltage.* Because the exponential is so steep — a factor of 10 in $I_C$ per $V_T \ln 10 \approx 60\ \text{mV}$ — $V_{BE}$ is squeezed into a narrow band no matter how the current varies, which is why "assume 0.7 V" is as safe a rule here as it was for the diode.

**Saturation.** Both junctions forward-biased. You are shoving in more base current than the collector circuit can absorb; the collector voltage collapses until the B–C junction goes forward too, and the collector stops being able to sweep up everything on offer. Then

$$V_{CE} \approx V_{CE,\text{sat}} \approx 0.2\ \text{V}, \qquad I_C < \beta I_B .$$

*In words: the transistor is a closed switch with a small residual voltage across it.* The useful diagnostic is the **forced beta** $\beta_{\text{forced}} = I_C/I_B$, which in saturation is *less* than the device's real $\beta$. Note $I_C = \beta I_B$ is **false** in saturation — that equation belongs to the active region only.

**Reverse-active.** B–E reverse, B–C forward: the device run backwards. It works, badly — the "emitter" is now the lightly doped collector, so gain is typically under 5. Essentially never used deliberately.

> **The naming collision, and it bites everyone.** For a BJT, *saturation* is the fully-ON switch region and the amplifier region is called *active*. For a MOSFET ([2.4](02-04-mosfet-how-it-works.md)), *saturation* is the **amplifier** region, and the fully-on switch region is called *triode*. Same word, opposite jobs. When someone says "keep it in saturation," the first question is which device they're holding.

### Output characteristics

Plot $I_C$ against $V_{CE}$ for a family of fixed $I_B$ values and the whole taxonomy shows up as geography — panel (b) of the figure:

- **Near the origin** ($V_{CE} < 0.2$ V or so) the curves shoot up almost vertically. That is **saturation**: the collector can't hold off any more current, and the device behaves like a small resistor.
- **To the right**, each curve flattens into a near-horizontal line at $I_C = \beta I_B$. That is the **active** region, and "horizontal" is the visual statement of *current source*: change $V_{CE}$ by 5 volts and $I_C$ barely notices.
- **Along the bottom**, $I_B = 0$ gives $I_C \approx 0$: **cutoff**.

The active-region lines are not *perfectly* flat — they tilt gently upward, because raising $V_{CE}$ widens the B–C depletion region, which narrows the effective base, which (see how sensitive $\beta$ was to base width) raises $I_C$. This is the **Early effect**; extrapolate the lines leftward and they all meet at $V_{CE} = -V_A$, the **Early voltage**, typically 50 to 150 V. That finite slope becomes a finite output resistance $r_o = V_A / I_C$ in the small-signal model of [2.3](02-03-bjt-small-signal-amplifiers.md), where it sets the ceiling on how much gain a stage can possibly deliver.

### Switch or amplifier — one device, two mindsets

| | Switch (digital) | Amplifier (analog) |
|---|---|---|
| Regions used | cutoff ↔ saturation | active only |
| Signal is | either rail, never between | a small wiggle about a fixed point |
| Design goal | get through the middle fast | never *reach* the middle |
| Wants | overdrive the base hard | a carefully held Q-point |
| Power | tiny (one end is $I \approx 0$, other is $V \approx 0$) | continuous — it dissipates always |
| Where next | [4.3 CMOS gates](04-03-cmos-inverter-gates.md) | [2.2](02-02-bjt-dc-biasing.md), [2.3](02-03-bjt-small-signal-amplifiers.md) |

They are genuinely different design cultures using the same silicon. A digital designer *hates* the active region — it's the crossing you sprint through, where power is burned and noise margin is zero. An analog designer lives there and considers saturation a failure mode (it's what clips your waveform).

## Picture

![Panel a shows an npn sandwich of heavily doped n emitter, thin lightly doped p base, and n collector, with electron flow passing through the base to the collector and a small recombination current leaving as base current. Panel b shows collector current versus collector-emitter voltage for four base-current values, with the saturation, active, and cutoff regions labeled.](assets/02-01-fig1.svg)

## Worked examples

The method for both is the same, and it is the method you should internalize:

> **Assume active. Compute. Check $V_{CE} > V_{CE,\text{sat}}$. If the check fails, the assumption was wrong — redo as saturation.**

You cannot tell by looking, because which region a transistor lands in depends on the *whole circuit*, not the device. So you guess, then verify. Same circuit both times: $V_{CC} = 10\ \text{V}$, collector resistor $R_C = 2.2\ \text{k}\Omega$, base driven from a $V_{BB} = 5\ \text{V}$ source through $R_B$, emitter grounded, $\beta = 100$, $V_{BE} = 0.7\ \text{V}$.

**Example 1 — the assumption holds ($R_B = 430\ \text{k}\Omega$).**

Base loop (KVL): $V_{BB} = I_B R_B + V_{BE}$, so

$$I_B = \frac{5 - 0.7}{430\ \text{k}\Omega} = \frac{4.3}{430{,}000} = 10\ \mu\text{A}.$$

Assume active, so $I_C = \beta I_B = 100 \times 10\ \mu\text{A} = 1.0\ \text{mA}$. Collector loop:

$$V_{CE} = V_{CC} - I_C R_C = 10 - (1.0\ \text{mA})(2.2\ \text{k}\Omega) = 10 - 2.2 = 7.8\ \text{V}.$$

**Check:** $7.8\ \text{V} > 0.2\ \text{V}$, comfortably. Assumption confirmed — **active**. Equivalent check on the junction itself: $V_{CB} = V_{CE} - V_{BE} = 7.8 - 0.7 = 7.1\ \text{V} > 0$, so with the base at 0.7 V and the collector at 7.8 V the B–C junction is reverse-biased, exactly as the active region requires. And $I_E = I_B + I_C = 1.01\ \text{mA}$, which is $(\beta+1)I_B = 101 \times 10\ \mu\text{A}$. $\checkmark$

**Example 2 — the assumption fails ($R_B = 43\ \text{k}\Omega$).**

Ten times less base resistance, so ten times the base current:

$$I_B = \frac{4.3}{43{,}000} = 100\ \mu\text{A}.$$

Assume active: $I_C = 100 \times 100\ \mu\text{A} = 10\ \text{mA}$, and

$$V_{CE} = 10 - (10\ \text{mA})(2.2\ \text{k}\Omega) = 10 - 22 = -12\ \text{V}.$$

**Check: fails, and absurdly.** There is no negative voltage source in this circuit; $V_{CE}$ cannot go below ground, let alone to $-12$ V. The transistor is being asked for more collector current than the supply and $R_C$ can deliver. So it is **saturated**, and we redo the collector side with the saturation fact instead:

$$V_{CE} = V_{CE,\text{sat}} = 0.2\ \text{V} \;\Longrightarrow\; I_C = \frac{V_{CC} - 0.2}{R_C} = \frac{9.8}{2.2\ \text{k}\Omega} = 4.45\ \text{mA}.$$

The base current is unchanged at $100\ \mu$A (the base loop never involved the collector), so

$$\beta_{\text{forced}} = \frac{I_C}{I_B} = \frac{4.45\ \text{mA}}{100\ \mu\text{A}} = 44.5 .$$

**Check:** $\beta_{\text{forced}} = 44.5 < \beta = 100$. Consistent — in saturation the device delivers *less* gain than it is capable of, because the collector circuit is the bottleneck, not the transistor. $I_E = 4.45 + 0.1 = 4.55\ \text{mA}$. $\checkmark$

Note what the two examples share: identical transistor, identical supply, identical $R_C$. Only the base drive changed, and the device went from "current source at 1 mA" to "closed switch." Same silicon, two mindsets.

## Watch out

- **You might think two back-to-back diodes make a transistor.** They don't, and the reason isn't subtle chemistry — it's *distance*. Transistor action requires the injected carriers to cross the base before they recombine, which only happens because the base is sub-micron thin and starved of dopant. Wire up two discrete diodes and every injected carrier dies in transit; you get zero gain. The circuit symbol hides the one feature that matters.
- **You might write $I_C = \beta I_B$ everywhere.** It holds in the **active region only**. In saturation the collector circuit sets $I_C$ and the true ratio drops below $\beta$; in cutoff both are zero and the ratio is meaningless. Using it in saturation is the single most common source of impossible answers (negative $V_{CE}$, currents exceeding $V_{CC}/R_C$). Treat an impossible number as a *diagnosis*, not a mistake: it means "redo as saturation."
- **You might carry "saturation" over from one device to the other.** BJT saturation = fully on, switch closed, gain gone. MOSFET saturation ([2.4](02-04-mosfet-how-it-works.md)) = the flat-characteristic *amplifying* region, the analogue of BJT *active*. The words are exact opposites in spirit. Always name the device.
- **You might trust $\beta$.** It varies 3:1 between parts, drifts with temperature and with collector current, and is never a design parameter. If your answer changes a lot when $\beta$ changes a little, the *circuit* is wrong — which is precisely the problem [2.2](02-02-bjt-dc-biasing.md) solves.

## One-liner

> A thin, lightly doped base lets ~99 percent of the electrons the emitter injects shoot straight through to the collector, so the leftover 1 percent — the base current — commands a current $\beta$ times larger; forward-bias B–E only and you have an amplifier, forward-bias both junctions and you have a closed switch.

## Problems

**P1 (🟢)** A BJT is measured with $I_B = 25\ \mu$A and $I_C = 3.0$ mA. Find $\beta$, $\alpha$, and $I_E$. Then, if a second device from the same batch has $\alpha = 0.995$, find its $\beta$ and comment on the spread.

**P2 (🟡)** In the circuit $V_{CC} = 12$ V, $R_C = 1\ \text{k}\Omega$, and the base is driven from a 5 V source through $R_B = 100\ \text{k}\Omega$ with the emitter grounded. Take $V_{BE} = 0.7$ V, $V_{CE,\text{sat}} = 0.2$ V, $\beta = 150$. (a) Find the region and the operating point $(I_C, V_{CE})$, showing the check. (b) The manufacturer's datasheet says $\beta$ can be anywhere from 100 to 400. At what value of $\beta$ does this circuit fall into saturation?

**P3 (🔴)** Design a BJT switch. A relay coil measuring $200\ \Omega$ is to be driven from a 12 V rail by an npn transistor whose emitter is grounded and whose collector feeds the coil. The base is driven from a 3.3 V microcontroller pin through $R_B$. Use $V_{BE(\text{sat})} = 0.8$ V, $V_{CE,\text{sat}} = 0.2$ V, and a guaranteed minimum $\beta$ of 50. Design rule: force $\beta_{\text{forced}} \le 10$ so saturation is guaranteed with margin. Choose a standard $R_B$, verify, and state one practical consequence.

<details>
<summary>Solutions</summary>

**P1** Straight from the definitions:

$$\beta = \frac{I_C}{I_B} = \frac{3.0\ \text{mA}}{25\ \mu\text{A}} = \frac{3.0\times10^{-3}}{25\times10^{-6}} = 120.$$

$$\alpha = \frac{\beta}{\beta+1} = \frac{120}{121} = 0.9917.$$

$$I_E = I_B + I_C = 25\ \mu\text{A} + 3.0\ \text{mA} = 3.025\ \text{mA}.$$

*Check.* Independently, $\alpha = I_C/I_E = 3.0/3.025 = 0.9917$. $\checkmark$ Same number by two routes.

Second device: $\beta = \dfrac{\alpha}{1-\alpha} = \dfrac{0.995}{0.005} = 199$.

Comment: $\alpha$ moved from 0.9917 to 0.995 — a change of about a third of one percent — while $\beta$ went from 120 to 199, a 66 percent jump. Tiny fractional changes in "how many carriers survive the base" are enormous changes in $\beta$, which is exactly why $\beta$ scatters so badly across a production batch and why no design should lean on it.

**P2 (a)** Base loop first, since it is independent of the collector:

$$I_B = \frac{5 - 0.7}{100\ \text{k}\Omega} = \frac{4.3}{100{,}000} = 43\ \mu\text{A}.$$

Assume active:

$$I_C = \beta I_B = 150 \times 43\ \mu\text{A} = 6.45\ \text{mA}, \qquad V_{CE} = 12 - (6.45\ \text{mA})(1\ \text{k}\Omega) = 12 - 6.45 = 5.55\ \text{V}.$$

**Check:** $5.55\ \text{V} > 0.2\ \text{V}$, so the assumption stands — **active**, with $(I_C, V_{CE}) = (6.45\ \text{mA},\ 5.55\ \text{V})$. Junction check: $V_{CB} = 5.55 - 0.7 = 4.85\ \text{V} > 0$, B–C reverse-biased. $\checkmark$

**(b)** Saturation begins when the active-region prediction would drive $V_{CE}$ down to $V_{CE,\text{sat}}$, i.e. when

$$\beta I_B R_C = V_{CC} - V_{CE,\text{sat}} = 12 - 0.2 = 11.8\ \text{V}.$$

$$\beta_{\text{edge}} = \frac{11.8\ \text{V}}{(43\ \mu\text{A})(1\ \text{k}\Omega)} = \frac{11.8}{0.043} = 274.$$

So any device with $\beta > 274$ saturates in this circuit. Since the datasheet allows $\beta$ up to 400, **this circuit is not safe as an amplifier** — a perfectly in-spec part will slam it into saturation and clip. Fixing this is the entire subject of [2.2](02-02-bjt-dc-biasing.md).

*Check.* At $\beta = 274$: $I_C = 274 \times 43\ \mu\text{A} = 11.8\ \text{mA}$, giving $V_{CE} = 12 - 11.8 = 0.2\ \text{V}$. $\checkmark$ Exactly the edge.

**P3** Work backwards from the collector. In saturation the coil sees nearly the whole rail:

$$I_C = \frac{V_{CC} - V_{CE,\text{sat}}}{R_{\text{coil}}} = \frac{12 - 0.2}{200\ \Omega} = \frac{11.8}{200} = 59\ \text{mA}.$$

Apply the design rule $\beta_{\text{forced}} \le 10$:

$$I_B \ge \frac{I_C}{10} = \frac{59\ \text{mA}}{10} = 5.9\ \text{mA}.$$

Base loop from the 3.3 V pin:

$$R_B \le \frac{3.3 - V_{BE(\text{sat})}}{I_B} = \frac{3.3 - 0.8}{5.9\ \text{mA}} = \frac{2.5}{0.0059} = 424\ \Omega.$$

Choose the nearest standard value **below** that (smaller $R_B$ means more base drive, which is the safe direction): $R_B = 390\ \Omega$.

*Check.* $I_B = 2.5/390 = 6.41\ \text{mA}$, so $\beta_{\text{forced}} = 59/6.41 = 9.2 \le 10$. $\checkmark$ And since the real device has $\beta \ge 50 \gg 9.2$, it is driven deep into saturation across the whole part spread — the design does not depend on $\beta$ at all, only on the guarantee that $\beta$ exceeds 10.

Practical consequence: the microcontroller pin must source 6.4 mA. Many GPIOs are rated around 8 to 20 mA, so this is acceptable but not free — check the pin's spec, and if it is tighter, use a Darlington or a logic-level MOSFET ([2.4](02-04-mosfet-how-it-works.md)) instead. (Second consequence worth knowing: a relay coil is an inductor, so switching it off produces a large $L\,di/dt$ spike that will destroy the transistor. A flyback diode across the coil, using the one-way-valve behavior from [1.2](01-02-pn-junction-diode-models.md), clamps it.)

</details>

## Flashback

**From Lesson 1.3 (Rectifiers & power supplies):** A full-wave bridge rectifier is fed by a transformer secondary of 15 V peak at 60 Hz, followed by a $470\ \mu\text{F}$ smoothing capacitor and a $220\ \Omega$ load. Using the constant-drop model with 0.7 V per conducting diode (two in the path), estimate the peak DC output and the peak-to-peak ripple voltage.

<details>
<summary>Solution</summary>

Two diodes conduct in series on each half-cycle of a bridge, so the capacitor charges to

$$V_{\text{peak}} = 15 - 2(0.7) = 13.6\ \text{V}.$$

Load current at that peak:

$$I_L = \frac{13.6\ \text{V}}{220\ \Omega} = 61.8\ \text{mA}.$$

A full-wave rectifier refills the capacitor twice per input cycle, so the capacitor discharges for roughly half a period, $T/2 = 1/(2f) = 1/120 = 8.33\ \text{ms}$. Treating the load as a constant current over that interval, $\Delta V = I\,\Delta t / C$:

$$V_r = \frac{I_L}{2 f C} = \frac{0.0618}{2(60)(470\times10^{-6})} = \frac{0.0618}{0.0564} \approx 1.1\ \text{V peak-to-peak}.$$

So the rail sits at roughly $13.6 - 1.1/2 \approx 13.0$ V average with about 1.1 V of sawtooth on top — a ripple of about 8 percent of the DC value.

*Check.* The ripple is small compared to 13.6 V, which retroactively justifies the "constant load current" assumption used to derive the formula (if the ripple were large, $I_L$ would sag noticeably during the discharge). $\checkmark$ Halving $C$ to $235\ \mu$F would double the ripple to 2.2 V, and a half-wave rectifier would double it again to 4.4 V by doubling the discharge time — both the expected directions.

Why it's here: the smoothed rail you just computed is exactly what feeds $V_{CC}$ in this lesson's examples, and its ripple rides straight into the collector as an unwanted signal. Power supply quality is an amplifier specification.

</details>

## Connections

- **Backward:** the base–emitter junction is nothing more than the forward-biased diode of [1.2](01-02-pn-junction-diode-models.md) — same $I = I_S e^{V/V_T}$, same $V_T \approx 25$ mV, same 0.7 V rule of thumb — and the "electrons are minority carriers in the base" language is [1.1](01-01-semiconductors-carriers-doping.md)'s majority/minority bookkeeping doing real work. The three-wire KCL is [`circuits` 1.3](../../circuits/lessons/01-03-kirchhoffs-laws-kcl-kvl.md).
- **Forward:** [2.2 BJT DC biasing](02-02-bjt-dc-biasing.md) takes the $\beta$-variability warning seriously and builds a bias network whose Q-point barely depends on $\beta$; [2.3](02-03-bjt-small-signal-amplifiers.md) linearizes the exponential about that Q-point to get $g_m = I_C/V_T$ and turns the Early slope into $r_o = V_A/I_C$; [4.3](04-03-cmos-inverter-gates.md) takes the cutoff/saturation switch and builds logic from it.
- **Sideways:** the physics under "why does a thin base change everything" — carrier diffusion, recombination lifetime, junction depletion widths — is developed in [`condensed-matter` 4.5](../../condensed-matter/lessons/04-05-pn-junction.md) and [`condensed-matter` 4.4](../../condensed-matter/lessons/04-04-transport-mobility-hall.md), and the device-engineering view (how base width is actually controlled in fabrication) belongs to [semiconductor-devices](../../semiconductor-devices/syllabus.md).
