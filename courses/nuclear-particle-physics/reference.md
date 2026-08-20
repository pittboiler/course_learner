# Nuclear & Particle Physics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Two subjects, one ledger. Nearly every problem in this course is *mass turned
into energy* (binding energies, Q-values, thresholds) or *a bookkeeping check*
(does this reaction conserve what it must, and which force is fast enough to do
it?). The tables below are the two lookups you'll reach for most: the
**decay/Q-value** table for the nuclear half, and the **conservation-law** table
for the particle half.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $Z,\ N,\ A$ | proton count, neutron count, and their sum $A = Z+N$ (a pure count, not a mass) | [1.1](lessons/01-01-anatomy-of-the-nucleus.md) |
| ${}^{A}_{Z}\mathrm{X}$ | nuclide label — nucleons on top, protons below; the symbol already fixes $Z$ | [1.1](lessons/01-01-anatomy-of-the-nucleus.md) |
| $r_0$ | the one nuclear length scale, $\approx 1.2$ fm, in $R = r_0A^{1/3}$ | [1.1](lessons/01-01-anatomy-of-the-nucleus.md) |
| $\mathrm{u}$ | unified atomic mass unit; ${}^{12}\mathrm{C}$ weighs exactly $12\,\mathrm{u}$ | [1.2](lessons/01-02-binding-energy-mass-defect.md) |
| $\Delta m,\ B,\ B/A$ | mass defect, binding energy, and the figure of merit — binding per nucleon | [1.2](lessons/01-02-binding-energy-mass-defect.md) |
| $a_V,a_S,a_C,a_A,a_P$ | the five fitted SEMF coefficients, in MeV | [1.3](lessons/01-03-semi-empirical-mass-formula.md) |
| $\delta$ | SEMF pairing term — a bonus, zero, or penalty depending on the parity of $Z$ and $N$ | [1.3](lessons/01-03-semi-empirical-mass-formula.md) |
| $Z^{*}$ | the most-bound proton number at fixed $A$ — the floor of the valley | [1.4](lessons/01-04-stability-valley.md) |
| $S_n,\ S_p$ | separation energy: what it costs to pull off the last neutron / proton; zero at the drip line | [1.4](lessons/01-04-stability-valley.md) |
| $n\,l_j$ | shell-model single-particle level: radial node count, orbital letter, total $j$ | [1.5](lessons/01-05-shell-model-magic-numbers.md) |
| $j^\pi$ | ground-state spin and parity of a nucleus | [1.5](lessons/01-05-shell-model-magic-numbers.md) |
| $\lambda$ | decay constant — probability per second that one nucleus goes | [2.1](lessons/02-01-decay-law-chains.md) |
| $t_{1/2},\ \tau$ | half-life and mean life; $\tau$ is always the longer | [2.1](lessons/02-01-decay-law-chains.md) |
| $A(t)$ | **activity** — decays per second. Same letter as mass number; read from context | [2.1](lessons/02-01-decay-law-chains.md) |
| $Q$ | energy released: rest mass that turned into kinetic energy | [2.2](lessons/02-02-alpha-decay-tunneling.md) |
| $Z_d$ | the **daughter's** charge — what the alpha tunnels away from, $Z_d = Z-2$ | [2.2](lessons/02-02-alpha-decay-tunneling.md) |
| $b$ | classical turning point of the Coulomb barrier (later: impact parameter) | [2.2](lessons/02-02-alpha-decay-tunneling.md) |
| $G$ | Gamow factor; barrier transmission is $e^{-2G}$ | [2.2](lessons/02-02-alpha-decay-tunneling.md) |
| $\nu_e,\ \bar\nu_e$ | electron neutrino and antineutrino — the bar is lepton-number bookkeeping, not decoration | [2.3](lessons/02-03-beta-decay-neutrino.md) |
| $F(Z,E_e)$ | Fermi function: the Coulomb correction that straightens a Kurie plot | [2.3](lessons/02-03-beta-decay-neutrino.md) |
| $EL,\ ML$ | electric / magnetic multipole radiation carrying $L$ units of angular momentum | [2.4](lessons/02-04-gamma-decay.md) |
| $X(a,b)Y$ | reaction shorthand: target(projectile, ejectile)residual | [2.5](lessons/02-05-nuclear-reactions-q-values.md) |
| $T_{\text{th}}$ | lab threshold kinetic energy — always more than $\lvert Q\rvert$ | [2.5](lessons/02-05-nuclear-reactions-q-values.md) |
| $k,\ \nu$ | multiplication factor; average neutrons emitted per fission ($\approx 2.4$) | [2.6](lessons/02-06-fission-fusion.md) |
| $p^\mu = (E,\mathbf p)$ | four-momentum — energy and momentum stacked into one object | [3.1](lessons/03-01-four-vectors-invariant-mass.md) |
| $s,\ \sqrt s$ | Mandelstam invariant and the CM energy it equals — the budget for making mass | [3.1](lessons/03-01-four-vectors-invariant-mass.md) |
| $\sigma$ | cross-section: how big the target *looks* for one process (later also QCD string tension) | [3.3](lessons/03-03-cross-sections-count-rate.md) |
| $d\sigma/d\Omega$ | differential cross-section — area per steradian, e.g. mb/sr | [3.3](lessons/03-03-cross-sections-count-rate.md) |
| $\Phi,\ \mathcal L$ | beam flux (per area per time) and luminosity $\mathcal L = \Phi N_t$ | [3.3](lessons/03-03-cross-sections-count-rate.md) |
| $q$ | momentum transfer; the probe resolves a length $\sim\hbar/q$ | [3.4](lessons/03-04-rutherford-form-factors.md) |
| $F(\mathbf q)$ | form factor — the Fourier transform of the target's charge distribution | [3.4](lessons/03-04-rutherford-form-factors.md) |
| $\Gamma$ | resonance width; lifetime is $\tau = \hbar/\Gamma$ | [3.4](lessons/03-04-rutherford-form-factors.md) |
| $B;\ L_e,L_\mu,L_\tau$ | baryon number; the three separately-conserved lepton numbers | [4.2](lessons/04-02-conservation-laws-quantum-numbers.md) |
| $S$ | strangeness: $-1$ per $s$ quark, $+1$ per $\bar s$ | [4.2](lessons/04-02-conservation-laws-quantum-numbers.md) |
| $I,\ I_3,\ Y$ | isospin, its third component, and hypercharge $Y = B+S$ | [4.4](lessons/04-04-isospin-flavor-symmetry.md) |
| $\eta_P$ | intrinsic parity of a particle, $\pm 1$ | [4.3](lessons/04-03-parity-c-cp.md) |
| $P,\ C,\ T$ | parity (mirror), charge conjugation (antiworld), time reversal (backward clock) | [4.3](lessons/04-03-parity-c-cp.md) |
| $\alpha_s$ | the strong coupling — shrinks at high $Q^2$ (asymptotic freedom) | [4.5](lessons/04-05-quark-model-qcd.md) |
| $G_F$ | Fermi constant, $\approx 1.17\times10^{-5}\ \text{GeV}^{-2}$ — the low-energy face of $W$ exchange | [5.1](lessons/05-01-weak-interaction.md) |
| $\theta_C,\ V_{\text{CKM}}$ | Cabibbo angle ($\approx 13^\circ$) and the full quark-mixing matrix | [5.1](lessons/05-01-weak-interaction.md) |
| $\theta_W$ | weak mixing (Weinberg) angle, $\sin^2\theta_W\approx 0.23$ | [5.2](lessons/05-02-electroweak-higgs.md) |
| $v,\ y_f$ | Higgs vacuum expectation value ($246$ GeV) and a fermion's Yukawa coupling | [5.2](lessons/05-02-electroweak-higgs.md) |
| $T_3$ | third component of **weak** isospin (the $SU(2)_L$ label), $\pm\tfrac12$ or $0$ | [5.3](lessons/05-03-standard-model-assembled.md) |
| $\theta,\ \Delta m^2$ | neutrino mixing angle and mass-squared splitting $m_2^2-m_1^2$ | [5.4](lessons/05-04-neutrinos-oscillations.md) |

### Symbol collisions

The course recycles letters. When in doubt, read the context:

- $A$ — mass number ([1.1](lessons/01-01-anatomy-of-the-nucleus.md)) **and** activity in Bq ([2.1](lessons/02-01-decay-law-chains.md)).
- $B$ — binding energy ([1.2](lessons/01-02-binding-energy-mass-defect.md)) **and** baryon number ([4.2](lessons/04-02-conservation-laws-quantum-numbers.md)).
- $\lambda$ — decay constant ([2.1](lessons/02-01-decay-law-chains.md)) **and** mean free path ([3.3](lessons/03-03-cross-sections-count-rate.md)).
- $b$ — turning point ([2.2](lessons/02-02-alpha-decay-tunneling.md)) **and** impact parameter ([3.3](lessons/03-03-cross-sections-count-rate.md)) **and** the bottom quark.
- $L$ — multipole order ([2.4](lessons/02-04-gamma-decay.md)), orbital angular momentum, lepton number ([4.2](lessons/04-02-conservation-laws-quantum-numbers.md)), oscillation baseline ([5.4](lessons/05-04-neutrinos-oscillations.md)); luminosity is written $\mathcal L$.
- $\sigma$ — cross-section ([3.3](lessons/03-03-cross-sections-count-rate.md)) **and** QCD string tension ([4.5](lessons/04-05-quark-model-qcd.md)).
- $I_3$ (strong isospin, [4.4](lessons/04-04-isospin-flavor-symmetry.md)) vs $T_3$ (weak isospin, [5.3](lessons/05-03-standard-model-assembled.md)) — different symmetries, same-looking algebra.

## Definitions

### Isotope, isotone, isobar

Three ways two nuclides can be siblings. Isoto**p**es share **p**rotons ($Z$);
isoto**n**es share **n**eutrons ($N$); iso**bar**s share the total weight ($A$).

*Introduced:* [1.1](lessons/01-01-anatomy-of-the-nucleus.md)

### Mass defect

A bound nucleus weighs *less* than its loose parts, and the shortfall is the
binding that got released.

$$\Delta m = Z m_p + N m_n - M(Z,A) \qquad (\Delta m > 0 \text{ for a bound nucleus})$$

*Introduced:* [1.2](lessons/01-02-binding-energy-mass-defect.md)

### Binding energy

The energy you'd have to pay to shatter a nucleus into free, stationary
nucleons — equivalently, what came out when they snapped together.

