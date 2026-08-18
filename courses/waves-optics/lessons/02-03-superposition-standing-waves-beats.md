# Waves & Optics · Lesson 2.3: Superposition, standing waves & beats

> ⏱ ~15 min · Module 2: Waves & superposition · Builds on: [2.2 Waves on strings & sound](02-02-waves-on-strings-sound.md), [2.1 The wave equation & traveling waves](02-01-wave-equation-traveling-waves.md) · Unlocks: [2.4 Light as an electromagnetic wave](02-04-light-as-em-wave.md) and Module 4 (interference & diffraction)

## Why this matters

Every note a guitar plays, every pipe an organ sounds, every resonance in a laser cavity or a microwave oven is the *same* phenomenon: two waves crossing the same patch of space and adding up. When they run in opposite directions you get a **standing wave** — a shape that vibrates in place, the reason a fixed string sings only a discrete set of pitches. When two nearby frequencies overlap you get **beats** — the throbbing you use to tune an instrument by ear. Both fall straight out of one fact you already have: the wave equation is linear, so waves add. Get this lesson and you've got the engine behind all of Module 4's interference.

## The idea

The wave equation from [2.1](02-01-wave-equation-traveling-waves.md) is **linear**: no wave gets squared, no two waves get multiplied. The payoff is enormous. If $y_1(x,t)$ solves it and $y_2(x,t)$ solves it, then their plain sum $y_1 + y_2$ solves it too. That's the **superposition principle**: where two waves overlap, the medium's displacement is just the arithmetic sum of what each wave would do alone. They pass through each other and come out the far side unchanged — no collision, no memory.

Two consequences carry this lesson. First, send two *identical* waves in *opposite* directions (a wave and its reflection off a wall, say) and the sum stops traveling — it becomes a fixed pattern that just breathes up and down. That's a standing wave, and if you pin the ends (a guitar string), only certain wavelengths fit, giving the string its harmonics. Second, add two waves of *slightly different* frequency and their sum swells loud–soft–loud as they drift in and out of step: beats.

## The formal version

**Superposition principle.** If $y_1$ and $y_2$ each satisfy the wave equation $\partial^2 y/\partial t^2 = v^2\,\partial^2 y/\partial x^2$, so does $a\,y_1 + b\,y_2$ for any constants $a,b$. *In words: solutions add; scaling and summing waves gives more waves.* This is just linearity of the derivative — nothing deeper — but it is the whole foundation.

**Two counter-propagating waves → a standing wave.** Take equal-amplitude waves of the same $k$ and $\omega$ going right and left (recall $k = 2\pi/\lambda$ is the wavenumber, $\omega = 2\pi f$ the angular frequency, from [2.1](02-01-wave-equation-traveling-waves.md)):

$$y(x,t) = A\cos(kx - \omega t) + A\cos(kx + \omega t).$$

Use $\cos(P) + \cos(Q) = 2\cos\!\big(\tfrac{P+Q}{2}\big)\cos\!\big(\tfrac{P-Q}{2}\big)$ with $P = kx-\omega t$, $Q = kx+\omega t$:

$$\boxed{\,y(x,t) = 2A\cos(kx)\,\cos(\omega t)\,}$$

*In words: space and time have separated.* The shape $2A\cos(kx)$ is frozen in place; the $\cos(\omega t)$ just scales the whole thing up and down like a breathing lung. Nothing travels — there is **no net energy transport**, because equal energy flows each way and cancels.

- **Nodes** — points that never move — sit where $\cos(kx) = 0$, i.e. $kx = \tfrac{\pi}{2}, \tfrac{3\pi}{2}, \dots$, spaced half a wavelength apart.
- **Antinodes** — points that swing with full amplitude $2A$ — sit where $|\cos(kx)| = 1$, halfway between the nodes.

**A string fixed at both ends (length $L$).** The ends can't move, so they must be nodes: $y(0,t) = y(L,t) = 0$ for all $t$. To pin a node at $x=0$, use the sine form $y = 2A\sin(kx)\cos(\omega t)$ (same physics as the cosine standing wave, shifted by a quarter wavelength). The remaining constraint, a node at $x = L$, forces a whole number of half-wavelengths to fit in $L$:

$$L = n\,\frac{\lambda_n}{2} \quad\Longrightarrow\quad \boxed{\,\lambda_n = \frac{2L}{n},\qquad f_n = \frac{v}{\lambda_n} = n\,\frac{v}{2L} = n f_1\,}, \qquad n = 1, 2, 3, \dots$$

*In words: only wavelengths that fit a whole number of loops between the walls survive; their frequencies are integer multiples of the lowest one.* The lowest, $n=1$, is the **fundamental**; the rest are **harmonics**. Using the string speed $v = \sqrt{T/\mu}$ from [2.2](02-02-waves-on-strings-sound.md) (tension $T$ in newtons, linear density $\mu$ in kg/m):

$$f_1 = \frac{v}{2L} = \frac{1}{2L}\sqrt{\frac{T}{\mu}}.$$

