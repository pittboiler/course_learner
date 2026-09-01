# Neuroscience · Lesson 1.4: The Hodgkin–Huxley model

> ⏱ ~15 min · Module 1: The neuron & the action potential · Builds on: [1.3](01-03-the-action-potential.md), [1.2](01-02-resting-membrane-potential.md) · Unlocks: 1.5 (cable theory & conduction)

## Why this matters

[1.3](01-03-the-action-potential.md) ended with a *mechanism*: a fast inward $\text{Na}^+$ conductance with two gates of opposite voltage dependence, running away against a slow non-inactivating $\text{K}^+$ conductance. This lesson turns that sentence into four differential equations, and the equations do something the sentence cannot — **they predict.**

Three things make this the most important model in the subject, and only the first is usually mentioned.

1. **It closed the loop.** Every parameter was fixed by voltage-clamp measurements made under conditions where the membrane could not spike. Hodgkin and Huxley then integrated the equations with the clamp released and got a spike — right amplitude, right width, right threshold, right refractory period, right afterhyperpolarization, right conduction velocity — **with no free parameters left to adjust.** That is a different epistemic act from fitting a curve.
2. **The exponents were a structural prediction.** The $n^4$ and $m^3h$ that make the equations work were derived from a guess about how many independent things must move before a channel conducts. Nobody could see a channel. Thirty-five years later, cloning and crystallography showed $\text{K}^+$ channels are **tetramers** with four identical voltage sensors, and $\text{Na}^+$ channels have **four homologous domains, three driving activation and the fourth triggering inactivation.** A curve fit retrodicted protein architecture.
3. **It is the bridge to dynamical systems.** Once you have the equations you can stop narrating the spike and start asking what kind of object it is in state space. The answer — an excitable system whose rest state destabilizes into a limit cycle through a **Hopf bifurcation** — is what lets you predict *classes* of neuronal behaviour rather than one cell's trace.

**This is the most mathematical lesson in the course. It is also the one that makes the rest of it cheap**, because every later conductance-based model — cardiac ([physiology 2.1](../../physiology/lessons/02-01-cardiac-electrophysiology.md)), dendritic ([2.3](02-03-synaptic-integration.md)), any of the dozens of currents mammalian neurons express — is this template with more branches.

## The idea

**Start from [1.1](01-01-neuron-as-a-device.md)'s equivalent circuit and change exactly one thing.** That lesson wrote current conservation on a patch of membrane as $C\dot V = I_{\text{in}} - g_L(V-E_L)$: a capacitor in parallel with one leak branch. Hodgkin and Huxley added two more parallel branches — one for $\text{Na}^+$, one for $\text{K}^+$ — and made their conductances functions of voltage and time. **Nothing structural changed. Kirchhoff's current law is still the whole of the first equation.** The model is the answer to "what are $g_{\text{Na}}(V,t)$ and $g_{\text{K}}(V,t)$?", and nothing else.

**What a gating variable is — and this is the centrepiece, so read it slowly.** A gating variable is **a probability**: $n$ is the probability that *one* independent gating subunit is in its permissive configuration. It is not a fraction of the conductance, not a fudge factor, and not "how open the channel is."

Suppose a channel conducts only when **all** of its $k$ subunits are simultaneously permissive, and suppose the subunits move independently. Then

$$P(\text{channel conducting}) = n^{k}$$

and the conductance of a whole membrane, which averages over an enormous population of channels, is $\bar g\, n^{k}$. **The exponent is a count of subunits, not a shape parameter.** Hodgkin and Huxley found that $k = 4$ fitted the $\text{K}^+$ current and $k = 3$ (times one independent inactivation particle $h$) fitted the $\text{Na}^+$ current.

**Why they needed an exponent at all — the observation that forced it.** Step the voltage and watch the $\text{K}^+$ conductance rise. A first-order process, $\dot n = (n_\infty - n)/\tau$, rises as $1 - e^{-t/\tau}$: **fastest at the very first instant**, then decelerating. The measured conductance does the opposite. It sits at essentially nothing for a fraction of a millisecond, then accelerates, then levels off — an **S-shape with a delayed foot**. That delay is not slowness; a single exponential with a longer $\tau$ still starts at full speed. **No first-order process of any rate can produce a delayed foot, so the potassium conductance cannot be one thing turning on.**

Raise the same rising exponential to the fourth power and the foot appears for free:

$$\frac{g_{\text{K}}(t)}{\bar g_{\text{K}}} = n_\infty^4\big(1 - e^{-t/\tau_n}\big)^{4}$$

At small $t$ this behaves like $(t/\tau_n)^4$ — **zero initial slope and zero initial curvature.** Four independent things must each happen before anything conducts, and waiting for the slowest of four is exactly what a delay is. *In words: the exponent is where the sigmoid comes from, and the sigmoid is what was measured.*

**Two ways to write the kinetics, and one of them is the one to think in.** Each gating variable obeys a first-order reaction between a non-permissive and a permissive state:

$$\frac{dn}{dt} = \alpha_n(V)\,(1-n) \;-\; \beta_n(V)\,n$$

with $\alpha_n(V)$ the rate of becoming permissive and $\beta_n(V)$ the rate of leaving. That is the form Hodgkin and Huxley wrote and the form you must use to *fit* data. But collect terms:

$$\frac{dn}{dt} = -(\alpha_n+\beta_n)\left[n - \frac{\alpha_n}{\alpha_n+\beta_n}\right] \;\Longrightarrow\; \boxed{\;\tau_n(V)\,\frac{dn}{dt} = n_\infty(V) - n\;}$$

