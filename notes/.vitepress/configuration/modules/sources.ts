import { ref } from 'vue'
import { ReferenceItems } from '../modules/types'

/**
 * @description
 * 前端开发相关的一些辅助文档网站
 */
export const FrontEndItems = ref<ReferenceItems>([
	{
		id: 1,
		title: '配色主题',
		link: 'https://flatuicolors.com/',
		icon: 'https://flatuicolors.com/static/favicon.ico',
	},
	{
		id: 2,
		title: '生成圆角',
		link: 'https://9elements.github.io/fancy-border-radius/#',
		icon: 'https://9elements.github.io/fancy-border-radius/favicon-32x32.png',
	},
	{
		id: 3,
		title: 'OpenAI官网',
		link: 'https://openai.com/',
		icon: 'https://openai.com/favicon.ico?v=2',
	},
])

/**
 * @description
 * javascript 学习文档网站
 */
export const JavaScriptItems = ref<ReferenceItems>([
	{
		id: 1,
		title: 'TypeScript',
		link: 'https://www.typescriptlang.org/',
		icon: 'https://www.typescriptlang.org/favicon-32x32.png',
	},
	{
		id: 2,
		title: '网道',
		link: 'https://wangdoc.com/',
		icon: 'https://wangdoc.com/assets/icons/favicon-32x32.png',
	},
	{
		id: 3,
		title: 'ES6',
		link: 'https://es6.ruanyifeng.com/',
		icon: 'https://es6.ruanyifeng.com/favicon.ico',
	},
	{
		id: 4,
		title: '快速文档查找',
		link: 'https://cheatsheets.zip/',
		icon: 'https://cheatsheets.zip/images/favicon.png',
	},
	{
		id: 5,
		title: 'Nodejs',
		link: 'https://nodejs.org/',
		icon: 'https://nodejs.org/static/images/favicons/favicon.png',
	},
	{
		id: 6,
		title: '菜鸟教程',
		link: 'https://www.runoob.com/',
		icon: '/favicon/cainiao.png',
	},
	{
		id: 7,
		title: 'w3schools',
		link: 'https://www.w3schools.com/',
		icon: 'https://www.w3schools.com/favicon.ico',
	},
	{
		id: 8,
		title: 'w3school',
		link: 'https://www.w3school.com.cn/',
		icon: 'https://www.w3school.com.cn/ui2019/logo-32-red.png',
	},
	{
		id: 9,
		title: '现代 JavaScript 教程',
		link: 'https://zh.javascript.info/',
		icon: 'https://zh.javascript.info/img/favicon/favicon.png',
	},
	{
		id: 10,
		title: 'MDN',
		link: 'https://developer.mozilla.org/',
		icon: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png',
	},
])

/**
 * @description
 * javascript 工具库
 */
export const JavaScriptToolItems = ref<ReferenceItems>([
	{
		id: 1,
		title: 'Axios',
		link: 'https://www.axios-http.cn/',
		icon: 'https://www.axios-http.cn/img/favicon.ico',
	},
	{
		id: 2,
		title: 'Babel',
		link: 'https://www.babeljs.cn/',
		icon: 'https://www.babeljs.cn/img/favicon.png',
	},
	{
		id: 3,
		title: 'highlightjs',
		link: 'https://highlightjs.org/',
		icon: 'https://highlightjs.org/icon.png',
	},
	{
		id: 4,
		title: 'Dayjs',
		link: 'https://dayjs.fenxianglu.cn/',
		icon: 'https://dayjs.fenxianglu.cn/assets/favicon.png',
	},
	{
		id: 5,
		title: 'jQuery',
		link: 'https://www.jquery123.com/',
		icon: 'https://www.jquery123.com/assets/images/favicon.ico',
	},
	{
		id: 6,
		title: 'WebRTC',
		link: 'https://webrtc.org/?hl=zh-cn',
		icon: 'https://webrtc.org/_pwa/webrtc/icons/icon-144x144.png',
	},
	{
		id: 7,
		title: 'clipboardjs',
		link: 'https://clipboardjs.com/',
		icon: 'https://clipboardjs.com/favicon.ico',
	},
	{
		id: 8,
		title: '纯CSS动画库',
		link: 'https://animxyz.com/docs',
		icon: 'https://animxyz.com/assets/static/animxyz-logo.ac8d93a.39f3bde368e480505b70778acaa2ac74.png',
	},
	{
		id: 9,
		title: '贝塞尔曲线可视化',
		link: 'https://cubic-bezier.com/',
		icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAVtJREFUOE9jZFi5s4GBkameAQvIVpFlmHrnMTYpTDFGhp8M//51MDKs2v0fl44GbSWGhqv3iDMQpIqR4SdeA5kZGRn+/sdpH1aLcBrIxczM8O3vX4Ku+x/qwsC4eg9cHU4DcXlXkI2VoUNXhSFNSRpsiMmeUwxn338ibKCdqCDDodfvwQrj5CUZFpppM7z5+Zuh8+YDhp6bD8HiXpIiDNuev0HxBd4wBKkEeWnmvacMGWevY3jfWJAPxXWQeMESy85iQgx7X70DG4YcPsgmrrDQZYg4cRnDEqwGVmsqMrToKDNIbT7M8PzHT4IRg6wAq4EmgnwMc021GPR3nSDJMJxexudVQjZguHCZuQ7Dix+/GIou3iKkl7iETYnrsHr5mJMpg9W+02S5DsPAq+6WDNo7j5NtGIaBlHoXw8DbnlYMqtuPUc+FFJkE1UwwL5NqCSO+KoBUwxj+/2sEAKfckNu9qD2CAAAAAElFTkSuQmCC',
	},
])

