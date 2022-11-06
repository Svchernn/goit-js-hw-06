const rangeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
let size = 16;

const rangeMove = (event) => {
  size = Number(event.currentTarget.value);
  textRef.style.fontSize = `${size}px`;
};
rangeRef.addEventListener("input", rangeMove);
