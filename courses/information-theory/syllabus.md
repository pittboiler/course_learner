# Information Theory — Syllabus

> Tier 1 · ~20 lessons · Prereqs: [`probability-theory`](../probability-theory/syllabus.md), [`linalg-refresher`](../linalg-refresher/syllabus.md) · Roadmap id: `information-theory`

## Goal

Build Shannon's theory from the ground up so you can measure information, compress it to its limit, and push it through a noisy channel — and see why those limits are what they are. You'll compute entropy and mutual information fluently, prove and *use* the two central theorems (source coding sets the compression floor, channel coding sets the reliable-communication ceiling), and cross into the two bridges that make this course worth taking: information *is* thermodynamic entropy (the maximum-entropy principle), and mutual information *is* the currency of statistical learning and information economics. Deliberately skipped: modern coding machinery (LDPC, polar, turbo codes) beyond the existence theorems, network information theory, and quantum information (a closing note only).

## Dangerous Checklist

When you finish, you can:

- [ ] Compute the entropy, joint/conditional entropy, and mutual information of a discrete distribution, in bits or nats
- [ ] Use the chain rules for entropy and mutual information, and apply Jensen's inequality to bound information quantities
- [ ] Explain relative entropy (KL divergence) as "extra bits for a wrong model" and use it to prove $H(X) \le \log|\mathcal{X}|$
- [ ] State and apply the data-processing inequality, and say why post-processing can't create information
- [ ] Explain the asymptotic equipartition property and what a typical set is
- [ ] State Shannon's source-coding theorem and build a Huffman code that approaches the entropy bound
- [ ] Use the Kraft inequality to test whether a prefix code exists and bound its expected length
- [ ] Compute the capacity of a discrete channel (binary symmetric, erasure) and state the noisy-channel coding theorem
- [ ] Explain the random-coding argument behind achievability, and the converse intuition (Fano's inequality)
- [ ] Compute differential entropy and the capacity of the Gaussian channel, including water-filling across parallel channels
- [ ] Derive the maximum-entropy distribution under moment constraints and recognize it as the Boltzmann/Gaussian law
- [ ] Explain, at a taste level, rate–distortion theory and how mutual information scores a learned representation

## Modules

### Module 1: Entropy and information measures

The vocabulary of the whole subject: how to put a number on uncertainty, and the handful of inequalities everything else leans on.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Entropy: uncertainty and surprise | Define entropy and read it three ways | surprise $-\log p$, entropy $H(X)$, bits vs nats, entropy of common distributions |
| 1.2 | Joint, conditional entropy, and the chain rule | Track information across several variables | joint & conditional entropy, chain rule for entropy, $H(X,Y)=H(X)+H(Y\mid X)$ |
| 1.3 | Mutual information | Measure how much one variable says about another | mutual information $I(X;Y)$, its symmetry, Venn-diagram picture, $I=0 \Leftrightarrow$ independence |
| 1.4 | Relative entropy (KL divergence) and Jensen | Score a wrong model and get the master inequality | KL divergence, Gibbs' inequality, Jensen's inequality, $H(X)\le\log|\mathcal{X}|$ |
| 1.5 | The data-processing inequality | Prove that processing can't manufacture information | Markov chains, $I(X;Y)\ge I(X;Z)$, sufficiency, why post-processing degrades information |

**Boss problem 1:** Given an explicit joint distribution $p(x,y)$ on a small alphabet, compute $H(X)$, $H(Y)$, $H(X,Y)$, $H(Y\mid X)$, and $I(X;Y)$; verify the chain rule and $I(X;Y)=H(X)-H(X\mid Y)$ numerically; then form a Markov chain $X\to Y\to Z$ and confirm the data-processing inequality holds with equality exactly when $Y$ is sufficient for $X$.

### Module 2: Source coding and data compression

Entropy stops being an abstraction: it is the exact number of bits per symbol you cannot beat.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The asymptotic equipartition property | See why "almost all" sequences look alike | AEP, typical set, size $\approx 2^{nH}$, weak law of large numbers applied to $-\tfrac1n\log p$ |
| 2.2 | Shannon's source-coding theorem | Nail the compression limit at $H$ bits/symbol | achievability via typical sets, converse, $H$ as the fundamental limit |
| 2.3 | Prefix codes and the Kraft inequality | Decide when a decodable code exists | prefix (instantaneous) codes, Kraft–McMillan inequality, expected length bounds |
| 2.4 | Huffman coding | Build the optimal symbol code by hand | Huffman algorithm, optimality proof sketch, $H \le L < H+1$ |
| 2.5 | Beyond symbol codes: arithmetic coding (taste) | Reach the entropy limit without integer-length waste | arithmetic coding idea, blocking, redundancy of Huffman, a nod to universal codes |

**Boss problem 2:** For a source with a given five-symbol distribution, compute $H$, build the Huffman code and its expected length $L$, and confirm $H\le L< H+1$; then check the Kraft inequality for your codeword lengths and explain, using the AEP, why coding blocks of $n$ symbols drives $L/n \to H$.

### Module 3: Channel capacity

The counterintuitive heart of the theory: a noisy channel still has a *positive* rate at which communication can be made arbitrarily reliable.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Discrete channels and capacity | Define the channel and its capacity | discrete memoryless channel, transition matrix, capacity $C=\max_{p(x)} I(X;Y)$ |
| 3.2 | Canonical channels | Compute capacity for the workhorse examples | binary symmetric channel, binary erasure channel, noiseless & useless channels |
| 3.3 | The noisy-channel coding theorem: achievability | See how random codes beat noise | rate, block codes, random coding, joint typicality decoding, $R<C$ achievable |
| 3.4 | The converse and Fano's inequality | Prove you can't beat capacity | Fano's inequality, converse to the coding theorem, why $R>C$ forces errors |
| 3.5 | Codes in practice (taste) | Connect the existence theorem to real codes | Hamming code example, minimum distance, a pointer to modern codes, the finite-field link |

**Boss problem 3:** For a binary symmetric channel with crossover probability $p$, derive $C = 1 - H(p)$ from $C=\max I(X;Y)$; find the capacity-achieving input distribution; compute $C$ at $p=0.1$ and state the fastest reliable rate; then use Fano's inequality to argue that any code with rate above $C$ has error probability bounded away from zero.

### Module 4: Continuous information and the bridges

Push the theory into continuous variables, hit the Gaussian channel, and cash in the two connections that motivated the whole course.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Differential entropy | Extend entropy to continuous variables (carefully) | differential entropy, non-invariance under scaling, entropy of the Gaussian |
| 4.2 | The Gaussian channel and water-filling | Get the capacity of the most important channel | Gaussian channel capacity $\tfrac12\log(1+\mathrm{SNR})$, power constraint, water-filling over parallel channels |
| 4.3 | Rate–distortion theory (taste) | Compress lossily to a chosen fidelity | rate–distortion function $R(D)$, the Gaussian source, lossy vs lossless limits |
| 4.4 | Maximum entropy and statistical mechanics | Derive the Boltzmann/Gaussian law from information | max-entropy principle, Lagrange multipliers, Jaynes' view, Shannon entropy $=$ Gibbs entropy |
| 4.5 | Information in learning and inference (note) | See mutual information as the ML/econ currency | MI as a feature score, KL as a loss, information bottleneck, information & the value of a signal |

**Boss problem 4:** Find the maximum-entropy distribution on $\mathbb{R}$ subject to a fixed mean and variance by maximizing differential entropy with Lagrange multipliers; show the solution is the Gaussian, and interpret the multipliers physically. Then repeat on a discrete state space with a fixed mean energy constraint, obtain the Boltzmann distribution $p_i \propto e^{-\beta E_i}$, and state explicitly how $\beta$, the partition function, and Gibbs entropy map onto the information-theoretic quantities from Module 1.

## Sources of truth

- Cover & Thomas, *Elements of Information Theory* (primary — definitions, theorem statements, and the rigor level)
- MacKay, *Information Theory, Inference, and Learning Algorithms* (intuition, the inference bridge, worked codes)
- Shannon, *A Mathematical Theory of Communication* (1948) (the source; entropy, capacity, and the coding theorems as first stated)
- Jaynes, *Information Theory and Statistical Mechanics* (1957) (the maximum-entropy bridge in Module 4)

## Notes

- **The stat-mech bridge (headline).** Shannon's entropy $H = -\sum p_i \log p_i$ is, up to Boltzmann's constant, the Gibbs/Boltzmann entropy of [`stat-mech`](../stat-mech/syllabus.md). The maximum-entropy principle (Lesson 4.4) *derives* the Boltzmann distribution as the least-committed distribution consistent with a mean-energy constraint — thermodynamics falls out of "assume as little as the data forces." This is the same Lagrange-multiplier move used for constrained optimization throughout the curriculum.
- **The learning/inference bridge.** Mutual information and KL divergence are the objects [`statistical-learning`](../statistical-learning/syllabus.md) optimizes: cross-entropy loss is KL to the empirical distribution, and MI scores how informative a feature or representation is (Lesson 4.5).
- **The economics bridge.** The value of a signal in [`grad-micro`](../grad-micro/syllabus.md) is an information quantity; conditioning to update beliefs is exactly the conditional-entropy reduction $H(X)-H(X\mid Y)=I(X;Y)$.
- **The algebra bridge.** The error-correcting codes gestured at in Lesson 3.5 are built from finite fields — see [`abstract-algebra`](../abstract-algebra/syllabus.md) for the Hamming/Reed–Solomon machinery this course only points to.
- A closing note in Lesson 4.5 flags quantum information (von Neumann entropy, qubits) as the natural sequel — deliberately out of scope here.
