# Operating Systems · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course is about the software that turns one CPU, one flat memory and one slow disk into private memory, a processor per program and named files. The card holds the numbers you would otherwise hunt for mid-problem: the scheduling metrics, the effective-access-time formulas, the inode arithmetic, the Banker's bookkeeping and the latency table that makes every trade-off in the course decidable.

## Scope and ownership

| Topic | Owned by | Note |
|---|---|---|
| Address split, multi-level table structure, TLB, TLB reach, huge pages, translation cost | [`computer-architecture` 4.3](../computer-architecture/lessons/04-03-virtual-memory-and-the-tlb.md) | assumed here; this course owns the OS-authored side |
| Seek and rotational model, SSD versus HDD latency, polling vs interrupts vs DMA | [`computer-architecture` 4.4](../computer-architecture/lessons/04-04-storage-and-io.md) | assumed here; this course owns the queue and the policy |
| LRU as a cache replacement policy, associativity, write policy | [`computer-architecture` 4.2](../computer-architecture/lessons/04-02-associativity-misses-write-policy.md) | this course owns Belady, Clock, working sets, thrashing |
| Cache coherence, MSI, false sharing | [`computer-architecture` 5.3](../computer-architecture/lessons/05-03-multiprocessors-cache-coherence.md) | cited to explain spinlock traffic; not re-derived |
| Little's law, M/M/1, utilisation blow-up | [`operations-research` 4.1](../operations-research/lessons/04-01-poisson-arrivals-littles-law.md), [4.2](../operations-research/lessons/04-02-the-mm1-queue.md) | cited for scheduling and thrashing; not re-derived |
| Depth-first cycle detection, exchange arguments, online/competitive analysis | [`algorithms`](../algorithms/syllabus.md) | cited for deadlock detection and SJF optimality |
| Processes, threads, scheduling, synchronisation, deadlock, virtual-memory policy, file systems, I/O policy, virtualization, OS security | **this course** | |
| Distributed consensus, replication, CAP | [`distributed-systems`](../distributed-systems/syllabus.md) | out of scope: everything here assumes shared memory and one machine |
| Transactions, serializability, ARIES, query plans | [`databases`](../databases/syllabus.md) | this course owns only the **file-system** journal |

**Convention warning.** Two lessons were deliberately re-aimed against the prerequisite. [3.2](lessons/03-02-paging-and-the-os-page-table.md) is about what the *kernel writes into* a page table — the control bits, per-process tables, TLB shootdown, copy-on-write and mapped files — and takes the translation hardware from `computer-architecture` 4.3. [4.4](lessons/04-04-io-and-disk-scheduling.md) is about the OS's **request queue and policy** — the buffer cache, readahead, the elevator algorithms and the flash translation layer — and takes the device model from `computer-architecture` 4.4.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $m$ (Module 1) | the processor's mode bit: user or kernel | [1.1](lessons/01-01-why-an-os-kernel-and-user-mode.md) |
| $b$ (Module 1) | batch size — items served per system call | [1.2](lessons/01-02-system-calls-and-the-kernel-interface.md) |
| $c$, $w$ | context-switch cost; useful work done between switches | [1.4](lessons/01-04-threads-and-concurrency.md) |
| $q$, $s$ | scheduling quantum; context-switch cost in the quantum trade | [1.5](lessons/01-05-cpu-scheduling.md) |
| $\bar w$, $\bar t$ | average waiting time; average turnaround time | [1.5](lessons/01-05-cpu-scheduling.md) |
| $S$ | a semaphore's value: units free if positive, threads asleep if negative | [2.3](lessons/02-03-semaphores-condition-variables-monitors.md) |
| **Need**, **Max**, **Allocation**, **Available** | the four Banker's vectors, one entry per resource type | [2.5](lessons/02-05-deadlock.md) |
| P, W, U, A, D | page-table entry bits: present, writable, user, accessed, dirty | [3.2](lessons/03-02-paging-and-the-os-page-table.md) |
| $p$ (Module 3) | page-fault probability per memory access | [3.3](lessons/03-03-demand-paging-and-page-faults.md) |
| $t_m$, $t_f$ | memory access time; page-fault service time | [3.3](lessons/03-03-demand-paging-and-page-faults.md) |
| $W(t,\Delta)$ | the working set: pages referenced in the window $(t-\Delta,\,t]$ | [3.4](lessons/03-04-page-replacement-and-thrashing.md) |
| $S_n(t)$ | the resident set with $n$ frames after $t$ references | [3.4](lessons/03-04-page-replacement-and-thrashing.md) |
| $B$, $p$ (Module 4), $k$ | block size; pointer size; pointers per block, $k = B/p$ | [4.2](lessons/04-02-disk-allocation-and-free-space.md) |
| $d$ | number of direct pointers in an inode | [4.2](lessons/04-02-disk-allocation-and-free-space.md) |
| $M$ | total disk-head movement, in tracks | [4.4](lessons/04-04-io-and-disk-scheduling.md) |
| $u$ (Module 4) | fraction of an SSD's physical capacity holding valid data | [4.4](lessons/04-04-io-and-disk-scheduling.md) |
| WA | write amplification: physical bytes written per logical byte | [4.4](lessons/04-04-io-and-disk-scheduling.md) |

$p$ is overloaded — fault probability in Module 3, pointer size in Module 4. Context separates them and both are given above.

## Definitions

### Dual-mode operation

The processor carries one bit deciding which instructions are legal, and a program cannot set it itself.

Instructions are partitioned into unprivileged, legal in both modes, and **privileged**, legal only in kernel mode. Executing a privileged instruction in user mode raises a trap instead of executing it. The criterion for privilege is not importance: it is whether the instruction touches state that is *global to the machine* rather than local to a program.

*Introduced:* [1.1](lessons/01-01-why-an-os-kernel-and-user-mode.md)

### Trap

A synchronous transfer of control caused by the executing instruction, which in one indivisible step saves the program counter, sets the mode to kernel, and jumps to a kernel-chosen address.

