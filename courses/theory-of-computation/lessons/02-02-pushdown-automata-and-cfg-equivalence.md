# Automata & Computability · Lesson 2.2: Pushdown automata & CFG equivalence

> ⏱ ~15 min · Module 2: Context-Free Languages & Pushdown Automata · Builds on: [1.2 (NFAs)](01-02-nfa-and-the-subset-construction.md), [2.1 (context-free grammars)](02-01-context-free-grammars-derivations-parse-trees.md) · Unlocks: 2.3 (the CFL pumping lemma)

## Why this matters

Module 1 gave you a machine (the DFA) and a notation (the regex) and proved them equivalent. Lesson 2.1 gave you the notation for the next tier up. This lesson supplies the missing machine, and the equivalence theorem that pairs it with grammars.

The machine is a finite automaton with one addition: **a stack**. That is the entire difference, and it is exactly the right amount of extra power. Unbounded memory, so you can count without limit; last-in-first-out access, so you can match nested structure but cannot compare two independent quantities. Precisely the shape of memory that parsing needs, and precisely the reason a stack cannot handle $a^nb^nc^n$ (Lesson 2.3).

The practical read: **a recursive-descent parser is a pushdown automaton**, with your language's call stack as the stack. When people say a language "can be parsed with a stack machine," this theorem is what they are invoking. And the fine print at the end of the lesson — that *deterministic* PDAs are strictly weaker than nondeterministic ones — is why real parser generators (LR, LL) accept a *proper subset* of the context-free grammars and reject the rest with a conflict report.

## The idea

Take the NFA of Lesson 1.2 — finite states, guessing allowed — and give it a stack of unlimited height. On each move it may read an input symbol (or not), and it may pop the top stack symbol and push a string in its place (or not). It accepts if some run consumes the whole input and lands in an accept state.

Why a stack, of all things? Because it is exactly the memory nested structure wants. To check $0^n1^n$: push a token for every `0`, pop one for every `1`, and check nothing is left over. You never store $n$ anywhere — the stack *is* the count, in unary — and unlike a DFA's state set, it has no fixed bound.

The limitation is just as important as the power. You can only see the top of the stack, and reading it destroys it. So a PDA gets **one** count, spent in one nested pass. It can match `a`s against `b`s. It can then match a *fresh* batch of `a`s against `c`s. What it cannot do is match one batch of `a`s against `b`s and *the same batch* against `c`s, because verifying the first comparison consumed the evidence. That single sentence is the reason $\{a^nb^nc^n\}$ is beyond it.

There is a satisfying way to see why grammars and stacks match: **the stack holds the part of a leftmost derivation you have not finished yet.** Start with $S$ on the stack. Whenever a variable is on top, replace it by the right-hand side of one of its rules (guessing which). Whenever a terminal is on top, match it against the next input symbol and consume both. The stack is a to-do list, and it is LIFO precisely because a derivation expands leftmost-first.

## The formal version

A **pushdown automaton** is a 6-tuple $P = (Q, \Sigma, \Gamma, \delta, q_0, F)$ where $Q, \Sigma, F$ are as for an NFA, $\Gamma$ is a finite **stack alphabet**, $q_0$ is the start state, and

$$\delta : Q \times (\Sigma \cup \{\varepsilon\}) \times (\Gamma \cup \{\varepsilon\}) \longrightarrow \mathcal{P}\big(Q \times \Gamma^*\big).$$

In words: given a state, optionally an input symbol, and optionally the top stack symbol, the machine may move to any of a set of (new state, string to push) pairs. An $\varepsilon$ in the second slot means "move without reading"; an $\varepsilon$ in the third means "move without popping." PDAs are **nondeterministic by definition** — that is not an optional extra here, as the last part of this section explains.

A **configuration** (or instantaneous description) is a triple $(q, u, \gamma)$: current state, input not yet read, current stack with the top written leftmost. Write $(q, au, X\gamma) \vdash (q', u, \beta\gamma)$ when $(q', \beta) \in \delta(q, a, X)$. $P$ **accepts** $w$ if

$$(q_0,\ w,\ Z_0) \ \vdash^*\ (q_f,\ \varepsilon,\ \gamma) \quad \text{for some } q_f \in F \text{ and some } \gamma,$$

where $Z_0$ is the initial stack symbol. This is **acceptance by final state**; the alternative convention, **acceptance by empty stack**, recognizes the same class of languages (simulate one with the other by pushing a private bottom marker), and it does not matter which you use as long as you say which.

