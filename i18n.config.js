/* https://v8.i18n.nuxtjs.org/getting-started/setup */
export default defineI18nConfig(nuxt => ({
  locales: [
    { code: 'en', file: 'en.js' },
    { code: 'en-US', file: 'en.js' },
    { code: 'fr', file: 'fr.js' }
  ],
  fallbackLocale: 'en',
  langDir: 'locales',
  detectBrowserLanguage: {
    useCookie: true,
    cookieCrossOrigin: true
  },
  legacy: false,
  fallbackWarn: false,
  missingWarn: false,
  lazy: true
}))