Both halves matter. Flipping the mode bit without controlling the destination would let any program become the kernel.

*Introduced:* [1.1](lessons/01-01-why-an-os-kernel-and-user-mode.md)

### The three kinds of trap

| kind | caused by | example | resumes |
|---|---|---|---|
| exception | a fault in the instruction | invalid address, divide by zero | sometimes |
| system call | the program asking deliberately | `read`, `fork` | yes |
| interrupt | a device, asynchronously | timer, disk completion | yes |

The interrupt is the odd one out: not caused by the running instruction, and the reason preemption is possible at all.

*Introduced:* [1.1](lessons/01-01-why-an-os-kernel-and-user-mode.md)

### System call

A deliberate trap requesting a kernel service, identified by a call number with a fixed argument convention.

Costs a few hundred to a couple of thousand cycles, from the mode switch, argument validation, pipeline drain, and the cache and TLB footprint the kernel disturbs — the last of which is paid *after* the call returns.

*Introduced:* [1.2](lessons/01-02-system-calls-and-the-kernel-interface.md)

### API versus ABI

The API is the source-level interface you compile against; the ABI is the binary agreement compiled code assumes.

Changing an API breaks source compatibility, fixed by recompiling. Changing an ABI breaks already-compiled binaries, which cannot be fixed at all — which is why syscall numbers are frozen forever.

*Introduced:* [1.2](lessons/01-02-system-calls-and-the-kernel-interface.md)

### Process

A program in execution: an address space, a thread of control, and a row in the kernel's table.

The row is the **process control block**, holding the pid and parent, the state, the saved registers and program counter, the page-table root, the open-file table and the credentials.

*Introduced:* [1.3](lessons/01-03-processes-and-the-address-space.md)

### Process states

Running (on a CPU now), **ready** (runnable, waiting for a CPU), **blocked** (waiting for something that is not a CPU).

The ready/blocked distinction carries the whole weight of scheduling: a preempted process is *ready*, not blocked, and blocked time is not waiting time.

*Introduced:* [1.3](lessons/01-03-processes-and-the-address-space.md)

### fork and exec

`fork` duplicates a process, returning the child's pid in the parent and 0 in the child. `exec` replaces the address space with a new program, keeping the pid, the open files and the PCB row.

They are separate so that the gap between them is available for configuration — redirection, pipes, dropping privileges — using the ordinary calls the child already has.

*Introduced:* [1.3](lessons/01-03-processes-and-the-address-space.md)

### Copy-on-write

`fork` copies the page tables, not the pages, marking every writable page read-only in both processes; a store then traps and the kernel copies just that page.

Makes `fork` cost $O(\text{page table})$ rather than $O(\text{address space})$. It is a bet that most shared pages stay unwritten, which is good exactly because `fork`-then-`exec` is the common case.

*Introduced:* [1.3](lessons/01-03-processes-and-the-address-space.md), revisited as a page-table bit in [3.2](lessons/03-02-paging-and-the-os-page-table.md)

### Thread

An independent flow of control inside one address space.

Shared: code, globals, heap, open-file table, page table. Private: program counter, registers, stack, thread id, signal mask, `errno`. Everything shared is a place two threads can collide.

*Introduced:* [1.4](lessons/01-04-threads-and-concurrency.md)

### Concurrency versus parallelism

Concurrency is a structuring property — several flows that could progress in any order. Parallelism is an execution property — several flows running at the same instant, which needs several cores.

A single core can run a highly concurrent program with a large speedup, provided the program spends time waiting.

*Introduced:* [1.4](lessons/01-04-threads-and-concurrency.md)

### Context switch

Saving one flow's registers and program counter into the kernel's record and loading another's.

A thread switch keeps the page table, so surviving cache and TLB entries stay valid. A process switch installs a new page-table root and invalidates every cached translation, which is why its indirect cost typically doubles its direct cost.

*Introduced:* [1.4](lessons/01-04-threads-and-concurrency.md)

### Convoy effect

Under first-come-first-served, one long job at the front makes every short job behind it wait for its entire burst.

*Introduced:* [1.5](lessons/01-05-cpu-scheduling.md)

### Starvation

A thread is ready to proceed and is indefinitely denied while the system as a whole makes progress.

Distinct from deadlock, where nobody progresses. Harder to detect, because throughput looks healthy.

*Introduced:* [1.5](lessons/01-05-cpu-scheduling.md), formalised in [2.4](lessons/02-04-classic-synchronization-problems.md)

### Multi-level feedback queue

Several priority queues, round robin within each; a new job enters at the top, is demoted if it uses a whole quantum, and stays if it blocks early.

The scheduler *learns* which jobs are interactive without being told. Periodic promotion of everything prevents starvation.

*Introduced:* [1.5](lessons/01-05-cpu-scheduling.md)

### Race condition

A result that depends on the relative timing of operations in two or more flows, at least one of which writes shared state.

Both halves are needed: any number of concurrent readers is safe. The general pattern is **read shared state, decide from it, write back**, with a window in the middle.

*Introduced:* [2.1](lessons/02-01-race-conditions-and-critical-sections.md)

### Critical section

A region accessing shared state that must not be executed by two flows at once.

A correct solution needs all three of **mutual exclusion**, **progress** and **bounded waiting**. Most broken schemes satisfy one or two.

*Introduced:* [2.1](lessons/02-01-race-conditions-and-critical-sections.md)

### Test-and-set, compare-and-swap

Test-and-set atomically writes 1 and returns the previous value. Compare-and-swap atomically replaces a value if it still equals an expected one, and reports whether it did.

Compare-and-swap guarantees the **location holds the same value**, not that the data structure is in the same state — the gap that produces the ABA problem.

*Introduced:* [2.2](lessons/02-02-locks-and-hardware-support.md)

### Test-and-test-and-set

Spin on an ordinary *read* until the lock looks free, and only then attempt the atomic write.

