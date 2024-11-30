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
    title: 'DrawDB',
    link: 'https://www.drawdb.app/',
    icon: 'https://www.drawdb.app/favicon.ico',
  },
  {
    id: 4,
    title: 'chalk.ist',
    link: 'https://chalk.ist/',
    icon: 'https://chalk.ist/favicon.ico'
  },
  {
    id: 5,
    title: '贝塞尔曲线绘制方式引导',
    link: 'https://bezier.method.ac/',
    icon: 'https://bezier.method.ac/favicon.ico'
  },
  {
    id: 6,
    title: '奇迹秀',
    link: 'https://www.qijishow.com/',
    icon: 'https://www.qijishow.com/img/ico.ico'
  },
  {
    id: 7,
    title: 'CDN资源',
    link: 'https://staticfile.net/',
    icon: 'https://staticfile.net/images/favicon.ico'
  },
  {
    id: 8,
    title: 'CDN资源',
    link: 'https://cdnjs.com/',
    icon: 'https://cdnjs.com/_/f7a2ebfb819c118086546e481876aef6.svg'
  },
  {
    id: 9,
    title: 'CodePen',
    link: 'https://codepen.io/',
    icon: 'https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico'
  },
  {
    id: 10,
    title: '实用在线工具',
    link: 'https://tools.jb51.net/',
    icon: 'https://tools.jb51.net/favicon.ico'
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
    icon: 'https://developer.mozilla.org/favicon-192x192.png',
  },
  {
    id: 11,
    title: '快速参考',
    link: 'https://cheatsheets.zip/',
    icon: 'https://cheatsheets.zip/images/favicon.png?v=1',
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
    title: '贝塞尔曲线可视化',
    link: 'https://cubic-bezier.com/',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAVtJREFUOE9jZFi5s4GBkameAQvIVpFlmHrnMTYpTDFGhp8M//51MDKs2v0fl44GbSWGhqv3iDMQpIqR4SdeA5kZGRn+/sdpH1aLcBrIxczM8O3vX4Ku+x/qwsC4eg9cHU4DcXlXkI2VoUNXhSFNSRpsiMmeUwxn338ibKCdqCDDodfvwQrj5CUZFpppM7z5+Zuh8+YDhp6bD8HiXpIiDNuev0HxBd4wBKkEeWnmvacMGWevY3jfWJAPxXWQeMESy85iQgx7X70DG4YcPsgmrrDQZYg4cRnDEqwGVmsqMrToKDNIbT7M8PzHT4IRg6wAq4EmgnwMc021GPR3nSDJMJxexudVQjZguHCZuQ7Dix+/GIou3iKkl7iETYnrsHr5mJMpg9W+02S5DsPAq+6WDNo7j5NtGIaBlHoXw8DbnlYMqtuPUc+FFJkE1UwwL5NqCSO+KoBUwxj+/2sEAKfckNu9qD2CAAAAAElFTkSuQmCC',
  },
  {
    id: 9,
    title: 'Echartjs',
    link: 'https://echarts.apache.org/zh/index.html',
    icon: 'https://echarts.apache.org/zh/images/favicon.png',
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
  {
    id: 11,
    title: 'Element Plus',
    link: 'https://element-plus.org/zh-CN/',
    icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
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
    title: 'UnoCSS',
    link: 'https://unocss.dev/',
    icon: 'https://unocss.dev/logo.svg',
  },
  {
    id: 3,
    title: 'UnoCSS中文网',
    link: 'https://unocss.jiangruyi.com/',
    icon: 'https://unocss.jiangruyi.com/logo.svg',
  },
  {
    id: 4,
    title: 'LayUI',
    link: 'http://layui.apixx.net/index.html',
    icon: 'https://img.vcdisgd.com/p/202107/d2f3c041ef96a6d9.jpg',
  },
])

/**
 * @description
 * CSS预处理器、CSS库、图标库
 */
export const CssPreprocessorItems = ref<ReferenceItems>([
  {
    id: 1,
    title: 'Sass',
    link: 'https://sass-lang.com/',
    icon: 'https://sass-lang.com/favicon.ico',
  },
  {
    id: 2,
    title: 'Less',
    link: 'https://less.bootcss.com/',
    icon: 'https://less.bootcss.com/public/ico/favicon.ico',
  },
  {
    id: 3,
    title: 'Bootstrap5',
    link: 'https://v5.bootcss.com/',
    icon: 'https://v5.bootcss.com/docs/5.3/assets/img/favicons/android-chrome-192x192.png',
  },
  {
    id: 4,
    title: '纯CSS动画库',
    link: 'https://animxyz.com/docs',
    icon: 'https://animxyz.com/assets/static/animxyz-logo.ac8d93a.39f3bde368e480505b70778acaa2ac74.png',
  },
  {
    id: 5,
    title: '阿里图标库',
    link: 'https://www.iconfont.cn/',
    icon: 'https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg',
  },
  {
    id: 6,
    title: 'NuxtIcons',
    link: 'https://icones.js.org/',
    icon: 'https://icones.js.org/android-chrome-192x192.png',
  },
])

/**
 * @description
 * 编译器预处理器
 */
export const CompilerPreProcessorItems = ref<ReferenceItems>([
  {
    id: 1,
    title: 'Rust',
    link: 'https://www.rust-lang.org/',
    icon: 'https://www.rust-lang.org/static/images/rust-logo-blk.svg',
  },
  {
    id: 2,
    title: 'Rust中文网',
    link: 'https://rust.p2hp.com/',
    icon: 'https://rust.p2hp.com/static/images/rust-logo-blk.svg',
  },
  {
    id: 3,
    title: 'Webpack中文网',
    link: 'https://www.webpackjs.com/',
    icon: 'https://www.webpackjs.com/icon_192x192.png',
  },

])

