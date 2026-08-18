# General Chemistry · Lesson 1.3: Periodic Trends

> ⏱ ~15 min · Module 1: Atoms, the Periodic Table & Bonding · Builds on: [1.2 Electron configurations & the periodic table](01-02-electron-configurations-periodic-table.md) · Unlocks: [1.4 Ionic & covalent bonds, Lewis structures](01-04-ionic-covalent-bonds-lewis-structures.md)

## Why this matters

The periodic table isn't a lookup chart — it's a **map of behavior**. Where an element sits tells you how big its atoms are, how tightly it grips its own electrons, and how hungrily it grabs someone else's. Those three facts drive nearly all of chemistry: why $\ce{Na}$ hands an electron to $\ce{Cl}$ and slams into ionic salt, why $\ce{F}$ is the bully of the bonding world, why metals are on the left and oxidizers on the right. Master a handful of trends here and you can *predict* reactivity in [1.4](01-04-ionic-covalent-bonds-lewis-structures.md) instead of memorizing it. And it all falls out of one number.

## The idea

That one number is **effective nuclear charge** — how much positive pull a valence electron *actually feels*. The nucleus has $Z$ protons yanking outward electrons in, but the inner electrons sit in the way and cancel part of that pull. A valence electron doesn't feel the full $+Z$; it feels a watered-down version, $Z_\text{eff}$.

Now walk the table. Go **left to right across a period**: you add protons *and* electrons, but the new electrons pile into the *same* outer shell, where they barely block each other. So the nucleus wins — $Z_\text{eff}$ climbs, and the whole shell gets reeled in tighter. Go **down a group**: the valence electrons start a brand-new shell, farther out, with a fat wall of inner electrons shielding them. They feel a looser grip and float far from home.

Everything else is a consequence. Tighter grip → smaller atom, harder to steal an electron from, greedier for more. Looser grip → bigger, easier to ionize, less greedy. Two directions, one cause.

## The formal version

**Effective nuclear charge.** A valence electron feels

$$Z_\text{eff} = Z - S,$$

where $Z$ is the number of protons (the atomic number) and $S$ is the **shielding constant** — roughly the number of inner (core) electrons screening the nucleus. *In words: the true charge minus the part the core electrons cancel out.* Across a period $Z$ rises while $S$ barely moves (same core), so $Z_\text{eff}$ rises; down a group $Z$ rises but $S$ rises just as fast (a full new shell of core added), so $Z_\text{eff}$ creeps up only slightly while the valence shell's quantum number $n$ jumps outward — distance wins.

**Atomic radius** — the size of the electron cloud.

- **Across a period:** decreases (higher $Z_\text{eff}$ pulls the same shell inward).
- **Down a group:** increases (each row adds an outer shell at larger $n$).

**Ionic radius.** Cations are **smaller** than the parent atom (lose the outer shell entirely, and fewer electrons feel a stronger per-electron pull); anions are **larger** (added electrons swell the cloud and increase electron–electron repulsion). In an **isoelectronic series** — species with the *same* electron count — radius shrinks as $Z$ grows, because more protons squeeze the same fixed set of electrons.

**Ionization energy (IE)** — the energy to strip one electron off a gaseous atom, $\ce{X(g) -> X+(g) + e-}$.

- **Across a period:** increases (tighter grip). **Down a group:** decreases (valence electron is farther out and shielded).
- Two small dips break the smooth rise: group 2 → 13 (you start emptying a new, higher-energy $p$ subshell, easier to remove than a filled $s$ pair) and group 15 → 16 (removing an electron *relieves* the pairing repulsion in a half-filled $p^3$, so it comes off easier than the trend predicts).
- **Successive** IEs always rise ($\text{IE}_1 < \text{IE}_2 < \cdots$), and jump *enormously* the moment you break into a noble-gas core — the tell for how many valence electrons an atom has.

**Electron affinity (EA)** — energy *released* when a gaseous atom gains an electron, $\ce{X(g) + e- -> X-(g)}$. Generally more exothermic (more negative, more energy given off) across a period; the **halogens** release the most, since one more electron completes their octet.

**Electronegativity (EN)** — an atom's pull on the electrons *in a shared bond* (Pauling scale, unitless, ~0.7 to 4.0). Increases **up and to the right**; **$\ce{F}$ is the most electronegative element** (3.98). This single number sets **bond polarity**, the whole subject of [1.4](01-04-ionic-covalent-bonds-lewis-structures.md): a big EN gap means a lopsided, ionic-leaning bond.

## Picture