Identical correctness, and it generates no coherence traffic while the lock is held, because every waiter reads a line it holds shared.

*Introduced:* [2.2](lessons/02-02-locks-and-hardware-support.md)

### Ticket lock

Each arriving thread atomically takes the next number and waits until a shared counter reaches it.

Adds the bounded waiting a plain spinlock lacks, and cuts the handoff to one invalidating write. Queue locks go further, giving each waiter its own line to spin on.

*Introduced:* [2.2](lessons/02-02-locks-and-hardware-support.md)

### Priority inversion

A high-priority thread waits on a lock held by a low-priority thread the scheduler will not run.

Repaired by priority inheritance: temporarily raise the holder to the waiter's priority.

*Introduced:* [2.2](lessons/02-02-locks-and-hardware-support.md)

### Semaphore

An integer with two atomic operations: `wait` decrements and blocks if the result is negative; `signal` increments and wakes one sleeper if the result is not positive.

Positive means units available; negative means that many threads are asleep. A **binary** semaphore used as a lock is signalled by its acquirer; a **counting** semaphore is normally signalled by a different thread than the one that waited.

*Introduced:* [2.3](lessons/02-03-semaphores-condition-variables-monitors.md)

### Condition variable

A queue paired with a lock, offering `wait` (atomically release the lock and sleep, reacquiring on wake) and `signal` or `broadcast`.

The atomicity in `wait` is the whole point — splitting it produces the **lost wakeup**, where a signal arrives before you are asleep and is gone forever. Unlike a semaphore, a condition variable holds no state, so a signal to nobody is lost.

*Introduced:* [2.3](lessons/02-03-semaphores-condition-variables-monitors.md)

### Mesa versus Hoare semantics

Under Mesa the signaller keeps the lock and keeps running, so the signal means the condition *was* true. Under Hoare the lock is handed to the woken thread, so it is still true.

Every real system is Mesa, so **always wait in a `while` loop, never an `if`**. The loop also makes spurious wakeups harmless and `broadcast` safe.

*Introduced:* [2.3](lessons/02-03-semaphores-condition-variables-monitors.md)

### Monitor

An object whose methods all hold one implicit lock, with condition variables inside.

Java's `synchronized` and Python's `with lock` are monitors. The advantage over raw semaphores is that the release cannot be forgotten.

*Introduced:* [2.3](lessons/02-03-semaphores-condition-variables-monitors.md)

### Reader priority and writer priority

In the counted readers-writers solution the first reader takes the shared lock and the last releases it, so a continuous stream of readers starves writers. The mirror-image policy starves readers.

A **fair** solution puts a turnstile in front, so an arriving writer blocks subsequent readers and is overtaken by nobody.

*Introduced:* [2.4](lessons/02-04-classic-synchronization-problems.md)

### Circular wait

A set of threads in which each waits for a resource held by the next, closing into a ring.

*Introduced:* [2.4](lessons/02-04-classic-synchronization-problems.md)

### Resource ordering

Impose a total order on resources and require every thread to acquire in increasing order.

Deadlock becomes impossible: in a cycle each thread would wait for a strictly higher-numbered resource than it holds, giving $r < r$. The proof uses nothing about the resources, so it holds for any number of threads.

*Introduced:* [2.4](lessons/02-04-classic-synchronization-problems.md)

### Coffman conditions

Deadlock requires all four at once: **mutual exclusion**, **hold and wait**, **no preemption**, **circular wait**.

Since all four are necessary, eliminating any one prevents deadlock outright — which is the entire menu of prevention strategies.

*Introduced:* [2.5](lessons/02-05-deadlock.md)

### Resource-allocation graph

A directed graph with a node per thread and per resource type, assignment edges from resource to holder and request edges from thread to awaited resource.

With **one unit** per resource type, a cycle is necessary and sufficient for deadlock. With **several units**, a cycle is necessary but not sufficient, because a holder outside the cycle can finish and dissolve it.

*Introduced:* [2.5](lessons/02-05-deadlock.md)

### Safe state and safe sequence

A state is safe if some ordering of the threads lets each obtain its remaining maximum need from what is free plus what its predecessors release on finishing. That ordering is a safe sequence.

Safe does not mean deadlock-free in the abstract; it means a way out exists even if every thread demands its full declared maximum. Unsafe does not mean deadlocked.

*Introduced:* [2.5](lessons/02-05-deadlock.md)

### External versus internal fragmentation

External: free memory exists but is split into pieces too small for the request. Internal: memory is handed over and not used, because requests are rounded up to a fixed unit.

Variable-sized allocation has zero internal and unbounded external fragmentation; fixed-size allocation has zero external and at most one unit of internal waste per region. Paging is exactly that trade.

*Introduced:* [3.1](lessons/03-01-address-spaces-and-allocation.md)

### Base and bound

Two privileged registers per process: every address is relocated by adding the base and refused if it reaches the bound.

Buys **relocation** (a running program can be moved by updating one register, which is what makes compaction possible) and **protection** (out-of-range access traps).

*Introduced:* [3.1](lessons/03-01-address-spaces-and-allocation.md)

### Page-table entry bits

The kernel writes **P** (present), **W** (writable) and **U** (user) to express intent; the hardware writes **A** (accessed) and **D** (dirty) to report facts.

A and D are the only feedback channel the kernel has about what memory a program is actually using, and the entire input to eviction policy.

*Introduced:* [3.2](lessons/03-02-paging-and-the-os-page-table.md)

### The page table is not the record

The page table holds what the hardware must enforce right now; the kernel keeps a separate description of what each region is for, and consults it on every fault.

This is why a copy-on-write store and a genuine protection violation are indistinguishable in the page table and yet have completely different outcomes.

*Introduced:* [3.2](lessons/03-02-paging-and-the-os-page-table.md)

### TLB shootdown

When the kernel changes a mapping, every core that may have cached the old translation must invalidate it, so the initiating core interrupts each and waits.

