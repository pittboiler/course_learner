# Plasma Physics · Lesson 3.3: Magnetic pressure, tension & plasma beta

> ⏱ ~15 min · Module 3: The fluid picture & MHD · Builds on: [3.2 The ideal-MHD equations & frozen-in flux](03-02-ideal-mhd-frozen-flux.md) · Unlocks: [3.4 MHD equilibrium: pinches & flux surfaces](03-04-mhd-equilibrium-pinches.md)

## Why this matters

In ideal MHD the whole force of the magnetic field on the plasma is one compact term, $\mathbf{J}\times\mathbf{B}$. That looks opaque — a cross product of two vector fields you'd rather not compute. This lesson performs the single most useful algebraic move in all of plasma physics: it rewrites $\mathbf{J}\times\mathbf{B}$ as a **pressure** plus a **tension**, so a magnetic field starts behaving like something you already have intuition for — a bundle of stretched elastic bands, each under tension along its length and shoving its neighbours sideways. Once you see the field that way, magnetic confinement, MHD equilibrium ([3.4](03-04-mhd-equilibrium-pinches.md)), Alfvén waves ([4.3](04-03-em-alfven-waves.md)), and the slingshot of reconnection ([5.4](../../plasma-physics/syllabus.md)) all become the *same* two forces in different costumes. And the ratio of plasma pressure to magnetic pressure — the **plasma beta** — is the one dimensionless number that tells you, before any calculation, whether the field bosses the plasma around or the other way round.

## The idea

Two facts about a magnetic field, both from staring at field-line pictures. First, **parallel field lines repel sideways** — squeeze them together and they push back, exactly like the pressure of a gas, except this pressure only acts *across* the field, not along it. Push the field from a strong-field region toward a weak-field region and it resists; that resistance is **magnetic pressure**. Second, **field lines don't like being bent** — a curved line pulls itself straight, like a plucked guitar string or a stretched rubber band snapping back. That restoring pull is **magnetic tension**, and it acts *along* the field.

So the magnetic force has a split personality: a sideways *push* (pressure) and a lengthwise *pull* (tension). A straight, uniform field bundle does nothing net — the sideways pushes balance and there's no bend to straighten. You only get a force where the field is **non-uniform** (pressure imbalance) or **curved** (tension imbalance). That is the entire content of $\mathbf{J}\times\mathbf{B}$, and the vector identity below just makes it official.

## The formal version

Start from the MHD force per unit volume, $\mathbf{J}\times\mathbf{B}$, and eliminate the current using Ampère's law (displacement current dropped in MHD), $\mu_0\mathbf{J}=\nabla\times\mathbf{B}$, where $\mu_0 = 4\pi\times10^{-7}\ \mathrm{T\,m/A}$ is the permeability of free space:

$$\mathbf{J}\times\mathbf{B} = \frac{1}{\mu_0}(\nabla\times\mathbf{B})\times\mathbf{B}.$$

Now apply the standard identity $(\nabla\times\mathbf{B})\times\mathbf{B} = (\mathbf{B}\cdot\nabla)\mathbf{B} - \nabla\!\left(\tfrac12 B^2\right)$, giving the result this whole lesson turns on:

$$\boxed{\ \mathbf{J}\times\mathbf{B} = -\nabla\!\left(\frac{B^2}{2\mu_0}\right) + \frac{(\mathbf{B}\cdot\nabla)\mathbf{B}}{\mu_0}\ }$$

*In words: the magnetic force is minus the gradient of a scalar pressure $B^2/2\mu_0$ (which pushes from strong to weak field), plus a term that is nonzero only when the field bends (which pulls curved lines straight).* Term by term:

**Magnetic pressure.** The scalar

$$p_B \equiv \frac{B^2}{2\mu_0}$$

has units of pascals and enters exactly like a gas pressure — its gradient pushes the plasma from high $p_B$ to low $p_B$, i.e. from strong-field to weak-field regions. *In words: crowded field lines shove their way toward emptier regions.* The catch versus a gas: this pressure acts **perpendicular** to $\mathbf{B}$ only. (Formally, $\mathbf{J}\times\mathbf{B}$ is the divergence of the **Maxwell stress tensor** $T_{ij} = \frac{1}{\mu_0}\big(B_iB_j - \tfrac12 B^2\delta_{ij}\big)$; the isotropic $-\tfrac12 B^2\delta_{ij}$ piece is the pressure, the $B_iB_j$ piece is the tension.)

