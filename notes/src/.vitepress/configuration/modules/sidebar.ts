import { DefaultTheme } from "vitepress";

/** 二级目录下时显示树形结构 */
export const sidebar: DefaultTheme.Sidebar = {
  "/个人作品/": [
    {
      text: "成长日志",
      collapsed: false,
      items: [
        {
          text: "心情篇",
          link: "/个人作品/成长日志/心情篇",
        },
      ],
    },
    {
      text: "道经",
      collapsed: false,
      items: [
        {
          text: "世经",
          link: "/个人作品/道经/世经",
        },
      ],
    },
    {
      text: "诗词集",
      collapsed: false,
      items: [
        {
          text: "濂湘诗词集",
          link: "/个人作品/诗词集/濂湘诗词集",
        },
      ],
    },
    {
      text: "文言文",
      collapsed: false,
      items: [
        {
          text: "濂湘文言大全",
          link: "/个人作品/文言文/濂湘文言大全",
        },
      ],
    },
  ],
  "/前端/": [
    {
      text: "HTML进阶",
      collapsed: false,
      items: [
        {
          text: "布局",
          link: "/前端/HTML进阶/布局",
        },
      ],
    },
    {
      text: "JavaScript进阶",
      collapsed: false,
      items: [
        {
          text: "Promise",
          link: "/前端/JavaScript进阶/Promise",
        },
        {
          text: "Canvas",
          link: "/前端/JavaScript进阶/Canvas",
        },
        {
          text: "原型链",
          link: "/前端/JavaScript进阶/原型链",
        },
        {
          text: "高级核心概念",
          link: "/前端/JavaScript进阶/高级核心概念",
        },
        {
          text: "TypeScript",
          link: "/前端/JavaScript进阶/TypeScript",
        },
        {
          text: "事件循环",
          link: "/前端/JavaScript进阶/事件循环",
        },
        {
          text: "WebAPI",
          link: "/前端/JavaScript进阶/WebAPI",
        },
      ],
    },
    {
      text: "Vue",
      collapsed: false,
      items: [
        {
          text: "Vite构建工具",
          link: "/前端/Vue/Vite构建工具",
        },
        {
          text: "Vue3快速上手",
          link: "/前端/Vue/Vue3快速上手",
        },
      ],
    },
    {
      text: "React",
      collapsed: false,
      items: [
        {
          text: "深入框架原理",
          link: "/前端/React/深入框架原理",
        },
      ],
    },
    {
      text: "Scss",
      collapsed: false,
      items: [
        {
          text: "实战小案例",
          link: "/前端/Scss/实战小案例",
        },
      ],
    },
  ],
  "/后端/": [
    {
      text: "数据库",
      collapsed: false,
      items: [
        {
          text: "MySQL",
          link: "/后端/数据库/MySQL",
        },
      ],
    },
    {
      text: "Nodejs",
      collapsed: false,
      items: [
        {
          text: "常用第三方库",
          link: "/后端/Nodejs/常用第三方库",
        },
      ],
    },
    {
      text: "Python",
      collapsed: false,
      items: [
        {
          text: "Flask",
          link: "/后端/Python/Flask",
        },
        {
          text: "Django",
          link: "/后端/Python/Django",
        },
        {
          text: "Tornado",
          link: "/后端/Python/Tornado",
        },
        {
          text: "FastApi",
          link: "/后端/Python/FastApi",
        },
        {
          text: "RestFramework",
          link: "/后端/Python/RestFramework",
        },
        {
          text: "Python第三方库",
          link: "/后端/Python/Python第三方库",
        },
        {
          text: "专业集训笔记",
          link: "/后端/Python/专业集训笔记",
        },
        {
          text: "QQ微信消息轰炸",
          link: "/后端/Python/QQ微信消息轰炸",
        },
        {
          text: "爬取酷狗付费音乐",
          link: "/后端/Python/爬取酷狗付费音乐",
        },
      ],
    },
  ],
  "/开源库/": [
    {
      text: "常用TS方法",
      collapsed: false,
      items: [
        {
          text: "工具箱",
          link: "/开源库/常用TS方法/工具箱",
        },
      ],
    },
  ],
  "/运维/": [
    {
      text: "云计算",
      collapsed: false,
      items: [
        {
          text: "搭建服务器",
          link: "/运维/cloud/搭建服务器",
        },
      ],
    },
    {
      text: "Docker",
      collapsed: false,
      items: [
        {
          text: "容器",
          link: "/运维/docker/容器",
        },
      ],
    },
    {
      text: "Linux",
      collapsed: false,
      items: [
        {
          text: "Linux",
          link: "/运维/linux/Linux",
        },
        {
          text: "Linux安装环境",
          link: "/运维/linux/Linux安装环境",
        },
      ],
    },
    {
      text: "Web服务器",
      collapsed: false,
      items: [
        {
          text: "Nginx",
          link: "/运维/web服务器/Nginx",
        },
      ],
    },
  ],
  "/开发工具/": [
    {
      text: "VSCode",
      collapsed: false,
      items: [
        {
          text: "我的配置",
          link: "/开发工具/VSCode/我的配置",
        },
      ],
    },
    {
      text: "PyCharm",
      collapsed: false,
      items: [
        {
          text: "PyCharm",
          link: "/开发工具/PyCharm/PyCharm",
        },
      ],
    },
    {
      text: "其他",
      collapsed: false,
      items: [
        {
          text: "zsh安装",
          link: "/开发工具/其他/zsh安装",
        },
        {
          text: "经验与方法",
          link: "/开发工具/其他/经验与方法",
        },
        {
          text: "Git版本控制工具",
          link: "/开发工具/其他/Git版本控制工具",
        },
      ],
    },
  ],
  "/资源/": [
    {
      text: "快速文档查阅",
      collapsed: false,
      items: [
        {
          text: "本地人工智能大语言模型安装",
          link: "/资源/快速文档查阅/本地人工智能大语言模型安装",
        },
      ],
    },
  ],
};