**Theorem (CFG $\equiv$ PDA).** A language is context-free iff some PDA recognizes it.

*($\Rightarrow$) Grammar to machine.* Given $G$, build a PDA with three states and the "to-do list" idea above. Push $S$; then loop: if a variable $A$ is on top, pop it and push the right-hand side of some rule $A \to \alpha$ (leftmost symbol of $\alpha$ ending on top); if a terminal is on top, pop it and match it against the next input symbol; accept when the stack is empty and the input is exhausted. A run of this machine is a leftmost derivation, read off the stack. The construction needs only **three states**, all the work being in the stack — which tells you where a PDA's power actually lives.

*($\Leftarrow$) Machine to grammar.* Harder and only sketched here. Normalize the PDA so every move either pushes one symbol or pops one, then introduce a variable $A_{pq}$ meaning "the strings that take the machine from state $p$ with some symbol $X$ on top to state $q$ with that $X$ just popped, net stack change zero." Rules for $A_{pq}$ decompose such a stretch into either one push/pop pair wrapping a shorter stretch, or two shorter stretches in a row. Full details are in Sipser §2.2. $\blacksquare$

**Determinism is a real restriction.** A PDA is deterministic (a **DPDA**) if from every configuration at most one move is available, counting $\varepsilon$-moves as competing with symbol-moves. Unlike the NFA/DFA case,

$$\textbf{DPDA languages} \subsetneq \textbf{CFLs},$$

strictly. The witness is $\{ww^R : w \in \{0,1\}^*\}$ — even-length palindromes. A nondeterministic PDA guesses the midpoint (Example 2); a deterministic one would have to *know* where the middle is with no marker to tell it, and no amount of state can supply that. The class of DPDA languages also has the property CFLs lack — it is closed under complement — which is another way to see the classes differ.

## Picture

![Nine successive configurations of a pushdown automaton reading 000111. Each column shows the state, a stack drawn as boxes with the top at the top, and the remaining input. The stack grows to three A symbols over a dollar-sign bottom marker while the zeros are read, then shrinks back to just the dollar sign as the ones are read.](assets/02-02-fig1.svg)

Read the middle row as a plot: the stack height goes up by one per `0` and down by one per `1`. The whole computation is "does this profile return exactly to the floor at exactly the moment the input ends," and the $\$$ bottom marker is how the machine detects the floor — a PDA cannot test for an empty stack directly, so you push a private symbol at the start and test for *that*.

The $\varepsilon$-move in the middle, from $q_0$ to $q_1$, is the machine's one guess: "the zeros are over now." It is available at *every* step, so this PDA is nondeterministic — but only mildly. Every wrong guess dies immediately, because $q_1$ has no transition on `0`.

## Worked examples

**Example 1 (mechanical): a PDA for $\{0^n1^n : n \ge 0\}$.** States $Q = \{q_0, q_1, q_2\}$, $\Sigma = \{0,1\}$, $\Gamma = \{A, \$\}$, start $q_0$ with $\$$ on the stack, $F = \{q_2\}$, and

$$\delta(q_0, 0, \varepsilon) = \{(q_0, A)\}, \quad \delta(q_0, \varepsilon, \varepsilon) = \{(q_1, \varepsilon)\}, \quad \delta(q_1, 1, A) = \{(q_1, \varepsilon)\}, \quad \delta(q_1, \varepsilon, \$) = \{(q_2, \$)\}.$$

In words: in $q_0$ push an $A$ per `0`; at some point guess the switch to $q_1$; in $q_1$ pop an $A$ per `1`; when $\$$ surfaces, accept. The run on $000111$ is the Picture, written as configurations:

$$(q_0, 000111, \$) \vdash (q_0, 00111, A\$) \vdash (q_0, 0111, AA\$) \vdash (q_0, 111, AAA\$)$$
$$\vdash (q_1, 111, AAA\$) \vdash (q_1, 11, AA\$) \vdash (q_1, 1, A\$) \vdash (q_1, \varepsilon, \$) \vdash (q_2, \varepsilon, \$). \quad \textbf{Accept.}$$

Now check the three ways it can fail, which is where the design earns its keep.

- **Too many `1`s** ($00111$): two `0`s push two $A$s, the first two `1`s pop them, and the third `1` finds $\$$ on top — for which $\delta(q_1, 1, \$)$ is undefined. The thread dies.
- **Too many `0`s** ($001$): three $A$s pushed but only one popped, so $\$$ never reaches the top and the $\varepsilon$-move to $q_2$ never fires.
- **Wrong order** ($0101$): a thread that has switched to $q_1$ has no transition on `0`, and a thread still in $q_0$ has none on `1`. Every thread dies whatever it guesses. (Verified exhaustively: the machine accepts exactly $\{0^n1^n\}$ among all $511$ strings over $\{0,1\}$ of length $\le 8$.)

