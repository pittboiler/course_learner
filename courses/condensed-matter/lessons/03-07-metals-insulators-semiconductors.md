# Condensed Matter · Lesson 3.7: Metals, insulators, and semiconductors

> ⏱ ~15 min · Module 3: Electrons in solids · Builds on: [3.6 Bands, zones, and the density of states](03-06-bands-zones-dos.md), [3.5 The tight-binding model](03-05-tight-binding.md), [3.4 The nearly-free-electron model](03-04-nearly-free-electron.md) · Unlocks: [4.1 Intrinsic semiconductors and carrier statistics](04-01-intrinsic-carriers.md)

## Why this matters

This is the payoff of band theory — the one result that made it worth building bands at all. Why is copper a conductor and diamond an insulator, when both are just atoms in a lattice? The answer is not about which atoms; it is about **how the bands fill**. A single counting rule — two electrons per band per unit cell — plus the size of the gap above the filled states sorts every crystalline solid into metal, insulator, or semiconductor. And the semiconductor branch of that fork is the physical basis of every transistor you own (Module 4). Get this lesson and you can predict a material's conductivity from its valence and a band diagram.

## The idea

Here is the fact that surprises everyone the first time: **a completely filled band carries no current, no matter how many electrons are in it.** Picture all the states of a band occupied. For every electron moving right (crystal momentum $+\mathbf{k}$) there is one moving left ($-\mathbf{k}$) — the two currents exactly cancel, so the net current is zero. Now switch on an electric field. To carry current the electrons would have to speed up, which means moving into states of slightly different $\mathbf{k}$ — but every nearby state is *already occupied*, and Pauli forbids doubling up. The field has nowhere to push them. A filled band is inert, frozen, dead weight.

So conduction requires a **partially filled band** — occupied states with empty states right next door for a field to nudge electrons into. That single requirement, combined with the counting rule from [3.6](03-06-bands-zones-dos.md) (each band holds exactly 2 electrons per unit cell, counting spin), tells you almost everything:

- **One valence electron per cell** (monovalent — Na, Cu, the alkali metals): it *half-fills* the lowest band. Partially filled → **metal**.
- **Two per cell** (divalent — Mg, Ca): *could* exactly fill one band and stop. If the next band sits well above, that would be an insulator. But bands usually **overlap** ([3.6](03-06-bands-zones-dos.md)), so electrons spill into the bottom of the upper band before filling the lower one — both end up partly filled → **metal** (or a **semimetal** if the overlap is tiny). This is why the alkaline earths conduct at all.
- **A filled band with a big empty band above it, separated by a gap:** no partially filled band anywhere → **insulator** if the gap is large, **semiconductor** if the gap is small enough that heat can kick a few electrons across.

That last split — insulator vs semiconductor — is *only* about the size of the gap. Same band structure, different number.

## The formal version

**The three classes**, by where the Fermi level $E_F$ (the top of the occupied states) sits and how big the gap $E_g$ is:

| Class | Band picture | $E_F$ | $g(E_F)$ | $E_g$ |
|---|---|---|---|---|
| **Metal** | a partially filled band | inside a band | $\neq 0$ | — |
| **Insulator** | full valence band, empty conduction band | in the gap | $=0$ | $\gtrsim 4$ eV |
| **Semiconductor** | same as insulator | in the gap | $=0$ (at $T=0$) | $\sim 0.5$–$2$ eV |
| **Semimetal** | two bands with tiny overlap | in both | small | (overlap, not gap) |

*In words: a metal has states to conduct with at the Fermi level; an insulator and a semiconductor do not, and differ only in whether room-temperature heat ($k_BT \approx 0.025$ eV) can promote electrons across the gap.* The valence band is the highest filled band; the conduction band is the lowest empty one; the gap $E_g$ is the energy between them. Silicon ($E_g = 1.1$ eV) and germanium ($0.67$ eV) are semiconductors; diamond ($5.5$ eV) is the same carbon lattice logic taken to a large gap — an insulator.

**Effective mass.** Near a band edge, expand $E(\mathbf{k})$ to second order (the linear term vanishes at an extremum, just like the bottom of a potential well in [`mechanics-refresher` 3.1](../../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md)). In 1D,

$$\frac{1}{m^*} \equiv \frac{1}{\hbar^2}\frac{d^2 E}{dk^2}, \qquad m^* = \hbar^2\left(\frac{d^2 E}{dk^2}\right)^{-1}.$$

