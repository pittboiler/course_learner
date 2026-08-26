# Astrodynamics · Lesson 2.2: The orbit in three dimensions

> ⏱ ~15 min · Module 2: Orbit determination & time-of-flight · Builds on: [2.1](02-01-classical-orbital-elements.md), [`linalg-refresher` 2.1](../../linalg-refresher/lessons/02-01-matrices-as-linear-maps.md) · Unlocks: 2.3 (state vectors and elements)

## Why this matters

Elements are for humans; Cartesian vectors are for computers, ground stations, and anything that has to point an antenna. This lesson is the bridge: given the six elements, produce $\mathbf r$ and $\mathbf v$ in an Earth-centered inertial frame.

The trick is to do the hard part in a frame where the problem is trivially easy — the **perifocal frame**, where the orbit lies flat in the $xy$-plane and the position vector is just $(r\cos\theta, r\sin\theta, 0)$ — and then rotate the answer into the frame you actually want. That "solve it in the easy frame, then rotate" pattern is one of the most reusable moves in applied mathematics, and here it is in its cleanest form.

## The idea

Imagine the orbit drawn on a stiff sheet of clear plastic, with the primary at a focus and perigee pointing along the sheet's own $x$-axis. On that sheet, describing the spacecraft's position takes nothing more than polar-to-Cartesian conversion. That sheet's coordinate system is the **perifocal frame**.

Now the whole job is: hold the sheet at the right attitude in space. Three angles, three turns, done in a specific order:

1. Rotate the sheet about the polar axis by $\Omega$, so the line of nodes ends up where it belongs.
2. Tip the sheet about that node line by the inclination $i$.
3. Spin the sheet in its own plane by $\omega$, so perigee ends up where it belongs.

Each turn is a matrix. Multiply them in the right order and you have one $3\times3$ matrix that converts perifocal coordinates into inertial coordinates. Because rotation matrices are orthogonal, going back is free: just transpose.

The order matters enormously, and it's worth understanding *why* this particular order. Each rotation is about an axis that the *previous* rotation put in place — the node line only exists after you've swiveled by $\Omega$; the orbit normal only points correctly after you've tipped by $i$. This is a **3-1-3 Euler sequence** (third axis, first axis, third axis), the classic sequence for orientation problems with an axis of symmetry.

## The formal version

**The perifocal frame.** Define the right-handed triad

$$\hat{\mathbf p} = \frac{\mathbf e}{e} \ (\text{toward perigee}), \qquad \hat{\mathbf w} = \frac{\mathbf h}{h} \ (\text{along the orbit normal}), \qquad \hat{\mathbf q} = \hat{\mathbf w}\times\hat{\mathbf p}.$$

*In words: $x$ points at perigee, $z$ points along the angular momentum, $y$ completes the set 90 degrees ahead of perigee in the direction of motion.* In this frame:

$$\mathbf r_{\rm pf} = r\cos\theta\;\hat{\mathbf p} + r\sin\theta\;\hat{\mathbf q} = \frac{p}{1+e\cos\theta}\begin{pmatrix}\cos\theta\\ \sin\theta\\ 0\end{pmatrix}.$$

Differentiating and using $h = r^2\dot\theta$ (from [1.2](01-02-angular-momentum-keplers-second-law.md)) gives the velocity — a two-line computation whose result is worth memorizing because of how clean it is:

$$\mathbf v_{\rm pf} = \frac{\mu}{h}\begin{pmatrix}-\sin\theta\\ e+\cos\theta\\ 0\end{pmatrix}.$$

*In words: the velocity components in the perifocal frame are pure trigonometry scaled by $\mu/h$, with the eccentricity showing up as a constant offset on the transverse component.* Two sanity checks fall out immediately: at $\theta = 0$ (perigee) $\mathbf v_{\rm pf} = (0, \mu(1+e)/h, 0)$, purely transverse ✓; and the $z$-components of both vectors are zero, which is the orbit plane ([1.2](01-02-angular-momentum-keplers-second-law.md)) restated ✓.

**Rotation matrices.** Write $R_3(\alpha)$ for a rotation of the coordinate frame by $\alpha$ about the third axis, and $R_1(\alpha)$ for a rotation about the first:

$$R_3(\alpha) = \begin{pmatrix}\cos\alpha & \sin\alpha & 0\\ -\sin\alpha & \cos\alpha & 0\\ 0&0&1\end{pmatrix}, \qquad R_1(\alpha) = \begin{pmatrix}1&0&0\\ 0&\cos\alpha & \sin\alpha\\ 0&-\sin\alpha & \cos\alpha\end{pmatrix}.$$

These are **frame rotations** (they re-express the same physical vector in a turned coordinate system), which is why the signs sit where they do. Each is orthogonal: $R^{-1} = R^{\mathsf T}$.

