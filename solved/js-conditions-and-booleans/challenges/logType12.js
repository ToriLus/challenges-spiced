// ## LogType 🌶️

// Create a file name `logType.js`
// Declare a variable name `data`
// Write a switch statement that take the type of `data` and logs a different string depending on the type/value of `data`.
// The string it logs should be one of the following:

// -   "undefined!"
// -   "null!"
// -   "number!"
// -   "not a number!"
// -   "string!"
// -   "boolean!"
// -   "bigint!"
// -   "function!"
// -   "object!"
// -   "array!"
// -   "I have no idea!"

let data = [(2, 1, 3)];
let whatIsData = typeof data;
let stringyResult;
if (data == null) {
  stringyResult = "null!";
} else if (Array.isArray(data)) {
  stringyResult = "array!";
} else {
  switch (typeof data) {
    case undefined:
      stringyResult = "undefined";
      break;
    case null:
      stringyResult = "null!";
      break;
    case "number":
      stringyResult = "number!";
      break;
    case NaN:
      stringyResult = "not a number!";
      break;
    case "string":
      stringyResult = "string!";
      break;
    case "boolean":
      stringyResult = "boolean!";
      break;
    case "bigint":
      stringyResult = "bigint!";
      break;
    case "function":
      stringyResult = "function!";
      break;
    case Object:
      stringyResult = "Object!";
      break;
    case Array:
      stringyResult = "array!";
      break;
    default:
      stringyResult = "I have no idea";
      break;
  }
}

console.log(stringyResult);

// Undefined	"undefined"
// Null	"object" (reason)
// Boolean	"boolean"
// Number	"number"
// BigInt	"bigint"
// String	"string"
// Symbol	"symbol"
// Function (implements [[Call]] in ECMA-262 terms; classes are functions as well)	"function"
// Any other object	"object"
