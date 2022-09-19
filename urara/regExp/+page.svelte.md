---
title:  正则表达式
image: 'https://www.notion.so/images/page-cover/woodcuts_6.jpg'
created: January 16, 2022 11:13 PM
updated: February 21, 2022 3:03 PM
tags:
  - 'regExp'
  - '正则'
  - '断言'
--- 



## 正则是什么

> 正则表达式是用于匹配字符串中字符组合的模式。
> 

我们可以用一句表达式去匹配一个或者多个符合规则的字符串。

从几个简单的例子开始

123456789

122334456789

11223356789

我们根据简单的经验判断就能写出一个正则

```jsx
/1*2*3*4*56789/
```

上述正则的意思是 匹配任意个1任意个2任意个3任意个4任意个5后面跟6789

## 正则的语法

正则语法其实非常简单。根据功能和作用我们将他分为几个类型。

1. 限制符

限制符可以理解为正则中的循环和if else。他们被用在一个符号的后面去表示前一个字符将如何被匹配。

[Untitled](https://www.notion.so/f57da0dfcea649f6a9d7495290563cce)

1. 特殊符号

特殊符号则控制正则的匹配逻辑。以什么开头以什么结尾分组匹配等等。除了开始和结束符号，他们没有具体的使用位置。一般是用来进行分组和直接描述。

例如 字符串 abc 和 abd 我们就可以用

```jsx
/ab(c|d)/
```

来进行匹配。一个组内的正则会被单独进行计算。

[符号](https://www.notion.so/40010b06a85e469885c84423b4ef6c9f)

字符表达符

[Untitled](https://www.notion.so/57d3baec845b4d96bd7cae7828616743)

[JavaScript正则表达式迷你书（1.1版）.pdf](/regExp/JavaScript1.1.pdf)