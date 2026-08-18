# Number Theory · Lesson 5.3: Primality testing

> ⏱ ~15 min · Module 5: Diophantine equations and cryptography · Builds on: 3.1 (Fermat's little theorem) · Unlocks: 5.4 (the RSA cryptosystem)

## Why this matters

RSA (next lesson) needs two secret primes with hundreds of digits each. You cannot make them by factoring random numbers and keeping the primes — factoring a 600-digit number is the very problem RSA bets no one can solve. So you need the opposite skill: **decide whether a given number is prime without learning any of its factors.** That sounds impossible — how do you rule out divisors you never find? — and yet it's routine, fast, and the reason your bank login exists. This lesson is how.

## The idea

Instead of hunting for a factor, we ask a candidate $n$ to pass a test that *all primes pass* — and hope composites flunk it. Fermat's little theorem hands us one for free: every prime $p$ satisfies $a^{p-1}\equiv1\pmod p$ for any base $a$ not divisible by $p$. Read it backwards: **if you find even one base $a$ where $a^{n-1}\not\equiv1\pmod n$, then $n$ cannot be prime.** No factor required — you've certified compositeness by contradiction. The catch is the loophole: a few sneaky composites pass anyway, and one family (Carmichael numbers) passes for *every* base. Patching that loophole is the whole story, and it ends with a test that's wrong with probability you can drive below "the sun explodes mid-computation."

## The formal version

**Fermat primality test.** Pick a base $a$ with $1<a<n$ and $\gcd(a,n)=1$. Compute $a^{n-1}\bmod n$ (fast, via repeated squaring).

$$a^{n-1}\not\equiv1\pmod n \;\Longrightarrow\; n \text{ is composite.}$$

In words: this is the **contrapositive** of Fermat's little theorem (Lesson 3.1). Fermat says prime $\Rightarrow$ the congruence holds; so the congruence *failing* $\Rightarrow$ not prime. When it fails, $a$ is called a **witness** to $n$'s compositeness.

The danger is the other direction. If $a^{n-1}\equiv1\pmod n$, we learn *nothing certain* — $n$ is "probably prime, base $a$," and we call it a **probable prime**. A composite $n$ that satisfies $a^{n-1}\equiv1\pmod n$ is a **Fermat pseudoprime to base $a$**: a liar that fooled this particular base.

**Carmichael number.** A composite $n$ that is a Fermat pseudoprime to *every* base coprime to $n$ — i.e. $a^{n-1}\equiv1\pmod n$ for all $a$ with $\gcd(a,n)=1$. In words: a composite the Fermat test can never catch, no matter which base you try.

## Concrete instance

Let's run the Fermat test on the composite $n=15$ with base $a=2$ (and $\gcd(2,15)=1$). We need $2^{14}\bmod 15$. Note $2^4=16\equiv1\pmod{15}$, so

$$2^{14}=(2^{4})^{3}\cdot 2^{2}\equiv 1^{3}\cdot 4 = 4 \pmod{15}.$$

Since $2^{14}\equiv4\not\equiv1\pmod{15}$, base $2$ is a **witness**: $15$ is composite. We proved this without ever writing $15=3\cdot5$ — the test never asked.

Now the unsettling part. Consider $561 = 3\cdot 11\cdot 17$, plainly composite. It is a **Carmichael number**: for *every* base $a$ with $\gcd(a,561)=1$, we get $a^{560}\equiv1\pmod{561}$. Why? By CRT it suffices to check each prime factor, and each factor's "$p-1$" divides $560$: $\,2\mid560$, $\,10\mid560$, $\,16\mid560$ (since $560=16\cdot35$). So Fermat's theorem forces $a^{560}\equiv1$ modulo $3$, $11$, and $17$ simultaneously, hence mod $561$. The Fermat test tries base after base and $561$ passes them all — a composite wearing a perfect disguise. (This divisibility condition on the prime factors is **Korselt's criterion**, and it's how all Carmichael numbers are built.)

## Worked examples

**Example 1 (the base matters).** Test $n=91$. Take $a=3$ first. Since $91=7\cdot13$, work mod each factor and glue with CRT. Mod $7$: $3^{3}=27\equiv-1$... easier, $3^{6}\equiv1\pmod7$ and $90=6\cdot15$, so $3^{90}\equiv1\pmod7$. Mod $13$: $3^{3}=27\equiv1\pmod{13}$ and $90=3\cdot30$, so $3^{90}\equiv1\pmod{13}$. Both give $1$, so $3^{90}\equiv1\pmod{91}$ — **base $3$ is fooled**; $91$ is a Fermat pseudoprime to base $3$.

Don't give up — try $a=2$. Mod $7$: $2^{3}\equiv1$, $90\equiv0\pmod3$, so $2^{90}\equiv1\pmod7$. Mod $13$: $2^{12}\equiv1$, $90\equiv6\pmod{12}$, so $2^{90}\equiv2^{6}=64\equiv12\equiv-1\pmod{13}$. Gluing $1\pmod7$ and $-1\pmod{13}$ gives $2^{90}\equiv64\not\equiv1\pmod{91}$. **Base $2$ is a witness** — $91$ is composite. Moral: a single fooled base proves nothing; trying more bases is what saves you. Unless $n$ is Carmichael, in which case *nothing* saves you — which is why we need a better test.

**Example 2 (defeating a Carmichael, Miller–Rabin idea).** Fermat only checked the *endpoint* $a^{n-1}$. Miller–Rabin checks the road there for an extra fingerprint of primality.

Key fact: **modulo a prime $p$, the equation $x^{2}\equiv1$ has only the solutions $x\equiv\pm1$.** (Because $p\mid x^2-1=(x-1)(x+1)$, and a prime dividing a product divides a factor — Euclid's lemma.) So if, while repeatedly squaring, you ever hit a $1$ that came from something *other than* $\pm1$, you've caught a **nontrivial square root of $1$**, which no prime possesses — instant proof of compositeness.

Watch it dismantle $561$. Write $560 = 2^{4}\cdot 35$, and square up from $2^{35}$. Grinding the powers mod $561$:

$$2^{35}\equiv 263,\quad 2^{70}\equiv 166,\quad 2^{140}\equiv 67,\quad 2^{280}\equiv 1 \pmod{561}.$$

Look at the last step: $2^{140}\equiv 67$ and $\left(2^{140}\right)^{2}=2^{280}\equiv1$. So $67^{2}\equiv1\pmod{561}$, yet $67\not\equiv\pm1\pmod{561}$. A nontrivial square root of $1$ — **$561$ is composite**, certified by the very base that fooled the Fermat test. Miller–Rabin catches every Carmichael number, because Carmichaels are exactly the composites where the endpoint check fails but the road always tells.

## Watch out

- You might think passing the Fermat test *proves* $n$ prime. It does not — it only fails to disprove it. Only a *failing* base is conclusive (and it conclusively says **composite**).
- You might think trying enough bases eventually cracks any composite. Carmichael numbers ($561, 1105, 1729, \dots$) pass Fermat for *all* coprime bases; there are infinitely many. The Fermat test alone has no defense — you must upgrade to Miller–Rabin.
- Miller–Rabin is **probabilistic but one-sided**: it never wrongly calls a prime "composite." When it says composite, that's certain (it exhibited a witness). Only its "probably prime" verdict carries risk, and for a composite $n$ at least $3/4$ of bases are witnesses — so $k$ random bases leave a false-prime chance below $(1/4)^{k}$, astronomically small for $k=40$.

## One-liner

> To certify a prime, don't find its factors — dare it to fail a test all primes pass, and (Miller–Rabin) also make it prove it has no illicit square root of $1$.

## Problems

**P1 (🟢)** Use the Fermat test with base $a=2$ to prove $n=21$ is composite. Compute $2^{20}\bmod 21$ (hint: $21=3\cdot7$, work mod each factor and use CRT), and state why the result settles it.

**P2 (🟡)** $341=11\cdot31$ is the smallest Fermat pseudoprime to base $2$. Verify it: show $2^{340}\equiv1\pmod{341}$ using Fermat's little theorem on each prime factor plus CRT. Then explain in one sentence what this does and does *not* tell you about $341$.

**P3 (🔴, optional)** For $n=561$ it is known that $2^{140}\equiv 67$ and $2^{280}\equiv 1\pmod{561}$. Using *only* these two facts — no factoring — prove $561$ is composite. Which theorem about square roots modulo a prime are you contradicting?

<details>
<summary>Solutions</summary>

**P1** Mod $3$: $2\equiv-1$, so $2^{20}\equiv(-1)^{20}=1\pmod3$. Mod $7$: $2^{3}\equiv1$ and $20\equiv2\pmod3$, so $2^{20}\equiv2^{2}=4\pmod7$. Glue $x\equiv1\pmod3$, $x\equiv4\pmod7$: testing $x=4$ gives $4\equiv1\pmod3$ and $4\equiv4\pmod7$, so $2^{20}\equiv4\pmod{21}$. Since $4\not\equiv1$, base $2$ is a witness — by the contrapositive of Fermat's little theorem, $21$ is composite. (Reassuringly, $21=3\cdot7$, but the test never needed that.)

**P2** Mod $11$: $11$ is prime and $11\nmid2$, so $2^{10}\equiv1\pmod{11}$; since $340=10\cdot34$, $2^{340}\equiv1\pmod{11}$. Mod $31$: $31$ is prime and $2^{5}=32\equiv1\pmod{31}$, so as $5\mid340$, $2^{340}\equiv1\pmod{31}$. By CRT the unique residue mod $341=11\cdot31$ congruent to $1$ mod both factors is $1$, so $2^{340}\equiv1\pmod{341}$. This shows $341$ *passes* the Fermat test at base $2$ (it is a probable prime, base $2$) — but that proves nothing about primality; $341=11\cdot31$ is in fact composite, so it is a base-$2$ Fermat pseudoprime. A different base (e.g. $3$) would witness its compositeness.

**P3** Set $r=2^{140}\equiv67\pmod{561}$. Then $r^{2}=\left(2^{140}\right)^{2}=2^{280}\equiv1\pmod{561}$. So $67$ satisfies $x^{2}\equiv1\pmod{561}$, yet $67\not\equiv1$ and $67\not\equiv560\equiv-1\pmod{561}$ — a **nontrivial square root of $1$**. Modulo a prime $p$, the only solutions of $x^{2}\equiv1$ are $x\equiv\pm1$ (since $p\mid(x-1)(x+1)$ forces $p\mid x-1$ or $p\mid x+1$ by Euclid's lemma). A nontrivial root therefore contradicts $561$ being prime, so $561$ is composite — proven without exhibiting a single factor.

</details>

## Flashback

**From Lesson 3.1 (Fermat's little theorem):** Compute $2^{643}\bmod 17$.

<details>
<summary>Solution</summary>

$17$ is prime and $17\nmid2$, so Fermat's little theorem gives $2^{16}\equiv1\pmod{17}$. Reduce the exponent mod $16$: $643=16\cdot40+3$, so $643\equiv3\pmod{16}$. Hence

$$2^{643}\equiv2^{3}=8\pmod{17}.$$

The whole tower of $643$ multiplications collapses to reading the exponent mod $16$ — that's the one-line power of Fermat.

</details>

## Connections

- **Backward:** this is Lesson 3.1 (Fermat's little theorem) turned into an algorithm — the theorem's contrapositive is the entire test — and its Miller–Rabin upgrade leans on Euclid's lemma from Lesson 1.3 (only $\pm1$ square to $1$ mod a prime).
- **Forward:** Lesson 5.4 (RSA) generates its secret primes exactly this way — draw a random odd number and run Miller–Rabin until one passes. And by the Prime Number Theorem (Lesson 1.4), a random $k$-bit number is prime with probability about $1/\ln(2^{k})$, so you expect only a few hundred draws even at $2048$ bits — that's *why* the "just keep testing" strategy is cheap.
- **Sideways (`algorithms`/`cryptography`):** Miller–Rabin is the textbook example of a **randomized algorithm** whose error you pay down geometrically by spending more coins; the same one-sided, tunable-error pattern recurs across cryptographic primitives. (Deterministic polynomial-time primality also exists — the 2002 **AKS** algorithm — settling that PRIMES is in P, though in practice Miller–Rabin's speed wins every time.)
