# Condensed Matter · Lesson 2.2: The diatomic chain — acoustic and optical branches

> ⏱ ~15 min · Module 2: Phonons and thermal properties · Builds on: [2.1 Lattice vibrations: the 1D monatomic chain](02-01-monatomic-chain.md), [`quantum-mechanics` harmonic oscillator](../../quantum-mechanics/syllabus.md) · Unlocks: [2.3 Phonons: quantizing the modes](02-03-phonons-quantization.md)

## Why this matters

Real crystals almost never have one atom per unit cell. Table salt has Na and Cl; silicon's diamond lattice has a two-atom basis; every ionic and covalent solid you care about carries at least two atoms in its repeating unit. The moment you put **two different masses** on the chain, something qualitatively new appears that the monatomic chain [2.1](02-01-monatomic-chain.md) could never show: a **second branch** of vibrations sitting at high frequency, and a **forbidden gap** between the branches where no lattice wave can exist. That high branch is why crystals absorb infrared light at sharp frequencies (the reststrahlen bands), and the gap in $\omega$ is the direct structural ancestor of the *electronic* band gap you'll meet in Module 3 — same math, same zone boundary, different wave.

## The idea

Start from the picture you already own. In [2.1](02-01-monatomic-chain.md), identical masses on springs gave one dispersion curve $\omega(k)$: neighboring atoms lag each other by a phase $ka$, and the whole thing was a single family of traveling waves that die to zero frequency as $k\to 0$ (long wavelength = sound).

Now alternate the masses: heavy $M$, light $m$, heavy $M$, light $m$, all joined by the *same* spring $C$. The repeating unit is now a **pair** — a two-atom basis — so the unit cell has length $a$ and contains **two** things that can move independently. Two degrees of freedom per cell means, for each wavevector $k$, **two** ways the cell can vibrate:

- Everyone leans the **same way** at once (heavy and light atoms move *in phase*). Long-wavelength versions of this are just sound waves again — this is the **acoustic branch**, and it still runs down to $\omega=0$ at $k=0$.
- The heavy and light atoms move **against each other** (*out of phase*), the light atom sprinting one way while the heavy one eases the other, so the cell's center of mass barely stirs. Squeezing and stretching the springs this hard costs energy even at infinite wavelength, so this mode has a **finite frequency at $k=0$**. This is the **optical branch**.

"Optical" because in an ionic crystal the two atoms carry opposite charge; moving them out of phase creates an **oscillating dipole** that couples to an electromagnetic wave — the crystal literally rings when you shine infrared light of the right frequency at it. Between the top of the acoustic branch and the bottom of the optical branch lies a window of frequencies with **no modes at all**: the phonon gap.

## The formal version

Label the cells $n = 1,2,\dots$. In cell $n$, let $u_n$ be the displacement of the heavy atom (mass $M$) and $v_n$ the displacement of the light atom (mass $m$), with $M>m$. Each atom is pulled by its two nearest neighbors through identical springs of stiffness $C$ (units N/m). Newton's second law for the two sublattices:

$$M\ddot u_n = C\,(v_n + v_{n-1} - 2u_n), \qquad m\ddot v_n = C\,(u_{n+1} + u_n - 2v_n).$$

*In words: each atom accelerates toward the average position of its two neighbors — the same "pull toward the middle" as [2.1](02-01-monatomic-chain.md), just bookkept on two interleaved sublattices.* This is **two coupled equations**, so we need a plane-wave ansatz with two amplitudes:

$$u_n = A\,e^{i(kna-\omega t)}, \qquad v_n = B\,e^{i(kna-\omega t)},$$

where $A,B$ are the (generally different) complex amplitudes of the heavy and light atoms, $k$ the wavevector, $\omega$ the angular frequency, and $a$ the cell length. Substituting and cancelling the common exponential turns the differential equations into a $2\times2$ linear system for $(A,B)$:

$$\begin{pmatrix} 2C - M\omega^2 & -C(1+e^{-ika}) \\ -C(1+e^{ika}) & 2C - m\omega^2 \end{pmatrix}\begin{pmatrix} A \\ B \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}.$$

