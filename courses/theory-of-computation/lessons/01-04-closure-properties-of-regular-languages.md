# Automata & Computability · Lesson 1.4: Closure properties of regular languages

> ⏱ ~15 min · Module 1: Finite Automata & Regular Languages · Builds on: [1.1 (DFAs)](01-01-deterministic-finite-automata.md), [1.2 (NFAs)](01-02-nfa-and-the-subset-construction.md), [1.3 (regular expressions)](01-03-regular-expressions-and-kleenes-theorem.md) · Unlocks: 1.5 (the pumping lemma)

## Why this matters

You now have three interchangeable descriptions of the same class. This lesson turns that into a working method: **to show a language is regular, build it out of languages you already know are regular** — no new machine to design, no new proof to write.

That method is how the class earns the name. A collection of sets closed under union, intersection, complement, concatenation and star is a robust mathematical object, not an accident of one definition, and its robustness is exactly what makes the *negative* results of Lesson 1.5 sharp. The closure properties also cut the other way, which is the subtler half: if $A$ is regular and $A \cap B$ is provably not, then $B$ cannot be regular either. That contrapositive is a standard weapon, and it is how the hardest non-regularity proofs get done.

Finally, the constructions themselves are the algorithms behind real tooling — combining two validators, negating a matcher, or checking whether two patterns can ever match the same string, all of which a query optimizer or a firewall rule compiler does for real.

## The idea

The trick is one line: **run both machines at once and remember the pair.**

Give $A$ a DFA with states $Q_A$ and $B$ a DFA with states $Q_B$. Build a machine whose state is a pair $(p, q)$ — where $A$'s machine is, and where $B$'s is. On each input symbol, advance both coordinates. Since both machines read the *same* input in lockstep, after reading $w$ the pair says exactly what each machine thinks of $w$. Now the only remaining decision is which pairs to accept:

- accept when **both** coordinates are happy $\Rightarrow$ you get $A \cap B$;
- accept when **either** is happy $\Rightarrow$ you get $A \cup B$.

Same machine, different accept set. That single construction settles two closure properties at once, with $|Q_A| \cdot |Q_B|$ states.

Complement is even easier — for a DFA. Every string drives a DFA to exactly one state, so flipping which states are accepting flips exactly which strings are accepted: swap $F$ for $Q \setminus F$ and you have $\overline{A}$.

Concatenation and star are the ones that look hard deterministically and are trivial nondeterministically: you need to *guess* where the first piece ends, and guessing is what an NFA does for free. So use the Thompson gadgets from Lesson 1.3 and lean on Kleene's theorem to get back to a DFA if you want one.

**Pick the representation that makes the property easy.** Complement wants a DFA. Concatenation and star want an NFA. Union wants a regular expression (it is one symbol). All three describe the same class, so you may switch at will — that is the practical cash value of Kleene's theorem.

## The formal version

**Theorem.** The regular languages over a fixed $\Sigma$ are closed under union, intersection, complement, difference, concatenation, star and reversal.

**Product construction.** Let $M_A = (Q_A, \Sigma, \delta_A, s_A, F_A)$ and $M_B = (Q_B, \Sigma, \delta_B, s_B, F_B)$ be DFAs. Define $M = (Q_A \times Q_B,\ \Sigma,\ \delta,\ (s_A, s_B),\ F)$ with

$$\delta\big((p,q),\,a\big) \;=\; \big(\delta_A(p,a),\ \delta_B(q,a)\big),$$

and $F = F_A \times F_B$ for intersection, or $F = (F_A \times Q_B) \cup (Q_A \times F_B)$ for union.

*Correctness.* By induction on $|w|$, after reading $w$ the machine $M$ is in state $\big(\hat\delta_A(s_A, w),\ \hat\delta_B(s_B, w)\big)$, where $\hat\delta$ denotes "run the whole string." (Base: $|w| = 0$ gives the start pair. Step: immediate from the definition of $\delta$.) So $M$ accepts $w$ iff the chosen condition on the pair holds, which is exactly membership in $A \cap B$ or $A \cup B$. $\blacksquare$

