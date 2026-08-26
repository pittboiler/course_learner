# Control Systems · Lesson 4.3: Lead & lag compensators

> ⏱ ~15 min · Module 4: PID & compensator design · Builds on: [3.2 Root locus: design](03-02-root-locus-design.md), [3.3 Frequency response & Bode plots](03-03-frequency-response-bode-plots.md), [3.4 Gain & phase margins](03-04-gain-and-phase-margins.md), [4.1 PID control](04-01-pid-control.md) · Unlocks: [5.1 State-space modeling](05-01-state-space-modeling.md)

## Why this matters

Every design tool so far has handed you **one knob**: the gain $K$. Slide it up the root locus in [3.2](03-02-root-locus-design.md), slide the Bode magnitude curve up and down in [3.4](03-04-gain-and-phase-margins.md). One knob, and — here is the problem — *two or more specs*. Accuracy wants gain. Stability margin wants less gain. Sooner or later a plant hands you a spec pair that no single number can satisfy, and you are simply stuck.

Compensators are how you get unstuck. Instead of scaling the loop gain by the same factor at every frequency, you add a pole and a zero and **reshape the loop** — more gain down where steady-state error lives, more phase up where the margin lives. This lesson is the payoff of the whole classical half of the course, and it is the last thing you need before Module 5 changes languages entirely.

## The idea

Start with the conflict, concretely. It is [the syllabus](../syllabus.md)'s boss problem 4.

**Plant:** $G(s) = \dfrac{1}{s(s+1)}$ in unity feedback, controller $G_c(s) = K$, so the open-loop transfer function is $L(s) = \dfrac{K}{s(s+1)}$.

**Spec A — margin.** From [3.4](03-04-gain-and-phase-margins.md), the phase of $L(j\omega)$ is $\angle L = -90^\circ - \arctan\omega$, so the phase margin is

$$\text{PM} = 180^\circ + \angle L(j\omega_{gc}) = 90^\circ - \arctan\omega_{gc}.$$

Setting $\text{PM} = 45^\circ$ gives $\arctan\omega_{gc} = 45^\circ$, i.e. $\omega_{gc} = 1$ rad/s. The magnitude condition $|L(j1)| = K/(1\cdot\sqrt{2}) = 1$ then fixes

$$K = \sqrt{2} \approx 1.414, \qquad \omega_{gc} = 1\ \text{rad/s}.$$

**Spec B — accuracy.** This is a type-1 loop, so from [2.3](02-03-steady-state-error-system-type.md) the velocity error constant is $K_v = \lim_{s\to0} sL(s) = K$, and the steady-state error to a unit ramp is $1/K_v$. The requirement $K_v \ge 5$ therefore demands $K \ge 5$.

**The collision.** $K = \sqrt2$ and $K \ge 5$ cannot both hold. And raising $K$ to 5 is not a mild compromise — it wrecks the margin. Solve $|L(j\omega)| = 1$ with $K = 5$:

$$\frac{5}{\omega\sqrt{\omega^2+1}} = 1 \;\Longrightarrow\; \omega^4 + \omega^2 - 25 = 0 \;\Longrightarrow\; \omega^2 = \frac{-1+\sqrt{101}}{2} = 4.5249,$$

so $\omega_{gc} = 2.127$ rad/s, and

$$\text{PM} = 90^\circ - \arctan(2.127) = 90^\circ - 64.82^\circ = 25.2^\circ.$$

Gain alone bought accuracy by spending $19.8^\circ$ of phase margin. **One gain cannot satisfy both specs.** That sentence is the entire reason compensators exist.

Why did it fail? Because a gain multiplies $|L|$ by the same factor at *every* frequency, and it changes $\angle L$ at *no* frequency. The two specs live at two different places on the frequency axis — $K_v$ is a statement about $\omega \to 0$, PM is a statement about $\omega \approx \omega_{gc}$ — so you need a controller that treats those two neighborhoods differently. A pole and a zero, placed apart, do exactly that.

