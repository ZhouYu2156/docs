def multiplication_table():
    """
    输出九九乘法表
    :return:
    """
    for i in range(1, 9 + 1):
        for j in range(1, i + 1):
            print(f'{i} * {j} = {i * j}', end='\t')
        print()