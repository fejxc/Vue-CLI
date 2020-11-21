import Vue from 'vue'
import Router from 'vue-router'
import Index from "../../../element_users/src/components/Index";
import BookIndex from "../components/BookIndex";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: BookIndex
    }
  ]
})