- Put the **zero first** (closer to the origin): the loop gains phase in the band between them. That is a **lead** compensator — buy margin.
- Put the **pole first**: the loop has extra gain below the pair and normal gain above. That is a **lag** compensator — buy accuracy.

## The formal version

Both are the same object, $G_c(s) = K_c\dfrac{s+z}{s+p}$, distinguished only by which singularity is closer to the origin.

### Lead

$$\boxed{\;G_c(s) = K_c\,\alpha\,\frac{Ts+1}{\alpha Ts+1}, \qquad 0 < \alpha < 1\;}$$

Zero at $s = -1/T$, pole at $s = -1/(\alpha T)$, so $|z| < |p|$: **zero closer to the origin.** *In words: below $1/T$ it does nothing; between the corners it climbs at $+20$ dB/decade and leans the phase forward; above $1/(\alpha T)$ it is flat again at $1/\alpha$ times its DC gain.* Its DC gain is $K_c\alpha$ (that is why the $\alpha$ is written out front — it lets you set the error constant with $K_c\alpha$ and shape phase with $\alpha$ independently).

The two design formulas, both of which you should be able to re-derive:

$$\omega_{\max} = \sqrt{zp} = \frac{1}{T\sqrt{\alpha}}, \qquad \sin\varphi_{\max} = \frac{1-\alpha}{1+\alpha} \;\Longleftrightarrow\; \alpha = \frac{1-\sin\varphi_{\max}}{1+\sin\varphi_{\max}}.$$

*In words: the phase bump peaks at the geometric mean of the zero and the pole — the midpoint on a log axis — and how tall it is depends only on how far apart they are.* At that peak the compensator's magnitude is exactly $1/\sqrt{\alpha}$ times its DC gain (the geometric mean of $1$ and $1/\alpha$), which is the number you must account for when you predict the new crossover.

Sanity values, worth memorizing the shape of: $\varphi_{\max} = 45^\circ \Rightarrow \alpha = (1-0.70711)/(1+0.70711) = 0.1716$ (pole/zero spread $5.83$); $\varphi_{\max} = 60^\circ \Rightarrow \alpha = (1-0.86603)/(1+0.86603) = 0.0718$ (spread $13.9$). Past about $60$–$65^\circ$ the spread — and with it the high-frequency gain $1/\alpha$ — explodes, so **a single lead section tops out near $60^\circ$**; bigger boosts get split across two cascaded sections.

**The Bode recipe.**

1. Set the plain gain to meet the **error** spec ($K_v$, $K_p$, or $K_a$). Call it $K$; this is the compensator's DC gain $K_c\alpha$.
2. Find $\omega_{gc}$ and PM of $KG$ as it stands.
3. **Deficiency** $= \text{PM}_{\text{desired}} - \text{PM}_{\text{actual}} + (5^\circ\text{ to }12^\circ)$. The pad is not superstition: the lead raises $|L|$, which pushes crossover to the right, where the plant's own phase is worse than where you measured it.
4. $\alpha = (1-\sin\varphi_{\max})/(1+\sin\varphi_{\max})$.
5. Place $\omega_{\max}$ at the **new** crossover: that is the $\omega$ where $|KG(j\omega)| = \sqrt{\alpha}$, because the compensator will lift the curve by $1/\sqrt{\alpha}$ there. Then $T = 1/(\omega_{\max}\sqrt{\alpha})$.
6. **Verify** the actual PM. If short, go back to step 3 with a bigger pad.

**Root-locus view.** A lead compensator is a zero (plus a distant, mostly-inert pole), and from [3.2](03-02-root-locus-design.md) adding a zero **pulls the locus to the left** — toward faster, better-damped closed-loop poles. Same fact, other language: "more phase at crossover" and "locus bends left" are one statement.

**PID view.** $K_p + K_d s = K_d\!\left(s + K_p/K_d\right)$ is a pure zero — ideal PD, which [4.1](04-01-pid-control.md) warned differentiates noise without limit. Lead is PD with a **realizable pole** bolted on to stop the gain climbing forever. That pole is the only difference.

### Lag

