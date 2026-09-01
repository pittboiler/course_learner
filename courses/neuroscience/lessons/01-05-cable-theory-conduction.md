# Neuroscience · Lesson 1.5: Cable theory and conduction

> ⏱ ~15 min · Module 1: The neuron & the action potential · Builds on: [1.4](01-04-hodgkin-huxley-model.md), [1.1](01-01-neuron-as-a-device.md) · Unlocks: 2.3 (synaptic integration)

## Why this matters

[1.4](01-04-hodgkin-huxley-model.md) gave you a complete theory of the action potential **at a point**. Hodgkin and Huxley's equations describe one patch of membrane, space-clamped, with no spatial extent at all. But a neuron is not a point. A motor neuron's soma sits in your spinal cord and its axon terminal sits in your foot, a metre away. A cortical pyramidal cell's dendritic tree is a centimetre of branching cable, and a synapse 400 µm out on an apical dendrite has to make itself felt at an axon hillock it cannot see.

So the real question is not "what does a patch of membrane do?" but **"what does a voltage do when it has somewhere to go?"** That is a field problem, not a circuit problem — $V$ depends on $x$ as well as $t$, and the governing equation is a **partial** differential equation. This lesson derives it.

Two constants fall out, and they are the two numbers Module 2 runs on. The **length constant** $\lambda$ says how far a synaptic input is still worth anything; the **time constant** $\tau$ says how long it is still worth anything. Spatial and temporal summation ([2.3](02-03-synaptic-integration.md)) are exactly the statement that a neuron adds up whatever lands inside $\lambda$ and $\tau$. And the same two constants explain, quantitatively, why every fast axon in your body is either enormous or wrapped in fat.

## The idea

**Take a length of axon and ask what a charge does when you push it in.**

The inside of the fibre is a thin column of salty cytoplasm — a poor wire, but a wire. The membrane is a leaky insulator wrapped around it: a resistor (channels) in parallel with a capacitor (the bilayer) at every point. The outside is a large, well-connected bath we can treat as a single ground node.

Now inject current at one spot. **The charge has exactly two options, and it takes both:**

1. **Flow down the core** to the neighbouring patch, fighting the axial resistance of the cytoplasm.
2. **Leak out across the membrane**, through open channels and onto the membrane capacitance.

Every micron it travels, some of it is lost to option 2. **The entire theory is the bookkeeping of that competition** — and the length constant is nothing more than the distance at which the leak has won.

This gives you the two scaling intuitions before any algebra:

- **Fatter is better for reach.** The core's conductance grows with cross-sectional area ($\propto a^2$), while the leak grows with circumference ($\propto a$). Fatten the fibre and the core gains faster than the leak. Reach must increase with radius — and since the competition is between an $a^2$ and an $a$, it will turn out to increase as $\sqrt{a}$.
- **Fatter does nothing for timing.** The leak resistance and the capacitance are both properties of a *unit area* of membrane, and they scale with area identically. Charging time cannot care about size at all.

Those two sentences are the lesson. Everything below is making them exact.

## The formal version

### Setting up the ladder

Let $V(x,t)$ be the membrane potential **measured as a deviation from rest** (so $V=0$ is rest), $x$ the distance along the fibre in cm, $t$ in s. Take a cylinder of radius $a$ (cm). Three *specific* material constants, all measured per unit area or per unit length of material:

| Symbol | Name | Units | Typical value |
|---|---|---|---|
| $R_i$ | intracellular resistivity | $\Omega\,\text{cm}$ | $100$ |
| $R_m$ | specific membrane resistance | $\Omega\,\text{cm}^2$ | $10^{4}$ |
| $C_m$ | specific membrane capacitance | $\text{F}/\text{cm}^2$ | $10^{-6}$ (i.e. 1 µF/cm²) |

**Assumed values are stated so every number below can be checked.** $C_m \approx 1$ µF/cm² is close to universal — it is set by the thickness of the lipid bilayer, about 4 nm, and nothing else ([biophysics 3.5](../../biophysics/lessons/03-05-membrane-mechanics.md)). $R_m$ varies over orders of magnitude between cells and states, since it is just "how many leak channels are open."

Convert each to a *per unit length of cable* quantity:

$$r_i = \frac{R_i}{\pi a^{2}} \;\left[\tfrac{\Omega}{\text{cm}}\right], \qquad r_m = \frac{R_m}{2\pi a}\;\left[\Omega\,\text{cm}\right], \qquad c_m = 2\pi a\,C_m \;\left[\tfrac{\text{F}}{\text{cm}}\right]$$

*In words: the core resistance per unit length rises as you thin the fibre (it goes as one over the cross-section), while the membrane resistance per unit length falls and the capacitance per unit length rises as you fatten it (both go with the circumference).* Note the opposite $a$-dependence of $r_i$ and $r_m$ — that asymmetry is the whole result.

### Three equations, one PDE

Let $I_i(x,t)$ be the axial current inside the fibre, positive in the $+x$ direction, and $i_m(x,t)$ the membrane current per unit length, positive **outward**.

