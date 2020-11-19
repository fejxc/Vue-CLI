import Vue from 'vue'
import Router from 'vue-router'
import test03 from "../components/test03"
import test02 from "../components/test02";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/03',
      component: test03
    },
    {
      path: '/02',
      component: test02
    }
  ]
})