$$\boxed{\;G_c(s) = K_c\,\beta\,\frac{Ts+1}{\beta Ts+1}, \qquad \beta > 1\;}$$

Zero at $-1/T$, pole at $-1/(\beta T)$, so now $|p| < |z|$: **pole closer to the origin.** DC gain $K_c\beta$; high-frequency gain $K_c$. *In words: it hands you a factor of $\beta$ extra gain at low frequency and gives it all back above the zero, so the crossover region never sees it.*

That last clause is the whole trick, and it only works if you **park the pole–zero pair far below crossover**. Rule of thumb: put the zero about a decade below $\omega_{gc}$. The reason is worth stating exactly: a pole and a zero that are close together (a decade apart, say) have phase contributions that nearly cancel once you are far above both — at ten times the zero, the pair contributes only about $-5^\circ$ — while their *gain ratio* $\beta$ persists all the way down to DC, where the error constant is measured. You get the gain and dodge the phase.

You do not dodge it entirely, which is why the recipe pads the target the same way lead does:

1. Set $K = K_c\beta$ to meet the error spec.
2. Find $\omega_1$, the frequency where $KG$ *already* has the desired PM plus $5^\circ$–$12^\circ$ of pad. This will be the new crossover.
3. Choose $\beta = |KG(j\omega_1)|$ — the attenuation needed to drag the magnitude curve down to $0$ dB at $\omega_1$.
4. Place the zero at $1/T \approx \omega_1/10$; the pole follows at $1/(\beta T)$.
5. **Verify.**

**Root-locus view.** The lag pole and zero sit in a tiny cluster near the origin, far from the dominant poles, so they barely deflect the locus — the transient stays roughly what it was — but the ratio $z/p = \beta$ multiplies the error constant. It improves accuracy almost for free, in the transient sense.

**PID view.** $K_p + K_i/s = K_p\!\left(s + K_i/K_p\right)/s$ is a zero over a pole *at the origin* — ideal PI, infinite DC gain, which raises the system type outright. Lag is PI with that pole nudged off the origin to $-1/(\beta T)$: finite DC gain $\beta$ instead of infinite, in exchange for no pure integrator to wind up.

## Picture

![Bode magnitude and phase of a lead compensator (phase bump peaking at omega_max between the two corner frequencies, high-frequency gain up by 1/alpha) beside a lag compensator (low-frequency gain plateau of beta, small phase dip, crossover placed far to the right)](assets/04-03-fig1.svg)

## Worked examples

### Example 1 — the lag route (boss problem 4b, finished)

Specs: $K_v \ge 5$ and $\text{PM} = 45^\circ$ for $G(s) = 1/(s(s+1))$.

**Step 1.** $K_v = K_c\beta = 5$.

**Step 2.** Target $45^\circ + 5^\circ = 50^\circ$ of margin. The *uncompensated plant* has $\text{PM} = 90^\circ - \arctan\omega$, so $90^\circ - \arctan\omega_1 = 50^\circ$ gives $\omega_1 = \tan 40^\circ = 0.839$ rad/s.

**Step 3.** $|KG(j\omega_1)| = \dfrac{5}{0.839\sqrt{0.839^2+1}} = \dfrac{5}{0.839 \times 1.3054} = 4.56$. So we need $\beta \ge 4.56$; take the round number $\beta = 5$, hence $K_c = 1$.

**Step 4.** Zero a decade below: $1/T = 0.1$, so $T = 10$ and the pole is at $1/(\beta T) = 0.02$. Therefore

$$G_c(s) = 5\,\frac{10s+1}{50s+1} = \frac{s+0.1}{s+0.02}, \qquad L(s) = \frac{s+0.1}{(s+0.02)\,s\,(s+1)}.$$

**Step 5 — verify, which is not optional.** $K_v = \lim_{s\to0} sL(s) = 0.1/(0.02 \times 1) = 5$. ✓ For the margin, solve $|L(j\omega)|=1$ numerically: at $\omega = 0.79$, $|L| = 1.0009$; at $\omega = 0.80$, $|L| = 0.9834$; so $\omega_{gc} = 0.790$ rad/s. There,