**(i) Ohm's law along the core.** Voltage falls in the direction current flows:

$$\frac{\partial V}{\partial x} = -\,r_i I_i$$

**(ii) Charge conservation (KCL for a continuum).** Whatever axial current disappears between $x$ and $x+\Delta x$ must have gone out through the membrane:

$$\frac{\partial I_i}{\partial x} = -\,i_m$$

**(iii) What the membrane does with it.** A resistor and a capacitor in parallel:

$$i_m = c_m\frac{\partial V}{\partial t} + \frac{V}{r_m}$$

Differentiate (i) with respect to $x$, substitute (ii), then (iii):

$$\frac{\partial^{2} V}{\partial x^{2}} = -r_i\frac{\partial I_i}{\partial x} = r_i\,i_m = r_i c_m \frac{\partial V}{\partial t} + \frac{r_i}{r_m}V$$

Multiply through by $r_m/r_i$ and name the two groupings that appear:

$$\boxed{\;\lambda^{2}\frac{\partial^{2} V}{\partial x^{2}} = \tau\frac{\partial V}{\partial t} + V\;}\qquad \lambda \equiv \sqrt{\frac{r_m}{r_i}},\qquad \tau \equiv r_m c_m$$

**This is the cable equation.** *In words: the curvature of the voltage profile in space supplies the current that both charges the membrane and pays for the leak.* $\lambda$ has units of length and $\tau$ of time, and dividing through shows they are **the natural units of the problem** — measure $x$ in units of $\lambda$ and $t$ in units of $\tau$ and every constant vanishes:

$$\frac{\partial^{2} \hat V}{\partial \hat x^{2}} = \frac{\partial \hat V}{\partial \hat t} + \hat V$$

**Every passive cable in biology is the same cable.** All that differs is the ruler and the clock.

### It is a diffusion equation

Rearrange the boxed equation:

$$\frac{\partial V}{\partial t} = D\,\frac{\partial^{2} V}{\partial x^{2}} - \frac{V}{\tau},\qquad D \equiv \frac{\lambda^{2}}{\tau} = \frac{1}{r_i c_m} = \frac{a}{2R_i C_m}$$

**This is the heat/diffusion equation with a first-order sink** ([pdes 2.1](../../pdes/lessons/02-01-heat-diffusion-equations.md), [biophysics 1.3](../../biophysics/lessons/01-03-diffusion-ficks-laws.md)). And the sink is only a multiplicative envelope: substituting $V = U(x,t)\,e^{-t/\tau}$ gives

$$\frac{\partial U}{\partial t} = D\frac{\partial^{2} U}{\partial x^{2}}$$

**exactly** the heat equation, so the Green's function of a cable is the Gaussian heat kernel ([pdes 4.2](../../pdes/lessons/04-02-heat-equation-line-heat-kernel.md)) multiplied by $e^{-t/\tau}$. **Voltage does not propagate down a passive cable; it diffuses.** That is not an analogy — it is the same equation, and it carries the same brutal consequence: diffusive spread covers distance as $\sqrt{Dt}$, so **the time to reach a target grows as the square of the distance.** Hold onto that; it is what kills passive conduction.

Note also what $D$ contains: $R_i$, $C_m$, and $a$ — and **not $R_m$**. The speed of passive spread is set by the capacitance you must charge and the resistance you must charge it through. The leak sets how far the signal survives, not how fast it moves. Most treatments of myelin blur these; keep them apart.

### The length constant

At steady state $\partial V/\partial t = 0$, and the PDE collapses to $\lambda^2 V'' = V$. On an infinite cable with current injected at the origin, the solution that stays finite is

$$\boxed{\;V(x) = V_0\,e^{-|x|/\lambda}\;}$$

*In words: the steady voltage falls off exponentially, and $\lambda$ is the distance over which it drops to $1/e \approx 37$ percent of its value at the injection site.* Substituting the per-unit-length definitions:

$$\boxed{\;\lambda = \sqrt{\frac{r_m}{r_i}} = \sqrt{\frac{R_m/2\pi a}{R_i/\pi a^{2}}} = \sqrt{\frac{a R_m}{2R_i}}\;}$$

$$\textbf{The length constant grows as the square root of the radius: } \lambda \propto \sqrt{a}.$$

**This is the fact everything downstream follows from.** With the values in the table above, a 1 µm-diameter fibre ($a = 0.5\times10^{-4}$ cm):

$$\lambda = \sqrt{\frac{(0.5\times10^{-4}\,\text{cm})(10^{4}\,\Omega\,\text{cm}^{2})}{2(100\,\Omega\,\text{cm})}} = \sqrt{2.5\times10^{-3}\,\text{cm}^{2}} = 0.05\ \text{cm} = \mathbf{0.5\ mm}$$

Ten times the diameter gives $\lambda = 1.58$ mm — a factor of $\sqrt{10}=3.2$, not 10.