**Complement.** If $M = (Q,\Sigma,\delta,q_0,F)$ is a **DFA** then $\overline{M} = (Q,\Sigma,\delta,q_0,\,Q \setminus F)$ recognizes $\overline{L(M)} = \Sigma^* \setminus L(M)$. Two hypotheses are load-bearing: $\delta$ must be **total** (no missing transitions — otherwise a string that "falls off" is rejected by both machines) and the machine must be **deterministic** (see Example 2).

**Difference.** $A \setminus B = A \cap \overline{B}$, so it follows from the two above. In particular, given DFAs for $A$ and $B$ you can decide whether $A \subseteq B$ by checking whether $A \cap \overline{B}$ has an accepting reachable state — this is how a tool tells you one pattern subsumes another.

**Concatenation and star.** Immediate from the Thompson gadgets of [Lesson 1.3](01-03-regular-expressions-and-kleenes-theorem.md), which produce NFAs; convert with the subset construction if a DFA is wanted.

**Reversal.** $A^R = \{w^R : w \in A\}$, where $w^R$ is $w$ written backwards. Given an NFA for $A$, reverse every arrow, make the old start state the sole accept state, and add a new start state with $\varepsilon$-edges to all old accept states. A path spelling $w$ becomes a path spelling $w^R$ — this is P3(c).

**Contrapositive use.** If $A$ is regular and $A \cap B$ is *not* regular, then $B$ is not regular. Likewise if $\overline{B}$ is not regular then neither is $B$. These are the workhorses of Lesson 1.5.

## Picture

![Two small DFAs above: one with three states recognizing binary numerals divisible by 3, one with two states recognizing numerals ending in 0. Below, a three-by-two grid of the six product states, one per pair, with the top-left cell highlighted as the only accept state for intersection.](assets/01-04-fig1.svg)

The grid is the whole idea. The two machines never interact — each coordinate evolves on its own — so the picture of the product is literally the Cartesian grid of their state sets, and the only thing you choose is which cells to shade as accepting. Shade one cell (both happy) and you have intersection; shade the whole first row and first column (either happy) and you have union. The machine is identical either way, which is why one construction proves two theorems.

## Worked examples

