import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0411a6ec = () => interopDefault(import('..\\pages\\articles\\index.vue' /* webpackChunkName: "pages_articles_index" */))
const _6e1bcdac = () => interopDefault(import('..\\pages\\computesalary\\index.vue' /* webpackChunkName: "pages_computesalary_index" */))
const _58116049 = () => interopDefault(import('..\\pages\\customer\\index.vue' /* webpackChunkName: "pages_customer_index" */))
const _6e1a0841 = () => interopDefault(import('..\\pages\\invoices\\index.vue' /* webpackChunkName: "pages_invoices_index" */))
const _2c354b52 = () => interopDefault(import('..\\pages\\job.vue' /* webpackChunkName: "pages_job" */))
const _ed960484 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _66da0f88 = () => interopDefault(import('..\\pages\\newinvoice.vue' /* webpackChunkName: "pages_newinvoice" */))
const _6160ee51 = () => interopDefault(import('..\\pages\\paidsalary\\index.vue' /* webpackChunkName: "pages_paidsalary_index" */))
const _034e73f8 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages_profile_index" */))
const _a8154b44 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _60968333 = () => interopDefault(import('..\\pages\\Signup.vue' /* webpackChunkName: "pages_Signup" */))
const _1e6f6356 = () => interopDefault(import('..\\pages\\uppaidsalary\\index.vue' /* webpackChunkName: "pages_uppaidsalary_index" */))
const _42aab4bc = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages_user_index" */))
const _0572a04c = () => interopDefault(import('..\\pages\\invoices\\draft\\_id.vue' /* webpackChunkName: "pages_invoices_draft__id" */))
const _db671d0a = () => interopDefault(import('..\\pages\\invoices\\overdue\\_id.vue' /* webpackChunkName: "pages_invoices_overdue__id" */))
const _0dfe3e46 = () => interopDefault(import('..\\pages\\invoices\\paid\\_id.vue' /* webpackChunkName: "pages_invoices_paid__id" */))
const _82dbbca6 = () => interopDefault(import('..\\pages\\invoices\\published\\_id.vue' /* webpackChunkName: "pages_invoices_published__id" */))
const _6cca6d1c = () => interopDefault(import('..\\pages\\articles\\_id.vue' /* webpackChunkName: "pages_articles__id" */))
const _a8463e1e = () => interopDefault(import('..\\pages\\customer\\_id.vue' /* webpackChunkName: "pages_customer__id" */))
const _bb6f5e0e = () => interopDefault(import('..\\pages\\paidsalary\\_id.vue' /* webpackChunkName: "pages_paidsalary__id" */))
const _80e54ab2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/articles",
    component: _0411a6ec,
    name: "articles"
  }, {
    path: "/computesalary",
    component: _6e1bcdac,
    name: "computesalary"
  }, {
    path: "/customer",
    component: _58116049,
    name: "customer"
  }, {
    path: "/invoices",
    component: _6e1a0841,
    name: "invoices"
  }, {
    path: "/job",
    component: _2c354b52,
    name: "job"
  }, {
    path: "/login",
    component: _ed960484,
    name: "login"
  }, {
    path: "/newinvoice",
    component: _66da0f88,
    name: "newinvoice"
  }, {
    path: "/paidsalary",
    component: _6160ee51,
    name: "paidsalary"
  }, {
    path: "/profile",
    component: _034e73f8,
    name: "profile"
  }, {
    path: "/register",
    component: _a8154b44,
    name: "register"
  }, {
    path: "/Signup",
    component: _60968333,
    name: "Signup"
  }, {
    path: "/uppaidsalary",
    component: _1e6f6356,
    name: "uppaidsalary"
  }, {
    path: "/user",
    component: _42aab4bc,
    name: "user"
  }, {
    path: "/invoices/draft/:id?",
    component: _0572a04c,
    name: "invoices-draft-id"
  }, {
    path: "/invoices/overdue/:id?",
    component: _db671d0a,
    name: "invoices-overdue-id"
  }, {
    path: "/invoices/paid/:id?",
    component: _0dfe3e46,
    name: "invoices-paid-id"
  }, {
    path: "/invoices/published/:id?",
    component: _82dbbca6,
    name: "invoices-published-id"
  }, {
    path: "/articles/:id",
    component: _6cca6d1c,
    name: "articles-id"
  }, {
    path: "/customer/:id",
    component: _a8463e1e,
    name: "customer-id"
  }, {
    path: "/paidsalary/:id",
    component: _bb6f5e0e,
    name: "paidsalary-id"
  }, {
    path: "/",
    component: _80e54ab2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
