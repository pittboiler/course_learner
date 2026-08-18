# Inorganic Chemistry · Lesson 2.5: High-Spin, Low-Spin & the Spectrochemical Series

> ⏱ ~15 min · Module 2: Coordination Chemistry & Bonding · Builds on: [2.4 Crystal-Field Theory: Octahedral Splitting](02-04-crystal-field-octahedral-splitting.md), [2.2 Nomenclature & Oxidation State](02-02-nomenclature-oxidation-state.md) · Unlocks: 2.6 (tetrahedral & square-planar fields)

## Why this matters

In [2.4](02-04-crystal-field-octahedral-splitting.md) you split the five d orbitals into a lower $t_{2g}$ set and an upper $e_g$ set, separated by the gap $\Delta_o$. But splitting the *levels* is only half the story — the properties you can actually see (does the complex stick to a magnet? what color is it?) depend on *how the electrons fill those levels*. And for a whole band of metals — $d^4$ through $d^7$ — there are **two legal ways to fill them**, giving the same ion two personalities: **high-spin** (many unpaired electrons, strongly magnetic) or **low-spin** (few or none). This lesson is the rule that decides which one you get, and the ligand ranking — the **spectrochemical series** — that lets you predict it by inspection. It is the engine behind Boss Problem 2 and everything about magnetism in [3.4](03-04-magnetism-of-complexes.md).

## The idea

Filling the split d orbitals is a tug-of-war between two costs.

Putting an electron into an **empty upper ($e_g$) orbital** costs energy $\Delta_o$ — you have to lift it over the gap. But cramming a **second electron into an orbital that already has one** costs energy too: electrons repel, and two of them sharing one small orbital push on each other. Call that cost the **pairing energy** $P$. Every electron, when it reaches the point of decision, "asks": is it cheaper to *climb* ($\Delta_o$) or to *pair up* ($P$)?

- If the gap is **small** ($\Delta_o < P$), climbing is cheap, so electrons spread out into the upper orbitals rather than pair — you get the **maximum number of unpaired electrons**. That's **high spin**. Weak "spread-out" fields do this.
- If the gap is **big** ($\Delta_o > P$), climbing is expensive, so electrons would rather double up in the lower orbitals — you get the **minimum number of unpaired electrons**. That's **low spin**. Strong fields do this.

Here's the clean part: the choice *only exists for $d^4$–$d^7$.* For $d^1$, $d^2$, $d^3$ there's plenty of room in the three lower orbitals — you just drop electrons in singly, no pairing decision, no ambiguity. For $d^8$, $d^9$, $d^{10}$ the lower set is already full, so the extras *have* to go up top and the count is forced. Only in the middle band ($d^4$–$d^7$) does the fourth electron face the real fork: pair down low, or climb up high?

And what sets whether $\Delta_o$ is big or small? Mostly the **ligands**. Chemists measured $\Delta_o$ for the same metal wrapped in different ligands and lined them up smallest-to-largest — that ranking is the **spectrochemical series**. Halides and water sit at the weak end (small $\Delta_o$ → high spin); cyanide and CO sit at the strong end (big $\Delta_o$ → low spin).

## The formal version

**The filling rule.** Fill the $t_{2g}$ and $e_g$ orbitals lowest-energy-first, but compare the two costs at each pairing decision:

$$\text{high spin} \iff \Delta_o < P, \qquad \text{low spin} \iff \Delta_o > P.$$

*In words: pair only when pairing is cheaper than climbing.* $\Delta_o$ is the $t_{2g}$–$e_g$ gap from [2.4](02-04-crystal-field-octahedral-splitting.md); $P$ (kJ/mol) is the energy penalty for forcing two electrons into one orbital.

Applying it to every octahedral $d^n$ count gives the unpaired-electron count $n_{\text{unp}}$:

| $d^n$ | High spin ($\Delta_o<P$) | $n_{\text{unp}}$ | Low spin ($\Delta_o>P$) | $n_{\text{unp}}$ |
|---|---|---|---|---|
| $d^1$ | $t_{2g}^1$ | 1 | (same) | 1 |
| $d^2$ | $t_{2g}^2$ | 2 | (same) | 2 |
| $d^3$ | $t_{2g}^3$ | 3 | (same) | 3 |
| $d^4$ | $t_{2g}^3 e_g^1$ | **4** | $t_{2g}^4$ | **2** |
| $d^5$ | $t_{2g}^3 e_g^2$ | **5** | $t_{2g}^5$ | **1** |
| $d^6$ | $t_{2g}^4 e_g^2$ | **4** | $t_{2g}^6$ | **0** |
| $d^7$ | $t_{2g}^5 e_g^2$ | **3** | $t_{2g}^6 e_g^1$ | **1** |
| $d^8$ | $t_{2g}^6 e_g^2$ | 2 | (same) | 2 |
| $d^9$ | $t_{2g}^6 e_g^3$ | 1 | (same) | 1 |
| $d^{10}$ | $t_{2g}^6 e_g^4$ | 0 | (same) | 0 |

