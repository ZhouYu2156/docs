// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import VueAmazingUI from 'vue-amazing-ui'
import 'vue-amazing-ui/css'
// 导入自己的样式
import './custom.less'
// 导入编程导航组件
import ProfilePDF from './components/ProfilePDF.vue'
import ProgramNavigate from './components/ProgramNavigate.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    // 注册组件
    app.component('ProfilePDF', ProfilePDF),
    app.component('ProgramNavigate', ProgramNavigate),
    app.component('VueAmazingUI', VueAmazingUI)
    // 使用插件
    app.use(VueAmazingUI)
  },
} satisfies Theme
