const readline = require("readline");

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const mod = (a, b) => a % b;

const calc1 = (a, b, c) => mod(add(a, b), c);
const calc2 = (a, b, c) => mod(add(mod(a, c), mod(b, c)), c);
const calc3 = (a, b, c) => mod(multiply(a, b), c);
const calc4 = (a, b, c) => mod(multiply(mod(a, c), mod(b, c)), c);

const main = input => {
  const [a, b, c] = input[0].split(" ").map(v => parseInt(v, 10));
  const output = [calc1, calc2, calc3, calc4]
    .map(f => f(a, b, c))
    .join("\n");
  return output;
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const input = [];
rl
  .on("line", line => input.push(line))
  .on("close", () => console.log(main(input)));