$$\angle L = \underbrace{\arctan\tfrac{0.790}{0.1}}_{82.79^\circ} - \underbrace{\arctan\tfrac{0.790}{0.02}}_{88.55^\circ} - 90^\circ - \underbrace{\arctan 0.790}_{38.31^\circ} = -134.07^\circ,$$

so $\text{PM} = 45.9^\circ$. ✓ Both specs met. Note the compensator's own contribution at crossover: $82.79^\circ - 88.55^\circ = -5.8^\circ$ — precisely the pad we budgeted in step 2.

**Why lag and not lead here?** The binding spec is an *error* spec, and the plant already delivers $45^\circ$ of margin at $\omega_{gc} = 1$ — the margin is not the problem, the low-frequency gain is. Lag lets you keep the low crossover (and the good phase that comes with it) and multiply the DC gain by $\beta$ underneath it. The price: $\omega_{gc}$ actually *drops* slightly, from $1.00$ to $0.79$ rad/s, so the closed loop gets about 20% slower.

### Example 2 — the lead route, same plant, same specs

Take $K = 5$ up front (so $K_c\alpha = 5$ and $K_v = 5$ is met by gain alone). From the opening, that leaves $\text{PM} = 25.2^\circ$ — a deficiency of $19.8^\circ$. Pad by $5^\circ$: aim for $\varphi_{\max} = 25^\circ$.

$$\alpha = \frac{1-\sin 25^\circ}{1+\sin 25^\circ} = \frac{0.5774}{1.4226} = 0.4059, \qquad \sqrt{\alpha} = 0.6371.$$

New crossover is where $|KG| = \sqrt\alpha$: $\dfrac{5}{\omega\sqrt{\omega^2+1}} = 0.6371 \Rightarrow \omega^4+\omega^2 - 61.59 = 0 \Rightarrow \omega_{\max} = 2.714$ rad/s. Then $T = 1/(\omega_{\max}\sqrt\alpha) = 0.5784$, giving zero at $1.729$, pole at $4.260$, and $K_c = 5/\alpha = 12.32$:

$$G_c(s) = 5\,\frac{0.5784s+1}{0.2348s+1} = 12.32\,\frac{s+1.729}{s+4.260}.$$

**Verify.** At $\omega = 2.714$: $|G_c| = 5\sqrt{1+1.5696^2}/\sqrt{1+0.6371^2} = 7.848$ and $|G| = 1/(2.714\sqrt{1+2.714^2}) = 0.1275$, product $1.000$ ✓. Phase: $\arctan(1.5696) - \arctan(0.6371) = 57.50^\circ - 32.50^\circ = 25.0^\circ$ of lead (matching $\varphi_{\max}$, as it must), and the plant contributes $-90^\circ - \arctan(2.714) = -159.77^\circ$. Total $-134.77^\circ$, so $\text{PM} = 45.2^\circ$ ✓.

**Compare the two answers.** Both meet $K_v = 5$ and $\text{PM} \approx 45^\circ$. The lag design crosses over at $0.79$ rad/s; the lead design at $2.71$ rad/s — about $3.4\times$ the bandwidth, so several times faster settling. The lead pays for it with high-frequency gain: $K_c = 12.3$ versus the lag's $1$, meaning sensor noise above $4.3$ rad/s hits the actuator twelve times harder. Choose by which currency you have: if the loop is quiet and speed matters, lead; if the sensor is noisy or the actuator saturates, lag. And when you need *both* accuracy and speed, cascade them — a **lead–lag** compensator, one section for each job, which is where boss problem 4 is really pointing.

## The comparison table

