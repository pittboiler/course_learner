# Human Physiology · Lesson 2.1: Cardiac electrophysiology

> ⏱ ~15 min · Module 2: The cardiovascular and respiratory systems · Builds on: [1.4](01-04-action-potential.md), [1.6](01-06-muscle-contraction.md) · Unlocks: 2.2 (the cardiac cycle and cardiac output)

## Why this matters

Every other excitable tissue in the body waits to be told. Skeletal muscle needs a motor neuron; a gland needs a hormone. The heart needs nobody — sever every nerve to it, lift it out of the chest, and it keeps beating. **The heart is the only organ that generates its own rhythm and distributes it on its own wiring.**

That independence is not a curiosity. It is a design forced by the job. A pump has to fill, then squeeze, in that order, with the whole chamber acting at once, three billion times without a day off. Every electrical oddity in this lesson — a cell with no resting potential, a deliberate 100 ms delay in the middle of the circuit, an action potential a hundred times longer than a nerve's — exists to satisfy one of those mechanical requirements. **Read the electrophysiology backwards from the mechanics and none of it looks arbitrary.** It is also where the autonomic receptors of [1.5](01-05-neuromuscular-autonomic-transmission.md) start paying rent: heart rate turns out to be the slope of a single voltage ramp, and the nervous system has exactly three knobs on it.

## The idea

The heart solves four problems, and each solution is a piece of the wiring.

**Problem 1: something has to start the beat.** Solution: **automaticity** — build a cell that cannot hold still. A ventricular myocyte at rest sits at $-90$ mV and stays there. A sinoatrial (SA) node cell has **no stable resting potential at all**: as soon as it finishes repolarizing it begins drifting back up, and when the drift reaches threshold it fires. A pacemaker is simply a cell that never finishes repolarizing.

**The drift is the heart rate.** Nothing else matters. If the ramp takes 800 ms to climb from $-60$ to $-40$ mV, the heart beats about once a second. Steepen the ramp and the heart speeds up; that is the entire mechanism.

**Problem 2: only *one* thing should start it.** But many cardiac cells are automatic — the AV junction, the Purkinje fibres. Solution: a **hierarchy** in which the fastest oscillator captures all the others, because it depolarizes them before their own drift reaches threshold. Democracy by pre-emption.

**Problem 3: the atria have to finish before the ventricles start.** If both chambers contracted together, the atria would just push blood backwards into a ventricle that is already squeezing. Solution: **a deliberate delay** — a stretch of deliberately terrible conductor, the AV node, sitting in the only electrical bridge between atria and ventricles.

**Problem 4: the ventricle must squeeze as a unit, and must never tetanize.** A wave crawling through ordinary muscle would make the ventricle writhe — one wall contracting while the other relaxes, producing no pressure. Solution: a **high-speed distribution network** (His–Purkinje) that delivers the signal everywhere almost at once. And a muscle that could summate its twitches would clamp shut and never refill. Solution: a **plateau** that stretches the action potential until it is nearly as long as the contraction, so the cell is refractory for essentially the whole twitch. **A heart that could tetanize could not pump.**

## The formal version

### Automaticity: the pacemaker potential

The SA node's phase 4 is built from three overlapping currents. Notation: $I_x$ is the membrane current carried by mechanism $x$; inward (depolarizing) currents are negative by convention, but we'll just call them "inward".

| Current | Carrier | What it does in phase 4 |
|---|---|---|
| $I_{\text{f}}$ ("funny") | mixed $\text{Na}^+$ / $\text{K}^+$ through HCN channels | inward; **activated by hyperpolarization** |
| $I_{\text{K}}$ (delayed rectifier) | $\text{K}^+$ | outward, and **decaying** — its restraint is progressively removed |
| $I_{\text{Ca,T}}$ (T-type) | $\text{Ca}^{2+}$ | inward, opens late in the drift and carries it to threshold |

**$I_{\text{f}}$ is the "funny" one because it is backwards.** Every voltage-gated channel you met in [1.4](01-04-action-potential.md) and in [biophysics 4.5](../../biophysics/lessons/04-05-excitable-membranes-action-potential.md) opens on *de*polarization. HCN channels open on *hyper*polarization — so the deeper the cell repolarizes, the harder the current pulls it back up. *In words: the pacemaker's restoring force is switched on by the very event that is supposed to end the beat.* That is what makes the oscillation self-sustaining rather than a one-shot spike.

Then phase 0 in the node is carried by **L-type $\text{Ca}^{2+}$ current, $I_{\text{Ca,L}}$ — not $\text{Na}^+$.** Nodal cells sit around $-60$ mV, far too depolarized for fast $\text{Na}^+$ channels to recover from inactivation ([1.4](01-04-action-potential.md)), so they are permanently unavailable. The consequence is a **slow** upstroke: roughly $1$–$10$ V/s in the node against $200$–$500$ V/s in a ventricular myocyte, a factor of about 100.

