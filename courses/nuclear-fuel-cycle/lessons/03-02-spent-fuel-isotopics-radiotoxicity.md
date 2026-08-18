# Nuclear Fuel Cycle & Policy · Lesson 3.2: Spent-fuel isotopics & radiotoxicity

> ⏱ ~15 min · Module 3: The Back End — Spent Fuel, Reprocessing & Waste · Builds on: [3.1 Decay heat & the spent-fuel source term](03-01-decay-heat-source-term.md), [decay chains — intro-nuclear-engineering](../../intro-nuclear-engineering/syllabus.md) · Unlocks: [3.4 Reprocessing: PUREX](03-04-reprocessing-purex-separations.md), [3.6 Geological disposal](03-06-geological-disposal-repository.md)

## Why this matters

When someone asks "how long is nuclear waste dangerous?" the honest answer is: *it depends what you mean by dangerous, and by when.* For the first few centuries the hazard is a handful of intensely radioactive fission products; after that a much smaller mass of actinides carries a hazard that fades over tens of thousands of years. That single crossover — fission products early, actinides late — is the entire quantitative basis for the reprocessing debate and for how we design a repository. Get it, and "a million years" stops being a scare number and becomes an engineering variable you can move.

## The idea

Discharged PWR fuel is mostly what went in: about **95% uranium** (barely touched), roughly **1% plutonium** (bred in), and about **4% fission products plus a sprinkle of minor actinides** — the genuinely new, genuinely hot material. The hazard lives almost entirely in that last 4%, and it splits into two families that behave completely differently in time.

**Fission products** are middleweight nuclei snapped off during fission. The dose-drivers — cesium-137 and strontium-90 — have half-lives near **30 years**. Thirty years is short: their activity is enormous *because* they decay fast, and for the same reason they burn themselves out. Ten half-lives (~300 years) and they're essentially gone.

**Actinides** are heavy nuclei built up by neutron capture on uranium — plutonium, americium, neptunium. Their half-lives run **thousands to millions of years**. Low activity per gram (they decay slowly), but they *persist*, they're **alpha emitters**, and alpha inside your body is nasty: per becquerel ingested, an actinide delivers roughly an order of magnitude more committed dose than a beta-emitting fission product, and several of them are bone-seekers.

So picture two decay curves. The fission-product curve starts high and falls off a cliff around 300 years. The actinide curve starts lower but is nearly flat for millennia. They **cross** near ~300 years — and that crossover is the hinge of the whole back end.

## The formal version

The quantity that matters is **ingestion radiotoxicity**: the committed dose you would receive if you swallowed the material. For a single nuclide,

$$R_i(t) = A_i(t)\, e_i = \lambda_i N_i(t)\, e_i, \qquad \lambda_i = \frac{\ln 2}{T_{1/2,i}}.$$

In words: radiotoxicity = activity times a per-nuclide *dose coefficient* $e_i$ (sieverts of committed dose per becquerel ingested); activity $A_i=\lambda_i N_i$ is the decay constant $\lambda_i$ times the number of atoms $N_i$, and $\lambda_i$ is just $\ln 2$ over the half-life. Total hazard is the sum over every nuclide, $R(t)=\sum_i R_i(t)$.

Two levers hide in that formula:

- **Half-life sets the shape.** Short $T_{1/2}$ &rArr; large $\lambda$ &rArr; large activity *now* but fast decay. Long $T_{1/2}$ &rArr; small $\lambda$ &rArr; modest activity that barely changes for ages. This is exactly why the two families cross.
- **Dose coefficient sets the height.** Alpha emitters (actinides) carry $e_i$ roughly $10\times$ those of the beta-emitting fission products — e.g. $e(\ce{^{239}Pu})\approx 2.5\times10^{-7}$, $e(\ce{^{241}Am})\approx 2.0\times10^{-7}$, versus $e(\ce{^{137}Cs})\approx 1.3\times10^{-8}$, $e(\ce{^{90}Sr})\approx 2.8\times10^{-8}\ \text{Sv/Bq}$.

The natural benchmark is the **uranium-ore reference level**: the radiotoxicity of the ore originally mined to make the fuel. When spent fuel decays back down to that line, it is — by that measure — no more hazardous than the rock we dug it out of. For once-through fuel that takes on the order of $10^5$ years, and the actinides are what hold it up there.

