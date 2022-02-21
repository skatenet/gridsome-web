// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// PrimeVue: Import Components
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

// PrimeVue: CSS
import 'primevue/resources/themes/arya-purple/theme.css' // Dark Theme
// import 'primevue/resources/themes/saga-purple/theme.css' // Light Theme
import 'primevue/resources/primevue.min.css' // Core
import 'primeicons/primeicons.css' // Icons @see https://primefaces.org/primevue/showcase/#/icons
import 'primeflex/primeflex.css' // PrimeFlex @see https://www.primefaces.org/primeflex
// PrimeVue: Options
const primeVueOptions = {
  // inputStyle: 'filled',
  // ripple: true,
  // componentScale: 0,
}

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // PrimeVue: Components
  Vue.use(PrimeVue, primeVueOptions)
  Vue.component('Button', Button)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