### Rate is a ramp calculation

Let $V_{\text{MDP}}$ be the **maximum diastolic potential** (the most negative point, where the drift starts), $V_{\text{th}}$ the threshold, and $m$ the phase-4 slope in mV/s. The drift takes

$$t_4 = \frac{V_{\text{th}} - V_{\text{MDP}}}{m},$$

and if the action potential plus repolarization occupies a further $t_{\text{AP}}$, the firing rate is

$$\boxed{\;f = \frac{1}{t_4 + t_{\text{AP}}}\;}$$

*In words: heart rate is one over (time to climb the ramp plus time to spike).* **The autonomic nervous system has three knobs here, and it turns all of them** — reusing the receptors from [1.5](01-05-neuromuscular-autonomic-transmission.md):

| Input | Receptor | Effect on the ramp |
|---|---|---|
| Sympathetic (noradrenaline) | $\beta_1$ → $G_s$ → ↑cAMP | cAMP binds HCN **directly**, shifting $I_{\text{f}}$ activation positive → **steeper $m$**; also lowers $V_{\text{th}}$ via more $I_{\text{Ca,L}}$ |
| Vagal (acetylcholine) | $\text{M}_2$ → $G_i$ → ↓cAMP | **flatter $m$** |
| Vagal, second route | $\text{M}_2$ → $G_{\beta\gamma}$ opens $\text{K}_{\text{ACh}}$ channels | **more negative $V_{\text{MDP}}$** — a longer climb |

**cAMP acting directly on the channel protein, with no kinase in between, is unusual and worth remembering** — it is why sympathetic speeding is so fast, and it is the target of ivabradine, a drug that blocks $I_{\text{f}}$ and so slows the heart without touching contractility. (The cAMP cascade itself is [molecular-cell-biology 2.2](../../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md).)

**A fact that surprises people:** the denervated human SA node's *intrinsic* rate is about 100/min, but resting heart rate is ~70. **The resting heart is a braked heart** — which is why atropine sends the rate to ~100, and why beat-to-beat rate variability is largely a readout of vagal traffic.

### The hierarchy, and what happens when the top fails

| Pacemaker | Intrinsic rate |
|---|---|
| SA node | 60–100/min |
| AV junction | 40–60/min |
| Purkinje / ventricle | 20–40/min |

**The fastest wins, and it wins by pre-emption**: the SA node's wave arrives at the AV junction and depolarizes it before its own slow drift has reached threshold, resetting its clock every beat. The subsidiary pacemakers are not switched off; they are simply never allowed to finish.

**Overdrive suppression** is the extra insurance. Driving a cell faster than its intrinsic rate loads it with $\text{Na}^+$, which makes the electrogenic $\text{Na}^+/\text{K}^+$-ATPase (3 $\text{Na}^+$ out for 2 $\text{K}^+$ in — a net *outward* current, [1.2](01-02-membrane-transport.md)) run harder, hyperpolarizing the cell and flattening its drift, and this persists after the drive stops. So when the SA node fails you get an **escape rhythm** — a subsidiary pacemaker taking over at its own slower rate, but only after a pause, since it must first shake off overdrive suppression and then climb its whole ramp. **That pause is the dangerous part of sinus arrest, not the slow rhythm that follows.**

### The conduction pathway and its two velocity extremes

$$\text{SA node} \to \text{atria} \to \text{AV node} \to \text{bundle of His} \to \text{bundle branches} \to \text{Purkinje} \to \text{ventricular muscle}$$

**Conduction velocity tracks upstroke velocity.** A cell depolarizes its neighbour with local circuit current; a fast, large upstroke ($I_{\text{Na}}$) delivers a lot of that current quickly, a slow small one ($I_{\text{Ca,L}}$) does not. So the AV node's calcium-driven upstroke *is* the reason it conducts at 0.05 m/s — 80 times slower than Purkinje fibre. The physiology and the anatomy are the same fact. (Small cell diameter and sparse, low-conductance gap junctions help.)

**The fibrous skeleton insulates the atria from the ventricles electrically**, so the AV node is the *only* route. That makes it a delay line and a rate-limiting filter at once: in atrial fibrillation the atria fire 400–600 times a minute and the AV node passes perhaps 100–160 of them. Without that filter, atrial fibrillation would be immediately fatal.

### The ventricular action potential: phases and their two jobs