**Magnetic tension.** Write $\mathbf{B}=B\hat{\mathbf{b}}$ with $\hat{\mathbf{b}}$ the unit vector along the field. Then $(\mathbf{B}\cdot\nabla)\mathbf{B} = B\,\partial_s(B\hat{\mathbf{b}})$, where $\partial_s$ is the derivative along the field line. Its component **perpendicular** to $\mathbf{B}$ is

$$\frac{(\mathbf{B}\cdot\nabla)\mathbf{B}}{\mu_0}\bigg|_\perp = \frac{B^2}{\mu_0}\,\frac{\hat{\mathbf{n}}}{R_c},$$

where $R_c$ is the field line's **radius of curvature** and $\hat{\mathbf{n}}$ points toward its centre of curvature. So a bent field line exerts a restoring force per unit volume of magnitude

$$\frac{T}{R_c},\qquad T \equiv \frac{B^2}{\mu_0} = 2p_B,$$

directed toward the centre of curvature — the field line straightening itself. *In words: the tension force is a tension $T=B^2/\mu_0$ per unit area divided by how sharply the line is bent; sharp bends snap back hard.* This is precisely the restoring force behind Alfvén waves ([4.3](04-03-em-alfven-waves.md)): pluck a field line and its tension pulls it back, like a string.

**Plasma beta.** The dimensionless ratio of the two pressures the plasma cares about,

$$\beta \equiv \frac{p}{\,B^2/2\mu_0\,} = \frac{p}{p_B},$$

with $p$ the plasma (thermal) pressure, $p = n_e k_B T_e + n_i k_B T_i$ (from the [`stat-mech`](../../stat-mech/syllabus.md) definition of pressure as a velocity moment, [2.1](02-01-distribution-function-moments.md)). *In words: beta measures who wins the pressure contest — the particles or the field.*

- $\beta \ll 1$ — **magnetically dominated**: the field is stiff and the plasma is a passenger threaded onto it. Fusion devices ($\beta\sim$ a few %), the solar corona ($\beta\sim10^{-3}$). Coronal loops trace field lines because the plasma is too feeble to bend them.
- $\beta \sim 1$ — comparable; field and plasma jointly decide the dynamics. The solar wind near Earth.
- $\beta \gg 1$ — **pressure-dominated**: the plasma pushes the field around and drags it along ([frozen flux, 3.2](03-02-ideal-mhd-frozen-flux.md)). Stellar interiors, the solar wind far out.

**Pressure balance.** In a static equilibrium ([3.4](03-04-mhd-equilibrium-pinches.md)) the momentum equation collapses to $\nabla p = \mathbf{J}\times\mathbf{B}$. For a **straight** field (no curvature, tension off), the perpendicular part reads $\nabla_\perp\!\left(p + \dfrac{B^2}{2\mu_0}\right)=0$:

$$\boxed{\,p + \frac{B^2}{2\mu_0} = \text{const across field lines}\,}$$

*In words: total pressure — plasma plus magnetic — is uniform across the field.* Where the plasma pressure is high, the field must be weak, and vice versa. That anticorrelation is **diamagnetism**: the plasma digs itself a magnetic hole. It's the whole basis of magnetic confinement — pile up plasma pressure inside, hold it with magnetic pressure outside.

## Picture

![Left: parallel field lines, dense on the left and sparse on the right, with coral arrows showing magnetic pressure pushing the bundle sideways from strong to weak field. Right: a curved blue field line with coral tension arrows along it and a net restoring arrow pointing toward the centre of curvature C at distance R_c, labelled T/R_c.](assets/03-03-fig1.svg)

## Worked examples

**Example 1 (how big is magnetic pressure?).** A superconducting fusion magnet produces $B=1\ \mathrm{T}$. Its magnetic pressure is

