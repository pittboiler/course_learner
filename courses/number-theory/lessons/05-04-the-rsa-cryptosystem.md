# Number Theory · Lesson 5.4: The RSA cryptosystem

> ⏱ ~15 min · Module 5: Diophantine equations and cryptography · Builds on: 3.2 (Euler's totient and Euler's theorem) · Unlocks: abstract-algebra & cryptography (next courses)

## Why this matters

Every time your browser shows a padlock, a public-key handshake happened — and for decades the canonical instance was RSA. It is the payoff of this whole course: divisibility (Module 1), inverses mod $n$ (Module 2), and Euler's theorem (Module 3) fuse into a system where **anyone can lock a message but only the key-holder can open it**, with no shared secret arranged in advance. The astonishing part is that the lock and the key are built from the *same* two primes — and the security is nothing more exotic than the belief that un-multiplying a big number is hard.

## The idea

Pick two primes and multiply them: $n = pq$. Publish $n$. Multiplying was easy; the world now knows $n$ but not $p$ and $q$, because factoring a large product is (as far as anyone can prove-by-failing-for-50-years) brutally slow.

Now the trick. Encryption is "raise the message to a public power $e$, mod $n$." Decryption is "raise the ciphertext to a *secret* power $d$, mod $n$." The two powers are chosen so that doing one then the other returns you to where you started — $m^{ed} \equiv m$. Whether such a $d$ exists, and what it is, depends on $\varphi(n) = (p-1)(q-1)$ — and you can only compute $\varphi(n)$ cheaply if you know $p$ and $q$. So the private key-holder, who kept the primes, can find $d$; an eavesdropper, who has only $n$, cannot. **The public power locks; only the person who knows the factorization can build the unlocking power.**

## The formal version

**Key generation.**
1. Choose distinct primes $p, q$; set $n = pq$ and $\varphi(n) = (p-1)(q-1)$.
2. Choose a public exponent $e$ with $1 < e < \varphi(n)$ and $\gcd(e, \varphi(n)) = 1$.
3. Compute the private exponent $d \equiv e^{-1} \pmod{\varphi(n)}$ — the inverse guaranteed by Lesson 2.2, found by the extended Euclidean algorithm.

The **public key** is $(n, e)$; the **private key** is $(n, d)$. Throw away $p, q, \varphi(n)$ — or guard them as tightly as $d$.

**Encryption / decryption.** A message is an integer $m$ with $0 \le m < n$. Then
$$c \equiv m^{e} \pmod{n}, \qquad m \equiv c^{d} \pmod{n}.$$
In words: to encrypt, raise to the public power; to decrypt, raise to the private power; both times reduce mod $n$.

**Correctness (why decryption undoes encryption).** We must show $c^{d} \equiv m^{ed} \equiv m \pmod{n}$. Because $ed \equiv 1 \pmod{\varphi(n)}$, write $ed = 1 + k\,\varphi(n)$ for some integer $k \ge 0$. In words: $e$ and $d$ are inverses mod $\varphi(n)$, so their product is one more than a multiple of $\varphi(n)$.

*Case $\gcd(m, n) = 1$.* Euler's theorem (Lesson 3.2) says $m^{\varphi(n)} \equiv 1 \pmod n$. Hence
$$m^{ed} = m^{1 + k\varphi(n)} = m \cdot \left(m^{\varphi(n)}\right)^{k} \equiv m \cdot 1^{k} = m \pmod n.$$

*Case $\gcd(m, n) \ne 1$ (the CRT patch).* Since $n = pq$, it suffices to show $m^{ed} \equiv m$ separately mod $p$ and mod $q$; the Chinese Remainder Theorem (Lesson 2.4) then stitches these into $m^{ed} \equiv m \pmod n$. Take the prime $p$. If $p \mid m$, both sides are $\equiv 0 \pmod p$, done. If $p \nmid m$, Fermat's little theorem gives $m^{p-1} \equiv 1 \pmod p$, and since $(p-1) \mid \varphi(n)$ we get $m^{k\varphi(n)} \equiv 1 \pmod p$, so $m^{ed} = m \cdot m^{k\varphi(n)} \equiv m \pmod p$. Identical argument mod $q$. So $m^{ed} \equiv m$ mod both primes, hence mod $n$. **This case matters: it makes decryption exact for *every* message, not just the ones coprime to $n$.**

