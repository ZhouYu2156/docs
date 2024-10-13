# 前置条件

## 配置静态IP
```bash
# 一键配置 静态IP地址 并 启用
nmcli c add type ethernet con-name "static_conn" ifname ens160 ipv4.addresses 192.168.232.20/24 gw4 192.168.232.2 ipv4.dns "8.8.8.8 114.114.114.114" ipv4.method manual autoconnect yes && nmcli c up static_conn
```

## 关闭防火墙
```bash
$ systemctl stop firewalld      # 本次开机关闭防火墙（重新开机防火墙又会启动）
$ systemctl disable firewalld   # 永久禁用防火墙（以后不会再自动启动了）

$ systemctl enable firewalld    # 开机自启（解开禁止启用）
$ systemctl start firewalld     # 本次立即启动防火墙
```


## 关闭 SELinux 安全策略
```bash
$ setenforce 0      # 临时关闭安全策略
$ getenforce        # 查看当前 selinux 状态(enforcing 表示防御状态，Permission表示允许，disabled 表示关闭状态)
$ sed -i 's/^SELINUX=enforcing$/SELINUX=disabled/' /etc/selinux/config      # 永久关闭安全策略
```

## 网络配置
> - 路径: `/etc/sysconfig/network-scripts/ifcfg-ens33`
> - 使用上面的`一键配置静态IP`的方式更方便

```txt
TYPE=Ethernet       # 网卡类型，指明该配置对应的是以太网接口
PROXY_METHOD=none   # 代理方法设置，none 表示不使用代理
BROWSER_ONLY=no     # 是否仅为浏览器配置网络，no 表示否，对所有应用生效
BOOTPROTO=static    # IP地址分配方式，static表示使用静态IP地址，其他可选值包括dhcp（动态分配）和none
DEFROUTE=yes        # 是否作为默认路由，默认yes，意味着此设备可用作到达其他网络的路由
IPV4_FAILURE_FATAL=yes # IPv4配置失败是否致命，yes表示是，即IPv4配置失败会导致网络服务启动失败
IPV6INIT=yes         # 是否启用IPv6初始化，yes表示启用
IPV6_AUTOCONF=yes   # 是否启用IPv6自动配置，yes表示启用
IPV6_DEFROUTE=yes    # 是否将该设备作为IPv6默认路由，默认yes
IPV6_FAILURE_FATAL=no # IPv6配置失败是否致命，no表示否，即使IPv6配置失败也不会阻止网络服务启动
IPV6_ADDR_GEN_MODE=stable-privacy # IPv6地址生成模式，stable-privacy表示生成稳定且具有隐私保护的地址
NAME=ens33          # 网络接口名称
UUID=10ac735e-0b8f-4b19-9747-ff28b58a1547 # 唯一标识符，用于唯一标示该网络接口配置
DEVICE=ens33        # 指定物理设备名称，与NAME字段相同，进一步确认配置的设备
ONBOOT=yes           # 系统启动时是否激活此网络接口，yes表示系统启动时自动启用该网卡
IPADDR=192.168.232.20 # 指定了使用静态IP后，就要在这里指定该字段自己分配一个静态IP地址
NETMASK=255.255.255.0 # 指定子网掩码
GATEWAY=192.168.232.2 # 指定网关
DNS1=8.8.8.8        # 指定DNS服务器
```

> - 编辑完成并保存后, 使用命令`systemctl restart network`重启网络服务
