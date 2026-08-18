# Biophysics · Lesson 4.4: Membrane potentials — Nernst and Goldman

> ⏱ ~15 min · Module 4: Motors, kinetics, and membrane potentials · Builds on: [4.3 Molecular motors and the Brownian ratchet](04-03-molecular-motors-ratchet.md), [2.1 Free energy and the cell's currency](02-01-free-energy-cell-currency.md) · Unlocks: [4.5 Excitable membranes and the action potential](04-05-excitable-membranes-action-potential.md)

## Why this matters

Every living cell holds a battery. Stick a fine electrode inside a neuron, a muscle fiber, even a yeast cell, and you read roughly $-70$ millivolts relative to outside — the **resting membrane potential**. That voltage is not wired in; it is *maintained* by ion pumps that stack $\mathrm{K}^+$ high inside and $\mathrm{Na}^+$ high outside, and it is the stored energy every nerve impulse spends. This lesson shows you how to compute that voltage from concentrations alone — first for one ion (the **Nernst equation**), then for a real membrane leaking several ions at once (the **Goldman equation**). Get this and the action potential of [4.5](04-05-excitable-membranes-action-potential.md) becomes bookkeeping.

## The idea

Picture $\mathrm{K}^+$ ions crowded inside the cell, sparse outside. Left alone they diffuse *out* down their concentration gradient — that's the same downhill-in-chemical-potential flow from [2.1](02-01-free-energy-cell-currency.md). But $\mathrm{K}^+$ carries charge. Every ion that leaves makes the inside slightly *more negative*, and a negative interior pulls the positive ions back. So two forces fight: the **concentration push** (out) and the growing **electrical pull** (in).

They reach a standoff. At exactly the right voltage the inward electrical pull cancels the outward concentration push, net flow stops, and the membrane just sits there holding that voltage. That balance voltage is the ion's **equilibrium potential** (or **reversal potential**) — its personal happy voltage. Nernst's equation is nothing more than writing "push equals pull" and solving for the voltage.

The twist: a real membrane isn't permeable to just one ion. It leaks $\mathrm{K}^+$, $\mathrm{Na}^+$, $\mathrm{Cl}^-$ — each with its own equilibrium potential, each tugging the membrane toward *its* voltage. The membrane settles at a **weighted average**, weighted by how easily each ion crosses. At rest the membrane is mostly $\mathrm{K}^+$-permeable, so it sits near $V_K \approx -86$ mV. Fling open the $\mathrm{Na}^+$ channels and the average lurches toward $V_{Na} \approx +60$ mV — that lurch *is* the nerve spike.

## The formal version

**Electrochemical potential.** Give the chemical potential of [2.1](02-01-free-energy-cell-currency.md) an electrical term. For an ion of valence $z$ (e.g. $+1$ for $\mathrm{K}^+$, $+2$ for $\mathrm{Ca}^{2+}$) at concentration $c$ sitting where the local voltage is $\varphi$,

$$\bar\mu = \mu^\circ + k_BT\ln c + ze\varphi,$$

where $e = 1.6\times10^{-19}$ C is the elementary charge, $k_BT \approx 4.1$ pN·nm is the thermal energy, and $\mu^\circ$ is the standard reference. *In words: the free energy to place one ion here is the chemical part (how crowded it is) plus the electrical part (how much it costs to put charge $ze$ at voltage $\varphi$).*

**The Nernst equation.** A permeant ion is at equilibrium when its electrochemical potential is equal on both sides, $\bar\mu_{\text{in}} = \bar\mu_{\text{out}}$ — no net free-energy drop across the membrane, so no net flow. Writing it out (the $\mu^\circ$ terms cancel, same ion on both sides):

$$k_BT\ln c_{\text{in}} + ze\varphi_{\text{in}} = k_BT\ln c_{\text{out}} + ze\varphi_{\text{out}}.$$

Solve for the voltage difference $V \equiv \varphi_{\text{in}} - \varphi_{\text{out}}$ (inside minus outside, the sign convention for membrane potential):

$$\boxed{\;V_{\text{ion}} = \frac{k_BT}{ze}\ln\frac{c_{\text{out}}}{c_{\text{in}}}\;}$$

*In words: the equilibrium potential is the voltage at which the electrical pull exactly cancels the concentration push for that ion.* The chemical push wrote $\ln(c_{\text{out}}/c_{\text{in}})$; the electrical pull supplied the $ze$; balancing them fixes $V$.

**The number you memorize.** At body temperature the thermal voltage is

$$\frac{k_BT}{e} \approx 26\ \text{mV},$$

so for a monovalent cation ($z=+1$),

$$V_{\text{ion}} \approx 26\ \text{mV}\cdot\ln\frac{c_{\text{out}}}{c_{\text{in}}} \approx 58\ \text{mV}\cdot\log_{10}\frac{c_{\text{out}}}{c_{\text{in}}}.$$

The $\log_{10}$ form (using $\ln x = 2.3\log_{10}x$) says every **tenfold** concentration ratio is worth about 58 mV. Divide by $z$ for multivalent ions.

**The Goldman–Hodgkin–Katz (GHK) equation.** When several ions leak at once, no single ion is at equilibrium; instead the membrane settles where the *net current is zero*. Solving the constant-field flux equations for that zero-current voltage gives, for the big three,

$$\boxed{\;V_m = \frac{k_BT}{e}\ln\frac{P_K[\mathrm{K}^+]_{\text{out}} + P_{Na}[\mathrm{Na}^+]_{\text{out}} + P_{Cl}[\mathrm{Cl}^-]_{\text{in}}}{P_K[\mathrm{K}^+]_{\text{in}} + P_{Na}[\mathrm{Na}^+]_{\text{in}} + P_{Cl}[\mathrm{Cl}^-]_{\text{out}}}\;}$$

where $P_X$ is the **permeability** of the membrane to ion $X$ (units of a velocity). *In words: the resting voltage is a permeability-weighted blend of the individual Nernst potentials — whichever ion crosses most easily wins the tug-of-war.* Note $\mathrm{Cl}^-$ (an anion, $z=-1$) appears with its concentrations **flipped** — inside on top — which is exactly the sign flip $z=-1$ produces in the single-ion Nernst formula. Set every permeability but one to zero and GHK collapses back to that ion's Nernst potential — a good sanity check.

The key qualitative fact: **as $P_{Na}$ rises, $V_m$ slides away from $V_K$ toward $V_{Na}$.** That is depolarization, and it is the seed of the action potential.

## Picture

![A membrane with K⁺ high inside and Na⁺ high outside; a blue outward concentration-push arrow balanced against a coral inward voltage-pull arrow at V_K; beside it a voltage number line marking V_K ≈ −86, V_rest ≈ −70, V_Na ≈ +60, with a dashed coral arrow showing depolarization toward V_Na as P_Na rises.](assets/04-04-fig1.svg)

## Worked examples

**Example 1 (the classic reversal potentials — this is Boss problem 4).** Typical mammalian concentrations (mM): $[\mathrm{K}^+]_{\text{in}}=140$, $[\mathrm{K}^+]_{\text{out}}=5$; $[\mathrm{Na}^+]_{\text{in}}=15$, $[\mathrm{Na}^+]_{\text{out}}=145$. Both are monovalent, $z=+1$, so use $V = 26\ \text{mV}\cdot\ln(c_{\text{out}}/c_{\text{in}})$:

$$V_K = 26\ln\frac{5}{140} = 26\ln(0.0357) = 26\times(-3.33) \approx -87\ \text{mV},$$

$$V_{Na} = 26\ln\frac{145}{15} = 26\ln(9.67) = 26\times(2.27) \approx +59\ \text{mV}.$$

$\mathrm{K}^+$ is more concentrated **inside**, so its ratio is less than 1, the log is negative, and $V_K$ is negative — the interior must be pulled negative to hold $\mathrm{K}^+$ in. $\mathrm{Na}^+$ is the mirror image: concentrated outside, so $V_{Na}$ is positive. These two numbers, roughly $-86$ and $+60$ mV, are the rails between which every neuron's voltage swings.

**Example 2 (a real resting membrane, and why it depolarizes).** A resting neuron is mostly $\mathrm{K}^+$-permeable but leaks a little $\mathrm{Na}^+$: take the permeability ratio $P_{Na}/P_K = 0.03$ (ignore $\mathrm{Cl}^-$ for clarity). Divide numerator and denominator of GHK by $P_K$ so only the ratio $r \equiv P_{Na}/P_K$ appears:

$$V_m = 26\ln\frac{[\mathrm{K}^+]_{\text{out}} + r\,[\mathrm{Na}^+]_{\text{out}}}{[\mathrm{K}^+]_{\text{in}} + r\,[\mathrm{Na}^+]_{\text{in}}} = 26\ln\frac{5 + 0.03\times145}{140 + 0.03\times15} = 26\ln\frac{9.35}{140.45}.$$

$$V_m = 26\ln(0.0666) = 26\times(-2.71) \approx -70\ \text{mV}.$$

That tiny $\mathrm{Na}^+$ leak is exactly why the true resting potential ($\approx -70$) sits a bit *above* $V_K$ ($\approx -86$): the small $\mathrm{Na}^+$ permeability tugs it toward $V_{Na}$. Now open $\mathrm{Na}^+$ channels so $r$ jumps to $0.1$:

$$V_m = 26\ln\frac{5 + 0.1\times145}{140 + 0.1\times15} = 26\ln\frac{19.5}{141.5} = 26\times(-1.98) \approx -51\ \text{mV}.$$

Raising $P_{Na}$ by a factor of $\sim3$ depolarized the cell by about 19 mV — toward $V_{Na}$, exactly as promised. Push $r$ high enough ($r \gg 1$) and $V_m$ would approach $V_{Na}\approx +60$ mV; that runaway is the rising phase of the spike in [4.5](04-05-excitable-membranes-action-potential.md).

## Watch out

- **You might read $V_K$ as the voltage $\mathrm{K}^+$ *creates*.** It isn't — it's the voltage at which $\mathrm{K}^+$ is *content* (zero net flux). If the real $V_m$ is above $V_K$, $\mathrm{K}^+$ actually flows outward, trying to *drag* $V_m$ back down to $V_K$. Each ion is a spring pulling the membrane toward its own equilibrium potential.
- **You might forget the valence divides.** For $\mathrm{Ca}^{2+}$, $z=+2$, so the prefactor is $26/2 = 13$ mV per natural-log unit. Same concentration ratio, half the voltage per ratio — but calcium's ratio is enormous, so $V_{Ca}$ still ends up strongly positive (P3).
- **You might flip an inside/outside or a sign.** $V = \varphi_{\text{in}} - \varphi_{\text{out}}$ and the log is $\ln(c_{\text{out}}/c_{\text{in}})$ — **out over in**. And in GHK, anions like $\mathrm{Cl}^-$ enter with inside/outside *reversed*. A single flip turns $-86$ into $+86$; always sanity-check the sign against "which side is this ion crowded on."

## One-liner

> Balancing an ion's concentration push against its electrical pull gives the Nernst voltage $V = \tfrac{k_BT}{ze}\ln(c_{\text{out}}/c_{\text{in}})$; a real membrane sits at the permeability-weighted GHK average of these, near $V_K$ at rest and sliding toward $V_{Na}$ when sodium channels open.

## Problems

**P1 (🟢) — Boss 4.** A muscle cell has $[\mathrm{K}^+]_{\text{in}}=150$, $[\mathrm{K}^+]_{\text{out}}=4$, $[\mathrm{Na}^+]_{\text{in}}=12$, $[\mathrm{Na}^+]_{\text{out}}=145$ mM. Using $k_BT/e = 26$ mV, compute $V_K$ and $V_{Na}$. Which one is the resting membrane closer to, and why?

**P2 (🟡)** Using the concentrations in P1 and the two-ion GHK formula $V_m = 26\ln\dfrac{[\mathrm{K}^+]_{\text{out}} + r[\mathrm{Na}^+]_{\text{out}}}{[\mathrm{K}^+]_{\text{in}} + r[\mathrm{Na}^+]_{\text{in}}}$ with $r = P_{Na}/P_K$: (a) find $V_m$ at rest ($r = 0.02$); (b) find $V_m$ when $\mathrm{Na}^+$ channels open to $r = 1$; (c) in one sentence, which way did $V_m$ move and what is that called?

**P3 (🔴, optional)** Calcium is held far out of equilibrium: $[\mathrm{Ca}^{2+}]_{\text{in}} = 100$ nM ($=10^{-4}$ mM) inside, $[\mathrm{Ca}^{2+}]_{\text{out}} = 2$ mM outside. Remembering $z=+2$, compute $V_{Ca}$. Given that a resting cell sits near $-70$ mV, does the electrical force push $\mathrm{Ca}^{2+}$ in or out, and does that reinforce or oppose the concentration gradient?

<details>
<summary>Solutions</summary>

**P1** Both monovalent, $V = 26\ln(c_{\text{out}}/c_{\text{in}})$:

$$V_K = 26\ln\frac{4}{150} = 26\ln(0.0267) = 26\times(-3.62) \approx -94\ \text{mV},$$
$$V_{Na} = 26\ln\frac{145}{12} = 26\ln(12.08) = 26\times(2.49) \approx +65\ \text{mV}.$$

The resting membrane is far closer to $V_K$, because at rest the membrane is overwhelmingly $\mathrm{K}^+$-permeable — $\mathrm{K}^+$ wins the weighted average of the GHK equation.

*Check.* $\mathrm{K}^+$ crowded inside ⇒ negative; $\mathrm{Na}^+$ crowded outside ⇒ positive; magnitudes $\sim$tens of mV, matching real muscle ($V_K$ near $-90$). ✓

**P2** (a) At $r = 0.02$:
$$V_m = 26\ln\frac{4 + 0.02\times145}{150 + 0.02\times12} = 26\ln\frac{6.9}{150.24} = 26\ln(0.0459) = 26\times(-3.08) \approx -80\ \text{mV}.$$

(b) At $r = 1$:
$$V_m = 26\ln\frac{4 + 145}{150 + 12} = 26\ln\frac{149}{162} = 26\ln(0.920) = 26\times(-0.0836) \approx -2\ \text{mV}.$$

(c) $V_m$ jumped from $-80$ mV up to about $-2$ mV — a swing toward $V_{Na}$. That is **depolarization**.

*Check.* At $r=0.02$, $V_m$ ($-80$) sits just above $V_K$ ($-94$), as a small $\mathrm{Na}^+$ leak demands; at $r=1$ the membrane weights $\mathrm{K}^+$ and $\mathrm{Na}^+$ nearly equally and lands roughly midway between $V_K$ and $V_{Na}$. ✓

**P3** Valence $z=+2$, so the prefactor is $26/2 = 13$ mV:

$$V_{Ca} = \frac{26}{2}\ln\frac{[\mathrm{Ca}^{2+}]_{\text{out}}}{[\mathrm{Ca}^{2+}]_{\text{in}}} = 13\ln\frac{2}{10^{-4}} = 13\ln(20000) = 13\times(9.90) \approx +129\ \text{mV}.$$

The real membrane sits near $-70$ mV, far *below* $V_{Ca} = +129$ mV. A cation wants to move toward voltages more negative than its equilibrium potential, so the electrical force drives $\mathrm{Ca}^{2+}$ **inward** — and since $\mathrm{Ca}^{2+}$ is also 20,000-fold more concentrated outside, the concentration gradient *also* drives it inward. The two forces **reinforce**: opening a $\mathrm{Ca}^{2+}$ channel unleashes a huge inward driving force, which is why calcium is biology's favorite fast signal.

*Check.* Divalent halves the per-ratio voltage but the ratio ($2\times10^4$) is gigantic, so $V_{Ca}$ still lands strongly positive ($\sim +120$ to $+140$ mV in real cells). ✓

</details>

## Flashback

**From Lesson 4.2 (Michaelis–Menten kinetics):** An enzyme obeys $v = \dfrac{V_{\max}[S]}{K_M + [S]}$ with $K_M = 2$ mM. At what substrate concentration $[S]$ does the reaction run at 80% of $V_{\max}$? (Fresh variant — a rate fraction, not a half-max.)

<details>
<summary>Solution</summary>

Set $v = 0.8\,V_{\max}$ and cancel $V_{\max}$:

$$0.8 = \frac{[S]}{K_M + [S]} \;\Longrightarrow\; 0.8(K_M + [S]) = [S] \;\Longrightarrow\; 0.8\,K_M = 0.2\,[S] \;\Longrightarrow\; [S] = 4\,K_M = 8\ \text{mM}.$$

*Check.* The general result is $[S] = \dfrac{f}{1-f}K_M$ for fraction $f$; at $f=\tfrac12$ it gives $[S]=K_M$ (the definition of $K_M$), and at $f=0.8$ it gives $4K_M$ ✓. Approaching $V_{\max}$ costs disproportionately more substrate — the saturation curve's long flat tail. ✓

</details>

## Connections

- **Backward:** the electrochemical potential $\bar\mu = \mu^\circ + k_BT\ln c + ze\varphi$ is just [2.1](02-01-free-energy-cell-currency.md)'s chemical potential with an electrical term bolted on; "equal $\bar\mu$ on both sides" is the same *free energy seeks its minimum, flow stops at the flat* logic that drove diffusion in [1.3](01-03-diffusion-ficks-laws.md) and the pump calculation in 2.1's P3. The pumps that build the gradients are the motors of [4.3](04-03-molecular-motors-ratchet.md) spending ATP to hold ions out of equilibrium.
- **Forward:** [4.5 Excitable membranes and the action potential](04-05-excitable-membranes-action-potential.md) makes $P_{Na}$ and $P_K$ *voltage-dependent* — the membrane's own voltage opens the very channels that change it, and the GHK average chases a moving target, producing the spike.
- **Sideways:** the electrochemical potential is the chemical-potential-with-a-field of the [`stat-mech` syllabus](../../stat-mech/syllabus.md), and these reversal potentials are the foundation the [`neuroscience` syllabus](../../neuroscience/syllabus.md) builds cable theory and synaptic integration on top of. The constant-field flux picture behind GHK is a cousin of drift–diffusion in a potential — the same physics as screened charge in [`plasma-physics`](../../plasma-physics/syllabus.md).