| Phase | Dominant current | Duration |
|---|---|---|
| 0 upstroke | $I_{\text{Na}}$, fast | 1–2 ms |
| 1 notch | $I_{\text{to}}$ (transient outward $\text{K}^+$) | ~10 ms |
| 2 **plateau** | inward $I_{\text{Ca,L}}$ almost exactly balanced by outward $I_{\text{Kr}}$, $I_{\text{Ks}}$ | ~200 ms |
| 3 repolarization | $I_{\text{Ca,L}}$ inactivates, delayed rectifiers win | ~50 ms |
| 4 rest | $I_{\text{K1}}$ (inward rectifier) holds $-90$ mV | until next beat |

**The plateau is a near-perfect current standoff** — that is why it is flat and why it is cheap. It does two jobs:

1. **It admits the $\text{Ca}^{2+}$ that triggers contraction.** The $\text{Ca}^{2+}$ entering through L-type channels is itself too little to activate troponin; it opens ryanodine receptors on the sarcoplasmic reticulum, which release far more — **calcium-induced calcium release**, the cardiac version of the excitation–contraction coupling of [1.6](01-06-muscle-contraction.md). Skeletal muscle's DHPR–RyR coupling is mechanical and needs no external $\text{Ca}^{2+}$; **cardiac coupling is chemical and absolutely requires it**, which is why heart muscle stops in a calcium-free bath and skeletal muscle does not.
2. **It makes the refractory period nearly as long as the twitch.** The effective refractory period runs ~250 ms against a twitch of ~300 ms. Compare skeletal muscle: a ~3 ms refractory period inside a ~100 ms twitch, leaving room for ~33 more stimuli before the first twitch has decayed — which is exactly how tetanus is built. **In the heart there is no room. Cardiac muscle cannot summate, cannot tetanize, and therefore always relaxes and refills.**

### Gap junctions and the functional syncytium

Cardiac myocytes are joined end to end at intercalated discs by **gap junctions** — connexin channels linking cytoplasm to cytoplasm, so current passes directly without a synapse. The atria form one electrically continuous mass and the ventricles another.

**The consequence is that all-or-none applies at the level of the whole chamber, not the cell.** There are no motor units and no recruitment. **Both of skeletal muscle's force-grading mechanisms — recruitment and tetanic summation — are unavailable to the heart**, which is why the entire regulation of cardiac force has to fall on the two remaining levers: how stretched the muscle is (Frank–Starling) and how much $\text{Ca}^{2+}$ is released per beat (contractility). That is the agenda of [2.2](02-02-cardiac-cycle-and-output.md).

### The ECG: a summed extracellular signal

The ECG is a ~1 mV record, from the body surface, of the *extracellular* field produced by millions of cells depolarizing together — about a hundredfold attenuated from the 100 mV transmembrane swing, and spatially smeared.

**Here is the point most people miss.** The field exists only where there is a **boundary** between depolarized and resting tissue. When every cell is at the same potential — all resting, or all sitting in the plateau — there is no gradient and the trace is flat.

$$\text{ECG deflection} \;\propto\; \text{the spatial gradient of } V_m \text{, not } V_m$$

*In words: the ECG is closer to a derivative of the wavefront's position than to a voltage trace.* **A flat ECG does not mean nothing is happening — the ST segment is flat at the moment of most forceful contraction.**

| Feature | What it is |
|---|---|
| **P wave** | atrial depolarization |
| **PR segment** (flat) | the AV nodal delay — silent because the node has almost no muscle mass |
| **QRS** | ventricular depolarization (atrial repolarization is buried inside it) |
| **ST segment** (flat) | the plateau: every ventricular cell depolarized, no gradient |
| **T wave** | ventricular repolarization |

Amplitude tracks mass: the QRS is tall because the ventricles are large, the P wave small, the AV node invisible. And **the ECG records depolarization and repolarization, never contraction** — a QRS of 60–100 ms times only the *passage of a wavefront*, not the 300 ms state of any cell behind it.

**Why the T wave is upright.** Repolarization travels the opposite way to depolarization — epicardium to endocardium, because epicardial cells have more $I_{\text{to}}$, shorter action potentials, and so repolarize first despite depolarizing last. A wave of opposite *charge sign* travelling in the opposite *direction* gives two sign flips, which cancel: **the T wave is upright precisely because repolarization runs backwards.** If it ran the same way as depolarization it would be inverted.

### Re-entry: the general mechanism of arrhythmia

Normal conduction is a wave that annihilates itself — it runs into refractory tissue behind and dies. **Re-entry is what happens when it finds a way back around.** It needs three things:

1. **a circuit** (round a scar, an accessory pathway, or a functional rotor),
2. **unidirectional block** — the wave can go round one way but not the other, so it does not collide with itself,
3. **revolution time longer than the refractory period** — the wave must find excitable tissue when it comes back.

Define the **wavelength**, the length of tissue the refractory wake occupies:

$$\boxed{\;\lambda = \theta \times \text{ERP}\;}$$

