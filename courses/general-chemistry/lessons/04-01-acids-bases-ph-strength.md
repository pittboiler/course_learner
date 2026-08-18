# General Chemistry · Lesson 4.1: Acids & Bases: pH and Strength

> ⏱ ~15 min · Module 4: Acids, Bases & Intros to Kinetics and Electrochemistry · Builds on: [3.4 Chemical equilibrium: K & Le Châtelier](03-04-chemical-equilibrium-k-le-chatelier.md) · Unlocks: [4.2 Buffers & titration](04-02-buffers-titration.md)

## Why this matters

Acid–base chemistry is equilibrium (Lesson 3.4) wearing its most practical uniform. It sets the pH of your blood (held near 7.4 or you die), the rate at which a drug dissolves, the color of a hydrangea, the corrosion of a pipe, and every buffer and titration in Lesson 4.2. The whole subject reduces to one moving part — the concentration of a single ion, $\ce{H+}$ — and the log scale, pH, that we use to talk about it across fourteen orders of magnitude. Get comfortable turning $[\ce{H+}]$ into pH and back, and reading strength off an equilibrium constant, and the rest of the module is bookkeeping.

## The idea

Forget the sour-taste, turns-litmus-red folklore. An acid is simply a **proton donor** — a molecule that hands off an $\ce{H+}$ (a bare hydrogen nucleus, a single proton) — and a base is a **proton acceptor**, something with a lone pair ready to grab that proton. Every acid–base reaction is one proton changing owners. When $\ce{HA}$ gives up its proton it becomes $\ce{A-}$, which is now sitting there *able to take a proton back* — so $\ce{A-}$ is a base. That pairing, $\ce{HA}$ and $\ce{A-}$ differing by exactly one $\ce{H+}$, is a **conjugate acid–base pair**.

"Strong" and "weak" are not about danger or concentration — they are about *how completely* the proton transfer happens, which is just an equilibrium position. A **strong** acid dumps essentially all of its protons into solution: the reaction runs to completion. A **weak** acid only lets a small fraction go, then sits at equilibrium with most molecules still intact. And here's the see-saw that makes it all click: if an acid holds its proton loosely (strong acid), the leftover $\ce{A-}$ has no interest in taking it back — it's a **weak** conjugate base. Strong acid ⟺ weak conjugate base, always. The proton has to be *somewhere*; the equilibrium constant just tells you where it prefers to sit.

## The formal version

**Brønsted–Lowry definition.** In the transfer

$$\ce{HA + B <=> A- + HB+},$$

$\ce{HA}$ is the acid (donates $\ce{H+}$), $\ce{B}$ is the base (accepts it), and the products $\ce{A-}$ / $\ce{HB+}$ are the conjugate base / conjugate acid. *In words: acids give protons, bases take them, and each side has one of each.* A pair like $\ce{HA}/\ce{A-}$ or $\ce{H2O}/\ce{OH-}$ that differs by a single $\ce{H+}$ is a conjugate pair. (A broader **Lewis** definition swaps "proton" for "electron pair": a Lewis acid *accepts* an electron pair, a Lewis base *donates* one — useful for metal ions and $\ce{BF3}$, but Brønsted–Lowry covers everything in this module.)

**Water autoionizes.** Water is both acid and base to itself:

$$\ce{2H2O <=> H3O+ + OH-}, \qquad K_w = [\ce{H+}][\ce{OH-}] = 1.0\times10^{-14} \ \ (25\,^\circ\mathrm{C}).$$

*In words: even pure water carries a tiny, fixed product of $\ce{H+}$ and $\ce{OH-}$ concentrations.* We write $\ce{H+}$ as shorthand for the hydrated proton $\ce{H3O+}$. In **neutral** water the two are equal, so $[\ce{H+}] = [\ce{OH-}] = \sqrt{K_w} = 1.0\times10^{-7}\ \mathrm{M}$. Add acid and $[\ce{H+}]$ rises while $[\ce{OH-}]$ falls to keep the product pinned at $10^{-14}$ — that constant product is just an equilibrium constant (Lesson 3.4), and Le Châtelier in miniature.

**The pH scale.** Because $[\ce{H+}]$ ranges over many powers of ten, we take a negative log:

$$\mathrm{pH} = -\log_{10}[\ce{H+}], \qquad \mathrm{pOH} = -\log_{10}[\ce{OH-}].$$

