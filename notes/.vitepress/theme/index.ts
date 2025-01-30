// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme, { VPDocAsideSponsors } from 'vitepress/theme'
import { h } from 'vue'
import Image from './components/Image.vue'
import MusicPlayer from './components/MusicPlayer.vue'
import './index.scss'
import Layout from './Layout.vue'
import ThemeTransitionLayout from './ThemeTransitionLayout.vue'


export default {
  extends: DefaultTheme,
  Layout: () => {
    // DefaultTheme.Layout
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'nav-bar-content-after': () => h(MusicPlayer),
      'aside-ads-before': () =>
        h(VPDocAsideSponsors, {
          data: [
            {
              name: 'VueMastery',
              img: 'https://sponsors.vuejs.org/images/vuemastery.avif',
              url: 'https://www.vuemastery.com/',
            },
            {
              name: 'VueSchool',
              img: 'https://sponsors.vuejs.org/images/vueschool.avif',
              url: 'https://vueschool.io/?utm_source=Vuejs.org&utm_medium=Banner&utm_campaign=Sponsored%20Banner&utm_content=V1',
            },
            {
              name: 'Vehikl',
              img: 'https://sponsors.vuejs.org/images/vehikl.avif',
              url: 'https://vehikl.com/',
            },
            {
              name: 'Passionate People',
              img: 'https://sponsors.vuejs.org/images/passionate_people.avif',
              url: 'https://passionatepeople.io/',
            },
          ],
          size: 'xmini',
          mode: 'aside',
          tier: 'Sponsors',
        }),
      'aside-ads-after': () =>
        h(VPDocAsideSponsors, {
          data: [
            {
              name: 'Vehikl',
              img: 'https://sponsors.vuejs.org/images/vehikl.avif',
              url: 'https://vehikl.com/',
            },
            {
              name: 'Passionate People',
              img: 'https://sponsors.vuejs.org/images/passionate_people.avif',
              url: 'https://passionatepeople.io/',
            },
          ],
          size: 'mini',
          mode: 'normal',
        }),
    })
  },
  enhanceApp ({ app, router, siteData }) {
    // 注册自定义全局组件
    app.component('Image', Image)
  },
} satisfies Theme
