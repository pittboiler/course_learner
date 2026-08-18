# Quantum Optics & Photonics · Lesson 4.4: Entangled photons & Bell tests

> ⏱ ~15 min · Module 4: Cavity QED, entanglement & applications · Builds on: [4.3 Parametric down-conversion](04-03-nonlinear-optics-parametric-down-conversion.md) · Unlocks: [4.5 A taste of quantum information](04-05-quantum-information-taste.md)

## Why this matters

Einstein called it "spooky action at a distance" and thought it proved quantum mechanics was incomplete — that behind the randomness sat ordinary hidden variables we just hadn't measured yet. For thirty years this was philosophy. Then John Bell found a number you could actually *measure* that comes out one way if the world is locally realistic and a different way if quantum mechanics is right. Entangled photon pairs from [4.3](04-03-nonlinear-optics-parametric-down-conversion.md)'s down-converter are the cleanest system ever built for running that test — and every time it's run, quantum mechanics wins and local realism dies. This is the deepest experimental result quantum optics has produced, and it's the physical bedrock under [4.5](04-05-quantum-information-taste.md)'s quantum cryptography and computing.

## The idea

Encode a bit in a single photon's polarization: horizontal $|H\rangle$ is "0", vertical $|V\rangle$ is "1". That's a **qubit** — but unlike a classical bit it can be *any* superposition, and a polarizer tilted at angle $\theta$ asks the photon "are you aligned with me?" The photon answers yes or no, randomly, with odds set by how close its polarization is to $\theta$. That single-photon randomness is just [Malus's law](../../waves-optics/syllabus.md) reborn: the classical "fraction of intensity transmitted" becomes a quantum "probability this one photon passes."

Now make *two* photons in a shared state where neither one has a definite polarization, yet they're locked opposite: whatever angle Alice measures her photon along, Bob's photon will answer the *opposite* — every single time, in every basis. Each result alone is a coin flip; the pair is perfectly anti-correlated. Bell's insight: if each photon secretly carried a pre-written answer sheet (a "hidden variable" fixed at the source), the *pattern* of correlations across different analyzer-angle combinations can only be so strong. Quantum entanglement blows past that ceiling. Measure the ceiling, measure the reality — and see which one you live in.

## The formal version

**Polarization qubit.** A photon's polarization state lives in a 2D space spanned by $|H\rangle$ and $|V\rangle$. A linear analyzer set at angle $\theta$ (from horizontal) transmits the state

$$|\theta\rangle = \cos\theta\,|H\rangle + \sin\theta\,|V\rangle,$$

and blocks the orthogonal $|\theta_\perp\rangle = |\theta + 90^\circ\rangle$. A photon prepared in $|\phi\rangle$ passes the analyzer with probability

$$P_{\text{pass}} = |\langle\theta|\phi\rangle|^2 = \cos^2(\theta-\phi).$$

*In words: the chance a single photon gets through a polarizer is the cosine-squared of the angle between them — Malus's law, one photon at a time.* We label the two outcomes $+1$ (transmitted, along $\theta$) and $-1$ (blocked, along $\theta_\perp$).

**Bell states.** Two qubits have a 4D space; four maximally-entangled states form a basis for it — the **Bell states**:

$$|\Phi^\pm\rangle = \tfrac{1}{\sqrt2}\big(|H\rangle_A|H\rangle_B \pm |V\rangle_A|V\rangle_B\big), \qquad |\Psi^\pm\rangle = \tfrac{1}{\sqrt2}\big(|H\rangle_A|V\rangle_B \pm |V\rangle_A|H\rangle_B\big).$$

We'll work with the **singlet** $|\Psi^-\rangle = \tfrac{1}{\sqrt2}(|H\rangle_A|V\rangle_B - |V\rangle_A|H\rangle_B)$, the pair type-II SPDC ([4.3](04-03-nonlinear-optics-parametric-down-conversion.md)) emits where the two polarization cones cross. *In words: the pair is "one H and one V," but which photon is which is genuinely undecided until measured.*

Its defining magic: **the singlet looks the same in every basis.** For any angle $\alpha$, $|\Psi^-\rangle = \tfrac{1}{\sqrt2}(|\alpha\rangle_A|\alpha_\perp\rangle_B - |\alpha_\perp\rangle_A|\alpha\rangle_B)$ (up to an overall phase). So if Alice measures along $\alpha$ and gets $+1$, Bob's photon instantly collapses to $|\alpha_\perp\rangle$ — perfectly anti-aligned, guaranteed, whatever $\alpha$ she chose. Individually each outcome is 50/50 random, so **no information travels** (Alice can't signal by choosing $\alpha$); only when they later compare notes does the correlation appear.

