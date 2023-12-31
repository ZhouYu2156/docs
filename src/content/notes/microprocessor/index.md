# 微型计算机系统原理及应用



## 第一章、概述

> 世界上第一台现代意义的电子计算机是1946年美国宾夕法尼亚大学设计制造的ENIAC

### 1、计算机的发展：

> 电子管计算机	->	晶体管计算机	->	中小规模集成电路计算机	->	超大规模集成电路计算机

### 2、电子计算机按其性能分类：

> ​	巨型、大型、中型、小型、微型机



### 3、微型计算机系统的组成

（1）微处理器（CPU）

> CPU 是 核心部件，具有运算和控制能力，主要包含：
>
> - 运算器
>
> - 控制器
>
> - 寄存器



（2）微型计算机

> 由CPU、存储器、I/O接口电路、系统总线构成
>
> - 存储器包括『RAM』和『ROM』
> - I/O接口电路用于微机和外部设备的连接
> - 总线结构使得系统各功能部件间的相互关系变为各部件面向总线之间的单一关系

（3）微型计算机系统

> 以微型计算机为中心，配以相应的外围设备以及控制微型计算机工作的软件，就构成了完整的微型计算机系统。
>
> - 微型计算机如果不配有软件，通常称为裸机
> - 软件分为『系统软件』和『应用软件』两大类



### 4、微型计算机的常用术语

（1）『位』和『字节』

- 位（bit）是计算机所能表示的最小最基本的数据单位，它指的是取值只能为 0 或 1 的一个二进制数值位。位作为单位时记作 b
- 字节（Byte）由 8 个二进制位组成，通常用作计算存储容量的单位。字节作为单位时记作 B

| 单位 | 换算                    |
| ---- | ----------------------- |
| 1B   | =8b=2<sup>3</sup>b      |
| 1KB  | =1024B=2<sup>10</sup>B  |
| 1MB  | =1024KB=2<sup>20</sup>B |
| 1GB  | =1024MB=2<sup>30</sup>B |
| 1TB  | =1024GB=2<sup>40</sup>B |



（2）『字长』

- 字长是微处理器一次可以直接处理的二进制数码的位数，它通常取决于微处理器内部『通用寄存器的位数』和『数据总线的宽度』。微处理器的字长有4位、8位、16位和32位等等。
- 8088称为准16位微处理器。



### 5、十进制转其他进制

> <font font="华文宋体" color=orangered>除基取余法</font>，直到商为 0，然后将所有余数从后往前拼接起来就是它对应的该进制的数。



















































