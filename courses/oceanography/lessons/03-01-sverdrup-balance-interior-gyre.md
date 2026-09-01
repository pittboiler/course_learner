# Physical Oceanography · Lesson 3.1: The Sverdrup balance and the interior gyre

> ⏱ ~15 min · Module 3: The wind-driven circulation · Builds on: [2.4](02-04-ekman-pumping-wind-stress-curl.md), [2.5](02-05-potential-vorticity-stratified-ocean.md) · Unlocks: [3.2](03-02-western-boundary-currents-stommel-munk.md), [3.5](03-05-coastal-upwelling-eastern-boundary.md)

## Why this matters

Harald Sverdrup published a two-page note in 1947 containing what is probably the single most economical result in physical oceanography: **the depth-integrated meridional transport of the ocean's interior is determined by the curl of the wind stress and nothing else.** Not by the ocean's depth, its stratification, its viscosity, its temperature, or the shape of its basin. Just $\beta V = \mathrm{curl}\,\tau/\rho_0$.

That is a startling amount of information for one line. It predicts the interior transport of every subtropical and subpolar gyre on Earth from a wind atlas, and — verified against modern hydrographic sections — it works to within a few tens of percent almost everywhere the assumptions hold. It also creates a puzzle it cannot solve: the interior flow it predicts is equatorward *everywhere* across a subtropical basin, which means mass is piling up at the equatorward edge and being lost at the poleward edge. Something must return it, and the Sverdrup balance says nothing about what. That gap is the Gulf Stream, and [3.2](03-02-western-boundary-currents-stommel-munk.md) fills it.

## The idea

**Squashed columns move toward the equator.** [2.4](02-04-ekman-pumping-wind-stress-curl.md) showed that the subtropical wind curl pumps water *down* at the base of the Ekman layer. The ocean below has a floor, so a column being pushed down from above and unable to go anywhere is being **squashed**. [2.5](02-05-potential-vorticity-stratified-ocean.md) says a squashed column must reduce its absolute spin, and since the interior has almost no relative vorticity to give up, the only way to reduce $f$ is to **move equatorward**. That is the whole physical content: *Ekman pumping down, interior flow toward the equator.*

**And the rate is set by how fast $f$ changes.** The further you have to travel to shed a given amount of planetary vorticity, the faster you must go. That rate is $\beta = df/dy$, and it sits in the denominator: a small $\beta$ demands a large transport. This is why the Sverdrup transport grows toward high latitudes even when the wind curl does not.

**One boundary condition, and it must be the eastern one.** Getting from the local relation $\beta V = \mathrm{curl}\,\tau/\rho_0$ to an actual circulation requires integrating zonally, which needs a boundary condition. There are two coasts to choose from and choosing changes everything: integrating from the east gives a smooth interior with a discrepancy at the west, which a narrow boundary current can absorb; integrating from the west gives a discrepancy at the east, which — as [2.5](02-05-potential-vorticity-stratified-ocean.md)'s group-velocity argument shows — cannot be absorbed, because energy radiates away from the eastern boundary rather than being trapped against it. **The mathematics permits either choice; the physics permits only one.**

**What the balance is silent about.** It gives the *depth-integrated* transport, so it says nothing about how the flow is distributed in the vertical. It gives the *interior*, so it says nothing about boundary currents. And it is a steady balance, so it says nothing about how long adjustment takes. All three silences are filled elsewhere in this module.

## The formal version

**Derivation.** Take the geostrophic relations $fu = -\rho_0^{-1}p_y$ and $fv = \rho_0^{-1}p_x$ and compute the horizontal divergence, remembering that $f$ varies with $y$:

$$\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = -\frac{1}{\rho_0}\frac{\partial}{\partial x}\!\left(\frac{p_y}{f}\right) + \frac{1}{\rho_0}\frac{\partial}{\partial y}\!\left(\frac{p_x}{f}\right) = -\frac{\beta}{\rho_0 f^2}p_x = -\frac{\beta}{f}v.$$

Combine with continuity $u_x + v_y + w_z = 0$:

$$\boxed{\ \beta v = f\frac{\partial w}{\partial z}\ }$$

*In words: meridional motion is exactly what a stretching or squashing column must do — the planetary vorticity equation, and the differential form of PV conservation from [2.5](02-05-potential-vorticity-stratified-ocean.md).*

Now integrate in $z$ from a flat bottom at $-H$ (where $w=0$) to the base of the Ekman layer at $-d$ (where $w = w_E$), and add the Ekman transport itself. Writing $V$ for the **total** depth-integrated meridional transport:

$$\boxed{\ \beta V = \frac{1}{\rho_0}\,\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau\ }$$

*In words: the north–south transport of the whole water column, per unit east–west distance, is the wind-stress curl divided by density and $\beta$.*

It is worth seeing the two pieces cancel. The geostrophic interior alone gives $V_g = fw_E/\beta$, and expanding $w_E = \nabla\cdot\mathbf{M}_E$ with $f$ varying yields

$$V_g = \frac{1}{\rho_0\beta}\,\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau + \frac{\tau_x}{\rho_0 f}.$$

The second term is exactly minus the Ekman transport $M_{E,y} = -\tau_x/(\rho_0f)$. **The Ekman layer's own transport is cancelled by an equal and opposite geostrophic return flow in the interior**, leaving only the curl term. That cancellation is why the Sverdrup relation is so clean, and it is easy to miss.

**The Sverdrup streamfunction.** Define $\psi$ by $V = \partial\psi/\partial x$, $U = -\partial\psi/\partial y$. Integrating from the eastern boundary at $x = x_E$, where $\psi = 0$ because no flow crosses the coast:

$$\psi(x,y) = -\frac{1}{\rho_0\beta}\int_x^{x_E}\left(\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau\right)dx'.$$

*In words: the streamfunction at any point is the accumulated wind curl between that point and the eastern coast.* Its maximum magnitude — reached at the western boundary — **is** the gyre's transport.

**The idealized basin.** For $\tau_x(y) = -\tau_0\cos(\pi y/L)$ across a basin of meridional extent $L$ (easterlies at $y=0$, westerlies at $y=L$) and zonal width $L_x$:

$$\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau = -\frac{\partial\tau_x}{\partial y} = -\frac{\tau_0\pi}{L}\sin\!\left(\frac{\pi y}{L}\right),$$

$$V(y) = -\frac{\tau_0\pi}{\rho_0\beta L}\sin\!\left(\frac{\pi y}{L}\right), \qquad \psi_{\max} = \frac{\tau_0\pi L_x}{\rho_0\beta L}.$$

$V < 0$ throughout: **equatorward everywhere in the interior**, peaking at mid-basin. There is no latitude at which the interior returns anything.

**When it fails.** The derivation assumed steady, linear, frictionless, geostrophic flow over a flat bottom with a closed eastern boundary. It therefore fails: in western boundary currents (friction and nonlinearity), in the Southern Ocean (no eastern boundary — see [2.2](02-02-thermal-wind-acc.md)), within a few degrees of the equator ($\beta$-plane and geostrophy both marginal), over strong topography (the flat-bottom assumption), and on timescales shorter than the basin's Rossby-wave crossing time ([2.5](02-05-potential-vorticity-stratified-ocean.md)) — which at mid-latitudes is a decade, so the Sverdrup balance is a statement about decadal means, not about any particular year.

## Picture

![On the left, the zonal wind stress plotted against latitude: westward trades at 15 N, zero near 30 N, eastward westerlies at 45 N. On the right, a rectangular basin from 15 to 45 N with a solid eastern boundary. Five blue arrows in the interior all point equatorward, longest at mid-basin, showing the Sverdrup transport of 10.3 square metres per second totalling 52 sverdrups. A thick coral arrow hugging the western boundary points poleward and is labelled with the 52 sverdrups that must return, and a question about why it is there and how narrow it is](assets/03-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — a whole gyre from a wind profile).** A subtropical basin centred on 30°N has meridional extent $L = 3000\ \mathrm{km}$, zonal width $L_x = 5000\ \mathrm{km}$, and $\tau_x(y) = -\tau_0\cos(\pi y/L)$ with $\tau_0 = 0.2\ \mathrm{N\,m^{-2}}$. Take $\rho_0 = 1025\ \mathrm{kg\,m^{-3}}$.

