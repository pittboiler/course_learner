# Human Physiology · Lesson 1.6: Muscle contraction

> ⏱ ~15 min · Module 1: Homeostasis, cells, and excitable tissue · Builds on: [1.5](01-05-neuromuscular-autonomic-transmission.md), [1.4](01-04-action-potential.md) · Unlocks: 2.1 (cardiac electrophysiology), 2.2 (the cardiac cycle)

## Why this matters

[1.5](01-05-neuromuscular-autonomic-transmission.md) delivered a signal to the muscle fibre's surface and left it there. This lesson converts that voltage into force — and it is the last purely cellular lesson in the course, because everything after it is a muscle doing a job. **The heart is a muscle, the arterioles are muscle, the airways are muscle, the gut is muscle, the bladder is muscle.** Get the machine right once and Modules 2 through 4 are applications.

Three of the results here get used by name later. **The length–tension curve is the Frank–Starling law of the heart** ([2.2](02-02-cardiac-cycle-and-output.md)) — not an analogy, the same curve. **The latch state of smooth muscle** is what lets an arteriole hold its diameter for a lifetime on almost no ATP ([2.3](02-03-hemodynamics-blood-pressure.md)). And **the fact that cardiac muscle cannot tetanize** is a structural consequence of its action potential ([2.1](02-01-cardiac-electrophysiology.md)), not a design choice — a heart that could tetanize would be a heart that could not fill.

## The idea

**A muscle shortens because two sets of filaments slide past each other. Neither filament changes length.**

That sentence sounds like a technicality and is in fact the whole model, and it was not obvious — the natural guess, held until 1954, was that some protein coils up like a spring. Two groups killed that guess in the same issue of *Nature* by looking at contracting muscle under a microscope and measuring the stripes.

Skeletal muscle is striped because it is built from a repeating unit, the **sarcomere**, about 2 μm long, stacked end to end down the fibre. Each sarcomere is bounded by two **Z-discs**. **Thin filaments** (actin, plus its regulatory passengers) project inward from each Z-disc. A **thick filament** (a bundle of myosin molecules) floats in the middle, held centred by the **M-line**, with its myosin heads projecting outward everywhere except a bare central patch. Under the microscope, the region occupied by thick filament looks dark — the **A band** — and the region containing only thin filament looks light — the **I band**. Inside the A band, the central stretch that no thin filament has reached yet is the **H zone**.

**Here is the observation that clinched it.** As the muscle shortens:

| Band | What it is | What it does on shortening |
|---|---|---|
| **A band** | full extent of the thick filament | **does not change** |
| I band | thin filament with no thick filament beside it | shrinks |
| H zone | thick filament with no thin filament beside it | shrinks |

*If the thick filament shortened, the A band would shorten. It does not.* So the filaments keep their lengths and the thin ones are pulled inward, past the thick, from both ends — the I band and H zone are consumed from opposite directions. **Shortening is sliding.**

**What does the pulling is a rowing motion.** Each myosin head reaches out, grabs the thin filament, swings, lets go, re-cocks, and grabs again — an oar stroke of roughly 10 nm at roughly 5 pN, repeated by a billion heads out of phase with each other so the fibre's motion is smooth. The molecular mechanism of that stroke — how a nanometre-scale object gets directed motion out of a thermal bath at all — belongs to [biophysics 4.3](../../biophysics/lessons/04-03-molecular-motors-ratchet.md), which shows it is a rectified Brownian ratchet rather than a piston. We take the stroke as given and ask what a muscle full of them does.

**And the switch on all of it is calcium.** The resting muscle is not idle, it is *jammed*: a rope-like protein called tropomyosin sits over the myosin-binding sites on actin so the heads have nothing to grab. **Relaxation is a state that is actively maintained, not a state that happens when nothing is going on** — which is why relaxation costs ATP too, and why, in a muscle running out of energy, **relaxation fails before contraction does**.

## The formal version

### The cross-bridge cycle, and ATP's two separate jobs

Four states. Follow one myosin head around the loop.

1. **Rigor (attached, no nucleotide).** The head is bound tightly to actin at the end of its stroke. Nothing in this state wants to move.
2. **Detachment.** **A fresh ATP binds the head**, which collapses myosin's affinity for actin, and the head lets go. *In words: ATP is not burned to break the bond — merely arriving is enough.*
3. **Cocking (hydrolysis).** The head hydrolyses that ATP to ADP + Pi, keeping both products bound. The energy released rotates the lever arm into the "cocked", pre-stroke position. *In words: hydrolysis is what re-arms the head; it does not power the stroke directly.*
4. **Power stroke.** The cocked head binds actin weakly — **only if tropomyosin has moved out of the way** — then releases Pi, which triggers the lever arm to swing through about 10 nm; ADP leaves, and the head is back in state 1.

