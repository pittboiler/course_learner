# Neuroscience · Lesson 1.2: The resting membrane potential

> ⏱ ~15 min · Module 1: The neuron & the action potential · Builds on: [1.1](01-01-neuron-as-a-device.md) · Unlocks: 1.3 (the action potential)

## Why this matters

[1.1](01-01-neuron-as-a-device.md) said a neuron sits near −70 mV and treated that as the baseline the whole machine is built on. This lesson computes it — and then says something about it that most treatments quietly skip.

**The resting potential is not an equilibrium.** It looks like one: nothing changes, the voltage is flat, the trace on the oscilloscope is a line. But a flat trace can mean two very different things, and the difference is the entire lesson. A membrane permeable to *one* ion reaches a true thermodynamic equilibrium — zero current, zero flux, zero free-energy dissipation, and it would hold that voltage forever in a dead cell. A real neuron is permeable to several, and it settles instead at a **steady state**: the individual ionic currents are large and non-zero and merely *cancel*. Gradients bleed away continuously; the Na⁺/K⁺ pump replaces them; the bill arrives every second for the rest of your life. **Stop the ATP and a neuron depolarizes in minutes** — which is exactly why the brain, at 2 percent of body mass, is the most metabolically expensive organ you own, and why stroke kills tissue so fast.

Everything downstream runs on the machinery built here: the **driving force** $V_m - E_{\text{ion}}$, which is what [1.4](01-04-hodgkin-huxley-model.md) actually integrates, and the reason "inhibitory" turns out to be a property of a transporter rather than of a transmitter.

## The idea

**Equilibrium potential, in one picture.** K⁺ is packed inside, sparse outside, so it diffuses out. Every K⁺ that leaves takes a positive charge with it, making the inside more negative, and a negative inside pulls K⁺ back. At one particular voltage the electrical pull exactly cancels the chemical push, net flow stops, and the membrane holds. That voltage is $E_K$, potassium's **equilibrium potential** — its private happy voltage.

**Now the crucial fork.** Suppose the membrane were permeable to K⁺ *and nothing else*. Then $V_m = E_K$, and this is a genuine equilibrium: no current, no net flux of anything, no entropy produced. Seal the cell in a jar, kill it, come back in a week — still $E_K$. **It costs nothing to maintain.**

But a real membrane leaks Na⁺ too, and Na⁺'s happy voltage is $+61$ mV. The membrane cannot satisfy both. It compromises at a voltage where **K⁺ is still flowing out and Na⁺ is still flowing in**, at rates that happen to cancel electrically. **Zero *net* current, but not one individual current is zero.**

That distinction has teeth:

| | Single-ion equilibrium | Multi-ion steady state (a real neuron) |
|---|---|---|
| Net current | 0 | 0 |
| Each ionic current | 0 | **large, non-zero** |
| Net flux of each ion | 0 | **non-zero — gradients decay** |
| Free energy dissipated | 0 | **continuous** |
| Maintenance cost | none | **ATP, forever** |

The right mental image is not a sealed bottle of water. It is a **bucket with two holes and a pump**: the water level is perfectly steady, and the pump never stops running.

**What the pump does, and what it doesn't.** The Na⁺/K⁺-ATPase moves 3 Na⁺ out and 2 K⁺ in per ATP ([physiology 1.2](../../physiology/lessons/01-02-membrane-transport.md)). It is tempting to say the pump "makes" the resting potential. It does not, directly — its own current is small. **The pump makes the gradients; the gradients plus the permeabilities make the voltage.** That is why the resting potential outlives the pump for minutes rather than milliseconds: block the ATPase and the voltage barely twitches at first, then slides as the gradients run down.

## The formal version

[biophysics 4.4](../../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md) derives the two equations below from the electrochemical potential. We use the results.

**Nernst.** For an ion of valence $z$,

$$E_{\text{ion}} = \frac{RT}{zF}\ln\frac{[\text{ion}]_{\text{out}}}{[\text{ion}]_{\text{in}}}, \qquad \frac{RT}{F}\bigg|_{37\,^\circ\text{C}} = 26.7\ \text{mV}$$

