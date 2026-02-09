function allowDrop(ev) {
  ev.preventDefault();
}

document.querySelectorAll(".part").forEach(part => {
  part.addEventListener("dragstart", ev => {
    ev.dataTransfer.setData("text", part.dataset.part);
  });
});

function dropPart(ev) {
  ev.preventDefault();
  const part = ev.dataTransfer.getData("text");
  let el;

  if (part === "Arduino" && !state.arduinoPlaced) {
    el = document.createElement("div");
    el.className = "arduino";
    el.innerHTML = `
      <div class="board-title">ARDUINO UNO</div>
      <div class="pin-column">
        ${Array.from({ length: 12 }, (_, i) => {
          const pin = i + 2;
          return `
            <div class="pin" id="pin-${pin}">
              <span class="dot"></span>
              <span class="label">D${pin}</span>
            </div>
          `;
        }).join("")}
      </div>
    `;
    state.arduinoPlaced = true;
  }

  if (part === "LED" && !state.ledPlaced) {
    el = document.createElement("div");
    el.className = "led";
    state.ledPlaced = true;
  }

  if (part === "Button" && !state.buttonPlaced) {
    el = document.createElement("div");
    el.className = "push-button";
    el.innerText = "BTN";
    el.onclick = toggleButton;
    state.buttonPlaced = true;
  }

  if (el) ev.target.appendChild(el);

  drawWires();
}

function populatePins() {
  const led = document.getElementById("ledPin");
  const btn = document.getElementById("buttonPin");

  led.innerHTML = "";
  btn.innerHTML = "";

  for (let i = 2; i <= 13; i++) {
    if (i !== state.buttonPin)
      led.innerHTML += `<option value="${i}" ${i===state.ledPin?"selected":""}>D${i}</option>`;
    if (i !== state.ledPin)
      btn.innerHTML += `<option value="${i}" ${i===state.buttonPin?"selected":""}>D${i}</option>`;
  }
}

function updatePins() {
  state.ledPin = Number(document.getElementById("ledPin").value);
  state.buttonPin = Number(document.getElementById("buttonPin").value);
  populatePins();
  updateWiringInfo();
  drawWires();
  generateCode();
}

function toggleCode() {
  const panel = document.getElementById("codePanel");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
}

populatePins();
updateWiringInfo();
generateCode();
