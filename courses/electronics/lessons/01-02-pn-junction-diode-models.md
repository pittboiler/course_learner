# Electronics & Semiconductors · Lesson 1.2: The pn-junction diode — I–V & models

> ⏱ ~15 min · Module 1: Diodes & applications · Builds on: [1.1 Semiconductors, carriers & doping](01-01-semiconductors-carriers-doping.md), [`circuits` 1.4](../../circuits/lessons/01-04-voltage-current-dividers.md) · Unlocks: 1.3 (rectifiers), 1.4 (clippers, clampers, Zener)

## Why this matters

A diode is the first device in this course that refuses to be a resistor. Its current depends *exponentially* on its voltage, so nothing you learned in [`circuits`](../../circuits/syllabus.md) — nodal analysis, superposition, Thévenin — applies directly, because all of that machinery assumes linearity. You have two choices: solve a transcendental equation every time, or **replace the device with a linear stand-in that is good enough for the question you're asking.**

Engineers always pick the second, and this lesson teaches the habit: **climb the model ladder only as high as your question requires.** That habit is the actual subject here. It comes back for the transistor in [2.1](02-01-bjt-how-it-works.md) and [2.3](02-03-bjt-small-signal-amplifiers.md), and for the op-amp in [3.1](03-01-ideal-op-amp-inverting-noninverting.md) — every one of those devices gets the same treatment: an ideal model for reasoning, a DC model for biasing, and a small-signal model for gain.

## The idea

Take the n-type slab and the p-type slab from [1.1](01-01-semiconductors-carriers-doping.md) and press them together. The n side is crowded with mobile electrons; the p side is crowded with mobile holes. Concentration gradients do what concentration gradients always do: **carriers diffuse.** Electrons wander left into the p side, holes wander right into the n side, and each one that leaves is annihilated by a partner on the other side.

Here's the twist. The donor and acceptor atoms that supplied those carriers are **not** mobile — they're covalently locked into the lattice. So when an electron leaves the n side, it strands a positively charged donor ion behind. When a hole leaves the p side, it strands a negatively charged acceptor ion. A thin zone around the junction is swept clean of mobile carriers and left holding **fixed** charge: positive on the n side, negative on the p side. That zone is the **depletion region**, and the charge in it creates an electric field pointing from n to p.

That field pushes back. It drags any electron that strays into the region back toward the n side — exactly opposing the diffusion that created it. The junction settles when **drift exactly cancels diffusion**: no net current, and a permanent voltage step across the junction called the **built-in potential** $V_{bi}$ (about 0.6–0.8 V for silicon). You cannot measure it with a voltmeter — the contact potentials at the probe tips cancel it exactly — but it's there, and it's the barrier the diode is built around.

Now bias it:

- **Forward bias** (external + on p, − on n) pushes against the built-in field, *shrinking* the barrier. Diffusion is no longer balanced, and it wins. Because the number of carriers with enough energy to climb a barrier falls off exponentially with barrier height (Boltzmann statistics), *lowering* the barrier raises the current **exponentially**.
- **Reverse bias** (+ on n) reinforces the barrier and widens the depletion region. Majority carriers can't climb it at all. All that's left is the trickle of minority carriers that happen to be generated inside the depletion region and get swept across — a tiny, nearly voltage-independent **saturation current**, on the order of $10^{-14}$ A for a small-signal diode.

That asymmetry — exponentially large one way, femtoamps the other — is the whole device. A one-way valve.

The full derivation (quasi-Fermi levels, the depletion approximation, minority-carrier injection) belongs to solid-state physics; it lives in [`condensed-matter` 4.5](../../condensed-matter/lessons/04-05-pn-junction.md). **We are deliberately deferring it.** For circuit work you need the resulting I–V law and nothing more.

## The formal version

**The Shockley diode equation.** For a diode with anode-to-cathode voltage $V_D$ (volts) carrying current $I_D$ (amperes, positive from anode to cathode):

$$\boxed{\,I_D = I_S\left(e^{V_D/(nV_T)} - 1\right)\,}$$

