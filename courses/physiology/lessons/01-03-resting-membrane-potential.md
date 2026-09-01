# Human Physiology · Lesson 1.3: The resting membrane potential

> ⏱ ~15 min · Module 1: Homeostasis, cells, and excitable tissue · Builds on: [1.2](01-02-membrane-transport.md) · Unlocks: 1.4 (the action potential)

## Why this matters

[1.2](01-02-membrane-transport.md) left the cell spending roughly a quarter of its resting ATP budget on one enzyme, the $\text{Na}^+/\text{K}^+$-ATPase, to keep $\text{K}^+$ piled up inside and $\text{Na}^+$ piled up outside. **That gradient is a charged battery**, and this lesson is about reading its terminals.

Two things come out of it. The first is a single quantity — the **driving force** $V_m - E_{ion}$ — which is how every remaining lesson in this course will read an ion current, from the cardiac plateau to the proximal tubule. The second is a fact that makes a nurse check a lab value before a heart rhythm: **plasma $\text{K}^+$ is the one ion whose extracellular concentration the body must defend to within a millimole per liter**, because the entire extracellular potassium pool is smaller than what you eat at dinner, and a rise of 3 mmol/L will stop a heart.

The physics behind the equations belongs to [biophysics 4.4](../../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md), which derives Nernst and Goldman from electrochemical potential. We use the results and spend our time on what they buy you.

## The idea

**A concentration gradient is stored energy, and the pump is what paid for it.** Nothing about $\text{K}^+$ being high inside is spontaneous; it is bought, continuously, with ATP. Kill the pump and the gradients bleed away over minutes to hours — and with them everything downstream, because [1.2](01-02-membrane-transport.md)'s secondary active transporters, the action potential of [1.4](01-04-action-potential.md), and the tubular reabsorption of [3.2](03-02-tubular-transport-concentrating-urine.md) all run off that same stored gradient. **The pump is the only place in the whole scheme where energy enters.**

**Each ion has one voltage at which it is content.** Let $\text{K}^+$ through a membrane and it starts leaving, down its gradient. But it carries charge, so every ion that leaves makes the inside more negative, and a negative inside pulls $\text{K}^+$ back. Chemical push out, electrical pull in — at some voltage they exactly cancel and net flow stops. **That voltage is the ion's equilibrium potential $E_{ion}$**, and it depends on nothing but the concentration ratio.

**The membrane cannot satisfy everybody at once.** $E_K$ is about $-94$ mV and $E_{Na}$ is about $+60$ mV; no single voltage makes both happy. What the membrane actually does is settle at a **permeability-weighted average** of the equilibrium potentials — a vote in which each ion's weight is *how easily it currently crosses*, not how much of it there is.

**This is the point people get backwards.** A resting cell sits near $E_K$, at about $-75$ mV. That is **not** because $\text{K}^+$ is the most abundant ion; it is because **at rest, almost the only channels open are $\text{K}^+$ leak channels**. Resting potential is a statement about which channels are open. Open a lot of $\text{Na}^+$ channels and the average lurches toward $E_{Na}$ within a millisecond, with the concentrations totally unchanged — which is exactly what a nerve impulse is.

**And the single most useful idea in the lesson: the driving force.** Once you know where the membrane sits ($V_m$) and where an ion wants it ($E_{ion}$), the gap between them tells you everything:

$$\text{driving force} = V_m - E_{ion}$$

*In words: how far the membrane is from this ion's happy place — the sign says which way the ion is pushed, the magnitude says how hard.* An ion sitting at its equilibrium potential feels nothing no matter how steep its gradient looks; an ion far from it moves hard even through a handful of channels.

## The formal version

**The Nernst equation, physiologist's form.** At body temperature ($37^\circ\text{C}$), with $z$ the ion's valence:

$$\boxed{\;E_{ion} = \frac{61\ \text{mV}}{z}\,\log_{10}\frac{[\text{ion}]_o}{[\text{ion}]_i}\;}$$

*In words: every tenfold concentration ratio across the membrane is worth 61 mV for a monovalent ion, and the outside-over-inside ratio fixes the sign.* The 61 is $\frac{RT}{F}\ln 10$ at 310 K; [biophysics 4.4](../../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md) derives it. Subscript $o$ = outside (extracellular), $i$ = inside (cytosol); $V_m$ is always **inside minus outside**.

