# Steps:

1. declare a variable for the result as an empty array
2. declare a variable for the quantity of positive numbers with an initial value of 0;
3. declare a variable for the total of negative subtractions with an initial value of 0;
4. if the length of the input array is zero or if it's null, give back an empty result container.
5. Loop over the input array
6. if the element in the array is higher than zero, add a 1 to the variable for the positive number
7. if the element in the array is less than zero, add the negative number to the variable for the negative subtractions
8. put both numbers into the result array, in the order declared
9. return the result array

```js
let result;
let positiveNumbers;
let negativeNumbers;

if(inputArray.length === 0)
```