$$B = \Delta m\,c^2 = \big[Z\,M({}^1\mathrm{H}) + N m_n - M_{\text{atom}}(Z,A)\big]c^2$$

*Introduced:* [1.2](lessons/01-02-binding-energy-mass-defect.md)

### Semi-empirical mass formula

Treat the nucleus as a drop of charged, incompressible liquid: one big binding
credit for bulk, minus four penalties. The *form* of each term is physics; the
coefficients are fitted.

$$B(Z,A) = a_V A - a_S A^{2/3} - a_C\frac{Z(Z-1)}{A^{1/3}} - a_A\frac{(A-2Z)^2}{A} + \delta(Z,A)$$

*Introduced:* [1.3](lessons/01-03-semi-empirical-mass-formula.md)

### Valley of stability

The narrow band of stable nuclides on the $N$–$Z$ chart. It hugs $N = Z$ for
light nuclei and bends toward $N > Z$ as $A$ grows, because extra neutrons
dilute proton–proton repulsion. Everything radioactive is a hillside beside it.

*Introduced:* [1.1](lessons/01-01-anatomy-of-the-nucleus.md), quantified in [1.4](lessons/01-04-stability-valley.md)

### Separation energy and drip lines

What it costs to remove the last nucleon. Where that cost reaches zero, the
nucleus can't hold another — the last one simply drips off, no decay required.

$$S_n = B(Z,A) - B(Z,A-1), \qquad S_n = 0 \text{ (neutron drip line)},\ S_p = 0 \text{ (proton drip line)}$$

*Introduced:* [1.4](lessons/01-04-stability-valley.md)

### Magic numbers

Nucleon counts that close a shell, so the nucleus is bound unusually tightly and
the smooth SEMF *under*-predicts it. **Doubly magic** means magic in $Z$ and $N$
at once (${}^{4}\mathrm{He}$, ${}^{16}\mathrm{O}$, ${}^{40}\mathrm{Ca}$, ${}^{208}\mathrm{Pb}$).

$$2,\ 8,\ 20,\ 28,\ 50,\ 82,\ 126$$

*Introduced:* [1.5](lessons/01-05-shell-model-magic-numbers.md)

### Shell model

Pretend each nucleon moves independently in the smeared-out mean field of all
the others (a Woods–Saxon well), then pour protons and neutrons into **separate**
ladders obeying Pauli. Strong spin–orbit coupling reshuffles the ladder so the
gaps land on the observed magic numbers.

*Introduced:* [1.5](lessons/01-05-shell-model-magic-numbers.md)

### Decay constant

A radioactive nucleus has no memory and no age — just a fixed probability per
second of going. That constant hazard rate is $\lambda$, and it forces the
exponential.

$$\frac{dN}{dt} = -\lambda N \quad\Longrightarrow\quad N(t) = N_0 e^{-\lambda t}$$

*Introduced:* [2.1](lessons/02-01-decay-law-chains.md)

### Activity

What a detector actually hears: decays per second. It rides the same exponential
as the population.

$$A(t) = \lambda N(t), \qquad 1\ \text{Bq} = 1\ \text{decay/s}, \qquad 1\ \text{Ci} = 3.7\times10^{10}\ \text{Bq}$$

*Introduced:* [2.1](lessons/02-01-decay-law-chains.md)

### Secular vs transient equilibrium

In a chain, the daughter climbs until it decays exactly as fast as it's made —
**activities** equalize, not populations.

- **Secular** ($\lambda_1 \ll \lambda_2$, parent effectively immortal): $A_2 \to A_1$, and $N_2/N_1 = \lambda_1/\lambda_2$ can be a millionth.
- **Transient** ($\lambda_1 < \lambda_2$, comparable): daughter overshoots slightly, then the whole chain decays at the *parent's* slow rate.

*Introduced:* [2.1](lessons/02-01-decay-law-chains.md)

### Gamow factor

How "forbidden" the barrier is, summed across it. The alpha's escape probability
per attempt is $e^{-2G}$, and because $G$ sits in an exponent, small changes in
$Q_\alpha$ swing half-lives by many decades.

$$G = \frac{1}{\hbar}\int_R^{b}\sqrt{2m\big[V(r)-Q_\alpha\big]}\,dr$$

*Introduced:* [2.2](lessons/02-02-alpha-decay-tunneling.md)

### Q-value

The rest mass the ingredients lost, which is exactly the kinetic energy the
products gained. Positive means the reaction pays you; negative means you pay it.

$$Q = \big(m_a + m_X - m_Y - m_b\big)c^2 = \big(T_Y+T_b\big)-\big(T_a+T_X\big)$$

*Introduced:* [2.5](lessons/02-05-nuclear-reactions-q-values.md) (decay case in [2.2](lessons/02-02-alpha-decay-tunneling.md))

### Endpoint (beta spectrum)

Beta electrons come out with *every* energy from zero up to a maximum, because a
neutrino shares the release. That maximum — where the neutrino gets nothing — is
the Q-value, which is why measuring the endpoint measures $Q$ (and bounds $m_\nu$).

$$T_e + E_\nu \approx Q \quad\Longrightarrow\quad T_{e,\max} = Q$$

*Introduced:* [2.3](lessons/02-03-beta-decay-neutrino.md)

### Multipolarity

The angular momentum $L$ (in units of $\hbar$) a gamma carries off, tagged
electric ($EL$) or magnetic ($ML$). There is **no $L=0$ photon**, so a
$0\to0$ transition cannot emit one.

*Introduced:* [2.4](lessons/02-04-gamma-decay.md)

### Isomer

An excited nuclear state stalled by a large required spin change — the lowest
allowed multipole is high, so emission is throttled and the state lives for
hours instead of picoseconds (${}^{99m}\mathrm{Tc}$, $t_{1/2}=6$ h).

*Introduced:* [2.4](lessons/02-04-gamma-decay.md)

### Internal conversion

Instead of emitting a photon, the nucleus hands its energy straight to an atomic
(usually K-shell) electron and ejects it. Dominates for high-$Z$, low-energy
transitions, and is the **only** de-excitation route for $0^+\to0^+$ ($E0$).

*Introduced:* [2.4](lessons/02-04-gamma-decay.md)

### Fission barrier

Not a Coulomb barrier — an *internal* one. To split, a nucleus must first
stretch, which costs surface energy; past the saddle point Coulomb repulsion
takes over and it runs downhill. About $6$ MeV for ${}^{236}\mathrm{U}$, which is
why a slow neutron (worth $\sim 6.5$ MeV of excitation) is enough to trigger it.

*Introduced:* [2.6](lessons/02-06-fission-fusion.md)

### Multiplication factor

How many follow-on fissions each fission buys. $k<1$ subcritical (dies out),
$k=1$ critical (steady reactor), $k>1$ supercritical (compounds every
generation, in microseconds).

*Introduced:* [2.6](lessons/02-06-fission-fusion.md)

### Four-momentum and invariant mass

Energy and momentum are frame-dependent components; the "length" built from them
is not, and that length is the mass. Add four-momenta *first*, then take the
length — masses are not additive.

$$p\cdot p = E^2 - \lvert\mathbf p\rvert^2 = m^2, \qquad M^2 = \Big(\textstyle\sum_i E_i\Big)^2 - \Big\lvert\textstyle\sum_i \mathbf p_i\Big\rvert^2$$

*Introduced:* [3.1](lessons/03-01-four-vectors-invariant-mass.md)

### Mandelstam $s$

The squared total four-momentum of a colliding system. It is frame-independent,
so compute it in the lab and read it off in the CM, where $\sqrt s$ is literally
the energy available to make new particles.

$$s = \Big(\textstyle\sum_i p_i\Big)^2, \qquad \sqrt s = E_{\text{CM}}$$

*Introduced:* [3.1](lessons/03-01-four-vectors-invariant-mass.md)

### Cross-section

How big the target *looks* for one specific process — an effective area, not a
physical size. The same proton is huge to the strong force and nearly
transparent to a neutrino.

$$1\ \text{barn} = 10^{-28}\ \text{m}^2 = 10^{-24}\ \text{cm}^2 = 100\ \text{fm}^2$$

*Introduced:* [3.3](lessons/03-03-cross-sections-count-rate.md)

### Luminosity

Everything about your machine, bundled into one number, so that the rate splits
cleanly into machine × physics.

$$\mathcal L = \Phi N_t = \dot N\,n x, \qquad R = \mathcal L\,\sigma$$

*Introduced:* [3.3](lessons/03-03-cross-sections-count-rate.md)

### Mean free path

Average distance a projectile travels before interacting; the thick-target
attenuation length.

$$\lambda = \frac{1}{n\sigma}, \qquad I(x) = I_0 e^{-x/\lambda}$$

*Introduced:* [3.3](lessons/03-03-cross-sections-count-rate.md)

### Form factor

Scattering is a Fourier transform you run with a beam. Replace a point charge by
a spread-out one and the measured rate drops below the point prediction; that
deficit *is* the shape.

$$F(\mathbf q) = \int\rho(\mathbf r)\,e^{i\mathbf q\cdot\mathbf r/\hbar}\,d^3r, \qquad F(0)=1,\quad \lvert F\rvert \le 1$$

*Introduced:* [3.4](lessons/03-04-rutherford-form-factors.md)

### Breit–Wigner resonance

Hit a quasi-bound level of the target and the cross-section rings loudly. Width
and lifetime are reciprocal.

$$\sigma(E)\propto\frac{1}{(E-E_R)^2+(\Gamma/2)^2}, \qquad \tau = \frac{\hbar}{\Gamma}$$

*Introduced:* [3.4](lessons/03-04-rutherford-form-factors.md)

### Lepton, hadron, meson, baryon

Two questions sort the whole zoo. *Does it feel the strong force?* No → **lepton**;
yes → **hadron**. Then *is its spin whole or half?* Whole → **meson** ($q\bar q$);
half → **baryon** ($qqq$).

*Introduced:* [4.1](lessons/04-01-particle-zoo.md)

### Baryon number and lepton number

Additive tallies that no known interaction breaks. $B = +\tfrac13$ per quark
(so $+1$ per baryon, $0$ per meson); $L_e, L_\mu, L_\tau$ are $+1$ for a lepton
and its own-flavor neutrino, $-1$ for their antiparticles, and are conserved
**family by family**.

*Introduced:* [4.2](lessons/04-02-conservation-laws-quantum-numbers.md)