**The transformation.** The matrix taking inertial components to perifocal components is the 3-1-3 sequence

$$[Q]_{X\to x} = R_3(\omega)\,R_1(i)\,R_3(\Omega),$$

read right to left: swivel by $\Omega$, tip by $i$, spin by $\omega$. And therefore the one you usually want, perifocal to inertial, is its transpose:

$$\boxed{\;[Q]_{x\to X} = [Q]_{X\to x}^{\mathsf T} = R_3(-\Omega)\,R_1(-i)\,R_3(-\omega), \qquad \mathbf r_{\rm ECI} = [Q]_{x\to X}\,\mathbf r_{\rm pf}.\;}$$

*In words: one matrix built from the three orientation angles converts flat-orbit coordinates into real-sky coordinates.* The same matrix transforms $\mathbf v$ — velocity is a vector, and rotations don't care which vector you feed them. See [perifocal-to-ECI matrix](../reference.md#perifocal-to-eci-matrix).

**The recipe, end to end.** Given $(a, e, i, \Omega, \omega, \theta)$:

1. $p = a(1-e^2)$ and $h = \sqrt{\mu p}$.
2. $r = p/(1+e\cos\theta)$.
3. Build $\mathbf r_{\rm pf}$ and $\mathbf v_{\rm pf}$ from the boxed formulas above.
4. Build $[Q]_{x\to X}$ from $i$, $\Omega$, $\omega$.
5. Multiply: $\mathbf r = [Q]\mathbf r_{\rm pf}$, $\mathbf v = [Q]\mathbf v_{\rm pf}$.

Written out, the perifocal-to-inertial matrix is

$$[Q]_{x\to X} = \begin{pmatrix} c_\Omega c_\omega - s_\Omega s_\omega c_i & -c_\Omega s_\omega - s_\Omega c_\omega c_i & s_\Omega s_i \\ s_\Omega c_\omega + c_\Omega s_\omega c_i & -s_\Omega s_\omega + c_\Omega c_\omega c_i & -c_\Omega s_i \\ s_\omega s_i & c_\omega s_i & c_i \end{pmatrix},$$

with $c_\alpha = \cos\alpha$, $s_\alpha = \sin\alpha$. You will rarely expand this by hand — but notice the third column is $\hat{\mathbf w}$, the orbit normal, expressed in ECI. That's a free reading of the orbit's orientation, and a good place to check your matrix: its bottom-right entry must equal $\cos i$.

## Picture

![On the left, the orbit drawn flat in the perifocal frame with axes toward perigee and ninety degrees ahead, showing the position vector resolved into components; on the right, the chain of three rotations converting perifocal coordinates into Earth-centered inertial coordinates](assets/02-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — an equatorial orbit).** Take $a = 10{,}000$ km, $e = 0.2$, $i = 0^\circ$, $\Omega = 0^\circ$, $\omega = 0^\circ$, $\theta = 90^\circ$, about Earth.

$$p = 10{,}000(1-0.04) = 9600\ \mathrm{km}, \qquad h = \sqrt{398{,}600\times9600} = 61{,}857\ \mathrm{km^2/s}.$$

$$r = \frac{9600}{1+0.2\cos 90^\circ} = 9600\ \mathrm{km}.$$

$$\mathbf r_{\rm pf} = 9600\,(\cos 90^\circ, \sin 90^\circ, 0) = (0,\,9600,\,0)\ \mathrm{km},$$

$$\mathbf v_{\rm pf} = \frac{398{,}600}{61{,}857}(-\sin 90^\circ,\;0.2+\cos 90^\circ,\;0) = 6.444\,(-1,\;0.2,\;0) = (-6.444,\;1.289,\;0)\ \mathrm{km/s}.$$

With all three angles zero, $[Q] = I$ and the ECI vectors equal the perifocal ones.

*Check.* $v = \sqrt{6.444^2+1.289^2} = 6.571$ km/s. Vis-viva says $v = \sqrt{398{,}600(2/9600 - 1/10{,}000)} = \sqrt{43.18} = 6.571$ ✓. And $h = \|\mathbf r\times\mathbf v\| = |9600\times(-6.444)| = 61{,}862$ ✓ (rounding).

**Example 2 (why you'd care — a polar orbit's ground reach).** Same orbit but $i = 90^\circ$, $\Omega = 30^\circ$, $\omega = 0^\circ$, still $\theta = 90^\circ$. Now

$$[Q]_{x\to X} = \begin{pmatrix} c_\Omega & -s_\Omega c_i & s_\Omega s_i\\ s_\Omega & c_\Omega c_i & -c_\Omega s_i \\ 0 & s_i & c_i\end{pmatrix}_{\omega=0} = \begin{pmatrix}0.866 & 0 & 0.5\\ 0.5 & 0 & -0.866\\ 0 & 1 & 0\end{pmatrix},$$