**Example 1 (mechanical): multiples of 6.** Let $A = \{w : w \text{ is a binary numeral for a multiple of } 3\}$ (the three-state DFA from Lesson 1.1's P1, states $r_0, r_1, r_2$ tracking the value mod 3) and $B = \{w : w \text{ ends in } 0\}$, the two-state parity machine with states $e, o$ tracking the last bit. Both are regular, so $A \cap B$ is, with at most $3 \times 2 = 6$ states — and all six are reachable.

| $\delta$ | `0` | `1` | accept? |
|---|---|---|---|
| $(r_0, e)$ | $(r_0, e)$ | $(r_1, o)$ | **yes** |
| $(r_0, o)$ | $(r_0, e)$ | $(r_1, o)$ | no |
| $(r_1, e)$ | $(r_2, e)$ | $(r_0, o)$ | no |
| $(r_1, o)$ | $(r_2, e)$ | $(r_0, o)$ | no |
| $(r_2, e)$ | $(r_1, e)$ | $(r_2, o)$ | no |
| $(r_2, o)$ | $(r_1, e)$ | $(r_2, o)$ | no |

The language is *binary numerals for multiples of 6* — divisible by 3 and even. Reading the shortest accepted strings off confirms it: $0,\ 110,\ 1100,\ 10010,\ 11000,\ 11110$ — that is $0, 6, 12, 18, 24, 30$. (Verified against the arithmetic by exhaustive check on every binary string of length up to 13.)

Note what you did *not* do: you never thought about what "multiple of 6" requires. You proved a fact about arithmetic by assembling two machines you already had. That is the method.

**Example 2 (why you'd care): the complement trap.** Complement is the closure property people get wrong, because the obvious move — swap the accept states — is only valid for a DFA.

Take the three-state NFA $N$ for "ends in `01`" from Lesson 1.2: $\delta(p_0,0) = \{p_0,p_1\}$, $\delta(p_0,1) = \{p_0\}$, $\delta(p_1,1) = \{p_2\}$, start $p_0$, $F = \{p_2\}$. Swap the accept set to $\{p_0, p_1\}$, call the result $N'$, and ask what $N'$ recognizes.

$$L(N') = \Sigma^*.$$

**Every** string is accepted, including the ones ending in `01`. The reason: $p_0$ has a self-loop on both symbols, so the thread that never guesses is alive in $p_0$ after *any* input — and $p_0$ is now accepting. Take $w = 01$: it is in $L(N)$ (it ends in `01`) and it is in $L(N')$ too, so $L(N')$ is not the complement of $L(N)$; it is not even disjoint from it.

The structural reason is the asymmetry from Lesson 1.2. A DFA has *exactly one* run per string, so "the run ends outside $F$" and "the run does not end in $F$" are the same statement. An NFA has *many* runs, and the negation of "**some** run accepts" is "**every** run rejects" — which is not what swapping $F$ computes. Swapping $F$ computes "some run ends outside $F$," an entirely different condition that is usually much easier to satisfy.

The correct recipe: determinize first (subset construction), *then* swap. That costs you the exponential of Lesson 1.2 — and this is not a defect of the method but a real phenomenon. Complementing an NFA genuinely can require an exponential blow-up in states, which is why regex engines that support negation are so much more expensive than ones that do not.

## Watch out

- **You might think** closure under $\cap$ means "non-regular $\cap$ non-regular is non-regular" — **but actually** closure says nothing about languages outside the class, and the converse fails badly. $\{0^n1^n : n \ge 0\}$ and $\{1^n0^n : n \ge 0\}$ are both non-regular (Lesson 1.5), yet their intersection is $\{\varepsilon\}$, which is finite and therefore regular. Closure is a one-way implication (P3a).
- **You might think** swapping accept states complements any machine — **but actually** it complements only a **deterministic and total** one. Both hypotheses matter: on an NFA it computes something else entirely (Example 2), and on a partial DFA a string that falls off the transition table is rejected by the original *and* by the swap.
- **You might think** the product construction needs the two machines to be similar — **but actually** all it needs is a shared alphabet. Different state counts, different structures, no problem; but if the alphabets differ you must first extend both to the union alphabet, adding trap transitions for the new symbols, or the pairs will not step together.

## One-liner

> Run both machines on the same input and remember the pair: one construction, and the choice of which pairs to accept gives you intersection or union — while complement is free for a DFA and expensive for everything else.

## Problems

**P1 (🟢)** Let $A = \{w \in \{0,1\}^* : w \text{ has an even number of } 1\text{s}\}$, recognized by the two-state DFA with states $E$ (start, accept) and $O$; and let $B = \{w : w \text{ does not contain } 11\}$, recognized by the three-state DFA of Lesson 1.3's Flashback with states $s_0$ (start), $s_1$, $d$ (trap), $F_B = \{s_0, s_1\}$.

(a) How many states does the product machine have? (b) Give the transition on `0` and on `1` out of the state $(O, s_1)$, and say whether that state accepts. (c) Classify $1001$, $0110$ and $10101$ by tracing the product machine, and check each answer against the definitions of $A$ and $B$.

**P2 (🟡)** Let $L \subseteq \Sigma^*$ be an arbitrary regular language.

(a) Show that $L_{\text{even}} = \{w \in L : |w| \text{ is even}\}$ is regular. (b) Show that $\operatorname{Pref}(L) = \{x : xy \in L \text{ for some } y \in \Sigma^*\}$ — the set of prefixes of strings in $L$ — is regular. *(For (b), start from a DFA for $L$ and think about which states to accept.)*

**P3 (🔴)** Decide each claim. If false, give a concrete counterexample; if true, give a proof.

(a) If $A$ and $B$ are both non-regular, then $A \cap B$ is non-regular.
(b) If $A$ is regular and $B \subseteq A$, then $B$ is regular.
(c) If $A$ is regular then so is $A^R = \{w^R : w \in A\}$, where $w^R$ is $w$ reversed.

<details>
<summary>Solutions</summary>

**P1** (a) $2 \times 3 = 6$ states, and all six are reachable: $(E,s_0), (E,s_1), (E,d), (O,s_0), (O,s_1), (O,d)$.

(b) Componentwise: $\delta\big((O,s_1), 0\big) = (\delta_A(O,0), \delta_B(s_1,0)) = (O, s_0)$ and $\delta\big((O,s_1), 1\big) = (E, d)$. The state $(O, s_1)$ does **not** accept — $s_1 \in F_B$ but $O \notin F_A$, and intersection needs both.

(c)

$$1001:\quad (E,s_0) \xrightarrow{1} (O,s_1) \xrightarrow{0} (O,s_0) \xrightarrow{0} (O,s_0) \xrightarrow{1} (E,s_1). \quad \textbf{Accept} \ (E \in F_A,\ s_1 \in F_B).$$

Check: $1001$ has two `1`s (even ✓) and no `11` ✓.

$$0110:\quad (E,s_0) \xrightarrow{0} (E,s_0) \xrightarrow{1} (O,s_1) \xrightarrow{1} (E,d) \xrightarrow{0} (E,d). \quad \textbf{Reject}.$$

Check: two `1`s (even ✓) but it contains `11` ✗ — and indeed the second coordinate fell into the trap $d$ and stayed there. Note the first coordinate came *back* to $E$; only the pair tells the truth.

$$10101:\quad (E,s_0) \xrightarrow{1} (O,s_1) \xrightarrow{0} (O,s_0) \xrightarrow{1} (E,s_1) \xrightarrow{0} (E,s_0) \xrightarrow{1} (O,s_1). \quad \textbf{Reject}.$$

Check: three `1`s (odd ✗), no `11` ✓. This time the *first* coordinate is the one that fails.

**P2** (a) Let $M_L$ be a DFA for $L$ and let $P$ be the two-state DFA $\{p_{\text{ev}}, p_{\text{od}}\}$ that toggles on every symbol, starting and accepting at $p_{\text{ev}}$ — it recognizes $\{w : |w| \text{ even}\}$, which is regular. Then

$$L_{\text{even}} = L \cap \{w : |w| \text{ is even}\},$$

an intersection of two regular languages, hence regular by the product construction. (Explicitly: the product has $2|Q_L|$ states.)

(b) Let $M = (Q,\Sigma,\delta,q_0,F)$ be a DFA for $L$. Define

$$G = \{\, q \in Q : \text{some string } y \text{ takes } q \text{ to a state in } F \,\}$$

— the states from which an accept state is still *reachable*. Now let $M' = (Q,\Sigma,\delta,q_0,G)$, the same machine with accept set $G$.

$M'$ recognizes $\operatorname{Pref}(L)$: reading $x$ drives $M'$ to $\hat\delta(q_0,x)$, and

$$x \in \operatorname{Pref}(L) \iff \exists y:\ \hat\delta(q_0, xy) \in F \iff \exists y:\ \hat\delta\big(\hat\delta(q_0,x),\,y\big) \in F \iff \hat\delta(q_0,x) \in G.$$

Since $Q$ is finite, $G$ is computable (mark $F$, then repeatedly mark any state with an edge into a marked state — a backwards reachability search on the transition graph). So $\operatorname{Pref}(L)$ is regular. $\blacksquare$

(Observe that this construction is exactly "delete the dead states from the accept condition." It also shows *why* trap states matter: $\operatorname{Pref}(L) = \Sigma^*$ precisely when $M$ has no reachable dead state.)

**P3**

**(a) FALSE.** Take $A = \{0^n1^n : n \ge 0\}$ and $B = \{1^n0^n : n \ge 0\}$. Both are non-regular (Lesson 1.5 proves it for $A$; $B$ is the same argument with the symbols swapped). But a string in both must start with `0` and start with `1` unless it is empty, so

$$A \cap B = \{\varepsilon\},$$

a one-element language, recognized by a two-state DFA. Closure under intersection says regular $\cap$ regular is regular; it says nothing whatever about inputs outside the class.

**(b) FALSE.** Take $A = \Sigma^* = \{0,1\}^*$, which is regular (one accepting state with self-loops), and $B = \{0^n1^n : n \ge 0\} \subseteq A$, which is not. Being a subset of a regular language is no constraint at all: *every* language over $\Sigma$ is a subset of $\Sigma^*$, and there are uncountably many of those (Lesson 4.1) but only countably many automata.

**(c) TRUE.** Let $N = (Q, \Sigma, \delta, q_0, F)$ be an NFA with $L(N) = A$ (one exists by Lesson 1.2). Build $N^R$ as follows: keep $Q$, add a fresh start state $s$; reverse every transition, so $q \in \delta^R(p, a)$ whenever $p \in \delta(q, a)$; give $s$ an $\varepsilon$-transition to every state of $F$; and let $\{q_0\}$ be the accept set of $N^R$.

Now the accepting paths correspond exactly. A run of $N$ on $w = w_1\cdots w_n$ is a state sequence $q_0, r_1, \dots, r_n$ with $r_n \in F$ and each step licensed by $\delta$. Traversing that same sequence backwards — starting at $s$, taking the free $\varepsilon$-edge to $r_n$, then walking $r_n, r_{n-1}, \dots, r_1, q_0$ — is a legal run of $N^R$, and it reads $w_n w_{n-1} \cdots w_1 = w^R$, ending in the accept state $q_0$. Every step of this correspondence is reversible, so $N^R$ has an accepting run on $u$ iff $N$ has one on $u^R$. Hence $L(N^R) = A^R$, which is therefore regular. $\blacksquare$

(A pleasant consequence: a DFA for $A^R$ can be exponentially larger than one for $A$ — reverse, then determinize — even though the *languages* are equally simple. Brzozowski's minimization algorithm is "reverse-and-determinize, twice," and it works precisely because of this construction.)

</details>

## Flashback

**From Lesson 1.2 (NFAs & the subset construction):** Let $N$ be the NFA over $\{0,1\}$ with states $\{q_0,q_1,q_2\}$, start $q_0$, $F = \{q_2\}$, and $\delta(q_0,0)=\{q_0\}$, $\delta(q_0,1)=\{q_0,q_1\}$, $\delta(q_1,0)=\delta(q_1,1)=\{q_2\}$, everything else $\varnothing$. Run the subset construction to completion, then trace $1101$ on the resulting DFA and say what $L(N)$ is.

<details>
<summary>Solution</summary>

Start set $\{q_0\}$ (no $\varepsilon$-transitions, so no closures).

| $\delta_D$ | `0` | `1` | accept? |
|---|---|---|---|
| $\{q_0\}$ | $\{q_0\}$ | $\{q_0,q_1\}$ | no |
| $\{q_0,q_1\}$ | $\{q_0,q_2\}$ | $\{q_0,q_1,q_2\}$ | no |
| $\{q_0,q_2\}$ | $\{q_0\}$ | $\{q_0,q_1\}$ | **yes** |
| $\{q_0,q_1,q_2\}$ | $\{q_0,q_2\}$ | $\{q_0,q_1,q_2\}$ | **yes** |

Four reachable sets out of $2^3 = 8$. Trace $1101$:

$$\{q_0\} \xrightarrow{1} \{q_0,q_1\} \xrightarrow{1} \{q_0,q_1,q_2\} \xrightarrow{0} \{q_0,q_2\} \xrightarrow{1} \{q_0,q_1\}. \quad \textbf{Reject}.$$

$L(N) = \{w : |w| \ge 2 \text{ and the second symbol from the end of } w \text{ is } 1\}$. The NFA guesses which `1` is the second-to-last symbol and then counts off exactly one more. Check the trace: $1101$ has `0` as its second-to-last symbol, so rejecting is right.

(This is $L_2$ from Lesson 1.2's Example 2, and the four reachable states match the predicted $2^k = 2^2 = 4$ exactly.)

</details>

## Connections

- **Backward:** the product construction is a DFA whose state set is the [Cartesian product](../../discrete-mathematics/lessons/02-01-sets-and-set-operations.md) of two others, and its correctness proof is the same one-step induction as [1.1](01-01-deterministic-finite-automata.md). Complement uses the fact that a DFA's run is a *function* of the input — the determinism from 1.1 — and concatenation/star ride on the [Thompson gadgets](01-03-regular-expressions-and-kleenes-theorem.md).
- **Forward:** Lesson 1.5 uses closure in its contrapositive form, intersecting a suspicious language with a regular one to expose it; Lesson 2.3 shows context-free languages are *not* closed under intersection or complement, which is the sharpest single difference between the two classes. The decidability of $A \subseteq B$ mentioned above becomes Lesson 3.4's $EQ_{\mathrm{DFA}}$.
- **Sideways:** intersection-of-automata is how a model checker composes a system with a property automaton, and how a network policy compiler merges rules. The exponential cost of NFA complementation is why "match everything except…" is the expensive clause in a pattern language — and in [databases](../../databases/syllabus.md), the same product idea appears as a join of two state machines over a shared input stream.
