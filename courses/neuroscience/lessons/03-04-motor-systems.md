# Neuroscience · Lesson 3.4: Motor systems

> ⏱ ~15 min · Module 3: Sensory & motor systems · Builds on: [3.3](03-03-audition-somatosensation.md), [2.6](02-06-circuit-motifs-computation.md) · Unlocks: 3.5 (motor control & correction)

## Why this matters

Everything the nervous system has computed so far has to be exported through muscle. **Every thought you can measure from the outside — a word, a glance, a signature — is a pattern of firing in a few hundred thousand motor neurons, and nothing else.** That bottleneck is not a metaphor; it is anatomy, and it is why the motor system is the one place in the brain where you can state the output variable exactly.

The lesson's real content is that **the motor system solves several hard control problems with mechanisms that are almost embarrassingly cheap.** Graded force with fine resolution at low levels: falls out of a passive membrane property you already derived in [1.5](01-05-cable-theory-conduction.md). A length regulator with an adjustable setpoint: falls out of a two-neuron spinal circuit. Rhythmic locomotion: falls out of a spinal network that needs no command and no sensory input at all. In each case the cleverness is in the architecture, not in any single element.

**One ownership note before we start.** The contractile machinery — sarcomeres, the cross-bridge cycle, excitation–contraction coupling, length–tension and force–velocity — belongs to [physiology 1.6](../../physiology/lessons/01-06-muscle-contraction.md), and the neuromuscular junction to [physiology 1.5](../../physiology/lessons/01-05-neuromuscular-autonomic-transmission.md). We use those results and do not re-derive them. **Our subject is the nervous system's side of the interface: what the command looks like and where it is computed.**

## The idea

**Start at the output and work backwards, because the output is where the constraints are hardest.**

**The final common path.** Every movement — reflex, rhythm, or deliberate reach — reaches muscle through the **alpha motor neuron**. Cortex, cerebellum, basal ganglia, vestibular nuclei, spinal interneurons: all of them converge on that one cell, and none of them can address a muscle fibre directly. Sherrington's phrase "final common path" is the single most useful organizing fact in motor neuroscience, because it tells you that **all descending control is a competition to set the firing rate of a motor neuron pool.**

**The motor unit is the quantum.** One alpha motor neuron plus every muscle fibre it innervates fires as an indivisible block — a motor neuron spike contracts *all* of its fibres, because the neuromuscular junction is engineered to never fail ([physiology 1.5](../../physiology/lessons/01-05-neuromuscular-autonomic-transmission.md)). So **muscle force is quantized**, and the size of the quantum is the **innervation ratio**: roughly ten fibres per motor neuron in extraocular muscles, over a thousand in gastrocnemius. Precision muscles have small quanta; power muscles have large ones.

**Now the good part.** A pool has to produce force smoothly across a hundredfold range, and it must be *finer* at low force — you want millinewton resolution threading a needle and you do not care about millinewtons when lifting a suitcase. The obvious engineering answer is a controller that picks small units at low force and large units at high force. **The nervous system does not have such a controller. It does not need one.**

**The size principle.** Feed the same synaptic drive to every motor neuron in the pool. A small motor neuron has less membrane, so a **higher input resistance** — and by Ohm's law, the same injected current makes a larger voltage in it. It therefore reaches threshold first. Bigger cells need more current, and bigger cells happen to innervate more fibres. **Recruitment order emerges from a passive electrical property nobody selected it for, and the resulting force increments automatically scale with the force already present.** This is the same $R_{\text{in}} = R_m/A$ you computed for a spherical soma in [1.5](01-05-cable-theory-conduction.md)'s flashback; here it is doing control theory.

**The spinal cord is not a cable.** The second big idea is that a great deal of control has already happened before any signal descends. The stretch reflex is a **negative-feedback length regulator** built from a sensor (muscle spindle), a controller (alpha motor neuron), and a plant (muscle) — and the gamma motor neuron **moves its setpoint**. Descending commands do not push the muscle; they largely tell the spinal cord what length and stiffness to hold. Add central pattern generators, which produce locomotion with the brain disconnected and the sensory roots cut, and the picture inverts: **the cord holds the behaviour, and descending pathways select and modulate it.**

## The formal version

### Recruitment threshold from input resistance

Let $R_{\text{in}}$ be a motor neuron's input resistance (in $\Omega$), $A$ its total membrane area (mostly dendritic, in $\text{cm}^2$), $R_m$ the specific membrane resistance ($\Omega\,\text{cm}^2$), and $\Delta V_{\text{th}}$ the depolarisation from rest to threshold (in V). For a compact cell driven by a steady current $I$,

$$R_{\text{in}} = \frac{R_m}{A}, \qquad \Delta V = I\,R_{\text{in}}, \qquad \boxed{\;I_{\text{th}} = \frac{\Delta V_{\text{th}}}{R_{\text{in}}} = \frac{\Delta V_{\text{th}}\,A}{R_m}\;}$$

