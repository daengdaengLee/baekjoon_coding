const readline = require("readline");

const checkLeapYear = year => {
  if (year % 4 !== 0) return false;
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return true;
};

const main = input => {
  const year = parseInt(input[0], 10);
  const isLeapYear = checkLeapYear(year);
  const output = isLeapYear ? 1 : 0;
  return output;
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const input = [];
rl
  .on("line", line => input.push(line))
  .on("close", () => console.log(main(input)));