$$n_\infty(V) = \frac{\alpha_n}{\alpha_n+\beta_n}, \qquad \tau_n(V) = \frac{1}{\alpha_n+\beta_n}$$

**This second form is the one to reason in, because it separates the two questions that actually matter:** $n_\infty(V)$ says **where the gate is heading** at the present voltage, and $\tau_n(V)$ says **how fast it gets there.** A gating variable is a first-order low-pass filter chasing a voltage-dependent target — the same equation as [1.1](01-01-neuron-as-a-device.md)'s membrane relaxation, and the same equation as an RC transient ([circuits 3.2](../../circuits/lessons/03-02-first-order-rc-rl-transients.md)), except that both the target and the time constant move with $V$.

**Everything about the spike now follows from one fact: $m$ is fast, $h$ and $n$ are slow.** At rest $\tau_m = 0.24$ ms while $\tau_h = 8.5$ ms and $\tau_n = 5.5$ ms — a factor of 20 to 35. Even at the peak of the spike, where all three speed up, $m$ is still four to seven times faster than the others.

Walk the spike through in those terms, and notice you never need the word "then":

| Phase | $m$ (fast) | $h$, $n$ (slow) |
|---|---|---|
| Depolarize past threshold | $m$ jumps essentially instantly to $m_\infty(V)$, which climbs steeply | still at their **resting** values — they have not noticed |
| Upstroke | $m$ tracks $V$ in real time; $g_{\text{Na}}$ explodes; $V \to E_{\text{Na}}$ | still lagging; $h$ is only beginning to fall |
| Peak | $m_\infty \approx 1$, saturated | $h$ finally falls, $n$ finally rises — **both act to repolarize** |
| Repolarization | $m$ collapses instantly as $V$ falls | $h$ is still low and $n$ still high — **this is the refractory period** |
| Afterhyperpolarization | $m \approx 0$ | $n$ decays back over several ms, holding $V$ near $E_{\text{K}}$ |

**The refractory period is not a separate mechanism. It is the slow variables still being where the spike left them**, and its duration is $\tau_h$ and $\tau_n$ and nothing else. The same sentence explains one-way propagation ([1.5](01-05-cable-theory-conduction.md)) and the ceiling on firing rate ([3.1](03-01-transduction-neural-coding.md)).

## The formal version

**The system.** Four coupled ODEs, one for voltage and one per gate. Outward current positive; $V$ in mV, $t$ in ms.

$$C_m\frac{dV}{dt} \;=\; I_{\text{inj}} \;-\; \underbrace{\bar g_{\text{Na}}\,m^{3}h\,(V-E_{\text{Na}})}_{I_{\text{Na}}} \;-\; \underbrace{\bar g_{\text{K}}\,n^{4}\,(V-E_{\text{K}})}_{I_{\text{K}}} \;-\; \underbrace{g_L\,(V-E_L)}_{I_L}$$

$$\tau_m(V)\dot m = m_\infty(V)-m, \qquad \tau_h(V)\dot h = h_\infty(V)-h, \qquad \tau_n(V)\dot n = n_\infty(V)-n$$

*In words: Kirchhoff's law on [1.1](01-01-neuron-as-a-device.md)'s circuit, with three gates each relaxing toward a voltage-dependent target at a voltage-dependent rate.*

**Squid giant axon at 6.3 °C, modern parameterization:**

| Symbol | Value | Meaning |
|---|---|---|
| $C_m$ | $1\ \mu\text{F}/\text{cm}^2$ | membrane capacitance per unit area |
| $\bar g_{\text{Na}}$ | $120\ \text{mS}/\text{cm}^2$ | $\text{Na}^+$ conductance with every channel open |
| $\bar g_{\text{K}}$ | $36\ \text{mS}/\text{cm}^2$ | $\text{K}^+$ conductance with every channel open |
| $g_L$ | $0.3\ \text{mS}/\text{cm}^2$ | leak (voltage-independent) |
| $E_{\text{Na}},\,E_{\text{K}},\,E_L$ | $+50,\ -77,\ -54.4$ mV | reversal potentials ([1.2](01-02-resting-membrane-potential.md)) |

with rest at $V \approx -65$ mV. **The $\text{Na}^+$ and $\text{K}^+$ maxima are 400 and 120 times the leak** — the membrane's dynamic range is enormous, and gating is what keeps almost all of it switched off almost all of the time.

**The rate functions** (all in $\text{ms}^{-1}$, $V$ in mV). You do not need to memorize these; you need to know they are empirical fits to clamp data and nothing more:

$$\alpha_m = \frac{0.1\,(V+40)}{1-e^{-(V+40)/10}}, \qquad \beta_m = 4\,e^{-(V+65)/18}$$
$$\alpha_h = 0.07\,e^{-(V+65)/20}, \qquad \beta_h = \frac{1}{1+e^{-(V+35)/10}}$$
$$\alpha_n = \frac{0.01\,(V+55)}{1-e^{-(V+55)/10}}, \qquad \beta_n = 0.125\,e^{-(V+65)/80}$$

**A sign-convention warning worth taking seriously.** Hodgkin and Huxley wrote $V$ as the *displacement from rest with depolarization negative*, so their paper carries $V_{\text{Na}} = -115$ mV and $V_{\text{K}} = +12$ mV. Every modern statement, including the one above, flips the sign and shifts the origin to an absolute scale. **Compare a formula across two sources without checking which convention it uses and you will get a model that hyperpolarizes when it should spike.**

Evaluated at rest ($V = -65$ mV), the fits give the numbers plotted in the figure:

| Gate | $x_\infty(-65)$ | $\tau_x(-65)$ | half-point of $x_\infty$ |
|---|---|---|---|
| $m$ | 0.053 | **0.24 ms** | $-40$ mV |
| $h$ | 0.596 | 8.5 ms | $-62$ mV |
| $n$ | 0.318 | 5.5 ms | $-53.5$ mV |

*(These are the ones to hold: $m$ nearly shut and very fast, $h$ half available and slow, $n$ a third on and slow.)*

**The exponent, made quantitative.** If the conductance is $\bar g n^{k}$, then it reaches half its maximum when $n = 2^{-1/k}$, not when $n = 0.5$:

$$k=1:\; n = 0.500 \qquad k=2:\; n = 0.707 \qquad k=4:\; n = 0.841$$

$n_\infty$ crosses 0.5 at about $-53.5$ mV, but it does not reach 0.841 until about $-19$ mV. **So the exponent shifts the effective potassium activation curve about 35 mV depolarized and steepens it, on top of producing the delay.** Two independent signatures in the data — the shifted, steepened activation curve *and* the sigmoidal onset — are fitted by one integer.

**The retrodiction, stated carefully because it is easy to overclaim.** Hodgkin and Huxley were explicit that their particles were a formal device and that other schemes would fit equally well. What happened next:

- **$n^4$.** Voltage-gated $\text{K}^+$ channels are **tetramers**: four identical subunits, each carrying its own S4 voltage sensor, arranged around a central pore. Four independent sensors is exactly what $n^4$ asserts.
- **$m^3h$.** Voltage-gated $\text{Na}^+$ channels are a single polypeptide folded into **four homologous domains**, each with an S4. Three of them drive activation; the fourth is coupled to fast inactivation, which is executed by a separate hinged-lid motif on the linker between domains III and IV. **A "three plus one independent particle" structure, guessed from the shape of a current, found in the protein.**

**Where the retrodiction is honestly imperfect**, and this matters more than the triumph: real $\text{Na}^+$ activation and inactivation are **not** independent — a channel must activate before it can inactivate fast, which HH's factorized $m^3h$ denies. The model gets the macroscopic current right while getting the state diagram wrong, and modern work uses Markov schemes with coupled states. **HH is a phenomenological description at the level of currents that happens to have been structurally suggestive; it is not a mechanism.**

**Temperature.** Gating rates carry a $Q_{10}$ of about 3, so all six rate functions are multiplied by

$$\phi = 3^{(T-6.3)/10}, \qquad \phi(37\ \text{°C}) = 3^{3.07} = 29.2 .$$

**Every gate runs about 29 times faster at body temperature than in Hodgkin and Huxley's cold squid** — which is why a mammalian spike is under a millisecond wide and theirs was several. The reversal potentials barely move; the kinetics move by a factor of thirty.

### The dynamical-systems reading

Four dimensions is too many to see. **Two facts let you throw two of them away.**

1. $\tau_m$ never exceeds 0.5 ms at any voltage, an order of magnitude below $\tau_h$ and $\tau_n$ near rest. So set $m = m_\infty(V)$ — the fast gate is always already where it is going.
2. Along the actual spike trajectory, $h$ and $n$ move in opposite directions by nearly equal amounts: $h+n$ stays near 0.9, and the linear fit $h \approx 0.89 - 1.1\,n$ tracks the real trajectory well. So **the two slow variables collapse into one recovery variable.**

What is left is two dimensions — $V$ and $n$ — which you can draw:

$$C_m\dot V = I_{\text{inj}} - \bar g_{\text{Na}}m_\infty^3(V)\,(0.89-1.1n)(V-E_{\text{Na}}) - \bar g_{\text{K}}n^4(V-E_{\text{K}}) - g_L(V-E_L)$$
$$\tau_n(V)\,\dot n = n_\infty(V) - n$$

**The nullclines** ([dynamical-systems 1.5](../../dynamical-systems/lessons/01-05-phase-portraits.md)). The $n$-nullcline is just $n = n_\infty(V)$, a monotone rising sigmoid. **The $V$-nullcline is N-shaped**: a left branch near rest, a steeply rising middle branch, and a right branch out near $E_{\text{Na}}$. They cross once, at rest, and that crossing is a **stable fixed point**.

**Now the payoff, and it retires a misconception 1.3 could only gesture at.** [1.3](01-03-the-action-potential.md) defined threshold as the middle, unstable zero of the instantaneous $I$–$V$ curve — the curve you get by freezing the slow variables. **Freezing the slow variables is exactly taking a horizontal cut through this phase plane.** The three zeros of that $I$–$V$ curve are the three points where the horizontal line $n = n_{\text{rest}}$ crosses the N-shaped $V$-nullcline. Same object, seen from a better angle.

$$\boxed{\;\text{Threshold is a curve in state space, not a number in the membrane.}\;}$$

*In words: whether a perturbation fires the cell depends on which side of a geometric boundary the state lands on — and the state has more coordinates than voltage.* In relatives of this model with a saddle point, the boundary is literally the saddle's stable manifold, a true **separatrix**. In HH proper the left knee is very shallow, so the boundary is a *quasi*-threshold: a band about 1 mV wide within which trajectories separate. **Either way it is a property of the whole state, which is why threshold moves with recent history, with background conductance, and with how fast you got there.**

