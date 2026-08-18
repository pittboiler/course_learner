# Radiation Detection & Shielding · Lesson 4.2: Buildup factors

> ⏱ ~15 min · Module 4: Shielding design & health physics · Builds on: [4.1 Exponential attenuation & HVL](04-01-exponential-attenuation-hvl.md) · Unlocks: [4.3 Point-kernel method](04-03-point-kernel-method.md)

## Why this matters

In [4.1](04-01-exponential-attenuation-hvl.md) you sized a shield with $I=I_0 e^{-\mu x}$ and half-value layers — clean, exponential, done. There's a catch that will get you a *failed* radiation survey: that formula quietly assumes every photon that interacts is gone for good. In a real slab, a photon can Compton-scatter once, twice, three times and *still* stagger out the far side and hit your detector. Those survivors mean the true intensity behind the shield is **higher** than $e^{-\mu x}$ predicts — sometimes several times higher. Ignore them and your lead is too thin. The **buildup factor** is the one number that fixes it, and it's the difference between a shield that passes inspection and one that doesn't.

## The idea

Picture the two extremes. A **narrow beam** is a pencil ray aimed through a slab at a tiny detector far away, with collimators soaking up anything that veers off-axis. Any photon that so much as nicks an electron is deflected out of the pencil and never counted — so "interact once = removed" is *true*, and $e^{-\mu x}$ is exact. This is the idealized geometry $\mu$ was measured in.

A **broad beam** is the real world: a fat source, a thick slab, a detector (or a person) with real area right behind it. Now a photon that Compton-scatters isn't gone — it's just *redirected*, and it might scatter again and again, degrading in energy, until it either gets absorbed or leaks out the back and reaches the detector anyway. Every one of those scattered survivors adds to the signal that $e^{-\mu x}$ said would never arrive. So the true intensity is the uncollided beam **plus** a scattered halo built up inside the shield.

The buildup factor $B$ is just the bookkeeping ratio: *total* intensity divided by the *uncollided-only* intensity. It's always $\ge 1$ (you can only add survivors, never subtract), it grows with thicker shields (more slab = more room to scatter and still escape), and it depends on energy and material (which set how photons scatter versus get cleanly absorbed). Multiply your clean exponential by $B$ and you've corrected it.

## The formal version

Write the true transmitted intensity as the narrow-beam law with a correction factor out front:

$$I = B\,I_0\,e^{-\mu x}, \qquad B \ge 1.$$

*In words: the real intensity is the ideal exponential times a buildup factor that counts the scattered photons the exponential missed.* Here $I_0$ is the unshielded intensity, $\mu$ (units $\mathrm{mm^{-1}}$ or $\mathrm{cm^{-1}}$) is the linear attenuation coefficient from [4.1](04-01-exponential-attenuation-hvl.md), $x$ is the shield thickness, and $B$ is dimensionless.

Equivalently, $B$ is defined as the ratio itself:

$$B = \frac{\text{quantity with scattered photons included}}{\text{quantity from uncollided photons only}}.$$

**What $B$ depends on.** Three things, and thickness enters through **mean free paths** — the natural thickness unit $\mu x$ (dimensionless), the number of $e$-foldings of attenuation:

- **Thickness in mfp, $\mu x$:** $B$ rises as the shield gets thicker. At $\mu x = 0$, $B = 1$ (nothing has scattered yet); by $\mu x = 5\text{–}10$ it can be several-fold. *In words: a thicker slab is a bigger scattering volume, so the halo grows relative to the shrinking pencil.*
- **Photon energy $E$:** sets the mix of interactions (photoelectric vs Compton vs pair — see [1.1](01-01-photon-photoelectric-compton.md)–[1.2](01-02-photon-pair-production-total-attenuation.md)). Compton scattering *redirects and keeps* photons; photoelectric absorption *removes* them.
- **Material $Z$:** high-$Z$ shields (lead) reabsorb scattered photons photoelectrically, so their buildup stays modest; low-$Z$ shields (water, concrete) let scattered photons keep bouncing, so their buildup is larger.

