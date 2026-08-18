# Biophysics · Lesson 2.4: Cooperativity and allostery

> ⏱ ~15 min · Module 2: Free energy and the Boltzmann distribution in biology · Builds on: [2.3 Ligand binding and receptor occupancy](02-03-ligand-binding-occupancy.md) · Unlocks: [3.1 Polymers as random walks: the entropic spring](03-01-entropic-spring.md)

## Why this matters

A single binding site is a *lousy switch*. From [2.3](02-03-ligand-binding-occupancy.md), the Langmuir curve $p = ([L]/K_d)/(1+[L]/K_d)$ crawls from 10% to 90% occupancy only when the ligand concentration $[L]$ climbs by a factor of **81**. A cell that wanted to flip a receptor decisively — off below some threshold, on above it — cannot do it with one site: the response is a lazy ramp, not a switch. Yet biology is full of sharp molecular switches: hemoglobin grabs oxygen in the lungs and dumps it in tissue over a *small* change in oxygen pressure; genes snap on; signaling cascades commit. The trick that makes a sloppy sensor into a near-switch is **cooperativity** — letting the sites talk to each other — and it is nothing more than the Boltzmann two-state idea from [2.2](02-02-boltzmann-two-state.md) applied to the whole molecule at once.

## The idea

Put several binding sites on one protein and let them *cooperate*: binding the first ligand makes the remaining sites bind **more tightly**. Now the molecule hesitates at low $[L]$ (the first ligand is hard to seat), but once one lands, the rest rush in — the protein tips over from empty to full across a narrow window. The binding curve stops being a lazy ramp and becomes an **S-shape (a sigmoid)**: flat, then steep, then flat. Crucially it is sigmoidal *in $[L]$ itself*, not merely on a log axis — that steep middle is the switch.

Where does the "talking" come from? The cleanest picture (the MWC model, below) is that the whole protein flips as a unit between two global shapes — a **Tense** form that binds ligand weakly and a **Relaxed** form that binds it strongly — sitting in a Boltzmann equilibrium exactly like the two-state switch of [2.2](02-02-boltzmann-two-state.md). Each ligand that binds pays to shift the equilibrium toward Relaxed, which raises *every* site's affinity at once. The sites never touch; they communicate through the shared conformation. That shared, concerted flip is what "cooperativity" mechanically *is*.

## The formal version

**The Hill function.** For a receptor with cooperative binding we replace the single-site Langmuir curve by

$$\boxed{\,p = \frac{([L]/K_d)^{\,n}}{1 + ([L]/K_d)^{\,n}}\,}$$

where $p$ is the fractional occupancy (dimensionless, $0$ to $1$), $[L]$ is the free-ligand concentration, $K_d$ is the concentration at which $p = \tfrac12$ (units of concentration), and $n$ is the **Hill coefficient** (dimensionless). *In words: the same saturating curve as one site, but with $[L]/K_d$ raised to the power $n$ — and that exponent is the whole story.*

- $n = 1$: the ordinary non-cooperative Langmuir isotherm of [2.3](02-03-ligand-binding-occupancy.md).
- $n > 1$: **positive cooperativity** — the curve steepens into a sigmoid.
- $n = $ (number of sites): the maximal, *perfectly* cooperative limit (all-or-nothing binding). Real proteins fall short of this, so a measured $n$ is a lower bound on the site count.

**How sharp is sharp? The 10→90% window.** Set $p = 0.1$ and $p = 0.9$ and solve. Because $p/(1-p) = ([L]/K_d)^n$, we get $([L]/K_d)^n = 1/9$ at 10% and $= 9$ at 90%, so

$$\frac{[L]_{90\%}}{[L]_{10\%}} = \left(\frac{9}{1/9}\right)^{1/n} = \boxed{\,81^{\,1/n}\,}.$$

