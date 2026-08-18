# Analytical & Instrumental Chemistry · Lesson 2.4: Redox equilibria & titrations

> ⏱ ~15 min · Module 2: Equilibria, titrimetry & gravimetry · Builds on: [2.1 Acid–base titration curves](02-01-acid-base-titration-curves.md), [`general-chemistry` 4.4 (a taste of electrochemistry)](../../general-chemistry/lessons/04-04-taste-of-electrochemistry.md) · Unlocks: [3.1 UV–Vis & Beer's law](03-01-uv-vis-beers-law.md)

## Why this matters

An acid–base titration tracks pH; a redox titration tracks **electrical potential** $E$. Same sigmoidal shape, same equivalence break — but the y-axis is now a voltage you can literally read off a wire dipped in the beaker. Dissolved iron, chlorine in a pool, vitamin C, chemical oxygen demand in wastewater: all quantified by handing electrons back and forth and watching the potential jump. And the equation that turns a concentration ratio into a voltage — the **Nernst equation** — is the exact machinery that runs pH meters and ion-selective electrodes in Module 3. Learn to build a redox curve here and you've already built potentiometry ([3.3](03-03-potentiometry-ion-selective-electrodes.md)) running backward: there you read the potential to *get* the concentration.

## The idea

A redox reaction is electrons changing owners. Some couples hold electrons loosely (easily oxidized, low potential); others grab them hard (strong oxidizers, high potential). The **standard potential** $E^\circ$ is the scoreboard: a higher $E^\circ$ means "wants electrons more." When you drip a strong oxidizer (the titrant) into a solution of a reductant (the analyte), electrons flow from analyte to titrant until one runs out.

Here's the key mental move. At any instant the solution sits at **one** potential $E$ — a single voltage the whole mixture agrees on. *Before* equivalence there's leftover analyte, so the analyte's own couple pins the potential (it's the species present in both oxidized and reduced form). *After* equivalence the analyte is used up and excess titrant takes over, pinning $E$ near the titrant's higher $E^\circ$. Right *at* equivalence, neither couple has a comfortable leftover ratio, and the potential rockets from the analyte's level up to the titrant's — a steep vertical cliff. That cliff is your endpoint, and its height (the equivalence potential) tells you which color-changing indicator to use. It's the acid–base story with "electron affinity" playing the role of "proton affinity."

## The formal version

**Half-reactions and $E^\circ$.** Write every redox process as two halves, each a reduction:

$$\ce{Fe^3+ + e- <=> Fe^2+}, \quad E_1^\circ = 0.767\ \mathrm{V}; \qquad \ce{Ce^4+ + e- <=> Ce^3+}, \quad E_2^\circ = 1.70\ \mathrm{V}.$$

*In words: each couple has a standard potential measured against the hydrogen electrode; the bigger $E^\circ$, the stronger the oxidizer.* Because $E_2^\circ > E_1^\circ$, $\ce{Ce^4+}$ pulls electrons off $\ce{Fe^2+}$: the titration reaction is $\ce{Fe^2+ + Ce^4+ -> Fe^3+ + Ce^3+}$.

**The Nernst equation.** A half-cell's actual potential shifts away from $E^\circ$ as the concentration ratio changes. At 25 °C,

$$E = E^\circ - \frac{0.0592}{n}\log Q,$$

where $n$ is the number of electrons transferred in the half-reaction, and $Q$ is the reaction quotient of that half-reaction written as a reduction — **reduced form over oxidized form**. For the iron couple ($n=1$):

$$E = E_1^\circ - \frac{0.0592}{1}\log\frac{[\ce{Fe^2+}]}{[\ce{Fe^3+}]}.$$

*In words: the potential equals the standard value, nudged by how lopsided the reduced/oxidized ratio is.* When the ratio is 1 (equal amounts), $\log 1 = 0$ and $E = E^\circ$. The constant $0.0592\ \mathrm{V} = (RT/F)\ln 10$ at 298 K; it's the "voltage per factor-of-ten" in concentration.

