import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

test("add => trying to get a 5 by adding 2 and 3", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("add => checking if the test will return negative value", () => {
  const result = add(2, -5);
  expect(result).toBeLessThan(0);
});

test("add => does it return a value close to 0.3 if called with 0.1 and 0.3", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

test("subtract => does it return 10", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("subtract funct =>  does it return negative value if only the first value is negative?", () => {
  const result = subtract(-5, 10);
  expect(result).toBeLessThan(0);
});

test("multiply funct => returns 8 if called with 2 and 4 (basic function)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("multiply => returns a negative value if only the first value is negative", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});

test("multiply => returns a negative value if only the second value is negative", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});

test("multiply => result a positive if two negatives called", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(0);
});

test("divide => result 3 if called with 9 and 3", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("divide => result you should not do this if called with 0 as a second argument", () => {
  const result = divide(8, 0);
  expect(result).toBe("You should not do this!");
});
