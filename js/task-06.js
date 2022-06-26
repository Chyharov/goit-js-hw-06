const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", outFocus);

const count = Number(textInput.attributes["data-length"].value);

function outFocus(event) {
  event.currentTarget.value.length === count
    ? (textInput.classList = "valid")
    : (textInput.classList = "invalid");
}
