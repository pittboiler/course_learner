# Human Physiology · Lesson 2.2: The cardiac cycle and cardiac output

> ⏱ ~15 min · Module 2: The cardiovascular and respiratory systems · Builds on: [2.1](02-01-cardiac-electrophysiology.md), [1.6](01-06-muscle-contraction.md) · Unlocks: 2.3 (hemodynamics and blood pressure regulation)

## Why this matters

[2.1](02-01-cardiac-electrophysiology.md) gave the heart its timing signal. This lesson spends it: an electrical wave arrives, calcium enters, [cross-bridges cycle](01-06-muscle-contraction.md), and a chamber squeezes. What makes the mechanics tractable is that **the heart has no valve-control system**. Four flaps of tissue open and close purely because the pressure on one side exceeds the pressure on the other, which means the entire cycle is readable off three pressure traces and their crossing points.

Replot pressure against volume instead of against time and you get a closed loop whose **width is stroke volume, whose area is the work done on the blood, and whose corners are the four valve events**. Almost every question about a heart — is it filling badly, is it pumping against too much resistance, has the muscle itself weakened — is a question about the shape of that loop.

And there is one result here worth the whole lesson. **The heart adjusts its output to its input automatically, with no nerve involved**, because it operates on the ascending limb of the length–tension curve you met in [1.6](01-06-muscle-contraction.md). That is the Frank–Starling law, and it is the mechanical negative-feedback loop that keeps your two ventricles matched to within a fraction of a millilitre, beat after beat, for a lifetime.

## The idea

**The governing principle, and it is the only one you need: valves are passive.** No sensor, no timer, no nerve. A valve opens the instant the pressure gradient across it points forward, and slams shut the instant it reverses. So the cycle is nothing but a sequence of pressure crossings:

1. **Filling.** The atrium's pressure exceeds the ventricle's, the mitral valve is open, blood pours in. The ventricle is a slack bag being filled.
2. **Isovolumetric contraction.** The ventricle contracts; its pressure shoots above the atrium's, so the mitral valve shuts. But it is still below the aorta's, so the aortic valve stays shut. **Both valves closed: the volume cannot change.** All the muscle's effort goes into raising pressure, not moving blood.
3. **Ejection.** Ventricular pressure crosses aortic pressure, the aortic valve opens, and blood leaves. Now the two pressures track each other almost exactly — an open valve cannot sustain a gradient.
4. **Isovolumetric relaxation.** The muscle relaxes, ventricular pressure falls below aortic, the aortic valve shuts. Still above atrial, so the mitral stays shut. **Both closed again: volume fixed** while pressure collapses back toward zero. Then it crosses atrial pressure, the mitral opens, and you are back at step 1.

**Notice what the two isovolumetric phases are for.** They are the price of having valves. The ventricle must build about 70 mmHg of pressure before the aortic valve will open, and dump all of it before the mitral valve will reopen — and during both, it does no external work at all. That wasted-looking effort is a large fraction of the heart's energy budget, and it is why "how hard the heart works" is not the same quantity as "how much blood it moves."

**Now rotate the picture.** Instead of plotting pressure and volume against time, plot pressure against volume. The four phases become four sides of a closed loop:

- filling is the bottom edge moving right (volume up, pressure barely changing),
- isovolumetric contraction is the right edge moving straight up (no volume change — that is what "isovolumetric" buys you),
- ejection is the top arc moving left,
- isovolumetric relaxation is the left edge moving straight down.

The loop runs **counterclockwise**. Its right corner is **end-diastolic volume (EDV)**, its left corner is **end-systolic volume (ESV)**, its **width is stroke volume**, and — because work is $\int P\,dV$ — its **enclosed area is the work the ventricle does on the blood each beat**.

**One flow number, and three levers on it.** Cardiac output is stroke volume times beats per minute. Stroke volume itself has exactly three inputs, and they are genuinely independent:

- **Preload** — how full the ventricle is when it starts contracting (i.e. EDV, and through it sarcomere length). Moves the loop's *right* corner.
- **Afterload** — the pressure the ventricle must exceed to open the aortic valve and keep it open. Moves the loop's *left* corner and the height of its top.
- **Contractility** — how forcefully the muscle contracts at a *given* length and load. A property of the muscle itself, not of what is loading it.

The three deform the loop in three visibly different ways, which is the whole reason to draw it.