(a) *$\beta$ at 30°N.*
$$\beta = \frac{2\Omega\cos\phi}{R} = \frac{2\times7.292\times10^{-5}\times\cos30^\circ}{6.371\times10^{6}} = \frac{1.263\times10^{-4}}{6.371\times10^{6}} = 1.982\times10^{-11}\ \mathrm{m^{-1}\,s^{-1}}.$$

(b) *Ekman transport and pumping.* At the southern edge, $\tau_x = -\tau_0$, so with $f = 7.29\times10^{-5}$:
$$M_{E,y} = \frac{-\tau_x}{\rho_0f} = \frac{0.2}{1025\times7.29\times10^{-5}} = 2.68\ \mathrm{m^2\,s^{-1}}\ \text{northward}.$$

Pumping peaks at mid-basin:
$$|w_E| = \frac{\tau_0\pi}{\rho_0 fL} = \frac{0.6283}{1025\times7.29\times10^{-5}\times3\times10^{6}} = \frac{0.6283}{2.242\times10^{5}} = 2.80\times10^{-6}\ \mathrm{m\,s^{-1}} = 88\ \mathrm{m\,yr^{-1}}\ \text{downward}.$$

(c) *Sverdrup interior transport.*
$$|V|_{\max} = \frac{\tau_0\pi}{\rho_0\beta L} = \frac{0.6283}{1025\times1.982\times10^{-11}\times3\times10^{6}} = \frac{0.6283}{6.096\times10^{-2}} = 10.3\ \mathrm{m^2\,s^{-1}},$$

equatorward. Integrating across the basin:

$$\psi_{\max} = |V|_{\max}\,L_x = 10.3\times5\times10^{6} = 5.15\times10^{7}\ \mathrm{m^3\,s^{-1}} = \mathbf{51.5\ Sv}.$$

(d) *The return.* Mass conservation demands that 51.5 Sv flow poleward somewhere outside the interior. The Sverdrup balance cannot say where.

*Comparison with the Gulf Stream.* Observed: 30 Sv through the Florida Strait, 90 Sv at Cape Hatteras. The Sverdrup prediction of 51.5 Sv sits between them, and the reason it does is worth stating. The Florida Strait carries only the part of the return flow that comes from the *southern* portion of the gyre plus the Antarctic-origin overturning inflow; by Cape Hatteras the current has accumulated the full Sverdrup return **plus** a large recirculation gyre — water that leaves the Gulf Stream, loops back south, and rejoins, contributing to the transport without contributing to the basin-scale budget at all. **Recirculation is why measured western boundary transports systematically exceed the Sverdrup prediction**, and quantifying it is [3.3](03-03-gulf-stream-kuroshio.md)'s business.

