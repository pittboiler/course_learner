# Computer Graphics · Lesson 3.6: Radiometry, BRDFs & the Rendering Equation

> ⏱ ~15 min · Module 3: The GPU Pipeline, Ray Tracing & Global Illumination · Builds on: [3.4 (Whitted ray tracing)](03-04-whitted-ray-tracing-reflection-refraction.md), [2.4 (Phong lighting)](02-04-lighting-diffuse-specular-phong.md), [`calc-refresher` 4.3 (spherical coordinates)](../../calc-refresher/lessons/04-03-multiple-integrals.md) · Unlocks: [3.7 (Monte Carlo path tracing)](03-07-monte-carlo-path-tracing.md)

## Why this matters

Every lighting formula so far has been a plausible recipe: a cosine here, a power there, an "ambient" constant to paper over the rest. None of them says what a pixel value *is*, so none of them can say what's missing. Put a red ball next to a white wall and the wall should glow pink; no local model can do that, and no amount of tuning $k_a$ will.

This lesson supplies the physics. It defines the one quantity a camera pixel actually measures — **radiance** — and the one function that describes how any surface reflects light — the **BRDF**. Together they give the **rendering equation**, a single integral equation that every physically based renderer, from film path tracers to modern game engines, is trying to solve. [3.7](03-07-monte-carlo-path-tracing.md) solves it.

## The idea

**Brightness is power per area per direction.** A lamp emits power. That power lands on a surface spread over an area — so "how brightly lit" is power per area. But a camera looking at a surface only catches light heading toward the lens, so what it records is power per area **per unit of direction**. That is radiance, and it has a lovely property: along an unobstructed ray it doesn't change with distance. A wall looks equally bright from 1 m and 10 m away; it just looks smaller.

**A BRDF is a surface's reflection rulebook.** For light arriving from one direction, how much goes out in each other direction? A matte surface spreads it evenly; a mirror sends it all one way; brushed metal smears it into a streak. One function of two directions describes all of these.

**The rendering equation is bookkeeping.** Light leaving a point toward your eye equals light the point emits, plus — for every direction above the surface — light arriving from that direction times the BRDF times a cosine. And light *arriving* from a direction is just light *leaving* whatever surface lies that way. So the unknown appears on both sides: the brightness of everything depends on the brightness of everything else.

## The formal version

**Solid angle.** The solid angle of a patch of directions is the area it covers on the unit sphere, in steradians (sr). In spherical coordinates with $\theta$ measured from the surface normal,

$$d\omega = \sin\theta\,d\theta\,d\phi, \qquad \int_{\text{hemisphere}} d\omega = 2\pi, \qquad \int_{\text{hemisphere}} \cos\theta\,d\omega = \pi.$$