**Repetitive firing is a bifurcation.** Increase $I_{\text{inj}}$ and the $V$-nullcline lifts; the fixed point slides up and to the right along the $n$-nullcline toward the knee. Past a critical current it loses stability and a **limit cycle** appears ([dynamical-systems 2.3](../../dynamical-systems/lessons/02-03-limit-cycles.md)) — the cell fires repetitively. The fixed point is destroyed by a pair of complex eigenvalues crossing the imaginary axis: a **Hopf bifurcation** ([dynamical-systems 3.3](../../dynamical-systems/lessons/03-03-hopf-bifurcation.md)). In HH it is *subcritical*, so over a window of currents a stable rest state and a stable large-amplitude cycle coexist — the model is bistable, and a brief pulse can switch it on or off. Push the current very high and a second Hopf kills the cycle again: **depolarization block**, which is the same phenomenon [1.3](01-03-the-action-potential.md) reached from the availability curve.

**Type II versus Type I excitability, and why 2.6 will care.** The bifurcation route determines the shape of the frequency–current curve, and that shape determines what the neuron is good for.

| | **Type II** (Hopf — HH itself) | **Type I** (saddle-node on a circle) |
|---|---|---|
| Onset of firing | **discontinuous** — jumps to a nonzero rate (order 50 Hz in HH) | **continuous** from zero |
| $f$ near onset | flat | $f \propto \sqrt{I-I_c}$ |
| Subthreshold behaviour | damped oscillations, **resonant / band-pass** | no resonance, low-pass |
| Phase response to an excitatory kick | biphasic — can advance *or* delay | always advances |
| Computational character | **coincidence detector / resonator** | **integrator / rate coder** |
| Synchronization by mutual excitation | readily synchronizes | tends not to |

The $\sqrt{\ }$ law falls out in one line. Near a saddle-node the flow through the bottleneck is $\dot x = \mu + x^2$ with $\mu \propto (I-I_c)$ ([dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md)), and the time to traverse it is

$$T = \int_{-\infty}^{\infty}\frac{dx}{\mu+x^{2}} = \frac{\pi}{\sqrt{\mu}} \;\Longrightarrow\; f = \frac{\sqrt{\mu}}{\pi} \propto \sqrt{I-I_c}.$$

**A Type I cell can encode a barely-suprathreshold input as a barely-nonzero rate; a Type II cell cannot fire slowly at all.** The biphasic phase-response curve is why Type II cells lock together under mutual excitation while Type I cells do not — the mechanistic root of the synchronization arguments in [2.6](02-06-circuit-motifs-computation.md). And the class is not fixed by the cell type: adding a slowly-inactivating A-type $\text{K}^+$ current converts a Type II neuron to Type I. **One extra conductance changes what the neuron computes.**

### What the model leaves out

Naming the omissions is not pedantry — each one is a later lesson.

- **One compartment.** No space, no propagation, no dendrites. [1.5](01-05-cable-theory-conduction.md) restores the cable; [2.3](02-03-synaptic-integration.md) restores the tree.
- **Deterministic gating.** $n$ is treated as an exact probability, valid only when the channel count is large. In a small patch, a bouton, or a spine, channel noise makes threshold genuinely stochastic and spike timing jittery.
- **No $\text{Ca}^{2+}$.** Which means no transmitter release ([2.1](02-01-chemical-synaptic-transmission.md)), no calcium-activated $\text{K}^+$ current, and therefore **no spike-frequency adaptation** — HH fires a perfectly regular train forever.
- **Two conductances.** A mammalian neuron expresses dozens: A-type, M-type, $I_h$, persistent $\text{Na}^+$, several $\text{Ca}^{2+}$ types. Each changes the bifurcation structure and hence the computation.
- **Independent $m$ and $h$**, which is false, as above.

### The method, which is the real lesson

They fitted the rate functions to voltage-clamp records, released the clamp only in the equations, and **integrated the system by hand on a mechanical desk calculator** — forward Euler, weeks of cranking for a few milliseconds of simulated axon, with no computer available. For the *propagating* spike they could not simply integrate, because propagation is a PDE ([1.5](01-05-cable-theory-conduction.md)); so they assumed a travelling wave $V(x-\theta t)$, used $\partial^2_x V = \theta^{-2}\partial_t^2 V$, and solved for the conduction velocity $\theta$ as the one value that keeps the solution from diverging. **They got 18.8 m/s. The measured value in the same axon was 21.2 m/s** — 11 percent low, from a parameter set fixed entirely by other experiments.

**That is the point of building a model.** Not to reproduce the data you fitted, but to compute a number you did not fit and then go and measure it.

## Picture

![Three stacked panels. The top panel plots the steady-state gating variables against membrane potential from minus ninety to plus forty millivolts: sodium activation rises steeply through its half-point near minus forty, sodium availability falls through its half-point near minus sixty-two, and potassium activation rises more gradually through minus fifty-three. The middle panel plots the three time constants on the same voltage axis, with the sodium activation time constant pinned below half a millisecond across the whole range while the availability and potassium time constants run to several milliseconds, peaking near rest. The bottom panel is the reduced two-variable phase plane, voltage against the recovery variable, showing an N-shaped voltage nullcline, a monotone rising recovery nullcline, a stable fixed point at their intersection marking rest, the middle branch of the N labelled as the threshold set, and two trajectories launched from rest at the same recovery value: one just left of the middle branch that curls straight back to the fixed point, and one just right of it that is swept far to the right, up the excited branch, back across the top and home below rest, tracing the shape of a spike.](assets/01-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — what the gates are actually worth, in mS/cm²).** Using $\bar g_{\text{Na}} = 120\ \text{mS}/\text{cm}^2$ and the table above: (a) compute the sodium conductance at rest; (b) compute it at $-40$ mV *at the instant the upstroke passes through*, when $h$ has not yet had time to move; (c) compare both to the leak, and say what the ratio in (b) means.