Tighten the string (raise $T$) and every $f_n$ rises — that's how you tune.

**Beats.** Now add two waves at a *single point* (your ear) with slightly different frequencies $f_1, f_2$ and equal amplitude:

$$y(t) = A\cos(2\pi f_1 t) + A\cos(2\pi f_2 t) = 2A\underbrace{\cos\!\big(2\pi f_{\text{avg}} t\big)}_{\text{fast tone}}\ \underbrace{\cos\!\big(2\pi \tfrac{\Delta f}{2} t\big)}_{\text{slow envelope}},$$

with $f_{\text{avg}} = \tfrac{f_1+f_2}{2}$ and $\Delta f = f_1 - f_2$. *In words: you hear a tone at the average pitch whose loudness is slowly swelled up and down by an envelope.* Here's the subtlety: loudness tracks the *magnitude* $|\cos(2\pi\tfrac{\Delta f}{2}t)|$, and $|\cos|$ peaks **twice** per envelope cycle (once positive, once negative — both are loud). So the beat you *hear* comes at twice the envelope frequency:

$$\boxed{\,f_{\text{beat}} = |f_1 - f_2|\,}.$$

*In words: the number of loudness swells per second equals the frequency difference.* Two strings 3 Hz apart throb three times a second.

## Picture

![Top: three standing-wave modes (n=1,2,3) on a string fixed at both ends, with nodes, antinodes, and wavelengths 2L, L, 2L/3 marked. Bottom: a beat waveform — a fast carrier inside a slow envelope, with the beat period T_beat marked between two loud swells and the quiet nodes labeled.](assets/02-03-fig1.svg)

## Worked examples

**Example 1 (harmonics of a fixed string).** A string of length $L = 0.65$ m carries waves at speed $v = 260$ m/s. Its allowed frequencies are $f_n = n\,v/(2L)$:

$$f_1 = \frac{260}{2(0.65)} = \frac{260}{1.3} = 200\ \text{Hz}, \qquad f_2 = 400\ \text{Hz}, \qquad f_3 = 600\ \text{Hz}.$$

The fundamental is 200 Hz; the string can *only* sound 200, 400, 600, … Hz — never 300. The $n=3$ mode has wavelength $\lambda_3 = 2L/3 \approx 0.43$ m and two interior nodes (at $x = L/3$ and $2L/3$), matching the bottom string in the figure.

**Example 2 (tuning by beats — the Boss-problem move).** You sound a string against a 440 Hz tuning fork and hear a throb 4 times per second. What is the string's frequency? Since $f_{\text{beat}} = |f_{\text{string}} - 440| = 4$, the string is at **either 444 Hz or 436 Hz** — the beat alone can't tell you which, because it only sees the *magnitude* of the difference. To break the tie, *tighten* the string a hair (raising its frequency) and listen:

- If the beat **slows** (fewer throbs/s), you moved *toward* the fork — you were **below**, at 436 Hz.
- If the beat **speeds up**, you moved *away* — you were **above**, at 444 Hz.

This is exactly the two-candidate logic in **Boss problem 2**, where a fork gives you a difference but not a sign, and a controlled tweak resolves it.

## Watch out

- **You might think a standing wave carries energy down the string.** It doesn't — the boxed form $2A\cos(kx)\cos(\omega t)$ has no $(x - vt)$ traveling structure. Energy sloshes between kinetic and potential *in place*; net transport is zero (equal power each way cancels).
- **You might set $f_{\text{beat}}$ equal to the envelope frequency $\Delta f/2$.** No — you *hear* $|f_1 - f_2| = \Delta f$, twice the envelope's own frequency, because loudness peaks on *both* humps of each envelope cycle. Off by a factor of two is the classic beats error.
- **You might expect any wavelength on a fixed string.** Only $\lambda_n = 2L/n$ fit — the boundary conditions quantize the spectrum. (Change the ends — one free end, say — and you get a *different* allowed set. Pinning matters.)

## One-liner

> Linearity lets waves add: run two the same way in opposite directions and you get a standing wave whose fixed ends force $f_n = n\,v/2L$; add two nearly-equal tones and you hear beats at $f_{\text{beat}} = |f_1 - f_2|$.

## Problems

**P1 (🟢)** A guitar string of length $L = 0.64$ m has tension $T = 80$ N and linear density $\mu = 1.25\times 10^{-3}$ kg/m. Find the wave speed, the fundamental frequency $f_1$, and the third harmonic $f_3$.

**P2 (🟡)** A piano string is meant to sound the note A at 220 Hz. Struck against a 220 Hz tuning fork, it produces 2 beats per second. List the two possible frequencies of the string, and state what you'd hear if you *loosened* the string to decide which is correct.

**P3 (🔴, optional)** You have two whistles at 512 Hz and 516 Hz sounded together. (a) What beat frequency do you hear, and what is the pitch of the tone underneath the throbbing? (b) How long is one beat period $T_{\text{beat}}$?

<details>
<summary>Solutions</summary>

**P1** Wave speed from the medium ([2.2](02-02-waves-on-strings-sound.md)):

