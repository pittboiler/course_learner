# Quantum Computing · Lesson 6.4: Variational algorithms: VQE and QAOA

> ⏱ ~15 min · Module 6: Complexity and the real machine · Builds on: [6.2 (Hamiltonian simulation)](06-02-hamiltonian-simulation.md), [1.3 (measurement and the Born rule)](01-03-measurement-and-the-born-rule.md), [5.1 (quantum channels)](05-01-quantum-channels-and-decoherence.md) · Unlocks: [6.6 (resource estimation)](06-06-resource-estimation-and-the-state-of-the-field.md)

## Why this matters

Every algorithm in Modules 3 through 5 needs a fault-tolerant machine. Nobody has one. So what runs on the devices that exist?

Variational algorithms are the answer the field gave: a **hybrid loop** in which a shallow quantum circuit prepares a parameterized state, the quantum computer measures an energy, and a classical optimizer adjusts the parameters. The circuit is shallow enough to survive a few hundred gates of decoherence ([5.1](05-01-quantum-channels-and-decoherence.md)), and the classical computer does the hard part.

This is the dominant paradigm in practice, with thousands of papers and every major hardware vendor's demonstrations built on it. It is also, on current evidence, unlikely to deliver a useful advantage — for two specific, quantifiable reasons that this lesson develops:

- **Shot cost.** The output is an expectation value, and expectation values cost $1/\epsilon^2$ samples ([1.3](01-03-measurement-and-the-born-rule.md)). Chemical accuracy on a real molecule needs $10^9$ to $10^{13}$ circuit executions.
- **Barren plateaus.** For a generic deep-enough ansatz, the gradient's variance decays exponentially in the qubit count, so the optimization landscape is flat and there is nothing for the optimizer to follow.

Knowing both numbers is what separates an informed view of NISQ from the press-release version, and both are arithmetic you can do.

## The idea

The variational principle is old and classical: for any state $\lvert\psi\rangle$,

$$\langle\psi\vert H\vert\psi\rangle \ge E_0,$$

with equality only at the ground state. So minimizing the energy over a family of trial states approaches the ground state from above, and you never overshoot.

The quantum version: let the trial states be whatever a parameterized circuit can prepare, $\lvert\psi(\vec\theta)\rangle = U(\vec\theta)\lvert0\rangle$. Then

1. The **quantum computer** prepares $\lvert\psi(\vec\theta)\rangle$ and measures $\langle H\rangle$ by sampling.
2. The **classical computer** takes that number and proposes a better $\vec\theta$.
3. Repeat.

The appeal is that step 1 is a shallow circuit — no phase estimation, no $10^9$-gate depth — so it runs on today's hardware. And the quantum computer is doing something a classical one cannot: representing a state with more entanglement than a classical ansatz can carry.

**QAOA** is the same loop applied to combinatorial optimization. Encode a problem like MaxCut as a Hamiltonian whose ground state is the optimal solution, then alternate two simple evolutions — one by the problem Hamiltonian, one by a "mixing" Hamiltonian — with $p$ layers and $2p$ parameters. As $p\to\infty$ it becomes adiabatic evolution and finds the optimum; at small $p$ it is a heuristic.

The trouble arrives in the details, and there are exactly two.

**Measurement is expensive.** A molecular Hamiltonian is a sum of $M$ Pauli terms, each requiring its own measurement circuit, and each expectation value converges as $1/\sqrt N$. Chemical accuracy is 1.6 millihartree. Multiply it out and the shot counts are staggering.

**The landscape may be flat.** If you choose the ansatz by generic principles — "deep enough to be expressive" — then for large $n$ the gradient of the cost function has variance $\sim2^{-n}$. The landscape is a featureless plain with an exponentially narrow well somewhere in it, and gradient descent cannot find a well it cannot feel. Avoiding this requires an ansatz informed by the problem, which means giving up expressiveness — and the trade has no known sweet spot.

## The formal version

