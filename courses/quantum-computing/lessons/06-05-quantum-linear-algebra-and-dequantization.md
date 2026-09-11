# Quantum Computing · Lesson 6.5: Quantum linear algebra and dequantization

> ⏱ ~15 min · Module 6: Complexity and the real machine · Builds on: [4.2 (quantum phase estimation)](04-02-quantum-phase-estimation.md), [6.1 (BQP and the complexity landscape)](06-01-bqp-and-the-complexity-landscape.md), [`linalg-refresher` 5.2 (SVD)](../../linalg-refresher/lessons/05-02-svd.md) · Unlocks: [6.6 (resource estimation)](06-06-resource-estimation-and-the-state-of-the-field.md)

## Why this matters

Between roughly 2009 and 2018, quantum machine learning was the field's most exciting story. The **HHL algorithm** appeared to solve linear systems $Ax = b$ in time polylogarithmic in the matrix dimension $N$ — an exponential speedup over the $O(N)$ that even reading the matrix requires. A wave of papers followed: quantum recommendation systems, quantum principal component analysis, quantum support vector machines, quantum this and quantum that, each claiming exponential speedups for problems with enormous commercial value.

Most of it is gone. The speedups were real relative to the comparison being made, and the comparison was unfair. In 2018 a nineteen-year-old undergraduate, Ewin Tang, showed that the quantum recommendation-systems algorithm could be **dequantized**: give a classical algorithm the same kind of access to the input that the quantum algorithm assumed, and it too runs in polylogarithmic time. A cascade of similar results followed.

This is the most instructive episode in the field's history, and the lesson is transferable: **a speedup is a comparison, and the comparison is where the mistakes live.** Learning to audit one is worth more than learning any single algorithm.

## The idea

**What HHL does.** Given a sparse matrix $A$ and a vector $b$, it produces a quantum state $\lvert x\rangle$ proportional to the solution of $Ax = b$. The mechanism is elegant and entirely built from things you know:

1. Load $b$ into a quantum state $\lvert b\rangle$.
2. Phase-estimate $A$ ([4.2](04-02-quantum-phase-estimation.md)), writing each eigenvalue $\lambda_j$ into an ancilla register. Since $\lvert b\rangle = \sum_j\beta_j\lvert v_j\rangle$ in $A$'s eigenbasis, this entangles each eigenvector with its eigenvalue.
3. **Invert** each eigenvalue by a controlled rotation, multiplying amplitude $\beta_j$ by $1/\lambda_j$.
4. Uncompute the phase estimation and you hold $\lvert x\rangle\propto\sum_j(\beta_j/\lambda_j)\lvert v_j\rangle$, which is $A^{-1}b$ normalized.

The runtime is polylogarithmic in $N$, because phase estimation never touches all $N$ entries — it only needs to apply $e^{iAt}$, which for a sparse $A$ is cheap.

**Where it goes wrong.** Four places, all of which Aaronson catalogued in 2015 under the title "read the fine print."

- **Loading $b$.** Step 1 assumes you can produce $\lvert b\rangle$ in polylog time. For an arbitrary vector that takes $\Omega(N)$ operations. The escape is to assume a **QRAM** — a hypothetical device giving quantum access to classical memory in log time — which nobody has built and whose error-corrected cost may be prohibitive.
- **Reading $x$.** Step 4 gives you a *quantum state*, not a list of numbers. Extracting all $N$ components costs $\Omega(N)$ measurements ([1.3](01-03-measurement-and-the-born-rule.md)). You can cheaply extract one number, an expectation value $\langle x\vert M\vert x\rangle$ — so the algorithm is only useful when a single such number is what you wanted.
- **Condition number.** Step 3 divides by $\lambda_j$, and the cost grows at least linearly in the condition number $\kappa = \lambda_{\max}/\lambda_{\min}$. Real matrices have large $\kappa$, and $\kappa$ can easily eat the entire $\log N$ saving.
- **The comparison.** If you grant the quantum algorithm QRAM and an output that is only an expectation value, fairness demands granting the classical algorithm comparable structure. That is exactly what dequantization does.

