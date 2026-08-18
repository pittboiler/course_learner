# Quantum Chemistry · Lesson 2.1: Many Electrons and Antisymmetry

> ⏱ ~15 min · Module 2: Hartree–Fock and Basis Sets · Builds on: [1.6 (H₂⁺ and the LCAO idea)](01-06-h2-plus-lcao.md), [1.2 (The hydrogen atom, revisited)](01-02-hydrogen-atom-revisited.md) · Unlocks: [2.2 (The Hartree–Fock equations)](02-02-hartree-fock-equations.md)

## Why this matters

In Module 1 you built molecular orbitals for $\ce{H2+}$ — one electron, one orbital, done. Every real molecule has *many* electrons, and the moment you have two of them you hit a wall that has nothing to do with solving a harder differential equation: electrons are **identical**, and quantum mechanics demands their wavefunction change sign when you swap any two. That single sign rule *is* the Pauli exclusion principle, it forces electrons of the same spin to avoid each other for free (the **exchange** interaction), and it hands us the one object every ab-initio method starts from — the **Slater determinant**. Get this lesson and Hartree–Fock (2.2) becomes bookkeeping; miss it and the rest of the course is spells you can't read.

## The idea

Two electrons are not just similar — they are *genuinely indistinguishable*. There is no experiment, even in principle, that tells you "this is electron 1 and that is electron 2." Nature is stricter than that: it insists your wavefunction can't even secretly encode which is which. Any measurable thing — the probability density $|\Psi|^2$ — must be unchanged when you relabel the two particles.

That leaves two ways the wavefunction itself can behave under a swap: it can stay the same (symmetric, $+$) or flip sign (antisymmetric, $-$). Both square to the same density, so both respect indistinguishability. Particles come in exactly these two types, and it's an experimental fact of the universe which type is which: photons and other **bosons** take $+$; electrons, protons, and every **fermion** take $-$. Electrons are fermions, so

$$\Psi(\text{electron A}, \text{electron B}) = -\,\Psi(\text{electron B}, \text{electron A}).$$