> **Variational quantum eigensolver (VQE).** Given $H = \sum_{j=1}^{M}c_jP_j$ with $P_j$ Pauli strings, and an ansatz $U(\vec\theta)$, minimize
> $$E(\vec\theta) = \langle0\rvert U^\dagger(\vec\theta)\,H\,U(\vec\theta)\lvert0\rangle = \sum_j c_j\left\langle P_j\right\rangle_{\vec\theta}$$
> over $\vec\theta$, using the quantum computer to evaluate each $\langle P_j\rangle$ and a classical optimizer to step.

In words: the cost function is a weighted sum of Pauli expectation values, each estimated by sampling. Note the linearity — you measure the terms separately and add, which is why $M$ enters the cost.

> **Gradients: the parameter-shift rule.** If $\theta$ enters as a single rotation $e^{-i\theta P/2}$ with $P^2 = I$, then
> $$\frac{\partial E}{\partial\theta} = \frac{E(\theta + \pi/2) - E(\theta - \pi/2)}{2},$$
> **exactly** — not a finite-difference approximation.

In words: the gradient is a difference of two energies at shifted parameters, so it is measurable with the same circuit at different settings, with no discretization error. This is a genuinely nice feature and one of the paradigm's real contributions.

> **Shot cost.** Estimating $E$ to accuracy $\epsilon$ requires
> $$N_{\text{shots}} \approx \frac{\left(\sum_j\lvert c_j\rvert\right)^2}{\epsilon^2} \quad\text{with naive term-by-term measurement, or } O\!\left(\frac{M}{\epsilon^2}\right) \text{ as a rule of thumb.}$$

| $M$ terms | target $\epsilon$ | shots | time at 10 kHz |
|---|---|---|---|
| $10^4$ | 1.6 mHa | $4\times10^9$ | 110 hours |
| $10^6$ | 1.6 mHa | $4\times10^{11}$ | 1.1 years |