- $I_S$ — the **saturation current** (A). A device constant set by geometry and doping; roughly $10^{-14}$ A for a small-signal silicon diode like a 1N4148. It roughly doubles for every 5 °C rise, which is why diodes are temperature-sensitive.
- $n$ — the **ideality factor**, dimensionless, between 1 and 2 depending on how much of the current is recombination in the depletion region. **Take $n = 1$ unless a problem says otherwise**, and we will.
- $V_T = kT/q$ — the **thermal voltage** (V), with $k$ Boltzmann's constant, $T$ absolute temperature (K), $q$ the electronic charge. At $T = 300$ K, $V_T = 25.85$ mV. **This course's working value is $V_T \approx 25\ \text{mV}$**, and we'll use it consistently from here through the BJT.

*In words: current climbs exponentially with forward voltage; run the diode backwards and the exponential dies, leaving $-I_S$.*

Check the two limits. For $V_D$ more than about 100 mV forward, $e^{V_D/V_T} \gg 1$ and the $-1$ is irrelevant: $I_D \approx I_S e^{V_D/V_T}$. For $V_D$ more than about 100 mV reverse, $e^{V_D/V_T} \to 0$ and $I_D \approx -I_S$. Saturation: it doesn't grow no matter how hard you pull.

### The 60 mV rule — why "0.7 V" works

Invert the forward equation: $V_D = nV_T \ln(I_D/I_S)$. Now ask what voltage change multiplies the current by ten:

$$\Delta V_D = nV_T\ln\!\left(\frac{10 I_D}{I_S}\right) - nV_T\ln\!\left(\frac{I_D}{I_S}\right) = nV_T \ln 10.$$

With $n = 1$ and $V_T = 25$ mV: $\Delta V_D = 25 \times 2.303 = 57.6\ \text{mV}$. (Use the more exact $V_T = 25.85$ mV and you get 59.5 mV — hence the shop-floor name, **"60 mV per decade."**)

*In words: a tenfold change in diode current costs you less than 60 millivolts.*

Sit with that. Take a real diode at 4.33 mA, where its drop works out to 0.670 V. Drop the current by a factor of ten, to 0.433 mA, and the drop falls to 0.612 V. Raise it tenfold, to 43.3 mA, and it rises to 0.727 V. **Over a hundredfold current range the diode's voltage moved by 115 mV.** That is why an engineer can say "assume 0.7 V across a conducting silicon diode" and be right to within a few percent across every current a small-signal diode will ever see. The exponential is so steep it acts like a wall — and a wall is just a battery you haven't drawn yet.

### The model ladder

**Rung 1 — the ideal diode.** $V_D = 0$ when conducting (a short), $I_D = 0$ when reverse-biased (an open). *Use it when* you want the topology of the answer: which diodes conduct, what the waveform's shape is, whether a logic node is pulled high or low. Never for a bias current you'll quote to three digits.

**Rung 2 — the constant-voltage-drop (CVD) model.** $V_D = 0.7\ \text{V}$ when conducting, open when reverse-biased. *Use it when* you need DC operating points and real numbers. This is the workhorse — it carries [1.3](01-03-rectifiers-power-supplies.md) and [1.4](01-04-clippers-clampers-zener.md) entirely, and the 60 mV rule above is its justification.

*Procedure:* guess which diodes conduct, replace each conducting one with a 0.7 V source (+ at the anode) and each off one with an open, solve the now-linear circuit with ordinary [KVL/KCL](../../circuits/lessons/01-03-kirchhoffs-laws-kcl-kvl.md), then **check the guess**: conducting diodes must come out with $I_D > 0$, and off diodes must come out with $V_D < 0.7$ V. If a check fails, flip that diode's assumed state and redo.

**Rung 3 — the small-signal model.** Suppose the diode is already parked at a bias point $(V_D, I_D)$ and a *small* AC signal $v_d$ rides on top. Then the diode looks like a plain resistor whose value is the reciprocal slope of the I–V curve at that point. Differentiate the Shockley equation:

$$\frac{dI_D}{dV_D} = \frac{d}{dV_D}\left[I_S\left(e^{V_D/(nV_T)}-1\right)\right] = \frac{I_S}{nV_T}e^{V_D/(nV_T)} = \frac{I_D + I_S}{nV_T} \approx \frac{I_D}{nV_T},$$

dropping $I_S$ because it's ~$10^{-11}$ times the bias current. Inverting gives the **incremental (dynamic) resistance**

