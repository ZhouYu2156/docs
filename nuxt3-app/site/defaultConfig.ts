import type { Footer, SiteConfig } from "~/types/site"

export const site: SiteConfig = {
	/** 站点基础配置 */
	// 语言
	lang: 'zh-CN',
	// 站点名称
	title: 'Django + Nuxt3',
	// 站点描述
	description: '基于 Django + Nuxt3 的博客系统',
	// 关键字描述
	keywords: 'Django,Bootstrap5,Blog,Python,DjangoBlog,DjangoBootstrap5,markdown',
	// 站点图标
	icon: 'pineapple.svg',
	// 站点logo图标
	logo: 'pineapple.svg',
	// ----------------------------------------
	// 是否开启巨幕背景图片
	banner: true,
	// 是否开启白天模式下巨幕渐变颜色背景动画
	gradient: true,
	// 文字背景渐变颜色动画是否开启, 如果要同时开启两个, 建议直接开启下面第三个text_typing_and_gradient总开关即可
	text_gradient: true,
	// 是否开启站点标题css文字打字机动画, css样式层级级: text_typing_and_gradient 靠后，层级略高, 同时开了这两个动画的话，只有第二个生效
	typing: true,
	// 是否开启css文字打字机动画 + 文字渐变颜色背景动画
	text_typing_and_gradient: true,
	// 是否开启正在重复打字的动画效果
	repeatTyping: true, // 重复打字动画可以搭配 打字和文本渐变同时开启
	// hero 背景图
	hero_img: 'icons-hero.png',
	// 站点标题
	hero_title: 'Django5+Nuxt3+Bootstrap5',
	// 引导语
	lead: '💯Django5 + Nuxt3 + 📖VitePress + Element Plus + TailWindCSS + TS ...强力驱动',
	// 站点描述
	subtitle: '✨提供音乐、笔记、视频教程具有出色体验的一站式博客系统',
	// 个人标签, 布尔值为False不显示
	motto: '古之成大事者, 不惟有超世之才, 亦必有坚忍不拔之志.',
	// 是否开启座右铭背景渐变
	motto_text_gradient: false,
	// 分割线
	divider: true,
	// 大按钮的文本
	Go: '开启宇宙探索',
	// 大按钮是否显示背景渐变
	Go_isGradient: true,
}

export const navbars = [
	{
		label: '🎵好听音乐',
		to: '/HomePage/Music',
	},
	{
		label: '🎞️视频教程',
		to: '/HomePage/Tutorial',
	},
	{
		label: '📖知识笔记',
		to: 'https://www.zhouyu2156.cn/',
		target: '_blank'
	},
	{
		label: '💎编程导航',
		to: 'https://www.zhouyu2156.cn/Programming/',
		target: '_blank'
	},
	{
		label: '✨特效大全',
		to: 'https://www.zhouyu2156.cn/effects/飞星.html',
		target: '_blank'
	}
]

/** 强力的组合构建模块 */
export const features = [
	{
		title: 'Music',
		description: '选择你喜欢的音乐尽情享受.',
		to: 'https://github.com/vueuse/vueuse',
		icon: 'fluent-emoji-high-contrast:musical-note'
	},
	{
		title: 'Video',
		description: '体验适合你的教程, 你会知道什么叫优质.',
		to: 'https://github.com/nuxt-community/eslint-module',
		icon: 'heroicons:film-16-solid'
	},
	{
		title: 'Note',
		description: '大脑会淡忘, 但笔记永远在那里.',
		to: 'https://github.com/nuxt-modules/tailwindcss',
		icon: 'system-uicons:book-text'
	}
]

export const footer: Footer = {
	/* 页脚配置 */
	// 开源协议
	lisense: '基于 Apache License 2.0 许可发布',
	// 版权
	copyright: '版权所有 © 2019-2024 Admin.',
	// 链接
	links: [
		{
			label: '参考文档',
			children: [
				{
					label: 'MDN',
					to: 'https://developer.mozilla.org/zh-CN/',
					target: '_blank'
				},
				{
					label: '示例',
					to: 'https://v5.bootcss.com/docs/examples/',
					target: '_blank'
				},
				{
					label: '图标库',
					to: 'https://icons.bootcss.com/',
					target: '_blank'
				},
				{
					label: '精选模板',
					to: 'https://www.bootmb.com/',
					target: '_blank'
				},
				{
					label: 'Django文档',
					to: 'https://docs.djangoproject.com/zh-hans/5.1/',
					target: '_blank'
				},
				{
					label: 'Bootstrap 中文文档',
					to: 'https://v5.bootcss.com/',
					target: '_blank'
				},
			],
		},
		{
			label: '扩展组件',
			children: [
				{
					label: 'Sass',
					to: 'https://sass-lang.com/',
					target: '_blank'
				},
				{
					label: 'Markdown',
					to: 'https://www.markdownguide.org/',
					target: '_blank'
				},
				{
					label: 'highlightjs',
					to: 'https://highlightjs.org/',
					target: '_blank'
				},
			],
		},
		{
			label: '开源部署',
			children: [
				{
					label: 'Docker',
					to: 'https://www.docker.com/',
					target: '_blank'
				},
				{
					label: 'Github',
					to: 'https://github.com/',
					target: '_blank'
				},
			],
		},
	],
}

const defaultConfig = { site, navbars, footer, features }

export default defaultConfig
