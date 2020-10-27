import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import User from "../components/User";
import Student from "../components/Student";
import UserAdd from "../components/UserAdd";
import UserEdit from "../components/UserEdit";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home',
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/user',
      component: User,
      children:[
        {
          path:'userAdd', //userAdd前不需要加'/'
          component:UserAdd,
        },
        {
          path: 'userEdit',
          component: UserEdit,
        }
      ]
    },
    {
      path: '/student',
      component: Student,
    },


  ]
})