![Schematic periodic table with a blue arrow showing atomic radius increasing down and left, coral arrows showing ionization energy and electronegativity increasing up and right, plus an inset plot of ionization energy vs. atomic number with its periodic sawtooth](assets/01-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — read the trend off the table).** Rank $\ce{Si}$, $\ce{P}$, $\ce{S}$, $\ce{Cl}$ by first ionization energy. All four sit in period 3, moving left to right (groups 14, 15, 16, 17). IE rises across a period, so the naive order is $\ce{Si} < \ce{P} < \ce{S} < \ce{Cl}$. But watch the group 15 → 16 dip: $\ce{P}$ has a stable half-filled $3p^3$, while $\ce{S}$'s $3p^4$ has one *paired* electron whose repulsion makes it come off easily — so $\ce{P}$'s IE actually edges *above* $\ce{S}$'s. Corrected order: $\ce{Si} < \ce{S} < \ce{P} < \ce{Cl}$. That little inversion is exactly the kind of thing $Z_\text{eff}$ alone won't tell you — subshell structure does.

**Example 2 (why you'd care — predicting a bond).** Will $\ce{Na}$–$\ce{Cl}$ be ionic or covalent? $\ce{Na}$ is far left (low $Z_\text{eff}$ on its lone $3s$ electron): tiny ionization energy, near-zero electronegativity — it *wants* to let go. $\ce{Cl}$ is far right (high $Z_\text{eff}$): huge electron affinity, high electronegativity — it *wants* to grab. The electronegativity gap is enormous ($3.16 - 0.93 \approx 2.2$), so the electron doesn't just lean toward $\ce{Cl}$, it transfers outright: $\ce{Na+}$ and $\ce{Cl-}$, an ionic bond. You *predicted* the chemistry of table salt from two positions on the map — that's the payoff, and it's the launchpad for [1.4](01-04-ionic-covalent-bonds-lewis-structures.md).

## Watch out

- **You might think adding electrons across a period should make atoms *bigger*.** It's the reverse: the protons added alongside them raise $Z_\text{eff} $ and reel the *whole* shell in, so atoms *shrink* left to right. Size grows only when you open a new shell (down a group).
- **You might read ionization energy and electron affinity as the same "grip."** IE is about holding an electron you *have*; EA is about grabbing one you *don't*. They usually trend together (both peak top-right), but they're separate measurements — and EA has its own irregularities (e.g. the noble gases and full/half-full subshells resist a new electron).
- **You might expect $\ce{S}$ to be more electronegative than $\ce{O}$ because it has more protons.** More protons, yes — but $\ce{S}$'s valence electrons live in $n=3$, farther out and screened by a bigger core, so its *effective* pull on a shared electron is weaker. Position beats raw proton count: $\ce{O}$ (period 2) outguns $\ce{S}$ (period 3).

## One-liner

> One number rules the table — effective nuclear charge $Z_\text{eff} = Z - S$ — and it says: up and to the right means smaller, harder to ionize, and greedier for electrons.

## Problems

**P1 (🟢)** Rank $\ce{Na}$, $\ce{Mg}$, $\ce{Cl}$, and $\ce{K}$ by **atomic radius** (largest first), and separately by **first ionization energy** (largest first).

**P2 (🟡)** The isoelectronic series $\ce{O^2-}$, $\ce{F-}$, $\ce{Na+}$, $\ce{Mg^2+}$ all have 10 electrons. Rank them by **ionic radius** (largest first) and explain the ordering using $Z_\text{eff}$.

**P3 (🔴)** Rank $\ce{F}$, $\ce{O}$, and $\ce{S}$ by **electronegativity** (highest first). Justify each comparison using $Z_\text{eff}$ and periodic position — in particular, explain why $\ce{O} > \ce{S}$ even though they're in the same group.

<details>
<summary>Solutions</summary>

**P1** Positions: $\ce{Na}$ (period 3, group 1), $\ce{Mg}$ (period 3, group 2), $\ce{Cl}$ (period 3, group 17), $\ce{K}$ (period 4, group 1).

*Radius.* $\ce{K}$ is one period *below* $\ce{Na}$ (new $n=4$ shell) → biggest. Within period 3, radius shrinks left to right as $Z_\text{eff}$ climbs: $\ce{Na} > \ce{Mg} > \ce{Cl}$. So

$$\ce{K} > \ce{Na} > \ce{Mg} > \ce{Cl}.$$

*Ionization energy.* IE runs opposite to radius (tighter grip = harder to remove). $\ce{K}$ (biggest, loosest) is lowest; across period 3, IE rises $\ce{Na} < \ce{Mg} < \ce{Cl}$. So

$$\ce{Cl} > \ce{Mg} > \ce{Na} > \ce{K}.$$

(No half-filled-subshell dip applies among these three period-3 members, so the plain trend holds.)

**P2** All four are isoelectronic with neon ($1s^2 2s^2 2p^6$, 10 electrons), so the shielding $S$ from the core is essentially identical across the series. The *only* thing that changes is the proton count $Z$: $\ce{O}=8$, $\ce{F}=9$, $\ce{Na}=11$, $\ce{Mg}=12$. More protons pulling the *same* 10 electrons means larger $Z_\text{eff} = Z - S$, hence a tighter, smaller cloud. Radius therefore *decreases* as $Z$ rises:

$$\ce{O^2-} > \ce{F-} > \ce{Na+} > \ce{Mg^2+}.$$

$\ce{Mg^2+}$, with 12 protons squeezing 10 electrons, is the most compact; $\ce{O^2-}$, with only 8 protons for the same 10 electrons, is the most swollen.

**P3** Positions: $\ce{F}$ (period 2, group 17), $\ce{O}$ (period 2, group 16), $\ce{S}$ (period 3, group 16). Electronegativity rises up and to the right, so:

$$\ce{F} > \ce{O} > \ce{S}. \qquad (\text{Pauling: } 3.98 > 3.44 > 2.58.)$$

- **$\ce{F} > \ce{O}$:** same period (same $n=2$ valence shell, same core shielding), but $\ce{F}$ has one more proton. Higher $Z$ with unchanged $S$ gives a larger $Z_\text{eff}$, so $\ce{F}$ pulls harder on shared electrons. $\ce{F}$ is in fact the most electronegative element there is.
- **$\ce{O} > \ce{S}$ (the same-group case):** $\ce{S}$ has more protons (16 vs. 8), so naively you'd expect a stronger pull — but its valence electrons sit in $n=3$, one shell farther out, behind a *larger* core (the neon-like 10-electron core screens more than helium-like 2). The extra distance and shielding cancel most of the extra nuclear charge, so $\ce{S}$'s valence electrons feel a *weaker* effective pull on a bond partner's electrons than $\ce{O}$'s do. Periodic position (which shell the valence electrons occupy) beats raw proton count.

</details>

## Flashback

**From Lesson 1.2 (Electron configurations & the periodic table):** Write the ground-state electron configuration of a neutral **selenium** atom ($\ce{Se}$, $Z = 34$), give the noble-gas shorthand, and count its valence electrons.

<details>
<summary>Solution</summary>

Fill subshells in order of increasing energy (Aufbau), 34 electrons total:

$$1s^2\,2s^2\,2p^6\,3s^2\,3p^6\,4s^2\,3d^{10}\,4p^4.$$

Tally: $2+2+6+2+6+2+10+4 = 34$ ✓. The nearest preceding noble gas is argon ($Z=18$), so the shorthand is

$$\ce{[Ar]}\,4s^2\,3d^{10}\,4p^4.$$

**Valence electrons** are those in the outermost principal shell, $n=4$: the $4s^2$ and $4p^4$ electrons. The filled $3d^{10}$ sits *below* $n=4$ and counts as core, not valence. So $\ce{Se}$ has $2 + 4 = \mathbf{6}$ valence electrons — consistent with its spot in group 16, right above the $\ce{S}$ we just ranked.

</details>

## Connections

- **Backward:** the trends are read straight off [1.2](01-02-electron-configurations-periodic-table.md)'s configurations — which shell the valence electrons occupy ($n$) and how many core electrons shield them ($S$) *are* the periodic position. The shielding idea traces further back to the orbital picture of [1.1](01-01-quantum-atom.md), where inner electrons occupy the low-$n$ shells that screen the nucleus.
- **Forward:** electronegativity feeds directly into [1.4](01-04-ionic-covalent-bonds-lewis-structures.md) — the EN gap between two atoms decides ionic vs. polar-covalent vs. nonpolar bonding, and low-IE/high-EA pairs are exactly the ones that form ionic salts. Ionization energies also underpin oxidation-state and redox reasoning later in the course.
- **Sideways (quantum mechanics):** $Z_\text{eff}$ and shielding are the chemist's shorthand for what the multi-electron atom does to the clean hydrogen orbitals — the same screening physics you meet quantitatively in the quantum mechanics track's treatment of many-electron atoms.
