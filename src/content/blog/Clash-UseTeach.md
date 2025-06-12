---
title: Clash Verge的基础使用与配置git代理
description: Clash Verge的基础使用与配置git代理
pubDate: 06 13 2025
image: "https://vip.123pan.cn/1815727707/yk6baz03t0m000d7w33g8skw8lavvjroDIYPAIUvAwUOAvxvAdrxAa==.png"
categories:
  - Documentation
tags:
  - Windows
  - Clash
  - Clash Verge For Windows
  - 教程
---

# Clash Verge项目仓库
**Clash Verge**：https://github.com/clash-verge-rev/clash-verge-rev
***
## 什么是Clash Verge
Clash Verge是代理工具Clash内核的GUI图形客户端，支持Windows、Linux、macOS系统，分流规则功能强大且支持多种代理协议，如V2Ray、Trojan、Shadowsocks、ShadowsocksR、Socks等协议，使用方法和功能和Clash for Windows类似，可以完美代替Clash for Windows使用
***
### 下载Clash Verge
使用Clash Verge官方的`Github Release`进行下载【[点击跳转](https://github.com/clash-verge-rev/clash-verge-rev/releases/tag/v2.2.3)】  
使用本站上传至`蓝奏云`的方式进行下载【[点击跳转](https://haman.lanzoul.com/iwnTg2ynx6aj)】
***
### 使用Clash Verge
1. 打开Clash Verge后你将会看见如下界面
![](https://vip.123pan.cn/1815727707/yk6baz03t0n000d7w33h277pb1k59ehqDIYPAIUvAwUOAvxvAdrxAa==.png)
2. 点击订阅来到这个页面
![](https://vip.123pan.cn/1815727707/ymjew503t0m000d7w32xrobeg43wash8DIYPAIUvAwUOAvxvAdrxAa==.png)
3. 在顶部写有`订阅文件链接`的导航栏中填入自己的订阅链接，如果你是为了临时使用git克隆仓库，或一些其他临时的需求，你可以订阅本站提供的订阅链接：https://furprint.online/furprint?sub 将订阅链接填入其中后直接点击旁边的导入按钮即可
![](https://vip.123pan.cn/1815727707/yk6baz03t0l000d7w33fgb4uqtowi9ubDIYPAIUvAwUOAvxvAdrxAa==.png)
4. 导入完成后，你将会看见如下界面，点击选中刚订阅的文件
![](https://vip.123pan.cn/1815727707/yk6baz03t0m000d7w33g9msf1n4ixx17DIYPAIUvAwUOAvxvAdrxAa==.png)
5. 然后点击左侧的`代理`，展开节点选择后，点击选择一个延迟最低的节点使用
![](https://vip.123pan.cn/1815727707/yk6baz03t0n000d7w33h277q4sk5a0ntDIYPAIUvAwUOAvxvAdrxAa==.png)
6. 在系统的任务栏右下角找到软件图标，然后`右键`再点击`系统代理`，出现`√`就代表启动了
![](https://vip.123pan.cn/1815727707/yk6baz03t0l000d7w33fgb4veoowj1rrDIYPAIUvAwUOAvxvAdrxAa==.png)
### 配置git代理
1. 打开Clash Verge，点击左侧的`设置`，找到其`端口设置`，并记录下端口是多少，以下以7897为例做演示
![](https://vip.123pan.cn/1815727707/ymjew503t0n000d7w32y6hpusijinh65DIYPAIUvAwUOAvxvAdrxAa==.png)
2. 打开CMD，输入以下指令用于配置git代理，此处的`7897`必须对应Clash Verge中的`端口设置`
```bash
git config --global http.proxy http://127.0.0.1:7897
```
配置好后不会有任何反馈，接下来在Clash Verge的`系统代理`启用的情况下，git就会成功走代理啦
![](https://vip.123pan.cn/1815727707/yk6baz03t0m000d7w33g9msfz64iyst4DIYPAIUvAwUOAvxvAdrxAa==.png)
> 如果需要取消代理，再在CMD使用以下指令即可
> ```bash
> git config --global --unset http.proxy
> ```
> 取消后依旧不会有任何反馈，但git将不会再走代理