*In words: an electron in a band responds to a force as if it had mass $m^*$ — the lattice's whole effect is absorbed into that one number.* A **steep, sharply curved** band (large $d^2E/dk^2$) gives a **light** $m^*$; a **flat** band (small curvature) gives a **heavy** $m^*$. This is what lets us keep using $F = m^*a$ inside a crystal.

**Semiclassical dynamics.** A band electron in fields obeys

$$\hbar\frac{d\mathbf{k}}{dt} = -e\mathbf{E}, \qquad \mathbf{v}_g = \frac{1}{\hbar}\nabla_\mathbf{k} E,$$

with $-e$ the electron charge and $\mathbf{v}_g$ the group velocity of its wavepacket. *In words: the field pushes an electron through $k$-space at a steady rate, and its actual velocity is the slope of the band.* Because $E(-\mathbf{k}) = E(\mathbf{k})$, the velocity is odd, $\mathbf{v}_g(-\mathbf{k}) = -\mathbf{v}_g(\mathbf{k})$ — which is exactly why a *filled* band ($\sum_\text{occupied}\mathbf{v}_g = 0$) carries no current.

**Holes.** Near the *top* of a band the curvature is negative, so $m^* < 0$: an electron there accelerates *backwards* against the field. Rather than track a nearly-full band of billions of electrons with weird negative masses, we track the few *empty* states. An empty state near the top of an otherwise-full valence band behaves as a **hole**: a particle with charge $+e$ and *positive* effective mass. *In words: the absence of a negative-mass, negative-charge electron moves exactly like a present positive-mass, positive-charge particle* — the two sign flips cancel into a clean positive carrier. Holes are why the top of a valence band conducts like positive charges (and why the Hall sign flips, [4.4](04-04-transport-mobility-hall.md)).

## Picture

![Three side-by-side band-filling diagrams: a metal with a partially filled band cut by the Fermi level; an insulator with a full valence band, an empty conduction band, and a large gap; a semiconductor with the same structure but a small gap and a few electrons thermally promoted into the conduction band leaving holes behind](assets/03-07-fig1.svg)

## Worked examples

**Example 1 (classify from valence and overlap).** Four solids:

- **Sodium (Na), 1 valence electron/cell.** Half-fills the lowest band → $E_F$ sits inside it → partially filled → **metal**. ✓ (All alkali metals, by the same argument.)
- **Magnesium (Mg), 2/cell.** Two electrons could fill one band exactly. But the $3s$ and $3p$ bands overlap, so electrons occupy the bottom of the upper band before the lower fills — both bands partly filled → **metal**. Without the overlap, Mg would be an insulator; the overlap is the whole reason divalent metals exist.
- **Diamond (C), 4 valence electrons/cell.** The four $sp^3$ orbitals form a filled bonding band (4 electrons/cell = 2 filled bands) with a **large** gap, $E_g = 5.5$ eV, to the empty antibonding band. No partial filling, gap far above $k_BT$ → **insulator**.
- **Silicon (Si), 4/cell.** *Same structure as diamond*, but $E_g = 1.1$ eV. At room temperature a small but nonzero fraction of electrons are thermally excited across → a few carriers in each band → **semiconductor**.

The lesson: valence sets whether a band can be exactly filled; overlap and gap size decide what that means for conduction.

**Example 2 (effective mass from a tight-binding band — Boss problem 3).** Take the 1D $s$-band from [3.5](03-05-tight-binding.md),

$$E(k) = \varepsilon_0 - 2t\cos(ka),$$

with hopping integral $t > 0$ and lattice spacing $a$. Then

$$v_g = \frac{1}{\hbar}\frac{dE}{dk} = \frac{2ta}{\hbar}\sin(ka), \qquad \frac{d^2E}{dk^2} = 2ta^2\cos(ka), \qquad m^*(k) = \frac{\hbar^2}{2ta^2\cos(ka)}.$$

- **Band bottom, $ka = 0$:** $\cos(ka) = 1$, so $m^* = +\hbar^2/(2ta^2) > 0$ — a normal, positive-mass electron. Large $t$ (wide band, steep curvature) → *light* mass.
- **Band top, $ka = \pi$:** $\cos(ka) = -1$, so $m^* = -\hbar^2/(2ta^2) < 0$. The curvature has flipped: electrons here accelerate *against* the force. This is precisely where we stop bookkeeping electrons and start bookkeeping **holes** — the empty states at the top of the band carry current as charge $+e$.
- **Sign change at $ka = \pi/2$** (band center), where $\cos(ka) = 0$ and $m^* \to \infty$: the curvature passes through zero, an inflection point where a force produces no acceleration at all.

