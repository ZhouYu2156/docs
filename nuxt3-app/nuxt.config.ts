// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    css: ['~/assets/css/base.css', 'element-plus/theme-chalk/dark/css-vars.css'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "~/assets/styles/element/index.scss" as *;	
                        @use '~/assets/scss/global.scss' as *;`,
                    api: 'modern-compiler',
                },
            },
        },
    },
    runtimeConfig: {
        count: 100,
        public: {
            baseURL: 'http://127.0.0.1:8000',
        },
    },
    modules: ['@element-plus/nuxt', '@nuxt/ui', '@nuxtjs/tailwindcss'],
    extends: ['@nuxt/ui-pro'],
    elementPlus: {
        /** Options */
        importStyle: 'scss',
    },
})