import { defineConfig } from 'vitepress'
// 自动导入插件
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import FILINGS from './archive' // 档案
import { markdown, nav, search, sidebar, socialLinks } from './configuration' // 配置分模块管理

// https://vitepress.dev/reference/site-config
export default defineConfig({
	vite: {
		plugins: [
			AutoImport({
				resolvers: [ElementPlusResolver()],
			}),
			Components({
				resolvers: [ElementPlusResolver()],
			}),
		],
		build: {
			chunkSizeWarningLimit: 1024 * 10,
		},
	},
	lang: 'zh-CN',
	title: '极 客 兔',
	// 设置打包输出路径
	outDir: './dist',
	// 设置源文件根目录
	srcDir: './src',
	srcExclude: ['**/README.md', '**/TODO.md'],
	description: '一心创作优质内容,你学习路上的笔记好帮手...',
	/** 网站 head 的 meta 元数据 */
	head: [['link', { rel: 'icon', href: 'pineapple-logo.svg' }]],
	/** markdown相关的自定义配置 */
	markdown,
	/** 国际化配置 */
	locales: {
		root: {
			label: '中文',
			lang: 'zh-CN',
		},
	},
	ignoreDeadLinks: true, // 忽略无效链接
	themeConfig: {
		search, // 搜索框配置
		nav, // 导航栏
		socialLinks, // 社交链接
		sidebar, // 左边侧边栏(一般用于显示目录树结构)
		siteTitle: '极 客 兔', // 网站左上角标题
		returnToTopLabel: '返回顶部', // 手机端才会显示
		lastUpdated: {
			text: '最近更新时间',
		},
		notFound: {
			title: '找不到页面',
			linkText: '返回首页',
			quote: '如果你不改变方向, 保持寻找, 你可能会到达你想要去的地方！',
		},
		/* 编辑链接 */
		editLink: {
			pattern: 'https://github.com/ZhouYu2156/docs',
			text: '在 Github 上编辑此页',
		},
		// 文章大纲
		outline: {
			level: 'deep',
			label: '文 章 导 航',
		},
		logo: '/pineapple-logo.svg',
		// 文档页脚
		docFooter: {
			prev: '上一篇',
			next: '下一篇',
		},
		// 首页的页脚
		footer: {
			message: FILINGS,
			copyright: 'Copyright © 2023 Created By Zhou Yu.',
		},
	},
})