## The formal version

> **HHL (Harrow–Hassidim–Lloyd, 2009).** Given an $s$-sparse Hermitian $A$ with condition number $\kappa$, oracle access to its entries, and a procedure preparing $\lvert b\rangle$, there is a quantum algorithm producing a state $\epsilon$-close to $\lvert A^{-1}b\rangle$ in time
> $$\tilde O\!\left(\kappa^2 s^2 \log N/\epsilon\right),$$
> improved by later work to $\tilde O(\kappa s\,\mathrm{polylog}(N/\epsilon))$.

In words: polylogarithmic in the dimension, polynomial in sparsity and conditioning. The $\log N$ is the headline and the $\kappa$ is the fine print.

> **The four caveats, as conditions for a genuine speedup.** HHL beats classical methods only when *all* of these hold: (i) $\lvert b\rangle$ is preparable efficiently — it has structure, or QRAM exists; (ii) the desired output is one expectation value, not the vector; (iii) $\kappa$ and $s$ are small, i.e. polylogarithmic in $N$; (iv) no classical algorithm solves the same restricted problem in comparable time.

> **Sample-and-query access.** A classical algorithm has SQ access to a vector $v$ if it can, in $O(1)$ time, query any entry $v_i$ and sample an index $i$ with probability $\lvert v_i\rvert^2/\lVert v\rVert^2$. This is the natural classical analogue of what QRAM provides quantumly.

> **Dequantization (Tang 2018, and much subsequent work).** Given SQ access to the input, there are **classical** algorithms for low-rank matrix inversion, recommendation systems, principal component analysis, and support vector machines running in time polylogarithmic in $N$ and polynomial in the rank, $\kappa$, and $1/\epsilon$.

In words: the exponential separation was an artifact of comparing "quantum with QRAM" against "classical with no special access." Level the access and the exponential disappears, leaving at most a polynomial advantage — and one that is often *worse*, since the classical algorithms' polynomial factors are sometimes better than the quantum ones'.