**Correlation function.** With Alice's analyzer at $a$ and Bob's at $b$, define $E(a,b)$ = average of the product of their $\pm1$ outcomes. Using the anti-aligned collapse: Alice gets $+1$ with prob $\tfrac12$, after which Bob's photon is $|a_\perp\rangle$ and passes his analyzer (outcome $+1$) with prob $|\langle b|a_\perp\rangle|^2 = \sin^2(b-a)$. Tallying all four combinations,

$$P_{++}=P_{--}=\tfrac12\sin^2(a-b), \qquad P_{+-}=P_{-+}=\tfrac12\cos^2(a-b),$$

$$\boxed{\,E(a,b) = P_{++}+P_{--}-P_{+-}-P_{-+} = \sin^2(a-b)-\cos^2(a-b) = -\cos\!\big[2(a-b)\big].\,}$$

*In words: the correlation depends only on the relative angle; aligned analyzers ($a=b$) give $E=-1$ (perfect anti-correlation), crossed ones ($a-b=90^\circ$) give $E=+1$.*

**CHSH inequality.** Alice picks between two settings $a, a'$; Bob between $b, b'$. Form the combination

$$S = E(a,b) - E(a,b') + E(a',b) + E(a',b').$$

Any **local hidden-variable (LHV)** theory — each photon carries a pre-set $\pm1$ answer for every angle, and Alice's answer can't depend on Bob's distant setting — obeys

$$|S| \le 2 \qquad \text{(the CHSH inequality)}.$$

Quantum mechanics does not. With the optimal spread $a=0^\circ,\ a'=45^\circ,\ b=22.5^\circ,\ b'=67.5^\circ$ (adjacent analyzers 22.5° apart), plug $E(a,b)=-\cos[2(a-b)]$ into $S$ — worked out in Example 2 — to get

$$|S| = 2\sqrt2 \approx 2.83,$$

the **Tsirelson bound**, the most any quantum state can reach. That $0.83$ gap between $2$ and $2\sqrt2$ is the fingerprint of a world with no local answer sheets.

## Picture

![Top: an SPDC source sends entangled photons to Alice's analyzer at angle a and Bob's at angle b, both feeding a coincidence counter. Bottom: a plot of the CHSH quantity |S| versus analyzer angle, a blue curve peaking at 2.83 above the coral dashed classical bound at 2.](assets/04-04-fig1.svg)

## Worked examples

**Example 1 (correlation at a given pair of angles).** Alice sets $a=0^\circ$, Bob sets $b=30^\circ$. Then

$$E(0^\circ,30^\circ) = -\cos\!\big[2(0-30^\circ)\big] = -\cos(-60^\circ) = -\cos 60^\circ = -\tfrac12.$$

The coincidence rate for *both transmitting* is $P_{++}=\tfrac12\sin^2(a-b)=\tfrac12\sin^2(30^\circ)=\tfrac12(\tfrac14)=0.125$. So 12.5% of pairs give a "both-pass" click — a mild anti-correlation ($E<0$), as expected since the analyzers are closer to aligned than crossed.

**Example 2 (the $2\sqrt2$ plug-in).** Take $a=0^\circ,\ a'=45^\circ,\ b=22.5^\circ,\ b'=67.5^\circ$. Each term is $-\cos$ of twice the angle difference:

$$E(a,b)=-\cos[2(0-22.5)]=-\cos45^\circ=-\tfrac{1}{\sqrt2},$$
$$E(a,b')=-\cos[2(0-67.5)]=-\cos135^\circ=+\tfrac{1}{\sqrt2},$$
$$E(a',b)=-\cos[2(45-22.5)]=-\cos45^\circ=-\tfrac{1}{\sqrt2},$$
$$E(a',b')=-\cos[2(45-67.5)]=-\cos45^\circ=-\tfrac{1}{\sqrt2}.$$

Then

$$S = E(a,b)-E(a,b')+E(a',b)+E(a',b') = -\tfrac{1}{\sqrt2} - \tfrac{1}{\sqrt2} - \tfrac{1}{\sqrt2} - \tfrac{1}{\sqrt2} = -\frac{4}{\sqrt2} = -2\sqrt2.$$

So $|S| = 2\sqrt2 \approx 2.83 > 2$. The sign just reflects which term we subtracted; the magnitude is what the inequality bounds, and it sails past the classical ceiling. Three of the four correlations reinforce while the subtracted one flips sign — that's the geometric trick, and it's why the analyzers are staggered in 22.5° steps.

## Watch out

- **You might think the collapse lets Alice send a message to Bob.** It doesn't. Bob's photon alone is a perfect 50/50 coin no matter what Alice does; the correlation only surfaces when the two result lists are brought together and compared. No signaling, no paradox with relativity — entanglement is a *correlation* resource, not a *communication* channel.
- **You might think $E(a,b)$ depends on the two angles separately.** For the singlet it depends only on the *difference* $a-b$ — a consequence of $|\Psi^-\rangle$ being rotationally invariant. Rotate both analyzers together and nothing changes.
- **You might read "$|S|\le2$ is violated" as classical physics being wrong.** It's specifically *local realism* — pre-existing values ("realism") set independently of the far setting ("locality") — that's ruled out. Quantum mechanics keeps locality (no signaling) but drops realism. Don't conflate the two.

## One-liner

> Entangled photons are individually random but perfectly anti-correlated in every basis, and the CHSH number $S$ they produce hits $2\sqrt2$ — past the $|S|\le2$ that any local-hidden-variable world could ever manage.

## Problems

**P1 (🟢)** An entangled pair is in $|\Psi^-\rangle$. Alice's analyzer is at $a=15^\circ$, Bob's at $b=75^\circ$. Compute the correlation $E(a,b)$ and the probability $P_{++}$ that both photons are transmitted. Interpret the sign.

**P2 (🟡)** Using $E(a,b)=-\cos[2(a-b)]$, evaluate the CHSH quantity $S = E(a,b)-E(a,b')+E(a',b)+E(a',b')$ for $a=0^\circ,\ a'=45^\circ,\ b=22.5^\circ,\ b'=67.5^\circ$ and confirm $|S|=2\sqrt2$. Then check that the classically "aligned" choice $a=a'=0^\circ,\ b=b'=0^\circ$ gives $|S|=2$, saturating but not violating the bound.

**P3 (🔴)** Prove the CHSH bound for local hidden variables. Model each run by a shared hidden variable $\lambda$ (drawn with distribution $\rho(\lambda)$) that fixes Alice's outcomes $A(a,\lambda),A(a',\lambda)\in\{+1,-1\}$ and Bob's $B(b,\lambda),B(b',\lambda)\in\{+1,-1\}$, each depending only on the local setting. Show $|S|\le2$, so the measured $2\sqrt2$ is a genuine violation no such model can fake.

<details>
<summary>Solutions</summary>

**P1** The relative angle is $a-b=15^\circ-75^\circ=-60^\circ$, so

$$E = -\cos[2(-60^\circ)] = -\cos(-120^\circ) = -\cos120^\circ = -(-\tfrac12) = +\tfrac12.$$

The both-transmit probability is $P_{++}=\tfrac12\sin^2(a-b)=\tfrac12\sin^2(-60^\circ)=\tfrac12\left(\tfrac{\sqrt3}{2}\right)^2=\tfrac12\cdot\tfrac34=0.375$.