Address-space identifiers remove the flush on **context switch** and do nothing for this, because the mapping really is different now. The only cure is batching — invalidate a range, or the whole TLB, once.

*Introduced:* [3.2](lessons/03-02-paging-and-the-os-page-table.md)

### Demand paging

Start pages marked not present and fetch them on first touch, so a process may have a larger address space than the machine has memory.

Works only because of **locality**: over a short window a program touches a small clustered subset of its pages.

*Introduced:* [3.3](lessons/03-03-demand-paging-and-page-faults.md)

### Minor and major faults

A minor fault is satisfied with no I/O — a zeroed frame, a copy-on-write copy, or a page still in the kernel's cache needing only a remapping. A major fault requires reading from disk.

They differ by about a thousand times in cost, which is why a single "page fault" count is nearly meaningless.

*Introduced:* [3.3](lessons/03-03-demand-paging-and-page-faults.md)

### Restarting the faulting instruction

After a fault is serviced the instruction is executed again from the beginning, not resumed partway.

This constrains instruction-set design: anything that writes several locations must be able to fault without leaving half its effect behind.

*Introduced:* [3.3](lessons/03-03-demand-paging-and-page-faults.md)

### Belady's anomaly

Under FIFO, adding frames can *increase* the fault count.

The witness is $1,2,3,4,1,2,5,1,2,3,4,5$: 9 faults with three frames, 10 with four.

*Introduced:* [3.4](lessons/03-04-page-replacement-and-thrashing.md)

### Stack algorithm

A policy whose resident set with $n$ frames is always a subset of its resident set with $n+1$: $S_n(t)\subseteq S_{n+1}(t)$.

Every hit at $n$ is then a hit at $n+1$, so the fault count is non-increasing in memory size and the anomaly is impossible. LRU and OPT are stack algorithms; FIFO is not.

*Introduced:* [3.4](lessons/03-04-page-replacement-and-thrashing.md)

### Clock, or second chance

Arrange frames in a circle with a hand. If the frame under the hand has its accessed bit set, clear it and advance; otherwise evict it.

LRU built from the single reference bit the hardware provides. Adding the dirty bit gives a second axis, preferring clean pages that need no write-back.

*Introduced:* [3.4](lessons/03-04-page-replacement-and-thrashing.md)

### Working set

$W(t,\Delta)$ is the set of pages referenced in the last $\Delta$ of execution; its size is the process's current memory demand.

The policy: give each process its working set, and if the working sets do not all fit, reduce the degree of multiprogramming.

*Introduced:* [3.4](lessons/03-04-page-replacement-and-thrashing.md)

### Thrashing

Every process's resident set is below its working set, so the disk saturates and CPU utilisation collapses to the ratio of fault capacity to fault demand.

The instinctive response — admit more work because the CPU looks idle — makes it worse. The cure is to suspend a process.

*Introduced:* [3.4](lessons/03-04-page-replacement-and-thrashing.md)

### Inode

The file itself: type, size, owner, permissions, times, link count and the pointers to its data blocks. It has a number and no name.

*Introduced:* [4.1](lessons/04-01-files-directories-and-inodes.md)

### Directory

An ordinary file whose contents are pairs of a name and an inode number.

*Introduced:* [4.1](lessons/04-01-files-directories-and-inodes.md)

### Hard link versus soft link

A hard link is a second directory entry pointing at the same inode, counted in the link count; the data is freed when the count and the open count both reach zero. A soft link is a small file whose contents are a path string.

A hard link cannot cross file systems (inode numbers are local) and cannot point at a directory (it would allow a cycle, which reference counting cannot reclaim). A soft link can do both and can dangle.

*Introduced:* [4.1](lessons/04-01-files-directories-and-inodes.md)

### The three-level descriptor structure

A file descriptor indexes a per-process table; each entry points at an **open file description** holding the offset and mode; each description points at an inode.

`fork` and `dup` share the description, so the offset is shared and writes interleave. Two separate `open` calls share only the inode, so writes collide at the same position.

*Introduced:* [4.1](lessons/04-01-files-directories-and-inodes.md)

### Indexed allocation

Keep a file's block pointers in blocks of their own, with more levels of indirection for larger files.

Deliberately unfair: a small file is reached with no indirection, a huge one pays a few extra reads. Cost grows like the logarithm of the file size with a base of $k$, the pointers per block.

*Introduced:* [4.2](lessons/04-02-disk-allocation-and-free-space.md)

### Free-space bitmap versus free list

A bitmap has one bit per block and can find runs of contiguous free blocks by scanning for consecutive zeros. A free list chains free blocks and makes contiguity invisible.

Bitmaps won because contiguity is the thing worth optimising, and only the bitmap can see it.

*Introduced:* [4.2](lessons/04-02-disk-allocation-and-free-space.md)

### Journaling

Write a record of the intended update to a dedicated log, commit it with a single small write, then apply it in place; on restart, replay every committed entry and discard the rest.

The **commit record** is the mechanism: one small write acting as witness for a whole multi-block update. Replay is safe because the journal stores *values*, not operations, so applying an entry twice is indistinguishable from applying it once.

*Introduced:* [4.3](lessons/04-03-crash-consistency-and-journaling.md)

### Data versus ordered journaling

Data journaling logs everything, so every byte is written twice. Ordered journaling logs only metadata and writes file data to its final location **before** committing the metadata that points at it.

The ordering is a correctness condition, not an optimisation: it guarantees that visible metadata points at data already on the disk, which eliminates the one crash outcome no consistency checker can detect.

*Introduced:* [4.3](lessons/04-03-crash-consistency-and-journaling.md)

### Write barrier and fsync

Drives reorder writes and acknowledge them from volatile buffers, so the file system must force ordering explicitly between journal steps, and an application must call `fsync` to force its own data durable.

*Introduced:* [4.3](lessons/04-03-crash-consistency-and-journaling.md), applied to the atomic-replace idiom in [4.5](lessons/04-05-virtualization-and-containers.md)