One consequence worth carrying to [2.3](02-03-synaptic-integration.md): the **input resistance** seen by a current injected into an infinite cable is $R_{\text{in}} = \tfrac{1}{2} r_i \lambda = \tfrac12\sqrt{r_i r_m} \propto a^{-3/2}$. For that same 1 µm fibre, $r_i = 1.27\times10^{10}\ \Omega/\text{cm}$ and $R_{\text{in}} = 318\ \text{M}\Omega$. **Thin processes are electrically loud** — the same synaptic current makes a far bigger local voltage on a fine dendrite or a spine neck than on a trunk.

### The time constant

$$\boxed{\;\tau = r_m c_m = \frac{R_m}{2\pi a}\cdot 2\pi a C_m = R_m C_m\;}$$

The radius cancels **exactly**. With the table values, $\tau = (10^{4}\,\Omega\,\text{cm}^{2})(10^{-6}\,\text{F}/\text{cm}^{2}) = 10^{-2}\ \text{s} = \mathbf{10\ ms}$.

$$\textbf{Side by side: } \quad \lambda \propto \sqrt{a}\,, \qquad \tau \ \text{is independent of } a.$$

**This pairing is genuinely non-obvious and is worth memorising as a pair.** Geometry buys you *reach* and cannot buy you *speed of charging*; only the material constants $R_m$ and $C_m$ touch $\tau$. It is the same reason a big soma and a small soma have the same time constant: doubling the area doubles the capacitance and halves the input resistance, and $\tau = R_{\text{in}}C$ is untouched (see the Flashback).

## Picture

![Three panels. The top panel draws the cable as a ladder circuit: a horizontal core line broken by axial resistances, with a resistor-and-capacitor branch running from each node down to a common ground bus representing the extracellular space, and arrows showing that current injected at one node either continues down the core or leaks out across the membrane. The middle panel plots steady-state voltage against distance from the injection site for a one-micron fibre and a ten-micron fibre; both decay exponentially, the thin one reaching thirty-seven percent at 0.50 mm and the thick one at 1.58 mm, illustrating that ten times the diameter buys only 3.2 times the reach. The bottom panel shows a myelinated axon with four internodes and five nodes of Ranvier: the spike amplitude decays only slightly across each internode and is restored to full height at every node, while a dashed curve shows the same signal in an unmyelinated fibre dying out within half a millimetre.](assets/01-05-fig1.svg)

## Worked examples

### Example 1 — passive spread is not merely lossy; it is hopeless

Take an unmyelinated C fibre, 1 µm in diameter, with the assumed constants: $\lambda = 0.5$ mm, $\tau = 10$ ms, $D = a/(2R_iC_m) = 0.25\ \text{cm}^2/\text{s}$.

**(a) How far does a 100 mV spike spread before it is down to 1 mV?**

$$e^{-x/\lambda} = 0.01 \;\Longrightarrow\; x = \lambda\ln 100 = (0.5\ \text{mm})(4.605) = \mathbf{2.3\ mm}$$

**(b) What arrives at the far end of a 1 m axon?**

$$\frac{x}{\lambda} = \frac{1000\ \text{mm}}{0.5\ \text{mm}} = 2000,\qquad e^{-2000} = 10^{-869}$$

A 100 mV spike arrives as roughly $10^{-867}$ mV. For scale, there are about $10^{80}$ particles in the observable universe. **The signal is not attenuated; it is annihilated.** Even 1 cm out, $e^{-20} = 2\times10^{-9}$, and 100 mV has become 0.2 nanovolts.

**(c) Now delete the leak entirely and see whether that saves it.** Suppose the membrane were a perfect insulator, so $R_m \to \infty$ and $\lambda \to \infty$: no attenuation at all. The cable is still a diffusion problem, because you must still charge $C_m$ through $R_i$. Diffusive spread over distance $L$ takes

$$t \sim \frac{L^{2}}{D} = \frac{(100\ \text{cm})^{2}}{0.25\ \text{cm}^{2}/\text{s}} = 4\times10^{4}\ \text{s} = \mathbf{11\ hours}$$

**A perfectly insulated axon a metre long would still take half a day to deliver a signal**, because the $L^2$ of diffusion is unforgiving. This is the deepest reason regeneration is not an optimisation but a necessity: **an active axon converts an $L^2$ law into an $L^1$ law**, since each node restarts the clock. That conversion — from diffusive to propagating — is what the Hodgkin–Huxley nonlinearity buys you, and it is the same trick a burning fuse uses.

### Example 2 — the price of speed, and why myelin changes the exchange rate

**(a) Why velocity goes as $\sqrt{d}$ in an unmyelinated fibre.** Write the cable equation in current-per-unit-**area** form (divide the boxed equation through by $2\pi a\,r_m$ and keep the full nonlinear ionic current from [1.4](01-04-hodgkin-huxley-model.md)):

$$\frac{a}{2R_i}\frac{\partial^{2} V}{\partial x^{2}} = C_m\frac{\partial V}{\partial t} + i_{\text{ion}}(V,m,h,n)$$

