# Robotics & Kinematics — Syllabus

> Engineering · Tier 2 · ~22 lessons · Prereqs: [control-systems](../control-systems/syllabus.md), [linalg-refresher](../linalg-refresher/syllabus.md) · Roadmap id: `robotics`

## Goal

Take a robot arm — a chain of links and motors — and answer the four questions that make it useful: where is the hand given the joint angles (forward kinematics), what joint angles put the hand where you want (inverse kinematics), how do joint speeds and torques map to hand motion and force (the Jacobian), and what torques make the whole thing move the way you command (dynamics + control). You'll fluently switch between rotation matrices, Euler angles, and quaternions; build kinematic models with Denavit–Hartenberg parameters; and design computed-torque and force controllers on top of a real dynamic model. We close with a taste of mobile robots, localization, and motion planning. We deliberately skip perception and SLAM depth, and learning-based robotics entirely — those are their own courses.

## Dangerous Checklist

When you finish, you can:

- [ ] Compose rotations and translations as homogeneous transforms and read off a frame's pose relative to any other
- [ ] Convert freely between rotation matrices, Euler/fixed angles, axis–angle, and unit quaternions, and say which to reach for
- [ ] Assign Denavit–Hartenberg frames to a serial arm and write its forward kinematics as a product of transforms
- [ ] Solve inverse kinematics analytically for a common arm and set up a numerical solver when no closed form exists
- [ ] Build the manipulator Jacobian and map joint velocities to end-effector twist
- [ ] Locate and interpret singularities from the Jacobian, and explain what breaks near one
- [ ] Relate end-effector forces to joint torques with the Jacobian transpose (statics)
- [ ] Derive a manipulator's equations of motion by both the Lagrangian and recursive Newton–Euler routes
- [ ] Read the $M\ddot{q}+C\dot{q}+g$ structure of the dynamics and say what each term does physically
- [ ] Generate a smooth joint- or Cartesian-space trajectory through via points with velocity/acceleration continuity
- [ ] Design independent-joint, computed-torque, and basic force controllers and argue when each is appropriate
- [ ] Write the kinematics of a differential-drive robot and dead-reckon its pose from wheel motion

## Modules

### Module 1: Spatial descriptions & forward kinematics

Everything in robotics is a frame stapled to a rigid body. This module builds the algebra of position and orientation, then chains it down a robot arm so you can compute exactly where the hand is.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Robots, links & configuration space | Count a mechanism's degrees of freedom and name its joints | links, joints (revolute/prismatic), DOF, configuration space, workspace, serial vs parallel |
| 1.2 | Rotation matrices | Rotate and reorient vectors with an orthonormal matrix and read a frame off its columns | $SO(3)$, orthonormality, columns as axes, active vs passive rotation, composition order |
| 1.3 | Euler & fixed angles, axis–angle | Encode an orientation three ways and convert between them | roll–pitch–yaw, ZYX Euler, gimbal lock, axis–angle, exponential of a rotation |
| 1.4 | Quaternions | Represent and compose orientations without singularities | unit quaternions, quaternion product, rotation by conjugation, slerp (touch), vs Euler trade-offs |
| 1.5 | Homogeneous transforms | Pack rotation and translation into one $4\times4$ matrix and compose poses | $SE(3)$, homogeneous coordinates, transform inverse, frame chains, mapping vs operator views |
| 1.6 | Denavit–Hartenberg & forward kinematics | Assign DH frames and write an arm's pose as a product of link transforms | DH parameters $(a,\alpha,d,\theta)$, link/joint offsets, $^0T_n$ product, tool frame |

**Boss problem 1:** A planar 3R arm has link lengths $L_1=L_2=L_3=1$ and joint angles $\theta_1=\theta_2=\theta_3=30°$. (a) Write the DH table (all $\alpha_i=0$, $d_i=0$, $a_i=L_i$). (b) Form the forward-kinematics transform $^0T_3$ and extract the end-effector position and orientation. Confirm the hand sits at $(x,y)\approx(1.366,\,2.366)$ with orientation angle $90°$. (c) State how the answer changes if joint 2 were prismatic instead of revolute.

### Module 2: Inverse kinematics & the Jacobian

Forward kinematics answers "where is the hand?"; the hard, useful direction is the reverse — and the Jacobian is the bridge between joint rates and hand motion that makes velocities, forces, and numerical IK all one idea.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Inverse kinematics: analytic | Solve joint angles in closed form for a common arm and count solutions | geometric/algebraic IK, cosine law, elbow-up/down, multiplicity, solvability & reachability |
| 2.2 | Inverse kinematics: numerical | Set up an iterative solver when no closed form exists | Newton–Raphson on FK, Jacobian inverse/pseudoinverse, damped least squares, convergence & seeds |
| 2.3 | The manipulator Jacobian | Map joint velocities to end-effector linear and angular velocity | geometric Jacobian, twist, column-by-column construction, revolute vs prismatic contributions |
| 2.4 | Singularities | Find configurations where the Jacobian loses rank and explain the failure | $\det J$, rank loss, boundary vs interior singularities, lost DOF, blow-up of joint rates |
| 2.5 | Statics & the Jacobian transpose | Relate end-effector wrench to joint torques | virtual work, $\tau = J^{\top} F$, force ellipsoid (touch), duality of velocity and force |