$$R(t) \approx \underbrace{R_{\text{FP}}(t)}_{\text{governs } t \lesssim 300\,\text{yr}} + \underbrace{R_{\text{act}}(t)}_{\text{governs } t \gtrsim 300\,\text{yr}}.$$

In words: the total is a sum of a fast-fading fission-product term and a slow-fading actinide term; whichever is larger *is* the hazard at that moment, and the handover happens near a few hundred years.

## Picture

![Ingestion radiotoxicity of spent fuel vs time on log-log axes: a blue total curve, a grey fission-product component dominating before ~300 years, a coral actinide component dominating after the crossover, a lowered dashed reprocessed curve, and a horizontal natural-uranium-ore reference line](assets/03-02-fig1.svg)

Read it left to right: the grey fission-product curve is on top until it drops off a cliff near 300 years (ten Cs-137/Sr-90 half-lives); the coral actinide curve then carries the total (blue) down a long, shallow slope that meets the ore reference only after ~$10^5$ years. Strip the actinides out — the dashed blue **reprocessed** curve — and once the fission products fade you land near the ore line within a few centuries instead of a hundred millennia.

## Worked examples

**Example 1 (why the hazard changes hands — reason from half-lives).**
Compare the survivors at 100 years and at 10,000 years, using $N(t)/N_0 = 2^{-t/T_{1/2}}$ (fraction of atoms left after $n=t/T_{1/2}$ half-lives).

*Cesium-137, $T_{1/2}=30$ yr:*
- at $t=100$ yr: $n=100/30=3.33$ half-lives &rArr; $2^{-3.33}\approx 0.099$ — about **10% left**, still fiercely active but visibly declining.
- at $t=10{,}000$ yr: $n=10{,}000/30\approx 333$ half-lives &rArr; $2^{-333}\approx 10^{-100}$ — **utterly gone**.

*Plutonium-239, $T_{1/2}=24{,}100$ yr:*
- at $t=100$ yr: $n=100/24{,}100=0.0041$ &rArr; $2^{-0.0041}\approx 0.997$ — **essentially untouched**.
- at $t=10{,}000$ yr: $n=10{,}000/24{,}100=0.415$ &rArr; $2^{-0.415}\approx 0.75$ — **75% still there**.

So at 100 years the fission products are still present *and* their tiny half-life makes their activity ($A=\lambda N$) huge — they dominate. By 10,000 years they have decayed by a factor of $10^{100}$ while the plutonium has barely moved; the actinides, further boosted by their ~$10\times$ larger dose coefficient, own the hazard. The curves *must* cross somewhere in between — and they do, near ~300 years. **The hazard is fission-product-dominated at 10–100 yr and actinide-dominated at $10^4$ yr for one reason: short half-life means loud but brief; long half-life means quiet but forever.**

**Example 2 (what reprocessing buys — remove 99.5% of the plutonium).**
Plutonium is the single largest contributor to the long-term actinide curve. Suppose reprocessing extracts the uranium and **99.5% of the plutonium**, leaving a fraction $0.005$ behind. The plutonium-driven part of the long-term radiotoxicity drops by

$$\frac{1}{0.005} = 200\times.$$

Now translate "$200\times$ lower" into "how much sooner do we reach the ore line?" On the tail the curve falls at roughly plutonium-239's pace — one factor of 2 every $T_{1/2}=24{,}100$ yr. A factor of 200 is

$$\log_2 200 = \frac{\ln 200}{\ln 2} = \frac{5.30}{0.693} \approx 7.6 \text{ half-lives}, \qquad 7.6 \times 24{,}100 \approx 1.8\times10^{5}\ \text{yr}.$$

In words: knocking the plutonium down by $200\times$ is like fast-forwarding the actinide decay by roughly **180,000 years**. Once-through fuel meets the ore reference at ~$10^5$ yr; pull the plutonium and you've erased essentially that entire tail. Pull the **minor actinides too** (americium, neptunium — the goal of *partitioning & transmutation*), and nothing long-lived is left to hold the curve up: after the fission products fade you're at the ore level in **a few hundred years** rather than a hundred thousand. That factor-of-a-thousand compression of the hazard timescale — from $10^5$ yr down to $10^2$–$10^3$ yr — *is* the physics case for reprocessing, and you'll meet its chemistry in [3.4 (PUREX)](03-04-reprocessing-purex-separations.md) and its consequence for repository design in [3.6](03-06-geological-disposal-repository.md).

