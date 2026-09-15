# Computer Graphics · Lesson 3.4: Whitted Ray Tracing — Reflection & Refraction

> ⏱ ~15 min · Module 3: The GPU Pipeline, Ray Tracing & Global Illumination · Builds on: [3.3 (ray–object intersection)](03-03-ray-casting-and-intersection.md), [2.4 (the reflection vector)](02-04-lighting-diffuse-specular-phong.md), [`waves-optics` 3.1 (Snell's law)](../../waves-optics/lessons/03-01-reflection-refraction-snell.md) · Unlocks: [3.5 (acceleration structures)](03-05-acceleration-structures.md), [3.6 (the rendering equation)](03-06-radiometry-brdfs-rendering-equation.md)

## Why this matters

In 1980 Turner Whitted rendered a glass sphere floating over a checkerboard, and the image — reflections inside reflections, a refracted, inverted checkerboard seen through the glass — looked like nothing a computer had drawn before. The algorithm behind it is a dozen lines: when a ray hits a shiny or transparent surface, **spawn new rays** in the mirror and refraction directions and trace them too. The colour of a pixel becomes the sum of a tree of rays.

The physics — the law of reflection, Snell's law, total internal reflection — is owned by [`waves-optics` 3.1](../../waves-optics/lessons/03-01-reflection-refraction-snell.md) as statements about angles. A ray tracer needs them as **vector formulas** it can evaluate in 3D with no angles in sight, plus a rule for how much light goes each way. That translation, and what it costs, is this lesson.

## The idea

**Recursion does the optics.** A mirror shows you what the reflected ray sees. So to colour a mirror point, trace the reflected ray and use its colour. That ray may hit another mirror, which traces another ray, and so on. Glass is the same with two children: some light reflects off the surface, the rest bends into the glass and continues. Stop when a ray hits something matte, leaves the scene, or the tree gets too deep.

**Angles without angles.** Reflection keeps the part of the direction along the surface and flips the part along the normal. Refraction also keeps the along-surface part, but scaled by the ratio of refractive indices (that is Snell's law), and then picks the normal part so the result is a unit vector. If no real normal part exists — the scaled along-surface part is already longer than 1 — the light can't get out: **total internal reflection**.

**Glass reflects more at grazing angles.** Look straight down into a pond and you see the bottom; look across it and you see the sky. The fraction reflected, the **Fresnel** factor, rises from about 4% face-on to 100% at grazing. Schlick's one-line approximation captures that curve well enough for rendering.

## The formal version

**Conventions.** $\mathbf{d}$ is the unit direction of the incoming ray (pointing *toward* the surface); $\mathbf{n}$ is the unit normal on the side the ray comes from, so $\mathbf{d}\cdot\mathbf{n} < 0$. Let $\cos\theta_i = -\mathbf{d}\cdot\mathbf{n}$.

**Reflection.**

$$\mathbf{r} = \mathbf{d} - 2(\mathbf{d}\cdot\mathbf{n})\,\mathbf{n}.$$

In words: subtract twice the normal component. This is [2.4](02-04-lighting-diffuse-specular-phong.md)'s $\mathbf{r} = 2(\mathbf{n}\cdot\mathbf{l})\mathbf{n} - \mathbf{l}$ with $\mathbf{l} = -\mathbf{d}$. *(card: [Reflected ray](../reference.md#reflected-ray))*

**Refraction.** Going from index $\eta_i$ into index $\eta_t$, with $\eta = \eta_i/\eta_t$,

$$k = 1 - \eta^2\left(1 - \cos^2\theta_i\right), \qquad \mathbf{t} = \eta\,\mathbf{d} + \left(\eta\cos\theta_i - \sqrt{k}\right)\mathbf{n}, \qquad \cos\theta_t = \sqrt{k}.$$

In words: shrink the along-surface component by $\eta$ (Snell: $\sin\theta_t = \eta\sin\theta_i$), then add just enough inward normal component to make $\mathbf{t}$ unit length. **If $k < 0$ there is no refracted ray** — total internal reflection — and all the light reflects. That can only happen when $\eta > 1$, going from denser to less dense. *(card: [Refracted ray](../reference.md#refracted-ray))*

When a ray is **inside** an object and hits its surface from within, $\mathbf{d}\cdot\mathbf{n} > 0$ for the outward normal: flip the normal to $-\mathbf{n}$ and swap the indices before applying the formula.

**Fresnel reflectance, Schlick's approximation.**

$$F(\theta) \approx F_0 + (1 - F_0)(1 - \cos\theta)^5, \qquad F_0 = \left(\frac{\eta_i - \eta_t}{\eta_i + \eta_t}\right)^2,$$

where $\theta$ is the angle on the less dense side. For air–glass ($1.0$ to $1.5$), $F_0 = 0.04$. The refracted ray carries $1 - F$ (energy that is not reflected is transmitted, for non-absorbing glass). *(card: [Schlick's approximation](../reference.md#schlicks-approximation))*

| angle of incidence | $0°$ | $30°$ | $60°$ | $80°$ | $89°$ |
|---|---|---|---|---|---|
| Schlick $F$ | $0.040$ | $0.040$ | $0.070$ | $0.410$ | $0.919$ |
| exact Fresnel (unpolarized) | $0.040$ | $0.042$ | $0.089$ | $0.388$ | $0.904$ |

**Whitted's recursion.**

```
trace(ray, depth):
    hit = nearest intersection of ray with scene     // 3.3
    if no hit: return background
    c = local shading at hit, with shadow rays        // 2.4, 3.3
    if depth < MAX and hit is reflective or glass:
        F = fresnel(ray, hit)
        c += F * trace(reflected ray, depth + 1)
        if hit is glass and not TIR:
            c += (1 - F) * trace(refracted ray, depth + 1)
    return c
```

*(card: [Whitted ray tracing](../reference.md#whitted-ray-tracing))*

**Cost.** Each glass hit spawns two rays, so a full ray tree of maximum depth $D$ has up to $2^D - 1$ hit nodes, each also casting one shadow ray per light. Practical tracers prune any branch whose accumulated weight (product of $F$'s and $1 - F$'s) falls below a threshold.

## Picture

![A cross-section of a blue glass sphere of index 1.5. A grey incoming ray from the left strikes its upper-left surface. A coral reflected ray leaves almost straight up, labelled reflected, weight F equals 0.044. A blue refracted ray continues through the glass, bent toward the normal, labelled 29.6 degrees inside, and exits on the right side, bent back to 47.9 degrees, heading down and to the right. Dashed grey normals are drawn at the entry and exit points, and the entry angle is labelled 47.9 degrees](assets/03-04-fig1.svg)

The ray enters at $47.9°$, travels at $29.6°$ to the normal, and — because a sphere's two normals along a chord make equal angles with it — meets the far surface at $29.6°$ again and leaves at $47.9°$. That symmetry is Problem 3.

## Worked examples

**Example 1 (mechanical): split a ray at a glass sphere.** Eye at the origin, $\mathbf{d} = \text{normalize}(0.15, 0, -1) = (0.1483,\ 0,\ -0.9889)$; glass sphere ($\eta = 1.5$) with centre $(0, 0, -5)$ and radius 1.

*Hit* ([3.3](03-03-ray-casting-and-intersection.md)): $t = 4.274$, $\mathbf{p} = (0.634,\ 0,\ -4.227)$, $\mathbf{n} = \mathbf{p} - \mathbf{c} = (0.634,\ 0,\ 0.773)$.

*Incidence.* $\cos\theta_i = -\mathbf{d}\cdot\mathbf{n} = -(0.0940 - 0.7644) = 0.6707$, so $\theta_i = 47.9°$.

*Reflection.* $\mathbf{d}\cdot\mathbf{n} = -0.6707$:

$$\mathbf{r} = (0.1483, 0, -0.9889) + 1.3415\,(0.634, 0, 0.773) = (0.9988,\ 0,\ 0.0485).$$

*Refraction*, air into glass, $\eta = 1/1.5 = 0.6667$:

$$k = 1 - 0.4444\,(1 - 0.4499) = 0.7555, \qquad \sqrt k = 0.8692.$$

$$\mathbf{t} = 0.6667\,(0.1483, 0, -0.9889) + (0.6667 \times 0.6707 - 0.8692)(0.634, 0, 0.773)$$
$$= (0.0989, 0, -0.6593) - 0.4221\,(0.634, 0, 0.773) = (-0.1687,\ 0,\ -0.9857).$$

$\theta_t = \arccos 0.8692 = 29.6°$. Check Snell: $\sin 47.9° = 0.7417$ and $1.5\sin 29.6° = 0.7417$. ✓

*Weights.* Schlick with $\cos\theta = 0.6707$: $F = 0.04 + 0.96(0.3293)^5 = 0.04 + 0.96(0.00387) = \mathbf{0.044}$ (exact Fresnel: $0.054$). So the pixel is $4.4\%$ whatever the reflected ray sees plus $95.6\%$ whatever the refracted ray sees.

**Example 2 (why you'd care): total internal reflection, and a pruned tree.** Inside a glass block, a ray meets the glass–air surface at $45°$. Now $\eta = 1.5/1.0 = 1.5$:

$$k = 1 - 2.25\,(1 - 0.5) = -0.125 < 0.$$

**No refracted ray**: total internal reflection. The critical angle is $\arcsin(1/1.5) = 41.8°$; any steeper internal ray escapes, any shallower is trapped. This is how optical fibres work, and why a diamond ($\eta = 2.42$, critical angle $24.4°$) sparkles — most internal rays are trapped and bounce until they find a steep exit.

*What it costs.* Suppose every glass interface in a scene reflects $F = 0.04$ and transmits $0.96$, the maximum depth is 5, and branches with accumulated weight below $0.01$ are pruned. Two reflections give $0.04^2 = 0.0016$, pruned; any path with at most one reflection has weight at least $0.04 \times 0.96^3 = 0.035$, kept. Counting kept nodes by depth: $1 + 2 + 3 + 4 + 5 = 15$, against $31$ for the full tree. With two lights, each kept hit also casts two shadow rays: $15 + 30 = 45$ rays for one pixel of glass — and $2{,}073{,}600$ pixels at 1080p.

## Watch out

- **You might think** the refraction formula works for rays leaving an object as written — **but actually** it assumes $\mathbf{n}$ faces the incoming ray and $\eta = \eta_i/\eta_t$. At an exit, the outward normal faces *away*; forgetting to flip it and swap the indices produces rays bent the wrong way, and glass objects that look hollow or inside-out.
- **You might think** a reflected or refracted ray should start exactly at the hit point — **but actually** it must be offset (or use $t > \varepsilon$), like the shadow rays of [3.3](03-03-ray-casting-and-intersection.md). A refracted ray offset along $+\mathbf{n}$ instead of $-\mathbf{n}$ starts outside the glass and never enters it.
- **You might think** Whitted ray tracing is physically complete — **but actually** it only follows perfect mirror and perfect refraction directions, plus direct light from point lights. It has no light bouncing off diffuse surfaces onto other surfaces, no soft shadows, no caustics focused by the glass onto the floor. [3.6](03-06-radiometry-brdfs-rendering-equation.md) writes down what it is missing.

## One-liner

> At a shiny or glass hit, spawn $\mathbf{r} = \mathbf{d} - 2(\mathbf{d}\cdot\mathbf{n})\mathbf{n}$ and, unless $k = 1 - \eta^2(1 - \cos^2\theta_i) < 0$, $\mathbf{t} = \eta\mathbf{d} + (\eta\cos\theta_i - \sqrt k)\mathbf{n}$ — weight them by Schlick's $F$ and $1 - F$, and recurse.

## Problems

**P1 (🟢)** A ray travelling in direction $(1, -1, 0)/\sqrt2$ hits a mirror floor with normal $(0, 1, 0)$.
(a) Compute the reflected direction.
(b) Verify that the angle of incidence equals the angle of reflection.

**P2 (🟡)** (a) A ray in air hits still water ($\eta_t = 1.33$) at $60°$ from the normal; take $\mathbf{d} = (\sin 60°,\ -\cos 60°,\ 0)$ and $\mathbf{n} = (0, 1, 0)$. Compute $k$, the refracted direction and its angle, and Schlick's $F$.
(b) A ray *inside* the water travels in the same direction $\mathbf{d}$ but upward, hitting the surface from below at $60°$. Does it escape? Compare with the critical angle.

**P3 (🔴)** (a) Prove that a ray refracted into a solid glass sphere can never undergo total internal reflection at the point where it next meets the sphere's surface.
(b) Every glass interface reflects $F = 0.04$ and transmits $0.96$; the maximum depth is 5 (the primary hit is depth 1); branches with accumulated weight below $0.01$ are pruned. How many hit nodes does one ray tree contain, and how does that compare with the unpruned tree? Would a threshold of $0.001$ change the answer?

<details>
<summary>Solutions</summary>

**P1**

(a) $\mathbf{d} = (0.7071, -0.7071, 0)$, $\mathbf{d}\cdot\mathbf{n} = -0.7071$:

$$\mathbf{r} = \mathbf{d} - 2(-0.7071)(0,1,0) = (0.7071,\ -0.7071 + 1.4142,\ 0) = \mathbf{(0.7071,\ 0.7071,\ 0)}.$$

(b) Incidence: $\cos\theta_i = -\mathbf{d}\cdot\mathbf{n} = 0.7071$, $\theta_i = 45°$. Reflection: $\cos\theta_r = \mathbf{r}\cdot\mathbf{n} = 0.7071$, $\theta_r = 45°$. ✓ And the along-surface component $0.7071$ in $x$ is unchanged.

**P2**

(a) $\cos\theta_i = 0.5$, $\eta = 1/1.33 = 0.7519$.

$$k = 1 - 0.5653\,(1 - 0.25) = 1 - 0.4240 = \mathbf{0.576}, \qquad \sqrt k = 0.7590.$$

$$\mathbf{t} = 0.7519\,(0.8660, -0.5, 0) + (0.7519 \times 0.5 - 0.7590)(0, 1, 0) = (0.6511,\ -0.3759 - 0.3830,\ 0) = \mathbf{(0.651,\ -0.759,\ 0)}.$$

Angle: $\arcsin 0.651 = \mathbf{40.6°}$ (Snell: $\sin 60° / 1.33 = 0.651$ ✓).

Schlick: $F_0 = (0.33/2.33)^2 = 0.0201$; $F = 0.0201 + 0.9799(0.5)^5 = 0.0201 + 0.0306 = \mathbf{0.051}$ (exact: $0.059$).

(b) Now $\eta = 1.33$: $k = 1 - 1.7689(0.75) = \mathbf{-0.327} < 0$. **No — total internal reflection.** The critical angle is $\arcsin(1/1.33) = 48.8°$, and $60° > 48.8°$. A swimmer looking up sees the sky only within a $48.8°$ cone (Snell's window); outside it the surface is a mirror.

**P3**

(a) Let the ray enter at $\mathbf{p}$ and travel in direction $\mathbf{t}$ to the next surface point $\mathbf{q}$. Both $\mathbf{p}$ and $\mathbf{q}$ are at distance $r$ from the centre $\mathbf{c}$, so triangle $\mathbf{c}\mathbf{p}\mathbf{q}$ is **isosceles**, and its base angles at $\mathbf{p}$ and $\mathbf{q}$ are equal. The angle at $\mathbf{p}$ between the chord and the inward normal $\mathbf{c} - \mathbf{p}$ is the refraction angle $\theta_t$; the angle at $\mathbf{q}$ between the chord and the outward normal $\mathbf{q} - \mathbf{c}$ is the internal incidence angle. So the internal incidence angle equals $\theta_t$.

Snell at entry gave $\sin\theta_t = \sin\theta_i/\eta_{\text{glass}} \le 1/\eta_{\text{glass}}$, which is exactly $\sin$ of the critical angle. So the internal ray always meets the surface at or below the critical angle: **no TIR**, and it exits at the original $\theta_i$ (as in the Picture, $29.6°$ in and $47.9°$ out). A cube or prism has no such symmetry, which is why prisms can trap light and spheres cannot.

(b) A node's weight is $0.04^{a}\,0.96^{b}$ for $a$ reflections and $b$ transmissions on the path to it. Two reflections give $0.0016 < 0.01$; one reflection plus up to three transmissions gives at least $0.04 \times 0.96^3 = 0.035$. So kept nodes are exactly the paths with at most one R. At depth $m$ there are $m - 1$ choices, hence $m - 1 + 1 = m$ paths (all T, or one R in one of $m - 1$ positions):

$$1 + 2 + 3 + 4 + 5 = \mathbf{15}\ \text{hit nodes, versus}\ 2^5 - 1 = 31.$$

With a threshold of $0.001$: two reflections ($0.0016$, then $0.0016 \times 0.96 = 0.0015$, $0.0014$) are now kept, while three ($0.000064$) are not. Depth 3 gains RR (4 nodes), depth 4 gains the 3 two-R paths (7), depth 5 gains 6 (11): $1 + 2 + 4 + 7 + 11 = \mathbf{25}$. A tenfold tighter threshold cost two-thirds more work for contributions under 0.2% each.

</details>

## Flashback

**From Lesson 3.3 (ray–object intersection):** A ray starts at $(1, 3, 2)$ with **unnormalized** direction $(0, -1, -1)$. A sphere has centre $(1, 0, -1)$ and radius $1.5$.
(a) Compute $A$, $B$, $C$ and the discriminant.
(b) Find both roots, the entry point and its normal.
(c) How far, in world units, is the entry point from the ray's origin?

<details>
<summary>Solution</summary>

(a) $\mathbf{o} - \mathbf{c} = (0, 3, 3)$. $A = \mathbf{d}\cdot\mathbf{d} = 2$; $B = 2\,\mathbf{d}\cdot(\mathbf{o} - \mathbf{c}) = 2(-3 - 3) = -12$; $C = 18 - 2.25 = 15.75$.

Discriminant $= 144 - 4(2)(15.75) = 144 - 126 = \mathbf{18}$.

(b) $t = \dfrac{12 \mp \sqrt{18}}{4} = \dfrac{12 \mp 4.243}{4} = \mathbf{1.939}$ and $\mathbf{4.061}$.

Entry: $(1, 3, 2) + 1.939(0, -1, -1) = \mathbf{(1,\ 1.061,\ 0.061)}$. Normal: $(\mathbf{p} - \mathbf{c})/1.5 = (0,\ 1.061,\ 1.061)/1.5 = \mathbf{(0,\ 0.707,\ 0.707)}$.

(c) $t$ counts steps of length $\lVert\mathbf{d}\rVert = \sqrt2$, so the distance is $1.939 \times 1.414 = \mathbf{2.743}$. Treating $t$ itself as a distance would be off by 41%.

</details>

## Connections

- **Backward:** every child ray is intersected with [3.3](03-03-ray-casting-and-intersection.md)'s routines; local shading at each node is [2.4](02-04-lighting-diffuse-specular-phong.md)'s Phong with [3.3](03-03-ray-casting-and-intersection.md)'s shadow rays; the scalar laws behind $\mathbf{r}$ and $\mathbf{t}$, and the critical angle, are [`waves-optics` 3.1](../../waves-optics/lessons/03-01-reflection-refraction-snell.md)'s.
- **Forward:** [3.5](03-05-acceleration-structures.md) makes each of those intersection queries cheap enough for the ray counts in Example 2. [3.6](03-06-radiometry-brdfs-rendering-equation.md) generalizes "trace the mirror direction" to "integrate over all directions" — Whitted's two special directions are the limit of a BRDF that is a delta function.
- **Sideways:** Fresnel's $F$ comes from matching the electromagnetic fields of [`waves-optics` 2.4](../../waves-optics/lessons/02-04-light-as-em-wave.md)'s light wave across the interface, which gives separate reflectances for the two polarizations; Schlick replaces both with one polynomial that is exact at normal and grazing incidence. The same "bend at an interface by a ratio of speeds" is seismic ray tracing in [`geophysics` 1.3](../../geophysics/lessons/01-03-wave-equation-ray-theory.md).
