# Biophysics · Lesson 4.2: Enzyme kinetics — Michaelis–Menten

> ⏱ ~15 min · Module 4: Motors, kinetics, and membrane potentials · Builds on: [4.1 Reaction kinetics and mass action](04-01-reaction-kinetics-mass-action.md), [2.3 Ligand binding and receptor occupancy](02-03-ligand-binding-occupancy.md) · Unlocks: [4.3 Molecular motors and the Brownian ratchet](04-03-molecular-motors-ratchet.md)

## Why this matters

An enzyme is a machine that grabs a molecule, bends it into product, and lets go — thousands of times a second, over and over. But it can only go so fast: give it more and more substrate and the rate climbs, then *flattens*, because every copy of the enzyme is already busy. That saturating curve — reaction rate versus substrate concentration — is the **Michaelis–Menten** law, the single most-used equation in all of biochemistry. Its two constants, $V_{\max}$ and $K_M$, are what a biochemist actually *measures* when characterizing an enzyme or a drug that inhibits one. And the punchline of this lesson is that the curve is the **same hyperbola** you already met as the Langmuir binding curve in [2.3](02-03-ligand-binding-occupancy.md) — because catalysis rate is just *how full the enzyme is* times how fast a full enzyme cycles. Binding and catalysis are the same math wearing different hats.

## The idea

Think of a single enzyme as a turnstile at a stadium. People (substrate) arrive, one squeezes through at a time (gets converted to product), and the turnstile resets. When the crowd is thin, the flow is set by how fast people *arrive* — double the crowd, double the flow. But once a line has formed and the turnstile is always occupied, adding more people to the back does nothing: the throughput is capped by how fast the turnstile itself cycles. That cap is $V_{\max}$.

So the rate has two regimes. At **low substrate**, the enzyme is mostly empty and waiting; rate rises in proportion to how much substrate is around (more collisions, more binding). At **high substrate**, the enzyme is always loaded; rate saturates at its top speed. Between them is a smooth hyperbola, and the substrate level that gets you *halfway* to top speed is $K_M$ — a rough gauge of how tightly the enzyme grips its substrate. Small $K_M$: a whisper of substrate already keeps the enzyme half-busy (grips tightly). Large $K_M$: you need to flood it before it gets going (grips loosely).

**In words:** an enzyme's rate saturates — it can only work so fast once it's fully loaded — and $K_M$ is the substrate level at which it runs at half speed, a rough measure of affinity.

## The formal version

Write the mechanism the anchor gives us: an enzyme $\mathrm{E}$ reversibly binds substrate $\mathrm{S}$ to form a complex $\mathrm{ES}$, which then commits to product $\mathrm{P}$ and releases the enzyme:

$$\mathrm{E} + \mathrm{S} \;\underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}}\; \mathrm{ES} \;\xrightarrow{\;k_{\mathrm{cat}}\;}\; \mathrm{E} + \mathrm{P}.$$

Here $k_1$ (units $\mathrm{M^{-1}s^{-1}}$) is the binding rate constant, $k_{-1}$ ($\mathrm{s^{-1}}$) the unbinding rate, and $k_{\mathrm{cat}}$ ($\mathrm{s^{-1}}$) the **turnover number** — the rate at which a *loaded* enzyme fires off product. The quantity we want is the reaction velocity, the rate product accumulates:

$$v \equiv \frac{d[\mathrm{P}]}{dt} = k_{\mathrm{cat}}[\mathrm{ES}].$$

*In words: product comes only from the complex, so the rate is $k_{\mathrm{cat}}$ times how much complex there is.* The whole problem is finding $[\mathrm{ES}]$.

**The quasi-steady-state approximation (QSSA).** Applying mass action ([4.1](04-01-reaction-kinetics-mass-action.md)) to the complex, it is *made* by binding and *destroyed* by both unbinding and catalysis:

$$\frac{d[\mathrm{ES}]}{dt} = \underbrace{k_1[\mathrm{E}][\mathrm{S}]}_{\text{formed}} - \underbrace{k_{-1}[\mathrm{ES}]}_{\text{falls apart}} - \underbrace{k_{\mathrm{cat}}[\mathrm{ES}]}_{\text{makes product}}.$$

When substrate vastly outnumbers enzyme (the usual case — a pinch of enzyme in a sea of substrate), $[\mathrm{ES}]$ shoots up in a brief burst and then holds nearly constant: it is consumed as fast as it is made. Set $d[\mathrm{ES}]/dt \approx 0$. *In words: the complex reaches a steady level where its formation and breakdown balance.* Using conservation of enzyme, $[\mathrm{E}] = [\mathrm{E}]_{\text{tot}} - [\mathrm{ES}]$ (every enzyme is either free or bound), the balance reads

