const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const add = (a, b) => a + b;

const main = input => {
  const line = input[0];
  const [a, b] = line.split(" ").map(v => parseInt(v, 10));
  return add(a, b);
};

const input = [];
rl
  .on("line", line => input.push(line))
  .on("close", () => console.log(main(input)));


