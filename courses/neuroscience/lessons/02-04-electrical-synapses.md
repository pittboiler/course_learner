# Neuroscience · Lesson 2.4: Electrical synapses

> ⏱ ~15 min · Module 2: Synapses, wiring & circuits · Builds on: [2.1](02-01-chemical-synaptic-transmission.md), [2.3](02-03-synaptic-integration.md) · Unlocks: 2.6 (circuit motifs & computation)

## Why this matters

[2.1](02-01-chemical-synaptic-transmission.md) opened by asking why nearly every synapse in your brain is chemical when a direct electrical connection would be faster, cheaper and more reliable. This lesson asks the mirror question, and it is the harder one.

Chemical synapses have **gain**, **sign inversion**, and **plasticity**. Electrical synapses have none of the three. So why does any electrical synapse survive? And they do survive, in numbers: gap junctions link most inhibitory interneurons in cortex and hippocampus, essentially every neuron of the inferior olive, amacrine cells in the retina, neurons throughout the developing brain, the astrocyte syncytium, and — outside the nervous system — every cardiac myocyte ([physiology 2.1](../../physiology/lessons/02-01-cardiac-electrophysiology.md)). They are not vestigial leftovers waiting to be replaced.

**The answer is not "they are fast," and that is the interesting part.** The honest answer turns on the gap junction's *worst* property — that it is a low-pass filter — and on the discovery that this is not a defect but the job description. A gap junction transmits a spike badly and a slow subthreshold wave well. So coupled networks do not relay each other's action potentials; they share slow voltage, and **that** is what synchronizes populations. Answer the organizing question properly and this lesson is done, which is why it is the shortest in the module.

## The idea

**A gap junction is a hole.** Two cells' membranes come within about 3.5 nm and a set of channels bridges the gap, making the cytoplasms continuous. Six **connexin** subunits assemble into a hemichannel (a **connexon**); a connexon in one membrane docks with a connexon in the other, and the two together make one pore roughly 1–2 nm wide. A plaque contains tens to thousands of them.

The pore is wide and unselective. It passes ions — hence the electrical coupling — but also **small molecules up to about 1 kDa**: cAMP, IP$_3$, ATP, Ca$^{2+}$, and the tracer dyes (Lucifer yellow, neurobiotin) that are the standard way of detecting coupling in the first place. So the junction carries **chemical** signals as well as electrical ones, which matters for development and for glia.

Vertebrates build these from connexins (**Cx36** is the neuronal one; Cx43 in astrocytes; Cx32 and Cx47 in myelinating glia, where mutations cause an inherited neuropathy). Invertebrates build the same structure from **innexins**, a completely unrelated protein family. **Same architecture, twice, from different corners of sequence space** — the electrical synapse is a solution good enough to be invented independently.

**Now the framing that makes everything else follow:**

$$\boxed{\;\text{A chemical synapse is an amplifier with its own power supply. An electrical synapse is a wire.}\;}$$

At a chemical synapse the presynaptic spike opens channels in the *postsynaptic* membrane, and the current that flows is drawn from the *postsynaptic* cell's own ionic batteries ([2.2](02-02-neurotransmitters-receptors.md)). A tiny presynaptic event commands a large postsynaptic current. That is where gain comes from, and it is why the sign can be inverted: the postsynaptic cell chooses which battery to connect. At a gap junction, the only current available is the current that leaks through the junction from the presynaptic cell. It **shares charge; it cannot create it.** Nothing else in the lesson is surprising once you hold that.

**Three defining properties, each with a price:**

1. **Near-zero delay** — bought by having no machinery.
2. **Bidirectional** — bought by being a passive resistor, with rectifying exceptions.
3. **No gain** — the price of having no power supply. The postsynaptic response is always a *fraction* of the presynaptic signal.

And one consequence that is not on anyone's list of three, which is the point of the lesson: **the postsynaptic membrane loads the junction.** The junction does not deliver a voltage to a bare node; it delivers current into an RC circuit. That makes coupling a **low-pass filter**, and everything electrical synapses are actually good at follows from that single fact.

## The formal version

### Where the delay went

[2.1](02-01-chemical-synaptic-transmission.md) accounted for the chemical synapse's 0.5–1 ms delay and found that almost none of it is transport: diffusion across the 20 nm cleft takes about 0.5 µs. The delay is **machinery** — presynaptic Ca$^{2+}$ channel activation (roughly 0.2 ms), then the Ca$^{2+}$-sensor-to-fusion step, then receptor opening.