$$k_1\big([\mathrm{E}]_{\text{tot}} - [\mathrm{ES}]\big)[\mathrm{S}] = (k_{-1} + k_{\mathrm{cat}})[\mathrm{ES}].$$

Solve for $[\mathrm{ES}]$. Divide through by $k_1$ and collect terms, defining the **Michaelis constant** $K_M \equiv (k_{-1} + k_{\mathrm{cat}})/k_1$ (units of concentration, M):

$$[\mathrm{ES}] = \frac{[\mathrm{E}]_{\text{tot}}\,[\mathrm{S}]}{K_M + [\mathrm{S}]}.$$

Multiply by $k_{\mathrm{cat}}$ to get the velocity, and name the ceiling $V_{\max} \equiv k_{\mathrm{cat}}[\mathrm{E}]_{\text{tot}}$:

$$\boxed{\,v = \frac{V_{\max}\,[\mathrm{S}]}{K_M + [\mathrm{S}]}\,}$$

This is the **Michaelis–Menten equation**. Read off its two constants:

- $V_{\max} = k_{\mathrm{cat}}[\mathrm{E}]_{\text{tot}}$ — the top speed, reached when *every* enzyme is loaded ($[\mathrm{S}]\to\infty$ makes $v\to V_{\max}$). Proportional to how much enzyme you have.
- $K_M$ — set $[\mathrm{S}] = K_M$ and you get $v = V_{\max}/2$: **$K_M$ is the substrate concentration at half-maximal rate.**

Notice the shape. Factor the boxed law as $v = \big(k_{\mathrm{cat}}[\mathrm{E}]_{\text{tot}}\big)\cdot \dfrac{[\mathrm{S}]}{K_M + [\mathrm{S}]}$. That second factor is *exactly the Langmuir occupancy* $p = [\mathrm{S}]/(K_M+[\mathrm{S}])$ from [2.3](02-03-ligand-binding-occupancy.md) — the fraction of enzyme that is loaded. So **rate = (fraction of enzyme loaded) × (turnover of a loaded enzyme)**. Michaelis–Menten *is* a binding curve, scaled by $k_{\mathrm{cat}}$. If $k_{\mathrm{cat}} \ll k_{-1}$, catalysis barely disturbs the binding equilibrium and $K_M \approx k_{-1}/k_1 = K_d$, the dissociation constant itself.

**The two limits.**

- **Low substrate** ($[\mathrm{S}] \ll K_M$): drop $[\mathrm{S}]$ next to $K_M$ in the denominator, giving $v \approx \dfrac{V_{\max}}{K_M}[\mathrm{S}]$ — linear in substrate, first-order. The slope $V_{\max}/K_M$ matters below.
- **High substrate** ($[\mathrm{S}] \gg K_M$): drop $K_M$, giving $v \approx V_{\max}$ — flat, zeroth-order, saturated.

**Catalytic efficiency and the diffusion limit.** That low-substrate slope has a name. Since $V_{\max}/K_M = k_{\mathrm{cat}}[\mathrm{E}]_{\text{tot}}/K_M$, the rate per unit enzyme is $v/[\mathrm{E}]_{\text{tot}} \approx (k_{\mathrm{cat}}/K_M)[\mathrm{S}]$. The ratio

$$\frac{k_{\mathrm{cat}}}{K_M} \quad (\text{units } \mathrm{M^{-1}s^{-1}})$$

is the **catalytic efficiency** — the effective bimolecular rate constant for the whole reaction when substrate is scarce (the regime enzymes usually live in). It cannot be arbitrarily large: the enzyme cannot process substrate faster than substrate can *diffuse into* the active site. That ceiling is the **diffusion limit** from [1.4](01-04-einstein-relation.md), roughly $10^8$–$10^9\ \mathrm{M^{-1}s^{-1}}$. Enzymes that reach it — catalase, triosephosphate isomerase, fumarase — are called **catalytically perfect**: they are limited not by chemistry but by how fast the next molecule shows up.

**Extracting the constants (Lineweaver–Burk).** Inverting the boxed law linearizes it:

$$\frac{1}{v} = \frac{K_M}{V_{\max}}\cdot\frac{1}{[\mathrm{S}]} + \frac{1}{V_{\max}}.$$