*In words: the current a motor neuron needs to fire — its **rheobase** — is proportional to its membrane area, because area is what sets its input resistance.* Threshold voltage is roughly the same across the pool (it is set by Na$^+$ channel density, [1.3](01-03-the-action-potential.md)), so **size alone orders the pool.**

With $R_m \approx 2\times10^{3}\ \Omega\,\text{cm}^2$ and $\Delta V_{\text{th}} \approx 10$ mV, three representative motor neurons:

| Type | $R_{\text{in}}$ | Implied area $A = R_m/R_{\text{in}}$ | Rheobase $I_{\text{th}}$ | Fibres | Fatigue |
|---|---|---|---|---|---|
| **S** (slow) | 2.0 M$\Omega$ | $1.0\times10^{5}\ \mu\text{m}^2$ | **5 nA** | few, oxidative | resistant |
| **FR** (fast, fatigue-resistant) | 1.0 M$\Omega$ | $2.0\times10^{5}\ \mu\text{m}^2$ | **10 nA** | more | intermediate |
| **FF** (fast, fatigable) | 0.5 M$\Omega$ | $4.0\times10^{5}\ \mu\text{m}^2$ | **20 nA** | many, glycolytic | fast |

**Read the last three columns together.** The units recruited first are also the ones that can run all day, and the units held in reserve are the ones that exhaust in seconds. **Recruitment order and metabolic order coincide, and neither was arranged — both follow from cell size.**

### Why the force steps are the right size

Let unit $i$ contribute force $f_i$, with units recruited in increasing order of $f$. After $n$ units the muscle produces $F_n = \sum_{i\le n} f_i$, and the resolution of the force command is the step $\Delta F = f_n$.

If unit forces grow geometrically, $f_i = f_1 e^{k(i-1)}$, then for large $n$

$$\frac{\Delta F}{F_n} = \frac{f_n}{\sum_{i \le n} f_i} \;\longrightarrow\; 1 - e^{-k}$$

*In words: the absolute step grows with force, but the **fractional** step settles at a constant.* For a pool of 100 units spanning a hundredfold force range, $k = \ln(100)/99 = 0.0465$, so $1-e^{-k} = 0.045$: **every recruitment changes force by about 4.5 percent of the force already there, at every level.** That is a Weber law — the same constant-fraction structure the sensory side produces by logarithmic compression ([3.1](03-01-transduction-neural-coding.md)) — and here nothing computes it. It is a side effect of recruiting in size order.

**Reverse the order and the property dies.** Largest first, and the very first unit commits you to a large fraction of maximum force with no way to produce anything smaller. Worked numerically in Example 1.

### Rate coding, the second knob

Recruitment is discrete; **firing rate is continuous and fills the gaps.** A motor unit's force rises with stimulation rate from a single twitch to a fused tetanus over roughly a threefold range. Two constraints set the usable band:

- **The floor** is set by the afterhyperpolarisation ([1.3](01-03-the-action-potential.md)). A slow motor neuron's AHP lasts on the order of 100 ms, so it cannot sustain much below about 8–10 Hz; fast motor neurons have briefer AHPs and start higher. **A K$^+$ conductance's decay time is the reason your weakest muscle contraction is not weaker.**
- **The ceiling** is fusion: beyond roughly 2–3 times the reciprocal of the unit's twitch contraction time, extra spikes add nothing.

Slow units, with contraction times near 100 ms, fuse by about 30 Hz; fast units, at 30 ms, need 80 Hz or more. **The division of labour:** in small hand muscles recruitment is essentially complete by about half of maximum voluntary force and everything above that is rate coding; in large limb muscles recruitment keeps contributing much higher.

### The stretch reflex as a control loop

**Sensor.** The **muscle spindle** is a capsule of specialised intrafusal fibres lying in parallel with the force-producing extrafusal fibres, wrapped by **group Ia afferents** (and group II). In parallel means it is stretched when the muscle is stretched, and unloaded when the muscle shortens. Ia firing encodes length and, strongly, rate of change of length.

**Controller and plant.** The Ia afferent makes a **monosynaptic** excitatory connection onto the alpha motor neurons of its own muscle — the only monosynaptic sensory-to-motor connection in the body — and disynaptic inhibition, via an Ia inhibitory interneuron, onto the antagonist's motor neurons (**reciprocal inhibition**). Stretch the muscle and it contracts back; the antagonist relaxes out of the way.

$$\text{stretch} \;\to\; \text{Ia firing} \uparrow \;\to\; \alpha \text{ firing} \uparrow \;\to\; \text{contraction} \;\to\; \text{stretch} \downarrow$$

*In words: this is a negative-feedback loop that regulates muscle length, and it is worth drawing as a block diagram rather than an arc.* With loop gain $G$, a load that would stretch the muscle by $\Delta L_{\text{open}}$ on its own instead produces

$$\Delta L = \frac{\Delta L_{\text{open}}}{1+G}$$

