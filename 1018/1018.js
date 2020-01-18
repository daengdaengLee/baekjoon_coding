const readline = require("readline");

const cut = (board, start_row_idx, start_col_idx) => board
  .slice(start_row_idx, start_row_idx + 8)
  .map(row => row.slice(start_col_idx, start_col_idx + 8));

const calc_count_to_change_row = (row, start_color) => row
  .reduce(
    ({ count, color }, val) => ({ count: color === val ? count : count + 1, color: !color }),
    { count: 0, color: start_color }
  )
  .count;

const calc_count_to_change_board = (board, start_color) => board
  .reduce(
    ({ count, color }, row) => ({ count: count + calc_count_to_change_row(row, color), color: !color }),
    { count: 0, color: start_color }
  )
  .count;

const main = input => {
  const [row_count, col_count] = input[0].split(" ").map(v => parseInt(v, 10));
  // "B" -> true, "W" -> false
  const board = input.slice(1).map(line => line.trim().split("").map(val => val === "B"));


  const counts = [...Array(row_count - 8 + 1)]
    .map((_, i) => i)
    .map(start_row_idx => [...Array(col_count - 8 + 1)]
      .map((_, i) => i)
      .map(start_col_idx => cut(board, start_row_idx, start_col_idx))
      .map(cut_board => [true, false].map(v => calc_count_to_change_board(cut_board, v)))
      .reduce((acc, cur) => [...acc, ...cur], [])
    )
    .reduce((acc, cur) => [...acc, ...cur], []);

  return Math.min(...counts);
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const input = [];
rl
  .on("line", line => input.push(line))
  .on("close", () => console.log(main(input)));

