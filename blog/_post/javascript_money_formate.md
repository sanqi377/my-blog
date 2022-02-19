---
date: 2022-02-19
title: JavaScript 对数组进行三位分割格式化及货币格式化
category: essays
tags:
  - JavaScript
  - Js
---

## 前言
在做 💰 的项目，特别是 💰 很多的时候，经常要对货币数字格式化，一般都是三位一隔，那么这个是如果做到的呢，下面分享一个货币格式化的黑科技函数。

## toLocaleString
``` javascript
(123456789).toLocaleString('zh')    // 输出：123,456,789
(123456789).toLocaleString('zh', { style: 'currency', currency: 'CNY' })    // 输出：¥123,456,789.00
```