# Transport Phenomena · Lesson 4.1: Diffusion in binary mixtures — fluxes and frames

> ⏱ ~15 min · Module 4: Mass transport · Builds on: [1.3 Fourier & Fick fluxes](01-03-heat-mass-fluxes-fourier-fick.md), [2.6 Species-continuity equation](02-06-species-continuity-equation.md), [`fluid-dynamics` 1.3 (continuity)](../../fluid-dynamics/lessons/01-03-continuity-equation.md) · Unlocks: [4.2 Diffusion through stagnant film (Stefan)](04-02-diffusion-stagnant-film-stefan.md), [4.3 Diffusion with reaction](04-03-diffusion-with-reaction-thiele.md)

## Why this matters

Heat transfer had one clean flux: $q'' = -k\,dT/dy$, and you never had to ask "flux measured relative to *what*?" Mass transfer is subtler, and this lesson is where the subtlety lives. When species A diffuses through species B, the mixture itself is usually drifting — A's own motion drags the local center of mass or center of moles along with it. So there are **two** ways A crosses a fixed plane: it seeps down its concentration gradient (Fick), *and* it rides the bulk drift. Get the bookkeeping wrong and you mispredict evaporation rates, catalyst pellet fluxes, and every distillation column by the factor that separates "textbook Fick" from reality. This lesson builds the ledger; [4.2](04-02-diffusion-stagnant-film-stefan.md) cashes it in.

## The idea

Picture dye spreading in a river. The dye moves for two reasons: it *diffuses* through the water (spreading even in a still bucket), and it *is carried* by the river's current. To predict where the dye ends up relative to the bank, you need both — and you need to be clear about which motion is "diffusion" and which is "being carried."

In a diffusing gas or liquid there's no external river, but the mixture still has an average velocity of its own, made by the molecules' collective drift. Diffusion is defined as motion **relative to that average**. The flux you actually measure — moles of A per second across a fixed window — is diffusion **plus** the ride on the average. Two pieces, always:

$$\text{(A crossing a fixed plane)} = \text{(A riding the bulk drift)} + \text{(A diffusing relative to the bulk)}.$$

The one genuinely new wrinkle versus heat: "the bulk drift" can be measured two ways — by center of **mass** or by center of **moles** — and mass transfer usually uses the molar one. Nail those two velocities and everything else is algebra.

## The formal version

**Two average velocities.** Each species $i$ has its own local velocity $\mathbf v_i$ ($\mathrm{m/s}$). The mixture has two natural averages:

$$\mathbf v = \sum_i \omega_i \mathbf v_i \quad(\text{mass-average}), \qquad \mathbf v^* = \sum_i x_i \mathbf v_i \quad(\text{molar-average}),$$

where $\omega_i$ is the mass fraction and $x_i$ the mole fraction (both dimensionless). *In words: $\mathbf v$ weights each species by how much mass it contributes, $\mathbf v^*$ by how many moles.* The **mass-average $\mathbf v$ is the velocity of continuity and Navier–Stokes** — because $\rho\mathbf v$ is the momentum per volume you tracked in [`fluid-dynamics` 1.3](../../fluid-dynamics/lessons/01-03-continuity-equation.md). The two coincide only when all species share the same molar mass; otherwise they differ.

**The absolute (fixed-axes) molar flux.** The moles of A crossing a plane fixed in the lab, per area per time, is $\mathbf N_A = c_A \mathbf v_A$ ($\mathrm{mol/(m^2\,s)}$), with $c_A = c\,x_A$ the molar concentration and $c$ the total molar concentration ($\mathrm{mol/m^3}$). Split $\mathbf v_A$ into the molar-average plus a deviation:

$$\mathbf N_A = c_A\mathbf v^* + c_A(\mathbf v_A - \mathbf v^*) = x_A\,c\,\mathbf v^* + \mathbf J_A^*.$$

The deviation piece $\mathbf J_A^* = c_A(\mathbf v_A - \mathbf v^*)$ is exactly **Fick's law from [1.3](01-03-heat-mass-fluxes-fourier-fick.md)** — diffusion measured relative to the molar-average velocity:

