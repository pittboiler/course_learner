# Reactor Physics & Neutron Transport · Lesson 4.4: The inhour equation & the reactor period

> ⏱ ~15 min · Module 4: Reactor kinetics & reactivity · Builds on: [4.2 Reactivity & the prompt jump](04-02-reactivity-prompt-jump.md), [4.3 Prompt criticality](04-03-prompt-criticality.md) · Unlocks: [4.5 Subcritical multiplication & startup](04-05-subcritical-multiplication-startup.md)

## Why this matters

An operator doesn't insert "reactivity" — they watch a number on a meter: the **reactor period**, the time for power to climb by a factor of $e$. Pull a control rod and the meter tells you how fast the reactor is heading up; a short period is an alarm. The job of this lesson is the conversion between the two: given a reactivity $\rho$, exactly how fast does power ramp? The answer is the **inhour equation**, and buried in it is the single most reassuring fact in reactor safety — you can *raise* power arbitrarily fast, but you can never *lower* it faster than the slowest delayed-neutron precursor will let you.

## The idea

In [4.2](04-02-reactivity-prompt-jump.md) we saw that after a small step insertion, power settles into a clean exponential $P(t)\propto e^{\omega t}$: a prompt jump, then a steady ramp. The ramp rate $\omega$ (units: per second) is the **stable inverse period**, and its reciprocal $T=1/\omega$ is the **period** itself — the natural clock of the ramp. Big positive $\omega$ = short period = fast climb; $\omega=0$ = infinite period = flat, critical.

So the real question is: *which* $\omega$ does a given $\rho$ produce? Here's the trick. The point-kinetics equations are linear, so if you *guess* a pure exponential $e^{\omega t}$ and plug it in, all the time-derivatives turn into multiplications by $\omega$ and the differential equations collapse into a single algebraic relation between $\rho$ and $\omega$. That relation is the inhour equation. It's the reactor's characteristic equation — the same move as finding $r=\pm i\omega$ for a spring, but now the "eigenvalue" $\omega$ is a growth rate you read off a meter.

The asymmetry falls straight out. Positive $\rho$ needs a fast-growing $e^{\omega t}$ — no ceiling on how fast. But to make power *fall*, the delayed precursors sitting in the fuel keep coughing out neutrons on their own decay schedule; the reactor can't shed power faster than those precursors drain. The longest-lived group ($\sim$55 s half-life) sets a floor: a period no shorter than about $-80$ s, no matter how hard you slam the rods in.

## The formal version

Start from the one-delayed-group point-kinetics equations from [4.1](04-01-delayed-neutrons-point-kinetics.md) (power $P$, one lumped precursor concentration $C$, delayed fraction $\beta$, mean generation time $\Lambda$, effective decay constant $\bar\lambda$):

$$\frac{dP}{dt}=\frac{\rho-\beta}{\Lambda}\,P+\bar\lambda\,C,\qquad \frac{dC}{dt}=\frac{\beta}{\Lambda}\,P-\bar\lambda\,C.$$

**Seek an exponential solution.** Try $P=P_0 e^{\omega t}$ and $C=C_0 e^{\omega t}$. Every $d/dt$ becomes a factor of $\omega$. The precursor equation gives $\omega C_0=\frac{\beta}{\Lambda}P_0-\bar\lambda C_0$, so

$$C_0=\frac{\beta\,P_0}{\Lambda(\omega+\bar\lambda)}.$$

Substitute into the power equation, cancel $P_0$, and multiply by $\Lambda$:

$$\Lambda\omega=(\rho-\beta)+\frac{\bar\lambda\beta}{\omega+\bar\lambda}\;\Longrightarrow\;\boxed{\;\rho=\Lambda\omega+\frac{\beta\,\omega}{\omega+\bar\lambda}\;}$$

*In words: a reactivity $\rho$ is "spent" two ways — a tiny bit ($\Lambda\omega$) to speed up the prompt chain, and the bulk to outrun the delayed precursors.* This is the **one-group inhour equation**. The full six-group version just sums one term per precursor group:

$$\rho=\Lambda\omega+\sum_{i=1}^{6}\frac{\beta_i\,\omega}{\omega+\lambda_i}.$$

*In words: each precursor group $i$ (fraction $\beta_i$, decay constant $\lambda_i$) resists a change in power on its own timescale.* The name "inhour" is historical — it once meant the reactivity giving a period of one hour ("inverse hour"). For any $\rho$ this is a polynomial in $\omega$ with several roots; the physically observed ramp is the **largest** root (the slowest-dying exponential wins at late times — the *stable* period).

**Reactor period.** The stable period and doubling time are just

$$T=\frac{1}{\omega},\qquad t_{\text{double}}=\frac{\ln 2}{\omega}=T\ln 2\approx 0.693\,T.$$

