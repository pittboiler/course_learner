# Waves & Optics · Lesson 4.4: Wave packets, dispersion & Fourier synthesis

> ⏱ ~15 min · Module 4: Physical optics · Builds on: [2.3 Superposition, standing waves & beats](02-03-superposition-standing-waves-beats.md), [2.1 The wave equation & traveling waves](02-01-wave-equation-traveling-waves.md) · Unlocks: quantum mechanics (a particle *is* a wave packet) and the [`fourier-analysis`](../../fourier-analysis/syllabus.md) course

## Why this matters

A pure sine wave is a lie: it stretches from $-\infty$ to $+\infty$, everywhere at once, forever. Nothing real is like that. A laser flash, a spoken syllable, a photon, an electron — every real signal is **localized**: it's *here*, for a *while*, then gone. This lesson answers two questions that run the rest of physics. First: how do you build a localized bump out of the only thing the wave equation hands you, endless sines? (Answer: **Fourier synthesis** — add up many.) Second: once you've built that bump, does it hold together as it travels, or does it fall apart? (Answer: **dispersion** — it depends on the medium.) Get these and you've got the seed of the uncertainty principle, the reason a prism makes rainbows, and the bottleneck in every fiber-optic cable.

## The idea

Back in [2.3](02-03-superposition-standing-waves-beats.md) you added *two* nearby frequencies and got **beats** — a fast wave inside a slow, throbbing envelope. Now imagine adding not two but a whole *continuum* of frequencies, cunningly chosen. The envelope stops being a repeating throb and pulls itself into a single lump: a **wave packet**, a burst of oscillation that's large in one place and essentially zero everywhere else. That lump is a wave packet, and it's the honest picture of any real signal.

Two facts about that lump drive everything. The first is a trade-off you can feel: to make the packet *narrow* in space, you have to throw in a *wide* range of wavelengths. A single note is spread out and pure; a sharp *click* is compact but contains every pitch at once. Squeeze in space, spread in wavenumber — you can't cheat both. The second fact is about motion. The packet has *two* speeds: the little crests inside it slide along at one speed (the **phase velocity**), while the lump as a whole — the envelope carrying the energy and the message — glides at *another* (the **group velocity**). In empty space or on an ideal string these two speeds are equal and the packet sails along rigid. In glass, water, or an optical fiber they differ, the component waves march out of step, and the packet **spreads** — smears out, loses its punch. That spreading is dispersion.

## The formal version

**Fourier synthesis.** Any reasonable waveform $f(x)$ can be written as a sum (or integral) of sinusoids:

$$f(x) = \int_{-\infty}^{\infty} A(k)\,e^{ikx}\,dk,$$

where $k$ is the **wavenumber** (rad/m, from [2.1](02-01-wave-equation-traveling-waves.md): $k = 2\pi/\lambda$) and $A(k)$ is the **amplitude** of the component with that wavenumber — the *spectrum*. *In words: hand me any shape and I'll tell you exactly how much of each pure sine to stir together to rebuild it.* For a **periodic** shape the integral collapses to a discrete sum over **harmonics** (integer multiples of a fundamental $k_0$) — that's a Fourier *series*. The classic example: a **square wave** of period $\lambda = 2\pi/k_0$ is built from *odd* harmonics only,

$$f_\text{sq}(x) = \frac{4}{\pi}\left(\sin k_0 x + \frac{1}{3}\sin 3k_0 x + \frac{1}{5}\sin 5k_0 x + \cdots\right) = \frac{4}{\pi}\sum_{n\,\text{odd}} \frac{1}{n}\sin n k_0 x .$$

Each new odd harmonic sharpens the corners; the fundamental alone is just a fat sine.

**The bandwidth relation.** If a packet is localized to a width $\Delta x$ in space and made of wavenumbers spanning a width $\Delta k$, those widths are locked together:

$$\boxed{\;\Delta x\,\Delta k \gtrsim 1\;}\qquad\text{and in time–frequency}\qquad \Delta t\,\Delta\omega \gtrsim 1 .$$

*In words: a short pulse must be broadband — you cannot have something both brief and single-frequency.* ("$\gtrsim$" means "greater than about"; the exact constant depends on how you define the widths.) This is pure Fourier mathematics, no physics yet — but multiply the second form by $\hbar$ and it *becomes* Heisenberg's $\Delta t\,\Delta E \gtrsim \hbar$. The uncertainty principle is this bandwidth relation wearing a quantum hat.

