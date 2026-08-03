# Functional Analysis · Lesson 5.3: The spectral theorem for unbounded self-adjoint operators

> ⏱ ~15 min · Module 5: Unbounded operators and quantum mechanics · Builds on: [5.2 Symmetric vs self-adjoint](05-02-symmetric-vs-self-adjoint.md) · Unlocks: [5.4 Stone's theorem and time evolution](05-04-stone-theorem-time-evolution.md)

## Why this matters

Every observable in quantum mechanics — position, momentum, energy — is an *unbounded* operator: there is no ceiling on how much position or energy a state can carry, so no finite operator norm can hold it. [4.5](04-05-bounded-self-adjoint-spectral-theorem.md) diagonalized bounded self-adjoint operators; but the operators physics actually cares about live outside that theorem. This lesson extends the spectral theorem to the unbounded self-adjoint case, and the payoff is enormous: it turns the entire quantum-mechanical dictionary into a *theorem*. "An observable is a self-adjoint operator, its possible measured values are its spectrum, and the probability of each outcome is $\langle \psi, E(B)\psi\rangle$" stops being a list of postulates you memorize and becomes a corollary of one structural fact about self-adjoint operators. It is also the machine that makes $e^{itA}$ — the time-evolution operator of [5.4](05-04-stone-theorem-time-evolution.md) — well-defined.

## The idea

Recall the finite-dimensional picture: a Hermitian matrix $A$ can be *diagonalized*. In an eigenbasis it becomes multiplication — the $k$-th coordinate just gets scaled by the real eigenvalue $\lambda_k$. The spectral theorem is the statement that **every self-adjoint operator, bounded or not, is secretly a multiplication operator** once you view it in the right coordinates. Diagonalization is not a special luxury of small matrices; it is universal, provided "self-adjoint" holds.

Two things change when $A$ is unbounded rather than a matrix. First, the list of eigenvalues can become a *continuum*: instead of scaling coordinate $k$ by $\lambda_k$, you scale the value at each point $x$ of some space by a function $\lambda(x)$ — and that function is allowed to be unbounded. Second, "sum over eigenprojections" $A = \sum_k \lambda_k P_k$ becomes an *integral* against a measure that assigns projections to sets of real numbers. That object — a **projection-valued measure** $E$ — is the real hero. It records, for each Borel set $B \subseteq \mathbb{R}$, the projection $E(B)$ onto "the part of the state whose spectral value lies in $B$." Feed it a number and you rebuild $A$; feed it a set and you read off a probability.

## The formal version

Let $A$ be a (densely defined) self-adjoint operator on a Hilbert space $H$, with spectrum $\sigma(A) \subseteq \mathbb{R}$ (possibly unbounded).

**Theorem (spectral theorem, PVM form).** There is a unique **projection-valued measure** $E$ on the Borel sets of $\mathbb{R}$, supported on $\sigma(A)$, such that
$$A = \int_{\sigma(A)} \lambda \, dE(\lambda).$$
Here each $E(B)$ is an orthogonal projection, $E(\mathbb{R}) = I$, $E(\varnothing)=0$, and $E$ is countably additive on disjoint sets (in the strong operator topology).

**In words:** $A$ is "$\lambda$ summed against the projection $dE(\lambda)$ onto the piece of the space living at spectral value $\lambda$" — the integral version of $A = \sum_k \lambda_k P_k$, now over a continuum. The domain of $A$ is exactly the vectors for which that integral converges: $\{\psi : \int \lambda^2 \, d\langle\psi, E(\lambda)\psi\rangle < \infty\}$.

**Theorem (multiplication form — the same statement).** There is a measure space $(M,\mu)$, a real measurable function $a : M \to \mathbb{R}$, and a unitary $U : H \to L^2(M,\mu)$ with
$$U A U^{-1} = M_a, \qquad (M_a \phi)(m) = a(m)\,\phi(m).$$

**In words:** in the right coordinates ($U$), $A$ is *literally* multiplication by a real function $a$ — the continuum version of "diagonal matrix." $A$ is unbounded exactly when $a$ is an unbounded function.

**Functional calculus.** For any bounded Borel function $f : \mathbb{R} \to \mathbb{C}$, define
$$f(A) = \int_{\sigma(A)} f(\lambda)\, dE(\lambda) \qquad\big(\text{equivalently } U f(A) U^{-1} = M_{f\circ a}\big).$$

**In words:** to apply $f$ to $A$, apply $f$ to its spectral values. The decisive point: **if $f$ is bounded, $f(A)$ is a bounded operator with $\|f(A)\| = \sup_{\lambda \in \sigma(A)} |f(\lambda)|$ — even when $A$ itself is unbounded.** So $e^{itA}$ (with $|e^{it\lambda}|=1$) is a bounded, in fact *unitary*, operator, and $(1+A^2)^{-1}$ is bounded, no matter how wild $A$ is.

**The Born rule, as a theorem.** For a unit vector $\psi \in H$, the map
$$B \longmapsto \mu_\psi(B) := \langle \psi, E(B)\psi\rangle = \|E(B)\psi\|^2$$
is a genuine probability measure on $\mathbb{R}$ (total mass $\langle\psi,E(\mathbb{R})\psi\rangle = \|\psi\|^2 = 1$), supported on $\sigma(A)$.

**In words:** measuring the observable $A$ in state $\psi$ yields a value in $B$ with probability $\|E(B)\psi\|^2$. Outcomes live in $\sigma(A)$; their distribution is $\mu_\psi$. This *is* the Born rule — no longer postulated, but the spectral measure evaluated at $\psi$.

## Concrete instance — position and momentum on $L^2(\mathbb{R})$

Take $H = L^2(\mathbb{R})$, the state space of one particle on a line.

**Position** $X$ is multiplication by the coordinate: $(X\psi)(x) = x\,\psi(x)$, on the domain $\{\psi : x\psi \in L^2\}$. It is *already* in multiplication form — the multiplication theorem is trivial here with $U = I$ and $a(x)=x$. Its spectrum is all of $\mathbb{R}$ (every real value of position is possible), and its projection-valued measure is the simplest imaginable:
$$E_X(B)\,\psi = \mathbf{1}_B \cdot \psi,\qquad \big(\mathbf{1}_B(x) = 1 \text{ if } x\in B,\ 0 \text{ else}\big).$$
"Project onto position-values in $B$" just means "keep $\psi$ where $x\in B$, zero it elsewhere."

**Momentum** $P = -i\,\dfrac{d}{dx}$ is *not* a multiplication operator as written — but the **Fourier transform** $F$ turns it into one. With $\widehat{\psi} = F\psi$ and the identity $F(\psi') = i\xi\,\widehat\psi$ (i.e. $\partial_x \leftrightarrow i\xi$, the workhorse of [pdes](../../pdes/syllabus.md)), one gets $F(P\psi) = \xi\,\widehat\psi$, so
$$P = F^{-1} M_\xi F.$$
That is the multiplication theorem made explicit: $U = F$, $a(\xi) = \xi$. Since $M_\xi$ is just "position on the Fourier side," $\sigma(P) = \sigma(M_\xi) = \mathbb{R}$, and $P$'s spectral measure is the Fourier-conjugate of $X$'s: $E_P(B) = F^{-1} E_X(B)\, F$.

![Commuting square: the Fourier transform F maps L2(R) to L2(R), conjugating the momentum operator P = -i d/dx into multiplication by xi; reading the square gives P = F-inverse M-xi F, hence the spectrum of P equals the spectrum of multiplication by xi, which is the whole real line](assets/05-03-fig1.svg)

## Worked examples

**Example 1 (position — spectrum, spectral measure, Born rule).** For $X$ on $L^2(\mathbb{R})$:

*Spectrum is all of $\mathbb{R}$, purely continuous.* If $X\psi = \lambda\psi$ then $(x-\lambda)\psi(x) = 0$ for a.e. $x$, forcing $\psi = 0$ a.e. — so $X$ has **no eigenvectors at all**. Yet for real $\lambda$, $X - \lambda I$ (multiplication by $x-\lambda$) has an unbounded inverse (multiplication by $1/(x-\lambda)$, which blows up near $x=\lambda$), so it is not boundedly invertible: every real $\lambda$ lies in $\sigma(X)$. Hence $\sigma(X) = \mathbb{R}$, continuous spectrum, no normalizable eigenstates.

*Born rule.* The spectral measure is $E_X(B)\psi = \mathbf{1}_B\psi$, so for a unit state $\psi$ and an interval $[a,b]$,
$$\mu_\psi\big([a,b]\big) = \big\langle \psi,\, E_X([a,b])\psi\big\rangle = \int_{\mathbb{R}} \overline{\psi(x)}\,\mathbf{1}_{[a,b]}(x)\,\psi(x)\,dx = \int_a^b |\psi(x)|^2\,dx.$$
This is *exactly* the textbook statement "the probability of finding the particle between $a$ and $b$ is $\int_a^b |\psi|^2$" — here derived, not assumed. The wavefunction's modulus-squared $|\psi(x)|^2$ is the density of the spectral measure $\mu_\psi$ for position.

**Example 2 (momentum via the Fourier transform).** Using $P = F^{-1} M_\xi F$:

The unitary $F$ intertwines $P$ with position-on-the-$\xi$-line. So $P$'s spectral measure is $E_P(B) = F^{-1}\mathbf{1}_B F$ (multiply by $\mathbf 1_B$ *after* Fourier-transforming), and the momentum distribution of a state $\psi$ is the *position* distribution of its transform $\widehat\psi$:
$$\mu_\psi^{P}\big([a,b]\big) = \big\langle \psi,\, E_P([a,b])\psi\big\rangle = \big\langle \widehat\psi,\, \mathbf 1_{[a,b]}\widehat\psi\big\rangle = \int_a^b |\widehat\psi(\xi)|^2\,d\xi,$$
using that $F$ is unitary ($\langle \psi, F^{-1}(\cdot)F\psi\rangle = \langle \widehat\psi, (\cdot)\widehat\psi\rangle$). So $|\widehat\psi(\xi)|^2$ is the *momentum* probability density — position and momentum are the same observable read in two unitarily equivalent coordinate systems, swapped by the Fourier transform. And since $\sigma(M_\xi) = \mathbb{R}$, we read off $\sigma(P) = \mathbb{R}$ with no computation: unitary equivalence preserves the spectrum.

## Watch out

- **You might think** symmetric is enough for a spectral measure. **Actually** the theorem requires **self-adjoint** ($A = A^{*}$, domains included), not merely symmetric ($A \subseteq A^{*}$) — see [5.2](05-02-symmetric-vs-self-adjoint.md). A symmetric-but-not-self-adjoint operator has *no* spectral measure and *no* functional calculus; you must first fix the domain (choose a self-adjoint extension) before $\int \lambda\, dE$ even exists. The domain is part of the operator.
- **You might think** an unbounded operator can only produce unbounded functions of itself. **Actually** *bounded* Borel functions of $A$ are *bounded* operators: $\|f(A)\| = \sup_{\sigma(A)}|f|$. This is precisely why $e^{itA}$ makes sense and is unitary while $A$ is unbounded — the functional calculus tames $A$ by evaluating a bounded $f$ on its (possibly huge) spectral values. Do not expect $A$'s unboundedness to leak into $f(A)$ when $f$ is bounded.
- **You might think** the Born rule is an extra physical postulate bolted onto the math. **Actually** it is the spectral measure evaluated at $\psi$: $B\mapsto \|E(B)\psi\|^2$ is *automatically* a probability measure on $\sigma(A)$. The physics content is only the identification "observable $=$ self-adjoint operator"; probabilities then follow as a theorem.
- **You might think** continuous spectrum still comes with eigenvectors. **Actually** continuous spectrum means **no normalizable eigenstates exist** — $X$ and $P$ have none. The "position eigenstate $\delta(x-x_0)$" and "momentum eigenstate $e^{ik x}$" of physics are *distributions*, not elements of $L^2$; the honest object is the spectral measure $E$, which needs no eigenvectors.

## One-liner

> Every self-adjoint operator — bounded or not — is multiplication by a real function in disguise, $A = \int \lambda\, dE(\lambda)$; its spectral measure $B\mapsto\|E(B)\psi\|^2$ is the Born rule, and bounded functions of it (like $e^{itA}$) stay bounded no matter how unbounded $A$ is.

## Problems

**P1 (🟢)** A particle on the line is in the state $\psi(x) = \tfrac{1}{\sqrt 2}$ for $x\in[-1,1]$ and $\psi(x)=0$ otherwise. (a) Check $\psi$ is a unit vector. (b) Using the position spectral measure, compute the probability that a position measurement lands in $[0,1]$. (c) What is $E_X([0,1])\psi$ as an explicit function, and why does the *nonexistence* of position eigenvectors not prevent this computation?

**P2 (🟡)** Let $A$ be self-adjoint (possibly unbounded) and $g(\lambda) = \dfrac{1}{1+\lambda^2}$. (a) Explain why $g(A)$ is a **bounded** operator and compute $\|g(A)\|$ in terms of $\operatorname{dist}(0,\sigma(A))$ — in particular show $\|g(A)\|\le 1$ always. (b) For $A = X$ on $L^2(\mathbb{R})$, write $g(X)$ as an explicit operator and confirm your norm.

**P3 (🔴, optional)** Using $P = F^{-1} M_\xi F$ and the Fourier shift identity $F[\psi(\cdot - s)](\xi) = e^{-is\xi}\,\widehat\psi(\xi)$: (a) show that the bounded function $f_s(\lambda) = e^{-is\lambda}$ of $P$ gives the **translation operator**, $\big(e^{-isP}\psi\big)(x) = \psi(x-s)$. (b) Confirm directly that $\|e^{-isP}\| = 1$ (it is unitary), consistent with the functional-calculus norm rule. (This is the seed of [5.4](05-04-stone-theorem-time-evolution.md): momentum *generates* translations, energy generates time evolution.)

<details>
<summary>Solutions</summary>

**P1**
(a) $\|\psi\|^2 = \int_{-1}^{1} \big(\tfrac{1}{\sqrt2}\big)^2\,dx = \tfrac12 \cdot 2 = 1.$ Unit vector. ✓

(b) With $E_X([0,1])\psi = \mathbf 1_{[0,1]}\psi$,
$$\mu_\psi([0,1]) = \big\langle\psi, E_X([0,1])\psi\big\rangle = \int_0^1 |\psi(x)|^2\,dx = \int_0^1 \tfrac12\,dx = \tfrac12.$$
Probability $= \tfrac12$. (By symmetry $\psi$ is spread evenly over $[-1,1]$, so half its probability sits in $[0,1]$ — a sanity check.)

(c) $E_X([0,1])\psi = \mathbf 1_{[0,1]}\cdot\psi$ is the function equal to $\tfrac{1}{\sqrt 2}$ on $[0,1]$ and $0$ elsewhere. The spectral measure $E_X$ is built from the *sets* $B$, not from eigenvectors: $E_X(B)$ is the projection "multiply by $\mathbf 1_B$," which exists for every Borel $B$ regardless of whether $X$ has eigenvectors. Continuous spectrum removes normalizable eigenstates but leaves the projection-valued measure fully intact — that is exactly why the PVM, not eigenvectors, is the right generalization.

**P2**
(a) $g(\lambda) = 1/(1+\lambda^2)$ is a bounded Borel function on $\mathbb{R}$: $0 < g(\lambda) \le 1$, with the maximum $1$ attained at $\lambda = 0$. By the functional calculus, $g(A)$ is bounded with
$$\|g(A)\| = \sup_{\lambda\in\sigma(A)} |g(\lambda)| = \sup_{\lambda\in\sigma(A)} \frac{1}{1+\lambda^2} = \frac{1}{1+\operatorname{dist}(0,\sigma(A))^2},$$
since $1/(1+\lambda^2)$ is largest at the point of $\sigma(A)$ closest to $0$ (it decreases as $|\lambda|$ grows). Because $1+\lambda^2 \ge 1$ for all real $\lambda$, this supremum is $\le 1$: $\|g(A)\|\le 1$ always, with equality iff $0\in\sigma(A)$. Note $A$ itself is allowed to be unbounded — only $g$ needs to be bounded.

(b) For $A = X$ (multiplication by $x$), $g(X)$ is multiplication by $g(x) = \dfrac{1}{1+x^2}$:
$$\big(g(X)\psi\big)(x) = \frac{\psi(x)}{1+x^2}.$$
Its norm is $\sup_{x\in\mathbb{R}} \tfrac{1}{1+x^2} = 1$ (attained at $x=0$), matching (a) since $\sigma(X)=\mathbb{R}$ contains $0$, so $\operatorname{dist}(0,\sigma(X)) = 0$. Even though $X$ is unbounded, $g(X)$ has norm $1$. ✓

**P3**
(a) By the functional calculus, $e^{-isP} = F^{-1} e^{-is\xi} F = F^{-1} M_{e^{-is\xi}} F$, i.e. "Fourier-transform, multiply by $e^{-is\xi}$, transform back." Apply to $\psi$:
$$F\big(e^{-isP}\psi\big)(\xi) = e^{-is\xi}\,\widehat\psi(\xi).$$
But the Fourier shift identity says $e^{-is\xi}\widehat\psi(\xi) = F[\psi(\cdot - s)](\xi)$. Two functions with the same Fourier transform are equal (F injective), so
$$\big(e^{-isP}\psi\big)(x) = \psi(x-s).$$
$e^{-isP}$ translates the state by $s$: momentum is the generator of spatial translations.

(b) Translation preserves the $L^2$ norm: $\|\psi(\cdot - s)\|_2^2 = \int |\psi(x-s)|^2\,dx = \int |\psi(u)|^2\,du = \|\psi\|_2^2$ (substitute $u = x-s$). So $e^{-isP}$ is an isometry; it is onto (inverse $e^{+isP}$, translation by $-s$), hence unitary, $\|e^{-isP}\| = 1$. This agrees with the functional-calculus rule $\|f(P)\| = \sup_{\xi\in\mathbb R}|e^{-is\xi}| = 1$ — a bounded (here modulus-one) function of the *unbounded* $P$ yields a bounded (unitary) operator. ✓

</details>

## Flashback

**From Lesson 5.2 (Symmetric vs self-adjoint):** Consider momentum $P = -i\,\dfrac{d}{dx}$ on $L^2[0,1]$, acting on smooth functions restricted only by a boundary condition. For $f,g$ in the domain, show
$$\langle Pf, g\rangle - \langle f, Pg\rangle = -i\big(f(1)\overline{g(1)} - f(0)\overline{g(0)}\big),$$
and deduce that the boundary condition $f(1) = e^{i\theta} f(0)$ (for a fixed real $\theta$) makes this boundary term vanish — so $P$ is symmetric on that domain. (These $\theta$-conditions are exactly the family of self-adjoint extensions; a *different* boundary condition on each side, or none, breaks self-adjointness.)

<details>
<summary>Solution</summary>

Integrate by parts. With $\langle u,v\rangle = \int_0^1 u\,\overline{v}\,dx$,
$$\langle Pf, g\rangle = \int_0^1 (-i f')\,\overline g\,dx = -i\int_0^1 f'\,\overline g\,dx,$$
$$\langle f, Pg\rangle = \int_0^1 f\,\overline{(-i g')}\,dx = \int_0^1 f\,(i\,\overline{g'})\,dx = i\int_0^1 f\,\overline{g'}\,dx.$$
Subtract:
$$\langle Pf,g\rangle - \langle f, Pg\rangle = -i\int_0^1\big(f'\overline g + f\,\overline{g'}\big)\,dx = -i\int_0^1 (f\overline g)'\,dx = -i\big[f\overline g\big]_0^1 = -i\big(f(1)\overline{g(1)} - f(0)\overline{g(0)}\big).$$

For symmetry we need this to vanish for all $f,g$ in the domain. Impose $f(1) = e^{i\theta}f(0)$ and $g(1) = e^{i\theta}g(0)$ (same $\theta$ for every function in the domain). Then
$$f(1)\overline{g(1)} = e^{i\theta}f(0)\cdot \overline{e^{i\theta}g(0)} = e^{i\theta}e^{-i\theta}\,f(0)\overline{g(0)} = f(0)\overline{g(0)},$$
so the boundary term is $-i\big(f(0)\overline{g(0)} - f(0)\overline{g(0)}\big) = 0$. Hence $P$ is symmetric. ($\theta=0$ is periodic BC, $\theta=\pi$ is antiperiodic; the whole circle of $\theta$ gives the one-parameter family of self-adjoint extensions from [5.2](05-02-symmetric-vs-self-adjoint.md). Mismatched or absent boundary data leaves the term nonzero — symmetry, and with it any spectral measure, fails.)

</details>

## Connections

- **Backward ([4.5](04-05-bounded-self-adjoint-spectral-theorem.md)):** this is the bounded spectral theorem with the ceiling removed — the projection-valued measure and $A = \int\lambda\,dE$ are identical in form; only $\sigma(A)$ is now allowed to run off to infinity and the domain becomes a genuine restriction.
- **Backward ([4.1](04-01-spectrum-of-an-operator.md)):** the spectrum $\sigma(A)$ defined there is exactly the support of $E$; continuous spectrum (no eigenvectors) is the generic case here, whereas [4.4](04-04-spectral-theorem-compact-self-adjoint.md)'s compact operators had pure point spectrum.
- **Backward ([5.2](05-02-symmetric-vs-self-adjoint.md)):** self-adjointness is the exact hypothesis that unlocks a spectral measure — symmetric is not enough, which is why domains and boundary conditions had to be pinned down first.
- **Forward ([5.4](05-04-stone-theorem-time-evolution.md)):** apply the bounded function $f(\lambda) = e^{-it\lambda}$ to the Hamiltonian $H$; the functional calculus produces the unitary $e^{-itH}$, and Stone's theorem says every strongly continuous unitary group arises this way. Time evolution *is* the functional calculus.
- **Sideways ([quantum-mechanics](../../quantum-mechanics/syllabus.md)):** this lesson is the mathematical spine of QM. Observable $=$ self-adjoint operator; possible measurement outcomes $=$ spectrum $\sigma(A)$; outcome distribution in state $\psi$ $=$ $B\mapsto\|E(B)\psi\|^2$ — the **Born rule**, obtained as a theorem. Position and momentum are the first two examples.
- **Sideways ([pdes](../../pdes/syllabus.md)):** the Fourier transform intertwining $X$ and $P$ ($\partial_x \leftrightarrow i\xi$) is the same tool that turns constant-coefficient PDEs into algebra; here it *diagonalizes* momentum, exhibiting the multiplication form of the spectral theorem concretely.