**Example 2 (why you'd care): guessing the middle.** Let $L = \{ww^R : w \in \{a,b\}^*\}$, the even-length palindromes. The PDA:

$$\delta(p, a, \varepsilon) = \{(p, A)\}, \ \delta(p, b, \varepsilon) = \{(p, B)\}, \quad \delta(p, \varepsilon, \varepsilon) = \{(m, \varepsilon)\},$$
$$\delta(m, a, A) = \{(m, \varepsilon)\}, \ \delta(m, b, B) = \{(m, \varepsilon)\}, \quad \delta(m, \varepsilon, \$) = \{(f, \$)\}.$$

Push the first half; guess the midpoint; then pop, requiring each input symbol to match the symbol on top. Since the first half was pushed in order, the stack hands it back **reversed** — which is exactly what a palindrome needs. (Verified: accepts exactly the even-length palindromes among all strings over $\{a,b\}$ of length $\le 9$.)

Here the nondeterminism is doing genuine work. On input $abba$ the machine spawns a thread for each of the five possible midpoints; only the one that switches after $ab$ survives. **No deterministic PDA recognizes $L$** — and the intuition is worth holding onto: a deterministic machine must commit to "the middle is here" before it has seen any evidence that it is, and it cannot revisit the decision, because reading the second half destroys the stack it would need to try again.

Contrast $L' = \{wcw^R : w \in \{a,b\}^*\}$, with an explicit centre marker `c`. Now the same machine is deterministic — replace the guessed $\varepsilon$-move by $\delta(p, c, \varepsilon) = \{(m,\varepsilon)\}$ — because the input announces the midpoint.

That contrast is the whole practical story of parsing. Real parser generators build deterministic machines, so they need the grammar to announce its structure as it goes, with enough lookahead. When it does not, you get a shift/reduce conflict — the tool telling you, in production terms, that it has hit the DPDA boundary. The usual fix is not a better tool but a rewritten grammar, exactly as in Lesson 2.1.

## Watch out

- **You might think** a PDA can check whether its stack is empty — **but actually** it cannot: the transition function only ever sees the top symbol, and "no symbol" is not a symbol. The standard workaround is the one in Example 1 — push a private bottom marker $\$$ at the start and test for *that*. Forgetting it is how a machine ends up accepting strings with junk left over (P3 is the same family of bug).
- **You might think** nondeterminism is a convenience here as it was for NFAs — **but actually** it is a strict increase in power for PDAs: $\{ww^R\}$ separates DPDAs from PDAs. The subset construction has no analogue, because "the set of stacks I might be in" is not finite information. This is the first time in the course that a modelling choice actually changes what is computable.
- **You might think** two stacks would be a modest upgrade — **but actually** a machine with **two** stacks can simulate a Turing machine (one stack for the tape to the left of the head, one for the right), so it computes everything computable. The jump from one stack to two is the jump from Module 2 to Module 3; there is nothing in between.

## One-liner

> A PDA is a finite automaton with one stack, which is exactly enough memory to match nested structure and exactly not enough to compare two counts at once — and the stack is best read as the unfinished part of a leftmost derivation.

## Problems

**P1 (🟢)** The following PDA has one working state $q$, accept state $f$, $\Gamma = \{A, B, \$\}$, and initial stack $\$$:

$$\delta(q,a,\$) = \{(q, A\$)\},\quad \delta(q,a,A) = \{(q, AA)\},\quad \delta(q,a,B) = \{(q, \varepsilon)\},$$
$$\delta(q,b,\$) = \{(q, B\$)\},\quad \delta(q,b,B) = \{(q, BB)\},\quad \delta(q,b,A) = \{(q, \varepsilon)\},\quad \delta(q,\varepsilon,\$) = \{(f, \$)\}.$$

(a) Write the full configuration sequence on $abba$ and on $aabbab$, and say whether each is accepted. (b) Describe $L(P)$ in one sentence. (c) What invariant does the stack maintain? State it in one line.

**P2 (🟡)** Design a PDA for $L = \{\, a^i b^j c^k : i = j + k,\ j, k \ge 0 \,\}$ — the language of [Lesson 2.1's P2(b)](02-01-context-free-grammars-derivations-parse-trees.md). Give $Q$, $\Gamma$, $\delta$ and $F$, say in one line what each state is for, and trace $aaabbc$.

**P3 (🔴)** A colleague proposes this one-state machine for the same $L$, arguing that "one state is enough — the stack does all the work":

$$\delta(q,a,\varepsilon) = \{(q, A)\},\quad \delta(q,b,A) = \{(q,\varepsilon)\},\quad \delta(q,c,A) = \{(q,\varepsilon)\},\quad \delta(q,\varepsilon,\$) = \{(f,\$)\},$$

with initial stack $\$$ and $F = \{f\}$.

(a) Find the **shortest** string this machine accepts that is not in $L$, and give its accepting configuration sequence. (b) Name in one sentence the property of $L$ the machine fails to enforce, and say why no choice of stack alphabet can fix it while keeping one working state. (c) State the general design principle.

<details>
<summary>Solutions</summary>

**P1** (a) On $abba$:

$$(q, abba, \$) \vdash (q, bba, A\$) \vdash (q, ba, \$) \vdash (q, a, B\$) \vdash (q, \varepsilon, \$) \vdash (f, \varepsilon, \$). \quad \textbf{Accept.}$$

(Step 2 reads `b` with $A$ on top, so it *cancels*: pop the $A$, push nothing.)

On $aabbab$:

$$(q, aabbab, \$) \vdash (q, abbab, A\$) \vdash (q, bbab, AA\$) \vdash (q, bab, A\$) \vdash (q, ab, \$) \vdash (q, b, A\$) \vdash (q, \varepsilon, \$) \vdash (f, \varepsilon, \$). \quad \textbf{Accept.}$$

(b) $L(P) = \{\, w \in \{a,b\}^* : w \text{ has equally many } a\text{s and } b\text{s} \,\}$ — the language [Lesson 1.5's Example 2](01-05-pumping-lemma-and-non-regularity.md) proved is not regular. Note it does **not** require the `a`s to come first; the two traces above are both scrambled and both accepted. (Verified exhaustively on every string over $\{a,b\}$ of length $\le 9$.)

(c) **Invariant:** after reading a prefix $u$, the stack is $A^{\,d}\$$ if $u$ has $d > 0$ more `a`s than `b`s, $B^{\,-d}\$$ if it has $-d > 0$ more `b`s than `a`s, and just $\$$ if the counts are equal. In particular the stack never holds both $A$s and $B$s — each new symbol either extends the current surplus or cancels one unit of the opposite one. The stack is a **signed counter in unary**, with the letter recording the sign.

**P2** Three working states, one per block of the input, plus an accept state.

$$Q = \{q_A, q_B, q_C, f\}, \qquad \Gamma = \{A, \$\}, \qquad F = \{f\}, \qquad \text{initial stack } \$.$$

- $q_A$ — reading the `a`s: $\delta(q_A, a, \varepsilon) = \{(q_A, A)\}$, one $A$ pushed per `a`.
- $q_B$ — reading the `b`s: $\delta(q_B, b, A) = \{(q_B, \varepsilon)\}$, one $A$ popped per `b`.
- $q_C$ — reading the `c`s: $\delta(q_C, c, A) = \{(q_C, \varepsilon)\}$, one $A$ popped per `c`.
- Guessed block boundaries: $\delta(q_A, \varepsilon, \varepsilon) = \{(q_B, \varepsilon)\}$ and $\delta(q_B, \varepsilon, \varepsilon) = \{(q_C, \varepsilon)\}$.
- Accept: $\delta(q_C, \varepsilon, \$) = \{(f, \$)\}$.

The states enforce the **order** $a^*b^*c^*$ — you can never return to $q_A$ — and the stack enforces the **count** $i = j+k$, since every `a` pushes one $A$ and every `b` and every `c` pops one, so acceptance ($\$$ on top) means the pushes and pops balanced. Trace $aaabbc$:

$$(q_A, aaabbc, \$) \vdash (q_A, aabbc, A\$) \vdash (q_A, abbc, AA\$) \vdash (q_A, bbc, AAA\$) \vdash (q_B, bbc, AAA\$)$$
$$\vdash (q_B, bc, AA\$) \vdash (q_B, c, A\$) \vdash (q_C, c, A\$) \vdash (q_C, \varepsilon, \$) \vdash (f, \varepsilon, \$). \quad \textbf{Accept.}$$

(Verified exhaustively against the definition of $L$ on every string over $\{a,b,c\}$ of length $\le 7$.)

**P3** (a) The shortest wrongly-accepted string is $\mathbf{aacb}$ (length 4). It is not in $L$ — $L$ requires the form $a^*b^*c^*$ and here a `b` follows a `c`. But:

$$(q, aacb, \$) \vdash (q, acb, A\$) \vdash (q, cb, AA\$) \vdash (q, b, A\$) \vdash (q, \varepsilon, \$) \vdash (f, \varepsilon, \$). \quad \textbf{Accept.}$$

Two pushes, two pops, stack back to $\$$ — the arithmetic works out and nothing ever checked the order. (Verified: `aacb` is the shortest of the machine's misclassifications; the other length-4 ones are `abab`, `abac`, `acab`, `acac`.)

(b) The machine enforces the **count** $i = j+k$ but not the **order** $a^*b^*c^*$. One working state cannot fix it for any stack alphabet, because the input alphabet is only read *against the top of the stack*, and the stack records how many symbols are outstanding, not which block the machine is in. To reject `aacb` you must remember "the `c`s have started, so `b`s are now illegal" — a fact that is bounded (three possibilities) and *permanent*, so it belongs in the finite control. Trying to store it on the stack fails because the stack's contents are being consumed by the counting job at the same time.

(c) **Put the bounded, order-like facts in the states and the unbounded, counting facts on the stack.** A PDA's finite control and its stack are for different jobs, and merging them loses one of them. (Compare Lesson 1.1's "a state is a summary of the prefix": that is still true — the stack just adds the one summary a finite state cannot hold.)

</details>

## Flashback

**From Lesson 1.5 (The pumping lemma):** Prove that $L = \{\, a^n b^{2n} : n \ge 0 \,\}$ is not regular. State each move of the pumping game explicitly, and say why your choice of $s$ leaves the adversary no useful freedom.

<details>
<summary>Solution</summary>

Suppose $L$ is regular with pumping length $p$.

*Move 2 (yours).* Choose $s = a^p b^{2p}$. It is in $L$ (taking $n = p$) and $|s| = 3p \ge p$. ✓

*Move 3 (adversary's).* They split $s = xyz$ with $|y| > 0$ and $|xy| \le p$. The **first $p$ symbols of $s$ are all `a`s**, so $|xy| \le p$ confines $y$ entirely to the `a`-block: $y = a^k$ with $1 \le k \le p$. That is the adversary's only freedom, and it does not help them — every choice of $k$ is equally fatal.

*Move 4 (yours).* Take $i = 2$:

$$xy^2z = a^{p+k}\,b^{2p}.$$

For this to be in $L$ we would need $2(p+k) = 2p$, i.e. $k = 0$ — contradicting $|y| > 0$. So $xy^2z \notin L$, and $L$ is not regular. $\blacksquare$

*Why the string was chosen that way.* Condition (iii), $|xy| \le p$, is the lever: by making the first $p$ symbols homogeneous you force the pumped chunk into a single block, so pumping changes exactly one of the two counts and breaks the ratio. Had you chosen $s = (ab b)^p$ instead, the adversary could pick a $y$ spanning a whole $abb$ group, and pumping it would keep the $1 : 2$ ratio — the pump would succeed and the proof would collapse. **The choice of $s$ is the entire proof.**

(Alternatively, and faster: $L$'s counts are related by a fixed ratio, so $a^i$ and $a^j$ for $i \ne j$ are distinguished by the extension $b^{2i}$ — infinitely many pairwise-distinguishable strings, so by Myhill–Nerode $L$ is not regular.)

</details>

## Connections

- **Backward:** a PDA is the [NFA](01-02-nfa-and-the-subset-construction.md) of Lesson 1.2 plus one stack, and its acceptance condition is the same existential "some run works." The grammar-to-PDA construction turns the leftmost derivations of [Lesson 2.1](02-01-context-free-grammars-derivations-parse-trees.md) into stack contents.
- **Forward:** Lesson 2.3 proves what one stack cannot do, using the parse tree rather than the machine; Lesson 3.1's Turing machine is what you get by replacing the stack with a read-write tape, and the two-stack remark above is the shortest route from here to there.
- **Sideways:** this is recursive-descent parsing, with the program's own call stack playing the role of $\Gamma^*$; the DPDA/PDA gap is why `yacc`/`bison` report shift-reduce conflicts on grammars that are perfectly context-free. In [operating-systems](../../operating-systems/syllabus.md) and [computer-architecture](../../computer-architecture/syllabus.md), the same LIFO discipline is the call stack that makes recursion possible at all — and stack overflow is what the "unbounded" in this lesson quietly assumes away.