**(a)** At $V = -65$ mV, $m_\infty = 0.0529$ and $h_\infty = 0.596$:

$$m^3 = (0.0529)^3 = 1.481\times10^{-4}, \qquad m^3h = 1.481\times10^{-4}\times 0.596 = 8.82\times10^{-5}$$

$$g_{\text{Na}} = 120\times 8.82\times10^{-5} = \mathbf{0.0106\ \text{mS}/\text{cm}^2}.$$

**(b)** The upstroke takes well under a millisecond, and $\tau_h = 2.5$–8.5 ms over that range, so $h$ is still essentially 0.596 when $V$ reaches $-40$ mV. There $m_\infty = 0.5007$:

$$m^3 = (0.5007)^3 = 0.1255, \qquad m^3h = 0.1255\times0.596 = 0.0748$$

$$g_{\text{Na}} = 120\times0.0748 = \mathbf{8.98\ \text{mS}/\text{cm}^2}.$$

**(c)** Against $g_L = 0.3\ \text{mS}/\text{cm}^2$:

$$\text{at rest:}\ \frac{0.0106}{0.3} = 0.035 \qquad\qquad \text{at } -40\ \text{mV:}\ \frac{8.98}{0.3} = 30$$

$$\text{and the change over those 25 mV is a factor of } \frac{8.98}{0.0106} = \mathbf{847}.$$

**Read the three numbers as a story.** At rest the sodium branch carries about 3.5 percent of the leak's conductance — negligible, which is why [1.2](01-02-resting-membrane-potential.md) could compute $V_{\text{rest}}$ while barely mentioning it. Twenty-five millivolts later the same branch is **thirty times stiffer than the leak and completely owns the membrane**, dragging $V$ toward $E_{\text{Na}}$ regardless of what anything else wants. **An 847-fold swing from 25 mV comes entirely from cubing a steep sigmoid** — the exponent is not decoration, it is most of the nonlinearity that makes a spike possible.

