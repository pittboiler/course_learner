# Waves & Optics · Lesson 1.2: Damped oscillations

> ⏱ ~15 min · Module 1: Oscillations & resonance · Builds on: [1.1 Simple harmonic motion](01-01-simple-harmonic-motion.md), [`ode-refresher` syllabus](../../ode-refresher/syllabus.md) · Unlocks: 1.3 (driven oscillations & resonance)

## Why this matters

The perfect oscillator of [1.1](01-01-simple-harmonic-motion.md) never stops — but nothing in the real world rings forever. A plucked string fades, a car's suspension settles, a swinging door eases shut without slamming. All of that is **damping**: a friction force that bleeds energy out of the motion. The single knob that controls it — how strong the friction is relative to the spring — sorts *every* damped system into exactly three behaviors. Learn to read that knob and you can tell at a glance whether a system will ring, glide, or crawl back to rest. It's also the setup for resonance in [1.3](01-03-driven-oscillations-resonance.md): you can't understand what a push does until you know how the system decays on its own.

## The idea

Take the mass on a spring and drop it into honey. Now, on top of the spring's restoring pull, there's a drag force that always opposes *motion* — it fights velocity, not position. Push fast, it pushes back hard; sit still, it does nothing. That's the essence of viscous damping: a force $-b\dot x$, proportional to speed and pointing against it.

Two forces now compete. The spring wants to make the mass overshoot and ring; the drag wants to freeze it. Who wins is a matter of degree, and there are three outcomes:

- **Light drag (underdamped):** the spring still wins the argument, so the mass oscillates — but each swing is smaller than the last, riding a shrinking envelope down to rest.
- **Just-enough drag (critically damped):** drag exactly cancels the tendency to overshoot. The mass returns to equilibrium as *fast as possible* without ever crossing it. This is what you want in a door closer or a car shock.
- **Heavy drag (overdamped):** drag dominates. The mass oozes back to equilibrium slowly, like a spoon in thick syrup — no oscillation, but sluggish.

The whole story is one number: how big the friction is compared to the spring's natural pull.

## The formal version

Add the drag force $-b\dot x$ (with $b \ge 0$ the **damping coefficient**, units N·s/m) to the spring force $-kx$ in Newton's second law $F = m\ddot x$:

$$m\ddot x + b\dot x + kx = 0.$$

*In words: mass times acceleration equals the restoring pull minus a drag that grows with speed.* Divide through by $m$ and rename the constants to their standard physics names:

$$\boxed{\;\ddot x + 2\beta\dot x + \omega_0^2\, x = 0\;}, \qquad \beta \equiv \frac{b}{2m}\ (\mathrm{s^{-1}}), \qquad \omega_0 \equiv \sqrt{\frac{k}{m}}\ (\mathrm{rad/s}).$$

Here $\beta$ is the **damping constant** (how fast energy leaks out) and $\omega_0$ is the **natural frequency** — the ringing rate the *undamped* spring of [1.1](01-01-simple-harmonic-motion.md) would have. *In words: one term pulls you home ($\omega_0^2 x$), one term brakes you ($2\beta\dot x$).*

This is a constant-coefficient linear ODE, so try $x = e^{rt}$. Substituting gives the **characteristic equation** $r^2 + 2\beta r + \omega_0^2 = 0$, whose roots are

$$r = -\beta \pm \sqrt{\beta^2 - \omega_0^2}.$$

Everything hinges on the sign of the quantity under the root, $\beta^2 - \omega_0^2$ — exactly the discriminant that split `ode-refresher`'s second-order solutions into complex / repeated / real cases. Three regimes:

**Underdamped ($\beta < \omega_0$).** The root is negative under the square root, so the roots are complex: $r = -\beta \pm i\omega_1$ with

$$\omega_1 = \sqrt{\omega_0^2 - \beta^2}, \qquad x(t) = A\,e^{-\beta t}\cos(\omega_1 t + \phi).$$

*In words: a cosine that still rings, but at the slightly slower frequency $\omega_1$, trapped inside a shrinking envelope $A\,e^{-\beta t}$.* Damping does two things — it makes the ring decay, and it drags the frequency below $\omega_0$. Amplitude halves, then halves again, on the timescale $1/\beta$.

**Critically damped ($\beta = \omega_0$).** The square root vanishes: a single repeated real root $r = -\beta$. The ODE's repeated-root case gives an extra factor of $t$:

$$x(t) = (A + Bt)\,e^{-\beta t}.$$

*In words: no oscillation at all — the fastest possible slide home.* This is the knife-edge between ringing and crawling.

**Overdamped ($\beta > \omega_0$).** Two distinct *real* negative roots $r_{1,2} = -\beta \pm \sqrt{\beta^2 - \omega_0^2}$, so