And that is for **one** energy evaluation; an optimizer needs hundreds or thousands. (The card keeps these figures under [simulation and variational costs](../reference.md#simulation-and-variational-costs).)

> **QAOA.** For a problem Hamiltonian $H_C$ (diagonal, encoding the objective) and mixer $H_B = \sum_i X_i$, the ansatz is
> $$\lvert\psi(\vec\gamma,\vec\beta)\rangle = e^{-i\beta_pH_B}e^{-i\gamma_pH_C}\cdots e^{-i\beta_1H_B}e^{-i\gamma_1H_C}\lvert+\rangle^{\otimes n},$$
> with $2p$ parameters. As $p\to\infty$ it recovers adiabatic evolution and the exact optimum.

> **QAOA's benchmark problem.** On 3-regular graphs, $p=1$ QAOA achieves an approximation ratio of $0.6924$. The classical Goemans–Williamson algorithm achieves $0.878$ for MaxCut in polynomial time.

In words: **the flagship QAOA result is worse than a classical algorithm from 1994.** Higher $p$ improves it, but so far no $p$ at which QAOA is both implementable and better than the best classical method has been identified — and for MaxCut specifically, classical algorithms remain ahead.

> **Barren plateaus.** For an ansatz that forms an approximate 2-design on $n$ qubits (which random deep circuits do), the gradient satisfies
> $$\mathbb{E}\left[\partial_\theta E\right] = 0, \qquad \mathrm{Var}\left[\partial_\theta E\right] = O\!\left(2^{-n}\right).$$

In words: the gradient averages to zero and its fluctuations are exponentially small, so at $n = 50$ you would need $\sim2^{50}$ shots merely to *detect* a gradient. Optimization is impossible, not merely slow. The phenomenon appears for random ansatzes, for deep ansatzes, for global cost functions, and — in a further result — as a consequence of noise even for shallow circuits.

## Picture

![Left: a three-box loop. A blue box labelled ansatz ket psi of theta, marked QUANTUM, feeds down into a blue box labelled measure expectation of H, marked QUANTUM with many shots, which feeds into a green box labelled classical optimizer, marked CPU updating theta, whose output arrows back around to the top box labelled new theta. Right: notes stating that the circuits are shallow so NISQ-compatible; that the parameter-shift rule gives exact gradients as the difference of the energy at theta plus pi over two and theta minus pi over two, divided by two; that the shot cost is brutal, with M Pauli terms to accuracy epsilon needing about M over epsilon squared shots, so ten thousand terms at 1.6 millihartree needs four billion shots and about a hundred hours; and a section headed BARREN PLATEAUS explaining that for a random deep ansatz the gradient variance decays like two to the minus n, so the landscape is flat almost everywhere and the optimizer has nothing to follow, while problem-informed ansatzes avoid it only by giving up expressiveness.](assets/06-04-fig1.svg)

The loop on the left is the whole paradigm, and the notes on the right are why it is hard. Notice that neither obstacle is about decoherence — variational methods were designed around decoherence, and the two things that actually bind are **measurement statistics** and **optimization landscape geometry.** Both are problems a better qubit does not fix.

## Worked examples

**Example 1 — the parameter-shift rule, verified, and the shot budget.**

*The rule.* Take the simplest possible variational circuit: one qubit, $\lvert\psi(\theta)\rangle = R_y(\theta)\lvert0\rangle$, cost function $E(\theta) = \langle Z\rangle$. Then

$$\lvert\psi(\theta)\rangle = \cos\tfrac\theta2\lvert0\rangle + \sin\tfrac\theta2\lvert1\rangle, \qquad E(\theta) = \cos^2\tfrac\theta2 - \sin^2\tfrac\theta2 = \cos\theta.$$

The true derivative is $-\sin\theta$, which at $\theta = 0.7$ is $-0.6442$. The parameter-shift estimate:

$$\frac{E(0.7+\pi/2) - E(0.7-\pi/2)}{2} = \frac{\cos(2.2708) - \cos(-0.8708)}{2} = \frac{-0.6442 - 0.6442}{2}\cdot\ \cdots = -0.6442.$$

Exact agreement, as the rule guarantees. (The general proof is the same trigonometry: $E(\theta)$ is always a sinusoid in each parameter when that parameter enters as a single Pauli rotation.)

*The shot budget for something real.* Consider a molecule with $M = 10^4$ Pauli terms — a modest 20-orbital system. Chemical accuracy is $\epsilon = 1.6\times10^{-3}$ Hartree.

$$N_{\text{shots}} \approx \frac{M}{\epsilon^2} = \frac{10^4}{(1.6\times10^{-3})^2} = 3.9\times10^{9}.$$

At a generous 10,000 circuit executions per second:

$$\frac{3.9\times10^9}{10^4} = 3.9\times10^5\ \text{s} \approx 110\ \text{hours per energy evaluation}.$$

An optimizer needs at least hundreds of evaluations, so a single molecule is **years of machine time.** Scale to $M = 10^6$ terms (a chemically interesting system) and it is a year per evaluation.

Mitigations exist and are the subject of much work: group commuting Pauli terms so they share a measurement circuit (a factor of 10 to 100), use importance sampling over terms, use classical shadows. None changes the $1/\epsilon^2$, which is the binding term. **Chemical accuracy at $1/\epsilon^2$ is the fundamental problem, and phase estimation's $1/\epsilon$ is the fundamental answer** ([4.2](04-02-quantum-phase-estimation.md)) — which requires the depth nobody has.

**Example 2 — barren plateaus, and why they are worse than slow convergence.**

Suppose the gradient variance is $\mathrm{Var}[\partial_\theta E] = 2^{-n}$, so a typical gradient component has magnitude $g \approx 2^{-n/2}$.

To *detect* a gradient of size $g$ against shot noise, you need the statistical error below $g$, and the statistical error after $N$ shots is $\sim1/\sqrt N$:

$$\frac{1}{\sqrt N} < 2^{-n/2} \implies N > 2^{n}.$$

Tabulate:

| $n$ qubits | typical gradient | shots to detect it |
|---|---|---|
| 10 | $3\times10^{-2}$ | $10^3$ |
| 30 | $3\times10^{-5}$ | $10^9$ |
| 50 | $3\times10^{-8}$ | $10^{15}$ |
| 100 | $10^{-15}$ | $10^{30}$ |

At 10 qubits, fine. At 50, impossible. **The barren plateau is not slow convergence; it is the complete absence of a signal**, and no optimizer — gradient-based or not, since the cost function itself is exponentially flat — can navigate it.

Three responses are pursued, each with a cost:

| approach | mechanism | cost |
|---|---|---|
| problem-informed ansatz (UCCSD, Hamiltonian variational) | structure keeps the circuit far from a 2-design | less expressive, may exclude the true ground state |
| shallow, local cost functions | plateaus provably absent for depth $O(\log n)$ with local costs | limited entanglement, so possibly classically simulable |
| clever initialization (layerwise, identity-block) | start in a region with gradients | no guarantee of staying there |

Notice the shape of the second row, which is the paradigm's central tension. **The ansatzes provably free of barren plateaus are the shallow, low-entanglement ones — and those are the ones a classical computer can simulate** ([6.3](06-03-sampling-advantage-and-verification.md)). Escaping the plateau and retaining quantum advantage pull in opposite directions, and nobody has exhibited a regime that does both. That is the honest state of variational quantum algorithms, and it is why the field's attention has shifted back toward early fault-tolerant algorithms.

## Watch out

- You might think variational algorithms sidestep the need for error correction. They sidestep the need for *deep* circuits, which is not the same thing. Noise still biases the energy — [5.1](05-01-quantum-channels-and-decoherence.md) P3 shows the estimator converges to the wrong answer — and no number of shots fixes a biased estimator.
- You might think more shots always help. They reduce statistical error and do nothing about systematic error from noise or from an ansatz that cannot represent the true ground state. Distinguishing the two is the single most common failure in reading VQE results.
- You might think QAOA beats classical optimization. The flagship $p=1$ result on 3-regular graphs gives 0.6924 where Goemans–Williamson gives 0.878 in classical polynomial time. No implementable $p$ has been shown to beat the best classical method on a natural problem, and for MaxCut specifically classical methods remain ahead.
- You might think barren plateaus are an engineering problem. They are a statement about the geometry of the cost landscape for expressive ansatzes, provable from Haar-measure concentration. Better hardware does not flatten less; the escape routes all trade away either expressiveness or classical hardness.

## One-liner

> A shallow circuit, an expectation value, and a classical optimizer — cheap enough for today's hardware, and squeezed between a $1/\epsilon^2$ shot bill and a cost landscape that flattens exponentially with qubit count.

## Problems

**P1 (🟢)** For the one-qubit ansatz $\lvert\psi(\theta)\rangle = R_y(\theta)\lvert0\rangle$ with cost $E(\theta) = \langle Z\rangle$, derive $E(\theta)$ in closed form, compute its exact derivative at $\theta = \pi/3$, and verify the parameter-shift rule reproduces it. Then state why the rule is exact rather than approximate.

**P2 (🟡)** A VQE calculation targets a molecule with $M = 2\times10^5$ Pauli terms and needs chemical accuracy $1.6$ mHa. (a) Estimate the shots per energy evaluation. (b) Assuming 5,000 circuit executions per second and 500 optimizer iterations, compute the total wall-clock time. (c) Suppose measurement grouping reduces the effective term count by a factor of 50. Recompute, and state whether the calculation has become practical and what would have to change for it to be.

**P3 (🔴, optional)** Analyse the barren plateau trade-off. (a) Show that detecting a gradient of typical magnitude $2^{-n/2}$ requires $\Omega(2^n)$ shots, using the $1/\sqrt N$ shot-noise scaling. (b) Evaluate at $n = 20, 40, 60$ and state at which scale the calculation stops being possible. (c) Explain the central tension: why ansatzes provably free of barren plateaus tend to be classically simulable, and what that implies about whether a variational quantum advantage is likely. Name the specific property that must hold for a variational algorithm to be both trainable and classically hard.

<details>
<summary>Solutions</summary>

**P1** *Closed form.* $R_y(\theta)\lvert0\rangle = \cos\tfrac\theta2\lvert0\rangle + \sin\tfrac\theta2\lvert1\rangle$, so

$$E(\theta) = \langle Z\rangle = \cos^2\tfrac\theta2 - \sin^2\tfrac\theta2 = \cos\theta.$$

*Exact derivative at $\theta = \pi/3$.*

$$E'(\theta) = -\sin\theta, \qquad E'(\pi/3) = -\sin 60^\circ = -\frac{\sqrt3}{2} = -0.8660.$$

*Parameter shift.*

$$\frac{E(\pi/3+\pi/2) - E(\pi/3-\pi/2)}{2} = \frac{\cos(5\pi/6) - \cos(-\pi/6)}{2} = \frac{-\tfrac{\sqrt3}{2} - \tfrac{\sqrt3}{2}}{2} = -\frac{\sqrt3}{2} = -0.8660. \checkmark$$

*Why exact.* When a parameter enters through a single rotation $e^{-i\theta P/2}$ with $P^2 = I$, the state depends on $\theta$ only through $\cos(\theta/2)$ and $\sin(\theta/2)$, so any expectation value is of the form $E(\theta) = a\cos\theta + b\sin\theta + c$ — a **pure sinusoid of period $2\pi$**. For such a function the identity

$$\frac{E(\theta+\pi/2)-E(\theta-\pi/2)}{2} = E'(\theta)$$

holds identically (check it on $\cos\theta$ and $\sin\theta$ separately). So the "shift" is not a finite difference with a step size to tune — it is an exact trigonometric identity, and the only error is shot noise on the two energy estimates. That freedom from discretization error is a genuine advantage over classical finite differences.

**P2**

(a) $$N_{\text{shots}}\approx\frac{M}{\epsilon^2} = \frac{2\times10^5}{(1.6\times10^{-3})^2} = \frac{2\times10^5}{2.56\times10^{-6}} = 7.8\times10^{10}.$$

(b) At 5,000 executions per second, one evaluation takes

$$\frac{7.8\times10^{10}}{5\times10^3} = 1.56\times10^7\ \text{s} \approx 181\ \text{days}.$$

With 500 optimizer iterations:

$$500\times181\ \text{days} \approx 9\times10^4\ \text{days} \approx 248\ \text{years}.$$

(c) With grouping reducing the effective term count by 50:

$$N_{\text{shots}} \approx 1.56\times10^9, \quad \text{one evaluation} \approx 3.1\times10^5\ \text{s} \approx 3.6\ \text{days}, \quad \text{total} \approx 1{,}800\ \text{days} \approx 5\ \text{years}.$$

**Not practical.** Five years of exclusive machine time for one molecule's ground-state energy, assuming the ansatz can even represent the answer and that noise does not bias it.

*What would have to change.* The $1/\epsilon^2$ is the problem, and it is not an implementation detail — it is the shot-noise scaling of any sampled expectation value ([1.3](01-03-measurement-and-the-born-rule.md)). Fixes in rough order of leverage:

1. **Replace sampling with phase estimation**, whose cost is $1/\epsilon$ rather than $1/\epsilon^2$ ([4.2](04-02-quantum-phase-estimation.md)). At $\epsilon = 1.6$ mHa that is a factor of 600 in the exponent's favour — and it requires deep coherent circuits, hence error correction. This is why "early fault-tolerant" algorithms are the current direction.
2. **Amplitude estimation** ([3.6](03-06-amplitude-amplification-counting-and-optimality.md)) gives the same quadratic improvement with somewhat shallower circuits, and is the intermediate option.
3. Faster circuit repetition rates help linearly and are bounded by measurement and reset times, currently microseconds.

The honest conclusion is that **the quadratic shot penalty is the thing standing between VQE and usefulness, and removing it requires the coherence that VQE was invented to avoid.**

**P3**

(a) A gradient component estimated from $N$ shots has statistical error $\sigma \approx C/\sqrt N$ for a constant $C$ of order 1 (the variance of a $\pm1$-valued observable). To resolve a signal of magnitude $g = 2^{-n/2}$ you need $\sigma < g$:

$$\frac{C}{\sqrt N} < 2^{-n/2} \implies \sqrt N > C\,2^{n/2} \implies N > C^2\,2^{n} = \Omega(2^n).$$

The shots required are exponential in the qubit count, and this is unavoidable: it follows from the gradient's smallness and from shot noise, both of which are facts rather than choices.

(b)

| $n$ | typical gradient $2^{-n/2}$ | shots $\approx2^n$ | time at $10^4$/s |
|---|---|---|---|
| 20 | $10^{-3}$ | $10^{6}$ | 2 minutes |
| 40 | $10^{-6}$ | $10^{12}$ | 3 years |
| 60 | $10^{-9}$ | $10^{18}$ | 3 million years |

The calculation stops being possible **between 30 and 40 qubits** — which is also, uncomfortably, the range where classical simulation is still feasible. So the plateau bites exactly where the quantum device would otherwise start being interesting.

(c) *The tension.* Barren plateaus arise from **concentration of measure**: if the ansatz explores the Hilbert space as thoroughly as a random unitary (an approximate 2-design), then expectation values concentrate around their Haar average, and gradients vanish exponentially. The known escape is to keep the ansatz far from a 2-design — shallow depth, local cost functions, problem-specific structure.

But "far from a 2-design, shallow, local" is nearly a description of a state a classical computer can handle. Shallow circuits produce **low-entanglement** states with small Schmidt ranks across any cut, and low-entanglement states are exactly what tensor-network methods represent efficiently ([1.4](01-04-two-qubits-tensor-products-and-entanglement.md), [6.3](06-03-sampling-advantage-and-verification.md)). So the trainable regime and the classically-hard regime have, so far, been disjoint.

*What must hold for a variational quantum advantage.* The ansatz must be simultaneously:

1. **Trainable** — gradients not exponentially small, so not an approximate 2-design and not too deep;
2. **Classically hard to simulate** — enough entanglement, or enough magic ([1.6](01-06-universal-gate-sets-and-circuit-synthesis.md)'s $T$-count), that tensor networks and stabilizer methods fail;
3. **Expressive enough** to contain a good approximation to the target state.

No family is currently known to satisfy all three, and there are partial results suggesting 1 and 2 are in tension. That does not prove variational advantage is impossible — problem-specific structure could thread the needle, and chemistry's ansatzes are not random — but it is the reason the field's centre of gravity has shifted from "NISQ will find an application" back to "build the fault-tolerant machine." **The right summary is that variational algorithms were a reasonable bet on a decade of hardware, and the bet has not paid yet.**

</details>

## Connections

- **Backward:** the shot cost is [1.3](01-03-measurement-and-the-born-rule.md)'s $1/\sqrt N$ arithmetic; the noise bias is [5.1](05-01-quantum-channels-and-decoherence.md) P3; the variational principle itself is [`quantum-mechanics` 6.3](../../quantum-mechanics/lessons/06-03-variational-principle.md). The QMA-completeness ceiling on the underlying problem is [6.1](06-01-bqp-and-the-complexity-landscape.md), and the $1/\epsilon$ alternative is [4.2](04-02-quantum-phase-estimation.md).
- **Forward:** [6.6](06-06-resource-estimation-and-the-state-of-the-field.md) puts variational and fault-tolerant approaches on one axis and shows what each would need. [6.5](06-05-quantum-linear-algebra-and-dequantization.md) is the other family of advertised NISQ-era speedups, and it met a sharper fate.
- **Sideways:** the classical half of the loop is ordinary nonconvex optimization ([`convex-optimization` 4.1](../../convex-optimization/lessons/04-01-first-order-methods.md) covers the gradient methods, which here run on a landscape that is emphatically not convex), and barren plateaus are the same concentration-of-measure phenomenon that makes high-dimensional random landscapes flat — closely related to the vanishing-gradient problem in deep networks ([`deep-learning` 1.5](../../deep-learning/lessons/01-05-adaptive-optimizers-schedules-and-initialization.md)).