A gap junction has no Ca$^{2+}$ channel step, no vesicle, no receptor. Current flows the instant the presynaptic voltage moves. **Measured latencies are below 0.1 ms and are consistent with zero**; the only lag is the RC charging of the postsynaptic membrane, which delays and rounds the *peak* but does not delay the *onset*.

### The coupling coefficient is a resistive divider

Take two cells, presynaptic voltage $V_1$ and postsynaptic voltage $V_2$, measured relative to rest. Let $R_j$ be the junctional resistance (conductance $g_j = 1/R_j$) and $R_2$ the postsynaptic cell's input resistance (conductance $g_2$). In steady state, current from cell 1 crosses the junction and then leaves through cell 2's membrane, so the two resistances are in series and cell 2 sits at the tap ([circuits 1.4](../../circuits/lessons/01-04-voltage-current-dividers.md)):

$$\boxed{\;k \equiv \frac{V_2}{V_1} = \frac{R_2}{R_j + R_2} = \frac{g_j}{g_j + g_2}\;}$$

*In words: the fraction of the presynaptic voltage that shows up next door is the fraction of the total series resistance that belongs to the postsynaptic membrane.*

**Three readings of this formula, in increasing order of usefulness.**

**First, $k < 1$, always and strictly.** There is no arrangement of resistors that makes it otherwise. **An electrical synapse can only attenuate**, and no combination of them can build a relay that regenerates a signal. Measured coupling coefficients between cortical interneurons run about 0.01 to 0.2 — call it 5 percent — so a 100 mV presynaptic action potential is nowhere near able to fire the partner even before the filtering below is taken into account.

**Second, $k$ does not contain $R_1$.** Inject current into cell 1 and its own membrane resistance sets how far *it* depolarizes — but once you know $V_1$, the divider from that node onward involves only $R_j$ and $R_2$. **Coupling strength is a property of the junction and the receiving cell, not the sending one.**

**Third, that immediately gives asymmetry without any special mechanism:**

$$k_{1\to 2} = \frac{R_2}{R_j+R_2}, \qquad k_{2\to 1} = \frac{R_1}{R_j+R_1}$$

These are equal only if $R_1 = R_2$. **A perfectly ohmic, perfectly symmetric junction produces asymmetric coupling whenever the two cells have different input resistances** — the small, high-resistance cell drives the large one weakly and is driven strongly in return. Do not read measured asymmetry as evidence of rectification; check the input resistances first.

**Genuine rectification does exist**, and it was there at the beginning: the crayfish giant motor synapse, where Furshpan and Potter found in 1959 that depolarization passed one way and not the other — the discovery of the electrical synapse. Molecularly it comes from **heterotypic** junctions, two different connexin or innexin types docked together, giving the pore an asymmetric voltage dependence.

### The postsynaptic capacitance makes it a filter

Now put the capacitor back. Cell 2 is $R_2$ in parallel with its membrane capacitance $C_2$, driven through $R_j$. In the frequency domain ([signals-systems 2.5](../../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md)), with $Z_2 = R_2/(1+sR_2C_2)$:

$$H(s) = \frac{Z_2}{R_j + Z_2} = \frac{R_2}{R_j(1+sR_2C_2)+R_2} = \frac{k}{1 + s\tau_c}, \qquad \boxed{\;\tau_c = \frac{R_jR_2}{R_j+R_2}\,C_2\;}$$

*In words: coupling is a single-pole low-pass filter whose DC gain is the coupling coefficient and whose time constant is the postsynaptic capacitance charged through the parallel combination of the junction and the postsynaptic membrane.*

**Two things to notice.** Since $R_j \gg R_2$ in practice, $\tau_c \approx R_2C_2 = \tau_m$ — **the coupling time constant is essentially the postsynaptic membrane time constant from [1.5](01-05-cable-theory-conduction.md)**, the same 10 ms that sets the temporal summation window in [2.3](02-03-synaptic-integration.md). And the corner frequency

$$f_c = \frac{1}{2\pi\tau_c} \approx 15\text{–}30\ \text{Hz}$$

sits *below* every frequency an action potential is made of. At $f \gg f_c$ the magnitude falls as $|H| \approx k f_c/f$: a 1 ms spike has most of its power near 300 Hz, so it is attenuated roughly a further tenfold beyond $k$. A 100 ms afterhyperpolarization has its power near 3 Hz and passes at the full $k$.

