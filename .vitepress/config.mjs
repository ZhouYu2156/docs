import { defineConfig } from 'vitepress'
// import { NavItems } from './tree'
/* 搜索配置 */
import searchConfig from './configuration/search'
/* markdown语法相关配置 */
import markdown from './configuration/markdown'
/* 社交链接 */
import socialLinks from './configuration/socialLinks'
/* 左边侧边栏 */
import sidebar from './configuration/sidebar'
/* 顶部导航栏 */
import nav from './configuration/nav'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "极客兔",
  returnTopLabel: '返回顶部',
  // base: '/dist/',
  outDir: './dist',
  description: "一心创作优质内容,你学习路上的笔记好帮手...",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
  ],
  markdown: markdown,
  themeConfig: {
    siteTitle: "极 客 兔",      // 网站左上角标题
    // outlineTitle: '笔记大纲',   // 右侧大纲标题
    outline: {
      // level: [2, 3],
      level: 'deep',
      label: '文 章 导 航',
      collapsed: true
    },
    logo: "/logo.svg",
    search: searchConfig,
    // https://vitepress.dev/reference/default-theme-config
    /* 头部导航栏 */
    nav,
    /* 左侧边栏 */
    sidebar,
    // 文档页脚
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    /* 社交链接 */
    socialLinks,
    // 主页面的页脚
    footer: {
      message: '极客兔 - 笔记站',
      copyright: 'Copyright © 2023 Created By Zhou Yu.'
    }

  }
})
