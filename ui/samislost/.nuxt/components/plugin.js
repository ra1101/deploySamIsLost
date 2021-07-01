import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AppHeader: () => import('../../components/AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Sighting: () => import('../../components/sighting.vue' /* webpackChunkName: "components/sighting" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
