# Geology · Lesson 2.7: Earthquakes & Seismic Hazard

> ⏱ ~15 min · Module 2: Plate Tectonics & the Deforming Crust · Builds on: [2.6](02-06-mountain-building.md), [2.4](02-04-how-rock-deforms.md), [2.5](02-05-folds-faults-structures.md) · Unlocks: [2.8](02-08-volcanoes-volcanic-hazards.md) (volcanoes & volcanic hazards)

## Why this matters

An earthquake is not an event in the ground. **It is a fault slipping**, and everything else — the shaking, the tsunami, the collapsed building — is a downstream consequence of one geometric fact: how much rock moved, over how large an area, how fast.

That framing is what makes the subject predictive. [2.4](02-04-how-rock-deforms.md) showed that rock stores strain elastically before it fails; [2.5](02-05-folds-faults-structures.md) gave the fault geometries. This lesson closes the loop: **a fault is a stress-relief valve with a duty cycle**, and once you know the slip rate and the typical slip per event you can say roughly how often it goes off, how big the event will be, and — the part that actually saves lives — why two places the same distance from it will experience completely different earthquakes.

The seismic *waves* belong to [`geophysics`](../../geophysics/syllabus.md) (1.2–1.6 own ray theory, travel-time inversion, tomography and the moment tensor). What is owned here is the fault as a physical object, the shaking at the surface, and the difference between hazard and risk — which is the difference between a fact about the Earth and a decision about buildings.

## The idea

**Elastic rebound.** Two blocks of crust slide past each other at a few centimetres a year. The fault between them is *locked* by friction. The plates keep moving anyway, so the rock on either side of the locked patch bends — storing elastic strain energy exactly as a loaded spring does ([materials-science 4.1](../../materials-science/lessons/04-01-elastic-behavior-stress-strain.md)). Eventually the shear stress on the fault exceeds its frictional strength, the patch lets go, and the bent rock snaps back to its unstrained shape, dragging the fault surfaces past each other by metres in seconds.

**The energy was never stored on the fault. It was stored in the surrounding rock volume**, and the fault is only where it got out. This is why a fence line surveyed across a locked fault is *bent* before an earthquake and *offset* afterwards.

Three consequences follow immediately, and each is quantitative:

1. **Slip per event roughly equals the accumulated deficit**, so the recurrence interval is
   $$T \approx \frac{d}{v}$$
   where $d$ is the characteristic slip per event and $v$ the long-term slip rate. For the San Andreas near Los Angeles, $v \approx 35\ \text{mm/yr}$ and $d \approx 4.5\ \text{m}$ give $T \approx 4500/35 = 129$ years. **This is an average, not a schedule** — the distinction is the whole content of the "Watch out" section.
2. **The size of the earthquake is set by how much of the fault lets go**, not by how "strong" the stress was. A patch $10\ \text{km}$ across gives a magnitude 6; a $1000\ \text{km}$ megathrust gives a magnitude 9. This is why subduction zones — the only faults long and wide enough — monopolize the largest events.
3. **Slip redistributes stress rather than removing it.** The ruptured patch is relaxed; its edges are *more* loaded than before. That is what an aftershock sequence is.

**Focus (or hypocenter)** is the point at depth where rupture nucleates; **epicenter** is the point on the surface directly above it. Rupture then propagates outward across the fault plane at $2$–$3\ \text{km/s}$, so a great earthquake takes minutes, not an instant.

**Aftershocks obey a clean power law — Omori's law:**
$$n(t) = \frac{K}{(t + c)^{p}}, \qquad p \approx 1$$

*In words: the aftershock rate decays as one over elapsed time.* With $p = 1$ the number of aftershocks between $t_1$ and $t_2$ is $K\ln(t_2/t_1)$, which has a memorable consequence: **there are as many aftershocks between days 10 and 100 as between days 1 and 10.** The sequence never really ends; it just thins logarithmically. And Båth's law — the largest aftershock averages about 1.2 magnitude units below the mainshock — is an empirical regularity with a large scatter, not a guarantee.

## The formal version

**Seismic moment** is the physical measure of an earthquake's size:

