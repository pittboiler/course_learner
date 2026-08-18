# Electrochemistry · Lesson 1.5: The Nernst equation & concentration cells

> ⏱ ~15 min · Module 1: Redox, cells & the thermodynamics of voltage · Builds on: [1.4 Cell EMF, Gibbs energy & equilibrium](01-04-cell-emf-gibbs-equilibrium.md), [`physical-chemistry` 1.6 (fugacity & activity)](../../physical-chemistry/lessons/01-06-fugacity-activity.md) · Unlocks: [2.1 The interface & the electrical double layer](02-01-interface-electrical-double-layer.md)

## Why this matters

The standard cell potential $E^\circ$ from [1.4](01-04-cell-emf-gibbs-equilibrium.md) is a lie the cell tells only when every species sits at unit activity — 1 M ions, 1 bar gases. Real cells almost never do. A battery sags as it drains, a pH meter reads voltage and reports acidity, a glucose sensor turns concentration into current — all of them live in the gap between $E^\circ$ and the *actual* voltage. The **Nernst equation** is the exact bookkeeping for that gap: it tells you how the EMF slides as concentrations move off standard. It is the single most-used equation in the whole subject, and it closes Module 1 by turning the thermodynamics of voltage into a working dial.

## The idea

Le Chatelier, but for voltage. A galvanic cell is a spontaneous reaction you've routed through a wire, and its voltage measures how badly the reaction still *wants* to go. Pile up products (or starve it of reactants) and you've partly satisfied the reaction — it wants to go less hard, so the voltage drops. Flood it with reactants and it strains harder, so the voltage climbs. The voltage is just the reaction's remaining appetite, read on a voltmeter.

Now the twist that closes the module: you don't even need two *different* couples to get a voltage. Take the **same** metal in the **same** salt on both sides — copper in dilute copper sulfate versus copper in concentrated copper sulfate — wire them together, and current flows. There's no chemistry difference to exploit, only a *concentration difference*, and nature will spend that gradient to equalize the two sides. That's a **concentration cell**: voltage squeezed out of pure "unmixedness." It's the electrochemical face of the same entropy-of-mixing that makes gases fill a room.

## The formal version

Start from the two facts you proved in [1.4](01-04-cell-emf-gibbs-equilibrium.md). The Gibbs energy of a reaction away from standard conditions is

$$\Delta G = \Delta G^\circ + RT\ln Q,$$

where $R = 8.314\ \mathrm{J\,mol^{-1}K^{-1}}$, $T$ is temperature (K), and $Q$ is the **reaction quotient** — the same product-over-reactant ratio as the equilibrium constant, but evaluated at the *current* composition, each species raised to its stoichiometric coefficient. *In words: the driving force equals the standard driving force plus a correction for how far the mixture sits from unit activity.* And the electrical link,

$$\Delta G = -nFE, \qquad \Delta G^\circ = -nFE^\circ,$$

with $n$ the moles of electrons transferred per reaction as written and $F = 96485\ \mathrm{C/mol}$ the Faraday constant. Substitute both into the first equation, $-nFE = -nFE^\circ + RT\ln Q$, and divide by $-nF$:

$$\boxed{\,E = E^\circ - \frac{RT}{nF}\ln Q\,}$$

*In words: the actual cell voltage is the standard voltage, docked by a term that grows with how product-heavy the mixture is.* This is the **Nernst equation**. Reading it: $Q > 1$ (products dominate) makes $\ln Q > 0$ and pulls $E$ **below** $E^\circ$; $Q < 1$ (reactants dominate) pushes $E$ **above** $E^\circ$. At equilibrium $Q = K$, the reaction is spent, $E = 0$ — a dead battery — and setting $E=0$ recovers $\ln K = nFE^\circ/RT$ from [1.4](01-04-cell-emf-gibbs-equilibrium.md).

**Activities, honestly.** Strictly, $Q$ is built from **activities**, not concentrations — the "effective" concentrations of [`physical-chemistry` 1.6](../../physical-chemistry/lessons/01-06-fugacity-activity.md): $a_i = \gamma_i [i]/c^\circ$ for a solute (activity coefficient $\gamma_i$, standard state $c^\circ = 1$ M), $a_i = P_i/P^\circ$ for a gas ($P^\circ = 1$ bar), and $a = 1$ for a pure solid or the solvent. Throughout this course we take the dilute approximation $\gamma_i \approx 1$ and write concentrations and pressures directly — clean and usually good to a few millivolts — but remember the exact quantity is the activity.

