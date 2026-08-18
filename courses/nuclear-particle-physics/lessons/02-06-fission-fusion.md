# Nuclear & Particle Physics · Lesson 2.6: Fission & fusion energetics

> ⏱ ~15 min · Module 2: Radioactivity & nuclear reactions · Builds on: [2.5 Nuclear reactions & Q-values](02-05-nuclear-reactions-q-values.md), [1.2 Binding energy & the mass defect](01-02-binding-energy-mass-defect.md) · Unlocks: [3.1 Four-vectors & invariant mass](03-01-four-vectors-invariant-mass.md)

## Why this matters

Every reactor, every hydrogen bomb, and the core of every star runs on one graph: the curve of binding energy per nucleon from [1.2](01-02-binding-energy-mass-defect.md), which peaks near ${}^{56}_{26}\mathrm{Fe}$. **Fission** slides a heavy nucleus down the right slope toward the peak; **fusion** climbs a light nucleus up the left slope toward the same peak. Both release energy because both end up more tightly bound. This lesson turns "slide toward the peak" into actual MeV: why a single ${}^{235}\mathrm{U}$ fission gives ~200 MeV, why D–T fusion gives 17.6 MeV, why fusion wins *per nucleon* yet is far harder to light, and what the multiplication factor $k$ has to do with the difference between a reactor and a weapon.

## The idea

Picture the $B/A$ curve as a valley seen upside down — a hill with its summit at iron. A nucleus off to either side is like a ball perched on a slope; let it roll toward the summit and it releases the height difference as energy. Uranium sits high on the right; split it into two mid-mass fragments and those fragments sit *higher up the hill* (more tightly bound), so energy comes out. Hydrogen isotopes sit low on the far left; merge them into helium and you leap far up the steep left face, releasing even more per nucleon.

But the two engines feel completely different to *start*. Dropping a neutron into a uranium nucleus is easy — a neutron is electrically neutral, so nothing repels it; it just walks in. The only obstacle is internal: the nucleus must deform enough to tear in two, and surface tension resists that (the **fission barrier**). Fusion faces the opposite problem. To merge two nuclei you must shove two *positive* charges together against ferocious Coulomb repulsion (the **Coulomb barrier**) until they're close enough for the strong force to grab. That's why fission runs at room temperature with a stray neutron, while fusion demands the ~$10^8$ K interior of a star or a tokamak.

## The formal version

**The energy source, both ways.** The energy released is the gain in total binding energy — equivalently the mass defect of the reaction times $c^2$ (the Q-value from [2.5](02-05-nuclear-reactions-q-values.md)). Reading the $B/A$ curve gives a quick estimate,

$$Q \approx \sum_{\text{products}} \! B - \sum_{\text{reactants}} \! B = \sum_i A_i\,(B/A)_i^{\text{prod}} - \sum_j A_j\,(B/A)_j^{\text{react}}.$$

*In words: energy out equals how much more tightly bound the products are than the reactants.*

**Fission and the barrier.** Take ${}^{235}_{92}\mathrm{U} + n \to {}^{236}_{92}\mathrm{U}^{*} \to X + Y + (2\text{–}3)\,n$, where $X,Y$ are two mid-mass fragments (typically asymmetric, e.g. $A\approx 95$ and $A\approx 140$). From the curve, ${}^{235}\mathrm{U}$ has $B/A \approx 7.6$ MeV and the fragments have $B/A \approx 8.5$ MeV, so

$$Q_{\text{fission}} \approx 235 \times (8.5 - 7.6) \approx 235 \times 0.9 \approx 200\ \text{MeV}.$$

Where does that go? The two fragments are both highly charged and suddenly touching, so their mutual **Coulomb repulsion** — the $a_C Z^2/A^{1/3}$ term of the SEMF ([1.3](01-03-semi-empirical-mass-formula.md)) — flings them apart: about 165 MeV emerges as **fragment kinetic energy**, the rest as prompt neutrons, gammas, and later beta/gamma decay of the neutron-rich fragments.