### Disk-scheduling policies

FCFS serves in arrival order. SSTF takes the nearest request and starves the far ends. SCAN sweeps to one end and reverses. C-SCAN sweeps one way, jumps back, and sweeps the same way again, giving every track the same maximum wait. LOOK and C-LOOK reverse at the last request rather than the physical end.

Least movement and fairest service are different objectives and no policy optimises both.

*Introduced:* [4.4](lessons/04-04-io-and-disk-scheduling.md)

### Flash translation layer and TRIM

Flash is written a page at a time and erased a block at a time, so the drive maps logical addresses to physical pages and garbage-collects erase blocks by copying out still-valid pages.

**TRIM** is the command telling the drive which logical blocks the file system has freed. Without it the drive cannot know a deleted file's pages are dead, because freeing a file is an ordinary write to a bitmap the device cannot interpret.

*Introduced:* [4.4](lessons/04-04-io-and-disk-scheduling.md)

### Trap and emulate

Run the guest kernel in user mode; its privileged instructions trap to the hypervisor, which applies them to a virtual copy of the machine state.

*Introduced:* [4.5](lessons/04-05-virtualization-and-containers.md)

### Popek-Goldberg condition

A machine is virtualizable by trap-and-emulate if every **sensitive** instruction — one inspecting or changing privileged state — is also **privileged**, and therefore traps in user mode.

x86 violated it with about seventeen instructions that silently returned wrong answers, which is why binary translation, paravirtualization and hardware extensions all exist.

*Introduced:* [4.5](lessons/04-05-virtualization-and-containers.md)

### VM exit

A transition from guest to hypervisor caused by an intercepted instruction or condition; the hypervisor's equivalent of a system call, at a comparable cost.

Computation causes no exits and device interaction causes several, which is why virtualized CPU work runs near native speed and virtualized I/O does not.

*Introduced:* [4.5](lessons/04-05-virtualization-and-containers.md)

### Namespaces and control groups

Namespaces partition the *names* a process can see — process ids, mounts, network interfaces, users. Control groups partition the *amounts* — CPU, memory, I/O bandwidth.

Together they are a container. Its isolation costs nothing at run time and is exactly as strong as the kernel's system-call interface.

*Introduced:* [4.5](lessons/04-05-virtualization-and-containers.md)

### Protection versus security

Protection is the mechanism — what the system can enforce. Security is the policy plus the mechanism — whether what is enforced is what you wanted.

*Introduced:* [4.6](lessons/04-06-os-security-basics.md)

### Least privilege and privilege separation

Least privilege: every component runs with the smallest rights sufficient for its job, for the shortest time. Privilege separation: split the program so the privileged part is small, isolated and touches no attacker-controlled input.

*Introduced:* [4.6](lessons/04-06-os-security-basics.md)

### Confused deputy

A privileged program is tricked into misusing its own authority on behalf of an unprivileged caller. The attacker gains no privilege; the deputy exercises its own on the wrong object.

*Introduced:* [4.6](lessons/04-06-os-security-basics.md)

### Time of check to time of use

A check and the action it authorises are separated in time, and the object they refer to changes in between.

The check-then-act race with an adversary choosing the interleaving. The repair is to authorize the object you will act on — a descriptor — not a name that might reach it.

*Introduced:* [4.6](lessons/04-06-os-security-basics.md)

### W xor X and ASLR

No page is both writable and executable. Region base addresses are randomised each run, so an attacker with $b$ bits of entropy needs $2^{b-1}$ guesses on average.

ASLR is probabilistic and collapses to one guess if a single address leaks; W xor X holds no secret and is unaffected by disclosure. Neither fixes the underlying bug.

*Introduced:* [4.6](lessons/04-06-os-security-basics.md)

## Formulas and rules

### Scheduling metrics

| quantity | definition |
|---|---|
| turnaround time | completion $-$ arrival |
| waiting time | turnaround $-$ CPU time actually needed |
| response time | first run $-$ arrival |

$$\bar w = \frac{1}{n}\sum_i w_i, \qquad \bar t = \frac{1}{n}\sum_i t_i$$

**SJF optimality.** For $n$ jobs **all available at time 0**, non-decreasing burst order minimises average waiting time over all non-preemptive schedules. Proof by exchange: swapping an adjacent out-of-order pair reduces the total by $b_i - b_j > 0$.

Drop the hypothesis and it is false — with arrivals, the optimal policy is preemptive shortest-remaining-time-first.

**Burst prediction.** $\tau_{n+1} = \alpha t_n + (1-\alpha)\tau_n$

*From* [1.5](lessons/01-05-cpu-scheduling.md)

### The quantum trade

With $n$ ready flows, quantum $q$ and switch cost $s$:

$$\text{worst response} \approx (n-1)(q+s), \qquad \text{overhead fraction} = \frac{s}{q+s}$$

For overhead at or below a target $f$ with switch cost $c$ followed by work $w$:

$$\frac{c}{c+w}\le f \;\Longleftrightarrow\; w \ge c\left(\frac{1}{f}-1\right) \qquad (f = 0.05 \Rightarrow w \ge 19c)$$

*From* [1.4](lessons/01-04-threads-and-concurrency.md), [1.5](lessons/01-05-cpu-scheduling.md)

### Batching a boundary crossing

With per-crossing cost $C$ and $b$ items per crossing over $N$ items:

$$\text{total overhead} = \frac{N}{b}\,C \qquad \text{falls like } 1/b$$

Nearly all of the available win arrives in the first few doublings of $b$; the last doublings buy almost nothing and pay full price in latency or risk.

*From* [1.1](lessons/01-01-why-an-os-kernel-and-user-mode.md), [1.2](lessons/01-02-system-calls-and-the-kernel-interface.md)

### Spin or block

Blocking costs two context switches. Spin if the expected hold time is shorter than that; block otherwise. A two-phase lock spins for exactly the cost of blocking and then blocks, and is never worse than twice the best decision made with perfect knowledge.

