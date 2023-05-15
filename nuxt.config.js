// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dev: process.env.NODE_ENV === 'production',

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@nuxtjs/device',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@formkit/nuxt',
    'nuxt-lodash',
    'nuxt-security'
  ],

  components: {
    dirs: ['components/base', 'components']
  },

  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  /* https://google-fonts.nuxtjs.org/options */
  googleFonts: {
    families: {
      Inter: true
    }
  },

  /* https://v8.i18n.nuxtjs.org/getting-started/basic-usage */
  i18n: {
    vueI18n: './i18n.config.js'
  },

  /* https://nuxt-security.vercel.app/getting-started/configuration */
  security: {
    rateLimiter: false
  }
})