*In words: the fold-change in ligand needed to swing from barely-on to nearly-on is $81^{1/n}$ — and the power $1/n$ crushes it fast.* One site ($n=1$) needs $81\times$; $n=2$ needs $\sqrt{81}=9\times$; hemoglobin's $n\approx 2.8$ needs about $81^{1/2.8}\approx 4.8\times$; a hypothetical $n=4$ needs only $81^{1/4}=3\times$. Cooperativity converts a decade-wide sloppy sensor into a switch that flips over a factor of a few — this narrowing is called **ultrasensitivity**. In words: make the sites talk to each other and the receptor flips from off to on over a much narrower concentration window — a molecular switch.

**Reading $n$ off data (the Hill plot).** Take logs of $p/(1-p) = ([L]/K_d)^n$:

$$\log\frac{p}{1-p} = n\,\log[L] - n\,\log K_d.$$

*In words: plot $\log[p/(1-p)]$ against $\log[L]$ and the slope is $n$* — the steepness of the curve, made into a straight line you can measure.

**Allostery and the MWC model.** Monod–Wyman–Changeux: the protein exists in two concerted conformations, **T** (tense, low affinity, dissociation constant $K_T$) and **R** (relaxed, high affinity, $K_R < K_T$), in Boltzmann equilibrium with allosteric constant $L_0 = [\mathrm{T}_0]/[\mathrm{R}_0]$ (the ratio with no ligand bound). Ligand binds R more easily, so every bound ligand tilts the whole population toward R by the Boltzmann factor — which raises the affinity of the *other* sites. The result is a sigmoid with an *effective* Hill coefficient between 1 and the number of sites. *In words: cooperativity is the two-state Boltzmann switch of [2.2](02-02-boltzmann-two-state.md), promoted from a single site to the entire molecule.* When a *different* molecule (an effector) binds elsewhere and shifts $L_0$, it tunes the whole response up or down without touching the active site — **allosteric regulation**, the basis of feedback control in metabolism and signaling.

## Picture

![Fractional occupancy p versus [L]/K_d for Hill coefficients n=1, 2, and 4; all three cross p=½ at [L]=K_d, and the curves steepen into sharper sigmoids as n grows, with the 10-to-90 percent window shrinking as 81 to the power 1/n](assets/02-04-fig1.svg)

## Worked examples

**Example 1 (the sharpening, quantified — Boss problem 2).** How much must $[L]$ change to drive occupancy from 10% to 90%, for $n = 1$ versus $n = 2$? Use $[L]_{90}/[L]_{10} = 81^{1/n}$:

$$n = 1:\quad 81^{1/1} = 81\times, \qquad\qquad n = 2:\quad 81^{1/2} = \sqrt{81} = 9\times.$$

A non-cooperative site needs the ligand to rise almost two orders of magnitude to switch; adding one unit of cooperativity ($n=2$) cuts that to a single decade. Push to $n=4$ and it is $81^{1/4}=3\times$ — a genuine switch. *That is the one-line answer to "why do cells build cooperative receptors": to turn a lazy 81-fold ramp into a decisive few-fold flip.*

