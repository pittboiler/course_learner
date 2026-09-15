# Computational Biology · Lesson 1.7: Alignment statistics & E-values

> ⏱ ~15 min · Module 1: Sequence alignment & database search · Builds on: [1.2](01-02-substitution-matrices-log-odds.md) (log-odds and negative expected score), [1.4](01-04-smith-waterman-local-alignment.md) (local scores grow like log n), [1.6](01-06-blast-seeded-heuristic-search.md) (BLAST) · Unlocks: [2.1](02-01-multiple-sequence-alignment.md) (choosing sequences to align), [5.2](05-02-differential-expression-multiple-testing.md) (multiple testing)

## Why this matters

A BLAST hit comes with a raw score, a bit score and an E-value, and only one of them answers the question you care about: *would a hit this good turn up by chance?* A raw score of 100 could be decisive or meaningless depending on the matrix, the query length and the database size.

The answer comes from a beautiful piece of probability theory. Karlin and Altschul (1990) showed that the best local alignment score between unrelated sequences follows an **extreme-value distribution** with two parameters you can compute from the scoring system. That result tells you how many chance hits to expect, why significance weakens as databases grow, and — a bonus — what identity level your scoring scheme is secretly tuned to detect.

## The idea

Local alignment of unrelated sequences ([1.4](01-04-smith-waterman-local-alignment.md)) is a maximum over an enormous number of candidate segments. Most drift negative and reset. Occasionally a run of lucky matches climbs.

The probability that one particular random segment climbs to score $S$ falls **exponentially** in $S$. For example, reaching 10 needs roughly ten more lucky steps than unlucky ones. The number of places such a segment could start is proportional to $m \times n$. So the expected number of chance segments scoring at least $S$ is

$$(\text{start positions}) \times (\text{tiny chance each}) = K\,m\,n\,e^{-\lambda S}.$$

That's the **E-value**: how many hits at least this good you'd expect from a search this big if nothing were related. E = 0.01 means one chance hit per hundred such searches. E = 5 means five junk hits per search, and yours is probably one of them.

The rate $\lambda$ sets how fast the chance of a high score dies off. It depends only on the matrix and the background frequencies, and it turns out to be exactly the scale that makes the matrix a log-odds matrix ([1.2](01-02-substitution-matrices-log-odds.md)).

## The formal version

**The scale $\lambda$.** For a scoring matrix $s$ with background frequencies $p_a$, negative expected score and at least one positive entry, $\lambda$ is the unique positive solution of

$$\sum_{a,b} p_a\,p_b\,e^{\lambda\,s(a,b)} = 1.$$

