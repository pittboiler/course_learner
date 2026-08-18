# Quantum Chemistry · Lesson 1.2: The Hydrogen Atom, Revisited

> ⏱ ~15 min · Module 1: From Atoms to Molecules · Builds on: [1.1 The quantum toolkit, refreshed](01-01-quantum-toolkit-refreshed.md), [`quantum-mechanics` syllabus](../../quantum-mechanics/syllabus.md), [`physical-chemistry` 4.4 Hydrogen atom & atomic spectra](../../physical-chemistry/lessons/04-04-hydrogen-atom-atomic-spectra.md) · Unlocks: [1.3 The variational principle](01-03-variational-principle.md)

## Why this matters

Every orbital you will ever draw — the $sp^3$ carbons of organic chemistry, the $d$-orbitals that color a transition-metal complex, the basis functions a Hartree–Fock calculation actually optimizes — is spoken in the vocabulary of *one* atom: hydrogen. It is the only atom whose Schrödinger equation we can solve **exactly**, and its solutions hand us the whole grammar of chemistry: the labels $1s, 2p, 3d$; the quantum numbers behind the periodic table; the shapes electrons come in. Everything harder (helium onward) is built by borrowing this vocabulary and correcting it. So before we approximate anything, we bank the one problem we can do perfectly.

## The idea

Picture a single electron caught in the funnel-shaped pull of a nucleus of charge $+Z$. The attraction depends only on distance $r$, not direction — the potential is **spherically symmetric**. That one fact is the master key: it lets us split the electron's wavefunction into a part that only cares about *how far out* it is (the **radial** part) and a part that only cares about *which direction* (the **angular** part). Solve the two separately, multiply, done.

The radial part answers "how big and how deep?" — it sets the atom's size and the energy, and it carries **radial nodes**, spherical shells where the electron is never found. The angular part answers "what shape?" — spheres, dumbbells, cloverleaves. Stick a label on each allowed combination and you have named every orbital: $1s$ is small and round, $2p$ is a dumbbell one shell out, $3d$ is a cloverleaf farther still. The periodic table is just these orbitals filling up in order.

## The formal version

**The hydrogenic Hamiltonian.** For one electron bound to a nucleus of charge $Z$, working in **atomic units** (Hartree units: set $\hbar = m_e = e = 4\pi\varepsilon_0 = 1$, so energies come out in **hartree**, $1\ \text{Ha} = 27.211\ \text{eV}$, and lengths in **bohr**, $a_0 = 0.529\ \text{Å}$), the energy operator is

$$\hat H = -\tfrac12 \nabla^2 - \frac{Z}{r}.$$

*In words: kinetic energy ($-\tfrac12\nabla^2$) plus the Coulomb attraction ($-Z/r$) pulling the electron toward the nucleus.* We want the states $\psi$ with $\hat H\psi = E\psi$.

**Separation of variables.** Because $-Z/r$ depends only on $r$, every solution factors into radial times angular:

$$\boxed{\;\psi_{n\ell m}(r,\theta,\phi) = R_{n\ell}(r)\,Y_{\ell m}(\theta,\phi)\;}$$

*In words: an orbital is a radial profile $R$ (how the cloud thins with distance) multiplied by an angular pattern $Y$ (its shape), and it takes three integer labels to pin one down.* The $Y_{\ell m}$ are the **spherical harmonics** — the same universal angular functions for *any* central force, so they are shared with the rigid rotor of physical chemistry.

**The quantum numbers.** Three integers label each spatial state, plus spin:

- **Principal** $n = 1, 2, 3, \dots$ — sets the **energy and overall size**. Bigger $n$, higher (less negative) energy, larger orbital.
- **Azimuthal** $\ell = 0, 1, \dots, n-1$ — sets the **shape**; named by letter $\ell = 0,1,2,3 \to s, p, d, f$. It is the electron's orbital angular momentum, magnitude $\sqrt{\ell(\ell+1)}\,\hbar$.
- **Magnetic** $m = -\ell, \dots, 0, \dots, +\ell$ — sets the **orientation** in space ($2\ell+1$ choices).
- **Spin** $m_s = \pm\tfrac12$ — an intrinsic two-valued label, doubling every state.

