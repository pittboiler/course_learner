# Transport Phenomena · Lesson 4.3: Diffusion with chemical reaction

> ⏱ ~15 min · Module 4: Mass transport · Builds on: [2.6 Species-continuity equation](02-06-species-continuity-equation.md), 4.2 (stagnant-film / Stefan diffusion) · Unlocks: the internal-transport limit on catalytic reactors — the effectiveness factor is where this course hands off to reaction engineering (Boss problem 4)

## Why this matters

A catalyst pellet is a sponge full of reactive pores. Reactant has to *diffuse in* before it can react on the interior surface — and reaction eats it up along the way. If reaction is slow, molecules reach the center easily and the whole pellet works. If reaction is fast, the reactant is devoured within a thin skin near the surface and the entire interior sits idle: expensive precious-metal catalyst doing nothing. This lesson gives you the one number — the **Thiele modulus** — that decides which world you're in, and the **effectiveness factor** that tells a reactor designer whether making the pellet bigger buys more conversion or just more dead weight. It's the same diffusion-vs-source competition you already set up in [2.6](02-06-species-continuity-equation.md); now we solve it and read off the payoff.

## The idea

Two clocks are running inside the pellet. One is **diffusion**: how long it takes a molecule to soak from the surface to the center. The other is **reaction**: how long a molecule survives before it's consumed. Their ratio is the whole story.

- If a molecule **diffuses across the pellet much faster than it reacts**, it explores the entire interior before disappearing. Concentration is nearly uniform, every bit of catalyst sees fresh reactant, and the pellet is **reaction-limited** — you're getting your money's worth.
- If a molecule **reacts long before it can diffuse to the center**, it never makes it past a thin surface layer. The interior is starved — concentration sags to nearly zero at the core — and the pellet is **diffusion-limited**. The middle is dead weight.

The Thiele modulus $\phi$ is exactly that clock ratio (reaction rate ÷ diffusion rate), and the effectiveness factor $\eta$ is the fraction of the pellet's *potential* rate you actually collect. Everything below is bookkeeping that turns "two clocks" into two clean formulas.

## The formal version

Take a porous **catalyst slab** of half-thickness $L$ (m), symmetric about its midplane. Put $x$ at the **center** ($x=0$); the two exposed faces are at $x=\pm L$, each held at the surface concentration $c_{A,s}$ (mol·m⁻³). Reactant A diffuses through the pore network with **effective diffusivity** $D_e$ (m²·s⁻¹) — the plain molecular $D_{AB}$ knocked down by porosity and tortuosity — and is consumed by a **first-order** reaction with volumetric rate $R_A=-k_1 c_A$, rate constant $k_1$ (s⁻¹).

Steady, no flow, 1-D — the species-continuity equation from [2.6](02-06-species-continuity-equation.md) sheds its accumulation and convection terms, leaving diffusion balanced against reaction:

$$\boxed{\;D_e\frac{d^2 c_A}{dx^2}=k_1 c_A\;}$$

*In words: at every point, whatever diffusion delivers, reaction consumes — the two exactly balance at steady state.* Boundary conditions: **symmetry** at the center (no flux crosses the midplane), $\dfrac{dc_A}{dx}\big|_{x=0}=0$, and **fixed concentration** at the surface, $c_A(\pm L)=c_{A,s}$.

Write $\dfrac{d^2c_A}{dx^2}=m^2 c_A$ with $m=\sqrt{k_1/D_e}$ (m⁻¹). Positive coefficient ⇒ **hyperbolic**, not sinusoidal, solutions; symmetry kills the odd $\sinh$ part, and the surface BC fixes the amplitude (full algebra in Worked example 1):

$$\boxed{\;c_A(x)=c_{A,s}\,\frac{\cosh\!\big(\phi\,x/L\big)}{\cosh\phi}\;},\qquad \boxed{\;\phi \equiv L\sqrt{\frac{k_1}{D_e}}\;}$$

