---
date: 2022-02-18
title: CSS position:sticky 失效原因及注意点
category: essays
tags:
  - CSS
---

## sticky 概念
  粘性定位可以被认为是相对定位和固定定位的混合，元素在跨越特定阈值前为相对定位，之后为固定定位

## 失效原因
  + 必须指定 `top`、`bottom`、`left`、`right` 之一
  + 父元素必须指定高度，通常为 `height: 100%;`
  + 父元素设置了 `overflow` 属性

::: warning
**父元素不单单指元素直系的父元素，任意引用了次组件的父组件元素也包括**
:::

---