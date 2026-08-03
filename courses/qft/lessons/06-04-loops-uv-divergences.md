# Quantum Field Theory · Lesson 6.4: Loops and ultraviolet divergences

> ⏱ ~15 min · Module 6: The path integral and renormalization · Builds on: [6.3 Recovering propagators and Feynman rules](06-03-recovering-propagators-feynman-rules.md) · Unlocks: [6.5 Regularization and renormalization](06-05-regularization-renormalization.md)

## Why this matters

Everything so far was **tree level** — no loops, finite answers. But quantum corrections come from **loop diagrams**, and here QFT hits its famous crisis: loop integrals **diverge**. Integrate over the unfixed loop momentum out to infinity and you get $\infty$ — a seemingly nonsensical prediction. These **ultraviolet (UV) divergences** (from large loop momentum = short distances) nearly killed QFT in the 1930s–40s. The resolution, **renormalization** (next lessons), is one of the deepest ideas in physics and earned Feynman, Schwinger, and Tomonaga the Nobel Prize. This lesson diagnoses the disease: where the divergences come from, how to count them (**superficial degree of divergence**), and why only certain theories (**renormalizable** ones) have them under control. It's the setup for Boss Problem 6.

## The idea

A **loop** is a closed cycle in a diagram carrying a momentum $\ell$ that isn't fixed by the external momenta — momentum conservation at the vertices constrains everything *except* one momentum per loop, which you must **integrate over**: $\int\frac{d^4\ell}{(2\pi)^4}$ (the picture). The problem is the *large-$\ell$* behavior. Each propagator falls off like $1/\ell^2$ at large momentum, but the measure $d^4\ell$ grows like $\ell^3\,d\ell$. Whether the integral converges is a race between them.

Count powers (**superficial degree of divergence** $D$): for a diagram, $D$ = (powers of $\ell$ in the numerator, from the measure) − (powers in the denominator, from propagators). If $D \geq 0$, the integral diverges (power-law for $D > 0$, logarithmically for $D = 0$); if $D < 0$, it converges. For the $\phi^4$ one-loop "fish" (vertex correction): two propagators ($\sim 1/\ell^4$) and one loop ($d^4\ell \sim \ell^3 d\ell$), giving $\int\frac{\ell^3\,d\ell}{\ell^4} = \int\frac{d\ell}{\ell} \sim \ln\Lambda$ — **logarithmically divergent** ($D = 0$).

The divergence is a **short-distance** effect: large $\ell$ means probing arbitrarily small distances, where the theory's assumptions (point particles, exact locality) may break down. The divergence signals that the theory doesn't know its own short-distance physics — but, remarkably, physical predictions can be made *insensitive* to that unknown physics (renormalization). The crucial classification: a theory is **renormalizable** if only *finitely many* types of diagrams have $D \geq 0$ (so finitely many divergences to absorb). This is controlled by the mass dimension of the coupling — $\phi^4$ and QED (dimensionless couplings) are renormalizable; gravity (negative-dimension coupling) is not.

## The formal version

A **loop diagram** has $L = I - V + 1$ loops ($I$ internal lines, $V$ vertices; [3.4](03-04-feynman-diagrams-phi4.md)), each contributing an integral $\int\frac{d^4\ell}{(2\pi)^4}$ over an unconstrained momentum. The **superficial degree of divergence** $D$ counts the net power of loop momentum at large $\ell$:

$$D = 4L - 2I \quad(\text{scalar theory: each loop gives }+4, \text{ each propagator }-2),$$

or more generally $D = 4L - 2P_B - P_F$ ($P_B$ boson, $P_F$ fermion propagators, since fermion propagators fall as $1/\ell$). *In words:* $D \geq 0 \Rightarrow$ divergent (log if $D=0$, power-law if $D>0$); $D < 0 \Rightarrow$ superficially convergent. **The one-loop $\phi^4$ vertex correction:** $L = 1$, $I = 2$, so $D = 4 - 4 = 0$ — **logarithmically divergent**:

$$i\mathcal{M}_{\text{1-loop}} = \frac{(-i\lambda)^2}{2}\int\frac{d^4\ell}{(2\pi)^4}\frac{i}{\ell^2 - m^2}\frac{i}{(k-\ell)^2 - m^2} \sim \lambda^2\ln\Lambda,$$

