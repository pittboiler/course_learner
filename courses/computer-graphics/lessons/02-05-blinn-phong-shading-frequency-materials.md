# Computer Graphics · Lesson 2.5: Blinn–Phong, Shading Frequency & Materials

> ⏱ ~15 min · Module 2: Rasterization & Shading · Builds on: [2.4 (Phong lighting)](02-04-lighting-diffuse-specular-phong.md), [2.3 (interpolation)](02-03-perspective-correct-interpolation.md) · Unlocks: [3.1 (vertex vs fragment shaders)](03-01-the-programmable-gpu-pipeline.md), [3.6 (BRDFs)](03-06-radiometry-brdfs-rendering-equation.md)

## Why this matters

[2.4](02-04-lighting-diffuse-specular-phong.md) gave a formula. A renderer still has to decide three things before it produces a picture. **Which specular formula** — Phong's reflection vector or a cheaper one? **Where** to evaluate it — once per triangle, once per vertex, or once per pixel? And **in what colour space** — because the numbers stored in an image file are not proportional to light, and doing arithmetic on them directly is one of the most widespread bugs in graphics.

Each choice is small, and each one produces a visible, diagnosable artifact when made wrong: highlights that vanish in the middle of triangles, shading that is too dark in the midtones, antialiased edges that look ropy. This lesson is those three choices and their failure modes.

## The idea

**Blinn's halfway vector.** Phong asks: how close is the viewer to the mirror direction? Blinn asks an equivalent question more cheaply: *what would the surface normal have to be for the light to mirror straight into the eye?* That normal is the direction exactly halfway between "to the light" and "to the eye". The closer the real normal is to it, the brighter the highlight. No reflection vector needed, and for a distant light and distant viewer the halfway direction is the same for every point in the scene.

**Shading frequency.** You can run the lighting model rarely and interpolate the *results*, or run it often and interpolate the *inputs*. Computing colour at the three vertices and blending colours (**Gouraud shading**) is cheap, but a highlight that falls inside a big triangle — touching no vertex — simply never gets computed. Blending the *normals* and lighting every pixel (**Phong shading**, not to be confused with the Phong *reflection model*) catches it.

**Light adds up; image values don't.** Two identical lamps give twice the light. But a pixel value of 0.5 in a typical image does not mean "half as much light as 1.0" — it means about a fifth. Monitors and image files use a compressed, perceptual encoding (sRGB). Lighting maths must be done on linear light values, with conversions at the edges.

## The formal version

**Blinn–Phong specular.** With $\mathbf{l}$ and $\mathbf{v}$ unit vectors to the light and the eye,