*In words: $n$ says which shell, $\ell$ says what shape, $m$ says which way it points, spin says up or down.*

**Energies and degeneracy.** Solving the radial equation gives the astonishing result that the energy depends on $n$ **alone**:

$$E_n = -\frac{Z^2}{2n^2}\ \text{Ha} = -\frac{13.6\,Z^2}{n^2}\ \text{eV}.$$

*In words: energy is fixed by the shell number; the shape ($\ell$) and orientation ($m$) don't change it.* Counting the states that share an $E_n$ (before spin): $\sum_{\ell=0}^{n-1}(2\ell+1) = n^2$. Including spin, $2n^2$. The independence from $\ell$ is the **accidental degeneracy** — a special gift of the exact $1/r$ potential. In any many-electron atom, where each electron sees a *screened*, non-$1/r$ pull, it breaks: that is exactly why $2s$ lies below $2p$ and the periodic table has its structure.

**The radial part — nodes and where the electron lives.** $R_{n\ell}(r)$ has

$$\#\ \text{radial nodes} = n - \ell - 1,$$

spherical shells where $R = 0$. But raw $R$ is misleading about *where the electron actually is*: space at radius $r$ is a shell of area $4\pi r^2$, so the probability of finding the electron between $r$ and $r+dr$ is governed by the **radial distribution function**

$$P(r) = r^2\,|R_{n\ell}(r)|^2.$$

*In words: multiply the density by the surface area of the shell — that $r^2$ is why the electron isn't most likely to be at the nucleus, even though the density $|R|^2$ peaks there.* For $1s$ hydrogen, $R_{1s} = 2Z^{3/2}e^{-Zr}$, and $P(r) = 4Z^3 r^2 e^{-2Zr}$ peaks at $r = 1/Z$ — for $Z=1$, exactly the **Bohr radius** $a_0$.

**The angular part — the shapes.** $|Y_{\ell m}|^2$ is the shape you draw:

- $\ell = 0$ ($s$): no angular dependence — a **sphere**.
- $\ell = 1$ ($p$): a **dumbbell** along an axis, one angular node (a nodal plane).
- $\ell = 2$ ($d$): a **cloverleaf** (four lobes), two angular nodes.

The number of **angular nodes equals $\ell$**; total nodes $= (n-\ell-1) + \ell = n-1$. The raw $Y_{\ell m}$ for $m\neq 0$ are complex (they carry $e^{im\phi}$); chemists take real linear combinations — e.g. $p_x, p_y, p_z$ instead of $p_{-1}, p_0, p_{+1}$ — to get the familiar axis-aligned lobes. Same physics, real-valued bookkeeping.

## Picture

![Radial distribution functions P(r) = r-squared times R-squared for the 1s, 2s, and 2p hydrogen orbitals, plotted against r in units of the Bohr radius. The 1s curve (blue) peaks at r = a0; the 2p curve (coral, solid) peaks near 4 a0; the 2s curve (coral, dashed) has a radial node at r = 2 a0 and a large outer peak.](assets/01-02-fig1.svg)

The $r^2$ weighting pushes every peak *away* from the nucleus. Note the $2s$ curve touching zero at its radial node ($n-\ell-1 = 2-0-1 = 1$ node) while $2p$, with $2-1-1 = 0$ radial nodes, never dips to zero except at the origin.

## Worked examples

**Example 1 (name a state, count its shell).** Take the state $(n,\ell,m) = (3,1,0)$ in hydrogen ($Z=1$).

- Energy: $E_3 = -\dfrac{1}{2\cdot 3^2} = -\dfrac{1}{18} = -0.0556\ \text{Ha} = -\dfrac{13.6}{9} = -1.51\ \text{eV}$.
- Radial nodes: $n-\ell-1 = 3-1-1 = 1$. Angular nodes: $\ell = 1$. Total: $n-1 = 2$.
- Name: $n=3$, $\ell=1 \Rightarrow$ **$3p$** (the $m=0$ one is $3p_z$).
- Degeneracy of $n=3$: $n^2 = 9$ spatial states ($3s$, three $3p$, five $3d$), or $2n^2 = 18$ with spin.