*In words: plot $1/v$ against $1/[\mathrm{S}]$ and you get a straight line* — intercept $1/V_{\max}$, slope $K_M/V_{\max}$. Two rate measurements at two substrate concentrations pin down both constants (Worked Example 2). (Modern practice fits the hyperbola directly, since inverting overweights noisy low-$[\mathrm{S}]$ points, but the double-reciprocal plot is how the numbers are still reported.)

## Picture

![Michaelis–Menten saturation curve: reaction rate v versus substrate concentration, a blue hyperbola rising linearly then plateauing at the grey-dashed V_max asymptote, with the half-maximal point at [S] = K_M marked in coral](assets/04-02-fig1.svg)

The blue curve rises with initial slope $V_{\max}/K_M$ (grey tangent), bends over, and flattens toward the $V_{\max}$ asymptote (grey dashed). The coral marker shows the defining fact: at $[\mathrm{S}] = K_M$ the rate is exactly $V_{\max}/2$.

## Worked examples

**Example 1 (rate at a given substrate level).** An enzyme has $K_M = 2\ \mathrm{mM}$ and $V_{\max} = 100\ \mathrm{\mu M/s}$. Find $v$ at $[\mathrm{S}] = 0.2\ \mathrm{mM}$, at $[\mathrm{S}] = 2\ \mathrm{mM}$, and at $[\mathrm{S}] = 20\ \mathrm{mM}$.

Everything is a ratio to $K_M$. Write $r \equiv [\mathrm{S}]/K_M$, so $v = V_{\max}\,r/(1+r)$.

- $[\mathrm{S}] = 0.2\ \mathrm{mM}$: $r = 0.1$, $v = 100\cdot\frac{0.1}{1.1} = 9.1\ \mathrm{\mu M/s}$. Roughly $\tfrac{1}{10}V_{\max}$ — the linear regime, where $v \approx (V_{\max}/K_M)[\mathrm{S}] = 50\cdot 0.2 = 10\ \mathrm{\mu M/s}$ (close, and it slightly overestimates because we ignored the substrate in the denominator).
- $[\mathrm{S}] = 2\ \mathrm{mM} = K_M$: $r = 1$, $v = 100\cdot\frac{1}{2} = 50\ \mathrm{\mu M/s}$ — exactly half, by definition of $K_M$.
- $[\mathrm{S}] = 20\ \mathrm{mM}$: $r = 10$, $v = 100\cdot\frac{10}{11} = 91\ \mathrm{\mu M/s}$ — 91% of top speed. Even ten-fold over $K_M$ you are not quite saturated; that is how slowly a hyperbola approaches its asymptote.

**Example 2 ($K_M$ and $V_{\max}$ from two measurements).** You measure $v_1 = 50\ \mathrm{\mu M/s}$ at $[\mathrm{S}]_1 = 4\ \mathrm{mM}$ and $v_2 = 75\ \mathrm{\mu M/s}$ at $[\mathrm{S}]_2 = 12\ \mathrm{mM}$. Find both constants.

Take the ratio of the two Michaelis–Menten equations so $V_{\max}$ cancels:

$$\frac{v_1}{v_2} = \frac{[\mathrm{S}]_1\,(K_M + [\mathrm{S}]_2)}{[\mathrm{S}]_2\,(K_M + [\mathrm{S}]_1)}.$$

Plug in $v_1/v_2 = 50/75 = 2/3$ and the concentrations:

$$\frac{2}{3} = \frac{4\,(K_M + 12)}{12\,(K_M + 4)} = \frac{4K_M + 48}{12K_M + 48}.$$

Cross-multiply: $2(12K_M + 48) = 3(4K_M + 48)$, i.e. $24K_M + 96 = 12K_M + 144$, so $12K_M = 48$ and $\boxed{K_M = 4\ \mathrm{mM}}$. Back-substitute into $v_1 = V_{\max}[\mathrm{S}]_1/(K_M+[\mathrm{S}]_1)$:

$$V_{\max} = v_1\,\frac{K_M + [\mathrm{S}]_1}{[\mathrm{S}]_1} = 50\cdot\frac{4 + 4}{4} = 50\cdot 2 = 100\ \mathrm{\mu M/s}.$$

*Check.* With $K_M = 4$, $V_{\max} = 100$: at $[\mathrm{S}] = 12$, $v = 100\cdot 12/16 = 75$ ✓, matching $v_2$. (The Lineweaver–Burk route gives the same line through the two points $(1/[\mathrm{S}], 1/v) = (0.25, 0.02)$ and $(0.0833, 0.0133)$: slope $0.04 = K_M/V_{\max}$, intercept $0.01 = 1/V_{\max}$.)