**The setpoint.** Here is the part that makes it a real controller and not just a stabiliser. **Gamma motor neurons** innervate the contractile poles of the intrafusal fibres. Firing them shortens the spindle's ends, which stretches its sensory middle, which raises Ia output *at the same muscle length*. Since the loop drives the muscle until Ia output returns to its expected value, **raising gamma drive commands a shorter muscle.**

$$\text{Ia rate} = f(\underbrace{L}_{\text{muscle length}},\; \underbrace{\gamma}_{\text{reference}}) \qquad\Longrightarrow\qquad \gamma \text{ sets the length the loop servos to.}$$

*In words: a descending command can move the setpoint and let the spinal loop find the muscle activation that achieves it.* This is exactly the reference input of a servo ([control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md)). Merton's **servo hypothesis** — that voluntary movement is driven purely by gamma drive — is *false* in its strong form: alpha and gamma are normally **coactivated**, which keeps the spindle loaded and sensitive throughout a shortening contraction. But the weak form is right and important: **descending commands negotiate with a spinal loop rather than dictating to muscle.**

**Force feedback too.** The **Golgi tendon organ** sits *in series* with the muscle fibres at the myotendinous junction and reports **force**, not length. Its group **Ib** afferent acts disynaptically, through an inhibitory interneuron, onto the homonymous motor neurons. A system with a length sensor and a force sensor can regulate their ratio:

$$\text{stiffness} \;=\; \frac{\Delta \text{force}}{\Delta \text{length}}$$

**Two feedback loops with different sensed variables let the cord regulate stiffness, which is the variable that actually matters for stable interaction with objects.** (The older reading of Ib as a "protective" tension safety valve is largely wrong: during locomotion the Ib pathway even reverses to positive feedback, reinforcing extensor activity during stance.)

### Central pattern generators

Cut every dorsal root, so no sensory information enters the cord, and transect above the lumbar enlargement, so no command descends. A decerebrate cat, pharmacologically activated, still produces alternating flexor–extensor bursts in the right phase relationships — **fictive locomotion**, recorded in the ventral roots of a paralysed animal that is not moving at all.

*In words: the rhythm and the pattern are generated inside the cord; sensory feedback and descending drive shape a pattern they do not create.* Brown's 1911 **half-centre** model — two mutually inhibiting pools, each fatiguing, so activity alternates — is the ancestor of every CPG model, and it is [2.6](02-06-circuit-motifs-computation.md)'s reciprocal-inhibition motif with adaptation. **The implication for control is large: descending pathways set speed, gait and direction by adjusting parameters of an existing oscillator, which is a vastly smaller command than specifying muscle activations.**

### Descending pathways

| System | Tracts | Target | Job |
|---|---|---|---|
| **Lateral** | lateral corticospinal, rubrospinal | distal limb motor pools | fractionated, individuated movement |
| **Medial** | ventral corticospinal, reticulospinal, vestibulospinal, tectospinal | axial and proximal pools | posture, balance, orienting, gross locomotion |

The **corticospinal tract** carries roughly a million axons in humans, about 90 percent of which cross at the pyramidal decussation — which is why cortical motor control is contralateral. **In primates, and most extensively in humans, a fraction of corticospinal axons synapse directly onto alpha motor neurons** (corticomotoneuronal connections). Across species the extent of that direct projection tracks manual dexterity, and it is the plausible substrate for individuated finger movement: a direct line lets cortex address a single motor pool without going through spinal interneurons that enforce synergistic groupings.

### Motor cortex coding, honestly

Georgopoulos found that a motor cortex neuron's firing rate during reaching is **broadly tuned for movement direction**, well fit by a cosine:

$$r_i(\theta) = b_0 + b_1\cos(\theta - \theta_i)$$

where $\theta$ is movement direction, $\theta_i$ the neuron's preferred direction, $b_0$ the mean rate and $b_1$ the modulation depth (both in spikes/s). A cosine is *maximally* broad — half-width at half-modulation is 90 degrees — so **no single neuron specifies a direction.** The **population vector** reads it out:

$$\mathbf{P} = \sum_i \big(r_i - b_0\big)\,\hat{\mathbf{c}}_i$$

*In words: give every neuron a vote along its own preferred direction, weighted by how much it is firing above baseline, and add the votes.* For preferred directions spread uniformly, this recovers $\theta$ **exactly** in the noiseless case, with $|\mathbf{P}| = Nb_1/2$ regardless of $\theta$ (proved in P3). **This is [3.1](03-01-transduction-neural-coding.md)'s population code, in the system where it was first demonstrated** — and it is the direct ancestor of every brain–machine interface decoder.

**What the population vector does not settle is what motor cortex encodes.** Directional tuning in a reaching task is also consistent with coding muscle activation, joint torque, or endpoint force, because in a fixed posture these are all correlated with direction; the "kinematics versus dynamics" debate has run for decades. The current alternative reframes the question: motor cortex is a **dynamical system** whose population trajectory generates the command, and individual neurons' tuning is a projection of that trajectory rather than a representation of anything. Under this view, asking what a neuron encodes is the wrong question ([dynamical-systems 1.5](../../dynamical-systems/lessons/01-05-phase-portraits.md) is the right language). **Treat cosine tuning as a robust empirical fact and its interpretation as open.**