### The area theorem, which settles the sign

The filter equation in the time domain is $\tau_c\dot V_2 + V_2 = kV_1(t)$. Integrate both sides over all time; $V_2$ starts and ends at zero, so $\int \tau_c \dot V_2\,dt = 0$ and

$$\boxed{\;\int V_2\,dt = k\int V_1\,dt\;}$$

*In words: the filter throws away the shape but preserves the area — the time-integrated postsynaptic deflection is exactly $k$ times the time-integrated presynaptic one.* This is exact, not an approximation, and it is the cleanest way to see what a gap junction does with a spike.

**Now do the accounting on a real presynaptic waveform.** An action potential is about 100 mV tall and 1 ms wide: area $\approx +100$ mV·ms. The afterhyperpolarization that follows it is about 10 mV deep and 100 ms long: area $\approx -1000$ mV·ms. The spike is ten times taller and the AHP has **ten times the area**, so

$$\int V_2\,dt = k\,(100 - 1000)\ \text{mV·ms} = -900k\ \text{mV·ms} < 0 .$$

$$\boxed{\;\textbf{The net effect of a presynaptic spike on an electrically coupled neighbour is hyperpolarizing.}\;}$$

**This is the result the lesson exists for.** It is why gap-junction coupling between inhibitory interneurons is often described as functionally inhibitory even though the junction is a passive resistor with no sign-inverting element anywhere in it. The inversion is not in the synapse; it is in the *waveform*, read through a filter that scores area rather than amplitude.

### Rate the two side by side

| | Chemical synapse ([2.1](02-01-chemical-synaptic-transmission.md), [2.2](02-02-neurotransmitters-receptors.md)) | Electrical synapse |
|---|---|---|
| **Delay** | 0.5–1 ms, almost all of it machinery | < 0.1 ms; no machinery to wait for |
| **Direction** | one way, structurally | both ways; rectifying only if heterotypic |
| **Gain** | large — the presynaptic spike commands the *postsynaptic* batteries | none: $k<1$ strictly, typically 0.01–0.2 |
| **Sign** | either; the receptor decides | cannot invert — yet **net effect is usually inhibitory** (area theorem) |
| **Frequency response** | faithful to fast events; short-term dynamics can shape it | low-pass, $f_c \approx 15$–30 Hz; spikes attenuated ~10× beyond $k$ |
| **Plasticity** | rich, rapid, synapse-specific ([4.1](04-01-plasticity-ltp-ltd.md)) | modulated, not silent: pH, Ca$^{2+}$, PKA, dopamine |
| **What passes** | information only | ions *and* small molecules up to ~1 kDa |
| **What it is for** | computation: sign, gain, learning | synchrony, speed, averaging, chemical sharing |

## Picture

![Panel a is the equivalent circuit of two electrically coupled neurons: a junctional resistance links the two cells, and each cell has its own membrane resistance and membrane capacitance to ground, so the pair forms a resistive divider loaded by a capacitor. The coupling coefficient is the divider ratio, about seven percent for the values shown, and the postsynaptic resistance and capacitance give a coupling time constant near nine milliseconds and a cutoff near seventeen hertz. Panel b shows the consequence: a presynaptic trace with a tall narrow hundred-millivolt spike lasting one millisecond followed by a shallow ten-millivolt afterhyperpolarization lasting a hundred milliseconds, and beneath it the postsynaptic trace on a hundredfold expanded voltage scale, where the spikelet and the slow trough are the same size, so the brief large spike and the slow small afterhyperpolarization transfer equally well and the time integral of the response is net hyperpolarizing.](assets/02-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — coupling arithmetic, and a charge check).** Two coupled cortical interneurons. Cell 2 has input resistance $R_2 = 150$ M$\Omega$ and time constant $\tau_m = 10$ ms; the junction has $g_j = 0.5$ nS. (a) Find $k$. (b) Find $\tau_c$ and $f_c$. (c) Verify the spikelet amplitude two independent ways.

**(a)** $R_j = 1/g_j = 2\ \text{G}\Omega$, so

$$k = \frac{R_2}{R_j+R_2} = \frac{150}{2000+150} = \mathbf{0.070}.$$

Check with conductances: $g_2 = 1/(150\ \text{M}\Omega) = 6.67$ nS, and $0.5/(0.5+6.67) = 0.0698$ ✓.