$$\mathbf J_A^* = -c\,D_{AB}\,\nabla x_A.$$

For a **binary** mixture the bulk term simplifies beautifully: $c\,\mathbf v^* = c(x_A\mathbf v_A + x_B\mathbf v_B) = c_A\mathbf v_A + c_B\mathbf v_B = \mathbf N_A + \mathbf N_B$. So $x_A c\,\mathbf v^* = x_A(\mathbf N_A+\mathbf N_B)$, and we land on the master equation of binary diffusion:

$$\boxed{\ \mathbf N_A = \underbrace{x_A(\mathbf N_A + \mathbf N_B)}_{\text{convection (bulk drag)}} + \underbrace{\mathbf J_A^*}_{\text{diffusion (Fick)}}, \qquad \mathbf J_A^* = -c\,D_{AB}\,\nabla x_A.\ }$$

*In words: A's total flux is the fraction $x_A$ of everybody's flux it gets dragged along with, plus its own Fickian diffusion.* One more fact we'll lean on: diffusion fluxes relative to the molar-average sum to zero, $\mathbf J_A^* + \mathbf J_B^* = 0$ — every mole diffusing forward relative to the center of moles is matched by one diffusing back.

**Two limiting cases** (1-D, along $z$) turn on what $\mathbf N_A + \mathbf N_B$ does:

- **Equimolar counterdiffusion:** $N_B = -N_A$, so $N_A + N_B = 0$ and the bulk term **dies**. Then $N_A = J_A^* = -cD_{AB}\,dx_A/dz$ — pure Fick. This is distillation with equal molar latent heats: one mole of light component rises for every mole of heavy component that falls.
- **Diffusion through stagnant B:** $N_B = 0$ (B can't cross — it's insoluble, non-reacting, blocked), so $N_A + N_B = N_A$ and the bulk term **survives**. Solving $N_A = x_A N_A + J_A^*$ gives $N_A = J_A^*/(1-x_A)$ — diffusion **amplified** by the bulk drag it creates. This is evaporation into still air: **Stefan flow**, the full subject of [4.2](04-02-diffusion-stagnant-film-stefan.md).

## Picture

![Two side-by-side channels: left, equimolar counterdiffusion with A and B crossing in equal and opposite molar arrows so net molar flow and molar-average velocity are zero; right, diffusion through stagnant B where A moves but B is blocked, producing a net bulk drift (Stefan flow)](assets/04-01-fig1.svg)

## Worked examples

**Example 1 — equimolar counterdiffusion between two reservoirs (pure Fick).** Two large bulbs are joined by a tube of length $L = 0.10\ \mathrm{m}$ holding a gas mixture of A and B at $1\ \mathrm{atm}$, $300\ \mathrm{K}$, with $D_{AB} = 2.0\times10^{-5}\ \mathrm{m^2/s}$. Bulb 1 holds mole fraction $x_{A1}=0.80$, bulb 2 holds $x_{A2}=0.20$. For every mole of A that diffuses toward bulb 2, one mole of B diffuses back, so $N_B=-N_A$ and the bulk term vanishes:

$$N_A = -cD_{AB}\frac{dx_A}{dz}.$$

At steady state $N_A$ is constant along the tube, so the profile is linear and we integrate from $z=0$ to $L$:

$$N_A = \frac{cD_{AB}}{L}\,(x_{A1}-x_{A2}).$$

Total concentration from the ideal-gas law, $c = P/RT = \dfrac{101{,}325}{8.314\times300} = 40.6\ \mathrm{mol/m^3}$. Then

$$N_A = \frac{40.6\times 2.0\times10^{-5}}{0.10}\,(0.80-0.20) = \frac{8.12\times10^{-4}}{0.10}\times 0.60 = 4.9\times10^{-3}\ \mathrm{mol/(m^2\,s)},$$