Now assume a spike travels at constant velocity $\theta$ without changing shape: $V(x,t) = f(x - \theta t)$. Then $\partial^2 V/\partial x^2 = \theta^{-2}\,\partial^2 V/\partial t^2$, and

$$\frac{a}{2R_i\theta^{2}}\frac{\partial^{2} V}{\partial t^{2}} = C_m\frac{\partial V}{\partial t} + i_{\text{ion}}$$

**Every term on the right involves only voltage and time** — channel kinetics and specific capacitance, which are the same for a thin fibre and a fat one. So the time course $V(t)$ recorded at a fixed point is identical across fibres **if and only if** the prefactor is:

$$\frac{a}{2R_i\theta^{2}} = \text{const} \quad\Longrightarrow\quad \boxed{\;\theta = K\sqrt{\frac{a}{2R_i}}\;\propto\;\sqrt{d}\;}$$

with $K$ set by the channel kinetics alone. Intuitively: velocity is how fast local circuit current from the active region charges the membrane *ahead* to threshold, i.e. $\theta \sim \lambda/\tau = D/\lambda$, and $\lambda \propto \sqrt a$.

**(b) The bill.** The squid giant axon is about 500 µm across and conducts at a measured ~21 m/s. Scaling from that single calibration point:

| $d$ (µm) | predicted $\theta$ (m/s) | reality check |
|---|---|---|
| 1 | 0.94 | unmyelinated C fibres: 0.5–2 m/s ✓ |
| 10 | 3.0 | |
| 100 | 9.4 | |
| **16,300** | **120** | a myelinated 20 µm fibre also does 120 |

Since $\theta \propto \sqrt d$, we have $d \propto \theta^{2}$ and cross-sectional area $\propto d^{2} \propto \theta^{4}$. **A tenfold speed-up costs a hundredfold in diameter and ten-thousandfold in cross-section.** To hit 120 m/s without myelin you would need an axon **16 mm thick** — one axon, thicker than your optic nerve. Human corpus callosum, roughly $2\times10^{8}$ axons: build them all that way and its cross-section is about **4 hectares**. The squid, which needs one fast escape axon and only one, can afford the deal. A brain cannot.

**(c) Myelin changes both terms, and the second one is the one people forget.** Wrapping $n \approx 200$ membrane layers around the axon puts $n$ membranes in series: resistances add, capacitances add reciprocally.

$$R_m^{\text{myel}} = n R_m = 2\times10^{6}\ \Omega\,\text{cm}^{2}, \qquad C_m^{\text{myel}} = \frac{C_m}{n} = 0.005\ \mu\text{F}/\text{cm}^{2}$$

Take an axon of radius 3 µm inside the sheath:

$$\lambda = \sqrt{\frac{aR_m^{\text{myel}}}{2R_i}} = \sqrt{\frac{(3\times10^{-4})(2\times10^{6})}{200}} = \sqrt{3} = 1.73\ \text{cm}$$

$$D = \frac{a}{2R_i C_m^{\text{myel}}} = \frac{3\times10^{-4}}{2(100)(5\times10^{-9})} = 300\ \text{cm}^{2}/\text{s}$$

Against $\lambda = 0.5$ mm and $D = 0.25\ \text{cm}^2/\text{s}$ for the bare 1 µm fibre: **35 times the reach and 1200 times the diffusivity.** The reach came from $R_m$; **the diffusivity came almost entirely from $C_m$, since $D$ contains no $R_m$ at all.** Halving the capacitance halves the charge you must shovel to swing the voltage, and that is a direct, linear speed-up. Say it plainly: **the capacitance reduction is at least as important as the insulation, and it is the half most treatments omit.**

Notice what myelin does *not* change: $\tau^{\text{myel}} = R_m^{\text{myel}}C_m^{\text{myel}} = nR_m \cdot C_m/n = R_mC_m$, unchanged at 10 ms. That is a warning about which time constant matters. $\tau$ is the *leak* time constant, and in a myelinated internode the leak is irrelevant; the time that governs conduction is the axial charging time $\sim L^2/D$.

### Saltatory conduction and the optimal internode

Nodes of Ranvier are ~1 µm gaps in the sheath, spaced $L \approx 1$ mm apart, packed with voltage-gated $\text{Na}^{+}$ channels at ~1000 times the density of the internode. The spike is **regenerated at each node and glides passively between them** — "saltatory," from *saltare*, to leap.