**Which quantity are you building up?** $B$ isn't a single number — it depends on what you're measuring, because scattered photons are softer (lower energy) than the primaries and count differently:

- **Number (flux) buildup** $B_N$ — just counts photons, regardless of energy.
- **Energy-fluence buildup** $B_E$ — weights each photon by its energy; scattered photons carry less, so $B_E < B_N$.
- **Dose (exposure) buildup** $B_D$ — weights by dose delivered; this is the one you want for shielding people, and it's what "the buildup factor" usually means in a dose calc.

**Empirical forms.** There's no tidy closed formula for $B(\mu x)$ — it comes from Monte-Carlo transport or moments-method calculations, then gets *fit* to a handy function you can evaluate. Three classic fits (you don't memorize the constants — you look them up per material/energy):

- **Taylor:** $B(\mu x) = A_1 e^{-\alpha_1 \mu x} + (1-A_1)e^{-\alpha_2 \mu x}$ — two exponentials, good for embedding in a point-kernel integral (that's why [4.3](04-03-point-kernel-method.md) likes it).
- **Berger:** $B(\mu x) = 1 + a\,\mu x\, e^{\,b\,\mu x}$ — one term, "1 plus a growing correction."
- **Geometric progression (GP, the modern standard):** a five-parameter form (ANSI/ANS-6.4.3) that fits accurately out to $\mu x \approx 40$.

*In words: all three are just curve-fits to computed buildup data — pick one, grab its tabulated constants for your material and energy, and evaluate.* For hand calculations you'll more often just read $B$ off a table at your $\mu x$, which is exactly what we'll do below.

## Picture

![Semilog plot of transmitted fraction versus shield thickness in half-value layers: a straight blue narrow-beam line for e to the minus mu x, and a coral broad-beam line B times e to the minus mu x lying above it, the vertical gap (equal to log B) widening with thickness; both cross the 0.01 target line, the coral one about 1.6 HVL later](assets/04-02-fig1.svg)

On this log scale the narrow beam $e^{-\mu x}$ is a straight line (constant halving per HVL). The broad beam $B\,e^{-\mu x}$ rides **above** it, and the vertical gap — exactly $\log_{10} B$ — *widens* as the shield thickens, because $B$ itself grows. To hit the same $\times 100$ target ($I/I_0 = 0.01$), the broad beam needs about 1.6 more HVL of shield. That horizontal gap *is* the price of buildup.

## Worked examples

**Example 1 — the boss shape: Co-60 in lead, $\times 100$ with buildup.** You need to cut a 1332 keV Co-60 dose rate by a factor of 100 with lead, $\mu \approx 0.0576\,\text{mm}^{-1}$. Take dose buildup $B \approx 3$ at the resulting thickness (we'll justify "at the resulting thickness" in Example 2).

*Narrow-beam first* (the [4.1](04-01-exponential-attenuation-hvl.md) answer). Set $e^{-\mu x}=0.01$:

$$x_{\text{narrow}} = \frac{1}{\mu}\ln\!\frac{1}{0.01} = \frac{\ln 100}{0.0576\,\text{mm}^{-1}} = \frac{4.605}{0.0576\,\text{mm}^{-1}} \approx 79.9\,\text{mm}.$$

That's $\ln 100/\ln 2 = 6.64$ HVL, with $\text{HVL}=\ln 2/\mu = 0.693/0.0576 = 12.0\,\text{mm}$.

*Now include buildup.* We require the **true** dose to be $1\%$ of unshielded, so it's $B\,e^{-\mu x}$ that must equal $0.01$:

$$B\,e^{-\mu x} = 0.01 \;\Longrightarrow\; e^{-\mu x} = \frac{0.01}{B} \;\Longrightarrow\; x = \frac{1}{\mu}\ln\!\big(B \cdot 100\big).$$

Plugging $B=3$:

$$x = \frac{\ln(3\times 100)}{0.0576\,\text{mm}^{-1}} = \frac{\ln 300}{0.0576\,\text{mm}^{-1}} = \frac{5.704}{0.0576\,\text{mm}^{-1}} \approx 99.0\,\text{mm}.$$

**The cost of buildup.** The extra thickness is $99.0 - 79.9 = 19.1\,\text{mm}$. Notice it depends *only* on $B$:

$$\Delta x = \frac{\ln B}{\mu} \;\Longrightarrow\; \Delta x_{\text{in HVL}} = \frac{\ln B}{\ln 2} = \log_2 B = \log_2 3 \approx 1.58\ \text{HVL}.$$

So buildup costs about **+1.6 HVL** — roughly 19 mm of extra lead, taking you from $\sim 80$ mm to $\sim 99$ mm. Clean rule to pocket: **each factor-of-2 in $B$ = one extra HVL.** A shield designed on the narrow-beam formula alone would leak $\sim 3\times$ the dose you signed off on.

**Example 2 — iterate, because $B$ depends on the thickness you're solving for.** The awkward part: $B$ is a function of $\mu x$, but $\mu x$ is what we're trying to find. This is implicit — solve it by fixed-point iteration. Say a table of dose buildup for lead at $\sim 1.3$ MeV gives (illustrative values):

$$B(4.6\ \text{mfp}) \approx 2.6, \quad B(5.6\ \text{mfp}) \approx 2.9, \quad B(5.7\ \text{mfp}) \approx 3.0.$$

- **Round 0 (guess):** ignore buildup. $x_0 = 79.9\,\text{mm}$, i.e. $\mu x_0 = 4.6$ mfp.
- **Round 1:** look up $B$ at $4.6$ mfp $\to B \approx 2.6$. Resolve: $x_1 = \frac{1}{\mu}\ln(2.6\times100) = \frac{\ln 260}{0.0576} = \frac{5.561}{0.0576} \approx 96.5\,\text{mm}$ ($\mu x_1 = 5.56$ mfp).
- **Round 2:** look up $B$ at $5.56$ mfp $\to B \approx 2.9$. Resolve: $x_2 = \frac{\ln 290}{0.0576} = \frac{5.670}{0.0576} \approx 98.4\,\text{mm}$ ($\mu x_2 = 5.67$ mfp).
- **Round 3:** $B \approx 3.0$, $x_3 = \frac{\ln 300}{0.0576} \approx 99.0\,\text{mm}$. The thickness barely moved — **converged.**

**Why it converges so fast.** Each round changes $x$ only through $\ln B$, and $B$ grows *slowly* (sublinearly) with $x$. So a correction to $x$ produces a much smaller correction to $B$, which produces a still-smaller correction to $x$: the steps shrink geometrically. In one or two rounds you're done. In practice engineers skip the ceremony — guess $B$ from the ballpark thickness, add the $\sim 1.6$ HVL, and check once.

## Watch out

- **You might think $e^{-\mu x}$ is conservative because it "ignores" scattering.** Backwards — it ignores scattered photons *arriving*, so it **under**-estimates the dose behind the shield and makes your shield too **thin**. Buildup always pushes the required thickness up, never down. Erring toward more lead is the safe direction; trusting the bare exponential is not.
- **You might use the wrong $B$.** Buildup is quantity-specific: $B_N$ (number) $> B_E$ (energy) and $B_D$ (dose) sit differently because scattered photons are softer. For shielding a person, use the **dose/exposure** buildup, not the number buildup. And $B$ is tabulated for a **geometry** (point isotropic source in an infinite medium is the usual one) — a plane or slab source has its own $B$.
- **You might expect lead and water to have the same buildup.** No — low-$Z$ materials have *larger* buildup. In water/concrete, Compton scattering dominates and scattered photons keep propagating; in lead, high-$Z$ photoelectric absorption mops up the degraded scattered photons, so lead's buildup stays comparatively small. High-$Z$ shields aren't just better attenuators, they're "self-cleaning" of scatter.

## One-liner

> Real shields are broad-beam, so scattered survivors make the true dose $B\ge1$ times the bare $e^{-\mu x}$ — and paying for them costs about $\log_2 B$ extra half-value layers.

## Problems

**P1 (🟢)** You shield a photon beam through concrete, $\mu = 0.0500\,\text{mm}^{-1}$, aiming for a $\times 10$ reduction. A table gives dose buildup $B \approx 2.5$ at the relevant thickness. (a) Narrow-beam thickness? (b) Broad-beam thickness including buildup? (c) How many *extra* HVL did buildup cost?

**P2 (🟡)** Two shields are each $5$ mfp thick ($\mu x = 5$) for the same 1 MeV photons: one is **lead**, one is **water**. Which has the larger dose buildup factor, and *why*? Tie your answer to the photon-interaction physics from [1.1](01-01-photon-photoelectric-compton.md)–[1.2](01-02-photon-pair-production-total-attenuation.md).

**P3 (🔴)** Reduce a Co-60 dose rate by a factor of **1000** in lead ($\mu = 0.0576\,\text{mm}^{-1}$), with dose buildup $B \approx 4$ at that thickness. (a) Thickness ignoring buildup. (b) Thickness with buildup. (c) Extra HVL — and notice what a "nice" $B$ does to the answer.

<details>
<summary>Solutions</summary>

**P1.** Use $\text{HVL} = \ln 2/\mu = 0.693/0.0500 = 13.9\,\text{mm}$.

(a) Narrow beam, $e^{-\mu x} = 0.1$:
$$x_{\text{narrow}} = \frac{\ln 10}{\mu} = \frac{2.303}{0.0500\,\text{mm}^{-1}} = 46.1\,\text{mm}.$$

(b) Require $B\,e^{-\mu x} = 0.1$, so $x = \frac{1}{\mu}\ln(B\cdot 10)$:
$$x_{\text{broad}} = \frac{\ln(2.5\times 10)}{0.0500\,\text{mm}^{-1}} = \frac{\ln 25}{0.0500\,\text{mm}^{-1}} = \frac{3.219}{0.0500\,\text{mm}^{-1}} = 64.4\,\text{mm}.$$

(c) Extra thickness $= 64.4 - 46.1 = 18.3\,\text{mm}$. In HVL:
$$\Delta x_{\text{HVL}} = \frac{\ln B}{\ln 2} = \log_2 2.5 = \frac{0.916}{0.693} \approx 1.32\ \text{HVL}.$$
*Check:* $18.3\,\text{mm} / 13.9\,\text{mm} = 1.32$ HVL ✓. Buildup added about a third again as much concrete beyond the naïve answer.

**P2.** **Water** has the larger dose buildup factor. At 1 MeV in both materials the dominant interaction is **Compton scattering**, which *redirects* photons rather than removing them — a scattered photon is still in the shield, free to scatter again and eventually leak out to the detector. In **lead** (high $Z$), once a photon Compton-scatters and loses energy, the degraded lower-energy photon is very likely to be **photoelectrically absorbed** (photoelectric cross-section scales roughly as $Z^{4\text{–}5}$ and blows up at low energy — see [1.1](01-01-photon-photoelectric-compton.md)). So high-$Z$ lead continuously "cleans up" its own scattered halo, keeping $B$ small. In **water** (low $Z$) there's almost no photoelectric mop-up, so scattered photons survive and multiply the arriving flux — a bigger halo, hence larger $B$. Rule of thumb: low $Z$ $\Rightarrow$ big buildup, high $Z$ $\Rightarrow$ modest buildup.

**P3.** $\text{HVL} = 0.693/0.0576 = 12.0\,\text{mm}$.

(a) $e^{-\mu x} = 0.001$:
$$x_{\text{narrow}} = \frac{\ln 1000}{0.0576\,\text{mm}^{-1}} = \frac{6.908}{0.0576\,\text{mm}^{-1}} \approx 119.9\,\text{mm}.$$

(b) $B\,e^{-\mu x} = 0.001$, so $x = \frac{1}{\mu}\ln(B\cdot 1000)$:
$$x_{\text{broad}} = \frac{\ln(4\times 1000)}{0.0576\,\text{mm}^{-1}} = \frac{\ln 4000}{0.0576\,\text{mm}^{-1}} = \frac{8.294}{0.0576\,\text{mm}^{-1}} \approx 144.0\,\text{mm}.$$

(c) Extra $= 144.0 - 119.9 = 24.1\,\text{mm}$, and
$$\Delta x_{\text{HVL}} = \log_2 B = \log_2 4 = 2\ \text{HVL\ exactly}.$$
*Check:* $24.1\,\text{mm} / 12.0\,\text{mm} = 2.0$ HVL ✓. Because $B$ landed on a power of 2, buildup costs a whole number of HVL — here exactly 2. That's the $\log_2 B$ rule made vivid: $B=2$ is +1 HVL, $B=4$ is +2, $B=8$ would be +3.

</details>

## Flashback

**From Lesson 4.1 (Exponential attenuation & HVL):** A narrow beam of 662 keV Cs-137 gammas passes through lead with $\mu = 0.113\,\text{mm}^{-1}$. What thickness reduces the beam intensity by a factor of **1000**? Express the answer both in mm and as a number of tenth-value layers (TVL). *(Narrow-beam only — no buildup here.)*

<details>
<summary>Solution</summary>

Narrow beam, so $I/I_0 = e^{-\mu x} = 10^{-3}$:

$$x = \frac{1}{\mu}\ln\!\frac{1}{10^{-3}} = \frac{\ln 1000}{0.113\,\text{mm}^{-1}} = \frac{6.908}{0.113\,\text{mm}^{-1}} \approx 61.1\,\text{mm}.$$

The tenth-value layer is $\text{TVL} = \ln 10/\mu = 2.303/0.113 = 20.4\,\text{mm}$, and a $\times 1000$ reduction is exactly **3 TVL** (three factors of 10):

$$3 \times 20.4\,\text{mm} = 61.1\,\text{mm}.$$

*Check:* both routes agree ✓. Roughly 6 cm of lead per factor of 1000 at Cs-137 energy — and remember, add buildup for a *real* broad-beam shield and this grows by $\log_2 B$ HVL.

</details>

## Connections

- **Backward:** this is the correction to [4.1](04-01-exponential-attenuation-hvl.md)'s $I=I_0 e^{-\mu x}$ — same $\mu$, same HVL, now with the scattered photons put back in. The whole effect is Compton scattering ([1.1](01-01-photon-photoelectric-compton.md)) refusing to remove photons cleanly, arbitrated by the photoelectric/pair competition of [1.2](01-02-photon-pair-production-total-attenuation.md).
- **Forward:** [4.3 Point-kernel method](04-03-point-kernel-method.md) integrates $B\,e^{-\mu x}/(4\pi r^2)$ over a distributed source — the Taylor two-exponential form exists precisely so buildup slots cleanly inside that integral. Buildup also shapes the dose calc that feeds ALARA shielding decisions in [4.5](04-05-health-physics-alara-limits.md).
- **Sideways (transport theory):** the buildup factor is a compact stand-in for the full solution of the Boltzmann photon-transport equation — the same equation whose neutron cousin drives moderation in [4.4](04-04-neutron-moderation-shielding.md) and criticality in [`reactor-physics`](../../reactor-physics/syllabus.md). Wherever "attenuation plus scattering" appears, some buildup-like fudge factor is hiding the transport integral you didn't want to do by hand.