$$\text{rigor} \;\xrightarrow{\text{ATP binds}}\; \text{detached} \;\xrightarrow{\text{hydrolysis}}\; \text{cocked} \;\xrightarrow{\text{P}_i\ \text{released}}\; \text{power stroke} \;\longrightarrow\; \text{rigor}$$

**The two jobs are done by different events on the same molecule: *hydrolysis* cocks the head, and *binding of the next ATP* releases it.** That is not a bookkeeping detail; it makes an immediate prediction.

**Rigor mortis is a corollary, not a fact to memorise.** When a cell dies, ATP production stops and the residual ATP is consumed within a few hours. Every head that arrives at state 1 needs a fresh ATP to leave it — and there is none. So the heads lock, and **the muscle becomes stiff rather than floppy**, which is the opposite of what most people expect a dead muscle to be. The stiffness resolves a day or two later only because proteolysis destroys the filaments themselves. (Two independent locks explain why a *living* resting muscle is not stiff: tropomyosin prevents the heads from attaching at all, and ATP is abundant.)

### Excitation–contraction coupling: the switch

The chain from surface voltage to force, in order:

$$\text{surface AP} \to \text{T-tubule} \to \text{DHPR} \to \text{RyR} \to \text{Ca}^{2+}\ \text{from SR} \to \text{troponin C} \to \text{tropomyosin moves} \to \text{cross-bridges}$$

Term by term:

- **T-tubules** are invaginations of the surface membrane that dive into the fibre's interior, so the action potential from [1.4](01-04-action-potential.md) is carried to the centre of the fibre within a fraction of a millisecond instead of diffusing there. A fibre 50 μm across would otherwise take tens of milliseconds to activate its core.
- **DHPR** (the dihydropyridine receptor, an L-type $\text{Ca}^{2+}$ channel) sits in the T-tubule membrane and acts as the **voltage sensor**.
- **RyR** (the ryanodine receptor) is the $\text{Ca}^{2+}$-release channel of the **sarcoplasmic reticulum**, the internal $\text{Ca}^{2+}$ store.
- **In skeletal muscle the DHPR and the RyR are physically coupled**: the voltage sensor changes shape and *mechanically* pulls the release channel open. No calcium needs to enter from outside. **In cardiac muscle they are not touching** — see below.
- Released $\text{Ca}^{2+}$ raises free cytosolic $[\text{Ca}^{2+}]$ from about $10^{-7}\,\text{M}$ to about $10^{-5}\,\text{M}$, a hundredfold jump, and binds **troponin C**. Troponin's shape change drags **tropomyosin** deeper into the actin groove, uncovering the myosin-binding sites.

*In words: voltage moves a sensor, the sensor opens a calcium store, calcium unjams the thin filament.*

**Relaxation is the reverse and it is expensive.** **SERCA**, the SR calcium pump, moves 2 $\text{Ca}^{2+}$ back into the store per ATP hydrolysed — a primary active transporter of exactly the kind in [1.2](01-02-membrane-transport.md). Nothing relaxes until the calcium is gone.

$$\boxed{\;\text{contraction costs ATP (cross-bridges); relaxation costs ATP (SERCA); rest costs ATP (leak pumping).}\;}$$

**This is why relaxation fails first.** In severe ATP depletion, SERCA stalls while enough ATP remains for some cycling, so calcium lingers and the muscle stiffens into a contracture. Cramp, heat rigor, and the ultimate case, rigor mortis, are all failures of the *off* switch.

### Twitch, summation, tetanus

A single action potential produces a **twitch**. The numbers are the whole story:

| Event | Fast skeletal fibre | Cardiac ventricular cell |
|---|---|---|
| Action potential duration | ~2 ms | ~300 ms (plateau) |
| Refractory period | ~3 ms | ~290 ms |
| $\text{Ca}^{2+}$ transient | ~20 ms | ~200 ms |
| Mechanical twitch | ~100 ms | ~300 ms |

**A single twitch reaches only 20–30 percent of the force the fibre can make**, and the table says why: **the calcium transient (~20 ms) is over long before the mechanical response (~100 ms) has run its course.** Calcium is already being pumped away while the fibre is still taking up slack in its tendons and series elasticity. The cross-bridges are switched off before the machine has finished getting tight.

Fire again before the twitch has decayed and the second twitch adds to the residue of the first — **summation**. Fire fast enough (about 50 Hz in a fast fibre, interval 20 ms, well under the 100 ms twitch) and calcium never falls, the twitches fuse, and force plateaus at three to five times twitch height: **tetanus**.

**Skeletal muscle can do this because its refractory period (~3 ms) is 30 times shorter than its twitch (~100 ms)** — the electrical system permits up to about $1/(3\ \text{ms}) \approx 330$ Hz, far more than the ~50 Hz needed. **Cardiac muscle structurally cannot**, because its plateau ([2.1](02-01-cardiac-electrophysiology.md)) stretches the refractory period to ~290 ms, essentially the entire duration of its own twitch:

