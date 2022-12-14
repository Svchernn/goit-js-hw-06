const inputRef = document.querySelector("#validation-input");

function onInputBlur() {
  if (Number(inputRef.value.length) === Number(inputRef.dataset.length)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}

inputRef.addEventListener("blur", onInputBlur);