### Strangeness

The fragile quantum number: $S = -1$ per $s$ quark, $+1$ per $\bar s$. Strong and
EM freeze it; only the weak force changes it, one unit at a time. So
$\Delta S \ne 0$ is a *guarantee* that the weak force did it — and that the
process is slow.

*Introduced:* [4.2](lessons/04-02-conservation-laws-quantum-numbers.md)

### Associated production

The strong force can't make net strangeness from nothing, so strange particles
are born **in pairs** of canceling $S$. Once separated, a lone strange particle
can shed its strangeness only weakly — fast birth, slow death.

*Introduced:* [4.2](lessons/04-02-conservation-laws-quantum-numbers.md)

### Intrinsic parity

Every particle carries a built-in sign that $P$ multiplies it by. Quarks and the
proton are $+1$; the photon and the pions are $-1$; a fermion's antiparticle
takes the opposite sign to its partner.

*Introduced:* [4.3](lessons/04-03-parity-c-cp.md)

### Helicity

The correlation of spin with momentum. Under $P$ momentum flips and spin doesn't,
so this is a **pseudoscalar** — a parity-respecting world must give it zero
average. Any measured preference is a smoking gun for the weak force.

$$\langle\boldsymbol\sigma\cdot\mathbf p\rangle \ne 0 \;\Longrightarrow\; P \text{ violated}$$

*Introduced:* [4.3](lessons/04-03-parity-c-cp.md)

### CPT theorem

In any local, Lorentz-invariant field theory the three flips done *together* are
exact — so a crack in $CP$ must be matched by an equal crack in $T$, and particle
and antiparticle must have exactly equal mass and lifetime.

*Introduced:* [4.3](lessons/04-03-parity-c-cp.md)

### Isospin

The strong force is blind to electric charge, so proton and neutron are two faces
of one "nucleon" related by an internal rotation. The algebra is *identical* to
spin: a multiplet of isospin $I$ has $2I+1$ members labelled by $I_3$, and
Clebsch–Gordan coefficients relate reaction amplitudes.

*Introduced:* [4.4](lessons/04-04-isospin-flavor-symmetry.md)

### Hypercharge

The second label (beside $I_3$) that positions a hadron in an SU(3) multiplet,
and the piece that ties charge to everything else.

$$Y = B + S$$

*Introduced:* [4.4](lessons/04-04-isospin-flavor-symmetry.md)

### Color charge

The strong-force charge, with **three** values (plus three anticolors) — not a
visible color and not a $\pm$ pair. Every observed hadron must be color-neutral,
and $q\bar q$ and $qqq$ are exactly the neutral options, which is *why* those are
the only two hadron spellings.

*Introduced:* [4.5](lessons/04-05-quark-model-qcd.md)

### Confinement

The quark–antiquark potential grows *linearly* with separation, so the field
never weakens. Pull hard enough and it is cheaper to create a new pair than to
stretch further: the flux tube snaps and you get hadrons — a **jet** — never a
free quark.

$$V(r)\approx\sigma r, \qquad \sigma\approx 1\ \text{GeV/fm}$$

*Introduced:* [4.5](lessons/04-05-quark-model-qcd.md)

### Asymptotic freedom

The flip side: at short distance (high $Q^2$) the strong coupling $\alpha_s$
shrinks and quarks act nearly free. This is why deep-inelastic scattering "sees"
point-like partons rattling loosely inside a proton.

*Introduced:* [4.5](lessons/04-05-quark-model-qcd.md)

### Charged vs neutral current

Every weak process is one of two. A $W^\pm$ carries charge away, so the emitter
**changes charge and flavor** (charged current). A $Z^0$ is neutral, so nothing
changes identity — only momentum (neutral current). If a neutrino scatters
elastically and no photon could have done it, it was the $Z$.

*Introduced:* [5.1](lessons/05-01-weak-interaction.md)

### Cabibbo angle and CKM mixing

The quarks the $W$ actually couples to are rotated relative to the quarks of
definite mass. So a $W$ can cross generations — but with amplitude
$\propto\sin\theta_C$, hence rate $\propto\sin^2\theta_C\approx0.05$
(**Cabibbo suppression**). This is *why* strangeness-changing decays exist at all.

$$d' = d\cos\theta_C + s\sin\theta_C, \qquad \sin\theta_C \approx 0.225$$

*Introduced:* [5.1](lessons/05-01-weak-interaction.md)

### Spontaneous symmetry breaking

The laws stay symmetric; the *vacuum* doesn't. The Higgs potential's minimum is a
ring, not a point, so the field settles at a nonzero value everywhere — and
particles feel that background as mass.

$$V(\phi) = -\mu^2\lvert\phi\rvert^2 + \lambda\lvert\phi\rvert^4, \qquad \lvert\phi\rvert = v \approx 246\ \text{GeV}$$

*Introduced:* [5.2](lessons/05-02-electroweak-higgs.md)

### Higgs mechanism

Each particle's mass is proportional to how hard it grips the Higgs background.
The photon doesn't couple, so it stays exactly massless; $W$ and $Z$ do, so they
are heavy. The **field** (the VEV) gives mass; the **boson** ($125$ GeV) is just
a detectable ripple proving the field is there.

$$m_f = \frac{y_f\,v}{\sqrt 2}$$

*Introduced:* [5.2](lessons/05-02-electroweak-higgs.md)

### Flavor vs mass eigenstates

Neutrinos are *made and measured* in flavor ($\nu_e,\nu_\mu,\nu_\tau$, fixed by the
weak vertex) but *travel* in mass ($\nu_1,\nu_2,\nu_3$). The two bases are rotated
into each other, so a definite flavor is a superposition whose phases drift apart
in flight — and the flavor label rotates.

*Introduced:* [5.4](lessons/05-04-neutrinos-oscillations.md)

## Formulas and rules

### Units, constants, and natural units

The whole course is done in energy units. Reach for these conversions constantly.

| Quantity | Value |
|---|---|
| $1\,\mathrm{u}\cdot c^2$ | $931.494$ MeV |
| $\hbar c$ | $197$ MeV·fm — the femtometer↔MeV exchange rate |
| $e^2/4\pi\varepsilon_0$ | $1.44$ MeV·fm |
| $1$ fm | $10^{-15}$ m |
| $1$ barn | $10^{-28}\ \text{m}^2 = 10^{-24}\ \text{cm}^2 = 100\ \text{fm}^2$ ($1$ mb $=10^{-3}$ b, $1$ nb $=10^{-9}$ b) |
| $1$ Bq / $1$ Ci | $1$ decay per second / $3.7\times10^{10}$ Bq |
| $M({}^1\mathrm{H})$, $m_n$ | $1.007825\,\mathrm{u}$, $1.008665\,\mathrm{u}$ |
| $m_p c^2$, $m_n c^2$, $m_e c^2$ | $938.3$, $939.6$, $0.511$ MeV |
| $2m_e c^2$ | $1.022$ MeV — the $\beta^+$ surcharge |
| $\alpha$ particle | $m_\alpha c^2 = 3727$ MeV, $M({}^4\mathrm{He}) = 4.002602\,\mathrm{u}$ |
| $G_F$ | $1.17\times10^{-5}\ \text{GeV}^{-2}$ |
| $k_B$ | $8.62\times10^{-5}$ eV/K (so $k_BT\approx 9$ keV at $10^8$ K) |

**Natural units** ($\hbar = c = 1$, used from [3.1](lessons/03-01-four-vectors-invariant-mass.md) on): energy, momentum, and mass all
carry the same unit, and $E^2 = p^2 + m^2$. To restore SI, reinsert $c$ by
dimensions — $mc^2$ for a mass, $pc$ for a momentum. A useful sanity anchor:
$1\ \text{GeV}^{-1} \approx 6.6\times10^{-25}$ s $\approx 0.197$ fm.

*From* [1.1](lessons/01-01-anatomy-of-the-nucleus.md), [1.2](lessons/01-02-binding-energy-mass-defect.md), [3.1](lessons/03-01-four-vectors-invariant-mass.md), [3.3](lessons/03-03-cross-sections-count-rate.md), [5.5](lessons/05-05-beyond-standard-model.md)

### Nuclear size and binding

$$R = r_0 A^{1/3}\ (r_0 \approx 1.2\ \text{fm}), \qquad n \approx 0.14\ \text{nucleons/fm}^3, \qquad \rho \approx 2.3\times10^{17}\ \text{kg/m}^3$$

Density is the *same for every nucleus* — saturation. To double $R$ you need
eight times the nucleons.

$$B/A \approx 8.8\ \text{MeV at } {}^{56}\mathrm{Fe}\ (\text{peak}), \quad 7.6\ \text{MeV at } {}^{235}\mathrm{U}, \quad 7.07\ \text{MeV at } {}^{4}\mathrm{He}$$

Because the curve peaks in the middle, *both* fusing light nuclei and fissioning
heavy ones move toward the peak and release energy.

*From* [1.1](lessons/01-01-anatomy-of-the-nucleus.md) *and* [1.2](lessons/01-02-binding-energy-mass-defect.md)

### The SEMF term by term

| Term | Contribution | Physical reason | Scaling |
|---|---|---|---|
| Volume | $+a_V A$ | every nucleon binds to its neighbors; the force saturates | $\propto A$ |
| Surface | $-a_S A^{2/3}$ | skin nucleons have fewer neighbors, so the volume term over-counted | $\propto$ area $=A^{2/3}$ |
| Coulomb | $-a_C\,Z(Z-1)/A^{1/3}$ | mutual proton repulsion; $Z(Z-1)$ counts *pairs*, not $Z^2$ | $\propto Q^2/R$ |
| Asymmetry | $-a_A\,(A-2Z)^2/A$ | Pauli: extra neutrons must occupy higher rungs; vanishes at $N=Z$ | quadratic in $N-Z$ |
| Pairing | $+\delta$ | like nucleons couple spin-up/spin-down into extra-bound pairs | $\propto A^{-1/2}$ |

$$\delta = \begin{cases} +a_P/\sqrt A & \text{even }Z,\ \text{even }N\\ 0 & \text{odd }A\\ -a_P/\sqrt A & \text{odd }Z,\ \text{odd }N\end{cases}$$

Course coefficient set (MeV): $a_V = 15.5$, $a_S = 16.8$, $a_C = 0.72$,
$a_A = 23$, $a_P = 12$. Accuracy is about $1\%$ — except at the magic numbers,
where real nuclei are noticeably *more* bound than the smooth formula knows.

