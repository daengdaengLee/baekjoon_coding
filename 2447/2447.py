def get_total_step(n):
  total_step = 0
  while True:
    total_step += 1
    n = n // 3
    if n == 1:
      return total_step

def make_unit():
  return "***\n* *\n***"

def make_next_str(str):
  strs = str.split("\n")

  first_line = []
  for line in strs:
    first_line.append(line * 3)
  first_line = "\n".join(first_line)

  second_line = []
  for line in strs:
    new_line = line
    new_line += " " * len(line)
    new_line += line
    second_line.append(new_line)
  second_line = "\n".join(second_line)

  third_line = []
  for line in strs:
    third_line.append(line * 3)
  third_line = "\n".join(third_line)
  
  return "\n".join([first_line, second_line, third_line])

def main():
  n = int(input())
  total_step = get_total_step(n)
  star = make_unit()
  for i in range(total_step - 1):
    star = make_next_str(star)

  print(star)

main()
