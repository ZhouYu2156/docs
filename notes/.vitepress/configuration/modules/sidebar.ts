import { DefaultTheme } from "vitepress";

/** 二级目录下时显示树形结构 */
export const sidebar: DefaultTheme.Sidebar = {
  "/Python/爬虫实战/": [
    {
      text: "爬虫实战",
      collapsed: false,
      items: [
        {
          text: "爬取酷狗付费音乐",
          link: "./爬取酷狗付费音乐",
        },
      ],
    },
  ],
  "/资源/快速文档查阅/": [
    {
      text: "快速文档查阅",
      collapsed: false,
      items: [
        {
          text: "本地人工智能大语言模型安装",
          link: "./本地人工智能大语言模型安装",
        },
      ],
    },
  ],
};