with B flowing the opposite way at the same molar rate, $N_B=-4.9\times10^{-3}\ \mathrm{mol/(m^2\,s)}$.

*Units check:* $\dfrac{(\mathrm{mol/m^3})(\mathrm{m^2/s})}{\mathrm m}\cdot(\text{dimensionless}) = \mathrm{mol/(m^2\,s)}$ ✓. Same shape as $q''=k\,\Delta T/L$ — the molecular-transport template from [1.3](01-03-heat-mass-fluxes-fourier-fick.md), with $k\to cD_{AB}$ and $\Delta T\to \Delta x_A$.

**Example 2 — the frame correction, in numbers (setting up Stefan flow).** At some plane in an evaporation problem, A diffuses into stagnant B ($N_B = 0$). Measurements at that plane: $x_A = 0.30$, total flux $N_A = 1.0\times10^{-3}\ \mathrm{mol/(m^2\,s)}$, and $c = 40.6\ \mathrm{mol/m^3}$. Decompose $N_A$ into bulk-drag and diffusion, and find $\mathbf v^*$.

The **bulk molar flux** is $c\,v^* = N_A + N_B = 1.0\times10^{-3}\ \mathrm{mol/(m^2\,s)}$, so the **molar-average velocity** is

$$v^* = \frac{N_A+N_B}{c} = \frac{1.0\times10^{-3}}{40.6} = 2.5\times10^{-5}\ \mathrm{m/s}.$$

The share of $N_A$ that is just A riding this drift is $x_A(N_A+N_B) = 0.30\times 1.0\times10^{-3} = 3.0\times10^{-4}\ \mathrm{mol/(m^2\,s)}$. What's left is the genuine Fickian diffusion:

$$J_A^* = N_A - x_A(N_A+N_B) = 1.0\times10^{-3} - 3.0\times10^{-4} = 7.0\times10^{-4}\ \mathrm{mol/(m^2\,s)}.$$

So **30% of A's flux is bulk drag, 70% is diffusion** — the bulk term is not a rounding error. Two consistency checks that reveal the physics:

- **B is "stagnant" but not still.** $J_B^* = N_B - x_B(N_A+N_B) = 0 - 0.70\times1.0\times10^{-3} = -7.0\times10^{-4}\ \mathrm{mol/(m^2\,s)} = -J_A^*$. B diffuses *backward* just fast enough to cancel its forward bulk drag, netting $N_B=0$. (Note $J_A^*+J_B^*=0$, as it must.)
- **The Stefan amplification.** $N_A = J_A^*/(1-x_A) = 7.0\times10^{-4}/0.70 = 1.0\times10^{-3}\ \mathrm{mol/(m^2\,s)}$ ✓ — reproducing $N_A$ and previewing the $1/(1-x_A)$ boost that [4.2](04-02-diffusion-stagnant-film-stefan.md) integrates across a film.

*Units check:* $v^* = \dfrac{\mathrm{mol/(m^2\,s)}}{\mathrm{mol/m^3}} = \mathrm{m/s}$ ✓; every flux stays $\mathrm{mol/(m^2\,s)}$.

## Watch out

- **You might think $N_A$ and $J_A^*$ are the same thing** (in heat you only ever wrote one flux). They coincide *only* when $N_A+N_B=0$ — equimolar counterdiffusion. In general $N_A = J_A^* + x_A(N_A+N_B)$; the two differ by the convective term, and forgetting it is the classic mass-transfer error.
- **You might think $J_A^*=0$ means A isn't moving, or $N_A=0$ means A is diffusively still.** Neither. $J_A^*$ is measured *relative to $\mathbf v^*$*: at uniform mole fraction ($\nabla x_A=0$) A still crosses fixed axes by pure convection ($N_A=x_A(N_A+N_B)\neq0$, $J_A^*=0$). Conversely, stagnant B has $N_B=0$ yet $J_B^*\neq0$ — it diffuses, canceled by drift. "Diffusing" and "crossing a fixed plane" are different questions with different answers.
- **You might reach for the mass-average velocity $\mathbf v$ in Fick's law.** The molar form $J_A^*=-cD_{AB}\nabla x_A$ is defined relative to the *molar*-average $\mathbf v^*$; the mass form $j_A=-\rho D_{AB}\nabla\omega_A$ is relative to $\mathbf v$. Don't mix a molar flux with a mass-average frame — they only agree when the molar masses are equal ($\mathbf v=\mathbf v^*$).

