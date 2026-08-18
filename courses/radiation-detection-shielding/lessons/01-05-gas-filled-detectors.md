# Radiation Detection & Shielding · Lesson 1.5: Gas-filled detectors

> ⏱ ~15 min · Module 1: Radiation interactions & detector physics · Builds on: [1.3 Charged particles: stopping power & range](01-03-charged-particles-stopping-power-range.md), [1.4 Neutron interactions](01-04-neutron-interactions.md) · Unlocks: [1.6 Scintillation & semiconductor detectors](01-06-scintillation-semiconductor-detectors.md)

## Why this matters

You now know how radiation dumps energy into matter — charged particles by ionizing a track ([1.3](01-03-charged-particles-stopping-power-range.md)), neutrons by handing energy to a recoil nucleus or a $(n,\alpha)$ fragment ([1.4](01-04-neutron-interactions.md)). A gas-filled detector is the simplest machine that turns that deposited energy into an electrical pulse you can read on a meter. The remarkable part: **one detector geometry — a wire in a gas-filled tube — becomes a dose meter, a spectrometer, or a click-counter depending on nothing but the voltage you apply.** Knowing which region you're in tells you instantly whether your pulse carries energy information or just says "something happened."

## The idea

Radiation crosses the gas and knocks electrons off atoms, leaving a trail of **ion pairs** (a freed electron and its positive ion). It costs about **30 eV to make one pair** — so a particle that deposits 3 MeV makes roughly 100,000 of them. Put a voltage across the gas and the electrons drift one way, the ions the other; that moving charge is your signal.

Now the whole story is: *what happens to those electrons on the way to the wire?* Turn the voltage knob up from zero and you pass through six regimes:

- **Too little voltage** and the electrons and ions just re-find each other and vanish before collection.
- **Enough to collect them all** and you measure exactly the charge radiation created — proportional to the energy deposited.
- **More still**, and the drifting electrons pick up enough speed between collisions to ionize *further* atoms themselves — one electron becomes an avalanche. The signal is now the original charge times a **gain**, but still proportional to it.
- **Crank it to the limit** and every event, big or small, triggers one enormous discharge that fills the whole tube. Now every pulse is the *same size* — you've thrown away the energy information but gained a huge, easy-to-count signal.

The knob trades energy information for signal size. That trade is the entire lesson.

## The formal version

**Ion-pair creation.** A particle depositing energy $E$ (eV) in the gas creates, on average,

$$N_0 = \frac{E}{W},$$

where $W \approx 30\ \text{eV/pair}$ is the **mean energy per ion pair** (25–35 eV across common fill gases; slightly above the true ionization potential because some energy goes to excitation). *In words: divide the energy dumped by ~30 eV to count the primary ion pairs.* The primary charge liberated is $Q_0 = N_0\,e$ with $e = 1.602\times10^{-19}\ \text{C}$.

**Gas multiplication (gain).** Above a threshold field, a drifting electron gains energy $eEd$ between collisions large enough to ionize on impact — a **Townsend avalanche**. Each primary electron produces $M$ electrons at the wire, so the collected charge is

$$Q = M\,Q_0 = M\,N_0\,e, \qquad M = \text{gas gain}.$$

*In words: the avalanche multiplies every primary electron by the same factor $M$, so the pulse grows but its proportionality to energy survives — as long as $M$ is the same for all events.*

**The six regions** (increasing applied voltage $V$ — see the Picture):

1. **Recombination.** Field too weak; ions and electrons recombine before collection. Collected charge rises with $V$ but is less than $Q_0$. Unusable.
2. **Ionization chamber.** All primary charge is collected, no multiplication: $M = 1$, $Q = Q_0 \propto E$. Pulses are tiny but the signal is a clean, drift-free measure of energy (or, integrated, of dose rate).
3. **Proportional.** $M > 1$ and constant for a given $V$: $Q = M\,Q_0 \propto E$ still. Multiplication ($M \sim 10^2$–$10^6$) lifts the pulse into easy reach **while keeping energy information** — so spectroscopy is possible.
4. **Limited proportionality.** The avalanche's own space charge starts to depress the field; $M$ sags for the biggest events. Proportionality breaks down — the curves for different energies begin to converge.
5. **Geiger–Müller (GM).** One avalanche breeds UV photons that seed new avalanches all along the wire until the whole tube discharges. Every event — a 100 keV beta or a 5 MeV alpha — gives the **same large pulse**. Great for counting, useless for energy.
6. **Continuous discharge.** The tube arcs and conducts steadily regardless of radiation. Operating here damages the detector.