$$\mathbf{h} = \frac{\mathbf{l} + \mathbf{v}}{\lVert\mathbf{l} + \mathbf{v}\rVert}, \qquad L_s = k_s\, I \max(0,\ \mathbf{n}\cdot\mathbf{h})^{p'}.$$

In words: the highlight is brightest when the normal points exactly halfway between light and eye. *(card: [Blinn-Phong specular](../reference.md#blinn-phong-specular))*

**Relating the exponents.** When $\mathbf{n}$, $\mathbf{l}$ and $\mathbf{v}$ lie in one plane, the angle between $\mathbf{n}$ and $\mathbf{h}$ is exactly **half** the angle between $\mathbf{r}$ and $\mathbf{v}$. Since $\cos^{p'}(\alpha/2) \approx \cos^{p}\alpha$ for small angles when $p' \approx 4p$ (both behave like $e^{-p\alpha^2/2}$), a Blinn–Phong exponent of about **four times** the Phong exponent gives a similar highlight. Out of plane the correspondence is only approximate.

Why prefer it: (i) for a directional light and a distant viewer, $\mathbf{h}$ is constant — one normalization per frame instead of a reflection per pixel; (ii) $\mathbf{n}\cdot\mathbf{h}$ stays positive until the light passes below the surface, whereas $\mathbf{r}\cdot\mathbf{v}$ can clip abruptly at grazing angles; (iii) at grazing angles Blinn–Phong highlights stretch into streaks, which matches real photographs (the sun's glint on a lake) better than Phong's round spots.

**Shading frequency.**

| name | lighting evaluated | interpolated across the triangle | catches interior highlights? |
|---|---|---|---|
| **flat** | once per triangle (face normal) | nothing — constant colour | no, and faceted |
| **Gouraud** | once per vertex | the resulting colour | **no** |
| **Phong shading** | once per fragment | the normal (renormalized) | yes |

*(card: [Shading frequency](../reference.md#shading-frequency))* Gouraud is exactly as good as the vertex density: it is correct when colour varies linearly between vertices, and specular highlights, with their high exponents, are the least linear thing in the model. Interpolated normals are shorter than unit length between vertices (the chord of an arc), so Phong shading must renormalize per fragment.

**Material parameters.** In this model a material is $(k_a, k_d, k_s, p)$. Two rules of thumb that make materials look physical:

- **Dielectrics** (plastic, paint, skin, wood): coloured $k_d$, colourless $k_s$ around $0.04$; highlights look white.
- **Metals**: $k_d \approx 0$, coloured $k_s$; highlights take the metal's colour.

And for energy: a surface cannot reflect more light than it receives, so $k_d + k_s \le 1$ per channel is a sensible cap. Raising $p$ narrows the highlight without making it dimmer, which quietly *removes* energy; physically-based variants multiply the specular term by roughly $(p+8)/8\pi$ so that a sharper highlight is also a brighter one ([3.6](03-06-radiometry-brdfs-rendering-equation.md)).

**Linear light and sRGB.** A stored 8-bit sRGB value $c \in [0,1]$ encodes linear intensity $x$ by approximately a power law:

$$x = \begin{cases} c/12.92 & c \le 0.04045 \\[2pt] \left(\dfrac{c + 0.055}{1.055}\right)^{2.4} & \text{otherwise} \end{cases} \qquad (\text{roughly } x \approx c^{2.2}).$$

In words: sRGB spends more codes on dark tones, where eyes are more sensitive; sRGB $0.5$ is linear $0.214$, and linear $0.5$ is sRGB $0.735$. **Decode textures to linear, light in linear, blend in linear, encode once for display.** *(card: [sRGB and linear light](../reference.md#srgb-and-linear-light))*

## Picture

![A plot of shaded intensity against position along one wide triangle whose vertices are at x equals minus 2 and plus 2, with a light directly above x equals 0, using kd and ks of 0.5 and exponent 10. A blue curve, per-fragment Phong shading, rises from 0.224 at each vertex to a sharp peak of 1.0 at the centre. A dashed grey curve shows the diffuse part alone, peaking at 0.5. A flat coral line at 0.224 joins the two coral vertex dots, labelled Gouraud, vertex colours interpolated](assets/02-05-fig1.svg)

The coral line isn't a bad approximation of the blue curve — it misses its entire shape. Both vertices see the light at a grazing $63°$ and no highlight, so Gouraud interpolates two dim colours and the triangle's brightest point is never computed.

## Worked examples

**Example 1 (mechanical): Blinn–Phong on 2.4's point.** Reuse [2.4](02-04-lighting-diffuse-specular-phong.md)'s Example 1: $\mathbf{n} = (0,1,0)$, $\mathbf{l} = (0.6, 0.8, 0)$, $\mathbf{v} = (-0.8, 0.6, 0)$, where Phong with $p = 20$ gave $(\mathbf{r}\cdot\mathbf{v})^{20} = 0.96^{20} = 0.442$.

$$\mathbf{l} + \mathbf{v} = (-0.2,\ 1.4,\ 0), \qquad \lVert\cdot\rVert = \sqrt{0.04 + 1.96} = 1.4142, \qquad \mathbf{h} = (-0.1414,\ 0.9899,\ 0).$$

$\mathbf{n}\cdot\mathbf{h} = 0.9899$.

- Same exponent, $p' = 20$: $0.9899^{20} = 0.817$ — nearly twice as bright, a much broader highlight.
- Four times the exponent, $p' = 80$: $0.9899^{80} = 0.446$ — within 1% of Phong's $0.442$.

The angles confirm it: $\arccos 0.96 = 16.26°$ between $\mathbf{r}$ and $\mathbf{v}$, and $\arccos 0.9899 = 8.13°$ between $\mathbf{n}$ and $\mathbf{h}$ — exactly half, because all three vectors lie in the $xy$-plane.

**Example 2 (why you'd care): a highlight Gouraud can't see.** A long floor triangle spans $x = -2$ to $x = 2$ at $y = 0$, normal $(0,1,0)$. A light of intensity 1 and the eye are both at $(0, 1, 0)$, so at every point $\mathbf{l} = \mathbf{v} = \mathbf{h}$. Material $k_d = k_s = 0.5$, Blinn–Phong $p' = 10$, no ambient, no falloff.

*At a vertex* $x = \pm2$: $\mathbf{l} = (\mp2, 1, 0)/\sqrt5$, so $\mathbf{n}\cdot\mathbf{l} = \mathbf{n}\cdot\mathbf{h} = 1/\sqrt5 = 0.447$.

$$L = 0.5(0.447) + 0.5(0.447)^{10} = 0.2236 + 0.00016 = 0.224.$$

*Gouraud at the centre:* both vertex colours are $0.224$, so the centre is $\mathbf{0.224}$.

*Phong shading at the centre:* the interpolated normal is still $(0,1,0)$, and there $\mathbf{l} = \mathbf{h} = (0, 1, 0)$:

$$L = 0.5(1) + 0.5(1)^{10} = \mathbf{1.0}.$$

A factor of 4.5, and not a subtle one: Gouraud misses the diffuse peak too, because diffuse brightness is not linear in position either. The fix is either per-fragment lighting or a vertex at the centre. On a finely tessellated character Gouraud is often acceptable; on a large floor or wall it never is.

## Watch out

- **You might think** "Phong shading" means using the Phong reflection model — **but actually** they are independent. Phong shading is *per-fragment evaluation with interpolated normals*, and it is usually paired with the Blinn–Phong model. Gouraud shading can use either model too.
- **You might think** interpolated normals are unit vectors — **but actually** the average of two unit vectors is shorter than one (midway between normals $90°$ apart the length is $0.707$). Skipping the per-fragment renormalization darkens every triangle's interior and dulls its highlights.
- **You might think** a texture value of 0.5 is half-reflective — **but actually** if the texture is stored in sRGB, as nearly all colour textures are, 0.5 means a linear reflectance of 0.214. Lighting with the raw value makes midtones too bright before lighting and too dark after it, and it makes the image depend on the display encoding rather than on the scene.

## One-liner

> Blinn–Phong measures the normal against the halfway vector (use about four times Phong's exponent); light per fragment if highlights can fall inside triangles; and do all of it in linear light, converting from and to sRGB only at the edges.

## Problems

**P1 (🟢)** At a point with $\mathbf{n} = (0, 0, 1)$, the light direction is $\mathbf{l} \propto (1, 0, 1)$ and the view direction $\mathbf{v} \propto (0, 1, 1)$.
(a) Compute $\mathbf{h}$ and $\mathbf{n}\cdot\mathbf{h}$.
(b) Compute Phong's $\mathbf{r}\cdot\mathbf{v}$.
(c) Compare the Phong factor with $p = 4$ and the Blinn–Phong factor with $p' = 16$. Is the "four times" rule exact here? Why or why not?

**P2 (🟡)** A floor triangle's edge runs from a vertex at $x = -1$ to a vertex at $x = 3$ (at $y = 0$, normal $(0,1,0)$). A light of intensity 1 and the eye are both at $(0, 1, 0)$. Material: $k_d = k_s = 0.5$, Blinn–Phong $p' = 10$, no ambient or falloff. View the floor orthographically, so screen-linear interpolation is exact.
(a) Compute the shaded value at each vertex.
(b) Compute the Gouraud value at $x = 0$.
(c) Compute the Phong-shaded value at $x = 0$.
(d) Name the smallest change to the mesh that would make Gouraud shading exact at $x = 0$.

**P3 (🔴)** A diffuse texture stores the colour value 0.5 (sRGB). A white light of intensity 1 hits the surface with $\mathbf{n}\cdot\mathbf{l} = 0.5$.
(a) Compute the displayed sRGB value when lighting is done correctly in linear space.
(b) Compute the displayed value when a buggy shader multiplies the raw sRGB texture value by $\mathbf{n}\cdot\mathbf{l}$ and writes the result straight to the sRGB framebuffer. By what factor is the displayed *light* wrong?
(c) An antialiased edge pixel is half covered by a white (1.0) surface and half by black. Which 8-bit value should it store, and what does storing 128 look like?

<details>
<summary>Solutions</summary>

**P1**

(a) $\mathbf{l} = (0.707, 0, 0.707)$, $\mathbf{v} = (0, 0.707, 0.707)$. $\mathbf{l} + \mathbf{v} = (0.707, 0.707, 1.414)$, length $\sqrt{0.5 + 0.5 + 2} = 1.732$, so

$$\mathbf{h} = (0.408,\ 0.408,\ 0.816), \qquad \mathbf{n}\cdot\mathbf{h} = \mathbf{0.816}\ \ (35.3°).$$

(b) $\mathbf{r} = 2(\mathbf{n}\cdot\mathbf{l})\mathbf{n} - \mathbf{l} = 2(0.707)(0,0,1) - (0.707, 0, 0.707) = (-0.707,\ 0,\ 0.707)$.

$\mathbf{r}\cdot\mathbf{v} = 0 + 0 + 0.5 = \mathbf{0.5}\ \ (60°)$.

(c) Phong: $0.5^4 = \mathbf{0.0625}$. Blinn–Phong: $0.816^{16} = \mathbf{0.039}$.

Not exact: $35.3°$ is more than half of $60°$. The half-angle relation holds only when $\mathbf{n}$, $\mathbf{l}$, $\mathbf{v}$ are coplanar; here $\mathbf{l}$ and $\mathbf{v}$ lie in different planes through $\mathbf{n}$, so $\mathbf{h}$ sits farther from $\mathbf{n}$ than half the $\mathbf{r}$–$\mathbf{v}$ angle and Blinn–Phong gives the dimmer highlight. The "four times" rule is a coplanar approximation.

**P2**

At position $x$, $\mathbf{l} = \mathbf{h} = (-x, 1, 0)/\sqrt{1 + x^2}$, so $\mathbf{n}\cdot\mathbf{l} = \mathbf{n}\cdot\mathbf{h} = 1/\sqrt{1 + x^2}$ and $L(x) = 0.5c + 0.5c^{10}$ with $c = 1/\sqrt{1+x^2}$.

(a) $x = -1$: $c = 0.7071$, $c^{10} = 0.03125$, $L = 0.3536 + 0.0156 = \mathbf{0.369}$.
$x = 3$: $c = 0.3162$, $c^{10} = 0.00001$, $L = 0.1581 + 0.0000 = \mathbf{0.158}$.

(b) $x = 0$ is a quarter of the way from $-1$ to $3$, so the weights are $0.75$ and $0.25$:

$$0.75(0.369) + 0.25(0.158) = 0.277 + 0.040 = \mathbf{0.316}.$$

(c) At $x = 0$, $c = 1$: $L = 0.5 + 0.5 = \mathbf{1.0}$.

(d) Put a vertex at $x = 0$ (split the edge there). Gouraud is exact *at vertices*, so placing one at the highlight's peak recovers the peak value — though between vertices it still interpolates linearly and under-represents the highlight's shape.

**P3**

(a) Decode: sRGB $0.5 \to$ linear $\left(\tfrac{0.555}{1.055}\right)^{2.4} = 0.214$. Light: $0.214 \times 0.5 = 0.107$. Encode: $1.055(0.107)^{1/2.4} - 0.055 = \mathbf{0.361}$ (8-bit value 92).

(b) Buggy: $0.5 \times 0.5 = \mathbf{0.25}$ written as sRGB. The display decodes sRGB $0.25$ to linear $0.051$. The correct linear light was $0.107$, so the buggy pixel emits **about 2.1 times too little light** — shaded regions look too dark and too contrasty.

(c) Half coverage means half the light: linear $0.5$, which encodes to sRGB $0.735$, i.e. **8-bit 188**. Storing 128 (sRGB $0.5$) emits linear $0.214$ — less than half the light — so edges look too dark and antialiased lines appear thin and "ropy", with brightness varying as the line's coverage changes along its length.

</details>

## Flashback

**From Lesson 2.3 (perspective-correct interpolation):** A vertex at $w = 1.5$ is coloured red $(1, 0, 0)$ and a vertex at $w = 6$ is coloured blue $(0, 0, 1)$. A pixel lies one third of the way from the red vertex to the blue one **on screen**.
(a) Give the naive screen-linear colour.
(b) Give the perspective-correct colour.
(c) Give the correctly interpolated depth $w$ at that pixel.

<details>
<summary>Solution</summary>

Screen weights: $\tfrac23$ for red, $\tfrac13$ for blue.

(a) $\tfrac23(1,0,0) + \tfrac13(0,0,1) = \mathbf{(0.667,\ 0,\ 0.333)}$.

(b) Divide each weight by its $w$: $\tfrac{2/3}{1.5} = 0.4444$ and $\tfrac{1/3}{6} = 0.0556$, sum $0.5$. Normalized: $0.889$ and $0.111$.

$$\text{colour} = 0.889(1,0,0) + 0.111(0,0,1) = \mathbf{(0.889,\ 0,\ 0.111)}.$$

The pixel is much redder than naive interpolation claims: the near (red) vertex dominates.

(c) $w = 1/0.5 = \mathbf{2}$. Check: one ninth of the way along the surface from $w = 1.5$ to $w = 6$ is $1.5 + \tfrac19(4.5) = 2$. ✓

</details>

## Connections

- **Backward:** $\mathbf{h}$ replaces [2.4](02-04-lighting-diffuse-specular-phong.md)'s $\mathbf{r}$; Gouraud interpolates colours and Phong shading interpolates normals, both with [2.3](02-03-perspective-correct-interpolation.md)'s perspective-correct weights; renormalization is needed for the same reason [1.3](01-03-3d-transforms-frames-and-normals.md) renormalized after the normal matrix.
- **Forward:** Gouraud versus Phong shading is precisely "compute in the vertex shader" versus "compute in the fragment shader" in [3.1](03-01-the-programmable-gpu-pipeline.md). [3.6](03-06-radiometry-brdfs-rendering-equation.md) replaces $(k_d, k_s, p)$ with a BRDF and derives the normalization factor. [2.7](02-07-aliasing-supersampling-and-mipmaps.md)'s filtering and averaging must be done in linear light for the reason in P3.
- **Sideways:** the Blinn–Phong lobe $(\mathbf{n}\cdot\mathbf{h})^{p'}$ is, in a microfacet reading, the distribution of tiny mirror facets that happen to point along $\mathbf{h}$; the Lambertian term is the same "gray, diffuse surface" idealization that [`heat-transfer` 4.2](../../heat-transfer/lessons/04-02-real-surfaces-emissivity-kirchhoff.md) uses for thermal radiation. sRGB's power law is a practical instance of the Weber–Fechner compression derived in [`neuroscience` 3.1](../../neuroscience/lessons/03-01-transduction-neural-coding.md): equal code steps are closer to equal *perceived* steps than equal light steps would be.