Typical mammalian cell, all concentrations in mM:

| ion | $[\ ]_o$ | $[\ ]_i$ | $z$ | $E_{ion}$ |
|---|---|---|---|---|
| $\text{K}^+$ | 4 | 140 | $+1$ | $-94$ mV |
| $\text{Na}^+$ | 145 | 15 | $+1$ | $+60$ mV |
| $\text{Cl}^-$ | 110 | 7 | $-1$ | $-73$ mV |
| $\text{Ca}^{2+}$ | 1.2 | 0.0001 | $+2$ | $+124$ mV |

Two of these deserve a second look. **$\text{Ca}^{2+}$ has a ten-thousand-fold gradient**, which even after dividing by $z=2$ gives the largest equilibrium potential in the cell — and therefore, at rest, the largest driving force of any ion. That is why $\text{Ca}^{2+}$ is the universal trigger: a cell can crack open a few channels and get an enormous, fast, unambiguous signal ([1.5](01-05-neuromuscular-autonomic-transmission.md), [1.6](01-06-muscle-contraction.md)). And **$\text{Cl}^-$ carries a minus sign into the formula**, which flips the ratio — high outside, low inside gives a *negative* $E_{Cl}$.

**The Goldman equation, and the one time we do the arithmetic.** With several ions leaking at once, the membrane sits where the *net* current is zero:

$$V_m = 61\ \text{mV}\cdot\log_{10}\frac{P_K[\text{K}^+]_o + P_{Na}[\text{Na}^+]_o + P_{Cl}[\text{Cl}^-]_i}{P_K[\text{K}^+]_i + P_{Na}[\text{Na}^+]_i + P_{Cl}[\text{Cl}^-]_o}$$