**The 298 K shortcut.** At $T = 298$ K, convert to base-10 logs ($\ln x = 2.303\log_{10} x$): $\frac{RT}{F}\cdot 2.303 = 0.0257 \times 2.303 = 0.0592\ \mathrm{V}$. So

$$E = E^\circ - \frac{0.0592}{n}\log_{10} Q \quad (\mathrm{volts,\ at\ 298\ K}).$$

*In words: at room temperature, every tenfold change in $Q$ moves the voltage by $0.0592/n$ volts.* This is the number to have in your bones.

**Two everyday specializations.** For a couple that consumes or releases protons — say $\ce{MnO4- + 8H+ + 5e- -> Mn^2+ + 4H2O}$ — $Q$ carries $[\ce{H+}]$ to a power, so $E$ becomes a linear function of pH. Each electron-normalized proton shifts the potential by about **59 mV per pH unit** at 298 K (the sign following whether $\ce{H+}$ is a reactant). For a **gas electrode** like $\ce{2H+ + 2e- -> H2}$, the gas enters $Q$ as its partial pressure, so raising $P_{\ce{H2}}$ (more product) lowers the electrode's reducing potential — the same Nernst term wearing a pressure gauge.

**Concentration cells.** Build a cell from one couple at two activities, $\ce{Cu|Cu^2+(\mathit{C}_\text{low})||Cu^2+(\mathit{C}_\text{high})|Cu}$. Both electrodes have the *same* $E^\circ$, so they cancel: $E^\circ_\text{cell} = 0$. Only $Q$ survives. The concentrated side reduces (deposits metal, thinning itself — the **cathode**); the dilute side oxidizes (dissolves metal, enriching itself — the anode); overall the cell shuttles ions until the two concentrations meet. With $Q = C_\text{low}/C_\text{high}$,

$$E = -\frac{0.0592}{n}\log\frac{C_\text{low}}{C_\text{high}} = \frac{0.0592}{n}\log\frac{C_\text{high}}{C_\text{low}}.$$

*In words: a concentration cell's EMF is set purely by the ratio of the two concentrations, and it runs in whatever direction erases the gradient.*

**One line back to 1.4's thermodynamics.** Because $E$ carries an explicit $T$, its temperature slope is not free: $\left(\partial E/\partial T\right)_P = \Delta S/nF$, the entropy-of-reaction link from [1.4](01-04-cell-emf-gibbs-equilibrium.md) — a cell whose voltage rises with temperature is one whose reaction makes entropy.

## Picture

![Left: a straight line of E versus log Q with slope minus 0.0592 over n, crossing the standard potential E-degrees at Q equals 1. Right: a concentration-cell schematic — the same metal electrode in a dilute and a concentrated beaker joined by a salt bridge and a voltmeter.](assets/01-05-fig1.svg)

The Nernst equation is a *straight line* in $\log Q$: intercept $E^\circ$ at $Q=1$, slope $-0.0592/n$. The whole subject is reading positions on this line. On the right, the concentration cell: identical everything except the concentration, and that alone lights the voltmeter.

## Worked examples

**Example 1 (mechanical — plug the ratio in).** A Daniell cell $\ce{Zn|Zn^2+(0.50 M)||Cu^2+(0.020 M)|Cu}$ runs the reaction $\ce{Zn + Cu^2+ -> Zn^2+ + Cu}$, with $E^\circ = 1.10$ V and $n = 2$. Solids drop out of $Q$, so

$$Q = \frac{[\ce{Zn^2+}]}{[\ce{Cu^2+}]} = \frac{0.50}{0.020} = 25.$$

Then

$$E = 1.10 - \frac{0.0592}{2}\log(25) = 1.10 - 0.0296 \times 1.398 = 1.10 - 0.041 = 1.06\ \mathrm{V}.$$

Products outweigh reactants ($Q>1$), so the voltage sits *below* $E^\circ$ — exactly the Le Chatelier reading.