The dimensionless group $\phi$ is the **Thiele modulus**. *In words: $\phi$ is the ratio of the reaction rate to the diffusion rate* — square it and $\phi^2=\dfrac{k_1 L^2}{D_e}=\dfrac{L^2/D_e}{1/k_1}=\dfrac{\text{diffusion time}}{\text{reaction time}}$, the two clocks side by side.

**Effectiveness factor.** The honest performance metric compares the pellet's *actual* consumption to the rate it *would* achieve if the entire interior sat at the surface concentration $c_{A,s}$ (no diffusion penalty at all):

$$\eta \equiv \frac{\text{actual reaction rate}}{\text{rate if all of the pellet were at }c_{A,s}}.$$

The actual rate equals what diffuses in through the surface. Differentiate the profile at $x=L$ and divide by the ideal rate $k_1 c_{A,s} L$ (details in Worked example 2) — the $c_{A,s}$ and the geometry cancel, leaving the clean result:

$$\boxed{\;\eta=\frac{\tanh\phi}{\phi}\;}$$

*In words: $\eta$ is the fraction of the catalyst's potential you actually collect;* $\eta=1$ means every bit of the pellet is pulling its weight, $\eta=0.3$ means you're getting 30 percent of what a diffusion-free pellet would deliver.

**The two regimes** (this is the payoff):

| Regime | Condition | $\eta$ | Physical picture |
|---|---|---|---|
| **Reaction-limited** | $\phi\ll1$ | $\eta\to 1$ | Diffusion easily keeps the interior supplied; the whole pellet is active. |
| **Diffusion-limited** | $\phi\gg1$ | $\eta\to 1/\phi$ | Reactant consumed in a surface skin; the interior is starved and dead. |

The limits come straight from $\tanh$: for small $\phi$, $\tanh\phi\approx\phi-\phi^3/3$ so $\eta\approx1-\phi^2/3\to1$; for large $\phi$, $\tanh\phi\to1$ so $\eta\to1/\phi$.

## Picture

![Left panel: concentration profile c_A(x) across the slab, nearly flat and near the surface value for small Thiele modulus (whole pellet active), versus a steep cosh that sags to near zero at the center for large modulus (starved core). Right panel: log-log plot of effectiveness factor eta versus Thiele modulus phi, a plateau at one for small phi that rolls off along the one-over-phi asymptote for large phi.](assets/04-03-fig1.svg)

## Worked examples

**Example 1 — solve for the profile (Boss problem 4, parts a–b).** Start from $D_e c_A''=k_1 c_A$, i.e. $c_A''=m^2 c_A$ with $m=\sqrt{k_1/D_e}$. General solution:

$$c_A(x)=C_1\cosh(mx)+C_2\sinh(mx).$$