**Quenching (GM).** A bare GM discharge would self-perpetuate — the positive ions striking the cathode free fresh electrons and re-trigger the tube. A **quench gas** (a few percent organic vapor like ethanol, or a halogen like $\ce{Cl2}$/$\ce{Br2}$) absorbs the UV photons and neutralizes the ions, stopping the discharge after one pulse. Organic quenchers slowly dissociate (finite lifetime, ~$10^9$ counts); halogen quenchers self-heal and last far longer.

**Dead time.** After a GM pulse the sheath of slow positive ions leaves the tube momentarily insensitive — its **dead time** $\tau$ is typically $50$–$300\ \mu\text{s}$. Events arriving during $\tau$ are lost, so the observed rate $m$ falls below the true rate $n$. For a non-paralyzable tube,

$$m = \frac{n}{1 + n\tau}.$$

*In words: at high rates the tube spends a real fraction of each second recovering, so it undercounts — you must correct for it (full treatment in [2.2](02-02-error-propagation-dead-time.md)).*

## Picture

![Pulse amplitude vs applied voltage, log vertical scale, showing the six operating regions; a blue high-ionization (alpha) curve and a coral low-ionization (beta) curve stay separated through the ionization and proportional regions, then merge in the Geiger–Müller plateau](assets/01-05-fig1.svg)

The vertical gap between the blue ($\alpha$) and coral ($\beta$) curves **is** the energy information: it survives regions 2–3 (you can tell an alpha from a beta), narrows in region 4, and vanishes in region 5 where both give one identical GM pulse.

## Worked examples

**Example 1 (why an ion chamber needs an amplifier).** A 5.5 MeV alpha from $\ce{^{241}Am}$ stops completely in the fill gas of an ionization chamber. How much charge does it liberate?

Primary ion pairs, with $W = 30\ \text{eV/pair}$:

$$N_0 = \frac{E}{W} = \frac{5.5\times10^{6}\ \text{eV}}{30\ \text{eV/pair}} = 1.83\times10^{5}\ \text{pairs}.$$

Primary charge (one electron per pair):

$$Q_0 = N_0\,e = (1.83\times10^{5})(1.602\times10^{-19}\ \text{C}) = 2.9\times10^{-14}\ \text{C} \approx 0.029\ \text{pC}.$$

That is *29 femtocoulombs* — from one of the most ionizing particles there is. An ion chamber ($M=1$) hands this straight to the electronics, so it needs a low-noise charge-sensitive preamplifier, and single-pulse counting is marginal (ion chambers are usually run in **current mode**, integrating many events into a steady current for dose-rate work). Put the same event in a proportional counter at gain $M = 10^{4}$ and you collect $290\ \text{pC}$ — a fat, easily digitized pulse whose height still reports 5.5 MeV.

**Example 2 (pick the region for the job).** For each task, choose ionization / proportional / GM and justify.

- **Area dose-rate survey meter.** → **Ionization chamber**, current mode. The collected charge equals the energy deposited with no gain to drift or calibrate, and gain-free operation gives a flat energy response over a huge dose range — exactly what a defensible dose number needs. (This is why the reference "cutie-pie" survey meter is an ion chamber.)
- **Alpha spectroscopy — resolve $\ce{^{241}Am}$ (5.5 MeV) from $\ce{^{244}Cm}$ (5.8 MeV).** → **Proportional counter.** You need the pulse height to track energy (rules out GM) *and* enough signal to separate two close peaks (rules out the tiny ion-chamber pulse). Gas multiplication with constant $M$ delivers both. This is also why slow-neutron detectors — $\ce{BF3}$ and $\ce{^3He}$ tubes from [1.4](01-04-neutron-interactions.md) — are **proportional** counters: the $(n,\alpha)$ or $(n,p)$ reaction dumps a fixed, large energy, and proportional operation lets you window on that peak to reject gammas.
- **Cheap handheld click-counter / contamination check.** → **GM tube.** You only need to know *whether* radiation is present and how fast it clicks. The GM avalanche gives a volt-scale pulse needing almost no amplification — rugged, cheap, and loud — at the cost of all energy information.

