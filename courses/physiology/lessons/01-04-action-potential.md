# Human Physiology · Lesson 1.4: The action potential

> ⏱ ~15 min · Module 1: Homeostasis, cells, and excitable tissue · Builds on: [1.3](01-03-resting-membrane-potential.md) · Unlocks: [1.5](01-05-neuromuscular-autonomic-transmission.md) (neuromuscular and autonomic transmission), [2.1](02-01-cardiac-electrophysiology.md) (cardiac electrophysiology)

## Why this matters

[1.3](01-03-resting-membrane-potential.md) built a battery: a cell sitting at about $-75$ mV because it is mostly permeable to $\text{K}^+$ and $\text{K}^+$ wants out. A battery is not a signal. This lesson is about the one event that converts that stored voltage into information — a brief, stereotyped, self-propagating collapse and restoration of the membrane potential that travels the length of an axon without decrement.

Two things make it worth a full lesson rather than a paragraph. First, **the mechanism that starts the spike is the positive feedback loop promised in [1.1](01-01-homeostasis-feedback-control.md)** — the one place in the body where runaway feedback is not pathology but the entire point, and where the interesting engineering question is how it is *stopped*.

Second, and this is what the lesson is really for: **the action potential is not one thing.** A nerve spike lasts 1 ms. A ventricular spike lasts 300 ms. A pacemaker cell has no resting potential to spike *from*. These are not sloppy variations on a theme — the shape is a design decision, and each shape buys its tissue something specific. Getting that straight here is what makes [2.1](02-01-cardiac-electrophysiology.md) fall out almost for free.

## The idea

**Start with the two currents that matter.** At rest, $\text{Na}^+$ is desperate to get in (huge concentration gradient, and the inside is negative, so both forces push the same way) and $\text{K}^+$ is mildly inclined to leave. The cell holds at $-75$ mV because the $\text{K}^+$ door is wide open and the $\text{Na}^+$ door is nearly shut. **The whole action potential is the story of those two doors swapping states and swapping back.**

