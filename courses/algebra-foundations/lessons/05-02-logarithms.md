# Algebra I & II · Lesson 5.2: Logarithms

> ⏱ ~15 min · Module 5: Exponentials & logarithms · Builds on: 5.1 (exponential functions) · Unlocks: precalculus (next course)

## Why this matters

Exponentials answer "what do I *have* after $t$ steps of growth?" Logarithms answer the flipped, and often more urgent, question: "*how many* steps until I hit my target?" How long until an investment doubles? Until a drug decays to a safe level? Until a population reaches capacity? Every one of those is an equation with the unknown stuck in the exponent — and the only tool that pulls it back down is the logarithm. This is also where $\ln$ enters your life permanently: it will run through every growth model in `calc-refresher` and the entropy formulas in `information-theory`.

## The idea

A logarithm is nothing new — it's exponentiation asked backwards. If exponentiation takes a base and an exponent and hands you a result, the logarithm takes the base and the result and hands you back the exponent.

Read this out loud until it's a reflex: **$\log_b c$ is the exponent that turns $b$ into $c$.** That's the whole definition. $\log_2 8 = 3$ because $2$ raised to the $3$ gives $8$. $\log_{10} 1000 = 3$ because you need three factors of ten. $\log_5 5 = 1$, $\log_5 1 = 0$ (any base to the zero is one). You already *know* logs — you just computed them by asking "$b$ to the what?" without a name for the question.

Because the log undoes the exponent, whatever weird laws exponents obey, logs obey a mirror-image version. Multiplying powers *adds* exponents — so logs turn multiplication into addition. That's the superpower: logs demote every operation one rung. Multiplication becomes addition, powers become multiplication. Hard things get easier.

## The formal version

**Definition.** For a base $b > 0$, $b \neq 1$, and $c > 0$:

$$x = \log_b c \quad\Longleftrightarrow\quad b^x = c.$$

In words: the two equations say the same thing two ways — $\log_b c$ *is* the exponent $x$. The restriction $c > 0$ matters: a positive base raised to any real power is always positive, so you can never take the log of zero or a negative number.

Two logs get their own names because they show up everywhere:

- **Common log:** $\log c = \log_{10} c$ (base $10$ — powers of ten, pH, decibels).
- **Natural log:** $\ln c = \log_e c$ (base $e \approx 2.718$, the growth constant from Lesson 5.1).

**The log laws** (each mirrors an exponent law), for $b > 0$, $b\neq 1$, and positive $M, N$:

$$\log_b(MN) = \log_b M + \log_b N \qquad \text{(product)}$$
$$\log_b\!\left(\tfrac{M}{N}\right) = \log_b M - \log_b N \qquad \text{(quotient)}$$
$$\log_b(M^p) = p\,\log_b M \qquad \text{(power)}$$

In words: a log of a product is the sum of the logs; a log of a quotient is the difference; and an exponent inside a log comes out front as a multiplier. That last one is the workhorse for solving equations — it's how the unknown exponent escapes.

**Change of base.** Your calculator only has $\log$ and $\ln$, but any base is a rescaling of any other:

$$\log_b c = \frac{\ln c}{\ln b} = \frac{\log c}{\log b}.$$

In words: to get a log in base $b$, take the natural (or common) log of the number and divide by the natural log of the base.

## Concrete instance

**Converting between forms.** Rewrite $3^4 = 81$ as a logarithm. Read off the pieces: base $b = 3$, exponent $x = 4$, result $c = 81$. The definition $b^x = c \Leftrightarrow x = \log_b c$ gives

$$3^4 = 81 \quad\Longleftrightarrow\quad \log_3 81 = 4.$$

The exponent $4$ is exactly what the log reports. Going the other way, $\log_2 32 = 5$ is just $2^5 = 32$ in disguise.

**Solving $b^x = c$ with the log laws.** How many years for money at 5% annual growth to double? Solve $1.05^t = 2$. The unknown $t$ is trapped in the exponent, so take $\ln$ of both sides and use the power law to spring it loose:

$$\ln\!\left(1.05^t\right) = \ln 2 \;\Longrightarrow\; t\,\ln 1.05 = \ln 2 \;\Longrightarrow\; t = \frac{\ln 2}{\ln 1.05} = \frac{0.6931}{0.04879} \approx 14.2.$$

About **14.2 years**. Notice the move: the power law $\log_b(M^p) = p\log_b M$ turned the exponent $t$ into an ordinary coefficient, and then it's just linear algebra. This is the entire method for every doubling-time or half-life problem.

## Worked examples

**Example 1 (mechanical — evaluate and expand).** Compute $\log_2 8 + \log_2 4$ two ways.

Directly: $\log_2 8 = 3$ and $\log_2 4 = 2$, so the sum is $5$. Via the product law: $\log_2 8 + \log_2 4 = \log_2(8 \cdot 4) = \log_2 32 = 5$. They agree — that's the product law working. Now *expand* a compound log the way you'd need to for calculus:

$$\log_b\!\frac{x^3 y}{z} = \log_b(x^3 y) - \log_b z = 3\log_b x + \log_b y - \log_b z.$$

Every factor becomes a separate term; the exponent on $x$ steps out front. This "break it into a sum of simple logs" move is the setup for logarithmic differentiation in `calc-refresher`.

**Example 2 (why you'd care — half-life).** A radioactive sample decays by 12% per year, so the amount left is $A(t) = A_0(0.88)^t$. When has it dropped to *half*? Set $A(t) = \tfrac{1}{2}A_0$:

$$A_0(0.88)^t = \tfrac{1}{2}A_0 \;\Longrightarrow\; (0.88)^t = \tfrac{1}{2}.$$

The $A_0$ cancels — the half-life doesn't depend on how much you started with. Take logs and drop the exponent:

$$t\,\ln 0.88 = \ln \tfrac{1}{2} \;\Longrightarrow\; t = \frac{\ln 0.5}{\ln 0.88} = \frac{-0.6931}{-0.1278} \approx 5.4 \text{ years}.$$

Both logs are negative (decay shrinks a number below $1$), and the negatives cancel to give a sensible positive time. If you ever get a negative half-life, you divided the wrong way.

## Watch out

- You might think $\log_b(M + N) = \log_b M + \log_b N$. **It doesn't** — there is no law for the log of a *sum*. The product law turns a log of a *product* into a sum of logs; a genuine sum inside stays stuck. $\log(2+3) = \log 5 \neq \log 2 + \log 3$.
- You might think $\dfrac{\ln A}{\ln B} = \ln\!\dfrac{A}{B}$. **No** — that's the change-of-base ratio, not the quotient law. The quotient law says $\ln\frac{A}{B} = \ln A - \ln B$ (a *difference*). A ratio of two separate logs is a different animal entirely and never simplifies to a single log.
- You might think you can take the log of anything. **Only positives.** $\log_b 0$ and $\log_b(\text{negative})$ are undefined, because no real exponent sends a positive base to zero or below. When you solve an equation, discard any candidate that would force a log of a non-positive number.

## One-liner

> A logarithm is the exponent in hiding: $\log_b c$ answers "$b$ to the what gives $c$?" — and the power law is the crowbar that pries an unknown out of an exponent.

## Problems

**P1 (🟢)** Without a calculator, evaluate: (a) $\log_3 27$, (b) $\log_{10} 0.01$, (c) $\log_7 1$, (d) $\ln e^4$.

**P2 (🟡)** Solve $2^x = 50$ for $x$ using logarithms, leaving your answer as a ratio of logs and then as a decimal (to two places).

**P3 (🔴, optional)** A bacterial colony triples every hour: $N(t) = N_0 \cdot 3^{t}$, with $t$ in hours. Using logarithms, find how long until the colony grows to **100 times** its starting size, and explain why the answer doesn't depend on $N_0$. This is the same "solve for the exponent" reasoning the boss problem uses for doubling money.

<details>
<summary>Solutions</summary>

**P1** Ask "$b$ to the what?" each time.
(a) $3^3 = 27$, so $\log_3 27 = 3$.
(b) $10^{-2} = 0.01$, so $\log_{10} 0.01 = -2$.
(c) Any base to the zero is $1$, so $\log_7 1 = 0$.
(d) $\ln e^4 = 4\ln e = 4 \cdot 1 = 4$ (the power law, plus $\ln e = 1$). $\ln$ and $e^{(\cdot)}$ undo each other, which is the same statement.

**P2** Take $\ln$ (or $\log$) of both sides and use the power law to free $x$:
$$\ln(2^x) = \ln 50 \;\Longrightarrow\; x\ln 2 = \ln 50 \;\Longrightarrow\; x = \frac{\ln 50}{\ln 2} = \frac{3.912}{0.6931} \approx \boxed{5.64}.$$
Sanity check: $2^5 = 32$ and $2^6 = 64$, so $x$ between $5$ and $6$ is right.

**P3** Set $N(t) = 100\,N_0$:
$$N_0 \cdot 3^t = 100\,N_0 \;\Longrightarrow\; 3^t = 100.$$
The $N_0$ cancels immediately — the *multiplicative factor* of growth ($100\times$) is what sets the time, not the starting count. Then
$$t\ln 3 = \ln 100 \;\Longrightarrow\; t = \frac{\ln 100}{\ln 3} = \frac{4.605}{1.099} \approx 4.19 \text{ hours}.$$
Because dividing both sides by $N_0$ erases it before any log is taken, the "time to multiply by 100" is a property of the *growth rate alone* — exactly why doubling time and half-life are constants of the process, independent of scale.

</details>

## Flashback

**From Lesson 5.1 (Exponential functions):** A town's population is modeled by $P(t) = 8{,}000\,(1.03)^t$, where $t$ is years since 2020. (a) What is the population in 2020? (b) By what percent does it grow each year? (c) Estimate the population in 2025 (you may leave it as $8{,}000 \times 1.03^5$ and then evaluate).

<details>
<summary>Solution</summary>

(a) At $t = 0$: $P(0) = 8{,}000\,(1.03)^0 = 8{,}000$. The coefficient in front is always the initial amount.
(b) The base is $1.03 = 1 + 0.03$, so the town grows **3% per year** — the base is (one + the growth rate).
(c) 2025 is $t = 5$: $P(5) = 8{,}000\,(1.03)^5 = 8{,}000 \times 1.15927 \approx \boxed{9{,}274}$ people. Reading an exponential model is just plugging in $t$; the log machinery from this lesson is only needed when $t$ itself is the unknown.

</details>

## Connections

- **Backward:** This is the mirror of Lesson 5.1 — every exponential model $b^x = c$ from there becomes solvable *for the exponent* here. The log laws are the exponent laws (Lesson 3.1) reflected: products↔sums, powers↔multipliers.
- **Forward (precalculus):** `precalculus` builds the full graph of $y = \log_b x$ — its domain, its vertical asymptote at $x=0$, and how it reflects the exponential across $y = x$ — and composes logs with other functions. This lesson is the last stop in Algebra; the inverse-function machinery gets formalized next.
- **Forward (calc-refresher):** $\ln$ becomes unavoidable. Its derivative is the clean $\frac{1}{x}$, and **logarithmic differentiation** — expand a messy product/quotient with the log laws (exactly Example 1's move), *then* differentiate — turns brutal product-rule problems into easy ones. Continuous growth $e^{rt}$ and its doubling time $\frac{\ln 2}{r}$ are the boss problem's idea taken to the limit.
- **Sideways (information theory):** entropy $H = -\sum p_i \log_2 p_i$ measures information in *bits* — a base-2 log counting how many yes/no questions pin down an outcome. Logs are the native language of "how much surprise," and `information-theory` is built on them.
- **Sideways (science):** log scales tame quantities that span orders of magnitude — pH $= -\log_{10}[\text{H}^+]$ in chemistry, decibels $= 10\log_{10}(P/P_0)$ in acoustics, the Richter scale for earthquakes. Each "one unit up" means "ten times bigger," which is the change-of-base intuition made physical.