## Watch out

- **You might think** removing the plutonium makes the waste safe outright. **Actually** it only lowers the *long-term* curve — the first ~300 years are still governed by Cs-137 and Sr-90, which reprocessing does **not** remove (they go into the vitrified high-level waste). Reprocessing shortens the hazard's *duration*, not its early *intensity*.
- **You might think** "highest activity = highest hazard." **Actually** ingestion radiotoxicity is activity *times a dose coefficient*, and alpha-emitting actinides carry coefficients ~$10\times$ the fission products'. A becquerel of plutonium is far more damaging swallowed than a becquerel of cesium — which is why the modest-activity actinides dominate the tail.
- **You might think** the actinide curve is just plutonium. **Actually** americium-241 *grows in* over the first century as \ce{^{241}Pu ->[\beta^-] ^{241}Am} ($T_{1/2}$ of \ce{^{241}Pu} is only 14 yr), so the near-term actinide hazard can *rise* before it falls — one reason the crossover sits a couple centuries out rather than at 30 years.

## One-liner

> Spent fuel is loud and brief where the fission products live (≤300 yr) and quiet but nearly eternal where the actinides live (≥300 yr) — and reprocessing is the act of deleting the second act.

## Problems

**P1 (🟢)** Iodine-129 ($T_{1/2}=1.6\times10^7$ yr) and cesium-137 ($T_{1/2}=30$ yr) start with equal numbers of atoms in fresh spent fuel. (a) Which has the higher *activity* at discharge, and by roughly what factor? (b) Which still has essentially all of its atoms at $t=10^4$ yr? State in one sentence what this says about which nuclide matters for *near-term heat* versus *long-term mobility in a repository*.

**P2 (🟡)** A batch of spent fuel sits a factor of $\sim 10^4$ above the natural-uranium-ore reference at the moment the fission products have died away (~300 yr), with the remaining hazard governed by an actinide mixture that decays with an effective half-life of about 20,000 yr. Estimate how long after that point the fuel reaches the ore reference. Then estimate how much of that time you erase if reprocessing first cuts the actinide hazard by a factor of 100.

**P3 (🔴, optional)** Building on [2.3 (Pu buildup)](02-03-burnup-depletion-linear-reactivity-model.md): higher discharge burnup breeds and then *fissions* more plutonium in-core, but also builds up more americium and curium. Argue qualitatively whether pushing burnup higher makes the **long-term** radiotoxicity per unit of energy generated better or worse, and name the competing effects. (No exact number needed — reason about the tradeoff.)

<details>
<summary>Solutions</summary>

**P1** Activity $A=\lambda N=\frac{\ln 2}{T_{1/2}}N$; equal $N$, so activity ratio = inverse half-life ratio.
(a) $\dfrac{A_{\text{Cs}}}{A_{\text{I}}}=\dfrac{T_{1/2,\text{I}}}{T_{1/2,\text{Cs}}}=\dfrac{1.6\times10^{7}}{30}\approx 5\times10^{5}$. Cesium-137 is about **half a million times more active** at discharge — it's a big share of the early activity and heat.
(b) Iodine-129: at $10^4$ yr, $n=10^4/1.6\times10^7\approx 6\times10^{-4}$ half-lives, so $2^{-6\times10^{-4}}\approx 0.9996$ — **essentially all its atoms remain** (Cs-137 is long gone, $\sim2^{-333}$). One sentence: the short-lived Cs-137 drives near-term activity and decay heat but vanishes in centuries, while the near-stable I-129 contributes negligible activity yet persists for geologic time — and being a mobile, soluble species it becomes a *long-term repository dose* concern precisely because it doesn't decay away.

