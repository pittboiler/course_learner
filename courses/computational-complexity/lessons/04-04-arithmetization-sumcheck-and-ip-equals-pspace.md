# Complexity Theory · Lesson 4.4: Arithmetization, sumcheck & IP = PSPACE

> ⏱ ~15 min · Module 4: Randomized & interactive computation · Builds on: [4.2 (amplification)](04-02-amplification-and-placing-bpp.md), [4.3 (interactive proofs)](04-03-interactive-proofs.md), [2.4 (TQBF)](02-04-tqbf-and-pspace-completeness.md) · Unlocks: [4.5 (PCP)](04-05-probabilistically-checkable-proofs.md)

## Why this matters

In 1989 the prevailing view was that interactive proofs were not much stronger than NP. There was an oracle relative to which $\mathsf{coNP}\not\subseteq\mathsf{IP}$, and by the reasoning of [Lesson 5.6](05-06-relativization-natural-proofs-algebrization.md) that is normally excellent evidence a containment is false.

Within a few months the view was demolished. Lund, Fortnow, Karloff and Nisan showed $\mathsf{coNP}\subseteq\mathsf{IP}$, and Shamir completed it to $\mathsf{IP} = \mathsf{PSPACE}$. **A polynomial-time verifier with coins, talking to an untrusted prover, can be convinced of any statement decidable in polynomial space** — including that a formula is unsatisfiable, or that the first player wins a generalized game.

The technique responsible is **arithmetization**: replace Boolean formulas by polynomials over a finite field, so that the rigid combinatorics of truth assignments becomes algebra, with algebra's most useful property — two distinct low-degree polynomials agree almost nowhere. The **sumcheck protocol** turns that property into a proof system, and it is the one piece of machinery in this module you can run by hand in five minutes.

It is also the most directly deployed idea in the course. Sumcheck is the engine inside modern succinct proof systems, and the reason a blockchain can verify a computation it did not perform.

## The idea

**Step 1: turn Boolean into algebraic.** Work over a finite field $\mathbb{F}_p$ for a prime $p$ larger than any count you care about. Replace each Boolean variable by a field element, and each logical connective by arithmetic that agrees with it on $\{0,1\}$:

$$\lnot x \;\rightsquigarrow\; 1 - x, \qquad x \wedge y \;\rightsquigarrow\; xy, \qquad x \vee y \;\rightsquigarrow\; 1 - (1-x)(1-y).$$

Apply this to a CNF formula $\varphi$ and you get a polynomial $\tilde\varphi$ which, restricted to $\{0,1\}^n$, is exactly the indicator of satisfaction. Off the cube it takes other values, and **that is the whole point** — the polynomial extends the formula to a much larger domain where random sampling has teeth.

Consequently

$$\sum_{b\in\{0,1\}^n}\tilde\varphi(b) \;=\; \#\text{SAT}(\varphi),$$

so a claim about a $\#\mathsf{P}$ quantity has become a claim about a sum of polynomial values.

**Step 2: check the sum without computing it.** The verifier cannot evaluate $2^n$ terms. Sumcheck removes one variable per round.

The prover claims $\sum_{b} \tilde\varphi(b) = H$. The verifier asks for the univariate polynomial

$$g_1(X) \;=\; \sum_{b_2,\dots,b_n\in\{0,1\}} \tilde\varphi(X, b_2,\dots,b_n),$$

which has low degree — at most the degree of $\tilde\varphi$ in its first variable, so at most the number of clauses. The prover sends its coefficients, a short message.

The verifier checks $g_1(0) + g_1(1) = H$. If that fails, reject. If it passes, the verifier picks a **random** $r_1 \in \mathbb{F}_p$, computes $g_1(r_1)$, and demands the prover now prove

$$\sum_{b_2,\dots,b_n}\tilde\varphi(r_1, b_2,\dots,b_n) = g_1(r_1),$$

a claim with one fewer variable. Recurse. After $n$ rounds every variable is fixed to a random field element and the verifier simply **evaluates $\tilde\varphi$ itself** at that single point, comparing with the final claim.

**Why a cheating prover is caught.** If the prover's claimed $H$ is wrong, the polynomial $g_1$ it sends must differ from the true one — otherwise the round-one check fails. Two distinct polynomials of degree $d$ agree on at most $d$ points, so a random $r_1$ lands where they agree with probability at most $d/p$. Miss that, and the prover is now stuck defending a *false* claim one variable smaller, and the argument repeats. **Total soundness error at most $nd/p$**, which is tiny for a large field.

The key move is the one to remember: **the verifier never needs the sum, only the ability to spot-check a polynomial identity at a random point.** Everything else in the protocol is bookkeeping.

