# Waves & Optics · Lesson 3.2: Mirrors & image formation

> ⏱ ~15 min · Module 3: Geometric optics · Builds on: [3.1 Reflection, refraction & Snell's law](03-01-reflection-refraction-snell.md) · Unlocks: [3.3 Lenses & optical instruments](03-03-lenses-optical-instruments.md)

## Why this matters

A flat mirror just gives you back a life-size copy of yourself, standing the same distance behind the glass. Curve that mirror and it starts doing real work: a concave dish gathers distant starlight onto a single point (every reflecting telescope, from Newton's to the James Webb), or blows up your face for shaving; a convex bulge shrinks a whole parking lot into a palm-sized security view. Same law of reflection at every point — the *shape* is what focuses. This lesson gives you two tools, ray tracing and the mirror equation, that between them locate the image of *any* object in *any* spherical mirror, and tell you whether it's real or virtual, upright or flipped, bigger or smaller.

## The idea

Reflection off a curved surface is still just "angle in = angle out" ([3.1](03-01-reflection-refraction-snell.md)) — but the surface normal now points in a different direction at every spot on the mirror. Take a **concave** mirror (curves *toward* you, like the inside of a spoon) and shine in a bundle of rays traveling parallel to its axis. Each ray hits a slightly differently-tilted patch, and the geometry is rigged so they all bounce to cross at one point: the **focus**. Concave mirrors *converge*. A **convex** mirror (curves *away*, the back of the spoon) does the opposite — parallel rays spread apart as if fanning out from a point behind the glass. Convex mirrors *diverge*.

Once you know where parallel rays go, you can find the image of anything. Every point of an object sprays rays in all directions; the mirror bends them; wherever the bent rays (or their backward extensions) reconvene is where that point's image sits. You don't need to trace hundreds — three special rays have paths you already know by heart, and any two of them pin the image.

## The formal version

**Geometry.** A spherical mirror is a slice of a sphere of radius $R$ (the **radius of curvature**, in meters). Its center is the **center of curvature** $C$, a distance $R$ from the mirror's surface. Parallel rays focus halfway there, at the **focal point** $F$, a distance

$$f = \frac{R}{2}$$

from the mirror — the **focal length**. *In words: the focus sits midway between the mirror and its center of curvature.*

**Mirror equation.** For an object a distance $d_o$ in front of the mirror, the image forms at distance $d_i$, where

$$\boxed{\;\frac{1}{d_o} + \frac{1}{d_i} = \frac{1}{f}\;}$$

*In words: object distance and image distance are linked through the focal length — fix any two and the third is forced.*

**Magnification.** The image height $h_i$ relative to the object height $h_o$ is

$$m = \frac{h_i}{h_o} = -\frac{d_i}{d_o}.$$

*In words: the image is $|m|$ times as tall, and the minus sign turns image distance into an orientation flag.*

**Sign convention (standard, HRW/Hecht — memorize and never mix).** Measure everything from the mirror, taking the **side the light is on (in front, the reflecting side) as positive**:

| Quantity | Positive $(+)$ | Negative $(-)$ |
|---|---|---|
| $f$ (and $R$) | concave (converging) | convex (diverging) |
| $d_o$ | object in front (always, for real objects) | — |
| $d_i$ | image in front → **real, inverted** | image behind → **virtual, upright** |
| $m$ | upright | inverted |

And $|m| > 1$ means enlarged, $|m| < 1$ reduced. A **real** image is where light actually crosses (you could catch it on a card); a **virtual** image is where the backward extensions of diverging rays only *appear* to come from (behind the mirror — you can see it but not project it).

**The three principal rays** (for a concave mirror; each traces one known path):

1. **Parallel → focus.** A ray parallel to the axis reflects through $F$.
2. **Focus → parallel.** A ray passing through $F$ reflects back parallel to the axis. (Rule 1 run backward.)
3. **Through $C$ → back on itself.** A ray through the center of curvature hits the mirror head-on (along a normal) and retraces its path.

*In words: draw any two of these from the tip of the object; where they meet is the tip of the image.* For a convex mirror the same three rays apply, aimed at the $F$ and $C$ that now sit *behind* the mirror.

**The cases (concave mirror).** Slide an object inward and the image marches through every possibility:

| Object at… | Image | Type |
|---|---|---|
| beyond $C$ | between $C$ and $F$ | real, inverted, **reduced** |
| at $C$ | at $C$ | real, inverted, same size |
| between $C$ and $F$ | beyond $C$ | real, inverted, **enlarged** |
| at $F$ | at infinity | rays come out parallel — no image |
| inside $F$ | behind the mirror | **virtual, upright, enlarged** (shaving/makeup mirror) |

**Convex mirror — one case only.** With $f < 0$, plug any $d_o > 0$ into the mirror equation and $d_i$ is *always* negative and smaller than $f$: the image is **always virtual, upright, and reduced**, sitting just behind the glass. That's why it's the security/passenger-side mirror — wide field of view, everything shrunk ("objects are closer than they appear").

## Picture

![Concave mirror ray diagram: an object arrow stands beyond the center of curvature C on the principal axis; a parallel ray reflects through the focus F and a focal ray reflects parallel, the two crossing in front of the mirror to form a smaller inverted image between C and F](assets/03-02-fig1.svg)

## Worked examples

**Example 1 (concave — object beyond $C$; the figure's case).** A concave mirror has focal length $f = +20$ cm (so $R = 40$ cm, and $C$ is at 40 cm). A 5 cm-tall candle stands 60 cm in front — beyond $C$. Locate the image and describe it.

Mirror equation:

$$\frac{1}{d_i} = \frac{1}{f} - \frac{1}{d_o} = \frac{1}{20} - \frac{1}{60} = \frac{3 - 1}{60} = \frac{2}{60} \;\Longrightarrow\; d_i = 30\ \text{cm}.$$

$d_i > 0$: real, in front, and $30$ cm sits between $F$ (20) and $C$ (40) — matching the table. Magnification:

$$m = -\frac{d_i}{d_o} = -\frac{30}{60} = -0.5,$$

so $h_i = m\,h_o = -0.5 \times 5 = -2.5$ cm: **inverted** ($m<0$) and **half-size** ($|m|<1$). A real, inverted, reduced image — exactly the diagram.

**Example 2 (concave — inside $F$; the shaving mirror).** Move the same mirror ($f = +20$ cm) close: your face is $d_o = 10$ cm away, inside the focus. Now

$$\frac{1}{d_i} = \frac{1}{20} - \frac{1}{10} = \frac{1 - 2}{20} = -\frac{1}{20} \;\Longrightarrow\; d_i = -20\ \text{cm}.$$

$d_i < 0$: the image is **virtual**, 20 cm *behind* the mirror. Magnification:

$$m = -\frac{d_i}{d_o} = -\frac{-20}{10} = +2,$$

**upright** ($m>0$) and **twice life-size** ($|m|>1$). That is precisely why a concave mirror held near your face magnifies it — and why it flips to a tiny inverted image the moment you hold it at arm's length (past $F$). One mirror, two behaviors, decided entirely by whether you're inside or outside $f$.

## Watch out

- **You might think a negative $d_i$ is a mistake.** It's information: $d_i < 0$ means the image is *behind* the mirror — virtual and upright. The algebra hands you real-vs-virtual for free through the sign; don't discard it, read it.
- **You might reuse a positive $f$ for a convex mirror.** Convex is *diverging*, so $f = -R/2 < 0$. Forget the minus sign and you'll predict a real image where none exists — a convex mirror can *never* make a real image of a real object.
- **You might mix up which sign of $m$ means what.** $m$ negative = **inverted** (and always real, in these problems); $m$ positive = **upright** (and always virtual). The *magnitude* $|m|$ is the size ratio, separate from orientation. Report both: "inverted, half-size" needs $m = -0.5$, not just "0.5".

## One-liner

> $f = R/2$ and $\tfrac{1}{d_o}+\tfrac{1}{d_i}=\tfrac{1}{f}$ locate the image; the sign of $d_i$ tells you real-or-virtual and the sign of $m=-d_i/d_o$ tells you upright-or-flipped.

## Problems

**P1 (🟢)** A concave mirror has $f = 15$ cm. A 4 cm object sits 45 cm in front of it. Find the image distance, the magnification, and state whether the image is real or virtual, upright or inverted, enlarged or reduced.

**P2 (🟡)** A convex security mirror has radius of curvature $R = 40$ cm. A shopper stands 30 cm in front. Find $f$, the image distance, and the magnification, and describe the image. (Watch the sign of $f$.)

**P3 (🔴, optional)** You want a concave shaving mirror ($f = 30$ cm) to produce an upright image magnified exactly $3\times$. How far from the mirror must your face be, and where does the image form?

<details>
<summary>Solutions</summary>

**P1** With $f = 15$, $d_o = 45$:

$$\frac{1}{d_i} = \frac{1}{15} - \frac{1}{45} = \frac{3 - 1}{45} = \frac{2}{45} \;\Longrightarrow\; d_i = 22.5\ \text{cm}.$$

$$m = -\frac{d_i}{d_o} = -\frac{22.5}{45} = -0.5, \qquad h_i = -0.5 \times 4 = -2\ \text{cm}.$$

$d_i > 0$ → **real**; $m < 0$ → **inverted**; $|m| < 1$ → **reduced** (half size). Real, inverted, reduced.

*Check.* $d_o = 45$ is beyond $C = 2f = 30$, so the object-beyond-$C$ row of the table predicts real/inverted/reduced ✓, and the image at $22.5$ cm sits between $F=15$ and $C=30$ as it should ✓.

**P2** Convex, so $f = -R/2 = -20$ cm (negative — the whole point). With $d_o = 30$:

$$\frac{1}{d_i} = \frac{1}{-20} - \frac{1}{30} = \frac{-3 - 2}{60} = -\frac{5}{60} \;\Longrightarrow\; d_i = -12\ \text{cm}.$$

$$m = -\frac{d_i}{d_o} = -\frac{-12}{30} = +0.4.$$

$d_i < 0$ → **virtual**, 12 cm behind the mirror; $m > 0$ → **upright**; $|m| < 1$ → **reduced** (40% size). A virtual, upright, shrunken image — the classic wide-view security mirror.

*Check.* Convex mirrors give *only* virtual/upright/reduced images for any real object, so all three flags land where the theory demands ✓. Units: cm throughout, $m$ dimensionless ✓.

**P3** Upright and magnified means $m = +3$. From $m = -d_i/d_o$:

$$+3 = -\frac{d_i}{d_o} \;\Longrightarrow\; d_i = -3\,d_o \quad(\text{virtual, as an upright enlarged image must be}).$$

Substitute into the mirror equation with $f = 30$:

$$\frac{1}{d_o} + \frac{1}{-3d_o} = \frac{1}{30} \;\Longrightarrow\; \frac{3 - 1}{3d_o} = \frac{1}{30} \;\Longrightarrow\; \frac{2}{3d_o} = \frac{1}{30} \;\Longrightarrow\; d_o = 20\ \text{cm}.$$

Then $d_i = -3(20) = -60$ cm: the image is 60 cm *behind* the mirror. So hold your face 20 cm away — inside the focus ($f = 30$) — for a 3× upright reflection.

*Check.* $d_o = 20 < f = 30$, i.e. inside $F$, exactly the row that yields a virtual/upright/enlarged image ✓. Verify magnification: $m = -(-60)/20 = +3$ ✓. In general $d_o = 2f/3$ gives $m = +3$; a bigger demanded magnification pushes the object closer to $F$, as expected.

</details>

## Flashback

**From Lesson 3.1 (Reflection, refraction & Snell's law):** A ray inside a glass block ($n = 1.52$) strikes the glass–air boundary from within. Beyond what angle of incidence is the ray *totally* internally reflected? (Fresh variant — solve for the critical angle.)

<details>
<summary>Solution</summary>

Total internal reflection sets in at the critical angle $\theta_c$, where the refracted ray grazes the surface ($\theta_2 = 90^\circ$). Snell's law $n_1\sin\theta_c = n_2\sin 90^\circ$ with $n_1 = 1.52$ (glass), $n_2 = 1.00$ (air):

$$\sin\theta_c = \frac{n_2}{n_1} = \frac{1.00}{1.52} = 0.658 \;\Longrightarrow\; \theta_c = \arcsin(0.658) \approx 41.1^\circ.$$

Any ray hitting the boundary at more than about $41^\circ$ from the normal is reflected entirely back into the glass.

*Check.* TIR requires going from denser to rarer medium ($n_1 > n_2$), which holds ✓. Denser glass (larger $n_1$) would shrink $\theta_c$ — consistent with diamond ($n\approx2.42$, $\theta_c\approx24^\circ$) sparkling because almost every internal ray is trapped and re-reflected ✓.

</details>

## Connections

- **Backward:** every bounce here is the law of reflection from [3.1](03-01-reflection-refraction-snell.md) applied point-by-point on a curved surface — the curvature just rotates the local normal. The Flashback's critical angle is the same Snell's-law machinery seen from the refraction side.
- **Forward:** [3.3 Lenses & optical instruments](03-03-lenses-optical-instruments.md) reuses this *exact* equation, $\tfrac{1}{d_o}+\tfrac{1}{d_i}=\tfrac{1}{f}$ and $m=-d_i/d_o$, with refraction replacing reflection — learn the sign convention cold now and lenses are half-done. Combine mirrors and lenses and you have telescopes and microscopes.
- **Sideways (mechanics/EM):** "parallel rays converge to a focus" is the geometric-optics limit of wave focusing — a paraboloidal dish does it perfectly for both light ([2.4](02-04-light-as-em-wave.md)) and the radio/sound waves collected by antennas and satellite dishes, where the same $f=R/2$ geometry places the receiver at the focal point.