**(b)** $C_2 = \tau_m/R_2 = (10\ \text{ms})/(150\ \text{M}\Omega) = 66.7$ pF, and

$$\tau_c = \frac{R_jR_2}{R_j+R_2}C_2 = (139.5\ \text{M}\Omega)(66.7\ \text{pF}) = \mathbf{9.3\ \text{ms}}, \qquad f_c = \frac{1}{2\pi(9.3\ \text{ms})} = \mathbf{17\ \text{Hz}}.$$

Note $\tau_c$ came out just below $\tau_m = 10$ ms, as promised — the junction is such a poor conductor that it barely loads cell 2 at all.

**(c)** *Filter route.* A rectangular presynaptic pulse of amplitude $A$ and duration $T$ drives $\tau_c\dot V_2 + V_2 = kA$, so $V_2(T) = kA\bigl(1-e^{-T/\tau_c}\bigr)$. For a 100 mV spike of $T = 1$ ms:

$$V_2 = (0.070)(100)\bigl(1 - e^{-1/9.3}\bigr) = (6.98)(0.1019) = \mathbf{0.71\ \text{mV}}.$$

*Charge route.* During the spike the junctional current is $I_j = g_j(V_1-V_2) \approx (0.5\ \text{nS})(100\ \text{mV}) = 50$ pA, delivered for 1 ms:

$$\Delta V_2 = \frac{Q}{C_2} = \frac{(50\ \text{pA})(1\ \text{ms})}{66.7\ \text{pF}} = \frac{50\ \text{fC}}{66.7\ \text{pF}} = \mathbf{0.75\ \text{mV}},$$

slightly higher because it ignores the leak out through $R_2$ during the millisecond. The two agree, and the charge version says plainly what happened: **a 100 mV spike hands its neighbour 50 femtocoulombs, and 50 femtocoulombs is not much.**

Against the DC coupling coefficient of 7.0 percent, the spike transfers at $0.71/100 = \mathbf{0.7}$ **percent** — a further tenfold loss, purely from being brief.

**Example 2 (why you would care — how a resistor becomes an inhibitory synapse).** Same cells. The presynaptic spike is followed by a 10 mV afterhyperpolarization lasting 100 ms. (a) How much of the AHP transfers? (b) Compare the two deflections, and the two areas. (c) What does a network of such cells do?

**(a)** Now $T/\tau_c = 100/9.3 = 10.8$, so $e^{-T/\tau_c} \approx 2\times10^{-5}$ and the filter reaches steady state:

$$V_2 = -k(10\ \text{mV}) = \mathbf{-0.70\ \text{mV}} ,$$

the full 7.0 percent.

**(b)** Set them next to each other:

| Presynaptic event | Amplitude | Duration | Transferred | Effective transfer |
|---|---|---|---|---|
| Action potential | 100 mV | 1 ms | $+0.71$ mV | 0.7 percent |
| Afterhyperpolarization | 10 mV | 100 ms | $-0.70$ mV | 7.0 percent |

**A signal ten times smaller produces the same postsynaptic deflection.** And by the area theorem the integrated transfer is

$$\int V_2\,dt = k\bigl(100 - 1000\bigr) = (0.070)(-900) = \mathbf{-63\ \text{mV·ms}} ,$$

**net hyperpolarizing by a factor of ten.** The spikelet is a brief blip on top of a long, decisive trough.

**(c)** Three consequences, and they are the whole functional story of electrical synapses.

**It cannot relay.** A 0.71 mV spikelet against a 15 mV distance to threshold is nothing; you would need dozens of simultaneous coupled partners, and even then the ceiling is the presynaptic voltage itself (P1 does the arithmetic). **Electrical coupling does not transmit spikes. It biases timing.**

**It synchronizes.** What *does* transfer is everything slow: the AHP, subthreshold oscillations, the slow ramp between spikes. A cell that has just fired transiently hyperpolarizes its neighbours; they recover together; they fire together on the next cycle. Coupling plus the shared slow waveform is a phase-locking mechanism, and it works at exactly the frequencies below $f_c$ where population rhythms live. This is measured in three places worth naming: **cortical and hippocampal interneuron networks**, where Cx36 junctions couple fast-spiking cells to other fast-spiking cells (coupling is largely *within* cell type) and contribute to gamma-band synchrony alongside mutual chemical inhibition; the **thalamic reticular nucleus**; and the **inferior olive**, where the entire nucleus is coupled through dendritic glomeruli and the coupling synchronizes a subthreshold rhythm of a few hertz, so that cerebellar climbing fibres fire in synchronized ensembles ([3.5](03-05-motor-control-correction.md) uses this). In every case **the coupled quantity is the slow subthreshold voltage, not the spike** — which is what the filter predicts.