$$M_0 = \mu \, A \, \bar{d}$$

where $\mu$ is the shear modulus of the rock (about $3\times10^{10}\ \text{Pa}$ in the crust), $A$ the ruptured fault area in $\text{m}^2$, and $\bar{d}$ the average slip in metres. *In words: moment is rock stiffness times how much fault moved times how far.* Its units are newton-metres. The full tensor version — which also recovers the fault's orientation and slip direction — is [`geophysics`](../../geophysics/syllabus.md) 1.6's; the scalar is all that is needed here.

**Moment magnitude** is just $M_0$ on a log scale, tuned to agree with the older scales in the middle of their range:

$$\boxed{\;M_w = \tfrac{2}{3}\left(\log_{10} M_0 - 9.1\right), \qquad \text{equivalently } \log_{10} M_0 = 1.5 M_w + 9.1\;}$$

**Radiated energy** follows an empirical relation of the same slope ($E_s$ in joules):

$$\log_{10} E_s = 1.5 M + 4.8$$

**Derive the famous factor rather than quoting it.** For two events differing by $\Delta M$:

$$\frac{E_2}{E_1} = 10^{1.5\,\Delta M} \quad\Longrightarrow\quad \Delta M = 1 \;\Rightarrow\; 10^{1.5} = 31.6$$

Magnitude was originally defined from the logarithm of ground-motion *amplitude*, so one unit is a factor of 10 in shaking — but energy scales with the $3/2$ power, giving **a factor of about 32 in energy per magnitude unit, and about 1000 per two units.**

**Why the old Richter scale saturates and moment magnitude does not.** Richter's $M_L$ was the log of the peak amplitude on a particular seismometer with a natural period near $1\ \text{s}$. Once a rupture lasts longer than a second, extending it further adds energy at *longer* periods that the instrument cannot see, so $M_L$ stops growing near 7. **Moment magnitude has no such ceiling because $A$ and $\bar{d}$ have none.** When you read "magnitude 9.1", it is $M_w$, not Richter — Richter cannot count that high.

**Rupture area scales with magnitude.** Combining self-similar rupture with the moment relation gives the working rule

$$\log_{10} A \approx M_w - 4.0 \qquad (A \text{ in } \text{km}^2)$$

