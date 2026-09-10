# Operating Systems — Syllabus

> Computer Science · Tier 1 · ~20 lessons · Prereqs: [programming-foundations](../programming-foundations/syllabus.md), [computer-architecture](../computer-architecture/syllabus.md) · Roadmap id: `operating-systems`

## Goal

Understand how an operating system turns raw hardware — one CPU, a flat pool of RAM, a slow disk — into the tidy abstractions every program assumes: private memory, its own processor, named files. You'll be able to reason about *why* a system is slow, deadlocked, or thrashing, and predict how scheduling, locking, and paging decisions play out. We deliberately skip kernel-source-level walkthroughs and distributed OS (that's [distributed-systems](../distributed-systems/syllabus.md)) — the focus is the concepts and trade-offs, not one kernel's line numbers.

## Dangerous Checklist

When you finish, you can:

- [ ] Trace what happens on a system call — the mode switch, the trap, and the return — and explain why user code can't just do it itself
- [ ] Distinguish a process from a thread and say exactly what each shares and what it owns
- [ ] Compute average waiting and turnaround time under FCFS, SJF, and round-robin, and argue which fits a given workload
- [ ] Spot a race condition in a few lines of concurrent code and fix it with the right primitive
- [ ] Repair a broken producer–consumer, readers–writers or dining-philosophers solution, and give the exact interleaving that breaks it
- [ ] Diagnose a deadlock via the four Coffman conditions and choose prevention, avoidance, or detection
- [ ] Run the Banker's algorithm to decide whether a resource request keeps the system safe
- [ ] Translate a virtual address to a physical one through a page table and a TLB, and count the memory accesses it costs
- [ ] Simulate FIFO, LRU, and Clock page replacement on a reference string and explain thrashing and the working set
- [ ] Compute a file's maximum size and the disk accesses to reach a given byte from an inode's pointer structure
- [ ] Explain how journaling recovers a file system after a crash, and why write ordering is the whole game
- [ ] Say what a virtual machine and a container each virtualize, and name the OS mechanisms that keep processes isolated

## Modules

### Module 1: Processes, Threads & Scheduling

From "what is an OS even for" to running many programs on one CPU without them noticing each other.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Why an OS? Kernel & user mode | Explain what the OS abstracts and why a privilege boundary exists | resource manager, abstraction, dual-mode operation, trap |
| 1.2 | System calls & the kernel interface | Trace a syscall from user code across the boundary and back | syscall interface, mode switch, API vs ABI, interrupts |
| 1.3 | Processes & the address space | Describe a process's memory layout and lifecycle | process, PCB, address space, states, `fork`/`exec` |
| 1.4 | Threads & concurrency | Say what threads share and when they help | thread, concurrency vs parallelism, user vs kernel threads, context switch |
| 1.5 | CPU scheduling | Compute schedule metrics and pick a policy for a workload | FCFS, SJF, round-robin, priority, MLFQ, throughput vs latency |

**Boss problem 1:** Four processes arrive at times 0, 2, 4, 5 with CPU bursts 7, 4, 1, 4. Build the schedule under FCFS, non-preemptive SJF, and round-robin (quantum = 2); compute average waiting time for each. State which policy wins here, why SJF is provably optimal for average waiting time yet unusable in practice, and what round-robin buys you in exchange for its worse average.

### Module 2: Synchronization & Deadlock

Concurrency is where correct-looking code silently corrupts data. Build the tools that make shared state safe — then the ways they seize up.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Race conditions & critical sections | Spot a data race and state the mutual-exclusion requirement | race condition, critical section, atomicity, interleaving |
| 2.2 | Locks & hardware support | Build a correct lock from an atomic instruction and know its costs | mutex, spinlock, test-and-set, compare-and-swap, busy-waiting |
| 2.3 | Semaphores, condition variables & monitors | Choose the right synchronization abstraction for a problem | semaphore, signal/wait, condition variable, monitor |
| 2.4 | Classic synchronization problems | Solve producer–consumer, readers–writers, dining philosophers correctly | bounded buffer, reader/writer fairness, resource ordering, starvation |
| 2.5 | Deadlock | Detect, prevent, avoid, or recover from a deadlock | Coffman conditions, resource-allocation graph, Banker's algorithm, detection |

**Boss problem 2:** A system has resource types A, B, C with totals 10, 5, 7. Five processes hold allocations and declare maxima (given as a table in the lesson). With Available = (3, 3, 2), (a) show the system is in a safe state by exhibiting a safe sequence; (b) decide whether a request of (1, 0, 2) from process P1 can be granted, running the Banker's safety check on the resulting state; (c) name which Coffman condition a "request all resources up front" policy eliminates, and its practical downside.

### Module 3: Memory & Virtual Memory

The illusion that every process owns a huge, private, contiguous memory — and the paging machinery and eviction policies that maintain it over real, finite RAM.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Address spaces & allocation | Explain relocation and diagnose fragmentation | logical vs physical address, base/bound, contiguous allocation, external/internal fragmentation |
| 3.2 | Paging & the OS page table | Say what the kernel writes into a page table and what each bit costs | PTE bits, per-process tables, kernel/user split, TLB shootdown, copy-on-write, mapped files |
| 3.3 | Demand paging & page faults | Trace what happens when a page isn't resident | virtual memory, demand paging, page-fault handling, locality |
| 3.4 | Page replacement & thrashing | Simulate eviction policies and explain thrashing | FIFO, LRU, Clock, Belady's anomaly, working set, thrashing |

