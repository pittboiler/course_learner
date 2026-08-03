# Quantum Field Theory · Lesson 1.4: The Klein–Gordon field

> ⏱ ~15 min · Module 1: Why fields? · Builds on: [1.3 Symmetries and Noether's theorem for fields](01-03-symmetries-noether-for-fields.md) · Unlocks: [2.1 Canonical quantization and field operators](02-01-canonical-quantization-field-operators.md)

## Why this matters

The **Klein–Gordon field** is the simplest relativistic field — a single real (or complex) scalar — and it's the training ground for everything. It's the first relativistic wave equation, the field of spin-$0$ particles (like the Higgs boson or pions), and the object Module 2 quantizes into our first real quantum field theory. But it also carries the warning from [1.1](01-01-why-qm-relativity-forces-fields.md) made concrete: interpreted as a single-particle wavefunction, it has **negative-energy solutions** and a **non-positive probability density** — it fails. That failure is a feature, not a bug: it's precisely the signal that $\phi$ must be a *field operator*, not a wavefunction, and that its negative-frequency modes describe *antiparticles*. Understanding why the single-particle KG equation breaks is understanding why QFT exists.

## The idea

Start from the relativistic energy–momentum relation $E^2 = \mathbf{p}^2 + m^2$ and turn it into a wave equation the way you'd guess: replace $E \to i\partial_t$ and $\mathbf{p} \to -i\nabla$ (as in QM), acting on a field $\phi$. This gives $-\partial_t^2\phi = (-\nabla^2 + m^2)\phi$, i.e. the **Klein–Gordon equation** $(\Box + m^2)\phi = 0$ — the wave equation with a mass term, which we already derived from a Lagrangian in [1.2](01-02-classical-field-theory-lagrangian.md).

Its plane-wave solutions $\phi \sim e^{-ip\cdot x}$ exist only when $p^2 = m^2$ — the **mass shell** — which is just $E^2 = \mathbf{p}^2 + m^2$ again. Plot it (the picture): energy versus momentum traces *two* hyperbola branches, $E = \pm\omega_{\mathbf p}$ with $\omega_{\mathbf p} = \sqrt{\mathbf{p}^2 + m^2}$, separated by a gap of $2m$ at zero momentum. The upper branch is fine (positive energy). The **lower branch** — negative energies with no floor — is the trouble.

If you insist $\phi$ is a single-particle wavefunction, two disasters follow: (1) the negative-energy solutions can't be discarded (they're needed for completeness), giving a spectrum unbounded below; and (2) the natural "probability density" built from $\phi$ is **not positive-definite** — it can go negative, which is meaningless for a probability. Both are fatal for the single-particle reading. The resolution, executed in Module 2: reinterpret $\phi$ as a quantum *field*. Then the positive-frequency part $e^{-i\omega t}$ *annihilates particles* and the negative-frequency part $e^{+i\omega t}$ *creates antiparticles* — both carry positive energy, the density becomes a *charge* density (which is allowed to be negative), and everything is consistent.

## The formal version

The **Klein–Gordon equation** for a real scalar of mass $m$:

$$(\Box + m^2)\phi = 0, \qquad \Box = \partial_\mu\partial^\mu = \partial_t^2 - \nabla^2.$$

**Plane-wave solutions** $\phi(x) = e^{-ip\cdot x}$ with $p\cdot x = p^\mu x_\mu = Et - \mathbf{p}\cdot\mathbf{x}$ solve it iff

$$p^2 = p_\mu p^\mu = E^2 - \mathbf{p}^2 = m^2 \quad\Longrightarrow\quad E = \pm\,\omega_{\mathbf p}, \quad \omega_{\mathbf p} = \sqrt{\mathbf{p}^2 + m^2}.$$