**Example 2 (why hemoglobin can't be non-cooperative).** Hemoglobin (Hb) carries oxygen on four heme sites and measures $n \approx 2.8$. In the lungs the oxygen partial pressure is $p_{\mathrm{O_2}}\approx 100$ mmHg; in working tissue it falls to $\approx 30\text{–}40$ mmHg — barely a $3\times$ change. With $n\approx 2.8$, going from nearly-loaded to substantially-unloaded needs only about a $81^{1/2.8}\approx 4.8\times$ swing in $p_{\mathrm{O_2}}$, so Hb can be $\sim$97% saturated in the lungs and dump a large fraction of that in tissue over the modest pressure drop that actually exists in the body. Its non-cooperative cousin **myoglobin** ($n=1$, one site) would need an $81\times$ pressure swing to unload the same fraction — a swing the body never provides, so myoglobin (correctly) just holds oxygen in muscle rather than ferrying it. *The S-curve is doing the delivery work: cooperativity is what lets one molecule both grab and release over the narrow physiological window.*

## Watch out

- **You might think the sigmoid is just the old Langmuir curve on a log axis.** No — the Hill curve with $n>1$ is genuinely S-shaped *in $[L]$ itself* (it has an inflection with an upward-then-downward bend). The $n=1$ Langmuir curve is concave everywhere in $[L]$; only $n>1$ gives the true switch. The log axis flatters every curve — trust the linear $[L]$ shape.
- **You might read $n$ as literally the number of sites.** It is the *effective* cooperativity and is almost always **less** than the site count (Hb has 4 sites but $n\approx 2.8$). $n$ equals the site number only in the unreachable perfectly-cooperative limit, so a measured $n$ is a *lower bound* on how many sites cooperate.
- **You might think binding *itself* raises the affinity by contact between ligands.** In the MWC picture the ligands never interact directly — the coupling runs entirely through the shared T$\leftrightarrow$R conformational flip. Cooperativity is a property of the *protein's* two-state switch, not of ligand–ligand forces.

## One-liner

> Give a receptor $n$ cooperating sites and its 10→90% switching window shrinks from $81\times$ to $81^{1/n}\times$ — a Boltzmann T↔R flip of the whole molecule that turns a sloppy sensor into an ultrasensitive switch.

## Problems

**P1 (🟢, Boss problem 2)** For the Hill function $p = ([L]/K_d)^n/(1+([L]/K_d)^n)$, compute the fold-change in $[L]$ needed to move occupancy from 10% to 90% for $n = 1$, $n = 2$, and $n = 4$. State in one sentence why a cell would build the $n=4$ receptor.

**P2 (🟡)** A single-molecule assay reports occupancy $p = 0.2$ at $[L] = 1\ \mu\text{M}$ and $p = 0.8$ at $[L] = 4\ \mu\text{M}$. Assuming the Hill form, find the Hill coefficient $n$ and the $K_d$. What is the minimum number of binding sites?

**P3 (🔴, optional)** In the MWC model the fraction of protein in the Relaxed state (with no ligand) is $f_R = 1/(1+L_0)$, where $L_0 = [\mathrm{T}_0]/[\mathrm{R}_0]$. A protein has $L_0 = 1000$ (strongly tense when empty). (a) What fraction sits in R with no ligand? (b) An allosteric *activator* binds only R and effectively lowers $L_0$ to $10$. Now what fraction is in R? (c) In one sentence, how does this illustrate allosteric regulation?

<details>
<summary>Solutions</summary>

**P1** Use $[L]_{90}/[L]_{10} = 81^{1/n}$:

$$n=1:\ 81^{1} = 81\times, \qquad n=2:\ 81^{1/2} = 9\times, \qquad n=4:\ 81^{1/4} = 3\times.$$

(The last: $81^{1/4} = (3^4)^{1/4} = 3$.) The $n=4$ receptor switches from essentially off to essentially on over just a $3\times$ change in ligand, so the cell can use it as a decisive concentration threshold — a molecular switch — rather than a gradual sensor.

*Check.* At $n=1$ this must reproduce the single-site result from [2.3](02-03-ligand-binding-occupancy.md): $p=0.1\Rightarrow [L]/K_d = 1/9$, $p=0.9\Rightarrow [L]/K_d = 9$, ratio $81$ ✓. Each doubling-ish of $n$ takes a root of 81, so the window collapses monotonically toward $1\times$ as $n\to\infty$ (a perfect step) ✓.

**P2** Hill linearizes as $p/(1-p) = ([L]/K_d)^n$. Form the ratio at the two concentrations so $K_d$ cancels:

$$\frac{p_2/(1-p_2)}{p_1/(1-p_1)} = \left(\frac{[L]_2}{[L]_1}\right)^{n}.$$

Left side: $p_1=0.2\Rightarrow 0.2/0.8 = 0.25$; $p_2=0.8\Rightarrow 0.8/0.2 = 4$; ratio $= 4/0.25 = 16$. Right side: $(4/1)^n = 4^n$. So $4^n = 16 = 4^2 \Rightarrow n = 2$.

For $K_d$, use either point: $([L]/K_d)^n = p/(1-p)$. At $[L]=1\ \mu\text{M}$, $p=0.2$: $(1/K_d)^2 = 0.25 \Rightarrow 1/K_d = 0.5 \Rightarrow K_d = 2\ \mu\text{M}$.

Minimum number of sites: since $n$ is a lower bound on the site count and $n=2$, the receptor has **at least 2** cooperating sites.

*Check.* Verify $K_d$ with the other point: at $[L]=4$, $(4/2)^2 = 4 = 0.8/0.2$ ✓. And $[L]=K_d=2\ \mu\text{M}$ should give $p=\tfrac12$: $(2/2)^2=1\Rightarrow p = 1/(1+1)=0.5$ ✓. The $10\to90\%$ window here would be $81^{1/2}=9\times$; indeed a $4\times$ change moved us $20\to80\%$, consistent with a slightly narrower inner window ✓.

**P3** (a) $f_R = 1/(1+L_0) = 1/(1+1000) = 1/1001 \approx 0.001$ — about **0.1%** in R; the empty protein is almost entirely Tense (low affinity). (b) With $L_0 = 10$: $f_R = 1/(1+10) = 1/11 \approx 0.091$ — about **9%** in R, a $\sim$90-fold enrichment of the high-affinity state. (c) By binding elsewhere and shifting the T↔R equilibrium (not the active site), the activator raises the population of high-affinity R and so boosts the receptor's response to ligand — that is allosteric regulation: a knob that tunes affinity from a distance.

*Check.* $f_R$ is a proper probability, $0<f_R<1$, and increases as $L_0$ falls, i.e. as R becomes favored ✓. This is literally the two-state Boltzmann occupancy of [2.2](02-02-boltzmann-two-state.md) with $L_0 = e^{\Delta E/k_BT}$ — the allosteric effector lowers the T→R energy gap ✓.

</details>

## Flashback

**From Lesson 2.3 (Ligand binding and receptor occupancy):** A drug occupies 25% of its single-site (non-cooperative) receptors at a free concentration of $3\ \text{nM}$. Find $K_d$, and the concentration needed for 75% occupancy.

<details>
<summary>Solution</summary>

For a single Langmuir site, $p/(1-p) = [L]/K_d$. At 25%: $0.25/0.75 = 1/3 = [L]/K_d \Rightarrow K_d = 3\,[L] = 3\times 3\ \text{nM} = 9\ \text{nM}$.

For 75%: $0.75/0.25 = 3 = [L]/K_d \Rightarrow [L] = 3K_d = 27\ \text{nM}$.

*Check.* The $25\%\to75\%$ swing took $[L]$ from $3$ to $27\ \text{nM}$, a factor of $9 = 81^{1/2}$-worth of the way — consistent with the single-site $10\to90\%$ span being the full $81\times$ ✓. Halfway occupancy would sit at $[L]=K_d=9\ \text{nM}$ ✓. This gentle single-site ramp is exactly what cooperativity in this lesson exists to sharpen.

</details>

## Connections

- **Backward:** the MWC Tense↔Relaxed equilibrium *is* the two-state Boltzmann switch of [2.2](02-02-boltzmann-two-state.md), with the allosteric constant $L_0 = e^{\Delta E/k_BT}$; the underlying single-site curve and $K_d$ come straight from [2.3](02-03-ligand-binding-occupancy.md). Together these close Boss problem 2 for the module.
- **Forward:** [3.4 Self-assembly and the hydrophobic effect](03-04-self-assembly-hydrophobic.md) reuses this "cooperativity of a concerted transition" idea for the sharp onset of micelle formation, and the entropic-spring chain of [3.1](03-01-entropic-spring.md) begins the polymer arc that this module unlocks.
- **Sideways (systems biology):** ultrasensitive Hill switches are the building block of genetic toggle switches, signaling thresholds, and feedback loops — see the [`systems-biology` syllabus](../../systems-biology/syllabus.md), where cooperativity ($n>1$) is what makes a gene circuit *decide* rather than drift. Allosteric regulation is likewise the physical basis of metabolic feedback in [`biochemistry`](../../biochemistry/syllabus.md).