| | **Lead** ($\alpha<1$, zero first) | **Lag** ($\beta>1$, pole first) |
|---|---|---|
| Phase margin | raises it directly, by up to $\sim60^\circ$ per section | barely changes it; costs $\approx5^\circ$ at crossover |
| Bandwidth / speed | **increases** — crossover moves right | slightly **decreases** — crossover moves left |
| Steady-state error | unchanged (DC gain is whatever you set) | **improves by $\beta$** — the point of the thing |
| Noise / actuator effort | worse: HF gain up by $1/\alpha$ | better: HF gain is $\beta$ times *below* the DC gain |
| Transient tail | none added | adds a slow near-cancelled pole — a long, small tail |
| Reach for it when | you need speed or damping | you need accuracy and can afford to be slower |

## Watch out

- **You might think the pad in step 3 is fudge.** It is not — it is bookkeeping for a real effect. Lead raises $|L|$ near crossover, so crossover *moves right* onto a part of the plant's phase curve you have not measured yet, and the plant's phase there is worse. Skip the pad and you will systematically land under spec. Lag has the mirror version: the pole–zero pair still drags a few degrees of phase up to crossover.
- **You might think lag "adds phase margin".** It doesn't add anything; it *reveals* margin that was already there at a lower frequency, by attenuating the magnitude curve until crossover slides down to meet it. If the plant has no frequency with adequate phase, no lag compensator can help — you need lead.
- **You might forget the lag's slow tail.** In Example 1 the closed-loop poles are $-0.456 \pm j0.845$ and $-0.1086$. That real pole has a $9.2$ s time constant — glacial. It survives only because the compensator zero at $-0.1$ nearly cancels it, making its residue tiny, so you see a small, long-lived creep rather than a slow dominant response. Push the pair *closer* to the origin and the tail gets longer; push it up toward crossover and you start eating phase margin. That tension sets the "one decade below" rule.

## One-liner

> A gain scales the whole loop; a compensator reshapes it — lead spends high-frequency gain to buy phase where the margin is, lag spends a few degrees of phase to buy low-frequency gain where the error is.

## Problems

**P1 (🟢)** You need $40^\circ$ of phase lead at $\omega = 4$ rad/s. Find $\alpha$, $T$, the compensator's zero and pole, and the gain (in dB, relative to its DC gain) that it contributes at $\omega_{\max}$.

**P2 (🟡)** Plant $G(s) = \dfrac{1}{s(s+2)}$ in unity feedback. Specs: $K_v \ge 8$ and $\text{PM} \ge 45^\circ$. With plain gain, meeting $K_v = 8$ requires $K = 16$, which yields $\text{PM} = 28.0^\circ$ — not enough. **Design a lag compensator** that meets both specs, and verify the resulting crossover frequency and phase margin.

**P3 (🔴)** A design needs $70^\circ$ of phase lead. (a) What $\alpha$, pole/zero spread, and high-frequency gain (in dB) does a *single* lead section require? (b) Two identical cascaded sections, each supplying $35^\circ$, give the same total lead — what is their combined high-frequency gain in dB? (c) State the design lesson in one sentence.

<details>
<summary>Solutions</summary>

**P1** With $\varphi_{\max} = 40^\circ$, $\sin 40^\circ = 0.64279$:

$$\alpha = \frac{1-0.64279}{1+0.64279} = \frac{0.35721}{1.64279} = 0.21744.$$

$\sqrt\alpha = 0.46631$, and $\omega_{\max} = 1/(T\sqrt\alpha)$ gives

$$T = \frac{1}{\omega_{\max}\sqrt\alpha} = \frac{1}{4 \times 0.46631} = \frac{1}{1.86524} = 0.53613\ \text{s}.$$

Zero at $z = 1/T = 1.8652$; pole at $p = 1/(\alpha T) = 1/(0.21744 \times 0.53613) = 8.578$.

Gain at $\omega_{\max}$, relative to DC, is $1/\sqrt\alpha = 2.1445$, i.e. $-10\log_{10}\alpha = -10\log_{10}(0.21744) = 6.63$ dB.

*Checks.* (i) $\sqrt{zp} = \sqrt{1.8652 \times 8.578} = \sqrt{16.00} = 4.00 = \omega_{\max}$ ✓ — the peak really is at the geometric mean. (ii) Phase directly: $\arctan(4 \times 0.53613) - \arctan(4 \times 0.53613 \times 0.21744) = \arctan(2.1445) - \arctan(0.46631) = 65.00^\circ - 25.00^\circ = 40.00^\circ$ ✓. (iii) $p/z = 8.578/1.8652 = 4.60 = 1/\alpha$ ✓.

