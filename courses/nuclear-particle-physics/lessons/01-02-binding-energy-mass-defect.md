# Nuclear & Particle Physics · Lesson 1.2: Binding energy & the mass defect

> ⏱ ~15 min · Module 1: Nuclear structure & models · Builds on: [1.1 Anatomy of the nucleus](01-01-anatomy-of-the-nucleus.md) · Unlocks: [1.3 The semi-empirical mass formula](01-03-semi-empirical-mass-formula.md)

## Why this matters

Weigh a helium nucleus, then weigh its two protons and two neutrons separately. The assembled nucleus comes out *lighter* — by about 0.7%. That missing mass is not an error; it is the energy that holds the nucleus together, cashed out through $E=mc^2$. This one fact is the ledger behind everything energetic in the nuclear world: it tells you how much energy a reaction can release, why iron sits at the bottom of the well, and why both the Sun (fusion) and a reactor (fission) run on the *same* curve. Learn to read that curve and you can estimate the yield of any nuclear process before doing a lick of dynamics.

## The idea

Bound things are lighter than their loose parts. That sounds strange only because everyday binding energies are far too small to weigh — the chemical energy in a struck match changes its mass by less than a trillionth. Nuclei are held together by the enormously stronger nuclear force, so their binding shows up on the scale.

Here is the mental picture. To pull a nucleus completely apart into free, stationary protons and neutrons, you must *do work* against the nuclear glue — you inject energy. Energy has mass ($E=mc^2$), so the scattered pile of nucleons is heavier than the nucleus you started with. Run it backwards: when those nucleons snap together, they *release* that same energy (as photons, kinetic energy, whatever), and the bound nucleus ends up lighter by exactly the released amount. **The nucleus is lighter than its pieces because binding released energy.** The size of that mass gap, converted to energy, is the **binding energy** — literally the price of disassembly.

The single most useful number is not the total binding energy but the binding energy *per nucleon*, $B/A$: on average, how tightly is each proton or neutron held? Plot it against mass number and you get one of the most important graphs in physics — a steep rise, a broad peak around iron, and a gentle decline. Every nucleus "wants" to slide toward that peak, and that is the whole story of nuclear energy.

## The formal version

Take a nucleus with $Z$ protons, $N$ neutrons, and mass number $A = Z + N$. Let $M(Z,A)$ be its measured mass, $m_p$ the proton mass, $m_n$ the neutron mass. The **mass defect** is how much lighter the nucleus is than its separated constituents:

$$\Delta m = Z m_p + N m_n - M(Z,A).$$

*In words: add up the masses of all the free nucleons, then subtract the mass of the actual nucleus — the leftover is the mass that "went missing" into binding.* For a bound nucleus $\Delta m > 0$.

Convert that missing mass to energy with $E = mc^2$. The **binding energy** is

$$\boxed{\,B = \big[Z m_p + N m_n - M(Z,A)\big]c^2 = \Delta m\, c^2\,}$$

*In words: $B$ is the energy you would have to supply to pull the nucleus apart into free nucleons at rest — equivalently, the energy released when they came together.*

**Atomic vs nuclear masses — the convention that saves you.** Tabulated masses are almost always **atomic** masses (nucleus *plus* $Z$ electrons), because that is what mass spectrometers actually weigh. If you use the atomic mass of hydrogen $M(^1\mathrm{H})$ in place of the bare proton, and the atomic mass $M_{\text{atom}}(Z,A)$ in place of the nucleus, the $Z$ electron masses cancel between the two sides:

$$B = \big[Z\,M(^1\mathrm{H}) + N m_n - M_{\text{atom}}(Z,A)\big]c^2.$$

*In words: as long as you use atomic masses consistently on both sides, the electrons take care of themselves — do not mix a bare proton mass with an atomic nuclear mass.* (This ignores the tiny electron binding energies, a few eV, utterly negligible against MeV nuclear scales.) We use atomic masses throughout.

**The unit that makes it painless.** Masses come in atomic mass units $\mathrm{u}$ (where $^{12}\mathrm{C}$ weighs exactly $12\,\mathrm{u}$). The conversion you will use constantly is

$$1\,\mathrm{u} = 931.494\ \mathrm{MeV}/c^2,$$

so a mass defect quoted in $\mathrm{u}$ becomes an energy in MeV just by multiplying by $931.494$. Handy reference values: $M(^1\mathrm{H}) = 1.007825\,\mathrm{u}$, $m_n = 1.008665\,\mathrm{u}$.

**The figure of merit.** Divide by the number of nucleons to get the **binding energy per nucleon**,

$$B/A,$$

*In words: the average energy holding each nucleon in place.* Plotted against $A$ it rises steeply for light nuclei, peaks at about $8.8\ \mathrm{MeV/nucleon}$ near $^{56}_{26}\mathrm{Fe}$ (the most tightly bound region), then declines slowly toward the heavy end (about $7.6\ \mathrm{MeV/nucleon}$ at $^{235}_{92}\mathrm{U}$).