*In words: pH is how many powers of ten below 1 M the proton concentration sits.* Taking $-\log_{10}$ of $K_w = [\ce{H+}][\ce{OH-}]$ turns the product into a sum:

$$\mathrm{pH} + \mathrm{pOH} = 14 \ \ (25\,^\circ\mathrm{C}).$$

Neutral is $\mathrm{pH} = 7$; **acidic** is $\mathrm{pH} < 7$ (more $\ce{H+}$), **basic** is $\mathrm{pH} > 7$. Each whole pH unit is a **ten-fold** change in $[\ce{H+}]$ — pH 3 is ten times more acidic than pH 4, a hundred times more than pH 5.

**Strong acids and bases — dissociation is complete.** For a strong acid, all of it ionizes, so $[\ce{H+}]$ *equals* the acid concentration and pH follows directly. The strong acids worth memorizing:

$$\ce{HCl},\ \ce{HBr},\ \ce{HI},\ \ce{HNO3},\ \ce{H2SO4},\ \ce{HClO4};$$

the strong bases are the group 1 and heavy group 2 hydroxides ($\ce{NaOH}$, $\ce{KOH}$, $\ce{Ca(OH)2}$, …), which release $\ce{OH-}$ completely. Everything else is weak.

**Weak acids — partial dissociation, an equilibrium.** A weak acid sits at equilibrium:

$$\ce{HA <=> H+ + A-}, \qquad K_a = \frac{[\ce{H+}][\ce{A-}]}{[\ce{HA}]}.$$

*In words: $K_a$ measures how far the proton comes off — bigger $K_a$, stronger acid.* Because these span many decades we again use a log, $\mathrm{p}K_a = -\log_{10} K_a$ (smaller $\mathrm{p}K_a$ = stronger). To get the pH of a weak acid of initial concentration $C$, run an **ICE table** (Lesson 3.4) with $x = [\ce{H+}]$ produced:

$$K_a = \frac{x^2}{C - x} \approx \frac{x^2}{C} \ \Longrightarrow\ x = [\ce{H+}] \approx \sqrt{K_a\,C}.$$

The approximation drops $x$ against $C$ in the denominator — valid when dissociation is a few percent (rule of thumb: $x/C < 5\%$, true whenever $C/K_a \gtrsim 400$). A weak **base** works the same way with $K_b = \dfrac{[\ce{BH+}][\ce{OH-}]}{[\ce{B}]}$, giving $[\ce{OH-}] \approx \sqrt{K_b\,C}$. And the see-saw is exact: for any conjugate pair,

$$K_a K_b = K_w = 1.0\times10^{-14}.$$

*In words: the stronger the acid, the weaker its conjugate base — their strengths multiply to a constant.*

## Picture

![A pH scale from 0 to 14 with common substances placed, acidic (blue) and basic (coral) regions marked, and the logarithmic [H+]-to-pH relationship annotated below](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — strong acid, straight to pH).** Find the pH of $0.050\ \mathrm{M}$ $\ce{HNO3}$. Nitric acid is strong, so it ionizes completely: $[\ce{H+}] = 0.050\ \mathrm{M}$. Then

$$\mathrm{pH} = -\log_{10}(0.050) = 1.30.$$

No equilibrium, no ICE table — completeness is the whole point of "strong." (Check: $0.050$ is between $10^{-2}$ and $10^{-1}$, so pH lands between 1 and 2. ✓)