*Symmetry BC*, $c_A'(0)=0$: since $c_A'=C_1 m\sinh(mx)+C_2 m\cosh(mx)$, at $x=0$ this is $C_2 m=0\Rightarrow C_2=0$. (The $\sinh$ is odd — it would make the profile lopsided, which a symmetric slab can't be.) *Surface BC*, $c_A(L)=c_{A,s}$: $C_1\cosh(mL)=c_{A,s}\Rightarrow C_1=c_{A,s}/\cosh(mL)$. Therefore, writing $\phi=mL$ and $mx=\phi\,(x/L)$,

$$c_A(x)=c_{A,s}\,\frac{\cosh(mx)}{\cosh(mL)}=c_{A,s}\,\frac{\cosh(\phi\,x/L)}{\cosh\phi}.$$

*Sanity check:* at the surface $x=L$, $\cosh\phi/\cosh\phi=1$ ✓; at the center $x=0$, $c_A(0)=c_{A,s}/\cosh\phi$, which is small when $\phi$ is large (starved) and $\to c_{A,s}$ when $\phi\to0$ ($\cosh0=1$, flat) ✓. Units: $\phi$ is dimensionless since $[L]\sqrt{[k_1]/[D_e]}=\mathrm{m}\sqrt{\mathrm{s^{-1}}/(\mathrm{m^2\,s^{-1}})}=\mathrm m\cdot\mathrm m^{-1}=1$ ✓.

**Example 2 — from profile to effectiveness factor.** The *actual* molar consumption per unit face area equals the flux diffusing in through that face (whatever enters is what gets eaten). Fick at the surface:

$$N_A\big|_{x=L}=D_e\frac{dc_A}{dx}\bigg|_{x=L}=D_e\,c_{A,s}\frac{\phi}{L}\frac{\sinh\phi}{\cosh\phi}=\frac{D_e\,c_{A,s}\,\phi}{L}\tanh\phi.$$

The *ideal* rate — every point of the half-slab (thickness $L$ per face) reacting at the surface concentration — is $k_1 c_{A,s} L$ per unit face area. Divide:

$$\eta=\frac{N_A|_L}{k_1 c_{A,s} L}=\frac{D_e\,c_{A,s}\,\phi\,\tanh\phi/L}{k_1 c_{A,s} L}=\frac{D_e\,\phi\,\tanh\phi}{k_1 L^2}.$$

Now use $\phi^2=k_1 L^2/D_e$, i.e. $D_e/(k_1 L^2)=1/\phi^2$:

$$\eta=\frac{\phi\tanh\phi}{\phi^2}=\frac{\tanh\phi}{\phi}.$$

*Sanity check:* $\eta$ is dimensionless (a ratio of two rates) ✓, bounded by 1 (you can never beat the diffusion-free pellet), and $\to1$ as $\phi\to0$ ✓. This is the *exact structural twin* of a cooling fin's efficiency in [`heat-transfer`](../../heat-transfer/lessons/01-01-three-modes-fouriers-law.md): a fin conducts heat in while convection bleeds it off along the way, giving the very same $\tanh(mL)/(mL)$ — heat leaking out of a fin *is* reactant being consumed in a pellet, with $k_1\leftrightarrow$ (convective loss) and $D_e\leftrightarrow k$.

## Watch out

- **You might think a bigger pellet always converts more reactant.** Only when you're reaction-limited ($\phi\ll1$). Once diffusion-limited, $\eta\approx1/\phi\propto1/L$, so the total rate ($\propto L\cdot\eta$) stops rising with $L$ — the added interior never sees reactant. Bigger then means *more cost, same output*. (Worked in Problem P2.)
- **You might use the raw molecular diffusivity $D_{AB}$.** Inside a porous pellet you must use the **effective** diffusivity $D_e=D_{AB}\,\varepsilon/\tau$ (porosity $\varepsilon$, tortuosity $\tau$), typically 5–20× smaller. Using $D_{AB}$ underestimates $\phi$ and badly overestimates $\eta$.
- **You might flip the reaction sign and get a cosine.** A species being *consumed* has $R_A=-k_1c_A$, which puts a **positive** coefficient in $c_A''=+m^2c_A$ → $\cosh$/$\sinh$. Writing $+k_1c_A$ (production) gives $c_A''=-m^2c_A$ → $\cos$/$\sin$, an oscillating profile that's physically wrong for a decaying reactant.
- **You might read $\eta<1$ as "the reaction is inefficient."** No — the *chemistry* is fine; $\eta<1$ measures a **transport** penalty. The interior is underused because diffusion can't feed it, not because the catalyst is bad.

## One-liner

> The Thiele modulus $\phi=L\sqrt{k_1/D_e}$ pits reaction against diffusion, and $\eta=\tanh\phi/\phi$ reads off the score: small $\phi$ works the whole pellet ($\eta\to1$), large $\phi$ wastes its core ($\eta\to1/\phi$).

## Problems

**P1 (🟢)** A catalyst slab has half-thickness $L=1.0\ \mathrm{mm}=10^{-3}\ \mathrm{m}$, first-order rate constant $k_1=0.040\ \mathrm{s^{-1}}$, and effective diffusivity $D_e=1.0\times10^{-8}\ \mathrm{m^2\,s^{-1}}$. (a) Compute the Thiele modulus $\phi$. (b) Compute the effectiveness factor $\eta$. (c) What fraction of the surface concentration survives to the center, $c_A(0)/c_{A,s}$? Is this pellet reaction- or diffusion-limited?

**P2 (🟡 — Boss problem 4, part c)** Using $\eta(\phi)$, answer the "double the thickness" question. Total reaction rate per pellet scales as $R\propto L\,\eta(\phi)$ (volume $\times$ effectiveness), with $\phi\propto L$. (a) In the reaction-limited regime, show doubling $L$ roughly doubles the rate. (b) In the diffusion-limited regime, show doubling $L$ barely changes it. (c) Take the P1 pellet ($\phi=2$) and double $L$ to $2\ \mathrm{mm}$ ($\phi=4$): by what factor does the total rate actually change? Comment.

**P3 (🔴)** A *very* fast reaction drives the pellet deep into the diffusion-limited regime. Show that in this limit the reactant only penetrates a characteristic depth $\ell\sim\sqrt{D_e/k_1}=L/\phi$ below each surface, and that this is exactly why $\eta\to1/\phi$. (Hint: for large $\phi$, near a surface the $\cosh$ profile looks like a decaying exponential — find its decay length.)

<details>
<summary>Solutions</summary>

**P1** (a) $\phi=L\sqrt{k_1/D_e}=10^{-3}\sqrt{0.040/10^{-8}}=10^{-3}\sqrt{4.0\times10^{6}}=10^{-3}\cdot2000=2.0$. (Dimensionless ✓.)
(b) $\eta=\tanh\phi/\phi=\tanh(2.0)/2.0=0.9640/2.0=0.482$.
(c) $c_A(0)/c_{A,s}=1/\cosh\phi=1/\cosh(2.0)=1/3.762=0.266$ — only about 27 percent of the surface value reaches the center. With $\phi=2$ and $\eta\approx0.48$ this is a **moderately diffusion-limited** pellet: you're collecting under half the potential rate, and the core is noticeably starved. *Sanity:* all three numbers dimensionless, $\eta<1$, center depressed below surface ✓.

**P2** (a) Reaction-limited ($\phi\ll1$): $\eta\to1$, so $R\propto L\cdot1=L$. Doubling $L$ doubles $R$ — all the extra material is active. *Check with small numbers:* $\phi=0.2\to\eta=\tanh(0.2)/0.2=0.987$; double to $\phi=0.4\to\eta=\tanh(0.4)/0.4=0.950$. Rate ratio $=\dfrac{2L\cdot0.950}{L\cdot0.987}=1.93$ — essentially double ✓.
(b) Diffusion-limited ($\phi\gg1$): $\eta\to1/\phi\propto1/L$, so $R\propto L\cdot(1/L)=\text{const}$. Doubling $L$ leaves $R$ unchanged — the added interior is dead. 
(c) The P1 pellet, $\phi=2\to\phi=4$. $\eta(2)=0.482$; $\eta(4)=\tanh(4)/4=0.9993/4=0.2498$. Rate ratio:
$$\frac{R(2L)}{R(L)}=\frac{2L\cdot\eta(4)}{L\cdot\eta(2)}=\frac{2\cdot0.2498}{0.482}=\frac{0.4996}{0.482}=1.04.$$
Doubling the thickness — twice the precious-metal catalyst — buys only about **4 percent** more conversion. The pellet is already past the sweet spot; the extra material is almost entirely dead weight. The design lesson: shrink the pellet (or make it more porous, raising $D_e$) to pull $\phi$ down toward 1, rather than adding mass.

**P3** For $\phi\gg1$, near the top surface let $s=L-x$ be the depth below it (small). Then $x/L=1-s/L$ and $\cosh(\phi x/L)=\cosh(\phi-\phi s/L)$. For large argument $\cosh(u)\approx\tfrac12 e^{u}$, so
$$c_A\approx c_{A,s}\frac{\tfrac12 e^{\phi-\phi s/L}}{\tfrac12 e^{\phi}}=c_{A,s}\,e^{-\phi s/L}=c_{A,s}\,e^{-s/\ell},\qquad \ell=\frac{L}{\phi}=\sqrt{\frac{D_e}{k_1}}.$$
So the reactant decays exponentially with penetration depth $\ell=\sqrt{D_e/k_1}$ — set by the diffusion and reaction clocks alone, *independent of the pellet size $L$*. Only a skin of thickness $\sim\ell$ out of the half-thickness $L$ is active, an active fraction $\ell/L=1/\phi$. Since the effectiveness factor is precisely "fraction of the pellet doing work," $\eta\approx\ell/L=1/\phi$ — recovering the large-$\phi$ limit from pure geometry. *Sanity:* $\ell=\sqrt{D_e/k_1}$ has units $\sqrt{\mathrm{m^2\,s^{-1}}/\mathrm{s^{-1}}}=\mathrm m$ ✓, and for P1, $\ell=L/\phi=1\,\mathrm{mm}/2=0.5\,\mathrm{mm}$ — half the half-thickness reacts, consistent with $\eta\approx0.48$.

</details>

## Flashback

**From Lesson 2.6 (species-continuity equation):** Carbon dioxide diffuses at steady state, with no reaction and no flow, straight across a polymer packaging film of thickness $L=0.10\ \mathrm{mm}=1.0\times10^{-4}\ \mathrm{m}$. The dissolved CO₂ concentration is held at $c_{A0}=8.0\ \mathrm{mol\,m^{-3}}$ on the inside face and $c_{AL}=0.5\ \mathrm{mol\,m^{-3}}$ on the outside; the diffusivity in the polymer is $D_{AB}=3.0\times10^{-11}\ \mathrm{m^2\,s^{-1}}$. Find the steady molar flux $N_A$ through the film.

<details>
<summary>Solution</summary>

No reaction, no flow, steady, 1-D ⇒ the species equation collapses to $d^2c_A/dx^2=0$, a **linear** profile, so the flux is constant across the film (the mass version of Ohm's law):
$$N_A=\frac{D_{AB}}{L}(c_{A0}-c_{AL})=\frac{3.0\times10^{-11}}{1.0\times10^{-4}}(8.0-0.5)=3.0\times10^{-7}\cdot7.5=2.25\times10^{-6}\ \mathrm{mol\,m^{-2}\,s^{-1}}.$$
*Units:* $\dfrac{\mathrm{m^2\,s^{-1}}}{\mathrm m}\cdot\mathrm{mol\,m^{-3}}=\mathrm{mol\,m^{-2}\,s^{-1}}$ ✓. Positive, pointing outward — the film leaks CO₂ from high to low concentration, exactly the diffusion resistance $L/D_{AB}$ in series. Contrast with *this* lesson: add a consuming reaction and the straight line bends into the $\cosh$ that sags toward the interior.

</details>

## Connections

- **Backward:** this is the steady diffusion–reaction limit of the species-continuity equation ([2.6](02-06-species-continuity-equation.md)) — drop accumulation and convection, keep Fick's diffusion against the first-order source. The $\cosh$ profile is the one [2.6](02-06-species-continuity-equation.md) set up but didn't cash in; the effectiveness factor is the cash.
- **Forward:** the effectiveness factor $\eta(\phi)$ is a *global* rate multiplier — a reactor-design course threads it into every rate expression so that a packed bed's real throughput accounts for the internal-transport penalty. Generalizing the slab to spheres/cylinders and to non-first-order kinetics (the generalized Thiele modulus) is the immediate next step in reaction engineering, the forward course this hands off to.
- **Sideways:** mathematically identical to the **cooling-fin efficiency** $\tanh(mL)/mL$ in [`heat-transfer`](../../heat-transfer/lessons/01-01-three-modes-fouriers-law.md) — conduction feeding a fin while convection bleeds heat off along its length is the same ODE as diffusion feeding a pellet while reaction consumes reactant. One $\tanh\phi/\phi$, two disciplines: the momentum–heat–mass analogy reaching all the way into chemical kinetics.
