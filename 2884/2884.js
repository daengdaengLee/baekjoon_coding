const readline = require("readline");

const toMins = (h, m) => h * 60 + m;

const toHoursAndMins = mins => {
  const h = parseInt(mins / 60, 10);
  const m = mins % 60;
  return [h, m];
};

const main = input => {
  const [h, m] = input[0].split(" ").map(v => parseInt(v, 10));
  let alarm_mins = toMins(h, m) - 45;
  if (alarm_mins < 0) alarm_mins = 24 * 60 + alarm_mins;
  const [alarm_h, alarm_m] = toHoursAndMins(alarm_mins);
  return `${alarm_h} ${alarm_m}`;
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const input = [];
rl
  .on("line", line => input.push(line))
  .on("close", () => console.log(main(input)));