## The formal version

**Definition ([arithmetization](../reference.md#arithmetization)).** For a 3CNF formula $\varphi = \bigwedge_{j=1}^m C_j$ over $x_1,\dots,x_n$, define over $\mathbb{F}_p$

$$\tilde\varphi(x_1,\dots,x_n) \;=\; \prod_{j=1}^m\Big(1 - \prod_{\ell \in C_j}(1 - \hat\ell)\Big), \qquad \hat\ell = \begin{cases}x_i & \ell = x_i\\ 1 - x_i & \ell = \lnot x_i.\end{cases}$$

On $\{0,1\}^n$, $\tilde\varphi$ equals 1 if $\varphi$ is satisfied and 0 otherwise. Its degree in each variable is at most $m$.

**Theorem ([sumcheck](../reference.md#sumcheck-protocol)).** Let $g$ be an $n$-variate polynomial over $\mathbb{F}_p$ of degree at most $d$ in each variable, evaluable by the verifier in polynomial time. There is an $n$-round interactive proof for the claim $\sum_{b\in\{0,1\}^n} g(b) = H$ with perfect completeness and soundness error at most $nd/p$.

*Protocol.* Set $H_0 = H$. In round $i$, with $r_1,\dots,r_{i-1}$ already fixed:

1. The prover sends a univariate polynomial $g_i$ of degree $\le d$, purportedly $g_i(X) = \sum_{b_{i+1},\dots,b_n} g(r_1,\dots,r_{i-1},X,b_{i+1},\dots,b_n)$.
2. The verifier checks $g_i(0) + g_i(1) = H_{i-1}$, rejecting if not.
3. The verifier picks $r_i \in \mathbb{F}_p$ uniformly, sets $H_i = g_i(r_i)$, and continues.

After round $n$, the verifier evaluates $g(r_1,\dots,r_n)$ directly and accepts iff it equals $H_n$.

*Soundness.* Suppose $\sum_b g(b) \ne H$. Then in round 1 the prover cannot send the true $g_1$ (it would fail the check), so it sends some $h_1 \ne g_1$; by the Schwartz–Zippel bound for univariate polynomials these agree on at most $d$ of the $p$ field elements, so $\Pr[h_1(r_1) = g_1(r_1)] \le d/p$. Unless that happens, the new claim $H_1 = h_1(r_1)$ is false, and the argument recurses. Union bound over $n$ rounds: $nd/p$. $\blacksquare$

**Corollary ([coNP is in IP](../reference.md#conp-in-ip)).** $\overline{\text{SAT}} \in \mathsf{IP}$: run sumcheck on $\tilde\varphi$ with the claim $H = 0$.

**Theorem ([Shamir, 1990](../reference.md#ip-equals-pspace)).** $\mathsf{IP} = \mathsf{PSPACE}$.

*The shape.* $\mathsf{IP}\subseteq\mathsf{PSPACE}$ is [4.3](04-03-interactive-proofs.md)'s recursion over the message tree. For the converse, arithmetize TQBF ([2.4](02-04-tqbf-and-pspace-completeness.md)) rather than SAT: an $\exists x$ becomes $\sum_{x\in\{0,1\}}$ and a $\forall x$ becomes $\prod_{x\in\{0,1\}}$, and the same round-by-round variable elimination applies.

One new difficulty appears, and it is the technical heart. **Products square the degree**, so after $n$ alternations the degree is $2^n$ and the prover's messages are no longer short. The fix is a *degree-reduction* operator $R_i$ inserted between quantifiers, which replaces a polynomial by its multilinear extension in variable $i$ — an operation that is degree-reducing, agrees on $\{0,1\}$, and is itself checkable by one more round of the same kind.

## Picture

![A message sequence chart with a blue Verifier line on the left and a coral Prover line on the right, and three rounds of arrows from prover to verifier. Round one shows the verifier checking three plus three equals six, then picking r one equals five and updating the claim to three. Round two checks one plus two equals three, picks r two equals eleven, claim becomes twelve. Round three checks fifty-one plus fifty-eight equals twelve, picks r three equals three, claim becomes forty-four. Finally the verifier evaluates the polynomial itself at five, eleven, three, obtains forty-four and accepts.](assets/04-04-fig1.svg)

This is a complete, verified run on $\varphi = (x_1\vee x_2\vee\lnot x_3)\wedge(\lnot x_1\vee x_2\vee x_3)$ over $\mathbb{F}_{97}$, and the claim being proved is that the number of satisfying assignments is 6.

Follow the claim as it shrinks. It starts as a statement about a sum of **8** terms and becomes, after three rounds, a statement about **one** field element — which the verifier checks by doing the one thing it can afford, evaluating the polynomial at a single point. Each round trades one Boolean variable for one random field element.

Check the round-three arithmetic, because it is the one that looks wrong: $51 + 58 = 109$, and $109 \equiv 12 \pmod{97}$, matching the claim. **All the arithmetic is modular**, which is easy to forget when the earlier rounds happen to stay below the modulus.

The soundness is where the field size earns its keep. Each $g_i$ has degree at most $m = 2$, so a false polynomial agrees with the true one at no more than 2 of the 97 field elements — the verifier's random choice catches the lie with probability at least $95/97$ per round, and at least $1 - 3\cdot2/97 = 0.938$ overall. Take $p$ of a few hundred bits and the error becomes negligible while the messages stay short.

## Worked examples

**Example 1 (mechanical): run one round of sumcheck.** Take the run above. The prover claims $\sum_{b\in\{0,1\}^3}\tilde\varphi(b) = 6$.

*Round 1.* The prover sends $g_1(X) = \sum_{b_2,b_3}\tilde\varphi(X,b_2,b_3)$. The verifier does not trust it but can check the one identity that must hold:

$$g_1(0) + g_1(1) = 3 + 3 = 6 = H. \checkmark$$

Interpret those two numbers: $g_1(0) = 3$ is the number of satisfying assignments with $x_1 = 0$, and $g_1(1) = 3$ the number with $x_1 = 1$. Their sum is the total, which is exactly the identity being checked. Verify independently: the six models of $\varphi$ are $000, 010, 011, 101, 110, 111$ — three with $x_1 = 0$ and three with $x_1 = 1$. ✓

The verifier picks $r_1 = 5$ and computes $g_1(5) = 3$. **This number has no combinatorial meaning** — it is the polynomial evaluated off the Boolean cube — and that is precisely why a cheating prover cannot have anticipated it.

*Round 2.* The claim is now $\sum_{b_2,b_3}\tilde\varphi(5,b_2,b_3) = 3$. The prover sends $g_2$, and the verifier checks $g_2(0)+g_2(1) = 1 + 2 = 3$. ✓ It picks $r_2 = 11$, giving the new claim $g_2(11) = 12$.

*Round 3.* Check $g_3(0)+g_3(1) = 51 + 58 = 109 \equiv 12 \pmod{97}$. ✓ Pick $r_3 = 3$; the claim becomes $g_3(3) = 44$.

*Final.* The verifier evaluates $\tilde\varphi(5,11,3)$ itself — one polynomial evaluation, no sum — and gets $44$. Match: **accept**.

**Example 2 (why you'd care): what made the community wrong in 1989.** Before these results, the evidence said $\mathsf{coNP}\not\subseteq\mathsf{IP}$: Fortnow and Sipser had exhibited an oracle $B$ with $\mathsf{coNP}^B\not\subseteq\mathsf{IP}^B$.

By the standards of [Lesson 5.6](05-06-relativization-natural-proofs-algebrization.md), that is strong evidence. An oracle separation means no **relativizing** proof can establish the containment, and essentially every technique then known relativized — diagonalization, simulation, every argument that treats the machine as a black box.

The resolution is that arithmetization does **not** relativize. A formula gets turned into a polynomial by looking *inside* its structure, clause by clause, and an oracle is exactly the thing you cannot look inside. **The barrier was real and the technique stepped around it**, which is why the result was a shock and why it remains the standard counterexample to over-reading oracle results.

The lesson generalizes and is worth carrying into [Module 5](05-01-boolean-circuits-and-p-poly.md). An oracle separation tells you a whole family of techniques will fail; it tells you nothing about techniques that examine the object's internal structure. Since 1990 that observation has shaped what people try — and motivated **algebrization**, a strengthened barrier designed specifically to cover arithmetization, which is [5.6](05-06-relativization-natural-proofs-algebrization.md)'s closing act.

## Watch out

- **You might think** the verifier checks the prover's polynomial is correct — **but actually** it checks only one identity per round, $g_i(0)+g_i(1) = H_{i-1}$, and then a random evaluation. It never verifies $g_i$ is the true partial sum, and does not need to: a wrong $g_i$ is caught with high probability at the random point.
- **You might think** the field size is a technicality — **but actually** soundness is $nd/p$, so $p$ must exceed $nd$ comfortably. Over $\mathbb{F}_2$ the protocol is worthless, since a degree-2 polynomial can agree with another at both field elements. **Randomness needs room.**
- **You might think** arithmetization could prove $\mathsf{P} = \mathsf{NP}$-style results — **but actually** the algebrization barrier says it cannot, on its own: extending the oracle to a low-degree polynomial still gives separations. It defeated relativization and then met a barrier built to catch it.
- **You might think** the TQBF protocol is the SAT protocol with more variables — **but actually** the $\forall$ quantifiers become products, and products **square** the degree, so a naive extension has degree $2^n$ and messages of exponential length. The degree-reduction operators are not decoration; without them the protocol does not exist.
- **You might think** $\mathsf{IP} = \mathsf{PSPACE}$ means the prover's job is easy — **but actually** the honest prover must compute partial sums over exponentially many assignments, so it needs PSPACE power. **The verifier is cheap and the prover is not**, which is exactly the asymmetry that makes the model useful for outsourcing.

## One-liner

> Turn a formula into a polynomial and an exponential sum becomes a claim you can spot-check at one random point, because two different low-degree polynomials agree almost nowhere.

## Problems

**P1 (🟢)** A sumcheck protocol runs on a polynomial in $n = 40$ variables of degree at most $d = 3$ in each, over $\mathbb{F}_p$. (a) Give the soundness error bound as a formula and its value for $p = 2^{61} - 1$. (b) Give the number of field elements the prover sends in total, assuming it sends $d+1$ evaluations per round. (c) State how many terms the verifier would have had to sum without the protocol.

**P2 (🟡)** In the worked run, round 3 has $g_3(0) = 51$ and $g_3(1) = 58$ over $\mathbb{F}_{97}$, and the claim being defended is 12. (a) Verify the check, showing the modular reduction. (b) A cheating prover wants to defend the false claim 13 instead. Explain what it must send in round 1 and give the probability that a uniform $r_1$ catches it, as a fraction. (c) Give the overall soundness bound for this three-round run and say what field size would push it below $2^{-40}$.

**P3 (🔴, optional)** (a) Arithmetize $\varphi = (x_1 \vee \lnot x_2)$ over $\mathbb{F}_p$, giving $\tilde\varphi$ explicitly, and verify it equals the satisfaction indicator at all four Boolean points. (b) Compute $\sum_{b\in\{0,1\}^2}\tilde\varphi(b)$ and check it against the number of satisfying assignments. (c) Give $g_1(X)$ explicitly and verify $g_1(0)+g_1(1)$ equals your answer to (b).

<details>
<summary>Solutions</summary>

**P1**

(a) The bound is $nd/p$. With $n = 40$, $d = 3$, $p = 2^{61}-1 \approx 2.306\times10^{18}$:

$$\frac{nd}{p} = \frac{120}{2.306\times10^{18}} \approx 5.2\times10^{-17}.$$

(b) A degree-$d$ univariate polynomial is determined by $d+1 = 4$ evaluations, and there are $n = 40$ rounds: $40\times4 = \mathbf{160}$ field elements, about 160 × 61 bits ≈ 1.2 kilobytes for the entire proof.

(c) $2^{40} \approx 1.1\times10^{12}$ terms — over a trillion. **The proof is a kilobyte and the claim is about a trillion-term sum**, which is the whole reason these protocols are deployed.

**P2**

(a) $g_3(0) + g_3(1) = 51 + 58 = 109$. Reducing modulo 97: $109 - 97 = \mathbf{12}$, which equals the claim $H_2 = 12$. ✓ The check passes.

(b) To defend $H = 13$ the prover must send some $h_1$ with $h_1(0)+h_1(1) = 13$. The true $g_1$ has $g_1(0)+g_1(1) = 6 \ne 13$, so $h_1 \ne g_1$. Both have degree at most $m = 2$, so $h_1 - g_1$ is a nonzero polynomial of degree at most 2 and has at most 2 roots in $\mathbb{F}_{97}$.

Hence $\Pr_{r_1}[h_1(r_1) = g_1(r_1)] \le 2/97$, and the verifier's random choice leaves the prover defending a false claim with probability at least

$$1 - \frac{2}{97} = \frac{\mathbf{95}}{\mathbf{97}} \approx 0.979.$$

(c) Union bound over the three rounds: $nd/p = 3\times2/97 = 6/97 \approx \mathbf{0.062}$. To push $nd/p$ below $2^{-40} \approx 9.1\times10^{-13}$ with $n = 3$, $d = 2$ requires

$$p > \frac{6}{9.1\times10^{-13}} \approx 6.6\times10^{12},$$

so a prime of about 43 bits suffices — in practice one would take 128 or 256 bits and stop thinking about it.

**P3**

(a) The clause $(x_1 \vee \lnot x_2)$ has $\hat\ell$ values $x_1$ and $1 - x_2$, so

$$\tilde\varphi(x_1,x_2) = 1 - (1-x_1)\big(1 - (1-x_2)\big) = 1 - (1-x_1)x_2 = 1 - x_2 + x_1x_2.$$

Check all four Boolean points:

| $x_1$ | $x_2$ | $\varphi$ | $1 - x_2 + x_1x_2$ |
|---|---|---|---|
| 0 | 0 | true | $1 - 0 + 0 = 1$ ✓ |
| 0 | 1 | **false** | $1 - 1 + 0 = 0$ ✓ |
| 1 | 0 | true | $1 - 0 + 0 = 1$ ✓ |
| 1 | 1 | true | $1 - 1 + 1 = 1$ ✓ |

(b) $\sum_b \tilde\varphi(b) = 1 + 0 + 1 + 1 = \mathbf{3}$, and $\varphi$ has exactly 3 satisfying assignments (all but $x_1=0, x_2=1$). ✓

(c) $g_1(X) = \sum_{b_2\in\{0,1\}}\tilde\varphi(X, b_2) = \tilde\varphi(X,0) + \tilde\varphi(X,1)$:

$$\tilde\varphi(X,0) = 1 - 0 + 0 = 1, \qquad \tilde\varphi(X,1) = 1 - 1 + X = X,$$

so $g_1(X) = 1 + X$, a degree-1 polynomial as expected (the formula has $m = 1$ clause).

Check: $g_1(0) + g_1(1) = 1 + 2 = \mathbf{3}$, matching (b). ✓ And note $g_1(0) = 1$ is the number of satisfying assignments with $x_1 = 0$, while $g_1(1) = 2$ is the number with $x_1 = 1$ — which is the combinatorial reading that holds only at the Boolean points.

</details>

## Flashback

**From Lesson 4.2 (amplification & placing BPP):** A randomized algorithm is correct with probability $0.75$ on every input. (a) Give $\delta$ and the Chernoff exponent as a function of the number of runs $t$. (b) Give the number of runs needed for error below $2^{-50}$. (c) Compare that with the number of rounds a conjunctive test with per-round failure probability $1/2$ needs for the same error, and explain the difference in one sentence.

<details>
<summary>Solution</summary>

(a) $\delta = 0.75 - 0.5 = \mathbf{0.25}$, so the bound is $e^{-2t(0.25)^2} = \mathbf{e^{-t/8}}$.

(b) Solve $e^{-t/8}\le 2^{-50}$: $t \ge 8\times50\ln 2 = 8\times34.66 = 277.3$, so **278 runs**.

(c) A conjunctive test with per-round failure $1/2$ reaches error $2^{-50}$ in exactly **50 rounds** — the error is $2^{-k}$ outright.

The difference is that a majority vote must overcome *variance*: it tolerates a minority of wrong runs, so it needs enough runs for the sample mean to concentrate, and the cost scales as $1/\delta^2$. A conjunctive test has no tolerance at all — a single failed round rejects — so each round multiplies the error directly. **Amplification by "all must pass" is far cheaper than amplification by "most must pass", when the protocol permits it**, which is why interactive proofs with perfect completeness amplify so much faster than BPP algorithms.

</details>

## Connections

- **Backward:** the protocol is [4.3](04-03-interactive-proofs.md)'s model with an algebraic claim replacing a graph-identification challenge, and the object being counted is [3.1](03-01-sharp-p-counting-is-harder-than-deciding.md)'s $\#\text{SAT}$. The quantified formula that Shamir's full proof arithmetizes is [2.4](02-04-tqbf-and-pspace-completeness.md)'s TQBF.
- **Forward:** [4.5](04-05-probabilistically-checkable-proofs.md) keeps the randomness and the low-degree machinery but removes the interaction, encoding the entire conversation into a static proof that can be spot-checked. [5.6](05-06-relativization-natural-proofs-algebrization.md) explains why this lesson's technique evaded the relativization barrier, and what barrier was built afterwards to catch it.
- **Sideways:** "two distinct low-degree polynomials agree almost nowhere" is the Schwartz–Zippel lemma, the same fact underlying Reed–Solomon codes in [`communications` 4.3](../../communications/lessons/04-03-block-codes.md) — there it gives error correction, here it gives soundness, and in both cases the mechanism is that a polynomial is over-determined by its evaluations. Modular arithmetic over $\mathbb{F}_p$ is [`number-theory` 2.1](../../number-theory/lessons/02-01-congruences-arithmetic-mod-n.md)'s.