**Building the curve.** Plot $E$ against titrant volume $V$. Let $f$ be the fraction of analyte titrated.

- **Before equivalence** ($f<1$): both $\ce{Fe^2+}$ and $\ce{Fe^3+}$ are present in known amounts, so use the *analyte* Nernst equation. The titrated ratio is $[\ce{Fe^2+}]/[\ce{Fe^3+}] = (1-f)/f$, so $E = E_1^\circ - 0.0592\log\!\frac{1-f}{f}$. At $f=\tfrac12$, $E = E_1^\circ$.
- **After equivalence** ($f>1$): analyte is gone; excess titrant leaves both $\ce{Ce^4+}$ and $\ce{Ce^3+}$, so use the *titrant* Nernst equation: $E = E_2^\circ - 0.0592\log\!\frac{[\ce{Ce^3+}]}{[\ce{Ce^4+}]}$.
- **At equivalence**: both couples hold simultaneously and share one $E$. Add the two Nernst equations (each $n=1$) and use the stoichiometric facts that leftover reductants match ($[\ce{Fe^2+}]=[\ce{Ce^4+}]$) and products match ($[\ce{Fe^3+}]=[\ce{Ce^3+}]$); the log term collapses to $\log 1 = 0$, giving

$$E_\text{eq} = \frac{n_1 E_1^\circ + n_2 E_2^\circ}{n_1 + n_2}.$$

*In words: the equivalence potential is the electron-weighted average of the two standard potentials.* For $\ce{Fe^2+}/\ce{Ce^4+}$ ($n_1=n_2=1$) it's the plain midpoint, $E_\text{eq} = \tfrac12(0.767 + 1.70) = 1.234\ \mathrm{V}$.

**Redox indicators.** A **redox indicator** is itself a couple whose oxidized and reduced forms differ in color; it flips over a potential window roughly $E_\text{ind}^\circ \pm 0.0592/n$ volts wide. Pick one whose transition straddles $E_\text{eq}$. **Ferroin** (an iron–phenanthroline complex, transition near $1.11\ \mathrm{V}$, pale blue $\to$ red) brackets the $\ce{Fe}/\ce{Ce}$ jump and is the classic choice. Some indicators are **specific** rather than potential-based — starch, for instance, turns deep blue with molecular iodine ($\ce{I2}$), marking iodine titrations directly.

## Picture

![Redox titration curve: solution potential E versus titrant volume, rising gently in the analyte-controlled region, jumping vertically at the equivalence potential E_eq, then leveling in the titrant-controlled region, with the ferroin indicator range shaded across the break](assets/02-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — a half-cell potential).** A solution has $[\ce{Fe^3+}] = 0.020\ \mathrm{M}$ and $[\ce{Fe^2+}] = 0.0020\ \mathrm{M}$, with $E^\circ = 0.767\ \mathrm{V}$, $n=1$. Then

$$E = 0.767 - 0.0592\log\frac{[\ce{Fe^2+}]}{[\ce{Fe^3+}]} = 0.767 - 0.0592\log\frac{0.0020}{0.020} = 0.767 - 0.0592\log(0.1).$$

Since $\log(0.1) = -1$, $E = 0.767 + 0.0592 = 0.826\ \mathrm{V}$. *More oxidized form (ten-to-one) raises the potential by one $0.0592\ \mathrm{V}$ step — the couple is "hungrier" for electrons.*