**P2** Reaching the ore line means dropping the hazard by a factor of $10^4$. Number of halvings: $\log_2 10^4 = 4\log_2 10 = 4(3.32)=13.3$ half-lives. At $\sim$20,000 yr each: $13.3\times 20{,}000\approx 2.7\times10^{5}$ yr — a few hundred thousand years, consistent with the once-through story.
Reprocessing cutting the actinide hazard by $100\times$ removes $\log_2 100=6.6$ halvings up front, i.e. $6.6\times 20{,}000\approx 1.3\times10^{5}$ yr. So you erase roughly **130,000 years** — about half the remaining timescale — leaving ~$1.4\times10^{5}$ yr; deeper actinide removal (americium, curium) shortens it far more, toward the few-hundred-year fission-product limit.

**P3** Competing effects:
- *Better:* higher burnup extracts more energy per tonne of heavy metal, so any fixed actinide inventory is spread over more GWd — dividing the long-term hazard by a larger energy denominator. More of the bred Pu-239 is also fissioned in place rather than discharged.
- *Worse:* higher burnup means more neutron captures, building up the higher plutonium isotopes and especially the **minor actinides** (Am-241, Am-243, Cm-244), which are potent long-term (and heat-producing) radiotoxicity contributors; the actinide inventory *per tonne* rises.
The net per-unit-energy long-term radiotoxicity is roughly a wash to modestly unfavorable at very high burnup: the energy-denominator gain is partly cancelled by faster minor-actinide buildup. The honest takeaway — burnup is optimized mainly for economics and uranium utilization (Lesson 2.4), not for minimizing the actinide tail; that tail is attacked instead by *removing* actinides (reprocessing) or *transmuting* them (fast reactors, Module 4).

</details>

## Flashback

**From Lesson 3.1 (Decay heat & the spent-fuel source term):** A 2500 MW$_\text{th}$ PWR operates for 6 months and then shuts down. Using the Way–Wigner correlation

$$\frac{P(t)}{P_0}=0.066\big[\,t^{-0.2}-(t+t_0)^{-0.2}\,\big] \quad (t,\,t_0 \text{ in seconds}),$$

estimate the decay-heat power one day after shutdown. ($t_0$ is the operating time.)

<details>
<summary>Solution</summary>

Convert times to seconds. Operating time $t_0 = 0.5\ \text{yr} = 0.5\times 3.156\times10^{7} = 1.578\times10^{7}\ \text{s}$; cooling time $t = 1\ \text{day} = 86{,}400\ \text{s}$.

$$t^{-0.2} = (8.64\times10^{4})^{-0.2} = 0.1030,$$
$$(t+t_0)^{-0.2} = (86{,}400 + 1.578\times10^{7})^{-0.2} = (1.587\times10^{7})^{-0.2} = 0.03631.$$

Then
$$\frac{P}{P_0}=0.066\,(0.1030-0.03631)=0.066\times0.06669=4.40\times10^{-3},$$
$$P = 4.40\times10^{-3}\times 2500\ \text{MW} \approx 11\ \text{MW}.$$

About **11 MW** a day after shutdown — roughly 0.4% of full power, still a serious heat load. That is exactly why this fuel goes to a water pool before a dry cask, and it's the *same* inventory whose *hazard* (not heat) this lesson tracks out to $10^5$ years.

</details>

## Connections

- **Backward:** same discharged inventory as [3.1](03-01-decay-heat-source-term.md), asked a different question — 3.1 was decay *heat* (dominated by short-lived nuclides, an engineering-thermal problem); this is decay *hazard* over geologic time (dominated by long-lived actinides). And it rests on the [decay-chain kinematics from intro-nuclear-engineering](../../intro-nuclear-engineering/syllabus.md): $A=\lambda N$, half-lives, and ingrowth (\ce{^{241}Pu -> ^{241}Am}).
- **Forward:** the crossover is the reason to separate actinides — [3.4 PUREX](03-04-reprocessing-purex-separations.md) is *how*, and [3.6 the repository](03-06-geological-disposal-repository.md) inherits the answer, since the ~$10^5$-yr actinide tail sets the containment timescale and the fission-product heat sets canister spacing.
- **Sideways:** the dose coefficients $e_i$ that make alpha emitters so toxic per becquerel are the province of health physics and radiation dosimetry — the alpha-vs-beta internal-dose contrast is the same physics you'd quantify in radiation-detection-and-shielding, just aimed at biology instead of a detector.