**Frank–Starling: the centrepiece.** Stretch the ventricle more and it ejects more, automatically. [1.6](01-06-muscle-contraction.md) told you why: the cardiac sarcomere at normal filling sits at roughly 1.9 micrometres, short of the roughly 2.2 micrometres of optimal thick–thin filament overlap. **The heart lives on the *ascending* limb of its length–tension curve.** More filling means longer sarcomeres means better overlap means more force — with no nervous system, no hormone, no signal of any kind. (There is a second contributor, and it is arguably the bigger one: stretching cardiac muscle makes troponin C *more sensitive to calcium*, so the same calcium transient recruits more cross-bridges.)

Skeletal muscle sits near the *peak* of its curve, so stretching it does nothing useful. The heart's offset from optimum is not a design flaw — **it is what makes the heart self-regulating.**

**Why that matters more than it sounds.** Your two ventricles are pumps in series, and whatever the right ventricle sends to the lungs, the left must return to the body. Suppose the right ventricle out-pumps the left by just 1 mL per beat. At 70 beats a minute that is 70 mL a minute piling up in the pulmonary circulation, which holds only about 500 mL in total — you would drown in your own lungs within about seven minutes.

That never happens, because the extra blood accumulating in the pulmonary veins *is itself* the correction: it raises left-ventricular filling, which by Frank–Starling raises left-ventricular stroke volume, until the two outputs match again. **Sensor, controller, and effector are the same piece of muscle**, and the error signal is measured in millilitres of stretch. In the language of [1.1](01-01-homeostasis-feedback-control.md), this is a negative feedback loop with no separate controller at all — the plant regulates itself.

**Finally, the direction of causality at rest, which is the opposite of what most people assume.** Over any sustained period, **cardiac output cannot exceed venous return** — it is a closed loop, and you cannot pump what has not come back. At rest, the heart is not straining at its limit; it is passively accepting and forwarding whatever the periphery sends it. **Cardiac output at rest is set by the tissues' demand, not by the heart's willingness to pump.** The heart is permissive. It becomes the limiting element only at extremes.

## The formal version

**Cardiac output.** With $HR$ the heart rate (beats per minute) and $SV$ the stroke volume (mL per beat):

$$\boxed{\;CO = HR \times SV, \qquad SV = EDV - ESV, \qquad EF = \frac{SV}{EDV}\;}$$

*In words: output is how much per squeeze times how many squeezes; stroke volume is what the ventricle started with minus what it kept; ejection fraction is the fraction of the load it managed to expel.* $EDV$ is end-diastolic volume, $ESV$ end-systolic volume, $EF$ ejection fraction.

**Stroke work.** The loop's area:

$$W_{\text{stroke}} = \oint P\,dV \;\approx\; SV \times \overline{P}_{\text{ejection}}$$

*In words: work per beat is the volume ejected times the pressure it was ejected against, and on the loop that is the enclosed area.* This is exactly the $P$–$V$ work of [thermodynamics 1.3](../../thermodynamics-physics/lessons/01-03-heat-work-first-law.md) — with one sign flip. A heat engine's loop runs clockwise and extracts work from the fluid; **the heart's loop runs counterclockwise, because the heart is a pump and puts work in.**

**Units matter here and the natural ones are unfamiliar.** Pressure in mmHg times volume in mL gives $\text{mmHg}\cdot\text{mL}$, which means nothing to anyone. Convert once and remember it:

$$1\ \text{mmHg} = 133.32\ \text{Pa}, \qquad 1\ \text{mL} = 10^{-6}\ \text{m}^3 \;\Longrightarrow\; 1\ \text{mmHg}\cdot\text{mL} = 1.333\times10^{-4}\ \text{J}.$$

*In words: ten thousand mmHg·mL is about 1.3 joules.* Keep that conversion; it is what turns cardiac numbers into physics.

**The three levers, defined precisely.**

| Lever | Physiological definition | What it is on the loop |
|---|---|---|
| **Preload** | end-diastolic sarcomere length, indexed by EDV (clinically, by filling pressure) | position of the **right** corner |
| **Afterload** | the wall stress the ventricle must generate to eject; indexed by arterial pressure | height at which the loop's top sits, and hence the **left** corner |
| **Contractility (inotropy)** | force generated at a *fixed* length and load | **slope of the ESPVR** |

**The end-systolic pressure–volume relation (ESPVR).** Take beats under many different loading conditions. Their end-systolic points — the loop's top-left corner, where the aortic valve closes — do not scatter. **They fall on a line:**

$$\boxed{\;P_{es} = E_{es}\,(V_{es} - V_0)\;}$$

*In words: at the end of every squeeze, the ventricle behaves like a spring of stiffness $E_{es}$ with an unstressed volume $V_0$ — whatever pressure it faced, it contracts until its volume reaches the point on this line.* $E_{es}$ is the **end-systolic elastance** in mmHg/mL, $V_0$ the volume-axis intercept.

