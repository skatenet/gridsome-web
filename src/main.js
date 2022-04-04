// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

// Font Awesome: https://fontawesome.com/docs/web/use-with/vue/
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faTwitter, faInstagram)
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Setup all components
export default function (Vue, { router, head, isClient }) {
  // Font Awesome Component
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
