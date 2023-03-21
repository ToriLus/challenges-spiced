// Create a new file name `booleanToString.js`

// ### Part 1

// Declare a variable name `input` and assign a boolean value and a variable name `result`.
// Write an if statement, that takes our `input` value and assign to `result` a string `"Yes"` if input is `true`, or a `"No"` if input is `false`.
// Console Log `result`

// ### Part 2

// Redo part 1 but using the ternary operator instead of the if statement

//PART 1

let input = true;
let result;
if (input) {
  result = "Yes";
} else {
  result = "No";
}
console.log(result);

//Part 2
input ? (result = "Yes") : (result = "No");
console.log(result);
