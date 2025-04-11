let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.getElementById("value");

decrement.onclick = function () {
  if (counterValue > 0) {
    counterValue--;
    value.innerText = counterValue;
  }
};

increment.onclick = function () {
  counterValue++;
  value.innerText = counterValue;
};