/**
 * @description
 * javascript 动画库
 */
export const AnimationLibItems = ref<ReferenceItems>([
	{
		id: 1,
		title: 'Threejs',
		link: 'https://threejs.org/',
		icon: 'https://threejs.org/files/favicon.ico',
	},
	{
		id: 2,
		title: 'D3',
		link: 'https://d3js.org/',
		icon: 'https://d3js.org/logo.png',
	},
	{
		id: 3,
		title: '抽奖大转盘组件',
		link: 'https://100px.net/',
		icon: 'https://100px.net/logo.png',
	},
	{
		id: 4,
		title: 'loading动画库',
		link: 'https://loading.io/',
		icon: 'https://loading.io/favicon.png',
	},
	{
		id: 5,
		title: 'SVGjs',
		link: 'https://svgjs.dev/docs/3.0/',
		icon: 'https://svgjs.dev/docs/3.0/assets/images/logo-svg-js-01d-128.png',
	},
	{
		id: 6,
		title: 'GSAP',
		link: 'https://www.gsap.com/',
		icon: 'https://www.gsap.com/favicon-32x32.png',
	},
	{
		id: 7,
		title: 'UnoCSS',
		link: 'https://unocss.com/',
		icon: '',
	},
])

/**
 * @description
 * nodejs后端开发相关的文档网站
 */
export const NodejsItems = ref<ReferenceItems>([
	{
		id: 1,
		title: 'Nodejs',
		link: 'https://nodejs.org/zh-cn',
		icon: 'https://img.nodejs.cn/favicon.png',
	},
	{
		id: 2,
		title: 'Express',
		link: 'https://www.expressjs.com.cn/',
		icon: 'https://www.expressjs.com.cn/images/favicon.png',
	},
	{
		id: 3,
		title: 'Socket.IO',
		link: 'https://socket.io/',
		icon: 'https://socket.io/images/favicon.png',
	},
	{
		id: 4,
		title: '中文网文档大全',
		link: 'https://nodejs.cn/',
		icon: 'https://img.nodejs.cn/favicon.png',
	},
])

/**
 * @description
 * Vue全家桶相关的文档网站
 */