The scoreboard — and the general discipline is on the card as [the claim-auditing checklist](../reference.md#the-claim-auditing-checklist):

| claimed speedup | status |
|---|---|
| quantum recommendation systems | **dequantized** (Tang 2018) |
| quantum PCA | **dequantized** |
| low-rank matrix inversion | **dequantized** |
| quantum support vector machines | **dequantized** |
| HHL for sparse, well-conditioned, *physically generated* matrices | **survives**, with caveats |
| Hamiltonian simulation ([6.2](06-02-hamiltonian-simulation.md)) | **survives** — the matrix is a Hamiltonian, not data |

> **What survives and why.** The surviving cases are those where the matrix is not a data set to be loaded but a **physical operator with a compact description** — a Hamiltonian, a differential operator on a grid. Then there is no input-loading problem, because the matrix is specified by a formula, and the output wanted is genuinely an expectation value. That is precisely [6.2](06-02-hamiltonian-simulation.md)'s territory.

## Picture

![Top: a five-stage pipeline. Load b into ket b, marked in red with the note that it costs order N without QRAM; phase-estimate A, in green, needing A sparse; invert eigenvalues, in orange, at cost proportional to kappa; un-estimate, in green; and you now hold ket x, in red, with the note that reading it out costs order N. Middle: a numbered list of four caveats — state preparation, since loading an arbitrary b costs order N and QRAM is assumed rather than built; readout, since you get the state and not the vector, one number per run; condition number, which enters at least linearly and is large for real matrices; and the comparison, which must beat the best classical algorithm for the same restricted task. Bottom: a purple box headed DEQUANTIZATION explaining that giving the classical algorithm the same sampling access QRAM assumes lets it also run in polylogarithmic time, so the exponential speedup was an artifact of an unfair comparison, and that recommendation systems, PCA, low-rank matrix inversion and support vector machines were all dequantized.](assets/06-05-fig1.svg)

Notice which boxes are red. **The bottlenecks are at the two ends** — getting data in and getting answers out — and the quantum magic is in the middle, where it is genuinely fast. That shape is general: whenever a quantum algorithm promises a speedup on a *data* problem, look at the input and output interfaces first.

## Worked examples

**Example 1 — audit a speedup claim, step by step.**

Claim: "Our quantum algorithm solves an $N\times N$ linear system exponentially faster than classical methods."

Work through the four caveats with numbers. Take $N = 10^6$, and suppose $A$ is sparse with $s = 10$ and $\kappa = 100$.

*Caveat 1, input.* Can $\lvert b\rangle$ be prepared in polylog time? If $b$ is an arbitrary data vector, no: loading $10^6$ amplitudes takes $\Omega(10^6)$ operations, which already matches the classical solve. Unless $b$ has a closed form (say $b_i = f(i)$ for a computable $f$) or QRAM exists, **the claim fails here** and nothing downstream matters.

*Caveat 2, output.* What is wanted? If the answer is the full vector $x$, extracting it costs $\Omega(N)$ measurements — again $10^6$. If the answer is a single number like $x^\top M x$, the quantum algorithm can supply it cheaply, so **the claim needs the problem to be an expectation-value problem.**

*Caveat 3, conditioning.* The cost carries a factor $\kappa = 100$ (or $\kappa^2 = 10^4$ in the original version). Compare with $\log N = 20$: the conditioning factor is **five hundred times larger than the logarithmic saving**, so the advertised $\log N$ is swamped. For the speedup to be real you need $\kappa = O(\mathrm{polylog}\,N)$, which is a strong and rarely-checked assumption.

*Caveat 4, the comparison.* What is the best classical algorithm for *this* problem — sparse $A$, structured $b$, one expectation value out? For a low-rank or well-approximated-low-rank $A$, dequantization applies and the classical cost is also polylogarithmic in $N$.

A quick tally at these numbers:

| cost component | value |
|---|---|
| $\log N$ (the advertised saving) | 20 |
| $\kappa$ factor | 100 |
| $s^2$ factor | 100 |
| classical conjugate gradient for sparse $A$ | $O(s N\sqrt\kappa) \approx 10^8$ |
| HHL with all assumptions granted | $\approx\kappa s\log N \approx 2\times10^4$ |

So *if* every assumption holds, HHL wins by about $10^4$ — a real speedup, and **polynomial, not exponential**, once you write the constants out. The exponential only appears if you compare $\mathrm{polylog}(N)$ against $N$ while ignoring $\kappa$, $s$, and the interfaces.

**Example 2 — what dequantization actually does, and the lesson to keep.**

*The move.* The quantum algorithm assumes QRAM: the ability to produce $\lvert b\rangle = \sum_i b_i\lvert i\rangle$ in $\mathrm{polylog}(N)$ time. Tang's observation is that this assumption is not free — it grants the algorithm a *structured access* to the data that the classical baseline was denied.

So give the classical algorithm the corresponding structure, **sample-and-query access**: it may read any $b_i$ on demand and may sample an index $i$ with probability $\lvert b_i\rvert^2/\lVert b\rVert^2$. This is exactly what a QRAM-backed data structure provides, and it is implementable classically with the same preprocessing cost (a binary tree over the data, built once in $O(N)$ time — the same $O(N)$ QRAM needs).

*The result.* With SQ access, classical algorithms based on randomized sketching and importance sampling estimate the same quantities in

$$\mathrm{polylog}(N)\times\mathrm{poly}\!\left(\text{rank},\ \kappa,\ 1/\epsilon\right).$$

The $N$-dependence matches the quantum algorithm's. The polynomial factors are sometimes worse and sometimes better; either way, **the exponential separation is gone.**

*The lesson, stated generally.* A speedup claim is a statement about two algorithms *and* the access model they share. Three checks to apply to any such claim:

1. **What access does the quantum algorithm assume?** QRAM, an oracle, a state-preparation procedure. Grant the classical baseline the same.
2. **What does the output interface allow?** If the quantum algorithm yields only an expectation value, compare against the best classical algorithm for that expectation value, not for the full solution.
3. **Which parameters are hidden in the tilde?** Condition number, sparsity, rank, precision. A $\mathrm{polylog}(N)$ with a $\kappa^2$ attached is not an exponential speedup for any realistic $\kappa$.

These are the same checks that [3.3](03-03-bernstein-vazirani.md) P3 forced on the query model and [6.3](06-03-sampling-advantage-and-verification.md) forced on the sampling experiments. **The recurring error is comparing a quantum algorithm with generous assumptions against a classical algorithm with none**, and once you see the pattern you see it everywhere.

Worth stating the counterweight, since the episode is often told as pure debunking. Dequantization did not show quantum computers are useless for linear algebra; it showed the *exponential* claims for *data-driven* problems were wrong. Quantum linear algebra on matrices that are physical operators — Hamiltonians, discretized differential operators — remains a live and unrefuted application, and the machinery HHL introduced (eigenvalue transformation, now generalized as the quantum singular value transformation) is the technical backbone of modern simulation algorithms ([6.2](06-02-hamiltonian-simulation.md)). **The tool survived; the marketing did not.**

## Watch out

- You might think HHL solves linear systems. It produces a *quantum state* proportional to the solution. Whether that is useful depends entirely on whether a single expectation value answers your question, and for most linear-algebra applications it does not.
- You might think QRAM is an engineering detail. It is a major unproven assumption: a fault-tolerant QRAM for $N$ items may require $O(N)$ physical qubits and error correction on all of them, which would make the assumed $\log N$ access cost more than the classical solve. No credible design has been demonstrated.
- You might think dequantization killed quantum machine learning. It killed the *exponential* claims for problems where the input is a classical data set. Quantum advantage for problems whose input is a quantum system, or a matrix with a compact algebraic description, is untouched — and that is where the field's attention moved.
- You might think the tilde in $\tilde O$ is harmless. It hides logarithmic factors, and the surrounding expression hides $\kappa$ and $s$. Always write the cost out with the actual parameters of your instance before believing a comparison; Example 1 turns an "exponential" speedup into $10^4$ by doing exactly that.

## One-liner

> HHL inverts a matrix in polylog time if you can load the data for free, want only one number out, and have a well-conditioned matrix — and if you grant the classical algorithm the same free loading, it is just as fast.

## Problems

**P1 (🟢)** State the four caveats on HHL, and for each, say in one sentence what would have to be true of your problem for the caveat not to bite. Then state which single caveat would, on its own, be enough to kill a claimed exponential speedup for solving a linear system from a spreadsheet of data.

**P2 (🟡)** A vendor claims HHL-based speedup on an $N = 10^9$ system with sparsity $s = 20$ and condition number $\kappa = 10^4$, wanting the full solution vector. (a) Compute the advertised $\log_2 N$ and compare it with the $\kappa s$ factor. (b) Estimate the number of measurements needed to read out the solution vector, and compare with the classical cost of a sparse iterative solve, $O(sN\sqrt\kappa)$. (c) State your verdict and which caveat is decisive.

**P3 (🔴, optional)** Explain dequantization precisely. (a) Define sample-and-query access and explain why it is the fair classical analogue of QRAM, including the preprocessing cost on both sides. (b) Explain why a classical algorithm with SQ access can estimate $x^\top M x$ for $x = A^{-1}b$ in time polylogarithmic in $N$ when $A$ is low-rank, sketching the importance-sampling idea. (c) Identify the one structural feature that distinguishes the surviving quantum linear-algebra applications from the dequantized ones, and explain why Hamiltonian simulation is on the surviving side.

<details>
<summary>Solutions</summary>

**P1** The four caveats and their escape conditions:

1. **State preparation.** Loading an arbitrary $b$ into $\lvert b\rangle$ costs $\Omega(N)$. *Escape:* $b$ has a compact closed form (computable entrywise by a small circuit), or arises as the output of another quantum process, or a genuine QRAM exists.
2. **Readout.** You obtain the state $\lvert x\rangle$, and extracting all $N$ entries costs $\Omega(N)$ measurements. *Escape:* the quantity you want is a single expectation value $\langle x\vert M\vert x\rangle$ — an inner product, a norm, an overlap.
3. **Condition number and sparsity.** Cost grows at least linearly in $\kappa$ and in $s$. *Escape:* both are polylogarithmic in $N$, or the matrix has been preconditioned to make them so.
4. **The comparison.** The claim must be against the best classical algorithm for the *same restricted task*. *Escape:* no classical algorithm with comparable access solves it as fast — which for low-rank problems is now known to be false.

*The decisive one for a spreadsheet.* **Caveat 1, state preparation.** A data set from a spreadsheet has no compact description, so loading it into a quantum state requires touching all $N$ entries — $\Omega(N)$ — which already costs as much as a classical solve. Every advertised polylog is spent before the quantum algorithm begins. (Caveat 2 would kill it too if the full vector is wanted, and in practice both bite; but caveat 1 bites first and hardest, and it is the one QRAM was invented to dodge.)

**P2**

(a) $\log_2(10^9) = 29.9 \approx 30$. The $\kappa s$ factor is $10^4\times20 = 2\times10^5$.

$$\frac{\kappa s}{\log_2 N} = \frac{2\times10^5}{30} \approx 6{,}700.$$

The "fine print" factor is nearly **four orders of magnitude larger** than the advertised logarithmic saving. Whatever this algorithm is, it is not exponentially fast.

(b) *Readout.* The solution vector has $10^9$ entries, and each entry's amplitude must be estimated to some precision. Even ignoring precision, distinguishing $N$ amplitudes requires $\Omega(N) = 10^9$ measurements at minimum, and to get each to relative accuracy $\epsilon$ it is $\Omega(N/\epsilon^2)$ — at $\epsilon = 0.01$, about $10^{13}$ shots.

*Classical baseline.* A sparse iterative solve costs

$$O(sN\sqrt\kappa) = 20\times10^9\times100 = 2\times10^{12} \text{ operations},$$

which on a single modern core at $10^9$ operations per second is about 30 minutes, and on a cluster is minutes.

(c) **Verdict: no speedup, and the claim is not even close.** The decisive caveat is **readout (caveat 2)**: the customer wants the full solution vector, which forces $\Omega(N)$ measurements and destroys any possibility of a polylog runtime. The $\kappa s$ factor from (a) would have destroyed the exponential claim independently. And the classical baseline in (b) is a 30-minute computation, so there is no problem here worth accelerating.

The general moral: **a request for the full solution vector is incompatible with HHL, full stop.** If a vendor's claimed application outputs a vector rather than a scalar, the conversation can end there.

**P3**

(a) *Definition.* A classical algorithm has **sample-and-query (SQ) access** to a vector $v\in\mathbb{R}^N$ if it can, at unit cost: (i) query any entry $v_i$; (ii) draw a random index $i$ with probability $\lvert v_i\rvert^2/\lVert v\rVert^2$; and (iii) read $\lVert v\rVert$. For a matrix, the same access to each row plus to the vector of row norms.

*Why it is the fair analogue.* QRAM claims to produce $\lvert v\rangle = \sum_i v_i\lvert i\rangle/\lVert v\rVert$ in $\mathrm{polylog}(N)$ time. Measuring that state in the computational basis returns index $i$ with probability $\lvert v_i\rvert^2/\lVert v\rVert^2$ — **exactly SQ's sampling primitive.** So anything QRAM gives you, in terms of what you can extract by measurement, SQ gives classically.

*Preprocessing, on both sides.* Building the QRAM data structure requires reading all $N$ entries and constructing a binary tree of partial norms: $O(N)$ time and $O(N)$ space. Building the classical SQ data structure requires exactly the same binary tree: $O(N)$ time and space. **The preprocessing is identical**, which is the crux — the quantum algorithm was never actually avoiding the $O(N)$; it was assuming it away as a one-time cost, and the classical algorithm may assume the same.

(b) *The idea.* Suppose $A$ has rank $r \ll N$ with SVD $A = \sum_{j=1}^r\sigma_ju_jv_j^\top$. Then $A^{-1}b = \sum_j\sigma_j^{-1}(v_j^\top b)u_j$, so the answer is determined by $r$ singular triples and $r$ inner products.

Two classical tools do the work:

- **Sketching.** Sample $O(\mathrm{poly}(r,\kappa,1/\epsilon))$ rows of $A$ with probability proportional to their squared norms — available from SQ access. With high probability the sampled submatrix's singular values and right singular vectors approximate $A$'s, by matrix concentration bounds. This costs no $N$-dependence beyond logarithmic factors.
- **Importance-sampled inner products.** To estimate $v_j^\top b$, sample indices $i$ with probability $\lvert b_i\rvert^2/\lVert b\rVert^2$ and average $v_{j,i}\lVert b\rVert^2/b_i$. The estimator is unbiased with variance controlled by $\lVert v_j\rVert^2\lVert b\rVert^2$, so $O(1/\epsilon^2)$ samples suffice — again no $N$-dependence.

Combining them estimates $x^\top Mx$ in $\mathrm{polylog}(N)\cdot\mathrm{poly}(r,\kappa,1/\epsilon)$. The $N$ appears only through the logarithmic cost of a sample from the tree.

Note what makes this work: the *output is a scalar* and the *input access is sampling*. Those are exactly the two concessions the quantum algorithm needed, and granting them to both sides is what equalizes the comparison.

(c) *The distinguishing feature.* **Where the matrix comes from.**

- **Dequantized cases:** the matrix is a **data set** — a user-ratings matrix, a covariance matrix from samples, a kernel matrix. It has no compact description, so both algorithms need $O(N)$ preprocessing to build sampling access, and once both have it, both run in polylog time.
- **Surviving cases:** the matrix is a **physical operator with a compact algebraic description** — a local Hamiltonian $H = \sum_jH_j$ with polynomially many terms, or a discretized differential operator. No loading is needed because the matrix is given by a formula, so there is no $O(N)$ preprocessing to grant the classical side, and the classical side has no sampling access to exploit.

*Why Hamiltonian simulation survives.* In [6.2](06-02-hamiltonian-simulation.md) the "matrix" is $H$, specified by $L = \mathrm{poly}(n)$ local terms — a description of size polynomial in $n$, whereas the matrix itself is $2^n\times2^n$. There is nothing to load: the quantum computer applies $e^{-iH_jt}$ directly from the formula. And the desired output genuinely is an expectation value or a sampled measurement, not a $2^n$-component vector. So all four caveats are satisfied *by the structure of the problem rather than by assumption*, and the exponential separation has no unfair comparison hiding in it.

**The transferable rule:** a quantum speedup on a problem whose input is classical data should be presumed dequantizable until the access model is audited; a quantum speedup on a problem whose input is a compact description of a quantum system is on much firmer ground. That single distinction organizes essentially the entire quantum machine learning literature.

</details>

## Connections

- **Backward:** HHL's engine is phase estimation from [4.2](04-02-quantum-phase-estimation.md) applied to $e^{iAt}$, with eigenvalue inversion as a controlled rotation; the readout bottleneck is [1.3](01-03-measurement-and-the-born-rule.md); the SVD structure the dequantized algorithms exploit is [`linalg-refresher` 5.2](../../linalg-refresher/lessons/05-02-svd.md). The fair-comparison discipline is the same point as [3.3](03-03-bernstein-vazirani.md) P3's query-versus-circuit distinction.
- **Forward:** [6.6](06-06-resource-estimation-and-the-state-of-the-field.md) applies the same auditing discipline to hardware and resource claims rather than algorithmic ones.
- **Sideways:** the classical algorithms are randomized numerical linear algebra — leverage-score sampling, sketching, randomized SVD — the same toolkit as [`numerical-analysis`](../../numerical-analysis/syllabus.md)'s iterative solvers and the randomized methods behind large-scale [`machine-learning` 1.3](../../machine-learning/lessons/01-03-linear-regression-and-least-squares.md) pipelines. The condition number's role is identical to its role in classical iterative solvers, where convergence also scales with $\sqrt\kappa$.
