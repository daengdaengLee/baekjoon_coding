const readline = require("readline");

const splitNumByDigit = num => {
  const digits = [];

  while (num >= 10) {
    const digit = num % 10;
    num = parseInt(num / 10);
    digits.push(digit);
  }
  digits.push(num);

  return digits.reverse();
};

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const multiplyByDigit = (a, b) => {
  const intermediates = splitNumByDigit(b)
    .reverse()
    .map(n => multiply(a, n));
  const result = intermediates
    .map((n, i) => multiply(n, Math.pow(10, i)))
    .reduce(add);

  return [...intermediates, result];
};

const main = input => {
  const [a, b] = input
    .map(v => parseInt(v, 10));
  const output = multiplyByDigit(a, b).join("\n");
  return output;
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const input = [];
rl
  .on("line", line => input.push(line))
  .on("close", () => console.log(main(input)));

