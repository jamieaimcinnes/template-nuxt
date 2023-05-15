/* https://fontawesome.com/v6/docs/web/use-with/vue/use-with#contentHeader */
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('Icon', FontAwesomeIcon, {})
})