*In words: the voltage at which the electrical pull exactly cancels the concentration push for that one ion.* Here $R$ is the gas constant, $T$ absolute temperature, $F$ the Faraday constant. Multiplying by $\ln 10 = 2.303$: **every tenfold concentration ratio is worth 61.5 mV** for a monovalent ion at body temperature.

For a typical mammalian cortical neuron (concentrations in mM):

| Ion | $[\ ]_{\text{out}}$ | $[\ ]_{\text{in}}$ | $z$ | $E_{\text{ion}}$ |
|---|---|---|---|---|
| K⁺ | 5 | 140 | +1 | $26.7\ln(5/140) = \mathbf{-89.0}$ mV |
| Na⁺ | 145 | 15 | +1 | $26.7\ln(145/15) = \mathbf{+60.6}$ mV |
| Cl⁻ | 110 | 7 | −1 | $-26.7\ln(110/7) = \mathbf{-73.5}$ mV |
| Ca²⁺ | 2 | $10^{-4}$ | +2 | $13.35\ln(2\times10^{4}) = \mathbf{+132}$ mV |

Note the Ca²⁺ line: **four orders of magnitude of gradient**, and it will be the reason Ca²⁺ works as a signal rather than a charge carrier ([2.1](02-01-chemical-synaptic-transmission.md)).

**GHK — the constant-field answer.** With several permeant ions, no ion is at equilibrium; the membrane settles where the *net current* is zero. Assuming a uniform electric field across the membrane and independent ionic fluxes,

$$\boxed{\;V_m = \frac{RT}{F}\ln\frac{P_K[\text{K}^+]_{\text{out}} + P_{Na}[\text{Na}^+]_{\text{out}} + P_{Cl}[\text{Cl}^-]_{\text{in}}}{P_K[\text{K}^+]_{\text{in}} + P_{Na}[\text{Na}^+]_{\text{in}} + P_{Cl}[\text{Cl}^-]_{\text{out}}}\;}$$

*In words: the resting voltage is a permeability-weighted blend of the individual Nernst potentials — whichever ion crosses most easily wins the tug-of-war.* Cl⁻ appears with its concentrations flipped because $z=-1$. With the resting ratios $P_K : P_{Na} : P_{Cl} = 1 : 0.04 : 0.45$:

$$V_m = 26.7\ln\frac{5 + 0.04(145) + 0.45(7)}{140 + 0.04(15) + 0.45(110)} = 26.7\ln\frac{13.95}{190.1} = 26.7(-2.612) = \mathbf{-69.7\ \text{mV}}.$$

**The membrane sits 19 mV above $E_K$ because of a 4 percent Na⁺ leak.** Permeability is a velocity (cm/s), not a conductance — GHK is a flux model.

**Chord conductance — the ohmic answer, and the one HH uses.** Model each channel population instead as a battery $E_{\text{ion}}$ in series with a fixed resistor $1/g_{\text{ion}}$, all in parallel. Kirchhoff's current law ([circuits 1.3](../../circuits/lessons/01-03-kirchhoffs-laws-kcl-kvl.md)) with $\sum I = 0$ gives

$$\boxed{\;V_m = \frac{g_K E_K + g_{Na}E_{Na} + g_{Cl}E_{Cl}}{g_K + g_{Na} + g_{Cl}}\;}$$

*In words: the membrane potential is the conductance-weighted average of the equilibrium potentials — each channel type drags the voltage toward its own battery with a strength equal to its conductance.* This is literally the Thévenin equivalent of a parallel battery network ([circuits 2.4](../../circuits/lessons/02-04-thevenin-norton-max-power.md)).

**These are different models, not two forms of the same equation.** GHK assumes a constant field and independent fluxes, and its current–voltage curves are *rectifying* (curved). The chord formula assumes each channel is a plain ohmic resistor, so its I–V curves are straight lines. Converting the GHK fluxes above into chord conductances at $V_m = -69.7$ mV gives $g_K : g_{Na} : g_{Cl} = 1 : 0.162 : 0.469$, and

$$V_m = \frac{1(-89.0) + 0.162(60.6) + 0.469(-73.5)}{1 + 0.162 + 0.469} = \frac{-113.7}{1.631} = -69.7\ \text{mV}$$