*In words: $T$ is the time to grow by a factor $e$; multiply by $\ln 2$ for the time to double.*

**The small-$\rho$ working formula.** For modest insertions the prompt term $\Lambda\omega$ is minuscule (we'll check: $\sim 10^{-6}$ vs $\rho\sim 10^{-3}$). Drop it, and the one-group inhour rearranges cleanly. From $\rho(\omega+\bar\lambda)=\beta\omega$,

$$\boxed{\;\omega\approx\frac{\bar\lambda\,\rho}{\beta-\rho},\qquad T=\frac{\beta-\rho}{\bar\lambda\,\rho}\;}$$

*In words: the ramp rate is set by the precursor clock $\bar\lambda$, amplified by how close $\rho$ has crept toward $\beta$.* As $\rho\to0$, $\omega\to0$ and $T\to\infty$ (flat power); as $\rho\to\beta$, the denominator vanishes and $T\to0$ — that's prompt criticality from [4.3](04-03-prompt-criticality.md), where this whole delayed-dominated picture breaks and you must keep the $\Lambda\omega$ term.

## Picture

![Reactivity rho versus stable period T: a physical inhour branch with period running to plus-infinity as rho approaches 0 from above, shrinking as rho approaches beta, and a negative branch that bottoms out at an approximately negative-80-second floor set by the longest-lived precursor](assets/04-04-inhour-equation-reactor-period-fig1.svg)

The physical branch is one continuous curve through the origin. Read it like an operator: a small positive $\rho$ gives a long positive period (slow, controllable climb); pushing $\rho$ toward $\beta$ collapses the period toward the prompt scale. On the negative side the curve flattens onto a floor — the reactor simply cannot fall faster than that.

## Worked examples

**Example 1 (the operator's conversion — one-group inhour).** A reactor at steady power gets a step insertion $\rho=+0.0015$ (about 23 cents, since $\rho/\beta=0.0015/0.0065=0.23$). Take $\beta=0.0065$, $\bar\lambda=0.08\,\text{s}^{-1}$, $\Lambda=5\times10^{-5}\,\text{s}$. Find $\omega$, the period, and the doubling time.

Use the small-$\rho$ formula (we'll justify dropping $\Lambda\omega$ in a moment):

$$\omega=\frac{\bar\lambda\,\rho}{\beta-\rho}=\frac{(0.08)(0.0015)}{0.0065-0.0015}=\frac{1.2\times10^{-4}}{5.0\times10^{-3}}=0.024\ \text{s}^{-1}.$$

$$T=\frac{1}{\omega}=\frac{1}{0.024}\approx 42\ \text{s},\qquad t_{\text{double}}=\frac{\ln 2}{\omega}=\frac{0.693}{0.024}\approx 29\ \text{s}.$$

*Check the approximation:* the dropped prompt term is $\Lambda\omega=(5\times10^{-5})(0.024)=1.2\times10^{-6}$ — smaller than $\rho=1.5\times10^{-3}$ by a factor of $\sim$1250, so about a 0.08 % correction. Fully justified. A 23-cent insertion buys a comfortable 42-second period: power drifts up, doubling every half-minute — plenty of time to respond. This is exactly the delayed-neutron gift.

**Example 2 (the negative-insertion asymmetry — a floor on how fast power can fall).** Now scram-scale: insert $\rho=-0.05$ (about $-7.7$ dollars). One-group formula:

$$\omega=\frac{\bar\lambda\,\rho}{\beta-\rho}=\frac{(0.08)(-0.05)}{0.0065-(-0.05)}=\frac{-4.0\times10^{-3}}{5.65\times10^{-2}}=-0.071\ \text{s}^{-1},\qquad T\approx-14\ \text{s}.$$

Push $\rho$ even more negative and watch the limit: as $\rho\to-\infty$, $\omega\to\bar\lambda\rho/(-\rho)=-\bar\lambda=-0.08\ \text{s}^{-1}$, i.e. the one-group model bottoms out at $T\to-1/\bar\lambda=-12.5$ s. **Power stops responding to extra negative reactivity.** Physically: once the prompt chain is snuffed out, what's left is the precursors decaying and still making neutrons — you cannot drain them faster than they decay.

The *real* floor is even gentler. The one-group $\bar\lambda=0.08\,\text{s}^{-1}$ is an average weighted toward the fast groups (fine for positive ramps, where all groups matter). But for a hard negative insertion the *slowest* group dominates the late-time tail: group 1, with $\lambda_1\approx0.0125\,\text{s}^{-1}$ (a 55-second half-life). The genuine six-group floor is

$$T_{\min}^{(-)}\to-\frac{1}{\lambda_1}\approx-\frac{1}{0.0125}\approx-80\ \text{s}.$$

*In words: slam in any amount of negative reactivity and prompt power vanishes in a flash, but the residual power then coasts down with a period no shorter than about $-80$ s.* Contrast the positive side, where $T\to0$ is reachable. **This one-sided speed limit is why reactors are safe to shut down but must be raised with care.**

## Watch out

- **You might think a big negative $\rho$ gives a big negative $\omega$ (super-fast shutdown).** It doesn't — $\omega$ saturates at $-\lambda_1$. After the initial prompt drop, the delayed precursors hold power up and it decays no faster than the longest-lived group ($\sim$80-second period). Only positive periods can be made arbitrarily short.
- **You might read $T$ off the wrong root.** The inhour polynomial has several roots $\omega$; the negative ones die away and only the *largest* survives at late times. That dominant root is the "stable period." Early on, before it settles, the prompt jump and faster transients still show — the stable period is the *asymptotic* ramp.
- **You might keep using $T=(\beta-\rho)/(\bar\lambda\rho)$ near prompt-critical.** That formula assumed $\Lambda\omega$ was negligible. As $\rho\to\beta$ the denominator lies to you (it predicts $T\to0$ smoothly); the truth is the neglected $\Lambda\omega$ term takes over and the period collapses to the prompt scale $\Lambda/(\rho-\beta)$ — the runaway of [4.3](04-03-prompt-criticality.md). Below prompt-critical the approximation is excellent; at and above it, use the full inhour.

## One-liner

> Guess $P\propto e^{\omega t}$ and the point-kinetics equations hand you the inhour equation $\rho=\Lambda\omega+\sum_i\beta_i\omega/(\omega+\lambda_i)$ — a positive $\rho$ can drive any short period, but a negative one can never beat the $\sim$80-second precursor floor.

## Problems

**P1 (🟢)** A reactor gets a step insertion $\rho=+0.0010$. With $\beta=0.0065$, $\bar\lambda=0.08\,\text{s}^{-1}$, use the small-$\rho$ one-group formula to find the stable inverse period $\omega$, the reactor period $T$, and the doubling time.

**P2 (🟡)** A large negative insertion $\rho=-0.02$ (about $-3$ dollars) is made ($\beta=0.0065$). (a) Using the one-group formula with $\bar\lambda=0.08\,\text{s}^{-1}$, find $\omega$ and $T$. (b) Explain in one or two sentences why the *actual* reactor power falls with a period no shorter than roughly $-80$ s, and name the physical quantity that sets that floor.

**P3 (🔴, ties to ODEs)** Starting from the one-group inhour equation $\rho=\Lambda\omega+\dfrac{\beta\omega}{\omega+\bar\lambda}$, (a) show algebraically that neglecting the $\Lambda\omega$ term gives $T=\dfrac{\beta-\rho}{\bar\lambda\rho}$. (b) For $\rho=+0.0015$, $\Lambda=5\times10^{-5}\,\text{s}$ (so $\omega=0.024\,\text{s}^{-1}$), compute the fractional error you introduce by dropping $\Lambda\omega$, and state the reactivity regime where the drop is *not* allowed.

<details>
<summary>Solutions</summary>

**P1.** With $\beta-\rho=0.0065-0.0010=0.0055$:

$$\omega=\frac{\bar\lambda\,\rho}{\beta-\rho}=\frac{(0.08)(0.0010)}{0.0055}=\frac{8.0\times10^{-5}}{5.5\times10^{-3}}=0.01455\ \text{s}^{-1}.$$

$$T=\frac{1}{\omega}=\frac{1}{0.01455}\approx 68.8\ \text{s},\qquad t_{\text{double}}=\frac{\ln2}{\omega}=\frac{0.693}{0.01455}\approx 47.6\ \text{s}.$$

*Check.* A 15-cent insertion ($\rho/\beta=0.15$) gives a longer period than Example 1's 23-cent case (68.8 s vs 42 s) — smaller $\rho$, slower climb, as it must be. Units: $\text{s}^{-1}\cdot\text{s} \Rightarrow \omega$ in s$^{-1}$, $T$ in s. ✓

**P2.** (a) With $\beta-\rho=0.0065-(-0.02)=0.0265$:

$$\omega=\frac{(0.08)(-0.02)}{0.0265}=\frac{-1.6\times10^{-3}}{2.65\times10^{-2}}=-0.0604\ \text{s}^{-1},\qquad T=\frac{1}{\omega}\approx -16.6\ \text{s}.$$

(b) After the prompt neutron population dies out, power is sustained only by delayed neutrons from precursors already sitting in the fuel. Those precursors decay on *their* fixed schedule, so power can fall no faster than the slowest-decaying group empties. The **longest-lived precursor group's decay constant** $\lambda_1\approx0.0125\,\text{s}^{-1}$ (55-second half-life) sets the floor, $T_{\min}^{(-)}\approx-1/\lambda_1\approx-80$ s. (The one-group answer $-16.6$ s uses the fast-weighted average $\bar\lambda=0.08$ and understates the true, gentler floor.)

*Check.* $|T|$ shrank from the small-$\rho$ regime toward a limit as $\rho$ went sharply negative — the saturation is the whole point, and it's one-sided (no analogous floor for positive $\rho$). ✓

**P3.** (a) Drop $\Lambda\omega$: $\rho=\dfrac{\beta\omega}{\omega+\bar\lambda}$. Cross-multiply: $\rho(\omega+\bar\lambda)=\beta\omega\Rightarrow\rho\bar\lambda=\omega(\beta-\rho)\Rightarrow\omega=\dfrac{\bar\lambda\rho}{\beta-\rho}$. Then $T=1/\omega=\dfrac{\beta-\rho}{\bar\lambda\rho}$. ∎

(b) The dropped term is $\Lambda\omega=(5\times10^{-5})(0.024)=1.2\times10^{-6}$. As a fraction of $\rho=1.5\times10^{-3}$:

$$\frac{\Lambda\omega}{\rho}=\frac{1.2\times10^{-6}}{1.5\times10^{-3}}=8\times10^{-4}\approx 0.08\%.$$

Negligible. The drop is *not* allowed when $\rho$ approaches or exceeds $\beta$ (prompt-critical): there $\omega$ grows toward the prompt scale, $\Lambda\omega$ becomes comparable to $\rho$, and the true period is $\approx\Lambda/(\rho-\beta)$, not the delayed formula. (This is the ODE view: the inhour equation is the *characteristic equation* of the point-kinetics linear system, and $\omega$ are its eigenvalues — dropping $\Lambda\omega$ discards the fast "prompt" eigenvalue, valid only while it stays fast and far from the slow ones.)

*Check.* $8\times10^{-4}$ matches the "$\sim$1250×" ratio quoted in Example 1 ($1/1250=8\times10^{-4}$). ✓

</details>

## Flashback

**From Lesson 4.3 (prompt criticality — fresh variant).** A reactor with $\beta=0.0065$ and $\Lambda=5\times10^{-5}\,\text{s}$ receives a step insertion $\rho=0.008$. (a) In dollars, is it prompt-critical, and by how much? (b) Estimate the prompt period $\Lambda/(\rho-\beta)$ and comment on whether this is controllable.

<details>
<summary>Solution</summary>

(a) $\rho/\beta=0.008/0.0065=1.23$ dollars — **super-prompt-critical**, exceeding $\beta$ by 0.23 dollars ($\rho-\beta=0.0015$).

(b) With the chain now prompt-critical the delayed neutrons are no longer needed to sustain it, so the period collapses to the prompt scale:

$$T_{\text{prompt}}\approx\frac{\Lambda}{\rho-\beta}=\frac{5\times10^{-5}}{0.0015}\approx 0.033\ \text{s}=33\ \text{ms}.$$

A 33-millisecond period means power multiplies by $e$ roughly 30 times a second — utterly uncontrollable by any mechanical means, and the reason $\rho=\beta$ is the hard speed limit of reactor operation. Any insertion must stay comfortably under a dollar.

*Check.* Contrast with this lesson's Example 1: a sub-$\beta$ insertion gave a 42-second period; crossing $\beta$ shortens it by a factor of $\sim$1000. That cliff is exactly what [4.3](04-03-prompt-criticality.md) warned about. ✓

</details>

## Connections

- **Backward:** this quantifies the [4.2](04-02-reactivity-prompt-jump.md) prompt jump and the [4.3](04-03-prompt-criticality.md) speed limit — the inhour equation is just point kinetics ([4.1](04-01-delayed-neutrons-point-kinetics.md)) solved for its exponential growth rate, and its $\rho\to\beta$ blow-up *is* prompt criticality.
- **Forward:** [4.5](04-05-subcritical-multiplication-startup.md) handles the other side of the meter — a *subcritical* reactor driven by a source, where power doesn't ramp at all but settles to a multiplied steady value. Module 5 then adds temperature feedback, which quietly bends $\rho$ back toward zero and lengthens the period on its own.
- **Sideways (ODEs / linear systems):** the inhour equation is the **characteristic equation** of the linear point-kinetics system, and the roots $\omega$ are its eigenvalues — the same eigenvalue-of-a-linear-ODE structure behind [`ode-refresher`](../../ode-refresher/syllabus.md) and the $r=\pm i\omega$ of simple harmonic motion, except here the widely separated prompt and delayed eigenvalues make the system *stiff*, which is exactly why real kinetics codes integrate it so carefully.