### The degrees-of-freedom problem

The human arm has roughly seven joint degrees of freedom (3 shoulder, 1 elbow, 1 forearm, 2 wrist) and placing a fingertip requires three. **The solution set is a four-dimensional manifold: infinitely many joint configurations put your finger in the same place.** At the muscle level it is far worse — dozens of muscles for seven joint torques. Bernstein's point is that **the controller's problem is not computing the solution but choosing among them**, and that no unique answer exists without an added criterion (effort, smoothness, variability, robustness).

**Muscle synergies** are one proposed answer: rather than commanding muscles individually, the cord holds a small library of fixed activation patterns, and descending drive supplies a few scalar coefficients. Empirically, four or five synergies typically account for most of the EMG variance across a dozen or more leg muscles during walking. **The honest caveat:** low-dimensional structure in EMG can also arise from task constraints and biomechanics without any synergy module existing, and dimensionality reduction will always find components. This is where [3.5](03-05-motor-control-correction.md) picks up.

## Picture

![Two stacked panels. The upper panel shows three motor neurons of increasing soma size sharing one descending drive line, labelled with input resistances of 2.0, 1.0 and 0.5 megaohms and rheobase currents of 5, 10 and 20 nanoamps, with unit forces scaling one, four and sixteen; beneath them a staircase plot of total muscle force against descending drive rises with fine steps at low force and progressively coarser steps as the larger units are recruited. The lower panel redraws the stretch reflex as a control block diagram: a descending command enters a summing junction, then the alpha motor neuron as controller, then the muscle and its load as plant with a load disturbance entering from above, and muscle length as the output, which returns through a delay block of twenty to thirty milliseconds and the muscle spindle as sensor to the summing junction with a minus sign, while the gamma motor neuron sets the spindle operating point.](assets/03-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — recruitment order and force resolution).** A pool of five motor units produces twitch forces of 1, 2, 5, 10 and 20 mN. (a) Give the cumulative force after each recruitment in size order and in reverse order. (b) Compare the smallest force each scheme can produce. (c) Give the fractional step in size order. (d) The smallest motor neuron has $R_{\text{in}} = 2.0\ \text{M}\Omega$ and the largest $0.5\ \text{M}\Omega$, with $\Delta V_{\text{th}} = 10$ mV throughout. Confirm that a common drive produces the size order.

**(a)**

| Units active | Size order (small first) | Reverse order (large first) |
|---|---|---|
| 1 | 1 mN | 20 mN |
| 2 | 3 mN | 30 mN |
| 3 | 8 mN | 35 mN |
| 4 | 18 mN | 37 mN |
| 5 | **38 mN** | **38 mN** |

**(b)** Size order: the smallest producible force is **1 mN**, which is $1/38 = 2.6$ percent of maximum. Reverse order: the smallest producible force is **20 mN**, or **53 percent of maximum** — the muscle simply cannot make anything gentler. **The two schemes reach the same maximum and differ by a factor of twenty in resolution at the bottom of the range**, which is the range you spend almost all of your time in.

**(c)** Step as a fraction of the force present after it:

$$\frac{1}{1} = 1.00,\quad \frac{2}{3} = 0.67,\quad \frac{5}{8} = 0.63,\quad \frac{10}{18} = 0.56,\quad \frac{20}{38} = 0.53$$

**It settles.** With only five units it settles near 55 percent; with a realistic pool of a hundred units spanning the same hundredfold range it settles at $1-e^{-k} = 4.5$ percent. **Constant fractional resolution across the whole operating range, for free.**

**(d)** $$I_{\text{th}}^{\text{small}} = \frac{10\ \text{mV}}{2.0\ \text{M}\Omega} = \frac{10\times10^{-3}}{2.0\times10^{6}} = 5.0\times10^{-9}\ \text{A} = \mathbf{5\ nA}$$

$$I_{\text{th}}^{\text{large}} = \frac{10\times10^{-3}}{0.5\times10^{6}} = 2.0\times10^{-8}\ \text{A} = \mathbf{20\ nA}$$

A shared drive ramping from 0 crosses 5 nA before 20 nA, so the small unit is recruited first — **and it is recruited first on every trial, in every task, without anything deciding.** Henneman's original demonstration was exactly this: recruitment order is fixed and reproducible.