At the zone boundary $k = \pi/a$ this flat band top meets the nearly-free-electron gap of [3.4](03-04-nearly-free-electron.md) — two descriptions of the same edge where $v_g \to 0$ and a gap opens.

## Watch out

- **You might think more electrons means more conduction.** The opposite can hold: a *completely* filled band conducts nothing, while a *half*-filled one conducts beautifully. What matters is empty states next to occupied ones at $E_F$, not the raw electron count.
- **You might think insulator and semiconductor are qualitatively different physics.** They are the *same* band structure — full valence, empty conduction, a gap. The only difference is a number: $E_g \gtrsim 4$ eV vs $E_g \sim 1$ eV. Nature draws no sharp line; "semiconductor" just means "gap small enough that $k_BT$ matters."
- **You might think a negative effective mass is a paradox.** It is just the band curving down near its top. We never observe a negative-mass electron directly — we relabel the empty states as positive-mass, positive-charge holes, and everything behaves normally.
- **You might expect a divalent element to always be an insulator.** Only if its bands don't overlap. In 3D they almost always do, which is why Mg, Ca, and Zn are metals.

## One-liner

> Conduction needs a partially filled band; band-filling (2 electrons/cell) plus gap size sorts solids into metal, insulator, and semiconductor — and the empty states at a filled band's top move as positive holes.

## Problems

**P1 (🟢)** Classify each as metal, semiconductor, or insulator, and say why in one line:
(a) a monovalent element with one half-filled band;
(b) a divalent element whose two lowest bands overlap by 0.5 eV;
(c) a tetravalent crystal with a filled valence band and $E_g = 5.5$ eV;
(d) a tetravalent crystal with a filled valence band and $E_g = 1.1$ eV.

**P2 (🟡)** For the tight-binding band $E(k) = \varepsilon_0 - 2t\cos(ka)$ with $t = 0.5$ eV and $a = 3\ \text{Å}$, compute the group velocity $v_g(k)$, and evaluate the effective mass at the band bottom in units of the free-electron mass $m_e = 9.11\times10^{-31}$ kg. Where in the band is $m^*$ negative, and what do we call the carriers there? ($\hbar = 1.055\times10^{-34}$ J·s, $1\ \text{eV} = 1.602\times10^{-19}$ J.)

**P3 (🔴, optional)** Explain, using $\hbar\,dk/dt = -eE$ and $v_g = \hbar^{-1}\,dE/dk$, why a completely filled band carries zero current *even while a field is applied*. Then argue that removing one electron from the top of that band produces a current equal to that of a single particle of charge $+e$.

<details>
<summary>Solutions</summary>

**P1**
(a) **Metal** — a partially (half) filled band means $g(E_F) \neq 0$; empty states sit right at $E_F$ for a field to use.
(b) **Metal** (a semimetal if the overlap were tiny) — the band overlap prevents the lower band from filling cleanly, so both bands are partly filled. The divalent count *alone* would suggest an insulator, but overlap wins.
(c) **Insulator** — filled valence band, empty conduction band, and $E_g = 5.5$ eV $\gg k_BT \approx 0.025$ eV, so essentially no electrons are thermally promoted.
(d) **Semiconductor** — identical band structure to (c), but $E_g = 1.1$ eV is small enough that a measurable (if tiny) fraction of electrons crosses at room temperature, leaving holes behind.

*Check.* The insulator/semiconductor split turns entirely on $E_g/k_BT$: with $k_BT \approx 0.025$ eV, the promotion factor $e^{-E_g/2k_BT}$ has exponent $E_g/2k_BT = 110$ for diamond versus $22$ for silicon — a suppression differing by dozens of powers of $e$, which is exactly why one insulates and the other conducts weakly. ✓

**P2** Group velocity:
$$v_g(k) = \frac{1}{\hbar}\frac{dE}{dk} = \frac{2ta}{\hbar}\sin(ka).$$
Effective mass at the band bottom ($ka = 0$, $\cos = 1$):
$$m^* = \frac{\hbar^2}{2ta^2}.$$
Plug in $t = 0.5\ \text{eV} = 0.801\times10^{-19}$ J, $a = 3\times10^{-10}$ m:
$$2ta^2 = 2(0.801\times10^{-19})(9\times10^{-20}) = 1.44\times10^{-38}\ \text{J·m}^2,$$
$$m^* = \frac{(1.055\times10^{-34})^2}{1.44\times10^{-38}} = \frac{1.11\times10^{-68}}{1.44\times10^{-38}} = 7.7\times10^{-31}\ \text{kg} \approx 0.85\,m_e.$$
$m^*$ is **negative for the upper half of the band**, $\pi/2 < ka \le \pi$, where $\cos(ka) < 0$. There we describe the empty states as **holes** — positive charge, positive mass.

