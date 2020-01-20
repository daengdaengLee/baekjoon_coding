const readline = require("readline");

const compare = (a, b) => {
  if (a < b) return "<";
  if (a > b) return ">";
  return "==";
};

const main = input => {
  const [a, b] = input[0].split(" ").map(v => parseInt(v, 10));
  const output = compare(a, b);
  return output;
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const input = [];
rl
  .on("line", line => input.push(line))
  .on("close", () => console.log(main(input)));

