import { defineConfig } from 'vitepress'
import {searchConfig, markdown, socialLinks, sidebar, nav } from './configuration/index'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "极 客 兔",
  // outlineTitle: '笔记大纲',   // 右侧大纲标题
  // base: '/',
  outDir: './dist',
  srcExclude: ['**/README.md', '**/TODO.md'],
  description: "一心创作优质内容,你学习路上的笔记好帮手...",
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
  ],
  markdown: markdown,
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/'
    }
  },
  themeConfig: {
    siteTitle: "极 客 兔",      // 网站左上角标题
    returnToTopLabel: "返回顶部", // 手机端才会显示
    lastUpdated: {
      text: '最近更新时间'
    },
    editLink: {
      /* 编辑链接1 */
      // pattern: 'https://github.com/ZhouYu2156/docs/:path',
      pattern: 'https://github.com/ZhouYu2156/docs/',
      text: '在 GitHub 上编辑此页'
    },
    outline: {
      level: 'deep',
      label: '文 章 导 航'
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