**It averages.** If $N$ cells are coupled and each carries independent noise of standard deviation $\sigma$, sharing voltage pulls them toward the common mean, whose noise is $\sigma/\sqrt{N}$. The retina uses this literally: AII amacrine cells are coupled to each other and to cone bipolar cells, pooling single-photon rod signals so the shared signal outruns the independent noise — at the cost of spatial resolution, which is exactly the trade you want in dim light and not in bright. Dopamine adjusts that coupling with light level, so the pooling is turned up and down as a deliberate computation.

## Watch out

- **You might think electrical synapses are for speed, so they relay spikes.** They are fast, and they relay spikes *badly* — a 100 mV, 1 ms action potential arrives as a sub-millivolt blip. The speed argument is real but narrow: it pays where the whole circuit is two or three synapses long and a millisecond is fitness, which is why the classic cases are escape reflexes. The **Mauthner cell** in fish, which triggers the C-start escape, receives auditory afferents through *mixed* synapses — the same terminal makes both an electrical and a chemical contact — and the electrical component is the one that arrives first. Everywhere else, coupling is about slow signals.

- **You might read "no sign inversion" as "excitatory."** The junction cannot invert anything, and the net effect of a presynaptic spike on the partner is nevertheless **inhibitory**, because the AHP has ten times the area of the spike and the filter preserves area. Sign is a property of the waveform pair, not of the conductance.

- **You might think gap junctions are not plastic, so they are dumb pipes.** That is a half-truth and it is the half that gets repeated. Junctional conductance is closed by intracellular acidification and by high intracellular Ca$^{2+}$ — which is a protective mechanism, uncoupling a dying cell from its neighbours before it drains them — and it is modulated by connexin phosphorylation downstream of dopamine and other cAMP-linked receptors ([2.2](02-02-neurotransmitters-receptors.md), machinery in [molecular-cell-biology 2.2](../../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md)). Activity-dependent long-term *depression* of electrical coupling has been demonstrated in the inferior olive and on the Mauthner cell. The honest statement is that gap junctions are modulated on the timescale of minutes to hours by global signals, while chemical synapses are modified in seconds and **synapse by synapse** — and it is the specificity, not the existence of change, that is the real difference.

- **You might read asymmetric coupling as rectification.** $k_{1\to2}/k_{2\to1} = R_2/R_1$ for large $R_j$, so two cells with a threefold difference in input resistance show threefold asymmetric coupling through a perfectly ohmic junction. Rectification is a real and distinct phenomenon (heterotypic connexons), but it has to be shown against this baseline.

- **You might expect electrical coupling to be a primitive feature that vertebrates outgrew.** It is widespread in *immature* circuits — clusters of sister neurons from the same radial clone are electrically coupled before they are chemically connected — and it is then largely replaced as chemical synapses mature. **The ordering is informative rather than embarrassing:** the early coupling shares depolarization and second messengers between cells that will become partners, and helps decide which cells those are ([2.5](02-05-development-and-wiring.md)).

## One-liner

> A gap junction is a resistive divider loaded by the postsynaptic capacitance, so it can only attenuate ($k<1$) and it attenuates fast signals hardest — which means it fails to relay spikes, transfers the slow afterhyperpolarization at full strength, and therefore acts as a net *inhibitory*, synchronizing connection made entirely out of a hole in a membrane.

## Problems

**P1 (🟢)** Two interneurons are coupled by a junction with $R_j = 1.5$ G$\Omega$. Cell A has input resistance $R_A = 200$ M$\Omega$; cell B has $R_B = 100$ M$\Omega$. Cell B rests at $-65$ mV with threshold $-50$ mV.

(a) Compute $k_{A\to B}$ and $k_{B\to A}$ and explain the asymmetry without invoking rectification.
(b) Cell A is held 20 mV above rest. What steady depolarization does cell B see?
(c) How many identical partners, each held 20 mV above rest and each coupled to B by the same $R_j$, are needed to bring B to threshold? Compare with the naive answer obtained by dividing, and say what goes wrong with the naive answer.
(d) Now suppose the partners are held only 5 mV above rest. How many are needed?