**This is the load-independent index of contractility**, and it is the one honest one. Change preload: the operating point slides *along* the same line. Change afterload: it slides along the same line. Change the muscle itself — adrenaline, calcium, damage — and **the line rotates**. Nothing else does that.

Equivalently: the ventricle is a chamber whose elastance is cycled between a slack diastolic value (the passive filling curve, the **EDPVR**, which is the loop's bottom edge) and a stiff systolic value $E_{es}$. The entire loop is what a container does when you oscillate its stiffness while it is connected to a filling reservoir and an outflow load.

**Why ejection fraction is *not* a contractility index.** $EF = SV/EDV$ contains both a preload term and an afterload term. You can move it up or down without touching the muscle, and we will do exactly that in Example 2. EF is a useful, cheap, prognostic *number*; it is not a *measurement of the muscle*.

**The venous side, and the ceiling it imposes.** Stop the heart and let all pressures equilibrate: the circulation settles at the **mean systemic filling pressure** $P_{ms}$, roughly 7 mmHg — the pressure the elastic vessels exert on the volume they contain. That is the head that drives blood back to the heart:

$$VR = \frac{P_{ms} - P_{ra}}{R_{VR}}$$

*In words: venous return is driven by the tiny gradient between the filled vasculature and the right atrium, across venous resistance $R_{VR}$.* $P_{ra}$ is right atrial pressure.

**Read that equation for its consequence.** The gradient is only a few mmHg — versus about 90 mmHg across the systemic circuit as a whole. So the heart's job on the venous side is not to suck harder; it is to keep $P_{ra}$ low. And **$P_{ra}$ appears with a minus sign: a stronger heart lowers right atrial pressure, which raises venous return — but only until $P_{ra}$ reaches zero, at which point $VR$ is capped at $P_{ms}/R_{VR}$ no matter how strong the heart is.** Raising output beyond that requires the *periphery* to change: more venoconstriction and muscle pumping to raise $P_{ms}$, and arteriolar dilation to lower resistance. Problem 3 makes this quantitative.

**Two clinical readouts, one sentence each.** The **heart sounds** are valve closures, so they bracket systole: **S1** is the mitral and tricuspid slamming shut at the start of isovolumetric contraction, **S2** the aortic and pulmonic shutting at the start of isovolumetric relaxation. The **jugular venous pulse** is right atrial pressure made visible — the neck veins are an open fluid column continuous with the right atrium, so its $a$ (atrial contraction), $c$ (tricuspid bulging during isovolumetric contraction) and $v$ (atrial filling against a shut valve) waves are the atrial pressure trace, read off a patient without instruments.

**Heart rate: the phase that shortens is the one you need.** Raise heart rate and the cycle shortens — but **systole is nearly incompressible while diastole absorbs almost the whole cut.** At 70 beats/min the cycle is 857 ms, of which systole takes about 300 ms and diastole about 557 ms. At 150 beats/min the cycle is 400 ms, systole only falls to about 250 ms, and **diastole is crushed to about 150 ms.** Filling time per beat drops by a factor of nearly four while rate rises by only a factor of two. Beyond roughly 150–180 beats/min, EDV falls faster than rate rises and $CO = HR \times SV$ stops climbing. (There is a second, sharper penalty: the left ventricle perfuses its own muscle almost entirely during diastole, because in systole it squeezes its own coronary arteries shut. Tachycardia therefore cuts the myocardium's oxygen supply at the exact moment it raises its oxygen demand.)

## Picture

![Panel a plots aortic, left ventricular and left atrial pressure on a shared time axis for one heartbeat at 70 beats per minute, with left ventricular volume plotted beneath on the same axis. Four black dots mark the valve events at the points where the pressure traces cross: mitral closing, aortic opening, aortic closing and mitral opening. The four phases are labelled isovolumetric contraction, ejection, isovolumetric relaxation and filling. Panel b replots exactly the same beat with pressure against volume, producing a closed counterclockwise loop whose four sides are those same four phases, with end-diastolic volume 120 mL at the right corner, end-systolic volume 50 mL at the left, stroke volume 70 mL as the loop width, and the enclosed area labelled stroke work. A straight red line through the end-systolic corner is the end-systolic pressure volume relation. A lighter dashed loop overlaid on the same axes shows what increased preload does: the right corner moves out to 150 mL along the same filling curve, the left corner stays put, and stroke volume rises to 100 mL.](assets/02-02-fig1.svg)

**Read panel (a) left to right and check every valve event against a crossing.** The mitral closes where blue crosses green going up; the aortic opens where blue crosses red going up; the aortic closes where blue falls back through red; the mitral opens where blue falls back through green. Four events, four crossings, no exceptions — and nothing anywhere in the picture decides when a valve should move.

**Two details are worth stopping on.** First, during ejection the ventricular and aortic traces lie on top of each other, because an open valve cannot sustain a pressure difference — the aorta and ventricle are briefly one chamber. Second, **the atrial trace never leaves the bottom of the plot.** The entire filling side of the circulation operates in single digits of mmHg while the ejecting side reaches 120. That asymmetry is the whole architecture of the circulation in one glance, and it is why the venous return equation above has a gradient of 4 mmHg in it.

**In panel (b), the lighter loop is the payoff.** Increased filling pushes the right corner out along the *same* passive filling curve; the left corner does not move, because afterload and contractility have not changed and the end-systolic point must still land on the same ESPVR line. The loop gets wider and taller — more stroke volume, more stroke work — and the muscle was never told to do anything.

## Worked examples

**Example 1 (mechanical — the whole beat in numbers, with honest units).** A resting adult has $HR = 70\ \text{min}^{-1}$, $EDV = 120\ \text{mL}$, $ESV = 50\ \text{mL}$, and mean arterial pressure $93$ mmHg. Find stroke volume, ejection fraction, cardiac output, stroke work in joules, and the heart's external power output.

$$SV = EDV - ESV = 120 - 50 = \mathbf{70\ \text{mL}}.$$

$$EF = \frac{70}{120} = 0.583 = \mathbf{58.3\ \text{percent}}.$$

$$CO = 70\ \tfrac{\text{mL}}{\text{beat}} \times 70\ \tfrac{\text{beats}}{\text{min}} = 4900\ \tfrac{\text{mL}}{\text{min}} = \mathbf{4.9\ \text{L/min}}.$$

Stroke work, approximating the loop by a rectangle of width $SV$ and height $\overline{P}$:

$$W \approx SV \times \overline{P} = 70\ \text{mL} \times 93\ \text{mmHg} = 6510\ \text{mmHg}\cdot\text{mL}.$$

$$W = 6510 \times 1.333\times10^{-4}\ \text{J} = \mathbf{0.87\ \text{J\ per\ beat}}.$$

(The true loop area is 5 to 10 percent larger, because the ventricle's pressure during ejection runs a little above the *mean* arterial pressure. The rectangle is a good estimate, not an identity.)

$$P_{\text{ext}} = 0.87\ \tfrac{\text{J}}{\text{beat}} \times \frac{70}{60}\ \tfrac{\text{beats}}{\text{s}} = \mathbf{1.0\ \text{W}}.$$

**Your left ventricle is a one-watt machine.** Over a day that is $1.0 \times 86{,}400 = 86$ kJ, about **21 kcal** — the food energy in a large bite of an apple, spread over 100,800 beats. The muscle actually burns roughly five to ten times that, most of it in the isovolumetric phases, where tension is high and nothing moves. **The heart is impressive for its reliability, not its power.**

**Example 2 (why you'd care — three levers, three different loops, and the death of ejection fraction as a contractility measure).** Same ventricle as Example 1, with $E_{es} = 2.5$ mmHg/mL and $V_0 = 10$ mL. Check that the baseline is consistent, then apply each lever separately.

*Baseline check.* At end-systole the ventricle ejects against about 100 mmHg, so the ESPVR predicts

$$V_{es} = V_0 + \frac{P_{es}}{E_{es}} = 10 + \frac{100}{2.5} = 10 + 40 = 50\ \text{mL}$$

which is the ESV we were given. Good — the line and the loop agree.

**(i) Preload up.** More venous return fills the ventricle to $EDV = 150$ mL. Afterload and contractility unchanged, so the end-systolic point is still on the same line at the same pressure: $ESV = 50$ mL still.

$$SV = 150 - 50 = 100\ \text{mL}, \qquad EF = \frac{100}{150} = 66.7\ \text{percent}, \qquad CO = 7.0\ \text{L/min}.$$

**(ii) Afterload up.** Arterial pressure rises so the ventricle must eject against 125 mmHg. Same muscle, same line, same filling:

$$V_{es} = 10 + \frac{125}{2.5} = 60\ \text{mL}, \qquad SV = 120 - 60 = 60\ \text{mL}, \qquad EF = 50.0\ \text{percent}, \qquad CO = 4.2\ \text{L/min}.$$

**(iii) Contractility up.** Adrenaline doubles $E_{es}$ to 5.0 mmHg/mL. Same filling, same 100 mmHg to eject against — but the line has rotated:

$$V_{es} = 10 + \frac{100}{5.0} = 30\ \text{mL}, \qquad SV = 120 - 30 = 90\ \text{mL}, \qquad EF = 75.0\ \text{percent}, \qquad CO = 6.3\ \text{L/min}.$$

| | EDV | ESV | SV | EF | CO | contractility |
|---|---|---|---|---|---|---|
| baseline | 120 | 50 | 70 | 58% | 4.9 | $E_{es}=2.5$ |
| preload up | **150** | 50 | 100 | 67% | 7.0 | $E_{es}=2.5$ |
| afterload up | 120 | **60** | 60 | 50% | 4.2 | $E_{es}=2.5$ |
| contractility up | 120 | **30** | 90 | 75% | 6.3 | $E_{es}=\mathbf{5.0}$ |

**Read the last two columns together. Ejection fraction ranged from 50 to 75 percent while contractility changed in only one of those three rows.** Two of the three EF changes were caused by loading conditions and nothing else. That is the argument, in one table, for why $E_{es}$ is the index of contractility and EF is not: **EF confounds the muscle with what is loading it.**

**Each lever also has its own signature on the loop**, which is how you tell them apart by eye: preload widens the loop to the *right* with the left corner pinned; afterload raises the top and drags the left corner *right*, narrowing the loop; increased contractility drags the left corner *left*, widening the loop with the right corner pinned.

**One honest caveat.** In an intact circulation you almost never get one lever alone. Raise afterload and stroke volume falls, so more blood stays behind — EDV rises on the next beat, Frank–Starling recruits extra force, and stroke volume partially recovers at a larger, more expensive loop. That coupled recovery is a *consequence* of the isolated responses above, which is why you learn them separately first.

## Watch out

- **You might think something controls the valves.** Nothing does. There is no innervation, no timing signal, no active mechanism — a valve is a flap that responds to the sign of the pressure difference across it. Every event in the cycle is downstream of that one fact.
- **You might think stroke volume is the pressure difference times something.** It is not: **stroke volume is a *width* on the loop**, $EDV - ESV$. Pressure sets *where the corners land*, and it does so through the ESPVR, not directly.
- **You might read a normal ejection fraction as a normal heart.** EF is a ratio, and a stiff ventricle that fills to only 70 mL and ejects 42 of them has an EF of 60 percent and a stroke volume a third below normal. **A ratio cannot tell you about its numerator.** (This is the whole point of the term "heart failure with preserved ejection fraction.")
- **You might expect a stronger heart to raise cardiac output a lot.** Over any sustained period it cannot exceed venous return. Doubling contractility mostly just lowers right atrial pressure; the ceiling $P_{ms}/R_{VR}$ is set by the vasculature, not by the muscle.
- **You might think faster is better.** Diastole absorbs nearly the entire shortening of the cycle, so filling time collapses much faster than rate rises — and coronary perfusion of the left ventricle happens in diastole, so tachycardia cuts supply while raising demand.
- **You might picture the loop as a heat engine.** Same axes, same "area is work" — but it runs **counterclockwise**, so the work is done *on* the fluid. The heart is a pump, not an engine.

## One-liner

> Valves are passive, so the whole cardiac cycle is just four pressure crossings; replot pressure against volume and those crossings become the corners of a loop whose width is stroke volume and whose area is the work — and because the heart sits on the ascending limb of the length–tension curve, a fuller ventricle ejects harder all by itself, which is the entire reason your two ventricles stay matched.

## Problems

**P1 (🟢)** During light exercise a person has $EDV = 145$ mL, $ESV = 55$ mL, $HR = 84\ \text{min}^{-1}$, and mean arterial pressure $95$ mmHg. (a) Find stroke volume, ejection fraction and cardiac output. (b) Estimate stroke work in $\text{mmHg}\cdot\text{mL}$ and convert to joules. (c) Find the external power output in watts, and compare it with the resting 1.0 W from Example 1.

**P2 (🟡)** A ventricle has $E_{es} = 2.2$ mmHg/mL, $V_0 = 12$ mL, and fills to $EDV = 130$ mL. (a) Ejecting against an end-systolic pressure of 100 mmHg, find ESV, SV and EF. (b) Afterload now rises so it must eject against 130 mmHg; with everything else unchanged for that one beat, recompute ESV, SV and EF. (c) EF dropped substantially. Did contractility change? Say precisely what did, and describe what happens over the *next* few beats in an intact circulation with venous return unchanged.

**P3 (🔴, optional — bridges to [2.3](02-03-hemodynamics-blood-pressure.md) and to control theory)** A person has $CO = 5.0$ L/min at $HR = 72\ \text{min}^{-1}$, right atrial pressure $P_{ra} = 3$ mmHg, and mean systemic filling pressure $P_{ms} = 7$ mmHg. (a) Find stroke volume, and find the venous resistance $R_{VR}$ in $\text{mmHg}\cdot\text{min}/\text{L}$. (b) Suppose the right ventricle's stroke volume exceeds the left's by 2 percent, with no correction. Given a pulmonary blood volume of about 500 mL, how long until the pulmonary circuit has accumulated an extra 500 mL? (c) Name the mechanism that prevents this and lay out the loop as sensor → controller → effector, saying explicitly why no nerve is needed. (d) Now suppose the heart is made arbitrarily strong, so that it drives $P_{ra}$ all the way to 0 with the vasculature unchanged. What is the maximum sustainable cardiac output? Compare with the roughly 20 L/min a fit person reaches in hard exercise, and say what must therefore be doing the work.

<details>
<summary>Solutions</summary>

**P1 (a)**

$$SV = 145 - 55 = \mathbf{90\ \text{mL}}.$$

$$EF = \frac{90}{145} = 0.6207 = \mathbf{62.1\ \text{percent}}.$$

$$CO = 90 \times 84 = 7560\ \text{mL/min} = \mathbf{7.56\ \text{L/min}}.$$

**(b)**

$$W \approx SV \times \overline{P} = 90 \times 95 = \mathbf{8550\ \text{mmHg}\cdot\text{mL}}.$$

$$W = 8550 \times 1.333\times10^{-4} = \mathbf{1.14\ \text{J\ per\ beat}}.$$

**(c)**

$$P_{\text{ext}} = 1.14 \times \frac{84}{60} = 1.14 \times 1.4 = \mathbf{1.6\ \text{W}}.$$

**Compare the two multipliers.** Cardiac output rose by a factor of $7.56/4.9 = 1.54$, but power rose by $1.6/1.0 = 1.6$ — a little more, because the blood is also being ejected against a slightly higher pressure. Work scales with flow *times* pressure, so exercise costs on both axes at once. This is exactly why hypertension is expensive: it raises the pressure factor at every level of flow.

**P2 (a)** From the ESPVR $P_{es} = E_{es}(V_{es} - V_0)$, solved for volume:

$$V_{es} = V_0 + \frac{P_{es}}{E_{es}} = 12 + \frac{100}{2.2} = 12 + 45.45 = \mathbf{57.5\ \text{mL}}.$$

$$SV = 130 - 57.5 = \mathbf{72.5\ \text{mL}}, \qquad EF = \frac{72.5}{130} = 0.558 = \mathbf{55.8\ \text{percent}}.$$

**(b)** Same line, higher pressure:

$$V_{es} = 12 + \frac{130}{2.2} = 12 + 59.09 = \mathbf{71.1\ \text{mL}}.$$

$$SV = 130 - 71.1 = \mathbf{58.9\ \text{mL}}, \qquad EF = \frac{58.9}{130} = 0.453 = \mathbf{45.3\ \text{percent}}.$$

**(c) Contractility did not change.** $E_{es}$ is still 2.2 mmHg/mL and $V_0$ is still 12 mL — **it is the same line**, and the end-systolic point merely slid *up along it* to a higher pressure and a larger volume. What changed is afterload, an external loading condition.

**EF fell from 55.8 to 45.3 percent — a 10-point drop that would look alarming — with a completely unaltered myocardium.** That is the argument of Example 2 repeated with different numbers, and it is why a single EF measurement cannot distinguish a weak heart from a heavily loaded one.

**Over the next few beats**, in an intact circulation:

1. This beat ejected only 58.9 mL but venous return still delivers about 72.5 mL, so **13.6 mL is left over**. The ventricle starts the next beat at roughly $130 + 13.6 = 143.6$ mL rather than 130.
2. **Frank–Starling now acts.** The larger EDV means longer sarcomeres, better overlap and higher calcium sensitivity, so the beat is stronger. At the same 130 mmHg afterload, ESV is still 71.1 mL (that is fixed by the ESPVR), so $SV = 143.6 - 71.1 = 72.5$ mL — **stroke volume is fully restored.**
3. **A new steady state is reached at a larger, taller loop**: same stroke volume, higher EDV, higher pressure, and therefore **more stroke work per beat**. The output is defended; the cost is not.

That third point is the whole natural history of pressure overload: output is preserved by dilating, and the ventricle pays for it in work and oxygen every single beat.

**P3 (a)**

$$SV = \frac{CO}{HR} = \frac{5000\ \text{mL/min}}{72\ \text{min}^{-1}} = \mathbf{69.4\ \text{mL}}.$$

In the steady state venous return equals cardiac output, so

$$R_{VR} = \frac{P_{ms} - P_{ra}}{VR} = \frac{7 - 3}{5.0} = \frac{4}{5.0} = \mathbf{0.80\ \text{mmHg}\cdot\text{min}/\text{L}}.$$

**Worth noticing immediately:** the entire venous return system runs on a **4 mmHg** driving gradient. For comparison, total peripheral resistance with a mean arterial pressure of 93 mmHg would be $(93-3)/5.0 = 18\ \text{mmHg}\cdot\text{min}/\text{L}$ — **more than twenty times larger.** The arterial side is where the pressure is spent; the venous side is a wide, low-resistance reservoir, which is exactly what [2.3](02-03-hemodynamics-blood-pressure.md) is about.

**(b)** A 2 percent excess on the right:

$$\Delta SV = 0.02 \times 69.4 = 1.39\ \text{mL per beat}.$$

$$\text{accumulation rate} = 1.39 \times 72 = 100\ \text{mL/min}.$$

$$t = \frac{500\ \text{mL}}{100\ \text{mL/min}} = \mathbf{5\ \text{minutes}}.$$

**Five minutes to double the blood volume of your lungs, from a 2 percent mismatch.** No sensor could be tuned finely enough to prevent that by measuring and correcting — the required precision is a fraction of a millilitre per beat, sustained for a lifetime.

**(c) The Frank–Starling mechanism.** Cast as a control loop:

- **Sensor:** the left ventricular wall itself. The "measurement" is sarcomere length at end-diastole — a mechanical strain, not a signal.
- **Controller:** the length–tension relation of cardiac muscle (plus length-dependent calcium sensitivity of troponin C). The gain is built into the protein.
- **Effector:** the same muscle's contraction on that same beat.

**The error and the correction are the same physical quantity.** If the right ventricle over-pumps, blood accumulates upstream of the left ventricle; that accumulation *is* extra left-ventricular filling; that filling *is* extra stretch; that stretch *is* extra force. The loop closes inside the muscle.

**Why no nerve is needed:** a nervous reflex requires a sensor distinct from the effector, a transmission delay, and a set point to compare against. Here there is none of that — the disturbance is converted directly into its own correction by the mechanical properties of the tissue. **This is negative feedback with the controller and the plant collapsed into one object**, the same structure as the proportional feedback of [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md), except that the "loop gain" is the slope of a length–tension curve. It also keeps working in a denervated transplanted heart, which is the cleanest possible demonstration.

**(d)** With $P_{ra}$ driven to 0 and the vasculature unchanged:

$$VR_{\max} = \frac{P_{ms} - 0}{R_{VR}} = \frac{7}{0.80} = \mathbf{8.75\ \text{L/min}}.$$

**An infinitely strong heart could not sustain more than about 8.75 L/min.** (And in reality even that overstates it: as $P_{ra}$ approaches zero the great veins entering the chest begin to collapse, so the curve flattens before the intercept.)

Hard exercise reaches roughly 20 L/min, so **more than half of the exercise response cannot come from the heart at all.** It must come from the terms on the right-hand side:

- **$R_{VR}$ falls** — arteriolar dilation in working muscle drops the resistance that returning blood must cross.
- **$P_{ms}$ rises** — venoconstriction and splenic/splanchnic volume shifts squeeze the reservoir, and the skeletal muscle pump plus the respiratory pump actively push blood centrally.

To check the arithmetic: with $R_{VR}$ halved to $0.40$ and $P_{ms}$ raised to $10$ mmHg, at $P_{ra} = 2$ mmHg,

$$VR = \frac{10 - 2}{0.40} = \mathbf{20\ \text{L/min}}$$

**The conclusion is the one that reorients everything:** raising heart rate and contractility is *permissive* — it lets the heart accept a larger return without letting filling pressure climb. **The periphery sets the flow; the heart agrees to it.** That is why the resting cardiac output of a trained athlete and a sedentary person are nearly identical, and why [4.3](04-03-exercise-integrative-physiology.md) treats exercise as a vascular event with cardiac consequences rather than the reverse.

</details>

## Flashback

**From Lesson 2.1 (cardiac electrophysiology):** [2.1](02-01-cardiac-electrophysiology.md) claimed that a heart which could tetanize could not pump. Put numbers on it. Take these values as given:

| | action potential | effective refractory period | mechanical twitch |
|---|---|---|---|
| skeletal muscle fibre | 2 ms | 5 ms | 100 ms |
| ventricular myocyte | 300 ms | 290 ms | 300 ms |

(a) For each tissue, compute the refractory period as a fraction of the twitch, and the largest number of *separate* stimuli that could be delivered during one twitch.

(b) Which tissue can fuse its twitches into a sustained tetanus, and what physically is summing? (It is not the action potentials.)

(c) Compute the fastest rate the ventricular refractory period allows, and then use this lesson's quantities to say why "the heart cannot tetanize" is really a statement about *filling* rather than about force.

<details>
<summary>Solution</summary>

**(a)** Refractory fraction of the twitch:

$$\text{skeletal:}\ \frac{5}{100} = \mathbf{5\ \text{percent}}, \qquad \text{cardiac:}\ \frac{290}{300} = \mathbf{96.7\ \text{percent}}.$$

Stimuli deliverable during one twitch — one per refractory period:

$$\text{skeletal:}\ \frac{100\ \text{ms}}{5\ \text{ms}} = \mathbf{20}, \qquad \text{cardiac:}\ \frac{300\ \text{ms}}{290\ \text{ms}} = 1.03 \to \mathbf{1}.$$

**That single pair of ratios is the entire answer.** A skeletal fibre can be re-excited twenty times before its first twitch has finished; a ventricular myocyte can be re-excited essentially never. The plateau is what stretches the refractory period to cover almost the whole mechanical event.

**(b) Only skeletal muscle**, and **what sums is cytosolic calcium, not electrical activity.** Action potentials never overlap in either tissue — they are all-or-none and each is over long before the next. What overlaps is the *contractile* consequence: a second release of $\text{Ca}^{2+}$ from the sarcoplasmic reticulum arrives before the pump has cleared the first, so cytosolic $\text{Ca}^{2+}$ never falls back below the threshold for troponin activation, cross-bridges never all detach, and force ratchets up to a fused plateau ([1.6](01-06-muscle-contraction.md)).

Cardiac muscle is locked out of this. By the time the myocyte is excitable again, its calcium has already been pumped back and its twitch is over — **so there is nothing left to sum with.**

**(c)** The fastest rate the refractory period permits:

$$f_{\max} = \frac{1}{0.290\ \text{s}} = 3.45\ \text{Hz} = \mathbf{207\ \text{beats/min}}.$$

Now put that against this lesson. At 207 beats/min the cycle is 290 ms; systole is nearly incompressible at roughly 250 ms, so **diastole gets about 40 ms** — against 557 ms at the resting 70 beats/min, a **fourteen-fold** cut in filling time. EDV collapses toward ESV, so $SV = EDV - ESV$ collapses toward zero, and $CO = HR \times SV$ falls even though the rate has tripled.

**Push it to the limit and the argument becomes exact.** A genuinely tetanized ventricle is one that never relaxes — so it never refills, $EDV = ESV$, and

$$SV = EDV - ESV = 0 \quad\Longrightarrow\quad CO = 0.$$

**A tetanized heart generates maximal force and pumps nothing at all.** That is the whole point: the plateau does not exist to make the beat stronger, it exists to guarantee that every contraction is followed by a relaxation long enough to refill. Look at panel (a) again — **more than half of the cycle is spent filling.** The refractory period is what protects that half.

</details>

## Connections

- **Backward:** [1.6](01-06-muscle-contraction.md)'s length–tension curve is not a curiosity — the heart's position on its *ascending* limb is what makes Frank–Starling exist. [2.1](02-01-cardiac-electrophysiology.md) supplies the timing that the four mechanical phases hang on, and the AV delay is what creates the atrial kick at the end of filling. [1.1](01-01-homeostasis-feedback-control.md)'s sensor–controller–effector loop appears here in its most degenerate and most elegant form: all three roles played by the same muscle.
- **Forward:** [2.3](02-03-hemodynamics-blood-pressure.md) turns afterload into a real quantity — mean arterial pressure as $CO \times TPR$ — and adds the baroreflex, the *neural* loop layered on top of this mechanical one. [3.3](03-03-fluid-electrolyte-acid-base.md) controls preload from the other end, by setting blood volume and hence mean systemic filling pressure. [4.3](04-03-exercise-integrative-physiology.md) runs every lever in this lesson at once.
- **Sideways:** the loop is literally the $P$–$V$ work diagram of [thermodynamics 1.3](../../thermodynamics-physics/lessons/01-03-heat-work-first-law.md), and the closed-cycle "area equals net work" argument of [thermodynamics 2.1](../../thermodynamics-physics/lessons/02-01-heat-engines-carnot-cycle.md) — run counterclockwise, because a pump is an engine in reverse. Frank–Starling is proportional feedback with the controller absorbed into the plant, the limiting case of [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md); and the low-gradient, low-resistance venous side is the reservoir whose flow physics is [fluid-dynamics 3.2](../../fluid-dynamics/lessons/03-02-couette-poiseuille.md).
