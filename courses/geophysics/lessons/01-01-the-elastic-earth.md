# Geophysics · Lesson 1.1: The elastic Earth

> ⏱ ~15 min · Module 1: Seismology & Earth structure · Builds on: [mechanics-refresher](../../mechanics-refresher/syllabus.md), [mechanics-of-materials 1.1](../../mechanics-of-materials/lessons/01-01-normal-shear-stress.md) · Unlocks: [1.2](01-02-seismic-wave-zoo.md), [1.3](01-03-wave-equation-ray-theory.md)

## Why this matters

Everything we know about the Earth below about 12 km — the depth of the deepest hole ever drilled — we know because the planet rings. An earthquake deposits elastic energy into the rock, the rock carries it as waves, and a seismometer on the far side records what the waves picked up on the way. To read that record you need to know what "elastic" buys you quantitatively: how much a rock deforms under a given push, and in what direction.

The payoff is unreasonably good. An isotropic elastic solid is described by exactly **two** independent constants, and seismology measures exactly **two** wave speeds. That is not a coincidence you can afford to skip past — it is the reason a seismogram recorded in Peru can tell you the rigidity of rock 2000 km beneath the Pacific.

## The idea

**Stress is force per unit area, but it needs two directions, not one.** Pressure in a fluid needs one number because a fluid pushes perpendicular to any surface you imagine, with the same strength whichever way the surface faces. Rock does not. Push on a block of rock and the force transmitted across an internal plane depends both on *which plane* you pick and on *which direction* the force points across it. Two directions means two indices: $\sigma_{ij}$, the $i$-th component of force per unit area on the plane whose normal points along $j$.

**Strain is the response, and it comes in exactly two flavours.** Take any small blob of rock and deform it. Whatever you did can be split into two independent things: you changed its **volume**, and you changed its **shape**. Nothing else is possible. Squeezing a sponge uniformly from all sides is pure volume change; shearing a deck of cards sideways is pure shape change at constant volume.

**Two kinds of deformation, two moduli, two wave speeds.** The resistance to volume change is the **bulk modulus** $K$; the resistance to shape change is the **shear modulus** $\mu$, also called the rigidity. That is the whole constitutive story for an isotropic solid. And a seismic wave is precisely a deformation propagating: a P wave compresses (volume change, plus some shape change), an S wave shears (pure shape change). So the P speed involves both moduli and the S speed involves only $\mu$.

**Which immediately explains the single most important fact about the Earth's interior.** A liquid has $\mu = 0$ — pour it into any shape and it offers no resistance. So S waves cannot travel through liquid. The Earth's outer core kills S waves stone dead, and that one observation, requiring no mathematics beyond this paragraph, is how we know 2260 km of the planet is molten.

## The formal version

**The stress tensor.** For a plane with unit normal $\hat{\mathbf n}$, the traction (force per unit area) is $t_i = \sigma_{ij}n_j$, summing over repeated indices. The nine components $\sigma_{ij}$ form the **stress tensor**. Diagonal entries are normal stresses (pushes and pulls perpendicular to the face), off-diagonal entries are shear stresses.

$$\sigma_{ij} = \sigma_{ji}.$$

*In words: the stress tensor is symmetric — six independent numbers, not nine.* If it were not, the net torque on a shrinking cube would not vanish and the cube would spin up without bound.

**Sign convention.** Geophysics inherits the engineering convention: **tension positive**. Since the Earth's interior is overwhelmingly in compression, most stresses you meet carry a minus sign. Pressure is $p = -\tfrac13\sigma_{kk}$, one third of the trace with the sign flipped.

**The strain tensor.** If a point originally at $\mathbf x$ moves to $\mathbf x + \mathbf u(\mathbf x)$, the **infinitesimal strain tensor** is the symmetric part of the displacement gradient:

$$e_{ij} = \tfrac12\left(\frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i}\right).$$

*In words: strain measures how much neighbouring points move relative to one another, with pure rotation deliberately subtracted out.* The antisymmetric part is a rigid rotation, which no material resists, so it must not appear.