This is the [Karlin–Altschul lambda](../reference.md#karlin-altschul-lambda). *In words: $\lambda$ is the exponent that turns the scores into probabilities summing to one.* Those probabilities, $q_{ab} = p_a p_b e^{\lambda s(a,b)}$, are the **implied target frequencies**: the matrix is the optimal log-odds matrix for detecting alignments with pair frequencies $q_{ab}$.

**E-value** (ungapped local alignment of lengths $m$ and $n$). The expected number of distinct segment pairs scoring at least $S$ by chance is

$$E(S) = K\,m\,n\,e^{-\lambda S},$$

and the chance of at least one is $P = 1 - e^{-E}$. This is the [E-value](../reference.md#e-value). *In words: expected count of chance hits, not a probability — though $P \approx E$ when $E$ is small.* $K$ is a second constant, below 1, that corrects for high-scoring segments overlapping. It's computed alongside $\lambda$. The best chance score therefore concentrates near $\ln(Kmn)/\lambda$, which explains [1.4](01-04-smith-waterman-local-alignment.md)'s logarithmic growth.

**Bit score.** Normalize out the scoring system:

$$S' = \frac{\lambda S - \ln K}{\ln 2}, \qquad E = m\,n\,2^{-S'}.$$

This is the [bit score](../reference.md#bit-score). *In words: a bit score says how surprising a hit is in units that mean the same for every matrix. Each extra bit halves the E-value.*

**Gapped alignments.** No closed form exists, but simulations show the same form holds with fitted constants. For BLOSUM62 with gap costs 11 + $L$ (NCBI convention, [1.5](01-05-affine-gaps-gotoh.md)), BLAST uses $\lambda = 0.267$ and $K = 0.041$. The ungapped values are $\lambda = 0.3176$ and $K = 0.134$. BLAST also shortens $m$ and $n$ to *effective lengths*, since a high-scoring alignment can't start within a few dozen residues of a sequence end. That edge correction matters for short queries.

**What to trust.** Common rules of thumb for protein searches: $E < 10^{-3}$ is usually a homolog; $10^{-3} < E < 1$ is the twilight zone that needs corroboration; $E > 1$ is noise.

## Picture

![E-value on a log scale from ten to the minus ten up to ten to the four, plotted against bit score from 20 to 80, for a 300-residue query and three database sizes. Three parallel straight lines fall from upper left to lower right, for ten million, one billion and one hundred billion residues. A dashed line at E equals 0.001 meets them at bit scores 41.4, 48.1 and 54.7.](assets/01-07-fig1.svg)

On a log scale, E falls in a straight line with bit score — one halving per bit. The three lines are parallel because the database size $n$ only shifts the intercept. Read across at $E = 0.001$: a hit needs 41 bits against ten million residues, 48 against a billion, 55 against a hundred billion. **Every 100-fold growth in the database costs about 6.6 bits of significance.** A hit that was convincing in 2005 can be borderline against today's databases, with no change to the alignment at all.

## Worked examples

**Example 1 (mechanical): $\lambda$ for match $+1$ / mismatch $-1$ on DNA.** With uniform bases, a random column matches with probability $\tfrac14$ and mismatches with probability $\tfrac34$. The equation is

$$\tfrac14 e^{\lambda} + \tfrac34 e^{-\lambda} = 1.$$

Let $u = e^{\lambda}$ and multiply by $4u$: $u^2 - 4u + 3 = 0$, so $(u-1)(u-3) = 0$. The root $u = 1$ is $\lambda = 0$, which is always a solution and never the one we want. So $u = 3$ and

$$\lambda = \ln 3 \approx 1.099.$$

*Implied target frequencies.* $q_{\text{match}} = \tfrac14 e^{\lambda} = \tfrac34$ and $q_{\text{mismatch}} = \tfrac34 e^{-\lambda} = \tfrac14$. So **$\pm 1$ scoring is the optimal log-odds scheme for finding DNA alignments that are 75 percent identical.** You chose a target identity when you chose the scores, whether or not you meant to.

A check against simulation: for two random sequences of length $n$, the best ungapped local score should grow by $\ln(4)/\lambda = \ln 4/\ln 3 \approx 1.26$ each time $n$ doubles, since $mn$ quadruples. Forty trials at $n = 100, 200, 400, 800$ averaged 7.5, 8.5, 9.6 and 11.3: about 1.28 per doubling.

**Example 2 (why you'd care): is this hit real?** A 300-residue query is searched with BLOSUM62 and gaps $11 + L$ against a database of $5\times10^8$ residues. The best hit has raw score 100.

*Bit score:*

$$S' = \frac{0.267 \times 100 - \ln 0.041}{\ln 2} = \frac{26.70 + 3.19}{0.693} = 43.1 \text{ bits}.$$

*E-value:*

$$E = 300 \times 5\times10^8 \times 2^{-43.1} = 1.5\times10^{11} \times 1.04\times10^{-13} \approx 0.016.$$

About one chance hit this good per 60 searches; $P = 1 - e^{-0.016} \approx 0.016$. Suggestive, but short of the $E < 10^{-3}$ comfort threshold.

*The same alignment a decade later*, when the database has grown 100-fold to $5\times10^{10}$ residues: $E \approx 1.6$. It is now **expected by chance**, even though nothing about the alignment changed. To get back to $E = 0.001$ against the original database, you'd need $S' = \log_2(1.5\times10^{11}/10^{-3}) = 47.1$ bits, a raw score of about 111.

## Watch out

- **You might compare** raw scores across searches that used different matrices or gap costs — **but actually** raw scores have no common unit. Compare bit scores, or better, E-values, which also account for query and database size.
- **You might read** $E = 0.05$ as "5 percent chance this hit is false" — **but actually** E is the expected *number* of chance hits at this score in this search, and $1 - e^{-E}$ is the chance at least one exists. Neither is the probability that *this particular hit* is a false positive. That depends on how many true homologs are in the database too, the same distinction that separates a p-value from a false discovery rate in [5.2](05-02-differential-expression-multiple-testing.md).
- **You might trust** an excellent E-value for a hit to a low-complexity region (a run like `QQQQQPQQQQ`, or a collagen repeat) — **but actually** Karlin–Altschul assumes background composition. Compositionally biased regions violate it and produce hugely inflated scores. That's why BLAST masks them (SEG, DUST) and applies composition-based statistics by default.

## One-liner

> The best chance alignment score is an extreme value whose tail falls like $e^{-\lambda S}$, so $E = Kmn\,e^{-\lambda S}$ counts the chance hits a search this big should produce — bit scores make that comparable across matrices, and growing databases quietly erode every hit's significance.

## Problems

**P1 (🟢)** For DNA with uniform bases, scored match $+1$ / mismatch $-2$: (a) find $\lambda$ exactly; (b) find the implied match frequency $q_{\text{match}}$; (c) megablast uses $+1/-2$ by default — what kind of alignments is it tuned for?

**P2 (🟡)** A 300-residue query, BLOSUM62 gapped ($\lambda = 0.267$, $K = 0.041$), database $n = 5\times10^8$. (a) A hit scores 90 raw. Compute its bit score and E-value. (b) What is the smallest integer raw score with $E \le 0.001$? (c) Would you report the 90-point hit as a homolog?

**P3 (🔴)** (a) Compute $P = 1 - e^{-E}$ for $E = 3$ and for $E = 0.01$, and say when $P \approx E$ is a safe shortcut. (b) Two labs find the same alignment with bit score 45: lab A searched a 300-residue query against $10^9$ residues, lab B searched a 30-residue peptide against the same database. Compute both E-values (ignore edge corrections). (c) Lab B says their hit is "10 times more significant because the query is shorter". Is that reasoning right? What does it imply for scanning a whole proteome against a database, query by query?

<details>
<summary>Solutions</summary>

**P1** (a) $\tfrac14 e^{\lambda} + \tfrac34 e^{-2\lambda} = 1$. With $u = e^{\lambda}$, multiply by $4u^2$: $u^3 - 4u^2 + 3 = 0$. Factor out the trivial root $u = 1$: $(u - 1)(u^2 - 3u - 3) = 0$, so $u = \dfrac{3 + \sqrt{21}}{2} = 3.791$ and $\lambda = \ln 3.791 = \mathbf{1.333}$.

(b) $q_{\text{match}} = \tfrac14 u = \tfrac14(3.791) = \mathbf{0.948}$.

(c) Near-identical sequences — about **95 percent identity**. Megablast is built for comparing sequences from the same or very closely related species (mapping ESTs, finding contaminants), which is consistent with its 28-base seeds ([1.6](01-06-blast-seeded-heuristic-search.md)).

**P2** (a) $S' = (0.267 \times 90 - \ln 0.041)/\ln 2 = (24.03 + 3.19)/0.693 = \mathbf{39.3}$ bits. $E = 1.5\times10^{11} \times 2^{-39.3} = 1.5\times10^{11} \times 1.50\times10^{-12} \approx \mathbf{0.23}$.

(b) Need $S' \ge \log_2(1.5\times10^{11}/10^{-3}) = 47.09$ bits. Then $S \ge (47.09 \times 0.693 + \ln 0.041)/0.267 = (32.64 - 3.19)/0.267 = 110.3$. **Raw 111.** Check: 110 gives $E = 0.0011$, 111 gives $E = 0.00084$.

(c) **Not on its own.** $E = 0.23$ means roughly one hit this good in every four searches of pure noise. It could still be a real distant homolog — report it as a candidate, and corroborate with a profile search ([3.5](03-05-profile-hmms.md)), a reciprocal search, or conserved structure.

**P3** (a) $E = 3$: $P = 1 - e^{-3} = \mathbf{0.950}$. $E = 0.01$: $P = 1 - e^{-0.01} = \mathbf{0.00995}$. The shortcut $P \approx E$ is safe when $E \lesssim 0.1$ (the error is about $E^2/2$). For large $E$, $P$ saturates at 1 while $E$ keeps counting.

(b) Lab A: $E = 300 \times 10^9 \times 2^{-45} = 3\times10^{11} \times 2.84\times10^{-14} = \mathbf{0.0085}$. Lab B: $E = 30 \times 10^9 \times 2^{-45} = \mathbf{0.00085}$.

(c) The arithmetic is right, and so is the logic *per search*: a shorter query offers 10 times fewer places for chance alignments, so the same bit score is 10 times rarer. But the reasoning breaks down when you run **many** searches. Scanning a 20,000-protein proteome is 20,000 searches, and the expected number of chance hits at a given E threshold across the whole scan is about $20{,}000 \times E$. $E = 0.001$ per query yields about 20 false hits overall. Per-search E-values have to be tightened (or the whole scan treated as one search with $m$ = total proteome length) — the multiple-testing problem of [5.2](05-02-differential-expression-multiple-testing.md) in its original form.

</details>

## Flashback

**From Lesson 1.5 (Affine gaps):** BLASTN's default scoring is reward $+2$, penalty $-3$, "gap existence 5, extension 2" in NCBI's $a + bL$ convention. (a) Give the cost of gaps of length 1 and 3, and translate the parameters into this course's $d + (L-1)e$ form. (b) Score an alignment with 10 matches, 1 mismatch and a single gap of length 3. (c) Score an alternative with 11 matches, no mismatches and three separate gaps of length 1. Which does BLASTN prefer?

<details>
<summary>Solution</summary>

(a) Length 1: $5 + 2(1) = \mathbf{7}$. Length 3: $5 + 2(3) = \mathbf{11}$. In $d + (L-1)e$ form, $d = 7$ and $e = 2$ (check: $7 + 2 \times 2 = 11$).

(b) $10(2) - 3 - 11 = \mathbf{6}$.

(c) $11(2) - 3(7) = 22 - 21 = \mathbf{1}$.

BLASTN prefers **(b)**, the single 3-base gap, by 5 points. One indel event plus a substitution beats three separate indel events, even though (c) has an extra match and no mismatch.

</details>

## Connections

- **Backward:** $\lambda$ is the scale that makes [1.2](01-02-substitution-matrices-log-odds.md)'s matrix a log-odds matrix, and its existence needs that lesson's negative expected score; the $\ln(mn)/\lambda$ growth is [1.4](01-04-smith-waterman-local-alignment.md)'s P3 made exact; BLAST's HSP scores ([1.6](01-06-blast-seeded-heuristic-search.md)) are what get converted.
- **Forward:** choosing which hits to trust decides what goes into a multiple alignment ([2.1](02-01-multiple-sequence-alignment.md)); profile HMMs report E-values the same way ([3.5](03-05-profile-hmms.md)); searching many queries is the multiple-testing problem of [5.2](05-02-differential-expression-multiple-testing.md).
- **Sideways:** the maximum of many weakly dependent scores following a Gumbel law is extreme-value statistics, and reading a threshold off an exponential tail is the same move that turns rainfall intensity into a return period in [climate-science 5.2](../../climate-science/lessons/05-02-extremes-event-attribution.md); the equation $\mathbb{E}[e^{\lambda s}] = 1$ is the exponential-martingale condition for a random walk, which makes $e^{\lambda R_k}$ a martingale and gives exponentially small hitting probabilities by the optional stopping argument that [probability-theory 5.4](../../probability-theory/lessons/05-04-stopping-times-optional-stopping.md) uses for gambler's ruin.
