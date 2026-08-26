# Signals & Systems · Lesson 3.4: The discrete Fourier transform

> ⏱ ~15 min · Module 3: Sampling and the discrete-time world · Builds on: [3.3 The discrete-time Fourier transform](03-03-discrete-time-fourier-transform.md), [3.1 Sampling and the Nyquist–Shannon theorem](03-01-sampling-nyquist-shannon.md) · Unlocks: 3.5 (the FFT)

## Why this matters

Every spectrum you have ever seen on a screen — the bars bouncing on an audio player, the waterfall on a spectrum analyzer, the frequency axis in a vibration report — is a **DFT**. It is the only Fourier transform a computer can actually execute, and it is the one you will run on real data for the rest of your life. This lesson is where the theory of Module 2 turns into arithmetic you can do on paper, and where two famous production bugs are born: reading bin indices as if they were frequencies, and multiplying two spectra expecting ordinary convolution.

## The idea

The DTFT of [3.3](03-03-discrete-time-fourier-transform.md) is beautiful and uncomputable. Look at what it asks for: a sum over **infinitely many** samples $n$, evaluated at a **continuous** frequency $\Omega$ that takes uncountably many values. A machine has neither infinite input nor infinite output. Two things must be chopped.

So chop both. Take only $N$ samples of the signal, and ask for the spectrum at only $N$ frequencies. Finite in, finite out — $N$ numbers to $N$ numbers. That is the whole invention.

Which $N$ frequencies? The fair ones: spread them evenly around one full turn of the DTFT's $2\pi$-periodic frequency axis. So the DFT is nothing more exotic than **the DTFT, photographed at $N$ equally spaced points**. Every value it reports is a genuine DTFT value; you simply do not get to see between the photographs.

There is a price, and it is worth naming immediately because it explains everything strange about the DFT. In [3.1](03-01-sampling-nyquist-shannon.md) you saw that *sampling in time makes the spectrum periodic*. The DFT samples in **frequency** — and the same duality runs backwards: sampling the spectrum makes the **time signal periodic**, with period $N$. The machine cannot tell your $N$ samples from an endlessly repeating loop of them. Convolution therefore wraps around the end of the block, and a tone that does not fit a whole number of cycles into the block gets a discontinuity where the loop splices. Those are circular convolution and spectral leakage, and they are not defects — they are the loop, being consistent.

## The formal version

**The DFT pair.** For a length-$N$ sequence $x[n]$, $n=0,1,\dots,N-1$:

$$\boxed{\;X[k]=\sum_{n=0}^{N-1}x[n]\,e^{-j2\pi kn/N},\quad k=0,\dots,N-1;\qquad x[n]=\frac{1}{N}\sum_{k=0}^{N-1}X[k]\,e^{+j2\pi kn/N}\;}$$

*In words: to get bin $k$, multiply the signal by a complex sinusoid that completes exactly $k$ cycles across the block and add up the result; to get the signal back, add up all $N$ sinusoids weighted by their bins and divide by $N$.* Note the asymmetry: the $1/N$ lives on the **inverse** transform, and the forward exponent carries the minus sign. This is the engineering convention (Oppenheim & Schafer); some software puts $1/\sqrt N$ on both sides, so always check your library's normalization before comparing magnitudes.

**Twiddle factors.** Write the recurring kernel as

$$W_N \equiv e^{-j2\pi/N}\qquad\Longrightarrow\qquad X[k]=\sum_{n=0}^{N-1}x[n]\,W_N^{\,kn}.$$

*In words: $W_N$ is one clockwise step of $1/N$ of a turn around the unit circle, and every DFT coefficient is a weighted sum of its powers.* Two facts make this hand-computable: $|W_N|=1$ (twiddles only rotate, never stretch), and $W_N^{\,N}=1$ (the powers cycle, so exponents only matter modulo $N$).

For $N=4$ the wheel has just four spokes, and they are all trivial:

$$W_4=e^{-j\pi/2}=-j,\qquad W_4^0=1,\quad W_4^1=-j,\quad W_4^2=(-j)^2=-1,\quad W_4^3=(-j)^3=j,\quad W_4^4=1.$$

No trigonometry, no calculator — a 4-point DFT is bookkeeping with $1,-j,-1,j$.

**The DFT is the sampled DTFT.** If $x[n]$ is zero outside $0\le n\le N-1$, its DTFT is $X(e^{j\Omega})=\sum_{n=0}^{N-1}x[n]e^{-j\Omega n}$, and