*In words:* solutions live on the mass shell $p^2 = m^2$; each momentum gives a positive- and negative-energy mode. The general solution is a superposition over all $\mathbf{p}$ of both branches — the field's **mode expansion**, which becomes the creation/annihilation expansion in [2.2](02-02-creation-annihilation-fock-space.md):

$$\phi(x) = \int\!\frac{d^3p}{(2\pi)^3}\,\frac{1}{\sqrt{2\omega_{\mathbf p}}}\Big(a_{\mathbf p}\,e^{-ip\cdot x} + a_{\mathbf p}^\dagger\,e^{+ip\cdot x}\Big)\bigg|_{p^0 = \omega_{\mathbf p}}.$$

**The single-particle failure.** The KG "conserved current" (from the complex field's phase symmetry, [1.3](01-03-symmetries-noether-for-fields.md)) is $j^\mu = i(\phi^*\partial^\mu\phi - \phi\,\partial^\mu\phi^*)$, with density $j^0 = i(\phi^*\dot\phi - \phi\dot\phi^*)$. *In words:* $j^0$ is **not positive-definite** — for a negative-energy mode it comes out negative — so it cannot be a probability density. (It is a fine *charge* density, which is the field-theory reading.) Combined with the unbounded-below spectrum, the single-particle interpretation is untenable; quantization is the fix.

## Picture

![The relativistic dispersion E squared equals p squared plus m squared as two hyperbola branches — a positive-energy particle branch and a negative-energy antiparticle branch — separated by a mass gap of 2m, with light-cone asymptotes E equals plus or minus the magnitude of p](assets/01-04-fig1.svg)

## Worked examples

**Example 1 (plane waves live on the mass shell).** Plug $\phi = e^{-ip\cdot x} = e^{-i(Et - \mathbf{p}\cdot\mathbf{x})}$ into $(\Box + m^2)\phi = 0$. Each derivative brings down a factor: $\partial_t \to -iE$, $\nabla \to i\mathbf{p}$, so $\partial_t^2 \to -E^2$ and $\nabla^2 \to -\mathbf{p}^2$. Thus

$$(\Box + m^2)\phi = (-E^2 + \mathbf{p}^2 + m^2)\,e^{-ip\cdot x} = 0 \;\Longrightarrow\; E^2 = \mathbf{p}^2 + m^2.$$

So a plane wave is a solution *only* on the mass shell — the KG equation is exactly the statement "$p^2 = m^2$" in disguise. The two roots $E = \pm\omega_{\mathbf p}$ are the two branches; the negative one is inescapable because the equation is second-order in time (needing two independent solutions per mode).

**Example 2 (the density isn't positive — why single-particle fails).** For a negative-energy mode $\phi = e^{+i\omega t}\,e^{i\mathbf{p}\cdot\mathbf{x}}$ (taking $E = -\omega < 0$), compute the KG density $j^0 = i(\phi^*\dot\phi - \phi\dot\phi^*)$. Here $\dot\phi = i\omega\,\phi$ and $\dot\phi^* = -i\omega\,\phi^*$, so

$$j^0 = i\big(\phi^*(i\omega\phi) - \phi(-i\omega\phi^*)\big) = i\cdot 2i\omega\,|\phi|^2 = -2\omega\,|\phi|^2 < 0.$$

A **negative** "probability density" — nonsense for a single-particle wavefunction. (For a positive-energy mode the same calculation gives $+2\omega|\phi|^2 > 0$.) The sign tracks the sign of the energy, which is exactly why, in the field theory, $j^0$ is reinterpreted as *charge* density: positive-energy particles carry $+$, their antiparticles carry $-$, and total charge (not probability) is what's conserved. The KG equation was never wrong — only the single-particle interpretation was.

## Watch out

- **You might discard the negative-energy solutions.** You can't — a second-order-in-time equation needs both independent solutions per mode for completeness. In the quantized theory they aren't discarded; they're reinterpreted as antiparticle creation operators (positive energy), which is the whole point.
- **You might expect $j^0$ to be a probability.** For KG it's a *charge* density (can be negative), not a probability density. This is the concrete form of [1.1](01-01-why-qm-relativity-forces-fields.md)'s "single-particle interpretation fails." (Contrast the Schrödinger equation, first-order in time, whose $|\psi|^2$ *is* a good positive probability density.)
- **You might think spin-$0$ is unphysical because it "failed."** The KG *field* is perfectly physical — it describes real spin-$0$ particles (Higgs, pions). Only the naive single-particle *wavefunction* reading failed. The lesson is about interpretation, not about the equation being wrong.

## One-liner

> The Klein–Gordon equation $(\Box + m^2)\phi = 0$ puts solutions on the mass shell $p^2 = m^2$ with two energy branches $\pm\omega_{\mathbf p}$; its negative-energy modes and non-positive density kill the single-particle interpretation — and force $\phi$ to be a quantized field whose negative modes are antiparticles.

## Problems

**P1 (🟢)** Show the Klein–Gordon equation reduces to the free Schrödinger equation in the non-relativistic limit. *Hint:* write $\phi = e^{-imt}\psi$ (factor out the rest-energy oscillation), assume $\psi$ varies slowly ($|\ddot\psi| \ll m|\dot\psi|$), and keep leading terms — you should get $i\dot\psi = -\frac{\nabla^2}{2m}\psi$.

**P2 (🟡)** For the complex KG field, verify explicitly that a positive-energy plane wave $\phi = e^{-i\omega t + i\mathbf{p}\cdot\mathbf{x}}$ gives density $j^0 = 2\omega|\phi|^2 > 0$, while the negative-energy wave gives $j^0 < 0$ (Example 2). What does the sign of $j^0$ correspond to physically once $\phi$ is a quantum field?

**P3 (🔴, optional)** The Feynman propagator (Module 2) will be built from the mass shell. As a warm-up, show that the function $G(x) = \int\frac{d^4p}{(2\pi)^4}\frac{e^{-ip\cdot x}}{p^2 - m^2}$ is a Green's function of the KG operator, i.e. $(\Box + m^2)G(x) = -\delta^4(x)$. *Hint:* act with $(\Box + m^2)$ under the integral; it brings down $(-p^2 + m^2)$, cancelling the denominator. (The $i\varepsilon$ prescription needed to define the pole is the subject of [2.4](02-04-feynman-propagator.md).)

<details>
<summary>Solutions</summary>

**P1** Write $\phi = e^{-imt}\psi(\mathbf{x}, t)$. Then $\dot\phi = e^{-imt}(-im\psi + \dot\psi)$ and $\ddot\phi = e^{-imt}(-m^2\psi - 2im\dot\psi + \ddot\psi)$. The KG equation $\ddot\phi - \nabla^2\phi + m^2\phi = 0$ becomes $e^{-imt}(-m^2\psi - 2im\dot\psi + \ddot\psi - \nabla^2\psi + m^2\psi) = 0$, i.e. $-2im\dot\psi + \ddot\psi - \nabla^2\psi = 0$. In the non-relativistic limit $|\ddot\psi| \ll m|\dot\psi|$ (slow variation), drop $\ddot\psi$: $-2im\dot\psi = \nabla^2\psi$, i.e. $i\dot\psi = -\frac{\nabla^2}{2m}\psi$ — the free Schrödinger equation. The rest-energy $m$ was absorbed into the factored phase $e^{-imt}$. ✓

**P2** Positive-energy wave $\phi = e^{-i\omega t + i\mathbf{p}\cdot\mathbf{x}}$: $\dot\phi = -i\omega\phi$, $\dot\phi^* = i\omega\phi^*$, so $j^0 = i(\phi^*\dot\phi - \phi\dot\phi^*) = i(\phi^*(-i\omega\phi) - \phi(i\omega\phi^*)) = i(-i\omega - i\omega)|\phi|^2 = i(-2i\omega)|\phi|^2 = 2\omega|\phi|^2 > 0$. Negative-energy wave (Example 2): $j^0 = -2\omega|\phi|^2 < 0$. Physically, once $\phi$ is a quantum field, $j^0$ is the **charge** density: positive-energy modes are particles carrying charge $+$, negative-frequency modes create antiparticles carrying charge $-$. The sign of $j^0$ is the sign of the charge, and total charge — which *can* be negative — is what's conserved, not a probability.

**P3** Act with the KG operator under the integral (it commutes with $\int d^4p$ and hits only the $x$-dependence): $(\Box + m^2)e^{-ip\cdot x} = (-p^2 + m^2)e^{-ip\cdot x}$ (each $\partial_\mu \to -ip_\mu$, so $\Box \to -p^2$). Thus

$$(\Box + m^2)G(x) = \int\frac{d^4p}{(2\pi)^4}\frac{-p^2 + m^2}{p^2 - m^2}e^{-ip\cdot x} = \int\frac{d^4p}{(2\pi)^4}(-1)\,e^{-ip\cdot x} = -\delta^4(x),$$

using $\frac{-p^2+m^2}{p^2-m^2} = -1$ and the Fourier representation $\delta^4(x) = \int\frac{d^4p}{(2\pi)^4}e^{-ip\cdot x}$. So $G$ is a Green's function of $(\Box + m^2)$. The denominator $p^2 - m^2$ vanishes on the mass shell (a pole), and how you go around that pole — the $i\varepsilon$ prescription — determines *which* Green's function you get; Feynman's choice ([2.4](02-04-feynman-propagator.md)) gives the causal propagator. ∎

</details>

## Flashback

**From Lesson 1.3 (Symmetries and Noether's theorem for fields):** For the complex Klein–Gordon field with $\mathcal{L} = \partial_\mu\phi^*\partial^\mu\phi - m^2\phi^*\phi$, write the conserved Noether current from the phase symmetry $\phi \to e^{i\alpha}\phi$, and state what its charge becomes physically.

<details>
<summary>Solution</summary>

The phase symmetry $\phi \to e^{i\alpha}\phi$ gives $j^\mu = i(\phi^*\partial^\mu\phi - \phi\,\partial^\mu\phi^*)$ (from [1.3](01-03-symmetries-noether-for-fields.md) Example 1, up to sign convention), conserved on-shell: $\partial_\mu j^\mu = 0$. Its charge $Q = \int j^0\,d^3x$ is the **net particle number** (particles minus antiparticles); once the field is coupled to the electromagnetic field via minimal coupling ([5.2](05-02-minimal-coupling-qed-lagrangian.md)), $Q$ becomes the conserved **electric charge**. This same $j^0$ is the KG density whose lack of positivity kills the single-particle interpretation — it's a charge density, not a probability density. ✓

</details>

## Connections

- **Backward:** the KG equation was derived from its Lagrangian in [1.2](01-02-classical-field-theory-lagrangian.md); its negative-energy trouble is the concrete form of [1.1](01-01-why-qm-relativity-forces-fields.md)'s "single-particle QM fails"; the charge current is [1.3](01-03-symmetries-noether-for-fields.md)'s phase-symmetry Noether current.
- **Forward:** [2.1](02-01-canonical-quantization-field-operators.md)–[2.2](02-02-creation-annihilation-fock-space.md) quantize this field, turning the mode expansion into creation/annihilation operators and reinterpreting the negative-frequency modes as antiparticles; the Green's function of P3 becomes the Feynman propagator ([2.4](02-04-feynman-propagator.md)).
- **Sideways (physics):** the KG field describes real spin-$0$ particles (the Higgs boson, pions); the same equation is the relativistic wave equation whose non-relativistic limit (P1) is the Schrödinger equation of [`quantum-mechanics`](../../quantum-mechanics/syllabus.md).