Break-even mix, with a fraction $\pi$ of long holds $H$ against short holds $h$, and blocking cost $2c$:

$$(1-\pi)h + \pi H = 2c$$

*From* [2.2](lessons/02-02-locks-and-hardware-support.md)

### Lock coherence traffic

For $n$ waiters and a hold of duration $T$, with an invalidating atomic write costing $\tau$:

| lock | during the hold | at the release |
|---|---|---|
| test-and-set | $n\lfloor T/\tau\rfloor$ invalidations | $O(n)$ |
| test-and-test-and-set | 0 | $O(n)$ |
| ticket lock | 0 writes | 1 invalidating write, $O(n)$ reads |
| queue (MCS) lock | 0 | 1 |

*From* [2.2](lessons/02-02-locks-and-hardware-support.md), building on [`computer-architecture` 5.3](../computer-architecture/lessons/05-03-multiprocessors-cache-coherence.md)

### Bounded buffer, correct ordering

```
producer:                     consumer:
  wait(empty)                   wait(full)
  wait(mutex)                   wait(mutex)
  ... insert ...                ... remove ...
  signal(mutex)                 signal(mutex)
  signal(full)                  signal(empty)
```

**Acquire the resource count first and the mutual exclusion last, and release in the opposite order.** Reversing the acquires deadlocks: a thread sleeps holding the mutex that the only thread able to wake it needs.

*From* [2.3](lessons/02-03-semaphores-condition-variables-monitors.md)

### Banker's algorithm

$$\mathbf{Need}_i = \mathbf{Max}_i - \mathbf{Allocation}_i$$

**Safety check.** Set $\mathbf{Work} = \mathbf{Available}$, all threads unfinished. Repeatedly find an unfinished $i$ with $\mathbf{Need}_i \le \mathbf{Work}$; mark it finished and set $\mathbf{Work} \mathrel{+}= \mathbf{Allocation}_i$. Safe if all finish.

**Request check** for request $\mathbf{R}$ from thread $i$:

| test | action if it fails |
|---|---|
| $\mathbf{R} \le \mathbf{Need}_i$ | reject — it exceeded its declaration |
| $\mathbf{R} \le \mathbf{Available}$ | make it wait |
| the tentatively granted state is safe | roll back and make it wait |

Cost is $O(mn^2)$ per request with $m$ resource types and $n$ threads, and it requires each thread's maximum need declared in advance, which is why it is rarely used.

*From* [2.5](lessons/02-05-deadlock.md)

### Prevention strategies and what each costs

| policy | condition removed | cost |
|---|---|---|
| shared read mode | mutual exclusion | only available for genuinely shareable resources |
| request everything up front | hold and wait | resources idle for the whole run; starvation of threads needing a popular set |
| abort and restart a waiter | no preemption | lost work, and the same victim can be chosen repeatedly |
| acquire in a fixed global order | circular wait | every code path must comply, and nothing checks it |

*From* [2.5](lessons/02-05-deadlock.md), [2.4](lessons/02-04-classic-synchronization-problems.md)

### Allocation policies and fragmentation

First fit takes the first hole large enough; best fit the smallest; worst fit the largest. **None dominates** — allocation is an online problem, and any policy can be beaten by a sequence built against it.

**Fifty-percent rule.** At equilibrium under first fit, $n$ allocated blocks coexist with about $n/2$ holes, and roughly a third of memory is lost to them.

**Unit-size trade.** With unit $u$, $N$ regions and a table of $t$ bytes per unit over an address range $R$:

$$T(u) = \frac{Nu}{2} + \frac{Rt}{u}, \qquad u^* = \sqrt{\frac{2Rt}{N}}$$

Fragmentation grows linearly in $u$ and table size falls like $1/u$, so the total is convex with an interior minimum.

*From* [3.1](lessons/03-01-address-spaces-and-allocation.md)

### Page-table cost

$$\text{flat table} = \frac{2^{\,\text{VA bits}}}{\text{page size}}\times \text{entry size} \qquad \text{per process, whether used or not}$$

A multi-level table costs one page per level per *used* region: its cost is proportional to the address space **used**, while a flat table's is proportional to the address space **possible**.

| machine | flat table |
|---|---|
| 32-bit, 4 KiB pages, 4-byte entries | 4 MiB per process |
| 48-bit, 4 KiB pages, 8-byte entries | 512 GiB per process — impossible, not merely expensive |

Four-level coverage with 4 KiB pages and 9-bit fields: a leaf table covers 2 MiB, level 3 covers 1 GiB, level 2 covers 512 GiB. (That 2 MiB is exactly why huge pages are 2 MiB.)

*From* [3.2](lessons/03-02-paging-and-the-os-page-table.md)

### Effective access time

$$\mathrm{EAT} = (1-p)\,t_m + p\,t_f$$

With $t_m = 100$ ns and $t_f = 4$ ms:

| $p$ | EAT | slowdown |
|---|---|---|
| $10^{-3}$ | 4,100 ns | 41x |
| $10^{-4}$ | 500 ns | 5x |
| $10^{-5}$ | 140 ns | 1.4x |
| $2.5\times 10^{-6}$ | 110 ns | 1.1x |

For a slowdown below $1+f$: $\;p \le f\,t_m/(t_f - t_m)$.

*From* [3.3](lessons/03-03-demand-paging-and-page-faults.md)

### Thrashing arithmetic

With a disk supplying $F$ faults per second and a workload demanding $R$ faults per second of CPU execution:

$$\text{CPU utilisation} = \min\left(1,\ \frac{F}{R}\right)$$

Every symptom points the wrong way: the CPU looks idle, the disk is saturated, and admitting more work makes it worse. Watch the **fault rate or the disk queue** alongside utilisation.

*From* [3.4](lessons/03-04-page-replacement-and-thrashing.md)

### Path resolution cost

For a path with $k$ directory components traversed, nothing cached, one access per inode and one per directory data block:

$$\text{accesses to open} = 2k + 1, \qquad \text{to read the first byte} = 2k + 2$$

A name cache removes the shared prefix walk, which is nearly all of it when many files are opened in few directories.

*From* [4.1](lessons/04-01-files-directories-and-inodes.md)

### Inode arithmetic

With $d$ direct pointers, block size $B$, pointer size $p$ and $k = B/p$ pointers per block:

$$S_{\max} = \bigl(d + k + k^2 + k^3\bigr)B$$

| region | block indices |
|---|---|
| direct | $0$ to $d-1$ |
| single indirect | $d$ to $d+k-1$ |
| double indirect | $d+k$ to $d+k+k^2-1$ |
| triple indirect | above that |

Block index for byte offset $o$ is $i = \lfloor o/B\rfloor$. Accesses to read one byte, nothing cached: 1 for the inode, plus one per indirection level traversed, plus 1 for the data.

Because $k \propto B$, the double-indirect term scales as $B^3$ — quadrupling the block size multiplies the maximum file size by 64.

Standard case, $B = 4$ KB and $p = 4$ B, so $k = 1024$: 12 direct reach 48 KB, single indirect adds 4 MB, double adds 4 GB, triple adds 4 TB.

*From* [4.2](lessons/04-02-disk-allocation-and-free-space.md)

### Journal crash outcomes

| crash point | recovery | update survives |
|---|---|---|
| journal entry incomplete, no commit | discard | no, cleanly |
| after the commit record | replay | yes |
| partway through the in-place writes | replay the whole entry | yes |
| after in-place writes, before the entry is freed | replay again, harmlessly | yes |

Un-journaled, the four partial outcomes of a three-write append (data D, bitmap B, inode I):

| written | state | `fsck` |
|---|---|---|
| D only | consistent, update lost | nothing to do |
| B only | space leak | repairable |
| I only | inode points at a block marked free | repairable, data is garbage |
| B and I, not D | fully consistent, file holds the previous owner's bytes | **cannot even detect it** |

*From* [4.3](lessons/04-03-crash-consistency-and-journaling.md)

### Disk head movement

$$M = \sum_{i=1}^{n}\left|t_i - t_{i-1}\right|$$

The standard instance — 200 tracks, head at 53, requests 98, 183, 37, 122, 14, 124, 65, 67:

| policy | movement |
|---|---|
| FCFS | 640 |
| SSTF | 236 |
| SCAN | 331 |
| C-SCAN | 382 |
| C-LOOK | 322 |

*From* [4.4](lessons/04-04-io-and-disk-scheduling.md)

### Write amplification

$$\mathrm{WA} = \frac{1}{1-u}, \qquad u = \frac{\text{valid data}}{\text{physical capacity}}$$

| $u$ | WA |
|---|---|
| 0.50 | 2 |
| 0.75 | 4 |
| 0.90 | 10 |
| 0.95 | 20 |

Without TRIM, $u$ is set by every logical block ever written rather than by what is live. Endurance in host bytes is (rated host bytes $\times$ rated WA) divided by the actual WA.

*From* [4.4](lessons/04-04-io-and-disk-scheduling.md)

### Nested page-table walk

With a $g$-level guest table and an $h$-level host table, one translation on a TLB miss costs

$$g(h+1) + (h+1) = (g+1)(h+1) \text{ memory accesses}$$

For $g = h = 4$ that is **25**, of which 24 are page-table reads and one is the data — which is why the figure appears as both 24 and 25. Against 5 on bare metal.

*From* [4.5](lessons/04-05-virtualization-and-containers.md)

### Virtual machines against containers

| | VM | container |
|---|---|---|
| virtualizes | the hardware | the kernel's namespaces |
| boundary enforced by | hardware traps and VM exits | one kernel |
| per-instance overhead | hundreds of MB | a few MB |
| start time | tens of seconds | under a second |
| attack surface between tenants | the hypervisor interface | the whole system-call interface |

The pattern that ships for mutually distrusting tenants: **one VM per tenant, containers inside it.**

*From* [4.5](lessons/04-05-virtualization-and-containers.md)

### ASLR entropy

With $b$ bits of entropy the attacker faces $2^b$ layouts and needs $2^{b-1}$ guesses on average.

| $b$ | expected guesses | at 1,000 tries/s |
|---|---|---|
| 16 (32-bit) | 32,768 | 33 s |
| 28 (64-bit) | 134,217,728 | 37 hours |
| 30 | 536,870,912 | 6.2 days |

Brute force works only because failures are free and knowledge accumulates; rerandomising on crash removes both. A single address disclosure reduces the requirement to one guess.

*From* [4.6](lessons/04-06-os-security-basics.md)

### Latency at a glance

| operation | time | relative to a memory access |
|---|---|---|
| L1 cache hit | 1 ns | 0.01 |
| memory access | 100 ns | 1 |
| thread context switch | 1 us | 10 |
| system call round trip | 0.5 us | 5 |
| process context switch | 4 us | 40 |
| SSD random read | 100 us | 1,000 |
| disk seek plus rotation | 4 ms | 40,000 |
| page fault to disk | 4 ms | 40,000 |

The whole course lives in the last two rows: everything the OS does to avoid them is worth doing, and almost nothing it does costs enough to matter beside them.