**P2** Follow the lag recipe.

*Step 1.* $K_v = \lim_{s\to0} s \cdot \dfrac{K_c\beta}{s(s+2)} = \dfrac{K_c\beta}{2} = 8 \Rightarrow K_c\beta = 16$.

*Step 2.* The plant's phase is $-90^\circ - \arctan(\omega/2)$, so $\text{PM} = 90^\circ - \arctan(\omega/2)$. Target $45^\circ + 5^\circ = 50^\circ$: $\arctan(\omega_1/2) = 40^\circ \Rightarrow \omega_1 = 2\tan40^\circ = 1.678$ rad/s.

*Step 3.* $|KG(j\omega_1)| = \dfrac{16}{1.678\sqrt{1.678^2+4}} = \dfrac{16}{1.678 \times 2.6108} = \dfrac{16}{4.3816} = 3.652$ ($11.25$ dB). Take $\beta = 4$ (rounding **up** is the safe direction — more attenuation lowers crossover, which raises PM). Then $K_c = 16/4 = 4$.

*Step 4.* Zero a decade below $\omega_1$: round $1/T$ to $0.16$, so $T = 6.25$ and the pole is at $1/(\beta T) = 1/25 = 0.04$. Hence

$$G_c(s) = 16\,\frac{6.25s+1}{25s+1} = 4\,\frac{s+0.16}{s+0.04}, \qquad L(s) = \frac{4(s+0.16)}{(s+0.04)\,s\,(s+2)}.$$

*Step 5 — verify.* Error constant: $K_v = \lim_{s\to0} sL(s) = \dfrac{4 \times 0.16}{0.04 \times 2} = \dfrac{0.64}{0.08} = 8$ ✓ (so ramp error $= 1/8 = 0.125$).

Crossover: evaluate $|L(j\omega)| = \dfrac{4\sqrt{\omega^2+0.0256}}{\sqrt{\omega^2+0.0016}\;\omega\sqrt{\omega^2+4}}$. At $\omega = 1.55$, $|L| = 1.025$; at $\omega = 1.60$, $|L| = 0.981$; at $\omega = 1.578$, $|L| = 1.000$. So $\omega_{gc} = 1.578$ rad/s.

Phase there:

$$\angle L = \arctan\tfrac{1.578}{0.16} - \arctan\tfrac{1.578}{0.04} - 90^\circ - \arctan\tfrac{1.578}{2} = 84.21^\circ - 88.55^\circ - 90^\circ - 38.27^\circ = -132.61^\circ,$$

so $\text{PM} = 180^\circ - 132.61^\circ = 47.4^\circ \ge 45^\circ$ ✓. Both specs met.

*Sanity check.* The compensator's own phase at crossover is $84.21^\circ - 88.55^\circ = -4.3^\circ$, inside the $5^\circ$ pad ✓. And crossover fell from $3.758$ rad/s (pure $K=16$) to $1.578$ rad/s — the expected loss of speed, and exactly the mechanism that recovered the margin.

**P3** (a) $\sin70^\circ = 0.93969$, so

$$\alpha = \frac{1-0.93969}{1+0.93969} = \frac{0.06031}{1.93969} = 0.03109.$$

Spread $p/z = 1/\alpha = 32.16$ — the pole sits more than a decade and a half above the zero. High-frequency gain relative to DC is $1/\alpha = 32.16$, i.e. $20\log_{10}(32.16) = 30.15$ dB.

(b) Each section: $\sin35^\circ = 0.57358$, $\alpha_1 = 0.42642/1.57358 = 0.27099$, spread $1/\alpha_1 = 3.690$. Cascading multiplies both phase ($35^\circ + 35^\circ = 70^\circ$ — valid because each section peaks at the same $\omega_{\max}$ if you tune both to it) and gain, so the combined HF gain is $(1/\alpha_1)^2 = 3.690^2 = 13.62$, i.e. $20\log_{10}(13.62) = 22.68$ dB.

