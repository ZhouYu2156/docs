import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "极客兔",
  base: '/dist/',
  outDir: './dist',
  description: "一心创作优质内容,你学习路上的笔记好帮手...",
  lastUpdated: true,
  locales: {
    root: {
      label: 'Change language',
      lang: 'zh-CN',
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
  ],
  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  themeConfig: {
    siteTitle: "极 客 兔",
    logo: "/logo.svg",
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换123'
                }
              }
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    /* 头部导航栏 */
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'VitePress笔记',
        link: '/blog/index.html'
      },
      {
        text: '学习笔记', items: [
          {
            text: '计算机三大原理',
            items: [
              { text: '编译原理', link: '/courses/' },
              { text: '计组原理', link: '/courses/' },
              { text: '微机原理', link: '/courses/' },
            ]
          },
          {
            text: '其他笔记',
            items: [
              { text: '高数', link: '/courses/' },
              { text: '英语', link: '/courses/' }
            ]
          }
        ]
      },
      {
        text: '前端三剑客',
        items: [
          { text: 'HTML', link: '/courses/' },
          { text: 'CSS', link: '/courses/' },
          { text: 'JavaScript', link: '/courses/' },
        ]
      },
      {
        text: '前端框架',
        items: [
          /* 一个子项表示一个分组 */
          { text: 'Vue', link: '/courses/' },
          { text: 'React', link: '/courses/' }
        ]
      },
      {
        text: '后端技术',
        items: [
          { text: 'Python', link: '/courses/' },
          { text: 'nodejs', link: '/courses/' }
        ]
      },
    ],
    /* 侧边栏 */
    sidebar: {
      '/courses/': [
        {
          text: '课程笔记',
          items: [
            { text: '编译原理笔记', link: './compiler' },
          ]
        }
      ],
    },
    
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    /* 社交链接 */
    socialLinks: [
      {
        icon: {
          svg: '<img style="width: 20px; border-radius: 20%;" src="/gitee.svg">'
        }, link: 'https://github.com/ZhouYu2156'
      },
      {
        icon: {
          svg: '<img style="width: 20px; border-radius: 20%;" src="/github.svg">'
        }, link: 'https://gitee.com/zhouyu2156'
      },
      { icon: { svg: '<img style="width: 20px; border-radius: 20%;" src="/fish.png">' }, link: 'https://zhouyu2156.gitee.io/rabbitwarehouse/Programming/' },
      {
        icon: { svg: '<img style="width: 20px; border-radius: 20%;" src="/bilibili.svg">' }, link: 'https://space.bilibili.com/431828034'
      }
    ],
    // 页脚
    footer: {
      message: '极客兔 - 笔记站',
      copyright: 'Copyright © 2023 Created By Zhou Yu.'
    }

  }
})