$$\boxed{\,r_d = \frac{dV_D}{dI_D} = \frac{nV_T}{I_D}\,} \qquad\text{(with } n=1:\ r_d = V_T/I_D\text{)}$$

*In words: to a small wiggle, a diode biased at $I_D$ is just a resistor of $25\ \text{mV}/I_D$.*

At $I_D = 1$ mA: $r_d = 25\ \text{mV} / 1\ \text{mA} = 25\ \Omega$. At 10 mA it's 2.5 Ω; at 0.1 mA it's 250 Ω. Notice that $r_d$ is not a property of the diode — it's a property of the *bias point you chose*. Change the DC current and the AC resistance changes with it.

**Flag this move, because it is the most reused idea in analog electronics:** take a nonlinear device, pin it at an operating point with DC, then linearize about that point by taking a derivative, and analyze the small signal with ordinary linear circuit theory. That is exactly how the BJT's $g_m = I_C/V_T$ arises in [2.3](02-03-bjt-small-signal-amplifiers.md) and how the MOSFET's $g_m = 2I_D/V_{ov}$ arises in [2.5](02-05-mosfet-biasing-common-source.md). Learn it once here on the easiest device in the catalogue.

### Load-line analysis — the exact method the models approximate

Put a diode in series with a resistor $R$ and a source $V_S$. Two facts must hold at once:

$$I_D = I_S\left(e^{V_D/(nV_T)}-1\right) \qquad\text{(the device)}, \qquad I_D = \frac{V_S - V_D}{R} \qquad\text{(the circuit, by KVL)}.$$

*In words: the diode says what current flows for a given voltage; KVL says what current the rest of the circuit can supply at that voltage. Reality is where the two agree.*

The second equation is a straight line in the $(V_D, I_D)$ plane — the **load line** — with intercepts $(V_S, 0)$ and $(0, V_S/R)$ and slope $-1/R$. Draw it on top of the diode's curve; the intersection is the **operating point** or **Q-point**. That's the same "where do two constraints meet" reasoning as a [voltage divider](../../circuits/lessons/01-04-voltage-current-dividers.md), just with one branch curved. The load line reappears for BJT biasing in [2.2](02-02-bjt-dc-biasing.md), where the vertical axis becomes $I_C$ and the curve becomes a family.

## Picture

![Panel a: the diode current-voltage curve, with an exponential forward rise near 0.65 volts, a nearly flat reverse leakage of minus the saturation current, and a reverse breakdown knee on a compressed axis. Panel b: the same forward curve zoomed to 0 through 0.8 volts, with a nearly horizontal load line for a 5 volt source and 1 kilohm resistor, the Q-point marked in coral at 0.67 volts and 4.33 milliamps, the 0.7 volt model prediction of 4.30 milliamps marked in grey, and a small schematic of the series circuit](assets/01-02-fig1.svg)

