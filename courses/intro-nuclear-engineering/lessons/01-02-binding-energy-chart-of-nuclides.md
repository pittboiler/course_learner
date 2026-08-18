# Intro to Nuclear Engineering & Radiation · Lesson 1.2: Binding energy and the chart of nuclides

> ⏱ ~15 min · Module 1: Nuclear structure, radioactivity & reactions · Builds on: [1.1 The nucleus and its bookkeeping](01-01-nucleus-bookkeeping.md) · Unlocks: [1.3 Radioactivity and the decay law](01-03-radioactivity-decay-law.md), [3.1 The fission process and its energy](03-01-fission-process-energy.md)

## Why this matters

Every joule a reactor delivers, every MeV a fusion device chases, comes from one accountant's fact: **a nucleus weighs less than the parts you built it from.** That missing mass, times $c^2$, is the energy that glued the nucleus together — and it is not the same per nucleon everywhere. One curve, binding energy per nucleon versus mass number, explains in a single glance why splitting uranium *and* fusing hydrogen both release energy, why iron is the ash at the end of stellar burning, and which nuclei are stable in the first place. Learn this curve and you can predict, order-of-magnitude, the energy of almost any nuclear process before writing a single reaction.

## The idea

Pulling a nucleus apart into free protons and neutrons costs energy — you have to fight the strong force holding it together. That energy is the **binding energy** $B$. Turn it around: when the nucleons snapped together to *form* the nucleus, exactly that much energy was released. By Einstein's $E=mc^2$, releasing energy means the bound nucleus is *lighter* than the loose parts. Weigh the pieces, weigh the whole, and the shortfall — the **mass defect** — is the binding energy in disguise.

Now the key move: don't ask how tightly a *whole* nucleus is bound (big nuclei have more nucleons, so of course more total glue). Ask how tightly bound *per nucleon*, $B/A$. That levels the playing field, and the answer traces a distinctive hump: it climbs steeply through the light nuclei, crests around **iron ($^{56}\text{Fe}$, about 8.8 MeV per nucleon)**, then sags gently down to uranium. Iron sits at the bottom of the energy valley — the most tightly bound, most stable arrangement of nuclear matter.

That single hump is the whole story of nuclear energy. Anything that moves a nucleus *toward* the iron peak — raising its $B/A$ — releases the difference. Heavy nuclei get there by **splitting** into two mid-weight fragments (fission). Light nuclei get there by **merging** into something bigger (fusion). Both climb the same hill from opposite sides.

## The formal version

**Mass defect.** For a nuclide with $Z$ protons and $N$ neutrons ($A = Z+N$ nucleons) and measured mass $M_{\text{nuc}}$,

$$\Delta m = \big[\,Z\,m_p + N\,m_n\big] - M_{\text{nuc}}.$$

*In words: add up the masses of all the free nucleons, subtract the actual nuclear mass; the positive leftover is the mass that "went missing" when they bound.*

In practice you look up **atomic** masses (nucleus plus electrons), not bare nuclear masses. The electrons nearly cancel if you use the mass of the hydrogen atom $m_H$ (one proton + one electron) in place of $m_p$:

$$\Delta m = \big[\,Z\,m_H + N\,m_n\big] - M_{\text{atom}},$$

where the $Z$ atomic electrons on both sides cancel (ignoring the tiny eV-scale electron binding). Handy constants:

$$m_H = 1.007825\,\text{u}, \qquad m_n = 1.008665\,\text{u}, \qquad 1\,\text{u} = 931.494\,\text{MeV}/c^2.$$

**Binding energy.**

$$\boxed{\,B = \Delta m\,c^2\,}$$

*In words: the mass defect converted to energy is the energy you'd have to supply to blow the nucleus back into free nucleons.* Because $1\,\text{u}\,c^2 = 931.494\,\text{MeV}$, you multiply a mass defect in atomic mass units straight into MeV.

**Binding energy per nucleon.** $B/A$ — the figure of merit. Higher $B/A$ = more tightly bound = more stable. The curve rises steeply, peaks near $A\approx 56$–$62$ at about $8.8\,\text{MeV}$, and falls gently to $\approx 7.6\,\text{MeV}$ at uranium.

**Why the curve has that shape — the semi-empirical mass formula (SEMF).** Model the nucleus as a charged liquid drop; each physical effect is one term of $B$:

$$B \approx \underbrace{a_V A}_{\text{volume}} - \underbrace{a_S A^{2/3}}_{\text{surface}} - \underbrace{a_C \frac{Z^2}{A^{1/3}}}_{\text{Coulomb}} - \underbrace{a_A \frac{(N-Z)^2}{A}}_{\text{asymmetry}} \;\pm\; \underbrace{\delta}_{\text{pairing}}$$

with roughly $a_V\approx 15.8,\ a_S\approx 18.3,\ a_C\approx 0.71,\ a_A\approx 23.2$ MeV (you won't memorize these). Reading the terms is what matters:

- **Volume $+a_V A$** — the strong force is short-range, so each nucleon bonds only to its neighbors; total glue is roughly proportional to how many nucleons there are. *This alone would make $B/A$ a flat constant $\approx a_V$.*
- **Surface $-a_S A^{2/3}$** — nucleons on the surface have fewer neighbors, so they're under-bound. Small nuclei are almost all surface, so this penalty is huge for them and shrinks as $A$ grows. *This is why $B/A$ rises steeply on the left.*
- **Coulomb $-a_C Z^2/A^{1/3}$** — protons repel each other over long range; this grows like $Z^2$ and dominates in heavy, proton-rich nuclei. *This is why $B/A$ falls off on the right.*
- **Asymmetry $-a_A(N-Z)^2/A$** — a quantum (Pauli) effect: nucleons fill energy levels, and balancing $N\approx Z$ keeps them low. Straying from $N=Z$ costs energy.
- **Pairing $\pm\delta$** — nucleons like to pair up; even–even nuclei are extra bound, odd–odd extra loose. *This is the small even/odd zigzag on the curve.*

*In words: surface tension holds the light nuclei back, Coulomb repulsion drags the heavy ones down, and the tug-of-war peaks near iron.*

**The valley of stability.** The asymmetry term wants $N=Z$; the Coulomb term wants fewer protons, i.e. **extra neutrons** to dilute the repulsion. Their balance sets the most-bound $N/Z$ for each $A$: light stable nuclei sit at $N\approx Z$ (like $^{12}\text{C}$, $^{16}\text{O}$), but heavy ones must be neutron-rich ($N/Z\approx 1.5$ near uranium). Plot $N$ against $Z$ and the stable nuclides form a curving band — the **valley (or line) of stability**. Nuclei off the band decay back toward it (Lesson 1.3): too many neutrons and they $\beta^-$-decay, too few and they $\beta^+$-decay or capture an electron.

## Picture

![Binding energy per nucleon B/A versus mass number A: a steep rise through light nuclei, an iron peak near 8.8 MeV, and a gentle decline to uranium, with coral arrows showing fusion climbing from the left and fission climbing from the right, both toward the peak](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (compute $B$ and $B/A$ — the core skill).** Find the binding energy of $\ce{^{4}_{2}He}$ (atomic mass $M = 4.002602\,\text{u}$) and its binding energy per nucleon. Here $Z = 2$, $N = 2$, $A = 4$.

Step 1 — mass defect with atomic masses:

$$\Delta m = 2\,m_H + 2\,m_n - M = 2(1.007825) + 2(1.008665) - 4.002602.$$

$$\Delta m = 2.015650 + 2.017330 - 4.002602 = 4.032980 - 4.002602 = 0.030378\,\text{u}.$$

Step 2 — convert to energy:

$$B = \Delta m\,c^2 = 0.030378\,\text{u} \times 931.494\,\frac{\text{MeV}}{\text{u}} \approx 28.30\,\text{MeV}.$$

Step 3 — per nucleon:

$$\frac{B}{A} = \frac{28.30}{4} \approx 7.07\,\text{MeV/nucleon}.$$

So it takes about 28 MeV to tear a helium-4 nucleus into two free protons and two free neutrons. Its $B/A$ of 7.1 MeV is remarkably high for such a light nucleus (that unusual stability is why $\alpha$ particles exist as a decay product at all, Lesson 1.4).

**Example 2 (energy from the curve — no reaction algebra needed).** Estimate the energy released when a $\ce{^{235}U}$ nucleus (plus the neutron that triggers it) fissions into two mid-mass fragments, using only the $B/A$ curve.

The trick: **total binding energy released = (final $B/A$ − initial $B/A$) × number of nucleons.** Read off the curve. Uranium sits at $B/A \approx 7.6\,\text{MeV}$. Typical fission fragments (mass numbers near 90 and 140) sit up around $B/A \approx 8.5\,\text{MeV}$. Nucleons are conserved: $235 + 1 = 236$ nucleons rearrange, none vanish. So

$$Q \approx \left(\frac{B}{A}\bigg|_{\text{fragments}} - \frac{B}{A}\bigg|_{\text{U}}\right)\times A \approx (8.5 - 7.6)\,\frac{\text{MeV}}{\text{nucleon}} \times 236\,\text{nucleons} \approx 0.9 \times 236 \approx 210\,\text{MeV}.$$

That is the famous **~200 MeV per fission** — pinned down here to order of magnitude by two numbers off a curve. The fragments are *more tightly bound* than uranium (higher on the hump), and each nucleon's binding gain, summed over 236 nucleons, is the payout. Compare a chemical reaction (a few eV per atom): fission is a factor of $\sim 10^8$ more energetic, which is the entire reason nuclear power exists. (Lesson 3.1 accounts for exactly where those ~200 MeV go.)

## Watch out

- **You might think the mass defect means mass was destroyed.** It wasn't — mass and energy are the same ledger. The "missing" 0.03 u of helium left as 28 MeV of binding energy when the nucleus formed; supply 28 MeV and the mass comes right back as free nucleons. Nothing is lost, just converted.
- **You might read the downhill side of the curve as "heavy nuclei are unbound."** Uranium's $B/A \approx 7.6\,\text{MeV}$ is still strongly positive — it's very much bound, just *less tightly than iron*. "Below the peak" means "can release energy by moving toward the peak," not "falls apart on its own." (It's bound enough to be nearly stable; its slow decay is a separate, much smaller effect.)
- **You might mix nuclear and atomic masses.** If you use the neutral-atom mass $M_{\text{atom}}$, you must pair it with $m_H$ (the hydrogen *atom*), not the bare proton $m_p$ — that's how the $Z$ electron masses cancel. Mixing $m_p$ with an atomic $M$ throws off $B$ by $Z$ electron masses.

## One-liner

> A nucleus weighs less than its parts, and that missing mass times $c^2$ is its glue — iron is glued tightest, so both splitting heavy nuclei and fusing light ones release energy by climbing toward the iron peak.

## Problems

**P1 (🟢)** Compute the binding energy and $B/A$ of $\ce{^{12}_{6}C}$, whose atomic mass is exactly $12.000000\,\text{u}$ by definition. Use $m_H = 1.007825\,\text{u}$, $m_n = 1.008665\,\text{u}$, $1\,\text{u} = 931.494\,\text{MeV}/c^2$.

**P2 (🟡)** The D–T fusion reaction $\ce{^{2}_{1}H + ^{3}_{1}H -> ^{4}_{2}He + ^{1}_{0}n}$ powers most fusion-reactor designs. Given binding energies $B(\ce{^{2}H}) = 2.22\,\text{MeV}$, $B(\ce{^{3}H}) = 8.48\,\text{MeV}$, $B(\ce{^{4}He}) = 28.30\,\text{MeV}$ (a free neutron has $B=0$), find the energy released $Q$. Then compare the energy released **per nucleon** with fission's (~200 MeV over 236 nucleons) — which process is more efficient per unit of fuel mass?

**P3 (🔴, optional)** Using the SEMF terms, explain why the most stable nuclei shift from $N \approx Z$ for light elements to $N \approx 1.5\,Z$ for heavy ones. Which term pulls toward $N=Z$, which pulls toward extra neutrons, and why does the neutron-rich side win as $Z$ grows? Connect your answer to the shape of the valley of stability.

<details>
<summary>Solutions</summary>

**P1.** $Z = 6$, $N = 6$, $A = 12$. Mass defect:

$$\Delta m = 6\,m_H + 6\,m_n - M = 6(1.007825) + 6(1.008665) - 12.000000.$$

$$\Delta m = 6.046950 + 6.051990 - 12 = 12.098940 - 12 = 0.098940\,\text{u}.$$

Binding energy:

$$B = 0.098940 \times 931.494 \approx 92.16\,\text{MeV}, \qquad \frac{B}{A} = \frac{92.16}{12} \approx 7.68\,\text{MeV/nucleon}.$$

*Check.* $B/A \approx 7.7\,\text{MeV}$ sits sensibly between helium's 7.07 (Example 1) and the iron peak's 8.8, exactly where $A=12$ lands on the rising limb of the curve. ✓ Units: u × (MeV/u) = MeV. ✓

**P2.** Nucleons are conserved ($2+3 = 4+1 = 5$), so the energy released is just the *gain* in total binding energy. Neutrons and protons are the same bag of parts before and after; only how tightly they're bound changes:

$$Q = B(\text{products}) - B(\text{reactants}) = \big[B(\ce{^{4}He}) + 0\big] - \big[B(\ce{^{2}H}) + B(\ce{^{3}H})\big].$$

$$Q = 28.30 - (2.22 + 8.48) = 28.30 - 10.70 = 17.6\,\text{MeV}.$$

Per nucleon: fusion delivers $17.6/5 \approx 3.5\,\text{MeV}$ **per nucleon**, while fission delivers $200/236 \approx 0.85\,\text{MeV}$ per nucleon. So D–T fusion releases roughly **four times more energy per nucleon of fuel** than fission — a direct consequence of the curve being much *steeper* on the light-nucleus (fusion) side than on the heavy (fission) side. Climbing from hydrogen's basement to helium's plateau is a bigger jump per nucleon than trimming uranium down toward the peak.

*Check.* The accepted D–T yield is 17.6 MeV — spot on. The steep left limb vs. gentle right limb in the Picture is exactly why fusion wins per nucleon. ✓

**P3.** Two SEMF terms fight over $N/Z$:

- The **asymmetry term** $-a_A(N-Z)^2/A$ is minimized (least penalty, most binding) at $N = Z$. It's a quantum Pauli effect: protons and neutrons fill separate ladders of energy levels, and keeping the two ladders level — $N \approx Z$ — keeps every nucleon as low as possible. This term pulls toward $N = Z$.
- The **Coulomb term** $-a_C Z^2/A^{1/3}$ penalizes *protons* specifically, since only they repel. For a fixed mass number $A$, you can lower the Coulomb cost by trading protons for neutrons — pulling toward **extra neutrons** ($N > Z$).

For light nuclei $Z$ is small, so the $Z^2$ Coulomb push is weak and the asymmetry term wins: stability sits at $N \approx Z$ (hence $^{12}$C, $^{16}$O with $N = Z$). As $Z$ grows, the Coulomb term's $Z^2$ scaling makes it grow much faster than the asymmetry cost, so the optimum drifts steadily neutron-rich, reaching $N/Z \approx 1.5$ near uranium. Plotting the winning $(Z, N)$ for each $A$ traces the **valley of stability**: a band that hugs the $N = Z$ diagonal for light elements and bends increasingly above it (more neutrons) for heavy ones. Nuclei off the band slide back toward it by beta decay (Lesson 1.3).

*Check.* Consistent with real data: $^{40}$Ca has $N = Z = 20$ (light, on the diagonal), while $^{238}$U has $N = 146$, $Z = 92$, i.e. $N/Z \approx 1.59$ (heavy, well above it). ✓

</details>

## Connections

- **Backward:** the mass–energy bookkeeping and the u/MeV/$c^2$ unit web are straight from [1.1 The nucleus and its bookkeeping](01-01-nucleus-bookkeeping.md); this lesson turns that ledger into the single most useful curve in the course. The nuclear radius $\sim A^{1/3}$ from 1.1 is exactly what makes the SEMF surface term go as $A^{2/3}$ (surface area) and the Coulomb term as $Z^2/A^{1/3}$.
- **Forward:** the height of the $B/A$ curve *is* the energy source. [3.1 The fission process and its energy](03-01-fission-process-energy.md) cashes the heavy-side climb into the ~200 MeV per fission you estimated in Example 2; [4.1 Fusion basics](04-01-fusion-basics.md) cashes the steep light-side climb (P2's 17.6 MeV) but must first beat the Coulomb barrier. The valley of stability sets up every decay mode in [1.3](01-03-radioactivity-decay-law.md) and [1.4](01-04-decay-chains-equilibrium.md).
- **Sideways (relativity):** $B = \Delta m\,c^2$ is $E=mc^2$ made weighable — the one place mass–energy equivalence shows up as a number you can read off a balance, bridging to a dedicated relativity course. The asymmetry and pairing terms are Pauli-exclusion and pairing effects you'll meet again in [quantum mechanics](../../quantum-mechanics/syllabus.md).
