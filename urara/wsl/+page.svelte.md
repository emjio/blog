---
title:  wsl 使用介绍
image: 'https://www.notion.so/images/page-cover/rijksmuseum_rembrandt_1642.jpg'
created: January 16, 2022 11:13 PM
updated: February 21, 2022 3:03 PM
tags:
  - 'regExp'
  - '正则'
  - '断言'
--- 
# 

Created: January 16, 2022 11:13 PM
Last Edited Time: January 16, 2022 11:13 PM

## WSL是什么？

WSL是微软出品的 运行在Windows子系统。全称Windows Subsystem for Linux。

到现在已经到了第二个版本

> WSL 2 是适用于 Linux 的 Windows 子系统体系结构的一个新版本，它支持适用于 Linux 的 Windows 子系统在 Windows 上运行 ELF64 Linux 二进制文件。 它的主要目标是**提高文件系统性能**，以及添加**完全的系统调用兼容性**。
> 

在WSL中你将获得一套完整的Linux环境（继承自Window）和对Window程序的调用能力。

[https://youtu.be/48k317kOxqg](https://youtu.be/48k317kOxqg)

## 为什么不直接用虚拟机？

与虚拟机不同。他是一个运行在Window 环境下由微软的某种桥接技术进行连接的系统运行方式。对于Window 而言，Linux 是其子系统。对于Linux ，Windows 是挂载在他上面的几个目录。得益于这种酷炫的连接方式。我们可以非常方便的在两个系统中进行双向操作。

## 前置知识

- 基本的Linux 命令认知（快速入门linux可以参考另一篇文章）

[linux服务器维护](https://www.notion.so/linux-015280fb41d34a8a99a2a95578b483c0)

- 不愿意就此打住的脑子
- 持续改进的心

## 使用他能带来什么好处？

- Linux 天然的开发亲和力
- 方便快捷的各类程序安装
- 高效率的文件执行/IO密集任务性能提升明显
- 高度自定义化的Shell集成
- 沉浸式的开发体验
- 无限的可能性

## 如何使用一个WSL环境？

### 安装WSL

安装过程见微软官方文档 只需要几次命令输入即可快速拥有`

[安装 WSL](https://docs.microsoft.com/zh-cn/windows/wsl/install)

我们在内部使用的时候也发现了一些在安装上的问题

当然绝大部分问题可以直接访问WSL的github 仓库

[https://github.com/microsoft/WSL](https://github.com/microsoft/WSL)

### 配置你的环境

安装和基础的终端配置可见此处。目前最好的wsl入门中文文档

[Dev on Windows with WSL](https://dowww.spencerwoo.com/)

安装世界上最酷的shell环境 oh-my-zsh

(如果不会科学上网可以找gitee上的镜像)

然后安装一切你喜欢的插件

这里是一个列举了zsh知名插件的仓库地址

[https://github.com/unixorn/awesome-zsh-plugins.git](https://github.com/unixorn/awesome-zsh-plugins.git)

## 真实wsl 开发使用演示

首先贴出一份我自己的个人配置作为参考

[https://github.com/emjio/oh-my-zsh-backup](https://github.com/emjio/oh-my-zsh-backup)

### 在vscode 中集成wsl 开发

你只需要把你的项目代码放在你的wsl 的文件夹里面

wsl 中 进入目录

```bash
code .
```

![Untitled](/wsl/0.png)

只在linux 中被支持的 npm 包 n

可以支持快速多个版本的NodeJs的安装和切换

![Untitled](/wsl/1.png)

使用tmux 在一个终端中进行拆分和任务切换

![Untitled](/wsl/2.png)

能够根据格式读取文件并且进行语法高亮的batcat

![Untitled](/wsl/3.png)

能够帮你进行命令正确提示和历史命令输入建议的 zsh-syntax-highlighting 和 zsh-autosuggestions

![Untitled](/wsl/4.png)

错误命令为红色

![Untitled](/wsl/5.png)

正确命令为绿色并且如果输入的这部分是历史输入过的会进行提示

这对于前端经常输入 yarn 或者yarn serve 非常省事情  你只要打个y 就能提示出来了

一个非常沙雕的工具 thefuck 会更具你上次输入错误的命令提示你正确的

![Untitled](/wsl/6.png)

最后就是各种提升效率的alias

![Untitled](/wsl/7.png)

上面分别是

- 快速在文件浏览器打开当前路径
- 快速复制当前路径到粘贴板
- 快速打开google 搜索某个关键词
- 快速大概github 搜索某个关键词

所以你就知道了wsl 可以快速的调用windows 下面的任何程序，并根据他提供的参数进行快速的启动。