*In words: the plane-wave ansatz converts "coupled oscillators" into an eigenvalue problem — the allowed $\omega$ are the ones that let a nonzero $(A,B)$ solve this.* A nonzero solution exists only when the determinant vanishes; solving that quadratic in $\omega^2$ gives **two** roots for every $k$:

$$\boxed{\;\omega_\pm^2 = C\!\left(\frac{1}{M}+\frac{1}{m}\right) \pm C\sqrt{\left(\frac{1}{M}+\frac{1}{m}\right)^{2} - \frac{4\sin^{2}(ka/2)}{Mm}}\;}$$

*In words: one crystal, two vibrational branches — the minus sign is the acoustic branch $\omega_-$, the plus sign the optical branch $\omega_+$.* Read off the four numbers that define the whole diagram:

**At $k=0$** (infinite wavelength). Here $\sin^2(0)=0$, so the square root collapses to $C(1/M+1/m)$:

$$\omega_-(0) = 0, \qquad \omega_+(0) = \sqrt{2C\!\left(\tfrac{1}{M}+\tfrac{1}{m}\right)}.$$

The acoustic branch starts at zero (translating the whole crystal costs no energy); the optical branch starts at a finite frequency. Plug $\omega_+(0)$ back into the top matrix row: $2C\,A = C(1+1)B$ gives $MA = -mB$, i.e. $A/B = -m/M$ — **opposite signs**, and weighted so $MA+mB=0$: the center of mass stays fixed. That's the out-of-phase eigenvector. For the acoustic mode at small $k$, $A=B$: the atoms move together.

**At the zone boundary $k=\pi/a$.** Now $\sin^2(\pi/2)=1$, and the discriminant simplifies beautifully — $(1/M+1/m)^2 - 4/(Mm) = (1/M-1/m)^2$ — so the square root is just $|1/m-1/M|$:

$$\omega_-(\pi/a) = \sqrt{\frac{2C}{M}}, \qquad \omega_+(\pi/a) = \sqrt{\frac{2C}{m}}.$$

Because $M>m$, the acoustic top $\sqrt{2C/M}$ lies **below** the optical bottom $\sqrt{2C/m}$. Between them is the **forbidden gap**:

$$\Delta\omega = \sqrt{\frac{2C}{m}} - \sqrt{\frac{2C}{M}} \quad(\text{width of the phonon band gap}).$$

No lattice wave of the chain has a frequency in this window. Finally, counting: $N$ unit cells (with periodic boundary conditions) give $N$ allowed $k$ in the first zone, and *each* $k$ carries one acoustic and one optical mode — so $N$ acoustic $+$ $N$ optical $= 2N$ modes total, exactly matching the $2N$ atoms' $2N$ degrees of freedom. Two atoms per cell, two branches: the pattern generalizes — $p$ atoms per cell give $3$ acoustic branches (in 3D) and $3p-3$ optical ones.

## Picture

![Dispersion of the diatomic chain over the first Brillouin zone: a blue acoustic branch rising from zero and a coral optical branch above it, with the forbidden frequency gap between them shaded at the zone boundary, plus insets of in-phase and out-of-phase atomic motion](assets/02-02-fig1.svg)

## Worked examples

**Example 1 (evaluate the branches — a Na/Cl-like chain).** Take $C = 1$ (work in units where $C=1$), heavy mass $M = 3$, light mass $m = 1$. Find both branch frequencies at $k=0$ and at the zone boundary, and the gap width.

At $k=0$: the acoustic branch is $\omega_-(0)=0$. The optical branch:

$$\omega_+(0) = \sqrt{2C\!\left(\tfrac1M+\tfrac1m\right)} = \sqrt{2\left(\tfrac13+1\right)} = \sqrt{\tfrac{8}{3}} \approx 1.63.$$

At $k=\pi/a$:

$$\omega_-(\pi/a)=\sqrt{\tfrac{2C}{M}}=\sqrt{\tfrac23}\approx 0.82, \qquad \omega_+(\pi/a)=\sqrt{\tfrac{2C}{m}}=\sqrt{2}\approx 1.41.$$

Gap width $\Delta\omega = \sqrt{2}-\sqrt{2/3}\approx 1.41-0.82 = 0.59$. Notice the optical branch *drops* from $1.63$ at the center to $1.41$ at the edge, while the acoustic branch *rises* from $0$ to $0.82$ — they lean toward each other but never touch, leaving the shaded gap. These are exactly the numbers plotted above.

**Example 2 (which branch is this motion?).** A snapshot of a long-wavelength ($k\approx 0$) mode shows every Na$^+$ displaced $+0.10$ Å and every Cl$^-$ displaced $-0.13$ Å, so that (mass $\times$ displacement) sums to zero across each cell. Which branch, and would it absorb infrared light?

The two sublattices move in **opposite directions** with the center of mass fixed ($M A + m B \approx 0$) — that is the optical eigenvector, so this is the **optical branch**. Since Na and Cl carry opposite charge, out-of-phase motion separates $+$ and $-$ charge and builds an oscillating electric dipole; that dipole couples to the electric field of light, so yes — this mode is **infrared active** and shows up as a strong absorption (reststrahlen) band. Had the two atoms moved the *same* way (acoustic branch at small $k$), no net dipole would form and there'd be no first-order IR absorption.

## Watch out

- **You might think "optical" means it involves visible light.** It's named for the *coupling mechanism* (an oscillating dipole that talks to EM waves), and the relevant photons are **infrared**, not optical-frequency. The word flags out-of-phase, dipole-active motion, nothing about wavelength being visible.
- **You might think the gap means the crystal can't vibrate there.** It can't support a *propagating plane wave* at those frequencies — drive the chain in the gap and the disturbance decays exponentially (an evanescent mode), it doesn't travel. The gap is about traveling modes, exactly as the electronic band gap in Module 3 forbids *propagating* electron states, not all wavefunctions.
- **You might expect the gap to survive when $M=m$.** It doesn't. Set $M=m$ and $\omega_-(\pi/a)=\omega_+(\pi/a)=\sqrt{2C/M}$ — the branches touch and the gap closes. You've just artificially doubled the cell of a monatomic chain; the "optical" branch is only the upper half of the monatomic curve **folded back** into the smaller zone (see P3). No mass contrast, no gap.

## One-liner

> Two atoms per cell give two branches — an acoustic one rising from $\omega=0$ (atoms in phase, sound) and an optical one at finite $\omega$ (atoms out of phase, an IR-active dipole) — separated at the zone boundary by a forbidden gap from $\sqrt{2C/M}$ to $\sqrt{2C/m}$.

## Problems

**P1 (🟢)** A diatomic chain has spring constant $C = 15$ N/m, heavy mass $M = 4\times10^{-26}$ kg, light mass $m = 1\times10^{-26}$ kg. Compute the optical-branch frequency at $k=0$, $\omega_+(0)$.

**P2 (🟡)** For the same chain, find the acoustic and optical frequencies at the zone boundary $k=\pi/a$, and the width of the phonon gap. Which of the three numbers $\{\omega_-(\pi/a),\,\omega_+(\pi/a),\,\omega_+(0)\}$ is the largest, and does that ordering hold for *every* diatomic chain?

**P3 (🔴, optional)** Show that when $M=m$ the diatomic result reduces to the monatomic chain of [2.1](02-01-monatomic-chain.md), $\omega = \sqrt{4C/M}\,|\sin(k a/4)|$, and explain in one sentence why the "optical branch" is really the monatomic dispersion *zone-folded* into the halved Brillouin zone.

<details>
<summary>Solutions</summary>

**P1** $\dfrac1M+\dfrac1m = \dfrac{1}{4\times10^{-26}}+\dfrac{1}{1\times10^{-26}} = (0.25+1.0)\times10^{26} = 1.25\times10^{26}\ \mathrm{kg^{-1}}$. Then

