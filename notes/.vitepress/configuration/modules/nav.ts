import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  /** 每一个二级目录分类 */
  {
    text: "Python",
    items: [
      {
        text: "爬虫实战",
        link: "/Python/爬虫实战/",
      },
    ],
  },
  {
    text: "资源",
    items: [
      {
        text: "快速文档查阅",
        link: "/资源/快速文档查阅/",
      },
      {
        text: "编程导航",
        link: "https://www.zhouyu2156.cn/Programming/",
      },
    ],
  },
];

/* console.log(
  JSON.stringify(global.VITEPRESS_CONFIG.userConfig.themeConfig.nav, null, 4)
); */
