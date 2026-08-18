# Number Theory · Lesson 3.3: Order and the group (ℤ/nℤ)ˣ

> ⏱ ~15 min · Module 3: The multiplicative group modulo n · Builds on: 3.2 (Euler's totient and Euler's theorem) · Unlocks: 3.4 (primitive roots)

## Why this matters

Euler's theorem told you $a^{\varphi(n)}\equiv1$, but $\varphi(n)$ is usually *not* the smallest exponent that works — and the true smallest exponent, the **order** of $a$, is what actually controls everything downstream. It's the number that lets you collapse an astronomically large power in your head, it's the quantity a primitive root maximizes (Lesson 3.4), and its stubborn hardness to *invert* is what makes Diffie–Hellman key exchange and the discrete-log problem safe. This is also the lesson where the units mod $n$ finally reveal themselves as a genuine **group** — your first honest one, and a full-dress rehearsal for `abstract-algebra`.

## The idea

Pick a unit $a$ and start multiplying it by itself mod $n$: $a, a^2, a^3, \dots$. Because there are only finitely many residues, the sequence must eventually repeat — and it turns out it repeats by looping cleanly back to $1$ and starting over. The length of that loop is the **order** of $a$: the smallest number of steps to get home.

The single most useful fact is that this loop length can't be just anything. It has to *divide* $\varphi(n)$ — the total number of units. Think of $\varphi(n)$ dancers arranged so that $a$'s repeated multiplication marches them around in identical-length cycles; the cycles must tile the whole floor exactly, so their common length divides the total. That's why once you know $\varphi(n)$, only a handful of divisors are even *candidates* for the order — you never have to check all the way up.

## The formal version