with $\theta$ the conduction velocity and ERP the effective refractory period. Re-entry sustains when the circuit path length $L > \lambda$.

*In words: the circuit has to be longer than the tail the wave drags behind it.* **This one inequality explains the whole pharmacology.** Anything that lowers $\theta$ (ischaemia, $\text{Na}^+$-channel blockers) or shortens ERP (catecholamines, $\text{K}^+$ loss) shrinks $\lambda$ and lets *smaller* circuits sustain — so **both slowing conduction and shortening refractoriness are pro-arrhythmic**, which is a genuinely counterintuitive pairing. Lengthening ERP (class III drugs, which block $\text{K}^+$ channels) enlarges $\lambda$ and is antiarrhythmic. Mathematically this is a stable limit cycle in an excitable medium, the same object as in [dynamical-systems 2.3](../../dynamical-systems/lessons/02-03-limit-cycles.md).

## Picture

![Panel a shows a sinoatrial node pacemaker potential in red and a ventricular action potential in blue drawn on one shared time axis running from zero to one thousand milliseconds. The pacemaker trace spikes, repolarizes to a maximum diastolic potential of minus sixty millivolts, then drifts slowly upward to a threshold of minus forty millivolts over eight hundred milliseconds; its phases are annotated with the funny current, the falling potassium current, the T-type calcium current and the L-type calcium upstroke. The ventricular trace stays flat at minus ninety millivolts until one hundred sixty milliseconds, then shows a near-vertical sodium upstroke, a brief transient outward notch, a long flat plateau where L-type calcium current balances delayed-rectifier potassium current, and a repolarization back to rest. Panel b shows a schematic heart with the conduction pathway marked by cumulative activation times: SA node at zero milliseconds, atria at forty, AV node at one hundred forty, bundle of His at one hundred sixty, Purkinje at one hundred ninety and the last ventricular muscle at two hundred twenty. Beside it, on the same time axis, three bars show atrial spread of forty milliseconds, the AV nodal delay of one hundred milliseconds, and eighty milliseconds through His, Purkinje and muscle; beneath them a single ECG complex is aligned in time with P, QRS and T waves labelled and a PR interval of one hundred sixty milliseconds bracketed.](assets/02-01-fig1.svg)

## Worked examples

### Example 1 — heart rate is a slope calculation

An SA node cell has $V_{\text{MDP}} = -60$ mV, $V_{\text{th}} = -40$ mV, a phase-4 slope of $m = 25$ mV/s, and its action potential plus repolarization occupies $t_{\text{AP}} = 0.20$ s. Find the rate at baseline, under sympathetic drive ($m \to 50$ mV/s and $V_{\text{th}} \to -45$ mV), and under strong vagal drive ($m \to 12.5$ mV/s and $V_{\text{MDP}} \to -70$ mV).

**Baseline.**
$$t_4 = \frac{-40 - (-60)}{25} = \frac{20}{25} = 0.80\ \text{s}, \qquad T = 0.80 + 0.20 = 1.00\ \text{s}$$
$$f = \frac{1}{1.00\ \text{s}} = 1\ \text{s}^{-1} = \mathbf{60\ \text{beats/min}}$$

**Sympathetic** — two knobs move together: the ramp is twice as steep *and* the target is 5 mV closer.
$$t_4 = \frac{-45-(-60)}{50} = \frac{15}{50} = 0.30\ \text{s}, \qquad T = 0.50\ \text{s}, \qquad f = \mathbf{120\ \text{beats/min}}$$

**Vagal** — the ramp is half as steep *and* the starting line has moved 10 mV further away.
$$t_4 = \frac{-40-(-70)}{12.5} = \frac{30}{12.5} = 2.40\ \text{s}, \qquad T = 2.60\ \text{s}, \qquad f = \frac{60}{2.60} = \mathbf{23\ \text{beats/min}}$$

**Now separate the levers, because this is the useful part.** Halving the slope *alone* (leaving $V_{\text{MDP}}$ at $-60$) gives $t_4 = 20/12.5 = 1.60$ s, $T = 1.80$ s, $f = 33$/min — so the hyperpolarization is what takes 33 down to 23. Steepening the slope alone gives $t_4 = 20/50 = 0.40$ s, $T = 0.60$ s, $f = 100$/min, and the threshold shift adds the last 20.

**Each knob contributes independently, and the vagal pair is the more powerful** — which is why vagal stimulation can stop the heart outright while sympathetic stimulation can only speed it up. (We held $t_{\text{AP}}$ fixed for clarity; catecholamines shorten it too, pushing the sympathetic rate higher still.)

### Example 2 — walking the pathway with a stopwatch

Take one beat from the SA node to the last ventricular myocyte, using representative velocities and path lengths:

| Segment | $\theta$ (m/s) | distance | segment time | cumulative |
|---|---|---|---|---|
| SA node fires | — | — | — | 0 ms |
| atrial muscle → AV node | 1.0 | 4 cm | 40 ms | **40 ms** |
| through the AV node | **0.05** | 5 mm | **100 ms** | **140 ms** |
| bundle of His + branches | 2.0 | 4 cm | 20 ms | 160 ms |
| Purkinje network | **4.0** | 12 cm | 30 ms | 190 ms |
| last ventricular muscle | 0.4 | 12 mm | 30 ms | **220 ms** |

Check one: $0.005\ \text{m} \div 0.05\ \text{m/s} = 0.100\ \text{s}$. **Five millimetres of tissue eats 100 of the 220 ms — 45 percent of the total transit in 3 percent of the distance.** That is the delay, and it is the point of the AV node.

**Read the ECG straight off this table.** The P wave begins when the SA node fires ($t=0$); the QRS begins when ventricular muscle first depolarizes ($t = 160$ ms); the QRS ends when the last of it does ($t=220$ ms). So

$$\text{PR interval} = 160\ \text{ms} \quad (\text{normal } 120\text{–}200), \qquad \text{QRS duration} = 60\ \text{ms} \quad (\text{normal } <100).$$

**The PR interval is essentially a direct readout of AV nodal conduction** — 100 of its 160 ms. When a clinician calls a PR of 240 ms "first-degree AV block", they are reporting a number from row three of this table.

**Now delete the Purkinje network** and let the impulse leave the His bundle and crawl through ordinary ventricular muscle at 0.4 m/s over the same 12 cm:

$$t = \frac{0.12\ \text{m}}{0.4\ \text{m/s}} = 0.300\ \text{s} \quad \text{instead of } 0.030 + 0.030 = 0.060\ \text{s}.$$

Ventricular activation goes from 60 ms to **300 ms, a fivefold-wider QRS** — and 300 ms is the *entire duration of the ventricular action potential*. **The first-activated region would be finishing its twitch exactly as the last region began its own.** The ventricle would writhe rather than squeeze, developing a fraction of the pressure at the same total metabolic cost. This is not hypothetical: it is what a wide-complex escape beat, a bundle-branch block, or a badly-placed pacemaker lead looks like, and it is why cardiac resynchronization therapy exists.

## Watch out

- **You might think the ECG shows the heart contracting.** It shows depolarization and repolarization, which *precede* the mechanics. The QRS comes before ventricular contraction; the T wave falls during ejection; and the flat ST segment is the moment of peak force.
- **You might think an ECG deflection is an action potential.** It is a body-surface record of the spatial gradient of membrane potential across millions of cells. Flat means "no gradient", not "no activity" — which is why the 300 ms plateau produces a 60 ms QRS and then silence.
- **You might think the SA node "sends a signal down wires".** There are no nerves in the conduction system. It is modified myocardium coupled by gap junctions, and conduction is regenerative propagation, cell to cell — the same process as in [1.4](01-04-action-potential.md), just with different channel densities.
- **You might think the refractory period sets the maximum heart rate.** Peak rates near 200/min mean 300 ms cycles, shorter than the resting action potential. The action potential itself shortens as rate rises (delayed rectifiers accumulate in the open state), so refractoriness adapts rather than capping.
- **You might think slowing conduction is always antiarrhythmic.** $\lambda = \theta \times \text{ERP}$: slowing $\theta$ *shrinks* the wavelength and lets smaller circuits sustain re-entry. The CAST trial found exactly this — drugs that suppressed ectopic beats after myocardial infarction increased mortality.
- **You might think a fast heart means a fast SA node.** Any automatic tissue can capture the heart if it beats faster, by the same pre-emption that normally lets the SA node win.

## One-liner

> A pacemaker is a cell that never finishes repolarizing; the AV node is a deliberate 100 ms delay so the atria can empty first; the Purkinje network exists so the ventricle squeezes instead of writhing; and the plateau makes the refractory period nearly as long as the twitch — so the heart, alone among muscles, cannot tetanize, and therefore always refills.

## Problems

**P1 (🟢)** A latent pacemaker in the AV junction has $V_{\text{MDP}} = -65$ mV, $V_{\text{th}} = -40$ mV, phase-4 slope $m = 20$ mV/s, and $t_{\text{AP}} = 0.15$ s. (a) What is its intrinsic firing rate? (b) The SA node is meanwhile driving the heart at 75/min. Why does this cell not also fire at its own rate, producing two rhythms at once? (c) The SA node abruptly stops. Estimate how long after the last conducted beat the first escape beat appears, and say why the true pause is longer than your estimate.

