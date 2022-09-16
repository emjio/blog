---
title:  front-end development 
image: '/font-end/1.png'
created: September 7, 2022 2:16 PM
updated: September 7, 2022 2:18 PM
tags:
  - 'font-end'
  - 'LSP'
  - 'VSC'
  - 'shell'
  - 'tools'
---

Created: 
Last Edited Time: 
Status: Archived

## 终端

### 常用命令

- ssh
- scp
- bat
- ack
- **[the_silver_searcher](https://github.com/ggreer/the_silver_searcher)**

### [命令行快捷键](https://blog.ssdnodes.com/blog/cheatsheet-bash-shortcuts/)

- `Ctrl + a` 光标移动到开头
- `Ctrl + e` 光标移动到结尾
- `Ctrl + u` 删除命令
- `Ctrl + k` 删除当前光标之后所有的字符
- `Ctrl + w` 向前删除一个单词

## [Vim](https://www.notion.so/Vim101-fcb9f42028ee4b6c880e83315621671a)

- 三种模式
- 基本操作：移动、删除、复制
- 编辑器

## 语言服务协议

> The goal of the protocol is to allow programming language support to be implemented and distributed independently of any given editor or IDE.
> 

> **语言服务器协议**（Language Server Protocol，LSP）是一个开放的、基于[JSON-RPC](https://zh.m.wikipedia.org/wiki/JSON-RPC)的[网络传输协议](https://zh.m.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE)，[源代码编辑器](https://zh.m.wikipedia.org/wiki/%E6%BA%90%E4%BB%A3%E7%A0%81%E7%BC%96%E8%BE%91%E5%99%A8)或[集成开发环境](https://zh.m.wikipedia.org/wiki/%E9%9B%86%E6%88%90%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)（IDE）与提供特定编程语言特性的[服务器](https://zh.m.wikipedia.org/wiki/%E6%9C%8D%E5%8A%A1%E5%99%A8)之间交互时会用到这个协议。**该协议的目标是让编辑器或集成开发环境能支持更多的编程语言**
> 

![Untitled](/font-end/1.png)

**特点**

- 转到定义 （go to definition）
- 查找所有引用 （find all references）
- hover
- completion
- rename
- format
- refactor
- highlight
- updateImportOnFileMove
- autoImport

![Untitled](/font-end/2.png)

- 用户打开 **一** (工具中称为) 文档"的文件：该工具通知语言服务器文档已打开 ("textDocument/didOpen") 。 从现在开始，文档内容的事实不再在文件系统上，而是由工具保留在内存中。
- 用户 **进行** 编辑：该工具会通知服务器文档更改 ('textDocument/didChange') 并且语言服务器会更新程序的语义信息。 发生这种情况时，语言服务器会分析此信息，并通知工具检测到的错误和警告 ( textDocument/publishDiagnostics ) 。
- 用户对编辑器中的符号执行"转到定义"：该工具发送具有两个参数的"textDocument/definition"请求： (1) 文档 URI 和 (2) 从启动"转到定义"请求到服务器的文本位置。 服务器使用文档 URI 和符号定义在文档内的位置进行响应。
- 用户关闭文档 (文件 **) ：** 从工具发送"textDocument/didClose"通知，通知语言服务器文档现在不再在内存中，并且文件系统上的当前内容现在是最新的。
- JSON-RPC 传输协议
    
    The client in that case is typically software intending to **call a single method of a remote system**. Multiple input parameters can be passed to the remote method as an array or object, whereas the method itself can return multiple output data as well.
    
    request
    
    - method - `String`
    - params - `Object` or `Array`
    - id
    
    reponse
    
    - result
    - error
    - id

详细了解一下 “textDocument/definition” 请求，下面是 C++ 文档中 “转到定义”请求的客户端工具和语言服务器之间的有效负载。

这是请求：

```json
{
    "jsonrpc": "2.0",
    "id" : 1,
    "method": "textDocument/definition",
    "params": {
        "textDocument": {
            "uri": "file:///p%3A/mseng/VSCode/Playgrounds/cpp/use.cpp"
        },
        "position": {
            "line": 3,
            "character": 12
        }
    }
}
```

响应为：

```json
{
    "jsonrpc": "2.0",
    "id": "1",
    "result": {
        "uri": "file:///p%3A/mseng/VSCode/Playgrounds/cpp/provide.cpp",
        "range": {
            "start": {
                "line": 0,
                "character": 4
            },
            "end": {
                "line": 0,
                "character": 11
            }
        }
    }
}
```

当用户使用不同的语言时，VS Code通常启动每个编程语言的语言服务器。

![Untitled](/font-end/3.png)

在 VS Code编辑器中语言服务是一种特殊的扩展，这些扩展可以使编辑器支持多种编程语言。

编辑器内置了很多语言服务器，比如 Typescript/JavaScript、html、css，其他也更多可以通过扩展的形式安装，比如 vetur。

## VS Code

### VS Code 扩展

- [VueDX](https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features)
    - Definition
        - Goto component definition
        - Goto prop definition
        - Goto expression definition
    - Renaming
        - Rename prop
        - Rename data
        - Rename computed
        - Rename method
        - Rename variables/function in setUp()
        - Rename component or Vue file
        
- [File Utils](https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils)
    - New File
    - New Folder
    - Delete file
    - Duplicate
    - Rename
    - Copy Name
    - Move
- [advanced-new-file](https://marketplace.visualstudio.com/items?itemName=patbenatar.advanced-new-file)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Color the tag name](https://marketplace.visualstudio.com/items?itemName=jzmstrjp.color-the-tag-name)
- [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
- [Tailwind CSS intelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

[VS Code快捷键](https://www.notion.so/vscode-91914705bcbd4087992a6276bb95bf26)

## Chrome 浏览器

### [CSS Debug](https://www.notion.so/CSS-debugging-5cfe0c5728d0407aa1f65a8771542075)

![Untitled](/font-end/4.png)

- 使用按键增大和减小属性值大小
    - `shift` + up/down: ±10
    - `Command`(mac)/`Ctrl` (window)+ up/down: ±100
    - `Alt`(window)/`option` (mac)+ up/down: ±0.1
- 捕获节点截图 （Capture node screenshot）
- 增加、编辑和删除CSS类。
    - `.cls`
    - `enter` 键
- `h` 键快速隐藏元素

### Chrome 扩展

- [OneTab](https://chrome.google.com/webstore/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall) - 所有标签页转换成一个列表
- [The Great Suspender](https://chrome.google.com/webstore/detail/the-great-suspender-origi/ahmkjjgdligadogjedmnogbpbcpofeeo) 冻结长时间不用的网页，释放系统资源。
- [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh)
- [Site Palette](https://chrome.google.com/webstore/detail/site-palette/pekhihjiehdafocefoimckjpbkegknoh)
- [wappalyzer](https://www.wappalyzer.com/)
- [Vimium](http://vimium.github.io/)

## 辅助工具

- [vscodedev](https://vscode.dev/) - 在线 vscode 编辑器
- [regex](https://regex101.com/) - 在线调试正则表达式

## 参考

- https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way
- [Language Extensions Overview](https://code.visualstudio.com/api/language-extensions/overview)
- [Language Server Extension Guide](https://code.visualstudio.com/api/language-extensions/language-server-extension-guide)
- [语言服务器协议](https://docs.microsoft.com/zh-cn/visualstudio/extensibility/language-server-protocol?view=vs-2022)
- [Official page for Language Server Protocol - Microsoft Open](https://microsoft.github.io/language-server-protocol/)
- [neovim LSP configs](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md)