Why doesn't ${}^{235}\mathrm{U}$ just split on its own? Because to divide, the nucleus must first *stretch*, and stretching increases its surface area — the SEMF **surface term** $a_S A^{2/3}$ costs energy. Early in the deformation surface tension wins (energy rises); past a **saddle point** Coulomb repulsion wins (energy falls to scission). That hump is the **fission barrier**, $\sim 6$ MeV for ${}^{236}\mathrm{U}$. *In words: the liquid drop resists being pulled apart until it's stretched past the point of no return.* The decisive fact: capturing a slow neutron makes ${}^{236}\mathrm{U}^{*}$ with $\sim 6.5$ MeV of excitation (the neutron's binding energy) — *more* than the barrier — so ${}^{235}\mathrm{U}$ fissions with even zero-energy ("thermal") neutrons. The relevant knob is the **fissility** $Z^2/A$; barriers shrink toward zero as $Z^2/A \to \sim 48$ (${}^{235}\mathrm{U}$: $92^2/235 \approx 36$, so a small but real barrier).

**The chain reaction.** Each fission emits $\nu \approx 2.4$ neutrons on average; if some of those induce further fissions, the reaction sustains itself. Define the **multiplication factor**

$$k = \frac{\text{neutrons causing fission in one generation}}{\text{neutrons causing fission in the previous generation}}.$$

*In words: how many follow-on fissions each fission buys.* Three regimes:

- $k < 1$ **subcritical** — the reaction dies out.
- $k = 1$ **critical** — steady, self-sustaining; this is a running **reactor** (held exactly at 1 by control rods absorbing surplus neutrons).
- $k > 1$ **supercritical** — exponentially growing; a runaway (a **weapon**, or a reactor excursion).

Whether $k$ exceeds 1 depends on geometry (leakage), enrichment, and moderation — the domain of **reactor physics** (a future `intro-nuclear-engineering`/`reactor-physics` course; here we only name the bridge).

**Fusion and its barrier.** The workhorse reaction is deuterium–tritium,

$$ {}^{2}_{1}\mathrm{H} + {}^{3}_{1}\mathrm{H} \to {}^{4}_{2}\mathrm{He} + n, \qquad Q = 17.6\ \text{MeV}.$$

To get there the two nuclei (charges $Z_1 = Z_2 = 1$) must approach within the range of the strong force, $r \sim$ a few fm, against the **Coulomb barrier**

$$V_C = \frac{1}{4\pi\varepsilon_0}\frac{Z_1 Z_2 e^2}{r} = (1.44\ \text{MeV·fm})\,\frac{Z_1 Z_2}{r}.$$

*In words: two positive charges cost energy to push together, and that cost peaks just before they touch.* For D–T, $r \approx R_D + R_T \approx 3$–$4$ fm gives $V_C \approx 0.4$ MeV. The average thermal energy at $10^8$ K is only $k_B T \approx 9$ keV — forty times *smaller* than the barrier. Fusion happens anyway for two reasons you've already met: quantum **tunneling** through the barrier (the Gamow factor of [2.2](02-02-alpha-decay-tunneling.md), running inward instead of outward) and the high-energy tail of the thermal distribution. Sustained net energy also needs enough density and confinement time — the **Lawson criterion**, a threshold on the triple product $n\,\tau_E\,T$ — which is why fusion is as much a plasma-confinement problem as a nuclear one (see `plasma-physics`/`stat-mech`). Contrast fission: a neutron is neutral, so there is *no* Coulomb barrier to entry — that asymmetry is the whole reason fission is easy to trigger and fusion is not.

**MeV per nucleon — the fair comparison.** Total per event favors fission (200 vs 17.6 MeV), but events involve very different nucleon counts:

$$\frac{Q_{\text{fission}}}{A} \approx \frac{200}{235} \approx 0.85\ \frac{\text{MeV}}{\text{nucleon}}, \qquad \frac{Q_{\text{D–T}}}{A} \approx \frac{17.6}{5} \approx 3.5\ \frac{\text{MeV}}{\text{nucleon}}.$$

*In words: fuse and each nucleon liberates about four times what it would by fissioning.* Per unit *mass* the gap is even wider, since fusion fuel is so light. Fusion wins the energy-density contest handily — its only problem is ignition.

## Picture

![The binding-energy-per-nucleon curve reprised, with a fusion arrow climbing the steep left slope and a fission arrow descending the gentle right slope, both toward the coral-highlighted iron-56 peak, plus an inset of the D–T reaction showing the 3.5 MeV alpha and 14.1 MeV neutron](assets/02-06-fig1.svg)

## Worked examples

**Example 1 (D–T Q-value and the energy split — Boss problem 2).** Compute $Q$ for ${}^{2}\mathrm{H} + {}^{3}\mathrm{H} \to {}^{4}\mathrm{He} + n$ from atomic masses, then find how the energy divides between the alpha and the neutron.

Masses (u): $M({}^2\mathrm{H}) = 2.014102$, $M({}^3\mathrm{H}) = 3.016049$, $M({}^4\mathrm{He}) = 4.002602$, $m_n = 1.008665$. (The one electron on each of the two hydrogen isotopes matches the two electrons of the helium atom, so atomic masses cancel electrons cleanly — the convention from [1.2](01-02-binding-energy-mass-defect.md).)

$$\Delta m = \big[2.014102 + 3.016049\big] - \big[4.002602 + 1.008665\big] = 5.030151 - 5.011267 = 0.018884\ \text{u},$$

$$Q = 0.018884 \times 931.494\ \frac{\text{MeV}}{\text{u}} = 17.6\ \text{MeV}.$$

Now the split. The fuel starts essentially at rest (thermal keV energies are negligible against 17.6 MeV), so total momentum is $\approx 0$: the alpha and neutron fly apart with equal and opposite momenta, $p_\alpha = p_n \equiv p$. Nonrelativistically $K = p^2/2m$, so at equal $p$,

$$\frac{K_n}{K_\alpha} = \frac{m_\alpha}{m_n} \approx \frac{4}{1} = 4.$$

*The lighter particle carries the larger share.* With $K_n + K_\alpha = 17.6$ MeV split in the ratio $4 : 1$,

$$K_n = \tfrac{4}{5}(17.6) = 14.1\ \text{MeV}, \qquad K_\alpha = \tfrac{1}{5}(17.6) = 3.5\ \text{MeV}.$$

The 14.1 MeV neutron is the one you harvest for power (or use to breed tritium); the 3.5 MeV alpha stays in the plasma and helps keep it hot.

**Example 2 (per-nucleon accounting — why fusion wins the density race).** Compare the two engines per nucleon. Fission of ${}^{235}\mathrm{U}$: $200/235 \approx 0.85$ MeV/nucleon. D–T fusion: $17.6/5 \approx 3.5$ MeV/nucleon. Fusion delivers about $3.5/0.85 \approx 4\times$ more energy for every nucleon of fuel — and since the fuel weighs $\sim 47\times$ less per nucleon-set, the advantage *per kilogram* is enormous. Yet fusion powers no grid today: the $0.4$ MeV Coulomb barrier (Example-1 fuel must be heated to $\sim 10^8$ K and held long enough to satisfy Lawson) is a confinement problem that fission, needing only a wandering neutron, simply doesn't have. **Fusion is the better fuel; fission is the easier fire.**

## Watch out

- **You might think fusion releases less energy than fission because 17.6 < 200 MeV.** That's per *event*, comparing 5 nucleons against 235. The fair figure of merit is MeV per nucleon (or per kg), and there fusion beats fission by ~4×. Always ask "per what?"
- **You might think the fission barrier is a Coulomb barrier like fusion's.** It's the opposite geometry. Fusion's barrier is *external* — repulsion between two incoming charges. Fission's barrier is *internal* — surface tension resisting the deformation of one nucleus, an SEMF surface-vs-Coulomb competition ([1.3](01-03-semi-empirical-mass-formula.md)). And the incoming neutron feels no barrier at all.
- **You might read $k = 1.5$ as "50% more energy."** No — $k$ compounds *per generation*. With generation times of microseconds, $k = 1.5$ means the rate multiplies by $1.5$ every generation: explosive growth, not a 50% bump. Reactors are pinned at $k = 1.000$ for exactly this reason.

## One-liner

> Fission slides heavy nuclei down to the iron peak and fusion climbs light ones up to it — both cash in the $B/A$ curve, but fusion yields ~4× more per nucleon while paying a Coulomb-barrier price that fission's neutral trigger never sees.

## Problems

**P1 (🟢)** A ${}^{235}\mathrm{U}$ fission releases on average $\nu = 2.5$ neutrons. (a) In a bare lump, suppose $60\%$ of emitted neutrons escape or are absorbed without causing fission. What is the multiplication factor $k$, and is the assembly subcritical, critical, or supercritical? (b) What must $k$ be for a steady power reactor, and how is that value maintained in practice?

**P2 (🟡)** For D–T fusion, ${}^{2}\mathrm{H} + {}^{3}\mathrm{H} \to {}^{4}\mathrm{He} + n$: (a) using the masses in Example 1, confirm $Q \approx 17.6$ MeV; (b) using momentum conservation from rest, find the kinetic energies of the neutron and the alpha; (c) compare the energy released *per nucleon* to ${}^{235}\mathrm{U}$ fission (~200 MeV per nucleus) and state which wins and why fusion is nonetheless harder to ignite. *(This is Boss problem 2.)*

**P3 (🔴, optional)** Estimate the Coulomb barrier for D–T fusion. Take the nuclear radii from $R = r_0 A^{1/3}$ with $r_0 = 1.2$ fm, and use $V_C = (1.44\ \text{MeV·fm})\,Z_1 Z_2 / r$ at contact separation $r = R_D + R_T$. Then compare $V_C$ to the average thermal energy $k_B T$ at $T = 10^8$ K ($k_B = 8.62\times 10^{-5}$ eV/K) and explain in one sentence how fusion proceeds despite the mismatch.

<details>
<summary>Solutions</summary>

**P1** (a) Of $\nu = 2.5$ neutrons per fission, $40\%$ go on to cause a new fission, so each fission produces $2.5 \times 0.40 = 1.0$ follow-on fissions:

$$k = 1.0 \quad\Rightarrow\quad \text{critical.}$$

(A bare lump usually leaks *more* than this, pushing $k < 1$; enrichment, a moderator, a reflector, or simply more mass all raise $k$.) (b) A steady reactor needs $k = 1$ exactly — every fission triggers precisely one successor, so the power holds constant. It's maintained by inserting or withdrawing neutron-absorbing **control rods** to keep $k$ pinned at unity (delayed neutrons make this controllable on a human timescale).

*Check.* $k = 1$ is the boundary between decay ($k<1$) and runaway ($k>1$), which is exactly where a constant-power reactor must sit. ✓

**P2** (a) From Example 1, $\Delta m = 5.030151 - 5.011267 = 0.018884$ u and $Q = 0.018884 \times 931.494 = 17.6$ MeV. ✓

(b) Momentum conservation from rest gives $p_\alpha = p_n$, and $K = p^2/2m$ means $K_n/K_\alpha = m_\alpha/m_n \approx 4$. Splitting 17.6 MeV in the ratio $4:1$:

$$K_n = \tfrac{4}{5}(17.6) = 14.1\ \text{MeV}, \qquad K_\alpha = \tfrac{1}{5}(17.6) = 3.5\ \text{MeV}.$$

(c) Per nucleon: D–T gives $17.6/5 \approx 3.5$ MeV/nucleon versus $200/235 \approx 0.85$ MeV/nucleon for fission — **fusion wins by ~4×** (and far more per kg, since the fuel is lighter). It is nonetheless harder to ignite because merging two positive nuclei requires overcoming the Coulomb barrier ($\sim 0.4$ MeV, P3), demanding $\sim 10^8$ K plasma held long enough to satisfy the Lawson criterion — whereas fission is triggered by a neutral neutron that feels no such barrier.

*Check.* The energies sum to $14.1 + 3.5 = 17.6$ MeV ✓, and the lighter neutron correctly carries the larger share. The 14.1 MeV neutron and 3.5 MeV alpha are the textbook D–T values. ✓

**P3** Radii: $R_D = 1.2 \times 2^{1/3} = 1.51$ fm, $R_T = 1.2 \times 3^{1/3} = 1.73$ fm, so $r = R_D + R_T \approx 3.2$ fm. With $Z_1 = Z_2 = 1$:

$$V_C = 1.44\ \text{MeV·fm} \times \frac{1}{3.2\ \text{fm}} \approx 0.45\ \text{MeV} = 450\ \text{keV}.$$

Thermal energy at $10^8$ K: $k_B T = 8.62\times10^{-5}\ \text{eV/K} \times 10^{8}\ \text{K} = 8.6\times10^{3}\ \text{eV} \approx 9$ keV. The barrier is about $450/9 \approx 50$ times higher than the average thermal energy, so classically almost no pair could fuse. It happens anyway because a few nuclei in the high-energy tail of the Maxwell distribution, plus **quantum tunneling** through the barrier (the Gamow factor of [2.2](02-02-alpha-decay-tunneling.md)), let sub-barrier collisions penetrate.

*Check.* $V_C \sim$ hundreds of keV is the right order for light-nucleus fusion, and $k_B T \sim 10$ keV at $10^8$ K matches "fusion temperatures." The huge ratio is precisely why tunneling, not brute-force over-the-top collisions, drives stellar and reactor fusion. ✓

</details>

## Flashback

**From Lesson 1.2 (Binding energy & the mass defect):** The iron-56 peak anchors everything in this lesson — verify it. Compute $B/A$ for ${}^{56}_{26}\mathrm{Fe}$ given its atomic mass $55.934936$ u, with $M({}^1\mathrm{H}) = 1.007825$ u, $m_n = 1.008665$ u, and $1\ \text{u} = 931.494\ \text{MeV}/c^2$.

<details>
<summary>Solution</summary>

With $Z = 26$, $N = 30$:

$$\Delta m = 26(1.007825) + 30(1.008665) - 55.934936 = 26.20345 + 30.25995 - 55.934936 = 0.528464\ \text{u}.$$

$$B = 0.528464 \times 931.494 = 492.3\ \text{MeV}, \qquad B/A = \frac{492.3}{56} = 8.79\ \text{MeV/nucleon}.$$

*Check.* $8.79$ MeV/nucleon is the top of the curve — higher than uranium's $7.6$ and helium's $7.07$ — which is exactly why both fission (from the right) and fusion (from the left) release energy by heading toward it. ✓

</details>

## Connections

- **Backward:** this is the payoff of the $B/A$ curve from [1.2](01-02-binding-energy-mass-defect.md) and the SEMF from [1.3](01-03-semi-empirical-mass-formula.md) — the surface-vs-Coulomb competition that shapes the mass parabola is the *same* competition that sets the fission barrier. The Q-value machinery is [2.5](02-05-nuclear-reactions-q-values.md), and the Coulomb barrier is the [2.2](02-02-alpha-decay-tunneling.md) Gamow picture run inward.
- **Forward:** the D–T split treated nonrelativistically here becomes exact once you have four-momentum conservation from [3.1 Four-vectors & invariant mass](03-01-four-vectors-invariant-mass.md) — the same two-body kinematics, done covariantly, gives decay and reaction energies without approximation.
- **Sideways:** igniting and confining a fusion plasma (the Lawson criterion, the $10^8$ K requirement) is a plasma-physics and thermodynamics problem — see the `stat-mech` syllabus for the Maxwell tail that feeds the reaction rate. The chain reaction and the multiplication factor $k$ open onto reactor physics (a future `intro-nuclear-engineering`/`reactor-physics` course), where neutron transport, moderation, and control are the whole subject.