**Where security lives.** Knowing $\varphi(n)$ lets an attacker compute $d = e^{-1} \bmod \varphi(n)$ and read everything. But computing $\varphi(n) = (p-1)(q-1)$ from $n$ alone is equivalent to factoring: if you knew $\varphi(n)$ you'd know $p + q = n - \varphi(n) + 1$ and $pq = n$, so $p, q$ are the two roots of $x^2 - (p+q)x + n = 0$ — solvable by the quadratic formula. **Knowing $\varphi(n) \iff$ factoring $n$.** Break either and RSA falls; both are believed hard for large $n$.

## Concrete instance

Let's build a full keypair with small primes (different from the syllabus boss's $p=11, q=13$).

**Keygen.** Take $p = 5$, $q = 11$. Then
$$n = pq = 55, \qquad \varphi(n) = (5-1)(11-1) = 4 \cdot 10 = 40.$$
Pick $e = 3$. Check $\gcd(3, 40) = 1$ — yes, valid. Now find $d \equiv 3^{-1} \pmod{40}$ by the extended Euclidean algorithm (Lesson 2.2): we need $3d \equiv 1 \pmod{40}$. Testing, $3 \cdot 27 = 81 = 2\cdot 40 + 1 \equiv 1 \pmod{40}$, so $d = 27$. (Systematically: $40 = 13\cdot 3 + 1$, so $1 = 40 - 13\cdot 3$, giving $-13 \equiv 27 \pmod{40}$.)

**Public key** $(n, e) = (55, 3)$; **private key** $(n, d) = (55, 27)$.

**Encrypt** the message $m = 7$ (note $0 \le 7 < 55$):
$$c \equiv 7^{3} = 343 \pmod{55}.$$
$343 = 6 \cdot 55 + 13$, so $c = 13$.

**Decrypt** $c = 13$ by raising to $d = 27$, mod $55$. Do it by fast exponentiation (Lesson 3.3), reducing at every step:
- $13^2 = 169 \equiv 169 - 3\cdot 55 = 4 \pmod{55}$.
- $13^4 \equiv 4^2 = 16 \pmod{55}$.
- $13^8 \equiv 16^2 = 256 \equiv 256 - 4\cdot 55 = 36 \pmod{55}$.
- $13^{16} \equiv 36^2 = 1296 \equiv 1296 - 23\cdot 55 = 31 \pmod{55}$.

Now $27 = 16 + 8 + 2 + 1$, so
$$13^{27} \equiv 13^{16}\cdot 13^{8}\cdot 13^{2}\cdot 13^{1} \equiv 31 \cdot 36 \cdot 4 \cdot 13 \pmod{55}.$$
Step through it: $31 \cdot 36 = 1116 \equiv 1116 - 20\cdot 55 = 16$; then $16 \cdot 4 = 64 \equiv 9$; then $9 \cdot 13 = 117 \equiv 117 - 2\cdot 55 = 7$.

We recover $m = 7$. The lock and key close the loop. ✓

## Worked examples

**Example 1 (mechanical — a second decryption on the same key).** Using the keypair above, $(n,e,d) = (55, 3, 27)$, encrypt $m = 2$ and decrypt back.

Encrypt: $c \equiv 2^{3} = 8 \pmod{55}$, so $c = 8$. Decrypt: compute $8^{27} \bmod 55$. Powers of $8$: $8^2 = 64 \equiv 9$; $8^4 \equiv 9^2 = 81 \equiv 26$; $8^8 \equiv 26^2 = 676 \equiv 676 - 12\cdot 55 = 16$; $8^{16} \equiv 16^2 = 256 \equiv 36$. Then $8^{27} = 8^{16+8+2+1} \equiv 36 \cdot 16 \cdot 9 \cdot 8$. Compute: $36\cdot 16 = 576 \equiv 576 - 10\cdot 55 = 26$; $26 \cdot 9 = 234 \equiv 234 - 4\cdot 55 = 14$; $14 \cdot 8 = 112 \equiv 112 - 55 = 2$. Back to $m = 2$. ✓