**The dispersion relation.** Each sinusoidal component travels according to how the medium links its frequency to its wavenumber:

$$\omega = \omega(k)\qquad(\textbf{dispersion relation}).$$

*In words: the rule the medium uses to assign a frequency to each wavelength.* On an ideal string or in vacuum it's a straight line, $\omega = vk$, with $v$ the same for every $k$. When it's *curved* (nonlinear), different wavelengths travel at different speeds — the medium is **dispersive**. Two speeds fall out of it:

$$v_p = \frac{\omega}{k}\quad(\textbf{phase velocity, a single crest}),\qquad v_g = \frac{d\omega}{dk}\quad(\textbf{group velocity, the envelope}).$$

*In words: $v_p$ is how fast one crest slides; $v_g = d\omega/dk$ is how fast the lump — the energy, the information — travels.* If $\omega = vk$ (non-dispersive), then $v_p = v$ and $v_g = d\omega/dk = v$ too: **the two speeds coincide and the packet keeps its shape** (this is why 2.1's ideal pulse glided rigidly). If $\omega(k)$ curves, then $v_g \neq v_p$: the components drift apart in phase and **the packet spreads** as it goes.

**Normal vs. anomalous.** In glass the refractive index $n(\lambda)$ (from [3.1](03-01-reflection-refraction-snell.md), where $v = c/n$) usually *rises* toward the blue — **normal dispersion**, so blue light is slowed most and bent most, which is why a prism fans white light into a spectrum ([4.1](04-01-interference-double-slit-thin-films.md) hinted at this). Near a material's absorption bands the trend reverses (**anomalous dispersion**). Either way, a pulse of many colors broadens as it travels — the reason data pulses smear out over long optical fibers.

## Picture

![Top: three sinusoids of different wavenumber summing to a single localized pulse (Fourier synthesis), with the dashed envelope of the sum. Bottom: a wave packet whose fast interior carrier crests move at the phase velocity v_p while its slower dashed envelope moves at the group velocity v_g](assets/04-04-fig1.svg)

Top panel: stack up sinusoids of different $k$ and — with the right amplitudes — everything cancels except in one spot, leaving a lone pulse (blue) inside its envelope (dashed). Bottom panel: the packet in motion. The tight interior crests ("carrier") race along at $v_p = \omega/k$; the dashed envelope drifts at $v_g = d\omega/dk$. When those two arrows have different lengths, the crests visibly slide *through* the envelope — and the lump spreads.

## Worked examples

**Example 1 (two speeds from a dispersion relation).** Deep-water ocean waves obey $\omega(k) = \sqrt{gk}$, with $g = 9.8\ \mathrm{m/s^2}$. The phase velocity is

$$v_p = \frac{\omega}{k} = \frac{\sqrt{gk}}{k} = \sqrt{\frac{g}{k}},$$

while the group velocity is

$$v_g = \frac{d\omega}{dk} = \frac{d}{dk}\big(g^{1/2}k^{1/2}\big) = \tfrac12\,g^{1/2}k^{-1/2} = \tfrac12\sqrt{\frac{g}{k}} = \tfrac12\,v_p .$$

So the **envelope travels at half the crest speed** — watch a patch of ocean swell and you'll see individual crests appear at the back of a group, roll forward through it, and vanish at the front, because they're moving twice as fast as the group they belong to. This is a genuinely dispersive medium: $v_g \neq v_p$, so any localized swell spreads as it crosses the ocean, which is why distant-storm swell arrives sorted by wavelength (the long waves first).

**Example 2 (why brief means broadband).** An ultrafast laser emits a pulse lasting $\Delta t = 5\ \mathrm{fs} = 5\times10^{-15}\,\mathrm{s}$ (a few optical cycles). The bandwidth relation forces a spread in angular frequency of at least

$$\Delta\omega \gtrsim \frac{1}{\Delta t} = \frac{1}{5\times10^{-15}} = 2\times10^{14}\ \mathrm{rad/s}.$$

The pulse is centered near $\lambda = 800\ \mathrm{nm}$, i.e. $\omega_0 = 2\pi c/\lambda \approx 2.4\times10^{15}\ \mathrm{rad/s}$, so $\Delta\omega/\omega_0 \approx 0.08$ — the "single-color" laser must actually span about $8\%$ of its own frequency, a visible chunk of the spectrum. *You cannot make a pulse this short out of one pure color;* brevity demands bandwidth. (And because the pulse contains many colors, dispersion in any glass it passes through will stretch it — femtosecond labs spend real effort *un*-dispersing their beams.)

## Watch out

- **You might think the group velocity is just an average of the crest speeds.** It's not an average — it's a *derivative*, $v_g = d\omega/dk$, the local slope of the dispersion curve. Example 1's factor of $\tfrac12$ comes straight from differentiating $\sqrt{k}$, and in exotic media $v_g$ can even point *backwards* or exceed the crest speed while the energy still behaves.
- **You might think a narrower pulse is "purer."** Opposite: narrower in space (small $\Delta x$) forces a *wider* spread of wavenumbers (large $\Delta k$), by $\Delta x\,\Delta k \gtrsim 1$. Pure tone $\Leftrightarrow$ infinitely long wave. Sharp click $\Leftrightarrow$ all frequencies.
- **You might expect every pulse to spread.** Only in a *dispersive* medium. In vacuum (light) or on the ideal string of [2.1](02-01-wave-equation-traveling-waves.md), $\omega = vk$ is a straight line, so $v_g = v_p$ and the packet holds its shape forever — that's exactly what made d'Alembert's "any shape glides rigidly" true.

## One-liner

> A real signal is a packet of many sines — narrow in space means broad in $k$ ($\Delta x\,\Delta k\gtrsim1$) — and it holds shape only where $\omega(k)$ is straight; curve that line and the crest speed $\omega/k$ splits from the envelope speed $d\omega/dk$, and the packet spreads.

## Problems

**P1 (🟢)** A dispersion relation is $\omega(k) = c\,k$ with $c$ constant (light in vacuum). Compute $v_p$ and $v_g$. Then do the same for a hypothetical medium with $\omega(k) = \alpha k^2$ ($\alpha$ constant). In which medium does a pulse keep its shape, and why?

**P2 (🟡)** A pulse of sound lasts $\Delta t = 2\ \mathrm{ms}$. Estimate the minimum spread in ordinary frequency $\Delta f$ (in Hz) it must contain. Given that middle C is about 262 Hz, comment on whether such a pulse can carry a well-defined pitch.

**P3 (🔴, optional)** Using the square-wave series $f_\text{sq}(x) = \frac{4}{\pi}\sum_{n\,\text{odd}}\frac{1}{n}\sin nk_0x$: (a) explain why only *odd* harmonics appear; (b) evaluate the first three nonzero terms at the quarter-period point $x = \lambda/4$ (where $k_0x = \pi/2$), and say what value the full series converges to there.

<details>
<summary>Solutions</summary>

**P1** For $\omega = ck$:

$$v_p = \frac{\omega}{k} = \frac{ck}{k} = c, \qquad v_g = \frac{d\omega}{dk} = c.$$

They're equal, so the medium is **non-dispersive** — a pulse keeps its shape (this is light in vacuum, and 2.1's ideal string). For $\omega = \alpha k^2$:

$$v_p = \frac{\omega}{k} = \frac{\alpha k^2}{k} = \alpha k, \qquad v_g = \frac{d\omega}{dk} = 2\alpha k = 2\,v_p .$$

Here both speeds depend on $k$, so different-wavelength components travel at different speeds: the medium is **dispersive** and a pulse **spreads**. (Notice $v_g = 2v_p$ here — the mirror image of the deep-water $v_g = \tfrac12 v_p$.)

*Check.* Units: $v = \omega/k = (\mathrm{rad/s})/(\mathrm{rad/m}) = \mathrm{m/s}$ ✓. Shape is preserved exactly when $\omega(k)$ is a straight line through the origin — only then is $\omega/k$ (the value) equal to $d\omega/dk$ (the slope), for every $k$. ✓

**P2** With $\Delta t\,\Delta\omega \gtrsim 1$ and $\omega = 2\pi f$, we have $\Delta\omega = 2\pi\,\Delta f$, so $\Delta f \gtrsim \dfrac{1}{2\pi\,\Delta t}$:

$$\Delta f \gtrsim \frac{1}{2\pi \times 2\times10^{-3}} \approx \frac{1}{0.0126} \approx 80\ \mathrm{Hz}.$$

An 80 Hz spread around a few-hundred-Hz tone is a large fraction of the pitch, so a 2 ms blip has a *fuzzy* pitch — a fraction of a musical semitone at best. This is real: very short musical notes sound more like clicks than pitches, and it's why a bass drum (long, low, well-defined) and a woodblock (short, pitchless) sit at opposite ends. To pin a pitch precisely you need a longer note.

