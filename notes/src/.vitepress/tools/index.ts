import { readdirSync } from "fs";
import path from "path";
/**
 * 自动生成导航栏渲染需求分析:
 *  (1) 获取要解析的源目录: ['src']
 *  (2) 要排除解析过程中的哪些文件和目录: excludeDirs: ['images', 'code'], excludeFiles: ['README.md']
 *  (3) 一级目录作为菜单展开按钮, 二级目录用于分类, 三级目录为具体内容文档
 *  (4) 分类下如果有 index.md 文件的话, 则生成的跳转链接为 index.html, 没有的话则使用分类目录下的文件列表的第一个作为点击目录后的跳转链接
 */

const defaultReadConfig = {
  exclude: ["images", "public", "code", "编程导航"],
  excludeFile: ["README.md", "index.md"],
  source: "src",
};

/** 导航菜单结构 */
type MenuItem = {
  text: string;
  link?: string;
  items?: MenuItem[];
};
/** 自动渲染导航栏 */
export const autoRenderNavbar = (
  options: {
    /** 需要排除的目录 */
    exclude?: string[];
    /** 需要排除的文件 */
    excludeFile?: string[];
    /** 默认解析目录 */
    source?: string;
  } = defaultReadConfig
) => {
  const { exclude = [], excludeFile = [], source = "src" } = options;
  /** 读取所有子文件 */
  const level1 = readdirSync(source);
  /** 定义导航栏列表 */
  const navbars: MenuItem[] = [];
  /** 遍历目标目录获取一级目录 */
  for (let file of level1) {
    /** 判断一级目录是否在排除目录中, 如果在: 跳过此项; 如果不在, 则将它添加到菜单项作为一级标题 */
    if (exclude.includes(file) || excludeFile.includes(file)) continue;
    navbars.push({
      text: file,
      items: [],
    });
  }
  /** 添加二级目录分类 */
  for (let h1 of navbars) {
    /** 读取一级目录下的子目录 */
    const level2 = readdirSync(path.resolve(source, h1.text));
    /** 将二级分类目录添加到sidebar中 */
    for (const h2 of level2) {
      if (exclude.includes(h2) || excludeFile.includes(h2)) continue;
      /** 读取一下二级目录里面, 是否有 index.md 文件, 如果有则将其作为分类的入口页面, 没有的话以其他页面作为主入口页面 */
      const level3 = readdirSync(path.resolve(source, h1.text, h2));
      if (level3.includes("index.md")) {
        h1.items!.push({
          text: h2,
          link: `/${h1.text}/${h2}/`,
        });
      } else {
        const MarkdownFiles = level3.filter(
          (file) => path.extname(file) === ".md"
        );
        h1.items!.push({
          text: h2,
          // items: [], // 菜单栏需要显示三级菜单解开此项
          link: `/${h1.text}/${h2}/${MarkdownFiles[0]}`, // 将二级目录作为跳转链接
        });
      }
    }
  }
  /** 添加三级内容文档路由 */
  /*for (let h1 of navbars) {
    for (let h2 of h1.items!) {
      const level3 = readdirSync(path.resolve(source, h1.text, h2.text));
      for (let h3 of level3) {
        if (exclude.includes(h3) || excludeFile.includes(h3)) continue;
        const filename = path.basename(h3, ".md");
        h2.items!.push({
          text: filename, // 文件名称
          link: `/${h1.text}/${h2.text}/${h3}`, // 导航链接
        });
      }
    }
  }*/
  navbars.push({
    text: "更多功能",
    items: [
      {
        text: "编程导航",
        link: "https://www.zhouyu2156.cn/Programming/",
      },
    ],
  });
  // console.log(JSON.stringify(navbars, null, 4));
  navbars.unshift({ text: "首页", link: "/" });
  return navbars;
};

/**
 * 自动生成左边侧边栏需求分析:
 *  (1) 获取目标源目录
 *  (2) 获取一级标题和二级标题作为父级路径
 *  (3) 第三级所有文件作为跳转链接
 */

/** 例如: Python 目录下时显示树形结构 */
/*"/Python/爬虫实战/": [
    {
      text: "爬取酷狗音乐",
      link: "/Python/爬虫实战/爬取酷狗音乐.md",
    },
    ...
  ],*/
export type Sidebar = Record<string, { text: string; link: string }[]>;
/** 自动渲染左边侧边栏 */
export const autoRenderSidebar = (
  options: {
    /** 需要排除的目录 */
    exclude?: string[];
    /** 需要排除的文件 */
    excludeFile?: string[];
    /** 默认解析目录 */
    source?: string;
  } = defaultReadConfig
) => {
  const { exclude = [], excludeFile = [], source = "src" } = options;
  /** 侧边栏对象 */
  let sidebars: Sidebar = {};
  /** 读取一级目录 */
  const level1 = readdirSync(source);
  for (let h1 of level1) {
    if (exclude.includes(h1) || excludeFile.includes(h1)) continue;
    /** 读取二级目录 */
    const level2 = readdirSync(path.resolve(source, h1));
    for (let h2 of level2) {
      if (exclude.includes(h2) || excludeFile.includes(h2)) continue;
      const key = `/${h1}/${h2}/`;
      /** 给 sidebars 定义属性 key, 值为 [] */
      // sidebars[key] = [];
      Object.assign(sidebars, { [key]: [] });
      /** 读取三级目录 */
      const level3 = readdirSync(path.resolve(source, h1, h2));
      for (let h3 of level3) {
        if (exclude.includes(h3) || excludeFile.includes(h3)) continue;
        const filename = path.basename(h3, ".md");
        Reflect.get(sidebars, key).push({
          text: filename,
          link: `/${h1}/${h2}/${h3}`,
        });
      }
    }
  }
  return sidebars;
};