**Example 2 (why you'd care — the eastern boundary is not a choice).** Suppose you integrate from the *western* boundary instead, setting $\psi = 0$ at $x = x_W$. Show what goes wrong, and identify the physical principle that rules it out.

*The algebra.* With $\psi(x_W, y) = 0$,

$$\psi(x,y) = \frac{1}{\rho_0\beta}\int_{x_W}^{x}\left(\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau\right)dx' ,$$

which is a perfectly good solution of the same differential equation. The interior flow is the same $V(y)$; only the constant differs. But now $\psi \ne 0$ at the eastern boundary — its value there is $-51.5$ Sv at mid-basin — so 51.5 Sv is flowing *into the eastern coast*. To fix it you would need a narrow boundary current at the **east**, hugging the coast of Portugal or California, carrying the entire gyre return.

*Why that is unphysical.* Nothing in the steady equations forbids it. The prohibition comes from asking how the ocean *reaches* a steady state. From [2.5](02-05-potential-vorticity-stratified-ocean.md), Rossby-wave group velocity is westward for long waves and eastward for short ones. A disturbance at an **eastern** boundary radiates long waves westward — information leaves, the boundary stays smooth, and no current is trapped there. A disturbance at a **western** boundary can only radiate short waves eastward, and short waves are slow and strongly dissipated, so energy accumulates against the western coast until friction can remove it. **The boundary layer forms where the waves cannot carry the energy away.**

*The point.* This is the deepest thing in the lesson. The steady Sverdrup problem is degenerate — it is a first-order equation in $x$ with two coasts, so it is over-determined by one boundary condition, and *the mathematics cannot tell you which one to drop*. The answer comes from the time-dependent problem: the boundary condition you keep is the one that the adjustment process actually enforces. Stommel's 1948 paper made this argument with friction, Rossby-wave arguments made it with radiation, and both give the same answer. Whenever a steady problem has more boundary conditions than it can accommodate, **look at how the steady state is reached** — the selection rule always lives there.

## Watch out

- **You might think** the Sverdrup transport is the flow in the surface layer. **Actually** it is the depth integral over the whole column, and the vertical distribution is left completely undetermined. In the real subtropical gyre the transport is concentrated in the top 1000 m, but nothing in this lesson says so.
- **You might think** $\beta V = \mathrm{curl}\,\tau/\rho_0$ describes the geostrophic interior only. **Actually** $V$ is the *total* transport, Ekman included, and the two contributions partially cancel as shown above. Applying the relation to the geostrophic part alone gives an extra $\tau_x/(\rho_0f)$ term that is not always small at low latitudes.
- **You might think** the balance should hold instantaneously. **Actually** it is the steady state of a system whose adjustment time is the baroclinic Rossby-wave crossing time — six years at 30°N, decades at 45°N. Comparing a single year's wind field with a single year's observed transport is not a test of Sverdrup theory.

## One-liner

> The wind's curl squashes interior water columns, which can only respond by drifting toward the equator, at a rate set entirely by how fast the planetary vorticity changes — so the depth-integrated interior transport of every gyre follows from a wind atlas alone, and the return flow it leaves unexplained is the western boundary current.

## Problems

**P1 (🟢)** At 45°N, $\beta = 1.619\times10^{-11}\ \mathrm{m^{-1}\,s^{-1}}$ and the wind-stress curl is $-2.5\times10^{-7}\ \mathrm{N\,m^{-3}}$, with $\rho_0 = 1025$. (a) Compute the Sverdrup transport $V$ and give its direction. (b) Compute the total transport across a basin 4000 km wide, in sverdrups. (c) State whether this is a subtropical or subpolar gyre.

**P2 (🟡)** Two basins have identical wind fields, but one is centred on 20°N and the other on 50°N. Take $\beta_{20} = 2.15\times10^{-11}$ and $\beta_{50} = 1.47\times10^{-11}\ \mathrm{m^{-1}\,s^{-1}}$, both with $|\mathrm{curl}\,\tau| = 2.0\times10^{-7}\ \mathrm{N\,m^{-3}}$ and $L_x = 5000\ \mathrm{km}$. (a) Compute the Sverdrup transport in each. (b) Compute the ratio, and explain in one sentence why the higher-latitude gyre transports more from the same wind. (c) The real North Atlantic subtropical gyre transports far more than the subpolar gyre, which contradicts (b). Give the reason.

**P3 (🔴, optional)** A subtropical basin at 30°N has $L = 3000\ \mathrm{km}$, $L_x = 5000\ \mathrm{km}$, $\tau_0 = 0.2\ \mathrm{N\,m^{-2}}$, $\rho_0 = 1025$, $\beta = 1.982\times10^{-11}$, and the interior flow is confined above the thermocline at 800 m. (a) Compute the mean interior meridional *velocity* at mid-basin. (b) Compute how long a water parcel takes to cross the basin from north to south in the interior. (c) The return flow through a western boundary current 100 km wide and 1000 m deep carries the full 51.5 Sv. Compute its mean speed. (d) Compute the time for a parcel to return north through the boundary current, and hence the total circuit time. (e) Comment on what the strong asymmetry between (b) and (d) implies for where in a gyre a pollutant released at the surface would spend most of its time.

<details>
<summary>Solutions</summary>

**P1** (a) $$V = \frac{1}{\rho_0\beta}\,\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau = \frac{-2.5\times10^{-7}}{1025\times1.619\times10^{-11}} = \frac{-2.5\times10^{-7}}{1.660\times10^{-8}} = -15.1\ \mathrm{m^2\,s^{-1}}.$$

Negative: **equatorward** (southward in the northern hemisphere).

(b) $$T = 15.1\times4\times10^{6} = 6.03\times10^{7}\ \mathrm{m^3\,s^{-1}} = 60.3\ \mathrm{Sv}.$$

(c) Negative curl and equatorward interior flow means downward Ekman pumping: a **subtropical**, anticyclonic gyre.

**P2** (a) $$V_{20} = \frac{2.0\times10^{-7}}{1025\times2.15\times10^{-11}} = \frac{2.0\times10^{-7}}{2.204\times10^{-8}} = 9.08\ \mathrm{m^2\,s^{-1}} \;\Longrightarrow\; 45.4\ \mathrm{Sv},$$
$$V_{50} = \frac{2.0\times10^{-7}}{1025\times1.47\times10^{-11}} = \frac{2.0\times10^{-7}}{1.507\times10^{-8}} = 13.3\ \mathrm{m^2\,s^{-1}} \;\Longrightarrow\; 66.4\ \mathrm{Sv}.$$

(b) Ratio $= 66.4/45.4 = 1.46$, which is just $\beta_{20}/\beta_{50} = 2.15/1.47 = 1.46$.

The higher-latitude gyre transports more because $\beta$ is smaller there: planetary vorticity changes more slowly with latitude, so a column must travel further — hence carry more transport — to shed the vorticity that the same pumping imposes on it.

(c) The premise of (a) is what fails: the wind fields are **not** identical. The subtropical gyre sits under the sharp transition from trades to westerlies, where the wind-stress curl is large; the subpolar gyre sits under the weaker transition from westerlies to polar easterlies. The curl over the subtropical North Atlantic exceeds that over the subpolar North Atlantic by a factor of two to three, which more than overcomes the factor of 1.5 from $\beta$. The subpolar gyre is also geometrically much smaller, so $L_x$ is smaller too. **The $\beta$ effect is real but it is a second-order term against the wind field's own structure** — which is a useful general caution about reasoning from a formula's explicit dependences while holding fixed something that is not actually fixed.

**P3** (a) $$|V|_{\max} = 10.3\ \mathrm{m^2\,s^{-1}} \quad\text{(from Example 1)},$$
$$\bar v = \frac{|V|}{H} = \frac{10.3}{800} = 1.29\times10^{-2}\ \mathrm{m\,s^{-1}} = 1.3\ \mathrm{cm\,s^{-1}}.$$

(b) The meridional extent is 3000 km, but the flow is not uniform — it goes as $\sin(\pi y/L)$ and vanishes at both ends. Using the mid-basin speed as a representative value gives a lower bound on the transit time:

$$t = \frac{3\times10^{6}}{1.29\times10^{-2}} = 2.33\times10^{8}\ \mathrm{s} = 7.4\ \mathrm{yr}.$$

(In reality, the vanishing velocity at the gyre's edges makes the true transit longer still.)

(c) $$\bar u_{\text{WBC}} = \frac{5.15\times10^{7}}{10^{5}\times10^{3}} = \frac{5.15\times10^{7}}{10^{8}} = 0.515\ \mathrm{m\,s^{-1}}.$$

(d) $$t_{\text{WBC}} = \frac{3\times10^{6}}{0.515} = 5.83\times10^{6}\ \mathrm{s} = 67\ \mathrm{days}.$$

Total circuit: $7.4\ \mathrm{yr} + 0.18\ \mathrm{yr} = 7.6\ \mathrm{yr}$, of which the boundary current accounts for **2.4 percent**.

(e) A parcel spends 97.6 percent of its circuit in the slow interior and under three percent in the western boundary current, because the same transport is squeezed through a channel 50 times narrower and moved 40 times faster.

For a surface pollutant this has a direct and well-known consequence: material released anywhere in the subtropical gyre accumulates in the **interior**, not on the boundaries, because that is where the residence time is. It is the reason the great ocean garbage patches sit in the middles of the subtropical gyres rather than washing up along the western boundaries — Ekman convergence ([2.4](02-04-ekman-pumping-wind-stress-curl.md)) carries floating material toward the gyre centre, and the slow interior circulation then holds it there for years to decades. The same logic applies to heat and to dissolved carbon: **the boundary currents move properties quickly, and the interior stores them.**

</details>

## Flashback

**From Lesson 2.4 (Ekman pumping and the wind-stress curl):** At 35°S ($f = -8.37\times10^{-5}\ \mathrm{s^{-1}}$), the zonal wind stress is $\tau_x = +0.10\ \mathrm{N\,m^{-2}}$ and increases southward (i.e. in the $-y$ direction) at a rate such that $\partial\tau_x/\partial y = -3.0\times10^{-8}\ \mathrm{N\,m^{-3}}$. Take $\rho_0 = 1025$, and $\tau_y = 0$. (a) Compute the wind-stress curl. (b) Compute $w_E$, with sign, and say whether it is upward or downward. (c) Identify the gyre type, being careful with the hemisphere.

<details>
<summary>Solution</summary>

(a) $$\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau = -\frac{\partial\tau_x}{\partial y} = +3.0\times10^{-8}\ \mathrm{N\,m^{-3}}.$$

(b) $$w_E = \frac{\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau}{\rho_0 f} = \frac{3.0\times10^{-8}}{1025\times(-8.37\times10^{-5})} = \frac{3.0\times10^{-8}}{-8.579\times10^{-2}} = -3.50\times10^{-7}\ \mathrm{m\,s^{-1}}.$$

Negative: **downward**, at $11\ \mathrm{m\,yr^{-1}}$.

(c) Downward pumping means a **subtropical** gyre — and note that in the southern hemisphere this is an *anticlockwise* (still anticyclonic) circulation, which is the South Pacific and South Atlantic subtropical gyres.

*Check the sign chain, because it is easy to get lost.* The curl came out **positive**, which in the northern hemisphere would mean upwelling and a subpolar gyre. It is $f$ being negative that flips the answer. This is exactly why [2.4](02-04-ekman-pumping-wind-stress-curl.md) insists on carrying $f$ with its sign rather than memorizing "positive curl means upwelling" — that rule is hemisphere-specific and half the ocean breaks it. The hemisphere-independent statement is the physical one: **downward pumping makes a subtropical gyre, upward makes a subpolar one**, and you get the direction of pumping from $w_E = \mathrm{curl}\,\tau/(\rho_0 f)$ with all signs retained.

</details>

## Connections

- **Backward:** $w_E$ on the right-hand side is [2.4](02-04-ekman-pumping-wind-stress-curl.md)'s Ekman pumping; the relation $\beta v = f w_z$ is the differential form of [2.5](02-05-potential-vorticity-stratified-ocean.md)'s PV conservation; and the eastern-boundary selection rule is [2.5](02-05-potential-vorticity-stratified-ocean.md)'s group-velocity asymmetry.
- **Forward:** the unexplained 51.5 Sv return is [3.2](03-02-western-boundary-currents-stommel-munk.md)'s entire subject, and the gap between the Sverdrup prediction and observed western boundary transports is [3.3](03-03-gulf-stream-kuroshio.md)'s; the interior's downward pumping is what subducts water into the thermocline in [6.2](06-02-ocean-heat-uptake-circulation.md).
- **Sideways (atmospheric science):** the atmosphere has no Sverdrup balance, because it has no lateral boundaries to close the vorticity budget against — the same structural reason the ACC has none ([2.2](02-02-thermal-wind-acc.md)). This is one of the few places where the ocean's geometry makes it *simpler* than the atmosphere rather than harder.
