const btnDecrRefs = document.querySelector('button[data-action="decrement"]');
const btnIncrRefs = document.querySelector('button[data-action="increment"]');
const valueRefs = document.querySelector("#value");

let counterValue = 0;

const render = () => {
  valueRefs.textContent = counterValue;
};
const pushDecrement = () => {
  counterValue -= 1;
  render();
};
const pushIncrement = () => {
  counterValue += 1;
  render();
};

render();
btnDecrRefs.addEventListener("click", pushDecrement);
btnIncrRefs.addEventListener("click", pushIncrement);
