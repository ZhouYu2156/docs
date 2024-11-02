import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      screens: {
        xxs: '360px',
        xs: '390px',
        xxl: '1440px',
        xxxl: '1920px'
      },
      spacing: {
        em: '1rem',
        '100vw': '100vw',
        '100vh': '100vh'
      }
    },
  },
  content: [],
  plugins: []
} satisfies Config
