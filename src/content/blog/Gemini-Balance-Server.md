---
title: Gemini Balance apikey轮训代理保姆级搭建教程
description: Gemini Balance apikey 轮训代理保姆级搭建教程
pubDate: "2025-10-22"
draft: false
image: "![](https://image.furprint.top/Blogs/gemini-balance-banner.webp)"
categories:
  - Documentation
tags:
  - Gemini
  - Gemini Balance
  - APIKEY
  - 教程
---

# 需要准备什么？

**1.** Github账号，用于fork项目仓库【[官网](www.github.com)】【[项目仓库](https://github.com/snailyp/gemini-balance)】

**2.** Zeabur账号`记得要绑定手机号 + 绑定Github`，用于免费部署Gemini Balance项目【[官网](www.zeabur.com)】

**3.** 你最好有代理可用，否则可能会出现Github或Zeabur官网进不去的情况

---

## 一、前往Github fork项目仓库

**1.** 登录Github后，前往**snailyp**大佬的**Gemini Balance**仓库【[仓库地址](https://github.com/snailyp/gemini-balance)】

**2.** 随后按下图操作`fork`项目到自己的仓库中即可

<img src="https://vip.123pan.cn/1815727707/ymjew503t0m000d7w32xx380e4nclf33DIYPAIUvAwUOAvxvAdrxAa==.png" style="zoom: 33%;" />

<img src="https://vip.123pan.cn/1815727707/yk6baz03t0n000d7w33hdzpryr486lj3DIYPAIUvAwUOAvxvAdrxAa==.png" style="zoom:33%;" />

## 二、前往Zeabur部署该项目

**1.** 注册并绑定手机号以及Github之后，点`创建新项目`

<img src="https://vip.123pan.cn/1815727707/yk6baz03t0l000d7w33fsd8dq193tgnxDIYPAIUvAwUOAvxvAdrxAa==.png" style="zoom: 67%;" />

**2.** 推荐选择腾讯云的服务`Silicon Valley,United States`

![](https://vip.123pan.cn/1815727707/ymjew503t0n000d7w32ycg42wq33dfdxDIYPAIUvAwUOAvxvAdrxAa==.png)

**3.** 选择`Github`后再选择你**fork**下来的**gemini balance**仓库，如果没有的话就先点 `配置Github`

<img src="https://vip.123pan.cn/1815727707/ymjew503t0l000d7w32xfgbq807umx8aDIYPAIUvAwUOAvxvAdrxAa==.png" style="zoom: 80%;" />

<img src="https://vip.123pan.cn/1815727707/yk6baz03t0m000d7w33gj80ku9oq7m5zDIYPAIUvAwUOAvxvAdrxAa==.png" style="zoom: 80%;" />

**4.** 在构建计划预览中点`配置-编辑原始环境变量`把以下代码完整替换其中的内容，最后再依次`保存-下一步`即可

```环境变量
TZ=Asia/Shanghai
API_KEYS=[""] ###可以暂时不填，稍后去网页一键导入
DATABASE_TYPE=sqlite
SQLITE_DATABASE=default_db
ALLOWED_TOKENS=[""] ###这是你项目的apikey，同时也是稍后部署网页的登录密码
```

<img src="https://vip.123pan.cn/1815727707/yk6baz03t0n000d7w33hdzvkav4cld73DIYPAIUvAwUOAvxvAdrxAa==.png" style="zoom:80%;" />

<img src="https://vip.123pan.cn/1815727707/ymjew503t0m000d7w32xx3a8oqnh01ohDIYPAIUvAwUOAvxvAdrxAa==.png" style="zoom:80%;" />

<img src="https://vip.123pan.cn/1815727707/ymjew503t0m000d7w32xx3ab4enh58niDIYPAIUvAwUOAvxvAdrxAa==.png" style="zoom:80%;" />

**5.** 随后会跳转到当前部署项目的主页，打开`Add Domain`之后，再选择`暴露新的端口`，随后填写`8000`后选择`暴露`，系统自动给到的8080端口可以选择删除，不影响

<img src="https://vip.123pan.cn/1815727707/yk6baz03t0l000d7w33fsd942q94mpdrDIYPAIUvAwUOAvxvAdrxAa==.png" style="zoom:80%;" />

<img src="https://vip.123pan.cn/1815727707/yk6baz03t0m000d7w33gj82nq8oshe9qDIYPAIUvAwUOAvxvAdrxAa==.png" style="zoom:80%;" />

**6.** 选择`生成域名`，填入一个你喜欢的域名且显示`域名可用`后选择`确认绑定`即可，等待域名变绿后即可前往使用

> 你也可以选择`自定域名`，按照提示添加dns解析即可

<img src="https://vip.123pan.cn/1815727707/yk6baz03t0l000d7w33fsda6tc95vgf1DIYPAIUvAwUOAvxvAdrxAa==.png" style="zoom:80%;" />

## 三、去网页配置Gemini Apikey

**1.** 前往你生成的域名，密码就是之前环境变量`ALLOWED_TOKENS=[""]`中括号里的内容，随后再选择`配置编辑`

<img src="https://vip.123pan.cn/1815727707/yk6baz03t0n000d7w33hdzycjc4evig6DIYPAIUvAwUOAvxvAdrxAa==.png" style="zoom:80%;" />

<img src="https://vip.123pan.cn/1815727707/yk6baz03t0l000d7w33fsdaecc964p4dDIYPAIUvAwUOAvxvAdrxAa==.png" style="zoom:80%;" />

**2.** 随后选择`添加密钥`，把你的**apikey**全部粘贴进去后选择`确认添加`，随后一定要拉到页面最下方点击`保存配置`后即可生效

> apikey可以去小黄鱼买，几块钱几十个，主要是方便，不嫌麻烦可以去Google AI Studio自己创建

<img src="https://vip.123pan.cn/1815727707/ymjew503t0l000d7w32xfgd3u57wxtfkDIYPAIUvAwUOAvxvAdrxAa==.png" style="zoom:80%;" />

<img src="https://vip.123pan.cn/1815727707/ymjew503t0m000d7w32xx3bduznjbb4kDIYPAIUvAwUOAvxvAdrxAa==.png" style="zoom:80%;" />

## 四、须知

**完成上述步骤之后，你所部署的项目域名链接`https://xxx.zeabur.app/`就是你的api服务器地址，而你用于登录网页的密码也就是你这个api服务器的`Apikey`**