**Example 2 (why you'd care — the reflex loop, its delay, and why its gain must be low).** (a) Build the latency budget for a patellar tendon jerk: 0.5 m of Ia afferent and 0.5 m of alpha axon, both myelinated at 70 m/s, one central synapse, one neuromuscular junction, and the electromechanical delay of the muscle. (b) Redo it with unmyelinated fibres at 1 m/s. (c) Estimate the frequency at which the loop would oscillate if its gain were raised, and compare with a clinical observation.

**(a)** Add the terms:

$$t_{\text{afferent}} = \frac{0.5\ \text{m}}{70\ \text{m/s}} = 7.1\ \text{ms}, \qquad t_{\text{efferent}} = \frac{0.5\ \text{m}}{70\ \text{m/s}} = 7.1\ \text{ms}$$

| Segment | Delay |
|---|---|
| Ia conduction to cord | 7.1 ms |
| central (one synapse, [2.1](02-01-chemical-synaptic-transmission.md)) | 0.7 ms |
| alpha conduction to muscle | 7.1 ms |
| neuromuscular transmission | 0.8 ms |
| excitation–contraction to measurable force | ~3 ms |
| **total** | **≈ 19 ms** |

Measured tendon-jerk latencies at the knee are about 19–24 ms. **The budget is dominated by conduction, and the single synapse is the cheapest item on the list** — which is precisely why the only monosynaptic sensory-motor connection in the body is the one whose speed matters most.

**(b)** At 1 m/s the two conduction terms become 500 ms each: **total ≈ 1.0 s**, a fiftyfold increase. A postural correction arriving a second after you stumble is not a correction. **Myelination is not a refinement here; without it this loop has no function** ([1.5](01-05-cable-theory-conduction.md)).

**(c)** Model the loop as a pure delay $T_d$ plus the muscle's first-order force lag $\tau_m$. Sustained oscillation needs the loop phase to reach $\pi$:

$$\omega T_d + \arctan(\omega \tau_m) = \pi$$

With $T_d = 35$ ms (the 19 ms above plus spindle and force-rise dynamics) and $\tau_m = 60$ ms:

$$\omega = 53.5\ \text{rad/s}: \quad (53.5)(0.035) + \arctan\big((53.5)(0.060)\big) = 1.87 + 1.27 = 3.14 = \pi$$

$$f = \frac{\omega}{2\pi} = \frac{53.5}{6.28} = \mathbf{8.5\ Hz}$$

**This is a prediction with a clinical test.** After an upper motor neuron lesion, descending inhibition of the reflex loop is lost and its gain rises — and patients develop **clonus**, a self-sustaining oscillation of the stretch reflex, measured at **5–8 Hz**. Our two-element estimate lands just above the observed band, meaning the real loop carries a little more lag than we gave it. **The agreement is the point: spasticity and clonus are what a delayed negative-feedback loop does when you raise its gain, not a mysterious property of damaged tissue** ([control-systems 3.4](../../control-systems/lessons/03-04-gain-and-phase-margins.md) is the general statement).

**The design conclusion.** Because instability sits at a few Hz, the healthy loop must run at **low gain**. Estimates put $G$ near 1, so a disturbance is attenuated by about a factor of 2 — the reflex *stiffens* the limb, it does not clamp its length. **Everything the stretch reflex cannot do because of its delay is what [3.5](03-05-motor-control-correction.md) exists to explain.**

## Watch out

- **You might think the size principle proves the pool is uncontrollable.** It follows from a *shared* drive. A descending pathway that targets a subset of motor neurons can reorder recruitment, and selective reordering has been observed. **The size principle is a consequence of common input, not a wiring constraint.**
- **You might think the input-resistance argument is airtight.** It is not, and this is worth knowing. If synaptic conductance scaled exactly with membrane area, larger cells would receive proportionally more current and the $1/A$ in $R_{\text{in}}$ would cancel exactly. **The classical explanation therefore requires that the common drive delivers comparable current to cells of different size**, and intrinsic differences — persistent inward currents, AHP duration, channel densities — contribute as well. The *ordering* is one of the most robust facts in the field; the full account of *why* is not settled.
- **You might read the gamma system as "the brain drives the spindle, the spindle drives the muscle."** That is Merton's servo hypothesis, and it fails: gamma-only drive is too slow and too low-gain to produce voluntary movement. Alpha and gamma are **coactivated**, so the spindle stays sensitive during shortening rather than falling silent.
- **You might treat the Golgi tendon organ as a safety valve.** In series means it is a **force sensor**, and its Ib pathway is a force-feedback loop that helps regulate stiffness; during locomotion its sign even reverses to reinforce stance.
- **You might expect a spinal-cord lesion to abolish rhythm.** CPGs live below the lesion. The rhythm survives; what is lost is initiation, steering and adaptation — which is why treadmill training in spinal injury can recover stepping that voluntary control cannot.
- **You might read a cosine tuning curve as "this neuron codes direction."** A cosine is the broadest possible tuning, and direction, torque and muscle activation are correlated in a standard reaching task. **Tuning shows a correlation with a variable the experimenter happened to vary; it does not show that the variable is what the neuron computes.**

## One-liner

> Every command exits through the alpha motor neuron, and the motor system gets its two best properties for nothing: recruiting in order of size — a passive consequence of $I_{\text{th}} = \Delta V_{\text{th}}/R_{\text{in}}$ — gives constant fractional force resolution at every level, and a spinal loop whose gamma-set reference regulates length at a gain low enough that its 20-plus millisecond delay does not turn it into clonus.

## Problems

**P1 (🟢)** Two motor neurons in one pool have input resistances $1.8\ \text{M}\Omega$ and $0.45\ \text{M}\Omega$; both reach threshold 12 mV above rest. (a) Compute each rheobase. (b) Compute the ratio of their total membrane areas. (c) A shared descending command delivers 20 nA to each. Which fire? The command falls to 8 nA — which fire? (d) In one sentence, what happens to recruitment order if a descending pathway synapses only on the large cell?

**P2 (🟡)** A pool of four motor units produces twitch forces of 2, 5, 12 and 30 mN. (a) Give cumulative force after each recruitment in size order and in reverse order. (b) Give the smallest producible force in each scheme as a percentage of maximum. (c) Give each size-order step as a fraction of the force present after it. (d) The smallest unit's force rises from a 2 mN twitch to a 6 mN fused tetanus as its rate goes from 8 to 30 Hz. In one sentence, say what this does to the staircase.

**P3 (🔴, bridges to [3.1](03-01-transduction-neural-coding.md) and to brain–machine interfaces)** Four motor cortex neurons have preferred directions $0^\circ, 90^\circ, 180^\circ, 270^\circ$ in a plane and cosine tuning $r_i(\theta) = 20 + 15\cos(\theta - \theta_i)$ spikes/s. (a) For a reach at $\theta = 40^\circ$, compute the four rates and the population vector, and recover the direction. (b) Show that for preferred directions spread uniformly, $\mathbf{P} = \tfrac{N b_1}{2}(\cos\theta, \sin\theta)$ exactly. (c) Spike counts over a window $T$ are Poisson. Show that the angular error satisfies $\sigma_\theta \approx \frac{1}{b_1}\sqrt{\frac{2b_0}{NT}}$, evaluate it for $N = 100$ and $T = 200$ ms, compare with a single neuron's tuning half-width, and find the $N$ needed for 2 degrees.

<details>
<summary>Solutions</summary>

**P1 (a)** $$I_{\text{th}} = \frac{\Delta V_{\text{th}}}{R_{\text{in}}} = \frac{12\times10^{-3}\ \text{V}}{1.8\times10^{6}\ \Omega} = 6.67\times10^{-9}\ \text{A} = \mathbf{6.7\ nA}$$

$$I_{\text{th}} = \frac{12\times10^{-3}}{0.45\times10^{6}} = 2.67\times10^{-8}\ \text{A} = \mathbf{26.7\ nA}$$

**(b)** Since $R_{\text{in}} = R_m/A$ with the same $R_m$, area is inversely proportional to input resistance:

$$\frac{A_{\text{large}}}{A_{\text{small}}} = \frac{R_{\text{in}}^{\text{small}}}{R_{\text{in}}^{\text{large}}} = \frac{1.8}{0.45} = \mathbf{4.0}$$

**Four times the membrane, four times the current, and (typically) about four times the innervation ratio — so four times the force quantum.**

**(c)** At 20 nA: $20 > 6.7$, so the **small** cell fires; $20 < 26.7$, so the large cell does **not**. At 8 nA: $8 > 6.7$, so **only the small cell fires**. The large cell is still 19 nA short.

**(d)** Recruitment order is a property of *shared* drive, so a pathway addressing only the large cell recruits it alone and in any order the pathway likes — **the size principle constrains what a common command does, not what the nervous system is capable of.**

**P2 (a)**

| Units | Size order | Reverse order |
|---|---|---|
| 1 | 2 mN | 30 mN |
| 2 | 7 mN | 42 mN |
| 3 | 19 mN | 47 mN |
| 4 | **49 mN** | **49 mN** |

**(b)** Size order: $2/49 = \mathbf{4.1}$ **percent** of maximum. Reverse order: $30/49 = \mathbf{61}$ **percent**. **Reversing the order costs a factor of 15 in the finest force the muscle can produce**, while gaining nothing at the top.

**(c)** $$\frac{2}{2} = 1.00, \qquad \frac{5}{7} = 0.71, \qquad \frac{12}{19} = 0.63, \qquad \frac{30}{49} = 0.61$$

Converging toward a constant, as the geometric argument predicts. With four units the constant is coarse (61 percent); the same hundredfold range spread over 100 units gives 4.5 percent. **The pool size sets the resolution; the recruitment order sets whether the resolution is constant in absolute or fractional terms.**

**(d)** Between recruitment events the already-active units slide up their force–frequency curves — the smallest unit alone spans 2 to 6 mN by rate change — so **force is continuous, and the staircase is a ladder that the rate code fills in between rungs.**

**P3 (a)** With $\cos 40^\circ = 0.7660$ and $\cos 50^\circ = 0.6428$:

| $\theta_i$ | $\theta - \theta_i$ | $r_i$ (spikes/s) | weight $r_i - b_0$ |
|---|---|---|---|
| $0^\circ$ | $+40^\circ$ | $20 + 15(0.7660) = 31.49$ | $+11.49$ |
| $90^\circ$ | $-50^\circ$ | $20 + 15(0.6428) = 29.64$ | $+9.64$ |
| $180^\circ$ | $-140^\circ$ | $20 - 15(0.7660) = 8.51$ | $-11.49$ |
| $270^\circ$ | $+130^\circ$ | $20 - 15(0.6428) = 10.36$ | $-9.64$ |

Unit vectors are $(1,0), (0,1), (-1,0), (0,-1)$:

$$P_x = 11.49(1) + 9.64(0) + (-11.49)(-1) + (-9.64)(0) = 22.98$$
$$P_y = 11.49(0) + 9.64(1) + (-11.49)(0) + (-9.64)(-1) = 19.28$$

$$\theta_{\text{est}} = \arctan\frac{19.28}{22.98} = \arctan(0.8390) = \mathbf{40.0^\circ}, \qquad |\mathbf{P}| = \sqrt{22.98^2+19.28^2} = 30.0$$

**Note the negatively-modulated neurons contribute as much as the positively-modulated ones** — a cell firing *below* baseline votes against its preferred direction, and that vote is half the information. Check the magnitude against (b): $Nb_1/2 = 4(15)/2 = 30$ ✓.

**(b)** Write $w_i = b_1\cos(\theta-\theta_i)$ and expand:

$$P_x = \sum_i b_1\cos(\theta-\theta_i)\cos\theta_i = b_1\Big[\cos\theta\sum_i\cos^2\theta_i + \sin\theta\sum_i \sin\theta_i\cos\theta_i\Big]$$

For preferred directions spread uniformly around the circle, $\sum_i \cos^2\theta_i = N/2$ and $\sum_i \sin\theta_i\cos\theta_i = \tfrac12\sum_i\sin 2\theta_i = 0$. Hence

$$P_x = \frac{Nb_1}{2}\cos\theta, \qquad \text{and identically} \qquad P_y = \frac{Nb_1}{2}\sin\theta$$

$$\boxed{\;\mathbf{P} = \frac{Nb_1}{2}\,(\cos\theta,\ \sin\theta)\;}$$

**The estimate is exactly right and its length carries no directional bias.** Two things follow: the baseline $b_0$ must be subtracted (it contributes $b_0\sum\hat{\mathbf{c}}_i = 0$ only if the preferred directions are *perfectly* uniform, which is why non-uniform samples bias real decoders), and the readout is a single weighted sum — **cheap enough that a downstream structure, or an implanted electrode array, can compute it.**

**(c)** Over a window $T$, the count $n_i$ is Poisson with mean $r_iT$, so the rate estimate $\hat r_i = n_i/T$ has $\operatorname{Var}(\hat r_i) = r_i/T$. Take the true direction as $\theta = 0$, so the error appears in $P_y$:

$$\operatorname{Var}(P_y) = \sum_i \frac{r_i}{T}\sin^2\theta_i = \frac{1}{T}\Big[b_0\sum_i\sin^2\theta_i + b_1\sum_i\cos\theta_i\sin^2\theta_i\Big] = \frac{b_0 N}{2T}$$

(the second sum vanishes on a uniform ring). The signal is $|\mathbf{P}| = Nb_1/2$ from (b), and for small errors the angle is the transverse component over the length:

$$\sigma_\theta \approx \frac{\sqrt{b_0N/2T}}{Nb_1/2} = \frac{1}{b_1}\sqrt{\frac{2b_0}{NT}}$$

With $b_0 = 20$ Hz, $b_1 = 15$ Hz, $N = 100$, $T = 0.2$ s:

$$\sigma_\theta = \frac{1}{15}\sqrt{\frac{2(20)}{(100)(0.2)}} = \frac{\sqrt{2}}{15} = 0.0943\ \text{rad} = \mathbf{5.4^\circ}$$

**Against a single neuron's tuning half-width of $90^\circ$.** A hundred maximally-broad, noisy cells give a five-degree readout in a fifth of a second — **the population is roughly seventeen times sharper than any element of it**, which is the central result of population coding ([3.1](03-01-transduction-neural-coding.md)).

For $\sigma_\theta = 2^\circ = 0.0349$ rad:

$$0.0349 = \frac{1}{15}\sqrt{\frac{40}{0.2N}} \;\Longrightarrow\; 0.5236 = \sqrt{\frac{200}{N}} \;\Longrightarrow\; N = \frac{200}{0.2742} = \mathbf{730\ \text{neurons}}$$

The $N^{-1/2}$ scaling is why cortical BMI decoders improve steeply from tens to hundreds of channels and then flatten — and why **noise correlations matter so much**: the derivation assumed independent Poisson noise, and shared fluctuations across neurons do not average away, so correlated noise puts a floor on $\sigma_\theta$ that no number of electrodes can beat.

</details>

## Flashback

**From Lesson 1.5 (cable theory and conduction):** A myelinated Ia afferent has inner radius $a = 2$ µm, 150 wraps of myelin, internode length $L = 1.2$ mm, $R_i = 100\ \Omega\,\text{cm}$, and bare-membrane constants $R_m = 10^{4}\ \Omega\,\text{cm}^2$, $C_m = 1\ \mu\text{F}/\text{cm}^2$. (a) Compute the sheathed internode's effective $R_m$ and $C_m$, and its length constant $\lambda$. (b) A node fires a 110 mV spike and the next node needs 15 mV to reach threshold; compute the steady-state attenuation across one internode and the safety factor. (c) Compute the diffusivity $D = a/(2R_iC_m)$ and the internodal charging time $L^2/D$. The fibre's measured conduction velocity is 70 m/s — compute the actual node-to-node delay and explain the discrepancy.

<details>
<summary>Solution</summary>

**(a)** Wrapping $n$ layers puts $n$ membranes in series: resistances add, capacitances add reciprocally.

$$R_m^{\text{eff}} = nR_m = 150 \times 10^{4} = 1.5\times10^{6}\ \Omega\,\text{cm}^2, \qquad C_m^{\text{eff}} = \frac{C_m}{n} = \frac{10^{-6}}{150} = 6.67\times10^{-9}\ \text{F}/\text{cm}^2$$

With $a = 2\times10^{-4}$ cm:

$$\lambda = \sqrt{\frac{aR_m^{\text{eff}}}{2R_i}} = \sqrt{\frac{(2\times10^{-4})(1.5\times10^{6})}{2(100)}} = \sqrt{\frac{300}{200}} = \sqrt{1.5} = \mathbf{1.22\ cm}$$

**(b)** The internode is $L = 0.12$ cm, so it is only about a tenth of a length constant:

$$\frac{V_{\text{next}}}{V_{\text{node}}} = e^{-L/\lambda} = e^{-0.12/1.2247} = e^{-0.0980} = \mathbf{0.907}$$

$$V_{\text{next}} = 110 \times 0.907 = 99.7\ \text{mV}, \qquad \text{safety factor} = \frac{99.7}{15} = \mathbf{6.6}$$

**A node delivers its neighbour nearly seven times the voltage it needs**, which is why conduction is essentially failure-free and why demyelination has to be severe before it blocks.

**(c)** $$D = \frac{a}{2R_iC_m^{\text{eff}}} = \frac{2\times10^{-4}}{2(100)(6.67\times10^{-9})} = \frac{2\times10^{-4}}{1.33\times10^{-6}} = \mathbf{150\ cm^2/s}$$

$$\frac{L^2}{D} = \frac{(0.12)^2}{150} = 9.6\times10^{-5}\ \text{s} = \mathbf{96\ \mu\text{s}}$$

Actual delay from the measured velocity:

$$t_{\text{node-to-node}} = \frac{1.2\times10^{-3}\ \text{m}}{70\ \text{m/s}} = 1.7\times10^{-5}\ \text{s} = \mathbf{17\ \mu\text{s}}$$

**A factor of about six faster than the charging time.** The resolution: $L^2/D$ is the time to charge the internode to something near its *final* value, but the next node does not wait for that — it needs only $15/110 = 14$ percent of the final voltage, which diffusive spread delivers in a small fraction of $L^2/D$, and once there its own Na$^+$ channels take over and regenerate the spike. **Saltatory conduction is fast precisely because it never finishes charging anything**, and it is a threshold-crossing process, not an equilibration.

**Tie-back to this lesson:** those 17 µs per internode are what buy the 7.1 ms afferent leg of Example 2's latency budget. At 1 m/s the same 0.5 m journey costs half a second, and the stretch reflex stops being a reflex.

</details>

## Connections

- **Backward:** the size principle is [1.5](01-05-cable-theory-conduction.md)'s $R_{\text{in}} = R_m/A$ doing control engineering; the minimum firing rate is [1.3](01-03-the-action-potential.md)'s afterhyperpolarisation setting a floor; reciprocal inhibition and the half-centre oscillator are [2.6](02-06-circuit-motifs-computation.md)'s motifs; the population vector is [3.1](03-01-transduction-neural-coding.md)'s population code in the system that made it famous; the proprioceptors are [3.3](03-03-audition-somatosensation.md)'s mechanotransduction pointed at the body instead of the world.
- **Forward:** [3.5](03-05-motor-control-correction.md) starts exactly where Example 2 ends — a feedback loop too slow and too low-gain to control fast movement — and answers it with internal models, the cerebellum and the basal ganglia; the degrees-of-freedom problem and muscle synergies are handed over there; [4.3](04-03-attention-decision-making.md) treats action selection as evidence accumulation reaching a bound.
- **Sideways:** the stretch reflex is a textbook servo — reference, plant, sensor, delay — and every term of Example 2's stability estimate is [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md) and [control-systems 3.4](../../control-systems/lessons/03-04-gain-and-phase-margins.md); the contractile machinery on the other side of the neuromuscular junction is [physiology 1.6](../../physiology/lessons/01-06-muscle-contraction.md) and the junction itself [physiology 1.5](../../physiology/lessons/01-05-neuromuscular-autonomic-transmission.md); the half-centre CPG and the dynamical-systems reading of motor cortex are phase-plane objects ([dynamical-systems 2.3](../../dynamical-systems/lessons/02-03-limit-cycles.md)).