**Example 2 (why you'd care — same concentration, very different pH).** Take $0.050\ \mathrm{M}$ **acetic acid** ($K_a = 1.8\times10^{-5}$) instead — the acid in vinegar, and a weak one. Now only a sliver ionizes:

$$[\ce{H+}] \approx \sqrt{K_a\,C} = \sqrt{(1.8\times10^{-5})(0.050)} = \sqrt{9.0\times10^{-7}} = 9.5\times10^{-4}\ \mathrm{M},$$

$$\mathrm{pH} = -\log_{10}(9.5\times10^{-4}) = 3.02.$$

Same $0.050\ \mathrm{M}$, but pH 3.02 instead of 1.30 — nearly 50 times *less* acidic in $[\ce{H+}]$, purely because acetic acid holds its proton. That gap between "how much acid" (concentration) and "how much $\ce{H+}$" (strength) is the single most important distinction in the module, and it's exactly what buffers (Lesson 4.2) exploit. (Approximation check: $x/C = 9.5\times10^{-4}/0.050 = 1.9\% < 5\%$. ✓)

## Watch out

- **You might think "strong" means "concentrated" (or "dangerous").** It doesn't. Strong/weak is *fraction dissociated* (an equilibrium fact); dilute/concentrated is *how much you dissolved* (an amount). A dilute strong acid and a concentrated weak acid can have the same pH — they're independent knobs.
- **You might set $[\ce{H+}] = C$ for a weak acid.** Only strong acids give $[\ce{H+}] = C$. For a weak acid you must go through $K_a$; using $C$ directly overstates the acidity by orders of magnitude.
- **You might forget the minus sign or mishandle the log.** pH $= -\log[\ce{H+}]$, so a *smaller* $[\ce{H+}]$ gives a *larger* pH. And $[\ce{H+}] = 10^{-\mathrm{pH}}$ going back — pH 5 means $10^{-5}\ \mathrm{M}$, not $5\ \mathrm{M}$.
- **You might think a bigger $K_a$ means a stronger conjugate base.** Opposite: big $K_a$ (strong acid) forces small $K_b$ (weak conjugate base), since $K_a K_b = K_w$.

## One-liner

> An acid donates $\ce{H+}$ and a base accepts it; pH $= -\log[\ce{H+}]$ compresses the fourteen-decade range of $\ce{H+}$, "strong" means fully dissociated ($[\ce{H+}]=C$) while "weak" means an equilibrium ($[\ce{H+}]\approx\sqrt{K_a C}$).

## Problems

**P1 (🟢)** Find the pH of (a) $0.010\ \mathrm{M}$ $\ce{HCl}$ and (b) $0.010\ \mathrm{M}$ $\ce{NaOH}$, both at $25\,^\circ\mathrm{C}$.

**P2 (🟡)** A sample of blood plasma has $[\ce{H+}] = 4.0\times10^{-8}\ \mathrm{M}$. Find $[\ce{OH-}]$, the pH, and the pOH. Is it acidic or basic?

**P3 (🔴, Boss-4 rehearsal)** Find the pH of $0.100\ \mathrm{M}$ acetic acid, $K_a = 1.8\times10^{-5}$, using an ICE table with the small-$x$ approximation. Then confirm the approximation was justified.

<details>
<summary>Solutions</summary>

**P1** (a) $\ce{HCl}$ is a **strong** acid, fully dissociated, so $[\ce{H+}] = 0.010\ \mathrm{M} = 10^{-2}\ \mathrm{M}$:

$$\mathrm{pH} = -\log_{10}(10^{-2}) = 2.00.$$

(b) $\ce{NaOH}$ is a **strong** base, fully dissociated, so $[\ce{OH-}] = 0.010\ \mathrm{M}$:

$$\mathrm{pOH} = -\log_{10}(10^{-2}) = 2.00, \qquad \mathrm{pH} = 14 - \mathrm{pOH} = 12.00.$$

*Check.* Both are $10^{-2}\ \mathrm{M}$ of a strong species, symmetric about neutral: pH 2.00 and pH 12.00 sit equally far from 7. ✓

**P2** Use $K_w$ to get the hydroxide:

$$[\ce{OH-}] = \frac{K_w}{[\ce{H+}]} = \frac{1.0\times10^{-14}}{4.0\times10^{-8}} = 2.5\times10^{-7}\ \mathrm{M}.$$

Then the logs:

$$\mathrm{pH} = -\log_{10}(4.0\times10^{-8}) = 8 - \log_{10}4.0 = 8 - 0.60 = 7.40,$$

$$\mathrm{pOH} = 14 - 7.40 = 6.60 \quad(\text{or } -\log_{10}(2.5\times10^{-7}) = 6.60,\ \text{same}).$$

Since $\mathrm{pH} = 7.40 > 7$, the plasma is (slightly) **basic** — the real value for healthy blood. ✓ *Check.* $[\ce{OH-}] > [\ce{H+}]$ ($2.5\times10^{-7} > 4.0\times10^{-8}$), consistent with basic, and pH + pOH $= 14$. ✓

**P3** Acetic acid, $\ce{CH3COOH <=> H+ + CH3COO-}$, starting at $C = 0.100\ \mathrm{M}$. ICE table (concentrations in M):

| | $\ce{HA}$ | $\ce{H+}$ | $\ce{A-}$ |
|---|---|---|---|
| **I**nitial | $0.100$ | $0$ | $0$ |
| **C**hange | $-x$ | $+x$ | $+x$ |
| **E**quilibrium | $0.100 - x$ | $x$ | $x$ |

Plug into $K_a$ and drop $x$ against $0.100$:

$$K_a = \frac{x^2}{0.100 - x} \approx \frac{x^2}{0.100} = 1.8\times10^{-5} \ \Longrightarrow\ x^2 = 1.8\times10^{-6},$$

$$x = [\ce{H+}] = \sqrt{1.8\times10^{-6}} = 1.34\times10^{-3}\ \mathrm{M}, \qquad \mathrm{pH} = -\log_{10}(1.34\times10^{-3}) = 2.87.$$

**Approximation check:** $x/C = 1.34\times10^{-3}/0.100 = 1.34\% < 5\%$, so dropping $x$ in the denominator was justified. (Keeping it — solving the quadratic $x^2 + 1.8\times10^{-5}x - 1.8\times10^{-6} = 0$ — gives $x = 1.33\times10^{-3}$, shifting pH by less than $0.01$.) ✓ This is the Boss-4 weak-acid calculation; the same $\sqrt{K_a C}$ move drives the buffer and half-titration work in [4.2](04-02-buffers-titration.md).

</details>

## Flashback

**From Lesson 3.4 (Chemical equilibrium: K & Le Châtelier):** At a certain temperature, $K_c = 50$ for $\ce{H2(g) + I2(g) <=> 2HI(g)}$. A sealed flask is charged with $[\ce{H2}]_0 = [\ce{I2}]_0 = 1.00\ \mathrm{M}$ and no $\ce{HI}$. Find the equilibrium concentration of $\ce{HI}$. (Fresh variant — a gas-phase ICE table, no acids involved.)

<details>
<summary>Solution</summary>

Let $x$ = M of $\ce{H2}$ (and of $\ce{I2}$) consumed. From the 1:1:2 stoichiometry the ICE table gives equilibrium values $[\ce{H2}] = [\ce{I2}] = 1.00 - x$ and $[\ce{HI}] = 2x$. Then

$$K_c = \frac{[\ce{HI}]^2}{[\ce{H2}][\ce{I2}]} = \frac{(2x)^2}{(1.00 - x)^2} = \left(\frac{2x}{1.00 - x}\right)^2 = 50.$$

The left side is a perfect square, so take the square root of both sides (positive root, since all concentrations are positive):

$$\frac{2x}{1.00 - x} = \sqrt{50} = 7.07 \ \Longrightarrow\ 2x = 7.07 - 7.07x \ \Longrightarrow\ 9.07x = 7.07 \ \Longrightarrow\ x = 0.779.$$

Therefore

$$[\ce{HI}] = 2x = 1.56\ \mathrm{M}, \qquad [\ce{H2}] = [\ce{I2}] = 0.221\ \mathrm{M}.$$

*Check.* $\dfrac{(1.56)^2}{(0.221)^2} = \dfrac{2.43}{0.0489} = 49.7 \approx 50$ ✓. Note $K_c = 50 > 1$ favors products, and indeed most of the $\ce{H2}$/$\ce{I2}$ converted. The square-root shortcut worked only because both reactant concentrations were equal — the same ICE machinery underlies the weak-acid pH above.

</details>

## Connections

- **Backward:** $K_a$, $K_b$, and $K_w$ are ordinary equilibrium constants — the ICE-table and Le Châtelier tools from [3.4](03-04-chemical-equilibrium-k-le-chatelier.md) applied to proton transfer. Adding $\ce{H+}$ shifts $\ce{HA <=> H+ + A-}$ left, which is exactly how buffers resist pH change.
- **Forward:** [4.2 Buffers & titration](04-02-buffers-titration.md) mixes a weak acid with its conjugate base and turns $K_a$ into the Henderson–Hasselbalch equation; the same weak-acid pH you compute here is the starting point of every titration curve, and Boss Problem 4 is built on it.
- **Sideways:** an equilibrium constant like $K_a$ is fixed by the free-energy change of the reaction, $\Delta G^\circ = -RT\ln K$ — the temperature dependence of $K_w$ (and why "neutral" isn't exactly pH 7 off room temperature) is thermodynamics, developed further in the physical chemistry track.