They agree — **at that one voltage, by construction**, since both just express "net current is zero." Away from it they diverge, because GHK conductances depend on voltage and concentration while ohmic ones do not. **Note that the Na⁺ *conductance* ratio (0.162) is four times its *permeability* ratio (0.04)**: conductance counts the ions actually available to carry current, and Na⁺ is ten times more concentrated outside than K⁺ is. Permeability and conductance are not interchangeable.

**Hodgkin and Huxley chose the ohmic version**, and [1.4](01-04-hodgkin-huxley-model.md) is built on it — so it is the one that matters for the rest of this course.

**Driving force — the workhorse.** Define

$$\boxed{\;I_{\text{ion}} = g_{\text{ion}}\,(V_m - E_{\text{ion}})\;}$$

with the convention that positive $I$ means positive charge flowing **out** (hyperpolarizing). *In words: current is conductance times how far the membrane is from that ion's happy voltage.* The quantity $V_m - E_{\text{ion}}$ is the **driving force**, and $E_{\text{ion}}$ is equivalently the **reversal potential** — the voltage at which that current changes sign.

At $V_m = -69.7$ mV:

| Ion | driving force $V_m - E$ | $g$ | $I$ (relative) | direction |
|---|---|---|---|---|
| Na⁺ | $-130.3$ mV | 0.162 | $-21.1$ | inward |
| K⁺ | $+19.3$ mV | 1 | $+19.2$ | outward |
| Cl⁻ | $+3.8$ mV | 0.469 | $+1.8$ | Cl⁻ enters |
| | | | $\sum \approx 0$ | |

**Read that column and the whole lesson is there.** The sum is zero. Na⁺'s driving force is nearly seven times K⁺'s — Na⁺ is desperate to get in and is held back only by a small conductance. Nothing is at rest. **Every second, 21 units of Na⁺ enter and 19 of K⁺ leave, and the gradients that make the voltage are being spent to hold it.**

**Steady state requires more than zero current.** Zero net current keeps the *voltage* constant. Keeping the *concentrations* constant is a separate condition: the pump must extrude every Na⁺ that leaks in and reimport every K⁺ that leaks out. Since it does that 3-for-2, it necessarily carries a net outward current — one positive charge per cycle — which is itself a small hyperpolarizing term GHK omits. Adding it (the Mullins–Noda correction, which weights $P_K$ by the pump ratio 3:2) moves the predicted potential from $-68.5$ to $-73.7$ mV for the K⁺/Na⁺-only case: **a few millivolts of the resting potential are the pump pulling directly**, which is why ouabain depolarizes a neuron immediately by a few mV and only later by tens.

**Chloride is where neuroscience departs from generic cell biology.** In a mature neuron **KCC2** uses the outward K⁺ gradient to co-extrude K⁺ and Cl⁻, holding $[\text{Cl}^-]_{\text{in}}$ near 7 mM so that $E_{Cl} = -73.5$ mV, a few mV **below** rest. Open a GABA-A channel and Cl⁻ flows in: hyperpolarizing, inhibitory. In an **immature** neuron KCC2 is not yet expressed and **NKCC1** dominates, importing Na⁺, K⁺ and 2 Cl⁻ on the inward Na⁺ gradient, so $[\text{Cl}^-]_{\text{in}} \approx 25$ mM and

$$E_{Cl} = 26.7\ln\frac{25}{110} = 26.7(-1.482) = \mathbf{-39.6\ \text{mV}}$$

— **30 mV above rest. GABA depolarizes.** Both transporters are electroneutral, so neither carries current directly; both are powered, one step removed, by the same ATPase. **"Inhibitory" is not a property of GABA. It is a property of whichever cotransporter the cell happens to be expressing this week** — the developmental KCC2 switch is what turns GABA from excitatory to inhibitory, and [2.5](02-05-development-and-wiring.md) will show why a developing circuit needs it that way round.

**Shunting inhibition — the second escape from "inhibition means hyperpolarization."** Suppose $E_{Cl}$ sat exactly at $V_m$. Opening a GABA-A conductance then produces *zero* current and *zero* voltage change — and is still powerfully inhibitory, because it drops the input resistance. An excitatory current $I_e$ produces

$$\Delta V = \frac{I_e}{g_{\text{rest}} + g_{\text{GABA}}},$$