*In words: only the bold rows ($d^4$–$d^7$) have a choice; there the two spin states differ, and that's where "high vs low spin" is a real question.* Notice the filling logic: high spin means "singly occupy all five before pairing anyone" (Hund's rule, as if the gap weren't there); low spin means "fill the lower three completely — pairing them — before touching the top."

**The spectrochemical series.** Ranking ligands by the $\Delta_o$ they produce (weak field → strong field):

$$\ce{I- < Br- < Cl- < F- < OH- < H2O < NH3 < en < NO2- < CN- \approx CO}$$

*In words: left ligands give a small gap (favor high spin); right ligands give a big gap (favor low spin).* Weak-field ligands (halides, water) tend to give high-spin complexes; strong-field ligands (cyanide, carbon monoxide) tend to give low-spin.

Two more knobs raise $\Delta_o$ for a *fixed* ligand, both pushing toward low spin:

- **Higher metal oxidation state.** $\ce{Co^3+}$ pulls the ligands in tighter than $\ce{Co^2+}$, so its $\Delta_o$ is larger. (This is why $\ce{[Co(NH3)6]^3+}$ is low-spin but many $\ce{Co^2+}$ complexes are high-spin.)
- **Going down a group (row).** 4d and 5d metals have larger, more diffuse d orbitals that overlap ligands more strongly — their $\Delta_o$ is roughly 50% larger per row, so **essentially all 4d/5d octahedral complexes are low-spin.**

**Why the series isn't purely electrostatic (ligand-field theory).** Pure crystal-field theory treats ligands as point negative charges — but then a *neutral* CO molecule ought to be feeble, yet it produces the largest $\Delta_o$ of all. The fix is **ligand-field theory**, which restores covalency (real metal–ligand orbital overlap). The strong-field end is dominated by **π-acceptors** like CO and $\ce{CN-}$: they have empty $\pi^*$ orbitals that soak up metal $t_{2g}$ electron density (**back-bonding**), which *lowers* $t_{2g}$ and *widens* $\Delta_o$. The weak-field end is dominated by **π-donors** like the halides, whose filled p orbitals push *up* on $t_{2g}$ and *shrink* $\Delta_o$. So the series is really a π-donor → σ-only → π-acceptor ordering — chemistry the point-charge model can't see.

## Picture

![Two octahedral d-six filling diagrams: a weak-field high-spin case (t2g four, eg two, four unpaired) beside a strong-field low-spin case (t2g six, eg empty, zero unpaired), with the small-versus-large delta-o gap and pairing energy P labeled, above a weak-to-strong spectrochemical series bar](assets/02-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — fill and count).** Take a $d^5$ metal, e.g. $\ce{Mn^2+}$ or $\ce{Fe^3+}$.

- *Weak field (high spin, $\Delta_o < P$):* drop all five in singly, one per orbital — $t_{2g}^3 e_g^2$. Every electron is unpaired: $n_{\text{unp}} = 5$. This is the magnetic maximum, which is why high-spin $d^5$ is special (a half-filled d shell, extra-stable, all spins aligned).
- *Strong field (low spin, $\Delta_o > P$):* stuff the lower three first, pairing as needed — $t_{2g}^5$ (two orbitals paired, one single), $e_g^0$. Only one unpaired: $n_{\text{unp}} = 1$.

Same ion, five unpaired electrons or one, depending only on the ligand. That factor-of-five swing in magnetism is directly measurable — see [3.4](03-04-magnetism-of-complexes.md).