$$\omega_+(0)=\sqrt{2C\!\left(\tfrac1M+\tfrac1m\right)}=\sqrt{2(15)(1.25\times10^{26})}=\sqrt{3.75\times10^{27}}\approx 6.1\times10^{13}\ \mathrm{rad/s}.$$

*Check.* Units: $\sqrt{(\mathrm{N/m})\cdot\mathrm{kg^{-1}}}=\sqrt{(\mathrm{kg\,s^{-2}})\,\mathrm{kg^{-1}}}=\mathrm{s^{-1}}$ ✓. Magnitude $\sim10^{13}$ rad/s is a few THz — squarely in the infrared, exactly where real optical phonons live. ✓

**P2** At $k=\pi/a$:

$$\omega_-(\pi/a)=\sqrt{\tfrac{2C}{M}}=\sqrt{\tfrac{2(15)}{4\times10^{-26}}}=\sqrt{7.5\times10^{26}}\approx 2.7\times10^{13}\ \mathrm{rad/s},$$
$$\omega_+(\pi/a)=\sqrt{\tfrac{2C}{m}}=\sqrt{\tfrac{2(15)}{1\times10^{-26}}}=\sqrt{3.0\times10^{27}}\approx 5.5\times10^{13}\ \mathrm{rad/s}.$$

Gap width $\Delta\omega = 5.5\times10^{13} - 2.7\times10^{13} \approx 2.8\times10^{13}\ \mathrm{rad/s}$ (no propagating modes in this window).

Largest is $\omega_+(0)\approx 6.1\times10^{13}$ — the optical branch peaks at the zone **center**, not the edge. This ordering, $\omega_+(0) \ge \omega_+(\pi/a) \ge \omega_-(\pi/a)$, holds for every diatomic chain: $\omega_+(0)=\sqrt{2C(1/M+1/m)}$ always exceeds $\omega_+(\pi/a)=\sqrt{2C/m}$ because $1/M+1/m > 1/m$, and $\omega_+(\pi/a)>\omega_-(\pi/a)$ whenever $M>m$. The optical branch always slopes *down* from center to edge.

*Check.* With $M=4m$, $\omega_+(\pi/a)/\omega_-(\pi/a)=\sqrt{M/m}=2$ ✓ ($5.5/2.7\approx2$). And the three frequencies bracket the gap correctly: $2.7 < [\text{gap}] < 5.5 < 6.1$ ($\times10^{13}$). ✓

**P3** Set $M=m$. Then $1/M+1/m=2/M$ and $4/(Mm)=4/M^2$, so

$$\omega_\pm^2 = \frac{2C}{M} \pm C\sqrt{\frac{4}{M^2}-\frac{4\sin^2(ka/2)}{M^2}} = \frac{2C}{M}\Big(1 \pm \sqrt{1-\sin^2(ka/2)}\Big) = \frac{2C}{M}\big(1 \pm |\cos(ka/2)|\big).$$

Use the half-angle identities $1-\cos\theta = 2\sin^2(\theta/2)$ and $1+\cos\theta = 2\cos^2(\theta/2)$ with $\theta = ka/2$:

$$\omega_-^2 = \frac{2C}{M}\big(1-\cos\tfrac{ka}{2}\big)=\frac{4C}{M}\sin^2\!\frac{ka}{4} \;\Rightarrow\; \omega_-=\sqrt{\tfrac{4C}{M}}\,\big|\sin\tfrac{ka}{4}\big|,$$
$$\omega_+^2 = \frac{2C}{M}\big(1+\cos\tfrac{ka}{2}\big)=\frac{4C}{M}\cos^2\!\frac{ka}{4}\;\Rightarrow\;\omega_+=\sqrt{\tfrac{4C}{M}}\,\big|\cos\tfrac{ka}{4}\big|.$$

The acoustic branch is precisely the monatomic dispersion of [2.1](02-01-monatomic-chain.md) with true spacing $a/2$: $\omega=\sqrt{4C/M}\,|\sin(k(a/2)/2)|=\sqrt{4C/M}\,|\sin(ka/4)|$ ✓.