**Why the curve peaks.** Per nucleon, the surface penalty $a_S A^{-1/3}$ *fades*
as $A$ grows (the rise at low $A$) while the Coulomb penalty $\propto A^{2/3}$
*climbs* (the decline at high $A$). Two opposing power laws → one interior
maximum, near $A\approx 56$.

*From* [1.3](lessons/01-03-semi-empirical-mass-formula.md)

### The valley floor at fixed $A$

At fixed $A$ only Coulomb and asymmetry depend on $Z$, both quadratically, so
$B(Z)$ is a downward parabola and mass $M(Z)$ an upward one. Setting
$\partial B/\partial Z = 0$:

$$Z^{*} = \frac{A/2}{1 + \dfrac{a_C}{4a_A}A^{2/3}}, \qquad \frac{a_C}{4a_A} = 7.83\times10^{-3}$$

- Light $A$: denominator $\to 1$, so $Z^{*}\to A/2$ — asymmetry wins, $N=Z$.
- Heavy $A$: denominator grows, so $Z^{*} < A/2$ — Coulomb forces a neutron surplus ($A=208 \Rightarrow Z^{*}\approx 82$, $N/Z \approx 1.54$).

Which side of the parabola you sit on dictates the decay direction: **left of
$Z^{*}$ (neutron-rich) → $\beta^-$, $Z$ up; right of $Z^{*}$ (proton-rich) →
$\beta^+$/EC, $Z$ down.** Odd $A$ gives one parabola and (usually) one stable
isobar; even $A$ splits into two (even–even low, odd–odd high), so two or three
stable isobars are common.

*From* [1.4](lessons/01-04-stability-valley.md)

### Shell model: filling and spin-parity

Level order (with spin–orbit splitting, aligned $j = l+\tfrac12$ pushed down):

$$1s_{1/2}\,|\,2\;\to\;1p_{3/2},\,1p_{1/2}\,|\,8\;\to\;1d_{5/2},\,2s_{1/2},\,1d_{3/2}\,|\,20\;\to\;1f_{7/2}\,|\,28\;\to\;1g_{9/2}\,|\,50\;\to\;1h_{11/2}\,|\,82\;\to\;1i_{13/2}\,|\,126$$

Each $n\,l_j$ level holds $2j+1$ nucleons; letters $s,p,d,f,g,h,i$ mean
$l = 0,1,2,3,4,5,6$.

| Nucleus | Ground-state $j^\pi$ |
|---|---|
| even–even | always $0^{+}$ (everything pairs) |
| odd $A$ | the single unpaired nucleon: $j = j_{\text{last level}}$, $\pi = (-1)^{l}$ |
| odd $A$, one **hole** | the hole carries the same $j^\pi$ as a particle in that level |
| odd–odd | two unpaired $j$'s must be coupled — beyond this course |

Parity is $+$ for $s,d,g,i$ ($l$ even) and $-$ for $p,f,h$ ($l$ odd). The
spin–orbit gap grows as $2l+1$, which is exactly why the high-$l$ aligned levels
drop out of their oscillator shell and create the gaps at 28, 50, 82, 126.

*From* [1.5](lessons/01-05-shell-model-magic-numbers.md)

### Radioactive decay

$$N(t) = N_0 e^{-\lambda t}, \qquad A(t) = \lambda N(t) = A_0 e^{-\lambda t}, \qquad \frac{N}{N_0} = \left(\tfrac12\right)^{t/t_{1/2}}$$

$$t_{1/2} = \frac{\ln 2}{\lambda} \approx 0.693\,\tau, \qquad \tau = \frac1\lambda \approx 1.44\,t_{1/2}$$

**Chain (Bateman)**, parent $\to$ daughter with $N_2(0)=0$:

$$\frac{dN_2}{dt} = \lambda_1 N_1 - \lambda_2 N_2, \qquad N_2(t) = N_{1,0}\frac{\lambda_1}{\lambda_2-\lambda_1}\left(e^{-\lambda_1 t}-e^{-\lambda_2 t}\right)$$