**The central consequence.** Because the curve *peaks in the middle*, there are two ways to move nucleons to a more tightly bound (lower-mass, energy-releasing) configuration:

- **Fusion** — combine light nuclei (far left, loosely bound) into a heavier one closer to the peak. Climbing the steep left slope releases a lot per nucleon.
- **Fission** — split a heavy nucleus (far right) into two mid-mass fragments nearer the peak. Sliding down the gentle right slope releases energy too.

Both processes cash in the *same* curve; we quantify the yields in [2.6 Fission & fusion energetics](02-06-fission-fusion.md).

## Picture

![Binding energy per nucleon B/A in MeV plotted against mass number A: a steep rise from deuterium, a spike at helium-4, a broad peak near iron-56 at about 8.8 MeV, and a slow decline to uranium, with "fusion" arrow on the left and "fission" arrow on the right](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (the definition in action — helium-4).** How tightly bound is $^{4}_{2}\mathrm{He}$? Here $Z = 2$, $N = 2$, $A = 4$, and the atomic mass is $M_{\text{atom}}(^4\mathrm{He}) = 4.002602\,\mathrm{u}$. Using atomic masses:

$$\Delta m = 2\,M(^1\mathrm{H}) + 2 m_n - M_{\text{atom}}(^4\mathrm{He}) = 2(1.007825) + 2(1.008665) - 4.002602\ \mathrm{u}.$$

$$\Delta m = 4.032980 - 4.002602 = 0.030378\ \mathrm{u}.$$

Convert to energy:

$$B = 0.030378\ \mathrm{u} \times 931.494\ \frac{\mathrm{MeV}}{\mathrm{u}} = 28.30\ \mathrm{MeV}, \qquad \frac{B}{A} = \frac{28.30}{4} = 7.07\ \mathrm{MeV/nucleon}.$$

So it costs $28.3$ MeV to shatter a helium-4 nucleus into two free protons and two free neutrons — and each nucleon is held by $7.07$ MeV on average. That is a striking value for such a small nucleus (note the spike at $A=4$ in the figure); Problem 3 asks why.

**Example 2 (why you'd care — reading energy off the curve).** The curve's shape *predicts* nuclear energy yields without any dynamics. Take fission of $^{235}\mathrm{U}$ ($B/A \approx 7.6\ \mathrm{MeV}$) into two fragments near $A \approx 117$ ($B/A \approx 8.5\ \mathrm{MeV}$). Every one of the $235$ nucleons ends up more tightly bound by about $\Delta(B/A) \approx 8.5 - 7.6 = 0.9\ \mathrm{MeV}$. The energy released is the *gain in total binding*:

$$Q \approx A \times \Delta(B/A) \approx 235 \times 0.9 \approx 210\ \mathrm{MeV}.$$

That is the famous "$\sim 200$ MeV per fission." The same accounting run the other way — fusing light nuclei up the steep left slope — gives fusion's large yield *per nucleon*. One curve, both power sources.

## Watch out

- **You might think a heavier nucleus is more tightly bound because it "has more binding energy."** Total $B$ does grow with $A$ (more nucleons, more bonds), but the figure of merit is $B/A$. Uranium has a *larger* total $B$ than iron yet a *smaller* $B/A$ — it is less tightly bound per nucleon, which is exactly why it can release energy by splitting.
- **You might mix bare and atomic masses.** If you plug the neutral-atom mass of the nucleus but a *bare* proton mass, you leave $Z$ electron masses uncancelled and your $B$ is off by $\sim Z \times 0.511$ MeV. Use $M(^1\mathrm{H})$ with atomic $M_{\text{atom}}$, or bare $m_p$ with a bare nuclear mass — never a mixture.
- **You might expect the peak exactly at iron.** $^{56}\mathrm{Fe}$ is the traditional "most bound" nucleus and the right answer for this course, but $^{62}\mathrm{Ni}$ actually edges it out by a hair. The physics point is that the maximum sits in the $A \approx 56$–$62$ region, not on one specific nuclide.

## One-liner

> A bound nucleus weighs less than its parts by $\Delta m$, and $B=\Delta m\,c^2$ is the energy to take it apart; the curve of $B/A$ peaks near iron, so fusing light nuclei and fissioning heavy ones both slide toward the peak and release energy.

## Problems

**P1 (🟢)** Compute the binding energy $B$ and the binding energy per nucleon $B/A$ for $^{12}_{6}\mathrm{C}$. Its atomic mass is exactly $12.000000\,\mathrm{u}$ by definition; use $M(^1\mathrm{H}) = 1.007825\,\mathrm{u}$, $m_n = 1.008665\,\mathrm{u}$, and $1\,\mathrm{u} = 931.494\ \mathrm{MeV}/c^2$.

**P2 (🟡)** In the (rare) fusion branch $^{2}\mathrm{H} + {}^{2}\mathrm{H} \to {}^{4}\mathrm{He} + \gamma$, deuterons combine to form helium-4. Given total binding energies $B(^2\mathrm{H}) = 2.22\ \mathrm{MeV}$ and $B(^4\mathrm{He}) = 28.30\ \mathrm{MeV}$, find the energy released. (Hint: energy released $=$ total binding of products $-$ total binding of reactants.)

**P3 (🔴, optional)** Adding one neutron to $^{3}\mathrm{He}$ to make $^{4}\mathrm{He}$ produces an outsized jump in binding. Compute $B/A$ for $^{3}_{2}\mathrm{He}$ (atomic mass $3.016029\,\mathrm{u}$) and compare it to helium-4's $7.07\ \mathrm{MeV/nucleon}$. Why is $^{4}\mathrm{He}$ so unusually tightly bound for its size? (One qualitative sentence — this previews [1.5](01-05-shell-model-magic-numbers.md).)

<details>
<summary>Solutions</summary>

**P1** With $Z = 6$, $N = 6$:

$$\Delta m = 6(1.007825) + 6(1.008665) - 12.000000 = 6.046950 + 6.051990 - 12 = 0.098940\ \mathrm{u}.$$

$$B = 0.098940 \times 931.494 = 92.16\ \mathrm{MeV}, \qquad B/A = \frac{92.16}{12} = 7.68\ \mathrm{MeV/nucleon}.$$

*Check.* $B/A = 7.68$ MeV sits just below the $\approx 8.8$ MeV peak and above helium's $7.07$ — right where $^{12}\mathrm{C}$ belongs on the rising part of the curve. Order of magnitude ✓ (tens of MeV total, single-digit MeV per nucleon).

**P2** Total binding of products minus reactants:

$$Q = B(^4\mathrm{He}) - 2\,B(^2\mathrm{H}) = 28.30 - 2(2.22) = 28.30 - 4.44 = 23.86\ \mathrm{MeV}.$$

*Check.* The product is far more tightly bound per nucleon ($7.07$) than a deuteron ($2.22/2 = 1.11$), so a large release is expected, and $\sim 24$ MeV for four nucleons is the right MeV-per-nucleon scale ✓. Equivalently you would get the same number from the mass defect $2M(^2\mathrm{H}) - M(^4\mathrm{He})$ — binding-energy bookkeeping and mass bookkeeping are the same ledger.

**P3** For $^{3}\mathrm{He}$, $Z = 2$, $N = 1$:

$$\Delta m = 2(1.007825) + 1(1.008665) - 3.016029 = 3.024315 - 3.016029 = 0.008286\ \mathrm{u},$$

$$B = 0.008286 \times 931.494 = 7.72\ \mathrm{MeV}, \qquad B/A = \frac{7.72}{3} = 2.57\ \mathrm{MeV/nucleon}.$$

Adding a single neutron nearly *triples* the binding per nucleon (from $2.57$ to $7.07$). $^{4}\mathrm{He}$ is a **doubly magic** nucleus — it has closed proton and neutron shells ($Z = N = 2$), the nuclear analog of a filled electron shell in a noble gas, plus fully paired nucleons. That closed-shell, fully-paired structure makes it exceptionally stable, which is exactly why the $\alpha$ particle is emitted as a unit in alpha decay ([2.2](02-02-alpha-decay-tunneling.md)).

*Check.* $2.57 < 7.07$ as required (the incomplete shell is more loosely bound), and both are single-digit MeV — sane ✓.

</details>

## Connections

- **Backward:** this builds directly on [1.1 Anatomy of the nucleus](01-01-anatomy-of-the-nucleus.md) — you already know $Z$, $N$, $A$ and how to name a nuclide; here those counts turn into an energy via the measured mass. That masses are additive-minus-a-defect is the numerical shadow of the strong nuclear force introduced there.
- **Forward:** [1.3 The semi-empirical mass formula](01-03-semi-empirical-mass-formula.md) *derives* the shape of the $B/A$ curve from five physical terms (volume, surface, Coulomb, asymmetry, pairing), and [2.6 Fission & fusion energetics](02-06-fission-fusion.md) converts "slide toward the peak" into actual MeV yields.
- **Sideways:** the whole lesson rests on $E = mc^2$ from special [`relativity`](../../relativity/syllabus.md) — mass and energy are the same currency — and the extraordinary stability of $^4\mathrm{He}$ foreshadows the closed-shell "magic numbers" of the shell model ([1.5](01-05-shell-model-magic-numbers.md)), the nuclear echo of the electron-shell structure you met in [`quantum-mechanics`](../../quantum-mechanics/syllabus.md).
