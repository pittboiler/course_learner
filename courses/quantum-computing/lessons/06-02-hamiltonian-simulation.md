# Quantum Computing · Lesson 6.2: Hamiltonian simulation

> ⏱ ~15 min · Module 6: Complexity and the real machine · Builds on: [4.2 (quantum phase estimation)](04-02-quantum-phase-estimation.md), [1.2 (single-qubit gates)](01-02-single-qubit-gates.md), [`quantum-mechanics` 2.2 (time evolution)](../../quantum-mechanics/lessons/02-02-stationary-states-time-evolution.md) · Unlocks: [6.4 (variational algorithms)](06-04-variational-algorithms-vqe-and-qaoa.md), [6.6 (resource estimation)](06-06-resource-estimation-and-the-state-of-the-field.md)

## Why this matters

This is the application Feynman actually proposed in 1982, and it remains the most defensible reason to build a quantum computer.

The argument is short. Simulating a quantum system of $n$ particles classically means tracking $2^n$ amplitudes ([1.4](01-04-two-qubits-tensor-products-and-entanglement.md)), which is hopeless past about 50 particles. But a quantum computer *is* a quantum system: let it evolve under the Hamiltonian you care about, and it simulates that system with $n$ qubits rather than $2^n$ numbers. **The exponential disappears because the hardware has the same structure as the problem.**

Three reasons this lesson matters more than the popular algorithms.

- **It is the speedup with a real application.** Chemistry, materials, and nuclear physics all reduce to finding ground states and dynamics of local Hamiltonians. Unlike factoring, these are problems people pay for today.
- **It is where the hard work is.** The naive method (Trotter) has a bad error scaling and a large gate count. Improving it — Trotter to Taylor series to qubitization — has been one of the field's most productive lines, and the resulting costs are what [6.6](06-06-resource-estimation-and-the-state-of-the-field.md) prices.
- **It has a sharp limit.** Finding a *ground state* is QMA-complete ([6.1](06-01-bqp-and-the-complexity-landscape.md)), so quantum computers do not solve chemistry in general. They simulate *dynamics* efficiently and find ground states only with a good starting guess.

## The idea

The Hamiltonians that describe real matter are **local**: a sum of terms each touching a few particles.

$$H = \sum_{j=1}^{L}H_j,$$

with $L$ growing polynomially in the system size. Each individual term is easy — $e^{-iH_jt}$ acts on a couple of qubits, so it is a small circuit you can write down ([1.2](01-02-single-qubit-gates.md)).

The obstruction is that the terms **do not commute**, so you cannot just multiply the easy pieces:

$$e^{-i(A+B)t} \ne e^{-iAt}e^{-iBt} \quad\text{when } [A,B]\ne0.$$

The repair is to take small time steps. Over a short interval the terms have little time to interfere, so the product formula is nearly right, and the error shrinks as you chop finer:

$$e^{-i(A+B)t} = \left(e^{-iAt/r}e^{-iBt/r}\right)^r + O\!\left(\frac{t^2}{r}\right).$$

This is the **Trotter–Suzuki decomposition**, and it is the whole method: slice time, apply each local term's easy circuit in each slice, and accept an error you can drive down by slicing finer. Symmetrizing the order of terms within a slice — do half of $A$, then $B$, then the other half of $A$ — improves the error to $O(t^3/r^2)$ for the same cost, and higher-order versions continue the pattern.

Once you can simulate $e^{-iHt}$, phase estimation ([4.2](04-02-quantum-phase-estimation.md)) gives you eigenvalues: prepare an approximate eigenstate, phase-estimate $e^{-iHt}$, and read the energy. That is the standard route to a molecule's ground-state energy, and the catch is in the words "approximate eigenstate."

## The formal version

> **The simulation problem.** Given a local Hamiltonian $H = \sum_j H_j$ on $n$ qubits, a time $t$, and an accuracy $\epsilon$, produce a circuit $U$ with $\lVert U - e^{-iHt}\rVert \le \epsilon$.

> **First-order Trotter.** For $H = A+B$,
> $$\left\lVert e^{-i(A+B)t} - \left(e^{-iAt/r}e^{-iBt/r}\right)^r\right\rVert \le \frac{t^2}{2r}\left\lVert[A,B]\right\rVert.$$
> So $r = O(t^2/\epsilon)$ steps suffice, giving a gate count $O(L t^2/\epsilon)$.