## One-liner

> A's flux across a fixed plane is Fick's diffusion *plus* a ride on the bulk drift, $N_A=x_A(N_A+N_B)+J_A^*$; the bulk term vanishes in equimolar counterdiffusion and roars back in diffusion through stagnant B.

## Problems

**P1 (🟢)** Methane (A) and hydrogen (B) equimolar-counterdiffuse in a tube of length $L=0.05\ \mathrm{m}$ at $1\ \mathrm{atm}$, $300\ \mathrm{K}$ ($c=40.6\ \mathrm{mol/m^3}$), with $D_{AB}=6.3\times10^{-5}\ \mathrm{m^2/s}$. The mole fraction of methane runs from $x_{A1}=0.60$ to $x_{A2}=0.10$. Find $N_A$ and $N_B$.

**P2 (🟡)** In a diffusion-through-stagnant-B problem, at a plane where $x_A=0.50$ the total flux is $N_A=8.0\times10^{-4}\ \mathrm{mol/(m^2\,s)}$, $N_B=0$, and $c=40.6\ \mathrm{mol/m^3}$. Compute (a) the molar-average velocity $v^*$, (b) the bulk-drag part of $N_A$, (c) the diffusive flux $J_A^*$, and (d) verify $N_A=J_A^*/(1-x_A)$. What fraction of A's transport is bulk drag here versus in Example 2 ($x_A=0.30$)?

**P3 (🔴)** Show algebraically that for diffusion of A through stagnant B, $N_A = -\dfrac{cD_{AB}}{1-x_A}\dfrac{dx_A}{dz}$. Then explain in one sentence why, as $x_A\to 1$, the flux formally diverges — and what physical situation that limit describes. *(This is the integrand [4.2](04-02-diffusion-stagnant-film-stefan.md) integrates.)*

<details>
<summary>Solutions</summary>

**P1** Equimolar counterdiffusion ⇒ bulk term dies ⇒ $N_A=\dfrac{cD_{AB}}{L}(x_{A1}-x_{A2})$.
$$N_A=\frac{40.6\times6.3\times10^{-5}}{0.05}(0.60-0.10)=\frac{2.558\times10^{-3}}{0.05}\times0.50=2.6\times10^{-2}\ \mathrm{mol/(m^2\,s)}.$$
And $N_B=-N_A=-2.6\times10^{-2}\ \mathrm{mol/(m^2\,s)}$. *Units:* $(\mathrm{mol/m^3})(\mathrm{m^2/s})/\mathrm m=\mathrm{mol/(m^2\,s)}$ ✓. (Larger than Example 1 because $D_{AB}$ for H$_2$ is much bigger — hydrogen diffuses fast.)

**P2** (a) $v^*=\dfrac{N_A+N_B}{c}=\dfrac{8.0\times10^{-4}}{40.6}=2.0\times10^{-5}\ \mathrm{m/s}$.
(b) bulk drag $=x_A(N_A+N_B)=0.50\times8.0\times10^{-4}=4.0\times10^{-4}\ \mathrm{mol/(m^2\,s)}$.
(c) $J_A^*=N_A-x_A(N_A+N_B)=8.0\times10^{-4}-4.0\times10^{-4}=4.0\times10^{-4}\ \mathrm{mol/(m^2\,s)}$.
(d) $J_A^*/(1-x_A)=4.0\times10^{-4}/0.50=8.0\times10^{-4}=N_A$ ✓.
Here bulk drag is $4.0/8.0=50\%$ of $N_A$; in Example 2 ($x_A=0.30$) it was $30\%$. The drag share equals $x_A$ exactly — the richer A is, the more of its "diffusion" is really being swept along. *Units:* $v^*$ in m/s, fluxes in mol/(m²·s) ✓.