so adding conductance divides every EPSP down. **Inhibition can work by making the cell a worse amplifier rather than by moving its voltage.**

## Picture

![Panel a plots membrane potential against the sodium-to-potassium permeability ratio on a logarithmic axis. The curve rises smoothly from the potassium equilibrium potential of minus 89 millivolts at very low ratios to the sodium equilibrium potential of plus 61 millivolts at high ratios, with both drawn as dashed horizontal asymptotes. Two points are marked on the same curve: the resting state at a ratio of 0.04 and minus 68 millivolts, and the peak of the action potential at a ratio near 10 and plus 43 millivolts. Panel b is a bar chart of the resting currents, with a large inward sodium leak of three units below the zero line, a smaller outward potassium leak of two units above it, and a one-unit outward pump current, the three summing to zero.](assets/01-02-fig1.svg)

Panel (a) is the point of the lesson in one line: **the resting potential and the peak of the action potential are the same curve evaluated at two permeability ratios.** A spike is not a different kind of event; it is a 250-fold excursion along this axis and back.

## Worked examples

**Example 1 (the prediction the course demands: raise extracellular K⁺).** Extracellular K⁺ is the only one of these concentrations that moves much in life — hard exercise, ischemia, a burst of firing in a small extracellular space, a bad potassium infusion. Hold everything else fixed and sweep $[\text{K}^+]_{\text{out}}$ through GHK:

$$V_m = 26.7\ln\frac{[\text{K}^+]_{\text{out}} + 8.95}{190.1}, \qquad E_K = 26.7\ln\frac{[\text{K}^+]_{\text{out}}}{140}$$

| $[\text{K}^+]_{\text{out}}$ (mM) | $E_K$ (mV) | $V_m$ (mV) | gap $V_m - E_K$ |
|---|---|---|---|
| 1 | −131.9 | −78.8 | **53.1** |
| 2.5 | −107.5 | −75.0 | 32.5 |
| **5 (normal)** | **−89.0** | **−69.7** | 19.3 |
| 10 | −70.5 | −61.6 | 8.9 |
| 20 | −52.0 | −50.3 | **1.7** |
| 50 | −27.5 | −31.3 | −3.8 |

**Two regimes, and the reason for each.**

*High external K⁺: near-Nernstian.* From 20 to 50 mM the membrane moves 19.0 mV over 0.398 decades — a slope of **47.7 mV/decade**, heading for the Nernst 61.5. The reason is in the GHK numerator: at $[\text{K}^+]_{\text{out}} = 50$ the K⁺ term is 50 and the Na⁺ term is 5.8, so K⁺ owns the fraction and the fixed Na⁺ leak becomes a rounding error. **The membrane behaves like a pure K⁺ electrode when there is enough K⁺ outside for it to notice.** (It does not quite reach 61.5 because we held $[\text{Cl}^-]$ pinned; real Cl⁻ redistributes over seconds and the slope then approaches the full Nernst value.)

*Low external K⁺: badly non-Nernstian.* From 1 to 2.5 mM the slope is only **9.5 mV/decade**, and at 1 mM the membrane sits **53 mV positive to $E_K$**. Same numerator, opposite story: the K⁺ term has shrunk to 1 while the Na⁺ term is still 5.8, so **the Na⁺ leak now dominates the numerator and clamps the membrane far above $E_K$.** A tiny permeability is irrelevant when its competitor is large and decisive when its competitor vanishes.

*The doubling asked for in Boss problem 1:* $5 \to 10$ mM gives $-69.7 \to -61.6$ mV, a **depolarization of 8.1 mV**.