(c) **Two gentle sections buy the same phase for ~7.5 dB less high-frequency gain than one aggressive section** — less noise amplification, less actuator effort, and a milder pole–zero spread. That is why a single lead section is capped around $60^\circ$ in practice.

*Check.* Sanity on (b): if cascading were free you would keep splitting forever. It isn't — $n$ sections each supplying $70^\circ/n$ do keep shrinking the total gain, but each adds a pole to roll off and more phase spread around $\omega_{\max}$, so two (occasionally three) is where practice stops.

</details>

## Flashback

**From Lesson 2.4 (Stability & Routh–Hurwitz):** A unity-feedback loop has forward path $G(s) = \dfrac{K}{s(s+1)(s+5)}$. Find the range of $K$ for closed-loop stability, and the frequency at which the system oscillates at the critical gain.

<details>
<summary>Solution</summary>

The characteristic equation is $1 + G(s) = 0$, i.e. $s(s+1)(s+5) + K = 0$. Expand: $s(s^2+6s+5) + K = s^3 + 6s^2 + 5s + K$.

Routh array:

$$\begin{array}{c|cc} s^3 & 1 & 5 \\ s^2 & 6 & K \\ s^1 & \dfrac{6\cdot5 - K}{6} = \dfrac{30-K}{6} & 0 \\ s^0 & K & \end{array}$$

No sign changes in the first column requires $\dfrac{30-K}{6} > 0$ and $K > 0$:

$$\boxed{\,0 < K < 30\,}$$

At the critical gain $K = 30$ the $s^1$ row vanishes; form the auxiliary polynomial from the row above, $6s^2 + K = 6s^2 + 30 = 0 \Rightarrow s^2 = -5 \Rightarrow s = \pm j\sqrt5$. The oscillation frequency is $\omega = \sqrt5 = 2.236$ rad/s.

*Check.* Substitute $s = j\sqrt5$ into $s^3+6s^2+5s+30$: $s^3 = -j5\sqrt5 = -11.180j$, $6s^2 = -30$, $5s = 11.180j$. Sum $= -11.180j - 30 + 11.180j + 30 = 0$ ✓. (These are exactly the $K_u$ and $\omega_u$ that [4.2](04-02-tuning-pid.md)'s Ziegler–Nichols ultimate-gain rule would consume: $K_u = 30$, $P_u = 2\pi/2.236 = 2.81$ s.)

</details>

## Connections

- **Backward:** the margin arithmetic is [3.4](03-04-gain-and-phase-margins.md) verbatim, the error constant $K_v$ is [2.3](02-03-steady-state-error-system-type.md), and the "adding a zero pulls the locus left" reading is [3.2](03-02-root-locus-design.md). The closed-loop $\zeta$ and overshoot you'd predict from the surviving complex pair come from [2.2](02-02-second-order-response.md) — for Example 1, $\zeta = 0.475$, $\omega_n = 0.960$ rad/s, about 18% overshoot.
- **Forward:** Module 5 abandons this frequency-domain haggling entirely. [5.4 Pole placement & observers](05-04-pole-placement-observers.md) puts *every* closed-loop pole exactly where you want it in one matrix step — no deficiency, no pad, no iteration. The catch is that it needs a full state model and a measurement (or estimate) of every state, which is what [5.1](05-01-state-space-modeling.md)–[5.3](05-03-controllability-observability.md) build.
- **Sideways (signal processing):** a lead network *is* a first-order high-shelf filter and a lag network a low-shelf — the same pole–zero pair that shapes a loop gain shapes an audio equalizer, and the corner-placement reasoning in [`signals-systems` 4.4](../../signals-systems/lessons/04-04-filter-design-basics.md) is the same reasoning. In hardware, both are one op-amp with an RC network, exactly the impedance shaping of [`circuits` 4.2](../../circuits/lessons/04-02-impedance-phasor-analysis.md).