$$p_B = \frac{B^2}{2\mu_0} = \frac{(1)^2}{2\,(4\pi\times10^{-7})} = \frac{1}{2.51\times10^{-6}} \approx 3.98\times10^{5}\ \mathrm{Pa} \approx 4\ \mathrm{atm}.$$

One tesla already pushes as hard as four atmospheres. Because $p_B\propto B^2$, a $B=5\ \mathrm{T}$ field (a real tokamak central field) carries $25\times$ that: $p_B \approx 9.9\times10^{6}\ \mathrm{Pa}\approx 98\ \mathrm{atm}$. This is why big magnets need serious mechanical bracing — the field is genuinely trying to blow the coil apart with $\sim100$ atmospheres of pressure.

**Example 2 (beta decides who's in charge).** That same tokamak confines plasma at $n\approx10^{20}\ \mathrm{m^{-3}}$ and $T_e\approx T_i\approx10\ \mathrm{keV}$. First the plasma pressure. A temperature of $10\ \mathrm{keV}$ means $k_BT = 10^{4}\times1.60\times10^{-19} = 1.60\times10^{-15}\ \mathrm{J}$, so

$$p = n_ek_BT_e + n_ik_BT_i \approx 2nk_BT = 2\,(10^{20})(1.60\times10^{-15}) \approx 3.2\times10^{5}\ \mathrm{Pa}.$$

Notice the plasma pressure ($\sim3$ atm) is comparable to a $1\ \mathrm{T}$ field's pressure — but the confining field is $5\ \mathrm{T}$, with $p_B\approx9.9\times10^{6}\ \mathrm{Pa}$. So

$$\beta = \frac{p}{p_B} = \frac{3.2\times10^{5}}{9.9\times10^{6}} \approx 0.03.$$

$\beta\approx3\%$: the field's pressure dwarfs the plasma's, so the field sets the shape and the plasma is confined inside it — magnetically dominated, exactly the regime a tokamak lives in. Economically this stings: you paid for $\sim100$ atm of magnetic pressure to hold back $\sim3$ atm of plasma, so raising $\beta$ (more plasma per unit field) is a central goal of fusion design — and, from the pressure-balance box, the field inside the plasma is slightly *weaker* than outside by just enough to balance that $3\times10^5\ \mathrm{Pa}$.

## Watch out

- **You might think magnetic pressure pushes in all directions like a gas.** It doesn't — $p_B$ only acts **perpendicular** to $\mathbf{B}$. Along the field there is no pressure force at all; the field offers zero resistance to sliding plasma along a straight line. The Maxwell stress is anisotropic: tension along $\mathbf{B}$, pressure across it.
- **You might think a straight, non-uniform field bundle has no force because it's not curved.** Curvature switches off *tension*, but a gradient in $|B|$ still gives a *pressure* force $-\nabla(B^2/2\mu_0)$. Both terms must vanish for zero force. Conversely, a curved field of **constant** $|B|$ has no pressure gradient but still has tension.
- **You might double-count and write tension as $B^2/2\mu_0$.** The tension per unit area is $T=B^2/\mu_0$, *twice* the pressure. The factor-of-two difference is real and matters for wave speeds and equilibria; it comes straight from the $B_iB_j$ versus $\tfrac12 B^2\delta_{ij}$ split of the Maxwell tensor.

## One-liner

> A magnetic field is a bundle of elastic bands: it pushes sideways with pressure $B^2/2\mu_0$ and pulls lengthwise with tension $B^2/\mu_0$, and plasma beta $\beta=p/(B^2/2\mu_0)$ says whether the bands or the plasma are calling the shots.

## Problems

**P1 (🟢)** Compute the magnetic pressure of a $B=2\ \mathrm{T}$ field and a $B=8\ \mathrm{T}$ field (roughly ITER's peak coil field), each in pascals and in atmospheres ($1\ \mathrm{atm}=1.01\times10^{5}\ \mathrm{Pa}$). By what factor does going from 2 T to 8 T change the mechanical load on the magnet?

**P2 (🟡)** A patch of the solar corona has $n\approx10^{15}\ \mathrm{m^{-3}}$, $T_e\approx T_i\approx10^{6}\ \mathrm{K}$, and $B\approx10^{-2}\ \mathrm{T}$ (100 gauss). Compute the plasma pressure, the magnetic pressure, and $\beta$. Is the corona magnetically dominated or pressure-dominated, and what does that predict about the shape of coronal loops? (Use $k_B = 1.38\times10^{-23}\ \mathrm{J/K}$.)

**P3 (🔴, optional)** A coronal loop is a field line bent into an arc of radius of curvature $R_c=10^{7}\ \mathrm{m}$, with $B=10^{-2}\ \mathrm{T}$ threading plasma of mass density $\rho = n m_p$ (use $n=10^{15}\ \mathrm{m^{-3}}$, $m_p=1.67\times10^{-27}\ \mathrm{kg}$). (a) Find the tension restoring force per unit volume, $f=B^2/(\mu_0R_c)$. (b) Find the transverse acceleration $a=f/\rho$ it gives the plasma. (c) Show that $\sqrt{a\,R_c}$ equals the Alfvén speed $v_A=B/\sqrt{\mu_0\rho}$ — the speed at which the loop's tension-driven wiggles propagate ([4.3](04-03-em-alfven-waves.md)).

<details>
<summary>Solutions</summary>

**P1** With $\mu_0=4\pi\times10^{-7}$, so $2\mu_0 = 2.51\times10^{-6}$:

$$B=2\ \mathrm{T}:\quad p_B=\frac{4}{2.51\times10^{-6}} = 1.59\times10^{6}\ \mathrm{Pa} = \frac{1.59\times10^{6}}{1.01\times10^{5}} \approx 15.7\ \mathrm{atm}.$$

$$B=8\ \mathrm{T}:\quad p_B=\frac{64}{2.51\times10^{-6}} = 2.55\times10^{7}\ \mathrm{Pa} \approx 252\ \mathrm{atm}.$$

Since $p_B\propto B^2$, going from 2 T to 8 T (a factor of 4 in $B$) multiplies the load by $4^2=16$.

*Check.* Units: $\mathrm{T^2/(T\,m/A)} = \mathrm{T\,A/m} = (\mathrm{kg/(A\,s^2)})(\mathrm{A/m}) = \mathrm{kg/(m\,s^2)} = \mathrm{Pa}$ ✓. And $252/15.7 = 16$ ✓.

**P2** Thermal energy: $k_BT = 1.38\times10^{-23}\times10^{6} = 1.38\times10^{-17}\ \mathrm{J}$. Plasma pressure (two species, equal $T$):

$$p = 2nk_BT = 2\,(10^{15})(1.38\times10^{-17}) = 2.76\times10^{-2}\ \mathrm{Pa}.$$

Magnetic pressure:

$$p_B = \frac{(10^{-2})^2}{2.51\times10^{-6}} = \frac{10^{-4}}{2.51\times10^{-6}} \approx 39.8\ \mathrm{Pa}.$$

$$\beta = \frac{p}{p_B} = \frac{2.76\times10^{-2}}{39.8} \approx 6.9\times10^{-4}.$$

$\beta\approx7\times10^{-4}\ll1$: the corona is strongly **magnetically dominated**. The plasma is far too feeble to bend the field, so it can only slide along whatever field lines exist — which is exactly why coronal loops in EUV images trace out smooth magnetic arcs rather than blobby pressure structures.

*Check.* Order of magnitude: coronal $\beta\sim10^{-3}$ is the textbook value ✓. Units of $p$: $\mathrm{m^{-3}\cdot J} = \mathrm{J/m^3} = \mathrm{Pa}$ ✓.

**P3** (a) Tension restoring force per unit volume:

$$f = \frac{B^2}{\mu_0R_c} = \frac{(10^{-2})^2}{(4\pi\times10^{-7})(10^{7})} = \frac{10^{-4}}{12.57} \approx 7.96\times10^{-6}\ \mathrm{N/m^3}.$$

(b) Mass density $\rho = nm_p = 10^{15}\times1.67\times10^{-27} = 1.67\times10^{-12}\ \mathrm{kg/m^3}$. Transverse acceleration:

$$a = \frac{f}{\rho} = \frac{7.96\times10^{-6}}{1.67\times10^{-12}} \approx 4.8\times10^{6}\ \mathrm{m/s^2}.$$

(c) $a\,R_c = \dfrac{B^2}{\mu_0R_c\,\rho}\,R_c = \dfrac{B^2}{\mu_0\rho}$, so

$$\sqrt{a\,R_c} = \frac{B}{\sqrt{\mu_0\rho}} = v_A = \frac{10^{-2}}{\sqrt{(4\pi\times10^{-7})(1.67\times10^{-12})}} = \frac{10^{-2}}{1.45\times10^{-9}} \approx 6.9\times10^{6}\ \mathrm{m/s}.$$

The tension restoring force divided by inertia sets a characteristic speed of $\sim6900\ \mathrm{km/s}$ — the coronal Alfvén speed, the pace at which a plucked field line's transverse ripple runs along the loop.

*Check.* $a\,R_c = 4.8\times10^{6}\times10^{7} = 4.8\times10^{13}$, and $v_A^2 = (6.9\times10^{6})^2 = 4.8\times10^{13}$ ✓. The tension $T=B^2/\mu_0$ over density $\rho$ giving a wave speed $\sqrt{T/\rho}$ is exactly the stretched-string result — magnetic tension is a string tension.

</details>

## Flashback

**From Lesson 3.2 (frozen-in flux):** A flux tube in a perfectly conducting plasma has length $L_0$, cross-sectional area $A_0$, and carries a uniform field $B_0=0.1\ \mathrm{T}$. A flow stretches the tube to three times its length, $L=3L_0$, while the plasma stays incompressible (tube volume $A L$ fixed). What is the new field strength $B$ inside the tube? (Fresh variant — different stretch factor and framing.)

<details>
<summary>Solution</summary>

Frozen-in flux says the magnetic flux threading the co-moving tube is conserved: $\Phi = B\,A = \text{const}$, so $B_0A_0 = B\,A$. Incompressibility fixes the volume: $A_0L_0 = A\,L$, hence $A = A_0L_0/L = A_0/3$. Therefore

$$B = B_0\,\frac{A_0}{A} = B_0\,\frac{L}{L_0} = 3B_0 = 0.3\ \mathrm{T}.$$

Stretching a frozen-in flux tube at constant volume **amplifies** the field in proportion to the stretch — the field lines are dragged closer together as the tube thins. This is the germ of the dynamo mechanism (stretch-and-fold field amplification, [5.4](../../plasma-physics/syllabus.md)).

*Check.* Flux is unchanged: $B\,A = 3B_0\cdot A_0/3 = B_0A_0$ ✓. Limit: a stretch factor of 1 gives $B=B_0$, no change, as it must.

</details>

## Connections

- **Backward:** this rewrites the $\mathbf{J}\times\mathbf{B}$ force of the [ideal-MHD momentum equation (3.2)](03-02-ideal-mhd-frozen-flux.md), and the plasma pressure $p$ is the second velocity moment of $f$ from [2.1](02-01-distribution-function-moments.md) — the same $nk_BT$ that [`stat-mech`](../../stat-mech/syllabus.md) calls pressure.
- **Forward:** pressure balance $p+B^2/2\mu_0=\text{const}$ is the backbone of [3.4 MHD equilibrium](03-04-mhd-equilibrium-pinches.md) (θ- and Z-pinches), and "good vs bad curvature" in [3.5 stability](03-05-mhd-stability-energy-principle.md) is literally whether tension helps or hurts. Magnetic tension is the restoring force for the shear Alfvén wave in [4.3](04-03-em-alfven-waves.md), with speed $v_A=\sqrt{T/\rho}$.
- **Sideways:** magnetic tension over density is a stretched-string tension over linear density — Alfvén waves are the magnetic analogue of waves on a string, and the same $\sqrt{\text{tension}/\text{inertia}}$ that sets the sound speed in [`fluid-dynamics`](../../fluid-dynamics/syllabus.md) sets $v_A$ here. The slingshot release of stored tension when curved field lines snap straight is the energy source in magnetic reconnection ([5.4](../../plasma-physics/syllabus.md)) and solar flares.