using $c_i = 0$, $s_i = 1$, $c_\Omega = 0.866$, $s_\Omega = 0.5$. Then

$$\mathbf r = [Q]\,(0, 9600, 0)^{\mathsf T} = 9600\,(\text{column 2}) = 9600\,(0,\,0,\,1) = (0,\,0,\,9600)\ \mathrm{km}.$$

The spacecraft is **directly over the north pole**. That makes sense: with $\omega = 0$ perigee is at the ascending node on the equator, and a quarter turn later on a polar orbit puts you at maximum latitude, which for $i = 90^\circ$ is the pole itself. Only a polar or near-polar orbit ever gets there — which is why every ice-monitoring and pole-to-pole imaging satellite flies one, and why nothing at Cape Canaveral's natural $28.5^\circ$ can see Greenland.

*Check.* The magnitude survived the rotation: $\|\mathbf r\| = 9600$ km ✓ — rotations preserve length, which is the fastest way to catch a botched matrix.

## Watch out

- **You might multiply the rotations in the wrong order.** $R_3(\omega)R_1(i)R_3(\Omega) \ne R_3(\Omega)R_1(i)R_3(\omega)$ — rotations don't commute. Getting this backwards produces an orbit with the right shape in the wrong place, which looks plausible and is entirely wrong.
- **You might confuse frame rotations with vector rotations.** The matrices above rotate the *coordinate axes*, so they carry the opposite sign from matrices that rotate the *vector*. Textbooks differ; check any source's sign convention against the identity that the (3,3) entry of $[Q]_{x\to X}$ must be $\cos i$.
- **You might expect the transpose to be hard.** It isn't — that's the entire point of using orthogonal matrices. Never invert a rotation matrix numerically; transpose it.
- **You might apply the matrix to a scalar quantity.** $r$, $v$, $h$, $\varepsilon$ are frame-independent; only the *components* of vectors change. If your $r$ changed after rotating, you have a bug.

## One-liner

> Solve the orbit where it's flat — the perifocal frame, where $\mathbf r = r(\cos\theta,\sin\theta,0)$ — then carry the answer into the sky with one 3-1-3 rotation matrix, whose inverse is its transpose.

## Problems

**P1 (🟢)** An orbit has $h = 55{,}000\ \mathrm{km^2/s}$, $e = 0.3$, $\theta = 120^\circ$. Compute $\mathbf r_{\rm pf}$ and $\mathbf v_{\rm pf}$ about Earth.

**P2 (🟡)** For $i = 30^\circ$, $\Omega = 0^\circ$, $\omega = 0^\circ$, write out $[Q]_{x\to X}$ explicitly and apply it to the perifocal position $(8000, 0, 0)$ km. Interpret the result geometrically.

**P3 (🔴)** Show that the third column of $[Q]_{x\to X}$ is the unit orbit-normal $\hat{\mathbf w}$ expressed in ECI components, and use it to write down $\cos i$ directly. Then explain why the first column is *not* the node direction but the perigee direction.

<details>
<summary>Solutions</summary>

**P1** First $p = h^2/\mu = (5.5\times10^4)^2/398{,}600 = 7589$ km, so

$$r = \frac{7589}{1+0.3\cos 120^\circ} = \frac{7589}{1-0.15} = \frac{7589}{0.85} = 8928\ \mathrm{km}.$$

$$\mathbf r_{\rm pf} = 8928(\cos 120^\circ, \sin 120^\circ, 0) = 8928(-0.5,\,0.8660,\,0) = (-4464,\;7732,\;0)\ \mathrm{km}.$$

$$\frac{\mu}{h} = \frac{398{,}600}{55{,}000} = 7.247\ \mathrm{km/s},$$

$$\mathbf v_{\rm pf} = 7.247(-\sin 120^\circ,\; 0.3+\cos 120^\circ,\; 0) = 7.247(-0.8660,\;-0.2,\;0) = (-6.276,\;-1.449,\;0)\ \mathrm{km/s}.$$

*Check.* $h = \|\mathbf r_{\rm pf}\times\mathbf v_{\rm pf}\| = |(-4464)(-1.449) - (7732)(-6.276)| = |6468 + 48{,}526| = 54{,}994$ ✓ (rounding). The transverse velocity component is negative, meaning the spacecraft is past apogee-side of perigee heading outward — consistent with $\theta$ between $90^\circ$ and $180^\circ$ ✓.

**P2** With $\omega = \Omega = 0$: $c_\Omega = c_\omega = 1$, $s_\Omega = s_\omega = 0$, $c_i = 0.8660$, $s_i = 0.5$:

$$[Q]_{x\to X} = \begin{pmatrix}1 & 0 & 0\\ 0 & 0.8660 & -0.5\\ 0 & 0.5 & 0.8660\end{pmatrix}.$$

