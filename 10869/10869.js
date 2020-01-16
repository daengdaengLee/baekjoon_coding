const readline = require("readline");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => [parseInt(a / b, 10), a % b];

const main = input => {
  const [a, b] = input[0].split(" ").map(v => parseInt(v, 10));
  const output = [
    add(a, b),
    subtract(a, b),
    multiply(a, b),
    ...divide(a, b)
  ].join("\n");
  return output;
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const input = [];
rl
  .on("line", line => input.push(line))
  .on("close", () => console.log(main(input)));

