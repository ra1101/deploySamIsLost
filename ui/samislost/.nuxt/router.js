import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _24758537 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _232f7b03 = () => interopDefault(import('../pages/createEntry/index.vue' /* webpackChunkName: "pages/createEntry/index" */))
const _0b6757e7 = () => interopDefault(import('../pages/list/index.vue' /* webpackChunkName: "pages/list/index" */))
const _2518a3ee = () => interopDefault(import('../pages/map/index.vue' /* webpackChunkName: "pages/map/index" */))
const _4d742752 = () => interopDefault(import('../pages/list/_id/index.vue' /* webpackChunkName: "pages/list/_id/index" */))
const _442d5ffc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _24758537,
    name: "about"
  }, {
    path: "/createEntry",
    component: _232f7b03,
    name: "createEntry"
  }, {
    path: "/list",
    component: _0b6757e7,
    name: "list"
  }, {
    path: "/map",
    component: _2518a3ee,
    name: "map"
  }, {
    path: "/list/:id",
    component: _4d742752,
    name: "list-id"
  }, {
    path: "/",
    component: _442d5ffc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
