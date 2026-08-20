# Enumerative & Algebraic Combinatorics · Lesson 3.3: Exponential generating functions

> ⏱ ~15 min · Module 3: Generating functions · Builds on: [3.2](03-02-recurrences-generating-functions.md), [2.2](02-02-set-partitions-stirling-bell.md) · Unlocks: [4.1](04-01-bijective-proof.md)

## Why this matters

Ordinary generating functions (Lesson [3.1](03-01-ordinary-generating-functions.md)) count *unlabeled* things — piles of identical coins, where all that matters is how many. But most of the objects you actually want to count wear name tags: person $1$, person $2$, …, person $n$; the elements of a set you're partitioning; the positions of a permutation. For labeled objects, combining two structures forces a decision the OGF never had to make — *which* labels go into each piece — and that decision is a binomial coefficient. Exponential generating functions are the bookkeeping device engineered so that decision happens automatically when you multiply. The single most important formula in the theory, the **exponential formula**, is also the physicist's linked-cluster expansion (a partition function is the exponential of its connected diagrams) and the probabilist's tool for the cycle structure of a random permutation.

## The idea

An OGF hangs the count $a_n$ on $x^n$. An **exponential generating function** (EGF) hangs it on $x^n/n!$ instead:
$$\hat A(x) = \sum_{n\ge 0} a_n\,\frac{x^n}{n!}.$$
The hat is a reminder we're using the exponential carrier. The count $a_n$ is still just $a_n$ — the $n!$ is not "$n!$ copies of anything," it's a normalization. So why divide?

Picture merging two labeled structures. You have a red gadget that can be built on any labeled set and a blue gadget likewise, and you want to build a red-gadget-plus-blue-gadget on the labels $\{1,2,\dots,n\}$. With *identical* units (OGF world) you'd just decide the sizes — $k$ units red, $n-k$ blue — one choice per split. But the labels are *distinct*, so after fixing the sizes you must also choose **which** $k$ of the $n$ labels go to the red part: $\binom{n}{k}$ ways. The number of combined structures of size $n$ is therefore $\sum_k \binom{n}{k} a_k\, b_{n-k}$, a *binomial* convolution — and dividing each term by $n!$ turns that binomial convolution into ordinary multiplication of series. That's the whole trick: **the $n!$ absorbs the "deal out the labels" binomial.**

## The formal version

**Definition (EGF).** The exponential generating function of a sequence $(a_n)_{n\ge 0}$ is the formal power series $\hat A(x) = \sum_{n\ge 0} a_n\,\dfrac{x^n}{n!}$.

*In words:* same coefficients as before, but read off $x^n/n!$ rather than $x^n$. To recover the count, $a_n = n!\,[x^n]\hat A(x)$ — take the ordinary coefficient and multiply by $n!$.

**The product rule (labeled).** If $\hat A,\hat B$ are the EGFs of $(a_n),(b_n)$, then
$$\left[\frac{x^n}{n!}\right]\hat A(x)\hat B(x) = \sum_{k=0}^{n}\binom{n}{k}\,a_k\,b_{n-k}.$$

*In words:* the $n$-th coefficient of a product of EGFs counts ways to split the $n$ labels into an ordered pair of subsets, build an $A$-structure on the first and a $B$-structure on the second.

*Proof.* Multiply the series and collect $x^n$:
$$\hat A\hat B = \Big(\sum_i \tfrac{a_i}{i!}x^i\Big)\Big(\sum_j \tfrac{b_j}{j!}x^j\Big),\qquad [x^n]\hat A\hat B = \sum_{i+j=n}\frac{a_i\,b_j}{i!\,j!}.$$
Multiply by $n!$ to convert to the $x^n/n!$ coefficient:
$$n!\sum_{i+j=n}\frac{a_i b_j}{i!\,j!} = \sum_{k=0}^{n}\frac{n!}{k!\,(n-k)!}\,a_k b_{n-k} = \sum_{k=0}^{n}\binom{n}{k}a_k b_{n-k}.\qquad\blacksquare$$

**Three EGFs to memorize.**

- **Sets:** there is exactly one way to view a labeled set as "a set," so $a_n=1$ for all $n$, and
$$\sum_{n\ge0}1\cdot\frac{x^n}{n!}=e^x.$$
So $e^x$ is the EGF of the all-ones sequence — the atom of everything labeled.
- **Nonempty sets:** drop the empty case, $e^x-1$.
- **Permutations:** there are $n!$ permutations of $[n]$, so $a_n=n!$ and $\sum_n n!\,\frac{x^n}{n!}=\sum_n x^n=\dfrac{1}{1-x}$. (Note $\tfrac{1}{1-x}$ was the OGF of all-ones; as an *EGF* it's the count of permutations. Same series, different structure — the transform you pick depends on what you're counting.)