*In words: a permeability-weighted blend of the individual Nernst potentials — whoever crosses most easily wins the vote.* ($\text{Cl}^-$'s concentrations appear flipped, for the same reason its $z=-1$ flipped its Nernst ratio.) Set all permeabilities but one to zero and this collapses to that ion's Nernst potential — a good sanity check.

At rest, $P_{Na}/P_K \approx 0.03$. Divide numerator and denominator by $P_K$ and drop $\text{Cl}^-$ (justified two paragraphs down):

$$\text{numerator} = [\text{K}^+]_o + 0.03\,[\text{Na}^+]_o = 4 + 0.03(145) = 4 + 4.35 = 8.35$$
$$\text{denominator} = [\text{K}^+]_i + 0.03\,[\text{Na}^+]_i = 140 + 0.03(15) = 140 + 0.45 = 140.45$$
$$V_m = 61\log_{10}\frac{8.35}{140.45} = 61\log_{10}(0.05945) = 61(-1.2258) = \mathbf{-74.8\ \text{mV}}$$

**Stare at that numerator.** $\text{Na}^+$ contributed 4.35 of the 8.35 — **more than half, on a permeability of three percent** — because $[\text{Na}^+]_o$ is so large. That tiny leak is what holds the cell 19 mV positive of $E_K$ instead of sitting on it. **A small permeability to an ion with a big gradient is not a small effect.**

**Chord conductance: the equation you will actually use.** Treat each ion's pathway as a battery ($E_{ion}$) in series with a conductance ($g_{ion}$, the ohmic sum of its open channels):

$$\boxed{\;I_{ion} = g_{ion}\left(V_m - E_{ion}\right)\;}$$

*In words: Ohm's law, where the "voltage across the resistor" is not $V_m$ but the distance from $V_m$ to that ion's equilibrium potential.* Sign convention: **positive $I$ means outward positive current, which hyperpolarizes; negative $I$ means inward current, which depolarizes.** Every ion current in the rest of this course — the cardiac plateau ([2.1](02-01-cardiac-electrophysiology.md)), the end-plate current ([1.5](01-05-neuromuscular-autonomic-transmission.md)), tubular $\text{K}^+$ secretion ([3.2](03-02-tubular-transport-concentrating-urine.md)) — gets read this way.

Setting the total current to zero gives the resting potential in its most transparent form:

$$\sum_i g_i (V_{rest} - E_i) = 0 \quad\Longrightarrow\quad V_{rest} = \frac{\sum_i g_i E_i}{\sum_i g_i}$$

*In words: the resting potential is literally a conductance-weighted average of the equilibrium potentials.* At rest $g_K$ dominates the sum, so $V_{rest}$ lands near $E_K$ — same story as Goldman, in a form you can do in your head. (This is a parallel network of batteries and resistors, and reducing it to one battery and one resistor is exactly the Thévenin equivalent of [circuits 2.4](../../circuits/lessons/02-04-thevenin-norton-max-power.md).)

**Why $\text{Cl}^-$ is usually passive.** In a cell with no chloride transporter, nothing holds $[\text{Cl}^-]_i$ at any particular value. $\text{Cl}^-$ simply redistributes until it has no reason to move — that is, until $E_{Cl} = V_m$. Measured $[\text{Cl}^-]_i$ in such cells is 5–10 mM, which is precisely what a $V_m$ near $-75$ mV predicts.

**So $\text{Cl}^-$ contributes zero current at rest, which means it drops out of the Goldman equation entirely** — no matter how large $P_{Cl}$ is. **Chloride distributes itself to the membrane potential; it does not set it.** (What it *does* do, with a large conductance, is hold the membrane there stubbornly — the basis of shunting inhibition in [1.5](01-05-neuromuscular-autonomic-transmission.md).) Give the cell a chloride transporter and this reverses immediately: $E_{Cl}$ is then set by the transporter and $\text{Cl}^-$ becomes an active player. That is Problem 2.

**The pump's two contributions, one small and one enormous.** The $\text{Na}^+/\text{K}^+$-ATPase moves 3 $\text{Na}^+$ out for every 2 $\text{K}^+$ in, so each cycle carries one net positive charge out of the cell. It is **electrogenic**, and it hyperpolarizes:

- **Direct** (its own current): worth about **2–5 mV**. Small.
- **Indirect** (maintaining the gradients that set $E_K$ and $E_{Na}$): worth **everything**.

The experiment that separates them is clean. Poison the pump with ouabain and $V_m$ depolarizes by a few millivolts *immediately* — that is the direct current vanishing. Then, over tens of minutes to hours, $V_m$ decays all the way toward zero as the gradients run down. **The pump does not hold the voltage up moment to moment; it keeps the battery charged.**

## Picture

![Panel a is a horizontal membrane-voltage axis marking the equilibrium potentials of potassium at minus 94, chloride at minus 73, sodium at plus 60 and calcium at plus 124 millivolts, with the resting potential at minus 75 sitting almost on top of the chloride value, and arrows whose lengths show each ion's driving force at rest. Panel b plots resting potential against extracellular potassium on a logarithmic axis: the Nernst potassium line is straight with a slope of 61 millivolts per tenfold change, while the Goldman curve merges with it at high potassium and flattens well above it at low potassium where the sodium leak matters. The normal plasma range is a narrow shaded band and the hyperkalemic point at 8 millimolar is marked.](assets/01-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — read the driving forces off the table).** Using the four equilibrium potentials above and $V_{rest} = -75$ mV, compute each ion's driving force, state which way it moves, and explain how a cell can be at "rest" while three ions are being pushed hard.

$$\text{K}^+:\ V_m - E_K = -75 - (-94) = \mathbf{+19\ \text{mV}} \;\Rightarrow\; I_K > 0,\ \text{outward},\ \text{hyperpolarizing}$$
$$\text{Na}^+:\ V_m - E_{Na} = -75 - (+60) = \mathbf{-135\ \text{mV}} \;\Rightarrow\; I_{Na} < 0,\ \text{inward},\ \text{depolarizing}$$
$$\text{Cl}^-:\ V_m - E_{Cl} = -75 - (-73) = \mathbf{-2\ \text{mV}} \;\Rightarrow\; \text{essentially nothing}$$
$$\text{Ca}^{2+}:\ V_m - E_{Ca} = -75 - (+124) = \mathbf{-199\ \text{mV}} \;\Rightarrow\; I_{Ca} < 0,\ \text{inward, enormous}$$

**Notice how badly intuition from concentrations alone would have failed.** $\text{K}^+$ has the steepest-looking monovalent gradient in the cell, and it is the ion with almost nothing pushing it — because the membrane has already moved to nearly where $\text{K}^+$ wants it. Meanwhile $\text{Ca}^{2+}$, present inside at 0.1 micromolar, has the largest driving force of any ion in the body.

**How is this "rest"?** Because at rest the currents cancel:

$$g_K(+19) + g_{Na}(-135) = 0 \quad\Longrightarrow\quad \frac{g_K}{g_{Na}} = \frac{135}{19} \approx 7$$

*A small $\text{K}^+$ driving force through a large conductance exactly balances a huge $\text{Na}^+$ driving force through a small one.* This is a **steady state, not an equilibrium** — $\text{Na}^+$ really is trickling in and $\text{K}^+$ really is trickling out, forever, and the pump's entire job is to bail continuously. **A resting cell is doing work to stand still**, which is the same pattern as the homeostatic loops of [1.1](01-01-homeostasis-feedback-control.md).

**Example 2 (why you'd care — why plasma potassium is a vital sign).** A patient's plasma $\text{K}^+$ rises from 4.0 to 6.0 mmol/L; $[\text{K}^+]_i$ is unchanged at 140. Work out what happens to $E_K$, to $V_{rest}$, and to the cell's excitability.

**Step 1 — the new $E_K$:**

$$E_K = 61\log_{10}\frac{6}{140} = 61\log_{10}(0.04286) = 61(-1.368) = -83.4\ \text{mV}$$

$$\Delta E_K = -83.4 - (-94.2) = \mathbf{+10.8\ \text{mV}\ \text{of depolarization}}$$

**Step 2 — the new $V_{rest}$** (Goldman, same $P_{Na}/P_K = 0.03$):

$$V_m = 61\log_{10}\frac{6 + 4.35}{140.45} = 61\log_{10}(0.07369) = \mathbf{-69.1\ \text{mV}}$$

up from $-74.8$: **+5.7 mV**. (In a real cell the shift is larger still, because inward-rectifier $\text{K}^+$ channels *open more* when $[\text{K}^+]_o$ rises, pulling $V_m$ closer to the Nernst line — the curve in panel (b) is a lower bound.)

**Step 3 — why 2 mmol/L is so much.** Differentiate the Nernst equation:

$$\frac{dE_K}{d[\text{K}^+]_o} = \frac{61}{\ln(10)\,[\text{K}^+]_o} = \frac{26.5}{[\text{K}^+]_o}\ \frac{\text{mV}}{\text{mM}} = 6.6\ \frac{\text{mV}}{\text{mM}} \ \text{at}\ [\text{K}^+]_o = 4$$

Do the same for sodium: $26.5/145 = 0.18$ mV per mM. **One millimole per liter of plasma $\text{K}^+$ is worth 36 times as much voltage as one millimole per liter of plasma $\text{Na}^+$.** The reason is pure arithmetic: **$E$ depends on the *ratio*, and the extracellular potassium number is small**, so an absolute change that is trivial for sodium is a large fractional change for potassium.

**Step 4 — the pool is tiny.** In a 70 kg adult the extracellular fluid is about 14 L, so the entire extracellular $\text{K}^+$ pool is

$$14\ \text{L} \times 4\ \text{mmol/L} = 56\ \text{mmol}$$

against roughly 3900 mmol inside cells — a 70-fold asymmetry. **A single mixed meal delivers 30–40 mmol of $\text{K}^+$**, which if it stayed extracellular would nearly double plasma $\text{K}^+$ and be lethal before dessert. It does not, because insulin and $\beta_2$-adrenergic stimulation immediately drive the $\text{Na}^+/\text{K}^+$-ATPase of [1.2](01-02-membrane-transport.md) and shunt the load into cells within minutes; the kidney then excretes it over hours. **Internal shift buys time; renal excretion does the accounting** — [3.3](03-03-fluid-electrolyte-acid-base.md) owns that story.

**Step 5 — the excitability paradox.** With threshold near $-55$ mV:

| | $V_{rest}$ | gap to threshold | excitability |
|---|---|---|---|
| normal ($[\text{K}^+]_o = 4$) | $-74.8$ mV | 19.8 mV | baseline |
| mild hyperkalemia ($6$) | $-69.1$ mV | 14.1 mV | **increased** |
| severe, sustained ($>7$) | $-65$ mV and above | small | **collapsed** |

At first the cell is *closer to threshold*, so a smaller stimulus fires it — muscles tingle and twitch, and the heart's T waves peak. Then the second effect takes over. **Voltage-gated $\text{Na}^+$ channels do not just open with depolarization; they inactivate with it**, and inactivation does not reverse until the membrane repolarizes ([1.4](01-04-action-potential.md)). A *sustained* depolarization therefore parks a growing fraction of $\text{Na}^+$ channels in the inactivated state, and with fewer available channels the upstroke weakens, conduction slows, and eventually cells cannot fire at all.

**Hence the shape of the emergency: excitable, then inexcitable, and the transition is not gradual where it matters.** In the heart, conduction slows (the QRS widens), atrial activity fails (P waves vanish), and the ECG degenerates toward a sine wave and then asystole or ventricular fibrillation. **Hyperkalemia is a cardiac emergency, not a lab abnormality** — the acute treatments map straight onto this lesson: intravenous calcium raises threshold back away from the depolarized $V_m$ (buying minutes without touching $[\text{K}^+]_o$), while insulin with glucose drives potassium into cells. [2.1](02-01-cardiac-electrophysiology.md) picks up the cardiac side.

Hypokalemia is the mirror image and equally dangerous: at $[\text{K}^+]_o = 2$, $E_K = 61\log_{10}(2/140) = -112.6$ mV, hyperpolarizing the cell and prolonging cardiac repolarization into arrhythmia. **Both directions kill; the safe window is about 3.5 to 5.0 mmol/L.** Contrast plasma sodium, which tolerates 135–145 comfortably and whose disorders are problems of *water and osmolarity*, not voltage. **Sodium disorders are water problems. Potassium disorders are voltage problems.**

## Watch out

- **You might think the cell rests near $E_K$ because $\text{K}^+$ is the most abundant intracellular ion.** It rests near $E_K$ because $\text{K}^+$ leak channels are the ones that are open. Concentrations set *where each ion wants the membrane*; permeabilities set *whose wish is granted*. During the action-potential upstroke the concentrations are unchanged and the membrane sits near $E_{Na}$.
- **You might think the pump holds the voltage up directly.** Its own current is worth 2–5 mV. Block it and $V_m$ barely moves at first — then decays over an hour as the gradients dissipate. **Small direct effect, total indirect effect.**
- **You might read the sign of $I_{ion} = g_{ion}(V_m - E_{ion})$ as the ion's direction of motion.** It is the direction of *current*. For cations they coincide; for $\text{Cl}^-$ the ion moves opposite to the current it carries. The reliable reading is electrical: **inward current depolarizes, outward current hyperpolarizes**, whatever is carrying it.
- **You might expect the ion concentrations to change measurably when the membrane charges up.** They do not. With a membrane capacitance of $1\ \mu\text{F}/\text{cm}^2$, charging a 10 μm cell through 100 mV moves about $1.3\times10^{-17}$ mol of charge against an intracellular $\text{K}^+$ content of $5.9\times10^{-13}$ mol — **about one $\text{K}^+$ ion in 45,000**. The bulk solutions stay electroneutral to exquisite precision; the voltage lives in a vanishingly thin charge layer on the membrane. This is why we can treat $[\text{K}^+]_i$ as a constant through a whole train of spikes.
- **You might think a chloride gradient tells you something about the resting potential.** Backwards: with no chloride transporter, the resting potential tells you the chloride gradient. Look for a transporter before you let $\text{Cl}^-$ into the story.

## One-liner

> Every ion has one voltage it is content at; the membrane settles at the permeability-weighted average of those voltages, and the gap between where the membrane sits and where an ion wants it — the driving force $V_m - E_{ion}$ — is the whole reason anything moves.

## Problems

**P1 (🟢)** A skeletal muscle fiber has $[\text{K}^+]_i = 150$ mM and $[\text{K}^+]_o = 5$ mM, and rests at $-72$ mV. (a) Compute $E_K$. (b) Compute the driving force on $\text{K}^+$ and state which way $\text{K}^+$ moves. (c) If $g_K = 0.40\ \text{mS}/\text{cm}^2$, compute $I_K$ in $\mu\text{A}/\text{cm}^2$ and say whether it depolarizes or hyperpolarizes.

**P2 (🟡, bridges to synaptic physiology)** A mature neuron rests at $-70$ mV, has $[\text{Cl}^-]_o = 110$ mM, and expresses no chloride transporter. (a) Predict its steady-state $[\text{Cl}^-]_i$. (b) A GABA receptor opens a large $\text{Cl}^-$ conductance. What happens to $V_m$, and in what sense is this still inhibitory? (c) An immature neuron expresses the NKCC1 transporter, which loads $\text{Cl}^-$ in to $[\text{Cl}^-]_i = 25$ mM. Compute $E_{Cl}$ and state what GABA now does to that cell.

**P3 (🔴)** A patient's plasma $\text{K}^+$ rises from 4.0 to 7.0 mmol/L, with $[\text{K}^+]_i = 140$ unchanged; use $[\text{Na}^+]_o = 145$, $[\text{Na}^+]_i = 15$, $P_{Na}/P_K = 0.03$. (a) Compute the new $E_K$ and the shift. (b) Compute the new $V_{rest}$ from Goldman and the shift, and explain why it is smaller than the shift in $E_K$. (c) The patient is initially hyperreflexic, then becomes weak with a widening QRS. Explain both phases mechanistically. (d) Compute how far plasma $\text{Na}^+$ would have to rise to shift $E_{Na}$ by the same number of millivolts as in (a), and comment on what that comparison explains.

<details>
<summary>Solutions</summary>

**P1 (a)**

$$E_K = 61\log_{10}\frac{5}{150} = 61\log_{10}(0.03333) = 61(-1.4771) = \mathbf{-90.1\ \text{mV}}$$

**(b)**

$$V_m - E_K = -72 - (-90.1) = \mathbf{+18.1\ \text{mV}}$$

Positive, so the current is **outward**: $\text{K}^+$ leaves the cell. Sanity check without the formula — the membrane sits 18 mV *positive* of where $\text{K}^+$ would be content, so $\text{K}^+$ leaves in order to drag the membrane back down toward $E_K$. **An ion always moves in the direction that pushes $V_m$ toward its own $E$.**

**(c)**

$$I_K = g_K(V_m - E_K) = (0.40\times10^{-3}\ \text{S}/\text{cm}^2)(18.1\times10^{-3}\ \text{V}) = 7.2\times10^{-6}\ \text{A}/\text{cm}^2 = \mathbf{7.2\ \mu\text{A}/\text{cm}^2}$$

Outward and positive, therefore **hyperpolarizing**. Note it is small in absolute terms despite a healthy conductance, purely because the driving force is small — which is the whole point of the driving-force concept.

**P2 (a)** With no transporter, $\text{Cl}^-$ moves until it has no reason to move, i.e. until $E_{Cl} = V_m = -70$ mV. Solve the Nernst equation ($z=-1$) for the inside concentration:

$$-70 = -61\log_{10}\frac{110}{[\text{Cl}^-]_i} \;\Longrightarrow\; \log_{10}\frac{[\text{Cl}^-]_i}{110} = -\frac{70}{61} = -1.1475$$

$$\frac{[\text{Cl}^-]_i}{110} = 10^{-1.1475} = 0.0712 \;\Longrightarrow\; [\text{Cl}^-]_i = \mathbf{7.8\ \text{mM}}$$

Measured values in mature neurons are 5–10 mM. **This is not a coincidence, it is a consequence** — passive chloride reports the resting potential back to you.

**(b)** The driving force is $V_m - E_{Cl} = -70 - (-70) = 0$, so **opening chloride channels drives no current and $V_m$ does not change**. Yet the synapse is unmistakably inhibitory, because opening channels does two things: it supplies a current *and* it raises the total conductance $\sum g_i$. Look at the resting-potential formula: raising $g_{Cl}$ with $E_{Cl} = V_m$ pulls the conductance-weighted average more tightly toward the value it already has. Any excitatory current arriving now has to charge a much leakier membrane, so it produces a far smaller depolarization.

**This is shunting inhibition** — inhibition that shows up as *nothing happening*, visible only when you try to excite the cell. It is why an inhibitory synapse can be effective with zero measurable IPSP, and it is developed in [1.5](01-05-neuromuscular-autonomic-transmission.md).

**(c)**

$$E_{Cl} = -61\log_{10}\frac{110}{25} = -61\log_{10}(4.40) = -61(0.6435) = \mathbf{-39.3\ \text{mV}}$$

$$V_m - E_{Cl} = -70 - (-39.3) = -30.7\ \text{mV} \;\Rightarrow\; \text{inward current} \;\Rightarrow\; \textbf{depolarizing}$$

**GABA is excitatory in this cell.** (Careful with the direction of ion motion: an inward *current* here means $\text{Cl}^-$ ions flowing *out*, since they are negative — exactly the trap in "Watch out". The electrical conclusion, depolarization, is unambiguous.)

This is real physiology, not a contrivance: immature neurons express NKCC1 and are depolarized by GABA, switching to the mature KCC2-driven pattern later in development. **Same transmitter, same receptor, same channel — opposite sign, decided entirely by a transporter setting $E_{Cl}$.** It is the sharpest illustration in the course that a synapse's sign lives in the ion gradient, not in the receptor.

**P3 (a)**

$$E_K = 61\log_{10}\frac{7}{140} = 61\log_{10}(0.05) = 61(-1.30103) = \mathbf{-79.4\ \text{mV}}$$

$$\Delta E_K = -79.4 - (-94.2) = \mathbf{+14.8\ \text{mV}}$$

(Worth noticing: 4 to 7 is not quite a doubling, and a doubling is worth exactly $61\log_{10}2 = 18.4$ mV. **Every doubling of plasma potassium is about 18 mV of depolarization** — a number to carry around.)

**(b)**

$$V_m = 61\log_{10}\frac{7 + 0.03(145)}{140 + 0.03(15)} = 61\log_{10}\frac{11.35}{140.45} = 61\log_{10}(0.08081) = 61(-1.0925) = \mathbf{-66.6\ \text{mV}}$$

$$\Delta V_{rest} = -66.6 - (-74.8) = \mathbf{+8.2\ \text{mV}}$$

**Why smaller than the 14.8 mV shift in $E_K$:** $V_{rest}$ is a weighted average of $E_K$ and $E_{Na}$, and only one of the two moved. The sodium leak acts as an anchor, so the membrane inherits a fraction of the change in $E_K$, not all of it. (The real-cell caveat from Example 2 applies: inward rectifiers open as $[\text{K}^+]_o$ rises, which increases $g_K$'s weight and pushes the observed shift back up toward the Nernstian value. Panel (b) of the figure shows the two curves converging for exactly this reason.)

**(c) Phase 1, hyperexcitability.** The gap from $V_{rest}$ to threshold shrinks from about 19.8 mV to about 11.6 mV, so a stimulus that was subthreshold now fires the cell: brisk reflexes, muscle twitching, peaked T waves on the ECG.

**Phase 2, inexcitability.** Voltage-gated $\text{Na}^+$ channels inactivate at depolarized potentials and cannot recover from inactivation until the membrane repolarizes. A *sustained* depolarization therefore removes $\text{Na}^+$ channels from the available pool permanently rather than transiently, and the fraction available falls steeply over this voltage range. Fewer available channels means a smaller, slower upstroke, which means slower propagation and eventually failure to fire.

**The two phases are not a contradiction; they are the difference between a transient depolarization and a maintained one.** Transient depolarization is a stimulus. Maintained depolarization is a poison. In the heart the second phase is what kills: conduction slows (QRS widens), atrial muscle stops responding (P waves disappear), and the tracing degenerates toward a sine wave, then ventricular fibrillation or asystole.

**(d)** We need $[\text{Na}^+]_o'$ such that $E_{Na}$ rises by 14.8 mV:

$$61\log_{10}\frac{[\text{Na}^+]_o'}{145} = 14.8 \;\Longrightarrow\; \log_{10}\frac{[\text{Na}^+]_o'}{145} = 0.2426 \;\Longrightarrow\; \frac{[\text{Na}^+]_o'}{145} = 1.749$$

$$[\text{Na}^+]_o' = \mathbf{254\ \text{mmol/L}}$$

**The comparison is the answer to the whole lesson.** To move sodium's equilibrium potential as far as three extra millimoles of potassium moved potassium's, plasma sodium would have to go from 145 to 254 mmol/L — an osmolarity that would kill by dehydrating every cell in the body long before any voltage mattered, and which no physiological process can produce.

The asymmetry is not about the ions being different in kind. It is that **$E$ depends on a ratio, and potassium's extracellular number is small**. Three millimoles per liter is 75 percent of the extracellular potassium pool and 2 percent of the sodium pool. That single arithmetic fact is why the body defends plasma $\text{K}^+$ inside a 1.5 mmol/L window with a dedicated hormonal apparatus (aldosterone, insulin, $\beta_2$ tone — see [3.3](03-03-fluid-electrolyte-acid-base.md) and [3.4](03-04-endocrine-axes.md)), and why potassium is the ion on the emergency lab panel.

</details>

## Flashback

**From Lesson 1.2 (transport across the cell membrane):** A red blood cell with an intracellular osmolarity of 290 mOsm/L (all of it impermeant solute) is dropped into each of three solutions. Urea crosses the membrane freely; NaCl does not.

- **A:** 290 mOsm/L NaCl
- **B:** 290 mOsm/L urea
- **C:** 145 mOsm/L NaCl plus 145 mOsm/L urea

For each, state the osmolarity and the tonicity, and predict the final cell volume as a multiple of the starting volume. Red cells lyse beyond about $1.4\times$ their initial volume.

<details>
<summary>Solution</summary>

**The distinction being tested: osmolarity counts every solute; tonicity counts only the ones that cannot cross.** A permeant solute equilibrates across the membrane and therefore ends up exerting no sustained osmotic pull at all.

**A — 290 NaCl.** Osmolarity 290 (isosmotic). Effective (impermeant) osmolarity 290, so **isotonic**. No gradient, no water movement.

$$V_{final} = \mathbf{1.0\,V_0}$$

**B — 290 urea.** Osmolarity 290, so **isosmotic** — and yet urea walks straight through the membrane and equilibrates, contributing equally to both sides and cancelling out. The effective extracellular osmolarity is **0**, so the solution is **grossly hypotonic**. Water floods in with no equilibrium to reach.

$$V_{final} \to \infty \;\Rightarrow\; \textbf{the cell lyses}$$

**C — 145 NaCl + 145 urea.** Osmolarity 290, **isosmotic** again. But only the NaCl is impermeant, so the effective osmolarity is **145 — hypotonic**. Water enters until the intracellular impermeant solute is diluted to match:

$$290\ \text{mOsm/L} \times V_0 = 145\ \text{mOsm/L} \times V_{final} \;\Longrightarrow\; V_{final} = \mathbf{2.0\,V_0}$$

Past the $1.4\times$ lysis threshold, so **this cell also bursts**, even though the label on the bottle reads a perfectly normal 290 mOsm/L.

**The clinical punchline, and the reason 1.2 made the distinction:** all three solutions are isosmotic, and two of the three are lethal. **Osmolarity is what you measure; tonicity is what the cell feels.** This is exactly why intravenous fluids are specified by their impermeant solute content, and why an infusion of isosmotic dextrose behaves as free water once the dextrose is metabolized.

</details>

## Connections

- **Backward:** [1.2](01-02-membrane-transport.md) built the gradients and paid for them; this lesson cashes them out as a voltage. [1.1](01-01-homeostasis-feedback-control.md)'s pattern of continuous work to hold a variable steady is exactly what the resting steady state is.
- **Forward:** [1.4](01-04-action-potential.md) is this lesson with $P_{Na}$ made a function of voltage — the spike is the permeability-weighted average lurching from near $E_K$ to near $E_{Na}$ and back. [1.5](01-05-neuromuscular-autonomic-transmission.md) reads every postsynaptic current as $g(V_m - E_{rev})$, [1.6](01-06-muscle-contraction.md) and [2.1](02-01-cardiac-electrophysiology.md) exploit calcium's colossal driving force, and [3.3](03-03-fluid-electrolyte-acid-base.md) owns the potassium balance that keeps $E_K$ where it belongs.
- **Sideways:** the derivation of Nernst and Goldman from electrochemical potential is [biophysics 4.4](../../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md), and the voltage-dependent gating that turns this static picture into a spike is [biophysics 4.5](../../biophysics/lessons/04-05-excitable-membranes-action-potential.md). The parallel-conductance model is a battery-and-resistor network with a capacitor across it, so [circuits 2.4](../../circuits/lessons/02-04-thevenin-norton-max-power.md) and [circuits 3.2](../../circuits/lessons/03-02-first-order-rc-rl-transients.md) are the same mathematics — and the membrane time constant $\tau = R_m C_m$ that governs synaptic summation is literally an RC transient.