## Watch out

- **You might think the proportional region multiplies the *energy*.** It multiplies the *charge* by a factor $M$ set by the voltage and geometry, not by the event. Because $M$ is the same for every pulse, $Q = M\,Q_0$ stays proportional to energy — that constancy, not the size of $M$, is what makes spectroscopy work.
- **You might think a bigger GM pulse means a more energetic particle.** No — in the GM region the whole tube discharges the same way regardless of how the avalanche started, so a 60 keV photon and a 5 MeV alpha give identical pulses. GM counts events; it never measures their energy.
- **You might ignore dead time at high count rates.** A GM tube with $\tau = 100\ \mu\text{s}$ is blind for $0.1\ \text{ms}$ after every pulse; at thousands of counts per second it silently undercounts by tens of percent. Correct with $m = n/(1+n\tau)$ before you trust the number.

## One-liner

> Turn the voltage up and one gas tube walks through recombination → ionization (charge $=$ energy) → proportional (charge $= M\times$ energy, spectroscopy) → Geiger (every event the same big pulse, counting only) — trading energy information for signal size.

## Problems

**P1 (🟢)** A beta particle deposits 90 keV in an ionization chamber. Using $W = 30\ \text{eV/pair}$ and $e = 1.602\times10^{-19}\ \text{C}$, find the number of primary ion pairs and the primary charge collected. Comment on its size versus the alpha in Example 1.

**P2 (🟡)** The same 90 keV event is measured instead in a proportional counter with gas gain $M = 5\,000$. (a) What charge reaches the electronics now? (b) In one sentence, why does this pulse still tell you the energy was 90 keV, whereas the same event in a GM tube would not?

**P3 (🔴)** A GM survey meter has a dead time $\tau = 100\ \mu\text{s}$ and reads an observed rate that you suspect is being throttled. If the *true* rate is $n = 2\,000\ \text{s}^{-1}$, use the non-paralyzable model $m = n/(1+n\tau)$ to find the observed rate $m$ and the fractional counting loss. Why does this problem never arise for the ionization chamber survey meter of Example 2?

<details>
<summary>Solutions</summary>

**P1** Primary ion pairs:

$$N_0 = \frac{E}{W} = \frac{90{,}000\ \text{eV}}{30\ \text{eV/pair}} = 3{,}000\ \text{pairs}.$$

Primary charge:

$$Q_0 = N_0\,e = (3{,}000)(1.602\times10^{-19}\ \text{C}) = 4.8\times10^{-16}\ \text{C} \approx 0.48\ \text{fC}.$$

That is about 60 times *smaller* than the 29 fC alpha of Example 1 — consistent with depositing 90 keV instead of 5.5 MeV (ratio $5.5\times10^{6}/9\times10^{4} \approx 61$). Sub-femtocoulomb charge is why a bare ion chamber struggles to count single low-energy events and is usually run in integrating current mode. *Check.* $N_0\propto E$, and $Q_0/e = 3000$ electrons — a clean integer count of pairs. ✓

**P2** (a) Gas multiplication scales the primary charge by $M$:

$$Q = M\,Q_0 = (5{,}000)(4.8\times10^{-16}\ \text{C}) = 2.4\times10^{-12}\ \text{C} = 2.4\ \text{pC}.$$

