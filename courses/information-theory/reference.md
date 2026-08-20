# Information Theory · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The whole subject is one quantity worn four ways. *How uncertain am I?* (entropy),
*how much does one variable say about another?* (mutual information), *how wrong
is my model?* (relative entropy), *how many bits does this cost?* (code length) —
and the theorems say those are all the same number. Below: the definitions, the
identities that convert one into another, the inequalities that bound them (and
exactly what each one assumes), the capacities of the standard channels, and the
numeric tables the lessons quote without deriving.

## Log base and units

**Base 2 unless a lesson says otherwise, so every quantity is in bits.** The only
deliberate exception is [4.4](lessons/04-04-maximum-entropy-stat-mech.md), which
works in $\ln$ (**nats**) so the Boltzmann/Gibbs formulas come out clean;
[4.1](lessons/04-01-differential-entropy.md) writes a bare $\log$ and holds in
either base. The base sets the *ruler*, never the underlying quantity.

$$1 \text{ bit} = \ln 2 \approx 0.6931 \text{ nats}, \qquad 1 \text{ nat} = \log_2 e \approx 1.4427 \text{ bits}, \qquad \log_2 y = \frac{\ln y}{\ln 2}.$$

Never compare a bit-valued number to a nat-valued one without converting, and
never mix bases inside one calculation — a capacity in nats against a rate in bits
is a wrong answer that looks right.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\mathcal{X}$, $\lvert\mathcal{X}\rvert$ | the alphabet a variable draws from, and how many symbols it holds | [1.1](lessons/01-01-entropy-uncertainty-surprise.md) |
| $p(x)$, $p(x,y)$, $p(y\mid x)$ | marginal, joint, and conditional pmf — the argument names tell you which | [1.1](lessons/01-01-entropy-uncertainty-surprise.md) |
| $-\log p(x)$ | surprise of one outcome — big when $x$ was unlikely | [1.1](lessons/01-01-entropy-uncertainty-surprise.md) |
| $H(X)$ | entropy — average surprise, in bits | [1.1](lessons/01-01-entropy-uncertainty-surprise.md) |
| $H(p)$, $H_b(p)$ | the **binary** entropy function of a single number $p\in[0,1]$ — same object under two names | [1.1](lessons/01-01-entropy-uncertainty-surprise.md), [3.4](lessons/03-04-converse-fano-inequality.md) |
| $H(X,Y)$ | joint entropy — uncertainty of the pair treated as one symbol | [1.2](lessons/01-02-joint-conditional-entropy-chain-rule.md) |
| $H(Y\mid X)$ | conditional entropy — uncertainty left in $Y$ *on average* once $X$ is revealed | [1.2](lessons/01-02-joint-conditional-entropy-chain-rule.md) |
| $X \perp Y$ | independence: $p(x,y) = p(x)p(y)$ | [1.2](lessons/01-02-joint-conditional-entropy-chain-rule.md) |
| $I(X;Y)$ | mutual information — the shared overlap, in bits (semicolon, not comma) | [1.3](lessons/01-03-mutual-information.md) |
| $D(p\,\|\,q)$ | relative entropy — extra bits per symbol for coding $p$ with a code built for $q$ | [1.4](lessons/01-04-relative-entropy-kl-jensen.md) |
| $u$ | the uniform distribution on $\mathcal{X}$, used as the comparison model | [1.4](lessons/01-04-relative-entropy-kl-jensen.md) |
| $\varphi$ | the convex or concave function Jensen is applied to | [1.4](lessons/01-04-relative-entropy-kl-jensen.md) |
| $X \to Y \to Z$ | Markov chain: $Z$ depends on $X$ only through $Y$ | [1.5](lessons/01-05-data-processing-inequality.md) |
| $I(X;Y\mid Z)$ | conditional mutual information — shared bits that survive knowing $Z$ | [1.5](lessons/01-05-data-processing-inequality.md) |
| $p \star q$ | binary convolution $p + q - 2pq$: the flip rate of two BSCs in series | [1.5](lessons/01-05-data-processing-inequality.md) |
| $x^n$, $p(x^n)$ | a length-$n$ sequence and its probability $\prod_i p(x_i)$ | [2.1](lessons/02-01-asymptotic-equipartition-property.md) |
| $A_\varepsilon^{(n)}$ | the typical set at tolerance $\varepsilon$ | [2.1](lessons/02-01-asymptotic-equipartition-property.md) |
| $\varepsilon$ | the tolerance/slack you get to shrink at the end of an asymptotic argument | [2.1](lessons/02-01-asymptotic-equipartition-property.md) |
| $\ell_i$, $L$ | codeword length for symbol $i$, and expected length $L=\sum_i p_i\ell_i$ | [2.3](lessons/02-03-prefix-codes-kraft-inequality.md) |
| $F(s)$ | cumulative probability of the symbols ordered before $s$ — the left edge of $s$'s slice | [2.5](lessons/02-05-arithmetic-coding.md) |
| $p(y\mid x)$ as a matrix | the channel's transition matrix: row $x$ is the output distribution for input $x$ | [3.1](lessons/03-01-discrete-channels-capacity.md) |
| $C$ | channel capacity, in **bits per channel use** | [3.1](lessons/03-01-discrete-channels-capacity.md) |
| $p$ (BSC), $e$ (BEC) | crossover (flip) probability; erasure probability — $e$ here is *not* Euler's number | [3.2](lessons/03-02-canonical-channels.md) |
| $R$, $M = 2^{nR}$ | rate in bits per use, and the number of messages a length-$n$ block code carries | [3.3](lessons/03-03-noisy-channel-coding-achievability.md) |
| $P_e$ | block (average) error probability $\Pr(\hat W \neq W)$ | [3.4](lessons/03-04-converse-fano-inequality.md) |
| $\oplus$ | addition mod 2 (XOR) | [3.5](lessons/03-05-codes-in-practice.md) |
| $d$, $(s_1,s_2,s_3)$ | minimum Hamming distance of a code; the syndrome of a received word | [3.5](lessons/03-05-codes-in-practice.md) |
| $h(X)$, $f(x)$ | differential entropy, and the density it's computed from | [4.1](lessons/04-01-differential-entropy.md) |
| $\Delta$ | quantization bin width — the source of the $\log(1/\Delta)$ resolution tax | [4.1](lessons/04-01-differential-entropy.md) |
| $P$, $N$, $\mathrm{SNR}$ | signal power budget $\mathbb{E}[X^2]$, noise **variance**, and their ratio $P/N$ | [4.2](lessons/04-02-gaussian-channel-water-filling.md) |
| $\nu$, $(t)^+$ | the water level; the positive part $\max(t,0)$ | [4.2](lessons/04-02-gaussian-channel-water-filling.md) |
| $\hat{X}$, $d(x,\hat x)$, $D$ | the reconstruction, the distortion measure, and the allowed *average* distortion | [4.3](lessons/04-03-rate-distortion.md) |
| $R(D)$ | rate–distortion function — fewest bits/symbol at fidelity $D$ | [4.3](lessons/04-03-rate-distortion.md) |
| $\beta$, $Z$ | Lagrange multiplier on the mean constraint (physically $1/kT$); partition function | [4.4](lessons/04-04-maximum-entropy-stat-mech.md) |
| $H(p,q)$ | cross-entropy of the truth $p$ against the model $q$ | [4.5](lessons/04-05-information-in-learning-inference.md) |
| $T$ | a learned representation/feature built from $X$ | [4.5](lessons/04-05-information-in-learning-inference.md) |

