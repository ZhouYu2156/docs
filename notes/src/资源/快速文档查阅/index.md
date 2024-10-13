---
sidebar: true
footer: false
---

<script setup lang='ts'>
import References from '/.vitepress/theme/components/References.vue'
import {FrontEndItems,
        JavaScriptItems, 
        JavaScriptToolItems, 
        NodejsItems, 
        AnimationLibItems, 
        VueItems, 
        ReactItems, 
        ComponentLibItems, 
        PythonItems, 
        LinuxItems, 
        BlogItems, } from '/.vitepress/configuration/modules/sources'
</script>

# 快速文档参考手册

## 辅助工具
<References :items="FrontEndItems" />

## JavaScript & TypeScript
<References :items="JavaScriptItems"/>

## JS 工具库
<References :items="JavaScriptToolItems"/>

## Nodejs库
<References :items="NodejsItems" />

## 前端动画库
<References :items="AnimationLibItems" />

## Vue 全家桶
<References :items="VueItems"/>

## React 全家桶
<References :items="ReactItems"/>

## 开源组件库
<References :items="ComponentLibItems" />

## Python 技术
<References :items="PythonItems"/>

## Linux 运维
<References :items="LinuxItems"/>

## 优秀博客
<References :items="BlogItems"/>