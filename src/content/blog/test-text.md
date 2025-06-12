---
title: 【胎教级】Windows使用Lagrange.Onebot + Nonebot部署MaiMBot
description: 胎教级的Windows下MaiMbot部署教程
pubDate: 06 12 2025
image: "https://vip.123pan.cn/1815727707/yk6baz03t0l000d7w33feu09msv9ggglDIYPAIUvAwUOAvxvAdrxAa==.png"
categories:
  - Documentation
tags:
  - Windows
  - Lagrange.onebot
  - Nonebot
  - MaiMBot
  - 教程
---

# 各项目仓库
**Lagrange**：https://github.com/LagrangeDev/Lagrange.COre  
**Nonebot**：https://github.com/nonebot/nonebot2  
**MaiMBot**：https://github.com/MaiM-with-u/MaiBot  
***
## 准备工作&环境
Windows10、11 或 Windows Server 2016 及以上  
Python版本3.10及以上  **安装时必须勾选 ADD PATH 【[Python下载](https://haman.lanzoul.com/iSNQr2ynsv0j) 】【[官网链接](https://www.python.org/)】**  
Git  安装时可无脑下一步【[Git下载](https://haman.lanzoul.com/isoOn2ynt6je)】【[官网链接](https://git-scm.com/)】  
>国内网络环境可能无法使用git指令克隆github的仓库   
>建议使用代理软件，并配置好git的代理   
>推荐使用 Clash**【[Clash下载](https://haman.lanzoul.com/iwnTg2ynx6a)】【[项目仓库](https://github.com/clash-verge-rev/clash-verge-rev)】  
>如果你还不会使用Clash或设置git的代理，可以前往【[Clash教程]()】查看帮助  
>如果你没有节点可用，可以先临时订阅本站提供的节点  
>订阅链接在博客主页下滑自行查找，请勿恶意使用  

***
### 创建并启用虚拟环境
1. 随意找个地方创建一个文件夹，建议纯英文，以下以`Furprint`为例
2. 进入`Furprint`文件夹，点击文件夹上方的导航栏，输入`cmd`并直接回车
![打开cmd](https://vip.123pan.cn/1815727707/yk6baz03t0m000d7w33g9ms2um4ijuayDIYPAIUvAwUOAvxvAdrxAa==.png)
3. 此时会打开命令窗口，接下来以此复制以下指令粘贴到命令窗口并回车使用
```cmd
python -m venv MaiBotEnv
```
正确输入后不会有其他反馈，但是会多出一个文件夹`MaiBotEnv`
![创建虚拟环境1](https://vip.123pan.cn/1815727707/yk6baz03t0m000d7w33g9ms5mg4imdr4DIYPAIUvAwUOAvxvAdrxAa==.png)
4. 继续输入指令用于启用虚拟环境，复制完整，其中的`.`也算哦！
```cmd
.\\MaiBotEnv\\Scripts\\activate
```
正确启用后，你的路径前缀应该长这样  
>后续启动Bot的时候，都应该先在最初创建的文件夹`Furprint`目录下启用虚拟环境后再操作  
>可以使用`cd 文件夹名字`的方式进入对应的文件，返回上一级文件夹则是使用`cd ..`


![进入虚拟环境](https://vip.123pan.cn/1815727707/ymjew503t0l000d7w32x9999bro9p60fDIYPAIUvAwUOAvxvAdrxAa==.png)
***
### 使用git指令克隆仓库
> 此时你所在的文件夹目录应当是`Furprint`，并且已启用虚拟环境

1. 克隆`MaiMBot`本体
```CMD
git clone https://github.com/MaiM-with-u/MaiBot.git
```
正确反馈应当如下，且文件夹内新增`MaiBot`文件夹
![克隆本体](https://vip.123pan.cn/1815727707/yk6baz03t0m000d7w33g9ms84c4ipajpDIYPAIUvAwUOAvxvAdrxAa==.png)
2. 克隆`Maim_Message`包
```CMD
git clone https://github.com/MaiM-with-u/maim_message.git
```
正确反馈应当如下，且文件夹内新增`maim_message`文件夹
![克隆message](https://vip.123pan.cn/1815727707/ymjew503t0l000d7w32x9999rno9qg94DIYPAIUvAwUOAvxvAdrxAa==.png)
3. 克隆`NoneBot-Adapters`适配器
```CMD
git clone https://github.com/MaiM-with-u/nonebot-plugin-maibot-adapters.git
```
正确反馈应当如下，且文件夹内新增`nonebot-plugin-maibot-adapters`文件夹
![NonebotAdapters](https://vip.123pan.cn/1815727707/yk6baz03t0n000d7w33h277j4ck5229gDIYPAIUvAwUOAvxvAdrxAa==.png)
***
### 安装依赖
> 此时你所在的文件夹目录应该是`MaiBot`，开启虚拟环境后使用`cd maibot`即可

1. 安装依赖
```CMD
pip install -i https://mirrors.aliyun.com/pypi/simple -r .\\requirements.txt
```
可能会在最后一步卡很长一段时间，回车一下后刷会儿视频慢慢等就好（
![依赖安装](https://vip.123pan.cn/1815727707/ymjew503t0m000d7w32xrobc1v3w5o2wDIYPAIUvAwUOAvxvAdrxAa==.png)
2. 进入`maim_message`文件夹，并安装这个包
> 此时你应该处于虚拟环境下

```CMD
pip install -e .
```
![安装包](https://vip.123pan.cn/1815727707/yk6baz03t0m000d7w33g9ms8xs4iqdjaDIYPAIUvAwUOAvxvAdrxAa==.png)
***
### 安装NoneBot
在CMD中使用指令
```CMD
pip install -i https://mirrors.aliyun.com/pypi/simple nb-cli
```
正确反馈应当如下，我这是已经下载好了，第一次下载应当会有下载的进度条
![Nonebot](https://vip.123pan.cn/1815727707/ymjew503t0n000d7w32y6hpsbljiitowDIYPAIUvAwUOAvxvAdrxAa==.png)
***
## 创建一个NoneBot
> 此时你应该在最开始创建的文件夹目录下`Furprint`，并且处于虚拟环境中  
> ***不要和图中一样在`maim_message`下创建，这是错误的！***，不影响，但不建议

1. 创建一个项目，并选择`Simple(插件开发者)`小键盘的上下键选择，回车确定
```CMD
nb create
```
![nbcreate](https://vip.123pan.cn/1815727707/ymjew503t0m000d7w32xrobciv3w6hkrDIYPAIUvAwUOAvxvAdrxAa==.png)
项目名称随便填
![name](https://vip.123pan.cn/1815727707/yk6baz03t0n000d7w33h277k6nk53tevDIYPAIUvAwUOAvxvAdrxAa==.png)
适配器选择，这次主要部署的是QQ机器人，所以只选第一个`OneBot V11`小键盘上下切换，空格确定选择，回车进入下一步
![适配器选择](https://vip.123pan.cn/1815727707/ymjew503t0n000d7w32y6hpsswjijhctDIYPAIUvAwUOAvxvAdrxAa==.png)
驱动器选择，选择`FastAPI`和`websockets`小键盘上下切换，空格确定选择，回车进入下一步
![驱动器选择](https://vip.123pan.cn/1815727707/ymjew503t0l000d7w32x999an9o9swmdDIYPAIUvAwUOAvxvAdrxAa==.png)
插件存储位置，选择`在"src"文件夹中`，小键盘的上下键选择，回车确定
![src](https://vip.123pan.cn/1815727707/yk6baz03t0l000d7w33fgb4pxcowc9f4DIYPAIUvAwUOAvxvAdrxAa==.png)
立即安装依赖？(Y/n)，直接输入`y`然后回车
![立即安装依赖](https://vip.123pan.cn/1815727707/yk6baz03t0m000d7w33g9ms9s54irxw3DIYPAIUvAwUOAvxvAdrxAa==.png)
创建虚拟环境？(Y/n)，`不创建`输入`n`直接回车
![创建虚拟环境](https://vip.123pan.cn/1815727707/ymjew503t0m000d7w32xrobd0e3w70tsDIYPAIUvAwUOAvxvAdrxAa==.png)
要使用哪些内置插件？我们主要使用MaiMbot，可以直接回车，不使用内置插件
![要使用哪些内置插件](https://vip.123pan.cn/1815727707/yk6baz03t0n000d7w33h277kxtk54azvDIYPAIUvAwUOAvxvAdrxAa==.png)
创建成功后应当如下
![创建成功](https://vip.123pan.cn/1815727707/ymjew503t0n000d7w32y6hptacjikj5jDIYPAIUvAwUOAvxvAdrxAa==.png)
进入NoneBot项目，测试能否正常启动
```CMD
cd 刚刚创建的项目名字
nb run
```
正确运行结果如下
![nb run](https://vip.123pan.cn/1815727707/ymjew503t0l000d7w32x999b36o9tckhDIYPAIUvAwUOAvxvAdrxAa==.png)
然后使用组合键`ctrl+c`关闭项目，你也可以直接关闭窗口，但等等启动项目时请先启用虚拟环境
![关闭项目](https://vip.123pan.cn/1815727707/yk6baz03t0l000d7w33fgb4qr9owdvb8DIYPAIUvAwUOAvxvAdrxAa==.png)
***
### 配置NoneBot
1. 进入你创建好的NoneBot项目文件夹
> 文件夹名字是你之前自己填写的`项目名`，应当在教程最开始创建的文件中`Furprint`

2. 找到`.env`这个文件，并打开，可以使用记事本打开，推荐使用`vscode`打开  
3. 在第三行插入以下代码
```CMD
ONEBOT_WS_URLS=["ws://127.0.0.1:7878"] #此处的7878可以改为自己喜欢的四位数端口
```
![.env](https://vip.123pan.cn/1815727707/yk6baz03t0m000d7w33g9msalh4isadiDIYPAIUvAwUOAvxvAdrxAa==.png)
4. 现在返回我们一开始创建的文件夹目录下`Furprint`
5. 找到并进入`nonebot-plugin-maibot-adapters`文件夹  
6. 复制其中的同名文件夹`nonebot-plugin-maibot-adapters`
7. 回到我们的NoneBot项目文件夹中，进入`src→plugins`
8. 将刚才复制的文件夹粘贴进去即可
![plugins](https://vip.123pan.cn/1815727707/yk6baz03t0n000d7w33h277lv6k55lhxDIYPAIUvAwUOAvxvAdrxAa==.png)
***
## 安装并配置Lagrange.Onebot
1. 第一步肯定还是下载【[点我下载Lagrange.Onebot](https://haman.lanzoul.com/iK6CM2yo6nfa)】
2. 下载之后，将压缩包中的文件夹拖到任意一个地方存放
3. 然后打开文件夹，疯狂的进入其中的子文件夹，直到看见`Lagrange.OneBot.exe`
> 你可以把这个exe拿出来放到你喜欢的位置，但建议存放至一个空文件夹内，因为要生成配置文件

![安装Lagrange.Onebot](https://vip.123pan.cn/1815727707/ymjew503t0m000d7w32xrobdho3w88dvDIYPAIUvAwUOAvxvAdrxAa==.png)
4. 随后启动`Lagrange.OneBot.exe`
![启动](https://vip.123pan.cn/1815727707/yk6baz03t0l000d7w33fgb4rm8owewbdDIYPAIUvAwUOAvxvAdrxAa==.png)
5. 按下回车，将会弹出QQ登录二维码，如果二维码扫不了，可以在当前文件夹内找到二维码图片
![登录二维码](https://vip.123pan.cn/1815727707/ymjew503t0n000d7w32y6hptrojilvn8DIYPAIUvAwUOAvxvAdrxAa==.png)
6. 登陆成功后先关闭程序，在当前文件夹用`vscode`或`记事本`等工具打开
![json](https://vip.123pan.cn/1815727707/yk6baz03t0m000d7w33g9msbho4itswbDIYPAIUvAwUOAvxvAdrxAa==.png)
7. 打开后，我们只看最下面的代码
```cmd
    },
    "Implementations": [
        {
            "Type": "ReverseWebSocket",
            "Host": "127.0.0.1",
            "Port": 7878,
            "Suffix": "/onebot/v11/ws",
            "ReconnectInterval": 5000,
            "HeartBeatInterval": 5000,
            "AccessToken": ""
        }
    ]
}
```
将上面的代码替换为以下代码
```cmd
    },
    "Implementations": [
        {
            "Type": "ForwardWebSocket",
            "Host": "127.0.0.1",
            "Port": 7878, #此处的7878是之前在NoneBot项目中.env文件里修改的数字
            "HeartBeatInterval": 5000,
            "HeartBeatEnable": true,
            "AccessToken": ""
        }
    ]
}
```
8. 修改完后再次启动`Lagrange.OneBot.exe`
![Port](https://vip.123pan.cn/1815727707/yk6baz03t0l000d7w33fgb4ta7owgs9fDIYPAIUvAwUOAvxvAdrxAa==.png)
***
## 大功告成，启动Bot
1. 回到我们最初创建的文件夹`Furprint`，根据之前的教程启用虚拟环境
2. 然后依次使用以下命令
```cmd
cd maibot
python bot.py
```
根据提示的路径前往去修改配置
![](https://vip.123pan.cn/1815727707/ymjew503t0l000d7w32x999bizo9urh3DIYPAIUvAwUOAvxvAdrxAa==.png)
3. 再前往`MaiBot`文件夹目录下的`template`文件夹中，将其中的`template.env`文件使用`vscode`或`记事本`等工具打开，填写其中至少一个API KEY，然后将`template.env`这个文件修改名字为`.env`后放入`MaiBot`文件夹目录中即可
![](https://vip.123pan.cn/1815727707/ymjew503t0m000d7w32xrobdyx3w99jdDIYPAIUvAwUOAvxvAdrxAa==.png)
![](https://vip.123pan.cn/1815727707/yk6baz03t0l000d7w33fgb4sifowfq8oDIYPAIUvAwUOAvxvAdrxAa==.png)
4. 完成上述修改后，再次使用`python bot.py`启动MaiMBot  
5. 启动成功后会出现标红的文字，这个时候按照要求输入`confirmed`回车即可
![](https://vip.123pan.cn/1815727707/yk6baz03t0m000d7w33g9mscc64iueu1DIYPAIUvAwUOAvxvAdrxAa==.png)
启动成功显示如下
![](https://vip.123pan.cn/1815727707/yk6baz03t0n000d7w33h277njmk57sf6DIYPAIUvAwUOAvxvAdrxAa==.png)
6. 这个时候我们回到最初创建的文件夹目录下`Furprint`，重复操作启用一个虚拟环境
7. 然后再一次使用以下命令
```cmd
cd 之前创建的Nonebot的项目名字
nb run
```
成功启动后就能看见两条成功连接的消息了，如下图
![](https://vip.123pan.cn/1815727707/ymjew503t0n000d7w32y6hpu97jimci3DIYPAIUvAwUOAvxvAdrxAa==.png)
***
这样就是Windows使用Lagrange.Onebot + Nonebot部署MaiMBot的全部流程啦，其中MaiMBot的机器人参数配置等，请前往`MaiBot`目录下的`.env`与`MaiBot-config`目录下的`bot_config.toml`文件中自行参考官方文档配置【[MaiMBot官方文档](https://docs.mai-mai.org/)】

这是我第一次写博客教程，其中大部分是来自官方文档的教程，此文章只是将每一步更加详细的展示给你，且附上配图，如果这篇文章有帮助到你的话就最好啦，祝大家环境永不炸