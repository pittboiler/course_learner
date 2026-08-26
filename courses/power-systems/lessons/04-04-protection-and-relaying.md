# Power Systems · Lesson 4.4: Protection and relaying basics

> ⏱ ~15 min · Module 4: Faults, protection, and stability · Builds on: [4.3 Sequence networks and unsymmetrical faults](04-03-sequence-networks-unsymmetrical-faults.md), [4.1 Symmetrical faults](04-01-symmetrical-faults.md) · Unlocks: [4.6 Transient stability and the equal-area criterion](04-06-transient-stability-equal-area.md)

## Why this matters

Computing a fault current is only half the job. Something has to **notice** the fault — by overcurrent, by [differential](../reference.md#differential-protection), or by [distance](../reference.md#distance-protection) — and open the right breaker — fast enough to prevent damage and maintain stability, and selectively enough that only the faulted element is removed.

Those two goals conflict. Fast tripping risks removing healthy equipment on a disturbance that was not a fault; selective tripping requires waiting to see whether a downstream device clears it first. The entire discipline of protection is the management of that trade-off, and it is governed by four requirements that are always in tension:

| Requirement | Meaning |
|---|---|
| **Sensitivity** | detects every fault in its zone, including high-impedance ones |
| **Selectivity** | trips only the faulted element, nothing else |
| **Speed** | clears fast enough for equipment survival and transient stability |
| **Reliability** | operates when it should (dependability) and not when it shouldn't (security) |

Speed matters more than equipment damage alone suggests. [4.6](04-06-transient-stability-equal-area.md) will show that a generator stays in synchronism only if the fault clears within a **critical clearing time**, often 100–200 ms. Protection speed is therefore a stability constraint, not merely an economic one.

## The idea

**Instrument transformers.** Relays cannot be connected to 345 kV and 20 kA directly. Current transformers (CTs) scale current to a 5 A or 1 A secondary; voltage transformers (VTs) scale voltage to 120 V. Every relay setting is really a *secondary* quantity, and every calculation must track the ratio.

**Zones of protection.** The system is divided into overlapping zones, each bounded by CTs and each with its own protection. Overlapping matters: a gap would leave an unprotected point, so zones are deliberately arranged to overlap **at the breakers**, ensuring every point is inside at least one zone.

**Primary and backup.** Every fault must be covered by a primary scheme and by at least one backup, because relays and breakers fail. Backup is *local* (a second relay, or breaker-failure protection) or *remote* (the upstream relay, which sees the fault too and trips after a delay).

Three protection principles cover most of the system:

**Overcurrent** — trip when current exceeds a threshold, with a delay that shortens as current rises. Simple and cheap, but its reach depends on fault level and therefore on system conditions. Universal on distribution.

**Differential** — compare current entering a zone with current leaving. They are equal unless there is a fault inside. **Inherently selective** — no coordination needed, and it can be instantaneous — but it needs CTs at every boundary, so it is used where the zone is compact: transformers, generators, busbars.

**Distance (impedance)** — compute $V/I$ at the relay. That ratio is proportional to the distance to the fault, so a threshold on impedance is a threshold on distance. **Independent of fault level**, which is its decisive advantage on transmission lines, where fault current varies enormously with system conditions but line impedance does not.

## The formal version

**Instrument transformers.**

$$I_{\rm sec} = \frac{I_{\rm pri}}{\mathrm{CTR}}, \qquad \mathrm{CTR} = \frac{\text{primary rating}}{5\ \mathrm{A}}.$$

*Example: an 800/5 CT has CTR = 160, so 4000 A primary reads 25 A secondary.*

CTs **saturate** at high current, particularly with DC offset present ([4.1](04-01-symmetrical-faults.md)), and a saturated CT under-reports. Saturation is the dominant error source in fault-current measurement and drives many relay-setting margins.

**Inverse-time overcurrent.** The IEC characteristic:

$$\boxed{\;t = \mathrm{TMS}\cdot\frac{k}{\left(\dfrac{I}{I_s}\right)^{\alpha}-1}\;}$$

where $I_s$ is the pickup current, TMS the time-multiplier setting, and:

| Curve | $k$ | $\alpha$ |
|---|---|---|
| Standard inverse | 0.14 | 0.02 |
| Very inverse | 13.5 | 1 |
| Extremely inverse | 80 | 2 |

*In words: the further above pickup the current is, the faster the relay operates.* A steeper curve (higher $\alpha$) discriminates more sharply between a close-in fault and a remote one, which is why extremely-inverse curves are used where the fault-current gradient along the feeder is large, and where the curve must coordinate with fuses (which are themselves extremely inverse).

**Coordination.** For a radial feeder, each upstream relay must be slower than the downstream one **for every fault the downstream relay sees**, by a **coordination time interval (CTI)**:

$$\boxed{\;\mathrm{CTI} = t_{\rm breaker}+t_{\rm relay\ overtravel}+t_{\rm margin} \approx 0.25\text{–}0.40\ \mathrm{s}.\;}$$

The procedure works from the far end inward: set the most remote relay as fast as its own constraints allow, then step each upstream relay up by one CTI. **This is why substation-end faults clear slowest** — the accumulated CTIs land at the source, exactly where fault current is highest. That inversion is the central weakness of pure overcurrent protection.

**Differential (percentage restraint).** With currents $I_1$ and $I_2$ defined into the zone:

$$I_{\rm op} = |I_1-I_2|, \qquad I_{\rm rest} = \frac{|I_1|+|I_2|}{2},$$

$$\boxed{\;\text{trip if}\quad I_{\rm op} > \max\left(I_{\rm pickup},\ \ m\,I_{\rm rest}\right),\;}$$

with slope $m$ typically 25–40%.

*In words: allow a larger difference when a larger current is flowing through.* The slope exists because CT errors are proportional to current — a 10% CT mismatch produces a 10% "false differential" at any through-fault level, and without a restraint characteristic the relay would trip on external faults.

**Distance relaying.** The relay measures

$$Z_{\rm apparent} = \frac{V_{\rm relay}}{I_{\rm relay}},$$

which for a fault at distance $x$ along a line of impedance $z$ per unit length equals $xz$ — proportional to distance and **independent of the fault current magnitude**.

Standard zone settings:

| Zone | Reach | Delay | Purpose |
|---|---|---|---|
| **Zone 1** | 80–90% of the line | instantaneous | primary, high-speed |
| **Zone 2** | 120–150% of the line | 0.3–0.5 s | remainder of the line + backup |
| **Zone 3** | line + 100–120% of the longest adjacent line | 1–2 s | remote backup |

**Why Zone 1 stops at 80%.** The relay's reach is uncertain by roughly 10–20% — from CT and VT errors, from uncertainty in the line's $Z_1$, and from fault arc resistance. Reaching to 100% would risk **overreaching** into the next line and tripping for a fault that is not on this line at all, which is an unacceptable loss of selectivity. The final 10–20% of the line is covered by Zone 2, or instantaneously by a **pilot scheme** that exchanges a signal with the relay at the far end, so both ends can trip instantaneously for any fault on the line.

**Infeed error.** Additional current entering at an intermediate bus makes a remote fault look **further away**:

$$\boxed{\;Z_{\rm apparent} = Z_{L1}+\left(1+\frac{I_{\rm infeed}}{I_{\rm relay}}\right)Z_{L2}.\;}$$

*In words: the relay sees only its own current but the full voltage drop, so it over-estimates the impedance.* Infeed always causes **underreach** — the relay covers less of the next line than intended, which is safe (it never causes a false trip) but degrades backup coverage, sometimes drastically.

**Autoreclosing.** Most overhead-line faults are transient — a lightning flashover, a branch, a bird — and the arc de-ionizes once the line is de-energized. Reclosing after 0.3–1 s restores service without an outage, and succeeds 70–90% of the time on distribution. Reclosing is blocked for transformer and cable faults (which are never transient) and is used cautiously near generators, since reclosing onto a permanent fault delivers a second shock to the machine.

## Picture

![A two-panel figure. Left: a radial feeder one-line diagram with a source, three relays in series at decreasing distances, and fault locations marked, above a time-current coordination plot on log-log axes showing three inverse-time curves stacked vertically, each shifted up by a coordination interval, with vertical lines at the fault-current values showing the operating times and the interval between adjacent curves marked. Right: a distance-relay reach diagram along a two-line path, showing zone one covering eighty percent of the first line instantaneously, zone two reaching one hundred twenty percent with a delay, and zone three reaching past the second line with a longer delay, plus a dashed line showing how infeed at the intermediate bus pushes the apparent impedance out and shrinks the zone-two coverage of the second line.](assets/04-04-fig1.svg)

Left: coordination as a stack of curves. Each upstream relay's curve sits one CTI above the one below it, at every current the downstream relay can see. Note that the curves converge at high current — that convergence is what limits how many relays can be coordinated in series.

Right: distance zones, and the infeed effect. Zone 2's nominal 120% reach shrinks in *effective* coverage of the next line as infeed grows, because the relay's apparent impedance is inflated.

## Worked examples

**Example 1 (coordinating three overcurrent relays).** A radial feeder has relays $R_1$ (substation), $R_2$ (mid-feeder), $R_3$ (far end), with CT ratios 600/5, 400/5 and 200/5 and pickups at their CT primary ratings. Standard-inverse curves ($k = 0.14$, $\alpha = 0.02$). Fault currents: $F_3$ (end of feeder) 2000 A, $F_2$ (mid) 3000 A, $F_1$ (substation) 5000 A. Use CTI = 0.30 s.

*Start at the far end.* $R_3$ has nothing downstream to coordinate with, so set it as fast as practical: $\mathrm{TMS}_3 = 0.05$.

$$M_3 = \frac{2000}{200} = 10, \qquad t_3 = 0.05\cdot\frac{0.14}{10^{0.02}-1} = 0.05\cdot\frac{0.14}{0.04713} = 0.1485\ \mathrm{s}.$$

*Set $R_2$ to back up $R_3$.* For the same fault $F_3$, $R_2$ must be 0.30 s slower:

$$t_2^{\rm required} = 0.1485+0.30 = 0.4485\ \mathrm{s}, \qquad M_2 = \frac{2000}{400} = 5,$$
$$\mathrm{TMS}_2 = \frac{0.4485\left(5^{0.02}-1\right)}{0.14} = \frac{0.4485(0.032713)}{0.14} = 0.1048 \ \to\ \textbf{0.10}.$$

$$t_2(F_3) = 0.10\cdot\frac{0.14}{0.032713} = 0.4280\ \mathrm{s} \quad\text{(margin }0.2795\text{ s)}.$$

*And $R_2$'s own fault.*

$$M_2 = \frac{3000}{400} = 7.5, \qquad t_2(F_2) = 0.10\cdot\frac{0.14}{7.5^{0.02}-1} = 0.10\cdot\frac{0.14}{0.041116} = 0.3405\ \mathrm{s}.$$

*Set $R_1$ to back up $R_2$* for fault $F_2$:

$$t_1^{\rm required} = 0.3405+0.30 = 0.6405\ \mathrm{s}, \qquad M_1 = \frac{3000}{600} = 5,$$
$$\mathrm{TMS}_1 = \frac{0.6405(0.032713)}{0.14} = 0.1496 \ \to\ \textbf{0.15}.$$

$$t_1(F_2) = 0.15\cdot\frac{0.14}{0.032713} = 0.6420\ \mathrm{s} \quad\text{(margin }0.3015\text{ s)}\ \checkmark.$$

*And $R_1$'s own fault.*

$$M_1 = \frac{5000}{600} = 8.33, \qquad t_1(F_1) = 0.15\cdot\frac{0.14}{8.33^{0.02}-1} = 0.4848\ \mathrm{s}.$$

*Check the remote-backup margin.* $R_1$ must also stay clear of $R_3$ for fault $F_3$:

$$t_1(F_3) = 0.15\cdot\frac{0.14}{10^{0.02}-1} = 0.4456\ \mathrm{s}\ \text{(vs. }R_3\text{'s }0.1485\text{)}\ \Rightarrow\ \text{margin }0.297\ \mathrm{s}\ \checkmark.$$

*The summary, and its uncomfortable implication.*

| Relay | Pickup | TMS | Own-zone fault | Time |
|---|---|---|---|---|
| $R_3$ | 200 A | 0.05 | 2000 A | 0.149 s |
| $R_2$ | 400 A | 0.10 | 3000 A | 0.341 s |
| $R_1$ | 600 A | 0.15 | 5000 A | 0.485 s |

**The relay closest to the source is the slowest**, even though it carries the largest current and protects the most valuable equipment. The accumulated CTIs pile up at exactly the wrong end.

This is the fundamental limitation of coordinated overcurrent protection, and it is why:

- **Transmission uses distance or differential protection**, where selectivity comes from measurement rather than from timing, so every relay can be fast.
- **Substation transformers get differential protection**, which is instantaneous and needs no coordination at all.
- **Coordinated chains are kept short.** Each additional level adds a CTI, and after four or five levels the substation-end clearing time exceeds what equipment and stability can tolerate.

Note also that a large 5000 A fault at the substation bus clearing in 0.485 s delivers $I^2t = (5000)^2(0.485) = 1.2\times10^{7}$ A²s of let-through energy — comfortably enough to damage a transformer. An instantaneous element (a 50-function set above the maximum downstream fault current) is normally added at the source to clear close-in faults in 1–2 cycles, restoring speed where coordination cannot.

**Example 2 (distance zones, and the infeed penalty).** A 100 km line ($Z_{L1} = 40\ \Omega$) runs from bus A to bus B, and a 60 km line ($Z_{L2} = 24\ \Omega$) continues from B to C. Set the zones for the relay at A, then examine the effect of generation at bus B.

*Zone 1: 80% of line AB, instantaneous.*

$$Z_{1} = 0.80(40) = 32\ \Omega.$$

*Zone 2: 120% of line AB, delayed 0.3 s.*

$$Z_{2} = 1.20(40) = 48\ \Omega.$$

*Check that Zone 2 does not overreach line BC's Zone 1.* The relay at B has a Zone 1 of $0.80(24) = 19.2\ \Omega$, so A's Zone 2 must stop short of

$$40+19.2 = 59.2\ \Omega.$$

$48 < 59.2$ ✓ — coordinated, with margin.

*Zone 3: line AB + 120% of line BC, delayed 1.5 s.*

$$Z_3 = 40+1.2(24) = 68.8\ \Omega \quad\text{(or, as often set, }1.2(40+24) = 76.8\ \Omega\text{)}.$$

*Now add infeed at bus B.* A generator at B contributes current to a fault on line BC that does not pass through the relay at A. For a fault 20% along line BC (true impedance from A: $40+0.2(24) = 44.8\ \Omega$, comfortably inside Zone 2 when there is no infeed):

| $I_{\rm infeed}/I_{\rm relay}$ | Apparent $Z$ | Inside Zone 2 (48 Ω)? |
|---|---|---|
| 0 | $40+1.0(4.8) = 44.8$ | **yes** |
| 0.5 | $40+1.5(4.8) = 47.2$ | **yes** (barely) |
| 1.0 | $40+2.0(4.8) = 49.6$ | **no** |
| 2.0 | $40+3.0(4.8) = 54.4$ | **no** |

*Effective Zone 2 coverage of line BC:*

$$\text{reach into BC} = \frac{48-40}{(1+r)(24)}\times100\%.$$

| $r$ | Coverage of line BC |
|---|---|
| 0 | 33.3% |
| 0.5 | 22.2% |
| 1.0 | 16.7% |
| 2.0 | 11.1% |

**With equal infeed, Zone 2's backup coverage of the next line halves.** With a strong generator at B ($r = 2$), it covers only 11% of line BC — the backup function is largely gone.

*Why this is acceptable, and where it is not.*

**Infeed always causes underreach, never overreach.** The relay sees a larger impedance than the truth, so it is *less* likely to trip — a loss of dependability, not of security. That asymmetry is what makes distance protection safe to set in the presence of infeed that varies with system conditions.

**But backup coverage is genuinely degraded**, and the fix is not simply to extend Zone 2. Setting Zone 2 to reach past the infeed condition would overreach badly when the generator at B is *offline* and $r = 0$ — and generators go offline routinely. The relay must be secure for the *minimum* infeed and is therefore under-reaching for the maximum.

**The real fix is a pilot scheme.** Communicating relays at both ends of line BC trip instantaneously for any fault on BC, making the relay at A's backup role less critical. Breaker-failure protection at bus B provides the local backup that Zone 3 cannot reliably supply.

*The general lesson.* **Every distance setting is a compromise across the range of system conditions**, not a single calculation. The relay engineer must check the setting against maximum and minimum generation, all credible line outages, and both ends of the line — and accept that no single setting is optimal for all of them.

## Watch out

- **You might set relay values in primary amperes.** Relay settings are secondary; divide by the CTR.
- **You might coordinate at one fault current only.** The margin must hold across the whole range the downstream relay sees, and the curves converge at high current — where the margin is smallest.
- **You might forget CT saturation.** A saturated CT under-reports, which can delay or prevent tripping and can create false differential current.
- **You might set Zone 1 to 100%.** Reach errors of 10–20% would cause overreach into the next line and non-selective tripping.
- **You might extend Zone 2 to overcome infeed.** It overreaches when the infeed source is out of service.
- **You might expect differential protection to need coordination.** It does not — that is its point. But it needs matched CT ratios (or relay tap compensation) and a restraint slope.
- **You might autoreclose on a cable or transformer fault.** Those are never transient; reclosing delivers a second destructive fault.

## One-liner

> Overcurrent is cheap but its coordination makes the source-end relay slowest; differential is instantaneous and selective but needs CTs at every boundary; distance measures $V/I$ so its reach is independent of fault level — and infeed always makes a remote fault look further away than it is.

## Problems

**P1 (🟢)** A relay has an 800/5 CT, a pickup of 5 A secondary, and a standard-inverse curve. (a) Find the CT ratio and the primary pickup current. (b) Find the operating time for a 2400 A fault at TMS = 0.1 and TMS = 0.2. (c) Find the operating time for a 4000 A fault at TMS = 0.1, and comment on the ratio.

**P2 (🟡)** Relay $B$ has a 300/5 CT, pickup at 300 A primary, TMS = 0.08, standard inverse. A fault at the end of its feeder gives 1800 A. Relay $A$ is upstream with a 500/5 CT and pickup at 500 A primary. Use CTI = 0.35 s. (a) Find relay $B$'s operating time. (b) Find the TMS for relay $A$ (round to two decimals) and verify the margin. (c) Find relay $A$'s operating time for a 3600 A fault in its own zone. (d) Comment on whether the substation clearing time is acceptable.

**P3 (🔴)** A 40 MVA, 230/34.5 kV, Δ–Y$_g$ transformer has differential protection with a 150/5 CT on the high side and an 800/5 CT on the low side. (a) Find the rated currents on both sides and the CT secondary currents at rated load. (b) Find the percentage mismatch and state how a modern relay handles it. (c) A through-fault at $10\times$ rated occurs with a 10% CT error, and another at $20\times$ with a 20% error (CT saturation). Compute $I_{\rm op}$, $I_{\rm rest}$ and the apparent slope in each case. (d) Recommend a slope setting and explain what else it must accommodate for a transformer specifically.

<details>
<summary>Solutions</summary>

**P1** (a) $$\mathrm{CTR} = \frac{800}{5} = 160, \qquad I_s^{\rm primary} = 5(160) = 800\ \mathrm{A}.$$

(b) $$M = \frac{2400}{800} = 3, \qquad 3^{0.02} = e^{0.02\ln3} = e^{0.021972} = 1.022215,$$

$$t = \mathrm{TMS}\cdot\frac{0.14}{0.022215} = \mathrm{TMS}(6.3020).$$

$$\mathrm{TMS} = 0.1: \ t = 0.6302\ \mathrm{s}, \qquad \mathrm{TMS} = 0.2: \ t = 1.2604\ \mathrm{s}.$$

**TMS scales the time linearly** — it is a pure multiplier on the curve, which is exactly what makes coordination a matter of stacking curves vertically on a log-log plot.

(c) $$M = \frac{4000}{800} = 5, \qquad 5^{0.02} = 1.032713, \qquad t = 0.1\cdot\frac{0.14}{0.032713} = 0.4280\ \mathrm{s}.$$

*The ratio.* Current rose by $4000/2400 = 1.67\times$; time fell by only $0.6302/0.4280 = 1.47\times$.

**The standard-inverse curve is remarkably flat.** With $\alpha = 0.02$, the time depends on current only through $M^{0.02}$ — a 67% increase in current buys a 32% reduction in time. That gentle slope is what allows many relays to be coordinated in series without the curves crossing, but it also means the curve discriminates poorly between a close-in fault and a remote one.

Compare an extremely-inverse curve ($\alpha = 2$): from $M=3$ to $M=5$, the time would fall by a factor of $(25-1)/(9-1) = 3.0$ — far sharper discrimination, at the cost of being harder to coordinate over many levels. That trade-off is why curve *shape* is a design choice, not a default.

**P2** (a) $$M_B = \frac{1800}{300} = 6, \qquad 6^{0.02} = e^{0.02\ln6} = e^{0.035835} = 1.036485,$$
$$t_B = 0.08\cdot\frac{0.14}{0.036485} = 0.3070\ \mathrm{s}.$$

(b) $$t_A^{\rm required} = 0.3070+0.35 = 0.6570\ \mathrm{s}, \qquad M_A = \frac{1800}{500} = 3.6,$$
$$3.6^{0.02} = e^{0.02\ln3.6} = e^{0.025614} = 1.025945,$$
$$\mathrm{TMS}_A = \frac{0.6570(0.025945)}{0.14} = 0.1218 \ \to\ \textbf{0.12}.$$

*Verify:*

$$t_A(1800\ \mathrm{A}) = 0.12\cdot\frac{0.14}{0.025945} = 0.6474\ \mathrm{s},$$
$$\text{margin} = 0.6474-0.3070 = 0.3404\ \mathrm{s} \geq 0.35?\ \textbf{Marginally short.}$$

The rounding down from 0.1218 to 0.12 cost 0.010 s, leaving 0.340 s against a required 0.35 s. **Round up instead**, to TMS = 0.13:

$$t_A = 0.13\cdot\frac{0.14}{0.025945} = 0.7014\ \mathrm{s}, \qquad \text{margin} = 0.394\ \mathrm{s}\ \checkmark.$$

*This is a real and frequent trap.* Relay TMS settings are quantized (often to 0.01 or to discrete lever positions), and rounding **must always be upward** on the upstream relay. Rounding down erodes the coordination margin, and the margin exists precisely to cover breaker-time variation and relay overtravel — the things that make coordination fail in the field rather than on paper.

(c) $$M_A = \frac{3600}{500} = 7.2, \qquad 7.2^{0.02} = e^{0.02\ln7.2} = e^{0.039486} = 1.040276,$$
$$t_A = 0.13\cdot\frac{0.14}{0.040276} = 0.4519\ \mathrm{s}.$$

(d) **Marginally acceptable, and worth improving.**

*In its favour:* 0.45 s is within typical distribution practice, where clearing times of 0.5–1.0 s are common and equipment is rated for it. The $I^2t$ let-through is $(3600)^2(0.452) = 5.9\times10^{6}$ A²s, which most distribution transformers survive.

*Against it:*

**Voltage sag duration.** A 0.45 s fault depresses voltage across the substation for 27 cycles. Industrial customers with adjustable-speed drives or sensitive process control will trip out at a few cycles — the fault clears one customer's problem and creates twenty others'. Voltage-sag complaints are the most common power-quality issue on distribution, and clearing time is the main lever.

**Motor stalling.** Induction motors decelerate during a deep sag and draw heavy reacceleration current on recovery, which can cause a secondary voltage collapse.

**Only two levels are coordinated here.** Adding a third downstream device (a fuse or recloser) would push relay $A$ past 0.75 s, which is not acceptable.

*The remedy.* Add an **instantaneous element (50)** at relay $A$, set above the maximum fault current that relay $B$ can see (1800 A) with margin — say 2500 A primary. Faults above that must be between $A$ and $B$, so tripping instantaneously is selective by construction. That gives 1–2 cycle clearing for the 3600 A close-in fault while preserving the coordinated inverse-time curve as backup for everything downstream.

**This combination — instantaneous for close-in faults, inverse-time for coordination — is standard practice**, and it directly addresses the "source-end relay is slowest" problem of Example 1.

**P3** (a) $$I_H = \frac{40\times10^{6}}{\sqrt3(230\times10^{3})} = 100.41\ \mathrm{A}, \qquad I_L = \frac{40\times10^{6}}{\sqrt3(34.5\times10^{3})} = 669.39\ \mathrm{A}.$$

$$i_H = \frac{100.41}{150/5} = \frac{100.41}{30} = 3.347\ \mathrm{A}, \qquad i_L = \frac{669.39}{800/5} = \frac{669.39}{160} = 4.184\ \mathrm{A}.$$

(b) $$\text{mismatch} = \frac{|4.184-3.347|}{(4.184+3.347)/2} = \frac{0.837}{3.766} = 22.2\%.$$

**That is far too large to ignore** — a 22% standing differential current at rated load would trip any reasonable setting.

*How it is handled.* Two mechanisms, both standard:

**Relay tap settings (ratio matching).** The relay is given a tap ratio for each input so the compensated currents are equal at rated load. Here the required ratio is $4.184/3.347 = 1.250$, so the high-side input is scaled up by 1.25 (or the low-side down by 0.80). Electromechanical relays did this with physical taps; digital relays do it in software with arbitrary precision, so the residual mismatch after compensation is essentially zero.

**Phase-shift and zero-sequence compensation.** A Δ–Y$_g$ transformer introduces a $30°$ phase shift ([2.3](02-03-three-phase-transformer-connections.md)) and its wye side is a zero-sequence source. Historically this was corrected by connecting the CTs in the *opposite* configuration (wye CTs on the delta winding and delta CTs on the wye winding), which both removed the $30°$ shift and trapped zero-sequence current so external ground faults would not cause false differential. Digital relays apply an equivalent matrix transformation in software, and explicitly subtract $I_0$.

**Forgetting zero-sequence compensation is the classic transformer-differential misapplication** — the relay behaves perfectly until the first external ground fault, then trips the transformer out.

(c) *Case 1: $10\times$ rated, 10% CT error.*

$$i_H = 10(3.347) = 33.47\ \mathrm{A}, \qquad i_L = 10(3.347)(1.10) = 36.82\ \mathrm{A}$$

(using tap-compensated values, so both would be 33.47 A with perfect CTs).

$$I_{\rm op} = |36.82-33.47| = 3.35\ \mathrm{A}, \qquad I_{\rm rest} = \frac{33.47+36.82}{2} = 35.15\ \mathrm{A},$$
$$\text{apparent slope} = \frac{3.35}{35.15} = 9.5\%.$$

*Case 2: $20\times$ rated, 20% CT error.*

$$i_H = 66.94, \qquad i_L = 66.94(1.20) = 80.33,$$
$$I_{\rm op} = 13.39, \qquad I_{\rm rest} = 73.64, \qquad \text{apparent slope} = \frac{13.39}{73.64} = 18.2\%.$$

*Note the pattern:* the apparent slope equals the CT error expressed as a fraction of the *average*, i.e. $2\varepsilon/(2+\varepsilon)$. It is **independent of the fault magnitude** for a fixed percentage error — which is exactly why a *percentage*-restraint characteristic is the right shape. A fixed-pickup relay would need a threshold above 13.4 A to be secure at $20\times$, and would then be blind to internal faults below that.

(d) **Recommended slope: dual-slope, 25% below about $5\times$ rated, rising to 50% above.**

*What the slope must cover, in order of size:*

**CT ratio error and saturation.** Class C CTs are guaranteed to 10% error up to 20× rated *into a specified burden*, but a saturating CT can lose far more, and the two CTs saturate differently because the DC offset ([4.1](04-01-symmetrical-faults.md)) and burden differ on each side. This is the dominant term at high through-fault current, and it is why the second slope is steep.

**Load tap changer range.** A transformer with an LTC of $\pm10\%$ changes its turns ratio as it regulates, producing a genuine current mismatch of up to 10% that is not an error at all — the relay must simply tolerate it.

**Excitation current.** The transformer's own magnetizing current is a real difference between the two sides. It is under 1% of rated in steady state and negligible against the other terms.

*What the slope does **not** cover, and must be handled separately:*

**Inrush.** Energizing an unloaded transformer draws a magnetizing inrush that can reach 8–12 times rated on one side only — a huge apparent differential current with no fault present. No slope setting can distinguish it by magnitude. It is blocked by **second-harmonic restraint**: inrush is rich in second harmonic (15–20% of fundamental) while fault current is not, so the relay blocks when the second-harmonic ratio exceeds about 15%.

**Overexcitation.** Sustained overvoltage drives the core into saturation and produces a large exciting current rich in **fifth** harmonic. A separate fifth-harmonic restraint blocks that case.

*The complete picture.* A transformer differential relay is therefore not one threshold but a set of coordinated decisions: ratio and phase compensation, zero-sequence removal, dual-slope percentage restraint, second-harmonic inrush blocking, and fifth-harmonic overexcitation blocking. Each element exists because a specific physical phenomenon would otherwise cause a false trip — and a relay is only as good as the phenomena its designer anticipated.

</details>

## Flashback

**From Lesson 4.3 (Sequence networks and unsymmetrical faults):** At a bus, $Z_1 = Z_2 = j0.25$ pu and $Z_0 = j0.15$ pu on a 100 MVA, 138 kV base. (a) Find the SLG fault current in pu and amperes. (b) Find the residual current a ground relay would measure through a 600/5 CT.

<details>
<summary>Solution</summary>

(a) $$I_0 = I_1 = I_2 = \frac{1.0}{j(0.15+0.25+0.25)} = \frac{1.0}{j0.65} = -j1.538\ \mathrm{pu},$$
$$I_f = 3I_0 = 4.615\ \mathrm{pu}.$$

$$I_{base} = \frac{100\times10^{6}}{\sqrt3(138\times10^{3})} = 418.4\ \mathrm{A}, \qquad I_f = 4.615(418.4) = 1931\ \mathrm{A}.$$

(b) The residual connection of three CTs measures $I_a+I_b+I_c = 3I_0 = I_f$ (since $I_b = I_c = 0$ for an SLG fault), so the primary residual current is the full 1931 A:

$$i_{\rm residual} = \frac{1931}{600/5} = \frac{1931}{120} = 16.1\ \mathrm{A\ secondary}.$$

*Setting the ground relay.* A typical ground pickup is 0.5–1.0 A secondary — 60 to 120 A primary, or 10–20% of the CT rating. Against 16.1 A of fault current, that is a margin of 16 to 32 times pickup, so this fault is detected decisively.

*The important part is what it means for sensitivity.* At a 0.5 A secondary pickup, the relay responds to 60 A of primary ground current — around 14% of the CT rating and only 3% of this bolted fault. That sensitivity is achievable **only** because residual current should be zero in healthy operation, so there is no load current to discriminate against.

Compare the phase overcurrent relays on the same CTs, which must be set above maximum load — 600 A or more. **The ground relay is ten times more sensitive than the phase relays on the identical CTs**, purely because of what it measures. That is the practical payoff of the symmetrical-component decomposition of [4.2](04-02-symmetrical-components.md): a quantity that does not exist in normal operation makes an ideal fault detector.

</details>

## Connections

- **Backward:** the fault currents relays must detect are [4.1](04-01-symmetrical-faults.md)'s and [4.3](04-03-sequence-networks-unsymmetrical-faults.md)'s; the residual $3I_0$ measurement is [4.2](04-02-symmetrical-components.md)'s; the transformer phase shift the differential relay must compensate is [2.3](02-03-three-phase-transformer-connections.md)'s.
- **Forward:** [4.6](04-06-transient-stability-equal-area.md) shows that clearing time is a stability constraint — protection speed determines whether the generators stay in step.
- **Sideways:** coordination is a scheduling problem with precedence constraints, of the kind [`operations-research`](../../operations-research/syllabus.md) formalizes; the dependability-versus-security trade-off is the false-negative/false-positive trade-off of hypothesis testing in [`probability-theory`](../../probability-theory/syllabus.md), with the coordination margin playing the role of a decision threshold.
