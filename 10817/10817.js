const readline = require("readline");

const main = input => {
  const nums = input[0].split(" ").map(v => parseInt(v, 10));
  nums.sort((a, b) => a - b);
  return nums[1];
};

const input = [];
readline
  .createInterface({ input: process.stdin, output: process.stdout })
  .on("line", line => input.push(line))
  .on("close", () => console.log(main(input)));