$$[Q]\begin{pmatrix}8000\\0\\0\end{pmatrix} = \begin{pmatrix}8000\\0\\0\end{pmatrix}\ \mathrm{km}.$$

**Geometrically:** with $\Omega = 0$ the ascending node lies along $\hat{\mathbf I}$, and with $\omega = 0$ perigee sits *at* the ascending node. A perifocal position of $(8000,0,0)$ is on the perigee axis — i.e. at the node — which is on the equator along $\hat{\mathbf I}$, and tipping the plane about that very axis leaves it unmoved. The rotation is about the $x$-axis, and points on the rotation axis are fixed.

*Check.* Only the $y$ and $z$ rows mix, as they must for $R_1$ ✓, and the (3,3) entry is $0.8660 = \cos 30^\circ$ ✓.

**P3** By definition $[Q]_{x\to X}$ maps perifocal components to ECI components. The perifocal components of $\hat{\mathbf w}$ are $(0,0,1)$, since $\hat{\mathbf w}$ is the perifocal $z$-axis. Multiplying a matrix by $(0,0,1)^{\mathsf T}$ extracts its **third column**. Hence

$$\hat{\mathbf w}_{\rm ECI} = \text{third column of } [Q]_{x\to X} = (s_\Omega s_i,\; -c_\Omega s_i,\; c_i).$$

Since $i$ is by definition the angle between $\hat{\mathbf K} = (0,0,1)$ and $\mathbf h$,

$$\cos i = \hat{\mathbf K}\cdot\hat{\mathbf w} = c_i,$$

the (3,3) entry — self-consistent, and a one-glance check on any $[Q]$ you build.

**Why the first column is perigee, not the node.** By the same argument, the first column is $[Q]$ applied to $(1,0,0)$, which in the perifocal frame is $\hat{\mathbf p}$ — the direction of perigee. The node direction would be $(\cos\omega, -\sin\omega, 0)$ in perifocal components, since the node sits $\omega$ *behind* perigee in the direction of motion. The two coincide only when $\omega = 0$, which is exactly the special case exploited in P2.

*Check.* The columns of an orthogonal matrix are mutually orthogonal unit vectors, and indeed $\|(s_\Omega s_i, -c_\Omega s_i, c_i)\| = \sqrt{s_i^2(s_\Omega^2+c_\Omega^2) + c_i^2} = 1$ ✓.

</details>

## Flashback

**From Lesson 1.5 (Kepler's laws & orbital period):** A satellite's orbit has a perigee altitude of 500 km and an apogee altitude of 5000 km above Earth's surface. Find its semi-major axis, eccentricity, and period.

<details>
<summary>Solution</summary>

Convert altitudes to radii with $R_\oplus = 6378$ km:

$$r_p = 6878\ \mathrm{km}, \qquad r_a = 11{,}378\ \mathrm{km}.$$

$$a = \frac{6878+11{,}378}{2} = 9128\ \mathrm{km}, \qquad e = \frac{11{,}378-6878}{11{,}378+6878} = \frac{4500}{18{,}256} = 0.2465.$$

$$T = 2\pi\sqrt{\frac{9128^3}{398{,}600}} = 2\pi\sqrt{\frac{7.6055\times10^{11}}{398{,}600}} = 2\pi\sqrt{1.9081\times10^{6}} = 2\pi(1381.3) = 8679\ \mathrm{s} = 144.7\ \mathrm{min}.$$

*Check.* $a(1-e) = 9128(0.7535) = 6878$ ✓ recovers perigee. And the period sits between the ISS's 92.5 min and the 218 min of a 12,000-km circular orbit, as it should for an intermediate $a$ ✓.

</details>

## Connections

- **Backward:** the three angles being rotated here are the ones defined in [2.1](02-01-classical-orbital-elements.md); $\hat{\mathbf p}$ and $\hat{\mathbf w}$ are the normalized conserved vectors $\mathbf e$ and $\mathbf h$ from [1.2](01-02-angular-momentum-keplers-second-law.md) and [1.3](01-03-orbit-equation-conic-sections.md).
- **Forward:** [2.3](02-03-state-vectors-and-elements.md) runs this machinery in reverse — from $(\mathbf r, \mathbf v)$ back to the six elements — completing the round trip. [3.5](03-05-relative-motion-cw-equations.md) introduces yet another frame (LVLH) built on the same rotate-into-a-convenient-basis idea.
- **Sideways (linear algebra):** everything here is [`linalg-refresher` 4.1](../../linalg-refresher/lessons/04-01-inner-products-orthogonality.md)'s orthonormal-basis change of coordinates. The perifocal triad is an orthonormal basis; $[Q]$ is the change-of-basis matrix; and $Q^{-1} = Q^{\mathsf T}$ is the defining property of orthogonal matrices.