**Does the signal survive the internode?** With $L = 0.1$ cm and $\lambda = 1.73$ cm, $L/\lambda = 0.058$ and $e^{-0.058} = 0.94$: about a 6 percent loss, a comfortable safety margin. (This steady-state figure is optimistic — the real spike is a sub-millisecond transient and the next node's capacitance loads the line — but it shows why $L \ll \lambda$ is the design requirement.)

**How long does the internode take?** $t_{\text{int}} \sim L^{2}/D = (0.1)^{2}/300 = 33$ µs, comfortably inside a ~0.5 ms spike.

**Why $L$ is an optimised quantity.** Let $t_n$ be the fixed delay to regenerate the spike at a node (tens of µs). Then

$$\theta = \frac{L}{t_n + L^{2}/D}$$

Longer internodes mean fewer node delays per millimetre — but also more passive time and more attenuation. Maximise: $\mathrm{d}\theta/\mathrm{d}L = 0$ gives $t_n = L^{2}/D$, i.e.

$$\boxed{\;L^{*} = \sqrt{D\,t_n}\;}$$

**The optimum is where internode transit time equals node delay.** With $D = 300\ \text{cm}^2/\text{s}$ and $t_n = 20$ µs, $L^* = 0.77$ mm — against a measured ~1 mm for a fibre this size. (The predicted $\theta_{\max} = L^*/2t_n \approx 19$ m/s undershoots the real ~60 m/s by about threefold, because threshold at the next node is reached long before the internode is *fully* charged. The scale is right; the constant is crude.)

**And now the linear scaling.** Myelin thickness tracks axon diameter — the $g$-ratio (axon diameter / outer diameter) is held near 0.6–0.7 — so the number of wraps $n \propto d$. Then:

$$\lambda \propto \sqrt{a\,R_m^{\text{myel}}} \propto \sqrt{d \cdot n} \propto d, \qquad D = \frac{a\,n}{2R_iC_m} \propto d^{2}$$

$$L^{*} = \sqrt{Dt_n} \propto d \qquad\Longrightarrow\qquad \boxed{\;\theta = \frac{L^{*}}{2t_n} \propto d\;}$$

**Myelinated conduction velocity grows linearly with diameter**, not as its square root — the empirical rule is $\theta \approx 6d$ with $\theta$ in m/s and $d$ in µm, so a 20 µm fibre does 120 m/s. Restated as the cost of speed: **myelin turns a quartic area-versus-velocity law into a quadratic one.** Everything about vertebrate white matter follows from that exchange rate.

### Demyelination — the natural experiment

Strip the sheath (multiple sclerosis, Guillain–Barré) and both terms reverse. At 5 remaining layers on the same axon:

$$\lambda = \sqrt{\frac{(3\times10^{-4})(5\times10^{4})}{200}} = 0.27\ \text{cm}, \qquad D = \frac{3\times10^{-4}}{2(100)(2\times10^{-7})} = 7.5\ \text{cm}^{2}/\text{s}$$

$\lambda$ has fallen 6-fold and $D$ 40-fold. Two things go wrong, in this order:

- **Slowing.** $t_{\text{int}} = L^2/D = (0.1)^2/7.5 = 1.3$ ms — now *longer* than the spike that is supposed to drive it. The nodes are still 1 mm apart (the anatomy did not move), but the charge no longer arrives in time.
- **Block.** Attenuation across the internode goes from 6 percent to 31 percent by the steady-state estimate, and far worse for a transient. When the depolarisation reaching the next node drops below its threshold, the safety factor falls under 1 and **conduction fails completely**. Nothing partial happens: the axon is silent.

**Why failure is frequency-dependent — and this is the clinically distinctive part.** After each spike, the nodal $\text{Na}^{+}$ channels need time for $h$ to recover from inactivation ([1.4](01-04-hodgkin-huxley-model.md)) and the node is left slightly depolarised with $\text{K}^{+}$ accumulated outside. A fibre with a safety factor of 6 does not notice. A fibre scraped down to a safety factor of 1.2 conducts the first spike and fails on the third. So the patient conducts a single test volley fine and **fails on sustained use** — the fatigue that dominates the clinical picture. The same marginality explains Uhthoff's phenomenon: warming shortens the spike, which delivers less charge to the next node, so symptoms worsen in a hot bath.

**The system-level reading.** White matter is a bandwidth-versus-volume optimisation. Every axon's diameter is a purchase of latency at a price in skull volume, metabolic upkeep, and developmental time — and with $\theta \propto d$, doubling speed doubles diameter and quadruples cross-section. The observed distribution — a few fat, fast fibres for time-critical channels and a very long tail of thin, slow ones — is what a constrained optimiser produces when only some messages need to be fast.

## Watch out

- **You might read $\lambda$ as "how far the signal goes."** It doesn't go a distance; it decays exponentially and never quite stops. $\lambda$ is where it hits 37 percent. "How far it goes" depends entirely on how small a voltage you still care about — 2.3 mm to fall to 1 percent, 4.6 mm to 0.01 percent.
- **You might expect a bigger cell to be slower.** $\tau = R_mC_m$ contains no geometry whatsoever. A giant motor neuron and a tiny granule cell with the same membrane have the same time constant: area doubles the capacitance and halves the input resistance, and the product is fixed.
- **You might explain myelin as "insulation so the current doesn't leak out."** That is half of it, and not the half that makes it fast. $D = a/(2R_iC_m)$ has no $R_m$ in it: **the resistance increase buys reach, the capacitance decrease buys speed.** A hypothetical sheath that blocked leak without lowering capacitance would extend $\lambda$ and barely change velocity.
- **You might use the steady-state exponential to judge whether a spike makes it across an internode.** A spike is a transient; the honest comparison is $L$ against $\sqrt{D\,t_{\text{spike}}}$. The steady-state figure is an optimistic bound, which is exactly why a demyelinated axon can block while the naive calculation says it should still conduct.
- **You might treat the cable equation as a circuit problem.** The ladder is a discretisation; the object is a PDE, and specifically a diffusion equation. This is why "how long to get there" scales as distance squared and not distance — the single most important structural fact in the lesson.
- **Sign convention traps.** $\partial V/\partial x = -r_iI_i$ (voltage drops along the direction of flow) and $i_m$ counted **outward positive**. Flip either and you get a growing exponential, which is a good sign you flipped one.

## One-liner

> Current entering a fibre either runs down the core or leaks across the membrane, and $\lambda = \sqrt{aR_m/2R_i}$ marks where the leak wins while $\tau = R_mC_m$ marks how long it lingers — so reach grows only as $\sqrt{a}$ and timing not at all, passive spread is a diffusion problem whose delay grows as distance squared, and myelin's real trick is cutting capacitance as hard as it raises resistance, turning a quartic price for speed into a linear one.

## Problems

**P1 (🟢, feeds forward into 2.3)** A cortical dendrite is 2 µm in diameter with $R_m = 2\times10^{4}\ \Omega\,\text{cm}^{2}$, $R_i = 80\ \Omega\,\text{cm}$, $C_m = 0.9\ \mu\text{F}/\text{cm}^{2}$. (a) Compute $\lambda$ and $\tau$. (b) A synapse 400 µm out produces a steady local depolarisation of 5 mV. How much of it reaches the soma? (c) A sister dendrite is 8 µm in diameter. Give its $\lambda$ and $\tau$. (d) In one sentence each, say which of the two constants sets the *spatial* summation window and which sets the *temporal* one.

**P2 (🟡)** A pain-carrying C fibre is 1 µm in diameter with the lesson's standard constants ($\lambda = 0.5$ mm, $\tau = 10$ ms, $D = 0.25\ \text{cm}^{2}/\text{s}$), and runs 80 cm from your toe to your spinal cord. (a) Passively, what fraction of a spike would survive the trip? (b) Now suppose evolution gave it a perfect insulator — no leak at all — but left everything else alone. Estimate the delivery time and compare it to the ~1 s the real fibre takes. (c) In two sentences, state what regeneration at intervals actually buys, in terms of how delay scales with length.

**P3 (🔴, optional)** A myelinated axon has an inner radius $a = 3$ µm, 200 myelin layers, internode $L = 1$ mm, $R_i = 100\ \Omega\,\text{cm}$, and base membrane constants $R_m = 10^{4}\ \Omega\,\text{cm}^{2}$, $C_m = 1\ \mu\text{F}/\text{cm}^{2}$. A node fires a 100 mV spike lasting 0.4 ms and the next node needs 15 mV to reach threshold. (a) Compute $\lambda$, $D$, the steady-state attenuation across one internode, the safety factor, and the internodal charging time; confirm the spike is long enough. (b) Disease strips the sheath to 20 layers. Recompute all five. (c) State which of the two failures — slowing or block — the numbers predict first, and explain in two sentences why a patient with these axons might pass a single-stimulus nerve conduction test and still be unable to sustain a grip.

<details>
<summary>Solutions</summary>

**P1 (a)** $a = 1\ \mu\text{m} = 10^{-4}$ cm.

$$\lambda = \sqrt{\frac{aR_m}{2R_i}} = \sqrt{\frac{(10^{-4})(2\times10^{4})}{2(80)}} = \sqrt{\frac{2}{160}} = \sqrt{1.25\times10^{-2}} = 0.1118\ \text{cm} = \mathbf{1.12\ mm}$$

$$\tau = R_mC_m = (2\times10^{4})(0.9\times10^{-6}) = 1.8\times10^{-2}\ \text{s} = \mathbf{18\ ms}$$

**(b)** $x = 400\ \mu\text{m} = 0.4$ mm, so $x/\lambda = 0.4/1.118 = 0.358$:

$$V_{\text{soma}} = 5\,e^{-0.358} = 5(0.699) = \mathbf{3.5\ mV}$$

About 30 percent is lost — survivable, which is why distal synapses are worth having. (A real dendrite does worse: it tapers, it branches, and every branch point is a current sink.)

**(c)** Four times the diameter, so $\lambda$ doubles: $\lambda = 2.24$ mm. $\tau$ is **unchanged at 18 ms** — geometry cannot touch it.

**(d)** $\lambda$ sets **spatial** summation: two synapses cooperate to the extent that each is still large where the other is, i.e. if they sit within a length constant of each other and of the trigger zone. $\tau$ sets **temporal** summation: two inputs cooperate if they arrive within a time constant, since an EPSP decays as $e^{-t/\tau}$. Both reappear as the governing quantities in [2.3](02-03-synaptic-integration.md).

**P2 (a)** $x/\lambda = 800\ \text{mm} / 0.5\ \text{mm} = 1600$:

$$e^{-1600} = 10^{-1600/2.303} = 10^{-695}$$

**Nothing survives** — the number is not physically meaningful, it is just zero. Even the first centimetre costs a factor of $e^{-20} = 2\times10^{-9}$.

**(b)** With no leak the cable is pure diffusion with $D = 0.25\ \text{cm}^{2}/\text{s}$ and $L = 80$ cm:

$$t \sim \frac{L^{2}}{D} = \frac{6400}{0.25} = 2.56\times10^{4}\ \text{s} \approx \mathbf{7\ hours}$$

versus about 1 second for the real fibre. **A perfect insulator is not enough**, because charging the capacitance through the axial resistance is itself a diffusion problem.

**(c)** Diffusion gives delay $\propto L^{2}$; regeneration every $\ell$ makes the delay $(L/\ell)\times(\text{fixed cost per segment})$, i.e. $\propto L$. **Regeneration converts a quadratic delay law into a linear one, and simultaneously resets the amplitude so the exponential attenuation never accumulates.** Those are two distinct wins from the same mechanism, and long-distance signalling requires both.

**P3 (a)** With $n = 200$: $R_m^{\text{eff}} = 2\times10^{6}\ \Omega\,\text{cm}^{2}$, $C_m^{\text{eff}} = 5\times10^{-9}\ \text{F}/\text{cm}^{2}$.

$$\lambda = \sqrt{\frac{(3\times10^{-4})(2\times10^{6})}{2(100)}} = \sqrt{3} = 1.73\ \text{cm}$$

$$D = \frac{a}{2R_iC_m^{\text{eff}}} = \frac{3\times10^{-4}}{2(100)(5\times10^{-9})} = \mathbf{300\ \text{cm}^{2}/\text{s}}$$

$$\frac{L}{\lambda} = \frac{0.1}{1.732} = 0.0577 \;\Longrightarrow\; e^{-0.0577} = 0.944$$

So 100 mV arrives as **94 mV**, and

$$\text{safety factor} = \frac{94\ \text{mV}}{15\ \text{mV}} = \mathbf{6.3}$$

$$t_{\text{int}} \sim \frac{L^{2}}{D} = \frac{10^{-2}}{300} = 3.3\times10^{-5}\ \text{s} = \mathbf{33\ \mu\text{s}}$$

against a 0.4 ms spike: the internode charges in under a tenth of the spike's duration. **Comfortable on both counts.**

**(b)** With $n = 20$: $R_m^{\text{eff}} = 2\times10^{5}\ \Omega\,\text{cm}^{2}$, $C_m^{\text{eff}} = 5\times10^{-8}\ \text{F}/\text{cm}^{2}$.

$$\lambda = \sqrt{\frac{(3\times10^{-4})(2\times10^{5})}{200}} = \sqrt{0.3} = 0.548\ \text{cm}$$

$$D = \frac{3\times10^{-4}}{2(100)(5\times10^{-8})} = \mathbf{30\ \text{cm}^{2}/\text{s}}$$

$$\frac{L}{\lambda} = \frac{0.1}{0.548} = 0.1826 \;\Longrightarrow\; e^{-0.1826} = 0.833$$

83 mV arrives; safety factor $= 83/15 = \mathbf{5.5}$.

$$t_{\text{int}} \sim \frac{10^{-2}}{30} = 3.3\times10^{-4}\ \text{s} = \mathbf{330\ \mu\text{s}}$$

**(c) Slowing comes first, and by a wide margin.** The steady-state safety factor barely moved (6.3 → 5.5, because $\lambda$ falls only as $\sqrt{n}$ and $L$ was far below $\lambda$ to begin with), while the charging time rose tenfold — because $D \propto 1/C_m$ falls **linearly** in $n$. The internode now needs 330 µs against a 0.4 ms spike: the drive barely outlasts the charging, so conduction is both slow and, on the transient rather than the steady-state estimate, marginal. Push the stripping a little further and the charging time exceeds the spike duration; charge delivery becomes incomplete, the arriving depolarisation drops under 15 mV, and **block** follows.

Why a single-shock test can look normal while function fails: one volley on a marginal fibre still gets across, so a nerve conduction study shows slowed but present conduction. In a sustained grip the fibre must fire 20–50 times a second, and after each spike the nodal $\text{Na}^{+}$ channels are still partly inactivated ($h$ has not fully recovered — [1.4](01-04-hodgkin-huxley-model.md)) while the node sits slightly depolarised, so the regenerated spike is smaller each time. **A safety factor near 1 fails on the second or third spike of the train**, and the grip releases even though the first contraction was normal.

</details>

## Flashback

**From Lesson 1.1 (the neuron as a device):** A spherical soma is 20 µm in diameter with specific capacitance $C_m = 1\ \mu\text{F}/\text{cm}^{2}$, specific membrane resistance $R_m = 10^{4}\ \Omega\,\text{cm}^{2}$, and an internal $\text{K}^{+}$ concentration of 140 mM. (a) Compute its total capacitance and its input resistance. (b) How many $\text{K}^{+}$ ions must cross the membrane to depolarise it by 100 mV, and what fraction of the cell's $\text{K}^{+}$ is that? (c) Compute $\tau = R_{\text{in}}C$ and say what happens to it if the soma is 40 µm across instead.

<details>
<summary>Solution</summary>

**(a)** Radius $r = 10\ \mu\text{m} = 10^{-3}$ cm.

$$A = 4\pi r^{2} = 4\pi(10^{-3})^{2} = 1.257\times10^{-5}\ \text{cm}^{2}$$

$$C = C_m A = (10^{-6})(1.257\times10^{-5}) = 1.26\times10^{-11}\ \text{F} = \mathbf{12.6\ pF}$$

$$R_{\text{in}} = \frac{R_m}{A} = \frac{10^{4}}{1.257\times10^{-5}} = 7.96\times10^{8}\ \Omega = \mathbf{796\ M}\boldsymbol{\Omega}$$

**(b)** $$Q = C\,\Delta V = (1.26\times10^{-11}\,\text{F})(0.1\ \text{V}) = 1.26\times10^{-12}\ \text{C}$$

$$N = \frac{Q}{e} = \frac{1.26\times10^{-12}}{1.602\times10^{-19}} = \mathbf{7.8\times10^{6}\ \text{ions}}$$

Cell volume $= \tfrac43\pi r^{3} = 4.19\times10^{-9}\ \text{cm}^{3} = 4.19\times10^{-12}$ L, so the $\text{K}^{+}$ content is

$$(0.140\ \text{mol/L})(4.19\times10^{-12}\ \text{L})(6.022\times10^{23}) = 3.5\times10^{11}\ \text{ions}$$

$$\text{fraction} = \frac{7.8\times10^{6}}{3.5\times10^{11}} = 2.2\times10^{-5} \approx \textbf{1 part in 45,000}$$

**A spike moves a rounding error's worth of ions.** The concentration gradients are effectively untouched by an action potential — which is why a neuron can fire for hours before pump activity matters, and why treating the Nernst potentials as constants during a spike ([1.2](01-02-resting-membrane-potential.md)) is legitimate.

**(c)** $$\tau = R_{\text{in}}C = (7.96\times10^{8})(1.26\times10^{-11}) = 1.0\times10^{-2}\ \text{s} = \mathbf{10\ ms}$$

Double the diameter and the area quadruples: $C$ quadruples to 50 pF, $R_{\text{in}}$ falls fourfold to 199 MΩ, and $\tau$ is **unchanged at 10 ms**. Of course — $\tau = (R_m/A)(C_mA) = R_mC_m$, and the area cancels. **This is the same cancellation that makes the cable's time constant independent of fibre radius**, met here in its simplest form.

</details>

## Connections

- **Backward:** [1.4](01-04-hodgkin-huxley-model.md) gave $i_{\text{ion}}(V,m,h,n)$ for a single space-clamped patch; this lesson supplies the $\lambda^2\partial_x^2V$ term that turns it into a travelling wave, and the full HH cable PDE is just the two glued together. [1.1](01-01-neuron-as-a-device.md)'s "membrane as a capacitor" becomes $c_m$; [1.2](01-02-resting-membrane-potential.md)'s open leak channels become $r_m$. The ladder circuit itself is the distributed version of the RC transient in [circuits 3.2](../../circuits/lessons/03-02-first-order-rc-rl-transients.md).
- **Forward:** [2.3](02-03-synaptic-integration.md) is this lesson applied to dendrites — $\lambda$ is the spatial summation window, $\tau$ the temporal one, and $R_{\text{in}}\propto a^{-3/2}$ is why thin dendrites and spine necks are electrically privileged compartments. [2.4](02-04-electrical-synapses.md) makes two cells share one cable. Conduction velocity returns in [3.4](03-04-motor-systems.md) as the reflex-latency budget, and demyelination in [4.4](04-04-disease-a-taste.md).
- **Sideways:** the cable equation *is* the heat equation with a sink — [pdes 2.1](../../pdes/lessons/02-01-heat-diffusion-equations.md) and its Green's function in [pdes 4.2](../../pdes/lessons/04-02-heat-equation-line-heat-kernel.md) solve it for you, and the $\sqrt{Dt}$ scaling is the same one governing molecular diffusion in [biophysics 1.3](../../biophysics/lessons/01-03-diffusion-ficks-laws.md). The membrane's electrical properties are derived from first principles in [biophysics 4.5](../../biophysics/lessons/04-05-excitable-membranes-action-potential.md); the clinical face of conduction velocity and block is [physiology 1.4](../../physiology/lessons/01-04-action-potential.md). Electrical engineers will recognise the whole object as a lossy RC transmission line — the same equations Kelvin wrote in 1855 for the transatlantic telegraph cable, and for the same reason.
