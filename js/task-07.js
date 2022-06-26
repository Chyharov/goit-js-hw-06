const rangeTarget = document.querySelector("#font-size-control");
const targetSpan = document.querySelector("#text");

rangeTarget.addEventListener("input", onInput);

function onInput(event) {
  targetSpan.style.fontSize = `${event.target.valueAsNumber}px`;
}