/**
 * @description
 * AI工具大全
 */
export const AiItems = ref<ReferenceItems>([
  {
    id: 1,
    title: 'AI工具网址大全',
    link: 'https://aibard123.com/',
    icon: 'https://aibard123.com/assets/images/logos/360-ai-search-icon.png'
  },
  {
    id: 2,
    title: 'Hugging Face',
    link: 'https://huggingface.co/',
    icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg'
  },
  {
    id: 3,
    title: 'Ollama',
    link: 'https://ollama.com/',
    icon: 'https://ollama.com/public/ollama.png'
  },
  {
    id: 4,
    title: '豆包',
    link: 'https://www.doubao.com/',
    icon: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/logo-doubao-overflow.png'
  },
  {
    id: 5,
    title: 'OpenAI官网',
    link: 'https://openai.com/',
    icon: 'https://cdn.oaistatic.com/assets/favicon-o20kmmos.svg',
  },
  {
    id: 6,
    title: 'ChatGPT',
    link: 'https://chatgpt.com/',
    icon: 'https://cdn.oaistatic.com/assets/favicon-o20kmmos.svg'
  },
  {
    id: 7,
    title: '天工AI',
    link: 'https://www.tiangong.cn/',
    icon: 'https://static.tiangong.cn/wwwsite/assets/tab-logo-B0tzp8eR.png'
  },
  {
    id: 8,
    title: 'Pulid',
    link: 'https://yunyingmenghai.feishu.cn/wiki/N5XAwFxaBiEhMfk0jGMcqI9Vnve?view=vew8jTRKbz&table=tblCKq0uVrsY6QdN',
    icon: 'https://lf-scm-cn.feishucdn.com/ccm/pc/web/resource/bear/src/common/assets/favicons/icon_file_doc_nor-32x32.8cb0fef16653221e74b9.png'
  },
  {
    id: 9,
    title: 'Lobehub',
    link: 'https://chat-preview.lobehub.com/',
    icon: 'https://chat-preview.lobehub.com/icons/icon-192x192.png'
  },
  {
    id: 10,
    title: 'AI魔法',
    link: 'https://www.msbd123.com/',
    icon: 'https://cdn.msbd123.com/wp-content/uploads/2023/03/baidilogo.png'
  },
  {
    id: 11,
    title: 'Pika',
    link: 'https://pika.art/',
    icon: 'https://pika.art/favicon.ico'
  },
  {
    id: 12,
    title: 'AI工具导航',
    link: 'https://www.aig123.com/',
    icon: 'https://www.aig123.com/wp-content/themes/onenav/images/favicon.png'
  },
  {
    id: 13,
    title: 'Luma AI',
    link: 'https://lumalabs.ai/dream-machine',
    icon: 'https://cdn-luma.com/public/captures.lumalabs.ai/images/logo.svg'
  },
  {
    id: 14,
    title: 'Domo AI',
    link: 'https://domoai.app/',
    icon: 'https://cdn.prod.website-files.com/652242395f6164bbe183da35/65d865c66c071ed1af11d0cd_domoai_32.png'
  },
])

/**
 * @description
 * 优秀博客网站
 */
export const BlogItems = ref<ReferenceItems>([
  {
    id: 1,
    title: '全栈工具',
    link: 'https://vitepress.qzxdp.cn/',
    icon: 'https://vitepress.qzxdp.cn/vitepress-logo-mini.svg',
  },
  {
    id: 2,
    title: 'dfairy的博客',
    link: 'https://dfairy.github.io/dfairyblog/',
    icon: 'https://dfairy-1258930237.cos.ap-shanghai.myqcloud.com/test.png',
  },
  {
    id: 3,
    title: 'CS-Notes 面试笔记',
    link: 'http://www.cyc2018.xyz/',
    icon: 'https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/githubio/LogoMakr_0zpEzN.png',
  },
  {
    id: 4,
    title: 'Hello 算法',
    link: 'https://www.hello-algo.com/',
    icon: 'https://www.hello-algo.com/assets/images/logo.svg',
  },
  {
    id: 4,
    title: '印记中文文档✨️',
    link: 'https://docschina.org/',
    icon: 'https://docschina.org/favicon.svg',
  },
])

/** 优秀学习网站 */
export const LeaningWebsites = ref<ReferenceItems>([
  {
    id: 1,
    title: 'B站',
    link: 'https://www.bilibili.com/',
    icon: 'https://tukuimg.bdstatic.com/cms/2dfea3b61b924ab4fd61bbd3119839ac.jpeg'
  },
  {
    id: 2,
    title: '面试鸭',
    link: 'https://www.mianshiya.com/',
    icon: '	https://www.mianshiya.com/_next/image?url=%2Flogo.png&w=32&q=75'
  },
  {
    id: 3,
    title: 'LeetCode',
    link: 'https://leetcode.cn/',
    icon: 'https://leetcode.cn/favicon.ico'
  },
  {
    id: 4,
    title: '掘金',
    link: 'https://juejin.cn/',
    icon: 'https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg'
  },
  {
    id: 5,
    title: 'Github',
    link: 'https://github.com/',
    icon: 'https://github.githubassets.com/assets/apple-touch-icon-144x144-b882e354c005.png'
  },
])