# Biophysics · Lesson 2.3: Ligand binding and receptor occupancy

> ⏱ ~15 min · Module 2: Free energy and the Boltzmann distribution in biology · Builds on: [2.2 The Boltzmann distribution and two-state systems](02-02-boltzmann-two-state.md), [2.1 Free energy and the cell's currency](02-01-free-energy-cell-currency.md) · Unlocks: [2.4 Cooperativity and allostery](02-04-cooperativity-allostery.md)

## Why this matters

Almost everything a cell *senses* — a hormone, a drug, a neurotransmitter, a nutrient — it senses by binding. A receptor sits in the membrane and, moment to moment, is either empty or clutching a ligand; what the cell "reads" is the **fraction of receptors bound**. That fraction as a function of ligand concentration is the **binding curve**, and its single most important number is the **dissociation constant $K_d$** — the concentration at which the receptor is half-full. When a pharmacologist quotes a drug's affinity, or a biochemist reports how tightly a transcription factor grips DNA, they are quoting a $K_d$. This lesson derives the binding curve *twice* — once from chemistry (mass action), once from statistical mechanics (a two-state site in a bath of ligand) — and shows the two answers are the same curve. That agreement is the whole point of the course: biology's rate and equilibrium laws are stat mech in disguise.

## The idea

Picture one receptor site. It flickers: empty, occupied, empty, occupied, thermally jostled billions of times a second. Turn up the ligand concentration $[L]$ and the site spends a larger fraction of its time occupied — but not without limit, because a full site can't get any fuller. So the fraction bound $p$ climbs from 0, passes through $\tfrac12$, and flattens toward 1. The concentration at that halfway point *is* the affinity: if it takes a lot of ligand to half-fill the site, the site binds weakly (large $K_d$); if a whisper of ligand already half-fills it, it binds tightly (small $K_d$).

Here's the one-sentence version to carry away: **a receptor is half-full when the ligand concentration equals $K_d$**, so $K_d$ is literally "the concentration at half-occupancy," and small $K_d$ means tight binding. Everything below is bookkeeping around that fact.

## The formal version

### (a) Law of mass action

A ligand $L$ binds a receptor $R$ reversibly:

$$R + L \;\rightleftharpoons\; RL.$$

At equilibrium the forward (binding) and backward (unbinding) rates balance, and the ratio of concentrations settles to a constant. Written as an *unbinding* constant, the **dissociation constant** is

$$K_d \equiv \frac{[R]\,[L]}{[RL]},$$

where $[R]$, $[L]$, $[RL]$ are the equilibrium concentrations (say in molar, M) of free receptor, free ligand, and complex. *In words: $K_d$ measures how readily the complex falls apart — it has units of concentration, and it is large when the complex is fragile.*

The receptor is either free or bound, so the **fraction bound** (the occupancy) is

$$p = \frac{[RL]}{[R] + [RL]}.$$

Divide top and bottom by $[R]$ and use $[RL]/[R] = [L]/K_d$ (straight from the definition of $K_d$):

$$\boxed{\,p = \frac{[L]/K_d}{1 + [L]/K_d} = \frac{[L]}{K_d + [L]}\,}$$

This is the **Langmuir isotherm**. *In words: occupancy is a hyperbola in $[L]$ that starts at 0, hits $\tfrac12$ when $[L]=K_d$, and saturates at 1.* (This is the first half of **Boss problem 2**.)

### (b) The statistical / grand-canonical view

Now forget chemistry and treat the site as a **two-state system** from [2.2](02-02-boltzmann-two-state.md): it is either *empty* (reference energy 0) or *occupied* by a ligand pulled out of the surrounding solution. Because a particle is exchanged with a reservoir, the relevant weight for the occupied state carries the ligand's **chemical potential** $\mu$ (from [2.1](02-01-free-energy-cell-currency.md)) — the free-energy "price" of one ligand from solution:

$$\mu = \mu^\circ + k_BT\ln\!\frac{[L]}{c^\circ},$$

with $c^\circ$ a reference concentration (the standard state, e.g. 1 M) and $\mu^\circ$ its reference potential. Let $\varepsilon_b$ be the energy of the occupied site. The two Boltzmann-style weights are

$$\underbrace{1}_{\text{empty}}, \qquad \underbrace{e^{-(\varepsilon_b - \mu)/k_BT}}_{\text{occupied}},$$

so the occupancy is the occupied weight over their sum:

$$p = \frac{e^{-(\varepsilon_b-\mu)/k_BT}}{1 + e^{-(\varepsilon_b-\mu)/k_BT}}.$$

That's exactly the sigmoid $p = 1/(1+e^{\Delta E/k_BT})$ from [2.2](02-02-boltzmann-two-state.md), with the energy gap $\Delta E = \varepsilon_b - \mu$ now *tuned by the ligand concentration through $\mu$*. Substitute $\mu$ and collect the concentration factor:

$$e^{-(\varepsilon_b-\mu)/k_BT} = \frac{[L]}{c^\circ}\,e^{-(\varepsilon_b-\mu^\circ)/k_BT} \equiv \frac{[L]}{K_d}, \qquad \boxed{\,K_d = c^\circ\,e^{\,\Delta E_{\text{bind}}/k_BT}\,},$$

where $\Delta E_{\text{bind}} \equiv \varepsilon_b - \mu^\circ$ is the net binding energy (negative = favorable). Plugging back gives

$$p = \frac{[L]/K_d}{1 + [L]/K_d}$$

— the **same Langmuir curve**. *In words: the "energy gap" of the binding switch isn't fixed; raising $[L]$ raises the ligand's chemical potential, which tilts the two-state system toward "occupied." The tilt point — where the gap crosses zero — sits at $[L]=K_d$.* And $K_d = c^\circ e^{\Delta E_{\text{bind}}/k_BT}$ tells you the whole affinity is set by *one number*, the binding energy in units of $k_BT$: bind $\sim\!14\,k_BT$ more tightly and $K_d$ drops by $e^{14}\approx 10^{6}$.

### Reading the curve

- **Midpoint:** $p=\tfrac12$ exactly when $[L]=K_d$. This is how you *measure* $K_d$ — find the concentration at half-occupancy.
- **Shape:** a hyperbola in $[L]$; a sigmoid when you plot against $\log[L]$ (see the figure). It saturates at $p\to1$ for $[L]\gg K_d$ and rises linearly, $p\approx[L]/K_d$, for $[L]\ll K_d$.
- **Affinity ↔ free energy:** since $K_d = c^\circ e^{\Delta E_{\text{bind}}/k_BT}$, the standard binding free energy is $\Delta G_{\text{bind}} = k_BT\ln(K_d/c^\circ)$. Real hormone and drug receptors have $K_d \sim$ nM–µM, i.e. $\Delta G_{\text{bind}}\approx -14$ to $-21\,k_BT$ (roughly $-8$ to $-12$ kcal/mol) — a dozen hydrogen bonds' worth, no more.
- **Dynamic range is broad:** a single site needs an **81-fold** change in $[L]$ to swing occupancy from 10% to 90% (derived below). That sluggishness is *why* cells build cooperative switches — the subject of [2.4](02-04-cooperativity-allostery.md).

## Picture

![Langmuir binding curve: fraction bound p rising as a sigmoid against log ligand concentration, with the half-occupancy point marked at [L] equal to K_d and the 10-to-90 percent span marked as 81-fold](assets/02-03-fig1.svg)

## Worked examples

**Example 1 (occupancy at a given concentration).** Where does the curve sit at $[L]=0.1\,K_d$ and at $[L]=10\,K_d$? Use $p = ([L]/K_d)/(1+[L]/K_d)$ with $x\equiv[L]/K_d$:

$$x=0.1:\quad p=\frac{0.1}{1.1}\approx 0.091\;(9\%), \qquad x=10:\quad p=\frac{10}{11}\approx 0.909\;(91\%).$$

So dialing $[L]$ from a tenth of $K_d$ to ten times $K_d$ — a hundredfold change — moves the site from 9% to 91% full. Notice the symmetry about the midpoint: $x$ and $1/x$ give occupancies that add to 1.

**Example 2 (from a measurement to $K_d$ and $\Delta G_{\text{bind}}$).** You titrate a receptor with a hormone and find it is half-bound at $[L]=20\ \text{nM}$. Then, by definition, $K_d = 20\ \text{nM}$ — no fitting of the whole curve required, just the midpoint. The binding free energy (standard state $c^\circ=1$ M $=10^9$ nM) is

$$\Delta G_{\text{bind}} = k_BT\ln\!\frac{K_d}{c^\circ} = k_BT\ln\!\frac{20}{10^{9}} = k_BT\ln(2\times10^{-8}) \approx -17.7\,k_BT.$$

*Check.* $-17.7\,k_BT \times 0.6\ \text{kcal·mol}^{-1}/k_BT \approx -10.5$ kcal/mol — squarely in the measured range for a good nanomolar hormone–receptor pair. Tightening $K_d$ tenfold (to 2 nM) would add only $k_BT\ln 10\approx 2.3\,k_BT$ of binding energy; affinity is exponentially sensitive to a linear change in energy.

## Watch out

- **You might read $K_d$ as "how much binds."** It isn't an amount — it's the *concentration at which half the sites are occupied*. A tiny $K_d$ means **tight** binding (little ligand needed), which feels backwards until you remember $K_d$ is a *dis*sociation constant: small $K_d$ = reluctant to dissociate.
- **You might expect a switch and get a ramp.** A single site's curve is gentle — two decades of $[L]$ to go from mostly-empty to mostly-full. Sharpness beyond that is impossible for one independent site; it requires *cooperativity* ([2.4](02-04-cooperativity-allostery.md)).
- **You might drop the $c^\circ$ in $\Delta G_{\text{bind}}$.** $\ln(K_d)$ alone is dimensionally illegal — you can only take the log of a pure number. Always divide by the reference $c^\circ$ first; that reference is exactly what makes $\mu^\circ$ (hence $\Delta G_{\text{bind}}$) well-defined.

## One-liner

> A single binding site fills as the Langmuir hyperbola $p=[L]/(K_d+[L])$ — half-full at $[L]=K_d$, which is both the affinity and the binding energy in disguise, $K_d = c^\circ e^{\Delta G_{\text{bind}}/k_BT}$.

## Problems

**P1 (🟢)** A receptor has $K_d = 50\ \text{nM}$ for its ligand. What fraction is bound at $[L]=5\ \text{nM}$? At $[L]=500\ \text{nM}$? *Check:* the two answers should be near-mirror images about $\tfrac12$.

**P2 (🟡)** In a titration, a transcription factor is 50% bound to a DNA site at $[L]=8\ \text{nM}$. (a) State its $K_d$. (b) Compute $\Delta G_{\text{bind}}$ in $k_BT$ and in kcal/mol (use $k_BT\approx0.6$ kcal/mol, $c^\circ=1$ M). *Check:* it should land in the $-15$ to $-20\,k_BT$ band typical of specific protein–DNA binding.

**P3 (🔴, optional — Boss 2 setup)** For a single site, show that moving occupancy from $p=0.1$ to $p=0.9$ requires an 81-fold increase in $[L]$. Then, in one sentence, say why a cell that needs a sharp on/off response to a small change in ligand cannot use one independent site.

<details>
<summary>Solutions</summary>

**P1** Let $x=[L]/K_d$. At $[L]=5$ nM, $x=5/50=0.1$, so

$$p=\frac{0.1}{1.1}\approx 0.091\;(9.1\%).$$

At $[L]=500$ nM, $x=500/50=10$, so

$$p=\frac{10}{11}\approx 0.909\;(90.9\%).$$

*Check.* $[L]=5$ and $500$ nM are a factor of $10$ below and above $K_d$, i.e. $x$ and $1/x$; their occupancies $0.091$ and $0.909$ sum to 1, the mirror symmetry the Langmuir form guarantees. ✓

**P2** (a) Half-occupancy occurs at $[L]=K_d$ by definition, so $K_d = 8\ \text{nM}$.

(b) With $c^\circ = 1\ \text{M} = 10^{9}\ \text{nM}$,

$$\Delta G_{\text{bind}} = k_BT\ln\!\frac{K_d}{c^\circ} = k_BT\ln\!\frac{8}{10^{9}} = k_BT\ln(8\times10^{-9}) \approx -18.6\,k_BT.$$

In kcal/mol: $-18.6 \times 0.6 \approx -11.2$ kcal/mol.

*Check.* $-18.6\,k_BT$ sits in the $-15$ to $-20\,k_BT$ band expected for a specific transcription-factor–DNA contact, and $-11$ kcal/mol matches tabulated values. ✓

**P3** Set $p=([L]/K_d)/(1+[L]/K_d)$ and solve for $[L]/K_d$: $\;[L]/K_d = p/(1-p)$. Then

$$p=0.1:\; \frac{[L]}{K_d}=\frac{0.1}{0.9}=\frac19, \qquad p=0.9:\; \frac{[L]}{K_d}=\frac{0.9}{0.1}=9.$$

The required fold-change is $9 \big/ \tfrac19 = 81$.

Why it matters: a single independent site is a *shallow* sensor — it takes almost two orders of magnitude of extra ligand to go from "barely on" to "nearly full," so it cannot convert a small fractional change in signal into a decisive all-or-none response. Sharpening that response is exactly what cooperativity buys ([2.4](02-04-cooperativity-allostery.md)).

*Check.* The 81 is $9^2$, and $9 = 0.9/0.1$; for a Hill curve of coefficient $n$ the span shrinks to $81^{1/n}$, so $n=2$ needs only $9$-fold — the preview of 2.4. ✓

</details>

## Flashback

**From Lesson 2.2 (The Boltzmann distribution and two-state systems):** An ion channel gates between *closed* (energy 0) and *open* (energy $\Delta E = +2\,k_BT$ above closed). Using the two-state occupancy $p_{\text{open}} = 1/(1+e^{\Delta E/k_BT})$, what fraction of the time is it open? How would $\Delta E$ have to change to make it open half the time? (Fresh variant — a gating switch, not a binding site.)

<details>
<summary>Solution</summary>

With $\Delta E = +2\,k_BT$,

$$p_{\text{open}} = \frac{1}{1+e^{2}} = \frac{1}{1+7.39}\approx 0.12\;(12\%).$$

Half-open requires the two states to be equally weighted, i.e. the energy gap to vanish: $\Delta E = 0$. Lowering the open-state energy by $2\,k_BT$ (making open and closed degenerate) does it.

*Check.* $p_{\text{open}}=\tfrac12$ exactly when $\Delta E=0$, mirroring this lesson's binding curve, which hits $p=\tfrac12$ when the *effective* gap $\varepsilon_b-\mu$ crosses zero at $[L]=K_d$. Same sigmoid, one driven by a fixed energy, the other by chemical potential. ✓

</details>

## Connections

- **Backward:** this is the two-state Boltzmann switch of [2.2](02-02-boltzmann-two-state.md) with the energy gap *set by ligand concentration* through the chemical potential of [2.1](02-01-free-energy-cell-currency.md) — binding is just gating whose bias you can turn with a dial marked $[L]$.
- **Forward:** [2.4 Cooperativity and allostery](02-04-cooperativity-allostery.md) links several sites so the curve steepens into the Hill function — the 81-fold span collapses toward a true switch. The same mass-action bookkeeping returns in Module 4's reaction kinetics and Michaelis–Menten enzyme kinetics, where the constant $K_M$ plays $K_d$'s role.
- **Sideways (stat mech):** the grand-canonical derivation — a site exchanging particles with a reservoir at chemical potential $\mu = \mu^\circ + k_BT\ln([L]/c^\circ)$ — is the Fermi-occupation / adsorption isotherm from [`stat-mech`](../../stat-mech/syllabus.md); a binding site is a single fermionic "orbital" that holds at most one ligand. The two-state sigmoid it produces is the very curve of [2.2](02-02-boltzmann-two-state.md).