## Watch out

- **You might think $K_M$ is a binding affinity.** It is *only* when catalysis is slow: $K_M = (k_{-1}+k_{\mathrm{cat}})/k_1$, which equals $K_d = k_{-1}/k_1$ **only if** $k_{\mathrm{cat}} \ll k_{-1}$. A fast enzyme has $K_M > K_d$ because the complex is drained by catalysis, not just by unbinding. So "$K_M$ measures affinity" is a useful slogan, not an identity.
- **You might think $V_{\max}$ is a property of the enzyme.** It scales with *how much* enzyme you added: $V_{\max} = k_{\mathrm{cat}}[\mathrm{E}]_{\text{tot}}$. The enzyme-intrinsic number is $k_{\mathrm{cat}}$ (turnover per molecule), which you only get after dividing out $[\mathrm{E}]_{\text{tot}}$. $K_M$ and $k_{\mathrm{cat}}$ are intrinsic; $V_{\max}$ is not.
- **You might read "$[\mathrm{S}] = 10\,K_M$ means saturated."** It means 91% of $V_{\max}$, not 100%. A hyperbola never actually reaches its ceiling; to be within 1% you need $[\mathrm{S}] \approx 100\,K_M$.

## One-liner

> Michaelis–Menten is a Langmuir binding curve times a turnover rate: $v = V_{\max}[\mathrm{S}]/(K_M + [\mathrm{S}])$, saturating at $V_{\max} = k_{\mathrm{cat}}[\mathrm{E}]_{\text{tot}}$ with half-max at $K_M$, and its low-substrate slope $k_{\mathrm{cat}}/K_M$ can rise no faster than diffusion delivers substrate.

## Problems

**P1 (🟢)** An enzyme obeys Michaelis–Menten with $K_M = 5\ \mathrm{mM}$. Express $v$ as a fraction of $V_{\max}$ at (a) $[\mathrm{S}] = 5\ \mathrm{mM}$, (b) $[\mathrm{S}] = 50\ \mathrm{mM}$, (c) $[\mathrm{S}] = 0.5\ \mathrm{mM}$. For (c), compare with the low-substrate linear estimate $v \approx (V_{\max}/K_M)[\mathrm{S}]$.

**P2 (🟡)** For a reaction you measure $v = 20\ \mathrm{\mu M/s}$ at $[\mathrm{S}] = 1\ \mathrm{mM}$ and $v = 40\ \mathrm{\mu M/s}$ at $[\mathrm{S}] = 4\ \mathrm{mM}$. Find $K_M$ and $V_{\max}$. If the total enzyme concentration is $[\mathrm{E}]_{\text{tot}} = 10\ \mathrm{nM}$, find the turnover number $k_{\mathrm{cat}}$.

**P3 (🔴, optional)** Triosephosphate isomerase has $k_{\mathrm{cat}} \approx 4300\ \mathrm{s^{-1}}$ and $K_M \approx 0.47\ \mathrm{mM}$ for its substrate. Compute its catalytic efficiency $k_{\mathrm{cat}}/K_M$ and compare with the diffusion limit ($\sim 10^8$–$10^9\ \mathrm{M^{-1}s^{-1}}$, [1.4](01-04-einstein-relation.md)). Is this enzyme "catalytically perfect"?

<details>
<summary>Solutions</summary>

**P1** Use $v/V_{\max} = r/(1+r)$ with $r = [\mathrm{S}]/K_M$.

(a) $r = 1$: $v/V_{\max} = 1/2 = \mathbf{0.50}$.
(b) $r = 10$: $v/V_{\max} = 10/11 = \mathbf{0.91}$.
(c) $r = 0.1$: $v/V_{\max} = 0.1/1.1 = \mathbf{0.091}$. The linear estimate gives $v/V_{\max} \approx r = 0.10$ — a 10% overestimate, because it drops the $[\mathrm{S}]$ sitting in the denominator.

*Check.* Monotonic and bracketed in $[0,1]$: $0.091 < 0.50 < 0.91$, rising with substrate as a saturating curve must. ✓

**P2** Ratio of the two equations cancels $V_{\max}$:

$$\frac{20}{40} = \frac{1\cdot(K_M + 4)}{4\cdot(K_M + 1)} \;\Longrightarrow\; \frac{1}{2} = \frac{K_M + 4}{4K_M + 4}.$$