*Interpretation.* The analyzers are 60° apart, closer to the crossed (90°) configuration than to aligned, so the photons tend to *both* pass or *both* block — a positive correlation, $E=+\tfrac12$. (Contrast Example 1's 30° separation, which gave $E=-\tfrac12$.)

**P2** The optimal set is exactly Example 2: each of the four terms was computed there, giving $-\tfrac{1}{\sqrt2},\,+\tfrac{1}{\sqrt2},\,-\tfrac{1}{\sqrt2},\,-\tfrac{1}{\sqrt2}$, and

$$S = -\tfrac{1}{\sqrt2}-\tfrac{1}{\sqrt2}-\tfrac{1}{\sqrt2}-\tfrac{1}{\sqrt2}=-2\sqrt2 \;\Rightarrow\; |S|=2\sqrt2\approx2.83.$$

For the aligned choice $a=a'=b=b'=0^\circ$: every angle difference is $0$, so $E=-\cos0=-1$ for all four terms. Then

$$S = E(a,b)-E(a,b')+E(a',b)+E(a',b') = (-1)-(-1)+(-1)+(-1) = -2,$$

so $|S|=2$. It reaches the classical ceiling but does not exceed it — you only violate the inequality by *staggering* the settings so the four correlations don't all coincide. That's why real experiments choose 22.5° steps, not aligned analyzers.

**P3** Fix a single $\lambda$ and look at the combination of that run's four (counterfactual) products:

$$s(\lambda) = A(a,\lambda)B(b,\lambda) - A(a,\lambda)B(b',\lambda) + A(a',\lambda)B(b,\lambda) + A(a',\lambda)B(b',\lambda).$$

Group by Alice's two settings:

$$s(\lambda) = A(a,\lambda)\big[B(b,\lambda)-B(b',\lambda)\big] + A(a',\lambda)\big[B(b,\lambda)+B(b',\lambda)\big].$$

Since $B(b,\lambda)$ and $B(b',\lambda)$ are each $\pm1$, they are either equal or opposite. If equal, the first bracket is $0$ and the second is $\pm2$. If opposite, the second bracket is $0$ and the first is $\pm2$. Either way exactly one bracket vanishes and the other is $\pm2$, and since $A=\pm1$,

$$s(\lambda) = \pm2 \quad\Longrightarrow\quad |s(\lambda)| = 2 \ \text{ for every } \lambda.$$

The measured $S$ is the average over the hidden-variable distribution, $S=\int \rho(\lambda)\,s(\lambda)\,d\lambda$ with $\rho\ge0$, $\int\rho\,d\lambda=1$. Averaging can't grow the magnitude:

$$|S| = \left|\int \rho(\lambda)\,s(\lambda)\,d\lambda\right| \le \int \rho(\lambda)\,|s(\lambda)|\,d\lambda = \int \rho(\lambda)\cdot 2\,d\lambda = 2.$$

So $|S|\le2$ for *any* local hidden-variable model. The key locality assumption is buried in the notation: $A$ depends on $a$ (or $a'$) but never on Bob's setting, and $B$ never on Alice's — that's what let us assign each photon fixed $\pm1$ answers per angle. The measured $2\sqrt2$ exceeds $2$, so no such model exists: the correlations are not carried by any local pre-set answer sheet. $\blacksquare$

</details>

## Flashback

**From Lesson 4.3 (Parametric down-conversion):** In SPDC a pump photon splits into a signal and an idler photon, conserving energy: $\hbar\omega_p = \hbar\omega_s + \hbar\omega_i$. A 405 nm pump drives a nonlinear crystal, and one photon of a pair is detected ("heralded") at 780 nm. In vacuum $\omega = 2\pi c/\lambda$, so energy conservation reads $1/\lambda_p = 1/\lambda_s + 1/\lambda_i$. Find the wavelength of the heralded twin. (Fresh variant — non-degenerate this time.)

<details>
<summary>Solution</summary>

Energy conservation in wavelength form, solved for the idler:

$$\frac{1}{\lambda_i} = \frac{1}{\lambda_p} - \frac{1}{\lambda_s} = \frac{1}{405\ \text{nm}} - \frac{1}{780\ \text{nm}}.$$

Common denominator: $\dfrac{780-405}{405\times780}=\dfrac{375}{315900}=1.187\times10^{-3}\ \text{nm}^{-1}$, so

$$\lambda_i = \frac{1}{1.187\times10^{-3}\ \text{nm}^{-1}} \approx 842\ \text{nm}.$$

*Check.* Both daughters (780 nm and 842 nm) are redder than the 405 nm pump, as they must be — each carries less energy than the parent. If the split had been degenerate ($\lambda_s=\lambda_i$), each would sit at $2\times405=810$ nm; detecting one twin a bit *bluer* than 810 forces the other a bit *redder*, which is exactly what heralding at 780 nm gives (842 nm). ✓

</details>

## Connections

- **Backward:** the pairs come straight from [4.3](04-03-nonlinear-optics-parametric-down-conversion.md)'s type-II SPDC — the two polarization cones intersect in two directions, and a photon collected there is in $|\Psi^-\rangle$ with no record of which cone it came from. The single-photon Malus law $\cos^2(\theta-\phi)$ is the quantum face of the classical [Malus's law from wave optics](../../waves-optics/syllabus.md).
- **Forward:** [4.5 A taste of quantum information](04-05-quantum-information-taste.md) turns this from a philosophy test into a tool — the same anti-correlation powers entanglement-based quantum key distribution (E91), and a violated CHSH inequality *certifies* that an eavesdropper isn't secretly holding hidden variables.
- **Sideways:** the qubit and its measurement projection are the two-level system and Born rule you met in the [quantum-mechanics](../../quantum-mechanics/syllabus.md) course — a polarization qubit is the cleanest hardware realization of an abstract spin-$\tfrac12$, with the analyzer angle playing the role of a spin measurement axis. Aspect's 1982 experiments and the loophole-free tests of 2015 (Hensen, Giustina, Shalm) closed the locality and detection loopholes — fast random switching of settings while photons are in flight, and detectors efficient enough that the measured sample can't be a biased subset — leaving no local-realistic escape.
