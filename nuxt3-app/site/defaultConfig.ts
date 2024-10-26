export interface Footer {
	lisense: string
	copyright: string
	links: Array<{
		title: string
		sublinks: Array<{
			text: string
			link: string
		}>
	}>
}

export interface SiteConfig {
	/** 全局站点配置 */
	lang: string
	title: string
	description: string
	keywords: string
	icon: string
	logo: string
	banner: boolean
	gradient: boolean
	text_gradient: boolean
	typing: boolean
	text_typing_and_gradient: boolean
	repeatTyping: boolean
	hero_img: string
	hero_title: string
	lead: string
	subtitle: string
	motto: string
	motto_text_gradient: boolean
	divider: boolean
	Go: string
	Go_isGradient: boolean
}
const site: SiteConfig = {
	/** 站点基础配置 */
	// 语言
	lang: 'zh-CN',
	// 站点名称
	title: 'Django+Bootstrap5',
	// 站点描述
	description: '基于 Django + Bootstrap5 的博客系统',
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
	hero_title: 'Django+Nuxt3+Bootstrap5',
	// 引导语
	lead: '💯Django5 + Nuxt3 + 📖VitePress + Element Plus + TS ...强力驱动',
	// 站点描述
	subtitle: '✨提供音乐、博客、视频教程一站式解决方案的出色体验',
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
const footer: Footer = {
	/* 页脚配置 */
	// 开源协议
	lisense: '基于 Apache License 2.0 许可发布',
	//版权
	copyright: '版权所有 © 2019-2024 Admin.',
	// 链接
	links: [
		{
			title: '参考文献',
			sublinks: [
				{
					text: 'MDN',
					link: 'https://developer.mozilla.org/zh-CN/',
				},
				{
					text: '示例',
					link: 'https://v5.bootcss.com/docs/examples/',
				},
				{
					text: '图标库',
					link: 'https://icons.bootcss.com/',
				},
				{
					text: '精选模板',
					link: 'https://www.bootmb.com/',
				},
				{
					text: 'Django文档',
					link: 'https://docs.djangoproject.com/zh-hans/5.1/',
				},
				{
					text: 'Bootstrap 中文文档',
					link: 'https://v5.bootcss.com/',
				},
			],
		},
		{
			title: '扩展组件',
			sublinks: [
				{
					text: 'Sass',
					link: 'https://sass-lang.com/',
				},
				{
					text: 'Markdown',
					link: 'https://www.markdownguide.org/',
				},
				{
					text: 'highlightjs',
					link: 'https://highlightjs.org/',
				},
			],
		},
		{
			title: '开源部署',
			sublinks: [
				{
					text: 'Docker',
					link: 'https://www.docker.com/',
				},
				{
					text: 'Github',
					link: 'https://github.com/',
				},
			],
		},
	],
}

const defaultConfig = { site, footer }

export default defaultConfig