**Threshold is a tipping point, not a magic number.** Depolarize the membrane a little and two things happen at once: some voltage-gated $\text{Na}^+$ channels open (inward current, more depolarization) and the outward $\text{K}^+$-plus-leak current grows (because you have moved further from $E_K$, so $\text{K}^+$'s driving force is bigger). Below threshold, the outward current wins and the cell slides back to rest — the subthreshold membrane is a *stable* system with negative feedback. **Threshold is exactly the voltage where the growing inward $\text{Na}^+$ current first overtakes the outward one.** One millivolt past it, the loop runs away:

$$\text{depolarize} \;\longrightarrow\; \text{Na}^+ \text{ channels open} \;\longrightarrow\; \text{Na}^+ \text{ enters} \;\longrightarrow\; \text{depolarize more}$$

**That is the positive feedback loop from [1.1](01-01-homeostasis-feedback-control.md), and it is why the spike is all-or-none.** Once the loop is engaged, the size of the spike has nothing to do with the size of the stimulus — the stimulus's only job is to get you over the line.

**Now the question that actually distinguishes people who understand this from people who have memorized it: what stops it?** The common answer — "$\text{K}^+$ flows out and repolarizes the cell" — is wrong, or at least is the second-most-important half of the answer. If $\text{K}^+$ efflux were the only brake, the spike would end but the cell would be immediately ready to fire again, and everything downstream in this course would break.

**The real brake is a second, separate gate on the $\text{Na}^+$ channel itself.** Each voltage-gated $\text{Na}^+$ channel has an *activation* gate that opens fast when the cell depolarizes, and an *inactivation* gate that closes slowly when the cell depolarizes. Depolarization triggers both; the fast one wins first, so the channel opens — and then, a fraction of a millisecond later, the slow one shuts it again. **The channel closes itself while the stimulus that opened it is still present.** That is not a leaky mechanism, it is a timer, and it means:

1. The $\text{Na}^+$ current is self-terminating, so the spike has a fixed duration.
2. An inactivated channel cannot be reopened by *more* depolarization — it only recovers when the cell repolarizes. So the cell is **refractory**, and refractoriness is inactivation's shadow.

**Refractoriness is the most consequential fact in this lesson**, because it does three jobs the body could not do without it:

- **It makes propagation one-way.** The patch of membrane just behind the travelling spike is inactivated, so the local currents spreading backwards find no excitable tissue. The wave can only go forward.
- **It caps firing frequency.** A cell cannot fire faster than one spike per absolute refractory period, which puts a hard ceiling on how much information a rate code can carry.
- **It makes tetanus impossible in cardiac muscle.** In skeletal muscle the refractory period is over long before the twitch is, so twitches sum into a smooth sustained contraction. In the heart the refractory period lasts as long as the contraction does, so beats *cannot* sum — **the heart is structurally incapable of the sustained contraction that would kill you by preventing refilling.**

**And because the spike is all-or-none, amplitude is not available as a code.** A hard pinch and a light touch produce spikes of identical height. **The only free variable left is rate** (and, across a population, how many fibres are recruited). This is why "intensity is coded as frequency" is not a curious fact about neurons but a forced consequence of the mechanism.

## The formal version

**The one equation this lesson runs on**, carried over from [1.3](01-03-resting-membrane-potential.md):

$$I_{ion} = g_{ion}\,(V_m - E_{ion})$$

*In words: an ion's current is its conductance times its driving force, where the driving force is how far the membrane sits from that ion's equilibrium potential.* $g_{ion}$ is the conductance (how open the doors are, in siemens), $V_m$ the membrane potential, $E_{ion}$ the Nernst equilibrium potential. By convention a positive $I$ is an outward current.

**Two equilibrium potentials, computed from the concentrations in [1.3](01-03-resting-membrane-potential.md)** ($[\text{K}^+]_i = 140$, $[\text{K}^+]_o = 4$, $[\text{Na}^+]_i = 15$, $[\text{Na}^+]_o = 145$ mM, at $37^\circ\text{C}$ so the prefactor is $61\,\text{mV}$):

$$E_K = 61\log_{10}\frac{4}{140} = 61(-1.544) = -94\ \text{mV}, \qquad E_{Na} = 61\log_{10}\frac{145}{15} = 61(0.985) = +60\ \text{mV}$$

**These two numbers are the rails the spike runs between.** The cell can never go below $-94$ mV or above $+60$ mV using only these ions, and where it actually sits depends on nothing but the *ratio* of the two conductances.

**The chord conductance equation.** Set the net current to zero, $g_{Na}(V_m - E_{Na}) + g_K(V_m - E_K) = 0$, and solve:

$$\boxed{\;V_m = \frac{g_{Na}E_{Na} + g_K E_K}{g_{Na} + g_K}\;}$$

*In words: the membrane potential is the conductance-weighted average of the equilibrium potentials — whichever door is more open drags $V_m$ toward that ion's reversal potential.* This is the physiologist's working tool, and the whole action potential is one number in it changing.

| Moment | $g_{Na}:g_K$ | $V_m$ from the formula |
|---|---|---|
| Rest | $1:7$ | $\dfrac{0.14(60) + 1(-94)}{1.14} = \mathbf{-75\ \text{mV}}$ |
| Threshold | $1:2.9$ | $\dfrac{0.34(60) + 1(-94)}{1.34} = \mathbf{-55\ \text{mV}}$ |
| Peak | $10:1$ | $\dfrac{10(60) + 1(-94)}{11} = \mathbf{+46\ \text{mV}}$ |

**Two things fall straight out of that table.** First, threshold is reached when $g_{Na}$ has grown only about **2.4-fold** from its resting value — a small change, because near rest the $\text{Na}^+$ driving force is enormous and a little conductance buys a lot of current. Second, from rest to peak $g_{Na}$ rises about **70-fold**, and even that does not get the cell to $E_{Na}$: the peak is $+46$ mV, **14 mV short of $+60$ mV**, because $g_K$ never goes to zero. (The Goldman calculation of [1.3](01-03-resting-membrane-potential.md), with $P_{Na}:P_K = 15:1$ at the peak, gives $+47$ mV — same answer by a different route.)

**Driving forces through the spike.** With $E_{Na} = +60$ and $E_K = -94$:

| Moment | $V_m$ | $V_m - E_{Na}$ (drives $\text{Na}^+$ in) | $V_m - E_K$ (drives $\text{K}^+$ out) |
|---|---|---|---|
| Rest | $-75$ | $-135$ mV | $+19$ mV |
| Threshold | $-55$ | $-115$ mV | $+39$ mV |
| Peak | $+46$ | $-14$ mV | $+140$ mV |
| Trough of the undershoot | $-90$ | $-150$ mV | $+4$ mV |

**Read the peak row carefully — it is the whole story of repolarization.** At the top of the spike the $\text{Na}^+$ driving force has collapsed to a tenth of its resting value while the $\text{K}^+$ driving force has grown **more than sevenfold**. Even before a single channel changes state, the electrical situation has reversed itself. Add inactivation shutting $g_{Na}$ and delayed rectifier $\text{K}^+$ channels finally opening, and repolarization is overdetermined.

**The undershoot** (afterhyperpolarization) is the slow $\text{K}^+$ channels being late to close: for a millisecond or two after $V_m$ has returned, $g_K$ is still above its resting value, so the conductance-weighted average sits closer to $E_K = -94$ than usual. It is not a separate mechanism, just a lag.

**Refractory periods, defined properly.**

| | Cause | Consequence |
|---|---|---|
| **Absolute** ($\approx 1.3$ ms in a nerve) | Nearly all $\text{Na}^+$ channels inactivated | **No stimulus of any size** produces a spike |
| **Relative** ($\approx 2.3$ ms more) | Some $\text{Na}^+$ channels recovered; $g_K$ still elevated | A **larger than normal** stimulus produces a spike, often smaller and later |

*In words: first the cell cannot fire at all, then it can fire but you have to push harder.* The absolute period sets the hard ceiling on firing rate:

$$f_{\max} = \frac{1}{t_{\text{abs}}} = \frac{1}{1.3\ \text{ms}} = 769\ \text{Hz}, \qquad f_{\text{practical}} = \frac{1}{1.3 + 2.3\ \text{ms}} = 278\ \text{Hz}$$

**A neuron receiving ordinary-strength inputs tops out near 280 Hz**, and only the fastest inhibitory interneurons, driven hard, approach the absolute ceiling.

**Propagation is local-circuit current, not conduction.** The active patch is at $+46$ mV while the patch a few hundred micrometres ahead is still at $-75$ mV. That 121 mV difference drives current forward through the axoplasm and back out through the membrane ahead, depolarizing it. When that patch crosses threshold it fires, and becomes the source for the patch beyond. **Nothing travels down the axon; a regenerative event is re-created at each point.** That is why the spike does not attenuate over a metre when a passive voltage would die out in a couple of millimetres.

The margin is deliberately generous: the depolarization a healthy axon delivers to the next patch is measured at roughly five to seven times what threshold requires. **This "safety factor" is why conduction is reliable**, and why partial demyelination can slow conduction a long time before it blocks it — you have several fold of margin to eat through first.

**Conduction velocity and its scaling.** For unmyelinated fibres, cable theory ([neuroscience 1.5](../../neuroscience/lessons/01-05-cable-theory-conduction.md)) gives the length constant as $\lambda \propto \sqrt{d}$ while the membrane time constant is independent of diameter, so

$$v_{\text{unmyelinated}} \propto \sqrt{d}, \qquad v_{\text{myelinated}} \propto d$$

*In words: making a bare axon faster requires quadrupling its diameter for every doubling of speed; making a myelinated axon faster only requires doubling it.* The linear law holds because myelin makes the internode length itself scale with diameter, so a fatter fibre takes proportionally longer strides at roughly constant nodal delay. The empirical mammalian rule is $v \approx 6d$ with $v$ in m/s and $d$ in micrometres, so a 20 µm fibre conducts at about 120 m/s.

**Myelin does two separate things**, and it helps to keep them apart:

1. **It raises membrane resistance** — almost no current leaks out under the wrapping, so charge injected at one node reaches the next instead of dribbling away. This lengthens $\lambda$.
2. **It lowers membrane capacitance** — a hundred layers of lipid in series means far less charge is needed to change $V_m$. This shortens the charging time.

Voltage-gated $\text{Na}^+$ channels are then packed only at the nodes of Ranvier, spaced roughly 100 fibre-diameters apart (about 2 mm for a 20 µm fibre). At 120 m/s the spike crosses one internode in

$$\frac{2\times 10^{-3}\ \text{m}}{120\ \text{m/s}} = 16.7\ \mu\text{s},$$

about 500 regenerations per metre instead of a continuous crawl. This is **saltatory conduction** — the spike appears to jump from node to node.

**Local anaesthetics exploit inactivation.** Lidocaine and its relatives cross the membrane uncharged, protonate in the cytoplasm, and bind the $\text{Na}^+$ channel from the inside — with much higher affinity for the **inactivated** state than the resting one. Since a channel is only inactivated just after it has fired, **block accumulates in proportion to how often the fibre is firing**. This is *use-dependent* (or *phasic*) block, and it is why a local anaesthetic silences small, tonically-firing pain fibres before it touches large motor fibres, and why lidocaine as an antiarrhythmic preferentially suppresses depolarized, rapidly-firing ischaemic myocardium while leaving healthy tissue alone.

*(The statistical-mechanical account of what a gate actually is — a two-state Boltzmann system with a charged voltage sensor — belongs to [biophysics 4.5](../../biophysics/lessons/04-05-excitable-membranes-action-potential.md), and the quantitative $m$, $h$, $n$ formulation of everything above is [neuroscience 1.4](../../neuroscience/lessons/01-04-hodgkin-huxley-model.md). Use their results freely; this lesson is the physiology.)*

## Picture

![Panel a shows a nerve action potential trace with the phases labelled, the sodium and potassium conductance time courses drawn beneath it on the same time axis, and the absolute and relative refractory periods bracketed between them. Panel b compares four tissue action potential shapes on one common time axis of 900 milliseconds, with a hundred-times expanded inset resolving the nerve and skeletal muscle spikes: the nerve and muscle spikes are hairlines at the common scale, the ventricular myocyte shows a long calcium plateau lasting about 300 milliseconds, and the SA node pacemaker has no stable resting level but drifts upward to threshold between beats.](assets/01-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — where the currents go during a spike).** Take $E_{Na} = +60$ mV, $E_K = -94$ mV. At the peak of the spike the cell is at $+46$ mV with $g_{Na} = 10$ and $g_K = 1$ (arbitrary units). (a) Compute both currents. (b) Compute them again at $-75$ mV with $g_{Na} = 0.14$, $g_K = 1$. (c) Explain why the ratio of currents barely changes even though the conductance ratio changes 70-fold.

(a) At $V_m = +46$ mV:

$$I_{Na} = 10\,(46 - 60) = 10(-14) = -140 \quad \text{(negative = inward)}$$

$$I_K = 1\,(46 + 94) = +140 \quad \text{(outward)}$$

**They are equal and opposite — which is exactly what "the peak" means.** The peak is not where $\text{Na}^+$ entry is greatest; it is where net current is zero, the moment the inward flood is exactly balanced by the outward one. $\text{Na}^+$ influx peaked earlier, on the upstroke.

(b) At $V_m = -75$ mV:

$$I_{Na} = 0.14\,(-75-60) = 0.14(-135) = -18.9, \qquad I_K = 1\,(-75+94) = +19.0$$

Also equal and opposite, as they must be at a steady resting potential.

(c) **Because $V_m$ always sits wherever it has to for the currents to cancel.** The chord conductance equation *is* that statement rearranged. What changes 70-fold is not the balance but the *position of the balance point*: at $g_{Na}:g_K = 1:7$ the balance lies at $-75$ mV, at $10:1$ it lies at $+46$ mV.

**The deeper point, and the one worth carrying:** the driving force does most of the work of regulation for free. Opening $\text{Na}^+$ channels raises $V_m$, which shrinks $\text{Na}^+$'s driving force and grows $\text{K}^+$'s, which resists further rise. **The spike is self-limiting even before inactivation arrives** — but self-limiting is not self-terminating, and that is precisely the gap inactivation fills.

**Example 2 (why you'd care — why your heart cannot cramp).** Skeletal muscle: action potential and refractory period both about 3 ms, twitch about 100 ms. Ventricular myocyte: action potential and absolute refractory period about 250 ms, contraction about 300 ms. (a) Compute the maximum stimulation frequency each can follow. (b) Compute the ratio of refractory period to contraction duration for each. (c) Say what this means for force control in each tissue.

(a) $$f_{\max}^{\text{skeletal}} = \frac{1}{3\ \text{ms}} = 333\ \text{Hz}, \qquad f_{\max}^{\text{cardiac}} = \frac{1}{250\ \text{ms}} = 4\ \text{Hz} = 240\ \text{beats/min}$$

(b) $$\frac{t_{\text{refractory}}}{t_{\text{contraction}}}\bigg|_{\text{skeletal}} = \frac{3}{100} = 0.03, \qquad \frac{t_{\text{refractory}}}{t_{\text{contraction}}}\bigg|_{\text{cardiac}} = \frac{250}{300} = 0.83$$

(c) **These two numbers are the entire difference.**

In skeletal muscle the fibre is ready to fire again after 3 percent of the twitch has elapsed. A second spike at, say, 50 Hz arrives 20 ms in, while the first twitch is still developing tension, so **the twitches sum**. Push to 80 Hz and they fuse completely into smooth **tetanus**, at roughly four times the force of a single twitch. This is how a nervous system that can only send identical all-or-none pulses achieves finely graded force: **it grades the rate, and the muscle's slow mechanics do the integrating** ([1.6](01-06-muscle-contraction.md)).

In the ventricle the cell is still absolutely refractory when the contraction is 83 percent done. A second stimulus arriving anywhere in that window does nothing at all; one arriving in the last sliver produces a weak, late beat on an already-relaxing muscle. **Summation is arithmetically impossible, so cardiac tetanus cannot happen.**

**This is not a limitation — it is the design.** A tetanic ventricle would be a ventricle that never relaxes, and a ventricle that never relaxes never refills, so cardiac output goes to zero within seconds. The heart therefore gave up rate-coded force entirely and regulates output by other means: filling volume (Frank–Starling), contractility, and heart rate itself ([2.2](02-02-cardiac-cycle-and-output.md)). **The long plateau is not a slow ion channel that evolution failed to optimize; it is a mechanical safety interlock implemented in ion channels**, and it is the single reason [2.1](02-01-cardiac-electrophysiology.md) looks the way it does.

**Now the panel in the figure, one line each.**

- **Nerve, 1 ms.** Pure $\text{Na}^+$/$\text{K}^+$, over almost before it began — **buys a high information rate**, because a cell that recovers in a few milliseconds can carry a rate code with hundreds of distinguishable levels per second.
- **Skeletal muscle fibre, 3 ms.** Same machinery, slightly slower, and conducted down the T-tubules into the fibre's interior — **buys tetanus**, because a refractory period 33 times shorter than the twitch leaves ample room for summation.
- **Ventricular myocyte, 300 ms.** The upstroke is $\text{Na}^+$ as usual, but then L-type $\text{Ca}^{2+}$ channels hold a plateau near 0 mV — **buys two things at once**: the $\text{Ca}^{2+}$ that triggers contraction enters during the plateau, and the plateau's length makes the refractory period cover the whole contraction, so tetanus is impossible.
- **SA node pacemaker, no resting potential at all.** After each spike the cell reaches about $-60$ mV and then *drifts back up* — the funny current $I_f$ and $\text{Ca}^{2+}$ currents depolarize it steadily until it hits threshold near $-40$ mV and fires again, with the upstroke carried by $\text{Ca}^{2+}$ rather than $\text{Na}^+$ (hence slow). **Buys automaticity plus a rate knob**: the firing rate is set by the *slope* of that drift, which is exactly what autonomic input adjusts.

## Watch out

- **You might think $\text{K}^+$ efflux is what ends the action potential.** It contributes, but **$\text{Na}^+$ channel inactivation is the primary terminator**, and it is the only one of the two that explains refractoriness. Block the $\text{K}^+$ channels and you get a longer, sloppier spike; block inactivation and you get a spike that never ends.
- **You might think the peak reaches $E_{Na}$.** It reaches $+46$ mV, not $+60$ mV, because $g_K$ is never zero — and the shortfall is not a rounding error, it is 14 mV, a quarter of the way back down.
- **You might read the conductance ratio and the permeability ratio as the same number.** They are not. The chord conductance equation needs $g_{Na}:g_K \approx 1:7$ at rest, while Goldman needs $P_{Na}:P_K \approx 0.03:1$. **Different equations, different quantities**; the permeability version accounts for the asymmetric concentrations, the conductance version does not. Both land on $-75$ mV. Use whichever one your data are in.
- **You might think refractoriness means the cell is hyperpolarized.** The cell is *absolutely* refractory at the very peak of the spike, when it is as depolarized as it will ever be. Refractoriness tracks the state of the inactivation gates, not the voltage.
- **You might think a stronger stimulus makes a bigger spike.** It does not — the stimulus only determines *whether* and *when*. During the relative refractory period a stronger stimulus can produce a smaller spike, which is the opposite of the intuition.
- **You might picture saltatory conduction as current jumping through space.** Current flows continuously through the axoplasm the whole way; what is discontinuous is *regeneration*. The spike is rebuilt only at the nodes, and merely coasts electrotonically between them.

## One-liner

> The spike is a positive feedback loop that fires when inward $\text{Na}^+$ current overtakes outward $\text{K}^+$ current, is terminated not by $\text{K}^+$ efflux but by a second gate that inactivates the $\text{Na}^+$ channel and leaves the cell refractory — and refractoriness is what forces propagation one-way, caps firing rate, and makes cardiac tetanus impossible.

## Problems

**P1 (🟢)** A neuron has $E_{Na} = +60$ mV and $E_K = -94$ mV. (a) Compute the $\text{Na}^+$ and $\text{K}^+$ driving forces at $V_m = -60$ mV. (b) Using the chord conductance equation, find the $g_{Na}:g_K$ ratio that would hold the cell at exactly $0$ mV. (c) A toxin removes $\text{Na}^+$ channel inactivation entirely without touching activation. Predict, in one sentence each, what happens to the spike's duration and to the cell's ability to fire a second spike.

**P2 (🟡, bridges to [2.1](02-01-cardiac-electrophysiology.md))** An SA node cell's cycle at rest is 1000 ms long: the action potential occupies 300 ms, and the remaining time is phase-4 drift from a maximum diastolic potential of $-60$ mV up to a threshold of $-40$ mV. (a) Compute the slope of the phase-4 drift in mV/s. (b) Noradrenaline doubles the slope and leaves the action potential duration unchanged. Compute the new heart rate in beats per minute. (c) Acetylcholine instead hyperpolarizes the maximum diastolic potential to $-70$ mV at the original slope. Compute the new rate, and say which of the two interventions is the stronger brake per millivolt it changes.

**P3 (🔴)** A myelinated fibre 20 µm in diameter conducts at 120 m/s (the mammalian rule $v \approx 6d$, with $v$ in m/s and $d$ in µm). Unmyelinated fibres obey $v \propto \sqrt{d}$; the squid giant axon, 500 µm across, conducts at 25 m/s. (a) How thick would an unmyelinated axon have to be to match 120 m/s? (b) A nerve carries 1000 such fibres. Compare the cross-sectional area of the myelinated bundle and the unmyelinated one, and state each bundle's diameter. (c) Multiple sclerosis strips myelin from a segment of a fibre. Using the two things myelin does, explain why conduction slows sharply before it fails outright, and why heat can convert a slowed fibre into a blocked one.

<details>
<summary>Solutions</summary>

**P1 (a)** Driving force is $V_m - E_{ion}$:

$$V_m - E_{Na} = -60 - (+60) = \mathbf{-120\ \text{mV}}$$

$$V_m - E_K = -60 - (-94) = \mathbf{+34\ \text{mV}}$$

So $\text{Na}^+$ is driven inward with 120 mV of force and $\text{K}^+$ outward with 34 mV — **the inward force is 3.5 times larger, which is why depolarizing the cell even slightly is dangerous to its stability.**

**(b)** Set $V_m = 0$ in the chord conductance equation and solve for $x = g_{Na}/g_K$:

$$0 = \frac{x(60) + 1(-94)}{x+1} \;\Longrightarrow\; 60x - 94 = 0 \;\Longrightarrow\; x = \frac{94}{60} = \mathbf{1.57}$$

$$\text{i.e. } g_{Na}:g_K = 1.57:1 .$$

Sanity check: $V_m = 0$ must lie between $E_K$ and $E_{Na}$ and closer to $E_{Na}$ (since $0$ is 94 mV from $E_K$ and only 60 mV from $E_{Na}$), so $g_{Na}$ should be the larger of the two. It is. ✓

**(c) Duration:** the spike would not terminate on schedule. With activation intact and inactivation gone, $g_{Na}$ stays high as long as the cell is depolarized, so $V_m$ is held near $E_{Na}$ and repolarization must wait for the delayed $\text{K}^+$ current alone — a spike lasting tens of milliseconds or failing to repolarize at all. (This is what $\alpha$-scorpion toxin does, and in the heart it is what a gain-of-function $\text{Na}_V1.5$ mutation does in long-QT syndrome type 3.)

**Second spike:** paradoxically, the cell becomes *less* able to fire again, not more. It is stuck depolarized, so any $\text{Na}^+$ channels that do close cannot recover, and the cell is functionally in permanent depolarization block. **Losing the brake destroys the signal rather than amplifying it** — the confirmation that inactivation is a feature and not a defect.

**P2 (a)** Phase 4 occupies $1000 - 300 = 700$ ms and covers $-60 \to -40$ mV, a rise of 20 mV:

$$\text{slope} = \frac{20\ \text{mV}}{0.700\ \text{s}} = \mathbf{28.6\ \text{mV/s}}$$

**(b)** Double the slope to $57.1$ mV/s. The same 20 mV now takes

$$t_4 = \frac{20}{57.1} = 0.350\ \text{s} = 350\ \text{ms},$$

so the cycle is $300 + 350 = 650$ ms and the rate is

$$\frac{60}{0.650} = \mathbf{92\ \text{beats/min}}.$$

**A 43 percent increase in rate from doubling one slope.** That is sympathetic drive: noradrenaline acting through $\beta_1$ receptors increases the funny current, steepening the drift.

**(c)** Now the drift starts at $-70$ mV, so it must cover 30 mV at 28.6 mV/s:

$$t_4 = \frac{30}{28.6} = 1.049\ \text{s}, \qquad \text{cycle} = 0.300 + 1.049 = 1.349\ \text{s}, \qquad \text{rate} = \frac{60}{1.349} = \mathbf{44\ \text{beats/min}}.$$

**Which is stronger per millivolt?** The hyperpolarization moved the starting point by 10 mV and cut the rate from 60 to 44, i.e. $-1.6$ beats/min per mV. To compare fairly, note that the sympathetic effect was not a voltage change at all — it changed a *rate* — so the honest comparison is by effect size: $+32$ beats/min for a doubled slope versus $-16$ beats/min for a 10 mV hyperpolarization.

**The real lesson is that the pacemaker has two independent knobs**, and the parasympathetic system turns both: acetylcholine acting through $\text{M}_2$ receptors opens $\text{K}^+$ channels (hyperpolarizing the maximum diastolic potential, so the drift has further to travel) *and* reduces the funny current (flattening the slope). Turning both in the same direction is why vagal tone is such an effective brake — strong enough, at the extreme, to stop the sinus node outright. Full treatment in [2.1](02-01-cardiac-electrophysiology.md).

**P3 (a)** Fix the unmyelinated constant from the squid axon:

$$v = k\sqrt{d} \;\Longrightarrow\; k = \frac{25}{\sqrt{500}} = \frac{25}{22.36} = 1.118\ \frac{\text{m/s}}{\sqrt{\mu\text{m}}}$$

$$d = \left(\frac{v}{k}\right)^2 = \left(\frac{120}{1.118}\right)^2 = (107.3)^2 = 11{,}520\ \mu\text{m} = \mathbf{11.5\ \text{mm}}$$

**A bare axon slightly over a centimetre thick** — thicker than your thumb's tendon, to do the job of one 20 µm fibre.

**(b)** Cross-sectional area per fibre, then times 1000:

$$A_{\text{myel}} = \pi\left(\frac{20\ \mu\text{m}}{2}\right)^2 = \pi(10\times10^{-4}\ \text{cm})^2 = 3.14\times10^{-6}\ \text{cm}^2 \;\Rightarrow\; 1000\times = 3.14\times10^{-3}\ \text{cm}^2$$

$$A_{\text{unmyel}} = \pi\left(\frac{1.152\ \text{cm}}{2}\right)^2 = \pi(0.576)^2 = 1.042\ \text{cm}^2 \;\Rightarrow\; 1000\times = 1042\ \text{cm}^2$$

$$\frac{A_{\text{unmyel}}}{A_{\text{myel}}} = \frac{1042}{3.14\times10^{-3}} = \mathbf{3.3\times10^{5}}$$

Bundle diameters, from $D = 2\sqrt{A/\pi}$:

$$D_{\text{myel}} = 2\sqrt{\frac{3.14\times10^{-3}}{\pi}} = 2(0.0316) = 0.063\ \text{cm} = \mathbf{0.63\ \text{mm}}$$

$$D_{\text{unmyel}} = 2\sqrt{\frac{1042}{\pi}} = 2(18.2) = \mathbf{36\ \text{cm}}$$

**A nerve you could hide under a hair, versus a nerve thicker than your thigh.** Myelin buys a factor of 330,000 in cross-sectional area, and that factor is why a vertebrate can have a fast, dense nervous system inside a body of ordinary size. Invertebrates that need one fast axon (squid escape reflex) can afford to grow it wide; invertebrates never got to have a million of them.

**(c) Why it slows before it blocks.** Strip the myelin and both of myelin's jobs fail at once. Membrane resistance falls, so current injected at the last intact node leaks out across the bare segment instead of reaching the next node; and membrane capacitance rises roughly a hundredfold, so far more charge is needed to swing the voltage there. Both shrink the depolarization delivered downstream.

But the healthy fibre had a safety factor of **five- to sevenfold** — the arriving depolarization was five to seven times threshold. So the first thing that happens is not failure but *delay*: the reduced current takes longer to charge the enlarged capacitance to threshold, and conduction velocity falls, in severe cases from 120 m/s to a few m/s. **The signal still arrives; it arrives late and out of register with signals in parallel fibres**, which is why demyelinating disease produces incoordination and blurred or doubled vision well before it produces paralysis or blindness.

**Why heat converts slowing into block** (Uhthoff's phenomenon — a hot shower or a fever transiently worsening symptoms): channel gating kinetics are strongly temperature-dependent, and warming *speeds inactivation more than it speeds activation*. The $\text{Na}^+$ channels at the next node therefore spend less time open and pass less charge, shaving the already-depleted safety factor. In a healthy fibre with sevenfold margin this is invisible. In a demyelinated fibre running on a margin near 1, **a fraction of a degree is the difference between conducting and not** — a clean illustration that safety factor, not any single parameter, is what determines whether a signal gets through.

</details>

## Flashback

**From Lesson 1.3 (the resting membrane potential):** A ventricular myocyte at $37^\circ\text{C}$ (use $61\,\text{mV}\cdot\log_{10}$, divided by the ion's charge) has $[\text{Ca}^{2+}]_o = 1.8$ mM, $[\text{Ca}^{2+}]_i = 100$ nM, $[\text{Cl}^-]_o = 110$ mM, $[\text{Cl}^-]_i = 10$ mM. (a) Compute $E_{Ca}$ and $E_{Cl}$. (b) The cell rests at $-85$ mV. Give the driving force on each ion and say which way each moves if its channels open. (c) During the plateau the cell sits near $0$ mV. Compare the $\text{Ca}^{2+}$ driving force then with its value at rest, and say why the plateau is nevertheless the phase in which most $\text{Ca}^{2+}$ enters.

<details>
<summary>Solution</summary>

**(a)** $\text{Ca}^{2+}$ carries charge $z = +2$, so the prefactor is $61/2 = 30.5$ mV. Put both concentrations in the same units: $1.8\ \text{mM} = 1.8\times10^{-3}$ M and $100\ \text{nM} = 1.0\times10^{-7}$ M.

$$E_{Ca} = 30.5\log_{10}\frac{1.8\times10^{-3}}{1.0\times10^{-7}} = 30.5\log_{10}(18{,}000) = 30.5(4.255) = \mathbf{+130\ \text{mV}}$$

For $\text{Cl}^-$, $z = -1$, which flips the sign of the prefactor:

$$E_{Cl} = \frac{61}{-1}\log_{10}\frac{110}{10} = -61\log_{10}(11) = -61(1.041) = \mathbf{-63.5\ \text{mV}}$$

**Note the two traps in one problem:** the divide-by-two for a divalent, and the sign flip for an anion. $E_{Ca}$ is the most positive equilibrium potential in the body precisely because the cell keeps cytosolic $\text{Ca}^{2+}$ at a ten-thousandth of the outside concentration — an 18,000-fold gradient, four orders of magnitude, which is why $\text{Ca}^{2+}$ works so well as a signal.

**(b)** At $V_m = -85$ mV:

$$V_m - E_{Ca} = -85 - 130 = \mathbf{-215\ \text{mV}} \;\Rightarrow\; \text{enormous inward force; } \text{Ca}^{2+} \text{ rushes } \textbf{in}.$$

$$V_m - E_{Cl} = -85 - (-63.5) = \mathbf{-21.5\ \text{mV}}$$

For $\text{Cl}^-$ the sign needs care. The cell is 21.5 mV *more negative* than $\text{Cl}^-$'s equilibrium, so the excess negativity inside repels $\text{Cl}^-$: **$\text{Cl}^-$ leaves the cell.** Losing negative charge from inside is a depolarizing (inward) current — consistent with $I = g(V_m - E)$ being negative.

**The magnitudes are the story: 215 mV versus 21.5 mV, a factor of ten.** $\text{Ca}^{2+}$ channels are switches on a firehose; $\text{Cl}^-$ channels near rest barely move the voltage at all. What $\text{Cl}^-$ conductance does instead is *clamp* — it adds conductance at a reversal potential close to rest, so any injected current produces a smaller voltage change. That shunting effect is how many inhibitory synapses actually work ([1.5](01-05-neuromuscular-autonomic-transmission.md)).

**(c)** At $V_m = 0$ mV:

$$V_m - E_{Ca} = 0 - 130 = -130\ \text{mV}, \qquad \frac{130}{215} = 0.60 .$$

**The driving force during the plateau is only 60 percent of its resting value** — the cell has given up 40 percent of the push. Yet almost all the $\text{Ca}^{2+}$ that triggers the beat enters during the plateau, for two reasons that both beat the driving force:

1. **Conductance.** At rest the L-type $\text{Ca}^{2+}$ channels are shut, so a 215 mV driving force multiplied by essentially zero conductance gives essentially zero current. They open only on depolarization. A large driving force across a closed door moves nothing.
2. **Time.** The plateau lasts about 250 ms. A nerve spike's entire $\text{Na}^+$ influx happens in well under a millisecond; charge is current times *time*, and the plateau buys 250 ms of it.

**This is the general lesson of $I = g(V_m - E)$ and worth stating flatly: the driving force tells you the direction and the ceiling, but the conductance and the duration decide how much actually moves.** It is also exactly why the ventricular plateau exists — it is a $\text{Ca}^{2+}$ delivery window that happens to double as a refractory period.

</details>

## Connections

- **Backward:** [1.3](01-03-resting-membrane-potential.md) gave the battery and the equation $I = g(V_m - E_{ion})$; this lesson does nothing but change one conductance ratio in it. [1.2](01-02-membrane-transport.md)'s $\text{Na}^+$/$\text{K}^+$-ATPase is what pays for the whole thing — it does not generate the spike, it restocks the gradients afterwards. And [1.1](01-01-homeostasis-feedback-control.md)'s positive feedback is the upstroke, the one loop in the body designed to run away.
- **Forward:** [1.5](01-05-neuromuscular-autonomic-transmission.md) takes the spike into the presynaptic terminal, where it opens $\text{Ca}^{2+}$ channels and releases transmitter; [1.6](01-06-muscle-contraction.md) turns the muscle spike into force and cashes in the twitch-summation arithmetic of Example 2. **[2.1](02-01-cardiac-electrophysiology.md) is this lesson's panel (b) expanded into a module** — plateau, pacemaker drift, conduction pathway, and the ECG as the sum of millions of these.
- **Sideways:** the physics of a gate as a two-state Boltzmann system with a charged sensor is [biophysics 4.5](../../biophysics/lessons/04-05-excitable-membranes-action-potential.md), built on the Nernst and Goldman derivations in [biophysics 4.4](../../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md). The quantitative $m$, $h$, $n$ model that turns "activation and inactivation" into four coupled differential equations is [neuroscience 1.4](../../neuroscience/lessons/01-04-hodgkin-huxley-model.md), and the cable-theory derivation of the $\sqrt{d}$ and $d$ velocity laws — and of the safety factor — is [neuroscience 1.5](../../neuroscience/lessons/01-05-cable-theory-conduction.md).
