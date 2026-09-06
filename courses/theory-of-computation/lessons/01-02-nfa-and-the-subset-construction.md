# Automata & Computability · Lesson 1.2: Nondeterministic FA & the subset construction

> ⏱ ~15 min · Module 1: Finite Automata & Regular Languages · Builds on: [1.1 (DFAs)](01-01-deterministic-finite-automata.md) · Unlocks: 1.3 (regular expressions & Kleene's theorem)

## Why this matters

Designing a DFA means answering, for every state and symbol, "and what exactly do I do now?" — even when the honest answer is *it depends on what comes later*. Nondeterminism lets you write that answer down: **guess, and let the machine be right if any guess works.** Descriptions get dramatically shorter and the constructions in the next three lessons get dramatically easier.

The payoff is a theorem with a real edge to it: NFAs recognize exactly the same languages as DFAs. Nondeterminism buys you *concision*, not *power*. That distinction — a model that is easier to write in but no stronger — is one you will meet again for multitape Turing machines (Lesson 3.2), and it is the question underneath P vs NP (Lesson 4.4), where the answer is not known.

There is also an engineering payoff you have already used. A regex engine compiles your pattern to an NFA and then either simulates it as a set of live threads or determinizes it to a DFA. The first is small and slower per character; the second is fast per character and can blow up in memory. Knowing which one your library does is the difference between a linear-time match and a production outage.

## The idea

Keep the sticky note of Lesson 1.1, but now allow **several notes at once**. Reading a symbol, each note may spawn zero, one, or many successors. At the end you accept if *any* surviving note is an accept state.

The useful mental image is threads. The machine forks a thread whenever it faces a choice; a thread that reads a symbol it has no transition for simply dies; the machine accepts if at least one thread is alive and happy when the input ends. Nobody has to decide *which* guess was right — the machine is graded on its best branch.

Here is what that buys. To recognize "ends in `01`" a DFA must, at every position, track how much of a possible final `01` it has — real bookkeeping. An NFA just sits in its start state reading anything at all, and at some point *guesses* "the final `01` starts here," moves off, and checks. If the guess was right, that thread finishes in the accept state. If it was wrong, that thread dies and nobody cares, because some other thread guessed correctly.

And the reason this cannot add power: the set of live threads is itself a finite piece of information. There are at most $2^{|Q|}$ possible sets. So build a DFA whose *states are those sets* — that is the whole subset construction, and it is why nondeterminism is free.

## The formal version

A **nondeterministic finite automaton** is $N = (Q, \Sigma, \delta, q_0, F)$ exactly as before except

$$\delta : Q \times (\Sigma \cup \{\varepsilon\}) \longrightarrow \mathcal{P}(Q),$$

where $\mathcal{P}(Q)$ is the power set of $Q$. In words: from a state, on a symbol — or on *no* symbol at all — you may go to any set of states, possibly the empty set.

An $\varepsilon$-transition is a move the machine may make for free, consuming no input. Define the **$\varepsilon$-closure** of a set $S \subseteq Q$:

$$E(S) = \{\, q \in Q : q \text{ is reachable from some state of } S \text{ by zero or more } \varepsilon\text{-transitions} \,\}.$$

In words: everywhere you could already be without reading anything.

$N$ **accepts** $w$ if $w$ can be written $w = y_1y_2\cdots y_m$ with each $y_i \in \Sigma \cup \{\varepsilon\}$ and there are states $r_0,\dots,r_m$ with $r_0 = q_0$, $r_i \in \delta(r_{i-1}, y_i)$, and $r_m \in F$. In words: **some** run ends accepting. There is no requirement that other runs do, and no requirement that a run exist at all for strings you reject.

**The subset construction.** Given $N = (Q,\Sigma,\delta,q_0,F)$, define the DFA $D = (\mathcal{P}(Q), \Sigma, \delta_D, E(\{q_0\}), F_D)$ by

$$\delta_D(S, a) \;=\; E\!\Big(\bigcup_{q \in S} \delta(q, a)\Big), \qquad F_D = \{\, S \subseteq Q : S \cap F \neq \varnothing \,\}.$$

In words: a state of $D$ is a set of states of $N$ — the threads alive right now. To step, take every live thread, move it on $a$, pool the results, and close under $\varepsilon$. Accept a set if it contains any accept state of $N$.

**Theorem (Rabin–Scott).** $L(D) = L(N)$. Hence a language is regular iff some NFA recognizes it.

*Proof sketch.* Induct on $|u|$ that after reading a prefix $u$, $D$ is in exactly the set of states $N$ could be in after reading $u$. Base: $D$ starts in $E(\{q_0\})$, which is exactly where $N$ can be before reading anything. Step: the definition of $\delta_D$ is a literal transcription of "where could every live thread go." Apply at $u = w$ and compare with $F_D$. $\blacksquare$

Two practical notes. First, $D$ has $2^{|Q|}$ states on paper, but you only ever build the ones **reachable** from the start set — usually far fewer, sometimes all of them (P3). Second, always $\varepsilon$-close: once at the start, and again after every symbol.

## Picture

![Two state diagrams stacked. Above, a three-state NFA over 0 and 1 recognizing strings that end in 01, with a self-loop on the start state labelled 0, 1. Below, the DFA obtained by the subset construction, whose three states are labelled by the sets p0, then p0 and p1, then p0 and p2.](assets/01-02-fig1.svg)

The NFA's self-loop on $p_0$ is the guess: "not yet — keep reading." The move $p_0 \xrightarrow{0} p_1$ is "the final `01` starts here." Note $p_0$ has *two* outgoing arrows on `0` (the loop and the move to $p_1$), which no DFA is allowed, and $p_2$ has none at all, which no DFA is allowed either — a thread that reads anything after reaching $p_2$ dies.

The DFA below is the same machine with the threads bundled. Every one of its states contains $p_0$, because the self-loop keeps that thread alive forever; the interesting content is whether $p_1$ or $p_2$ rides along. And notice the DFA is exactly the three-state machine you would have designed by hand for "ends in `01`" — $\{p_0\}$ means "no useful suffix," $\{p_0,p_1\}$ means "ends in `0`," $\{p_0,p_2\}$ means "ends in `01`." The construction *found* the right sticky-note facts for you. That is the day-to-day value of it.

## Worked examples

**Example 1 (mechanical): trace, then determinize.** Take the NFA of the Picture: $Q = \{p_0,p_1,p_2\}$, $\Sigma = \{0,1\}$, start $p_0$, $F = \{p_2\}$, and

$$\delta(p_0,0) = \{p_0,p_1\}, \quad \delta(p_0,1) = \{p_0\}, \quad \delta(p_1,1) = \{p_2\},$$

with every other value $\varnothing$. There are no $\varepsilon$-transitions, so $E(S) = S$ throughout.

Trace $w = 0101$ by tracking the live set:

$$\{p_0\} \xrightarrow{\,0\,} \{p_0,p_1\} \xrightarrow{\,1\,} \{p_0,p_2\} \xrightarrow{\,0\,} \{p_0,p_1\} \xrightarrow{\,1\,} \{p_0,p_2\}.$$

The final set meets $F$, so **accept** — correct, $0101$ ends in `01`. Trace $w = 0010$:

$$\{p_0\} \xrightarrow{\,0\,} \{p_0,p_1\} \xrightarrow{\,0\,} \{p_0,p_1\} \xrightarrow{\,1\,} \{p_0,p_2\} \xrightarrow{\,0\,} \{p_0,p_1\}.$$

Final set misses $F$: **reject**. Note the third step — the machine *was* in an accepting set and then left it. Only the last set counts.

Those traces are the subset construction. Reading off every set that appeared and where it goes:

| $\delta_D$ | `0` | `1` | accept? |
|---|---|---|---|
| $\{p_0\}$ | $\{p_0,p_1\}$ | $\{p_0\}$ | no |
| $\{p_0,p_1\}$ | $\{p_0,p_1\}$ | $\{p_0,p_2\}$ | no |
| $\{p_0,p_2\}$ | $\{p_0,p_1\}$ | $\{p_0\}$ | **yes** |

Three reachable states out of $2^3 = 8$; the other five never come up. **Build only what you reach.**

**Example 2 (why you'd care): the $k$-th symbol from the end.** Fix $k \ge 1$ and let

$$L_k = \{\, w \in \{0,1\}^* : |w| \ge k \text{ and the } k\text{-th symbol from the end of } w \text{ is } 1 \,\}.$$

An NFA needs $k+1$ states. Sit in $p_0$ reading anything; on a `1`, optionally guess "this is the one," stepping to $p_1$; then count off $k-1$ more symbols through $p_2, \dots, p_k$, accepting at $p_k$. Formally $\delta(p_0,0) = \{p_0\}$, $\delta(p_0,1) = \{p_0,p_1\}$, and $\delta(p_i,0) = \delta(p_i,1) = \{p_{i+1}\}$ for $1 \le i < k$, with $F = \{p_k\}$.

Trace $k = 3$ on $w = 01101$:

$$\{p_0\} \xrightarrow{\,0\,} \{p_0\} \xrightarrow{\,1\,} \{p_0,p_1\} \xrightarrow{\,1\,} \{p_0,p_1,p_2\} \xrightarrow{\,0\,} \{p_0,p_2,p_3\} \xrightarrow{\,1\,} \{p_0,p_1,p_3\}.$$

$p_3 \in F$, so accept — and indeed the third symbol from the end of $01101$ is `1`. Read the trace as bookkeeping: the live set always records *which of the last few symbols were* `1`s.

Now the cost. Determinizing gives exactly $2^k$ reachable states (verified for $k \le 5$ by direct construction), and P3 shows no DFA can do better. So the same language costs $k+1$ states nondeterministically and $2^k$ deterministically — an **exponential** gap, achieved, not merely feared.

This is precisely the regex-engine trade-off. A backtracking engine explores the NFA's threads one at a time and can go exponential in the *input* length; a thread-set simulation (Thompson's) keeps the live set and runs in $O(nk)$ time with $O(k)$ space; a DFA-compiling engine gets $O(n)$ time but pays up to $2^k$ memory. Three defensible engineering choices, and the automaton theory is what tells you they are the only three.

## Watch out

- **You might think** an NFA rejects when *some* run rejects — **but actually** acceptance is existential: one accepting run is enough, and dead threads never count against you. The asymmetry matters when you try to complement an NFA: swapping accept states, which works fine for a DFA, gives the wrong language for an NFA (Lesson 1.4 makes the counterexample).
- **You might think** the subset construction always explodes to $2^{|Q|}$ — **but actually** you build only the reachable sets, and for most machines that is a handful, as in Example 1 where 8 possible sets collapsed to 3. The exponential is a worst case that specific languages (like $L_k$) genuinely realize, not a typical one.
- **You might think** you can apply $\delta$ and move on — **but actually** with $\varepsilon$-transitions you must close *before the first symbol and after every symbol*. Forgetting the initial closure is the single most common error in a hand-run construction, and it silently produces a machine that rejects strings it should accept.

## One-liner

> Nondeterminism is the right to guess: an NFA accepts if any thread survives, and since the set of live threads is itself finite information, determinizing costs you states but never power.

## Problems

**P1 (🟢)** Let $N$ be the NFA over $\Sigma = \{a,b\}$ with $Q = \{q_0, q_1\}$, start $q_0$, $F = \{q_1\}$, and

$$\delta(q_0,a) = \{q_0, q_1\}, \qquad \delta(q_0,b) = \{q_0\}, \qquad \delta(q_1,b) = \{q_1\},$$

all other values $\varnothing$. (a) Trace the live set on $bab$ and on $bba$. (b) Run the subset construction to completion and give the resulting DFA as a table. (c) Describe $L(N)$ in one sentence.

**P2 (🟡)** Let $M$ be the $\varepsilon$-NFA over the one-letter alphabet $\Sigma = \{a\}$ with states $\{s, x_0, x_1, y_0, y_1, y_2\}$, start $s$, accept $\{x_0, y_0\}$, and

$$\delta(s,\varepsilon) = \{x_0, y_0\}, \quad \delta(x_0,a) = \{x_1\},\ \delta(x_1,a) = \{x_0\}, \quad \delta(y_0,a)=\{y_1\},\ \delta(y_1,a)=\{y_2\},\ \delta(y_2,a)=\{y_0\},$$

all other values $\varnothing$. (a) Describe $L(M)$ in one sentence. (b) Run the subset construction, listing the reachable sets in the order they appear, and say how many there are. (c) Explain the number you got in (b) in one sentence.

**P3 (🔴)** Prove that **every** DFA recognizing $L_k$ (Example 2) has at least $2^k$ states.

*Method:* show the $2^k$ strings of length exactly $k$ are pairwise **distinguishable** — for any two distinct $x, y \in \{0,1\}^k$ there is a suffix $z$ with exactly one of $xz, yz$ in $L_k$ — then argue that two distinguishable strings cannot end in the same state.

<details>
<summary>Solutions</summary>

**P1** (a) No $\varepsilon$-transitions, so no closures needed.

$$bab: \quad \{q_0\} \xrightarrow{\,b\,} \{q_0\} \xrightarrow{\,a\,} \{q_0,q_1\} \xrightarrow{\,b\,} \{q_0,q_1\}. \quad \textbf{Accept} \ (q_1 \in F).$$

$$bba: \quad \{q_0\} \xrightarrow{\,b\,} \{q_0\} \xrightarrow{\,b\,} \{q_0\} \xrightarrow{\,a\,} \{q_0,q_1\}. \quad \textbf{Accept}.$$

(b) Start at $\{q_0\}$. On `a`: $\delta(q_0,a) = \{q_0,q_1\}$. On `b`: $\{q_0\}$. New set $\{q_0,q_1\}$: on `a` we get $\delta(q_0,a) \cup \delta(q_1,a) = \{q_0,q_1\} \cup \varnothing = \{q_0,q_1\}$; on `b` we get $\{q_0\} \cup \{q_1\} = \{q_0,q_1\}$. Nothing new.

| $\delta_D$ | `a` | `b` | accept? |
|---|---|---|---|
| $\{q_0\}$ | $\{q_0,q_1\}$ | $\{q_0\}$ | no |
| $\{q_0,q_1\}$ | $\{q_0,q_1\}$ | $\{q_0,q_1\}$ | **yes** |

Two reachable states out of $2^2 = 4$.

(c) $L(N) = \{w : w \text{ contains at least one } a\}$. The DFA makes it obvious: once you see an `a` you are in the accepting set and never leave. (The NFA reading is also clean: guess the *last* `a`, then the $q_1$ self-loop on `b` absorbs everything after it. Every string with an `a` has a last one, so the guess can always be made.)

**P2** (a) $L(M) = \{a^n : n \text{ is divisible by } 2 \text{ or by } 3\}$ — the $\varepsilon$-branch at $s$ offers a free choice between a 2-cycle and a 3-cycle, and acceptance is existential, so either divisibility suffices. Concretely the accepted lengths are $0, 2, 3, 4, 6, 8, 9, 10, 12, \dots$ — note $1, 5, 7, 11$ are missing.

(b) Start: $E(\{s\}) = \{s, x_0, y_0\}$ — **accepting**, since $x_0 \in F$. There are no further $\varepsilon$-transitions, so each subsequent step is just "apply $\delta$ on `a`."

| step | set | accept? |
|---|---|---|
| $0$ | $\{s, x_0, y_0\}$ | **yes** |
| $1$ | $\{x_1, y_1\}$ | no |
| $2$ | $\{x_0, y_2\}$ | **yes** |
| $3$ | $\{x_1, y_0\}$ | **yes** |
| $4$ | $\{x_0, y_1\}$ | **yes** |
| $5$ | $\{x_1, y_2\}$ | no |
| $6$ | $\{x_0, y_0\}$ | **yes** |
| $7$ | $\{x_1, y_1\}$ — already seen at step 1 | — |

So **7** reachable sets: the start set, then a cycle of length 6. Reading the accept column off gives accepted lengths $0,2,3,4,6$ then repeating with period 6 — matching (a).

(c) The state after $n$ letters is determined by $(n \bmod 2,\ n \bmod 3)$, and by the Chinese remainder theorem that pair cycles with period $\operatorname{lcm}(2,3) = 6$; the extra state is the start set, which carries the unreachable-again $s$ and so is listed separately even though it behaves identically to $\{x_0,y_0\}$. (Merging those two equivalent states leaves the 6-state minimal DFA — a first glimpse of minimization.)

**P3** *Step 1: the $2^k$ length-$k$ strings are pairwise distinguishable.* Let $x \neq y$ both have length $k$, and let $i$ be a position where they differ, $1 \le i \le k$. Put $z = 0^{\,i-1}$. Then $xz$ has length $k + i - 1$, so its $k$-th symbol from the end sits at position $(k+i-1) - k + 1 = i$ — which is $x_i$. Likewise the $k$-th-from-last symbol of $yz$ is $y_i$. Since $x_i \neq y_i$, exactly one of $x_i, y_i$ equals `1`, so exactly one of $xz, yz$ lies in $L_k$.

*Step 2: distinguishable strings need different states.* Let $M$ be any DFA with $L(M) = L_k$, and suppose $x \neq y$ of length $k$ drove $M$ to the same state $q$. A DFA's future depends only on its current state, so $M$ ends in the same state on $xz$ as on $yz$ for every $z$ — hence $xz \in L(M) \iff yz \in L(M)$. That contradicts Step 1.

So the map "length-$k$ string $\mapsto$ state reached" is injective on a set of size $2^k$, and $M$ has at least $2^k$ states. $\blacksquare$

Combined with the NFA of $k+1$ states and the subset construction (which achieves exactly $2^k$ reachable sets here), the gap is **exactly** exponential — $k+1$ versus $2^k$ — with matching upper and lower bounds. Note what the argument did *not* do: it never examined a particular DFA. It ruled out every possible one at once, which is the only kind of argument that can establish a lower bound. Lesson 1.5 turns this same distinguishability idea into a proof that some languages have *no* DFA at all.

</details>

## Connections

- **Backward:** the subset construction is a function into $\mathcal{P}(Q)$, the [power set](../../discrete-mathematics/lessons/02-01-sets-and-set-operations.md) from discrete math, and its correctness is the same one-step-preservation induction as Lesson 1.1's. P2 is the [Chinese remainder](../../discrete-mathematics/lessons/04-03-modular-arithmetic-and-congruences.md) structure in automaton form.
- **Forward:** Lesson 1.3 builds NFAs from regular expressions, where $\varepsilon$-transitions do all the glue work; Lesson 1.4 uses "NFA or DFA, whichever is convenient" as a proof technique; Lesson 1.5's distinguishability argument is P3 pushed to infinitely many strings. In Lesson 3.2, nondeterministic *Turing* machines get the same "no extra power" treatment — and in Lesson 4.4 the same question about *time* is the P vs NP problem.
- **Sideways:** this is the theory under every regex library. Thompson's construction (Lesson 1.3) plus live-thread simulation is why RE2 and Go's `regexp` promise linear time, while backtracking engines (PCRE, and most standard libraries) can be driven exponential by a pattern like `(a|a)*b` — a denial-of-service class known as ReDoS. The fix is not a faster backtracker; it is this theorem.