**Example 2 (why chemistry cares — screening breaks the tie).** In hydrogen $2s$ and $2p$ are exactly degenerate. Look at the picture: $2s$ has a small inner peak that pokes close to the nucleus (it "penetrates"), while $2p$ stays out. In lithium, that inner $2s$ lobe lets a $2s$ electron feel more of the un-screened nuclear charge than a $2p$ electron does, so $E_{2s} < E_{2p}$ — and lithium's ground config is $1s^2 2s^1$, not $1s^2 2p^1$. The accidental $\ell$-degeneracy is a hydrogen-only coincidence; its breaking *is* the periodic table. (More in general chemistry's [electron configurations](../../general-chemistry/lessons/01-02-electron-configurations-periodic-table.md).)

## Watch out

- **You might think the electron is most likely at the nucleus** because the $1s$ *density* $|R|^2$ is largest there. But the *probability of a radius* is $P(r) = r^2|R|^2$, and the $r^2$ kills it at the origin — the electron is most likely at $r = a_0$, not $r = 0$.
- **You might conflate the two kinds of node.** Radial nodes ($n-\ell-1$) are spheres at fixed $r$; angular nodes ($\ell$) are planes/cones at fixed direction. A $2p$ has *zero* radial nodes but *one* angular node — its "waist" plane, not a shell.
- **You might expect $E$ to depend on $\ell$.** It doesn't — *only for the pure $1/r$ potential*. Do not carry the accidental degeneracy into helium, lithium, or any real atom; screening lifts it, and that shift is where the chemistry hides.
- **You might read $\langle r\rangle$ off the peak of $P(r)$.** The most-probable radius (peak) and the mean radius $\langle r\rangle$ differ — the distribution is skewed toward large $r$, so $\langle r\rangle > r_\text{peak}$ (Problem 3).

## One-liner

> Solve the one atom you can — $\psi_{n\ell m} = R_{n\ell}Y_{\ell m}$, energy $-Z^2/2n^2$, $n^2$-fold degenerate — and you've named every orbital in chemistry.

## Problems

**P1 (🟢)** For the hydrogen ($Z=1$) state $(n,\ell,m) = (3,2,-1)$: give its energy in both Ha and eV, its number of radial and angular nodes, and its orbital name. Then state the total degeneracy (with spin) of the whole $n=3$ level.

**P2 (🟡)** Consider the one-electron ion $\ce{He+}$ ($Z = 2$). Compute its ground-state ($1s$) energy in both Ha and eV, and find its most-probable radius. Compare each to hydrogen: by what factor is $\ce{He+}$ more tightly bound, and by what factor smaller?

**P3 (🔴)** For hydrogen $1s$, $R_{1s}(r) = 2e^{-r}$ (atomic units, $Z=1$), so $P(r) = 4r^2 e^{-2r}$. (a) Find the **most-probable radius** $r_\text{mp}$ by maximizing $P(r)$. (b) Find the **mean radius** $\langle r\rangle = \int_0^\infty r\,P(r)\,dr$. (c) Why do they differ? Use $\displaystyle\int_0^\infty r^n e^{-ar}\,dr = \frac{n!}{a^{n+1}}$.

<details>
<summary>Solutions</summary>

**P1** Energy depends on $n$ only:
$$E_3 = -\frac{Z^2}{2n^2} = -\frac{1}{2\cdot 9} = -\frac{1}{18} = -0.0556\ \text{Ha} = -\frac{13.6}{9} = -1.51\ \text{eV}.$$
Radial nodes $= n-\ell-1 = 3-2-1 = 0$. Angular nodes $= \ell = 2$. (Total $= n-1 = 2$ ✓.) Name: $n=3,\ \ell=2 \Rightarrow \mathbf{3d}$.
Degeneracy of $n=3$: spatial $n^2 = 9$; with spin $2n^2 = \mathbf{18}$.