**Example 2 (why you'd care — cracking a key by factoring).** An attacker sees the public key $(n, e) = (55, 3)$ and intercepts $c = 13$. To read it they need $d$, which needs $\varphi(55)$, which needs the factorization. Here $n$ is tiny, so they factor instantly: $55 = 5 \cdot 11$, giving $\varphi = 4\cdot 10 = 40$, then $d = 3^{-1} \bmod 40 = 27$, then $m = 13^{27} \equiv 7$. The *entire* secret was the factorization. Now imagine $n$ has 617 digits (a 2048-bit key): the same recipe applies, but the "factor $n$" step is the wall no known algorithm climbs in reasonable time. RSA's security is exactly the gap between "$55 = 5\cdot 11$, obvious" and "$n$, hopeless."

## Watch out

- You might think decryption only works when $\gcd(m,n)=1$ (that's all Euler's theorem covers), but actually the CRT patch above extends correctness to *every* $m$ with $0 \le m < n$. In real RSA a message sharing a factor with $n$ is a catastrophe of a different sort — it hands the attacker a prime via $\gcd(m,n)$ — but the *arithmetic* of decryption still returns $m$.
- You might think $e$ and $d$ live mod $n$; they don't. $e$ and $d$ are exponents chosen mod $\varphi(n)$ (that's where $ed \equiv 1$ holds), while the messages $m, c$ live mod $n$. Two different moduli in one system — keep them straight.
- You might think publishing $\varphi(n)$ is harmless since $e$ is already public. It's fatal: $\varphi(n)$ instantly yields $d$ *and* the factorization. Guard $\varphi(n)$, $d$, $p$, $q$ as equally secret — leaking any one leaks all.

## One-liner

> RSA multiplies two primes to build a lock everyone can close and only the factor-knower can open — its safety is just the difficulty of un-multiplying.

## Problems

**P1 (🟢)** With primes $p = 3$, $q = 11$, so $n = 33$ and $\varphi(n) = 20$, and public exponent $e = 7$: verify $\gcd(7, 20) = 1$, find the private exponent $d = 7^{-1} \bmod 20$, and encrypt $m = 5$ (compute $c = 5^7 \bmod 33$).

**P2 (🟡)** Continuing P1, decrypt your ciphertext $c$ by computing $c^{d} \bmod 33$, and confirm you recover $m = 5$. (Use fast exponentiation — reduce mod $33$ at every step.)

**P3 (🔴, optional)** An attacker publishes only that a certain RSA modulus is $n = 3599$ and, through a side channel, learns that $\varphi(n) = 3480$. Without trial-factoring $n$, recover the primes $p$ and $q$. (Use the "knowing $\varphi \iff$ factoring" identity: set up the quadratic whose roots are $p, q$.)

<details>
<summary>Solutions</summary>