![Three side-by-side panels showing the true exponential diode curve in blue with each model's piecewise approximation in coral: an ideal switch that turns on at 0 volts, a constant-voltage-drop model that turns on at 0.7 volts, and a small-signal tangent line drawn at a 1 milliamp bias point on a zoomed axis, each with its equivalent circuit element and a note on when to use it](assets/01-02-fig2.svg)

## Worked examples

**Example 1 (the comparison that justifies everything).** A silicon diode ($I_S = 10^{-14}$ A, $n = 1$) sits in series with $R = 1\ \text{k}\Omega$ across $V_S = 5$ V. Find $I_D$ three ways.

*Ideal model.* $V_D = 0$, so the whole 5 V lands on the resistor:

$$I_D = \frac{5\ \text{V}}{1\ \text{k}\Omega} = 5\ \text{mA}.$$

*CVD model.* $V_D = 0.7$ V, leaving 4.3 V on the resistor:

$$I_D = \frac{5 - 0.7}{1000} = \frac{4.3}{1000} = 4.30\ \text{mA}.$$

*Exact (iterate the Shockley equation).* Start from the CVD answer and alternate between the two constraints. With $I_D = 4.30$ mA,

$$V_D = V_T\ln\frac{I_D}{I_S} = 0.025\,\ln\!\left(\frac{4.30\times10^{-3}}{10^{-14}}\right) = 0.025\,\ln(4.30\times10^{11}) = 0.025 \times 26.787 = 0.6697\ \text{V}.$$

Feed that back: $I_D = (5 - 0.6697)/1000 = 4.330$ mA. One more round gives $V_D = 0.6699$ V and $I_D = 4.330$ mA — converged.

**The verdict.** True answer 4.330 mA. The CVD model gives 4.30 mA, off by **0.70 percent**. The ideal model gives 5 mA, off by 15 percent — fine for "is it milliamps or microamps?", useless for design. And the true drop is 0.670 V, not 0.700 V: the CVD model is wrong about the *voltage* by 30 mV and still nails the *current*, because the 4.33 V across the resistor swamps the error. **That is the structural reason the 0.7 V model works: the resistor, not the diode, sets the current, and the diode's drop barely moves.**

*Check.* Iteration converged monotonically and both constraints are satisfied at $(0.670\ \text{V},\ 4.330\ \text{mA})$: KVL gives $0.670 + 4.330 \times 1 = 5.000$ V ✓, and the Shockley equation gives $10^{-14}e^{0.6699/0.025} = 4.33$ mA ✓.

**Example 2 (why the small-signal model earns its rung).** The same diode is biased by $V_S = 5$ V through $R = 1\ \text{k}\Omega$, and now a 20 mV-peak audio signal is added in series with the 5 V supply. How much of it appears across the diode?

DC first (that's the CVD model's job): $I_D \approx 4.30$ mA. Then linearize:

$$r_d = \frac{V_T}{I_D} = \frac{25\ \text{mV}}{4.30\ \text{mA}} = 5.81\ \Omega.$$

For the small signal, kill the DC sources ([superposition](../../circuits/lessons/02-03-superposition-source-transformation.md)) and replace the diode by $r_d$. What's left is a plain voltage divider:

$$v_d = v_s\,\frac{r_d}{R + r_d} = 20\ \text{mV} \times \frac{5.81}{1005.81} = 0.116\ \text{mV} = 116\ \mu\text{V}.$$

*Check.* $5.81/1005.81 = 0.00578$; $20 \times 0.00578 = 0.116$ ✓. So the diode absorbs 0.6 percent of the wiggle and the resistor takes the rest — the diode really is behaving like a stiff 0.67 V reference. That's precisely what makes diodes useful as voltage references and bias strings, and it's the mechanism behind the "diode drop" biasing you'll meet in amplifier output stages.

### Two things the models leave out

**Reverse breakdown.** Push the reverse voltage far enough and the field in the depletion region gets strong enough to tear carriers loose (Zener tunnelling at low voltages, avalanche multiplication at high ones). Current then rises almost vertically at a well-defined $-V_{BR}$. For a rectifier that's failure — you must respect the peak-inverse-voltage rating in [1.3](01-03-rectifiers-power-supplies.md). For a **Zener diode**, breakdown is the *point*: a deliberately sharp knee makes an excellent voltage reference, which is [1.4](01-04-clippers-clampers-zener.md)'s business.

**Reverse recovery.** A forward-biased pn diode stores minority carriers in the neutral regions. Reverse the voltage and the diode keeps conducting *backwards* until that stored charge is swept out — the **reverse recovery time** $t_{rr}$, a few nanoseconds for a 1N4148 but microseconds for a chunky rectifier. Above a few hundred kilohertz that's real lost power, which is why switch-mode supplies use **Schottky diodes**: a metal-semiconductor junction with no minority-carrier storage, so $t_{rr} \approx 0$, plus a lower forward drop of about 0.3 V.

**Temperature.** At *fixed current*, the forward drop falls by roughly $2\ \text{mV}$ per °C rise (the growth of $I_S$ beats the growth of $V_T$). A 0.7 V drop at 25 °C is about 0.6 V at 75 °C. That's a nuisance for bias stability — and a gift for thermometry, since it makes a diode a cheap, linear temperature sensor.

## Watch out

- **You might think "0.7 V" is a physical constant of silicon.** It isn't — it's a *convention* pinned to a milliamp-ish current. The same diode drops 0.61 V at 0.4 mA and 0.73 V at 43 mA. What's constant is the *insensitivity*, not the value. Power rectifiers running amps are often modelled at 1.0 V.
- **You might confuse $V_{bi}$ with the forward drop.** The built-in potential (0.6–0.8 V) is the equilibrium barrier at zero bias and zero current; the forward drop is what you apply to knock that barrier down. They're numerically similar and conceptually different — and $V_{bi}$ is unmeasurable with a voltmeter, while the forward drop is what your meter reads.
- **You might apply superposition or Thévenin to a circuit "containing a diode."** You can't — those theorems require linearity. What you *can* do is replace the diode with a linear model first (CVD for DC, $r_d$ for small signals) and then use the full linear toolkit on what's left. Model first, theorem second.
- **You might use $r_d$ for a large signal.** $r_d$ is a tangent. It's valid only while $v_d \ll V_T = 25$ mV; push a 200 mV signal into it and the tangent line is nowhere near the curve. Large swings need the CVD or exact model.

## One-liner

> The diode's current is exponential in its voltage, which means its voltage is nearly constant in its current — 60 mV per decade — so a 0.7 V battery models it for DC, a $25\ \text{mV}/I_D$ resistor models it for small signals, and a short models it when you only care about the shape.

## Problems

**P1 (🟢)** A silicon diode is in series with $R = 2.2\ \text{k}\Omega$ across a 10 V supply. (a) Give the two intercepts of the load line. (b) Find $I_D$ with the ideal model and with the constant-voltage-drop model. (c) By what percentage does the ideal model overestimate the CVD answer, and which model would you use to choose the resistor's power rating?

**P2 (🟡)** A silicon diode is biased from a 12 V supply through $R = 5.6\ \text{k}\Omega$. (a) Find the bias current $I_D$ with the CVD model. (b) Find the incremental resistance $r_d$ (take $n=1$, $V_T = 25$ mV). (c) A 10 mV-peak signal is added in series with the 12 V supply. How much of it appears across the diode?

**P3 (🔴)** A diode is measured to carry $I_D = 1$ mA at $V_D = 0.65$ V. Take $n = 1$, $V_T = 25$ mV. (a) Without computing $I_S$, find $V_D$ at 10 mA and at 0.1 mA. (b) You want exactly 10 mA through this diode from a 5 V supply. What series resistor do you need, and what standard value would you fit? (c) What is this diode's $I_S$?

<details>
<summary>Solutions</summary>

**P1**

(a) The load line is $I_D = (10 - V_D)/2200$. Setting $I_D = 0$ gives $V_D = 10$ V; setting $V_D = 0$ gives

$$I_D = \frac{10}{2200} = 4.545\ \text{mA}.$$

So the intercepts are $(10\ \text{V},\,0)$ and $(0,\,4.545\ \text{mA})$, joined by a line of slope $-1/R = -1/(2.2\ \text{k}\Omega)$.

(b) *Ideal:* the diode drops nothing, so $I_D = 10/2200 = 4.545\ \text{mA}$ — the load line's vertical intercept, as it must be, since the ideal model puts the operating point at $V_D = 0$.

*CVD:* the diode eats 0.7 V, leaving 9.3 V on the resistor:

$$I_D = \frac{10 - 0.7}{2200} = \frac{9.3}{2200} = 4.227\ \text{mA}.$$

(c) The overestimate is

$$\frac{4.545 - 4.227}{4.227} = 0.0753 \;\longrightarrow\; 7.5\ \text{percent}.$$

For a power rating, use the ideal model — it's the *conservative* one here, because it predicts the larger current and therefore the larger dissipation $I^2R$. Sizing a component is exactly the kind of question the crudest rung answers well. (Design the bias point with CVD; size the parts with the pessimistic bound.)

*Check.* Iterating the exact Shockley equation with $I_S = 10^{-14}$ A gives $V_D = 0.669$ V and $I_D = 4.241$ mA, so the CVD answer is low by only 0.33 percent — the 0.7 V model is trustworthy here, and the ideal model's 7.5 percent error is the price of skipping a rung. ✓

**P2**

(a) CVD model: the diode holds 0.7 V, so the resistor carries the rest.

$$I_D = \frac{12 - 0.7}{5600} = \frac{11.3}{5600} = 2.018\ \text{mA}.$$

(b) Incremental resistance at that bias:

$$r_d = \frac{nV_T}{I_D} = \frac{25\ \text{mV}}{2.018\ \text{mA}} = 12.39\ \Omega.$$

(c) For the small signal, zero the DC supply and replace the diode by $r_d$; the circuit is a divider of $R$ and $r_d$:

$$v_d = v_s\,\frac{r_d}{R + r_d} = 10\ \text{mV}\times\frac{12.39}{5600 + 12.39} = 10\ \text{mV}\times 2.208\times10^{-3} = 0.0221\ \text{mV} = 22.1\ \mu\text{V}.$$

*Check.* Sanity on magnitudes: $r_d$ is about 450 times smaller than $R$, so the diode should take about $1/450$ of the signal — and $10\ \text{mV}/453 = 22\ \mu\text{V}$ ✓. Sanity on the model's validity: 22 µV is far below $V_T = 25$ mV, so the small-signal (tangent) approximation is comfortably justified. ✓

**P3**

(a) Use the decade rule, $\Delta V_D = V_T\ln 10 = 0.025 \times 2.3026 = 57.6\ \text{mV}$ per factor of ten.

$$V_D(10\ \text{mA}) = 0.650 + 0.0576 = 0.7076\ \text{V}, \qquad V_D(0.1\ \text{mA}) = 0.650 - 0.0576 = 0.5924\ \text{V}.$$

A hundredfold current range spans 115 mV. That's the lesson's headline in one line.

(b) At 10 mA the diode holds 0.7076 V, so the resistor must drop $5 - 0.7076 = 4.2924$ V while carrying 10 mA:

$$R = \frac{4.2924\ \text{V}}{0.010\ \text{A}} = 429.2\ \Omega.$$

The nearest standard E24 value is **430 Ω**. Refit with it: $I_D = 4.2924/430 = 9.98$ mA — within 0.2 percent of target, far tighter than the diode's own part-to-part spread, so there's no point chasing a closer resistor.

(c) Invert the Shockley equation at the measured point:

$$I_S = I_D\,e^{-V_D/(nV_T)} = (1\ \text{mA})\,e^{-0.65/0.025} = 10^{-3}\,e^{-26}.$$

Since $e^{26} = 1.957\times10^{11}$,

$$I_S = \frac{10^{-3}}{1.957\times10^{11}} = 5.11\times10^{-15}\ \text{A} \approx 5\ \text{fA}.$$

*Check.* Run it forward: $I_S e^{0.7076/0.025} = 5.11\times10^{-15} \times e^{28.30}$. With $e^{28.30} = 1.957\times10^{12}$, that's $1.00\times10^{-2}$ A = 10 mA ✓. And 5 fA is squarely in the expected range for a small-signal silicon diode (~$10^{-14}$ A), so the measured data point is physically sensible. ✓

</details>

## Connections

- **Backward:** the depletion region is nothing but [1.1](01-01-semiconductors-carriers-doping.md)'s drift-versus-diffusion competition reaching a stalemate, with the ionized donors and acceptors — the fixed charge that doping leaves behind — supplying the field. The load line is [`circuits` 1.4](../../circuits/lessons/01-04-voltage-current-dividers.md)'s divider logic with one branch made curved, and the small-signal step relies on [superposition](../../circuits/lessons/02-03-superposition-source-transformation.md), which only becomes legal *after* you linearize.
- **Forward:** [1.3](01-03-rectifiers-power-supplies.md) and [1.4](01-04-clippers-clampers-zener.md) run almost entirely on the CVD model — every "0.7 V per conducting diode" you'll write there is licensed by the 60 mV rule proved here. Reverse breakdown becomes the Zener regulator in [1.4](01-04-clippers-clampers-zener.md).
- **Sideways (the recurring method):** bias with DC, then differentiate to linearize about the operating point. $r_d = V_T/I_D$ here becomes $g_m = I_C/V_T$ for the BJT in [2.3](02-03-bjt-small-signal-amplifiers.md) and $g_m = 2I_D/V_{ov}$ for the MOSFET in [2.5](02-05-mosfet-biasing-common-source.md) — the same derivative, different device law. And for the physics under the I–V curve you'll find the full junction derivation in [`condensed-matter` 4.5](../../condensed-matter/lessons/04-05-pn-junction.md), with the device-engineering view in [semiconductor-devices](../../semiconductor-devices/syllabus.md).