**P3** Stagnant B: $N_B=0$, so $N_A+N_B=N_A$. Put this into the master equation:
$$N_A=x_A N_A + J_A^* = x_A N_A - cD_{AB}\frac{dx_A}{dz}.$$
Collect $N_A$: $N_A(1-x_A)=-cD_{AB}\,dx_A/dz$, hence
$$N_A=-\frac{cD_{AB}}{1-x_A}\frac{dx_A}{dz}.$$
As $x_A\to1$ the prefactor $1/(1-x_A)\to\infty$: the mixture at that plane is almost pure A, so essentially *all* of the local bulk flow is A itself — the convective self-drag runs away, and a finite gradient would demand an unbounded flux. Physically it's the near-surface limit of fast evaporation of a nearly pure volatile into a trace of inert gas. *Sanity:* setting $x_A\to0$ recovers $N_A\to-cD_{AB}\,dx_A/dz$, plain Fick, as dilute A should. ✓

</details>

## Flashback

**From Lesson 1.3 (Fourier & Fick in the same mold):** Ammonia (A) diffuses through nitrogen (B) across a thin film of thickness $\delta = 4\ \mathrm{mm}$. On a **mass** basis the ammonia mass fraction drops from $\omega_{A1}=0.10$ to $\omega_{A2}=0.04$; the mixture mass density is $\rho = 1.1\ \mathrm{kg/m^3}$ and $D_{AB}=2.3\times10^{-5}\ \mathrm{m^2/s}$. Estimate the mass diffusive flux $j_A=-\rho D_{AB}\,d\omega_A/dy$ (ignore bulk flow — pure mass-basis Fick).

<details>
<summary>Solution</summary>

Linear profile across the film ⇒ $-d\omega_A/dy=(\omega_{A1}-\omega_{A2})/\delta$, so
$$j_A=\rho D_{AB}\frac{\omega_{A1}-\omega_{A2}}{\delta}=1.1\times2.3\times10^{-5}\times\frac{0.10-0.04}{0.004}=1.1\times2.3\times10^{-5}\times15=3.8\times10^{-4}\ \mathrm{kg/(m^2\,s)}.$$
*Units:* $(\mathrm{kg/m^3})(\mathrm{m^2/s})(\text{dimensionless})/\mathrm m=\mathrm{kg/(m^2\,s)}$ ✓. This is the mass-frame twin of $J_A^*$ (relative to the mass-average $\mathbf v$, not $\mathbf v^*$) — a reminder that mass transfer always makes you name the basis *and* the frame before you trust a flux. As with the molar version, a true stagnant-B calculation would raise this by the bulk-drag factor.

</details>

## Connections

- **Backward:** this splits the single Fick flux $J_A^*$ of [1.3](01-03-heat-mass-fluxes-fourier-fick.md) into the diffusion-plus-convection pair, and it identifies which velocity the [species-continuity](02-06-species-continuity-equation.md) convection term $\nabla\!\cdot(c_A\mathbf v)$ actually uses — the mass-average $\mathbf v$ that [`fluid-dynamics` continuity](../../fluid-dynamics/lessons/01-03-continuity-equation.md) tracks.
- **Forward:** [4.2](04-02-diffusion-stagnant-film-stefan.md) integrates the stagnant-B expression $N_A=-\frac{cD_{AB}}{1-x_A}\frac{dx_A}{dz}$ across a film to get the Stefan flux and the log-mean $x_{B,\mathrm{lm}}$; [4.3](04-03-diffusion-with-reaction-thiele.md) reuses the equimolar (pure-Fick) limit inside catalyst pellets.
- **Sideways:** the "flux relative to which velocity?" question is the mass-transfer echo of choosing a reference frame in mechanics — and the equimolar-vs-stagnant split is why heat transfer, which never carries the conserved quantity *as* the medium, never needed this correction: temperature has no "bulk drift of temperature."
