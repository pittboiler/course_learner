# Quantum Mechanics · Lesson 2.4: The finite square well and bound states

> ⏱ ~15 min · Module 2: The Schrödinger equation and 1D systems · Builds on: [2.1 The Schrödinger equation](#/lesson/quantum-mechanics/02-01-schrodinger-equation.md), [2.3 The infinite square well](#/lesson/quantum-mechanics/02-03-infinite-square-well.md) · Unlocks: 2.5 (scattering & tunneling — the same decaying exponential, now let loose)

## Why this matters

The infinite well was a fantasy: walls no particle could ever reach, and *infinitely many* bound states stacked to the sky. Every real trap — an electron in a quantum dot, a nucleon in a nucleus, a molecule in a shallow dip — has **finite** walls. Two things change the moment the walls come down to earth, and both are physical, not technical. First, the wavefunction **leaks into the wall**: it is nonzero where a classical particle could never be, the seed of tunneling. Second, a finite well holds only a **finite number** of bound states — and if you make it too shallow, it can hold as few as one. Learning to match a wavefunction across a boundary is the single most reused move in 1D quantum mechanics; the next lesson (scattering) is the same algebra with the sign of $E$ flipped.

## The idea

Split space into two regimes by asking a classical question: *is the particle allowed here?* A bound state has energy $-V_0 < E < 0$ — below the rim of the well ($E<0$) so it can't escape, above the floor ($E>-V_0$) so it has room to move.

- **Inside the well**, $E$ sits *above* the potential floor. The particle has positive kinetic energy, so $\varphi$ curves *toward* the axis and **oscillates** — just like the infinite well, sinusoidal.
- **Outside the well**, $E$ lies *below* the potential ($E<0=V$). Classically forbidden: kinetic energy would be negative. Quantum-mechanically $\varphi$ curves *away* from the axis and **decays exponentially** — it doesn't slam to zero at the wall, it seeps in and dies off over a characteristic length.

The whole problem is then: glue an oscillation to two exponential tails so the seam is smooth. "Smooth" — the wavefunction and its slope both continuous — is such a stringent demand that only a *discrete* set of energies can pull it off. That discreteness is where quantization comes from here; there's no hard wall imposing it.

## The formal version

Take the symmetric well
$$V(x) = \begin{cases} -V_0 & |x| < a \\ \;\;0 & |x| > a \end{cases}, \qquad V_0>0,$$
where $2a$ is the width and $V_0$ the depth. We seek **bound states**, $-V_0 < E < 0$. The time-independent Schrödinger equation $-\frac{\hbar^2}{2m}\varphi'' + V\varphi = E\varphi$ splits into two regions.

**Inside** ($|x|<a$): $\;\varphi'' = -k^2\varphi$, with
$$k = \frac{\sqrt{2m(E+V_0)}}{\hbar}.$$
In words: $k$ is a real wavenumber ($E+V_0>0$), so solutions are $\sin kx,\cos kx$ — oscillatory.

**Outside** ($|x|>a$): $\;\varphi'' = +\kappa^2\varphi$, with
$$\kappa = \frac{\sqrt{-2mE}}{\hbar} = \frac{\sqrt{2m|E|}}{\hbar}.$$
In words: $\kappa$ is a real decay rate ($E<0$), so the normalizable solution is $e^{-\kappa|x|}$ — an exponential tail. The particle penetrates a distance of order $1/\kappa$ into the forbidden region; **$1/\kappa$ is the penetration depth**.

**Parity splits the problem.** Because $V(-x)=V(x)$, the eigenstates can be chosen even or odd. Writing the tail on the right as $C e^{-\kappa x}$:

- **Even** $\varphi = A\cos kx$ inside. Demanding $\varphi$ and $\varphi'$ both continuous at $x=a$ (equivalently, the logarithmic derivative $\varphi'/\varphi$ continuous, which cancels the unknown amplitudes) gives
$$\boxed{\,k\tan(ka) = \kappa\,}\qquad\text{(even states)}.$$
- **Odd** $\varphi = A\sin kx$ inside, giving
$$\boxed{\,-k\cot(ka) = \kappa\,}\qquad\text{(odd states)}.$$

