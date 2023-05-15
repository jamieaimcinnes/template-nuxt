<template>
  <NuxtLayout>
    <form>
      {{ availableLocales }}
      <select v-model="locale">
        <option v-for="(locale, i) in availableLocales" :value="`locale-${i}`">{{ locale }}</option>
      </select>
    </form>

    <div>{{ $t('test') }}</div>
    <div>{{ $d(new Date()) }}</div>
    <div>{{ $n(100) }}</div>
    <div>
      {{ usedTest }}
      <!-- https://nuxt.com/docs/guide/directory-structure/composables -->
    </div>
    <div><Icon :icon="faUser" /></div>
    <div>
      <OnClickOutside @trigger="clickedOutside">Click Outside of Me {{ count }} times</OnClickOutside>
    </div>

    <div>Lodash - {{ test.toUpper }}</div>

    <div>Device - {{ test.device }}</div>

    <div>
      <Menu>
        <MenuButton>More</MenuButton>
        <MenuItems>
          <MenuItem v-slot="{ active }">
            <a :class="{ 'bg-blue-500': active }" href="/account-settings">Account settings</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a :class="{ 'bg-blue-500': active }" href="/account-settings">Documentation</a>
          </MenuItem>
          <MenuItem disabled>
            <span class="opacity-75">Invite a friend (coming soon!)</span>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>

    <div>1 - {{ testApi.response }}</div>
    <div>2 - {{ test2Api.response }}</div>

    <div class="bg-primary">Way!</div>

    <div class="mt-24"><b>Todo</b></div>
    <div>auth</div>
    <div>seo and head</div>
    <div>mixins ?</div>
    <div>google maps? (with env variables)</div>
    <div>algolia ?</div>
    <div>sitemap?</div>
    <div>flags?</div>
    <div>dev tools</div>
    <div>logging?</div>
    <div>analytics ?</div>
    <div>linting</div>

    <div class="mt-10">
      <FormKit type="form" @submit="submit">
        <FormKit type="text" label="Name" name="name" v-model="test.name" />
        <FormKit type="email" label="Email" name="email" v-model="test.email" />
      </FormKit>
    </div>
  </NuxtLayout>
</template>

<script>
import tinycolor from 'tinycolor2'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { OnClickOutside } from '@vueuse/components'
import { faUser } from '@fortawesome/pro-regular-svg-icons'

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    OnClickOutside
  },

  async setup() {
    const { locale, locales } = useI18n()

    const availableLocales = computed(() => {
      return locales.value.filter(i => i.code !== locale.value)
    })

    const test = reactive({
      toUpper: useToUpper('it works!'),
      device: useDevice()
    })

    const usedTest = useTest()

    /* https://vueuse.org/guide/components.html */
    const count = ref(0)
    const clickedOutside = () => {
      count.value++
    }

    /* https://formkit.com/getting-started/your-first-form */
    const submit = async test => {
      await new Promise(r => setTimeout(r, 1000))
      console.log(test)
    }

    const testApi = new utilApi()
    await testApi.setQuery({ hello: true }).get('/api')

    const primaryColor = '#333333'

    return {
      locale,
      locales,
      availableLocales,
      clickedOutside,
      faUser,
      test,
      submit,
      count,
      usedTest,
      testApi,
      primaryColor
    }
  },

  data() {
    return {
      test2Api: new utilApi()
    }
  },

  mounted() {
    setTimeout(async () => {
      await this.test2Api.setQuery({ array: ['hello', 'thomas'] }).get('/api')
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.bg-primary {
  background-color: v-bind(primaryColor);
}
</style>
