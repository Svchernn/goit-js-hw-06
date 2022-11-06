function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  body: document.querySelector("body"),
  btn: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

const changeColor = () => {
  refs.body.style.backgroundColor = getRandomHexColor();
};

const colorOutput = (event) => {
  refs.span.textContent = event.currentTarget.value;
};

refs.btn.addEventListener("click", changeColor);
refs.btn.addEventListener("click", colorOutput);