In words: the error is controlled by the **commutator** — terms that commute cost nothing, and a Hamiltonian whose pieces nearly commute is nearly free to simulate. This commutator dependence is not a technicality; modern tight analyses exploit it heavily, because real chemistry Hamiltonians have many near-commuting terms.

> **Second-order (Strang) Trotter.**
> $$S_2(t/r) = e^{-iAt/2r}\,e^{-iBt/r}\,e^{-iAt/2r}, \qquad \left\lVert e^{-iHt} - S_2(t/r)^r\right\rVert = O\!\left(\frac{t^3}{r^2}\right),$$
> so $r = O(t^{3/2}/\sqrt\epsilon)$ and the gate count improves to $O(Lt^{3/2}/\sqrt\epsilon)$.

The numbers, for $H = X + Z$ and $t = 1$ (so the error is pure Trotter error, computed exactly); the card keeps the scalings under [simulation and variational costs](../reference.md#simulation-and-variational-costs):

| steps $r$ | first-order error | second-order error |
|---|---|---|
| 1 | $7.99\times10^{-1}$ | $3.14\times10^{-1}$ |
| 4 | $1.76\times10^{-1}$ | $1.73\times10^{-2}$ |
| 16 | $4.37\times10^{-2}$ | $1.07\times10^{-3}$ |
| 64 | $1.09\times10^{-2}$ | — |

Doubling $r$ halves the first-order error and quarters the second-order one, exactly as the exponents predict.

> **Modern methods.** Higher-order Suzuki formulas, Taylor-series truncation with linear combinations of unitaries, and **qubitization** achieve
> $$O\!\left(t\lVert H\rVert + \log(1/\epsilon)\right)$$
> queries to a Hamiltonian oracle — **linear in $t$ and only logarithmic in $1/\epsilon$**, which is optimal in $t$ (you cannot beat linear, by a no-fast-forwarding argument).

In words: precision became nearly free, and time became linear rather than superlinear. That improvement, between roughly 2014 and 2019, cut published chemistry estimates by several orders of magnitude and is the main reason current resource estimates are far friendlier than the first ones.

> **Eigenvalues via phase estimation.** If $\lvert\psi\rangle$ has overlap $\lvert\langle\psi\vert E_0\rangle\rvert^2 = \eta$ with the ground state, then phase estimation on $e^{-iHt}$ returns $E_0$ with probability about $\eta$, at a cost of $O(1/\epsilon)$ applications of the simulation circuit for energy accuracy $\epsilon$.

> **The hard limit.** Estimating the ground-state energy of a general local Hamiltonian to inverse-polynomial accuracy is **QMA-complete**. So no efficient quantum algorithm is expected in general; success requires either structure or an initial state with non-negligible overlap $\eta$.

In words: the quantum computer can *check* a chemical answer efficiently and can *evolve* a system efficiently, but *finding* the ground state is as hard as 3-SAT is classically. Everything practical hinges on the classical chemist's ability to supply a decent starting guess.

## Picture

![Left: a log-log plot of operator-norm error against the number of Trotter steps r, for the Hamiltonian X plus Z at time 1. A blue line with data points falls with slope minus one, labelled first order, error proportional to one over r. A red line falls twice as steeply, labelled second order, error proportional to one over r squared. Right: a text panel headed the problem Feynman actually proposed, noting that H is a sum of L local terms, each of whose exponentials is a small circuit, but that they do not commute so the exponential of the sum is not the product of the exponentials; that Trotter chops t into r slices with error of order t squared over r at first order and t cubed over r squared at second; and that modern methods such as qubitization reach a cost of order t times the norm of H plus the log of one over epsilon, which is optimal in t.](assets/06-02-fig1.svg)

The two slopes on the left are the entire content of Trotter analysis: each order of the product formula buys you one more power of $r$ in the error, at no extra cost per step. Real simulations use fourth or sixth order, or skip product formulas entirely for qubitization.

## Worked examples

**Example 1 — Trotterize a two-term Hamiltonian and check the error.**

Take $H = X + Z$ on one qubit, $t = 1$. Since $[X,Z] = -2iY \ne 0$, the terms do not commute and Trotter error is real.

*First order, $r = 4$.* Apply $e^{-iX/4}e^{-iZ/4}$ four times. Each factor is a rotation: $e^{-iX/4} = R_x(1/2)$ and $e^{-iZ/4} = R_z(1/2)$, both single-qubit gates. The resulting operator differs from $e^{-i(X+Z)}$ by

$$\lVert U_4 - e^{-iH}\rVert = 0.176,$$

which is about $\tfrac{t^2}{2r}\lVert[X,Z]\rVert = \tfrac{1}{8}\times2 = 0.25$ — the bound holds and is tight to within 30 percent.

*Second order, $r = 4$.* Use $S_2 = R_x(1/4)R_z(1/2)R_x(1/4)$ per step. Now

$$\lVert U_4^{(2)} - e^{-iH}\rVert = 0.0173,$$

**ten times better for the same number of exponentials** (three per step instead of two, so 1.5× the gates for 10× the accuracy). Symmetrization is free money, which is why nobody uses first-order Trotter in practice.

*Scaling to a real system.* A molecule's Hamiltonian in a basis of $M$ orbitals has $L = O(M^4)$ terms. For a modest $M = 100$ that is $10^8$ terms, each needing its own exponential per Trotter step. With $r = 10^3$ steps you are at $10^{11}$ gate applications — which is why the constant factors and the term count dominate real estimates far more than the asymptotic order does.

**Example 2 — the ground-state problem, and why chemistry is not solved.**

The standard recipe:

1. **Prepare** a guess $\lvert\psi\rangle$ for the ground state, classically (Hartree–Fock, or a small configuration-interaction expansion).
2. **Simulate** $e^{-iHt}$ by Trotter or qubitization.
3. **Phase-estimate** to read off the energy.

Step 3's success probability is the overlap $\eta = \lvert\langle\psi\vert E_0\rangle\rvert^2$, so the expected number of runs is $1/\eta$.

*Where it breaks.* For weakly correlated molecules the Hartree–Fock state has $\eta$ close to 1 and everything works. For **strongly correlated** systems — transition-metal catalysts, high-temperature superconductors, exactly the cases classical methods fail on — $\eta$ decays exponentially with system size. This is the "orthogonality catastrophe," and it means the quantum algorithm needs exponentially many runs on exactly the problems it was supposed to solve.

*What this does and does not mean.*

| task | quantum status |
|---|---|
| simulate dynamics $e^{-iHt}$ from a known state | **efficient**, provably |
| verify a proposed ground-state energy | **efficient** (that is what QMA-membership means) |
| find a ground state from scratch, general $H$ | QMA-complete: **not expected to be efficient** |
| find a ground state given a good guess ($\eta$ not tiny) | **efficient** |

So the honest claim is: **quantum computers turn "find the ground state" into "find a good enough guess."** That is a genuine and large change — the guess needs only polynomial overlap rather than full accuracy — but it is not a solution to electronic structure, and the cases where guessing is hard are largely the cases where the answer is wanted.

*Resource history, which is the encouraging part.* Estimates for FeMoco, the nitrogenase active site and the field's standard benchmark:

| year | estimate |
|---|---|
| 2017 (Reiher et al.) | hundreds of millions of physical qubits, weeks to months |
| 2021 (tensor hypercontraction and better factorizations) | a few million physical qubits, days |

Roughly three to four orders of magnitude in four years, from better Hamiltonian representations and better simulation algorithms rather than better hardware. **Algorithmic progress has outpaced hardware progress**, and there is no sign that it has stopped — which is the main reason to take chemistry applications seriously despite the numbers still being out of reach.

## Watch out

- You might think simulating a quantum system means "watching it evolve" with no cost. The cost is real and it is in the **product formula error**: every Trotter step is an approximation, and the gate count grows with the simulated time and with the required accuracy. Simulation is efficient in the complexity sense and expensive in the engineering sense.
- You might think a quantum computer solves chemistry. It simulates dynamics efficiently and finds ground states efficiently **only given a good initial guess**. The general ground-state problem is QMA-complete, and the hard instances are the interesting ones.
- You might think higher-order Trotter is always better. Higher orders have larger constant prefactors and more exponentials per step, so there is an optimal order for each $(t,\epsilon)$ — usually fourth or sixth. And for large $t$ or small $\epsilon$, qubitization beats all product formulas.
- You might think the commutator bound is a technical detail. It is the main lever: a Hamiltonian whose terms nearly commute is nearly free to simulate, and tight commutator-aware analyses have reduced published chemistry gate counts by orders of magnitude. Asymptotic notation hides exactly the quantity that matters.

## One-liner

> Local Hamiltonians are sums of easy pieces that refuse to commute, so chop time finely and multiply the pieces — and the quantum computer simulates in $n$ qubits what would take $2^n$ classical numbers.

## Problems

**P1 (🟢)** For $H = X + Z$ and $t = 1$, use the first-order bound $\lVert[A,B]\rVert t^2/2r$ to determine how many Trotter steps are needed for error below $10^{-3}$. (Use $[X,Z] = -2iY$, so $\lVert[X,Z]\rVert = 2$.) Then compute the same for second-order Trotter using the empirical scaling error $\approx 0.27/r^2$ from the table, and compare the two step counts.

**P2 (🟡)** A molecular Hamiltonian in a basis of $M = 50$ orbitals has $L \approx M^4/8$ terms. (a) Compute $L$. (b) Estimate the total gate count for a second-order Trotter simulation to time $t = 100$ with error $10^{-3}$, assuming each term's exponential costs 10 gates and using $r = O(t^{3/2}/\sqrt\epsilon)$ with constant 1. (c) At a fault-tolerant logical gate time of 25 µs, how long does the simulation run, and what does that tell you about which factor in the estimate to attack first?

**P3 (🔴, optional)** Analyse the ground-state overlap problem. (a) Explain why phase estimation applied to a state $\lvert\psi\rangle = \sum_k c_k\lvert E_k\rangle$ returns $E_0$ with probability $\lvert c_0\rvert^2$, and why that means the expected number of runs is $1/\eta$ with $\eta = \lvert c_0\rvert^2$. (b) Suppose $\eta$ decays as $e^{-\lambda n}$ for a strongly correlated system of $n$ electrons, with $\lambda = 0.05$. Compute the number of runs needed at $n = 50$, $n = 100$, and $n = 200$. (c) Explain why this does not make the algorithm useless, naming two ways practitioners work around it, and state what the QMA-completeness result does and does not forbid.

<details>
<summary>Solutions</summary>

**P1** *First order.* The bound is

$$\frac{t^2}{2r}\lVert[A,B]\rVert = \frac{1}{2r}\times2 = \frac1r.$$

Setting $1/r < 10^{-3}$ gives

$$r > 1{,}000.$$

(The empirical error from the table is about $0.7/r$, so the bound is conservative by roughly 30 percent; $r = 700$ would do in practice.)

*Second order.* Using the fitted $0.27/r^2$:

$$\frac{0.27}{r^2} < 10^{-3} \implies r^2 > 270 \implies r > 16.4, \text{ so } r = 17.$$

*Comparison.* About **1,000 steps versus 17** — a factor of 60. Each second-order step costs three exponentials instead of two, so the gate ratio is $1000\times2$ versus $17\times3$, i.e. $2000$ versus $51$: a **forty-fold saving in gates.** And the gap widens as $\epsilon$ shrinks, since first order scales as $1/\epsilon$ and second order as $1/\sqrt\epsilon$. This is why first-order Trotter appears only in textbooks.

**P2**

(a) $L \approx 50^4/8 = 6.25\times10^6/8 = 781{,}250$, so about $7.8\times10^5$ terms.

(b) Steps: $r \approx t^{3/2}/\sqrt\epsilon = 100^{1.5}/\sqrt{10^{-3}} = 1000/0.0316 = 3.16\times10^4$.

Each step applies all $L$ terms once (twice for the symmetric form, but absorb that into the constant), at 10 gates each:

$$\text{gates} \approx r\times L\times 10 = 3.16\times10^4\times7.8\times10^5\times10 \approx 2.5\times10^{11}.$$

(c) At 25 µs per logical gate, run sequentially:

$$2.5\times10^{11}\times2.5\times10^{-5}\ \text{s} = 6.2\times10^{6}\ \text{s} \approx 72\ \text{days}.$$

*What to attack first.* Look at which factor is largest and most compressible:

| factor | value | compressible? |
|---|---|---|
| term count $L$ | $7.8\times10^5$ | **yes** — better Hamiltonian factorizations (tensor hypercontraction) cut this by orders of magnitude |
| Trotter steps $r$ | $3.2\times10^4$ | **yes** — qubitization removes the $t^{3/2}/\sqrt\epsilon$ scaling entirely, giving $O(t\lVert H\rVert + \log1/\epsilon)$ |
| gates per term | 10 | barely |
| gate time | 25 µs | somewhat, with faster hardware and better code cycles |

The two big levers are **algorithmic**, not hardware: shrink $L$ by representing the Hamiltonian better, and shrink $r$ by abandoning product formulas. That is precisely the history recounted in Example 2 — three to four orders of magnitude from exactly these two moves, while gate times barely changed.

**P3**

(a) Phase estimation applied to $e^{-iHt}$ with input $\lvert\psi\rangle = \sum_k c_k\lvert E_k\rangle$ acts linearly: each eigenstate component produces its own phase in the ancilla register, so the joint state before the ancilla measurement is

$$\sum_k c_k \lvert \widetilde{E_k}\rangle_{\text{anc}}\lvert E_k\rangle,$$

where $\lvert\widetilde{E_k}\rangle$ is the (nearly sharp) ancilla state encoding $E_k$. Measuring the ancilla returns the estimate of $E_k$ with probability $\lvert c_k\rvert^2$ and collapses the system onto $\lvert E_k\rangle$ ([4.2](04-02-quantum-phase-estimation.md)).

So the ground energy $E_0$ appears with probability $\eta = \lvert c_0\rvert^2$, and the number of runs until it appears is geometric with mean $1/\eta$. (Bonus: once it appears, the system register *is* the ground state, which is often more valuable than the energy.)

(b) With $\eta = e^{-0.05n}$:

| $n$ | $\eta$ | runs $= 1/\eta$ |
|---|---|---|
| 50 | $e^{-2.5} = 0.082$ | 12 |
| 100 | $e^{-5} = 6.7\times10^{-3}$ | 148 |
| 200 | $e^{-10} = 4.5\times10^{-5}$ | 22,000 |

At 50 electrons it is a nuisance; at 200 it multiplies an already-72-day computation by $2\times10^4$, which ends it.

(c) *Why it is not useless.*

The exponential is in the overlap, not in the algorithm, and the overlap is something you can work on. Two standard workarounds:

1. **Better initial states.** Run a cheap classical method — coupled cluster, DMRG, a selected configuration-interaction expansion — to build a multi-determinant guess with far larger overlap than Hartree–Fock. Since only *polynomial* overlap is needed, not accuracy, this is a much weaker demand than solving the problem classically, and it is where a great deal of current effort goes.
2. **Adiabatic or filtering state preparation.** Start from the ground state of an easy Hamiltonian and evolve slowly to the hard one ([`quantum-mechanics`](../../quantum-mechanics/syllabus.md)'s adiabatic theorem), or apply spectral filters that project out excited components. Both cost circuit depth rather than repetitions, trading a resource you may have for one you do not.

*What QMA-completeness forbids.* It forbids an **efficient algorithm that works for every local Hamiltonian**, in the same way NP-completeness forbids an efficient general 3-SAT algorithm (assuming the standard conjectures). Any claim of a general polynomial-time quantum ground-state algorithm is equivalent to $\mathrm{QMA}\subseteq\mathrm{BQP}$ and should be disbelieved on sight.

*What it does not forbid.* Efficient solutions for **structured instances** — which is all anyone ever needed. Classical SAT solvers handle industrial instances with millions of variables despite NP-completeness, because real instances are not worst-case. The same hope applies here, and the open question is empirical rather than complexity-theoretic: **do the molecules chemists care about admit good enough initial guesses?** Nobody knows, and finding out is arguably the most important open question about quantum computing's usefulness.

</details>

## Connections

- **Backward:** $e^{-iHt}$ is the time-evolution operator of [`quantum-mechanics` 2.2](../../quantum-mechanics/lessons/02-02-stationary-states-time-evolution.md), and each $e^{-iH_jt}$ is a rotation gate from [1.2](01-02-single-qubit-gates.md). Reading eigenvalues out is [4.2](04-02-quantum-phase-estimation.md); the exponential classical cost that motivates the whole thing is the parameter count of [1.1](01-01-the-qubit-and-the-bloch-sphere.md) P3.
- **Forward:** [6.4](06-04-variational-algorithms-vqe-and-qaoa.md) is what people run on NISQ hardware *instead* of this, precisely because phase estimation needs depth nobody has. [6.6](06-06-resource-estimation-and-the-state-of-the-field.md) turns Example 2's gate counts into physical qubit counts and wall-clock times.
- **Sideways:** the Trotter decomposition is the operator-splitting method used for classical PDE solvers ([`numerical-analysis` 5.4](../../numerical-analysis/lessons/05-04-heat-equation-explicit-implicit.md) discusses the same accuracy-versus-step-size trade), and the commutator bound is the Baker–Campbell–Hausdorff expansion. The systems being simulated are the lattice models of [`condensed-matter` 5.3](../../condensed-matter/lessons/05-03-heisenberg-ising.md) and the molecular Hamiltonians of [`quantum-chemistry`](../../quantum-chemistry/syllabus.md).