$$t_{\max} = \frac{\ln(\lambda_2/\lambda_1)}{\lambda_2-\lambda_1} \quad(\text{when the daughter's activity peaks})$$

Secular equilibrium: $A_2 \to A_1$ with $N_2/N_1 = \lambda_1/\lambda_2 = t_{1/2,2}/t_{1/2,1}$.

*From* [2.1](lessons/02-01-decay-law-chains.md)

### Decay modes and Q-value bookkeeping

Use **atomic** masses throughout. For $\alpha$ decay and for reactions the
electrons cancel automatically (total $Z$ is unchanged); for $\beta$ decay they
don't, which is where the corrections below come from.

| Mode | Process | $\Delta Z$ | $\Delta A$ | $Q$ from atomic masses |
|---|---|---|---|---|
| $\alpha$ | ${}^{A}_{Z}\mathrm{X}\to{}^{A-4}_{Z-2}\mathrm{Y}+\alpha$ | $-2$ | $-4$ | $\big[M_X - M_Y - M({}^4\mathrm{He})\big]c^2$ |
| $\beta^-$ | ${}^{A}_{Z}\mathrm{X}\to{}^{A}_{Z+1}\mathrm{Y}+e^-+\bar\nu_e$ | $+1$ | $0$ | $\big[M(A,Z)-M(A,Z+1)\big]c^2$ |
| $\beta^+$ | ${}^{A}_{Z}\mathrm{X}\to{}^{A}_{Z-1}\mathrm{Y}+e^++\nu_e$ | $-1$ | $0$ | $\big[M(A,Z)-M(A,Z-1)-2m_e\big]c^2$ |
| EC | ${}^{A}_{Z}\mathrm{X}+e^-\to{}^{A}_{Z-1}\mathrm{Y}+\nu_e$ | $-1$ | $0$ | $\big[M(A,Z)-M(A,Z-1)\big]c^2$ |
| $\gamma$ / IC | ${}^{A}_{Z}\mathrm{X}^{*}\to{}^{A}_{Z}\mathrm{X}+\gamma$ | $0$ | $0$ | $E_\gamma = \Delta E - E_\gamma^2/2Mc^2$ |
| fission | ${}^{235}\mathrm{U}+n\to X+Y+(2\text{–}3)n$ | — | — | $\approx +200$ MeV |

**The EC window.** $\beta^+$ needs the atomic mass difference to clear
$2m_ec^2 = 1.022$ MeV; EC needs only $\Delta M c^2 > 0$. So for
$0 < \Delta Mc^2 < 1.022$ MeV **electron capture is the only option**; above it,
both compete.

**Two-body energy split from rest** (equal and opposite momenta, so
$T \propto 1/m$ — the *lighter* product takes the bigger share):

$$T_1 = Q\,\frac{m_2}{m_1+m_2}, \qquad\text{e.g. } K_\alpha = Q_\alpha\frac{A-4}{A}$$

*From* [2.2](lessons/02-02-alpha-decay-tunneling.md), [2.3](lessons/02-03-beta-decay-neutrino.md), [2.4](lessons/02-04-gamma-decay.md), [2.5](lessons/02-05-nuclear-reactions-q-values.md), [2.6](lessons/02-06-fission-fusion.md)

### Alpha tunneling and Geiger–Nuttall

$$V(r) = \frac{2Z_d e^2}{4\pi\varepsilon_0 r} = \frac{2Z_d(1.44\ \text{MeV·fm})}{r}, \qquad b = \frac{2Z_d(1.44)}{Q_\alpha}\ \text{fm}$$

$$2G \approx 3.96\,\frac{Z_d}{\sqrt{Q_\alpha}}\ (Q_\alpha\ \text{in MeV}), \qquad \lambda = f\,e^{-2G}\ (f\sim10^{21}\ \text{s}^{-1}), \qquad t_{1/2}\propto e^{2G}$$

$$\log_{10}t_{1/2} \approx 1.72\,\frac{Z_d}{\sqrt{Q_\alpha}} + C \qquad\text{(Geiger–Nuttall)}$$

Trust **ratios and orders of magnitude**, never three significant figures — the
constant hides the thick-barrier limit, the guessed assault frequency, and the
alpha-preformation probability.

*From* [2.2](lessons/02-02-alpha-decay-tunneling.md)

### Beta spectrum shape

$$N(T_e) \propto p_e E_e (Q-T_e)^2 F(Z,E_e) \qquad\Longrightarrow\qquad \sqrt{\frac{N(T_e)}{p_e E_e F(Z,E_e)}} \propto (Q-T_e)$$

The right-hand form is the **Kurie plot**: a straight line hitting zero at
$T_e = Q$. A nonzero $m_\nu$ bends it down in the last few eV — the KATRIN
measurement (currently $m_\nu < 0.8\ \text{eV}/c^2$).

*From* [2.3](lessons/02-03-beta-decay-neutrino.md)

### Gamma selection rules

$$\lvert J_i - J_f\rvert \le L \le J_i + J_f, \qquad L \ge 1$$

| Parity | Allowed multipoles, in order |
|---|---|
| **no** change ($\pi_i = \pi_f$) | $M1,\ E2,\ M3,\ E4,\dots$ |
| change ($\pi_i \ne \pi_f$) | $E1,\ M2,\ E3,\ M4,\dots$ |

Each step up in $L$ costs a factor $\sim(kR)^2 \approx 10^{-4}$ in rate, so the
**lowest allowed $L$ dominates overwhelmingly** — and it is $L$, not the
electric/magnetic label, that decides. $0\to0$ has no allowed multipole at all;
it goes by internal conversion ($E0$).

Recoil: $E_{\text{recoil}} = E_\gamma^2/2Mc^2$ — a few eV, negligible for reading
$E_\gamma$, but not zero (that is the Mössbauer story).

*From* [2.4](lessons/02-04-gamma-decay.md)

### Reactions and thresholds

Every nuclear reaction conserves total $Z$, total $A$, and energy–momentum
together.

$$Q = (m_a + m_X - m_Y - m_b)c^2, \qquad T_{\text{th}} = \lvert Q\rvert\left(1 + \frac{m_a}{m_X}\right)\ \ (Q<0,\ \text{nonrelativistic})$$

The threshold exceeds $\lvert Q\rvert$ because momentum conservation locks some
energy into forward CM motion that can never become rest mass — worse the lighter
the target. The exact relativistic version is the invariant-$s$ calculation below.

*From* [2.5](lessons/02-05-nuclear-reactions-q-values.md)

### Fission and fusion numbers

| Quantity | Fission (${}^{235}\mathrm{U}$) | Fusion (D–T) |
|---|---|---|
| Reaction | ${}^{235}\mathrm{U}+n \to X+Y+(2\text{–}3)n$ | ${}^{2}\mathrm{H}+{}^{3}\mathrm{H}\to{}^{4}\mathrm{He}+n$ |
| $Q$ | $\approx 200$ MeV (about $165$ MeV as fragment kinetic energy) | $17.6$ MeV ($14.1$ MeV neutron, $3.5$ MeV alpha) |
| Per nucleon | $200/235 \approx 0.85$ MeV | $17.6/5 \approx 3.5$ MeV |
| Barrier | *internal*: $\sim 6$ MeV deformation barrier; fissility knob $Z^2/A$ ($\approx 36$ for ${}^{235}\mathrm{U}$, vanishing near $48$) | *external* Coulomb: $V_C = (1.44\ \text{MeV·fm})Z_1Z_2/r \approx 0.4$ MeV at $r\approx3$ fm |
| Trigger | a neutral neutron — **no** barrier to entry | $\sim10^8$ K plus tunneling and the Maxwell tail; Lawson criterion on $n\tau_E T$ |

$$Q \approx \sum_{\text{products}} A_i (B/A)_i - \sum_{\text{reactants}} A_j (B/A)_j$$

**Fusion is the better fuel (about $4\times$ per nucleon); fission is the easier fire.**

*From* [2.6](lessons/02-06-fission-fusion.md) *and* [1.2](lessons/01-02-binding-energy-mass-defect.md)

### Relativistic kinematics

$$E^2 = \lvert\mathbf p\rvert^2 + m^2, \qquad \beta = \frac{p}{E}, \qquad \gamma = \frac{E}{m}, \qquad T = E - m$$

**Two photons** (each $\lvert\mathbf p\rvert = E$), opening angle $\theta$ — the bump-hunting formula:

$$M = \sqrt{2E_1E_2(1-\cos\theta)} \qquad (0 \text{ if collinear},\ 2\sqrt{E_1E_2} \text{ if back-to-back})$$

**Two-body decay at rest**, $M \to m_1 + m_2$ — monoenergetic, no free parameter:

$$E_1 = \frac{M^2+m_1^2-m_2^2}{2M}, \qquad E_2 = \frac{M^2+m_2^2-m_1^2}{2M}, \qquad p = \sqrt{E_1^2-m_1^2}$$

**Production thresholds** via the invariant $s$:

| Setup | $s$ | Threshold |
|---|---|---|
| fixed target ($b$ at rest) | $m_a^2+m_b^2+2m_bE_a^{\text{lab}}$ — grows **linearly** in beam energy | $E_a^{\text{thr}} = \dfrac{\left(\sum_f m_f\right)^2 - m_a^2 - m_b^2}{2m_b}$ |
| symmetric collider (head-on, energy $E$ each) | $(2E)^2$ — grows **quadratically** | $\sqrt s = 2E \ge \sum_f m_f$ |

Because fixed-target $\sqrt s \approx \sqrt{2m_bE_{\text{lab}}}$ grows only as the
square root of what you pour in, colliders win by ever more at high energy.
Worked benchmark: $p+p\to p+p+p+\bar p$ needs $T_{\text{thr}} = 6m_p \approx 5.63$ GeV
fixed-target, versus $0.94$ GeV per beam in a collider.

*From* [3.1](lessons/03-01-four-vectors-invariant-mass.md) *and* [3.2](lessons/03-02-collision-decay-kinematics.md)

### Counting rates

$$R = \mathcal L\,\sigma, \qquad R = \dot N (n\sigma x)\ (\text{thin target}), \qquad R_{\text{det}} = \mathcal L\,\frac{d\sigma}{d\Omega}\,\Delta\Omega$$

$$\sigma_{\text{tot}} = \int\frac{d\sigma}{d\Omega}\,d\Omega, \qquad \lambda = \frac{1}{n\sigma}, \qquad I(x) = I_0e^{-n\sigma x}$$

Thin-target linear law is valid only while $n\sigma x \ll 1$; it is the
first Taylor term of the exponential. Classical deflection connects aim to angle:

$$\frac{d\sigma}{d\Omega} = \frac{b}{\sin\theta}\left\lvert\frac{db}{d\theta}\right\rvert \qquad (\text{hard sphere} \Rightarrow \tfrac{R^2}{4},\ \sigma_{\text{tot}} = \pi R^2)$$

*From* [3.3](lessons/03-03-cross-sections-count-rate.md)

### Rutherford scattering and structure

$$\frac{d\sigma}{d\Omega} = \left(\frac{Z_1Z_2e^2}{16\pi\varepsilon_0 E}\right)^2\frac{1}{\sin^4(\theta/2)}, \qquad \frac{(d\sigma/d\Omega)_{\theta_1}}{(d\sigma/d\Omega)_{\theta_2}} = \frac{\sin^4(\theta_2/2)}{\sin^4(\theta_1/2)}$$

The ratio form needs no beam energy or charges — that is what Geiger and Marsden
tested.

$$q = 2p\sin(\theta/2), \qquad \text{resolves } d \sim \frac{\hbar}{q} \quad\Big(\text{use } qc \gtrsim \frac{197\ \text{MeV·fm}}{d}\Big)$$

$$\left(\frac{d\sigma}{d\Omega}\right)_{\text{meas}} = \left(\frac{d\sigma}{d\Omega}\right)_{\text{point}}\lvert F(\mathbf q)\rvert^2, \qquad \text{first diffraction minimum at } \frac{qR}{\hbar}\approx 4.49$$

Backward angles are the **rarest** Rutherford outcome and the **most informative**
(largest $q$, finest resolution). Pure $1/\sin^4$ is the nonrelativistic
point-charge limit; the relativistic point version is **Mott**, and finite size
multiplies $\lvert F(q)\rvert^2$ on top. Absorption is modelled by a complex
"optical" potential $U(r) = V(r) - iW(r)$.

*From* [3.4](lessons/03-04-rutherford-form-factors.md)

### The Standard Model particle table

All fermions are spin $\tfrac12$; all gauge bosons are spin $1$; the Higgs is
spin $0$. "Feels" lists the interactions each participates in (gravity omitted —
everything with energy feels it, and it is $\sim10^{-39}$ here).

| Fermion | Gen. I | Gen. II | Gen. III | $Q$ | $B$ | Feels |
|---|---|---|---|---|---|---|
| up-type quark | $u$ | $c$ | $t$ | $+\tfrac23$ | $+\tfrac13$ | strong, EM, weak |
| down-type quark | $d$ | $s$ | $b$ | $-\tfrac13$ | $+\tfrac13$ | strong, EM, weak |
| charged lepton | $e^-$ | $\mu^-$ | $\tau^-$ | $-1$ | $0$ | EM, weak |
| neutrino | $\nu_e$ | $\nu_\mu$ | $\nu_\tau$ | $0$ | $0$ | **weak only** |

Antiparticles: same mass and spin, **opposite** sign of every additive number
($Q$, $B$, $L$, $S$). A particle is its own antiparticle only if *all* of them
vanish ($\gamma$, $\pi^0$ — but never $\pi^+$ or $p$).

| Boson | Carries | $Q$ | Spin | Mass | Range | Notes |
|---|---|---|---|---|---|---|
| gluon $g$ (8 of them) | strong, $SU(3)_C$ | $0$ | $1$ | $0$ | $\sim1$ fm (confined) | carries color, so it **self-interacts** |
| photon $\gamma$ | EM, $U(1)_{EM}$ | $0$ | $1$ | $0$ | infinite | neutral, so no self-coupling |
| $W^\pm$ | weak charged current | $\pm1$ | $1$ | $80.4$ GeV | $\sim2.5\times10^{-3}$ fm | **only** flavor-changing force |
| $Z^0$ | weak neutral current | $0$ | $1$ | $91.2$ GeV | $\sim2.5\times10^{-3}$ fm | couples to everything, incl. neutrinos |
| Higgs $H$ | not a force carrier | $0$ | $0$ | $125$ GeV | — | a ripple of the field whose VEV gives mass |

Relative strengths at nuclear distances: strong $1$, EM $\sim10^{-2}$,
weak $\sim10^{-6}$, gravity $\sim10^{-39}$. Counting *types*: $6+6$ fermions
$+\,4$ boson types $+\,1$ Higgs $= 17$; counting distinct *states* (3 colors,
antiparticles, 8 gluons, $W^\pm$) $= 61$.

$$SU(3)_C \times SU(2)_L \times U(1)_Y \;\xrightarrow{\ \text{Higgs}\ }\; SU(3)_C \times U(1)_{EM}$$

Colorless $\Rightarrow$ ignores the strong force. $SU(2)_L$ acts on **left-handed**
fermions only (right-handed ones are singlets), which *is* the parity violation.

*From* [4.1](lessons/04-01-particle-zoo.md), [4.5](lessons/04-05-quark-model-qcd.md), [5.1](lessons/05-01-weak-interaction.md), [5.3](lessons/05-03-standard-model-assembled.md)

### Conservation laws — what each force keeps and what it breaks

This is the table that decides whether a reaction happens and, if so, how fast.

| Quantity | Strong | EM | Weak |
|---|---|---|---|
| energy–momentum, angular momentum | ✔ | ✔ | ✔ |
| electric charge $Q$ | ✔ | ✔ | ✔ |
| baryon number $B$ | ✔ | ✔ | ✔ |
| lepton numbers $L_e,L_\mu,L_\tau$ | ✔ | ✔ | ✔ at the vertex (broken *in flight* by oscillation, [5.4](lessons/05-04-neutrinos-oscillations.md)) |
| quark flavor / strangeness $S$ | ✔ | ✔ | ✘ — $\Delta S = 0$ or $\pm1$ per step |
| isospin $I$ | ✔ | ✘ (but $I_3$ survives, since $Q$, $B$, $S$ do) | ✘ |
| parity $P$ | ✔ | ✔ | ✘ **maximally** |
| charge conjugation $C$ | ✔ | ✔ | ✘ **maximally** |
| $CP$ | ✔ | ✔ | ✘ but only slightly ($\sim2\times10^{-3}$ in $K_L\to\pi^+\pi^-$) |
| $CPT$ | ✔ | ✔ | ✔ (exact, as far as anyone can measure) |
| **typical lifetime** | $\sim10^{-23}$ s | $\sim10^{-16}$ s | $\gtrsim10^{-10}$ s |

**The workflow.** (1) Tally $Q$, $B$, $L_e$, $L_\mu$, $L_\tau$ on both sides — any
mismatch means **forbidden**, full stop. (2) If those survive, tally $S$:
$\Delta S = 0$ leaves strong/EM (fast) on the table; $\Delta S \ne 0$ is a
**guarantee** of the weak force, and slow. The converse fails —
$\Delta S = 0$ does *not* prove the process isn't weak (ordinary $\beta$ decay
has $\Delta S = 0$).

The isospin row is not stated in any lesson but follows from the ones above:
electromagnetism distinguishes charges so it breaks $I$, yet it conserves $Q$,
$B$, and $S$, so by Gell-Mann–Nishijima it conserves $I_3$.

*From* [4.2](lessons/04-02-conservation-laws-quantum-numbers.md), [4.3](lessons/04-03-parity-c-cp.md), [4.4](lessons/04-04-isospin-flavor-symmetry.md), [4.1](lessons/04-01-particle-zoo.md)

### Quark content and hadron bookkeeping

| Flavor | $Q$ | $B$ | $S$ |
|---|---|---|---|
| $u$, $c$, $t$ | $+\tfrac23$ | $+\tfrac13$ | $0$ |
| $d$, $b$ | $-\tfrac13$ | $+\tfrac13$ | $0$ |
| $s$ | $-\tfrac13$ | $+\tfrac13$ | $-1$ |

Antiquarks flip every sign. A hadron's $Q$, $B$, $S$ are just the **sums** over
its constituents, and $I_3 = \tfrac12(N_u - N_d)$.

$$\text{meson} = q\bar q\ (B=0), \qquad \text{baryon} = qqq\ (B=1), \qquad Q = I_3 + \frac{B+S}{2} = I_3 + \frac{Y}{2}$$

| Hadron | Content | $Q$ | $B$ | $S$ | Dominant decay | Lifetime |
|---|---|---|---|---|---|---|
| $p$ | $uud$ | $+1$ | $+1$ | $0$ | stable ($B$ forbids everything) | $>10^{34}$ yr |
| $n$ | $udd$ | $0$ | $+1$ | $0$ | weak, $n\to pe^-\bar\nu_e$ | $\sim15$ min (free) |
| $\pi^+$ / $\pi^-$ | $u\bar d$ / $d\bar u$ | $\pm1$ | $0$ | $0$ | weak, $\pi^+\to\mu^+\nu_\mu$ | $\sim10^{-8}$ s |
| $\pi^0$ | $u\bar u,\ d\bar d$ mix | $0$ | $0$ | $0$ | EM, $\pi^0\to\gamma\gamma$ | $\sim8\times10^{-17}$ s |
| $K^+$ / $K^-$ | $u\bar s$ / $s\bar u$ | $\pm1$ | $0$ | $\pm1$ | weak ($\Delta S = 1$) | $1.2\times10^{-8}$ s |
| $K^0$ | $d\bar s$ | $0$ | $0$ | $+1$ | weak, $K^0_S\to\pi^+\pi^-$ | $\sim9\times10^{-11}$ s |
| $\Lambda^0$ | $uds$ | $0$ | $+1$ | $-1$ | weak, $\Lambda^0\to p\pi^-$ | $2.6\times10^{-10}$ s |
| $\Sigma^+,\Sigma^0,\Sigma^-$ | $uus,\ uds,\ dds$ | $+1,0,-1$ | $+1$ | $-1$ | weak | $\sim10^{-10}$ s |
| $\Xi^0$ / $\Xi^-$ | $uss$ / $dss$ | $0$ / $-1$ | $+1$ | $-2$ | weak, one $\Delta S$ step at a time | $\sim10^{-10}$ s |
| $\Omega^-$ | $sss$ | $-1$ | $+1$ | $-3$ | weak | $\sim10^{-10}$ s |
| $\Delta^{++},\Delta^+,\Delta^0$ | $uuu,\ uud,\ udd$ | $+2,+1,0$ | $+1$ | $0$ | **strong**, $\Delta\to N\pi$ | $\sim6\times10^{-24}$ s |

**Color and Pauli.** For three identical quarks, space × spin × flavor comes out
*symmetric* in the $\Delta^{++}=uuu$ spin-$\tfrac32$ ground state; the totally
antisymmetric color singlet fixes it. The $\Delta^{++}$'s mere existence is
evidence that color has three values.

*From* [4.5](lessons/04-05-quark-model-qcd.md), [4.2](lessons/04-02-conservation-laws-quantum-numbers.md), [4.4](lessons/04-04-isospin-flavor-symmetry.md), [4.1](lessons/04-01-particle-zoo.md)

### Isospin multiplets and Clebsch–Gordan rates

| Multiplet | $I$ | Members ($I_3$ high → low) | $Y$ |
|---|---|---|---|
| nucleon | $\tfrac12$ | $p,\ n$ | $+1$ |
| pion | $1$ | $\pi^+,\ \pi^0,\ \pi^-$ | $0$ |
| $\Sigma$ | $1$ | $\Sigma^+,\ \Sigma^0,\ \Sigma^-$ | $0$ |
| $\Lambda^0$ | $0$ | $\Lambda^0$ alone | $0$ |
| $\Xi$ | $\tfrac12$ | $\Xi^0,\ \Xi^-$ | $-1$ |
| $\Delta$ | $\tfrac32$ | $\Delta^{++},\Delta^+,\Delta^0,\Delta^-$ | $+1$ |

$$1\otimes\tfrac12 = \tfrac32 \oplus \tfrac12, \qquad \lvert\pi^-p\rangle = \sqrt{\tfrac13}\left\lvert\tfrac32,-\tfrac12\right\rangle + \sqrt{\tfrac23}\left\lvert\tfrac12,-\tfrac12\right\rangle$$

Strong reaction rates are the **squared** Clebsch–Gordan coefficients. At the
$\Delta(1232)$ peak (pure $I=\tfrac32$) this gives
$\sigma(\pi^+p)/\sigma(\pi^-p) = 3$; and
$\left\lvert\tfrac32,+\tfrac12\right\rangle = \sqrt{\tfrac23}\lvert\pi^0p\rangle + \sqrt{\tfrac13}\lvert\pi^+n\rangle$
gives $\Gamma(\Delta^+\to p\pi^0):\Gamma(\Delta^+\to n\pi^+) = 2:1$. **Strong
reactions only** — the weak force violates isospin freely.

*From* [4.4](lessons/04-04-isospin-flavor-symmetry.md)

### Parity and C-parity arithmetic

$$P(\text{system of }a,b) = \eta_P(a)\,\eta_P(b)\,(-1)^{\ell}, \qquad \psi(-\mathbf r) = \pm\psi(\mathbf r) \Rightarrow P = \pm1$$

| Particle | $\eta_P$ | $\eta_C$ |
|---|---|---|
| quark, proton | $+1$ | — (charged/not self-conjugate) |
| antiproton (fermion antiparticle) | $-1$ | — |
| photon | $-1$ | $-1$ (so $n$ photons give $C=(-1)^n$) |
| pions (pseudoscalars) | $-1$ | $+1$ for $\pi^0$ |

Only genuinely self-conjugate systems have a $C$-parity at all — never $\pi^\pm$.
Worked consequences: $\rho^0(1^-)\to\pi^+\pi^-$ needs $\ell=1$, giving $P=-1$ ✔
(a legal strong decay); $\pi^0\to\gamma\gamma$ is allowed by $C$ while
$\pi^0\to3\gamma$ is forbidden.

*From* [4.3](lessons/04-03-parity-c-cp.md)

### Weak interaction and electroweak relations

$$\mathcal M \propto \frac{g^2}{q^2 - m_W^2} \;\xrightarrow[q^2\ll m_W^2]{}\; -\frac{g^2}{m_W^2}, \qquad \frac{G_F}{\sqrt2} = \frac{g^2}{8m_W^2}, \qquad \Gamma \propto G_F^2 \propto \frac{1}{m_W^4}$$

The weak force is weak **because its messenger is heavy**, not because its
coupling is small ($g\approx0.65 > e\approx0.31$). Range
$r \sim \hbar c/m_Wc^2 \approx 2.5\times10^{-3}$ fm.

$$A = B\cos\theta_W + W^3\sin\theta_W, \qquad Z^0 = -B\sin\theta_W + W^3\cos\theta_W$$

$$e = g\sin\theta_W, \qquad m_W = m_Z\cos\theta_W, \qquad \sin^2\theta_W \approx 0.23\ (\theta_W\approx 28.7^\circ)$$

$$Q = T_3 + \frac{Y}{2}\ \ (T_3 = \pm\tfrac12 \text{ in a left-handed doublet},\ 0 \text{ for a singlet}), \qquad m_f = \frac{y_f v}{\sqrt2},\ v \approx 246\ \text{GeV}$$

*From* [5.1](lessons/05-01-weak-interaction.md), [5.2](lessons/05-02-electroweak-higgs.md), [5.3](lessons/05-03-standard-model-assembled.md)

### Neutrino oscillation

$$\nu_e = \cos\theta\,\nu_1 + \sin\theta\,\nu_2, \qquad \nu_\mu = -\sin\theta\,\nu_1 + \cos\theta\,\nu_2$$

$$P(\nu_\alpha\to\nu_\alpha) = 1 - \sin^2 2\theta\,\sin^2\!\left(1.27\,\frac{\Delta m^2 L}{E}\right), \qquad \Delta m^2 = m_2^2 - m_1^2$$

**Units are glued to the 1.27:** $\Delta m^2$ in $\text{eV}^2$, $L$ in km, $E$ in
GeV. The constant is $1/(4\hbar c)$ with those conversions folded in.

- $\sin^2 2\theta$ sets the **depth** of the dip; $\Delta m^2/E$ sets the **wavelength**. Independent knobs.
- First minimum where the argument is $\pi/2$; full period $L_{\text{osc}} = 4\pi E/\Delta m^2$ (argument $\pi$), i.e. twice the first minimum.
- Benchmarks: atmospheric $\Delta m^2 = 2.5\times10^{-3}\ \text{eV}^2$ (first minimum $\approx 495$ km at $1$ GeV); solar $\Delta m^2 = 7.5\times10^{-5}\ \text{eV}^2$, $\sin^2 2\theta \approx 0.85$ (reactor baselines of $50$–$200$ km).
- $\Delta m^2 = 0 \Rightarrow P \equiv 1$. **Oscillation is itself the proof that neutrinos have mass** — and it measures only the *gap*, never the absolute scale.

*From* [5.4](lessons/05-04-neutrinos-oscillations.md)

### Where the Standard Model runs out

| Open problem | The evidence | Leading idea (unconfirmed) |
|---|---|---|
| neutrino mass | oscillation ([5.4](lessons/05-04-neutrinos-oscillations.md)) | Dirac mass with a $\nu_R$, or Majorana/seesaw $m_\nu \sim m_D^2/M$; smoking gun is $0\nu\beta\beta$ |
| dark matter | rotation curves, lensing, CMB — and it is non-baryonic | WIMPs, axions, sterile neutrinos |
| matter–antimatter asymmetry | we exist; the SM's CKM $CP$ violation is far too small | Sakharov conditions: $B$ violation, $C$ and $CP$ violation, out of equilibrium |
| gravity, hierarchy | not in the SM; quantum corrections should drag $m_H$ far above $125$ GeV | SUSY, extra dimensions, string theory |
| dark energy | accelerating expansion, $68\%$ of the budget | open |

Cosmic budget: $5\%$ ordinary matter, $27\%$ dark matter, $68\%$ dark energy — so
the SM describes about one part in twenty of the universe, to twelve decimal
places. GUTs generically predict proton decay ($p\to e^+\pi^0$); the crude
estimate $\Gamma_p \sim m_p^5/M_X^4$ with $M_X\sim10^{16}$ GeV gives
$\tau_p \sim 10^{32}$ yr, and the non-observation has already killed minimal $SU(5)$.

*From* [5.5](lessons/05-05-beyond-standard-model.md)

## Assumed, not taught here

This is a Tier 2 course: it uses the following without deriving them, and points
at the course where the derivation lives. (Full quantum-field-theory
computation — Feynman amplitudes, loops, renormalization, the running of
$\alpha_s$ — is deliberately deferred to `qft` and is not assumed anywhere here.)

| Fact | Where it's taught |
|---|---|
| $E = mc^2$; four-vectors and Lorentz boosts; the $+\,-\,-\,-$ metric | [relativity 1.5](../relativity/lessons/01-05-four-vectors-momentum.md), [1.2](../relativity/lessons/01-02-lorentz-transformations.md) |
| A four-vector's invariant "length" is frame-independent | [relativity 1.4](../relativity/lessons/01-04-spacetime-interval-causality.md) |
| Relativistic energy–momentum and $\beta$, $\gamma$ relations | [relativity 1.6](../relativity/lessons/01-06-relativistic-dynamics-optics.md) |
| Barrier tunneling and the WKB exponent behind the Gamow factor | [quantum-mechanics 2.5](../quantum-mechanics/lessons/02-05-scattering-barriers-tunneling.md), [6.4](../quantum-mechanics/lessons/06-04-wkb-approximation.md) |
| Angular-momentum algebra and the splitting $j = l\pm\tfrac12$ | [quantum-mechanics 4.2](../quantum-mechanics/lessons/04-02-angular-momentum-algebra.md) |
| Adding angular momenta; Clebsch–Gordan coefficients (isospin borrows them wholesale) | [quantum-mechanics 4.6](../quantum-mechanics/lessons/04-06-addition-angular-momenta.md) |
| Spherical harmonics and their parity, $Y_\ell^m(-\hat r) = (-1)^\ell Y_\ell^m(\hat r)$ | [quantum-mechanics 4.3](../quantum-mechanics/lessons/04-03-spherical-harmonics-rigid-rotor.md) |
| One particle in a 3D central well — the shell model's mean field | [quantum-mechanics 4.1](../quantum-mechanics/lessons/04-01-schrodinger-3d.md), [4.4](../quantum-mechanics/lessons/04-04-hydrogen-atom.md) |
| Pauli exclusion; antisymmetry of an identical-fermion wavefunction (the SEMF asymmetry term, the $\Delta^{++}$ color argument) | [quantum-mechanics 5.1](../quantum-mechanics/lessons/05-01-identical-particles.md) |
| Fermi's golden rule — rate $=$ coupling$^2\times$ phase space (Fermi beta theory, multipole rates) | [quantum-mechanics 6.6](../quantum-mechanics/lessons/06-06-fermi-golden-rule-radiation.md) |
| Two-state superposition and phase beating (neutrino oscillation is this, stretched over 500 km) | [quantum-mechanics 2.2](../quantum-mechanics/lessons/02-02-stationary-states-time-evolution.md) |
| Energy–time uncertainty behind $\tau = \hbar/\Gamma$ and $p\sim\hbar/\Delta x$ | [quantum-mechanics 3.3](../quantum-mechanics/lessons/03-03-commutators-uncertainty.md) |
| First-order linear ODEs and the integrating factor (decay law, Bateman, attenuation) | [ode-refresher 1.2](../ode-refresher/lessons/01-02-separable-and-linear-first-order.md) |
| The Fourier transform — "form factor $=$ FT of $\rho(r)$" is literal, not analogy | [fourier-analysis 2.1](../fourier-analysis/lessons/02-01-series-to-fourier-transform.md) |
| Coulomb potential energy and the electrostatic self-energy of a charged sphere (the SEMF Coulomb term) | [em-refresher 1.3](../em-refresher/lessons/01-03-electric-potential.md), [1.2](../em-refresher/lessons/01-02-gauss-law.md) |
| The Maxwell–Boltzmann high-energy tail that feeds the fusion rate | [stat-mech 3.1](../stat-mech/lessons/03-01-canonical-ensemble-boltzmann-factor.md) |
| Two-body momentum and energy conservation, $T = p^2/2m$ | [mechanics-refresher 2.3](../mechanics-refresher/lessons/02-03-momentum-collisions.md) |
| Extremizing a function subject to a fixed constraint (setting $\partial B/\partial Z = 0$ at fixed $A$) | [calc-refresher 4.2](../calc-refresher/lessons/04-02-multivariable-optimization-lagrange.md) |

## Pitfalls

### Nuclear structure and binding

- $A$ is a **count** of nucleons, dimensionless — it only *nearly* equals the atomic mass in u, and the gap is the mass defect. *([1.1](lessons/01-01-anatomy-of-the-nucleus.md))*
- Twice the nucleons is **not** twice the radius: $R\propto A^{1/3}$, so doubling $R$ takes eight times the nucleons. Density never changes. *([1.1](lessons/01-01-anatomy-of-the-nucleus.md))*
- Isoto**p**e = same protons, isoto**n**e = same neutrons, iso**bar** = same $A$. Swapping these scrambles every decay diagram. *([1.1](lessons/01-01-anatomy-of-the-nucleus.md))*
- Bigger total $B$ does not mean more tightly bound — the figure of merit is $B/A$. Uranium beats iron on $B$ and loses on $B/A$, which is exactly why it can fission. *([1.2](lessons/01-02-binding-energy-mass-defect.md))*
- Never mix atomic and bare masses in one calculation; you'd leave $Z$ electron masses uncancelled ($\sim Z\times0.511$ MeV). *([1.2](lessons/01-02-binding-energy-mass-defect.md), [2.5](lessons/02-05-nuclear-reactions-q-values.md))*
- The Coulomb term is $Z(Z-1)$, not $Z^2$ — a proton doesn't repel itself. *([1.3](lessons/01-03-semi-empirical-mass-formula.md))*
- The pairing term's **sign flips**: $+$ even–even, $0$ odd $A$, $-$ odd–odd. Classify the parity of $Z$ and $N$ before anything else. *([1.3](lessons/01-03-semi-empirical-mass-formula.md))*
- More binding means **less** mass: maximizing $B$ at fixed $A$ *is* minimizing the atomic mass. *([1.3](lessons/01-03-semi-empirical-mass-formula.md))*
- SEMF is a *smooth* fit and knows nothing about closed shells — at the magic numbers real nuclei are more bound than it predicts. *([1.3](lessons/01-03-semi-empirical-mass-formula.md), [1.5](lessons/01-05-shell-model-magic-numbers.md))*
- $Z^{*} = A/2$ only for light nuclei; Coulomb drags it below $A/2$ as $A$ grows, so the neutron surplus of heavy nuclei is a feature. *([1.4](lessons/01-04-stability-valley.md))*
- "Too many neutrons" is relative to $Z^{*}$ at *that* $A$, never an absolute $N$ — ${}^{208}\mathrm{Pb}$ has 126 and is perfectly stable. *([1.4](lessons/01-04-stability-valley.md))*
- One stable isobar per $A$ holds for odd $A$ only; pairing splits even $A$ into two parabolas, so two or three stable isobars are normal. *([1.4](lessons/01-04-stability-valley.md))*
- Protons and neutrons fill **separate** ladders — count them independently, and "magic" applies to each on its own. *([1.5](lessons/01-05-shell-model-magic-numbers.md))*
- A plain well gives only 2, 8, 20. The upper magic numbers do not exist without the strong spin–orbit term — which is why nuclear magic numbers differ from atomic ones. *([1.5](lessons/01-05-shell-model-magic-numbers.md))*
- Don't read the odd-nucleon rule onto even–even nuclei: they are flatly $0^+$, no ladder needed. *([1.5](lessons/01-05-shell-model-magic-numbers.md))*

### Decay and reactions

- A nucleus does not "age" toward decay — the hazard rate is constant and survival is memoryless. Half-life describes a *population*. *([2.1](lessons/02-01-decay-law-chains.md))*
- $\tau \ne t_{1/2}$: the mean life is $1.44\,t_{1/2}$, the time to fall to $1/e$, not to a half. *([2.1](lessons/02-01-decay-law-chains.md))*
- Secular equilibrium equalizes **activities**, not populations — $N_2/N_1$ can be a millionth. *([2.1](lessons/02-01-decay-law-chains.md))*
- Higher $Q_\alpha$ means a *shorter* life, not longer: it thins the barrier, shrinking $2G$. Hot alphas leave fast. *([2.2](lessons/02-02-alpha-decay-tunneling.md))*
- The barrier is set by the **daughter's** charge $Z_d = Z-2$, not the parent's. *([2.2](lessons/02-02-alpha-decay-tunneling.md))*
- For $\beta^-$ you add **nothing** — the emitted electron is already inside the daughter's atomic-mass count. Only $\beta^+$ pays the $2m_ec^2$ surcharge. *([2.3](lessons/02-03-beta-decay-neutrino.md))*
- A continuous spectrum is not lost energy; it is the signature of a **three-body** final state. And $\beta^-$ emits $\bar\nu_e$ while $\beta^+$/EC emit $\nu_e$ — the bar is real bookkeeping. *([2.3](lessons/02-03-beta-decay-neutrino.md))*
- $E_\gamma$ falls short of $\Delta E$ by the recoil $E_\gamma^2/2Mc^2$ — a few eV, negligible for reading the energy but *not* zero (Mössbauer). *([2.4](lessons/02-04-gamma-decay.md))*
- $0^+\to0^+$ emits **no** single photon; there is no $L=0$ radiation. *([2.4](lessons/02-04-gamma-decay.md))*
- Electric does not automatically beat magnetic — the multipole **order** $L$ sets the rate, so an $M1$ outruns an $E2$. *([2.4](lessons/02-04-gamma-decay.md))*
- An endothermic reaction needs more than $\lvert Q\rvert$: $T_{\text{th}} = \lvert Q\rvert(1+m_a/m_X)$, because the CM keeps moving forward. *([2.5](lessons/02-05-nuclear-reactions-q-values.md))*
- $Q$ is (reactants $-$ products) in *rest mass* but (products $-$ reactants) in *kinetic energy*; flipping one flips exo/endothermic. Carry masses to 5–6 decimals — $0.003\,\mathrm{u}$ is $2.8$ MeV. *([2.5](lessons/02-05-nuclear-reactions-q-values.md))*
- "$17.6 < 200$ MeV so fusion loses" compares 5 nucleons against 235. Per nucleon fusion wins by $\sim4\times$. Always ask "per what?" *([2.6](lessons/02-06-fission-fusion.md))*
- The fission barrier is *internal* (surface tension resisting deformation), the opposite geometry from fusion's *external* Coulomb barrier — and the incoming neutron feels no barrier at all. *([2.6](lessons/02-06-fission-fusion.md))*
- $k = 1.5$ is not "50% more energy" — $k$ compounds every generation, in microseconds. *([2.6](lessons/02-06-fission-fusion.md))*

### Kinematics and scattering

- Invariant masses are **not additive**: add four-momenta first, then take the length. Two 60 MeV photons give 120 MeV back-to-back and nearly 0 collinear. *([3.1](lessons/03-01-four-vectors-invariant-mass.md))*
- Keep the metric's minus signs — $p\cdot p = E^2 - \lvert\mathbf p\rvert^2$. That sign is what makes it an invariant. *([3.1](lessons/03-01-four-vectors-invariant-mass.md))*
- Total beam energy is not available energy: only $\sqrt s$ counts, and for a fixed target it grows as $\sqrt{E_{\text{lab}}}$. Never equate $\sqrt s$ with $\sum E_{\text{lab}}$ unless the total lab momentum is zero. *([3.1](lessons/03-01-four-vectors-invariant-mass.md), [3.2](lessons/03-02-collision-decay-kinematics.md))*
- A two-body decay from rest is **monoenergetic** — the daughter energies are pinned by the masses alone. A continuous spectrum means a hidden third body. *([3.2](lessons/03-02-collision-decay-kinematics.md))*
- Set thresholds by equating the invariant $s$, never by "outgoing rest energy = incoming kinetic energy" — at threshold the products are at rest in the **CM**, not the lab. *([3.2](lessons/03-02-collision-decay-kinematics.md))*
- $\sigma$ is an *effective* area for one process, not the particle's size — the same proton is tens of mb to the strong force and $10^{-14}$ b to a neutrino. *([3.3](lessons/03-03-cross-sections-count-rate.md))*
- $\sigma$ (barns) and $d\sigma/d\Omega$ (barns/sr) differ by a solid angle; detector counts always need the differential form. *([3.3](lessons/03-03-cross-sections-count-rate.md))*
- The thin-target law $R = \dot N n\sigma x$ assumes every projectile survives to the far side; once $n\sigma x$ isn't small, use the exponential. *([3.3](lessons/03-03-cross-sections-count-rate.md))*
- $\lvert F(q)\rvert \le 1$, so a form factor only ever **suppresses** the point-charge rate. An *enhancement* is a resonance, a different mechanism. *([3.4](lessons/03-04-rutherford-form-factors.md))*
- Big angle means *rare*, not *big cross-section* — but it's where $q$ is largest and the resolution finest. Rarity and resolving power go together. *([3.4](lessons/03-04-rutherford-form-factors.md))*
- Pure $1/\sin^4(\theta/2)$ is the nonrelativistic point-charge limit; add spin and recoil (Mott) and finite size ($\lvert F\rvert^2$) at real energies. *([3.4](lessons/03-04-rutherford-form-factors.md))*

### Particles, symmetries, and the Standard Model

- "Feels the strong force" and "decays by the strong force" are different questions — the $K^+$ and $\Lambda^0$ feel it and still decay weakly, which is why they live so long. *([4.1](lessons/04-01-particle-zoo.md), [4.2](lessons/04-02-conservation-laws-quantum-numbers.md))*
- A net-neutral hadron is not electromagnetically inert: the neutron is built of charged quarks and has a magnetic moment. *([4.1](lessons/04-01-particle-zoo.md))*
- Integer spin makes something a boson; it does **not** make it a force carrier. Mesons are bosons and are matter-like composites. *([4.1](lessons/04-01-particle-zoo.md))*
- $\Delta S \ne 0 \Rightarrow$ weak, guaranteed. The converse is false: $\Delta S = 0$ leaves all three forces open (ordinary $\beta$ decay is weak with $\Delta S = 0$). *([4.2](lessons/04-02-conservation-laws-quantum-numbers.md))*
- Lepton number is conserved **family by family** — $\mu^-\to e^-\gamma$ balances the total and is still never seen. *([4.2](lessons/04-02-conservation-laws-quantum-numbers.md))*
- Antiparticles flip the sign of $B$, $L$, and $S$: an $\bar s$ carries $S=+1$. One sign error turns allowed into forbidden. *([4.2](lessons/04-02-conservation-laws-quantum-numbers.md))*
- Gell-Mann–Nishijima is a bookkeeping identity, not a dynamical law — it gives a particle's charge, never whether a reaction happens. *([4.2](lessons/04-02-conservation-laws-quantum-numbers.md))*
- $P$ inverts **all three** axes, not one; a plane mirror is $P$ times a rotation, which is why "mirror world" is fair shorthand. *([4.3](lessons/04-03-parity-c-cp.md))*
- Charged particles have **no** $C$-parity — $C$ turns $\pi^+$ into a different state. Only self-conjugate systems get one. *([4.3](lessons/04-03-parity-c-cp.md))*
- $P$ and $C$ are violated **maximally**; $CP$ only barely ($\sim10^{-3}$); $CPT$ not at all. Don't flatten those three scales together. *([4.3](lessons/04-03-parity-c-cp.md))*
- Isospin "up" is not a direction in the lab — it borrows angular momentum's *mathematics*, not its meaning. And it is only approximate: EM and the $u$/$d$ mass difference break it. *([4.4](lessons/04-04-isospin-flavor-symmetry.md))*
- The Clebsch–Gordan rate trick applies to **strong** processes only; weak decays violate isospin freely. *([4.4](lessons/04-04-isospin-flavor-symmetry.md))*
- Color is not a visible color and not a $\pm$ pair — three values plus three anticolors, which is why the neutral combinations are $q\bar q$ *and* $qqq$. *([4.5](lessons/04-05-quark-model-qcd.md))*
- More energy makes **more hadrons**, never a free quark: confinement is built into QCD, not a practical limit. *([4.5](lessons/04-05-quark-model-qcd.md))*
- The $s$ quark carries $S = -1$ by convention, so hadrons *containing* strangeness have negative $S$ — but $K^+ = u\bar s$ has $S=+1$. *([4.5](lessons/04-05-quark-model-qcd.md))*
- "Weak" is not a small coupling: $g \approx 2.1\,e$. The weakness is entirely $1/m_W^2$ from the heavy propagator, and it disappears at LHC energies. *([5.1](lessons/05-01-weak-interaction.md), [5.2](lessons/05-02-electroweak-higgs.md))*
- Neutral current is not electromagnetism — the $Z^0$ couples to chargeless neutrinos and violates parity; the photon does neither. *([5.1](lessons/05-01-weak-interaction.md))*
- The $W$ crosses generations via CKM mixing; assuming same-generation-only makes half the hadron decay table look forbidden. *([5.1](lessons/05-01-weak-interaction.md))*
- The Higgs gives *elementary* particles mass; roughly 99% of a proton's mass is strong-force binding energy, not Higgs mass. And the **field** (the VEV) gives mass — the **boson** is just the ripple that proves the field exists. *([5.2](lessons/05-02-electroweak-higgs.md))*
- The symmetry is hidden, not destroyed: the laws stay symmetric and only the vacuum's choice breaks it. And $\theta_W \approx 28.7^\circ$ is a large mixing, not a small correction. *([5.2](lessons/05-02-electroweak-higgs.md))*
- $SU(2)_L\times U(1)_Y$ is **not** "weak × electromagnetic" — it is the unified electroweak symmetry, and the Higgs carves the photon and $Z$ out of it. *([5.3](lessons/05-03-standard-model-assembled.md))*
- Gluons carry color and self-interact; the photon is neutral and doesn't. That difference is the root of confinement. *([5.3](lessons/05-03-standard-model-assembled.md), [4.5](lessons/04-05-quark-model-qcd.md))*
- A neutrino does not *decay* into another flavor — nothing is lost; the flavor **label** rotates by interference, and the three probabilities always sum to 1. *([5.4](lessons/05-04-neutrinos-oscillations.md))*
- The mixing angle sets the **depth** of the oscillation, never the rate; and $\Delta m^2$ is a difference of *squares*, blind to the absolute mass scale. *([5.4](lessons/05-04-neutrinos-oscillations.md))*
- The $1.27$ is glued to eV², km, GeV — change units and the constant changes. *([5.4](lessons/05-04-neutrinos-oscillations.md))*
- "Beyond the Standard Model" means **incomplete**, not wrong: any replacement must reproduce its twelve-digit successes. And GUTs and SUSY are promising, not established. *([5.5](lessons/05-05-beyond-standard-model.md))*