$$f_{\max}^{\text{cardiac}} = \frac{1}{0.29\ \text{s}} \approx 3.4\ \text{Hz} \approx 207\ \text{min}^{-1}$$

By the time a second cardiac action potential is even possible, the first contraction is over. **There is no window in which summation could occur.** This is a safety interlock built into the shape of the action potential, and it is not optional: a tetanised ventricle is a ventricle that never relaxes, never fills, and ejects nothing.

### Length–tension: derived from overlap

Active tension is proportional to the number of myosin heads that can reach a thin filament — that is, to the **overlap** between the thin filament and the cross-bridge-bearing part of the thick filament. Standard mammalian/frog numbers: thin filament 1.0 μm from each Z-disc, thick filament 1.6 μm, bare central zone 0.2 μm.

Work in a half-sarcomere, measuring from the M-line. The cross-bridge region runs from 0.1 to 0.8 μm (half of the bare zone to half of the thick filament) — a length of 0.7 μm. The thin filament tip sits at $L/2 - 1.0$, where $L$ is sarcomere length.

$$\text{overlap}(L) = 0.8 - \left(\tfrac{L}{2} - 1.0\right) = 1.8 - \tfrac{L}{2}\ \ \mu\text{m}, \qquad T_{\text{rel}} = \frac{\text{overlap}}{0.7}$$

*In words: on the descending limb, tension falls in a straight line as you pull the filaments apart.* This gives four landmarks with no extra assumptions:

| $L$ (μm) | What happens geometrically | Tension |
|---|---|---|
| 3.6 | thin filament tip leaves the thick filament entirely | **0** |
| 2.2 | thin filament tip reaches the bare zone — every head engaged | **1.0** (plateau top) |
| 2.0 | thin filaments from opposite Z-discs meet at the M-line | **1.0** (plateau bottom) |
| < 2.0 | **double overlap**: thin filaments interdigitate past the M-line and get in each other's way | falling |
| 1.6 | thick filament runs into the Z-disc and buckles | steeply falling |

**Both ends are weak, for completely different reasons.** Too long: not enough heads reach. Too short: the thin filaments collide with each other, then the thick filament collides with the Z-disc. Only the narrow plateau, 2.0–2.2 μm, gets all 0.7 μm of cross-bridge region engaged with nothing in the way.

**Your skeleton keeps you on the plateau.** Joint geometry limits how far any muscle can shorten or be stretched; over a normal range of motion, sarcomere length in human limb muscle stays near 2.0–2.4 μm. The length–tension curve is real but you rarely visit its edges.