*Check.* Units of $\hbar^2/(ta^2)$: $(\text{J·s})^2/(\text{J·m}^2) = \text{J·s}^2/\text{m}^2 = \text{kg}$ ✓ (since J $=$ kg·m²/s²). Order of magnitude: $m^* \sim m_e$ is exactly what we expect for a reasonably wide ($\sim 4t = 2$ eV) band. A narrower band (smaller $t$) would give a heavier mass — a flat band means sluggish carriers. ✓

**P3** In a field, every occupied $k$ advances at the same rate: $\dot k = -eE/\hbar$. So the *entire* occupied distribution slides rigidly through $k$-space. For a **filled** band the occupied region is the whole Brillouin zone; sliding it just maps the zone onto itself (a state pushed past the boundary $\pi/a$ re-enters at $-\pi/a$, differing by a reciprocal-lattice vector — the same state). The distribution is unchanged, so the current
$$I \propto \sum_{\text{occ}} v_g(k) = \sum_{\text{occ}} \frac{1}{\hbar}\frac{dE}{dk} = 0$$
stays zero: $v_g$ is odd in $k$ and every $k$ is occupied, so the sum cancels pairwise, before *and* after the field is applied. A filled band cannot carry current.

Now remove the electron at state $k_0$ near the top. The full band's current is zero, so
$$I_{\text{full}} = I_{\text{rest}} + (-e)v_g(k_0) = 0 \;\Longrightarrow\; I_{\text{rest}} = +e\,v_g(k_0).$$
The remaining electrons carry a current equal to that of a *single* particle of charge $+e$ moving with velocity $v_g(k_0)$ — a **hole**. The missing negative charge reads as a present positive charge.

*Check.* Two sign flips reconcile: near the band top $m^* < 0$ (electron) becomes $m^* > 0$ (hole), and charge $-e$ becomes $+e$. Their product $q/m^*$ — which sets the response to a field — is positive both ways, so the hole accelerates sensibly along $+E$. ✓

</details>

## Flashback

**From Lesson 3.4 (The nearly-free-electron model):** In the nearly-free-electron picture, a weak periodic potential opens a gap at the Brillouin-zone boundary equal to twice the magnitude of the relevant Fourier component. If $U_{\mathbf{G}} = 0.4$ eV, what is the band gap there? If this were the only gap above a filled valence band, would the material be a metal, semiconductor, or insulator?

<details>
<summary>Solution</summary>

The nearly-free-electron gap at the zone boundary is $E_g = 2|U_{\mathbf{G}}| = 2(0.4\ \text{eV}) = 0.8$ eV. With a filled valence band below it and $E_g = 0.8$ eV — small, comparable to a few $k_BT$ — the material is a **semiconductor** (gap present, but small enough for thermal promotion). A larger $U_{\mathbf{G}}$ would push it toward insulating behavior; $U_{\mathbf{G}} \to 0$ would close the gap into a metal.

*Check.* The factor of 2 comes from degenerate perturbation theory splitting the two zone-boundary standing waves symmetrically about the free-electron energy — $\pm|U_{\mathbf{G}}|$ each. Units carry straight through: the gap has the units of $U_{\mathbf{G}}$. ✓

</details>

## Connections

- **Backward:** the counting rule (2 electrons/cell/band) and band overlap come straight from [3.6](03-06-bands-zones-dos.md); the tight-binding band used for $m^*$ is from [3.5](03-05-tight-binding.md); the zone-boundary gap is [3.4](03-04-nearly-free-electron.md)'s $2|U_\mathbf{G}|$. The parabolic band edge that defines $m^*$ is the same "every minimum is a spring" expansion as [`mechanics-refresher` 3.1](../../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md).
- **Forward:** [4.1 Intrinsic semiconductors and carrier statistics](04-01-intrinsic-carriers.md) makes the "few electrons cross the small gap" picture quantitative — counting thermal electrons and holes with Fermi–Dirac statistics and the effective masses defined here.
- **Sideways:** the metal/semiconductor/insulator split and the electron/hole picture are the entire foundation of the [`semiconductor-devices`](../../semiconductor-devices/syllabus.md) course — diodes, transistors, and solar cells are all engineered band diagrams built on exactly this lesson.