**Example 2 (why you'd care — voltage as a pH meter).** A hydrogen electrode $\ce{2H+ + 2e- -> H2}$ at $P_{\ce{H2}} = 1$ bar has, by definition, $E^\circ = 0$. Its potential is

$$E = 0 - \frac{0.0592}{2}\log\frac{P_{\ce{H2}}}{[\ce{H+}]^2} = -\frac{0.0592}{2}\big(\log 1 - 2\log[\ce{H+}]\big) = 0.0592\log[\ce{H+}] = -0.0592\,\mathrm{pH}.$$

*In words: the electrode's potential is a straight ruler in pH — about $-59$ mV per pH unit.* Wire it against a fixed reference and a voltmeter becomes a pH meter; this is literally how one works. The same trick — a couple whose $Q$ depends on the analyte — is the engine behind ion-selective and biosensors we reach in [4.4](04-04-electrodeposition-sensors.md).

## Watch out

- **You might think a concentration cell has no driving force because $E^\circ = 0$.** But $E^\circ$ being zero only removes the *chemical* term; the $-\frac{0.0592}{n}\log Q$ term is alive and well. The drive is entropic — mixing — not enthalpic. Zero $E^\circ$, nonzero $E$.
- **You might drop $n$, or use the wrong one.** The slope is $0.0592/n$, and $n$ is the electrons in the *balanced* reaction as you wrote $Q$. Halve the coefficients and you halve $n$ — but you also change the exponents in $Q$, and the two changes cancel, so $E$ is unchanged. Just keep $n$ and $Q$ from the *same* balanced equation.
- **You might put pure solids or the solvent into $Q$.** Their activity is 1 by definition — a zinc bar's "concentration" never appears. Only dissolved species and gases carry activities.
- **You might forget the sign flip when a species is a reactant.** $\ce{H+}$ on the left of a reduction puts $[\ce{H+}]$ in the *denominator* of $Q$, so raising it *raises* $E$. Track where each species sits before reading the direction.

## One-liner

> The Nernst equation, $E = E^\circ - \frac{0.0592}{n}\log Q$ at 298 K, is Le Chatelier written in volts — and when the only difference between two half-cells is concentration, that $\log Q$ term is the entire battery.

## Problems

**P1 (🟢)** An iron–copper cell $\ce{Fe|Fe^2+(0.010 M)||Cu^2+(0.10 M)|Cu}$ runs $\ce{Fe + Cu^2+ -> Fe^2+ + Cu}$ with $E^\circ = 0.78$ V and $n = 2$. Compute $Q$ and the cell EMF at 298 K.

**P2 (🟡)** A copper concentration cell $\ce{Cu|Cu^2+(0.0010 M)||Cu^2+(0.10 M)|Cu}$ has $n = 2$ and $E^\circ = 0$. Find its EMF, and state which electrode is the cathode.

**P3 (🔴, Boss-1 rehearsal)** For the Daniell cell $\ce{Zn|Zn^2+||Cu^2+|Cu}$ with $[\ce{Zn^2+}] = 0.10$ M, $[\ce{Cu^2+}] = 1.0$ M, $E^\circ = 1.10$ V, $n = 2$: compute $E$ at 298 K. Then answer: did *diluting the $\ce{Zn^2+}$ from the standard 1 M down to 0.10 M* help or hurt the voltage, and why?

<details>
<summary>Solutions</summary>

**P1** Solids ($\ce{Fe}$, $\ce{Cu}$) have activity 1, so

$$Q = \frac{[\ce{Fe^2+}]}{[\ce{Cu^2+}]} = \frac{0.010}{0.10} = 0.10.$$

Then

$$E = E^\circ - \frac{0.0592}{2}\log(0.10) = 0.78 - 0.0296 \times (-1) = 0.78 + 0.0296 = 0.81\ \mathrm{V}.$$

*Check.* Reactant-heavy ($Q<1$) pushes $E$ *above* $E^\circ$, and indeed $0.81 > 0.78$ V. ✓

**P2** $E^\circ = 0$, so only the $Q$ term acts. Writing the spontaneous direction (concentrated side reduces),

$$E = \frac{0.0592}{n}\log\frac{C_\text{high}}{C_\text{low}} = \frac{0.0592}{2}\log\frac{0.10}{0.0010} = 0.0296 \times \log(100) = 0.0296 \times 2 = 0.0592\ \mathrm{V}.$$

The **concentrated (0.10 M) side is the cathode** — there $\ce{Cu^2+}$ is reduced and plated out, lowering that side's concentration; the dilute side dissolves copper, raising its own. The cell runs until the two sides equalize, at which point $E = 0$.

*Check.* A hundredfold ratio and $n=2$ gives $\frac{0.0592}{2}\times 2 = 0.0592$ V — a clean "one decade per electron" reading, as expected for a concentration cell. ✓

**P3** Solids drop out; $Q = [\ce{Zn^2+}]/[\ce{Cu^2+}] = 0.10/1.0 = 0.10$. Then

$$E = 1.10 - \frac{0.0592}{2}\log(0.10) = 1.10 - 0.0296 \times (-1) = 1.10 + 0.0296 = 1.13\ \mathrm{V}.$$

**Diluting the $\ce{Zn^2+}$ helped** — it raised the voltage from $E^\circ = 1.10$ V to $1.13$ V. $\ce{Zn^2+}$ is a *product* of the cell reaction, so removing it (Le Chatelier) makes the reaction want to proceed harder, which shows up as a higher EMF. In Nernst terms, cutting the product drives $Q$ below 1, and $\log Q < 0$ subtracts a negative number — a boost.

*Check.* Both non-standard changes point the same way here: less product *and* (relative to it) more reactant both favor the forward reaction, so $E > E^\circ$. ✓

</details>

## Flashback

**From Lesson 1.4 (Cell EMF, Gibbs energy & equilibrium):** A nickel–copper cell $\ce{Ni|Ni^2+||Cu^2+|Cu}$ has $E^\circ_\text{cell} = 0.59$ V with $n = 2$. Working at 298 K, find the standard Gibbs energy $\Delta G^\circ$ and the equilibrium constant $K$ for its reaction. (Fresh variant — a new couple, the same $\Delta G^\circ = -nFE^\circ$ and $\ln K = nFE^\circ/RT$ machinery.)

<details>
<summary>Solution</summary>

Standard Gibbs energy from the electrical link:

$$\Delta G^\circ = -nFE^\circ = -(2)(96485)(0.59) = -1.14\times 10^5\ \mathrm{J/mol} \approx -114\ \mathrm{kJ/mol}.$$

For $K$, use the 298 K shortcut $\log K = \frac{nE^\circ}{0.0592}$:

$$\log K = \frac{2 \times 0.59}{0.0592} = \frac{1.18}{0.0592} = 19.9 \quad\Longrightarrow\quad K \approx 10^{19.9} \approx 8\times 10^{19}.$$

*Check.* $E^\circ > 0 \Rightarrow \Delta G^\circ < 0 \Rightarrow K \gg 1$: the reaction is strongly product-favored, matching a comfortably positive cell voltage. Cross-check via $\Delta G^\circ = -RT\ln K = -(8.314)(298)(2.303 \times 19.9) = -1.14\times 10^5$ J/mol — consistent. ✓

</details>

## Connections

- **Backward:** this is [1.4](01-04-cell-emf-gibbs-equilibrium.md)'s two identities, $\Delta G = \Delta G^\circ + RT\ln Q$ and $\Delta G = -nFE$, multiplied together and solved for $E$ — the Nernst equation is nothing more than 1.4 in voltage units. The activity language of $Q$ is [`physical-chemistry` 1.6](../../physical-chemistry/lessons/01-06-fugacity-activity.md); the Nernst equation refines general chemistry's electrochemistry ([`general-chemistry` 4.4](../../general-chemistry/lessons/04-04-taste-of-electrochemistry.md)) by replacing "concentration" with "activity."
- **Forward:** every kinetic quantity in Module 2 is measured *relative* to the Nernst (equilibrium) potential — the **overpotential** $\eta = E - E_\text{eq}$ of [2.4](02-04-overpotential-tafel-analysis.md) is exactly how far you've pushed a cell off the voltage this lesson computes, and [2.1](02-01-interface-electrical-double-layer.md) opens by asking what that potential *is* at the electrode surface.
- **Sideways:** the concentration cell is entropy-of-mixing (a phys-chem idea) converted directly into electrical work — the same "unmixedness is free energy" that powers osmosis and, in the body, the Nernst potential across a neuron's membrane that fires every thought you've ever had.