**The exponential formula (intuition).** If $\hat C(x)$ is the EGF of some family of *connected* (indecomposable) labeled structures with $c_0=0$, then
$$\exp\big(\hat C(x)\big)=\sum_{k\ge0}\frac{\hat C(x)^k}{k!}$$
is the EGF of structures that are a **set of disjoint connected pieces**. The $\hat C^k/k!$ term builds an *unordered* family of $k$ pieces (the $k!$ kills the ordering); summing over $k$ and using $\sum \hat C^k/k! = e^{\hat C}$ assembles all of them at once.

*In words:* exponentiate the EGF of the "pieces" and you get the EGF of "any number of disjoint pieces." This is the labeled analogue of the OGF slogan "$\frac{1}{1-C}$ counts sequences of pieces" — but unordered, hence $\exp$ instead of $\frac{1}{1-C}$.

## Concrete instance

**Derangements from the exponential formula.** A permutation of $[n]$ splits cleanly into its **fixed points** (a set) and its **deranged part** (a permutation with no fixed point — a *derangement*, counted $!n$ from Lesson [1.3](01-03-inclusion-exclusion.md)). Every permutation is exactly one such pair, so by the product rule,
$$\underbrace{\frac{1}{1-x}}_{\text{all permutations}}=\underbrace{e^x}_{\text{fixed-point set}}\cdot\ \hat D(x),\qquad \hat D(x)=\frac{e^{-x}}{1-x},$$
where $\hat D$ is the derangement EGF. Now extract $!n$ with the product rule, reading $e^{-x}$ as the EGF with $a_k=(-1)^k$ (since $e^{-x}=\sum_k(-1)^k x^k/k!$) and $\tfrac{1}{1-x}$ as the EGF with $b_m=m!$:
$$!n=\left[\frac{x^n}{n!}\right]\frac{e^{-x}}{1-x}=\sum_{k=0}^{n}\binom{n}{k}(-1)^k(n-k)!=\sum_{k=0}^{n}\frac{n!}{k!\,(n-k)!}(-1)^k(n-k)! = n!\sum_{k=0}^{n}\frac{(-1)^k}{k!}.$$
That is exactly the inclusion–exclusion formula from Lesson [1.3](01-03-inclusion-exclusion.md) — but here it fell out of one line of series algebra. Check $n=5$:
$$!5=5!\left(1-1+\tfrac12-\tfrac16+\tfrac1{24}-\tfrac1{120}\right)=120\cdot\tfrac{44}{120}=44.\ \checkmark$$

## Worked examples

**Example 1 (mechanical — the product rule in action).** Take $\hat A=\hat B=e^x$ (both are the "set" structure, $a_n=b_n=1$). Their product is
$$e^x\cdot e^x=e^{2x}=\sum_{n\ge0}2^n\frac{x^n}{n!},$$
so the combined structure has count $2^n$. What did we count? By the product rule, an ordered pair (a set on some labels, a set on the rest) — i.e. we tag each of the $n$ labels "$A$" or "$B$." That's a $2$-coloring: $2^n$ ways. And indeed the product rule gives $\sum_k\binom{n}{k}\cdot1\cdot1=2^n$ by the binomial theorem. The algebra ($e^x\cdot e^x=e^{2x}$) and the combinatorics ($2^n$ colorings) agree.

