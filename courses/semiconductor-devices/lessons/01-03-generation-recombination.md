# Semiconductor Devices · Lesson 1.3: Generation and recombination

> ⏱ ~15 min · Module 1: Carriers and transport · Builds on: [1.1 Carriers, doping and the Fermi level](01-01-carriers-doping-fermi-level.md), [1.2 Drift, diffusion and the Einstein relation](01-02-drift-diffusion-einstein.md) · Unlocks: [1.4 The continuity equations](01-04-continuity-equations.md), [4.2 The LED and the laser diode](04-02-led-and-laser-diode.md)

## Why this matters

[1.2](01-02-drift-diffusion-einstein.md) moved carriers around. This lesson asks where they come from and where they go — and the answer turns out to control more device behaviour than the transport does.

**Recombination lifetime is the master parameter of bipolar devices.** It sets the diode's saturation current and therefore its turn-on voltage. It sets how fast a diode can switch off. It sets a BJT's current gain. It sets whether a solar cell reaches 25% efficiency or 10%. And it is the one parameter that is not set by geometry or doping but by *purity* — by how many stray metal atoms and crystal defects sit in the lattice — which is why a semiconductor fab spends extraordinary effort on cleanliness.

The lesson's central result is a mildly surprising one: the dominant recombination path in silicon is not an electron falling into a hole. It is an electron and a hole both being captured, separately, by a **defect** — and that path is why silicon is a terrible light emitter and gallium arsenide is a good one.

## The idea

At equilibrium, carriers are constantly being created by thermal energy and constantly annihilating. Both happen, at exactly equal rates — that is what equilibrium means, and it is what keeps $np = n_i^2$ pinned.

Disturb it — shine light, inject current — and the two rates no longer match. Create an excess and recombination runs faster than generation, eating the excess away. The system relaxes back, and to a very good approximation it does so **exponentially**, with a time constant $\tau$ called the **minority-carrier lifetime**.

Why the minority carrier? Because recombination needs one of each. In an $n$-type region there are $10^{17}$ electrons and perhaps $10^{10}$ excess holes; every hole has an overwhelming supply of electrons to find, so the *hole* population is the bottleneck and its decay sets the timescale. The majority carrier barely notices. This asymmetry — and the resulting **linearity** of the whole problem — is the low-level injection assumption, and almost every closed-form result in this course rests on it.

Now, *how* does an electron meet a hole? Three routes, and their relative importance is the practical content of the lesson.

**Band-to-band (radiative).** The electron drops straight across the gap and emits a photon. Requires the electron and hole to have the same momentum — easy in a **direct-gap** material like GaAs, essentially forbidden in **indirect-gap** silicon, where a phonon must participate too. This is why LEDs are not made of silicon.