**Boss problem 2:** A planar 2R arm has $L_1=L_2=1$ and must reach $(x,y)=(1,1)$. (a) Solve inverse kinematics for both elbow configurations; show $\cos\theta_2 = 0$ so $\theta_2 = \pm 90°$. (b) Write the $2\times2$ Jacobian and show $\det J = L_1 L_2 \sin\theta_2$; evaluate it at your solution. (c) State the two joint configurations where the arm is singular and describe, physically, the direction the hand can no longer move. (d) If a $10\,\text{N}$ force pushes the hand in $+x$, use $\tau=J^{\top}F$ to give the required joint torques at $\theta_2=90°$.

### Module 3: Dynamics & trajectory generation

Kinematics ignores mass; to actually command motors you need torques. This module derives the equations of motion two complementary ways, reads their structure, then plans smooth motions to feed the controller.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Lagrangian dynamics of manipulators | Derive equations of motion from kinetic and potential energy | Lagrangian $L=T-V$, generalized coordinates, Euler–Lagrange equation, joint torques |
| 3.2 | The manipulator dynamics equation | Read the $M(q)\ddot{q}+C(q,\dot{q})\dot{q}+g(q)=\tau$ form and name every term | mass/inertia matrix, Coriolis & centrifugal, gravity vector, configuration dependence |
| 3.3 | Newton–Euler recursive dynamics | Compute joint torques by an outward–inward recursion | link-by-link forces/moments, forward velocity/inward force sweep, $O(n)$ efficiency vs Lagrangian |
| 3.4 | Joint-space trajectories | Design a smooth single-joint path with matched endpoint velocities | cubic & quintic polynomials, boundary conditions, velocity/acceleration continuity, trapezoidal profiles |
| 3.5 | Cartesian trajectories & via points | Plan hand-space paths through waypoints and handle orientation | straight-line Cartesian paths, via points, blends, orientation interpolation, kinematic-limit checks |

**Boss problem 3:** A single-link arm (point mass $m=2\,\text{kg}$ at length $l=0.5\,\text{m}$, so inertia $I=ml^2$) rotates in a vertical plane with $\theta$ measured from horizontal; gravity acts down. (a) Use the Lagrangian to derive its equation of motion $I\ddot{\theta}+mgl\cos\theta=\tau$. (b) Design a cubic joint trajectory from $\theta(0)=0$ to $\theta(T)=\pi/2$ with zero endpoint velocities; give the coefficients and show that at the midpoint $t=T/2$ the arm is at $\theta=\pi/4$ with $\ddot{\theta}=0$. (c) Compute the feedforward torque required at that midpoint, $\tau = mgl\cos(\pi/4) = mgl/\sqrt{2} \approx 6.9\,\text{N·m}$.

### Module 4: Control & mobile robots

A dynamic model earns its keep when you close a loop around it. This module builds up manipulator controllers from naive to model-based, adds force control for contact, then takes a taste of the mobile-robot world where the base itself moves.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Independent-joint control | Control each joint as a decoupled second-order system and see where it fails | PD/PID per joint, actuator + gear model, disturbance from coupling & gravity, gain limits |
| 4.2 | Computed-torque control | Cancel the nonlinear dynamics to get clean linear error dynamics | inverse-dynamics control, feedback linearization, $\ddot{e}+K_d\dot{e}+K_p e=0$, model-error sensitivity |
| 4.3 | Force & hybrid control | Regulate contact force instead of (or alongside) position | stiffness/impedance control, hybrid position/force, selection matrices, constrained directions |
| 4.4 | Wheeled mobile robots | Write the kinematics of a differential-drive / unicycle robot | nonholonomic constraint, unicycle model, diff-drive wheel-speed map, pose $(x,y,\phi)$ |
| 4.5 | Localization: a taste | Estimate a mobile robot's pose from motion and noisy measurements | dead reckoning, odometry drift, belief, Bayes filter idea, Kalman filter (named, not derived) |
| 4.6 | Motion planning: a taste | Frame planning as search in configuration space | configuration-space obstacles, roadmaps (PRM), sampling (RRT), potential fields, completeness (touch) |

**Boss problem 4:** (a) For the single-link arm of Boss 3, write a computed-torque control law $\tau = I(\ddot{\theta}_d - K_d\dot{e} - K_p e) + mgl\cos\theta$ (with $e=\theta-\theta_d$) and show it yields $\ddot{e}+K_d\dot{e}+K_p e=0$; pick $K_p,K_d$ for critical damping at natural frequency $\omega_n=10\,\text{rad/s}$ (answer: $K_p=100$, $K_d=20$). (b) A differential-drive robot has wheel radius $r=0.05\,\text{m}$ and wheel separation $L=0.3\,\text{m}$. With right/left wheel speeds $\dot{\varphi}_R=10$, $\dot{\varphi}_L=8\,\text{rad/s}$, compute the body forward speed $v=r(\dot{\varphi}_R+\dot{\varphi}_L)/2$ and turn rate $\omega=r(\dot{\varphi}_R-\dot{\varphi}_L)/L$ (answer: $v=0.45\,\text{m/s}$, $\omega\approx0.33\,\text{rad/s}$), and name the nonholonomic constraint that keeps it from sliding sideways.

## Sources of truth

- Craig, *Introduction to Robotics: Mechanics and Control* — DH convention, Jacobian, and Newton–Euler notation this course follows.
- Spong, Hutchinson & Vidyasagar, *Robot Modeling and Control* — Lagrangian dynamics and computed-torque/force-control treatment.
- Lynch & Park, *Modern Robotics* — screw/twist and $SE(3)$ intuition (we use the classical DH framing but borrow their geometric clarity).
- Siciliano, Sciavicco, Villani & Oriolo, *Robotics: Modelling, Planning and Control* — trajectory generation and mobile-robot kinematics.