**Example 2 (why you'd care — a full curve).** Titrate $50.00\ \mathrm{mL}$ of $0.0500\ \mathrm{M}\ \ce{Fe^2+}$ with $0.1000\ \mathrm{M}\ \ce{Ce^4+}$. Moles of $\ce{Fe^2+} = 50.00 \times 0.0500 = 2.500\ \mathrm{mmol}$, so equivalence needs $2.500/0.1000 = 25.00\ \mathrm{mL}$ of titrant.

- **At $10.00\ \mathrm{mL}$ (before eq):** fraction titrated $f = 10.00/25.00 = 0.40$, so $[\ce{Fe^2+}]/[\ce{Fe^3+}] = 0.60/0.40 = 1.5$.
$$E = 0.767 - 0.0592\log(1.5) = 0.767 - 0.0592(0.176) = 0.757\ \mathrm{V}.$$
- **At $25.00\ \mathrm{mL}$ (equivalence):** $E_\text{eq} = \tfrac12(0.767 + 1.70) = 1.234\ \mathrm{V}$.
- **At $25.50\ \mathrm{mL}$ (after eq):** excess $\ce{Ce^4+} = (25.50-25.00)\times 0.1000 = 0.0500\ \mathrm{mmol}$; $\ce{Ce^3+}$ formed $= 2.500\ \mathrm{mmol}$, so $[\ce{Ce^3+}]/[\ce{Ce^4+}] = 2.500/0.0500 = 50$.
$$E = 1.70 - 0.0592\log(50) = 1.70 - 0.0592(1.699) = 1.599\ \mathrm{V}.$$

Half a milliliter past equivalence the potential has already vaulted from $\approx 0.76\ \mathrm{V}$ to $\approx 1.60\ \mathrm{V}$ — that near-vertical cliff through $E_\text{eq}=1.234\ \mathrm{V}$ is what makes the endpoint sharp, and ferroin (flip near $1.11\ \mathrm{V}$) changes color right inside it.

## Watch out

- **You might write the Nernst quotient upside down.** Written as a *reduction*, $Q$ is (reduced form)/(oxidized form) — the products of the reduction half-reaction over its reactants. Flip it and every sign is wrong. A quick check: adding oxidized form should *raise* $E$ (see Example 1).
- **The tidy average $E_\text{eq} = \tfrac{n_1E_1^\circ + n_2E_2^\circ}{n_1+n_2}$ assumes a "symmetric" reaction** — the same species-count on both sides and no extra reactants in the half-reactions. When the half-reaction consumes $\ce{H+}$, it doesn't. Permanganate, $\ce{MnO4- + 8H+ + 5e- -> Mn^2+ + 4H2O}$ ($E^\circ = 1.51\ \mathrm{V}$, $n=5$), carries a $\log[\ce{H+}]^8$ term, so $E_\text{eq}$ picks up a pH-dependent piece and the weighting leans hard toward the $n=5$ couple. Use the plain average only for clean 1-electron, 1:1 couples like $\ce{Fe}/\ce{Ce}$.
- **Endpoint is not equivalence.** As in [2.1](02-01-acid-base-titration-curves.md), the *equivalence point* is the stoichiometric truth; the *endpoint* is where the indicator flips. They coincide only if the indicator's transition sits on the steep part of the break — which is exactly why you match the indicator's window to $E_\text{eq}$.

## One-liner

> A redox titration plots the one potential the solution agrees on — set by the analyte couple's Nernst ratio before equivalence, the titrant couple's after, and their electron-weighted average $\frac{n_1E_1^\circ + n_2E_2^\circ}{n_1+n_2}$ at the cliff in between.

## Problems

**P1 (🟢)** For the couple $\ce{Fe^3+ + e- <=> Fe^2+}$ with $E^\circ = 0.771\ \mathrm{V}$ and $n=1$, compute the half-cell potential when $[\ce{Fe^3+}]/[\ce{Fe^2+}] = 10$.

**P2 (🟡)** $\ce{Fe^2+}$ is titrated with $\ce{Ce^4+}$ ($E^\circ_{\ce{Fe}} = 0.767\ \mathrm{V}$, $E^\circ_{\ce{Ce}} = 1.70\ \mathrm{V}$, both $n=1$). Find the solution potential (a) when the analyte is 30% titrated, and (b) at 150% of the equivalence volume (50% excess titrant).

**P3 (🔴)** Derive the equivalence-point potential for the $\ce{Fe^2+}$–$\ce{Ce^4+}$ titration from the two Nernst equations (don't just quote the formula), compute its value, and choose a redox indicator whose transition brackets it. The candidates: methylene blue ($0.53\ \mathrm{V}$), diphenylamine sulfonate ($0.85\ \mathrm{V}$), ferroin ($1.11\ \mathrm{V}$).

<details>
<summary>Solutions</summary>

**P1** Nernst with $Q = [\ce{Fe^2+}]/[\ce{Fe^3+}]$, the reduced-over-oxidized ratio. Given $[\ce{Fe^3+}]/[\ce{Fe^2+}] = 10$, the quotient is its reciprocal, $Q = 1/10$:

$$E = 0.771 - 0.0592\log\frac{[\ce{Fe^2+}]}{[\ce{Fe^3+}]} = 0.771 - 0.0592\log(0.1) = 0.771 - 0.0592(-1) = 0.830\ \mathrm{V}.$$

*Check.* Ten times more oxidized form than reduced form should push $E$ above $E^\circ$ by one $0.0592\ \mathrm{V}$ step — it does, $0.771 \to 0.830\ \mathrm{V}$. ✓

**P2** Both halves have $n=1$.

(a) Before equivalence the *analyte* ($\ce{Fe}$) couple sets $E$. At $f = 0.30$ titrated, $[\ce{Fe^2+}]/[\ce{Fe^3+}] = (1-f)/f = 0.70/0.30 = 2.333$:
$$E = 0.767 - 0.0592\log(2.333) = 0.767 - 0.0592(0.368) = 0.767 - 0.0218 = 0.745\ \mathrm{V}.$$

(b) After equivalence the *titrant* ($\ce{Ce}$) couple sets $E$. At 150% (50% excess), for every 1 unit of $\ce{Ce^3+}$ produced there is $0.5$ unit of excess $\ce{Ce^4+}$, so $[\ce{Ce^3+}]/[\ce{Ce^4+}] = 1/0.5 = 2$:
$$E = 1.70 - 0.0592\log(2) = 1.70 - 0.0592(0.301) = 1.70 - 0.0178 = 1.682\ \mathrm{V}.$$

*Check.* Before equivalence $E$ sits just below $E^\circ_{\ce{Fe}}=0.767$ (still mostly reduced form) ✓; well past equivalence $E$ sits just below $E^\circ_{\ce{Ce}}=1.70$ ✓ — the potential has crossed from one couple's territory to the other's, as the curve demands.

**P3** At equivalence both couples share the single potential $E_\text{eq}$, so write both Nernst equations:
$$E_\text{eq} = 0.767 - 0.0592\log\frac{[\ce{Fe^2+}]}{[\ce{Fe^3+}]}, \qquad E_\text{eq} = 1.70 - 0.0592\log\frac{[\ce{Ce^3+}]}{[\ce{Ce^4+}]}.$$
Add them:
$$2E_\text{eq} = (0.767 + 1.70) - 0.0592\log\frac{[\ce{Fe^2+}][\ce{Ce^3+}]}{[\ce{Fe^3+}][\ce{Ce^4+}]}.$$
The reaction is $\ce{Fe^2+ + Ce^4+ -> Fe^3+ + Ce^3+}$. At equivalence the tiny leftover reductant and oxidant are equal by stoichiometry, $[\ce{Fe^2+}] = [\ce{Ce^4+}]$, and the two products are equal, $[\ce{Fe^3+}] = [\ce{Ce^3+}]$. Substituting, the fraction becomes
$$\frac{[\ce{Fe^2+}][\ce{Ce^3+}]}{[\ce{Fe^3+}][\ce{Ce^4+}]} = \frac{[\ce{Ce^4+}][\ce{Fe^3+}]}{[\ce{Fe^3+}][\ce{Ce^4+}]} = 1,$$
so $\log(1) = 0$ and
$$2E_\text{eq} = 0.767 + 1.70 \;\Longrightarrow\; E_\text{eq} = \frac{0.767 + 1.70}{2} = 1.234\ \mathrm{V}.$$
This is the general $E_\text{eq} = (n_1E_1^\circ + n_2E_2^\circ)/(n_1+n_2)$ with $n_1=n_2=1$. **Indicator:** ferroin, transition near $1.11\ \mathrm{V}$, is the only candidate close to $1.234\ \mathrm{V}$ and sits on the steep part of the break — its flip window brackets $E_\text{eq}$. The others ($0.53$, $0.85\ \mathrm{V}$) would change color far too early, back in the gently sloping analyte region, badly underestimating the endpoint.

*Check.* $E_\text{eq}=1.234\ \mathrm{V}$ lands between the two standard potentials $0.767$ and $1.70\ \mathrm{V}$, exactly halfway as the equal $n$ values require. ✓

</details>

## Flashback

**From Lesson 2.1 (Acid–base titration curves):** $50.00\ \mathrm{mL}$ of $0.100\ \mathrm{M}$ acetic acid ($K_a = 1.8\times10^{-5}$, so $\mathrm{p}K_a = 4.74$) is titrated with $0.100\ \mathrm{M}\ \ce{NaOH}$. Find the pH after adding $30.00\ \mathrm{mL}$ of base. (Fresh variant — a point inside the buffer region.)

<details>
<summary>Solution</summary>

Initial acid: $50.00 \times 0.100 = 5.00\ \mathrm{mmol}$. Base added: $30.00 \times 0.100 = 3.00\ \mathrm{mmol}$ — less than the $5.00\ \mathrm{mmol}$ equivalence, so we're in the **buffer region** with both the weak acid and its conjugate base present. Each mmol of $\ce{OH-}$ converts one mmol of $\ce{CH3COOH}$ to $\ce{CH3COO-}$:

$$n_{\ce{CH3COO-}} = 3.00\ \mathrm{mmol}, \qquad n_{\ce{CH3COOH}} = 5.00 - 3.00 = 2.00\ \mathrm{mmol}.$$

Henderson–Hasselbalch (the ratio uses moles, since volume cancels):

$$\mathrm{pH} = \mathrm{p}K_a + \log\frac{[\ce{A-}]}{[\ce{HA}]} = 4.74 + \log\frac{3.00}{2.00} = 4.74 + 0.176 = 4.92.$$

*Check.* We're just past the half-equivalence point ($25.00\ \mathrm{mL}$, where $\mathrm{pH} = \mathrm{p}K_a = 4.74$), so pH should sit slightly above $4.74$ — it does. ✓ This is the same "the couple's ratio sets the intensive variable" logic as today's Nernst equation, with $\mathrm{p}K_a$ playing the role of $E^\circ$ and pH the role of $E$.

</details>

## Connections

- **Backward:** this is [2.1](02-01-acid-base-titration-curves.md)'s titration-curve anatomy — buffer-like region, steep equivalence break, post-equivalence plateau — with potential $E$ replacing pH and the Nernst equation replacing Henderson–Hasselbalch. The standard potentials $E^\circ$ come straight from [`general-chemistry` 4.4](../../general-chemistry/lessons/04-04-taste-of-electrochemistry.md).
- **Forward:** [3.3 Potentiometry & ion-selective electrodes](03-03-potentiometry-ion-selective-electrodes.md) runs the Nernst equation *backward* — you measure the cell potential and solve for the unknown concentration, which is exactly what a pH meter does. [3.4](03-04-voltammetry-standard-addition.md) then drives current through the couple rather than reading its rest potential.
- **Sideways:** the Nernst equation is the equilibrium thermodynamics of [`physical-chemistry`](../../physical-chemistry/syllabus.md) — $\Delta G = -nFE$ ties the voltage to free energy, and $0.0592 = (RT/F)\ln 10$ is the same $RT$ that sets the width of every equilibrium and every Gaussian in [`prob-stat-refresher`](../../prob-stat-refresher/syllabus.md).
