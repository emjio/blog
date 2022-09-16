---
title:  linux服务器维护
image: '/linux/1.png'
created: 2021-11-01
updated: 2021-12-12
tags:
  - 'linux'
  - 'nginx'
  - 'os'
  - 'service'
  - 'log'
---
## Before everything

linux 是一个非常优秀的系统。网上教程非常的多。那些到今天还没用过linux系统的人最想知道的其实并不是如何使用Linux系统。而是我为什么要用Linux系统。

> 问题一：Linux 对用户友好吗？
回答：“Linux is user-friendly. It's just very selective about who its friends are.” 这句话没有出处，主语本来是 Unix，但 Linux 是 Unix 的一种 (吗)，所以它对 Linux 也成立 (吧)。很多人把这句话当作笑话，但对照一下 Linux 对用户所做的假设，我们会发现这句话严肃至极，一点都不好笑。Linux 对用户很友好，但它对自己的用户是有假定的。如果你感觉不到他的友好，那说明你不满足假定。
问题二：听你一说，Linux 好像很高大上的感觉。如果我弃 Windows 从 Linux，用不了多久就会升职加薪当上总经理出任 CEO 迎娶白富美走向人生巅峰吧？想想还有点小激动呢！
回答：我不知道你是从哪里听出 Linux 高大上的。至于你的问题嘛，我还是再讲个故事吧：
一个女生要从三个追求者中选择一个作为自己的白马王子。三人通过重重考验，来到最后一关。女生要求他们亮出自己的笔记本电脑，结果发现第一个追求者用的是 Windows，第二个用的是 Linux，而剩下那个用的当然是 Mac 了。最后她选了胸大，哦不，最有钱的那一个。
对了，你不会天真到以为用 Mac 的就一定有钱吧？
问题三：上面那个故事里的女生到底应该选哪个？
回答：如果你对故事里给出的答案不满意，这个问题就难了。不过，如果这个女生想做女王大人，断不可选择第二个追求者。否则，根据毕马隆效应，白马王子可能会因抑郁而自尽。
问题四：到底 Windows 和 Linux 哪个好？我该用哪一个？
回答：Linux 和 Windows 哪个好？这个问题就跟纠缠豆腐脑该加糖还是加盐一样没有意义。操作系统只是一个工具，适合你的就是最好的。Linux 传教士们，省省吧！“自由即责任，世人多畏之。” 不论到什么时候，Linux 用户都将是相对少数，这是人性决定的。如果真的理解 Linux 的哲学，那你应该明白，每一个人都可以问 “我该用哪个”，但任何人都不应管 “她/他该用哪个”。Windows 支持者们，不要再说 “Linux 我试过，太难用，跟 Windows 差距太大”。这很可能是你的真实感受，但明智的做法是装作从来没试过，不要宣扬。原因很简单：“若无力驾驭，自由便是负担。”
> 

1. 用户自主。用户决定系统如何工作，而不是反之。任何提示用户 “正在安装更新，请不要关机” 的行为都跟不以结婚为目的的恋爱是一个性质。用户是机器的主人，操作系统只是用户请来的助手；用户知道自己想要什么，明白自己在做什么，也会为自己的行为负责；操作系统尽量少说话，更不要下命令。用户自主还蕴含系统的可定制性：用户可以对系统做任何配置或改造。

