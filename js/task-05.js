const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
inputRef.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim() !== "") {
    outputRef.textContent = event.currentTarget.value;
  } else {
    outputRef.textContent = "Anonimous";
  }
});