In words: continuity is only satisfiable at special energies — these **transcendental matching conditions** are the quantization rule. You can't solve them with algebra; you solve them graphically.

**The graphical solution.** Let $\xi = ka$ and $\eta = \kappa a$ (both positive). Adding the two definitions kills $E$:
$$\xi^2 + \eta^2 = (k^2+\kappa^2)a^2 = \frac{2mV_0}{\hbar^2}a^2 \equiv z_0^2, \qquad z_0 = \frac{a}{\hbar}\sqrt{2mV_0}.$$
In words: every bound state lives on a **circle of radius $z_0$** in the $(\xi,\eta)$ plane. The dimensionless **well strength** $z_0$ bundles depth, width, and mass into one number. The even condition becomes $\eta = \xi\tan\xi$ and the odd $\eta = -\xi\cot\xi$; the bound states are where these curves cross the circle. A bigger $z_0$ = bigger circle = more crossings = more bound states.

Two facts fall right out of the picture:

- **Finitely many bound states**, counted by
$$N = \left\lceil \frac{z_0}{\pi/2} \right\rceil.$$
Even branches ($\xi\tan\xi$) start at $\xi=0,\pi,2\pi,\dots$; odd branches ($-\xi\cot\xi$) start at $\xi=\pi/2,3\pi/2,\dots$. The circle of radius $z_0$ catches one new branch every time $z_0$ passes a multiple of $\pi/2$.
- **There is always at least one bound state** (an even one). The lowest even branch starts at the origin, so *any* circle, however small, intersects it. In 1D, an attractive well — no matter how shallow — always binds. (This is special to 1D; in 3D a well can be too weak to bind anything.)

**Deep-well limit.** As $V_0\to\infty$ (or $a\to\infty$), $z_0\to\infty$: the circle swallows more and more branches ($N\to\infty$), and $\kappa\to\infty$ so $1/\kappa\to0$ — the tails vanish and the walls turn hard. The matching conditions force $ka\to n\pi/2$, i.e. $k(2a)\to n\pi$, exactly the **infinite well of width $L=2a$**. The finite well contains the infinite well as its stiff limit.

## Picture

![Finite square well with a bound state: the wavefunction oscillates inside the well and decays exponentially into the classically forbidden regions outside the walls](assets/02-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — where the even condition comes from).** Even state: $\varphi = A\cos kx$ for $|x|<a$, and $\varphi = C e^{-\kappa x}$ for $x>a$. Impose continuity at $x=a$.

Value: $\;A\cos ka = C e^{-\kappa a}$.
Slope: $\;-Ak\sin ka = -\kappa C e^{-\kappa a}$.

Divide the second by the first — the unknown amplitudes $A,C$ cancel, which is the whole point of using the logarithmic derivative:
$$\frac{-Ak\sin ka}{A\cos ka} = \frac{-\kappa C e^{-\kappa a}}{C e^{-\kappa a}} \;\Longrightarrow\; -k\tan ka = -\kappa \;\Longrightarrow\; k\tan(ka)=\kappa.$$
No free constant survives — the condition is a pure relation between $E$ (hidden in $k,\kappa$) and the well, so only discrete $E$ work. The odd case is identical with $\sin\leftrightarrow\cos$, producing $-k\cot(ka)=\kappa$.

