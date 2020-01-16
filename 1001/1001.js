const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const subtract = (a, b) => a - b;

const main = input => {
  const [a, b] = input[0].split(" ").map(v => parseInt(v, 10));
  const output = subtract(a, b);
  return output;
};

const input = [];

rl
  .on("line", line => input.push(line))
  .on("close", () => console.log(main(input)));