**The heart deliberately does not.** Resting cardiac sarcomere length is about 1.8–1.9 μm and rises toward 2.2 μm as the ventricle fills — **the heart operates on the ascending limb, and this is the Frank–Starling law**: more filling stretches the sarcomeres toward optimum, so the next beat is stronger. That is the bridge [2.2](02-02-cardiac-cycle-and-output.md) will use to explain how the heart matches its output to its input without being told to. (Overlap is only part of the cardiac story; stretch also raises troponin C's *sensitivity* to calcium, which is why the cardiac ascending limb is steeper than pure geometry predicts.)

### Force–velocity and power

Hold a muscle isometric and it makes its maximum force $F_0$. Let it shorten and force drops, because a head that has just stroked must detach and re-cock, and while it is detached it is carrying nothing. Faster shortening means a smaller fraction of heads attached at any instant. A. V. Hill's hyperbola fits it:

$$(F + a)(v + b) = (F_0 + a)\,b$$

where $v$ is shortening velocity, $F_0$ the isometric force, and $a$ and $b$ are constants with $a/F_0 = b/v_{\max} \approx 0.25$ for typical fast muscle. *In words: force and velocity trade off along a hyperbola — you can have force or speed, not both.*

Power is the product:

$$P = Fv = \frac{b\,F(F_0 - F)}{F + a}$$

At $F = F_0$, $v = 0$ and $P = 0$: pushing a wall does no work. At $F = 0$, $v = v_{\max}$ and $P = 0$: waving an empty hand does no work either. **Maximum power is at an intermediate load** — differentiating with $a = 0.25F_0$ gives

$$F^* = 0.309\,F_0, \qquad v^* = 0.309\,v_{\max}, \qquad P_{\max} \approx 0.095\,F_0 v_{\max}$$

**About 31 percent of maximum force, at about 31 percent of maximum speed, delivering about a tenth of the notional product $F_0 v_{\max}$.** This is why a bicycle has gears and why a well-chosen cadence exists: the gear ratio is a device for holding your leg muscles near $0.31 F_0$ regardless of the hill.

### Fibre types, briefly

| | Type I | Type IIa | Type IIx |
|---|---|---|---|
| Myosin ATPase rate | slow | fast | fastest |
| $v_{\max}$ | low | high | highest |
| Metabolism | oxidative | oxidative-glycolytic | glycolytic |
| Mitochondria, myoglobin | many | many | few |
| Fatigue | very resistant | intermediate | rapid |

**The whole difference in speed comes from the myosin isoform's ATPase rate**, i.e. how fast it turns the cycle above; the metabolic differences determine how long it can keep doing so. Which fibres get used, and in what order, is the nervous system's decision — motor units, the size principle, and rate coding are [neuroscience 3.4](../../neuroscience/lessons/03-04-motor-systems.md)'s territory, and this lesson takes the firing pattern as given.

### Smooth muscle: the same motor, a different switch

Smooth muscle has actin and myosin but **no sarcomeres, no troponin, and no T-tubules**. Filaments run obliquely between *dense bodies* rather than in register, which is why it is not striped — and why it can generate force over an enormous length range that would leave a sarcomere shredded (think bladder, or stomach).

Its regulation is on the **thick** filament, not the thin:

$$\text{Ca}^{2+} \to \text{calmodulin} \to \text{Ca}^{2+}\text{-CaM} \to \text{MLCK} \to \text{myosin light chain phosphorylated} \to \text{cycling}$$

**MLCK** is myosin light-chain kinase; the opposing phosphatase **MLCP** removes the phosphate. *In words: in striated muscle calcium unblocks the track; in smooth muscle calcium switches on the motor.* Tone is therefore set by the **ratio** of kinase to phosphatase activity, which gives a second, calcium-independent control knob: signals that inhibit MLCP (via Rho-kinase, one of the cascades in [molecular-cell-biology 2.2](../../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md)) raise force at unchanged calcium — "calcium sensitisation."

**The latch state is the payoff.** When a phosphorylated cross-bridge is dephosphorylated *while still attached*, it does not release — it detaches extraordinarily slowly. Force is maintained by a population of near-frozen cross-bridges cycling perhaps a hundred times more slowly than skeletal ones, and **since the ATP cost of holding force is the cycling rate times the cost per cycle, the economy improves by orders of magnitude.** A smooth muscle can hold a given tension for hours on an ATP budget that would exhaust a skeletal muscle in a minute.

**This is exactly what an arteriole needs.** Every arteriole in your body is partly constricted, all day, every day, and that resting tone is the resistance term in [2.3](02-03-hemodynamics-blood-pressure.md). Latch is why maintaining it is nearly free.

### Cardiac muscle: striated, but graded differently

Cardiac muscle is striated and uses troponin/tropomyosin exactly as skeletal muscle does. Three differences matter, and all three come back in Module 2.

1. **Calcium-induced calcium release (CICR).** DHPR and RyR2 are *not* mechanically coupled. Depolarisation opens the L-type channel, a trickle of $\text{Ca}^{2+}$ enters from outside, and *that* calcium binds RyR2 and triggers the large SR release. **So cardiac contraction depends on extracellular calcium in a way that skeletal contraction does not** — which is why calcium-channel blockers weaken the heart and do nothing to skeletal muscle.
2. **No tetanus**, for the refractory-period reason above.
3. **No recruitment.** The myocardium is an electrical syncytium: gap junctions in the intercalated discs mean every cell is excited on every beat. There is no equivalent of adding motor units.

$$\boxed{\;\text{skeletal: how many fibres, and how fast}\;}$$

$$\boxed{\;\text{cardiac: how much } \text{Ca}^{2+} \text{, and how long the sarcomere}\;}$$

The calcium knob is **contractility** (sympathetic β₁ stimulation → PKA → more calcium per beat, and faster SERCA); the length knob is **Frank–Starling**. Those are the only two, and [2.2](02-02-cardiac-cycle-and-output.md) is largely a study of them.

## Picture

![Two stacked panels sharing one horizontal sarcomere-length axis. The upper panel shows three sarcomere schematics at 1.7, 2.2 and 3.0 micrometres. At 1.7 the thin filaments from opposite Z-discs run past each other in the middle and the thick filament nearly touches the Z-discs. At 2.2 the thin filaments just meet the edges of the bare central zone, giving maximum overlap. At 3.0 the thin filaments have been pulled out so that only a short stretch of each overlaps the thick filament, leaving a wide H zone; the A band, I band and H zone are labelled on this one. The lower panel plots relative active tension against sarcomere length, with a steep ascending limb rising to a narrow plateau between 2.0 and 2.2 micrometres and a straight descending limb falling to zero at 3.6 micrometres. Dashed lines connect each schematic to its point on the curve, and a shaded green band from 1.8 to 2.2 micrometres marks the cardiac operating range on the ascending limb.](assets/01-06-fig1.svg)

## Worked examples

**Example 1 (mechanical — reading the curve off the geometry).** Using thin filament 1.0 μm, thick 1.6 μm, bare zone 0.2 μm: (a) predict relative active tension at $L = 2.6\ \mu\text{m}$ and at $L = 3.0\ \mu\text{m}$; (b) find the length at which tension is exactly half-maximal; (c) a muscle fibre is held at 3.0 μm and someone reports it is "too weak to be healthy." Respond.

**(a)** On the descending limb, overlap per half-sarcomere is $1.8 - L/2$, out of a maximum 0.7 μm.

$$L = 2.6:\quad \text{overlap} = 1.8 - 1.3 = 0.5\ \mu\text{m}, \quad T_{\text{rel}} = \frac{0.5}{0.7} = \mathbf{0.71}$$

$$L = 3.0:\quad \text{overlap} = 1.8 - 1.5 = 0.3\ \mu\text{m}, \quad T_{\text{rel}} = \frac{0.3}{0.7} = \mathbf{0.43}$$

**(b)** Set $T_{\text{rel}} = 0.5$:

$$\frac{1.8 - L/2}{0.7} = 0.5 \;\Longrightarrow\; 1.8 - \frac{L}{2} = 0.35 \;\Longrightarrow\; L = \mathbf{2.9\ \mu\text{m}}$$

**A 32 percent stretch beyond optimum costs half the force.** The descending limb is unforgiving because tension is *linear* in overlap and overlap is linear in length.

**(c)** The fibre is fine; it is being asked the wrong question. Active tension at 3.0 μm is 43 percent of maximum **because 57 percent of its myosin heads have nothing to grab** — a geometric fact about the preparation, not a defect in the tissue. Return it to 2.1 μm and it will make full force. (Note also that *total* tension at 3.0 μm exceeds 43 percent, because stretched titin contributes substantial **passive** tension; only the *active* component follows the overlap curve.)

**Example 2 (why you'd care — is the motor efficient?).** A single myosin head produces about 5 pN of force through a stroke of about 10 nm. Hydrolysing one ATP inside a cell releases about 50 kJ/mol. (a) How much work does one stroke do, in joules and in units of $k_BT$ at body temperature? (b) What is the single-stroke efficiency? (c) Whole-body mechanical efficiency during cycling is 20–25 percent. Reconcile.

**(a)** $$W = F d = (5\times10^{-12}\ \text{N})(10\times10^{-9}\ \text{m}) = 5\times10^{-20}\ \text{J}$$

At $T = 310$ K, $k_BT = (1.381\times10^{-23})(310) = 4.28\times10^{-21}\ \text{J}$, so

$$W = \frac{5\times10^{-20}}{4.28\times10^{-21}} = \mathbf{11.7\,k_BT}$$

**(b)** Per molecule, $$\Delta G_{\text{ATP}} = \frac{50{,}000\ \text{J/mol}}{6.022\times10^{23}\ \text{mol}^{-1}} = 8.30\times10^{-20}\ \text{J} = 19.4\,k_BT$$

$$\eta_{\text{stroke}} = \frac{5\times10^{-20}}{8.30\times10^{-20}} = \mathbf{0.60}$$

**Sixty percent — the cross-bridge is a superb engine**, better than any heat engine you could run between physiological temperatures, because it is not a heat engine at all ([biophysics 4.3](../../biophysics/lessons/04-03-molecular-motors-ratchet.md)). Note also that 11.7 out of 19.4 $k_BT$ means the stroke is worth only a few times the thermal energy scale, which is precisely why the motor has to *rectify* noise rather than overpower it.

**(c)** Multiply the losses in series. Oxidising fuel to ATP in mitochondria captures roughly 40 percent of the substrate's free energy ([general-biology 2.2](../../general-biology/lessons/02-02-cellular-respiration.md)). Of the ATP the muscle then spends, roughly 30 percent goes to SERCA and the ion pumps rather than to cross-bridges. And only some cross-bridge cycles do full work — many strain, detach early, or occur during isometric or antagonist co-contraction.

$$0.40 \times 0.70 \times 0.60 \approx \mathbf{0.17}$$

**Same ballpark as the measured 20–25 percent**, with each of my three estimates a little conservative. **The 75-plus percent that is not work leaves as heat**, at a rate of hundreds of watts during exercise — which is not a nuisance but the central problem of [4.2](04-02-thermoregulation.md) and [4.3](04-03-exercise-integrative-physiology.md), and the reason shivering is a legitimate heating strategy.

## Watch out

- **You might think muscles shorten because the proteins shorten.** They do not. The A band is constant; the filaments slide. This was the actual scientific question, and getting it wrong makes the length–tension curve unexplainable.
- **You might think ATP hydrolysis powers the power stroke.** Hydrolysis *cocks* the head; **Pi release triggers the stroke**, and **binding of a new ATP is what detaches it**. Rigor mortis follows directly: no ATP, no detachment, so a dead muscle is stiff, not limp.
- **You might think relaxation is free.** SERCA burns one ATP per two $\text{Ca}^{2+}$ returned to the store. **Relaxation is the process that fails first when ATP runs low** — cramp and contracture are failures of the off switch, not of the on switch.
- **You might think one action potential gives one full-strength contraction.** It gives 20–30 percent of full strength, because the calcium transient is over in ~20 ms while the mechanical event takes ~100 ms. Full force requires a train.
- **You might think the heart "chooses" not to tetanize.** It cannot. Its plateau makes the refractory period as long as its own twitch, so summation is geometrically impossible. Compare skeletal muscle, where the refractory period is 30 times shorter than the twitch.
- **You might read the ascending limb as a defect.** For the heart it is the control law: operating below optimum means a stretched ventricle makes a stronger beat, which is Frank–Starling. Operating on the *descending* limb would be a positive feedback loop and would be fatal.
- **You might expect smooth muscle to have troponin.** It has none. Calcium works through calmodulin and MLCK on the myosin light chain — regulation on the thick filament, not the thin.

## One-liner

> Muscle force is the number of myosin heads that can reach a thin filament, so overlap geometry *is* the length–tension curve; calcium unjams the thin filament while ATP does two separate jobs — hydrolysis cocks the head, a fresh ATP releases it — and everything downstream, from rigor mortis to Frank–Starling to why a heart cannot tetanize, falls out of those two facts.

## Problems

**P1 (🟢)** A muscle from an unusual animal has thin filaments 1.2 μm long from each Z-disc; its thick filament is the standard 1.6 μm with a 0.2 μm bare zone. (a) Give the plateau range. (b) Give the sarcomere length at which active tension reaches zero. (c) Compute relative active tension at $L = 3.2\ \mu\text{m}$. (d) If you wanted to *widen* this muscle's working range rather than shift it, which filament would you lengthen, and why?

**P2 (🟡)** A muscle has $F_0 = 200$ N and $v_{\max} = 1.5$ m/s, with Hill constants $a = 0.25 F_0 = 50$ N and $b = 0.25 v_{\max} = 0.375$ m/s. (a) Find shortening velocity and mechanical power at a load of 100 N. (b) Repeat at 60 N and at 160 N. (c) Which load gives the most power, and what does that tell you about gear choice on a bicycle?

**P3 (🔴, bridges to 2.2)** A cardiac sarcomere sits at 1.9 μm at end-diastole; a big preload stretches it to 2.15 μm. Use thin 1.0 μm, thick 1.6 μm, bare zone 0.2 μm. (a) At 1.9 μm, how far does each thin filament project past the M-line, and what is that region called? (b) Explain, in overlap terms plus one non-geometric mechanism, why the 2.15 μm beat is stronger. (c) Suppose instead the heart operated at 2.8 μm, on the descending limb. Show that this creates a positive feedback loop and say why that is lethal — then state which principle from [1.1](01-01-homeostasis-feedback-control.md) it violates.

<details>
<summary>Solutions</summary>

**P1 (a)** Two conditions bound the plateau.

*Lower end* — the thin filament tips from opposite Z-discs just meet at the M-line, so each has travelled its full 1.2 μm:

$$L_{\text{low}} = 2 \times 1.2 = \mathbf{2.4\ \mu\text{m}}$$

*Upper end* — the thin filament tip just reaches the edge of the bare zone, which lies 0.1 μm from the M-line:

$$\frac{L}{2} - 1.2 = 0.1 \;\Longrightarrow\; L_{\text{high}} = \mathbf{2.6\ \mu\text{m}}$$

Plateau: **2.4–2.6 μm** (versus 2.0–2.2 μm for the standard sarcomere — the whole curve is shifted right by 0.4 μm, exactly twice the extra 0.2 μm of thin filament).

**(b)** Zero overlap when the thin filament tip clears the end of the thick filament:

$$L_0 = 1.6 + 2(1.2) = \mathbf{4.0\ \mu\text{m}}$$

**(c)** Half-sarcomere overlap on the descending limb:

$$\text{overlap} = 0.8 - \left(\frac{L}{2} - 1.2\right) = 2.0 - \frac{L}{2}$$

$$L = 3.2:\quad \text{overlap} = 2.0 - 1.6 = 0.4\ \mu\text{m}, \qquad T_{\text{rel}} = \frac{0.4}{0.7} = \mathbf{0.57}$$

**(d)** **Lengthen the thick filament.** Compute the width of the descending limb in general. With thin length $\ell$, thick length $t$, bare zone $z$:

$$L_0 = t + 2\ell, \qquad L_{\text{high}} = z + 2\ell, \qquad L_0 - L_{\text{high}} = t - z$$

$$\boxed{\;\text{descending-limb width} = t - z, \ \text{independent of }\ell\;}$$

**Lengthening the thin filament translates the entire curve to the right without widening it** — every landmark moves by $2\Delta\ell$ and the shape is unchanged. Only the cross-bridge-bearing length of the thick filament, $t - z$, sets how far you can stretch before force is gone. (Real biology agrees: barnacle and other invertebrate muscles achieve enormous forces and long working ranges with thick filaments several micrometres long.)

**P2 (a)** Hill's relation with the constant on the right:

$$(F+a)(v+b) = (F_0+a)b = (250)(0.375) = 93.75$$

$$F = 100:\quad (150)(v + 0.375) = 93.75 \;\Longrightarrow\; v + 0.375 = 0.625 \;\Longrightarrow\; v = \mathbf{0.25\ \text{m/s}}$$

$$P = Fv = (100)(0.25) = \mathbf{25\ \text{W}}$$

*(Sanity checks on the constant: at $F=0$, $v + 0.375 = 93.75/50 = 1.875$, so $v = 1.5 = v_{\max}$ ✓. At $v=0$, $F + 50 = 93.75/0.375 = 250$, so $F = 200 = F_0$ ✓.)*

**(b)** $$F = 60:\quad (110)(v+0.375) = 93.75 \;\Longrightarrow\; v = 0.8523 - 0.375 = \mathbf{0.477\ \text{m/s}}, \quad P = \mathbf{28.6\ \text{W}}$$

$$F = 160:\quad (210)(v+0.375) = 93.75 \;\Longrightarrow\; v = 0.4464 - 0.375 = \mathbf{0.0714\ \text{m/s}}, \quad P = \mathbf{11.4\ \text{W}}$$

**(c)**

| Load | $F/F_0$ | $v$ (m/s) | Power (W) |
|---|---|---|---|
| 160 N | 0.80 | 0.071 | 11.4 |
| 100 N | 0.50 | 0.25 | 25.0 |
| **60 N** | **0.30** | **0.477** | **28.6** |

**The 60 N load wins**, and it is close to the true optimum: differentiating $P = bF(F_0-F)/(F+a)$ and setting the numerator $-F^2 - 0.5F_0F + 0.25F_0^2$ to zero gives $F^* = 0.309F_0 = 61.8$ N, $v^* = 0.464$ m/s, $P_{\max} = 28.7$ W. Note the heaviest load produces the *least* power despite producing the most force — nearly all of that force is wasted holding still.

**What this says about gears:** a bicycle's gearing lets you choose the load your muscles feel independently of the road's demand. **The right gear is the one that keeps the pedal force near 31 percent of your isometric maximum**, which is also why an optimal cadence exists — too high a gear puts you at 160 N and 11 W, too low puts you near $v_{\max}$ where force and therefore power again collapse. Elite cyclists converge on 80–100 rpm for exactly this reason.

**P3 (a)** At $L = 1.9\ \mu\text{m}$, each half-sarcomere is 0.95 μm, but each thin filament is 1.0 μm long:

$$1.0 - 0.95 = \mathbf{0.05\ \mu\text{m}\ \text{past the M-line}}$$

This is **double overlap** — the thin filaments from the two Z-discs interdigitate. The intruding filament runs antiparallel to the local myosin heads, so those heads either cannot bind productively or pull the wrong way; the sarcomere is on the **ascending limb**, below its plateau (2.0–2.2 μm).

**(b)** *Geometric:* stretching from 1.9 to 2.15 μm eliminates the double overlap (gone at 2.0 μm) and brings the sarcomere onto the plateau, where all 0.7 μm of cross-bridge-bearing thick filament is engaged with correctly oriented thin filament and nothing is in the way. More heads working, more force.

*Non-geometric:* **length-dependent activation.** Stretching a cardiac sarcomere raises troponin C's *affinity for calcium* (lattice spacing narrows, titin-mediated strain is transmitted to the thin filament), so **the same calcium transient activates more cross-bridges at the longer length.** This is why the cardiac ascending limb is far steeper than overlap alone predicts, and it is the modern mechanistic content of the Frank–Starling law that [2.2](02-02-cardiac-cycle-and-output.md) uses.

**(c)** On the descending limb ($L > 2.2\ \mu\text{m}$), tension *falls* as length rises. Trace the loop:

$$\text{ventricle overfills} \to \text{sarcomeres lengthen past } 2.2 \to \text{force falls} \to \text{less blood ejected} \to \text{more residual volume} \to \text{overfills further}$$

$$\boxed{\;\text{each round of the loop makes the next round worse: positive feedback}\;}$$

The ventricle would dilate to failure in a few beats. On the ascending limb the same disturbance closes the *other* way — overfilling makes the next beat **stronger**, ejecting the excess — so filling errors are self-correcting.

This is precisely [1.1](01-01-homeostasis-feedback-control.md)'s distinction: **a controller is stabilising only if the effector's response opposes the disturbance.** The heart is protected by two structural facts working together: it is mechanically prevented from reaching the descending limb (the pericardium and the stiff titin isoform of cardiac muscle both resist stretch beyond ~2.3 μm), and it sits on the ascending limb where the sign of the feedback is correct. **Frank–Starling is not a curiosity of cardiac muscle — it is negative feedback implemented in filament geometry, with no sensor, no nerve, and no delay.**

*(Aside worth carrying to [2.2](02-02-cardiac-cycle-and-output.md): the descending-limb collapse is what makes chronic ventricular dilatation so dangerous, though in real dilated hearts slippage of myocytes past one another, rather than pure sarcomere overstretch, does most of the damage.)*

</details>

## Flashback

**From Lesson 1.4 (the action potential):** A sensory neuron's action potential lasts 1.2 ms. Its **absolute** refractory period, measured from spike onset, is 1.8 ms; refractoriness is fully gone by 4.5 ms. (a) What is the highest firing rate the axon could ever sustain, and what rate could a merely moderate stimulus sustain? (b) Name the molecular state responsible for each of the two refractory phases. (c) A ventricular heart cell has an action potential lasting 300 ms with an absolute refractory period of 290 ms. Compute its maximum rate in beats per minute, and say what the long plateau buys the heart.

<details>
<summary>Solution</summary>

**(a)** The absolute refractory period is the hard floor on the interspike interval:

$$f_{\max} = \frac{1}{1.8\ \text{ms}} = \frac{1}{1.8\times10^{-3}\ \text{s}} = \mathbf{556\ \text{Hz}}$$

but only for a stimulus strong enough to fire the cell the instant it is capable. A moderate stimulus cannot exceed the elevated threshold of the relative refractory period, so it must wait out the full 4.5 ms:

$$f = \frac{1}{4.5\times10^{-3}\ \text{s}} = \mathbf{222\ \text{Hz}}$$

**The gap between the two is the point of the relative refractory period: it converts stimulus intensity into firing rate.** A stronger stimulus fires sooner into the recovery window, so rate codes intensity — a fact [neuroscience 3.1](../../neuroscience/lessons/03-01-transduction-neural-coding.md)'s territory builds on directly.

**(b)** *Absolute:* voltage-gated $\text{Na}^+$ channels are **inactivated** — the inactivation gate is closed, and it does not reopen until the membrane has repolarised. No stimulus of any size can open them, so no spike is possible at all.

*Relative:* two things overlap — some $\text{Na}^+$ channels have recovered but not all (fewer available channels means more depolarisation needed to reach threshold), and voltage-gated $\text{K}^+$ conductance is still elevated, holding the cell hyperpolarised and shunting injected current. Threshold is raised but not infinite.

*(And the same fact explains one-way propagation: the patch of membrane just behind the advancing spike is absolutely refractory, so the spike cannot back-propagate.)*

**(c)** $$f_{\max} = \frac{1}{0.29\ \text{s}} = 3.45\ \text{s}^{-1} \times 60 = \mathbf{207\ \text{beats/min}}$$

The plateau buys two things at once. **First, a refractory period as long as the contraction itself, which makes tetanus impossible** — the heart is guaranteed to relax and refill between beats. **Second, a ceiling on rate:** even a chaotic barrage of atrial impulses cannot drive the ventricle much past 200 per minute, because the tissue is simply not excitable. Both protections come free from the shape of one action potential, and both are unpacked in [2.1](02-01-cardiac-electrophysiology.md).

</details>

## Connections

- **Backward:** the action potential of [1.4](01-04-action-potential.md) is the input here, and its refractory period is what decides whether a tissue can tetanize; the neuromuscular junction of [1.5](01-05-neuromuscular-autonomic-transmission.md) is the step immediately upstream; SERCA is a primary active transporter of exactly the kind catalogued in [1.2](01-02-membrane-transport.md).
- **Forward:** [2.1](02-01-cardiac-electrophysiology.md) derives the plateau whose length-consequences we assumed; [2.2](02-02-cardiac-cycle-and-output.md) turns the ascending limb into the Frank–Starling law and the pressure–volume loop; [2.3](02-03-hemodynamics-blood-pressure.md) needs the smooth-muscle latch state to explain arteriolar tone; [4.3](04-03-exercise-integrative-physiology.md) needs fibre types and the heat produced by 75 percent-wasted ATP.
- **Sideways:** the molecular stepping mechanism — why a 5 pN, 10 nm stroke is a rectified Brownian ratchet and not a piston — is [biophysics 4.3](../../biophysics/lessons/04-03-molecular-motors-ratchet.md); motor units, the size principle, and rate coding are [neuroscience 3.4](../../neuroscience/lessons/03-04-motor-systems.md); actin and myosin as general cytoskeletal machinery are [molecular-cell-biology 1.2](../../molecular-cell-biology/lessons/01-02-cytoskeleton-three-filaments.md) and [molecular-cell-biology 1.3](../../molecular-cell-biology/lessons/01-03-motors-cargo-logistics.md); the ATP budget it all runs on is [general-biology 2.1](../../general-biology/lessons/02-01-energy-atp-enzymes.md).