with $\Lambda$ a momentum cutoff. **Renormalizability criterion:** a theory is **renormalizable** iff its couplings have mass-dimension $\geq 0$, equivalently iff only a *finite* number of diagram types have $D \geq 0$. *In words:* renormalizable theories have finitely many divergent structures, all absorbable into a finite set of parameters; non-renormalizable ones (negative-dimension couplings, like gravity's $G_N$) generate infinitely many, requiring infinitely many inputs.

## Picture

![The one-loop phi-4 "fish" diagram: two vertices joined by two internal propagator lines carrying loop momenta ell and k minus ell, with the divergent loop integral; at large ell the integrand goes as 1 over ell-to-the-fourth while the measure goes as ell-cubed d-ell, giving a logarithmic ultraviolet divergence — a short-distance infinity](assets/06-04-fig1.svg)

## Worked examples

**Example 1 (power-counting the $\phi^4$ fish — Boss Problem 6).** The one-loop correction to the $\phi^4$ vertex has two internal propagators carrying $\ell$ and $k - \ell$. At large $\ell$, each propagator $\frac{i}{\ell^2 - m^2} \sim \frac{1}{\ell^2}$, so the integrand $\sim \frac{1}{\ell^4}$. The loop measure is $d^4\ell$; in the large-$\ell$ region, going to a radial variable, $d^4\ell \sim \ell^3\,d\ell$ (the surface of a 4-sphere times $d\ell$). So the integral behaves as

$$\int^\Lambda \frac{\ell^3\,d\ell}{\ell^4} = \int^\Lambda\frac{d\ell}{\ell} = \ln\Lambda - \ln(\text{scale}) \sim \ln\Lambda.$$

It **diverges logarithmically** as the cutoff $\Lambda \to \infty$. The superficial degree of divergence is $D = 4(1) - 2(2) = 0$, confirming the log ($D = 0$). This is the divergence that renormalizes the coupling $\lambda$ ([6.5](06-05-regularization-renormalization.md)) and makes it *run* with energy ([6.6](06-06-running-couplings-renormalization-group.md)). Log divergences are the "mildest" and the most common in renormalizable theories.

**Example 2 (why $\phi^4$ is renormalizable but $\phi^6$ isn't).** The superficial degree of divergence of a $\phi^n$-theory diagram with $E$ external legs works out (in 4D) to $D = 4 - E + (\text{terms depending on the coupling's dimension})$. For **$\phi^4$** (dimensionless $\lambda$), $D = 4 - E$ is *independent of the number of loops/vertices* — so only diagrams with few external legs ($E \leq 4$) diverge, and there are **finitely many** divergent structures (2-point, 4-point). All divergences absorb into the mass, field normalization, and coupling — renormalizable. For **$\phi^6$** (coupling $g_6$ of mass-dimension $-2$ in 4D), each extra vertex *increases* $D$, so diagrams with *arbitrarily many* external legs diverge — **infinitely many** divergent structures, each needing its own counterterm/input. That's non-renormalizable: you'd need infinitely many measurements to fix all the parameters, destroying predictivity. **The mass dimension of the coupling decides renormalizability**: $\geq 0$ (like $\phi^4$'s dimensionless $\lambda$ and QED's dimensionless $e$) is renormalizable; $< 0$ (like $\phi^6$ or gravity) is not.

## Watch out

- **You might think a divergent prediction means the theory is wrong.** It means the theory is *incomplete at short distances* — but physical (renormalized) predictions can still be extracted, made independent of the unknown UV physics. QED's divergences don't stop it from being the most accurate theory ever; renormalization handles them ([6.5](06-05-regularization-renormalization.md)).
- **You might trust the *superficial* degree of divergence blindly.** $D$ is a *superficial* count — a diagram with $D < 0$ can still diverge if it contains a divergent *subdiagram* (a divergent loop inside). Full renormalizability requires that these sub-divergences also be handled (the BPHZ theorem), a subtlety beyond superficial counting.
- **You might forget that symmetries can soften divergences.** Gauge invariance (Ward identities) and other symmetries can make the actual divergence milder than power-counting suggests (e.g. the photon mass stays zero despite $D = 2$ for the photon self-energy, because gauge invariance forbids a mass counterterm). Symmetry is a powerful constraint on which divergences can appear.

## One-liner

> Loop diagrams integrate over an unfixed momentum and diverge in the ultraviolet (large $\ell$ = short distance); the superficial degree of divergence $D = 4L - 2I$ counts the damage, and a theory is renormalizable iff only finitely many diagram types have $D \geq 0$ — decided by the coupling's mass dimension.

## Problems

**P1 (🟢)** Compute the superficial degree of divergence $D = 4L - 2I$ for: (a) the one-loop $\phi^4$ vertex correction ($L=1$, $I=2$); (b) a two-loop diagram with $L=2$, $I=5$. Which diverge, and (for $D=0$) is it logarithmic?