$$X[k]=X(e^{j\Omega})\Big|_{\Omega=\Omega_k},\qquad \Omega_k=\frac{2\pi k}{N}\ \text{rad/sample}.$$

*In words: bin $k$ is the exact DTFT value at the $k$-th of $N$ evenly spaced frequencies across $[0,2\pi)$.* **Gained:** a finite, exactly invertible computation — nothing is lost if the signal really is $N$ samples long, since $N$ numbers determine $N$ numbers. **Lost:** the DTFT curve *between* the samples, and — if the true signal was longer than $N$ and you truncated it — the difference between the true spectrum and the truncated one, which is leakage.

**Bin-to-frequency mapping.** This is the single most-used skill in the lesson. If the samples came from sampling at rate $f_s$ (Hz), then $\Omega = 2\pi f/f_s$, so $\Omega_k = 2\pi k/N$ corresponds to

$$\boxed{\;f_k=\frac{k\,f_s}{N}\ \text{Hz},\qquad \Delta f=\frac{f_s}{N}=\frac{1}{T_{\text{record}}}\;}$$

where $T_{\text{record}}=N/f_s$ (seconds) is how long you recorded. Consequences, each worth memorizing:

- **Bin 0 is DC.** Set $k=0$: every exponential becomes $1$, so $X[0]=\sum_{n}x[n]=N\bar x$, exactly $N$ times the average of the block.
- **Bin spacing is resolution**, and it equals $1/T_{\text{record}}$. To separate two close tones you need a **longer record**. Sampling faster does *not* help — at fixed $N$ it makes $\Delta f$ worse, and at fixed record length it leaves $\Delta f$ untouched.
- **Bins above $N/2$ are negative frequencies.** Bin $k>N/2$ sits at $\Omega_k>\pi$, which is the same as $\Omega_k-2\pi<0$; in Hz, $f_k=(k-N)f_s/N$.
- **Conjugate symmetry.** If $x[n]$ is real, then $X[N-k]=X[k]^*$ for $k=1,\dots,N-1$. *In words: the top half of the output is the mirror image of the bottom half with the sign of the imaginary part flipped — half the numbers are redundant.* ($X[0]$ is real, and for even $N$ so is $X[N/2]$.)

**Circular convolution.** Multiplying DFTs does **not** give ordinary convolution:

$$X[k]\,H[k]\;\longleftrightarrow\;(x\circledast h)[n]=\sum_{m=0}^{N-1}x[m]\,h\big[(n-m)\bmod N\big].$$

*In words: the shifted copy of $h$ wraps around the end of the block instead of running off it.* Concretely with $x=\{1,2\}$, $h=\{1,1\}$, $N=2$: the linear convolution is $\{1,3,2\}$ (length 3), but the 2-point circular convolution is $\{3,3\}$ — the tail value $2$ has wrapped onto index 0, giving $1+2=3$. **The fix:** a length-$N$ and a length-$M$ signal convolve linearly to length $N+M-1$, so zero-pad **both** to a common length $L\ge N+M-1$ before transforming. Then the wrap has only zeros to land on, and circular convolution equals linear convolution.

**Spectral leakage.** Because the DFT treats your block as one period of a periodic signal, a tone that does not complete a whole number of cycles in the window has a jump where the block splices onto its own copy — and a jump has energy at every frequency, so the tone's power smears across all bins instead of landing in one. The standard mitigation is **windowing**: multiply the block by a taper (Hann, Hamming, Blackman) that eases the signal to zero at both ends, trading a slightly wider main lobe for far smaller sidelobes.

## Picture

![Left: the eight twiddle factors for N = 8 as points on the unit circle, each power one 45-degree clockwise step. Right: the bin index axis from 0 to 7 with the mapping f_k = k·f_s/N, the mirror point at N/2 = 4 marked, and arcs joining each conjugate-symmetric pair](assets/03-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — the 4-point DFT, every term).** Take $x[n]=\{1,2,3,4\}$, i.e. $x[0]=1,\ x[1]=2,\ x[2]=3,\ x[3]=4$, with $N=4$ and $W_4=-j$. Bin $k$ needs the powers $W_4^{\,kn}$ for $n=0,1,2,3$, reduced modulo 4.

**$k=0$:** exponents $0,0,0,0$, so all weights are $1$:

$$X[0]=1+2+3+4=10.$$

Check against the DC rule: the average is $\bar x = 10/4 = 2.5$, and $N\bar x = 4(2.5)=10$ ✓.

**$k=1$:** exponents $0,1,2,3$, weights $1,\,-j,\,-1,\,j$:

