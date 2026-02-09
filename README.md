# Arduino Web Simulator

## Abstract
This project presents a web-based Arduino simulation environment developed
as part of the **FOSSEE OSHW Semester Internship Screening Task**.
The system enables users to visually construct a simple Arduino experiment,
automatically generate Arduino code, and perform logic-level simulation
directly within a web browser.

The implementation follows a task-wise incremental development approach
and is inspired by modern online electronics simulators.

---

## Acknowledgements

The author acknowledges the **FOSSEE (Free and Open Source Software for Education)**
initiative under the **Indian Institute of Technology Bombay** for providing
the opportunity and problem statement through the OSHW Semester Internship
Screening Task.

The conceptual design of the simulator is inspired by existing open-source
web-based electronics simulation platforms, particularly **Wokwi**, for its
approach to visual circuit construction and interaction.

General references to Arduino programming concepts, including digital I/O
functions such as `pinMode()`, `digitalRead()`, and `digitalWrite()`, are based
on the official Arduino documentation.

All implementation work, design decisions, and code development have been
carried out independently by the author for academic and evaluation purposes.

---

## Project Website
The live web interface is available at:

https://anuj5642.github.io/Arduino-Web-Simulator/

The website serves as a unified entry point and provides navigation
to individual task implementations.

---

## System Architecture
The project is structured into three independent tasks to clearly
demonstrate incremental functionality.

```mermaid
flowchart TD
    U[User] --> B[Web Browser]
    B --> UI[User Interface Layer]
    UI --> C[Component Handling]
    C --> W[Auto-Wiring Logic]
    W --> G[Code Generation]
    G --> S[Logic-Level Simulation]
    S --> UI
```md

---

## Implementation Technologies
- HTML
- CSS
- JavaScript

No backend services, frameworks, or build tools are used.

---

## Execution Instructions
1. Open the project website using the link provided above, **or**
2. Download the repository and open the required task folder
3. Launch `index.html` using a modern web browser (Chrome recommended)

No additional installation or dependencies are required.

---

## Project Status
- Task 1: Completed
- Task 2: Completed
- Task 3: Completed

---

## Limitations
- The simulator performs **logic-level simulation only**
- Electrical, timing, and microcontroller instruction-level behavior
  are not modeled