**Boss problem 3:** A TLB hit costs 1 memory reference, a miss costs 2 (walk the table, then access); the TLB hit ratio is 80%. (a) Compute the effective access time in reference units. (b) For the reference string `7 0 1 2 0 3 0 4 2 3 0 3 2` with 3 frames, count page faults under FIFO and under LRU, and state which does better here. (c) Show that adding a 4th frame under FIFO can *increase* faults (Belady's anomaly) or argue why LRU is immune, and connect a rising fault rate to thrashing and the working-set model.

### Module 4: File Systems, I/O & Virtualization

Where the abstractions meet the slowest, most persistent hardware — plus a taste of virtualizing the whole machine and keeping it secure.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Files, directories & inodes | Describe how a name maps to bytes on disk | file abstraction, directory, inode, metadata, hard/soft links |
| 4.2 | Disk allocation & free space | Compute file size and access cost for an allocation scheme | contiguous/linked/indexed allocation, direct & indirect blocks, bitmap/free list |
| 4.3 | Crash consistency & journaling | Explain how a file system survives a mid-write crash | consistency, write ordering, write-ahead log, journaling, `fsck` |
| 4.4 | I/O & disk scheduling | Order a request queue and price what the OS adds above the device | I/O stack, buffer cache, readahead, FCFS/SSTF/SCAN/C-SCAN, flash translation layer, TRIM |
| 4.5 | Virtualization & containers | Say what a VM and a container each virtualize | hypervisor, trap-and-emulate, guest/host, namespaces, cgroups |
| 4.6 | OS security basics | Name the mechanisms that isolate and protect processes | protection vs security, access control, privilege separation, common attack surfaces |

**Boss problem 4:** An inode has 12 direct pointers, 1 single-indirect, and 1 double-indirect pointer; blocks are 4 KB and each block pointer is 4 bytes. (a) Compute the maximum file size this inode can address. (b) How many disk accesses are needed to read one byte at offset 5 MB, assuming nothing is cached? (c) A crash occurs after the file's data block is written but before its inode is updated on disk — explain what an ordered journaling scheme logs, in what order, and how recovery leaves the file system consistent (even if the write is lost).

## Sources of truth

- *Operating Systems: Three Easy Pieces* (Arpaci-Dusseau) — primary voice for virtualization, concurrency, and persistence; the "three pieces" framing shapes the module order.
- Silberschatz, Galvin & Gagne, *Operating System Concepts* — for scheduling metrics, the Banker's algorithm, and standard terminology.
- Tanenbaum, *Modern Operating Systems* — secondary reference for I/O, file systems, and security framing.

## Revision note — 2026-09-10

Recorded when all 20 lessons were built.

**1. How problems are posed in this course.** Following the standing rule for
Computer Science courses that answers must be inputtable in the web app, every
problem here resolves to one of: a number or short table; a classification or
selection **with the named reason**; an explicit interleaving written as an
ordered list of steps; a concrete counterexample instance; or a hand derivation.
Nothing asks for a drawing, and nothing asks for code to be written from scratch,
because free-form code has many correct answers and cannot be self-graded against
one solutions block. Problems whose correct answers are not unique — interleavings,
counterexamples, starvation schedules — open their solution with a one-line
**accept criterion** before the worked exemplar, so that self-grading in the app
is unambiguous. That convention is new with this course and should carry forward
to `distributed-systems`, which will need it more.

**2. The synchronisation checklist item was re-aimed.** "Implement producer–consumer,
readers–writers, or dining philosophers" was a write-code goal and is now
"repair a broken solution and give the interleaving that breaks it" — the same
understanding, tested in a form the platform can grade. Lessons 2.3 and 2.4 are
built against the revised goal.

**3. Two lessons were re-scoped against the prerequisite.**
[`computer-architecture`](../computer-architecture/syllabus.md) owns more than this
syllabus assumed. Its 4.3 already covers the address split, multi-level table
structure, the TLB, TLB reach, huge pages and translation cost; its 4.4 covers the
seek and rotation model, SSD versus HDD latency, and polling against interrupts
against DMA.

- **3.2** became *Paging and the OS page table* — the PTE control bits, per-process
  tables and their memory cost, the kernel/user split, TLB shootdown against
  address-space identifiers, and copy-on-write and mapped files as bit patterns.
  It cites the prerequisite for the translation hardware rather than restating it.
- **4.4** became *I/O and disk scheduling* — the I/O stack, the buffer cache and
  readahead, the elevator algorithms (unowned anywhere else in the library), and
  the flash translation layer with write amplification and TRIM. It cites the
  prerequisite for the device model.

Neither lesson was cut, and the cessions are listed in the reference card's
scope table.

**4. Boss problem 3 is under-specified as written.** Part (c) asks to show that a
fourth frame under FIFO can increase faults, using the reference string given in
part (b) — but that string (`7 0 1 2 0 3 0 4 2 3 0 3 2`) does **not** exhibit
Belady's anomaly: FIFO takes 10 faults with three frames and 7 with four. The
anomaly needs its own string, and lesson 3.4 supplies the standard witness
(`1 2 3 4 1 2 5 1 2 3 4 5`, giving 9 faults at three frames and 10 at four).
Verified numerically before the lesson was written. Treat part (c) as two
questions: the anomaly on the witness string, and LRU's immunity by the stack
property.

**5. Forward cessions.** `databases` and `distributed-systems` are not yet built.
This course owns the **file-system** journal; transactions, serializability and
ARIES belong to `databases`, and consensus, replication and CAP to
`distributed-systems`. Both cessions are stated in the reference card so that the
later courses can be built against them.