A 5000$\times$ larger pulse — now comfortably above electronic noise. (b) Because $M$ is the *same constant* for every event at fixed voltage, $Q = M\,Q_0 \propto E$: pulse height still reports 90 keV. In a GM tube the full-tube discharge makes every pulse the same size regardless of $E$, erasing the energy information. *Check.* $2.4\ \text{pC}$ is ~5000$\times$ the $0.48\ \text{fC}$ of P1, and ~12$\times$ smaller than the amplified alpha pulse ($290\ \text{pC}$) — the factor-60 energy ratio is preserved through multiplication, which is the point. ✓

**P3** With $n = 2{,}000\ \text{s}^{-1}$ and $\tau = 100\ \mu\text{s} = 1.0\times10^{-4}\ \text{s}$:

$$n\tau = (2{,}000)(1.0\times10^{-4}) = 0.20,\qquad m = \frac{n}{1+n\tau} = \frac{2{,}000}{1.20} = 1{,}667\ \text{s}^{-1}.$$

Fractional loss:

$$\frac{n - m}{n} = \frac{2{,}000 - 1{,}667}{2{,}000} = 0.167 \approx 17\%.$$

You are undercounting by about one pulse in six. The ion chamber of Example 2 runs in **current mode** — it integrates the charge from all events into a continuous current rather than resolving individual pulses, so there is no per-pulse recovery interval and no dead-time loss. *Check.* At low rate ($n\tau\ll1$), $m\to n$ as it should; the loss grows with rate, matching the intuition that a busy tube spends more of each second recovering. ✓

</details>

## Flashback

**From Lesson 1.4 (neutron interactions — elastic recoil):** A 2.0 MeV fast neutron scatters elastically off a carbon nucleus ($A = 12$). Find the *maximum* energy it can transfer to the recoiling carbon in a single collision, and say in one line why this makes carbon a poor choice for the sensitive gas of a fast-neutron proportional counter.

<details>
<summary>Solution</summary>

The maximum fractional energy transfer in an elastic head-on collision (from the kinematics in [1.4](01-04-neutron-interactions.md)) is

$$\frac{E_{\text{recoil,max}}}{E_n} = \frac{4A}{(1+A)^2}.$$

For $A = 12$:

$$\frac{4(12)}{(13)^2} = \frac{48}{169} = 0.284,\qquad E_{\text{recoil,max}} = 0.284 \times 2.0\ \text{MeV} = 0.57\ \text{MeV}.$$

Carbon can absorb at most ~28% of the neutron's energy per hit, so the ionizing recoil is weak and the deposited energy is a poor proxy for $E_n$. A **hydrogenous** gas is far better: for hydrogen $A = 1$ gives $4(1)/(2)^2 = 1$, so a proton recoil can take up to the *full* neutron energy — which is exactly why proton-recoil (e.g. $\ce{CH4}$-filled) proportional counters are the workhorse for fast-neutron spectroscopy. *Check.* $4A/(1+A)^2$ is maximal ($=1$) at $A=1$ and falls as $A$ grows — heavier nuclei recoil less, as a billiard-ball picture demands. ✓

</details>

## Connections

- **Backward:** the primary signal is just the ionization track of [1.3](01-03-charged-particles-stopping-power-range.md) counted up at ~30 eV/pair — and for neutrons, the ionizing particle is the charged recoil or $(n,\alpha)$ fragment of [1.4](01-04-neutron-interactions.md), which is why $\ce{BF3}$/$\ce{^3He}$ neutron detectors are proportional counters.
- **Forward:** [1.6 Scintillation & semiconductor detectors](01-06-scintillation-semiconductor-detectors.md) replaces the fill gas with a solid — a semiconductor makes an electron–hole pair for only ~3 eV (ten times more charge per keV, ten times better resolution) — and the dead-time correction started here gets its full paralyzable/non-paralyzable treatment in [2.2 Error propagation & dead time](02-02-error-propagation-dead-time.md).
- **Sideways (measurement engineering):** the voltage-knob trade — signal size vs information content — is the same tension that recurs whenever a transducer amplifies: gain buys you range and noise immunity but can cost you linearity, exactly as the proportional-to-limited-proportional transition shows.