**Example 2 (why you'd care — proving the exponent from a single trace).** A squid axon is held at $-100$ mV, where $n \approx 0.03$ (take it as zero), then stepped to $0$ mV, where $\alpha_n = 0.552\ \text{ms}^{-1}$ and $\beta_n = 0.0555\ \text{ms}^{-1}$. (a) Find $n_\infty$ and $\tau_n$. (b) Compute the fraction of the final potassium conductance present at $t = 0.2$ ms, and compare with a first-order conductance of the *same* time constant. (c) Compute the time to half-maximal conductance for both. (d) Say what a single well-resolved trace establishes.

**(a)** $$n_\infty = \frac{0.552}{0.552+0.0555} = \frac{0.552}{0.6075} = \mathbf{0.909}, \qquad \tau_n = \frac{1}{0.6075} = \mathbf{1.646\ \text{ms}}.$$

**(b)** With $n(0)=0$, $\;n(t) = n_\infty\big(1-e^{-t/\tau_n}\big)$, so the conductance relative to its own final value is

$$\frac{g_{\text{K}}(t)}{g_{\text{K}}(\infty)} = \left(1-e^{-t/\tau_n}\right)^{4}.$$

At $t = 0.2$ ms, $t/\tau_n = 0.1215$ and $1-e^{-0.1215} = 0.1144$:

$$\text{fourth power:}\quad (0.1144)^4 = 1.71\times10^{-4} = \mathbf{0.017\ \text{percent}}$$

$$\text{first order:}\quad (0.1144)^1 = \mathbf{11.4\ \text{percent}}$$

**A factor of 668 at the same instant, with the same time constant.** And the fourth-power curve starts with **zero slope**, since $\frac{d}{dt}n^4 = 4n^3\dot n = 0$ when $n = 0$, whereas the first-order curve starts at its maximum slope. These are not subtle differences requiring careful statistics; they are the difference between "nothing is happening yet" and "the fastest part is already over."

**(c)** Half-maximum needs $(1-e^{-t/\tau})^4 = 0.5$, i.e. $1-e^{-t/\tau} = 2^{-1/4} = 0.8409$, i.e. $e^{-t/\tau} = 0.1591$:

$$t_{1/2} = \tau_n\ln(1/0.1591) = 1.838\,\tau_n = 1.838\times1.646 = \mathbf{3.03\ \text{ms}}$$

$$\text{versus first order:}\quad t_{1/2} = 0.693\,\tau_n = \mathbf{1.14\ \text{ms}}.$$

**(d)** **One trace, resolved at the foot, fixes the exponent** — and therefore the subunit count. The onset shape is not a free parameter you tune after the fact; it is over-determined by the data, since $\tau_n$ is already pinned by the *late* part of the same trace and the *early* part then has nowhere to hide. That is why Hodgkin and Huxley could commit to an integer.

**And this is what makes the structural retrodiction non-trivial.** They were not free to pick 4 because it looked tidy. The number came out of a curve's foot, and a generation later X-ray crystallography found four subunits sitting around a pore. **Numbers extracted from the kinetics of a macroscopic current turned out to be counting molecules.** Very little in biology works this well, and it is worth knowing what it feels like when it does.

## Watch out

- **You might read the exponents as fitting fudges.** They are subunit counts under an independence assumption, and they are testable in two separate ways: they predict a delayed sigmoidal onset with **zero initial slope**, and they predict that the conductance half-point sits at $n = 2^{-1/k}$, roughly 35 mV depolarized from where $n_\infty$ itself is half. Both were measured.
- **You might read $h$ as "inactivation."** $h$ is **availability**: $h = 1$ means *not* inactivated. So $h$ **falls** with depolarization, and a rising $h$ during hyperpolarization is *removal* of inactivation. Getting this backwards inverts every prediction about post-inhibitory rebound.
- **You might treat the $\alpha,\beta$ form and the $x_\infty,\tau_x$ form as different models.** They are algebraically identical. Fit in the first; think in the second, because "where is it heading" and "how fast" are the questions that predict behaviour.
- **You might think HH is a mechanism.** It is a phenomenological description of macroscopic currents. The independence of $m$ and $h$ that it assumes is known to be wrong, and no gating variable corresponds to a measurable molecular coordinate. It earns its keep by predicting, not by being true.
- **You might expect a formula copied from the 1952 paper to work.** Their $V$ is displacement from rest with **depolarization negative**. Mixing conventions is the single most common way to break an implementation.
- **You might still be treating threshold as a number.** In the phase plane it is a curve, and the coordinates it depends on include $h$ and $n$. This is the same statement as [1.3](01-03-the-action-potential.md)'s "threshold is the middle zero of the instantaneous $I$–$V$ curve," now with the freezing made explicit as a horizontal cut.
- **You might expect the model to adapt.** It has no $\text{Ca}^{2+}$ and no calcium-activated $\text{K}^+$ current, so it fires a metronomic train indefinitely. Every adaptation phenomenon in later lessons requires a conductance HH did not include.

## One-liner

> A gating variable is the probability that one independent subunit is permissive, so $n^4$ and $m^3h$ are subunit counts rather than fudge factors — and once you note that $m$ is twenty to thirty times faster than $h$ and $n$, the four equations collapse to a two-dimensional phase plane in which the spike is a trip around an N-shaped nullcline, threshold is a curve rather than a number, and repetitive firing is a Hopf bifurcation.

## Problems

**P1 (🟢)** A potassium conductance obeys $\tau_n\dot n = n_\infty - n$ with $n_\infty = 0.90$ and $\tau_n = 1.60$ ms at the command voltage. The cell was resting where $n = 0.32$. (a) Write $n(t)$ after the step. (b) Compute $g_{\text{K}}/\bar g_{\text{K}}$ at $t = 1.0$ ms and at steady state. (c) What fraction of the final conductance is present at 1.0 ms — and why is that fraction so much smaller than the fraction of the way $n$ itself has travelled?

**P2 (🟡)** A channel conducts only when all $k$ independent subunits are permissive. (a) Show that its conductance reaches half maximum when the gating variable equals $2^{-1/k}$, and evaluate for $k = 1, 2, 4$. (b) Given $n_\infty(-20\ \text{mV}) = 0.835$ and $n_\infty(-10\ \text{mV}) = 0.879$, estimate by linear interpolation the voltage at which $g_{\text{K}}$ is half-maximal, and compare with the $-53.5$ mV at which $n_\infty$ itself is 0.5. (c) A colleague says the exponent is unfalsifiable because you can always compensate by shifting the activation curve. Rebut this in two sentences.

**P3 (🔴, optional — bridges to dynamical systems and to circuit function)** Near a saddle-node on an invariant circle the bottleneck obeys $\dot x = \mu + x^2$, with $\mu = c\,(I - I_c)$ for some constant $c > 0$. (a) Show the period of the resulting oscillation is $T = \pi/\sqrt{\mu}$, and hence that the firing rate scales as $\sqrt{I-I_c}$. (b) A Type I neuron fires at 12 Hz when driven 1.0 pA above $I_c$. What current above $I_c$ makes it fire at 48 Hz? At 6 Hz? (c) Hodgkin–Huxley is Type II: its rate jumps discontinuously to roughly 50 Hz at onset and cannot fire below that. State which of the two neurons can report a weak input as a low firing rate, what the other one signals instead, and one consequence for a population that must synchronize ([2.6](02-06-circuit-motifs-computation.md)).

<details>
<summary>Solutions</summary>

**P1 (a)** The solution of $\tau\dot n = n_\infty - n$ from $n(0) = n_0$ is

$$n(t) = n_\infty - (n_\infty - n_0)e^{-t/\tau_n} = 0.90 - 0.58\,e^{-t/1.60}.$$

**(b)** At $t = 1.0$ ms, $t/\tau_n = 0.625$ and $e^{-0.625} = 0.5353$:

$$n(1.0) = 0.90 - 0.58(0.5353) = 0.90 - 0.3105 = 0.5895$$

$$\frac{g_{\text{K}}}{\bar g_{\text{K}}} = n^4 = (0.5895)^4 = \mathbf{0.1208}$$

At steady state, $n_\infty^4 = (0.90)^4 = \mathbf{0.6561}$.

**(c)** $$\frac{0.1208}{0.6561} = \mathbf{18.4\ \text{percent of final}}.$$

Meanwhile $n$ itself has travelled $\dfrac{0.5895-0.32}{0.90-0.32} = 46.5$ percent of its way — and even measured as a raw fraction of its endpoint, $0.5895/0.90 = 65.5$ percent.

**Why the gap:** the conductance is the *fourth power*, so it lags a partially-open gate badly. With $n$ at 65.5 percent of its final value, the conductance is at $0.655^4 = 18.4$ percent of its final value. **Requiring four coincident events converts a modest shortfall in each into a large shortfall in the product** — which, run forwards in time, is exactly the delayed foot. The same arithmetic in reverse is why the potassium current is still nearly absent during the sodium upstroke, and therefore why the upstroke can happen at all.

**P2 (a)** With conductance $\propto n^k$, half-maximum requires

$$n^k = \tfrac12\,n_{\max}^k .$$

Taking $n_{\max}=1$ and the $k$-th root, $n = 2^{-1/k}$.

$$k=1:\ 2^{-1} = \mathbf{0.500} \qquad k=2:\ 2^{-1/2} = \mathbf{0.707} \qquad k=4:\ 2^{-1/4} = \mathbf{0.841}$$

**(b)** We need $n_\infty = 0.841$. Interpolating between the two given points:

$$\frac{0.841 - 0.835}{0.879 - 0.835} = \frac{0.006}{0.044} = 0.136 \;\Longrightarrow\; V \approx -20 + 0.136(10) = \mathbf{-18.6\ \text{mV}}.$$

$$\text{Shift} = -18.6 - (-53.5) = \mathbf{+34.9\ \text{mV}}.$$

**The conductance turns on roughly 35 mV depolarized from where the gating variable does.** This is worth internalizing as a practical warning: **a measured $g_{\text{K}}(V)$ curve is not $n_\infty(V)$**, and reading a "half-activation voltage" off a conductance curve and then using it in a gating equation introduces a 35 mV error.

**(c)** **The rebuttal has two parts, and the second is the decisive one.**

First, the exponent and the activation curve are constrained by *different* features of the data. The exponent controls the **shape of the onset in time** — specifically the zero initial slope and the delayed foot — while the activation curve controls the **steady-state amplitude versus voltage**. Shifting the curve changes the endpoint of a step response; it does not put an inflection into an exponential that has none.

Second, $\tau_n(V)$ is independently determined by the *late*, near-exponential approach to steady state in the same trace. **Once $\tau$ is pinned by the tail, the early trajectory is fully predicted with no adjustable freedom left**, so the observed foot either matches $(1-e^{-t/\tau})^k$ for some integer $k$ or it does not. That is a falsifiable claim, and Example 2 shows $k=1$ and $k=4$ differ by a factor of several hundred at the foot — far outside any plausible measurement error.

**P3 (a)** Separate and integrate the traversal of the bottleneck. The time to go from $x = -\infty$ to $x = +\infty$ is

$$T = \int_{-\infty}^{\infty}\frac{dx}{\mu + x^{2}} = \frac{1}{\sqrt{\mu}}\left[\arctan\frac{x}{\sqrt{\mu}}\right]_{-\infty}^{\infty} = \frac{1}{\sqrt{\mu}}\left[\frac{\pi}{2}-\left(-\frac{\pi}{2}\right)\right] = \frac{\pi}{\sqrt{\mu}}.$$

Near the bifurcation this passage dominates the period (the rest of the orbit takes a roughly fixed time that becomes negligible as $\mu \to 0$), so

$$f = \frac{1}{T} = \frac{\sqrt{\mu}}{\pi} = \frac{\sqrt{c}}{\pi}\sqrt{I-I_c} \;\;\propto\;\; \sqrt{I-I_c}.$$

**Note what this says: the period diverges as $\mu^{-1/2}$, so arbitrarily low firing rates are available.** That is the defining property of Type I.

**(b)** Since $f \propto \sqrt{\Delta I}$, ratios of rate are square roots of ratios of current:

$$\frac{48}{12} = 4 = \sqrt{\frac{\Delta I}{1.0\ \text{pA}}} \;\Longrightarrow\; \Delta I = 16 \;\Longrightarrow\; \mathbf{16\ \text{pA above } I_c}.$$

$$\frac{6}{12} = 0.5 = \sqrt{\frac{\Delta I}{1.0}} \;\Longrightarrow\; \Delta I = 0.25 \;\Longrightarrow\; \mathbf{0.25\ \text{pA above } I_c}.$$

**The square root is a strong compression at the top and a strong expansion at the bottom:** halving the rate takes a fourfold cut in drive, so a Type I cell has fine resolution for weak inputs and coarse resolution for strong ones — a naturally compressive input–output law of the kind [3.1](03-01-transduction-neural-coding.md) will argue sensory systems need.

**(c)** **Which can report weakness as a low rate:** the **Type I** cell. Its $f$–$I$ curve is continuous from zero, so an input one percent above threshold produces a rate one-tenth of the rate produced by an input a hundred percent above it. It is a graded **integrator**, and its output is readable as an analogue quantity.

**What Type II signals instead:** not "how much," but "**whether**," plus "**when**." Because its rate jumps to about 50 Hz at onset and it cannot fire below that, its firing is close to a binary detection event; and because its subthreshold dynamics are damped oscillations, it is **band-pass** — it responds preferentially to inputs arriving near its intrinsic frequency. It is a resonator and a coincidence detector rather than a rate meter.

**Consequence for a population that must synchronize:** the Type II cell's phase-response curve is **biphasic** — an excitatory input arriving early in the cycle *delays* the next spike while one arriving late *advances* it. That sign change is a restoring force: a cell that is ahead of the group gets pushed back and one that is behind gets pulled forward, so **mutual excitation stabilizes the in-phase state.** The Type I cell's phase-response curve is strictly advancing, with no restoring sign change, so mutual excitation does not stabilize synchrony there (inhibition can, by a different route). **The bifurcation type is therefore a prediction about which cells can be built into a synchronized network** — which is why [2.6](02-06-circuit-motifs-computation.md) cares, and why fast-spiking interneurons being resonant is not an incidental detail.

</details>

## Flashback

**From Lesson 1.3 (the action potential):** A squid axon is voltage-clamped from a holding potential of $-65$ mV to $+30$ mV. Take $E_{\text{Na}} = +55$ mV, $E_{\text{K}} = -75$ mV, $\bar g_{\text{Na}} = 120\ \text{mS}/\text{cm}^2$, $\bar g_{\text{K}} = 36\ \text{mS}/\text{cm}^2$. At the peak of the early transient, $m^3h = 0.35$ (with $h = 0.60$) and $n^4 = 0.06$.

(a) Compute $I_{\text{Na}}$, $I_{\text{K}}$ and the net ionic current at that instant, with signs and directions. (b) The step is repeated, but preceded by a 20 ms conditioning step to $-40$ mV that leaves $h = 0.05$ instead of 0.60. Recompute $I_{\text{Na}}$ and the net current at the peak. (c) Name the protocol in (b) and state, in one sentence each, what it establishes about the gates and what it predicts about the cell's excitability.

<details>
<summary>Solution</summary>

**(a)** Driving forces at $V = +30$ mV:

$$V - E_{\text{Na}} = 30 - 55 = -25\ \text{mV}, \qquad V - E_{\text{K}} = 30 - (-75) = +105\ \text{mV}.$$

$$I_{\text{Na}} = \bar g_{\text{Na}}\,m^3h\,(V-E_{\text{Na}}) = 120(0.35)(-25) = 42\times(-25) = \mathbf{-1050\ \mu\text{A}/\text{cm}^2}\ \text{(inward)}$$

$$I_{\text{K}} = \bar g_{\text{K}}\,n^4\,(V-E_{\text{K}}) = 36(0.06)(+105) = 2.16\times105 = \mathbf{+227\ \mu\text{A}/\text{cm}^2}\ \text{(outward)}$$

$$I_{\text{ion}} = -1050 + 227 = \mathbf{-823\ \mu\text{A}/\text{cm}^2}\ \text{(net inward)}.$$

**(b)** The conditioning step changes only $h$; the test voltage is the same, so $m$ reaches the same peak. From $m^3h = 0.35$ with $h = 0.60$,

$$m^3 = \frac{0.35}{0.60} = 0.583 \;\Longrightarrow\; m^3h' = 0.583\times0.05 = 0.0292 .$$

$$I'_{\text{Na}} = 120(0.0292)(-25) = 3.50\times(-25) = \mathbf{-87.5\ \mu\text{A}/\text{cm}^2},$$

a **12-fold reduction**, and $I_{\text{K}}$ is untouched at $+227$:

$$I'_{\text{ion}} = -87.5 + 227 = \mathbf{+139\ \mu\text{A}/\text{cm}^2}\ \text{(net \textbf{outward})}.$$

**The sign flipped.** The same command voltage that produced a strongly regenerative inward current now produces a net repolarizing one.

**(c)** This is the **two-pulse (conditioning-prepulse) protocol**.

**What it establishes:** the amplitude of the test current depends only on the *conditioning* voltage while its kinetics depend only on the *test* voltage, so activation and inactivation are two separately controlled processes rather than one gate doing two jobs — which is exactly the claim that $g_{\text{Na}} = \bar g_{\text{Na}}m^3h$ makes by writing them as independent factors.

**What it predicts:** a cell held at $-40$ mV cannot fire, because with $h = 0.05$ the maximum available inward current no longer exceeds the outward current at any voltage — the middle zero of the instantaneous $I$–$V$ curve is gone, and with it the threshold. **Sustained depolarization is not a head start toward firing; past a point it is an off switch** ([1.3](01-03-the-action-potential.md)), and in the phase-plane language of this lesson it is the second Hopf bifurcation, depolarization block.

</details>

## Connections

- **Backward:** the first equation is [1.1](01-01-neuron-as-a-device.md)'s equivalent circuit with two branches added and nothing else changed; every reversal potential comes from [1.2](01-02-resting-membrane-potential.md); the two-gate factorization, the two-pulse protocol and threshold-as-current-balance are all [1.3](01-03-the-action-potential.md), and its $a$ is this lesson's $m$.
- **Forward:** [1.5](01-05-cable-theory-conduction.md) puts this patch into a cable and turns the ODEs into the PDE whose travelling-wave solution gives conduction velocity; [2.3](02-03-synaptic-integration.md) needs the conductance description ($I = g(V-E)$, with $g$ a state variable) to explain why synaptic summation is sublinear; [2.6](02-06-circuit-motifs-computation.md) uses the Type I / Type II distinction to say which cells can synchronize; [3.1](03-01-transduction-neural-coding.md) inherits the refractory ceiling on rate; [4.5](04-05-methods-a-taste.md) returns to this model as the demonstration that a model can be a prediction instrument rather than a summary.
- **Sideways:** the phase plane, its nullclines and the stability of the fixed point are [dynamical-systems 1.5](../../dynamical-systems/lessons/01-05-phase-portraits.md) and [1.4](../../dynamical-systems/lessons/01-04-linearization-hartman-grobman.md); the birth of the spike train is the Hopf bifurcation of [dynamical-systems 3.3](../../dynamical-systems/lessons/03-03-hopf-bifurcation.md) and the Type I route is the saddle-node of [3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md), with the resulting orbit a limit cycle ([2.3](../../dynamical-systems/lessons/02-03-limit-cycles.md)). The microscopic account of what a single gate *is* — gating charge, slope factor, two-state Boltzmann $P_{\text{open}}(V)$ — belongs to [biophysics 4.5](../../biophysics/lessons/04-05-excitable-membranes-action-potential.md), and is the physics underneath $m_\infty(V)$; the same template with a $\text{Ca}^{2+}$ current and a much longer plateau is the cardiac action potential ([physiology 2.1](../../physiology/lessons/02-01-cardiac-electrophysiology.md)).
