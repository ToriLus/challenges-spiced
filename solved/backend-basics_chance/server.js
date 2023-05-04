import { createServer } from "node:http";
import Chance from "chance";

export const server = createServer((request, response) => {
  response.statusCode = 200;
  const chance = new Chance();
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();
  response.end(
    `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
  );
});
