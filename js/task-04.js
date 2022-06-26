let counterValue = 0;
const decrementBtn = document.querySelector('[data-action = "decrement"]');
const incrementBtn = document.querySelector('[data-action = "increment"]');
const value = document.querySelector("#value");

decrementBtn.addEventListener("click", onDecrementClick);
incrementBtn.addEventListener("click", onIncrementClick);

function onDecrementClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function onIncrementClick() {
  counterValue += 1;
  value.textContent = counterValue;
}