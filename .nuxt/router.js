import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e92063aa = () => interopDefault(import('..\\pages\\articles\\index.vue' /* webpackChunkName: "pages_articles_index" */))
const _5a9c08ab = () => interopDefault(import('..\\pages\\computesalary\\index.vue' /* webpackChunkName: "pages_computesalary_index" */))
const _34ebfc2c = () => interopDefault(import('..\\pages\\customer\\index.vue' /* webpackChunkName: "pages_customer_index" */))
const _08daac3c = () => interopDefault(import('..\\pages\\invoices\\index.vue' /* webpackChunkName: "pages_invoices_index" */))
const _193ad31a = () => interopDefault(import('..\\pages\\job.vue' /* webpackChunkName: "pages_job" */))
const _3a3c049f = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _018da572 = () => interopDefault(import('..\\pages\\newinvoice.vue' /* webpackChunkName: "pages_newinvoice" */))
const _7337abb2 = () => interopDefault(import('..\\pages\\paidsalary\\index.vue' /* webpackChunkName: "pages_paidsalary_index" */))
const _1b36277a = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages_profile_index" */))
const _e6a24846 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _732cd885 = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages_settings_index" */))
const _5f1f4f1c = () => interopDefault(import('..\\pages\\Signup.vue' /* webpackChunkName: "pages_Signup" */))
const _158c4c77 = () => interopDefault(import('..\\pages\\uppaidsalary\\index.vue' /* webpackChunkName: "pages_uppaidsalary_index" */))
const _93a16246 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages_user_index" */))
const _53caf3be = () => interopDefault(import('..\\pages\\resetpassword\\useremail\\index.vue' /* webpackChunkName: "pages_resetpassword_useremail_index" */))
const _90dd71ea = () => interopDefault(import('..\\pages\\settings\\change-password.vue' /* webpackChunkName: "pages_settings_change-password" */))
const _1f208d16 = () => interopDefault(import('..\\pages\\settings\\export-data.vue' /* webpackChunkName: "pages_settings_export-data" */))
const _5a0ad2e0 = () => interopDefault(import('..\\pages\\settings\\invoice-settings.vue' /* webpackChunkName: "pages_settings_invoice-settings" */))
const _25519d7a = () => interopDefault(import('..\\pages\\settings\\personal-settings.vue' /* webpackChunkName: "pages_settings_personal-settings" */))
const _2c722a4e = () => interopDefault(import('..\\pages\\invoices\\draft\\_id.vue' /* webpackChunkName: "pages_invoices_draft__id" */))
const _5fa9e8ba = () => interopDefault(import('..\\pages\\invoices\\overdue\\_id.vue' /* webpackChunkName: "pages_invoices_overdue__id" */))
const _1fc46c04 = () => interopDefault(import('..\\pages\\invoices\\paid\\_id.vue' /* webpackChunkName: "pages_invoices_paid__id" */))
const _ab2275a8 = () => interopDefault(import('..\\pages\\invoices\\published\\_id.vue' /* webpackChunkName: "pages_invoices_published__id" */))
const _6e615f53 = () => interopDefault(import('..\\pages\\articles\\_id.vue' /* webpackChunkName: "pages_articles__id" */))
const _50a376d2 = () => interopDefault(import('..\\pages\\customer\\_id.vue' /* webpackChunkName: "pages_customer__id" */))
const _2fc0f29a = () => interopDefault(import('..\\pages\\paidsalary\\_id.vue' /* webpackChunkName: "pages_paidsalary__id" */))
const _59a0e81e = () => interopDefault(import('..\\pages\\mail\\_userid\\_token.vue' /* webpackChunkName: "pages_mail__userid__token" */))
const _70946188 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _e92063aa,
    name: "articles"
  }, {
    path: "/computesalary",
    component: _5a9c08ab,
    name: "computesalary"
  }, {
    path: "/customer",
    component: _34ebfc2c,
    name: "customer"
  }, {
    path: "/invoices",
    component: _08daac3c,
    name: "invoices"
  }, {
    path: "/job",
    component: _193ad31a,
    name: "job"
  }, {
    path: "/login",
    component: _3a3c049f,
    name: "login"
  }, {
    path: "/newinvoice",
    component: _018da572,
    name: "newinvoice"
  }, {
    path: "/paidsalary",
    component: _7337abb2,
    name: "paidsalary"
  }, {
    path: "/profile",
    component: _1b36277a,
    name: "profile"
  }, {
    path: "/register",
    component: _e6a24846,
    name: "register"
  }, {
    path: "/settings",
    component: _732cd885,
    name: "settings"
  }, {
    path: "/Signup",
    component: _5f1f4f1c,
    name: "Signup"
  }, {
    path: "/uppaidsalary",
    component: _158c4c77,
    name: "uppaidsalary"
  }, {
    path: "/user",
    component: _93a16246,
    name: "user"
  }, {
    path: "/resetpassword/useremail",
    component: _53caf3be,
    name: "resetpassword-useremail"
  }, {
    path: "/settings/change-password",
    component: _90dd71ea,
    name: "settings-change-password"
  }, {
    path: "/settings/export-data",
    component: _1f208d16,
    name: "settings-export-data"
  }, {
    path: "/settings/invoice-settings",
    component: _5a0ad2e0,
    name: "settings-invoice-settings"
  }, {
    path: "/settings/personal-settings",
    component: _25519d7a,
    name: "settings-personal-settings"
  }, {
    path: "/invoices/draft/:id?",
    component: _2c722a4e,
    name: "invoices-draft-id"
  }, {
    path: "/invoices/overdue/:id?",
    component: _5fa9e8ba,
    name: "invoices-overdue-id"
  }, {
    path: "/invoices/paid/:id?",
    component: _1fc46c04,
    name: "invoices-paid-id"
  }, {
    path: "/invoices/published/:id?",
    component: _ab2275a8,
    name: "invoices-published-id"
  }, {
    path: "/articles/:id",
    component: _6e615f53,
    name: "articles-id"
  }, {
    path: "/customer/:id",
    component: _50a376d2,
    name: "customer-id"
  }, {
    path: "/paidsalary/:id",
    component: _2fc0f29a,
    name: "paidsalary-id"
  }, {
    path: "/mail/:userid?/:token?",
    component: _59a0e81e,
    name: "mail-userid-token"
  }, {
    path: "/",
    component: _70946188,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
