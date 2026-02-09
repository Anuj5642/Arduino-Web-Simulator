const state = {
  ledPin: 10,
  buttonPin: 2,
  arduinoPlaced: false,
  ledPlaced: false,
  buttonPlaced: false
};

function getPinCenter(pin) {
  const pinEl = document.getElementById(`pin-${pin}`);
  const pinRect = pinEl.getBoundingClientRect();
  const canvasRect = document.querySelector(".canvas").getBoundingClientRect();

  return {
    x: pinRect.left - canvasRect.left + pinRect.width / 2,
    y: pinRect.top - canvasRect.top + pinRect.height / 2
  };
}

function drawWire(start, end, color) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", start.x);
  line.setAttribute("y1", start.y);
  line.setAttribute("x2", end.x);
  line.setAttribute("y2", end.y);
  line.setAttribute("stroke", color);
  line.setAttribute("stroke-width", "2");
  document.getElementById("wires").appendChild(line);
}

function drawWires() {
  const svg = document.getElementById("wires");
  svg.innerHTML = "";

  if (!(state.arduinoPlaced && state.ledPlaced && state.buttonPlaced)) return;

  const ledPinPos = getPinCenter(state.ledPin);
  const btnPinPos = getPinCenter(state.buttonPin);

  drawWire(ledPinPos, { x: 430, y: 192 }, "yellow");
  drawWire(btnPinPos, { x: 430, y: 320 }, "cyan");
}

function updateWiringInfo() {
  document.getElementById("wiringInfo").innerHTML =
    `LED → D${state.ledPin}<br>Button → D${state.buttonPin}`;
}