2. 用户知情。如有必要，用户可以获知系统工作的任何细节，而不是仅仅被告知 “[正在处理一些事情](https://www.zhangzk.net/figs/windows.jpg)” —— 这比不以结婚为目的的恋爱还让人无法接受。

3. 系统高效。在此系统下用户可以很方便地获得各种工具，并且不同工具能很容易地组装在一起完成复杂的工作。机器更多是用来干活的，所以这一点很重要。

## Linux 是一个基于文件的操作系统。文件是其核心。

在linux中除了root 以外。每个用户只能操作自己有权限的文件和文件夹。

在任意目录中执行 

```bash
ll  
#小写的L 不是1
```

![linux%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%BB%B4%E6%8A%A4%20015280fb41d34a8a99a2a95578b483c0/Untitled.png](/linux/11.png)

               

从左到右依次为 

权限控制  包含的文件数目  所属用户  所属用户组  字节数  修改的月  日  时间  文件名称

其中权限控制由十位组成

第一个字母表示文件类型,

”-”,普通文件.

”d”目录,字母”d”,是dirtectory(目录)的缩写.

“l”符号链接。请注意,一个目录或者说一个文件夹是一个特殊文件,这个特殊文件存放的是其他文件和文件夹的相关信息.

“b”块设备文件。

“c”字符设备文件。

紧接着的3*3个字符分3组，各指示此文件的读、写、执行权限 ，对于owner、group、others而言。

二进制表示法

r = read 对应 4  100 = 4

w= write 对应 2  010 = 2

x = execute 对应  001  = 1

我们通常说的755  

755:  （111）（ 101）（ 101）  =  (7) (5)  (5)

第一个7:表示当前文件的拥有者的权限,7=4+2+1 可读可写可执行权限

第二个5:表示当前文件的所属组（同组用户）权限,5=4+1 可读可执行权限

第三个5:表示当前文件的组外权限,5=4+1 可读可执行权限

衍生命令 

chmod  修改文件权限

chgrp  修改文件组

chown 修改文件所有者

eg: 

```bash
chmod 755 test.txt  修改text.txt 文件夹的名称
chmod 777 -R  /dist 递归修改dist 文件夹下面的全部文件为777
chgrp www  dist 修改dist 目录的所有组为 www
chown www dist  修改dist 目录的所有者为 www
```

## Linux 的目录结构

![/linux/1.png](/linux/1.png)

- **/bin**：bin 是 Binaries (二进制文件) 的缩写, 这个目录存放着最经常使用的命令。
- **/boot：**这里存放的是启动 Linux 时使用的一些核心文件，包括一些连接文件以及镜像文件。
- **/dev ：**dev 是 Device(设备) 的缩写, 该目录下存放的是 Linux 的外部设备，在 Linux 中访问设备的方式和访问文件的方式是相同的。
- **/etc：**etc 是 Etcetera(等等) 的缩写,这个目录用来存放所有的系统管理所需要的配置文件和子目录。
- **/home**：用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve。
- **/lib**：lib 是 Library(库) 的缩写这个目录里存放着系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库。
- **/lost+found**：这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。
- **/media**：linux 系统会自动识别一些设备，例如U盘、光驱等等，当识别后，Linux 会把识别的设备挂载到这个目录下。
- **/mnt**：系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在 /mnt/ 上，然后进入该目录就可以查看光驱里的内容了。
- **/opt**：opt 是 optional(可选) 的缩写，这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。
- **/proc**：proc 是 Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。

## Linux 的程序安装

Linux 下面公有的 

rpm 安装

rpm –ivh rpm的软件包名

centos 中 常用yum install 包名称

ubuntu 用 apt-get install 包名称

下载源文件解压 

make 编译 

make install 安装

## Linux 下的服务管理

Linux 服务管理两种方式service和systemctl

在/etc/init.d/目录下面可以看到已经注册的服务

![/linux/2.png](/linux/2.png)

启动nginx 

```bash
#启动nginx
service nginx start
#或者 
systemctl start nginx
```

查看nginx 的状态

```bash
service nginx status
systemctl status nginx
```

![/linux/3.png](/linux/3.png)

## Linux 常用命令

1、文件常用操作

```bash
mv  filename newdir  # 移动文件到某个目录 mv 是move  file 的缩写
cat filename    # 输出文件的内容
cp filename newfilename  # 复制某个文件  cp 是copy 的缩写
rm filename/dir   # 删除某个文件或者目录。 rm 是 remove的缩写  删除目录需要参数 -r 递归。 -f 是强制。 比如 rm -rf /* 
mkdir dirname # 创建目录 是make directory 的缩写。
touch filename #修改目录或者文件（的修改时间）。 不存在的时候会创建
vi filename #用vi 编辑器打开filename 
awk # 文本文件处理语言。
| # 管道符 连续调用命令的时候 使用管道符。 前面的执行结果会作为后面的执行参数。 
> # 写入文件符号   会创建新文件
>>  # 将内容追加进入文件。        
grep # 查找符合条件的字符串
ps 
echo  # 输出某个字符串
netstat # 查看网络连接 
kill  pid # 杀死某个进程
```

2、进阶用法

```bash
ps -A | grep nginx  #查看nginx 的进程id
netstat -ap | grep ssh  #查看ssh 运行的端口
netstat -tunlp| grep 8010 # 查看8010 端口被什么程序占用
echo 123 > test.log # 将123 写入 test.log
cat test.pub >> authorized_keys # 读取test.pub 并且将其内容加入 authorized_keys 
```

假设已经熟悉如何去熟练的使用一台linux 服务器了。请实现如下操作。

Q: 如何查看 某个文件 并将里面包含1的内容写入 test.log 文件。

Q: 写一行命令 使得其执行之后有一半的几率输出 lucky ，一半的几率 递归删除根目录。

### 从零开始配置一个服务器环境。

当我们拿到一套linux 服务器的时候通常需要安装需要的软件包。

我们不确定是否已经安装某个程序那我们可以使用 

> whereis 程序名称。
> 

![/linux/4.png](/linux/4.png)

![/linux/5.png](/linux/5.png)

在centos 下我们使用yum 安装 输入 yum install nginx 即可 遇到提示一直y 即可

有时候会遇到yum 找不到情况 这时候可以考虑换源 或者  使用rpm 下载

下载完成 运行  systemctl nginx start 进行启动

这时候可以去访问这台服务器的80端口了

一般程序的配置文件都会在/etc 目录 

nginx 的配置文件默认就在 /etc/nginx目录下面 

通常nginx 的目录结构如下图所示

![/linux/6.png](/linux/6.png)

nginx.conf 放置的是入口配置文件

可以使用cat 命令查看里面的内容

里面有nginx 的基础可以运行的配置。

其中倒数第二行的意思是 会将 /etc/nginx/conf.d 下面的 任意以.conf 结尾的文件加载进来。

所以不同网站只需要 创建不同的配置文件即可

![/linux/7.png](/linux/7.png)

如下图 为不同的 网站配置了不同的 配置文件

![/linux/8.png](/linux/8.png)

假设我们想新加入一个网站

我们可以拷贝一份

```bash
cp defult.conf default8.conf # copy defult.conf 创建新文件 并重命名为 defult8.conf
```

![/linux/9.png](/linux/9.png)

然后根据自己网站的需求进行配置修改

```bash
vim default8.conf
```

![/linux/10.png](/linux/10.png)

修改完成 按ESC 输入英文冒号 wq 退出  （w= write  q = quit ）写入并退出

最后执行 

```bash
#进行配置重载
systemctl nginx reload
```

## 常见问题与排除

Q：nginx 新增了一个网站但起不来是为什么？

A: 使用systemctl 查看 nginx 的运行状态查看是否down掉。如果正常再用netstat 查看端口是否已经被占用。此时如果已经被占用 那可能是防火墙端口没有开放。如果是线上则可能是安全组没开放。如果端口没有被占用 那先看日志。 nginx 通常日志在/var/log/nginx 下面先看日志 根据日志情况在做判断。