One-sentence reason: when the two masses are equal the "unit cell" length $a$ is an artificial doubling of the real spacing $a/2$, which **halves** the Brillouin zone (boundary $\pi/(a/2)=2\pi/a \to \pi/a$); the part of the single monatomic curve that used to live in $\pi/a < |k| < 2\pi/a$ gets **folded back** into $|k|<\pi/a$ and re-labeled the "optical" branch — and since $\sqrt{4C/M}\cos(ka/4)$ meets $\sqrt{4C/M}\sin(ka/4)$ at $k=\pi/a$, the gap closes exactly.

*Check.* At $k=\pi/a$: $\omega_-=\omega_+=\sqrt{4C/M}\cdot\tfrac{1}{\sqrt2}=\sqrt{2C/M}$ — the two branches meet, confirming zero gap when $M=m$. ✓

</details>

## Flashback

**From Lesson 2.1 (the monatomic chain):** For a monatomic chain of identical masses $M$, spring constant $C$, and spacing $b$, the dispersion is $\omega(k)=\sqrt{4C/M}\,|\sin(kb/2)|$. (a) Find the group velocity $v_g=d\omega/dk$ in the long-wavelength limit $k\to0$ and identify it as the speed of sound. (b) What is $v_g$ at the zone boundary $k=\pi/b$, and what does that value mean physically? (Fresh variant — asks for group velocity at both ends.)

<details>
<summary>Solution</summary>

(a) Differentiate: $v_g = \dfrac{d\omega}{dk} = \sqrt{\dfrac{4C}{M}}\cdot\dfrac{b}{2}\cos\!\dfrac{kb}{2}$. As $k\to0$, $\cos\to1$, so

$$v_g(0)=\sqrt{\tfrac{4C}{M}}\cdot\tfrac{b}{2}=\sqrt{\tfrac{C}{M}}\,b = v_s,$$

the **sound speed** — long-wavelength acoustic phonons are ordinary sound, with $\omega \approx v_s k$ linear in $k$.

(b) At $k=\pi/b$, $\cos(\pi/2)=0$, so $v_g(\pi/b)=0$. The group velocity vanishes at the zone boundary: the wave is a **standing wave** (a Bragg-reflected mode, alternate atoms exactly out of step), carrying no net energy through the crystal.

*Check.* Units of $v_g$: $\sqrt{(\mathrm{N/m})/\mathrm{kg}}\cdot\mathrm{m}=\mathrm{s^{-1}}\cdot\mathrm{m}=\mathrm{m/s}$ ✓. The same $v_g\to0$ at the boundary reappears in this lesson's acoustic and optical branches — every branch flattens at $k=\pi/a$. ✓

</details>

## Connections

- **Backward:** this is [2.1](02-01-monatomic-chain.md) with one extra degree of freedom per cell. The plane-wave ansatz, the first Brillouin zone, and the group velocity flattening at the boundary all carry over; adding a second atom simply turns the scalar equation into the $2\times2$ eigenproblem, and the coupled-oscillator normal-mode logic is the classical [`quantum-mechanics`](../../quantum-mechanics/syllabus.md) harmonic oscillator you'll quantize next.
- **Forward:** [2.3 Phonons: quantizing the modes](02-03-phonons-quantization.md) takes each of these $2N$ classical modes and gives it energy quanta $\hbar\omega$; the optical branch's near-flat, high-$\omega$ dispersion is exactly what makes the **Einstein model** of heat capacity ([2.4](02-04-heat-capacity-einstein-debye.md)) a decent picture of optical phonons, while the linear acoustic branch feeds the **Debye** $T^3$ law.
- **Sideways:** the gap at the zone boundary is the phonon twin of the **electronic band gap** (Module 3, nearly-free-electron model) — both come from waves Bragg-reflecting at $k=\pi/a$ and splitting into a lower and upper branch. And the IR activity of the optical branch is the dipole-radiation coupling from [`waves-optics`](../../waves-optics/syllabus.md): an oscillating dipole that both emits and absorbs EM waves.