**P2 (🟡)** Ventricular muscle: action potential 300 ms, effective refractory period 250 ms, twitch (contraction plus relaxation) 300 ms. Skeletal muscle: action potential 2 ms, refractory period 3 ms, twitch 100 ms. (a) For each, how many *additional* stimuli can land during one twitch, and at what point in the twitch does the cardiac one arrive? (b) Skeletal tetanus produces roughly three to four times twitch force. Explain in one sentence why the heart cannot obtain force this way — and why it must not. (c) Both of skeletal muscle's force-grading mechanisms are unavailable to the heart. Name them, say what blocks each, and name the two mechanisms the heart uses instead.

**P3 (🔴, bridges to dynamical systems and pharmacology)** A circuit of myocardium loops around a scar with path length $L = 4$ cm. In healthy tissue $\theta = 0.5$ m/s and ERP $= 250$ ms. In ischaemic tissue $\theta$ falls to $0.10$ m/s and ERP shortens to $150$ ms. (a) Compute the wavelength $\lambda = \theta \times \text{ERP}$ in each case and state whether re-entry can sustain around this circuit. (b) If it sustains, compute the tachycardia rate and the excitable gap in both centimetres and milliseconds. (c) A class Ic drug slows conduction further, to $0.07$ m/s, with no effect on ERP. Compute the new $\lambda$ and the new tachycardia rate, and state what happens to the *number* of circuits in the heart capable of sustaining re-entry. Comment on the CAST result.

<details>
<summary>Solutions</summary>

**P1 (a)**
$$t_4 = \frac{-40 - (-65)}{20} = \frac{25}{20} = 1.25\ \text{s}, \qquad T = 1.25 + 0.15 = 1.40\ \text{s}$$
$$f = \frac{60}{1.40} = \mathbf{42.9 \approx 43\ \text{beats/min}}$$

Comfortably inside the textbook AV junctional range of 40–60/min — which is a good check that the numbers are physiological.

**(b)** **Because it never gets to finish its ramp.** The SA node fires every $60/75 = 0.80$ s. The junctional cell needs 1.40 s per cycle, so at $t = 0.80$ s — with its drift only $0.80 - 0.15 = 0.65$ s in, having covered $20 \times 0.65 = 13$ of the required 25 mV — the atrial wave arrives and depolarizes it, resetting the clock to zero. **The subsidiary pacemaker is not switched off; it is pre-empted every single beat.** This is the whole content of "the fastest pacemaker wins".

**(c)** After the last SA-driven beat resets it, the junctional cell must complete a full cycle:
$$t_{\text{escape}} \approx \mathbf{1.40\ \text{s}}$$

**The real pause is longer, because of overdrive suppression.** Having been driven at 75/min — well above its own 43/min — the cell is $\text{Na}^+$-loaded, its electrogenic $\text{Na}^+/\text{K}^+$-ATPase is running hard, and the resulting net outward current has both hyperpolarized $V_{\text{MDP}}$ and flattened $m$. Both changes lengthen $t_4$, and both decay over seconds. **So the escape rhythm arrives late and then accelerates to its true intrinsic rate over the next several beats** — a warm-up that is diagnostic of an escape focus.

**P2 (a)** *Skeletal.* A new stimulus can be delivered every 3 ms once the refractory period has passed, so during a 100 ms twitch:
$$\frac{100\ \text{ms}}{3\ \text{ms}} \approx 33\ \text{additional stimuli}.$$

*Cardiac.* The next stimulus cannot come before 250 ms, and the twitch is over at 300 ms:
$$\left\lfloor \frac{300 - 250}{250} \right\rfloor = 0 \ \text{full extra intervals; at most } \mathbf{1} \text{ stimulus, landing at } t = 250\ \text{ms}.$$

That is $250/300 = \mathbf{83\ \text{percent}}$ of the way through the twitch — after peak tension and most of relaxation. Compare the ratio ERP/twitch: **0.83 for cardiac muscle, 0.03 for skeletal — a factor of 28.**

**(b)** Summation requires a second activation to arrive while $\text{Ca}^{2+}$ from the first is still elevated and force has not decayed; in the heart the earliest possible second activation arrives when 83 percent of the twitch is already over, so there is essentially nothing left to add to. **And it must not: a tetanized ventricle would be a ventricle held shut, which cannot refill — sustained contraction and pumping are mutually exclusive.** The long plateau is therefore a safety interlock built into the action potential itself.

**(c)** *Unavailable:*

| Skeletal mechanism | Why the heart cannot use it |
|---|---|
| **Recruitment** of more motor units | Gap junctions make each chamber a **functional syncytium** — every myocyte fires every beat, so there is nothing left to recruit. All-or-none applies to the chamber. |
| **Tetanic summation** | The refractory period is ~83 percent of the twitch (part a). |

