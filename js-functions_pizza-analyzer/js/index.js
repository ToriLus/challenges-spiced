console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let pizzaSize1 = pizzaInput1.value;
let pizzaSize2 = pizzaInput2.value;

pizzaInput1.addEventListener("input", () => {
  // write your code here
  pizzaSize1 = pizzaInput1.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  // write your code here
  let radiusOne = diameter1 / 2;
  let radiusTwo = diameter2 / 2;
  let pizzaOneArea = Math.PI * radiusOne * radiusOne;
  let pizzaTwoArea = Math.PI * radiusTwo * radiusTwo;

  let gain = ((pizzaOneArea - pizzaTwoArea) / pizzaOneArea) * 100;

  let valueGain = Math.round(gain);
  output.textContent = valueGain;
}

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  // write your code here
  let newDisplaySize = (newSize / 24) * 100;
  pizzaElement.style.width = newDisplaySize + "px";
}

// Task 3

function updateOutputColor(size1, size2) {
  // write your code here
  if (size1 > size2) {
    outputSection.style.backgroundColor = rgb(226, 51, 109);
  } else {
    outputSection.style.backgroundColor = rgb(226, 51, 109);
  }
}