**P2 (🟡, bridges to [circuits 3.2](../../circuits/lessons/03-02-first-order-rc-rl-transients.md) and [signals-systems 2.5](../../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md))** A postsynaptic neuron has $R_2 = 150$ M$\Omega$ and $C_2 = 60$ pF; the junction is $R_j = 1$ G$\Omega$. Its partner fires an action potential of 90 mV lasting 1.0 ms, followed by an afterhyperpolarization of 12 mV lasting 120 ms. Treat both as rectangular and take the presynaptic voltage as imposed.

(a) Compute $k$, $\tau_c$ and $f_c$.
(b) Compute the postsynaptic deflection produced by the spike and by the afterhyperpolarization. Which is larger, and by how much is the presynaptic AHP smaller than the presynaptic spike?
(c) Compute the time-integrated postsynaptic response, and state the sign of the net effect.
(d) The partner also carries a 3 mV subthreshold oscillation at 40 Hz. Compute how much of *that* transfers, and compare its transfer efficiency with the spike's. In one sentence, say what this predicts about what a coupled network does.

<details>
<summary>Solutions</summary>

**P1 (a)** The divider from the sending node onward contains only $R_j$ and the *receiving* cell's input resistance:

$$k_{A\to B} = \frac{R_B}{R_j+R_B} = \frac{100}{1500+100} = \frac{100}{1600} = \mathbf{0.0625}$$

$$k_{B\to A} = \frac{R_A}{R_j+R_A} = \frac{200}{1500+200} = \frac{200}{1700} = \mathbf{0.1176}$$

**Coupling is 1.88 times stronger from B to A than from A to B**, through a junction that is a plain ohmic resistor. The reason: $k$ is set by how much of the series resistance belongs to the *receiver*, and A's membrane is twice as resistive as B's, so the same junctional current makes twice the voltage in A. **Asymmetry here is a property of the two cells, not of the junction** — the ratio is $k_{A\to B}/k_{B\to A} \approx R_B/R_A$ whenever $R_j$ dominates.

**(b)** $$\Delta V_B = k_{A\to B}(20\ \text{mV}) = (0.0625)(20) = \mathbf{1.25\ \text{mV}}.$$

Against the 15 mV that B needs to reach threshold, that is **8 percent of the way**, from a partner held 20 mV depolarized — a stronger and far longer stimulus than any real presynaptic event.

**(c)** Do not just divide, because each added junction is an added *conductance* onto cell B and shunts it — the same conductance-loading argument that makes synaptic summation sublinear in [2.3](02-03-synaptic-integration.md). With $n$ partners each at $V_{\text{pre}} = 20$ mV, cell B's steady voltage is the conductance-weighted average of the sources it sees:

$$\Delta V_B = \frac{n g_j V_{\text{pre}}}{g_B + n g_j}, \qquad g_j = \frac{1}{1.5\ \text{G}\Omega} = 0.667\ \text{nS}, \quad g_B = \frac{1}{100\ \text{M}\Omega} = 10\ \text{nS}.$$

Set $\Delta V_B = 15$ mV:

$$20\,n g_j = 15\,(g_B + n g_j) \;\Longrightarrow\; 5\,n g_j = 15 g_B \;\Longrightarrow\; n g_j = 3 g_B = 30\ \text{nS} \;\Longrightarrow\; n = \frac{30}{0.667} = \mathbf{45}.$$

Check: $n=45$ gives $ng_j = 30$ nS and $\Delta V_B = (30)(20)/(10+30) = 15$ mV ✓.

**The naive answer is $15/1.25 = 12$**, and it is wrong by nearly a factor of four. Twelve partners actually give

$$\Delta V_B = \frac{(8)(20)}{10+8} = \mathbf{8.9\ \text{mV}} ,$$

not 15. Each new junction contributes numerator *and* denominator, so coupling summates strongly sublinearly and saturates: as $n\to\infty$, $\Delta V_B \to V_{\text{pre}} = 20$ mV and no further.

**(d)** **No number of them.** The ceiling is $V_{\text{pre}} = 5$ mV, which is below the 15 mV needed, so $\Delta V_B < 5$ mV for every $n$. This is the no-gain statement in its sharpest form: **an electrical synapse cannot make a signal bigger than the one that entered it**, so if the presynaptic depolarization would not fire the cell, no amount of coupling will.