*Used instead:*

1. **Preload / muscle length — the Frank–Starling mechanism.** More filling stretches the sarcomeres toward optimal overlap and more force follows ([2.2](02-02-cardiac-cycle-and-output.md); see also the Flashback below).
2. **Contractility — the $\text{Ca}^{2+}$ released per beat.** $\beta_1$ stimulation raises cAMP, phosphorylates L-type channels and phospholamban, and increases both the trigger $\text{Ca}^{2+}$ and the SR load ([1.5](01-05-neuromuscular-autonomic-transmission.md), [2.2](02-02-cardiac-cycle-and-output.md)).

**This is the deep reason the heart's regulation looks so different from skeletal muscle's:** two of the four obvious levers are structurally forbidden, so evolution had to load everything onto the other two.

**P3 (a)** Healthy tissue:
$$\lambda = 0.5\ \text{m/s} \times 0.250\ \text{s} = 0.125\ \text{m} = \mathbf{12.5\ \text{cm}}.$$
Since $L = 4\ \text{cm} < 12.5\ \text{cm}$, the returning wave meets tissue that is still refractory and **dies. No re-entry.**

Ischaemic tissue:
$$\lambda = 0.10\ \text{m/s} \times 0.150\ \text{s} = 0.015\ \text{m} = \mathbf{1.5\ \text{cm}}.$$
Now $L = 4\ \text{cm} > 1.5\ \text{cm}$: the wave comes back to excitable tissue. **Re-entry sustains.**

**Note that neither the scar nor the circuit changed — only the tissue properties did.** The anatomical substrate was there all along and was harmless.

**(b)** Revolution time:
$$T = \frac{L}{\theta} = \frac{0.04\ \text{m}}{0.10\ \text{m/s}} = 0.40\ \text{s} \;\Longrightarrow\; \text{rate} = \frac{60}{0.40} = \mathbf{150\ \text{beats/min}}$$

a textbook ventricular tachycardia rate. Excitable gap:
$$L - \lambda = 4 - 1.5 = \mathbf{2.5\ \text{cm}}, \qquad T - \text{ERP} = 400 - 150 = \mathbf{250\ \text{ms}}.$$

**The excitable gap is why the circuit is both robust and treatable.** Robust, because a perturbation arriving in the gap does not extinguish it. Treatable, because a paced beat delivered into the gap can enter the circuit, collide with the head of the wave, and terminate it — which is exactly how an implanted defibrillator's antitachycardia pacing works, without a shock.

**(c)** $$\lambda = 0.07\ \text{m/s} \times 0.150\ \text{s} = 0.0105\ \text{m} = \mathbf{1.05\ \text{cm}}, \qquad T = \frac{0.04}{0.07} = 0.571\ \text{s} \Rightarrow \mathbf{105\ \text{beats/min}}.$$

**The drug slowed the tachycardia — and made things worse.** The minimum circuit that can sustain re-entry fell from 1.5 cm to 1.05 cm, a 30 percent reduction in linear scale. Since the number of available circuits in a tissue scales roughly as the reciprocal of the *square* of the minimum size,
$$\left(\frac{1.5}{1.05}\right)^{2} \approx 2,$$
**roughly twice as many locations in the heart can now host a re-entrant circuit.** A slower tachycardia in more places is not an improvement, and a slower circuit is also more likely to be haemodynamically tolerated long enough to degenerate into fibrillation.

**CAST (1989).** Flecainide and encainide — class Ic $\text{Na}^+$-channel blockers, which slow $\theta$ — reliably suppressed the ventricular ectopic beats that predict death after myocardial infarction. The trial was stopped early because mortality in the treated arm was more than double placebo. **Treating the marker was not treating the disease, and the mechanism of the harm is one line of algebra: $\lambda = \theta \times \text{ERP}$.** The drugs that work here are class III agents, which *lengthen* ERP and so *enlarge* $\lambda$.

</details>

## Flashback

**From Lesson 1.6 (muscle contraction):** Take a sarcomere with thick filaments $1.6\ \mu\text{m}$ long carrying a central $0.2\ \mu\text{m}$ bare zone with no myosin heads, and thin filaments extending $1.0\ \mu\text{m}$ inward from each Z-line (ignore Z-line thickness). (a) At a sarcomere length of $3.0\ \mu\text{m}$, what fraction of maximum active tension can this sarcomere develop? (b) At what length does active tension reach zero? (c) A resting cardiac sarcomere sits at about $1.9\ \mu\text{m}$. Where is that on the curve, what does it predict about the effect of filling the ventricle more — and why does a healthy heart never operate on the descending limb?

<details>
<summary>Solution</summary>