$$X[1]=1(1)+2(-j)+3(-1)+4(j)=1-2j-3+4j=(1-3)+(-2+4)j=-2+2j.$$

**$k=2$:** exponents $0,2,4,6\equiv 0,2,0,2$, weights $1,\,-1,\,1,\,-1$:

$$X[2]=1(1)+2(-1)+3(1)+4(-1)=1-2+3-4=-2.$$

Real, as conjugate symmetry demands for $k=N/2$ ✓.

**$k=3$:** exponents $0,3,6\equiv2,\,9\equiv1$, weights $1,\,j,\,-1,\,-j$:

$$X[3]=1(1)+2(j)+3(-1)+4(-j)=1+2j-3-4j=-2-2j.$$

And indeed $X[3]=X[1]^*$ ✓. So

$$X=\{10,\;-2+2j,\;-2,\;-2-2j\}.$$

*Two independent checks.* **Parseval** for the DFT says $\sum_n|x[n]|^2=\frac{1}{N}\sum_k|X[k]|^2$. Left side: $1+4+9+16=30$. Right side: $\frac14\big(10^2+|-2+2j|^2+(-2)^2+|-2-2j|^2\big)=\frac14(100+8+4+8)=\frac{120}{4}=30$ ✓. **Inversion**, one term: $x[0]=\frac14\sum_k X[k]=\frac14\big(10+(-2+2j)+(-2)+(-2-2j)\big)=\frac14(4)=1$ ✓.