Now push on that minus sign. Try to put two electrons into *exactly* the same state — same orbital, same spin. Swapping them changes nothing (they're in identical states), so $\Psi = +\Psi$; but antisymmetry says $\Psi = -\Psi$. The only number equal to its own negative is zero, so $\Psi = 0$: that configuration **cannot exist**. You just derived the Pauli exclusion principle from a sign, not from any force. Everything else in this lesson is machinery for building wavefunctions that obey that sign automatically.

## The formal version

**Spin-orbitals.** An electron needs a spatial address *and* a spin. Package them: a **spin-orbital** is

$$\chi(\mathbf x) = \phi(\mathbf r)\,\sigma, \qquad \sigma \in \{\alpha, \beta\},$$

where $\phi(\mathbf r)$ is a spatial orbital (a molecular orbital from [1.6](01-06-h2-plus-lcao.md), or an atomic one from [1.2](01-02-hydrogen-atom-revisited.md)), $\alpha$ and $\beta$ are the spin-up and spin-down states, and $\mathbf x = (\mathbf r, \omega)$ bundles the space coordinate $\mathbf r$ with the spin coordinate $\omega$. *In words: a spin-orbital is "which cloud, and which way is the spin pointing."* One spatial orbital yields two spin-orbitals ($\phi\alpha$ and $\phi\beta$) — the origin of "two electrons per orbital."

**The antisymmetry postulate.** For $N$ electrons with combined coordinates $\mathbf x_1,\dots,\mathbf x_N$, the exact wavefunction must obey, for every pair $i,j$,

$$\Psi(\dots,\mathbf x_i,\dots,\mathbf x_j,\dots) = -\,\Psi(\dots,\mathbf x_j,\dots,\mathbf x_i,\dots).$$

*In words: exchange any two electrons and the whole wavefunction flips sign.* Setting $\mathbf x_i = \mathbf x_j$ forces $\Psi = -\Psi = 0$: **no two electrons share the same spin-orbital** (Pauli).

**The Slater determinant.** How do you build such an object out of ordinary orbitals? Borrow the one algebraic gadget that already flips sign when you swap two rows and vanishes when two are equal — the **determinant**. Given $N$ spin-orbitals $\chi_1,\dots,\chi_N$,

$$\Psi(\mathbf x_1,\dots,\mathbf x_N) = \frac{1}{\sqrt{N!}}\,
\begin{vmatrix}
\chi_1(\mathbf x_1) & \chi_2(\mathbf x_1) & \cdots & \chi_N(\mathbf x_1)\\
\chi_1(\mathbf x_2) & \chi_2(\mathbf x_2) & \cdots & \chi_N(\mathbf x_2)\\
\vdots & \vdots & \ddots & \vdots\\
\chi_1(\mathbf x_N) & \chi_2(\mathbf x_N) & \cdots & \chi_N(\mathbf x_N)
\end{vmatrix}.$$

Read the structure: **each row is one electron** (row $j$ carries coordinate $\mathbf x_j$ throughout), **each column is one spin-orbital**. The $1/\sqrt{N!}$ normalizes it. Now the determinant's own algebra does all the physics:

- **Swap two electrons** $\Rightarrow$ swap two **rows** $\Rightarrow$ determinant flips sign. Antisymmetry, guaranteed.
- **Two electrons in the same spin-orbital** $\Rightarrow$ two identical **columns** $\Rightarrow$ determinant $= 0$. Pauli, guaranteed.

*In words: pour any set of spin-orbitals into a determinant and antisymmetry comes out for free — you never have to enforce it by hand.* This one-determinant form is the **Hartree–Fock ansatz** (2.2): the best single Slater determinant you can build.

**The two-electron case, explicit.** Helium's ground state uses the $1s$ orbital twice, once with each spin: $\chi_1 = \psi_{1s}\alpha$, $\chi_2 = \psi_{1s}\beta$. Then

$$\Psi(\mathbf x_1,\mathbf x_2) = \frac{1}{\sqrt2}
\begin{vmatrix}\chi_1(\mathbf x_1) & \chi_2(\mathbf x_1)\\ \chi_1(\mathbf x_2) & \chi_2(\mathbf x_2)\end{vmatrix}
= \frac{1}{\sqrt2}\big[\chi_1(\mathbf x_1)\chi_2(\mathbf x_2) - \chi_2(\mathbf x_1)\chi_1(\mathbf x_2)\big].$$

Substituting the spin-orbitals and factoring, the spatial and spin parts separate:

$$\Psi = \underbrace{\psi_{1s}(\mathbf r_1)\psi_{1s}(\mathbf r_2)}_{\text{symmetric in space}}\;\times\;\underbrace{\tfrac{1}{\sqrt2}\big[\alpha(1)\beta(2) - \beta(1)\alpha(2)\big]}_{\text{antisymmetric spin singlet}}.$$

Symmetric space $\times$ antisymmetric spin $=$ antisymmetric overall. Two electrons *can* share the $1s$ spatial cloud precisely because their spins are opposite — that is what "$1s^2$" means.

**Exchange and the Fermi hole.** Now the payoff. Look at two electrons with the *same* spin (say both $\alpha$) in different spatial orbitals $\phi_a,\phi_b$. Antisymmetry forces the spatial part to be antisymmetric: $\tfrac{1}{\sqrt2}[\phi_a(\mathbf r_1)\phi_b(\mathbf r_2) - \phi_b(\mathbf r_1)\phi_a(\mathbf r_2)]$. Set $\mathbf r_1 = \mathbf r_2$ and it collapses to zero — **the probability of finding two same-spin electrons at the same point is exactly zero**, and by continuity it stays small nearby. Each electron carves out a region of depleted same-spin density around itself, the **Fermi hole**. No Coulomb repulsion was invoked; this avoidance is *pure antisymmetry*. The energy lowering it produces is the **exchange energy**, and Hartree–Fock captures it exactly.

The catch — and the whole reason Module 3 exists — is what antisymmetry does **not** do. For *opposite*-spin electrons the spin part already supplies the minus sign, so the spatial part is free to be symmetric and need not vanish at $\mathbf r_1 = \mathbf r_2$. A single determinant therefore lets opposite-spin electrons sit right on top of each other, even though their Coulomb repulsion screams otherwise. That missing avoidance — the **Coulomb hole** — is *electron correlation*, and recovering it is the subject of correlation methods and DFT ([3.1 onward](03-01-correlation-problem.md)).

## Picture

![A 2x2 Slater determinant for helium with rows labeled electrons and columns labeled spin-orbitals, a coral arrow showing a row swap flips the sign, beside a Fermi-hole cartoon: same-spin electrons excluded from a region around a reference electron, with the pair density g going to zero at zero separation.](assets/02-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — expand a 2×2 determinant).** Build the determinant for two electrons in spin-orbitals $\chi_1$ and $\chi_2$ and confirm the sign rule. Cofactor expansion gives

$$\Psi(\mathbf x_1,\mathbf x_2) = \tfrac{1}{\sqrt2}\big[\chi_1(\mathbf x_1)\chi_2(\mathbf x_2) - \chi_1(\mathbf x_2)\chi_2(\mathbf x_1)\big].$$

Swap the electron labels $1\leftrightarrow 2$ everywhere:

$$\Psi(\mathbf x_2,\mathbf x_1) = \tfrac{1}{\sqrt2}\big[\chi_1(\mathbf x_2)\chi_2(\mathbf x_1) - \chi_1(\mathbf x_1)\chi_2(\mathbf x_2)\big] = -\Psi(\mathbf x_1,\mathbf x_2).\ \checkmark$$

Normalization check: with orthonormal spin-orbitals, $\langle\Psi|\Psi\rangle = \tfrac12(1\cdot1 - 0 - 0 + 1\cdot1) = 1$. The cross terms vanish by orthogonality; the $\tfrac12$ from $(1/\sqrt2)^2$ eats the two surviving $1$'s. That is exactly why the prefactor is $1/\sqrt{N!}$.

**Example 2 (why you'd care — same-spin electrons keep their distance).** Put two spin-$\alpha$ electrons into the bonding and antibonding MOs $\phi_+,\phi_-$ from [1.6](01-06-h2-plus-lcao.md). The determinant's spatial factor is

$$\Phi(\mathbf r_1,\mathbf r_2) = \tfrac{1}{\sqrt2}\big[\phi_+(\mathbf r_1)\phi_-(\mathbf r_2) - \phi_+(\mathbf r_2)\phi_-(\mathbf r_1)\big].$$

Evaluate the same-spin pair probability at coincidence, $\mathbf r_1 = \mathbf r_2 = \mathbf r$:

$$\Phi(\mathbf r,\mathbf r) = \tfrac{1}{\sqrt2}\big[\phi_+(\mathbf r)\phi_-(\mathbf r) - \phi_+(\mathbf r)\phi_-(\mathbf r)\big] = 0.$$

The two same-spin electrons have *zero* chance of being found at the same location — the Fermi hole — and this held for any orbitals we chose. That built-in avoidance is why same-spin electrons in an atom feel less mutual repulsion than a naive average would predict, and it's the physical content of "exchange" that stabilizes high-spin configurations (Hund's rule, from general chemistry's [electron configurations](../../general-chemistry/lessons/01-02-electron-configurations-periodic-table.md)).

## Watch out

- **You might think Pauli is a force pushing electrons apart.** It isn't a force at all — it's a *symmetry* of the wavefunction. Same-spin electrons avoid each other even in a fictional world with the Coulomb interaction switched off. The "exchange interaction" is an energy bookkeeping term that arises from antisymmetry, not a fifth fundamental force.
- **You might read the Slater determinant as a product of orbitals.** The leading term $\chi_1(\mathbf x_1)\chi_2(\mathbf x_2)\cdots$ (the "Hartree product") is only *one* term; the determinant adds all $N!$ signed permutations. Drop the other terms and you lose antisymmetry, exchange, and Pauli in one stroke — that Hartree product was the pre-1930 model, and it was wrong.
- **You might think one determinant handles all electron repulsion.** It handles same-spin avoidance (Fermi hole) exactly, but lets opposite-spin electrons overlap freely — the missing Coulomb hole is *correlation*, the error Hartree–Fock leaves on the table and Module 3 spends its time recovering.
- **You might confuse the symmetric and antisymmetric pieces.** For two electrons, overall antisymmetry can be met as (symmetric space)×(antisymmetric spin, the singlet) *or* (antisymmetric space)×(symmetric spin, the triplet). Same-spin electrons are forced into the antisymmetric-space branch — that's the branch with the Fermi hole.

## One-liner

> Electrons are fermions, so their wavefunction flips sign under exchange; the Slater determinant bakes that sign in, making Pauli and the same-spin Fermi hole automatic while leaving opposite-spin correlation for later.

## Problems

**P1 (🟢)** Write the $2\times2$ Slater determinant for a two-electron system in spin-orbitals $\chi_1$ and $\chi_2$ (e.g. helium's $1s\alpha,\,1s\beta$), expand it, and show explicitly that the result is antisymmetric under exchange of the two electrons.

**P2 (🟡)** (a) Show that if both electrons occupy the *same* spin-orbital ($\chi_2 = \chi_1$), the determinant vanishes — the Pauli principle. (b) For distinct spin-orbitals, show directly from the determinant that swapping the two electrons flips the sign.

**P3 (🔴)** Consider two *same-spin* electrons in distinct spatial orbitals $\phi_a,\phi_b$; their spatial wavefunction is the antisymmetric combination $\Phi(\mathbf r_1,\mathbf r_2)=\tfrac{1}{\sqrt2}[\phi_a(\mathbf r_1)\phi_b(\mathbf r_2)-\phi_b(\mathbf r_1)\phi_a(\mathbf r_2)]$. (a) Show the pair probability density $|\Phi|^2$ vanishes when $\mathbf r_1=\mathbf r_2$ — the Fermi hole. (b) Explain why the same argument fails for two *opposite-spin* electrons, and say what that missing effect is called and where it gets fixed.

<details>
<summary>Solutions</summary>

**P1** With rows = electrons, columns = spin-orbitals,

$$\Psi(\mathbf x_1,\mathbf x_2) = \frac{1}{\sqrt2}\begin{vmatrix}\chi_1(\mathbf x_1) & \chi_2(\mathbf x_1)\\ \chi_1(\mathbf x_2) & \chi_2(\mathbf x_2)\end{vmatrix} = \frac{1}{\sqrt2}\big[\chi_1(\mathbf x_1)\chi_2(\mathbf x_2) - \chi_2(\mathbf x_1)\chi_1(\mathbf x_2)\big].$$

Exchange the electron labels $\mathbf x_1 \leftrightarrow \mathbf x_2$:

$$\Psi(\mathbf x_2,\mathbf x_1) = \frac{1}{\sqrt2}\big[\chi_1(\mathbf x_2)\chi_2(\mathbf x_1) - \chi_2(\mathbf x_2)\chi_1(\mathbf x_1)\big] = -\frac{1}{\sqrt2}\big[\chi_1(\mathbf x_1)\chi_2(\mathbf x_2) - \chi_2(\mathbf x_1)\chi_1(\mathbf x_2)\big] = -\Psi(\mathbf x_1,\mathbf x_2).$$

For helium put $\chi_1=\psi_{1s}\alpha$, $\chi_2=\psi_{1s}\beta$: the spatial parts factor to $\psi_{1s}(\mathbf r_1)\psi_{1s}(\mathbf r_2)$ and the spin part becomes $\tfrac{1}{\sqrt2}[\alpha(1)\beta(2)-\beta(1)\alpha(2)]$, the singlet. Antisymmetric overall. $\checkmark$

**P2** (a) Set $\chi_2=\chi_1$. Two columns become identical:

$$\Psi = \frac{1}{\sqrt2}\big[\chi_1(\mathbf x_1)\chi_1(\mathbf x_2) - \chi_1(\mathbf x_1)\chi_1(\mathbf x_2)\big] = 0.$$

A determinant with two equal columns is zero — the state with two electrons in one spin-orbital does not exist. That is the Pauli exclusion principle. (b) Already shown in P1: relabeling $\mathbf x_1\leftrightarrow\mathbf x_2$ swaps the two rows of the determinant, and swapping two rows multiplies any determinant by $-1$, so $\Psi(\mathbf x_2,\mathbf x_1) = -\Psi(\mathbf x_1,\mathbf x_2)$. $\checkmark$

**P3** (a) Evaluate the amplitude at coincidence $\mathbf r_1=\mathbf r_2=\mathbf r$:

$$\Phi(\mathbf r,\mathbf r) = \tfrac{1}{\sqrt2}\big[\phi_a(\mathbf r)\phi_b(\mathbf r) - \phi_b(\mathbf r)\phi_a(\mathbf r)\big] = 0 \quad\Rightarrow\quad |\Phi(\mathbf r,\mathbf r)|^2 = 0.$$

The probability of finding the two same-spin electrons at the same point is exactly zero, and by continuity the density is depleted in a neighborhood around each electron: the Fermi hole. Note this used only antisymmetry of the *spatial* part — no reference to the $1/r_{12}$ Coulomb repulsion.

(b) For opposite spins the overall antisymmetry is already supplied by the spin factor (the singlet $\tfrac{1}{\sqrt2}[\alpha(1)\beta(2)-\beta(1)\alpha(2)]$ is antisymmetric), so the spatial part is allowed to be *symmetric*: $\tfrac{1}{\sqrt2}[\phi_a(\mathbf r_1)\phi_b(\mathbf r_2)+\phi_b(\mathbf r_1)\phi_a(\mathbf r_2)]$. At $\mathbf r_1=\mathbf r_2=\mathbf r$ this gives $\sqrt2\,\phi_a(\mathbf r)\phi_b(\mathbf r)\neq 0$ in general — no hole. So a single determinant lets opposite-spin electrons coincide despite their Coulomb repulsion. The missing mutual avoidance is the **Coulomb hole**, i.e. **electron correlation**, which Hartree–Fock omits and the correlation methods of [Module 3](03-01-correlation-problem.md) recover. $\checkmark$

</details>

## Flashback

**From Lesson 1.6 (H₂⁺ and the LCAO idea):** Two identical hydrogen $1s$ orbitals, $\phi_A$ and $\phi_B$, form the LCAO trial function $\psi = c_A\phi_A + c_B\phi_B$. With Hamiltonian matrix elements $H_{AA}=H_{BB}=\alpha$ (Coulomb integral), $H_{AB}=\beta$ (resonance integral, $\beta<0$), and overlap $\langle\phi_A|\phi_B\rangle = S$, the secular determinant is $\begin{vmatrix}\alpha-E & \beta-ES\\ \beta-ES & \alpha-E\end{vmatrix}=0$. Solve for the two energies and identify which is bonding.

<details>
<summary>Solution</summary>

A $2\times2$ determinant of the form $\begin{vmatrix}p & q\\ q & p\end{vmatrix}=p^2-q^2=(p-q)(p+q)$ with $p=\alpha-E$, $q=\beta-ES$. Setting it to zero:

$$(\alpha-E)^2 = (\beta-ES)^2 \quad\Rightarrow\quad \alpha-E = \pm(\beta-ES).$$

Take each sign:

$$\alpha-E = +(\beta-ES) \;\Rightarrow\; \alpha-\beta = E(1-S) \;\Rightarrow\; E_- = \frac{\alpha-\beta}{1-S},$$
$$\alpha-E = -(\beta-ES) \;\Rightarrow\; \alpha+\beta = E(1+S) \;\Rightarrow\; E_+ = \frac{\alpha+\beta}{1+S}.$$

Since $\beta<0$ and $0<S<1$, $E_+=\dfrac{\alpha+\beta}{1+S}$ lies *below* $\alpha$ — the **bonding** orbital (symmetric combination $c_A=c_B$) — while $E_-=\dfrac{\alpha-\beta}{1-S}$ lies above $\alpha$, the **antibonding** orbital (antisymmetric $c_A=-c_B$). The lower root binds the molecule; the split is asymmetric because the overlap $S$ pushes the antibonding level up more than it pulls the bonding level down. These are exactly the two spatial MOs whose spin-orbitals we just fed into a Slater determinant. $\checkmark$

</details>

## Connections

- **Backward:** the spatial orbitals dropped into each spin-orbital are the atomic orbitals of [1.2](01-02-hydrogen-atom-revisited.md) and the LCAO molecular orbitals of [1.6](01-06-h2-plus-lcao.md) — this lesson only adds spin and the antisymmetry wrapper. The "two electrons per orbital" rule you used in general chemistry's [electron configurations](../../general-chemistry/lessons/01-02-electron-configurations-periodic-table.md) is the $\phi\alpha/\phi\beta$ spin-orbital count made rigorous, and Hund's rule is exchange stabilization of the Fermi hole.
- **Forward:** the single Slater determinant is the Hartree–Fock ansatz of [2.2](02-02-hartree-fock-equations.md); minimizing its energy by the variational principle (the [quantum-mechanics](../../quantum-mechanics/syllabus.md) tool now aimed at many electrons) yields the Fock operator, whose *exchange* term is exactly the Fermi hole made quantitative. What one determinant misses — opposite-spin correlation — launches [Module 3](03-01-correlation-problem.md).
- **Sideways:** antisymmetry of identical fermions is the same postulate that gives metals their Fermi surface and white dwarfs their degeneracy pressure in statistical mechanics — the [stat-mech](../../stat-mech/syllabus.md) Fermi–Dirac distribution is this exclusion rule counted over many states.
