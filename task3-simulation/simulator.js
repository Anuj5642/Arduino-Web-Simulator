const simState = {
  running: false,
  buttonPressed: false
};

function startSimulation() {
  simState.running = true;
}

function stopSimulation() {
  simState.running = false;
  simState.buttonPressed = false;
  updateLED(false);
}

function toggleButton() {
  if (!simState.running) return;

  simState.buttonPressed = !simState.buttonPressed;
  updateLED(simState.buttonPressed);
}

function updateLED(on) {
  const led = document.querySelector(".led");
  if (!led) return;
  led.style.background = on ? "lime" : "red";
}