**Example 2 (why you'd care — reading a real spectrum).** You record 1024 samples of audio at $f_s=8000$ Hz and run a DFT. What does the output mean?

$$\Delta f=\frac{f_s}{N}=\frac{8000}{1024}=7.8125\ \text{Hz},\qquad T_{\text{record}}=\frac{N}{f_s}=\frac{1024}{8000}=0.128\ \text{s},$$

and note $1/0.128 = 7.8125$ ✓ — resolution really is one over the record length. A pure 1000 Hz tone lands at

$$k=\frac{f}{\Delta f}=\frac{1000}{7.8125}=128,$$

with its mirror at $k=1024-128=896$ (which reads as $(896-1024)\cdot 7.8125=-1000$ Hz, the negative-frequency twin). The tone lands in exactly **one** bin because it completes $1000\times0.128=128$ whole cycles in the window — the block splices onto itself seamlessly, so there is no leakage.

Now nudge the tone to 1004 Hz. It completes $1004\times0.128=128.512$ cycles: half a cycle short of closing the loop, so the block has a discontinuity at the splice and the energy smears across many bins. That is leakage, and windowing is what you reach for.

Finally, the resolution gotcha. Suppose you must separate two tones 5 Hz apart. You need $\Delta f\le 5$ Hz, so $T_{\text{record}}\ge 1/5=0.2$ s, i.e. $N\ge 0.2\times 8000=1600$ samples. **Buying a faster ADC does nothing**: at $f_s=16000$ Hz with the same $N=1024$ you get $\Delta f=15.625$ Hz — twice as *coarse*. Frequency resolution is bought with time, not with sample rate.

## Watch out

- **You might think multiplying two DFTs filters your signal, but actually it wraps it.** $X[k]H[k]$ inverts to *circular* convolution: the tail of the output folds back onto the head, corrupting the first $M-1$ samples. This is a bug that ships. The fix is mechanical — zero-pad both sequences to length $L\ge N+M-1$ before transforming, and the wrap lands harmlessly on zeros.
- **You might think a faster sample rate buys finer frequency resolution, but actually it buys higher *maximum* frequency.** $f_s$ sets the top of the axis ($f_s/2$, from [3.1](03-01-sampling-nyquist-shannon.md)); $T_{\text{record}}$ sets the spacing of the ticks. Nor does **zero-padding** help: padding a length-$N$ block out to $4N$ gives you four times as many bins, but they are just a finer *interpolation* of the same DTFT curve, and two tones inside one true resolution cell stay unresolved. More bins is not more information.
- **You might read bin $N-1$ as the highest frequency in your signal, but actually it is the *lowest* — one bin below DC.** The DFT output runs $0\to f_s/2$ and then jumps to $-f_s/2\to 0$. For real input the top half tells you nothing new, which is why plotting tools show only bins $0$ through $N/2$.

## One-liner

> The DFT is the DTFT photographed at $N$ evenly spaced frequencies — bin $k$ means $k f_s/N$ hertz, resolution is one over the record length, and because sampling the spectrum loops the signal, convolution wraps and unlucky tones leak.

## Problems

**P1 (🟢)** Compute the 4-point DFT of $x[n]=\{1,0,1,0\}$ by hand. Then, if these samples were taken at $f_s=100$ Hz, state the physical frequency each nonzero bin corresponds to.

**P2 (🟡)** You record 0.1 s of audio at $f_s=48{,}000$ Hz and take the DFT of the whole record. (a) How many samples $N$ is that? (b) What is the bin spacing? (c) You need to distinguish two tones 4 Hz apart. What must change, and by how much?

**P3 (🔴)** Let $x[n]=\{1,2,3\}$ and $h[n]=\{1,1\}$. (a) Compute the linear convolution $y=x*h$. (b) You instead zero-pad $h$ to $\{1,1,0\}$, take 3-point DFTs, multiply them, and invert. What sequence comes out? (c) What is the smallest transform length for which the DFT product gives the correct linear convolution?

<details>
<summary>Solutions</summary>

**P1** With $N=4$ the twiddle weights for bin $k$ are $W_4^{\,kn}$ with $W_4=-j$. Here $x[0]=1,\ x[1]=0,\ x[2]=1,\ x[3]=0$, so only $n=0$ and $n=2$ contribute:

$$X[k]=1\cdot W_4^{\,0}+1\cdot W_4^{\,2k}=1+W_4^{\,2k}.$$

- $k=0$: $W_4^0=1$, so $X[0]=1+1=2$.
- $k=1$: $W_4^2=-1$, so $X[1]=1-1=0$.
- $k=2$: $W_4^4=1$, so $X[2]=1+1=2$.
- $k=3$: $W_4^6=W_4^2=-1$, so $X[3]=1-1=0$.

$$X=\{2,\,0,\,2,\,0\}.$$

Frequencies: $\Delta f=f_s/N=100/4=25$ Hz. Bin 0 is **DC (0 Hz)** — consistent with $X[0]=\sum x[n]=2=N\bar x=4(0.5)$ ✓. Bin 2 is $f_2=2(25)=50$ Hz $=f_s/2$, the Nyquist frequency.

*Check.* The sequence $\{1,0,1,0\}$ is a constant $0.5$ plus a $\pm0.5$ alternation at exactly one sample per half-cycle — pure DC plus pure Nyquist — so energy in only bins 0 and 2 is exactly right ✓. Conjugate symmetry: $X[3]=X[1]^*$ ($0=0$) ✓. Parseval: $\sum|x[n]|^2=1+0+1+0=2$, and $\frac14(4+0+4+0)=2$ ✓.

**P2**

(a) $N=T_{\text{record}}\cdot f_s=0.1\times 48{,}000=\mathbf{4800}$ samples.

(b) $\Delta f=\dfrac{f_s}{N}=\dfrac{48{,}000}{4800}=\mathbf{10}$ **Hz**. (Cross-check: $1/T_{\text{record}}=1/0.1=10$ Hz ✓.)

(c) You need $\Delta f\le 4$ Hz. Since $\Delta f=1/T_{\text{record}}$, this requires

$$T_{\text{record}}\ge \frac{1}{4}=0.25\ \text{s},$$

i.e. **record at least 0.25 s** — 2.5 times longer — which at 48 kHz is $N\ge 0.25\times48{,}000=12{,}000$ samples.

*Check.* $\Delta f = 48{,}000/12{,}000 = 4$ Hz ✓. And note what does **not** work: raising $f_s$ to 96 kHz while keeping $N=4800$ gives $\Delta f=20$ Hz, twice as bad; keeping the 0.1 s record and raising $f_s$ leaves $\Delta f=1/0.1=10$ Hz unchanged. Only more *time* buys resolution.

**P3**

(a) Linear convolution, $y[n]=\sum_m x[m]h[n-m]$, with $h=\{1,1\}$ so $y[n]=x[n]+x[n-1]$:

$$y[0]=1,\quad y[1]=1+2=3,\quad y[2]=2+3=5,\quad y[3]=3+0=3.$$

$$y=\{1,\,3,\,5,\,3\},\qquad \text{length }3+2-1=4.$$

(b) A 3-point DFT product inverts to the **3-point circular** convolution, $y_c[n]=\sum_{m=0}^{2}x[m]\,h[(n-m)\bmod 3]$ with $h=\{1,1,0\}$:

$$y_c[0]=x[0]h[0]+x[1]h[2]+x[2]h[1]=1(1)+2(0)+3(1)=4,$$
$$y_c[1]=x[0]h[1]+x[1]h[0]+x[2]h[2]=1(1)+2(1)+3(0)=3,$$
$$y_c[2]=x[0]h[2]+x[1]h[1]+x[2]h[0]=1(0)+2(1)+3(1)=5.$$

$$y_c=\{4,\,3,\,5\}.$$

*Check.* This is exactly the length-4 answer with its tail wrapped: $y[3]=3$ folds onto index 0, giving $1+3=4$ ✓, while $y[1]=3$ and $y[2]=5$ survive untouched. Note the total is preserved: $1+3+5+3=12=4+3+5$ ✓, as it must be, since summing any convolution multiplies the sums, $(1+2+3)(1+1)=6\times 2=12$ — wrapping moves energy between bins but cannot destroy it.

(c) The linear result has length $N+M-1=3+2-1=4$, so the transform length must satisfy $L\ge 4$: the smallest is $\mathbf{L=4}$. Zero-pad to $x=\{1,2,3,0\}$ and $h=\{1,1,0,0\}$; then the 4-point circular convolution has only zeros to wrap onto and reproduces $\{1,3,5,3\}$ exactly.

</details>

## Flashback

**From Lesson 3.2 (Aliasing and reconstruction):** A pure tone at 1400 Hz is sampled at $f_s=1000$ Hz with no anti-aliasing filter. (a) What apparent frequency appears in the samples? (b) What is the minimum sampling rate that would have captured it honestly?

<details>
<summary>Solution</summary>

(a) Sampling replicates the spectrum at every multiple of $f_s$, so the sampled data contains the tone at all frequencies $f\pm m f_s$ for integer $m$. The one that appears in the baseband $[-f_s/2,\,f_s/2]=[-500,\,500]$ Hz is found by subtracting multiples of $f_s$:

$$1400-1000=400\ \text{Hz},$$

and $|400|\le 500$ ✓, so the apparent frequency is **400 Hz**. The 1400 Hz tone is indistinguishable from a genuine 400 Hz tone — it has folded down.

(b) The Nyquist rate is twice the highest frequency present:

$$f_s^{\min}=2\times 1400=\mathbf{2800}\ \text{Hz}.$$

*Check.* At $f_s=2800$ Hz the baseband is $[-1400,1400]$ Hz and 1400 Hz sits right at its edge — the strict inequality $f_s>2f_{\max}$ is what you actually want in practice, hence real systems sample somewhat above the Nyquist rate. Sanity on (a): 1400 Hz is $1.4 f_s$, i.e. 1.4 cycles per sample, and only the fractional part $0.4$ cycles/sample $=400$ Hz is observable — the samples simply cannot record the whole extra turn.

</details>

## Connections

- **Backward:** the DFT is [3.3](03-03-discrete-time-fourier-transform.md)'s DTFT evaluated at $N$ points, and its central quirk is [3.1](03-01-sampling-nyquist-shannon.md)'s sampling duality run in reverse — sampling in frequency periodizes in time, exactly as sampling in time periodized the spectrum. The bin-frequency map $f_k=kf_s/N$ is just $\Omega=2\pi f/f_s$ rearranged, and the "bins above $N/2$ are negative" rule is the same folding that produced aliasing in [3.2](03-02-aliasing-and-reconstruction.md). Circular convolution is the convolution sum of [1.5](01-05-convolution-discrete-time.md) with its index taken modulo $N$.
- **Forward:** [3.5](03-05-the-fft.md) computes precisely these numbers — same definition, same answer — by exploiting the fact that the twiddle powers repeat, dropping the cost from $O(N^2)$ to $O(N\log N)$. Evaluating a spectrum on the unit circle also foreshadows [4.1](04-01-z-transform-and-roc.md), where $X[k]=X(z)$ at the $N$-th roots of unity $z=e^{j2\pi k/N}$, and the fast-convolution trick here is how the FIR filters of [4.3](04-03-difference-equations-realizations.md) and [4.4](04-04-filter-design-basics.md) are actually run on long signals.
- **Sideways:** this is the same object as [`fourier-analysis` 4.2](../../fourier-analysis/lessons/04-02-dft-fft.md), approached from the analysis side rather than the engineering side; the finite orthogonality that makes inversion work is the projection-onto-an-orthogonal-basis argument of [`fourier-analysis` 1.2](../../fourier-analysis/lessons/01-02-orthogonal-systems-projection.md), with the $N$ vectors $\{W_N^{\,kn}\}_k$ playing the role the harmonics played there — and the Parseval check in Example 1 is the finite-dimensional case of [`fourier-analysis` 1.4](../../fourier-analysis/lessons/01-04-mean-square-parseval.md).