The trace is the fractional volume change, called the **dilatation**:

$$\theta = e_{kk} = \nabla\cdot\mathbf u = \frac{\Delta V}{V}.$$

**Hooke's law, isotropic.** For small strains in a material with no preferred direction:

$$\boxed{\ \sigma_{ij} = \lambda\,\theta\,\delta_{ij} + 2\mu\,e_{ij}\ }$$

*In words: the stress is a volume-change term acting equally in all directions, plus a term proportional to the strain itself.* Here $\lambda$ and $\mu$ are the **Lamé parameters**; $\mu$ is the shear modulus, and $\lambda$ has no clean physical meaning on its own but makes the algebra tidy.

**The moduli, and how they convert.** Any two of the following determine the rest. Taking $\lambda$ and $\mu$ as primitive:

| Modulus | Meaning | In terms of $\lambda,\mu$ |
|---|---|---|
| $\mu$ | shear modulus (rigidity) — resistance to shape change | $\mu$ |
| $K$ | bulk modulus (incompressibility) — resistance to volume change | $K = \lambda + \tfrac{2}{3}\mu$ |
| $E$ | Young's modulus — stress over strain in a uniaxial pull | $E = \dfrac{\mu(3\lambda+2\mu)}{\lambda+\mu}$ |
| $\nu$ | Poisson's ratio — sideways bulge per unit axial squeeze | $\nu = \dfrac{\lambda}{2(\lambda+\mu)}$ |

**The Poisson solid.** Most crustal and mantle rock has $\lambda \approx \mu$, which gives $\nu = 1/4$ exactly. This is the standard idealization and, as [1.3](01-03-wave-equation-ray-theory.md) shows, it forces $v_p/v_s = \sqrt3 \approx 1.732$ — the ratio you will use every time you locate an earthquake.

**Typical values.** For upper-crustal rock: $\mu \approx 30$ GPa, $K \approx 55$ GPa, $\rho \approx 2700\ \mathrm{kg\,m^{-3}}$. For upper mantle: $\mu \approx 70$ GPa, $K \approx 130$ GPa, $\rho \approx 3300$. For the outer core: $\mu = 0$, $K \approx 650$ GPa, $\rho \approx 10{,}000$.

## Picture

![A cube carrying normal stresses on three faces and one shear stress, labelled as nine components of which six are independent because the tensor is symmetric. To the right, an equals sign and two boxes. The first shows a square shrinking uniformly to a smaller dashed square with inward arrows on all four sides, labelled as the isotropic part: shape kept, volume shrinks, resisted by the bulk modulus K, and noting that P waves must do this so they feel K. The second shows a square sheared into a dashed parallelogram by opposing arrows top and bottom, labelled as the deviatoric part: volume kept, shape changes, resisted by the shear modulus mu, and noting that a liquid has mu equal to zero so S waves die in it](assets/01-01-fig1.svg)

Two independent moduli, two seismic wave speeds. The whole of seismic Earth structure lives in that match.

## Worked examples

**Example 1 (mechanical — from wave speeds to moduli).** A crustal rock gives $v_p = 6.00\ \mathrm{km\,s^{-1}}$, $v_s = 3.46\ \mathrm{km\,s^{-1}}$, $\rho = 2700\ \mathrm{kg\,m^{-3}}$. Find $\mu$, $\lambda$, $K$ and $\nu$. (The wave-speed formulas are derived in [1.3](01-03-wave-equation-ray-theory.md); take them as given here.)

$$v_s = \sqrt{\mu/\rho} \;\Rightarrow\; \mu = \rho v_s^2 = 2700 \times (3460)^2 = 2700\times1.197\times10^{7} = 3.23\times10^{10}\ \mathrm{Pa} = 32.3\ \mathrm{GPa}.$$

