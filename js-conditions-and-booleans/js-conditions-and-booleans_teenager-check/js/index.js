const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
let output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.

  if (age > 12 && age < 20) {
    output.innerHTML = "You are a teen!";
  } else {
    output.innerHTML = "You are not a teen!";
  }
});
//I had to change the output into LET instead of CONST to be able to change the inner HTML and be able to insert the text into the output instead of doing console.log