**P2 (🟡)** Explain why the divergence comes from *large* loop momentum (the ultraviolet), and why this is a "short-distance" problem. *Hint:* large momentum ↔ small wavelength ↔ short distance (uncertainty principle); the integral's divergence is entirely from the $\ell \to \infty$ region.

**P3 (🔴, optional)** In $d$ spacetime dimensions, a scalar loop gives $\int d^d\ell$ and each propagator $\sim 1/\ell^2$, so $D = dL - 2I$. Show that the $\phi^4$ one-loop fish is UV-*convergent* in $d < 4$, log-divergent in $d = 4$, and power-divergent in $d > 4$. Why does this suggest computing in $d = 4 - \epsilon$ dimensions (dimensional regularization) as a way to tame the $d=4$ divergence? (Preview of [6.5](06-05-regularization-renormalization.md).)

<details>
<summary>Solutions</summary>

**P1** (a) $D = 4(1) - 2(2) = 4 - 4 = 0$ — **log divergent** ($D = 0$ means logarithmic). (b) $D = 4(2) - 2(5) = 8 - 10 = -2 < 0$ — superficially **convergent** (the extra propagators tame it). So more propagators (relative to loops) improve convergence; $D \geq 0$ is the danger zone.

**P2** The loop integral $\int d^4\ell\,(\text{integrand})$ diverges entirely because of the $\ell \to \infty$ region: at small and moderate $\ell$ the integrand is finite and integrable, but at large $\ell$ the integrand doesn't fall fast enough (for $D \geq 0$) and the integral over the growing shell $\ell^3\,d\ell$ blows up. Large loop momentum $\ell$ corresponds, by the uncertainty principle, to **short distances / small wavelengths** ($\Delta x \sim 1/\ell$). So the UV (ultraviolet = high-frequency = short-wavelength) divergence is a **short-distance** problem: the diagram is sensitive to arbitrarily-small-distance physics, where the theory's assumption of point-like interactions may not hold. Renormalization is, in essence, admitting we don't know the short-distance physics and showing that predictions can be made independent of it.

**P3** In $d$ dimensions, the fish has $D = dL - 2I = d(1) - 2(2) = d - 4$. So: $d < 4 \Rightarrow D < 0$ (convergent); $d = 4 \Rightarrow D = 0$ (log divergent); $d > 4 \Rightarrow D > 0$ (power divergent). The divergence *disappears* just below $d = 4$. This motivates **dimensional regularization**: compute the loop integral in $d = 4 - \epsilon$ dimensions, where it's *finite* (convergent), and the $d = 4$ divergence appears as a **pole** $\frac{1}{\epsilon}$ as $\epsilon \to 0$. Working at $d = 4 - \epsilon$ keeps everything finite and manifestly Lorentz/gauge-invariant (unlike a hard cutoff $\Lambda$, which breaks symmetries), isolating the divergence as a clean $\frac1\epsilon$ pole to be subtracted by a counterterm. This is the standard modern regularization ([6.5](06-05-regularization-renormalization.md)). ∎

</details>

## Flashback

**From Lesson 6.3 (Recovering propagators and Feynman rules):** State the rule for reading the propagator and vertices off a Lagrangian in the path-integral formulation.

<details>
<summary>Solution</summary>

The **propagator** is the inverse of the quadratic (kinetic) part of the action (invert the $\phi K\phi$ operator, with $+i\varepsilon$): for a scalar, $\frac{i}{p^2 - m^2 + i\varepsilon}$. The **vertices** are read from the interaction terms: a term $-\frac{g}{n!}\phi^n$ gives an $n$-point vertex $-ig$. Quadratic terms → propagators, higher terms → vertices — the same Feynman rules as canonical quantization. ✓

</details>

## Connections

- **Backward:** loops are the higher-order terms of the Dyson/Feynman expansion ([3.2](03-02-dyson-series-time-ordering.md), [3.4](03-04-feynman-diagrams-phi4.md)); the divergent integral is the one set up in [3.4](03-04-feynman-diagrams-phi4.md) P3 and [3.5](03-05-feynman-rules-amplitude.md) P2; the coupling's mass dimension is from [5.2](05-02-minimal-coupling-qed-lagrangian.md) P3.
- **Forward:** [6.5](06-05-regularization-renormalization.md) regulates the divergence (cutoff or $d = 4 - \epsilon$) and absorbs it into counterterms; [6.6](06-06-running-couplings-renormalization-group.md) shows the log divergence makes the coupling *run* with energy.
- **Sideways (condensed matter):** the same UV divergences and renormalization appear in statistical mechanics near critical points ([`stat-mech`](../../stat-mech/syllabus.md)) — Wilson's renormalization group unifies the two, treating QFT divergences and critical phenomena with one framework (the Nobel-winning insight).
