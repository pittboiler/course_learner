# Intro to Nuclear Engineering & Radiation · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Nuclear engineering is accounting in two currencies: **energy** (a mass defect
times $c^2$, quoted in MeV) and **neutrons** (a population that either replaces
itself or doesn't). Everything below serves one of those two ledgers — the
binding-energy and Q-value machinery that says how many MeV come out, the
cross-section and four-factor vocabulary that says how many neutrons survive a
lap, and the attenuation/stopping/dose chain that says what the radiation does
once it leaves. Constants, unit conversions, and the tabulated nuclear data the
lessons quote without deriving are all here.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\ce{^{A}_{Z}X}$ | nuclide label: $A$ nucleons on top, $Z$ protons below | [1.1](lessons/01-01-nucleus-bookkeeping.md) |
| $Z$, $N$, $A$ | proton count (fixes the element), neutron count, total nucleons $A = Z+N$ | [1.1](lessons/01-01-nucleus-bookkeeping.md) |
| $\text{u}$ | atomic mass unit — $\ce{^{12}C}$ weighs exactly 12 u; worth 931.494 MeV$/c^2$ | [1.1](lessons/01-01-nucleus-bookkeeping.md) |
| $\text{fm}$ | femtometer, $10^{-15}$ m — the natural nuclear length | [1.1](lessons/01-01-nucleus-bookkeeping.md) |
| $r_0$ | nuclear radius constant, $\approx 1.2$ fm, in $R = r_0 A^{1/3}$ | [1.1](lessons/01-01-nucleus-bookkeeping.md) |
| $\Delta m$ | mass defect — how much lighter the bound nucleus is than its loose parts | [1.2](lessons/01-02-binding-energy-chart-of-nuclides.md) |
| $B$, $B/A$ | total binding energy (MeV) and binding energy **per nucleon** — the figure of merit | [1.2](lessons/01-02-binding-energy-chart-of-nuclides.md) |
| $m_H$, $m_n$ | mass of the hydrogen **atom** and of the free neutron, in u | [1.2](lessons/01-02-binding-energy-chart-of-nuclides.md) |
| $\lambda$ | decay constant — probability per second that a given nucleus decays, in s⁻¹ | [1.3](lessons/01-03-radioactivity-decay-law.md) |
| $N(t)$, $N_0$ | number of undecayed nuclei now and at $t=0$ | [1.3](lessons/01-03-radioactivity-decay-law.md) |
| $A(t)$, $A_0$ | **activity** — decays per second, $A = \lambda N$ (not the mass number) | [1.3](lessons/01-03-radioactivity-decay-law.md) |
| $T_{1/2}$, $\tau$ | half-life and mean life; $\tau = T_{1/2}/\ln 2 \approx 1.44\,T_{1/2}$ | [1.3](lessons/01-03-radioactivity-decay-law.md) |
| Bq, Ci | becquerel (1 decay/s) and curie ($3.7\times10^{10}$ Bq) | [1.3](lessons/01-03-radioactivity-decay-law.md) |
| $\lambda_1,\lambda_2$ | parent and daughter decay constants in a two-step chain | [1.4](lessons/01-04-decay-chains-equilibrium.md) |
| $\alpha$, $\beta^-$, $\beta^+$, EC, $\gamma$ | the decay modes: helium nucleus, electron, positron, electron capture, photon | [1.4](lessons/01-04-decay-chains-equilibrium.md) |
| $X(a,b)Y$ | reaction shorthand: target, (projectile in, ejectile out), residual nucleus | [1.5](lessons/01-05-nuclear-reactions-q-values.md) |
| $Q$ | Q-value — rest-mass energy released ($Q>0$) or owed ($Q<0$) by a reaction | [1.5](lessons/01-05-nuclear-reactions-q-values.md) |
| $\Delta$ | **mass excess** $(M - A\,\text{u})c^2$, tabulated in MeV — the fast route to $Q$ | [1.5](lessons/01-05-nuclear-reactions-q-values.md) |
| $E_{th}$ | threshold energy — minimum lab kinetic energy for an endothermic reaction | [1.5](lessons/01-05-nuclear-reactions-q-values.md) |
| $\sigma$ | microscopic cross-section — the effective bullseye one nucleus presents, in cm² | [2.1](lessons/02-01-microscopic-cross-section.md) |
| barn | $10^{-24}$ cm² — the nucleus-sized unit of area | [2.1](lessons/02-01-microscopic-cross-section.md) |
| $\sigma_s,\ \sigma_\gamma,\ \sigma_f,\ \sigma_a,\ \sigma_t$ | scatter, radiative capture, fission, absorption ($=\sigma_\gamma+\sigma_f+\cdots$), total ($=\sigma_s+\sigma_a$) | [2.1](lessons/02-01-microscopic-cross-section.md) |
| $\phi$, $I$ | neutron flux (all directions) and beam intensity, both n·cm⁻²s⁻¹ | [2.1](lessons/02-01-microscopic-cross-section.md) |
| $R$ | reaction rate **density**, cm⁻³s⁻¹ (not the nuclear radius of 1.1) | [2.1](lessons/02-01-microscopic-cross-section.md) |
| $N$ (in $\Sigma=N\sigma$) | number **density** of nuclei, cm⁻³ (not the neutron count of 1.3) | [2.2](lessons/02-02-macroscopic-cross-section-mean-free-path.md) |
| $\Sigma$ | macroscopic cross-section, cm⁻¹ — interaction probability per cm of travel | [2.2](lessons/02-02-macroscopic-cross-section-mean-free-path.md) |
| $\lambda_{\text{mfp}}$ | mean free path $1/\Sigma$ (a *distance* — unrelated to the decay constant $\lambda$) | [2.2](lessons/02-02-macroscopic-cross-section-mean-free-path.md) |
| $N_A$ | Avogadro's number, $6.022\times10^{23}$ mol⁻¹ | [2.2](lessons/02-02-macroscopic-cross-section-mean-free-path.md) |
| $v_0$, $E_0$ | thermal reference point: 2200 m/s and 0.025 eV, where cross-sections are tabulated | [2.3](lessons/02-03-energy-dependence-1-over-v-resonances.md) |
| $E_r$ | resonance energy — where the compound nucleus hits an excited level | [2.3](lessons/02-03-energy-dependence-1-over-v-resonances.md) |
| $\alpha$ (in $E_{\min}=\alpha E$) | collision parameter $\left(\frac{A-1}{A+1}\right)^2$ (not the alpha particle) | [2.4](lessons/02-04-moderation-slowing-neutrons.md) |
| $\xi$ | average logarithmic energy loss per elastic collision | [2.4](lessons/02-04-moderation-slowing-neutrons.md) |
| $u$ (lethargy) | slowness coordinate $\ln(E_0/E)$ (not the atomic mass unit) | [2.4](lessons/02-04-moderation-slowing-neutrons.md) |
| $\bar n$ | collisions needed to thermalize | [2.4](lessons/02-04-moderation-slowing-neutrons.md) |
| $\xi\Sigma_s$, MR | moderating power and moderating ratio $\xi\Sigma_s/\Sigma_a$ | [2.4](lessons/02-04-moderation-slowing-neutrons.md) |
| $E_f$, $\dot N_f$ | recoverable energy per fission ($\approx 200$ MeV) and fissions per second | [3.1](lessons/03-01-fission-process-energy.md) |
| $\nu$, $\nu_p$, $\nu_d$ | neutrons per fission, split into prompt and delayed | [3.2](lessons/03-02-fission-products-neutron-yield.md) |
| $\eta$ | reproduction factor — neutrons produced per neutron **absorbed in fuel** | [3.2](lessons/03-02-fission-products-neutron-yield.md) |
| $\beta$ | delayed-neutron fraction $\nu_d/\nu$ ($\approx 0.0065$ for $\ce{^{235}U}$) | [3.2](lessons/03-02-fission-products-neutron-yield.md) |
| $k$, $k_\infty$, $k_{\text{eff}}$ | multiplication factor: generic, infinite-medium, and finite-reactor | [3.3](lessons/03-03-chain-reaction-multiplication-factor.md) |
| $\ell$, $\ell_{\text{eff}}$ | neutron generation time, prompt-only and delayed-averaged | [3.3](lessons/03-03-chain-reaction-multiplication-factor.md) |
| $T$ (period) | reactor period $\ell/\ln k$ — time for power to change by a factor $e$ | [3.3](lessons/03-03-chain-reaction-multiplication-factor.md) |
| $f$, $p$, $\varepsilon$ | thermal utilization, resonance escape probability, fast-fission factor | [3.4](lessons/03-04-criticality-four-factor-formula.md) |
| $P_{NL}$ | total non-leakage probability | [3.4](lessons/03-04-criticality-four-factor-formula.md) |
| $\rho$ (reactivity) | $(k_{\text{eff}}-1)/k_{\text{eff}}$ — distance from critical (not mass density) | [3.4](lessons/03-04-criticality-four-factor-formula.md) |
| pcm | "per cent mille", $10^{-5}$ of reactivity | [3.4](lessons/03-04-criticality-four-factor-formula.md) |
| $n\,\tau\,T$ | Lawson triple product: density × confinement time × temperature | [4.1](lessons/04-01-fusion-basics.md) |
| $k e^2$ | Coulomb constant bundle, $1.44$ MeV·fm — barrier heights in one step | [4.1](lessons/04-01-fusion-basics.md) |
| $\mu$, $\mu/\rho$ | linear (cm⁻¹) and mass (cm²/g) attenuation coefficients for photons | [4.2](lessons/04-02-photons-through-matter.md) |
| HVL, TVL | half-value and tenth-value layer | [4.2](lessons/04-02-photons-through-matter.md) |
| $B(\mu x)$ | buildup factor $\ge 1$ for broad beams (not binding energy) | [4.2](lessons/04-02-photons-through-matter.md) |
| $S = -dE/dx$ | linear stopping power, MeV/cm | [4.3](lessons/04-03-charged-particles-through-matter.md) |
| $z$ | charge number of the moving particle ($z=2$ for an alpha) | [4.3](lessons/04-03-charged-particles-through-matter.md) |
| $R$ (range) | the depth at which a charged particle stops, often quoted in g/cm² | [4.3](lessons/04-03-charged-particles-through-matter.md) |
| $D$, $H$, $E$ | absorbed dose (Gy), equivalent dose (Sv), effective dose (Sv) | [4.4](lessons/04-04-dose-quantities.md) |
| $w_R$, $w_T$ | radiation weighting factor and tissue weighting factor (both dimensionless) | [4.4](lessons/04-04-dose-quantities.md) |
| $\Sigma_a^{F}$, $\Sigma_a^{M}$ | macroscopic absorption of the fuel and of the moderator | [4.5](lessons/04-05-reactor-types-nuclear-landscape.md) |
| $\eta_{\text{th}}$ | plant **thermal efficiency** (not the reproduction factor $\eta$) | [4.5](lessons/04-05-reactor-types-nuclear-landscape.md) |

**Four symbol collisions worth reading twice.** $A$ is a mass number in Module 1
and an *activity* from 1.3 on. $N$ is a neutron count in 1.1–1.4 and a *number
density* from 2.1 on. $\lambda$ is a decay constant in 1.3 and a *mean free path*
(as $\lambda_{\text{mfp}}$) in 2.2. And $\alpha$ is a helium nucleus in 1.4 but the
elastic-collision energy ratio in 2.4. Read the module, not just the letter.

## Definitions

### Nuclide

A specific nucleus, pinned down by two integers: how many protons and how many
nucleons total.

$$\ce{^{A}_{Z}X}, \qquad N = A - Z$$

*Introduced:* [1.1](lessons/01-01-nucleus-bookkeeping.md)

### Isotopes, isobars, isotones

Three ways two nuclides can share a number. **Isotopes** share $Z$ (same element,
different weight), **isobars** share $A$, **isotones** share $N$.

*Introduced:* [1.1](lessons/01-01-nucleus-bookkeeping.md)

### Mass defect

A bound nucleus weighs *less* than the free nucleons you built it from; the
shortfall is the mass that left as binding energy.

$$\Delta m = \big[Z\,m_H + N\,m_n\big] - M_{\text{atom}}$$

*Introduced:* [1.2](lessons/01-02-binding-energy-chart-of-nuclides.md)

### Binding energy

The energy you'd have to supply to blow a nucleus back into free nucleons —
equivalently, the energy released when it formed.

$$B = \Delta m\,c^2$$

*Introduced:* [1.2](lessons/01-02-binding-energy-chart-of-nuclides.md)

### Binding energy per nucleon

$B/A$ — the fair comparison across nuclei, and the master curve of the course.
It climbs steeply through light nuclei, peaks near iron ($A \approx 56$–62) at
about 8.8 MeV, and sags to $\approx 7.6$ MeV at uranium. **Anything that moves a
nucleus toward the peak releases the difference** — fission from the right,
fusion from the left.

*Introduced:* [1.2](lessons/01-02-binding-energy-chart-of-nuclides.md)

### Semi-empirical mass formula

The liquid-drop model of $B$: one term per physical effect, and reading the terms
is the point (volume glue, surface under-binding, Coulomb repulsion, $N\!\ne\!Z$
asymmetry, even/odd pairing).

$$B \approx a_V A - a_S A^{2/3} - a_C \frac{Z^2}{A^{1/3}} - a_A \frac{(N-Z)^2}{A} \pm \delta$$

*Introduced:* [1.2](lessons/01-02-binding-energy-chart-of-nuclides.md)

### Valley of stability

The curving band of stable nuclides on an $N$-vs-$Z$ plot. Light stable nuclei sit
at $N \approx Z$; heavy ones need extra neutrons ($N/Z \approx 1.5$ at uranium) to
dilute Coulomb repulsion. Off the band, nuclei decay back toward it — too many
neutrons means $\beta^-$, too few means $\beta^+$ or electron capture.

*Introduced:* [1.2](lessons/01-02-binding-energy-chart-of-nuclides.md)

### Decay constant

The probability per second that any one nucleus decays — fixed, memoryless, the
same on day one as a billion years in.

$$\frac{dN}{dt} = -\lambda N \;\Longrightarrow\; N(t) = N_0 e^{-\lambda t}$$

*Introduced:* [1.3](lessons/01-03-radioactivity-decay-law.md)

### Activity

What a detector actually measures: decays per second, not atoms present.

$$A = -\frac{dN}{dt} = \lambda N, \qquad 1\ \text{Bq} = 1\ \text{decay/s}$$

*Introduced:* [1.3](lessons/01-03-radioactivity-decay-law.md)

### Half-life and mean life

$T_{1/2}$ is the time to lose half the sample; $\tau$ is the average lifespan of
one nucleus, always **longer** because the stragglers pull the average up.

$$T_{1/2} = \frac{\ln 2}{\lambda}, \qquad \tau = \frac{1}{\lambda} = \frac{T_{1/2}}{\ln 2} \approx 1.44\,T_{1/2}$$

*Introduced:* [1.3](lessons/01-03-radioactivity-decay-law.md)

### Specific activity

Activity per unit mass — huge for short-lived nuclides, tiny for long-lived ones.

$$\text{SA} = \frac{A}{m} = \frac{\lambda N_A}{M}$$

*Introduced:* [1.3](lessons/01-03-radioactivity-decay-law.md)

### Secular equilibrium

When the parent is far longer-lived than the daughter, the daughter fills like a
leaky bucket until its outflow matches the inflow — and then their **activities
are equal** (not their atom counts).

$$\lambda_1 \ll \lambda_2 \;\Longrightarrow\; A_2(t) = A_1\!\left(1 - e^{-\lambda_2 t}\right) \to A_1$$

*Introduced:* [1.4](lessons/01-04-decay-chains-equilibrium.md)

### Transient equilibrium

When the parent is only *somewhat* longer-lived, the daughter settles slightly
**above** the parent and both then decay at the parent's pace.

$$\frac{A_2}{A_1} = \frac{\lambda_2}{\lambda_2 - \lambda_1} > 1$$

*Introduced:* [1.4](lessons/01-04-decay-chains-equilibrium.md)

### Q-value

The rest mass that turned into motion. Positive pays you (exothermic), negative
charges you (endothermic).

$$Q = \big[(m_a + m_X) - (m_b + m_Y)\big]c^2$$

*Introduced:* [1.5](lessons/01-05-nuclear-reactions-q-values.md)

### Mass excess

A nuclide's mass measured from the nearest whole number of atomic mass units,
quoted in MeV. Because $A$ is conserved, mass excesses can be added and
subtracted directly to get $Q$ — no $c^2$, no giant near-cancelling masses.

$$\Delta = (M - A\,\text{u})\,c^2$$

*Introduced:* [1.5](lessons/01-05-nuclear-reactions-q-values.md)

### Threshold energy

For an endothermic reaction, momentum conservation locks part of your incoming
energy into center-of-mass motion, so you must bring **more** than $|Q|$.

$$E_{th} = |Q|\left(1 + \frac{m_a}{m_X}\right)$$

*Introduced:* [1.5](lessons/01-05-nuclear-reactions-q-values.md)

### Microscopic cross-section

The effective target area one nucleus presents for one reaction channel — a
probability wearing area's clothing, not a physical size.

$$\sigma \equiv \frac{\text{reactions per second with this nucleus}}{\text{beam intensity } I}$$

*Introduced:* [2.1](lessons/02-01-microscopic-cross-section.md)

### Barn

The nucleus-sized unit of cross-section.

$$1\ \text{barn} = 10^{-24}\ \text{cm}^2$$

*Introduced:* [2.1](lessons/02-01-microscopic-cross-section.md)

### Neutron flux

How hard neutrons are raining down, counting every direction: neutrons crossing
per cm² per second, $\phi = n v$ for a monoenergetic field of density $n$. Flux is
traffic; $R = \sigma\phi N$ is collisions.

*Introduced:* [2.1](lessons/02-01-microscopic-cross-section.md)

### Macroscopic cross-section

All the nuclei in a cubic centimetre bundled into one number: the interaction
probability per centimetre of travel.

$$\Sigma = N\sigma, \qquad [\Sigma] = \text{cm}^{-1}, \qquad N = \frac{\rho N_A}{M}$$

*Introduced:* [2.2](lessons/02-02-macroscopic-cross-section-mean-free-path.md)

### Mean free path

The average distance a neutron coasts between interactions — the reciprocal of
"hittiness per cm."

$$\lambda_{\text{mfp}} = \frac{1}{\Sigma}$$

*Introduced:* [2.2](lessons/02-02-macroscopic-cross-section-mean-free-path.md)

### The 1/v law

Slow neutrons loiter near a nucleus longer, so they're absorbed more readily.
Away from resonances, **absorption** cross-sections (capture and fission — not
scattering) scale inversely with speed.

$$\sigma_a(v) = \sigma_a(v_0)\frac{v_0}{v}, \qquad \sigma_a(E) = \sigma_a(E_0)\sqrt{\frac{E_0}{E}}$$

*Introduced:* [2.3](lessons/02-03-energy-dependence-1-over-v-resonances.md)

### Compound nucleus

The excited, jittering blob formed when a nucleus swallows the incoming neutron
before deciding what to do next. Its quantized excited levels are what create
resonances — and the excited $\ce{^{236}U}$ that wobbles apart is what fissions.

*Introduced:* [2.3](lessons/02-03-energy-dependence-1-over-v-resonances.md)

### Resonance

A sharply-tuned energy $E_r$ at which the neutron plus its binding energy lands
the compound nucleus exactly on an excited level, so absorption briefly becomes
overwhelmingly likely — thousands of barns, over a width of milli-eV to eV. The
canonical one is $\ce{^{238}U}$ at 6.67 eV.

*Introduced:* [2.3](lessons/02-03-energy-dependence-1-over-v-resonances.md)

### Collision parameter $\alpha$

The fraction of energy a neutron *keeps* in the hardest possible (head-on)
elastic collision. Hydrogen's $\alpha = 0$ means a head-on hit can take
everything; uranium's $\alpha = 0.983$ means even a perfect hit shaves under 2
percent.

$$E_{\min} = \alpha E, \qquad \alpha = \left(\frac{A-1}{A+1}\right)^2$$

*Introduced:* [2.4](lessons/02-04-moderation-slowing-neutrons.md)

### Average logarithmic energy loss

Each elastic collision costs a fixed *fraction* of energy, so the natural
bookkeeping is in $\ln E$ — and the average drop per collision is a constant that
depends only on $A$. This constancy is what makes "count the collisions" work.

$$\xi = \overline{\ln\frac{E}{E'}} = 1 + \frac{\alpha\ln\alpha}{1-\alpha} \qquad\left(\xi \approx \frac{2}{A + 2/3}\ \text{for } A \gtrsim 10\right)$$

*Introduced:* [2.4](lessons/02-04-moderation-slowing-neutrons.md)

### Lethargy

A "slowness" coordinate that counts downward-in-energy as upward-in-$u$. Each
collision advances it by $\xi$ on average.

$$u = \ln\frac{E_0}{E}$$

*Introduced:* [2.4](lessons/02-04-moderation-slowing-neutrons.md)

### Moderating power and moderating ratio

Moderating power is how fast you thermalize; the moderating **ratio** is how much
thermalizing you get per neutron you lose — the true scorecard for a moderator.

$$\text{moderating power} = \xi\Sigma_s, \qquad \text{MR} = \frac{\xi\Sigma_s}{\Sigma_a}$$

*Introduced:* [2.4](lessons/02-04-moderation-slowing-neutrons.md)

### Decay heat

The afterglow: fission products you already made keep beta-decaying after the
chain reaction stops. About **7 percent of full thermal power** at the instant of
shutdown, falling to roughly 1 percent after an hour. You cannot switch it off,
only carry it away.

*Introduced:* [3.1](lessons/03-01-fission-process-energy.md)

### Neutrons per fission $\nu$

The average number of neutrons a fission event releases — fractional because it's
an average over 0, 1, 2, 3, … For thermal $\ce{^{235}U}$, $\nu \approx 2.42$.

*Introduced:* [3.2](lessons/03-02-fission-products-neutron-yield.md)

### Reproduction factor $\eta$

Neutrons produced per neutron **absorbed in the fuel** — $\nu$ discounted by the
chance that an absorption was a sterile capture instead of a fission. Always
$\eta \le \nu$, and $\eta > 1$ is the bare floor for any chain reaction.

$$\eta = \nu\,\frac{\sigma_f}{\sigma_a} = \nu\,\frac{\sigma_f}{\sigma_f + \sigma_\gamma}$$

*Introduced:* [3.2](lessons/03-02-fission-products-neutron-yield.md)

### Delayed neutrons and the delayed fraction $\beta$

The sub-1-percent sliver of fission neutrons that appear *seconds late*, boiled
off by beta-decaying **precursors** (like $\ce{^{87}Br}$ and $\ce{^{137}I}$). Tiny
in number, decisive in effect: they stretch the average generation time from
$10^{-4}$ s to about 0.1 s, which is the entire reason a reactor is steerable.

$$\nu = \nu_p + \nu_d, \qquad \beta = \frac{\nu_d}{\nu} \approx 0.0065\ (\ce{^{235}U})$$

*Introduced:* [3.2](lessons/03-02-fission-products-neutron-yield.md)

### Fission-product poison

A fission fragment (or its daughter) that is a ferocious neutron absorber. The
champion is $\ce{^{135}Xe}$ at $\approx 2.6\times10^{6}$ barns thermal; $\ce{^{149}Sm}$
is stable and never decays away. Xenon mostly grows in from $\ce{^{135}I}$ decay
over hours, so poisoning is a delayed, dynamic effect, not a fixed tax.

*Introduced:* [3.2](lessons/03-02-fission-products-neutron-yield.md)

### Multiplication factor $k$

The head-count ratio between successive neutron generations — how many new
fission neutrons one neutron eventually produces.

$$k = \frac{\text{neutrons in one generation}}{\text{neutrons in the preceding generation}}$$

$k<1$ **subcritical** (chain dies) · $k=1$ **critical** (steady — the normal
full-power operating state) · $k>1$ **supercritical** (power rising).

*Introduced:* [3.3](lessons/03-03-chain-reaction-multiplication-factor.md)

### Neutron generation time

The average time from a neutron's birth to the birth of the neutrons it produces.
Prompt-only it is $\ell \approx 10^{-4}$ s in a thermal reactor; averaging in the
delayed stragglers gives $\ell_{\text{eff}} \approx 0.1$ s.

$$\ell_{\text{eff}} \approx (1-\beta)\,\ell_{\text{prompt}} + \beta\,\bar\tau_{\text{delay}} \approx \beta\,\bar\tau_{\text{delay}}$$

*Introduced:* [3.3](lessons/03-03-chain-reaction-multiplication-factor.md)

### Reactor period

The time for power to change by a factor of $e$. Long period = gentle transient;
short period = a runaway you can't catch.

$$T = \frac{\ell}{\ln k} \approx \frac{\ell}{k-1} \quad (k \text{ near } 1), \qquad N(t) = N_0 e^{t/T}$$

*Introduced:* [3.3](lessons/03-03-chain-reaction-multiplication-factor.md)

### Prompt critical

The red line: when $k-1$ reaches $\beta$, the prompt neutrons **alone** sustain the
chain, the reactor stops waiting for the delayed stragglers, and $\ell$ collapses
back to $10^{-4}$ s. Equivalently, one dollar of reactivity.

$$k - 1 \ge \beta \quad\Longleftrightarrow\quad \rho \ge \beta \quad\Longleftrightarrow\quad \rho_{\$} \ge \$1$$

*Introduced:* [3.3](lessons/03-03-chain-reaction-multiplication-factor.md)

### Fast-fission factor $\varepsilon$

The bonus from the few neutrons that fission $\ce{^{238}U}$ *before* they slow
down. Slightly greater than 1, typically 1.02–1.08.

*Introduced:* [3.4](lessons/03-04-criticality-four-factor-formula.md)

### Resonance escape probability $p$

The fraction of neutrons that slow all the way to thermal **without** being eaten
by a $\ce{^{238}U}$ resonance on the way down. Typically 0.7–0.9. A moderator that
takes big log-energy jumps ($\xi$ large) leaps over the narrow resonances and
raises $p$.

*Introduced:* [3.4](lessons/03-04-criticality-four-factor-formula.md)

### Thermal utilization $f$

Of all the thermal neutrons absorbed anywhere, the fraction absorbed **in the
fuel** rather than in moderator, cladding, coolant, or poisons.

$$f = \frac{\Sigma_a^{\text{fuel}}}{\Sigma_a^{\text{fuel}} + \Sigma_a^{\text{other}}}$$

*Introduced:* [3.4](lessons/03-04-criticality-four-factor-formula.md)

### Non-leakage probability $P_{NL}$

The fraction of neutrons that *don't* escape through the reactor's surface —
itself the product of a fast and a thermal piece. Bigger core or a reflector
pushes it toward 1.

$$P_{NL} = P_{NL}^{\text{fast}}\cdot P_{NL}^{\text{thermal}}, \qquad k_{\text{eff}} = k_\infty P_{NL}$$

*Introduced:* [3.4](lessons/03-04-criticality-four-factor-formula.md)

### Reactivity

How far from critical you are, as a fractional neutron surplus per generation.
Zero at critical, positive above, negative below.

$$\rho = \frac{k_{\text{eff}} - 1}{k_{\text{eff}}} \approx k_{\text{eff}} - 1 \quad (k \text{ near } 1)$$

*Introduced:* [3.4](lessons/03-04-criticality-four-factor-formula.md)

### Coulomb barrier

The hill of electrostatic repulsion two positive nuclei must beat (or tunnel
through) before the short-range strong force can grab them — hundreds of keV for
the light nuclei fusion uses.

$$V(r) = \frac{k Z_1 Z_2 e^2}{r}, \qquad ke^2 = 1.44\ \text{MeV·fm}$$

*Introduced:* [4.1](lessons/04-01-fusion-basics.md)

### Lawson criterion (triple product)

Hot enough, dense enough, held long enough: the **product** must clear the bar,
so density and confinement time trade off freely.

$$n\,\tau\,T \gtrsim 10^{21}\ \text{keV·s/m}^3 \quad (\text{D-T})$$

*Introduced:* [4.1](lessons/04-01-fusion-basics.md)

### Ignition

The stronger milestone: the trapped 3.5 MeV alphas alone keep the plasma hot,
with no external heating — fusion becomes self-sustaining.

*Introduced:* [4.1](lessons/04-01-fusion-basics.md)

### Photoelectric effect

The photon is swallowed whole by an atom, ejecting a bound electron. A low-energy,
high-$Z$ game: cross-section scales roughly as $Z^4$–$Z^5$.

*Introduced:* [4.2](lessons/04-02-photons-through-matter.md)

### Compton scattering

The photon glances off a loosely-bound electron, handing over *part* of its energy
and flying on with less. Dominates the middle band ($\approx 0.1$–5 MeV) and
depends only weakly on $Z$ (it scales with electron count).

*Introduced:* [4.2](lessons/04-02-photons-through-matter.md)

### Pair production

Above $2 m_e c^2 = 1.022$ MeV, the photon vanishes near a nucleus and becomes an
electron–positron pair. Grows with energy and with $Z^2$.

*Introduced:* [4.2](lessons/04-02-photons-through-matter.md)

### Linear attenuation coefficient

The photon's version of $\Sigma$: removal probability per centimetre, summed over
all three mechanisms.

$$\mu = n\,\sigma_{\text{tot}} = n(\sigma_{\text{photo}} + \sigma_{\text{Compton}} + \sigma_{\text{pair}}), \qquad I(x) = I_0 e^{-\mu x}$$

*Introduced:* [4.2](lessons/04-02-photons-through-matter.md)

### Mass attenuation coefficient

$\mu$ divided by density, in cm²/g — because what attenuates a beam is the *mass*
in its path, not the raw thickness. Tabulated once per material.

$$\frac{\mu}{\rho}, \qquad I = I_0 e^{-(\mu/\rho)(\rho x)}$$

*Introduced:* [4.2](lessons/04-02-photons-through-matter.md)

### Buildup factor

The correction for a real, broad beam: scattered photons bounce back into the
line and add to what a detector sees, so a shield sized by bare $e^{-\mu x}$ is
always a little too thin.

$$I_{\text{broad}} = B(\mu x)\, I_0 e^{-\mu x}, \qquad B \ge 1$$

*Introduced:* [4.2](lessons/04-02-photons-through-matter.md)

### Stopping power

How many MeV a charged particle sheds per centimetre. Unlike a photon it loses
energy *continuously*, to every atom it passes.

$$S = -\frac{dE}{dx} \;\propto\; \frac{z^2}{v^2}\,n_e \quad (\text{Bethe, log factor suppressed})$$

*Introduced:* [4.3](lessons/04-03-charged-particles-through-matter.md)

### Range

The definite depth at which a charged particle stops — nearly identical for all
particles of a given energy. Photons have no such thing.

$$R = \int_0^{E_0}\frac{dE}{-dE/dx}$$

*Introduced:* [4.3](lessons/04-03-charged-particles-through-matter.md)

### Bragg peak

Because $S \propto 1/v^2$, a charged particle deposits energy *faster the slower it
gets* — piling a spike of dose into the last stretch before it halts. Placing that
spike on a tumor is proton therapy.

*Introduced:* [4.3](lessons/04-03-charged-particles-through-matter.md)

### Bremsstrahlung

"Braking radiation": a decelerating electron radiates photons in a nucleus's
field. Scales with $Z$ and energy, and as $1/m^2$ — so it matters for betas and
never for alphas. **Shield betas with low-$Z$ material**, or you breed X-rays.

$$f \approx 3.5\times10^{-4}\,Z\,E \quad (E \text{ in MeV})$$

*Introduced:* [4.3](lessons/04-03-charged-particles-through-matter.md)

### Absorbed dose

Pure physics: energy deposited per unit mass, in any material.

$$D = \frac{\Delta E}{\Delta m}, \qquad 1\ \text{Gy} = 1\ \text{J/kg} = 100\ \text{rad}$$

*Introduced:* [4.4](lessons/04-04-dose-quantities.md)

### Equivalent dose

Absorbed dose scaled by how *densely* the radiation ionizes, because a joule from
an alpha shreds more DNA than a joule from a gamma. Same base units as the gray;
the different name flags "already weighted for biology."

$$H = w_R\,D, \qquad 1\ \text{Sv} = 100\ \text{rem}$$

*Introduced:* [4.4](lessons/04-04-dose-quantities.md)

### Effective dose

Organ doses rolled into one whole-body risk number, weighted by how much cancer
risk each tissue carries. For a uniform whole-body field the weights sum to 1 and
$E = H$; $w_T$ only bites for partial-body exposure.

$$E = \sum_T w_T H_T, \qquad \sum_T w_T = 1$$

*Introduced:* [4.4](lessons/04-04-dose-quantities.md)

### Exposure

The historical quantity: ionization charge liberated per kilogram **of air**, once
measured in roentgens (R). A stand-in for dose from before tissue energy could be
measured directly.

*Introduced:* [4.4](lessons/04-04-dose-quantities.md)

### Moderator, coolant, control

Three of a reactor's four design choices (fuel is the fourth). The moderator slows
neutrons, the coolant carries heat out, control absorbers pin $k$ at 1. Sometimes
one material does two jobs (water in a PWR); sometimes there is no moderator at
all (fast reactors).

*Introduced:* [4.5](lessons/04-05-reactor-types-nuclear-landscape.md)

## Formulas and rules

### Constants and conversions

The course uses these throughout without re-deriving them.

| Quantity | Value |
|---|---|
| Atomic mass unit | $1\ \text{u} = 1.6605\times10^{-27}\ \text{kg} = 931.494\ \text{MeV}/c^2$ |
| Energy unit | $1\ \text{MeV} = 1.602\times10^{-13}\ \text{J}$ |
| Avogadro | $N_A = 6.022\times10^{23}\ \text{mol}^{-1}$ |
| Hydrogen atom / neutron mass | $m_H = 1.007825\ \text{u}$, $m_n = 1.008665\ \text{u}$ |
| Electron rest energy | $m_e c^2 = 0.511\ \text{MeV}$ (so pair production needs $1.022$ MeV) |
| Nuclear radius constant | $r_0 \approx 1.2\ \text{fm}$; nuclear density $\approx 2.3\times10^{17}\ \text{kg/m}^3$ |
| Cross-section unit | $1\ \text{barn} = 10^{-24}\ \text{cm}^2$ |
| Activity units | $1\ \text{Ci} = 3.7\times10^{10}\ \text{Bq}$ |
| Dose units | $1\ \text{Gy} = 1\ \text{J/kg} = 100\ \text{rad}$; $1\ \text{Sv} = 100\ \text{rem}$ |
| Coulomb bundle | $ke^2 = 1.44\ \text{MeV·fm}$ |
| Thermal reference | $E_0 = 0.025\ \text{eV}$, $v_0 = 2200\ \text{m/s}$ |
| Temperature ↔ energy | $1\ \text{eV} \leftrightarrow 11{,}600\ \text{K}$ (so $10\ \text{keV} \approx 1.2\times10^{8}$ K) |
| Year in seconds | $1\ \text{yr} = 3.156\times10^{7}\ \text{s}$ |
| Energy per fission | $\approx 200\ \text{MeV} = 3.20\times10^{-11}\ \text{J}$ recoverable |
| Fission rate per watt | $3.1\times10^{10}$ fissions·s⁻¹·W⁻¹ |
| Fuel burn rule | $\approx 1.05$ g of $\ce{^{235}U}$ fissioned per MW-day |

*From* [1.1](lessons/01-01-nucleus-bookkeeping.md), [1.2](lessons/01-02-binding-energy-chart-of-nuclides.md), [2.1](lessons/02-01-microscopic-cross-section.md), [3.1](lessons/03-01-fission-process-energy.md), [4.1](lessons/04-01-fusion-basics.md), [4.4](lessons/04-04-dose-quantities.md)

### Nuclear structure and binding

$$N = A - Z, \qquad R \approx r_0 A^{1/3}, \qquad \Delta m = \big[Z m_H + N m_n\big] - M_{\text{atom}}$$
$$B = \Delta m\,c^2 = \Delta m\,[\text{u}] \times 931.494\ \text{MeV}$$

Two shortcuts worth having: energy released in *any* rearrangement is the gain in
total binding energy, $Q = \sum B_{\text{products}} - \sum B_{\text{reactants}}$; and
off the $B/A$ curve, $Q \approx A\left[(B/A)_{\text{after}} - (B/A)_{\text{before}}\right]$.

**Landmark values on the curve:** deuteron 1.11, $\ce{^{4}He}$ 7.07, $\ce{^{12}C}$ 7.68,
iron peak $\approx 8.8$, $\ce{^{235}U}$ $\approx 7.6$ MeV per nucleon.

*From* [1.1](lessons/01-01-nucleus-bookkeeping.md) *and* [1.2](lessons/01-02-binding-energy-chart-of-nuclides.md)

### Radioactive decay

$$N(t) = N_0 e^{-\lambda t}, \qquad A(t) = \lambda N(t) = A_0 e^{-\lambda t}, \qquad T_{1/2} = \frac{\ln 2}{\lambda}$$

| Job | Move |
|---|---|
| $t$ is a whole number $n$ of half-lives | divide by $2^n$ — skip the exponential |
| "how long to fall to a fraction $x$?" | $t = \tau \ln(1/x)$, with $\tau = T_{1/2}/\ln 2$ |
| atoms ↔ grams | $N = \dfrac{m N_A}{M}$ |
| activity ↔ atoms | $N = A/\lambda$ |
| two competing decay channels | **decay constants add**, $\lambda_{\text{tot}} = \lambda_1 + \lambda_2$ (half-lives never do); branching ratio $= \lambda_i/\lambda_{\text{tot}}$ |
| falling to 1 percent | $\ln 100/\ln 2 = 6.64$ half-lives |

*From* [1.3](lessons/01-03-radioactivity-decay-law.md)

### Decay modes — what each does to $(Z, N)$

| Mode | Emits | $\Delta Z$ | $\Delta N$ | $\Delta A$ |
|---|---|---|---|---|
| $\alpha$ | $\ce{^{4}_{2}He}$ | $-2$ | $-2$ | $-4$ |
| $\beta^-$ | $\ce{e-} + \bar\nu_e$ | $+1$ | $-1$ | $0$ |
| $\beta^+$ / EC | $\ce{e+} + \nu_e$ (or captures $\ce{e-}$) | $-1$ | $+1$ | $0$ |
| $\gamma$ | photon | $0$ | $0$ | $0$ |

Neutron-rich nuclides (all fission fragments) go $\beta^-$; proton-rich ones go
$\beta^+$ or EC. Because $\alpha$ decay drops $A$ by 4 and the betas leave it alone,
the natural series come in four families: $4n$, $4n+1$, $4n+2$, $4n+3$.

*From* [1.4](lessons/01-04-decay-chains-equilibrium.md)

### Series decay and equilibrium

$$\frac{dN_2}{dt} = \underbrace{\lambda_1 N_1}_{\text{fed in}} - \underbrace{\lambda_2 N_2}_{\text{decays away}}$$

$$N_2(t) = \frac{\lambda_1}{\lambda_2 - \lambda_1} N_1^0\left(e^{-\lambda_1 t} - e^{-\lambda_2 t}\right) \qquad (\text{two-step Bateman, } N_2(0)=0)$$

| Regime | Condition | Result |
|---|---|---|
| Secular | $T_{1/2}^{\text{parent}} \gg T_{1/2}^{\text{daughter}}$ | $A_2 \to A_1$, i.e. $\lambda_1 N_1 = \lambda_2 N_2$ |
| Transient | $\lambda_1 < \lambda_2$, comparable | $A_2/A_1 = \lambda_2/(\lambda_2-\lambda_1) > 1$ |
| No equilibrium | $\lambda_1 > \lambda_2$ | parent outruns daughter; daughter peaks then decays alone |

**Buildup rule of thumb:** the daughter reaches $1 - (1/2)^n$ of equilibrium after
$n$ daughter half-lives — about 97 percent at 5, 99 percent at 6.6.

*From* [1.4](lessons/01-04-decay-chains-equilibrium.md)

### Reactions and Q-values

$$\ce{a + X -> Y + b} \quad\equiv\quad X(a,b)Y$$

Balance $A$ (top numbers) and $Z$ (bottom numbers) across every arrow — that's
how you fill in a missing product. Then

$$Q = \sum\Delta_{\text{reactants}} - \sum\Delta_{\text{products}} = \sum B_{\text{products}} - \sum B_{\text{reactants}}$$

$$E_{th} = |Q|\left(1 + \frac{m_a}{m_X}\right) \quad\text{when } Q<0 \quad (\text{no threshold when } Q>0)$$

Atomic masses and tabulated mass excesses **include** the atomic electrons; since
$Z$ is conserved they cancel between the two sides, so you may use them directly.
(The one exception is $\beta^+$ decay, which picks up an extra $2m_ec^2$.)

**Useful Q-values:** $\ce{^{10}B}(n,\alpha)\ce{^{7}Li}$ $= +2.79$ MeV · D–T $= +17.6$ MeV ·
D–D ($\ce{^{3}He} + n$) $= +3.27$ MeV · $\ce{^{14}N}(\alpha,p)\ce{^{17}O}$ $= -1.19$ MeV
($E_{th} = 1.53$ MeV) · $\ce{^{7}Li}(p,n)\ce{^{7}Be}$ $= -1.64$ MeV ($E_{th} = 1.88$ MeV).

*From* [1.5](lessons/01-05-nuclear-reactions-q-values.md)

### Cross-sections and reaction rates

$$\sigma_a = \sigma_\gamma + \sigma_f + \cdots, \qquad \sigma_t = \sigma_s + \sigma_a, \qquad \Sigma = N\sigma, \qquad N = \frac{\rho N_A}{M}$$

$$R = \sigma\phi N = \Sigma\phi \quad [\text{cm}^{-3}\text{s}^{-1}], \qquad \phi(x) = \phi_0 e^{-\Sigma_t x}, \qquad \lambda_{\text{mfp}} = \frac{1}{\Sigma}$$

Additivity runs two ways — over channels, $\Sigma_t = \Sigma_s + \Sigma_a$, and over
nuclides in a mixture or compound, $\Sigma = \sum_i N_i \sigma_i$. Channel
probabilities are pure cross-section ratios ($N$ and $\phi$ cancel): given an
interaction, it was an absorption with probability $\Sigma_a/\Sigma_t = \sigma_a/\sigma_t$.

Fraction interacting in a finite thickness is $1 - e^{-\Sigma x}$, **not** $\Sigma x$
(that's only the infinitesimal-step probability).

*From* [2.1](lessons/02-01-microscopic-cross-section.md) *and* [2.2](lessons/02-02-macroscopic-cross-section-mean-free-path.md)

### Neutron energy ranges

| Band | Energy | Character |
|---|---|---|
| Thermal | $\approx 0.025$ eV ($v_0 = 2200$ m/s) | in equilibrium with the surrounding atoms; where cross-sections are tabulated |
| Epithermal | $\sim 1$ eV – 100 keV | the resonance region — the gauntlet a slowing neutron runs |
| Fast | $\sim 0.1$–10 MeV | fission neutrons are born here (average $\approx 2$ MeV) |

*From* [2.3](lessons/02-03-energy-dependence-1-over-v-resonances.md)

### Thermal (2200 m/s) cross-section data

The numbers the lessons quote; all in barns.

| Nuclide | $\sigma_f$ | $\sigma_\gamma$ | $\sigma_a$ | $\sigma_s$ | $\nu$ | $\eta$ |
|---|---|---|---|---|---|---|
| $\ce{^{235}U}$ | 582–585 | 99 | 681–684 | 15 | 2.42 | 2.07 |
| $\ce{^{233}U}$ | 531 | 46 | 577 | — | 2.49 | 2.29 |
| $\ce{^{239}Pu}$ | 748 | 270 | 1018 | — | 2.87 | 2.11 |
| $\ce{^{238}U}$ | $\approx 0$ | 2.7 | 2.7 | — | — | — |
| $\ce{^{240}Pu}$ | $\approx 0$ | — | 290 | — | — | — |
| $\ce{^{10}B}$ | — | — | 3840 | — | — | — |
| $\ce{^{1}H}$ | — | — | 0.33 | 20 | — | — |
| $\ce{^{2}H}$ | — | — | 0.0005 | — | — | — |
| $\ce{^{16}O}$ | — | — | $\approx 0$ | 3.8 | — | — |
| $\ce{^{135}Xe}$ | — | — | $2.6\times10^{6}$ | — | — | — |

Natural boron is 19.9 percent $\ce{^{10}B}$; natural uranium is 0.72 percent
$\ce{^{235}U}$. Off the thermal point, scale **absorption** with $1/v$ and treat
scattering as roughly flat.

For a fuel *mixture*, weight each isotope's absorption by its atom fraction $a_i$:

$$\eta_{\text{mix}} = \frac{\nu\,\sigma_f^{\text{fissile}}\,a_{\text{fissile}}}{\sum_i \sigma_a^{i}\,a_i}$$

*From* [2.1](lessons/02-01-microscopic-cross-section.md), [2.2](lessons/02-02-macroscopic-cross-section-mean-free-path.md), [2.3](lessons/02-03-energy-dependence-1-over-v-resonances.md), [3.2](lessons/03-02-fission-products-neutron-yield.md)

### Moderation

$$\alpha = \left(\frac{A-1}{A+1}\right)^2, \qquad \xi = 1 + \frac{\alpha\ln\alpha}{1-\alpha}, \qquad \bar n = \frac{\ln(E_0/E_{th})}{\xi}$$

From 2 MeV to 0.025 eV the total log-drop is $\ln(8\times10^{7}) = 18.2$, so
$\bar n = 18.2/\xi$.

| Moderator nucleus | $A$ | $\alpha$ | $\xi$ | $\bar n$ (2 MeV → thermal) |
|---|---|---|---|---|
| $\ce{^{1}H}$ | 1 | 0 | 1.000 | 18 |
| $\ce{^{2}H}$ (D) | 2 | 0.111 | 0.725 | 25 |
| $\ce{^{9}Be}$ | 9 | 0.640 | 0.207 | 88 |
| $\ce{^{12}C}$ (graphite) | 12 | 0.716 | 0.158 | 115 |
| $\ce{^{238}U}$ | 238 | 0.983 | 0.0084 | $\approx 2200$ |

| Material | Moderating ratio $\xi\Sigma_s/\Sigma_a$ | Consequence |
|---|---|---|
| $\ce{H2O}$ | $\approx 62$ | compact core, but must enrich fuel to 3–5 percent |
| Graphite | $\approx 200$ | big core (115 collisions), cheap, natural-U capable |
| $\ce{D2O}$ | $\approx 4800$ | natural uranium works (CANDU); heavy-water inventory is the cost |

*From* [2.4](lessons/02-04-moderation-slowing-neutrons.md)

### Fission energy budget (per fission, MeV)

| Channel | Energy | Timing |
|---|---|---|
| Kinetic energy of the two fragments | $\approx 165$ | prompt |
| Prompt neutrons | $\approx 5$ | prompt |
| Prompt $\gamma$ | $\approx 7$ | prompt |
| Fission-product $\beta$ and $\gamma$ | $\approx 13$ | **delayed** (seconds → years) |
| Neutrinos | $\approx 10$ | delayed and **unrecoverable** |
| **Total released** | $\approx 200$ | — |

Released ($\approx 200$), recoverable ($\approx 190$ plus a few MeV of capture
gammas, conventionally called 200), and prompt ($\approx 93$ percent of
recoverable) are three different numbers. Fragments land near $A \approx 95$ and
$A \approx 140$ — the double-humped mass-yield curve; a symmetric split is a couple
of orders of magnitude rarer.

$$\dot N_f = \frac{P}{E_f} = \frac{P\ [\text{W}]}{3.20\times10^{-11}\ \text{J}} \approx 3.1\times10^{10}\,P\ \text{fissions/s}$$

*From* [3.1](lessons/03-01-fission-process-energy.md)

### Delayed-neutron data

The lookup that criticality safety runs on. $\beta$ is the delayed fraction; it
sets the size of one dollar of reactivity.

| Fuel | $\beta$ | In pcm |
|---|---|---|
| $\ce{^{233}U}$ (thermal) | 0.0026 | 260 |
| $\ce{^{235}U}$ (thermal) | 0.0065 | 650 |
| $\ce{^{239}Pu}$ (thermal) | 0.0021 | 210 |
| $\ce{^{238}U}$ (fast fission) | 0.0148 | 1480 |

| Timing quantity | Value |
|---|---|
| Prompt emission delay | $\lesssim 10^{-14}$ s after the split |
| Prompt neutron lifetime $\ell$, thermal reactor | $\approx 10^{-4}$ s (slowing-down + diffusion, not the fission itself) |
| Prompt neutron lifetime, fast reactor | $\approx 10^{-7}$ s |
| Mean precursor delay $\bar\tau_{\text{delay}}$ | $\approx 12$–13 s |
| Effective generation time $\ell_{\text{eff}} \approx \beta\bar\tau_{\text{delay}}$ | $\approx 0.08$–0.1 s |
| Precursor group half-lives (six-group, $\ce{^{235}U}$) | $\approx 55.7,\ 22.7,\ 6.2,\ 2.3,\ 0.6,\ 0.2$ s |

Precursors are neutron-rich fragments such as $\ce{^{87}Br}$ and $\ce{^{137}I}$; they
beta-decay into daughters that immediately boil off a neutron. Delayed neutrons
are $\approx 0.65$ percent of the total for $\ce{^{235}U}$ — about one neutron in 65 —
and they set the reactor's entire response timescale.

*From* [3.2](lessons/03-02-fission-products-neutron-yield.md) *and* [3.3](lessons/03-03-chain-reaction-multiplication-factor.md) *(group half-lives are the standard six-group data the lessons summarize as "fractions of a second up to about a minute")*

### The chain reaction

$$N_n = N_0 k^{\,n}, \qquad N(t) = N_0 e^{t/T}, \qquad T = \frac{\ell}{\ln k} \approx \frac{\ell}{k-1}$$

$$\boxed{\,k_\infty = \eta\, f\, p\, \varepsilon\,}, \qquad k_{\text{eff}} = k_\infty P_{NL}$$

Read the loop in the order a neutron lives it: born fast → $\varepsilon$ (fast-fission
bonus) → fast non-leakage → $p$ (survive the resonances) → thermal non-leakage →
$f$ (get absorbed in fuel, not junk) → $\eta$ (produce new neutrons). Probabilities
of independent hurdles multiply, which is why $k$ is a **product**.

| Typical magnitudes | |
|---|---|
| $\eta$ | 2.07 (pure $\ce{^{235}U}$, thermal), 1.34 (natural U), $\approx 1.8$ (enriched fuel) |
| $f$ | 0.65–0.95 — the knob moderator choice turns |
| $p$ | 0.7–0.9 |
| $\varepsilon$ | 1.02–1.08 |

**Design inversions worth memorizing.** For exact criticality with everything else
fixed: $P_{NL} = 1/k_\infty$, or $f' = 1/(\eta p \varepsilon P_{NL})$. Because $k$ is a
product, a 1.7 percent nudge in any single factor is a 1.7 percent nudge in $k$.

*From* [3.3](lessons/03-03-chain-reaction-multiplication-factor.md) *and* [3.4](lessons/03-04-criticality-four-factor-formula.md)

### Reactivity units

Reactivity is a pure fraction, but nobody quotes it that way. Three scales, one
quantity.

| Unit | Definition | Conversion | Used for |
|---|---|---|---|
| $\Delta k/k$ (absolute) | $\rho = \dfrac{k_{\text{eff}}-1}{k_{\text{eff}}}$ | — | the definition; $\rho \approx k-1$ near critical |
| pcm ("per cent mille") | $1\ \text{pcm} = 10^{-5}$ | $\rho\,[\text{pcm}] = \rho \times 10^{5}$ | rod worths, temperature coefficients, small changes |
| dollars | $\rho_{\$} = \rho/\beta$ | $\$1 = \beta$; for $\ce{^{235}U}$, $\$1 = 0.0065 = 650$ pcm | distance to **prompt critical** |
| cents | $1$ cent $= \$0.01$ | $\approx 6.5$ pcm for $\ce{^{235}U}$ | fine control moves |

**The dollar is the only scale that knows about physics:** one dollar is exactly
prompt critical, because that is where $\rho = \beta$ and the prompt neutrons alone
sustain the chain. The same 400 pcm is a comfortable move in a $\ce{^{235}U}$ core
($0.62$ dollars) and nearly two dollars in a $\ce{^{239}Pu}$ one — which is why
plutonium-fuelled systems have so much less margin.

*Writing convention:* inside math, reactivity in dollars is written with an escaped
dollar sign, e.g. $\rho_{\$} = -0.62$. In prose, always spell out "dollars" — never
a bare dollar sign, which would break the math renderer.

*From* [3.3](lessons/03-03-chain-reaction-multiplication-factor.md) *and* [3.4](lessons/03-04-criticality-four-factor-formula.md)

### Fusion

$$\ce{^{2}_{1}H + ^{3}_{1}H -> ^{4}_{2}He + ^{1}_{0}n}, \qquad Q = +17.6\ \text{MeV}$$

Momentum splits that energy **inversely to mass**: the neutron takes
$\tfrac45(17.6) = 14.1$ MeV and leaves the plasma; the alpha keeps
$\tfrac15(17.6) = 3.5$ MeV and stays to heat it. Ignition is defined by the alphas.

$$V = \frac{k e^2 Z_1 Z_2}{r} \quad (ke^2 = 1.44\ \text{MeV·fm}), \qquad n\tau T \gtrsim 10^{21}\ \text{keV·s/m}^3$$

A contact radius of a few fm gives a barrier of a few hundred keV, against a
plasma thermal energy of only $\approx 10$ keV — a factor of $\sim 45$ short.
Fusion happens anyway via tunneling by the high-energy tail. Two ways to clear the
Lawson bar: magnetic confinement bets on $\tau$ ($n \approx 10^{20}$ m⁻³, $\tau \approx 1$ s);
inertial confinement bets on $n$ ($\tau \approx 10^{-11}$ s, $n \approx 10^{31}$ m⁻³).

*From* [4.1](lessons/04-01-fusion-basics.md)

### Photon attenuation and shielding

$$I(x) = I_0 e^{-\mu x}, \qquad \text{HVL} = \frac{\ln 2}{\mu} \approx \frac{0.693}{\mu}, \qquad \text{TVL} = \frac{\ln 10}{\mu} \approx \frac{2.303}{\mu}$$

$$\text{TVL} = \frac{\ln 10}{\ln 2}\,\text{HVL} \approx 3.32\ \text{HVL}, \qquad \mu = (\mu/\rho)\,\rho$$

A factor of $10^{3}$ is exactly 3 TVLs (or about 10 HVLs, since $2^{10} = 1024$). For
a broad beam multiply by the buildup factor $B$, which can reach 3–5 for a thick
mid-$Z$ slab; recovering a lost factor $B$ costs $\Delta x = \ln B/\mu$ of extra shield.

| Regime | Dominant process | Scaling |
|---|---|---|
| Low energy, high $Z$ | photoelectric | $\propto Z^4$–$Z^5$, falls fast with energy |
| $\approx 0.1$–5 MeV, any $Z$ | Compton | $\propto Z$ (electron count), weak energy dependence |
| Above 1.022 MeV, high $Z$ | pair production | $\propto Z^2$, rises with energy |

In the Compton band $\mu/\rho$ is nearly material-independent — a gram of water and
a gram of lead attenuate about equally, and lead wins only on grams per cm.

**Worked anchor:** 1 MeV gammas in lead have $\mu = 0.77$ cm⁻¹, so HVL $= 0.90$ cm
and a factor of 1000 needs 8.97 cm.

*From* [4.2](lessons/04-02-photons-through-matter.md)

### Charged particles

$$-\frac{dE}{dx} \propto \frac{z^2}{v^2}n_e, \qquad R = \int_0^{E_0}\frac{dE}{-dE/dx}$$

For non-relativistic heavy particles $v^2 = 2E/m$, so at equal energy
$S \propto z^2 m$ — that's the factor of 16 between an alpha and a proton
($z^2 = 4$, $m = 4m_p$). Betas at MeV energies are ultra-relativistic ($v \approx c$),
so their stopping power is orders of magnitude smaller and they travel centimetres
where an alpha travels tens of microns.

| Rule of thumb | |
|---|---|
| Beta range | $R\,[\text{g/cm}^2] \approx 0.4\,E^{1.3}$, $E$ in MeV |
| 5 MeV alpha in tissue | $\approx 40\ \mu$m (a sheet of paper; a few cm of air) |
| Bremsstrahlung fraction | $f \approx 3.5\times10^{-4} Z E$ — shield betas with low-$Z$, back it with high-$Z$ only if X-rays remain |

*From* [4.3](lessons/04-03-charged-particles-through-matter.md)

### Dose — the three-rung ladder

$$D = \frac{\Delta E}{\Delta m}\ [\text{Gy}] \;\xrightarrow{\;\times w_R\;}\; H = w_R D\ [\text{Sv}] \;\xrightarrow{\;\sum_T w_T\;}\; E = \sum_T w_T H_T\ [\text{Sv}]$$

| Radiation | $w_R$ |
|---|---|
| X-rays, $\gamma$, $\beta$ (electrons) | 1 |
| Protons | $\approx 2$ |
| Neutrons | 2–20, energy-dependent (peak $\approx 20$ near 1 MeV) |
| $\alpha$, fission fragments, heavy ions | 20 |

| Tissue | $w_T$ |
|---|---|
| Red bone marrow, lung, colon, stomach, breast | 0.12 each |
| Gonads | 0.08 |
| Thyroid, bladder, liver, oesophagus | 0.04 each |
| Skin, bone surface, brain, salivary glands | 0.01 each |

| Benchmark | Value |
|---|---|
| Natural background | $\approx 3$ mSv/yr |
| Public limit above background | $\approx 1$ mSv/yr |
| Occupational limit | $\approx 20$ mSv/yr |
| Acute whole-body radiation sickness | $\approx 1$ Sv |
| Acute $\approx 50$ percent lethal without treatment | 4–5 Sv |

Dose rate integrated over time gives dose: 3 mSv over a year is background, 3 Sv
in an hour is an emergency.

*From* [4.4](lessons/04-04-dose-quantities.md)

### The reactor landscape

Four decisions — fuel, moderator, coolant, control — and the four-factor formula
is the ledger saying which combinations can hold $k_{\text{eff}} = 1$.

| Type | Moderator | Coolant | Fuel | Signature |
|---|---|---|---|---|
| **PWR** | light water | light water | 3–5 percent enriched $\ce{^{235}U}$ | primary loop at $\approx 155$ bar never boils; separate steam loop |
| **BWR** | light water | light water | 3–5 percent enriched | boils **in the core**; that steam drives the turbine |
| **PHWR / CANDU** | $\ce{D2O}$ | $\ce{D2O}$ | **natural** uranium (0.72 percent) | $\ce{D2O}$ barely absorbs, so no enrichment plant |
| **Gas-cooled** (AGR, HTGR) | graphite | $\ce{CO2}$ or He | slightly enriched | high outlet temperature, good efficiency |
| **Fast reactor** (SFR, LFR) | **none** | liquid sodium or lead | Pu / high-enriched | fast spectrum; can breed more fuel than it burns |

$$f = \frac{\Sigma_a^{F}}{\Sigma_a^{F} + \Sigma_a^{M} + \Sigma_a^{\text{other}}}, \qquad P_{\text{elec}} = \eta_{\text{th}} P_{\text{th}} \quad (\eta_{\text{th}} \approx 0.33)$$

"Fast" names the neutron *energy spectrum*, not how fast the power changes.

*From* [4.5](lessons/04-05-reactor-types-nuclear-landscape.md)

## Assumed, not taught here

This is a Tier 1 course: it builds its own nuclear physics from scratch, but leans
on the following without deriving them.

| Fact | Where it's taught |
|---|---|
| $E = mc^2$ and rest energy — the 931.494 MeV-per-u exchange rate | [relativity 1.5](../relativity/lessons/01-05-four-vectors-momentum.md) |
| Moles, molar mass, Avogadro, and $N = \rho N_A/M$ | [general-chemistry 2.1](../general-chemistry/lessons/02-01-mole-molar-mass-formulas.md) |
| Atomic structure: $Z$ fixes the element, the electron cloud around the nucleus | [general-chemistry 1.1](../general-chemistry/lessons/01-01-quantum-atom.md) |
| Solving $dN/dt = -\lambda N$ (separable / first-order linear) | [ode-refresher 1.2](../ode-refresher/lessons/01-02-separable-and-linear-first-order.md), [1.3](../ode-refresher/lessons/01-03-first-order-models.md) |
| Coupled first-order linear ODE pairs (the Bateman chain) | [ode-refresher 3.1](../ode-refresher/lessons/03-01-linear-systems-eigenvalues.md) |
| Exponential and logarithm algebra ($\ln$, half-life inversions, log–log slopes) | [precalculus 2.3](../precalculus/lessons/02-03-exponential-and-logarithmic-functions.md) |
| Coulomb potential energy $U = kq_1q_2/r$ with $k = 1/4\pi\varepsilon_0$ | [em-refresher 1.3](../em-refresher/lessons/01-03-electric-potential.md), [1.1](../em-refresher/lessons/01-01-coulomb-electric-field.md) |
| The $1 - e^{-t/\tau}$ saturation curve (secular buildup is RC charging) | [em-refresher 2.3](../em-refresher/lessons/02-03-rc-circuits.md) |
| Elastic two-body collisions — momentum plus kinetic energy conservation | [mechanics-refresher 2.3](../mechanics-refresher/lessons/02-03-momentum-collisions.md) |
| Maxwell–Boltzmann speed distribution and thermal energy $\sim k_B T$ | [general-chemistry 3.1](../general-chemistry/lessons/03-01-gases-ideal-gas-law-kinetic-theory.md), [stat-mech 3.1](../stat-mech/lessons/03-01-canonical-ensemble-boltzmann-factor.md) |
| Quantum tunneling through a barrier (fusion below the Coulomb barrier) | [quantum-mechanics 2.5](../quantum-mechanics/lessons/02-05-scattering-barriers-tunneling.md) |
| Quantized excited states (what a resonance is tuned to) | [quantum-mechanics 2.3](../quantum-mechanics/lessons/02-03-infinite-square-well.md) |
| Poisson statistics of independent random counts (detector counting) | [prob-stat-refresher 2.2](../prob-stat-refresher/lessons/02-02-discrete-distributions.md) |
| Carnot limit on a steam cycle's thermal efficiency | [stat-mech 2.2](../stat-mech/lessons/02-02-entropy-engines-carnot.md) |
| That an accelerating charge radiates (the origin of bremsstrahlung) | stated only in [4.3](lessons/04-03-charged-particles-through-matter.md); `em-refresher` deliberately skips radiation from accelerating charges, and the fullest treatment on this shelf is [radiation-detection-shielding 1.3](../radiation-detection-shielding/lessons/01-03-charged-particles-stopping-power-range.md) |

## Pitfalls

### Masses, sizes, and energies

- Radius goes as $A^{1/3}$, not $A$ — uranium has 20 times carbon's nucleons but under 3 times its radius. *([1.1](lessons/01-01-nucleus-bookkeeping.md))*
- $A$ is an integer nucleon count for one nuclide; the periodic-table value (carbon's 12.011) is an isotope average. *([1.1](lessons/01-01-nucleus-bookkeeping.md))*
- Don't carry $c^2$ through every line — treat $1\ \text{u} = 931.494\ \text{MeV}/c^2$ as a conversion factor. *([1.1](lessons/01-01-nucleus-bookkeeping.md))*
- Mass defect doesn't destroy mass; supply the binding energy and the mass comes right back. *([1.2](lessons/01-02-binding-energy-chart-of-nuclides.md))*
- Pair **atomic** masses with $m_H$, never with the bare proton $m_p$ — that's what cancels the $Z$ electrons. *([1.2](lessons/01-02-binding-energy-chart-of-nuclides.md), [1.5](lessons/01-05-nuclear-reactions-q-values.md))*
- "Below the iron peak" means "can release energy by moving toward the peak," not "unbound" — uranium's $B/A \approx 7.6$ MeV is still strongly positive. *([1.2](lessons/01-02-binding-energy-chart-of-nuclides.md))*

### Decay and activity

- High activity means many decays per second, not many atoms — and neither one is "how dangerous." *([1.3](lessons/01-03-radioactivity-decay-law.md))*
- $\tau \ne T_{1/2}$: the mean life is $1.44\,T_{1/2}$, and after one mean life 37 percent remains, not 50. *([1.3](lessons/01-03-radioactivity-decay-law.md))*
- Decay is memoryless — "half gone" is not "halfway to done," and the count never reaches zero. *([1.3](lessons/01-03-radioactivity-decay-law.md))*
- Parallel decay channels add their **decay constants**; half-lives never add. *([1.3](lessons/01-03-radioactivity-decay-law.md))*
- Equilibrium means equal *activities*, not equal atom counts — the short-lived daughter is a far smaller, fast-cycling pool. *([1.4](lessons/01-04-decay-chains-equilibrium.md))*
- The daughter *can* exceed the parent: transient equilibrium gives $A_2/A_1 = \lambda_2/(\lambda_2-\lambda_1) > 1$. *([1.4](lessons/01-04-decay-chains-equilibrium.md))*
- A $\gamma$ makes no new element — same $Z$, same $A$, just shed excitation. *([1.4](lessons/01-04-decay-chains-equilibrium.md))*

### Reactions and thresholds

- $Q < 0$ does **not** mean "bring $|Q|$" — the threshold is $|Q|(1 + m_a/m_X)$, always larger, because momentum keeps some energy. *([1.5](lessons/01-05-nuclear-reactions-q-values.md))*
- $Q > 0$ removes the *energy* barrier, not the Coulomb one — charged reactants still have to get close, which is why fusion needs a plasma while neutron capture fires at rest. *([1.5](lessons/01-05-nuclear-reactions-q-values.md), [4.1](lessons/04-01-fusion-basics.md))*

### Cross-sections and neutron transport

- $\sigma$ is a probability wearing area's clothing, not a physical size, and it swings wildly with energy — "a barn" is never a fixed property of a nuclide. *([2.1](lessons/02-01-microscopic-cross-section.md), [2.3](lessons/02-03-energy-dependence-1-over-v-resonances.md))*
- $\sigma_t = \sigma_s + \sigma_a$, and fission is only *part* of absorption — forgetting radiative capture inflates every downstream criticality estimate. *([2.1](lessons/02-01-microscopic-cross-section.md))*
- Flux is traffic ($\phi$, cm⁻²s⁻¹); rate is collisions ($R = \sigma\phi N$, cm⁻³s⁻¹). They share no units. *([2.1](lessons/02-01-microscopic-cross-section.md))*
- $\Sigma = 100\ \text{cm}^{-1}$ is a rate, not "100 percent per cm" — the finite-thickness fraction is $1 - e^{-\Sigma x}$. *([2.2](lessons/02-02-macroscopic-cross-section-mean-free-path.md))*
- Never add mean free paths; add the $\Sigma$'s and then invert. *([2.2](lessons/02-02-macroscopic-cross-section-mean-free-path.md))*
- $e^{-\Sigma_t x}$ counts only the **uncollided** beam — a scattered neutron isn't gone, and in a broad geometry it can scatter back in (the same buildup issue as gamma shielding). *([2.2](lessons/02-02-macroscopic-cross-section-mean-free-path.md), [4.2](lessons/04-02-photons-through-matter.md))*
- The $1/v$ law is an **absorption** rule; elastic scattering is roughly flat with energy. *([2.3](lessons/02-03-energy-dependence-1-over-v-resonances.md))*
- It's the *compound nucleus* that resonates, not the free neutron — miss the level by a fraction of an eV and the spike is gone. *([2.3](lessons/02-03-energy-dependence-1-over-v-resonances.md))*

### Moderation

- Heavier nuclei do **not** take more energy from a neutron — they barely recoil, so the neutron bounces off nearly intact. Lighter is better. *([2.4](lessons/02-04-moderation-slowing-neutrons.md))*
- $\xi$ does not change as the neutron slows; the *fractional* loss is constant, which is the whole reason you can just count collisions. *([2.4](lessons/02-04-moderation-slowing-neutrons.md))*
- Fewest collisions does not mean best moderator — hydrogen thermalizes fastest yet loses on moderating ratio because it eats neutrons. *([2.4](lessons/02-04-moderation-slowing-neutrons.md))*
- Slower is not unconditionally better: the trip down runs the $\ce{^{238}U}$ resonance gauntlet, and the reactor lives or dies on winning that race. *([2.3](lessons/02-03-energy-dependence-1-over-v-resonances.md), [2.4](lessons/02-04-moderation-slowing-neutrons.md))*

### Fission energy

- The fragments carry $\approx 165$ of the $\approx 200$ MeV, not the neutrons or gammas — and they stop within microns, inside the fuel pin. *([3.1](lessons/03-01-fission-process-energy.md))*
- Released, recoverable, and prompt are three different numbers; $\approx 10$ MeV of neutrinos leaves the planet. *([3.1](lessons/03-01-fission-process-energy.md))*
- Shutdown is not cold: $\approx 7$ percent of full power continues as decay heat for days, which is a real meltdown path and not a criticality one. *([3.1](lessons/03-01-fission-process-energy.md))*
- Fission does not split nuclei in half — the mass-yield curve is double-humped, peaking near $A = 95$ and $A = 140$. *([3.1](lessons/03-01-fission-process-energy.md))*

### Criticality and control

- $\eta \ne \nu$: $\nu$ is per *fission*, $\eta$ is per *absorption in fuel*, and $\eta \le \nu$ always. Using $\nu$ where $\eta$ belongs over-counts your neutrons. *([3.2](lessons/03-02-fission-products-neutron-yield.md), [3.4](lessons/03-04-criticality-four-factor-formula.md))*
- Never round $\beta$ to zero. Under 1 percent of the neutrons set the entire control timescale, because a tiny fraction with a huge lag dominates the *average* generation time. *([3.2](lessons/03-02-fission-products-neutron-yield.md), [3.3](lessons/03-03-chain-reaction-multiplication-factor.md))*
- Poisons are dynamic, not a fixed tax — $\ce{^{135}Xe}$ grows in from $\ce{^{135}I}$ over hours, so its grip peaks *after* a power change. *([3.2](lessons/03-02-fission-products-neutron-yield.md))*
- "Critical" is not dangerous — it's the normal steady operating state. The line to fear is **prompt** critical, $k-1 = \beta$. *([3.3](lessons/03-03-chain-reaction-multiplication-factor.md))*
- Closeness of $k$ to 1 sets the *period*, not the safety margin; what matters is whether $k-1$ is below $\beta$. *([3.3](lessons/03-03-chain-reaction-multiplication-factor.md))*
- $k_\infty > 1$ does not guarantee a working reactor — a small assembly with $k_\infty = 1.1$ can be stone-cold subcritical once $P_{NL}$ is folded in. Criticality is always a verdict on $k_{\text{eff}}$. *([3.4](lessons/03-04-criticality-four-factor-formula.md))*
- $\rho = (k-1)/k$, not $k-1$ — they nearly coincide near critical, which is exactly why people get sloppy. *([3.4](lessons/03-04-criticality-four-factor-formula.md))*

### Radiation through matter, and dose

- Don't heat a plasma *over* the Coulomb barrier — you can't afford it, and you don't need to: tunneling by the high-energy tail does the work at $\approx 10$ keV. *([4.1](lessons/04-01-fusion-basics.md))*
- The Lawson bar is on the **product** $n\tau T$, not on each factor — that's the whole magnetic-versus-inertial trade. *([4.1](lessons/04-01-fusion-basics.md))*
- The lighter D-T product takes the larger share: 14.1 MeV to the neutron, 3.5 MeV to the alpha. *([4.1](lessons/04-01-fusion-basics.md))*
- Never size a final shield with bare $e^{-\mu x}$ — buildup can cost you a factor of 3–5. *([4.2](lessons/04-02-photons-through-matter.md))*
- High-$Z$ helps only where photoelectric or pair production lead; in the Compton band attenuation per gram is nearly material-independent. *([4.2](lessons/04-02-photons-through-matter.md))*
- A photon does not slow down — it travels at full energy until one event removes it. A charged particle is the opposite, and has a sharp range where dose goes to zero. *([4.2](lessons/04-02-photons-through-matter.md), [4.3](lessons/04-03-charged-particles-through-matter.md))*
- Faster is not more damaging locally: $1/v^2$ means the heaviest deposition is at the *end* of the track. *([4.3](lessons/04-03-charged-particles-through-matter.md))*
- Don't reach for lead to stop betas — it maximizes bremsstrahlung. Low-$Z$ first, high-$Z$ only behind it. *([4.3](lessons/04-03-charged-particles-through-matter.md))*
- Equal absorbed dose is not equal harm — that is the entire reason $w_R$ exists. Gray measures energy, sievert measures hazard, and both are J/kg. *([4.4](lessons/04-04-dose-quantities.md))*
- Effective dose is a *protection* quantity for low, stochastic-risk exposures — quote radiotherapy in gray, never in sieverts of effective dose. *([4.4](lessons/04-04-dose-quantities.md))*

### Reactor design

- Moderator and coolant are two jobs that only *sometimes* share a material — graphite plus $\ce{CO2}$, or no moderator at all in a fast reactor. *([4.5](lessons/04-05-reactor-types-nuclear-landscape.md))*
- A PWR's core water does not boil; that's what 155 bar is for. The BWR is the design that boils in the core. *([4.5](lessons/04-05-reactor-types-nuclear-landscape.md))*
- "Fast reactor" names the neutron spectrum, not how quickly it ramps power. *([4.5](lessons/04-05-reactor-types-nuclear-landscape.md))*