Let $\gcd(a,n)=1$. The **multiplicative order** of $a$ modulo $n$ is
$$\mathrm{ord}_n(a)=\min\{\,k>0 : a^k\equiv1\ (\mathrm{mod}\ n)\,\}.$$
In words: the smallest positive power of $a$ that lands back on $1$. (Euler's theorem guarantees the set is nonempty, since $a^{\varphi(n)}\equiv1$, so the minimum exists.)

**Key lemma (order divides exponents).** For any integer $m\ge0$,
$$a^{m}\equiv1\ (\mathrm{mod}\ n)\iff \mathrm{ord}_n(a)\mid m.$$
In words: the powers that return to $1$ are *exactly* the multiples of the order.

*Proof.* Write $d=\mathrm{ord}_n(a)$ and divide: $m=qd+r$ with $0\le r<d$. Then $a^{m}=(a^{d})^{q}\,a^{r}\equiv 1^{q}\,a^{r}=a^{r}$. So $a^{m}\equiv1$ iff $a^{r}\equiv1$. But $0\le r<d$ and $d$ is the *smallest* positive exponent giving $1$, so $a^r\equiv1$ forces $r=0$, i.e. $d\mid m$. Conversely if $d\mid m$ then $a^m=(a^d)^{m/d}\equiv1$. $\qquad\blacksquare$

**Corollary (baby Lagrange).** Since $a^{\varphi(n)}\equiv1$ by Euler, the lemma gives
$$\mathrm{ord}_n(a)\mid\varphi(n).$$
In words: every unit's order divides the size of the unit group. To find an order you only test the divisors of $\varphi(n)$.

**The group of units.** The set
$$(\mathbb{Z}/n\mathbb{Z})^\times=\{\,a\bmod n : \gcd(a,n)=1\,\}$$
is a **group** under multiplication mod $n$: it is *closed* (if $a,b$ are units with inverses $a^{-1},b^{-1}$, then $ab$ has inverse $b^{-1}a^{-1}$, so a product of units is a unit), multiplication is *associative*, $1$ is the *identity*, and *every element has an inverse* — that's precisely what being a unit means (Lesson 2.2). Its size is $\varphi(n)$. In words: the coprime residues form a self-contained multiplicative world, and the whole lesson is group theory in disguise.

## Concrete instance

**Compute $\mathrm{ord}_7(3)$ by listing powers.** Here $\varphi(7)=6$, so the order must divide $6$ — candidates $1,2,3,6$. March:
$$3^1\equiv3,\quad 3^2\equiv2,\quad 3^3\equiv6,\quad 3^4\equiv4,\quad 3^5\equiv5,\quad 3^6\equiv1\ (\mathrm{mod}\ 7).$$
(Each step is "multiply the last by $3$, reduce": $3\cdot3=9\equiv2$; $3\cdot2=6$; $3\cdot6=18\equiv4$; $3\cdot4=12\equiv5$; $3\cdot5=15\equiv1$.) First return to $1$ is at $k=6$, so $\mathrm{ord}_7(3)=6$. Indeed $6\mid\varphi(7)=6$ — and because the order *equals* $\varphi(7)$, the powers of $3$ hit **every** nonzero residue $\{3,2,6,4,5,1\}$. That maximal case is exactly what "primitive root" will mean next lesson.

**Fast modular exponentiation (repeated squaring).** To compute a big power you never multiply one factor at a time — you square. Compute $11^{13}\bmod 100$. Write $13=8+4+1$ (binary $1101$) and build the squares, reducing mod $100$ at *every* step so numbers stay small:
$$11^1\equiv11,\quad 11^2\equiv121\equiv21,\quad 11^4\equiv21^2=441\equiv41,\quad 11^8\equiv41^2=1681\equiv81.$$
Then
$$11^{13}=11^{8}\cdot11^{4}\cdot11^{1}\equiv81\cdot41\cdot11.$$
Reduce as you go: $81\cdot41=3321\equiv21$, then $21\cdot11=231\equiv31$. So $11^{13}\equiv31\ (\mathrm{mod}\ 100)$. Four squarings plus two multiplies replaced twelve multiplications — and this scaling ($\sim\log_2 m$ multiplies for exponent $m$) is what makes RSA-sized exponents feasible.

## Worked examples

**Example 1 (mechanical — read the order off the divisors).** Find $\mathrm{ord}_{11}(2)$. Now $\varphi(11)=10$, so the order divides $10$: candidates $1,2,5,10$. Test only those:
$$2^1\equiv2,\qquad 2^2\equiv4,\qquad 2^5\equiv32\equiv10\equiv-1\ (\mathrm{mod}\ 11).$$
None of $2^1,2^2,2^5$ is $1$, and no other proper divisor remains, so by elimination $\mathrm{ord}_{11}(2)=10$. (Sanity: $2^{10}=(2^5)^2\equiv(-1)^2=1$. ✓) Notice we never computed $2^3,2^4,2^6,\dots$ — the divisor rule pruned the search from ten checks to three.

**Example 2 (why you'd care — collapse a huge power).** Compute $7^{100}\bmod 13$. First get the order. $\varphi(13)=12$; test divisors:
$$7^2\equiv49\equiv10,\quad 7^3\equiv7\cdot10\equiv5,\quad 7^4\equiv7\cdot5\equiv9,\quad 7^6\equiv(7^3)^2\equiv5^2\equiv-1.$$
Since $7^6\equiv-1\not\equiv1$ but $7^{12}\equiv1$, we get $\mathrm{ord}_{13}(7)=12$. Now use the lemma to reduce the exponent *modulo the order*: because powers repeat with period $12$,
$$7^{100}=7^{12\cdot8+4}\equiv7^{4}\equiv9\ (\mathrm{mod}\ 13).$$
Reducing $100$ mod $12$ (not mod $\varphi$ blindly) is the sharpest possible collapse — and when the order is *smaller* than $\varphi(n)$, it beats Euler's theorem outright. This is the exact move behind Boss problem 3.

## Watch out

- You might think $\mathrm{ord}_n(a)=\varphi(n)$ always. **No** — it only *divides* $\varphi(n)$. For $\mathrm{ord}_{100}(7)$ the order is $4$, a proper divisor of $\varphi(100)=40$. Equality is the special case that defines a primitive root (next lesson), and most moduli have units of many different orders.
- You might think $a^m\equiv a^k$ lets you conclude $m\equiv k$. **Only for units, and only mod the order:** cancel $a$ (legal because $a$ is invertible) to get $a^{m-k}\equiv1$, then the lemma gives $m\equiv k\ (\mathrm{mod}\ \mathrm{ord}_n(a))$ — *not* mod $n$, and not at all if $\gcd(a,n)>1$.
- You might think every residue has an order. A non-unit ($\gcd(a,n)>1$) **never** reaches $1$ — its powers are stuck sharing a factor with $n$ — so order is defined only inside $(\mathbb{Z}/n\mathbb{Z})^\times$.
- In repeated squaring, reduce mod $n$ **after every squaring**, not once at the end — otherwise the intermediate numbers explode and you lose the whole efficiency win.

## One-liner

> An element's order is its private cycle length inside the unit group, and Lagrange's law forces that length to divide $\varphi(n)$ — so a huge exponent is really just its remainder mod the order.

## Problems

**P1 (🟢)** Compute $\mathrm{ord}_{13}(3)$. List only the powers you actually need (use the divisor rule), and confirm your answer divides $\varphi(13)$.

**P2 (🟡)** Compute $2^{1234}\bmod 11$ using an order you already know from this lesson. Show the exponent reduction.

**P3 (🔴, optional)** Let $\gcd(a,n)=1$ and $d=\mathrm{ord}_n(a)$. Prove the powers $a^0,a^1,\dots,a^{d-1}$ are pairwise distinct modulo $n$. (This is why a unit of order $d$ "generates" exactly $d$ residues — and why a primitive root, order $\varphi(n)$, sweeps out the entire group in Lesson 3.4.)

<details>
<summary>Solutions</summary>

**P1** $\varphi(13)=12$, so $\mathrm{ord}_{13}(3)\mid12$; candidates $1,2,3,4,6,12$. March:
$$3^1\equiv3,\qquad 3^2\equiv9,\qquad 3^3\equiv27\equiv1\ (\mathrm{mod}\ 13).$$
First return to $1$ is at $k=3$, so $\boxed{\mathrm{ord}_{13}(3)=3}$, and $3\mid12$. ✓ (We stopped at the third power — no need to go further.)

**P2** From Example 1, $\mathrm{ord}_{11}(2)=10$. By the lemma the powers repeat with period $10$, so reduce the exponent mod $10$: $1234\equiv4\ (\mathrm{mod}\ 10)$. Hence
$$2^{1234}\equiv2^{4}=16\equiv\boxed{5}\ (\mathrm{mod}\ 11).$$

**P3** Suppose $a^i\equiv a^j\ (\mathrm{mod}\ n)$ with $0\le i<j\le d-1$. Since $a$ is a unit it is invertible, so multiply both sides by $a^{-i}$ (i.e. cancel $a^i$) to get $a^{\,j-i}\equiv1\ (\mathrm{mod}\ n)$. Now $0<j-i\le d-1<d$, so $j-i$ is a positive exponent smaller than $d$ that returns to $1$ — contradicting that $d=\mathrm{ord}_n(a)$ is the *smallest* such exponent. Therefore no two of $a^0,\dots,a^{d-1}$ coincide; they are $d$ distinct residues. $\blacksquare$ (Consequently a unit of order $d$ generates a "cyclic loop" of exactly $d$ elements — a subgroup of size $d$ inside $(\mathbb{Z}/n\mathbb{Z})^\times$, which is Lagrange's theorem made concrete.)

</details>

## Flashback

**From Lesson 3.2 (Euler's totient and Euler's theorem):** Compute $\varphi(20)$, then use Euler's theorem to reduce $3^{22}\bmod 20$.

<details>
<summary>Solution</summary>

$20=2^2\cdot5$, so by multiplicativity $\varphi(20)=\varphi(4)\,\varphi(5)=2\cdot4=8$. Since $\gcd(3,20)=1$, Euler's theorem gives $3^{8}\equiv1\ (\mathrm{mod}\ 20)$, so powers of $3$ repeat with period dividing $8$; reduce the exponent mod $8$: $22\equiv6\ (\mathrm{mod}\ 8)$. Then
$$3^{22}\equiv3^{6}=729\equiv\boxed{9}\ (\mathrm{mod}\ 20),$$
since $729=36\cdot20+9$. (Peeking ahead: $3^2\equiv9$ and $3^4\equiv81\equiv1$, so in fact $\mathrm{ord}_{20}(3)=4$, a proper divisor of $\varphi(20)=8$ — exactly the "order divides $\varphi(n)$" phenomenon of this lesson.)

</details>

## Connections

- **Backward:** Euler's theorem (3.2) supplies the one power — $a^{\varphi(n)}\equiv1$ — that makes the order *exist* and, via the lemma, *divide* $\varphi(n)$. Everything here is that single fact sharpened.
- **Forward:** Lesson 3.4 defines a **primitive root** as a unit whose order is exactly $\varphi(n)$ — the maximal case, where the powers exhaust the whole group (P3). And RSA in Lesson 5.4 is *correct* precisely because decryption exponents are read mod $\varphi(n)$ and orders divide it.
- **Sideways (`abstract-algebra`):** "$\mathrm{ord}_n(a)\mid\varphi(n)$" is **Lagrange's theorem** — the order of an element divides the order of the group — met here in the concrete group $(\mathbb{Z}/n\mathbb{Z})^\times$ before you ever see an abstract group axiom.
- **Sideways (`cryptography`):** Diffie–Hellman and the discrete-log problem live in exactly this group: publishing $g^x\bmod p$ is easy by repeated squaring, but recovering the exponent $x$ (the discrete log) is believed hard — the one-way asymmetry the concrete instance quietly sets up.
