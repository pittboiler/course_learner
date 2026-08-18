# Transport Phenomena · Lesson 4.5: Mass-transfer coefficients and correlations

> ⏱ ~15 min · Module 4: Diffusion and mass transfer · Builds on: [3.4 Forced convection and transport coefficients](03-04-forced-convection-transport-coefficients.md), [4.2 Diffusion through a stagnant film (Stefan)](04-02-diffusion-stagnant-film-stefan.md) · Unlocks: [5.1 Transport analogies](05-01-transport-analogies.md), [5.2 Two-film theory](05-02-two-film-theory-interphase.md)

## Why this matters

In [3.4](03-04-forced-convection-transport-coefficients.md) you learned to *estimate* a mass-transfer coefficient $k_c$ the lazy way: take a heat correlation, swap $Nu \to Sh$ and $Pr \to Sc$, done. That works, but it treats $k_c$ as a black box. This lesson opens the box. What *is* $k_c$ physically? It turns out there are three competing stories about what happens at a fluid interface — a stagnant film, brief contacts, constant renewal — and they make **different, testable predictions** about how $k_c$ depends on the diffusivity $D_{AB}$. Nature votes with data, and the answer ($k_c \propto D^{0.5}$–$D^{0.7}$, not $D^{1}$) tells you the interface of a stirred or turbulent liquid is *not* a stagnant film. Then we come back to the practical toolkit — the $Sh = f(Re, Sc)$ correlations — and add the one correction you drop at high flux.

## The idea

A mass-transfer coefficient is defined by one equation (from [3.4](03-04-forced-convection-transport-coefficients.md)):

$$N_A = k_c\,(c_{A,s} - c_{A,\infty}),$$

the molar flux equals $k_c$ times the surface-to-bulk concentration gap. But *why* should $k_c$ have any particular value? Picture the fluid touching a surface — a gas bubble in water, wind over a lake, liquid running down a wetted wall. Species $A$ has to cross the thin, poorly-mixed skin between the interface and the well-stirred bulk. **How you imagine that skin sets how $k_c$ scales with $D_{AB}$:**

- **Film theory (Whitman).** Pretend the skin is a *stagnant film* of fixed thickness $\delta$. Steady diffusion across it gives $k_c = D_{AB}/\delta$ — linear in $D$. Simple, but it assumes the film thickness doesn't care about the fluid's properties, which is a fiction.
- **Penetration theory (Higbie).** A blob of bulk fluid rises to the surface, sits there for a short **contact time** $t_c$, absorbs $A$ by *unsteady* diffusion (the semi-infinite transient from [4.4](04-04-transient-multidimensional-diffusion.md)), then dives back into the bulk before diffusion ever reaches steady state. Averaging that transient flux gives $k_c \propto \sqrt{D}$.
- **Surface renewal (Danckwerts).** Same blobs, but instead of *all* sitting for exactly $t_c$, they get randomly swapped for fresh bulk fluid at a rate $s$ (fraction replaced per second). Averaging over the resulting spread of contact ages *also* gives $k_c \propto \sqrt{D}$.

The punchline: the exponent on $D$ is a **fingerprint**. Measure $k_c$ for gases of different diffusivity over the same interface. If $k_c \propto D$, the film picture is right; if $k_c \propto \sqrt{D}$, the surface is being continually renewed. Experiments on turbulent liquids land near $D^{0.5}$–$D^{0.7}$ — renewal wins. The stagnant film is a useful cartoon for hand calculations, not a true description of a churning interface.

## The formal version