Cross-multiply: $4K_M + 4 = 2K_M + 8 \Rightarrow 2K_M = 4 \Rightarrow \boxed{K_M = 2\ \mathrm{mM}}$. Then

$$V_{\max} = v\,\frac{K_M + [\mathrm{S}]}{[\mathrm{S}]} = 20\cdot\frac{2+1}{1} = 60\ \mathrm{\mu M/s}.$$

Turnover number: $k_{\mathrm{cat}} = V_{\max}/[\mathrm{E}]_{\text{tot}} = (60\times 10^{-6}\ \mathrm{M/s})/(10\times 10^{-9}\ \mathrm{M}) = 6000\ \mathrm{s^{-1}}$.

*Check.* At $[\mathrm{S}] = 4$ the fit predicts $v = 60\cdot 4/6 = 40\ \mathrm{\mu M/s}$ ✓. And $k_{\mathrm{cat}} = 6000\ \mathrm{s^{-1}}$ sits comfortably in the biological $10$–$10^6\ \mathrm{s^{-1}}$ range. ✓

**P3** Convert $K_M = 0.47\ \mathrm{mM} = 4.7\times 10^{-4}\ \mathrm{M}$:

$$\frac{k_{\mathrm{cat}}}{K_M} = \frac{4300\ \mathrm{s^{-1}}}{4.7\times 10^{-4}\ \mathrm{M}} \approx 9.1\times 10^{6}\ \mathrm{M^{-1}s^{-1}}.$$

That is a factor $\sim 10$–$100$ below the diffusion ceiling of $10^8$–$10^9\ \mathrm{M^{-1}s^{-1}}$. So it is *close* — within one to two orders of magnitude — and triosephosphate isomerase is indeed the textbook example of a near-"catalytically perfect" enzyme, essentially converting substrate as fast as it arrives.

*Check.* Units: $\mathrm{s^{-1}}/\mathrm{M} = \mathrm{M^{-1}s^{-1}}$, correct for a bimolecular rate constant. Magnitude sits just under the diffusion limit, exactly the hallmark of a diffusion-limited enzyme. ✓

</details>

## Flashback

**From Lesson 2.3 (Ligand binding and receptor occupancy):** A receptor binds its ligand with dissociation constant $K_d = 20\ \mathrm{nM}$. (a) What fraction of receptors is occupied at a ligand concentration $[\mathrm{L}] = 60\ \mathrm{nM}$? (b) What concentration is needed for 90% occupancy?

<details>
<summary>Solution</summary>

The Langmuir occupancy is $p = [\mathrm{L}]/(K_d + [\mathrm{L}])$ — the very same hyperbola as this lesson's rate law, with $K_d$ in the role of $K_M$.

(a) $p = 60/(20 + 60) = 60/80 = \mathbf{0.75}$ — three-quarters bound.

(b) Set $p = 0.9$: $0.9 = [\mathrm{L}]/(20 + [\mathrm{L}]) \Rightarrow 0.9(20 + [\mathrm{L}]) = [\mathrm{L}] \Rightarrow 18 = 0.1[\mathrm{L}] \Rightarrow [\mathrm{L}] = 180\ \mathrm{nM} = 9K_d$.

*Check.* Reaching $90\%$ takes $[\mathrm{L}] = 9K_d$, exactly the enzyme fact that $90\%$ of $V_{\max}$ needs $[\mathrm{S}] = 9K_M$ — same curve, same slow approach to saturation. ✓

</details>

## Connections

- **Backward:** the derivation is pure mass action from [4.1](04-01-reaction-kinetics-mass-action.md) plus the quasi-steady-state idea, and the resulting curve is the Langmuir isotherm of [2.3](02-03-ligand-binding-occupancy.md) — occupancy times turnover. $K_M$ reduces to that lesson's $K_d$ when catalysis is slow.
- **Forward:** [4.3 Molecular motors and the Brownian ratchet](04-03-molecular-motors-ratchet.md) treats a motor as an enzyme whose "product" is a mechanical step, so its speed-versus-fuel curve is Michaelis–Menten in ATP — $V_{\max}$ becomes the motor's top stepping rate.
- **Sideways (stat mech / diffusion):** the catalytic-efficiency ceiling $k_{\mathrm{cat}}/K_M \lesssim 10^{9}\ \mathrm{M^{-1}s^{-1}}$ is the diffusion-limited encounter rate from [1.4](01-04-einstein-relation.md) — the Einstein/Smoluchowski result that reaction rates ultimately bottom out at how fast molecules find each other by random walk.