*Check.* A $d$ orbital should be all-angular structure with no radial node at $n=3$ — indeed $3d$ is the "first" $d$ shell, node-free radially. ✓

**P2** With $Z = 2$ in $E_n = -Z^2/2n^2$, ground state $n=1$:
$$E_{1}(\ce{He+}) = -\frac{2^2}{2\cdot 1} = -2\ \text{Ha} = -2 \times 27.211 = -54.4\ \text{eV}.$$
Hydrogen: $E_1 = -0.5\ \text{Ha} = -13.6\ \text{eV}$. Binding is deeper by $Z^2 = \mathbf{4\times}$.
Most-probable radius scales as $r_\text{mp} = 1/Z$ (from $P = 4Z^3 r^2 e^{-2Zr}$; see P3 with $Z$): $r_\text{mp}(\ce{He+}) = 1/2 = 0.5\ a_0$ versus $1\ a_0$ for H — **half the size**.

*Check.* Squeezing the electron to half the radius while quadrupling the binding is the hydrogenic scaling $E \propto Z^2$, $\langle r\rangle \propto 1/Z$: pull harder, tighter and deeper. It is why core electrons of heavy atoms are so tiny and so strongly held. ✓

**P3** (a) Maximize $P(r) = 4r^2 e^{-2r}$:
$$P'(r) = 4\left(2r\,e^{-2r} - 2r^2 e^{-2r}\right) = 8r\,e^{-2r}(1 - r) = 0 \;\Rightarrow\; r_\text{mp} = 1\ a_0.$$
(The $r=0$ root is the minimum.) So the electron is most likely at exactly the **Bohr radius**.

(b) Mean radius, using $\int_0^\infty r^n e^{-ar}dr = n!/a^{n+1}$ with $a=2$:
$$\langle r\rangle = \int_0^\infty r\cdot 4r^2 e^{-2r}\,dr = 4\int_0^\infty r^3 e^{-2r}\,dr = 4\cdot\frac{3!}{2^4} = 4\cdot\frac{6}{16} = \frac{3}{2} = 1.5\ a_0.$$

(c) They differ because $P(r)$ is **not symmetric**: it rises steeply then falls off with a long tail toward large $r$. That right-skew drags the *mean* out past the *peak*, so $\langle r\rangle = 1.5\,a_0 > r_\text{mp} = 1\,a_0$. Peak $\ne$ average whenever the distribution is lopsided.

*Check.* Normalization confirms the setup: $\int_0^\infty 4r^2 e^{-2r}dr = 4\cdot 2!/2^3 = 4\cdot 2/8 = 1$ ✓ — $P(r)$ is a genuine probability distribution.

</details>

## Connections

- **Backward:** this is the operators-and-eigenvalues machinery of [1.1](01-01-quantum-toolkit-refreshed.md) and the [`quantum-mechanics` syllabus](../../quantum-mechanics/syllabus.md) (separation of variables, the central-force problem) applied to the one potential that closes in exact form. The spectrum $E_n = -Z^2/2n^2$ reproduces the Rydberg lines you saw in [`physical-chemistry` 4.4](../../physical-chemistry/lessons/04-04-hydrogen-atom-atomic-spectra.md), and its $Y_{\ell m}$ are the rigid-rotor angular functions from [`physical-chemistry` 4.3](../../physical-chemistry/lessons/04-03-molecular-energy-levels-box-oscillator-rotor.md).
- **Forward:** these hydrogenic orbitals become the raw material for [1.3 the variational principle](01-03-variational-principle.md) (trial functions built from them) and, contracted into Slater/Gaussian functions, the **basis sets** of [2.5](02-05-basis-sets.md) that every molecular calculation expands its unknowns in.
- **Sideways (the periodic table):** the ordering and shapes here, once screening lifts the accidental $\ell$-degeneracy, *are* the Aufbau filling behind [general chemistry's electron configurations](../../general-chemistry/lessons/01-02-electron-configurations-periodic-table.md) — same $s/p/d$ labels, same $n^2$ shell capacities.
