import Vue from 'vue'
import Router from 'vue-router'
import BookIndex from "../components/BookIndex";
import BookAdd from "../components/BookAdd";
import BookUpdate from "../components/BookUpdate";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: BookIndex
    },
    {
      path: '/index',
      component: BookIndex,
    },
    {
      path: '/add',
      component: BookAdd
    },
    {
      path: '/update',
      name: 'update',
      component: BookUpdate
    },

  ]
})