**Through a trap ([Shockley–Read–Hall](../reference.md#shockleyreadhall-recombination)).** A defect or impurity introduces an energy level inside the forbidden gap. An electron falls into it, then a hole arrives and annihilates it. Two easy small steps instead of one hard big one — and a level near midgap is dramatically the most effective. **This dominates in silicon**, and its rate is set by the trap density, which is set by material purity.

**Auger.** The recombination energy is handed to a third carrier instead of a photon. Needs three particles to meet, so its rate goes as $n^2p$ or $np^2$ — negligible at ordinary doping, dominant above about $10^{18}$. It is the fundamental efficiency limit of heavily doped emitters and of high-injection LEDs (where it is the leading suspect for "LED droop").

## The formal version

**Excess carriers.** Write $n = n_0+\delta n$, $p = p_0+\delta p$, with $n_0p_0 = n_i^2$. Charge neutrality in a quasi-neutral region forces $\delta n = \delta p$ — carriers are generated in pairs and must stay balanced or an enormous field would build up.

**Low-level injection.** In an $n$-type region:

$$\delta p \ll n_0 \quad\Longrightarrow\quad n\approx n_0,\quad p = p_0+\delta p .$$

*In words: the injected population is huge compared with the equilibrium minority carriers, but negligible compared with the majority carriers.* Note both halves — $\delta p$ can be $10^6$ times $p_0$ and still be $10^{-4}$ of $n_0$. That is the usual situation.

**Net recombination rate and lifetime.** Define $U$ = recombination minus generation. Under low-level injection, for any of the mechanisms,

$$\boxed{\;U = \frac{\delta p}{\tau_p}\quad(n\text{-type}), \qquad U = \frac{\delta n}{\tau_n}\quad(p\text{-type}).\;}$$

*In words: the excess decays at a rate proportional to itself, so it decays exponentially with time constant $\tau$.* Removing the source gives $\delta p(t) = \delta p(0)e^{-t/\tau_p}$.

**Radiative (band-to-band).**

$$U_{\rm rad} = B\,(np-n_i^2) \quad\Longrightarrow\quad \tau_{\rm rad} = \frac{1}{B\,n_0}\ \ (n\text{-type, low injection}).$$

$B$ is the radiative coefficient: $\sim10^{-10}\ \mathrm{cm^3/s}$ for GaAs, but only $\sim10^{-14}$ for silicon — four orders of magnitude, entirely because silicon is indirect.

**Shockley–Read–Hall (trap-assisted).** For traps of density $N_t$ at energy $E_t$:

$$\boxed{\;U_{\rm SRH} = \frac{np-n_i^2}{\tau_{p0}(n+n_1)+\tau_{n0}(p+p_1)},\;}$$

where $n_1 = n_ie^{(E_t-E_i)/k_BT}$, $p_1 = n_ie^{(E_i-E_t)/k_BT}$, and $\tau_{n0} = 1/(\sigma_nv_{th}N_t)$, $\tau_{p0} = 1/(\sigma_pv_{th}N_t)$ with $\sigma$ the capture cross-section and $v_{th}\approx10^7$ cm/s the thermal velocity.

Two limits matter enormously.

*Low-level injection, $n$-type* ($n\approx n_0 \gg$ everything else): the denominator is dominated by $\tau_{p0}n_0$, and $np-n_i^2 \approx n_0\delta p$, so

$$U_{\rm SRH}\approx\frac{\delta p}{\tau_{p0}} \quad\Longrightarrow\quad \tau_p = \tau_{p0} = \frac{1}{\sigma_pv_{th}N_t}.$$

*In words: lifetime is inversely proportional to trap density.* Halve the impurities, double the lifetime.

*Depletion region* ($n,p \ll n_i$, carriers swept out): with $E_t = E_i$ the expression becomes

$$U_{\rm SRH}\approx\frac{-n_i^2}{\tau_0 n_i} = -\frac{n_i}{\tau_0},$$

**negative — net generation.** This is the origin of the reverse-bias generation current in [2.2](02-02-ideal-diode-equation.md), and note that it scales as $n_i$, not $n_i^2$: reverse leakage from generation has *half* the temperature activation energy of diffusion leakage, which is exactly how the two are told apart experimentally.

**Why midgap traps dominate.** The denominator contains $n_1+p_1$, which for a trap at $E_t$ is minimized when $E_t = E_i$. Move the trap 0.2 eV off midgap and $n_1$ (or $p_1$) grows by $e^{0.2/0.0259} = e^{7.7} = 2200$, choking the rate by the same factor. *In words: a trap is only an efficient recombination centre if it sits near the middle of the gap* — because it must be able to catch **both** carrier types. Gold ($E_t$ near midgap in Si) is a lethal lifetime killer at $10^{12}\ \mathrm{cm^{-3}}$; shallow dopants at $10^{18}$ are harmless.

This cuts both ways. Fabs go to extreme lengths to keep iron, copper, gold and nickel out of the line. But sometimes short lifetime is *wanted* — fast switching diodes are deliberately gold-doped or electron-irradiated to cut $\tau$ from microseconds to nanoseconds, trading forward voltage drop for reverse-recovery speed ([2.3](02-03-junction-diffusion-capacitance.md)).

**Auger.**

$$U_{\rm Aug} = (C_nn+C_pp)(np-n_i^2) \quad\Longrightarrow\quad \tau_{\rm Aug} = \frac{1}{C_nn_0^2}\ (n\text{-type}),$$

with $C_n\approx2.8\times10^{-31}$, $C_p\approx1\times10^{-31}\ \mathrm{cm^6/s}$ in silicon. The $n_0^2$ makes it explode at high doping.

**Combining.** Independent parallel paths add their *rates*:

$$\boxed{\;\frac{1}{\tau} = \frac{1}{\tau_{\rm SRH}}+\frac{1}{\tau_{\rm rad}}+\frac{1}{\tau_{\rm Aug}}.\;}$$

*In words: the shortest lifetime wins* — the same "resistors in parallel" logic as any competing-rate problem.

**Surface recombination.** A surface is a plane of broken bonds — an enormous density of midgap traps. It is described by a **surface recombination velocity** $S$ (cm/s) with boundary condition

$$D_p\frac{d\,\delta p}{dx}\bigg|_{\rm surface} = S\,\delta p_{\rm surface}.$$

Bare silicon has $S\sim10^5$ cm/s; a good thermal oxide passivates it to $\sim10$ cm/s. **Four orders of magnitude from growing an oxide** — one of the great strokes of luck in technology, and a major reason silicon beat germanium (whose oxide is water-soluble). Surface recombination is why solar cells are passivated, why a BJT's emitter perimeter matters, and why nanoscale devices with huge surface-to-volume ratios are hard.

## Picture

![A two-panel figure. Left: a band diagram showing three recombination mechanisms side by side — band-to-band with a photon emitted, SRH with a trap level drawn at midgap and two arrows showing electron capture then hole capture, and Auger with the energy handed to a third electron that is kicked high into the conduction band. Right: a log-log plot of lifetime against doping concentration, with a flat SRH line, a falling Auger line going as one over N squared, and their parallel combination showing the knee near 10 to the 18 where Auger takes over.](assets/01-03-fig1.svg)

Left: the three routes an electron–hole pair can take to annihilate. The middle one is the important one in silicon, and the picture shows why it is easy — two small hops via a midgap level instead of one 1.12 eV jump that also requires a phonon to conserve momentum. Right: which mechanism wins, as a function of doping. SRH is flat (it depends on trap density, not doping); Auger falls as $1/N^2$; the observed lifetime is the parallel combination, and the knee near $10^{18}\ \mathrm{cm^{-3}}$ is why heavily doped emitters have terrible lifetimes no matter how clean the silicon is.

## Worked examples

**Example 1 (lifetime, diffusion length, and what purity buys).** An $n$-type silicon region is doped $N_d = 10^{16}\ \mathrm{cm^{-3}}$ and contains gold traps at $N_t = 10^{13}\ \mathrm{cm^{-3}}$, with $\sigma_p = 10^{-15}\ \mathrm{cm^2}$ and $v_{th} = 10^7$ cm/s.

*SRH lifetime:*

$$\tau_p = \frac{1}{\sigma_pv_{th}N_t} = \frac{1}{(10^{-15})(10^{7})(10^{13})} = \frac{1}{10^{5}} = 1\times10^{-5}\ \mathrm{s} = 10\ \mu\mathrm{s}.$$

*Auger, for comparison:* $\tau_{\rm Aug} = 1/(C_nn_0^2) = 1/[(2.8\times10^{-31})(10^{16})^2] = 1/(2.8\times10^{-2}) = 36$ ms. Utterly negligible.

*Radiative:* $\tau_{\rm rad} = 1/(Bn_0) = 1/[(10^{-14})(10^{16})] = 10^{-2}$ s = 10 ms. Also negligible.

$$\frac{1}{\tau} = \frac{1}{10\,\mu\mathrm{s}}+\frac{1}{10\,\mathrm{ms}}+\frac{1}{36\,\mathrm{s}} \approx \frac{1}{10\,\mu\mathrm{s}} \quad\Longrightarrow\quad \tau \approx 10\ \mu\mathrm{s}.$$

**SRH wins by three orders of magnitude.** In silicon at ordinary doping it essentially always does.

*Diffusion length* (the quantity that actually appears in device formulas — derived in [1.4](01-04-continuity-equations.md)):

$$L_p = \sqrt{D_p\tau_p} = \sqrt{(10.4)(10^{-5})} = \sqrt{1.04\times10^{-4}} = 1.02\times10^{-2}\ \mathrm{cm} = 102\ \mu\mathrm{m}.$$

*Now clean up the silicon.* Drop the traps to $N_t = 10^{11}$ (a hundredfold, achievable with modern gettering):

$$\tau_p = 1\ \mathrm{ms}, \qquad L_p = \sqrt{(10.4)(10^{-3})} = 0.102\ \mathrm{cm} = 1020\ \mu\mathrm{m} = 1\ \mathrm{mm}.$$

A hundredfold cleaner silicon gives a hundredfold longer lifetime but only a **tenfold** longer diffusion length, because $L\propto\sqrt\tau$. That square root is worth internalizing: purity has diminishing returns on the length scale, which is why solar cells — whose whole game is collecting carriers generated deep in the wafer — hit a practical ceiling.

**Example 2 (why silicon cannot make a laser).** Compare the radiative efficiency of silicon and GaAs, both doped $10^{17}\ \mathrm{cm^{-3}}$ with the same trap density $N_t = 10^{13}\ \mathrm{cm^{-3}}$ ($\sigma v_{th} = 10^{-8}\ \mathrm{cm^3/s}$).

*SRH lifetime, both materials:* $\tau_{\rm SRH} = 1/(10^{-8}\times10^{13}) = 10^{-5}$ s = 10 µs.

*Radiative lifetime:*

$$\text{Si: } \tau_{\rm rad} = \frac{1}{Bn_0} = \frac{1}{(10^{-14})(10^{17})} = 10^{-3}\ \mathrm{s} = 1\ \mathrm{ms}.$$

$$\text{GaAs: } \tau_{\rm rad} = \frac{1}{(10^{-10})(10^{17})} = 10^{-7}\ \mathrm{s} = 0.1\ \mu\mathrm{s}.$$

*Internal quantum efficiency* — the fraction of recombination events that emit a photon:

$$\eta_{\rm int} = \frac{1/\tau_{\rm rad}}{1/\tau_{\rm rad}+1/\tau_{\rm SRH}} = \frac{\tau_{\rm SRH}}{\tau_{\rm SRH}+\tau_{\rm rad}}.$$

$$\text{Si: } \eta = \frac{10^{-5}}{10^{-5}+10^{-3}} = \frac{1}{101} = 0.99\% .$$

$$\text{GaAs: } \eta = \frac{10^{-5}}{10^{-5}+10^{-7}} = \frac{100}{101} = 99.0\% .$$

**One percent versus ninety-nine percent**, from the same trap density and the same doping. The entire difference is $B$ — four orders of magnitude — and $B$ is small in silicon because the conduction-band minimum sits at a different crystal momentum from the valence-band maximum, so a radiative transition must also involve a phonon to conserve momentum. A three-body process is vastly less likely than a two-body one.

*The consequences run through the whole industry.* Every LED, laser diode and high-speed photodetector is made from a direct-gap III–V or II–VI material — GaAs, InP, GaN — never silicon. Silicon photonics, which is a large field, works precisely by *avoiding* the problem: it uses silicon for waveguides and modulators (which need no light generation) and bonds a III–V laser on top. Meanwhile silicon's indirectness is a gift for *electronics*: the same weak radiative coupling gives long carrier lifetimes and hence long diffusion lengths, which is exactly what a BJT and a solar cell want. **The property that makes silicon useless for light makes it excellent for transistors.**

## Watch out

- **You might think recombination is an electron falling into a hole.** In silicon that path (radiative) is a thousand times *slower* than the trap-assisted one. Recombination in silicon is a defect phenomenon, which is why lifetime is a measure of material purity rather than of anything you can design.
- **You might think a deep trap is bad and a shallow one is worse.** The opposite: **midgap** traps are the killers, because a centre must catch both an electron and a hole to complete a cycle. A trap 0.2 eV off midgap is ~2000× less effective, which is why dopants at $10^{18}$ are harmless while gold at $10^{12}$ is not.
- **You might assume low-level injection always applies.** It fails in a forward-biased LED, in a solar cell under concentration, in a power diode conducting hard, and in the base of a saturated BJT — all cases where $\delta n$ approaches or exceeds the doping. There the equations become nonlinear and the effective lifetime changes (SRH lifetime rises toward $\tau_{n0}+\tau_{p0}$ at high injection).
- **You might treat lifetime as a material constant of silicon.** It ranges over **six orders of magnitude** — nanoseconds in a deliberately gold-doped fast diode, milliseconds in float-zone solar silicon. It is a process parameter, not a material one.
- **You might ignore surfaces.** A bare silicon surface has $S\sim10^5$ cm/s, which for a 100 µm device can dominate everything happening in the bulk. Passivation is not cosmetic.

## One-liner

> Excess carriers decay exponentially with a lifetime set almost entirely by midgap traps — which makes lifetime a measure of purity, makes silicon a poor light emitter, and makes $L=\sqrt{D\tau}$ the length scale of every bipolar device.

## Problems

**P1 (🟢)** A $p$-type silicon region has $\tau_n = 2\ \mu$s and $N_a = 10^{17}\ \mathrm{cm^{-3}}$. (a) Find $D_n$ and the electron diffusion length. (b) An excess $\delta n(0) = 10^{13}\ \mathrm{cm^{-3}}$ is created and the source removed. How long until it falls to $10^{11}$? (c) Confirm low-level injection applies. (d) Find the recombination rate $U$ at $t=0$.

**P2 (🟡)** Silicon is contaminated with a trap at $N_t = 5\times10^{12}\ \mathrm{cm^{-3}}$, $\sigma = 2\times10^{-15}\ \mathrm{cm^2}$, $v_{th} = 10^7$ cm/s, in an $n$-type region with $N_d = 5\times10^{17}$. (a) Find $\tau_{\rm SRH}$. (b) Find $\tau_{\rm Aug}$ with $C_n = 2.8\times10^{-31}\ \mathrm{cm^6/s}$. (c) Find the combined lifetime and say which dominates. (d) At what doping do the two become equal?

**P3 (🔴)** A trap sits at $E_t$, a distance $\Delta = E_t-E_i$ above midgap. Consider an $n$-type sample at low-level injection. (a) Starting from the SRH expression, show the lifetime is $\tau = \tau_{p0}\left[1+\frac{n_1}{n_0}\right]+\tau_{n0}\frac{p_1}{n_0}$ and identify when it reduces to $\tau_{p0}$. (b) Take $\tau_{n0}=\tau_{p0}=\tau_0$, $n_0 = 10^{16}$, and evaluate the bracket for $\Delta = 0$, $0.2$ and $0.4$ eV. (c) Explain the asymmetry you find between the $n_1$ and $p_1$ terms. (d) Gold in silicon has a level 0.55 eV below $E_c$; boron sits 0.045 eV above $E_v$. Both are "impurities". Explain quantitatively why one destroys devices at $10^{12}\ \mathrm{cm^{-3}}$ and the other is deliberately added at $10^{18}$.

<details>
<summary>Solutions</summary>

**P1** (a) At $N_a = 10^{17}$, $\mu_n = 800$, so $D_n = V_T\mu_n = 0.0259\times800 = 20.7\ \mathrm{cm^2/s}$.

$$L_n = \sqrt{D_n\tau_n} = \sqrt{(20.7)(2\times10^{-6})} = \sqrt{4.14\times10^{-5}} = 6.43\times10^{-3}\ \mathrm{cm} = 64.3\ \mu\mathrm{m}.$$

(b) $\delta n(t) = \delta n(0)e^{-t/\tau_n}$, so

$$t = \tau_n\ln\frac{\delta n(0)}{\delta n(t)} = 2\ \mu\mathrm{s}\times\ln\frac{10^{13}}{10^{11}} = 2\times\ln(100) = 2\times4.605 = 9.2\ \mu\mathrm{s}.$$

(Two decades of decay costs 4.6 time constants — a useful reflex.)

(c) $\delta n = 10^{13}$ against $p_0 = N_a = 10^{17}$: the ratio is $10^{-4}$ ✓, comfortably low-level. (And against the equilibrium minority $n_0 = n_i^2/N_a = 10^3$, the excess is $10^{10}$ times larger — both halves of the condition hold, as usual.)

(d) $$U = \frac{\delta n}{\tau_n} = \frac{10^{13}}{2\times10^{-6}} = 5\times10^{18}\ \mathrm{cm^{-3}s^{-1}}.$$

**P2** (a) $$\tau_{\rm SRH} = \frac{1}{\sigma v_{th}N_t} = \frac{1}{(2\times10^{-15})(10^7)(5\times10^{12})} = \frac{1}{10^{5}} = 1\times10^{-5}\ \mathrm{s} = 10\ \mu\mathrm{s}.$$

(b) $$\tau_{\rm Aug} = \frac{1}{C_nn_0^2} = \frac{1}{(2.8\times10^{-31})(5\times10^{17})^2} = \frac{1}{(2.8\times10^{-31})(2.5\times10^{35})} = \frac{1}{7.0\times10^{4}} = 1.43\times10^{-5}\ \mathrm{s} = 14.3\ \mu\mathrm{s}.$$

(c) $$\frac{1}{\tau} = \frac{1}{10}+\frac{1}{14.3} = 0.100+0.070 = 0.170\ \mu\mathrm{s^{-1}} \quad\Longrightarrow\quad \tau = 5.9\ \mu\mathrm{s}.$$

Neither dominates — they are within a factor of 1.5, and the combined lifetime is well below either. This doping is right at the crossover, which is exactly the interesting regime: at $5\times10^{17}$ you can no longer fix your lifetime by cleaning the silicon, because Auger is a fundamental process that no amount of purity removes.

(d) Equal when $C_nN^2 = \sigma v_{th}N_t = 10^5\ \mathrm{s^{-1}}$:

$$N = \sqrt{\frac{10^{5}}{2.8\times10^{-31}}} = \sqrt{3.57\times10^{35}} = 5.98\times10^{17}\ \mathrm{cm^{-3}}.$$

So $\approx6\times10^{17}$ — consistent with (c) putting $5\times10^{17}$ just below the crossover ✓. Above this doping Auger sets the ceiling; below it, purity does.

**P3** (a) Start from

$$U = \frac{np-n_i^2}{\tau_{p0}(n+n_1)+\tau_{n0}(p+p_1)}.$$

Under low-level injection in $n$-type material: $n\approx n_0$, $p = p_0+\delta p$ with $p_0\ll\delta p\ll n_0$, and

$$np-n_i^2 = n_0(p_0+\delta p)-n_0p_0 = n_0\,\delta p.$$

In the denominator, $p+p_1\approx p_1$ (since $p\ll n_0$ and we compare against $p_1$, both small relative to $n_0$ unless the trap is very shallow), giving

$$U = \frac{n_0\,\delta p}{\tau_{p0}(n_0+n_1)+\tau_{n0}p_1} = \frac{\delta p}{\tau_{p0}\left(1+\dfrac{n_1}{n_0}\right)+\tau_{n0}\dfrac{p_1}{n_0}} \equiv \frac{\delta p}{\tau}.$$

$$\boxed{\ \tau = \tau_{p0}\left[1+\frac{n_1}{n_0}\right]+\tau_{n0}\frac{p_1}{n_0}\ }$$

It reduces to $\tau = \tau_{p0}$ when both $n_1\ll n_0$ and $p_1\ll n_0$ — i.e. when the trap is near midgap so that $n_1,p_1\sim n_i$, which is fifteen orders of magnitude below $n_0$. **A midgap trap gives the shortest possible lifetime, $\tau_{p0}$, and nothing you can do makes it shorter.**

(b) With $n_1 = n_ie^{\Delta/k_BT}$ and $p_1 = n_ie^{-\Delta/k_BT}$, $n_i = 10^{10}$, $n_0 = 10^{16}$, $\tau_{n0}=\tau_{p0}=\tau_0$:

$$\frac{\tau}{\tau_0} = 1+\frac{n_1}{n_0}+\frac{p_1}{n_0} = 1+\frac{n_i}{n_0}\left(e^{\Delta/k_BT}+e^{-\Delta/k_BT}\right) = 1+2\frac{n_i}{n_0}\cosh\frac{\Delta}{k_BT}.$$

With $n_i/n_0 = 10^{-6}$:

| $\Delta$ | $e^{\Delta/k_BT}$ | $\tau/\tau_0$ |
|---|---|---|
| 0 | 1 | $1+2\times10^{-6} = 1.000002$ |
| 0.2 eV | $e^{7.72} = 2257$ | $1+10^{-6}(2257) = 1.0023$ |
| 0.4 eV | $e^{15.44} = 5.10\times10^{6}$ | $1+10^{-6}(5.10\times10^6) = 6.10$ |

So a trap 0.2 eV off midgap is still an excellent recombination centre (0.23% slower), while one 0.4 eV off is 6× less effective. The falloff is exponential but it takes a *lot* of offset to matter at this doping — a genuinely useful calibration, since it means "near midgap" is a fairly generous window, roughly $\pm0.3$ eV.

(c) The asymmetry is that $n_1$ is divided by $n_0$ and multiplied by $\tau_{p0}$, while $p_1$ is divided by $n_0$ and multiplied by $\tau_{n0}$ — and physically, $n_1$ is the electron concentration that *would* make the trap half-full. A trap high in the gap (large $+\Delta$) has a large $n_1$, meaning it readily re-emits captured electrons back to the conduction band instead of holding them until a hole arrives. It becomes an electron **trap** (catch and release) rather than a recombination **centre** (catch and annihilate). A trap low in the gap does the same for holes. Only a midgap trap holds both long enough to complete the cycle.

(d) **Gold:** its level is 0.55 eV below $E_c$; with $E_g = 1.12$, midgap is 0.56 eV below $E_c$ — so gold sits essentially **exactly at midgap**, $\Delta\approx0.01$ eV. From the table, $\tau/\tau_0 = 1.000002$: maximally effective. At $N_t = 10^{12}$ with $\sigma v_{th} = 10^{-8}\ \mathrm{cm^3/s}$,

$$\tau = \frac{1}{(10^{-8})(10^{12})} = 10^{-4}\ \mathrm{s} = 100\ \mu\mathrm{s}$$

— and at the $10^{13}$–$10^{14}$ levels that sloppy handling produces, microseconds or less, which destroys BJT gain and solar-cell collection.

**Boron:** its level is 0.045 eV above $E_v$, so $\Delta = E_i - E_t \approx 0.56-0.045 = 0.515$ eV *below* midgap. Then $p_1 = n_ie^{0.515/0.0259} = 10^{10}e^{19.9} = 10^{10}(4.32\times10^{8}) = 4.32\times10^{18}$, and the bracket picks up $p_1/n_0 = 4.32\times10^{18}/10^{16} = 432$. So even at equal density boron would be **432× less effective** than gold as a recombination centre.

But the real answer is stronger still, and it is about occupancy rather than rate constants: a shallow acceptor at room temperature is *already ionized* — it has permanently given up its state to the valence band and become a fixed $\mathrm{B^-}$ ion. It is not sitting there empty, waiting to catch an electron; it has no available level in the accessible part of the gap at all. That is what "shallow dopant" means, and it is why you can put $10^{18}$ boron atoms into silicon and measure millisecond lifetimes, while $10^{12}$ gold atoms — a millionth as many — ruin the wafer.

**The design lesson:** impurities are not graded by concentration but by *where their level sits*. A fab's contamination limits for iron, copper, gold and nickel (all near midgap) are parts per trillion; for boron and phosphorus they are the recipe.

</details>

## Flashback

**From Lesson 1.1 (Carriers, doping and the Fermi level):** Silicon is doped $N_d = 5\times10^{16}\ \mathrm{cm^{-3}}$ at 300 K. (a) Find $n$ and $p_0$. (b) An excess $\delta p = 10^{12}\ \mathrm{cm^{-3}}$ is injected. Is this low-level injection? (c) Compute $np$ and compare with $n_i^2$; what does the comparison say about the quasi-Fermi levels?

<details>
<summary>Solution</summary>

(a) $n\approx N_d = 5\times10^{16}\ \mathrm{cm^{-3}}$; $p_0 = n_i^2/n = 10^{20}/(5\times10^{16}) = 2\times10^{3}\ \mathrm{cm^{-3}}$.

(b) Yes, on both counts: $\delta p = 10^{12}$ is $2\times10^{-5}$ of the majority density $5\times10^{16}$ ✓ (so the majority carrier is undisturbed), while being $5\times10^{8}$ times the equilibrium minority density $2\times10^3$ (so the minority carrier is enormously perturbed). That combination is exactly what "low-level injection" means, and it is why the problem stays linear even though the minority population changed by nine orders of magnitude.

(c) $$np = (5\times10^{16})(2\times10^3+10^{12}) \approx (5\times10^{16})(10^{12}) = 5\times10^{28} \ \gg\ n_i^2 = 10^{20}.$$

The product exceeds $n_i^2$ by a factor of $5\times10^8$, so from [1.2](01-02-drift-diffusion-einstein.md) the quasi-Fermi levels are split by

$$F_n-F_p = k_BT\ln\frac{np}{n_i^2} = 0.0259\ln(5\times10^{8}) = 0.0259(20.03) = 0.519\ \mathrm{eV}.$$

Mass action is violated — which is the point. An equilibrium sample would have $np = n_i^2$ exactly and zero splitting; this one is being driven, and 0.52 V is the forward bias that would produce this injection level across a junction.

</details>

## Connections

- **Backward:** the excess-carrier bookkeeping uses [1.1](01-01-carriers-doping-fermi-level.md)'s equilibrium concentrations, and the "mass action is violated" framing is [1.2](01-02-drift-diffusion-einstein.md)'s quasi-Fermi split.
- **Forward:** [1.4](01-04-continuity-equations.md) combines this lesson's $U$ with the last one's currents into the minority-carrier diffusion equation; $\tau$ then propagates into $I_0$ ([2.2](02-02-ideal-diode-equation.md)), reverse recovery ([2.3](02-03-junction-diffusion-capacitance.md)), BJT gain ([3.2](03-02-bjt-currents-and-gain.md)) and LED efficiency ([4.2](04-02-led-and-laser-diode.md)).
- **Sideways:** midgap traps as recombination catalysts are the same "lower the barrier with an intermediate state" logic as a catalyst in [`reaction-engineering`](../../reaction-engineering/syllabus.md); the direct/indirect gap distinction and its momentum-conservation origin come from the band structure of [`condensed-matter` 3.6](../../condensed-matter/lessons/03-06-bands-zones-dos.md).
