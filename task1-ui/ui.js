function allowDrop(ev) {
  ev.preventDefault();
}

/* Enable dragging */
document.querySelectorAll(".part").forEach(part => {
  part.addEventListener("dragstart", ev => {
    ev.dataTransfer.setData("text", part.dataset.part);
  });
});

/* Drop logic */
function dropPart(ev) {
  ev.preventDefault();
  const part = ev.dataTransfer.getData("text");

  let element;

  if (part === "Arduino") {
    element = document.createElement("div");
    element.className = "arduino";
    element.innerText = "ARDUINO UNO";
  }

  if (part === "LED") {
    element = document.createElement("div");
    element.className = "led";
  }

if (part === "Button") {
  element = document.createElement("div");
  element.className = "push-button";
  element.innerText = "BTN";

  element.onclick = () => {
    element.style.background = "#999";
    setTimeout(() => {
      element.style.background = "#555";
    }, 150);
  };
}

  ev.target.appendChild(element);
}

/* Toggle code panel */
function toggleCode() {
  const panel = document.getElementById("codePanel");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
}
