// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
// 导入自己的样式
import './custom.css'
// 导入组件
import GradientTitle from './components/GradientTitle.vue'
import ProgramNavigate from './components/ProgramNavigate.vue'

/** @type {import('vitepress').Theme} */
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
    app.component('GradientTitle', GradientTitle),
    app.component('ProgramNavigate', ProgramNavigate)
  }
}