**Example 2 (why you'd care — Bell numbers by exponential formula).** A set partition (Lesson [2.2](02-02-set-partitions-stirling-bell.md)) is an unordered family of disjoint nonempty **blocks**. The "piece" is a nonempty set, EGF $\hat C(x)=e^x-1$. By the exponential formula, the EGF of *all* set partitions is
$$\exp(e^x-1)=\sum_{n\ge0}B_n\frac{x^n}{n!},$$
so the Bell numbers have EGF $e^{e^x-1}$. If instead we fix **exactly $k$** blocks, we take the $k$-piece term $\dfrac{(e^x-1)^k}{k!}$, and since the coefficient there counts partitions into $k$ blocks,
$$\sum_{n\ge0}S(n,k)\frac{x^n}{n!}=\frac{(e^x-1)^k}{k!},$$
the EGF of the Stirling numbers of the second kind — and $\sum_k\frac{(e^x-1)^k}{k!}=e^{e^x-1}$ recovers $B_n=\sum_k S(n,k)$ automatically. Quick check on $B_3$: with $u=e^x-1=x+\tfrac{x^2}{2}+\tfrac{x^3}{6}+\cdots$,
$$e^{u}=1+u+\tfrac{u^2}{2}+\tfrac{u^3}{6}+\cdots,\qquad [x^3]e^u=\underbrace{\tfrac16}_{u}+\underbrace{\tfrac12}_{u^2/2}+\underbrace{\tfrac16}_{u^3/6}=\tfrac56,$$
so $B_3=3!\cdot\tfrac56=5$, matching the five partitions of $\{1,2,3\}$ from Lesson [2.2](02-02-set-partitions-stirling-bell.md). The whole Stirling/Bell world is one exponential.

## Watch out

- **OGF product ≠ EGF product.** Multiplying OGFs gives the plain convolution $\sum_k a_k b_{n-k}$ (split $n$ *identical* units into two piles). Multiplying EGFs gives the *binomial* convolution $\sum_k\binom{n}{k}a_k b_{n-k}$ (deal $n$ *distinct* labels into two subsets). Using the wrong one silently miscounts by all the $\binom{n}{k}$ factors — pick the carrier by asking "are my objects labeled?"
- **The $n!$ is not part of the count.** You might think an EGF secretly counts $n!\cdot a_n$ things. It doesn't: $a_n$ is the count; the $n!$ is a divisor built into the *carrier* $x^n/n!$ so that products behave. To read a count back you must reinsert it: $a_n=n!\,[x^n]\hat A(x)$.
- **$\exp$, not $\frac{1}{1-C}$, for labeled assemblies.** The OGF rule "sequences of pieces $\to\frac{1}{1-C}$" builds an *ordered* list. Its EGF cousin builds an *unordered set* of pieces, so you exponentiate. Use $\frac{1}{1-\hat C}$ only when the pieces are genuinely ordered (e.g. a linear arrangement of blocks).

## One-liner

> An EGF hangs $a_n$ on $x^n/n!$ so that multiplication *deals out the labels* — and $\exp$ of a "connected" EGF assembles disjoint connected pieces into everything.

## Problems

**P1 (🟢)** (a) Write down $a_n$ for the sequence whose EGF is $e^{2x}$, then for $x\,e^{x}$. (b) Using the product rule, find the number of ways to split the labels $\{1,\dots,n\}$ into an **ordered pair of nonempty blocks** by extracting coefficients from $(e^x-1)^2$. Give a closed form and sanity-check it against inclusion–exclusion (surjections onto a $2$-set, Lesson [1.3](01-03-inclusion-exclusion.md)).

**P2 (🟡)** Same split, but into an **unordered** pair of nonempty blocks: its EGF is $\dfrac{(e^x-1)^2}{2!}$. Extract the count and show it equals the Stirling number $S(n,2)=2^{n-1}-1$ from Lesson [2.2](02-02-set-partitions-stirling-bell.md). Explain in one sentence why the answer is exactly half of P1's.

**P3 (🔴, optional)** Starting from $\displaystyle\sum_n S(n,k)\frac{x^n}{n!}=\frac{(e^x-1)^k}{k!}$, expand $(e^x-1)^k$ with the binomial theorem to prove the explicit formula
$$S(n,k)=\frac{1}{k!}\sum_{j=0}^{k}(-1)^{k-j}\binom{k}{j}j^{n}.$$
Then note $k!\,S(n,k)$ is the number of **surjections** from $[n]$ onto $[k]$, and match your sum to the inclusion–exclusion surjection count from Lesson [1.3](01-03-inclusion-exclusion.md).

<details>
<summary>Solutions</summary>

**P1** (a) $e^{2x}=\sum_n 2^n\frac{x^n}{n!}$, so $a_n=2^n$. For $x\,e^x=x\sum_m\frac{x^m}{m!}=\sum_{n\ge1}\frac{x^n}{(n-1)!}=\sum_{n\ge1} n\,\frac{x^n}{n!}$, so $a_n=n$ (and $a_0=0$).

(b) $(e^x-1)^2=e^{2x}-2e^x+1=\sum_n\big(2^n-2\cdot1^n\big)\frac{x^n}{n!}$ for $n\ge1$ (the $+1$ only affects $n=0$). So the ordered-pair count is $2^n-2$. Check by inclusion–exclusion: an ordered pair of nonempty blocks covering all labels is exactly a **surjection** $[n]\to\{A,B\}$; there are $2^n$ functions, minus the $2$ that miss a target value, giving $2^n-2$. ✓

**P2** Divide P1's ordered count by $2!$ because swapping the two blocks gives the same *unordered* partition:
$$\frac{1}{2!}\left[\frac{x^n}{n!}\right](e^x-1)^2=\frac{2^n-2}{2}=2^{n-1}-1=S(n,2).$$
It's exactly half of P1 because each unordered $2$-block partition $\{X,Y\}$ arises from precisely two ordered pairs, $(X,Y)$ and $(Y,X)$, and (both blocks nonempty) these two are always distinct — so the $2\!:\!1$ collapse is uniform.

**P3** Binomial-expand: $(e^x-1)^k=\sum_{j=0}^k\binom{k}{j}(e^x)^j(-1)^{k-j}=\sum_{j=0}^k\binom{k}{j}(-1)^{k-j}e^{jx}$. Read off the $x^n/n!$ coefficient using $e^{jx}=\sum_n j^n\frac{x^n}{n!}$:
$$\left[\frac{x^n}{n!}\right](e^x-1)^k=\sum_{j=0}^k\binom{k}{j}(-1)^{k-j}j^n.$$
Divide by $k!$ (the EGF has $\frac{1}{k!}$ out front) to get $S(n,k)=\frac{1}{k!}\sum_{j=0}^k(-1)^{k-j}\binom{k}{j}j^n$. $\blacksquare$

Now $k!\,S(n,k)=\sum_{j=0}^k(-1)^{k-j}\binom{k}{j}j^n$ counts surjections $[n]\twoheadrightarrow[k]$: labeling the $k$ blocks in all $k!$ orders turns a $k$-block partition into a surjection onto $[k]$. That sum is precisely the inclusion–exclusion surjection formula of Lesson [1.3](01-03-inclusion-exclusion.md) — the sieve subtracts, over each subset of $j$ allowed targets, the $j^n$ functions that miss the other $k-j$. At $n=6,k=3$ it gives $729-3\cdot64+3\cdot1=540$, the Boss-problem value.

</details>

## Flashback

**From Lesson 2.2 (Set partitions: Stirling & Bell):** Using only the recurrence $S(n,k)=k\,S(n-1,k)+S(n-1,k-1)$ (with $S(1,1)=1$), build the Stirling triangle up to $n=4$ and compute the Bell number $B_4=\sum_{k}S(4,k)$.

<details>
<summary>Solution</summary>

Fill row by row (each entry $=k\cdot$ the value above $+$ the value above-left):

| $n\backslash k$ | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| 1 | 1 | | | |
| 2 | 1 | 1 | | |
| 3 | 1 | 3 | 1 | |
| 4 | 1 | 7 | 6 | 1 |

Sample checks: $S(3,2)=2\cdot1+1=3$; $S(4,2)=2\cdot S(3,2)+S(3,1)=2\cdot3+1=7$; $S(4,3)=3\cdot S(3,3)+S(3,2)=3\cdot1+3=6$. Then
$$B_4=S(4,1)+S(4,2)+S(4,3)+S(4,4)=1+7+6+1=15.$$
(Cross-check with this lesson: $B_4=4!\,[x^4]e^{e^x-1}=24\cdot\frac{15}{24}=15$.) ✓

</details>

## Connections

- **Backward:** OGF products (Lesson [3.1](03-01-ordinary-generating-functions.md)) do plain convolution; EGF products do *binomial* convolution — the two differ by exactly the $\binom{n}{k}$ that deals out labels, so "labeled or not?" is the whole choice. And every count from Module 2 now has a generating function: Bell/Stirling (Lesson [2.2](02-02-set-partitions-stirling-bell.md)) are $e^{e^x-1}$ and $(e^x-1)^k/k!$; derangements $!n$ (Lesson [1.3](01-03-inclusion-exclusion.md)) are $e^{-x}/(1-x)$.
- **Forward:** the exponential formula is an *identity between counts* — and Module 4 (Lesson [4.1](04-01-bijective-proof.md)) asks you to prove such identities by exhibiting explicit bijections rather than pushing series, giving you a second, structural view of the same facts.
- **Sideways (probability & physics):** the cycle EGF $\log\frac{1}{1-x}$ (a permutation is a set of cycles, so $\exp\log\frac{1}{1-x}=\frac1{1-x}$) governs the cycle structure of a random permutation in `probability-theory`, and the exponential formula is literally the *linked-cluster theorem* of statistical mechanics — the partition function is the exponential of the sum over connected diagrams.
