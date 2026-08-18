# Nuclear & Particle Physics · Lesson 1.5: The shell model & magic numbers

> ⏱ ~15 min · Module 1: Nuclear structure & models · Builds on: [1.4 Stability & the valley](01-04-stability-valley.md), [`quantum-mechanics` syllabus](../../quantum-mechanics/syllabus.md) · Unlocks: [2.1 The decay law & chains](02-01-decay-law-chains.md)

## Why this matters

The liquid drop of [1.3](01-03-semi-empirical-mass-formula.md) treats the nucleus as a structureless blob of nuclear fluid, and it nails the *bulk* energetics — binding energy to a percent or two. But it is blind to a stubborn pattern in the data: nuclei with **2, 8, 20, 28, 50, 82,** or **126** protons *or* neutrons are anomalously stable. They bind more tightly than the SEMF predicts, hold their last nucleon more firmly, and come in more stable isotopes. ${}^{4}_{2}\mathrm{He}$, ${}^{16}_{8}\mathrm{O}$, ${}^{40}_{20}\mathrm{Ca}$, ${}^{208}_{82}\mathrm{Pb}$ — the **doubly-magic** nuclei, magic in both $Z$ and $N$ — are the most tightly bound of their neighborhoods. A structureless drop has no reason to prefer those numbers. Something inside has *structure*. That something is the same physics you learned solving atoms: quantum shells.

## The idea

Chemistry has magic numbers too — 2, 10, 18, 36 electrons — the noble gases, inert because they close an electron shell. Nuclei behave the same way, and for the same reason: **fermions in a central potential fill discrete energy shells, and a closed shell is extra stable.**

The trick is deciding what potential the nucleons move in. In an atom the electrons orbit a fixed external charge (the nucleus). A nucleus has no external center — it holds *itself* together. The **shell model**'s bold move: pretend each nucleon moves *independently* in the average, smeared-out **mean field** created by all the others. That average potential is a smooth well, roughly the shape of the nucleus itself. Solving the quantum problem of one particle in that well gives a ladder of energy levels — exactly the kind of eigenvalue problem you did for the [3D central potential and the hydrogen atom](../../quantum-mechanics/lessons/04-04-hydrogen-atom.md). Then you pour nucleons in from the bottom, obeying Pauli — **protons and neutrons in separate ladders**, since they are distinct particles. Whenever there is a big energy gap above a filled level, that filling number is *magic*.

There is one twist that the atomic case does not need, and it is the whole reason the model works. A plain well gets you 2, 8, 20 — and then fails. The higher magic numbers only appear once you add a strong **spin–orbit coupling**: the nucleon's energy depends on whether its spin lines up with its orbital motion. That single ingredient reshuffles the ladder so the gaps land exactly at 28, 50, 82, 126.

## The formal version

**The mean-field well.** Model the potential seen by one nucleon as a smooth central well $V(r)$ — historically a 3D harmonic oscillator, more realistically a **Woods–Saxon** well $V(r) = -V_0 / [1 + e^{(r-R)/a}]$ (flat inside, rounded edge at the nuclear radius $R = r_0 A^{1/3}$ from [1.1](01-01-anatomy-of-the-nucleus.md)). *In words: a bowl that is deep and flat in the nuclear interior and climbs to zero over the skin thickness $a$.* Because it is central, each single-particle state carries the usual quantum numbers from [angular-momentum theory](../../quantum-mechanics/lessons/04-02-angular-momentum-algebra.md): a radial node count $n$, orbital angular momentum $l$ (labeled $s, p, d, f, g, \dots$ for $l = 0,1,2,3,4,\dots$), and its projections. Each $(n, l)$ level holds $2(2l+1)$ nucleons — the factor $2l+1$ for the $m_l$ orientations, times $2$ for spin.

A pure oscillator or Woods–Saxon well fills in this order and closes shells at:

$$2,\ 8,\ 20,\ 40,\ 70,\ \dots$$

*In words: it reproduces the first three magic numbers and then goes wrong* — nature says 28, 50, 82, not 40, 70.

**The spin–orbit fix (Mayer & Jensen, 1949).** Add a term coupling each nucleon's spin $\mathbf{s}$ to its orbital angular momentum $\mathbf{l}$:

$$V_{\text{s.o.}}(r)\,\mathbf{l}\cdot\mathbf{s}, \qquad \text{with } V_{\text{s.o.}} < 0.$$