A cone of half-angle $\theta_0$ subtends $2\pi(1 - \cos\theta_0)$. *(card: [Solid angle](../reference.md#solid-angle))*

**Radiometric quantities.**

| quantity | symbol | units | meaning |
|---|---|---|---|
| flux | $\Phi$ | W | total power |
| irradiance | $E = d\Phi/dA$ | W m$^{-2}$ | power arriving per area of surface |
| radiance | $L = \dfrac{d^2\Phi}{dA\,\cos\theta\,d\omega}$ | W m$^{-2}$ sr$^{-1}$ | power per **projected** area per solid angle |

The $\cos\theta$ in radiance measures area as seen from the direction of travel. Radiance is **constant along a ray** in empty space, and it is what a pixel records. Irradiance from incoming radiance:

$$E = \int_{\Omega} L_i(\omega)\cos\theta\,d\omega.$$

In words: add up light from every direction, each discounted by the cosine of its slant — Lambert's cosine law from [2.4](02-04-lighting-diffuse-specular-phong.md), now derived rather than asserted. *(card: [Radiance](../reference.md#radiance), [Irradiance](../reference.md#irradiance))*

**The BRDF** (bidirectional reflectance distribution function) at a point:

$$f_r(\omega_i, \omega_o) = \frac{dL_o(\omega_o)}{dE_i(\omega_i)} = \frac{dL_o(\omega_o)}{L_i(\omega_i)\cos\theta_i\,d\omega_i} \qquad [\text{sr}^{-1}].$$

In words: outgoing radiance in direction $\omega_o$ per unit of irradiance arriving from $\omega_i$. A physical BRDF is **non-negative**, **reciprocal** ($f_r(\omega_i, \omega_o) = f_r(\omega_o, \omega_i)$), and **energy conserving**:

$$\int_{\Omega} f_r(\omega_i, \omega_o)\cos\theta_o\,d\omega_o \le 1 \quad \text{for every } \omega_i.$$

*(card: [BRDF](../reference.md#brdf))*

**Lambertian BRDF.** A constant, $f_r = \rho/\pi$ with albedo $\rho \in [0, 1]$. The $\pi$ is forced by energy conservation: $\int (\rho/\pi)\cos\theta_o\,d\omega_o = (\rho/\pi)\cdot\pi = \rho$. *(card: [Lambertian BRDF](../reference.md#lambertian-brdf))*

**A normalized Phong lobe.** $\int_\Omega \cos^p\theta\,\cos\theta\,d\omega = 2\pi/(p+2)$, so the specular lobe that reflects fraction $\rho_s$ (at normal incidence) is

$$f_{\text{spec}} = \rho_s\,\frac{p + 2}{2\pi}\cos^p\alpha.$$

This is the physical version of [2.5](02-05-blinn-phong-shading-frequency-materials.md)'s remark that sharper highlights should also be brighter.

**The rendering equation** (Kajiya, 1986):

$$\boxed{\ L_o(\mathbf{x}, \omega_o) = L_e(\mathbf{x}, \omega_o) + \int_{\Omega} f_r(\mathbf{x}, \omega_i, \omega_o)\,L_i(\mathbf{x}, \omega_i)\,\cos\theta_i\,d\omega_i\ }$$

with the **transport** condition $L_i(\mathbf{x}, \omega_i) = L_o(\mathbf{x}', -\omega_i)$, where $\mathbf{x}'$ is the first surface hit by the ray from $\mathbf{x}$ in direction $\omega_i$ ([3.3](03-03-ray-casting-and-intersection.md)). $L_e$ is emitted radiance (non-zero only on lights). In words: outgoing = emitted + reflected, where reflected sums incoming radiance over the hemisphere weighted by the BRDF and the cosine, and incoming radiance is somebody else's outgoing radiance. *(card: [Rendering equation](../reference.md#rendering-equation))*

**What the earlier models were.**

- A **point light** of intensity $I$ at distance $d$ puts all its incoming radiance in one direction; the integral collapses to $f_r\,(I/d^2)\cos\theta_i$. With a Lambertian BRDF that is $(\rho/\pi)(I/d^2)\cos\theta_i$ — [2.4](02-04-lighting-diffuse-specular-phong.md)'s diffuse term with $k_d = \rho/\pi$. The "missing $\pi$" is absorbed into $k_d$ or $I$.
- **Whitted** ([3.4](03-04-whitted-ray-tracing-reflection-refraction.md)) used BRDFs that are delta functions in the mirror and refraction directions, plus point lights — the two cases where the integral has no width.
- **Ambient** is a constant guess for the integral's contribution from all non-light directions.

## Picture

![A half-circle hemisphere above a small surface patch dA at point x, with normal n pointing up. Many thin coral arrows point inward from all over the hemisphere toward x. One is highlighted with a small cone labelled L sub i of x, omega i, in cone d omega i, making angle theta i with the normal. A thick blue arrow leaves x toward the upper right, labelled L sub o of x, omega o, toward the eye. Footer: L o equals L e plus the integral over the hemisphere of f r times L i times cos theta i d omega i; each L i is the L o of whatever surface lies in direction omega i](assets/03-06-fig1.svg)

Every coral arrow is a ray that, traced backwards, ends on some other surface whose own blue arrow is given by the same equation. The picture is one instance of the equation; the scene is millions of them, all coupled.

## Worked examples

**Example 1 (mechanical): a matte floor under an overcast sky.** A uniform overcast sky has radiance $L = 1000$ W m$^{-2}$ sr$^{-1}$ in every direction above the horizon. A grey Lambertian floor has albedo $\rho = 0.5$.

*Irradiance.* $L$ is constant, so $E = L\int_\Omega\cos\theta\,d\omega = \pi L = 3142$ W m$^{-2}$.

*Outgoing radiance.* The BRDF is constant, so it comes out of the integral:

$$L_o = \frac{\rho}{\pi}\int_\Omega L\cos\theta_i\,d\omega_i = \frac{\rho}{\pi}\cdot\pi L = \rho L = 500 \text{ W m}^{-2}\text{ sr}^{-1},$$

the same in every viewing direction. The floor looks exactly half as bright as the sky — which is what albedo *means*, and shows why the $1/\pi$ has to be in the BRDF.

*Now build a courtyard.* Walls block the sky below $30°$ elevation, so the floor sees sky only for $\theta \le 60°$ from the zenith, and sees dark walls elsewhere:

$$E = L\int_0^{2\pi}\!\!\int_0^{\theta_0}\cos\theta\sin\theta\,d\theta\,d\phi = \pi L\sin^2\theta_0 = \pi L(0.75).$$

The walls remove the lowest $30°$ of sky — **half** the hemisphere's solid angle ($2\pi\cos 60° = \pi$ of $2\pi$) — but only a **quarter** of the irradiance, because low sky arrives at a grazing cosine.

**Example 2 (why you'd care): what an unnormalized highlight throws away.** Take [2.4](02-04-lighting-diffuse-specular-phong.md)'s specular term with $k_s = 1$ as a BRDF lobe around the normal, $f = \cos^p\alpha$ (dropping any constant), and ask what fraction of normally incident light it reflects:

$$\int_\Omega \cos^p\theta\,\cos\theta\,d\omega = 2\pi\int_0^{\pi/2}\cos^{p+1}\theta\sin\theta\,d\theta = \frac{2\pi}{p+2}.$$

| $p$ | 10 | 50 | 100 |
|---|---|---|---|
| reflected fraction $2\pi/(p+2)$ | $0.524$ | $0.121$ | $0.062$ |

An artist who raises $p$ from 10 to 100 to make plastic look shinier has, without meaning to, made it reflect **eight times less** light. Scaling by $(p+2)/(2\pi)$ keeps total reflection fixed: the highlight gets narrower *and* taller. In a Monte Carlo renderer the unnormalized version isn't just dim — it makes shiny objects look darker than matte ones of the same albedo, which is backwards.

## Watch out

- **You might think** irradiance and radiance are two names for brightness — **but actually** irradiance is what a surface *receives* (per area, from all directions) and radiance is what travels along *one ray*. A pixel records radiance; a light meter pressed against a surface records irradiance. They differ by a cosine-weighted integral over the hemisphere.
- **You might think** a Lambertian BRDF with albedo $\rho$ should equal $\rho$ — **but actually** it is $\rho/\pi$. The BRDF is per steradian, and the cosine-weighted hemisphere has "size" $\pi$, not 1. Setting $f_r = \rho$ makes every diffuse surface reflect $\pi \approx 3.14$ times the energy it receives, and a path tracer with such surfaces never converges.
- **You might think** the rendering equation has an integral you can just evaluate — **but actually** the unknown $L$ appears inside the integral (via $L_i$ at other points), so it is an **integral equation**, not an integral. Expanding it gives an infinite sum over light paths of every length, which is exactly what [3.7](03-07-monte-carlo-path-tracing.md) samples.

## One-liner

> A pixel measures radiance; a surface is described by its BRDF ($\rho/\pi$ if matte); and outgoing radiance equals emission plus the hemisphere integral of BRDF $\times$ incoming radiance $\times \cos\theta$ — where incoming is someone else's outgoing.

## Problems

**P1 (🟢)** The Sun's angular radius is $0.2665°$, and on a clear day it delivers $E = 1000$ W m$^{-2}$ to a surface facing it.
(a) What solid angle does the Sun subtend?
(b) Estimate the Sun's radiance.
(c) With the Sun $30°$ from the zenith, what radiance does a Lambertian road of albedo $0.3$ send toward a camera (ignore sky light)?

**P2 (🟡)** A floor sits under a uniform sky of radiance $L$ that is visible only within a cone of half-angle $\theta_0$ around the zenith.
(a) Derive $E(\theta_0) = \pi L\sin^2\theta_0$.
(b) Evaluate the fraction of full-sky irradiance for $\theta_0 = 30°, 60°, 90°$.
(c) What fraction of the full hemisphere's **solid angle** does the $30°$ cap cover? Explain the difference from (b) in one sentence.

**P3 (🔴)** A material is modelled as
$$f_r = \frac{\rho_d}{\pi} + \rho_s\,\frac{p + 2}{2\pi}\cos^p\alpha,$$
with $\alpha$ the angle from the mirror direction, and $\rho_d = 0.8$, $\rho_s = 0.5$, $p = 50$.
(a) Show that at normal incidence the specular lobe alone reflects fraction $\rho_s$.
(b) Is the material energy conserving at normal incidence? If not, give the simplest constraint on $\rho_d, \rho_s$ that fixes it.
(c) A second artist drops the normalization, using $\rho_s\cos^p\alpha$. What fraction does *that* lobe reflect at normal incidence, and what does the highlight look like compared with (a)?

<details>
<summary>Solutions</summary>

**P1**

(a) $\Omega = 2\pi(1 - \cos 0.2665°) = 2\pi(1 - 0.99998918) = \mathbf{6.80 \times 10^{-5}}$ **sr**.

(b) For so small a source, $E \approx L\,\Omega$ (the cosine is 1 across it), so $L \approx 1000/6.80\times10^{-5} = \mathbf{1.47 \times 10^7}$ **W m$^{-2}$ sr$^{-1}$**.

(c) Irradiance on the horizontal road is $1000\cos 30° = 866$ W m$^{-2}$. Lambertian outgoing radiance:

$$L_o = \frac{0.3}{\pi} \times 866 = \mathbf{82.7} \text{ W m}^{-2}\text{ sr}^{-1}.$$

The Sun is about $1.8 \times 10^5$ times brighter (in radiance) than the sunlit road — the dynamic range a renderer must tone-map.

**P2**

(a) With $d\omega = \sin\theta\,d\theta\,d\phi$ and constant $L$:

$$E = \int_0^{2\pi}\!\!\int_0^{\theta_0} L\cos\theta\sin\theta\,d\theta\,d\phi = 2\pi L\left[\frac{\sin^2\theta}{2}\right]_0^{\theta_0} = \pi L\sin^2\theta_0.$$

(b) $\sin^2 30° = \mathbf{0.25}$; $\sin^2 60° = \mathbf{0.75}$; $\sin^2 90° = \mathbf{1}$.

(c) The $30°$ cap is $2\pi(1 - \cos 30°) = 0.842$ sr, which is $0.842/2\pi = \mathbf{13.4\%}$ of the hemisphere — yet it supplies **25%** of the irradiance, because near-zenith light arrives almost perpendicular ($\cos\theta \approx 1$) while near-horizon light is discounted to nearly nothing.

**P3**

(a) At normal incidence the mirror direction is the normal, so $\alpha = \theta_o$:

$$\int_\Omega \rho_s\frac{p+2}{2\pi}\cos^p\theta_o\cos\theta_o\,d\omega_o = \rho_s\frac{p+2}{2\pi}\cdot 2\pi\int_0^{\pi/2}\cos^{p+1}\theta\sin\theta\,d\theta = \rho_s\frac{p+2}{2\pi}\cdot\frac{2\pi}{p+2} = \rho_s.$$

(b) Diffuse reflects $\rho_d = 0.8$ and specular $\rho_s = 0.5$: total **1.3 > 1**. **Not** energy conserving — the surface emits 30% more than it receives. Simplest fix: require $\rho_d + \rho_s \le 1$ (e.g. $\rho_d = 0.5$, $\rho_s = 0.5$). Physically based models go further and scale the diffuse part by $1 - F$, so light that reflects specularly is not also available to diffuse.

(c) $\rho_s \cdot 2\pi/(p+2) = 0.5 \times 2\pi/52 = \mathbf{0.060}$. The highlight has the same *shape* (same $p$) but a peak $52/(2\pi) = 8.3$ times lower — a faint smudge rather than a glint. The total now happens to conserve energy ($0.86$), but only by throwing away most of the specular light the artist asked for.

</details>

## Flashback

**From Lesson 3.4 (reflection and refraction):** A ray in air strikes a diamond ($\eta = 2.42$) at $40°$ from the normal; take $\mathbf{d} = (\sin 40°,\ -\cos 40°,\ 0)$, $\mathbf{n} = (0, 1, 0)$.
(a) Find the refracted direction and angle.
(b) Find Schlick's reflectance.
(c) Inside the diamond, a ray meets a facet at $30°$. Does it escape? Compare with the critical angle.

<details>
<summary>Solution</summary>

(a) $\cos\theta_i = 0.7660$, $\eta = 1/2.42 = 0.4132$. $k = 1 - 0.1708(1 - 0.5868) = 0.9294$, $\sqrt k = 0.9641$.

$$\mathbf{t} = 0.4132\,(0.6428, -0.7660, 0) + (0.4132 \times 0.7660 - 0.9641)(0, 1, 0) = \mathbf{(0.2656,\ -0.9641,\ 0)},$$

at $\arcsin 0.2656 = \mathbf{15.4°}$ — diamond bends light sharply toward the normal.

(b) $F_0 = (1.42/3.42)^2 = 0.1724$. $F = 0.1724 + 0.8276(1 - 0.7660)^5 = 0.1724 + 0.8276(0.000700) = \mathbf{0.173}$. Diamond reflects over four times as much as glass face-on.

(c) Critical angle $\arcsin(1/2.42) = 24.4°$. At $30°$: $k = 1 - 5.8564(1 - 0.75) = -0.464 < 0$. **No — total internal reflection.** The tiny critical angle traps most internal rays, which is the "fire" of a well-cut stone.

</details>

## Connections

- **Backward:** the $\sin\theta\,d\theta\,d\phi$ measure is [`calc-refresher` 4.3](../../calc-refresher/lessons/04-03-multiple-integrals.md)'s spherical Jacobian at unit radius; point-light shading is [2.4](02-04-lighting-diffuse-specular-phong.md)'s model with $k_d = \rho/\pi$; the transport condition is [3.3](03-03-ray-casting-and-intersection.md)'s nearest-hit query; Whitted's rays ([3.4](03-04-whitted-ray-tracing-reflection-refraction.md)) are delta-function BRDFs.
- **Forward:** [3.7](03-07-monte-carlo-path-tracing.md) estimates the hemisphere integral by random sampling, recursively, and prices the noise.
- **Sideways:** radiance is the specific intensity of [`astrophysics` 1.3](../../astrophysics/lessons/01-03-radiative-transfer-spectral-lines.md)'s radiative transfer, and the rendering equation is that transfer equation with only surface interactions. For all-Lambertian scenes it reduces to the **radiosity** equations for exchange between patches — the view-factor network of [`heat-transfer` 4.3](../../heat-transfer/lessons/04-03-view-factors-radiation-exchange.md), with visible light in place of thermal radiation.