so $M_w\,6 \to 100\ \text{km}^2$, $M_w\,7 \to 1000\ \text{km}^2$, $M_w\,9 \to 10^5\ \text{km}^2$. Since the seismogenic layer is only $\sim15\ \text{km}$ thick ([2.4](02-04-how-rock-deforms.md)'s brittle–ductile transition sets that), area grows almost entirely by getting *longer*. **A magnitude 9 needs about a thousand kilometres of fault, which is why only subduction megathrusts produce them.**

**Gutenberg–Richter: how often, as a function of how big.**

$$\log_{10} N = a - bM, \qquad b \approx 1$$

*In words: each magnitude unit up, ten times fewer events.* Combine that with the energy law and something non-obvious falls out. The energy released per magnitude bin goes as

$$N(M)\,E(M) \;\propto\; 10^{-M} \times 10^{1.5M} = 10^{0.5M}$$

which *grows* with magnitude. Summing every bin below the largest one gives a geometric series with ratio $10^{-0.5} = 0.316$, totalling $0.316/(1-0.316) = 0.46$ of the top bin. **Every smaller earthquake in a region's catalogue, combined, releases less than half the energy of its single largest event.** The small ones are not relieving anything.

**Magnitude versus intensity — the most useful public-facing distinction in the lesson.** Magnitude is **one number per earthquake**, a property of the source. **Modified Mercalli intensity** (MMI, I to XII) is **one number per place**, assigned from what was felt and what broke. It is ordinal, not a measurement. A single $M_w\,6.9$ produces an entire *map* of intensities, and the shape of that map is set by:

| Control | Effect on shaking |
|---|---|
| Magnitude | more moment, more energy, longer duration |
| Distance $R$ | peak acceleration falls roughly as $1/R$ near the source, faster far away |
| Focal depth | deep focus spreads the energy over a wider area and *reduces* peak shaking |
| **Local site conditions** | **can amplify motion several-fold at one site relative to its neighbour** |
| Rupture directivity | motion is focused ahead of a propagating rupture |

**Site amplification, computed.** Seismic energy flux is conserved as a wave passes from stiff rock into soft sediment, so the amplitude ratio is set by the ratio of **impedances** $Z = \rho V_s$ ($\rho$ = density, $V_s$ = shear-wave speed):

$$\frac{A_{\text{soft}}}{A_{\text{rock}}} \approx \sqrt{\frac{\rho_{\text{rock}} V_{s,\text{rock}}}{\rho_{\text{soft}} V_{s,\text{soft}}}}$$

*In words: soft, slow ground has to move further to carry the same energy.* And the sediment column has a **resonant period** $T = 4H/V_s$ for a layer of thickness $H$ — so a basin does not amplify everything equally, it amplifies the period that matches its own, and destroys the buildings whose natural period matches that.

**Liquefaction** is [2.4](02-04-how-rock-deforms.md)'s effective-stress relation cashed in. Strength on a granular contact is $\tau = \sigma' \tan\phi$ with $\sigma' = \sigma - u$, where $\sigma$ is total normal stress, $u$ pore-water pressure and $\phi$ the friction angle. Shaking makes loose saturated sand try to compact; the water cannot drain in the few seconds available, so $u$ rises. When $u \to \sigma$, $\sigma' \to 0$ and **the sand has no shear strength at all** — it behaves as a dense liquid. Buildings settle and tip, buried tanks and pipes float upward, and flat ground spreads laterally toward any free face.

## Picture

![Two panels. The upper panel plots displacement across a fault against time: a straight dashed line for steady far-field plate motion, and a red staircase for slip on the fault that lags below it and jumps up to meet it at each earthquake, with the vertical gap labelled as stored elastic strain and the spacing between jumps labelled as the recurrence interval. Beside it, three map views show a fence line crossing the fault, first straight while the fault is locked, then bent as strain accumulates, then broken and offset after slip. The lower panel plots radiated energy against moment magnitude on a logarithmic axis, a straight line rising three decades per two magnitude units, with real events marked from magnitude 5 up to Chile 1960, annotated with the rule that one magnitude unit is ten times the shaking and thirty-two times the energy. Beside it a bar chart shows Mercalli intensity at four sites from one earthquake: intensity eight at ten kilometres on rock, six at thirty-five kilometres, five at sixty kilometres, and nine at sixty kilometres on a soft basin.](assets/02-07-fig1.svg)

## Worked examples

**Example 1 (mechanical — how big is a magnitude 7.5?).** A continental strike-slip fault ruptures over a length $L = 150\ \text{km}$ and a depth extent $W = 15\ \text{km}$ (the full seismogenic layer). Take $\mu = 3\times10^{10}\ \text{Pa}$. (a) What is the average slip if $M_w = 7.5$? (b) Cross-check against the area–magnitude rule. (c) What surface offset would a road crossing the fault show?

(a) From the magnitude relation,

$$\log_{10} M_0 = 1.5(7.5) + 9.1 = 11.25 + 9.1 = 20.35 \;\Longrightarrow\; M_0 = 2.24\times10^{20}\ \text{N}\,\text{m}.$$

$$A = L W = (1.5\times10^{5})(1.5\times10^{4}) = 2.25\times10^{9}\ \text{m}^2 .$$

$$\bar{d} = \frac{M_0}{\mu A} = \frac{2.24\times10^{20}}{(3\times10^{10})(2.25\times10^{9})} = \frac{2.24\times10^{20}}{6.75\times10^{19}} = \mathbf{3.3\ \text{m}}.$$

(b) The scaling rule predicts $A = 10^{7.5-4.0} = 10^{3.5} = 3160\ \text{km}^2$ against our $2250\ \text{km}^2$ — the same to within 40 percent, which for an empirical scaling law across seven orders of magnitude is agreement.

(c) **About 3 metres, offsetting everything the fault crosses** — roads, fences, orchard rows, stream channels. Offset stream channels are exactly how palaeoseismologists reconstruct slip in prehistoric events, and how the slip-per-event $d$ in $T \approx d/v$ is measured in the first place.

**A worthwhile sanity check on the recurrence:** if this fault slips at $20\ \text{mm/yr}$, $T \approx 3300/20 = 165$ years.

**Example 2 (why you'd care — why Mexico City was destroyed from 350 km away).** The 1985 Michoacán earthquake ($M_w\,8.0$) had its epicentre on the Pacific coast. Coastal towns close to the rupture were damaged; Mexico City, roughly $350\ \text{km}$ away, lost several hundred buildings. The city centre sits on $H \approx 30\ \text{m}$ of former lake-bed clay with $\rho \approx 1300\ \text{kg/m}^3$ and $V_s \approx 60\ \text{m/s}$, over rock with $\rho \approx 2500\ \text{kg/m}^3$ and $V_s \approx 1000\ \text{m/s}$. (a) Estimate the amplification. (b) Estimate the resonant period. (c) Explain the damage pattern.

(a) Impedances:

$$Z_{\text{rock}} = (2500)(1000) = 2.5\times10^{6}, \qquad Z_{\text{clay}} = (1300)(60) = 7.8\times10^{4}\ \ (\text{SI}).$$

$$\frac{A_{\text{clay}}}{A_{\text{rock}}} \approx \sqrt{\frac{2.5\times10^{6}}{7.8\times10^{4}}} = \sqrt{32.1} = \mathbf{5.7\times}.$$

(b) $$T = \frac{4H}{V_s} = \frac{4(30)}{60} = \mathbf{2.0\ \text{s}}.$$

(c) **The lake bed rang at a period of about 2 seconds, and it rang for over a minute.** A rough rule for a framed building is $T \approx 0.1N$ for $N$ storeys, so structures of roughly 10 to 20 storeys were driven at resonance while shorter and much taller neighbours on the same block were not. The observed damage was concentrated almost exactly in that height band, which is as clean a confirmation of a physical prediction as hazard science offers.

**The general lesson, and it is the operational one: distance from the epicentre is a poor predictor of shaking.** Two sites 500 metres apart, equidistant from the source, can differ by three intensity units because one is on rock and one is on fill. This is why modern hazard maps are built on measured $V_s$ in the top 30 metres rather than on distance alone, and why microzonation is worth its cost.

## Watch out

- **You might say "it was a magnitude 8 here."** Magnitude is a property of the *source* — one number for the whole earthquake. What varies from place to place is **intensity**. "Magnitude 8, intensity VII at my house" is the correct sentence.
- **You might think aftershocks relieve pressure and make a bigger event less likely.** They do the opposite: an aftershock sequence *raises* the short-term probability of a larger event, because slip loads the edges of the ruptured patch. Roughly 5 percent of earthquakes are followed by something bigger — at which point the "mainshock" is retroactively demoted to a foreshock. **The 2023 Türkiye sequence had a second rupture of $M_w\,7.5$ nine hours after the $M_w\,7.8$.** And per the Gutenberg–Richter arithmetic above, small events cannot drain a region's energy budget even in principle.
- **You might read $T \approx d/v$ as a timetable.** It is a long-run average over a fault that stores and releases irregularly, and a fault "overdue" by the average is not thereby more dangerous this year in any simple way. The 1985 Parkfield prediction — a well-founded forecast of the next event by 1993, on the most regularly behaved segment known — failed; the earthquake came in 2004. **Recurrence intervals are statistics, not clocks.**
- **You might expect deep earthquakes to be worse.** Depth spreads the energy over a larger surface area, so a deep $M_w\,7$ is often barely damaging while a shallow $M_w\,6$ levels a town. Depth and distance both matter more than magnitude for a single site.
- **You might picture liquefaction as the ground opening and swallowing things.** It is the opposite of opening: the ground loses strength and behaves as a heavy fluid, so dense things sink and buoyant things (buried tanks, sewer manholes) rise. Fissures form, but nothing is swallowed by a closing crack.
- **You might expect every large offshore earthquake to make a tsunami.** Tsunamis need **vertical** displacement of the seafloor, so thrust (and normal) faulting generates them and pure strike-slip largely does not — which is why the megathrusts are the tsunami sources and the oceanic transforms are not.

## One-liner

> An earthquake is a locked fault paying back the elastic strain the plates spent years storing in the surrounding rock; its magnitude is fixed by rupture area times slip, its intensity is fixed by where you happen to be standing, and its risk is fixed by what was built there.

## Problems

**P1 (🟢)** A region records one $M_w\,5.4$ earthquake per year, and Gutenberg–Richter holds with $b = 1$. (a) How much larger is the ground motion in an $M_w\,7.4$ than in an $M_w\,5.4$, and how much larger is the energy? (b) How often should the region expect an $M_w\,7.4$? (c) Over one such recurrence interval, compare the total energy released by the $M_w\,5.4$ events with the energy of the single $M_w\,7.4$, and say what this implies for the claim that frequent small earthquakes "relieve stress."

**P2 (🟡 — inference from data)** A shallow $M_w\,6.9$ earthquake is recorded by four strong-motion stations. All four are on the same side of the fault.

| Station | Distance (km) | Ground | Peak acceleration (g) | Observed MMI |
|---|---|---|---|---|
| A | 12 | rock | 0.28 | VIII |
| B | 40 | rock | 0.09 | VI |
| C | 42 | rock | 0.08 | VI |
| D | 45 | saturated bay-mud fill | 0.26 | IX |

(a) Do stations A, B and C follow a simple $1/R$ decay? Show the check. (b) Station D is the farthest station and shook hardest. Quantify the anomaly and name its cause. (c) The mud at D is $25\ \text{m}$ thick with $\rho = 1500\ \text{kg/m}^3$ and $V_s = 130\ \text{m/s}$; the rock has $\rho = 2400\ \text{kg/m}^3$ and $V_s = 760\ \text{m/s}$. Show that the physics predicts what was observed, and state which buildings at D you would expect to have failed, and what second hazard the word "saturated" implies.

**P3 (🔴 — bridges to hazard engineering)** An $M_w\,8.2$ megathrust ruptures offshore. A coastal city lies $120\ \text{km}$ from the epicentre; the seafloor between them is $3500\ \text{m}$ deep. Crustal wave speeds are $V_p = 6.0\ \text{km/s}$ and $V_s = 3.5\ \text{km/s}$; take $g = 9.81\ \text{m/s}^2$ and $\mu = 3\times10^{10}\ \text{Pa}$.

(a) Estimate the rupture area and the implied average slip. (b) The nearest seismic station is $20\ \text{km}$ from the epicentre and the warning system needs $6\ \text{s}$ to detect, locate and transmit. How many seconds of warning does the city get before strong shaking, and what is the radius of the zone that gets no warning at all? (c) How long until the tsunami arrives, and by what factor does the wave grow as it shoals from $3500\ \text{m}$ to $10\ \text{m}$ depth? (d) The fault segment has a mean recurrence interval of 220 years. Treating events as a Poisson process, what is the probability of at least one such earthquake in the next 50 years?

<details>
<summary>Solutions</summary>

**P1 (a)** $\Delta M = 2.0$.

$$\text{amplitude ratio} = 10^{\Delta M} = 10^{2} = \mathbf{100\times}.$$

$$\text{energy ratio} = 10^{1.5\Delta M} = 10^{3} = \mathbf{1000\times}.$$

(Check directly: $E_{7.4} = 10^{1.5(7.4)+4.8} = 10^{15.9} = 7.9\times10^{15}\ \text{J}$; $E_{5.4} = 10^{12.9} = 7.9\times10^{12}\ \text{J}$; ratio $10^{3}$. For scale, $7.9\times10^{15}\ \text{J}$ is about 1.9 megatons of TNT.)

**(b)** With $b = 1$, two magnitude units up is $10^{-2}$ in rate:

$$N(M \ge 7.4) = 1 \times 10^{-2}\ \text{per year} = \textbf{one per 100 years}.$$

**(c)** In 100 years the $M_w\,5.4$ events release $100 \times 7.9\times10^{12} = 7.9\times10^{14}\ \text{J}$. The single $M_w\,7.4$ releases $7.9\times10^{15}\ \text{J}$ — **ten times more, in about 20 seconds, than a century of the small ones combined.**

**The claim is therefore false, and quantitatively so.** It fails for the reason derived in the lesson: frequency falls by $10^{-M}$ while energy rises by $10^{1.5M}$, so energy per bin scales as $10^{0.5M}$ and the budget is dominated by the largest events. **You would need 1000 magnitude-5.4 events to substitute for one magnitude-7.4, and the region produces one per year.** No accumulation of small earthquakes protects anyone from the large one.

**P2 (a)** Take A as the reference and scale by $1/R$:

$$\text{predicted at B} = 0.28 \times \frac{12}{40} = 0.084\ \text{g} \quad (\text{observed } 0.09)$$

$$\text{predicted at C} = 0.28 \times \frac{12}{42} = 0.080\ \text{g} \quad (\text{observed } 0.08)$$

**Yes — the three rock sites follow $1/R$ to within a few percent.** That is the expected near-field geometric spreading, and it establishes a baseline against which anything else is an anomaly.

**(b)** $$\text{predicted at D} = 0.28 \times \frac{12}{45} = 0.075\ \text{g}, \qquad \text{observed } 0.26\ \text{g}.$$

$$\text{amplification} = \frac{0.26}{0.075} = \mathbf{3.5\times}.$$

**The cause is a site effect: soft, low-velocity sediment amplifying the incoming motion.** Distance did what distance does; the ground under station D undid it.

**(c)** Impedances:

$$Z_{\text{rock}} = (2400)(760) = 1.82\times10^{6}, \qquad Z_{\text{mud}} = (1500)(130) = 1.95\times10^{5}.$$

$$\frac{A_{\text{mud}}}{A_{\text{rock}}} \approx \sqrt{\frac{1.82\times10^{6}}{1.95\times10^{5}}} = \sqrt{9.35} = \mathbf{3.1\times}.$$

**Predicted 3.1, observed 3.5 — the impedance argument accounts for the anomaly.** (The residual is the usual suspects: resonance, basin-edge focusing, and the fact that a real soil column is neither uniform nor perfectly elastic.)

Resonant period:

$$T = \frac{4H}{V_s} = \frac{4(25)}{130} = \mathbf{0.77\ \text{s}}.$$

Using $T \approx 0.1N$, that matches buildings of roughly **6 to 9 storeys**, which is where the damage should concentrate — along with soft-storey structures of any height, whose ground floor is the weak link.

**The second hazard is liquefaction.** "Saturated fill" is the exact recipe: loose, granular, water-filled, and shaken. Effective stress collapses toward zero, bearing capacity vanishes, and buildings on shallow foundations settle and tilt while services shear apart. **Hydraulic fill around a bay is the single most reliably dangerous ground in an earthquake**, and this is precisely the Marina District pattern in Loma Prieta 1989 — devastation at 60-plus kilometres, on fill, with intact rock sites in between.

**P3 (a)** $$\log_{10} A \approx M_w - 4.0 = 4.2 \;\Longrightarrow\; A = 1.6\times10^{4}\ \text{km}^2 = 1.58\times10^{10}\ \text{m}^2$$

— for instance $400\ \text{km}$ long by $40\ \text{km}$ down-dip, which is a realistic megathrust geometry.

$$\log_{10} M_0 = 1.5(8.2) + 9.1 = 21.4 \;\Longrightarrow\; M_0 = 2.5\times10^{21}\ \text{N}\,\text{m}.$$

$$\bar{d} = \frac{M_0}{\mu A} = \frac{2.5\times10^{21}}{(3\times10^{10})(1.58\times10^{10})} = \frac{2.5\times10^{21}}{4.75\times10^{20}} = \mathbf{5.3\ \text{m}}.$$

**(b)** The P wave reaches the nearest station at

$$t = \frac{20}{6.0} = 3.3\ \text{s},$$

so the alert goes out at $3.3 + 6 = 9.3\ \text{s}$ after origin time, travelling to the city at effectively the speed of light. Strong shaking arrives with the S wave:

$$t_S = \frac{120}{3.5} = 34.3\ \text{s} \;\Longrightarrow\; \text{lead time} = 34.3 - 9.3 = \mathbf{25\ \text{s}}.$$

Enough to stop trains, open firehouse doors, halt surgery and get under a desk — not enough to evacuate.

The blind zone is where the S wave beats the alert:

$$R_{\text{blind}} = V_s \, t_{\text{alert}} = 3.5 \times 9.3 = \mathbf{33\ \text{km}}.$$

**This is the fundamental limitation of earthquake early warning, and it is geometric, not technological: the zone that gets no warning is exactly the zone nearest the rupture, where shaking is worst.** Faster processing shrinks it but cannot remove it — the alert can never outrun the S wave over the first few tens of kilometres.

**(c)** A tsunami has a wavelength of $100$–$200\ \text{km}$ against an ocean depth of a few kilometres, so $\lambda \gg h$ and the shallow-water limit applies everywhere in the ocean ([fluid-dynamics 4.1](../../fluid-dynamics/lessons/04-01-surface-waves.md)):

$$c = \sqrt{gh} = \sqrt{(9.81)(3500)} = \sqrt{34{,}335} = 185\ \text{m/s} = 667\ \text{km/h}.$$

$$t = \frac{1.2\times10^{5}}{185} = 648\ \text{s} = \mathbf{10.8\ \text{minutes}}.$$

Shoaling by Green's law, amplitude $\propto h^{-1/4}$:

$$\frac{A_{10}}{A_{3500}} = \left(\frac{3500}{10}\right)^{1/4} = 350^{0.25} = \mathbf{4.3\times}$$

so a barely detectable $0.6\ \text{m}$ swell in the open ocean arrives as a $2.6\ \text{m}$ wall of water at the coast — before run-up, which can add another factor of two or three. **Note also that this was a thrust event, so the seafloor moved vertically and a tsunami is expected; a strike-slip rupture of the same magnitude would produce little.**

**The contrast between (b) and (c) is the practical point.** The shaking warning is 25 seconds and requires a functioning telemetry network. The tsunami warning is 11 minutes, and the most reliable trigger for it is the shaking itself — **if the ground shakes hard for more than a minute near a coast, go uphill without waiting to be told.**

**(d)** Poisson with rate $\lambda = 1/220$ per year over $t = 50$ years ([prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md)):

$$P(\text{at least one}) = 1 - e^{-t/T} = 1 - e^{-50/220} = 1 - e^{-0.227} = 1 - 0.797 = \mathbf{0.203}.$$

**A one-in-five chance inside a single mortgage.** This is how design codes are actually set, running the logic backwards: a target of 2 percent exceedance in 50 years corresponds to a return period of $-50/\ln(0.98) = 2475$ years, which is the standard design ground motion in modern seismic codes.

**And this is where hazard and risk separate.** The $0.203$ is **hazard** — a property of the fault, unchangeable. **Risk** = hazard × exposure × vulnerability, and only the last two are ours: zoning controls what is exposed, and building codes control how vulnerable it is. **Two cities with identical hazard can differ by three orders of magnitude in deaths.** The 2010 Chile earthquake ($M_w\,8.8$) killed about 500; the 2010 Haiti earthquake ($M_w\,7.0$, five hundred times less energy) killed on the order of $10^{5}$. The difference was not the Earth.

</details>

## Flashback

**From Lesson 2.3 (the driving mechanism):** A colleague argues that ridge push is the primary driver of plate motion, since ridges are elevated and gravity is doing obvious work. You have the following data:

| Plate | Fraction of margin that is subducting | Speed (mm/yr) |
|---|---|---|
| Cocos | 0.55 | 85 |
| Pacific | 0.45 | 80 |
| Nazca | 0.50 | 75 |
| South America | 0.05 | 20 |
| Eurasia | 0.05 | 10 |

(a) What does this table establish, and what does it rule out? Note that South America has one of the longest ridge margins of any plate. (b) Estimate slab pull per metre of trench for a slab $100\ \text{km}$ thick and $600\ \text{km}$ long with a density excess of $80\ \text{kg/m}^3$, and compare with a typical ridge push of $3\times10^{12}\ \text{N/m}$. (c) If slab pull is that large, why does the Pacific plate not accelerate?

<details>
<summary>Solution</summary>

**(a)** Plate speed tracks the **fraction of margin that is subducting**, and tracks it strongly: the three plates with substantial trenches move at $75$–$85\ \text{mm/yr}$, the two without at $10$–$20\ \text{mm/yr}$ — a factor of five.

South America is the decisive case. **It has an enormous ridge margin along the Mid-Atlantic Ridge and almost no subducting margin, and it is slow.** If ridge push dominated, it should be among the fastest plates. It is not.

$$\textbf{The table establishes that slab pull dominates and effectively rules out ridge push as the primary driver.}$$

**(b)** Slab pull is the negative buoyancy of the cold, dense slab, per metre of trench:

$$\frac{F}{L} = \Delta\rho \; g \; T \; \ell = (80)(9.81)(1\times10^{5})(6\times10^{5})$$

$$= 784.8 \times 10^{5} \times 6\times10^{5} = \mathbf{4.7\times10^{13}\ \text{N/m}}.$$

Against ridge push at $3\times10^{12}\ \text{N/m}$:

$$\frac{4.7\times10^{13}}{3\times10^{12}} \approx \mathbf{16\times}.$$

**The force estimate and the velocity data agree**, which is what makes the conclusion solid rather than a story. (Two honest caveats: the phase transitions in the descending slab add further density excess, so this is if anything a low estimate; and most of that pull is consumed resisting the slab's own passage through the mantle, so the *net* force available to tow the plate is far smaller than the raw number.)

**(c)** **Because the plate is at terminal velocity.** Plates have no meaningful inertia on geologic timescales — the mantle is viscous and the Reynolds number is absurdly small — so the driving forces are balanced almost exactly by viscous resistance: mantle drag on the slab and on the plate base, plus friction on the transform and thrust margins. Net force is essentially zero and the plate moves steadily, in the same way a stone reaches constant speed in honey rather than accelerating.

**The reframing worth remembering from 2.3: the plate is not a passenger on a convection cell — the plate is the cold top boundary layer of the convecting mantle, sinking under its own weight. Slab pull is not a force acting on the convection; it is the convection.**

</details>

## Connections

- **Backward:** the elastic loading is [2.4](02-04-how-rock-deforms.md)'s elastic regime, the depth cutoff on seismicity is its brittle–ductile transition, and liquefaction is its effective-stress relation applied to shaken sand; the fault geometries and their stress regimes are [2.5](02-05-folds-faults-structures.md); the megathrusts that host the largest events are [2.2](02-02-plate-boundaries.md)'s convergent boundaries, driven by [2.3](02-03-driving-mechanism.md)'s slab pull.
- **Forward:** [2.8](02-08-volcanoes-volcanic-hazards.md) uses the same logarithmic-scale reasoning for VEI and contrasts volcanic monitoring — which genuinely forecasts — with the failure of short-term earthquake prediction, for the instructive reason that magma physically moves and announces itself while a locked fault gives almost no warning; shaking-triggered landslides are [3.2](03-02-mass-wasting-slope-stability.md); the wave *evidence* for Earth's layering is [5.1](05-01-earths-internal-structure.md); hazard assessment as a practice is [5.4](05-04-resources-geologic-hazards.md).
- **Sideways:** wave physics, travel times, tomography and the moment tensor are [`geophysics`](../../geophysics/syllabus.md) 1.2–1.6; stored elastic strain energy and frictional failure are [materials-science 4.1](../../materials-science/lessons/04-01-elastic-behavior-stress-strain.md) and [4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md); shallow-water wave speed and shoaling are [fluid-dynamics 4.1](../../fluid-dynamics/lessons/04-01-surface-waves.md); return periods and exceedance probability are [prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md) — a "100-year flood" and a "2475-year ground motion" are the same piece of mathematics.
