def init_n(d):
    n = 1
    while True:
        if n * n > d:
            return n - 1
        n += 1


def main(x, y):
    d = y - x

    if d <= 2:
        return d

    n = init_n(d)
    remain_d = d - (n * n)
    
    if remain_d == 0:
        return n + (n - 1)
    if remain_d % n == 0:
        return n + (n - 1) + (remain_d // n)
    return n + (n - 1) + (remain_d // n) + 1



print(main(0, 3)) # 3
print(main(1, 5)) # 3
print(main(45, 50)) # 4
print(main(0, 15)) # 7
print(main(20, 23)) # 3
print(main(0, 2147483647)) # 92681
print(main(1, 2147483647)) # 92681
print(main(2, 2147483647)) # 92681
print(main(41706, 2147483647)) # 92681
print(main(41707, 2147483647)) # 92680
print(main(2147483643, 2147483647)) # 3
print(main(2147483644, 2147483647)) # 3
print(main(2147483645, 2147483647)) # 2
print(main(2147483646, 2147483647)) # 1
print(main(0, 1)) # 1
print(main(0, 2)) # 2
print(main(0, 3)) # 3
print(main(0, 4)) # 3