$$v_p = \sqrt{(\lambda+2\mu)/\rho} \;\Rightarrow\; \lambda + 2\mu = \rho v_p^2 = 2700\times3.60\times10^{7} = 9.72\times10^{10}\ \mathrm{Pa} = 97.2\ \mathrm{GPa}.$$

$$\lambda = 97.2 - 2(32.3) = 32.6\ \mathrm{GPa}.$$

So $\lambda \approx \mu$ — this rock is a Poisson solid to within the precision of the inputs. Then

$$K = \lambda + \tfrac23\mu = 32.6 + 21.5 = 54.1\ \mathrm{GPa}, \qquad \nu = \frac{\lambda}{2(\lambda+\mu)} = \frac{32.6}{2(64.9)} = 0.251.$$

Notice what just happened: **two travel-time measurements and a density gave the complete elastic description of rock we will never touch.** Every number in the interior of the Earth is obtained this way.

**Example 2 (why you'd care — how much does the crust actually squash?).** A column of crust sits under 3 km of rock, hence a confining pressure of roughly $p = \rho g h = 2700\times9.81\times3000 = 7.9\times10^{7}\ \mathrm{Pa} = 79\ \mathrm{MPa}$. By how much is it compressed, and what does that imply about the "small strain" assumption?

Volume strain under hydrostatic pressure:

$$\theta = \frac{\Delta V}{V} = -\frac{p}{K} = -\frac{7.9\times10^{7}}{5.41\times10^{10}} = -1.46\times10^{-3}.$$

**About 0.15 percent.** And this is at 3 km depth, where the pressure is already enormous by human standards. Two consequences:

*First, linear elasticity is spectacularly safe for seismology.* Seismic waves carry strains of order $10^{-6}$ near a large earthquake and $10^{-9}$ at teleseismic distance — three to six orders of magnitude smaller than the static strain we just computed, which is itself tiny. The linear Hooke's law of this lesson is not an approximation you need to apologize for; it is superb.

*Second, it is not safe for the deep Earth.* At the core–mantle boundary the pressure is 136 GPa, well over twice the crustal $K$. You cannot use $\theta = -p/K$ there, because $K$ itself rises with compression — roughly $dK/dp \approx 4$ near the top of the mantle. Handling that properly is the Adams–Williamson integration of [5.1](05-01-free-oscillations-earth-density.md), and the failure of linear elasticity at depth is exactly why that lesson has to exist.

The distinction is worth naming: **the Earth is nonlinearly compressed but linearly elastic to the passing wave.** Static structure needs the nonlinearity; wave propagation on top of that structure does not.

## Watch out

- **You might think** the stress tensor's symmetry is a modelling assumption you could relax. **Actually** it follows from conservation of angular momentum for a vanishing volume element: the off-diagonal imbalance produces a torque proportional to $L^3$ while the moment of inertia goes as $L^5$, so any asymmetry gives infinite angular acceleration as $L\to0$. It is a theorem, not a choice.
- **You might think** Poisson's ratio can be anything. **Actually** thermodynamic stability requires $K>0$ and $\mu>0$, which pins $-1 < \nu < 1/2$. For real rock $\nu$ runs from about 0.2 to 0.3, and $\nu\to1/2$ is the incompressible limit ($K\to\infty$), approached by rubber and by fully saturated soft sediment — which is exactly why $v_p/v_s$ shoots up in water-saturated ground and why it is used as a fluid detector.
- **You might think** "rigidity" means "hardness" or "strength". **Actually** $\mu$ measures the *elastic stiffness* in shear — the slope at the origin — and says nothing about the stress at which the rock breaks. Glass and steel have comparable $\mu$; their strengths differ by orders of magnitude. Strength belongs to [`geology` 2.4](../../geology/lessons/02-04-how-rock-deforms.md) and [materials-science 4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md); $\mu$ belongs here.

## One-liner

> An isotropic solid resists exactly two things — changing volume and changing shape — so two moduli describe it completely, and the two seismic wave speeds measure exactly those two numbers.

## Problems

**P1 (🟢)** Upper-mantle peridotite has $\rho = 3300\ \mathrm{kg\,m^{-3}}$, $v_p = 8.10\ \mathrm{km\,s^{-1}}$, $v_s = 4.50\ \mathrm{km\,s^{-1}}$. (a) Compute $\mu$ and $\lambda$ in GPa. (b) Compute $K$ and $\nu$. (c) Is this a Poisson solid?

**P2 (🟡)** The outer core has $v_p = 8.0\ \mathrm{km\,s^{-1}}$, $\rho = 1.0\times10^{4}\ \mathrm{kg\,m^{-3}}$, and no S waves are observed to pass through it. (a) What is $\mu$? (b) Compute $K$. (c) Compare your $K$ with the mantle value of about 130 GPa just above the boundary, and explain why the *bulk* modulus is so much larger in the core even though the material has no rigidity at all.

**P3 (🔴, bridges to [1.3](01-03-wave-equation-ray-theory.md))** (a) Show that $v_p/v_s = \sqrt{2(1-\nu)/(1-2\nu)}$. (b) Deduce that $\nu = 1/4$ gives $v_p/v_s = \sqrt3$, and that the ratio is bounded below by $\sqrt2$ for any material with $\nu\ge0$. (c) A water-saturated sediment gives $v_p/v_s = 5.0$. Find $\nu$ and comment on what the rock frame is doing.

<details>
<summary>Solutions</summary>

**P1** (a)
$$\mu = \rho v_s^2 = 3300\times(4500)^2 = 3300\times2.025\times10^{7} = 6.68\times10^{10}\ \mathrm{Pa} = 66.8\ \mathrm{GPa}.$$
$$\lambda + 2\mu = \rho v_p^2 = 3300\times(8100)^2 = 3300\times6.561\times10^{7} = 2.165\times10^{11}\ \mathrm{Pa} = 216.5\ \mathrm{GPa}.$$
$$\lambda = 216.5 - 133.7 = 82.8\ \mathrm{GPa}.$$

(b)
$$K = \lambda + \tfrac23\mu = 82.8 + 44.5 = 127.3\ \mathrm{GPa}.$$
$$\nu = \frac{\lambda}{2(\lambda+\mu)} = \frac{82.8}{2(149.6)} = \frac{82.8}{299.2} = 0.277.$$

(c) Not quite: $\lambda/\mu = 1.24$, and $\nu = 0.277$ rather than 0.250. Correspondingly $v_p/v_s = 8.10/4.50 = 1.80$ rather than 1.732. The Poisson-solid idealization is good to a few percent in the mantle, which is why it survives as a working assumption — but it is an idealization, and the *departure* from it is itself a measurement, carrying information about composition and temperature.

**P2** (a) $\mu = 0$. No S waves propagate, and $v_s = \sqrt{\mu/\rho}$ can only vanish if the rigidity does. This is a liquid.

(b) With $\mu = 0$, $\lambda = K$ and $v_p = \sqrt{K/\rho}$:
$$K = \rho v_p^2 = 1.0\times10^{4}\times(8000)^2 = 1.0\times10^{4}\times6.4\times10^{7} = 6.4\times10^{11}\ \mathrm{Pa} = 640\ \mathrm{GPa}.$$

(c) The two moduli measure unrelated things. **Rigidity is about whether atoms resist being slid past one another; incompressibility is about whether they resist being pushed closer together.** A liquid metal has lost the first entirely — the atoms have no fixed neighbours — while retaining and indeed hugely amplifying the second, because at 136 GPa of ambient pressure the atoms are already jammed against their electron shells and squeezing them further is extremely costly. Note the direction of the surprise: the naive expectation is that a liquid is "softer" than a solid in every sense, and half of that is exactly backwards. The core is the least rigid and the least compressible material in the planet at the same time.

**P3** (a) Start from $v_p^2/v_s^2 = (\lambda+2\mu)/\mu$. From the table, $\nu = \lambda/[2(\lambda+\mu)]$; solve for $\lambda$ in terms of $\mu$ and $\nu$:
$$2\nu(\lambda+\mu) = \lambda \;\Rightarrow\; \lambda(1-2\nu) = 2\nu\mu \;\Rightarrow\; \frac{\lambda}{\mu} = \frac{2\nu}{1-2\nu}.$$
Then
$$\frac{v_p^2}{v_s^2} = \frac{\lambda}{\mu} + 2 = \frac{2\nu}{1-2\nu} + 2 = \frac{2\nu + 2 - 4\nu}{1-2\nu} = \frac{2 - 2\nu}{1-2\nu} = \frac{2(1-\nu)}{1-2\nu}.$$
$$\frac{v_p}{v_s} = \sqrt{\frac{2(1-\nu)}{1-2\nu}}. \quad\checkmark$$

(b) At $\nu = 1/4$: $2(1-0.25)/(1-0.5) = 1.5/0.5 = 3$, so $v_p/v_s = \sqrt3$. ✓

The ratio is increasing in $\nu$ on $[0,\tfrac12)$: the numerator falls but the denominator falls twice as fast. So its minimum over $\nu\ge0$ is at $\nu = 0$, giving $2(1)/1 = 2$ and $v_p/v_s = \sqrt2 \approx 1.414$. **No ordinary material transmits P waves at less than $\sqrt2$ times its S-wave speed.** (Materials with $\nu<0$ — auxetics — do exist and are engineered, but no rock is one.)

(c) $$25 = \frac{2(1-\nu)}{1-2\nu} \;\Rightarrow\; 25 - 50\nu = 2 - 2\nu \;\Rightarrow\; 23 = 48\nu \;\Rightarrow\; \nu = 0.479.$$

That is very close to the incompressible limit $\nu = 1/2$, and the interpretation is direct: **the shear modulus has nearly collapsed while the bulk modulus has not.** Explicitly, $\lambda/\mu = 2\nu/(1-2\nu) = 0.958/0.042 = 23$. The pore water carries the compression — water is stiff in bulk, $K \approx 2.2$ GPa — but water has zero rigidity, so the shear resistance comes only from the grain-to-grain contacts of a weak, uncemented frame. Hence the enormous ratio.

This is the working basis of a real technique: because $v_p$ is sensitive to pore fluid and $v_s$ is essentially blind to it, the *ratio* $v_p/v_s$ is a fluid indicator. Reflection surveys ([6.2](06-02-reflection-seismics.md)) exploit exactly this to distinguish gas-, oil- and water-filled porosity, and the same signal in earthquake seismology marks fluid-rich fault zones.

</details>

## Connections

- **Backward:** the stress tensor, its symmetry and Mohr's circle are [mechanics-of-materials 1.1](../../mechanics-of-materials/lessons/01-01-normal-shear-stress.md) and [4.2](../../mechanics-of-materials/lessons/04-02-mohrs-circle.md); the stress–strain curve and the moduli as material properties are [materials-science 4.1](../../materials-science/lessons/04-01-elastic-behavior-stress-strain.md). This lesson owns the tensor form of Hooke's law and the two-modulus reduction that seismology needs.
- **Forward:** [1.2](01-02-seismic-wave-zoo.md) turns the two moduli into the two body-wave types, and [1.3](01-03-wave-equation-ray-theory.md) derives the speeds. Every modulus here reappears in [5.1](05-01-free-oscillations-earth-density.md), where the seismic parameter $\Phi = K/\rho$ built from these two speeds is what converts a velocity model into a density model.
- **Sideways:** whether rock actually *behaves* elastically — and when it instead fractures or flows — is [`geology` 2.4](../../geology/lessons/02-04-how-rock-deforms.md), which owns the brittle–ductile transition and cites this lesson for the tensor machinery. On timescales of millions of years the same mantle that transmits an S wave in seconds flows like a fluid; reconciling those two facts is the Maxwell time of [4.6](04-06-mantle-rheology-post-glacial-rebound.md).