$$x(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t}.$$

*In words: two pure decays, no oscillation.* The slower root ($r_1$, closer to zero) dominates the tail, so heavy damping is *slower* to settle than critical — friction gets in its own way.

**Quality factor.** How many times does an underdamped system ring before it dies? That's the **quality factor**

$$Q = \frac{\omega_0}{2\beta} = \frac{\omega_0}{\gamma}, \qquad \gamma \equiv 2\beta = \frac{b}{m}\ (\mathrm{s^{-1}}),$$

where $\gamma$ is the **energy decay rate**. Since energy scales as amplitude squared, $E(t) \propto \big(e^{-\beta t}\big)^2 = e^{-2\beta t} = e^{-\gamma t}$. *In words: high $Q$ means light damping — many clean rings before the sound fades (a tuning fork, $Q \sim 10^3$); low $Q$ means it barely rings at all ($Q = \tfrac12$ is exactly critical damping).*

## Picture

![Three displacement-versus-time decay curves from the same starting amplitude: an underdamped blue cosine ringing inside a dashed decay envelope, a coral critically damped curve returning fastest without overshoot, and a grey overdamped curve crawling back most slowly](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (classify and read off the ring).** A mass has $m = 0.5$ kg, $k = 200$ N/m, and damping coefficient $b = 4$ N·s/m. First the two constants:

$$\omega_0 = \sqrt{\frac{k}{m}} = \sqrt{\frac{200}{0.5}} = 20\ \mathrm{rad/s}, \qquad \beta = \frac{b}{2m} = \frac{4}{2(0.5)} = 4\ \mathrm{s^{-1}}.$$

Since $\beta = 4 < \omega_0 = 20$, it's **underdamped**. The ring frequency is barely shifted:

$$\omega_1 = \sqrt{\omega_0^2 - \beta^2} = \sqrt{400 - 16} = \sqrt{384} \approx 19.6\ \mathrm{rad/s},$$

and the quality factor is $Q = \omega_0/(2\beta) = 20/8 = 2.5$ — a couple of visible rings before it fades. Notice how weakly $\beta$ pulls the frequency down: even at $Q = 2.5$, $\omega_1$ is within 2% of $\omega_0$.

**Example 2 (why you'd design for critical).** You're building a shock absorber for that same spring-and-mass ($m = 0.5$ kg, $k = 200$ N/m). You want the car to settle after a bump *fast, with no bounce* — critical damping, $\beta = \omega_0 = 20\ \mathrm{s^{-1}}$. Solve for the required $b$:

$$\beta = \frac{b}{2m} = \omega_0 \;\Longrightarrow\; b = 2m\omega_0 = 2(0.5)(20) = 20\ \mathrm{N\cdot s/m}.$$

Use less than $20$ and the car bounces (underdamped, uncomfortable); use more and it wallows sluggishly over the next bump (overdamped, unsafe). Critical damping is the sweet spot, and it corresponds to $Q = \tfrac12$. This is the same "borderline case" the repeated-root solution in `ode-refresher` singles out — here it has a name and a paycheck.

## Watch out

- **You might think overdamped returns fastest because the friction is strongest.** It's the opposite — heavy friction fights *all* motion, including the motion back toward equilibrium, so an overdamped system settles *slower* than a critically damped one. Critical is the fastest non-oscillatory return; more damping only hurts.
- **You might use $\omega_0$ as the ringing frequency.** A damped oscillator rings at $\omega_1 = \sqrt{\omega_0^2 - \beta^2}$, which is *below* $\omega_0$. The two are close only for light damping (high $Q$); as $\beta \to \omega_0$, $\omega_1 \to 0$ and the oscillation disappears entirely.
- **You might mix up the amplitude and energy decay rates.** Amplitude decays as $e^{-\beta t}$; energy, being amplitude-squared, decays *twice as fast*, as $e^{-2\beta t} = e^{-\gamma t}$. When someone quotes "the decay rate," check whether they mean $\beta$ (amplitude) or $\gamma = 2\beta$ (energy).

## One-liner

> Add a drag $-b\dot x$ and the oscillator's fate is set by $\beta$ vs. $\omega_0$: ring with a decaying envelope ($\beta < \omega_0$), snap home fastest ($\beta = \omega_0$), or crawl ($\beta > \omega_0$).

## Problems

**P1 (🟢)** A damped oscillator has $m = 2$ kg, $k = 50$ N/m, and $b = 12$ N·s/m. Compute $\omega_0$ and $\beta$, classify the damping regime, and — if it oscillates — find the ring frequency $\omega_1$.

**P2 (🟡)** For the same $m = 2$ kg and $k = 50$ N/m, what value of $b$ makes the system critically damped? What is $Q$ in that case?

**P3 (🔴, optional)** An underdamped system has $Q = 20$. By what factor does its *energy* drop over one full ring (one period $T_1 = 2\pi/\omega_1$)? Assume light damping so $\omega_1 \approx \omega_0$.

<details>
<summary>Solutions</summary>

**P1** Compute the two constants:

$$\omega_0 = \sqrt{\frac{k}{m}} = \sqrt{\frac{50}{2}} = \sqrt{25} = 5\ \mathrm{rad/s}, \qquad \beta = \frac{b}{2m} = \frac{12}{2(2)} = 3\ \mathrm{s^{-1}}.$$

Since $\beta = 3 < \omega_0 = 5$, the system is **underdamped**. The ring frequency is

$$\omega_1 = \sqrt{\omega_0^2 - \beta^2} = \sqrt{25 - 9} = \sqrt{16} = 4\ \mathrm{rad/s}.$$

*Check.* Units: $\beta = (\mathrm{N\cdot s/m})/\mathrm{kg} = (\mathrm{kg\,s^{-1}})/\mathrm{kg} = \mathrm{s^{-1}}$ ✓. And $\omega_1 < \omega_0$ as it must be for any damping ✓. (The 3-4-5 triangle is a giveaway the numbers were chosen to be clean.)

**P2** Critical damping means $\beta = \omega_0$, i.e. $\dfrac{b}{2m} = \sqrt{\dfrac{k}{m}}$, so

$$b = 2m\omega_0 = 2m\sqrt{\frac{k}{m}} = 2\sqrt{mk} = 2\sqrt{(2)(50)} = 2\sqrt{100} = 20\ \mathrm{N\cdot s/m}.$$

At critical damping $Q = \dfrac{\omega_0}{2\beta} = \dfrac{\omega_0}{2\omega_0} = \dfrac12$.

*Check.* $b = 2\sqrt{mk}$ is the standard critical-damping formula; units $\sqrt{\mathrm{kg}\cdot\mathrm{N/m}} = \sqrt{\mathrm{kg}\cdot\mathrm{kg\,s^{-2}}} = \mathrm{kg/s} = \mathrm{N\cdot s/m}$ ✓. And $Q = \tfrac12$ is always the critical value, independent of the specific $m,k$ ✓.

**P3** Energy decays as $E(t) = E_0\,e^{-\gamma t}$ with $\gamma = 2\beta = \omega_0/Q$. Over one period $T_1 = 2\pi/\omega_1 \approx 2\pi/\omega_0$, the exponent is

$$\gamma T_1 = \frac{\omega_0}{Q}\cdot\frac{2\pi}{\omega_0} = \frac{2\pi}{Q} = \frac{2\pi}{20} \approx 0.314.$$

So the energy ratio after one ring is

$$\frac{E(T_1)}{E_0} = e^{-2\pi/Q} = e^{-0.314} \approx 0.73.$$

The energy drops to about **73%** — a loss of roughly 27% per cycle.

*Check.* This is exactly why $Q$ is defined as it is: to leading order $Q = 2\pi \times (\text{energy stored})/(\text{energy lost per cycle})$, so fractional loss per cycle $\approx 2\pi/Q$. For $Q = 20$ that's $\approx 0.31$, matching the exact $1 - e^{-0.314} = 0.27$ closely for light damping ✓. Higher $Q$ ⟹ less lost per ring, as expected ✓.

</details>

## Connections

- **Backward:** set $b = 0$ (so $\beta = 0$) and this collapses to [1.1](01-01-simple-harmonic-motion.md)'s $\ddot x + \omega_0^2 x = 0$, roots $r = \pm i\omega_0$ — pure undamped ringing, $Q = \infty$. Damping is SHM with the imaginary roots nudged left into the complex plane, giving them a decaying real part.
- **Forward:** [1.3 Driven oscillations & resonance](01-03-driven-oscillations-resonance.md) adds a sinusoidal push $F_0\cos(\Omega t)$. The same $\beta$ and $\omega_0$ then set *how sharp* the resonance peak is — high $Q$ (light damping) gives a tall, narrow peak — and the resonant drive frequency lands near $\omega_0$ but shifted by $\beta$, echoing the $\omega_1$ shift here.
- **Sideways (ODEs):** the three damping regimes *are* the three discriminant cases of a second-order constant-coefficient ODE ([`ode-refresher` syllabus](../../ode-refresher/syllabus.md)): complex roots ↔ underdamped, repeated root ↔ critically damped, distinct real roots ↔ overdamped. Physics gives the abstract $b^2 - 4ac$ a face.