*Check.* Units: $1/(\mathrm{s}) = \mathrm{Hz}$ ✓. Limiting sense: a *longer* note (bigger $\Delta t$) gives a *smaller* $\Delta f$ — a purer pitch — exactly as a sustained organ note sounds more definite than a staccato tap. ✓

**P3** (a) A square wave centered on the axis is an **odd** function ($f(-x) = -f(x)$), so its Fourier series contains only sines, not cosines. It also has **half-wave symmetry**, $f(x + \lambda/2) = -f(x)$ (the second half is the flipped first half); a component $\sin nk_0x$ has this property only for **odd** $n$, so the even harmonics must have zero amplitude. Hence odd harmonics only.

(b) At $x = \lambda/4$, $k_0x = \pi/2$, so $\sin(n\pi/2)$ for $n = 1,3,5$ gives $+1, -1, +1$. The partial sum of the first three nonzero terms:

$$\frac{4}{\pi}\left(1 - \frac13 + \frac15\right) = \frac{4}{\pi}\times 0.8667 \approx 1.10 .$$

The full series is $\dfrac{4}{\pi}\left(1 - \tfrac13 + \tfrac15 - \tfrac17 + \cdots\right)$, and the bracket is the Leibniz series for $\pi/4$, so the sum converges to $\dfrac{4}{\pi}\cdot\dfrac{\pi}{4} = 1$ — the square wave's height there. Three terms (1.10) already hover near 1; more terms tighten it.

*Check.* The exact convergence to $1$ is a clean sanity test: at a *flat* part of the square wave the series must reproduce the constant value, and it does. (The famous Gibbs overshoot lives at the *jumps*, not here.) ✓

</details>

## Flashback

**From Lesson 2.3 (Superposition, standing waves & beats):** Two flutes play steady tones at $f_1 = 523\ \mathrm{Hz}$ and $f_2 = 519\ \mathrm{Hz}$. Find the beat frequency you'd hear and the period between loudness peaks. *(Fresh variant — new numbers, and now recognize this as the two-component ancestor of today's continuous packet.)*

<details>
<summary>Solution</summary>

Superposing two nearby frequencies gives an amplitude that throbs at the **beat frequency**, the difference:

$$f_\text{beat} = |f_1 - f_2| = |523 - 519| = 4\ \mathrm{Hz}, \qquad T_\text{beat} = \frac{1}{f_\text{beat}} = \frac{1}{4} = 0.25\ \mathrm{s}.$$

You hear the combined tone swell loud–soft four times a second, at the average carrier pitch $\tfrac12(f_1+f_2) = 521\ \mathrm{Hz}$.

*Check.* Units: $\mathrm{Hz} = 1/\mathrm{s}$, so $T_\text{beat} = 0.25$ s ✓. Sanity: closer frequencies $\Rightarrow$ slower beats — piano tuners exploit exactly this, tuning until the beats crawl to zero. And this is today's lesson in miniature: two frequencies make a throbbing envelope (beats); a *continuum* of them makes a single-lump envelope (a wave packet). ✓

</details>

## Connections

- **Backward:** this generalizes [2.3](02-03-superposition-standing-waves-beats.md)'s two-frequency **beats** to a continuum — a beat envelope that, with infinitely many components, sharpens into one localized packet. The rigid gliding of [2.1](02-01-wave-equation-traveling-waves.md)'s pulse is revealed as the special non-dispersive case $v_g = v_p$; the color-splitting prism of [3.1](03-01-reflection-refraction-snell.md)/[4.1](04-01-interference-double-slit-thin-films.md) is dispersion, $n(\lambda)$, in action.
- **Forward (quantum mechanics):** in QM a *particle* is a wave packet — a localized bundle of de Broglie waves whose group velocity is the particle's velocity. The bandwidth relation $\Delta x\,\Delta k \gtrsim 1$ becomes, via $p = \hbar k$, the **Heisenberg uncertainty principle** $\Delta x\,\Delta p \gtrsim \hbar$: you can't localize position and momentum at once because you can't localize a packet in space and in wavenumber at once. This course's finale is quantum mechanics' opening line.
- **Sideways ([`fourier-analysis`](../../fourier-analysis/syllabus.md)):** "any waveform is a sum/integral of sinusoids" *is* the Fourier transform, and $A(k)$ is the signal's spectrum. The square-wave series, the $\Delta x\,\Delta k$ trade-off (the Fourier uncertainty theorem), and convergence subtleties like Gibbs' overshoot are all developed rigorously there — physics gives the pictures, that course gives the proofs.