**P2 (a)** $$k = \frac{R_2}{R_j+R_2} = \frac{150}{1000+150} = \mathbf{0.130}$$

$$\frac{R_jR_2}{R_j+R_2} = \frac{(1000)(150)}{1150} = 130.4\ \text{M}\Omega, \qquad \tau_c = (130.4\ \text{M}\Omega)(60\ \text{pF}) = \mathbf{7.83\ \text{ms}}$$

$$f_c = \frac{1}{2\pi\tau_c} = \frac{1}{2\pi(7.83\times10^{-3})} = \mathbf{20.3\ \text{Hz}}$$

**(b)** Spike, $T/\tau_c = 1.0/7.83 = 0.1278$:

$$V_2 = kA\bigl(1-e^{-T/\tau_c}\bigr) = (0.130)(90)\bigl(1-e^{-0.1278}\bigr) = (11.74)(0.1200) = \mathbf{1.41\ \text{mV}}$$

Afterhyperpolarization, $T/\tau_c = 120/7.83 = 15.3$, so the exponential is negligible and the filter saturates:

$$V_2 = -k(12) = \mathbf{-1.57\ \text{mV}}$$

**The afterhyperpolarization produces the larger deflection — 1.57 mV against 1.41 mV — even though the presynaptic AHP is 7.5 times smaller than the presynaptic spike.** In transfer efficiency: $1.41/90 = 1.6$ percent for the spike, $1.57/12 = 13.0$ percent for the AHP, the latter being the full DC coupling coefficient.

**(c)** By the area theorem, $\int V_2\,dt = k\int V_1\,dt$:

$$\int V_1\,dt = (90)(1.0) + (-12)(120) = 90 - 1440 = -1350\ \text{mV·ms}$$

$$\int V_2\,dt = (0.130)(-1350) = \mathbf{-176\ \text{mV·ms}}$$

**Net inhibitory, by a factor of 15 in integrated area.** The presynaptic cell's spike leaves its coupled neighbour, on balance, further from firing than before.

**(d)** For a sinusoid, use the magnitude response:

$$|H(f)| = \frac{k}{\sqrt{1+(f/f_c)^2}} = \frac{0.130}{\sqrt{1+(40/20.3)^2}} = \frac{0.130}{\sqrt{4.88}} = \frac{0.130}{2.21} = 0.0590$$

$$\Delta V_2 = (0.0590)(3\ \text{mV}) = \mathbf{0.177\ \text{mV}}$$

Small — but compare efficiencies: the 40 Hz oscillation transfers at **5.9 percent** against the spike's **1.6 percent**. **A signal 30 times smaller than the spike is transmitted almost four times more efficiently.**

*What it predicts:* the network shares subthreshold rhythm, not spikes. Each cell's firing is nudged by a persistent, correctly-phased fraction of a millivolt rather than driven by its neighbours' action potentials — which is a phase-locking mechanism, not a relay. A coupled population therefore **synchronizes at frequencies below $f_c$** and does not propagate individual spikes at all, which is exactly what is observed in cortical fast-spiking interneuron networks during gamma and in the inferior olive at a few hertz. [2.6](02-06-circuit-motifs-computation.md) puts this to work.

*(Caveat worth stating: rectangular waveforms are a caricature — a real spike is roughly triangular and a real AHP decays exponentially. But the area theorem is exact for any waveform, so the sign and the order of magnitude of the net effect do not depend on the caricature at all. Only the peak amplitudes do.)*

</details>

## Flashback

**From Lesson 2.2 (neurotransmitters and receptors):** A brainstem neuron rests at $-62$ mV with threshold $-48$ mV and a leak conductance $g_L = 5$ nS at $E_L = -62$ mV. It expresses two acetylcholine receptors. The **nicotinic** receptor is a non-selective cation channel with $P_{\text{Na}}:P_{\text{K}} = 1:1$; the **muscarinic M2** receptor is a GPCR that opens GIRK K$^+$ channels. Take $RT/F = 26.7$ mV, $[\text{Na}^+]_o = 145$, $[\text{Na}^+]_i = 12$, $[\text{K}^+]_o = 4$, $[\text{K}^+]_i = 140$ mM.

(a) Compute the reversal potential of each receptor's conductance.
(b) A cholinergic input activates 2 nS of nicotinic conductance. Does the cell fire?
(c) The same input also activates 0.8 nS of GIRK conductance, more slowly. Recompute the steady voltage with both active, and say what happened.
(d) State in one sentence what sets the sign of a cholinergic synapse.

