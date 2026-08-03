# Relativity (SR + GR) · Lesson 5.4: The Einstein–Hilbert action

> ⏱ ~15 min · Module 5: General relativity and the Einstein equations · Builds on: [5.3 The Einstein field equations](#/lesson/relativity/05-03-einstein-field-equations.md), [5.2 Matter in curved spacetime](#/lesson/relativity/05-02-matter-curved-spacetime.md), [3.1 The action for fields](#/lesson/relativity/03-01-field-action-euler-lagrange.md), [4.7 Ricci, scalar curvature, and the Einstein tensor](#/lesson/relativity/04-07-ricci-einstein-tensor.md), [2.4 Invariants and volume](#/lesson/relativity/02-04-invariants-levi-civita.md) · Unlocks: the Newtonian limit and redshift (5.5), linearized gravity (5.6)

*Signature convention: $(-,+,+,+)$, coordinates $x^\mu=(ct,x,y,z)$, so $\eta_{\mu\nu}=\mathrm{diag}(-1,+1,+1,+1)$ in the flat limit. Curvature conventions are those of [4.7](#/lesson/relativity/04-07-ricci-einstein-tensor.md): $R_{\mu\nu}$ the Ricci tensor, $R=g^{\mu\nu}R_{\mu\nu}$ the Ricci scalar, $G_{\mu\nu}=R_{\mu\nu}-\tfrac12 g_{\mu\nu}R$ the Einstein tensor. $c$ and $G$ are kept explicit; $g\equiv\det(g_{\mu\nu})<0$.*

## Why this matters

In [5.3](#/lesson/relativity/05-03-einstein-field-equations.md) the Einstein field equations $G_{\mu\nu}=\tfrac{8\pi G}{c^4}T_{\mu\nu}$ were *reverse-engineered*: we asked what tensor equation could relate curvature to matter, reduce to Newton, and conserve energy, and the Bianchi identity narrowed the choice to $G_{\mu\nu}$. That is honest physics, but it is guesswork with good taste. This lesson gives the equations their **derivation**: they are the Euler–Lagrange equations of a single scalar action, exactly as Maxwell's equations were in [3.6](#/lesson/relativity/03-06-em-lagrangian-stress-energy.md) and the Klein–Gordon equation was in [3.1](#/lesson/relativity/03-01-field-action-euler-lagrange.md). This is the **payoff of the entire classical-field-theory module**: gravity is a field theory whose dynamical field is the metric $g_{\mu\nu}$ itself, and turning the same crank — write a Lorentz-scalar action, demand $\delta S=0$ — turns Einstein's equations out the bottom. As a bonus, the definition of the stress–energy tensor $T_{\mu\nu}$ finally unifies: the thing that sources gravity is *literally* the response of the matter action to a wiggle in the metric.

## The idea

Every field theory you have met follows one recipe: pick the dynamical field, write down the simplest Lorentz-scalar action built from it, and extremize. For a scalar the field was $\phi$; for electromagnetism it was $A_\mu$. **For gravity the field is the metric $g_{\mu\nu}$** — the object that already carries all the geometry (distances, angles, proper time; [4.3](#/lesson/relativity/04-03-metric-proper-time.md)). Gravity *is* the shape of the metric, so making the metric dynamical is making gravity dynamical.

Now we need a scalar action. Two demands pin it down almost completely:

- **General covariance.** The action must be a genuine scalar under *arbitrary* coordinate changes, not just Lorentz ones — that is the whole content of GR ([5.1](#/lesson/relativity/05-01-equivalence-principle.md)). So we integrate a scalar Lagrangian against the **invariant volume element** $\sqrt{-g}\,d^4x$ (from [2.4](#/lesson/relativity/02-04-invariants-levi-civita.md), [5.2](#/lesson/relativity/05-02-matter-curved-spacetime.md)) — the $\sqrt{-g}$ is exactly the factor that makes four-volume coordinate-independent on a curved manifold.
- **Simplicity.** We need a scalar built from the metric that actually contains its *curvature* (a flat metric should give no gravity). The lowest-order scalar that does this is the **Ricci scalar $R$** — and, remarkably, it is essentially the *only* independent scalar you can build that is linear in second derivatives of $g_{\mu\nu}$ (the 🔴 problem makes this precise).

Put those together and there is essentially one choice: integrate $R$ against $\sqrt{-g}\,d^4x$. That is the **Einstein–Hilbert action**. Vary it against $g^{\mu\nu}$, and $G_{\mu\nu}=0$ falls out. Add the matter action alongside it, and the matter's response to the metric is precisely $T_{\mu\nu}$ — sourcing the curvature. The picture is: **one action, two pieces, vary the metric, read off Einstein.**

## The formal version

**The Einstein–Hilbert action.** For the gravitational field alone,

$$\boxed{\;S_{\rm EH}=\frac{c^4}{16\pi G}\int R\,\sqrt{-g}\,d^4x.\;}$$

In words: the "Lagrangian density of gravity" is just the curvature scalar $R$; integrate it over spacetime with the invariant volume element, times a constant $c^4/16\pi G$ fixed by matching to Newton (done in [5.5](#/lesson/relativity/05-05-newtonian-limit-redshift.md)). Here $R=g^{\mu\nu}R_{\mu\nu}$ carries dimension $1/\text{length}^2$, and $\sqrt{-g}\,d^4x$ is the four-volume; the prefactor makes $S$ come out with units of action (energy × time).

**The dynamical field is $g^{\mu\nu}$.** We treat the (inverse) metric $g^{\mu\nu}$ as the field to be varied — the direct analogue of $\phi$ in [3.1](#/lesson/relativity/03-01-field-action-euler-lagrange.md). (Varying $g^{\mu\nu}$ or $g_{\mu\nu}$ gives equivalent equations; $g^{\mu\nu}$ is tidier.) Hamilton's principle reads: among all metrics agreeing with a fixed metric on the boundary $\partial\Omega$, the physical one makes $\delta S=0$.

**The two variational facts.** Varying $S_{\rm EH}$ needs how $\sqrt{-g}$ and $R$ respond to $g^{\mu\nu}\to g^{\mu\nu}+\delta g^{\mu\nu}$.

*(i) The volume element.* Using $\delta g=g\,g^{\mu\nu}\delta g_{\mu\nu}=-g\,g_{\mu\nu}\delta g^{\mu\nu}$ (Jacobi's formula for a determinant, plus $g^{\mu\nu}\delta g_{\mu\nu}=-g_{\mu\nu}\delta g^{\mu\nu}$),

$$\boxed{\;\delta(\sqrt{-g})=-\tfrac12\,\sqrt{-g}\,g_{\mu\nu}\,\delta g^{\mu\nu}.\;}$$

In words: shrinking the metric changes the measured volume, and the rate is set by the metric trace.

*(ii) The Ricci scalar.* Since $R=g^{\mu\nu}R_{\mu\nu}$,

$$\delta R=R_{\mu\nu}\,\delta g^{\mu\nu}+g^{\mu\nu}\,\delta R_{\mu\nu}.$$

The crucial fact (the **Palatini identity**) is that the second piece is a *total covariant divergence*: $g^{\mu\nu}\delta R_{\mu\nu}=\nabla_\mu v^{\mu}$ for some vector $v^\mu$ built from $\delta\Gamma$. In words: the variation of the Ricci tensor contributes only a **boundary term**, not a bulk equation.

**Putting it together.** Combining (i) and (ii),

$$\delta S_{\rm EH}=\frac{c^4}{16\pi G}\int\Big[\underbrace{\big(R_{\mu\nu}-\tfrac12 g_{\mu\nu}R\big)}_{=\,G_{\mu\nu}}\delta g^{\mu\nu}+\underbrace{\nabla_\mu v^\mu}_{\text{boundary}}\Big]\sqrt{-g}\,d^4x.$$

The divergence integrates to a surface term $\oint_{\partial\Omega}$ (Gauss on a manifold). Naively it would vanish because $\delta g^{\mu\nu}=0$ on $\partial\Omega$; in fact it also involves *normal derivatives* of $\delta g$, which fixing $\delta g$ alone does not kill — that leftover is cancelled by the **Gibbons–Hawking–York boundary term** added to $S_{\rm EH}$ (see the 🔴 problem). Either way, no bulk contribution survives from it. What remains:

$$\boxed{\;\delta S_{\rm EH}=\frac{c^4}{16\pi G}\int G_{\mu\nu}\,\delta g^{\mu\nu}\,\sqrt{-g}\,d^4x.\;}$$

Demanding $\delta S_{\rm EH}=0$ for arbitrary $\delta g^{\mu\nu}$ forces the bracket pointwise (the fundamental lemma, exactly as in [3.1](#/lesson/relativity/03-01-field-action-euler-lagrange.md)):

$$G_{\mu\nu}=0\qquad(\text{vacuum Einstein equations}).$$

In words: **empty-spacetime GR is the statement that the metric extremizes total curvature.** Not "no curvature" — Schwarzschild has $R_{\mu\nu}=0$ but is curved ([6.1](#/lesson/relativity/06-01-schwarzschild-solution.md)) — but *stationary* curvature.

**Adding matter — and the birth of $T_{\mu\nu}$.** Real spacetime contains matter and fields, with their own action $S_{\rm mat}[g^{\mu\nu},\psi]$ (e.g. the EM action of [3.6](#/lesson/relativity/03-06-em-lagrangian-stress-energy.md), now written on a curved background via minimal coupling, [5.2](#/lesson/relativity/05-02-matter-curved-spacetime.md)). The total action is

$$S=S_{\rm EH}+S_{\rm mat}=\frac{c^4}{16\pi G}\int R\,\sqrt{-g}\,d^4x+S_{\rm mat}.$$

Vary the metric. Define the stress–energy tensor as the metric-response of the matter action:

$$\boxed{\;T_{\mu\nu}\equiv-\frac{2}{\sqrt{-g}}\,\frac{\delta S_{\rm mat}}{\delta g^{\mu\nu}}\quad\Longleftrightarrow\quad \delta S_{\rm mat}=-\tfrac12\int T_{\mu\nu}\,\delta g^{\mu\nu}\,\sqrt{-g}\,d^4x.\;}$$

In words: $T_{\mu\nu}$ measures how much the matter "notices" a wiggle in the geometry — and *this is the definition of stress–energy*, the same object that came from spacetime-translation symmetry via Noether in [3.3](#/lesson/relativity/03-03-stress-energy-tensor.md), now recovered from geometry. (This "metric" or Hilbert definition is automatically symmetric and covariantly conserved, curing the ambiguities of the canonical Noether version.) Setting $\delta S=\delta S_{\rm EH}+\delta S_{\rm mat}=0$:

$$\frac{c^4}{16\pi G}\,G_{\mu\nu}-\tfrac12 T_{\mu\nu}=0\quad\Longrightarrow\quad \boxed{\;G_{\mu\nu}=\frac{8\pi G}{c^4}\,T_{\mu\nu}.\;}$$

The full Einstein field equations of [5.3](#/lesson/relativity/05-03-einstein-field-equations.md) — derived, not guessed.

**The cosmological constant.** Adding a constant to the gravitational Lagrangian, $R\to R-2\Lambda$, is allowed (it is still a scalar). Since $\delta(-2\Lambda\sqrt{-g})=+\Lambda\sqrt{-g}\,g_{\mu\nu}\delta g^{\mu\nu}$ by fact (i), it contributes $+\Lambda g_{\mu\nu}$ to the field equations:

$$S=\frac{c^4}{16\pi G}\int(R-2\Lambda)\sqrt{-g}\,d^4x\quad\Longrightarrow\quad G_{\mu\nu}+\Lambda g_{\mu\nu}=\frac{8\pi G}{c^4}T_{\mu\nu}.$$

$\Lambda$ is not an add-on you must justify separately — it is simply *the other* term the simplicity principle permits, and (🟡) it is indistinguishable from a vacuum energy sitting in $T_{\mu\nu}$.

## Picture

![Schematic: the total action S = S_EH + S_matter is varied against the metric; the Einstein–Hilbert piece yields (c^4/16 pi G) G_{mu nu}, the matter piece yields −½ T_{mu nu} which defines the stress–energy tensor, and setting the total variation to zero gives G_{mu nu} = (8 pi G / c^4) T_{mu nu}](assets/05-04-fig1.svg)

Read it top to bottom: two scalar actions (gravity's $R$, matter's $\mathcal L_{\rm mat}$), each integrated with $\sqrt{-g}\,d^4x$; vary the *metric*; the Einstein–Hilbert piece deposits $G_{\mu\nu}$, the matter piece deposits $-\tfrac12 T_{\mu\nu}$ (which is what *defines* $T_{\mu\nu}$); demanding the total variation vanish snaps them into the Einstein equations. It is structurally identical to the flow that produced Maxwell's equations in [3.6](#/lesson/relativity/03-06-em-lagrangian-stress-energy.md) — only the field being varied has changed.

## Worked examples

**Example 1 (mechanical — vary a cosmological-constant "matter" action to get its $T_{\mu\nu}$).** The simplest matter is a constant vacuum energy: take the Lagrangian density $\mathcal L=-\rho_\Lambda c^2$, a constant, so

$$S_{\rm mat}=\int(-\rho_\Lambda c^2)\sqrt{-g}\,d^4x.$$

The only metric dependence is in $\sqrt{-g}$, so by fact (i):

$$\frac{\delta S_{\rm mat}}{\delta g^{\mu\nu}}=-\rho_\Lambda c^2\,\delta(\sqrt{-g})/\delta g^{\mu\nu}=-\rho_\Lambda c^2\Big(-\tfrac12\sqrt{-g}\,g_{\mu\nu}\Big)=\tfrac12\rho_\Lambda c^2\sqrt{-g}\,g_{\mu\nu}.$$

Apply the definition:

$$T_{\mu\nu}=-\frac{2}{\sqrt{-g}}\cdot\tfrac12\rho_\Lambda c^2\sqrt{-g}\,g_{\mu\nu}=-\rho_\Lambda c^2\,g_{\mu\nu}.$$

Compare the perfect-fluid form $T_{\mu\nu}=(\rho+p/c^2)u_\mu u_\nu+p\,g_{\mu\nu}$ ([5.2](#/lesson/relativity/05-02-matter-curved-spacetime.md)): the $u_\mu u_\nu$ term can only drop for *every* observer if $\rho+p/c^2=0$, i.e. $p=-\rho c^2$. So a constant energy density is a fluid with **equation of state $p=-\rho c^2$** (negative pressure!), and $T_{\mu\nu}=p\,g_{\mu\nu}=-\rho_\Lambda c^2 g_{\mu\nu}$. Its energy density is genuinely positive: locally $g_{00}=-1$, so $T_{00}=-\rho_\Lambda c^2 g_{00}=+\rho_\Lambda c^2>0$. This is dark energy — and plugging it into the field equations reproduces the $\Lambda$ term exactly, with $\rho_\Lambda=\Lambda c^2/8\pi G$ (verified in the 🟡 problem). The revealing lesson: **a cosmological constant and a vacuum energy are the same thing seen from the two sides of the equation.**

**Example 2 (why you'd care — the whole of GR from three ingredients).** Suppose you knew nothing of Einstein but believed the field-theory recipe. You would ask: what is the dynamical field of gravity? The metric (it holds the geometry). What is the simplest generally-covariant action? Integrate the lowest curvature scalar, $R$, against $\sqrt{-g}\,d^4x$. What sources it? Whatever the matter action does to the metric, i.e. $T_{\mu\nu}$. Turn the Euler–Lagrange crank on $S_{\rm EH}+S_{\rm mat}$ and you have *derived* $G_{\mu\nu}=\tfrac{8\pi G}{c^4}T_{\mu\nu}$ — no equivalence-principle scaffolding, no Bianchi-identity search. This is why the action formulation is the professional's route to GR: it makes the theory's assumptions visible and minimal (which field, which scalar), it hands you $T_{\mu\nu}$'s definition and conservation for free (the Bianchi identity $\nabla^\mu G_{\mu\nu}=0$ becomes the diffeomorphism-invariance of $S$, forcing $\nabla^\mu T_{\mu\nu}=0$), and it tells you *how to modify* the theory honestly — add the next scalar, $\Lambda$, or higher-curvature terms, each with a known price (🔴).

## Watch out

- **You might think vacuum ($T_{\mu\nu}=0$) means $R_{\mu\nu\rho\sigma}=0$.** No — $\delta S_{\rm EH}=0$ gives $G_{\mu\nu}=0$, which (tracing in 4D) means $R_{\mu\nu}=0$, *not* zero Riemann tensor. Schwarzschild is a vacuum solution that is violently curved. "Extremal curvature" is not "no curvature."
- **The $g^{\mu\nu}\delta R_{\mu\nu}$ term is not zero — it is a boundary term.** It genuinely contributes to $\delta S$; it simply integrates to the surface $\partial\Omega$ and drops from the *bulk* equations of motion. Calling it "zero" is the right conclusion for the field equations but the wrong reason — and it is exactly the term the Gibbons–Hawking–York piece exists to tame.
- **$T_{\mu\nu}\equiv-\tfrac{2}{\sqrt{-g}}\,\delta S_{\rm mat}/\delta g^{\mu\nu}$ is a *definition*, not a derived formula.** The factor $-2$ and the $\sqrt{-g}$ are fixed precisely so that the field equations come out as $G_{\mu\nu}=\tfrac{8\pi G}{c^4}T_{\mu\nu}$ with the standard coefficient and so that $T_{\mu\nu}$ matches the Noether energy–momentum of [3.3](#/lesson/relativity/03-03-stress-energy-tensor.md). Change the prefactor of $S_{\rm EH}$ and the coefficient in the field equation moves with it.
- **Vary $g^{\mu\nu}$ or $g_{\mu\nu}$, not both, and not the Christoffels independently.** In this (metric) formulation $\Gamma$ is built from $g$; varying $g$ alone is the whole story. (The "Palatini" formulation that varies $g$ and $\Gamma$ independently gives the same equations for pure EH gravity — a nice check, not a separate theory here.)

## One-liner

> Gravity is a field theory whose field is the metric: extremize $\dfrac{c^4}{16\pi G}\!\int R\sqrt{-g}\,d^4x+S_{\rm mat}$ over $g^{\mu\nu}$, and the same crank that made Maxwell makes Einstein — with $T_{\mu\nu}=-\tfrac{2}{\sqrt{-g}}\,\delta S_{\rm mat}/\delta g^{\mu\nu}$ falling out as the definition of what sources curvature.

## Problems

**P1 (🟢)** Show that adding a constant to the gravitational Lagrangian, $S=\dfrac{c^4}{16\pi G}\displaystyle\int(R-2\Lambda)\sqrt{-g}\,d^4x$, yields the vacuum field equation $G_{\mu\nu}+\Lambda g_{\mu\nu}=0$. Use only $\delta S_{\rm EH}=\dfrac{c^4}{16\pi G}\int G_{\mu\nu}\delta g^{\mu\nu}\sqrt{-g}\,d^4x$ and fact (i), $\delta(\sqrt{-g})=-\tfrac12\sqrt{-g}\,g_{\mu\nu}\delta g^{\mu\nu}$.

**P2 (🟡)** A cosmological constant can live on *either* side of Einstein's equations. Take the matter Lagrangian to be the constant $\mathcal L=-\dfrac{\Lambda c^4}{8\pi G}$ (a pure vacuum energy) and, using $T_{\mu\nu}=-\dfrac{2}{\sqrt{-g}}\dfrac{\delta S_{\rm mat}}{\delta g^{\mu\nu}}$, compute its stress–energy tensor. Show it equals $T_{\mu\nu}=-\rho_\Lambda c^2 g_{\mu\nu}$ with $\rho_\Lambda=\Lambda c^2/8\pi G$, and confirm that inserting it into $G_{\mu\nu}=\tfrac{8\pi G}{c^4}T_{\mu\nu}$ reproduces $G_{\mu\nu}+\Lambda g_{\mu\nu}=0$ — the same equation as P1. Identify the pressure and the equation of state.

**P3 (🔴, optional)** Why is $R$ the right Lagrangian, and not $R^2$ or $R_{\mu\nu}R^{\mu\nu}$? Make three arguments: (a) *Uniqueness* — using the equivalence principle (at any point one can make $g_{\mu\nu}=\eta_{\mu\nu}$ and $\partial_\lambda g_{\mu\nu}=0$ in locally inertial coordinates), explain why no nonconstant scalar exists that is built from fewer than two derivatives of the metric, and why $R$ is essentially the unique one linear in second derivatives. (b) *Order of the field equations* — using dimensions ($[R]=1/\text{length}^2$), explain why $R$ gives second-order equations for $g$ while $R^2$ or $R_{\mu\nu}R^{\mu\nu}$ give fourth-order equations, and why that is a problem (Ostrogradsky). (c) *The boundary term* — state what goes wrong at $\partial\Omega$ when you vary $\int R\sqrt{-g}\,d^4x$ with only $\delta g_{\mu\nu}=0$ fixed there, and what the Gibbons–Hawking–York term fixes.

<details>
<summary>Solutions</summary>

**P1** Split the variation into the $R$ piece and the $-2\Lambda$ piece:

$$\delta S=\frac{c^4}{16\pi G}\int\Big[\delta(R\sqrt{-g})-2\Lambda\,\delta(\sqrt{-g})\Big]d^4x.$$

The first piece is the standard result, $\delta(R\sqrt{-g})\to G_{\mu\nu}\,\delta g^{\mu\nu}\sqrt{-g}$ after discarding the boundary term. For the second, apply fact (i):

$$-2\Lambda\,\delta(\sqrt{-g})=-2\Lambda\Big(-\tfrac12\sqrt{-g}\,g_{\mu\nu}\delta g^{\mu\nu}\Big)=+\Lambda\,\sqrt{-g}\,g_{\mu\nu}\delta g^{\mu\nu}.$$

Therefore

$$\delta S=\frac{c^4}{16\pi G}\int\big(G_{\mu\nu}+\Lambda g_{\mu\nu}\big)\delta g^{\mu\nu}\,\sqrt{-g}\,d^4x.$$

Stationarity for arbitrary $\delta g^{\mu\nu}$ forces the bracket to zero pointwise: $\;G_{\mu\nu}+\Lambda g_{\mu\nu}=0.$ ✓

**P2** With $\mathcal L$ constant, the entire metric dependence of $S_{\rm mat}=\int\mathcal L\sqrt{-g}\,d^4x$ sits in $\sqrt{-g}$. Using fact (i),

$$\frac{\delta S_{\rm mat}}{\delta g^{\mu\nu}}=\mathcal L\,\frac{\delta(\sqrt{-g})}{\delta g^{\mu\nu}}=\mathcal L\Big(-\tfrac12\sqrt{-g}\,g_{\mu\nu}\Big)=-\tfrac12\,\mathcal L\,\sqrt{-g}\,g_{\mu\nu}.$$

Then

$$T_{\mu\nu}=-\frac{2}{\sqrt{-g}}\Big(-\tfrac12\,\mathcal L\,\sqrt{-g}\,g_{\mu\nu}\Big)=\mathcal L\,g_{\mu\nu}=-\frac{\Lambda c^4}{8\pi G}\,g_{\mu\nu}.$$

Define $\rho_\Lambda c^2\equiv\Lambda c^4/8\pi G$, i.e. $\rho_\Lambda=\Lambda c^2/8\pi G$ (a mass density). Then

$$T_{\mu\nu}=-\rho_\Lambda c^2\,g_{\mu\nu}.$$

*Insert into the field equations:* $G_{\mu\nu}=\dfrac{8\pi G}{c^4}T_{\mu\nu}=\dfrac{8\pi G}{c^4}\Big(-\dfrac{\Lambda c^4}{8\pi G}g_{\mu\nu}\Big)=-\Lambda g_{\mu\nu}$, i.e.

$$G_{\mu\nu}+\Lambda g_{\mu\nu}=0,$$

identical to P1. So moving $\Lambda$ from the geometry side (as $-2\Lambda$ in the Lagrangian) to the matter side (as a vacuum energy in $T_{\mu\nu}$) changes nothing — the observation that makes "dark energy" and "cosmological constant" interchangeable ([astrophysics 6.5](#/lesson/astrophysics/06-05-dark-energy-acceleration.md)).

*Pressure and equation of state:* comparing $T_{\mu\nu}=-\rho_\Lambda c^2 g_{\mu\nu}$ to the perfect fluid $T_{\mu\nu}=(\rho+p/c^2)u_\mu u_\nu+p\,g_{\mu\nu}$ (Example 1): isotropy for all observers kills the $u_\mu u_\nu$ term, requiring $\rho+p/c^2=0$, so $p=-\rho_\Lambda c^2$. The equation of state is $w\equiv p/(\rho c^2)=-1$. Energy density $T_{00}=-\rho_\Lambda c^2 g_{00}=+\rho_\Lambda c^2>0$ (locally $g_{00}=-1$); the pressure is equal and opposite — negative pressure is what drives accelerated expansion. ✓

**P3** *(a) Uniqueness.* At any point $P$ choose locally inertial (Riemann normal) coordinates, in which $g_{\mu\nu}(P)=\eta_{\mu\nu}$ and $\partial_\lambda g_{\mu\nu}(P)=0$ — the equivalence principle ([5.1](#/lesson/relativity/05-01-equivalence-principle.md)): gravity can be transformed away to first order. Any scalar built *algebraically* from $g_{\mu\nu}$ and its *first* derivatives is therefore a constant at $P$ (all first derivatives vanish, and contractions of $\eta_{\mu\nu}$ alone give pure numbers) — it cannot encode curvature, which is real and coordinate-independent. The first non-removable information is in the *second* derivatives $\partial_\lambda\partial_\sigma g_{\mu\nu}$, which is precisely where the Riemann tensor lives. Demanding a scalar *linear* in those second derivatives leaves only contractions of Riemann; the single independent one is $R=g^{\mu\nu}R_{\mu\nu}$ (there is no scalar linear in second derivatives other than $R$, up to a multiplicative constant, plus the constant $\Lambda$ from no derivatives). Hence $S=\frac{c^4}{16\pi G}\int(R-2\Lambda)\sqrt{-g}\,d^4x$ is the *most general* action linear in second derivatives — the reason it is singled out.

*(b) Order of the equations.* $R$ contains second derivatives of $g$, and it enters the action *linearly*; varying it, the two integrations by parts move at most two derivatives onto the field, so the Euler–Lagrange equations are **second-order** in $g_{\mu\nu}$ — the same order as Newton–Poisson $\nabla^2\Phi=4\pi G\rho$, as it must be to have that limit. Dimensionally $[R]=\text{length}^{-2}$, so $R^2$ and $R_{\mu\nu}R^{\mu\nu}$ have dimension $\text{length}^{-4}$; to appear in the action they need a coupling with the dimensions of $\text{length}^2$ (a new length scale), and being *quadratic* in curvature they carry up to *four* derivatives of $g$, so their field equations are **fourth-order**. Fourth-order equations of motion generically propagate extra degrees of freedom whose energy is unbounded below (the **Ostrogradsky instability** / ghosts), and they are anyway suppressed at ordinary curvatures by the small factor (curvature $\times$ length$^2$) — the effective-field-theory reason Einstein–Hilbert is the leading term and higher-curvature corrections are negligible except near the Planck scale.

*(c) The boundary term.* Because $R$ contains second derivatives of the metric, $\delta(R\sqrt{-g})$ produces the divergence $\nabla_\mu v^\mu$ whose $v^\mu$ depends on $\delta\Gamma\sim\partial(\delta g)$. Its surface integral over $\partial\Omega$ therefore involves not just $\delta g_{\mu\nu}$ but also its **normal derivative** on the boundary. Fixing only $\delta g_{\mu\nu}=0$ on $\partial\Omega$ does not kill this term (you would have to also fix $\partial_n\delta g_{\mu\nu}$, an over-restrictive condition), so the pure Einstein–Hilbert variational problem is not well-posed. The **Gibbons–Hawking–York term** $\frac{c^4}{8\pi G}\oint_{\partial\Omega}K\sqrt{|h|}\,d^3x$ — with $K$ the extrinsic curvature of the boundary and $h$ its induced metric — is added to $S_{\rm EH}$ precisely so that its variation cancels the leftover normal-derivative piece, leaving a clean principle in which fixing $\delta g_{\mu\nu}=0$ on $\partial\Omega$ alone yields the field equations. (It also renders the on-shell action and black-hole thermodynamics finite/consistent, [6.5](#/lesson/relativity/06-05-black-hole-thermodynamics.md).) ✓

</details>

## Flashback

**From Lesson 3.1 (The action for fields):** For the scalar field with Lagrangian density $\mathcal L=\tfrac12(\partial_\mu\phi)(\partial^\mu\phi)-\tfrac12\mu^2\phi^2$ on *flat* Minkowski spacetime (signature $(-,+,+,+)$), apply the field Euler–Lagrange equation $\partial_\mu\big(\partial\mathcal L/\partial(\partial_\mu\phi)\big)-\partial\mathcal L/\partial\phi=0$ to obtain the field equation, and write it out using $\Box=-\tfrac1{c^2}\partial_t^2+\nabla^2$. Then state, in one sentence, what changes structurally when this same scalar field is placed in *curved* spacetime for the Einstein–Hilbert program (as $S_{\rm mat}$).

<details>
<summary>Solution</summary>

Differentiate $\mathcal L=\tfrac12\eta^{\alpha\beta}\partial_\alpha\phi\,\partial_\beta\phi-\tfrac12\mu^2\phi^2$. The gradient slot (both factors of the symmetric contraction respond):

$$\frac{\partial\mathcal L}{\partial(\partial_\mu\phi)}=\eta^{\mu\beta}\partial_\beta\phi=\partial^\mu\phi,\qquad \frac{\partial\mathcal L}{\partial\phi}=-\mu^2\phi.$$

Euler–Lagrange: $\partial_\mu(\partial^\mu\phi)-(-\mu^2\phi)=0$, i.e.

$$\Box\phi-\mu^2\phi=0\quad\Longleftrightarrow\quad -\frac1{c^2}\partial_t^2\phi+\nabla^2\phi-\mu^2\phi=0,$$

the Klein–Gordon equation. (With the $-\tfrac12\mu^2\phi^2$ potential the sign of the mass term is $-\mu^2\phi$; the massless case $\mu=0$ gives $\Box\phi=0$, the wave equation. ✓)

*Structural change in curved spacetime:* to build $S_{\rm mat}$ you promote $\eta_{\mu\nu}\to g_{\mu\nu}$, partial derivatives to covariant ones ($\partial_\mu\to\nabla_\mu$, minimal coupling, [5.2](#/lesson/relativity/05-02-matter-curved-spacetime.md)), and the measure to $d^4x\to\sqrt{-g}\,d^4x$ — so now $\mathcal L$ *depends on the metric*, and varying $S_{\rm mat}$ with respect to $g^{\mu\nu}$ no longer gives zero: it produces exactly the stress–energy tensor $T_{\mu\nu}=-\tfrac{2}{\sqrt{-g}}\,\delta S_{\rm mat}/\delta g^{\mu\nu}$ that sources gravity.

</details>

## Connections

- **Backward:** this is [3.1](#/lesson/relativity/03-01-field-action-euler-lagrange.md)'s field-action machinery with the metric $g^{\mu\nu}$ playing the role of $\phi$ — the boundary-clamped variation, integration by parts, and fundamental lemma are identical. The Ricci scalar $R$ and Einstein tensor $G_{\mu\nu}$ come from [4.7](#/lesson/relativity/04-07-ricci-einstein-tensor.md); the invariant measure $\sqrt{-g}\,d^4x$ from [2.4](#/lesson/relativity/02-04-invariants-levi-civita.md) and [5.2](#/lesson/relativity/05-02-matter-curved-spacetime.md); the field equations themselves were stated in [5.3](#/lesson/relativity/05-03-einstein-field-equations.md). The metric-defined $T_{\mu\nu}$ is the clean, symmetric, conserved version of the Noether stress–energy of [3.3](#/lesson/relativity/03-03-stress-energy-tensor.md).
- **Forward:** with the action in hand, [5.5](#/lesson/relativity/05-05-newtonian-limit-redshift.md) fixes the constant $c^4/16\pi G$ by demanding the Newtonian limit, and [5.6](#/lesson/relativity/05-06-linearized-gravity-waves.md) expands $S_{\rm EH}$ to second order in $h_{\mu\nu}$ to get the graviton's wave action. The cosmological-constant term drives the accelerating universe in [6.7](#/lesson/relativity/06-07-friedmann-equations.md)–[6.8](#/lesson/relativity/06-08-cosmic-history-dark-universe.md), and the Gibbons–Hawking term reappears in black-hole thermodynamics ([6.5](#/lesson/relativity/06-05-black-hole-thermodynamics.md)).
- **Sideways (all of physics):** the recipe "field + simplest invariant action + $\delta S=0$" is *the* organizing principle of modern physics — it gave Maxwell in [3.6](#/lesson/relativity/03-06-em-lagrangian-stress-energy.md) and now Einstein here. Quantum field theory quantizes exactly these classical actions; attempts to quantize $S_{\rm EH}$ itself, and the effective-field-theory view of the higher-curvature corrections in the 🔴 problem, are where quantum gravity begins.