$$v = \sqrt{\frac{T}{\mu}} = \sqrt{\frac{80}{1.25\times 10^{-3}}} = \sqrt{64\,000} = 253\ \text{m/s}.$$

Fundamental and third harmonic:

$$f_1 = \frac{v}{2L} = \frac{253}{2(0.64)} = \frac{253}{1.28} \approx 198\ \text{Hz}, \qquad f_3 = 3f_1 \approx 593\ \text{Hz}.$$

*Check.* Units: $\sqrt{\text{N}/(\text{kg/m})} = \sqrt{(\text{kg·m/s}^2)/(\text{kg/m})} = \sqrt{\text{m}^2/\text{s}^2} = \text{m/s}$ ✓. And $\approx 198$ Hz is a hair flat of a real guitar's low-ish string — plausible for these numbers. Harmonics are exact integer multiples, so $f_3 = 3f_1$ with no separate calculation. ✓

**P2** The beat frequency is the magnitude of the difference: $|f_{\text{string}} - 220| = 2$, so

$$f_{\text{string}} = 222\ \text{Hz} \quad\text{or}\quad 218\ \text{Hz}.$$

Loosening the string lowers its frequency. If it was **above** (222 Hz), lowering it moves it *toward* 220, so the beat **slows down**. If it was **below** (218 Hz), lowering it moves it *away* from 220, so the beat **speeds up**. So: loosen and listen — slower beat means you started at 222 Hz, faster beat means 218 Hz.

*Check.* This mirrors Example 2 with the tweak reversed (loosening instead of tightening), and the logic is symmetric: any controlled change to the string's pitch resolves the sign of $\Delta f$. Sanity: a 2 Hz beat with a 220 Hz reference means the string is within about 1% of tune. ✓

**P3** (a) Beat frequency is the difference: $f_{\text{beat}} = |516 - 512| = 4$ Hz — four swells per second. The tone underneath is at the average, $f_{\text{avg}} = \tfrac{512+516}{2} = 514$ Hz.

(b) One beat period is the reciprocal of the beat frequency:

$$T_{\text{beat}} = \frac{1}{f_{\text{beat}}} = \frac{1}{4} = 0.25\ \text{s}.$$

*Check.* The envelope's *own* frequency is $\Delta f/2 = 2$ Hz, but loudness peaks twice per envelope cycle, so beats come at 4 Hz — the factor-of-two "watch out." Units: $1/\text{Hz} = 1/\text{s}^{-1} = \text{s}$ ✓. A quarter-second between throbs is easy to hear, which is why beats make such a good tuning tool. ✓

</details>

## Flashback

**From Lesson 2.2 (Waves on strings & sound):** A steel wire 1.2 m long is under 90 N of tension and has mass 6.0 g. Find its linear density $\mu$ and the speed of a transverse wave on it.

<details>
<summary>Solution</summary>

Linear density is mass per length:

$$\mu = \frac{m}{L} = \frac{6.0\times 10^{-3}\ \text{kg}}{1.2\ \text{m}} = 5.0\times 10^{-3}\ \text{kg/m}.$$

Then the wave speed:

$$v = \sqrt{\frac{T}{\mu}} = \sqrt{\frac{90}{5.0\times 10^{-3}}} = \sqrt{18\,000} \approx 134\ \text{m/s}.$$

*Check.* Units of $\mu$: kg/m ✓. Speed units: $\sqrt{\text{N}/(\text{kg/m})} = \text{m/s}$ ✓. A heavier or slacker wire would carry waves more slowly — raising $T$ or lowering $\mu$ speeds them up, exactly as tuning a string relies on. ✓ (This $v$ is the input to $f_n = nv/2L$ once you fix the wire at both ends — the very move that opens this lesson.)

</details>

## Connections

- **Backward:** superposition is nothing but the *linearity* of the wave equation from [2.1](02-01-wave-equation-traveling-waves.md), and the standing-wave frequencies ride on the string speed $v = \sqrt{T/\mu}$ derived in [2.2](02-02-waves-on-strings-sound.md). The "breathing in place" of a standing wave is the same energy-swap between kinetic and potential you saw in a single oscillator back in [1.1 Simple harmonic motion](01-01-simple-harmonic-motion.md) — each point on the string is its own SHM, all sharing one frequency.
- **Forward:** counter-propagating light waves make the standing-wave modes of a laser cavity, and two *coherent* light beams meeting at a screen give the interference fringes of [4.1 Interference: double slit & thin films](04-01-interference-double-slit-thin-films.md) — beats and standing waves are interference in time and space, respectively.
- **Sideways (Fourier analysis):** the harmonics $f_n = nf_1$ are exactly the terms of a **Fourier series** — any shape you pluck into a fixed string is a weighted sum of these modes, and the coefficients are its overtone recipe. That machinery is [`fourier-analysis`](../../fourier-analysis/syllabus.md), and it returns in [2.4](02-04-light-as-em-wave.md)'s spectrum and [4.4 Wave packets, dispersion & Fourier synthesis](04-04-wave-packets-dispersion-fourier.md).