**And excitability? The answer is non-monotonic, and this is the trap.** With threshold near −50 mV, moderate hyperkalemia closes the gap from 19.7 mV to 11.6 mV and the neuron becomes **more excitable** — smaller inputs now reach threshold. But sustained depolarization inactivates voltage-gated Na⁺ channels ([1.3](01-03-the-action-potential.md)), and by 20 mM the membrane is *at* threshold with most Na⁺ channels inactivated: the cell is depolarized and **inexcitable**. Push a little and you get hyperexcitability; push harder and you get depolarization block. (In cardiac muscle this is why hyperkalemia is lethal — the whole-body version is [physiology](../../physiology/syllabus.md)'s to tell.)

**Example 2 (chloride and the meaning of "inhibitory").** A GABA-A synapse opens a Cl⁻ conductance of 30 nS on a cell whose resting input conductance is 10 nS ($R_{\text{in}} = 100$ MΩ). An excitatory synapse delivers 80 pA.

*(a) The EPSP alone.* $\Delta V = (80\ \text{pA})(100\ \text{M}\Omega) = 8.0$ mV.

*(b) With GABA open, mature neuron ($E_{Cl} = -73.5$ mV, rest $-69.7$).* Two separate effects. First, the Cl⁻ current itself: driving force $-69.7 - (-73.5) = +3.8$ mV, so $I_{Cl} = (30\ \text{nS})(3.8\ \text{mV}) = 114$ pA of hyperpolarizing current — worth only a couple of mV. Second, the shunt: total conductance is now 40 nS, so

$$\Delta V = \frac{80\ \text{pA}}{40\ \text{nS}} = \mathbf{2.0\ \text{mV}}.$$

**The EPSP is cut by a factor of four, and almost none of that came from the hyperpolarization.** Perisomatic basket-cell inhibition works overwhelmingly this way. This is the mechanism [2.3](02-03-synaptic-integration.md) needs.

*(c) The same synapse on an immature neuron ($E_{Cl} = -39.6$ mV).* Driving force $-69.7 - (-39.6) = -30.1$ mV: the Cl⁻ current is now **inward-equivalent and depolarizing**, roughly 900 pA worth, pushing the cell up toward −40 mV. With threshold at −50 mV, GABA can now fire the cell outright. **Same transmitter, same receptor, same channel — opposite sign, because a cotransporter changed.**

*(d) The sharp version of the rule.* GABA is inhibitory when $E_{Cl}$ lies **below threshold**, not when it lies below rest. A cell with $E_{Cl} = -55$ mV and threshold $-50$ mV has a *depolarizing* GABA response that is nonetheless firmly inhibitory: it clamps the membrane at −55 and no amount of excitation can easily lift it past −50 while the conductance is open. **Depolarizing is not the same as excitatory.**

## Watch out

- **You might call the resting potential an equilibrium.** It is a steady state. A one-ion membrane is at equilibrium and costs nothing; a real neuron has Na⁺ pouring in and K⁺ pouring out at all times, and pays for it continuously. The oscilloscope cannot tell the two apart — the arithmetic can.
- **You might think the pump makes the resting potential.** It makes the *gradients*; the gradients plus the permeabilities make the voltage. Its direct electrogenic contribution is only a few mV. That is why ATP depletion depolarizes a neuron over minutes rather than milliseconds.
- **You might use permeability and conductance interchangeably.** $P$ is a velocity in a flux model; $g$ is a slope in an ohmic model. Here $P_{Na}/P_K = 0.04$ but $g_{Na}/g_K = 0.16$. GHK and the chord formula agree at the resting potential by construction and disagree everywhere else.
- **You might expect $V_m$ to always lie between $E_K$ and $E_{Na}$ and to track $E_K$ faithfully.** It lies between the *extreme* equilibrium potentials of the permeant ions — and at 50 mM external K⁺ the table above has $V_m$ sitting *below* $E_K$, because Cl⁻ is then the more negative battery.
- **You might assume GABA is inhibitory.** It is inhibitory when $E_{Cl}$ is below threshold. In immature neurons it is depolarizing and can be frankly excitatory; after injury, KCC2 is downregulated and adult neurons can revert.
- **You might equate inhibition with hyperpolarization.** Shunting inhibition changes no voltage at all and still divides every EPSP.

## One-liner

> A resting neuron is not an equilibrium but a leaky bucket with the pump running: $\sum I = 0$ while every individual $g_{\text{ion}}(V_m - E_{\text{ion}})$ is large, so the voltage is steady, the gradients are draining, and the ATP bill never stops.

## Problems

**P1 (🟢, bridges to 2.1)** A neuron rests at $-70$ mV. Extracellular Ca²⁺ is 2 mM, intracellular free Ca²⁺ is 100 nM, and $T = 37\ ^\circ$C. (a) Compute $E_{Ca}$. (b) Compute the driving force on Ca²⁺ at rest and at the peak of a spike, $+40$ mV. (c) A presynaptic terminal must admit Ca²⁺ *during* the spike, when the membrane is at its most positive. Explain why this still works, and why it would not if the gradient were only tenfold.

**P2 (🟡)** For a neuron with $[\text{Cl}^-]_{\text{out}} = 110$ mM at 37 °C: (a) find the intracellular Cl⁻ concentration at which $E_{Cl}$ is exactly $-70$ mV; (b) a neuron expresses KCC2 and holds $[\text{Cl}^-]_{\text{in}} = 7$ mM, then is injured and reverts to $[\text{Cl}^-]_{\text{in}} = 25$ mM — compute both $E_{Cl}$ values and state what happens to a GABA-A synapse if the cell rests at $-70$ mV with threshold $-50$ mV; (c) name the one measurement that would distinguish "the GABA synapse was lost" from "the GABA synapse reversed."

**P3 (🔴, the metabolic bill)** A spherical soma of diameter 20 μm has resting Na⁺ conductance $g_{Na} = 5.0\ \mu\text{S/cm}^2$, $V_{\text{rest}} = -69.7$ mV and $E_{Na} = +60.6$ mV. Faraday's constant is $9.65\times10^{4}$ C/mol. (a) Compute the resting Na⁺ current density, the total Na⁺ current, and the Na⁺ influx in mol/s. (b) Compute the rate of rise of $[\text{Na}^+]_{\text{in}}$ if the pump stops, and the time for it to go from 15 to 25 mM. (c) Assuming $[\text{K}^+]_{\text{in}}$ falls to 130 mM and $[\text{K}^+]_{\text{out}}$ rises to 8 mM over that interval, recompute $V_m$ from GHK. (d) Compute the ATP consumption rate needed to hold the resting state, and say what the $1/r$ scaling of your answer to (b) implies for thin axons and dendritic spines.

<details>
<summary>Solutions</summary>

**P1 (a)** Ca²⁺ is divalent, so the prefactor is $RT/(2F) = 26.7/2 = 13.35$ mV:

$$E_{Ca} = 13.35\ln\frac{2\times10^{-3}}{1\times10^{-7}} = 13.35\ln(2\times10^{4}) = 13.35(9.903) = \mathbf{+132\ \text{mV}}.$$

**(b)** At rest: $V_m - E_{Ca} = -70 - 132 = \mathbf{-202\ \text{mV}}$ — enormous, and inward.

At the spike peak: $+40 - 132 = \mathbf{-92\ \text{mV}}$ — smaller, but still strongly inward.

**(c)** Ca²⁺ entry survives the spike because $E_{Ca}$ is *far* outside the voltage range a neuron ever visits. Even at the most positive point of the action potential the membrane is 92 mV negative to $E_{Ca}$, so the driving force never reverses; only its magnitude is modulated. That is what makes Ca²⁺ usable as a **trigger**: voltage-gated Ca²⁺ channels open during the spike, and whenever they are open, Ca²⁺ comes in.

If the gradient were only tenfold, $E_{Ca} = 13.35\ln 10 = +30.7$ mV — **below the spike peak**. The driving force would reverse partway up the action potential and Ca²⁺ would flow *out* at the peak, exactly when the terminal needs it in. The four-orders-of-magnitude gradient is not extravagance; it is what keeps the sign of the signal independent of the voltage that gates it. The same 100 nM resting level also gives Ca²⁺ an enormous **signal-to-noise ratio**: a small absolute influx is a large fractional change, which is why Ca²⁺ and not Na⁺ is the cell's second messenger ([2.1](02-01-chemical-synaptic-transmission.md), [molecular-cell-biology 2.2](../../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md)).

**P2 (a)** Set $E_{Cl} = 26.7\ln\big([\text{Cl}^-]_{\text{in}}/[\text{Cl}^-]_{\text{out}}\big) = -70$ mV (the $z=-1$ form, inside over outside):

$$\ln\frac{[\text{Cl}^-]_{\text{in}}}{110} = \frac{-70}{26.7} = -2.6217 \;\Longrightarrow\; \frac{[\text{Cl}^-]_{\text{in}}}{110} = e^{-2.6217} = 0.0727,$$

$$[\text{Cl}^-]_{\text{in}} = 110(0.0727) = \mathbf{8.0\ \text{mM}}.$$

**(b)** $$\text{KCC2, } 7\ \text{mM}: \quad E_{Cl} = 26.7\ln\frac{7}{110} = 26.7(-2.754) = \mathbf{-73.5\ \text{mV}}.$$

$$\text{Injured, } 25\ \text{mM}: \quad E_{Cl} = 26.7\ln\frac{25}{110} = 26.7(-1.482) = \mathbf{-39.6\ \text{mV}}.$$

Healthy cell: $E_{Cl}$ is 3.5 mV below rest. GABA hyperpolarizes slightly, and inhibits mostly by shunting. Even if it did nothing to the voltage, it clamps the cell at −73.5, far below the −50 mV threshold.

Injured cell: $E_{Cl}$ is 30 mV **above** rest and 10 mV **above threshold**. GABA now drives the membrane toward −39.6 mV, crossing −50. **The synapse is excitatory.** This is not a hypothetical — KCC2 downregulation after nerve injury, and in epileptic tissue, converts inhibition into excitation and is one reason GABA-enhancing drugs sometimes fail exactly where they are most needed.

**(c)** **Measure the reversal potential of the GABA-evoked current**, by voltage-clamping the cell at a range of holding potentials and finding where the response changes sign (gramicidin-perforated patch, so the recording pipette does not dialyze the cell's own Cl⁻ away — an ordinary whole-cell patch would impose the pipette's $E_{Cl}$ and destroy the measurement).

The two hypotheses make opposite predictions:

- *Synapse lost:* the response is **absent** — no current at any holding potential.
- *Synapse reversed:* the response is **present and normal in amplitude**, but reverses at −40 mV instead of −73 mV.

Conductance is intact in one case and gone in the other, and only a reversal-potential measurement separates them. Recording the voltage response alone would not: at rest, "no IPSP" and "a small depolarizing response" are easy to confuse.

**P3 (a)** Driving force $V_m - E_{Na} = -69.7 - 60.6 = -130.3$ mV.

$$I_{Na} = g_{Na}(V_m - E_{Na}) = (5.0\times10^{-6}\ \text{S/cm}^2)(-0.1303\ \text{V}) = -6.52\times10^{-7}\ \text{A/cm}^2 = \mathbf{-0.65\ \mu\text{A/cm}^2}$$

(inward). Geometry, with $r = 10\ \mu\text{m} = 1.0\times10^{-3}$ cm:

$$A = 4\pi r^2 = 1.257\times10^{-5}\ \text{cm}^2, \qquad V = \tfrac{4}{3}\pi r^3 = 4.19\times10^{-9}\ \text{cm}^3 = 4.19\times10^{-12}\ \text{L}.$$

$$I_{\text{total}} = (6.52\times10^{-7})(1.257\times10^{-5}) = 8.19\times10^{-12}\ \text{A} = \mathbf{8.2\ \text{pA}}.$$

$$\text{influx} = \frac{I}{F} = \frac{8.19\times10^{-12}}{9.65\times10^{4}} = \mathbf{8.5\times10^{-17}\ \text{mol/s}}.$$

**(b)** $$\frac{d[\text{Na}^+]_{\text{in}}}{dt} = \frac{8.5\times10^{-17}\ \text{mol/s}}{4.19\times10^{-12}\ \text{L}} = 2.03\times10^{-5}\ \text{M/s} = \mathbf{20\ \mu\text{M/s}}.$$

$$t = \frac{10\times10^{-3}\ \text{M}}{2.03\times10^{-5}\ \text{M/s}} = 494\ \text{s} = \mathbf{8.2\ \text{minutes}}.$$

**Minutes, not milliseconds — and that is the whole point.** The membrane capacitance ($1\ \mu\text{F/cm}^2$ at 70 mV) stores only $CV \cdot (A/V_{\text{cell}})/F = (7\times10^{-8})(3000)/(9.65\times10^{4}) \approx 2\ \mu\text{M}$ of charge spread through this soma, while the gradients store on the order of 10 mM — a reservoir several thousand times larger. **Rest survives the loss of ATP for as long as the reservoir lasts, not as long as the capacitor lasts.**

**(c)** $$V_m = 26.7\ln\frac{8 + 0.04(145) + 0.45(7)}{130 + 0.04(25) + 0.45(110)} = 26.7\ln\frac{16.95}{180.5} = 26.7\ln(0.09391) = 26.7(-2.365) = \mathbf{-63.2\ \text{mV}}.$$

A **6.5 mV depolarization** in 8 minutes. Note this is a *lower bound* on how bad it gets, for two reasons the toy model omits. First, the process is regenerative: depolarization opens voltage-gated channels, which admit more Na⁺, which depolarizes further. Second, the extracellular space in brain tissue is only about one fifth of the volume and is shared between crowded cells, so K⁺ efflux raises $[\text{K}^+]_{\text{out}}$ fast, which — by Example 1 — depolarizes everything at once. Real ischemic tissue shows an abrupt **anoxic depolarization** to near 0 mV within a few minutes, not a gentle 6 mV slide.

**(d)** The pump extrudes 3 Na⁺ per ATP, so at steady state:

$$\text{ATP rate} = \frac{8.5\times10^{-17}\ \text{mol Na}^+/\text{s}}{3} = 2.8\times10^{-17}\ \text{mol ATP/s},$$

$$= (2.8\times10^{-17})(6.02\times10^{23}) \approx \mathbf{1.7\times10^{7}\ \text{ATP per second}}$$

— **17 million ATP molecules per second, for one small soma, doing nothing at all.** That is the standing cost of being ready to fire, before a single spike or synapse is paid for, and it is why the Na⁺/K⁺-ATPase is the single largest consumer of ATP in the brain.

*The $1/r$ scaling.* The influx rate is proportional to $A/V = 3/r$, so:

$$\frac{d[\text{Na}^+]_{\text{in}}}{dt} \propto \frac{1}{r}.$$

**Thin structures run down faster in exact proportion to how thin they are.** A 1 μm unmyelinated axon has $r$ twenty times smaller than this soma, so it loads Na⁺ twenty times faster and would reach the same 25 mM in about 25 seconds; a 0.2 μm dendritic spine neck, a hundred times faster still. This is a genuine design constraint, not an artifact: it is part of why thin unmyelinated C-fibres are metabolically brutal, why mitochondria are parked at nodes of Ranvier and presynaptic terminals, and why myelination — which removes almost all the leaky membrane ([1.5](01-05-cable-theory-conduction.md)) — is an energy-saving adaptation at least as much as a speed one.

</details>

## Connections

- **Backward:** [1.1](01-01-neuron-as-a-device.md) asserted the −70 mV baseline and the membrane-as-capacitor picture; this lesson computes the voltage and shows the capacitor is the small reservoir and the ion gradients the large one. The Nernst and GHK derivations from electrochemical potential are [biophysics 4.4](../../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md).
- **Forward:** [1.3](01-03-the-action-potential.md) is the excursion along panel (a) of the figure and back; [1.4](01-04-hodgkin-huxley-model.md) takes $I_{\text{ion}} = g_{\text{ion}}(V_m - E_{\text{ion}})$ and makes each $g$ a function of voltage and time — the chord-conductance form is chosen there precisely because it is ohmic and integrable. [2.3](02-03-synaptic-integration.md) needs the driving force and the shunting result; [2.5](02-05-development-and-wiring.md) needs the KCC2 switch and depolarizing GABA.
- **Sideways:** the chord-conductance formula is the Thévenin equivalent of parallel battery–resistor branches ([circuits 2.4](../../circuits/lessons/02-04-thevenin-norton-max-power.md)) and the balance condition is plain KCL ([circuits 1.3](../../circuits/lessons/01-03-kirchhoffs-laws-kcl-kvl.md)). The pump and the cotransporters that set these gradients are [physiology 1.2](../../physiology/lessons/01-02-membrane-transport.md); the whole-body consequences of moving extracellular K⁺ belong to [physiology](../../physiology/syllabus.md). And the general lesson — a steady state maintained by continuous dissipation, not an equilibrium — is the same distinction that separates a living cell from a dead one throughout [biophysics 2.1](../../biophysics/lessons/02-01-free-energy-cell-currency.md).
