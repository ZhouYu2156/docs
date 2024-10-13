def fibonacci(n: int):
    """
    获取斐波那契数列中的某个数: 高效算法
    :param n:
    :return:
    """
    start = 1
    end = 1
    index = 2
    if n <= 0:
        return ''
    elif 1 == n or n == 2:
        return 1
    else:
        while index < n:
            start, end = end, start + end
            index += 1
        return end


for i in range(1, 201):
    print(fibonacci(i), end=', ')