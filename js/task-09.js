function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const addColor = document.querySelector(".color");

buttonChangeColor = addEventListener("click", () => {
  const HexColor = getRandomHexColor();
  document.body.style.backgroundColor = HexColor;
  addColor.textContent = HexColor;
});
