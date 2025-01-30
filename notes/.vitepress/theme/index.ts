// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Image from './components/Image.vue'
import './index.scss'
import Layout from './Layout.vue'


export default {
  extends: DefaultTheme,
  Layout: () => {
    // DefaultTheme.Layout
    return h(Layout, null)
  },
  enhanceApp ({ app, router, siteData }) {
    // 注册自定义全局组件
    app.component('Image', Image)
  },
} satisfies Theme