The total angular momentum $\mathbf{j} = \mathbf{l} + \mathbf{s}$ takes the two values $j = l \pm \tfrac12$ (the [addition of angular momenta](../../quantum-mechanics/lessons/04-06-addition-angular-momenta.md)), and

$$\mathbf{l}\cdot\mathbf{s} = \tfrac12\big[\,j(j+1) - l(l+1) - s(s+1)\,\big] = \begin{cases} +\tfrac{l}{2}, & j = l+\tfrac12,\\[4pt] -\tfrac{l+1}{2}, & j = l-\tfrac12. \end{cases}$$

*In words: each orbital level splits in two by whether spin aligns with orbit.* Since $V_{\text{s.o.}} < 0$, the **aligned** state $j = l+\tfrac12$ is pushed **down** in energy. The gap between the two partners is proportional to $2l+1$, so it grows with $l$: for high-$l$ levels the split is enormous. That is the key. A high-$l$ aligned level like $1f_{7/2}$ ($l=3$) drops so far it detaches from its oscillator shell and sits alone above the $Z\text{ or }N=20$ closure, creating a fresh gap at **28**. The same mechanism drops $1g_{9/2}$ to close **50**, $1h_{11/2}$ to close **82**, and $1i_{13/2}$ to close **126**. With spin–orbit, the fillings become

$$\boxed{\;2,\ 8,\ 20,\ 28,\ 50,\ 82,\ 126\;}$$

— the observed magic numbers. Each level is now written $n\,l_j$ and holds $2j+1$ nucleons.

**Ground-state spin-parity $j^\pi$.** The payoff is a prediction you can check against a table.

- **Even-even nuclei:** every proton pairs with a proton and every neutron with a neutron into time-reversed $(m, -m)$ partners whose angular momenta cancel. So the ground state is **always** $0^+$. (This is the pairing term of the SEMF, [1.3](01-03-semi-empirical-mass-formula.md), wearing its quantum-mechanical face.)
- **Odd-$A$ nuclei:** all nucleons pair off except one. That single unpaired nucleon, sitting in the last occupied level $n\,l_j$, sets the whole nucleus's angular momentum and parity:

$$j = j_{\text{last level}}, \qquad \pi = (-1)^{\,l}.$$

*In words: find the one leftover nucleon, read off its $j$, and get the parity from the sign $(-1)^l$ of its orbital.* Parity is $+$ for $s,d,g$ ($l$ even) and $-$ for $p,f,h$ ($l$ odd).

The two models are partners, not rivals: use the **liquid drop** for bulk binding and masses, the **shell model** for structure — spins, parities, magic-number stability, and the excited levels the drop cannot see.

## Picture

![Shell-model energy ladder: single-particle levels labeled 1s1/2 up to 1g9/2 with their occupancies and cumulative filling, coral gap markers at the magic numbers 2, 8, 20, 28, 50, plus an inset showing the 1f level splitting into 1f7/2 (lowered) and 1f5/2 by spin-orbit coupling](assets/01-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — read the ladder).** Predict $j^\pi$ for ${}^{17}_{8}\mathrm{O}$ (8 protons, 9 neutrons).

The 8 protons are a *magic* closed shell — they pair to $0^+$ and contribute nothing. The neutrons: fill $1s_{1/2}$ (2), $1p_{3/2}$ (4) → 6, $1p_{1/2}$ (2) → 8. That accounts for eight; the **ninth** neutron is the odd one, and it goes into the next level up, $1d_{5/2}$. So $j = \tfrac52$ and, with $l = 2$ (a $d$ level), $\pi = (-1)^2 = +$. Prediction:

$$j^\pi\big({}^{17}\mathrm{O}\big) = \tfrac52^{+}.$$

The measured ground state of ${}^{17}\mathrm{O}$ is indeed $\tfrac52^{+}$. One leftover nucleon, one right answer.

**Example 2 (why the spin–orbit term earns its keep).** Predict $j^\pi$ for ${}^{41}_{20}\mathrm{Ca}$ (20 protons, 21 neutrons).

Protons: magic 20, closed, $0^+$. Neutrons: 20 fill everything through the $1d_{3/2}$ level that closes the shell at 20. The **21st** neutron goes into the *next* level. Without spin–orbit, the next oscillator level would be a mix heading toward the $40$ closure and the assignment would be ambiguous. *With* spin–orbit, the aligned $1f_{7/2}$ has been dragged down to sit by itself right above 20 — it is unmistakably the next level. So the odd neutron lands in $1f_{7/2}$: $j = \tfrac72$, $l = 3$ (an $f$ level, odd), $\pi = (-1)^3 = -$. Prediction:

$$j^\pi\big({}^{41}\mathrm{Ca}\big) = \tfrac72^{-},$$

exactly as observed. The high spin $\tfrac72$ *and* the isolation of the level are both direct fingerprints of the spin–orbit coupling — a plain well would have predicted neither.

## Watch out

- **You might fill one combined ladder.** Protons and neutrons obey Pauli *separately* — they are different particles, so each gets its own copy of the ladder. Count them independently; "magic" applies to $Z$ and to $N$ on their own, and being magic in *both* (doubly-magic) is what makes ${}^{16}\mathrm{O}$ or ${}^{208}\mathrm{Pb}$ special.
- **You might think a plain quantum well already gives the magic numbers.** It gives only 2, 8, 20. The upper magic numbers 28, 50, 82, 126 do **not** exist without the strong spin–orbit term — that is the historical crux, and it is why the atomic magic numbers (2, 10, 18, …) are *different* from the nuclear ones despite the identical shell logic.
- **You might apply the odd-nucleon rule to even-even nuclei.** There is no odd nucleon there — everything pairs, so the answer is flatly $0^+$, no ladder-reading needed. The $j^\pi$ prediction game is for **odd-$A$** nuclei. (Odd-odd nuclei have one unpaired proton *and* one unpaired neutron whose $j$'s must be combined — genuinely harder, and beyond this lesson.)

## One-liner

> Treat each nucleon as one particle in the mean-field well; add spin–orbit coupling to drop the $j=l+\tfrac12$ levels, and the shell gaps land at 2, 8, 20, 28, 50, 82, 126 — the odd nucleon in the top level then hands you the ground-state $j^\pi$.

## Problems

**P1 (🟢)** Predict the ground-state spin-parity $j^\pi$ of ${}^{13}_{6}\mathrm{C}$ (6 protons, 7 neutrons) using the filling order $1s_{1/2},\,1p_{3/2},\,1p_{1/2},\,1d_{5/2},\dots$.

**P2 (🟡)** ${}^{16}_{8}\mathrm{O}$ is doubly-magic. (a) In one or two sentences, say *why* that makes it anomalously tightly bound compared with what the liquid-drop SEMF alone would estimate. (b) Starting from ${}^{16}\mathrm{O}$, how many neutrons must you add to reach the *next* neutron magic number, and what isotope results?

**P3 (🔴, optional)** ${}^{207}_{82}\mathrm{Pb}$ has 82 protons (magic) and 125 neutrons — one short of the magic 126. The neutron levels between 82 and 126 fill in the order $2f_{7/2},\,1h_{9/2},\,1i_{13/2},\,3p_{3/2},\,2f_{5/2},\,3p_{1/2}$, closing the shell at 126 when $3p_{1/2}$ is full. Predict $j^\pi$ for ${}^{207}\mathrm{Pb}$. (Hint: 125 neutrons means one *hole* in the top level — a single hole determines $j^\pi$ just as a single particle does.)

<details>
<summary>Solutions</summary>

**P1** The 6 protons pair off and contribute nothing to $j^\pi$. Fill the 7 neutrons: $1s_{1/2}$ (2), $1p_{3/2}$ (4) → 6, then the **7th** neutron is alone in $1p_{1/2}$. So $j = \tfrac12$ and $l = 1$ (a $p$ level), giving $\pi = (-1)^1 = -$. Prediction $j^\pi = \tfrac12^{-}$.

*Check.* $l=1$ can support $j = l\pm\tfrac12 = \tfrac32$ or $\tfrac12$; the $1p_{1/2}$ partner is the *upper* (spin–orbit-raised) one, consistent with $1p_{3/2}$ filling first. The measured ${}^{13}\mathrm{C}$ ground state is indeed $\tfrac12^{-}$. ✓

**P2** (a) A closed shell in *both* $Z$ and $N$ sits below a large energy gap in each ladder, so both the last proton and the last neutron are bound unusually tightly (high separation energies) and there are no low-lying single-particle excitations to soften the binding. The liquid drop, being a structureless fluid, has no gaps and so systematically *under*-binds these special configurations — the shell closure is extra glue the SEMF cannot know about. (b) ${}^{16}\mathrm{O}$ has $N = 8$; the next neutron magic number is $20$, so you add $20 - 8 = 12$ neutrons, giving $N=20$, $Z=8$ → ${}^{28}_{8}\mathrm{O}$.

*Check.* $A = Z + N = 8 + 20 = 28$ ✓. (Aside worth knowing: real ${}^{28}\mathrm{O}$ is so neutron-rich it lies past the neutron drip line and is unbound — a reminder that magic-number *stability is relative to neighbors*, not an absolute guarantee against the asymmetry penalty of [1.4](01-04-stability-valley.md).)

**P3** With 125 neutrons, the top level is one nucleon short of full — a single **hole**. Filling to 126 requires $3p_{1/2}$ to be full (it holds $2j+1 = 2$), so the last, incompletely filled level is $3p_{1/2}$, and the hole lives there. A single hole carries the same $j$ and parity as a single particle in that level: $j = \tfrac12$, $l = 1$ ($p$, odd), $\pi = (-1)^1 = -$. Prediction $j^\pi = \tfrac12^{-}$.

*Check.* Count the levels from 82: $2f_{7/2}(8)\to90$, $1h_{9/2}(10)\to100$, $1i_{13/2}(14)\to114$, $3p_{3/2}(4)\to118$, $2f_{5/2}(6)\to124$, $3p_{1/2}(2)\to126$. So neutron 125 is the first of the two $3p_{1/2}$ slots and neutron 126 is the missing one — the hole is unambiguously in $3p_{1/2}$. The observed ${}^{207}\mathrm{Pb}$ ground state is $\tfrac12^{-}$. ✓ (Contrast ${}^{209}\mathrm{Pb}$, one neutron *above* 126, whose odd neutron sits in $2g_{9/2}$ → $\tfrac92^{+}$: particles and holes probe opposite sides of the same gap.)

</details>

## Flashback

**From Lesson 1.4 (Stability & the valley):** At fixed mass number $A = 22$, the isobaric mass parabola is minimized near $Z = 10$ (${}^{22}\mathrm{Ne}$, stable). The nuclide ${}^{22}_{11}\mathrm{Na}$ sits one step up the *proton-rich* wall of that parabola. Which decay mode(s) carry it toward the valley floor, and does $Z$ increase or decrease? (Fresh variant — a different isobar than any worked before.)

<details>
<summary>Solution</summary>

Proton-rich means too many protons for stability, so the nucleus must convert a proton into a neutron. The two routes that do this are **positron emission** ($\beta^+$: $p \to n + e^+ + \nu_e$) and **electron capture** (EC: $p + e^- \to n + \nu_e$). Both lower the proton number by one, so $Z$ *decreases* from 11 to 10, moving ${}^{22}\mathrm{Na} \to {}^{22}\mathrm{Ne}$ — straight to the parabola's minimum.

*Check.* The move is along a fixed-$A$ isobar (mass number conserved: 22 → 22) toward lower mass, i.e. toward higher binding, exactly the "roll downhill to the valley" picture of 1.4. ${}^{22}\mathrm{Na}$ is a real $\beta^+$/EC emitter with a $\sim$2.6-year half-life. ✓

</details>

## Connections

- **Backward:** the odd-nucleon $j^\pi$ rule *is* the quantum face of the SEMF pairing term ([1.3](01-03-semi-empirical-mass-formula.md), even-even → $0^+$), and magic-number stability is the structure the smooth liquid-drop mass surface of [1.4](01-04-stability-valley.md) could not resolve — the two models divide the labor.
- **Forward:** closed shells and the levels just above them set which nuclear states exist and how long they live — the excited-state ladder feeds gamma decay and selection rules ([2.4 Gamma decay](02-04-gamma-decay.md)), and shell gaps shape which nuclides are around to begin the decay chains of [2.1](02-01-decay-law-chains.md).
- **Sideways (quantum mechanics):** this is one particle in a [3D central potential](../../quantum-mechanics/lessons/04-04-hydrogen-atom.md) with [Pauli filling of identical fermions](../../quantum-mechanics/lessons/05-01-identical-particles.md); the $j = l \pm \tfrac12$ splitting is precisely the [addition of orbital and spin angular momentum](../../quantum-mechanics/lessons/04-06-addition-angular-momenta.md), and the same spin–orbit interaction produces the fine structure of the hydrogen atom — only here it is strong enough to rewrite the shell ordering.