**Film theory.** Model the near-interface region as a stagnant film of thickness $\delta$ (m) across which $A$ diffuses at steady state (dilute, so [4.2](04-02-diffusion-stagnant-film-stefan.md)'s equimolar/dilute limit). Fick's law integrated across $\delta$ gives $N_A = (D_{AB}/\delta)(c_{A,s}-c_{A,\infty})$, so

$$\boxed{k_c = \frac{D_{AB}}{\delta}} \qquad \Rightarrow \qquad k_c \propto D_{AB}^{1}.$$

*In words: pack all the resistance into one imaginary stagnant layer; the coefficient is diffusivity over its thickness.* Here $D_{AB}$ is the binary diffusivity ($\mathrm{m^2\,s^{-1}}$) and $\delta$ is the film thickness ($\mathrm{m}$).

**Penetration theory (Higbie).** A fluid element contacts the surface for a time $t_c$ (s) and undergoes transient diffusion into a semi-infinite medium. The instantaneous surface flux for a step change is $N_A(t) = (c_{A,s}-c_{A,\infty})\sqrt{D_{AB}/(\pi t)}$ (the $\operatorname{erfc}$ solution from [4.4](04-04-transient-multidimensional-diffusion.md), differentiated at the surface). Time-averaging over the contact time,

$$\bar N_A = \frac{1}{t_c}\int_0^{t_c} (c_{A,s}-c_{A,\infty})\sqrt{\frac{D_{AB}}{\pi t}}\,dt = (c_{A,s}-c_{A,\infty})\,2\sqrt{\frac{D_{AB}}{\pi t_c}},$$

so

$$\boxed{k_c = 2\sqrt{\frac{D_{AB}}{\pi\,t_c}}} \qquad \Rightarrow \qquad k_c \propto D_{AB}^{1/2}.$$

*In words: each blob does a brief, unsteady dive; the shorter the contact, the fresher the gradient, the bigger $k_c$.* Here $t_c$ is the surface contact (exposure) time.

**Surface renewal (Danckwerts).** Replace "every element sits for exactly $t_c$" with "elements are replaced at random with a renewal rate $s$ ($\mathrm{s^{-1}}$)," giving an exponential age distribution $\psi(t) = s\,e^{-st}$. Averaging the same transient flux over that distribution, using $\int_0^\infty t^{-1/2} e^{-st}\,dt = \sqrt{\pi/s}$,

$$\boxed{k_c = \sqrt{D_{AB}\,s}} \qquad \Rightarrow \qquad k_c \propto D_{AB}^{1/2}.$$

*In words: a steady churn of fresh fluid to the surface; faster renewal, bigger $k_c$ — same $\sqrt{D}$ signature as penetration.* All three collapse to the same functional shape $N_A = k_c\,\Delta c$; they differ **only** in the exponent on $D$ and in what physical parameter ($\delta$, $t_c$, or $s$) hides the hydrodynamics.

**Correlations — the practical route.** For engineering you rarely know $\delta$, $t_c$, or $s$; you know $Re$ and $Sc$. Then use the heat-transfer twin (from [3.4](03-04-forced-convection-transport-coefficients.md)): every $Nu = f(Re, Pr)$ has a mass sibling $Sh = f(Re, Sc)$ with the same skeleton. The workhorse for turbulent duct flow is the Dittus–Boelter twin,

$$Sh = 0.023\,Re^{0.8}\,Sc^{1/3}, \qquad Sh = \frac{k_c L}{D_{AB}},$$

with $Re = \rho V L/\mu$, $Sc = \nu/D_{AB}$, and $L$ the characteristic length (tube diameter $D$). *In words: the flow field is shared with heat transfer, so borrow its correlation and read off $k_c = Sh\,D_{AB}/L$.* Since $Le = Sc/Pr$, the heat/mass coefficient ratio for the $\tfrac13$-power correlations is $Nu/Sh = (Pr/Sc)^{1/3} = Le^{-1/3}$ — near 1 for gases.

**Dilute vs. concentrated.** All the boxed $k_c$'s above assume *dilute* transfer (no net bulk flow dragging $A$ along). When $A$ is concentrated and diffuses through a stagnant $B$ — the Stefan problem of [4.2](04-02-diffusion-stagnant-film-stefan.md) — the blocked counter-flow of $B$ enhances $A$'s transport by the drift factor $1/x_{B,\mathrm{lm}}$:

$$k_c = \frac{k_c^{\circ}}{x_{B,\mathrm{lm}}}, \qquad x_{B,\mathrm{lm}} = \frac{x_{B2}-x_{B1}}{\ln(x_{B2}/x_{B1})},$$

where $k_c^{\circ}$ is the dilute coefficient and $x_{B,\mathrm{lm}}$ is the log-mean mole fraction of the stagnant species. *In words: when $A$ is a large fraction of the mixture, its own bulk motion helps carry it, so the true coefficient is the dilute one divided by $x_{B,\mathrm{lm}} < 1$.* For dilute systems $x_{B,\mathrm{lm}} \to 1$ and the correction vanishes.

## Picture

![Three interface models side by side. Film: a linear concentration profile across a stagnant layer of thickness δ, labeled k_c ∝ D. Penetration: a single surface fluid element with a transient erfc profile diffusing in over contact time t_c, labeled k_c ∝ D^½. Surface renewal: elements at the interface being swapped for fresh bulk fluid at rate s, labeled k_c ∝ D^½.](assets/04-05-fig1.svg)

Three cartoons of the same skin. The film draws a straight line across a fixed layer ($k_c \propto D$); penetration and renewal draw a transient that never finishes ($k_c \propto \sqrt{D}$). The exponent on $D$ is the experiment that decides between them.

## Worked examples

**Example 1 (film vs. penetration — same interface, different $D$-law).** Carbon dioxide absorbs into a falling water film. Take $D_{AB} = 2.0\times10^{-9}\ \mathrm{m^2/s}$. Two engineers estimate $k_c$:

*Film theory* — engineer A guesses an effective stagnant-film thickness $\delta = 50\ \mu\mathrm{m} = 5.0\times10^{-5}\ \mathrm{m}$:
$$k_c^{\text{film}} = \frac{D_{AB}}{\delta} = \frac{2.0\times10^{-9}}{5.0\times10^{-5}} = 4.0\times10^{-5}\ \mathrm{m/s}.$$

*Penetration theory* — engineer B estimates the surface contact time as the fall time over one wavelength, $t_c = 0.5\ \mathrm{s}$:
$$k_c^{\text{pen}} = 2\sqrt{\frac{D_{AB}}{\pi\,t_c}} = 2\sqrt{\frac{2.0\times10^{-9}}{\pi(0.5)}} = 2\sqrt{1.27\times10^{-9}} = 2(3.57\times10^{-5}) = 7.1\times10^{-5}\ \mathrm{m/s}.$$

Same order of magnitude ($10^{-5}\ \mathrm{m/s}$) — either estimate is fine for a first pass. But now *change the gas* to one with **twice** the diffusivity, $D' = 4.0\times10^{-9}$:

- Film: $k_c \propto D$, so it **doubles** to $8.0\times10^{-5}$ (factor 2.00).
- Penetration: $k_c \propto \sqrt{D}$, so it grows by only $\sqrt{2}$ to $1.0\times10^{-4}$ (factor 1.41).

*This* is the discriminator. Run the experiment with several gases and see whether $k_c$ tracks $D$ or $\sqrt{D}$; stirred-liquid data follow $\sqrt{D}$, so the interface is renewed, not stagnant.

*Check.* $[D_{AB}/\delta] = \mathrm{(m^2/s)/m} = \mathrm{m/s}$ ✓; $[\sqrt{D/t_c}] = \sqrt{\mathrm{(m^2/s)/s}} = \mathrm{m/s}$ ✓. Both routines land at a few $\times 10^{-5}\ \mathrm{m/s}$, a typical liquid-phase $k_c$. ✓

**Example 2 (gas absorption in a wetted tube — correlation route).** Oxygen dissolves into water flowing turbulently through a tube of diameter $D = 0.020\ \mathrm{m}$ at $Re = 2.0\times10^{4}$. For $\mathrm{O_2}$ in water, $D_{AB} = 2.1\times10^{-9}\ \mathrm{m^2/s}$ and $\nu = 1.0\times10^{-6}\ \mathrm{m^2/s}$, so

$$Sc = \frac{\nu}{D_{AB}} = \frac{1.0\times10^{-6}}{2.1\times10^{-9}} = 4.8\times10^{2}.$$

Use the Dittus–Boelter twin (no mass-transfer dataset needed — the velocity field is shared with heat transfer):

$$Sh = 0.023\,Re^{0.8}\,Sc^{1/3} = 0.023\,(2.0\times10^{4})^{0.8}(480)^{1/3}.$$

Evaluate the pieces: $(2.0\times10^{4})^{0.8} = 2.76\times10^{3}$ and $(480)^{1/3} = 7.83$, so

$$Sh = 0.023 \times 2760 \times 7.83 = 497.$$

Invert $Sh = k_c D/D_{AB}$:

$$k_c = \frac{Sh\,D_{AB}}{D} = \frac{497 \times 2.1\times10^{-9}}{0.020} = 5.2\times10^{-5}\ \mathrm{m/s}.$$

*Check.* $[k_c] = \mathrm{(m^2/s)/m} = \mathrm{m/s}$ ✓. Note the large $Sc \approx 480$ (liquid solute) makes the concentration boundary layer very thin ($\delta_c/\delta \sim Sc^{-1/3}$ from [3.3](03-03-thermal-concentration-boundary-layers.md)), yet $k_c \sim 10^{-5}\ \mathrm{m/s}$ still lands in the same range as the film/penetration estimates of Example 1 — reassuring, since it's the same physical liquid interface described two different ways. ✓

## Watch out

- **You might think the three models predict different *coefficients*.** They don't, really — tuned to the same interface they all give the same order of magnitude for $k_c$. What differs is the **$D$-exponent** ($1$ vs. $\tfrac12$). You can't distinguish the models from one $k_c$ value; you distinguish them by varying $D_{AB}$ and watching the scaling.
- **You might treat the film thickness $\delta$ as a real, measurable length.** It isn't. $\delta = D_{AB}/k_c$ is a *back-calculated* effective thickness that swallows all the hydrodynamics — and because real $k_c \propto \sqrt{D}$, this "thickness" itself drifts with $D_{AB}$, which is exactly why the film picture is a fiction for turbulent interfaces.
- **You might carry the $x_{B,\mathrm{lm}}$ drift factor into dilute problems.** For dilute transfer $x_{B,\mathrm{lm}} \to 1$ and the correction is pointless (Example 2 is dilute — we skipped it). Only reach for $k_c = k_c^{\circ}/x_{B,\mathrm{lm}}$ when $A$ is a *large* mole fraction diffusing through a stagnant $B$, the Stefan case of [4.2](04-02-diffusion-stagnant-film-stefan.md).
- **You might grab a $Pr$-exponent when swapping.** The flat-plate correlation is $\tfrac13$ for both $Pr$ and $Sc$ (clean swap), but Dittus–Boelter is $Pr^{0.4}$ for heating and $Sc^{1/3}$ for mass. Swap the *variable and its role*, then read the exponent off the specific mass correlation.

## One-liner

> $k_c$ is $N_A/\Delta c$ no matter what — but whether it scales as $D$ (stagnant film) or $\sqrt{D}$ (penetration/renewal) reveals whether the interface is a frozen layer or a churning one, and turbulent data ($\sqrt{D}$) say it churns.

## Problems

**P1 (🟢)** A gas element contacts a liquid surface for a mean time $t_c = 0.2\ \mathrm{s}$. For a solute with $D_{AB} = 1.8\times10^{-9}\ \mathrm{m^2/s}$, use Higbie penetration theory to find $k_c$. Then find the surface-renewal rate $s$ that Danckwerts' model would need to give the *same* $k_c$.

**P2 (🟡)** Air flows through a wetted-wall tube ($D = 0.025\ \mathrm{m}$) at $Re = 1.5\times10^{4}$; water evaporates from the wall. For water vapor in air, $D_{AB} = 2.6\times10^{-5}\ \mathrm{m^2/s}$ and $Sc = 0.60$. Use $Sh = 0.023\,Re^{0.8}Sc^{1/3}$ to find $k_c$. Compare its magnitude to the liquid-phase $k_c$ of Example 2 and explain the difference in one sentence.

**P3 (🔴)** Over a given turbulent liquid interface, $k_c$ is measured for two gases and found to scale as $k_c \propto D_{AB}^{0.6}$. (a) Is this closer to film theory or to surface-renewal theory? (b) If gas 1 has $D_1 = 1.6\times10^{-9}$ and $k_{c,1} = 3.0\times10^{-5}\ \mathrm{m/s}$, predict $k_{c,2}$ for gas 2 with $D_2 = 2.5\times10^{-9}\ \mathrm{m^2/s}$.

<details>
<summary>Solutions</summary>

**P1** Penetration:
$$k_c = 2\sqrt{\frac{D_{AB}}{\pi t_c}} = 2\sqrt{\frac{1.8\times10^{-9}}{\pi(0.2)}} = 2\sqrt{2.86\times10^{-9}} = 2(5.35\times10^{-5}) = 1.07\times10^{-4}\ \mathrm{m/s}.$$
For Danckwerts to match, set $\sqrt{D_{AB}\,s} = k_c$, so
$$s = \frac{k_c^{2}}{D_{AB}} = \frac{(1.07\times10^{-4})^{2}}{1.8\times10^{-9}} = \frac{1.15\times10^{-8}}{1.8\times10^{-9}} = 6.4\ \mathrm{s^{-1}}.$$

*Check.* $[s] = \mathrm{(m/s)^2/(m^2/s)} = \mathrm{s^{-1}}$ ✓. The equivalent renewal rate $s \approx 6\ \mathrm{s^{-1}}$ corresponds to a mean surface residence $1/s \approx 0.16\ \mathrm{s}$, close to the penetration $t_c = 0.2\ \mathrm{s}$ — the two models describe the same fast turnover, as they must to give equal $k_c$. ✓

**P2** With $Re^{0.8} = (1.5\times10^{4})^{0.8}$: $\ln(1.5\times10^{4}) = 9.616$, times $0.8$ is $7.693$, so $Re^{0.8} = e^{7.693} = 2.19\times10^{3}$. And $Sc^{1/3} = (0.60)^{1/3} = 0.843$. Then
$$Sh = 0.023 \times 2190 \times 0.843 = 42.5, \qquad k_c = \frac{Sh\,D_{AB}}{D} = \frac{42.5 \times 2.6\times10^{-5}}{0.025} = 4.4\times10^{-2}\ \mathrm{m/s}.$$
This gas-phase $k_c \approx 4\times10^{-2}\ \mathrm{m/s}$ is about **1000×** larger than Example 2's liquid-phase $k_c \approx 5\times10^{-5}\ \mathrm{m/s}$, because gas diffusivities are ~$10^4$ larger than liquid ones (small $Sc$ vs. large $Sc$), so gases carry mass across the interface far faster.

*Check.* $[k_c] = \mathrm{(m^2/s)/m} = \mathrm{m/s}$ ✓; the value matches the wetted-tube gas coefficients from [3.4](03-04-forced-convection-transport-coefficients.md) Example 2 (few cm/s). ✓

**P3** (a) $k_c \propto D^{0.6}$ is close to the $\sqrt{D} = D^{0.5}$ of **surface renewal** (and penetration), far from film theory's $D^{1.0}$ — consistent with a renewed turbulent interface. (b) Scale by the power law:
$$k_{c,2} = k_{c,1}\left(\frac{D_2}{D_1}\right)^{0.6} = 3.0\times10^{-5}\left(\frac{2.5\times10^{-9}}{1.6\times10^{-9}}\right)^{0.6} = 3.0\times10^{-5}(1.563)^{0.6}.$$
Now $(1.563)^{0.6} = e^{0.6\ln 1.563} = e^{0.6(0.4468)} = e^{0.2681} = 1.31$, so $k_{c,2} = 3.9\times10^{-5}\ \mathrm{m/s}$.

*Check.* $k_{c,2} > k_{c,1}$ since $D_2 > D_1$ ✓; the increase (×1.31) is milder than the diffusivity ratio (×1.56) because the exponent is below 1 — the $\sqrt{D}$-like signature, exactly the point of the lesson. ✓

</details>

## Flashback

**From Lesson 4.2 (Diffusion through a stagnant film — Stefan):** Water evaporates from the bottom of a narrow tube and diffuses up through a stagnant air film of thickness $\delta = 2.0\ \mathrm{mm}$ to a dry air stream. At $T = 298\ \mathrm{K}$, $P = 1\ \mathrm{atm}$: the total molar concentration is $c = P/RT = 40.9\ \mathrm{mol/m^3}$, the water-vapor mole fraction at the liquid surface is $x_{A1} = 0.030$ (saturation) and $x_{A2} = 0$ at the top, and $D_{AB} = 2.6\times10^{-5}\ \mathrm{m^2/s}$. Find the evaporation flux $N_A$, and by how much the stagnant-air drift factor raises it above the equimolar (dilute) estimate.

<details>
<summary>Solution</summary>

Stefan diffusion of $A$ (water) through stagnant $B$ (air):
$$N_A = \frac{c\,D_{AB}}{\delta}\,\frac{x_{A1}-x_{A2}}{x_{B,\mathrm{lm}}}, \qquad x_{B,\mathrm{lm}} = \frac{x_{B2}-x_{B1}}{\ln(x_{B2}/x_{B1})}.$$
With $x_{B1} = 1 - 0.030 = 0.970$ and $x_{B2} = 1$:
$$x_{B,\mathrm{lm}} = \frac{1 - 0.970}{\ln(1/0.970)} = \frac{0.030}{0.03046} = 0.985.$$
The prefactor:
$$\frac{c\,D_{AB}}{\delta} = \frac{40.9 \times 2.6\times10^{-5}}{2.0\times10^{-3}} = 0.532\ \mathrm{mol\,m^{-2}\,s^{-1}}.$$
So
$$N_A = 0.532 \times \frac{0.030 - 0}{0.985} = 0.532 \times 0.03046 = 1.62\times10^{-2}\ \mathrm{mol\,m^{-2}\,s^{-1}}.$$
The equimolar/dilute estimate omits the drift factor: $N_A^{\circ} = 0.532 \times 0.030 = 1.60\times10^{-2}$. The stagnant-air correction raises the flux by $1/x_{B,\mathrm{lm}} = 1/0.985 = 1.016$, i.e. about **1.6%**.

*Check.* $[c D/\delta] = \mathrm{(mol/m^3)(m^2/s)/m} = \mathrm{mol\,m^{-2}\,s^{-1}}$ ✓. Because $A$ is dilute ($x_{A1} = 0.03$), the drift correction is tiny — exactly the "skip $x_{B,\mathrm{lm}}$ when dilute" point from this lesson's *Watch out*. ✓

</details>

## Connections

- **Backward:** the definition $N_A = k_c\,\Delta c$ and the $Sh = f(Re,Sc)$ twins come straight from [3.4](03-04-forced-convection-transport-coefficients.md); film theory is [4.2](04-02-diffusion-stagnant-film-stefan.md)'s stagnant-film result read as a coefficient, and penetration theory reuses the semi-infinite transient of [4.4](04-04-transient-multidimensional-diffusion.md) with $\alpha \to D_{AB}$.
- **Forward:** these single-phase coefficients are the building blocks of [5.2 two-film theory](05-02-two-film-theory-interphase.md), where a gas-side $k_G$ and a liquid-side $k_L$ combine in series (like resistances) into an overall $K_G$; the $Sh/Nu$ twin structure becomes the [5.1](05-01-transport-analogies.md) Chilton–Colburn analogy $j_H = j_D$.
- **Sideways:** penetration/surface-renewal is the *mass-transfer* face of transient conduction into a semi-infinite solid ([`heat-transfer` 2.2](../../heat-transfer/lessons/02-02-semi-infinite-solid.md)) — same $\operatorname{erfc}$, same $\sqrt{Dt}$ penetration depth, with $\alpha \to D_{AB}$. The competition between reaction and diffusion timescales that sets which model matters resurfaces in the effectiveness-factor story of [4.3](04-03-diffusion-with-reaction-thiele.md) and the forward reaction-engineering course.
