# Task 2 – Automatic Wiring with Visible Arduino Pins

## Objective
The objective of Task 2 is to extend the web-based interface by introducing
automatic wiring between components and configurable Arduino digital pins.

---

## Methodology
The Arduino Uno is represented with explicitly visible digital pins
(D2–D13). Default pin assignments are applied automatically when components
are placed on the canvas. Users may reassign pins through the interface,
with automatic conflict prevention and real-time updates to wiring and
generated code.

---

## Implemented Features
- Arduino Uno with visible digital pins (D2–D13)
- Default pin assignment:
  - LED → Digital Pin 10
  - Push Button → Digital Pin 2
- Automatic wiring between components and Arduino pins
- User-configurable pin selection
- Pin conflict prevention
- Visual wires that snap to selected pins
- Automatic Arduino code generation reflecting pin changes

---

## Scope
- Logical wiring representation only
- No simulation of component behavior

---

## Acknowledgements

The design approach for visible Arduino pin representation and automatic
wiring is inspired by open-source circuit simulation tools, particularly
Wokwi, while ensuring independent implementation aligned with the
screening task requirements.

---

## Technologies Used
- HTML
- CSS
- JavaScript

---

## Status
- ✅ Task 2 successfully completed.