**Example 2 (why you'd care — counting states graphically).** Take a well with $z_0 = 5$. How many bound states, and of what parity?

Draw the circle $\xi^2+\eta^2=25$ (radius $5$) in the first quadrant and overlay the branches:

- **Even** $\eta=\xi\tan\xi$: branches rising from $\xi=0$ and $\xi=\pi\approx3.14$. Radius $5$ reaches past $\pi$ but not to $2\pi\approx6.28$, so it catches **2 even branches**.
- **Odd** $\eta=-\xi\cot\xi$: branches rising from $\xi=\pi/2\approx1.57$ and $\xi=3\pi/2\approx4.71$. Radius $5$ reaches past both, so **2 odd branches**.

Total $N = 4$: even, odd, even, odd as energy climbs — parities strictly alternate, ground state even. The formula agrees: $\lceil 5/(\pi/2)\rceil = \lceil 3.18\rceil = 4$. Shrink the well to $z_0=1$ and only the ground even branch survives: one bound state, as promised.

## Watch out

- You might think the wavefunction must be **zero at the wall**, as in the infinite well. It isn't — $\varphi(a)\neq0$; the state leaks *through* the wall as $e^{-\kappa(x-a)}$. Zero-at-the-wall is the $V_0\to\infty$ limit only, where $\kappa\to\infty$ crushes the tail.
- You might think you can **solve the matching condition algebraically**. You can't: $k\tan(ka)=\kappa$ mixes a polynomial-in-$E$ with a transcendental function of $\sqrt{E+V_0}$. It has no closed form — the graphical circle-and-branches construction (or a numerical root-find) is the answer, not a fallback.
- You might think a **shallower well eventually holds no states**. In 1D that never happens — the lowest even branch starts at the origin, so at least one bound state survives to $z_0\to0^+$ (though its binding energy $\to0$: the state becomes arbitrarily shallow and its tail arbitrarily long, $1/\kappa\to\infty$). The "too weak to bind" phenomenon is a 3D story.

## One-liner

> A bound state oscillates inside the well and leaks out as $e^{-\kappa|x|}$; smoothness at the walls only fits at discrete energies, and the well's strength $z_0=\frac{a}{\hbar}\sqrt{2mV_0}$ counts how many — always at least one.

## Problems

**P1 (🟢)** An electron ($m = 9.11\times10^{-31}$ kg) is bound in a finite well of depth $V_0 = 20$ eV in a state of energy $E = -8$ eV. Compute the interior wavenumber $k$, the exterior decay rate $\kappa$, and the penetration depth $1/\kappa$ (in nm). Use $\hbar = 1.055\times10^{-34}$ J·s and $1\text{ eV}=1.602\times10^{-19}$ J.

**P2 (🟡)** A well has strength $z_0 = 8$. How many bound states does it hold, and what are their parities in order of increasing energy? Which multiple of $\pi/2$ would you have to drop $z_0$ *below* to lose the top state?

**P3 (🔴, optional)** Show that in the limit $V_0\to\infty$ the finite-well bound-state energies reduce to the infinite-square-well spectrum for a box of width $L=2a$. (Hint: what must $ka$ approach when $\kappa\to\infty$ forces $k\tan ka=\kappa$ and $-k\cot ka=\kappa$ to blow up? Then read off $E_n + V_0$, the energy above the floor.)

<details>
<summary>Solutions</summary>

**P1** Inside, $E+V_0 = -8+20 = 12$ eV $= 12\times1.602\times10^{-19} = 1.922\times10^{-18}$ J; outside, $|E| = 8$ eV $= 1.282\times10^{-18}$ J.

$$k = \frac{\sqrt{2m(E+V_0)}}{\hbar} = \frac{\sqrt{2(9.11\times10^{-31})(1.922\times10^{-18})}}{1.055\times10^{-34}} \approx 1.77\times10^{10}\ \text{m}^{-1} = 17.7\ \text{nm}^{-1}.$$

$$\kappa = \frac{\sqrt{2m|E|}}{\hbar} = \frac{\sqrt{2(9.11\times10^{-31})(1.282\times10^{-18})}}{1.055\times10^{-34}} \approx 1.45\times10^{10}\ \text{m}^{-1} = 14.5\ \text{nm}^{-1}.$$

Penetration depth: $\;1/\kappa \approx 6.9\times10^{-11}$ m $= 0.069$ nm $\approx 0.69$ Å — about a Bohr radius, so a genuinely atomic-scale leak. (Sanity check: $k/\kappa = \sqrt{(E+V_0)/|E|} = \sqrt{12/8} = \sqrt{1.5} \approx 1.22$. ✓)

**P2** $N = \lceil z_0/(\pi/2)\rceil = \lceil 8/1.5708\rceil = \lceil 5.09\rceil = 6$. Parities alternate starting from the even ground state, so in order of increasing energy: **even, odd, even, odd, even, odd** — 3 even and 3 odd. The states enter as $z_0$ passes $0,\tfrac{\pi}{2},\pi,\tfrac{3\pi}{2},2\pi,\tfrac{5\pi}{2}$. The 6th (top, odd) state appeared when $z_0$ crossed $5\cdot\tfrac{\pi}{2} = \tfrac{5\pi}{2}\approx 7.85$. So dropping $z_0$ below $\tfrac{5\pi}{2}$ kills it, leaving 5 states.

**P3** As $V_0\to\infty$, $\kappa = \sqrt{2m|E|}/\hbar$ — but crucially $\kappa \to \infty$ because the tail rate is set by the full well depth, not the fixed physical energy (equivalently $z_0\to\infty$). For the matching conditions to hold with $\kappa\to\infty$:

- Even, $k\tan(ka)=\kappa\to\infty$: need $\tan(ka)\to\infty$, i.e. $ka \to \tfrac{\pi}{2},\tfrac{3\pi}{2},\dots = (2j-1)\tfrac{\pi}{2}$ (odd multiples).
- Odd, $-k\cot(ka)=\kappa\to\infty$: need $\cot(ka)\to-\infty$, i.e. $ka \to \pi,2\pi,\dots = (2j)\tfrac{\pi}{2}$ (even multiples).

Together, both parities require
$$ka \to \frac{n\pi}{2}, \quad n=1,2,3,\dots \;\Longrightarrow\; k = \frac{n\pi}{2a} = \frac{n\pi}{L}, \quad L = 2a.$$
The energy measured **above the well floor** is $E + V_0 = \hbar^2 k^2/2m$, so
$$E_n + V_0 \;\to\; \frac{\hbar^2}{2m}\left(\frac{n\pi}{L}\right)^2 = \frac{n^2\pi^2\hbar^2}{2mL^2},$$
which is exactly the infinite-square-well spectrum for a box of width $L=2a$ (measuring energy from the bottom of the box). The exponential tails vanish ($1/\kappa\to0$), the walls harden, and $\varphi\to0$ at $x=\pm a$ — the infinite well is the deep-well limit, as claimed.

</details>

## Flashback

**From Lesson 2.3 (The infinite square well):** An electron is confined to an infinite well of width $L = 0.50$ nm. Find the ground-state energy $E_1$ in eV, and the energy gap $E_2 - E_1$. (Recall $E_n = n^2\pi^2\hbar^2/2mL^2$; use $\hbar = 1.055\times10^{-34}$ J·s, $m=9.11\times10^{-31}$ kg.)

<details>
<summary>Solution</summary>

$$E_1 = \frac{\pi^2\hbar^2}{2mL^2} = \frac{\pi^2 (1.055\times10^{-34})^2}{2(9.11\times10^{-31})(0.50\times10^{-9})^2} \approx 2.41\times10^{-19}\ \text{J} \approx 1.5\ \text{eV}.$$

Since $E_n \propto n^2$, the gap is $E_2 - E_1 = (4-1)E_1 = 3E_1 \approx 4.5$ eV. The spacing *grows* with $n$ ($E_{n+1}-E_n = (2n+1)E_1$) — the opposite of the finite well, whose levels *thin out* and terminate once you climb above the rim. Contrast this with today's finite well: raise the energy toward $0$ and you eventually run out of bound states entirely.

</details>

## Connections

- **Backward:** this is [2.3](#/lesson/quantum-mechanics/02-03-infinite-square-well.md) with soft walls — the interior oscillation is identical, but the hard boundary condition $\varphi(\pm a)=0$ is replaced by *smooth matching* onto exponential tails, which is why the spectrum is finite instead of endless. The parity split reuses the symmetry argument you first met there.
- **Forward:** the exponential $e^{-\kappa x}$ in the forbidden region is an **evanescent wave** — the exact object that becomes tunneling in [2.5](#/lesson/quantum-mechanics/02-05-scattering-barriers-tunneling.md). There $E>0$ (unbound), the tail lives *inside a barrier* rather than outside a well, and its leakage out the far side is the transmission amplitude. Same math, $\kappa=\sqrt{2m(V-E)}/\hbar$, opposite sign of $E$.
- **Sideways (classical mechanics):** a classical particle with $E<V$ simply turns around at the wall — the forbidden region is strictly off-limits. The nonzero $e^{-\kappa|x|}$ tail has no classical analogue; it is the cleanest single illustration that a quantum particle is not a point with a definite trajectory. The penetration depth $1/\kappa$ is the length scale over which classical intuition fails.
