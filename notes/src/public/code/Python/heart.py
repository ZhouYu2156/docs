import time
import turtle as t
def heart(pen):
    pen.setup(0.5, 0.75, 100, 100)
    pen.ht()  # 隐藏画笔         # 设置状态
    pen.speed(1)  # 设置速度
    pen.width(20)  # 设置画笔宽度, 等同于 pen.pensize() 方法, 值的大小可以改变爱心的圆润程度
    pen.left(45)  # 设置初始角度
    pen.color('orangered')  # 等同于 pen.pencolor()
    pen.fillcolor('red')  # 填充颜色
    pen.begin_fill()  # 准备填充颜色(在路径绘制出来之后)
    # 开始绘制
    pen.fd(100)
    pen.circle(50, 180)
    pen.right(90)
    pen.circle(50, 180)
    pen.fd(100)
    pen.end_fill()
    time.sleep(5)
if __name__ == '__main__':
    print('123')
    heart(t)