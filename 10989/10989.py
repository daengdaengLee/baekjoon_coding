import sys

result = [0 for _ in range(10001)]
input_count = int(sys.stdin.readline())

for _ in range(input_count):
    result[int(sys.stdin.readline())] += 1
    
for num in range(len(result)):
    for _ in range(result[num]):
        print(num)