**Example 2 (why you'd care — same metal, opposite spin).** Cobalt(III) is $d^6$. Compare two real complexes:

- $\ce{[CoF6]^3-}$: fluoride is a **weak-field** ligand (left of the series), so $\Delta_o < P$ → **high spin** $t_{2g}^4 e_g^2$, $n_{\text{unp}} = 4$. Paramagnetic.
- $\ce{[Co(NH3)6]^3+}$: ammonia is **stronger field**, and $\ce{Co^3+}$ is a high oxidation state on a first-row metal — both push $\Delta_o$ up past $P$ → **low spin** $t_{2g}^6$, $n_{\text{unp}} = 0$. Diamagnetic.

The metal, oxidation state, and $d$-count are identical. *Only the ligand changed*, and it flipped the complex from four unpaired electrons to none. Predicting that flip from the series — with no measurement — is the whole payoff of this lesson, and exactly what Boss Problem 2 asks for.

## Watch out

- **You might think "strong field" means the electrons have more energy, so they spread out." Backwards.** A strong field makes the *gap* $\Delta_o$ big, which makes climbing *expensive*, so electrons huddle in the low set — **strong field → low spin → fewer unpaired**. Weak field is the spread-out one.
- **You might try to pick high vs low spin for $d^1$–$d^3$ or $d^8$–$d^{10}$.** There's nothing to pick — those counts fill the same way regardless of $\Delta_o$. "High-spin vs low-spin" is only a meaningful question for $d^4$–$d^7$. Saying "$d^3$ is high-spin" is technically vacuous.
- **You might read the series as fixed for a metal.** It ranks *ligands*, but $\Delta_o$ also depends on the metal: raise the oxidation state or go to a 4d/5d metal and even a mid-series ligand can tip you into low spin. The series predicts the *trend*, not an absolute cutoff — the true test is always $\Delta_o$ vs $P$.
- **You might expect neutral CO to be a weak ligand** (it carries no charge, so a point-charge model says "meh"). It's the *strongest* common field ligand — because of π-back-bonding, which is covalency, which crystal-field theory ignores. That gap is exactly why ligand-field theory exists.

## One-liner

> Each d electron chooses the cheaper of two costs — climb the gap $\Delta_o$ or pay the pairing penalty $P$ — so weak-field ligands (small $\Delta_o$) give high spin and strong-field ligands like $\ce{CN-}$ and CO (large $\Delta_o$) give low spin, but only $d^4$–$d^7$ get a vote.

## Problems

**P1 (🟢)** Fill the octahedral splitting diagram and give the number of unpaired electrons for: (a) high-spin $d^5$, (b) low-spin $d^6$, (c) high-spin $d^7$. Write each configuration as $t_{2g}^x e_g^y$.

**P2 (🟡)** Using the spectrochemical series, predict whether each is high- or low-spin, and give $n_{\text{unp}}$: (a) $\ce{[Fe(H2O)6]^2+}$, (b) $\ce{[Fe(CN)6]^4-}$. Both have the same metal in the same oxidation state — what single fact makes them differ?

**P3 (🔴, Boss-2)** For $\ce{[Fe(H2O)6]^2+}$ and $\ce{[Fe(CN)6]^4-}$: (i) assign the iron oxidation state and its $d$-electron count, (ii) use the spectrochemical series to decide high- vs low-spin, (iii) give the number of unpaired electrons for each, and (iv) explain in one sentence why swapping $\ce{H2O}$ for $\ce{CN-}$ flips the spin state.

<details>
<summary>Solutions</summary>

**P1**

(a) **High-spin $d^5$.** Weak field → maximize unpaired: one electron in each of the five orbitals. $t_{2g}^3 e_g^2$, $n_{\text{unp}} = \mathbf{5}$.

(b) **Low-spin $d^6$.** Strong field → fill the lower three completely before going up: all six pack into $t_{2g}$. $t_{2g}^6 e_g^0$, $n_{\text{unp}} = \mathbf{0}$.

(c) **High-spin $d^7$.** Singly occupy all five first (5 electrons: $t_{2g}^3 e_g^2$), then the 6th and 7th must pair — they go into $t_{2g}$ (lower). Result $t_{2g}^5 e_g^2$: in $t_{2g}$, two orbitals paired + one single (1 unpaired); in $e_g$, two singly occupied (2 unpaired). $n_{\text{unp}} = \mathbf{3}$.

**P2**

Iron is $\ce{Fe^2+}$ in both (see P3 for the bookkeeping) → **$d^6$**, a count with a genuine high/low choice.

(a) $\ce{[Fe(H2O)6]^2+}$: water is a **weak-field** ligand → $\Delta_o < P$ → **high spin**, $t_{2g}^4 e_g^2$, $n_{\text{unp}} = \mathbf{4}$.

(b) $\ce{[Fe(CN)6]^4-}$: cyanide is a **strong-field** ligand (far right of the series) → $\Delta_o > P$ → **low spin**, $t_{2g}^6$, $n_{\text{unp}} = \mathbf{0}$.

The single differing fact: **the ligand's field strength.** $\ce{CN-}$ produces a much larger $\Delta_o$ than $\ce{H2O}$, and that pushes the same $d^6$ ion from high spin to low spin.

**P3**

(i) **Oxidation states and $d$-count.** Both ligands are handled as neutral-donor bookkeeping from [2.2](02-02-nomenclature-oxidation-state.md): $\ce{H2O}$ is neutral, $\ce{CN-}$ carries $-1$.
- $\ce{[Fe(H2O)6]^2+}$: six neutral waters contribute 0, so $\text{Fe} = +2$. $\ce{Fe^2+}$ is $[\text{Ar}]3d^6$ → **$d^6$**.
- $\ce{[Fe(CN)6]^4-}$: six $\ce{CN-}$ give $-6$; overall charge $-4$, so $\text{Fe} + (-6) = -4 \Rightarrow \text{Fe} = +2$. Again $\ce{Fe^2+}$ → **$d^6$**.

(ii) **Spin state from the series.** $\ce{H2O}$ sits at the weak-field end → $\Delta_o < P$ → **high spin**. $\ce{CN-}$ sits at the strong-field end → $\Delta_o > P$ → **low spin**.

(iii) **Unpaired electrons.**
- $\ce{[Fe(H2O)6]^2+}$ (high-spin $d^6$): $t_{2g}^4 e_g^2$ → **4 unpaired** (paramagnetic).
- $\ce{[Fe(CN)6]^4-}$ (low-spin $d^6$): $t_{2g}^6 e_g^0$ → **0 unpaired** (diamagnetic).

(iv) **One-sentence why.** Cyanide is a far stronger-field ligand than water, so it opens a $\Delta_o$ larger than the pairing energy $P$ — making it cheaper to pair all six electrons in $t_{2g}$ than to promote any into $e_g$ — which converts the high-spin (4-unpaired) aqua complex into the low-spin (0-unpaired) cyanide complex.

</details>

## Flashback

**From Lesson 2.4 (Crystal-Field Theory: Octahedral Splitting):** The crystal-field stabilization energy (CFSE) of an octahedral complex is $\text{CFSE} = (-0.4\,n_{t_{2g}} + 0.6\,n_{e_g})\,\Delta_o$, where $n_{t_{2g}}$ and $n_{e_g}$ are the electron counts in each set (each $t_{2g}$ electron sits $0.4\,\Delta_o$ below the barycenter, each $e_g$ electron $0.6\,\Delta_o$ above). Compute the CFSE (in units of $\Delta_o$) for a **low-spin $d^6$** complex, and compare it to the **high-spin $d^6$** value.

<details>
<summary>Solution</summary>

**Low-spin $d^6$:** configuration $t_{2g}^6 e_g^0$, so $n_{t_{2g}} = 6$, $n_{e_g} = 0$:

$$\text{CFSE} = (-0.4)(6) + (0.6)(0) = -2.4\,\Delta_o.$$

**High-spin $d^6$:** configuration $t_{2g}^4 e_g^2$, so $n_{t_{2g}} = 4$, $n_{e_g} = 2$:

$$\text{CFSE} = (-0.4)(4) + (0.6)(2) = -1.6 + 1.2 = -0.4\,\Delta_o.$$

*Check.* The low-spin arrangement is far more stabilized ($-2.4\,\Delta_o$ vs $-0.4\,\Delta_o$), because it packs all six electrons into the low-lying $t_{2g}$ set — consistent with a large $\Delta_o$ favoring low spin. (The honest full comparison also adds the extra pairing-energy cost $P$ that low spin pays and subtracts it from the CFSE advantage; low spin wins overall exactly when $\Delta_o > P$, the rule of this lesson.) The two numbers should be quoted as CFSE magnitudes only — the extra pairing electrons carry their own $+P$ bookkeeping. ✓

</details>

## Connections

- **Backward:** this lesson takes the $t_{2g}/e_g$ split and $\Delta_o$ from [2.4](02-04-crystal-field-octahedral-splitting.md) and decides the *occupancy*; the oxidation-state and $d$-count bookkeeping is straight from [2.2](02-02-nomenclature-oxidation-state.md). The high-spin filling is just Hund's rule (from general chemistry's [electron configurations](../../general-chemistry/lessons/01-02-electron-configurations-periodic-table.md)) applied when the gap is negligible.
- **Forward:** [2.6](02-06-tetrahedral-square-planar-fields.md) redoes this occupancy game for other geometries — tetrahedral fields have $\Delta_t \approx \tfrac49\Delta_o$, so small it's almost always high spin, while square-planar $d^8$ is the extreme low-spin case. The unpaired-electron count you get here feeds directly into the spin-only magnetic moment $\mu = \sqrt{n(n+2)}$ in [3.4](03-04-magnetism-of-complexes.md), and $\Delta_o$ becomes the d–d absorption energy (hence color) in [3.3](03-03-electronic-spectra-dd-transitions.md).
- **Sideways:** the π-acceptor back-bonding that makes $\ce{CN-}$ and CO strong-field ligands is the same metal→ligand donation that stabilizes low oxidation states in [organometallic 18-electron counting](04-01-organometallics-18-electron-rule.md), and it governs how heme iron holds $\ce{O2}$ in [bioinorganic chemistry](04-03-bioinorganic-metals-in-life.md). The molecular-orbital picture behind it links to general chemistry's [MO theory](../../general-chemistry/lessons/01-05-molecular-shape-vsepr-hybridization-mo.md).