<details>
<summary>Solution</summary>

**(a)** The nicotinic channel passes both cations, so its reversal potential is the Goldman voltage of the mix:

$$E_{\text{nic}} = 26.7\ \ln\frac{P_{\text{Na}}[\text{Na}^+]_o + P_{\text{K}}[\text{K}^+]_o}{P_{\text{Na}}[\text{Na}^+]_i + P_{\text{K}}[\text{K}^+]_i} = 26.7\ \ln\frac{145+4}{12+140} = 26.7\ \ln(0.9803) = \mathbf{-0.5\ \text{mV}}$$

Essentially 0 mV, as for AMPA — **equal permeability to a strongly inward-driving ion and a strongly outward-driving one lands you near zero.**

The GIRK conductance is pure K$^+$:

$$E_{\text{K}} = 26.7\ \ln\frac{4}{140} = 26.7(-3.555) = \mathbf{-94.9\ \text{mV}}$$

**(b)** Steady voltage is the conductance-weighted average of the batteries:

$$V_m = \frac{g_LE_L + g_{\text{nic}}E_{\text{nic}}}{g_L+g_{\text{nic}}} = \frac{(5)(-62)+(2)(-0.5)}{7} = \frac{-310-1.0}{7} = \mathbf{-44.4\ \text{mV}}$$

That is **above threshold ($-48$ mV), so the cell fires.**

**(c)** Add the third battery:

$$V_m = \frac{(5)(-62)+(2)(-0.5)+(0.8)(-94.9)}{5+2+0.8} = \frac{-310-1.0-75.9}{7.8} = \frac{-386.9}{7.8} = \mathbf{-49.6\ \text{mV}}$$

**Below threshold: the spike is vetoed.** The same transmitter, acting on the same cell, first excites it through an ionotropic receptor within a millisecond and then shuts it off through a metabotropic one over the following hundreds of milliseconds — because the GPCR route needs a G protein, an effector and a diffusing messenger before any channel moves ([2.2](02-02-neurotransmitters-receptors.md)).

For completeness, muscarinic activation alone: $(-310-75.9)/5.8 = -66.5$ mV, a hyperpolarization of 4.5 mV.

**(d) The receptor sets the sign, not the transmitter.** Acetylcholine is an address; whether it depolarizes or hyperpolarizes depends entirely on which battery the receptor at that address connects to — here, one receptor reaching for $E \approx 0$ mV and the other for $E_{\text{K}} = -95$ mV. It is the same fact that lets acetylcholine contract skeletal muscle and slow the heart ([physiology 1.5](../../physiology/lessons/01-05-neuromuscular-autonomic-transmission.md)).

</details>

## Connections

- **Backward:** the divider is [2.3](02-03-synaptic-integration.md)'s conductance arithmetic with a resistor in place of a receptor, and P1(c) is its sublinear-summation argument again; $\tau_c \approx \tau_m$ is [1.5](01-05-cable-theory-conduction.md)'s time constant doing a second job; the missing 0.5 ms is exactly the machinery [2.1](02-01-chemical-synaptic-transmission.md) accounted for.
- **Forward:** [2.5](02-05-development-and-wiring.md) needs the early coupling of sister neurons and the second messengers that cross with the current; [2.6](02-06-circuit-motifs-computation.md) uses gap-junction synchrony alongside mutual inhibition as the standard recipe for a population rhythm; [3.5](03-05-motor-control-correction.md) rests on inferior-olive coupling for synchronized climbing-fibre signals.
- **Sideways:** the whole derivation is [circuits 1.4](../../circuits/lessons/01-04-voltage-current-dividers.md) plus [circuits 3.2](../../circuits/lessons/03-02-first-order-rc-rl-transients.md), and $H(s) = k/(1+s\tau_c)$ is the textbook single-pole low-pass of [signals-systems 2.5](../../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md) — worth noticing that a biological structure discovered by dye-filling is fully characterized by a first-year circuits result. Cardiac gap junctions, where the coupling *is* strong enough to relay and the whole ventricle behaves as one syncytium, are [physiology 2.1](../../physiology/lessons/02-01-cardiac-electrophysiology.md); the contrast with neuronal coupling is entirely a matter of how large $g_j$ is relative to $g_2$.
