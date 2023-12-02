---
layout: doc
outline-title: 12
title: markdown语法
editlink: true
tags:
 - title: 标题
 - content: 这是正文内容
sidebar: true
outlineTitle: '在本页中'
---

# VitePress 配置 & Markdown 语法


## 锚点{#my-anchor}
<!-- @include: ./anchor.md -->

## 代码行数显示
<!-- @include: ./line-numbers.md -->

## Emoji 🎉
<!-- @include: ./emoji.md -->

## Frontmatter 对象
<!-- @include: ./frontmatter.md -->

## 容器
<!--@include: ./container.md-->

## 表格
<!--@include: ./table.md-->

## 外部代码的粘贴
::: details 代码如下
```md
<<< ./tk.py{1 python}
```
:::
<<< ./tk.py{1 python}




## 下载链接
::: details
```md
[下载链接](./student.json){target="download" download}
```
:::


## 前端元数据
::: details
```md
---
layout: doc
title: markdown语法
editlink: true
tags:
 - title: 标题
 - content: 这是正文内容
---
```
:::


<a href="#my-anchor">跳到锚点处</a>
<br />
[跳到锚点处](#my-anchor)

[[toc]]