*From* [1.2](lessons/01-02-system-calls-and-the-kernel-interface.md), [1.4](lessons/01-04-threads-and-concurrency.md), [3.3](lessons/03-03-demand-paging-and-page-faults.md), [4.4](lessons/04-04-io-and-disk-scheduling.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Virtual address split into page number and offset; multi-level table walk; TLB, TLB reach, huge pages | [`computer-architecture` 4.3](../computer-architecture/lessons/04-03-virtual-memory-and-the-tlb.md) |
| Disk access time as seek plus rotational latency plus transfer; SSD versus HDD; polling, interrupts and DMA | [`computer-architecture` 4.4](../computer-architecture/lessons/04-04-storage-and-io.md) |
| Cache locality, associativity, LRU as a cache policy, average memory access time | [`computer-architecture` 4.1](../computer-architecture/lessons/04-01-caches-and-locality.md), [4.2](../computer-architecture/lessons/04-02-associativity-misses-write-policy.md) |
| Cache coherence and why a shared line ping-pongs between cores | [`computer-architecture` 5.3](../computer-architecture/lessons/05-03-multiprocessors-cache-coherence.md) |
| The ISA as a contract; the stack frame and how an overflow hijacks control | [`computer-architecture` 1.1](../computer-architecture/lessons/01-01-isa-contract-stored-program.md), [1.5](../computer-architecture/lessons/01-05-procedures-stack-calling-convention.md) |
| Amdahl's law and CPI accounting | [`computer-architecture` 5.1](../computer-architecture/lessons/05-01-measuring-performance-cpi-amdahl.md) |
| The call stack and how a frame is built and torn down | [`programming-foundations` 1.3](../programming-foundations/lessons/01-03-recursion-and-the-call-stack.md) |
| High-fan-out balanced trees and why depth is what costs | [`programming-foundations` 3.2](../programming-foundations/lessons/03-02-balanced-trees-the-idea.md) |
| Depth-first search and cycle detection on a directed graph | [`algorithms` 3.2](../algorithms/lessons/03-02-topological-sort-and-strongly-connected-components.md) |
| The exchange argument for proving a greedy schedule optimal | [`algorithms` 2.1](../algorithms/lessons/02-01-the-greedy-method-and-interval-scheduling.md) |
| Approximation ratios and first fit as a bin-packing heuristic | [`algorithms` 4.3](../algorithms/lessons/04-03-approximation-algorithms.md) |
| Rice's theorem: no algorithm decides a non-trivial semantic property of a program | [`theory-of-computation` 4.3](../theory-of-computation/lessons/04-03-rices-theorem-and-more-undecidable-problems.md) |
| Little's law; the M/M/1 queue and why waiting time diverges as utilisation approaches 1 | [`operations-research` 4.1](../operations-research/lessons/04-01-poisson-arrivals-littles-law.md), [4.2](../operations-research/lessons/04-02-the-mm1-queue.md) |
| Pooling and why bounding admissions can improve the metric that matters | [`operations-research` 4.3](../operations-research/lessons/04-03-mmc-pooling-networks.md) |

## Pitfalls

### Privilege and the boundary

- The kernel is not a supervisor process. It runs on the same CPU, only when a trap or interrupt hands it control.
- Privilege and memory protection are **two separate defences**. A load is unprivileged; whether its address translates is a different mechanism entirely.
- A trap is not an error. Two of the three kinds are routine, and a failed system call returns an error code rather than trapping.
- The syscall number is the ABI, not the API. Programs call a library stub, not `ecall` directly.

### Processes and threads

- The child of `fork` resumes at the instruction after the call, with the same stack and variables. Only the return value differs.
- Copy-on-write is a latency optimisation first and a memory one second: it makes `fork` cost the page table, not the address space.
- Globals are shared between threads; `errno` is thread-local only because the library was changed to make it so.
- A thread crash is not contained — threads share an address space, so a wild pointer takes down the process.
- More threads than cores helps only when threads **block**.

### Scheduling

- A preempted process is **ready**, not blocked. Blocked time is not waiting time.
- SJF's optimality assumes all jobs available at time 0. With arrivals it is false, and preemption is what restores it.
- Fairness is not equal CPU shares. An interactive program needs a fast first response far more than a large share.
- Speeding up the CPU does not improve a scheduling overhead percentage, because both terms shrink together.

### Concurrency

- A race needs no preemption on multiple cores.
- `count++` is not atomic, and neither is a 64-bit assignment on every machine. Atomicity comes from an instruction, never from a keyword.
- Making each statement atomic does not make the critical section atomic. Choosing where the section begins is a design decision no primitive makes for you.
- Under Mesa semantics, `while` rather than `if` is a correctness requirement.
- A condition-variable signal to nobody is lost; a semaphore signal is remembered, because the count is state.
- A deadlock-free solution can still starve someone. Bounded waiting is a separate requirement.
- A cycle in the resource graph is a verdict only when every resource type has one unit.
- Unsafe is not deadlocked; most unsafe states never deadlock.

### Memory

- External fragmentation means you are out of *contiguous* memory, which more RAM does not fix.
- Best fit is best at each step, which is a different claim from best overall.
- The page table records what the hardware should enforce now, which is often stricter than what the process may do.
- Address-space identifiers make context switches cheap and do nothing for TLB shootdowns.
- A high fault count means nothing without the minor/major split.
- LRU does not always beat FIFO; on $4,3,2,1,4,3,5,4,3,2,1,5$ with three frames FIFO takes 9 and LRU takes 10.
- Thrashing is not cured by a faster disk. The cure is to reduce demand.

### File systems and I/O

- A file has a link count, not a name.
- `rm` on a file a process still holds open frees nothing until that process exits.
- A symlink is not a lightweight hard link; they are close to opposites.
- Journaling prevents inconsistency, not data loss. Durability of a particular write needs `fsync`.
- A consistent file system is not necessarily a correct one — the undetectable crash outcome passes every check.
- Disk scheduling by seek distance is obsolete on flash; merging, batching and queue depth are not.
- TRIM is not tidiness. It is the only channel through which the drive learns data is dead.

### Virtualization and security

- A container cannot run a different kernel, and a kernel bug is an escape from every container at once.
- Hardware virtualization solved the *instruction* problem; devices are still emulated, which is where the overhead is.
- Root is a policy label, not the mode bit. Root code still runs in user mode.
- ASLR and W-xor-X raise the cost of exploiting a memory-safety bug and do not remove it. ASLR collapses to certainty on one address disclosure.
- Fixing a TOCTTOU window is not fixing the class. Stop resolving the name twice.