**Set up the geometry first.** Each half of the thick filament carries heads over a length
$$\frac{1.6 - 0.2}{2} = 0.7\ \mu\text{m}.$$
Put the left Z-line at 0, so the sarcomere length $S$ puts the right Z-line at $S$ and the thick filament, centred, runs from $S/2 - 0.8$ to $S/2 + 0.8$. The left thin filament occupies $[0,\ 1.0]$. The left head-bearing zone runs from $S/2 - 0.8$ to $S/2 - 0.1$.

Overlap of thin filament with head-bearing zone (for $S \ge 2.2\ \mu\text{m}$, where the thin filament tip has withdrawn to the bare-zone edge or beyond):
$$\text{overlap}(S) = 1.0 - \left(\frac{S}{2} - 0.8\right) = 1.8 - \frac{S}{2}.$$

Check the endpoints: at $S = 2.2$, overlap $= 1.8 - 1.1 = 0.7\ \mu\text{m}$ — the full head-bearing length, so this is the top of the plateau. Active tension is proportional to overlap (each cross-bridge contributes independently — that is the sliding-filament model's central quantitative claim).

**(a)** At $S = 3.0\ \mu\text{m}$:
$$\text{overlap} = 1.8 - 1.5 = 0.3\ \mu\text{m}, \qquad \frac{P}{P_{\max}} = \frac{0.3}{0.7} = \mathbf{0.43}\ (43\ \text{percent}).$$

**(b)** Zero when overlap $= 0$:
$$1.8 - \frac{S}{2} = 0 \;\Longrightarrow\; S = \mathbf{3.6\ \mu\text{m}}.$$
At that length the thin filament tip has just cleared the end of the thick filament: no overlap, no cross-bridges, no active force at any calcium concentration.

**(c)** $1.9\ \mu\text{m}$ is **below** the plateau. The plateau's lower edge is at $S = 2.0\ \mu\text{m}$, where the two opposing thin filaments just meet in the middle ($2 \times 1.0 = 2.0$); below that they interpenetrate — at $1.9\ \mu\text{m}$ by $2(1.0) - 1.9 = 0.1\ \mu\text{m}$ — and the double overlap interferes with cross-bridge attachment. So the resting cardiac sarcomere sits **on the ascending limb, just short of optimal.**

**The prediction is immediate and it is the Frank–Starling law:** filling the ventricle more stretches the sarcomeres from $1.9$ toward the $2.0$–$2.2\ \mu\text{m}$ plateau, overlap improves, and each beat develops more force. **The heart's principal force-control mechanism is that it is deliberately parked below its own optimum**, leaving headroom that venous return can cash in.

**Why never the descending limb:** cardiac muscle has very stiff parallel elastic elements — short, stiff titin isoforms plus a dense collagen network, reinforced by the pericardium — and their passive tension rises almost vertically beyond about $2.3\ \mu\text{m}$. The ventricle is mechanically prevented from being stretched into the region where more filling would give *less* force. **That is a designed-in stability guarantee:** on the ascending limb, more filling always means more output, so the loop is self-correcting. (Skeletal muscle, with compliant parallel elements, has no such protection and can easily be stretched onto its descending limb — which is why over-lengthened muscle is weak.)

</details>

## Connections

- **Backward:** [1.4](01-04-action-potential.md)'s channel-by-channel account of the spike is reused wholesale — but with $\text{Na}^+$ channel inactivation now doing the work of *excluding* fast upstrokes from nodal tissue. [1.6](01-06-muscle-contraction.md)'s excitation–contraction coupling is what the plateau's $\text{Ca}^{2+}$ feeds, with calcium-induced calcium release replacing the mechanical DHPR–RyR link. [1.5](01-05-neuromuscular-autonomic-transmission.md)'s $\beta_1$ and $\text{M}_2$ receptors turn out to have one shared target: the slope of a ramp.
- **Forward:** [2.2](02-02-cardiac-cycle-and-output.md) takes this electrical timing and reads pressures and volumes off it — the QRS opens the story of systole, and $CO = HR \times SV$ makes the ramp calculation of Example 1 a determinant of cardiac output. [2.3](02-03-hemodynamics-blood-pressure.md) closes the loop with the baroreflex, whose output is exactly the autonomic input studied here.
- **Sideways:** the membrane physics — Nernst potentials, driving forces, why $I_{\text{K1}}$ can clamp a cell at $-90$ mV — is [biophysics 4.4](../../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md) and [4.5](../../biophysics/lessons/04-05-excitable-membranes-action-potential.md); the cAMP amplification that makes $\beta_1$ stimulation so fast and so leveraged is [molecular-cell-biology 2.2](../../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md); and re-entry is a limit cycle in an excitable medium, the cardiac instance of [dynamical-systems 2.3](../../dynamical-systems/lessons/02-03-limit-cycles.md).