**P1** $\gcd(7, 20) = 1$ ✓ (20's prime factors are $2, 5$; $7$ shares none). Find $d$ with $7d \equiv 1 \pmod{20}$: $7 \cdot 3 = 21 \equiv 1$, so $d = 3$. Encrypt: $5^7 \bmod 33$. Build up: $5^2 = 25$; $5^4 \equiv 25^2 = 625 \equiv 625 - 18\cdot 33 = 31$; then $5^7 = 5^4\cdot 5^2\cdot 5^1 \equiv 31 \cdot 25 \cdot 5$. Compute $31\cdot 25 = 775 \equiv 775 - 23\cdot 33 = 16$; $16 \cdot 5 = 80 \equiv 80 - 2\cdot 33 = 14$. So $c = 14$.

**P2** Decrypt $14^{3} \bmod 33$ (here $d = 3$ is small, so no ladder needed): $14^2 = 196 \equiv 196 - 5\cdot 33 = 31$; $14^3 \equiv 31 \cdot 14 = 434 \equiv 434 - 13\cdot 33 = 434 - 429 = 5$. Recovered $m = 5$. ✓ The loop closes because $ed = 7\cdot 3 = 21 = 1 + 1\cdot 20 \equiv 1 \pmod{\varphi(n)}$.

**P3** From $n = pq = 3599$ and $\varphi(n) = (p-1)(q-1) = pq - (p+q) + 1$, solve for the sum: $p + q = n - \varphi(n) + 1 = 3599 - 3480 + 1 = 120$. So $p, q$ are the roots of
$$x^2 - 120x + 3599 = 0.$$
Discriminant $= 120^2 - 4\cdot 3599 = 14400 - 14396 = 4$, so $x = \dfrac{120 \pm 2}{2} = 61 \text{ or } 59$. Thus $n = 59 \cdot 61$. Check: $59 \cdot 61 = 3599$ ✓ and $58 \cdot 60 = 3480$ ✓. Knowing $\varphi$ collapsed the factorization to a quadratic — which is exactly why $\varphi(n)$ must stay as secret as the primes.

</details>

## Flashback

**From Lesson 3.2 (Euler's totient and Euler's theorem):** Compute $\varphi(72)$ using multiplicativity, then use Euler's theorem to find $5^{1000} \bmod 72$.

<details>
<summary>Solution</summary>

Factor $72 = 2^3 \cdot 3^2$. Using $\varphi(p^k) = p^k - p^{k-1}$ and multiplicativity over coprime factors:
$$\varphi(72) = \varphi(2^3)\,\varphi(3^2) = (8 - 4)(9 - 3) = 4 \cdot 6 = 24.$$
Since $\gcd(5, 72) = 1$, Euler's theorem gives $5^{24} \equiv 1 \pmod{72}$. Reduce the exponent mod $24$: $1000 = 41\cdot 24 + 16$, so $5^{1000} \equiv 5^{16} \pmod{72}$. Compute $5^{16}$ by squaring, reducing mod $72$: $5^2 = 25$; $5^4 = 625 \equiv 625 - 8\cdot 72 = 49$; $5^8 \equiv 49^2 = 2401 \equiv 2401 - 33\cdot 72 = 25$; $5^{16} \equiv 25^2 = 625 \equiv 49$. So $5^{1000} \equiv \boxed{49} \pmod{72}$.

</details>

## Connections

- **Backward:** RSA is Module 3 made useful — its correctness *is* Euler's theorem (Lesson 3.2), its keygen *is* the modular inverse of Lesson 2.2, and the $\gcd(m,n)\ne 1$ patch runs on the Chinese Remainder Theorem (Lesson 2.4) and Fermat (Lesson 3.1). This lesson is the course collecting its debts.
- **Forward:** The unit group $(\mathbb{Z}/n\mathbb{Z})^\times$ you exponentiated in is the first honest group of [abstract-algebra](../../abstract-algebra/syllabus.md), where "order divides $\varphi(n)$" becomes Lagrange's theorem. The security assumptions, key exchange, and attacks get their own treatment in [cryptography](../../cryptography/syllabus.md) — including **digital signatures**, which are RSA run backward (sign with the *private* key $d$, verify with the *public* $e$: only the key-holder could have produced $m^d$, and anyone can check $(m^d)^e \equiv m$).
- **Sideways (information theory):** RSA is *computationally* secure — safe only because factoring is slow. [information-theory](../../information-theory/syllabus.md) develops Shannon's stricter notion of **perfect secrecy**, where the ciphertext reveals *zero* information about the message regardless of the eavesdropper's computing power (the one-time pad achieves it, at the cost of a key as long as the message). The contrast — "hard to break" versus "impossible to break, but impractical" — is the organizing tension of modern cryptography.