export const VueItems = ref<ReferenceItems>([
	{
		id: 1,
		title: 'Vue',
		link: 'https://cn.vuejs.org/',
		icon: 'https://cn.vuejs.org/logo.svg',
	},
	{
		id: 2,
		title: 'Pinia',
		link: 'https://pinia.vuejs.org/zh/',
		icon: 'https://pinia.vuejs.org/logo.svg',
	},
	{
		id: 3,
		title: 'Pinia Persisted',
		link: 'https://prazdevs.github.io/pinia-plugin-persistedstate/zh/',
		icon: 'https://prazdevs.github.io/pinia-plugin-persistedstate/favicon.ico',
	},
	{
		id: 4,
		title: 'PrimeVue',
		link: 'https://primevue.org/',
		icon: 'https://primevue.org/favicon.ico',
	},
	{
		id: 5,
		title: 'Naive UI',
		link: 'https://www.naiveui.com/',
		icon: 'https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg',
	},
	{
		id: 6,
		title: 'VitePress官网',
		link: 'https://vitepress.dev/zh/	',
		icon: 'https://vitepress.dev/vitepress-logo-large.webp',
	},
	{
		id: 7,
		title: 'Nuxt',
		link: 'https://www.nuxtjs.cn/',
		icon: 'https://www.nuxtjs.cn/favicon.ico',
	},
	{
		id: 8,
		title: 'Vite',
		link: 'https://cn.vitejs.dev/',
		icon: 'https://cn.vitejs.dev/logo.svg',
	},
	{
		id: 9,
		title: 'Vue Router',
		link: 'https://router.vuejs.org/zh/',
		icon: 'https://router.vuejs.org/logo.svg',
	},
	{
		id: 10,
		title: 'VueUse',
		link: 'https://vueuse.org/',
		icon: 'https://vueuse.org/favicon.svg',
	},
])

/**
 * 代码格式化工具
 */
export const FormatItems = ref<ReferenceItems>([
	{
		id: 1,
		title: 'ESLint',
		link: 'https://eslint.org/',
		icon: 'https://eslint.org/icon.svg',
	},
	{
		id: 2,
		title: 'Prettier',
		link: 'https://prettier.io/',
		icon: 'https://prettier.io/icon.png',
	},
])

/**
 * @description
 * React全家桶相关的文档网站
 */
export const ReactItems = ref<ReferenceItems>([
	{
		id: 1,
		title: 'React',
		link: 'https://react.docschina.org/',
		icon: 'https://react.docschina.org/favicon.ico',
	},
	{
		id: 2,
		title: 'Next UI',
		link: 'https://nextui.org/',
		icon: 'https://nextui.org/favicon.ico',
	},
	{
		id: 3,
		title: 'Ant Design',
		link: 'https://4x.ant.design/',
		icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
	},
	{
		id: 4,
		title: 'Material UI',
		link: 'https://mui.com/material-ui/',
		icon: 'https://mui.com/static/favicon.ico',
	},
	{
		id: 5,
		title: 'Chakra UI',
		link: 'https://v2.chakra-ui.com/',
		icon: 'https://v2.chakra-ui.com/favicon.png',
	},
	{
		id: 5,
		title: 'Nextjs',
		link: 'https://www.nextjs.cn/',
		icon: 'https://www.nextjs.cn/static/favicon/favicon-32x32.png',
	},
])

/**
 * @description
 * Python学习文档网站
 */
export const PythonItems = ref<ReferenceItems>([
	{
		id: 1,
		title: 'Python',
		link: 'https://www.python.org/',
		icon: 'https://www.python.org/static/favicon.ico',
	},
])

/**
 * @description
 * Linux服务器相关的文档网站
 */
export const LinuxItems = ref<ReferenceItems>([
	{
		id: 1,
		title: 'Nginx',
		link: 'https://nginx.org/',
		icon: 'https://nginx.org/favicon.ico',
	},
])

/**
 * @description
 * 通用组件库网站
 */
export const ComponentLibItems = ref<ReferenceItems>([
	{
		id: 1,
		title: 'UIverse',
		link: 'https://uiverse.io/',
		icon: 'https://uiverse.io/android-chrome-192x192.png',
	},
	{
		id: 2,
		title: 'Element Plus',
		link: 'https://element-plus.org/zh-CN/',
		icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
	},
	{
		id: 3,
		title: 'UnoCSS',
		link: 'https://unocss.dev/',
		icon: 'https://unocss.dev/logo.svg',
	},
	{
		id: 4,
		title: 'UnoCSS中文网',
		link: 'https://unocss.jiangruyi.com/',
		icon: 'https://unocss.jiangruyi.com/logo.svg',
	},
])

/**
 * @description
 * 优秀博客网站
 */
export const BlogItems = ref<ReferenceItems>([
	{
		id: 1,
		title: '后盾人编程教程',
		link: 'https://doc.houdunren.com/',
		icon: '	https://doc.houdunren.com/logo.png',
	},
	{
		id: 2,
		title: '全栈工具',
		link: 'https://vitepress.qzxdp.cn/',
		icon: 'https://vitepress.qzxdp.cn/vitepress-logo-mini.svg',
	},
])