## Definitions

### Surprise

How startled you should be by one outcome: huge for a rare event, near zero for a
near-certain one, and additive over independent events (which is why it's a log).

$$-\log p(x)$$

*Introduced:* [1.1](lessons/01-01-entropy-uncertainty-surprise.md)

### Entropy

Your average surprise before you look — one number for how uncertain the whole
situation is, equivalently the average bits needed to describe $X$. Convention:
$0\log 0 = 0$.

$$H(X) = \mathbb{E}\big[-\log p(X)\big] = -\sum_{x\in\mathcal{X}} p(x)\log p(x)$$

*Introduced:* [1.1](lessons/01-01-entropy-uncertainty-surprise.md)

### Binary entropy function

The uncertainty of one biased coin, as a function of its bias. Symmetric about
$\tfrac12$, peaking at 1 bit there, zero at both ends.

$$H(p) = H_b(p) = -p\log_2 p - (1-p)\log_2(1-p)$$

*Introduced:* [1.1](lessons/01-01-entropy-uncertainty-surprise.md)

### Joint entropy

The uncertainty of the pair $(X,Y)$ treated as one combined symbol — nothing new,
just a bigger alphabet.

$$H(X,Y) = -\sum_{x,y} p(x,y)\log p(x,y)$$

*Introduced:* [1.2](lessons/01-02-joint-conditional-entropy-chain-rule.md)

### Conditional entropy

The uncertainty left in $Y$ after $X$ is revealed, **averaged over which $x$ you
saw** — a weighted mean of ordinary entropies, not a per-observation promise.

$$H(Y\mid X) = \sum_x p(x)\,H(Y\mid X{=}x) = -\sum_{x,y} p(x,y)\log p(y\mid x)$$

*Introduced:* [1.2](lessons/01-02-joint-conditional-entropy-chain-rule.md)

### Mutual information

How much of your uncertainty about $X$ observing $Y$ resolves — the overlap of the
two entropy circles. Symmetric, even though the conditional entropies aren't.

$$I(X;Y) = \sum_{x,y} p(x,y)\log\frac{p(x,y)}{p(x)p(y)}$$

*Introduced:* [1.3](lessons/01-03-mutual-information.md)

### Relative entropy (KL divergence)

The bit-tax for using the wrong model: extra bits per symbol when the truth is $p$
and your codebook was built for $q$. A *divergence*, not a distance — asymmetric,
no triangle inequality. Conventions: $0\log\frac{0}{q}=0$, $p\log\frac{p}{0}=\infty$.

$$D(p\,\|\,q) = \sum_{x} p(x)\log\frac{p(x)}{q(x)}$$

*Introduced:* [1.4](lessons/01-04-relative-entropy-kl-jensen.md)

### Cross-entropy

The average surprise of using codebook $q$ on data from $p$ — the entropy floor
plus the KL penalty, which is why minimizing it is maximum likelihood.

$$H(p,q) = -\sum_x p(x)\log q(x) = H(p) + D(p\,\|\,q)$$

*Introduced:* [4.5](lessons/04-05-information-in-learning-inference.md)

### Markov chain

A closed pipeline: $Z$ is computed from $Y$ alone and never peeks back at $X$.

$$X\to Y\to Z \iff p(z\mid x,y) = p(z\mid y)$$

*Introduced:* [1.5](lessons/01-05-data-processing-inequality.md)

### Sufficient statistic

A processed version of the data that threw away nothing about the source — the
equality case of the data-processing inequality. Compression with no information
loss.

$$Z \text{ sufficient for } X \iff I(X;Y\mid Z) = 0 \iff I(X;Z) = I(X;Y)$$

*Introduced:* [1.5](lessons/01-05-data-processing-inequality.md)

### Typical set

The sequences whose *average per-symbol surprise* matches the source's entropy —
individually unremarkable, collectively carrying essentially all the probability.

$$A_\varepsilon^{(n)} = \Big\{x^n : \big|-\tfrac1n\log p(x^n) - H\big| \le \varepsilon\Big\} = \Big\{x^n : 2^{-n(H+\varepsilon)} \le p(x^n) \le 2^{-n(H-\varepsilon)}\Big\}$$

*Introduced:* [2.1](lessons/02-01-asymptotic-equipartition-property.md)

### Prefix code

A code with no separators needed: no codeword is the start of another, so every
codeword is a **leaf** of the binary tree and decoding is instantaneous — you
commit the moment the bits complete, never looking ahead.

*Introduced:* [2.3](lessons/02-03-prefix-codes-kraft-inequality.md)

### Discrete memoryless channel

A fixed lookup table of conditional distributions — one output distribution per
input — reused independently on every symbol.

$$\big(\mathcal{X},\ p(y\mid x),\ \mathcal{Y}\big), \qquad \sum_y p(y\mid x) = 1 \text{ for each } x$$

*Introduced:* [3.1](lessons/03-01-discrete-channels-capacity.md)

### Channel capacity

The most information the *best* input strategy can force through fixed noise. You
optimize $p(x)$; the channel's $p(y\mid x)$ is hardware.

$$C = \max_{p(x)} I(X;Y) \quad \text{bits per channel use}$$

*Introduced:* [3.1](lessons/03-01-discrete-channels-capacity.md)

### Rate

Message bits pushed per channel use. A length-$n$ block code carrying $M$ equally
likely messages has $M = 2^{nR}$.

$$R = \frac{\log_2 M}{n}$$

*Introduced:* [3.3](lessons/03-03-noisy-channel-coding-achievability.md)

### Joint typicality

A pair $(x^n,y^n)$ is jointly typical when $x^n$, $y^n$, *and* the pair are each
typical for their own distribution — the decoding test in the random-coding proof.

*Introduced:* [3.3](lessons/03-03-noisy-channel-coding-achievability.md)

### Minimum distance

The smallest number of bit flips separating two codewords — the geometric margin
that decides how many errors nearest-codeword decoding can undo.

*Introduced:* [3.5](lessons/03-05-codes-in-practice.md)

### Differential entropy

The continuous analogue of $H$: the *shape* term left after stripping the infinite
$\log(1/\Delta)$ resolution tax. Not a bit count — it can be negative and it moves
when you change units.

$$h(X) = -\int f(x)\log f(x)\,dx = \mathbb{E}\big[-\log f(X)\big]$$

*Introduced:* [4.1](lessons/04-01-differential-entropy.md)

### Rate–distortion function

The fewest bits per symbol that still reconstruct the source within *average*
distortion $D$ — capacity's mirror image, a min of $I$ instead of a max.

$$R(D) = \min_{p(\hat x\mid x)\,:\,\mathbb{E}[d(X,\hat X)]\le D} I(X;\hat X)$$

*Introduced:* [4.3](lessons/04-03-rate-distortion.md)

### Maximum-entropy principle

Of all distributions consistent with what you measured, assume the flattest one —
it commits to nothing you didn't observe.

$$\max_p H(p) \quad \text{s.t.} \quad \sum_i p_i = 1, \ \ \sum_i p_i f(x_i) = \langle f\rangle$$

*Introduced:* [4.4](lessons/04-04-maximum-entropy-stat-mech.md)

### Partition function

The normalizer of the max-entropy solution — and, read as physics, the object all
of equilibrium thermodynamics is derivatives of.

$$Z = \sum_i e^{-\beta f(x_i)}$$

*Introduced:* [4.4](lessons/04-04-maximum-entropy-stat-mech.md)

## Formulas and rules

### The information quantities and how they convert

Every identity below is bookkeeping on one Venn diagram of two circles: $H(X)$ and
$H(Y)$ overlapping in $I(X;Y)$, the union being $H(X,Y)$.

$$H(X,Y) = H(X) + H(Y\mid X) = H(Y) + H(X\mid Y) \qquad \text{(chain rule)}$$
$$H(X_1,\dots,X_n) = \sum_{i=1}^n H(X_i \mid X_1,\dots,X_{i-1}) \qquad \text{(general chain rule)}$$
$$I(X;Y) = H(X) - H(X\mid Y) = H(Y) - H(Y\mid X) = H(X) + H(Y) - H(X,Y)$$
$$I(X;Y) = D\big(p(x,y)\,\|\,p(x)p(y)\big), \qquad I(X;X) = H(X)$$
$$I(X;Y,Z) = I(X;Z) + I(X;Y\mid Z) = I(X;Y) + I(X;Z\mid Y) \qquad \text{(chain rule for } I\text{)}$$
$$H(X) = \log\lvert\mathcal{X}\rvert - D(p\,\|\,u), \qquad H(p,q) = H(p) + D(p\,\|\,q)$$

The total in a chain rule is order-free; the individual installments are not
($H(Y\mid X) \ne H(X\mid Y)$ unless $H(X)=H(Y)$).

*From* [1.2](lessons/01-02-joint-conditional-entropy-chain-rule.md), [1.3](lessons/01-03-mutual-information.md), [1.4](lessons/01-04-relative-entropy-kl-jensen.md), [1.5](lessons/01-05-data-processing-inequality.md), [4.5](lessons/04-05-information-in-learning-inference.md)

### The inequalities — and what each one assumes

Read the assumption column first. Every one of these is quoted somewhere later in
the course, and most misuse is an assumption quietly dropped.

| Inequality | Assumes | Equality iff |
|---|---|---|
| $H(X) \ge 0$ | $X$ **discrete** (fails for $h$) | $X$ deterministic |
| $H(X) \le \log\lvert\mathcal{X}\rvert$ | finite alphabet | $X$ uniform |
| $H(Y\mid X) \le H(Y)$ | nothing — but it's the **average** | $X \perp Y$ |
| $H(X,Y) \le H(X) + H(Y)$ (subadditivity) | nothing | $X \perp Y$ |
| $D(p\,\|\,q) \ge 0$ (Gibbs) | same alphabet; $q(x)=0 \Rightarrow p(x)=0$ | $p = q$ |
| $I(X;Y) \ge 0$ | nothing (it's Gibbs on the joint vs. product) | $X \perp Y$ |
| $\mathbb{E}[\varphi(X)] \ge \varphi(\mathbb{E}[X])$ (Jensen) | $\varphi$ **convex** — flips to $\le$ for concave $\varphi$ like $\log$ | $X$ constant, or $\varphi$ linear on $X$'s range |
| $I(X;Y) \ge I(X;Z)$ (data processing) | $X\to Y\to Z$ **Markov** — no side information | $I(X;Y\mid Z)=0$ ($Z$ sufficient) |
| $I\big(X;g(Y)\big) \le I(X;Y)$ | $g$ any deterministic function of $Y$ alone | $g$ invertible / sufficient |
| $H(X\mid Y) \le H_b(P_e) + P_e\log(\lvert\mathcal{X}\rvert - 1)$ (Fano) | $\hat X$ estimated from $Y$ only: $X\to Y\to\hat X$ | — |
| $\sum_i 2^{-\ell_i} \le 1$ (Kraft–McMillan) | binary, uniquely decodable (prefix included) | code is complete (optimal) |
| $H(X) \le L < H(X)+1$ | per-symbol prefix code, optimal $L$ | $H = L$ iff $p$ dyadic |
| $P_e \ge 1 - \dfrac{C}{R} - \dfrac{1}{nR}$ | uniform message, $n$ uses of a capacity-$C$ channel | — |

Two things Fano is not: it is a **lower** bound on error (not an upper one), and
its $H_b(P_e)$ is the binary entropy of the *error rate*, not of a channel's
crossover probability.

*From* [1.1](lessons/01-01-entropy-uncertainty-surprise.md), [1.2](lessons/01-02-joint-conditional-entropy-chain-rule.md), [1.3](lessons/01-03-mutual-information.md), [1.4](lessons/01-04-relative-entropy-kl-jensen.md), [1.5](lessons/01-05-data-processing-inequality.md), [2.3](lessons/02-03-prefix-codes-kraft-inequality.md), [3.4](lessons/03-04-converse-fano-inequality.md)

### Entropy of the standard sources

The lessons compute these repeatedly and quote them without re-deriving.

| Source | Entropy |
|---|---|
| deterministic | $0$ |
| uniform on $m$ symbols | $\log_2 m$ |
| Bernoulli$(p)$ / any two-outcome source | $H(p)$ |
| dyadic $\{\tfrac12,\tfrac14,\tfrac18,\tfrac18\}$ | $1.75$ bits (and a prefix code hits $L=1.75$ exactly) |
| pair of independent sources | $H(X)+H(Y)$ |
| $g(X)$ with $g$ invertible | $H(X)$ (relabeling changes nothing) |
| $g(X)$ with $g$ many-to-one | $\le H(X)$ |
| Uniform density on $[0,a]$ | $h = \log a$ (negative for $a<1$) |
| Gaussian $\mathcal{N}(0,\sigma^2)$ | $h = \tfrac12\log(2\pi e\,\sigma^2)$ |

*From* [1.1](lessons/01-01-entropy-uncertainty-surprise.md), [2.3](lessons/02-03-prefix-codes-kraft-inequality.md), [4.1](lessons/04-01-differential-entropy.md)

### Numbers worth having on hand

Binary entropy and the BSC capacity it produces (bits):

| $p$ | $0.01$ | $0.05$ | $0.1$ | $0.11$ | $0.2$ | $0.25$ | $0.3$ | $0.32$ | $0.4$ | $0.5$ |
|---|---|---|---|---|---|---|---|---|---|---|
| $H(p)$ | $0.081$ | $0.286$ | $0.469$ | $0.500$ | $0.722$ | $0.811$ | $0.881$ | $0.904$ | $0.971$ | $1.000$ |
| $1-H(p)$ | $0.919$ | $0.714$ | $0.531$ | $0.500$ | $0.278$ | $0.189$ | $0.119$ | $0.096$ | $0.029$ | $0$ |

$H(p) = H(1-p)$, so read the table backwards for $p > \tfrac12$.

Logs you'll want without a calculator: $\log_2 3 = 1.585$, $\log_2 5 = 2.322$,
$\log_2 6 = 2.585$, $\log_2 7 = 2.807$, $\log_2 10 = 3.322$; and
$\log_2(1/x) = -\log_2 x$, $\log_2(ab) = \log_2 a + \log_2 b$.

*From* [1.1](lessons/01-01-entropy-uncertainty-surprise.md), [3.2](lessons/03-02-canonical-channels.md)

### The AEP and the source-coding limit

Three facts, one cause — the weak law of large numbers applied to the i.i.d. terms
$-\log p(X_i)$, whose mean is $H$.

$$-\tfrac1n\log p(X_1,\dots,X_n) \xrightarrow{\text{in prob.}} H(X)$$
$$\Pr\big(X^n \in A_\varepsilon^{(n)}\big) > 1-\varepsilon, \qquad (1-\varepsilon)2^{n(H-\varepsilon)} \le \big\lvert A_\varepsilon^{(n)}\big\rvert \le 2^{n(H+\varepsilon)}$$

So: about $2^{nH}$ typical sequences, each of probability about $2^{-nH}$, out of
$\lvert\mathcal{X}\rvert^n$ total — an exponentially small slice unless the source is
uniform, and that gap *is* the compressibility.

**Source-coding theorem.** Rate $R$ is achievable $\iff R > H$. Index the typical
set with $n(H+\varepsilon)$ bits behind a flag bit, spell out the rest verbatim; the
expensive branch has probability $\to 0$, so the rate slides to $H$. Below $H$ your
$2^{nR}$ codewords cover probability $\le 2^{nR}2^{-nH} \to 0$ and error $\to 1$.

*From* [2.1](lessons/02-01-asymptotic-equipartition-property.md), [2.2](lessons/02-02-source-coding-theorem.md)

### Building a code

| Job | Rule |
|---|---|
| Is a length set buildable? | Kraft: $\sum_i 2^{-\ell_i}\le 1$ — a test on **lengths**, not on a particular assignment (check prefix-freeness separately) |
| Cheap legal lengths | Shannon code $\ell_i = \lceil -\log_2 p_i\rceil$, giving $L < H+1$ |
| Optimal per-symbol code | **Huffman**: repeatedly merge the two smallest-probability nodes into one, until a single root remains; read codewords root→leaf |
| Expected length | $L = \sum_i p_i\ell_i$, with $H \le L < H+1$ |
| Where $L-H$ comes from | $L - H = D(p\,\|\,q) + \log_2\frac{1}{c}$ with $q_i = 2^{-\ell_i}/c$, $c=\sum_j 2^{-\ell_j}$ |
| Killing the $+1$ | block $n$ symbols (table grows as $\lvert\mathcal{X}\rvert^n$), or **arithmetic code**: $L \leftarrow L + WF(s)$, $W \leftarrow Wp(s)$, final width $=p(\text{message})$, cost $\approx-\log_2 p(\text{message})$ bits **once** |

Build Huffman **bottom-up**, read it **top-down**. Ties and the $0$/$1$ labelling
are free choices: several trees, identical optimal $L$.

*From* [2.3](lessons/02-03-prefix-codes-kraft-inequality.md), [2.4](lessons/02-04-huffman-coding.md), [2.5](lessons/02-05-arithmetic-coding.md)

### Capacities of the standard channels

| Channel | Capacity | Capacity-achieving input |
|---|---|---|
| noiseless, $m$ symbols | $\log_2 m$ | uniform |
| useless ($Y \perp X$) | $0$ | any |
| BSC, crossover $p$ | $1 - H(p)$ | uniform |
| BEC, erasure probability $e$ | $1 - e$ | uniform |
| Z-channel ($1\to0$ w.p. $a$) | $\max_\alpha\big[H_b(\alpha(1-a)) - \alpha H_b(a)\big]$ | **not** uniform (e.g. $\alpha=0.4$ at $a=\tfrac12$, giving $C\approx0.322$) |
| two BSCs in series ($p$ then $q$) | $1 - H(p\star q)$, $\ p\star q = p+q-2pq$ | uniform |
| Gaussian, power $P$, noise variance $N$ | $\tfrac12\log_2\!\big(1+\tfrac{P}{N}\big)$ per **real** dimension | $X\sim\mathcal{N}(0,P)$ |
| $k$ parallel Gaussians, budget $P$ | $\sum_i \tfrac12\log_2\!\big(1+\tfrac{P_i}{N_i}\big)$ | water-filling, below |

**Water-filling.** $P_i = (\nu - N_i)^+$ with $\nu$ set by $\sum_i(\nu-N_i)^+ = P$.
Procedure: assume all channels active, solve $k\nu - \sum N_i = P$; if some
$P_i < 0$, drop that channel and refill with the rest; repeat. Quiet channels get
the most; channels with $N_i > \nu$ get nothing.

*From* [3.1](lessons/03-01-discrete-channels-capacity.md), [3.2](lessons/03-02-canonical-channels.md), [1.5](lessons/01-05-data-processing-inequality.md), [4.2](lessons/04-02-gaussian-channel-water-filling.md)

### The channel-coding theorem, both halves

**Achievability** ($R < C$): pack noise balls. The output typical set holds
$\approx 2^{nH(Y)}$ sequences and each codeword's noise ball $\approx 2^{nH(Y\mid X)}$,
so about $2^{n(H(Y)-H(Y\mid X))} = 2^{nI(X;Y)} = 2^{nC}$ balls fit disjointly.

$$\Pr(\text{error}) \le \varepsilon + 2^{nR}2^{-n(I-3\varepsilon)} = \varepsilon + 2^{-n(I-R-3\varepsilon)} \to 0 \quad \text{when } R < C$$

Drawn from a **random** codebook — the average works, so some codebook works. It
proves existence and constructs nothing.

**Converse** ($R > C$): split $nR = H(W) = I(W;Y^n) + H(W\mid Y^n)$, cap the first
term at $nC$ by data processing, cap the second by Fano, and solve:

$$nR \le nC + 1 + P_e\,nR \quad\Longrightarrow\quad P_e \ge 1 - \frac{C}{R} - \frac{1}{nR}$$

*From* [3.3](lessons/03-03-noisy-channel-coding-achievability.md), [3.4](lessons/03-04-converse-fano-inequality.md)

### Real codes: Hamming(7,4)

$$p_1 = d_1\oplus d_2\oplus d_3,\qquad p_2 = d_1\oplus d_2\oplus d_4,\qquad p_3 = d_1\oplus d_3\oplus d_4$$

Send $(d_1,d_2,d_3,d_4,p_1,p_2,p_3)$. Recompute each check on receipt; the syndrome
$(s_1,s_2,s_3)$ is $000$ for a clean word, otherwise it is the unique fingerprint of
the flipped position — flip it back. Rate $4/7 \approx 0.57$, minimum distance
$d = 3$.

$$\text{distance } d \Rightarrow \text{corrects } \left\lfloor\tfrac{d-1}{2}\right\rfloor \text{ errors, detects } d-1$$

*From* [3.5](lessons/03-05-codes-in-practice.md)

### Differential entropy rules

$$H^\Delta = h(X) + \log\tfrac1\Delta + o(1) \xrightarrow{\Delta\to0} \infty$$
$$h(aX) = h(X) + \log\lvert a\rvert, \qquad h(X+c) = h(X)$$
$$h\big(\mathcal{N}(0,\sigma^2)\big) = \tfrac12\log(2\pi e\,\sigma^2), \qquad h\big(\text{Uniform}[0,a]\big) = \log a$$

$h$ alone is coordinate-dependent and can be negative; **differences** —
$I(X;Y) = h(X)-h(X\mid Y)$, capacity, $D(f\,\|\,g) = \int f\log\frac{f}{g}$ — are
invariant under a smooth invertible change of variables, because the same
correction appears in both terms and cancels.

*From* [4.1](lessons/04-01-differential-entropy.md)

### Rate–distortion

| Source and distortion | $R(D)$ |
|---|---|
| general | decreasing, convex; $R(0)=H(X)$ (discrete); $R(D_{\max})=0$ |
| Gaussian $\mathcal{N}(0,\sigma^2)$, squared error | $\tfrac12\log_2\frac{\sigma^2}{D}$ for $0<D\le\sigma^2$, else $0$ |
| Bernoulli$(p)$, Hamming distortion | $H(p) - H(D)$ for $0\le D\le\min(p,1-p)$, else $0$ |

Halving the allowed squared error on a Gaussian costs exactly half a bit per
sample. Note the mirror: capacity is $\max I$ over inputs, $R(D)$ is $\min I$ over
reconstructions — the same $\tfrac12\log_2(\cdot)$ skeleton, dual extremum.

*From* [4.3](lessons/04-03-rate-distortion.md)

### Maximum entropy and the thermodynamic dictionary

Maximize $H$ under a linear (moment) constraint with Lagrange multipliers and an
exponential family always falls out:

$$p_i = \frac{e^{-\beta E_i}}{Z}, \qquad Z = \sum_i e^{-\beta E_i}, \qquad H_{\max} = \ln Z + \beta U$$

$$S = kH = k\ln Z + \frac{U}{T}, \qquad \beta = \frac{1}{kT}, \qquad F = U - TS = -kT\ln Z$$

| What you fix | Support | Max-entropy law |
|---|---|---|
| nothing but the range | $[a,b]$ | uniform |
| the mean | $[0,\infty)$ | exponential |
| mean and variance | $\mathbb{R}$ | Gaussian $\mathcal{N}(\mu,\sigma^2)$, with $\lambda_2 = \frac{1}{2\sigma^2}$, $\lambda_1 = -\frac{\mu}{\sigma^2}$ |
| mean energy $U$ on a discrete state set | $\{x_i\}$ | Boltzmann $p_i \propto e^{-\beta E_i}$ |

Equivalently: maximizing $H$ under constraints is minimizing $D(p\,\|\,u)$ under the
same constraints, since $H(p) = \log n - D(p\,\|\,u)$.

*From* [4.4](lessons/04-04-maximum-entropy-stat-mech.md)

### The learning and decision dictionary

| Information object | What it is elsewhere |
|---|---|
| $H(p,q) = H(p) + D(p\,\|\,q)$ | cross-entropy loss; minimizing it over $q$ **is** maximum likelihood, and the floor $H(p)$ is why a perfect model's loss isn't zero |
| $I(\text{feature};\text{label})$ | a feature's predictiveness score |
| $I(T;Y) \le I(X;Y)$ for $Y\to X\to T$ | the information bottleneck — data processing wearing a learning hat |
| $I(X;Y) = H(X)-H(X\mid Y)$ | uncertainty a signal removes; multiply through a payoff table to price it (a fair-coin state with an 80-percent-accurate signal carries $0.278$ bits — worth 3 payoff units against a plus-or-minus-ten-unit bet, worth nothing without a decision) |

*From* [4.5](lessons/04-05-information-in-learning-inference.md)

## Assumed, not taught here

Tier 1: the course derives its own theorems but leans on the probability,
optimization, and algebra below without rebuilding them.

| Fact | Where it's taught |
|---|---|
| Weak law of large numbers, convergence in probability (the entire engine of the AEP) | [probability-theory 4.2](../probability-theory/lessons/04-02-laws-of-large-numbers.md), [4.1](../probability-theory/lessons/04-01-modes-of-convergence.md); lighter version in [prob-stat-refresher 3.2](../prob-stat-refresher/lessons/03-02-sums-and-law-of-large-numbers.md) |
| Expectation of a function of a random variable — $H = \mathbb{E}[-\log p(X)]$ is just this | [probability-theory 2.3](../probability-theory/lessons/02-03-lebesgue-integral-expectation.md), [prob-stat-refresher 2.1](../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md) |
| Conditional distributions, law of total probability, Bayes posteriors (used in 1.2 and in the value-of-a-signal example) | [prob-stat-refresher 1.2](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md), [probability-theory 5.1](../probability-theory/lessons/05-01-conditional-expectation.md) |
| Independence of random variables | [probability-theory 3.1](../probability-theory/lessons/03-01-independence.md) |
| Jensen's inequality in general (1.4 states and uses it; the subgradient proof lives elsewhere) | [probability-theory 2.5](../probability-theory/lessons/02-05-lp-spaces-inequalities.md) |
| Convexity and concavity as properties of a function | [grad-micro 1.1](../grad-micro/lessons/01-01-convexity-concavity-quasiconcavity.md), second-derivative test in [calc-refresher 1.4](../calc-refresher/lessons/01-04-optimization.md) |
| Gaussian density, variance, $\mathbb{E}[X^2]=\sigma^2$ | [prob-stat-refresher 2.3](../prob-stat-refresher/lessons/02-03-continuous-distributions.md) |
| Change of variables for densities (the Jacobian behind $h(aX)=h(X)+\log\lvert a\rvert$) | [probability-theory 2.3](../probability-theory/lessons/02-03-lebesgue-integral-expectation.md), [calc-refresher 4.3](../calc-refresher/lessons/04-03-multiple-integrals.md) |
| Union bound / countable subadditivity (the random-coding proof) | [probability-theory 1.3](../probability-theory/lessons/01-03-measures-probability-spaces.md) |
| Lagrange multipliers for equality constraints (max-entropy derivation) | [calc-refresher 4.2](../calc-refresher/lessons/04-02-multivariable-optimization-lagrange.md) |
| KKT with inequality constraints — solve, check feasibility, drop a constraint (water-filling) | [grad-micro 1.3](../grad-micro/lessons/01-03-inequality-constraints-kuhn-tucker.md) |
| Derivatives of $\log$ and of $x\log x$, used every time an entropy is maximized | [calc-refresher 1.2](../calc-refresher/lessons/01-02-differentiation-rules.md) |
| Row-stochastic (Markov transition) matrices | [linalg-refresher 3.2](../linalg-refresher/lessons/03-02-diagonalization.md) |
| SVD — how a matrix channel $Y=HX+Z$ becomes parallel independent channels | [linalg-refresher 5.2](../linalg-refresher/lessons/05-02-svd.md) |
| Finite fields $\mathrm{GF}(2)$, $\mathrm{GF}(2^m)$ — the algebra under linear and Reed–Solomon codes | [abstract-algebra 4.3](../abstract-algebra/lessons/04-03-finite-fields.md), [3.5](../abstract-algebra/lessons/03-05-characteristic-prime-fields.md) |
| Maximum likelihood estimation (what cross-entropy minimization turns out to be) | [prob-stat-refresher 4.1](../prob-stat-refresher/lessons/04-01-estimation-and-mle.md) |
| The Boltzmann factor and partition function *as physics* (4.4 derives them; the thermodynamics is developed here) | [stat-mech 3.1](../stat-mech/lessons/03-01-canonical-ensemble-boltzmann-factor.md), [3.2](../stat-mech/lessons/03-02-partition-function.md) |

## Pitfalls

### Entropy and units

- $H$ sees only the *probabilities*, never the outcome labels or values — relabeling heads/tails as win-a-thousand-dollars/lose-a-thousand-dollars changes nothing. *([1.1](lessons/01-01-entropy-uncertainty-surprise.md))*
- Peaked does not mean high entropy: entropy is **maximized** by the uniform and is zero for a sure thing. *([1.1](lessons/01-01-entropy-uncertainty-surprise.md), [1.4](lessons/01-04-relative-entropy-kl-jensen.md))*
- $\log\lvert\mathcal{X}\rvert$ is a ceiling attained only by the uniform; the shortfall is exactly $D(p\,\|\,u)$. *([1.4](lessons/01-04-relative-entropy-kl-jensen.md))*
- $0\log 0 = 0$ by convention (and by the limit) — zero cells are invisible to $H$, not undefined. *([1.1](lessons/01-01-entropy-uncertainty-surprise.md), [1.2](lessons/01-02-joint-conditional-entropy-chain-rule.md))*
- Switching bits to nats rescales the number, not the information — never compare across bases. *([1.1](lessons/01-01-entropy-uncertainty-surprise.md))*

### Conditioning, joints, and mutual information

- "Conditioning reduces entropy" is about the **average**: a single rare observation can leave you *more* uncertain, $H(Y\mid X{=}x) > H(Y)$. *([1.2](lessons/01-02-joint-conditional-entropy-chain-rule.md), [1.3](lessons/01-03-mutual-information.md))*
- $H(Y\mid X) \ne H(X\mid Y)$ in general — the chain rule's total is order-free, its installments are not. *([1.2](lessons/01-02-joint-conditional-entropy-chain-rule.md))*
- $I(X;Y)$ *is* symmetric, even when the two conditionals differ; the semicolon is not a typo for a comma. *([1.3](lessons/01-03-mutual-information.md))*
- The two-circle Venn picture is exact; the three-circle version lies — the triple overlap $I(X;Y;Z)$ can be negative. *([1.3](lessons/01-03-mutual-information.md))*

### KL, Jensen, and processing

- $D$ is asymmetric and violates the triangle inequality — a divergence, not a distance; in modelling, forward and reverse KL fit differently. *([1.4](lessons/01-04-relative-entropy-kl-jensen.md))*
- Jensen's direction flips with curvature: $\ge$ for convex $\varphi$, $\le$ for concave (like $\log$). Getting it backwards silently flips every downstream sign. *([1.4](lessons/01-04-relative-entropy-kl-jensen.md))*
- The data-processing inequality needs the Markov structure. Let the processing see side information ($Z=(Y,N)$ with $Y = X\oplus N$) and "information" can appear to rise — the hypothesis failed, not the theorem. *([1.5](lessons/01-05-data-processing-inequality.md))*
- More bits is not more useful: $g(Y)$ carries no more information than $Y$ yet may be far easier to use. Processing trades information for convenience. *([1.5](lessons/01-05-data-processing-inequality.md), [4.5](lessons/04-05-information-in-learning-inference.md))*

### Typicality and asymptotics

- The single **most probable** sequence is usually **atypical** — typical means average surprise $\approx H$, not maximum probability. *([2.1](lessons/02-01-asymptotic-equipartition-property.md))*
- $2^{nH}$ versus $2^{n\log\lvert\mathcal{X}\rvert}$ differ *exponentially*; that gap is the compressibility, and it closes only for a uniform (incompressible) source. *([2.1](lessons/02-01-asymptotic-equipartition-property.md), [2.2](lessons/02-02-source-coding-theorem.md))*
- The AEP is asymptotic and probabilistic — *almost all* probability, for *large* $n$. Any short sequence may be wildly atypical. *([2.1](lessons/02-01-asymptotic-equipartition-property.md))*
- Achievability at $R<C$ and reliability generally are large-$n$ statements; finite blocks pay a residual error and a rate penalty. *([3.3](lessons/03-03-noisy-channel-coding-achievability.md))*

### Codes and code length

- $H$ is a **block** limit: a per-symbol code can be stuck at $H+1$, and that gap is brutal on skewed sources (a $0.9$ coin costs 1 bit to carry $0.469$ bits). *([2.2](lessons/02-02-source-coding-theorem.md), [2.4](lessons/02-04-huffman-coding.md))*
- "Huffman is optimal" means optimal among **integer-length per-symbol prefix codes** — not that it reaches $H$. Blocking or arithmetic coding closes the gap. *([2.4](lessons/02-04-huffman-coding.md), [2.5](lessons/02-05-arithmetic-coding.md))*
- Kraft certifies a length *set*, not your particular assignment — check prefix-freeness yourself. Uniquely decodable but non-prefix codes buy nothing (Kraft–McMillan). *([2.3](lessons/02-03-prefix-codes-kraft-inequality.md))*
- Merge bottom-up, read top-down; ties and branch labels are free, so the tree isn't unique but $L$ is. *([2.4](lessons/02-04-huffman-coding.md))*
- No code beats $H$ losslessly — a sub-entropy claim is a perpetual-motion claim. Real compressors (gzip, PNG) win by modelling a better $p$ (entropy *rate*), not by breaking the theorem. *([2.2](lessons/02-02-source-coding-theorem.md), [2.5](lessons/02-05-arithmetic-coding.md))*
- Arithmetic coding's intervals underflow floating point within a few dozen symbols — real implementations renormalize and emit incrementally. *([2.5](lessons/02-05-arithmetic-coding.md))*

### Channels and capacity

- You optimize the **input distribution**, never the noise; $C$ is a property of the channel. *([3.1](lessons/03-01-discrete-channels-capacity.md))*
- Uniform input is optimal only for *symmetric* channels — the Z-channel tilts to $0.4/0.6$. Solve the maximization. *([3.1](lessons/03-01-discrete-channels-capacity.md), [3.2](lessons/03-02-canonical-channels.md))*
- BSC capacity is $1-H(p)$, **not** $1-p$: you pay the entropy of the noise. Only $p=\tfrac12$ kills the channel, and $C(p)=C(1-p)$. *([3.2](lessons/03-02-canonical-channels.md))*
- Erasures are cheaper than flips at the same error rate, because an erasure is **located** and a flip is hidden. *([3.2](lessons/03-02-canonical-channels.md))*
- $C$ is an asymptotic ceiling reached only by coding across many uses — not a per-symbol promise, and the units are always bits per channel use. *([3.1](lessons/03-01-discrete-channels-capacity.md), [3.3](lessons/03-03-noisy-channel-coding-achievability.md))*
- $R<C$ versus $R>C$ is a wall, not a dial: below it error $\to 0$, above it $P_e \ge 1-C/R$ forever, for every code that will ever be invented. *([3.3](lessons/03-03-noisy-channel-coding-achievability.md), [3.4](lessons/03-04-converse-fano-inequality.md))*
- Random coding proves **existence**, not construction — no encoder, no decoder. Practical codes came fifty years later. *([3.3](lessons/03-03-noisy-channel-coding-achievability.md), [3.5](lessons/03-05-codes-in-practice.md))*
- A large minimum distance only fixes the *guaranteed* correction radius; block length and decoder matter more (LDPC beats short high-$d$ codes). And "perfect" (Hamming(7,4)) means no wasted syndromes, not near-capacity. *([3.5](lessons/03-05-codes-in-practice.md))*

### Continuous information

- $h$ can be **negative** and is not a bit count; $H \ge 0$ does not survive the crossing. *([4.1](lessons/04-01-differential-entropy.md))*
- $h$ moves with your units ($h(aX) = h(X)+\log\lvert a\rvert$); only differences — $I$, $C$, $D(f\,\|\,g)$ — are invariant and physical. *([4.1](lessons/04-01-differential-entropy.md))*
- Match the maximizer to the constraint: Gaussian under a **variance** budget, uniform under a **range** budget. *([4.1](lessons/04-01-differential-entropy.md), [4.4](lessons/04-04-maximum-entropy-stat-mech.md))*
- Capacity grows only *logarithmically* in power — near high SNR, doubling power buys half a bit. *([4.2](lessons/04-02-gaussian-channel-water-filling.md))*
- Water-filling favours the **quiet** channels; "spread it evenly" and "prop up the weak links" are both wrong, and $N_i > \nu$ gets exactly zero. *([4.2](lessons/04-02-gaussian-channel-water-filling.md))*
- The $\tfrac12$ in $\tfrac12\log(1+\mathrm{SNR})$ is per **real** dimension — a complex channel carries twice that. And $\mathrm{SNR}=P/N$ uses the noise **variance**, not its standard deviation. *([4.2](lessons/04-02-gaussian-channel-water-filling.md))*

### Distortion, max-entropy, and inference

- $R(D)$ is a **minimum** (capacity is a maximum) — swapping them inverts every inequality. *([4.3](lessons/04-03-rate-distortion.md))*
- $D$ bounds the **average** distortion; individual symbols can be reconstructed far worse. *([4.3](lessons/04-03-rate-distortion.md))*
- Extra tolerance can never raise the required rate: $R$ is decreasing and convex, and $R(0)=H$ for a discrete source (but $\to\infty$ for a continuous one). *([4.3](lessons/04-03-rate-distortion.md))*
- Max-entropy is "assume as little as the constraints force," not "assume maximum randomness"; the exponential shape is *forced* by a linear constraint, not postulated. *([4.4](lessons/04-04-maximum-entropy-stat-mech.md))*
- $\beta$ is not bookkeeping — it is $1/kT$; and Shannon's $H$ and thermodynamic $S$ are the same quantity, $S = kH$, not an analogy. *([4.4](lessons/04-04-maximum-entropy-stat-mech.md))*
- Cross-entropy and KL differ by the constant $H(p)$, so they share a minimizer — which is why a perfectly fit model's loss is $H(p)$, not zero. *([4.5](lessons/04-05-information-in-learning-inference.md))*
- High mutual information is not automatic value: $I$ is payoff-blind, and a signal is worth money only once a decision problem exists. *([4.5](lessons/04-05-information-in-learning-inference.md))*
