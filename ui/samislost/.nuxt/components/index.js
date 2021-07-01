import { wrapFunctional } from './utils'

export { default as AppHeader } from '../../components/AppHeader.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Sighting } from '../../components/sighting.vue'

export const LazyAppHeader = import('../../components/AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazySighting = import('../../components/sighting.vue' /* webpackChunkName: "components/sighting" */).then(c => wrapFunctional(c.default || c))
